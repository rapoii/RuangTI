# 1441 — Optimasi Model Demand Side Management (DSM) Sektor Residensial: Perspektif Matematis, Prosedural, dan Aplikasi Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Residential Demand Side Management model, optimization and future perspective: A review
**Jurnal & Sitasi Utama:** Subhasis Panda, Sarthak Mohanty, Pravat Kumar Rout (2022). *Energy Reports*. DOI: [https://doi.org/10.1016/j.egyr.2022.02.300](https://doi.org/10.1016/j.egyr.2022.02.300)
**Sitasi Pendukung:** Areej Althabatah, Mohammed Yaqot, Brenno C. Menezes (2023). *Logistics*. DOI: [https://doi.org/10.3390/logistics7030063](https://doi.org/10.3390/logistics7030063)

---

## 1. Pendahulan dan Konteks Industri

Sektor residensial merupakan kontributor signifikan terhadap profil beban total sistem tenaga listrik modern. Panda, Mohanty, dan Rout (2022) dalam *Energy Reports* (DOI: [10.1016/j.egyr.2022.02.300](https://doi.org/10.1016/j.egyr.2022.02.300)) menegaskan bahwa dinamika beban rumah tangga bersifat **nonlinier, tidak terkontrol (uncontrollable), dan inelastik** terhadap regulasi grid. Kondisi ini menimbulkan tantangan operasional berupa lonjakan permintaan puncak (peak demand) yang merusak stabilitas jaringan, memperburuk *power balance*, dan meningkatkan biaya pembangkitan marginal. Secara empiris, permintaan puncak residensial yang terjadi pada rentang pukul 18.00–22.00 seringkali membebani gardu distribusi hingga 70–90% dari kapasitas terpasang, sehingga memaksa utilitas menyalakan *peaker plants* yang beremisi tinggi.

Integrasi *Distributed Generations* (DGs) seperti panel fotovoltaik atap, baterai rumah tangga, dan teknologi *Vehicle-to-Grid* (V2G), ditambah kemajuan *Information and Communication Technology* (ICT), hanya menyelesaikan sebagian permasalahan. Panda et al. (2022) menekankan bahwa tanpa **fleksibilitas, manajemen energi, dan penjadwalan (scheduling) yang terencana**, sektor residensial tidak akan mampu berkontribusi terhadap stabilitas grid secara berkelanjutan. Demand Side Management (DSM) muncul sebagai disiplin rekayasa yang mengelola pola konsumsi melalui tiga pilar: (i) *peak clipping*, (ii) *load shifting*, dan (iii) *valley filling*.

Dalam konteks lintas-sektor, Althabatah, Yaqot, dan Menezes (2023) dalam *Logistics* (DOI: [10.3390/logistics7030063](https://doi.org/10.3390/logistics7030063)) menunjukkan bahwa transformasi **Procurement 4.0 (P4.0)**—melalui IoT, AI, blockchain, dan *e-procurement*—menjadi katalis utama adopsi DSM. Sensor IoT pada smart meter menyediakan data granular 1-menit yang kemudian dianalisis oleh algoritma AI untuk *demand forecasting*, sementara blockchain memungkinkan transaksi energi peer-to-peer (P2P) antar rumah tangga. Tanpa integrasi rantai pasok teknologi ini, perangkat DSM seperti *smart thermostat* dan *controllable load switches* tidak dapat diakuisisi secara efisien oleh utilitas maupun operator perumahan.

Urgensi industri DSM diperkuat oleh tiga megatren: (a) elektrifikasi transportasi yang menambah 3–7 kW per rumah tangga; (b) kebijakan *net-zero emission* yang melarang pembangkitan puncak berbasis fosil; dan (c) liberalisasi pasar energi yang memperkenalkan tarif *Time-of-Use* (ToU) dan *Real-Time Pricing* (RTP). Oleh karena itu, modul ini menyajikan kerangka matematis, prosedural, dan kuantitatif untuk mengoptimalkan DSM residensial secara rigor.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi DSM residensial mengikuti kerangka **Mixed Integer Linear Programming (MILP)** yang diajukan oleh Panda et al. (2022). Berikut komponen-komponen krusialnya:

### 2.1 Notasi Himpunan dan Parameter

- $\mathcal{T} = \{1, 2, \dots, T\}$: himpunan slot waktu diskret (umumnya $T = 24$ jam, dengan interval 1 jam).
- $\mathcal{A} = \{1, 2, \dots, A\}$: himpunan peralatan rumah tangga yang *shiftable* (HVAC, pemanas air, mesin cuci, pengering, EV charger, dishwasher).
- $P_{a,t}$: konsumsi daya (kW) peralatan $a$ pada waktu $t$.
- $C_t$: harga listrik (USD/kWh) pada waktu $t$ (ToU tariff).
- $\alpha_a, \beta_a$: batas awal dan akhir jendela operasi peralatan $a$.
- $H_a$: total durasi operasi (jam) yang dibutuhkan peralatan $a$.
- $L_t^{max}$: batas beban maksimum rumah tangga (kW) yang diizinkan oleh kapasitas panel dan gardu.

### 2.2 Variabel Keputusan

$$x_{a,t} \in \{0,1\}, \quad \forall a \in \mathcal{A}, t \in \mathcal{T}$$

Bernilai 1 jika peralatan $a$ aktif pada slot $t$, dan 0 sebaliknya. Beberapa studi menggunakan variabel kontinu $y_{a,t} \in [0,1]$ untuk peralatan yang *dimmer-controllable* seperti HVAC.

### 2.3 Fungsi Objektif

Tujuan utama DSM residensial adalah **minimalisasi total biaya listrik** sekaligus **reduksi Peak-to-Average Ratio (PAR)**:

$$\min \; Z = \underbrace{\sum_{t=1}^{T} \sum_{a=1}^{A} x_{a,t} \cdot P_{a,t} \cdot C_t}_{\text{biaya energi}} + \lambda \cdot \underbrace{\left( \frac{\max_{t} L_t}{\frac{1}{T}\sum_{t=1}^{T} L_t} \right)}_{\text{PAR}}$$

dengan $\lambda$ adalah bobot penalti yang menormalisasi biaya termal/kompor.

### 2.4 Fungsi Beban Total

$$L_t = \sum_{a \in \mathcal{A}_{shift}} x_{a,t} \cdot P_{a,t} + \sum_{a \in \mathcal{A}_{fixed}} P_{a,t}^{fix} - P_t^{PV}$$

dimana $P_t^{PV}$ adalah pembangkitan fotovoltaik pada waktu $t$.

### 2.5 Kendala Operasional

**(a) Batas Beban Puncak:**
$$\sum_{a \in \mathcal{A}_{shift}} x_{a,t} \cdot P_{a,t} \leq L_t^{max}, \quad \forall t \in \mathcal{T}$$

**(b) Jendela Operasi & Durasi Minimum:**
$$\sum_{t=\alpha_a}^{\beta_a} x_{a,t} = H_a, \quad \forall a \in \mathcal{A}$$

**(c) Kontinuitas Operasi (untuk peralatan non-interruptible):**
$$x_{a,t} - x_{a,t-1} \leq x_{a,t+H_a-1}, \quad \forall a, t$$

**(d) Batas Pembangkitan PV:**
$$0 \leq P_t^{PV} \leq P_{t}^{PV,avail}$$

Model ini diselesaikan menggunakan solver branch-and-bound (CPLEX, Gurobi) atau metaheuristik seperti *Genetic Algorithm* (GA), *Particle Swarm Optimization* (PSO), dan *Differential Evolution* (DE) untuk kasus skala besar.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DSM residensial mengikuti *Standard Operating Procedure* yang diadaptasi dari rekomendasi Panda et al. (2022) dan integrasi teknologi P4.0 oleh Althabatah et al. (2023). Diagram alir prosesnya adalah sebagai berikut:

```
[LANGKAH 1] Akuisisi Data → Smart Meter (IoT) + Sensor Sub-metering
        ↓
[LANGKAH 2] Forecasting → Model ARIMA / LSTM (AI/ML)
        ↓
[LANGKAH 3] Optimasi → MILP / Heuristik → Jadwal operasi per alat
        ↓
[LANGKAH 4] Diseminasi → Home Energy Management System (HEMS) via protokol IEEE 2030.5
        ↓
[LANGKAH 5] Eksekusi → Smart Controllable Switch / DR Signal
        ↓
[LANGKAH 6] Validasi & Settlement → Blockchain smart contract (P2P trading)
        ↓
[LOOP] Feedback loop untuk re-training model AI setiap 7 hari
```

### Rincian Prosedur:

**Langkah 1 — Akuisisi Data:** Sensor IoT (Zigbee/Z-Wave/Wi-Fi) dipasang pada setiap beban *shiftable*. Althabatah et al. (2023) menunjukkan bahwa *e-procurement* dari sensor ini melalui platform digital memangkas lead time dari 12 minggu menjadi 2 minggu, sehingga deployment massal menjadi layak secara CAPEX.

**Langkah 2 — Forecasting:** Data granular digunakan untuk melatih *Long Short-Term Memory* (LSTM) yang memprediksi $L_t$ dan $P_t^{PV,avail}$ dengan *Mean Absolute Percentage Error* (MAPE) < 5%.

**Langkah 3 — Optimasi:** Solver MILP menghasilkan jadwal optimal yang dikirim ke HEMS. Untuk gedung > 1000 unit, digunakan algoritma *decomposition* (Benders atau Dantzig-Wolfe).

**Langkah 4 — Diseminasi:** Protokol IEEE 2030.5 / OpenADR 2.0b menjamin interoperabilitas antar utilitas, aggregator, dan rumah tangga.

**Langkah 5 — Eksekusi:** Saklar pintar memutus/menyambungkan beban secara *fail-safe*; bila komunikasi putus, alat kembali ke mode *user override*.

**Langkah 6 — Validasi & Settlement:** Blockchain *Hyperledger Fabric* mencatat transaksi energi P2P, sehingga konsumsi dan produksi tiap rumah tangga dapat diperdagangkan secara transparan—prinsip yang juga ditekankan oleh Althabatah et al. (2023) untuk keamanan data.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Kasus

Pertimbangkan kompleks perumahan XYZ dengan **50 rumah tangga**. Setiap rumah memiliki 5 peralatan *shiftable* dengan profil berikut:

| Alat $a$ | $P_a$ (kW) | $H_a$ (jam) | Jendela $[\alpha_a, \beta_a]$ |
|----------|------------|-------------|------------------------------|
| 1. HVAC | 1.5 | 8 | [16, 28] |
| 2. Pemanas Air | 2.0 | 4 | [1, 12] |
| 3. Mesin Cuci | 0.5 | 2 | [9, 21] |
| 4. Dishwasher | 1.8 | 1 | [20, 27] |
| 5. EV Charger | 3.3 | 6 | [18, 30] |

Tarif ToU dari utilitas (USD/kWh):

| Slot | Jam | $C_t$ |
|------|-----|-------|
| Off-peak | 22.00–07.00 | 0.08 |
| Mid-peak |