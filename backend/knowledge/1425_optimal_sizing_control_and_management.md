# 1425 — Optimasi Sistem Energi Terbarukan Hibrida dan Manajemen Rantai Pasok Cold Chain: Sintesis Lintas Disiplin Teknik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Optimal Sizing, Control, and Management Strategies for Hybrid Renewable Energy Systems: A Comprehensive Review
**Jurnal & Sitasi Utama:** Akhlaque Ahmad Khan, Ahmad Faiz Minai, Rupendra Kumar Pachauri (2022). *Energies*. DOI: [https://doi.org/10.3390/en15176249](https://doi.org/10.3390/en15176249)
**Sitasi Pendukung:** Eyüp Ensar Işık, Seyda Topaloglu Yildiz (2023). *Expert Systems with Applications*. DOI: [https://doi.org/10.1016/j.eswa.2023.120510](https://doi.org/10.1016/j.eswa.2023.120510)

---

## 1. Pendahuluan dan Konteks Industri

Krisis energi global, volatilitas harga bahan bakar fosil, dan target dekarbonisasi Paris Agreement mendorong transformasi fundamental pada sektor pembangkitan listrik. Khan, Minai, dan Pachauri (2022) dalam *Energies* menekankan bahwa sumber energi terbarukan—meskipun abadi dan alami—memiliki kelemahan inheren berupa **intermittency** (ketidakstabilan output) yang menghambat adopsi skala besar. Sebagai respon, paradigma **Hybrid Renewable Energy System (HRES)** muncul sebagai solusi rekayasa dengan menggabungkan beberapa sumber (PV, wind, micro-hydro, biomassa) ditambah unit penyimpanan baterai dan genset cadangan untuk membentuk sistem energi yang andal, ekonomis, dan berkelanjutan (Khan dkk., 2022, DOI: [10.3390/en15176249](https://doi.org/10.3390/en15176249)).

Urgensi industri terhadap HRES bukan sekadar teknologis, melainkan multi-dimensi. Dari perspektif **ekonomi**, biaya Levelized of Energy (LCOE) PLTS dan PLTB telah turun masing-masing 89% dan 70% dalam dekade terakhir, sehingga kombinasi hybrid menjadi semakin kompetitif dibanding grid extension di area remote (Khan dkk., 2022). Dari perspektif **lingkungan**, HRES menekan emisi CO₂ hingga 80–95% dibanding sistem diesel-only. Dari perspektif **sosial**, elektrifikasi area rural dengan HRES terbukti meningkatkan Human Development Index (HDI) melalui akses terhadap layanan kesehatan, pendidikan, dan komunikasi digital.

Di sisi lain, rantai pasok farmasi—khususnya **cold chain vaccine distribution**—memiliki konsumsi energi refrigerasi yang sangat signifikan (2–8°C untuk mayoritas vaksin COVID-19). Işık dan Yildiz (2023) dalam *Expert Systems with Applications* menunjukkan bahwa 64–80% biaya operasional cold chain berupa energi pendinginan, sementara ketidakstabilan suhu memicu pemborosan vial hingga 25% secara global (DOI: [10.1016/j.eswa.2023.120510](https://doi.org/10.1016/j.eswa.2023.120510)). Interseksi dua domain ini—yaitu **penerapan HRES sebagai sumber energi sustainable untuk fasilitas cold chain**—merupakan tren riset mutakhir yang menggabungkan metodologi sizing optimal dari paper utama dengan framework robust optimization dari paper pendukung.

Dalam konteks Industri 4.0, integrasi HRES dengan cold chain logistics memungkinkan terciptanya **net-zero healthcare supply chain**, di mana fasilitas isolasi dingin di pelosok dapat beroperasi tanpa ketergantungan pada diesel genset yang mahal dan tidak ramah lingkungan. Hal ini menjadi esensi dari ruang lingkup modul ini: menyatukan metodologi sizing-kontrol-manajemen energi (Khan dkk., 2022) dengan formulasi robust optimization untuk distribusi farmasi (Işık & Yildiz, 2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Dasar HRES

Sistem HRES dimodelkan sebagai persamaan keseimbangan daya pada interval waktu diskrit $t$:

$$P_{PV}(t) + P_{WT}(t) + P_{DG}(t) + P_{BS}^{disch}(t) = P_L(t) + P_{BS}^{ch}(t)$$

di mana $P_{PV}$, $P_{WT}$, $P_{DG}$, $P_{BS}^{disch}$, $P_L$, dan $P_{BS}^{ch}$ berturut-turut adalah output daya fotovoltaik, turbin angin, diesel generator, baterai saat discharging, beban, dan baterai saat charging pada waktu $t$. Output PV dimodelkan:

$$P_{PV}(t) = N_{PV} \cdot P_{PV}^{rated} \cdot \frac{G(t)}{G_{STC}} \cdot [1 + \alpha_P (T_c(t) - T_{STC})]$$

dengan $G(t)$ adalah irradiance solar, $G_{STC} = 1000$ W/m², $\alpha_P$ koefisien suhu daya, dan $N_{PV}$ jumlah modul.

### 2.2. Fungsi Objektif: Minimasi LCOE

Khan dkk. (2022) menyatakan bahwa metrik utama kelayakan ekonomi HRES adalah **Levelized Cost of Energy (LCOE)**:

$$LCOE = \frac{\sum_{t=0}^{T} \frac{C_{cap} + C_{O\&M}(t) + C_{fuel}(t) + C_{replace}(t)}{(1+r)^t}}{\sum_{t=0}^{T} \frac{E_{served}(t)}{(1+r)^t}}$$

dengan $C_{cap}$ = biaya kapital, $C_{O\&M}$ = operasi & pemeliharaan, $C_{fuel}$ = biaya bahan bakar genset, $C_{replace}$ = penggantian komponen, $r$ = discount rate, dan $E_{served}$ = energi yang berhasil dilayani ke beban.

### 2.3. Indeks Keandalan: LPSP

Reliabilitas sistem diukur melalui **Loss of Power Supply Probability (LPSP)**:

$$LPSP = \frac{\sum_{t=1}^{8760} [P_L(t) - (P_{PV}(t) + P_{WT}(t) + P_{DG}(t) + P_{BS}^{disch}(t))]^+}{\sum_{t=1}^{8760} P_L(t)}$$

di mana operator $[\cdot]^+$ mengambil nilai maksimum antara argumen dan nol. Nilai LPSP yang dapat diterima untuk aplikasi kritis (misalnya fasilitas cold chain vaksin COVID-19) adalah $\leq 0.001$ (99.9% reliability).

### 2.4. Formulasi Multi-Obyektif Robust Optimization (Cross-Discipline)

Untuk mengintegrasikan paper pendukung, formulasi robust optimization cold chain (Işık & Yildiz, 2023) adalah:

$$\min_{x \in X, y \in Y} \mathbf{c}^T \mathbf{x} + \mathbf{b}^T \mathbf{y} + \max_{\mathbf{u} \in \mathcal{U}} \mathbf{q}^T \mathbf{u}$$

$$\text{subject to:} \quad \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{y} \geq \mathbf{d}(\mathbf{u}), \quad \forall \mathbf{u} \in \mathcal{U}$$

di mana $\mathbf{x}$ adalah keputusan lokasi (facility location), $\mathbf{y}$ keputusan alokasi inventaris, $\mathbf{u}$ vektor ketidakpastian (demand, biaya energi, suhu), dan $\mathcal{U}$ uncertainty set polyhedral. Fungsi objektif mencakup total biaya distribusi, biaya inventory, dan biaya pembuangan limbah medis (medical waste management) dengan mempertimbangkan worst-case realization $\mathbf{u}$.

### 2.5. Fungsi Objektif Terintegrasi

Sintesis lintas disiplin menghasilkan fungsi objektif gabungan untuk fasilitas cold chain bertenaga HRES:

$$\min_{N_{PV}, N_{WT}, N_{BS}, \mathbf{x}, \mathbf{y}} \;\; \alpha \cdot LCOE + \beta \cdot LPSP + \gamma \cdot C_{coldchain}(\mathbf{u})$$

dengan $\alpha + \beta + \gamma = 1$ sebagai bobot preferensi pengambil keputusan dan $C_{coldchain}$ adalah total biaya cold chain robust.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Implementasi HRES untuk Cold Chain

Diagram alir rekayasa untuk implementasi HRES di fasilitas cold chain mengikuti protokol enam tahap yang diadaptasi dari Khan dkk. (2022):

1. **Pengumpulan Data Aset Site**: irradiance solar (NASA POWER atau PVGIS), kecepatan angin (ERA5), profil beban pendinginan 24-jam, suhu ambient, dan aksesibilitas grid.
2. **Pre-feasibility Analysis**: Penentuan apakah lokasi memenuhi kriteria irradiance $> 3.5$ kWh/m²/hari dan wind speed $> 4$ m/s.
3. **Komposisi Sistem Awal**: Seleksi teknologi—PV monocrystalline 400–550 Wp, wind turbine 1–10 kW, lithium-iron-phosphate battery 5–50 kWh, dan diesel genset backup.
4. **Optimasi Sizing**: Eksekusi algoritma metaheuristik (PSO, GA, atau GWO) terhadap model matematis pada Bagian 2.
5. **Simulasi Time-Series**: Validasi menggunakan software HOMER Pro, PVsyst, atau MATLAB/Simulink untuk horizon 25 tahun.
6. **Dispatch & Energy Management**: Implementasi rule-based atau MPC (Model Predictive Control) controller untuk operasi real-time.

### 3.2. SOP Cold Chain Integration (Işık & Yildiz, 2023)

Untuk operasional harian, Işık dan Yildiz (2023) mengusulkan SOP distribusi cold chain 10-langkah:

| Tahap | Aktivitas | KPI |
|-------|-----------|-----|
| 1 | Forecasting demand harian | MAPE $< 10\%$ |
| 2 | Penentuan capacity buffer dingin | Safety stock $\geq 20\%$ |
| 3 | Vehicle routing dengan time windows | On-time delivery $\geq 95\%$ |
| 4 | Real-time temperature monitoring | Mean temp $4.0 \pm 1.5°C$ |
| 5 | Cold storage charging scheduling | SOC battery $20\% \leq SOC \leq 90\%$ |
| 6 | HRES power dispatch | Renewable fraction $\geq 70\%$ |
| 7 | Inventory replenishment | Stock-out probability $\leq 2\%$ |
| 8 | Medical waste segregation | Compliance WHO $> 98\%$ |
| 9 | Reverse logistics collection | Recovery rate $\geq 85\%$ |
| 10 | Robust re-optimization bulanan | Cost variance $< 8\%$ |

### 3.3. Arsitektur Kontrol HRES

Khan dkk. (2022) mengkategorikan strategi kontrol HRES menjadi tiga level:

- **Primary Control**: Voltage/frequency droop control pada inverter (waktu respons milidetik).
- **Secondary Control**: SOC balancing antar battery bank (respons detik).
- **Tertiary Control**: Economic dispatch berdasarkan LCOE dan Renewable Fraction (respons menit-jam).

Untuk cold chain dengan variasi beban refrigerasi tinggi (defrost cycle, door opening), strategi **fuzzy logic controller** atau **MPC** memberikan performa lebih baik dibanding rule-based konvensional.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Skenario

Sebuah puskesmas isolasi di daerah terpencil Indonesia bagian timur membutuhkan fasilitas cold.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
