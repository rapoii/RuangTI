# 2427 — Solusi Electronic Design Automation (EDA) untuk Desain Chiplet dan Integrated Circuit Tiga Dimensi (3D-IC): Integrasi Heterogen, Hybrid Bonding, dan Optimisasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik dari paradigma desain monolithic System-on-Chip (SoC) menuju arsitektur *heterogeneous integration* berbasis chiplet dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh berakhirnya *Dennard Scaling* pada sekitar tahun 2006 dan semakin mahalnya biaya mask set pada node proses先进 (advanced node) di bawah 5 nm, di mana biaya *tape-out* telah melampaui ambang USD 50 juta per desain. Roze dan Gerber (2026) dalam paparannya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* mengidentifikasi bahwa arsitektur chiplet menawarkan *yield-driven cost optimization* karena area die individual yang lebih kecil secara statistik memiliki probabilitas cacat yang jauh lebih rendah, sehingga *yield* fabrikasi meningkat secara eksponensial sesuai distribusi Poisson (Roze & Gerber, 2026).

Konteks industri ini semakin relevan dengan adopsi luas *hybrid bonding* tembaga-tembaga (Cu-Cu) yang didokumentasikan secara komprehensif oleh John H. Lau (2023) dalam bab "Cu-Cu Hybrid Bonding" dari monograph *Chiplet Design and Heterogeneous Integration Packaging*. Lau (2023) melaporkan bahwa teknologi *Cu-Cu hybrid bonding* mampu mencapai pitch interkoneksi sub-mikrometer (umumnya 3 µm hingga 10 µm) dengan densitas sambungan melebihi 10⁶ sambungan per mm² (Lau, 2023). Bagi praktisi Teknik Industri, fenomena ini bukan semata persoalan fabrikasi semikonduktor, melainkan persoalan sistem manufaktur kompleks yang menggabungkan aspek *design-for-manufacturability* (DFM), rantai pasok multi-vendor, dan optimisasi *yield* multi-die.

Urgensi ekonominya tampak pada proyeksi pasar chiplet global yang bernilai USD 5,8 miliar pada 2023 dan diproyeksikan mencapai USD 107 miliar pada 2033 dengan CAGR >30%. Namun demikian, keberhasilan komersialisasi chiplet sangat bergantung pada ketersediaan *Electronic Design Automation* (EDA) yang mampu menangani kompleksitas *co-design* elektrikal-termal-mekanikal secara simultan. Permasalahan yang diuraikan oleh Roze dan Gerber (2026) mencakup fragmentasi *toolchain*, inkompatibilitas format data antar vendor IP, absennya *unified verification* untuk stack 3D, serta tantangan *Design-for-Test* (DFT) untuk *Known-Good-Die* (KGD). Tanpa solusi EDA yang holistik, *time-to-market* chiplet akan melambung dan *total cost of ownership* akan menggandakan biaya rekayasa. Oleh karena itu, modul ini membahas integrasi solusi EDA dengan proses *hybrid bonding* Cu-Cu sebagai *enabler* utama desain chiplet dan 3D-IC modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Die Berdasarkan Distribusi Poisson

Roze dan Gerber (2026) mengadopsi model yield chiplet berbasis distribusi cacat Poisson, yang secara fundamental berbeda dari model SoC monolitik. Untuk satu die dengan luas area $A$ dan densitas cacat $D$ (cacat per cm²), probabilitas yield die tunggal didefinisikan sebagai:

$$Y_{die} = e^{-D \cdot A}$$

Untuk desain chiplet yang memecah area total $A_{total}$ menjadi $N$ sub-die dengan luas rata-rata $A_{die} = A_{total}/N$, yield sistem aggregat dapat dimodelkan sebagai perkalian yield individual dikalikan yield interkoneksi ($\eta_{b}$):

$$Y_{system} = \left( e^{-D \cdot A_{total}/N} \right)^N \cdot \eta_{b}^{M}$$

di mana $M$ adalah jumlah sambungan *hybrid bonding* antar-chiplet. Diferensiasi terhadap $N$ menunjukkan terdapatnya *sweet spot* optimasi biaya-yield yang secara matematis menurunkan *cost per good die* (Roze & Gerber, 2026).

### 2.2 Formulasi Pitch dan Resistansi Sambungan Cu-Cu

Lau (2023) menurunkan hubungan antara pitch sambungan $P$ (µm), diameter pad $d$ (µm), dan resistansi kontak spesifik $\rho_c$ ($\Omega \cdot$cm²) untuk sambungan Cu-Cu *hybrid bonding*:

$$R_{contact} = \frac{\rho_c}{\pi \left( \frac{d}{2} \right)^2} = \frac{4\rho_c}{\pi d^2}$$

Dengan densitas arus operasional $J$ (A/cm²), disipasi panas per sambungan adalah:

$$Q_{junction} = J^2 \cdot \rho_c \cdot A_{pad}$$

Untuk arsitektur *face-to-face* dengan pitch 3 µm dan diameter pad 1,5 µm, jika $\rho_c = 5 \times 10^{-8}$ $\Omega \cdot$cm² (tembaga murni), maka resistansi sambungan teoritis adalah:

$$R_{contact} = \frac{4 \cdot 5 \times 10^{-8}}{\pi \cdot (1{,}5 \times 10^{-4})^2} \approx 2{,}83 \; \mu\Omega$$

(Lau, 2023). Angka ini sekitar 100× lebih rendah daripada sambungan solder mikro-bumps C4 konvensional yang berada pada orde $10^{-4}$ hingga $10^{-3}$ $\Omega$, sehingga menjadi dasar justifikasi elektrifikasi high-density interconnect (HDI) pada 3D-IC.

### 2.3 Model Multi-Fisika Termal-Mekanikal

Roze dan Gerber (2026) mengembangkan formulasi *co-simulation* yang menggabungkan persamaan konduksi panas 3D dengan persamaan mekanika struktur untuk *through-silicon via* (TSV) dan *interposer*:

$$\rho c_p \frac{\partial T}{\partial t} = \nabla \cdot (k \nabla T) + q'''$$

di mana $\rho$ adalah densitas, $c_p$ kapasitas panas jenis, $k$ konduktivitas termal, dan $q'''$ disipasi volumetrik. Tegangan termo-mekanikal $\sigma_{th}$ akibat *Coefficient of Thermal Expansion* (CTE) mismatch didefinisikan:

$$\sigma_{th} = E \cdot \alpha_{CTE} \cdot \Delta T$$

dengan $E$ modulus Young, $\alpha_{CTE}$ koefisien ekspansi termal diferensial, dan $\Delta T$ gradien suhu. Untuk stack tembaga-silikon, $\alpha_{CTE,Cu} - \alpha_{CTE,Si} \approx 13$ ppm/K, sehingga pada $\Delta T = 200$ K tegangan termo-mekanikal yang dihasilkan signifikan dan harus dimitigasi melalui *underfill* atau *buffer layer* (Roze & Gerber, 2026).

### 2.4 Model Optimisasi Co-Design

Solusi EDA yang diusulkan Roze dan Gerber (2026) mencakup fungsi objektif optimisasi multi-domain:

$$\min_{x} \; f(x) = w_1 \cdot P_{tot}(x) + w_2 \cdot T_{max}(x) + w_3 \cdot \tau(x) + w_4 \cdot C(x)$$

di mana $x$ adalah vektor keputusan (penempatan chiplet, routing, sizing TSV), $P_{tot}$ adalah disipasi daya total, $T_{max}$ suhu maksimum junction, $\tau$ delay propagasi sinyal, $C$ biaya manufaktur, dan $w_i$ adalah bobot preferensi desain. Formulasi ini diselesaikan melalui *multi-objective Pareto optimization* dengan algoritma evolusioner (Roze & Gerber, 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan *Unified Design Flow* untuk chiplet dan 3D-IC yang mengintegrasikan tahapan-tahapan berikut dalam satu *toolchain* EDA terkoordinasi:

**Tahap 1 — System-Level Architecture Partitioning.** Dilakukan partisi fungsional sistem menjadi sub-modul chiplet menggunakan algoritma *min-cut hypergraph* dengan约束 (constraint) thermal budget per chiplet. Keluaran: spesifikasi antarmuka *die-to-die* (D2D) dan daftar *intellectual property* (IP) yang diperlukan.

**Tahap 2 — Chiplet Implementation.** Setiap chiplet dirancang secara independen dengan node proses optimal masing-masing (misalnya logic pada 3 nm, SRAM pada 5 nm, I/O pada 12 nm). Implementasi menggunakan *place-and-route* dengan dukungan *bump map generation* untuk pad Cu-Cu.

**Tahap 3 — 3D Stack Assembly & Routing.** Dilakukan *place-and-route* 3D menggunakan format *3D-IC standard cell library* dengan penanganan TSV dan *micro-bump* atau *hybrid bonding pad*. Roze dan Gerber (2026) menekankan pentingnya *signal integrity analysis* dengan ekstraksi parasitik $R$, $L$, $C$ pada jalur D2D.

**Tahap 4 — Multi-Physics Verification.** Simulasi gabungan elektrikal-termal-mekanikal dilakukan secara iteratif hingga konvergen, dengan validasi terhadap rule JEDEC JEP156 (thermal) dan IPC-9701 (mekanikal).

**Tahap 5 — Manufacturability Check (DFM/DFT).** Pengecekan aturan *Design-for-Manufacturability* termasuk keseragaman disipasi daya, *current density* pada sambungan Cu-Cu di bawah ambang electromigrasi $J_{EM,max} = 10^5$ A/cm² (Lau, 2023), dan infrastruktur *Design-for-Test* untuk KGD.

**Tahap 6 — Tape-Out & Hand-off.** Generasi GDSII/OASIS per chiplet serta *stack GDS* untuk fabrikasi *wafer-to-wafer* atau *die-to-wafer hybrid bonding*.

Sementara itu, Lau (2023) mendokumentasikan SOP fabrikasi *hybrid bonding* Cu-Cu sebagai berikut:

1. **Surface Preparation:** Chemical-mechanical polishing (CMP) hingga mencapai *surface roughness* $R_a < 0{,}5$ nm dan *dishing* < 10 nm. Lau (2023) menekankan bahwa parameter ini merupakan *critical process parameter* (CPP) yang menentukan kualitas ikatan.
2. **Surface Activation:** Plasma treatment (umumnya N₂/H₂) untuk menghilangkan oksida native dan meningkatkan energi permukaan.
3. **Alignment & Contact:** Presisi alignment < ±200 nm menggunakan *infrared alignment system*.
4. **Thermal Compression Bonding (TCB):** Suhu 300–400 °C, gaya 0,7–2 N/mm², waktu 30–60 menit dalam atmosfer inert N₂ (Lau, 2023).
5. **Post-Bond Anneal:** Anil pada 200–300 °C selama 60 menit untuk meningkatkan difusi interfacial dan menurunkan resistansi kontak.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: Yield dan Biaya Chiplet GPU 600 mm²

Misalkan sebuah desain SoC GPU target memiliki area total $A_{total} = 600$ mm² pada node 3 nm dengan densitas cacat $D = 0{,}15$ cacat/cm² (tipikal data industri per Roze & Gerber, 2026).

**Kasus Monolitik:**
$$Y_{mono} = e^{-0{,}15 \cdot 6} = e^{-0{,}9} \approx 0{,}4066 \; (40{,}66\%)$$

**Kasus Chiplet (8 sub-die):** Setiap sub-die memiliki area $A_{die} = 600/8 = 75$ mm² dan yield interkoneksi $\eta_b = 0{,}98$ dengan $M = 5000$ sambungan per chiplet:

$$Y_{chiplet} = \left( e^{-0{,}15 \cdot 0{,}75} \right)^8 \cdot 0{,}98^{5000 \cdot 7}$$

Perhitungan yield individual die:
$$Y_{die} = e^{-0{,}1125} \approx 0{,}8936$$

Yield stack 8-die (dengan asumsi inter-die yield 0,98⁵⁰⁰⁰⁻⁷ sambungan antar chiplet):
$$Y_{interconn} = 0{,}98^{35000} \approx e^{-35000 \cdot 0{,}0202} \approx e^{-707} \approx 9{,}4 \times 10^{-308}$$

Ternyata nilai ini tidak realist