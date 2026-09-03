# 1514 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritik CO₂: Integrasi CFD dan Termodinamika Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botano-farmasi global mengalami transformasi signifikan sejak diterapkannya regulasi legalisasi ganja medis di berbagai yurisdiksi (Kanada 2018, Thailand 2022, Jerman 2024, dan beberapa negara bagian AS). Permintaan terhadap minyak kanabis (*cannabis oil*) yang kaya akan cannabinoid—terutama tetrahydrocannabinol (THC) dan cannabidiol (CBD)—meningkat tajam dengan CAGR sekitar 22% menurut proyeksi Grand View Research (2023). Di tengah peluang ekonomi ini, proses ekstraksi konvensional seperti Soxhlet dengan pelarut organik (etanol, heksana) menghadapi tantangan serius terkait keamanan kerja (flammability), residu pelarut pada produk farmasi, degradasi termal termolabil cannabinoid pada suhu >60°C, serta footprint lingkungan yang buruk. Oleh karena itu, **Supercritical Fluid Extraction with CO₂ (SC-CO₂)** muncul sebagai teknologi *green extraction* yang dominan karena CO₂ bersifat nontoksik, nonflammable, inert terhadap cannabinoid, recyclable, dan memiliki临界 tunable solvating power melalui manipulasi tekanan (8–35 MPa) serta suhu (35–70°C).

Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids* (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) menyoroti urgensi pengembangan **model aliran aksisimetrik** yang memvalidasi distribusi fluida CO₂ superkritik dalam vessel ekstraksi. Ketidakhomogenan aliran menyebabkan *channeling effect*, di mana CO₂ superfluida memintas zona biomassa padat sehingga menurunkan yield secara drastis (bisa selisih 30–45% dibanding desain ideal). Dalam konteks Teknik Industri, fenomena ini merepresentasikan persoalan klasik **process yield optimization** dan **scale-up risk**, karena desain vessel yang tidak terverifikasi secara hidrodinamika akan gagal saat di-scale-up dari lab-scale (0,5–2 L) ke pilot (50–200 L) hingga produksi komersial (>1000 L). Lebih jauh, Toledo & del Valle (2023) dalam *The Journal of Supercritical Fluids* (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) membuktikan bahwa **tahapan pressurization, extraction, dan depressurization** memiliki dinamika perpindahan panas transien yang berbeda—suatu aspek yang sering diabaikan pada pemodelan tunak (steady-state). Saat CO₂ dipompa dari kondisi subkritik (5 MPa, 25°C) ke kondisi superkritik (25 MPa, 50°C), gradien termal internal vessel dapat menyebabkan penurunan densitas lokal yang mengubah profil kecepatan dan koefisien transfer massa, sehingga yield cannabinoid tidak sesuai prediksi model isotermal.

Kedua paper ini, ketika diintegrasikan, memberikan kerangka **multi-fidelity modeling** yang relevan bagi insinyur industri untuk: (i) merancang *extractor vessel* dengan geometri optimal yang meminimalkan channeling, (ii) memprediksi profil suhu-tekanan transien untuk penjadwalan batch, (iii) melakukan *energy integration* pada plant utilitas (kompresor, chiller, heat exchanger), serta (iv) menyusun SOP (Standard Operating Procedure) yang terjustifikasi secara saintifik untuk sertifikasi GMP farmasi. Investasi modal untuk satu lini SC-CO₂ komersial berkisar USD 800.000–3.500.000, sehingga keputusan desain yang didasarkan pada model CFD terverifikasi akan secara langsung meningkatkan ROI dan mengurangi *commissioning risk*.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan ekstraksi SC-CO₂ cannabis oil membutuhkan empat pilar persamaan diferensial parsial (PDP) yang diselesaikan secara kopling: persamaan kontinuitas, momentum (Navier-Stokes), energi, dan transfer massa species. Karena geometri vessel ekstraksi pada dasarnya silindris dengan asumsi aliran radial-simetris, digunakan formulasi **koordinat silindris aksisimetrik (r, z)**.

### 2.1 Persamaan Kontinuitas (Konservasi Massa)

Untuk fase fluida CO₂ superkritik yang dianggap kontinum dan termampatkan (compressible):

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

di mana $\rho$ adalah densitas CO₂ (kg/m³), $v_r$ dan $v_z$ adalah komponen kecepatan dalam arah radial dan aksial (m/s). Pada kondisi superkritik standar (25 MPa, 50°C), $\rho_{CO_2} \approx 780\text{ kg/m}^3$ sehingga term kompresibilitas tidak dapat diabaikan (Mach number aliran internal < 0.3, namun variasi densitas akibat gradien T-P cukup berarti, sekitar 8–12%).

### 2.2 Persamaan Momentum (Navier–Stokes Aksisimetrik)

Untuk arah radial $r$:

$$\rho \left(\frac{\partial v_r}{\partial t} + v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] + \rho g_r$$

Untuk arah aksial $z$:

$$\rho \left(\frac{\partial v_z}{\partial t} + v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z - F_z$$

di mana $\mu$ adalah viskositas dinamik CO₂ superkritik ($\approx 6{,}5 \times 10^{-5}$ Pa·s pada 25 MPa, 50°C), $p$ tekanan, dan $F_z$ adalah *drag force* akibat biomassa padat yang diperlakukan sebagai porous medium dengan permeabilitas $K$ dan viskositas inersial $C_2$ (model Darcy-Forchheimer):

$$F_z = -\left(\frac{\mu}{K} v_z + C_2 \frac{1}{2}\rho |v_z| v_z\right)$$

Untuk biomassa cannabis ground dengan ukuran partikel $d_p = 0{,}5$–$2$ mm dan porositas $\varepsilon \approx 0{,}45$, permeabilitas dapat diestimasi menggunakan persamaan Kozeny-Carman:

$$K = \frac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2} \approx 5 \times 10^{-9} \text{ m}^2$$

### 2.3 Persamaan Energi dengan Sumber Kalor Perpindahan Panas

Merujuk pada formulasi Toledo & del Valle (2023), persamaan energi transien untuk fase fluida di dalam vessel:

$$\rho c_p \left(\frac{\partial T}{\partial t} + v_r \frac{\partial T}{\partial r} + v_z \frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff} \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff} \frac{\partial T}{\partial z}\right) + \dot{q}_{rxn} + \dot{q}_{comp} - \dot{q}_{loss}$$

di mana $c_p$ kapasitas panas spesifik CO₂ (≈ 2.200 J/kg·K pada kondisi superkritik), $k_{eff}$ konduktivitas efektif termal efektif (mempertimbangkan kontribusi dispersi termal dalam porous medium, $k_{eff} = k_f \varepsilon + k_s (1-\varepsilon)$), $\dot{q}_{rxn}$ kalor reaksi (diabaikan untuk ekstraksi fisika), $\dot{q}_{comp}$ panas kompresi Joule-Thomson yang sangat relevan:

$$\dot{q}_{comp} = \beta_{JT} \cdot v_z \cdot \frac{\partial p}{\partial z}$$

dengan koefisien Joule-Thomson $\beta_{JT} = \left(\frac{\partial T}{\partial p}\right)_h$. Pada 25 MPa, $\beta_{JT} \approx 0{,}013$ K/MPa sehingga penurunan tekanan 5 MPa akan mendinginkan fluida 65°C—fenomena kritikal yang harus diantisipasi dengan *pre-heater*.

### 2.4 Persamaan Transfer Massa Species (Cannabinoid)

Untuk komponen target THC/CBD yang berpindah dari matriks padat ke fase fluida:

$$\varepsilon \frac{\partial C}{\partial t} + v_r \frac{\partial C}{\partial r} + v_z \frac{\partial C}{\partial z} = D_{eff} \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - (1-\varepsilon) \rho_s \frac{\partial q}{\partial t}$$

dengan $C$ konsentrasi cannabinoid dalam fluida (kg/m³), $D_{eff}$ difusivitas efektif (~$10^{-8}$ m²/s), $q$ loading solid (kg cannabinoid/kg biomassa), dan $\rho_s$ densitas partikel biomassa. Kinetika desorpsi internal umumnya mengikuti model Linear Driving Force (LDF):

$$\frac{\partial q}{\partial t} = -k_L \left(q - \frac{C}{K_{eq}}\right)$$

di mana $k_L = 15 D_{eff}/r_p^2$ (LDF coefficient) dan $K_{eq}$ adalah kesetimbangan solubilitas yang diprediksi oleh model Chrastil:

$$C^* = \rho^{n} \exp\left(\frac{a}{T} + b\right)$$

dengan parameter empiris $n, a, b$ yang bergantung pada solute. Untuk THC, nilai tipikal $n = 3{,}0$, $a = -7800$ K, $b = -28{,}5$ menghasilkan $C^* \approx 4{,}5$ kg/m³ pada 25 MPa, 50°C.

### 2.5 Persamaan Keadaan (Equation of State) CO₂

Untuk menutup sistem, digunakan persamaan Span-Wagner (persamaan referensi untuk CO₂) atau secara pendekatan persamaan Peng-Robinson:

$$p = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

di mana $a = 0{,}45724 \frac{R^2 T_c^2}{p_c}$, $b = 0{,}07780 \frac{RT_c}{p_c}$, dengan $T_c = 304{,}13$ K, $p_c = 7{,}377$ MPa untuk CO₂. Persamaan ini menjamin prediksi densitas akurat dalam 1–2% pada kondisi superkritik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pemodelan SC-CO₂ untuk produksi minyak kanabis farmasi mengikuti protokol rekayasa 7-fase berikut, yang merupakan integrasi metodologi Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023):

### 3.1 Tahap Pra-Desain (Karakteristik Bahan Baku)
1. Karakterisasi biomassa cannabis: kadar air (target <10% wb), ukuran partikel ($d_p = 0{,}5$–$2$ mm, distribusi log-normal), densitas kamba $\rho_b \approx 350$ kg/m³.
2. Analisis profil cannabinoid awal via HPLC: kadar THC/CBD total.
3. Penentuan kondisi operasi target berdasarkan kurva solubilitas: Tekanan 20–30 MPa, suhu 40–60°C, rasio CO₂:biomassa (S/F) = 25–50.

### 3.2 Tahap Pemodelan CFD
1. **Pre-processing**: Pembangunan geometri aksisimetrik vessel (misal $H = 1{,}0$ m, $D = 0{,}15$ m) dengan biomassa diperlakukan sebagai *porous zone* menggunakan ANSYS Fluent atau COMSOL Multiphysics.
2. **Meshing**: Diskretisasi elemen quad/bilioner dengan refined mesh pada inlet/outlet dan dinding vessel. Ukuran elemen $0{,}5$–$2$ mm menghasilkan $\sim 250.000$ elemen.
3. **Solver setup**: Coupled pressure-velocity (SIMPLE), second-order upwind untuk konveksi, time-step $0{,}1$ s untuk simulasi transien $t = 0$–$3600$ s.
4. **Validasi**: Bandingkan profil tekanan prediksi dengan data eksperimental Obchoei & Limtrakarn (2024) pada vessel lab-scale.

### 3.3 Tahap Eksperimen Validasi
1. Ek