# 1973 — Strategi Rantai Pasok Closed-Loop untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Daya Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahulan dan Konteks Industri

Pertumbuhan eksponensial industri *New Energy Vehicle* (NEV) global — khususnya di Tiongkok yang menembus lebih dari 8,1 juta unit penjualan tahunan dan mendorong total armada NEV kumulatif melewati 30 juta unit per akhir 2023 — telah menciptakan *“tsunami pensiun”* baterai lithium-ion (LIB) berskala masif yang menuntut rekayasa rantai pasok baru. Baterai lithium-ion (state-of-health, SOH < 70–80%) yang pensiun dari aplikasi kendaraan listrik tidak lagi memenuhi spesifikasi otomotif, namun kapasitasnya masih layak untuk aplikasi *second-life* seperti penyimpanan energi stasioner (BESS), lampu jalan surya, forklift listrik, dan telekomunikasi *off-grid*. Fenomena ini melahirkan konsep **Echelon Utilization (EU)** — pemanfaatan bertingkat — yang harus diorkestrasikan secara simultan dengan *recycling remanufacturing* dalam satu ekosistem *Closed-Loop Supply Chain* (CLSC).

JIANG Lin dan TANG Lidan (2025) dalam makalahnya yang diterbitkan di *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* berargumen bahwa strategi CLSC tradisional yang hanya mempertimbangkan daur ulang akhir-akhir (*end-of-life recycling*) tidak cukup untuk menangkap nilai residual baterai pensiun. Mereka mengusulkan kerangka keputusan tiga-arah antara OEM baterai (sebagai *Stackelberg leader*), *echelon integrator* (perusahaan yang menangani *second-life*), dan *recycler* (perusahaan daur ulang material), di bawah ketidakpastian harga logam, kualitas baterai kembali, dan permintaan pasar *second-life*. DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068).

Urgensi operasional muncul dari tiga faktor konkuren: (1) **tekanan regulasi** — Petunjuk Teknis EU Battery Regulation 2023/1542 dan standar Cina GB/T 34014-2017 mewajibkan tingkat回收 (*recycling rate*) dan *echelon utilization rate* minimal tertentu; (2) **tekanan ekonomi** — harga litium karbonat berfluktuasi dari USD 80.000/ton (2022) ke USD 13.000/ton (2024), mengubah secara drastis kelayakan ekonomi recycling; (3) **tekanan teknis** — baterai pensiun memiliki heterogenitas SOH yang tinggi (σ SOH ≈ 8–15%), menyulitkan keputusan sortasi dan grading. Dalam konteks ini, Shin, Kim, & Jeong (2024) menekankan pentingnya **robust optimization** dalam *Return Management System* (RMS) untuk menyerap ketidakpastian tersebut tanpa mengorbankan profitabilitas CLSC. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197). Tanpa strategi CLSC yang matang, perusahaan menghadapi *stranded asset risk* dan potensi penalti lingkungan yang signifikan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Stackelberg Tiga-Eselon

JIANG & TANG (2025) memformulasikan CLSC baterai pensiun sebagai permainan *Stackelberg* berjenjang:

$$
\Gamma = \langle \{O, E, R\}, \{w, p_e, p_r\}, \{q_o, q_e, q_r\}, \{\Pi_O, \Pi_E, \Pi_R\} \rangle
$$

di mana **O** = OEM/manufaktur baterai, **E** = *echelon integrator*, **R** = *recycler*. Notasi: $w$ = harga transfer baterai pensiun dari O ke E dan R; $p_e$ = harga jual produk *second-life*; $p_r$ = harga jual material daur ulang (litium, kobalt, nikel); $q_o, q_e, q_r$ = alokasi kuantitas baterai pensiun ke OEM internal, echelon, dan recycling.

### 2.2 Fungsi Keputusan Alokasi

Fungsi keputusan OEM menentukan fraksi alokasi baterai pensiun:

$$
\alpha^* = \arg\max_{\alpha \in [0,1]} \left[ (p_b - c_b) Q(1-\alpha) + (w - c_c)\alpha Q - C_{pen}(\alpha Q) \right]
$$

dengan $p_b$ = harga jual produk remanufaktur dari baterai internal, $c_b$ = biaya remanufaktur internal, $c_c$ = biaya pengumpulan & inspeksi baterai pensiun, $C_{pen}(\cdot)$ = fungsi penalti regulasi jika tingkat *recycling rate* $\alpha$ di bawah mandat minimum $\alpha_{min}$. Fungsi penalti dimodelkan sebagai:

$$
C_{pen}(x) = \beta \cdot [\alpha_{min} Q - x]^+ \cdot \mathbb{1}\{x < \alpha_{min} Q\}
$$

dengan $\beta$ = koefisien penalti per unit baterai yang tidak didaur ulang, dan $[\cdot]^+$ adalah *positive part*.

### 2.3 Model Permintaan *Second-Life* dengan Sensitivitas Harga

JIANG & TANG (2025) mengadopsi permintaan linear-deterministik untuk pasar *second-life*:

$$
D_e(p_e) = K_e - \theta_e p_e + \delta_e \mathbb{E}[q_o]
$$

di mana $K_e$ = permintaan potensial maksimum BESS *second-life*, $\theta_e$ = elastisitas harga, $\delta_e$ = efek *complementarity* antara baterai remanufaktur OEM dan produk *second-life*. Ekspektasi $\mathbb{E}[q_o]$ menangkap efek jaringan (*network effect*) antar lini produk baterai.

### 2.4 Formulasi *Robust Counterpart* (dari Shin, Kim, & Jeong, 2024)

Untuk menyerap ketidakpastian SOH baterai kembali ($\tilde{\xi} \in \mathcal{U}$), Shin, Kim, & Jeong (2024) menggunakan himpunan ketidakpastian kotak (*box uncertainty*):

$$
\mathcal{U} = \left\{ \tilde{\xi} : \tilde{\xi} = \bar{\xi} + \Delta, \; |\Delta_i| \le \hat{\xi}_i, \; i \in \mathcal{I} \right\}
$$

*Robust counterpart* dari masalah keputusan CLSC menjadi:

$$
\min_{x \in \mathcal{X}} \max_{\tilde{\xi} \in \mathcal{U}} \left\{ c^T x + b(\tilde{\xi})^T y : A x + B(\tilde{\xi}) y \ge d(\tilde{\xi}) \right\}
$$

dengan引入 *budget of uncertainty* $\Gamma_0$ untuk mengendalikan konservatisme model. Penyelesaian analitis menggunakan dekomposisi primal melalui *cutting-plane* atau pendekatan *Bertsimas-Sim* yang menghasilkan bentuk *mixed-integer linear programming* (MILP) yang dapat diselesaikan oleh *solver* CPLEX/Gurobi.

---

## 3. Metodologi Rekayasa & SOP Implementasi CLSC Baterai Pensiun

### 3.1 Arsitektur Enam-Tahap Closed-Loop

JIANG & TANG (2025) merancang SOP rekayasa enam-tahap yang menjadi standar prosedural pada integrator baterai di Cina:

**Tahap 1 — Akuisisi & Reverse Logistics.** Penjemputan baterai pensiun dari operator armada NEV, dealer, dan *battery swap station*. Rute optimal dimodelkan sebagai *Vehicle Routing Problem with Time Windows* (VRPTW):

$$
\min \sum_{k \in K} \sum_{(i,j) \in A} c_{ij} x_{ijk}
$$

dengan kendala kapasitas, jendela waktu, dan risiko kebocoran termal.

**Tahap 2 — Diagnostik & Grading SOH.** Pengujian kapasitas (mis. tester Arbin LBT), impedansi AC (EIS), dan *thermal imaging*. Baterai diklasifikasikan: **Grade A** (SOH ≥ 80%, layak aplikasi otomotif *refurbish*); **Grade B** (60% ≤ SOH < 80%, layak *second-life*); **Grade C** (SOH < 60%, layak *recycling*).

**Tahap 3 — Sorting untuk Echelon vs Recycling.** Keputusan sortasi menggunakan *threshold rule*:

$$
\text{Sortasi ke Echelon jika } \quad SOH_i \ge \tau^* = \frac{c_r - w_e}{p_e^{used} - c_r + c_e^{life2}}
$$

di mana $c_r$ = biaya recycling per unit, $w_e$ = harga transfer ke integrator echelon, $p_e^{used}$ = harga jual BESS bekas, $c_e^{life2}$ = biaya tambahan pengkondisian *second-life*.

**Tahap 4 — Refurbish / Remanufaktur (Grade A).** Penggantian modul sel rusak, *rebalancing*, dan uji siklus ulang sesuai GB/T 34014-2017.

**Tahap 5 — Repackaging Echelon (Grade B).** Modul baterai bekas dirakit ulang menjadi pack BESS kapasitas lebih besar (mis. 1 MWh), dengan *Battery Management System* (BMS) baru dan *certification of second life*.

**Tahap 6 — Material Recycling (Grade C).** Proses *hydrometallurgical* (pengasaman + presipitasi) atau *pyrometallurgical* (smelting) untuk mengekstraksi Li, Co, Ni dengan target recovery rate ≥ 95% untuk Co/Ni.

### 3.2 Diagram Alir Logika Keputusan

```
┌──────────────────────┐
│ Koleksi Baterai Pensiun│
└──────────┬───────────┘
           ▼
┌──────────────────────┐
│ Uji SOH & Diagnosis  │
└──────────┬───────────┘
           ▼
   ┌───────┴────────┐
   ▼                ▼
SOH ≥ 80%       60% ≤ SOH < 80%
   │                │
   ▼                ▼
Refurbish      Echelon Use
(OEM internal)  (BESS/Second-Life)
   │                │
   ▼                ▼
Penjualan      Pemanfaatan
Remanufaktur   Stasioner
   │                │
   ▼                ▼
┌──────────────────────┐
│ Material Recovery    │
│ (Pyro/Hydromet)      │
└──────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Data Parameter Industri (Studi Kasus NEV di Cina Timur, 2024)

Asumsikan integrator menerima **Q = 50.000 unit** baterai pensiun per tahun dengan SOH rata-rata $\mu_{SOH} = 68\%$ dan standar deviasi $\sigma_{SOH} = 10\%$. Parameter biaya dan harga (yuan/unit baterai) mengikuti konvensi JIANG & TANG (2025):

| Parameter | Simbol | Nilai |
|---|---|---|
| Harga jual remanufaktur | $p_b$ | 18.000 ¥ |
| Biaya remanufaktur internal | $c_b$ | 9.500 ¥ |
| Harga jual BESS *second-life* | $p_e^{used}$ | 7.200 ¥ |
| Harga jual material daur ulang | $p_r$ | 2.400 ¥ |
| Biaya pengumpulan & inspeksi | $c_c$ | 800 ¥ |
| Biaya konversi *second-life* | $c_e^{life2}$ | 1.500 ¥ |
| Biaya *recycling* per unit | $c_r$ | 1.200 ¥ |
| Koefisien penalti regulasi | $\beta$ | 6.000 ¥ |
| Target回收 rate | $\alpha_{min}$ | 0,30 |
| Elastisitas permintaan | $\theta_e$ | 0,8 |
| Permintaan potensial BESS | $K_e$ | 35.000 unit |

### 4.2 Perhitungan Sortasi Optimal $\tau^*$

$$
\tau^* = \frac{c_r - w_e}{p_e^{used} - c_r + c_e^{life2}} = \frac{1.200 - w_e}{7.200 - 1.200 + 1.500} = \frac{1.200 - w_e}{7.500}
$$

Dengan asumsi harga transfer OEM → integrator $w_e = 1.400$ ¥:

$$
\tau^* = \frac{1.200 - 1.400}{7.500} = \frac{-200}{7.500} = -0{,}0267
$$

Karena $\tau^*$ bernilai negatif, artinya **SEMUA baterai pensiun layak dikirim ke echelon integrator** — secara ekonomi, *second-life* lebih menguntungkan daripada recycling langsung ketika biaya daur ulang mendekati harga transfer. Langkah ini selanjutnya dikonfirmasi