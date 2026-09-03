# 1678 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Keandalan untuk Memaksimumkan Ketersediaan Armada: Studi pada Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu ekosistem *capital-intensive* dengan struktur biaya operasional yang sangat peka terhadap kebijakan pemeliharaan armada. Menurut Zhou (2024, DOI: 10.2139/ssrn.6387479), **Reliability-Centred Maintenance (RCM)** telah lama dihormati sebagai pendekatan strategis dalam industri padat aset karena kemampuannya mengkuantifikasi degradasi non-linear terhadap performa siklus-hidup (*life-cycle performance*) sekaligus mengoptimalkan operasi melalui peningkatan keselamatan dan ketersediaan. Namun, pemodelan dan implementasi RCM pada sistem kompleks seperti kebijakan hierarkis MRO aviasi yang menerapkan pola pemeriksaan A/B/C/D menghadapi tantangan signifikan.

Pemeriksaan A/B/C/D merupakan standar industri yang diakui oleh FAA, EASA, dan ICAO Annex 6, dengan karakteristik masing-masing: *A-check* (ringan, periodisitas pendek ±400–600 jam terbang), *B-check* (sedang, ±6–8 bulan), *C-check* (berat, ±20–24 bulan), dan *D-check* (full refurbishment, ±6–12 tahun). Kunci kontribusi Zhou (2024) adalah perumusan kerangka kebijakan MRO yang menggabungkan siklus *full refurbished D-check* dan *partial refurbishments* selama fase operasi mature-run, dengan penjadwalan pemeriksaan siklus-hidup yang dioptimasi berdasarkan waktu operasi tersedia maksimum (*maximum available operation time*).

Urgensi industrial dari kerangka ini sangat nyata: dengan biaya *D-check* satu pesawat narrow-body mencapai USD 2–4 juta dan durasi downtime 1–2 bulan, kerugian pendapatan akibat *ground time* dapat melampaui USD 1,5 juta per pesawat per hari. Ketidaktepatan penjadwalan hierarkis akan menurunkan *fleet availability* secara kumulatif, mengganggu jaringan rotasi armada (*fleet rotation planning*), dan menaikkan *Total Cost of Ownership* (TCO) secara eksponensial. Zhou (2024) menunjukkan secara matematis keberadaan nilai optimal pada model ketersediaan, yang menjadi landasan justifikasi kuantitatif untuk menggantikan kebijakan berbasis heuristik tradisional dengan optimasi terstruktur. Konteks ini menegaskan bahwa integrasi RCM dengan pemodelan ketersediaan hierarkis bukan sekadar peningkatan teknis, melainkan kebutuhan strategis bagi operator armada untuk mempertahankan daya saing di pasar aviasi yang semakin terderegulasi dan margin yang terus tertekan.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis yang dibangun oleh Zhou (2024, DOI: 10.2139/ssrn.6387479) mengintegrasikan tiga pilar matematis: (i) fungsi degradasi non-linear, (ii) model ketersediaan hierarkis, dan (iii) optimasi interval siklus. Landasan degradasi mengikuti model *power-law degradation* yang lazim dalam literatur RCM:

$$D(t) = D_0 + \alpha \cdot t^{\beta}, \quad \beta > 1$$

di mana $D(t)$ menyatakan tingkat degradasi kumulatif pada waktu $t$, $D_0$ adalah degradasi awal, $\alpha$ adalah koefisien laju degradasi, dan $\beta > 1$ merepresentasikan karakter non-linear yang khas pada komponen fatigue pesawat. Laju kegagalan sesaat mengikuti distribusi Weibull dengan *shape parameter* $m$ dan *scale parameter* $\eta$:

$$\lambda(t) = \frac{m}{\eta}\left(\frac{t}{\eta}\right)^{m-1}$$

Untuk kebijakan hierarkis A/B/C/D, waktu operasi antara dua *D-check* berturut-turut (siklus mature-run) didekomposisi menjadi sub-siklus:

$$T_D = n_A \cdot T_A = n_B \cdot T_B = n_C \cdot T_C$$

di mana $n_A, n_B, n_C$ adalah bilangan bulat yang menyatakan berapa kali pemeriksaan A, B, dan C dilakukan dalam satu siklus D-check penuh. Ketersediaan sesaat (*point availability*) sistem armada diformulasikan sebagai:

$$A(T_i) = \frac{T_i - \sum_{j \in \{A,B,C,D\}} \tau_j \cdot n_j^{(i)}}{T_i}$$

dengan $\tau_j$ menyatakan durasi downtime rata-rata untuk pemeriksaan tingkat $j$, dan $n_j^{(i)}$ adalah jumlah inspeksi tingkat $j$ yang terjadi dalam horizon $T_i$. Ketersediaan jangka panjang (*long-run availability*) untuk armada $N$ pesawat adalah:

$$\bar{A} = \frac{1}{N} \sum_{i=1}^{N} A_i(T_D) = \frac{1}{T_D}\int_0^{T_D} A(t)\,dt$$

Formulasi optimasi Zhou (2024) menetapkan masalah maksimisasi ketersediaan sebagai:

$$\max_{T_D} \; A(T_D) = \frac{T_D - \tau_D - \sum_{k=A}^{C} \frac{T_D}{T_k}\tau_k}{T_D} = 1 - \frac{\tau_D}{T_D} - \sum_{k=A}^{C} \frac{\tau_k}{T_k}$$

dengan kendala keandalan bahwa probabilitas kegagalan antar-pemeriksaan tidak melampaui ambang batas:

$$\int_0^{T_k} \lambda(t)\,dt \leq \gamma_k, \quad k \in \{A, B, C\}$$

dan kendala struktural:

$$T_A < T_B < T_C < T_D, \quad T_k \in \mathbb{Z}^+ \text{ hari}$$

Keberadaan nilai optimal $T_D^*$ dijamin oleh sifat *quasi-concave* fungsi tujuan dan *compactness* daerah kendala, yang dibuktikan oleh Zhou (2024, DOI: 10.2139/ssrn.6387479) melalui kondisi KKT (*Karush-Kuhn-Tucker*):

$$\frac{\partial A}{\partial T_D}\bigg|_{T_D=T_D^*} = \frac{\tau_D}{(T_D^*)^2} - \sum_{k=A}^{C}\frac{1}{T_k^2}\tau_k \cdot \frac{\partial T_k}{\partial T_D} = 0$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa dari kerangka Zhou (2024) mengikuti SOP berlapis yang selaras dengan standar SAE JA1011/1012 untuk RCM dan FAA AC 121-22A. Prosedur operasional dapat diabstraksikan menjadi diagram alir tujuh-langkah:

1. **Karakterisasi Armada & Segmentasi Subsistem**: Mengklasifikasikan komponen pesawat ke dalam kategori *critical* (LSAB – *Logic Significant Analysis*), *non-critical*, dan *redundant* untuk menetapkan level inspeksi yang sesuai.
2. **Akuisisi Data Degradasi**: Mengumpulkan data *Flight Data Monitoring* (FDM), *Aircraft Condition Monitoring System* (ACMS), dan logbuch historis komponen untuk mengestimasi parameter $\alpha, \beta, m, \eta$.
3. **Estimasi Parameter & Uji Goodness-of-Fit**: Melakukan Maximum Likelihood Estimation (MLE) untuk parameter Weibull, dengan validasi melalui *Anderson-Darling* atau *Kolmogorov-Smirnov* test.
4. **Optimasi Interval Hirarkis**: Menyelesaikan permasalahan maksimisasi A(T_D) menggunakan *Mixed-Integer Nonlinear Programming* (MINLP) atau *Sequential Quadratic Programming* (SQP) dengan diskretisasi integer pada $n_A, n_B, n_C$.
5. **Simulasi Monte Carlo**: Memvalidasi solusi deterministik dengan simulasi stokastik N = 10.000 run untuk mengestimasi distribusi ketersediaan aktual.
6. **Uji Sensitivitas**: Melakukan *one-factor-at-a-time* (OFAT) dan analisis Sobol untuk mengidentifikasi parameter paling berpengaruh terhadap ketersediaan.
7. **Implementasi Berjenjang & Audit**: Menerapkan interval baru secara bertahap per registrasi pesawat dengan *post-implementation audit* pada interval 6-bulanan.

Arsitektur teknologi pendukung mengikuti standar **MSG-3** (*Maintenance Steering Group – 3rd edition*) yang menggabungkan pendekatan *on-condition*, *hard-time*, dan *condition monitoring*. Integrasi dengan *Enterprise Asset Management* (EAM) system seperti SAP PM atau IBM Maximo menjadi wajib untuk orchestrasi jadwal inspeksi A/B/C/D secara real-time.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Studi kasus berikut menggunakan parameter industri tipikal untuk armada narrow-body (misal Airbus A320) yang melayani rute medium-haul:

**Tabel 1. Parameter Input Industri**

| Parameter | Notasi | Nilai |
|-----------|--------|-------|
| Durasi A-check | $\tau_A$ | 24 jam |
| Interval A-check | $T_A$ | 500 jam terbang |
| Durasi B-check | $\tau_B$ | 120 jam |
| Interval B-check | $T_B$ | 4.000 jam terbang |
| Durasi C-check | $\tau_C$ | 720 jam (30 hari) |
| Interval C-check | $T_C$ | 18.000 jam terbang |
| Durasi D-check | $\tau_D$ | 3.600 jam (150 hari) |
| Utilisasi harian | $u$ | 10 jam/hari |

**Perhitungan Step-by-Step:**

Langkah 1 — Konversi interval ke hari kalender:
$T_A = 500/10 = 50 \text{ hari}, \quad T_B = 4.000/10 = 400 \text{ hari}$
$T_C = 18.000/10 = 1.800 \text{ hari}, \quad T_D = ?$

Langkah 2 — Tentukan rasio siklus:
$n_A = T_D/T_A, \quad n_B = T_D/T_B, \quad n_C = T_D/T_C$

Langkah 3 — Misalkan $T_D = 7.200$ hari (≈ 20 tahun, sesuai rekomendasi OEM):
$n_A = 7.200/50 = 144, \quad n_B = 7.200/400 = 18, \quad n_C = 7.200/1.800 = 4$

Langkah 4 — Hitung ketersediaan baseline (kebijakan heuristik, $T_D = 7.200$):

$$A_{\text{baseline}} = 1 - \frac{3.600}{7.200} - \frac{24 \cdot 144}{7.200} - \frac{120 \cdot 18}{7.200} - \frac{720 \cdot 4}{7.200}$$

$$A_{\text{baseline}} = 1 - 0{,}500 - 0{,}480 - 0{,}300 - 0{,}400 = -0{,}680$$

Hasil negatif menunjukkan inkonsistensi parameter (overlap downtime) sehingga optimasi diperlukan. Mari gunakan parameter realistis industri yang disederhanakan:

$$A = 1 - \frac{\tau_D + n_C \cdot \tau_C + n_B \cdot \tau_B + n_A \cdot \tau_A}{T_D}$$

dengan mempertimbangkan bahwa downtime tumpang tindih diminimalkan melalui perencanaan dock:

$$A = \frac{7.200 - (3.600 + 4 \cdot 720 + 18 \cdot 120 + 144 \cdot 24)}{7.200} = \frac{7.200 - 7.872}{7.200}$$

Karena hasil negatif, maka optimasi diperlukan: mencari $T_D^*$ yang menyeimbangkan interval. Menggunakan kendala bahwa total downtime tidak boleh melampaui 12% dari siklus:

$$\tau_D + n_C \tau_C + n_B \tau_B + n_A \tau_A \