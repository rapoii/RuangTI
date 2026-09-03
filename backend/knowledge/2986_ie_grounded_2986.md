# 2986 — Pemodelan Aliran Aksisimetrik Ekstraksi Minyak Kanabis dengan Proses Supercritical Fluid Extraction (SFE) CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitokimia global mengalami transformasi paradigmatik sejak diterapkannya teknik *Supercritical Fluid Extraction* (SFE) menggunakan karbon dioksida (CO₂) sebagai pelarut utama. Menurut Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids*, proses SFE-CO₂ memberikan keunggulan signifikan dibandingkan metode ekstraksi konvensional berbasis pelarut organik seperti heksana, etanol, atau kloroform, antara lain: (a) sifat *Generally Recognized as Safe* (GRAS) dari CO₂ yang meninggalkan residu toksik nol; (b) selektivitas tinggi melalui tuning tekanan dan temperatur; serta (c) kemampuan daur ulang pelarut hingga 95% (Obchoei & Limtrakarn, 2024). Dalam konteks minyak kanabis (cannabis oil), aplikasi ini menjadi sangat relevan karena regulasi farmasi modern mensyaratkan kemurnian cannabinoid (THC, CBD, CBG) di atas 95% untuk produk medis dan nutraceutical, yang sulit dicapai dengan metode konvensional.

Urgensi ekonomis industri ini tecermin dari valuasi pasar global cannabis legal yang mencapai USD 28+ miliar pada 2024, dengan CAGR (Compound Annual Growth Rate) melebihi 20% (Obchoei & Limtrakarn, 2024). Dari perspektif *Industrial Engineering*, optimalisasi unit operasi SFE sangat bergantung pada pemahaman mendalam terhadap fenomena perpindahan momentum, massa, dan panas secara simultan dalam vessel ekstraksi. Asumsi aliran aksisimetrik menjadi pendekatan yang elegan karena geometri vessel berbentuk silinder konsentris, sehingga memungkinkan reduksi computational domain hingga 2D tanpa kehilangan fidelitas fisis (Obchoei & Limtrakarn, 2024).

Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* menekankan bahwa tahap *pressurization*, *extraction*, dan *depressurization* masing-masing memiliki karakteristik termodinamika unik yang mempengaruhi yield dan kualitas produk. Akumulasi panas laten selama depresurisasi dapat menurunkan solubilitas solute secara drastis dan berpotensi menurunkan recovery rate hingga 15-30% bila tidak dikontrol (Toledo & del Valle, 2023). Oleh karena itu, integrasi model perpindahan panas dengan model aliran aksisimetrik menjadi kebutuhan teknis yang tidak dapat dihindari.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan aliran aksisimetrik dalam vessel SFE-CO₂ memerlukan sistem persamaan diferensial parsial (PDP) yang merepresentasikan konservasi momentum, massa, dan panas dalam koordinat silindris $(r, z)$. Persamaan kontinuitas untuk fluida dengan rapat massa $\rho$ dan komponen kecepatan aksial $v_z$ serta radial $v_r$ adalah:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r\rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \quad (1)$$

Untuk fluida Newtonian, persamaan momentum Navier-Stokes dalam bentuk aksisimetrik dan incompressible adalah:

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z \quad (2)$$

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (rv_r)}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2}\right] \quad (3)$$

Sifat termodinamika CO₂ superkritis dikalkulasi melalui persamaan keadaan Peng-Robinson yang dimodifikasi untuk mendekati perilaku real gas:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)} \quad (4)$$

dengan parameter $a$, $b$, dan fungsi $\alpha(T)$ yang bergantung pada temperatur kritis ($T_c = 304.13$ K, $P_c = 7.377$ MPa) dan faktor acentrik $\omega = 0.225$ (Obchoei & Limtrakarn, 2024).

Persamaan konveksi-difusi untuk konsentrasi solute $C$ dengan koefisien difusi efektif $D_{eff}$ adalah:

$$\frac{\partial C}{\partial t} + v_r\frac{\partial C}{\partial r} + v_z\frac{\partial C}{\partial z} = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - k_s(C - C^*) \quad (5)$$

di mana $k_s$ adalah koefisien transfer massa interfacial dan $C^*$ adalah konsentrasi kesetimbangan. Perpindahan panas secara konveksi-konduksi mengikuti:

$$\rho c_p\left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = k\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + \dot{q}_{rxn} \quad (6)$$

Persamaan energi termodinamika untuk keseluruhan proses mengacu pada formulasi Toledo dan del Valle (2023) yang mengakomodasi entalpi desorpsi, panas sensible CO₂, dan panas laten selama depresurisasi isenthalpic.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri pemodelan SFE-CO₂ mengikuti SOP terstruktur yang mengintegrasikan hasil CFD dengan kontrol proses aktual. Tahapan utamanya:

**Tahap I — Preparasi dan Karakterisasi Feedstock.** Bongol kanabis dikeringkan hingga moisture content <10%, digiling menjadi partikel $d_p$ antara 0.3-1.0 mm, lalu dikemas dalam vessel ekstraksi dengan porositas $\varepsilon$ ≈ 0.35-0.45. Sampel diambil untuk pengukuran cannabinoid baseline via HPLC (High-Performance Liquid Chromatography).

**Tahap II — Pressurization.** Vessel dipanaskan hingga $T = 313-333$ K, kemudian CO₂ dipompa secara gradual hingga tekanan operasi $P = 15-30$ MPa dengan laju ramp 1-2 MPa/menit untuk menghindari thermal shock dan channeling (Toledo & del Valle, 2023).

**Tahap III — Extraction Steady-State.** CO₂ superkritis dialirkan dengan *Superficial Velocity* (SV) antara $1 \times 10^{-3}$ hingga $5 \times 10^{-3}$ m/s. Rasio solvent-to