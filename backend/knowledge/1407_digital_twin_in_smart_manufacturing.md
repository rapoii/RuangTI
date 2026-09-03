# 1407 — Digital Twin dalam Manufaktur Cerdas: Arsitektur, Formulasi Matematis, dan Studi Kasus Kuantitatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Digital twin in smart manufacturing
**Jurnal & Sitasi Utama:** Lianhui Li, Bingbing Lei, Chunlei Mao (2022). *Digital twin in smart manufacturing*. *Journal of Industrial Information Integration*. DOI: [https://doi.org/10.1016/j.jii.2021.100289](https://doi.org/10.1016/j.jii.2021.100289)
**Sitasi Pendukung:** Mohsen Soori, Behrooz Arezoo, Roza Dastres (2023). *Digital twin for smart manufacturing, A review*. *Sustainable Manufacturing and Service Economics*. DOI: [https://doi.org/10.1016/j.smse.2023.100017](https://doi.org/10.1016/j.smse.2023.100017)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur global menuju **Industri 4.0** telah menempatkan *digital twin* (DT) sebagai salah satu teknologi inti yang menentukan daya saing perusahaan. Lianhui Li, Bingbing Lei, dan Chunlei Mao (2022) mendefinisikan *digital twin* sebagai replika digital dinamis dari entitas fisik yang mampu merepresentasikan status, struktur, dan perilaku sistem manufaktur secara *real-time* melalui integrasi data sensor, model fisika, dan algoritma intelegensia buatan (DOI: [10.1016/j.jii.2021.100289](https://doi.org/10.1016/j.jii.2021.100289)). Pendekatan ini memungkinkan terbentuknya *cyber-physical production system* (CPPS) di mana setiap mesin, lini perakitan, dan bahkan seluruh *supply chain* memiliki representasi virtual yang mampu melakukan simulasi, prediksi, dan optimasi sebelum tindakan fisik dilakukan.

Urgensi penerapan *digital twin* di industri manufaktur modern didorong oleh tiga tantangan struktural yang diidentifikasi Soori, Arezoo, dan Dastres (2023). Pertama, **tekanan pada *time-to-market***: siklus pengembangan produk yang semakin pendek (rata-rata 18–24 bulan untuk produk otomotif) memaksa industri melakukan validasi desain dan proses secara paralel. *Digital twin* menjawab tantangan ini dengan menyediakan lingkungan virtual untuk mengevaluasi berbagai skenario manufaktur sebelum produksi fisik dimulai (DOI: [10.1016/j.smse.2023.100017](https://doi.org/10.1016/j.smse.2023.100017)). Kedua, **peningkatan kompleksitas produk**: komponen *mechatronics* dengan toleransi geometri ±0,01 mm membutuhkan simulasi multi-fisika (termal, struktural, getaran) yang tidak mungkin dilakukan tanpa model virtual. Ketiga, **fluktuasi biaya downtime**: studi menunjukkan bahwa satu menit downtime pada lini semikonduktor bernilai USD 50.000, menjadikan prediksi kegagalan (*predictive maintenance*) sebagai kebutuhan kritis.

Secara ekonomis, pasar *digital twin* global diproyeksikan mencapai USD 110 miliar pada tahun 2028 dengan CAGR 38%. Nilai ini tercipta bukan dari perangkat lunaknya semata, melainkan dari pengurangan *scrap rate* (5–15%), peningkatan *Overall Equipment Effectiveness* (OEE) sebesar 10–25%, dan optimalisasi konsumsi energi 8–12%. Konteks ini menjelaskan mengapa *digital twin* bukan lagi pilihan teknologi, melainkan prasyarat strategis untuk mempertahankan kelayakan operasional (*operational viability*) di era manufaktur cerdas.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur *digital twin* dalam manufaktur cerdas dibangun di atas empat pilar matematis: **model state-space**, **estimasi状态 stokastik**, **kopling data-fisika**, dan **fungsi objektif optimasi**. Lianhui Li *et al.* (2022) menekankan bahwa sinkronisasi antara entitas fisik dan *virtual counterpart* memerlukan formulasi *cyber-physical synchronization* yang presisi.

### 2.1 Model State-Space Digital Twin

Representasi matematis paling fundamental adalah persamaan *state-space* diskret yang menangkap dinamika sistem fisik dan estimasi digitalnya:

$$x_{k+1} = A x_k + B u_k + w_k$$
$$y_k = C x_k + v_k$$

di mana $x_k \in \mathbb{R}^n$ adalah vektor status sistem (posisi, suhu, getaran, torsi), $u_k \in \mathbb{R}^m$ adalah vektor input kontrol, $y_k \in \mathbb{R}^p$ adalah output sensor terukur, $A$, $B$, $C$ adalah matriks transisi状态, input, dan output, sedangkan $w_k \sim \mathcal{N}(0, Q)$ dan $v_k \sim \mathcal{N}(0, R)$ adalah noise proses dan pengukuran dengan kovarians $Q$ dan $R$. *Digital twin* berperan sebagai estimator optimal $\hat{x}_k$ terhadap $x_k$ yang sesungguhnya.

### 2.2 Filter Kalman sebagai Mekanisme Sinkronisasi

Sinkronisasi *real-time* antara dunia fisik dan virtual dilakukan melalui **Kalman Filter** rekursif:

$$\hat{x}_{k|k-1} = A \hat{x}_{k-1|k-1} + B u_{k-1}$$
$$P_{k|k-1} = A P_{k-1|k-1} A^T + Q$$
$$K_k = P_{k|k-1} C^T (C P_{k|k-1} C^T + R)^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (y_k - C \hat{x}_{k|k-1})$$

di mana $K_k$ adalah *Kalman gain* yang secara adaptif menyeimbangkan kepercayaan terhadap model fisika versus data sensor. Inovasi $y_k - C\hat{x}_{k|k-1}$ merepresentasikan *residu* yang digunakan untuk mendeteksi anomali (*anomaly detection*). Soori *et al.* (2023) menunjukkan bahwa implementasi *extended Kalman filter* (EKF) atau *unscented Kalman filter* (UKF) mampu menangani nonlinieritas pada sistem manufaktur seperti *CNC machining* dan *robotic assembly*.

### 2.3 Kopling Model Fisika dan Data (*Physics-Informed Neural Network*)

Untuk sistem dengan kompleksitas tinggi, Lianhui Li *et al.* (2022) mengusulkan pendekatan hibrida *physics-informed neural network* (PINN) yang menggabungkan hukum fisika dengan pembelajaran mesin:

$$\mathcal{L}_{total} = \lambda_1 \mathcal{L}_{data} + \lambda_2 \mathcal{L}_{physics} + \lambda_3 \mathcal{L}_{BC/IC}$$

di mana $\mathcal{L}_{data} = \frac{1}{N}\sum_{i=1}^{N}(y_i^{pred} - y_i^{obs})^2$ adalah *loss* data, $\mathcal{L}_{physics} = \frac{1}{M}\sum_{j=1}^{M}(f(x_j))^2$ adalah *loss* residual persamaan diferensial parsial (misalnya persamaan panas, elastisitas), dan $\mathcal{L}_{BC/IC}$ adalah penalti pelanggaran kondisi batas/awal. Parameter $\lambda_1, \lambda_2, \lambda_3$ menyeimbangkan kontribusi ketiga komponen.

### 2.4 Metrik Kinerja Manufaktur

Efektivitas *digital twin* diukur melalui **OEE** dan **Total Productive Maintenance (TPM)**:

$$OEE = A \times P \times Q$$

dengan $A = \frac{T_{operasi}}{T_{rencana}}$ (availability), $P = \frac{T_{ideal} \times N_{output}}{T_{operasi}}$ (performance), $Q = \frac{N_{baik}}{N_{total}}$ (quality). *Digital twin* meningkatkan seluruh komponen OEE melalui prediksi downtime, optimalisasi parameter proses, dan deteksi dini cacat.

### 2.5 Model Keandalan dan Prediksi Kegagalan

Distribusi Weibull digunakan untuk memodelkan keandalan komponen:

$$R(t) = e^{-(t/\eta)^\beta}, \quad f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-(t/\eta)^\beta}$$

di mana $\beta$ adalah *shape parameter* dan $\eta$ adalah *characteristic life*. *Digital twin* mengestimasi parameter-parameter ini secara *real-time* dari data sensor, memungkinkan implementasi *predictive maintenance* dengan optimasi interval servis.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *digital twin* dalam manufaktur cerdas mengikuti kerangka sistematis lima fase yang disintesis dari Lianhui Li *et al.* (2022) dan Soori *et al.* (2023), selaras dengan standar **ISO 23247** (*Digital Twin framework for manufacturing*) dan **RAMI 4.0** (Reference Architecture Model Industry 4.0).

### 3.1 Fase 1: Analisis Kebutuhan dan Pemetaan Sistem (*System Scoping*)

1. Identifikasi Unit Sistem Fisik (PSU — *Physical System Unit*): mesin, lini produksi, atau *workstation* target.
2. Penentuan *Level of Detail* (LoD) model: dari *shadow twin* (1D–2D, monitoring) hingga *full twin* (3D multi-fisika).
3. Definisi *Key Performance Indicators* (KPI): OEE target, scrap rate, biaya per unit.
4. Penilaian kelayakan data: inventarisasi sensor, protokol komunikasi (OPC-UA, MQTT, Modbus TCP).

### 3.2 Fase 2: Akuisisi Data dan Instrumentasi

1. Pemasangan sensor multi-modal: accelerometer (getaran), thermocouple (suhu), encoder (posisi), current sensor (arus motor), vision system (visual).
2. Pembangunan *data pipeline* dengan frekuensi sampling minimum 100 Hz untuk getaran dan 10 Hz untuk suhu.
3. Implementasi *edge gateway* untuk preprocessing dan time-stamping data dengan presisi <1 ms.

### 3.3 Fase 3: Pembangunan Model Virtual

1. **Model Geometris 3D**: CAD/CAE solid dengan *meshing* adaptif (ukuran elemen 0,5–2 mm).
2. **Model Fisika**: simulasi termal, struktural, fluidodinamika, multibody dynamics menggunakan platform ANSYS, COMSOL, atau Siemens Star-CCM+.
3. **Model Data-Driven**: *training* neural network/LSTM pada data historis.
4. **Integrasi PINN**: penggabungan loss fisika dan loss data sesuai persamaan (3).

### 3.4 Fase 4: Sinkronisasi dan Validasi

1. Implementasi algoritma Kalman Filter (persamaan 2) untuk estimasi status *real-time*.
2. Validasi model: *cross-validation* dengan data operasional menggunakan metrik RMSE, MAPE, R².
3. Kriteria penerimaan: $R^2 > 0,90$ dan $MAPE < 5\%$ pada data uji.
4. Iterasi model berdasarkan *drift detection*.

### 3.5 Fase 5: Eksploitasi dan Continuous Improvement

1. Dashboard visualisasi: *digital shadow* 3D, *trend chart*, *heatmap* kualitas.
2. Modul optimasi: *reinforcement learning* untuk parameter proses optimal.
3. Integrasi dengan MES/ERP untuk closed-loop control.
4. Mekanisme *retraining* periodik (mingguan/bulanan) berdasarkan data baru.

**Diagram Alur SOP Implementasi Digital Twin:**

```
[Fase 1: Scoping] → [Fase 2: Instrumentasi] → [Fase 3: Modelling]
        ↓                      ↓                       ↓
   KPI Definition        Data Pipeline           Physics+ML Model
                                                      ↓
[Fase 5: Optimasi] ← [Fase 4: Sinkronisasi] ← [Validasi R²>0.90]
        ↓                      ↓
   Dashboard+RL            Kalman Filter
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Sel Manufaktur CNC untuk Komponen Aerospace

Sebuah perusahaan *tier-1* aerospace di Hamburg, Jerman, menerapkan *digital twin* pada sel CNC 5-axis yang memproduksi *turbine blade.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
