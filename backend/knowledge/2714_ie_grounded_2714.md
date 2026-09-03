# 2714 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Cannabis dengan Karbondioksida Superkritis: Integrasi Model CFD dan Analisis Termofluida Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol—khususnya untuk minyak cannabis (minyak kanabis) yang kaya akan kanabinoid seperti *cannabidiol* (CBD) dan *tetrahydrocannabinol* (THC)—telah mengalami transformasi signifikan sejak diterapkannya regulasi legalisasi di berbagai yurisdiksi di Amerika Utara, Eropa, dan sebagian Asia. Menurut Obchoei dan Limtrakarn (2024) di *International Journal of Thermofluids*, kebutuhan akan proses ekstraksi yang memenuhi standar farmasi (*Good Manufacturing Practice*/GMP), hemat energi, dan ramah lingkungan menjadi pendorong utama adopsi teknologi *Supercritical Fluid Extraction* (SFE) berbasis karbondioksida (CO₂). Proses ini menggantikan pelarut organik konvensional seperti heksana, etanol, atau butana yang memiliki risiko toksikologis, residu pelarut, dan dampak lingkungan yang signifikan (Obchoei & Limtrakarn, 2024, [DOI:10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

CO₂ dalam kondisi superkritis—yaitu pada temperatur $T > T_c = 31{,}04^\circ\text{C}$ dan tekanan $P > P_c = 7{,}38\,\text{MPa}$—memiliki difusivitas tinggi, tegangan permukaan nol, dan daya pelarut yang dapat diatur melalui variasi tekanan dan temperatur. Namun, untuk mendesain proses secara optimal, diperlukan pemahaman mendalam mengenai dinamika fluida dalam reaktor ekstraksi yang secara geometri berbentuk silinder, sehingga pendekatan *axisymmetric flow model* menjadi representasi yang paling representatif. Obchoei dan Limtrakarn (2024) menekankan bahwa tanpa model matematis yang valid, prediksi yield, waktu siklus, dan konsumsi energi akan sangat tidak akurat, menyebabkan *capital expenditure* (CAPEX) dan *operational expenditure* (OPEX) yang tidak optimal.

Di sisi lain, Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* menyoroti bahwa fenomena perpindahan panas pada tiga tahap kritis—*pressurization* (penaikan tekanan), *extraction* (ekstraksi tunak), dan *depressurization* (penurunan tekanan)—seri yang selama ini sering diabaikan dalam pemodelan simplistik, padahal memiliki kontribusi dominan terhadap profil temperatur lokal dan kinetika pelarutan kanabinoid. Mereka menunjukkan bahwa asumsi isotermal selama tahap penaikan tekanan dapat menimbulkan deviasi prediksi yield hingga 15–20% ([DOI:10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Integrasi kedua literatur ini menjadi fondasi bagi rekayasa proses industri farmasi, nutrasetikal, dan kosmetik berbasis cannabis, di mana presisi dosis aktif, konsistensi batch, dan kepatuhan terhadap standar USP/EP menjadi imperatif.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan proses SFE-CO₂ untuk minyak cannabis memerlukan gabungan empat persamaan dasar termofluida dalam geometri aksisimetrik (sistem koordinat silinder $(r,z)$ dengan asumsi invariansi sudut $\theta$), ditambah persamaan transport spesies untuk kanabinoid.

### 2.1 Persamaan Kontinuitas dan Momentum

Untuk aliran tunak (*steady-state*) dan asumsi incompressible flow pada kondisi operasi tipikal ($P = 15{-}30\,\text{MPa}$, $T = 35{-}60^\circ\text{C}$), persamaan kontinuitas dalam koordinat silinder adalah:

$$\frac{1}{r}\frac{\partial(r u_r)}{\partial r} + \frac{\partial u_z}{\partial z} = 0$$

dengan $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial. Persamaan momentum Navier-Stokes dalam formulasi aksisimetrik ditulis sebagai:

$$\rho\left(u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial P}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial(r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right]$$

$$\rho\left(u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g$$

dengan $\rho$ densitas CO₂ superkritis, $\mu$ viskositas dinamis, dan $g$ percepatan gravitasi. Untuk reaktor SFE, kontribusi $g$ umumnya diabaikan karena tekanan operasi mendominasi gradien tekanan hidrostatik.

### 2.2 Persamaan Energi dan Perpindahan Panas

Berdasarkan Toledo dan del Valle (2023), persamaan energi selama tahap *pressurization* dan *depressurization* harus memasukkan kompresibilitas CO₂:

$$\rho c_p\left(\frac{\partial T}{\partial t} + u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \mu \Phi_v + \dot{q}''_\text{latent}$$

di mana $\Phi_v$ adalah fungsi disipasi viskos (*viscous dissipation function*), dan $\dot{q}''_\text{latent}$ adalah fluks panas laten yang muncul selama perubahan fase atau dekompresi adiabatik. Term disipasi viskos untuk aliran dalam media berpori dimodifikasi sebagai:

$$\mu \Phi_v = \mu\left[2\left(\left(\frac{\partial u_r}{\partial r}\right)^2 + \left(\frac{1}{r}\frac{\partial u_\theta}{\partial \theta}\right)^2 + \left(\frac{\partial u_z}{\partial z}\right)^2\right) + \left(\frac{\partial u_r}{\partial z} + \frac{\partial u_z}{\partial r}\right)^2\right]$$

### 2.3 Persamaan Transport Spesies (Kanabinoid)

Konsentrasi kanabinoid $C_i$ dalam fase fluida superkritis mengikuti persamaan konveksi-difusi:

$$\varepsilon\frac{\partial C_i}{\partial t} + u_r\frac{\partial C_i}{\partial r} + u_z\frac{\partial C_i}{\partial z} = D_{ax}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C_i}{\partial r}\right) + \frac{\partial^2 C_i}{\partial z^2}\right] - (1-\varepsilon)k_f a_p(C_i - C_i^*)$$

dengan $\varepsilon$ porositas unggun, $D_{ax}$ koefisien dispersi aksial, $k_f$ koefisien transfer massa eksternal, $a_p$ luas spesifik partikel, dan $C_i^*$ konsentrasi kesetimbangan yang bergantung pada kelarutan kanabinoid dalam SC-CO₂, yang biasanya dimodelkan dengan persamaan Chrastil:

$$C^* = \rho^{k_\text{Chr}} \exp\left(\frac{a_\text{Chr}}{T} + b_\text{Chr}\right)$$

dengan $k_\text{Chr}$, $a_\text{Chr}$, dan $b_\text{Chr}$ adalah parameter empiris untuk masing-masing kanabinoid (misalnya, untuk CBD pada $P=20\,\text{MPa}$, $T=45^\circ\text{C}$, $C^* \approx 2{-}5\,\text{mg/g CO}_2$ menurut Obchoei & Limtrakarn, 2024).

### 2.4 Korelasi Sherwood untuk Media Berpori

Untuk menghitung $k_f$, korelasi Sherwood yang umum dipakai pada unggun partikel adalah:

$$\text{Sh} = \frac{k_f d_p}{D_m} = 2{,}0 + 1{,}8\,\text{Re}^{0{,}5}\,\text{Sc}^{1/3}$$

dengan $\text{Re} = \frac{\rho u d_p}{\mu}$ (Reynolds partikel), $\text{Sc} = \frac{\mu}{\rho D_m}$ (Schmidt number), dan $D_m$ difusivitas molekuler kanabinoid dalam CO₂ superkritis.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model aksisimetrik yang divalidasi oleh Obchoei dan Limtrakarn (2024), serta model perpindahan panas Toledo dan del Valle (2023), memerlukan SOP terstruktur yang mencakup delapan tahapan berikut:

**Tahap 1 – Preparasi Bahan Baku.** Material cannabis kering (*cannabis sativa*) digiling hingga ukuran partikel $d_p = 0{,}3{-}1{,}0\,\text{mm}$ dan dimasukkan ke dalam *extraction vessel* (EV) secara aksisimetrik untuk menjamin keseragaman distribusi radial. Kepadatan unggun dijaga pada $\rho_b = 400{-}600\,\text{kg/m}^3$ agar porositas $\varepsilon \approx 0{,}4$ sesuai asumsi model.

**Tahap 2 – Pressurization.** EV dinaikkan tekanannya dari tekanan atmosfer ke tekanan operasi (misal $P_\text{op} = 20\,\text{MPa}$) menggunakan pompa *diaphragm pump* atau *piston pump* dengan laju alir yang dikontrol. Sesuai Toledo dan del Valle (2023), tahap ini *non-isothermal* dan menyebabkan pemanasan kompresif CO₂ ($\Delta T_\text{adia} \approx 30{-}50^\circ\text{C}$), sehingga jaket pendingin EV harus diaktifkan untuk menjaga $T < 60^\circ\text{C}$ guna mencegah degradasi termal THC.

**Tahap 3 – Penstabilan Termal.** Sebelum ekstraksi dimulai, sistem didiamkan selama $