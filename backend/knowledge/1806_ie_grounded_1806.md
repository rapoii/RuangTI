# 1806 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu ekosistem *asset-heavy* dengan karakteristik degradasi performa yang sangat non-linear, konsekuensi keselamatan yang katastrofal, serta tekanan finansial yang sangat besar. Pada tahun 2023, International Air Transport Association (IATA) melaporkan tingkat ketersediaan (*availability*) armada penumpang dunia rata-rata berada di kisaran 85–90%, yang berarti sekitar 10–15% kapasitas armada setiap hari tidak beroperasi karena perawatan, reparasi, maupun overhaul. Dalam konteks tersebut, satu pesawat narrow-body yang tidak terbang selama satu hari akan menimbulkan *revenue loss* sebesar USD 80.000–150.000. Oleh karena itu, optimalisasi kebijakan pemeliharaan bukan sekadar persoalan teknis, melainkan juga persoalan strategis yang menyentuh langsung kepada profitabilitas operator dan keberlanjutan rantai pasok aviasi global.

Hang Zhou (2024) dalam karyanya yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) memperkenalkan kerangka kebijakan MRO yang mengintegrasikan siklus *D-check* penuh (*full refurbishment*) dengan *partial refurbishment* yang dilakukan selama fase mature-run operasi pesawat terbang. Pendekatan ini sekaligus mengatasi kelemahan utama model Reliability-Centered Maintenance (RCM) klasik yang cenderung mengasumsikan hubungan linier antara utilisasi dan degradasi performa. Padahal, sebagaimana ditunjukkan oleh Zhou, degradasi komponen kritis avionik, struktur, dan mesin mengikuti pola *bathtub curve* yang sangat non-linear sehingga membutuhkan struktur keputusan hirarkis berbasis usia pakai, paparan siklus, dan tingkat kritisitas komponen.

Urgensi kebijakan ini semakin nyata ketika mempertimbangkan struktur pemeriksaan baku yang berlaku di hampir seluruh operator penerbangan komersial dunia, yaitu hierarki A/B/C/D-check. Sebuah *A-check* dilakukan setiap 400–600 *flight hours* (FH) atau 3–5 bulan, mencakup inspeksi umum dan servis ringan. *B-check* dilakukan setiap 6–8 bulan dengan cakupan yang lebih luas, sementara *C-check* yang lebih intensif dilakukan setiap 20–24 bulan. Puncak dari hirarki ini adalah *D-check*, atau *heavy maintenance visit*, yang mengharuskan pesawat turun dari operasional selama 1–2 bulan untuk inspeksi total, pembongkaran kabin, inspeksi struktural, dan *refurbishment* penuh. Zhou (2024) secara eksplisit mendemonstrasikan bahwa keberadaan nilai optimum untuk model ketersediaan bersifat *guaranteed* di bawah asumsi *renewal process*, yang menjadi dasar matematis bagi seluruh perancangan jadwal ini.

Dari perspektif ekonomi industri, sebuah *C-check* pada pesawat narrow-body membutuhkan biaya USD 1,5–3 juta dengan downtime 1–2 minggu, sedangkan *D-check* mencapai USD 5–10 juta dengan downtime 30–60 hari. Perbedaan skala biaya dan downtime ini menunjukkan bahwa keputusan *trade-off* tidak dapat diselesaikan secara intuitif, melainkan membutuhkan formulasi optimasi matematis yang ketat, yang menjadi kontribusi utama makalah Zhou (2024) dan versi pendahunya pada DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672). Oleh karena itu, modul 1806 ini dimaksudkan untuk membedah secara sistematis kerangka keputusan RCM hirarkis tersebut agar dapat dipahami, dihitung, dan diadaptasi oleh praktisi Teknik Industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Ketersediaan Hirarkis

Zhou (2024) membangun model ketersediaan sebagai fungsi dari interval inspeksi. Misalkan $\tau_i$ menyatakan interval waktu antara dua inspeksi bertingkat $i$ (dengan $i \in \{A,B,C,D\}$), dan $\tau_m^{(i)}$ menyatakan downtime rata-rata untuk pelaksanaan inspeksi tingkat $i$. Ketersediaan sesaat (*instantaneous availability*) didefinisikan sebagai:

$$A_i(\tau_i) = \frac{\tau_i}{\tau_i + \tau_m^{(i)} + \tau_r^{(i)}}$$

di mana $\tau_r^{(i)}$ adalah waktu reparasi tak terencana yang muncul secara stokastik di antara dua inspeksi berturutan. Untuk menangkap karakteristik stokastik dari kerusakan, Zhou memodelkan laju kegagalan sebagai fungsi *Weibull* dengan parameter bentuk $\beta > 1$ (menandai fase *wear-out*):

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $\eta$ adalah *scale parameter* (umur karakteristik) dan $\beta$ adalah *shape parameter*. Mean Time To Failure (MTTF) untuk distribusi Weibull adalah:

$$\text{MTTF} = \eta \cdot \Gamma\left(1+\frac{1}{\beta}\right)$$

### 2.2 Formulasi Kebijakan Hirarkis A/B/C/D

Struktur hirarkis berarti interval-inspeksi harus konsisten secara komposisional. Zhou (2024) mendefinisikan:

$$\tau_A = k_1 \cdot \tau_B = k_2 \cdot \tau_C = k_3 \cdot \tau_D$$

dengan $k_1, k_2, k_3$ adalah konstanta rasio yang mencerminkan struktur baku industri (misalnya $k_1 = 2, k_2 = 12, k_3 = 60$). Ketersediaan jangka panjang (*long-run availability*) untuk satu siklus D-check penuh yang mencakup $n_B$ buah *B-check*, $n_C$ buah *C-check*, dan $n_A$ buah *A-check* dapat ditulis sebagai:

$$A_{LR} = \frac{T_{op}}{T_{op} + n_A \tau_m^{(A)} + n_B \tau_m^{(B)} + n_C \tau_m^{(C)} + \tau_m^{(D)} + \sum_{j} \tau_r^{(j)}}$$

di mana $T_{op}$ adalah total waktu operasi dalam satu siklus penuh dan $\tau_r^{(j)}$ adalah waktu reparasi tak terencana ke-$j$.

### 2.3 Optimasi dengan Lagrange Multiplier

Masalah optimasi yang diusulkan Zhou adalah memaksimumkan $A_{LR}$ dengan memperhatikan kendala biaya total $C_{tot} \leq C_{budget}$:

$$\mathcal{L} = A_{LR}(\tau_i) - \lambda \left( \sum_i n_i c_i + c_D - C_{budget} \right)$$

dengan $c_i$ adalah biaya inspeksi tingkat $i$ dan $c_D$ adalah biaya D-check. Kondisi orde-1 optimal memberikan:

$$\frac{\partial A_{LR}}{\partial \tau_i} = \lambda \cdot \frac{\partial}{\partial \tau_i}\left(\sum_i n_i c_i\right)$$

Zhou (2024) membuktikan secara analitis bahwa solusi optimal $\tau_i^*$ bersifat unik dan berada di dalam domain $\tau_i \in [\tau_i^{min}, \tau_i^{max}]$ untuk setiap tingkat inspeksi, sehingga *availability optimum* bersifat *attainable* dan bukan sekadar limit asimptotik.

### 2.4 Model Degradasi Refurbishment Parsial

Untuk *partial refurbishment* yang dilakukan di antara D-check penuh, Zhou memperkenalkan faktor *renewal effect* $\rho \in (0,1)$ yang menyatakan proporsi degradasi yang dihilangkan:

$$\lambda_{post}(t) = \rho \cdot \lambda_{pre}(t) + (1-\rho)\lambda_{new}(t)$$

Efek ini memungkinkan operator melakukan *C-check* dengan *intermediate refurbishment* yang memperpanjang *useful life* komponen kritis seperti *landing gear*, *APU*, dan *engine LLP (life-limited parts)*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti SOP berlapis yang terdiri atas tujuh tahapan rekayasa, sebagaimana diadaptasi dari kerangka Zhou (2024) dan standar SAE JA1011/SAE JA1012 untuk *RCM Analysis*:

**Tahap 1 — Inventarisasi Aset & Klasifikasi Kritisitas.** Setiap sub-sistem pesawat diklasifikasikan ke dalam Matriks Kritisitas 4×4 yang menggabungkan *consequence of failure* (CoF) dan *probability of failure* (PoF). Komponen dengan CoF *catastrophic* (misalnya sistem hidrolik pendaratan) masuk *Critical Item List* (CIL).

**Tahap 2 — Penentuan Fungsi & Kegagalan Fungsional.** Tahap ini menjawab pertanyaan *what must the system do?* dan *how can it fail?* mengikuti tujuh kategori kegagalan FMEA (SAE J1739).

**Tahap 3 — Penentuan Tugas RCM.** Zhou mengusulkan pohon keputusan (*decision logic tree*) dengan 12 *node* yang memilih di antara tujuh tipe tugas RCM: *scheduled discard*, *scheduled overhaul*, *scheduled inspection*, *condition monitoring*, *failure finding*, *redesign*, dan *one-time change*.

**Tahap 4 — Penentuan Interval Optimal.** Interval dipilih dengan memaksimalkan $A_{LR}$ dari Persamaan di Bagian 2.2 menggunakan algoritma *dynamic programming* dengan diskretisasi interval 50 FH.

**Tahap 5 — Implementasi CMMS/EAM.** Penjadwalan dimasukkan ke dalam *Computerized Maintenance Management System* (misalnya SAP PM, TRAX, atau AMOS) dengan *trigger* otomatis berbasis FH, *flight cycles* (FC), dan kalender.

**Tahap 6 — Monitoring & Feedback Loop.** Data *unscheduled removal rate* (URR), *mean time between unscheduled removals* (MTBUR), dan *dispatch reliability* direkam dan dibandingkan terhadap *target* yang ditetapkan pada Tahap 4.

**Tahap 7 — Review Periodik.** Setiap 12 bulan, model dikalibrasi ulang dengan data empiris untuk memperbarui parameter Weibull.

Diagram alir keputusan untuk pemilihan tugas RCM mengikuti logika:

```
[Komponen Baru] → (PoF rendah?)
                   ├─ Ya → Condition Monitoring
                   └─ Tidak → (CoF catastrophic?)
                              ├─ Ya → Redesign/Scheduled Discard
                              └─ Tidak → (CoF major?)
                                          ├─ Ya → Scheduled Inspection
                                          └─ Tidak → Failure Finding
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah operator penerbangan mengelola armada Airbus A320 dengan parameter berikut (mengacu pada tipikal industri MRO Eropa):

| Parameter | Simbol | Nilai |
|---|---|---|
| Utilisasi harian | $u$ | 10 jam/hari |
| Flight cycle harian | $n_{fc}$ | 2 siklus/hari |
| Interval A-check | $\tau_A$ | 500 FH |
| Downtime A-check | $\tau_m^{(A)}$ | 12 jam |
| Biaya A-check | $c_A$ | USD 25.000 |
| Interval B-check | $\tau_B$ | 8 bulan |
| Downtime B-check | $\tau_m^{(B)}$ | 48 jam |
| Biaya B-check | $c_B$ | USD 250.000 |
| Interval C-check | $\tau_C$ | 24 bulan |
| Downtime C-check | $\tau_m^{(C)}$ | 240 jam |
| Biaya C-check | $c_C$ | USD 2.500.000 |
| Interval D-check | $\tau_D$ | 12 tahun |
| Downtime D-check | $\tau_m^{(D)}$ | 1.440 jam |
| Biaya D-check | $c_D$ | USD 8.000.000 |

**Langkah 1 — Hitung Ketersediaan Masing-Masing Tingkat Inspeksi:**

$$A_A = \frac{500}{500 + 12} = \frac{500}{512} = 0{,}9766$$

$$A_B = \frac{2.000}{2.000 + 48} = 0{,}9766$$

$$A_C = \frac{12.000}{12.000 + 240} = 0{,}9804$$

$$A_D = \frac{70.000}{70.000 + 1.440} = 0{,}9798$$

dimana $\tau_B = 8 \text{ bulan} \times 30 \text{ hari} \times 10 \text{ jam} = 2.000$ jam, $\tau_C = 12.000$ jam, dan $\tau_D = 70.000$ jam (12 tahun × 365 × 16 jam utilisasi rata-rata).

**Langkah 2 — Ketersediaan Jangka Panjang Satu Siklus Penuh:**

Dalam satu siklus D-check 12 tahun, terjadi:
- $n_D = 1$ buah D-check
- $n_C = 6$ buah C-check (tiap 24 bulan)
- $n_B = 18$ buah B-check (tiap 8 bulan)
- $n_A \approx 140$ buah