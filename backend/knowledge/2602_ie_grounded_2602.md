# 2602 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri kanabis medis dan produk turunan cannabinoids (CBD, THC) mengalami transformasi besar pasca-regulasi di berbagai yurisdiksi (Kanada 2018, Thailand 2022, Jerman 2024, sebagian besar negara bagian AS). Ekstraksi minyak kanabis adalah unit operasi *upstream* kritis yang menentukan kualitas produk akhir, profil cannabinoid, dan margin ekonomi fasilitas *Good Manufacturing Practice* (GMP). Metode konvensional berbasis pelarut organik — etanol, heksana, atau butana — menimbulkan isu toksikologi residual, jejak karbon dari *winterization*, dan kehilangan terpen volatil. Sebaliknya, ekstraksi dengan CO₂ superkritis (SC-CO₂) menawarkan keunggulan differentiating: non-toksik, GRAS (*Generally Recognized As Safe*), selektivitas melalui tuning densitas, dan kemampuan *fractional separation* dekompresi bertahap. Obchoei & Limtrakarn (2024) menyoroti bahwa optimalisasi proses ini terkendala oleh kurangnya model termofluida yang memvalidasi secara kuantitatif profil aliran, gradien tekanan, dan perpindahan massa di dalam *extractor vessel* — DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682). Mereka menyatakan bahwa "[a]xisymmetric flow model provides a computationally efficient yet physically representative framework for SC-CO₂ extraction vessels operating at industrial pressures of 200–350 bar."

Secara operasional, fasilitas ekstraksi komersial (kapasitas 100–2.000 L *extractor*) menghadapi tiga tantangan utama menurut Toledo & del Valle (2023) — DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046). Pertama, tahap *pressurization* (1 bar → 300 bar) dalam 60–180 detik menghasilkan kenaikan suhu adiabatik CO₂ yang dapat melampaui 700 K jika tidak ada heat removal aktif, merusak cannabinoid heat-labile. Kedua, tahap *extraction* tunap-stabil memerlukan gradien suhu ±2 K untuk mempertahankan densitas target CO₂ (≈830 kg/m³ pada 313 K, 300 bar) agar kelarutan THC konsisten. Ketiga, tahap *depressurization* mendaur balik enthalpy spesifik dan massa pelarut. Urgensi ekonomi tampak pada perhitungan yield: kesalahan 1°C pada setpoint isothermal menurunkan yield 2–4% — pada fasilitas dengan revenue USD 5 juta/tahun, ini setara kerugian USD 100–200 ribu/tahun.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Navier–Stokes Aksisimetrik (Obchoei & Limtrakarn, 2024)

Karena geometri *extractor vessel* silinder vertikal dan pola aliran secara inheren simetris terhadap sumbu-z, model disederhanakan ke koordinat silinder 2D (r, z). Persamaan kontinuitas:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r\rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

Persamaan momentum arah radial dan aksial:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right]$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g$$

dengan $u_r$ dan $u_z$ adalah komponen kecepatan, $\rho$ densitas CO₂ yang sangat bergantung pada P–T (diperoleh dari persamaan keadaan Peng–Robinson), dan $\mu$ viskositas dinamis. Persamaan energi:

$$\rho C_p\left(\frac{\partial T}{\partial t} + u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot{q}_{rxn}$$

### 2.2 Persamaan Peng–Robinson untuk CO₂ Superkritis

Densitas lokal CO₂ dihitung melalui persamaan keadaan kubik:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter atraktif $a(T) = 0.45724 \cdot R^2 T_c^2/P_c \cdot \alpha(T)$, dan volume eksklusi $b = 0.07780 R T_c / P_c$. Untuk CO₂: $T_c = 304.13$ K, $P_c = 7.377$ MPa.

### 2.3 Model Perpindahan Panas Multi-Tahap (Toledo & del Valle, 2023)

Untuk tahap *pressurization*, neraca energi mengikuti:

$$m C_v \frac{dT}{dt} = \dot{m}_{in} h_{in} - \dot{m}_{out} h_{out} + \dot{W}_{comp} - \dot{Q}_{loss}$$

Penulis memvalidasi bahwa kontribusi dominan adalah kerja kompresi $\dot{W}_{comp}$ yang mendekati proses adiabatik selama 60 detik pertama. Korelasi perpindahan panas dinding luar:

$$Nu = 0.023 Re^{0.8} Pr^{0.4}$$

### 2.4 Kinetika Ekstraksi — Model Sel Rusak dan Utuh (Sovová)

Mass transfer dua-resistensi:

$$\frac{dq_b}{dt} = k_f \cdot a \cdot (q_b^* - q_b)$$

$$\frac{dq_u}{dt} = k_s \cdot a \cdot (q_u - q_u^*)$$

dengan $q_b$ dan $q_u$ adalah konsentrasi cannabinoid di fase "broken cells" (rusak milling) dan "intact cells" (utuh), $k_f$ adalah koefisien konvektif fluida-film, $k_s$ koefisien difusi internal, dan $a$ luas spesifik partikel.

---

## 3. Metodologi Rekayasa & SOP

### 3.1 Arsitektur Model CFD Aksisimetrik (sesuai Paper 1)

**Langkah 1 — Diskretisasi Domain.** Vessel silinder L = 0.5 m, R