# 1946 — Pemodelan Aliran Aksisimetrik Ekstraksi Minyak Kanabis dengan Fluida Superkritikal CO₂: Integrasi Model Perpindahan Panas dan Massa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitokannabinoid global mengalami transformasi signifikan sejak dekade terakhir, dipicu oleh deregulasi regulasi kanabis medis di berbagai yurisdiksi (Kanada, Jerman, Thailand, beberapa negara bagian Amerika Serikat, dan Australia). Permintaan akan ekstrak kanabis berkualitas farmasi—kaya akan cannabinoid seperti Δ⁹-tetrahydrocannabinol (THC), cannabidiol (CBD), cannabinol (CBN), dan terpena—telah mendorong adopsi teknologi ekstraksi berbasis fluida superkritikal (Supercritical Fluid Extraction, SFE) dengan CO₂ (Sc-CO₂) sebagai替代 pelarut organik volatil seperti heksana, etanol, dan butana yang memiliki profil toksikologis dan lingkungan yang kurang menguntungkan (Obchoei & Limtrakarn, 2024, DOI: 10.1016/j.ijft.2024.100682).

Urgensi operasional dan ekonomi dari adopsi Sc-CO₂ bersifat tiga dimensi. Pertama, dari perspektif *food-grade safety* dan kepatuhan farmasi (GMP/GLP), residu pelarut organik pada ekstrak harus memenuhi batas deteksi instrumental (sering <5 ppm untuk heksana sesuai ICH Q3C). Kedua, selektivitas proses dapat dimanipulasi melalui tuning parameter operasi—tekanan (umumnya 100–350 bar) dan suhu (308–353 K)—untuk memisahkan fraksi cannabinoid dari matriks lipid dan klorofil. Ketiga, pasar global *cannabis-derived pharmaceuticals* diproyeksikan menembus USD 45–60 miliar pada 2030, dengan margin EBITDA perusahaan ekstraktor antara 35–55%, jauh di atas rata-rata industri kimia khusus (del Valle & Toledo, 2023, DOI: 10.1016/j.supflu.2023.106046).

Namun, desain dan scale-up reaktor SFE masih menghadapi tantangan fundamental. Mayoritas instalasi industri saat ini menggunakan model lumped-parameter 0D atau 1D pseudo-steady yang mengabaikan gradien radial dalam bed ekstraksi, padahal geometri reaktor berbentuk silinder dengan aspect ratio tipikal L/D ≈ 2–4 menimbulkan profil aliran dan konsentrasi yang sangat non-uniform. Obchoei & Limtrakarn (2024) menjawab gap ini dengan mengembangkan model *axisymmetric* dua dimensi yang diselesaikan secara komputasional, sementara Toledo & del Valle (2023) melengkapi dengan model perpindahan panas transien yang valid selama tahap *pressurization*, *extraction steady-state*, dan *depressurization*—kondisi yang secara langsung mempengaruhi yield, kualitas ekstrak, dan konsumsi energi spesifik (kWh/kg ekstrak). Kedua paper ini menjadi basis rasional untuk engineering design reaktor SFE-CO₂ pada kapasitas pilot (5–50 L bed) hingga produksi (>500 L bed).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Sistem Koordinat Aksisimetrik dan Asumsi Dasar

Model yang dikembangkan Obchoei & Limtrakarn (2024) menggunakan sistem koordinat silindris $(r, z, \theta)$ dengan asumsi simetri aksial $\partial/\partial\theta = 0$, sehingga domain komputasi direduksi menjadi penampang 2D $(r, z)$. Asumsi-asumsi kunci meliputi:

1. Aliran CO₂ superkritikal dimodelkan sebagai fluida Newtonian kompresibel.
2. Partikel biomassa kanabis dianggap sebagai matriks berpori isotropik dengan porositas efektif $\varepsilon_b$ dan permeabilitas intrinsik $\kappa$.
3. Kesetimbangan fase mengikuti persamaan状态 Peng–Robinson untuk fase CO₂ dan model adsorpsi/desorpsi untuk solute (cannabinoid) di dalam partikel.
4. Perpindahan massa intra-partikel遵循 hukum Fick dengan difusivitas efektif $D_{eff}$.
5. Perpindahan panas di dinding reaktor mengikuti model konveksi-eksternal + konduksi-steady yang dikembangkan oleh Toledo & del Valle (2023).

### 2.2 Persamaan Konservasi Momentum (Navier–Stokes Aksisimetrik)

Untuk fluida Newtonian dalam koordinat silindris dengan simetri aksial, persamaan momentum radial dan aksial adalah:

$$\rho \left( \frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \mu \left[ \frac{\partial}{\partial r}\left( \frac{1}{r}\frac{\partial (r u_r)}{\partial r} \right) + \frac{\partial^2 u_r}{\partial z^2} \right] - \frac{\mu}{K} u_r$$

$$\rho \left( \frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial u_z}{\partial r} \right) + \frac{\partial^2 u_z}{\partial z^2} \right] - \rho g - \frac{\mu}{K} u_z$$

di mana $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial, $\rho$ densitas fluida, $\mu$ viskositas dinamis, $p$ tekanan, $g$ percepatan gravitasi, dan $K$ permeabilitas bed. Suku terakhir pada kedua persamaan adalah kontribusi gaya gesekan Darcy–Forchheimer di dalam medium berpori yang memperlakukan bed biomassa sebagai continuum berpori.

### 2.3 Persamaan Kontinuitas

Untuk fluida kompresibel:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

### 2.4 Persamaan Energi dengan Sumber Panas Kompresi dan Reaksi Desorpsi

Toledo & del Valle (2023, DOI: 10.1016/j.supflu.2023.106046) menekankan bahwa perpindahan panas selama tahap *pressurization* dan *depressurization* tidak dapat diabaikan karena gradien suhu 5–15 K yang dihasilkan oleh kompresi/ekspansi adiabatik dan perpindahan panas laten desorpsi solute. Persamaan energi transient:

$$\rho c_p \left( \frac{\partial T}{\partial t} + u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z} \right) = k_{eff} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial T}{\partial r} \right) + \frac{\partial^2 T}{\partial z^2} \right] + \dot{q}_{diss} + \dot{q}_{des}$$

di mana $\dot{q}_{diss}$ adalah laju disipasi viskos per satuan volume dan $\dot{q}_{des}$ adalah laju pelepasan panas akibat desorpsi cannabinoid dari matriks padat.

### 2.5 Model Perpindahan Massa: Pendekatan Dua-Film dan Difusi Intra-Partikel

Untuk laju pelepasan cannabinoid ke dalam CO₂, digunakan kombinasi model *external mass transfer* (koefisien $k_f$) dan *internal diffusion* dengan profile konsentrasi intra-partikel $C_s(r_p, t)$:

$$\frac{\partial C_s}{\partial t} = \frac{1}{r_p^2}\frac{\partial}{\partial r_p}\left( r_p^2 D_{eff} \frac{\partial C_s}{\partial r_p} \right)$$

dengan kondisi batas:

$$-D_{eff} \frac{\partial C_s}{\partial r_p}\bigg|_{r_p=R_p} = k_f (C^* - C_b)$$

di mana $C^*$ adalah konsentrasi kesetimbangan (tergantung $p$, $T$ melalui solubility data Chrastil-type) dan $C_b$ konsentrasi bulk dalam fase fluida.

### 2.6 Persamaan状态 Peng–Robinson untuk CO₂

Densitas CO₂ superkritikal dihitung dari:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a(T) = 0.45724 \frac{R^2 T_c^2}{P_c} \alpha(T)$, $b = 0.07780 \frac{RT_c}{P_c}$, dan $\alpha(T) = [1 + \kappa(1 - \sqrt{T/T_c})]^2$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model Obchoei & Limtrakarn (2024) dalam desain reaktor SFE mengikuti protokol SOP berikut:

**Tahap 1 — Preparasi Biomassa.** Bonggol kanabis dikeringkan hingga kadar air <10% wb (water activity $a_w < 0.6$), digiling hingga ukuran partikel $d_p$ 0.5–2.0 mm, dan disimpan pada $T$ 277 K dalam wadah vakum untuk mencegah degradasi cannabinoid.

**Tahap 2 — Pemuatan Reaktor (*Loading*).** Bed biomassa diisi secara gravimetrik dengan target densitas packing $\rho_b$ 350–500 kg/m³. Tinggi bed $H$ dan diameter dalam $D$ dipilih sedemikian rupa sehingga aspect ratio $H/D \in [2, 4]$ untuk mengoptimalkan residence time dan meminimalkan *channeling*.

**Tahap 3 — Pressurization (durasi 8–15 menit).** CO₂ dipompa dari kondisi cair (60 bar, 278 K) menuju tekanan operasi target (300 bar) menggunakan diaphragm pump atau piston pump. Laju pressurisasi dijaga pada 20–40 bar/menit untuk menghindari thermal shock dan mempertahankan gradien suhu dinding-dalam sesuai prediksi model Toledo & del Valle (2023).

**Tahap 4 — Static Soaking (opsional, 10–30 menit).** Jika yield optimal memerlukan solubilisasi awal, sistem didiamkan pada $P$, $T$ konstan dengan sirkulasi CO₂ internal.

**Tahap 5 — Dynamic Extraction (60–180 menit).** Aliran CO₂ superkritikal kontinu pada debit $Q_{CO_2}$ 2–8 kg/jam per liter volume bed. Rasio solvent-to-feed (S/F) dijaga pada 20–60 untuk ekstraksi komprehensif.

**Tahap 6 — Depressurization dan Separasi (15–30 menit).** CO₂ yang membawa solute diekspansikan bertahap melalui *cyclonic separator* (30–60 bar, 313 K) dan *second-stage separator* (15–25 bar, 298 K) untuk memanen ekstrak.

**Tahap 7 — Pembersihan dan Validasi CIP (Clean-In-Place).** Sistem di-flush dengan CO₂ murni 3–5 bed-volumes, kemudian didepressurisasi total.

Diagram alir proses mengikuti arsitektur modular: (1) Subsistem refrigerasi & pompa CO₂; (2) Subsistem pemanas preheater; (3) Reaktor aksisimetrik dengan jaket pemanas/pendingin; (4) Subsistem separator multi-stage; (5) Subsistem kontrol PID terintegrasi untuk $P$, $T$, $Q$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain dan Parameter Input

Ambil kasus pilot-plant dengan spesifikasi realistis:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Diameter dalam reaktor, $D$ | 0.10 | m |
| Tinggi bed, $H$ | 0.30 | m |
| Volume bed, $V_b$ | $2.36 \times 10^{-3}$ | m³ |
| Porositas bed, $\varepsilon_b$ | 0.42 | – |
| Densitas packing, $\rho_b$ | 420 | kg/m³ |
| Diameter partikel, $d_p$ | $1.2 \times 10^{-3}$ | m |
| Tekanan operasi, $P$ | 300 | bar |
| Suhu operasi, $T$ | 328 | K |
| Debit CO