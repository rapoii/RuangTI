# 2954 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis Menggunakan Proses Ekstraksi Fluida Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol—khususnya ekstraksi minyak kanabis (*Cannabis sativa*) untuk kebutuhan farmasi, nutraceutical, dan kosmetik—telah mengalami transformasi teknologi signifikan sejak diterapkannya regulasi legalisasi di berbagai yurisdiksi. Metode konvensional berbasis pelarut organik (heksana, etanol, atau kloroform) menghadapi tantangan kritis dari sisi Keselamatan dan Kesehatan Kerja (K3), residu pelarut yang harus memenuhi standar *International Council for Harmonisation* (ICH Q3C), serta footprint lingkungan yang besar. Sebagai respons, industri global secara progresif mengadopsi **Ekstraksi Fluida Superkritikal (Supercritical Fluid Extraction/SFE)** dengan CO₂ sebagai pelarut utama—dikenal sebagai proses SC-CO₂.

Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa lebih dari 70% fasilitas ekstraksi kanabis kelas farmasi di Amerika Utara (terkonsentrasi di Colorado dan Ontario) telah mengadopsi teknologi SC-CO₂ karena tiga keunggulan struktural: (1) sifat *tunable selectivity* melalui manipulasi densitas CO₂ pada kondisi superkritikal, (2) tidak adanya toksik residu karena CO₂ meninggalkan produk sebagai gas pada depresurisasi, dan (3) sifat CO₂ yang GRAS (*Generally Recognized as Safe*) menurut FDA 21 CFR 184.1240. Namun, optimisasi proses ini memerlukan pemahaman mendalam terhadap fenomena transpor di dalam *extraction bed*, yang menjadi tantangan karena interaksi耦合 (coupled) antara dinamika fluida, perpindahan panas, dan perpindahan massa.

Urgensi ekonomis dan operasional menjadi semakin nyata ketika mempertimbangkan disparitas yield antara fasilitas skala pilot dan produksi massal. Tanpa model matematis yang representatif, *scale-up* menjadi proses trial-and-error yang mengonsumsi 18-24 bulan dan capital expenditure (CAPEX) hingga USD 2-5 juta per lini produksi. Oleh karena itu, pengembangan model aliran aksisimetrik 2D yang diajukan Obchoei dan Limtrakarn (2024) menjadi krusial karena memvalidasi secara numerik pola aliran radial-aksial dalam vessel silindris—fenomena yang tidak dapat diungkap oleh model 1D *plug flow* konvensional. Studi ini diperkuat oleh Toledo dan del Valle (2023) yang secara eksplisit memodelkan efek perpindahan panas pada tahap presssurisasi, ekstraksi, dan depresurisasi, membuktikan bahwa asumsi isotermalitas selama proses merupakan sumber kesalahan utama hingga 18% dalam prediksi yield aktual.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Keadaan (Equation of State) untuk CO₂ Superkritikal

Sifat termodinamika CO₂ pada kondisi superkritikal ($T > T_c = 304.13$ K, $P > P_c = 7.377$ MPa) dimodelkan menggunakan persamaan keadaan kubik **Peng-Robinson EOS**:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter komponen murni untuk CO₂: $a_c = 0.45724 \frac{R^2 T_c^2}{P_c}$ dan $b = 0.07780 \frac{RT_c}{P_c}$. Untuk campuran CO₂ + solut kanabinoid, diperlukan aturan pencampuran **van der Waals** dengan parameter interaksi biner $k_{ij}$.

### 2.2 Formulasi Aliran Aksisimetrik pada Media Berpori

Mengikuti kerangka Obchoei dan Limtrakarn (2024), sistem koordinat silindris $(r, z)$ digunakan dengan asumsi **axisymmetric flow** (tidak ada variasi dalam arah $\theta$). Persamaan kontinuitas untuk fluida superkritikal dalam *packed bed* dengan porositas $\varepsilon$:

$$\frac{\partial(\varepsilon \rho_f)}{\partial t} + \frac{1}{r}\frac{\partial(r \rho_f u_r)}{\partial r} + \frac{\partial(\rho_f u_z)}{\partial z} = 0$$

Persamaan momentum mencakup kontribusi viskositas, gradien tekanan, dan tahanan media berpori (model **Darcy-Forchheimer**):

$$\frac{\partial(\rho_f u_z)}{\partial t} + \nabla \cdot (\rho_f \vec{u} \vec{u}) = -\nabla P + \mu_{eff} \nabla^2 \vec{u} - \underbrace{\frac{\mu_f}{K} u_z}_{\text{viscous loss}} - \underbrace{\frac{\beta_F}{\sqrt{K}} \rho_f |u_z| u_z}_{\text{inertial loss}}$$

dengan permeabilitas intrinsik $K$ dan koefisien inersia $\beta_F$ yang dihitung dari korelasi **Ergun (1952)**:

$$K = \frac{d_p^2 \varepsilon^3}{150(1-\varepsilon)^2}, \quad \beta_F = \frac{1.75(1-\varepsilon)}{\varepsilon^3 d_p}$$

### 2.3 Model Perpindahan Massa Internal Partikel

Mekanisme ekstraksi dikendalikan oleh difusi solut dalam matriks padat kanabis mengikuti persamaan **Fickian unsteady diffusion** untuk geometri spherical:

$$\frac{\partial q_s}{\partial t} = \frac{1}{r_s^2}\frac{\partial}{\partial r_s}\left(D_s r_s^2 \frac{\partial q_s}{\partial r_s}\right)$$

dengan konsentrasi solut lokal $q_s(r_s, t)$, jari-jari partikel $r_s$, dan koefisien difusi efektif $D_s$. Kondisi batas permukaan mengikuti **model "shrinking core"** ketika fraksi solut di permukaan mencapai kesetimbangan dengan konsentrasi fluida:

$$q_s(r_s = R_p, t) = q^* = K_e \cdot C_f$$

### 2.4 Persamaan Energi dengan Sumber Kalor Kompresi

Berbeda dengan asumsi isotermal, Toledo dan del Valle (2023) membuktikan bahwa kontribusi termodinamika signifikan melalui **enthalpy of compression**. Persamaan energi untuk fase fluida:

$$\varepsilon \rho_f C_{p,f} \frac{\partial T}{\partial t} + \rho_f C_{p,f} \vec{u} \cdot \nabla T = \nabla \cdot (k_{eff} \nabla T) + \beta_T T \frac{\partial P}{\partial t}$$

dengan koefisien ekspansi termal $\beta_T$ yang merepresentasikan pemanasan Joule-Thomson selama kompresi cepat.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti protokol tiga tahap yang distandarisasi oleh **ASTM D7804** dan praktik referensi farmasi **EU GMP Annex 11**:

**Tahap I — Pressurization & Heat-up (15-30 menit):**
1. Pengisian biomassa kanabis ke dalam vessel dengan rasio packing factor $\rho_b/\rho_s \approx 0.35-0.40$.
2. Pemanasan awal jacket vessel ke temperatur target $T_{target} = 313$ K (40°C) menggunakan sirkulasi air termostat.
3. Pressurisasi CO₂ secara gradual dengan gradient $\Delta P/\Delta t \leq 5$ MPa/menit untuk menghindari shock termal dan gradien densitas.

**Tahap II — Extraction Static + Dynamic Cycle:**
- *Static phase*: CO₂ ditahan dalam vessel selama 30-60 menit untuk saturasi equilibria.
- *Dynamic phase*: Aliran CO₂ segar pada laju $\dot{m} = 10-25$ g/s dipertahankan dengan *back pressure regulator* (BPR) pada $P = 25-30$ MPa.

**Tahap III — Depressurization Cascade:**
Depresurisasi bertahap dari 25 MPa → 8 MPa → 5 MPa dengan intermediate separators untuk fraksinasi cannabinoid (THC, CBD, terpene) berdasarkan perbedaan kelarutan.

Diagram arsitektur proses mengikuti blok fungsional: **Compressor → Heater → Extraction Vessel → Expansion Valve → Separator 1 (fraksi berat) → Separator 2 (fraksi ringan) → CO₂ Recycle**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Parameter Desain Vessel Komersial
Asumsikan *extraction vessel* stainless steel 316L dengan spesifikasi standar fasilitas farmasi Skala Menengah di Ontario, Kanada (kapasitas batch 5 kg biomassa kanabis kering):

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Diameter internal ($D_v$) | 0.150 | m |
| Panjang bed ($L_b$) | 0.400 | m |
| Porositas bed ($\varepsilon$) | 0.38 | - |
| Diameter partikel rata-rata ($d_p$) | 0.0004 | m |
| Tekanan operasi ($P$) | 25 | MPa |
| Temperatur operasi ($T$) | 313 | K |
| Laju alir massa CO₂ ($\dot{m}$) | 18.5 | g/s |
| Densitas CO₂ superkritikal ($\rho_f$) | 871 | kg/m³ |
| Viskositas CO₂ ($\mu_f$) | 9.0 × 10⁻⁵ | Pa·s |

### Perhitungan Hidrodinamika Bed

**Langkah 1 — Kecepatan superficial fluida:**

Kecepatan superficial $u_s$ dihitung dari laju alir volumetrik:

$$Q = \frac{\dot{m}}{\rho_f} = \frac{0.0185 \text{ kg/s}}{871 \text{ kg/m}^3} = 2.124 \times 10^{-5} \text{ m}^3/\text{s}$$

Luas penampang vessel $A = \pi (0.075)^2 = 0.01767$ m², sehingga:

$$u_s = \frac{Q}{A} = \frac{2.124 \times 10^{-5}}{0.01767} = 1.202 \times 10^{-3} \text{ m/s}$$

**Langkah 2 — Reynolds number partikel untuk mendeteksi rezim aliran:**

$$Re_p = \frac{\rho_f u_s d_p}{\mu_f (1-\varepsilon)} = \frac{871 \times 1.202 \times 10^{-3} \times 4 \times 10^{-4}}{9.0 \times 10^{-5} \times 0.62} = 7.52$$

Karena $Re_p < 10$, rezim aliran adalah **laminar/viscous-dominated** dalam packed bed, sesuai dengan prediksi model aksisimetrik Obchoei dan Limtrakarn (2024).

**Langkah 3 — Perhitungan permeabilitas intrinsik dan koefisien Ergun:**

$$K = \frac{d_p^2 \varepsilon^3}{150(1-\varepsilon)^2} = \frac{(4 \times 10^{-4})^2 (0.38)^3}{150(0.62)^2} = 1.225 \times 10^{-10} \text{ m}^2$$

$$\beta_F = \frac{1.75(1-\varepsilon)}{\varepsilon^3 d_p} = \frac{1.75 \times 0.62}{(0.38)^3 \times 4 \times 10^{-4}} = 49{,}360 \text{ m}^{-1}$$

**Langkah 4 — Penurunan tekanan menurut persamaan Darcy-Forchheimer:**

$$\frac{\Delta P}{L_b} = \frac{\mu_f}{K} u_s + \beta_F \rho_f u_s^2$$

$$\frac{\Delta P}{L_b} = \frac{9.0 \times 10^{-5}}{1.225 \times 10^{-10}}(1.202 \times 10^{-3}) + 49{,}360 \times 871 \times (1.202 \times 10^{-3})^2$$

$$\frac{\Delta P}{L_b} = 883.6 + 62.7 =