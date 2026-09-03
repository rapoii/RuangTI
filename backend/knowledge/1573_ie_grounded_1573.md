# 1573 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Bekas serta Sistem Manajemen Pengembalian pada Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju elektrifikasi kendaraan dan dekarbonisasi sistem energi telah menciptakan tantangan logistik terberat abad ke-21: bagaimana mengelola **end-of-life (EoL)** baterai lithium-ion (LIB) dalam volume masif, dengan tetap menjaga kelayakan ekonomi, keamanan operasional, serta kepatuhan lingkungan. JIANG Lin dan TANG Lidan (2025) dalam makalahnya yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* — sebagaimana disitasi via DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068) — secara eksplisit mengangkat persoalan strategis ini melalui formulasi *closed-loop supply chain* (CLSC) yang mengintegrasikan dua mekanisme pemulihan secara simultan: **echelon utilization** (pemanfaatan bertingkat, di mana baterai yang telah turun kapasitasnya di bawah ambang kendaraan tetap dipakai pada aplikasi stasioner berdaya lebih rendah seperti *stationary energy storage*, lampu jalan surya, atau *backup power telekomunikasi*) dan **recycling remanufacturing** (daur ulang yang memulihkan material katoda/anoda bernilai tinggi untuk dikembalikan ke lini produksi sel baru). Pendekatan ini menjawab kenyataan bahwa baterai EV tidak boleh dipaksa langsung masuk jalur *recycling* (pyrometalurgi/hidrometalurgi) karena masih memiliki *second-life value* ekonomi dan lingkungan yang signifikan.

Urgensi persoalan ini bersifat multidimensi. Dari sisi **volume**, proyeksi BloombergNEF dan IEA menunjukkan akumulasi baterai EoL akan menembus angka 1,3–1,4 juta ton per tahun pada 2030, dengan kapasitas retried terbesar berasal dari pasar Cina, UE, dan AS. Dari sisi **biaya eksternal**, pembuangan atau incinerasi tanpa proses mengandung logam berat (kobalt, nikel, mangan) menimbulkan *environmental externality* yang dalam literatur *life cycle assessment* (LCA) diestimasi bernilai USD 4,2–8,7/kg baterai. Dari sisi **regulasi**, kebijakan *Extended Producer Responsibility* (EPR) di Uni Eropa (Directive 2006/66/EC yang diamandemen menjadi *EU Battery Regulation 2023/1542*) mewajibkan produsen untuk bertanggung jawab atas pengumpulan dan *treatment* baterai di akhir siklus hidupnya, dengan target *collection rate* minimum 73% pada 2030. JIANG & TANG (2025) memberikan kerangka keputusan kuantitatif yang menjawab regulasi ini dengan menyeimbangkan *trade-off* antara investasi fasilitas echelon dan kapasitas *recycling remanufacturing*.

Sementara itu, Youngchul Shin, Gwang Kim, dan Yoonjea Jeong (2024) dalam artikel di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) memberikan dimensi komplementer berupa **robust closed-loop supply chain model dengan return management system**. Perspektif mereka menyoroti bahwa perencanaan CLSC untuk baterai — maupun untuk produk kompleks lain — selalu menghadapi ketidakpastian struktural: *return rate* baterai tidak deterministik (dipengaruhi suhu operasi, pola pengisian, dan degradasi kimia), permintaan pasar *second-life* fluktuatif, harga material daur ulang sangat volatil (terutama kobalt dan litium), serta kapasitas fasilitas daur ulang memiliki batasan modal yang rigid. Pendekatan *robust optimization* yang mereka usulkan menggunakan *polyhedral uncertainty set* untuk melindungi keputusan lokasi dan kapasitas fasilitas terhadap skenario terburuk (*worst-case realization*), sehingga keputusan tidak mudah失效 oleh realisasi parameter yang menyimpang dari ekspektasi rata-rata. Integrasi dua perspektif ini — optimasi echelon-recycling ala JIANG & TANG dan robust return management ala Shin, Kim & Jeong — menjadi fondasi modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Arsitektur Jaringan CLSC untuk Baterai Bekas

JIANG & TANG (2025) memodelkan jaringan CLSC baterai sebagai graf berarah $\mathcal{G} = (\mathcal{N}, \mathcal{A})$ dengan himpunan node $\mathcal{N} = \mathcal{S} \cup \mathcal{C} \cup \mathcal{F} \cup \mathcal{R} \cup \mathcal{M}$ yang berturut-turut merepresentasikan *collection centers* (titik kumpul), *echelon utilization facilities* (fasilitas pemanfaatan bertingkat), *recycling plants* (pabrik daur ulang), *remanufacturing lines* (lini remanufaktur), dan *manufacturers* (produsen sel baru). Asosiasi edge $\mathcal{A}$ menunjukkan kemungkinan aliran material antara node. Keputusan yang diambil adalah: (i) lokasi dan kapasitas fasilitas, (ii) alokasi aliran baterai dari *collection* ke jalur echelon atau recycling, (iii) timing investasi.

### 2.2. Formulasi Mixed-Integer Linear Programming (MILP) Dasar

Fungsi tujuan meminimalkan total biaya logistik + investasi + operasional + dampak lingkungan:

$$\min Z = \sum_{i \in \mathcal{F}} f_i \, y_i + \sum_{(i,j)\in \mathcal{A}} c_{ij} \, x_{ij} + \sum_{i \in \mathcal{R}} r_i \, q_i + \sum_{i \in \mathcal{M}} p_i \, m_i + \alpha \sum_{i \in \mathcal{S}} E_i$$

dengan variabel keputusan:
- $y_i \in \{0,1\}$ : aktivasi fasilitas pada lokasi $i$
- $x_{ij} \geq 0$ : aliran baterai dari node $i$ ke node $j$ (ton/tahun)
- $q_i \geq 0$ : throughput daur ulang di fasilitas $i$
- $m_i \geq 0$ : throughput remanufaktur di fasilitas $i$
- $E_i \geq 0$ : emisiensi CO$_2$ ekuivalen pada collection center $i$

Parameter kunci: $f_i$ (fixed cost), $c_{ij}$ (biaya transportasi per ton), $r_i$ (biaya variabel daur ulang), $p_i$ (biaya variabel remanufaktur), $\alpha$ (faktor monetisasi emisi).

### 2.3. Konstrain Kapasitas dan Neraca Massa

Kapasitas fasilitas echelon dan recycling:

$$\sum_{j:(i,j)\in \mathcal{A}} x_{ij} \leq K_i^{\text{ech}} \, y_i \quad \forall i \in \mathcal{F}$$
$$\sum_{j:(i,j)\in \mathcal{A}} x_{ij} \leq K_i^{\text{rec}} \, y_i \quad \forall i \in \mathcal{R}$$

Neraca massa di collection center:

$$\sum_{j \in \mathcal{C}} x_{ij} = D_i \quad \forall i \in \mathcal{S}$$

dengan $D_i$ adalah *supply* baterai EoL di collection center $i$ (fungsi waktu degradasi armada EV regional). Untuk memenuhi kendala permintaan *second-life storage*:

$$\sum_{i \in \mathcal{F}} x_{ij} \geq L_j^{\text{ech}} \quad \forall j \in \mathcal{M}_{\text{2nd}}$$

### 2.4. Fungsi Degradasi dan Alokasi Echelon vs Recycling

JIANG & TANG (2025) memperkenalkan parameter **State of Health (SOH)** $\theta \in [0,1]$ sebagai variabel kontinyu. Baterai di-*route*-kan ke echelon hanya jika $\theta \geq \theta_{\min}^{\text{ech}}$ (umumnya 0,70–0,80), dan ke recycling jika $\theta < \theta_{\min}^{\text{ech}}$. Probabilitas transisi ini mengikuti distribusi probabilitas degradasi baterai yang dimodelkan dengan fungsi Arrhenius-like:

$$\theta(t) = 1 - \beta \cdot \sqrt{t} - \gamma \cdot N_{\text{cycle}} + \epsilon$$

dengan $\beta, \gamma$ adalah parameter kalibrasi empiris dan $\epsilon$ adalah *stochastic noise*. Untuk kuantifikasi aliran, JIANG & TANG mendefinisikan **fungsi alokasi**:

$$\delta_i = \Pr(\theta_i \geq \theta_{\min}^{\text{ech}}) = \int_{\theta_{\min}^{\text{ech}}}^{1} f_{\theta}(\theta) \, d\theta$$

sehingga jumlah baterai teralokasi ke echelon dari collection center $i$ adalah $\delta_i \cdot D_i$, dan ke recycling adalah $(1-\delta_i) \cdot D_i$.

### 2.5. Formulasi Robust Counterpart (Shin, Kim & Jeong, 2024)

Untuk mengakomodasi ketidakpastian *return rate* $\tilde{D}_i$ yang berfluktuasi dalam *uncertainty set* $\mathcal{U}$ berbentuk *box*:

$$\mathcal{U} = \left\{ \tilde{D}_i : \tilde{D}_i = \bar{D}_i + \hat{D}_i \zeta_i, \; \zeta_i \in [-1,1], \; \sum_{i} |\zeta_i| \leq \Gamma \right\}$$

dengan $\Gamma$ adalah *budget of uncertainty* (parameter konservativeness). Robust counterpart dari kendala neraca massa menjadi:

$$\sum_{j \in \mathcal{C}} x_{ij} \geq \bar{D}_i + \hat{D}_i \quad \text{(worst case)}$$

Dalam formulasi *compact polyhedral*:

$$\sum_{j \in \mathcal{C}} x_{ij} \geq \bar{D}_i + \sum_{i} \hat{D}_i \pi_i, \quad \pi_i \in [0,1], \; \sum_i \pi_i \leq \Gamma$$

### 2.6. Fungsi Utilitas Multi-Obyektif

Untuk menyeimbangkan dimensi ekonomi dan lingkungan, modul ini menggunakan fungsi utilitas agregat:

$$U = w_1 \frac{Z_{\text{ref}} - Z}{Z_{\text{ref}} - Z_{\text{best}}} + w_2 \frac{E_{\text{best}} - E}{E_{\text{best}} - E_{\text{worst}}}$$

dengan $w_1 + w_2 = 1$, $E$ total emisi CO$_2$, dan subscript *ref/best/worst* merujuk pada skenario referensi, terbaik, dan terburuk dari *Pareto front*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri CLSC baterai mengikuti SOP berlapis yang dikembangkan oleh JIANG & TANG (2025) untuk konteks rantai pasok baterai dan dapat digeneralisasi mengikuti prinsip Shin, Kim & Jeong (2024) untuk konteks robust return management:

### Langkah 1 — Karakterisasi Pasokan Baterai EoL
1.1. Bangun basis data региональный armada EV berdasarkan registrasi kendaraan dan usia baterai rata-rata.
1.2. Estimasi $D_i(t)$ menggunakan model degradasi terkalibrasi (uji laboratorium pada sampel baterai退役).
1.3. Hitung $\delta_i$ sebagai fungsi waktu (5, 10, 15 tahun setelah commissioning armada).
1.4. Validasi silang dengan data *reverse logistics* historis dan laporan EPR.

### Langkah 2 — Penentuan Struktur Jaringan Kandidat
2.1. Identifikasi kandidat *collection center* dari jaringan bengkel resmi, dealer, dan *recycling aggregator*.
2.2. Identifikasi kandidat echelon facility dari *grid-scale storage operator* dan integrator *microgrid*.
2.3. Identifikasi kandidat *recycling plant* berdasarkan lokasi *hydrometallurgical* dan *pyrometallurgical* existing.
2.4. Bangun matriks jarak $d_{ij}$ menggunakan GIS untuk kalkulasi $c_{ij}$.

### Langkah 3 — Optimasi MILP-Robust