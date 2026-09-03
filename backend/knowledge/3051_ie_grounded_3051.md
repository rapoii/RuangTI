# 3051 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Sistem Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transformasi paradigma yang mendasar, bergerak dari pendekatan desain monolitik tradisional menuju arsitektur chiplet dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh berakhirnya hukum Moore secara ekonomis—di mana biaya fabrikasi node proses sub-3 nm melonjak secara eksponensial—dan oleh kebutuhan akan komputasi performant yang memadukan berbagai teknologi proses (Heterogeneous Integration/HI) dalam satu paket sistem. Roze dan Gerber (2026) dalam paper "EDA Solution for Chiplet and 3D-IC Design" yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, DOI: 10.23919/icep-hbs69241.2026.11550563, mengidentifikasi bahwa tools Electronic Design Automation (EDA) konvensional tidak lagi memadai untuk menghadapi kompleksitas desain multi-die, multi-process-node, dan interkoneksi densitas tinggi.

Urgensi operasional dari solusi EDA modern dapat dipahami dari tiga dimensi. Pertama, secara teknis, packaging pitch telah turun ke skala sub-10 μm pada teknologi hybrid bonding Cu-Cu, yang memerlukan akurasi placement pada orde nanometer dan management thermal-mechanical stress yang sophisticated. Kedua, secara ekonomi, pasar chiplet global diproyeksikan mencapai USD 110 miliar pada 2030 dengan CAGR di atas 40%, sehingga kelangkaan tool EDA menjadi bottleneck strategis. Ketiga, secara manufaktur, yield per die turun secara non-linear ketika jumlah die dalam satu paket melebihi ambang kritis, sehingga diperlukan optimasi desain-untuk-manufaktur (DFM) yang terintegrasi.

Lau (2023) dalam "Chiplet Design and Heterogeneous Integration Packaging" (DOI: 10.1007/978-981-19-9917-8_6) memperkuat narasi ini dengan menunjukkan bahwa keberhasilan integrasi heterogen sangat bergantung pada tiga pilar: (1) standardisasi interface fisik seperti UCIe (Universal Chiplet Interconnect Express), (2) kematangan proses hybrid bonding, dan (3) ketersediaan platform EDA end-to-end yang mampu mengorkestrasi floorplanning, routing, verifikasi, dan sign-off multi-die. Tanpa pilar ketiga,即使 dengan teknologi proses yang matang, time-to-market dan first-time-right akan terkompromikan.

Konteks industri makin relevan ketika mempertimbangkan aplikasi high-performance computing (HPC), AI accelerators, dan 5G/6G infrastructure yang membutuhkan bandwidth memori masif melalui stack HBM (High Bandwidth Memory). Roze dan Gerber (2026) menekankan bahwa desain 3D-IC dengan stack memori-logik memerlukan co-design yang simultan antara electrical, thermal, dan mechanical domains—sebuah tantangan multidisiplin yang hanya dapat dipecahkan oleh tool EDA generasi baru dengan kapabilitas multi-physics co-simulation.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis untuk desain chiplet dan 3D-IC dibangun di atas beberapa fondasi matematis yang perlu dipahami secara mendalam. Pertama, model biaya manufaktur chiplet mengikuti fungsi non-linear terhadap jumlah die dan yield per-die. Roze dan Gerber (2026) merumuskan **Known-Good-Die (KGD) probability** untuk sistem multi-die sebagai:

$$P_{KGD} = \prod_{i=1}^{n} Y_i$$

di mana $Y_i$ adalah yield individu die ke-$i$ dan $n$ adalah jumlah chiplet dalam paket. Yield paket efektif $Y_{package}$ kemudian menjadi:

$$Y_{package} = P_{KGD} \cdot Y_{assembly}$$

di mana $Y_{assembly}$ merepresentasikan yield proses packaging dan interkoneksi. Sebagai ilustrasi, untuk sistem dengan $n=8$ chiplet identik dengan yield per-die $Y_i = 0.95$, maka $P_{KGD} = 0.95^8 \approx 0.663$, yang berarti satu dari tiga paket akan gagal pada tingkat die—menjelaskan urgensi strategi redundancy dan built-in self-test (BIST) dalam desain chiplet.

Kedua, untuk analisis hybrid bonding Cu-Cu, Lau (2023) mengembangkan model thermal-mechanical yang menyeimbangkan koefisien ekspansi termal (CTE) antar material. Tegangan geser antarmuka $\tau$ pada sambungan Cu-Cu dapat dihitung sebagai:

$$\tau = \frac{\Delta\alpha \cdot \Delta T \cdot E_{Cu} \cdot h_{Cu}}{2(1-\nu_{Cu}) \cdot d_{bond}}$$

di mana $\Delta\alpha$ adalah perbedaan CTE, $\Delta T$ adalah delta suhu operasional, $E_{Cu} \approx 110$ GPa adalah modulus Young tembaga, $h_{Cu}$ adalah tinggi pillar tembaga, $\nu_{Cu} \approx 0.34$ adalah rasio Poisson, dan $d_{bond}$ adalah diameter pillar.

Ketiga, untuk optimasi floorplanning 3D-IC, fungsi objektif yang umum digunakan adalah minimisasi total wirelength yang dimodifikasi dengan penalty term untuk thermal dan via density:

$$Cost_{total} = W \cdot \sum_{i<j} w_{ij} \cdot d(i,j) + \lambda_T \cdot T_{max} + \lambda_V \cdot \rho_{via}$$

di mana $w_{ij}$ adalah bobot koneksi antara blok $i$ dan $j$, $d(i,j)$ adalah jarak Manhattan 3D, $T_{max}$ adalah suhu maksimum, $\rho_{via}$ adalah densitas via, dan $\lambda_T, \lambda_V$ adalah parameter regularisasi.

Keempat, terkait electrical performance, model parasitic untuk interkoneksi hybrid bonding pada pitch $p$ sub-10 μm mengikuti persamaan kapasitansi:

$$C_{bond} = \varepsilon_0 \varepsilon_r \frac{A_{pillar}}{t_{dielectric}} + C_{fringe}(p, d_{pillar})$$

di mana $A_{pillar} = \pi d_{pillar}^2/4$, dan $C_{fringe}$ adalah kapasitansi fringe yang bergantung pada geometri pitch dan diameter pillar. Resistansi sambungan $R_{contact}$ untuk Cu-Cu direct bonding tanpa solder didekati dengan:

$$R_{contact} = \frac{\rho_{Cu} \cdot t_{interface}}{A_{pillar}} + R_{interface}$$

di mana $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m adalah resistivitas tembaga, $t_{interface}$ adalah tebal lapisan intermetalik (IMC) yang terbentuk selama annealing, dan $R_{interface}$ menangkap efek kontak non-ideal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri untuk desain chiplet dan 3D-IC mengikuti alur kerja (workflow) yang terstandarisasi oleh konsorsia seperti IEEE, JEDEC, dan UCIe Consortium. Roze dan Gerber (2026) menyajikan arsitektur EDA end-to-end yang terdiri dari delapan tahap berurutan dengan feedback loop di setiap tahap:

```
[Tahap 1: System Specification] 
        ↓
[Tahap 2: Chiplet Selection & KGD Planning]
        ↓
[Tahap 3: 3D Floorplanning & Partitioning]
        ↓
[Tahap 4: Interconnect Planning (UCIe/AIB/BoW)]
        ↓
[Tahap 5: Physical Implementation (Place & Route)]
        ↓
[Tahap 6: Multi-Physics Verification (EM/IR/Thermal/Mechanical)]
        ↓
[Tahap 7: DFM & Yield Optimization]
        ↓
[Tahap 8: Sign-off & Tape-out]
        ↺ (Iterasi jika sign-off gagal)
```

**SOP Detail per Tahap:**

**Tahap 1 — System Specification:** Mendefinisikan target bandwidth (Gbps), latency budget (ns), power envelope (W), dan form factor. Luaran: System-Level Design Document (SLDD) dengan requirement traceability matrix.

**Tahap 2 — Chiplet Selection:** Memilih die dari process design kit (PDK) library, memastikan kompatibilitas fab, dan mengalokasikan budget yield. Menggunakan metode scoring berbobot $S_j = \sum_k w_k \cdot s_{jk}$ dengan $s_{jk}$ adalah skor chiplet $j$ pada kriteria $k$.

**Tahap 3 — 3D Floorplanning:** Implementasi algoritma simulated annealing atau force-directed placement untuk meminimalkan wirelength 3D sambil memenuhi constraint thermal. Constraint thermal: $T_j \leq T_{max}, \forall j \in \{1,...,n\}$.

**Tahap 4 — Interconnect Planning:** Konfigurasi topologi interconnect (UCIe Standard, UCIe Advanced, atau proprietary AIB) berdasarkan latency dan bandwidth requirement. Perhitungan jumlah lane: $N_{lanes} = \lceil BW_{target} / (f_{clk} \cdot N_{width}) \rceil$.

**Tahap 5 — Physical Implementation:** Place-and-route dengan awareness terhadap 3D-via placement, TSV (Through-Silicon Via) keep-out zone, dan hybrid bonding alignment tolerance $\pm 0.5 \mu m$ pada 3σ.

**Tahap 6 — Multi-Physics Verification:** Simulasi coupled electro-thermal-mechanical dengan finite element analysis (FEA) untuk memvalidasi reliability sambungan Cu-Cu di bawah thermal cycling $-55°C$ hingga $125°C$ (standar JEDEC JESD22-A104).

**Tahap 7 — DFM & Yield Optimization:** Variability-aware analysis menggunakan Monte Carlo dengan $N \geq 10,000$ run untuk mengkuantifikasi parameter yield sebagai fungsi dari process variation.

**Tahap 8 — Sign-off:** Final verification dengan checklist 47 item mencakup DRC, LVS, ERC, thermal, EM/IR, dan timing.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Desain paket 3D-IC untuk AI accelerator dengan konfigurasi 1 compute chiplet + 4 HBM3 stacks pada interposer silikon.

**Input Parameter:**
- Compute die: $A_1 = 100$ mm², $Y_1 = 0.92$
- HBM stack: $A_2 = 80$ mm², $Y_2 = 0.96$ per stack
- Hybrid bonding pitch: $p = 10$ μm, diameter pillar $d = 5$ μm
- Tinggi pillar Cu: $h = 5$ μm
- Target bandwidth: $BW = 1$ Tbps
- Jumlah lane UCIe Advanced: 64 lanes

**Perhitungan 1 — KGD Probability dan Yield Paket:**

$$P_{KGD} = Y_1 \cdot Y_2^4 = 0.92 \cdot 0.96^4 = 0.92 \cdot 0.849 = 0.781$$

Dengan asumsi $Y_{assembly} = 0.98$ (didukung oleh hybrid bonding maturity 2025-2026):

$$Y_{package} = 0.781 \cdot 0.98 = 0.766$$

**Interpretasi:** Yield 76.6% menunjukkan bahwa sekitar 23.4% paket akan memerlukan rework atau scrapping. Strategi mitigasi: implementasi redundant compute path atau memory sparing untuk meningkatkan effective yield menjadi $\geq 95\%$.

**Perhitungan 2 — Thermal-Mechanical Stress pada Cu-Cu Bond:**

Parameter: $\Delta\alpha_{Cu-Si} = 16.5 - 2.6 = 13.9$ ppm/°C, $\Delta T = 200°C$ (dari suhu bonding 300°C ke operasional 100°C), $E_{Cu} = 110$ GPa, $\nu_{Cu} = 0.34$, $h_{Cu} = 5$ μm, $d_{bond} = 5$ μm.

$$\tau = \frac{13.9 \times 10^{-6} \cdot 200 \cdot 110 \times 10^9 \cdot 5 \times 10^{-6}}{2(1-0.34) \cdot 5 \times 10^{-6}}$$

$$\tau = \frac{1.529 \times 10^{6}}{6.6 \times 10^{-6}} \approx 231.6 \text{ MPa}$$

**Interpretasi:** Tegangan geser 231.6 MPa berada di bawah yield strength Cu annealed (~200-300 MPa) dan well below creep threshold pada suhu operasional, mengindikasikan desain yang reliable untuk siklus termal standar 1000 cycle.

**Perhitungan 3 — Resistansi Sambungan Cu-Cu:**

Dengan $t_{interface} = 50$ nm (IML Cu₃Si) dan mengabaikan $R_{interface}$ untuk direct bonding sempurna:

$$R_{contact} = \frac{1.68 \times 10^{-8} \cdot 50 \times 10^{-9}}{\pi \cdot (2.5 \times 10^{-6})^2} = \frac{8.4 \times 10^{-16}}{1.96 \times 10^{-11}} \approx 42.8 \text{ mΩ per pillar}$$

Untuk 64 lane parallel, dengan 100 pillar per lane: total resistansi efektif per lane = $42.8 \times 10^{-3} / 100 = 0.428$ mΩ. Dengan tegangan swing 0.8V pada 32 Gbps NRZ, power per lane = $(0.8)^2 / 0.428 \times 10^{-3} \approx 1.5$ mW, well within budget.

**Perhitungan 4 — Optimasi Floorplanning 3D-IC:**

Dengan target minimisasi wirelength menggunakan model gravitasi 3D, jarak Manhattan 3D antara compute die dan HBM stack pada koordinat $(x,y,z)$ dapat dihitung. Untuk stack HBM di atas compute die dengan $z_{gap} = 100$ μm dan footprint alignment, $d_{Manhattan} \approx 100$ μm × jumlah TSV cross-section.