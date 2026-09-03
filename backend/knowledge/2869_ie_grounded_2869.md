# 2869 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat dan Daur Ulang Manufaktur Baterai Bekas Pembangkit Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global, yang diproyeksikan mencapai lebih dari 145 juta unit pada 2030 menurut IEA Global EV Outlook 2024, menciptakan tantangan operasional baru bagi industri manufaktur baterai litium-ion, yaitu *end-of-life (EOL) management*. Baterai EV umumnya pensiun (*retired*) ketika State of Health (SOH) turun di bawah ambang 70–80% dari kapasitas nominalnya, sehingga tidak lagi layak untuk aplikasi traksi otomotif tetapi masih menyimpan 60–80% kapasitas residu yang sangat bernilai untuk aplikasi stasioner (stationary energy storage, telekomunikasi, lampu jalan pintar, dan microgrid). JIANG Lin dan TANG Lidan (2025) dalam paper yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering* (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menegaskan bahwa pemanfaatan bertingkat (*echelon utilization*) yang diikuti dengan daur ulang manufaktur (*recycling remanufacturing*) menjadi strategi kunci untuk meminimalkan total cost of ownership, menurunkan jejak karbon, dan memenuhi regulasi Extended Producer Responsibility (EPR) yang semakin ketat di Uni Eropa, Tiongkok, dan Indonesia.

Permasalahan industri yang diangkat bersifat multi-dimensi. Pertama, terdapat *uncertainty struktural* pada laju pengembalian (*return rate*) baterai pensiun yang dipengaruhi siklus pengisian, suhu operasional, dan perilaku konsumen. Kedua, biaya inspeksi, sortasi, pengujian SOH, dan rekondisi sangat variatif sehingga menyulitkan keputusan investasi kapasitas Echelon Utilization Center (EUC) dan Recycling Center (RC). Ketiga, muncul konflik kepentingan antara Original Equipment Manufacturer (OEM) yang ingin menekan harga beli kembali (*buyback price*) baterai bekas untuk melindungi margin, dan operator Recycle/Remanufacturer yang menuntut kualitas input tinggi agar proses hidrometalurgi atau pirometalurgi menghasilkan recovery rate ekonomis.

Shin, Kim, dan Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi perspektif ini dengan menunjukkan bahwa mekanisme *return management* yang mengintegrasikan kebijakan pengembalian, grading kualitas, dan insentif konsumen, mampu meningkatkan profitabilitas rantai pasok hingga 12–18% dibandingkan model tanpa sistem manajemen pengembalian. Dengan mengombinasikan kedua kerangka tersebut, modul ini memposisikan CLSC baterai pensiun sebagai studi kasus krusial dalam teknik industri modern yang menggabungkan optimasi robust, teori permainan Stackelberg, dan rekayasa keberlanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Keputusan CLSC Tiga-Eselon

Model mengadopsi kerangka keputusan tiga-eselon sebagaimana dirumuskan JIANG & TANG (2025). Eselon pertama adalah *OEM/pabrikan baterai* yang memimpin (leader) dalam permainan Stackelberg; eselon kedua adalah *Echelon Utilization Center* (EUC); eselon ketiga adalah *Recycling Center* (RC). Konsumen EV sebagai originator baterai bekas menjadi sumber aliran retrograde.

### 2.2 Parameter dan Variabel Keputusan

Definisikan himpunan baterai pensiun dengan indeks $i \in I = \{1, 2, \dots, N\}$ yang diklasifikasikan ke dalam grade $g \in G = \{A, B, C\}$ berdasarkan rentang kapasitas residual:

- Grade A: $SOH \in [0.80, 1.00]$ → layak pakai ulang langsung (*direct second-use*)
- Grade B: $SOH \in [0.60, 0.80)$ → layak rekondisi untuk stationary storage
- Grade C: $SOH < 0.60$ → hanya layak daur ulang material

Variabel keputusan:
- $q_i^E$ : jumlah baterai grade $i$ yang dialokasikan ke EUC
- $q_i^R$ : jumlah baterai grade $i$ yang dialokasikan ke RC
- $p_b$ : harga beli kembali (*buyback price*) dari konsumen (diatur OEM)
- $w_E$ : harga jual OEM ke EUC
- $w_R$ : harga jual OEM ke RC
- $p_E$ : harga jual produk EUC (modul baterai stasioner)
- $p_R$ : harga jual material daur ulang (Li, Co, Ni)

Parameter biaya (sesuai konvensi paper acuan):
- $c_m$ : biaya manufaktur baterai baru per kWh
- $c_E$ : biaya operasional EUC per kWh (grading, rekondisi)
- $c_R$ : biaya operasional RC per kWh (dismantling, hidrometalurgi)
- $\eta_E$ : efisiensi konversi kapasitas di EUC ($0 \leq \eta_E \leq 1$)
- $\eta_R$ : *recovery rate* material kritis di RC ($0 \leq \eta_R \leq 1$)
- $C_i$ : kapasitas nominal baterai $i$ (kWh)

### 2.3 Model Optimasi Profit OEM (Leader)

Fungsi tujuan OEM memaksimumkan:

$$
\max_{p_b, w_E, w_R} \Pi_{OEM} = \sum_{i \in I} \left[ p_b \cdot q_i - w_E q_i^E - w_R q_i^R - c_m \sum_i q_i \right]
$$

dengan kendala keseimbangan material:

$$
q_i = q_i^E + q_i^R, \quad \forall i \in I
$$

dan kendala alokasi grade:

$$
\sum_{i \in I_A} q_i^E \leq Q_E^{max}, \quad \sum_{i \in I_C} q_i^R \leq Q_R^{max}
$$

### 2.4 Fungsi Tujuan EUC dan RC (Followers)

Profit EUC dipengaruhi oleh biaya rekondisi dan nilai kapasitas efektif:

$$
\Pi_{EUC} = \sum_{i \in I} \left[ p_E \cdot \eta_E \cdot C_i \cdot q_i^E - w_E q_i^E - c_E q_i^E \right]
$$

Profit RC mempertimbangkan nilai recovery material menggunakan pendekatan metal value:

$$
\Pi_{RC} = \sum_{i \in I} \left[ p_R \sum_{m \in M} v_m \eta_R^{(m)} C_i - w_R q_i^R - c_R q_i^R \right]
$$

di mana $v_m$ adalah nilai pasar material $m$ (litium, kobalt, nikel, mangan), dan $\eta_R^{(m)}$ adalah recovery rate spesifik per material.

### 2.5 Formulasi Robust Optimization (Shin, Kim & Jeong, 2024)

Untuk menangkap *uncertainty* pada return rate $\tilde{q_i}$ dan harga material $\tilde{p_R}$, paper pendukung merumuskan *budget uncertainty set*:

$$
\mathcal{U} = \left\{ \tilde{q}_i, \tilde{p}_R : \sum_{i} \frac{|\tilde{q}_i - \bar{q}_i|}{\hat{q}_i} \leq \Gamma_q, \; \tilde{p}_R \in [\bar{p}_R - \hat{p}_R, \bar{p}_R + \hat{p}_R] \right\}
$$

Problem robust counter-part menjadi:

$$
\max_{x} \min_{(\tilde{q}, \tilde{p}_R) \in \mathcal{U}} \Pi(x, \tilde{q}, \tilde{p}_R)
$$

yang dapat direformulasi sebagai *Mixed-Integer Linear Program* (MILP) menggunakan dualisasi worst-case.

### 2.6 Backward Induction Solusi Stackelberg

Dengan hipotesis informasi sempurna, solusi ekuilibrium $(p_b^*, w_E^*, w_R^*, p_E^*, p_R^*)$ diperoleh melalui induksi mundur (*backward induction*):

$$
\frac{\partial \Pi_{EUC}}{\partial p_E} = 0, \quad \frac{\partial \Pi_{RC}}{\partial p_R} = 0
$$

mensubstitusikan $p_E^*(w_E)$ dan $p_R^*(w_R)$ ke fungsi OEM, lalu menyelesaikan first-order conditions untuk $w_E, w_R, p_b$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur CLSC Baterai Pensiun

```
┌────────────┐      Forward Flow          ┌──────────────┐
│  EV User   │ ──────────────────────────▶ │  OEM / Cell  │
│ (Originator)│   Baterai baru             │  Manufacturer │
└─────┬──────┘                             └───────┬──────┘
      │ Retired Battery (grade A/B/C)             │
      │ ↓ Buyback $p_b$                           │
      │                                           │
┌─────▼────────┐    Direct Second-Use    ┌────────▼─────┐
│  Collection & │ ──────────────────────▶ │     EUC      │
│  Sorting Hub  │   Grade A/B             │ (Echelon Ctr)│
└─────┬────────┘                          └──────┬───────┘
      │ Grade C (low residual)                  │ Modul Baterai
      │ ↓                                        │ Stasioner
      │                                   ┌──────▼───────┐
      └──────────────────────────────────▶│     RC       │
         Recycling input                  │ (Recycling)  │
                                          └──────┬───────┘
                                                 │ Material
                                                 │ Li/Co/Ni
                                                 ▼
                                          ┌──────────────┐
                                          │ Closed-loop  │
                                          │ ke OEM Cell  │
                                          └──────────────┘
```

### 3.2 SOP Penanganan Baterai Pensiun

**Tahap 1 — Reverse Logistics Activation.** Konsumen EV atau armada fleet (*taxi, ride-hailing, logistik*) menginisiasi *return request* melalui platform digital OEM. Berdasarkan data telematik (BMS log), sistem melakukan *pre-screening* otomatis terhadap ambang SOH.

**Tahap 2 — Collection & Transport.** Baterai dikemas sesuai standar UN 3480 (Lithium Batteries) dan UN 3481 (Lithium Batteries packed with equipment), dikirim ke Collection Hub bersertifikat dengan transport mode yang memperhatikan kelas bahaya Class 9.

**Tahap 3 — Sorting & Grading.** Pengujian SOH menggunakan *capacity test* (C/3 discharge, IEC 61960), *internal resistance measurement* (Hioki BT3562), dan *ultrasonic NDT*. Output: grade A, B, C.

**Tahap 4 — Echelon Utilization (Grade A/B).** Modul dirakit kembali dengan kapasitas efektif $\eta_E \cdot C_i$, dipasangi BMS baru, dan dijual untuk aplikasi telekomunikasi, UPS, atau *behind-the-meter storage*.

**Tahap 5 — Recycling (Grade C).** Proses hidrometalurgi (leaching dengan H₂SO₄ + H₂O₂) atau pirometalurgi menghasilkan *black mass* yang diproses lebih lanjut untuk recovery Li, Co, Ni.

**Tahap 6 — Closed-loop Material Feed.** Material recovered diumpankan kembali ke lini cathode active material (CAM) OEM.

### 3.3 SOP Return Management System (Shin et al., 2024)

Menerapkan kerangka 5R (Return, Reuse, Repair, Refurbish, Recycle):

| Layer | Prosedur | KPI |
|-------|----------|-----|
| Return Trigger | BMS reports SOH <80%