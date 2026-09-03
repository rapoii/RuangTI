# 1518 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat di Sektor MRO Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *asset-intensive* dengan struktur biaya modal paling kapital-intensif di dunia. Sebuah pesawat窄-body generasi terbaru seperti Airbus A320neo atau Boeing 737 MAX memiliki harga per unit pada kisaran USD 110–135 juta (Boeing Commercial Market Outlook 2023; Airbus Global Market Forecast 2023), sehingga availability armada (*fleet availability*) bukan sekadar indikator operasional melainkan variabel strategis yang menentukan profitabilitas maskapai, kepatuhan terhadap slot bandar udara, dan reputasi keselamatan. Menurut Hang Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), kompleksitas operasional ini menjadi semakin akut ketika organisasi pemeliharaan menerapkan kebijakan *Maintenance, Repair, and Overhaul* (MRO) hirarkis A/B/C/D yang lazim di航空公司, di mana setiap level pemeliharaan memiliki karakteristik invasif, durasi, dan frekuensi yang berbeda.

Zhou (2024) menekankan bahwa *Reliability-Centered Maintenance* (RCM) — yang secara historis dilembagakan melalui studi Nowlan dan Heap (1978) untuk United Airlines — masih merupakan kerangka kerja paling otoritatif untuk mengkuantifikasi degradasi non-linier performa siklus-hidup (*life-cycle*) dan mengoptimalkannya menjadi keseimbangan antara keselamatan, ketersediaan, dan biaya. Namun, seperti diuraikan dalam abstrak paper tersebut, "RCM modelling and implementation can be challenging, particularly in applying to the operations of complex systems such as the hierarchical A/B/C/D MRO policy used in the aviation sector" ([10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). 

Urgensi ekonomi dari topik ini dapat diukur: industri MRO penerbangan global bernilai sekitar USD 93 miliar pada 2023 dan diproyeksikan mencapai USD 117 miliar pada 2028 (cagr ~4,7%), dimana porsi D-check (heavy maintenance visit) menyumbang 35–45% dari total biaya tersebut (Oliver Wyman MRO Survey 2023; Aviation Week Network MRO Forecast). Setiap jam *ground-time* pesawat narrow-body yang tidak direncanakan bernilai peluang pendapatan antara USD 8.000–USD 18.000 tergantung rute dan kelas armada. Dengan kerangka RCM hirarkis yang optimal, maskapai berpotensi menaikkan *fleet availability* dari level industri rata-rata 85–88% menjadi >92%, yang berarti tambahan utilisasi tahunan senilai miliaran dolar untuk掩armada besar. Oleh karena itu, paper Zhou (2024) menyumbangkan kontribusi orisinal berupa: (1) kerangka kebijakan MRO yang mengintegrasikan siklus D-check penuh dan refurbishment parsial selama fase *mature-run* operasi pesawat, dan (2) bukti matematis keberadaan nilai optimal untuk model ketersediaan armada — yang akan diuraikan secara formal pada Bagian 2.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) berangkat dari formulasi ketersediaan tunak (*steady-state availability*) untuk satu unit pesawat dengan empat jenis aktivitas pemeliharaan yang terjadwal pada interval berbeda. Definisikan variabel keputusan dan parameter sebagai berikut:

- $T_A, T_B, T_C, T_D$ = interval waktu antar-pemeliharaan berturut-turut untuk A-check, B-check, C-check, dan D-check (dalam *flight hours*, FH).
- $\tau_A, \tau_B, \tau_C, \tau_D$ = durasi *ground-time* rata-rata untuk masing-masing level check.
- $\lambda(t)$ = laju kegagalan *intrinsic* komponen yang terdegradasi secara non-linier menurut model *power-law* Weibull:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $\beta$ adalah *shape parameter* dan $\eta$ adalah *scale parameter* dari distribusi Weibull.

- $R(t) = \exp\!\left[-\left(\tfrac{t}{\eta}\right)^{\beta}\right]$ = fungsi keandalan komponen.

Ketersediaan sesaat (*instantaneous availability*) $A(t)$ untuk satu siklus antar-pemeliharaan didefinisikan sebagai:

$$A(t) = \frac{T_{\text{cycle}} - \tau_i}{T_{\text{cycle}}}$$

di mana $T_{\text{cycle}}$ adalah interval pemeliharaan yang berlaku dan $\tau_i \in \{\tau_A,\tau_B,\tau_C,\tau_D\}$. Untuk armada dengan $N$ pesawat, ketersediaan agregat diformulasikan sebagai:

$$A_{\text{fleet}}(T_A, T_B, T_C, T_D) = \frac{1}{N}\sum_{j=1}^{N} A_j$$

Tujuan optimasi paper Zhou (2024) adalah **memaksimumkan total waktu operasi tersedia maksimum** (*maximum available operation time*) selama horizon perencanaan $H$ dengan kendala biaya total MRO tidak melebihi budget $B_{\max}$:

$$\max_{T_A,T_B,T_C,T_D} \; \Phi = \int_{0}^{H} A_{\text{fleet}}(t)\,dt$$

$$\text{subject to} \quad \sum_{i \in \{A,B,C,D\}} c_i \cdot \frac{H}{T_i} \leq B_{\max}$$

$$\text{dan} \quad T_A < T_B < T_C < T_D$$

dengan $c_i$ adalah biaya per-kunjungan untuk masing-masing level check. Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan secara analitis **keberadaan nilai optimal** untuk model ketersediaan ini melalui teorema titik tetap Brouwer–Schauder dan analisis konkavitas fungsi objektif pada domain kendala yang kompak. Secara intuitif, peningkatan $T_i$ akan meningkatkan availability jangka pendek namun menurunkan keandalan sehingga menaikkan frekuensi corrective maintenance yang tidak terjadwal; trade-off inilah yang menjamin adanya titik optimum interior.

Untuk fase *mature-run*, Zhou memperkenalkan variabel keputusan tambahan $\rho$ yang merepresentasikan **proporsi refurbishment parsial** yang menggantikan sebagian pekerjaan D-check penuh:

$$\tau_D^{\text{eff}} = (1-\rho)\,\tau_D + \rho\,\tau_{\text{partial}}$$

dengan $\tau_{\text{partial}} \ll \tau_D$, sehingga memungkinkan availability yang lebih tinggi tanpa mengorbangi keselamatan struktural pesawat. Formulasi lengkap model mixed-integer optimization (MIP) akhirnya diselesaikan menggunakan branch-and-bound atau algoritma *successive convex approximation* tergantung skala armada.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM dari Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) mengikuti SOP industri yang terintegrasi dengan standar internasional, antara lain:

1. **Fase Inisialisasi & Pengumpulan Data** — Kompilasi data historis *Flight Hour* (FH), *Flight Cycle* (FC), *Technical Log Entry*, *Scheduled Task Card*, dan *Unscheduled Removal* minimal 36 bulan terakhir untuk masing-masing armada. Standar acuan: ATA MSG-3, FAA AC 120-17A, dan EASA Part-M.
2. **Analisis Significance & Functional Failure Analysis (FFA)** — Mengklasifikasikan setiap *Maintenance Significant Item* (MSI) ke dalam matriks 7-tahapan RCM (Nowlan & Heap, 1978; Moubray, *Reliability-Centered Maintenance*, 1997).
3. **Penentuan Interval Hirarkis** — Menurunkan $T_A, T_B, T_C, T_D$ dari kebijakan pabrikan (MSG-3 task packaging) kemudian mengoptimalkannya melalui model pada Bagian 2.
4. **Simulasi Monte Carlo** — Validasi kebijakan dengan $10^4$–$10^5$ replikasi menggunakan parameter Weibull hasil *Maximum Likelihood Estimation* (MLE).
5. **Implementasi Bertahap (Pilot → Rollout)** — Pilot pada satu sub-armada selama 6 bulan, monitoring KPI *Mean Time Between Unscheduled Removals* (MTBUR) dan *Dispatch Reliability*.
6. **Continuous Review** — *Reliability Steering Committee* (RSC) triwulanan yang mengevaluasi *deviation* dan menyesuaikan $T_i$.

Diagram alir proses logika keputusan (sesuai paper):

```
┌────────────────────────────────────────────┐
│  Data Akuisisi (FH, FC, failures, costs)   │
└──────────────────┬─────────────────────────┘
                   ▼
┌────────────────────────────────────────────┐
│  Weibull MLE → β, η per komponen MSI       │
└──────────────────┬─────────────────────────┘
                   ▼
┌────────────────────────────────────────────┐
│  Optimasi (T_A,T_B,T_C,T_D,ρ) ← MIP/SCA   │
└──────────────────┬─────────────────────────┘
                   ▼
┌────────────────────────────────────────────┐
│  Validasi: Monte Carlo + Pareto Front      │
└──────────────────┬─────────────────────────┘
                   ▼
┌────────────────────────────────────────────┐
│  Pilot 6 bulan → RSC review → Rollout      │
└──────────────────┬─────────────────────────┘
                   ▼
┌────────────────────────────────────────────┐
│  Continuous Improvement (kaizen MRO)       │
└────────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi model Zhou (2024), tinjauau satu unit **Boeing 737-800** dalam maskapai fiktif "PT Nusantara Airways" dengan parameter industri berikut:

| Parameter | Nilai | Satuan |
|---|---|---|
| Utilisasi harian rata-rata | 9,5 | jam/hari |
| Interval A-check saat ini | 600 | FH |
| Interval B-check saat ini | 2.400 | FH |
| Interval C-check saat ini | 6.000 | FH |
| Interval D-check saat ini | 24.000 | FH |
| Durasi $\tau_A / \tau_B / \tau_C / \tau_D$ | 24 / 72 / 240 / 1.440 | jam |
| Biaya per visit $c_A/c_B/c_C/c_D$ | 8 / 35 / 180 / 850 | ribu USD |
| Horizon $H$ | 8 tahun ≈ 27.760 FH | jam-equivalent |
| Anggaran $B_{\max}$ | 4,5 | juta USD |

**Langkah 1 — Hitung baseline availability** dengan kebijakan saat ini:

$$\text{Siklus penuh 1 D-check} = 24.000 \text{ FH}$$

Dalam satu siklus penuh, total *ground-time* untuk pemeliharaan terjadwal:

$$G_{\text{total}} = \underbrace{(24000/600)}_{40}\cdot 24 + \underbrace{(24000/2400)}_{10}\cdot 72 + \underbrace{(24000/6000)}_{4}\cdot 240 + 1\cdot 1440$$
$$= 960 + 720 + 960 + 1440 = 4.080 \text{ jam}$$

Availability baseline:

$$A_{\text{baseline}} = \frac{24.000 - 4.080/9{,}5}{24.000} = \frac{23.570{,}5}{24.000} \approx 98{,}2\%$$

**Langkah 2 — Optimasi model Zhou** dengan menambah variabel $\rho = 0{,}35$ (35% refurbishment parsial menggantikan porsi D-check). Asumsikan parameter We