# 1404 — Digital Twin dan Rekayasa Proses Liofilisasi Biofarmasetika: Integrasi Model Perpindahan Panas–Massa, Controlled Nucleation, dan Advanced Process Control (APC) untuk Optimasi Primary Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Digital Twin Enabled Process Development, Optimization and Control in Lyophilization for Enhanced Biopharmaceutical Production
**Sitasi Utama:** Juckers, A.; Knerr, P.; Harms, F. (2024). *Processes*, 12(1), 211. DOI: [https://doi.org/10.3390/pr12010211](https://doi.org/10.3390/pr12010211)
**Sitasi Pendukung:** Juckers, A.; Knerr, P.; Harms, F. (2023). *Processes*, 11(5), 1404. DOI: [https://doi.org/10.3390/pr11051404](https://doi.org/10.3390/pr11051404)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan proses dehidrasi es sublimasi bertekanan rendah yang digunakan secara masif dalam industri biofarmasetika untuk menstabilkan produk termosensitif seperti protein monoklonal, antibodi terapeutik, vaksin mRNA, dan formulasi biologis kompleks. Lebih dari 50% produk biofarmasetika parenteral baru yang mendapat persetujuan regulatori membutuhkan liofilisasi sebagai unit operasi akhir, menjadikan proses ini sebagai *bottleneck* kapasitas dan biaya produksi (Juckers dkk., 2024, DOI: [10.3390/pr12010211](https://doi.org/10.3390/pr12010211)). Durasi *primary drying* yang secara tipikal mencapai 24–72 jam per *batch* menyumbang lebih dari 60% total waktu siklus, setara dengan konsumsi energi 50–200 kWh per kg produk, serta占用 kapasitas ruang steril yang mahal.

Urgensi ekonominya semakin tajam mengingat biofarmasetika global yang bernilai >USD 350 miliar (2024) menuntut *cycle time reduction* tanpa mengorbankan *Critical Quality Attributes* (CQA) seperti aktivitas biologis, kemurnian, dan waktu rekonstitusi. Juckers, Knerr, dan Harms (2024) menekankan bahwa pengembangan siklus liofilisasi secara historis berbasis pendekatan coba–gagal (*trial-and-error*) dengan *safety margin* tinggi, *set point* kaku, dan sedikit atau tanpa *real-time feedback*. Kondisi ini menghasilkan siklus konservatif yang 20–40% lebih panjang dari kondisi optimal secara termodinamika. Lebih jauh, paper ketiga penulis tersebut di *Processes* (2023) menunjukkan bahwa tahap pembekuan (*freezing step*) — yang sering dianggap sekunder — ternyata menentukan morfologi kristal es, yang secara langsung mengendalikan resistansi *dry layer* $R_p$ dan efisiensi *primary drying* (DOI: [10.3390/pr11051404](https://doi.org/10.3390/pr11051404)).

Integrasi paradigma **Quality by Design (QbD)**, **Process Analytical Technology (PAT)**, dan **Advanced Process Control (APC)** ke dalam arsitektur *digital twin* memungkinkan perusahaan seperti Merck, Pfizer, dan Lonza melakukan transisi dari *fixed-set-point* manufacturing ke *adaptive manufacturing*. *Digital twin* didefinisikan sebagai representasi virtual dinamis dari proses fisik yang terus diperbarui oleh data sensor (*soft sensor*, *thermocouple*, *Pirani*, *tunable diode laser absorption spectroscopy*/TDLAS) dan divalidasi melalui model fisika perpindahan panas–massa. Tujuan strategisnya: mempersingkat siklus, mengurangi *reject rate* dari ~3–5% menjadi <0,5%, dan memfasilitasi *tech transfer* antar-situs manufaktur tanpa degradasi performa. Dalam konteks *Industry 4.0* dan inisiatif Pharma 4.0™, modul ini menjembatani kesenjangan antara pengetahuan proses klasik (Pikal, 1985) dan kebutuhan industri akan kontrol adaptif *real-time*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Quasi-Steady-State Model (QSSM)

Model matematis yang divalidasi Juckers dkk. (2024) berakar pada *quasi-steady-state* heat–mass transfer (Pikal, 1985; Velardi & Barresi, 2008). Dua persamaan kopling utama:

$$\frac{dm}{dt} = \frac{A_p \cdot (P_i - P_c)}{R_p + R_{sh}}$$

$$\frac{dQ}{dt} = K_v \cdot A_v \cdot (T_s - T_b) = \Delta H_s \cdot \frac{dm}{dt} + \text{losses}$$

dengan:

- $\frac{dm}{dt}$ : laju sublimasi (kg/s), disebut juga sublimation flux $J_q$
- $A_p$ : luas penampang produk (m²)
- $P_i$ : tekanan uap air pada antarmuka sublimasi (Pa), fungsi Arrhenius temperatur: $P_i = \exp\left(-\frac{A}{T_b} + B\right)$
- $P_c$ : tekanan ruang (*chamber*) (Pa)
- $R_p$ : resistansi *dry layer* produk (m·s·kg⁻¹ atau Pa·s·m²·kg⁻¹)
- $R_{sh}$ : resistansi *stopper/vial neck* (tipikal 0 untuk vial sempurna)
- $K_v$ : koefisien perpindahan panas vial (W·m⁻²·K⁻¹)
- $T_s, T_b$ : temperatur rak dan dasar vial (K)
- $\Delta H_s$ : entalpi sublimasi es (~2.840 kJ/kg pada 0°C)

### 2.2 Resistansi Dry Layer dan Pengaruh Nucleation Temperature

Sesuai Juckers dkk. (2023, DOI: [10.3390/pr11051404](https://doi.org/10.3390/pr11051404)), morfologi kristal es hasil pembekuan menentukan $R_p$:

$$R_p(T_n) = R_{p,0} \cdot \exp\left[k_{R_p} \cdot (T_n^{ref} - T_n)\right]$$

dimana $T_n$ adalah *nucleation temperature* (°C). Untuk metode **ice fog (controlled nucleation)** yang dibahas penulis, $T_n$ dipertahankan pada rentang sempit $-5 \pm 1°C$, menghasilkan kristal es lebih besar dan homogen → $R_p$ rendah dan deviasi rendah antar-vial. Sebaliknya, *shelf-ramped freezing* konvensional menghasilkan $T_n$ tidak terkontrol pada $-10$ hingga $-20°C$, sehingga kristal kecil heterogen → $R_p$ tinggi dengan variabilitas *batch-to-batch* mencapai 25–40%.

### 2.3 Neraca Energi pada Antarmuka Sublimasi

Kopling energi terjadi karena kalor sublimasi harus dipasok oleh gradien suhu rak–produk:

$$T_b = T_s - \frac{\Delta H_s}{K_v A_v} \cdot \frac{dm}{dt}$$

Kendala utama: $T_b > T_{collapse}$ (temperatur *collapse* produk, tipikal $-25$ hingga $-10°C$ untuk protein) dan $T_b > T_{eutectic}$ untuk formulasi kristalin. Optimasi *primary drying* meminimalkan waktu siklus dengan tetap memenuhi constraint $T_b \leq T_{collapse}$.

### 2.4 Model Predictive Control (MPC) sebagai Jantung Digital Twin

Pemodelan ini di-*embed* ke dalam algoritma kontrol untuk menghitung *optimal trajectory* $T_s(t)$ dan $P_c(t)$ yang meminimalkan fungsi objektif:

$$\min_{T_s, P_c} \int_0^{t_f} \left[ w_1 \cdot (T_b - T_{collapse})^2 + w_2 \cdot t_f \right] dt$$

dengan *weighting* $w_1, w_2$ yang merepresentasikan trade-off antara kecepatan dan risiko kerusakan produk.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Digital Twin Enam-Lapis (berdasarkan Juckers dkk., 2024)

1. **Lapisan Sensor PAT:** *thermocouple* vial (tipikal 16 dari ratusan vial), sensor tekanan *Pirani* & *capacitance manometer*, *TDLAS* untuk H₂O vapor concentration.
2. **Lapisan Akuisisi Data (L1):** OPC-UA, *data historian* (PI System, OSIsoft), sampling 1–10 s.
3. **Lapisan Model Fisika (L2):** QSSM solver di MATLAB/Python, parameter terkalibrasi.
4. **Lapisan State Estimator (L2.5):** *Extended Kalman Filter* (EKF) atau *Moving Horizon Estimation* (MHE) untuk rekonstruksi $T_b$, $R_p$, $P_i$ yang tidak terukur langsung.
5. **Lapisan Optimasi & MPC (L3):** Penentuan *set-point trajectories* adaptif.
6. **Lapisan Supervisory Control & HMI (L4):** Antarmuka operator sesuai 21 CFR Part 11 & GAMP 5.

### 3.2 SOP Implementasi Sistematis

1. **Karakterisasi Awal (Kualifikasi Model):**
   - Lakukan eksperimen pembekuan 4 metode sesuai Juckers dkk. (2023): (a) shelf-ramp with hold, (b) shelf-ramp tanpa hold, (c) precooled shelves, (d) ice fog / controlled nucleation.
   - Ukur $T_n$ via *thermocouple* & *freeze-drying microscopy*.
   - Estimasi $K_v$ vial dengan *gravimetric* test pada sublimasi tunak (Pikal, 1983).

2. **Kalibrasi Parameter Model:**
   - *Least-squares fit* antara prediksi QSSM dan data eksperimen *primary drying* pilot (skala lab, 1–100 vial).
   - Validasi goodness-of-fit: target $R^2 > 0.95$ untuk $T_b(t)$ dan $\frac{dm}{dt}(t)$.

3. **Optimasi Offline (Design Space):**
   - *Dynamic optimization* dengan fungsi objektif waktu siklus.
   - Validasi robustness via Monte Carlo pada ketidakpastian $K_v \pm 15\%$, $R_p \pm 20\%$.

4. **Deployment MPC On-line:**
   - Sambungkan ke kontroler PLC lyophilizer (GEA, SP Scientific, Telstar).
   - *Watchdog* untuk fallback ke *recipe* konservatif jika deviasi > threshold.

5. **Continuous Improvement:**
   - *Bayesian updating* parameter model dari setiap *batch* produksi.
   - Drift detection pada $K_v$ akibat fouling kondensor.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Produksi 10.000 Vial/vacum dari Formulasi Protein Monoklonal 50 mg/mL

**Parameter industri tipikal (berdasarkan paper Juckers dkk., 2023 & 2024):**

| Parameter | Nilai | Sumber |
|---|---|---|
| Volume isi vial | 3,0 mL | Spesifikasi produk |
| Diameter dalam vial | 14,3 mm → $A_v = 1,61 \times 10^{-4}$ m² | Standar ISO 8362 |
| $K_v$ vial | 0,0027 W·m⁻²·K⁻¹ (gas konduksi dominan pada 100 mTorr) | Kalibrasi gravimetrik |
| $T_{collapse}$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
