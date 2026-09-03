# 2014 — Analitik Pemeliharaan Prediktif dan Implementasi Digital Twin untuk Armada Pesawat: Tantangan, Peluang, dan Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Predictive maintenance analytics and implementation for aircraft: Challenges and opportunities*
**Jurnal & Sitasi Utama:** Izaak Stanton, Kamran Munir, Ahsan Ikram (2022). *Systems Engineering*. DOI: [https://doi.org/10.1002/sys.21651](https://doi.org/10.1002/sys.21651)
**Sitasi Pendukung:** Alireza Sadeghi, Paolo Bellavista, Wenjuan Song (2024). *IEEE Access*. DOI: [https://doi.org/10.1109/access.2024.3371902](https://doi.org/10.1109/access.2024.3371902)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tekanan struktural yang semakin kompleks sepanjang dasawarsa terakhir. Pertumbuhan trafik penumpang yang diproyeksikan tumbuh dengan Compound Annual Growth Rate (CAGR) sekitar 4,3% per tahun hingga 2037 (berdasarkan data IATA yang banyak dikutip dalam literatur *Systems Engineering*),迫使 maskapai untuk menekan *Aircraft On Ground* (AOG) seminimal mungkin sembari mempertahankan tingkat keselamatan yang ditentukan regulator. Stanton, Munir, dan Ikram (2022) dalam *tinjauan literatur sistematis* yang dipublikasikan di *Systems Engineering* (DOI: [10.1002/sys.21651](https://doi.org/10.1002/sys.21651)) menegaskan bahwa peningkatan ketersediaan data dari sensor embedded pada peralatan industri telah memicu kebangkitan *industrial predictive maintenance* (PdM). Dalam konteks pesawat terbang, PdM bukan sekadar alat bantu penjadwalan, melainkan instrumen strategis untuk mengoptimalkan *maintenance schedules*, mereduksi *aircraft downtime*, dan mengidentifikasi *unexpected faults* sebelum menjadi *catastrophic failure*.

Urgensi ekonominya dapat dihitung dari struktur biaya operasional: biaya *direct maintenance cost* (DMC) umumnya menyerap 10–15% dari *total operating cost* maskapai, dan setiap jam AOG pesawat narrow-body seperti Boeing 737 dapat menimbulkan kerugian pendapatan antara USD 25.000–50.000. Paradigma lama berbasis *scheduled/preventive maintenance* memiliki kelemahan struktural berupa *over-maintenance* (mengganti komponen yang masih layak pakai) maupun *under-maintenance* (komponen gagal di antara interval inspeksi). Karena itulah, arsitektur PdM yang diusulkan Stanton et al. (2022) berupaya memindahkan *trigger* pemeliharaan dari berbasis waktu menjadi berbasis kondisi (*condition-based*) dan berbasis prognosis (*prognostic*).

Di sisi lain, Sadeghi, Bellavista, dan Song (2024) dalam *IEEE Access* (DOI: [10.1109/access.2024.3371902](https://doi.org/10.1109/access.2024.3371902)) memperkenalkan paradigma *Digital Twin* (DT) sebagai representasi virtual pesawat yang menerima data dari entitas fisik untuk melakukan *real-time, accurate, fast, and predictive condition monitoring*. Konvergensi IT–OT–ET yang menjadi pilar *Industry 4.0* memungkinkan integrasi antara telemetry pesawat (ACARS, *Quick Access Recorder*, sensor IoT), *edge computing*, dan model *physics-of-failure* dalam satu kerangka koheren. Tulisan ini berargumen bahwa DT bukan sekadar *visualization tool*, melainkan enabler untuk *fleet-wide reliability engineering* yang mampu menghubungkan *unit-level degradation trajectory* dengan *fleet-level optimization*.

Kedua paper tersebut saling melengkapi: Stanton et al. memetakan *state-of-the-art* aplikasi dan tantangan riset, sementara Sadeghi et al. menyediakan arsitektur *implementation* yang konkrit. Gabungan keduanya menjadi landasan bagi modul 2014 yang membahas bagaimana Teknik Industri—melalui *reliability engineering*, *optimization*, dan *systems engineering*—mentranslasikan data sensor menjadi keputusan pemeliharaan yang terukur secara ekonomis dan probabilistik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Reliabilitas untuk Komponen Kritis Pesawat

Fondasi analitik PdM terletak pada teori reliabilitas. Untuk komponen seperti *landing gear actuator*, *auxiliary power unit* (APU), atau *turbine engine blade*, distribusi Weibull dua parameter merupakan standar de facto karena mampu memodelkan tiga fase *bathtub curve* secara fleksibel:

$$R(t) = \exp\!\left[-\left(\frac{t}{\eta}\right)^{\beta}\right], \quad t \geq 0$$

dengan $\eta > 0$ adalah *scale parameter* (umur karakteristik) dan $\beta > 0$ adalah *shape parameter*. Untuk $\beta < 1$ komponen berada pada fase *infant mortality*, $\beta \approx 1$ menandai laju gagal acak (exponensial), dan $\beta > 1$ mengindikasikan fase *wear-out*. *Hazard rate* atau *instantaneous failure rate* didefinisikan sebagai:

$$h(t) = \frac{f(t)}{R(t)} = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Nilai $h(t)$ inilah yang biasanya dipantau oleh *Condition Monitoring System* (CMS) pesawat melalui parameter seperti getaran, suhu *bearing housing*, dan tekanan hidrolik.

### 2.2 Prognostik dan Estimasi Remaining Useful Life (RUL)

Pendekatan prognostik bertujuan mengestimasi *Remaining Useful Life* $T_{RUL}$ yang didefinisikan sebagai waktu residual sampai komponen mencapai *failure threshold* $L$. Secara stokastik, dengan $T$ sebagai *time-to-failure* dan $t$ sebagai usia saat ini:

$$\mathbb{E}\!\left[T_{RUL}\mid T>t\right] = \frac{\displaystyle\int_{t}^{\infty} (x-t)\,f(x)\,dx}{R(t)} = \frac{\displaystyle\int_{0}^{\infty} R(t+x)\,dx}{R(t)}$$

Untuk distribusi Weibull, formula ini menghasilkan bentuk tertutup:

$$\mathbb{E}\!\left[T_{RUL}\right] = \eta\,\Gamma\!\left(1+\tfrac{1}{\beta}, \left(\tfrac{t}{\eta}\right)^{\beta}\right)\cdot\frac{1}{R(t)}$$

dengan $\Gamma(s, a) = \int_{a}^{\infty} u^{s-1} e^{-u}\,du$ adalah *upper incomplete gamma function*. *State-space update* untuk DT dapat diformulasikan dengan *Kalman filter* linier:

$$\hat{x}_{k\mid k} = \hat{x}_{k\mid k-1} + K_k\,(y_k - C\hat{x}_{k\mid k-1}), \quad K_k = P_{k\mid k-1}C^{T}(CP_{k\mid k-1}C^{T}+R)^{-1}$$

dengan $\hat{x}_{k\mid k}$ estimasi *degradation state* (misalnya panjang retakan pada *fan blade*), $y_k$ pembacaan sensor, $K_k$ gain Kalman, dan $R$ kovariansan observasi. Sadeghi et al. (2024) menekankan bahwa DT meng-*extend* persamaan ini ke dimensi *fleet-level* dengan menambahkan indeks pesawat $i \in \{1,\dots,N\}$.

### 2.3 Optimasi Interval Pemeliharaan

Stanton et al. (2022) meninjau formulasi *expected total cost* per unit waktu:

$$C_{total} = \frac{C_{insp}\cdot f_{insp} + C_{PM} + C_{CM} + C_{F}\cdot P(\text{failure})}{\text{MTBF}_{optimal}}$$

dengan $C_{F}$ adalah biaya *unscheduled failure* (mencakup AOG, penumpang re-routing, *penalty*), $C_{PM}$ biaya *preventive replacement*, $C_{CM}$ biaya *corrective maintenance*, dan $P(\text{failure})$ probabilitas gagal antara dua inspeksi. Model *age-replacement* klasik dari Barlow & Hunter menghasilkan kebijakan optimal:

$$T^{*} = \arg\min_{T}\; \frac{C_{PM} + C_{F}\cdot \bigl[1 - R(T)\bigr]}{\displaystyle\int_{0}^{T} R(u)\,du}$$

### 2.4 Deteksi Anomali dan Evaluasi Klasifier

Untuk algoritma deteksi anomai (misalnya *Random Forest*, *LSTM autoencoder*, atau *Isolation Forest*), performa dievaluasi dengan *Receiver Operating Characteristic – Area Under Curve* (ROC-AUC):

$$\text{AUC} = \int_{0}^{1} \text{TPR}\bigl(\text{FPR}^{-1}(x)\bigr)\,dx$$

dengan $\text{TPR} = \frac{TP}{TP+FN}$ dan $\text{FPR} = \frac{FP}{FP+TN}$. Stanton et al. (2022) melaporkan bahwa trade-off antara *detection latency* dan *false alarm rate* harus dioptimasi melalui *cost matrix*:

$$\mathbb{E}[\text{loss}] = C_{FA}\cdot P(FA) + C_{miss}\cdot P(miss)$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Implementasi

Penerapan PdM untuk armada pesawat mengikuti arsitektur berlapis yang konsisten dengan rekomendasi Stanton et al. (2022) dan Sadeghi et al. (2024):

1. **Data Acquisition Layer** — Sensor getaran triaksial (10–50 kHz sampling), sensor suhu *thermocouple* tipe K, sensor tekanan *strain gauge*, dan *flight data recorder* yang menulis ke *solid-state storage* dengan throughput > 1 GB/flight hour.
2. **Edge Processing Layer** — *Field-programmable gate array* (FPGA) atau *system-on-chip* yang menjalankan *fast Fourier transform* (FFT) dan *envelope analysis* untuk ekstraksi fitur awal (*kurtosis*, *crest factor*, *RMS*).
3. **Data Fusion & Digital Twin Layer** — Model *physics-of-failure* yang di-*co-simulate* dengan *machine learning surrogate* (misalnya *physics-informed neural network* / PINN). Sadeghi et al. (2024) menamai lapisan ini *DT core* yang melakukan *bi-directional synchronization* dengan entitas fisik.
4. **Decision Support Layer** — Dasbor prognostik yang menampilkan *RUL distribution*, *confidence interval*, dan *recommended action* (misalnya *inspect within 50 flight cycles*).
5. **Maintenance Execution Layer** — Integrasi dengan *Computerized Maintenance Management System* (CMMS) dan *Enterprise Resource Planning* (ERP) maskapai untuk *work order generation* otomatis.

### 3.2 Prosedur Operasional Standar (SOP) Pemeliharaan Prediktif

| Tahap | Aktivitas | Standar Acuan |
|-------|-----------|---------------|
| 1 | *Data ingestion* dari *Quick Access Recorder* (QAR) & ACARS | ARP 6803 (SAE) |
| 2 | *Feature engineering*: time-domain + frequency-domain | ISO 13373-1 |
| 3 | *Anomaly detection* dengan threshold adaptif ($\mu + k\sigma$) | ISO 17359 |
| 4 | *Prognostics*: estimasi RUL via *particle filter* | IEEE Std 1856-2017 |
| 5 | *Decision logic*: perbandingan *expected cost* action vs. inaction | MIL-HDBK-189C |
| 6 | *Feedback loop*: update parameter model Weibull dengan MLE | NIST/SEMATECH |

### 3.3 Diagram Alir Logika Keputusan

```
[Sensor Reading] 
       │
       ▼
[Pre-processing & Normalisasi]
       │
       ▼
[Ekstraksi Fitur FFT / RMS / Kurtosis]
       │
       ▼
[Anomaly Score > Threshold τ?] ──Tidak──► [Logging & Monitoring]
       │ Ya