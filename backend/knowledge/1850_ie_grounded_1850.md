# 1850 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction using supercritical fluid extraction CO₂ process; integrasi dengan model perpindahan panas multi-tahap
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction, SFE) menggunakan CO₂ (SC-CO₂) telah menjadi tulang punggung industri fitokannabinoid global, terutama untuk produk kanabis bernilai tambah tinggi (obat, nutraceutical, kosmetik). Pasar global ekstrak kanabis diproyeksikan menembus USD 23 miliar pada 2030 dengan CAGR > 18% (Grand View Research, 2023), didorong legalisasi bertahap dan permintaan akan produk bebas pelarut organik. Dalam konteks ini, paper Obchoei dan Limtrakarn (2024) di *International Journal of Thermofluids* menyoroti masalah kritis: **sebagian besar desain vessel ekstraksi industri masih bersifat "black-box"**, yaitu工程师 mengandalkan aturan empiris (rule-of-thumb) tanpa memodelkan distribusi aliran, gradien konsentrasi, dan profil suhu secara rigor.

Obchoei & Limtrakarn (2024) menekankan bahwa pada tekanan operasi 25–35 MPa dan suhu 313–333 K, perilaku SC-CO₂ sangat non-ideal. Densitas CO₂ berubah dari ~770 kg/m³ (cairan-like) menjadi ~280 kg/m³ (gas-like) hanya dengan variasi suhu 20 K, sehingga profil aksisimetrik di dalam vessel sangat menentukan yield cannabinoid (THC, CBD). Paper ini mengusulkan model Computational Fluid Dynamics (CFD) 2D-aksisimetrik untuk memprediksi kecepatan radial-aksial, tekanan, dan konsentrasi minyak kanabis sepanjang waktu ekstraksi.

Sementara itu, Toledo & del Valle (2023) di *Journal of Supercritical Fluids* melengkapi dengan mengkuantifikasi **perpindahan panas** pada tiga tahap kritis: (1) *pressurization* (penambahan CO₂ ke vessel hingga tekanan operasi), (2) *extraction* (steady-state), dan (3) *depressurization* (pelepasan CO₂). Keduanya menyadari bahwa pada tahap 1 dan 3, dinding vessel dan matriks padat kanabis tidak berada dalam kesetimbangan termal dengan CO₂, sehingga yield aktual bisa 15–30% lebih rendah dibanding prediksi isotermal. Kedua paper ini menjadi referensi wajib bagi insinyur proses yang merancang **SOP ekstraksi SC-CO₂** yang reproducible dan memenuhi standar farmasi Good Manufacturing Practice (GMP) serta farmakope seperti USP ⟨467⟩.

Urgensi industrial dari integrasi kedua paper ini adalah mengurangi waktu *time-to-market* produk baru, menekan biaya energi kompresi CO₂ (~0,3–0,5 kWh/kg CO₂), dan memenuhi regulasi traceability cannabinoid (δ¹³C, profil terpen) yang menuntut konsistensi batch-to-batch di bawah 5% RSD.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konservasi Aliran Aksisimetrik

Model Obchoei & Limtrakarn (2024) dimulai dari persamaan konservasi massa (kontinuitas) dalam koordinat silinder $(r, z)$:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

dengan $\rho$ adalah densitas SC-CO₂ (kg/m³), $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial (m/s). Persamaan momentum Navier–Stokes dalam formulasi aksisimetrik:

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu}{K}\varepsilon v_z$$

dengan $P$ tekanan (Pa), $\mu$ viskositas dinamis (Pa·s), $K$ permeabilitas matriks kanabis (m²), dan $\varepsilon$ porositas packed-bed (~0,4 untuk bunga kanabis kering).

### 2.2 Persamaan State dan Sifat Termodinamika

Densitas SC-CO₂ dihitung dengan persamaan state **Peng–Robinson (1976)**:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter afinitas $a(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c}\left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2$ dan $b = 0{,}07780 R T_c/P_c$. Untuk CO₂: $T_c = 304{,}13$ K, $P_c = 7{,}377$ MPa.

### 2.3 Model Perpindahan Massa (Kinetika Ekstraksi)

Laju pelarutan cannabinoid ke fase superkritis mengikuti model **plug-flow dengan resistansi eksternal**:

$$\frac{\partial c}{\partial t} + v_z \frac{\partial c}{\partial z} = D_{ax}\frac{\partial^2 c}{\partial z^2} + k_f a_s (c^* - c)$$

dengan $c$ konsentrasi minyak dalam fase fluida (kg/m³), $c^*$ kelarutan jenuh (solubility, kg/m³), $D_{ax}$ koefisien dispersi aksial (m²/s), $k_f$ koefisien transfer massa (m/s), dan $a_s$ luas spesifik partikel (m²/m³). Kelarutan $c^*$ diprediksi dengan korelasi **Chrastil (1982)**:

$$c^* = \rho^{n} \exp\left(\frac{a}{T} + b\right)$$

dengan $n \approx 2{,}42$, $a = -4400$ K, $b = 10{,}6$ untuk CBD dalam SC-CO₂ (Obchoei & Limtrakarn, 2024).

### 2.4 Model Perpindahan Panas (Toledo & del Valle, 2023)

Untuk tahap *pressurization* dan *extraction*, neraca energi pada dinding vessel:

$$\rho_w c_{p,w} V_w \frac{dT_w}{dt} = \dot{m}_{CO_2} c_{p,CO_2}(T_{in} - T_w) - UA(T_w - T_{amb})$$

dengan $U$ koefisien perpindahan panas overall (W/m²·K) dan $A$ luas permukaan. Pada tahap *extraction* steady-state, **bilangan Biot** mendiagnosis kesetimbangan termal:

$$Bi = \frac{U R_v}{\lambda_{bed}} \ll 1 \implies \text{reaksi isotermal}$$

Jika $Bi > 0{,}1$, gradien suhu radial di matriks padat tidak dapat diabaikan.

---

## 3. Metodologi Rekayasa & SOP Industri

### 3.1 Arsitektur Vessel dan Skema Proses

Vessel ekstraksi SC-CO₂ industri tipikal berbentuk silinder vertikal dengan tinggi $H = 1$–2 m, diameter dalam $D_i = 0{,}1$–$0{,}3$ m, berisi kanabis kering yang telah digiling (mesh 20–40) membentuk packed-bed. Skema proses:

1. **Charging** — Pemuatan biomassa kanabis sebanyak $m_{bio}$ (kg) ke dalam vessel yang telah disanitasi.
2. **Pressurization (5–15 menit)** — CO₂ dipompa dari tangki penyimpanan ($T_0 = 263$ K, $P_0 = 5{,}5$ MPa) hingga tekanan operasi $P_{op} = 25$ MPa menggunakan *diaphragm compressor* atau *piston pump*.
3. **Heat-up (10–20 menit)** — Pemanas listrik (*band heater*) menaikkan suhu vessel ke $T_{op} = 323$ K. Tahap ini mengikuti Toledo & del Valle (2023): gradien suhu dinding ke pusat matriks mengikuti profil Bessel.
4. **Extraction (60–240 menit)** — Aliran SC-CO₂ kontinu dengan debit $\dot{m}_{CO_2} = 5$–$50$ kg/jam dipertahankan. Minyak yang terlarut dipisahkan di *separator* dengan depresurisasi bertahap ($P_{sep} = 5$–$8$ MPa, $T_{sep} = 313$ K).
5. **Depressurization (10–30 menit)** — Pelepasan CO₂ secara lambat untuk mencegah entrainment partikel dan menjaga kualitas cannabinoid.
6. **CO₂ Recovery** — CO₂ daur ulang dikondensasikan dan dikembalikan ke tangki (recovery rate > 95%).

### 3.2 SOP Pemodelan CFD (Berbasis Obchoei & Limtrakarn, 2024)

| Langkah | Aktivitas | Output |
|---|---|---|
| 1 | Definisi geometri aksisimetrik 2D | Domain vessel dengan boundary layer |
| 2 | Meshing (ANSYS/ICEM atau COMSOL) | Grid terstruktur 50.000–200.000 elemen |
| 3 | Input sifat fisis SC-CO₂ (PR-EOS) | Tabel $\rho(T,P)$, $\mu(T,P)$, $c_p(T,P)$ |
| 4 | Solve unsteady dengan SIMPLE algorithm | Profil $v_z(r,z)$, $P(z)$, $c(z,t)$ |
| 5 | Validasi dengan data eksperimen (yield vs waktu) | RMSE < 8% |

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Input Parameter Kasus

Ambil vessel industri dengan spesifikasi realistis mengikuti Obchoei & Limtrakarn (2024):

- Diameter dalam: $D_i = 0{,}15$ m → $R_v = 0{,}075$ m
- Tinggi packed-bed: $H = 1{,}2$ m
- Massa biomassa kanabis: $m_{bio} = 5{,}0$ kg (kadar CBD target = 12% berat kering)
- Tekanan operasi: $P_{op} = 28$ MPa
- Suhu operasi: $T_{op} = 323$ K
- Debit SC-CO₂: $\dot{m}_{CO_2} = 15$ kg/jam
- Porositas: $\varepsilon = 0{,}42$
- Permeabilitas: $K = 5 \times 10^{-9}$ m²

### 4.2 Perhitungan Densitas SC-CO₂ (PR-EOS)

Untuk CO₂ pada 28 MPa, 323 K:
- $T_r = 323/304{,}13 = 1{,}062$, $P_r = 28/7{,}377 = 3{,}80$
- $\kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2 = 0{,}760$ (dengan $\omega_{CO_2} = 0{,}225$)
- $a(T) = 0{,}45724 \cdot \frac{(8{,}314)^2 \cdot (304{,}13)^2}{7{,}377 \times 10^6}\left[1 + 0{,}760(1 - \sqrt{1{,}062})\right]^2$
- Iterasi PR-EOS menghasilkan $\rho_{CO_2} \approx 816$ kg/m³

### 4.3 Kelarutan CBD (Korelasi Chrastil)

$$c^* = (816)^{2{,}42} \exp\left(\frac{-4400}{323} + 10{,}6\right) = 1{,}36 \times 10^{5} \exp(-13{,}62 + 10{,}6)$$
$$c^* = 1{,}36 \times 10^{5} \cdot 0{,}00171 = 232{,}6 \text{ g/m}^3 \approx 0{,}233 \text{ kg/m}^3$$

### 4.4 Debit Volumetrik dan Laju Ekstraksi

$$Q = \frac{\dot{m}_{CO_2}}{\rho} = \frac{15}{816} = 0{,}0184 \text{ m}^3/\text{jam