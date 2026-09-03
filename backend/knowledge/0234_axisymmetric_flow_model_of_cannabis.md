# 0234 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani global sedang mengalami transformasi signifikan seiring meningkatnya permintaan akan ekstrak *Cannabis sativa* berkualitas farmasi dan nutraceutical. Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, proses ekstraksi dengan CO₂ superkritis (SC-CO₂) menjadi teknologi pilihan karena kemampuannya menghasilkan ekstrak bebas pelarut残留, selektivitas tinggi, dan profil cannabinoid/terpene yang dapat dikontrol melalui parameter operasional seperti tekanan (8–35 MPa), suhu (308–343 K), dan densitas CO₂ (150–900 kg/m³). Pasar global ekstrak kanabis diproyeksikan melebihi USD 18 miliar pada 2030, dengan yield ekonomis yang sangat bergantung pada efisiensi termodinamika dan hidrodinamika reaktor.

Urgensi teknis paper ini terletak pada kenyataan bahwa sebagian besar desain ekstraktor SC-CO₂ komersial saat ini masih menggunakan model *plug flow* satu dimensi yang mengabaikan profil radial suhu dan konsentrasi. Kondisi ini menghasilkan prediksi yield yang偏差 hingga 18–25% terhadap data pilot plant, sebagaimana dikonfirmasi oleh Toledo & del Valle (2023) dalam *Journal of Supercritical Fluids* yang menunjukkan bahwa gradien termal aksial-radial selama tahap *pressurization* dapat menurunkan laju ekstraksi efektif sebesar 30% jika tidak diperhitungkan dalam desain.

Secara ekonomi, kesalahan prediksi yield berdampak langsung pada *Cost of Goods Sold* (COGS). Untuk ekstraktor berkapasitas 100 L dengan laju umpan 25 kg/jam biomassa, deviasi yield 20% berarti kerugian atau keuntungan fiktif sekitar USD 45.000–60.000 per bulan. Oleh karena itu, Obchoei & Limtrakarn (2024) mengajukan **model aliran aksisimetrik 2-D kompresibel** yang mengintegrasikan persamaan kontinuitas, momentum, energi, dan transfer massa dalam geometri silinder reaktor, sehingga mampu menangkap fenomena *channeling*, *dead zone*, dan gradien termal yang nyata terjadi pada operasi industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pembangun Governing Equations

Model aksisimetrik Obchoei & Limtrakarn (2024) disusun dalam koordinat silinder $(r, z)$ dengan asumsi aliran tunak, kompresibel, dan non-ideal. Keempat persamaan pembangun adalah:

**Persamaan Kontinuitas (konservasi massa):**

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r \rho u_r\right) + \frac{\partial}{\partial z}\left(\rho u_z\right) = 0$$

di mana $\rho$ adalah densitas CO₂ (kg/m³), $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial (m/s).

**Persamaan Momentum (Navier-Stokes):**

$$\rho\left(u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z$$

dengan $P$ tekanan (Pa), $\mu$ viskositas dinamis (Pa·s), dan $g_z$ percepatan gravitasi aksial.

**Persamaan Energi (dengan termo-kompresibilitas):**

$$\rho C_p\left(u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \mu\Phi + \dot{q}_{rxn}$$

dengan $C_p$ kapasitas panas (J/kg·K), $k$ konduktivitas termal (W/m·K), $\mu\Phi$ disipasi viskos, dan $\dot{q}_{rxn}$ sumber panas dari proses pelarutan eksotermis/endotermis.

**Persamaan Transfer Massa (species solute):**

$$u_r\frac{\partial Y}{\partial r} + u_z\frac{\partial Y}{\partial z} = D_{AB}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial Y}{\partial r}\right) + \frac{\partial^2 Y}{\partial z^2}\right] + \dot{r}_{ext}$$

dengan $Y$ fraksi massa solute dan $D_{AB}$ difusivitas biner (m²/s).

### 2.2 Persamaan Keadaan dan Korelasi Sifat Termofisik

Densitas CO₂ superkritis dihitung dengan **persamaan Span-Wagner** yang dikutip oleh Obchoei & Limtrakarn (2024):

$$\rho = \rho_c\left[1 + \delta\left(\frac{\partial \ln \rho}{\partial \delta}\right)_{T_r}\right]$$

dengan $\delta = \rho/\rho_c - 1$ dan $\rho_c = 467.6$ kg/m³ pada $T_c = 304.13$ K, $P_c = 7.377$ MPa.

Solubilitas minyak kanabis dalam SC-CO₂ mengikuti korelasi **del Valle-Aguilera** (yang diperbarui Toledo & del Valle, 2023):

$$\ln C_s = k_0 + k_1(\rho_{CO_2}) + k_2(\rho_{CO_2})^2 + \frac{k_3}{T}$$

dengan $k_0, k_1, k_2, k_3$ parameter empiris yang dikalibrasi untuk sistem cannabinoid.

### 2.3 Koefisien Transfer Panas Dinding

Toledo & del Valle (2023) mengembangkan korelasi Nusselt untuk tahap *pressurization*, *extraction*, dan *depressurization*:

$$Nu = \frac{hD_h}{k} = 0.023\,Re^{0.8}\,Pr^{0.4}\left(\frac{\rho_w}{\rho_b}\right)^{0.3}$$

dengan $Re = \rho u_m D_h / \mu$, $Pr = \mu C_p/k$, dan $\rho_w/\rho_b$ merepresentasikan rasio densitas dinding terhadap bulk.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Model Komputasional

Implementasi model dilakukan menggunakan **Computational Fluid Dynamics (CFD)** berbasis *finite volume method* dengan algoritma SIMPLE untuk coupling tekanan-kecepatan. Diskretisasi menggunakan skema upwind orde dua, dengan residu target $<10^{-6}$ untuk konvergensi.

**Tahap 1 — Karakterisasi Biomassa:**
Umpan *Cannabis sativa* dengan ukuran partikel $d_p = 0.5–2.0$ mm, kadar air $<8$% (sesuai standar GMP untuk ekstraksi farmasi), dan bulk density $\rho_b = 350$ kg/m³.

**Tahap 2 — Setup Ekstraktor:**
Reaktor silinder vertikal dengan diameter dalam $D_i = 0.15$ m dan panjang efektif $L = 1.2$ m, diisi biomassa setinggi $H_b = 0.9$ m. Jacket pemanas mempertahankan suhu dinding $T_w = 323$ K.

**Tahap 3 — Kalibrasi Parameter:**
Variasi tekanan operasi $P = 15, 20, 25, 30$ MPa pada suhu $T = 313, 323, 333$ K. Laju alir CO₂ $\dot{m} = 4–12$ kg/jam dengan rasio solvent-to-feed (S/F) 25–60.

**Tahap 4 — Validasi:**
Perbandingan hasil simulasi dengan data eksperimen pilot plant menggunakan *root mean square error* (RMSE) target $<5$% untuk yield cannabinoid total.

### 3.2 Diagram Alir Proses Industri

```
[Bongkar Muat Biomassa] → [Sealing & Pressure Test]
                ↓
[Pressurization: 0 → 25 MPa, ramp 1.5 MPa/menit]
                ↓
[Static Extraction Hold: T_w konstan, t = 15 menit]
                ↓
[Dynamic Extraction: SC-CO₂ loop, S/F = 40]
                ↓
[Separator 1: P₁ = 8 MPa, T₁ = 313 K → recovery wax]
                ↓
[Separator 2: P₂ = 4 MPa, T₂ = 308 K → cannabinoid crude]
                ↓
[Depressurization: ramp 0.5 MPa/menit]
                ↓
[CIP & Sanitasi Ekstraktor]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Kasus

Untuk ekstraksi 10 kg biomassa kanabis dalam reaktor $D_i = 0.15$ m, $L = 1.2$ m pada kondisi operasi $P = 25$ MPa, $T = 323$ K, dengan laju alir CO₂ $\dot{m}_{CO_2} = 8$ kg/jam.

**Langkah 1 — Densitas CO₂ Superkritis**

Menggunakan persamaan Span-Wagner pada $P = 25$ MPa dan $T = 323$ K:

$$T_r = \frac{323}{304.13} = 1.062, \quad P_r = \frac{25}{7.377} = 3.389$$

Dari tabel Span-Wagner (atau iterasi Newton-Raphson), diperoleh:

$$\rho_{CO_2} = 781.4 \text{ kg/m}^3$$

**Langkah 2 — Viskositas Dinamis**

Korelasi Fenghour et al.:

$$\mu = 0.021 \times 10^{-3} \sqrt{T} \left[1 + \frac{\rho}{\rho_c}\left(0.168 + \frac{0.0577}{T_r}\right)\right] \cdot 10^{-5} \text{ Pa·s}$$

$$\mu = 1.21 \times 10^{-4} \text{ Pa·s}$$

**Langkah 3 — Kecepatan Superfisial**

Luas penampang reaktor:

$$A_c = \frac{\pi D_i^2}{4} = \frac{\pi (0.15)^2}{4} = 0.01767 \text{ m}^2$$

Kecepatan superfisial CO₂:

$$u_s = \frac{\dot{m}_{CO_2}}{\rho_{CO_2} \cdot A_c} = \frac{8/3600}{781.4 \times 0.01767} = 1.607 \times 10^{-4} \text{ m/s}$$

**Langkah 4 — Reynolds Number**

Diameter hidraulik untuk packed bed dengan porositas $\varepsilon = 0.42$:

$$D_h = \frac{2\varepsilon d_p}{3(1-\varepsilon)} = \frac{2 \times 0.42 \times 0.001}{3 \times 0.58} = 4.83 \times 10^{-4} \text{ m}$$

$$Re = \frac{\rho u_s D_h}{\mu} = \frac{781.4 \times 1.607 \times 10^{-4} \times 4.83 \times 10^{-4}}{1.21 \times 10^{-4}} = 0.501$$

Aliran masuk regime *laminar-darcy*, sesuai asumsi model Brinkman-extended yang digunakan Obchoei & Limtrakarn (2024).

**Langkah 5 — Nusselt dan Koefisien Transfer Panas**

$$Pr = \frac{\mu C_p}{k} = \frac{1.21 \times 10^{-4} \times 1530}{0.085} = 2.18$$

$$Nu = 0.023 \times (0.501)^{0.8} \times (2.18)^{0.4} \approx 0.023 \times 0.557 \times 1.376 = 0.0176$$

$$h = \frac{Nu \cdot k}{D_h} = \frac{0.0176 \times 0.085}{4.83 \times 10^{-4}} = 3.10 \text{ W/m}^2\text{K}$$

**Langkah 6 — Yield Estimasi dengan Korelasi Chrastil**

$$C_s = \rho_{CO_2}^k \exp\left(\frac{a}{T} + b\right)$$

dengan parameter kanabis menurut Toledo & del Valle (2023): $k = 2.18$, $a = -4520$ K, $b = -14.83$.

$$C_s = (781.4)^{2.18} \cdot \exp\left(\frac{-4520}{323} - 14.83\right)$$

$$\ln C_s = 2.18 \times \ln(781.4) - 14.0 - 14.83 = 14.13 - 28.83 = -14.70$$

$$C_s = 4.07 \times 10^{-7} \text{ kg solute/kg CO}_2$$

Yield teoritis untuk S/F = 40:

$$Y_{teo} = C_s \times S/F
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
