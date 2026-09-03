# 2266 — Model Aliran Aksisimetrik untuk Ekstraksi Minyak Kanabis dengan Proses Ekstraksi Fluida Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri kanabis medis dan hemp industri global telah melampaui valuasi USD 30 miliar pada 2023 dan diproyeksikan menembus USD 100 miliar pada 2030, didorong oleh legalisasi progresif di lebih dari 50 negara serta permintaan akan produk *cannabidiol* (CBD), *tetrahydrocannabinol* (THC), dan terpenoid bernilai farmasi tinggi. Dalam konteks ini, pemilihan teknologi ekstraksi menjadi keputusan rekayasa kritis yang menentukan yield, kemurnian, profil cannabinoid, dan biaya operasional *Good Manufacturing Practice* (GMP). Di antara empat metode utama—ekstraksi pelarut organik (etanol, heksana), steam distillation, *cold-pressing*, dan **supercritical fluid extraction (SFE) dengan CO₂**—SFE-CO₂ mendominasi pangsa pasar premium karena kemampuannya menghindari residu pelarut toksik, beroperasi pada suhu rendah yang melindungi termolabil cannabinoid, dan menawarkan selektivitas fraksionasi melalui variasi tekanan–temperatur.

Thanachai Obchoei dan Wiroj Limtrakarn (2024) dalam *International Journal of Thermofluids* (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) menyoroti bahwa pemahaman kuantitatif terhadap perilaku fluida di dalam *extractor vessel*—yang secara geometri berbentuk silinder dan secara fisik dapat direduksi menjadi simetri aksial—masih menjadi *knowledge gap* yang signifikan. Mayoritas praktisi industri masih menggunakan model 0D atau 1D yang mengabaikan gradien radial suhu, tekanan, dan konsentrasi, padahal geometri cylindrical bed menyebabkan terbentuknya *channeling* dan *bypass flow* yang menurunkan efisiensi ekstraksi 10–25%. Sementara itu, Felipe R. Toledo dan José M. del Valle (2023) dalam *The Journal of Supercritical Fluids* (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) membuktikan melalui model *heat transfer* tervalidasi bahwa tahap *pressurization*, *extraction*, dan *depressurization* memiliki dinamika termal yang asimetris dan waktu tunak yang berbeda—temuan yang langsung berimplikasi pada protokol operasi batch.

Urgensi ekonomis dari rekayasa proses ini makin nyata ketika kita menghitung bahwa setiap 1% peningkatan *recovery yield* pada extractor berkapasitas 100 kg biomassa/hari bernilai sekitar USD 50.000–150.000/tahun pada harga jual minyak kanabis full-spectrum USD 2.000–5.000/kg. Oleh sebab itu, model aliran aksisimetrik yang dikombinasikan dengan karakterisasi perpindahan panas menjadi tulang punggung *process intensification* dan *digital twin* pada fasilitas SFE modern. Dokumen modul ini menyusun secara komprehensif landasan matematis, prosedur operasional, studi kasus kuantitatif, dan peta jalan riset lanjutan berdasarkan kedua literatur pilar tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Asumsi Penyederhanaan

Extractor vessel SFE-CO₂ lazim berupa bejana tekan silinder vertikal berdiameter dalam $D_i = 0{,}1$–$0{,}5$ m dan tinggi $L = 1$–$5$ m, diisi biomassa kanabis giling (*ground decarboxylated biomass*) dengan porositas $\varepsilon$ dan diameter partikel efektif $d_p$. Karena seluruh geometri dan kondisi batas memiliki simetri terhadap sumbu $z$, persamaan transpor direduksi menjadi 2D $(r, z)$. Asumsi standar yang diadopsi Obchoei & Limtrakarn (2024):

1. Aliran CO₂ tunak, inkompresibel secara lokal, viskositas dinamis $\mu$ dan densitas $\rho$ bergantung pada $P$ dan $T$.
2. Fase padat (biomassa) bersifat quasi-statis (tidak bergerak).
3. Kesetimbangan termal antara fasa padat-cair di setiap *control volume* (asumsi *local thermal equilibrium*, LTE).
4. Reaksi kinetik degradasi cannabinoid diabaikan pada operasi $T < 60°$C.

### 2.2 Persamaan Kontinuitas (Aksisimetrik)

Untuk koordinat silinder dengan simetri aksial, persamaan kontinuitas fasa fluida:

$$\frac{1}{r}\frac{\partial}{\partial r}(r \rho v_r) + \frac{\partial}{\partial z}(\rho v_z) = 0 \tag{1}$$

dengan $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial. Untuk gas CO₂ superkritikal pada $P > 7{,}38$ MPa dan $T > 31{,}1°$C, kerapatan $\rho$ dihitung melalui persamaan keadaan **Peng–Robinson**:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m^2 + 2bV_m - b^2} \tag{2}$$

### 2.3 Persamaan Momentum (Navier–Stokes Aksisimetrik)

Mengikuti formulasi Obchoei & Limtrakarn (2024) yang mengadopsi persamaan Brinkman–Forchheimer untuk media berpori:

$$\rho\left(v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z}\right) = -\frac{\partial P}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] - \frac{\mu}{K}v_r - \frac{\rho F_\varepsilon}{\sqrt{K}}|v_r| \tag{3}$$

$$\rho\left(v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu}{K}v_z - \frac{\rho F_\varepsilon}{\sqrt{K}}|v_z| + \rho g \tag{4}$$

dengan $K$ permeabilitas bed (m²) dan $F_\varepsilon$ koefisien inersia Forchheimer.

### 2.4 Persamaan Energi (Heat Transfer Konjugasi)

Toledo & del Valle (2023) menekankan bahwa ketiga tahap proses—pressurization, extraction, depressurization—memerlukan persamaan energi terpisah dengan *source term* kompresibel:

$$\rho c_p\left(v_r \frac{\partial T}{\partial r} + v_z \frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \beta T \frac{D P}{Dt} \tag{5}$$

dengan $\beta$ koefisien ekspansi termal, $k_{eff} = \varepsilon k_f + (1-\varepsilon)k_s$ konduktivitas efektif, dan suku $\beta T \frac{DP}{Dt}$ merepresentasikan panas kompresi/ekspansi yang dominan pada tahap transien.

### 2.5 Persamaan Transfer Massa (Cannabinoid ke CO₂)

Konsentrasi cannabinoid dalam fase superkritikal $C$ dimodelkan dengan persamaan konveksi-difusi:

$$\varepsilon \frac{\partial C}{\partial t} + v_z \frac{\partial C}{\partial z} = D_{ax}\frac{\partial^2 C}{\partial z^2} + \frac{1}{r}\frac{\partial}{\partial r}\left(r D_{eff}\frac{\partial C}{\partial r}\right) - (1-\varepsilon)\rho_s \frac{\partial q}{\partial t} \tag{6}$$

dengan $D_{ax}$ koefisien dispersi aksial, $q$ konsentrasi cannabinoid pada matriks padat yang terdegradasi mengikuti kinetika pseudo-first-order:

$$\frac{\partial q}{\partial t} = -k_f\left(q - \frac{C}{K_H}\right) \tag{7}$$

di mana $K_H$ adalah konstanta kesetimbangan Henry dan $k_f$ koefisien transfer massa eksternal.

### 2.6 Kondisi Batas

- **Inlet** ($z = 0$): $v_z = v_{in}$, $T = T_{in}$, $C = 0$
- **Outlet** ($z = L$): $\frac{\partial v_z}{\partial z} = 0$, $\frac{\partial T}{\partial z} = 0$, $\frac{\partial C}{\partial z} = 0$
- **Dinding** ($r = R_i$): $v_r = 0$, $-k_{eff}\frac{\partial T}{\partial r} = h_w(T - T_{ext})$
- **Sumbu** ($r = 0$): $\frac{\partial v_z}{\partial r} = 0$, $\frac{\partial T}{\partial r} = 0$, $\frac{\partial C}{\partial r} = 0$

Sistem PDE di atas diselesaikan dengan metode *finite volume* pada grid 80 × 400 (radial × aksial) menggunakan skema SIMPLE untuk kopling tekanan–kecepatan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP 7-tahap yang menjadi standar de facto fasilitas SFE-CO₂ tersertifikasi GMP/ISO 22000.

**Tahap 1 – Persiapan Biomassa.** Kanabis kering dikeringkan hingga *moisture content* $w < 12\%$ lalu digiling sampai ukuran partikel 0,5–2,0 mm. Decarboxilasi termal dilakukan pada $T = 110$–$120°$C selama 30–45 menit untuk mengkonversi CBDA → CBD dan THCA → THC.

**Tahap 2 – Pengisian Extractor (Loading).** Vessel diisi biomassa secara gravimetrik dengan target bed density $\rho_b = 400$–$550$ kg/m³, lalu ditutup dan *leak-tested* dengan helium pada $P = 1{,}5 P_{op}$.

**Tahap 3 – Pressurisasi (Ramp-Up).** Sesuai Toledo & del Valle (2023), laju pressurisasi dikontrol pada $\dot{P} = 2$–$5$ MPa/menit untuk mencegah *thermal shock* dan gradien termal radial yang dapat mendegradasi cannabinoid. Sistem pendingin jaket diaktifkan pada $T_{jacket} = 5$–$10°$C.

**Tahap 4 – Pencapaian Kondisi Tunak (Conditioning).** Suhu dinaikkan ke $T_{op} = 40$–$60°$C dan tekanan ke $P_{op} = 20$–$35$ MPa sambil CO₂ dipompakan resirkulasi.

**Tahap 5 – Ekstraksi Dinamis (Dynamic Extraction).** CO₂ superkritikal dialirkan dengan laju $Q = 5$–$50$ kg/jam tergantung kapasitas vessel. Perbandingan *solvent-to-feed* (S/F) dipertahankan pada 25–60 untuk mencapai target yield.

**Tahap 6 – Separasi (Recovery).** Larutan CO₂ + cannabinoid memasuki *separator* dengan menurunkan tekanan ke 5–6 MPa, menurunkan kelarutan hingga cannabinoid mengendap. CO₂ diregenerasi, dikompresi, dan didaur ulang.

**Tahap 7 – Depressurisasi dan Unloading.** Tekanan diturunkan secara gradual mengikuti kurva aman dari Toledo & del Valle (