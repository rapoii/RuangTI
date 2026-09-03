# 2485 — Strategi Rantai Pasok Tertutup untuk Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain (CLSC) Baterai Power Bekas dengan Skema Echelon Utilization dan Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial adopsi kendaraan listrik (EV) global telah menciptakan paradoks industri abad ke-21: transisi energi bersih menghasilkan limbah kritis baru berupa baterai lithium-ion bekas (*retired power batteries*). International Energy Agency (IEA) memproyeksikan volume kumulatif baterai EV retired secara global akan melampaui 1,2 juta ton pada 2030 (JIANG & TANG, 2025). Setiap baterai dengan kapasitas awal 50–80 kWh yang mencapai *State of Health* (SOH) di bawah 80% tidak lagi layak untuk aplikasi otomotif, namun masih menyimpan 60–70% kapasitas energi yang sangat bernilai untuk aplikasi sekunder (*second-life applications*) seperti *stationary energy storage*, *backup power*, dan *low-speed electric vehicles* (JIANG & TANG, 2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

Urgensi strategis terletak pada tiga dimensi simultan. **Pertama**, dimensi lingkungan: baterai Li-ion mengandung litium, kobalt, nikel, dan mangan dengan *criticality index* tinggi—ekstraksi virgin-nya meninggalkan jejak karbon signifikan (rata-rata 150 kg CO₂eq/kWh). **Kedua**, dimensi ekonomi: pasar global baterai bekas diproyeksikan mencapai USD 35,6 miliar pada 2030 (Shin et al., 2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)). **Ketiga**, dimensi regulasi: mandat *Extended Producer Responsibility* (EPR) di Uni Eropa (Directive 2006/66/EC yang direvisi 2023) dan Regulasi Baterai UE mewajibkan *collection rate* minimum 63% pada 2027 dan 73% pada 2030. JIANG & TANG (2025) menekankan bahwa keputusan alokasi baterai retired antara *echelon utilization* (cascade) dan *direct recycling/remanufacturing* membentuk struktur insentif yang kompleks bagi seluruh pemangku kepentingan dalam rantai pasok tertutup.

Kompleksitas arsitektur CLSC baterai bekas melibatkan minimal lima *stakeholder*: OEM baterai, *echelon operator*, *recycler*, *collector*, dan konsumen akhir. Koordinasi antar-aktor ini menghadapi asimetri informasi, ketidakpastian SOH saat pengembalian (*return quality uncertainty*), dan fragmentasi logistik reverse. Shin et al. (2024) membuktikan bahwa tanpa sistem *return management* yang robust, efisiensi material recovery CLSC turun 18–24%. Dokumen modul ini menyajikan kerangka rekayasa industri terintegrasi untuk menjawab tantangan tersebut, dengan formulasi matematis, SOP operasional, dan studi kasus kuantitatif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CLSC Multi-Echelon

JIANG & TANG (2025) memformulasikan CLSC baterai bekas sebagai sistem keputusan empat tingkat yang menggabungkan *forward chain* (manufaktur baterai baru → pasar EV) dan *reverse chain* (pengumpulan baterai retired → *echelon* atau *recycling* → baterai remanufaktur). Struktur ini merupakan modifikasi dari kerangka game-theory Stackelberg tiga tingkat klasik (manufacturer-retailer-consumer) dengan penyisipan *echelon node* dan *recycling node*.

### 2.2 Notasi Parameter dan Variabel Keputusan

**Parameter eksogen:**
- $c_m$: biaya produksi baterai baru (USD/unit)
- $c_e$: biaya refurbishment untuk echelon utilization (USD/unit)
- $c_r$: biaya remanufaktur dari material daur ulang (USD/unit)
- $\theta$: proporsi baterai retired dengan SOH $\geq 70\%$ (kandidat echelon)
- $1-\theta$: proporsi baterai retired dengan SOH $<70\%$ (kandidat recycling)
- $\lambda$: efisiensi material recovery dari proses hidrometalurgi (fraksi, $0 < \lambda \leq 1$)
- $\eta$: efisiensi konversi kapasitas pada echelon utilization (fraksi)
- $D_0$: permintaan pasar baterai baru (unit)
- $\delta$: koefisien elastisitas harga permintaan

**Variabel keputusan:**
- $p_m$: harga jual baterai baru (USD/unit)
- $p_e$: harga jual produk echelon (USD/unit)
- $p_r$: harga jual baterai remanufaktur (USD/unit)
- $q_m$: kuantitas produksi baterai baru
- $q_e$: kuantitas baterai dialokasikan ke echelon
- $q_r$: kuantitas baterai dialokasikan ke recycling-remanufacturing
- $\tau$: *trade-in subsidy* atau insentif pengembalian (USD/unit)

### 2.3 Fungsi Objektif

JIANG & TANG (2025) menyusun model bilevel di mana *manufacturer* sebagai Stackelberg leader menentukan $(p_m, \tau)$, sementara *echelon operator* dan *recycler* sebagai followers menentukan alokasi $q_e$ dan $q_r$. Fungsi profit total sistem CLSC:

$$\Pi_{CLSC} = \underbrace{(p_m - c_m)q_m}_{\text{Profit manufaktur baru}} + \underbrace{(p_e - c_e)q_e}_{\text{Profit echelon}} + \underbrace{(p_r - c_r)q_r - c_{rec}(q_e + q_r)}_{\text{Profit recycling}} \tag{1}$$

di mana permintaan mengikuti fungsi linier $q_m = D_0 - \delta p_m + \gamma \tau$ dengan $\gamma$ sebagai *cross-price elasticity* terhadap subsidi pengembalian. Kuantitas reverse stream memenuhi konservasi aliran:

$$q_e + q_r = \tau \cdot q_m \cdot \rho \tag{2}$$

dengan $\rho$ sebagai *return rate* efektif yang dimoderasi oleh desain insentif.

### 2.4 Fungsi Utilitas Konsumen dan Fungsi回收

Demand untuk baterai remanufaktur sebagai *substitusi parsial* baterai baru dimodelkan:

$$q_r^{demand} = \alpha_0 - \alpha_1 p_r + \alpha_2 p_m + \alpha_3 \tau \tag{3}$$

di mana koefisien $\alpha_1 > 0$ (harga sendiri), $\alpha_2 > 0$ (substitusi komplementer), $\alpha_3 > 0$ (efek subsidi). Untuk memastikan alokasi optimal, JIANG & TANG (2025) menurunkan *Karush-Kuhn-Tucker (KKT) conditions* untuk titik interior:

$$\frac{\partial \Pi_{echelon}}{\partial q_e} = p_e - c_e - \mu_e = 0 \tag{4}$$

$$\frac{\partial \Pi_{recycler}}{\partial q_r} = p_r + \lambda (c_m - c_r) - \mu_r = 0 \tag{5}$$

dengan $\mu_e, \mu_r$ sebagai *dual variables* (price shadow) yang merepresentasikan opportunity cost dari kapasitas.

### 2.5 Model Robust (Pelengkap dari Shin et al., 2024)

Untuk mengatasi ketidakpastian SOH dan *return rate*, Shin et al. (2024) memperkenalkan *robust counterpart* dengan *uncertainty set box*:

$$\mathcal{U} = \left\{ \theta \in [\theta^L, \theta^U] : \theta^L = \bar{\theta} - \hat{\theta}, \theta^U = \bar{\theta} + \hat{\theta} \right\} \tag{6}$$

Formulasi robust memastikan solusi optimal tetap *feasible* untuk seluruh skenario terburuk (*worst-case realization*) dalam $\mathcal{U}$, dengan *conservative level* $\Gamma$ mengendalikan tingkat kehati-hatian:

$$\max_{q_e, q_r} \min_{\theta \in \mathcal{U}} \left[ (p_e - c_e)\theta \cdot R + (p_r - c_r)(1-\theta) \cdot R - c_{rec} R \right] \tag{7}$$

di mana $R = \tau \cdot q_m$ adalah total *reverse flow*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) bersama Shin et al. (2024) mengusulkan arsitektur SOP tujuh-tahap untuk implementasi CLSC baterai bekas:

### Tahap 1: Identifikasi & Klasifikasi SOH
Setiap baterai retired yang masuk diuji menggunakan **Hybrid Pulse Power Characterization (HPPC)** test sesuai standar IEC 62660-1 dan GB/T 31467. Klasifikasi menghasilkan *tier*:
- **Tier A** (SOH ≥ 80%): langsung layak pakai (*direct reuse*)
- **Tier B** (70% ≤ SOH < 80%): kandidat echelon utilization
- **Tier C** (SOH < 70%): masuk *recycling-remanufacturing*

### Tahap 2: Desain Insentif Pengembalian (Trade-in Mechanism)
Tetapkan $\tau^*$ dari solusi KKT sistem (Persamaan 4–5). Implementasi berupa voucher digital yang *redeemable* di dealer resmi. JIANG & TANG (2025) menemukan ambang $\tau \geq 0{,}15 \cdot p_m$ diperlukan untuk mencapai *return rate* $\rho \geq 60\%$.

### Tahap 3: Logistik Reverse (Collection Network)
 Desain hub-and-spoke dengan *regional consolidation centers* (RCC) berjarak ≤ 300 km dari titik pengumpulan utama. Moda transportasi mengikuti hierarki: truk listrik jarak pendek (≤ 150 km), kereta api kargo (150–500 km), kapal kargo (Laut untuk >500 km).

### Tahap 4: Sortir dan Pre-processing
- **Tier A**: repackaging dengan *second-life BMS* (Battery Management System) → penjualan B2B untuk *stationary storage*
- **Tier B**: *cell sorting* menggunakan *capacity sorting machine* dengan presisi ±2%, pemilahan berdasarkan ΔSOH
- **Tier C**: *safe discharging* dengan盐水 (salt water) neutralization sesuai standar UN 38.3

### Tahap 5: Proses Echelon Utilization
Refurbishment meliputi *cell rebalancing*,更换 BMS, dan *thermal management retrofit*. Standar rujukan: **GB/T 34014-2017** (China) untuk traceability kode baterai automotive. Output: *second-life battery pack* untuk aplikasi *peak shaving* PLN, telekomunikasi BTS, atau *low-speed EV* (forklift, golf cart).

### Tahap 6: Proses Recycling-Remanufacturing
Untuk Tier C, gunakan **hydrometallurgical leaching** dengan recovery target per JIANG & TANG (2025): Li $\geq 90\%$, Co $\geq 95\%$, Ni $\geq 95\%$. Material recovered masuk *

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
