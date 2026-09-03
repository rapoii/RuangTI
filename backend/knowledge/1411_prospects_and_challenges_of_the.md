# 1411 — Machine Learning dan Metode Data-Driven untuk Analisis Prediktif Sistem Tenaga: Tinjauan Prospek dan Tantangan, dengan Aplikasi pada Prediksi RUL Baterai Lithium-Ion

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Prospects and Challenges of the Machine Learning and Data-Driven Methods for the Predictive Analysis of Power Systems: A Review
**Jurnal & Sitasi Utama:** Wadim Striełkowski, Andrey Vlasov, Kirill Selivanov (2023). *Energies*. DOI: [https://doi.org/10.3390/en16104025](https://doi.org/10.3390/en16104025)
**Sitasi Pendukung:** Vahid Safavi, Arash Mohammadi Vaniar, Najmeh Bazmohammadi (2024). *Journal of Energy Storage*. DOI: [https://doi.org/10.1016/j.est.2024.113176](https://doi.org/10.1016/j.est.2024.113176)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi sistem tenaga konvensional menuju *smart grid* yang terintegrasi dengan sumber energi terbarukan berskala besar merupakan salah satu tantangan teknis paling signifikan abad ke-21. Striełkowski, Vlasov, dan Selivanov (2023, DOI: [10.3390/en16104025](https://doi.org/10.3390/en16104025)) menekankan bahwa karakteristik intermiten dan fluktuatif dari pembangkitan listrik berbasis angin, surya, dan hidro-terbarukan menciptakan ketidakpastian operasional yang tidak dapat dikelola secara andal oleh pendekatan deterministic dispatch konvensional. Dalam konteks ini, *machine learning* (ML) dan metode *data-driven* muncul sebagai enabler utama karena kapasitasnya memproses volume data masif yang dihasilkan oleh Advanced Metering Infrastructure (AMI), sensor Phasor Measurement Unit (PMU), SCADA, dan platform Internet of Energy (IoE) yang mengintegrasikan IoT, *blockchain*, serta kecerdasan buatan.

Urgensi ekonomi dari transisi ini sangat substansial. Menurut International Energy Agency (IEA) yang dirujuk dalam tinjauan Striełkowski et al. (2023), investasi global pada pembaruan jaringan listrik dan digitalisasi sistem tenaga diproyeksikan melebihi USD 600 miliar per tahun pada 2030. Kegagalan dalam melakukan prediksi beban (*load forecasting*), deteksi anomali, dan penjadwalan pembangkitan terdistribusi secara akurat akan menghasilkan penalty cost berupa pembelian energi listrik tambahan dari pasar spot, kerusakan aset transformator dan inverter, serta ketidakstabilan frekuensi sistem yang berujung pada pemadaman bergilir (*load shedding*). Pada tataran operasional, rugi-rugi transmisi dan distribusi di banyak negara berkembang masih berada pada kisaran 8–15%, sebuah inefisiensi yang secara langsung menurunkan margin EBITDA operator jaringan.

Perspektif rantai pasok energi juga turut bergeser. Komponen baterai lithium-ion yang menjadi tulang punggung penyimpanan energi stasioner maupun mobilitas listrik memerlukan strategi *predictive maintenance* berbasis Remaining Useful Life (RUL). Safavi, Mohammadi Vaniar, dan Bazmohammadi (2024, DOI: [10.1016/j.est.2024.113176](https://doi.org/10.1016/j.est.2024.113176)) menunjukkan bahwa arsitektur CNN-XGBoost yang dioptimasi dengan Coati Optimization Algorithm (COM) mampu memprediksi RUL baterai hanya berdasarkan 100 siklus pertama, yang merupakan terobosan signifikan karena memperpendek *time-to-decision* bagi operator Battery Energy Storage System (BESS) dalam sistem tenaga modern.

Dari sudut pandang *industrial engineering*, permasalahan utama yang harus dijawab adalah: bagaimana mengonversi ledakan data heterogen dari smart grid menjadi keputusan operasional yang presisi dan tepat waktu, dengan tetap memenuhi standar keandalan N-1 contingency, batas emisi karbon, dan约束 biaya Levelized Cost of Energy (LCOE)? Dokumen modul ini akan menjawab pertanyaan tersebut secara sistematis melalui formulasi matematis, arsitektur teknologi, serta studi kasus kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Prediksi Beban dan State Estimation

Striełkowski et al. (2023) meninjau bahwa inti analitik prediktif sistem tenaga adalah fungsi pemetaan antara vektor fitur input $\mathbf{x}_t \in \mathbb{R}^n$ pada waktu diskrit $t$ terhadap target $\hat{y}_{t+h}$ pada horizon $h$ langkah ke depan. Secara umum:

$$\hat{y}_{t+h} = f_\theta(\mathbf{x}_t) + \epsilon_t$$

di mana $f_\theta$ adalah model parametrik dengan himpunan parameter $\theta$, dan $\epsilon_t$ merepresentasikan *stochastic noise*. Vektor fitur tipikal mencakup temperatur lingkungan $T_t$, kelembapan relatif $H_t$, irradiance matahari $G_t$, kecepatan angin $v_t$, harga listrik pasar spot $\pi_t$, serta konsumsi historis $y_{t-1}, y_{t-2}, \dots, y_{t-p}$.

Fungsi objektif pelatihan yang lazim digunakan adalah *Mean Squared Error* (MSE) untuk model regresif:

$$\mathcal{L}_{\text{MSE}}(\theta) = \frac{1}{N}\sum_{i=1}^{N}\bigl(y_i - f_\theta(\mathbf{x}_i)\bigr)^2$$

Untuk sistem tenaga dengan fluktuasi tinggi, Huber loss sering lebih robust:

$$\mathcal{L}_\delta(r) = \begin{cases} \frac{1}{2}r^2 & \text{if } |r| \le \delta \\ \delta\bigl(|r| - \tfrac{1}{2}\delta\bigr) & \text{if } |r| > \delta \end{cases}$$

di mana $r = y - f_\theta(\mathbf{x})$ adalah residual dan $\delta$ adalah hyperparameter ambang batas (umumnya $\delta=1.0$).

### 2.2 Arsitektur CNN-XGBoost untuk Prediksi RUL Baterai

Safavi et al. (2024, DOI: [10.1016/j.est.2024.113176](https://doi.org/10.1016/j.est.2024.113176)) mengusulkan model hybrid dua tahap. Tahap pertama: Convolutional Neural Network (CNN) mengekstrak fitur spasial dari representasi matriks discharge capacity $C_{t,k}$ (siklus ke-$k$ pada waktu $t$) yang diubah menjadi citra 2-D berdimensi $H \times W$. Operasi konvolusi diskrit:

$$\mathbf{z}^{(l)} = \sigma\bigl(\mathbf{W}^{(l)} * \mathbf{z}^{(l-1)} + \mathbf{b}^{(l)}\bigr)$$

dengan $\mathbf{W}^{(l)}$ adalah kernel konvolusi pada layer $l$, $\mathbf{b}^{(l)}$ bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi ReLU $\sigma(z)=\max(0,z)$. Pooling dilakukan melalui *max-pooling* untuk menekan dimensionalitas:

$$p^{(l)}_{i,j} = \max_{(u,v)\in \Omega_{i,j}} z^{(l)}_{u,v}$$

Tahap kedua: fitur hasil flatten CNN $\mathbf{f}_{\text{CNN}} \in \mathbb{R}^{m_1}$ digabungkan (*concatenate*) dengan fitur engineered dari 100 siklus awal (misalnya kapasitas rata-rata $\bar{C}_{100}$, kapasitas minimum $C_{\min,100}$, dan Coulombic efficiency $\eta_C$):

$$\mathbf{f}_{\text{combined}} = [\mathbf{f}_{\text{CNN}} \parallel \bar{C}_{100} \parallel C_{\min,100} \parallel \eta_C] \in \mathbb{R}^{m_1 + 3}$$

Vektor ini kemudian dimasukkan ke XGBoost yang memodelkan regresi melalui ansambel pohon keputusan:

$$\hat{y}_{\text{RUL}} = \sum_{k=1}^{K} f_k(\mathbf{f}_{\text{combined}}), \quad f_k \in \mathcal{F}$$

dengan regularisasi objektif:

$$\mathcal{L}_{\text{XGB}} = \sum_{i=1}^{N} \ell\bigl(y_i, \hat{y}_i\bigr) + \sum_{k=1}^{K} \Omega(f_k)$$

di mana $\Omega(f_k) = \gamma T + \tfrac{1}{2}\lambda \sum_{j=1}^{T} w_j^2$, $T$ adalah jumlah daun, $w_j$ bobot daun, sementara $\gamma$ dan $\lambda$ adalah koefisien regularisasi.

### 2.3 Optimasi Hyperparameter dengan Coati Optimization Algorithm (COM)

Safavi et al. (2024) mengadopsi *Coati Optimization Algorithm* yang meniru perilaku koati (naseberry) dalam berburu iguana dan躲避 predator. Posisi setiap koati (kandidat solusi) diperbarui:

$$\mathbf{X}_i^{t+1} = \mathbf{X}_i^{t} + r_1 \cdot \bigl(\mathbf{X}_{\text{best}} - \mathbf{X}_i^{t}\bigr) + r_2 \cdot \bigl(\mathbf{X}_{r1} - \mathbf{X}_{r2}\bigr)$$

di mana $r_1, r_2 \sim U(0,1)$, $\mathbf{X}_{\text{best}}$ adalah posisi koati terbaik (solusi optimal saat itu), dan $\mathbf{X}_{r1}, \mathbf{X}_{r2}$ adalah posisi acak. Strategi eksplorasi saat menghindari predator menggunakan Levy flight:

$$\mathbf{X}_i^{t+1} = \mathbf{X}_i^{t} + \alpha \otimes \text{Levy}(\beta)$$

dengan $\alpha$ adalah *step size* adaptif dan $\beta=1.5$ adalah parameter distribusi stabil.

### 2.4 Metrik Evaluasi Kinerja Prediktif

Untuk menilai akurasi model, digunakan metrik:

$$\text{RMSE} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(y_i - \hat{y}_i)^2}$$

$$\text{MAPE} = \frac{100\%}{N}\sum_{i=1}^{N}\left|\frac{y_i - \hat{y}_i}{y_i}\right|$$

$$R^2 = 1 - \frac{\sum_{i=1}^{N}(y_i - \hat{y}_i)^2}{\sum_{i=1}^{N}(y_i - \bar{y})^2}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti kerangka *cross-industry standard process for data mining* (CRISP-DM) yang diperluas dengan validasi domain teknik tenaga. Tahapan SOP sebagai berikut:

**Tahap 1 — Pemahaman Bisnis & Konteks Sistem Tenaga.** Tentukan sasaran: prediksi beban 24-jam, prediksi RUL baterai BESS, atau deteksi anomali gardu induk. Tetapkan KPI bisnis: MAE < 2% dari beban puncak, prediksi RUL error < 5%, *false positive* deteksi anomali < 1%. Standar rujukan: IEEE Std 1547-2018 untuk integrasi DER, IEC 61850 untuk komunikasi substasi, dan ISO 50001 untuk manajemen energi.

**Tahap 2 — Akuisisi & Kurasi Data.** Data ditarik dari Historian OSIsoft PI, AMI, dan sensor PMU melalui *stream processing* Apache Kafka. Resolusi waktu: 1 menit untuk PMU, 15 menit untuk AMI, dan per-siklus untuk data baterai. Data cleaning menggunakan *interquartile range* (IQR) untuk deteksi outlier:

$$\text{Outlier jika } x_i < Q_1 - 1.5 \cdot \text{IQR} \lor x_i > Q_3 + 1.5 \cdot \text{IQR}$$

**Tahap 3 — Feature Engineering.** Untuk prediksi beban, masukkan fitur kalender (jam, hari, musim), fitur cuaca (T, H, G, v), dan fitur lag. Untuk baterai, konversi kurva discharge ke citra 2-D menggunakan teknik Gramian Angular Field (GAF) sesuai Safavi et al. (2024).

**Tahap 4 — Pemodelan & Tuning.** Pilih arsitektur: LSTM untuk sekuens temporal beban, CNN-XGBoost untuk RUL baterai. Optimasi hyperparameter dengan COM atau Bayesian Optimization. Validasi silang *time-series split* (bukan k-fold acak) untuk mencegah kebocoran informasi temporal.

**Tahap 5 — Deployment & MLOps.** Model containerized dalam Docker, diorkestrasi Kubernetes, dengan monitoring *model drift* menggunakan Population Stability Index (PSI):

$$\text{PSI} = \sum_{j=1}^{J} (p_j^{\text{ref}} - p_j^{\text{new}}) \cdot \ln\left(\frac{p_j^{\text{ref}}}{p_j^{\text{new}}}\right)$$

Ambang: PSI < 0.1 = stabil, 0.1–0.25 = peringatan, > 0.25 = retraining.

**Tahap 6 — Loop Perbaikan Berkelanjutan.** Feedback loop dari operator gardu induk dimasukkan sebagai label baru (active learning).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario

Sebuah utilitas listrik di Asia Tenggara mengoperasikan BESS dengan kapasitas total 50 MWh yang terdiri atas 12.480 sel baterai lithium-ion (format 18650, kapasitas nominal 2.5 Ah per sel). Manajer operasi ingin memprediksi RUL baterai guna menjadwalkan *augmentation* kapasitas dan mencegah degradasi mendadak.

### 4.2 Data Latih (100 Siklus Pertama)

Ambil data publik NASA Battery Dataset (Safavi et al., 2024 menggunakan dataset serupa). Misalkan fitur engineered dari 100 siklus awal:

| Fitur | Nilai |
|---|---|
| Kapasitas rata-rata siklus 1–100, $\bar{C}_{100}$ | 2.045 Ah |
| Kapasitas minimum siklus 1–100, $C_{\min,100}$ | 1.952 Ah |
| Coulombic efficiency $\eta_C$ | 0.9927 |
| Internal resistance trend $\Delta R_{100}$ | 0.012 Ω |
| Vektor fitur CNN $\mathbf{f}_{\text{CNN}}$ (256-dimensi) | diekstrak otomatis |

### 4.3 Perhitungan Manual