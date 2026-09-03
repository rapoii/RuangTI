# 2901 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Berjenjang (Echelon Utilization) dan Daur Ulang Remanufaktur Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain (CLSC) dengan Pemanfaatan Berjenjang dan Remanufaktur Baterai Bekas Kendaraan Listrik
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global—diproyeksikan menembus 145 juta unit pada 2030 menurut IEA Global EV Outlook—menghadirkan tantangan rantai pasok reversibel yang sangat kompleks. Setiap baterai lithium-ion (LIB) memiliki masa pakai siklus terbatas, biasanya 1.000–2.000 siklus pengisian atau degradasi kapasitas hingga 70–80% dari kapasitas awal (*State of Health*, SOH = 70–80%). Ketika kapasitas efektif turun di bawah ambang utilisasi kendaraan (umumnya 70–80%), baterai tersebut diklasifikasikan sebagai *retired EV battery* dan harus dialihkan ke jalur kedua (*second life*). JIANG Lin & TANG Lidan (2025) menekankan bahwa jutaan unit baterai pensiun akan memasuki arus *End-of-Life* (EoL) dalam dekade ini, sehingga memunculkan kebutuhan akan arsitektur CLSC yang secara simultan mengakomodasi tiga sub-sistem kritis: (1) *Echelon Utilization* (pemanfaatan berjenjang, mis. sebagai *stationary energy storage system*/SESS untuk fotovoltaik atau *peak shaving* industri), (2) *Remanufacturing* (rekonstruksi sel/modul menjadi baterai baru dengan jaminan performa setara OEM), dan (3) *Recycling* (ekstraksi material kritis seperti litium, kobalt, nikel, dan mangan). DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068).

Urgensi teknis dan ekonominya bersifat multidimensional. Pertama, **urgensi material kritis**: rasio *supply-demand* kobalt dan litium diproyeksi defisit masing-masing 40% dan 35% pada 2030 (IEA, 2024). Kedua, **urgensi regulasi**: Regulasi Uni Eropa *Battery Regulation 2023/1542* menetapkan target daur ulang 65% LIB pada 2025 dan 70% pada 2030, dengan kewajiban *Extended Producer Responsibility* (EPR). Ketiga, **urgensi ekonomis**: biaya produksi baterai baru dapat ditekan hingga 30–40% jika 50% kobalt dan 30% litium dipasok dari sumber daur ulang (*closed-loop material recovery*). Shin, Kim, & Jeong (2024) menambahkan dimensi baru: rantai pasok ini harus *robust* terhadap ketidakpastian *return rate*, fluktuasi harga material, dan perilaku konsumen terhadap program *reverse logistics*. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197).

Konteks operasional melibatkan tujuh *stakeholder*: OEM baterai (produsen sel/pack), *collection network* (dealer, *service center*, titik pengumpulan), *echelon operator* (utilitas listrik, integrator SESS), *remanufacturing facility* (pabrik refurbishment), *recycling smelter* (fasilitas hidrometalurgi/prometalurgi), *secondary market* (pembeli second-life), serta *regulator*. Tantangan utama terletak pada *reverse logistics network design* yang optimal: bagaimana mengalokasikan baterai pensiun ke salah satu dari tiga jalur (echelon, remanufacturing, recycling) untuk memaksimumkan nilai ekonomi sekaligus meminimumkan emisi CO₂ dan biaya total sistem.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC yang diajukan JIANG & TANG (2025) bersama ekstensi robust dari Shin, Kim, & Jeong (2024) menggunakan kerangka **Mixed-Integer Linear Programming (MILP)** dengan formulasi *robust counterpart* Box不确定性.

### 2.1 Notasi Set, Parameter, dan Variabel Keputusan

**Himpunan:**
- $I = \{1,2,\dots,m\}$ — titik koleksi (*collection points*)
- $J = \{1,2,\dots,n\}$ — pusat echelon utilization
- $K = \{1,2,\dots,p\}$ — fasilitas remanufaktur
- $L = \{1,2,\dots,q\}$ — fasilitas daur ulang (*recycling*)
- $T = \{1,2,\dots,\tau\}$ — periode waktu diskret (bulanan/tahunan)

**Parameter:**
- $c_{ij}^{c}$ — biaya transportasi unit baterai dari titik $i$ ke pusat echelon $j$
- $c_{ik}^{r}$ — biaya transportasi dari $i$ ke fasilitas remanufaktur $k$
- $c_{il}^{d}$ — biaya transportasi dari $i$ ke fasilitas daur ulang $l$
- $p_j^{e}, p_k^{r}, p_l^{d}$ — harga jual output masing-masing (SESS, refurbished pack, recovered metal)
- $\theta^{e}, \theta^{r}, \theta^{d}$ — efisiensi proses (yield) echelon, remanufaktur, daur ulang
- $Q_j^{e}, Q_k^{r}, Q_l^{d}$ — kapasitas fasilitas
- $F_j, F_k, F_l$ — *fixed cost* aktivasi fasilitas
- $\tilde{R}_t$ — *return rate* baterai pensiun pada periode $t$ (variabel acak)
- $\Gamma$ — *budget of uncertainty* (parameter robust)

**Variabel keputusan:**
- $x_{ij}, x_{ik}, x_{il} \geq 0$ — alur baterai dari $i$ ke $j,k,l$
- $y_j, y_k, y_l \in \{0,1\}$ — aktivasi fasilitas (biner)
- $u_t$ — variabel auxiliary untuk *worst-case return*

### 2.2 Formulasi Nominal (Deterministik)

Fungsi tujuan utama meminimalkan total biaya sistem sekaligus memaksimalkan nilai pemulihan:

$$\min Z = \sum_{i\in I}\sum_{j\in J} c_{ij}^{c} x_{ij} + \sum_{i\in I}\sum_{k\in K} c_{ik}^{r} x_{ik} + \sum_{i\in I}\sum_{l\in L} c_{il}^{d} x_{il} + \sum_{j\in J} F_j y_j + \sum_{k\in K} F_k y_k + \sum_{l\in L} F_l y_l - \Pi^{e} - \Pi^{r} - \Pi^{d}$$

di mana nilai pemulihan total:

$$\Pi^{e} = \sum_{i\in I}\sum_{j\in J} p_j^{e} \theta^{e} x_{ij}, \quad \Pi^{r} = \sum_{i\in I}\sum_{k\in K} p_k^{r} \theta^{r} x_{ik}, \quad \Pi^{d} = \sum_{i\in I}\sum_{l\in L} p_l^{d} \theta^{d} x_{il}$$

**Kendala utama:**

(1) *Flow conservation* di titik koleksi:
$$\sum_{j\in J} x_{ij} + \sum_{k\in K} x_{ik} + \sum_{l\in L} x_{il} = R_t, \quad \forall i \in I$$

(2) Kapasitas fasilitas:
$$\sum_{i\in I} x_{ij} \leq Q_j^{e} y_j, \quad \sum_{i\in I} x_{ik} \leq Q_k^{r} y_k, \quad \sum_{i\in I} x_{il} \leq Q_l^{d} y_l$$

(3) *Allocation linkage* (variabel alur mengaktifkan fasilitas):
$$x_{ij} \leq M y_j, \quad x_{ik} \leq M y_k, \quad x_{il} \leq M y_l$$

### 2.3 Formulasi Robust Counterpart (Soyster/Bertsimas-Sim)

Mengikuti pendekatan Bertsimas & Sim (2004) yang diadaptasi Shin, Kim, & Jeong (2024), return rate $\tilde{R}_t$ didefinisikan dalam *uncertainty set* polihedral:

$$\mathcal{U} = \left\{ \tilde{R}_t : R_t^{nom} - \hat{R}_t z_t \leq \tilde{R}_t \leq R_t^{nom} + \hat{R}_t z_t, \; \sum_{t} z_t \leq \Gamma, \; 0 \leq z_t \leq 1 \right\}$$

Robust counterpart fungsi tujuan menjadi:

$$\min_{x,y} \max_{\tilde{R} \in \mathcal{U}} \left[ C^{T}x + F^{T}y - \Pi(x,\tilde{R}) \right]$$

Dualisasi menghasilkan formulasi MILP ekuivalen dengan variabel auxiliary $u_t \geq 0$:

$$\min \; C^{T}x + F^{T}y + \Gamma \, v + \sum_{t} w_t$$

subject to:
$$-p_j^{e}\theta^{e} x_{ij} + v + w_t \geq -p_j^{e}\theta^{e} R_t^{nom}, \quad \forall t$$
$$w_t \geq p_j^{e}\theta^{e} \hat{R}_t, \quad \forall t$$
$$u_t \geq 0, \, v \geq 0, \, w_t \geq 0$$

### 2.4 Multi-Objective Optimization dengan Sustainability Index

JIANG & TANG (2025) memperkenalkan indeks keberlanjutan $S$ yang mengintegrasikan emisi CO₂:

$$\max \; S = w_1 \cdot \text{Profit} - w_2 \cdot \text{Cost} - w_3 \cdot \text{CO}_2^{eq}$$

dengan bobot $w_1 + w_2 + w_3 = 1$, diselesaikan via *ε-constraint method* dan diselesaikan dengan algoritma NSGA-II untuk front Pareto.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai pensiun mengikuti arsitektur berlapis yang distandarkan oleh JIANG & TANG (2025) serta best-practice reverse logistics:

### 3.1 Diagram Alir Operasional (*Process Flowchart*)

```
[Pengguna EV] → [Modul BMS Laporkan SOH < 75%] 
     ↓
[Dealer/Otoritas Servis] → [Inspeksi & Klasifikasi Grade (A/B/C)]
     ↓
[Decision Gate: SOH ≥ 65% & Tegangan Sel Normal?]
   ├── YA → [Echelon Utilization Pathway]
   │            ↓
   │   [Disassembly → Cell Sorting → Reconfiguration → SESS/Storage Pack]
   │            ↓
   │   [Quality Test (Capacity, IR, Thermal)] → [Secondary Market