# 2021 — Sistem Lingkar Tertutup sebagai Jalur Menuju Ekonomi Sirkular dan Keberlanjutan Lingkungan dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-loop systems to circular economy: A pathway to environmental sustainability?
**Jurnal & Sitasi Utama:** Sami Kara, Michael Zwicky Hauschild, John W. Sutherland (2022). *CIRP Annals*. DOI: [https://doi.org/10.1016/j.cirp.2022.05.008](https://doi.org/10.1016/j.cirp.2022.05.008)
**Sitasi Pendukung:** Md Tasbirul Islam, Usha Iyer‐Raniga (2022). *Recycling*. DOI: [https://doi.org/10.3390/recycling7030033](https://doi.org/10.3390/recycling7030033)

---

## 1. Pendahuluan dan Konteks Industri

Krisis ekologis abad ke-21 —yang ditandai oleh penipisan sumber daya mineral kritis, peningkatan emisi gas rumah kaca (GRK) sektor manufaktur sebesar 19% dari total emisi global, dan degradasi ekosistem—memaksa para perekayasa industri untuk meninggalkan paradigma linear *take–make–dispose* yang telah berusia lebih dari dua abad. Dalam *CIRP Annals* (2022), Kara, Hauschild, dan Sutherland—tiga otoritas utama di bidang sustainable manufacturing dan Life Cycle Assessment (LCA)—mengajukan posisi ilmiah bahwa **sistem lingkar tertutup (*closed-loop systems*)** bukan sekadar strategi daur ulang pasif, melainkan merupakan prasyarat struktural bagi transisi menuju **ekonomi sirkular (Circular Economy/CE)** yang terukur dan berkelanjutan. Paper ini menyintesiskan kerangka rekayasa yang menjembatani kesenjangan konseptual antara *closed-loop supply chain* (CLSC) klasik (yang berorientasi pada reverse logistics dan remanufacturing) dengan visi CE yang lebih luas (yang mencakup regenerative design, decoupling, dan cascading).

Urgensi industrialisasi kerangka ini tecermin dari data yang dihimpun oleh Islam & Iyer-Raniga (2022) dalam *Recycling*: volume kendaraan listrik (EV) global diproyeksikan menembus **145 juta unit pada 2030** (IEA, 2022), yang berarti lebih dari **11 juta ton baterai Li-ion (LIB) akan mencapai end-of-life (EoL) pada 2040**. Tanpa sistem lingkar tertutup yang matang, logam-logam kritis seperti Li, Co, dan Ni—yang konsentrasi pasokannya 60–70% berada di tiga negara—akan menghadapi *supply risk index* yang sangat tinggi pada US Geological Survey. Lebih jauh, produksi katoda virgin NMC811 menghasilkan emisi CO₂-eq sekitar **15–20 kg per kWh kapasitas baterai**, sedangkan proses hidrometalurgi daur ulang hanya mengeluarkan **2–3 kg CO₂-eq/kWh**, memberikan peluang *decarbonization* sebesar **80–90%** jika recovery loop tertutup dibangun secara end-to-end.

Konteks industri ini semakin relevan ketika regulasi seperti *EU Battery Regulation 2023/1542* mewajibkan **recovery rate minimum 90% untuk Co, Ni, dan Cu**, dan **50% untuk Li** pada 2027, serta *recycled content minimum* 6% Co, 6% Ni, dan 3% Li pada 2031. Perekayasa industri dituntut tidak hanya mendesain ulang produk (*eco-design*), tetapi juga membangun arsitektur CLSC yang mampu menjamin *material circularity indicator* (MCI) ≥ 0,7 untuk seluruh lini produk. Bagian ini menjadi landasan bagi formulasi matematis dan SOP rekayasa yang akan diuraikan pada bagian selanjutnya.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dibangun oleh Kara *et al.* (2022) berpijak pada tiga pilar kuantitatif: (i) **Material Circularity Indicator (MCI)** yang diformalisasikan oleh Linder *et al.* (2017) dan diadopsi CIRP, (ii) **Life Cycle Assessment (LCA)** berbasis *Environmental Footprint (EF) 3.0 method*, dan (iii) **Material Flow Analysis (MFA)** *stock-driven* untuk sistem multi-loop.

### 2.1 Material Circularity Indicator (MCI)

MCI mengkuantifikasikan tingkat "ketersirkulran" suatu produk pada rentang 0 (linear sempurna) hingga 1 (sirkular sempurna), didefinisikan sebagai:

$$MCI = 1 - \frac{L_f \cdot V_f}{2 \cdot L \cdot V} + \frac{F_r \cdot W_r}{2 \cdot L \cdot V}$$

di mana:
- $L_f$ = jumlah feedstock material virgin (kg),
- $V_f$ = nilai tambah/value added dari feedstock virgin,
- $L$ = total massa material input (virgin + recycled),
- $V$ = total nilai material,
- $F_r$ = massa material yang berhasil masuk ke *reuse/recycling loop*,
- $W_r$ = *utility factor* dari material daur ulang (0 ≤ $W_r$ ≤ 1).

### 2.2 Closed-Loop Recycling Rate (CLRR)

Untuk sistem baterai Li-ion, laju pemulihan tertutup didefinisikan:

$$CLRR_i = \frac{M_{recycled,i}}{M_{consumed,i}} = \eta_{collection} \cdot \eta_{sorting} \cdot \eta_{process,i}$$

dengan $\eta_{process,i}$ merupakan efisiensi ekstraksi unsur kritis $i$ (Li, Co, Ni, Mn), yang bervariasi tergantung rute: pirometalurgi ($\eta_{Co} \approx 0{,}95$; $\eta_{Li} \approx 0{,}05$), hidrometalurgi ($\eta_{Co} \approx 0{,}96$; $\eta_{Li} \approx 0{,}80$), dan direct cathode recycling ($\eta \to 0{,}95$ untuk semua logam).

### 2.3 LCA Characterization — Potensi Dampak Pemanasan Global (GWP)

Dampak agregat lingkungan dihitung melalui:

$$GWP_{total} = \sum_{k=1}^{K} m_k \cdot CF_k + \sum_{j=1}^{J} E_j \cdot EF_{grid,j}$$

di mana $m_k$ adalah massa material/kimia input proses $k$, $CF_k$ adalah *characterization factor* IPCC AR6, $E_j$ adalah konsumsi energi pada tahap $j$, dan $EF_{grid,j}$ adalah *emission factor* jaringan listrik lokasi.

### 2.4 Model Ekonomi Sirkular — Nilai Pemulihan (*Recovered Value*)

Total nilai ekonomi yang dipulihkan dari EoL stream:

$$V_{recovered} = \sum_{i=1}^{n} \big( m_{EoL} \cdot c_i^{EoL} \cdot \eta_i \cdot p_i \big) - C_{process}$$

dengan $p_i$ adalah harga pasar unsur kritis $i$ (Co ≈ USD 35.000/ton, Ni ≈ USD 22.000/ton, Li₂CO₃ ≈ USD 35.000/ton pada Q1 2024), dan $C_{process}$ adalah biaya operasional proses daur ulang.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis Kara *et al.* (2022) dan evidence-based practice dari tinjauan Islam & Iyer-Raniga (2022) terhadap 93 artikel WoS Core Collection, implementasi SOP CLSC untuk baterai Li-ion dapat distandarisasi menjadi **delapan tahap rekayasa** berikut:

1. **Eco-design & Design for Disassembly (DfD)** — modul baterai dirancang dengan *modular architecture* (cell-pack-module-pack-assembly) dan fastening reversible (< 10 jenis fastener). *Disassembly time* target ≤ 90 detik per modul.
2. **Collection Network Optimization** — penentuan lokasi *collection hubs* menggunakan model *maximal covering location* (MCLP) dengan jarak radius ≤ 50 km di zona urban dan ≤ 150 km di zona rural, memenuhi target *collection rate* ≥ 95%.
3. **Diagnostic & State-of-Health (SoH) Screening** — pengukuran impedansi dan kapasitas sisa (*residual capacity*) menggunakan *electrochemical impedance spectroscopy* (EIS) untuk memilah baterai ke dalam kategori: *second-life reuse* (SoH ≥ 70%), *remanning/repurposing* (40–70%), dan *material recovery* (< 40%).
4. **Safe Disassembly & Pretreatment** — decharger (discharge ke < 1 V), *thermal runaway prevention* (cryogenic CO₂), dan shredding dalam atmosfer inert (N₂).
5. **Mechanical Processing** — *crushing*, *sieving*, *magnetic separation*, dan *eddy current* untuk memisahkan *black mass* dari kontainer Al/Cu.
6. **Hydrometallurgical Leaching** — leaching dengan H₂SO₄ 2 M + H₂O₂ pada 60–80 °C, menghasilkan *pregnant leach solution* (PLS) yang diproses lebih lanjut untuk回收 Co, Ni, Mn (precipitation dengan NaOH) dan Li (precipitation sebagai Li₂CO₃ pada 90 °C dengan Na₂CO₃).
7. **Direct Cathode Regeneration (opsional)** — re-lithiation *cathode powder* hasil leaching dengan metode *hydrothermal* atau *solid-state annealing* untuk memperpendek loop (closed-loop short circuit).
8. **Closed-Loop Validation & LCA Re-assessment** — verifikasi bahwa $CLRR_i \geq 0{,}90$ sesuai EU Battery Regulation, serta pembaruan $MCI$ dan $GWP_{total}$.

Arsitektur teknologi ini selaras dengan standar **ISO 14040/14044 (LCA)**, **ISO 14021 (recycled content claim)**, dan **IEC 62933 (energy storage system safety)**. Diagram alir proses dapat direpresentasikan sebagai jaringan *value-retention loops* yang terdiri atas *inner loop* (reuse → remanufacture) dan *outer loop* (recycling → material substitution).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah operator armada EV di Indonesia (DKI Jakarta) memiliki 5.000 unit baterai Li-ion NMC811 bekas, masing-masing berkapasitas **75 kWh** dan berat **≈ 400 kg**. Baterai-baterai ini telah melampaui ambang SoH 70% dan masuk kategori *material recovery*. Hitung *recovered value*, *emission avoidance*, dan *MCI* pasca-penerapan CLSC hidrometalurgi.

### 4.1 Parameter Input Industri

| Parameter | Nilai | Sumber |
|---|---|---|
| Total baterai EoL | $5.000$ unit | Skenario |
| Massa per baterai | $m_b = 400$ kg | Spesifikasi NMC811 |
| Kandungan katoda NMC811 | $x_c = 0{,}30$ | Literatur industri |
| Komposisi katoda | Co 8%, Ni 80%, Li 7% | Tsai *et al.* (2022) |
| Efisiensi hidrometalurgi $\eta$ | Co: 0,96; Ni: 0,96; Li: 0,80 | Islam & Iyer-Raniga (2022) |
| Harga pasar (Q1 2024) | Co: USD 35.000/ton; Ni: USD 22.000/ton; Li₂CO