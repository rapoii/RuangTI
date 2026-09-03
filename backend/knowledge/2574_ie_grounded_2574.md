# 2574 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability - A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu ekosistem paling padat aset (*asset-intensive*) di mana ketersediaan (*availability*) armada bukan sekadar metrik operasional, melainkan variabel strategis yang menentukan profitabilitas, keselamatan, dan reputasi maskapai. Hang Zhou (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menegaskan bahwa *Reliability-Centred Maintenance* (RCM) merupakan pendekatan yang sangat dihargai dalam pengelolaan aset karena kemampuannya dalam mengkuantifikasi degradasi non-linier dari kinerja siklus hidup (*life-cycle performance*) sekaligus mengoptimalkan operasi dengan meningkatkan keselamatan dan ketersediaan. Namun, Zhou juga menyoroti bahwa pemodelan dan implementasi RCM tetap menantang, khususnya ketika diterapkan pada sistem kompleks seperti kebijakan MRO hirarkis A/B/C/D yang lazim digunakan di sektor aviasi.

Konteks operasional industri aviasi modern menghadapi tekanan ganda: di satu sisi, permintaan perjalanan udara yang terus meningkat pasca-pandemi mendorong maskapai untuk memaksimalkan *utilization rate* pesawat; di sisi lain, regulasi ketat dari otoritas penerbangan sipil (seperti FAA, EASA, dan DGCA) mengharuskan setiap pesawat menjalani serangkaian *checks* berkala untuk menjamin *airworthiness*. Pemeriksaan A (*A-Check*) yang dilakukan setiap 400–600 jam terbang, B-Check setiap 6–8 bulan, C-Check setiap 20–24 bulan, dan D-Check (atau *heavy maintenance visit*, HMV) setiap 6–12 tahun, membentuk hierarki inspeksi yang harus dijadwalkan secara koheren. Kompleksitas bertambah ketika biaya satu unit D-Check dapat mencapai USD 1–3 juta dan memaksa pesawat *out-of-service* selama 1–2 bulan. Zhou (2024) berargumen bahwa tanpa kerangka optimasi berbasis keandalan yang ketat, maskapai akan menghadapi trade-off sub-optimal antara ketersediaan armada, biaya siklus hidup, dan tingkat keselamatan. Makalah Zhou yang dipublikasikan dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) semakin mempertegas urgensi integrasi antara D-Check penuh (*fully refurbished*) dengan refurbishment parsial selama fase *mature-run* operasi aviasi. Studi ini menjadi semakin relevan mengingat harga satu jam *ground time* pesawat narrow-body komersial dapat bernilai USD 8.000–15.000 dalam bentuk *lost revenue*, sehingga setiap peningkatan 1% pada *fleet availability* berpotensi menyelamatkan maskapai hingga jutaan dolar AS per tahun per armada.

---

## 2. Landasan Teori & Formulasi Matematis

Model RCM hirarkis yang dikembangkan Zhou (2024) berakar pada teori pembaruan (*renewal theory*) dan proses stokastik non-linier untuk degradasi sistem. Berikut adalah formulasi inti yang digunakan.

### 2.1 Fungsi Keandalan dan Laju Kegagalan Non-Linier

Keandalan sistem pada waktu $t$ mengikuti distribusi Weibull karena karakteristik degradasi yang *non-linear*:

$$R(t) = e^{-(\lambda t)^{\beta}}$$

dengan $\lambda > 0$ adalah parameter skala dan $\beta > 1$ adalah parameter bentuk yang merepresentasikan *wear-out* fase. Laju kegagalan sesaat (*hazard rate*) didefinisikan sebagai:

$$h(t) = \frac{f(t)}{R(t)} = \frac{\beta \lambda (\lambda t)^{\beta-1}}{1}$$

### 2.2 Model Ketersediaan Hirarkis A/B/C/D

Ketersediaan sesaat (*instantaneous availability*) untuk satu siklus *check* ke-$i$ dengan waktu inspeksi $T_i$ dan downtime rata-rata $d_i$ diformulasikan sebagai:

$$A_i(T_i) = \frac{T_i}{T_i + d_i}$$

Untuk hierarki penuh, ketersediaan jangka panjang (*long-run availability*) didefinisikan sebagai rasio total *uptime* terhadap total waktu siklus:

$$A_{LR} = \frac{\sum_{i \in \{A,B,C,D\}} n_i \cdot T_i}{\sum_{i \in \{A,B,C,D\}} n_i \cdot (T_i + d_i)}$$

dengan $n_i$ adalah jumlah check tipe $i$ dalam satu siklus hidup.

### 2.3 Optimasi Berdasarkan Waktu Operasi Maksimum

Zhou (2024) memperkenalkan fungsi tujuan berupa *maximum available operation time* yang dimaksimkan dengan kendala biaya:

$$\max_{T_A, T_B, T_C, T_D} \quad Z = \sum_{k=1}^{N} U_k(T_A, T_B, T_C, T_D)$$

$$\text{s.t.} \quad \sum_{i} C_i \cdot n_i \leq B_{budget}$$

$$\quad\quad T_A < T_B < T_C < T_D$$

dengan $U_k$ adalah utilitas operasi pesawat pada interval $k$, $C_i$ adalah biaya per check tipe $i$, dan $B_{budget}$ adalah anggaran MRO.

### 2.4 Model Refurbishment Parsial

Inovasi utama Zhou (2024) adalah memodelkan *partial refurbishment* $P$ yang disisipkan pada fase *mature-run*:

$$T_{D}^{eff} = T_D - \sum_{j=1}^{m} \tau_j^{(P)}$$

dengan $\tau_j^{(P)}$ adalah interval refurbishment parsial ke-$j$ dan $m$ adalah jumlah sisipan. Ini memperpanjang umur pakai efektif antar dua D-Check penuh.

### 2.5 Eksistensi Nilai Optimal

Zhou membuktikan bahwa terdapat nilai optimal $T^*$ yang memenuhi kondisi:

$$\frac{\partial A_{LR}}{\partial T_i} = 0 \quad \forall i \in \{A,B,C,D\}$$

dengan $\frac{\partial^2 A_{LR}}{\partial T_i^2} < 0$, menjamin titik maksimum global.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model RCM hirarkis Zhou (2024) mengikuti SOP 7-tahap yang selaras dengan standar SAE JA1011/1012 dan MSG-3:

**Tahap 1 — Segmentasi Armada dan Karakterisasi Sistem.** Setiap sub-sistem pesawat (mesin, *avionics*, struktur, *landing gear*) dipetakan ke dalam pohon keandalan (*reliability block diagram*).

**Tahap 2 — Akuisisi Data Historis.** Pengumpulan data failure dari *Maintenance Information System* (MIS) minimal 5 tahun terakhir untuk estimasi parameter Weibull $\lambda, \beta$.

**Tahap 3 — Penentuan Interval Awal Check.** Menggunakan rekomendasi OEM sebagai *baseline* dengan *modification factor* $\phi$ yang merepresentasikan intensitas operasional maskapai.

**Tahap 4 — Optimasi Hierarkis.** Penerapan algoritma optimasi berbasis *gradient descent* atau *dynamic programming* untuk menemukan $(T_A^*, T_B^*, T_C^*, T_D^*)$.

**Tahap 5 — Penjadwalan Refurbishment Parsial.** Penentuan lokasi insertion $P$-check dengan memperhatikan *scheduling conflict* terhadap rotasi armada.

**Tahap 6 — Simulasi Monte Carlo.** Validasi model melalui $\geq 10.000$ iterasi untuk mengestimasi distribusi $A_{LR}$ beserta *confidence interval* 95%.

**Tahap 7 — Implementasi dan Audit Berkelanjutan.** Penerapan SOP baru, monitoring KPI (Ketersediaan, MTBF, MTTR, Biaya/Siklus), dan *feedback loop* setiap 6 bulan.

Diagram alir proses mengikuti pola berlapis (*layered architecture*): Data Layer → Reliability Modeling Layer → Optimization Layer → Scheduling Layer → Execution Layer.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Sebuah maskapai regional mengoperasikan armada 20 unit Airbus A320 dengan karakteristik berikut:

| Parameter | Nilai |
|---|---|
| Rata-rata flight hours/tahun | $H = 3.200$ jam |
| Biaya A-Check ($C_A$) | USD 8.000 |
| Biaya B-Check ($C_B$) | USD 35.000 |
| Biaya C-Check ($C_C$) | USD 250.000 |
| Biaya D-Check ($C_D$) | USD 1.800.000 |
| Downtime A-Check ($d_A$) | 12 jam |
| Downtime B-Check ($d_B$) | 48 jam |
| Downtime C-Check ($d_C$) | 240 jam |
| Downtime D-Check ($d_D$) | 720 jam |
| Parameter Weibull ($\lambda, \beta$) | $(0{,}0008, 1{,}8)$ |

**Langkah 1 — Perhitungan Interval Check Awal (berdasarkan baseline OEM):**
- $T_A = 500$ jam, $T_B = 3.500$ jam, $T_C = 12.000$ jam, $T_D = 36.000$ jam.

**Langkah 2 — Ketersediaan Hirarkis Baseline:**

$$A_A = \frac{500}{500+12} = 0{,}9768$$

$$A_B = \frac{3.500}{3.500+48} = 0{,}9865$$

$$A_C = \frac{12.000}{12.000+240} = 0{,}9804$$

$$A_D = \frac{36.000}{36.000+720} = 0{,}9804$$

Ketersediaan long-run armada (terboboti jumlah check per siklus hidup):

$$A_{LR}^{baseline} = \frac{(72 \cdot 500) + (10 \cdot 3.500) + (3 \cdot 12.000) + (1 \cdot 36.000)}{(72 \cdot 512) + (10 \cdot 3.548) + (3 \cdot 12.240) + (1 \cdot 36.720)}$$

$$= \frac{36.000 + 35.000 + 36.000 + 36.000}{36.864 + 35.480 + 36.720 + 36.720} = \frac{143.000}{145.784} \approx 0{,}9810$$

**Langkah 3 — Optimasi dengan Refurbishment Parsial.** Misalkan dilakukan $m=2$ partial refurbishment dengan $\tau^{(P)} = 4.000$ jam, sehingga:

$$T_D^{eff} = 36.000 - (2 \cdot 4.000) = 28.000 \text{ jam (siklus D-Check efektif)}$$

Ketersediaan setelah optimasi:

$$A_{LR}^{opt} = \frac{(56 \cdot 500) + (8 \cdot 3.500) + (3 \cdot 12.000) + (1 \cdot 28.000)}{(56 \cdot 512) + (8 \cdot 3.548) + (3 \cdot 12.240) + (1 \cdot 28.720)}$$

$$= \frac{28.000 + 28.000 + 36.000 + 28.000}{28.672 + 28.384 + 36.720 + 28.720} = \frac{120.000}{122.496} \approx 0{,}9797$$

**Langkah 4 — Analisis Biaya-Manfaat.** Selisih biaya refurbishment parsial: $\Delta C = 2 \cdot 120.000 = 240.000$ USD per siklus hidup (vs D-Check penuh). Peningkatan *useful uptime* total: $(36.000 - 28.000) \cdot \text{dihindari downtime} \rightarrow \text{perluasan utilisasi}$. ROI dihitung sebagai:

$$ROI = \frac{\Delta \text{Revenue} - \Delta C}{\Delta C} = \frac{(8.000 \cdot 2.000) - 240.000}{240.000} \approx 6{,}57 \text{ atau } 657\%$$

dengan asumsi *revenue per flight hour* USD 8.000 dan tambahan 2.000 flight hours dari efisiensi jadwal.

**Interpretasi Manajerial:** Model Zhou menghasilkan ketersediaan 97,97