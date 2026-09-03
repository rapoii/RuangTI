# 2709 — Strategi Closed-Loop Supply Chain untuk Utilisasi Bertingkat (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Power Bekas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain (CLSC) Baterai Power Bekas dengan Pemanfaatan Bertingkat dan Daur Ulang Remanufaktur
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. **14th International Conference on Logistics and Systems Engineering (ICLSE 2024)**. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global — yang diproyeksikan mencapai 145 juta unit terjual secara kumulatif hingga 2030 menurut BloombergNEF — telah menciptakan "bom waktu" logistik di hilir siklus hidup baterai lithium-ion (LIB). Jiang & Tang (2025) dalam makalah yang diterbitkan di **ICLSE 2024** (DOI: 10.52202/078960-0068) menekankan urgensi strategis penanganan baterai *retired* (pensiun) yang volumenya diproyeksi menembus 1,2 juta ton per tahun secara global pada dekade ini. Baterai dengan *State of Health* (SOH) 70–80% masih memiliki kapasitas residu signifikan yang secara ekonomis tidak optimal jika langsung dilebur, sehingga memunculkan peluang **echelon utilization** (pemanfaatan bertingkat) — misalnya untuk *stationary energy storage* (ESS), *base station* telekomunikasi, atau *backup power* industri.

Permasalahan ini bukan sekadar teknis, melainkan bersifat *multi-stakeholder*: OEM (Original Equipment Manufacturer), *third-party回收商* (recycler), integrator ESS, regulator, dan konsumen akhir semuanya memiliki struktur biaya, risiko, dan insentif yang berbeda. Kompleksitas ini bertambah ketika mempertimbangkan **uncertainty** terhadap harga logam kritis (Li, Co, Ni), laju pengembalian baterai, dan degradasi kapasitas yang stokastik. Shin, Kim, & Jeong (2024) dalam DOI: 10.2139/ssrn.4934197 menyoroti bahwa pendekatan *deterministic* konvensional gagal menangkap ketidakpastian ini, sehingga diperlukan formulasi *robust optimization* untuk menjamin kelayakan keputusan di seluruh skenario *worst-case*.

Dari perspektif regulasi, *European Union Battery Regulation 2023/1542* dan kebijakan *Extended Producer Responsibility* (EPR) di Tiongkok mengharuskan OEM mencapai tingkat daur ulang material ≥ 65% pada 2025 dan ≥ 70% pada 2030. Kegagalan merancang CLSC yang efisien akan berdampak langsung pada *compliance cost*, *carbon footprint*, dan pangsa pasar. JIANG & TANG (2025) menunjukkan bahwa keputusan kunci —apakah baterai bekas diproses melalui jalur **echelon-first** atau **direct-recycle** — sangat menentukan profitabilitas total rantai pasok, dengan selisih margin yang dapat mencapai 18–27% tergantung konfigurasi jaringan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Kapasitas Baterai

Kapasitas baterai lithium-ion menurun seiring waktu mengikuti model degradasi nonlinier yang diparameterisasi oleh *Arrhenius-like* law. JIANG & TANG (2025) mengadopsi formulasi berikut:

$$Q_i(t) = Q_0 \cdot e^{-\beta_i t} + \epsilon_i$$

di mana $Q_i(t)$ adalah kapasitas residual baterai tipe $i$ pada waktu $t$ (dalam siklus pengisian), $Q_0$ adalah kapasitas awal, $\beta_i$ adalah koefisien degradasi spesifik kimia (LFP: $\beta \approx 1{,}2 \times 10^{-4}$, NMC: $\beta \approx 1{,}8 \times 10^{-4}$), dan $\epsilon_i \sim \mathcal{N}(0, \sigma_i^2)$ adalah *noise* stokastik. **Ambang batas keputusan** didefinisikan sebagai:

$$\text{SOH}(t) = \frac{Q(t)}{Q_0} \Rightarrow \begin{cases} \geq 0{,}80 & \Rightarrow \text{otomotif (continue use)} \\ \in [0{,}60; 0{,}80) & \Rightarrow \text{echelon utilization} \\ < 0{,}60 & \Rightarrow \text{direct recycling} \end{cases}$$

### 2.2 Model Mixed-Integer Programming untuk CLSC Multi-Echelon

Formulasi sentral adalah **bi-level optimization** dengan *Stackelberg game structure*: OEM sebagai *leader* menentukan *buy-back price* $p_r$, sementara *echelon operator* dan *recycler* sebagai *follower* menentukan volume alokasi. Fungsi tujuan OEM (disingkat dari JIANG & TANG, 2025):

$$\max_{p_r, x_{ij}} \Pi_{\text{OEM}} = \sum_{j \in J} (p_s - c_s) \cdot x_{0j} + p_r \sum_{i \in I} y_i - C_{\text{pen}} \sum_{i} (B_i - \sum_{i} y_i)^+$$

di mana:
- $x_{0j}$ = volume baterai baru ke pasar $j$
- $y_i$ = volume baterai retired yang dikembalikan
- $p_s, p_r$ = harga jual baru dan *buy-back*
- $c_s$ = biaya produksi
- $C_{\text{pen}}$ = penalti EPR per unit baterai yang tidak dikoleksi
- $B_i$ = target koleksi regional

### 2.3 Fungsi Tujuan Echelon Operator

Operator ESS menentukan alokasi optimal antara baterai echelon dan kapasitas baru:

$$\max_{z_k, w_k} \Pi_{\text{EO}} = \sum_{k} (r_k - c_e) \cdot z_k - \sum_{k} (p_e - c_e) \cdot w_k - C_{\text{log}} \sum_k d_k(z_k + w_k)$$

dengan $z_k$ = jumlah baterai echelon yang digunakan di aplikasi $k$ (misalnya ESS grid), $w_k$ = kapasitas alternatif (baterai baru atau Li-ion segar), $r_k$ = revenue layanan storage, $c_e$ = *Levelized Cost of Storage* (LCOS), dan $C_{\text{log}}$ = biaya logistik per unit jarak $d_k$.

### 2.4 Robust Optimization untuk Mengatasi Ketidakpastian

Mengikuti kerangka Bertsimas & Sim (2004) yang diadopsi Shin et al. (2024, DOI: 10.2139/ssrn.4934197), ketidakpastian harga logam dimodelkan dengan *budget uncertainty set* $\mathcal{U}$:

$$\mathcal{U} = \left\{ \tilde{\mathbf{c}} : \tilde{c}_m = \bar{c}_m + \hat{c}_m \zeta_m, \; \sum_m |\zeta_m| \leq \Gamma, \; |\zeta_m| \leq 1 \right\}$$

Formulasi *robust counterpart* meminimalkan biaya total dalam *worst-case*:

$$\min_{\mathbf{x}, \mathbf{y}} \max_{\tilde{\mathbf{c}} \in \mathcal{U}} \; \mathbf{c}^{\top}\mathbf{x} + \tilde{\mathbf{c}}^{\top}\mathbf{y}$$

dengan parameter keketatan *robustness* $\Gamma \in [0, |\mathcal{M}|]$ yang mengontrol trade-off antara konservatisme dan optimalitas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & Tang (2025) mengusulkan **SOP 6-tahap** untuk implementasi strategi CLSC baterai bekas:

### Tahap 1 — Battery Traceability & Data Acquisition
Pemasangan **Battery Management System (BMS)** dengan *tamper-proof* telematics yang mencatat siklus, suhu, dan DOD (*Depth of Discharge*). Standar referensi: **ISO/IEC 21434:2021** untuk keamanan siber dan **UN R100** untuk keselamatan baterai EV.

### Tahap 2 — Screening & Grading di Collection Center
Baterai retired menjalani **kapasitas test** menggunakan *capacity tester* (Arbin BT-2000 atau setara) pada C/3 rate. Klasifikasi SOH dilakukan dengan algoritmasi *k-means clustering* terhadap fitur internal resistance, kapasitas, dan self-discharge rate.

### Tahap 3 — Keputusan Rute: Echelon vs Recycle
Implementasi *decision support system* (DSS) berbasis model Matematika Bagian 2. DSS menghitung *Net Present Value* (NPV) untuk masing-masing rute selama horizon 10 tahun dengan *discount rate* $r = 8\%$.

### Tahap 4 — Logistik Balik (Reverse Logistics)
Desain jaringan *hub-and-spoke* dengan depot regional. Untuk baterai dengan kapasitas $> 80\%$ SOH pada kondisi tertentu, digunakan *reverse logistics* langsung (*drop-shipment* dari dealer ke operator echelon), memotong biaya *handling* hingga 35%.

### Tahap 5 — Echelon Integration & Reconfiguration
Baterai yang masuk echelon menjalani **repackaging** (penggantian BMS, modul yang rusak) sebelum deployment. Sesuai standar **UL 1974:2018** untuk *Evaluation of Repurposed Batteries*.

### Tahap 6 — End-of-Echelon Recycling
Pada akhir masa pakai echelon (umumnya 5–7 tahun), baterai dikirim ke *hydrometallurgical* atau *pyrometallurgical* plant. Sesuai **EU Battery Regulation 2023/1542**, target minimum回收效率 65% Li, 90% Co, 90% Ni, dan 90% Cu harus tercapai.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus: Operator CLSC di Guangdong, China

Sebuah OEM besar (kapasitas produksi 500.000 pack/tahun) mempertimbangkan strategi CLSC. Parameter industri diasumsikan sebagai berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Kapasitas awal baterai $Q_0$ | 60 | kWh |
| Koefisien degradasi $\beta$ (NMC) | $1{,}8 \times 10^{-4}$ | per cycle |
| Rata-rata siklus pensiun | 1.500 | cycle |
| Harga jual baru $p_s$ | 12.000 | USD/unit |
| Biaya produksi $c_s$ | 8.400 | USD/unit |
| Buy-back price $p_r$ | 1.800 | USD/unit |
| Biaya koleksi $C_{\text{pen}}$ | 450 | USD/unit |
| Revenue echelon storage $r_k$ | 280 | USD/kWh-year |
| LCOS baterai echelon $c_e$ | 95 | USD/kWh-year |
| Biaya logistik $C_{\text{log}}$ | 0,15 | USD/km-unit |
| Recovery rate recycling | 90 | % (Co), 65% (Li) |

### 4.2 Perhitungan SOH pada Titik Pensiun

$$Q(1500) = 60 \cdot e^{-1{,}8 \times 10^{-4} \cdot 1500} = 60 \cdot e^{-0{,}27} = 60 \times 0{,}7634 = 45{,}80 \text{ kWh}$$

$$\text{SOH} = \frac{45{,}80}{60} =
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
