# 2050 — Desain, Pemodelan, dan Implementasi Digital Twin dalam Sistem Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Design, Modeling and Implementation of Digital Twins
**Jurnal & Sitasi Utama:** Mariana Segovia, Joaquín García-Alfaro (2022). *Sensors*, 22(14), 5396. DOI: [https://doi.org/10.3390/s22145396](https://doi.org/10.3390/s22145396)
**Sitasi Pendukung:** Sagheer Khan, Tughrul Arslan, Tharmalingam Ratnarajah (2022). *IEEE Access*, 10, 31411–31431. DOI: [https://doi.org/10.1109/access.2022.3156062](https://doi.org/10.1109/access.2022.3156062)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental paradigma rekayasa sistem manufaktur, di mana batas antara entitas fisik dan representasi digitalnya semakin menipis melalui konsep *Digital Twin* (DT). Segovia dan García-Alfaro (2022) dalam *Sensors* mendefinisikan DT sebagai himpunan model berbasis komputer yang memetakan objek fisik ke dalam ruang virtual, di mana elemen fisik dan virtual saling bertukar informasi untuk memonitor, menyimulasikan, memprediksi, mendiagnosis, dan mengendalikan status serta perilaku objek fisik tersebut. Pendekatan ini bukan sekadar visualisasi 3D, melainkan sistem integratif yang menggabungkan sensor, jaringan komunikasi, dan model matematis untuk menciptakan闭环 (*closed-loop*) antara dunia fisik dan dunia digital (Segovia & García-Alfaro, 2022, DOI: [10.3390/s22145396](https://doi.org/10.3390/s22145396)).

Urgensi adopsi DT di industri manufaktur modern didorong oleh tiga tekanan struktural. Pertama, **kompleksitas sistem** yang semakin tinggi—sebuah pabrik pintar modern dapat memiliki lebih dari 10.000 sensor IoT yang menghasilkan data *real-time* dengan laju hingga beberapa GB per detik, sehingga operator manusia tidak lagi mampu memproses seluruh informasi secara langsung. Kedua, **tekanan akan keandalan dan ketersediaan** (*availability*) yang tinggi, di mana downtime pada lini produksi semikonduktor dapat menimbulkan kerugian ekonomi hingga $2 juta per jam. Ketiga, **kebutuhan akan prediksi dan optimisasi proaktif**, yang hanya dapat dicapai apabila model digital mampu merepresentasikan state fisik dengan akurasi tinggi. Khan, Arslan, dan Ratnarajah (2022) dalam *IEEE Access* menekankan bahwa DT bukan sekadar integrasi tunggal, melainkan hasil *joint usage* dari berbagai teknologi seperti *Cyber-Physical System* (CPS), *Internet of Things* (IoT), *Big Data*, *Edge Computing*, *Artificial Intelligence* (AI), dan *Machine Learning* (ML) (Khan et al., 2022, DOI: [10.1109/access.2022.3156062](https://doi.org/10.1109/access.2022.3156062)).

Dalam konteks ekonomi digital global, pasar DT diproyeksikan mencapai USD 125,7 miliar pada tahun 2030 dengan CAGR lebih dari 39%, didominasi oleh sektor manufaktur, energi, kesehatan, dan smart city. Implementasi DT secara metodologis masih menjadi tantangan utama—banyak organisasi gagal karena tidak memiliki kerangka desain yang terstruktur. Segovia dan García-Alfaro (2022) menjawab kebutuhan ini dengan mengusulkan metodologi bertahap yang dimulai dari seleksi kebutuhan fungsional, perencanaan arsitektur, hingga integrasi dan verifikasi model digital akhir. Sementara itu, Khan et al. (2022) melengkapi perspektif dengan mengkaji teknologi komunikasi, *reference model*, dan standar yang relevan untuk memastikan interoperabilitas lintas-platform. Dengan demikian, penguasaan metodologi desain, pemodelan, dan implementasi DT merupakan kompetensi inti yang wajib dimiliki insinyur industri abad ke-21.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konseptual Digital Twin

Segovia dan García-Alfaro (2022) membangun DT atas tiga pilar utama: **(i)** entitas fisik (*Physical Entity/PE*), **(ii)** model virtual (*Virtual Entity/VE*), dan **(iii)** koneksi data (*Twin Connection/TC*). Secara matematis, DT dapat direpresentasikan sebagai tuple:

$$DT = \langle PE, VE, TC, S, D \rangle$$

di mana:
- $PE$ = himpunan atribut fisik dengan domain $\mathcal{X} \subseteq \mathbb{R}^n$
- $VE$ = ruang model virtual dengan parameter $\theta \in \Theta$
- $TC$ = fungsi koneksi data: $TC: \mathcal{X} \times \Theta \rightarrow \mathcal{X} \times \Theta$
- $S$ = himpunan layanan (*services*) seperti monitoring, simulasi, prediksi, diagnosis, dan kontrol
- $D$ = himpunan data historis untuk kalibrasi dan validasi model

### 2.2 Model State-Space untuk Synchronization

Representasi dinamis sistem fisik dalam DT mengikuti *state-space model* diskret:

$$x_{k+1} = A x_k + B u_k + w_k$$
$$y_k = C x_k + v_k$$

di mana $x_k \in \mathbb{R}^n$ adalah vektor state pada langkah waktu $k$, $u_k$ adalah vektor input kontrol, $y_k$ adalah output terukur, $A \in \mathbb{R}^{n \times n}$ adalah matriks transisi state, $B$ dan $C$ adalah matriks input-output, sedangkan $w_k \sim \mathcal{N}(0, Q)$ dan $v_k \sim \mathcal{N}(0, R)$ adalah noise proses dan observasi.

Tujuan utama DT adalah memastikan **sinkronisasi state** antara model virtual dan sistem fisik. *Synchronization error* didefinisikan sebagai:

$$e_k = x_k^{real} - x_k^{virtual}$$

dengan norma kesalahan sinkronisasi:

$$\|e_k\|_2 = \sqrt{(x_k^{real} - x_k^{virtual})^T (x_k^{real} - x_k^{virtual})}$$

### 2.3 Filter Kalman sebagai Mekanisme Sinkronisasi

Untuk mencapai sinkronisasi optimal, digunakan **Extended Kalman Filter (EKF)** atau **Unscented Kalman Filter (UKF)** ketika sistem bersifat nonlinier. Langkah prediksi:

$$\hat{x}_{k|k-1} = A \hat{x}_{k-1|k-1} + B u_{k-1}$$
$$P_{k|k-1} = A P_{k-1|k-1} A^T + Q$$

Langkah koreksi:

$$K_k = P_{k|k-1} C^T (C P_{k|k-1} C^T + R)^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (y_k - C \hat{x}_{k|k-1})$$
$$P_{k|k} = (I - K_k C) P_{k|k-1}$$

di mana $K_k$ adalah *Kalman gain*, $P_k$ adalah kovariansi error estimasi, $Q$ dan $R$ berturut-turut adalah kovariansi noise proses dan observasi.

### 2.4 Model Degradasi untuk Predictive Maintenance

Khan et al. (2022) menyoroti bahwa salah satu layanan terpenting DT adalah **Remaining Useful Life (RUL)** prediction. Model degradasi stokastik yang lazim digunakan adalah *Gamma process* atau *Wiener process*. Untuk model Wiener dengan drift:

$$X(t) = X_0 + \mu t + \sigma W(t)$$

di mana $X(t)$ adalah tingkat degradasi pada waktu $t$, $\mu$ adalah laju drift, $\sigma$ adalah volatilitas, dan $W(t)$ adalah proses Wiener standar. RUL didefinisikan sebagai:

$$RUL(t) = \inf\{ \tau \geq 0 : X(t+\tau) \geq L \mid \mathcal{F}_t \}$$

dengan $L$ adalah *failure threshold* dan $\mathcal{F}_t$ adalah filtrasi informasi hingga waktu $t$. Distribusi RUL mengikuti *Inverse Gaussian*:

$$RUL \sim IG\left(\frac{L - X(t)}{\mu}, \frac{(L - X(t))^2}{\sigma^2}\right)$$

### 2.5 Arsitektur Jaringan dan Latency Model

Dalam implementasi industri, komunikasi antara PE dan VE melalui jaringan menghasilkan latensi $\tau_{net}$ yang harus diminimalkan. Model latensi total:

$$\tau_{total} = \tau_{sense} + \tau_{trans} + \tau_{proc} + \tau_{edge} + \tau_{cloud}$$

dengan $\tau_{sense}$ = waktu akuisisi sensor, $\tau_{trans}$ = latensi transmisi, $\tau_{proc}$ = waktu pemrosesan lokal, $\tau_{edge}$ = komputasi edge, dan $\tau_{cloud}$ = komunikasi cloud. Untuk *real-time control*, umumnya $\tau_{total} < 10$ ms (Khan et al., 2022).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Segovia dan García-Alfaro (2022) mengusulkan metodologi konstruksi DT yang terdiri atas **lima fase** dengan penjelasan sebagai berikut.

### Fase 1 — Analisis Kebutuhan Fungsional (*Functional Requirements Selection*)

Tahap awal mengidentifikasi tujuan DT berdasarkan pertanyaan rekayasa:

- Apakah DT主要用于 untuk monitoring (DT *passive*) atau juga untuk kontrol (DT *active*)?
- Apakah diperlukan kemampuan simulasi *what-if*, prediksi RUL, atau optimisasi?
- Bagaimana tingkat fidelitas model yang dibutuhkan?

Kebutuhan ini diterjemahkan ke dalam *Requirement Specification Document* (RSD) yang mencakup variabel state, laju sampling, akurasi, dan *latency budget*.

### Fase 2 — Perencanaan Arsitektur (*Architecture Planning*)

Arsitektur DT mengikuti *Reference Architecture Model Industry 4.0* (RAMI 4.0) atau **ISO 23247** untuk manufaktur. Empat lapisan utama:

1. **Lapisan Sensor & Aktuator** — akuisisi data fisik via IoT, PLC, SCADA.
2. **Lapisan Edge** — preprocessing, filtering, anomaly detection.
3. **Lapisan Platform** — *data lake*, integrasi historis, machine learning pipeline.
4. **Lapisan Aplikasi** — dashboard, simulasi, *decision support*.

Khan et al. (2022) menambahkan pentingnya *communication protocols* seperti OPC UA, MQTT, dan DDS untuk interoperabilitas.

### Fase 3 — Pemodelan Virtual (*Virtual Model Creation*)

Pemilihan jenis model bergantung pada kompleksitas sistem:

- **Fisik-first (white-box)**: persamaan diferensialensialensialensialensial, CFD, FEA—cocok untuk sistem mekanik presisi tinggi.
- **Data-driven (black-box)**: ANN, Random Forest, Gaussian Process—untuk sistem nonlinier kompleks yang sulit dimodelkan secara analitis.
- **Hybrid (gray-box)**: gabungan keduanya untuk memperoleh keseimbangan akurasi dan interpretabilitas.

Validasi model menggunakan metrik RMSE, MAPE, dan $R^2$:

$$RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}, \quad MAPE = \frac{1}{n} \sum_{i=1}^{n} \left| \frac{y_i - \hat{y}_i}{y_i} \right| \times 100\%$$

### Fase 4 — Integrasi & Koneksi (*Twin Connection Integration*)

Tahapan mengimplementasikan *data pipeline* dua arah: **fisik → virtual** (telemetri, *state estimation*) dan **virtual → fisik** (kontrol optimal, *command dispatch*). Middleware yang digunakan lazimnya adalah OPC UA dengan model *publish-subscribe*.

### Fase 5 — Verifikasi, Validasi, dan Akreditasi (VV&A)

Pengujian mencakup:

- **Verifikasi**: apakah model diimplementasikan sesuai spesifikasi? $\epsilon_{model} = \|y_{model} - y_{ref}\|_2$
- **Validasi**: apakah model merepresentasikan sistem fisik dengan akurat pada rentang operasi yang relevan?
- **Continuous monitoring**: drift detection menggunakan *Population Stability Index* (PSI).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Digital Twin Pompa Sentrifugal untuk Predictive Maintenance

Sebuah fasilitas *oil & gas* memiliki pompa sentrifugal kritikal dengan parameter operasional berikut:

**Tabel 1. Parameter Operasional Pompa Sentrifugal**

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Debit nominal | $Q$ | 120 | m³/jam |
| Head nominal | $H$ | 45 | m |
| Kecepatan putar | $N$ | 2950 | rpm |
| Daya motor | $P$ | 22 | kW |
| Getaran baseline | $V_{rms,0}$ | 1.8 | mm/s |
| Suhu bearing | $T_{brg}$ | 58 | °C |
| Threshold getaran ISO 10816 | $V_{limit}$ | 4.5 | mm/s |

**Hipotesis**: Setelah 7.500 jam operasi, getaran terukur $V_{rms} = 3.2$ mm/s dan suhu bearing $T_{brg} = 72$ °C.

### Langkah 1: Model Degradasi Getaran

Asumsikan degradasi mengikuti model Wiener dengan drift$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
