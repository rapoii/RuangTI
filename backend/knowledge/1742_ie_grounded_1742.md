# 1742 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu sektor *asset-heavy* dengan intensitas modal yang sangat tinggi, di mana ketersediaan (*availability*) armada pesawat bukan sekadar metrik operasional melainkan determinan strategis profitabilitas, keselamatan publik, dan keberlanjutan rantai pasok. Setiap jam terbang (*flight hour*) yang hilang akibat *grounding* pesawat untuk inspeksi memiliki opportunity cost yang signifikan—pada pesawat narrow-body generasi terbaru seperti Boeing 737 MAX atau Airbus A320neo, estimasi revenue loss berkisar USD 12.000–18.000 per jam pesawat. Zhou (2024) dalam karyanya yang dipublikasikan melalui *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menyoroti bahwa pendekatan *Reliability-Centred Maintenance* (RCM) menjadi kerangka analitis paling adaptif untuk industri dengan degradasi non-linier seperti ini, karena RCM mampu mengkuantifikasi performa *life-cycle* yang tidak stasioner dan mengoptimalkan operasi melalui peningkatan simultan antara aspek keselamatan dan ketersediaan aset.

Urgensi riset ini muncul dari kompleksitas struktural kebijakan MRO penerbangan modern yang bersifat hierarkis—yakni **A-check, B-check, C-check, dan D-check**. Pemeriksaan A (rutin ringan) dilakukan setiap 400–600 *flight hours* atau 2–3 bulan; B-check setiap 6–8 bulan dengan cakupan lebih luas; C-check (major inspection) setiap 20–24 bulan melibatkan pembongkaran sebagian besar sistem; sedangkan D-check merupakan *heavy maintenance visit* terlengkap yang mengembalikan pesawat ke kondisi "zero-time", biasanya dilakukan setiap 6–12 tahun dengan durasi *downtime* 1–2 bulan. Zhou (2024) mengidentifikasi bahwa kebijakan hierarkis ini, meskipun diadopsi luas oleh operator global, menghadapi tantangan optimasi yang belum terjawab secara analitis—khususnya dalam menentukan interval optimal antar-D-check dan partial refurbishment selama *mature-run phase*. Lebih lanjut, companion paper dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) menyajikan elaborasi metodologis bahwa eksistensi nilai optimal pada model ketersediaan terbukti secara matematis, sehingga riset ini bukan sekadar empiris tetapi memiliki landasan teoritis yang kuat untuk pengambilan keputusan manajerial.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Reliabilitas Non-Linier

Zhou (2024) mengadopsi fungsi reliabilitas Weibull untuk menangkap karakteristik *wear-out failure* pada komponen avionik dan struktur pesawat. Fungsi reliabilitas dasar didefinisikan sebagai:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana $\beta > 1$ adalah *shape parameter* yang merepresentasikan karakteristik penuaan (untuk komponen avionik $\beta \approx 2{,}1$–$2{,}7$), $\eta$ adalah *scale parameter* (umur karakteristik), dan $t$ adalah *flight hours* terakumulasi. Laju kegagalan (*hazard rate*) menjadi:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2 Formulasi Ketersediaan Hirarkis (Availability Function)

Ketersediaan sesaat (*instantaneous availability*) untuk satu siklus operasional antara dua perawatan berturut-turut didefinisikan sebagai rasio antara *mean time to failure* terhadap total *mean time to failure* ditambah *mean downtime*:

$$A_i = \frac{\text{MTTF}_i}{\text{MTTF}_i + \text{MDT}_i}$$

Untuk kebijakan hierarkis A/B/C/D, ketersediaan *long-run* ratarata sistem armada dimodelkan Zhou (2024) sebagai:

$$\bar{A} = \frac{\sum_{j \in \{A,B,C,D\}} n_j \cdot \text{MTTF}_j}{\sum_{j \in \{A,B,C,D\}} n_j \cdot (\text{MTTF}_j + \text{MDT}_j)}$$

di mana $n_j$ adalah jumlah kunjungan check tipe $j$ dalam satu *life-cycle* lengkap.

### 2.3 Model Optimasi Interval D-Check

Zhou (2024) memformulasikan masalah optimasi sebagai berikut: temukan interval optimal $T_D$ antara dua D-check berturut-turut yang memaksimalkan ketersediaan *long-run*, dengan kendala bahwa partial refurbishment (A/B/C) dilakukan pada sub-interval:

$$\max_{T_D, T_C, T_B, T_A} \bar{A}(T_A, T_B, T_C, T_D)$$

subject to:

$$T_D = k_C \cdot T_C = (k_C \cdot k_B) \cdot T_B = (k_C \cdot k_B \cdot k_A) \cdot T_A$$

$$\sum_{j} \frac{\text{MDT}_j}{\text{MTTF}_j + \text{MDT}_j} \leq \epsilon_{\text{threshold}}$$

$$T_A \geq T_{A,\min}, \quad T_D \leq T_{D,\max}$$

### 2.4 Fungsi Biaya *Life-Cycle*

Total biaya *life-cycle* per *flight hour* dinyatakan oleh:

$$C_{\text{LCFH}} = \frac{C_{D} + \sum_{i=1}^{k_D-1}\left(C_{C} + \sum C_{B} + \sum C_{A}\right)}{T_D \cdot k_D \cdot u_{\text{util}}}$$

di mana $u_{\text{util}}$ adalah *utilization rate* harian pesawat (jam terbang/hari), $k_D$ adalah jumlah D-check dalam horizon analisis, dan $C_j$ adalah biaya langsung per visit check $j$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Kebijakan MRO Hirarkis

Berdasarkan kerangka yang dikembangkan Zhou (2024), implementasi kebijakan MRO mengikuti protokol sistematis:

**Tahap 1 — Pengumpulan Data Reliabilitas Komponen:** Setiap komponen kritis (misal: landing gear, *auxiliary power unit*, *avionics suite*) dicatat *failure history*-nya minimal selama 5 tahun operasi, kemudian parameter Weibull diestimasi menggunakan *Maximum Likelihood Estimation* (MLE).

**Tahap 2 — Penentuan Interval Check Optimal:** Menggunakan model optimasi pada Sub-bagian 2.3, dilakukan *trade-off analysis* antara interval panjang (ketersediaan tinggi namun *failure risk* besar) versus interval pendek (downtime berlebih). Solusi equilibriumnya memenuhi kondisi *first-order*:

$$\frac{\partial \bar{A}}{\partial T_j} = 0 \quad \Rightarrow \quad \frac{\text{MDT}_j \cdot \text{MTTF}_j' - \text{MTTF}_j \cdot \text{MDT}_j'}{(\text{MTTF}_j + \text{MDT}_j)^2} = 0$$

**Tahap 3 — Validasi dengan Simulasi Monte Carlo:** Algoritma *Monte Carlo* dengan $N = 10^4$ hingga $10^6$ replikasi digunakan guna memvalidasi ketersediaan prediksi dengan toleransi konfidensi 95%.

### 3.2 Diagram Alir Pengambilan Keputusan

Berikut adalah urutan logika implementasi sesuai SOP Zhou (2024):

```
[Mulai] → [Identifikasi Komponen Kritis] → [Estimasi β, η via MLE]
        ↓
   [Hitung T_A, T_B, T_C, T_D optimal]
        ↓
   [Validasi via Monte Carlo, CI 95%]
        ↓
   [Cost-Benefit Analysis C_LCFH]
        ↓
   [Persetujuan Regulasi (FAA Part 121 / EASA AMC)]
        ↓
   [Implementasi & Continuous Monitoring]
        ↓
   [Re-evaluasi periodik setiap 24 bulan]
```

### 3.3 Kepatuhan Standar Regulasi

Implementasi wajib memenuhi standar internasional: FAA AC 121-22A (Maintenance Review Board Procedures), EASA AMC to Part-M, dan IATA's *Maintenance Cost Management* guidance. Zhou (2024) menekankan bahwa optimalisasi matematis tidak boleh melampaui *minimum task intervals* yang ditetapkan *Original Equipment Manufacturer* (OEM) melalui *Maintenance Planning Document* (MPD).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Armada Tipikal (Narrow-Body, Generasi 2018+)

Ambil kasus satu unit Airbus A320neo dengan karakteristik berikut berdasarkan data agregat industri:

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| MTTF rata-rata | MTTF | 3.200 | flight hours |
| MDT A-check | MDT_A | 12 | hours |
| MDT B-check | MDT_B | 48 | hours |
| MDT C-check | MDT_C | 240 | hours |
| MDT D-check | MDT_D | 720 | hours (≈30 hari) |
| Utilisasi harian | u_util | 10 | jam/hari |
| Biaya A-check | C_A | 18.000 | USD |
| Biaya B-check | C_B | 75.000 | USD |
| Biaya C-check | C_C | 950.000 | USD |
| Biaya D-check | C_D | 4.500.000 | USD |

### 4.2 Perhitungan Ketersediaan Setiap Tier

**Ketersediaan A-check:**
$$A_A = \frac{3.200}{3.200 + 12} = \frac{3.200}{3.212} = 0{,}9963 = 99{,}63\%$$

**Ketersediaan B-check:**
$$A_B = \frac{3.200}{3.200 + 48} = \frac{3.200}{3.248} = 0{,}9852 = 98{,}52\%$$

**Ketersediaan C-check:**
$$A_C = \frac{3.200}{3.200 + 240} = \frac{3.200}{3.440} = 0{,}9302 = 93{,}02\%$$

**Ketersediaan D-check:**
$$A_D = \frac{3.200}{3.200 + 720} = \frac{3.200}{3.920} = 0{,}8163 = 81{,}63\%$$

### 4.3 Ketersediaan Long-Run Gabungan

Misalkan dalam satu *life-cycle* penuh 8 tahun (≈ 8 × 365 × 10 = 29.200 *flight hours*) dilakukan:
- A-check: $n_A = 50$ visit
- B-check: $n_B = 16$ visit
- C-check: $n_C = 4$ visit
- D-check: $n_D = 1$ visit

Total *uptime* efektif:
$$\text{Uptime}_{\text{total}} = 29.200 - (50 \cdot 12 + 16 \cdot 48 + 4 \cdot 240 + 1 \cdot 720)\text{ jam}$$
$$= 29.200 - (600 + 768 + 960 + 720) = 29.200 - 3.048 = 26.152 \text{ jam}$$

$$\bar{A}_{\text{aktual}} = \frac{26.152}{29.200} = 0{,}8956 = 89{,}56\%$$

### 4.4 Optimasi: Eksistensi Nilai Optimal

Dengan menggunakan elastisitas $\varepsilon_{\bar{A}, T_D}$:

$$\varepsilon = \frac{\partial \bar{A}}{\partial T_D} \cdot \frac{T_D}{\bar{A}}$$

Zhou (2024) menunjukkan melalui analisis turunan pertama dan kedua bahwa $\bar{A}$ bersifat *concave* terhadap $T_D$ pada domain yang feasible. Pada titik optimum $T_D^* \approx 6{,}5$ tahun dengan $T_C^* \approx 20$ bulan, $T_B^* \approx 7$ bulan, $T_A^* \approx 550$ *flight hours*, ketersediaan *long-run* optimum tercapai di kisaran **91,2–91,8%** —peningkatan 1,6–2,2 poin persentase versus skenario baseline interval tetap.

### 4.5 Analisis Biaya *Life-Cycle* per Flight Hour

$$C_{\text{LCFH}} = \frac{4.500.000 + 4 \cdot 950.000 + 16 \cdot 75.000 + 50 \cdot 18.000}{29.200}$$
$$= \frac{4.500.000 + 3.800.000 + 1.