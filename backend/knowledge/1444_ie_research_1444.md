# 1444 — Analisis Pinch untuk Integrasi Proses Industri dan Sistem Pembangkit Daya: Teknik, Formulasi Matematis, dan Aplikasi Heat Pump

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A review of pinch analysis techniques and extended application in power systems
**Jurnal & Sitasi Utama:** Tiejiang Yuan, Yaling Mao (2024). *Renewable and Sustainable Energy Reviews*. DOI: [https://doi.org/10.1016/j.rser.2024.114684](https://doi.org/10.1016/j.rser.2024.114684)
**Sitasi Pendukung:** J. Walden, Beat Wellig, Panagiotis Stathopoulos (2023). *Applied Energy*. DOI: [https://doi.org/10.1016/j.apenergy.2023.121933](https://doi.org/10.1016/j.apenergy.2023.121933)

---

## 1. Pendahuluan dan Konteks Industri

Analisis Pinch (*Pinch Analysis*) telah menjadi pilar utama dalam rekayasa proses termal sejak diperkenalkan oleh Linnhoff dan Umeda pada akhir 1970-an, dan terus berevolusi untuk menjawab tantangan dekarbonisasi sektor industri. Yuan dan Mao (2024) dalam *Renewable and Sustainable Energy Reviews* melakukan tinjauan sistematis terhadap perluasan teknik Pinch—mulai dari *Composite Curves* (CC), *Grand Composite Curve* (GCC), hingga *Total Site Heat Integration* (TSHI)—ke dalam sistem pembangkitan daya modern, termasuk integrasi *Combined Heat and Power* (CHP), *Organic Rankine Cycle* (ORC), dan sistem *Power-to-Heat*. Studi ini menyoroti bahwa konsumsi energi final sektor industri global masih didominasi oleh pembakaran bahan bakar fosil untuk pemanasan proses (*process heat*), mencapai sekitar 50% dari total energi manufaktur, sehingga menjadikan efisiensi termal sebagai variabel strategis yang直接影响 profitabilitas dan *Scope 1/2 emissions* perusahaan.

Di sisi lain, Walden, Wellig, dan Stathopoulos (2023) dalam *Applied Energy* menekankan bahwa pendekatan Pinch konvensional yang berbasis pada satu atau beberapa *operating point* (misalnya kondisi *design* dan *turn-down*) menjadi semakin tidak memadai ketika data proses temporal beresolusi tinggi tersedia melalui *digital twin* dan simulasi transien. Mereka mengajukan metodologi *Dynamic Pinch Analysis Targeting* yang menggunakan data proses tahunan hasil simulasi untuk sizing *heat pump* industri secara lebih realistis. Urgensi keilmuan ini diperkuat oleh kebijakan transisi energi Uni Eropa (EU Taxonomy, *Fit for 55*) yang mendorong elektrifikasi panas proses melalui *industrial heat pump* (IHP) berkapasitas >1 MW dengan target *Coefficient of Performance* (COP) ≥3,0.

Dalam konteks Indonesia—sebagai negara dengan konsumsi energi industri manufaktur, CPO, dan petrokimia yang besar—penerapan Pinch Analysis menjadi peluang strategis untuk menurunkan *Specific Energy Consumption* (SEC) 10–30% tanpa investasi besar pada *greenfield* equipment. Kedua literatur ini saling melengkapi: Yuan & Mao (2024) memberikan kerangka perluasan domain Pinch ke power system, sementara Walden *et al.* (2023) menyumbang metodologi time-resolved yang relevan untuk integrasi *variable renewable energy* (VRE) ke dalam desain sistem utilitas.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Problem Table Algorithm dan Heat Cascade

Pinch Analysis berangkat dari neraca energi pada setiap interval suhu $\Delta T$ yang dibatasi oleh *shifted temperature* $T^*$ (dengan koreksi $\Delta T_{min}/2$ pada sisi panas dan dingin). Untuk setiap *stream* $i$, didefinisikan *heat capacity flow rate*:

$$CP_i = \dot{m}_i \cdot c_{p,i} \quad \left[ \dfrac{kW}{^\circ C} \right]$$

Beban panas (enthalpy change) stream $i$ pada rentang suhu $[T_{in}, T_{out}]$ diberikan oleh:

$$\Delta H_i = CP_i \cdot (T_{out,i} - T_{in,i}) \quad [kW]$$

Neraca panas kumulatif pada interval suhu ke-$k$ (*Problem Table*) mengikuti *heat cascade*:

$$Q_{k}^{net} = Q_{k-1}^{residual} + \sum_{i \in hot} \Delta H_{i,k} - \sum_{j \in cold} \Delta H_{j,k}$$

dengan syarat non-negativitas:

$$Q_{k}^{residual} \geq 0 \quad \forall k$$

Iterasi *feasible cascade* menghasilkan kebutuhan utilitas minimum:

$$Q_{H,min} = Q_{last}^{residual} \quad ; \quad Q_{C,min} = -Q_{pinch}^{deficit}$$

dengan suhu *pinch* $T_{pinch}^{hot}$ dan $T_{pinch}^{cold}$ dipisahkan oleh $\Delta T_{min}$.

### 2.2 Composite Curves dan Grand Composite Curve

*Composite Curve* memplot enthalpy kumulatif versus suhu untuk semua stream panas dan dingin, yang secara visual menunjukkan area pinjak (*pocket*) sebagai peluang integrasi. *Grand Composite Curve* (GCC) memplot neraca panas neto terhadap *shifted temperature* $T^*$, yang sangat berguna untuk penempatan utilitas (reboiler boiler steam, furnace, refrigeration, dan *heat pump*). Pada GCC, slope segmen didefinisikan sebagai:

$$Slope_k = -\frac{\sum_{i \in net} CP_{i,k}}{1} = -NCP_k \quad \left[ \dfrac{kW}{^\circ C} \right]$$

### 2.3 Formulasi Heat Pump pada Pinch

Heat pump mengambil panas dari sumber bersuhu rendah $T_{src}$ dan menaikkan ke *sink* bersuhu tinggi $T_{snk}$. *Coefficient of Performance* didefinisikan:

$$COP_{HP} = \frac{\dot{Q}_{delivered}}{\dot{W}_{compressor}} = \frac{T_{snk}}{T_{snk} - T_{src}} \cdot \eta_{Carnot} \cdot \eta_{II}$$

dengan $\eta_{II}$ adalah *exergy efficiency* (umumnya 0,40–0,60 untuk *industrial heat pump*). Laju kalor yang diekstraksi dari sumber dan disuplaikan ke sink:

$$\dot{Q}_{src} = \dot{Q}_{snk} \cdot \left(1 - \frac{1}{COP_{HP}}\right)$$

### 2.4 Dynamic Pinch Analysis (Walden et al., 2023)

Untuk setiap *time slice* $t \in [1, T]$ beresolusi $\Delta t$, *Time Average Model* (TAM) merata-ratakan $CP$ stream:

$$\overline{CP_i} = \frac{1}{T} \sum_{t=1}^{T} CP_{i}(t)$$

Namun TAM cenderung *oversizing*. Sebagai perbaikan, digunakan *sliding window* dengan lebar $w$ yang menghasilkan *time-varying grand composite curve* $GCC(t)$, sehingga *heat pump* didesain pada *time slice* yang paling menuntut (peak load) atau melalui *load duration curve*:

$$P_{HP} = f\left( \dot{Q}_{snk}(t), T_{src}(t), T_{snk}(t) \right)$$

### 2.5 Extended Pinch for Power Systems (Yuan & Mao, 2024)

Untuk sistem CHP, *total site* menggabungkan *site utility grand composite curve* (SUGCC) yang menunjukkan *sinks* dan *sources* di seluruh pabrik. *Power-to-Heat* (P2H) dimodelkan sebagai utilitas *cold* palsu dengan *CP* efektif yang tergantung pada kapasitas elektroliser / heat pump. *Levelized Cost of Heat* (LCOH) menjadi metrik optimasi:

$$LCOH = \frac{\sum_{y=0}^{Y} \dfrac{CAPEX + OPEX_y}{(1+r)^y}}{\sum_{y=0}^{Y} \dfrac{Q_{delivered,y}}{(1+r)^y}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa mengikuti alur sistematis berikut, yang disesuaikan dengan rekomendasi Yuan & Mao (2024) dan Walden *et al.* (2023):

**Tahap 1 – Data Acquisition & Stream Extraction**
1. Kumpulkan data proses historis minimal 1 tahun dengan resolusi $\leq 15$ menit.
2. Identifikasi *process streams* (hot: $T_{in} > T_{out}$; cold: $T_{in} < T_{out}$), dengan toleransi $\Delta T_{min}$ sesuai fase operasi: 10°C untuk fluida proses, 20°C untuk utilities.
3. Lakukan *data reconciliation* untuk menghilangkan outlier (>3σ) dan *gap-filling* menggunakan interpolasi linier atau regresi proses.

**Tahap 2 – Targeting dengan Problem Table**
1. Bangun *shifted temperature* network $T^*_{hot} = T - \Delta T_{min}/2$; $T^*_{cold} = T + \Delta T_{min}/2$.
2. Susun *Problem Table* menggunakan rumus cascade pada Persamaan (2).
3. Iterasi hingga semua residual $Q_k \geq 0$ untuk mendapatkan $Q_{H,min}$ dan $Q_{C,min}$.
4. Validasi menggunakan *Composite Curve* plot.

**Tahap 3 – Dynamic Targeting (jika tersedia data transien)**
1. Partisi data menjadi *time slices* (misal: 8760 jam per tahun, atau agregasi per shift).
2. Jalankan *Problem Table* pada setiap *slice*.
3. Bangun *load duration curve* untuk masing-masing utilitas.
4. Tentukan *capacity* optimum heat pump pada persentil ke-90 atau sesuai *availability factor* target.

**Tahap 4 – Heat Exchanger Network Synthesis (HENS)**
1. Terapkan *Pinch Design Rules*: di atas pinch jangan gunakan *cold utility*; di bawah pinch jangan gunakan *hot utility*.
2. Mulai dari pinch dengan *CP balance* $\sum CP_{hot} - \sum CP_{cold} = 0$ untuk menjaga *driving force*.
3. Minimalkan jumlah unit menggunakan *algoritma tree* (Linnhoff) atau *algoritma transhipment* (Papoulias & Grossmann).

**Tahap 5 – Heat Pump & CHP Integration**
1. Evaluasi profil GCC untuk menemukan *source-sink matching* dengan $\Delta T$ kecil.
2. Untuk *heat pump*, gunakan aturan Walden: integrasikan saat *temperature lift* $\Delta T_{lift} = T_{snk} - T_{src} < 50$°C dan $\dot{Q} > 500$ kW.
3. Untuk *power system*, integrasikan turbin gas/uap *back-pressure* untuk memanfaatkan *waste heat* ke *process heating*.

**Tahap 6 – Verifikasi, Validasi, dan Dokumentasi**
1. Simulasi HEN dengan *ASPEN HYSYS* atau *UniSim* untuk verifikasi performa.
2. Hitung *annualized cost* = CAPEX + OPEX, validasi *payback period* <3 tahun.
3. Dokumentasikan sesuai ISO 50001 *Energy Management System*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Pabrik Pengolahan Susu (UHT Plant)

Diadaptasi dari skenario tipikal pada Walden *et al.* (2023) untuk pabrik *dairy processing* kapasitas 100.000 liter/hari. Data stream proses pada kondisi *design*:

| Stream | Tipe | $T_{in}$ (°C) | $T_{out}$ (°C) | $\dot{m}$ (kg/s) | $c_p$ (kJ/kg·K) | $CP$ (kW/°C) | $\Delta H$ (kW) |
|---|---|---|---|---|---|---|---|
| S1 Pasteurisasi | Hot | 90 | 4 | 5,0 | 4,18 | 20,9 | –1.797 |
| S2 CIP Return | Hot | 70 | 25 | 2,0 | 4,18 | 8,36 | –376 |
| S3 Pre-heating susu | Cold | 4 | 72 | 5,0 | 4,18 | 20,9 | +1.422 |
| S4 Boiler feedwater | Cold | 30 | 105 | 1,5 | 4,18 | 6,27 | +470 |

### 4.2 Problem Table Calculation ($\Delta T_{min} = 10$°C)

Bangun *shifted temperatures*:

| Interval | $T^*_{hot}$ (°C) | $T^*_{cold}$ (°C) | Stream aktif | $\sum \Delta H$ (kW) | Kumulatif (kW) |
|---|---|---|---|---|---|
| 1 | 85 | 77 | S1 (hot) | 20,9 × (90–85)= +105 | 105 |
| 2 | 77 | 67 | S1 (hot) | 20,9 × (85–77)= +167 | 272 |
| 3 | 67 | 32 | S1,S2 (hot) | (20,9+8,36)×(67–32)= –1.025* | –753 |
| 4 | 32 | 5 | S3,S4 (cold) | (20,9+6,27)×(32–5)= –734 | –1.487 |
| 5 | 5 | –1 | S1 (hot) | 20,9 × (5–4) = –21 | –1.508 |

*Koreksi: $\sum \Delta H$ untuk *cold streams* = +1.025 kW.

Setelah iterasi *feasible cascade* (tanda disesuaikan): $Q_{H,min} = 480$ kW (steam