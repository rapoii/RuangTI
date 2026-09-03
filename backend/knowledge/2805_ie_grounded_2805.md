# 2805 — Strategi Closed-Loop Supply Chain Baterai Bekas: Pemanfaatan Bertingkat (Echelon Utilization), Remanufaktur, dan Robust Optimization untuk Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-loop Supply Chain (CLSC) dengan Strategi Pemanfaatan Bertingkat dan Remanufaktur Baterai Lithium-ion Bekas
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi kendaraan listrik (Electric Vehicle/EV) global yang dipacu oleh Perjanjian Paris dan target *net-zero emission* 2050 telah menciptakan paradoks industri baru di sektor Teknik Industri: pesatnya adopsi EV menghasilkan volume *end-of-life* (EOL) baterai lithium-ion (LIB) yang diproyeksikan mencapai 1,4 juta ton pada 2030 (JIANG & TANG, 2025). Baterai EV yang sudah turun State-of-Health (SOH) di bawah 70–80% tidak memenuhi standar performa otomotif, namun masih menyimpan 60–70% kapasitas asli yang sangat bernilai untuk aplikasi stasioner berjenjang (*echelon utilization*). JIANG & TANG (2025) menekankan bahwa strategi *closed-loop supply chain* (CLSC) harus secara simultan mengelola tiga aliran: (1) aliran material dari konsumen kembali ke *recycling hub*, (2) aliran produk remanufaktur ke pasar sekunder (low-speed vehicle, *energy storage system*/ESS, lampu jalan pintar), dan (3) aliran informasi/kredit karbon sesuai *Extended Producer Responsibility* (EPR). 

Sementara itu, ketidakpastian permintaan, kualitas pengembalian, dan fluktuasi harga logam kritis (Li, Co, Ni) menuntut model *robust optimization* agar keputusan kapasitas, harga, dan tingkat daur ulang tidak rapuh terhadap skenario pesimistis. Shin, Kim & Jeong (2024) membuktikan bahwa model CLSC yang mengabaikan *return management system* menghasilkan kerugian rata-rata 18,7% lebih tinggi ketika terjadi guncangan permintaan (*demand shock*). Integrasi kedua perspektif ini menjadi fondasi modul ini: merancang strategi CLSC baterai bekas yang tidak hanya memaksimalkan profit jangka pendek, tetapi juga robust terhadap fluktuasi rantai pasok dan memenuhi mandat ekonomi sirkular UE (Circular Economy Action Plan 2020, *Right to Repair Directive*, dan *Battery Regulation 2023/1542* yang mewajibkan 73%回收率回收率回收率回收 lithium回收 pada 2030).

Urgensi operasional semakin nyata ketika mempertimbangkan kapasitas daur ulang global (≈150 GWh/tahun) masih jauh di bawah kapasitas baterai pensiun yang diproyeksikan (>400 GWh pada 2030 menurut BloombergNEF 2024). Kesenjangan ini hanya dapat ditutup melalui **dual-channel recovery**: (i) *echelon utilization* untuk baterai dengan SOH 60–80% yang dijual kembali ke pasar sekunder dengan *price discount*, dan (ii) *recycling remanufacturing* untuk baterai SOH <60% atau cacat mayor, di mana material katoda di-*hydrometallurgical processed* menjadi precursor baru. JIANG & TANG (2025) membuktikan bahwa keputusan dual-channel ini lebih unggul 23,4% dalam kontribusi margin dibandingkan *single-channel recycling* konvensional, sehingga menjadi blueprint strategis bagi integrator baterai, OEM otomotif, dan operator *second-life*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Baterai Bekas

Model JIANG & TANG (2025) mengadopsi arsitektur **multi-tier CLSC** dengan empat entitas keputusan: (i) **Manufacturer (M)** yang memproduksi baterai baru dan menentukan harga jual $p_m$, tingkat daur ulang $\tau \in [0,1]$, serta jumlah remanufaktur $q_r$; (ii) **Recycler (R)** sebagai *third-party reverse logistics provider* yang menetapkan biaya akuisisi $w_r$ per baterai bekas; (iii) **Echelon Market (E)** sebagai pasar sekunder untuk aplikasi *second-life* (ESS, *low-speed EV*); dan (iv) **Recycling Material Market (RM)** untuk material hasil *urban mining*. Struktur permainan dimodelkan sebagai **Stackelberg-Nash bilevel game** di mana M sebagai *leader* dan R sebagai *follower*.

### 2.2 Fungsi Permintaan

Permintaan baterai baru dimodelkan sebagai fungsi linear dari harga sesuai konvensional literatur CLSC:

$$D_m(p_m) = \alpha - \beta p_m + \gamma \tau \tag{1}$$

di mana $\alpha > 0$ adalah *market potential*, $\beta > 0$ adalah elastisitas harga, dan $\gamma > 0$ merepresentasikan efek *green goodwill* — semakin tinggi tingkat daur ulang $\tau$, semakin besar permintaan karena persepsi konsumen terhadap tanggung jawab lingkungan produsen. Permintaan pasar echelon:

$$D_e(p_e) = \delta - \eta p_e \tag{2}$$

dengan $p_e$ sebagai harga jual baterai *second-life* dan $\delta, \eta > 0$.

### 2.3 Fungsi Profit Manufacturer

$$\Pi_M = (p_m - c_m) D_m(p_m) + (p_e - c_e - w_r) D_e(p_e) + (p_{rm} - c_{rm}) \cdot \theta \cdot \tau \cdot Q_r - C_{inv}(\tau) \tag{3}$$

di mana:
- $c_m$ = biaya produksi baterai baru (Rp/kWh)
- $c_e$ = biaya grading, refurbishing & repackaging baterai second-life
- $w_r$ = biaya transfer dari recycler ke manufacturer
- $p_{rm}$ = harga jual material daur ulang (black mass/precursor)
- $\theta$ = efisiensi yield回收 (recovery rate material)
- $Q_r$ = total baterai yang dikembalikan (return volume)
- $C_{inv}(\tau) = \frac{1}{2} k \tau^2$ = biaya investasi fasilitas回收 quadratic

### 2.4 Fungsi Profit Recycler

$$\Pi_R = (w_r - c_{coll}) \cdot Q_r - c_{sort} \cdot Q_r \cdot \mathbb{I}_{SOH \geq 0.6} - c_{haz} \cdot Q_r \cdot \mathbb{I}_{SOH < 0.6} \tag{4}$$

di mana $c_{coll}$ adalah biaya logistik balik per unit, $c_{sort}$ biaya sortir & grading berdasarkan SOH, dan $c_{haz}$ biaya penanganan *hazardous material* untuk baterai yang harus di-*pyrometallurgical processed*. Fungsi indikator $\mathbb{I}$ memisahkan jalur echelon (SOH ≥ 0.6) dari jalur recycling (SOH < 0.6).

### 2.5 Formulasi Robust Counterpart (Shin, Kim & Jeong, 2024)

Untuk mengatasi ketidakpastian, parameter $\alpha$ dan $\theta$ dimodelkan sebagai *uncertain set* ellipsoidal:

$$\mathcal{U} = \left\{ (\alpha, \theta) : \frac{(\alpha - \bar{\alpha})^2}{\sigma_\alpha^2} + \frac{(\theta - \bar{\theta})^2}{\sigma_\theta^2} \leq \Gamma^2 \right\} \tag{5}$$

dengan $\bar{\alpha}, \bar{\theta}$ sebagai nilai nominal, $\sigma$ deviasi standar, dan $\Gamma$ *budget of uncertainty*. **Robust counterpart** Manufacturer:

$$\max_{p_m, \tau} \min_{(\alpha, \theta) \in \mathcal{U}} \Pi_M \tag{6}$$

Solusi analitis diperoleh melalui **KKT conditions** untuk lower-level (follower) dan transformasi dual norm untuk upper-level, menghasilkan bentuk *closed-form* keputusan optimal yang robust terhadap seluruh skenario dalam $\mathcal{U}$.

### 2.6 Kondisi Keseimbangan Stackelberg

Substitusi backward induction: pada given $(p_m, \tau)$, Recycler memaksimalkan $\Pi_R$ sehingga First-Order Condition menghasilkan:

$$w_r^* = c_{coll} + c_{sort} \cdot \mathbb{I}_{SOH \geq 0.6} + \frac{\partial \Pi_R}{\partial Q_r} \tag{7}$$

Substitusi ke (3) memberikan **reduced profit function** Manufacturer yang selanjutnya dioptimasi melalui:

$$\frac{\partial \Pi_M^{red}}{\partial p_m} = 0 \quad \Rightarrow \quad p_m^* = \frac{\alpha + \gamma \tau + \beta c_m}{2\beta} \tag{8}$$

$$\frac{\partial \Pi_M^{red}}{\partial \tau} = 0 \quad \Rightarrow \quad \tau^* = \frac{(p_{rm}\theta - c_{inv}')}{\gamma(p_m - c_m) + k} \tag{9}$$

Persamaan (8)–(9) menunjukkan trade-off fundamental: *green premium* $\gamma$ menstimulasi permintaan tetapi meningkatkan biaya回收.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi strategi CLSC baterai bekas mengikuti **5-fase SOP** yang diturunkan dari arsitektur JIANG & TANG (2025) dan disesuaikan dengan **IEC 62933-2-1, IEC 63330, dan UN 38.3**:

**Fase 1 — Battery Passport & Traceability.** Setiap baterai yang diproduksi diberi *digital battery passport* berbasis blockchain ISO/IEC 30173 yang mencatat kimia sel, SOH historis, siklus pengisian, dan provenance material. SOP ini wajib sejak EU Battery Regulation 2023/1542 berlaku (Februari 2027).

**Fase 2 — Reverse Logistics Network Design.** Facility location model: hub pengumpulan regional (Tier-1) → pusat grading & sorting (Tier-2) → fasilitas remanufaktur/recycling (Tier-3). Algoritma *p-median capacitated* dengan biaya transportasi:

$$\min_{y_i, z_{ij}} \sum_{j \in J} d_j h_j + \sum_{i \in I} f_i y_i + \sum_{i \in I}\sum_{j \in J} c_{ij} z_{ij}$$

subject to $\sum_i z_{ij} = 1 \;\forall j$, $\sum_j d_j z_{ij} \leq K_i y_i$, $z_{ij} \leq y_i$, $y_i, z_{ij} \in \{0,1\}$.

**Fase 3 — SOH-Based Triage & Grading.** Automated disassembly line dengan AI vision & impedance spectroscopy menentukan SOH per modul. Baterai dengan SOH ∈ [0.6, 0.8] masuk jalur echelon, SOH ∈ [0.4, 0.6) reparasi sel individual, SOH < 0.4 ke jalur *black mass production*.

**Fase 4 — Echelon Repackaging & Remanufacturing.** Standar IEC 63330 mensyaratkan pengujian siklus, uji termal, dan sertifikasi *second-life battery* untuk aplikasi stasioner. Pack dirakit dari modul SOH-matched (variance < 5%) untuk mencegah *cell imbalance*.

**Fase 5 — Recycling Closed-Loop & Carbon Credit Settlement.** Hydrometallurgical processing dengan leaching (H₂SO₄ + H₂O₂) → purification (solvent extraction) → precursor synthesis (co-precipitation). Carbon credit dihitung melalui **ISO 14067** dan **GHG Protocol Scope 3**.

Diagram alir keputusan mengikuti logika: jika margin echelon $(p_e - c_e - w_r) >$ margin recycling $(p_{rm}\theta - w_r)$, maka alokasikan baterai ke jalur echelon; sebaliknya recycle.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Studi Kasus: Operator Fleet EV Jabodetabek)

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Market potential | $\alpha$ | 120.000 | unit/tahun |
| Elastisitas harga | $\beta$ | 800 | unit/(juta Rp) |
| Green goodwill | $\gamma$ | 12.000 | unit |
| Biaya produksi | $c_m$ | 18 | juta Rp/unit |
| Biaya grading | $c_e$ | 4 | juta Rp/unit |
| Biaya koleksi |