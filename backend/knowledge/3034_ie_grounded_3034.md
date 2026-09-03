# 3034 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric Flow Model of Cannabis Oil Extraction Using Supercritical Fluid CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis (*Cannabis sativa*) menggunakan karbondioksida superkritis (sc‑CO₂) telah menjadi proses andalan dalam industri fitofarmaka, nutrasetika, dan produk kesehatan berbasis *cannabidiol* (CBD) maupun *tetrahydrocannabinol* (THC) sejak diterapkannya regulasi legalisasi medis dan rekreasional di berbagai yurisdiksi (Kanada, Uruguay, beberapa negara bagian AS, Thailand, dan Jerman). Dibandingkan ekstraksi pelarut organik (heksana, etanol, butana), sc‑CO₂ menawarkan tiga keunggulan struktural: (1) sifat *tunable selectivity* melalui manipulasi tekanan (8–35 MPa) dan suhu (308–353 K); (2) kemampuan meninggalkan residu pelarut (*Generally Recognized as Safe*/GRAS); dan (3) profil termal rendah yang melindungi termolabil cannabinoid (Obchoei & Limtrakarn, 2024; DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Urgensi ekonominya signifikan: menurut proyeksi *Grand View Research* (2024), pasar global ekstrak kanabis akan mencapai USD 23,7 miliar pada 2030 dengan CAGR 16,9%. Dalam konteks ini, *yield* ekstraksi, selektivitas cannabinoid, dan konsumsi energi per kilogram biomassa menjadi KPI proses yang menentukan margin operasional. Obchoei dan Limtrakarn (2024) menyoroti bahwa hampir 60–70% biaya operasional ekstraksi sc‑CO₂ berasal dari tahap kompresi dan re‑kompresi CO₂, sehingga *bottleneck* perpindahan massa internal pada padatan berpori (ground cannabis) menjadi krusial. Sementara itu, Toledo dan del Valle (2023; DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) menekankan bahwa hampir semua model ekstraksi sc‑CO₂ yang ada mengasumsikan proses *isothermal*—padahal secara empiris, tahap *pressurization* dan *depressurization* menghasilkan gradien termal yang menurunkan *yield* aktual hingga 15–20% dibanding prediksi model isotermal.

Permasalahan industri yang dijawab kedua makalah ini bersifat nyata: bagaimana memprediksi distribusi konsentrasi minyak di dalam *extractor vessel* yang secara geometris *axisymmetric* (tabung silinder vertikal), dengan menggabungkan dinamika fluida, perpindahan massa, dan perpindahan panas secara simultan. Jawaban atas pertanyaan ini memungkinkan optimalisasi laju alir CO₂, pemilihan ukuran partikel biomassa, dan desain *jacket heating* yang lebih presisi—semuanya merupakan keputusan *Industrial Engineering* tingkat sistem.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Geometri dan Asumsi Model Aksisimetrik

Model yang dikembangkan Obchoei dan Limtrakarn (2024) menggunakan geometri 2D aksisimetrik dalam koordinat silinder $(r, z)$, dengan sumbu $z$ sebagai aksis vessel. Domain komputasional hanya mencakup separuh penampang radial karena sifat *axisymmetric*—memanfaatkan redundansi sudut $\theta$ sehingga *governing equations* diselesaikan hanya pada bidang $(r, z)$.

Asumsi utama:
- Aliran sc‑CO₂ adalah *steady-state*, *compressible*, dan *Newtonian*.
- Fase padatan (*ground cannabis*) adalah medium berpori isotropik dengan porositas $\varepsilon_p$ dan permeabilitas $\kappa$.
- Kesetimbangan termodinamika lokal antara fase fluida dan padatan mengikuti model kelarutan Chrastil yang dimodifikasi.
- Difusi intra‑partikel dijelaskan oleh hukum Fick efektif.

### 2.2. Persamaan Kontinuitas dan Momentum (Navier–Stokes berpori)

Persamaan kontinuitas untuk fase fluida pada medium berpori:

$$\frac{\partial}{\partial z}(\rho_f u_z) + \frac{1}{r}\frac{\partial}{\partial r}(r \rho_f u_r) = 0$$

dengan $\rho_f$ densitas sc‑CO₂ (kg/m³), $u_z$ dan $u_r$ komponen kecepatan aksial dan radial (m/s).

Persamaan momentum dalam formulasi Darcy–Forchheimer untuk menangkap inersia pada Reynolds pori $\mathrm{Re}_p > 1$:

$$\frac{\rho_f}{\varepsilon_p}\left(u_z\frac{\partial u_z}{\partial z} + u_r\frac{\partial u_z}{\partial r}\right) = -\frac{\partial p}{\partial z} + \mu_{mix}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu_{mix}}{\kappa}u_z - \frac{1.75}{\sqrt{150\,\varepsilon_p^3}}\frac{\rho_f}{\sqrt{\kappa}}|u|u_z - \rho_f g$$

dengan $\mu_{mix}$ viskositas campuran sc‑CO₂+minyak (Pa·s), $\kappa$ permeabilitas (m²), dan suku Darcy–Forchheimer ketiga menangkap kehilangan energi akibat inersia.

### 2.3. Persamaan Perpindahan Massa (Specie Transport)

Untuk fraksi massa minyak $Y_m$ dalam fase fluida sc‑CO₂:

$$\rho_f u_z \frac{\partial Y_m}{\partial z} + \rho_f u_r \frac{\partial Y_m}{\partial r} = \frac{1}{r}\frac{\partial}{\partial r}\left(r\,\rho_f\,D_{eff}\frac{\partial Y_m}{\partial r}\right) + \frac{\partial}{\partial z}\left(\rho_f D_{eff}\frac{\partial Y_m}{\partial z}\right) + \dot{m}_s$$

dengan $D_{eff}$ koefisien difusi efektif binner fluida–padatan (m²/s), dan $\dot{m}_s$ adalah laju pelarutan sumber dari matriks padat ke fase fluida yang mengikuti pendekatan *Linear Driving Force* (LDF):

$$\dot{m}_s = k_f a_p \rho_f (Y^* - Y_m)$$

di mana $k_f$ koefisien transfer massa eksternal (m/s), $a_p$ luas spesifik partikel (m⁻¹), dan $Y^*$ adalah fraksi massa minyak pada kondisi kesetimbangan yang diberikan oleh model kelarutan Chrastil:

$$Y^* = \rho_f^{n} \exp\!\left(\frac{a}{T} + b\right)$$

dengan parameter empiris $a, b, n$ yang biasa di-*fit* dari data eksperimen. Untuk kanabis, $n \approx 1{,}62$, $a \approx -4250\,\mathrm{K}$, dan $b \approx -8{,}55$ (nilai tipikal dari Obchoei & Limtrakarn, 2024).

### 2.4. Persamaan Energi dan Perpindahan Panas

Toledo dan del Valle (2023) mengembangkan persamaan energi coupled untuk tiga tahapan proses:

$$\rho_{mix} c_{p,mix}\left(u_z\frac{\partial T}{\partial z} + u_r\frac{\partial T}{\partial r}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r\,k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{rxn} + h_{wall}(T_{jacket} - T)$$

dengan $k_{eff}$ konduktivitas efektif efektif dari medium berpori + fluida, dan $\dot{q}_{rxn}$ adalah sumber kalor eksotermik/endotermik pelarutan. Perpindahan panas dari *jacket* ke dinding extractor mengikuti korelasi Sieder–Tate:

$$\mathrm{Nu} = 0{,}027\,\mathrm{Re}_D^{0{,}8}\mathrm{Pr}^{0{,}33}\left(\frac{\mu_{bulk}}{\mu_{wall}}\right)^{0{,}14}$$

Toledo dan del Valle (2023) memvalidasi model ini terhadap data eksperimen pada ekstraktor 5 L dan menunjukkan RMSE suhu sebesar 1,7 K—sangat akurat untuk keperluan desain.

### 2.5. Persamaan Sifat Termodinamika (EOS Peng–Robinson)

Densitas sc‑CO₂ dihitung menggunakan persamaan keadaan Peng–Robinson:

$$P = \frac{RT}{V_m - b} - \frac{a\,\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

Parameter $a$, $b$, dan fungsi $\alpha(T)$ dengan parameter m Kohler–Knoche memberikan perilaku fase kritis yang diperlukan untuk kondisi operasi di sekitar $T_c = 304{,}13$ K dan $P_c = 7{,}38$ MPa.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model di atas mengikuti SOP terstruktur berikut:

### Tahap 1: Pra‑Proses Biomass (Standar GMP)
1. Pengeringan bunga kanabis hingga kadar air < 10% w.b. pada *tray dryer* 313 K selama 8–12 jam.
2. Penggilingan menggunakan *hammer mill* hingga ukuran partikel $d_p$ = 1,0–2,5 mm; distribusi disyaratkan $\sigma_{g} < 1{,}8$.
3. Pengisian *extractor basket* secara homogen untuk mencegah *channeling*.

### Tahap 2: Pressurization (Tahap Inisiaasi)
1. Tutup vessel, lakukan *leak test* pada 1,1× tekanan operasi dengan N₂.
2. Aktifkan *heater jacket* pada $T_{jacket} = 333$ K.
3. Buka katup inlet CO₂, kompresor menaikkan tekanan secara bertahap: 5 MPa → 15 MPa → 25 MPa dengan rate 2 MPa/menit untuk menghindari *thermal shock* pada dinding vessel.
4. Catat profil $T(t)$ dan $P(t)$—model Toledo–del Valle (2023) menunjukkan gradien termal sebesar 8–12 K pada tahap ini.

### Tahap 3: Extraction (Tahap Tunak)
1. Setelah tercapai kondisi operasi (313–333 K, 25–30 MPa), buka *recirculation pump* dengan laju alir $\dot{m}_{CO_2} = 5{-}15$ kg/jam per kg biomassa.
2. Jalankan selama $t_{ext} = 90{-}180$ menit sesuai target *yield*.
3. Sampling setiap 15 menit melalui *sample port* untuk monitoring profil $Y_m(z)$ vs waktu.
4. Implementasikan model aksisimetrik Obchoei–Limtrakarn (2024) sebagai *digital twin* real‑time: setiap data $P, T, \dot{m}$ dibandingkan dengan prediksi CFD; *deviation* > 5% memicu alarm.

### Tahap 4: Depressurization dan Recovery
1. Kurangi tekanan secara *gradient*: −1 MPa/menit.
2. Pemisah (*separator*) pada 5 MPa, 298 K untuk memisahkan minyak dari CO₂.
3. CO₂ direcycle ke *buffer tank* melalui *back‑pressure regulator*.

### Tahap 5: Quality Assurance
1. Analisis HPLC untuk profil cannabinoid (CBD, THC, CBG, CBN).
2. Uji *residual solvent* (harus < 5 ppm untuk CO₂ yang bukan pelarut, sesuai ICH Q3C).
3. Dokumentasi batch record sesuai 21 CFR Part 211 (AS) atau EU GMP Annex 11.

Arsitektur teknologi pendukung mencakup sistem SCADA dengan komunikasi OPC‑UA ke sensor $P$, $T$, $\dot{m}$, $\Delta P$ vessel, dan integrasi dengan *Manufacturing Execution System* (MES) untuk *batch genealogy*.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 4.1. Studi Kasus Kuantitatif: Ekstraktor 10 L

**Parameter input industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Panjang vessel $L$ | 0,40 | m |
| Radius dalam $R$ | 0,089 | m