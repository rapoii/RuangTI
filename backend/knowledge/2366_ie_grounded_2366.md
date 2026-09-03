# 2366 — Kebijakan Pemeliharaan Hirarkis Berbasis Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi pada Sektor MRO Penerbangan
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal — SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal — SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global berdiri di atas tulang punggung *fleet availability* — tingkat ketersediaan armada pesawat untuk beroperasi secara ekonomis dan selamat. Setiap kali satu unit *narrow-body* seperti Boeing 737 atau Airbus A320 grounded karena pemeriksaan berat (*heavy maintenance*), maskapai kehilangan potensi pendapatan harian sebesar USD 150.000–250.000 per pesawat, belum termasuk dampak kaskade pada jadwal rotasi awak, slot bandara, dan *Schedule Integrity* jaringan rute (Zhou, 2024). Dalam arsitektur operasi *Maintenance, Repair, and Overhaul* (MRO) penerbangan modern, keputusan pemeliharaan tidak lagi dipandang sebagai aktivitas *cost center* semata, melainkan sebagai fungsi optimasi stokastik yang menentukan margin operasional maskapai.

Zhou (2024) menyoroti bahwa *Reliability-Centered Maintenance* (RCM) telah menjadi kerangka kerja fundamental dalam industri padat-aset (*asset-heavy industries*) karena kemampuannya mengkuantifikasi degradasi non-linier performa siklus hidup dan mengoptimalkan operasi dengan tetap mempertahankan atau bahkan meningkatkan tingkat keselamatan dan ketersediaan. Secara historis, kebijakan pemeliharaan penerbangan mengikuti pola kunjungan reguler berbasis waktu (*calendar-based*) dan berbasis siklus terbang (*flight-cycle-based*), yang dikenal sebagai pemeriksaan A, B, C, dan D. *A-check* dilakukan setiap 400–600 jam terbang atau sekitar 2–3 bulan; *B-check* setiap 6–8 bulan (sering digabung dengan *A-check* pada operasi modern); *C-check* setiap 20–24 bulan dengan inspeksi ekstensif; dan *D-check* (sering disebut *heavy maintenance visit* atau *overhaul penuh*) setiap 6–10 tahun dengan pembongkaran struktur pesawat secara menyeluruh (Zhou, 2024).

Namun, Zhou (2024) mengidentifikasi tiga tantangan utama yang menghambat implementasi RCM pada sistem sekompleks hierarki A/B/C/D di sektor MRO penerbangan: (1) non-linearitas degradasi performa siklus hidup yang sulit dipetakan dengan pendekatan linier klasik; (2) ketergantungan keputusan *partial refurbishment* terhadap fase operasional pesawat (*mature-run phase* versus *early-life phase*); dan (3) kebutuhan untuk membuktikan secara matematis keberadaan *optimal value* pada fungsi ketersediaan armada. Studi Zhou (2024) muncul sebagai respons terhadap gap tersebut dengan mengusulkan *framework* kebijakan MRO yang mengintegrasikan siklus *D-check* penuh (*fully refurbished D-check cycles*) dengan *partial refurbishment* selama fase *mature-run* operasi penerbangan. Penjadwalan pemeriksaan pemeliharaan siklus hidup dioptimalkan berdasarkan *maximum available operation time*, dan keberadaan nilai optimum pada model ketersediaan dibuktikan secara analitis. Urgensi ekonomi dari studi ini tidak terbantahkan: dengan lebih dari 28.000 armada pesawat komersial aktif di dunia pada 2024 dan rata-rata biaya MRO tahunan per pesawat sebesar USD 1,2–2,5 juta, peningkatan ketersediaan armada sebesar 1–2% secara agregat bernilai miliaran dolar per tahun.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linier

Zhou (2024) memodelkan degradasi performa sistem avionik dan struktur pesawat sebagai fungsi non-linier terhadap waktu operasi kumulatif $t$. Resistansi atau keandalan residual didekfinisikan sebagai:

$$R(t) = e^{-\int_0^t \lambda(\tau)\,d\tau} = e^{-\Lambda(t)}$$

dengan $\lambda(\tau)$ adalah *hazard rate* non-stasioner yang meningkat secara konveks selama *mature-run*:

$$\lambda(\tau) = \lambda_0 \left(1 + \alpha \tau^{\beta}\right), \quad \alpha, \beta > 0$$

Akumulasi *cumulative hazard* menjadi:

$$\Lambda(t) = \lambda_0 t + \lambda_0 \frac{\alpha}{\beta+1} t^{\beta+1}$$

Bentuk ini menjamin *bathtub curve* tersirat di mana fase *infant mortality* telah dilewati dan pesawat berada pada fase *wear-out* yang dipercepat.

### 2.2 Steady-State Availability Hirarkis

Ketersediaan sesaat (*instantaneous availability*) pada waktu $t$ untuk satu armada dengan kebijakan pemeliharaan periodik $\{T_A, T_B, T_C, T_D\}$ didefinisikan sebagai:

$$A(t) = \frac{T_{op}(t)}{T_{op}(t) + T_{m}(t)}$$

dengan $T_{op}(t)$ adalah *cumulative operation time* dan $T_m(t)$ adalah *cumulative maintenance downtime*. Untuk analisis *steady-state* jangka panjang (*long-run fraction of time*), digunakan *renewal reward theorem*:

$$A_{\infty} = \frac{\mathbb{E}[U]}{\mathbb{E}[U] + \mathbb{E}[D]}$$

dengan $\mathbb{E}[U]$ adalah ekspektasi *uptime* antar pemeliharaan dan $\mathbb{E}[D]$ adalah ekspektasi *downtime* per siklus.

### 2.3 Kebijakan Hierarki A/B/C/D

Untuk satu siklus penuh antar dua *D-check* berturutan, total *downtime* tersusun sebagai:

$$D_{total} = \sum_{k=1}^{n_A} d_A + \sum_{k=1}^{n_B} d_B + \sum_{k=1}^{n_C} d_C + d_D + \sum_{k=1}^{n_P} d_P$$

dengan $n_A$, $n_B$, $n_C$ berturut-turut adalah jumlah *A-check*, *B-check*, dan *C-check* per siklus D; $n_P$ adalah jumlah *partial refurbishment* selama *mature-run*; dan $d_i$ adalah *mean downtime* per kategori. Frekuensi relatif dikontrol oleh interval masing-masing:

$$n_A = \left\lfloor\frac{T_D}{T_A}\right\rfloor, \quad n_B = \left\lfloor\frac{T_D}{T_B}\right\rfloor, \quad n_C = \left\lfloor\frac{T_D}{T_C}\right\rfloor$$

### 2.4 Formulasi Optimasi Ketersediaan

Zhou (2024) merumuskan masalah optimasi sebagai berikut — temukan interval pemeliharaan $T_i^*$ yang memaksimalkan ketersediaan tunak (*steady-state availability*) sambil mempertahankan kendala keselamatan:

$$\max_{T_A, T_B, T_C, T_D, n_P} \quad A_{\infty}(T_A, T_B, T_C, T_D, n_P)$$

$$\text{subject to:} \quad R(T_i) \geq R_{min}^{(i)}, \quad i \in \{A,B,C,D\}$$

dengan $R_{min}^{(i)}$ adalah reliabilitas minimum yang disyaratkan regulator (FAA, EASA, atau otoritas nasional) untuk masing-masing tingkat pemeriksaan. Zhou (2024) membuktikan bahwa masalah ini memiliki *optimal value* yang eksis dan unik pada domain kompak $[T_i^{L}, T_i^{U}]$, dengan karakterisasi *first-order optimality condition*:

$$\frac{\partial A_{\infty}}{\partial T_i}\bigg|_{T_i^*} = 0, \quad \forall i$$

dan *second-order sufficiency*:

$$\frac{\partial^2 A_{\infty}}{\partial T_i^2}\bigg|_{T_i^*} < 0$$

### 2.5 *Partial Refurbishment* dalam Fase *Mature-Run*

Untuk $t \in [T_{mature}^-, T_D^-]$, Zhou (2024) memperkenalkan kebijakan *partial refurbishment* yang mengembalikan *hazard rate* ke level intermediate:

$$\lambda_{post-P}(\tau) = \lambda(\tau) \cdot \eta, \quad 0 < \eta < 1$$

dengan $\eta$ adalah *effectiveness factor* refurbishment parsial. Nilai tipikal $\eta \in [0.4, 0.7]$ berdasarkan data empiris MRO. Ini menciptakan keputusan *trade-off* antara menambah $n_P$ (menaikkan biaya dan *downtime*) versus memperpanjang $T_D$ (menaikkan risiko keselamatan).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka RCM hirarkis Zhou (2024) mengikuti alur rekayasa lima-tahap berikut:

**Tahap 1 — Pengumpulan Data Historis & Telemetri.** Operator MRO mengekstrak data *time-on-wing*, *unscheduled removal rate*, dan *mean time between failures* (MTBF) untuk seluruh subsistem kritis — *landing gear*, *APU*, *engine*, *avionics*, dan *primary flight controls* — dari *Maintenance Information System* (MIS) dan *Aircraft Health Monitoring* (AHM). Data ini digunakan untuk mengestimasi parameter $\lambda_0$, $\alpha$, dan $\beta$ melalui regresi non-linier Bayesian.

**Tahap 2 — Pemetaan Fungsi & Kegagalan.** Setiap subsistem dipetakan menggunakan *Failure Mode, Effects, and Criticality Analysis* (FMECA) sesuai standar SAE JA1011 dan MSG-3 (Maintenance Steering Group) untuk menentukan kategori konsekuensi: *evident*, *hidden*, *safety*, *economic*, *environmental*.

**Tahap 3 — Penentuan Interval Optimal.** Algoritma optimasi (*Sequential Quadratic Programming* atau *Particle Swarm Optimization*) diaplikasikan pada rumus di Bagian 2.4 untuk menentukan $\{T_A^*, T_B^*, T_C^*, T_D^*, n_P^*\}$.

**Tahap 4 — Validasi melalui Simulasi Monte Carlo.** Sepuluh ribu skrip Monte Carlo dijalankan untuk memvalidasi bahwa $A_{\infty}$ hasil optimasi tidak dilampaui secara stokastik oleh kebijakan operasional lainnya, dengan *confidence interval* 95%.

**Tahap 5 — Implementasi Berjenjang & Audit.** Kebijakan baru di-*roll-out* secara bertahap — 10%, 30%, 70%, 100% armada — dengan audit regulator sesuai part 145 FAA atau part-CAMO EASA.

Diagram alir keputusan untuk satu unit pesawat adalah sebagai berikut:

```
[Pesawat dalam Operasi] 
        │
        ▼
   t mod T_A = 0 ?──Ya──► A-Check (d_A ≈ 8-24 jam)
        │Tidak
        ▼
   t mod T_B = 0 ?──Ya──► B-Check (d_B ≈ 2-5 hari)
        │Tidak
        ▼
   t mod T_C = 0 ?──Ya──► C-Check (d_C ≈ 1-4 minggu)
        │Tidak
        ▼
   t ∈ Mature-Run & λ(t) > λ_c ?──Ya──► Partial Refurbishment (d_P ≈ 5-10 hari)
        │Tidak
        ▼
   t = T_D ?──Ya──► D-Check Penuh (d_D ≈ 1-3 bulan)
        │Tidak
        ▼
   [Lanjut Operasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Ambil satu unit Airbus A320ceo milik operator *flag carrier* Asia Tenggara dengan parameter industri berikut (konsisten dengan tipikal empiris dan kerangka Zhou, 2024):

| Parameter | Nilai | Satuan |
|---|---|---|
| $\lambda_0$ | 0,00015 | failure/jam |
| $\alpha$ | 1,2 × 10⁻⁶ | jam⁻² |
| $\beta$ | 1,5 | – |
| $T_D$ | 30.000 | jam terbang |
| $T_C$ | 6.000 | jam terbang |
| $T_B$ | 3.000 | jam terbang |
| $T_A$ | 600 | jam terbang |
| $d_A$ | 16 | jam |
| $d_B$ | 72 | jam |
| $d_C$ | 240 | jam |
| $d_D$ | 1.800 | jam |
| $d_P$ | 144 | jam |
| $\eta$ | 0,55 | – |
| $n_P$ rencana | 2 | – |

**Langkah 1 — Hitung jumlah pemeriksaan per siklus D:**
$n_A = \lfloor 30.000/600 \rfloor = 50$
$n_B = \lfloor 30.000/$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
