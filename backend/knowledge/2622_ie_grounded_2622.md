# 2622 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *capital-intensive* paling kompleks di dunia, dengan total nilai pasar MRO (Maintenance, Repair, and Overhaul) global yang melebihi USD 100 miliar per tahun menurut proyeksi industri terbaru. Dalam konteks ini, **Reliability-Centered Maintenance (RCM)** telah muncul sebagai paradigma dominan yang melampaui pendekatan *scheduled maintenance* konvensional, karena kemampuannya mengkuantifikasi degradasi performa *life-cycle* yang bersifat non-linear pada sistem pesawat terbang. Hang Zhou (2024) dalam paper seminalnya yang diterbitkan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menekankan bahwa meskipun RCM sangat dihargai di industri padat aset (*asset-heavy industries*) untuk meningkatkan keselamatan dan ketersediaan armada, implementasi pemodelannya menghadapi tantangan signifikan ketika diterapkan pada sistem kompleks seperti **hierarki kebijakan MRO A/B/C/D** yang berlaku universal di sektor aviasi.

Urgensi riset ini diperkuat oleh fakta bahwa downtime pesawat yang tidak terjadwal (*unscheduled downtime*) memiliki dampak ekonomi masif — satu pesawat narrow-body yang grounded selama 24 jam dapat menimbulkan kerugian pendapatan langsung sebesar USD 50.000–150.000 tergantung rute dan konfigurasi kelas, belum termasuk *reputational cost*, kompensasi penumpang, dan gangguan jaringan (*network disruption*). Lebih lanjut, kompleksitas struktural pesawat modern (terutama Boeing 787 dan Airbus A350 dengan arsitektur *fly-by-wire* dan material komposit) mensyaratkan pendekatan pemeliharaan yang mampu membedakan antara degradasi struktural mayor (yang memerlukan *D-check* penuh) versus degradasi komponen tersegmentasi (yang dapat ditangani melalui *A/B/C-check* parsial). Paper Zhou (2024) mengusulkan kerangka kerja kebijakan MRO yang secara elegan mengintegrasikan **siklus D-check penuh yang direvitalisasi** dengan **refurbishment parsial selama fase mature-run** operasi penerbangan, sebuah pendekatan yang hingga kini masih menjadi *research gap* substansial dalam literatur operasional penerbangan.

Kontribusi teoretis utama paper ini adalah pembuktian formal mengenai **eksistensi nilai optimal untuk model ketersediaan** ketika *scheduling* pemeriksaan pemeliharaan *life-cycle* dioptimasi berdasarkan **maksimum waktu operasi tersedia** (*maximum available operation time*). Pendekatan ini berbeda secara fundamental dengan optimasi berbasis biaya tradisional (*cost-based optimization*) karena menangkap *trade-off* non-linear antara frekuensi inspeksi, durasi downtime, dan degradasi reliabilitas komponen. Dalam paper kedua dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672), Zhou memperkuat analisis empiris ini dengan eksplorasi skenario kebijakan alternatif yang relevan untuk diterapkan pada berbagai generasi pesawat, sehingga memberikan *robustness* terhadap variasi konfigurasi armada yang heterogen.

## 2. Landasan Teori & Formulasi Matematis

Model konseptual yang dikembangkan oleh Zhou (2024) berakar pada **Renewal Reward Theorem** (RRT) yang diformalkan melalui *asymptotic availability* sebagai berikut:

$$A_{\infty} = \lim_{t \to \infty} \frac{E[\text{Uptime dalam } (0,t)]}{t} = \frac{E[X]}{E[X] + E[Y]}$$

di mana $E[X]$ adalah ekspektasi waktu operasi antar-pemeliharaan (*mean up-time*) dan $E[Y]$ adalah ekspektasi durasi pemeliharaan (*mean downtime*). Untuk sistem dengan hierarki $n$-level check, Zhou merumuskan ulang ketersediaan sebagai fungsi dari interval inspeksi $T_i$ untuk setiap level:

$$A(T_1, T_2, \ldots, T_n) = 1 - \sum_{i=1}^{n} \frac{\tau_i}{T_i}$$

di mana $\tau_i$ merepresentasikan **waktu pemeliharaan efektif** untuk check level-$i$ (dengan $\tau_A \ll \tau_B \ll \tau_C \ll \tau_D$), dan $T_i$ adalah interval siklus untuk check tersebut. Asumsi kritis yang diadopsi adalah **non-overlapping maintenance intervals** yang menjamin periode downtime tidak tumpang tindih (*non-overlapping*), sehingga:

$$\sum_{i=1}^{n} \frac{\tau_i}{T_i} < 1$$

Fungsi degradasi reliabilitas komponen utama pesawat (misalnya *high-cycle fatigue* pada turbin atau *corrosion fatigue* pada fuselage) mengikuti model **Weibull** dengan *shape parameter* $\beta > 1$ untuk menandakan *wear-out*:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

dengan *scale parameter* $\eta$ dan fungsi *hazard rate*:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Zhou (2024) kemudian mengintegrasikan fungsi reliabilitas ini ke dalam struktur biaya siklus hidup (*life-cycle cost*) melalui **Expected Total Cost Rate (ETCR)**:

$$EC(T) = \lim_{T \to \infty} \frac{E[C(t)]}{T} = \frac{C_p \cdot F(T) + \sum_{i=1}^{n} C_i}{T}$$

di mana $C_p$ adalah biaya preventif, $F(T) = 1 - R(T)$ adalah probabilitas kumulatif kegagalan, dan $C_i$ adalah biaya inspeksi untuk level-$i$. Formulasi Lagrangian untuk optimasi bersama (*joint optimization*) availabilitas dan biaya menjadi:

$$\mathcal{L}(T_1, \ldots, T_n, \lambda) = A(T_1, \ldots, T_n) - \lambda \cdot EC(T_1, \ldots, T_n)$$

**First-order necessary conditions** menghasilkan sistem persamaan simultan:

$$\frac{\partial \mathcal{L}}{\partial T_k} = \frac{\tau_k}{T_k^2} - \lambda \left[ \frac{C_p \cdot f(T_k) \cdot T - (C_p F(T_k) + \sum_i C_i)}{T^2} \right] = 0$$

di mana $f(T_k) = \frac{\beta}{\eta}\left(\frac{T_k}{\eta}\right)^{\beta-1} e^{-(T_k/\eta)^{\beta}}$ adalah *probability density function* Weibull. Solusi sistem ini menjamin **eksistensi nilai optimal unik** yang dibuktikan secara matematis oleh Zhou melalui *convexity analysis* dari fungsi tujuan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM mengikuti **prosedur operasional standar** yang terdiri dari tujuh fase utama sesuai dengan *best practice* yang disintesiskan dari framework Zhou (2024) dan standar industri penerbangan (EASA Part-M, FAA Part 121, dan IATA MRO Operations):

**Fase 1 — Functional Failure Analysis (FFA):** Melakukan dekomposisi sistem pesawat menjadi *Significant Items (SI)* yang diklasifikasikan berdasarkan konsekuensi kegagalan (*safety, operational, economic, environmental*). Setiap SI diberi *failure mode* dan *failure effect* yang terdokumentasi dalam **MSG-3 (Maintenance Steering Group-3)** format.

**Fase 2 — RCM Decision Logic Tree:** Penerapan pohon keputusan standar untuk menentukan tugas pemeliharaan yang applicable: *scheduled restoration, scheduled discard, failure finding, combined*, atau *no scheduled maintenance*.

**Fase 3 — Hierarchy Level Mapping:** Penetapan interval berbasis komponen:

| Check Level | Interval Tipikal | Durasi Downtime | Cakupan Inspeksi |
|-------------|-----------------|-----------------|------------------|
| A-Check | 400–600 flight hours | 8–24 jam | *Light maintenance*: lubricasi, inspeksi visual, *servicing* |
| B-Check | 6–8 bulan | 1–3 hari | *Detailed inspection*: sistem hidrolik, avionik dasar |
| C-Check | 20–24 bulan | 1–2 minggu | *Extensive inspection*: sistem mayor, *cabin refurbishment* |
| D-Check | 6–12 tahun | 1–3 bulan | *Full refurbishment*: *zero-time restoration*, *structural overhaul* |

**Fase 4 — Data Acquisition & Reliability Modeling:** Pengumpulan data *fleet reliability* dari sistem *AMOS*, *TRAX*, atau *SAP MRO* untuk membangun model degradasi Weibull parametrik. Frekuensi sampling minimum adalah **0.05 kegagalan per komponen per 1000 flight hours** untuk memenuhi *statistical significance threshold*.

**Fase 5 — Optimization Run:** Eksekusi algoritma optimasi (Newton-Raphson atau *Sequential Quadratic Programming*) terhadap model Lagrangian untuk menentukan $T_i^*$ optimal yang memaksimalkan availabilitas sambil mempertahankan biaya di bawah *budget constraint*.

**Fase 6 — Implementation & Monitoring:** *Roll-out* kebijakan melalui *Maintenance Program Document (MPD)* yang disubmit ke otoritas regulatori untuk approval.

**Fase 7 — Continuous Improvement Loop:** *Quarterly review* berbasis Key Performance Indicators (KPI): *Dispatch Reliability*, *Technical Delay Rate*, *Maintenance Cost per Available Seat Kilometer (ASK)*.

Diagram alir proses secara skematis mengikuti *closed-loop control structure*:

```
[Data Acquisition] → [Reliability Modeling] → [Cost-Availability Optimization]
        ↑                                                       ↓
[Performance KPI] ← [Implementation] ← [Regulatory Approval] ← [Interval Selection]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan implementasi model Zhou (2024), perhatikan studi kasus pada **armada Airbus A320neo** dengan parameter operasional berikut:

**Input Parameter:**
- *Mean Time Between A-Checks*: $T_A = 500$ flight hours
- *Mean Time Between C-Checks*: $T_C = 18,000$ flight hours (≈ 18 bulan)
- Durasi A-Check: $\tau_A = 16$ jam; C-Check: $\tau_C = 200$ jam
- Weibull *scale parameter* (komponen turbin): $\eta = 25{,}000$ jam
- Weibull *shape parameter*: $\beta = 2.5$
- Biaya C-check: $C_C = \text{USD } 800{,}000$
- Biaya kegagalan (unscheduled): $C_f = \text{USD } 2{,}500{,}000$

**Langkah Perhitungan Step-by-Step:**

**Langkah 1 — Hitung base availability (kondisi eksisting):**

$$A_{base} = 1 - \frac{\tau_A}{T_A} - \frac{\tau_C}{T_C} = 1 - \frac{16}{500} - \frac{200}{18000}$$

$$A_{base} = 1 - 0.032 - 0.0111 = 0.9569 \text{ atau } 95.69\%$$

**Langkah 2 — Hitung reliabilitas pada interval C-Check:**

$$R(T_C) = e^{-\left(\frac{18000}{25000}\right)^{2.5}} = e^{-(0.72)^{2.5}} = e^{-0.417} = 0.6592$$

Artinya, terdapat probabilitas **34.08%** komponen mengalami degradasi signifikan pada saat C-check.

**Langkah 3 — Hitung Expected Total Cost Rate (ETCR):**

$$EC = \frac{C_f \cdot (1 - R(T_C)) + C_C}{T_C} = \frac{2{,}500{,}000 \times 0.3408 + 800{,}000}{18000}$$

$$EC = \frac{852{,}000 + 800{,}000}{18000} = \frac{1{,}652{,}000}{18000} = \text{USD } 91.78 \text{ per flight hour}$$

**Langkah 4 — Optimasi Interval C-Check:**

Untuk menentukan $T_C^*$ yang meminimalkan EC, kita gunakan first-order condition:

$$\frac{dEC}{dT_C} = 0 \implies -C_f \cdot f(T_C) \cdot T_C + C_f(1-R(T_C)) + C_C - \frac{f(T_C) \cdot T_C \cdot [C_f(1-R(T_C)) + C_C]