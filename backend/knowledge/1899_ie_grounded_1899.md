# 1899 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Bonding Hibrida Cu-Cu, dan Optimasi Sistem Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma fundamental dari arsitektur System-on-Chip (SoC) monolitik menuju arsitektur *System-in-Package* (SiP) berbasis chiplet dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh berakhirnya efektivitas hukum Moore pada node proses sub-3 nm, di mana biaya litografi EUV (Extreme Ultraviolet) melonjak secara eksponensial sementara *yield* manufaktur turun drastis. Roze dan Gerber (2026) dalam makalahnya yang diterbitkan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) menekankan bahwa solusi EDA (Electronic Design Automation) bukan lagi sekadar alat bantu desain, melainkan telah menjadi *strategic enabler* yang menentukan kelayakan ekonomi dan teknis dari sebuah desain chiplet dan 3D-IC.

Konteks urgensi industri ini sangat nyata. Biaya desain sebuah SoC 3 nm monolitik telah menyentuh angka USD 500 juta hingga USD 1 miliar, dengan *time-to-market* yang melebihi 24 bulan. Dengan pendekatan chiplet, biaya *non-recurring engineering* (NRE) dapat dipangkas signifikan karena memungkinkan *re-use* dari *intellectual property* (IP) blok yang telah terverifikasi. Namun, keberhasilan pendekatan ini sangat bergantung pada ketersediaan *toolchain* EDA yang mampu menangani kompleksitas partisi die, perencanaan *floorplan* 3D, analisis termal, integritas sinyal (SI), integritas daya (PI), dan verifikasi multi-die secara simultan. Seperti ditegaskan oleh Roze & Gerber (2026), *full-stack EDA solution* yang diajukan mereka mencakup algoritma partisi berbasis optimasi multi-objektif, simulasi termo-mekanis, dan verifikasi *co-design* lintas domain.

Di sisi proses manufaktur, teknologi bonding hibrida Cu-Cu yang dibahas secara ekstensif oleh John H. Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menjadi pilar utama realisasi fisik integrasi 3D. Lau menjelaskan bahwa hybrid bonding Cu-Cu dengan *pitch* sub-10 μm mampu mencapai resistansi kontak di bawah 5 mΩ per sambungan, dengan kepadatan interkoneksi melebihi 10⁶ sambungan per mm². Namun, proses ini memerlukan suhu rendah (<300°C) untuk mencegah *thermal stress* pada die, sehingga memerlukan rekayasa permukaan Cu yang sangat presisi melalui teknik *dielectric bonding* simultan.

Sinergi antara solusi EDA level desain dan proses bonding hibrida level manufaktur menciptakan ekosistem yang harus diorkestrasikan secara holistik. Dari perspektif Teknik Industri, ini merupakan masalah optimasi rantai pasok teknologi tinggi dengan tiga variabel keputusan utama: (1) partisi fungsional die, (2) topologi stacking 3D, dan (3) pemilihan teknologi interkoneksi. Industri memperkirakan pasar chiplet akan mencapai USD 100 miliar pada 2030, sehingga penguasaan metodologi EDA-to-manufacturing menjadi *core competency* yang krusial.

## 2. Landasan Teori & Formulasi Matematis

Fondasi matematis yang mendasari desain EDA untuk chiplet dan 3D-IC dapat diformulasikan melalui beberapa persamaan kunci. Roze & Gerber (2026) memperkenalkan formulasi optimasi multi-objektif untuk partisi die dan *floorplanning* 3D, yang secara esensial merupakan masalah minimasi terhadap fungsi biaya gabungan:

$$\min_{x, y, z} \left[ \alpha \cdot C_{\text{total}}(x,y,z) + \beta \cdot P_{\text{diss}}(x,y,z) + \gamma \cdot T_{\text{thermal}}(x,y,z) + \delta \cdot L_{\text{wire}}(x,y,z) \right]$$

di mana $C_{\text{total}}$ adalah total biaya manufaktur, $P_{\text{diss}}$ adalah disipasi daya, $T_{\text{thermal}}$ adalah suhu operasi maksimum, dan $L_{\text{wire}}$ adalah total panjang interkoneksi. Parameter $\alpha, \beta, \gamma, \delta$ adalah bobot relatif yang ditentukan oleh desainer sesuai prioritas aplikasi.

Untuk analisis termal pada stack 3D-IC, model resistansi termal berdasarkan analogi jaringan RC memberikan persamaan:

$$R_{\theta, \text{total}} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i}$$

dengan $t_i$ adalah ketebalan layer ke-$i$, $k_i$ adalah konduktivitas termal material, dan $A_i$ adalah luas penampang efektif. Untuk stack chiplet dengan *thermal interface material* (TIM), suhu junction $T_j$ die kritis dihitung sebagai:

$$T_j = T_a + P_{\text{total}} \cdot R_{\theta, \text{ja}}$$

di mana $T_a$ adalah suhu ambien, $P_{\text{total}}$ adalah disipasi daya total stack, dan $R_{\theta, \text{ja}}$ adalah resistansi termal junction-to-ambient.

Formulasi yield untuk partisi chiplet mengikuti model binomial Poison dan negative binomial. Roze & Gerber (2026) menggunakan:

$$Y_{\text{known good die}} = Y_0 \cdot \exp\left(-\lambda \cdot D^2\right)$$

di mana $Y_0$ adalah baseline yield, $\lambda$ adalah parameter cacat, dan $D$ adalah dimensi aktif die. Yield sistem multi-chiplet kemudian:

$$Y_{\text{system}} = \prod_{i=1}^{m} Y_{\text{KGD}, i} \cdot Y_{\text{assembly}}$$

Untuk teknologi bonding hibrida Cu-Cu yang dijelaskan Lau (2023), resistansi kontak dapat dimodelkan sebagai:

$$R_{\text{contact}} = \frac{\rho_{\text{Cu}}}{A_{\text{bond}}} \cdot \left(1 + \frac{\delta_{\text{RMS}}}{d_{\text{bond}}}\right)$$

di mana $\rho_{\text{Cu}}$ adalah resistivitas tembaga ($1.68 \times 10^{-8}$ Ω·m), $A_{\text{bond}}$ adalah luas area kontak efektif, $\delta_{\text{RMS}}$ adalah kekasaran permukaan (root mean square), dan $d_{\text{bond}}$ adalah pitch bonding. Untuk *pitch* 3 μm dengan kekasaran 0,5 nm, resistansi per sambungan:

$$R_{\text{contact}} = \frac{1.68 \times 10^{-8}}{(3 \times 10^{-6})^2} \cdot \left(1 + \frac{0.5 \times 10^{-9}}{3 \times 10^{-6}}\right) \approx 1.87 \times 10^{-3} \text{ Ω}$$

Integritas sinyal pada interkoneksi hybrid bonding dapat dihitung menggunakan model saluran transmisi lossy:

$$Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}} \approx \sqrt{\frac{L}{C}}$$

untuk frekuensi tinggi, dengan $L$ induktansi per satuan panjang, $C$ kapasitansi per satuan panjang, $R$ resistansi seri, dan $G$ konduktansi paralel. Delay propagasi:

$$t_{\text{pd}} = \sqrt{LC} \cdot \ell$$

di mana $\ell$ adalah panjang fisik saluran. Untuk interkoneksi hybrid bonding sepanjang 500 μm dengan $L = 1$ nH/mm dan $C = 1$ pF/mm:

$$t_{\text{pd}} = \sqrt{(10^{-9})(10^{-12})} \cdot (500 \times 10^{-6}) = 1.58 \times 10^{-12} \text{ s} = 1.58 \text{ ps}$$

Optimasi biaya total sistem (TCO) mengikuti formulasi:

$$\text{TCO} = N_{\text{die}} \cdot C_{\text{die}} + C_{\text{pkg}} + C_{\text{test}} + C_{\text{yield-loss}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis desain chiplet dan 3D-IC mengikuti kerangka SOP berlapis yang diuraikan Roze & Gerber (2026), dengan penyesuaian terhadap standar industri seperti IEEE 1838 (test akses 3D-IC), JEDEC JEP30 (model performa), dan IPC-7095 (desain dan performa package BGA). Prosedur operasional standar ini dapat diuraikan dalam diagram alir berikut:

**Tahap 1 — Analisis Spesifikasi Sistem dan Partisi Arsitektural:**
1. Definisikan target performa, daya, area, dan biaya (PDAC).
2. Identifikasi blok IP fungsional (CPU core, GPU, memori HBM, I/O, RF, analog).
3. Tentukan *die partition strategy*: homogen (semua die pada node proses sama) atau heterogen (mix node proses, misal 7 nm untuk logika + 28 nm untuk analog/RF).
4. Tetapkan *interconnect budget* antar-die berdasarkan bandwidth dan latency requirement.

**Tahap 2 — Floorplanning 3D dan Penempatan Die:**
1. Pilih topologi stacking: face-to-face (F2F), face-to-back (F2B), atau back-to-face (B2F).
2. Alokasikan area die menggunakan algoritma simulated annealing atau integer linear programming (ILP) yang memenuhi persamaan biaya gabungan di Bagian 2.
3. Validasi thermal envelope menggunakan solver finite element (ANSYS, Celsius).
4. Place *through-silicon via* (TSV) atau *hybrid bonding pad* dengan *redundancy* untuk toleransi cacat.

**Tahap 3 — Perancangan Interkoneksi dan Routing:**
1. Tentukan pilihan teknologi bonding: microbump (pitch > 25 μm), Cu-pillar + solder (pitch 25–40 μm), atau hybrid bonding Cu-Cu (pitch < 10 μm).
2. Rancang *die-to-die interface* protocol (misal BoW, UCIe, OpenHBI).
3. Lakukan analisis SI/PI menggunakan solver elektromagnetik 3D.
4. Optimasi routing untuk meminimalkan skew dan crosstalk dengan target:

$$\text{Skew}_{\text{max}} \leq 5\% \cdot t_{\text{bit}}$$

**Tahap 4 — Verifikasi Multi-Domain dan Validasi:**
1. Verifikasi DRC (Design Rule Check) per-die dan *cross-die*.
2. Jalankan simulasi termal transien untuk profil beban kerja realistis.
3. Verifikasi power delivery network (PDN) untuk memastikan target *voltage droop* < 5%:

$$V_{\text{droop}} = \frac{Z_{\text{PDN}} \cdot I_{\text{peak}}}{V_{\text{DD}}} \cdot 100\%$$

4. Eksekusi DfT (Design-for-Test) menggunakan *boundary scan* IEEE 1149.1 dan *test access* IEEE 1838.

**Tahap 5 — Tape-out dan Sign-off Manufaktur:**
1. Generate GDSII multi-die.
2. Verifikasi manufacturability dengan foundry PDK.
3. Proses wafer fabrication parallel.
4. Eksekusi hybrid bonding sesuai SOP Lau (2023): surface preparation (CMP untuk kekasaran < 1 nm), alignment (akurasi < 200 nm), thermocompression bonding (200–300°C, 100–200 kN, 30 menit), annealing.
5. Final test dan *known good die* (KGD) screening.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Desain SoC Heterogen untuk Akselerator AI Edge**

Sebuah perusahaan semikonduktor hipotetis akan merancang akselerator AI untuk aplikasi edge computing dengan target: throughput 50 TOPS (INT8), daya < 15 W, area total < 200 mm², biaya produksi < USD 200 per unit pada volume 1 juta unit/tahun.

**Langkah 1 — Partisi Die:**
Berdasarkan rekomendasi Roze & Gerber (2026), partisi dilakukan sebagai berikut:
- Die 1 (compute): 4× NPU core + shared L2 cache, node 5 nm, area = 45 mm², target yield = 82%
- Die 2 (memori): SRAM 32 MB, node 7 nm, area = 25