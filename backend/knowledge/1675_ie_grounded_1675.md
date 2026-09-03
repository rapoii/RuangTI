# 1675 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Manufaktur Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global saat ini tengah mengalami transisi arsitektural fundamental dari pendekatan *monolithic System-on-Chip* (SoC) menuju paradigma *disaggregated chiplet-based design* yang dimungkinkan oleh teknologi *Three-Dimensional Integrated Circuit* (3D-IC) dan *heterogeneous integration* (HI). Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan: pertama, berakhirnya efektivitas hukum Moore pada node-node sub-3 nm yang ditandai dengan melonjaknya biaya *wafer fabrication* per transistor; kedua, kebutuhan akan *time-to-market* yang lebih singkat dengan cara mengintegrasikan *intellectual property* (IP) blok yang sudah teruji (known good die, KGD) dari berbagai *process node* dan *foundries*; ketiga, permintaan pasar akan *compute throughput* pada *bandwidth*-tinggi untuk aplikasi AI/ML, HPC, dan *edge inference* yang tidak lagi dapat dipenuhi oleh satu *die* planar.

Roze dan Gerber (2026) dalam paparannya di *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) menegaskan bahwa desainer tidak lagi berhadapan dengan satu *die* tunggal melainkan sebuah *multi-physics assembly* yang harus dimodelkan secara simultan pada domain elektrik, termal, mekanik, dan manufaktur. Tanpa dukungan *Electronic Design Automation* (EDA) yang mengotomasi seluruh rantai mulai dari *partitioning*, *floorplanning*, *bump assignment*, verifikasi *signal-power-thermal integrity* (SIPI/Thermal), hingga *test*, produktivitas desain akan runtuh sebelum fabrikasi dimulai. Studi Roze dan Gerber (2026) mengkuantifikasi bahwa kompleksitas verifikasi pada sebuah assembly 3D-IC dengan 12 chiplet dan pitch interkoneksi 3 µm dapat melebihi 40× kompleksitas verifikasi SoC planar setara, sehingga memaksa masuknya disiplin *shift-left* dan *unified data model* ke dalam alur EDA.

Di sisi manufaktur, teknologi *Cu-Cu hybrid bonding* (HCB) yang dikaji secara mendalam oleh John H. Lau (2023) dalam bab "*Cu-Cu Hybrid Bonding*" dari buku *Chiplet Design and Heterogeneous Integration Packaging* menjadi *backbone* fisik yang mengaktifkan arsitektur chiplet dengan *interconnect pitch* sub-10 µm. Berbeda dengan thermocompression bonding (TCB) berbasis solder microbump yang terbatas pada pitch >20 µm karena *solder bridging* dan *EM (electromigration)*, HCB memungkinkan *pitch* turun hingga 1–3 µm dengan *pad diameter* 1,5–3 µm dan *bonding temperature* rendah (≤300 °C), sehingga membuka *bandwidth density* per mm² hingga 100× lebih tinggi. Urgensi industrialnya tecermin dari investasi masif TSMC, Intel, Samsung, dan Amkor pada lini *hybrid bonding* yang mulai memasuki fase *high-volume manufacturing* (HVM) pada 2024–2026. Tanpa platform EDA yang mampu melakukan *co-design* arsitektur-listrik-termal-manufaktur, keuntungan HCB tidak akan terrealisasi menjadi produk komersial.

Aspek ekonomi juga tak terpisahkan. Sebuah *multi-chiplet package* dengan luas efektif 100 mm² pada pitch 3 µm dan target *defect-per-million* (DPM) ≤50 menuntut kolaborasi presisi antara tim desain, paket, dan *assembly house*. Karena itu modul ini disusun untuk membekali perekayasa industri dengan pemahaman holistik yang memadukan perspektif desain (Roze & Gerber, 2026) dan perspektif proses & integritas (Lau, 2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Partisi Chiplet dan Kompleksitas Verifikasi

Partisi fungsi-fungsi SoC ke dalam kumpulan chiplet merupakan masalah optimasi multi-objektif. Misalkan sebuah SoC planar dengan luas aktif $A_{tot}$ dipartisi menjadi $N_c$ chiplet, dengan luas $A_i$ untuk chiplet ke-$i$ dan biaya *intra-die interconnect* per unit panjang $c_{int}$. Fungsi obyektif partisi dapat diformulasikan sebagai minimasi *weighted sum* antara kerugian luas *die-edge* (interposer/routing) dan biaya global:

$$\min_{N_c,\, \{A_i\}} \; \alpha \sum_{i=1}^{N_c} P_i \cdot k_{edge} + (1-\alpha)\sum_{i<j} \beta_{ij} \cdot d_{ij}$$

dengan $P_i$ adalah keliling chiplet $i$, $k_{edge}$ koefisien *keep-out zone* (umumnya 50–100 µm), $\beta_{ij}$ bobot bandwidth koneksi $i \leftrightarrow j$, dan $d_{ij}$ jarak fisik antar chiplet pada interposer. Roze dan Gerber (2026) memperkenalkan pendekatan *unified data model* yang merepresentasikan seluruh *chiplet, interposer, RDL, dan TSV* sebagai satu objek graf berarah sehingga setiap iterasi partisi dapat langsung dievaluasi terhadap metrik SIPI.

### 2.2. Model Kelimpahan (Yield) Hybrid Bonding

Kualitas *dielectric-dielectric* dan *Cu-Cu* bond pada proses HCB sangat sensitif terhadap *defect density* $D_0$ (cm⁻²) dan *particle contamination level* $P_c$ (partikel/cm² dengan diameter >50% pitch). Mengacu pada formulasi Lau (2023), yield sambungan Cu-Cu dapat dimodelkan menggunakan *negative binomial* (Poisson-Beta) yang merupakan standar industri untuk wafer-level packaging:

$$Y_{bond} = \left(1 + \frac{D_0 \cdot A_{bond}}{\eta}\right)^{-\eta}$$

dengan $A_{bond}$ adalah luas efektif sambungan satu *die*, dan $\eta$ adalah *cluster parameter* yang merepresentasikan tingkat *clustering* defect (umumnya $\eta = 1$ untuk distribusi acak sempurna, $\eta \to \infty$ untuk Poisson murni). Untuk target DPM tertentu, *defect density* maksimum yang diizinkan adalah:

$$D_0^{max} = \frac{\eta}{A_{bond}}\left[\left(\frac{1}{1-DPM}\right)^{1/\eta}-1\right]$$

Pada pitch 3 µm dengan luas bond $A_{bond} \approx 3{,}0 \times 10^{-7}\,\text{cm}^2$ per sambungan dan target $DPM = 50$ (yield 99,995%), dengan $\eta = 2$ maka $D_0^{max} \approx 8{,}3\,\text{cm}^{-2}$, yang mendekati kondisi cleanroom ISO Kelas 3. Jika pitch turun ke 1 µm, maka $A_{bond}$ turun menjadi $\sim 10^{-8}$ cm², sehingga $D_0^{max}$ naik ke $\sim 250$ cm⁻², yang menjelaskan mengapa HCB memerlukan *metrology* partikel sub-100 nm.

### 2.3. Resistansi Sambungan Cu-Cu dan Degradasi Elektromigrasi

Resistansi sambungan Cu-Cu setelah *bonding* mengikuti:

$$R_{bond} = \frac{\rho_{Cu}}{h_{Cu}} + R_{interface}$$

dengan $\rho_{Cu} = 1{,}68 \times 10^{-8}\,\Omega\!\cdot\!\text{m}$, $h_{Cu}$ adalah ketebalan Cu yang terhubung (umumnya 3–5 µm), dan $R_{interface}$ adalah resistansi antarmuka yang muncul jika terdapat *micro-void* atau *oxide residue* (tipikal 5–20 mΩ per sambungan). Lau (2023) menekankan bahwa *current crowding* di sekitar batas Cu pad menentukan *mean time to failure* (MTTF) melalui hukum Black:

$$MTTF = A_{EM} \cdot J^{-n} \exp\left(\frac{E_a}{k_B T}\right)$$

dengan $J$ rapat arus, $n \approx 2$ untuk Cu, $E_a \approx 0{,}9$ eV, $k_B = 8{,}617 \times 10^{-5}$ eV/K, dan $T$ suhu operasi junction. Pada HCB dengan pitch kecil, $J$ pada *corner* Cu pad dapat mencapai $2\times$ rata-rata, sehingga desain EDA modern (Roze & Gerber, 2026) wajib menjalankan ekstraksi geometris *current density distribution* sebelum tape-out.

### 2.4. Resistansi Termal dan Model Termal 3D-IC

Untuk stack 3D-IC dengan $n$ lapisan die dan *thermal interface material* (TIM) di antaranya, resistansi termal total adalah:

$$R_{th}^{total} = \sum_{i=1}^{n} \left(\frac{t_{Si,i}}{k_{Si} A_i} + \frac{t_{TIM,i}}{k_{TIM,i} A_i}\right) + R_{th}^{spreader} + R_{th}^{conv}$$

dengan $t$ adalah ketebalan, $k$ konduktivitas termal, dan $A$ luas efektif. Untuk $k_{Si}=148$ W/m·K, $k_{TIM}\approx 3$–$12$ W/m·K, dan ketebalan die yang telah ditipiskan menjadi 30–50 µm pada *3D-IC stacking*, kontribusi TIM menjadi dominan. Lau (2023) menunjukkan bahwa penurunan ketebalan die dari 750 µm ke 50 µm menurunkan $R_{th}$ die sebesar 15×, sekaligus menaikkan *thermal coupling* antar die yang harus dihitung menggunakan matriks:

$$\mathbf{T} = \mathbf{R}_{th} \cdot \mathbf{P} + \mathbf{T}_{amb}$$

dengan $\mathbf{T}$ vektor suhu, $\mathbf{R}_{th}$ matriks resistansi termal coupled, dan $\mathbf{P}$ peta disipasi daya.

### 2.5. Bandwidth dan Kepadatan Interkoneksi

*Bandwidth density* per mm² edge adalah parameter arsitektural kunci:

$$B_{dens} = \frac{N_{row} \cdot f_{bw}}{2 \cdot p}$$

dengan $N_{row}$ jumlah baris sambungan (single-row pada pitch > 5 µm, multi-row staggered pada pitch < 5 µm), $f_{bw}$ laju data per pin, dan $p$ pitch. Pada hybrid bonding pitch 3 µm dengan dua baris *staggered* dan $f_{bw}=32$ Gbps NRZ/PAM4, $B_{dens}$ mencapai ~10 Tbps/mm, dibandingkan ~0,3 Tbps/mm pada solder microbump pitch 25 µm.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) merancang *tool flow* EDA holistik untuk chiplet dan 3D-IC yang mengikuti SOP *shift-left verification*. Tahapan sistematisnya adalah sebagai berikut:

**Tahap 1 — System-Level Partitioning.** Arsitek sistem mendefinisikan *chiplet manifest* berupa fungsional blok, target *process node*, *thermal design power* (TDP), dan antarmuka fisik (bump map). Algoritma optimasi (Roze & Gerber, 2026) menggunakan *mixed-integer linear programming* dengan kendala *thermal*, *bandwidth*, dan *KGD yield*.

**Tahap 2 — Chiplet & Interposer Co-Floorplanning.** Setelah partisi, *floorplanner* menghasilkan layout 2.5D/3D yang meminimalkan panjang wire global dan menyeimbangkan peta termal. Pada tahap ini, integrasi dengan platform seperti Cadence Integrity 3D-IC atau Synopsys 3DIC Compiler merepresentasikan *bump*, *TSV*, *RDL* sebagai objek graf.

**Tahap 3 — Unified Data Model Extraction.** Semua objek fisik dikonversi menjadi *unified netlist* yang mencakup parasitik RLC sambungan Cu-Cu, *TSV capacitance* (tipikal 5–50 fF), dan *micro-bump resistance*. Roze dan Gerber (2026) melaporkan bahwa adopsi *unified data model* menurunkan *iteration time* antara RTL dan GDSII dari beberapa minggu menjadi hitungan hari.

**Tahap 4 — SIPI/Thermal Co-Simulation.** Simulasi *signal integrity* (eye diagram, return loss), *power integrity* (IR drop, PDN resonance), dan *thermal* dilakukan secara simultan. Formulasi Coupled RLC-Fourier 1D yang dipakai:

$$\frac{\partial^2 V(x,t)}{\partial x^2} = LC \frac{\partial^2 V}{\partial t^2} + RC \frac{\partial V}{\partial t}$$

dipakai untuk memverifikasi bahwa tidak ada *eye closure* >15% pada *worst-case corner*.

**Tahap 5 — DRC/LVS/LFD Multi-Die.** *Design Rule Check* diperluas ke aturan *line width/space*, *bump keep-out*, *die-to-die alignment* (tipikal ±0,5 µm pada pitch 3 µm), dan *lithography-friendly design* (LFD).

**Tahap 6 — Test & Known-Good-Die Assurance.** Roze dan Gerber (2026) menyoroti bahwa *Design-for-Test* (DFT) chiplet wajib