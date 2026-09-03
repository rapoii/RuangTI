# 3035 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dengan Teknologi Cu-Cu Hybrid Bonding

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design; Cu-Cu Hybrid Bonding
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari pendekatan monolithic System-on-Chip (SoC) menuju arsitektur *chiplet* dan *3D-IC* sebagai respons terhadap berakhirnya efektivitas skalaran Dennard dan melonjaknya biaya fabrikasi pada node advanced di bawah 3 nm. Biaya masker untuk node 2 nm telah melampaui ambang USD 50 juta per set, sementara biaya per transistor hanya menurun secara marjinal, sehingga mendorong para perancang untuk mengadopsi strategi *heterogeneous integration* (HI) yang memungkinkan pencampuran blok IP (intellectual property) dari berbagai proses node, foundry, dan material dalam satu paket fungsional (Lau, 2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)).

Roze dan Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menegaskan bahwa transisi arsitektural ini menimbulkan tantangan desain yang tidak dapat diselesaikan oleh *Electronic Design Automation* (EDA) konvensional yang dirancang untuk monolitik planar. Para penulis menekankan urgensi pengembangan solusi EDA end-to-end yang mampu mengakomodasi partisi multi-die, verifikasi *interconnect* lintas-die, dan ko-optimasi termo-mekanis-listrik secara simultan. Dalam konteks *supply chain* semikonduktor, kemampuan desain chiplet memungkinkan disagregasi risiko fabrikasi, akselerasi *time-to-market*, dan peningkatan yield melalui strategi *known-good-die* (KGD) — dimensi yang sangat relevan bagi para insinyur industri yang harus mengelola kompleksitas lini produksi dan reliabilitas rantai pasok.

Urgensi operasional tampak pada proyeksi pasar chiplet global yang mencapai USD 130 miliar pada 2030 dengan CAGR di atas 40%. Standar *Universal Chiplet Interconnect Express* (UCIe), *Bunch of Wires* (BoW), dan *Open Chiplet Architecture* (OCA) semakin membutuhkan tooling EDA yang matang agar interoperabilitas lintas-vendor dapat terjamin. Dari sisi ekonomi, pendekatan chiplet menurunkan total biaya kepemilikan *packaging* hingga 30-45% dibanding SoC monolitik pada kelas kompleksitas yang setara, menjadikan optimalisasi desain sebagai variabel strategis bagi keputusan капитальных инвестиций di sektor manufaktur dan perakitan semikonduktor.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya Partisi Multi-Die

Fungsi tujuan optimasi partisi chiplet dapat diformulasikan sebagai minimasi biaya total sistem dengan tetap memenuhi约束约束约束约束 performansi, daya, dan termal. Formulasi dasarnya adalah:

$$C_{\text{total}} = \sum_{i=1}^{N} \left( C_{\text{die},i} + C_{\text{interconnect},i} \right) + C_{\text{assembly}} + C_{\text{test}}$$

dengan $N$ menyatakan jumlah chiplet, $C_{\text{die},i}$ adalah biaya fabrikasi chiplet-$i$ yang bergantung pada luas die $A_i$, yield-nya $Y_i$, dan node teknologi $t_i$:

$$C_{\text{die},i} = \frac{C_{\text{wafer}}(t_i)}{Y_i \cdot \lfloor A_{\text{wafer}} / A_i \rfloor}$$

Yield fabrikasi secara klasik mengikuti model Poisson atau Negative Binomial:

$$Y_i = \left(1 + \frac{D_0 \cdot A_i \cdot \lambda}{\alpha}\right)^{-\alpha}$$

di mana $D_0$ adalah *defect density* (defect/cm²), $\lambda$ adalah parameter clustering, dan $\alpha$ adalah parameter distribusi.

### 2.2 Analisis Termal pada Stack 3D-IC

Resistansi termal kumulatif untuk stack $N$ die yang diikat secara vertikal mengikuti model resistansi seri:

$$R_{\theta,\text{stack}} = \sum_{j=1}^{N} \frac{t_j}{k_j \cdot A_j} + R_{\theta,\text{TIM1}} + R_{\theta,\text{TIM2}}$$

dengan $t_j$ adalah tebal die-$j$, $k_j$ konduktivitas termal material, dan $A_j$ luas efektif penampang. Gradien temperatur pada bidang Cu-Cu bonding interface (yang dibahas Lau, 2023) menjadi kritis karena *Coefficient of Thermal Expansion* (CTE) yang berbeda dapat menimbulkan *stress* residual yang menurunkan寿命 siklus termal.

### 2.3 Kinetika Cu-Cu Hybrid Bonding

Proses *direct Cu-Cu bonding* mengikuti kinetika difusi interfacial yang dapat dimodelkan dengan persamaan Arrhenius untuk laju pertumbuhan *intermetallic compound* (IMC):

$$k_{\text{diff}} = k_0 \exp\left(-\frac{E_a}{k_B T}\right)$$

Tegangan tarik (*bond strength*) yang dihasilkan sebanding dengan luas area *bonding* efektif yang berhasil membentuk ikatan metalurgi:

$$\sigma_{\text{bond}} = \sigma_{\max} \cdot \left[1 - \exp\left(-\frac{t}{t_{\text{critical}}}\right)\right]$$

dengan $t_{\text{critical}}$ dipengaruhi oleh tekanan bonding $P$, suhu $T$, dan kekasaran permukaan $R_a$. Akurasi alignment 3σ mengikuti:

$$\sigma_{\text{alignment}} = \sqrt{\sigma_{\text{tool}}^2 + \sigma_{\text{overlay}}^2}$$

yang secara langsung menentukan minimum *bonding pitch* yang dapat dicapai pada teknologi hybrid bonding (Lau, 2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)).

### 2.4 Optimasi Interconnect Chiplet

Untuk link UCIe berkecepatan tinggi, model saluran transmisi terdistribusi menghasilkan impedansi karakteristik:

$$Z_0 = \sqrt{\frac{R' + j\omega L'}{G' + j\omega C'}} \approx \sqrt{\frac{L'}{C'}}$$

dan redaman saluran per satuan panjang:

$$\alpha_d = \frac{R'}{2Z_0} + \frac{G' Z_0}{2}$$

Optimasi EDA bertujuan meminimalkan *latency* end-to-end sambil mempertahankan *eye-opening* pada receiver dengan *bit-error-rate* (BER) target $\leq 10^{-15}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan arsitektur tool-flow EDA holistik untuk desain chiplet dan 3D-IC yang terdiri atas lima tahap utama dengan verifikasi kontinu:

**Tahap 1 — System-Level Partitioning.** Masukan berupa *RTL* atau *high-level model* (SystemC/TLM) dari SoC target. Algoritma partisi mengidentifikasi *bump*-constrained boundaries menggunakan formulasi *min-cut* dan *thermal-aware clustering*:

$$\min_{P} \sum_{e \in E_{\text{cut}}} w_e \cdot \rho_{\text{interconnect}}(e)$$

subject to约束约束约束约束 kapasitas per die $K_i$ dan约束 termal $P_{\text{total}} \leq P_{\text{thermal,budget}}$.

**Tahap 2 — Multi-Die Implementation.** Tahap *synthesis*, *place-and-route*, dan *clock tree synthesis* dilakukan secara simultan untuk seluruh chiplet dengan memanfaatkan *abstraction* melalui *chiplet interface protocol* (CIP). Roze dan Gerber menekankan pentingnya *unified database* yang merepresentasikan hierarki die-package-board secara koheren untuk mencegah inkonsistensi *timing closure*.

**Tahap 3 — Physical Verification Lintas-Die.** Verifikasi DRC (*Design Rule Check*), LVS (*Layout Versus Schematic*), dan *multi-die ESD* dijalankan dengan algoritma *hierarchical processing* untuk mengelola kompleksitas komputasional.

**Tahap 4 — Multi-Physics Sign-off.** Ko-simulasi termo-mekanis-listrik dilakukan menggunakan solver *finite element* coupled dengan *reduced-order models* (ROM) yang dihasilkan dari EDA. Distribusi temperatur dan stress mekanis dihitung untuk memastikan reliabilitas memenuhi standar JEDEC JED22-A104 dan IPC-9701.

**Tahap 5 — Manufacturing & Test Hand-off.** Generasi *bonding diagram*, *stacking sequence*, dan *test pattern* untuk KGD sesuai dengan standar UCIe dan IEEE 1838 untuk *die-to-die interconnect test*.

Untuk proses *Cu-Cu hybrid bonding* (Lau, 2023), SOP industri mencakup persiapan wafer dengan Chemical Mechanical Polishing (CMP) hingga kekasaran $R_a < 0.5$ nm, aktivasi permukaan dengan plasma N₂/H₂, alignment dengan akurasi submikron ($\leq 200$ nm pada tool state-of-the-art), thermocompression bonding pada suhu 200–400°C dengan tekanan 50–200 MPa selama 30–60 menit, dan最後に post-bond anneal untuk sintering penuh Cu-Cu interface.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Desain Prosesor AI dengan 4 Chiplet pada Stack 3D**