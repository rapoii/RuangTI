# 2634 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanasi dengan Fluida Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process  
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)  
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri cannabis global mengalami ekspansi eksponensial sejak dekade terakhir, dengan valuasi pasar worldwide mencapai lebih dari USD 30 miliar pada 2024 dan proyeksi compound annual growth rate (CAGR) di kisaran 20-25% hingga 2030 (Obchoei & Limtrakarn, 2024). Pergeseran paradigma regulasi di berbagai yurisdiksi—dari *medical-only* menuju *adult-use* di beberapa negara bagian AS, Kanada, dan sebagian Uni Eropa—memunculkan permintaan akan proses ekstraksi yang tidak hanya efisien secara teknis, tetapi juga compliant terhadap *good manufacturing practice* (GMP) farmasetik. Ekstraksi dengan fluida superkritikal (SFE), khususnya menggunakan CO₂, muncul sebagai *gold standard* karena sifatnya yang GRAS (*Generally Recognized As Safe*), kemampuan selektivitas terhadap cannabinoid target (CBD, THC minor), serta kemampuan recycle pelarut mendekati 100% yang menjawab tekanan keberlanjutan industri.

Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa desain ekstraktor industri saat ini masih banyak mengandalkan aturan skala-up empiris (*scale-up by analogy*) yang berpotensi menimbulkan *dead zone*, channeling, dan *bypass* pada packed-bed. Hal ini menurunkan yield dan menciptakan heterogenitas produk—dua defect yang tidak dapat ditoleransi dalam rantai pasok farmasi. Sebagai respons, paper tersebut mengajukan model aliran aksisimetrik 2-D *axisymmetric* yang menangkap geometri silindris sebenarnya dari extraction vessel, sehingga engineer dapat memprediksi profil kecepatan, tekanan, dan konsentrasi solute secara spasial-resolved. Pendekatan ini melengkapi pekerjaan Toledo dan del Valle (2023, *J. Supercrit. Fluids*) yang secara eksplisit memodelkan efek perpindahan panas pada tiga stage kritis: *pressurization*, *extraction*, dan *depressurization*. Kedua paper ini, bila dikombinasikan, membentuk kerangka multiphysics yang lengkap untuk optimasi proses SFE-CO₂ cannabis pada skala pilot maupun komersial.

Urgensi ekonominya juga tidak kalah penting. Investasi satu unit ekstraktor SFE kapasitas 100 L untuk cannabis berkisar USD 250.000–500.000, dengan biaya operasional didominasi oleh energi kompresi CO₂ (sekitar 1-1,5 kWh per kg CO₂ yang diproses) dan原料 baku. Setiap peningkatan 1% pada *recovery yield* serta setiap pengurangan 5% pada siklus batch berpotensi memberikan margin signifikan. Oleh karena itu, kemampuan untuk memprediksi dan mengoptimalkan profil aliran dan termal melalui model matematis menjadi aset strategis bagi teknisi industri.

## 2. Landasan Teori & Formulasi Matematis

Model aksisimetrik yang dikembangkan oleh Obchoei dan Limtrakarn (2024) berangkat dari empat persamaan konservasi dalam koordinat silindris $(r, z)$ dengan asumsi steady-state untuk stage *extraction* dan unsteady untuk *pressurization/depressurization*.

**Persamaan Kontinuitas** (kontinuitas massa CO₂ dalam ruang antar-partikel):

$$\frac{\partial (\rho u_r)}{\partial r} + \frac{\rho u_r}{r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

dengan $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial, $\rho$ densitas CO₂ superkritikal yang sangat bergantung pada tekanan dan temperatur (Persamaan状态 Span–Wagner).

**Persamaan Momentum** dalam formulasi Navier–Stokes viskos untuk *packed bed*, dengan koreksi *porosity* $\varepsilon$ dan *permeability* $K$:

$$\rho \left( u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \mu_{eff} \left[ \frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2} \right] - \frac{\mu}{K} u_r$$

$$\rho \left( u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu_{eff} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2} \right] - \frac{\mu}{K} u_z - \beta |u| u_z$$

dengan $\beta = 1{,}75 (1-\varepsilon)/(\varepsilon^3 d_p)$ mengikuti korelasi Ergun (Obchoei & Limtrakarn, 2024).

**Persamaan Energi** mengadopsi formulasi Toledo dan del Valle (2023) yang memasukkan sumber panas *isostatic compression* dan *desorption solute*:

$$\rho c_p \left( u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z} \right) = \frac{1}{r}\frac{\partial}{\partial r}\left( r k_{eff} \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{eff} \frac{\partial T}{\partial z} \right) + \dot{q}_{comp} - \Delta H_{des} \cdot \dot{m}_{solute}$$

dengan $\dot{q}_{comp}$ laju panas dari kompresi CO₂ dan $\Delta H_{des}$ entalpi desorpsi cannabinoid dari matriks padat (±30-50 kJ/kg).

**Persamaan Species Transport** untuk konsentrasi solute dalam fase fluida $c$:

$$u_r \frac{\partial c}{\partial r} + u_z \frac{\partial c}{\partial z} = D_{ax} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial c}{\partial r}\right) + \frac{\partial^2 c}{\partial z^2} \right] + J(x, c)$$

Model *broken-and-intact cells