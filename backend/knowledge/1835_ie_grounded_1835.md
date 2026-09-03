# 1835 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah berada di titik infleksi akibat melambatnya *node scaling* planar dari hukum Moore tradisional. Ketika biaya fabrikasi *wafer* pada node 3 nm dan 2 nm melonjak melampaui USD 20 miliar per *fab*, pendekatan *monolithic System-on-Chip* (SoC) menghadapi tantangan fundamental: *defect density* yang meningkat secara eksponensial pada area *die* yang lebih besar menekan *yield* manufaktur secara drastis. Roze dan Gerber (2026) dalam makalahnya yang diterbitkan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium* (DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menegaskan bahwa paradigma *chiplet* dan *3D-IC* bukan lagi opsi teknologi melainkan keniscayaan strategis untuk mempertahankan laju komputasi yang dibutuhkan oleh workloads AI generatif, *high-performance computing* (HPC), dan *edge inference*.

Secara ekonomis, pendekatannya sederhana: sebuah *die* monolitik berukuran 600 mm² memiliki probabilitas *yield* sekitar 20–30%, sedangkan bila di-*partition* menjadi empat chiplet masing-masing 150 mm², *yield* efektif dapat melonjak menjadi lebih dari 85% karena *defect density* per area menurun secara kuadratik mengikuti model Poisson. Roze dan Gerber (2026) menekankan bahwa peran *Electronic Design Automation* (EDA) bergeser dari sekadar *place-and-route* dua dimensi menjadi orkestrator *multi-physics co-simulation* yang mengintegrasikan analisis termal, *signal integrity*, *power integrity*, dan *mechanical stress* dalam satu *unified design environment*. Pergeseran ini menciptakan permintaan masif akan *tooling* yang mampu menangani *floorplan* heterogen, validasi *bump pitch* pada skala submikron, dan verifikasi *die-to-die interconnect* lintas *foundry*.

Di sisi material, Lau (2023) dalam monografinya yang diterbitkan oleh Springer (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) mendokumentasikan bahwa *Cu-Cu hybrid bonding* telah menjadi *backbone* teknologi *3D stacking* dengan *pitch* yang telah mencapai 3 µm pada produksi masal dan 1 µm pada fase riset lanjutan. Dibandingkan *micro-bump soldering* konvensional yang memiliki *pitch* minimum 25–40 µm, hybrid bonding menawarkan densitas *interconnect* lebih dari 100 kali lipat, latency yang jauh lebih rendah karena eliminasi *solder joint*, dan kemampuan *fine-pitch scaling* yang berkelanjutan. Kombinasi keduanya—arsitektur chiplet yang di-*package* menggunakan hybrid bonding—menjadi cetak biru dominan untuk produk-produk seperti AMD Instinct, NVIDIA H100, dan TSMC CoWoS.

Urgensi operasional dari perspektif *Industrial Engineering* adalah bagaimana rantai pasok semikonduktor global, yang selama ini terfragmentasi antara *fab*, *OSAT*, dan *system integrator*, dapat diorkestrasikan melalui *digital thread* yang konsisten. Tanpa solusi EDA holistik seperti yang dipetakan oleh Roze dan Gerber (2026), *time-to-market* untuk desain chiplet akan membengkak karena iterasi fisik-fisik yang mahal dan ketidaksesuaian *sign-off* antar-domain. Oleh karena itu, investasi dalam metodologi EDA *chiplet-aware* merupakan keputusan kapital dan rekayasa yang menentukan keunggulan kompetitif jangka panjang.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Densitas Interkoneksi Hybrid Bonding

Densitas *interconnect* pada antarmuka hybrid bonding Cu-Cu dapat diformulasikan sebagai berikut. Bila $p$ adalah *pitch* (jarak pusat-ke-pusat antar *pad*), maka jumlah *pad* per satuan luas adalah:

$$N_{IO} = \frac{1}{p^2} \quad [\text{pad/mm}^2]$$

Untuk *pitch* $p = 3\ \mu\text{m}$ sesuai benchmark Lau (2023), maka:

$$N_{IO} = \frac{1}{(3 \times 10^{-3})^2} = \frac{1}{9 \times 10^{-6}} \approx 111{,}111\ \text{pad/mm}^2$$

Sementara itu, untuk *solder micro-bump* dengan *pitch* $p = 40\ \mu\text{m}$, hanya diperoleh:

$$N_{IO} = \frac{1}{(40 \times 10^{-3})^2} \approx 625\ \text{pad/mm}^2$$

Rasio kerapatan keduanya: $\frac{111.111}{625} \approx 178\times$ — membuktikan keunggulan struktural hybrid bonding untuk *bandwidth*-intensif seperti *memory-on-logic* stacking.

### 2.2. Resistansi Termal *Through-Silicon Via* (TSV)

Thermal management merupakan *constraint* kritis dalam 3D-IC. Resistansi termal sebuah TSV silindris dengan konduktivitas termal efektif $\lambda_{eff}$, panjang $L$ (setara dengan ketebalan *die*), dan diameter $D$ dapat didekati dengan:

$$R_{th,TSV} = \frac{L}{\lambda_{eff} \cdot \pi \left(\frac{D}{2}\right)^2} \quad [\text{K/W}]$$

Untuk TSV dengan $D = 5\ \mu\text{m}$, $L = 50\ \mu\text{m}$, dan $\lambda_{eff} \approx 150\ \text{W/(m·K)}$ (Cu dalam matriks Si):

$$R_{th,TSV} = \frac{50 \times 10^{-6}}{150 \cdot \pi \cdot (2{,}5 \times 10^{-6})^2} = \frac{50 \times 10^{-6}}{150 \cdot 1{,}963 \times 10^{-11}} \approx 16{,}98\ \text{K/W per TSV}$$

### 2.3. Model Yield untuk 3D-Stack

Yield kumulatif $Y_{3D}$ untuk *stacked die* mengikuti formula perkalian probabilitas independen, yang kemudian dimodifikasi untuk memasukkan koefisien korelasi cacat $k$:

$$Y_{3D} = \prod_{i=1}^{n} \left(1 + \frac{D_0 \cdot A_i}{k}\right)^{-k}$$

dengan $D_0$ adalah *defect density* (cacat/cm²), $A_i$ luas *die* ke-$i$ (cm²), $n$ jumlah *die* dalam stack, dan $k$ adalah *cluster parameter* (umumnya $k = 2$ untuk cluster negatif binomial). Bila $D_0 = 0{,}1$ cacat/cm², $A = 0{,}5\ \text{cm}^2$ (chiplet 5×5 mm), dan $n = 3$:

$$Y_{3D} = \left[\left(1 + \frac{0{,}1 \times 0{,}5}{2}\right)^{-2}\right]^{3} = \left[(1{,}025)^{-2}\right]^{3} = (0{,}9518)^{3} \approx 0{,}8629 \approx 86{,}3\%$$

### 2.4. Densitas Daya dan Kenaikan Suhu

Kenaikan suhu *junction* di atas ambient untuk *stack* dengan densitas daya $P_d$ (W/cm²), ketebalan efektif $t$, dan resistansi termal *package* $R_{th,ja}$:

$$\Delta T_j = P_d \cdot A_{eff} \cdot R_{th,ja}$$

Untuk *die* 100 mm² dengan $P_d = 100\ \text{W/cm}^2$ (workload AI), $R_{th,ja} = 0{,}5\ \text{K/W}$:

$$\Delta T_j = 100 \times 1 \times 0{,}5 = 50\ \text{K}$$

Artinya pada $T_a = 25°C$, *junction* mencapai $T_j = 75°C$ — masih dalam batas aman, namun margin semakin tipis bila *stack* memuat lebih dari dua *die* aktif.

### 2.5. Model RC untuk Interkoneksi Die-to-Die

Delay propagasi sinyal melalui *interconnect* hybrid bonding dimodelkan dengan *Elmore delay*:

$$\tau_{RC} = 0{,}693 \cdot R_{line} \cdot C_{line} + R_{line} \cdot C_{load}$$

dengan $R_{line} = \rho_{Cu} \cdot \frac{l}{w \cdot t}$ dan $C_{line}$ kapasitansi parasitik per satuan panjang. Pada *pitch* 3 µm dan panjang $l = 1\ \text{mm}$,延迟 *die-to-die* turun ke orde beberapa pikodetik, jauh di bawah *solder bump* yang memiliki *inductance* dominan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) merumuskan arsitektur EDA *flow* untuk desain chiplet/3D-IC yang terdiri atas delapan fase rekayasa. Berikut adalah sintesis SOP berdasarkan paper tersebut dan literatur pendukung Lau (2023):

### Fase 1 — *System-Level Partitioning* dan Spesifikasi

1. Definisikan *workload profile* (TOPS/W, bandwidth HBM, target *latency*).
2. Partisi fungsional menjadi chiplet logika, memori, I/O, dan *analog*.
3. Tentukan *die-to-die interface protocol* (UCIe, BoW, atau proprietari).
4. Hasilkan *chiplet abstraction* (PDK + bus model) untuk fab yang berbeda.

### Fase 2 — *Floorplanning* dengan Thermal Awareness

5. Lakukan *coarse placement* dengan *thermal map* sebagai *weight*.
6. Iterasikan *floorplan* menggunakan algoritma *simulated annealing* dengan *objective function*:

$$\min F = \alpha \cdot W_{wire} + \beta \cdot T_{j,max} + \gamma \cdot A_{total}$$

dengan $W_{wire}$ total panjang kabel, $T_{j,max}$ suhu *junction* maksimum, dan $A_{total}$ area total.

### Fase 3 — *Hybrid Bonding Stack Planning*

7. Tentukan *bond pitch* dan *pad array* sesuai kapasitas fab.
8. Validasi *stacking sequence* dan *thickness uniformity* (target $\pm 5\%$).
9. Lakukan *dummy fill* untuk mengontrol *CMP dishing* (Lau, 2023).

### Fase 4 — *Multi-Physics Sign-Off*

10. Jalankan *electrical analysis*: parasitik RC, *signal integrity*, dan *power integrity*.
11. Jalankan *thermal analysis*: