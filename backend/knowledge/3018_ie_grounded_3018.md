# 3018 — Model Aliran Aksisimetrik Ekstraksi Minyak Cannabis pada Proses Supercritical Fluid Extraction (SC-CO₂)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol — khususnya minyak cannabis (*Cannabis sativa* L.) — mengalami transformasi signifikan sejak diterapkannya regulasi legalisasi di yurisdiksi seperti Kanada (2018), beberapa negara bagian AS, dan Thailand (2022). Permintaan global akan cannabinoid aktif seperti cannabidiol (CBD) dan tetrahidrokanabinol (Δ⁹-THC) diproyeksikan mencapai USD 56,8 miliar pada tahun 2027 (Fortune Business Insights, 2023), sehingga kebutuhan akan proses ekstraksi yang *reproducible*, *scalable*, dan memenuhi *Good Manufacturing Practice* (GMP) menjadi sangat mendesak. Di antara berbagai teknologi yang tersedia — pelarut organik (etanol, heksana), *steam distillation*, dan *supercritical fluid extraction* (SFE) — proses SC-CO₂ muncul sebagai primadona karena sifatnya yang non-toksik, *green-chemistry compliant*, kemampuan *tunable selectivity* melalui manipulasi tekanan dan suhu, serta kemampuan mempertahankan integritas termolabil cannabinoid.

Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa pemahaman fenomena aliran fluida di dalam *extractor vessel* sangat krusial untuk merancang proses yang efisien dan aman. Mereka mengajukan **model aliran aksisimetrik** (*axisymmetric flow model*) yang menangkap perilaku dua dimensi radial-aksial CO₂ superkritis ketika melintasi matriks biomassa cannabis yang terkompresi. Pendekatan ini menjadi penting karena asumsi *plug flow* satu dimensi yang lazim digunakan dalam desain industri cenderung mengabaikan gradien radial konsentrasi dan suhu yang nyata di lapangan. Sebagai komplemen, Toledo dan del Valle (2023) di *The Journal of Supercritical Fluids* menekankan bahwa fenomena **perpindahan panas** selama tahap *pressurization*, *extraction* (statis dan dinamis), dan *depressurization* memiliki dampak dominan terhadap yield, kualitas ekstrak, dan efisiensi energi — suatu aspek yang sering diabaikan dalam model konvensional.

Dalam konteks industri, *extractor vessel* tipikal memiliki volume 5–5000 L dengan tekanan operasi 8–35 MPa dan suhu 35–70 °C, sehingga diperlukan prediksi kuantitatif yang presisi untuk menghindari *bottleneck* seperti *channeling*, *dead zones*, atau degradasi termal cannabinoid. Kegagalan dalam mengkuantifikasi profil aliran dapat menyebabkan *over-engineering* (pemborosan modal) atau *under-design* (yield rendah dan ketidakpatuhan batch). Dokumen Knowledge Base ini akan menguraikan landasan matematis, metodologi implementasi, serta studi kasus kuantitatif yang relevan bagi spesialis Teknik Industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konstitusi Superkritis CO₂

Untuk memodelkan perilaku termodinamika CO₂ di atas titik kritisnya ($T_c = 304{,}13$ K; $P_c = 7{,}377$ MPa), persamaan keadaan **Peng–Robinson (PR-EOS)** digunakan secara luas karena akurasinya pada fasa superkritis:

$$P = \frac{RT}{v - b} - \frac{a(T)}{v(v+b) + b(v - b)}$$

dengan parameter:

$$a(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c} \left[ 1 + \kappa \left( 1 - \sqrt{T/T_c} \right) \right]^2$$

$$b = 0{,}07780 \frac{R T_c}{P_c}, \qquad \kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$$

di mana $\omega$ adalah faktor asentrik Pitzer. Untuk CO₂, $\omega \approx 0{,}2236$, sehingga diperoleh $a$ dan $b$ spesifik yang digunakan untuk menghitung densitas superkritis $\rho_{CO_2}(P,T)$ yang sangat sensitif terhadap perubahan suhu-tekanan.

### 2.2 Persamaan Kekekalan dalam Geometri Aksisimetrik

Karena *extractor vessel* berbentuk silinder dengan sumbu rotasi, formulasi Obchoei & Limtrakarn (2024) menggunakan koordinat silindris $(r,z)$. Persamaan kontinuitas dan momentum Navier–Stokes untuk aliran **aksisimetrik, tunak, kompresibel, laminar** (jangkauan Reynolds tipikal $Re \approx 0{,}1-50$ pada packed bed biomassa) adalah:

$$\frac{1}{r} \frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \quad \text{(kontinuitas)}$$

$$\rho (v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z}) = -\frac{\partial P}{\partial r} + \mu \left[ \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_r}{\partial r} \right) - \frac{v_r}{r^2} + \frac{\partial^2 v_r}{\partial z^2} \right]$$

$$\rho (v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z}) = -\frac{\partial P}{\partial z} + \mu \left[ \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial v_r}{\partial z} \right) + \frac{\partial^2 v_z}{\partial z^2} \right] - \rho g$$

### 2.3 Persamaan Energi dan Perpindahan Panas

Merujuk pada formulasi Toledo & del Valle (2023), perpindahan panas tiga-tahap mengikuti persamaan energi adveksi-difusi:

$$\rho C_p \left( v_r \frac{\partial T}{\partial r} + v_z \frac{\partial T}{\partial z} \right) = \frac{1}{r} \frac{\partial}{\partial r} \left( r k_{eff} \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z} \left( k_{eff} \frac{\partial T}{\partial z} \right) + S_T$$

dengan $k_{eff} = k_{CO_2} \cdot \varepsilon + k_{solid} \cdot (1-\varepsilon)$ adalah konduktivitas efektif *packed bed* (model paralel Wakao–Kaguei), $\varepsilon$ porositas, dan $S_T$ sumber panas volumetrik yang terkait dengan *Joule–Thomson effect* saat CO₂ mengalami ekspansi isoentalpik pada tahap *depressurization*:

$$\mu_{JT} = \left( \frac{\partial T}{\partial P} \right)_H = \frac{1}{C_p} \left[ T \left( \frac{\partial V}{\partial T} \right)_P - V \right]$$

Untuk CO₂ pada 15 MPa dan 45 °C, $\mu_{JT} \approx 1{,}1$ K/MPa — sebuah efek non-trivial yang menurunkan suhu lokal secara signifikan dan berpotensi mengganggu selektivitas ekstraksi.

### 2.4 Kinetika Transfer Massa

Model dua-film atau *shrinking core* diterapkan untuk laju pelarutan cannabinoid ke dalam CO₂:

$$\frac{\partial C_i}{\partial t} + (v_r \frac{\partial C_i}{\partial r} + v_z \frac{\partial C_i}{\partial z}) = D_{i,m} \left[ \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial C_i}{\partial r} \right) + \frac{\partial^2 C_i}{\partial z^2} \right] - R_i$$

dengan koefisien transfer massa $k_f$ dihitung dari korelasi *Wakao–Funazkri*:

$$Sh = 2{,}0 + 1{,}1 Sc^{1/3} Re^{0{,}6}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model aksisimetrik memerlukan SOP yang terintegrasi. Berikut adalah *process flow* yang direkomendasikan berdasarkan integrasi Obchoei–Limtrakarn (2024) dan Toledo–del Valle (2023):

**Tahap 1: Preparasi Biomassa**
Bunga cannabis kering (*<10\%$ moisture*) digiling hingga ukuran partikel 0,5–2 mm, kemudian dikemas ke dalam *extractor vessel* dengan densitas bulk $\rho_b \approx 350$ kg/m³ dan porositas $\varepsilon \approx 0{,}4$. Pengisian dilakukan secara seragam untuk mencegah *channeling*.

**Tahap 2: Pressurization (5–8 menit)**
CO₂ dipompa dari tangki penyimpanan (6 MPa) hingga tekanan target (12–25 MPa) menggunakan *diaphragm compressor* atau *piston pump* berpendingin. Heat exchanger pre-heater memanaskan CO₂ hingga 40–60 °C untuk menghindari dua fasa. Laju pressurization direkomendasikan $< 3$ MPa/menit guna mencegah *thermal shock* dan menjaga integritas packed bed.

**Tahap 3: Static Soaking (0–30 menit)**
Opsional, untuk menyeimbangkan konsentrasi CO₂–solute dalam matriks sebelum dialirkan. Waktu soaking optimal $t_{soak} = V_{bed}/Q_{CO_2}$.

**Tahap 4: Dynamic Extraction (60–180 menit)**
CO₂ superkritis dipompa secara continuous (*recirculation mode*) dengan laju $Q = 5-50$ L/jam per kg biomassa. Rasio solvent-to-feed (S/F) dipertahankan pada 20–60. Suhu vessel dikontrol dalam rentang $\pm 1$ °C oleh *jacket heater* eksternal.

**Tahap 5: Depressurization & Separation**
CO₂–solute mixture memasuki *separator* (1–5 MPa, 30 °C) di mana cannabinoid terpresipitasi. CO₂ direcycle, dan produk dikumpulkan. *Back-pressure regulator* mengendalikan laju penurunan tekanan $\leq 1$ MPa/menit untuk menghindari *foaming* dan degradasi.

**Tahap 6: Quality Control**
Analisis HPLC/GC-MS untuk profil cannabinoid (CBD, THC, CBN, CBG). Yield target: 10–18% massa biomassa untuk varietas kaya-CBD.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Ekstraksi 10 kg biomassa cannabis (10% CBD, 2% THC) dalam vessel silinder diameter $D = 0{,}20$ m, tinggi terisi $H = 0{,}60$ m. Tekanan operasi $P = 15$ MPa, suhu $T = 45$ °C, laju alir CO₂ $\dot{m}_{CO_2} = 3{,}0$ kg/jam.

**Langkah 1: Densitas CO₂ Supercritis**
Menggunakan PR-EOS, pada 15 MPa dan 318,15 K diperoleh $\rho_{CO_2} \approx 780$ kg/m³.

**Langkah 2: Kecepatan Superfisial dan Reynolds**

$$v_s = \frac{\dot{m}_{CO_2}}{\rho_{CO_2} \cdot A_c} = \frac{3{,}0}{780 \times \pi(0{,}10)^2} \approx 0{,}122 \text{ m/jam} = 3{,}4 \times 10^{-5} \text{ m/s}$$

Partikel rata-rata $d_p = 1{,}0$ mm, $\mu_{CO_2} \approx 7{,}5 \times 10^{-5}$ Pa·s:

$$Re = \frac{\rho_{CO_2} v_s d_p}{\mu (1-\varepsilon)} = \frac{780 \times 3{,}4\times 10^{-5} \times 0{,}001}{7{,}5\times 10^{-5} \times 0{,}6} \approx 0{,}59$$

Aliran laminar (jauh di bawah $Re_{crit} = 10$ untuk packed bed) — validasi asumsi laminar.

**Langkah 3: Kecepatan Interstitial dan *Residence Time***

$$v_i = \frac{v_s}{\varepsilon} = \frac{3{,}4\times 10^{-5}}{0{,