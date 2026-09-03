# 1465 — Sistem Konversi Termal Superkritikal CO₂ untuk Pembangkitan Daya, Penyimpanan Energi, dan Pemulihan Panas Buang: Perspektif Teknik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Progress and Prospects for Research and Technology Development of Supercritical CO₂ Thermal Conversion Systems for Power, Energy Storage, and Waste Heat Recovery
**Jurnal & Sitasi Utama:** Lixin Cheng, Guodong Xia (2023). *Heat Transfer Engineering*. DOI: [https://doi.org/10.1080/01457632.2023.2282765](https://doi.org/10.1080/01457632.2023.2282765)
**Sitasi Pendukung:** Jian Sun, Pengtao Wang, Lei Gao (2025). *Journal of Thermal Science and Engineering Applications*. DOI: [https://doi.org/10.1115/1.4070129](https://doi.org/10.1115/1.4070129)

---

## 1. Pendahuluan dan Konteks Industri

Krisis energi global dan desakan dekarbonisasi telah mendorong komunitas Teknik Industri untuk mencari solusi pembangkitan daya, penyimpanan energi, dan pemulihan panas buang (waste heat recovery/WHR) yang memiliki jejak karbon rendah dan efisiensi termodinamika tinggi. Cheng dan Xia (2023) dalam telaah komprehensifnya di *Heat Transfer Engineering* (DOI: [10.1080/01457632.2023.2282765](https://doi.org/10.1080/01457632.2023.2282765)) menekankan bahwa CO₂ merupakan fluida perpindahan kalor yang ramah lingkungan dan memiliki sifat transpor termal serta fisika yang unik sehingga sangat relevan untuk aplikasi heat pump, pendingin udara (*air-conditioning*), pembangkitan daya, sistem energi terbarukan, penyimpanan energi, manajemen termal, dan pemulihan panas buang. Kedua varian siklus — siklus superkritikal (S-CO₂) dan transkritikal — telah diteliti secara ekstensif untuk meningkatkan efisiensi sistem termal dan daya dalam rangka mencapai target emisi karbon netto-nol (*net-zero carbon emissions*).

Dalam konteks rantai pasok energi industri, urgensi adopsi teknologi S-CO₂ muncul dari tiga faktor simultan: (1) menurunnya kualitas sumber energi fosil dan meningkatnya biaya operasional; (2) ketersediaan panas buang tingkat menengah (200–500 °C) yang selama ini terbuang sia-sia di sektor semen, baja, kaca, dan petrokimia; serta (3) kebutuhan akan sistem penyimpanan energi termal (*thermal energy storage*/TES) yang kompak untuk menyeimbangkan intermitensi sumber energi terbarukan. Menurut Cheng & Xia (2023), siklus Brayton S-CO₂ menawarkan keunggulan signifikan dibanding siklus Rankine uap tradisional, terutama pada skala 1–10 MWe, karena memungkinkan reaktor/turbin yang jauh lebih ringkas, rasio tekanan kompresi yang lebih tinggi dengan kerja kompresi yang terkontrol, serta integrasi pemulihan kalor (recuperator) yang sangat efektif.

Secara paralel, Sun, Wang, dan Gao (2025) dalam *Journal of Thermal Science and Engineering Applications* (DOI: [10.1115/1.4070129](https://doi.org/10.1115/1.4070129)) menyoroti bahwa High-Temperature Heat Pumps (HTHPs) merupakan komponen esensial untuk meningkatkan efisiensi energi di berbagai aplikasi industri, khususnya dalam mengintegrasikan sumber energi terbarukan dan memulihkan panas buang. Perkembangan fluida kerja HTHP berevolusi dari refrigeran tradisional menuju alternatif modern dengan *Global Warming Potential* (GWP) rendah. Regulasi lingkungan seperti Protokol Montreal dan Amandemen Kigali telah melarang refrigeran dengan *Ozone Depletion Potential* (ODP) tinggi dan membatasi GWP, sehingga pengembangan refrigeran generasi berikutnya sangat dipengaruhi oleh kepatuhan regulasi. Pemilihan fluida kerja HTHP terkait erat dengan jenis siklus kompresi uap yang digunakan dan harus disesuaikan dengan aplikasi industri spesifik.

Dari perspektif *industrial engineering*, kedua paper ini bertemu pada satu titik strategis: pemilihan fluida kerja dan arsitektur siklus termodinamika menentukan performa, kelayakan ekonomi, dan kepatuhan lingkungan sistem. Dokumen modul ini akan membedah landasan teoritis, metodologi rekayasa, dan perhitungan numerik untuk mendukung keputusan investasi pada sistem konversi termal S-CO₂ dan HTHP di lintas-sektor manufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Sifat Termodinamika CO₂ di Daerah Superkritikal

CO₂ memiliki titik kritis pada temperatur $T_c = 304{,}13\ \text{K}$ ($31{,}04\ ^\circ\text{C}$) dan tekanan kritis $P_c = 7{,}377\ \text{MPa}$. Di atas titik kritis ini, CO₂ berada dalam fase superkritikal yang menggabungkan sifat difusi mirip gas dengan densitas mirip cairan. Massa jenis $\rho$ di wilayah ini sangat sensitif terhadap perubahan temperatur dan tekanan:

$$\rho(T,P) = \rho_c \cdot \exp\left[-\beta_T \cdot (P - P_c) + \alpha_P \cdot (T - T_c)\right]$$

di mana $\beta_T$ adalah kompresibilitas isotermal dan $\alpha_P$ adalah koefisien ekspansi termal barometrik. Viskositas dinamik $\mu$ mengikuti persamaan tipe Chapman-Enskog yang telah dikalibrasi NIST:

$$\mu(T,\rho) = \mu_0(T) + \mu_1(T)\rho + \mu_2(T)\rho^2$$

Heat transfer coefficient $h$ untuk S-CO₂ dalam *printed circuit heat exchanger* (PCHE) mengikuti korelasi Dittus-Boelter yang dimodifikasi, mengingat efek buoyancy di dekat *pseudo-critical temperature* $T_{pc}$ sangat kuat:

$$\text{Nu} = 0{,}0183 \cdot \text{Re}_b^{0{,}82} \cdot \overline{\text{Pr}}_b^{-0{,}5} \cdot \left(\frac{\rho_w}{\rho_b}\right)^{0{,}3}$$

dengan $\text{Re}_b$ berbasis pada kecepatan massa (*mass flux*) $G$ dan diameter hidrolik $D_h$.

### 2.2. Efisiensi Siklus Brayton S-CO₂ dengan Recuperator

Siklus Brayton S-CO₂ sederhana terdiri dari empat komponen utama: kompresor, recuperator, heater (sumber panas), turbin, dan cooler. Efisiensi termal teoritis untuk siklus ideal adalah:

$$\eta_{\text{Brayton,ideal}} = 1 - \left(\frac{P_1}{P_2}\right)^{\frac{\gamma-1}{\gamma}} = 1 - r_p^{\frac{1-\gamma}{\gamma}}$$

di mana $r_p = P_2/P_1$ adalah rasio tekanan kompresi dan $\gamma = c_p/c_v$ adalah rasio panas spesifik. Untuk CO₂ ($\gamma \approx 1{,}28$ pada 350 K, 10 MPa), dengan $r_p = 4$:

$$\eta_{\text{Brayton,ideal}} = 1 - 4^{-0{,}219} \approx 0{,}291 \text{ atau } 29{,}1\%$$

Ketika recuperator dipasang dengan efektivitas $\varepsilon_R$, efisiensi siklus menjadi:

$$\eta_{\text{Brayton,recup}} = \eta_{\text{Brayton,ideal}} + \frac{\varepsilon_R \cdot (1 - \eta_{\text{Brayton,ideal}})}{(1 - \eta_{\text{Brayton,ideal}}) \cdot (1 - \varepsilon_R) + \varepsilon_R}$$

Cheng & Xia (2023) melaporkan bahwa efisiensi siklus S-CO₂ dengan recuperator dapat mencapai 45–50% pada temperatur sumber $T_{in} = 700\ ^\circ\text{C}$ dan $T_{out} = 500\ ^\circ\text{C}$, jauh melampaui siklus Rankine uap pada skala serupa.

### 2.3. COP Siklus Transkritikal CO₂ untuk HTHP

Untuk aplikasi heat pump transkritikal CO₂, koefisien performa (COP) pemanasan didefinisikan sebagai:

$$\text{COP}_h = \frac{q_h}{w_{\text{net}}} = \frac{h_3 - h_4}{h_2 - h_1}$$

di mana $h_1$ (masuk kompresor), $h_2$ (keluar kompresor, sisi tekanan tinggi), $h_3$ (keluar gas cooler), dan $h_4$ (masuk evaporator) adalah entalpi spesifik pada masing-masing state point. COP Carnot batas atas untuk rentang temperatur tertentu:

$$\text{COP}_{\text{Carnot},h} = \frac{T_h}{T_h - T_c}$$

Untuk HTHP dengan $T_h = 150\ ^\circ\text{C}$ ($423\ \text{K}$) dan $T_c = 20\ ^\circ\text{C}$ ($293\ \text{K}$):

$$\text{COP}_{\text{Carnot},h} = \frac{423}{423 - 293} = \frac{423}{130} \approx 3{,}25$$

COP aktual transkritikal CO₂ untuk rentang tersebut umumnya berada di rentang 2,0–2,8 menurut Sun, Wang, & Gao (2025), sehingga *second-law efficiency* $\eta_{II}$:

$$\eta_{II} = \frac{\text{COP}_{\text{aktual}}}{\text{COP}_{\text{Carnot}}} \approx 0{,}62 - 0{,}86$$

### 2.4. Kriteria Pemilihan Fluida Kerja HTHP

Sun, Wang, & Gao (2025) menyusun kerangka multi-kriteria untuk menyeleksi fluida kerja HTHP dengan bobot keputusan:

$$\text{Score}_i = w_1 \cdot \text{GWP}_i + w_2 \cdot \text{ODP}_i + w_3 \cdot \text{TF}_i + w_4 \cdot \text{ST}_i + w_5 \cdot \text{CP}_i$$

di mana TF adalah *thermal performance factor* (kombinasi kapasitas volumetrik dan kalor laten), ST adalah *safety toxicity class* (ASHRAE A1–B3), dan CP adalah *compatibility* terhadap material seal dan pelumas. Untuk aplikasi industri, refrigeran alami seperti CO₂ (R-744), R-290 (propana), R-1270 (propilena), amonia (R-717), dan hidrokarbon sintetis seperti R-1234ze(Z) menjadi kandidat utama GWP rendah.

### 2.5. Model Penyimpanan Energi Termal (TES) Berbasis S-CO₂

Untuk sistem *packed-bed thermocline storage* dengan S-CO₂ sebagai fluida kerja, model satu dimensi Schumann-Missen memberikan distribusi temperatur:

$$\rho_s c_{p,s} \frac{\partial T_s}{\partial t} = k_{s,\text{eff}} \frac{\partial^2 T_s}{\partial z^2} + h_v A_v (T_f - T_s)$$

$$\rho_f c_{p,f} \varepsilon \frac{\partial T_f}{\partial t} + \rho_f c_{p,f} u \frac{\partial T_f}{\partial z} = h_v A_v (T_s - T_f)$$

Subskrip $s$ dan $f$ masing-masing menunjukkan padatan dan fluida. Model ini memungkinkan prediksi durasi pelepasan muatan (*discharge*) untuk sizing reservoir termal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem S-CO₂ dan HTHP di lantai produksi mengikuti prosedur rekayasa bertahap yang diadopsi dari praktik terbaik industri dan Standar ASME PTC-4 (siklus turbin gas) serta ISO 13256 (heat pump testing).

**Tahap 1 — Karakterisasi Sumber Panas dan Beban.** Audit energi industri harus dilakukan dengan *pinch analysis* menggunakan software seperti Aspen Energy Analyzer atau STAR para menentukan kurva *composite curve* sumber-penguras. Untuk facility recovery, target minimum $\Delta T_{\min} = 10\ ^\circ\text{C}$ dan pendekatan minimum utility temperature difference direkomendasikan.

**Tahap 2 — Pemilihan Arsitektur Siklus.** Diagram alir keputusan berikut menjadi acuan:

```
[1] Sumber Panas 200–500 °C? ── Ya ──> Siklus Brayton S-CO₂ + Recuperator
        │
       Tidak
        ↓
[2] Sumber Panas 80–200 °C & butuh pemanasan < 150 °C? ── Ya ──> HTHP transkritikal CO₂
        │
       Tidak
        ↓
[3] Sumber Panas < 80 °C ──> HTHP dengan refrigeran alternatif (R-1234ze, R-290)
```

**Tahap 3 — Desain Komponen Kritis.** Kompresor sentrifugal S-CO₂ didesain pada titik operasi yang memperhitungkan *surge margin* minimal 15%. PCHE (Printed Circuit Heat Exchanger) dipilih untuk densitas area tinggi ($>2500\ \text{m}^2/\text{m}^3$). Material turbin adalah Inconel 740H atau Haynes 282 untuk operasi pada $T_{in} > 600\ ^\circ\text{C}$.

**Tahap 4 — Integrasi dan Commissioning.** Langkah instalasi mengikuti ASME B31.1 Power Piping untuk sistem uap dan ASME B31.3 Process Piping untuk fluida kerja CO₂. Pengujian tekanan hidrostatis pada rasio 1,5× MAWP dan *helium leak test* pada sensitivitas $10^{-9}\ \text{Pa·m}^3/\text{s}$ wajib dilakukan.

**Tahap 5 — Commissioning Loop dan Performance Verification.** Pengukuran daya listrik neto, laju aliran massa, dan kurva tekanan-temperatur dibandingkan dengan prediksi siklus dalam toleransi ±5%.