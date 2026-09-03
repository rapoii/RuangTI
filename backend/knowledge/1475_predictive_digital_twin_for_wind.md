# 1475 — Predictive Digital Twin untuk Sistem Energi Angin: Integrasi Modeling Hybrid, IoT, dan Quantum-Inspired Optimization untuk Keandalan Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Predictive digital twin for wind energy systems: a literature review
**Jurnal & Sitasi Utama:** Ege Kandemir, Agus Hasan, Trond Kvamsdal (2024). *Energy Informatics*. DOI: [https://doi.org/10.1186/s42162-024-00373-9](https://doi.org/10.1186/s42162-024-00373-9)
**Sitasi Pendukung:** Agostino Marengo, Vito Santamato (2025). *Frontiers in Computer Science*. DOI: [https://doi.org/10.3389/fcomp.2025.1584114](https://doi.org/10.3389/fcomp.2025.1584114)

---

## 1. Pendahuluan dan Konteks Industri

Industri energi angin global mengalami transformasi struktural yang ditandai dengan meningkatnya kapasitas terpasang menjadi lebih dari 1 TW pada 2024, dengan permintaan yang didorong oleh dekarbonisasi rantai pasok listrik dan target *net-zero emission* berbagai negara. Namun demikian, Kandemir, Hasan, dan Kvamsdal (2024) dalam *Energy Informatics* menekankan bahwa kompleksitas operasional turbin angin modern — yang melibatkan integrasi subsistem mekanik-rotor, generator, gearbox, sistem pitch/yaw, dan konverter daya — menciptakan kebutuhan akan platform integrasi data yang mampu melakukan prediksi *state* secara *real-time*. Dalam konteks inilah *predictive digital twin* (PDT) muncul sebagai paradigma arsitektur sistem yang tidak hanya memirror kondisi fisik aset, tetapi juga melakukan *forward-projection* berbasis model fisika dan data historis untuk keperluan *predictive maintenance*, *load forecasting*, dan optimasi *Levelized Cost of Energy* (LCOE).

Urgensi ekonomis dari PDT untuk industri energi angin bersifat multi-dimensi. Pertama, biaya *Operation & Maintenance* (O&M) menyumbang 20–35% dari total LCOE turbin lepas pantai (*offshore*), dan kegagalan *unplanned downtime* gearbox atau generator dapat menyebabkan kerugian produksi hingga €30.000 per jam per turbin. Kedua, ketidakpastian sumber energi angin (*wind resource intermittency*) menyebabkan fluktuasi produksi yang memerlukan mekanisme dispatch dan *grid balancing* yang akurat — suatu fungsi yang hanya dapat dipenuhi melalui prediksi *state* yang sangat granular. Ketiga, integrasi dengan *Industrial Internet of Things* (IIoT) menghasilkan volume data *time-series* yang masif (skala *terabyte* per farm per tahun), yang tidak dapat diolah secara optimal oleh arsitektur *SCADA* konvensional.

Kandemir et al. (2024) secara eksplisit menyusun *review* mereka di围绕着 empat *research questions* utama: (1) metodologi yang dominan (fisika-based, data-driven, hybrid); (2) integrasi sumber data heterogen (sensor IoT, basis data historis, API eksternal seperti data cuaca dan harga listrik); (3) fitur dan teknologi *real-time system* termasuk *co-simulation*; dan (4) tantangan serta arah riset masa depan. Pendekatan ini merepresentasikan pergeseran paradigma dari *descriptive monitoring* menuju *prescriptive autonomy* dalam rekayasa sistem industri.

Dari perspektif *cross-sector*, aplikasi komputasi kuantum yang diinvestigasi oleh Marengo dan Santamato (2025) untuk domain *healthcare* memberikan inspirasi arsitektural penting: algoritma *Quantum Machine Learning* (QML) dan *Quantum Cryptography* menunjukkan bagaimana prinsip *superposition*, *entanglement*, dan *quantum annealing* dapat dieksploitasi untuk menyelesaikan masalah optimasi kombinatorial kompleks pada ruang状态 berdimensi tinggi. Pada industri energi angin, masalah serupa muncul dalam *optimal sensor placement*, *scheduling predictive maintenance*, dan *wind farm layout optimization* — yang secara struktural identik dengan masalah optimasi pada sistem biokompleks dalam *healthcare*. Sinergi lintas-domain ini menjadi salah satu orisinalitas modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Predictive Digital Twin (PDT)

PDT untuk turbin angin secara formal dapat didefinisikan sebagai pasangan dinamis antara entitas fisik $\mathcal{P}$ dan entitas virtual $\mathcal{V}$ yang terhubung melalui aliran data dua arah. Representasi *state-space* kontinu dirumuskan sebagai:

$$\dot{\mathbf{x}}(t) = \mathbf{f}(\mathbf{x}(t), \mathbf{u}(t), \boldsymbol{\theta}) + \mathbf{w}(t)$$
$$\mathbf{y}(t) = \mathbf{h}(\mathbf{x}(t)) + \mathbf{v}(t)$$

di mana $\mathbf{x}(t) \in \mathbb{R}^{n}$ adalah vektor *state* (misalnya kecepatan rotor, suhu *bearing*, torsi generator), $\mathbf{u}(t) \in \mathbb{R}^{m}$ adalah variabel kontrol (pitch angle, yaw angle, *torque setpoint*), $\boldsymbol{\theta} \in \mathbb{R}^{p}$ adalah parameter model, dan $\mathbf{y}(t)$ adalah output terukur. $\mathbf{w}(t)$ dan $\mathbf{v}(t)$ masing-masing merepresentasikan *process noise* dan *measurement noise* dengan kovarians $\mathbf{Q}$ dan $\mathbf{R}$.

### 2.2 Hybrid Physics-Data-Driven Modeling

Kandemir et al. (2024) menekankan bahwa metodologi hybrid menjadi semakin dominan karena mampu mengkompensasi kelemahan masing-masing pendekatan. Model hybrid secara umum dirumuskan sebagai:

$$\hat{\mathbf{y}}(t) = \alpha \cdot \hat{\mathbf{y}}_{\text{physics}}(t) + (1-\alpha) \cdot \hat{\mathbf{y}}_{\text{data}}(t) + \boldsymbol{\epsilon}(t)$$

di mana $\alpha \in [0,1]$ adalah bobot kontribusi yang dapat bersifat adaptif terhadap *operating regime*. Untuk turbin angin, komponen *physics* umumnya berupa model *blade element momentum* (BEM):

$$P_{\text{aero}} = \frac{1}{2} \rho A C_p(\lambda, \beta) v^3$$

dengan $\rho$ densitas udara, $A = \pi R^2$ swept area, $C_p$ koefisien daya sebagai fungsi *tip-speed ratio* $\lambda = \omega R / v$, dan *pitch angle* $\beta$. Komponen *data-driven* biasanya berupa *recurrent neural network* (RNN) atau *Long Short-Term Memory* (LSTM) dengan fungsi kerugian:

$$\mathcal{L}_{\text{LSTM}} = \frac{1}{N}\sum_{i=1}^{N}\left(y_i - \hat{y}_i^{\text{LSTM}}\right)^2 + \lambda \|\mathbf{W}\|_2^2$$

### 2.3 Kalman Filter dan Bayesian Updating untuk Sinkronisasi

Sinkronisasi antara domain fisik dan virtual PDT dilakukan melalui *Extended Kalman Filter* (EKF) atau *Unscented Kalman Filter* (UKF) untuk sistem nonlinier:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k \left(\mathbf{y}_k - \mathbf{h}(\hat{\mathbf{x}}_{k|k-1})\right)$$

dengan *gain Kalman*:

$$\mathbf{K}_k = \mathbf{P}_{k|k-1}\mathbf{H}_k^T \left(\mathbf{H}_k \mathbf{P}_{k|k-1}\mathbf{H}_k^T + \mathbf{R}_k\right)^{-1}$$

Update kovarians *state* mengikuti:

$$\mathbf{P}_{k|k} = (\mathbf{I} - \mathbf{K}_k \mathbf{H}_k)\mathbf{P}_{k|k-1}$$

### 2.4 Formulasi Prediksi *Remaining Useful Life* (RUL)

Untuk *predictive maintenance*, distribusi RUL dapat dimodelkan melalui *Weibull degradation model*:

$$R(t) = \exp\left(-\left(\frac{t-\tau}{\eta}\right)^{\beta}\right)$$

di mana $\tau$ adalah *location parameter*, $\eta$ adalah *scale parameter* (characteristic life), dan $\beta$ adalah *shape parameter* yang menentukan laju degradasi. *Failure probability density function* (PDF) adalah:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t-\tau}{\eta}\right)^{\beta-1} \exp\left(-\left(\frac{t-\tau}{\eta}\right)^{\beta}\right)$$

### 2.5 Quantum-Inspired Optimization sebagai Pelengkap

Merujuk pada pendekatan Marengo & Santamato (2025) yang menggunakan *Particle Swarm Optimization* (PSO) digabung dengan *Latent Dirichlet Allocation* (LDA) untuk *systematic review*, kita dapat mengadopsi kerangka serupa untuk optimasi bobot hybrid $\alpha$ dalam persamaan PDT:

$$\alpha^{(i+1)} = \omega \alpha^{(i)} + c_1 r_1 (p_{\text{best}}^{(i)} - \alpha^{(i)}) + c_2 r_2 (g_{\text{best}} - \alpha^{(i)})$$

di mana $\omega$ adalah *inertia weight*, $c_1, c_2$ adalah *cognitive* dan *social coefficients*, dan $r_1, r_2 \sim U(0,1)$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PDT di industri energi angin mengikuti kerangka sistematis yang dirangkum dari tinjauan Kandemir et al. (2024) dan adaptasi SOP ISO 23247 untuk *digital twin manufacturing framework*:

**Tahap 1 — Karakterisasi Aset dan Domain Bounded.** Definisikan *boundary of interest* pada subsistem (rotor, drivetrain, tower, kontrol). Tetapkan variabel *state* kritis yang akan di-mirror.

**Tahap 2 — Akuisisi Data dan Instrumentasi IoT.** Pasang sensor getaran (*accelerometer triaxial*), sensor suhu, sensor strain gauge pada *blade root*, dan current transformer pada konverter. Implementasikan protokol MQTT atau OPC UA untuk transmisi data dengan *sampling rate* 1–100 Hz.

**Tahap 3 — Pembangunan Model Hybrid.** Bangun komponen *physics* (BEM + dinamika *drivetrain*), komponen *data* (LSTM/GRU), dan mekanisme fusi melalui bobot adaptif. Validasi silang dengan *k-fold cross-validation* ($k=5$ atau $10$).

**Tahap 4 — Sinkronisasi Real-Time.** Implementasikan EKF/UKF untuk *state estimation*. Pastikan *latency* end-to-end sistem (sensor → edge → cloud → virtual model) tidak melebihi 100 ms untuk aplikasi kontrol aktif, atau 1–5 detik untuk monitoring.

**Tahap 5 — *Co-Simulation* dan *What-If Analysis*.** Integrasikan dengan simulator eksternal (misalnya FAST dari NREL, OpenFAST, atau DNV Bladed) untuk analisis transien. Jalankan *Monte Carlo simulation* dengan $N \geq 10{,}000$ run untuk kuantifikasi ketidakpastian.

**Tahap 6 — *Predictive Maintenance Scheduling* dan *Prescriptive Output*.** Hasilkan rekomendasi waktu penggantian komponen berdasarkan prediksi RUL, dengan optimasi biaya yang mempertimbangkan *downtime cost*, *spare part availability*, dan *logistics*.

**Diagram Arsitektur Teknologi (Lapisan):**

```
┌─────────────────────────────────────────────┐
│  Layer 5: Decision Support & Optimization   │
│  (RUL prediction, maintenance scheduling)   │
├─────────────────────────────────────────────┤
│  Layer 4: Hybrid Model Integration          │
│  (Physics BEM + LSTM + Adaptive α)          │
├─────────────────────────────────────────────┤
│  Layer 3: State Estimation (EKF/UKF)        │
├─────────────────────────────────────────────┤
│  Layer 2: Edge Computing & Data Fusion      │
├─────────────────────────────────────────────┤
│  Layer 1: IoT Sensors & SCADA Interface     │
│  (Vibration, temperature, strain, current)  │
└─────────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Turbin Angin Lepas Pantai 8 MW — Prediksi Kerusakan *Main Bearing*

**Input Parameter Industri:**

- Kapasitas turbin: $P_{\text{rated}} = 8$ MW
- Diameter rotor: $D = 164$ m ($R = 82$ m)
- Kecepatan angin *rated*: $v_{\text{rated}} = 12$ m/s
- Cut-in / cut-out: $v_{\text{in}} = 3$ m/s, $v_{\text{out}} = 25$ m/s
- Weibull shape parameter (lokasi): $k = 2.1$, scale $A = 9.8$ m/s
- Data sensor: $N = 50{,}000$ sampel *vibration RMS* per bulan pada *main bearing*
- Biaya *downtime*: $C_{\text{dt}} = €30{,}000$/jam
- Biaya *preventive replacement*: $C_{\text{pr}} = €250{,}000$
- Biaya *corrective replacement* (unplanned): $C_{\text{cr}} = €500{,}000$

**Langkah 1: Estimasi Parameter Weibull Degradasi**

Dari *historical failure data* (15 turbin sejenis), hasil *Maximum Likelihood Estimation* menghasilkan:

$$\hat{\beta} = 2.85, \quad \hat{\eta} = 18{,}400 \text{ jam}, \quad \hat{\tau} = 8{,}000 \text{ jam}$$

**Langkah 2: Perhitungan RUL dan *Failure Probability***

Misalkan turbin telah beroperasi selama $t = 12{,}000$ jam (akumulasi *equivalent operating hours*). RUL dihitung dari median $(R = 0.5)$:

$$t_{50} = \tau + \eta \cdot (-\ln 0.5)^{1/\beta} = 8{,}000 + 18{,}400 \cdot (0.693)^{1/2.85}$$

Hitung pangkat: $1/\