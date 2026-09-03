# 2853 — Strategi Rantai Pasok Closed-Loop untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain (CLSC) untuk Baterai Power Bekas Pakai, Pemanfaatan Bertingkat (Echelon Utilization), Remanufaktur dan Daur Ulang
**Jurnal & Sitasi Utama:** JIANG, L. & TANG, L. (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** SHIN, Y., KIM, G. & JEONG, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju elektrifikasi kendaraan dan dekarbonisasi sistem energi telah mendorong peningkatan eksponensial produksi baterai lithium-ion (LiB) — baterai daya (*power battery*) — yang diproyeksikan menembus 4.500 GWh kapasitas manufaktur global per tahun pada 2030 (IEA, 2024). Peningkatan ini secara simultan menciptakan **ledakan baterai pensiun** (*retired power battery* — RPB), karena baterai kendaraan listrik (EV) umumnya mengalami degradasi kapasitas hingga 70–80% setelah 8–10 tahun operasi, sehingga tidak layak untuk aplikasi traksi tetapi masih memiliki sisa kapasitas 60–80% yang sangat berguna untuk aplikasi stasioner. JIANG & TANG (2025) dalam makalah mereka di *14th ICLSE 2024* menekankan bahwa penanganan RPB melalui pola *landfill* atau pembuangan tidak terstruktur bukan hanya bertentangan dengan prinsip ekonomi sirkular tetapi juga menimbulkan risiko lingkungan dan ekonomi material strategis yang sangat tinggi — lithium, kobalt, dan nikel adalah *critical raw materials* dengan indeks Herfindahl-Hirschman konsentrasi negara produsen di atas 0,6.

Konsep **Closed-Loop Supply Chain (CLSC)** menjadi kerangka solusi dominan untuk permasalahan ini. Berbeda dengan *forward supply chain* linier tradisional (produsen → distributor → konsumen), CLSC mengintegrasikan aliran balik (*reverse logistics*) dari produk akhir masa pakai ke proses pemulihan nilai melalui **pemanfaatan bertingkat** (*echelon/cascade utilization*), **remanufaktur** (*remanufacturing*), dan **daur ulang material** (*recycling*). JIANG & TANG (2025) secara eksplisit memformulasikan strategi tiga-tingkat (*three-tier echelon*) untuk RPB: (i) aplikasi sekunder stasioner seperti *storage* energi terbarukan, (ii) remanufaktur sel menjadi paket baterai baru, dan (iii) daur ulang logam melalui proses hidrometalurgi dan pirometalurgi.

Kompleksitas meningkat ketika mempertimbangkan ketidakpastian permintaan, fluktuasi harga logam, kualitas RPB yang heterogen (state-of-health/SoH bervariasi), dan perilaku strategis para pemangku kepentingan (*stakeholders*): manufaktur baterai OEM, operator daur ulang pihak ketiga (*third-party recycler* — TPR), operator *echelon*, dan regulator. SHIN, KIM & JEONG (2024) dalam *Peer-Reviewed Journal* menyoroti bahwa kelemahan utama model CLSC deterministik adalah kerentanannya terhadap *worst-case scenarios* ketika parameter pasar menyimpang dari nilai nominal. Mereka mengusulkan pendekatan **robust optimization** berbasis *Bertsimas-Sim* polyhedral uncertainty set yang menjamin *feasibility* dan *profitability* di bawah seluruh realisasi ketidakpastian dalam himpunan ketidakpastian (*uncertainty budget* Γ).

Urgensi operasional dan ekonomis dari riset ini diperkuat oleh regulasi强制 (mandatori) dari berbagai yurisdiksi: *EU Battery Regulation 2023/1542* menetapkan target daur ulang 65% untuk baterai LiB pada 2025 dan 70% pada 2030,回收率 (*recovery rate*) material wajib (Co 90%, Ni 95%, Li 50%) pada 2027, serta kewajiban *Extended Producer Responsibility* (EPR). Tiongkok, pasar baterai EV terbesar dunia, juga menerapkan kebijakan *Whole Life Cycle Management* melalui GB/T 34014-2017. Indonesia sebagai pemain baru dalam ekosistem baterai EV (melalui proyek hilirisasi nikel dan baterai PT Industri Baterai Indonesia/IBC) membutuhkan kerangka CLSC indigenous untuk memanfaatkan peluang ekonomi sirkular senilai miliaran dolar AS.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CLSC Tiga-Echelon untuk Baterai Pensiunan

JIANG & TANG (2025) mengusulkan arsitektur CLSC yang terdiri dari entitas keputusan berikut:

- **Produsen baterai OEM (M)**: Memproduksi baterai baru dan menerima kembali RPB.
- **Pusat echelon (E)**: Melakukan penilaian SoH, sortasi, dan pemanfaatan bertingkat untuk aplikasi sekunder stasioner.
- **Pusat remanufaktur/recycling (R)**: Melakukan regenerasi sel dan/atau ekstraksi material berharga.

Permainan dimodelkan sebagai **Stackelberg game** tiga-tingkat di mana M sebagai *leader* menetapkan *wholesale price* ($w$) dan *trade-in price* ($b$), E sebagai *follower* tingkat-1 menentukan *remanufacturing price* ($p_e$) dan volume echelon ($q_e$), sementara R sebagai *follower* tingkat-2 menetapkan *recycling price* ($p_r$) dan volume daur ulang ($q_r$).

### 2.2 Formulasi Fungsi Profit

Fungsi profit untuk masing-masing entitas, mengikuti struktur JIANG & TANG (2025):

$$\Pi_M = (p - w - c_m)q + (b - c_c)Q_b - c_p q_p - \alpha Q_{ret}$$

$$\Pi_E = (p_e - c_e - b)q_e - \kappa_e (q_e)^2$$

$$\Pi_R = (p_r - c_r - b)q_r + \delta (s_r - c_{disposal}) Q_{ret}$$

di mana:

- $p$ = harga ritel baterai baru,
- $c_m$ = biaya produksi marginal OEM,
- $q$ = volume penjualan baterai baru,
- $c_c$ = biaya logistik回收 (*collection*),
- $Q_b$ = total baterai pensiun yang dikumpulkan,
- $b$ = *trade-in price* (subsidi回收),
- $c_p$ = biaya proses回收 OEM,
- $q_p$ = volume RPB yang diproses OEM,
- $\alpha$ = koefisien dampak lingkungan,
- $Q_{ret}$ = baterai pensiun yang tidak masuk CLSC,
- $c_e$ = biaya echelon per unit,
- $\kappa_e$ = koefisien biaya kuadratik operasi echelon,
- $p_r, c_r$ = harga jual dan biaya回收 material,
- $\delta$ = binary variable (1 jika *closed-loop*, 0 sebaliknya),
- $s_r$ = subsidi daur ulang,
- $c_{disposal}$ = biaya disposal.

### 2.3 Fungsi Permintaan

Permintaan pasar mengikuti model linear klasik CLSC yang juga diadopsi SHIN, KIM & JEONG (2024):

$$q = a - \beta p + \gamma b$$

di mana $a$ adalah potensi pasar, $\beta$ sensitivitas harga ritel, dan $\gamma$ sensitivitas *trade-in price* (subsidi回收 mendorong substitusi tepat waktu).

### 2.4 Formulasi Robust Counterpart (SHIN, KIM & JEONG, 2024)

Untuk menangani ketidakpastian parameter permintaan $(\tilde{a}, \tilde{\beta}, \tilde{\gamma})$, SHIN, KIM & JEONG (2024) menggunakan himpunan ketidakpastian polyhedral Bertsimas-Sim:

$$\mathcal{U} = \left\{ \tilde{a}, \tilde{\beta}, \tilde{\gamma} \,\Big|\, \tilde{a} = a_0 + \hat{a}z_a,\ \tilde{\beta} = \beta_0 + \hat{\beta}z_\beta,\ \tilde{\gamma} = \gamma_0 + \hat{\gamma}z_\gamma,\ \sum|z_i| \leq \Gamma \right\}$$

di mana $z_i \in [-1, 1]$ adalah variabel deviasi, dan $\Gamma \in [0, 3]$ adalah *uncertainty budget* yang mengendalikan tingkat konservatisme solusi robust.

Formulasi robust counterpart untuk kendala non-negatifitas permintaan menjadi:

$$q = a_0 - \hat{a}\Gamma_a - (\beta_0 + \hat{\beta}\Gamma_\beta)p + (\gamma_0 - \hat{\gamma}\Gamma_\gamma)b \geq 0$$

dengan pemilihan $\Gamma_a + \Gamma_\beta + \Gamma_\gamma \leq \Gamma$.

### 2.5 Keseimbangan Aliran (Mass Balance)

Konservasi massa baterai pada sistem CLSC:

$$Q_b = q_p + q_e + q_r + Q_{ret}$$

$$\sum_{i \in \{p,e,r,ret\}} q_i = Q_b$$

dengan kapasitas proses: $0 \leq q_p \leq K_p$, $0 \leq q_e \leq K_e$, $0 \leq q_r \leq K_r$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses Implementasi

Berdasarkan sintesis dari kedua paper, berikut adalah SOP rekayasa untuk implementasi CLSC baterai pensiun:

```
[END-OF-LIFE BATTERY COLLECTION]
        │
        ▼
[STEP 1: Identification & Tagging] — EPC QR Code, GB/T 34014
        │
        ▼
[STEP 2: Initial Sorting & Safety Check] — Voltage < 0V isolation, leakage test
        │
        ▼
[STEP 3: State-of-Health (SoH) Assessment] — Capacity test, IR measurement
        │
        ├── SoH ≥ 80% → [BRANCH: Reuse/Repurpose for Traction] → Re-qualification
        ├── SoH 60–80% → [BRANCH: Echelon Utilization] → Stationary storage
        ├── SoH 40–60% → [BRANCH: Remanufacturing] → Cell grading & re-pack
        └── SoH < 40% → [BRANCH: Recycling] → Hydro/Pyrometallurgy
```

### 3.2 Prosedur Penilaian SoH Standar Industri

Sesuai ISO 12405-4 dan IEC 62933-2-1, prosedur penilaian SoH baterai pensiun mengikuti langkah:

1. **Pre-conditioning**: Siklus charge-discharge standar pada $C/3$ rate dengan suhu $25 \pm 2°C$ selama 3 siklus penuh.
2. **Capacity Measurement**: Discharge pada $I = C/3$ A sampai cut-off voltage, hitung $C_{measured}$.
3. **SoH Calculation**: $SoH = \dfrac{C_{measured}}{C_{nominal}} \times 100\%$.
4. **Internal Resistance Test**: AC impedance spectroscopy pada 1 kHz.
5. **Decision Routing**: Algoritma *fuzzy logic* atau *random forest* menentukan cabang disposal.

### 3.3 Optimisasi Stackelberg dan Robust Counterpart

Langkah penyelesaian:

1. Formulasikan *MPEC* (Mathematical Program with Equilibrium Constraints).
2. Substitusikan reaksi optimal E dan R (dari kondisi KKT *follower*) ke fungsi profit M.
3. Ubah menjadi *MILP/MIQP* tunggal.
4. Untuk robust counterpart: ganti parameter nominal dengan ekspresi worst-case sesuai himpunan $\mathcal{U}$.
5. Selesaikan menggunakan Gurobi/CPLEX untuk presisi, atau *alternating direction method of multipliers* (ADMM) untuk skalabilitas.

### 3.4 Indikator Kinerja Utama (KPI)

| KPI | Formula | Target Industri |
|---|---|---|
| Recovery Rate | $R_r = (q_e + q_r)/Q_b$ | $\geq 65\%$ (EU 2025) |
| Echelon Yield | $\eta_e = q_e^{used}/q_e^{collected}$ | $\geq 85\%$ |
| Profit Margin CLSC | $\Pi_{total}/Q_b$ | $\geq \$45$/kWh |
| $\text{CO}_2$ Avoided | $E_{recycled} \times \xi$ | $\geq 70\%$ baseline |

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Studi Kasus Konsorsium Baterai EV Indonesia)

Mengacu pada data operasional hipotetis yang realistis untuk pasar baterai EV Indonesia 2030 dengan volume回收 50.000 unit baterai (≈ 2 GWh total):

| Parameter | Nilai | Unit | Sumber |
|---|---|---|---|
| $a_0$ (potential pasar) | 120.000 | unit/thn | Asumsi |
| $\beta_0$ | 1,8 | unit/\$ | Kalibrasi |
| $\gamma_0$ | 0,9 | unit/\$ | Kalibrasi |
| $c_m$ | 95 | \$/unit | BloombergNEF |
| $c_e$ | 18 | \$/unit | JIANG & TANG (2025) |
|$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
