# 2877 — Karakteristik dan Perilaku Pembentukan Kerak (Scaling) pada Autoclave dalam Proses Pelindian Asam Tekanan Tinggi (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang menghadapi transformasi besar seiring dengan meningkatnya permintaan baterai kendaraan listrik (EV), yang memicu lonjakan konsumsi nikel kelas baterai (>99.8% NiSO₄·6H₂O atau Ni(OH)₂). Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel terrestre dunia, menjadi sumber daya utama karena keterbatasan sumber sulfida (pentlandit) yang semakin menipis. Namun, bijih laterit memiliki tantangan metalurgi yang kompleks: kadar Ni rendah (0.8–2.5%), kadar Fe dan Mg tinggi, serta struktur mineralogi yang beragam (limonit, saprolit, garnierit). Teknologi High Pressure Acid Leaching (HPAL) muncul sebagai solusi dominan untuk mengekstraksi nikel dari bijih limonitic, menggunakan asam sulfat pada suhu 240–270 °C dan tekanan 35–55 bar dalam reaktor autoclave.

Dalam operasional HPAL berskala industri, salah satu masalah kritis yang menurunkan availability dan kapasitas produksi adalah **autoclave scaling**—yaitu pembentukan endapan keras anorganik pada dinding, impeller, dan pipa internal autoclave. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* melakukan investigasi sistematis terhadap perilaku dan karakterisasi kerak ini, yang umumnya tersusun atas hematit (Fe₂O₃), alunit (KAl₃(SO₄)₂(OH)₆), jarosit (KFe₃(SO₄)₂(OH)₆), anhydrit (CaSO₄), dan gypsum (CaSO₄·2H₂O). DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503). Studi ini sangat relevan karena downtime akibat descaling dapat mencapai 10–20% dari total operasional tahunan, dengan kerugian ekonomi hingga USD 5–15 juta per autoclave per tahun pada fasilitas HPAL kelas dunia seperti di Sulawesi, Kaledonia Baru, dan Filipina.

Aspek lingkungan dan ekonomi sirkular juga menjadi perhatian utama jurnal *Cleaner Waste Systems*, di mana pengelolaan residu HPAL (sebagaimana ditangani Andrameda dkk. 2024 melalui proses roasting-reduction pada residu nikel, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menjadi agenda keberlanjutan. Pembentukan kerak bukan hanya isu operasional, tetapi juga isu *cleaner production* karena berkaitan dengan konsumsi asam berlebih, efisiensi energi termal, dan pemborosan sumber daya mineral. Oleh karena itu, pemahaman kuantitatif terhadap mekanisme kristalisasi, kinetika pengendapan, dan morfologi kerak menjadi kebutuhan strategis bagi para insinyur proses, perancang pabrik, dan manajer operasi di sektor pertambangan-logam hulu (*upstream mining-metallurgy*).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pelindian Asam dan Pengendapan Skala

Reaksi dasar HPAL pada bijih laterit limonitik dapat direpresentasikan sebagai dissolution multi-komponen:

$$\text{NiO} + \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{H}_2\text{O}$$

$$2\text{FeO(OH)} + 3\text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

$$4\text{FeSO}_4 + \text{O}_2 + 2\text{H}_2\text{SO}_4 \rightarrow 2\text{Fe}_2(\text{SO}_4)_3 + 2\text{H}_2\text{O}$$

Untuk prediksi pengendapan skala, digunakan konsep *solubility product* ($K_{sp}$) dan derajat lewat jenuh (*supersaturation*):

$$\sigma = \ln\left(\frac{Q}{K_{sp}}\right)$$

di mana $Q$ adalah *ion activity product* dan $\sigma$ menunjukkan driving force kristalisasi. Semakin tinggi $\sigma$, semakin cepat nukleasi dan pertumbuhan kristal pada dinding autoclave.

### 2.2 Kinetika Pertumbuhan Kerak (Scale Growth Kinetics)

Berdasarkan nucleation-aggregation model yang banyak diadopsi dalam studi HPAL modern, laju penebalan kerak $\frac{dh}{dt}$ mengikuti persamaan:

$$\frac{dh}{dt} = k_s \cdot \exp\left(-\frac{E_a}{RT}\right) \cdot \left(C - C_{eq}\right)^n$$

di mana:
- $h$ = ketebalan kerak (mm)
- $k_s$ = konstanta laju intrinsik (mm·jam⁻¹·(mol/L)⁻ⁿ)
- $E_a$ = energi aktivasi pertumbuhan kerak (kJ/mol), tipikal 60–90 kJ/mol untuk alunit
- $R$ = konstanta gas universal (8.314 J/mol·K)
- $T$ = suhu operasi (K)
- $C$ = konsentrasi aktual ion pembentuk kerak (mol/L)
- $C_{eq}$ = konsentrasi kesetimbangan (mol/L)
- $n$ = orde reaksi (umumnya 1–2 untuk kristalisasi heterogen)

### 2.3 Kinetika Pelindian Nikel (Leaching Kinetics)

Sementara itu, ekstraksi Ni dikendalikan oleh model *shrinking core* untuk partikel laterit:

$$1 - (1-X)^{1/3} = \frac{k_L}{r_0 \cdot \rho} \cdot C_{H^+}^m \cdot t$$

dengan $X$ = fraksi Ni terekstraksi, $k_L$ = konstanta laju, $r_0$ = radius awal partikel, $\rho$ = densitas padatan, dan $m$ = orde terhadap konsentrasi asam. Yield nikel total didefinisikan sebagai:

$$Y_{Ni} = \frac{m_{Ni,larut}}{m_{Ni,umpan}} \times 100\%$$

### 2.4 Neraca Massa Asam dan Rasio S/A (Solid-to-Acid)

Konsumsi asam spesifik (*specific acid consumption*, SAC) merupakan metrik kritis dalam desain operasi HPAL:

$$SAC = \frac{m_{H_2SO_4,\text{konsumsi}}}{m_{\text{bijih kering}}} \quad (\text{kg H}_2\text{SO}_4/\text{ton bijih})$$

SAC yang efisien untuk limonit berada pada rentang 350–500 kg/ton. Andrameda dkk. (2024) melaporkan bahwa pretreatment desulfurisasi dengan agen tertentu dapat menurunkan SAC residu HPAL secara signifikan (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

### 2.5 Efisiensi Termal dan Penurunan Perpindahan Panas

Kerak memiliki konduktivitas termal rendah ($\lambda_{scale} \approx 0.3$–$1.2$ W/m·K) dibanding baja autoclave ($\lambda_{steel} \approx 25$ W/m·K), sehingga resistansi termal total menjadi:

$$R_{total} = \frac{\delta_{steel}}{\lambda_{steel}} + \frac{\delta_{scale}}{\lambda_{scale}} + \frac{1}{h_{conv}}$$

Penurunan koefisien perpindahan panas overall ($U$) akibat ketebalan kerak $\delta_{scale}$ menyebabkan peningkatan konsumsi uap (*steam*) untuk mempertahankan suhu leaching pada 255 °C.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian kerak autoclave mengikuti kerangka *Plan–Do–Check–Act* (PDCA) yang diadaptasi dari ISO 9001 dan *good metallurgical practice*. Tahapan metodologi berdasarkan kerangka Dickson dkk. (2026) adalah sebagai berikut:

**Tahap 1 — Karakterisasi Umpan (Feed Characterisation).** Analisis XRF, XRD, dan SEM-EDS pada bijih laterit untuk mengidentifikasi komposisi mineralogi (gibbsit, goethit, serpentin, garnierit), kadar Fe, Mg, Al, dan Si. Rasio Fe/Mg dan kadar Al merupakan prediktor kuat terhadap potensi pembentukan kerak alunit dan jarosit.

**Tahap 2 — Desain Eksperimen Leaching.** Variabel kunci yang dikontrol dalam autoclave titanium-clad: suhu $T$ (240–270 °C), tekanan parsial oksigen $p_{O_2}$ (1–8 bar), konsentrasi asam $C_{H^+}$ (50–120 g/L), rasio S/L (solid-to-liquid, 1:3–1:6), dan waktu tinggal 30–90 menit.

**Tahap 3 — Pemantauan Pembentukan Kerak.** Sensor suhu multi-titik pada dinding autoclave (*skin thermocouples*) digunakan untuk mendeteksi kenaikan *delta-T* yang mengindikasikan deposit kerak. Teknik non-destruktif seperti ultrasonic thickness gauge (UTG) dan borescope inspection dilakukan pada shutdown terjadwal.

**Tahap 4 — Descaling dan Pembersihan.** Prosedur descaling standar meliputi:
1. *Cooling down* autoclave hingga <80 °C
2. Drainase slurry dan *blow-down* dengan air demin
3. Sirkulasi larutan HCl 5–10% pada 60–80 °C selama 6–12 jam untuk melarutkan kerak Fe-based
4. Mechanical removal menggunakan *high-pressure water jet* (500–1000 bar) untuk kerak adheren
5. Passivation dengan larutan HNO₃ untuk membentuk protective oxide layer pada baja

**Tahap 5 — Integrasi dengan Pretreatment Residu.** Mengikuti pendekatan Andrameda dkk. (2024) (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)), residu HPAL dapat diolah lebih lanjut melalui roasting-reduction dengan penambahan agen desulfurisasi pada suhu 800–1100 °C untuk mengurangi sulfur residu dan meningkatkan recovery Ni dari matte. Diagram alir integrasi:

```
[Bijih Laterit] → [Repulping] → [Pre-heating (120°C)] 
       ↓
[Autoclave HPAL (255°C, 45 bar, 60 min)] → [Flash Cooling]
       ↓
[CCD Counter-Current Decantation] → [Net Slurry ke Neutralisasi]
       ↓
[Precipitate Ni(OH)₂ / MHP] → [Refining ke NiSO₄]
       
[Residue Sisa] → [Roasting-Reduction + Desulfurization Agent]
       ↓
[Fe-Ni Matte → Nickel回收]; [Slag → Construction Material]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: HPAL Plant 50.000 ton Ni/tahun

Misalkan sebuah fasilitas HPAL mengolah bijih limonit dengan komposisi umpan sebagai berikut:

| Parameter | Nilai |
|---|---|
| Kapasitas umpan | 2.500.000 ton bijih/tahun |
| Kadar Ni | 1.30% |
| Kadar Fe | 38.5% |
| Kadar Mg | 2.8% |
| Kadar Al | 4.2% |
| Kadar S (sebelum pretreatment) | 0.15% |

**Perhitungan 1: Yield Nikel dan Konsumsi Asam Teoritis**

Asumsi kondisi operasi: $T = 255$ °C = 528 K, $p_{O_2} = 5$ bar, $C_{H^+} = 90$ g/L, waktu tinggal 60 menit, rasio S/L = 1:4.

Massa Ni dalam umpan per jam:
$$\dot{m}_{Ni,in} = \frac{2.500.000 \times 0.013}{8000} = 4.06 \text{ ton/jam}$$

Dengan recovery leaching $X_{Ni} = 94.5\%$ (tipikal untuk limonit), maka produksi Ni terekstrak:
$$\dot{m}_{Ni,out} = 4.06 \times 0.945 = 3.84 \text{ ton/jam Ni}$$

SAC dihitung menggunakan pendekatan stoikiometris dengan koreksi empiris untuk konsumsi asam oleh Mg dan Al:
$$SAC = \frac{n_{H_2SO_4,stoik} + n_{H_2SO_4,\text{over}}}{m_{umpan}}$$

Untuk simplifikasi, gunakan SAC desain = 420