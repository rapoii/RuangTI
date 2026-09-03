# 1578 — Pemodelan Aliran Aksisimetrik dan Perpindahan Kalor pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitofarmaka global tengah mengalami transformasi paradigma menuju proses yang lebih hijau (green chemistry) dan presisi tinggi. Di tengah kebutuhan untuk mengekstraksi metabolit sekunder tanaman—khususnya *cannabinoids* seperti tetrahidrokanabinol (THC), kanabidiol (CBD), kanabinol (CBN), dan terpenoid—industri farmasi, nutraceutical, dan kosmetik membutuhkan metode yang non-toksik, selektif, dan dapat diskalakan. Ekstraksi dengan fluida superkritis (Supercritical Fluid Extraction, SFE) menggunakan CO₂ telah menjadi *gold standard* karena sifatnya yang inert, tidak beracun, tidak meninggalkan residu pelarut, dan mudah diregenerasi (Obchoei & Limtrakarn, 2024; DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Urgensi teknis dari studi ini muncul dari kenyataan operasional bahwa reaktor SFE konvensional—yang didesain dengan asumsi *plug flow* ideal dan kondisi isotermal—secara empiris menunjukkan deviasi signifikan ketika diaplikasikan pada batch industri. Obchoei & Limtrakarn (2024) menunjukkan bahwa profil aksisimetrik (radial) dari kecepatan, tekanan, dan konsentrasi dalam *extractor vessel* silinder tidak homogen, sehingga menimbulkan *channeling* dan zona mati yang menurunkan yield hingga 15–30% dibanding prediksi model *lumped parameter* klasik. Di sisi lain, Toledo & del Valle (2023) (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) membuktikan bahwa perpindahan kalor transient selama tahap *pressurization*, *extraction*, dan *depressurization* sangat memengaruhi selektivitas dan laju perpindahan massa, karena CO₂ superkritis memiliki sifat termodinamika yang sangat sensitif terhadap variasi suhu pada rentang dekat titik kritisnya (31,1 °C, 7,38 MPa).

Secara ekonomi, pasar global ekstrak kanabis diproyeksikan melebihi USD 23 miliar pada 2030 dengan CAGR > 17%. Margin operasional sangat bergantung pada efisiensi energi, recovery pelarut, dan konsistensi kualitas ekstrak. Sebuah fasilitas SFE kelas industri dengan kapasitas 1.000 L extractor vessel dapat mengonsumsi 200–400 kWh per batch jika kalor tidak dikelola dengan baik—angka yang 20–40% lebih tinggi dibanding desain optimal berbasis model heat transfer terkalibrasi. Oleh karena itu, integrasi model aliran aksisimetrik 2D/3D dengan persamaan perpindahan kalor menjadi kebutuhan strategis bagi rekayasawan proses untuk melakukan *scale-up* yang akurat, validasi CFD, dan optimasi desain reaktor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Sifat Termodinamika CO₂ Superkritis

CO₂ berada pada fase superkritis ketika $T > T_c$ dan $P > P_c$, dengan $T_c = 304{,}13$ K dan $P_c = 7{,}38$ MPa. Pada kondisi operasi tipikal 313–333 K dan 15–30 MPa, densitas CO₂ superkritis (scCO₂) berada pada rentang 600–900 kg/m³, sementara viscositasnya rendah ($\mu \approx 5{-}9 \times 10^{-5}$ Pa·s), memberikan difusivitas tinggi (~10⁻⁷ m²/s) yang mendekati orde gas, dengan daya solvasi mendekati orde cair. Korelasi density Span-Wagner yang digunakan oleh Obchoei & Limtrakarn (2024) adalah:

$$\rho_{CO_2}(T,P) = \rho_c \left[ 1 + \sum_{i=1}^{n} a_i \delta^{I_i} \tau^{J_i} \right]$$

dengan $\delta = \rho/\rho_c$ dan $\tau = T_c/T$.

### 2.2 Persamaan Governing Aksisimetrik 2D

Untuk geometri silinder extractor vessel dengan sumbu-z sebagai aksis simetri, persamaan kontinuitas dan momentum dalam koordinat silindris $(r, \theta, z)$ dengan asumsi $\partial/\partial \theta = 0$ (axisymmetric) adalah:

$$\frac{1}{r}\frac{\partial (r u_r)}{\partial r} + \frac{\partial u_z}{\partial z} = 0$$

$$\rho \left( u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \mu \left[ \frac{\partial}{\partial r}\left( \frac{1}{r}\frac{\partial (r u_r)}{\partial r} \right) + \frac{\partial^2 u_r}{\partial z^2} \right]$$

$$\rho \left( u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial u_z}{\partial r} \right) + \frac{\partial^2 u_z}{\partial z^2} \right] + \rho g_z$$

### 2.3 Persamaan Energi (Enthalpy Formulation)

Mengikuti kerangka Toledo & del Valle (2023), persamaan energi untuk scCO₂ yang berubah fase selama *pressurization*:

$$\frac{\partial (\rho h)}{\partial t} + \nabla \cdot (\rho \vec{v} h) = \nabla \cdot (k_{eff} \nabla T) + \dot{q}_{rxn} + \dot{q}_{loss}$$

dengan enthalpi total $h = h_{ref} + \int_{T_{ref}}^{T} c_p \, dT$ dan panas laten kompresi isentalpi:

$$\dot{q}_{loss} = \frac{UA}{V}(T_{ext} - T) + \frac{d(pV)}{dt} \bigg|_{h}$$

Tahap *pressurization* (t ≈ 0–600 s) dicirikan oleh koefisien perpindahan kalor lokal:

$$Nu_{local} = \frac{h_{conv} D_h}{k_{CO_2}} = f(Re, Pr, D_h/L)$$

dengan bilangan Reynolds dan Prandtl untuk scCO₂ pada 25 MPa, 333 K: $Re = \rho u D_h / \mu \approx 5.000{-}15.000$ dan $Pr = \mu c_p / k \approx 2{-}5$.

### 2.4 Model Perpindahan Massa (Extraction Stage)

Laju pelarutan cannabinoid dari matriks padat ke scCO₂ mengikuti dua mekanisme simultan: konveksi eksternal (lapisan batas fluida) dan difusi internal (pori partikel). Model *shrinking core* yang diadopsi Obchoei & Limtrakarn (2024):

$$\frac{\partial C}{\partial t} + u_z \frac{\partial C}{\partial z} = D_{ax} \frac{\partial^2 C}{\partial z^2} - \frac{1-\epsilon}{\epsilon} \rho_s k_f a_p (C^* - C)$$

dengan $k_f$ koefisien transfer massa eksternal (Sherwood correlation: $Sh = 2{,}0 + 1{,}1 Re^{0{,}6} Sc^{1/3}$), dan $C^*$ konsentrasi kesetimbangan yang diberikan oleh korelasi Chrastil:

$$C^* = \rho_{CO_2}^k \exp\left(\frac{a}{T} + b\right)$$

dengan $k \approx 2{-}4$, $a \approx -k\Delta H/R$, dan $b$ konstanta empirik.

### 2.5 Kondisi Batas dan Initial Conditions

- **Inlet (z=0):** $u_z = u_{in}$, $C = C_{in} = 0$, $T = T_{in}$
- **Outlet (z=L):** $\partial p/\partial z = 0$, $\partial C/\partial z = 0$
- **Dinding (r=R):** $u_r = 0$, $u_z = 0$ (no-slip), $-k\partial T/\partial r = h_w(T_w - T)$
- **Aks simetri (r=0):** $\partial u_r/\partial r = 0$, $u_r = 0$
- **Initial (t=0):** $p = p_0$, $T = T_0$, $C = 0$ di seluruh domain

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem SFE-CO₂ Industri

Sistem SFE-CO₂ industri modern tersusun atas subsistem berikut: (i) tangki penyimpanan CO₂ cair dengan pendingin; (ii) pompa tekanan tinggi (*diaphragm* atau *piston pump*); (iii) *heat exchanger* pre-heater; (iv) extractor vessel (reaktor batch, biasanya 100–3.000 L); (v) *separator* (1–3 stage) dengan depresurisasi bertahap; (vi) sistem回收 CO₂; dan (vii) sistem kontrol PLC/SCADA dengan sensor tekanan, suhu, dan flow meter *Coriolis*.

### 3.2 SOP Ekstraksi (8 Tahapan)

1. **Pre-treatment bahan baku:** Pengeringan dan *size reduction* biomassa kanabis hingga ukuran partikel $d_p = 0{,}5{-}2$ mm untuk memastikan permeabilitas bed optimal dan luas permukaan spesifik tinggi.

2. **Charging extractor:** Material dimasukkan ke vessel dengan packing density $\rho_b = 350{-}500$ kg/m³ dan porositas bed $\epsilon = 0{,}35{-}0{,}45$.

3. **Pressurization:** Naikkan tekanan dari 1 atm ke $P_{op} = 15{-}30$ MPa menggunakan pompa dengan laju增压 0,5–2 MPa/menit untuk menghindari gradien termal ekstrem dan *thermal shock* pada dinding vessel.

4. **Heating ke $T_{op}$:** Pemanasan ke 313–343 K menggunakan jaket termal (oil bath atau electrical heater) dengan kontrol PID pada ramp rate 1–2 K/menit.

5. **Static soaking (opsional):** Periode kesetimbangan termodinamika 10–30 menit untuk memastikan kondisi superkritis homogen.

6. **Dynamic extraction:** Aliran scCO₂ dengan flow rate $\dot{m} = 5{-}50$ kg/jam (rasio S/F = 20–100) secara kontinu melarutkan cannabinoid.

7. **Separation:** Depresurisasi bertahap di separator (8–10 MPa, 313 K) untuk mengendapkan ekstrak; CO₂ direcycle.

8. **Depressurization & cleaning:** Vessel didepressurisasi secara lambat (0,2–0,5 MPa/menit) sesuai protokol Toledo & del Valle (2023) untuk mencegah degradasi termal cannabinoid.

### 3.3 Diagram Alir Logika (Process Flow Logic)

```
[CO₂ Tank] → [Cooler 5°C] → [Pump P₁] → [Pre-heater 333K] 
                                                      ↓
                                              [Extractor V₁]
                                                      ↓
                                          [Expander + Heater]
                                                      ↓
                                       [Separator S₁ @ 8 MPa]
                                                      ↓
                                       [Separator S₂ @ 5 MPa]
                                                      ↓
                                            [Extract Vessel]
                                                      ↓
                                       [Recycle → CO₂ Tank]
```

### 3.4 Standar dan Regulasi

Implementasi mengikuti standar ASME BPVC Section VIII (desain pressure vessel), GMP EU/EFSA untuk produk farmasi, ASTM D7201 untuk penentuan cannabinoid, dan ISO 22000 untuk manajemen keamanan pangan. Validasi model aksisimetrik harus mengikuti protokol *Good Modeling Practice* (GMP-EFCE) dengan verifikasi grid independence dan validasi eksperimen.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain Kasus

Ambil extractor vessel cylindrical dengan:
- Diameter dalam $D = 0{,}30$ m, panjang $L = 1{,}20$ m
- Volume kerja $V = \pi (D/2)^2 L = 0{,}0848$ m³ ≈ 84,8 L
- Packing biomassa: $m_s = 35$ kg kanabis kering ($x_{CBD} = 0{,}12$ berat kering)
- Kondisi operasi: $P_{op} = 25$ MPa, $T_{op} = 333$ K
- Flow rate scCO₂: $\dot{m} = 15$ kg/jam
- Porositas bed: $\epsilon = 0{,}40$

### 4.2 Perhitungan Properti scCO₂ pada (25 MPa, 333 K)

Interpolasi dari tabel Span-Wagner (Obchoei & Limtrakarn, 2024):
- $\rho_{CO_2} \approx 816$ kg/m³
- $\mu_{CO_2} \approx 7{,}8 \times 10^{-5}$ Pa·s
- $k_{CO_2} \approx 0{,}105$ W/(m·K)
- $c_p \approx 1{,}35$ kJ/(kg·K)

### 4.3 Profil Aksisimetrik: Perhitungan Kecepatan Superfisial

Laju alir volumetrik: $\dot{V} = \dot{m}/\rho = 15/816 \times 3600 = 5{,}10 \times