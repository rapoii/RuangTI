# 2538 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nabati global mengalami transformasi signifikan sejak diterapkannya *supercritical fluid extraction* (SFE) dengan CO₂ sebagai pelarut utama, menggantikan pelarut organik konvensional seperti heksana dan etanol yang memiliki toksisitas residual tinggi. Menurut Obchoei dan Limtrakarn (2024) yang dimuat dalam *International Journal of Thermofluids*, penerapan *axisymmetric flow model* pada ekstraksi minyak kanabis (cannabis oil) membawaimplikasi besar terhadap optimisasi desain reaktor SFE, pengendalian kualitas ekstrak, dan efisiensi energi. Kanabis (*Cannabis sativa*) menjadi studi kasus strategis karena profil cannabinoid-nya — terutama cannabidiol (CBD) dan tetrahydrocannabinol (THC) — memiliki nilai tambah ekonomi tinggi untuk industri farmasi, nutraceutical, dan kosmetik (Obchoei & Limtrakarn, 2024).

Urgensi operasional yang melatarbelakangi riset ini bersifat multidimensional. Pertama, desain ekstraktor SCE (*supercritical extractor*) tradisional menggunakan pendekatan *black-box* empiris yang mengabaikan profil kecepatan, tekanan, dan konsentrasi di dalam vessel. Hal ini menyebabkan *yield* ratarata industri hanya mencapai 8–14% padahal kapasitas teoritis bisa mencapai 20–25%. Kedua, perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization* menjadi瓶颈 (bottleneck) termodinamika karena CO₂ superkritis memiliki viskositas rendah (~0,07 mPa·s) namun diffusivitas tinggi (~10⁻⁷ m²/s) yang sangat sensitif terhadap fluktuasi suhu (Toledo & del Valle, 2023). Ketiga, aspek ekonomi proses SFE menyangkut konsumsi CO₂ antara 15–40 kg per kg feedstock, sehingga pemahaman fenomena perpindahan massa-panas menentukan rasio *solvent-to-feed ratio* (S/F) yang optimal.

Konteks regulasi juga krusial: berbagai negara termasuk Kanada, Jerman, dan Thailand telah melegalisasi kanabis medis, sehingga investasi pada fasilitas SFE berbasis CO₂ mencapai USD 1,2–1,8 miliar per tahun (Obchoei & Limtrakarn, 2024). Dalam perspektif teknik industri, integrasi *computational fluid dynamics* (CFD) dengan model perpindahan massa memungkinkan para engineering manager melakukan *scale-up* dari lab-scale (0,5–5 L) ke industrial-scale (100–1000 L) tanpa penurunan efisiensi yang signifikan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Navier–Stokes Aksisimetrik

Model yang dikembangkan Obchoei dan Limtrakarn (2024) menggunakan geometri aksisimetrik 2D untuk menyederhanakan vessel silinder, dengan koordinat silindris $(r, z, \theta)$ di mana $\theta$ diabaikan karena simetri rotasional. Persamaan kontinuitas dan momentum dalam bentuk konservatif:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2} - \frac{u_r}{r^2}\right] + \rho g_r$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z$$

dengan $\rho$ adalah densitas campuran, $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial, $\mu$ adalah viskositas dinamis, dan $g_r, g_z$ adalah komponen gravitasi.

### 2.2 Persamaan State untuk CO₂ Superkritis

Sifat termodinamika CO₂ dihitung dengan persamaan Peng–Robinson (PR-EOS):

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan $a = 0{,}45724 \frac{R^2T_c^2}{P_c}$, $b = 0{,}07780 \frac{RT_c}{P_c}$, dan $\alpha(T) = \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2$. Untuk CO₂, parameter kritikalnya adalah $T_c = 304{,}25$ K dan $P_c = 7{,}38$ MPa.

### 2.3 Model Perpindahan Massa — Kerangka Sovová

Model perpindahan massa mengikuti formulasi Crank dan modifikasi Sovová untuk tiga tahap ekstraksi:

$$\frac{\partial C}{\partial t} + u_z\frac{\partial C}{\partial z} = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - k_f a_p (C - C^*)$$

di mana $C$ adalah konsentrasi solute dalam fase fluida, $D_{eff}$ adalah difusivitas efektif, $k_f$ koefisien perpindahan massa fluida, $a_p$ luas permukaan partikel per volume, dan $C^*$ konsentrasi kesetimbangan yang ditentukan oleh:

$$C^*(T, P) = y^* \cdot \rho_{CO_2}(T, P)$$

### 2.4 Model Perpindahan Panas Tiga Tahap

Toledo dan del Valle (2023) merumuskan neraca energi untuk vessel selama proses batch:

$$m c_p \frac{dT_v}{dt} = \dot{m}_{in} h_{in} - \dot{m}_{out} h_{out} - \dot{Q}_{loss} + \dot{Q}_{jacket}$$

Selama *pressurization*, perpindahan panas didominasi oleh kompresi adiabatik dengan kenaikan suhu:

$$\Delta T_{adiabatic} = \frac{T_1}{\eta_c}\left[\left(\frac{P_2}{P_1}\right)^{(k-1)/k} - 1\right]$$

dengan $\eta_c$ efisiensi kompresi dan $k = c_p/c_v$ untuk CO₂ ($\approx 1{,}30$ pada kondisi operasi).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses SFE-CO₂

```
[Raw Material] → [Grinding & Sizing] → [Packing Vessel]
        ↓
[Pressurization] → [Equilibration (T,P)] → [Dynamic Extraction]
        ↓                                              ↓
[Collection] ← [Depressurization] ← [Separation Vessel]
        ↓
[Extract Refining] → [Quality Control (HPLC)] → [Storage]
```

### 3.2 SOP Ekstraksi CO₂ Superkritis (Adaptasi dari Obchoei & Limtrakarn, 2024)

1. **Preparasi feedstock:** Pengeringan biomassa kanabis hingga kadar air < 10% wb, penggilingan hingga ukuran partikel 0,5–2 mm.
2. **Packing vessel:** Kepadatan bed 0,45–0,60 g/cm³ untuk mencegah channeling.
3. **Pressurization stage:** Naikkan tekanan dari 0,1 MPa ke 25 MPa dengan rate 1–3 MPa/min sambil mempertahankan suhu jacket 40 ± 1°C (Toledo & del Valle, 2023).
4. **Equilibration:** Diamkan vessel 15 menit untuk stabilisasi termal.
5. **Dynamic extraction:** Alirkan CO₂ dengan rasio S/F antara 20–60, suhu 40–60°C, tekanan 20–35 MPa.
6. **Separation:** Depresurisasi bertahap di separator pada 5–8 MPa untuk memisahkan solute.
7. **Depressurization stage:** Turunkan tekanan secara isentropik dengan kontrol laju pendinginan jacket sesuai model Toledo & del Valle.

### 3.3 Arsitektur CFD dan Diskretisasi

Obchoei dan Limtrakarn (2024) menggunakan software ANSYS Fluent dengan *governing equations* di atas. Mesh menggunakan elemen quadrilateral terstruktur (~50.000 sel) dengan *boundary layer inflation* 5 lapis di dekat dinding vessel. Skema tekanan-kecepatan diselesaikan dengan algoritma SIMPLE, sementara diskretisasi konveksi menggunakan *second-order upwind*. Konvergensi tercapai ketika residual < 10⁻⁶ untuk semua variabel.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Permasalahan

Sebuah fasilitas SFE-CO₂ di Skala industri sedang merancang vessel ekstraksi dengan spesifikasi:

| Parameter | Nilai |
|---|---|
| Diameter vessel dalam (D) | 0,30 m |
| Tinggi bed (L) | 1,20 m |
| Tekanan operasi (P) | 25 MPa |
| Suhu operasi (T) | 45°C (318,15 K) |
| Laju alir CO₂ (ṁ) | 12 kg/jam |
| Mass feedstock | 25 kg |
| Ukuran partikel | 1,0 mm |
| Porositas bed (ε) | 0,40 |

### 4.2 Perhitungan Densitas CO₂ Superkritis

Menggunakan PR-EOS dengan parameter CO₂:
- $a = 0{,}45724 \times \frac{(8{,}314)^2 \times (304{,}25)^2}{(7{,}38 \times 10^6)^2} = 0{,}3658$ Pa·m⁶/mol²
- $b = 0{,}07780 \times \frac{8{,}314 \times 304{,}25}{7{,}38 \times 10^6} = 2{,}66 \times 10^{-5}$ m³/mol
- $\kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2 = 0{,}756$ (dengan $\omega_{CO_2} = 0{,}228$)
- $\alpha(318{,}15) = \left[1 + 0{,}756(1 - \sqrt{318{,}15/304{,}25})\right]^2 = 0{,}858$

Substitusi ke PR-EOS menghasilkan $V_m \approx 7{,}09 \times 10^{-5}$ m³/mol sehingga:

$$\rho_{CO_2} = \frac{M}{V_m} = \frac{44{,}01 \times 10^{-3}}{7{,}09 \times 10^{-5}} \approx 620{,}7 \text{ kg/m}^3$$

### 4.3 Profil Kecepatan Aksisimetrik

Kecepatan superfisial CO₂ dalam bed:

$$u_s = \frac{\dot{m}}{\rho_{CO_2} \cdot A_{cross}} = \frac{12/3600}{620{,}7 \times \pi(0{,}15)^2} = 7{,}60 \times 10^{-5} \text{ m/s}$$

Tinggi床 bed efektif dengan koreksi porositas memberikan kecepatan interstisial:

$$u_{interst} = \frac{u_s}{\varepsilon} = \frac{7{,}60 \times 10^{-5}}{0{,}40} = 1{,}90 \times 10^{-4} \text{ m/s}$$

### 4.4 Prediksi Yield Ekstraksi

Menggunakan model simplified Sovová, konstanta perpindahan massa:

$$