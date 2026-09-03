# 2782 — Kebijakan Pemeliharaan Hierarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability* (versi pendahulu). DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *capital-intensive* paling kompleks di dunia, di mana satu unit pesawat narrow-body seperti Airbus A320 atau Boeing 737 memiliki nilai aset antara USD 50–110 juta dan siklus operasional harian rata-rata 8–14 jam terbang per pesawat. Dalam kerangka operasional maskapai, biaya *direct operating cost* (DOC) per jam terbang dapat mencapai USD 8.000–15.000, sehingga setiap jam *ground time* akibat pemeliharaan memiliki implikasi ekonomi langsung terhadap profitabilitas (Zhou, 2024, DOI: 10.2139/ssrn.6387479). Oleh sebab itu, keputusan penjadwalan inspeksi dan overhaul bukan sekadar persoalan teknikal, melainkan keputusan strategis yang menyangkut *trade-off* antara *safety*, *availability*, dan *life-cycle cost*.

Sektor *Maintenance, Repair, and Overhaul* (MRO) penerbangan menjalankan kebijakan pemeliharaan hierarkis berbasis huruf yang telah distandarisasi secara universal: **A-check**, **B-check**, **C-check**, dan **D-check**. A-check adalah inspeksi ringan berkala setiap 400–600 flight hours (FH) dengan downtime 24–50 jam. B-check dilakukan setiap 6–8 bulan dengan downtime 160–250 jam. C-check adalah inspeksi besar setiap 20–24 bulan dengan downtime 2.000–3.000 jam. D-check adalah *full refurbishment* (teardown overhaul) yang dilakukan setiap 6–12 tahun dengan downtime 30.000–50.000 jam (Zhou, 2024). Selama "mature-run phase" antara dua D-check, pesawat menjalani puluhan siklus C-check yang melibatkan inspeksi struktural mendalam, penggantian *LRU* (Line Replaceable Unit), dan kalibrasi avionik.

Urgensi riset ini muncul dari kenyataan bahwa model **Reliability-Centred Maintenance (RCM)** konvensional, yang diperkenalkan Moubray (1997), masih menghadapi keterbatasan dalam menangani **non-linear degradation** pada sistem multi-kompleks seperti armada pesawat. Zhou (2024, DOI: 10.2139/ssrn.6387479) menekankan bahwa degradasi *life-cycle performance* tidak bersifat linier—ia mengikuti kurva *bathtub* dengan fase *infant mortality*, fase *useful life*, dan fase *wear-out*—sehingga kebijakan pemeliharaan periodik dengan interval tetap menjadi suboptimal. Lebih lanjut, paper ini memperkenalkan kerangka MRO yang mengintegrasikan siklus D-check penuh dengan *partial refurbishment* selama mature-run, dengan tujuan memaksimalkan *available operation time* (AOT) sambil mempertahankan tingkat keselamatan yang dapat diterima regulator (EASA Part-145, FAA Part-121). Implikasi ekonominya sangat besar: peningkatan availabilitas armada sebesar 1% pada maskapai dengan 100 pesawat dapat menghemat opportunity cost lebih dari USD 50 juta per tahun (Zhou, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Degradasi Non-Linier

Paper Zhou (2024) memodelkan laju degradasi komponen pesawat $D(t)$ menggunakan fungsi *non-linear* berikut:

$$D(t) = D_0 + \int_0^t \left[ \alpha \cdot e^{\beta \tau} + \gamma \cdot \sin(\omega \tau + \phi) \right] d\tau$$

di mana $D_0$ adalah degradasi awal, $\alpha$ adalah koefisien degradasi eksponensial (fase wear-out), $\beta$ adalah laju akselerasi kerusakan, dan $\gamma \sin(\omega \tau + \phi)$ menangkap fluktuasi musiman/operasional. Solusi integralnya adalah:

$$D(t) = D_0 + \frac{\alpha}{\beta}\left(e^{\beta t} - 1\right) - \frac{\gamma}{\omega}\left[\cos(\omega t + \phi) - \cos(\phi)\right]$$

### 2.2. Fungsi Availability Hierarkis

Availability sesaat $A(t)$ didefinisikan sebagai rasio *mean uptime* terhadap total siklus:

$$A = \frac{T_{up}}{T_{up} + T_{down}} = \frac{1}{1 + \lambda \cdot \bar{t}_r}$$

di mana $\lambda$ adalah laju kegagalan (*failure rate*) dan $\bar{t}_r$ adalah *mean repair time*. Untuk sistem hierarkis dengan empat tingkat inspeksi, *steady-state availability* $A_{ss}$ Zhou (2024, DOI: 10.2139/ssrn.5291672) memformulasikan:

$$A_{ss}(T_A, T_B, T_C, T_D) = \frac{\sum_{i \in \{A,B,C,D\}} w_i \cdot \mu_i(T_i)}{\sum_{i \in \{A,B,C,D\}} w_i \cdot \mu_i(T_i) + \sum_{i \in \{A,B,C,D\}} d_i(T_i)}$$

dengan $\mu_i(T_i)$ adalah *mean time between preventive maintenance* tingkat-$i$ pada interval $T_i$, $d_i(T_i)$ adalah *mean downtime* tingkat-$i$, dan $w_i$ adalah bobot kontribusi struktural tingkat-$i$ terhadap total biaya siklus hidup, dengan $\sum w_i = 1$.

### 2.3. Optimasi Maksimasi Available Operation Time

Tujuan utama paper adalah memaksimumkan **Available Operation Time (AOT)** selama horizon perencanaan $H$ (umumnya satu siklus D-check penuh, misal $H = 12$ tahun):

$$\max_{T_A, T_B, T_C, T_D} \quad \text{AOT} = \int_0^H \mathbf{1}_{\{\text{operational}\}}(t)\, dt$$

subject to:
- **Kendala keselamatan:** $\Pr\{\text{failure during cycle}\} \leq \epsilon_{\max}$ (umumnya $\epsilon_{\max} = 10^{-9}$ per flight hour untuk *catastrophic failure*)
- **Kendala struktural:** $T_A < T_B < T_C < T_D \leq H$
- **Kendala regulasi:** $T_i \geq T_{i,\min}$ sesuai EASA/FAA mandate
- **Kendala biaya:** $\sum_{i} c_i(T_i) \leq C_{\text{budget}}$

Zhou (2024) membuktikan secara analitis bahwa fungsi AOT adalah *quasi-concave* pada domain kendala sehingga **nilai optimal tunggal** $(T_A^*, T_B^*, T_C^*, T_D^*)$ dijamin ada melalui Teorema Weierstrass dan kondisi Kuhn-Tucker:

$$\frac{\partial \text{AOT}}{\partial T_i} = 0, \quad \forall i \in \{A,B,C,D\}$$

$$\text{dengan} \quad \lambda_j \cdot \left( T_j - T_{j,\min} \right) = 0, \quad \lambda_j \geq 0$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hierarkis berbasis RCM mengikuti alur metodologis ter