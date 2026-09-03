# 2781 — Analisis Perilaku dan Karakteristik Kerak Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Nikel laterit merupakan sumber daya strategis yang menyumbang sekitar 60–70% produksi nikel global, namun distribusinya tidak merata dengan cadangan terbesar di Indonesia, Filipina, dan Kaledonia Baru (Dickson dkk., 2026). Proses High-Pressure Acid Leaching (HPAL) menjadi tulang punggung teknologi hidrometalurgi untuk mengekstraksi nikel dan kobalt dari bijih limonit dan saprolit kadar rendah, yang tidak layak diproses secara pirometalurgi konvensional. Pada instalasi HPAL industri, slurry bijih diasamkan dengan asam sulfat pekat pada suhu 240–260 °C dan tekanan 35–45 bar di dalam autoclave horizontal multi-kompartemen yang dilapisi *lead-lined* dan *titanium-clad steel*.

Namun, operasional HPAL menghadapi tantangan kritis berupa terbentuknya kerak (*scale*) pada dinding dan pipa penukar panas autoclave. Dickson dkk. (2026) mendokumentasikan bahwa kerak tersebut terutama tersusun atas campuran komplek *basic iron(III) sulfates* (misalnya hydronium jarosite, natrojarosite, dan potassium jarosite), *hydrated hematite* ($\alpha$-Fe$_2$O$_3 \cdot$ H$_2$O), *alunite* (KAl$_3$(SO$_4$)$_2$(OH)$_6$), *anhydrite* (CaSO$_4$), dan *amorphous silica*. Pembentukan kerak ini menurunkan koefisien perpindahan panas keseluruhan (overall heat transfer coefficient) secara signifikan, memaksa *ramp-down* produksi terjadwal (*shutdown*) untuk pembersihan mekanis dan kimiawi yang memakan waktu 5–14 hari, menurunkan *availability* pabrik dari target 92% menjadi 75–82%, serta meningkatkan biaya operasional unit (OPEX) hingga USD 15–25 per ton bijih yang diolah.

Secara ekonomi, dengan asumsi pabrik HPAL berkapasitas 30.000 tNi/tahun, setiap kehilangan 1% *availability* berarti opportunity loss revenue sekitar USD 3–4 juta per tahun. Kajian Andrameda dkk. (2024) menambahkan dimensi penting: residu HPAL (*leach residue*) mengandung sulfur residual (0,3–1,5% S) yang harus ditangani melalui proses *desulfurization* dengan agen seperti Na$_2$CO$_3$ atau Ca(OH)$_2$ sebelum *neutralization*, untuk mencegah emisi SO$_2$ saat *roasting* dan mengurangi volume kerak sekunder di downstream. Kedua perspektif ini menegaskan bahwa karakterisasi kerak bukan sekadar isu teknis, melainkan merupakan variabel strategis yang menentukan kelayakan finansial proyek HPAL.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pembentukan Kerak (*Scaling Kinetics*)

Mekanisme deposisi kerak di autoclave HPAL mengikuti model *progressive fouling* dengan resistansi termal yang terakumulasi terhadap waktu operasional. Resistansi fouling ($R_f$) didefinisikan sebagai:

$$R_f(t) = R_f^* \left(1 - e^{-t/\tau}\right)$$

di mana $R_f^*$ adalah resistansi fouling asimtotik (m$^2$K/W), $t$ adalah waktu operasi (jam), dan $\tau$ adalah konstanta waktu deposisi (jam). Untuk kerak berbasis jarosite di autoclave HPAL, Dickson dkk. (2026) melaporkan $\tau \approx 380{-}520$ jam tergantung pada komposisi slurry dan suhu.

### 2.2 Persamaan Arrhenius untuk Laju Pertumbuhan Kerak

Laju pertumbuhan massa kerak per satuan luas, $\dot{m}_s$ (kg/m$^2$·h), mengikuti hukum Arrhenius:

$$\dot{m}_s = k_0 \cdot e^{-E_a/RT} \cdot [H^+]^n \cdot [Fe^{3+}]^m$$

dengan $k_0$ adalah faktor frekuensi (kg/m$^2$·h), $E_a$ adalah energi aktivasi deposisi (kJ/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), $T$ adalah suhu operasi (K), sedangkan $[H^+]$ dan $[Fe^{3+}]$ adalah konsentrasi ion hidrogen dan besi(III) dalam larutan (mol/L). Eksponen $n$ dan $m$ berturut-turut berada pada rentang 0,8–1,2 dan 1,5–2,1 untuk sistem limonite-H$_2$SO$_4$.

### 2.3 Perpindahan Panas dengan Resistansi Kerak

Koefisien perpindahan panas keseluruhan, $U$ (W/m$^2$·K), dengan memperhitungkan resistansi fouling menjadi:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_s}{k_s} + R_f(t) + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal dan eksternal (W/m$^2$·K), $\delta_s$ adalah ketebalan kerak rerata (m), dan $k_s$ adalah konduktivitas termal kerak (W/m·K, tipikal 0,4–1,2 untuk matriks jarosite-hematit).

### 2.4 Neraca Massa Sulfur untuk Residu HPAL

Andrameda dkk. (2024) menurunkan neraca massa sulfur pada proses *roasting-reduction* residu HPAL pasca-desulfurisasi:

$$S_{residual} = S_0 \cdot \left(1 - \eta_{desulf}\right) \cdot e^{-k_r \cdot t_{roast}}$$

dengan $S_0$ adalah konsentrasi sulfur awal pada residu (%), $\eta_{desulf}$ adalah efisiensi desulfurisasi (fraksi, 0,85–0,95 untuk Na$_2$CO$_3$), $k_r$ adalah konstanta laju *roasting* (menit$^{-1}$), dan $t_{roast}$ adalah waktu tinggal tanur (jam).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan sistematis hasil riset Dickson dkk. (2026) dan Andrameda dkk. (2024) di lapangan membutuhkan SOP terstruktur sebagai berikut:

**Tahap 1: Karakterisasi Awal Feed dan Slurry.** Sampling bijih limonit dilakukan setiap 4 jam untuk uji *X-Ray Diffraction* (XRD), *X-Ray Fluorescence* (XRF), dan *Inductively Coupled Plasma – Optical Emission Spectroscopy* (ICP-OES). Parameter kritis: rasio MgO/SiO$_2$ < 0,6, Fe total > 40%, dan moisture content < 30%.

**Tahap 2: Pra-kondisioning dan *Pre-heating*.** Slurry dipanaskan dari 80 °C ke 180 °C di *pre-heater train* (3–4 shell-and-tube heat exchanger secara seri). Pada tahap ini, injeksi *seed* hematit sintetik (10–15 g/L) direkomendasikan untuk mengarahkan nukleasi Fe$_2$O$_3 \cdot$H$_2$O ke fase slurry, bukan ke dinding peralatan.

**Tahap 3: Leaching Utama di Autoclave.** Slurry memasuki autoclave multi-kompartemen pada suhu 245–255 °C, tekanan 38–42 bar, dengan waktu tinggal total 60–90 menit. Konsentrasi asam sulfat bebas dijaga pada 200–250 g/L H$_2$SO$_4$ dengan *acid-to-ore ratio* 0,35–0,45.

**Tahap 4: *Flash Cooling* dan Pengendalian Kerak.** Pelepasan tekanan mendadak ke *flash tank* (1,5–2,0 bar absolut) menurunkan suhu slurry ke 105–115 °C. Pemilihan orifice *flash* valve dengan geometri *convergent-divergent nozzle* direkomendasikan untuk meminimalisasi dekomposisi jarosite retrograde yang memperparah fouling.

**Tahap 5: Solid-Liquid Separation dan Desulfurisasi Residu.** Andrameda dkk. (2024) membuktikan bahwa penambahan Na$_2$CO$_3$ 8–12% (b/b) pada residu dengan suhu 600–700 °C selama 60–90 menit menurunkan sulfur dari 1,2% menjadi < 0,15%, sekaligus meningkatkan recovery Fe dan Ni dalam produk *roasting*.

**Tahap 6: Inspeksi dan *Shutdown Cleaning*.** Pemantauan $\Delta T$ pada heat exchanger dan trending $R_f$ mingguan; saat $R_f > 1,8 \times 10^{-3}$ m$^2$K/W, plant melakukan *controlled shutdown* dengan *chemical cleaning* menggunakan 5% HCl + 0,3% inhibitor pada 60 °C selama 8–12 jam.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Plant HPAL Kapasitas 30.000 tNi/tahun di Sulawesi Tenggara**

**Data Input Operasional:**
- Laju umpan bijih limonit: $F_{ore}$ = 95 ton/jam (solid basis)
- Konsentrasi slurry: 45% w/w solid
- Suhu operasi autoclave: $T$ = 523 K (250 °C)
- Tekanan: $P$ = 40 bar
- Asam sulfat bebas umpan: 220 g/L
- Recovery Ni target: $R_{Ni}$ = 94,5%
- Konsentrasi sulfur awal residu: $S_0$ = 1,18%

**Perhitungan 1: Resistansi Fouling Setelah 240 Jam Operasi**

Dengan parameter dari Dickson dkk. (2026): $R_f^*$ = $2,4 \times 10^{-3}$ m$^2$K/W dan $\tau$ = 440 jam:

$$R_f(240) = 2{,}4 \times 10^{-3} \cdot \left(1 - e^{-240/440}\right)$$
$$R_f(240) = 2{,}4 \times 10^{-3} \cdot (1 - 0,5795)$$
$$R_f(240) = 1{,}01 \times 10^{-3} \text{ m}^2\text{K/W}$$

**Perhitungan 2: Penurunan Koefisien Perpindahan Panas**

Asumsi $h_i$ = 8.500 W/m$^2$K, $h_o$ = 12.000 W/m$^2$K, $\delta_s$ = 0,002 m, $k_s$ = 0,8 W/m·K:

$$\frac{1}{U_0} = \frac{1}{8500} + \frac{0{,}002}{0{,}8} + \frac{1}{12000} = 1{,}18 \times 10^{-4} + 2{,}50 \times 10^{-3} + 8{,}33 \times 10^{-5}$$
$$\frac{1}{U_0} = 2{,}70 \times 10^{-3} \text{ m}^2\text{K/W} \Rightarrow U_0 = 370 \text{ W/m}^2\text{K}$$

Setelah fouling 240 jam:

$$\frac{1}{U_f} = 2{,}70 \times 10^{-3} + 1{,}01 \times 10^{-3} = 3{,}71 \times 10^{-3}$$
$$U_f = 269 \text{ W/m}^2\text{K}$$

Penurunan efektivitas perpindahan panas: $\Delta U/U_0 = (370-269)/370 = 27,3\%$. Hal ini berarti konsumsi uap (*steam*) di pre-heater meningkat sekitar 18–22% untuk mempertahankan suhu autoclave target, meningkatkan OPEX steam ~USD 1,4 juta/tahun.

**Perhitungan 3: Desulfurisasi Residu (Andrameda dkk., 2024)**

Dengan Na$_2$CO$_3$ 10% (b/b), suhu 650 °C, $t_{roast}$ = 75 menit, $\eta_{desulf}$ = 0,91, $k_r$ = 0,018 menit$^{-1}$:

$$S_{residual} = 1{,}18\% \cdot (1 - 0{,}91) \cdot e^{-0{,}018 \cdot 75}$$
$$S_{residual} = 1{,}18\% \cdot 0{,}09 \cdot e^{-1{,}35}$$
$$S_{residual} = 1{,}18\% \cdot 0{,}09 \cdot 0{,}259 = 0{,}0275\%$$

Turun 97,7% dari nilai awal, memenuhi standar lingkungan (<0,05% S) untuk disposal tailing dan mencegah pembentukan kerak sekunder sulfat di *neutralization circuit*.

**Perhitungan 4: Implikasi Ekonomi**

Total jam operasi turun dari 8.000 menjadi ~6.500 jam/tahun (-19%). Dengan harga nikel USD 18