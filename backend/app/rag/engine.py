import os
import re
import sqlite3
import struct
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

    # --- High-Tech Automation & NDT (Modul 751-752) ---
    "acoustic emission": ["ae-ndt", "kaiser effect", "felicity ratio", "dunegan", "marse", "burst signal", "pressure vessel testing", "asme sec v art 12", "tdoa multilateration"],
    "amhs": ["overhead hoist transport", "oht", "wafer fab", "cleanroom logistics", "foup", "semi e84", "semi e15", "deadlock avoidance", "space-time routing"],
    "oht": ["overhead hoist transport", "amhs", "wafer fab", "cleanroom logistics", "foup", "semi e84", "intrabay", "interbay"],
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
    "vikor": ["vikor compromise", "visekriterijumska optimizacija", "compromise solution mcdm", "fuzzy vikor supplier selection", "regret measure ranking", "192"],
    "p chart control": ["p chart", "p-chart", "np chart", "fraction nonconforming chart", "attribute control chart", "proportion defective spc", "002"],
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

    # --- Computational IE, Programming & Computer Science in IE (Modul 301-315) ---
    "logika pemrograman": ["algoritma struktur data", "big-o", "time complexity", "array dinamis", "priority queue", "heap", "stpo", "cormen"],
    "oop manufaktur": ["object-oriented programming", "design patterns", "factory pattern", "state machine", "observer pattern", "cyber physical systems"],
    "heuristik penjadwalan": ["sorting", "searching", "spt rule", "edd rule", "atc index", "simulated annealing", "makespan flow shop"],
    "network flows": ["struktur data graf", "minimum cost network flow", "mcnfp", "minimum spanning tree", "mst kruskal", "prim", "dijkstra"],
    "dynamic programming": ["prinsip bellman", "cutting stock problem", "gilmore gomory", "column generation", "trim loss", "capital budgeting"],
    "parallel computing": ["gpu acceleration", "cuda", "simd", "monte carlo simulasi", "amdahl law", "variance reduction"],
    "microservices manufaktur": ["api integration", "rest api", "grpc", "apache kafka", "event driven mes", "service mesh"],
    "sql inventory": ["database relasional", "normalisasi 3nf", "bcnf", "b-tree index", "acid", "stock reorder query"],
    "timeseries database": ["nosql", "influxdb", "timescaledb", "sensor iot", "lsm-tree", "downsampling", "telemetry"],
    "branch and bound": ["rekursi", "knapsack problem", "travelling salesperson problem", "tsp", "held-karp", "order picking"],
    "web scraping industri": ["market intelligence", "playwright", "price elasticity", "demand estimation", "sentiment extraction"],
    "cicd industri": ["git", "version control", "continuous delivery", "dora metrics", "automated testing", "docker"],
    "embedded systems": ["plc", "arduino", "esp32", "iec 61131-3", "ladder diagram", "freertos", "otomasi lantai pabrik"],
    "scada protocols": ["modbus rtu", "modbus tcp", "opc-ua", "mqtt", "sparkplug b", "isa-95", "telemetri"],
    "edge ai": ["edge computing", "industrial ai inference", "tinyml", "quantization int8", "tensorrt", "visual defect sorting"],

    # --- Blockchain, Web3 & Logistics Smart Contracts (Modul 316-325) ---
    "blockchain logistik": ["distributed ledger", "dlt", "sha-256", "merkle tree", "proof of authority", "poa", "ecdsa", "pallet tracking"],
    "smart contracts": ["solidity", "evm", "escrow shipping", "electronic bill of lading", "ebl", "oracle trigger", "otomasi pembayaran"],
    "traceability blockchain": ["lacak balak rantai pasok", "provenance", "epcis 2.0", "dag", "surgical recall", "vaksin cold chain"],
    "tokenisasi rwa": ["tokenisasi aset fisik", "real world assets", "warehouse receipts", "resi gudang", "supply chain factoring", "erc-721"],
    "dao logistik": ["decentralized autonomous organization", "quadratic voting", "shared transport pooling", "konsorsium truk"],
    "zero knowledge proofs": ["zkp", "zk-snarks", "zk-starks", "kerahasiaan data komersial", "kepatuhan supplier"],
    "iot oracle cold chain": ["chainlink oracle", "parametric insurance", "pemantauan suhu kargo", "penalti otomatis"],
    "digital product passport": ["dpp", "circular economy", "material circularity indicator", "mci", "espr", "daur ulang baterai ev"],
    "carbon credit dlt": ["carbon tracking", "esg auditing", "ghg protocol", "scope 1 2 3", "tokenized carbon offset"],
    "hybrid blockchain": ["hyperledger fabric", "private consortium", "public ethereum rollup", "kedirgantaraan"],

    # --- Data Mining, ML & Advanced Analytics (Modul 326-350) ---
    "data mining manufaktur": ["crisp-dm", "etl preprocessing", "outlier detection", "z-score", "mahalanobis distance"],
    "market basket analysis": ["analisis asosiasi", "apriori", "fp-growth", "support", "confidence", "lift", "bundling produk"],
    "clustering sku": ["k-means", "dbscan", "hierarchical clustering", "silhouette score", "elbow method", "segmentasi sku abc"],
    "prediksi cacat ml": ["klasifikasi", "random forest", "xgboost", "lightgbm", "gini impurity", "f1-score", "wafer scrap"],
    "predictive maintenance sensor": ["getaran multivariat", "kurtosis", "fft spectral", "wavelet", "remaining useful life", "rul", "weibull"],
    "computer vision aoi": ["automated visual inspection", "yolov8", "cnn", "iou", "map", "inspeksi pengelasan"],
    "nlp garansi": ["text mining keluhan", "tf-idf", "lda topic modeling", "sentiment analysis", "root cause mining"],
    "anomaly detection kualitas": ["isolation forest", "autoencoders", "reconstruction loss", "injeksi molding"],
    "time series forecasting": ["arima", "sarima", "prophet", "deepar", "probabilistic rnn", "peramalan permintaan"],
    "explainable ai": ["xai", "shap", "lime", "shapley additive explanations", "transparansi keputusan pabrik"],
    "reinforcement learning kontrol": ["q-learning", "ppo", "dqn", "markov decision process", "kontrol adaptif mesin"],
    "federated learning": ["federated learning", "fedavg", "industrial data sovereignty", "idsa", "differential privacy", "multi-plant privacy"],
    "dimensionality reduction": ["pca", "t-sne", "umap", "eigenvalue decomposition", "sensor kiln semen"],
    "feature engineering sensor": ["signal processing", "bpfo", "bpfi", "bsf", "bearing fault", "crest factor"],
    "mlops pabrik": ["automl", "mlflow", "bentoml", "concept drift", "population stability index", "psi", "retraining pipeline"],
    "data warehouse manufaktur": ["star schema", "snowflake", "fact tables", "dimension tables", "olap", "lakehouse"],
    "industrial dashboard": ["grafana", "powerbi", "tableau", "tufte data-ink", "oee andon digital"],
    "chemometrics nir": ["chemometrics", "near-infrared", "nir spectroscopy", "partial least squares", "pls regression", "snv correction", "process analytical technology", "pat"],
    "causal inference operasional": ["quasi-experiments", "difference-in-differences", "did", "propensity score matching", "psm", "ate"],
    "survival analysis mesin": ["kaplan-meier", "cox proportional hazards", "hazard rate", "right-censored", "pompa sentrifugal"],
    "process mining alur": ["alpha miner", "inductive miner", "event logs", "directly-follows graph", "dfg", "procure-to-pay"],
    "conformance checking": ["bottleneck detection", "process fitness", "alignment", "event logs erp sap"],
    "prescriptive analytics": ["predict and optimize", "spo loss", "decision-focused learning", "integer programming ml"],
    "pyspark manufaktur": ["apache spark", "big data processing", "rdd", "catalyst optimizer", "structured streaming"],
    "ab testing proses": ["desain eksperimen digital", "nhst", "minimum detectable effect", "mde", "multi-armed bandits"],

    # --- PPIC, MRP, MPS, CAD/CAM, GD&T (Modul 351-375) ---
    "mps": ["master production schedule", "jadwal induk produksi", "rccp", "rough cut capacity", "pab", "disagregasi agregat"],
    "mrp": ["material requirements planning", "mrp 1", "lot sizing", "silver-meal", "part period balancing", "wagner whitin", "netting", "offsetting", "l4l", "poq"],
    "crp": ["capacity requirements planning", "load profiling", "work center utilization", "kapasitas stasiun kerja"],
    "mrp ii": ["manufacturing resource planning", "closed loop mrp", "integrasi keuangan", "inventory turnover"],
    "erp": ["sap", "odoo", "oracle erp", "modul pp", "modul mm", "master data bom routing", "p2p", "o2c"],
    "ddmrp": ["demand-driven mrp", "strategic buffer", "red yellow green zone", "net flow equation", "reduksi bullwhip"],
    "shop floor control": ["dispatching rules", "critical ratio", "cr", "spt", "edd", "wip tracking", "input output control"],
    "aps": ["advanced planning and scheduling", "finite capacity scheduling", "constraint programming", "multi-plant scheduling"],
    "bom": ["bill of materials", "multi-level bom", "modular bom", "phantom bom", "where-used explosion", "struktur produk"],
    "safety stock stokastik": ["lead time variabel", "service level z", "stochastic inventory", "rop", "demand uncertainty"],
    "s&op": ["sales and operations planning", "ibp", "integrated business planning", "consensus forecasting", "executive sop"],
    "atp ctp": ["available-to-promise", "capable-to-promise", "order promising", "free capacity quoting"],
    "kanban sizing": ["supermarket pull", "toyota pull system", "jumlah kartu kanban", "lead time pengisian", "wadah box"],
    "jels": ["joint economic lot sizing", "jels", "single-vendor multi-buyer", "supplier coordination", "vmi", "joint inventory cost"],
    "theory of constraints": ["toc", "drum-buffer-rope", "dbr", "lima langkah fokus goldratt", "buffer management", "throughout accounting"],
    "gambar teknik iso": ["proyeksi ortogonal", "proyeksi eropa", "proyeksi amerika", "etiket iso 7200", "standarisasi garis iso 128"],
    "gd&t": ["geometric dimensioning and tolerancing", "asme y14.5", "datum reference frame", "feature control frame", "mmc", "bonus tolerance", "kebulatan", "kerataan", "posisi"],
    "sistem suaian": ["toleransi linier", "iso 286", "clearance fit", "transition fit", "interference fit", "suaian longgar", "suaian paksa", "h7/p6", "h7/f6"],
    "proyeksi piktorial": ["proyeksi isometri", "dimetri", "kavalier", "gambar potongan", "full section", "half section", "offset section"],
    "cad 3d": ["parametric modeling", "boundary representation", "b-rep", "csg", "assembly mates", "euler poincare"],
    "cam cnc": ["g-code", "m-code", "cnc milling", "g01 linear", "g02 circular", "cutting speed vc", "feed rate", "taylor tool wear"],
    "fea komponen": ["finite element analysis", "von mises stress", "uji tegangan regangan", "matriks kekakuan k", "mesh hex8 tet4"],
    "reverse engineering": ["3d scanning", "point cloud", "icp algorithm", "nurbs surface fitting", "stl mesh"],
    "additive manufacturing": ["3d printing", "fdm", "sla", "sls", "slm", "rapid prototyping", "slicing layer", "staircase effect"],
    "plm": ["product lifecycle management", "engineering change order", "eco", "ecr", "ecn", "digital thread", "siemens teamcenter"],

    # --- Systems Modeling, Complexity, Environmental & Advanced Quality (Modul 376-400) ---
    "enterprise architecture": ["togaf", "togaf 10", "zachman framework", "enterprise architecture", "adm cycle", "it ot alignment", "transformasi digital"],
    "integrasi numerik": ["metode euler", "runge-kutta rk4", "persamaan diferensial odess", "stabilitas simulasi", "bass model"],
    "system archetypes": ["arketipe sistem", "limits to growth", "shifting the burden", "tragedy of the commons", "fixes that fail", "senge"],
    "jackson networks": ["jaringan antrian", "jackson networks", "bcmp theorem", "closed queueing network", "mean value analysis", "mva", "wafer fab queue"],
    "soft systems methodology": ["ssm", "checkland", "rich pictures", "root definition", "catwoe analysis", "human activity systems"],
    "viable system model": ["vsm", "stafford beer", "hukum variasi ashby", "cybernetics", "algedonic loop", "tata kelola organisasi"],
    "social network analysis": ["sna", "betweenness centrality", "modularity louvain", "knowledge silos", "aliran informasi pabrik"],
    "tabu search pso": ["metaheuristik penjadwalan", "tabu search", "particle swarm optimization", "pso", "flexible job shop", "fjsp", "makespan cmax"],
    "robust decision making": ["rdm", "deep uncertainty", "xlrm framework", "scenario discovery prim", "minimax regret"],
    "amdal lcia": ["amdal", "andal", "rkl", "rpl", "life cycle impact assessment", "lcia", "iso 14044", "recipe 2016", "gwp co2", "eco-efficiency"],
    "game theory rantai pasok": ["nash equilibrium", "stackelberg leader follower", "double marginalization", "revenue sharing contract"],
    "jrp multi item": ["joint replenishment problem", "jrp", "pengadaan bersama", "shared ordering cost", "rand heuristic", "suku cadang multi item"],
    "dfss idov": ["design for six sigma", "dfss", "idov", "dmadv", "house of quality", "qfd", "taguchi sn ratio", "axiomatic design"],
    "ergonomi lingkungan fisik": ["kebisingan", "leq", "dosis kebisingan", "pencahayaan lux", "isbb", "wbgt", "iklim kerja", "permenaker 5/2018", "vibrasi iso 2631"],
    "value engineering fast": ["value engineering", "ve", "fast diagram", "function analysis system technique", "analisis fungsi", "value index", "reduksi biaya produk"],
    "asrs": ["automated storage and retrieval systems", "wms", "single command cycle time", "dual command", "aisle crane", "slotting abc"],
    "industrial safety sil": ["safety instrumented systems", "sis", "lopa", "safety integrity level", "sil 2", "iec 61508", "iec 61511", "pfd avg", "interlock keselamatan"],
    "reconfigurable manufacturing": ["rms", "modular production", "reconfigurable machine tools", "rmt", "convertibility index"],
    "lean automation": ["karakuri kaizen", "chaku-chaku line", "hanedashi", "low cost intelligent automation", "lcia"],
    "smart quality 4.0": ["closed loop spc", "run to run control", "r2r ewma", "zero defect manufacturing", "zdm", "cpk 2.0"],
    "iso 50001": ["energy management systems", "energy baseline", "enb", "enpi", "time of use tariff", "peak shaving", "optimasi listrik pabrik"],
    "circular manufacturing": ["closed-loop supply chain", "remanufacturing", "6r methodology", "reverse logistics", "material yield"],
    "ergonomi kognitif": ["mental workload", "nasa-tlx", "situational awareness", "eye tracking", "operator 4.0"],
    "tpm 4.0": ["prescriptive maintenance", "digital machine health index", "composite health index", "chi", "oee 4.0"],
    "smart factory": ["arsitektur smart factory", "unified namespace", "uns", "industrial metaverse", "smart factory maturity index", "sfmi", "zero emission plant"],
    "hse smk3 iso45001": ["smk3", "pp 50/2012", "iso 45001", "hiradc", "ibprp", "ltir", "trir", "severity rate", "scat", "loto", "izin kerja ptw", "segitiga heinrich"],
    "higiene industri": ["higiene industri", "permenaker 5/2018", "dosis kebisingan", "twa kebisingan", "isbb", "wbgt", "debu gravimetri", "intensitas penerangan lux", "acgih tlv"],
    "rekayasa lingkungan b3": ["limbah b3", "pp 22/2021", "tps b3", "festronik", "ipal", "wwtp", "hrt", "rasio f/m", "proper klhk", "ghg protocol", "scope 1 2 3"],
    "drafter gdt asme": ["gd&t", "asme y14.5", "iso 1101", "feature control frame", "datum 3-2-1", "tolerance stack-up", "worst case", "rss", "bonus tolerance", "mmc", "lmc"],
    "dfma plant piping": ["dfma", "design for assembly", "boothroyd dewhurst", "dfa index", "sheet metal k-factor", "bend allowance", "asme b31.3", "p&id", "isa 5.1", "darcy-weisbach"],
    "warehouse slotting wms": ["warehouse management system", "wms", "slotting optimization", "coi index", "cube utilization", "abc velocity", "order picking", "s-shape routing", "ira cycle counting"],
    "logistik tms vrp": ["transportation management system", "tms", "clarke-wright savings", "vrp", "cvrp", "mhe sizing", "forklift sizing", "antrean m/m/c", "cold chain", "mkt mean kinetic temperature"],
    "ppic s&op mps": ["ppic", "sales and operations planning", "s&op", "agregat planning", "mps", "master production schedule", "pab", "atp", "rccp", "bill of resources", "silver-meal", "wagner-whitin"],
    "penjadwalan toc dbr": ["finite capacity scheduling", "theory of constraints", "toc", "drum buffer rope", "dbr", "buffer management", "algoritma johnson", "dispatching rules", "spt", "edd", "critical ratio"],
    "qa qc iatf core tools": ["iatf 16949", "apqp", "ppap", "ppap level 3", "msa gage r&r", "gage r&r anova", "ndc", "process capability", "cp cpk", "pp ppk", "aiag-vda fmea", "action priority"],
    "sampling penerimaan 8d": ["sampling penerimaan", "acceptance sampling", "iso 2859-1", "mil-std-105e", "kurva oc", "aql", "ltpd", "aoq", "aoql", "8d problem solving", "5w2h", "5-why", "fishbone 6m", "capa"],
    "strategic procurement kraljic": ["strategic procurement", "matriks kraljic", "strategic items", "bottleneck items", "leverage items", "tco", "total cost of ownership", "incoterms 2020", "fob", "cif", "ddp", "exw", "evaluasi vendor"],
    "lean ie vsm smed": ["continuous improvement", "lean ie", "vsm", "value stream mapping", "takt time", "production lead time", "smed", "changeover", "yamazumi chart", "maynard most", "basic most", "tmu"],
    "maintenance rcm ii": ["reliability centered maintenance", "rcm ii", "sae ja1011", "distribusi weibull", "modulus weibull beta", "characteristic life eta", "hazard rate", "mtbf", "ketersediaan ao", "iso 55001"],
    "tpm jishu hozen oee": ["total productive maintenance", "tpm", "jishu hozen", "7 langkah jishu hozen", "autonomous maintenance", "oee", "six big losses", "red tag fuguai", "soc iac", "teep"],
    "control tower cpfr meio": ["supply chain control tower", "scct", "cpfr", "bullwhip ratio", "meio", "multi-echelon inventory", "echelon stock", "risk pooling effect", "clark scarf"],
    "circular economy clsc remanufaktur": ["circular economy", "closed-loop supply chain", "clsc", "remanufacturing", "disassembly line balancing", "dlbp", "epr", "weee", "life cycle costing", "iso 15686-5"],
    "hoshin kanri a3 problem solving": ["hoshin kanri", "x-matrix", "catchball process", "a3 problem solving", "a3 toyota", "true north", "practical problem solving", "policy deployment"],
    "biomekanik chaffin owas": ["biomekanik", "chaffin", "torsi sendi l5/s1", "gaya kompresi lumbal", "owas", "moore-garg", "strain index", "msds", "ergonomi makro", "odam"],
    "audit energi pinch analysis": ["audit energi", "iso 50002", "permen esdm 14/2012", "sec", "specific energy consumption", "cusum", "pinch analysis", "jaringan penukar panas", "hen", "waste heat recovery", "efisiensi boiler asme ptc 4.1"],
    "smart manufacturing isa95 mes": ["isa-95", "ansi/isa-95", "purdue model", "mes", "manufacturing execution system", "mesa-11", "b2mml", "genealogy part", "work order dispatching", "opc-ua"],
    "supply chain risk scrm": ["supply chain risk management", "scrm", "time to recover", "ttr", "time to survive", "tts", "financial impact of disruption", "fid", "dual sourcing", "iso 28000", "iso 22301"],
    "predictive maintenance getaran fft": ["predictive maintenance", "analisis getaran", "vibration analysis", "fft", "envelope analysis", "bpfo", "bpfi", "bsf", "ftf", "remaining useful life", "rul", "cox proportional hazards", "iso 10816-3"],
    "project management evm cpm": ["project management", "pmbok 7th", "earned value management", "evm", "planned value pv", "earned value ev", "actual cost ac", "cpi", "spi", "eac", "critical path method", "cpm", "pert", "project crashing"],
    "shiftwork frms sirkadian": ["shift kerja", "rotasi forward phase delay", "ritme sirkadian", "fatigue risk management system", "frms", "skala samn-perelli", "sleep debt", "model karasek", "job demand control"],
    "menggambar teknik proyeksi": ["menggambar teknik", "proyeksi ortogonal", "proyeksi eropa", "proyeksi amerika", "iso 128", "iso 5456", "pandangan potongan", "full section", "toleransi linier", "suaian iso 286", "clearance fit", "interference fit", "etiket gambar"],
    "praktikum gambar cad": ["praktikum menggambar teknik", "solidworks", "autodesk inventor", "autocad", "parametric modeling", "fully defined sketch", "assembly constraint", "coincident mate", "concentric mate", "exploded view", "bom detailing"],
    "pengantar teknik industri iise": ["pengantar teknik industri", "iise", "scientific management", "frederick winslow taylor", "frank lillian gilbreth", "motion study", "therblig", "gantt chart", "integrated system", "sistem sosioteknis"],
    "material teknik diagram fasa": ["material teknik", "kisi kristal bcc fcc hcp", "diagram fasa fe-fe3c", "reaksi eutektoid", "reaksi eutektik", "austenite", "martensit", "perlit", "uji tarik astm e8", "modulus young", "yield strength", "uji kekerasan brinell rockwell vickers", "heat treatment", "annealing", "quenching", "tempering"],
    "fisika dasar mekanika termodinamika": ["fisika dasar", "statika benda tegar", "dinamika newton", "hukum kekekalan energi mekanik", "hukum pascal", "persamaan bernoulli", "hukum 1 termodinamika", "hukum 2 termodinamika", "siklus carnot", "efisiensi carnot"],
    "kalkulus 1 terapan industri": ["kalkulus 1", "turunan diferensial", "optimasi biaya marginal", "laba marginal", "marginal revenue", "marginal cost", "penurunan eoq", "integral tentu", "surplus konsumen cs", "surplus produsen ps", "centroid luasan", "momen inersia"],
    "kimia dasar korosi proteksi katodik": ["kimia dasar", "stokiometri reaksi", "termokimia", "hukum hess", "kesetimbangan kimia", "persamaan nernst", "hukum faraday elektrolisis", "korosi besi elektrokimia", "anoda korban sacp", "arus paksa iccp", "msds", "sds ghs 16 bagian"],
    "etika keinsinyuran agama pii abet": ["etika profesi", "etika keinsinyuran", "agama ketuhanan", "pii", "persatuan insinyur indonesia", "catur karsa", "sapta dharma", "uu 11/2014 keinsinyuran", "abet eac", "nspe code of ethics", "paramountcy clause", "conflict of interest", "whistleblowing"],
    "pancasila tkdn ripin industri": ["pancasila", "pasal 33 uud 1945", "kebijakan industri nasional", "uu 3/2014 perindustrian", "tkdn", "tingkat komponen dalam negeri", "pp 29/2018", "bobot manfaat perusahaan", "bmp", "ripin 2015-2035", "hilirisasi nikel", "kedaulatan rantai pasok"],
    # --- Advanced IE & Systems Engineering Modules (435-476) ---
    "jackson queueing": ["jackson network", "product-form solution", "open jackson network", "closed queueing network", "gordon-newell", "mva", "mean value analysis", "435"],
    "kriging": ["gaussian process regression", "surrogate model", "expected improvement", "bayesian optimization", "blup", "matern kernel", "436"],
    "holonic manufacturing": ["hms", "prosa", "adacor", "multi-agent industrial", "cyber-physical production", "self-organizing manufacturing", "438"],
    "mems yield": ["cleanroom yield modeling", "murphy model", "seeds model", "defect density", "critical area analysis", "wafer yield", "439", "441"],
    "topology optimization": ["additive manufacturing", "simp method", "solid isotropic material penalization", "lattice structure", "dfam", "440"],
    "maut": ["multi-attribute utility theory", "promethee ii", "outranking method", "net outranking flow", "preference function", "442"],
    "accelerated life testing": ["alt", "arrhenius stress", "eyring model", "inverse power law", "maximum likelihood estimation alt", "443"],
    "eksergi industri": ["exergy analysis", "second-law thermodynamic", "exergy destruction", "gouy-stodola", "boiler exergy", "444"],
    "stochastic dynamic programming": ["hjb equation", "hamilton-jacobi-bellman", "stochastic inventory control", "value iteration", "bellman optimality", "446"],
    "exoskeleton": ["biomechanical assessment", "industrial exoskeleton", "emg muscle activity", "compression force l5/s1", "lumbar support", "449"],
    "robust optimization": ["polyhedral uncertainty", "ellipsoidal uncertainty", "bertsimas-sim", "price of robustness", "soyster robust linear", "450"],
    "cvrp carbon": ["green vehicle routing", "carbon emission vrp", "clarke-wright savings green", "fuel consumption routing", "451"],
    "disassembly line": ["dlbp", "circular economy", "e-waste weee", "hazardous part removal", "disassembly precedence graph", "452"],
    "dantzig wolfe": ["column generation", "delayed column generation", "cutting stock problem", "gilmore-gomory", "master problem pricing", "453"],
    "omnichannel fulfillment": ["micro-hub", "bopis", "buy-online-pickup-in-store", "last-mile parcel routing", "facility location omnichannel", "455", "475"],
    "lagrangian relaxation": ["lagrangian multiplier", "subgradient optimization", "capacitated facility location", "duality gap", "456"],
    "fram": ["functional resonance analysis method", "stamp", "stpa", "safety-ii", "systemic accident analysis", "complex socio-technical safety", "457"],
    "conjoint analysis": ["hierarchical bayes", "part-worth utilities", "choice-based conjoint", "product line optimization", "share of preference", "458"],
    "eksergoekonomi": ["speco", "cost accounting exergy", "thermoeconomics", "cost per unit exergy", "industrial energy cost", "459"],
    "ev charging location": ["electric vehicle fleet", "charging station sizing", "spatial queueing m/m/c", "milp ev logistics", "460"],
    "two stage stochastic": ["sample average approximation", "saa", "progressive hedging", "scenario tree optimization", "recourse decision", "463"],
    "physics informed neural networks": ["pinn", "tool wear prediction", "remaining useful life", "rul machining", "taylor tool life physics", "464"],
    "cognitive work analysis": ["cwa", "work domain analysis", "abstraction hierarchy", "ecological interface design", "eid", "465"],
    "pinch analysis hens": ["heat exchanger network synthesis", "composite curves", "problem table algorithm", "maximum energy recovery", "mer", "466"],
    "spar h": ["cream", "human reliability analysis", "cocom", "performance shaping factors", "cognitive reliability error", "467"],
    "nonlinear mspc": ["kpca", "kernel pca", "svdd", "support vector data description", "spe statistic", "hotelling t2 feature space", "468"],
    "distributionally robust": ["dro", "wasserstein metric", "kantorovich duality", "wasserstein ambiguity set", "worst-case expectation", "469"],
    "tsp drone": ["traveling salesman problem with drone", "tsp-d", "flying sidekick fstsp", "synchronized truck drone", "last mile parcel delivery", "470"],
    "dynamic fault tree": ["dfta", "pand gate", "spare gate", "seq gate", "continuous time markov chain", "ctmc fault tree", "471"],
    "joint replenishment": ["jrp", "basic cycle", "rand heuristic", "major ordering cost", "minor ordering cost", "silver heuristic", "472"],
    "dynamic facility layout": ["dFLP", "relocation cost", "quadratic assignment problem", "qap layout", "material handling dynamic", "473"],
    "energy aware scheduling": ["flexible job shop", "efjsp", "time-of-use tariffs", "tou electricity", "peak demand penalty", "machine speed scaling", "474"],
    "togaf enterprise architecture": ["togaf", "adm", "archimate", "enterprise architecture", "itil 4", "svs", "itsm", "094"],
    "lean construction last planner": ["last planner system", "lps", "ppc", "percent plan complete", "takt planning", "takt time construction", "kingman variability", "735"],
    "cbam carbon border": ["cbam", "carbon border adjustment", "embedded emissions", "eu 2023/956", "certificate cost optimization", "736"],
    "definitive screening design": ["dsd", "screening designs", "doe advanced", "262"],
    "mixture experiment simplex": ["mixture design", "simplex centroid", "scheffe polynomial", "261"],
    "structural equation modeling": ["sem-pls", "pls-sem", "canonical correlation analysis", "cca", "263"],
    "bow tie barrier management": ["bow-tie analysis", "barrier management", "escalation factor", "276"],
    "bleve consequence modeling": ["bleve", "vapor cloud explosion", "vce", "dispersion model", "qra consequence", "277"],
    "fn curve societal risk": ["f-n curve", "societal risk", "alarp", "value of statistical life", "vsl", "278"],
    "cradle to cradle passport": ["c2c", "material passport", "circular economy design", "281"],
    "internal carbon pricing": ["shadow carbon price", "carbon fee", "scope 123 emissions accounting", "283"],
    "water footprint zld": ["iso 14046", "zero liquid discharge", "water scarcity footprint", "284"],
    "industrial symbiosis eip": ["kalundborg", "eco industrial park", "byproduct synergy", "285"],
    "tco procurement analytics": ["total cost of ownership procurement", "should cost analysis", "supplier cost breakdown", "286"],
    "ccus techno economics": ["carbon capture utilization storage", "co2 capture cost", "techno economic analysis teea", "287"],
}


def expand_query(query: str) -> str:
    """
    Expand query using IE Thesaurus synonyms.
    v2.1 — fixes single-char FTS token stripping: preserve min 2-char tokens,
    treat single-char tokens as-is (FTS5 handles them natively).
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

    # Deduplicate while preserving order; skip very short tokens that FTS5 ignores
    seen, result = set(), []
    for t in expanded:
        if t in seen:
            continue
        seen.add(t)
        result.append(t)
    return " ".join(result)


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


def _load_vec_extension(conn):
    """Load sqlite-vec extension into a connection (no-op if unavailable)."""
    try:
        import sqlite_vec
        conn.enable_load_extension(True)
        sqlite_vec.load(conn)
        conn.enable_load_extension(False)
        return True
    except Exception:
        return False


def _serialize_f32(vector):
    """Serialize a float vector into little-endian float32 blob for sqlite-vec."""
    return struct.pack(f"<{len(vector)}f", *vector)


def build_index():
    """Build FTS5 index + semantic vector index from all knowledge modules."""
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

    try:
        if os.path.exists(DB_PATH):
            os.remove(DB_PATH)
    except Exception as e:
        print(f"Notice: Cannot remove DB file directly ({e}), dropping tables via SQLite connection instead.")

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute("DROP TABLE IF EXISTS rag_fts;")
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

    # ---- Semantic layer: sqlite-vec embeddings (hybrid RAG v3) ----
    vec_ok = _load_vec_extension(conn)
    if not vec_ok:
        print("Notice: sqlite-vec not available — skipping semantic index (FTS5-only mode).")
        conn.close()
        print(f"✅ RAG Indexed: {len(files)} pure IE master modules, {total_chunks} semantic sections indexed.")
        return

    try:
        try:
            from app.rag.embedder import EMBED_DIM, embed_texts
        except ImportError:
            from embedder import EMBED_DIM, embed_texts  # direct-script execution
    except Exception as e:
        print(f"Notice: embedder unavailable ({e}) — FTS5-only mode.")
        conn.close()
        print(f"✅ RAG Indexed: {len(files)} pure IE master modules, {total_chunks} semantic sections indexed.")
        return

    cur.execute("DROP TABLE IF EXISTS rag_vec;")
    cur.execute(f"""
        CREATE VIRTUAL TABLE IF NOT EXISTS rag_vec USING vec0(
            embedding FLOAT[{EMBED_DIM}]
        )
    """)

    rows = cur.execute("SELECT rowid, section_title, content FROM rag_fts ORDER BY rowid").fetchall()
    texts = [f"{t}\n{c[:1200]}" for (_, t, c) in rows]

    # Incremental embedding: commit per batch so progress survives a crash.
    batch_size = 128
    embedded = 0
    import gc
    for i in range(0, len(texts), batch_size):
        batch = texts[i:i + batch_size]
        vectors = embed_texts(batch)
        cur.executemany(
            "INSERT INTO rag_vec(embedding) VALUES (?)",
            [(_serialize_f32(v),) for v in vectors]
        )
        conn.commit()
        embedded += len(batch)
        if embedded % 512 == 0 or embedded >= len(texts):
            print(f"   embedded {embedded}/{len(texts)} sections...", flush=True)
        del batch, vectors
        gc.collect()

    conn.commit()
    conn.close()
    print(f"✅ RAG Indexed: {len(files)} pure IE master modules, {total_chunks} semantic sections indexed "
          f"(+{embedded} vector embeddings).")


class RAGEngine:
    """
    RAG Engine v3.1 — Precision Hybrid Search (FTS5 BM25 + Semantic Cosine Vector + Adaptive Stopword Filtering + RRF).
    - Pass 1: Strict Phrase Match (Quoted) — Weight: 3.0
    - Pass 2: Cleaned Keyword + Thesaurus Expansion (Filtered Stopwords) — Weight: 1.5
    - Pass 3: Dense Semantic Vector Matching (sqlite-vec) — Weight: 2.0
    - Diversified Top-K Module Reranking
    """

    RRF_K = 60
    SEMANTIC_CANDIDATES = 20

    INDONESIAN_STOPWORDS = {
        'yang', 'untuk', 'pada', 'ke', 'para', 'namun', 'menurut', 'antara', 'dia', 'dua',
        'ia', 'seperti', 'jika', 'sehingga', 'kembali', 'dan', 'ini', 'karena', 'oleh',
        'saat', 'harus', 'sementara', 'setelah', 'belum', 'kami', 'sekitar', 'bagi',
        'serta', 'di', 'dari', 'telah', 'sebagai', 'masih', 'hal', 'ketika', 'adalah',
        'itu', 'dengan', 'sampai', 'kalau', 'kalo', 'gimana', 'bagaimana', 'apa', 'apakah',
        'cara', 'caranya', 'biar', 'supaya', 'agar', 'bisa', 'dapat', 'ya', 'dong', 'sih',
        'punya', 'buat', 'bikin', 'ada', 'adanya', 'kapan', 'dimana', 'kenapa', 'mengapa',
        'pas', 'pake', 'pakai', 'mau', 'tau', 'tahu', 'doang', 'aja', 'saja', 'tersebut'
    }

    def __init__(self):
        self.db_path = DB_PATH
        self.thesaurus = IE_THESAURUS
        self._conn: Optional[sqlite3.Connection] = None
        self._vec_available: Optional[bool] = None

    def _get_conn(self) -> sqlite3.Connection:
        """Get or create a cached SQLite connection (with vec extension loaded)."""
        if self._conn is None:
            self._conn = sqlite3.connect(self.db_path, check_same_thread=False)
            self._conn.row_factory = sqlite3.Row
            self._vec_available = _load_vec_extension(self._conn)
        return self._conn

    def expand_query(self, query: str) -> str:
        return expand_query(query)

    def _semantic_pass(self, clean_query: str, limit: int):
        """
        Semantic nearest-neighbor lookup. Returns ordered list of
        (module_id, section_title, content, distance) or [] if unavailable.
        """
        if self._vec_available is False:
            return []
        try:
            try:
                from app.rag.embedder import embed_query
            except ImportError:
                from embedder import embed_query  # direct-script execution
            qvec = _serialize_f32(embed_query(clean_query))
            cur = self._get_conn().cursor()
            hits = cur.execute(
                "SELECT rowid, distance FROM rag_vec WHERE embedding MATCH ? AND k = ? ORDER BY distance",
                (qvec, limit)
            ).fetchall()
            out = []
            for h in hits:
                row = cur.execute(
                    "SELECT module_id, section_title, content FROM rag_fts WHERE rowid = ?",
                    (h['rowid'],)
                ).fetchone()
                if row is not None:
                    d = dict(row)
                    d['distance'] = h['distance']
                    out.append(d)
            return out
        except Exception:
            return []

    def search(self, query: str, top_k: int = 5) -> List[Dict]:
        """
        Hybrid multi-pass search engine v3.3 (Max-Precision & Max-Recall):
        - Pass 1: Strict Exact Phrase Match (weight=3.0)
        - Pass 2: Clean Query Terms FTS5 (BM25 AND/OR, weight=2.5) — preserves exact acronyms/codes
        - Pass 3: Thesaurus Expanded FTS5 (weight=1.0) — broad recall
        - Pass 4: Semantic Vector Match (sqlite-vec, weight=1.5) — conceptual semantics
        - Fused via Reciprocal Rank Fusion (k=60)
        """
        clean_query = re.sub(r'[^\w\s]', ' ', query).strip()
        if not clean_query:
            return []

        conn = self._get_conn()
        cur = conn.cursor()
        results_map: dict = {}
        ranked_lists: List[tuple] = []

        # Pass 1: Exact Phrase (quoted)
        phrase_keys: List[tuple] = []
        try:
            phrase_fts = f'"{clean_query}"'
            cur.execute(
                "SELECT module_id, section_title, content, rank FROM rag_fts WHERE rag_fts MATCH ? ORDER BY rank LIMIT ?",
                (phrase_fts, top_k * 2)
            )
            for row in cur.fetchall():
                d = dict(row)
                key = (d['module_id'], d['section_title'])
                results_map.setdefault(key, d)
                phrase_keys.append(key)
        except Exception:
            pass
        if phrase_keys:
            ranked_lists.append((phrase_keys, 3.0))

        # Pass 2: Direct Token Matching (No Thesaurus Inflation, High Precision)
        direct_keys: List[tuple] = []
        try:
            tokens = [t.strip() for t in clean_query.split() if t.strip()]
            if tokens:
                direct_fts = " OR ".join(tokens)
                cur.execute(
                    "SELECT module_id, section_title, content, rank FROM rag_fts WHERE rag_fts MATCH ? ORDER BY rank LIMIT ?",
                    (direct_fts, top_k * 2)
                )
                for row in cur.fetchall():
                    d = dict(row)
                    key = (d['module_id'], d['section_title'])
                    results_map.setdefault(key, d)
                    direct_keys.append(key)
        except Exception:
            pass
        if direct_keys:
            ranked_lists.append((direct_keys, 2.5))

        # Pass 3: Thesaurus Expanded Matching (Broad Recall)
        or_keys: List[tuple] = []
        try:
            expanded = self.expand_query(clean_query)
            terms = [t.strip() for t in expanded.split() if t.strip()]
            if terms and terms != tokens:
                fts_query = " OR ".join(terms)
                cur.execute(
                    "SELECT module_id, section_title, content, rank FROM rag_fts WHERE rag_fts MATCH ? ORDER BY rank LIMIT ?",
                    (fts_query, top_k * 2)
                )
                for row in cur.fetchall():
                    d = dict(row)
                    key = (d['module_id'], d['section_title'])
                    results_map.setdefault(key, d)
                    or_keys.append(key)
        except Exception:
            pass
        if or_keys:
            ranked_lists.append((or_keys, 1.0))

        # Pass 4: Dense Semantic Vector Matching (sqlite-vec)
        sem_keys: List[tuple] = []
        for d in self._semantic_pass(clean_query, self.SEMANTIC_CANDIDATES):
            key = (d['module_id'], d['section_title'])
            results_map.setdefault(key, d)
            sem_keys.append(key)
        if sem_keys:
            ranked_lists.append((sem_keys, 1.5))

        # Reciprocal Rank Fusion
        rrf_scores: dict = {}
        for keys, weight in ranked_lists:
            for pos, key in enumerate(keys):
                rrf_scores[key] = rrf_scores.get(key, 0.0) + (weight / (self.RRF_K + pos + 1))

        sorted_results = sorted(
            results_map.values(),
            key=lambda d: rrf_scores.get((d['module_id'], d['section_title']), 0.0),
            reverse=True,
        )

        for d in sorted_results:
            d['score'] = rrf_scores.get((d['module_id'], d['section_title']), 0.0)

        return sorted_results[:top_k]


rag_engine = RAGEngine()

if __name__ == "__main__":
    print("Rebuilding RAG with Pure Industrial Engineering Master Modules...")
    build_index()