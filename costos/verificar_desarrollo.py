"""Verifica estimación de desarrollo desde artefactos sanitizados. Jorge Valencia.
Uso desde la raíz: python costos/verificar_desarrollo.py
Solo biblioteca estándar. No red, credenciales ni modificaciones de archivos.
"""
from pathlib import Path
from decimal import Decimal,ROUND_CEILING
import json,csv,hashlib,re
repo=Path(__file__).resolve().parent.parent
prompts=sorted((repo/'agentes/especialistas').glob('*/instrucciones_base.txt'))+[repo/'agentes/voz/prompt_activo.txt',repo/'agentes/Orquestador_Jorge_Valencia.md']
skills=sorted((repo/'skills').glob('*/SKILL.md'))
standalone=[p.read_text(encoding='utf-8-sig') for p in prompts+skills]
seen=set();artifacts=[];dedup={'bloques_codigo_repetidos_omitidos':0,'bibliotecas_comunes_omitidas':0,'nodo_snapshots_skills_excluido':0}
def digest(s):return hashlib.sha256(s.encode('utf-8')).hexdigest()
def add(stage,label,text,paths):
 if not text.strip():return
 artifacts.append({'etapa':stage,'artefacto':label,'caracteres':len(text),'fuente':'; '.join(paths),'sha256_texto_contado':digest(text)})
for p in prompts:add('desarrollo_prompts',p.parent.name+'/'+p.name,p.read_text(encoding='utf-8-sig'),[p.relative_to(repo).as_posix()])
for p in skills:add('desarrollo_skills',p.parent.name+'/'+p.name,p.read_text(encoding='utf-8-sig'),[p.relative_to(repo).as_posix()])
for p in sorted((repo/'n8n').glob('0[1-4]_*.json')):
 j=json.loads(p.read_text(encoding='utf-8-sig'));chunks=[]
 for n in j['nodes']:
  code=n.get('parameters',{}).pop('jsCode',None)
  if not code:continue
  if 'Cargar skills' in n['name']:
   dedup['nodo_snapshots_skills_excluido']+=1;continue
  # Remove exact instruction copies and repeated library prefixes before counting code.
  for text in standalone:
   code=code.replace(text,'').replace(json.dumps(text,ensure_ascii=False)[1:-1],'')
  if code.startswith('// RH-LIB') and '})();' in code:
   end=code.index('})();')+5;library=code[:end];code=code[end:]
   h=digest(library)
   if h not in seen:seen.add(h);chunks.append(library)
   else:dedup['bibliotecas_comunes_omitidas']+=1
  h=digest(code)
  if h in seen:dedup['bloques_codigo_repetidos_omitidos']+=1;continue
  seen.add(h);chunks.append(code)
 # Node IDs, UI layout and credentials are not development instructions/code.
 def clean(x):
  if isinstance(x,dict):return {k:clean(v) for k,v in x.items() if k not in ['id','webhookId','position','credentials','pinData','meta','versionId']}
  if isinstance(x,list):return [clean(v) for v in x]
  if isinstance(x,str):
   for t in standalone:x=x.replace(t,'[instrucción contada por separado]')
  return x
 add('desarrollo_n8n_estructura',p.stem+' / estructura',json.dumps(clean(j),ensure_ascii=False,separators=(',',':')),[p.relative_to(repo).as_posix()])
 add('desarrollo_codigo_n8n',p.stem+' / código único','\n'.join(chunks),[p.relative_to(repo).as_posix()])
for name in ['index.html','styles.css','app.js','metrics.js']:
 p=repo/'web'/name;add('desarrollo_codigo_web',name,p.read_text(encoding='utf-8-sig'),[p.relative_to(repo).as_posix()])

rows=list(csv.DictReader((repo/'costos/desarrollo_estimado.csv').open(encoding='utf-8-sig',newline='')))
assert len(rows)==len(artifacts)
total=Decimal('0')
for row,a in zip(rows,artifacts):
    assert row['artefacto']==a['artefacto']
    assert row['sha256_texto_contado']==a['sha256_texto_contado']
    assert int(row['caracteres'])==a['caracteres']
    salida=(Decimal(a['caracteres'])/4).to_integral_value(rounding=ROUND_CEILING)
    entrada=(salida*Decimal('.5')).to_integral_value(rounding=ROUND_CEILING)
    costo=(entrada*Decimal('1.25')+salida*10)/1000000
    assert int(row['tokens_entrada'])==entrada and int(row['tokens_salida'])==salida
    assert Decimal(row['costo_equivalente_api_usd'])==costo
    total+=costo
print(json.dumps({'autor':'Jorge Valencia','unidades_estimadas':len(rows),'caracteres':sum(a['caracteres'] for a in artifacts),'equivalente_api_usd':str(total),'metodo':'Proxy caracteres, no uso nativo medido ni cargo Plus','deduplicacion':dedup},ensure_ascii=False))
