# 2109 — Modul Autoclave Scaling dan Karakterisasi pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel sulfate hexahydrate, $\text{NiSO}_4 \cdot 6\text{H}_2\text{O}$) meningkat eksponensial seiring transisi energi kendaraan listrik (EV) dan储能 baterai lithium-ion. International Nickel Study Group (INSG) mencatat konsumsi nikel dunia telah melampaui 3,4 juta ton pada 2024, dengan proyeksi >4,8 juta ton pada 2030. Karena >60% cadangan nikel global berbentuk bijih laterit (limonit dan saprolit) yang mengandung hanya 0,8–1,5% Ni, proses pirometalurgi konvensional (nickel matte, ferronickel) menjadi tidak ekonomis untuk bijih kadar rendah. Oleh karena itu, **High-Pressure Acid Leaching (HPAL)** muncul sebagai teknologi hidrometalurgi kunci dengan reaksi inti pelarutan selektif nikel dari mineral goethit ($\alpha$-FeOOH) menggunakan $\text{H}_2\text{SO}_4$ pada $T = 240–270\,°\text{C}$ dan $P = 30–45\,\text{bar}$ di dalam autoclave.

Namun, operasionalisasi HPAL menghadapi bottleneck kritis berupa **autoclave scaling**—yaitu deposisi endapan padat (kebanyakan hematit $\alpha$-Fe$_2$O$_3$, alunit hidratasi, dan silika amorf) pada dinding, pipa, dan impeller autoclave. Dickson, Deleau, dan Espitalier (2026) mendokumentasikan bahwa laju penskalaan tipikal di autoclave komersial mencapai **0,8–2,5 mm/batch** sehingga menurunkan koefisien perpindahan panas (overall heat transfer coefficient, $U$) sebesar 25–40% per siklus dan memaksa shutdown tidak terjadwal (unplanned downtime) yang menyerap 12–18% dari total available production time. Studi Andrameda, Triaswinanti, dan Madra (2024) selanjutnya membuktikan bahwa komposisi residu HPAL yang kaya akan Fe, Al, dan S—dengan total kehilangan nikel ke dalam residu (Ni loss to residue) sebesar 8,6–14,2%—secara langsung dipengaruhi oleh efektivitas desulfurisasi dan profil termal reduksi-roasting. Kedua literatur ini menegaskan bahwa penskalaan bukan hanya isu mekanis, melainkan manifestasi langsung dari kinetika kimia dan solubilitas fase di bawah kondisi super-kritis asam.

Dari perspektif **Rekayasa Sistem Industri**, fenomena scaling mengubah *availability*, *throughput*, dan *OEE (Overall Equipment Effectiveness)* pabrik HPAL secara simultan. Setiap cycle cleaning (caustic wash dengan NaOH 20% pada 80°C selama 6–8 jam) menambah *non-value-added time* dan mengonsumsi reagen hingga USD 60–120 ribu per event. Dengan harga nikel LME yang fluktuatif di kisaran USD 16.000–22.000/ton (2024–2026), setiap 1% peningkatan *recovery* nikel pada utilitas HPAL setara dengan revenue gain ±USD 8–12 juta/tahun untuk kapasitas 30.000 ton Ni/tahun. Konteks inilah yang menjadikan karakterisasi scaling—sebagaimana dilakukan Dickson dkk. (2026)—menjadi kajian strategis bernilai tinggi bagi engineer proses, perancang pabrik, dan analis rantai pasok logam kritikal baterai.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelarutan Nikel Laterit

Reaksi fundamental HPAL untuk limonit (Fe,Ni)O(OH) dalam medium sulfat:

$$(\text{Fe,Ni})\text{O(OH)} + \text{H}_2\text{SO}_4 \longrightarrow \text{Fe}_2(\text{SO}_4)_3 + \text{NiSO}_4 + 2\text{H}_2\text{O}$$

Laju pelarutan nikel dimodelkan dengan persamaan *shrinking-core* untuk partikel spherical:

$$1 - (1 - X)^{1/3} = \frac{k_s \cdot C_{H^+}}{\rho_p \cdot r_p} \cdot t$$

di mana $X$ = fraksi Ni terlarut, $k_s$ = konstanta laju permukaan (m/s), $C_{H^+}$ = konsentrasi $\text{H}^+$ (mol/L), $\rho_p$ = densitas partikel (kg/m³), $r_p$ = jari-jari partikel (m), dan $t$ = waktu reaksi (s).

Untuk saprolit yang kaya magnesium (serpentin/forsterit):

$$\text{Mg}_3\text{Si}_2\text{O}_5(\text{OH})_4 + 3\text{H}_2\text{SO}_4 \longrightarrow 3\text{MgSO}_4 + 2\text{SiO}_2 + 5\text{H}_2\text{O}$$

Reaksi ini **tidak diinginkan** karena mengonsumsi asam tanpa menghasilkan nikel dan melepas $\text{SiO}_2$ yang mendorong penskalaan.

### 2.2 Kinetika Pembentukan Scaling (Nucleation-Growth-Deposition)

Dickson dkk. (2026) mengadopsi framework **Avrami-type kinetics** untuk deposisi scale pada permukaan autoclave:

$$m_{scale}(t) = m_{max} \left[1 - \exp(-k_n \cdot t^n)\right]$$

dengan:
- $m_{scale}(t)$ = massa scale per satuan luas (kg/m²)
- $m_{max}$ = kapasitas massa scale jenuh
- $k_n$ = konstanta nukleasi (s$^{-n}$)
- $n$ = eksponen Avrami (orde dimensionalitas pertumbuhan; tipikal $n = 2,3$ untuk pertumbuhan 3D)

Tahanan termal total autoclave mengikuti model resistansi seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{wall}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ = koefisien konveksi internal/eksternal, $\delta$ = ketebalan (m), dan $k$ = konduktivitas termal (W/m·K). Untuk stainless steel 316L, $k_{steel} \approx 16,3\,\text{W/m·K}$, sedangkan $k_{scale}$ (hematit+sulfat) hanya $0,8–2,1\,\text{W/m·K}$ — menjelaskan degradasi $U$ yang drastis.

### 2.3 Termodinamika Solubilitas Fe(III)

Presipitasi hematit dari larutan Fe(III)-sulfat pada kondisi HPAL mengikuti:

$$\text{Fe}_2(\text{SO}_4)_3 + 3\text{H}_2\text{O} \xrightarrow{T>200\,°C} \alpha\text{-Fe}_2\text{O}_3 + 3\text{H}_2\text{SO}_4$$

Konstanta kesetimbangan bergantung pada suhu menurut:

$$\ln K_{sp}(T) = -\frac{\Delta H^\circ}{RT} + \frac{\Delta S^\circ}{R}$$

Untuk $\alpha$-Fe$_2$O$_3$, dengan $\Delta H^\circ = -11\,530\,\text{J/mol}$ dan $\Delta S^\circ = -241\,\text{J/mol·K}$, diperoleh $K_{sp}(250\,°C) \approx 4,7 \times 10^{-4}$ yang menjustifikasi presipitasi hampir sempurna (>98%) Fe sebagai hematit pada suhu operasi.

### 2.4 Model Perpindahan Panas dengan Resistansi Scale

Efek penskalaan terhadap laju perpindahan panas:

$$\dot{Q} = \frac{\Delta T_{lm}}{\frac{1}{h_i A_i} + \frac{\delta_{wall}}{k_{steel} A} + \frac{\delta_{scale}}{k_{scale} A} + \frac{1}{h_o A_o}}$$

Ini menjadi basis kuantitatif untuk menentukan **frekuensi cleaning optimal** yang memaksimalkan *net throughput*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL 4-Autoclave Komersial

```
[Feed Prep] → [Slurry Mixing] → [Pre-heater 1-2] → [Autoclave 1: 245°C]
                                                       ↓
                              [Autoclave 2: 255°C] → [Autoclave 3: 265°C]
                                                       ↓
                                                  [Autoclave 4: 250°C - Flash]
                                                       ↓
                                        [Cooling → CCD Counter-current Decantation]
                                                       ↓
                              [Neutralization → Ni/Co SX → Crystallization → Product]
```

### 3.2 SOP Pengendalian Scaling (Berdasarkan Dickson dkk., 2026)

**Tahap Pra-Ops (Pre-Commissioning):**
1. *Passivation* dinding autoclave dengan larutan $\text{HNO}_3$ 5% pada 60°C selama 4 jam untuk membentuk lapisan oksida pelindung $\text{Fe}_2\text{O}_3$-$\text{Cr}_2\text{O}_3$.
2. Kalibrasi *compartment temperature profile* menggunakan 12 thermocouple tip-K dengan akurasi $\pm 2\,°C$.
3. Penentuan **acid-to-ore ratio (A/O)** optimum pada $0,28–0,32$ melalui *titrrasi batch*.

**Tahap Operasi:**
1. *Slurry pre-conditioning*: pencampuran bijih laterit kering (P$_{80}$ = 75 μm) dengan asam sulfat recycle pada konsentrasi $C_{H_2SO_4} = 35–50\,\text{g/L}$.
2. Pemantauan **redoks potential** ($E_h$) pada rentang 380–450 mV (vs Ag/AgCl) untuk mengendalikan rasio Fe(III)/Fe(II).
3. Injeksi **seed hematit** sintetis 0,5–1,5% berat slurry di kompartemen 1 untuk memicu *heterogeneous nucleation* yang diinginkan sehingga Fe(III) mengendap sebagai partikel tersuspensi, bukan menempel di dinding.

**Tahap Caustic Wash (Post-Batch):**
1. Drainase slurry hingga residual solid <5%.
2. Sirkulasi NaOH 20% pada $T = 80\,°C$ selama 6–8 jam untuk dissolusi alunit dan gypsum.
3. *Rinse* dengan air demin sampai pH netral, diikuti *inspection* ketebalan scale menggunakan **ultrasonic thickness gauge** (akurasi $\pm 0,1\,\text{mm}$).

### 3.3 Integrasi Desulfurisasi (Andrameda dkk., 2024)

Sebelum leaching, residu/umpan diperlakukan dengan **desulfurization agent** (misal Na$_2$CO$_3$ atau CaO) pada rasio stoikiometri 1,05–1,15 untuk mereduksi sulfur elemental yang akan membentuk scale berlapis. Andrameda dkk. (2024) menunjukkan bahwa penambahan 8% CaO pada tahap *roasting-reduction* pada $T = 850\,°C$ selama 60 menit menghasilkan *sulfur removal efficiency* $\eta_S = 92,4\%$ dan menurunkan *Ni loss ke residu* dari 14,2% menjadi 8,6%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Pabrik HPAL 30.000 ton Ni/tahun

Asumsikan pabrik dengan spesifikasi berikut (merepresentasikan operasi realistik):

| Parameter | Nilai | Satuan |
|---|---|---|
| Kapasitas umpan laterit | 250 | ton/jam (dry basis) |
| Kadar Ni dalam umpan | 1,15 | % |
| $T$ operasi autoclave | 255 | °C |
| $P$ operasi | 42 | bar |
| $C_{H_2SO_4}$ injeksi | 42 | g/L |
| Volume autoclave | 350 | m³ |
| Material dinding | SS 316L | — |
| $h_i$ (konveksi slurry) | 1.800 | W/m²·K |
| $h_o$ (steam jacket) | 5.500 | W/m²·K |
| $\delta_{steel}$ | 0,022 | m |
| $\delta_{scale}$ (akhir batch) | 0,0025 | m |

### 4.2 Perhitungan Penurunan Overall Heat Transfer Coefficient (U)

Sebelum penskalaan (clean condition):
$$\frac{1}{U_{clean}} = \frac{1}{1800} + \frac{0,022}{16,3} + \frac{1}{5500}$$
$$\frac{1}{U_{clean}} = 5,56 \times 10^{-4} + 1,35 \times 10^{-3} + 1,82 \times 10^{-4} = 2,09 \times 10^{-3}\,\text{m}^2\text{K/W}$$
$$U_{clean} = 478,5\,\text{W/m}^2\text{K}$$

Setelah penskalaan ($k_{scale} = 1,2\,\text{W/m·K}$):
$$\frac{1}{U_{scaled}} = 2,09 \times 10^{-3} + \frac{0,0025}{1,2} = 2,09 \times 10^{-3} + 2,08 \times 10^{-3} = 4,17 \times 10^{-3}\,\text{m}^2\text{K/W}$$
$$U_{scaled} = 239,8\,\text{W/m}^2\text{K}$$

**Degradasi U = (478,5.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
