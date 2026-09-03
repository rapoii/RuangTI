# 1419 — Desain Chiplet dan Integrasi Heterogen: Arsitektur Pengemasan Canggih untuk Sistem Elektronik Generasi Baru

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Recent Advances and Trends in Chiplet Design and Heterogeneous Integration Packaging
**Jurnal & Sitasi Utama:** John H. Lau (2023). *Journal of Electronic Packaging*. DOI: [https://doi.org/10.1115/1.4062529](https://doi.org/10.1115/1.4062529)
**Sitasi Pendukung:** John H. Lau (2025). *Journal of Electronic Packaging*. DOI: [https://doi.org/10.1115/1.4070106](https://doi.org/10.1115/1.4070106)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi sistem elektronik abad ke-21 ditandai oleh berakhirnya hukum skala Dennard dan meningkatnya kompleksitas fabrikasi CMOS sub-7 nm yang disertai eskalasi biaya wafer secara eksponensial. John H. Lau (2023) dalam *Journal of Electronic Packaging* (DOI: 10.1115/1.4062529) menekankan bahwa desain monolithic System-on-Chip (SoC) berukuran besar menghadapi tiga hambatan operasional simultan: (i) biaya desain non-recurring engineering (NRE) masker yang melampaui USD 500 juta per node teknologi, (ii) degradasi yield die secara non-linear karena peningkatan area aktif yang rentan terhadap cacat acak, dan (iii) inkompatibilitas material antara unit logika densitas tinggi, memori bandwidth tinggi (HBM), serta photonic integrated circuit (PIC) yang membutuhkan proses fabrikasi fundamentally berbeda. Kondisi ini memicu transisi paradigma dari monolitik menuju arsitektur chiplet-based heterogeneous integration (HI), di mana beberapa die kecil (chiplet) yang masing-masing difabrikasi pada node optimal-nya kemudian diintegrasikan ke dalam satu paket dengan interkoneksi pitch ultra-halus.

Lau (2023) mengidentifikasi dua motor utama penggerak adopsi chiplet. Pertama, *cost-driven chip partition* yang memanfaatkan perbedaan biaya per transistor antar node—sebuah chip logika 200 mm² pada 5 nm memiliki biaya fabrikasi yang mendekati sebuah chip 100 mm² pada 7 nm meskipun transistor density-nya jauh lebih tinggi. Kedua, *yield-driven chip split* yang memecah die besar menjadi beberapa chiplet kecil agar yield per chiplet tetap tinggi, lalu yield sistem direkonstruksi melalui Known-Good-Die (KGD) testing sebelum integrasi. Lebih lanjut, *form-factor dan performance-driven multi-system integration* mengarahkan industri pada tiga arsitektur paket utama: (a) multiple system dengan thin-film redistribution layer (RDL) langsung di atas build-up package substrate, (b) multiple system dengan organic interposer di atas build-up substrate, dan (c) multiple system dengan through-silicon via (TSV) interposer di atas build-up substrate.

Dalam lanjutannya, Lau (2025, DOI: 10.1115/1.4070106) memperluas lanskap tersebut dengan memetakan hierarki integrasi 2D, 2.1D, 2.3D, 2.5D, 3D, 3.3D, hingga 3.5D IC, dan menominasikan tiga pilar teknologi yang menopang permintaan pasar high-performance computing (HPC) dan artificial intelligence (AI): teknologi high-bandwidth memory (HBM) beserta customized HBM (cHBM), keluarga Chip-on-Wafer-on-Substrate (CoWoS-S/R/L) beserta Chip-on-Panel-on-Substrate (CoPoS), serta integrasi heterogen 3D antara photonic IC (PIC) dan electronic IC (EIC) untuk komunikasi ultra-cepat. Urgensi industri untuk mengadopsi arsitektur ini bukan sekadar teknis—melainkan strategis, karena bottleneck packaging kini telah menjadi *new Moores Law* yang menentukan kelayakan ekonomi produk GPU AI seperti NVIDIA H100/H200 dan AMD MI300.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Monolitik vs Chiplet

Yield suatu die monolitik mengikuti distribusi Poisson atau negative binomial. Untuk fabrikasi CMOS advanced, model negative binomial dengan parameter clustering $s$ lebih akurat:

$$Y_{\text{mono}} = \left(1 + \frac{D_0 \cdot A_{\text{mono}}}{s}\right)^{-s}$$

di mana $D_0$ adalah defect density ($/cm^2$), $A_{\text{mono}}$ luas die monolitik ($cm^2$), dan $s$ parameter clustering (umumnya $s = 2$ untuk proses mature, $s \to \infty$ mendekati Poisson). Untuk arsitektur chiplet dengan $N$ die identik yang digabungkan secara paralel fungsional (yaitu yield sistem dibatasi produk KGD):

$$Y_{\text{system}} = \left(Y_{\text{chiplet}}\right)^N \cdot Y_{\text{interconnect}}$$

dengan yield chiplet:

$$Y_{\text{chiplet}} = \left(1 + \frac{D_0 \cdot (A_{\text{mono}}/N)}{s}\right)^{-s}$$

Yield interkoneksi $Y_{\text{interconnect}}$ merupakan probabilitas sukses bonding hybrid Cu–Cu atau solder micro-bump, dimodelkan sebagai:

$$Y_{\text{interconnect}} = \left(1 - \frac{N_{\text{joints}}^{\text{def}}}{N_{\text{joints}}^{\text{total}}}\right)^{N_{\text{joints}}^{\text{total}}}$$

### 2.2 Model Biaya per Die

Biaya per functional die pada wafer bundar mengikuti formulasi klasik:

$$C_{\text{die}} = \frac{C_{\text{wafer}}}{N_{\text{die}} \cdot Y_{\text{die}}}$$

dengan jumlah die per wafer:

$$N_{\text{die}} = \frac{\pi \cdot R^2}{A_{\text{die}}} - \frac{\pi \cdot R}{\sqrt{2 \cdot A_{\text{die}}}} - \pi \cdot R \cdot \delta$$

di mana $R$ jari-jari wafer, $A_{\text{die}}$ luas die, dan $\delta$ adalah parameter kehilangan tepi wafer. Untuk wafer 300 mm ($R = 150\,\text{mm}$), die 100 mm² memberikan $\approx 530$ die, sedangkan die 400 mm² hanya $\approx 109$ die—menunjukkan elastisitas biaya yang sangat sensitif terhadap ukuran die.

Total biaya per sistem chiplet (semua die + paket + test):

$$C_{\text{system}} = \sum_{i=1}^{N} C_{\text{die},i} + C_{\text{package}} + C_{\text{test}} + C_{\text{KGD screening}}$$

### 2.3 Model Bandwidth dan Interkoneksi

Bandwidth aggregate antarchiplet menggunakan protokol seperti Universal Chiplet Interconnect Express (UCIe) didekrisasi sebagai:

$$BW = N_{\text{lanes}} \cdot f_{\text{clock}} \cdot N_{\text{bits/lane}} \cdot \eta_{\text{encoding}}$$

Untuk HBM3 dengan stack 8-Hi dan antarmuka 1024-bit per stack pada $f_{\text{clock}} = 6.4\,\text{GHz}$ dengan pengkodean PAM-3 ($\eta \approx 0.79$), bandwidth puncak per stack mencapai $BW_{\text{HBM3}} \approx 819\,\text{GB/s}$.

### 2.4 Model Termal dan Keandalan

Resistansi termal junction-to-ambient paket 2.5D CoWoS dengan integrated heat spreader (IHS) dan cold plate mengikuti:

$$\theta_{ja} = \theta_{jc} + \theta_{cs} + \theta_{sa}$$

Untuk CoWoS-S dengan TIM1 ($\theta_{jc} \approx 0.05\,\text{K/W}$), IHS, dan TIM2 ($\theta_{cs} \approx 0.10\,\text{K/W}$), serta cold plate ($\theta_{sa} \approx 0.20\,\text{K/W}$ pada laju aliran 1 L/min), $\theta_{ja} \approx 0.35\,\text{K/W}$. Pada disipasi daya GPU AI $P = 700\,\text{W}$, kenaikan suhu junction menjadi:

$$\Delta T_j = P \cdot \theta_{ja} = 700 \cdot 0.35 = 245\,\text{K}$$

sehingga suhu junction absolut $T_j = T_a + 245$. Dengan $T_a = 45\,°C$ pada inlet data center, $T_j = 290\,°C$ yang jauh melampaui batas keandalan silikon ($150\,°C$)—menjelaskan mengapa arsitektur pendinginan dua fase dan immersion cooling menjadi agenda riset masa depan.

### 2.5 Model Kehandalan Mekanis: Substrat Kaca

Pergeseran dari organic core ke glass core substrate dijustifikasi oleh koefisien ekspansi termal (CTE) yang lebih rendah dan stabilitas dimensi superior. Tegangan termal pada via mengikuti:

$$\sigma_{\text{via}} = E \cdot \Delta \alpha \cdot \Delta T \cdot \left(\frac{d_{\text{via}}}{L_{\text{pitch}}}\right)$$

dengan $E$ modulus elastisitas, $\Delta \alpha = |\alpha_{\text{Cu}} - \alpha_{\text{substrate}}|$, dan $L_{\text{pitch}}$ jarak pusat via. Glass core ($\alpha_g \approx 3.2\,\text{ppm/K}$) memberikan $\Delta \alpha \approx 14\,\text{ppm/K}$ terhadap tembaga, jauh lebih rendah dibanding organic core ($\alpha \approx 12\,\text{ppm/K}$, $\Delta \alpha \approx 6\,\text{ppm/K}$)—namun modulus glass yang lebih tinggi (~$70\,\text{GPa}$) tetap memerlukan rekayasa geometris via yang cermat untuk mengendalikan tegangan residual.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Lau (2023, 2025) menguraikan arsitektur integrasi heterogen sebagai tumpukan keputusan rekayasa berlapis. Prosedur operasional standar untuk mengeksekusi proyek chiplet diekspresikan dalam enam tahap berikut:

**Tahap 1 — Functional Partitioning & Chiplet Mapping.** Gunakan pendekatan *cost-and-yield-driven* seperti digambarkan pada Figs. 1(a)–1(b) Lau (2023). Tentukan unit fungsional (CPU core, GPU shader, I/O, SRAM cache, analog/RF) lalu petakan ke node fabrikasi optimal menggunakan kurva biaya-per-transistor per node. Pemecahan die mengikuti aturan: area chiplet target harus memenuhi yield $Y_{\text{chiplet}} \geq 0.90$ pada $D_0$ proses aktual.

**Tahap 2 — Interconnect Topology Selection.** Pilih antara (i) **organic interposer** dengan RDL pitch 2–5 µm untuk aplikasi mainstream, (ii) **silicon interposer TSV** dengan pitch 0.4–1 µm untuk HPC premium, atau (iii) **embedded bridge die** (silicon bridge seperti Intel EMIB atau TSMC LSI) yang mengkombinasikan pitch halus secara lokal dengan biaya substrat organik. Kriteria pemilihan mengikuti matriks:

$$\text{Select} = \arg\min_{i \in \{\text{org, si, br}\}} \left( C_i + \alpha \cdot BW_{\text{loss},i} + \beta \cdot T_{\text{manuf},i} \right)$$

dengan $\alpha, \beta$ bobot sesuai prioritas aplikasi.

**Tahap 3 — Stacking & Bonding.** Tentukan apakah menggunakan (a) **thermocompression bonding (TCB)** dengan micro-bump solder Cu-pillar/Sn-Ag pitch 25–40 µm, atau (b) **Cu–Cu hybrid bonding** pitch sub-10 µm tanpa solder (direct Cu-Cu diffusion). Lau (2025) menekankan bahwa high-volume manufacturing (HVM) HBM dan produk AMD 3D V-Cache telah mengadopsi hybrid bonding karena resistansi kontak $R_c \leq 0.05\,\Omega$ dan pitch scalability hingga 3 µm.

**Tahap 4 — Encapsulation & Substrate.** Pilih antara (i) Fan-Out Wafer-Level Packaging (FOWLP) dengan epoxy molding compound (EMC) dan RDL multi-layer untuk fan-out chiplet, atau (ii) Fan-Out Panel-Level Packaging (FOPLP) untuk substrate 600×600 mm² guna menekan biaya per mm². Proses CoPoS (Chip-on-Panel-on-Substrate) yang dipopulerkan TSMC menggunakan panel ini.

**Tahap 5 — Test & Known-Good-Die (KGD) Screening.** Setiap chiplet harus lulus burn-in, functional test, dan parametric test sebelum integrasi. Biaya KGD screening biasanya mencapai 8–15% dari total biaya fabrikasi die.

**Tahap 6 — System-Level Validation & Reliability.** Jalankan thermal cycling (-55°C/+125°C, 1000 siklus per JESD22-A104), HTSL (high temperature storage life), uHAST, dan HTOL untuk memastikan masa pakai sistem 10 tahun pada suhu operasi.

Arsitektur proses untuk CoWoS-L yang diperkenalkan Lau (2025) mengikuti alur: wafer prep → TSV reveal & Cu bump → chip-on-wafer (CoW) bonding → molding → carrier debonding → wafer thinning → CoW dicing → chip-on-substrate (CoS) mounting → underfill → solder ball attach → package singulation.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus A: Yield dan Biaya —