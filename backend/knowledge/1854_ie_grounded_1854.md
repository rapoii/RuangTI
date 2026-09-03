# 1854 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Maksimalisasi Ketersediaan Armada pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu sistem aset-padat (*asset-intensive*) paling kompleks di dunia, dengan investasi modal sebuah pesawat窄-body modern mencapai USD 50–120 juta per unit (Boeing Commercial Market Outlook, 2023). Karakteristik intrinsik sistem ini adalah degradasi performa siklus-hidup yang bersifat **non-linear** — yaitu laju kerusakan komponen rotor, struktur sel, dan avionik tidak proporsional terhadap usia kalender, melainkan merupakan fungsi pangkat dari akumulasi siklus beban (flight cycles), paparan termal, dan vibrasi mekanis. Zhou (2024) dalam studinya tentang *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability* menegaskan bahwa tanpa pendekatan pemeliharaan yang ketat secara matematis, ketersediaan armada (*fleet availability*) akan menurun secara drastis, dengan dampak ekonomi langsung berupa *lost revenue* harian sebesar USD 100.000–250.000 per pesawat窄-body yang grounded (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Sektor *Maintenance, Repair, and Overhaul* (MRO) aviasi secara historis mengadopsi kebijakan pemeliharaan **hirarkis A/B/C/D** yang awalnya diformalisasi oleh Nowlan dan Heap (1978) melalui laporan US Department of Defense *Reliability-Centered Maintenance*. Checks tersebut berjenjang dari **A-Check** (ringan, 400–600 flight-hours, ~24 jam kerja), **B-Check** (menengah, 6–12 bulan, ~3 hari), **C-Check** (libat, 20–24 bulan, ~10 hari), hingga **D-Check** yang merupakan overhaul total (*heavy maintenance visit*) dengan durasi 1–3 bulan dan periode 6–12 tahun. Zhou (2024) menekankan bahwa kompleksitas struktural kebijakan ini terletak pada fakta bahwa keputusan penjadwalan pada satu tingkatan akan mempengaruhi distribusi downtime di seluruh hierarki, sehingga diperlukan model optimasi yang memperlakukan keempat jenis check secara simultan, bukan independen (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Urgensi ekonominya semakin kuat pasca-pandemi COVID-19: pasar MRO global diproyeksikan mencapai USD 116,6 miliar pada 2032 dengan CAGR 5,1% (Allied Market Research, 2024). Dengan utilisasi armada yang dipaksa tinggi untuk memenuhi permintaan rebound,航空公司 membutuhkan Availability melebihi 95% agar armada窄-body-nya memenuhi jadwal maskapai secara langsung tanpa *schedule disruption*. Zhou (2024) mengidentifikasi bahwa *mature-run operations* — yaitu fase setelah commissioning awal di mana sistem telah melewati *infant mortality* — merupakan kontributor terbesar ketersediaan kumulatif armada, sehingga framework-nya menitikberatkan pada partial refurbishment di dalam mature-run tersebut, bukan hanya pada D-Check penuh (DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

---

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024) membangun model ketersediaan dengan empat variabel keputusan utama: interval A-Check ($T_A$), B-Check ($T_B$), C-Check ($T_C$), dan D-Check ($T_D$), yang masing-masing memiliki durasi downtime deterministik $d_A, d_B, d_C, d_D$. Untuk satu siklus D penuh dengan horizon $T_D$, jumlah check sub-ordinat diekspresikan sebagai:

$$N_A = \frac{T_D}{T_A}, \quad N_B = \frac{T_D}{T_B}, \quad N_C = \frac{T_D}{T_C}$$

**Formulasi Ketersediaan Steady-State Hirarkis:**

Ketersediaan jangka panjang (*long-run steady-state availability*) dari kebijakan hirarkis didefinisikan sebagai:

$$A_{ss}(T_A, T_B, T_C, T_D) = \frac{T_D - \sum_{i \in \{A,B,C,D\}} N_i \cdot d_i}{T_D}$$

Substitusi menghasilkan:

$$A_{ss} = 1 - \left( \frac{d_A}{T_A} + \frac{d_B}{T_B} + \frac{d_C}{T_C} + \frac{d_D}{T_D} \right)$$

Zhou (2024) menunjukkan bahwa setiap interval check mempengaruhi $A_{ss}$ secara monotonik turun seiring bertambahnya interval check — namun trade-off muncul karena interval yang lebih panjang berarti lebih sedikit check per siklus, sehingga total downtime berkurang (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

**Model Degradasi Non-Linear dan Keandalan:**

Untuk menangkap degradasi non-linear, Zhou menggunakan power-law degradation model dengan laju degradasi $r(t) = \alpha t^{\beta-1}$, di mana $\beta > 1$ untuk karakter *accelerating failure*. Fungsi keandalan komponen menjadi:

$$R(t) = \exp\left( -\int_0^t r(u) \, du \right) = \exp\left( -\frac{\alpha t^{\beta}}{\beta} \right)$$

**Formulasi Partial Refurbishment di Fase Mature-Run:**

Inovasi utama paper ini adalah pengenalan *partial refurbishment factor* $q \in [0,1]$ yang memodelkan tingkat pemulihan kondisi sistem pasca-intervensi. Setelah refurbishment pada usia efektif $t_{eff}$, usia aktual sistem menjadi:

$$t_{new} = (1 - q) \cdot t_{old} + q \cdot 0$$

Untuk $q = 1$ kita peroleh *as-good-as-new* (renewal sempurna, tipikal D-Check penuh), sedangkan $q = 0$ adalah *as-bad-as-old* (minimal repair). Untuk partial refurbishment saat mature-run, Zhou mengkalibrasi $q \approx 0.65 - 0.80$ berdasarkan data empiris MRO aviasi (DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

**Optimasi Ketersediaan dengan Kendala:**

Masalah optimasi kemudian menjadi:

$$\max_{T_A, T_B, T_C, T_D, q} \quad A_{ss}$$
$$\text{subject to:} \quad T_A < T_B < T_C < T_D$$
$$T_i \in [T_i^{min}, T_i^{max}] \quad \forall i$$
$$A_{ss} \geq A_{target}$$
$$q \in [0,1]$$

Zhou (2024) membuktikan secara analitis **eksistensi nilai optimal** untuk $A_{ss}$ dengan menggunakan teorema nilai ekstrem pada himpunan kompak yang dibatasi kendala, sehingga konfigurasi $(T_A^*, T_B^*, T_C^*, T_D^*, q^*)$ selalu ada dan bersifat *globally optimal* di dalam domain pencarian (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework Zhou (2024) mengikuti SOP 7-tahap yang menyelaraskan analisis RCM dengan standar **SAE JA1011/SAE JA1012** (Evaluation & Implementation Process untuk RCM):

**Tahap 1 — Karakterisasi Sistem dan Batasan Operasi:** Definisikan Mission Profile pesawat (flight hours/year, rata-rata flight cycle length, rute dominan), regulasi regulatori (FAA Part 121, EASA Part-M), dan *threshold of dispatch* untuk setiap *line replaceable unit* (LRU).

**Tahap 2 — Analisis Fungsi dan Failure Modes:** Gunakan *Failure Modes, Effects, and Criticality Analysis* (FMECA) untuk menentukan konsekuensi kegagalan (safety, operational, economic, hidden) pada level sub-sistem.

**Tahap 3 — Pemodelan Degradasi dan Estimasi Parameter:** Estimasi parameter $\alpha, \beta