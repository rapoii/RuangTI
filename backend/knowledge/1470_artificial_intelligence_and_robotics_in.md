# 1470 — Integrasi Kecerdasan Buatan dan Robotika dalam Pemeliharaan Prediktif: Kerangka Rekayasa Sistematis untuk Transformasi Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Artificial intelligence and robotics in predictive maintenance: a comprehensive review
**Jurnal & Sitasi Utama:** Joseph Azeta, Theodore Tochukwu Omeche, Ilesanmi Daniyan (2026). *Frontiers in Mechanical Engineering*. DOI: [https://doi.org/10.3389/fmech.2025.1722114](https://doi.org/10.3389/fmech.2025.1722114)
**Sitasi Pendukung:** Zsófia Tóth, Alexey Sklyar, Christian Kowalkowski (2022). *Industrial Marketing Management*. DOI: [https://doi.org/10.1016/j.indmarman.2022.02.010](https://doi.org/10.1016/j.indmarman.2022.02.010)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*Predictive Maintenance* – PdM) telah muncul sebagai pilar strategis dalam rekayasa keandalan (*reliability engineering*) modern, menggantikan paradigma lama berupa pemeliharaan reaktif (run-to-failure) dan pemeliharaan berjadwal (time-based/calendar-based) yang terbukti inefisien secara ekonomi dan operasional. Seperti ditegaskan oleh Azeta, Omeche, dan Daniyan (2026) dalam tinjauan sistematisnya di *Frontiers in Mechanical Engineering* (DOI: [10.3389/fmech.2025.1722114](https://doi.org/10.3389/fmech.2025.1722114)), integrasi kecerdasan buatan (*Artificial Intelligence* – AI) dan robotika ke dalam sistem PdM "telah membawa perubahan mendasar pada operasi industri karena meninggalkan metode pemeliharaan reaktif dan terjadwal demi model proaktif berbasis data." Pergeseran ini bukan sekadar peningkatan teknologi, melainkan transformasi struktural dalam rantai nilai manufaktur dan layanan industrial.

Konteks urgensi industri dapat diukur dari besaran kerugian ekonomi akibat downtime yang tidak direncanakan. Pada industri proses kontinu seperti petrokimia, semen, dan pembangkitan listrik, satu jam unplanned shutdown dapat menimbulkan kerugian langsung senilai USD 250.000 hingga USD 500.000, belum termasuk kerugian *intangible* berupa reputasi rantai pasok, penalti kontrak, dan degradasi *overall equipment effectiveness* (OEE). Menurut estimasi konsultan internasional McKinsey & Company yang dikutip secara luas dalam literatur PdM, penerapan predictive maintenance berbasis AI berpotensi menurunkan biaya pemeliharaan sebesar 25–30%, mengurangi unplanned downtime hingga 70%, dan menurunkan inventory persediaan suku cadang sebesar 30%. Azeta et al. (2026) menegaskan bahwa algoritma *supervised learning* seperti *Support Vector Machines* (SVM) dan *Artificial Neural Networks* (ANN) menunjukkan akurasi sangat tinggi dalam *fault classification* dan prediksi *Remaining Useful Life* (RUL), sementara metode *unsupervised learning* menjadi solusi kunci untuk deteksi anomali pada skenario dengan data berlabel terbatas.

Di sisi permintaan pasar, konvergensi antara digitalisasi dan servitisasi telah menciptakan lanskap bisnis baru yang disebut Tóth, Sklyar, dan Kowalkowski (2022) dalam *Industrial Marketing Management* (DOI: [10.1016/j.indmarman.2022.02.010](https://doi.org/10.1016/j.indmarman.2022.02.010)) sebagai *digital servitization*. Berdasarkan 56 wawancara mendalam dan kunjungan lapangan pada industri dirgantara (*aerospace*) dan maritim (*maritime*), para penulis menemukan delapan ketegangan paradoks—empat intra-organisasional (digitally enabled control, digital upkeep, professional identity, performance priorities) dan empat inter-organisasional (platform-based coopetition, information superabundance, organizational identity, data utilization). Integrasi PdM berbasis AI tidak dapat dilepaskan dari konteks ini: ketika vendor peralatan menawarkan layanan "as-a-service" dengan sensor PdM tertanam, maka muncul ketegangan antara kontrol data pelanggan dan akses diagnostik vendor, antara identitas profesional teknisi lapangan dan algoritma cloud-based decision support.

Dalam konteks Indonesia sebagai negara dengan sektor manufaktur kontributor PDB sebesar 19,7% (BPS, 2024) dan lebih dari 30.000 perusahaan manufaktur skala menengah-besar, adopsi PdM berbasis AI masih berada pada tingkat nascent. Modul 1470 ini disusun untuk membekali insinyur industri dengan kerangka teoritis, formulasi matematis, dan prosedur operasional yang dibutuhkan untuk merancang, mengimplementasikan, dan mengevaluasi sistem PdM cerdas secara rigor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Keandalan dan Degradasi

Dasar matematis utama PdM adalah fungsi keandalan (*reliability function*) yang memodelkan probabilitas suatu komponen beroperasi tanpa kegagalan hingga waktu $t$. Distribusi Weibull dua parameter banyak digunakan karena fleksibilitasnya memodelkan berbagai karakteristik kegagalan (kerusakan awal, keausan acak, dan keausan lelah):

$$R(t) = e^{-(t/\beta)^{\alpha}}, \quad t \geq 0$$

dengan $\alpha > 0$ adalah *shape parameter* (parameter bentuk) yang menentukan karakteristik laju kegagalan, dan $\beta > 0$ adalah *scale parameter* (parameter skala) yang menyatakan umur karakteristik (*characteristic life*). Laju kegagalan (*hazard rate*) dinyatakan sebagai:

$$h(t) = \frac{f(t)}{R(t)} = \frac{\alpha}{\beta}\left(\frac{t}{\beta}\right)^{\alpha-1}$$

di mana $f(t) = -\frac{dR(t)}{dt}$ adalah fungsi densitas kegagalan. Untuk komponen yang mengalami degradasi monotonik (misalnya keausan bantalan peluru), estimasi parameter $\alpha > 1$ mengindikasikan fase *wear-out*.

### 2.2 Prediksi Remaining Useful Life (RUL)

RUL didefinisikan sebagai selang waktu tersisa hingga komponen mencapai ambang batas kegagalan (*failure threshold*). Jika $X_t$ adalah *health indicator* (HI) yang diobservasi melalui sensor pada waktu $t$, dan $D$ adalah ambang batas degradasi kritis, maka RUL dapat diformulasikan sebagai:

$$L(t) = \inf\{\tau \geq 0 : X_{t+\tau} \geq D \mid X_t\}$$

Dalam kerangka *data-driven*, RUL diprediksi melalui model regresi yang mempelajari pemetaan antara vektor fitur sensor $\mathbf{x}_t = [x_{t-k}, \ldots, x_t]$ dengan $L(t)$ menggunakan algoritma SVM dengan kernel Radial Basis Function (RBF):

$$L(t) \approx \sum_{i=1}^{N_{SV}} (\alpha_i - \alpha_i^*) K(\mathbf{x}_i, \mathbf{x}_t) + b$$

dengan $K(\mathbf{x}_i, \mathbf{x}_t) = \exp\left(-\gamma \|\mathbf{x}_i - \mathbf{x}_t\|^2\right)$ adalah kernel RBF, $\gamma$ adalah parameter lebar kernel, dan $N_{SV}$ adalah jumlah *support vectors*. Azeta et al. (2026) menekankan bahwa arsitektur *Long Short-Term Memory* (LSTM) dan *Convolutional Neural Networks* (CNN) menunjukkan superioritas dalam menangkap dependensi temporal pada data deret waktu sensor.

### 2.3 Deteksi Anomali dengan Unsupervised Learning

Ketika data kegagalan berlabel langka, pendekatan *unsupervised anomaly detection* berbasis *Isolation Forest* atau *Autoencoder* digunakan. Skor anomali Isolation Forest untuk sampel $\mathbf{x}$ adalah:

$$s(\mathbf{x}, n) = 2^{-\frac{E[h(\mathbf{x})]}{c(n)}}$$

dengan $E[h(\mathbf{x})]$ adalah panjang rata-rata jalur dari $\mathbf{x}$ ke daun (*leaf*) di *isolation tree*, dan $c(n) = 2H(n-1) - \frac{2(n-1)}{n}$ adalah konstanta normalisasi dengan $H(i)$ bilangan harmonik ke-$i$. Sampel dengan $s(\mathbf{x}, n)$ mendekati 1 diklasifikasikan sebagai anomali.

### 2.4 Model Ekonomi PdM

Pengukuran kelayakan ekonomi PdM menggunakan *Net Present Value* (NPV) selama horizon perencanaan $T$:

$$NPV = \sum_{t=0}^{T} \frac{B_t - C_t}{(1+r)^t}$$

dengan $B_t$ adalah manfaat tahunan (pengurangan downtime, pengurangan biaya perbaikan darurat), $C_t$ adalah biaya (sensor, platform AI, integrasi robotik), dan $r$ adalah *discount rate*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Azeta et al. (2026) menyusun arsitektur PdM berbasis AI-robotika dalam lima lapisan (*five-layer architecture*). Berikut adalah adaptasi SOP untuk implementasi di lantai pabrik:

**Tahap 1 — Akuisisi Data & Instrumentasi Sensor.**
Pasang sensor multimodal pada aset kritis: akselerometer triaksial (vibrasi, 0–10 kHz), termokopel tipe K (suhu, 0–1200°C), sensor akustik emisi, dan sensor arus listrik. Sampling rate minimum 25,6 kHz sesuai standar ISO 13373-1 untuk condition monitoring vibrasi. Data dikirim melalui protokol MQTT atau OPC UA ke *edge gateway*.

**Tahap 2 — Pre-processing & Feature Engineering.**
Terapkan filtering (low-pass Butterworth orde 4, frekuensi cut-off 5 kHz), ekstraksi fitur domain waktu (RMS, kurtosis, crest factor), domain frekuensi (FFT dengan 8192 titik, identifikasi frekuensi fundamental dan harmonisa), dan domain waktu-frekuensi (*wavelet packet decomposition* dengan *Daubechies-4 mother wavelet*).

**Tahap 3 — Pelatihan Model AI.**
Lakukan *cross-validation* 10-fold untuk menghindari overfitting. Untuk setiap kelas fault (normal, imbalance, misalignment, looseness, bearing defect), minimal kumpulkan 500 sampel berlabel. Evaluasi model dengan metrik akurasi, presisi, *recall*, dan F1-score; target F1-score minimum 0,90 untuk go-live.

**Tahap 4 — Integrasi Robotik & Closed-Loop Actuation.**
Ketika anomali terdeteksi dan diklasifikasikan sebagai fault serius, *mobile robot* atau *cobot* diaktifkan untuk inspeksi visual (kamera termal + kamera hyperspectral), pelumasan otomatis, atau penggantian modul sesuai SOP. Keputusan aktuasi mengikuti *decision matrix* berbasis *risk priority number* (RPN) dari standar FMEA IEC 60812.

**Tahap 5 — Continuous Learning & Model Drift Monitoring.**
Pantau *model drift* dengan metrik Population Stability Index (PSI) pada distribusi fitur input. Jika PSI > 0,25, jadwalkan *retraining* dengan data terbaru. Azeta et al. (2026) menyoroti pentingnya *human-in-the-loop* agar teknisi senior dapat memvalidasi rekomendasi AI sebelum eksekusi aktuasi robotik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Sebuah pabrik semen di Jawa Timur memiliki *vertical roller mill* (VRM) untuk penggilingan clinker dengan kapasitas produksi 80 ton/jam. Komponen kritis adalah *roller bearing* (diameter bore 480 mm) yang selama tiga tahun terakhir mengalami tiga kali unplanned shutdown dengan total kerugian Rp 4,2 miliar. Manajemen memutuskan mengimplementasikan sistem PdM berbasis AI.

**Langkah 1 — Penentuan Parameter Weibull dari Data Historis.**
Dari analisis kegagalan tiga unit bearing yang sejenis, diperoleh: $\hat{\alpha} = 2{,}4$ dan $\hat{\beta} = 18.000$ jam. Laju kegagalan pada $t = 12.000$ jam:

$$h(12.000) = \frac{2{,}4}{18.000}\left(\frac{12.000}{18.000}\right)^{2{,}4-1} = 1{,}333 \times 10^{-4} \times (0{,}667)^{1{,}4}$$
$$h(12.000) = 1{,}333 \times 10^{-4} \times 0{,}576 = 7{,}68 \times 10^{-5} \text{ kegagalan/jam}$$

Probabilitas kegagalan kumulatif pada $t = 12.000$ jam:

$$F(12.000) = 1 - e^{-(12.000/18.000)^{2{,}4}} = 1 - e^{-0{,}576} = 1 - 0{,}562 = 0{,}438$$

Artinya, pada usia 12.000 jam, terdapat peluang 43,8% bearing telah mengalami degradasi serius — mengonfirmasi