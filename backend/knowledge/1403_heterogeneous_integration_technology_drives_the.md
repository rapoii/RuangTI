# 1403 — Teknologi Integrasi Heterogen sebagai Penggerak Evolusi Co-Packaged Optics (CPO) untuk Sistem Komputasi Generasi Berikutnya

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Heterogeneous Integration Technology Drives the Evolution of Co-Packaged Optics
**Jurnal & Sitasi Utama:** Han Gao, Wanyi Yan, Dan Zhang (2025). *Micromachines*. DOI: [https://doi.org/10.3390/mi16091037](https://doi.org/10.3390/mi16091037)
**Sitasi Pendukung:** Bozhi Tian, Baoning Sha, Yuanwen Jiang (2026). *Nano Futures*. DOI: [https://doi.org/10.1088/2399-1984/ae58dc](https://doi.org/10.1088/2399-1984/ae58dc)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pada aplikasi *artificial intelligence* (AI), *data center* hyperscale, dan *high-performance computing* (HPC) telah menciptakan paradoks struktural dalam arsitektur sistem elektronik modern. Permintaan akan bandwidth interkoneksi yang melampaui kapasitas >1 Tbps per chip, efisiensi energi di bawah 1 pJ/bit, serta densitas I/O >100 Gbps/mm² tidak lagi dapat dipenuhi oleh pendekatan konvensional berupa *pluggable optical transceivers* berbasis *surface-mounted* (Gao, Yan, & Zhang, 2025, DOI: [10.3390/mi16091037](https://doi.org/10.3390/mi16091037)). Keterbatasan utama muncul dari *electrical interconnect bottleneck* yang dipicu oleh peningkatan resistansi寄生 kapasitansi pada *trace* PCB panjang (>25 cm) yang menyebabkan *channel loss* 10–25 dB pada frekuensi Nyquist 56 GHz PAM-4. Kondisi ini memicu pergeseran paradigma teknologi dari pendekatan *chip-to-module* menuju *chip-to-chip* melalui platform **Co-Packaged Optics (CPO)**.

Gao, Yan, dan Zhang (2025) dalam paper mereka di jurnal *Micromachines* menjelaskan bahwa CPO bukan sekadar evolusi packaging, melainkan transformasi arsitektural yang mengintegrasikan *photonic integrated circuits* (PICs) secara langsung di dalam atau berdekatan dengan paket *electronic integrated circuits* (EICs) — sebuah capaian teknis yang hanya mungkin dilakukan melalui **heterogeneous integration technology**. Heterogeneous integration, sesuai tipologi yang digunakan oleh Tian, Sha, dan Jiang (2026, DOI: [10.1088/2399-1984/ae58dc](https://doi.org/10.1088/2399-1984/ae58dc)) dalam roadmap mereka tentang *nano-enabled living materials*, mengikuti prinsip serupa dengan bio-hybrid systems, di mana material dari domain berbeda (optik, elektronik, mekanik) digabungkan secara sinergis untuk menciptakan fungsi yang tidak mungkin dicapai oleh masing-masing domain secara individual.

Dari perspektif **teknik industri**, urgensi CPO bersifat multi-dimensi. Pertama, dimensi *supply chain*: industri semikonduktor global menghadapi fragmentasi *foundry capacity* untuk proses SOI (silicon-on-insulator), SiN, dan InP yang diperlukan dalam fabrikasi PIC. Kedua, dimensi *capex/optex*: investasi rata-rata untuk satu lini fabrikasi CPO mencapai USD 1,8–2,5 miliar dengan *yield* per wafer baru stabil pada 65–72% untuk proses FOWLP generasi kedua. Ketiga, dimensi *thermal management*: integrasi EIC dan PIC dalam satu paket meningkatkan *power density* hingga 1,2 kW/cm², sehingga membutuhkan solusi pendinginan *two-phase* atau *microchannel liquid cooling* yang menambah kompleksitas desain sistem secara keseluruhan.

Paper Gao dkk. (2025) secara eksplisit mengeksplorasi enam pilar teknologi pendukung evolusi CPO: (1) **Fan-Out Wafer-Level Packaging (FOWLP)**, (2) **Through-Silicon Via (TSV)**-based packaging, (3) **Through-Glass Via (TGV)**-based packaging, (4) **femtosecond laser direct writing waveguides**, (5) **ion-exchange glass waveguides**, dan (6) **optical coupling techniques**. Keenam pilar ini beroperasi sebagai *value stream* terintegrasi yang memerlukan orkestrasi lintas disiplin — mulai dari proses wafer, integrasi material, hingga *back-end assembly* — yang merupakan ranah otentik **rekayasa sistem industri**. Sebagai spesialis teknik industri, penting untuk memahami bahwa keberhasilan adopsi CPO pada akhirnya ditentukan bukan hanya oleh kelayakan teknis, melainkan oleh kemampuan industri mengelola trade-off antara *performance*, *manufacturability*, *cost*, dan *time-to-market* — empat variabel klasik dalam *industrial engineering decision matrix*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Transfer Fungsi Micro Ring Resonator (MRR)

MRR merupakan blok bangunan fundamental dalam arsitektur PIC untuk modulator dan filter WDM (wavelength-division multiplexing). Respon optik MRR dideskripsikan oleh persamaan coupled-mode theory yang menghasilkan fungsi transfer all-pass dan add-drop. Untuk konfigurasi all-pass, intensitas transmisi dapat dinyatakan sebagai:

$$T_{MRR}(\lambda) = \frac{a^2 - 2at\cos(\phi) + t^2}{1 - 2at\cos(\phi) + a^2t^2}$$

di mana $a = e^{-\alpha L_c / 2}$ adalah *round-trip field attenuation*, $t$ adalah *self-coupling coefficient* antara bus waveguide dan ring waveguide, $\phi = \beta L_c$ adalah *round-trip phase*, dengan $\beta = 2\pi n_{eff} / \lambda$ sebagai konstanta propagasi, $n_{eff}$ *effective refractive index*, dan $L_c$ keliling ring. Resonansi terjadi saat $\phi = m \cdot 2\pi$ untuk bilangan bulat $m$ (resonansi urutan ke-$m$), dengan *full-width at half-maximum* (FWHM) dinyatakan sebagai:

$$\Delta\lambda_{FWHM} = \frac{\lambda_{res}^2}{\pi n_g L_c} \cdot \frac{1 - at}{\sqrt{at}}$$

di mana $n_g = n_{eff} - \lambda \cdot (dn_{eff}/d\lambda)$ adalah *group index*. Faktor kualitas (Q-factor) resonator didefinisikan sebagai:

$$Q = \frac{\lambda_{res}}{\Delta\lambda_{FWHM}} = \frac{\pi n_g L_c \sqrt{at}}{\lambda_{res}(1 - at)}$$

Nilai Q yang tinggi (>10.000) menandakan resolusi spektral tinggi, namun menurunkan *bandwidth* utilisable dan meningkatkan *photon lifetime* yang menjadi trade-off klasik dalam desain filter WDM untuk aplikasi CPO bandwidth-density.

### 2.2 Model Thermal Tuning dan Konsumsi Daya MRR

MRR secara konvensional memerlukan mekanisme *tuning* untuk mengompensasi variasi fabrikasi dan drift termal. Gao dkk. (2025) menekankan keterbatasan metode thermal tuning tradisional berupa konsumsi daya statis tinggi dan *thermal crosstalk* antar resonator yang berdekatan. Model disipasi daya termal dapat dinyatakan sebagai:

$$P_{tune} = \frac{\kappa_{th} \cdot \Delta T}{N_{ring}}$$

dengan $\kappa_{th}$ adalah konduktansi termal efektif (tipikal 10–50 μW/K untuk MRR di SOI), $\Delta T$ adalah *temperature shift* yang diperlukan, dan $N_{ring}$ adalah jumlah resonator. *Thermal tuning efficiency* didefinisikan sebagai:

$$\eta_{thermal} = \frac{\Delta\lambda}{\Delta T} = \frac{\lambda_{res}}{n_{eff}} \left( \frac{dn_{eff}}{dT} + n_{eff} \cdot \alpha_{sub} \right)$$

di mana $\alpha_{sub}$ adalah koefisien ekspansi termal substrat (untuk Si: $\alpha_{sub} \approx 2,6 \times 10^{-6}$ /K; untuk glass: $\alpha_{sub} \approx 3,25 \times 10^{-6}$ /K). Pergeseran panjang gelombang resonansi akibat pemanasan adalah:

$$\Delta\lambda_{res} = \lambda_{res} \cdot \left( \frac{1}{n_{eff}} \frac{dn_{eff}}{dT} + \alpha_{sub} \right) \cdot \Delta T$$

Untuk silikon, $dn_{eff}/dT \approx 1,8 \times 10^{-4}$ /K sehingga pergeseran tipikal adalah $\Delta\lambda_{res} / \Delta T \approx 80$ pm/K. Dengan delapan panjang gelombang dalam grid ITU-T 200 GHz, total *tuning range* yang diperlukan adalah 1,6 nm — setara dengan $\Delta T \approx 20$ K per ring.

### 2.3 Model Efisiensi Energi Link Optik (Energy-per-Bit)

Salah satu metrik paling kritikal dalam CPO adalah *energy-per-bit* (EpB) yang menentukan kelayakan operasi untuk workloads AI/HPC. EpB total untuk satu link optik terdiri dari tiga komponen:

$$E_{pB} = E_{driver} + E_{laser} + E_{static} = \frac{C_{driver} V_{sw}^2}{2} + \frac{P_{laser}}{\eta_{wall}} \cdot \frac{1}{B_{ch}} + \frac{P_{tune} \cdot N_{ring}}{B_{ch}}$$

di mana $C_{driver}$ adalah kapasitansi driver modulator, $V_{sw}$ adalah *swing voltage*, $P_{laser}$ adalah daya laser eksternal, $\eta_{wall}$ adalah *wall-plug efficiency*, dan $B_{ch}$ adalah *bit rate* per kanal. Nilai industri terkini menunjukkan target:

$$E_{pB}^{target} < 5 \text{ pJ/bit untuk 2025}; \quad E_{pB}^{target} < 1 \text{ pJ/bit untuk 2030}$$

Perbandingan dengan *pluggable transceivers* generasi sebelumnya (EoP = 15–25 pJ/bit pada 100 Gbps) menunjukkan reduksi EpB sebesar **3–5×** yang secara langsung menurunkan *total cost of ownership* (TCO) data center melalui pengurangan kapasitas pendinginan.

### 2.4 Model Bandwidth Density dan Through-Silicon Via (TSV)

TSV dan TGV menyediakan jalur interkoneksi vertikal antara PIC dan EIC dengan impedansi karakteristik rendah. Resistansi DC TSV untuk konfigurasi *annular* berdiameter $D$ dan ketebalan $h$ dapat dimodelkan sebagai:

$$R_{TSV} = \frac{\rho_{Si} \cdot h}{\pi (D \cdot w_{ann} - w_{ann}^2)}$$

di mana $\rho_{Si} \approx 0,01$ Ω·cm adalah resistivitas silikon heavily-doped, $w_{ann}$ adalah lebar annulus konduktor. Induktansi parasitik yang menimbulkan degradasi sinyal pada frekuensi tinggi:

$$L_{TSV} \approx \frac{\mu_0 h}{2\pi} \left[ \ln\left(\frac{h}{D}\right) + 0,5 \right]$$

Untuk $h = 100$ μm dan $D = 10$ μm, diperoleh $L_{TSV} \approx 30$ pH yang cukup rendah untuk aplikasi pada frekuensi hingga 50 GHz. Kapasitansi antar TSV berdekatan dalam grid 2D menyebabkan *crosstalk coupling*:

$$C_{coupling} = \frac{\pi \epsilon_{ox} \epsilon_0 h}{\ln\left(\frac{p_{pitch}}{D} + \sqrt{(p_{pitch}/D)^2 - 1}\right)}$$

dengan $p_{pitch}$ sebagai pitch antar TSV. Untuk $p_{pitch} = 20$ μm, $D = 10$ μm: $C_{coupling} \approx 3$ fF per tetangga, yang merupakan kontribusi dominan degradasi *eye diagram* pada baud rate >50 Gbaud.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CPO di lantai produksi mengikuti *value chain* terintegrasi yang dapat distandardisasi menjadi SOP enam tahap utama. Tahapan ini diadaptasi dari framework heterogeneus integration yang diuraikan Gao dkk. (2025) dengan referensi silang terhadap roadmap nano-hybrid systems dari Tian dkk. (2026).

**Tahap 1 — Design Co-Optimization (Multi-Disciplinary)**
Lakukan simulasi *electromagnetic-thermal-mechanical* bersama untuk layout PIC dan EIC. Gunakan software *Photonic Integrated Circuit Simulator* (contoh: Lumerical INTERCONNECT, Synopsys OptSim) untuk memvalidasi *insertion loss*, *crosstalk*, dan *eye margin*. Tetapkan target: IL < 3 dB end-to-end, crosstalk < -25 dB, ER > 6 dB.

**Tahap 2 — Wafer Fabrication PIC**
Pilih platform material berdasarkan aplikasi: SOI untuk modulator tinggi-kecepatan (modulator Mach-Zehnder/MRR pada 50+ Gbaud), SiN untuk rugi rendah dan komponen *passive* WDM, atau InP untuk sumber laser terintegrasi. Validasi dengan pengukuran *wafer-level optical test* menggunakan *automated probe station* dengan grating coupler.

**Tahap 3 — Heterogeneous Integration**
Tiga opsi utama sesuai paper Gao dkk. (2025):

| Metode | Throughput | Yield | Aplikasi |
|--------|-----------|-------|----------|
| FOWLP | Tinggi (batch wafer) | 70–80% | Multi-die, modul skala besar |
| TSV-based 3D | Sedang | 65–75% | Chip-to-chip latency minimum |
| TGV-based 2.5D | Tinggi | 75–85%