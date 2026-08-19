export interface DocSubSection {
  id: string;
  title: string;
  badge?: string;
}

export interface DocArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  badge?: string;
  readTime: string;
  subsections: DocSubSection[];
  content: {
    lead: string;
    sections: {
      id: string;
      title: string;
      paragraphs: string[];
      codeSnippet?: {
        language: string;
        code: string;
        caption?: string;
      };
      callout?: {
        type: "info" | "warning" | "success" | "tip";
        title: string;
        message: string;
      };
      table?: {
        headers: string[];
        rows: string[][];
      };
      formula?: {
        math: string;
        explanation: string;
      };
    }[];
  };
}

export interface DocCategory {
  id: string;
  title: string;
  iconName: string;
  articles: DocArticle[];
}

export const DOCS_CATEGORIES: DocCategory[] = [
  {
    id: "getting-started",
    title: "Memulai (Getting Started)",
    iconName: "Compass",
    articles: [
      {
        id: "overview",
        title: "Pengenalan RuangTI",
        description: "Platform AI Workspace & Konsultasi Spesialis Teknik Industri pertama di Indonesia dengan 434 Modul RAG Eksak.",
        category: "getting-started",
        badge: "Pondasi",
        readTime: "4 min",
        subsections: [
          { id: "apa-itu-ruangti", title: "Apa itu RuangTI?" },
          { id: "keunggulan-arsitektur", title: "Keunggulan Arsitektur Sistem" },
          { id: "ekosistem-pengguna", title: "Untuk Siapa RuangTI Dirancang?" },
        ],
        content: {
          lead: "RuangTI adalah AI Workspace & Knowledge Hub yang direkayasa khusus untuk memecahkan kompleksitas keilmuan Teknik Industri (Industrial & Systems Engineering), mulai dari riset operasi eksak, perancangan manufaktur terpadu, hingga optimasi rantai pasok global.",
          sections: [
            {
              id: "apa-itu-ruangti",
              title: "Apa itu RuangTI?",
              paragraphs: [
                "Berbeda dengan model AI generik konvensional yang kerap berhalusinasi saat dihadapkan pada kalkulasi eksak dan regulasi industri spesifik, RuangTI menggabungkan Neural Reasoning Engine mutakhir dengan Retrieval-Augmented Generation (RAG) FTS5 berkekuatan 434 modul master ilmiah.",
                "RuangTI dirancang khusus untuk sivitas akademika (mahasiswa dan dosen Teknik Industri UNTIRTA) serta para profesional industri di bidang HSE, Perencanaan Produksi (PPIC), Quality Assurance/Control (QA/QC), Desain CAD/CAM, Manajemen Pergudangan (WMS), dan Rekayasa Keandalan Fasilitas.",
              ],
              callout: {
                type: "info",
                title: "Identitas RuangTI Neural Engine",
                message: "Seluruh komputasi bahasa dan penalaran diorkestrasi secara internal oleh RuangTI Neural Engine dengan protokol privasi data murni tanpa pembocoran model backend ke sisi klien.",
              },
            },
            {
              id: "keunggulan-arsitektur",
              title: "Keunggulan Arsitektur Sistem",
              paragraphs: [
                "RuangTI dibangun di atas fondasi teknologi modern yang mengutamakan kecepatan respon, presisi formula matematika, dan efisiensi penyimpanan tanpa beban bloatware.",
              ],
              table: {
                headers: ["Dimensi Keunggulan", "RuangTI Engineering AI", "AI Generik Konvensional"],
                rows: [
                  ["Basis Pengetahuan (RAG)", "434 Modul Terverifikasi (ISO, ASME, PP, SNI, APICS, IISE)", "Pengetahuan umum tanpa sumber terindeks"],
                  ["Parser File Khusus", "Universal CAD (DWG, DXF, STEP, STL), CNC (G-Code), FlexSim (.fsm/.fsx)", "Hanya PDF dan Teks biasa"],
                  ["Rendering Formula", "KaTeX Editorial Precision dengan baseline alignment & display math", "Teks ASCII kasar atau pecahan bertumpuk"],
                  ["Penyimpanan Berkas", "Zero-DB-Bloat (WebP 85KB, 60B SQLite metadata, 14d auto-prune)", "Database membengkak dengan binary blob"],
                  ["Tingkat Penalaran", "5 Thinking Tiers (Fast, Quick, Balanced, Deep, Ultra Deep)", "Single static prompt mode"],
                ],
              },
            },
            {
              id: "ekosistem-pengguna",
              title: "Untuk Siapa RuangTI Dirancang?",
              paragraphs: [
                "1. Mahasiswa Teknik Industri: Untuk asistensi praktikum (Menggambar Teknik, Pemodelan Sistem, Ergonomi, PTLF), pengerjaan tugas besar, penyusunan skripsi, dan verifikasi kalkulasi eksak.",
                "2. Dosen & Peneliti: Untuk validasi formulasi matematis, meta-analisis literatur ilmiah terindeks (OpenAlex/Crossref), dan eksplorasi topik mutakhir.",
                "3. Praktisi & Insinyur Profesional: Untuk pemecahan masalah lantai pabrik (troubleshooting 8D, implementasi SMK3 PP 50/2012, audit energi ISO 50002, dan optimasi tata letak WMS).",
              ],
            },
          ],
        },
      },
      {
        id: "quickstart",
        title: "Panduan Cepat (Quickstart)",
        description: "Langkah mudah memulai sesi konsultasi keteknikan dan mengunggah berkas rancangan di RuangTI.",
        category: "getting-started",
        badge: "Panduan",
        readTime: "3 min",
        subsections: [
          { id: "langkah-1-autentikasi", title: "1. Masuk & Autentikasi Akun" },
          { id: "langkah-2-pemilihan-tier", title: "2. Memilih Tingkat Penalaran (Thinking Tier)" },
          { id: "langkah-3-unggah-file", title: "3. Mengunggah Berkas Gambar / Simulasi / Dokumen" },
          { id: "langkah-4-menjalankan-solusi", title: "4. Mengeksekusi Solusi & Ekspor Hasil" },
        ],
        content: {
          lead: "Mulai bekerja dengan RuangTI dalam hitungan detik. Ikuti 4 langkah terstruktur berikut untuk mendapatkan hasil analisis keteknikan terbaik.",
          sections: [
            {
              id: "langkah-1-autentikasi",
              title: "1. Masuk & Autentikasi Akun",
              paragraphs: [
                "Kunjungi halaman beranda RuangTI dan klik tombol **Masuk** di sudut kanan atas.",
                "Anda dapat mendaftar menggunakan email kampus UNTIRTA atau akun personal. Sistem autentikasi Better Auth menjamin keamanan sesi dengan enkripsi password standar industri (bcrypt).",
              ],
            },
            {
              id: "langkah-2-pemilihan-tier",
              title: "2. Memilih Tingkat Penalaran (Thinking Tier)",
              paragraphs: [
                "Pada bagian bawah kolom input chat (Composer), klik selector Thinking Effort untuk menyesuaikan daya analisis AI sesuai dengan kompleksitas masalah yang dihadapi:",
              ],
              table: {
                headers: ["Tier Penalaran", "Target Kebutuhan", "Kecepatan Respon"],
                rows: [
                  ["⚡ Fast (0s)", "Tanya jawab definisi kilat, lookup rumus singkat", "Sangat Cepat (~1-2 detik)"],
                  ["🚀 Quick (4s)", "Pengecekan formula standar, konversi satuan teknik", "Cepat (~3-5 detik)"],
                  ["🎯 Balanced (10s)", "Default ideal: Analisis kasus, drafting SOP, perhitungan bertahap", "Optimal (~6-10 detik)"],
                  ["🧠 Deep (16s)", "Optimasi Mixed Integer Programming, desain layout PTLF, RCA 8D", "Mendalam (~12-18 detik)"],
                  ["🔬 Ultra Deep (24s)", "Simulasi sistem kompleks, audit kepatuhan ISO/SMK3, tesis akademik", "Paling Komprehensif (~20-30 detik)"],
                ],
              },
            },
            {
              id: "langkah-3-unggah-file",
              title: "3. Mengunggah Berkas Gambar / Simulasi / Dokumen",
              paragraphs: [
                "Klik ikon Paperclip di sebelah kiri composer untuk melampirkan berkas.",
                "RuangTI secara otomatis mengekstrak konten teknis berkas Anda:",
                "- Berkas CAD (`.dwg`, `.dxf`, `.step`, `.stl`): Ekstraksi geometri, layer, volume bounding box, dan entitas gambar.",
                "- Berkas Simulasi FlexSim (`.fsm`, `.fsx`): Dekompresi biner gzip 0x48 dan ekstraksi hirarki Source, Queue, Processor, Sink, dan waktu siklus.",
                "- Berkas Tabular (`.xlsx`, `.csv`): Ekstraksi ringkasan dataset, jumlah kolom/baris, dan sampel data.",
                "- Berkas Gambar (`.png`, `.jpg`, `.webp`): Otomatis dikompresi di sisi klien via Canvas menjadi WebP 85KB sebelum dikirim.",
              ],
            },
            {
              id: "langkah-4-menjalankan-solusi",
              title: "4. Mengeksekusi Solusi & Ekspor Hasil",
              paragraphs: [
                "Tulis instruksi spesifik Anda (misal: 'Analisis keseimbangan lintasan pada data terlampir dan hitung efisiensi line balancing dengan metode Ranked Positional Weight').",
                "RuangTI akan menyajikan formula KaTeX lengkap, tabel perbandingan, dan diagram langkah kerja. Anda dapat menyalin teks, membagikan link obrolan publik via modal Share, atau mengekspor riwayat obrolan ke format Markdown.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "core-features",
    title: "Fitur Unggulan (Core Features)",
    iconName: "Cpu",
    articles: [
      {
        id: "thinking-engine",
        title: "RuangTI Neural Engine & 5 Thinking Tiers",
        description: "Arsitektur penalaran berjenjang multi-tier dengan visualisasi alur berpikir akordeon (ThinkingBlock).",
        category: "core-features",
        badge: "AI Engine",
        readTime: "5 min",
        subsections: [
          { id: "konsep-thinking-tier", title: "Konsep Multi-Tier Thinking Effort" },
          { id: "visualisasi-thinking-block", title: "Visualisasi Proses Berpikir (ThinkingBlock)" },
          { id: "rekomendasi-penggunaan", title: "Panduan Pemilihan Tier Berdasarkan Kasus" },
        ],
        content: {
          lead: "RuangTI Neural Engine menghadirkan fleksibilitas penalaran adaptif melalui 5 tingkatan alokasi komputasi kognitif untuk menyesuaikan kedalaman analisis terhadap bobot permasalahan.",
          sections: [
            {
              id: "konsep-thinking-tier",
              title: "Konsep Multi-Tier Thinking Effort",
              paragraphs: [
                "Dalam rekayasa sistem industri, tidak semua pertanyaan membutuhkan kedalaman analisis yang sama. Pertanyaan definisi singkat seperti *\"Apa kepanjangan OEE?\"* dapat diselesaikan seketika, sementara perancangan jadwal finite capacity dengan algoritma Shifting Bottleneck membutuhkan waktu penalaran mendalam untuk mengevaluasi batasan waktu luang (*slack time*).",
                "Dengan selector Thinking Effort, pengguna memiliki kendali penuh atas trade-off antara kecepatan respon (*latency*) dan kedalaman analisis (*thoroughness*).",
              ],
              callout: {
                type: "tip",
                title: "Tips Produktivitas",
                message: "Gunakan tier **Balanced** untuk 80% kebutuhan harian Anda. Tingkatkan ke **Deep** atau **Ultra Deep** saat menangani kasus multi-kriteria atau laporan resmi.",
              },
            },
            {
              id: "visualisasi-thinking-block",
              title: "Visualisasi Proses Berpikir (ThinkingBlock)",
              paragraphs: [
                "Saat memilih tier dengan alokasi berpikir (Quick s.d. Ultra Deep), RuangTI merender alur penalaran bertahap di dalam blok akordeon collapsible bertajuk 'Proses Berpikir & Penalaran Sistem'.",
                "Pengguna dapat membuka akordeon ini untuk memeriksa bagaimana AI merumuskan asumsi, menurunkan formula matematis, memeriksa batasan kendala (*constraints*), dan memvalidasi hasil akhir sebelum jawaban utama disajikan.",
              ],
            },
            {
              id: "rekomendasi-penggunaan",
              title: "Panduan Pemilihan Tier Berdasarkan Kasus",
              paragraphs: [
                "Gunakan matriks berikut sebagai panduan praktis memilih tingkat penalaran yang paling efektif:",
              ],
              table: {
                headers: ["Studi Kasus / Permasalahan", "Thinking Tier Disarankan", "Alasan Teknis"],
                rows: [
                  ["Pencarian definisi istilah & standar ISO", "⚡ Fast (0s)", "Tidak membutuhkan penurunan formula bertahap."],
                  ["Kalkulasi EOQ dasar, ROP, Takt Time", "🚀 Quick (4s)", "Formula deterministik satu langkah langsung."],
                  ["Analisis PTLF From-To Chart, SPC Chart, Hiradc", "🎯 Balanced (10s)", "Memerlukan validasi matriks data dan interpretasi."],
                  ["Line Balancing RPW, VRP Clarke-Wright, FMEA AP", "🧠 Deep (16s)", "Melibatkan langkah heuristik iteratif dan perangkingan."],
                  ["Audit Terpadu SMK3/ISO 45001, Desain RCM II Weibull", "🔬 Ultra Deep (24s)", "Membutuhkan evaluasi silang multi-standar dan perumusan komprehensif."],
                ],
              },
            },
          ],
        },
      },
      {
        id: "universal-cad-flexsim-parser",
        title: "Universal CAD & Simulation Parser",
        description: "Penguraian otomatis berkas teknik AutoCAD DWG/DXF, SolidWorks STEP/STL, CNC G-Code, dan FlexSim Simulation.",
        category: "core-features",
        badge: "Parser",
        readTime: "6 min",
        subsections: [
          { id: "arsitektur-parser", title: "Arsitektur Ekstraksi On-the-Fly" },
          { id: "dukungan-format-cad", title: "Format CAD 2D/3D & CNC yang Didukung" },
          { id: "dekompresi-flexsim", title: "Dekompresi Model Biner FlexSim (.fsm/.fsx)" },
          { id: "ui-badges", title: "Visual Badging pada Pesan Chat" },
        ],
        content: {
          lead: "RuangTI dilengkapi parser dokumen teknik universal yang mampu mengekstrak informasi geometris, topologi, parameter mesin, dan model simulasi secara instan tanpa memerlukan instalasi software CAD/CAM di komputer klien.",
          sections: [
            {
              id: "arsitektur-parser",
              title: "Arsitektur Ekstraksi On-the-Fly",
              paragraphs: [
                "Saat pengguna mengunggah berkas teknik melalui antarmuka RuangTI, berkas dikirim ke endpoint `/api/upload/document` di backend FastAPI. Layanan `document_parser.py` secara otomatis mengidentifikasi ekstensi dan magic byte berkas untuk memanggil sub-modul ekstraktor yang sesuai.",
                "Teks terstruktur hasil ekstraksi langsung disuntikkan ke dalam riwayat obrolan (chat context). Berkas fisik di server akan dibersihkan secara otomatis setelah 14 hari oleh cleaner background, namun AI akan tetap mengingat seluruh parameter gambar atau model simulasi selama percakapan berlangsung.",
              ],
            },
            {
              id: "dukungan-format-cad",
              title: "Format CAD 2D/3D & CNC yang Didukung",
              paragraphs: [
                "Berikut adalah kapabilitas ekstraksi untuk setiap kategori format berkas teknik:",
              ],
              table: {
                headers: ["Kategori", "Ekstensi", "Engine Ekstraksi", "Data yang Diekstrak"],
                rows: [
                  ["CAD 2D Drafting", ".dwg, .dxf", "ezdxf & ezdwg parser", "Daftar layer, entitas (LINE, CIRCLE, ARC, TEXT, DIMENSION), bounding limits, blok."],
                  ["CAD 3D Modeling", ".step, .stp", "steputils parser", "Protokol AP203/AP214/AP242, struktur solid body, daftar komponen assembly, volume."],
                  ["3D Mesh / 3D Printing", ".stl, .obj", "trimesh library", "Jumlah facet segitiga (triangles), vertices, estimasi volume padat, bounding box."],
                  ["CNC Machining", ".gcode, .nc, .cnc, .tap", "G-code parser", "Daftar perkakas (Tools T01-T99), spindle speed (S), feed rate (F), jarak travel lintasan X/Y/Z."],
                ],
              },
            },
            {
              id: "dekompresi-flexsim",
              title: "Dekompresi Model Biner FlexSim (.fsm/.fsx)",
              paragraphs: [
                "Berkas simulasi diskrit FlexSim (`.fsm`) menggunakan enkapsulasi biner terkompresi dengan offset magic header gzip pada byte `0x48` (indeks 72).",
                "Parser RuangTI secara otomatis mendeteksi offset biner tersebut, melakukan dekompresi *in-memory* menggunakan `zlib/gzip`, dan memetakan struktur XML/Tree internal FlexSim:",
                "- Objek Sumber Daya: Source, Queue, Processor, Separator, Combiner, Sink.",
                "- Parameter Mesin: Distribusi waktu antar-kedatangan (Inter-Arrival Time), Waktu Pemrosesan (Cycle Time), Kapasitas Buffer.",
                "- Koneksi Port Antar Node: Aliran routing material handling (A-Connect & S-Connect).",
              ],
              codeSnippet: {
                language: "python",
                caption: "Logika Dekompresi FlexSim .fsm Offset 0x48 di backend RuangTI",
                code: `def extract_flexsim_fsm(file_path: str) -> str:
    with open(file_path, "rb") as f:
        data = f.read()
    
    # Deteksi GZIP header (0x1F 0x8B) mulai dari offset 0x48 (72)
    gzip_offset = data.find(b"\\x1f\\x8b", 0x48)
    if gzip_offset != -1:
        import gzip
        decompressed = gzip.decompress(data[gzip_offset:])
        return parse_flexsim_xml_tree(decompressed)
    return "Format biner FlexSim standar tidak terkompresi"`,
              },
            },
            {
              id: "ui-badges",
              title: "Visual Badging pada Pesan Chat",
              paragraphs: [
                "Di antarmuka pesan chat, setiap berkas teknik yang dilampirkan akan ditampilkan dengan badge visual yang intuitif:",
                "- Berkas CAD 2D/3D: Badge oranye dengan ikon Kubus (`Box`) dan label **CAD Drawing / Model**.",
                "- Berkas CNC G-Code: Badge hijau dengan ikon Terminal (`Terminal`) dan label **CNC Program**.",
                "- Berkas FlexSim: Badge ungu dengan ikon Gelombang Sinyal (`Activity`) dan label **FlexSim Simulation Model**.",
              ],
            },
          ],
        },
      },
      {
        id: "rag-knowledge-base",
        title: "434 Modul RAG Knowledge Base Eksak",
        description: "Repositori pengetahuan komprehensif berstandar ilmiah terindeks FTS5 SQLite untuk seluruh domain Teknik Industri.",
        category: "core-features",
        badge: "RAG Hub",
        readTime: "7 min",
        subsections: [
          { id: "struktur-rag", title: "Arsitektur RAG & FTS5 Indexing" },
          { id: "taksonomi-keilmuan", title: "Taksonomi 434 Modul Master" },
          { id: "thesaurus-expansion", title: "FTS5 Query Expansion & Thesaurus" },
        ],
        content: {
          lead: "RuangTI mengintegrasikan 434 modul master pengetahuan Teknik Industri yang diteliti dari jurnal peer-reviewed, standar internasional (ISO, ASME, OSHA, APICS, IISE), dan regulasi perundang-undangan nasional.",
          sections: [
            {
              id: "struktur-rag",
              title: "Arsitektur RAG & FTS5 Indexing",
              paragraphs: [
                "Seluruh 434 modul pengetahuan diurai ke dalam 2.766 bagian semantik (*semantic sections*) dan disimpan dalam database SQLite lokal berkecepatan tinggi dengan ekstensi FTS5 (*Full-Text Search 5*).",
                "Saat pengguna mengirimkan pertanyaan, mesin pencari RAG melakukan ekspansi kueri melalui kamus sinonim istilah teknik (*Industrial Engineering Thesaurus*), menjalankan pencarian BM25 tertimbang, dan menyuntikkan 3 bagian pengetahuan paling relevan langsung ke dalam konteks prompt AI.",
              ],
            },
            {
              id: "taksonomi-keilmuan",
              title: "Taksonomi 434 Modul Master",
              paragraphs: [
                "Cakupan disiplin ilmu dalam RAG RuangTI terbagi ke dalam kluster-kluster strategis berikut:",
              ],
              table: {
                headers: ["Kluster Bidang Keilmuan", "Rentang Modul", "Contoh Standar & Topik Utama"],
                rows: [
                  ["Kurikulum Fundamental TI", "Modul 426 - 434", "Menggambar Teknik ISO 128, Material Fe-Fe3C ASTM E8, Fisika Fluida/Carnot, Kalkulus Marginal EOQ, Kimia Korosi ICCP, Etika PII/ABET, Pancasila TKDN."],
                  ["HSE & Keselamatan Industri", "Modul 401 - 403", "SMK3 PP 50/2012, ISO 45001:2018, HIRADC 5x5, LOTO OSHA 1910.147, Permenaker 5/2018 NAB Kebisingan, IPAL WWTP, B3 PP 22/2021."],
                  ["Drafter, GD&T & DFMA", "Modul 404 - 405", "ASME Y14.5-2018 GD&T, Toleransi ISO 286, Tolerance Stack-Up RSS, DFMA Boothroyd DFA Index, Piping ASME B31.3, P&ID ISA 5.1."],
                  ["Warehouse, Logistik & SCM", "Modul 406 - 407, 416 - 417, 422", "WMS Slotting COI Index, Cube Utilization %, TMS VRP Clarke-Wright, MHE Sizing M/M/c, Control Tower CPFR, MEIO, SCRM TTR/TTS."],
                  ["PPIC & Finite Scheduling", "Modul 408 - 409", "S&OP Agregat Planning, MPS, Rough-Cut Capacity Bill of Resources, MRP Wagner-Whitin, Theory of Constraints DBR, Johnson Flow Shop."],
                  ["Quality Engineering & Six Sigma", "Modul 410 - 411, 418", "IATF 16949 Core Tools (APQP, PPAP, MSA Gage R&R, SPC Cp/Cpk, AIAG-VDA FMEA), Sampling ISO 2859-1 (MIL-STD-105E), 8D RCA, Hoshin Kanri."],
                  ["Maintenance & Reliability", "Modul 414 - 415, 423", "RCM II SAE JA1011, Distribusi Weibull Beta/Eta, ISO 55001, TPM 7 Langkah Jishu Hozen, Six Big Losses OEE, Vibrasi FFT Bearing BPFO/BPFI."],
                  ["Ergonomi & Pengukuran Kerja", "Modul 413, 419, 425", "Maynard MOST TMU, SMED 4-Tahap, VSM Takt Time, Biomekanik Chaffin 2D/3D L5/S1, OWAS, Moore-Garg SI, Shiftwork FRMS Sirkadian."],
                  ["Otomasi & Manajemen Proyek", "Modul 420, 421, 424", "Purdue Model ANSI/ISA-95 Level 0-4, MES MESA-11, B2MML XML, Audit Energi ISO 50002 Pinch Analysis, EVM PMBOK 7th Ed, CPM/PERT Crashing."],
                ],
              },
            },
            {
              id: "thesaurus-expansion",
              title: "FTS5 Query Expansion & Thesaurus",
              paragraphs: [
                "Untuk menjamin pencarian akurat meskipun pengguna menggunakan istilah singkatan (misal: `dbr` atau `hiradc`), mesin RAG secara otomatis memperluas kueri dengan padanan kata kunci resmi sebelum dieksekusi di SQLite FTS5 index.",
              ],
            },
          ],
        },
      },
      {
        id: "web-research-intelligence",
        title: "Web Research Intelligence & Live Citation",
        description: "Integrasi live web search pipeline (OpenAlex, Crossref, Brave, DuckDuckGo) dengan ekstraksi DOI jurnal resmi.",
        category: "core-features",
        badge: "Research",
        readTime: "4 min",
        subsections: [
          { id: "pipeline-pencarian", title: "Arsitektur Multi-Tier Search Pipeline" },
          { id: "integrasi-openalex", title: "Pencarian Literatur Ilmiah Terbuka (OpenAlex & Crossref)" },
          { id: "format-sitasi", title: "Format Visual Kartu Sitasi Sumber" },
        ],
        content: {
          lead: "Saat menangani pertanyaan yang membutuhkan data pasar terkini, studi empiris mutakhir, atau referensi jurnal terindeks, RuangTI mengaktifkan modul Web Research Intelligence untuk menarik sumber eksternal secara real-time.",
          sections: [
            {
              id: "pipeline-pencarian",
              title: "Arsitektur Multi-Tier Search Pipeline",
              paragraphs: [
                "Pipeline pencarian web RuangTI menggunakan strategi bertingkat yang mengutamakan repositori akademis terbuka dan mesin pencari privasi:",
                "1. OpenAlex Academic API: Untuk penarikan metadata jurnal internasional (Judul, Pengarang, Tahun, Jurnal/Konferensi, DOI, Open Access URL).",
                "2. Crossref Metadata API: Untuk validasi silang nomor DOI resmi publikasi ilmiah.",
                "3. DuckDuckGo & Brave Search API: Untuk data industri, berita terkini, dan dokumen kebijakan pemerintah yang belum terindeks di jurnal.",
              ],
            },
            {
              id: "integrasi-openalex",
              title: "Pencarian Literatur Ilmiah Terbuka (OpenAlex & Crossref)",
              paragraphs: [
                "RuangTI memfilter hasil pencarian agar hanya menyajikan referensi peer-reviewed dengan reputasi tinggi. Jika dokumen memiliki status Open Access (OA), tautan PDF langsung akan disertakan dalam hasil konsultasi.",
              ],
            },
            {
              id: "format-sitasi",
              title: "Format Visual Kartu Sitasi Sumber",
              paragraphs: [
                "Di bagian atas respon AI yang menggunakan pencarian web, RuangTI menampilkan grid kartu sumber interaktif berukuran 115x64px dengan favicon website dan judul ringkas. Pengguna dapat mengklik tombol **Semua Sumber** untuk membuka akordeon daftar pustaka lengkap beserta link DOI.",
              ],
            },
          ],
        },
      },
      {
        id: "zero-db-bloat-architecture",
        title: "Arsitektur Zero-DB-Bloat & Storage Auto-Pruning",
        description: "Strategi penyimpanan ultra-ringan dengan kompresi Canvas WebP di sisi klien dan pembersihan otomatis server 14 hari.",
        category: "core-features",
        badge: "Arsitektur",
        readTime: "4 min",
        subsections: [
          { id: "prinsip-zero-bloat", title: "Prinsip Zero-DB-Bloat" },
          { id: "kompresi-webp", title: "Kompresi Gambar Sisi Klien (HTML5 Canvas)" },
          { id: "auto-cleaner-14d", title: "Layanan Pembersihan Otomatis 14 Hari" },
        ],
        content: {
          lead: "RuangTI menerapkan prinsip rekayasa sistem yang meminimalkan jejak memori (memory footprint) dan menjaga integritas performa server dalam jangka panjang.",
          sections: [
            {
              id: "prinsip-zero-bloat",
              title: "Prinsip Zero-DB-Bloat",
              paragraphs: [
                "Banyak aplikasi web mengalami penurunan performa drastis karena menyimpan file biner mentah (Base64/Blob) di dalam tabel database. RuangTI mengadopsi arsitektur terpisah (*Decoupled Storage*):",
                "- Database SQLite hanya mencatat metadata file berukuran ~60 Byte per baris (`id`, `name`, `size`, `ext`, `url`).",
                "- Berkas fisik disimpan di sistem berkas lokal terisolasi (`backend/uploads/`).",
                "- Teks ekstraksi dokumen disuntikkan langsung ke obrolan, sehingga konteks tetap hidup selamanya meskipun file fisik dihapus.",
              ],
            },
            {
              id: "kompresi-webp",
              title: "Kompresi Gambar Sisi Klien (HTML5 Canvas)",
              paragraphs: [
                "Foto dari kamera smartphone atau tangkapan layar beresolusi tinggi (3–8 MB) otomatis dikompresi di browser pengguna menggunakan HTML5 Canvas sebelum transmisi jaringan:",
                "- Format Output: WebP kualitas 0.82 (dengan fallback JPEG).",
                "- Batas Dimensi: Maksimal 1280px pada sumbu terpanjang.",
                "- Hasil: Menghemat >95% bandwidth jaringan (rata-rata ukuran berkas hanya ~85 KB).",
              ],
            },
            {
              id: "auto-cleaner-14d",
              title: "Layanan Pembersihan Otomatis 14 Hari",
              paragraphs: [
                "Layanan latar belakang `media_cleaner.py` berjalan setiap hari pada siklus hidup FastAPI untuk memindai direktori `uploads/images/` dan `uploads/documents/`. Berkas yang telah melewati batas usia 14 hari otomatis dihapus dari disk fisik untuk memastikan kapasitas penyimpanan server selalu longgar.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "industrial-roles",
    title: "Panduan Profesi (Industrial Roles)",
    iconName: "HardHat",
    articles: [
      {
        id: "hse-safety-officer",
        title: "HSE Specialist & Ahli K3 Industri",
        description: "Panduan penerapan SMK3 PP 50/2012, ISO 45001, HIRADC, investigasi insiden SCAT, dan higiene industri.",
        category: "industrial-roles",
        badge: "Profesi",
        readTime: "6 min",
        subsections: [
          { id: "hiradc-risk-matrix", title: "Penyusunan Matriks Risiko HIRADC / IBPRP" },
          { id: "safety-metrics", title: "Kalkulasi Safety Metrics (LTIR, TRIR, Severity Rate)" },
          { id: "loto-scat", title: "Prosedur LOTO 6-Langkah & Investigasi SCAT" },
        ],
        content: {
          lead: "RuangTI menyediakan asistensi komprehensif bagi Ahli K3 Umum dan HSE Specialist untuk memastikan kepatuhan regulasi keselamatan kerja nasional dan internasional.",
          sections: [
            {
              id: "hiradc-risk-matrix",
              title: "Penyusunan Matriks Risiko HIRADC / IBPRP",
              paragraphs: [
                "Identifikasi Bahaya, Penilaian Risiko, dan Penentuan Kendali (HIRADC) menggunakan matriks risiko $5 \times 5$:",
              ],
              formula: {
                math: "R = S \\times P \\times E",
                explanation: "Tingkat Risiko (R) = Keparahan (Severity) x Kemungkinan (Probability) x Paparan (Exposure). Hirarki Pengendalian: Eliminasi -> Substitusi -> Rekayasa Teknik -> Administrasi -> APD.",
              },
            },
            {
              id: "safety-metrics",
              title: "Kalkulasi Safety Metrics (LTIR, TRIR, Severity Rate)",
              paragraphs: [
                "Metrik keselamatan kerja standar OSHA dan Disnaker untuk pelaporan kinerja K3:",
              ],
              table: {
                headers: ["Indikator K3", "Formula Matematis", "Tolak Ukur Standar"],
                rows: [
                  ["LTIR (Lost Time Injury Rate)", "\\text{LTIR} = \\frac{\\text{LTI} \\times 200.000}{\\text{Total Man-Hours}}", "Target: < 0.5 per 200k jam kerja"],
                  ["TRIR (Total Recordable Rate)", "\\text{TRIR} = \\frac{\\text{Recordables} \\times 200.000}{\\text{Total Man-Hours}}", "Target: < 1.5 per 200k jam kerja"],
                  ["SR (Severity Rate)", "\\text{SR} = \\frac{\\text{Lost Workdays} \\times 1.000.000}{\\text{Total Man-Hours}}", "Mengukur rata-rata hari hilang akibat cedera"],
                ],
              },
            },
            {
              id: "loto-scat",
              title: "Prosedur LOTO 6-Langkah & Investigasi SCAT",
              paragraphs: [
                "1. Prosedur Log-Out Tag-Out (LOTO OSHA 1910.147): Persiapan -> Notifikasi -> Penghentian Peralatan -> Isolasi Energi -> Pemasangan Gembok/Label -> Verifikasi Nol Energi (*Zero Energy State*).",
                "2. Investigasi Insiden SCAT (Systematic Cause Analysis Technique): Melacak dari deskripsi kejadian, kontak energi, penyebab langsung (kondisi/tindakan tidak aman), penyebab dasar (faktor manusia/pekerjaan), hingga kelemahan sistem manajemen.",
              ],
            },
          ],
        },
      },
      {
        id: "drafter-cad-designer",
        title: "Drafter & CAD/CAM Mechanical Specialist",
        description: "Standar gambar teknik ISO 128, toleransi geometris ASME Y14.5 GD&T, dan analisis toleransi stack-up.",
        category: "industrial-roles",
        badge: "Profesi",
        readTime: "5 min",
        subsections: [
          { id: "gdt-feature-control", title: "Feature Control Frame ASME Y14.5" },
          { id: "datum-321", title: "Datum Reference Frame 3-2-1" },
          { id: "tolerance-stackup", title: "Tolerance Stack-Up: Worst-Case vs RSS" },
        ],
        content: {
          lead: "Bagi mechanical drafter dan perancang komponen industri, RuangTI menyediakan panduan lengkap penunjukan toleransi geometris GD&T dan kalkulasi kelonggaran perakitan presisi.",
          sections: [
            {
              id: "gdt-feature-control",
              title: "Feature Control Frame ASME Y14.5",
              paragraphs: [
                "Feature Control Frame (FCF) adalah kotak notasi standar untuk mendefinisikan batas variasi geometri komponen:",
                "- Simbol Geometris (14 Karakteristik: Form, Orientation, Profile, Location, Runout).",
                "- Nilai Zona Toleransi (Diameter $\\varnothing$ dan modifier MMC/LMC).",
                "- Datum Utama (Primary), Sekunder (Secondary), dan Tersier (Tertiary).",
              ],
            },
            {
              id: "datum-321",
              title: "Datum Reference Frame 3-2-1",
              paragraphs: [
                "Sistem penguncian derajat kebebasan benda kerja spasial $6\\text{ DOF}$:",
                "- Datum Primer (3 Titik Kontak): Menghilangkan 3 DOF (1 Translasi $Z$, 2 Rotasi $R_x, R_y$).",
                "- Datum Sekunder (2 Titik Kontak): Menghilangkan 2 DOF (1 Translasi $Y$, 1 Rotasi $R_z$).",
                "- Datum Tersier (1 Titik Kontak): Menghilangkan 1 DOF (1 Translasi $X$).",
              ],
            },
            {
              id: "tolerance-stackup",
              title: "Tolerance Stack-Up: Worst-Case vs RSS",
              paragraphs: [
                "Metode evaluasi akumulasi variasi dimensi dalam rantai perakitan:",
              ],
              formula: {
                math: "T_{\\text{WC}} = \\sum |t_i|, \\quad T_{\\text{RSS}} = \\sqrt{\\sum t_i^2}",
                explanation: "Worst-Case (WC) mengasumsikan seluruh toleransi berada di batas ekstrem secara bersamaan (100% interchangeability). Root-Sum-Square (RSS) menggunakan pendekatan statistik distribusi normal untuk menghemat biaya manufaktur.",
              },
            },
          ],
        },
      },
      {
        id: "ppic-planner",
        title: "PPIC Specialist & Master Scheduler",
        description: "Perencanaan produksi terpadu: S&OP, Master Production Schedule (MPS), MRP, dan Theory of Constraints DBR.",
        category: "industrial-roles",
        badge: "Profesi",
        readTime: "6 min",
        subsections: [
          { id: "sop-mps", title: "Hierarki S&OP menuju MPS & RCCP" },
          { id: "mrp-lot-sizing", title: "Logika Net Requirement MRP & Algoritma Lot Sizing" },
          { id: "toc-dbr", title: "Penjadwalan Mesin Terbatas Drum-Buffer-Rope" },
        ],
        content: {
          lead: "PPIC Planner dapat mengandalkan RuangTI untuk menyusun jadwal produksi lantai pabrik, menghitung kebutuhan material bersih, dan mengelola buffer kapasitas mesin kritis.",
          sections: [
            {
              id: "sop-mps",
              title: "Hierarki S&OP menuju MPS & RCCP",
              paragraphs: [
                "Alur perencanaan bertingkat dari Sales & Operations Planning (S&OP) keluarga produk, diagregasikan ke Master Production Schedule (MPS) level SKU per periode waktu (*time bucket*), lalu divalidasi kelayakannya melalui Rough-Cut Capacity Planning (RCCP) Bill of Resources.",
              ],
            },
            {
              id: "mrp-lot-sizing",
              title: "Logika Net Requirement MRP & Algoritma Lot Sizing",
              paragraphs: [
                "Penentuan kebutuhan bersih material ($NR_t$):",
              ],
              formula: {
                math: "NR_t = \\max(0, GR_t - (I_{t-1} + SR_t) + SS)",
                explanation: "Gross Requirement (GR) dikurangi persediaan di tangan (I) dan jadwal penerimaan (SR) ditambah stok pengaman (SS). Lot sizing dapat dihitung via Silver-Meal Heuristic atau Wagner-Whitin Algorithm.",
              },
            },
            {
              id: "toc-dbr",
              title: "Penjadwalan Mesin Terbatas Drum-Buffer-Rope",
              paragraphs: [
                "Penerapan Theory of Constraints (TOC Goldratt) pada lini produksi:",
                "- Drum: Kecepatan detak stasiun kerja paling lambat (*Constraint / Bottleneck Machine*).",
                "- Buffer: Cadangan waktu/material di depan mesin bottleneck (dibagi 3 zona: Hijau, Kuning, Merah).",
                "- Rope: Sinyal pelepasan bahan baku awal yang disinkronkan tepat waktu dengan ritme Drum.",
              ],
            },
          ],
        },
      },
      {
        id: "qa-qc-six-sigma",
        title: "QA/QC Engineer & Six Sigma Black Belt",
        description: "Manajemen mutu otomotif IATF 16949, APQP/PPAP, MSA Gage R&R ANOVA, SPC, dan 8D Problem Solving.",
        category: "industrial-roles",
        badge: "Profesi",
        readTime: "6 min",
        subsections: [
          { id: "iatf-core-tools", title: "5 Core Tools IATF 16949 & APQP/PPAP" },
          { id: "msa-spc", title: "MSA Gage R&R ANOVA & Indeks Kapabilitas Cp/Cpk" },
          { id: "8d-problem-solving", title: "Metodologi 8D Root Cause Analysis" },
        ],
        content: {
          lead: "Panduan lengkap penerapan standar penjaminan mutu tingkat tinggi bagi insinyur QA/QC manufaktur presisi dan otomotif.",
          sections: [
            {
              id: "iatf-core-tools",
              title: "5 Core Tools IATF 16949 & APQP/PPAP",
              paragraphs: [
                "RuangTI memandu pembuatan dokumentasi 5 Core Tools standar industri otomotif global:",
                "1. APQP (Advanced Product Quality Planning) 5-Fase.",
                "2. PPAP (Production Part Approval Process) 18 Dokumen Penyerahan Level 1 s.d. Level 5.",
                "3. AIAG-VDA FMEA (Failure Mode and Effects Analysis) dengan Matriks Action Priority (AP: High, Medium, Low).",
                "4. MSA (Measurement System Analysis 4th Edition).",
                "5. SPC (Statistical Process Control 2nd Edition).",
              ],
            },
            {
              id: "msa-spc",
              title: "MSA Gage R&R ANOVA & Indeks Kapabilitas Cp/Cpk",
              paragraphs: [
                "Evaluasi variasi sistem pengukuran dan kapabilitas proses stabil:",
              ],
              formula: {
                math: "\\%GRR = \\frac{\\sigma_{\\text{measurement}}}{\\sigma_{\\text{total}}} \\times 100\\%, \\quad C_{pk} = \\min\\left( \\frac{USL - \\mu}{3\\sigma}, \\frac{\\mu - LSL}{3\\sigma} \\right)",
                explanation: "Sistem pengukuran diterima jika %GRR < 10% dan ndc >= 5. Proses manufaktur dikatakan kapabel berstandar Six Sigma jika Cpk >= 1.33 (atau 1.67 untuk fitur kritis).",
              },
            },
            {
              id: "8d-problem-solving",
              title: "Metodologi 8D Root Cause Analysis",
              paragraphs: [
                "Alur investigasi cacat produk 8-Disiplin: D1 Bentuk Tim -> D2 Deskripsi Masalah 5W2H -> D3 Tindakan Karantina Darurat (ICA < 24 jam) -> D4 Analisis Akar Masalah (5-Why & Fishbone 6M) -> D5 Tindakan Korektif Permanen (PCA) -> D6 Validasi PCA -> D7 Pencegahan Keberulangan -> D8 Apresiasi Tim.",
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "technical-specs",
    title: "Spesifikasi & Formula (Technical Specs)",
    iconName: "Binary",
    articles: [
      {
        id: "supported-file-formats",
        title: "Format Berkas & Ekstraksi Metadata",
        description: "Daftar lengkap 25+ ekstensi berkas yang didukung beserta parameter data yang diekstrak secara otomatis.",
        category: "technical-specs",
        badge: "Spesifikasi",
        readTime: "4 min",
        subsections: [
          { id: "tabel-ekstensi", title: "Tabel Spesifikasi Format Berkas" },
          { id: "batasan-ukuran", title: "Batas Ukuran & Ketentuan Upload" },
        ],
        content: {
          lead: "RuangTI mendukung pengunggahan berbagai tipe berkas teknis, komputasi, tabular, dan visual yang sering digunakan dalam ekosistem Teknik Industri.",
          sections: [
            {
              id: "tabel-ekstensi",
              title: "Tabel Spesifikasi Format Berkas",
              paragraphs: [
                "Seluruh format berkas berikut diuraikan secara native oleh backend RuangTI:",
              ],
              table: {
                headers: ["Kategori Berkas", "Ekstensi yang Didukung", "Metode Penguraian", "Output Ekstraksi"],
                rows: [
                  ["CAD 2D Drafting", ".dwg, .dxf", "ezdxf & ezdwg parser", "Daftar Layer, Entitas Garis/Busur/Teks, Dimensi, Bounding Box."],
                  ["CAD 3D Modeling", ".step, .stp, .stl, .obj", "steputils & trimesh", "Struktur Solid Body, Protokol AP214, Volume, Facet Mesh."],
                  ["CNC G-Code", ".gcode, .nc, .cnc, .tap", "G-code interpreter", "Program Toolpath, Spindle Speed, Feed Rate, Range Sumbu X/Y/Z."],
                  ["Simulasi Diskrit", "`.fsm`, `.fsx`", "FlexSim GZIP 0x48 decompressor", "Objek Source/Queue/Processor/Sink, Cycle Time, Routing."],
                  ["Data Tabular", ".xlsx, .xls, .csv", "openpyxl & csv parser", "Jumlah Baris/Kolom, Header Kolom, Sampel Dataset 5 Baris."],
                  ["Dokumen Teks", ".pdf, .docx, .txt, .md", "pdfplumber & docx parser", "Teks Paragraf Utuh, Tabel Dokumen, Struktur Heading."],
                  ["Arsip Berkas", ".zip, .tar, .gz, .7z", "zipfile extractor", "Pohon Direktori, Daftar File, Ekstraksi otomatis file di dalamnya."],
                  ["Gambar & Foto", ".png, .jpg, .jpeg, .webp, .svg", "Canvas Compressor (Client-Side)", "WebP 85KB Max 1280px untuk Vision Analysis."],
                ],
              },
            },
            {
              id: "batasan-ukuran",
              title: "Batas Ukuran & Ketentuan Upload",
              paragraphs: [
                "- Batas Ukuran Dokumen / CAD: Maksimal 25 MB per berkas.",
                "- Batas Ukuran Gambar: Maksimal 10 MB (dikompresi otomatis di browser menjadi ~85 KB).",
                "- Kebijakan Privasi Data: Berkas hanya diproses dalam memori sesi Anda dan dihapus otomatis setelah 14 hari.",
              ],
            },
          ],
        },
      },
      {
        id: "scientific-formulas-compendium",
        title: "Kompensasi Formula Matematis TI",
        description: "Kumpulan ringkasan formula matematis penting Teknik Industri yang didukung dengan rendering KaTeX murni.",
        category: "technical-specs",
        badge: "KaTeX",
        readTime: "6 min",
        subsections: [
          { id: "formula-or", title: "Riset Operasi & Teori Antrian" },
          { id: "formula-ergonomi", title: "Ergonomi & Pengukuran Kerja" },
          { id: "formula-kualitas", title: "Pengendalian Kualitas & Keandalan" },
        ],
        content: {
          lead: "RuangTI menguasai perumusan dan kalkulasi eksak untuk ratusan formula matematis Teknik Industri yang dirender dengan tipografi KaTeX editorial berkualitas tinggi.",
          sections: [
            {
              id: "formula-or",
              title: "Riset Operasi & Teori Antrian",
              paragraphs: [
                "Model Antrian Tunggal $M/M/1$ dan Jamak $M/M/c$ (Kendall Notation):",
              ],
              formula: {
                math: "L_q = \\frac{\\lambda^2}{\\mu(\\mu - \\lambda)}, \\quad W_q = \\frac{L_q}{\\lambda} = \\frac{\\lambda}{\\mu(\\mu - \\lambda)} \\quad (\\text{Model } M/M/1)",
                explanation: "Di mana lambda adalah tingkat kedatangan rata-rata (Arrival Rate) dan mu adalah tingkat pelayanan rata-rata (Service Rate) dengan utilitas rho = lambda / mu < 1.",
              },
            },
            {
              id: "formula-ergonomi",
              title: "Ergonomi & Pengukuran Kerja",
              paragraphs: [
                "Persamaan Pengangkatan Beban Direkomendasikan NIOSH Lifting Equation (RNLE):",
              ],
              formula: {
                math: "RWL = LC \\times HM \\times VM \\times DM \\times AM \\times FM \\times CM",
                explanation: "Load Constant LC = 23 kg (51 lbs) dikalikan pengali Horizontal (HM), Vertikal (VM), Jarak (DM), Asimetri (AM), Frekuensi (FM), dan Kopling (CM). Indeks Pengangkatan LI = Berat Beban / RWL.",
              },
            },
            {
              id: "formula-kualitas",
              title: "Pengendalian Kualitas & Keandalan",
              paragraphs: [
                "Fungsi Keandalan Distribusi Weibull 2-Parameter:",
              ],
              formula: {
                math: "R(t) = e^{-\\left( \\frac{t}{\\eta} \\right)^\\beta}, \\quad h(t) = \\frac{\\beta}{\\eta} \\left( \\frac{t}{\\eta} \\right)^{\\beta - 1}",
                explanation: "Beta adalah parameter bentuk (Shape Parameter / Bathtub Curve) dan Eta adalah umur karakteristik (Scale Parameter / Characteristic Life saat 63.2% populasi gagal).",
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: "faq-troubleshooting",
    title: "FAQ & Bantuan",
    iconName: "HelpCircle",
    articles: [
      {
        id: "faq",
        title: "Pertanyaan Umum (FAQ)",
        description: "Jawaban atas pertanyaan seputar akun, privasi data, ekspor chat, dan integrasi kurikulum UNTIRTA.",
        category: "faq-troubleshooting",
        badge: "FAQ",
        readTime: "4 min",
        subsections: [
          { id: "faq-akun", title: "Akun & Autentikasi" },
          { id: "faq-privasi", title: "Privasi Data & Berkas" },
          { id: "faq-kurikulum", title: "Integrasi Kurikulum UNTIRTA" },
        ],
        content: {
          lead: "Temukan jawaban cepat atas pertanyaan yang sering diajukan oleh mahasiswa, dosen, dan praktisi pengguna RuangTI.",
          sections: [
            {
              id: "faq-akun",
              title: "Akun & Autentikasi",
              paragraphs: [
                "Q: Apakah saya harus memiliki email UNTIRTA untuk menggunakan RuangTI?",
                "A: Tidak. RuangTI terbuka untuk seluruh mahasiswa, akademisi, dan praktisi umum. Namun, pengguna dengan email institusi UNTIRTA mendapatkan akses langsung ke modul kurikulum lokal.",
                "Q: Bagaimana jika saya lupa password akun saya?",
                "A: Anda dapat melakukan reset password melalui menu login atau menghubungi administrator lab sistem informasi industri.",
              ],
            },
            {
              id: "faq-privasi",
              title: "Privasi Data & Berkas",
              paragraphs: [
                "Q: Apakah file CAD atau dokumen yang saya unggah aman dan tidak disebarluaskan?",
                "A: Sangat aman. Seluruh berkas yang diunggah hanya dapat diakses oleh sesi percakapan Anda. Sistem menerapkan Zero-DB-Bloat dan auto-pruning yang secara otomatis menghapus berkas fisik setelah 14 hari.",
              ],
            },
            {
              id: "faq-kurikulum",
              title: "Integrasi Kurikulum UNTIRTA",
              paragraphs: [
                "Q: Apakah modul RAG RuangTI selaras dengan silabus mata kuliah Teknik Industri UNTIRTA?",
                "A: Ya. Modul 426 s.d. 434 secara khusus disusun mengikuti Rencana Pembelajaran Semester (RPS) resmi Jurusan Teknik Industri Fakultas Teknik UNTIRTA, mencakup Menggambar Teknik, Pengantar TI, Material Teknik, Fisika Dasar, Kalkulus, Kimia Dasar, Etika Keinsinyuran PII, dan Kebijakan TKDN Pancasila.",
              ],
            },
          ],
        },
      },
    ],
  },
];
