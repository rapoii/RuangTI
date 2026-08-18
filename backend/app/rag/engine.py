import os
import re
import json
import sqlite3
from typing import List, Dict, Any

DB_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "data", "ruangti_rag.db")
KNOWLEDGE_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "knowledge")

# Thesaurus & Sinonim Teknik Industri untuk Query Expansion
IE_THESAURUS = {
    "ptlf": ["tata letak fasilitas", "plant layout", "from-to chart", "activity relationship chart", "arc", "mhc", "material handling cost", "craft", "muther", "slp"],
    "tata letak": ["ptlf", "plant layout", "from-to chart", "activity relationship chart", "arc", "mhc", "craft", "slp"],
    "mhc": ["ongkos material handling", "material handling cost", "from-to chart", "ptlf", "jarak rectilinear"],
    "arc": ["activity relationship chart", "tcr", "total closeness rating", "muther", "closeness rating", "sandi a e i o u x"],
    "craft": ["layout optimization", "pairwise interchange", "ptlf", "heuristic layout"],
    "spc": ["statistical process control", "peta kendali", "control chart", "x-bar r", "x-bar s", "ucl", "lcl", "nelson rules", "montgomery"],
    "peta kendali": ["spc", "statistical process control", "x-bar r", "x-bar s", "ucl", "lcl", "nelson rules", "cp", "cpk"],
    "six sigma": ["dpmo", "dmaic", "cpk", "sigma level", "quality control", "cacat per sejuta peluang"],
    "dpmo": ["defects per million opportunities", "six sigma", "dpo", "yield", "cacat"],
    "cpk": ["process capability", "kapabilitas proses", "cp", "usl", "lsl", "montgomery"],
    "waktu baku": ["time study", "jam henti", "waktu siklus", "waktu normal", "westinghouse", "allowance", "kelonggaran", "barnes"],
    "jam henti": ["stopwatch time study", "waktu baku", "uji keseragaman data", "uji kecukupan data", "westinghouse"],
    "westinghouse": ["rating factor", "penyesuaian performa", "skill effort conditions consistency", "waktu normal"],
    "allowance": ["kelonggaran", "waktu baku", "ilo allowance", "fatigue", "personal needs"],
    "reba": ["rapid entire body assessment", "biomekanika", "postur kerja", "ergonomi", "risiko musculoskeletal"],
    "rula": ["rapid upper limb assessment", "ergonomi", "postur kerja", "anggota gerak atas"],
    "antropometri": ["persentil 5 50 95", "dimensi stasiun kerja", "ergonomi desain meja", "clearance reach"],
    "eoq": ["economic order quantity", "persediaan", "inventory control", "holding cost", "ordering cost", "tic"],
    "rop": ["reorder point", "titik pemesanan kembali", "safety stock", "lead time", "service level z"],
    "safety stock": ["persediaan pengaman", "rop", "service level", "faktor z normal", "lead time"],
    "simplex": ["simpleks", "linear programming", "pemrograman linier", "fungsi tujuan", "slack variable", "shadow price", "taha"],
    "transportasi": ["model distribusi", "vam", "vogel", "modi", "stepping stone", "north west corner"],
    "antrian": ["queueing theory", "m/m/1", "laju kedatangan lambda", "laju pelayanan mu", "utilisasi rho", "panjang antrian lq"],
    "npv": ["net present value", "present worth", "kelayakan investasi", "marr", "cash flow", "ekonomi teknik"],
    "irr": ["internal rate of return", "suku bunga pengembalian", "npv 0", "ekonomi teknik", "interpolasi linier"],
    "depresiasi": ["penyusutan aset", "straight line", "double declining balance", "nilai buku", "salvage value"],
    "oee": ["overall equipment effectiveness", "tpm", "total productive maintenance", "availability", "performance", "quality", "six big losses", "nakajima", "jipm"],
    "tpm": ["total productive maintenance", "oee", "six big losses", "jishu hozen", "breakdown loss", "smed"],
    "niosh": ["revised niosh lifting equation", "rnle", "rwl", "recommended weight limit", "lifting index", "hm vm dm am fm cm", "waters 1993", "manual handling", "low back pain"],
    "rwl": ["recommended weight limit", "niosh", "lifting index", "beban angkat", "ergonomi fisik"],
    "line balancing": ["keseimbangan lini", "assembly line", "ranked positional weight", "rpw", "helgeson birnie", "line efficiency", "balance delay", "smoothness index", "takt time"],
    "rpw": ["ranked positional weight", "line balancing", "helgeson birnie", "positional weight", "precedence diagram"],
    "ahp": ["analytic hierarchy process", "saaty", "perbandingan berpasangan", "pairwise comparison", "consistency ratio", "cr", "ci", "random index", "eigenvector", "mcdm"],
    "mcdm": ["multi-criteria decision making", "ahp", "topsis", "bobot prioritas", "saaty"],
    "vsm": ["value stream mapping", "peta aliran nilai", "lean manufacturing", "takt time", "lead time", "cycle time", "muda", "value added time", "rother shook", "current state map", "future state map"],
    "lean manufacturing": ["lean production", "vsm", "value stream mapping", "pemborosan", "muda", "mura", "muri", "toyota production system", "tps", "pull system", "kanban"],
    "muda": ["pemborosan", "8 wastes", "downtime", "defect", "overproduction", "waiting", "inventory", "transportation", "motion", "extra processing"],
    "industry 4.0": ["smart manufacturing", "revolusi industri keempat", "digital twin", "kembaran digital", "iot", "iiot", "cyber physical systems", "cps", "big data"],
    "digital twin": ["kembaran digital", "smart manufacturing", "industry 4.0", "virtual commissioning", "real-time simulation", "cyber physical systems"],
    "pdm": ["predictive maintenance", "pemeliharaan prediktif", "machine learning", "lstm", "rul", "remaining useful life", "condition based maintenance", "oee improvement", "smart manufacturing"],
    "industry 5.0": ["industri 5.0", "human centric", "human-in-the-loop", "cobot", "collaborative robot", "human robot collaboration", "hrc", "resilience", "human digital twin", "sustainability"],
    "cobot": ["collaborative robot", "robot kolaboratif", "human robot collaboration", "hrc", "industry 5.0", "ergonomi kognitif", "wearable sensors"],
    "circular economy": ["ekonomi sirkular", "circular supply chain", "cscm", "lca", "life cycle assessment", "iso 14040", "cradle to cradle", "9r strategy", "karbon net zero", "green scm"],
    "lca": ["life cycle assessment", "analisis daur hidup", "iso 14040", "iso 14044", "gwp", "global warming potential", "jejak karbon", "lci", "lcia", "circular economy"],
    "simulasi": ["discrete event simulation", "des", "pemodelan simulasi", "averill law", "arena", "promodel", "flexsim", "verifikasi validasi", "uji t-test", "warm-up period", "replikasi"],
    "des": ["discrete event simulation", "simulasi diskrit", "antrian", "buffer", "averill law", "entities", "resources", "steady state"],
    "penjadwalan": ["production scheduling", "flow shop", "job shop", "makespan", "cmax", "aturan johnson", "johnson rule", "neh", "nawaz enscore ham", "spt", "edd", "cds", "tardiness"],
    "scheduling": ["production scheduling", "flow shop", "job shop", "makespan", "aturan johnson", "neh algorithm", "spt", "edd", "critical ratio", "flow time"],
    "neh": ["nawaz enscore ham", "neh algorithm", "flow shop scheduling", "makespan", "permutation flow shop", "johnson rule"]
}

def clean_text(text: str) -> str:
    return re.sub(r'\s+', ' ', text).strip()

def tokenize(text: str) -> List[str]:
    words = re.findall(r'[a-zA-Z0-9_\-\$\\\%]+', text.lower())
    return [w for w in words if len(w) > 1]

def expand_query(query: str) -> str:
    """
    Ekspansi query menggunakan IE Thesaurus agar menangkap sinonim & istilah teknis standar industri.
    """
    q_lower = query.lower()
    terms = set(tokenize(q_lower))
    
    expanded_terms = set(terms)
    for key, synonyms in IE_THESAURUS.items():
        if key in q_lower or any(t in terms for t in key.split()):
            for syn in synonyms:
                expanded_terms.update(tokenize(syn))

    # Bangun query FTS5 berbobot
    fts_parts = []
    for t in list(expanded_terms)[:15]:
        if len(t) > 1:
            fts_parts.append(f'"{t}"*')
            
    return " OR ".join(fts_parts) if fts_parts else query

class IndustrialEngineeringRAG:
    def __init__(self, db_path: str = DB_PATH):
        self.db_path = db_path
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("""
                CREATE TABLE IF NOT EXISTS knowledge_chunks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    topic_title TEXT,
                    reference_source TEXT,
                    chunk_index INTEGER,
                    content TEXT,
                    has_formula INTEGER,
                    token_count INTEGER,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            c.execute("""
                CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_fts USING fts5(
                    topic_title,
                    reference_source,
                    content,
                    tokenize='porter unicode61'
                )
            """)
            conn.commit()

    def build_index(self, knowledge_dir: str = KNOWLEDGE_DIR):
        """
        Scan modul ilmu teknik industri murni & buku referensi internasional, indeks ke SQLite FTS5.
        """
        if not os.path.exists(knowledge_dir):
            print(f"Directory not found: {knowledge_dir}")
            return

        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("DELETE FROM knowledge_chunks")
            c.execute("DELETE FROM knowledge_fts")
            conn.commit()

            indexed_files = 0
            indexed_chunks = 0

            for root, _, files in os.walk(knowledge_dir):
                for file in files:
                    if not file.endswith(".md"):
                        continue
                    full_path = os.path.join(root, file)

                    try:
                        with open(full_path, "r", encoding="utf-8") as f:
                            text = f.read()
                    except Exception as e:
                        print(f"Error reading {full_path}: {e}")
                        continue

                    # Extract Topic Title
                    title_match = re.search(r'^#\s+(.+)$', text, re.MULTILINE)
                    main_topic = title_match.group(1) if title_match else file.replace(".md", "").title()

                    # Extract Reference Source
                    ref_match = re.search(r'\*\*Sumber Referensi:\*\*\s*(.+)$', text, re.MULTILINE)
                    ref_source = ref_match.group(1) if ref_match else "Standard Industrial Engineering Textbook & Handbook"

                    # Chunk by Sections (##)
                    sections = re.split(r'\n(?=##+\s+)', text)
                    chunk_idx = 0

                    for section in sections:
                        sec_text = section.strip()
                        if len(sec_text) < 40:
                            continue

                        sub_match = re.search(r'^##+\s+(.+)$', sec_text, re.MULTILINE)
                        chunk_topic = f"{main_topic} — {sub_match.group(1)}" if sub_match else main_topic

                        has_formula = 1 if "$$" in sec_text or "$" in sec_text or "∑" in sec_text or "√" in sec_text else 0
                        tokens = tokenize(sec_text)

                        c.execute("""
                            INSERT INTO knowledge_chunks (topic_title, reference_source, chunk_index, content, has_formula, token_count)
                            VALUES (?, ?, ?, ?, ?, ?)
                        """, (chunk_topic, ref_source, chunk_idx, sec_text, has_formula, len(tokens)))

                        chunk_id = c.lastrowid

                        c.execute("""
                            INSERT INTO knowledge_fts (rowid, topic_title, reference_source, content)
                            VALUES (?, ?, ?, ?)
                        """, (chunk_id, chunk_topic, ref_source, sec_text))

                        chunk_idx += 1
                        indexed_chunks += 1

                    indexed_files += 1

            conn.commit()
            print(f"✅ RAG Indexed: {indexed_files} pure IE master modules, {indexed_chunks} semantic sections indexed.")

    def search(self, query: str, top_k: int = 3) -> List[Dict[str, Any]]:
        """
        High-Precision Industrial Engineering BM25 + Thesaurus Re-ranking.
        """
        fts_query = expand_query(query)

        results = []
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row
            c = conn.cursor()
            try:
                c.execute("""
                    SELECT c.id, c.topic_title, c.reference_source, c.content, c.has_formula, bm25(knowledge_fts) as rank
                    FROM knowledge_fts f
                    JOIN knowledge_chunks c ON f.rowid = c.id
                    WHERE knowledge_fts MATCH ?
                    ORDER BY rank ASC
                    LIMIT ?
                """, (fts_query, top_k * 3))

                rows = c.fetchall()

                q_tokens = set(tokenize(query.lower()))
                scored_rows = []
                for row in rows:
                    content_tokens = tokenize(row["content"].lower())
                    overlap = sum(1 for t in q_tokens if t in content_tokens)
                    formula_multiplier = 1.3 if row["has_formula"] else 1.0
                    
                    final_score = (1.0 / (abs(row["rank"]) + 1.0)) * (overlap + 2) * formula_multiplier
                    scored_rows.append((final_score, row))

                scored_rows.sort(key=lambda x: x[0], reverse=True)

                for score, row in scored_rows[:top_k]:
                    results.append({
                        "id": row["id"],
                        "title": row["topic_title"],
                        "source": row["reference_source"],
                        "content": row["content"],
                        "has_formula": bool(row["has_formula"]),
                        "score": round(score, 3)
                    })

            except Exception as e:
                print(f"Search error: {e}")
                # Fallback to pure substring match
                first_word = tokenize(query)[0] if tokenize(query) else "teknik"
                c.execute("""
                    SELECT id, topic_title, reference_source, content, has_formula
                    FROM knowledge_chunks
                    WHERE content LIKE ? OR topic_title LIKE ?
                    LIMIT ?
                """, (f"%{first_word}%", f"%{first_word}%", top_k))
                for row in c.fetchall():
                    results.append({
                        "id": row["id"],
                        "title": row["topic_title"],
                        "source": row["reference_source"],
                        "content": row["content"],
                        "has_formula": bool(row["has_formula"]),
                        "score": 1.0
                    })

        return results

rag_engine = IndustrialEngineeringRAG()

if __name__ == "__main__":
    print("Rebuilding RAG with Pure Industrial Engineering Master Modules...")
    rag_engine.build_index()
    print("\n--- Test 1: Query 'cara hitung waktu baku dan allowance jam henti' ---")
    for r in rag_engine.search("cara hitung waktu baku dan allowance jam henti", top_k=2):
        print(f"[{r['score']}] {r['title']} -> Sumber: {r['source']}")
    print("\n--- Test 2: Query 'tabel batas kendali spc x-bar r konstanta A2 D4' ---")
    for r in rag_engine.search("tabel batas kendali spc x-bar r konstanta A2 D4", top_k=2):
        print(f"[{r['score']}] {r['title']} -> Sumber: {r['source']}")
