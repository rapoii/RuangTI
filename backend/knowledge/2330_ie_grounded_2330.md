# 2330 — Permodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction/SFE) menggunakan CO₂ (SC-CO₂) telah menjadi teknologi pemisahan pilihan utama dalam industri farmasi, nutrasetikal, kosmetik, dan pangan fungsional, karena meninggalkan residu pelarut, ramah lingkungan, dan memungkinkan *tunability* selektivitas melalui manipulasi tekanan serta suhu (Obchoei & Limtrakarn, 2024; Toledo & del Valle, 2023). Pertumbuhan pasar global ekstrak kanabis—yang diproyeksikan mencapai USD 23,7 miliar pada 2028 dengan CAGR 16,6%—menuntut peningkatan efisiensi proses, throughput, dan konsistensi kualitas cannabinoid (THC, CBD, CBG, dan terpenoid minor). Berbeda dengan pelarut organik konvensional seperti etanol atau heksana, SC-CO₂ pada kondisi operasional tipikal ($P = 200\text{–}350$ bar; $T = 313\text{–}353$ K) menggabungkan difusivitas tinggi akin gas dan densitas akin pelarut cair, sehingga mampu melarutkan溶 target non-polar dengan selektivitas tinggi.

Namun, fenomena fisis dalam vessel ekstraksi sangat non-linear: gradien tekanan aksial dan radial, pemanasan/pendinginan *joule-thomson* saat depresurisasi, perpindahan massa eksternal–internal pada matriks nabati, dan dinamika solubilitas sebagai fungsi rapat massa superkritis. Obchoei & Limtrakarn (2024) menyoroti bahwa simplified 1D *plug flow* assumption yang lazim digunakan dalam desain industrial *overestimates* yield aktual hingga 18–25% karena忽略了 *channeling* dan *bypassing* dalam bed biomassa. Di sisi lain, Toledo & del Valle (2023) menunjukkan bahwa fase pressurization dan depressurization menyerap/melepas kalor hingga 35% dari total *thermal duty* sistem, dan bila diabaikan akan menghasilkan prediksi konsentrasi solute keluar vessel yang偏差 signifikan. Oleh karena itu, integrasi model *axisymmetric 2D Navier–Stokes–Darcy* dengan persamaan energi transien dan keseimbangan massa solute menjadi kebutuhan rekayasa kritis untuk optimalisasi unit SFE pada era *Industry 4.0* dan *process intensification*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Kontinuitas dan Momentum Aksisimetrik

Untuk geometri vessel silinder dengan sumbu simetri $z$ dan koordinat radial $r$, Obchoei & Limtrakarn (2024) mengadopsi sistem koordinat silinder dengan asumsi *axisymmetric, incompressible-but-compressible* (densitas ρ bergantung pada $P, T$). Persamaan kontinuitas transien:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0 \tag{1}$$

Persamaan momentum arah radial ($r$):

$$\rho \left( \frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \mu \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2} \right] + \rho g_r \tag{2}$$

Persamaan momentum arah aksial ($z$):

$$\rho \left( \frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2} \right] - \frac{\mu}{K} \epsilon \, u_z \tag{3}$$

Term terakhir Persamaan (3) adalah resistansi Darcy dengan permeabilitas intrinsik $K$ dan porositas $\epsilon$ pada bed biomassa, yang menangkap pressure drop akibat media berpori.

### 2.2 Persamaan Energi dan Perpindahan Panas

Mengikuti Toledo & del Valle (2023), persamaan energi transien untuk SC-CO₂ dan matriks nabati (diperlakukan sebagai dua fase kontinum):

$$\rho c_p \left( \frac{\partial T}{\partial t} + \vec{v} \cdot \nabla T \right) = \nabla \cdot (k_{\text{eff}} \nabla T) + \mu \Phi_v - \Delta H_s \frac{\partial C_s}{\partial t} \tag{4}$$

dengan $c_p$ kapasitas panas, $k_{\text{eff}}$ konduktivitas efektif, $\Phi_v$ fungsi disipasi viskos, dan $\Delta H_s$ entalpi pelarutan (umumnya endotermik, $\Delta H_s \approx 15\text{–}30$ kJ/kg untuk cannabinoid–CO₂). *Cooling* Joule–Thomson selama ekspansi isotermal maupun adiabatik dimodelkan melalui koefisien:

$$\mu_{JT} = \left( \frac{\partial T}{\partial P} \right)_H = \frac{1}{c_p} \left( T \frac{\partial v}{\partial T}\bigg|_P - v \right) \tag{5}$$

yang bernilai sekitar $1{,}0\text{–}1{,}5$ K/bar untuk CO₂ pada kondisi near-critical.

### 2.3 Keseimbangan Massa Solute dan Model Solubilitas

Persamaan konveksi-difusi untuk konsentrasi solute $C_s$ (kg/m³) dalam fase superkritis:

$$\frac{\partial C_s}{\partial t} + u_r \frac{\partial C_s}{\partial r} + u_z \frac{\partial C_s}{\partial z} = D_{s,\text{CO}_2} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial C_s}{\partial r}\right) + \frac{\partial^2 C_s}{\partial z^2} \right] - k_L a (C_s - C^*_s) \tag{6}$$

dengan $D_{s,\text{CO}_2}$ koefisien difusi biner, $k_L a$ koefisien transfer massa volumetrik, dan $C^*_s$ konsentrasi kesetimbangan. Hubungan kesetimbangan mengikuti model Chrastil (1982) yang digunakan luas untuk sistem SC-CO₂:

$$C^*_s = \rho^{k} \cdot \exp\left( \frac{a}{T} + b \right) \tag{7}$$

dengan $k$ stoikiometri asosiasi, $a = -\Delta H_s / R$ (R = 8,314 J/mol·K), dan $b$ konstanta entropi. Untuk cannabinoid utama, parameter tipikal: $k \approx 4{,}5\text{–}6{,}2$, $a \approx -4500$ K, $b \approx -22$ (Obchoei & Limtrakarn, 2024).

### 2.4 Persamaan Keadaan (Equation of State/EoS)

Rapat massa SC-CO₂ dihitung dengan Span–Wagner EoS untuk akurasi tinggi pada daerah superkritis:

$$\rho = f(P, T; \text{Span–Wagner}) \tag{8}$$

yang memiliki deviasi < 0,02% terhadap data eksperimen NIST pada $P = 1$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
