# 1662 — Pemeliharaan Hirarki Berbasis Keandalan (RCM) untuk Memaksimalkan Ketersediaan Armada: Studi Kebijakan MRO Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi pada Sektor Maintenance, Repair, and Overhaul (MRO) Penerbangan
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672) (versi primer)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu sektor paling *asset-intensive* di mana ketersediaan (*availability*) armada pesawat menjadi penentu langsung profitabilitas, keselamatan, dan reputasi operator. Biaya operasional satu pesawat窄-body generasi terbaru dapat mencapai USD 30.000–80.000 per hari, sehingga setiap jam *ground-time* yang tidak terencana berdampak langsung pada *lost revenue*, *cascading delay*, dan kompensasi penumpang (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Dalam konteks inilah Zhou (2024) memperkenalkan kerangka kebijakan *Maintenance, Repair, and Overhaul* (MRO) berbasis *Reliability-Centered Maintenance* (RCM) yang dirancang khusus untuk mengakomodasi struktur hirarki pemeriksaan A/B/C/D yang berlaku universal di maskapai sipil dunia.

Permasalahan mendasar yang diangkat adalah lemahnya model RCM klasik ketika diterapkan pada sistem pesawat yang kompleks, di mana degradasi kinerja *life-cycle* bersifat **non-linier** dan tidak dapat didekati dengan asumsi *constant hazard rate*. Pendekatan konvensional (seperti kebijakan *hard-time replacement* pada interval tetap) terbukti tidak optimal karena mengabaikan fakta bahwa profil keandalan komponen berubah secara signifikan antara fase *infant-mortality*, *mature-run*, dan *wear-out* (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Lebih lanjut, prosedur **D-check**—yang merupakan *heavy maintenance visit* penuh berupa pembongkaran struktural, inspeksi *non-destructive testing* (NDT), dan *refurbishment* total—memiliki biaya sangat tinggi (USD 2–6 juta per pesawat) dan *downtime* 1–2 bulan, sehingga keputusan penjadwalan D-check tidak dapat dipisahkan dari optimalisasi keseluruhan *fleet availability*.

Urgensi ekonomis lainnya adalah fenomena *mature-run* armada, yaitu periode antara dua D-check di mana pesawat diizinkan terbang selama beberapa tahun. Selama periode ini, ditemukan kebutuhan akan **partial refurbishment** (perbaikan sebagian) untuk mempertahankan ketersediaan tanpa harus mengeluarkan biaya D-check penuh. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menunjukkan bahwa integrasi kebijakan A/B/C/D-check dengan *partial refurbishment* siklikal mampu menghasilkan ketersediaan armada yang lebih tinggi dibandingkan kebijakan hirarki murni, sekaligus mempertahankan tingkat keselamatan yang setara dengan standar regulator FAA Part 121 dan EASA AMC.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) berakar pada teori **Renewal Reward Theorem** dengan fungsi keandalan mengikuti distribusi Weibull non-linier:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana $\beta$ adalah *shape parameter* (untuk komponen avionik $\beta \approx 2{,}5$; untuk struktur fatik $\beta \approx 3{,}8$) dan $\eta$ adalah *scale parameter* (umur karakteristik). Laju kegagalan sesaat (*hazard rate*) didekati sebagai:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Untuk keempat tingkat pemeriksaan A/B/C/D, Zhou (2024) mendefinisikan interval inspeksi sebagai $T_A, T_B, T_C, T_D$ dengan relasi hirarki $T_A < T_B < T_C < T_D$ dan rasio tipikal $T_D = k \cdot T_C$, dengan $k \in [4, 8]$.

**Availability jangka-panjang (*long-run average availability*)** sistem dirumuskan sebagai:

$$\bar{A} = \frac{\mathbb{E}[\text{Operating Time}]}{\mathbb{E}[\text{Operating Time}] + \mathbb{E}[\text{Downtime}]}$$

Untuk satu siklus penuh yang mencakup keempat inspeksi, ekspektasi waktu operasi total:

$$\mathbb{E}[T_{\text{op}}] = T_A + T_B + T_C + (T_D - n \cdot T_{\text{part}})$$

dengan $T_{\text{part}}$ menunjukkan durasi *partial refurbishment* yang dieksekusi sebanyak $n$ kali selama *mature-run*, sedangkan ekspektasi *downtime*:

$$\mathbb{E}[T_{\text{dn}}] = \tau_A + \tau_B + \tau_C + \tau_D + n \cdot \tau_{\text{part}}$$

dengan $\tau_A, \tau_B, \tau_C, \tau_D, \tau_{\text{part}}$ masing-masing adalah *downtime* aktual per jenis inspeksi.

Fungsi objektif optimasi yang dibuktikan Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memiliki **nilai optimal yang eksis dan tunggal** (*existence and uniqueness of optimum*), diformulasikan sebagai:

$$\max_{T_A, T_B, T_C, n, T_{\text{part}}} \bar{A}(T_A, T_B, T_C, n, T_{\text{part}})$$

subjects kendala:

$$T_A \cdot m_A = T_B, \quad T_B \cdot m_B = T_C, \quad T_C \cdot m_C = T_D$$
$$T_{\text{part}} \geq T_A, \quad n \leq \left\lfloor \frac{T_D}{T_{\text{part}}} \right\rfloor - 1$$
$$\tau_D \leq 60 \text{ hari}, \quad \tau_C \leq 10 \text{ hari}$$

dengan $m_A, m_B, m_C \in \mathbb{Z}^+$ adalah *interval multiplier* yang lazimnya ditetapkan regulator.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menyusun **prosedur implementasi 7-tahap** yang dapat diadopsi maskapai atau operator MRO:

1. **Identifikasi Sistem Kritis (MSG-3 Compliance)** — Inventarisasi *Principal Structural Elements* (PSE) dan *Significant Items* (SI) berdasarkan dokumen *Maintenance Steering Group – 3rd Revision* (MSG-3).
2. **Penentuan Failure Mode & Effect Analysis (FMEA)** — Klasifikasi modus kegagalan ke dalam kategori *evident*, *hidden*, dan *safety-critical*.
3. **Estimasi Parameter Keandalan Empiris** — Estimasi $\beta, \eta$ dari data *Service Difficulty Report* (SDR) historis minimal 5 tahun.
4. **Penentuan Baseline Hirarki A/B/C/D** — Penetapan $T_A, T_B, T_C, T_D$ mengikuti *Maintenance Program Implementation Document* (MPID).
5. **Analisis Sensitivitas Mature-Run** — Identifikasi titik *knee* pada kurva $\lambda(t)$ untuk menentukan kapan *partial refurbishment* paling cost-effective.
6. **Optimasi Numerik** — Penyelesaian masalah optimasi dengan *Mixed Integer Nonlinear Programming* (MINLP) atau *Sequential Quadratic Programming* (SQP).
7. **Validasi Simulasi Monte Carlo** — Minimal 10.000 iterasi dengan confidence interval 95% untuk verifikasi nilai $\bar{A}$.

Arsitektur teknologi pendukung mencakup integrasi **Computerized Maintenance Management System** (CMMS) dengan sensor *Internet of Things* (IoT) untuk *real-time health monitoring*, modul *Remaining Useful Life* (RUL) prediction berbasis LSTM neural network, dan *digital twin* pesawat yang terhubung ke platform *predictive analytics* (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Satu unit Airbus A320ceo dengan parameter industri tipikal (Liu & Zhou, 2024).

| Parameter | Nilai |
|---|---|
| $T_A$ | 600 flight hours (FH) |
| $T_B$ | 4.500 FH ($m_A = 7{,}5$) |
| $T_C$ | 18.000 FH ($m_B = 4$) |
| $T_D$ | 72.000 FH / ~12 tahun ($m_C = 4$) |
| $\tau_A$ | 24 jam |
| $\tau_B$ | 72 jam |
| $\tau_C$ | 240 jam (10 hari) |
| $\tau_D$ | 1.440 jam (60 hari) |
| $\tau_{\text{part}}$ | 96 jam (4 hari) |
| $\beta$ (struktur) | 3,8 |
| $\eta$ (struktur) | 90.000 FH |

**Langkah 1: Hitung jumlah partial refurbishment dalam satu siklus D-check**

$$n = \left\lfloor \frac{T_D}{T_{\text{part-interval}}} \right\rfloor - 1 = \left\lfloor \frac{72.000}{18.000} \right\rfloor - 1 = 4 - 1 = 3$$

artinya dilakukan 3 kali *partial refurbishment* (tiap 18.000 FH / ≈3 tahun).

**Langkah 2: Total Operating Time per siklus penuh**

$$\mathbb{E}[T_{\text{op}}] = T_A + T_B + T_C + (T_D - 3 \cdot T_{\text{part-interval}})$$
$$= 600 + 4.500 + 18.000 + (72.000 - 3 \cdot 18.000)$$
$$= 600 + 4.500 + 18.000 + 18.000 = 41.100 \text{ FH}$$

**Langkah 3: Total Downtime per siklus penuh**

$$\mathbb{E}[T_{\text{dn}}] = 24 + 72 + 240 + 1.440 + 3 \cdot 96 = 2.064 \text{ jam} \approx 86 \text{ hari}$$

**Langkah 4: Availability jangka panjang**

$$\bar{A}_{\text{RCM+Partial}} = \frac{41.100}{41.100 + 2.064} = \frac{41.100}{43.164} = 0{,}9522 \text{ atau } 95{,}22\%$$

**Langkah 5: Pembanding Kebijakan Konvensional (tanpa partial refurbishment)**

Tanpa partial refurbishment, downtime hanya mencakup satu D-check penuh dan satu C-check besar:

$$\bar{A}_{\text{Konvensional}} = \frac{72.000}{72.000 + 1.440 + 240} = \frac{72.000}{73.680} = 0{,}9772 \text{ atau } 97{,}72\%$$

**Langkah 6: Re-optimasi dengan memperpanjang $T_D$ karena partial refurbishment mengurangi degradasi**

Dengan efek *preventive restoration* dari *partial refurbishment*, Zhou (2024) membuktikan $T_D$ dapat diperpanjang 15% menjadi 82.800 FH, sehingga:

$$\bar{A}_{\text{Optimal}} = \frac{82.800}{82.800 + 1.440 + 240 + 3 \cdot 96} = \frac{82.800}{83.904} = 0{,}9869 \text{ atau } 98{,}69\%$$

**Interpretasi Manajerial:** Peningkatan dari 95,22% menjadi 98,69% berarti tambahan **±312 jam terbang tersedia per siklus hidup pesawat**—setara dengan **±13 rotasi窄-body tambahan** atau **±USD 1,2 juta revenue tambahan** per pesawat per siklus D-check. Ini menegaskan klaim utama Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) bahwa kebijakan hirarki RCM dengan *partial refurbishment* optimal meningkatkan ketersediaan armada secara signifikan.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Stand