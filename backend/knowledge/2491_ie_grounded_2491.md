# 2491 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Arsitektur Integrasi Heterogen dan Mekanisme Hybrid Bonding Tembaga-Tembaga

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang menghadapi transisi paradigma yang fundamental: dari desain *monolithic System-on-Chip* (SoC) menuju arsitektur *disaggregated* berbasis chiplet dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh tiga kekuatan ekonomi-teknis simultan yang diuraikan oleh Roze dan Gerber (2026) dalam konteks simposium ICEP-HBS: (1) perlambatan ekonomis dari *Moore's Law* pada node proses sub-3 nm, di mana biaya fabrikasi wafer tunggal melonjak secara eksponensial hingga melampaui US$20 miliar per *fab*; (2) yield *die* yang turun drastis seiring membesarnya area retikel, dengan persamaan umum yield $Y = e^{-D_0 \cdot A}$ di mana $D_0$ adalah *defect density* dan $A$ adalah luas area aktif—mendorong strategi *known-good-die* (KGD) melalui partisi chiplet; dan (3) diversifikasi proses manufaktur di mana blok IP *logic*, *memory*, *RF*, dan *analog* dioptimasi pada *process node* berbeda lalu direintegrasikan secara heterogen. Dalam kerangka ini, Roze dan Gerber (2026) menekankan bahwa **solusi EDA (*Electronic Design Automation*)** bukan lagi sekadar *tool* drafting melainkan menjadi *backbone* keputusan strategis yang menentukan kelayakan *time-to-market*, *manufacturability*, dan *total cost of ownership* (TCO).

Dari perspektif *Industrial Engineering*, fenomena ini merepresentasikan kasus klasik dari **rekayasa sistem produksi kompleks** dengan tiga karakteristik: *high variety* (heterogenitas blok fungsional), *low volume per variant* (batch size turun menjadi per-die), dan *tight coupling* antarp modul fisik. Roze dan Gerber (2026, DOI: 10.23919/icep-hbs69241.2026.11550563) berargumen bahwa tanpa kerangka EDA yang menyatukan *physical design*, *verification*, *thermal-mechanical co-simulation*, dan *package-system co-design*, adopsi chiplet akan terhambat oleh *re-spin* yang mahal. Senada dengan itu, Lau (2023, DOI: 10.1007/978-981-19-9917-8_6) dalam buku komprehensifnya menekankan bahwa keberhasilan **Cu-Cu hybrid bonding**—dengan *pitch* di bawah 10 μm—menjadi prasyarat enabling technology bagi integrasi vertikal densitas tinggi, sekaligus menuntut metodologi verifikasi baru untuk menangkap efek parasitik *inter-die*. Urgensi industri ini diperkuat oleh proyeksi pasar *heterogeneous integration* yang melampaui US$80 miliar pada 2030, dengan CAGR >12%. Dalam konteks Indonesia dan Asia Tenggara, implikasi strategisnya adalah kebutuhan akan *design house* lokal yang mampu mengoperasikan *toolchain* EDA tingkat lanjut—sebuah kapabilitas yang menjadi *core competency* Teknik Industri modern karena mengintegrasikan aspek *process engineering*, *quality engineering*, dan *systems optimization*.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis untuk desain chiplet dan 3D-IC memerlukan formulasi multi-dimensi yang menggabungkan aspek elektris, termal, mekanis, dan ekonomis. Roze dan Gerber (2026) membangun arsitektur EDA mereka di atas empat pilar matematis utama:

**Pilar 1: Model Partisi dan Optimasi Throughput.** Fungsi objektif partisi chiplet dapat diformulasikan sebagai minimasi biaya total terhadap kendala kinerja dan *manufacturability*:

$$\min_{P} \; C_{\text{total}}(P) = \sum_{i=1}^{n} \left[ C_{\text{mask}}^{(i)} \cdot \mathbb{1}[i \in \text{logic}] + C_{\text{bond}}^{(i,j)} \cdot d_{i,j}^{\alpha} + C_{\text{yield}}^{(i)}(A_i) \right]$$

dengan $P$ adalah himpunan partisi, $C_{\text{mask}}^{(i)}$ biaya masker litografi untuk chiplet ke-$i$, $d_{i,j}^{\alpha}$ jarak *inter-chiplet* dengan eksponen $\alpha \in [1,2]$ yang merepresentasikan degradasi *signal integrity* seiring panjang *interconnect*, dan $C_{\text{yield}}^{(i)}(A_i)$ biaya terkait rendahnya yield untuk area besar. Model yield klasik yang diadopsi adalah:

$$Y_i = e^{-D_0 \cdot A_i}$$

sehingga total yield sistem mengikuti komposisi serial (untuk jalur kritis) atau paralel (untuk jalur *redundant*).

**Pilar 2: Model Listrik dan Parasitik Inter-die.** Untuk hybrid bonding Cu-Cu, resistansi kontak dievaluasi menggunakan persamaan Holm (yang dikutip Lau, 2023):

$$R_{\text{contact}} = \frac{\rho_{\text{Cu}}}{2 \cdot r_{\text{bump}}} + \frac{\rho_{\text{interface}}}{A_{\text{bond}}} \cdot e^{-\gamma \cdot T_{\text{bond}}}$$

dengan $\rho_{\text{Cu}}$ resistivitas tembaga ($1.68 \times 10^{-8}$ Ω·m pada 20°C), $r_{\text{bump}}$ radius efektif *bump*, $\rho_{\text{interface}}$ resistivitas antarmuka, dan $\gamma$ koefisien kualitas *bonding* yang menurun pada suhu rendah. Impedansi *transmission line* untuk *interconnect* *redistribution layer* (RDL) sepanjang $\ell$ dimodelkan sebagai:

$$Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}}, \quad \tau_{\text{prop}} = \ell \cdot \sqrt{LC}$$

di mana *delay* propagasi total lintas-chiplet pada frekuensi operasi $f_{\text{clk}}$ GHz menjadi kendala utama untuk timing closure.

**Pilar 3: Model Termal dan Dissipasi 3D-IC.** Resistansi termal *stack* 3D-IC mengikuti jaringan resistansi satu-dimensi terkoreksi:

$$\theta_{JA} = \sum_{k=1}^{N} \frac{t_k}{k_k \cdot A_{\text{eff},k}} + \frac{1}{h \cdot A_{\text{package}}}$$

dengan $t_k$ dan $k_k$ berturut-turut adalah tebal dan konduktivitas termal lapisan ke-$k$ (silikon ~150 W/m·K, TIM ~1–10 W/m·K, *heat spreader* ~400 W/m·K), sementara $h$ adalah koefisien konveksi. Untuk arsitektur *stacked* dengan *through-silicon via* (TSV) sebagai *thermal via*, kontribusi TSV terhadap spreading resistance mengikuti:

$$\theta_{\text{TSV}} = \frac{1}{N_{\text{TSV}} \cdot k_{\text{Cu}} \cdot \pi r_{\text{TSV}}^2 / t_{\text{Si}}}$$

**Pilar 4: Model Keandalan dan Koefisien Ekspansi Termal.** *Mismatch* koefisien ekspansi termal (CTE) antara tembaga ($\alpha_{\text{Cu}} \approx 17 \times 10^{-6}$ /°C) dan silikon ($\alpha_{\text{Si}} \approx 2.6 \times 10^{-6}$ /°C) menghasilkan *shear strain* siklik:

$$\Delta \gamma_{\text{therm}} = (\alpha_{\text{Cu}} - \alpha_{\text{Si}}) \cdot \Delta T \cdot \frac{d_{\text{neutral}}}{h_{\text{joint}}}$$

yang harus dibatasi di bawah ambang *fatigue* per siklus termal—parameter kritis untuk SOP manufaktur.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis desain chiplet dalam kerangka EDA mengikuti SOP berlapis sebagaimana distandardisasi oleh Roze dan Gerber (2026). Prosedur ini direplikasi ke dalam **Diagram Alir Rekayasa 7-Tahap** berikut:

```
[Tahap 1] System Specification & PPA Targets
        ↓
[Tahap 2] Chiplet Partitioning & IP Block Allocation
        ↓
[Tahap 3] Individual Chiplet Physical Implementation
        ↓
[Tahap 4] Inter-Chiplet Interface (UCIe/BoW) Definition
        ↓
[Tahap 5] 3D Stack Assembly & Hybrid Bonding Layout
        ↓
[Tahap 6] Multi-Domain Verification (SI/PI/Thermal/Mechanical)
        ↓
[Tahap 7] Tape-out & Foundry Hand-off
```

**Tahap 1** menetapkan *target* *performance*, *power*, dan *area* (PPA) dengan memperhitungkan *budget* termal dan listrik *stack* keseluruhan. **Tahap 2** melakukan partisi optimal menggunakan algoritma *min-cut* dengan bobot yang merepresentasikan volume komunikasi *inter-chiplet*—Lau (2023) menekankan bahwa antarmuka standar seperti **Universal Chiplet Interconnect Express (UCIe)** dengan *pitch* 25–45 μm menjadi kontrak elektris wajib. **Tahap 3** mengimplementasikan setiap chiplet secara independen pada *process node* yang sesuai, memungkinkan *parallel engineering* yang memperpendek siklus desain hingga 30–40%. **Tahap 4** mendefinisikan *bump map*, *redistribution layer* (RDL), dan *test access mechanism* untuk Known-Good-Die (KGD).