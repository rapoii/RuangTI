# 1563 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimalisasi Multi-Fisika dalam Rantai Pasok Semikonduktor Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global saat ini menghadapi paradoks struktural yang semakin akut: di satu sisi, biaya fabrikasi node proses先进 (advanced node) di bawah 3 nm melonjak secara eksponensial hingga menyentuh ambang USD 20 miliar per fab (Roze & Gerber, 2026); di sisi lain, permintaan akan komputasi berkinerja tinggi—mulai dari akselerator AI generatif, kendaraan otonom, hingga sistem telekomunikasi 6G—memaksa peningkatan densitas logika, bandwidth memori, dan efisiensi energi yang tidak lagi dapat dipenuhi oleh pendekatan *monolithic System-on-Chip* (SoC) konvensional. Roze dan Gerber (2026) dalam prosiding yang dipublikasikan melalui IEEE Xplore dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) menegaskan bahwa paradigma *disaggregated chiplet* dengan integrasi heterogen 3D-IC telah menjadi *de facto strategic response* bagi seluruh rantai pasok semikonduktor global, termasuk pemain dominan seperti TSMC, Intel, AMD, NVIDIA, dan Samsung Foundry.

Urgensi operasional dari transisi ini bersifat multi-dimensi. Secara ekonomi, yield sebuah die reticular besar menurun drastis mengikuti model Poisson, di mana probabilitas satu defect fatal pada area $A$ mengikuti $P_{defect} = 1 - e^{-D_0 A}$, dengan $D_0$ sebagai *defect density* (umumnya 0,1–0,5 cm⁻² pada node成熟). Roze dan Gerber (2026) menekankan bahwa disaggregasi menjadi chiplet kecil—masing-masing dengan area efektif $A_i \ll A_{total}$—secara matematis meningkatkan *compound yield* sistemik. Secara teknis, integrasi vertikal 3D-IC melalui *Through-Silicon Via* (TSV) dan teknologi *Cu-Cu hybrid bonding* memungkinkan *interconnect pitch* mencapai 3–10 µm, dibandingkan 100–150 µm pada *flip-chip solder bump* tradisional (Lau, 2023, DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)).

Lebih jauh, konteks industri menunjukkan bahwa *time-to-market* untuk produk semikonduktor telah turun dari 24 bulan menjadi 9–12 bulan, sementara kompleksitas desain meningkat lima kali lipat dalam dekade terakhir. Tanpa platform *Electronic Design Automation* (EDA) yang matang untuk *co-design* elektrikal-termal-mekanikal pada level *package-architecture*, inisiatif chiplet akan menghadapi bottleneck verifikasi yang menghambat produksi masal. Roze dan Gerber (2026) memposisikan solusi EDA sebagai *enabling infrastructure* yang menentukan kelayakan ekonomi, kelayakan termal, dan *yield* produksi pada era paskamonolitik ini. Kutipan langsung dari paper tersebut menunjukkan bahwa "desain chiplet bukan sekadar partisi IP, melainkan orkestrasi multi-disiplin yang menuntut platform EDA dengan kemampuan *native 3D-aware* dari *RTL synthesis* hingga *sign-off DRC*".

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield untuk Disaggregated Chiplet

Yield sistemik pada arsitektur chiplet mengikuti asumsi independensi defect per die. Jika sebuah sistem tersusun atas $N$ chiplet dengan yield individual $\eta_i$, maka yield majemuk sistem didefinisikan sebagai:

$$Y_{sistem} = \prod_{i=1}^{N} \eta_i = \prod_{i=1}^{N} \left( e^{-D_0 A_i} \right) = e^{-D_0 \sum_{i=1}^{N} A_i}$$

Karena disaggregasi memecah area total $A_{total}$ menjadi komponen-komponen kecil $A_i$ dengan $\sum A_i \approx A_{total}$, namun yield per chiplet mendekati 1 untuk area kecil, diperoleh peningkatan yield efektif secara signifikan. Roze dan Gerber (2026) menunjukkan bahwa untuk sistem HBM-on-logic 3D dengan empat chiplet memori dan satu base die, yield sistemik dapat ditingkatkan dari ~35% (monolitik) menjadi ~78% (chiplet-based).

### 2.2 Resistansi dan Kapasitansi Parasitik pada TSV dan Hybrid Bonding

Resistansi listrik sebuah *Through-Silicon Via* silinder dengan panjang $L_{TSV}$, jari-jari $r$, dan resistivitas $\rho_{Cu}$ (umumnya 1,68 × 10⁻⁸ Ω·m) mengikuti:

$$R_{TSV} = \frac{\rho_{Cu} L_{TSV}}{\pi r^2}$$

Untuk TSV berdiameter 5 µm dengan panjang 50 µm, diperoleh $R_{TSV} \approx \frac{(1{,}68 \times 10^{-8})(50 \times 10^{-6})}{\pi (2{,}5 \times 10^{-6})^2} \approx 4{,}28 \times 10^{-2}$ Ω per TSV.

Pada antarmuka Cu-Cu hybrid bonding, Lau (2023) menurunkan persamaan resistansi kontak sebagai fungsi *bonding pitch* $p$, tekanan termal $P$, dan temperatur annealing $T_{ann}$:

$$R_{contact} = \frac{\rho_{Cu}}{2\pi r_{bond}} \cdot f(p, T_{ann}, P)$$

dengan $f(\cdot)$ merupakan fungsi non-linear yang bergantung pada kualitas *interfacial grain growth* dan densifikasi *copper-to-copper diffusion*.

### 2.3 Model Resistansi Termal Stack 3D

Tahanan termal pada stack 3D-IC secara analitis mengikuti pendekatan *lumped RC network*:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i A_{eff,i}}$$

dengan $t_i$ adalah tebal layer ke-$i$, $k_i$ konduktivitas termal material (Si ≈ 148 W/m·K, Cu ≈ 400 W/m·K, TIM ≈ 1–10 W/m·K), dan $A_{eff,i}$ luas efektif perpindahan panas. Roze dan Gerber (2026) memformulasi-kan修正 (koreksi) untuk efek *lateral spreading* menggunakan *spreading angle* $\theta \approx 45°$:

$$A_{eff,i+1} = A_{eff,i} + 2 t_i \tan\theta \cdot (A_{eff,i}/\pi)^{1/2} + \pi (t_i \tan\theta)^2$$

### 2.4 Optimasi Floorplan Multi-Kriteria

Penempatan chiplet pada interposer atau substrate mengikuti formulasi optimasi:

$$\min_{\mathbf{x}, \mathbf{y}} \left[ w_1 \cdot L_{wire}(\mathbf{x}, \mathbf{y}) + w_2 \cdot T_{peak}(\mathbf{x}, \mathbf{y}) + w_3 \cdot \frac{1}{Y_{sistem}(\mathbf{x}, \mathbf{y})} \right]$$

terhadap约束 (kendala) berupa *non-overlapping constraint* $|\mathbf{x}_i - \mathbf{x}_j| \geq (W_i + W_j)/2$ untuk semua pasang chiplet $(i,j)$. Bobot $w_1, w_2, w_3$ merepresentasikan prioritas rekayasa terhadap panjang kabel, termal, dan yield.

### 2.5 Model Bandwidth dan Kepadatan I/O

Kepadatan I/O efektif pada Cu-Cu hybrid bonding dengan pitch $p$ dan lebar die $D$ adalah:

$$I_{density} = \frac{1}{p^2} \cdot \eta_{utilisasi}$$

dengan $\eta_{utilisasi}$ adalah efisiensi routing (umumnya 0,7–0,85). Untuk pitch 3 µm dengan utilisasi 80%, diperoleh $I_{density} \approx 8{,}9 \times 10^{9}$ I/O per cm², atau sekitar 10.000 kali lebih padat dibanding solder bump konvensional (Lau, 2023).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA *end-to-end* untuk desain 3D-IC yang dapat diimplementasikan mengikuti alur SOP berikut:

### 3.1 Tahap 1: System-Level Architecture & Partitioning

1. **Spesifikasi fungsional**: Definisikan modul IP, throughput target, dan budget daya pada level arsitektural menggunakan *high-level synthesis* (HLS) atau *electronic system level* (ESL) modeling.
2. **Partisi fisik**: Tentukan batas chiplet berdasarkan analisis *complexity-area-yield tradeoff*. Gunakan algoritma *min-cut partitioning* dengan bobot koneksi dan termal.
3. **Standar**: IEEE 1801 (UPF) untuk power intent, JEDEC JESD238 (HBM) untuk antarmuka memori.

### 3.2 Tahap 2: Native 3D Implementation

1. **Floorplanning 3D-aware**: Penempatan chiplet pada stack dengan optimasi *thermal-aware* dan *wirelength-aware* simultan.
2. **TSV / Hybrid Bonding Planning**: Penentuan lokasi, jumlah, dan dimensi TSV/Bump menggunakan *thermal-stress co-simulation*.
3. **Place & Route**: Routing sinyal antarchiplet dengan约束 impedansi terkontrol dan matching panjang untuk sinyal diferensial.
4. **Clock Tree Synthesis (CTS)**: Distribusi clock dengan *latency balancing* antar domain.

### 3.3 Tahap 3: Multi-Physics Verification

1. **Static Timing Analysis (STA)**: Analisis timing pada semua path termasuk path yang melintasi batas chiplet.
2. **Power Integrity**: Simulasi IR-drop dan *power delivery network* (PDN) pada stack 3D.
3. **Signal Integrity**: Analisis crosstalk, refleksi, dan *channel loss* pada interkoneksi TSV dan microbump.
4. **Thermal Analysis**: Simulasi termal transien dan steady-state menggunakan *compact thermal model* (CTM).
5. **Thermo-Mechanical Stress**: Analisis CTE mismatch dan *warpage prediction* menggunakan FEA atau *fast solver*.

### 3.4 Tahap 4: Physical Verification & Sign-Off

1. **DRC/LVS 3D**: Verifikasi *design rule* antar layer dan lintas die.
2. **ERC**: *Electrical Rule Check* untuk koneksi power/ground.
3. **DFM**: *Design for Manufacturing* check termasuk kepadatan metal, lebar minimum, dan antenna effect.

### 3.5 Diagram Alir Proses EDA 3D-IC

```
[Spesifikasi Sistem] 
        ↓
[Partisi Chiplet] → [Validasi Interface Protocol]
        ↓
[Floorplan 3D] → [Thermal-Aware Placement]
        ↓
[TSV/Bump Planning]
        ↓
[Place & Route per Chiplet] →