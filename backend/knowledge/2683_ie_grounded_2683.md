# 2683 — Desain EDA untuk Chiplet dan Integrasi Heterogen 3D-IC: Solusi Rekayasa Sistem untuk Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design; Rekayasa Kemasan Cu-Cu Hybrid Bonding
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik dari pendekatan *monolithic scaling*—yang didominasi oleh Hukum Moore dua dimensi—menuju paradigma *heterogeneous integration* (HI) berbasis *chiplet* dan *three-dimensional integrated circuit* (3D-IC). Roze dan Gerber (2026) dalam paparannya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) menegaskan bahwa kompleksitas desain multi-die, bersama dengan kepadatan interkoneksi sub-10 µm, telah melampaui kemampuan *Electronic Design Automation* (EDA) konvensional yang awalnya dirancang untuk die monolitik. DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) merujuk langsung pada analisis mereka mengenai kesenjangan verifikabilitas desain chiplet dan urgensi pengembangan *full-stack EDA co-design* yang mencakup *floorplanning*, *physical verification*, *thermal-mechanical sign-off*, dan *package-assembly co-optimization*.

Secara ekonomi, pasar chiplet global diproyeksikan menembus lebih dari USD 150 miliar pada 2030 dengan CAGR rata-rata 35%—didorong oleh permintaan *high-performance computing* (HPC), *artificial intelligence accelerators*, dan aplikasi *edge computing* berdaya rendah. Namun, biaya rekayasa (NRE) desain chip 3 nm/2 nm monolitik telah melonjak hingga USD 500–700 juta per desain, dengan yield fab menurun drastis akibat kompleksitas litografi EUV dan variasi proses. Pendekatan chiplet memungkinkan *yield* per die kecil tetap tinggi meskipun setiap die diproduksi pada *node* optimal yang berbeda (mis. logika 3 nm dengan I/O 7 nm dan HBM pada 12 nm), sehingga *effective die yield* sistemik dapat ditingkatkan signifikan.

Lau (2023), salah satu otoritas utama dalam teknologi *advanced packaging*, dalam Chapter 6 buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menunjukkan bahwa *Cu-Cu hybrid bonding* merupakan backbone fisik yang memungkinkan pitch interkoneksi turun di bawah 10 µm—saat ini sudah dipraktikkan pada pitch 3 µm pada prototipe volume dan roadmap menuju 1 µm pada horizon 2030. Berbeda dengan *solder microbump* yang bersifat termo-mekanik tidak stabil pada pitch <20 µm, *direct Cu-Cu bonding* memungkinkan *bonding temperature* rendah (200–250 °C), *post-bond annealing* pada 300–400 °C, dan luas kontak konduktif tinggi sehingga resistansi sambungan dapat turun mendekati batas resistivitas tembaga masif.

Dari perspektif *Industrial Engineering*, sistem produksi semikonduktor modern harus mengakomodasi tiga lapisan keputusan yang saling tergantung: (i) **desain arsitektur** (partisi fungsional, penempatan chiplet pada interposer atau substrat organik), (ii) **verifikasi fisik dan kelistrikan** (DRC/LVS multi-die, *signal/power integrity*, analisis termal), dan (iii) **manufaktur & perakitan** (*wafer-to-wafer* atau *chip-to-wafer* hybrid bonding, *thermal compression bonding*, dan *metrology* in-line). Ketidakselarasan ketiga lapisan ini menghasilkan *design-manufacturing gap* yang merugikan yield sistem, waktu *time-to-market*, dan biaya produksi. Inilah titik masuk utama solusi EDA yang diajukan Roze dan Gerber (2026)—yaitu *unified design platform* dengan *co-design database* yang menangani semua lapisan keputusan secara iteratif-konvergen.

Urgensi operasional juga bersifat strategis: *U.S. CHIPS and Science Act* (2022) dan inisiatif serupa di Uni Eropa, Jepang, dan Korea Selatan telah menggelontorkan lebih dari USD 200 miliar untuk reshoring kapasitas fab dan advanced packaging. Investasi ini mensyaratkan ketersediaan *EDA toolchain* domestik yang mampu menangani kompleksitas chiplet dan 3D-IC, sehingga penelitian seperti Roze & Gerber (2026) menjadi referensi utama bagi pembuat kebijakan, vendor EDA (Cadence, Synopsys, Siemens EDA/Mentor, Zuken), dan integrator sistem.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya Manufaktur Chiplet

Pendekatan chiplet mengubah struktur biaya produksi. Model *cost-per-good-die* untuk sistem multi-die dapat dinyatakan sebagai:

$$C_{good} = \frac{\sum_{i=1}^{N} C_{die,i} + C_{assembly} + C_{test}}{\prod_{i=1}^{N} Y_{die,i} \cdot Y_{assembly} \cdot Y_{test}}$$

di mana $C_{die,i}$ adalah biaya fabrikasi die ke-$i$, $C_{assembly}$ adalah biaya *hybrid bonding* dan perakitan, $C_{test}$ adalah biaya *known-good-die* (KGD) testing, dan $Y_{die,i}$, $Y_{assembly}$, $Y_{test}$ berturut-turut adalah yield komponen. Yield die individual mengikuti model negatif binomial (model Murphy):

$$Y_{die} = \left( \frac{1 - e^{-D \cdot A_{die}}}{D \cdot A_{die}} \right)^{2}$$

dengan $D$ adalah densitas cacat (defect density, mis. $0{,}05\ \text{cm}^{-2}$ untuk proses advanced) dan $A_{die}$ adalah luas area die (cm²). Untuk chiplet kecil, $A_{die}$ jauh lebih kecil dari die monolitik, sehingga $Y_{die}$ mendekati 1 dan *effective system yield* meningkat.

### 2.2 Estimasi Interkoneksi (Hukum Rent)

Untuk *floorplanning* chiplet, jumlah *net* yang melintasi batas die mengikuti Hukum Rent:

$$N = K \cdot (g^{\,p})$$

dengan $N$ adalah jumlah terminal (pin), $g$ adalah jumlah gerbang, $K$ konstanta Rent (1,0–4,5), dan $p$ eksponen Rent (0,5–0,75). Panjang kabel rata-rata lintas-die kemudian:

$$\bar{L}_{cross} = \frac{N_{cross} \cdot p_{pitch}}{2}$$

di mana $p_{pitch}$ adalah pitch *hybrid bonding* (µm). Pada pitch 3 µm, $\bar{L}_{cross}$ jauh lebih kecil dibanding pitch 40 µm *solder microbump*, sehingga *bandwidth* dan *energy-per-bit* antar chiplet membaik.

### 2.3 Model Warpage 3D-IC Stack

Selama proses *Cu-Cu hybrid bonding*, perbedaan koefisien ekspansi termal (CTE) antara die silikon ($α_{Si} \approx 2{,}6\ \text{ppm/K}$) dan material dielektrik (mis. SiO₂ $α \approx 0{,}5\ \text{ppm/K}$ atau polimer organik $α \approx 50{-}70\ \text{ppm/K}$) menyebabkan *warpage* yang menurunkan yield perakitan. Defleksi maksimum stack dapat dimodelkan sebagai:

$$w_{max} = \frac{k \cdot \Delta\alpha \cdot \Delta T \cdot L^2}{t}$$

dengan $k$ adalah faktor geometri (8 untuk *square plate simply supported*), $\Delta\alpha$ adalah selisih CTE, $\Delta T$ selisih suhu operasi, $L$ dimensi lateral die, dan $t$ ketebalan efektif stack. Batas toleransi untuk *wafer-to-wafer hybrid bonding* biasanya $w_{max} \leq 1{-}2\ \mu\text{m}$ untuk pitch 3 µm.

### 2.4 Resistansi Sambungan Cu-Cu

Resistansi kontak satu sambungan Cu-Cu didekati sebagai:

$$R_{bond} = \frac{\rho_{Cu} \cdot h_{pad}}{A_{contact}} + R_{interface}$$

dengan $\rho_{Cu} = 1{,}68 \times 10^{-8}\ \Omega\cdot\text{m}$, $h_{pad}$ tinggi pad tembaga (umumnya 3–10 µm), $A_{contact}$ luas kontak efektif, dan $R_{interface}$ resistansi界面 (interface) yang tergantung kualitas rekristalisasi Cu. Lau (2023) melaporkan bahwa pada kondisi *bonding* optimal (suhu 200 °C, waktu 30 menit, gaya 50 kN, *annealing* 300 °C), resistansi sambungan Cu-Cu dapat turun hingga $0{,}1{-}0{,}3\ \Omega$ per sambungan—jauh lebih rendah dibanding solder microbump Cu-Sn-Cu ($\sim 5{-}20\ \text{m}\Omega$).

### 2.5 Jaringan Resistansi Termal Stack 3D

Distribusi suhu dalam stack 3D dimodelkan sebagai jaringan resistansi termal Foster:

$$\theta_{ja} = \sum_{k=1}^{n} R_{th,k}$$

dengan $R_{th,k}$ resistansi termal tiap lapisan (die, TIM, heatsink). Untuk 3D-IC dengan empat die stacked, suhu *junction* tertinggi:

$$T_j = T_a + P_{total} \cdot \theta_{ja}$$

di mana $P_{total}$ adalah total disipasi daya. *Thermal-aware EDA* (Roze & Gerber, 2026) mengintegrasikan persamaan ini ke dalam loop optimisasi *floorplanning* sehingga penempatan chiplet dapat meminimalkan $T_j$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menguraikan arsitektur EDA multi-die yang mengikuti kerangka **DIE-CO (Design-Integration-Execution – Co-Optimization)** dengan langkah-langkah sistematis:

**Langkah 1 – Partisi Sistem & Penyiapan Data Integrasi.**
Partisi fungsional IP blok ke dalam chiplet berdasarkan analisis *throughput*, *latency*, *power*, dan *manufacturability*. Setiap chiplet memiliki *process design kit* (PDK) independen yang mencakup aturan DRC/LVS, model perangkat, dan *technology file*. Data disatukan dalam *interoperable database* (standar IEEE 1734-2023 *IP-XACT*).

**Langkah 2 – Floorplanning Hirarkis.**
Floorplanning dilakukan secara *hierarchical* dengan empat tingkat: (i) board/package, (ii) interposer/substrat, (iii) chiplet placement, dan (iv) *bump/bonded interconnect* planning. Algoritma optimisasi menggunakan *mixed-integer linear programming* (MILP) atau *simulated annealing* dengan fungsi objektif:

$$\min \left( w_1 \