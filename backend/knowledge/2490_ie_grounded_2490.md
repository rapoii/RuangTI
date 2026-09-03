# 2490 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Cannabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani modern, khususnya segmen legal cannabis untuk kebutuhan farmasi, nutraceutical, dan kosmetik, menghadapi tantangan rekayasa yang semakin kompleks seiring meningkatnya standar kualitas produk, tuntutan efisiensi energi, dan regulasi lingkungan yang ketat. Ekstraksi dengan fluida superkritis CO₂ (sc-CO₂) muncul sebagai teknologi *green extraction* yang menggantikan pelarut organik konvensional (heksana, etanol) karena sifat CO₂ yang non-toksik, tidak mudah terbakar, dan recyclable (Obchoei & Limtrakarn, 2024). Permintaan global akan minyak cannabis kaya cannabinoid (CBD, THC, CBG) diproyeksikan mencapai USD 62,6 miliar pada tahun 2028 dengan CAGR > 18%, sehingga optimasi proses ekstraksi menjadi *competitive imperative* bagi pelaku industri.

Obchoei dan Limtrakarn (2024) dalam studi mereka menyoroti bahwa desain reaktor ekstraksi sc-CO₂ komersial selama ini masih bersifat *trial-and-error* karena kurangnya model aliran fluida yang mampu memprediksi distribusi kecepatan, tekanan, dan konsentrasi solute dalam vessel bergeometri silindris. Paper tersebut mengusulkan **model aliran aksisimetrik 2D** yang menggabungkan dinamika fluida komputasional (CFD) dengan persamaan transfer massa untuk memprediksi yield cannabinoid dari biomassa cannabis. Studi ini penting secara工业 karena memvalidasi bahwa asumsi *plug flow* yang banyak digunakan dalam desain konvensional overestimate yield aktual hingga 20–35%, bergantung pada laju alir dan ukuran partikel biomassa.

Di sisi lain, Toledo dan del Valle (2023) melengkapi analisis ini dengan menginvestigasi dampak **perpindahan panas transien** pada tiga tahap kritis siklus sc-CO₂: *pressurization*, *extraction steady-state*, dan *depressurization*. Mereka menemukan bahwa gradient termal aksial-radial selama tahap pressurisasi mencapai 8–15°C pada skala pilot 5 L, yang secara signifikan menurunkan densitas CO₂ lokal dan mengganggu profil tekanan operasional. Kondisi adiabatic assumption pada model CFD tradisional terbukti menjadi sumber error utama dalam desain heat exchanger dan jacketed extractor.

Integrasi kedua perspektif ini—model aliran aksisimetrik (Obchoei & Limtrakarn, 2024) dan dinamika termal transien (Toledo & del Valle, 2023)—memberikan kerangka rekayasa holistik yang menjadi dasar bagi *Process Intensification* dan digital twin pada pabrik ekstraksi modern. Urgensi industrialnya meliputi: (1) pengurangan konsumsi energi spesifik dari rata-rata 8–12 kWh/kg biomassa menjadi target < 5 kWh/kg; (2) peningkatan *throughput* reaktor tanpa menambah footprint; (3) konsistensi kualitas cannabinoid yang memenuhi sertifikasi *Good Manufacturing Practice* (GMP) EU dan US FDA; serta (4) kemampuan scale-up dari kapasitas laboratorium 100 mL ke kapasitas komersial 200 L dengan prediktabilitas tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Dasar Aliran Aksisimetrik

Model Obchoei & Limtrakarn (2024) menggunakan geometri silindris 2D $(r, z)$ dengan asumsi aliran *laminar-turbulen transisi* (bilangan Reynolds $Re = 1.000 - 10.000$). Sistem persamaan governing terdiri dari **persamaan kontinuitas** dan **persamaan momentum Navier-Stokes** dalam koordinat aksisimetrik:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial}{\partial r}(r \rho v_r) + \frac{\partial}{\partial z}(\rho v_z) = 0$$

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z$$

di mana $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial, $\rho$ adalah densitas CO₂ (fungsi $p, T$), dan $\mu$ adalah viskositas dinamis. Untuk sumbu simetri pada $r = 0$, kondisi batas $\partial v_r/\partial r = 0$ dan $v_r = 0$ diterapkan.

### 2.2 Persamaan Energi dan Perpindahan Panas

Toledo & del Valle (2023) mengembangkan persamaan energi transien 2D yang diselesaikan secara coupled dengan persamaan momentum:

$$\rho c_p \left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{visc} + \dot{q}_{comp}$$

dengan $k_{eff} = k_{CO_2} + k_{turb}$ sebagai konduktivitas efektif yang mencakup kontribusi turbulen melalui pendekatan Boussinesq, dan $\dot{q}_{visc}$ adalah disipasi viskos. Sumber panas $\dot{q}_{comp}$ merepresentasikan efek kompresibilitas yang dominan saat tahap pressurisasi.

### 2.3 Persamaan Transfer Massa dan Yield Cannabinoid

Model kinetika ekstraksi mengikuti pendekatan *broken and intact cells* (Sovová, 1994, yang diadopsi Obchoei & Limtrakarn, 2024):

$$\frac{\partial C}{\partial t} + v_z \frac{\partial C}{\partial z} = D_{ax}\frac{\partial^2 C}{\partial z^2} - k_f a_p (C - C^*)$$

di mana $C$ adalah konsentrasi solute dalam fase fluida, $C^*$ adalah konsentrasi kesetimbangan (ditentukan oleh solubilitas CO₂-cannabinoid), $D_{ax}$ adalah koefisien dispersi aksial, $k_f$ adalah koefisien transfer mass eksternal, dan $a_p$ adalah luas spesifik partikel biomassa. Yield kumulatif dihitung dari:

$$Y(t) = \frac{\dot{m}_{CO_2}}{m_{biomass}} \int_0^t C(z=L, t') dt'$$

### 2.4 Persamaan Keadaan untuk CO₂ Superkritis

Densitas dan viskositas CO₂ dihitung menggunakan persamaan keadaan **Peng-Robinson (1976)** yang direkomendasikan oleh kedua paper karena akurasinya pada kondisi dekat titik kritis ($T_c = 304{,}13$ K, $p_c = 7{,}377$ MPa):

$$p = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a(T)$ dan $b$ yang disesuaikan untuk CO₂. Untuk operasi tipikal pada $T = 313$ K dan $p = 25$ MPa, diperoleh $\rho_{CO_2} \approx 871$ kg/m³ dan $\mu_{CO_2} \approx 9{,}2 \times 10^{-5}$ Pa·s.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses Ekstraksi SC-CO₂

Diagram alir proses mengikuti konfigurasi standar yang divalidasi oleh Obchoei & Limtrakarn (2024) serta Toledo & del Valle (2023):

```
[Botol CO₂] → [Kompresor/Booster] → [Heat Exchanger Pre-heater]
        ↓
[Ekstraktor Vessel Silindris Aksisimetris] → [Expansion Valve]
        ↓
[Separator 1 (tekanan tinggi)] → [Separator 2 (tekanan rendah)] → [Produk Minyak]
        ↑
[Recycle CO₂ → Condenser → Compressor]
```

### 3.2 SOP Pengoperasian Reaktor Aksisimetris

1. **Pre-treatment biomassa**: Pengeringan cannabis hingga kadar air < 10%, penggilingan hingga ukuran partikel $d_p = 0{,}5 - 2{,}0$ mm. Penentuan bulk density $\rho_b = 350 - 450$ kg/m³.
2. **Loading vessel**: Pengisian biomassa ke dalam vessel dengan rasio tinggi/diameter (H/D) = 4–6 sesuai rekomendasi Obchoei & Limtrakarn (2024). Penentuan massa biomassa $m_b = \rho_b \cdot V_{eff}$.
3. **Pressurization stage**: CO₂ dipompa hingga tekanan target $p_{op} = 15 - 30$ MPa dengan laju ram **2 MPa/menit** agar gradient termal terkendali (Toledo & del Valle, 2023). Pemantauan $T(r,z)$ setiap 30 detik.
4. **Thermal equilibration**: Penahanan pada kondisi isobarik selama 10–15 menit untuk mencapai kesetimbangan termal $T = 313 - 333$ K di seluruh vessel.
5. **Dynamic extraction**: Pembukaan katup outlet dengan mempertahankan flow rate $\dot{m}_{CO_2} = 5 - 25$ kg/jam. Sampling produk pada interval 5, 10, 15, 30, 45, 60, 90, 120 menit untuk konstruksi kurva yield vs. waktu.
6. **Depressurization**: Penurunan tekanan secara terkontrol pada laju 1 MPa/menit untuk mencegah entrainment dan kerusakan cannabinoid termolabil.
7. **Cleaning in Place (CIP)**: Flush dengan CO₂ murni pada $p = 5$ MPa selama 15 menit, diikuti bilasan etanol grade farmasi.

### 3.3 Standar dan Regulasi

Implementasi mengikuti standar **ASME BPVC Section VIII** untuk desain pressure vessel, **GMP EU 2017/1572** untuk produksi bahan aktif farmasi, dan **ASTM D7806** untuk penentuan cannabinoid dengan HPLC. Sistem instrumentasi minimal mencakup: pressure transmitter (akurasi ±0,1% FS), thermocouple Tipe K, flow meter Coriolis, dan inline near-infrared (NIR) probe untuk monitoring konsentrasi real-time.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Sebuah fasilitas ekstraksi cannabis kapasitas 5 L (skala pilot) dirancang dengan parameter berikut (merujuk pada studi Obchoei & Limtrakarn, 2024):

- Diameter vessel: $D = 100$ mm
- Tinggi vessel: $H = 636$ mm (rasio H/D = 6,36)
- Massa biomassa: $m_b = 1{,}0$ kg cannabis kering
- Bulk density: $\rho_b = 400$ kg/m³
- Tekanan operasi: $p_{op} = 25$ MPa
- Temperatur operasi: $T_{op} = 323$ K (50°C)
- Laju alir CO₂: $\dot{m}_{CO_2} = 10$ kg/jam

### 4.2 Perhitungan Densitas CO₂ Superkritis

Menggunakan persamaan Peng-Robinson pada $T = 323$ K dan $p = 25$ MPa, langkah komputasi menghasilkan:

$$\rho_{CO_2} = \frac{p M_{CO_2}}{Z R T}$$

dengan faktor kompresibilitas $Z = 0{,}55$ (dari lookup table NIST pada kondisi operasi), $M_{CO_2} = 44{,}01$ g/mol, dan $R = 8{,}314$ J/(mol·K):

$$\rho_{CO_2} = \frac{(25 \times 10^6)(0{,}04401)}{(0{,}55)(8{,}314)(323)} = 745{,}2 \text{ kg/m}^3$$

### 4.3 Perhitungan Bilangan Reynolds dan Identifikasi Regim Aliran

Kecepatan superficial CO₂ dihitung dari:

$$v_s = \frac{\dot{m}_{CO_2}}{\rho_{CO_2} \cdot A_{cross}}$$

dimana $A_{cross} = \pi D^2/4 = \pi (0{,}1)^2/4 = 7{,}854 \times 10^{-3}$ m²:

$$v_s = \frac{10/3600}{745{,}2 \times 7{,}854 \times 10^{-3}} = 4{,}75 \times 10^{-4} \text