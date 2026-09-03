import os
import sys
import glob
import re
import json
import time
import urllib.request
import urllib.error
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed

PROJECT_DIR = r"D:\Software\Hermes Workspace\projects\web\RuangTI"
KNOWLEDGE_DIR = os.path.join(PROJECT_DIR, "backend", "knowledge")
ROUTER_URL = "http://127.0.0.1:20128/v1/chat/completions"

SECTORS = [
    "Advanced Operations Research, Stochastic Dynamic Programming, Branch-and-Price-and-Cut, and Non-Linear Combinatorial Optimization",
    "Smart Industry 4.0/5.0, Cyber-Physical Production Systems (CPPS), Digital Twin, OPC-UA TSN, and Asset Administration Shell (AAS)",
    "Industrial Artificial Intelligence, Physics-Informed Neural Networks (PINN), Multi-Agent LLMs, and Deep Reinforcement Learning in Manufacturing",
    "Autonomous Robotics, Multi-Agent Swarm AMR/AGV Fleet Coordination, Whole-Body Kinematics, and 3D Vision Bin-Picking",
    "Sustainable Global Supply Chains, Scope 1-3 Carbon Accounting, EU CBAM/CSRD Compliance, Circular Economy, and Closed-Loop Remanufacturing",
    "Cold Chain Logistics, Vaccine/Perishable Logistics, Maritime Green Corridors, Port Automation, and Intermodal Freight Networks",
    "Quality 4.0, AIAG-VDA FMEA, Multivariate SPC, Prognostics and Health Management (PHM), and Non-Destructive Testing (NDT)",
    "Cognitive Ergonomics, Biomechanical Exoskeletons, Workload Pupillometry, Digital Human Modeling (DHM), and Process Safety HIRADC/Bow-Tie",
    "Industrial Thermal Energy Pinch Analysis, Industrial Heat Pumps, Waste Heat Recovery ORC, and CCUS Carbon Capture Systems",
    "Chemical Engineering Systems, Continuous Distillation APC, Polymer Extrusion Rheology, and Zero Liquid Discharge (ZLD) Water Networks",
    "Semiconductor Wafer Fabrication Metrology, EUV Photolithography Overlay, CMP Nanomechanics, and 2.5D/3D Chiplet Advanced Packaging",
    "Biopharmaceutical Continuous Manufacturing, Lyophilization Sublimation Kinetics, Bioreactor kLa Scale-Up, and Food Aseptic Thermal Processing",
    "Mining Geomechanics, Open-Pit Lerchs-Grossmann Dispatching, Comminution SAG Mills, HPAL Nickel Metallurgy, and Smelting Heat Balance",
    "Aerospace Manufacturing MRO, Airline Fleet Gate Scheduling, Wake Vortex Separation, and Space Mission Manifesting CoG Optimization",
    "Off-Site Modular Construction DfMA, 4D BIM Synchro Logistics, Earned Schedule EVM, and Heavy Rigging Crane Mechanics",
    "Engineering Economy, Real Options Valuation (ROV), Time-Driven ABC Costing, Capital Spares Poisson Criticality, and ISO 55001 Asset Governance"
]

def parse_9router_resp(raw_str: str) -> str:
    raw_str = raw_str.strip()
    # 1. Coba greedy JSON object extraction
    for end_pos in range(len(raw_str), 0, -1):
        if raw_str[end_pos-1] == '}':
            try:
                # cari kurung kurawal pembuka pertama
                start_pos = raw_str.find('{')
                if start_pos != -1 and start_pos < end_pos:
                    obj = json.loads(raw_str[start_pos:end_pos])
                    if 'choices' in obj and obj['choices']:
                        msg = obj['choices'][0]['message']
                        if 'content' in msg and msg['content']:
                            return msg['content']
            except Exception:
                pass
            break
            
    # 2. Coba parse per-line JSON
    for line in raw_str.split('\n'):
        line = line.strip()
        if line.startswith('{'):
            try:
                data = json.loads(line)
                if 'choices' in data and data['choices']:
                    msg = data['choices'][0]['message']
                    if 'content' in msg and msg['content']:
                        return msg['content']
            except Exception:
                pass
                
    # 3. Fallback regex
    m = re.search(r'\"content\":\s*\"(.*?)\",\s*\"(refusal|reasoning|padding|role)\"', raw_str, re.DOTALL)
    if m:
        try:
            return m.group(1).encode('utf-8').decode('unicode_escape')
        except Exception:
            return m.group(1)
    return ""

def call_llm(messages: list, max_tokens: int = 3500) -> str:
    # Prioritas Utama: MiniMax-M3 dari OpenRouter
    models = ["openrouter/minimax-m3:free", "gh/gpt-4o-mini", "gcli/grok-4.6"]
    for m in models:
        payload = {
            "model": m,
            "messages": messages,
            "temperature": 0.35,
            "max_tokens": max_tokens
        }
        req = urllib.request.Request(
            ROUTER_URL,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"}
        )
        for attempt in range(2):
            try:
                with urllib.request.urlopen(req, timeout=60) as resp:
                    raw = resp.read().decode("utf-8", errors="ignore")
                    res = parse_9router_resp(raw)
                    if res and len(res) > 200:
                        return res
            except Exception:
                time.sleep(1)
    return ""

def get_existing_modules():
    files = glob.glob(os.path.join(KNOWLEDGE_DIR, "*.md"))
    existing_nums = set()
    existing_slugs = set()
    for f in files:
        base = os.path.basename(f)
        m = re.match(r"^(\d+)_([^\.]+)\.md", base)
        if m:
            existing_nums.add(int(m.group(1)))
            existing_slugs.add(m.group(2).lower())
    return existing_nums, existing_slugs

def generate_topic_batch(sector: str, count: int, existing_slugs: set) -> list:
    prompt = f"""Sebagai Kepala Arsitek Kurikulum & Riset Teknik Industri Dunia, buatkan daftar {count} topik spesialis Teknik Industri tingkat lanjut yang SANGAT SPESIFIK, UNIK, dan BELUM PERNAH ADA dalam sektor:
"{sector}".

Topik harus berbobot akademis tinggi (setingkat S2/S3 & Standar Industri Global), lengkap dengan referensi buku teks standar dan jurnal internasional terkini (2022-2026: IEEE, IJPR, EOR, CIRP, ASME, ISO).

Format output WAJIB berupa JSON Array murni:
[
  {{
    "tag": "slug_singkat_unik",
    "topic": "Judul lengkap topik spesifik dengan istilah teknis mendalam",
    "references": "Sitasi Buku & Jurnal Utama (Tahun 2022-2026) serta Standar Terkait"
  }}
]"""
    res = call_llm([
        {"role": "system", "content": "Anda adalah generator taksonomi riset teknik industri tingkat lanjut. Output HANYA JSON array valid tanpa komentar lain."},
        {"role": "user", "content": prompt}
    ], max_tokens=2500)
    
    # 1. Coba parse JSON Array
    try:
        # Bersihkan pembungkus markdown ```json ... ```
        clean_res = re.sub(r"```json\s*", "", res)
        clean_res = re.sub(r"```\s*", "", clean_res).strip()
        start = clean_res.find('[')
        end = clean_res.rfind(']')
        if start != -1 and end != -1:
            items = json.loads(clean_res[start:end+1])
            valid = []
            for item in items:
                raw_tag = item.get("tag") or item.get("topic", "")[:30]
                tag = re.sub(r"[^\w\s-]", "", raw_tag.lower()).strip().replace(" ", "_").replace("-", "_")
                if tag and tag not in existing_slugs and item.get("topic"):
                    valid.append({
                        "tag": tag,
                        "topic": item.get("topic"),
                        "references": item.get("references", "Standar Industri Internasional & Literatur Terkini (2022-2026)")
                    })
            if valid:
                return valid
    except Exception as e:
        pass

    # 2. Fallback heuristic line parsing
    lines = res.split('\n')
    fallback_items = []
    for line in lines:
        line = line.strip()
        if line.startswith(('-', '*', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.')):
            topic_text = re.sub(r"^[-*\d\.\s]+", "", line).strip()
            if len(topic_text) > 15:
                tag = re.sub(r"[^\w\s-]", "", topic_text[:30].lower()).strip().replace(" ", "_")
                if tag not in existing_slugs:
                    fallback_items.append({
                        "tag": tag,
                        "topic": topic_text,
                        "references": f"Literature & Standards on {sector[:30]} (2022-2026)"
                    })
    if fallback_items:
        return fallback_items[:count]
    return []

def generate_module_content(num: int, item: dict) -> bool:
    tag = item["tag"]
    topic = item["topic"]
    refs = item["references"]
    
    prompt = f"""Tolong susun dokumen Knowledge Base Spesialis Teknik Industri LENGKAP untuk Modul {num:04d}.

Topik Spesialis:
{topic}

Referensi & Standar Utama yang Wajib Disitasi:
{refs}

Gunakan struktur WAJIB berikut:
# {num:04d} — <Judul Modul yang Jelas & Profesional>

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** {topic}
**Standar & Referensi Utama:** {refs}

---

## 1. Pendahuluan dan Konteks Industri
(Uraikan konteks industri nyata, urgensi operasional/ekonomi/teknis, tantangan di manufaktur/rantai pasok modern minimal 200 kata, sitasi literatur)

## 2. Landasan Teori & Formulasi Matematis
(Uraikan rumus-rumus kuantitatif lengkap dengan notasi LaTeX KaTeX $...$ dan $$...$$, definisi variabel parameter yang presisi, dan pembuktian/derivasi matematis ringkas)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)
(Uraikan langkah-langkah implementasi sistematis, diagram alir proses/logika, atau arsitektur teknologi sesuai standar industri terkait)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik
(Berikan contoh perhitungan numerik realistis: input parameter industri, langkah kalkulasi step-by-step lengkap dengan angka dan rumus, serta interpretasi hasil manajerial/engineering)

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan
(Hubungan dengan disiplin lain: Supply Chain, Otomasi, Manajemen Biaya/Teknik, K3/ESG, batasan metodologi, dan arah riset masa depan)

---

PENTING:
- Tulis langsung teks Markdown tanpa pembungkus kode.
- Pastikan rumus KaTeX valid dan rapi ($...$ inline, $$...$$ block simetris).
- Substantif, padat informasi ilmiah (minimal 1200 kata).
"""
    content = call_llm([
        {
            "role": "system",
            "content": (
                "Anda adalah Asisten Akademik & Spesialis Teknik Industri kelas dunia untuk RuangTI. "
                "Tulis modul yang SANGAT SUBSTANTIF, mendalam, lengkap formulasi LaTeX KaTeX matematis, "
                "penuh perhitungan empiris kuantitatif, tanpa basa-basi, mengikuti kurikulum IISE BoK, "
                "standar ISO/ASTM/ASME/IEEE, dan literatur ilmiah terkini (2022-2026). "
                "Gunakan Bahasa Indonesia formal yang presisi dengan istilah teknis baku."
            )
        },
        {"role": "user", "content": prompt}
    ], max_tokens=3500)
    
    if not content or len(content) < 600:
        print(f"[-] Gagal generate modul {num:04d}", flush=True)
        return False
        
    content = content.strip()
    if content.startswith("```markdown"):
        content = content[len("```markdown"):].strip()
    if content.startswith("```"):
        content = content[len("```"):].strip()
    if content.endswith("```"):
        content = content[:-3].strip()

    slug = re.sub(r"[^\w\s-]", "", tag.lower()).strip().replace(" ", "_")
    filename = f"{num:04d}_{slug}.md"
    file_path = os.path.join(KNOWLEDGE_DIR, filename)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"[+] Modul {num:04d} SUKSES: {filename} ({len(content)} chars)", flush=True)
    return True

def sync_rag():
    cmd = [sys.executable, "sync_rag.py", "-v"]
    res = subprocess.run(cmd, cwd=PROJECT_DIR, capture_output=True, text=True)
    for line in res.stdout.strip().split('\n'):
        if "SYNCED" in line or "DONE" in line or "NEW modules" in line:
            print("  [DB]", line, flush=True)

def main():
    target_total = 5000
    existing_nums, existing_slugs = get_existing_modules()
    current_count = len(existing_nums)
    print(f"Total Modul Saat Ini di Disk: {current_count} (Target: {target_total})", flush=True)
    
    next_num = max(existing_nums) + 1 if existing_nums else 1
    sector_idx = 0
    
    while next_num <= target_total:
        sector = SECTORS[sector_idx % len(SECTORS)]
        sector_idx += 1
        
        batch_needed = min(10, target_total - next_num + 1)
        print(f"\n==========================================", flush=True)
        print(f">>> [Progres {next_num-1}/{target_total}] Merancang topik untuk: {sector[:60]}...", flush=True)
        
        topics = generate_topic_batch(sector, batch_needed + 5, existing_slugs)
        if not topics:
            print("[-] Retrying topic generation...", flush=True)
            time.sleep(2)
            continue
            
        topics = topics[:batch_needed]
        print(f">>> Menghasilkan {len(topics)} modul baru (Nomor {next_num} s/d {next_num + len(topics) - 1})...", flush=True)
        
        tasks = []
        for i, item in enumerate(topics):
            cur_mod_num = next_num + i
            tasks.append((cur_mod_num, item))
            existing_slugs.add(item["tag"])
            
        with ThreadPoolExecutor(max_workers=4) as executor:
            futures = [executor.submit(generate_module_content, num, item) for num, item in tasks]
            for fut in as_completed(futures):
                try:
                    fut.result()
                except Exception as e:
                    print(f"[-] Worker error: {e}", flush=True)
                    
        next_num += len(topics)
        
        # Sync RAG berkala per batch
        print(">>> Sinkronisasi batch ke database SQLite...", flush=True)
        sync_rag()
        time.sleep(1)

    print("\n==========================================", flush=True)
    print("TARGET 5.000 MODUL TERCAPAI 100%! Final sync...", flush=True)
    sync_rag()

if __name__ == "__main__":
    main()
