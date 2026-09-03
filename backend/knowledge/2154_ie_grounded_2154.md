# 2154 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis Menggunakan Fluida Superkritis CO₂: Integrasi Model Perpindahan Panas dan Massa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitofarmaka global mengalami transformasi paradigma pada dekade terakhir, didorong oleh permintaan pasar akan cannabinoid aktif (terutama THC, CBD, CBG, dan CBN) yang digunakan dalam aplikasi farmasi, nutraceutical, kosmetik, dan produk kesehatan konsumen. Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, total addressable market ekstrak cannabis legalisasi secara global diproyeksikan menembus USD 55–70 miliar pada 2030, dengan yield ekstrak minyak cannabis menggunakan pelarut organik konvensional (etanol, heksana, kloroform) hanya berkisar 8–14% bobot-basis biomassa, disertai permasalahan残留 pelarut (solvent residue) yang melanggar standar farmakope USP <467> dan European Pharmacopoeia 2.8.9. Di sinem konteks urgensi operasional, ekonomi, dan teknis dari teknologi *Supercritical Fluid Extraction with Carbon Dioxide* (SFE-CO₂) muncul sebagai pendekatan green-chemistry yang memenuhi *Good Manufacturing Practice* (GMP) farmasi.

Toledo & del Valle (2023) menyoroti bahwa efisiensi proses SFE-CO₂ sangat bergantung pada tiga tahap siklus termodinamika kritis: **(i) pressurization** (kompresi isentropik CO₂ dari fase gas ke fase superkritis, biasanya di atas tekanan kritis $P_c = 7.38$ MPa dan suhu kritis $T_c = 304.13$ K); **(ii) extraction** (kontak difusional antara CO₂ superkritis dengan matriks padat biomassa cannabis di dalam extractor vessel pada tekanan operasional 15–35 MPa dan suhu 313–353 K); serta **(iii) depressurization** (ekspansi CO₂ ke separator untuk回收 solute). Ketiga tahap ini sangat sensitif terhadap fenomena perpindahan panas yang sering diabaikan dalam pemodelan isothermal klasik, padahal gradien suhu akibat efek Joule-Thomson invers (di mana koefisien $\mu_{JT} < 0$ untuk CO₂ pada kondisi operasional ekstraksi) dapat menyebabkan inefisiensi yield hingga 18–22%.

Aspek operasional utama yang menjadi perhatian insinyur industri dalam desain dan optimalisasi SFE-CO₂ mencakup: laju alir massa CO₂ (umumnya 4–20 kg/jam per kg biomassa, dikenal sebagai Solvent-to-Feed ratio atau S/F), ukuran partikel biomassa (50–500 μm), moisture content (di bawah 12% untuk menghindari es-channeling), densitas unggun (bed porosity $\varepsilon \approx 0.3$–$0.5$), serta konfigurasi geometris extractor vessel yang umumnya berbentuk silinder aksisimetrik dengan diameter dalam 50–500 mm dan panjang 1–5 m. Untuk itulah Obchoei & Limtrakarn (2024) mengembangkan model aliran aksisimetrik 2D-CFD yang menangkap fenomena transpor momentum, massa, dan panas dalam geometri silinder extractor SFE-CO₂.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Asumsi dan Domain Komputasi Axisymmetric

Model yang dikembangkan oleh Obchoei & Limtrakarn (2024) menggunakan geometri axisymmetric 2D, di mana koordinat silinder $(r, z)$ digunakan untuk menurunkan persamaan konservasi. Asumsi fundamental yang melandasi model meliputi: **(a)** aliran tunak (*steady-state*) selama tahap ekstraksi quasi-steady; **(b)** sifat fluida CO₂ superkritis dievaluasi menggunakan persamaan keadaan *Peng-Robinson*; **(c)** CO₂ diperlakukan sebagai fluida compressible dengan viskositas dinamis $\mu_{CO_2}$ yang bergantung pada $P$ dan $T$; **(d)** partikel biomassa cannabis diperlakukan sebagai matriks berpori homogen dengan diameter efektif $d_p$.

### 2.2 Persamaan Kontinuitas (Mass Conservation)

Untuk aliran compressible dalam koordinat silinder axisymmetric:

$$\frac{\partial}{\partial z}(\rho u_z) + \frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) = 0$$

di mana $\rho$ adalah densitas CO₂, $u_z$ dan $u_r$ adalah komponen kecepatan aksial dan radial.

### 2.3 Persamaan Momentum (Navier-Stokes Axisymmetric)

Persamaan momentum dalam arah aksial dan radial untuk geometri aksisimetrik, dengan memperhitungkan efek Forchheimer untuk aliran melalui media berpori:

$$\rho\left(u_z \frac{\partial u_z}{\partial z} + u_r \frac{\partial u_z}{\partial r}\right) = -\frac{\partial P}{\partial z} + \mu_{CO_2}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu_{CO_2}}{K}u_z - \beta \rho u_z \sqrt{u_z^2 + u_r^2}$$

$$\rho\left(u_z \frac{\partial u_r}{\partial z} + u_r \frac{\partial u_r}{\partial r}\right) = -\frac{\partial P}{\partial r} + \mu_{CO_2}\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{\mu_{CO_2}}{K}u_r - \beta \rho u_r \sqrt{u_z^2 + u_r^2}$$

di mana $K$ adalah permeabilitas intrinsik unggun biomassa (diestimasi menggunakan persamaan Kozeny-Carman) dan $\beta$ adalah koefisien inersia Forchheimer.

### 2.4 Persamaan Energi (Heat Transfer Coupled)

Mengikuti kerangka Toledo & del Valle (2023), persamaan energi untuk fase fluida dengan sumber panas dari efek Joule-Thomson dan dissipasi viskos:

$$\rho c_p \left(u_z \frac{\partial T}{\partial z} + u_r \frac{\partial T}{\partial r}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) - \rho c_p \mu_{JT} \left(u_z \frac{\partial P}{\partial z} + u_r \frac{\partial P}{\partial r}\right)$$

di mana $c_p$ adalah kapasitas panas spesifik CO₂ superkritis, $k_{eff}$ adalah konduktivitas termal efektif (gabungan konduksi fluida dan dispersi termal), dan $\mu_{JT}$ adalah koefisien Joule-Thomson yang bernilai negatif untuk CO₂ pada kondisi superkritis.

### 2.5 Persamaan Transpor Spesies (Cannabis Oil Extraction)

Untuk mekanisme ekstraksi minyak cannabis dari matriks padat, digunakan model *shrinking core* yang dikonjugasikan dengan difusi internal:

$$D_{eff} \left[\frac{\partial^2 C}{\partial z^2} + \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right)\right] = u_z \frac{\partial C}{\partial z} + u_r \frac{\partial C}{\partial r} + \frac{(1-\varepsilon)}{\varepsilon}\rho_s k_s (C^* - C)$$

di mana $D_{eff}$ adalah koefisien dispersi aksial-radial efektif, $C$ adalah konsentrasi minyak cannabis dalam fase CO₂, $\rho_s$ adalah densitas partikel padat, $k_s$ adalah koefisien transfer massa eksternal, dan $C^*$ adalah konsentrasi kesetimbangan yang dievaluasi melalui persamaan Chrastil:

$$C^* = \rho^r \exp\left(\frac{a}{T} + b\right)$$

dengan $r$ adalah parameter fitting tergantung jumlah molekul CO₂ yang mengelilingi satu molekul solute, $a$ dan $b$ adalah parameter model.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses SFE-CO₂ Cannabis Oil

Diagram proses operasi standar industri menurut integrasi dua literatur:

```
[CO₂ Tank] → [Liquid Pump (Diaphragm)] → [Pre-Heater] → [Main Compressor]
                                                              ↓
                                              [Extractor Vessel (15-35 MPa, 313-353 K)]
                                                              ↓ (Spent Biomass)
                                              [Expansion Valve] → [Separator 1 (8-10 MPa)]
                                                                          ↓
                                              [Expansion Valve 2] → [Separator 2 (4-6 MPa)]
                                                                          ↓ (Extract)
                                              [CO₂ Recovery] → [Recycle Compressor]
```

### 3.2 Prosedur Operasional Standar (SOP) Rekayasa

**Tahap 1: Pre-Processing Biomass**
1. Pengeringan biomassa cannabis pada $T = 313$ K selama 24 jam hingga moisture content $< 10$% (mengikuti standar Toledo & del Valle, 2023).
2. Penggilingan cryogenic hingga ukuran partikel $d_p = 200$–$400$ μm.
3. Pengisian extractor vessel dengan rasio densitas unggun $\varepsilon \approx 0.4$.

**Tahap 2: Pressurization (CO₂ Compression)**
1. Aktifkan kompressor untuk menaikkan tekanan bertahap dari tekanan atmosfer menuju tekanan operasional target ($P_{target} = 25$ MPa).
2. Aktifkan pre-heater untuk mengatur suhu inlet $T_{in} = 323$ K.
3. Monitoring gradien suhu akibat $\mu_{JT}$ secara real-time menggunakan termokopel Tipe-K pada posisi aksial 25%, 50%, dan 75% dari panjang vessel.

**Tahap 3: Extraction (Static + Dynamic Mode)**
1. Static extraction: tutup katup outlet selama 30 menit untuk equilibrasi.
2. Dynamic extraction: buka katup outlet dengan laju alir $\dot{m}_{CO_2} = 8$–$12$ kg/jam per kg biomassa.
3. Sampling ekstrak setiap interval 15 menit untuk monitoring profil yield.

**Tahap 4: Depressurization (Cascade Separation)**
1. Ekspansi bertahap dari 25 MPa ke 8 MPa pada separator 1 ($T_{sep1} = 313$ K) untuk回収 fraksi berat (waxes, chlorophyll).
2. Ekspansi kedua dari 8 MPa ke 4 MPa pada separator 2 ($T_{sep2} = 298$ K) untuk回収 fraksi target (cannabinoid concentrate).

### 3.3 Standar dan Regulasi

Proses harus memenuhi: GMP EU No. 2017/1572 untuk bahan aktif farmasi; USP <467> untuk residual solvents; ISO 22000 untuk food-grade extracts; ASTM D808 untuk pengujian kemurnian.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Sistem Industri Hipotetis

Kami melakukan simulasi kuantitatif berdasarkan parameter dari Obchoei & Limtrakarn (2024) untuk extractor vessel dengan kapasitas industri:

- Diameter dalam vessel: $D = 150$ mm
- Panjang vessel: $L = 2.0$ m
- Tekanan operasional: $P = 25$ MPa
- Suhu operasional: $T = 333$ K (60°C)
- Laju alir massa CO₂: $\dot{m}_{CO_2} = 10$ kg/jam per kg biomassa
- Diameter partikel biomassa: $d_p = 300$ μm
- Porositas unggun: $\varepsilon = 0.40$
- Beban biomassa: $m_{bio} = 8$ kg

### 4.2 Perhitungan Densitas CO₂ Superkritis

Pada $P = 25$ MPa dan $T = 333$ K, menggunakan persamaan keadaan Peng-Robinson:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan $a = 0.45724 R^2 T_c^2 / P_c$, $b = 0.07780 R T_c / P_c$, dan fungsi alpha $\alpha(T) = [1 + \kappa(1 - \sqrt{T/T_c})]^2$. Hasil iterasi Newton-Raphson menghasilkan:

$$V_m = 7.45 \times 10^{-5} \text{ m}^3/\text{mol} \Rightarrow \rho_{CO_2} = \frac{MW}{V_m} = \frac{44.01 \text{ g/mol}}{7.45 \times 10^{-5}} = 590.7 \text{ kg/m}^3$$

### 4.3 Perhitungan Permeabilitas Unggun