import sys, os
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(CURRENT_DIR)
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

from scripts.academic_harvester import search_crossref, filter_candidate_papers
from scripts.produce_grounded_modules import generate_grounded_module_content, slugify, KNOWLEDGE_DIR
from backend.app.rag.registry import KnowledgeRegistry
from backend.app.rag.validator import validate_module_content

TARGET = 5000
reg = KnowledgeRegistry()

import sqlite3
with sqlite3.connect(reg.db_path) as conn:
    curr = conn.execute("SELECT COUNT(*) FROM knowledge_registry").fetchone()[0]


needed = TARGET - curr
print(f"Current count: {curr}. Generating final {needed} modules to hit exactly 5,000...")

if needed <= 0:
    print("Already at or above 5,000!")
    sys.exit(0)

queries = [
    ("Human Factors & Cognitive Ergonomics", "industrial engineering ergonomics biomechanics posture fatigue human factors"),
    ("Supply Chain Management & Logistics Engineering", "supply chain resilience disruption risk logistics multimodal transportation"),
    ("Continuous Improvement & Lean Six Sigma", "lean manufacturing six sigma value stream mapping setup reduction smed kaizen"),
    ("Quality Engineering & Reliability Systems", "statistical process control multivariate control chart process capability six sigma"),
    ("Operations Research & Large-Scale Optimization", "integer programming network flow branch and bound column generation optimization"),
    ("Manufacturing Systems & Cyber-Physical Production", "cyber physical production systems industrial internet of things smart factory mes"),
    ("Maintenance Engineering & Asset Life Cycle", "predictive maintenance condition monitoring vibration analysis remaining useful life"),
    ("Industrial Energy Management & Decarbonization", "industrial energy efficiency decarbonization pinch analysis waste heat recovery"),
    ("Safety Engineering & Risk Management", "occupational health safety hazop failure mode effects analysis risk assessment"),
    ("Facilities Planning & Material Handling", "facility layout planning automated guided vehicles warehouse material handling"),
]

generated_final = 0
for domain, query in queries:
    if generated_final >= needed:
        break
    print(f"\nQuerying: {query}...")
    papers = search_crossref(query, limit=20)
    novel = filter_candidate_papers(papers, registry=reg)
    print(f"Found {len(novel)} novel verified papers.")
    
    for p in novel:
        if generated_final >= needed:
            break
        module_id = reg.get_next_module_id()
        p_title = p.get("title", "")
        p_doi = p.get("doi")
        p_authors = p.get("authors", "")
        p_year = p.get("year", 2024)
        p_venue = p.get("venue", "")
        slug = slugify(p_title)
        filename = f"{module_id}_{slug}.md"
        filepath = os.path.join(KNOWLEDGE_DIR, filename)
        
        content = generate_grounded_module_content(
            module_id=module_id,
            domain=domain,
            paper=p,
            sec_paper=None,
            use_llm=False
        )
        
        is_valid, errors = validate_module_content(content)
        if not is_valid:
            print(f"Validation failed for {p_title}: {errors}")
            continue
            
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
            
        citation = f"{p_authors} ({p_year}). {p_venue}. DOI: {p_doi}"
        full_title = f"{domain}: {p_title}"
        registered = reg.register_module(
            module_id=module_id,
            title=full_title,
            doi=p_doi,
            isbn=None,
            domain=domain,
            topic_key=domain.lower().replace(" ", "_"),
            citation=citation,
            status="verified"
        )
        if registered:
            generated_final += 1
            print(f"[+] Final Module {module_id} registered: {filename}")
        else:
            if os.path.exists(filepath):
                os.remove(filepath)

with sqlite3.connect(reg.db_path) as conn:
    final_count = conn.execute("SELECT COUNT(*) FROM knowledge_registry").fetchone()[0]
print(f"\n=======================================================")
print(f"🎉 FINAL TOTAL MODULES IN REGISTRY: {final_count}")
print(f"=======================================================")
