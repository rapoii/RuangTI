# 2124 — Jaringan Sensor Nirkabel dan Teknologi Emerging untuk Pemantauan Proses Liofilisasi Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Liofilisasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan proses pengeringan beku yang menjadi gold standard industri biofarmasi untuk menstabilkan produk termolabil seperti protein monoklonal, vaksin mRNA, dan antibiotik beta-laktam. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab *"Wireless Sensor Networks for Lyophilization"* pada buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (DOI: 10.1002/9783527850303.ch4), lebih dari 50% produk biofarmasi baru yang dikembangkan sejak 2020 memerlukan proses liofilisasi, menjadikan siklus pengembangan produk yang efisien dan terkontrol sebagai kebutuhan strategis.

Urgensi penerapan Wireless Sensor Networks (WSN) muncul karena keterbatasan metode konvensional berbasis thermocouple kawat (T-type) yang memiliki kelemahan: (1) konduksi termal melalui kabel menyebabkan artefak pengukuran hingga 2–4 °C, (2) membatasi jumlah vial yang dapat dipantau (umumnya hanya 1–3 vial sentinel dari ribuan vial dalam satu batch), dan (3) tidak mampu menangkap heterogenitas spasial dalam chamber. Meza-Galvan et al. (2026) menunjukkan bahwa nilai koefisien transfer panas vial ($\overline{K_v}$) yang dihitung dari data thermocouple kawat sering bias 15–25% terhadap nilai riil karena efek kalibrasi ulang (recalibration effect) yang melekat pada metode mansoldi.

Dari sisi ekonomi, satu batch produksi liofilisasi untuk produk bernilai tinggi (misalnya antibodi monoklonal untuk onkologi) bernilai USD 5–50 juta. Kegagalan batch akibat kontrol proses yang suboptimal berdampak langsung pada margin operasional. Artikel pelengkap karya Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) tentang *"Emerging Technologies in Pharmaceutical Freeze-Drying"* menegaskan bahwa integrasi WSN dengan teknik Process Analytical Technology (PAT) seperti Tunable Diode Laser Absorption Spectroscopy (TDLAS), spektroskopi Raman, dan soft-sensor berbasis Machine Learning mampu mendukung strategi Quality-by-Design (QbD) yang diwajibkan FDA melalui panduan *PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (2004) dan ICH Q8(R2).

Konteks industri ini menuntut pendekatan *real-time monitoring* yang mampu memberikan data tersinkronisasi pada ribuan vial dengan latensi rendah, konsumsi daya minimal, dan keandalan tinggi di lingkungan vakum (tekanan 0,1–100 Pa) serta suhu ekstrem (-50 °C hingga +40 °C). Implementasi WSN menjawab kebutuhan ini dengan menyediakan mesh network yang resilient terhadap single-point failure.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Transfer Panas Vial Liofilisasi

Model dasar yang digunakan Meza-Galvan et al. (2026) untuk menentukan koefisien transfer panas vial adalah persamaan keseimbangan energi satu dimensi:

$$q_p = \frac{dQ}{dt} = \overline{K_v} \cdot A_v \cdot (T_{shelf} - T_p)$$

di mana $q_p$ adalah laju kalor (W), $\overline{K_v}$ adalah koefisien transfer panas rata-rata vial (W·m⁻²·K⁻¹), $A_v$ adalah luas penampang internal vial (m²), $T_{shelf}$ suhu rak, dan $T_p$ suhu produk pada posisi interface sublimasi.

Laju sublimasi massa dihitung melalui konservasi energi yang mengasumsikan seluruh kalor yang masuk digunakan untuk sublimasi:

$$\frac{dm}{dt} = \frac{\overline{K_v} \cdot A_v \cdot (T_{shelf} - T_p)}{\Delta H_{sub}}$$

dengan $\Delta H_{sub}$ sebagai entalpi sublimasi es (≈ 2.838 MJ·kg⁻¹ pada -20 °C). Formulasi ini memungkinkan estimasi *batch average* dan *vial-by-vial* resistance.

### 2.2 Resistansi Transfer Massa dan Tekanan Parsial

Untuk melengkapi neraca energi, diperlukan model transfer massa melalui dried layer:

$$\frac{dm}{dt} = \frac{A_v \cdot (p_{w,i} - p_{w,c})}{R_p + R_s}$$

di mana $p_{w,i}$ tekanan uap air pada interface sublimasi (fungsi Arrhenius dari $T_p$), $p_{w,c}$ tekanan uap air di chamber, $R_p$ resistansi produk (dried cake), dan $R_s$ resistansi stopper vial. Tekanan uap pada interface sublimasi mengikuti persamaan Goff-Gratch atau disederhanakan:

$$p_{w,i}(T) = \exp\left(27.405 - \frac{6141.4}{T + 273.15}\right) \quad \text{[Pa]}$$

### 2.3 Arsitektur Jaringan Sensor Nirkabel

Meza-Galvan et al. (2026) menjelaskan topologi WSN dengan model konsumsi energi mengikuti *first-order radio model* Heinzelman:

$$E_{tx}(k,d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{n}$$

$$E_{rx}(k) = E_{elec} \cdot k$$

dengan $k$ ukuran paket (bit), $d$ jarak transmisi, $E_{elec}$ energi elektronika (≈ 50 nJ/bit), $\epsilon_{amp}$ amplifier (≈ 100 pJ/bit/m²), dan eksponen path-loss $n$ (umumnya 2–4 dalam chamber logam).

### 2.4 Penentuan $\overline{K_v}$ dengan Metode Gravimetri dan Smart Sensor

Kalibrasi $\overline{K_v}$ dilakukan melalui pendekatan sublimasi gravimetri yang diselesaikan dengan regresi non-linear Levenberg-Marquardt terhadap persamaan integral:

$$m(t) = m_0 - \frac{1}{\Delta H_{sub}} \int_0^t \overline{K_v}(\tau) \cdot A_v \cdot (T_{shelf}(\tau) - T_p(\tau)) \, d\tau$$

### 2.5 Soft-Sensor berbasis Machine Learning (Pendukung)

Artusio et al. (2026) menambahkan bahwa prediksi parameter proses dapat dilakukan menggunakan Gaussian Process Regression dengan fungsi kernel Radial Basis Function (RBF):

$$\hat{T}_p(t) = \sum_{i=1}^{N} \alpha_i \exp\left(-\frac{\|x_i - x_*\|^2}{2\ell^2}\right)$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam lini liofilisasi mengikuti kerangka Quality-by-Design (QbD) dengan tahapan sistematis:

**Tahap 1 — Risk Assessment & Design of Experiment (DoE).** Identifikasi Critical Process Parameters (CPP) dan Critical Quality Attributes (CQA) menggunakan Failure Mode and Effects Analysis (FMEA). Suhu rak, tekanan chamber, dan laju sublimasi ditetapkan sebagai CPP; kadar air residu (< 1,0%) serta aktivitas air (< 0,2) sebagai CQA.

**Tahap 2 — Deploy Sensor Node.** Sensor thermocouple nirkabel dengan transceiver ISM-band 433/915 MHz ditempatkan pada vial sentinel dan vial terdistribusi. Antena dipole mini dan shielding EMI dilakukan untuk meminimalkan interferensi dengan motor vakum dan sistem refrigerasi.

**Tahap 3 — Konfigurasi Topologi Mesh.** Node disusun dalam topologi mesh redundan (minimum 2 gateway) dengan protokol time-synchronized channel hopping (TSCH) untuk jaminan deterministik latensi < 100 ms.

**Tahap 4 — Akuisisi Data & Edge Computing.** Gateway melakukan agregasi data (1 Hz sampling), validasi outlier menggunakan *moving median filter*, dan komputasi edge untuk estimasi $\overline{K_v}$ vial-by-vial.

**Tahap 5 — Supervisory Control via SCADA/PAT.** Data dikirim ke Process Historian (PI, OPC-UA) dan divisualisasikan melalui dashboard real-time dengan alarm threshold dinamis.

**Tahap 6 — Continuous Verification & Release-by-Exception.** Berdasarkan guideline FDA PAT (2004), rilis batch dilakukan secara *real-time release* (RTR) dengan parameter kontrol dalam rentang desain (Design Space) yang tervalidasi.

Standar yang relevan: ISO 13408-3 (Aseptic processing), ASME BPE (Bagian rekayasa proses), ASTM E2503 (PAT standar), dan GAMP 5 untuk validasi sistem otomatis.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Vial 10R (volume 10 mL) berisi larutan protein 5 mL pada konsentrasi 25 mg/mL. Proses *primary drying* pada $T_{shelf} = -10$ °C, tekanan chamber $p_c = 10$ Pa.

**Langkah 1 — Parameter geometri dan fisik:**
- Diameter internal vial: $d_v = 24$ mm → $A_v = \pi \cdot (0,012)^2 = 4,52 \times 10^{-4}$ m²
- $\Delta H_{sub} = 2.838 \times 10^{6}$ J/kg
- Asumsi $T_p = -25$ °C (interface sublimasi), $\overline{K_v} = 18$ W·m⁻²·K⁻¹ (tipikal vial bottom-out)

**Langkah 2 — Laju kalor sublimasi per vial:**

$$q_p = 18 \cdot 4{,}52 \times 10^{-4} \cdot (-10 - (-25)) = 18 \cdot 4{,}52 \times 10^{-4} \cdot 15$$

$$q_p = 0{,}1221 \text{ W per vial}$$

**Langkah 3 — Laju sublimasi massa:**

$$\frac{dm}{dt} = \frac{0{,}1221}{2{,}838 \times 10^{6}} = 4{,}30 \times 10^{-8} \text{ kg/s} = 0{,}155 \text{ g/h per vial}$$

**Langkah 4 — Durasi primary drying untuk massa es 4 g:**

$$t_{dry} = \frac{4{,}0}{0{,}155} \approx 25{,}8 \text{ jam}$$

**Langkah 5 — Reduksi durasi monitoring dengan WSN:**
Jika WSN mengidentifikasi vial dengan deviasi $T_p$ ≥ 3 °C (menandai *batch heterogeneity*), sistem secara otomatis menurunkan $T_{shelf}$ ke -15 °C untuk vial tersebut (zonal control). Perhitungan ulang:

$$q_p^{new} = 18 \cdot 4{,}52 \times 10^{-4} \cdot (-15 - (-25)) = 0{,}0814 \text{ W}$$
$$\frac{dm}{dt}^{new} = \frac{0{,}0814}{2{,}838 \times 10^{6}} = 2{,}87 \times 10^{-8} \text{ kg/s} = 0{,}103 \text{ g/h}$$

Namun, throughput total meningkat 8–12% karena *overheating risk* pada vial-vial lambat diminimalkan, sehingga *safe Design Space* dapat dieksploitasi secara optimal (Meza-Galvan et al., 2026).

**Langkah 6 — ROI dan konsumsi energi WSN:**
Untuk batch 10.000 vial dengan daya rata-rata sensor 3 µW dan gateway 250 mW, total konsumsi energi WSN ≈ 30 W selama 26 jam = 0,78 kWh. Penghematan energi refrigeration akibat Design Space optimal: ≈ 250 kWh per batch. Dengan harga listrik USD 0,12/kWh, penghematan bersih ≈ USD 30 per batch — di samping avoidance of batch loss yang bernilai jutaan USD.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologis

Meza-Galvan et al. (2026) secara eksplisit mengakui beberapa keterbatasan: (a) drift kalibrasi jangka panjang pada MEMS thermocouple (hingga ±0,5 °C per bulan); (b) interferensi RF dari sistem *Clean-In-Place* (CIP) yang beroperasi pada 27 MHz; (c) kebutuhan validasi biocompatibilitas material sensor agar tidak mengkontaminasi produk; (d) biaya per-node WSN saat ini masih USD 50–150, menjadi investasi signifikan untuk lini yang membutuhkan > 5.000 node per chamber.

### 5.2 Perbandingan dengan Metode Konvensional

| Aspek | Thermocouple Kawat (Konvensional) | WSN dengan MEMS TC (Meza-Galvan 2026) |
|---|---|---|
| Akurasi suhu | ±1,5 °C (efek kalibrasi ulang) | ±0,3 °C |
| Jumlah vial termonitor | 1–3 sentinel | 50–500 vial |
| Latensi data | 5–10 s | 50–100 ms |
| Biaya instalasi | Rendah | Menengah-Tinggi |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
