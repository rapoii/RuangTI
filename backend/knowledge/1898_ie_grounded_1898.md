# 1898 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Fluida Superkritik CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanam (botanical extraction) global mengalami transformasi signifikan dengan adopsi teknologi *Supercritical Fluid Extraction* (SFE) menggunakan CO₂ sebagai pelarut, terutama untuk material sensitif termal seperti kanabis (*Cannabis sativa*). Pasar ekstrak kanabis global diproyeksikan mencapai USD 23,73 miliar pada tahun 2030 dengan CAGR 18,2% (Fortune Business Insights, 2024), didorong oleh permintaan produk farmasi, nutraceutical, kosmetik, dan pangan fungsional yang mengandung cannabinoid (CBD, CBG, THC) serta terpenoid bioaktif. Dalam konteks ini, Obchoei dan Limtrakarn (2024) mempublikasikan model aliran aksisimetrik yang merepresentasikan dinamika fluida dua dimensi di dalam reaktor ekstraksi silinder secara lebih akurat dibanding pendekatan satu dimensi konvensional (DOI: 10.1016/j.ijft.2024.100682).

Urgensi pengembangan model komputasi ini lahir dari dua permasalahan industri utama. Pertama, *bottleneck* operasional berupa yield ekstraksi yang sangat sensitif terhadap keseragaman distribusi tekanan dan suhu di dalam *extractor vessel*. Fluktuasi 1–2 K pada suhu operasi dapat mengubah densitas CO₂ superkritik secara drastis, menurunkan kelarutan target solut hingga 15–25%. Kedua, kendala desain yang selama ini menggunakan asumsi *plug flow* atau *well-mixed reactor* terbukti over-simplified karena忽略了*channeling effects*, *dead zones*, dan gradien radial konsentrasi yang secara kumulatif menurunkan efisiensi total hingga 30%. Toledo dan del Valle (2023) juga menekankan bahwa tahapan *pressurization*, *extraction*, dan *depressurization* memiliki profil perpindahan panas yang berbeda dan memerlukan pemodelan terpisah (DOI: 10.1016/j.supflu.2023.106046).

Secara ekonomi, *Capital Expenditure* (CAPEX) instalasi SFE-CO₂ industri berkapasitas 100 L berkisar USD 350.000–600.000, sementara *Operating Expense* (OPEX) didominasi oleh konsumsi CO₂ (Rp 25.000–40.000/kg), energi listrik kompresor (8–15 kW kontinu), dan biaya tenaga kerja terampil. Optimalisasi desain reaktor melalui CFD (Computational Fluid Dynamics) aksisimetrik seperti yang diajukan Obchoei dan Limtrakarn (2024) memungkinkan pengurangan jumlah *trial-and-error* eksperimental,缩短 *time-to-market* produk baru, serta peningkatan yield antara 8–18% yang berdampak langsung pada margin profit industri. Oleh karena itu, integrasi model matematis rigor dengan implementasi SOP manufaktur menjadi kebutuhan strategis bagi pelaku industri rekayasa proses.

## 2. Landasan Teori & Formulasi Matematis

Model aksisimetrik Obchoei dan Limtrakarn (2024) menurunkan persamaan konservasi dalam koordinat silinder $(r, z, \theta)$ dengan asumsi aliran sumetris terhadap sumbu aksial, sehingga seluruh variabel hanya bergantung pada $r$ dan $z$. Persamaan kontinuitas untuk fluida compressible CO₂ superkritik dinyatakan sebagai:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

di mana $\rho$ adalah densitas fluida (kg/m³), $v_r$ dan $v_z$ berturut-turut adalah komponen kecepatan radial dan aksial (m/s). Persamaan momentum arah radial dan aksial mengikuti bentuk Navier–Stokes dengan simplifikasi asumsi *no swirl* ($\partial/\partial \theta = 0$):

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] \tag{2}$$

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g \tag{3}$$

Persamaan energi dengan mempertimbangkan konduksi, konveksi, dan perpindahan panas kompresibel menurut Toledo dan del Valle (2023):

$$\rho c_p\left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = k\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + \beta T \frac{\partial p}{\partial t} \tag{4}$$

di mana $c_p$ adalah kapasitas panas spesifik (J/kg·K), $k$ konduktivitas termal (W/m·K), dan $\beta$ koefisien ekspansi termal. Persamaan konstitutif untuk densitas CO₂ superkritik menggunakan *Peng–Robinson Equation of State* (PR-EOS):

$$P = \frac{RT}{V_m - b} - \frac{a\alpha}{V_m^2 + 2bV_m - b^2} \tag{5}$$

dengan parameter $a$, $b$, dan fungsi $\alpha(T_r, \omega)$ yang bergantung pada suhu tereduksi $T_r = T/T_c$ dan faktor acentrik $\omega = 0{,}225$ untuk CO₂ ($T_c = 304{,}25$ K, $P_c = 7{,}38$ MPa).

Untuk perpindahan massa cannabinoid dari matriks padat ke fluida superkritik, model Obchoei dan Limtrakarn (2024) menggunakan persamaan *convective-diffusion* dengan koefisien transfer massa $k_c$ (m/s):

$$\varepsilon \frac{\partial c}{\partial t} + v_r\frac{\partial c}{\partial r} + v_z\frac{\partial c}{\partial z} = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial c}{\partial r}\right) + \frac{\partial^2 c}{\partial z^2}\right] - (1-\varepsilon)k_c a_p (c - c^*) \tag{6}$$

di mana $\varepsilon$ adalah porositas bed (umumnya 0,35–0,45 untuk biomassa kanabis giling), $D_{eff}$ difusivitas efektif, $a_p$ luas permukaan partikel per volume, dan $c^*$ konsentrasi kesetimbangan yang dihitung dari korelasi Chrastil:

$$c^* = \rho^k \cdot \exp\left(\frac{a}{T} + b\right) \tag{7}$$

dengan parameter $k \approx 1{,}5$–$2{,}3$, $a$, dan $b$ yang fitted terhadap data eksperimental untuk CBD dan THC.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model aksisimetrik ini mengikuti SOP bertahap yang diuraikan sebagai berikut. **Tahap Pra-Produksi:** Material kanabis kering (kadar air <10% w/w) digiling hingga ukuran partikel 0,5–1,5 mm, dimasukkan ke dalam *extractor vessel* silinder (diameter 100–300 mm, tinggi 600–1500 mm) dengan rasio *bed height-to-diameter* (H/D) optimal 4:1 sesuai rekomendasi Toledo dan del Valle (2023) untuk menghindari *channeling* dominan.

**Tahap Pressurization (5–15 menit):** CO₂ dari tangki penyimpanan dicairkan melalui *cooler* (5°C, 50 bar) lalu dipompa oleh *diaphragm compressor* hingga mencapai tekanan operasi 15–30 MPa. Laju pressurization dijaga pada 0,5–1,0 MPa/menit untuk menghindari *thermal shock* dan gradien tegangan pada dinding vessel. Model perpindahan panas Toledo dan del Valle (2023) menunjukkan bahwa 70–85% waktu pressurization didominasi oleh pemanasan dinding vessel, sehingga *jacket heater* harus pre-heated hingga 5 K di atas $T_target$.

**Tahap Static-Dynamic Extraction (60–180 menit):** Setelah tercapai kondisi superkritik stabil (T = 313–333 K, P = 15–25 MPa, $\rho_{CO_2} \approx 600$–$780$ kg/m³), fluida dialirkan dengan laju 0,5–3,0 kg CO₂/jam per kg biomassa. Pemantauan parameter *in-situ* menggunakan sensor tekanan (akurasi ±0,1% FS), termokopel Tipe K (akurasi ±0,5 K), dan *flow meter* *Coriolis* (akurasi ±0,05%). **Tahap Depressurization (10–20 menit):** CO₂ dialirkan ke *separator* (P = 5–6 MPa, T = 298–308 K) melalui *back-pressure regulator* (BPR) dengan laju 0,3–0,8 MPa/menit untuk mencegah *foaming* dan menjaga kualitas minyak.

**Tahap Pasca-Ekstraksi:** Minyak yang terkondensasi di separator dikumpulkan, *winterized* pada -20°C selama 24 jam untuk menghilangkan wax, lalu dianalisis via HPLC untuk konsentrasi CBD/THC. Diagram alir lengkap sesuai dengan standar *Good Manufacturing Practice* (GMP) untuk produk cannabinoid farmasi (misal ASTM D8449, USP <467>).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebuah pabrik ekstraksi di Thailand (kasus Obchoei & Limtrakarn, 2024) menggunakan vessel silinder dengan $D = 0{,}15$ m, $H = 0{,}60$ m, diisi 5 kg biomassa kanabis giling dengan $\varepsilon = 0{,}40$ dan $d_p = 1{,}0$ mm. Target kondisi operasi: $P = 20$ MPa, $T = 323$ K. **Langkah 1 — Hitung densitas CO₂ superkritik dengan PR-EOS.**

Parameter CO₂: $T_c = 304{,}25$ K, $P_c = 7{,}38$ MPa, $\omega = 0{,}225$, $R = 8{,}314$ J/mol·K. $T_r = 323/304{,}25 = 1{,}0619$. Hitung $\kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2 = 0{,}7077$, sehingga $\alpha = [1 + \kappa(1-\sqrt{T_r})]^2 = [1 + 0{,}707