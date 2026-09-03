# 2462 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat di Sektor MRO Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu sektor *capital-intensive* dengan tingkat kompleksitas teknis tertinggi di dunia. Sebuah pesawat narrow-body modern seperti Boeing 737 atau Airbus A320 memiliki nilai per unit mencapai USD 50–120 juta, sehingga setiap jam *ground time* akibat pemeliharaan memiliki konsekuensi ekonomi yang signifikan. Berdasarkan studi Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), kehilangan satu unit armada dari jadwal operasional harian maskapai dapat menimbulkan *opportunity cost* sebesar USD 150.000–250.000 per hari, belum termasuk dampak hilangnya *slot* bandar udara, kompensasi penumpang, dan kerusakan reputasi merek. Oleh karena itu, ketersediaan armada (*fleet availability*) menjadi metrik kinerja paling strategis bagi maskapai, lessor pesawat, maupun penyedia layanan MRO pihak ketiga.

Dalam konteks operasional, regulator penerbangan internasional (EASA Part-145, FAA Part 121) beserta pabrikan (OEM) telah menetapkan kebijakan pemeliharaan preventif berbasis waktu yang dikenal sebagai hierarki pemeriksaan A/B/C/D. Pemeriksaan A-check dilakukan setiap 400–600 jam terbang atau 200–300 siklus penerbangan, mencakup inspeksi visual dan servis ringan. B-check merupakan ekstensi A-check dengan cakupan lebih besar, dilaksanakan setiap 6–8 bulan. C-check memerlukan *docking* pesawat selama 1–2 minggu dengan inspeksi komponen struktural dan sistem avionik, dilakukan setiap 20–24 bulan. Sementara D-check adalah *heavy maintenance visit* berupa pembongkaran total pesawat, pengecatan ulang, dan sertifikasi kelayakan struktur, yang memakan waktu 2 bulan hingga 2 tahun tergantung kompleksitas. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menyoroti bahwa kebijakan tradisional bersifat *fixed-schedule* sehingga tidak adaptif terhadap pola degradasi non-linear aktual komponen, yang menurunkan ketersediaan armada dan meningkatkan biaya siklus hidup (*life-cycle cost*) hingga 20–35% secara suboptimal.

Urgensi pengembangan model Reliability-Centered Maintenance (RCM) hirarkis yang dibahas oleh Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) muncul dari kenyataan bahwa degradasi komponen pesawat mengikuti fungsi non-linear yang tidak cukup ditangkap oleh jadwal berkala. Beberapa komponen avionik dan struktur mengalami *infant mortality*, sementara komponen fatigue-critical seperti *landing gear* dan *turbine blades* menunjukkan degradasi *wear-out* yang eksponensial setelah titik kritis tertentu. Tanpa model keandalan yang akurat, maskapai terpaksa melakukan *over-maintenance* (meningkatkan biaya) atau *under-maintenance* (meningkatkan risiko keselamatan). Regulasi EASA Part-145 sebenarnya telah mengadopsi filosofi RCM melalui kerangka MSG-3 (*Maintenance Steering Group-3*), namun implementasi di lapangan masih bervariasi. Paper Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menjawab gap ini dengan mengusulkan *framework* MRO yang mengintegrasikan siklus D-check penuh dengan *partial refurbishment* selama fase *mature-run* operasi pesawat, sehingga jadwal pemeriksaan siklus hidup dapat dioptimasi berdasarkan *maximum available operation time* dan membuktikan eksistensi nilai optimal model ketersediaan secara matematis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear Berbasis Weibull

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membangun fondasi model pada distribusi Weibull dua parameter untuk laju kegagalan komponen kritis pesawat:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-(t/\eta)^{\beta}}, \quad F(t) = 1 - e^{-(t/\eta)^{\beta}}$$

di mana $\beta$ adalah *shape parameter* (untuk komponen авиации dengan pola *wear-out*, $\beta > 1$) dan $\eta$ adalah *scale parameter* dalam jam terbang. Fungsi reliabilitasnya:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

Laju kegagalan *hazard rate* menjadi:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2 Hierarki Pemeriksaan A/B/C/D sebagai Renewal Reward Process

Empat tingkat pemeriksaan dimodelkan sebagai *renewal reward process* dengan interval inspeksi masing-masing $T_A, T_B, T_C, T_D$ yang berturut-turut menaik. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) mendefinisikan *expected uptime* per siklus hierarki penuh:

$$E[U_{cycle}] = T_D \cdot A_{op} - \sum_{k \in \{A,B,C,D\}} \frac{T_D}{T_k} \cdot D_k$$

di mana $A_{op}$ adalah availabilitas operasional per jam terbang dan $D_k$ adalah *downtime* rata-rata untuk tingkat inspeksi $k$. *Downtime* A/B/C/D tipikal adalah $D_A = 24$ jam, $D_B = 72$ jam, $D_C = 360$ jam, $D_D = 4.380$ jam (6 bulan). Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.com/10.2139/ssrn.6387479)) memperkenalkan variabel $\tau$ untuk *partial refurbishment* yang hanya mengembalikan reliabilitas ke tingkat $R(\tau)$ alih-alih $R(0)$ penuh seperti D-check.

### 2.3 Model Availabilitas Stasioner Jangka Panjang

Menggunakan *renewal reward theorem*, availabilitas jangka panjang didefinisikan sebagai rasio *expected uptime* terhadap *expected cycle length*:

$$A_\infty = \lim_{T \to \infty} \frac{\int_0^T I_{up}(t)\,dt}{T} = \frac{E[U_{cycle}]}{E[U_{cycle}] + E[D_{cycle}]}$$

Substitusi persamaan sebelumnya menghasilkan:

$$A_\infty(T_A,T_B,T_C,T_D) = \frac{T_D \cdot A_{op}}{T_D \cdot A_{op} + \sum_{k \in \{A,B,C,D\}} \frac{T_D}{T_k} \cdot D_k}$$

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan bahwa fungsi $A_\infty$ memiliki **titik optimal interior** $(T_A^*, T_B^*, T_C^*, T_D^*)$ yang memenuhi kondisi first-order:

$$\frac{\partial A_\infty}{\partial T_k} = 0, \quad k \in \{A,B,C,D\}$$

yang setelah diferensiasi menghasilkan *optimality condition*:

$$\frac{D_k}{T_k^2} = \frac{\lambda_k}{A_{op}}, \quad \text{dengan} \quad \lambda_k = \frac{h(T_k) \cdot T_k}{\eta}$$

### 2.4 Bukti Eksistensi Solusi Optimal

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menunjukkan bahwa $A_\infty$ bersifat *quasi-concave* pada domain kendala $T_A \leq T_B \leq T_C \leq T_D$, yang menjamin eksistensi global maximum di bawah kendala regulasi bahwa $T_D \leq T_{D,\max}$ (usia desain pesawat, tipikal 25–30 tahun). Dengan teknik Lagrangian relaxation:

$$\mathcal{L} = A_\infty + \mu_1(T_A - T_{A,\min}) + \mu_2(T_{D,\max} - T_D)$$

solusi optimal $\nabla \mathcal{L} = 0$ memberikan vektor interval inspeksi yang memaksimalkan availabilitas sekaligus menghormati kendala struktural dan keselamatan.

### 2.5 Integrasi Partial Refurbishment

Inovasi utama Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) adalah model *virtual age* setelah *partial refurbishment*:

$$V(\tau) = \tau \cdot (1 - \rho), \quad 0 \leq \rho \leq 1$$

di mana $\rho$ adalah *effectiveness factor* refurbishment (untuk D-check penuh $\rho = 1$, untuk partial $\rho < 1$). Reliabilitas residual menjadi $R(t) = R(t + V(\tau))$, sehingga *expected number* D-check sepanjang siklus hidup pesawat berkurang dari $n_D = \lfloor L/T_D \rfloor$ menjadi:

$$n_D^{eff} = \left\lfloor \frac{L}{T_D + \sum_{j} \tau_j \cdot (1-\rho_j)} \right\rfloor$$

dengan $L$ adalah total *design life* dan $\tau_j$ adalah usia saat *partial refurbishment* ke-$j$ dilakukan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework RCM hirarkis Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.com/10.2139/ssrn.6387479)) mengikuti alur sistematis berbasis standar **MSG-3** dan regulasi **EASA Part-145 / FAA Part 121**:

**Tahap 1 — Inventarisasi Aset & Stratifikasi Kritisitas.** Setiap komponen pesawat diklasifikasikan berdasarkan dampak kegagalan terhadap keselamatan (*safety*), operasi (*operational*), ekonomi (*economic*), dan lingkungan (*environmental*). Hanya item-item dengan *safety significance* dan *economic significance* tinggi yang masuk ke model optimasi.

**Tahap 2 — Akuisisi Data Degradasi.** Pengumpulan *failure data* historis dari *aircraft technical log*, *Aerospace Industry Maintenance Information System* (AIMIS), dan sensor *health monitoring* (HUMS). Estimasi parameter Weibull $(\beta, \eta)$ dilakukan melalui *Maximum Likelihood Estimation* (MLE):

$$\ell(\beta,\eta) = \sum_{i=1}^n \left[\ln\beta - \beta\ln\eta + (\beta-1)\ln t_i - \left(\frac{t_i}{\eta}\right)^\beta\right]$$

**Tahap 3 — Penentuan Interval Hirarkis Optimal.** Substitusi parameter ke fungsi $A_\infty(T_A,T_B,T_C,T_D)$ dan optimasi numerik dengan algoritma *sequential quadratic programming* (SQP) atau *interior-point method*. Validasi silang dengan simulasi Monte Carlo 10.000 iterasi untuk memastikan konvergensi.

**Tahap 4 — Kalibrasi Partial Refurbishment Schedule.** Berdasarkan rekomendasi Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.com/10.2139/ssrn.6387479)), *partial refurbishment* dijadwalkan pada usia $\tau_j \in \{0.3T_D, 0.5T_D, 0.7T_D\}$ dengan *effectiveness factor* yang menurun secara linier sesuai usia.

**Tahap 5 — Continuous Monitoring & Feedback Loop.** Dashboard *predictive maintenance* terintegrasi dengan sensor IoT pesawat yang memantau *vibration spectra*, *oil debris*, dan *exhaust gas temperature* untuk *trigger-based maintenance* ketika ambang batas terlampaui, meng-override jadwal statis bila diperlukan.

Diagram alir proses mengikuti logika: *Failure Mode Identification → Consequence Classification → Optimization → Implementation → Monitoring → Re-optimization*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Maskapai regional dengan armada 20 unit Airbus A320neo, usia rata-rata 8 tahun, akumulasi 28.000 jam terbang per unit.

### Input Parameter (berdasarkan Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.com/10.2139/ssrn.6387479)):

| Parameter | Nilai |
|-----------|-------|
| $T_D$ (D-check interval) | 12 tahun = 105.120 jam terbang |
| $T_C$ (C-check interval) | 24 bulan = 17.520 jam |
| $T_B$ (B-check interval) | 8 bulan = 5.840 jam |
| $T_A$ (A-check interval) | 500 jam |
| $D_A$ | 24 jam |
| $D_B$