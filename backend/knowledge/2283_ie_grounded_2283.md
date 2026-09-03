# 2283 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Rekayasa Sistem Pengemasan Lanjut

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari paradigma integrasi monolitik Moore's Law menuju paradigma *heterogeneous integration* (HI) yang dimediasi oleh arsitektur chiplet. Sebagaimana ditegaskan oleh Roze dan Gerber (2026) dalam makalahnya yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, batas-batas fisik penskalaan transistor node 3 nm dan 2 nm telah memaksa industri untuk mendekomposisi *system-on-chip* (SoC) monolitik menjadi beberapa *die* kecil — yang disebut chiplet — yang kemudian diintegrasikan kembali dalam sebuah paket menggunakan interposer silikon, *redistribution layer* (RDL), atau teknologi *hybrid bonding* tembaga-tembaga (Cu-Cu). Pergeseran ini bukan sekadar pilihan teknologi, melainkan respons ekonomis dan teknikal terhadap tiga keterbatasan utama: (i) *yield* wafer yang menurun secara eksponensial terhadap luas die, (ii) biaya *mask set* litografi EUV yang melonjak di atas USD 30 juta per set pada node先进, dan (iii) fragmentasi proses teknologi yang mengharuskan penggunaan *process design kit* (PDK) berbeda untuk logika, memori, RF, dan analog dalam satu sistem.

Konteks industri yang melatari kebutuhan akan solusi Electronic Design Automation (EDA) untuk chiplet dan 3D-IC sangat mendesak. Pada tahun 2025, pasar chiplet global tercatat melampaui USD 45 miliar dengan *compound annual growth rate* (CAGR) lebih dari 40%, didorong oleh adopsi masif pada pusat data AI, akselerator HPC, dan kendaraan listrik otonom (Roze & Gerber, 2026). Namun, kompleksitas desain melonjak secara drastis: sebuah sistem 3D-IC modern dapat mengandung 4–12 chiplet, lebih dari 100.000 *through-silicon via* (TSV), dan ribuan sambungan *hybrid bonding* dengan pitch di bawah 3 µm. Tanpa dukungan EDA khusus, waktu desain meningkat hingga 3–5× dibandingkan SoC monolitik dengan kompleksitas logika setara, dan *tape-out* sering gagal pada tahap verifikasi *signal integrity*, *power integrity*, dan *thermal*.

Urgensi ekonomis dan operasional diperkuat oleh Lau (2023) yang mendokumentasikan bahwa teknologi *Cu-Cu hybrid bonding* — yang menjadi tulang punggung integrasi vertikal 3D-IC generasi baru — memerlukan presisi alignment di bawah ±200 nm, suhu proses di bawah 300°C, dan kontrol *copper pad recess* dalam rentang ±5 nm. Angka-angka ini menunjukkan bahwa rekayasa sistem untuk pengemasan lanjut bukan lagi domain terpisah dari desain chip, melainkan bagian integral dari aliran EDA yang harus dimodelkan secara koheren sejak tahap *floorplanning*. Modul 2283 ini akan membedah secara kuantitatif bagaimana solusi EDA modern menjawab tantangan tersebut melalui formulasi matematis, SOP rekayasa, dan studi kasus numerik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya dan Yield untuk Dekomposisi Chiplet

Landasan teori paling mendasar bagi rekayasa chiplet adalah **model biaya Cho-Laud** yang telah diperbarui untuk konteks heterogen. Roze dan Gerber (2026) menyajikan perluasannya sebagai berikut. Untuk SoC monolitik dengan luas die efektif $A$ dan *yield* proses $Y_0$, biaya per *good die* pada wafer dapat dinyatakan sebagai:

$$
C_{\text{good}} = \frac{C_{\text{wafer}}}{N \cdot Y_0(A)}
$$

dengan $C_{\text{wafer}}$ adalah biaya proses wafer, $N$ jumlah *die* per wafer, dan $Y_0(A) = e^{-D_0 A}$ mengikuti model Poison dengan *defect density* $D_0$. Untuk arsitektur chiplet, sistem dipecah menjadi $k$ sub-die dengan luas $A_i$ yang masing-masing memiliki biaya integrasi paket $C_{\text{int}}$:

$$
C_{\text{chiplet}}^{\text{system}} = \sum_{i=1}^{k} \frac{C_{\text{wafer},i}}{N_i \cdot Y_0(A_i)} + C_{\text{int}}
$$

Ambang batas ekonomis integrasi chiplet terjadi ketika:

$$
\sum_{i=1}^{k} \frac{C_{\text{wafer},i}}{N_i \cdot e^{-D_0 A_i}} + C_{\text{int}} \leq \frac{C_{\text{wafer}}^{\text{mono}}}{N_{\text{mono}} \cdot e^{-D_0 \sum A_i}}
$$

Persamaan ini menjelaskan mengapa dekomposisi menjadi chiplet lebih ekonomis untuk sistem di atas 200 mm² pada node ≤ 5 nm.

### 2.2 Resistansi TSV dan Model Resistif untuk Hybrid Bonding

Setiap sambungan TSV dan *bump* hybrid bonding memiliki resistansi listrik yang harus dimasukkan dalam simulasi EDA. Resistansi DC sebuah TSV silikon dengan diameter $d$, tinggi $h$, dan lapisan barrier Ta/TaN dengan resistivitas $\rho_{\text{barrier}}$ adalah:

$$
R_{\text{TSV}} = \frac{4 \rho_{\text{Cu}} h}{\pi d^2} + 2 R_{\text{barrier}} + R_{\text{contact}}
$$

dengan $\rho_{\text{Cu}} \approx 1.68 \times 10^{-8} \, \Omega \cdot \text{m}$. Untuk sambungan *Cu-Cu hybrid bonding* pada pitch $p$ dengan luas kontak efektif $A_{\text{eff}} = (p - 2\delta)^2$, di mana $\delta$ adalah *misalignment* lateral, resistansi sambungan adalah:

$$
R_{\text{HB}} = \frac{\rho_{\text{Cu}} \cdot t_{\text{bond}}}{A_{\text{eff}} \cdot N_{\text{contacts}}} \cdot f(T)
$$

dengan $t_{\text{bond}}$ adalah ketebalan efektif lapisan tembaga setelah *bonding* (umumnya 3–5 µm) dan $f(T)$ adalah faktor koreksi suhu operasi.

### 2.3 Model Termal 3D-IC dan Resistansi Termal Jalur

Distribusi panas dalam paket 3D-IC dimodelkan menggunakan jaring resistansi termal (thermal resistance network). Resistansi termal konduksi satu TSV yang membawa fluks panas ke *heat spreader* die atas:

$$
\theta_{\text{TSV,cond}} = \frac{h}{k_{\text{Si}} \cdot A_{\text{TSV}}}
$$

dengan $k_{\text{Si}} \approx 148 \, \text{W/m·K}$ pada suhu ruang. Total resistansi termal paket multi-die yang disusun secara vertikal mengikuti jaring seri-paralel:

$$
\theta_{\text{j-a}} = \sum_{j=1}^{n} \theta_{j,\text{die}} + \theta_{\text{interface}} + \theta_{\text{tim}} + \theta_{\text{spread}} + \theta_{\text{conv}}
$$

Suhu *junction* maksimum menjadi fungsi disipasi daya:

$$
T_j = T_a + P_{\text{total}} \cdot \theta_{\text{j-a}}
$$

### 2.4 Optimasi Routing Redistribution Layer (RDL)

RDL adalah tulang punggung routing sinyal antar-chiplet. Panjang routing rata-rata $\bar{L}_{\text{RDL}}$ antar-bump pada interposer mengikuti persamaan dimensi untuk jaringan Manhattan:

$$
\bar{L}_{\text{Manhattan}} \approx 0.5 \cdot \sqrt{N_{\text{IO}}} \cdot p_{\text{bump}}
$$

Total resistansi jalur RDL dengan jumlah *escape routing* $N_{\text{esc}}$ adalah:

$$
R_{\text{RDL}} = \frac{\rho_{\text{Cu}} \cdot \bar{L}_{\text{Manhattan}}}{w_{\text{RDL}} \cdot t_{\text{RDL}}} \cdot N_{\text{esc}}
$$

Kapasitansi parasitik per satuan panjang yang memengaruhi *delay* propagasi:

$$
C_{\text{line}} = \varepsilon_0 \varepsilon_r \frac{w}{h_{\text{diel}}}
$$

dengan $\varepsilon_r$ permitivitas relatif dielektrik (umumnya 3.0–3.5 untuk SiO₂ berbasis low-k).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Aliran EDA untuk desain chiplet dan 3D-IC mengikuti arsitektur berlapis yang diajukan oleh Roze dan Gerber (2026) serta distandarisasi oleh *Chiplet Design Exchange (CDX)* dan *Universal Chiplet Interconnect Express (UCIe)*. SOP rekayasa industri untuk proyek 3D-IC lengkap tersusun atas tujuh tahapan sistematis berikut.

### 3.1 Diagram Alir Proses Desain Chiplet 3D-IC

```
┌────────────────────────────────────────────────────────────┐
│  TAHAP 1: System Specification & Chiplet Partitioning      │
│  ─ Performa, daya, area, biaya, IP reuse strategy          │
│  ─ Output: Chiplet Manifest (UCIe-compliant)               │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  TAHAP 2: Package Co-Design & Floorplanning                │
│  ─ Penempatan chiplet + interposer 2.5D/3D                 │
│  ─ Optimasi termal awal dengan Power-Thermal Map           │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  TAHAP 3: Bump/TSV/RDL Planning                            │
│  ─ Penentuan pitch, jumlah IO per chiplet                  │
│  ─ Escape routing RDL dengan pin access optimization       │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  TAHAP 4: Implementation & Routing                         │
│  ─ Global routing, detailed routing multi-die              │
│  ─ Hybrid bonding routing (Cu-Cu) vs microbump trade-off  │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  TAHAP 5: Multi-Physics Verification                       │
│  ─ Sign-off: SI/PI, thermal, IR-drop, EM, DFT             │
│  ─ TSV/microbump electromigration analysis                 │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  TAHAP 6: Assembly & Manufacturing Hand-off                │
│  ─ GDSII + bond map + test program + OSAT flow            │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  TAHAP 7: Post-Silicon Validation & Feedback Loop         │
│  ─ Yield learning → update PDK & rule deck                │
└────────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Operasional Detail per Tahapan

**Tahap 1 — Chiplet Partitioning.** Insinyur menggunakan algoritma *min-cut* berbasis *hypergraph* dengan fungsi objektif gabungan:

$$
\min_{P} \left[ \alpha \cdot \sum_{i,j \in P} w_{ij} \cdot c_{ij} + \beta \cdot A_{\text{chiplet}}^{\max} + \gamma \cdot P_{\text{inter-chiplet}} \right]
$$

dengan $w_{ij}$ bobot koneksi logika, $c_{ij}$ biaya sambungan, dan $\alpha, \beta, \gamma$ parameter pembobot.

**Tahap 2 — Co-Design Package Floorplanning.** Pemodelan dilakukan dengan memperlakukan setiap chiplet sebagai *macro* dengan konstrain termal. Algoritma *simulated annealing* meminimalkan:

$$
\Phi_{\text{floorplan}} = \lambda_1 \cdot \Phi_{\text{wirelength}} + \lambda_2 \cdot \Phi_{\text{thermal}} + \lambda_3 \cdot \Phi_{\text{crossing}}
$$

**Tahap 3 — Bump Planning.** Pitch sambungan ditentukan oleh hukum *Rentz定律* yang diturunkan dari Roze & Gerber (2026):

$$
p_{\min} = \sqrt{\frac{A_{\text{die}} \cdot \eta_{\text{I/O}}}{N_{\text{IO}}}} \cdot k_{\text{process}}
$$

dengan $\eta_{\text{I/O}}$ efisiensi escape routing