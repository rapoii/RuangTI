# 2314 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi minyak kanabis telah mengalami transformasi teknologi yang signifikan sejak diterapkannya regulasi legalisasi di berbagai yurisdiksi farmasi, nutraceutical, dan kosmetik. Dalam konteks *phytocannabinoid processing*, pemilihan teknologi ekstraksi bukan sekadar persoalan yield, melainkan terkait dengan kemurnian produk, profil terpena, serta kemampuan mempertahankan aktivitas termolabil senyawa bioaktif seperti tetrahydrocannabinol (THC), cannabidiol (CBD), dan cannabinoid asam (THCA, CBDA). Di antara empat pilar teknologi — ekstraksi pelarut organik (etanol, heksana), ekstraksi hidrokarbon (butana, propana), ekstraksi minyak nabati (olive oil, MCT), dan *Supercritical Fluid Extraction* dengan CO₂ (SFE-CO₂) — yang terakhir menjadi standar emas (*gold standard*) untuk aplikasi *pharmaceutical-grade* karena sifatnya yang tunable, GRAS (*Generally Recognized As Safe*), tidak meninggalkan residu pelarut, dan memiliki selektivitas yang dapat diatur melalui parameter operasi.

Obchoei dan Limtrakarn (2024), dalam makalahnya yang diterbitkan di *International Journal of Thermofluids*, menyoroti kebutuhan industri akan model komputasional yang mampu memprediksi perilaku hidrodinamika dan perpindahan massa di dalam *extractor vessel* silindris berisi media berpori biomassa kanabis. Permasalahan operasional yang dijawab oleh paper tersebut adalah asumsi yang selama ini digunakan dalam perancangan reaktor SFE — berupa model *one-dimensional plug flow* dengan profil kecepatan seragam — menjadi tidak realistis ketika rasio aspek tabung (H/D) cukup besar dan laju alir CO₂ mendekati kondisi transisi turbulen-laminar. Di sisi lain, Toledo dan del Valle (2023) dalam seri pertama dari studi multi-part mereka di *The Journal of Supercritical Fluids* membangun fondasi termodinamika untuk mengkuantifikasi efek perpindahan panas yang sebelumnya sering diabaikan, padahal fluktuasi suhu ±5°C pada tekanan 300 bar dapat menggeser densitas CO₂ sebesar 8–12% dan mengubah kapasitas solvasi secara non-linear (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)).

Urgensi ekonominya terletak pada biaya modal (*capital expenditure*) satu unit SFE-CO₂ skala industri yang mencapai USD 500.000–2.000.000, sehingga kesalahan desain sebesar 10% pada volume reaktor berdampak langsung pada kerugian investasi ratusan ribu dolar AS per unit. Lebih lanjut, dalam kerangka *Industry 4.0* dan *digital twin manufacturing*, kemampuan memiliki model fisik yang validated menjadi prasyarat untuk prediksi *batch-to-batch variability*, optimasi *solvent-to-feed ratio*, dan sertifikasi CPV (*Continued Process Verification*) sesuai pedoman FDA Process Validation Guidance. Kedua paper ini secara komplementer menjawab kebutuhan tersebut: Obchoei & Limtrakarn (2024) menyediakan kerangka hidrodinamika aksisimetrik 2D, sementara Toledo & del Valle (2023) melengkapi dengan submodel termal pada tahapan pressurization, extraction, dan depressurization yang menentukan profil operasi *batch-wise*.

---

## 2. Landasan Teori & Formulasi Matematis

Model aliran aksisimetrik yang dikembangkan Obchoei dan Limtrakarn (2024) berbasis pada persamaan konservasi massa, momentum, energi, dan spesies yang diselesaikan dalam koordinat silindris $(r,z)$ dengan asumsi simetri rotasional terhadap sumbu vertikal. Persamaan kontinuitas untuk fase fluida superkritis ditulis sebagai:

$$\frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

di mana $\rho$ adalah densitas CO₂ superkritis (kg/m³) yang sangat sensitif terhadap tekanan dan suhu, dan $v_r$, $v_z$ adalah komponen kecepatan radial dan aksial (m/s). Untuk media berpori biomassa kanabis, model momentum menggunakan formulasi *Darcy-Forchheimer* termodifikasi yang menggabungkan kerugian viskos dan inersial:

$$\rho \left( \frac{1}{\varepsilon^2} \vec{v} \cdot \nabla \vec{v} \right) = -\nabla p + \mu \nabla^2 \vec{v} - \frac{\mu}{\kappa} \vec{v} - \frac{\beta_F \rho}{\sqrt{\kappa}} |\vec{v}| \vec{v} \tag{2}$$

dengan $\varepsilon$ porositas packed-bed (umumnya 0,35–0,45 untuk cacahan kanabis kering), $\kappa$ permeabilitas intrinsik (m²), dan $\beta_F$ koefisien inersia Forchheimer (Ortega & Rojas, 2019, diacu oleh Obchoei & Limtrakarn, 2024).

Komponen momentum radial dan aksial secara eksplisit:

$$\rho \left( v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \mu \left[ \frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r v_r)}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} \right] - \frac{\mu}{\kappa} v_r - \frac{\beta_F \rho}{\sqrt{\kappa}} \sqrt{v_r^2+v_z^2}\, v_r \tag{3}$$

$$\rho \left( v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2} \right] - \rho g - \frac{\mu}{\kappa} v_z - \frac{\beta_F \rho}{\sqrt{\kappa}} \sqrt{v_r^2+v_z^2}\, v_z \tag{4}$$

Persamaan energi, yang merupakan fokus utama Toledo & del Valle (2023), mencakup konduksi, konveksi, dan pelepasan/penyerapan panas laten oleh matriks padat:

$$\rho c_p \left( v_r \frac{\partial T}{\partial r} + v_z \frac{\partial T}{\partial z} \right) = k_{eff} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2} \right] + Q_{rxn} + \dot{m}_{solv} \Delta H_{solv} \tag{5}$$

dengan $k_{eff}$ konduktivitas efektif packed-bed ($k_{eff} = \varepsilon k_f + (1-\varepsilon) k_s$), dan $\dot{m}_{solv}\Delta H_{solv}$ kontribusi enthalpy dari pelarutan cannabinoid. Persamaan transpor spesies untuk konsentrasi cannabinoid total $C_i$ mengikuti hukum Fick dengan dispersi aksial dan radial:

$$\varepsilon D_{ax} \frac{\partial^2 C_i}{\partial z^2} + \varepsilon D_r \left( \frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial C_i}{\partial r}\right) \right) - \vec{v} \cdot \nabla C_i = \varepsilon \frac{\partial C_i}{\partial t} + (1-\varepsilon) \rho_s \frac{\partial q_i}{\partial t} \tag{6}$$

di mana $q_i$ adalah konsentrasi cannabinoid dalam fase padat yang terkait dengan $C_i$ melalui model desorpsi *linear driving force* (LDF):

$$\frac{\partial q_i}{\partial t} = k_f a_p \left( C_i^* - C_i \right) \tag{7}$$

dengan $C_i^* = K_i(T,P) C_i$ adalah konsentrasi kesetimbangan yang bergantung pada *partition coefficient* $K_i$. Untuk sistem CO₂-THC dan CO₂-CBD, hubungan ini mengikuti model Chrastil (1982) yang dimodifikasi:

$$\ln K_i = a_i + \frac{b_i}{T} + c_i \ln \rho_{CO_2} \tag{8}$$

dengan koefisien $a_i, b_i, c_i$ spesifik untuk masing-masing cannabinoid.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model-model di atas mengikuti SOP yang terbagi ke dalam lima tahap utama yang saling tergantung secara termal dan hidrolik:

**Tahap I: Pressurization.** CO₂ dari storage tank pada kondisi subkritis (≈55 bar, 5°C) dipompa menggunakan diaphragm pump ke tekanan target 250–300 bar. Laju pressurization yang terlalu tinggi (ΔP/Δt > 20 bar/min) menyebabkan gradien termal aksial signifikan dan potensi *thermal shock* pada biomassa. Toledo & del Valle (2023) merekomendasikan ramp rate 8–12 bar/min dengan kontrol temperatur jaket eksternal untuk menjaga $\Delta T < 3°C$ (DOI: 10.1016/j.supflu.2023.106046).

**Tahap II: Soak/Equilibration.** Setelah target tekanan tercapai, sistem ditahan selama 10–20 menit untuk mencapai kesetimbangan termal antara dinding extractor, matriks padat, dan fluida. Tahapan ini krusial karena densitas CO₂ sangat bergantung pada suhu sesuai persamaan Span-Wagner EOS:

$$\rho_{CO_2} = f(T, P) \quad \text{dengan} \quad \left(\frac{\partial \rho}{\partial T}\right)_P \approx -12,3 \text{ kg/(m}^3\cdot\text{K)} \text{ pada 300 bar} \tag{9}$$

**Tahap III: Dynamic Extraction (SF-CO₂ Flow).** Aliran CO₂ superkritis melalui packed-bed cac