# 2236 — Jaringan Sensor Nirkabel untuk Proses Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Sistem Manufaktur Biologis Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan transformasional dalam manufaktur produk biologis bernilai tinggi—mulai dari antibodi monoklonal, vaksin mRNA, hingga terapi gen berbasis vektor virus—yang semuanya sangat rentan terhadap degradasi termal dan oksidatif. Liofilisasi (*freeze-drying*) tetap menjadi *gold standard* untuk menstabilkan molekul-molekul tersebut dengan cara menghilangkan air melalui sublimasi di bawah tekanan vakum, sehingga mempertahankan integritas struktural protein dan aktivitas farmakologis produk. Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) menyoroti bahwa kompleksitas intrinsik proses liofilisasi—yang melibatkan tiga fase kritis yaitu pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi)—menuntut visibilitas termal dan kinematik yang belum pernah terjadi sebelumnya di seluruh rak (*shelf*), vial, dan zona kritis produk.

Urgensi operasional dari adopsi Wireless Sensor Networks (WSN) dalam konteks ini bersifat multi-dimensi. Pertama, secara ekonomis, satu batch produksi biologis bernilai USD 2–50 juta, sehingga setiap vials yang gagal karena *run-away* sublimasi atau *collapse* akibat suhu produk melebihi *collapse temperature* ($T_c$) menimbulkan kerugian luar biasa. Kedua, secara teknis, sistem instrumentasi kabel (*wired thermocouple*) tradisional memiliki keterbatasan fatal: probe *bare-wire* thermocouple T-type yang umum digunakan berperan sebagai *nucleation sites* heterogen yang menurunkan *ice nucleation temperature* ($T_n$) rata-rata 4–6 °C di bawah titik keseimbangan, mendistorsi perilaku pembekuan alami produk, dan menutupi kemungkinan supercooling. Ketiga, dari perspektif compliance, inisiatif Quality-by-Design (QbD) FDA (2004) dan ICH Q8(R2) mensyaratkan *design space* yang divalidasi secara statistik, yang memerlukan akuisisi data *real-time*, *spatially-resolved*, dan *audit-trail-compliant*—persis kekuatan arsitektur WSN modern.

Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) melengkapi narasi ini dengan menunjukkan bahwa WSN bukan sekadar pengganti kabel, melainkan merupakan *enabler* untuk paradigma *smart lyophilization*, di mana algoritma *Model Predictive Control* (MPC) berbasis *first-principles* dapat dieksekusi secara *closed-loop* dengan latency < 500 ms. Integrasi ini menurunkan *batch failure rate* hingga 30–60% dan memperpendek siklus *primary drying* rata-rata 15–25% melalui optimalisasi gradien tekanan ruang dan suhu rak yang adaptif. Dengan demikian, rekayasa WSN untuk liofilisasi bukan investasi IT biasa, melainkan *core competency* manufaktur farmasi generasi berikutnya.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Primary Drying

Meza-Galvan dkk. (2026) menurunkan model kuasi-steady satu dimensi untuk laju sublimasi es dari vial, yang dinyatakan dalam persamaan coupled heat–mass transfer:

$$\dot{m} = \frac{T_{sh} - T_b}{R_s} \cdot \frac{1}{\Delta H_s} = \frac{p_b - p_c}{R_p} \cdot \frac{M_w}{R_g T_b}$$

di mana:
- $\dot{m}$ = laju sublimasi massa per vial (kg/s)
- $T_{sh}$ = suhu rak (*shelf temperature*, K)
- $T_b$ = suhu pada *sublimation interface* (K)
- $R_s$ = resistansi termal total vial (K·m²/W)
- $R_p$ = resistansi *cake* terhadap aliran uap air (m²·Pa·s/kg)
- $\Delta H_s$ = entalpi sublimasi es ($\approx 2.84 \times 10^6$ J/kg)
- $p_b$ = tekanan uap air pada interface (Pa)
- $p_c$ = tekanan ruang (*chamber pressure*, Pa)
- $M_w$ = massa molar air (0.018 kg/mol)
- $R_g$ = konstanta gas universal (8.314 J/mol·K)

Resistansi termal vial didekomposisi menjadi:

$$R_s = R_{vial,glass} + R_{vial,stopper} + \frac{L_{cake}}{\kappa_{cake}}$$

dengan $L_{cake}$ adalah ketebalan *dried cake* yang tumbuh sepanjang waktu dan $\kappa_{cake}$ konduktivitas termal efektifnya (tipikal 0.02–0.05 W/m·K untuk larutan protein).

### 2.2 Kinetika Pertumbuhan Resistansi Cake

Karena $L_{cake}$ meningkat seiring sublimasi, resistansi massa berevolusi secara non-linear menurut:

$$R_p(t) = R_{p,0} + \frac{A_0 \cdot \int_0^t \dot{m}(\tau)\,d\tau}{M_{solid} \cdot \kappa_{cake}' \cdot A_v}$$

dengan $A_v$ luas spesifik pori cake dan $M_{solid}$ massa padatan terlarut.

### 2.3 Arsitektur WSN dan Model Konsumsi Energi

WSN tipikal untuk liofilizer industri terdiri dari $N$ node sensor (thermocouple nirkabel, sensor tekanan kapasitif miniatur, dan *gateway* berbasis IEEE 802.15.4e atau LoRaWAN). Konsumsi energi per node mengikuti model linear sederhana:

$$E_{node} = V_{bat} \cdot I_{sleep} \cdot t_{sleep} + V_{bat} \cdot I_{tx} \cdot t_{tx} \cdot N_{tx} + V_{bat} \cdot I_{sense} \cdot t_{sense}$$

Untuk baterai lithium-thionyl chloride 3.6 V dengan kapasitas 2400 mAh, dengan $I_{sleep} = 5\,\mu A$, $I_{tx} = 35\,mA$ selama 50 ms per transmisi pada interval 30 s, dan $I_{sense} = 12\,mA$ selama 200 ms, diperoleh:

$$E_{cycle} = 3.6 \times (5 \times 10^{-6} \times 29.75 + 35 \times 10^{-3} \times 0.05 + 12 \times 10^{-3} \times 0.2)$$
$$E_{cycle} \approx 3.6 \times (0.000149 + 0.00175 + 0.0024) \approx 3.6 \times 4.299 \times 10^{-3} \approx 0.01548 \text{ Wh}$$

Lifetime baterai menjadi:

$$T_{life} = \frac{C_{bat}}{E_{cycle} / V_{bat}} = \frac{2.4}{0.0043 / 3.6} \approx 2009 \text{ jam} \approx 83.7 \text{ hari continuous}$$

### 2.4 Network Topological Metrics

Untuk memastikan cakupan spatial di dalam *chamber* liofilizer dengan $N = 64$ vial per rak dan 6 rak, total $M = 384$ node. Konektivitas *mesh* dievaluasi melalui:

$$\text{Neighbor Connectivity}(v) = \sum_{u \in V, u \neq v} \mathbb{1}[\text{RSSI}(v,u) > \tau_{thr}]$$

dengan RSSI ambang $\tau_{thr} = -85$ dBm untuk packet error rate < 1%. Rata-rata konektivitas $\bar{k}$ menentukan robustnes jaringan; untuk $\bar{k} \geq 4$ maka jaringan tahan terhadap kegagalan satu node tanpa partisi graf.

### 2.5 Signal Reconstruction & Filtering

Karena transmisi nirkabel pada suhu kriogenik (-40 °C) rentan terhadap *flicker noise*, Meza-Galvan dkk. (2026) mengusulkan filter Kalman untuk rekonstruksi $T_{product}(t)$:

$$\hat{T}_{k|k} = \hat{T}_{k|k-1} + K_k (z_k - H\hat{T}_{k|k-1})$$

dengan gain Kalman $K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}$, di mana $R$ adalah kovariansi derau pengukuran dan $P$ kovariansi state error. Filter ini menurunkan RMSE pembacaan suhu dari 0.42 °C menjadi 0.11 °C.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilizer mengikuti *Standard Operating Procedure* (SOP) berjenjang yang diuraikan oleh Meza-Galvan dkk. (2026) dan diperkuat oleh kerangka PAT Artusio dkk. (2026):

**Tahap 1 — Risk Assessment & Critical Process Parameter (CPP) Mapping.** Lakukan FMEA (Failure Mode and Effects Analysis) untuk mengidentifikasi CPP: $T_{sh}$, $p_c$, $T_{product,max}$, dan durasi *primary drying*. Tetapkan *Critical Quality Attribute* (CQA): residual moisture < 1.0%, *cake appearance* tanpa *collapse*, dan *reconstitution time* < 90 detik.

**Tahap 2 — Wireless Sensor Node Qualification.** Setiap node thermocouple nirkabel harus memenuhi kalibrasi ISO 17025 dengan akurasi $\pm 0.3$ °C pada rentang -50 °C sampai +60 °C. Validasi *hermeticity* IP67, sertifikasi zona ATEX untuk ruang dengan atmosfer inert N₂.

**Tahap 3 — Network Deployment Geometry.** Tempatkan node pada koordinat $(x_i, y_i, z_j)$ mengikuti *central composite design* dengan minimal 1 node per 9 vial pada *edge vials* (vial yang paling rentan terhadap gradien radiasi). Total node $\geq \sqrt{M}$ untuk menjamin *spatial coverage*.

**Tahap 4 — Data Acquisition & Time Synchronization.** Terapkan protokol IEEE 1588v2 PTP (Precision Time Protocol) untuk sinkronisasi timestamp dengan drift < 100 µs antar node—penting untuk analisis korelasi silang tekanan-suhu.

**Tahap 5 — Real-Time Analytics & Endpoint Detection.** Algoritma *primary drying endpoint* diimplementasikan dengan membandingkan sinyal $p_c$ dari *capacitance manometer* (CM, akurat pada tekanan rendah) dan *Pirani gauge* (PR, sensitif terhadap uap air non-kondensable). Saat semua es habis, rasio $\text{PR/CM}$ turun dari ~1.5 menjadi ~1.0:

$$\