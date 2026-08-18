import os
import re
import sqlite3
from typing import List, Dict, Tuple, Optional

DB_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "data", "ruangti_rag.db")
KNOWLEDGE_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "knowledge")

# ============================================================
# IE THESAURUS v3.0 — 300 Modul Master Teknik Industri
# ============================================================
IE_THESAURUS = {
    # --- Core IE (Modul 1-50) ---
    "ptlf": ["tata letak fasilitas", "plant layout", "from-to chart", "activity relationship chart", "arc", "mhc", "material handling cost", "craft", "muther", "slp"],
    "spc": ["statistical process control", "peta kendali", "control chart", "x-bar r", "x-bar s", "ucl", "lcl", "nelson rules", "montgomery"],
    "six sigma": ["dpmo", "dmaic", "cpk", "sigma level", "quality control", "cacat per sejuta peluang"],
    "waktu baku": ["time study", "jam henti", "waktu siklus", "waktu normal", "westinghouse", "allowance", "kelonggaran", "barnes"],
    "reba": ["rapid entire body assessment", "biomekanika", "postur kerja", "ergonomi", "risiko musculoskeletal"],
    "rula": ["rapid upper limb assessment", "ergonomi", "postur kerja", "anggota gerak atas"],
    "eoq": ["economic order quantity", "persediaan", "inventory control", "holding cost", "ordering cost", "tic"],
    "rop": ["reorder point", "titik pemesanan kembali", "safety stock", "lead time", "service level z"],
    "game theory": ["teori permainan", "nash equilibrium", "stackelberg", "shapley value", "double marginalization"],
    "supply chain": ["rantai pasok", "logistik", "bullwhip effect", "scm coordination"],
    "simplex": ["simpleks", "linear programming", "pemrograman linier", "fungsi tujuan", "shadow price"],
    "antrian": ["queueing theory", "m/m/1", "laju kedatangan lambda", "laju pelayanan mu", "utilisasi rho"],
    "npv": ["net present value", "present worth", "kelayakan investasi", "marr", "cash flow"],
    "irr": ["internal rate of return", "suku bunga pengembalian", "npv 0", "ekonomi teknik"],
    "oee": ["overall equipment effectiveness", "tpm", "availability", "performance", "quality", "six big losses"],
    "niosh": ["revised niosh lifting equation", "rnle", "rwl", "recommended weight limit", "lifting index"],
    "line balancing": ["keseimbangan lini", "assembly line", "rpw", "helgeson birnie", "takt time"],
    "ahp": ["analytic hierarchy process", "saaty", "pairwise comparison", "consistency ratio", "mcdm"],
    "vsm": ["value stream mapping", "peta aliran nilai", "lean manufacturing", "muda", "takt time"],
    "lean manufacturing": ["lean production", "vsm", "muda", "mura", "muri", "toyota production system", "tps", "kanban"],
    "industry 4.0": ["smart manufacturing", "digital twin", "iot", "iiot", "cyber physical systems", "cps"],
    "digital twin": ["kembaran digital", "smart manufacturing", "virtual commissioning", "real-time simulation"],
    "pdm": ["predictive maintenance", "pemeliharaan prediktif", "lstm", "rul", "condition based maintenance"],
    "industry 5.0": ["human centric", "cobot", "collaborative robot", "hrc", "resilience", "sustainability"],
    "circular economy": ["ekonomi sirkular", "lca", "life cycle assessment", "iso 14040", "cradle to cradle"],
    "simulasi": ["discrete event simulation", "des", "arena", "promodel", "flexsim", "averill law"],
    "penjadwalan": ["production scheduling", "flow shop", "job shop", "makespan", "johnson rule", "neh"],
    "k3": ["keselamatan kesehatan kerja", "hiradc", "hazop", "jsa", "iso 45001", "matriks risiko"],
    "rekayasa nilai": ["value engineering", "fast diagram", "lawrence miles", "function analysis"],
    "qfd": ["quality function deployment", "house of quality", "hoq", "voice of customer", "voc"],
    "dfma": ["design for manufacture and assembly", "boothroyd dewhurst", "part count reduction"],
    "triz": ["altshuller", "inventive principles", "matriks kontradiksi", "kontradiksi teknis"],
    "keandalan": ["reliability", "failure rate", "weibull", "mtbf", "mttr", "rbd", "fta", "fmeca"],
    "cpm": ["critical path method", "lintasan kritis", "forward pass", "backward pass", "total float"],
    "evm": ["earned value management", "planned value", "earned value", "cpi", "spi"],
    "metaheuristik": ["genetic algorithm", "pso", "simulated annealing", "tabu search", "optimasi np-hard"],
    "mrp": ["material requirements planning", "bom explosion", "bill of materials", "mps"],
    "group technology": ["cellular manufacturing", "part families", "machine cells", "rank order clustering"],
    "doe": ["design of experiments", "taguchi", "faktorial", "anova", "signal to noise ratio", "loss function"],
    "vrp": ["vehicle routing problem", "clarke wright savings", "optimasi distribusi", "logistik"],
    "nasa tlx": ["beban kerja mental", "mental workload", "ergonomi kognitif", "hart staveland"],
    "work sampling": ["uji petik kerja", "sampling kerja", "proporsi produktif"],
    "most": ["maynard operation sequence technique", "mtm", "tmu", "predetermined motion time"],
    "lokasi fasilitas": ["facility location", "center of gravity", "p-median", "network design"],
    "reverse logistics": ["logistik balik", "closed loop supply chain", "clsc", "remanufacturing"],
    "msa": ["measurement systems analysis", "gage r&r", "repeatability", "reproducibility", "ndc"],
    "cost of quality": ["paf model", "prevention appraisal failure", "conformance cost", "non-conformance cost"],
    "acceptance sampling": ["oc curve", "aql", "ltpr", "mil-std-105e", "single double sampling"],
    "demand forecasting": ["peramalan permintaan", "holt-winters", "exponential smoothing", "mad", "mape"],
    "bullwhip effect": ["efek cambuk", "variance amplification", "beer game", "information distortion"],
    "tqm": ["total quality management", "juran", "deming", "continuous improvement", "kaizen"],
    "iso 9001": ["quality management system", "qms", "pdca", "risk based thinking"],
    "activity based costing": ["abc", "tdabc", "cost driver", "overhead allocation"],
    "multivariate spc": ["hotelling t2", "mewma", "mcusum", "multivariate control chart"],
    "dfss": ["design for six sigma", "dmadv", "iddov", "ctq"],
    "multi echelon inventory": ["meio", "guaranteed service model", "stochastic inventory", "network optimization"],
    "sustainable manufacturing": ["green manufacturing", "carbon footprint", "energy efficiency", "ghg protocol"],
    "macroergonomics": ["sociotechnical systems", "organizational design", "mead", "participatory ergonomics"],
    "facility layout": ["craft algorithm", "aldep", "corelap", "systematic layout planning"],
    "maintenance": ["preventive maintenance", "corrective maintenance", "cbm", "rcm", "fmea"],

    # --- Advanced OR & SCM (Modul 51-134) ---
    "column generation": ["dantzig-wolfe decomposition", "master problem", "subproblem pricing", "set covering"],
    "benders decomposition": ["benders cuts", "optimasi stokastik", "scenario analysis"],
    "branch and price": ["branch and cut", "set partitioning", "integer programming"],
    "dynamic programming": ["value iteration", "policy iteration", "bellman equation", "mdp"],
    "kkt conditions": ["karush-kuhn-tucker", "nonlinear programming", "lagrange multiplier"],
    "pareto front": ["multi-objective optimization", "nsga2", "non-dominated sorting"],
    "semi markov": ["smdp", "maintenance optimization", "semi-markov decision process"],
    "ctmc": ["continuous time markov chains", "birth death process", "queuing"],
    "nhpp": ["nonhomogeneous poisson processes", "warranty analysis", "reliability growth"],
    "max flow": ["edmonds-karp", "ford-fulkerson", "network flow", "min cut"],
    "quadratic assignment": ["qap", "facility layout optimization", "plant layout"],
    "two echelon vrp": ["2e-vrp", "urban logistics", "multi-echelon routing"],
    "electric vrp": ["evrp", "charging infrastructure", "green routing"],
    "dial a ride": ["darp", "transit scheduling", "door to door transport"],
    "inventory routing": ["irp", "vendor managed inventory", "cross docking"],
    "hub and spoke": ["hub location problem", "network design optimization"],
    "supply chain resilience": ["ripple effect", "disruption management", "robust scm"],
    "combinatorial auction": ["vcg mechanism", "procurement auction", "reverse auction"],
    "contract theory": ["wholesale contract", "buyback contract", "revenue sharing"],
    "dynamic pricing": ["machine learning pricing", "demand segmentation", "revenue management"],
    "kraljic matrix": ["strategic sourcing", "supplier segmentation", "mcda"],
    "berth allocation": ["bap", "quay crane scheduling", "port terminal"],
    "synchromodal": ["multi-modal freight", "real time routing", "intermodal"],
    "perishable inventory": ["deterioration model", "fresh food logistics", "shelf life"],
    "agent based modeling": ["abm", "supply chain simulation", "disruption simulation"],
    "cooperative games": ["nucleolus", "core solution", "shapley value", "bankruptcy game"],
    "data envelopment analysis": ["dea", "efficiency frontier", "ccr model", "bcc model"],
    "topsis": ["technique for order preference", "ideal solution", "mcdm ranking"],
    "fuzzy logic": ["fuzzy set", "membership function", "defuzzification", "decision making"],
    "petri nets": ["place transition", "token", "reachability graph", "manufacturing modeling"],
    "constraint programming": ["cp", "domain reduction", "propagation", "combinatorial optimization"],

    # --- Manufacturing & Quality (Modul 135-167) ---
    "quick response manufacturing": ["qrm", "hmlv", "high mix low volume", "system dynamics"],
    "mixed model assembly": ["goal chasing", "sequencing", "level schedule"],
    "flexible job shop": ["fjssp", "setup times", "routing flexibility"],
    "flow shop": ["neh algorithm", "permutation flow shop", "makespan minimization"],
    "shifting bottleneck": ["job shop scheduling", "bottleneck identification", "decomposition"],
    "heijunka": ["production leveling", "drum buffer rope", "toc", "theory of constraints"],
    "polca": ["paired-cell overlapping loops", "card-based control", "cellular manufacturing"],
    "iso 23247": ["digital twin architecture", "manufacturing framework"],
    "vision inspection": ["edge ai", "quality control", "defect detection", "deep learning"],
    "agv routing": ["amr fleet dispatching", "traffic control", "collision avoidance"],
    "asrs": ["automated storage retrieval", "travel time models", "warehouse optimization"],
    "3d bin packing": ["container loading", "stability constraint", "nesting algorithm"],
    "additive manufacturing": ["3d printing scheduling", "am supply chain", "powder bed fusion"],
    "dfma boothroyd": ["design efficiency", "part count reduction", "assembly cost"],
    "axiomatic design": ["independence axiom", "information axiom", "suh", "design matrix"],
    "taguchi robust": ["signal to noise ratio", "sn ratio", "loss function", "orthogonal array"],
    "tolerance stackup": ["worst case", "rss", "root sum square", "monte carlo tolerance"],
    "profile monitoring": ["functional data", "linear profile", "nonlinear profile spc"],
    "high yield quality": ["g-chart", "h-chart", "rare defect", "geometric distribution"],
    "rul estimation": ["remaining useful life", "lstm", "wiener process", "prognostics"],
    "vibration analysis": ["fft", "frequency spectrum", "bearing fault", "machinery diagnostics"],
    "acoustic emission": ["ae sensor", "crack detection", "condition monitoring"],
    "iso 15066": ["cobot safety", "force limit", "speed limit", "human robot collaboration"],
    "mes isa95": ["manufacturing execution system", "cim", "opc ua", "shop floor control"],
    "ore teep": ["overall resource effectiveness", "total effective equipment performance"],
    "smed": ["single minute exchange of die", "setup reduction", "internal external setup"],
    "poka yoke": ["mistake proofing", "sensor gate", "zero quality control", "zqc"],

    # --- Ergonomics & Safety (Modul 168-200) ---
    "situation awareness": ["endsley model", "perception comprehension projection", "cognitive ergonomics"],
    "mental workload": ["nasa-tlx", "swat", "hrv", "cognitive load"],
    "signal detection": ["d-prime", "beta criterion", "roc curve", "inspection performance"],
    "human reliability": ["heart", "therp", "human error probability", "cream"],
    "rasmussen srk": ["skill rule knowledge", "ecological interface design", "abstraction hierarchy"],
    "lumbar biomechanics": ["l5/s1", "compression force", "shear force", "niosh lifting"],
    "digital human modeling": ["siemens jack", "dhm", "ergonomic workstation design"],
    "strain index": ["moore-garg", "upper extremity msd", "repetitive task risk"],
    "vibration iso": ["hand-arm vibration", "whole-body vibration", "iso 2631", "iso 5349"],
    "noise control": ["leq", "sound pressure level", "decibel addition", "reverberation"],
    "lighting design": ["lumen method", "ugr", "unified glare rating", "illuminance"],
    "heat stress": ["phs iso 7933", "ireq iso 11079", "wbgt", "thermal strain"],
    "fatigue modeling": ["rest allowance", "cumulative fatigue", "muscle endurance"],
    "swiss cheese": ["reason model", "safety climate", "latent failure", "active failure"],
    "hazop": ["hazard operability study", "guide words", "parameter deviation", "node analysis"],
    "lopa": ["layers of protection analysis", "sil", "iec 61508", "iec 61511", "risk reduction"],
    "qra": ["quantitative risk assessment", "fn curve", "individual risk", "societal risk"],
    "lev ventilation": ["local exhaust ventilation", "capture velocity", "duct friction", "hood design"],
    "ghs hazmat": ["globally harmonized system", "spill containment", "chemical classification"],
    "mci": ["material circularity indicator", "circularity metric", "ellen macarthur"],
    "lcc tco": ["life cycle costing", "total cost of ownership", "asset management"],
    "iso 50001": ["energy management", "sec", "specific energy consumption", "energy audit"],
    "ghg protocol": ["scope 1 scope 2 scope 3", "carbon accounting", "decarbonization roadmap"],
    "anp": ["analytic network process", "supermatrix", "inner dependence", "outer dependence"],
    "fuzzy ahp vikor": ["compromise ranking", "triangular fuzzy number", "regret measure"],
    "electre tri": ["multicriteria sorting", "outranking relation", "assignment procedure"],
    "incose vmodel": ["systems engineering", "requirements verification validation", "lifecycle"],
    "technology roadmapping": ["trm", "delphi method", "technology forecasting"],
    "project portfolio": ["knapsack optimization", "real options", "project selection"],
    "hoshin kanri": ["x matrix", "balanced scorecard", "policy deployment", "catchball"],
    "ip valuation": ["relief from royalty", "dcf", "technology transfer", "licensing"],
    "replacement analysis": ["defender challenger", "economic service life", "inflation adjustment"],
    "engineering ethics": ["code of conduct", "professional licensure", "public safety", "nspe"],

    # --- Simulation & Modeling (Modul 201-234) ---
    "discrete event simulation": ["des", "arena", "simpy", "anylogic", "event scheduling", "process interaction"],
    "continuous simulation": ["system dynamics", "stock flow", "differential equation", "ode solver"],
    "monte carlo": ["stochastic simulation", "random sampling", "confidence interval", "law of large numbers"],
    "simulation optimization": ["genetic algorithm simulation", "simulated annealing optimization", "response surface"],
    "verification validation": ["v&v", "conceptual model validity", "operational validity", "face validity"],
    "arena macro": ["vba arena", "automation interface", "custom module"],
    "anylogic behavioral": ["statechart", "agent behavior", "pedestrian modeling"],
    "simpy networkx": ["python simulation", "graph-based routing", "network simulation"],
    "sensitivity analysis": ["tornado diagram", "one-at-a-time", "global sensitivity", "sobol index"],
    "what-if analysis": ["scenario analysis", "discrete event what-if", "capacity planning"],
    "lean simulation": ["vsm simulation", "waste identification", "pull system simulation"],
    "vr manufacturing": ["virtual reality factory", "immersive training", "digital mockup"],
    "ar factory": ["augmented reality assembly", "hololens", "overlay instruction"],
    "metaverse industrial": ["industrial metaverse", "avatar collaboration", "persistent virtual space"],
    "ergonomics simulation": ["dhm simulation", "posture prediction", "biomechanical modeling"],
    "occupational health simulation": ["exposure modeling", "dose-response", "epidemiological simulation"],

    # --- Quality & Reliability Advanced (Modul 235-267) ---
    "tqm advanced": ["total quality management", "juran trilogy", "deming cycle", "quality culture"],
    "iso integrated": ["iso 9001", "iso 14001", "iso 45001", "iso 50001", "integrated management system"],
    "black belt advanced": ["six sigma black belt", "advanced statistics", "doe screening", "control plan"],
    "lean six sigma": ["kaizen blitz", "rapid improvement", "waste elimination", "variation reduction"],
    "fmea rpnm": ["risk priority number", "severity occurrence detection", "action priority"],
    "rbd advanced": ["reliability block diagram", "series parallel", "k-out-of-n", "redundancy"],
    "fta advanced": ["fault tree analysis", "minimal cut set", "importance measure", "dynamic fta"],
    "fmeca": ["failure mode effects criticality analysis", "criticality matrix", "risk ranking"],
    "rcm": ["reliability centered maintenance", "failure consequence", "maintenance strategy selection"],
    "tpm 2.0": ["autonomous maintenance", "jishu hozen", "focused improvement", "kobetsu kaizen"],
    "eight losses": ["tpm losses", "breakdown loss", "setup loss", "idling loss", "speed loss"],
    "creative problem solving": ["cps process", "divergent convergent thinking", "osborn-parnes"],
    "design for x": ["dfx", "design for manufacturability", "design for assembly", "design for sustainability"],

    # --- Global Engineering & Sustainability (Modul 268-300) ---
    "pmbok": ["project management body of knowledge", "knowledge areas", "process groups", "pmi"],
    "industrial hygiene": ["occupational health", "exposure assessment", "air sampling", "tlv pel"],
    "safety management": ["sms", "safety management system", "leading lagging indicators"],
    "hiradc": ["hazard identification risk assessment determining control", "risk matrix"],
    "fn curves": ["fatality negligibility", "societal risk criteria", "tolerable risk region"],
    "industrial ecology": ["material flow analysis", "industrial symbiosis", "eco-industrial park"],
    "green scm": ["environmental supply chain", "carbon logistics", "reverse logistics green"],
    "eco design": ["design for environment", "dfe", "life cycle design", "material selection"],
    "professional practice": ["engineering licensure", "pe exam", "ethics code", "continuing education"],
}


def expand_query(query: str) -> str:
    """
    Expand query using IE Thesaurus synonyms.
    v2.0 — supports bigram/phrase matching (e.g. "waktu baku", "six sigma",
    "line balancing") so multi-word IE concepts are recognized as single units.
    """
    query_lower = query.lower()
    tokens = query_lower.split()
    expanded = list(tokens)

    # Phase 1: Bigram / trigram phrase matching (check 3-word, then 2-word windows)
    matched_phrase_indices: set = set()  # track token positions already matched by phrase
    for window_size in (3, 2):
        for i in range(len(tokens) - window_size + 1):
            if any(j in matched_phrase_indices for j in range(i, i + window_size)):
                continue
            phrase = " ".join(tokens[i:i + window_size])
            for key, synonyms in IE_THESAURUS.items():
                if phrase == key or phrase in synonyms:
                    expanded.extend(synonyms)
                    expanded.append(key)
                    for j in range(i, i + window_size):
                        matched_phrase_indices.add(j)
                    break

    # Phase 2: Single-token matching (skip tokens already consumed by phrase)
    for idx, token in enumerate(tokens):
        if idx in matched_phrase_indices:
            continue
        for key, synonyms in IE_THESAURUS.items():
            if token == key or token in synonyms:
                expanded.extend(synonyms)
                expanded.append(key)

    return " ".join(list(dict.fromkeys(expanded)))


def chunk_markdown(content: str, module_title: str) -> List[Tuple[str, str]]:
    """Split markdown into semantic sections by ## headers."""
    chunks = []
    sections = re.split(r'\n(?=##\s)', content)
    for section in sections:
        section = section.strip()
        if len(section) < 50:
            continue
        header_match = re.match(r'^##\s+(.+)', section)
        header = header_match.group(1).strip() if header_match else "Overview"
        chunk_text = f"{module_title} — {header}\n{section}"
        chunks.append((header, chunk_text))
    return chunks


def build_index():
    """Build FTS5 index from all knowledge modules."""
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute("""
        CREATE VIRTUAL TABLE IF NOT EXISTS rag_fts USING fts5(
            module_id,
            section_title,
            content,
            tokenize='porter unicode61'
        )
    """)

    files = sorted([f for f in os.listdir(KNOWLEDGE_DIR) if f.endswith('.md')])
    total_chunks = 0

    for fname in files:
        fpath = os.path.join(KNOWLEDGE_DIR, fname)
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        module_id = fname.split('_')[0]
        title_match = re.search(r'^#\s+(.+)', content, re.MULTILINE)
        module_title = title_match.group(1).strip() if title_match else fname

        chunks = chunk_markdown(content, module_title)
        for section_title, chunk_text in chunks:
            cur.execute(
                "INSERT INTO rag_fts (module_id, section_title, content) VALUES (?, ?, ?)",
                (module_id, section_title, chunk_text)
            )
            total_chunks += 1

    conn.commit()
    conn.close()
    print(f"✅ RAG Indexed: {len(files)} pure IE master modules, {total_chunks} semantic sections indexed.")


class RAGEngine:
    """
    RAG Engine v2.0 — Cached connection + Phrase-boosted FTS5 search.
    - Persistent SQLite connection (thread-safe via check_same_thread=False)
    - Two-pass FTS5 query: exact phrase match boosted, then OR fallback
    """

    def __init__(self):
        self.db_path = DB_PATH
        self.thesaurus = IE_THESAURUS
        self._conn: Optional[sqlite3.Connection] = None

    def _get_conn(self) -> sqlite3.Connection:
        """Get or create a cached SQLite connection."""
        if self._conn is None:
            self._conn = sqlite3.connect(self.db_path, check_same_thread=False)
            self._conn.row_factory = sqlite3.Row
        return self._conn

    def expand_query(self, query: str) -> str:
        return expand_query(query)

    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        """
        Two-pass FTS5 search with phrase boosting.
        Pass 1: Try exact phrase match on original query (highest relevance).
        Pass 2: Expanded OR query with thesaurus synonyms (broad recall).
        Results are merged with phrase matches prioritized (deduplicated).
        """
        clean_query = re.sub(r'[^\w\s]', ' ', query).strip()
        if not clean_query:
            return []

        conn = self._get_conn()
        cur = conn.cursor()
        results_map: dict = {}  # key: (module_id, section_title) -> row dict

        # Pass 1: Exact phrase match (quoted) — highest quality signal
        try:
            phrase_fts = f'"{clean_query}"'
            cur.execute(
                "SELECT module_id, section_title, content, rank FROM rag_fts WHERE rag_fts MATCH ? ORDER BY rank LIMIT ?",
                (phrase_fts, top_k)
            )
            for row in cur.fetchall():
                d = dict(row)
                key = (d['module_id'], d['section_title'])
                # Boost phrase match rank by 2x (more negative = higher rank in FTS5)
                d['rank'] = d['rank'] * 2.0
                results_map[key] = d
        except Exception:
            pass

        # Pass 2: Expanded OR query with thesaurus (broad recall)
        try:
            expanded = self.expand_query(clean_query)
            terms = [re.sub(r'[^\w]', '', t) for t in expanded.split() if re.sub(r'[^\w]', '', t)]
            if terms:
                fts_query = " OR ".join(terms)
                cur.execute(
                    "SELECT module_id, section_title, content, rank FROM rag_fts WHERE rag_fts MATCH ? ORDER BY rank LIMIT ?",
                    (fts_query, top_k * 2)
                )
                for row in cur.fetchall():
                    d = dict(row)
                    key = (d['module_id'], d['section_title'])
                    if key not in results_map:
                        results_map[key] = d
        except Exception:
            pass

        # Sort by rank (most negative = best match) and return top_k
        sorted_results = sorted(results_map.values(), key=lambda x: x['rank'])
        return sorted_results[:top_k]


rag_engine = RAGEngine()

if __name__ == "__main__":
    print("Rebuilding RAG with Pure Industrial Engineering Master Modules...")
    build_index()