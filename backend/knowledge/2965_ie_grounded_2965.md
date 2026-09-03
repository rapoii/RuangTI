# 2965 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain Strategy, Echelon Utilization of Retired Power Batteries, Recycling Remanufacturing, Robust Optimization
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global yang diproyeksikan menembus 145 juta unit pada 2030 oleh International Energy Agency (IEA) menimbulkan tantangan struktural baru pada sistem rantai pasok industri, yaitu pengelolaan *end-of-life* (EoL) baterai lithium-ion. Setiap baterai power dengan kapasitas awal 50–100 kWh yang telah terdegradasi hingga State of Health (SOH) di bawah 80% tidak lagi layak untuk aplikasi otomotif, namun masih memiliki kapasitas residu 60–70% yang signifikan untuk aplikasi stasioner *second-life* (pembangkit listrik cadangan, *storage* energi terbarukan, lampu jalan pintar). JIANG & TANG (2025) dalam studinya di ICLSE 2024 mengemukakan bahwa tanpa strategi closed-loop supply chain (CLSC) yang mengintegrasikan *echelon utilization* dan *recycling remanufacturing*, potensi ekonomi sirkular sebesar USD 95 miliar hingga 2030 akan terbuang sia-sia. Studi ini menjadi krusial karena baterai bekas yang tidak ditangani secara sistematis menimbulkan risiko lingkungan serius: satu baterai EV yang dibongkar secara ilegal melepaskan hingga 1,2 kg lithium, 12 kg nikel, dan 2 kg kobalt yang mencemari tanah dan air tanah.

Konteks operasional di Cina sebagai produsen baterai terbesar dunia (>75% kapasitas global menurut BloombergNEF 2024) menunjukkan disparitas mencolok: tingkat daur ulang formal baterai power hanya mencapai 25% meskipun kapasitas produksi telah jenuh. JIANG & TANG (2025) menekankan urgensi membangun arsitektur CLSC multi-echelon yang tidak hanya mengoptimalkan profitabilitas tetapi juga mereduksi emisi CO₂ sebesar 30–45% per siklus hidup baterai. Sementara itu, Shin et al. (2024) melengkapi kerangka ini dengan menambahkan dimensi *robustness* terhadap ketidakpastian tingkat pengembalian (*return rate*) dan kualitas baterai bekas, yang dalam praktik industri bervariasi antara 15–40% tergantung pada tingkat adopsi konsumen dan kebijakan insentif *take-back*. Kedua paper secara kolektif menegaskan bahwa desain CLSC baterai power bukan sekadar persoalan logistik balik (*reverse logistics*), melainkan masalah rekayasa sistem yang memerlukan formulasi optimasi stokastik, keputusan harga multi-tier, dan alokasi kapasitas antara lini echelon (remanufaktur untuk second-life) dan recycling (recovery material).

Implikasi ekonominya sangat material: menurut laporan BloombergNEF 2024, harga cobalt telah berfluktuasi antara USD 28.000–82.000 per ton dalam tiga tahun terakhir, menjadikan *urban mining* dari baterai bekas semakin kompetitif dibanding penambangan primer yang memerlukan USD 15.000–25.000 per ton biaya ekstraksi. Dengan kata lain, baterai bekas bukan lagi *waste stream* melainkan *secondary resource deposit*. Atas dasar urgensi ganda—ekonomi dan ekologis—Modul 2965 ini menyajikan kerangka komprehensif untuk perancangan, pemodelan, dan implementasi strategi CLSC baterai power bekas pakai.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CLSC Multi-Echelon

Model JIANG & TANG (2025) menyusun CLSC baterai power menjadi tiga entitas keputusan utama: **(i)** Produsen baterai (Battery Manufacturer/BM), **(ii)** Pusat Echelon Utilization (EUC) yang mengelola refurbishment untuk aplikasi second-life, dan **(iii)** Pusat Daur Ulang (Recycling Center/RC) yang melakukan *material recovery*. Aliran produk digambarkan sebagai loop: BM → Pasar EV → Konsumen → Pengumpulan → [Sortir SOH] → {EUC (jika SOH ≥ 70%) atau RC (jika SOH < 70%)} → Material kembali ke BM.

### 2.2 Fungsi Utilitas Baterai dan Threshold SOH

Kapasitas residu baterai setelah masa pakai otomotif dimodelkan dengan persamaan degradasi Arrhenius:

$$C_{\text{res}}(t) = C_0 \cdot e^{-\alpha \sqrt{t} \cdot e^{-E_a/RT}}$$

di mana $C_0$ adalah kapasitas awal (kWh), $\alpha$ adalah koefisien degradasi kalender-siklus, $E_a$ adalah energi aktivasi termal, $R$ adalah konstanta gas universal, dan $T$ adalah temperatur operasi rata-rata (K). Baterai dialokasikan ke EUC jika $C_{\text{res}}/C_0 \geq \theta_{\text{SOH}}$ dengan $\theta_{\text{SOH}} = 0{,}70$.

### 2.3 Model Optimasi Profit Multi-Tier

Mengikuti formulasi JIANG & TANG (2025) yang menggunakan kerangka **Stackelberg game**, BM sebagai *leader* menentukan harga jual baterai baru ($p_n$) dan *buy-back price* ($b$), sedangkan EUC dan RC sebagai *followers* menentukan volume echelon ($q_e$) dan recycling ($q_r$). Fungsi profit BM:

$$\Pi_{\text{BM}}(p_n, b) = (p_n - c_n) D(p_n) + (b - c_c) Q(b) - c_{\text{dis}} \cdot Q(b)$$

dengan $c_n$ adalah biaya produksi baterai baru, $c_c$ adalah biaya koleksi, $c_{\text{dis}}$ adalah biaya pembongkaran, $D(p_n)$ adalah fungsi permintaan primer $D(p_n) = a - \beta p_n$, dan $Q(b)$ adalah volume pengembalian $Q(b) = \gamma + \delta b$.

Fungsi profit EUC (echelon):

$$\Pi_{\text{EUC}}(q_e) = (p_e - c_e) q_e - c_{\text{refurb}} \cdot q_e - \lambda(q_e)$$

di mana $p_e$ adalah harga jual second-life battery, $c_e$ adalah biaya *grading* dan *repackaging*, $c_{\text{refurb}}$ adalah biaya refurbishment per unit, dan $\lambda(q_e)$ adalah *carbon emission penalty* per kebijakan regulasi.

Fungsi profit RC (recycling):

$$\Pi_{\text{RC}}(q_r) = \sum_{m \in \{Li, Co, Ni, Mn\}} (r_m - c_m) \eta_m \cdot q_r \cdot w_m - c_{\text{proc}} \cdot q_r$$

dengan $r_m$ adalah harga jual material recovered, $c_m$ adalah biaya ekstraksi per material, $\eta_m$ adalah efisiensi recovery (umumnya 0,90–0,95 untuk cobalt), $w_m$ adalah fraksi berat material per baterai, dan $c_{\text{proc}}$ adalah biaya proses hidrometalurgi.

### 2.4 Formulasi Robust (Pelengkap Shin et al., 2024)

Untuk mengatasi ketidakpastian return rate dan kualitas, Shin et al. (2024) mengusulkan formulasi *min-max regret*:

$$\min_{x \in X} \max_{u \in U} \left[ f(x, u^0) - f(x, u) \right]$$

di mana $x$ adalah vektor keputusan (lokasi fasilitas, kapasitas, alokasi), $u$ adalah parameter tidak pasti (return quantity, SOH distribution), dan $U$ adalah *uncertainty set* berbentuk box atau ellipsoidal. Robust counterpart dari kendala kapasitas:

$$\sum_{j} a_{ij} x_j \leq b_i - \Gamma_i \hat{b}_i \quad \forall i$$

dengan $\Gamma_i \in [0, |J|]$ adalah *budget of uncertainty* yang merepresentasikan tingkat konservatisme keputusan.

### 2.5 Keseimbangan Material

Kendala konservasi massa mengharuskan seluruh baterai yang dikembalikan dialokasikan:

$$q_e + q_r = Q(b)$$

dengan batasan kapasitas: $q_e \leq K_e$ (kapasitas refurbishment EUC) dan $q_r \leq K_r$ (kapasitas daur ulang RC). Ketidaklinearan dihilangkan dengan linearisasi McCormick envelopes untuk menjamin komputabilitas model dalam solver CPLEX/Gurobi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai power bekas mengikuti *Standard Operating Procedure* yang distandardisasi oleh GB/T 34014-2017 (Cina), IEC 62933-2-1, dan *Best Available Techniques* EU Battery Directive 2023/1542. Berikut arsitektur SOP 7-tahap:

**Tahap 1 — Collection Network Design.** Identifikasi titik koleksi berdasarkan densitas EV (target: 1 collection point per 5.000 unit EV dalam radius 50 km). Gunakan model *maximal covering location* dengan fungsi tujuan:

$$\max \sum_{i \in I} w_i y_i \quad \text{s.t.} \sum_{j \in N_i} x_j \geq y_i, \quad \sum_{j} x_j = P$$

dengan $y_i \in \{0,1\}$ apakah demand node $i$ terlayani, $x_j \in \{0,1\}$ fasilitas di kandidat $j$, dan $P$ adalah jumlah fasilitas yang dibuka.

**Tahap 2 — Pre-Screening & Sorting.** Saat kedatangan, baterai menjalani pengujian SOH menggunakan *capacity tester* (Arbin BT-2000 atau Neware BTS-9000). Prosedur: (a) discharge pada 0,5C hingga cutoff 2,5V, (b) charge pada 0,3C hingga 4,2V, (c) hitung $C_{\text{res}}/C_0 \times 100\%$. Jika ≥ 70% → keranjang EUC; jika < 70% → keranjang RC.

**Tahap 3 — Dismantling Operations.** Bongkar modul baterai di *dry room* (dew point < -40°C) untuk mencegah pembakaran elektrolit. SOP mengikuti GB/T 33059: gunakan *torque-controlled tools*, identifikasi modul dengan RFID tagging untuk traceability.

**Tahap 4 — Echelon Refurbishment (jika SOH ≥ 70%).** Proses: (i) cell balancing dengan *active equalizer*, (ii) penggantian cell dengan degradasi > 20% dari rata-rata pack, (iii) re-assembly pack, (iv) *re-qualification test* (cycle test minimal 50 siklus pada 1C). Output: baterai second-life bersertifikat dengan garansi 5 tahun.

**Tahap 5 — Hydrometallurgical Recycling (jika SOH < 70%).** Proses: (i) *pretreatment* (mechanical shredding, magnetic separation), (ii) *leaching* dengan H₂SO₄ + H₂O₂ pada 80°C, (iii) *solvent extraction* untuk memisahkan Co/Ni/Mn/Li, (iv) *precipitation* sebagai Ni/Co hydroxide dan Li₂CO₃.

**Tahap 6 — Quality Assurance & Certification.** Setiap output harus memenuhi IEC 62619 (untuk second-life storage) atau ISO 14021 (untuk recycled content declaration). Dokumentasi digital menggunakan *battery passport* sesuai EU regulation 2023/1542.

**Tahap 7 — Reverse Distribution ke BM.** Material recovered dikirim kembali ke lini produksi baterai baru (*closed loop*), dengan target recycled content ≥ 16% untuk Co, 6% untuk Ni, dan 6% untuk Li pada 2031 sesuai EU Battery Regulation.

**Diagram Alir Logika Keputusan:**

```
[Collection Point]
        ↓
[SOH Test Capacity]
        ↓
   ┌────┴────┐
SOH ≥ 70%   SOH < 70%
   ↓            ↓
[EUC Sort]   [RC Sort]
   ↓            ↓
[Refurb]    [Shred]
   ↓            ↓
[Test 50x]  [Leach]
   ↓            ↓
[2nd-life]  [Extract]
   ↓            ↓
[Certify]   [Precpitate]
   ↓            ↓
   └──→ [BM Material Input] ←┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Industri (Skenario Realistis)

Ambil studi kasus BM dengan kapasitas produksi 50.000 unit baterai/tahun (kapasitas.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
