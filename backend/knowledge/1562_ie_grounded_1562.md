# 1562 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritis: Integrasi Model CFD dan Termodinamika Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri fitokannabinoid global mengalami transformasi disruptif sejak diterapkannya kebijakan legalisasi kanabis medis dan rekreasional di berbagai yurisdiksi. Pasar minyak kanabis (cannabis oil) — yang kaya akan tetrahidrokanabinol (THC), kanabidiol (CBD), dan terpenoid bioaktif — diproyeksikan mencapai valuasi multi-miliar USD, dengan CAGR >20% (Grand View Research, 2023). Dalam konteks ini, **ekstraksi dengan fluida superkritis (Supercritical Fluid Extraction/SFE) berbasis CO₂** menjadi teknologi benchmark karena meninggalkan residu pelarut organik (n-heksana, etanol, atau etil asetat) yang bersifat toksik, sehingga memenuhi standar farmakope USP, EP, dan BP untuk produk Grade-Food dan Grade-Pharmaceutical.

Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* memperkenalkan **model aliran aksisimetrik (axisymmetric flow model)** untuk memprediksi kinerja ekstraksi CO₂ superkritis pada *packed bed* biomassa kanabis. Pendekatan ini mengatasi kelemahan pendekatan *lumped-parameter* 1-D yang lazim digunakan dalam desain komersial, dengan mempertahankan efisiensi komputasional melalui asumsi simetri silinder $\partial/\partial\theta = 0$. Studi ini menjawab kebutuhan industri akan **digital twin proses batch SFE** yang mampu memprediksi *yield*, profil konsentrasi cannabinoid spasial, dan *bottleneck* termal secara real-time.

Di sisi lain, Toledo serta del Valle (2023) di *The Journal of Supercritical Fluids* menyoroti bahwa **perpindahan panas transient** selama tahap *pressurization*, *extraction*, dan *depressurization* memiliki dampak dominan terhadap selektivitas dan kapasitas produksi. Efek Joule-Thomson selama depresurisasi cepat dapat mendinginkan fluida hingga di bawah suhu kritis (304,13 K), sehingga menurunkan densitas CO₂ dan *solvent power*-nya. Interaksi termal-flud ini menjadi krusial ketika skala operasi meningkat dari laboratorium (100 mL) ke industri (>200 L), di mana gradien radial suhu di dalam vessel dapat melebihi 10–15 K.

Relevansi industrial engineering dari integrasi kedua paper ini sangat kuat: **pengambilan keputusan terkait dimensi vessel (aspect ratio H/D), laju alir massa CO₂, set-point suhu jaket, dan durasi siklus batch** semuanya memerlukan model matematis yang coupled antara hidrodinamika porous medium, termodinamika superkritis, dan kinetika transfer massa. Tanpa model semacam ini, pabrik SFE kanabis beroperasi secara konservatif dengan *safety factor* berlebih, meningkatkan CAPEX dan OPEX per kg ekstrak secara signifikan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Asumsi Dasar

Vessel ekstraksi dimodelkan sebagai silinder dengan jari-jari internal $R$ dan tinggi $L$, berisi *packed bed* biomassa kanabis yang dihancurkan (*ground biomass*) dengan porositas $\varepsilon_b$. Asumsi aksisimetrik menyederhanakan domain 3-D menjadi domain 2-D $(r, z)$ dengan koordinat silinder:

$$x_1 = r\cos\theta,\quad x_2 = r\sin\theta,\quad x_3 = z$$

dengan seluruh variabel tak bergantung pada $\theta$, sehingga persamaan transport direduksi menjadi dua dimensi spasial.

### 2.2 Persamaan Kontinuitas dan Momentum (Darcy–Brinkman–Forchheimer)

Untuk aliran CO₂ superkritis dalam medium pori biomassa, Obchoei dan Limtrakarn (2024) menerapkan persamaan momentum **Darcy-Brinkman-Forchheimer** yang menggabungkan viskositas fluida, permeabilitas medium, dan inersia:

$$\frac{\rho_{CO_2}}{\varepsilon_b}\left(\frac{\partial \mathbf{u}}{\partial t} + \frac{1}{\varepsilon_b}(\mathbf{u}\cdot\nabla)\mathbf{u}\right) = -\nabla p + \mu_{CO_2}\nabla^2\mathbf{u} - \frac{\mu_{CO_2}}{K}\mathbf{u} - \frac{\rho_{CO_2}F_{c}}{\sqrt{K}}|\mathbf{u}|\mathbf{u}$$

di mana $\mathbf{u}$ adalah vektor kecepatan superficial (m/s), $K$ permeabilitas intrinsic bed (m²), $F_c$ konstanta Forchheimer, $\rho_{CO_2}$ densitas CO₂ superkritis (kg/m³), dan $\mu_{CO_2}$ viskositas dinamis (Pa·s). Persamaan kontinuitas:

$$\frac{\partial(\varepsilon_b \rho_{CO_2})}{\partial t} + \nabla \cdot (\rho_{CO_2}\mathbf{u}) = 0$$

### 2.3 Persamaan Energi Transient dengan Sumber Joule-Thomson

Berdasarkan kerangka Toledo dan del Valle (2023), persamaan energi untuk fase fluida dan padatan biomassa disusun dengan kopling dua arah:

$$\varepsilon_b \rho_{CO_2} c_{p,f}\left(\frac{\partial T_f}{\partial t} + \mathbf{u}\cdot\nabla T_f\right) = \nabla\cdot(k_{eff,f}\nabla T_f) + h_{sf}a_{sf}(T_s - T_f) + Q_{JT}$$

$$(1-\varepsilon_b)\rho_s c_{p,s}\frac{\partial T_s}{\partial t} = \nabla\cdot(k_{eff,s}\nabla T_s) - h_{sf}a_{sf}(T_s - T_f)$$

dengan $h_{sf}a_{sf}$ koefisien transfer panas volumetrik antarmuka solid-fluid (W/m³·K), $T_f$ dan $T_s$ suhu fluida dan padatan, dan $Q_{JT} = -\rho_{CO_2}c_{p,f}\mu_{JT}\frac{Dp}{Dt}$ adalah sumber panas Joule-Thomson dengan koefisien $\mu_{JT} \approx 1,1$ K/MPa untuk CO₂ pada kondisi operasi tipikal.

### 2.4 Kinetika Transfer Massa — Model Sovová Dua Kompartemen

Untuk ekstraksi cannabinoid, digunakan model *broken-intact cells* (Sovová, 1994; diaplikasikan oleh Obchoei & Limtrakarn):

$$\frac{\partial q}{\partial t} = -k_s a_s (q - q^*)$$

di mana $q$ konsentrasi solute dalam padatan (kg/kg solid), $q^*$ konsentrasi kesetimbangan yang terkait dengan konsentrasi fluida $c$ melalui relasi:

$$q^* = \frac{c \cdot \rho_{CO_2}}{K_D \cdot \rho_s (1-\varepsilon_b)}$$

dengan $K_D$ koefisien distribusi kesetimbangan (function of $P, T$). Persamaan konservasi species untuk CO₂+solut:

$$\varepsilon_b \frac{\partial c}{\partial t} + \mathbf{u}\cdot\nabla c = \nabla\cdot(D_{ax}\nabla c) + k_s a_s \rho_s (1-\varepsilon_b)(q - q^*)$$

### 2.5 Persamaan Keadaan CO₂ Superkritis

Densitas $\rho_{CO_2}$ dihitung melalui persamaan Span-Wagner (1996) dengan rentang operasi $T = 308$–$343$ K dan $P = 10$–$35$ MPa:

$$\rho_{CO_2} = f(T,P)\quad\text{(dengan akurasi <0,5\% pada domain superkritis)}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti protokol SOP berikut, disintesis dari kedua paper:

**Tahap 1: Preparasi Biomassa.** Kanabis kering (*moisture content* <10%) digiling menjadi partikel $0,5$–$2,0$ mm. Ukuran partikel mengontrol $K$ permeabilitas bed melalui persamaan Kozeny-Carman:

$$K = \frac{\varepsilon_b^3}{150(1-\varepsilon_b)^2}d_p^2$$

**Tahap 2: Pressurization (5–10 menit).** CO₂ dipompa dari tangki penyimpanan (6 MPa) hingga tekanan operasi (15–30 MPa). Gradien tekanan yang terlalu tinggi menyebabkan *channeling* dan rekompaksi bed. laju pressurisasi direkomendasikan: $dP/dt \leq 3$ MPa/menit untuk menjaga $Re_{p} < 10$ (aliran viskos-dominated).

**Tahap 3: Pemanasan Awal (Pre-heating).** Heater listrik atau jaket termal menaikkan suhu CO₂ ke set-point (313–333 K) **sebelum** memasuki vessel. Tahap ini mencegah kondensasi CO₂ sub-kritis pada dinding dingin.

**Tahap 4: Ekstraksi Dinamis (60–180 menit).** CO₂ superkritis dialirkan secara continuous melalui bed dengan laju alir massa $\dot{m}_{CO_2} = 2$–$8$ kg/jam per kg biomassa. Rasio solvent-to-feed (S/F) dijaga pada 20–60.

**Tahap 5: Separasi (Depressurization Cascade).** Dua atau tiga separator bertekanan阶梯 (8 MPa, 4 MPa) memisahkan CO₂ dari ekstrak. Tahapan depresurisasi harus **diisolasi termal** (insulasi >R-3,5 m²K/W) untuk membatasi efek Joule-Thomson.

**Tahap 6: Recycle CO₂.** CO₂ direkondensasi menggunakan heat exchanger dan dikembalikan ke tangki storage, dengan recovery rate >95%.

**Diagram Alir Logika:**

```
[Biomassa] → [Grinding] → [Loading Vessel]
                                ↓
                            [Pressurize]
                                ↓
                         [Heat to T_set]
                                ↓
              ┌────[Dynamic Extraction]────┐
              ↓                            ↓
    [Separator 1: 8 MPa]         [Separator 2: 4 MPa]
              ↓                            ↓
       [Crude Extract]              [Wax/Fraction]
              ↓
      [Decarboxylation (opsional)]
              ↓
       [Produk Akhir CBD/THC Oil]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Vessel Skala Pilot (100 L)

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Tekanan operasi | $P$ | 25 | MPa |
| Suhu operasi | $T$ | 328 | K |
| Jari-jari vessel | $R$ | 0,10 | m |
| Tinggi bed | $L$ | 0,60 | m |
| Porositas bed | $\varepsilon_b$ | 0,42 | – |
| Diameter partikel | $d_p$ | 1,2 | mm |
| Permeabilitas (Kozeny-Carman) | $K$ | $8,7\times10^{-9}$ | m² |
| Densitas CO₂ (Span-Wagner) | $\rho_{CO_2}$ | 717,8 | kg/m³ |
| Viskositas CO₂ | $\mu_{CO_2}$ | $7,2\times10^{-5}$ | Pa·s |

### 4.2 Perhitungan Permeabilitas dan Drop Tekanan

$$K = \frac{(0,42)^3}{150(1-0,42)^2}(1,2\times10^{-3})^2 = \frac{0,0741}{150\times0,336}\times1,44\times10^{-6}$$

$$K = 2,12\times10^{-9}\text{ m}^2$$

Laju alir volumetrik superficial diasumsikan $u_z = 1,5$ mm/s $= 1,5\times10^{-3}$ m/s. Bilangan Reynolds partikel:

$$Re_p = \frac{\rho_{CO_2} u