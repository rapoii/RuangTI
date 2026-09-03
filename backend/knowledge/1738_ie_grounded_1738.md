# 1738 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis Menggunakan Fluida Superkritis CO₂: Integrasi Computational Fluid Dynamics dan Analisis Perpindahan Panas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri kanabis medis dan rekreasional global sedang mengalami ekspansi pesat, diproyeksikan mencapai valuasi lebih dari USD 100 miliar pada 2030. Dalam konteks ini, pemilihan teknologi ekstraksi menjadi keputusan rekayasa kritis yang menentukan kualitas produk, margin operasional, dan kepatuhan regulasi. Ekstraksi dengan fluida superkritis CO₂ (scCO₂) telah muncul sebagai *gold standard* dibanding metode konvensional seperti ekstraksi etanol atau hidrokarbon, karena meninggalkan residu pelarut, bersifat tunable (dapat diatur melalui tekanan dan suhu), dan memenuhi standar farmasi seperti USP ⟨467⟩ dan European Pharmacopoeia. Namun, optimasi proses scCO₂ secara eksperimental sangat mahal dan time-consuming, sehingga Computational Fluid Dynamics (CFD) dengan pendekatan *axisymmetric flow model* yang dikembangkan oleh Obchoei & Limtrakarn (2024) menjadi pendekatan strategis.

Urgensi pemodelan ini terletak pada sifat fisis proses: ekstraktor scCO₂ berbentuk tabung silinder dengan *packed bed* biomassa kanabis, di mana gradien konsentrasi, tekanan, dan suhu terjadi secara simultan sepanjang sumbu aksial dan radial. Tanpa model yang valid, insinyur tidak dapat memprediksi *yield* cannabinoid (THC, CBD, CBG), profil kejenuhan pelarut, maupun titik optimal konsumsi CO₂ per kilogram biomassa. Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa simplifikasi 2D aksisimetrik sangat relevan karena geometri ekstraktor inherently *axisymmetric*, sehingga computational cost dapat ditekan ~70% dibanding simulasi 3D penuh tanpa kehilangan fidelitas fisika yang signifikan.

Studi pendukung Toledo & del Valle (2023) di *The Journal of Supercritical Fluids* melengkapi perspektif ini dengan mengkuantifikasi efek perpindahan panas pada tiga tahap proses: *pressurization*, *extraction*, dan *depressurization*. Mereka menunjukkan bahwa fluktuasi suhu akibat efek Joule-Thomson dan perpindahan panas transient dapat mengubah densitas CO₂ hingga 15-20%, yang secara langsung memengaruhi kapasitas solvasi dan *extraction kinetics*. Kedua paper ini memberikan kerangka komprehensif untuk memahami dan merekayasa proses scCO₂ secara kuantitatif, yang krusial bagi *process engineer*, *plant designer*, dan *quality assurance manager* di fasilitas ekstraksi.

## 2. Landasan Teori & Formulasi Matematis

Model aksisimetrik yang dikembangkan Obchoei & Limtrakarn (2024) diselesaikan dalam koordinat silinder $(r, z)$ dengan asumsi aliran tunak (*steady-state*), kompresibel, dan isothermal pada tahap ekstraksi. Persamaan kontinuitas untuk fase fluida (scCO₂) dalam koordinat silinder adalah:

$$\frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0 \quad (1)$$

di mana $\rho$ adalah densitas scCO₂, $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial. Persamaan momentum (Navier-Stokes) dalam arah aksial, dengan mengabaikan komponen azimutal dan menyertakan gaya tekan serta viskositas efektif *packed bed*:

$$\rho\left(u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{K}u_z \quad (2)$$

di mana $K$ adalah permeabilitas *Darcy* medium berpori yang didekati dengan persamaan Kozeny-Carman:

$$K = \frac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2} \quad (3)$$

dengan $d_p$ diameter partikel biomassa dan $\varepsilon$ porositas bed. Penurunan tekanan di sepanjang *packed