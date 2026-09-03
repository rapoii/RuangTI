# 2222 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. SSRN Electronic Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – Companion/Related Study*. SSRN Electronic Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem rekayasa sistem paling kompleks di dunia, di mana ketersediaan (*availability*) armada pesawat bukan sekadar metrik operasional, melainkan menjadi penentu langsung profitabilitas maskapai, keselamatan penumpang, dan kepatuhan regulasi. Zhou (2024) dalam studinya yang dipublikasikan pada jurnal *peer-reviewed* ber-DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menegaskan bahwa *Reliability-Centered Maintenance* (RCM) menjadi pendekatan yang sangat dihargai dalam industri berbasis aset berat (*asset-heavy industries*) karena kemampuannya dalam mengkuantifikasi degradasi kinerja non-linier sepanjang siklus hidup dan mengoptimalkan operasi dengan tetap mempertahankan — bahkan meningkatkan — tingkat keselamatan dan ketersediaan. Zhou menulis: *"RCM is highly valued in asset-heavy industries for its ability to quantify the non-linear degradation of life-cycle performance and optimize operations by enhancing safety and availability"* (Zhou, 2024, [ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Konteks urgensi muncul dari struktur pemeliharaan penerbangan yang secara historis menggunakan kebijakan A/B/C/D check — sebuah taksonomi *hard-time* maintenance yang dikembangkan sejak era piston dan diwarisi ke era jet. *A-check* dilakukan setiap 400–600 jam terbang dengan inspeksi visual dan servis ringan; *B-check* lebih detail, digabung atau dipisahkan tergantung operator; *C-check* merupakan inspeksi mayor setiap 20–24 bulan; sedangkan *D-check* (atau *heavy maintenance visit*) adalah *overhaul* penuh dengan pembongkaran struktural yang dapat memakan waktu 1–2 bulan dan biaya puluhan juta dolar AS per pesawat narrow-body. Zhou (2024) menekankan bahwa implementasi RCM pada sistem sekompleks kebijakan A/B/C/D dalam penerbangan menghadapi tantangan model yang tidak sedikit. Industri penerbangan komersial mencatat biaya *direct maintenance* rata-rata 10–15% dari total *operating expense* maskapai, dan satu hari *ground time* pesawat narrow-body seperti Airbus A320 atau Boeing 737 mewakili kehilangan pendapatan senilai US$ 50.000–120.000. Oleh karena itu, kebijakan pemeliharaan yang mengoptimalkan ketersediaan tanpa mengorbankan keselamatan menjadi imperatif strategis. Studi komplementer Zhou (2024) berDOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) memperkuat kerangka analitis ini dengan elaborasi model dan validasi empiris pada kebijakan pemeliharaan hirarkis.

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024) membangun model ketersediaan dengan mempertimbangkan *fully refurbished D-check cycles* dan *partial refurbishments* pada fase *mature-run* operasi penerbangan. Formulasi dimulai dari pendefinisian ketersediaan sesaat (*instantaneous availability*) untuk komponen atau subsistem:

$$A(t) = \frac{T_{up}(t)}{T_{up}(t) + T_{down}(t)}$$

di mana $T_{up}(t)$ adalah waktu operasional kumulatif hingga waktu $t$ dan $T_{down}(t)$ adalah waktu *downtime* kumulatif yang diakibatkan oleh inspeksi dan perbaikan. Untuk kebijakan hirarkis dengan empat tingkat check, Zhou memperkenalkan indeks check $k \in \{A, B, C, D\}$ dengan interval inspeksi berturut-turut $\tau_A, \tau_B, \tau_C, \tau_D$ yang memenuhi:

$$\tau_A < \tau_B < \tau_C < \tau_D$$

dengan rasio tipikal $\tau_A : \tau_B : \tau_C : \tau_D \approx 1 : 6 : 100 : 1500$ dalam satuan jam terbang.

Model degradasi non-linier menggunakan *power-law degradation* yang menjadi ciri khas pendekatan RCM:

$$h(t) = h_0 \cdot \left(1 + \beta \cdot t^{\alpha}\right)$$

di mana $h(t)$ adalah *failure rate* pada waktu $t$, $h_0$ adalah *baseline hazard rate*, sementara $\beta$ dan $\alpha$ adalah parameter degradasi yang dikalibrasi dari data *failure history* fleet. Zhou (2024) menunjukkan bahwa keberadaan karakteristik non-linier ini menjadi pembeda utama RCM dari kebijakan *scheduled maintenance* klasik yang mengasumsikan laju kegagalan konstan.

Untuk ketersediaan jangka panjang (*long-run availability*), Zhou menurunkan:

$$A_L = \lim_{T \to \infty} \frac{1}{T} \int_0^T A(t) \, dt = \frac{\sum_{k \in \{A,B,C,D\}} n_k \cdot \mu_k}{\sum_{k \in \{A,B,C,D\}} n_k \cdot (\mu_k + \bar{d}_k)}$$

di mana $n_k$ adalah jumlah check tingkat $k$ per siklus hidup, $\mu_k$ adalah *mean operational time* antar check tingkat $k$, dan $\bar{d}_k$ adalah *mean downtime* check tingkat $k$. Penjadwalan check dioptimasi dengan:

$$\max_{\tau_A, \tau_B, \tau_C, \tau_D} A_L(\tau_A, \tau_B, \tau_C, \tau_D)$$

tunduk pada kendala probabilitas keselamatan:

$$P\{T_{failure} > \tau_k\} \geq 1 - \gamma_k \quad \forall k \in \{A, B, C, D\}$$

di mana $\gamma_k$ adalah probabilitas kegagalan yang dapat ditoleransi (tipikal $10^{-6}$ untuk *catastrophic failure* sesuai standar FAR/CS 25.1309). Zhou (2024) membuktikan eksistensi nilai optimal untuk model ketersediaan ini melalui teorema titik tetap Banach dan analisis konveksitas fungsi tujuan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Zhou (2024) mengikuti arsitektur tujuh tahap yang merupakan paduan antara standar MSG-3 (*Maintenance Steering Group – 3rd Task Force*), SAE JA1011/1012 untuk RCM, dan praktik terbaik MRO industri:

```
┌─────────────────────────────────────────────────────────────────────┐
│  TAHAP 1: Segmentasi Sistem Pesawat & Pemetaan LRU/HU              │
│           ↓                                                         │
│  TAHAP 2: Pengumpulan Data MTBF/MTTR dari Logbook & ACMS            │
│           ↓                                                         │
│  TAHAP 3: Analisis Modus & Efek Kegagalan (FMEA)                   │
│           ↓                                                         │
│  TAHAP 4: Penentuan Fungsi & Kegagalan Signifikan                   │
│           ↓                                                         │
│  TAHAP 5: Pemilihan Tugas RCM (Proactive/Redesign/Run-to-Failure)  │
│           ↓                                                         │
│  TAHAP 6: Optimasi Interval τA,τB,τC,τD dengan Model Zhou (2024)  │
│           ↓                                                         │
│  TAHAP 7: Implementasi di MRO Software (AMOS/TRAX/SAP) + Audit     │
└─────────────────────────────────────────────────────────────────────┘
```

Setiap *Line Replaceable Unit* (LRU) diberi kode signifikansi mengikuti konvensi MSG-3 dengan kategori konsekuensi keselamatan (*Safety*), operasional (*Operational*), ekonomi (*Economic*), dan lingkungan (*Environmental*). Tahap kritis adalah kalibrasi parameter $\alpha$ dan $\beta$ dari *historical failure data* minimal 5 tahun operasi, yang kemudian dimasukkan ke dalam *Maintenance Program Approval Sheet* yang diajukan ke otoritas航空 (*aviation authority* — FAA, EASA, atau DGCA) untuk persetujuan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Optimalisasi Interval Check pada Armada Boeing 737-800**

Pertimbangkan maskapai dengan 50 unit Boeing 737-800 yang beroperasi rata-rata 3.000 jam terbang/tahun per pesawat. Data historis menunjukkan parameter RCM berikut:

| Parameter | Simbol | Nilai | Sumber |
|-----------|--------|-------|--------|
| Baseline hazard rate | $h_0$ | $5{,}0 \times 10^{-5}$/jam | ACMS data |
| Parameter degradasi | $\alpha$ | 1,4 | Fitting 5 tahun |
| Parameter degradasi | $\beta$ | $3{,}2 \times 10^{-7}$ | Fitting 5 tahun |
| Downtime A-check | $\bar{d}_A$ | 8 jam | MRO shop |
| Downtime B-check | $\bar{d}_B$ | 24 jam | MRO shop |
| Downtime C-check | $\bar{d}_C$ | 240 jam (10 hari) | MRO shop |
| Downtime D-check | $\bar{d}_D$ | 2.400 jam (100 hari) | Heavy maintenance |
| Biaya downtime | $c_d$ | US$ 80.000/hari | Industri rata-rata |

**Langkah 1: Validasi Model Degradasi**

Hitung *failure rate* pada $t = 5.000$ jam:

$$h(5000) = 5{,}0 \times 10^{-5} \cdot \left(1 + 3{,}2 \times 10^{-7} \cdot 5000^{1,4}\right)$$

$$5000^{1,4} = e^{1,4 \cdot \ln 5000} = e^{1,4 \cdot 8{,}517} = e^{11{,}924} \approx 152.150$$

$$h(5000) = 5{,}0 \times 10^{-5} \cdot (1 + 3{,}2 \times 10^{-7} \cdot 152.150)$$

$$= 5{,}0 \times 10^{-5} \cdot (1 + 0{,}0487) = 5{,}24 \times 10^{-5} \text{ per jam}$$

Ini menunjukkan *failure rate* masih rendah (sesuai profil *useful life* komponen авиа).

**Langkah 2: Optimalisasi Interval dengan Kebijakan Hirarkis**

Misalkan rasio interval yang akan diuji: $\tau_A : \tau_B : \tau_C : \tau_D = 500 : 3000 : 18000 : 50000$ jam terbang. Dengan kebijakan ini, dalam satu siklus hidup D-check (50.000 jam) jumlah check yang terjadi:

$$n_A = \left\lfloor \frac{50000}{500} \right\rfloor = 100, \quad n_B = \left\lfloor \frac{50000}{3000} \right\rfloor \approx 17$$

$$n_C = \left\lfloor \frac{50000}{18000} \right\rfloor = 3, \quad n_D = 1$$

**Langkah 3: Perhitungan Ketersediaan Jangka Panjang**

Substitusi ke rumus $A_L$:

$$A_L = \frac{100 \cdot (500 - 8) + 17 \cdot (3000 - 24) + 3 \cdot (18000 - 240) + 1 \cdot (50000 - 2400)}{100 \cdot 500 + 17 \cdot 3000 + 3 \cdot 18000 + 1 \cdot 50000}$$

Pembilang:
$$= 49.200 + 50.592 + 53.280 + 47.600 = 200.672 \text{ jam operasi}$$

Penyebut:
$$= 50.000 + 51.000 + 54.000 + 50.000 = 205.000 \text{ jam total}$$

$$A_L = \frac{200.672}{205.000} = 0{,}9789 = 97{,}89\%$$

**Langkah 4: Perbandingan dengan Kebijakan Konservatif (Rasio 1:4:60:1200)**

Untuk rasio $\tau_A=400, \tau_B=1600, \tau_C=24000, \tau_D=48000$:

$$A_L^{(konservatif)} = \frac{120\cdot 392 + 30\cdot 1576 + 2\cdot 23760 + 1\cdot 45600}{120\cdot 400 + 30\cdot 1600 + 2\cdot 24000 + 1\cdot 48000}$$

$$= \frac{47040 + 47280 + 47520 + 45600}{48000 + 48000 + 48000 + 48000} = \frac{187.440}{192.000} = 0{,}9763$$

**Langkah 5: Perhitungan Dampak Ekonomi untuk 50 Pesawat**

Selisih ketersediaan: $\Delta A = 0{,}9789 - 0{,}9763 = 0{,}0026$ (0,26 poin persentase). Untuk 50 pesawat yang terbang 3.000 jam/tahun:

$$\Delta T_{up} = 50 \cdot 3000 \cdot 0{,}0026 = 390 \text{ jam operasi tambahan/tahun}$$

Dalam hari terbang (asumsi 10 jam/hari):

$$\Delta \text{Hari} = \frac{390}{10} = 39 \text{ hari pesawat tambahan/tahun}$$

Dampak finansial:

$$\