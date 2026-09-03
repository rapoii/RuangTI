# 1706 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi kanabinoid (utamanya *cannabidiol*/CBD dan *tetrahydrocannabinol*/THC) telah mengalami transformasi teknologi yang signifikan sejak diterjibkannya regulasi legalisasi ganja medis dan industri hemp di berbagai yurisdiksi (Kanada, beberapa negara bagian AS, Uruguay, dan Thailand). Pasar global produk turunan kanabis diproyeksikan mencapai USD 102 miliar pada tahun 2030 dengan CAGR lebih dari 15%, sehingga menuntut proses ekstraksi yang tidak hanya efisien secara operasional tetapi juga memenuhi standar *Good Manufacturing Practice* (GMP) farmasi. Di antara berbagai metode ekstraksi (etanol, hidrokarbon, minyak pembawa), ekstraksi dengan fluida superkritis CO₂ (SCFE-CO₂) muncul sebagai standar emas industri farmasi karena sifatnya yang *Generally Recognized As Safe* (GRAS), tidak meninggalkan residu pelarut, selektivitas tinggi terhadap cannabinoid, dan kemampuan tuning melalui parameter tekanan serta suhu (Obchoei & Limtrakarn, 2024).

Namun demikian, desain optimal ekstraktor SCFE-CO₂ untuk biomassa kanabis masih menghadapi tantangan engineering yang substansial: (i) sifat fisik biomassa (heterogenitas ukuran partikel, kandungan air 5–12% wb, densitas ruahan rendah 120–180 kg/m³); (ii) perilaku transien termodinamika CO₂ saat *pressurization*, *steady-state extraction*, dan *depressurization*; serta (iii) interaksi antara profil aliran aksisimetrik dalam reaktor tubular dan kinetika pelarutan cannabinoid ke dalam fase superkritis. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* mengusulkan model aliran aksisimetrik 2-D untuk memprediksi profil kecepatan, tekanan, konsentrasi, dan suhu di dalam bejana ekstraktor secara coupled, sementara Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* memvalidasi model transfer panas multi-tahap yang menggabungkan efek kompresi adiabatik, *Joule-Thomson*, dan panas pelarutan.

Kedua kontribusi tersebut relevan bagi insinyur Teknik Industri karena memungkinkan transisi dari pendekatan desain empiris (*trial-and-error*) menjadi desain prediktif berbasis computational fluid dynamics (CFD) dan termodinamika proses, sehingga menurunkan *time-to-market*, biaya riset pengembangan (R&D), dan risiko kegagalan skala (*scale-up failure*). Modul 1706 ini menyajikan sintesis komprehensif atas kedua literatur tersebut untuk keperluan unit operasi Teknik Kimia Industri, desain reaktor, dan optimasi rantai pasok manufaktur ekstrak kanabinoid.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Sistem Koordinat Silinder

Bejana ekstraktor SCFE dimodelkan sebagai silinder vertikal berdiameter dalam $D_i$ dan tinggi unggun $L_b$. Sistem koordinat silinder $(r, z)$ dengan simetri rotasi terhadap sumbu $z$ (poros ekstraktor) menurunkan masalah 3-D menjadi 2-D aksisimetrik:

$$\frac{\partial}{\partial \theta} = 0, \quad u_\theta = 0$$

di mana $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial, sementara $u_\theta = 0$ mengeksploitasi simetri rotasional. Asumsi ini valid ketika distributor inlet dirancang homogen dan efek dinding (*wall effect*) minimal pada rasio $D_i/d_p > 20$ (Obchoei & Limtrakarn, 2024).

### 2.2 Persamaan Kontinuitas dan Momentum (Navier–Stokes dengan Ekstensi Brinkman)

Untuk fase fluida superkritis yang mengalir melalui unggun biomassa kanabis (media berpori), persamaan kontinuitas dan momentum dalam formulasi *volume average* (Brinkman-extended Darcy):

$$\frac{\partial \rho_f}{\partial t} + \frac{1}{r}\frac{\partial (\rho_f r u_r)}{\partial r}