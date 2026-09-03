# 2016 — Perancangan Rantai Pasok Tertutup Berkelanjutan dengan Efisiensi Energi: Formulasi MILP, Relaksasi Lagrangian, dan Heuristik Metaheuristik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Sustainable closed-loop supply chain with energy efficiency: Lagrangian relaxation, reformulations and heuristics
**Jurnal & Sitasi Utama:** Hamed Soleimani, Prem Chhetri, Amir M. Fathollahi‐Fard (2022). *Annals of Operations Research*. DOI: [https://doi.org/10.1007/s10479-022-04661-z](https://doi.org/10.1007/s10479-022-04661-z)
**Sitasi Pendukung:** Maria Meneses, Daniel Santos, Ana Paula Barbosa‐Póvoa (2022). *Modelling the Blood Supply Chain*, *European Journal of Operational Research*. DOI: [https://doi.org/10.1016/j.ejor.2022.06.005](https://doi.org/10.1016/j.ejor.2022.06.005)

---

## 1. Pendahuluan dan Konteks Industri

Krisis keberlanjutan global telah mengubah secara fundamental paradigma perancangan rantai pasok konvensional menjadi *sustainable closed-loop supply chain* (SCLSC) yang memperhatikan dimensi triple bottom line — ekonomi, lingkungan, dan sosial — secara simultan. Soleimani, Chhetri, dan Fathollahi-Fard (2022, DOI: 10.1007/s10479-022-04661-z) menekankan bahwa konsumsi energi merupakan variabel keputusan yang selama ini terabaikan dalam literatur SCLSC klasik, padahal emisi CO₂ dari aktivitas logistik dan manufaktur menyumbang proporsi signifikan terhadap *carbon footprint* korporasi global. Dalam paper tersebut, penulis mengembangkan model jaringan tertutup yang melibatkan *suppliers*, *manufacturers*, *distribution centers*, *customer zones*, dan *disposal centers*, di mana *distribution centers* berfungsi ganda sebagai *warehouse* sekaligus *collection centers* untuk produk *end-of-life* (EOL). 

Urgensi operasional dari penelitian ini muncul dari tiga tekanan industri konkret. Pertama, regulasi emisi karbon seperti *European Union Emissions Trading System* (EU ETS) dan *Carbon Border Adjustment Mechanism* (CBAM) yang berlaku efektif sejak 2023 memaksa perusahaan multinasional memasukkan biaya energi ke dalam fungsi tujuan optimasi. Kedua, meningkatnya *consumer awareness* terhadap produk remanufaktur yang menciptakan pasar sekunder bernilai tambah tinggi, sehingga keputusan alokasi produk kembali (*remanufacturing*, *recycling*, *disposal*) menjadi keputusan strategis bernilai jutaan dolar. Ketiga, tekanan sosial berupa penciptaan lapangan kerja (*number of created job opportunities*) yang merupakan dimensi Sustainable Development Goal (SDG) ke-8. Konteks ini paralel dengan riset Meneses, Santos, dan Barbosa-Póvoa (2022, DOI: 10.1016/j.ejor.2022.06.005) yang menunjukkan bahwa pada rantai pasok darah (blood supply chain), perencanaan keputusan serupa — *collection*, *processing*, *storage*, *distribution*, *usage* — menghadapi tantangan pengoptimalan multi-objektif dengan kendala kualitas dan kadaluwarsa yang ketat. Kedua paper tersebut memperkuat argumen bahwa *network design* rantai pasok modern tidak lagi dapat dipisahkan dari dimensi keberlanjutan dan efisiensi sumber daya.

Temuan kunci paper Soleimani dkk. (2022) menunjukkan bahwa model MILP non-linier untuk SCLSC energy-efficient dapat direlaksasi menggunakan teknik *Lagrangian relaxation* (LR) untuk memperoleh *lower bound* yang ketat, selanjutnya diselesaikan dengan dua *reformulation* berbeda: (i) *Single-objective weighted sum* yang menggabungkan ketiga tujuan menjadi fungsi tunggal berbobot, dan (ii) *Multi-objective ε-constraint* untuk membangkitkan *Pareto front*. Karena kompleksitas NP-hard, penulis mengusulkan algoritma metaheuristik *Variable Neighborhood Search* (VNS) dan *Simulated Annealing* (SA) sebagai pendekatan solusi layak (*feasible solution*) untuk instances berukuran besar. Validasi dilakukan pada instances hingga 200 node dengan peningkatan efisiensi energi rata-rata 18,7% dibandingkan dengan model tanpa pertimbangan energi.

---

## 2. Landasan Teori & Formulasi Matematis

Model SCLSC energi-efisien yang dikembangkan oleh Soleimani, Chhetri, dan Fathollahi-Fard (2022, DOI: 10.1007/s10479-022-04661-z) dapat diformulasikan secara matematis sebagai model pemrograman matematika campuran bilangan bulat non-linier (*Mixed-Integer Nonlinear Programming*, MINLP). Berikut struktur formulasi intinya.

### 2.1 Notasi Himpunan dan Parameter

Himpunan dasar yang digunakan adalah:
- $I$: himpunan *suppliers*, $|I| = i$
- $J$: himpunan *manufacturers*, $|J| = j$
- $K$: himpunan *distribution centers*, $|K| = k$
- $L$: himpunan *customer zones*, $|L| = l$
- $M$: himpunan *disposal centers*, $|M| = m$
- $R$: himpunan opsi EOL, $R = \{$*remanufacturing*, *recycling*, *disposal*$\}$, $|R| = r$

Parameter kunci mencakup:
- $c_{ijk}^{p}$: biaya transportasi produk $p$ dari $i$ ke $j$ melalui $k$
- $f_j, f_k, f_m$: biaya tetap pembukaan fasilitas
- $d_l^{p}$: permintaan produk $p$ di zona pelanggan $l$
- $\eta_{jr}^{e}$: efisiensi energi proses EOL $r$ di manufacturer $j$
- $EC_j$: konsumsi energi per unit proses di $j$
- $CO_2^{jk}$: emisi CO₂ per unit运输

### 2.2 Variabel Keputusan

$$X_{ijk}^{p} \in \mathbb{R}_{\geq 0}, \quad Y_j \in \{0,1\}, \quad Z_k \in \{0,1\}, \quad W_{lm} \in \{0,1\}$$

di mana $X_{ijk}^{p}$ adalah aliran produk $p$ dari supplier $i$ ke manufacturer $j$ melalui DC $k$; $Y_j, Z_k, W_{lm}$ adalah variabel biner pembukaan fasilitas.

### 2.3 Fungsi Tujuan

Model的三 tujuan yang dioptimasi secara simultan adalah:

**Objektif 1 — Total Profit (maksimisasi):**

$$\max Z_1 = \sum_{p} \sum_{i,j,k,l} (P^p - c_{ijkl}^{p}) \cdot X_{ijkl}^{p} - \sum_{j} f_j Y_j - \sum_{k} f_k Z_k - \sum_{m} f_m W_{lm} - C_{energy}$$

**Objektif 2 — Konsumsi Energi (minimisasi):**

$$\min Z_2 = \sum_{j,k} EC_j \cdot \sum_{i,p} X_{ijk}^{p} + \sum_{k,l} ET_{kl} \cdot X_{kl}^{p}$$

**Objektif 3 — Penciptaan Lapangan Kerja (maksimisasi):**

$$\max Z_3 = \sum_{j} \alpha_j Y_j + \sum_{k} \beta_k Z_k + \sum_{m} \gamma_m W_{lm}$$

di mana $\alpha_j, \beta_k, \gamma_m$ adalah koefisien penciptaan lapangan kerja per fasilitas.

### 2.4 Kendala Utama

Kendala keseimbangan aliran di setiap node:

$$\sum_{i} X_{ijk}^{p} = \sum_{l} X_{jkl}^{p} + \sum_{r} X_{jk}^{p,r} \quad \forall j,k,p$$

Kendala kapasitas:

$$\sum_{p} \sum_{i} X_{ijk}^{p} \leq Cap_j \cdot Y_j \quad \forall j$$

$$\sum_{p} \sum_{l} X_{jkl}^{p} \leq Cap_k \cdot Z_k \quad \forall k$$

Kendala permintaan:

$$\sum_{j,k} X_{jkl}^{p} \geq d_l^{p} \quad \forall l,p$$

### 2.5 Relaksasi Lagrangian

Untuk menangani kompleksitas MINLP, penulis menerapkan LR terhadap kendala kapasitas yang paling *binding*. Dual function didefinisikan sebagai:

$$\mathcal{L}(\lambda, \mu) = \min_{X,Y,Z \in \mathcal{F}} \left[ Z_1 + \sum_{j} \lambda_j \left( \sum_{p,i,k} X_{ijk}^{p} - Cap_j Y_j \right) + \sum_{k} \mu_k \left( \sum_{p,j,l} X_{jkl}^{p} - Cap_k Z_k \right) \right]$$

dengan $\lambda_j, \mu_k \geq 0$ adalah multiplikator Lagrange. Subgradien optimization digunakan untuk mengupdate multiplikator:

$$\lambda_j^{(t+1)} = \max\left\{0, \lambda_j^{(t)} + \theta^{(t)} \left( \sum_{p,i,k} X_{ijk}^{p*} - Cap_j Y_j^* \right)\right\}$$

di mana $\theta^{(t)}$ adalah *step size* yang menurun secara harmonik.

### 2.6 Formulasi ε-Constraint

Untuk membangkitkan *Pareto front*, salah satu objektif (misal $Z_1$) dijadikan fungsi utama, sementara yang lain menjadi kendala:

$$\max Z_1 \quad \text{s.t.} \quad Z_2 \leq \varepsilon_2, \quad Z_3 \geq \varepsilon_3, \quad (X,Y,Z) \in \mathcal{F}$$

Variasi $\varepsilon_2, \varepsilon_3$ secara diskret menghasilkan *Pareto-optimal set*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi SCLSC energi-efisien di lingkungan industri mengikuti protokol rekayasa sistem yang terstruktur. Berdasarkan arsitektur solusi yang dikembangkan Soleimani dkk. (2022), SOP dapat dipetakan dalam tujuh tahap utama:

**Tahap 1 — Karakterisasi Jaringan.** Tahap ini menghimpun data primer berupa lokasi geografis fasilitas, kapasitas produksi, permintaan spasial per zona pelanggan, dan *bill of materials* (BOM) produk. Data diperoleh melalui *Geographic Information System* (GIS), ERP (*Enterprise Resource Planning*), dan wawancara dengan *supply chain manager*. Standar referensi yang digunakan mengikuti ISO 28000:2007 untuk *supply chain security management* dan ISO 14064 untuk inventarisasi emisi GRK.

**Tahap 2 — Estimasi Parameter Energi.** Konsumsi energi $EC_j$ diestimasi menggunakan *process-based life cycle assessment* (LCA) sesuai ISO 14040/14044. Sumber emisi diklasifikasikan menjadi *Scope 1* (emisi langsung dari pembakaran bahan bakar), *Scope 2* (emisi tidak langsung dari pembelian listrik), dan *Scope 3* (emisi tidak langsung dari aktivitas hulu-hilir). Faktor emisi mengacu pada *IPCC Emission Factor Database* (EFDB).

**Tahap 3 — Formulasi Model MILP/MINLP.** Model matematis disusun dalam bahasa *algebraic modeling* seperti GAMS, AMPL, atau Pyomo. Pemilihan solver tergantung skala: untuk instances kecil-menengah digunakan CPLEX atau Gurobi; untuk instances besar digunakan pendekatan heuristik.

**Tahap 4 — Penerapan Relaksasi Lagrangian.** Subproblem LR diselesaikan secara *decomposition* (Lagrangian分解), di mana subproblem *facility location* dan *flow assignment* diselesaikan terpisah. Penulis menyarankan *subgradient optimization* dengan *step size rule* $\theta^{(t)} = \frac{\pi \cdot (UB - LB^{(t)})}{\|g^{(t)}\|^2}$, di mana $\pi \in (0,2]$ dan $g^{(t)}$ adalah vektor subgradien.

**Tahap 5 — Penyelesaian Metaheuristik.** Algoritma VNS dan SA digunakan untuk menjangkau solusi *near-optimal* pada instances dengan $>100$ node. VNS menggunakan tiga *neighborhood structure*: (i) *swap* fasilitas, (ii) *relocate* customer zone, dan (iii) *change* EOL option. SA menerima solusi lebih buruk dengan probabilitas $P = e^{-\Delta/T}$ di mana $T$ adalah *cooling schedule* geometric.

**Tahap 6 — Validasi dan Verifikasi.** Solusi diverifikasi melalui *back-testing* menggunakan data historis 12 bulan, dan *stress-testing* dengan skenario perubahan permintaan ±20%, kenaikan harga energi 30%, dan disrupsi fasilitas. Validasi silang dilakukan menggunakan simulasi Monte Carlo dengan 1000 *replications*.

**Tahap 7 — Implementasi dan Monitoring.** Solusi di-*deploy* ke sistem *decision support system* (DSS) terintegrasi dengan modul SAP IBP atau Oracle SCM. KPI dipantau secara *real-time* meliputi *energy intensity* (kWh/unit), *carbon footprint* (kgCO₂e/unit), dan *job creation index*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk menunjukkan aplikasi konkret, kami mereplikasi *small-scale instance* dari paper Soleimani dkk. (2022, DOI: 10.1007/s10479-022-04661-z) sebagai berikut.

**Konfigurasi Instance:**
- $|I| = 3$ suppliers, $|J| = 2$ manufacturers, $|K| = 2$ distribution centers, $|L| = 4$ customer zones, $|M| = 1$ disposal center
- 2 jenis produk ($p=1,2$), 3 opsi EOL ($r=1,2,3$)
- Permintaan: $d_l^1 = \{800, 600, 900, 700\}$ unit; $d_l^2 = \{500, 400, 700, 500\}$ unit

**Parameter Biaya dan Energi:**
- Biaya tetap: $f_j = 50{,}000$ unit, $f_k = 30{,}000$ unit, $f_m = 20{,}000$ unit
- Biaya transportasi rata-rata: $c_{ijkl}^p = 5$ unit/km
- Konsumsi energi: $EC_j = 2.5$ kWh/unit, $ET_{kl} = 1.8$ kWh/unit
- Emisi: $CO_2^{jk} = 0.45$ kgCO₂/kWh
- Harga jual: $P^1 = 50$ unit, $P^2 = 70$ unit
- Kapasitas: $Cap_j = 2000$ unit, $Cap_k = 3000$ unit
- Koefisien lapangan kerja: $\alpha_j = 25$, $\$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
