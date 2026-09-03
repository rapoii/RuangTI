# 1733 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Daya Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Remanufaktur Baterai Daya Pensiun
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan ekologis dan strategis baru bagi industri manufaktur baterai lithium-ion. Data International Energy Agency (IEA) menunjukkan bahwa pasar baterai daya global diproyeksikan melampaui 4.700 GWh pada 2030, dengan jumlah baterai pensiun (*retired power batteries* — RPB) yang akan membanjiri fasilitas daur ulang dalam dekade berikutnya. Sebagai respons, JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menyoroti urgensi pengembangan strategi *closed-loop supply chain* (CLSC) yang tidak hanya berfokus pada daur ulang material (*recycling*), melainkan terlebih dahulu memaksimalkan nilai sisa baterai melalui *echelon utilization* (pemanfaatan bertingkat) sebelum akhirnya di-*remanufacturing* menjadi sel baru.

Konsep *echelon utilization* merujuk pada pemakaian ulang baterai EV yang telah turun State of Health (SOH) ke ambang batas 70–80% kapasitas awalnya — tetap layak untuk aplikasi stasioner berdaya lebih rendah seperti *energy storage system* (ESS), pencahayaan darurat, telekomunikasi, dan penstabil jaringan mikro. Pendekatan hierarkis ini menciptakan *value cascading* yang menurunkan tekanan terhadap permintaan material kritis (litium, kobalt, nikel) sekaligus menekan emisi CO₂ siklus hidup baterai hingga 40–60%. Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) memperkuat relevansi strategis tersebut melalui formulasi *robust CLSC* yang mengintegrasikan *return management system* untuk mengurangi ketidakpastian laju pengembalian baterai ke titik kumpul (*collection point*) dalam konteks ekonomi sirkular.

Urgensi ekonominya nyata: harga baterai LiFePO₄ baru berada di kisaran USD 95–115/kWh (BloombergNEF, 2024), sementara baterai bekas bertingkat yang mampu beroperasi 3–5 tahun pada ESS bernilai USD 40–60/kWh — margin signifikan bagi OEM (*Original Equipment Manufacturer*) dan *third-party aggregator*. Tanpa kerangka CLSC yang optimal, baterai pensiun berisiko menjadi *hazardous waste* yang menumpuk di TPA, mencemari lingkungan dan merugikan reputasi korporasi. Inilah celah riset yang diisi oleh JIANG & TANG (2025) melalui model keputusan multi-tahap yang mempertimbangkan keputusan *echelon* vs *direct recycling*, alokasi kapasitas, dan harga insentif bagi konsumen untuk mengembalikan baterai.

## 2. Landasan Teori & Formulasi Matematis

Model CLSC JIANG & TANG (2025) dibangun di atas formulasi program bilinier (*bilevel programming*) yang merepresentasikan interaksi keputusan antara OEM (sebagai *leader*) dan *recycling remanufacturer* (sebagai *follower*) di bawah kerangka permainan Stackelberg. Struktur keputusan dua tingkat ini diperlukan karena kapasitas remanufaktur dan tingkat pembelian kembali (*buy-back price*) saling mempengaruhi.

### 2.1 Notasi dan Parameter

Definisikan parameter-parameter model sebagai berikut:

- $i \in \{1, 2, \dots, N_b\}$: indeks baterai bekas tipe $i$
- $j \in \{1, 2, \dots, M\}$: indeks moda pemanfaatan bertingkat (ESS, telekomunikasi, dll.)
- $k \in \{0, 1\}$: keputusan kualitatif, $k=1$ untuk *echelon*, $k=0$ untuk *direct recycling*
- $c_i^{(e)}$: biaya echelonization baterai tipe $i$ (USD/unit)
- $c_i^{(r)}$: biaya remanufaktur baterai tipe $i$ (USD/unit)
- $p_i^{(e)}$: harga jual baterai hasil echelon di pasar aplikasi stasioner
- $p_i^{(r)}$: harga jual material hasil daur ulang (USD/kg)
- $b_i$: *buy-back price* yang dibayarkan OEM kepada konsumen
- $\tau_i$: tingkat pemulihan kapasitas setelah remanufaktur (umumnya 0,85–0,95)
- $\eta_i$: efisiensi material recovery (Li, Co, Ni) — 0,90 untuk Li, 0,95 untuk Co/Ni
- $\rho$: tingkat pengembalian (*collection rate*) baterai bekas

### 2.2 Fungsi Profit OEM

Fungsi tujuan OEM pada tingkat atas (*upper-level leader*) adalah:

$$\Pi_{\text{OEM}} = \sum_{i=1}^{N_b} \sum_{j=1}^{M} k_{ij} \left[ (p_i^{(e)} - c_i^{(e)} - b_i) \cdot q_{ij}^{(e)} \right] + (1 - k_{ij}) \left[ (p_i^{(r)} - c_i^{(r)} - b_i) \cdot q_{ij}^{(r)} \right]$$

dengan $q_{ij}^{(e)}$ dan $q_{ij}^{(r)}$ berturut-turut adalah volume baterai tipe $i$ yang dialokasikan ke pemanfaatan bertingkat aplikasi $j$ dan volume yang dikirim ke remanufaktur.

### 2.3 Fungsi Biaya Remanufacturer

Pada tingkat bawah (*lower-level follower*), *recycler* meminimalkan biaya operasional:

$$\min_{q^{(r)}, \tau, \eta} \; C_{\text{rec}} = \sum_{i=1}^{N_b} \left( \alpha_i^{(r)} \cdot q_i^{(r)} + \beta \cdot \frac{1 - \tau_i}{\tau_i} \right) + \sum_{m \in \mathcal{M}} \gamma_m \cdot \left( 1 - \eta_m \right)^2$$

di mana $\mathcal{M} = \{\text{Li}, \text{Co}, \text{Ni}, \text{Mn}\}$ adalah himpunan material kritis, $\alpha_i^{(r)}$ adalah biaya pemrosesan per unit, $\beta$ adalah *penalty coefficient* untuk degradasi kapasitas, dan $\gamma_m$ adalah koefisien biaya kehilangan material $m$.

### 2.4 Constraint Kapasitas dan Equilibrium

Kendala utama model adalah keterbatasan kapasitas fasilitas:

$$\sum_{j=1}^{M} q_{ij}^{(e)} + q_i^{(r)} \leq \rho \cdot Q_i^{\text{total}}, \quad \forall i$$

$$\sum_{i=1}^{N_b} q_{ij}^{(e)} \leq K_j^{(e)}, \quad \forall j$$

$$\sum_{i=1}^{N_b} q_i^{(r)} \leq K^{(r)}$$

dengan $Q_i^{\text{total}}$ adalah total baterai pensiun tipe $i$, $K_j^{(e)}$ kapasitas aplikasi bertingkat $j$, dan $K^{(r)}$ kapasitas fasilitas remanufaktur. Persamaan KKT (*Karush-Kuhn-Tucker conditions*) menjamin equilibrium Stackelberg:

$$\frac{\partial \Pi_{\text{OEM}}}{\partial q_{ij}^{(e)}} = \lambda_i + \mu_j, \quad \lambda_i, \mu_j \geq 0$$

JIANG & TANG (2025) selanjutnya memformulasikan keputusan ambang SOH di mana baterai tipe $i$ dialokasikan ke *echelon* jika dan hanya jika:

$$\text{SOH}_i \geq \text{SOH}_{\text{threshold}} = \frac{c_i^{(r)} - c_i^{(e)}}{p_i^{(e)} - p_i^{(r)}} \cdot \frac{1}{\tau_i}$$

### 2.5 Formulasi Robust Shin, Kim & Jeong (2024)

Untuk menangani ketidakpastian *collection rate* $\rho$, Shin, Kim & Jeong (2024) menggunakan formulasi *min-max robust optimization*:

$$\max_{\rho \in \mathcal{U}} \min_{q} \; \Pi_{\text{OEM}}(q, \rho)$$

di mana *uncertainty set* $\mathcal{U} = [\rho_0 - \hat{\rho}, \rho_0 + \hat{\rho}]$ dengan $\rho_0$ adalah nilai nominal dan $\hat{\rho}$ adalah deviasi maksimum. Pendekatan ini menghasilkan keputusan *conservative* yang tetap optimal pada skenario terburuk.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi strategi CLSC untuk baterai pensiun memerlukan prosedur operasional yang terstruktur. Berikut adalah arsitektur SOP yang diturunkan dari JIANG & TANG (2025) dan Shin, Kim & Jeong (2024):

### 3.1 Diagram Alir Proses CLSC

```
[EV End-of-Life] → [Diagnosis SOH via BMS Cloud Data]
        ↓
   SOH ≥ 80% ────→ [Direct Reintegration / Second-life OEM]
        ↓ SOH < 80%
[Collection Point] ← [Logistics Reverse Network]
        ↓
[Cell-level Testing & Sorting] → [Modul Grade A/B/C]
        ↓                          ↓              ↓
   Grade A (SOH 70-80%)     Grade B (60-70%)   Grade C (<60%)
        ↓                          ↓              ↓
[Echelon Utilization]      [Repackaging ESS]   [Hydrometallurgical
  - Telecom backup            - Grid storage      Recycling]
  - Forklift power          - Solar storage      - Li/Co/Ni recovery]
  - Solar home system
        ↓
[Remanufacturing → New Pack] (jika SOH pasca-echelon < 50%)
        ↓
[Material Recovery → Closed Loop ke Cell Producer]
```

### 3.2 Tahapan SOP

**Tahap 1 — Identifikasi & Diagnostik:** Telemetri BMS (*Battery Management System*) melaporkan SOH real-time. Ambang keputusan echelon direplikasi dari rumus (8). baterai dengan SOH $\geq 0{,}8$ dikategorikan untuk *second-life OEM*, sedangkan $0{,}7 \leq \text{SOH} < 0{,}8$ masuk antrian echelon.

**Tahap 2 — Desain Jaringan Logistik Mundur:** Tentukan lokasi *collection point* dengan model $p$-median atau *facility location* dengan biaya tetap $f_s$ dan biaya distribusi $d_{st}$:

$$\min_{y_s, z_{st}} \; \sum_s f_s y_s + \sum_{s,t} d_{st} z_{st}$$

$$\text{st.} \quad \sum_s z_{st} = 1, \quad z_{st} \leq y_s, \quad y_s, z_{st} \in \{0,1\}$$

**Tahap 3 — Sortasi & Refurbishment:** Modul baterai dibuka, sel diuji kapasitas individual (CCD — *Capacity Check & Discharge*), lalu dikelompokkan (*binning*) untuk menjaga keseragaman modul baru.

**Tahap 4 — Alokasi Echelon vs Recycling:** Gunakan solver MILP (misalnya Gurobi/CPLEX) dengan parameter dari §2 untuk mendapatkan $k_{ij} \in \{0,1\}$.

**Tahap 5 — Monitoring dan Closed-Loop Feedback:** Data SOH pasca-echelon di-*feed* ke OEM untuk iterasi kebijakan pembelian kembali $b_i$ pada periode berikutnya.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Numerik

Pertimbangkan sebuah OEM baterai LFP (LiFePO₄) di Asia Timur yang mengelola pensiun 50.000 unit baterai EV per tahun (tipe $i=1$, kapasitas 60 kWh per unit). Parameter industri diasumsikan realistis mengikuti benchmark BloombergNEF 2024:

| Parameter | Nilai | Satuan |
|---|---|---|
| $Q_1^{\text{total}}$ | 50.000 | unit/tahun |
| $c_1^{(e)}$ (echelonization) | 480 | USD/unit |
| $c_1^{(r)}$ (remanufacturing) | 950 | USD/unit |
| $p_1^{(e)}$ (harga ESS bertingkat) | 1.750 | USD/unit |
| $p_1^{(r)}$ (harga material daur ulang) | 620 | USD/unit |
| $b_1$ (buy-back price) | 220 | USD/unit |
| $\rho$ (collection rate) | 0,82 | – |
| $\tau_1$ (recovery kapasitas) | 0,88 | – |
| $K^{(e)}$ (kapasitas echelon) | 30.000 | unit/t.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
