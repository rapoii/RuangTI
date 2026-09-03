# 2789 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Pembangkit Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju elektrifikasi kendaraan dan dekarbonisasi sektor energi telah memicu pertumbuhan eksponensial dalam populasi baterai lithium-ion (LIB) di seluruh dunia. International Energy Agency (IEA) memperkirakan bahwa volume baterai lithium-ion yang pensiun dari armada kendaraan listrik global akan melampaui 1,4 juta ton per tahun sebelum 2030, menciptakan tantangan logistik dan lingkungan berskala masif yang belum pernah terjadi sebelumnya dalam sejarah rantai pasok manufaktur (JIANG & TANG, 2025). Baterai bekas yang masih memiliki State of Health (SoH) antara 70–80% tidak boleh langsung didaur-ulang secara material, melainkan memiliki nilai ekonomi dan ekologis yang sangat tinggi apabila dimanfaatkan secara bertingkat (*echelon utilization*) — yaitu redeploy ke aplikasi sekunder seperti penyimpanan energi stasioner (*stationary energy storage systems*/SESS), telekomunikasi, atau *backup power* industri, sebelum akhirnya dilakukan *recycling* material murni (JIANG & TANG, 2025).

Dalam konteks ini, JIANG & TANG (2025) mengidentifikasi empat tantangan struktural utama dalam perancangan *closed-loop supply chain* (CLSC) baterai bekas: (1) **ketidakpastian kualitas** (*quality uncertainty*) — baterai pensiun memiliki degradasi kapasitas yang stokastik sehingga menyulitkan keputusan alokasi; (2) **ketidakpastian permintaan** pasar sekunder yang dipengaruhi oleh dinamika adopsi energi terbarukan; (3) **trade-off antara efisiensi biaya dan kinerja lingkungan**, di mana jalur *echelon utilization* memerlukan inspeksi dan *refurbishment* tambahan; serta (4) **koordinasi antar-aktor multi-stakeholder** yang mencakup OEM, *third-party echelon operators* (3PEOs), *recyclers*, dan *grid operators*. DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068).

Shin, Kim, & Jeong (2024) melengkapi kerangka tersebut dengan menyoroti bahwa strategi CLSC yang robust harus menginkorporasikan **sistem manajemen pengembalian (*return management system*/RMS)** yang mampu menangani dinamika waktu, kualitas, dan permintaan secara simultan. Mereka menekankan bahwa ketiadaan *return management* yang terstruktur merupakan *single point of failure* paling kritis dalam operasional CLSC baterai, dengan potensi kerugian rantai pasok mencapai 18–27% dari total *life-cycle value* baterai (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)).

Urgensi operasional dari topik ini bersifat strategis bagi Indonesia, di mana berdasarkan Roadmap Industri Kendaraan Listrik Nasional, lebih dari 30 juta unit motor listrik dan 1 juta unit mobil listrik ditargetkan beroperasi pada 2035, yang berarti akumulasi baterai pensiun akan menjadi masalah rantai pasok dalam 7–10 tahun ke depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Baterai Bekas

JIANG & TANG (2025) memformulasikan jaringan CLSC baterai bekas sebagai sistem multi-tier yang terdiri dari himpunan node $I$ (pusat koleksi/collection centers), $J$ (fasilitas echelon), $K$ (fasilitas remanufaktur/recycling), $L$ (pusat distribusi kembali ke pasar sekunder), dan $M$ (pasar aplikasi sekunder). Parameter-parameter keputusan utama adalah alokasi aliran baterai antar-tier dan pilihan moda perlakuan (*echelon* vs *direct recycling*).

### 2.2 Parameter & Variabel Keputusan

Definisikan parameter-parameter berikut:

- $Q_i$: jumlah baterai pensiun yang masuk di pusat koleksi $i$, dengan $\mathbb{E}[Q_i] = \mu_{Q_i}$ dan varians $\sigma^2_{Q_i}$.
- $\xi_{ij} \in [0,1]$: tingkat kualitas baterai yang dialokasikan dari node $i$ ke node $j$, dengan distribusi probabilitas $f(\xi_{ij})$.
- $c_{ij}^{trans}$: biaya transportasi per unit baterai dari $i$ ke $j$.
- $c_j^{ech}$: biaya echelon processing per unit di fasilitas $j$, termasuk inspeksi SoH, *refurbishment*, dan *repackaging*.
- $c_k^{rec}$: biaya daur-ulang material di fasilitas $k$.
- $p_l^{sec}$: harga jual baterai hasil echelon ke pasar sekunder $l$.
- $r_k^{mat}$: revenue recovery per unit material hasil daur-ulang (Li, Co, Ni).

Variabel keputusan biner dan kontinu:

$$
x_{ij} \in \{0,1\}, \quad y_{jk} \in \{0,1\}, \quad z_{jl} \in [0,1]
$$

di mana $x_{ij}$ mengindikasikan apakah jalur koleksi-i ke fasilitas-echelon-j aktif, $y_{jk}$ apakah baterai layak untuk didaur-ulang dari $j$ ke $k$, dan $z_{jl}$ fraksi baterai yang dialokasikan dari $j$ ke pasar sekunder $l$.

### 2.3 Fungsi Objektif Multi-Objektif

JIANG & TANG (2025) mengusulkan fungsi objektif *dual-criteria* berupa minimisasi total *life-cycle cost* (LCC) dan maksimisasi *environmental benefit score* (EBS):

$$
\min Z_1 = \sum_{i \in I} \sum_{j \in J} c_{ij}^{trans} x_{ij} + \sum_{j \in J} c_j^{ech} \sum_{i \in I} x_{ij} + \sum_{k \in K} c_k^{rec} \sum_{j \in J} y_{jk} \tag{1}
$$

$$
\max Z_2 = \sum_{l \in L} p_l^{sec} \sum_{j \in J} z_{jl} + \sum_{k \in K} r_k^{mat} \sum_{j \in J} y_{jk} - \alpha \cdot CO_2^{total} \tag{2}
$$

di mana $\alpha$ adalah koefisien konversi emisi $CO_2^{total}$ ke nilai moneter (carbon price), dan $CO_2^{total}$ dihitung sebagai:

$$
CO_2^{total} = \sum_{i,j} \epsilon_{ij}^{trans} x_{ij} + \sum_{j} \epsilon_j^{ech} \sum_i x_{ij} + \sum_k \epsilon_k^{rec} \sum_j y_{jk} \tag{3}
$$

dengan $\epsilon_{ij}^{trans}, \epsilon_j^{ech}, \epsilon_k^{rec}$ masing-masing adalah *carbon footprint* per unit (kg CO₂-eq).

### 2.4 Kendala Robust untuk Ketidakpastian Kualitas

Shin, Kim, & Jeong (2024) memperkenalkan *robust counterpart* berbasis ellipsoidal uncertainty set untuk menangani ketidakpastian SoH baterai. Jika $\tilde{\xi}_{ij}$ merepresentasikan parameter kualitas yang tidak pasti, dengan *nominal value* $\bar{\xi}_{ij}$ dan radius deviasi $\hat{\xi}_{ij}$, maka kendala alokasi yang *feasible under worst-case* menjadi:

$$
\sum_{j \in J} x_{ij} \bar{\xi}_{ij} \geq \xi_{ij}^{min} Q_i + \sqrt{\sum_{j \in J} \hat{\xi}_{ij}^2 u_j^2} \quad \forall i \in I \tag{4}
$$

dengan $u_j$ adalah *dual variable* dari subproblem worst-case, dan $\xi_{ij}^{min}$ adalah ambang batas kualitas minimum (misalnya SoH ≥ 70%) untuk layak echelon.

### 2.5 Kendala Kapasitas & Konservasi Aliran

$$
\sum_{j \in J} x_{ij} = Q_i, \quad \forall i \in I \tag{5}
$$

$$
\sum_{i \in I} x_{ij} = \sum_{l \in L} z_{jl} + \sum_{k \in K} y_{jk}, \quad \forall j \in J \tag{6}
$$

$$
\sum_{i \in I} x_{ij} \leq Cap_j^{ech}, \quad \sum_{j \in J} y_{jk} \leq Cap_k^{rec}, \quad \sum_{j \in J} z_{jl} \leq Dem_l^{sec} \tag{7}
$$

Formulasi lengkap di atas menghasilkan *Mixed-Integer Robust Program* (MIRP) yang diselesaikan dengan *Benders decomposition* atau *column-and-constraint generation* (CCG) algorithm sesuai rekomendasi JIANG & TANG (2025).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari strategi CLSC baterai bekas memerlukan **SOP 7-tahap** yang selaras dengan standar ISO 14001 (Environmental Management), IEC 62933-2-1 (Electrical Energy Storage Systems), dan SAE J2997 (Battery Recycling):

```
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 1: Reverse Logistics Trigger & Collection              │
│  → Aktivasi berdasarkan mileage (>150k km), age (>8 yr),      │
│    SoH monitoring via telematics OEM cloud                  │
├──────────────────────────────────────────────────────────────┤
│ TAHAP 2: Initial Triage & SoH Screening (di Collection Hub) │
│  → Coulomb counting + impedance spectroscopy test            │
│  → Binning: Tier-A (SoH 80-100%), B (70-80%), C (<70%)      │
├──────────────────────────────────────────────────────────────┤
│ TAHAP 3: Robust Allocation Optimization                     │
│  → Run MIRP model (Persamaan 1-7) dengan parameter uncertain │
│  → Output: keputusan Tier-A → SESS market, Tier-B → telco, │
│    Tier-C → direct recycling                                │
├──────────────────────────────────────────────────────────────┤
│ TAHAP 4: Echelon Refurbishment Process                       │
│  → Cell-balancing, module replacement, BMS reprogramming     │
│  → QC test sesuai UN 38.3 (transportation safety)            │
├──────────────────────────────────────────────────────────────┤
│ TAHAP 5: Secondary Market Deployment                         │
│  → Integration ke SESS dengan capacity warranty (≥5 yr)      │
│  → Contractual SLAs dengan grid operators                   │
├──────────────────────────────────────────────────────────────┤
│ TAHAP 6: End-of-Echelon Collection & Final Recycling         │
│  → Closed loop ke-2 untuk baterai Tier-A&B setelah lifetime │
│    sekunder berakhir → pyrometallurgy/hydrometallurgy        │
├──────────────────────────────────────────────────────────────┤
│ TAHAP 7: Material Recovery & Closed-Loop Material Feedstock  │
│  → Refined Li₂CO₃, CoSO₄, NiSO₄ ke cathode precursor       │
│  → KPI tracking: material recovery rate, carbon footprint    │
└──────────────────────────────────────────────────────────────┘
```

JIANG & TANG (2025) melaporkan bahwa implementasi SOP ini dengan parameter robust optimization menghasilkan peningkatan *second-life utilization rate* sebesar 23–31% dibandingkan dengan kebijakan *direct recycling only* baseline. Standar SOP ini selanjutnya dikonfirmasi oleh Shin, Kim, & Jeong (2024) yang menambahkan *return management dashboard* real-time sebagai komponen digital layer untuk memonitor parameter $\xi_{ij}$, $Q_i$, dan $Dem_l^{sec}$ secara kontinu.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Parameter Kasus

Pertimbangkan sebuah OEM kendaraan listrik di Indonesia yang harus mengelola pensiun baterai dari armada sebanyak 50.000 unit EV pada horizon perencanaan 5 tahun. Setiap baterai memiliki kapasitas awal $C_0 = 60$ kWh dan massa $m_b = 350$ kg.

**Tabel 1. Parameter Numerik CLSC Baterai Bekas**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $Q_1$ (tahun 1) | 10.000 | unit |
| Tingkat pensiun kumulatif | 50.000 | unit (5 tahun) |
| $c_{ij}^{trans}$ (rerata) | 45 | USD/unit |
| $c_j^{ech}$ | 120 | USD/unit |
| $c_k^{rec}$ | 80 | USD/unit |
| $p_l^{sec}$ (SESS) | 1.200 | USD/unit