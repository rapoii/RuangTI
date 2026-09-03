# 1433 — Integrasi Teknologi Carbon Capture dan Pemulihan Energi Termal pada Rantai Nilai Baja Berbasis Blast Furnace: Perspektif Sistem ORC dan Tinjauan Sistematis CCUS

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Integration of carbon capture technologies in blast furnace based steel making: A comprehensive and systematic review
**Jurnal & Sitasi Utama:** Jorge Perpiñán, Begoña Peña, Manuel Bailera (2022). *Fuel*. DOI: [https://doi.org/10.1016/j.fuel.2022.127074](https://doi.org/10.1016/j.fuel.2022.127074)
**Sitasi Pendukung:** F. Sánchez, Javier Barba, Carmen Mata (2025). *Energies*. DOI: [https://doi.org/10.3390/en18246561](https://doi.org/10.3390/en18246561)

---

## 1. Pendahuluan dan Konteks Industri

Industri besi dan baja global merupakan kontributor emisi CO₂ antropogenik terbesar kedua setelah sektor pembangkitan listrik, dengan pangsa 7–9 % dari total emisi CO₂ dunia per tahun menurut Perpiñán, Peña, dan Bailera (2022) dalam *Fuel* (DOI: [10.1016/j.fuel.2022.127074](https://doi.org/10.1016/j.fuel.2022.127074)). Jalur *Blast Furnace–Basic Oxygen Furnace* (BF-BOF) diproyeksikan masih mempertahankan pangsa pasar dominan hingga beberapa dekade mendatang, sehingga dekarbonisasi rute ini menjadi tantangan strategis dan operasional yang sangat mendesak. Kompleksitas persoalan muncul karena BF-BOF memiliki profil emisi yang *point-source heavy* (sumber titik terkonsentrasi) namun dicampur dengan nitrogen yang tinggi sehingga fraksi CO₂ di *flue gas*仅为 20–30 %, menurunkan driving force pemisahan dan meningkatkan *energy penalty* sistem absorber.

Tinjauan sistematis oleh Perpiñán et al. (2022) terhadap 188 makalah *peer-reviewed* menyimpulkan bahwa tidak ada satu pun teknologi *carbon capture* (CC) yang dapat memenuhi seluruh kriteria secara optimal—*energy penalty*, potensi *abatement*, biaya, *Technology Readiness Level* (TRL), dan kelayakan deployment. Empat keluarga teknologi utama yang diidentifikasi adalah: (i) *post-combustion capture* (PCC), (ii) *chemical/calcium looping cycles*, (iii) *oxy-fuel combustion*, dan (iv) *pre-combustion capture*. Namun, semua teknologi ini membawa konsekuensi berupa kebutuhan energi termal dan listrik yang signifikan—membuka peluang integrasi dengan sistem pemulihan energi seperti Organic Rankine Cycle (ORC) yang dikaji oleh Sánchez, Barba, dan Mata (2025) dalam *Energies* (DOI: [10.3390/en18246561](https://doi.org/10.3390/en18246561)).

Dalam konteks dekarbonisasi industri berat, kombinasi CC dengan pemulihan *waste heat* menjadi pendekatan *symbiotic* yang krusial. Sánchez et al. (2025) menekankan bahwa sumber panas suhu-rendah (100–400 °C) dari *top gas* BF, *slag*, dan *reboiler duty* kolom absorpsi PCC sangat cocok untuk diturunkan dayanya melalui ORC, sehingga sebagian dari *energy penalty* CC dapat di-offset. Regulasi Uni Eropa F-Gas dan tekanan dekarbonisasi secara simultan mendorong transisi fluida kerja ORC ke *hydrofluoroolefins* (HFO) dan refrigeran alami ber-GWP rendah. Dengan demikian, integrasi CC–ORC bukan sekadar strategi pengurangan emisi, melainkan paradigma *industrial ecology* yang mengubah *cost center* (emisi + energi terbuang) menjadi *value center* (CO₂_util + listrik hijau).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Neraca Emisi dan Intensitas Karbon Jalur BF-BOF

Intensitas emisi spesifik baja BF-BOF secara tipikal berada pada rentang $E_{CO_2} = 1{,}8 - 2{,}4 \text{ tCO}_2/\text{t baja kasar}$. Untuk kapasitas pabrik baja terintegrasi $C$ (Mt/tahun), debit emisi bruto:

$$\dot{m}_{CO_2}^{gross} = E_{CO_2} \times C$$

Dengan laju *capture* $\alpha$ (fraksi), maka emisi yang tertangkap:

$$\dot{m}_{CO_2}^{captured} = \alpha \cdot \dot{m}_{CO_2}^{gross}$$

### 2.2 Energy Penalty Sistem Penangkapan

*Energy penalty* spesifik untuk absorber kimia berbasis amine (MEA/MDEA) pada kondisi BF-BOF menurut Perpiñán et al. (2022) berkisar $e_{capture} = 3{,}0 - 4{,}0 \text{ GJ}/\text{tCO}_2$. Beban termal total:

$$\dot{Q}_{penalty} = \dot{m}_{CO_2}^{captured} \cdot e_{capture}$$

Konversi ke kebutuhan daya listrik ekuivalen (asumsi $\eta_{th,ref} = 0{,}35$, $\eta_{el} = 0{,}40$):

$$\dot{W}_{eq} = \frac{\dot{Q}_{penalty}}{3600 \cdot \eta_{th,ref} \cdot \eta_{el}}$$

### 2.3 Termodinamika Organic Rankine Cycle (ORC)

Sánchez et al. (2025) mendefinisikan efisiensi termal ORC:

$$\eta_{th}^{ORC} = \frac{\dot{W}_{net}^{ORC}}{\dot{Q}_{evap}}$$

dengan $\dot{W}_{net}^{ORC} = \dot{W}_{turb} - \dot{W}_{pump}$. Untuk siklus transkritis dengan fluida kerja HFO (misalnya R-1234ze(E)), efisiensi termal dapat dinyatakan melalui pendekatan Carnot yang dimodifikasi:

$$\eta_{th}^{ORC} = \eta_{Carnot} \cdot \eta_{rel} = \left(1 - \frac{T_L}{T_{crit}}\right) \cdot \eta_{rel}$$

di mana $\eta_{rel} = 0{,}50 - 0{,}70$ untuk desain ORC mature. Untuk sumber panas $T_H$ bervariasi, *thermal matching* optimal terjadi saat *pinch point* evaporator minimum $\Delta T_{pp} = 10\text{–}15 \text{ K}$.

Efisiensi eksergetik (II hukum) yang lebih representatif:

$$\eta_{II}^{ORC} = \frac{\dot{W}_{net}^{ORC}}{\dot{E}x_{in}^{th}} = \frac{\dot{W}_{net}^{ORC}}{\dot{Q}_{evap}\left(1 - \dfrac{T_0}{T_H^{avg}}\right)}$$

### 2.4 Kriteria Efektivitas Integrasi CC–ORC

Indeks *Net Energy Gain*:

$$\Delta W_{net} = \dot{W}_{eq}^{ORC} - \dot{W}_{eq}^{capture}$$

dengan sistem dinyatakan layak secara energetik bila $\Delta W_{net} < 0$ (daya yang dihasilkan ORC mengompensasi penalty CC).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi integrasi CC–ORC di pabrik baja BF-BOF mengikuti kerangka SOP berlapis berikut, yang disintesis dari Perpiñán et al. (2022) dan Sánchez et al. (2025):

**Tahap 1 – Baseline & Pemetaan Termal.** Inventarisasi sumber emisi (BF *top gas*, *sintering*, *coke oven gas*, BOFl) dan sumber panas buangan (*slag* sensible heat ≈ 1,5–2,0 GJ/t baja, *top gas* sensible heat ≈ 2,5–3,5 GJ/t baja, COG latent). Standar acuan: ISO 50001 (Energy Management) dan ISO 14064 (GHG Inventory).

**Tahap 2 – Seleksi Arsitektur CC.** Mengikuti matriks keputusan Perpiñán et al. (2022): (i) PCC jika retrofit diperlukan dengan TRL 9 dan biaya $40–80 $/tCO₂; (ii) *Chemical Looping* (CLC) untuk retrofit kokas dengan TRL 5–6; (iii) Oxy-fuel untuk *greenfield* dengan kebutuhan ASU tinggi; (iv) Pre-combustion untuk *Top Gas Recycling* BF. Kriteria keputusan mempertimbangkan *turn-down ratio*, konsentrasi CO₂ sumber, dan kebutuhan reboiler duty.

**Tahap 3 – Desain Sistem ORC.** Pemilihan fluida kerja mengikuti metodologi Sánchez et al. (2025): (a) analisis profil suhu sumber panas; (b) penyaringan termodinamika (临界温度 $T_{crit}$, kemiringan kurva uap); (c)筛选 GWP rendah sesuai Regulasi F-Gas; (d) evaluasi zeotropic mixtures (misalnya R-1234ze(Z)/R-152a) untuk *glide*匹配.

**Tahap 4 – Integrasi Proses.** Penempatan evaporator ORC pada *waste heat streams* prioritas (sensible heat slag, top gas cooled, reboiler waste heat), dengan HX tipe *two-phase thermosiphon* atau *shell-and-plate*. Diagram alir:

```
BF Top Gas (150 °C) → Cyclone Dust → Quench → BFG HX → ORC Evaporator
                                                          ↓
                                                    ORC Turbine
                                                          ↓
                                                    Generator
                                                          ↓
                                                   CO₂-rich Stream → PCC Absorber → Stripper → Compression → CCUS
```

**Tahap 5 – Commissioning & Monitoring.** Standar ASME PTC 1 untuk performance test, continuous emission monitoring system (CEMS) sesuai EN 14181, dan digital twin untuk optimasi real-time.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Pabrik Baja Terintegrasi

Ambil pabrik baja BF-BOF hipotetis dengan spesifikasi realistis:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Kapasitas produksi baja | $C = 5{,}0$ | Mt/tahun |
| Intensitas emisi spesifik | $E_{CO_2} = 2{,}1$ | tCO₂/t baja |
| Laju *capture* target | $\alpha = 0{,}90$ | – |
| Energy penalty spesifik | $e_{cap} = 3{,}5$ | GJ/tCO₂ |
| Jam operasi | $t_{op} = 8{,}000$ | jam/tahun |

### 4.2 Perhitungan Debit CO₂ dan Beban Energi Capture

**Langkah 1 — Debit emisi bruto:**

$$\dot{m}_{CO_2}^{gross} = 2{,}1 \times 5{,}0 = 10{,}5 \text{ Mt CO}_2/\text{tahun}$$

**Langkah 2 — Debit CO₂ yang ditangkap:**

$$\