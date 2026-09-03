# 2235 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Optimasi Sistem Heterogen melalui Integrasi Automasi Desain Elektronika dan Teknologi Hibrid Bonding Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. In: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki era *post-Moore's Law* di mana penskalaan *node* planar tradisional menuju batas fisik dan ekonominya. Berdasarkan analisis Roze dan Gerber (2026) yang dipublikasikan dalam *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, paradigma arsitektur *System-on-Chip* (SoC) monolitik mengalami inefisiensi struktural ketika kompleksitas transistor melampaui 100 miliar transistor per die. Penulis mengidentifikasi bahwa biaya desain (*Non-Recurring Engineering*/NRE) untuk *mask set* pada *node* 3 nm dan di bawahnya telah melonjak melampaui ambang USD 500 juta per desain, sementara *yield* fabrikasi turun secara eksponensial seiring peningkatan luas die (Roze & Gerber, 2026).

Konteks operasional ini memunculkan kebutuhan mendesak akan pendekatan *heterogeneous integration* melalui arsitektur chiplet, di mana beberapa die kecil (chiplet) yang difabrikasi pada *node* proses yang berbeda-beda diintegrasikan dalam satu paket melalui *interposer* atau teknologi *3D stacking*. Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* menekankan bahwa teknologi *Cu-Cu hybrid bonding* telah muncul sebagai solusi dominan untuk integrasi vertikal chiplet dengan pitch interkoneksi mencapai sub-1μm, melampaui kemampuan *micro-bump* konvensional yang terbatas pada pitch 25–40μm. Pergeseran teknologi ini mengharuskan industri memiliki *tool* EDA (*Electronic Design Automation*) yang mampu menangani kompleksitas multidisiplin: *place-and-route* antardie, analisis integritas sinyal lintas batas chiplet, manajemen termal 3D, verifikasi *protocol* koheren (*coherent interconnect*), dan optimasi biaya-yield secara simultan (Roze & Gerber, 2026).

Urgensi ekonominya bersifat strategis. Pasar chiplet global diproyeksikan mencapai USD 145 miliar pada 2030 dengan CAGR 42,5%, didorong oleh adopsi di pusat data AI/HPC, perangkat mobile premium, dan sistem otomotif otonom. Namun, tanpa *toolchain* EDA yang matang, desainer menghadapi *bottleneck* berupa fragmentasi *workflow*, kurangnya *standard interface* (meskipun standar UCIe – *Universal Chiplet Interconnect Express* mulai diadopsi), dan *time-to-market* yang memanjang. Roze dan Gerber (2026) secara eksplisit menyatakan bahwa "the lack of unified EDA framework for chiplet-aware design is the primary impediment to scaling heterogeneous integration beyond pilot production." Oleh karena itu, dokumen *Knowledge Base* ini mensistematisasi pendekatan EDA untuk desain chiplet dan 3D-IC, dengan formulasi matematis dan studi kasus kuantitatif yang relevan bagi praktisi Teknik Industri dalam konteks rantai pasok semikonduktor.

## 2. Landasan Teori & Formulasi Matematis

Kerangka matematis untuk desain chiplet dan 3D-IC memerlukan integrasi beberapa domain: termal, listrik, manufaktur, dan ekonomi. Kami membangun fondasi formulasi berdasarkan parameter-parameter yang digunakan dalam literatur Roze & Gerber (2026) dan prinsip-prinsip teknologi *Cu-Cu hybrid bonding* yang dirincikan Lau (2023).

### 2.1 Model Resistansi Termal Stacked 3D-IC

Untuk struktur 3D-IC dengan *n* chiplet yang di-*stack*, resistansi termal total dari *junction* ke ambient didekomposisi sebagai seri resistansi termal konduksi pada setiap lapisan ditambah resistansi konveksi pada permukaan:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i} + \frac{1}{h \cdot A_{top}}$$

di mana $t_i$ adalah ketebalan chiplet ke-$i$ (m), $k_i$ adalah konduktivitas termal material (W/m·K), $A_i$ adalah luas efektif area disipasi, dan $h$ adalah koefisien konveksi (W/m²·K). Untuk chiplet silikon tipikal, $k_{Si} \approx 148$ W/m·K, sementara *bonding interface* Cu-Cu memiliki *thermal boundary resistance* (TBR) yang signifikan:

$$R_{th,bond} = \frac{TBR_{Cu-Cu}}{A_{bond}}$$

Lau (2023) melaporkan bahwa TBR pada interface *Cu-Cu hybrid bonding* dapat mencapai $5 \times 10^{-8}$ m²·K/W dengan annealing suhu rendah, yang menghasilkan $R_{th,bond}$ yang jauh lebih rendah dibanding *micro-bump* solder tradisional yang memiliki TBR ~$10^{-6}$ m²·K/W.

### 2.2 Model Integritas Sinyal Lintas Chiplet

Propagasi sinyal melalui *interposer* atau *bridge* (misalnya *silicon interposer* atau *RDL-based organic interposer*) dimodelkan sebagai jaringan *distributed RLC*. Kecepatan propagasi dan atenuasi sinyal ditentukan oleh:

$$v_p = \frac{1}{\sqrt{L C}} \quad ; \quad \alpha = \frac{R}{2}\sqrt{\frac{C}{L}} + \frac{G}{2}\sqrt{\frac{L}{C}}$$

di mana $L$, $C$, $R$, $G$ adalah parameter terdistribusi per satuan panjang (H/m, F/m, Ω/m, S/m). Untuk *interface* UCIe pada pitch 25μm dengan frekuensi operasi $f_{op}$ 32 Gbps, *insertion loss* harus memenuhi:

$$|S_{21}|_{dB} \leq -3 \text{ dB pada } f_{Nyquist} = 16 \text{ GHz}$$

### 2.3 Model Yield Kompromi Die Besar vs Multi-Chiplet

Yield fabrikasi untuk die individual mengikuti model negatif binomial:

$$Y_{die} = \frac{1}{(1 + AD\lambda)^\alpha} \approx e^{-\lambda A D}$$

di mana $A$ adalah luas area die (cm²), $D$ adalah *defect density* (defect/cm²), $\lambda$ adalah parameter clustering, dan $\alpha$ adalah parameter distribusi. Untuk arsitektur chiplet, *yield* sistem dihitung sebagai:

$$Y_{system} = \prod_{j=1}^{n} Y_{chiplet,j} \cdot Y_{assembly}$$

di mana $Y_{assembly}$ memperhitungkan kegagalan proses *hybrid bonding* yang probabilitasnya diparameterisasi oleh $P_{bond,success}$:

$$Y_{assembly} = P_{bond,success}^{n-1} \cdot P_{KGD,j}^{n}$$

dengan $P_{KGD}$ adalah probabilitas *Known-Good-Die* setelah *test* (Lau, 2023).

### 2.4 Model Biaya Total Kepemilikan (TCO)

Fungsi biaya total yang diminimalkan dalam desain chiplet adalah:

$$C_{TCO} = C_{NRE} + \sum_{j=1}^{n} \left( \frac{C_{fab,j} \cdot N_{wafer}}{Y_{chiplet,j}} \right) + C_{package} + C_{test} + C_{rework}$$

Roze dan Gerber (2026) memperkenalkan *figure of merit* desain chiplet:

$$FOM_{chiplet} = \frac{Performance \cdot Y_{system}}{C_{TCO} \cdot P_{total} \cdot T_{time-to-market}}$$

### 2.5 Model Distribusi Daya Multi-Domain

Konsumsi daya total sistem 3D-IC tersusun sebagai:

$$P_{total} = \sum_{j=1}^{n} P_{dynamic,j} + P_{static} = \sum_{j=1}^{n} (\alpha_j C_j V_j^2 f_j) + I_{leak} \cdot V_{dd}$$

di mana *dynamic power* didominasi oleh kapasitansi *switching* dan kuadrat voltase suplai, sehingga arsitektur chiplet memungkinkan penggunaan $V_{dd}$ berbeda per chiplet (misalnya chiplet memori pada 0,8 V, chiplet *compute* pada 0,75 V pada *node* 3 nm), yang merupakan keunggulan utama dibandingkan SoC monolitik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan *framework* EDA chiplet-aware yang terdiri dari delapan tahapan sistematis yang kami elaborasikan menjadi SOP berikut:

**Tahap 1 — Spesifikasi Sistem dan Partisi Chiplet.** Menggunakan *tool* *architecture exploration* (misalnya *SystemC* virtual prototyping), desainer mendefinisikan *performance*, *power*, *area* (PPA) target dan mempartisi fungsi ke dalam chiplet *compute*, *memory*, *I/O*, *analog/RF*. Fungsi objektifnya adalah meminimalkan:

$$\min_{X} \left( \alpha \cdot C_{TCO} + \beta \cdot P_{total} + \gamma \cdot T_{j,max} \right)$$

terhadap kendala $Y_{system} \geq Y_{target}$.

**Tahap 2 — Desain Chiplet Individual.** Setiap chiplet didesain menggunakan *full-custom* atau *semiautomatic* flow pada *node* proses optimalnya. *Synthesis*, *place-and-route*, dan *clock tree synthesis* dilakukan per chiplet dengan *power domain* terisolasi.

**Tahap 3 — Floorplanning Antardie.** *Tool* EDA modern (Cadence Innovus 3D-IC, Synopsys 3DIC Compiler, Siemens Calibre 3DTherm) melakukan *floorplanning* 3D dengan optimasi lokasi vertikal untuk meminimalkan gradien termal dan panjang *interconnect* horizontal.

**Tahap 4 — Routing Antardie melalui Interposer.** Implementasi *signal routing* pada *silicon interposer* atau *RDL* dengan optimasi *signal integrity*, *crosstalk*, dan *IR drop*. Algoritma *global routing* meminimumkan:

$$\min \sum_{k \in nets} w_k \cdot L_k$$

terhadap kendala kapasitansi dan *timing closure*.

**Tahap 5 — Thermal-Aware Placement.** Iteratif antara optimasi *electrical* dan *thermal* menggunakan *finite element method* (FEM) atau *compact thermal model* (CTM) dengan persamaan konduksi panas 3D:

$$\rho c_p \frac{\partial T}{\partial t} = \nabla \cdot (k \nabla T) + q'''$$

**Tahap 6 — Verifikasi Multidisiplin.** Meliputi DRC (*Design Rule Checking*) yang menggabungkan aturan fabrikasi chiplet individual + aturan *assembly* + aturan *bond