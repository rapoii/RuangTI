# 1915 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Lintas Domain dalam Rekayasa Kemasan Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design / Cu-Cu Hybrid Bonding
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, dalam *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Transisi arsitektur semikonduktor dari *system-on-chip* (SoC) monolitik menuju paradigma *chiplet* dan *three-dimensional integrated circuit* (3D-IC) bukan sekadar evolusi teknologis, melainkan respons strategis terhadap batas fisik dan ekonomi hukum Moore. Biaya mask-set untuk node 3 nm/2 nm telah melampaui ambang USD 500 juta per desain, dengan *yield* yang menurun drastis seiring peningkatan luas die. Roze dan Gerber (2026) dalam paper yang disajikan di *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) menegaskan bahwa desentralisasi fungsi IC ke dalam beberapa chiplet yang diintegrasikan secara heterogen merupakan satu-satunya rute yang secara techno-economically viable untuk melanjutkan *scaling* kinerja pada era *post-Moore* ([DOI: 10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)).

Konteks industri ini diperkuat oleh laju adopsi *hybrid bonding* tembaga-tembaga (Cu-Cu) yang dipelopori oleh John H. Lau (2023) sebagai tulang punggung interkoneksi vertikal berdensitas ultra-tinggi ([DOI: 10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)). Lau mendokumentasikan bahwa pitch interkoneksi telah turun dari 40–50 µm pada generasi solder microbump ke rentang sub-3 µm pada hybrid bonding, menghasilkan pengurangan resistansi kontak per sambungan hampir dua urutan magnitudo. Kombinasi kedua teknologi—EDA multi-die dan Cu-Cu hybrid bonding—menciptakan ruang desain baru yang membutuhkan orkestrasi lintas domain: kelistrikan, termal, mekanis, manufaktur, dan keandalan.

Urgensi operasional muncul dari tiga tantangan konkuren. Pertama, *design partitioning* harus memutuskan fungsi mana yang ditempatkan pada chiplet logika, chiplet memori (HBM), chiplet analog/RF, dan chiplet I/O, dengan memperhitungkan *latency*, *bandwidth*, dan disipasi daya per area. Kedua, *thermal coupling* antar-die pada stack 3D menyebabkan *hot-spot* terlokalisasi yang menurunkan *mean time to failure* (MTTF). Ketiga, kompleksitas verifikasi *pre-silicon* melonjak secara eksponensial karena jumlah *interface*, protokol (UCIe, BoW, AIB), dan skenario *test* yang harus divalidasi. Roze dan Gerber (2026) menekankan bahwa tanpa platform EDA yang mengintegrasikan *floor-planning*, *place-and-route*, simulasi termal-elektrik, dan validasi *design-for-test* (DFT) dalam satu *tool-flow*, time-to-market akan terhambat oleh iterasi desain yang mahal.

Dari perspektif ekonomi, biaya total kepemilikan (*total cost of ownership*, TCO) untuk sebuah produk 3D-IC tidak lagi didominasi oleh wafer fabrikasi, melainkan oleh *advanced packaging*. Kapasitas clean-room untuk hybrid bonding telah menjadi *bottleneck* strategis, dengan *lead-time* 6–12 bulan pada *subcontractor* utama (TSMC, ASE, Amkor, SPIL). Oleh karena itu, keputusan rekayasa sistem industri—di mana membagi fungsi, seberapa besar *redundancy* yang dimasukkan, dan bagaimana *supply chain* dikonfigurasi—harus dibuat sejak fase konseptual menggunakan model kuantitatif yang ketat.

## 2. Landasan Teori & Formulasi Matematis

Kerangka kuantitatif untuk desain chiplet dan 3D-IC dibangun di atas empat pilar model: biaya *yield-aware*, performa *interconnect*, manajemen termal, dan keandalan sambungan.

### 2.1 Model Biaya *Yield-Aware* Multi-Die

Untuk arsitektur chiplet yang terdiri dari $N$ die identik dengan luas masing-masing $A_d$ (cm²) dan *defect density* $D_0$ (cm⁻²), *yield* masing-masing die mengikuti distribusi Poison:

$$Y_d = e^{-D_0 \cdot A_d}$$

*Yield* sistem untuk konfigurasi *parallel redundancy* dengan $k$-*out-of-n* redundansi, di mana minimal $k$ dari $n$ chiplet identik harus berfungsi, diberikan oleh distribusi binomial kumulatif:

$$Y_{sys} = \sum_{i=k}^{n} \binom{n}{i} Y_d^{i} (1 - Y_d)^{n-i}$$

Biaya efektif per sistem dengan memperhitungkan biaya fabrikasi per die $C_d$ dan biaya integrasi/package $C_p$:

$$C_{eff} = \frac{n \cdot C_d + C_p}{Y_{sys}}$$

### 2.2 Resistansi dan Kapasitansi Sambungan Hybrid Bonding

Untuk sambungan Cu-Cu hybrid bonding dengan pitch $p$, diameter pilar tembaga $d_{cu}$, dan tinggi $h_{bond}$, resistansi DC per sambungan menurut Lau (2023) dapat dimodelkan sebagai:

$$R_{bond} = \frac{\rho_{Cu} \cdot h_{bond}}{A_{bond}} + R_{contact}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m, $A_{bond} = \pi d_{cu}^2/4$, dan $R_{contact}$ yang turun drastis dari $\sim 100$ mΩ pada solder microbump ke $< 5$ mΩ pada hybrid bonding termal padat ([DOI: 10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)).

Kapasitansi parasitik antara dua pilar berdekatan dengan jarak pusat-ke-pusat $p$ pada dielektrik dengan permitivitas relatif $\varepsilon_r$ dan tebal $t_{ox}$:

$$C_{coupling} \approx \varepsilon_0 \varepsilon_r \frac{\pi (d_{cu}/2)^2}{t_{ox}} \cdot k_{geom}(p/d_{cu})$$

dengan $k_{geom}$ adalah faktor geometri yang menurun saat pitch mengecil; pada pitch 3 µm dengan $d_{cu}$ = 1.5 µm, *coupling capacitance* menjadi signifikan dan mendominasi degradasi sinyal kecepatan tinggi.

### 2.3 Model Termal Stack 3D

Resistansi termal total stack $N$-die di atas *heat spreader* mengikuti resistansi seri paralel:

$$R_{th,total} = \left[ \sum_{i=1}^{N} \frac{1}{R_{th,i}^{-1} + (G_{conv,top} + G_{rad,top})} \right]^{-1}$$

dengan $R_{th,i} = t_i / (k_i \cdot A_i)$, dan $k_i$ adalah konduktivitas termal efektif yang sudah mencakup kontribusi *through-silicon via* (TSV) dengan *area fraction* $\alpha_{TSV}$:

$$k_{eff} = k_{Si}(1 - \alpha_{TSV}) + k_{Cu} \alpha_{TSV}$$

### 2.4 Keandalan Sambungan — Model Weibull

Waktu kegagalan sambungan Cu-Cu hybrid bonding di bawah siklus termal $\Delta T$ mengikuti distribusi Weibull dua-parameter:

$$F(t) = 1 - e^{-(t/\eta)^\beta}$$

dengan *characteristic life* $\eta$ yang tergantung pada koefisien ekspansi termal efektif (*effective CTE*) $\alpha_{eff}$, dan *shape parameter* $\beta \approx 3-5$ untuk sambungan hybrid bonding berkualitas tinggi. Model Coffin-Manson yang dimodifikasi memberikan:

$$\eta = C \cdot (\Delta T)^{-n} \cdot f^{-m} \cdot \exp\left(\frac{E_a}{k_B T_{max}}\right)$$

dengan $C$ konstanta material, $n \approx 1.5-2.5$, $f$ frekuensi siklus, $m$ eksponen frekuensi, dan $E_a$ energi aktivasi. Lau (2023) melaporkan bahwa sambungan hybrid bonding mencapai $\eta > 3000$ siklus pada $\Delta T = 100$°C, jauh melampaui $\eta < 1000$ siklus untuk solder microbump generasi sebelumnya ([DOI: 10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)).

## 3. Metodologi Rekayasa & SOP Desain Chiplet 3D-IC

Roze dan Gerber (2026) mengusulkan *tool-flow* EDA terpadu yang mengikuti arsitektur *closed-loop* antara keputusan partisi dan validasi fisik. Berikut SOP yang diturunkan untuk implementasi industri:

**Tahap 1 — Spesifikasi Sistem & Partisi Fungsional (minggu 1-4).**
Definisikan *target* performa, *budget* daya, dan constraints termal. Lakukan partisi awal menggunakan algoritma *min-cut* multi-konstrain pada hypergraph yang merepresentasikan modul IP. *Tool* modern (Cadence Integrity 3D-IC, Synopsys 3DIC Compiler) mengotomasi langkah ini dengan metrik biaya yang menggabungkan luas die, panjang *interconnect*, dan jumlah *through-silicon via* (TSV).

**Tahap 2 — Co-Design Floor-Plan & Bump/TDV Planning (minggu 5-10).**
*Floor-plan* die dihasilkan secara simultan dengan perencanaan *bump* untuk interkoneksi vertikal. Pada hybrid bonding Cu-Cu dengan target pitch 3 µm, jumlah *bump* per mm² melebihi 100.000, sehingga algoritma *force-directed placement* diperlukan untuk menghindari *routing congestion*.

**Tahap 3 — Power Delivery Network (PDN) Synthesis (minggu 11-14).**
Jaringan distribusi daya dirancang sebagai mesh global dengan *decoupling capacitor* on-die. Untuk stack 3D, *IR-drop* harus dihitung pada setiap die karena variasi beban dinamis.

**Tahap 4 — Simulasi Multi-Fisika (minggu 15-20).**
Lakukan simulasi elekt.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
