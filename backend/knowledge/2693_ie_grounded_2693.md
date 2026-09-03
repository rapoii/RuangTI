# 2693 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Power Bekas Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain Strategy for Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan rantai pasok baru yang bersifat paradoksal: di satu sisi industri otomotif berlomba mengejar dekarbonisasi, namun di sisi lain muncul ancaman lingkungan dan ekonomi berupa pensiunnya baterai power lithium-ion dalam volume masif. Baterai EV pada umumnya didefinisikan "pensiun" (*retired*) ketika State of Health (SOH) turun ke ambang 70–80%, yang dalam konteks armada kendaraan komersial terjadi pada rentang 5–8 tahun pasca-deployment. JIANG Lin & TANG Lidan (2025) menekankan bahwa mengelola baterai pensiun bukan sekadar persoalan disposal, melainkan keputusan jaringan multi-tujuan yang harus mengintegrasikan *echelon utilization* (pemanfaatan bertingkat) dan *recycling remanufacturing* (remanufaktur daur ulang) dalam satu kerangka Closed-Loop Supply Chain (CLSC) terpadu (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

Echelon utilization sendiri merujuk pada strategi pemanfaatan kedua (*second-life application*) baterai bekas pada aplikasi dengan kebutuhan energi dan densitas daya lebih rendah, seperti sistem penyimpanan energi stasioner (*stationary energy storage system*/SESS), telekomunikasi off-grid, atau forklift listrik. Langkah ini memperpanjang siklus hidup material hingga 8–12 tahun tambahan sebelum akhirnya masuk ke tahap *recycling* melalui proses hidrometalurgi atau pirometalurgi untuk回收 cobalt, nikel, dan lithium. Sebagaimana dirangkum Shin, Kim, & Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*, kunci keberlanjutan CLSC baterai terletak pada desain mekanisme *return management* yang robust terhadap ketidakpastian kualitas, kuantitas pengembalian, dan harga material sekunder (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)).

Urgensi ekonominya sangat konkret. Pasar baterai pensiun global diproyeksikan mencapai 1,4 juta ton pada 2030 (BloombergNEF), dengan nilai material kritis yang dapat direcovery melebihi USD 60 miliar. Tanpa strategi CLSC yang terstruktur, baterai pensiun menjadi *stranded asset* yang merugikan OEM, mencemari lingkungan (logam berat, elektrolit organik), dan melanggarkan regulasi Extended Producer Responsibility (EPR) yang diterapkan Uni Eropa, Tiongkok, dan beberapa negara Asia Tenggara. Regulasi Battery Passport yang mulai berlaku 2027 di EU Battery Regulation 2023/1542 juga menuntut traceability material chain-of-custody dari hulu hingga *recycling*, sehingga model CLSC tanpa integrasi data akan kehilangan kepatuhan (*compliance*) dan akses pasar.

Secara operasional, kompleksitas CLSC baterai jauh melampaui CLSC produk konsumen konvensional karena: (i) *heterogenitas* kondisi baterai pensiun memerlukan inspeksi State-of-Health (SOH) individual; (ii) *kapasitas echelon* tergantung pada aplikasi sekunder yang fluktuatif; (iii) margin daur ulang sangat sensitif terhadap harga spot logam Li, Co, Ni yang volatil; dan (iv) keputusan定价 (*pricing*) di tiap tier rantai pasok saling влияют melalui mekanisme *Stackelberg*. JIANG & TANG (2025) merespons tantangan ini dengan formulasi bilevel programming yang memaksimalkan profit OEM sekaligus efisiensi回收 (*recovery*), sebuah pendekatan yang juga diadopsi dengan variasi robust optimization oleh Shin et al. (2024) untuk menghadapi ketidakpastian permintaan dan kualitas pengembalian.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Multi-Tier

Mengikuti JIANG & TANG (2025), jaringan CLSC baterai power terdiri atas empat entitas keputusan dalam rantai tertutup:
1. **OEM baterai (Manufacturer)** – memproduksi sel/pack baru dan menentukan *wholesale price* $w$.
2. **EV assembler/Dealer (Retailer)** – menjual kendaraan ke konsumen, menetapkan *retail price* $p$, serta menerima baterai pensiun melalui *reverse channel*.
3. **Echelon Operator (EO)** – melakukan testing, sorting, dan refurbishment untuk aplikasi second-life dengan kapasitas $Q_e$.
4. **Recycler (RC)** – mengekstraksi material berharga dari baterai yang tidak layak echelon, dengan *recovery rate* $\eta_r$.

### 2.2 Formulasi Bilevel Programming

#### **Upper Level — Keputusan OEM & Harga**

$$\max_{w,\,x_m} \Pi_M = (w - c_m)\,D(p) - \alpha\,(x_m - x_r)^2$$

dengan $c_m$ biaya produksi per unit, $D(p) = a - b\,p$ fungsi permintaan linear, $\alpha$ koefisien penalti *green investment*, dan $(x_m - x_r)^2$ menangkap biaya investasi回收 OEM terhadap target daur ulang regulator.

#### **Lower Level — Keputusan Dealer, EO, dan Recycler**

Dealer memutuskan kuantitas order $q$, jumlah baterai pensiun yang dikumpulkan $r$ (fungsi dari *collection rate* $\rho$), dan alokasi ke echelon atau recycler:

$$\max_{p,\,r} \Pi_R = (p - w)\,D(p) + (v_e - c_s)\,x_e + (v_r - c_r)\,\eta_r\,x_r - c_c\,r$$

dengan $v_e$ dan $v_r$ berturut-turut nilai jual baterai echelon dan material回收, $c_s$ biaya sorting/refurbishment, $c_r$ biaya proses daur ulang, $c_c$ biaya pengumpulan, dan kendala keseimbangan material:

$$r = \rho\,D(p) \quad;\quad x_e + x_r = r \quad;\quad 0 \le x_e \le Q_e$$

### 2.3 Pemodelan Ketidakpastian (Robust Counterpart)

Mengikuti kerangka robust optimization Shin et al. (2024), parameter $\rho$, SOH, dan $v_r$ dimodelkan sebagai *uncertain* dalam polytope:

$$U = \left\{\tilde{\rho} \in \mathbb{R}^+ \;\Big|\; \tilde{\rho} = \rho_0 + \sum_{k=1}^{K}\zeta_k\,\hat{\rho}_k,\;\sum_{k=1}^{K}|\zeta_k| \le \Gamma\right\}$$

dimana $\zeta_k$ merepresentasikan deviasi terburuk (*worst-case deviation*) dan $\Gamma$ adalah *budget of uncertainty*. Fungsi objektif robust menjadi:

$$\min_{y}\;\max_{\tilde{u}\in U} \; \mathbf{c}^T y + \mathbf{b}(\tilde{u})^T y$$

yang diselesaikan melalui transformasi dual menjadi *mixed-integer linear program* (MILP) pada umumnya.

### 2.4 Fungsi Utilitas Multi-Objektif

Untuk menyeimbangkan profit, emisi, dan回收, paper utama menggunakan weighted sum:

$$U = \lambda_1\,\Pi_{\text{total}} - \lambda_2\,CO_2 - \lambda_3\,\Delta M$$

dengan $\lambda_1+\lambda_2+\lambda_3=1$, $\Pi_{\text{total}}$ total profit seluruh tier, $CO_2$ total emisi karbon, dan $\Delta M$ tingkat回收 material kritis (Co, Ni, Li).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi CLSC Baterai Pensiun di Industri

Diagram alir proses (*process flowchart*) implementasi CLSC baterai menurut JIANG & TANG (2025) dan best practice industri:

```
[EV End-of-Life] 
      ↓
[Stage 1: Collection & Logistics] → Transport via reverse logistics hub
      ↓
[Stage 2: Initial Screening] → Voltage, impedance, visual inspection
      ↓
[Stage 3: SOH Characterization] → Capacity test (0.2C discharge), EIS
      ↓
[Decision Branch] 
      ├── SOH ≥ 80% → [Direct Reuse / Redistribution]
      ├── 60% ≤ SOH < 80% → [Echelon Sorting & Refurbishment]
      └── SOH < 60% → [Recycler: Hydrometallurgical Process]
      ↓
[Stage 4: Data Recording ke Battery Passport] → ISO/IEC 21434, UN 38.3
      ↓
[Stage 5: Material Recovery & Remanufacturing Loop]
      ↓
[Feed-back to OEM: Closed-Loop Confirmed]
```

### 3.2 Arsitektur Teknologi Pendukung

1. **Battery Management System (BMS) Second-Life**: Modul BMS baru dengan algoritma State-of-Health estimation berbasis *incremental capacity analysis* (ICA) dan *Gaussian process regression* untuk memprediksi Remaining Useful Life (RUL).
2. **Digital Twin Traceability**: Platform blockchain (Hyperledger Fabric) untuk mencatat provenance material sesuai Battery Passport EU 2023/1542.
3. **Decision Support System (DSS)**: Integrasi model bilevel JIANG & TANG (2025) ke dalam ERP perusahaan, dijalankan mingguan untuk menyesuaikan harga $w$, $p$, dan alokasi $x_e, x_r$.
4. **Reverse Logistics Network**: Lokasi collection center mengikuti model *gravity location-allocation* dengan bobot populasi EV dan jarak maksimal 150 km ke EO/RC terdekat.

### 3.3 Algoritma Solusi

Karena MILP menjadi non-convex ketika variabel keputusan kontinu dan diskrit bercampur, JIANG & TANG (2025) mengusulkan algoritma hybrid:
- **Outer loop**: Genetic Algorithm (GA) dengan populasi 80, generasi 200, crossover rate 0.85, mutation rate 0.05.
- **Inner loop**: CPLEX/Gurobi untuk menyelesaikan subproblem LP pada tiap kromosom.
- **Konvergensi**: Gap < 0.5% atau iterasi maksimal tercapai.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Studi Kasus Produsen Baterai Skala 500 kWh/Unit)

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Permintaan EV per tahun | $a$ | 100.000 | unit |
| Elastisitas harga | $b$ | 250 | unit/RMB·10.000 |
| Biaya produksi OEM | $c_m$ | 45.000 | RMB/unit |
| Biaya refurbishment | $c_s$ | 8.000 | RMB/unit |
| Biaya daur ulang | $c_r$ | 12.000 | RMB/unit |
| Biaya pengumpulan | $c_c$ | 2.500 | RMB/unit |
| Nilai jual echelon | $v_e$ | 18.000 | RMB/unit |
| Nilai material回收 | $v_r$ | 22.000 | RMB/unit |
| Collection rate | $\rho$ | 0.72 | – |
| Recovery rate | $\eta_r$ | 0.92 | – |
| Kapasitas EO | $Q_e$ | 25.000 | unit/tahun |
| Koefisien green investment | $\alpha$ | 0.30 | – |

### 4.2 Kalkulasi Step-by-Step

**Langkah 1 — Fungsi Permintaan:**
Dengan $p = 80.000$ RMB:
$$D(p) = 100.000 - 250 \cdot \left(\frac{80.000}{10.000}\right) = 100.000 - 2.000 = 98.000 \text{ unit}$$

**Langkah 2 — Volume Pengembalian:**
$$r = \rho \cdot D(p) = 0{,}72 \cdot 98.000 = 70.560 \text{ unit baterai pensiun/tahun}$$

**Langkah 3 — Keputusan Alokasi (dengan kendala kapasitas EO):**
Misal $x_e = 25.000$ unit (mencapai kapasitas EO):
$$x_r = r - x_e = 70.560 - 25.000 = 45.560 \text{ unit ke recycler}$$

Material kritis yang dapat di-recover per tahun:
$$M_{\text{Co+Ni+Li}} = \eta_r \cdot x_r \cdot \bar{m}_{\text{cell}} = 0{,}92 \cdot 45.560 \cdot 0{,}15 \text{ kg} \approx 6.287 \text{ ton}$$

**Langkah 4 — Profit Lower Level (Dealer):**
$$\Pi_R