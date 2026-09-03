# 2446 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Perawatan, Perbaikan, dan *Overhaul* (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri *Maintenance, Repair, and Overhaul* (MRO) penerbangan global bernilai lebih dari USD 96 miliar pada 2023 dan diproyeksikan mencapai USD 127 miliar pada 2029 (capaian pasar pasca-pandemi yang didorong oleh peningkatan utilisasi armada *narrow-body*). Pada ekosistem ini, keandalan (*reliability*) bukan sekadar metrik operasional, melainkan pilar keselamatan publik, regulatori, dan profitabilitas operator. Pesawat komersial modern menjalani rejimen inspeksi terstruktur yang dikode-kan sebagai **A-Check, B-Check, C-Check, dan D-Check** — sebuah piramida hierarkis di mana *interval* dan cakupan pekerjaan *deep maintenance* meningkat secara eksponensial dari level terendah ke tertinggi. A-Check dilakukan setiap 400–600 *flight hours* (FH) dengan downtime ±24 jam; B-Check setiap 8–12 bulan; C-Check setiap 20–24 bulan dengan man-hours 3.000–6.000; sementara D-Check — sering disebut *heavy maintenance visit* — merupakan *full refurbishment* yang men-*reset* siklus hidup pesawat, berlangsung 1–2 bulan dengan man-hours melebihi 15.000 (Boeing, *Maintenance Planning Document*; Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Urgensi ekonominya sangat konkret: sebuah *narrow-body* Airbus A320 yang tidak terbang selama satu hari menimbulkan *revenue loss* mendekati USD 50.000 pada rute padat, sementara biaya *grounding* berkepanjangan akibat *unscheduled removal* komponen kritis bisa melonjak hingga ratusan ribu dolar ditambah *penalty* kontrak leasing. Oleh karena itu, *availability* — rasio waktu armada siap operasi terhadap total waktu kalender — menjadi fungsi objektif utama dalam perencanaan pemeliharaan.

Zhou (2024, [DOI 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) secara eksplisit menyoroti bahwa meskipun *Reliability-Centred Maintenance* (RCM) sejak Nowlan & Heap (1978) diakui sebagai kerangka superior untuk mengkuantifikasi degradasi non-linear performa siklus hidup, implementasi RCM pada sistem sekompleks kebijakan A/B/C/D MRO penerbangan masih menghadapi tantangan struktural. Pendekatan RCM konvensional cenderung menyederhanakan hierarki inspeksi menjadi dua atau tiga level, sehingga mengabaikan efek *inter-level scheduling* antara partial refurbishment (A/B/C) dan full refurbishment (D). Zhou menutup celah ini dengan mengajukan **MRO policy framework** yang mengintegrasikan D-Check penuh dengan partial refurbishment pada fase *mature-run* operasi, lalu membuktikan secara matematis bahwa terdapat **nilai optimal** jadwal pemeliharaan yang memaksimumkan ketersediaan. Pendekatan ini sangat relevan bagi operator yang menyeimbangkan tekanan *cash-flow* (menghindari D-Check terlalu dini) dengan tekanan keselamatan (menghindari degradasi terlampau jauh).

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis Zhou (2024) bertumpu pada tiga pilar: (i) fungsi keandalan dengan laju kegagalan non-stasioner, (ii) persamaan *renewal* untuk siklus hidup sistem yang diregenerasi, dan (iii) fungsi objektif ketersediaan armada jangka panjang.

### 2.1 Fungsi Keandalan Non-Linier

Berbeda dengan asumsi klasik distribusi eksponensial, degradasi komponen авиас (*airframe*, *landing gear*, *apu*) bersifat non-linear terhadap usia pakai dan paparan siklus termal-mekanis. Laju kegagalan sesaat dimodelkan sebagai:

$$\lambda(t) = \lambda_0 \cdot \left(1 + \beta \cdot \left(\frac{t}{T_{ref}}\right)^{\alpha}\right)$$

dengan $\lambda_0$ adalah laju kegagalan awal saat *commissioning*, $\beta$ parameter akselerasi degradasi, $\alpha$ parameter non-linearitas (umumnya $1 < \alpha < 3$ mengikuti pola *Weibull*), dan $T_{ref}$ waktu referensi kalibrasi. Fungsi keandalan kumulatif:

$$R(t) = \exp\left(-\int_0^t \lambda(\tau)\, d\tau\right) = \exp\left(-\lambda_0 t - \frac{\lambda_0 \beta}{\alpha + 1} \cdot \frac{t^{\alpha+1}}{T_{ref}^{\alpha}}\right)$$

### 2.2 Model Ketersediaan *Long-Run* (Renewal Reward)

Untuk sistem yang diregenerasi penuh setiap D-Check, *renewal reward theorem* memberikan ketersediaan asimtotik:

$$A_{\infty} = \frac{E[U]}{E[U] + E[D]}$$

dengan $E[U]$ adalah ekspektasi *uptime* dalam satu siklus D-Check, dan $E[D]$ ekspektasi total *downtime* kumulatif dari seluruh inspeksi A/B/C/D dalam siklus tersebut. Untuk hierarki A/B/C/D dengan interval $T_A, T_B, T_C, T_D$, Zhou (2024) merumuskan:

$$E[U] = T_D - \sum_{i \in \{A,B,C,D\}} n_i \cdot \bar{d}_i$$

dengan $n_i$ adalah jumlah inspeksi level $i$ per siklus D dan $\bar{d}_i$ rata-rata downtime per inspeksi. Secara eksplisit:

$$n_A = \frac{T_D}{T_A}, \quad n_B = \frac{T_D}{T_B}, \quad n_C = \frac{T_D}{T_C}, \quad n_D = 1$$

sehingga *downtime* total:

$$E[D] = \frac{T_D}{T_A} \bar{d}_A + \frac{T_D}{T_B} \bar{d}_B + \frac{T_D}{T_C} \bar{d}_C + \bar{d}_D$$

### 2.3 Formulasi Optimasi

Zhou (2024, [DOI 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan **eksistensi nilai optimal** untuk masalah berikut:

$$\max_{T_A, T_B, T_C, T_D} \; A_{\infty}(T_A, T_B, T_C, T_D)$$

*subject to*:

$$\begin{cases} T_A \le T_B \le T_C \le T_D \\ R(T_D) \ge R_{min} \\ C_{total}(T_A, T_B, T_C, T_D) \le C_{budget} \end{cases}$$

dengan $R_{min}$ batas keandalan minimum yang disyaratkan regulator (misalnya EASA Part-CAMO atau FAA Part-121), dan $C_{total}$ adalah fungsi biaya total siklus hidup. Bukti eksistensi dilakukan melalui teorema titik tetap *Brouwer* pada ruang kompak $[T_A^{min}, T_A^{max}] \times \cdots \times [T_D^{min}, T_D^{max}]$.

### 2.4 Penjadwalan Fase *Mature-Run*

Inovasi utama Zhou adalah membedakan fase *early-life* (T < $T_1$), fase *mature-run* ($T_1 \le T \le T_2$), dan fase *late-life* (T > $T_2$). Pada fase *mature-run*, partial refurbishment level A/B/C lebih efektif secara biaya dibanding D-Check penuh, sehingga rasio *cost-effectiveness* dimaksimumkan melalui:

$$\eta_{cost} = \frac{\Delta R}{\Delta C} = \frac{R(t+\Delta t) - R(t)}{C_{partial} - C_{skip}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi hierarki RCM mengikuti standar internasional **MSG-3** (*Maintenance Steering Group – 3rd Issue*) yang diadopsi FAA, EASA, dan CAAC. Prosedur operasional sistematis mengikuti alur berikut:

**Tahap 1 — Segmentation & FMEA Tingkat Sistem.** Pesawat di-dekomposisi menjadi ATAs (*Air Transport Association* chapters): struktur (ATA 53–57), *powerplant* (ATA 70), *landing gear* (ATA 32), avionik (ATA 22–34). Setiap subsistem menjalani *Failure Mode and Effects Analysis* dengan skor **Severity (S)**, **Occurrence (O)**, **Detectability (D)** menghasilkan nilai **RPN = S × O × D**.

**Tahap 2 — *Decision Logic Tree* MSG-3.** Untuk setiap *failure mode*, keputusan jenis tugas pemeliharaan (A/B/C/D) ditentukan oleh cabang keputusan: apakah *safety consequence*? Apakah *economic consequence*? Apakah *hidden failure*? Apakah *redundancy available*? Output: penugasan ke interval A-Check (≤600 FH), B-Check (8–12 bulan), C-Check (20–24 bulan), atau D-Check (6–12 tahun).

**Tahap 3 — Penyusunan *Maintenance Schedule Optimization* (MSO).** Menggunakan parameter degradasi $\lambda_0, \beta, \alpha$ dari data telemetri,求解 *interval* optimal $(T_A^*, T_B^*, T_C^*, T_D^*)$ melalui algoritma optimasi bertingkat (*hierarchical optimization*): optimasi $T_D$ di level atas (dengan horizon 8–12 tahun), kemudian $T_C