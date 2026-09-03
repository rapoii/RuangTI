# 1694 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Kebijakan A/B/C/D MRO di Sektor Pemeliharaan, Perbaikan, dan Besar Pesawat Udara

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN — versi komplementer)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global menghadapi tantangan struktural yang semakin kompleks dalam pengelolaan siklus hidup armada pesawat komersial. Dengan proyeksi jumlah armada dunia yang melampaui 36.000 unit pada 2034 (berdasarkan data Boeing Current Market Outlook yang dirujuk dalam literatur aviasi), biaya pemeliharaan, perbaikan, dan besar (*Maintenance, Repair, and Overhaul* — MRO) mewakili sekitar 10–14% dari total biaya operasional maskapai. Hang Zhou (2024) menekankan bahwa dalam industri padat-aset semacam ini, **Reliability-Centered Maintenance (RCM)** menjadi kerangka analitis yang sangat bernilai karena kemampuannya dalam **mengkuantifikasi degradasi non-linier kinerja siklus hidup** sekaligus mengoptimalkan operasi melalui peningkatan keselamatan dan ketersediaan [DOI: 10.2139/ssrn.6387479].

Urgensi operasional dan ekonomis dari topik ini tidak terlepas dari kenyataan bahwa downtime pesawat—bahkan dalam hitungan jam—mengakibatkan *revenue loss* signifikan yang berkisar USD 100.000–250.000 per hari per *wide-body*, belum termasuk dampak reputasional terhadap *on-time performance* (OTP) maskapai. Lebih lanjut, lingkungan regulasi internasional yang ditetapkan oleh **EASA Part-M**, **FAA 14 CFR Part 121**, dan **ICAO Annex 6** mewajibkan operator untuk membuktikan bahwa setiap aktivitas pemeliharaan mampu mempertahankan atau memulihkan *level of safety* yang dapat diterima—sebuah mandat yang hanya dapat dipenuhi melalui pendekatan berbasis risiko dan bukti statistik, bukan intuisi jadwal tradisional.

Zhou (2024) secara eksplisit menyoroti bahwa implementasi RCM pada sistem kompleks seperti **kebijakan pemeliharaan hirarkis A/B/C/D dalam aviasi** masih menghadapi tantangan besar: bagaimana menjadwalkan *fully refurbished D-check* dan *partial refurbishments* selama periode *mature-run* operasi secara simultan, agar availability maksimum tercapai. Paper ini memperkenalkan kerangka kebijakan MRO yang menggabungkan kedua jenis refurbishment tersebut dengan optimasi *available operation time* serta pembuktian eksistensi nilai optimal pada model availability [DOI: 10.2139/ssrn.6387479]. Oleh karena itu, modul ini menjadi landasan bagi praktisi dan akademisi teknik industri yang ingin memahami perancangan kebijakan pemeliharaan preskriptif berbasis bukti kuantitatif untuk sistem teknik bernilai tinggi (*high-value engineering assets*).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi dan Keandalan Komponen

Dasar analitis RCM yang diadopsi Zhou (2024) bertumpu pada distribusi **Weibull** untuk memodelkan degradasi non-linier waktu-ke-gagal (*time-to-failure*). Fungsi keandalan dan laju kegagalan didefinisikan sebagai:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta - 1}$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*) dan $\eta$ adalah parameter skala (*scale parameter*). Kasus $\beta < 1$ merepresentasikan *infant mortality*, $\beta = 1$ laju kegagalan konstan (eksponensial), dan $\beta > 1$ menandai *wear-out* dominan—kondisi khas komponen struktur pesawat pada tahap mature-run.

### 2.2 Kerangka Hierarki Pemeliharaan A/B/C/D

Kebijakan A/B/C/D check didefinisikan dengan indeks $k \in \{A, B, C, D\}$ yang merepresentasikan tingkatan pemeliharaan, dengan karakteristik berikut:

| Tingkat | Interval Tipikal $T_k$ | Durasi $D_k$ | Cakupan |
|---------|----------------------|--------------|---------|
| **A** | 400–600 FH atau 3–6 bulan | 6–24 jam | Inspeksi ringan, *light maintenance* |
| **B** | 6–12 bulan | 24–72 jam | Inspeksi sedang, fungsi & sistem |
| **C** | 20–24 bulan | 1–2 minggu | Inspeksi major, struktur & sistem |
| **D** | 6–12 tahun | 1–2 bulan | *Full refurbishment*, zero-time overhaul |

Interval antar-check memiliki relasi hirarkis: $T_A < T_B < T_C < T_D$, dengan kebijakan penjadwalan yang sering dinyatakan sebagai kelipatan:

$$T_B = n_B \cdot T_A, \quad T_C = n_C \cdot T_B, \quad T_D = n_D \cdot T_C$$

dengan $n_B, n_C, n_D \in \mathbb{Z}^+$.

### 2.3 Model Availability Hirarkis

Availability sesaat (*instantaneous availability*) sistem pada waktu $t$ diberikan oleh:

$$A(t) = \frac{U(t)}{U(t) + D(t)} = \frac{\text{MTBF}}{\text{MTBF} + \text{MDT}}$$

Untuk kebijakan hirarkis, Zhou (2024) merumuskan **availability long-run average** sebagai:

$$\bar{A}_k(T_k) = \frac{\sum_{k \in \{A,B,C,D\}} (T_k - D_k)}{\sum_{k \in \{A,B,C,D\}} T_k}$$

atau lebih lengkap dengan memasukkan efek *partial refurbishment* selama *mature-run*:

$$A_{\text{fleet}}(T) = \frac{T_{\text{op}}^{\max}(T) - \sum_{k} D_k(T)}{T_{\text{cycle}}} = 1 - \sum_{k} \frac{D_k}{T_k}$$

dengan $T_{\text{op}}^{\max}(T)$ adalah **maksimum available operation time** yang menjadi fungsi objektif optimasi.

### 2.4 Formulasi Optimasi

Masalah optimasi utama Zhou (2024) dirumuskan sebagai:

$$\max_{T_k} \; A_{\text{fleet}}(T_A, T_B, T_C, T_D)$$

$$\text{subject to:} \quad R(T_k) \geq R_{\min}, \quad C_{\text{total}}(T) \leq C_{\text{budget}}, \quad D_k \geq 0$$

Kondisi $R(T_k) \geq R_{\min}$ menjamin bahwa tidak ada check yang dijadwalkan melampaui ambang batas keandalan minimum yang dapat diterima regulator. Biaya total mencakup *preventive maintenance cost* ($C_{\text{pm},k}$), *corrective maintenance cost* ($C_{\text{cm},k}$), dan *failure cost* ($C_f$):

$$C_{\text{total}} = \sum_{k} \left( \frac{T}{T_k} C_{\text{pm},k} + N_f(T_k) \cdot C_f \right)$$

dengan $N_f(T_k)$ adalah ekspektasi jumlah kegagalan dalam satu siklus panjang $T$.

### 2.5 Eksistensi Nilai Optimal

Zhou (2024) membuktikan bahwa nilai optimum untuk model availability ada (*existence of optimal value*) melalui pendekatan **calculus of variations** dan convexity analysis, dengan kondisi first-order:

$$\frac{\partial A_{\text{fleet}}}{\partial T_k} = 0 \quad \Rightarrow \quad \frac{D_k}{T_k^2} = \text{const across all } k$$

Interpretasi ekonomis dari kondisi ini adalah: rasio downtime terhadap kuadrat interval check harus seragam di seluruh hierarki untuk mencapai availability maksimum—sebuah prinsip **equal marginal cost of downtime** yang elegan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM di industri aviasi mengikuti kerangka SOP delapan tahap yang diadopsi dari standar **MSG-3** (*Maintenance Steering Group-3*) dan diselaraskan dengan kontribusi Zhou (2024):

### Tahap 1: Sistem Batas & Functional Analysis
Definisikan *system boundary* pesawat (ATA Chapter 100/ATA iSpec 2200). Lakukan *functional analysis* untuk mengidentifikasi fungsi sistem, lalu *functional failure analysis* (FFA) untuk menetapkan mode kegagalan potensial.

### Tahap 2: Significance Assessment & RCM Decision Logic
Setiap *failure mode* dievaluasi menggunakan *MSG-3 decision logic*: apakah konsekuensinya *evident* (safety), *hidden* (operational), atau *economic*? Keputusan jatuh pada salah satu: *hard time*, *on-condition*, atau *condition monitoring*.

### Tahap 3: Pengumpulan Data Degradasi & Fitting Distribusi
Kumpulkan data *time-to-failure* dari fleet history (misalnya 5–10 tahun), lalu fitting distribusi Weibull menggunakan **Maximum Likelihood Estimation (MLE)**:

$$\hat{\beta}, \hat{\eta} = \arg\max_{\beta, \eta} \prod_{i=1}^{n} \left[ \frac{\beta}{\eta}\left(\frac{t_i}{\eta}\right)^{\beta-1} \exp\left(-\left(\frac{t_i}{\eta}\right)^{\beta}\right) \right]$$

### Tahap 4: Penentuan Interval Check Hirarkis
Hitung interval optimal $T_k^*$ untuk setiap tingkatan check dengan menyelesaikan persamaan first-order pada bagian 2.4.

### Tahap 5: Integrasi dengan Partial Refurbishment
Selama *mature-run* (periode antara dua D-check), jadwalkan *partial refurbishment* pada komponen kritis untuk memperpanjang $T_{\text{op}}^{\max}$. Keputusan ini menggunakan **trade-off curve**:

$$\Delta T_{\text{op}}^{\max} = f(C_{\text{partial}}, R_{\text{post}})$$

### Tahap 6: Simulasi & Validasi Monte Carlo
Jalankan simulasi Monte Carlo (minimal 10.000 iterasi) untuk memvalidasi bahwa kebijakan yang dirancang memenuhi target availability $\geq 99.5\%$ dan tingkat keselamatan sesuai standar.

### Tahap 7: Dokumentasi & Audit
Susun **Maintenance Program Document (MPD)** sesuai EASA Part-M atau FAA Part 121, lalu audit internal oleh *Quality Assurance* dan eksternal oleh regulator.

### Tahap 8: Continuous Monitoring & Feedback Loop
Implementasikan sistem *Closed-Loop Feedback* dengan KPI: availability, *dispatch reliability*, *unscheduled removal rate* (URR), dan biaya per flight hour.

```
┌────────────────────────────┐
│ 1. Functional Analysis     │
└────────────┬───────────────┘
             ↓
┌────────────────────────────┐
│ 2. MSG-3 Decision Logic    │
└────────────┬───────────────┘
             ↓
┌────────────────────────────┐
│ 3. Weibull Parameter Fit   │
└────────────┬───────────────┘
             ↓
┌────────────────────────────┐
│ 4. Optimasi T_k*           │
└────────────┬───────────────┘
             ↓
┌────────────────────────────┐
│ 5. Partial Refurbishment   │
│    Integration             │
└────────────┬───────────────┘
             ↓
┌────────────────────────────┐
│ 6. Monte Carlo Validation  │
└────────────┬───────────────┘
             ↓
┌────────────────────────────┐
│ 7. MPD & Regulatory Audit  │
└────────────┬───────────────┘
             ↓
┌────────────────────────────┐
│ 8. Continuous Monitoring   │
└────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Studi Kasus: Maskapai Regional dengan Armada 10 Unit Narrow-Body

**Asumsi parameter industri** (representatif untuk armada Airbus A320 family yang beroperasi 2.500–3.000 flight hours/tahun):

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Ukuran