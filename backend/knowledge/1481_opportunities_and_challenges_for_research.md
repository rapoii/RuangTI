# 1481 — Pemulihan Energi Termal dari Air Limbah: Analisis Bibliometrik, Formulasi Rekayasa Perpindahan Panas, dan Integrasi Lintas Sektor dalam Rangka Transisi Energi Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Opportunities and Challenges for Research on Heat Recovery from Wastewater: Bibliometric and Strategic Analyses
**Jurnal & Sitasi Utama:** Sabina Kordana-Obuch, Michał Wojtoń, Mariusz Starzec (2023). *Energies*, 16(17), 6370. DOI: [https://doi.org/10.3390/en16176370](https://doi.org/10.3390/en16176370)
**Sitasi Pendukung:** Ana-Maria Chiroșcă, Eugen Rusu, Viorel Mînzu (2024). *Energies*, 17(23), 5820. DOI: [https://doi.org/10.3390/en17235820](https://doi.org/10.3390/en17235820)

---

## 1. Pendahuluan dan Konteks Industri

Krisis energi global yang dipicu oleh fluktuasi harga hidrokarbon, ketergantungan pada bahan bakar fosil, serta target dekarbonisasi Paris Agreement telah memaksa komunitas rekayasa industri untuk mengeksplorasi sumber energi alternatif yang sebelumnya terabaikan. Salah satu sumber yang berpotensi signifikan adalah air limbah (wastewater), yang menyimpan energi termal laten dalam volume sangat besar karena suhu relatifnya yang lebih tinggi dibanding lingkungan ambien selama hampir sepanjang tahun. Kordana-Obuch, Wojtoń, dan Starzec (2023) dalam artikelnya di jurnal *Energies* (DOI: [10.3390/en16176370](https://doi.org/10.3390/en16176370)) menegaskan bahwa potensi pemulihan panas dari air limbah tersedia pada berbagai tahap siklus — mulai dari tahap pembangkitan (generation), pengangkutan (transport), hingga pengolahan (treatment) — yang membuka peluang implementasi heat exchanger dan heat pump di berbagai skala, baik level bangunan maupun level kawasan.

Konteks industri modern membutuhkan pendekatan *evidence-based* dalam mengevaluasi kelayakan teknologi pemulihan energi. Oleh sebab itu, Kordana-Obuch dkk. (2023) melakukan analisis bibliometrik terhadap literatur terindeks *Web of Science* dan memperkuatnya dengan analisis strategis SWOT serta SOAR untuk mengidentifikasi faktor internal-eksternal yang menentukan keunggulan kompetitif teknologi pemulihan panas air limbah. Hasil analisis menunjukkan bahwa implementasi teknologi ini secara langsung berkontribusi pada *Sustainable Development Goals* (SDG), khususnya SDG 7 (Energi Bersih dan Terjangkau) dan SDG 13 (Penanganan Perubahan Iklim). Urgensi operasional makin tinggi ketika kita mempertimbangkan bahwa di Uni Eropa saja, sektor pengolahan air limbah mengonsumsi sekitar 1% dari total konsumsi listrik nasional, menjadikannya salah satu kontributor emisi GRK yang signifikan.

Perspektif transisi energi semakin diperluas oleh Chiroșcă, Rusu, dan Mînzu (2024) dalam *Energies* (DOI: [10.3390/en17235820](https://doi.org/10.3390/en17235820)) yang menyoroti peran hidrogen hijau (*green hydrogen*) sebagai solusi dekarbonisasi di sektor industri, transportasi, pembangkitan daya, dan panas. Kedua paper — meski membahas topik yang tampak terpisah — sebenarnya membentuk satu *grand narrative*: optimalisasi energi termal air limbah tidak berdiri sendiri, melainkan merupakan komponen integral dalam ekosistem transisi energi yang lebih luas, di mana panas yang dipulihkan dapat digunakan untuk meningkatkan efisiensi produksi hidrogen hijau, mengeringkan biogas, atau melayani district heating system. Dengan demikian, pemulihan panas dari air limbah merupakan *enabler technology* yang memiliki signifikansi strategis dalam agenda *Net-Zero Emission* global.

---

## 2. Landasan Teori & Formulasi Matematis

Perancangan sistem pemulihan panas dari air limbah memerlukan pemahaman terhadap tiga pilar formulasi: perpindahan panas pada heat exchanger, performa termodinamika heat pump, dan indikator kuantitatif bibliometrik.

### 2.1 Log Mean Temperature Difference (LMTD)

Untuk shell-and-tube heat exchanger yang umum diaplikasikan pada air limbah, driving force perpindahan panas dinyatakan sebagai:

$$\Delta T_{LMTD} = \frac{\Delta T_1 - \Delta T_2}{\ln\left(\frac{\Delta T_1}{\Delta T_2}\right)}$$

dengan $\Delta T_1 = T_{h,in} - T_{c,out}$ dan $\Delta T_2 = T_{h,out} - T_{c,in}$. Persamaan laju perpindahan panas total:

$$Q = U \cdot A \cdot \Delta T_{LMTD} \cdot F$$

di mana $U$ adalah koefisien perpindahan panas overall $(W/m^2K)$, $A$ adalah luas area perpindahan panas $(m^2)$, dan $F$ adalah faktor koreksi konfigurasi aliran.

### 2.2 Metode Effectiveness-NTU

Kordana-Obuch dkk. (2023) menyoroti bahwa pada aplikasi lapangan, terutama dengan debit air limbah yang fluktuatif, metode NTU lebih robust dibanding LMTD. Kapasitas panas minimum didefinisikan:

$$C_{min} = \min(\dot{m}_h c_{p,h}, \dot{m}_c c_{p,c})$$

Rasio kapasitas:

$$C_r = \frac{C_{min}}{C_{max}}$$

Untuk konfigurasi *counter-flow*:

$$\varepsilon = \frac{1 - \exp\left[-NTU(1 - C_r)\right]}{1 - C_r \exp\left[-NTU(1 - C_r)\right]}$$

dengan $NTU = \frac{U \cdot A}{C_{min}}$.

### 2.3 Coefficient of Performance (COP) Heat Pump

Energi termal yang dapat dipulihkan sering kali harus dinaikkan suhunya melalui heat pump:

$$COP_{HP} = \frac{Q_{useful}}{W_{input}} = \frac{Q_{evap} + W_{comp}}{W_{comp}}$$

Untuk siklus Carnot ideal:

$$COP_{Carnot} = \frac{T_{hot}}{T_{hot} - T_{cold}}$$

Dalam kondisi nyata, dengan mempertimbangkan irreversibilitas dan faktor-faktor seperti superheating, subcooling, dan efisiensi kompresor $\eta_{comp}$, persamaan menjadi:

$$COP_{real} = \eta_{comp} \cdot \eta_{motor} \cdot COP_{Carnot} \cdot \prod_i \eta_i$$

### 2.4 Indikator Bibliometrik

Analisis bibliometrik Kordana-Obuch dkk. (2023) menggunakan indikator seperti *h-index*, *impact factor* jurnal, dan *citation burst detection* untuk memetakan trajektori riset. Faktor produktivitas penulis dimodelkan:

$$P_i = \sum_{j=1}^{n_i} \frac{c_j}{\max(t - t_j + 1, 1)}$$

di mana $c_j$ adalah jumlah sitasi publikasi ke-$j$, $t$ adalah tahun acuan, dan $t_j$ adalah tahun publikasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pemulihan panas air limbah mengikuti kerangka SOP sebagai berikut:

**Langkah 1 — Karakterisasi Sumber Air Limbah.** Lakukan sampling debit $\dot{V}$, suhu inflow $T_{in}$, dan profil termal harian-musiman. Untuk instalasi kota berpenduduk 100.000 jiwa, debit tipikal berkisar 15.000–25.000 m³/hari dengan suhu 12–20°C sepanjang tahun.

**Langkah 2 — Seleksi Teknologi.** Berdasarkan analisis Kordana-Obuch dkk. (2023), tiga skenario utama:
- *Building-level*: shower heat exchanger + heat pump untuk bangunan komersial.
- *Sewer-level*: in-sewer heat exchanger di jaringan air limbah.
- *Treatment plant-level*: effluent heat exchanger di outlet IPAL.

**Langkah 3 — Perancangan Heat Exchanger.** Gunakan metode NTU-effectiveness untuk menentukan $A$ optimum dengan target $\varepsilon \geq 0{,}6$ untuk instalasi sewage-level.

**Langkah 4 — Integrasi Heat Pump.** Tentukan $COP_{HP}$ target ≥ 3,5 untuk aplikasi district heating.

**Langkah 5 — Analisis SWOT/SOAR.** Identifikasi Strengths, Weaknesses, Opportunities, Aspirations, dan Results sesuai framework Kordana-Obuch dkk. (2023).

**Langkah 6 — Validasi Empiris & Commissioning.** Uji performa dengan pengukuran $Q_{aktual}$ versus $Q_{desain}$, dengan toleransi deviasi ≤ 10%.

Diagram alir proses:

```
[Sumber Air Limbah] → [Screening] → [Grit Removal]
        ↓
[Primary Settling] → [In-Sewer HE] → [Biological Treatment]
        ↓
[Effluent HE + Heat Pump] → [District Heating / Domestic Use]
        ↓
[Energy Output Q_thermal] → [Monitoring & Control]
        ↓
[Sludge Digestion] → [Biogas] → [CHP / Hydrogen Pathway]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Instalasi pemulihan panas di Instalasi Pengolahan Air Limbah (IPAL) Kota X dengan kapasitas 20.000 m³/hari.

**Parameter Input:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Debit air limbah $\dot{V}_w$ | 20.000 | m³/hari |
| Suhu air limbah inflow $T_{h,in}$ | 16 | °C |
| Suhu target outflow $T_{h,out}$ | 8 | °C |
| Debit air domestik target $\dot{V}_c$ | 30 | L/s |
| Suhu air pendingin inflow $T_{c,in}$ | 5 | °C |
| Suhu air pendingin outflow $T_{c,out}$ | 12 | °C |
| $\rho_w$ (densitas air limbah) | 998 | kg/m³ |
| $c_p$ | 4.186 | kJ/(kg·K) |
| $U$ (koefisien overall HE) | 450 | W/(m²·K) |

**Langkah 1: Perhitungan Energi Termal yang Tersedia**

Debit massa air limbah:
$$\dot{m}_w = \frac{20.000 \times 998}{86400} = 231{,}02 \text{ kg/s}$$

Laju perpindahan panas tersedia:
$$Q_{avail} = \dot{m}_w \cdot c_p \cdot (T_{h,in} - T_{h,out})$$
$$Q_{avail} = 231{,}02 \times 4.186 \times (16 - 8) = 7.737{,}0 \text{ kW}$$

**Langkah 2: Kapasitas Panas Minimum & C_r**

$$C_w = 231{,}02 \times 4{,}186 = 967{,}1 \text{ kW/K}$$

$$C_c = 30 \times 4{,}186 = 125{,}6 \text{ kW/K}$$

$$C_{min} = 125{,}6 \text{ kW/K}, \quad C_r = \frac{125{,}6}{967{,}1} = 0{,}1299$$

**Langkah 3: Energi Aktual yang Dipulihkan**

Asumsi target effectiveness $\varepsilon = 0{,}55$:
$$Q_{actual} = \varepsilon \cdot C_{min} \cdot (T_{h,in} - T_{c,in}) = 0{,}55 \times 125{,}6 \times (16 - 5) = 759{,}9 \text{ kW}$$

**Langkah 4: Perhitungan NTU & Luas HE**

Iterasi numerik untuk $NTU$ pada $C_r = 0{,}1299$ dan $\varepsilon = 0{,}55$:

$$NTU = \frac{-\ln\left[1 - \varepsilon(1 - C_r)\right]}{1 - C_r} = \frac{-\ln[1 - 0{,}55 \times 0{,}8701]}{0{,}8701}$$

$$NTU = \frac{-\ln(0{,}5215)}{0{,}8701} = \frac{0{,}6515}{0{,}8701} = 0{,}749$$

Luas area perpindahan panas:
$$A = \frac{NTU \cdot C_{min}}{U} = \frac{0{,}749 \times 125{,}6 \times 1000}{450} = 209{,}1 \text{ m}^2$$

**Langkah 5: Integrasi Heat Pump untuk District Heating**

Tujuan: menaikkan suhu dari $T_{c,out} = 12°C$ menjadi $T_{hot} = 55°C$ untuk district heating:

$$COP_{Carnot} = \frac{328{,}15}{328{,}15 - 285{,}15} = \frac{328{,}15}{43} = 7{,}63$$

Dengan asumsi $\eta_{total} =$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
