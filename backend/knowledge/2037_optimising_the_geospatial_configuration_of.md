# 2037 — Optimasi Konfigurasi Geospasial Industri Daur Ulang Baterai Lithium-Ion dalam Transisi Kendaraan Listrik dan Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Optimisasi Geospasial Rantai Pasok Daur Ulang Baterai Li-ion, Sistem Dinamik Material Recovery, dan Integrasi Life Cycle Assessment pada Ekonomi Sirkular Baterai
**Jurnal & Sitasi Utama:** Viet Nguyen-Tien, Qiang Dai, Gavin Harper (2022). *Optimising the geospatial configuration of a future lithium ion battery recycling industry in the transition to electric vehicles and a circular economy.* **Applied Energy**, 318, 119230. DOI: [https://doi.org/10.1016/j.apenergy.2022.119230](https://doi.org/10.1016/j.apenergy.2022.119230)
**Sitasi Pendukung:** Raphael Ginster, Steffen Blömeke, Jan-Linus Popien (2024). *Circular battery production in the EU: Insights from integrating life cycle assessment into system dynamics modeling on recycled content and environmental impacts.* **Journal of Industrial Ecology**, 28(4), 1127-1143. DOI: [https://doi.org/10.1111/jiec.13527](https://doi.org/10.1111/jiec.13527)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju elektrifikasi kendaraan bermotor telah menciptakan paradoks lingkungan yang memerlukan solusi rekayasa sistem: di satu sisi, kendaraan listrik (EV) menjanjikan dekarbonisasi sektor transportasi melalui pengurangan emisi *tailpipe*, namun di sisi lain, baterai Lithium-ion (LiB) yang menjadi jantung teknologi ini akan menghasilkan volume limbah *end-of-life* (EoL) yang masif ketika armada EV mencapai akhir masa pakainya pada dekade 2030–2040. Seperti yang ditegaskan oleh Nguyen-Tien, Dai, dan Harper (2022, *Applied Energy*, DOI: [10.1016/j.apenergy.2022.119230](https://doi.org/10.1016/j.apenergy.2022.119230)), perhatian literatur ilmiah dan kebijakan industri secara berlebihan terfokus pada proses metalurgi daur ulang itu sendiri — baik pirometalurgi maupun hidrometalurgi — sambil mengabaikan dimensi sistemik yang lebih luas, yaitu konsentrasi biaya dan dampak lingkungan yang muncul dari **logistik, transportasi, dan konfigurasi geospasial fasilitas daur ulang**.

Kondisi ini menjadi semakin kritis karena tiga faktor simultan. Pertama, pertumbuhan EV diproyeksikan akan membengkakkan *stock* baterai di Uni Eropa dan Inggris secara eksponensial. Kedua, Regulasi Baterai Uni Eropa (EU Battery Regulation 2023/1542) menetapkan target wajib minimum konten daur ulang (*recycled content*) untuk baterai baru — misalnya 16% kobalt, 6% litium, dan 6% nikel pada 2031, naik menjadi 26%, 12%, dan 15% pada 2036 — sehingga menuntut kapasitas daur ulang yang sangat besar (Ginster, Blömeke, & Popien, 2024, *Journal of Industrial Ecology*, DOI: [10.1111/jiec.13527](https://doi.org/10.1111/jiec.13527)). Ketiga, biaya transportasi baterai EoL yang berat, berukuran besar, dan mengandung material berbahaya (kelas UN 3480/3481) dapat mendominasi total *life cycle cost* jika fasilitas daur ulang tidak ditempatkan secara optimal secara geografis.

Studi Nguyen-Tien dkk. (2022) menutup celah metodologis ini dengan membangun model **Geospatial Supply Chain (GSC)** yang mengintegrasikan analisis *life cycle*, optimisasi fasilitas (*facility location*), dan pemetaan dampak lingkungan untuk industri daur ulang LiB di Inggris. Sementara itu, Ginster dkk. (2024) melengkapi dari perspektif permintaan (*demand-side*) dengan **model dinamika sistem** yang mengintegrasikan *prospective life cycle assessment* untuk mengevaluasi apakah target regulasi EU tersebut secara realistis dapat dipenuhi oleh dinamika pasar dan material *post-consumer* semata, atau membutuhkan *post-production scrap*. Kedua paper ini bersama-sama membentuk kerangka analisis industri yang sangat relevan bagi para insinyur industri, perencana rantai pasok, dan pembuat kebijakan dalam merancang infrastruktur daur ulang baterai yang efisien dan berkelanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Geospasial Rantai Pasok (GSC) — Nguyen-Tien et al. (2022)

Nguyen-Tien, Dai, dan Harper (2022, DOI: [10.1016/j.apenergy.2022.119230](https://doi.org/10.1016/j.apenergy.2022.119230)) mengembangkan formulasi **Mixed Integer Linear Programming (MILP)** untuk menentukan jumlah, lokasi, dan kapasitas optimal fasilitas daur ulang. Model p-median yang digunakan dapat diformulasikan sebagai:

$$\min Z = \sum_{i \in I} \sum_{j \in J} c_{ij} \cdot d_{ij} \cdot x_{ij} + \sum_{j \in J} f_j \cdot y_j + \sum_{j \in J} p_j \cdot q_j$$

dengan kendala:

$$\sum_{j \in J} x_{ij} = 1, \quad \forall i \in I$$

$$x_{ij} \leq y_j, \quad \forall i \in I, j \in J$$

$$\sum_{i \in I} q_i \cdot x_{ij} \leq Q_j^{\max} \cdot y_j, \quad \forall j \in J$$

di mana:
- $I$ = himpunan titik permintaan (sumber baterai EoL)
- $J$ = himpunan kandidat lokasi fasilitas
- $c_{ij}$ = biaya transportasi per unit jarak
- $d_{ij}$ = jarak geospasial antara titik $i$ dan $j$
- $x_{ij}$ = variabel biner yang menyatakan alokasi
- $y_j$ = variabel biner untuk keputusan pembukaan fasilitas
- $f_j$ = *fixed cost* fasilitas $j$
- $p_j$ = biaya pemrosesan per unit di fasilitas $j$
- $q_i$ = volume baterai EoL di titik $i$
- $Q_j^{\max}$ = kapasitas maksimum fasilitas $j$

### 2.2 Model Emisi Logistik CO₂

Emisi CO₂ dari transportasi baterai EoL dihitung sebagai:

$$E_{\text{transport}} = \sum_{i \in I} \sum_{j \in J} \left( d_{ij} \cdot x_{ij} \cdot q_i \cdot \text{EF}_{\text{vehicle}} \right)$$

di mana $\text{EF}_{\text{vehicle}}$ adalah *emission factor* moda transportasi (kg CO₂eq / ton-km). Untuk truk berat (>12 ton) di Eropa, $\text{EF} \approx 0{,}0627$ kg CO₂eq/ton-km (Nguyen-Tien dkk., 2022).

### 2.3 Model Dinamika Sistem & Neraca Material — Ginster et al. (2024)

Ginster, Blömeke, dan Popien (2024, DOI: [10.1111/jiec.13527](https://doi.org/10.1111/jiec.13527)) mengintegrasikan **system dynamics** dengan **prospective LCA** melalui persamaan stok-aliran (*stock-flow*):

$$S_k(t+1) = S_k(t) + \Delta t \cdot \left( \text{Inflow}_k(t) - \text{Outflow}_k(t) \right)$$

Untuk material tertentu $k \in \{\text{Co, Li, Ni, Mn}\}$:

$$\text{Inflow}_k(t) = \text{Prod}_{\text{new}}(t) \cdot \text{Int}_k^{\text{new}} + R_k^{\text{recycled}}(t)$$

$$\text{Outflow}_k(t) = \sum_{\tau=1}^{L} B_{k,\tau}(t-\tau) \cdot \eta_k^{\text{recovery}}$$

dengan $L$ = umur pakai baterai (8–12 tahun untuk EV), $\eta_k^{\text{recovery}}$ = efisiensi recovery material (Co ≈ 95%, Ni ≈ 90%, Li ≈ 70–80% pada hidrometalurgi), dan $B_{k,\tau}$ = baterai yang pensiun di tahun $t-\tau$.

**Recycled content target** untuk baterai baru didefinisikan sebagai:

$$\text{RC}_k(t) = \frac{R_k^{\text{recycled}}(t)}{\text{Prod}_{\text{new}}(t) \cdot \text{Int}_k^{\text{new}}} \geq \text{Target}_k^{\text{EU}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berikut adalah arsitektur SOP yang diturunkan dari integrasi kedua paper untuk proyek infrastruktur daur ulang baterai LiB:

**Fase 1 — Pemodelan Permintaan & Stok Baterai (3–6 bulan)**
1. Kompilasi data registrasi kendaraan listrik (UK DVLA / Eurostat).
2. Estimasi distribusi masa pakai baterai dengan kurva Weibull: $f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-(t/\eta)^\beta}$ dengan $\beta \approx 2{,}5$, $\eta \approx 10$ tahun.
3. Proyeksi volume EoL: $V_{\text{EoL}}(t) = \sum_{\text{cohort}} N_{\text{EV,cohort}} \cdot P_{\text{retire}}(t)$.

**Fase 2 — Geospasial Demand Mapping (2–4 bulan)**
4. Disagregasi stok baterai ke level NUTS-3 (UK) atau NUTS-2 (EU) berdasarkan data geografis.
5. Pembangkitan *candidate facility locations* dengan skor kepadatan EoL, jarak ke moda transportasi (pelabuhan, rel), dan zona industri.

**Fase 3 — Optimisasi Fasilitas (2–3 bulan)**
6. Formulasi dan求解 MILP (Gurobi/CPLEX) dengan parameter biaya transportasi dari UK Department for Transport (£0,15–0,30/ton-km untuk limbah berbahaya).
7. Analisis sensitivitas terhadap skenario adopsi EV (Base, High, Low).

**Fase 4 — Penilaian Lingkungan (3–4 bulan)**
8. Perhitungan LCA cradle-to-gate untuk proses pirometalurgi vs hidrometalurgi menggunakan SimaPro/openLCA.
9. Agregasi emisi: $E_{\text{total}} = E_{\text{transport}} + E_{\text{process}} - E_{\text{avoided}}$ (kredit material sekunder).

**Fase 5 — Validasi Kebijakan & Iterasi (2–3 bulan)**
10. Benchmark terhadap EU Battery Regulation dan *Critical Raw Materials Act*.
11. Iterasi jika target RC tidak tercapai dengan sumber *post-consumer* saja → integrasikan *post-production scrap*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Jaringan Daur Ulang LiB Inggris 2035 (Disesuaikan dari Nguyen-Tien dkk., 2022)

**Asumsi Input:**
- Populasi EV Inggris 2035: $N_{\text{EV}} = 4{,}5$ juta unit (skenario *High Adoption*)
- Kapasitas baterai rata-rata: $C_{\text{bat}} = 60$ kWh
- Intensitas material: Co = 0,15 kg/kWh, Ni = 0,55 kg/kWh, Li = 0,12 kg/kWh
- Masa pakai rata-rata: $\bar{L} = 10$ tahun; proporsi pensiun 2035: 8%
- $Q_j^{\max} = 25{,}000$ ton/tahun per fasilitas (skala sedang)
- Biaya tetap fasilitas: $f_j = £15$ juta; biaya proses: $p_j = £1{,}200$/ton
- $c_{ij} = £0{,}22$/ton-km; $d_{ij}$ berbasis matriks jarak NUTS-3 Inggris

**Langkah 1: Hitung volume baterai pensiun 2035**

$$\text{Baterai pensiun} = 0{,}08 \times 4{,}500{,}000 = 360{,}000 \text{ unit}$$

$$V_{\text{EoL}} = 360{,}000 \times 60 \text{ kWh} \times \omega_{\text{bat}}$$

dengan densitas energi tipikal $\omega \approx 0{,}15$ kg/kWh → massa total:

$$M_{\text{EoL}} = 360{,}000
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
