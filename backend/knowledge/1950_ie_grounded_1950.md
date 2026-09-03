# 1950 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimumkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi pada Sektor Aviation Maintenance, Repair, and Overhaul (MRO)
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan ekosistem *asset-heavy* yang sangat bergantung pada keseimbangan presisi antara ketersediaan (*availability*) armada, keselamatan operasional, dan efisiensi biaya siklus hidup (*life-cycle cost*). Menurut Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), sektor Maintenance, Repair, and Overhaul (MRO) menghadapi tantangan struktural berupa **degradasi non-linier kinerja siklus hidup** yang tidak dapat diakomodasi oleh kebijakan pemeliharaan periodik tradisional berbasis waktu kalender sederhana. Setiap jam terbang pesawat narrow-body seperti Boeing 737 atau Airbus A320family menghasilkan degradasi kumulatif pada struktur, sistem avionik, mesin turboprop/turbofan, dan sistem hidrolik yang perilakunya bersifat stokastik dan heterogen lintas sub-sistem.

Urgensi ekonomis dari topik ini sangat tinggi. Data industri menunjukkan bahwa biaya MRO menyumbang 10–15% dari total biaya operasional maskapai (Boeing & Airbus market reports, dirujuk dalam Zhou 2024), sementara satu jam *ground-time* pesawat narrow-body bernilai sekitar USD 8.000–12.000 dalam *opportunity cost*. Oleh sebab itu, maskapai tidak dapat memaksimalkan utilisasi aset tanpa strategi pemeliharaan yang secara matematis terbukti optimal. Zhou (2024) memperkenalkan kerangka kebijakan MRO yang mengintegrasikan **siklus D-check penuh (full refurbishment)** dan **refurbishment parsial selama fase mature-run operasi**, sehingga membentuk kebijakan hirarkis empat tingkat (A/B/C/D-check) yang lazim di industri aviasi.

Kerangka kebijakan ini mengoptimalkan penjadwalan *life-cycle maintenance checks* berdasarkan **waktu operasi tersedia maksimum** (*maximum available operation time*), dan membuktikan secara matematis bahwa model ketersediaan memiliki **nilai optimal eksis**. Pendekatan ini berpindah dari paradigma *fixed-schedule* menuju *reliability-centered* dengan tetap memenuhi regulasi FAA Part 121, EASA Part-CAMO, dan standar SAE JA1012 untuk *Reliability-Centered Maintenance* (RCM). Secara strategis, modul ini menjadi landasan analitis bagi para insinyur industri yang merancang sistem pendukung keputusan (*decision support system*) di hangar MRO, perencanaan kapasitas *maintenance bay*, serta *fleet planning* jangka panjang maskapai.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linier Siklus Hidup

Zhou (2024) memodelkan degradasi komponen kritis dengan fungsi keandalan yang menangkap karakteristik **non-linear wear-in, mature-run, dan wear-out**:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana $R(t)$ adalah probabilitas survival pada umur operasi $t$, $\eta$ adalah *characteristic life*, dan $\beta$ adalah parameter bentuk Weibull. Fase mature-run ditandai dengan $\beta \approx 1$ (laju kegagalan konstan), sementara wear-out didekati dengan $\beta > 2$.

### 2.2 Kebijakan Pemeliharaan Hirarkis A/B/C/D

Peubah keputusan utama kebijakan adalah vektor interval waktu:

$$\mathbf{T} = \{T_A, T_B, T_C, T_D\}$$

dengan konstrain domain yang ditetapkan oleh regulator:

$$T_A \ll T_B \ll T_C \ll T_D, \quad T_A \in [400\text{h}, 600\text{h}], \quad T_D \in [6\text{yr}, 12\text{yr}]$$

- **A-check**: inspeksi ringan, *light maintenance*
- **B-check**: inspeksi sedang, *intermediate*  
- **C-check**: inspeksi berat, *heavy maintenance* (≈8.000–10.000 *man-hours*)
- **D-check**: *full refurbishment* (≈30.000 *man-hours*)

### 2.3 Model Ketersediaan Hirarkis

Ketersediaan sesaat *steady-state* didefinisikan sebagai:

$$A(\mathbf{T}) = \frac{\text{MTBF}}{\text{MTBF} + \text{MDT}} = \frac{1}{1 + \frac{\sum_{i \in \{A,B,C,D\}} \lambda_i \cdot \tau_i}{\mu_{\text{op}}}}$$

di mana $\lambda_i$ adalah laju kegagalan yang dipicu oleh check tingkat-$i$, $\tau_i$ adalah *mean downtime* per check, dan $\mu_{\text{op}}$ adalah laju operasi efektif. Untuk merepresentasikan kontribusi siklik D-check penuh dan refurbishment parsial mature-run, Zhou (2024) memperkenalkan **availability indeks augmented**:

$$A_{\text{hier}}(\mathbf{T}) = \frac{T_{\text{op}}^{\text{total}} - \sum_{i} N_i \tau_i}{T_{\text{op}}^{\text{total}}}$$

dengan $N_i$ menyatakan jumlah check tingkat-$i$ sepanjang horizon perencanaan $T_{\text{op}}^{\text{total}}$.

### 2.4 Formulasi Optimasi

Masalah optimasi dinyatakan sebagai:

$$\max_{\mathbf{T} \in \mathcal{F}} \quad A_{\text{hier}}(\mathbf{T})$$

$$\text{subject to:} \quad c(\mathbf{T}) \leq C_{\text{budget}}, \quad R(T_i) \geq R_{\text{min}}, \quad i \in \{A,B,C,D\}$$

Zhou (2024) membuktikan **eksistensi nilai optimal** melalui teorema nilai ekstrem Weierstrass pada himpunan feasibel $\mathcal{F}$ yang kompak, serta **keunikan** melalui *strict quasi-concavity* fungsi objektif terhadap $\mathbf{T}$.

### 2.5 Model Refurbishment Parsial

Untuk fase mature-run antar dua D-check, probabilitas kebutuhan refurbishment parsial mengikuti:

$$P_{\text{partial}}(t) = 1 - e^{-\alpha (t - T_D^{(k-1)})}$$

di mana $\alpha$ adalah koefisien eskalasi degradasi residual pasca-D-check. Refurbishment parsial ini memperbaiki *availability* sebesar faktor koreksi $\kappa \in (1, 1.05)$ tanpa memerlukan *induction* penuh.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti SOP delapan tahap yang diselaraskan dengan **SAE JA1012** dan **MSG-3 (Maintenance Steering Group)**:

**Tahap 1 — Pengumpulan Data Telemetri & Historis**
Akuisisi data *flight hours*, *cycles*, *snags*, dan *unscheduled removals* dari sistem *AMOS*, *TRAX*, atau *SAP MRO* selama minimal 36 bulan terakhir.

**Tahap 2 — Analisis Fungsi & Kegagalan (FMEA)**
Identifikasi fungsi signifikan sistem (propulsion, struktural, avionik) dan modus kegagalannya. Severity, Occurrence, Detection menghasilkan *Risk Priority Number* (RPN).

**Tahap 3 — Penentuan Interval Baseline**
Kalibrasi awal $T_A, T_B, T_C, T_D$ menggunakan rekomendasi *Original Equipment Manufacturer* (OEM) dan regulator.

**Tahap 4 — Estimasi Parameter Weibull**
Fitting $R(t) = e^{-(t/\eta)^{\beta}}$ terhadap data historis dengan *Maximum Likelihood Estimation* (MLE) untuk memperoleh $\hat{\eta}, \hat{\beta}$.

**Tahap 5 — Optimasi Interval**
Penyelesaian masalah maksimasi $A_{\text{hier}}(\mathbf{T})$ dengan *constrained optimization* (sequential quadratic programming atau genetic algorithm untuk kasus multi-modal).

**Tahap 6 — Validasi Simulasi Monte Carlo**
Verifikasi robustnes dengan simulasi 10.000–100.000 jalur degradasi untuk mengkuantifikasi confidence interval ketersediaan.

**Tahap 7 — Implementasi Bertahap (*Phased Roll-out*)**
Pilot pada satu sub-fleet, monitoring 90 hari, penyesuaian parameter.

**Tahap 8 — Audit & Continuous Improvement**
*Loop* tahunan berbasis KPI: *Dispatch Reliability*, *Schedule Reliability*, *Maintenance Cost per Flight Hour* (MCFH).

Diagram alir logika keputusan mengikuti:

$$\text{Trigger Check} \rightarrow \text{Failure Mode Identified?} \rightarrow \text{Ya: Schedule Corrective} \rightarrow \text{Tidak: Continue Ops}$$

dengan *feedback loop* ke modul optimasi setiap kali data degradasi aktival menyimpang $>2\sigma$ dari prediksi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario**: Maskapai regional mengoperasikan 20 unit Airbus A320 dengan parameter industri berikut:

| Parameter | Nilai |
|-----------|-------|
| $T_{\text{op}}^{\text{total}}$ (horizon) | 8 tahun |
| $\hat{\eta}$ (Weibull) | 18.000 flight hours |
| $\hat{\beta}$ | 2.3 (wear-out dominan) |
| $T_A$ awal | 500 flight hours |
| $T_C$ awal | 20 bulan |
| $T_D$ awal | 8 tahun |
| $\tau_A, \tau_B, \tau_C, \tau_D$ | 24 h, 96 h, 720 h, 2.400 h |
| $\alpha$ (eskalasi parsial) | 0,00015 |

**Langkah 1 — Hitung jumlah check sepanjang horizon (8 tahun = ≈35.040 flight hours per unit, asumsi rata-rata 4.380 FH/tahun).**

$$N_A = \left\lfloor \frac{35.040}{500} \right\rfloor = 70 \text{ checks}$$

$$N_C = \left\lfloor \frac{96 \text{ bulan}}{20 \text{ bulan}} \right\rfloor = 4 \text{ checks}$$

$$N_D = \left\lfloor \frac{8 \text{ tahun}}{8 \text{ tahun}} \right\rfloor = 1 \text{ check}$$

**Langkah 2 — Hitung total downtime akibat check terjadwal.**

$$\text{DT}_{\text{sched}} = (70 \times 24) + (4 \times 720) + (1 \times 2.400) = 1.680 + 2.880 + 2.400 = 6.960 \text{ jam}$$

**Langkah 3 — Hitung downtime unscheduled (Mtbf & Mdrt).**

Asumsi MTBUR (*Mean Time Between Unscheduled Removals*) = 850 FH dan MDRT (*Mean Downtime for Repair*) = 18 jam:

$$N_{\text{unsched}} = \left\lfloor \frac{35.040}{850} \right\rfloor \approx 41 \text{ kejadian}$$

$$\text{DT}_{\text{unsched}} = 41 \times 18 = 738 \text{ jam}$$

**Langkah 4 — Ketersediaan total.**

$$A_{\text{base}} = \frac{35.040}{35.040 + 6.960 + 738} = \frac{35.040}{42.738} = 0{,}8199 \;(81{,}99\%)$$

**Langkah 5 — Efek refurbishment parsial mature-run.**

Probabilitas refurbishment parsial pada tahun ke-4 (mid-cycle D):

$$P_{\text{partial}} = 1 - e^{-0{,}00015 \times 4 \times 4.380} = 1 - e^{-2{,}628} = 0{,}928$$

Durasi refurbishment parsial: $\tau_{\text{partial}} = 360$ jam. Tambahan downtime:

$$\text{DT}_{\text{partial}} = 0{,}928 \times 360 \approx 334 \text{ jam}$$

$$A_{\text{adj}} = \frac{35.040}{35.040 + 6.960 + 738 + 334} = \frac{35.040}{43.072} = 0{,}8136$$

**Langkah 6 — Optimasi $T_A$ terhadap ketersediaan.**

Misulkan direlaksasi $T_A$ dari 500 ke 600 FH (sesuai izin OEM):

$$N_A^{\text{new}} = \left\lfloor \frac{35.040}{600} \right\rfloor = 58$$

$$\Delta\text{DT} = (70 - 58) \times 24 = 288 \text{ jam (penghematan)}$$

$$A_{\text{opt}} = \frac{35.040