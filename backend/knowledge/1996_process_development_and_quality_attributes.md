# 1996 — Process Intensification dan Quality-by-Design pada Operasi Freeze-Drying (Lyophilisasi) Farmasi untuk Stabilitas Nanomedicine

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Manajemen Proses Manufaktur Farmasi
**Topik Spesialis:** Process development and quality attributes for the freeze-drying process in pharmaceuticals, biopharmaceuticals and nanomedicine delivery: a state-of-the-art review
**Jurnal & Sitasi Utama:** Sagar R. Pardeshi, Nilesh S. Deshmukh, Darshan R. Telange (2023). *Future Journal of Pharmaceutical Sciences*. DOI: [https://doi.org/10.1186/s43094-023-00551-8](https://doi.org/10.1186/s43094-023-00551-8)
**Sitasi Pendukung:** Abdulrahman A. Halwani (2022). *Pharmaceutics*. DOI: [https://doi.org/10.3390/pharmaceutics14010106](https://doi.org/10.3390/pharmaceutics14010106)

---

## 1. Pendahuluan dan Konteks Industri

Industri farmasi global saat ini menghadapi tantangan fundamental dalam *process intensification* ketika melakukan *scale-up* formulasi menjadi volume komersial. Pardeshi, Deshmukh, dan Telange (2023) dalam *state-of-the-art review* mereka menyoroti bahwa strategi penghilangan pelarut konvensional menjadi *bottleneck* utama bagi stabilitas jangka panjang sediaan farmasi, biopharmaceuticals, dan nanoderived therapeutics. Lebih dari 50% produk yang disetujui oleh US FDA di antara 300 perusahaan farmasi yang terdaftar menggunakan teknologi freeze-drying (lyophilisasi) sebagai operasi kritis untuk menjamin shelf-life produk biologi dan molekul aktif yang termolabil.

Konteks industri ini memiliki urgensi operasional yang tinggi karena tiga hal. Pertama, produk biologis seperti antibodi monoklonal, protein terapeutik, dan formulasi liposom/nano-suspensi memiliki profil degradasi yang sangat sensitif terhadap suhu dan shear stress; freeze-drying adalah satu-satunya metode preservasi yang mempertahankan integritas molekuler tanpa thermal stress berlebih. Kedua, regulator (FDA, EMA, BPOM) secara eksplisit mendorong adopsi paradigma *Quality-by-Design* (QbD) untuk menggantikan pendekatan *quality-by-testing* tradisional, sebagaimana ditegaskan dalam ICH Q8(R2), Q9, dan Q10 guidelines. Ketiga, dari perspektif ekonomi, biaya produksi freeze-drying tinggi (dapat mencapai 40–50% dari total biaya produksi vial steril), sehingga optimalisasi siklus menjadi krusial untuk keberlanjutan komersial produk.

Halwani (2022) melengkapi lanskap ini dengan menunjukkan bahwa *pharmaceutical nanomedicines* — termasuk polymeric nanoparticles, solid lipid nanoparticles (SLN), nanostructured lipid carriers (NLC), dan nanocrystals — merupakan frontier inovasi yang membutuhkan integrasi operasi freeze-drying dengan strategi nanocarrier untuk menjawab masalah konvensional seperti *burst release*, bioavailabilitas rendah, dan target delivery. Sinergi antara teknologi nano dan lyophilisasi membuka *value proposition* berupa sediaan yang stabil, rekonstitutable, dan memiliki *controlled release* yang presisi. Dengan demikian, modul ini menyintesiskan kedua literatur untuk membangun kerangka engineering yang aplikatif bagi insinyur industri farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Laju Sublimasi (Primary Drying)

Mekanisme inti pada tahap *primary drying* adalah sublimasi es dari fase padat menjadi uap air pada tekanan rendah. Laju sublimasi per vial direpresentasikan oleh persamaan *heat and mass transfer coupled* yang diformalisasikan oleh Pikal (1985) dan diadopsi dalam review Pardeshi et al. (2023):

$$\frac{dm}{dt} = \frac{P_{sat}(T_s) - P_{ch}}{R_p} = \frac{A_p \cdot (P_{sat}(T_s) - P_{ch})}{R_p}$$

di mana:
- $dm/dt$ = laju sublimasi (kg/s)
- $P_{sat}(T_s)$ = tekanan uap jenuh pada temperatur permukaan produk (Pa)
- $P_{ch}$ = tekanan ruang (chamber pressure) (Pa)
- $R_p$ = resistansi perpindahan massa cake produk (Pa·m²·s/kg)
- $A_p$ = luas area sublimasi (m²)

### 2.2 Neraca Energi pada Rak (Shelf)

Flux kalor dari rak ke vial diberikan oleh hukum Fourier konduksi:

$$Q = \frac{T_{shelf} - T_s}{R_s}$$

dengan $R_s$ adalah resistansi termal antara shelf dan vial (m²·K/W). Pada kondisi steady-state, kalor yang masuk ke vial harus sama dengan kalor laten sublimasi:

$$Q \cdot A_v = \Delta H_s \cdot \frac{dm}{dt}$$

di mana $\Delta H_s \approx 2808$ kJ/kg adalah panas laten sublimasi air pada tekanan vakum standar, dan $A_v$ adalah luas penampang vial.

### 2.3 Formulasi Resistansi Total

Resistansi total proses $R_{total}$ merupakan kombinasi resistansi dry layer, resistansi vial, dan resistansi stopper:

$$R_{total} = R_{dry} + R_{vial} + R_{stopper}$$

dengan korelasi empiris untuk dry-layer resistance menurut Pikal:

$$R_{dry} = R_{dry,0} + \frac{A_1 + A_2 \cdot l}{1 + e^{(l - A_3)/A_4}}$$

di mana $l$ adalah ketebalan dry layer yang tumbuh seiring waktu, dan parameter $A_i$ bersifat formulasi-spesifik.

### 2.4 Degradasi Termal — Persamaan Arrhenius

Untuk memprediksi kehilangan potensi produk selama *primary drying*, digunakan model kinetika orde satu dengan pendekatan Arrhenius:

$$\ln(k) = \ln(A) - \frac{E_a}{R \cdot T}$$

$$k = A \cdot e^{-E_a/(R \cdot T)}$$

di mana $k$ adalah konstanta laju degradasi, $A$ adalah pre-exponential factor, $E_a$ adalah energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), dan $T$ adalah temperatur absolut (K). Integrasi terhadap waktu siklus menghasilkan fraksi produk yang terdegradasi:

$$F_{deg} = 1 - e^{-k \cdot t_{cycle}}$$

### 2.5 Design Space QbD

Paradigma QbD yang dianjurkan regulator memerlukan pendefinisian *Design Space* sebagai fungsi respon $Y$ terhadap variabel kritis $X_1, X_2, ..., X_n$. Untuk freeze-drying, variabel kritis utama adalah $T_{shelf}$, $P_{ch}$, dan durasi *primary drying*. Model Response Surface yang lazim digunakan:

$$Y = \beta_0 + \sum_{i=1}^{n} \beta_i X_i + \sum_{i=1}^{n} \beta_{ii} X_i^2 + \sum_{i<j} \beta_{ij} X_i X_j + \epsilon$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi proses freeze-drying dengan kerangka QbD mengikuti arsitektur enam tahapan yang secara sistematis disajikan oleh Pardeshi et al. (2023):

**Tahap 1 — Characterization of Target Product Profile (QTPP).** Insinyur mendefinisikan spesifikasi kualitas produk akhir: dosis, kemurnian, stabilitas pada suhu penyimpanan (2–8°C atau 25°C), waktu rekonstitusi (< 5 menit), dan kadar air residual (< 1–3% w/w untuk biologi, < 0,5% untuk nanocrystals).

**Tahap 2 — Identification of Critical Quality Attributes (CQA).** CQA yang dimonitor secara *in-process* antara lain: suhu produk $T_p$ (probe thermocouple), kadar air residual (Karl Fischer titration atau NIR), reconstituted cake appearance (visual inspection), dan pH.

**Tahap 3 — Risk Assessment menggunakan FMEA.** Failure Mode and Effects Analysis diterapkan untuk mengidentifikasi risiko vial cracking, melt-back, collapse, dan excessive residual moisture.

**Tahap 4 — Design of Experiment (DoE).** Matrix eksperimen fractional factorial atau central composite design digunakan untuk memetakan hubungan $T_{shelf}$, $P_{ch}$, dan ramp rate terhadap $T_p$ dan laju sublimasi.

**Tahap 5 — Process Analytical Technology (PAT).** Sensor *inline* berupa Pirani gauge, capacitance manometer, thermocouple array, dan Tunable Diode Laser Absorption Spectroscopy (TDLAS) untuk monitoring water vapor mass flow secara *real-time*.

**Tahap 6 — Continuous Verification & Control Strategy.** Implementasi *supervisory control* berbasis PLC/SCADA dengan algoritma feedback PID untuk menjaga $T_p$ di bawah $T_{collapse}$ (umumnya $-32°C$ untuk formulasi amorf, $-10°C$ untuk formulasi kristalin).

**Diagram alir proses (Gambaran SOP):**

```
[Formulasi Aseptik] → [Filling & Stoppering Parsial] → [Loading Chamber]
        ↓
[Freezing Step] (Ramp -1°C/min → -40°C, hold 2 jam)
        ↓
[Primary Drying] (Shelf -25°C, Chamber 10 Pa, hingga Pirani = CM)
        ↓
[Secondary Drying] (Shelf ramp 0,2°C/min → 30°C, Chamber 5 Pa)
        ↓
[Stoppering pada tekanan inert N₂] → [Vial Sealing]
        ↓
[Unloading + Leak Testing + Visual Inspection]
```

Penerapan SOP ini harus mengikuti pedoman cGMP (21 CFR Part 211), Annex 1 EU GMP untuk manufaktur steril, dan ISO 15378 untuk material packaging farmasi primer.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Industri

Studi kasus: Produksi *lyophilized monoclonal antibody* (mAb) dalam vial 10 mL, kapasitas batch 10.000 vial.

| Parameter | Nilai | Simbol |
|---|---|---|
| Shelf temperature | $-25°C = 248{,}15$ K | $T_{shelf}$ |
| Chamber pressure | 10 Pa | $P_{ch}$ |
| Resistansi dry-layer | $1{,}0 \times 10^6$ Pa·m²·s/kg | $R_p$ |
| Luas sublimasi per vial | $3{,}5 \times 10^{-4}$ m² | $A_p$ |
| Filling volume | 5 mL (5 g) | — |
| Target moisture | 1% w/w | — |
| Target collapse temperature | $-32°C$ | $T_{col}$ |
| Energi aktivasi | 75 kJ/mol | $E_a$ |

### 4.2 Perhitungan Tekanan Uap Jenuh

Tekanan uap jenuh es dihitung menggunakan persamaan Goff-Gratch atau korelasi Pikal (1985):

$$P_{sat}(T_s) = \exp\left(28{,}916 - 6132{,}7/T_s - 4{,}58 \cdot \ln(T_s)\right)$$

Untuk $T_s = 240$ K ($-33°C$, aman di bawah $T_{col}$):

$$P_{sat} = \exp(28{,}916 - 6132{,}7/240 - 4{,}58 \cdot \ln 240)$$
$$= \exp(28{,}916 - 25{,}553 - 26{,}607) = \exp(-23{,}244)$$
$$\approx 8{,}51 \text{ Pa}$$

### 4.3 Laju Sublimasi Per Vial

$$\frac{dm}{dt} = \frac{A_p \cdot (P_{sat} - P_{ch})}{R_p} = \frac{(3{,}5 \times 10^{-4})(8{,}51 - 10)}{1{,}0 \times 10^6}$$

Karena $P_{sat} < P_{ch}$, maka $dm/dt$ akan menjadi *imposingly negative* — koreksi dilakukan dengan menaikkan $T_s$ menjadi 245 K atau menurunkan $P_{ch}$ menjadi 5 Pa. Dengan $T_s = 245$ K:

$$P_{sat}(245) = \exp(28{,}916 - 6132{,}7/245 - 4{,}58 \cdot \ln 245) \approx 15{,}4 \text{ Pa}$$

$$\frac{dm}{dt} = \frac{(3{,}5 \times 10^{-4})(15{,}4 - 5)}{1{,}0 \times 10^6} = 3{,}64 \times 10^{-9} \text{ kg/s per vial}$$

Dikonversi: $3{,}64 \times 10^{-9} \times 3600 = 1{,}31 \times 10^{-5}$ kg/jam per vial ≈ 0,0131 g/jam per vial.

### 4.4 Durasi Primary Drying

Total massa air yang harus disublimasikan dari 5 mL larutan (konsentrasi solid 5% w/v) ≈ 4,75 g:

$$t_{primary} = \frac{m_{total}}{dm/dt} = \frac{4{,}75 \times 10^{-3}}{3{,}64 \times 10^{-9}} \approx 1{,}305 \times 10^6 \text{ s} \approx 362 \text{ jam}$$

Angka ini terlalu lama → indikasi perlunya optimasi dengan formulasi cryoprotectant (trehalosa/sukrosa 5–10%) yang menurunkan $R_p$, atau penggunaan *controlled nucleation* untuk memperseragamkan ukuran kristal es dan memperkecil resistansi dry layer menjadi $\sim 4 \times 10^5$.

Dengan $R_p = 4 \times 10^5$ Pa·m²·s/kg:

$$t_{primary} = \frac{4{,}75 \times 10^{-3} \cdot 4 \times 10^5}{3{,}5 \times 10^{-4}
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
