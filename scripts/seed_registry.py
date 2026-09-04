import os
import sys
import glob
import re

# Ensure project root is in sys.path when running script directly
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from backend.app.rag.registry import KnowledgeRegistry

reg = KnowledgeRegistry()
reg.init_db()

files = glob.glob(os.path.join(project_root, 'backend', 'knowledge', '*.md'))
print(f"Seeding {len(files)} existing modules into registry...")

seeded = 0
for f in files:
    fname = os.path.basename(f)
    mid = fname.split('_')[0]
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read(3000)
    
    title_m = re.search(r'^#\s+(.+)', c, re.MULTILINE)
    title = title_m.group(1) if title_m else fname
    
    doi_m = re.search(r'doi(?:\.org/|:?\s*)(10\.\d{4,9}/[-._;()/:A-Za-z0-9]+)', c, re.IGNORECASE)
    doi = doi_m.group(1).rstrip(').,;') if doi_m else None
    
    reg.register_module(
        module_id=mid,
        title=title,
        doi=doi,
        isbn=None,
        domain="Industrial Engineering",
        topic_key=fname,
        citation="Archived Module Seed"
    )
    seeded += 1

print(f"Successfully seeded {seeded} modules.")
