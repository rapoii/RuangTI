# 2747 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding, dan Optimasi Multi-Fisika dalam Rantai Nilai Semikonduktor Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding* dalam *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari pendekatan monolitik集成电路 menuju arsitektur *heterogeneous integration* (HI) berbasis chiplet dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan: (i) pelambatan *scaling* Hukum Moore pada node proses sub-3 nm di mana biaya *wafer* naik secara eksponensial sementara *yield* turun, (ii) melonjaknya permintaan bandwidth memori dan komputasi untuk aplikasi AI generatif, HPC, dan kendaraan otonom, serta (iii) kebutuhan untuk mengintegrasikan node proses yang berbeda secara optimal (misalnya logik先进 pada 3 nm dicampur dengan SRAM atau I/O pada 7 nm/12 nm) dalam satu kemasan. Roze dan Gerber (2026) dalam papernya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menegaskan bahwa kompleksitas desain chiplet telah melampaui kemampuan *tool* EDA (*Electronic Design Automation*) konvensional yang dirancang untuk SoC monolitik, sehingga memerlukan arsitektur otomasi desain baru yang mampu mengelola ko-sinyal-multi-fisika, verifikasi lintas-die, dan optimasi *yield* secara holistik [DOI: 10.23919/icep-hbs69241.2026.11550563].

Secara ekonomis, pasar chiplet global diproyeksikan melampaui USD 100 miliar pada 2030 dengan CAGR di kisaran 40–45%, didorong oleh adopsi *Universal Chiplet Interconnect Express* (UCIe) sebagai standar terbuka yang dipelopori oleh Intel, TSMC, Samsung, AMD, dan ARM. Namun, transisi ini bukan sekadar masalah *interface*; ini adalah masalah rekayasa sistem industri yang menyentuh seluruh rantai nilai: dari partisi arsitektur, fabrikasi die, *packaging*, hingga pengujian dan integrasi sistem. Dalam konteks ini, peran EDA berubah dari sekadar *place-and-route* menjadi *platform orkestrasi multi-disiplin* yang menjembatani desain logika, fabrikasi, dan pengemasan. Seperti ditegaskan Lau (2023) dalam monografinya tentang *Chiplet Design and Heterogeneous Integration Packaging*, teknologi *Cu-Cu hybrid bonding* dengan pitch yang telah turun dari 10 μm menjadi 1 μm (dan sedang menuju sub-500 nm) menjadi enabler fisik utama bagi densitas interkoneksi tinggi pada stack 3D, namun setiap penurunan pitch membawa tantangan baru dalam hal ko-planaritas, termal, dan *stress* mekanis yang hanya bisa diselesaikan melalui EDA yang sophisticated [DOI: 10.1007/978-981-19-9917-8_6].

Urgensi operasional makin jelas ketika kita perhatikan bahwa sebuah paket chiplet modern dapat terdiri atas 4–16 *active* die, masing-masing dengan *floorplan*, *power grid*, dan termalnya sendiri. Tanpa EDA yang mengintegrasikan simulasi termal, integritas sinyal, distribusi daya (*IR-drop*), dan *mechanical stress* dalam satu *framework*, *time-to-market* akan menjadi tidak berkelanjutan. Inilah celah yang diidentifikasi oleh Roze dan Gerber (2026): kebutuhan akan solusi EDA yang tidak lagi memperlakukan setiap die secara silo melainkan sebagai satu entitas sistem terpadu dengan optimasi multi-fisika end-to-end.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis untuk desain chiplet dan 3D-IC memerlukan empat model kuantitatif utama yang saling tergantung: (1) model *yield* multi-die, (2) model termal paket, (3) model integritas sinyal interkoneksi, dan (4) model ekonomi *cost-per-function*.

### 2.1 Model Yield Multi-Die (Known Good Die / KGD)

Yield total dari sebuah paket chiplet yang terdiri atas $n$ die individual diberikan oleh perkalian yield setiap die, dengan asumsi bahwa cacat pada satu die menyebabkan kegagalan seluruh paket:

$$Y_{paket} = \prod_{i=1}^{n} Y_{KGD,i}$$

di mana $Y_{KGD,i}$ adalah yield *known-good-die* untuk chiplet ke-$i$ yang telah melewati *burn-in* dan probe test. Untuk partisi chiplet yang homogen (semua die identik), persamaan ini disederhanakan menjadi:

$$Y_{paket} = Y_{KGD}^{n}$$

Persamaan ini menunjukkan bahwa strategi chiplet menghadapi *trade-off* struktural: membagi satu die besar menjadi $n$ chiplet kecil meningkatkan yield per die ($Y_{KGD}$ naik karena area turun), namun melipatgandakan probabilitas kegagalan melalui perkalian $n$. Roze dan Gerber (2026) menunjukkan bahwa terdapat *sweet spot* optimal pada partisi 4–8 chiplet untuk paket HPC modern, dengan margin yield di atas 80% [DOI: 10.23919/icep-hbs69241.2026.11550563].

### 2.2 Model Termal Paket 3D-IC

Resistansi termal total paket 3D disusun secara seri dari berbagai lapisan (die, *underfill*, *TIM*, *heat spreader*):

$$R_{th,total} = \sum_{j=1}^{m} \frac{t_j}{k_j \cdot A_j}$$

di mana $t_j$ adalah ketebalan lapisan $j$ (m), $k_j$ konduktivitas termal (W/m·K), dan $A_j$ luas efektif penampang aliran panas. Pada stack 3D dengan *hybrid bonding*, ketebalan lapisan *interconnect* dapat turun hingga $t_{bond} \approx 1\,\mu m$, sehingga kontribusi termalnya menjadi signifikan terhadap pendinginan *bottom die*. Temperatur *junction* maksimum $T_j$ dihitung sebagai:

$$T_j = T_{ambient} + P_{total} \cdot R_{th,total}$$

Untuk mempertahankan $T_j < 85°C$ pada $T_{ambient}=45°C$ dengan paket 8-die pada daya total $P=200$ W, dibutuhkan $R_{th,total} < 0.2$ K/W, yang memerlukan integrasi *microchannel cooling* atau *direct liquid cooling* — keduanya merupakan keputusan desain yang harus disimulasikan sejak fase partisi arsitektur.

### 2.3 Model Bandwidth dan Integritas Sinyal Interkoneksi

Untuk interkoneksi UCIe dengan $N_{ch}$ lane per link, *baud rate* per lane $f_{baud}$, dan pengkodean $b$ bit per simbol (b=2 untuk PAM, b=1 untuk NRZ):

$$BW_{link} = N_{ch} \times f_{baud} \times b \quad [\text{Gbps}]$$

*Latency* propagasi melalui hybrid bond die-to-die:

$$t_{prop} = \frac{L_{interconnect}}{v_{prop}} = L_{interconnect} \sqrt{\varepsilon_{eff}/c^2}$$

Konsumsi energi per bit didominasi oleh kapasitansi *bond pad*:

$$E_{bit} = \alpha \cdot C_{pad} \cdot V_{sw}^2$$

Roze dan Gerber (2026) menunjukkan bahwa untuk UCIe standar dengan pitch 25 μm, kapasitansi *pad* berada di kisaran 50–80 fF, sehingga pada $V_{sw}=0.8$ V energi per bit turun ke $<0.05$ pJ/bit — jauh lebih rendah dari *serdes* off-package (>1 pJ/bit). Inilah yang menjadikan arsitektur chiplet layak secara energetik untuk komputasi intensif [DOI: 10.23919/icep-hbs69241.2026.11550563].

### 2.4 Model Ekonomi Cost-per-Function

Biaya efektif per fungsi dihitung dengan memasukkan yield dan *area-utilization*:

$$C_{eff} = \frac{C_{wafer}}{Y_{paket} \cdot N_{dies/wafer} \cdot n_{fungsi/die}}$$

di mana $C_{wafer}$ adalah biaya *wafer* fabrikasi, $Y_{paket}$ dari Persamaan 1, $N_{dies/wafer}$ jumlah die per wafer (fungsi dari area die dan diameter wafer), dan $n_{fungsi/die}$ jumlah unit fungsi per die. Optimasi desain chiplet pada dasarnya adalah meminimalkan $C_{eff}$ dengan menyeimbangkan ukuran die, jumlah chiplet, dan overhead *packaging/interconnect*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan *workflow* EDA multi-fase yang menjembatani tiga domain rekayasa secara simultan: arsitektur logika, fabrikasi, dan packaging. Prosedur ini mengikuti kerangka yang sekarang distandarisasi oleh konsorsium UCIe dan OCP (Open Compute Project).

### Fase 1 — Partisi Arsitektur dan Co-Design

1. **Spesifikasi sistem dan *performance budgeting***: Tentukan target bandwidth, latency, daya, dan termal.
2. **Partisi fungsi ke chiplet**: Gunakan algoritma *min-cut* dan *network-flow* berbasis Python/Tcl scripting dalam *tool* EDA (Synopsys 3DIC Compiler, Cadence Integrity 3D-IC, Siemens Tessent).
3. **Pilihan protokol die-to-die**: Tentukan apakah menggunakan UCIe-Standard, UCIe-Advanced, atau BoW (Bunch of Wires) berdasarkan *pitch* dan bandwidth.
4. **Floorplan co-design**: Lakukan *floorplanning* dengan *thermal-aware* dan *signal-integrity-aware* constraint.

### Fase 2 — Desain Fisik dan Verifikasi Multi-Fisika

1. **Place-and-route global**: *Place* semua chiplet dalam paket *substrate* atau *interposer*.
2. **Ekstraksi parasitik RLC**: Dari layout hybrid bonding pitch $p_{bond}$, ekstrak $R$, $L$, $C$.
3. **Simulasi termal transien dan *steady-state***: Gunakan solver 3D finite-element (ANSYS Icep