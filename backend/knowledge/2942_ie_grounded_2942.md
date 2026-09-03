# 2942 — Kebijakan Pemeliharaan Hirarki Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global menghadapi tantangan struktural yang semakin kompleks dalam pengelolaan armada pesawat terbang. Tingginya biaya aset (satu pesawat narrow-body komersial bernilai USD 50–110 juta), regulasi keselamatan yang ketat dari otoritas seperti FAA (Federal Aviation Administration) dan EASA (European Union Aviation Safety Agency), serta tekanan kompetisi pada operator maskapai yang beroperasi dengan margin keuntungan tipis, menjadikan kebijakan pemeliharaan bukan sekadar fungsi teknis melainkan pilar strategis rantai nilai industri. Hang Zhou (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menegaskan bahwa *Reliability-Centered Maintenance* (RCM) telah menjadi pendekatan yang sangat dihargai di industri padat-aset karena kemampuannya dalam mengkuantifikasi degradasi non-linear terhadap performa siklus-hidup (*life-cycle performance*) serta mengoptimalkan operasi dengan peningkatan keselamatan dan ketersediaan.

Sektor *Maintenance, Repair, and Overhaul* (MRO) aviasi secara historis mengadopsi kebijakan pemeliharaan preventif berbasis waktu (*time-based preventive maintenance*) dengan hierarki baku A/B/C/D Check. **A-Check** dilakukan setiap 400–600 jam terbang atau 2–3 bulan dengan inspeksi visual dan servis ringan; **B-Check** lebih ekstensif dilakukan setiap 6–12 bulan; **C-Check** berupa inspeksi struktural mayor setiap 20–24 bulan; sementara **D-Check** atau *Heavy Maintenance Visit* merupakan overhaul penuh yang membongkar seluruh pesawat untuk inspeksi, perbaikan, dan *refurbishment* komponen struktural, dilakukan setiap 6–12 tahun. Zhou (2024) menekankan bahwa pada tahap *mature-run* operasi aviasi (setelah beberapa siklus D-Check), pola degradasi menjadi semakin non-linear sehingga diperlukan pendekatan optimasi yang adaptif.

Urgensi ekonomis dari riset ini diperkuat oleh data industri MRO global yang bernilai lebih dari USD 100 miliar per tahun, dengan porsi terbesar adalah pemeliharaan berat pesawat narrow-body dan wide-body. Setiap hari pesawat tidak beroperasi (*Aircraft-on-Ground* – AOG) berpotensi menimbulkan kerugian pendapatan langsung sebesar USD 100.000–250.000 per pesawat wide-body. Oleh karena itu, peningkatan availabilitas armada melalui kebijakan RCM hirarki bukan hanya menurunkan biaya operasional tetapi juga meningkatkan keselamatan operasional. Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) juga memaparkan versi awal model yang menunjukkan keberadaan *trade-off* antara frekuensi inspeksi, durasi downtime, dan keandalan komponen struktural kritis. Kajian ini merepresentasikan integrasi antara teori *renewal process*, optimasi stokastik, dan rekayasa keandalan (*reliability engineering*) modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Paradigma Reliability-Centered Maintenance (RCM)

RCM, sebagaimana diformalkan oleh Moubray (1997) dan diadopsi oleh standar SAE JA1011/1012, berpijak pada tiga pilar: **(i)** preservação fungsi sistem, **(ii)** identifikasi modus kegagalan dominan (*failure modes*), dan **(iii)** seleksi tugas pemeliharaan berdasarkan *risk priority* (kritikalitas, probabilitas, detektibilitas). Dalam konteks hierarki A/B/C/D, setiap level check memiliki parameter yang dapat dimodelkan secara stokastik.

### 2.2 Model Degradasi Non-Linear Siklus-Hidup

Hang Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) mengusulkan pemodelan degradasi menggunakan distribusi Weibull yang merepresentasikan keandalan komponen kritis struktural (misalnya *wing box*, *empennage*, dan *landing gear*):

$$R(t) = \exp\!\left(-\left(\frac{t}{\eta}\right)^{\beta}\right)$$

di mana $R(t)$ adalah probabilitas survival hingga waktu $t$, $\beta$ adalah *shape parameter* (untuk degradasi *wear-out* bernilai $\beta > 1$), dan $\eta$ adalah *scale parameter* atau *characteristic life*. Laju kegagalan (*hazard rate*) diberikan oleh:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.3 Fungsi Availabilitas Hirarki A/B/C/D

Zhou (2024) membangun fungsi availabilitas $A(T)$ yang bergantung pada interval penjadwalan $T_A, T_B, T_C, T_D$ untuk masing-masing tier check, dengan availabilitas sesaat (*steady-state availability*):

$$A = \frac{T_{\text{up}}}{T_{\text{up}} + T_{\text{down}}} = \frac{\text{MTBF}}{\text{MTBF} + \text{MDT}}$$

Untuk kebijakan MRO hirarki dengan *partial refurbishment* (A, B, C-Check) dan *full refurbishment* (D-Check), Zhou memformulasikan model availabilitas sebagai:

$$A(T_A, T_B, T_C, T_D) = \frac{\sum_{i=1}^{n} T_{op,i}}{\sum_{i=1}^{n} T_{op,i} + \sum_{j \in \{A,B,C,D\}} T_{M,j}}$$

di mana $T_{op,i}$ adalah durasi operasional antara kegiatan pemeliharaan ke-$i$, dan $T_{M,j}$ adalah *Mean Down Time* untuk kegiatan pemeliharaan tier $j$. Untuk armada dengan $N$ pesawat, model agregat availabilitas armada (*fleet availability*) menjadi:

$$A_{\text{fleet}} = 1 - \prod_{k=1}^{N}(1 - A_k)$$

### 2.4 Formulasi Optimasi

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) merumuskan masalah optimasi sebagai:

$$\max_{T_A, T_B, T_C, T_D} \; A(T_A, T_B, T_C, T_D)$$

dengan kendala:

$$T_A \in [t_{A,\min}, t_{A,\max}], \quad T_B = k_1 T_A, \quad T_C = k_2 T_A, \quad T_D = k_3 T_A$$

di mana $k_1, k_2, k_3$ adalah konstanta proporsionalitas antar-tier. Solusi optimal dibuktikan ada melalui teorema *existence of optimal value* yang diturunkan dari sifat kontinuitas dan kompaknya *feasible region*. Kondisi orde-1 (*first-order necessary condition*):

$$\frac{\partial A}{\partial T_j} = 0, \quad j \in \{A,B,C,D\}$$

menghasilkan jadwal optimum di mana *marginal benefit* dari penambahan interval sama dengan *marginal cost* berupa peningkatan risiko kegagalan dan waktu tunggu perbaikan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Kerangka Implementasi Empat Fase

Zhou (2024) mengusulkan kerangka implementasi RCM hirarki melalui empat fase sistematis yang selaras dengan standar SAE JA1011 dan regulasi Part-M EASA:

**Fase 1 — Pengumpulan Data & Klasifikasi Aset:** Inventarisasi seluruh *line-replaceable units* (LRU), penentuan fungsi sistem, dan klasifikasi tingkat kritikalitas menggunakan *Failure Modes, Effects, and Criticality Analysis* (FMECA). Setiap komponen diklasifikasikan ke dalam kategori A/B/C/D sesuai interval pemeliharaan alaminya.

**Fase 2 — Pemodelan Degradasi & Estimasi Parameter:** Fitting distribusi Weibull pada data historis kerusakan menggunakan *Maximum Likelihood Estimation* (MLE). Parameter $\beta_j, \eta_j$ diestimasi per tier untuk menangkap karakteristik *infant mortality* ($\beta < 1$), *random failure* ($\beta \approx 1$), atau *wear-out* ($\beta > 1$).

**Fase 3 — Optimasi Penjadwalan:** Penyelesaian model optimasi availabilitas dengan algoritma *bounded optimization* atau *genetic algorithm* untuk memperoleh nilai optimal $T_A^*, T_B^*, T_C^*, T_D^*$. Validasi silang (*cross-validation*) dilakukan dengan simulasi Monte Carlo terhadap 10.000 skenario operasi.

**Fase 4 — Implementasi, Monitoring & Feedback Loop:** Penerapan jadwal optimasi pada *Maintenance Planning Document* (MPD) pesawat, integrasi dengan *Computerized Maintenance Management System* (CMMS), dan *continuous improvement* melalui pembaruan parameter setiap siklus D-Check.

### 3.2 Diagram Alir Logika Pengambilan Keputusan

```
[Mulai] → [Identifikasi Komponen Kritis]
    ↓
[Estimasi Parameter Weibull β, η] → Uji Goodness-of-Fit (Anderson-Darling)
    ↓                                         ↓
[Lolos?] ←———————————————Tidak————→ [Re-fit Distribusi]
    ↓ Ya
[Hitung Availabilitas A(T)] → [Optimasi T_A, T_B, T_C, T_D]
    ↓
[Simulasi Monte Carlo] → [Validasi Hasil]
    ↓
[Implementasi ke MPD/CMMS] → [Monitoring KPI Availabilitas]
    ↓                                        ↓
[Evaluasi Bulanan] ←——————Tidak———— [Tersedia?]
    ↓ Ya
[Update Parameter] → [Kembali ke Fase 2]
```

### 3.3 Integrasi dengan Sistem Manajemen MRO Modern

Kebijakan RCM hirarki Zhou (2024) dirancang untuk interoperabilitas dengan platform MRO digital (*digital MRO*), termasuk integrasi data telemetri pesawat (*Aircraft Health Monitoring* — AHM) melalui protokol ARINC 429/664, serta pemanfaatan *digital twin* untuk simulasi siklus-hidup komponen struktural.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Studi Kasus

Untuk mengilustrasikan model Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) secara kuantitatif, perhatikan skenario armada maskapai narrow-body (misalnya Boeing 737-800) dengan parameter berikut:

| Parameter | Notasi | Nilai | Satuan |
|---|---|---|---|
| Interval A-Check | $T_A$ | 500 | jam terbang |
| Interval B-Check | $T_B$ | 4500 | jam terbang |
| Interval C-Check | $T_C$ | 12000 | jam terbang |
| Interval D-Check | $T_D$ | 36000 | jam terbang |
| Shape parameter Weibull | $\beta$ | 2.3 | – |
| Scale parameter | $\eta$ | 50000 | jam terbang |
| MTTR A-Check | $\overline{T}_{M,A}$ | 24 | jam |
| MTTR B-Check | $\overline{T}_{M,B}$ | 96 | jam |
| MTTR C-Check | $\overline{T}_{M,C}$ | 720 | jam |
| MTTR D-Check | $\overline{T}_{M,D}$ | 2160 | jam (90 hari) |

### 4.2 Perhitungan Step-by-Step

**Langkah 1 — Hitung Keandalan pada Setiap Interval:**

$$R(T_A) = \exp\!\left(-\left(\frac{500}{50000}\right)^{2.3}\right) = \exp(-(0.01)^{2.3}) = \exp(-3.98 \times 10^{-5}) \approx 0.99996$$

$$R(T_B) = \exp\!\left(-\left(\frac{4500}{50000}\right)^{2.3}\right) = \exp(-(0.09)^{2.3}) = \exp(-0.00549) \approx 0.99453$$

$$R(T_C) = \exp\!\left(-\left(\frac{12000}{50000}\right)^{2.3}\right) = \exp(-(0.24)^{2.3}) = \exp(-0.0403) \approx 0.96050$$

$$R(T_D) = \exp\!\left(-\left(\frac{36000}{50000}\right)^{2.3}\right) = \exp(-(0.72)^{2.3}) = \exp(-0.4781) \approx 0.61994$$

**Langkah 2 — Hitung Hazard Rate Kumulatif dan MTBF Efektif:**

MTBF efektif untuk masing-masing tier dihitung dari integral:

$$\text{MTBF}_j = \int_0^{T_j} R(t)\, dt$$

Untuk distribusi Weibull dengan $\beta = 2.