# 2846 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tantangan struktural yang sangat kompleks dalam pengelolaan armada pesawat terbang, di mana biaya operasional dan keselamatan penumpang menjadi dua kutub keputusan yang harus disejajarkan secara presisi. Dalam konteks ini, sektor *Maintenance, Repair, and Overhaul* (MRO) muncul sebagai tulang punggung operasional yang menjamin ketersediaan (*availability*) armada sekaligus mempertahankan standar keselamatan udara yang ketat, seperti yang diatur oleh ICAO Annex 6 Part I dan EASA Part-M (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Menurut Zhou (2024), industri aviasi secara konvensional mengadopsi kebijakan pemeliharaan preventif hirarkis yang terdiri atas empat tingkatan utama: **A-check** (pemeriksaan ringan berkala 400–600 jam terbang), **B-check** (pemeriksaan menengah setiap 6–8 bulan kalender), **C-check** (inspeksi ekstensif setiap 20–24 bulan), dan **D-check** (overhaul penuh atau *full refurbishment* yang dilakukan setiap 6–12 tahun). Kebijakan A/B/C/D ini, meskipun terstandarisasi, memiliki kelemahan inheren: degradasi kinerja *life-cycle* bersifat **non-linier**, sehingga penjadwalan inspeksi berbasis interval tetap (*fixed-interval*) sering kali menghasilkan *over-maintenance* pada fase matang (*mature-run*) dan *under-maintenance* pada fase awal operasi.

Urgensi ekonomi dari permasalahan ini sangat substansial. Industri MRO aviasi global bernilai lebih dari USD 84 miliar per 2023 dan diproyeksikan mencapai USD 116 miliar pada 2034 (sesuai tren pra-pandemi yang dikompilasi dalam literatur MRO). Setiap satu jam *ground time* pesawat *wide-body* seperti Boeing 777 atau Airbus A350 dapat menimbulkan kerugian pendapatan tiket hingga USD 18.000–25.000 per jam, belum termasuk biaya *spare part* logistik dan *opportunity cost* dari slot penerbangan yang hilang. Oleh karena itu, optimalisasi ketersediaan armada bukan sekadar persoalan teknis pemeliharaan, melainkan keputusan finansial dan strategis yang menentukan profitabilitas maskapai.

Hang Zhou (2024) memperkenalkan sebuah kerangka kerja kebijakan MRO yang secara eksplisit mengintegrasikan **D-check penuh** dengan **partial refurbishment** (refurbishment sebagian) selama fase mature-run operasi aviasi. Pendekatan ini berakar pada filosofi *Reliability-Centered Maintenance* (RCM), yang pertama kali diperkenalkan oleh Moubray (1997) dan telah diadopsi luas di industri berat seperti perminyakan, kereta api, dan nuklir. Namun, aplikasi RCM pada sistem kompleks seperti kebijakan A/B/C/D aviasi masih minim diteliti secara kuantitatif, terutama dalam hal pembuktian eksistensi **nilai optimum** model ketersediaan. Studi Zhou menutup celah tersebut dengan membuktikan bahwa tersedia jadwal pemeriksaan *life-cycle* yang memaksimalkan *available operation time*, dan nilai optimum ini **eksis secara matematis** dalam domain solusi yang dibatasi oleh parameter struktural armada.

Dengan demikian, modul ini membahas formulasi matematis ketersediaan armada (*fleet availability*), prosedur implementasi hirarkis A/B/C/D, serta analisis sensitivitas terhadap parameter *mean time between failures* (MTBF) dan *mean time to repair* (MTTR). Diskusi ditutup dengan evaluasi lintas-sektor yang relevan bagi praktisi teknik industri di Indonesia, khususnya untuk industri pendukung penerbangan (seperti Garuda Maintenance Facility, GMF AeroAsia) dan aplikasi lintas-domain di sektor manufaktur berat serta energi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Keandalan Hirarkis A/B/C/D

Model Zhou (2024) memandang siklus hidup pesawat sebagai barisan interval operasional dan interval perbaikan yang berulang (*renewal process*). Empat tingkat inspeksi membentuk hierarki dengan intensitas degradasi yang berbeda, di mana setiap tingkat $k \in \{A,B,C,D\}$ memiliki durasi inspeksi $t_k$ dan frekuensi intrinsik $f_k$.

Durasi total satu siklus hidup D-check penuh didefinisikan sebagai:

$$T_D = \sum_{k \in \{A,B,C,D\}} N_k \cdot \tau_k$$

dengan $N_k$ menyatakan jumlah kunjungan inspeksi tingkat $k$ per siklus D-check penuh, dan $\tau_k$ adalah waktu rata-rata inspeksi tingkat $k$ (dalam jam).

### 2.2. Model Degradasi Non-Linier

Degradasi kondisi teknis komponen pesawat dimodelkan menggunakan fungsi reliabilitas Weibull, yang merupakan standar de facto untuk sistem mekanik-aviasi karena fleksibilitas bentuk hazard-nya (meningkat, konstan, atau menurun):

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

dengan:
- $R(t)$ = probabilitas komponen berfungsi tanpa kegagalan hingga waktu $t$
- $\beta$ = parameter bentuk (*shape parameter*)
- $\eta$ = parameter skala (*scale parameter*, karakteristik hidup)

Laju kegagalan (*hazard rate*) sesaat:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Untuk $\beta > 1$ (keausan dominan, lazim pada struktur pesawat tua), $h(t)$ meningkat secara monoton, merepresentasikan karakteristik mature-run yang dibahas Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 2.3. Formulasi Ketersediaan Armada (Availability)

**Steady-state availability** armada didefinisikan sebagai rasio antara *Mean Time Between Failures* (MTBF) terhadap total waktu yang dijadwalkan:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} = \frac{\text{MTBF}}{\text{MTBO}}$$

dengan MTBO (*Mean Time Between Overhauls*) = MTBF + MTTR, dan MTTR mencakup **seluruh waktu ground-time** termasuk inspeksi terprogram, koreksi tak terencana, dan logistik *spare part*.

Zhou (2024) memperluas formula ini dengan memasukkan **partial refurbishment** (refurbishment sebagian) pada fase mature-run. Jika $T_p$ adalah interval antar-refurbishment parsial, maka *availability efektif* selama satu siklus D-check penuh menjadi:

$$A_{\text{cycle}} = \frac{T_D - \sum_{i} t_{\text{insp},i} - t_{\text{fail}}}{T_D}$$

dengan $t_{\text{insp},i}$ adalah waktu inspeksi ke-$i$ dan $t_{\text{fail}}$ adalah total downtime akibat kegagalan tak terencana.

### 2.4. Optimisasi Waktu Operasi Maksimum

Zhou (2024) membuktikan eksistensi *optimal available operation time* melalui fungsi tujuan:

$$\max_{N_A, N_B, N_C, T_p} \; \Phi(N_A, N_B, N_C, T_p) = \int_0^{T_D} A(t) \, dt$$

dengan kendala:
- $N_A \cdot \Delta t_A + N_B \cdot \Delta t_B + N_C \cdot \Delta t_C + T_p = T_D$ (konservasi waktu siklus)
- $N_A, N_B, N_C \in \mathbb{Z}^+$ (diskretitas kunjungan inspeksi)
- $R_{\min} \leq R(t)$ selama seluruh siklus (kendala reliabilitas minimum)

Bukti eksistensi nilai optimum menggunakan teorema nilai ekstrem Weierstrass pada himpunan kompak yang dihasilkan oleh kendala integer programming. Hasil ini menjadi kontribusi teoretis utama makalah tersebut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM aviasi mengikuti prosedur sistematis berikut, yang disintesis dari literatur Zhou (2024) dan standar industri (ATA MSG-3, SAE JA1012):

**Tahap 1 — Karakterisasi Sistem dan Subsistem.** Lakukan dekomposisi fungsi pesawat (*Functional Block Diagram*) ke dalam tujuh sistem utama: struktur (*airframe*), propulsi, avionik, hidrolik, pneumatik, elektrik, dan *landing gear*. Tetapkan *Failure Mode and Effects Analysis* (FMEA) untuk masing-masing.

**Tahap 2 — Penentuan Interval Inspeksi Awal.** Gunakan data historis *Mean Time Between Unscheduled Removals* (MTBUR) dari armada sejenis. Untuk pesawat baru, gunakan *reliability growth testing* dengan model Duane atau AMSAA.

**Tahap 3 — Penjadwalan Hirarkis A/B/C/D dengan Partial Refurbishment.** Buat kalender pemeliharaan sebagai berikut:

| Tingkat | Interval | Lingkup | Durasi Tipikal |
|---------|----------|---------|----------------|
| A-check | 400–600 FH | Inspeksi visual, *servicing* | 50–100 jam |
| B-check | 6–8 bulan | A-check + inspeksi sistem | 150–250 jam |
| C-check | 20–24 bulan | A+B + inspeksi struktural | 1–2 minggu |
| Partial R | 4–6 tahun (dalam siklus D) | Komponen terbatas | 3–5 hari |
| D-check | 6–12 tahun | Strip penuh, refurbishment total | 1–2 bulan |

**Tahap 4 — Optimisasi dengan Model Zhou (2024).** Masukkan parameter MTBF, MTTR, dan biaya inspeksi setiap tingkat ke dalam model kuantitatif. Selesaikan masalah optimisasi untuk menentukan $N_A^*, N_B^*, N_C^*, T_p^*$ yang memaksimalkan *available operation time*.

**Tahap 5 — Validasi dan Iterasi.** Bandingkan jadwal hasil optimisasi dengan jadwal aktual operasional selama 12–24 bulan. Hitung Key Performance Indicators (KPI): *dispatch reliability* (target ≥ 99,5%), *on-time performance*, dan *maintenance cost per available seat mile* (CASM).

Diagram alur logika keputusan digambarkan sebagai berikut:

```
[Data Operasional Armada] 
        ↓
[FMEA & Penentuan R(t)] 
        ↓
[Hitung MTBF, MTTR per tingkat] 
        ↓
[Formulasi A_cycle(T_D, T_p)]
        ↓
[Optimasi constrained]
        ↓
   ┌────┴────┐
[Jadwal Optimum] ←→ [Iterasi sampai konvergensi]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Maskapai regional mengoperasikan armada 20 unit Airbus A320. Berdasarkan data historis Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)), gunakan parameter berikut:

- $\beta = 2{,}5$, $\eta = 12\,000$ jam terbang (komponen struktural)
- MTBF rata-rata armada = 3.500 jam terbang
- MTTR inspeksi A = 60 jam, B = 180 jam, C = 320 jam, D = 720 jam
- Partial refurbishment: $T_p = 4$ tahun $\approx 17\,520$ jam terbang

### Langkah 1 — Hitung Reliabilitas pada Akhir Siklus D-check

Untuk satu siklus D-check penuh $T_D = 12$ tahun $\approx 52\,560$ jam terbang, evaluasi reliabilitas Weibull:

$$R(T_D) = e^{-\left(\frac{52\,560}{12\,000}\right)^{2,5}} = e^{-(4{,}38)^{2,5}}$$

$$(4{,}38)^{2,5} = e^{2{,}5 \cdot \ln(4{,}38)} = e^{2{,}5 \cdot 1{,}478} = e^{3{,}695} = 40{,}30$$

$$R(T_D) = e^{-40{,}30} \approx 1{,}69 \times 10^{-18}$$

Nilai ini secara fisik tidak realistis, yang mengilustrasikan **mengapa D-check periodik wajib** — reliabilitas struktural tidak akan bertahan tanpa refurbishment penuh.

### Langkah 2 — Availability Tanpa Optimisasi (Kebijakan A/B/C/D Konvensional)

Misalkan dalam satu siklus D-check 12 tahun, maskapai melakukan:
- A-check: $N_A = 100$ kali → downtime = $100 \times 60 = 6\,000$ jam
- B-check: $N_B = 18$ kali → downtime = $18 \times 180 = 3\,240$ jam
- C-check: $N_C = 6$ kali → downtime = $6 \times 320 = 1\,920$ jam
- D-check: 1 kali → downtime = 720 jam

Total downtime terjadwal: $T_{\text{insp}} = 6\,000 + 3\,240 + 1\,920 + 720 = 11\,880