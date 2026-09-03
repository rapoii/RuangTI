# 1979 — EDA Solution untuk Desain Chiplet dan 3D-IC: Integrasi Hybrid Bonding dalam Rekayasa Sistem Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Sistem Manufaktur Mikroelektronika Lanjutan
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma fundamental dari pendekatan monolithic System-on-Code (SoC) menuju arsitektur chiplet dan integrasi heterogen tiga dimensi (3D-IC). Pergeseran ini dipicu oleh keterbatasan fisik dan ekonomi dari penskalaan node planar (planar node scaling), di mana biaya fabrikasi masker masker (mask set) untuk node N3 dan N2 telah menembus ambang USD 30 juta per desain, sementara *yield* menurun secara eksponensial seiring bertambahnya luas die. Roze dan Gerber (2026) dalam papernya yang berjudul *"EDA Solution for Chiplet and 3D-IC Design"* yang diterbitkan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menegaskan bahwa desainer tidak lagi dapat memperlakukan chip, interposer, dan paket sebagai domain yang terpisah secara organisasi; sebaliknya, diperlukan kerangka Electronic Design Automation (EDA) yang mampu melakukan *co-design* secara holistik dari level arsitektur sistem hingga level *bond pad* pada pitch sub-mikrometer. DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563).

Urgensi ekonominya bersifat strategis. Pasar chiplet global diproyeksikan melampaui USD 100 miliar pada 2030, dengan tingkat pertumbuhan tahunan majemuk (CAGR) di atas 40%. Hiperscaler seperti AMD (arsitektur Infinity Fabric), Intel (Foveros, EMIB), dan TSMC (SoIC, CoWoS) telah mengkomersilkan produk berbasis chiplet. Namun, kompleksitas desain melonjak: sebuah sistem 3D-IC dengan 12 chiplet dapat memiliki lebih dari 100.000 *bump* atau *hybrid bond*, masing-masing dengan toleransi misalignment sub-200 nm. Tanpa tooling EDA generasi baru, verifikasi *sign-off* akan memerlukan waktu yang tidak dapat diterima oleh siklus Time-to-Market (TTM) produk konsumen yang telah turun menjadi 18 bulan.

Lau (2023) dalam bab *"Cu-Cu Hybrid Bonding"* dari buku *Chiplet Design and Heterogeneous Integration Packaging* (Springer, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menunjukkan bahwa hybrid bonding tembaga-tembaga (Cu-Cu) menjadi enabler teknologi utama karena mampu mencapai *pitch* konektor di bawah 10 μm dengan densitas areal > 10⁶ sambungan/cm², sekaligus memberikan konduktivitas listrik dan termal superior dibanding *micro-bump* solder tradisional berbasis Sn-Ag. Sambungan Cu-Cu menghilangkan fase intermetalik yang rentan terhadap *electromigration* dan memungkinkan *stack* multi-die dengan *thermal budget* rendah (< 300 °C), yang krusial untuk integrasi memori DRAM dan logika pada satu paket.

Dari perspektif Teknik Industri, masalah ini bukan sekadar persoalan elektronik, melainkan masalah optimisasi sistem manufaktur dengan variabel keputusan yang sangat banyak: partisi fungsional (*functional partitioning*), alokasi IP ke die, pemilihan *bonding technology*, tata letak fisik lintas-die, serta penjadwalan produksi multi-vendor. Tulisan ini menyintesiskan kerangka analitis dan prosedur operasional yang diperlukan untuk mengelola kompleksitas tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Penundaan (Delay) Interkoneksi untuk Hybrid Bond

Untuk sebuah saluran (channel) logika yang melintasi batas chiplet melalui sambungan Cu-Cu, total penundaan propagasi dalam orde pertama dapat dimodelkan sebagai:

$$\tau_{total} = \tau_{driver} + R_{wire}C_{wire} + R_{HB}C_{HB} + R_{wire}C_{HB} + R_{HB}C_{wire}$$

di mana:
- $R_{HB}$ dan $C_{HB}$ adalah resistansi dan kapasitansi寄生 dari satu hybrid bond, yang didominasi oleh resistansi kontak via tembaga.
- Untuk sambungan Cu-Cu dengan diameter $d_{via} = 5\,\mu m$, tinggi via $h = 10\,\mu m$, dan resistivitas tembaga $\rho_{Cu} = 1.68 \times 10^{-8}\,\Omega\cdot m$:

$$R_{HB} = \frac{\rho_{Cu} \cdot h}{\pi (d_{via}/2)^2} = \frac{(1{,}68 \times 10^{-8})(10 \times 10^{-6})}{\pi (2{,}5 \times 10^{-6})^2} \approx 8{,}55 \times 10^{-3}\,\Omega$$

Penundaan propagasi didominasi oleh kontribusi $R_{wire}C_{wire}$ untuk kabel panjang > 1 mm, tetapi untuk pitch sub-10 μm, komponen $R_{HB}C_{HB}$ menjadi non-negligible dan harus dimasukkan dalam *static timing analysis* (STA).

### 2.2 Model Termal Jaringan Resistansi

Arsitektur 3D-IC menghadapi masalah pembuangan kalor yang akut karena *stack* vertikal menghambat konduksi ke heatsink. Jaringan resistansi termal *lumped* untuk *stack* N die adalah:

$$R_{th,total} = \sum_{i=1}^{N} \frac{t_i}{k_i A_i} + R_{th,TIM} + R_{th,spreader}$$

di mana $t_i$, $k_i$, dan $A_i$ adalah ketebalan, konduktivitas termal, dan luas efektif die ke-i, sementara $R_{th,TIM}$ adalah resistansi *thermal interface material*. Untuk *thermal conductivity* tembaga $k_{Cu} \approx 400\,\mathrm{W/m\cdot K}$ pada TSV (Through-Silicon Via), kontribusi TSV terhadap *spreading resistance* efektif dapat direpresentasikan dengan faktor pengali:

$$\eta_{TSV} = \frac{A_{TSV,total}}{A_{die}} \cdot \frac{k_{Cu}}{k_{Si}}$$

dengan $k_{Si} \approx 150\,\mathrm{W/m\cdot K}$.

### 2.3 Model *Yield* Sambungan Hybrid Bonding

*Yield* proses bonding mengikuti distribusi statistik缺陷 pada permukaan wafer. Jika jumlah sambungan per die adalah $N_b$ dan densitas cacat permukaan (defect density) adalah $D_0$ (cacat/cm²), maka *yield* sambungan mengikuti formulasi Poisson:

$$Y_{bond} = e^{-N_b \cdot D_0 \cdot A_{pad}}$$

Untuk target *yield* 99,9% dengan $N_b = 50.000$ sambungan per die:

$$D_0 \leq \frac{-\ln(0{,}999)}{50000 \cdot A_{pad}}$$

Untuk luas pad efektif $A_{pad} = 25\,\mu m^2 = 2{,}5 \times 10^{-7}\,\mathrm{cm}^2$:

$$D_0 \leq \frac{0{,}001}{50000 \times 2{,}5 \times 10^{-7}} \approx 80\,\mathrm{cacat/cm^2}$$

Batas ini mendekati batas teknologi *particle control* pada cleanroom kelas 1 (ISO 3).

### 2.4 Optimisasi Partisi Chiplet

Partisi optimal $\mathbf{x}^* = (x_1, x_2, ..., x_N)$ dengan $x_i \in \{0,1\}$ menunjukkan penempatan blok IP ke chiplet ke-$i$ meminimalkan fungsi biaya total:

$$\min_{\mathbf{x}} \left[ \alpha \sum_{i} C_{fab}(A_i) + \beta \sum_{e \in E_{inter}} C_{wire}(e) + \gamma \sum_{i} P_{thermal,i} \right]$$

dengan kendala:
$$\sum_i x_{i,k} = 1 \quad \forall\, \text{blok IP } k$$
$$A_i = \sum_k x_{i,k} \cdot A_k \leq A_{mask,max}$$

Variabel $\alpha$, $\beta$, $\gamma$ adalah bobot ekonomik, dan $E_{inter}$ adalah himpunan sinyal yang melintasi batas chiplet.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menguraikan arsitektur EDA berbasis *unified database* yang mengintegrasikan *native* IC design environment dengan *package-aware* extraction. Prosedur operasional standar yang dirumuskan dari literatur adalah sebagai berikut:

**Tahap 1 — Spesifikasi Sistem dan Partisi Arsitektural.**
Definisikan *die-to-die interface* (D2D) specification: protokol (UCIe, Bunch of Wires/BoW), bandwidth per lane (misal 16 Gbps NRZ atau 32 Gbps PAM4), lebar bus, dan aturan *floorplan* antar chiplet. Keluaran tahap ini adalah *Interface Protocol Document* (IPD) yang ditandatangani oleh seluruh tim IP dan tim paket.

**Tahap 2 — *Co-Design* Logika dan Fisik.**
Implementasikan blok logika menggunakan *synthesis* dan *place-and-route* (PnR) dengan *technology files* yang sudah mencakup parasitik TSV dan hybrid bond. Tools komersial seperti Cadence Integrity 3D-IC, Synopsys 3DIC Compiler, atau Siemens Calibre 3DTherm mengeksekusi *floorplanning* bersama (*co-floorplan*) di mana tata letak