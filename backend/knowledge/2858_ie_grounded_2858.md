# 2858 — Pemodelan Aliran Aksisimetrik dan Perpindahan Kalor pada Ekstraksi Minyak Kanabis dengan Fluida Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanam modern mengalami transformasi besar sejak diterapkannya regulasi legalisasi ganja medis dan produk *cannabidiol* (CBD) di lebih dari 40 negara, termasuk Thailand, Kanada, Jerman, dan beberapa negara bagian Amerika Serikat. Permintaan global akan minyak kanabis dengan kemurnian farmasetika (*pharmaceutical-grade cannabis oil*) diproyeksikan mencapai USD 13,2 miliar pada 2030 dengan *compound annual growth rate* (CAGR) sebesar 21,8% (Obchoei & Limtrakarn, 2024). Di tengah ekspansi ini, pemilihan teknologi ekstraksi menjadi titik kritis karena berdampak langsung pada kualitas cannabinoid (THC, CBD, CBG), profil terpena, serta efisiensi energi operasional.

Di antara empat teknologi utama—ekstraksi pelarut organik (etanol, heksana), steam distillation, *cold-pressing*, dan **Supercritical Fluid Extraction with CO₂ (SFE-CO₂)**—SFE-CO₂ mendominasi pasar premium karena kemampuannya mempertahankan bioaktivitas termolabil, meninggalkan residu pelarut nol, dan menghasilkan produk dengan selektivitas tinggi terhadap cannabinoid target. Namun, desain peralatan SFE-CO₂ konvensional masih sangat bergantung pada pendekatan *trial-and-error*, lemari penurun tekanan (*depressurization tank*), dan skenario operasi *batch* dengan *up-time* rendah. Obchoei dan Limtrakarn (2024) menyoroti bahwa tanpa model matematis aliran aksisimetrik yang valid, insinyur proses tidak dapat memprediksi profil konsentrasi CO₂ dalam unggun padat (*packed bed*), distribusi tekanan radial-aksial, atau *yield* cannabinoid sebagai fungsi laju alir.

Secara paralel, Toledo dan del Valle (2023) menekankan bahwa aspek perpindahan kalor—sering diabaikan dalam model SFE tradisional—justru mendominasi perilaku transien pada tahap *pressurization* (pengisian CO₂ bertekanan), *extraction* (pelarutan), dan *depressurization* (pengeluaran ekstrak). Tanpa integrasi model termal, hasil simulasi divergen hingga 18% dari data eksperimen, terutama pada ekstraktor berdiameter besar (> 50 L). Kedua paper ini—yang menjadi rujukan utama modul ini—menyediakan kerangka analitis komprehensif untuk desain, *scale-up*, dan optimalisasi operasi SFE-CO₂ pada tingkat industri.

Urgensi operasional semakin nyata ketika mempertimbangkan fakta bahwa setiap satu kilogram biomassa kanabis kering memerlukan 4–8 kg CO₂ untuk menghasilkan 80–150 gram ekstrak. Efisiensi 1% saja dalam daur ulang CO₂ mewakili penghematan USD 200–400 per batch pada fasilitas skala menengah. Konteks ini menuntut pendekatan rekayasa berbasis fisika yang ketat, bukan pendekatan empiris semata.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Kontinuitas dan Momentum Aksisimetrik

Model Obchoei dan Limtrakarn (2024) menggunakan sistem koordinat silinder $(r, z)$ dengan simetri aksial. Persamaan kontinuitas untuk fase fluida superkritikal ditulis sebagai:

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r \rho u_r\right) + \frac{\partial}{\partial z}\left(\rho u_z\right) = 0$$

dengan $\rho$ adalah densitas CO₂ superkritikal (kg/m³), $u_r$ dan $u_z$ masing-masing komponen kecepatan radial dan aksial. Persamaan momentum Navier–Stokes untuk arah aksial mengikuti bentuk *Darcy–Brinkman* untuk memperhitungkan keberadaan unggun biomassa:

$$\rho\left(u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{\kappa}u_z$$

di mana $\mu$ adalah viskositas dinamis CO₂, $p$ tekanan operasi, dan $\kappa$ permeabilitas intrinsik unggun yang dihitung dari persamaan Kozeny–Carman:

$$\kappa = \frac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2}$$

dengan $d_p$ diameter partikel biomassa (rata-rata 0,8 mm) dan $\varepsilon$ porositas unggun (tipikal 0,35–0,45).

### 2.2 Persamaan Energi dan Perpindahan Kalor

Toledo dan del Valle (2023) mengembangkan model termal dengan asumsi *lumped capacitance* pada dinding ekstraktor dan *distributed parameter* pada fluida. Persamaan konservasi energi adalah:

$$\rho c_p\left(u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{rxn}$$

dengan $c_p$ kapasitas panas pada tekanan konstan, $k_{eff}$ konduktivitas efektif (gabungan konduksi molekuler dan dispersi), dan $\dot{q}_{rxn}$ laju pelepasan kalor oleh efek Joule–Thomson saat CO₂ berubah fasa. Efek pendinginan/pemanasan Joule–Thomson dimodelkan dengan:

$$\dot{q}_{rxn} = \rho u_z \mu_{JT} \frac{\partial p}{\partial z}$$

di mana koefisien Joule–Thomson $\mu_{JT}$ untuk CO₂ pada 250 bar dan 333 K bernilai sekitar $1{,}2 \times 10^{-5}$ K/Pa (relevan untuk menjelaskan gradien termal 6–12 K yang teramati dalam eksperimen Toledo & del Valle).

### 2.3 Persamaan Konstitutif: Equation of State

Densitas CO₂ superkritikal dihitung dengan persamaan *Peng–Robinson*:

$$p = \frac{RT}{v - b} - \frac{a(T)}{v(v+b) + b(v-b)}$$

dengan parameter $a(T)$ dan $b$ yang bergantung pada faktor acentrik ($\omega = 0{,}225$) dan temperatur krusis CO₂ ($T_c = 304{,}13$ K, $p_c = 7{,}377$ MPa).

### 2.4 Model Perpindahan Massa

Laju pelarutan cannabinoid dari matriks padat ke fase superkritikal mengikuti model *shrinking core* dengan resistensi difusi internal dan eksternal:

$$\frac{dC}{dt} = k_f a_s (C^* - C)$$

dengan $k_f$ koefisien transfer massa fluida (≈ 5×10⁻⁵ m/s), $a_s$ luas permukaan spesifik partikel (m²/m³), $C^*$ konsentrasi kesetimbangan (diduga dari korelasi Chrastil), dan $C$ konsentrasi bulk. Korelasi Chrastil:

$$C^* = \rho^{k} \exp\left(\frac{a}{T} + b\right)$$

dengan parameter empiris $k$, $a$, $b$ yang fitting terhadap data kesetimbangan THC dan CBD.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti arsitektur empat modul terintegrasi seperti yang disajikan Obchoei dan Limtrakarn (2024) dengan validasi termal dari Toledo dan del Valle (2023):

**Tahap 1 — Preparasi Biomassa.** Cannabis sativa dipanen, dikeringkan hingga kadar air < 10%, digiling menjadi partikel 0,5–1,0 mm. Standar ASTM D8196 berlaku untuk kontrol ukuran partikel.

**Tahap 2 — Pressurization.** CO₂ dipompa dari 5 MPa menjadi 25–30 MPa menggunakan *diaphragm compressor* dengan pendingin *after-cooler*. Laju kenaikan tekanan dijaga ≤ 2 MPa/menit untuk menghindari gradien termal berlebihan (Toledo & del Valle, 2023). Suhu jacket diatur mengikuti *ramp profile*:

$$T_{jacket}(t) = T_{target} + \Delta T_{max} \cdot e^{-t/\tau_{thermal}}$$

dengan $\tau_{thermal} \approx 180$ s untuk ekstraktor 50 L.

**Tahap 3 — Dynamic Extraction (SFE).** CO₂ superkritikal dialirkan dengan laju 1–4 kg/jam per kg biomassa. Suhu operasi 313–343 K, tekanan 15–30 MPa. Mode operasi *co-current* atau *counter-current* dipilih sesuai desain. Rasio *solvent-to-feed* (S/F) menjadi variabel kontrol utama untuk target *yield*.

**Tahap 4 — Depressurization & Separation.** Ekstrak dipisahkan pada *separator* tahap pertama (8–10 MPa, 318 K) dan tahap kedua (2–3 MPa, 298 K). CO₂ direcycle ke *buffer tank*.

Diagram alir proses mengikuti topologi: `Compressor → Heater → Extractor → Valve 1 → Separator 1 → Valve 2 → Separator 2 → Recycle → Buffer → Compressor`, dengan *control loop* PID pada $T$, $p$, dan laju alir massa ($\dot{m}_{CO_2}$).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Kasus

Ekstraktor cilindris dengan diameter $D = 0{,}30$ m, panjang $L = 1{,}00$ m, diisi 25 kg biomassa kanabis (densitas bulk $\rho_b = 350$ kg/m³, porositas $\varepsilon = 0{,}40$). Kondisi operasi: $T = 333$ K, $p = 25$ MPa, laju alir $\dot{m}_{CO_2} = 50$ kg/jam.

### 4.2 Perhitungan Densitas CO₂ Superkritikal

Menggunakan PR-EOS pada $T = 333$ K dan $p = 25$ MPa, diselesaikan secara iteratif menghasilkan:

$$\rho_{CO_2} \approx 781{,}4 \text{ kg/m}^3$$

(Viskositas dinamis pada kondisi ini: $\mu \approx 7{,}8 \times 10^{-5}$ Pa·s.)

### 4.3 Perhitungan Permeabilitas Unggun

$$d_p = 8{,}0 \times 10^{-4} \text{ m}, \quad \varepsilon = 0{,}40$$

$$\kappa = \frac{(8{,}0 \times 10^{-4})^2 \cdot (0{,}40)^3}{180(1-0{,}40)^2} = \frac{6{,}4 \times 10^{-7} \cdot 0{,}064}{180 \cdot 0{,}36} \approx 6{,}32 \times 10^{-11} \text{ m}^2$$

### 4.4 Perhitungan Kecepatan Superfisial

Laju volumetrik CO₂:

$$\dot{V} = \frac{\dot{m}}{\rho} = \frac{50/3600}{781{,}4} = 1{,}778 \times 10^{-5} \text{ m}^3/\text{s}$$

Luas penampang: $A = \pi (0{,}15)^2 = 0{,}0707$ m². Kecepatan superfisial:

$$u_{sup} = \frac{\dot{V}}{A} = \frac{1{,}778 \times 10^{-5}}{0{,}0707} = 2{,}52 \times 10^{-4} \text{ m/s}$$

### 4.5 Perhitungan Kecepatan Interstitial dan Reynolds

Kecepatan interstitial: $u_i = u_{sup}/\varepsilon = 6{,}30 \times 10^{-4}$ m/s.

Bilangan Reynolds partikel:

$$Re_p = \frac{\rho u_i d_p}{\mu} = \frac{781{,}4 \cdot 6{,}