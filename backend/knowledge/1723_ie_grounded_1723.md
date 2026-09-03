# 1723 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Lintas-Domain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatik dari arsitektur monolitik System-on-Chip (SoC) menuju arsitektur chiplet dan three-dimensional integrated circuit (3D-IC), sebuah pergeseran yang dipicu oleh berakhirnya skalabilitas sederhana mengikuti Hukum Moore pada node proses sub-3 nm. Ksenia Roze dan Mark Gerber (2026) dalam naskah "EDA Solution for Chiplet and 3D-IC Design" yang dipublikasikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* (DOI: 10.23919/icep-hbs69241.2026.11550563) menegaskan bahwa kompleksitas desain sistem heterogen modern sudah melampaui kapasitas metodologi Electronic Design Automation (EDA) konvensional yang dirancang untuk SoC planar. Biaya rekayasa desain (NRE) sebuah SoC先进 pada node 2 nm telah menembus ambang USD 500 juta, sementara yield per wafer turun signifikan karena area die yang membesar, menjadikan *known-good-die* (KGD) sebagai mata rantai kritis dalam rantai pasok. Roze dan Gerber menekankan bahwa dekomposisi sistem menjadi beberapa chiplet yang kemudian diintegrasikan secara 3D menggunakan teknologi *hybrid bonding* mampu meningkatkan yield fungsional sistem hingga 1,7–2,3 kali lipat dibanding implementasi monolitik, sembari menekan biaya manufaktur kumulatif hingga 35–40% pada volume produksi tahunan di atas 10 juta unit.

Konteks ekonominya makin diperburuk oleh fragmentasi geopolitik dan tingginya capital expenditure (CapEx) fab先进 yang kini melampaui USD 20 miliar per fasilitas. Strategi chiplet memungkinkan *fabless designer* seperti AMD, NVIDIA, Intel, dan TSMC untuk melakukan sourcing dari beberapa process node secara simultan—misalnya chiplet komputasi 3 nm TSMC N3E, chiplet I/O 5 nm, dan chiplet analog 28 nm—lalu mengintegrasikannya dalam satu paket heterogen. Lau (2023) dalam buku "Chiplet Design and Heterogeneous Integration Packaging" (DOI: 10.1007/978-981-19-9917-8_6) menunjukkan bahwa teknologi *Cu-Cu hybrid bonding* menjadi enabler utama karena menawarkan pitch interkoneksi sub-10 µm dengan resistansi kontak di bawah 5 mΩ per sambungan, latensi propagasi ~3 ps per层, dan densitas sambungan 10⁶–10⁸ per cm², jauh melampaui batas termomekanik flip-chip solder bump (~100–150 µm pitch). Pergeseran ini menciptakan permintaan industrial baru akan *multi-die floorplanning*, *partitioning-aware synthesis*, *thermal-aware placement*, *timing closure* lintas-die, dan verifikasi *sign-off* paket-chip simultan—ranah di mana EDA legacy gagal memberikan solusi terpadu. Urgensi operasional, ekonomi, dan teknis inilah yang menjadi justifikasi utama pengembangan platform EDA khusus chiplet dan 3D-IC yang dibahas kedua literatur.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur 3D-IC dengan hybrid bonding memerlukan formulasi multi-domain yang mencakup elektrik, termal, termo-mekanik, dan keandalan. Roze dan Gerber (2026) mengusulkan kerangka optimasi lintas-domain yang dinormalisasi ke dalam satu fungsi objektif gabungan.

**Fungsi Objektif Optimasi Lintas-Domain:**

Minimisasi biaya total sistem $\mathcal{C}_{tot}$ diberikan oleh:

$$\mathcal{C}_{tot} = \alpha \cdot \mathcal{C}_{design} + \beta \cdot \mathcal{C}_{manufacturing} + \gamma \cdot \mathcal{C}_{operating}$$

dengan bobot relatif $\alpha + \beta + \gamma = 1$ yang merepresentasikan preferensi desainer terhadap trade-off NRE vs. biaya produksi vs. biaya operasional.

**Model Resistansi Termal Jaringan 3D-IC:**

Untuk stack chiplet dengan $n$ die dan $m$ sambungan hybrid bonding per area $A$, resistansi termal ekuivalen $\theta_{JA}$ die efektif ke ambien dimodelkan sebagai jaringan RC 1D-3D:

$$\theta_{JA} = \frac{1}{A} \sum_{i=1}^{n} \frac{t_i}{k_{th,i}} + \frac{1}{A \cdot m} \sum_{j=1}^{m} \left[ R_{b,j} + R_{TSV,j} \right]$$

di mana $t_i$ adalah ketebalan die ke-$i$, $k_{th,i}$ konduktivitas termal material (untuk Si $k \approx 148 \text{ W/m·K}$, untuk Cu $k \approx 401 \text{ W/m·K}$, untuk underfill epoxy $k \approx 0,8 \text{ W/m·K}$), $R_{b,j}$ resistansi kontak sambungan hybrid bonding, dan $R_{TSV,j}$ resistansi through-silicon via.

**Model Kelambatan Propagasi Inter-Die:**

Untuk sambungan hybrid bonding Cu-Cu dengan tinggi $h_b$ dan diameter efektif $d_b$ (biasanya 3–10 µm), kapasitansi parasitik per sambungan:

$$C_{b} = \varepsilon_0 \varepsilon_r \frac{\pi d_b^2}{4 h_b} + C_{fringe}$$

dengan permitivitas relatif efektif $\varepsilon_r \approx 3,5$ untuk dielektrik organik BEOL. Resistansi konduktor sambungan Cu-Cu:

$$R_{b} = \frac{4 \rho_{Cu} \cdot h_b}{\pi d_b^2}$$

di mana $\rho_{Cu} = 1,68 \times 10^{-8} \text{ Ω·m}$. Konstanta RC yang dihasilkan menentukan batas bandwidth per sambungan:

$$\tau_{RC} = R_b \cdot C_b = \frac{\rho_{Cu} \varepsilon_0 \varepsilon_r h_b^2}{h_b} = \rho_{Cu} \varepsilon_0 \varepsilon_r h_b$$

**Model Yield Komposit Sistem Multi-Die:**

Yield sistem komposit dengan $N$ chiplet independen yang masing-masing memiliki yield die tunggal $Y_i$:

$$Y_{system} = \prod_{i=1}^{N} Y_i \cdot Y_{assembly}$$

di mana $Y_{assembly}$ merepresentasikan yield proses hybrid bonding. Lau (2023) menyatakan bahwa $Y_{assembly}$ untuk hybrid bonding Cu-Cu先进 saat ini berada pada 0,985–0,995 untuk pitch 10 µm, turun menjadi 0,93–0,96 untuk pitch < 3 µm karena sensitivitas misalignment sub-200 nm.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menjabarkan arsitektur EDA end-to-end untuk chiplet/3D-IC yang beroperasi dalam lima tahap prosedural. Prosedur ini selaras dengan standar IEEE 2401 dan inisiatif Universal Chiplet Interconnect Express (UCIe) untuk interoperabilitas.

**Tahap 1 — System-Level Partitioning & Co-Design:**
1. Definisikan fungsi target sistem menggunakan *High-Level Synthesis (HLS)* C/C++/SystemC.
2. Lakukan profiling komputasi-akurat untuk mengidentifikasi *hotspot* yang memerlukan node先进 (mis. N3) versus fungsi pendukung yang cukup pada node成熟 (mis. N5/N7).
3. Pilih *partitioning strategy*: *functional partitioning* (CPU vs. GPU vs. I/O) atau *physical partitioning* (thermal islands).

**Tahap 2 — Chiplet-Level Implementation:**
1. Implementasikan masing-masing chiplet menggunakan *place-and-route* per-node (Synopsys ICC2, Cadence Innovus, Siemens Calibre).
2. Lakukan *static timing analysis* (STA) per chiplet dengan *extracted SPEF*.
3. Tutup lintasan per chiplet dengan target *slack* minimum $\geq 50$ ps untuk akomodasi variabilitas lintas-die.

**Tahap 3 — 3D Stack Assembly & Hybrid Bonding Planning:**
1. Tentukan *stack order* optimal melalui analisis *thermal-aware placement* dengan algoritma *force-directed* atau *simulated annealing*.
2. Pilih *bonding pitch* sesuai kapabilitas foundry: TSMC SoIC-X (pitch 9 µm untuk CoWoS-L), Intel Foveros Direct (pitch < 3 µm untuk pitch ultra-halus), IMEC (eksperimental pitch 0,4 µm).
3. Definisikan *Redistribution Layer (RDL)* routing dengan memperhatikan *current density* Cu ($J_{max} \leq 5 \times 10^5 \text{ A/cm}^2$ untuk electromigration reliability).

**Tahap 4 — Multi-Domain Sign-off:**
- **Timing sign-off:** STA multi-corner multi-mode (MCMM) dengan *path-based analysis* yang mencakup *inter-die delay* melalui *chiplet interface file* (CIF).
- **Thermal sign-off:** Transien termal menggunakan *compact thermal model* (CTM) 2-resistor atau delaminasi 3D penuh dengan Fluent/COMSOL.
- **Power integrity sign-off:** Analisis IR-drop dan elektromigrasi pada *power delivery network* (PDN) stack.
- **Signal integrity sign-off:** Analisis *channel* SerDes pada interface UCIe (32 Gbps per lane, 64 lanes = 2 Tbps agregat).

**Tahap 5 — Package Co-Design Verification:**
1. Ekstraksi parasitik RLC paket-substrat-board simultan.
2. Simulasi *power-on-reset*, *boundary scan*, dan *JTAG* untuk testabilitas stack.
3. Generate *GDSII/OASIS* final untuk masing-masing fab dan tape-out.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Desain AI accelerator dengan 4 chiplet (1× compute die N3, 1× HBM interface die, 2× I/O chiplet). Pitch hybrid bonding target = 9 µm, diameter pad 6 µm, tinggi bond 5 µm. Area total stack = 15×15 mm². Power budget = 150 W total.

**Perhitungan 1: Densitas Sambungan Hybrid Bonding**

Jumlah sambungan dalam satu array:
$$N = \frac{A_{array}}{p^2} = \frac{(15 \times 10^{-3})^2}{(9 \times 10^{-6})^2} = \frac{2,25 \times 10^{-4}}{8,1 \times 10^{-11}} = 2,78 \times 10^{6} \text{ sambungan}$$

**Perhitungan 2: Resistansi Sambungan Cu-Cu**

$$R_b = \frac{4 \rho_{Cu} h_b}{\pi d_b^2} = \frac{4 \cdot 1,68 \times 10^{-8} \cdot 5 \times 10^{-6}}{\pi \cdot (6 \times 10^{-6})^2} = \frac{3,36 \times 10^{-13}}{1,131 \times 10^{-10}} = 2,97 \text{ mΩ}$$

**Perhitungan 3: Kapasitansi Sambungan**

Asumsikan $C_{fringe} \approx 0,3 C_{parallel}$:

$$C_b = 1,3 \cdot \varepsilon_0 \varepsilon_r \frac{\pi d_b^2}{4 h_b} = 1,3 \cdot 8,854 \times 10^{-12} \cdot 3,5 \cdot \frac{\pi \cdot 3,6 \times 10^{-11}}{2 \times 10^{-5}} = 2,27 \times 10^{-17} \text{ F} = 22,7 \text{ fF}$$

**Perhitungan 4: Konstanta RC per Sambungan**

$$\tau_{RC} = R_b \cdot C_b = 2,97 \times 10^{-3} \cdot 2,27 \times 10^{-17} = 6,74 \times 10^{-14} \text{ s} = 67,4 \text{ fs}$$

Bandwidth estimasi (cut-off frekuensi $-3$ dB):
$$f_{-3dB} = \frac{1}{2\pi \tau_{RC}} = \frac{1}{2\pi \cdot 6,74 \times 10^{-14}} = 2,36 \