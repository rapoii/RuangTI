# 1626 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritik CO₂: Integrasi Model CFD dan Termodinamika Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitokimia global mengalami transformasi signifikan sejak diterapkannya regulasi legalisasi ganja medis di berbagai yurisdiksi, termasuk Thailand, Kanada, Jerman, dan beberapa negara bagian Amerika Serikat. Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, nilai pasar ekstrak kanabis medis diproyeksikan menembus USD 62,4 miliar pada akhir dekade ini, dengan permintaan utama pada senyawa kannabinoid bioaktif seperti cannabidiol (CBD) dan tetrahydrocannabinol (THC) yang memiliki aplikasi terapeutik pada gangguan neurologis, inflamasi kronis, dan manajemen nyeri. Metode konvensional seperti ekstraksi pelarut organik (etanol, heksana, atau butana) menghadapi tantangan kritis terkait residualitas pelarut, degradasi termal termolabil kanabinoid, dan isu keselamatan kerja akibat titik nyala rendah pelarut hidrokarbon. Dalam konteks inilah teknologi **Supercritical Fluid Extraction (SFE) dengan CO₂** muncul sebagai proses green-chemistry yang memenuhi prinsip *Process Intensification* dalam rekayasa proses kimia.

CO₂ superkritik memiliki sifat ganda yang khas: pada kondisi di atas titik kritis ($T_c = 304{,}13\,\text{K}$ dan $P_c = 7{,}377\,\text{MPa}$), CO₂ berada dalam fasa tunggal yang menggabungkan daya penetrasi gas dengan daya solvasi liquid. Fenomena ini dimanfaatkan oleh Obchoei & Limtrakarn (2024) untuk memodelkan ekstraksi minyak kanabis dalam geometri vessel ekstraktor aksisimetrik, di mana fluida superkritik mengalir secara radial dan aksial melalui matriks biomassa kanabis yang dikemas dalam *extraction bed*. Urgensi operasional penelitian ini terletak pada optimalisasi *yield recovery* (target >90%), pengurangan waktu siklus ekstraksi, dan penghematan energi kompresi CO₂ yang merupakan komponen biaya operasional dominan (sekitar 35–50% dari total biaya produksi).

Toledo & del Valle (2023) melengkapi konteks industri ini dengan menunjukkan bahwa tahapan **pressurization, extraction (hold), dan depressurization** memiliki profil termal yang sangat berbeda, di mana gradien suhu radial dalam vessel mencapai 15–25 K pada awal proses dan berdampak langsung terhadap selektivitas serta yield ekstraksi. Tanpa pemodelan perpindahan panas yang akurat, scale-up dari skala laboratorium (kapasitas 1–5 L) ke skala industri (200–2000 L) akan menghasilkan deviasi yield hingga 30%. Kedua paper ini saling melengkapi: Obchoei & Limtrakarn menyediakan kerangka hidrodinamika aksisimetrik, sementara Toledo & del Valle menyediakan kerangka termodinamika proses untuk tahapan pressurization-depressurization. Integrasi keduanya menjadi dasar penting bagi engineering sistem proses SFE-CO₂ modern dan akan diuraikan secara sistematis dalam modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Kontinuitas dan Momentum Aksisimetrik

Pemodelan axisymmetric flow dalam vessel SFE mengikuti kaidah konservasi massa dan momentum dalam koordinat silinder $(r, z)$. Untuk fluida Newtonian inkompresibel dengan asumsi *steady-state*, formulasi Navier-Stokes aksisimetrik adalah sebagai berikut (Obchoei & Limtrakarn, 2024):

$$\frac{\partial u_r}{\partial r} + \frac{u_r}{r} + \frac{\partial u_z}{\partial z} = 0 \tag{1}$$

$$\rho\left(u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right] \tag{2}$$

$$\rho\left(u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g \tag{3}$$

di mana $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial, $\rho$ adalah densitas CO₂ superkritik (fungsi $T$ dan $P$), $\mu$ adalah viskositas dinamis, dan $g$ adalah percepatan gravitasi. Dalam kondisi operasi tipikal ($P = 25\,\text{MPa}$, $T = 323\,\text{K}$), $\rho_{\text{CO}_2} \approx 830{,}0\,\text{kg/m}^3$ dan $\mu_{\text{CO}_2} \approx 8{,}2 \times 10^{-5}\,\text{Pa}\cdot\text{s}$ (NIST REFPROP database).

### 2.2 Model Perpindahan Panas Transient

Toledo & del Valle (2023) mengembangkan model perpindahan panas yang menggabungkan konduksi dalam padatan biomassa, konveksi paksa CO₂, dan akumulasi panas sensible pada dinding vessel. Persamaan energi transient dalam koordinat silinder untuk fasa fluida adalah:

$$\rho c_p \left(\frac{\partial T}{\partial t} + u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z}\right) = \frac{k}{r}\frac{\partial}{\partial r}\left(r \frac{\partial T}{\partial r}\right) + k\frac{\partial^2 T}{\partial z^2} + \dot{q}_{\text{gen}} \tag{4}$$

di mana $c_p$ adalah kapasitas panas spesifik pada tekanan konstan, $k$ adalah konduktivitas termal, dan $\dot{q}_{\text{gen}}$ adalah laju generasi panas (signifikan pada tahap *depressurization* ketika ekspansi Joule-Thomson menghasilkan efek pendinginan). Untuk dinding vessel stainless steel 316L:

$$\rho_w c_{p,w}\frac{\partial T_w}{\partial t} = \frac{k_w}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T_w}{\partial r}\right) \tag{5}$$

dengan kondisi batas kopling konvektif di antarmuka dinding-fluida:

$$-k_w \frac{\partial T_w}{\partial r}\bigg|_{r=R_i} = h_{\text{ext}}(T_w - T_{\text{ext}}) \tag{6}$$

di mana $h_{\text{ext}}$ adalah koefisien konveksi eksternal yang bergantung pada aliran fluida utilitas (air atau fluida termal).

### 2.3 Model Kinetika Ekstraksi dan Konsentrasi Solut

Model *mass transfer* untuk minyak kanabis dalam matriks padat mengikuti pendekatan **Sovová's Broken-and-Intact Cells (BIC)** yang diadopsi dan dimodifikasi oleh Obchoei & Limtrakarn (2024):

$$\frac{\partial C}{\partial t} + u_z \frac{\partial C}{\partial z} = D_{\text{eff}} \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) - k_f a \left(C - C^*\right) \tag{7}$$

di mana $C$ adalah konsentrasi minyak dalam fasa superkritik, $D_{\text{eff}}$ adalah koefisien dispersi efektif (tipikal $D_{\text{eff}} = 5 \times 10^{-9}\,\text{m}^2/\text{s}$ untuk CO₂ dalam biomassa), $k_f$ adalah koefisien transfer massa eksternal, $a$ adalah luas spesifik interfacial, dan $C^*$ adalah konsentrasi kesetimbangan yang diberikan oleh korelasi Chrastil:

$$C^* = \rho_{\text{CO}_2}^k \cdot \exp\left(\frac{A}{T} + B\right) \tag{8}$$

dengan parameter $k \approx 2{,}43$, $A = -4978\,\text{K}$, dan $B = -7{,}36$ untuk sistem CO₂-kanabinoid sesuai kalibrasi Obchoei & Limtrakarn (2024).

### 2.4 Persamaan Keadaan dan Properti Termodinamika CO₂

Densitas CO₂ superkritik dihitung menggunakan persamaan keadaaan Span-Wagner yang memiliki akurasi tinggi pada rentang kondisi operasi SFE:

$$p = \rho R T \left[1 + \sum_{i=1}^{n} n_i \delta^{d_i} \tau^{t_i} + \sum_{i=1}^{n} n_i \delta^{d_i} \tau^{t_i} \exp(-\delta^{l_i})\right] \tag{9}$$

dengan $\delta = \rho/\rho_c$ dan $\tau = T_c/T$, dan $\rho_c = 467{,}6\,\text{kg/m}^3$ merupakan densitas kritis CO₂.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem SFE-CO₂ Industri

Sistem SFE-CO₂ skala industri terdiri dari subsistem utama berikut sesuai konfigurasi referensi Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023):

1. **Subsistem Pasokan CO₂**: Tangki penyimpanan liquid CO₂ pada $P = 5{,}5\,\text{MPa}$ dan $T = 253\,\text{K}$.
2. **Pompa Diaphragm High-Pressure**: Menaikkan tekanan ke $20$–$30\,\text{MPa}$ dengan laju alir $200$–$500\,\text{kg/jam}$.
3. **Heat Exchanger Pre-heater**: Menaikkan suhu CO₂ ke $313$–$333\,\text{K}$ sebelum masuk vessel.
4. **Extraction Vessel**: Vessel silinder vertikal dengan dimensi tipikal $D = 0{,}3\,\text{m}$, $L = 1{,}2\,\text{m}$, berisi biomassa kanabis ground ($\sim$3 mm partikel) dengan porositas $\varepsilon = 0{,}4$.
5. **Expansion Valve / Back-Pressure Regulator (BPR)**: Menurunkan tekanan ke $5$–$6\,\text{MPa}$ untuk memisahkan CO₂ dari ekstrak.
6. **Separator Vessel**: Collecting vessel untuk minyak kanabis.
7. **Recycle Compressor**: Mengompresi ulang CO₂ ke fase liquid untuk re-injection.

### 3.2 SOP Ekstraksi Batch

| Tahap | Aktivitas | Parameter Kritis | Durasi |
|-------|-----------|------------------|--------|
| 1. Charging | Pengisian biomassa kanabis | Moisture content < 8%, particle size 2–4 mm | 30 menit |
| 2. Pressurization | Pengisian CO₂ hingga tekanan target | Ramp rate 5 MPa/menit | 5–6 menit |
| 3. Pre-heating | Penstabilan suhu vessel | $\Delta T < \pm 1\,\text{K}$ dari setpoint | 10–15 menit |
| 4. Static Soaking | Hold tanpa aliran | $T = 323\,\text{K}$, $P = 25\,\text{MPa}$ | 0–30 menit (opsional) |
| 5. Dynamic Extraction | Aliran CO₂ superkritik kontinu | Flow rate $Q = 4{,}5\,\text{L/menit}$ STP | 60–180 menit |
| 6. Depressurization | Pembukaan BPR bertahap | Rate penurunan $P$: 2 MPa/menit | 10–15 menit |
| 7. CO₂ Recovery | Recompression dan liquefaction | Recovery target > 95% | 20 menit |

### 3.3 Diagram Alir Proses

```
[CO₂ Liquid Storage] → [Diaphragm Pump] → [Pre-heater]
                                            ↓
                            [Extraction Vessel (Axisymmetric Model)]
                              ↓                  ↓
                    [Back Pressure          [Bypass Recycle]
                       Regulator]              ↓
                            ↓            [Separator 2]
                    [Separator 1]              ↓
                            ↓            [CO₂ Recycle]
                       [Crude Extract]
                            ↓
                    [Winterization → Decarboxylation → Distillation]
```

### 3.4 Implementasi Computational Fluid Dynamics (CFD)

Validasi model Obchoei & Limtrakarn (2024) dilakukan menggunakan perangkat lunak ANSYS Fluent dengan langkah-langkah:

1. **Pre-processing**: Pembuatan geometri 2D axisymmetric pada vessel, meshing *structured quadrilateral* dengan $y^+ < 1$ di dekat dinding.
2. **Solver setup**: Pressure-based SIMPLE algorithm, *k-ε RNG turbulence model* untuk Reynolds number moderat.
3. **Material properties**: Menggunakan database NIST untuk CO₂ superkritik sebagai fungsi $T$ dan $P$.
4. **Boundary conditions**: Velocity inlet pada $z=0$, pressure outlet pada $z=L$, no-slip wall di $r=R_i$.
5. **Convergence criteria**: Residual < $10^{-6}$ untuk kontinuitas, momentum, dan energi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Definisi Parameter Operasi

Ambil kasus industri dengan kapasitas vessel $V = 100\,\text{L}$, berisi biomassa kanabis bermassa $m_{\text{bio}} = 35\,\text{kg