# 1498 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process* — Pemodelan Computational Fluid Dynamics (CFD) aksisimetrik untuk ekstraksi minyak kanabis menggunakan CO₂ superkritis, dengan analisis perpindahan panas pada tahap *pressurization*, *extraction*, dan *depressurization*.

**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process*. **International Journal of Thermofluids**, Vol. 22. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)

**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *Effect of heat transfer on the pressurization, extraction, and depressurization stages of a supercritical CO₂ extraction process. 1. Development and validation of the heat transfer model*. **The Journal of Supercritical Fluids**, Vol. 203. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani untuk produk *cannabidiol* (CBD) dan *tetrahydrocannabinol* (THC) mengalami pertumbuhan eksponensial sejak legalisasi terbatas di berbagai yurisdiksi pada periode 2018–2024. Permintaan global akan ekstrak kanabis *full-spectrum* dan *broad-spectrum* dengan kemurnian tinggi mendorong kebutuhan akan proses ekstraksi yang efisien, *green*, dan mampu mempertahankan profil cannabinoid-terpene secara utuh. Di antara teknologi yang tersedia, **Supercritical Fluid Extraction with Carbon Dioxide (SC-CO₂)** muncul sebagai *gold-standard* karena sifatnya yang non-toksik, *tunable*, dan ramah lingkungan — tidak meninggalkan residu pelarut seperti pada ekstraksi etanol atau butana.

Menurut Obchoei & Limtrakarn (2024), perancangan optimal *extractor vessel* SC-CO₂ untuk kanabis menghadapi tantangan fundamental: dinamika fluida superkritis pada tekanan 200–350 bar dan suhu 308–333 K menghasilkan perilaku fluida yang sangat non-ideal, di mana properti CO₂ seperti densitas, viskositas, dan difusivitas berubah drastis sepanjang *packed bed*. Mereka mengusulkan **model aliran aksisimetrik dua-dimensi** yang menggabungkan persamaan Navier-Stokes, neraca massa, dan kinetika pelarutan untuk memprediksi yield ekstraksi dan profil konsentrasi secara realistis (Obchoei & Limtrakarn, 2024, DOI: 10.1016/j.ijft.2024.100682).

Sementara itu, Toledo & del Valle (2023) melengkapi pemahaman ini dengan menyoroti bahwa mayoritas model SC-CO₂ di literatur mengasumsikan proses *isothermal* — padahal pada kenyataan industri, tahap *pressurization* (naik tekanan), *extraction* (penahanan), dan *depressurization* (turun tekanan) semuanya disertai **transien perpindahan panas** yang signifikan. Mereka mengembangkan model perpindahan panas 1-D *unsteady* dan memvalidasinya terhadap data eksperimen, menunjukkan bahwa gradien suhu aksial di dalam *extractor* bisa mencapai 15–20 K selama tahap *pressurization* (Toledo & del Valle, 2023, DOI: 10.1016/j.supflu.2023.106046). Integrasi kedua perspektif — hidrodinamika aksisimetrik dan termodinamika transien — menjadi kunci perancangan sistem SC-CO₂ yang optimal untuk industri *cannabis-tech*.

Urgensi ekonominya nyata: biaya peralatan bertekanan tinggi untuk *extractor* 100 L mencapai USD 250.000–500.000, dan setiap *batch* membutuhkan 2–6 jam siklus. Peningkatan yield sebesar 5–10% melalui optimasi termodinam-hidrodinamik berpotensi menghemat jutaan USD per tahun pada fasilitas skala komersial.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Dasar Aliran Aksisimetrik SC-CO₂

Model Obchoei & Limtrakarn (2024) menggunakan formulasi **axisymmetric 2D** dengan asumsi *steady-state*, *compressible flow*, dan fluida Newtonian. Sistem koordinat silinder $(r, z)$ menghasilkan persamaan kontinuitas:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

Karena CO₂ superkritis adalah fluida *compressible*, densitas $\rho$ bergantung pada tekanan $P$ dan suhu $T$ melalui **Equation of State (EOS)**. Obchoei & Limtrakarn menggunakan **Peng-Robinson EOS**:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha}{V_m^2 + 2bV_m - b^2}$$

dengan parameter:

$$a = 0.45724 \frac{R^2 T_c^2}{P_c}, \quad b = 0.07780 \frac{RT_c}{P_c}, \quad \alpha = \left[1 + \kappa \left(1 - \sqrt{T/T_c}\right)\right]^2$$

dengan $\kappa = 0.37464 + 1.54226\omega - 0.26992\omega^2$, untuk CO₂: $T_c = 304.13$ K, $P_c = 73.75$ bar, $\omega = 0.225$.

Persamaan momentum dalam arah aksial $z$:

$$\rho\left(v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z - \frac{\mu}{\kappa_{perm}} v_z$$

di mana istilah terakhir merepresentasikan **perlawanan Darcy** dalam *packed bed* kanabis dengan permeabilitas intrinsik $\kappa_{perm}$.

### 2.2 Neraca Massa Solute (Cannabinoids)

Fraksi massa solute (campuran THC/CBD) dalam fase superkritis, $y$, dihitung menggunakan persamaan konveksi-difusi:

$$\rho v_z \frac{\partial y}{\partial z} = \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho D_{eff} \frac{\partial y}{\partial r}\right) + \rho D_{ax} \frac{\partial^2 y}{\partial z^2} - J$$

di mana $J$ adalah laju transfer massa dari matriks padat ke fluida:

$$J = k_f a_s (y^* - y)$$

dengan $k_f$ = koefisien transfer massa fluida, $a_s$ = luas spesifik partikel, dan $y^*$ = solubilitas kesetimbangan CO₂-cannabinoid.

### 2.3 Model Perpindahan Panas Transien (Toledo & del Valle, 2023)

Untuk menangkap dinamika termal, neraca energi *unsteady* dalam ekstraktor:

$$\rho c_p \frac{\partial T}{\partial t} + \rho c_p v_z \frac{\partial T}{\partial z} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff} \frac{\partial T}{\partial r}\right) + k_{ax} \frac{\partial^2 T}{\partial z^2} + \dot{q}_{gen} - \dot{q}_{loss}$$

di mana $\dot{q}_{gen}$ adalah panas yang dilepas/diserap oleh ekspansi Joule-Thomson dari CO₂ selama *pressurization*:

$$\dot{q}_{gen} = \rho v_z \mu_{JT} \frac{dP}{dz}$$

dengan **koefisien Joule-Thomson** $\mu_{JT}$ untuk CO₂ pada kondisi SC berkisar $0.7$–$1.5$ K/bar.

### 2.4 Kinetika Ekstraksi — Model Sovová yang Dimodifikasi

Untuk fase *extraction*, yield kumulatif mengikuti model tiga-stage:

$$E(t) = q_\infty \left[1 - \frac{1}{Z}\ln\left(\frac{1}{1 + (e^Z - 1) e^{-F \cdot t}}\right)\right]$$

dengan $Z = \frac{W k_f a_s}{Q y^*}$ dan $F = \frac{Q y^*}{q_\infty}$, di mana $Q$ adalah laju alir massa CO₂, $W$ adalah massa *feed*, dan $q_\infty$ adalah yield maksimal.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

### 3.1 Diagram Alir Proses SC-CO₂ Ekstraksi Minyak Kanabis

```
[Feed Prep] → [Loading] → [Pressurization] → [Extraction] → [Depressurization] → [Separation]
     ↓              ↓              ↓                ↓                 ↓                  ↓
  Grinding       Vessel       CO₂ pump          Recirculation     Expansion        Cannabinoid
  1-3 mm         loading     200-350 bar        loop 313-333 K     valve            collection
```

### 3.2 Prosedur Operasional Standar (SOP)

**Tahap 1: Persiapan Feed (Pre-processing)**
1. *Decarboxylation* cannabinoid asam (CBDA, THCA) pada 393 K selama 30–45 menit untuk konversi ke bentuk aktif (CBD, THC).
2. Grinding biomassa kanabis kering hingga ukuran partikel 1–3 mm untuk menjaga permeabilitas *packed bed* dan luas kontak.
3. Pengisian *extractor vessel* dengan densitas packing $\rho_b = 350$–$500$ kg/m³.

**Tahap 2: Pressurization (5–15 menit)**
- Naikkan tekanan secara gradual dari 1 bar ke target $P_{ext}$ (umumnya 250 bar) menggunakan *diaphragm compressor* atau *piston pump*.
- Pantau gradient suhu akibat efek Joule-Thomson; aktifkan *pre-heater* eksternal untuk mengompensasi pendinginan ($\Delta T \approx 10$–$15$ K).

**Tahap 3: Extraction (60–240 menit)**
- Pertahankan suhu pada 313–333 K dan tekanan pada 250–350 bar.
- Alirkan CO₂ superkritis dengan laju $Q_{CO_2}$ = 5–25 kg/jam per kg biomassa.
- Sampling outlet untuk monitoring yield via UV-spectroscopy atau HPLC.

**Tahap 4: Depressurization (10–20 menit)**
- Turunkan tekanan secara staged ke 50–60 bar (separator 1) lalu ke 20 bar (separator 2).
- Panas dilepas selama ekspansi; resirkulasi CO₂ gas melalui *condenser*.

### 3.3 Arsitektur CFD dan Diskretisasi

Model Obchoei & Limtrakarn (2024) menggunakan *commercial solver* ANSYS Fluent dengan:
- **Domain:** aksisimetris 2D ($r \in [0, R]$, $z \in [0, L]$, dengan $R = 0.05$ m, $L = 0.5$ m).
- **Mesh:** ~50.000 sel *structured quadrilateral*, refinement di dinding.
- **Solver:** SIMPLE untuk *pressure-velocity coupling*, Second-Order Upwind untuk konveksi.
- **Turbulence model:** *Realizable k-ε* (default industri untuk SC-CO₂ dalam packed bed).
- **Boundary conditions:** *velocity-inlet* di bottom, *pressure-outlet* di top, *no-slip wall* di dinding.

Validasi dilakukan terhadap data eksperimen Brunner (2005) dan hasil *yield curve* Tan & Liou (1989), dengan deviasi <8%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Contoh Kasus: Ekstraktor 10 L untuk Produksi CBD

**Parameter Input Industri:**

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Tekanan ekstraksi | 300 bar | $P$ |
| Suhu ekstraksi | 328 K (55°C) | $T$ |
| Laju alir CO₂ | 8 kg/jam | $Q$ |
| Massa biomassa | 1.5 kg | $W$ |
| Densitas packed bed | 400 kg/m³ | $\rho_b$ |
| Diameter vessel | 0.15 m | $D$ |
| Tinggi vessel | 0.6 m | $L$ |

**Langkah 1: Hitung Densitas CO₂ Supercritical (Peng-Robinson EOS)**

Untuk CO₂ pada $T = 328$ K, $P = 300$ bar:
- $T_r = T/T_c = 328/304.13 = 1.078$
- $\alpha = [1 + 0.7064(1 - \sqrt{1.078})]^2 = [1 + 0.7064(1 - 1.0382)]^2 \approx 0.974$
- $a = 0