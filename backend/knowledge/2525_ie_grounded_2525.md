# 2525 — Perilaku Penskalaan Autoklaf dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Bijih nikel laterit merupakan sumber daya nikel dominan secara global, mencakup sekitar 60–70% dari total cadangan nikel dunia, namun kontribusinya terhadap produksi nikel primer hanya sekitar 40–50% karena kompleksitas metalurgi dan biaya operasional yang tinggi. Proses *High-Pressure Acid Leaching* (HPAL) merupakan teknologi hydrometallurgical utama untuk mengekstraksi nikel dan kobalt dari bijih laterit kadar rendah (saprolit dan limonit) yang tidak dapat diproses secara ekonomis melalui pirometalurgi konvensional. Okechukwu Vincent Dickson, Thomas Deleau, dan Fabienne Espitalier (2026) dalam *Cleaner Waste Systems* menyoroti bahwa salah satu tantangan operasional paling kritis pada autoklaf HPAL adalah fenomena penskalaan (*scaling*) yang menurunkan efisiensi termal, menurunkan produktivitas, dan memaksa penghentian unit (*shutdown*) untuk pembersihan mekanis maupun kimiawi (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Secara ekonomi, biaya *downtime* autoklaf pada operasi HPAL industri dapat mencapai USD 50.000–200.000 per hari per unit, tergantung kapasitas dan kompleksitas proses. Penskalaan menurunkan koefisien perpindahan panas keseluruhan ($U$) hingga 40–60% dari desain awal, yang secara langsung meningkatkan konsumsi uap (*steam*) spesifik per ton bijih yang diolah. Pada kapasitas tipikal 1,5–3,0 juta ton bijih per tahun, kerugian efisiensi termal ini berdampak pada peningkatan biaya operasional *Operating Cost* (OPEX) sebesar USD 2–6 per pon nikel yang dihasilkan. Yurian Ariandi Andrameda, Rininta Triaswinanti, dan Quinta Nadya Madra (2024) melengkapi narasi ini dengan menunjukkan bahwa residu HPAL masih mengandung sulfur signifikan yang memerlukan proses *roasting-reduction* lanjutan dengan agen desulfurisasi untuk memenuhi standar lingkungan dan回収 logam sisa (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)). Kombinasi kedua studi ini memberikan perspektif menyeluruh tentang manajemen material dalam rantai nilai nikel laterit, mulai dari autoklaf hingga pengolahan residu, yang sangat relevan bagi rekayasa sistem industri modern.

Urgensi teknis utama terletak pada sifat *multi-phase* dan *multi-component* sistem penskalaan. Skala yang terbentuk pada dinding dan internal *agitator* autoklaf umumnya tersusun atas campuran hematit ($\text{Fe}_2\text{O}_3$), goethit ($\alpha\text{-FeOOH}$), anhydrit ($\text{CaSO}_4$), gypsum ($\text{CaSO}_4 \cdot 2\text{H}_2\text{O}$), aluminium hidroksida ($\text{Al(OH)}_3$ dalam bentuk boehmit/diaspor), dan jarosit. Komposisi ini bergantung pada komposisi bijih umpan, suhu, tekanan, dan konsentrasi asam sulfat bebas. Tanpa karakterisasi yang tepat, mitigasi penskalaan akan menjadi *reactive* (responsif) alih-alih *predictive* (prediktif), yang tidak sesuai dengan prinsip *Industry 4.0* dan *smart manufacturing*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pertumbuhan Skala

Pertumbuhan lapisan skala pada permukaan logam autoklaf dapat dimodelkan menggunakan pendekatan kinetika heterogen dengan persamaan Arrhenius. Laju pertumbuhan ketebalan skala $\delta(t)$ terhadap waktu $t$ mengikuti:

$$\frac{d\delta}{dt} = k_0 \exp\left(-\frac{E_a}{RT}\right) \cdot C_s^n$$

di mana $k_0$ adalah konstanta pre-eksponensial, $E_a$ adalah energi aktivasi (kJ/mol), $R$ adalah konstanta gas universal ($8{,}314$ J/mol·K), $T$ adalah suhu operasi (K), $C_s$ adalah konsentrasi spesies pembentuk skala dalam larutan (mol/L), dan $n$ adalah orde reaksi (umumnya 1–2 untuk deposisi kristalin). Okechukwu et al. (2026) menunjukkan bahwa energi aktivasi untuk pengendapan hematit berada pada rentang 65–85 kJ/mol, sedangkan untuk gypsum lebih rendah (15–30 kJ/mol) karena sifatnya yang *diffusion-controlled* (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

### 2.2 Penurunan Koefisien Perpindahan Panas

Koefisien perpindahan panas keseluruhan $U$ pada autoklaf dengan skala didefinisikan sebagai:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{scale}}{k_{scale}} + \frac{\delta_{wall}}{k_{wall}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal dan eksternal, $\delta_{scale}$ dan $\delta_{wall}$ adalah ketebalan skala dan dinding, sedangkan $k_{scale}$ dan $k_{wall}$ adalah konduktivitas termal material tersebut. Untuk hematit, $k_{scale} \approx 1{,}5$–$2{,}5$ W/m·K, jauh lebih rendah daripada baja tahan karat autoklaf ($k_{wall} \approx 16$–$20$ W/m·K). Dengan demikian, peningkatan ketebalan skala dari 0 menjadi 5 mm dapat menurunkan $U$ hingga 50% lebih rendah, sesuai dengan temuan empiris Dickson et al. (2026).

### 2.3 Neraca Massa Pelindian

Untuk reaksi pelindian nikel dari serpentin/goethit, reaksi stoikiometri dominan adalah:

$$\text{NiO} \cdot \text{SiO}_2 + 2\text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{SiO}_2 \cdot 2\text{H}_2\text{O}$$

Tingkat ekstraksi nikel $R_{Ni}$ didefinisikan sebagai:

$$R_{Ni} = \frac{m_{Ni}^{leached}}{m_{Ni}^{feed}} \times 100\%$$

dan konsumsi asam spesifik $A_s$ (kg $\text{H}_2\text{SO}_4$/ton bijih):

$$A_s = \frac{C_{H_2SO_4}^{initial} \cdot V - C_{H_2SO_4}^{residual} \cdot V}{m_{ore}}$$

### 2.4 Derajat Desulfurisasi dan Reduksi pada Residu

Andrameda et al. (2024) menurunkan hubungan antara derajat desulfurisasi $\eta_S$ dan parameter proses:

$$\eta_S = \frac{[S]_{awal} - [S]_{akhir}}{[S]_{awal}} \times 100\%$$

Untuk proses *roasting-reduction*, derajat reduksi Fe oksida menjadi logam/logam oksida rendah mengikuti:

$$\alpha = 1 - \left(\frac{m_{Fe^{2+}}^{t}}{m_{Fe^{total}}^0}\right)^{-1/3}$$

di mana $\alpha$ adalah fraksi reaksi dan diasumsikan mengikuti model inti yang menyusut (*shrinking core*). Andrameda et al. (2024) menunjukkan bahwa penambahan agen desulfurisasi seperti $\text{Na}_2\text{CO}_3$ atau $\text{Ca(OH)}_2$ efektif menurunkan $\eta_S$ hingga lebih dari 90% pada suhu 800–1000°C dengan waktu tinggal optimal 60–90 menit (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Karakterisasi Skala Autoklaf HPAL

Berdasarkan metodologi yang dilaporkan oleh Dickson et al. (2026), prosedur standar identifikasi dan kuantifikasi skala autoklaf meliputi:

**Tahap 1: Pengambilan Sampel Representatif**
Sampel kerak diambil dari beberapa zona autoklaf (zona *heating*, *leaching*, dan *discharge*) menggunakan *coring drill* stainless steel dengan diameter 25–50 mm. Setiap titik sampling didokumentasikan dengan koordinat polar (sudut dan elevasi).

**Tahap 2: Preparasi dan Karakterisasi Fisikokimia**
Sampel dikeringkan pada 105°C selama 24 jam, dipotong, dan di-*mounting* dalam resin epoksi. Analisis dilakukan dengan:
- *X-Ray Diffraction* (XRD) untuk identifikasi fasa kristalin
- *Scanning Electron Microscopy* (SEM-EDS) untuk morfologi dan komposisi elemental
- *X-Ray Fluorescence* (XRF) untuk komposisi oksida total
- *Thermogravimetric Analysis* (TGA) untuk kandungan hidrat/air kristal

**Tahap 3: Pemetaan Ketebalan dan Distribusi**
Pemetaan ketebalan dilakukan dengan *ultrasonic thickness gauge* (UTG) kalibrasi dengan akurasi ±0,1 mm pada grid 100 × 100 mm sepanjang dinding autoklaf.

### 3.2 SOP Pengendalian Penskalaan

Strategi pengendalian berlapis (*layered control strategy*):

1. **Pretreatment bijih:** *Pre-desliming* untuk menghilangkan fraksi halus yang kaya alumina dan magnesia
2. **Kontrol kimia umpan:** Mempertahankan rasio $\text{Fe}/\text{SiO}_2 > 8$ dan konsentrasi $\text{Mg}^{2+} < 5$ g/L dalam *pregnant leach solution* (PLS)
3. **Konsentrasi asam:** Pertahankan free acid 30–50 g/L untuk mencegah pres dini jarosit
4. **Aditif anti-skalant:** Injeksi polimer fosfonat atau poliakrilat pada dosis 5–20 ppm
5. *Acid wash* terjadwal: pencucian dengan $\text{H}_2\text{SO}_4$ 10–15% pada suhu 80–90°C setiap 30–45 hari operasi

### 3.3 SOP Pengolahan Residu HPAL

Andrameda et al. (2024) menyusun diagram alir proses *roasting-reduction* untuk residu HPAL:

```
Residu HPAL → Pengeringan (110°C, 24 jam) → Pencampuran dengan agen desulfurisasi 
(rasio mol Ca/S = 1,2–1,5) → Roasting (800–1000°C, 60–90 menit) 
→ Leaching air (80°C, rasio S/L = 1:5) → Filtrat (konsentrat Ni) + Residu stabil
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Data Asumsi:** Autoklaf HPAL berkapasitas 250 ton bijih/jam, suhu operasi $T = 250$°C ($523{,}15$ K), tekanan $P = 35$ bar, komposisi bijih: 1,3% Ni, 0,08% Co, 38% Fe, 4% Al, 1,2% Mg.

### Langkah