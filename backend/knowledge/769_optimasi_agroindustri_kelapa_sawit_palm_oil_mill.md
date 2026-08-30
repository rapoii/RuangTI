# 769 — Optimasi Agroindustri Kelapa Sawit: Yield, Penjadwalan Sterilisasi, & Keandalan Palm Oil Mill (PKS)

**Domain:** Agroindustri & Manufaktur Proses — Rantai Pasok Kelapa Sawit
**Topik Spesialis:** Optimasi *Oil Extraction Rate* (OER), Penjadwalan Batch Sterilisator, Analisis Kehilangan Minyak (*Oil Loss Decomposition*), Kinetika FFA & Manajemen Kualitas TBS, SPC/DMAIC di Pabrik Kelapa Sawit, Energi & Limbah Cair (POME/Biogas)
**Standar & Referensi Utama:** Corley & Tinker (2016, *The Oil Palm*); Basiron (2007, *EJLST*); Perpres No. 44 Tahun 2020 (ISPO); RSPO Principles & Criteria; Montgomery (2020, *SQC*); Hillier & Lieberman (2021, *OR*)

---

## 1. Pendahuluan dan Konteks Industri

Indonesia adalah **produsen minyak sawit mentah (Crude Palm Oil/CPO) terbesar dunia**, menyumbang mayoritas pasokan global dengan produksi nasional puluhan juta ton per tahun dan nilai ekspor puluhan hingga ratusan triliun rupiah yang menopang ekonomi pedesaan di Sumatera, Kalimantan, dan Papua. Tulang punggung pengolahan hulu adalah **Pabrik Kelapa Sawit (PKS)** — fasilitas proses kapasitas tipikal 20–80 ton TBS (Tandan Buah Segar)/jam — yang mengonversi TBS menjadi CPO dan *palm kernel* melalui tahapan: penerimaan & penimbangan → **sterilisasi uap** (batch, ±2,5–3 barg, 90–120 menit) → *threshing* (pelepasan buah dari tandan) → **pengepressan screw press** → **klarifikasi** (decanter/centrifuge) → penyimpanan tangki CPO. Produk sampingnya meliputi *empty fruit bunch* (EFB), serat (*fiber*), cangkang (*shell*), *palm kernel*, dan **limbah cair POME**.

Dari kacamata Teknik Industri, PKS adalah laboratorium sempurna bagi integrasi disiplin: **manajemen logistik inbound** (antrian truk TBS di timbangan dan loading ramp), **penjadwalan batch** (sterilizer sebagai mesin kapasitas-terbatas), **rekayasa kualitas** (FFA, kadar air & kotoran/M&I, SPC klarifikasi), **TPM/OEE** (keandalan screw press dan boiler), hingga **optimasi energi** (boiler berbahan bakar serat-cangkang, penangkapan biogas POME). Variabel performa utama adalah **OER** (*Oil Extraction Rate* = massa CPO netto per massa TBS, tipikal 20–23%) dan **KER** (*Kernel Extraction Rate*); setiap kenaikan 1 poin persentase OER pada PKS kapasitas 30 t/j bernilai miliaran rupiah per tahun. Tantangan klasiknya: kualitas TBS yang menurun sejak panen (kenaikan asam lemak bebas/FFA akibat enzim lipase), variabilitas kematangan tandan, kehilangan minyak di tiap stasiun, serta tuntutan keberlanjutan **ISPO** (Perpres 44/2020) dan **RSPO**. Modul ini merumuskan fondasi matematis optimasi PKS, metodologi DMAIC/SPC, studi kasus peningkatan OER, serta peta KPI dan teknologi digitalisasi pabrik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Neraca Massa & Dekomposisi Yield

Neraca massa stasiun-gabungan PKS untuk periode pengamatan:

$$ m_{TBS} = m_{CPO} + m_{PK} + m_{EFB} + m_{fiber} + m_{shell} + m_{POME} + m_{evap} $$

Indikator kinerja inti (setelah koreksi kadar air-kotoran):

$$ \mathrm{OER} = \frac{m_{CPO}\left(1 - \tfrac{MI}{100}\right)}{m_{TBS}} \times 100\%, \qquad \mathrm{KER} = \frac{m_{PK}}{m_{TBS}} \times 100\% $$

Kesenjangan yield didekomposisi per stasiun (*oil loss decomposition*), instrumen utama DMAIC fase *Analyze*:

$$ \mathrm{OER}_{pot} - \mathrm{OER}_{akt} = \ell_{\text{unstripped}} + \ell_{\text{loose fruit}} + \ell_{EFB} + \ell_{\text{fiber}} + \ell_{\text{clarifier/sediment}} + \ell_{\text{press}} $$

dengan nilai tipikal pemantauan: minyak dalam EFB ±1,5–3%, minyak dalam serat ±5–7%, *sediment/oil loss* klarifikasi ±0,5–1,5%. Setiap komponen $\ell$ menjadi proyek perbaikan tersendiri dengan *owner* dan target numerik.

### 2.2. Kinetika FFA sebagai Dasar *Due Date* Pengolahan TBS

Asam lemak bebas naik karena hidrolisis trigliserida oleh lipase setelah buah rusak (braktol lepas, tandan jatuh). Aproksimasi orde-I terhadap waktu tunggu $t$ (jam) pada suhu ambient:

$$ \mathrm{FFA}(t) \approx \mathrm{FFA}_0\, e^{k\,t}, \qquad k = k_0\, e^{-E_a/RT}\cdot f(\text{kematangan, derajat kerusakan}) $$

Spesifikasi perdagangan umum mensyaratkan FFA CPO (sebagai asam palmitat) maksimum ±5%. Maka **batas waktu pengolahan** batch TBS ber-FFA awal $f_0$ adalah:

$$ t^{*} = \frac{1}{k}\ln\!\left(\frac{\mathrm{FFA}_{max}}{f_0}\right) $$

Nilai $t^{*}$ inilah yang menjadi *due date* dalam penjadwalan sterilisasi — TBS berkualitas rendah diproses lebih dahulu (analog *Earliest Due Date*), sekaligus meminimalkan degradasi.

### 2.3. Penjadwalan Batch Sterilisator (Knapsack 0–1 per Siklus)

Sterilizer horizontal berisi beberapa *cage*. Setiap batch/cage $b$ memiliki bobot TBS $w_b$, estimasi yield minyak $o_b(w_b, \text{maturitas}, t_{\text{tunggu}})$, dan deadline $d_b = t_b^{*}$. Seleksi cage per siklus kapasitas $C$:

$$ \max \sum_{b} o_b\, x_b - \lambda \sum_b T_b, \qquad \text{s.t. } \sum_b w_b x_b \leq C,\quad x_b \in \{0,1\} $$

dengan $T_b = \max(0, C_{\text{finis}} - d_b)$ keterlambatan (penalti FFA) berbobot $\lambda$. Untuk horizon multi-periode, model diperluas menjadi **LP agregat** mingguan:

$$ \max \sum_{t} \left[ p^{CPO} y_t + p^{PK} z_t - c^{panen} x_t - c^{inv} I_t - c^{overtime} o_t \right] $$

$$ \text{s.t. } I_t = I_{t-1} + x_t - y_t \cdot \eta;\quad y_t \leq \kappa\, h_t;\quad x_t \leq a_t \;(\text{ketersediaan TBS kebun}) $$

### 2.4. Antrian Loading Ramp & Kapasitas Timbangan

Truk TBS datang Poisson $\lambda$; tiap bay pemuatan layanan eksponensial $\mu$ dengan $c$ bay. Utilisasi $\rho = \lambda/(c\mu)$; waktu tunggu sistem $W_q$ dari model M/M/c:

$$ W_q = \frac{P_0}{(c\mu - \lambda)}\,, \quad P_0 = \left[\sum_{n=0}^{c-1}\frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^c}{c!\,(1-\rho)}\right]^{-1} $$

Karena waktu tunggu menambah FFA (Subbab 2.2), keputusan penambahan bay/ramp dioptimasi dengan trade-off biaya bay vs penalti degradasi minyak — bentuk klasik optimalisasi level-of-service agroindustri.

---

## 3. Metodologi Implementasi: DMAIC, SPC, & TPM di Lantai Pabrik

1. **Define.** Proyek dipilih dari dekomposisi *oil loss* (Subbab 2.1): stasiun dengan $\ell$ terbesar menjadi prioritas (misal *unstripped bunches* di threshing atau minyak dalam serat). Charter memuat baseline OER, target (misal +1,2 poin), dan dampak finansial.
2. **Measure.** Kalibrasi timbangan (weighbridge & flowmeter), *time study* siklus sterilisasi (pre-vacuum, injeksi uap, sweating, blowing), sampling standar *oil in fiber/EFB/sediment* per shift, dan pencatatan FFA per lot TBS berdasarkan usia panen.
3. **Analyze.** Uji hipotesis multivariabel: kematangan tandan, jarak kebun, waktu tunggu, tekanan-uap sterilisasi terhadap OER; regresi/DOE untuk memetakan setting optimal sterilisasi (suhu–waktu) terhadap *looseness* buah vs FFA; Pareto losses.
4. **Improve.** Terapkan penjadwalan knapsack/LP (Subbab 2.3), *dispatching rule* EDR untuk cage, recovery *loose fruit* di kebun (standar panen), tuning screw press (clearance, RPM), dan kontrol otomatis suhu-tangki klarifikasi. Perbaikan keandalan screw press & boiler lewat TPM: *six big losses*, AM/Jishu Hozen operator, plan maintenance berbasis Weibull.
5. **Control.** **SPC** Montgomery: peta $\bar{x}$-$R$ untuk M&I CPO dan FFA per tanki, peta $p$ untuk *unstripped fraction*, aturan out-of-control action plan (OCAP) per operator; visual management papan OEE-yield harian per stasiun; audit kebun atas standar panen (cut ripe, *loose fruit collection circle*).

---

## 4. Studi Kasus Industri: Peningkatan OER PKS 60 Ton/Jam (Komposit Ilustratif)

Sebuah PKS di Kalimantan Tengah (kapasitas terpasang 60 t/jam, suplai dari 12 kebun inti-plasma radius ≤ 80 km) menghadapi penurunan OER dari 22,1% ke 20,8% selama puncak panen. Diagnosis neraca massa menunjukkan: *oil in EFB* 3,1%, *unstripped bunches* 4,2% buah, waktu tunggu truk rata-rata 5,8 jam (FFA naik signifikan), dan downtime screw press 9%/bulan. Intervensi yang dieksekusi tim IE: (a) model penjadwalan sterilizer knapsack 0–1 dengan deadline FFA (Subbab 2.3) menurunkan rata-rata umur TBS saat sterilisasi dari 11,4 → 6,2 jam; (b) penambahan 1 bay loading ramp berbasis analisis M/M/c ($\rho$ turun 0,93 → 0,78; $W_q$ turun 71%) disertai *staging area* terkompresi; (c) DOE sterilisasi menemukan profil uap optimum 3 barg/95 menit untuk tandan matang tua; (d) SPC penuh di klarifikasi dengan OCAP. Hasil 6 bulan: **OER pulih ke 22,4% (+1,6 poin)**, oil in EFB turun ke 1,9%, downtime press 9% → 3,5%, dan tambahan CPO setara Rp miliaran per tahun — dengan investasi modal minimal karena didominasi perbaikan metode, penjadwalan, dan disiplin statistik, bukan pembangunan ulang pabrik.

---

## 5. Keberlanjutan, Digitalisasi, & Peta KPI PKS Modern

**Dimensi lingkungan** menjadi bagian tak terpisahkan optimasi PKS: POME dengan COD puluhan ribu mg/L dikelola melalui kolam anaerob-aerob atau **penangkapan biogas** (methane avoidance — persyaratan penting RSPO); EFB dikomposkan/dikembalikan ke kebun; serat dan cangkang menjadi bahan bakar boiler (energi pabrik hampir swasembada, boiler efisiensi diaudit berkala). Sertifikasi **ISPO** (Perpres 44/2020) dan **RSPO P&C** menuntut traceability TBS per plot kebun (FFB traceability hingga level petani), yang mendorong digitalisasi: timbangan otomatis terintegrasi ERP, *grading* TBS berbasis citra/NIR, sensor suhu-tekanan sterilizer terecord otomatis (MES level-2/ISA-95), hingga dashboard OEE-yield real-time per stasiun.

| KPI | Definisi | Benchmark Tipikal |
|---|---|---|
| OER | % minyak terhadap TBS (netto M&I) | 21–23% |
| KER | % kernel terhadap TBS | 4–6% |
| FFA CPO | % asam lemak bebas | ≤ 5% (spesifikasi) |
| Oil in Fiber / EFB / Sediment | Kehilangan per stasiun | ≤ 6% / ≤ 2% / ≤ 1% |
| Unstripped Bunches | % buah tak lepas | ≤ 1,5% |
| Boiler Efficiency | Efisiensi termal | ≥ 70–75% |
| Press Availability | (MTBF-oriented) | ≥ 96% |

Roadmap adopsi tiga fase: **(1) Stabilisasi** — metrologi, SPC, standar operasi; **(2) Optimalisasi** — penjadwalan matematis, TPM, recovery losses; **(3) Digital & Berkelanjutan** — MES/IoT, biogas, sertifikasi berkelanjutan penuh. Pendekatan bertahap ini memastikan setiap rupiah investasi terikat pada pengurangan kehilangan terukur, bukan sekadar modernisasi perangkat.

---

## 6. Referensi Akademik & Standar Terverifikasi

1. Corley, R. H. V., & Tinker, P. B. (2016). *The Oil Palm (5th ed.)*. Wiley-Blackwell.
2. Basiron, Y. (2007). Palm oil production through sustainable plantations. *European Journal of Lipid Science and Technology*, 109(4), 289–295.
3. Presiden Republik Indonesia. (2020). *Peraturan Presiden Nomor 44 Tahun 2020 tentang Penyelenggaraan Sertifikasi Sawit Indonesia Berkelanjutan (ISPO)*.
4. Roundtable on Sustainable Palm Oil. (2018). *RSPO Principles and Criteria for Sustainable Palm Oil Production*. RSPO Secretariat.
5. Montgomery, D. C. (2020). *Introduction to Statistical Quality Control (8th ed.)*. John Wiley & Sons.
6. Hillier, F. S., & Lieberman, G. J. (2021). *Introduction to Operations Research (11th ed.)*. McGraw-Hill Education.
