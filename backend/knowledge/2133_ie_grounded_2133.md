# 2133 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Daya Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju elektrifikasi kendaraan (EV) menimbulkan konsekuensi struktural pada rantai pasokaterial kritis: penumpukan *retired power battery* (baterai daya pensiun) yang diproyeksikan melampaui 2 juta ton per tahun secara global pada 2030 menurut berbagai studi kelistrikan. Permasalahan ini melahirkan urgensi strategis bagi insinyur industri untuk merancang **rantai pasok tertutup** (*Closed-Loop Supply Chain*/CLSC) yang tidak hanya mengelola aliran balik (*reverse logistics*) secara efisien, tetapi juga memaksimalkan nilai guna melalui **pemanfaatan bertingkat** (*echelon utilization*) sebelum memasuki fase *recycling remanufacturing*.

JIANG & TANG (2025) memposisikan baterai pensiun kendaraan listrik sebagai *product with multiple life cycles*, di mana baterai yang tersisa pada State of Health (SoH) 70–80% masih layak untuk aplikasi sekunder seperti penyimpanan energi stasioner (*stationary energy storage*/ESS), telekomunikasi, atau *microgrid*. Setelah SoH turun di bawah ambang batas pemanfaatan bertingkat, baterai masuk ke proses *recycling* untuk mengekstraksi material kritikal seperti lithium, kobalt, dan nikel. Pendekatan JIANG & TANG (2025) mengusulkan arsitektur CLSC tiga tingkat — melibatkan *battery manufacturer*, *echelon operator* (EO), dan *recycler* — dengan keputusan harga, tingkat daur ulang, dan alokasi kapasitas sebagai variabel keputusan utama.

Di sisi komplementer, Shin, Kim, & Jeong (2024) menyoroti bahwa sistem CLSC tradisional rentan terhadap ketidakpastian permintaan dan kualitas barang kembali. Mereka mengusulkan model *robust optimization* dengan *return management system* (RMS) yang menjamin *feasibility* keputusan rantai pasok di seluruh skenario ketidakpastian. Sinergi kedua paper ini memberikan kerangka komprehensif: optimisasi deterministik berbasis *Stackelberg game* (JIANG & TANG, 2025) untuk mengkoordinasikan keputusan antar-aktor, dan pelapisan *robustness* (Shin et al., 2024) untuk menghadapi volatilitas pasar baterai pensiun. Konteks industri nyata — termasuk kebijakan subsidi pemerintah, regulasi *Extended Producer Responsibility* (EPR), dan fluktuasi harga logam kritikal — membuat topik ini menjadi domain riset operasional yang sangat relevan bagi spesialis teknik industri yang menangani keputusan *strategic* dan *tactical* dalam rantai pasok baterai.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CLSC Tiga-Tingkat dengan Echelon Utilization

Model JIANG & TANG (2025) membangun rantai keputusan berurutan: *manufacturer* (M) sebagai *leader* Stackelberg, menetapkan harga jual baterai baru ($p_n$) dan *take-back price* ($p_t$); *echelon operator* (EO) memutuskan alokasi baterai pensiun ke pemanfaatan bertingkat dengan biaya operasional $c_e$; serta *recycler* (R) menentukan tingkat daur ulang $\rho$ dengan biaya proses $c_r$.

Fungsi permintaan primer baterai baru dimodelkan sebagai fungsi linear menurun:

$$D_n(p_n) = \alpha - \beta p_n, \quad \alpha, \beta > 0$$

Permintaan sekunder untuk baterai hasil echelon utilization:

$$D_e(p_e) = \gamma - \delta p_e, \quad \gamma, \delta > 0$$

di mana $\alpha, \beta, \gamma, \delta$ adalah parameter kalibrasi pasar.

### 2.2 Fungsi Profit Tiap Aktor

**Profit Manufacturer (M):**

$$\Pi_M = p_n D_n - c_n D_n + p_t \cdot \Lambda - c_b \Lambda$$

dengan $c_n$ adalah biaya produksi baterai baru, $\Lambda$ adalah jumlah baterai pensiun yang dikembalikan, $c_b$ adalah biaya *collection* dan inspeksi awal.

**Profit Echelon Operator (EO):**

$$\Pi_{EO} = p_e D_e - c_e D_e - p_t \Lambda$$

**Profit Recycler (R):**

$$\Pi_R = p_m D_m - c_r \rho \Lambda - c_m (1-\rho)\Lambda$$

dengan $p_m$ adalah harga jual material hasil *recycling*, $D_m$ adalah permintaan material daur ulang, dan $c_m$ adalah biaya *disposal* baterai yang tidak dapat didaur ulang.

### 2.3 Bentuk Stackelberg Equilibrium

JIANG & TANG (2025) menyelesaikannya melalui backward induction. Pertama, R memaksimalkan $\Pi_R$ terhadap $\rho$, menghasilkan kondisi *first-order*:

$$\frac{\partial \Pi_R}{\partial \rho} = 0 \implies p_m \frac{\partial D_m}{\partial \rho} - c_r \Lambda + c_m \Lambda = 0$$

Substitusi ke EO, lalu ke M, menghasilkan solusi *closed-form* atau melalui *KKT conditions*. Bentuk Lagrangian agregat:

$$\mathcal{L} = \Pi_M + \Pi_{EO} + \Pi_R + \sum_i \mu_i g_i(x)$$

dengan $g_i(x) \le 0$ adalah himpunan kendala kapasitas dan non-negativitas.

### 2.4 Pelapisan Robust Optimization (Shin, Kim, & Jeong, 2024)

Untuk mengakomodasi ketidakpastian, parameter permintaan dimasukkan ke dalam *uncertainty set* bertipe *box* atau *ellipsoidal*:

$$D_n = \bar{D}_n + \xi, \quad \xi \in \mathcal{U} = \{\xi : \|\xi\|_2 \le \Omega\}$$

Fungsi objektif robust kemudian dirumuskan sebagai *worst-case profit*:

$$\Pi_R^{WC} = \min_{\xi \in \mathcal{U}} \Pi(\xi)$$

Bentuk *robust counterpart*-nya:

$$\max_{p_n, \rho} \bar{\Pi} - \Omega \cdot \|c^*\|$$

di mana $c^*$ adalah koefisien obyektif sensitif terhadap $\xi$. Pendekatan ini menjamin imunitas keputusan terhadap fluktuasi permintaan ±Ω.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir CLSC Baterai Pensiun

```
[Produsen Baterai (M)]
        │
        ├──→ [Penjualan Baterai Baru ke OEM EV]
        │
        ▼
[Pengguna EV / Konsumen]
        │
        ▼ (End-of-Life, SoH < 80%)
[Collection Center] ──→ [Inspeksi & Sorting SoH]
        │
        ├──→ SoH ≥ 70% ──→ [Echelon Operator (EO)] ──→ [Stationary Storage / Microgrid]
        │                                              │
        │                                              ▼
        │                                        [Baterai Sisa / SoH < 60%]
        │                                              │
        └──→ SoH < 70% ──→ [Recycler (R)] ──→ [Material Recovery] ──→ [Loop ke M]
```

### 3.2 SOP Implementasi (8 Tahapan)

1. **Identitas Baterai**: Setiap unit baterai dilengkapi *Battery Passport* sesuai standar IEC 63369 dan GBA (Global Battery Alliance) yang mencatat SoH, siklus pengisian, dan provenance material.
2. **Koleksi Terbalik**: Jaringan *take-back* melalui dealer EV, *service center*, dan aggregator EO dengan insentif $p_t$ kepada konsumen.
3. **Inspeksi & Grading**: Pengujian kapasitas残量, internal resistance, dan visual inspection untuk klasifikasi SoH. Standar referensi: GB/T 34014-2017 (China) dan IEC 62933.
4. **Decision Routing**: Algoritma optimisasi CLSC mengalokasikan baterai ke EO atau R berdasarkan profitabilitas marginal dan kendala kapasitas EO ($K_e$).
5. **Echelon Repackaging**: Modul baterai di-*repack* menjadi rakitan baru (48V/96V/400V) untuk aplikasi ESS, dengan kapasitas tipikal 50–500 kWh per unit.
6. **Recycling Hydrometallurgical/Pyrometallurgical**: Ekstraksi logam dengan yield recovery target ≥95% untuk Co/Ni, ≥80% untuk Li (berdasarkan benchmark industri).
7. **Closed-loop Material Feed**: Material hasil *recycling* dimasukkan kembali ke lini produksi M dengan *recycling content* minimum sesuai regulasi EU Battery Regulation 2023/1542.
8. **Monitoring & Audit**: Dashboard real-time metrik TCO, *recycling rate*, dan *carbon footprint reduction* dengan audit tahunan sesuai ISO 14001.

### 3.3 Arsitektur Teknologi Pendukung

- **IoT Telemetry**: Sensor SoH real-time selama penggunaan baterai (SOC, SOH, suhu, arus).
- **Blockchain Ledger**: *Battery Passport* tak-terubah untuk traceability lintas-aktor.
- **Decision Support System (DSS)**: Implementasi model Stackelberg–robust dalam solver Gurobi/CPLEX dengan integrasi ERP (SAP S/4HANA).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Set Parameter Hipotetis-Kalibrasi

Berdasarkan studi kelistrikan dan benchmark industri baterai EV (LiFePO4, kapasitas 50 kWh), disusun parameter berikut:

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Intercept permintaan baru | $\alpha$ | 100.000 | unit/tahun |
| Slope harga permintaan baru | $\beta$ | 50 | unit/(CNY·tahun) |
| Biaya produksi baterai baru | $c_n$ | 30.000 | CNY/unit |
| Harga jual baterai baru | $p_n$ | 35.000 | CNY/unit |
| Take-back price | $p_t$ | 8.000 | CNY/unit |
| Biaya koleksi & inspeksi | $c_b$ | 1.500 | CNY/unit |
| Biaya echelon operation | $c_e$ | 4.000 | CNY/unit |
| Harga jual baterai echelon | $p_e$ | 12.000 | CNY/unit |
| Biaya recycling | $c_r$ | 6.000 | CNY/unit |
| Harga jual material | $p_m$ | 10.000 | CNY/unit |
| Biaya disposal | $c_m$ | 2.000 | CNY/unit |
| Tingkat daur ulang | $\rho$ | 0.7 | – |
| Volume pensiun | $\Lambda$ | 20.000 | unit/tahun |

### 4.2 Langkah Perhitungan Step-by-Step

**Langkah 1: Permintaan baterai baru**

$$D_n = \alpha - \beta p_n = 100.000 - 50(35.000) \times 10^{-3}$$

Karena satuan $\beta$ adalah unit/(CNY·tahun) per unit harga, dengan asumsi $\beta$ berskala ribuan:

$$D_n = 100.000 - 50 \cdot 35 = 100.000 - 1.750 = 98.250 \text{ unit/tahun}$$

**Langkah 2: Profit Manufacturer**

$$\Pi_M = p_n D_n - c_n D_n + p_t \Lambda - c_b \Lambda$$

$$\Pi_M = (35.000 - 30.000)(98.250) + (8.000 - 1.500)(20.000)$$

$$\Pi_M = 5.000 \times 98.250 + 6.500 \times 20.000$$

$$\Pi_M = 491.250.000 + 130.000.000 = 621.250.000 \text{ CNY/tahun}$$

**Langkah 3: Profit Echelon Operator**

Asumsikan permintaan sekunder $D_e = \gamma - \delta p_e$ dengan $\gamma = 30.000$ unit dan $\delta = 2$ unit/(CNY·tahun) per unit harga:

$$D_e = 30.000