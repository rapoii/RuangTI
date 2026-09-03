# 1402 — Penentuan Kelarutan Regorafenib Monohidrat (Obat Antikanker Kolorektal) dalam CO₂ Superkritis: Pemodelan Eksperimental dan Termodinamika untuk Rekayasa Proses Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Determination of Regorafenib monohydrate (colorectal anticancer drug) solubility in supercritical CO₂: Experimental and thermodynamic modeling
**Jurnal & Sitasi Utama:** Gholamhosheen Sodeifian, Ratna Surya Alwi, Fatemeh Sodeifian (2024). *Heliyon*. DOI: [https://doi.org/10.1016/j.heliyon.2024.e29049](https://doi.org/10.1016/j.heliyon.2024.e29049)
**Sitasi Pendukung:** Shiva Bakshi, Vinod Kumar Paswan, Satya Prakash Yadav (2023). *Frontiers in Nutrition*. DOI: [https://doi.org/10.3389/fnut.2023.1194679](https://doi.org/10.3389/fnut.2023.1194679)

---

## 1. Pendahuluan dan Konteks Industri

Kanker kolorektal (CRC) merupakan salah satu neoplasma ganas dengan tingkat mortalitas tertinggi secara global, menduduki peringkat ketiga penyebab kematian terkait kanker di seluruh dunia menurut data GLOBOCAN. Regorafenib (REG), suatu inhibitor multikinase oral yang dikembangkan oleh Bayer HealthCare Pharmaceuticals dengan nama dagang Stivarga®, telah disetujui oleh FDA pada tahun 2012 untuk terapi pasien CRC metastasis yang telah resisten terhadap lini perawatan standar. Namun demikian, Regorafenib memiliki kelarutan intrinsik yang sangat rendah dalam air (< 0,001 mg/mL) sehingga diklasifikasikan dalam *Biopharmaceutics Classification System* (BCS) kelas II dan IV, yang menjadi tantangan besar dalam formulasi farmasi, bioavailabilitas oral, dan konsistensi批次 produksi.

Sodeifian, Alwi, dan Sodeifian (2024) dalam publikasi mereka di jurnal *Heliyon* dengan DOI [10.1016/j.heliyon.2024.e29049](https://doi.org/10.1016/j.heliyon.2024.e29049) melaporkan, untuk pertama kalinya, pengukuran kelarutan Regorafenib monohidrat dalam CO₂ superkritis (ScCO₂) pada rentang tekanan dan temperatur yang bervariasi. Nilai kelarutan minimum mole fraksi tercatat sebesar $3{,}06 \times 10^{-7}$, sedangkan nilai maksimum tercapai sebesar $6{,}44 \times 10^{-6}$ pada kondisi 338 K dan 27 MPa. Temuan ini memiliki signifikansi strategis bagi industri farmasi karena ScCO₂ menawarkan jalur proses *green chemistry* yang menggantikan pelarut organik toksik (seperti aseton, diklorometana, atau kloroform) yang selama ini digunakan dalam proses kristalisasi, *co-precipitation*, dan rekayasa partikel obat. Dari perspektif Teknik Industri, data kelarutan ini menjadi input fundamental untuk desain *supercritical fluid extraction* (SFE), *supercritical antisolvent* (SAS), dan *Rapid Expansion of Supercritical Solutions* (RESS) — tiga proses unit kritikal dalam manufaktur farmasi modern.

Konteks ekonomi industri sangat relevan: pasar global *supercritical fluid technology* untuk aplikasi farmasi diproyeksikan mencapai USD 1,8 miliar pada tahun 2028, dengan tingkat pertumbuhan majemuk (CAGR) > 8%. Regorafenib memiliki harga jual sekitar USD 6.000–8.000 per包装 untuk persediaan 28 hari pada dosis 160 mg/hari, sehingga efisiensi proses produksi dan yield formulasi berdampak langsung pada margin keuntungan dan aksesibilitas pasien. Lebih lanjut, korelasi dengan studi Bakshi, Paswan, dan Yadav (2023) yang dipublikasikan di *Frontiers in Nutrition* (DOI: [10.3389/fnut.2023.1194679](https://doi.org/10.3389/fnut.2023.1194679)) tentang formulasi infant dan mikrobiota gut menunjukkan bahwa prinsip rekayasa partikel, bioavailabilitas zat aktif, dan penggunaan teknologi non-termal seperti ScCO₂ juga semakin diaplikasikan untuk enkapsulasi nutrisi fungsional (probiotik, prebiotik, HMOs) dalam industri makanan bayi premium. Sinergi lintas-sektor ini memperkuat urgensi adopsi teknologi superkritis sebagai platform pemrosesan terpadu untuk industri *nutraceutical* dan farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan kelarutan padatan dalam ScCO₂ memerlukan dua kategori pendekatan: (a) model empiris dan semi-empiris yang mengkorelasikan data kelarutan dengan densitas fluida melalui parameter fitting, dan (b) model termodinamika berbasis kesetimbangan fasa (*Solid-Liquid Equilibrium*, SLE) yang diturunkan dari persamaan keadaan. Sodeifian et al. (2024) mengevaluasi 25 model empiris dengan 3–8 parameter serta model berbasis SLE yang dikombinasikan dengan *association models*.

### 2.1. Model Empiris dan Semi-Empiris

Model-model ini umumnya mengikuti bentuk fungsional:

$$y_2 = \frac{(P^{ref})^{a_1} \cdot T^{a_2} \cdot \exp(a_3 \cdot T + a_4 \cdot P/T + a_5)}{(P^{ref})^{a_6} \cdot \exp(a_7 \cdot \rho + a_8 / T \cdot \rho)}$$

di mana $y_2$ adalah kelarutan solute dalam mole fraksi, $\rho$ adalah densitas ScCO₂ (kg/m³), $P$ adalah tekanan sistem (MPa), $T$ adalah temperatur (K), dan $a_1$ hingga $a_8$ adalah parameter yang fitting melalui regresi non-linear.

Model-model yang disoroti dalam paper ini antara lain:

**Model Gordillo et al.** dengan AARD = 13,2%:

$$\ln(y_2) = a_1 + a_2 \cdot P + a_3 \cdot P^2 + a_4 \cdot P/T + a_5 \cdot P^2/T$$

**Model Reddy et al.** dengan AARD = 13,5%:

$$\ln(y_2) = (a_1 + a_2 \cdot P) \cdot \ln(\rho) + a_3 \cdot P + a_4 \cdot P^2 + a_5$$

### 2.2. Model SLE (*Solid-Liquid Equilibrium*)

Pendekatan termodinamika ketat didasarkan pada kondisi kesetimbangan fasa padat-melarut:

$$\ln(y_2) = -\frac{\Delta H^{fus}}{R}\left(\frac{1}{T} - \frac{1}{T_m}\right) - \frac{\Delta V^{fus}}{RT}(P - P^{ref}) + \ln\left(\frac{f_2^{S}}{f_2^{L}}\right)$$

di mana:
- $\Delta H^{fus}$ = entalpi peleburan solid (J/mol)
- $\Delta V^{fus}$ = perubahan volume saat peleburan (m³/mol)
- $T_m$ = titik leleh solute (K)
- $R$ = konstanta gas universal (8,314 J/mol·K)
- $f_2^{S}$ dan $f_2^{L}$ = fugasitas solid dan liquid

### 2.3. Model Asosiasi

Model asosiasi yang ditingkatkan oleh Sodeifian dkk. menggunakan persamaan kubik untuk mendeskripsikan perilaku asosiasi molekul ScCO₂ dengan gugus polar solute:

$$\frac{P}{RT} = \frac{\rho}{M} \cdot \frac{1 + \eta + \eta^2 - \eta^3}{(1-\eta)^3} - \frac{1}{RT}\left(\frac{\partial a^{res}}{\partial \rho}\right)_T$$

dengan $\eta = \frac{b \rho}{4 M}$, dan kontribusi asosiasi:

$$a^{assoc} = -RT \sum_i \rho_i \sum_j \left[\ln\left(1 + X^j \cdot \Delta^{ij}\right) - \frac{X^j \cdot \Delta^{ij}}{2} + \frac{X^j \cdot \Delta^{ij}}{2}\right]$$

### 2.4. Ukuran Kesetiaan Model

Deviasi rata-rata absolut relatif (*Average Absolute Relative Deviation*, AARD) digunakan sebagai metrik kualitas fitting:

$$\text{AARD}(\%) = \frac{100}{N} \sum_{i=1}^{N} \left| \frac{y_2^{calc} - y_2^{exp}}{y_2^{exp}} \right|_i$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri untuk penentuan kelarutan dan proses ScCO₂ mengikuti protokol terstruktur berdasarkan Sodeifian et al. (2024):

### 3.1. Diagram Alir Proses Eksperimental

```
[Persiapan Sampel] → [Penimbangan REG presisi ±0,0001 g]
         ↓
[Pengisian Sel Kesetimbangan] → [Purging dengan CO₂]
         ↓
[Pengisian Pompa Tekanan Tinggi] → [Kompresi ke P operasi]
         ↓
[Penstabilan T dan P ±0,1 K, ±0,1 MPa]
         ↓
[Pencampuran Magnetik 60 menit]
         ↓
[Sampling melalui Katup Pengatur Tekanan]
         ↓
[Pengumpulan di Trap UV-Vis / Gravimetri]
         ↓
[Analisis Data → Korelasi Model]
```

### 3.2. Standar Prosedur Operasional (SOP) Detail

**Tahap 1 — Kalibrasi Sistem:**
- Verifikasi akurasi sensor tekanan (rentang 8–35 MPa) menggunakan dead-weight tester bersertifikat NIST
- Kalibrasi termokopel Tipe K dengan akurasi ±0,1 K pada rentang 308–338 K
- Validasi densitas ScCO₂ melalui NIST REFPROP v10.0

**Tahap 2 — Pengukuran Kelarutan:**
1. Masukkan 1,0 g Regorafenib monohidrat (kemurnian ≥99,5%, terverifikasi HPLC) ke dalam sel kesetimbangan volume 100 mL
2. Evakuasi sistem hingga vakum < 0,01 MPa
3. Isi dengan CO₂ kemurnian 99,99% hingga tekanan awal
4. Naikkan tekanan dan temperatur secara bertahap menuju set-point operasi
5. Pertahankan kondisi selama 60 menit dengan pengadukan magnetik 300 rpm
6. Sampling fase fluida melalui katup ekspansi ke tabung pengumpul yang telah ditimbang

**Tahap 3 — Penentuan Konsentrasi:**
- Gravimetri: penimbangan presisi analitik (resolusi 0,00001 g)
- Validasi silang dengan spektrofotometri UV-Vis pada $\lambda = 260$ nm (sesuai puncak absorbsi REG)

**Tahap 4 — Pemodelan & Validasi:**
- Fitting 25 model empiris menggunakan *Levenberg-Marquardt algorithm*
- Validasi dengan leave-one-out cross-validation (LOOCV)
- Penentuan AARD, $R^2$, dan *Root Mean Square Error* (RMSE)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan: Desain Skala Pilot Plant

**Skenario:** Sebuah pabrik farmasi ingin memproduksi partikel Regorafenib sub-mikron (target ukuran 200–500 nm) melalui proses SAS (*Supercritical Antisolvent*) dengan kapasitas 50 kg/batch.

**Data Input:**
- Kelarutan REG dalam ScCO₂ pada 338 K, 27 MPa: $y_2 = 6{,}44 \times 10^{-6}$
- Densitas ScCO₂ pada kondisi tersebut: $\rho = 871{,}3$ kg/m³ (NIST REFPROP)
- Massa molar ScCO₂ (CO₂): $M_{CO_2} = 44{,}01$ g/mol
- Massa molar REG monohidrat: $M_{REG \cdot H_2O} = 482{,}82$ g/mol

**Langkah Perhitungan:**

**Langkah 1:** Konversi kelarutan dari mole fraksi ke konsentrasi massa:

$$C_{REG} = y_2 \cdot \rho \cdot \frac{M_{REG}}{M_{CO_2}}$$

$$C_{REG} = 6{,}44 \times 10^{-6} \times 871{,}3 \times \frac{482{,}82}{44{,}01}$$

$$C_{REG} = 6{,}44 \times 10^{-6} \times 871{,}3 \times 10{,}97 = 0{,}0616 \text{ kg/m}^3$$

**Langkah 2:** Volume ScCO₂ yang dibutuhkan untuk melarutkan 50 kg REG (dengan faktor efisiensi 1,3 untuk margin operasional):

$$V_{ScCO_2} = \frac{m_{REG}}{C_{REG}} \times 1{,}3 = \frac{50}{0{,}0616} \times 1{,}3 = 1055{,}2 \text{ m}^3$$

**Langkah 3:** Estimasi konsumsi energi kompresi:

Asumsi kompresi isotermal reversibel:

$$W = n_{CO_2} \cdot RT \ln\left(\frac{P_2}{P_1}\right)$$

dengan $n_{CO_2} = \frac{1055{,}2 \times 871{,}3}{44{,}01} = 20{,$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
