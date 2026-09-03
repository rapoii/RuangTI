# 2970 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi kanabis global mengalami ekspansi eksponensial pasca-regulasi legalisasi di yurisdiksi Kanada, beberapa negara bagian Amerika Serikat, dan pasar Uni Eropa. Pasar produk turunan *cannabis sativa* (minyak CBD/THC, resin, distilat) diproyeksikan menembus valuasi USD 50 miliar secara agregat pada 2030, didorong oleh aplikasi farmasi, nutraceutical, kosmetik, dan rekreasi. Dalam konteks ini, pemilihan teknologi ekstraksi memiliki implikasi strategis terhadap kualitas produk, kepatuhan regulasi, dan profitabilitas operasional. **Supercritical Fluid Extraction with CO₂ (SC-CO₂)** muncul sebagai *best-available technique* (BAT) karena meninggalkan residu pelarut toksik (berbeda dengan ekstraksi *butane hash oil* atau etanol), memungkinkan *tunability* selektivitas melalui variabel tekanan dan temperatur, serta memenuhi standar *Good Manufacturing Practice* (GMP) untuk produk farmasi (Obchoei & Limtrakarn, 2024).

Namun, kompleksitas operasional SC-CO₂ menjadi tantangan rekayasa yang substansial. Sistem bekerja pada tekanan operasi tipikal 200–350 bar dan temperatur 313–333 K, di mana CO₂ berada dalam kondisi *supercritical* — densitas tinggi (ρ ≈ 600–900 kg/m³) namun viskositas rendah, sehingga berlaku sebagai pelarut non-polar selektif terhadap cannabinoid dan terpenoid. Obchoei & Limtrakarn (2024) menekankan bahwa pemahaman tentang perilaku **aliran aksisemetrik** dalam bejana ekstraktor silinder merupakan prasyarat untuk memprediksi profil konsentrasi solute, *residence time distribution*, dan *dead zone* yang menurunkan yield. Lebih lanjut, Toledo & del Valle (2023) menunjukkan bahwa **perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization*** merupakan *bottleneck* termodinamika yang sering diabaikan dalam desain konvensional — gasifikasi CO₂ saat *depressurization* menyerap panas laten yang signifikan sehingga menurunkan temperatur fluida dan menghambat solubilitas. Tanpa pemodelan yang akurat, *engineering scale-up* dari skala laboratorium (1–5 L) ke kapasitas komersial (100–1000 L) menghasilkan deviasi yield hingga 30–40%.

Konteks industrial engineering menjadi krusial karena keputusan desain extractor vessel, *pump duty*, *heater duty*, dan *separator configuration* harus didasarkan pada model termofluida yang valid. Asumsi *plug flow* atau *CSTR* klasik terbukti tidak memadai untuk memodelkan gradien radial dalam bejana, terutama pada *flow rate* rendah atau packing tidak homogen. Oleh karena itu, integrasi antara **CFD axisymmetric** dengan **model perpindahan panas transien** seperti yang dikembangkan oleh Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023) menjadi fondasi metodologis dalam desain dan optimasi proses SC-CO₂ modern.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan termofluida SC-CO₂ dalam bejana silinder mengadopsi sistem koordinat silinder $(r, z)$ dengan asumsi **axisymmetry** — tidak ada variasi variabel dalam arah tangensial $\theta$. Hal ini menyederhanakan domain 3D menjadi 2D dan secara signifikan mengurangi biaya komputasi tanpa mengorbankan akurasi untuk geometri rotasional.

### 2.1 Persamaan Kontinuitas (Konservasi Massa)

Untuk fluida *supercritical* dengan densitas variabel, konservasi massa diekspresikan sebagai:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r} \frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

di mana $\rho$ adalah densitas fluida (kg/m³), $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial (m/s), $t$ adalah waktu (s).

### 2.2 Persamaan Momentum Navier-Stokes Aksisimetrik

Dengan asumsi fluida Newtonian dan tekanan $p$ sebagai variabel termodinamika, persamaan momentum arah radial dan aksial adalah:

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] + \rho g_r$$

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z$$

### 2.3 Persamaan Energi dan Perpindahan Panas

Mengikuti kerangka Toledo & del Valle (2023), persamaan energi transien untuk fluida superkritis dengan konduktivitas termal $k$ dan kapasitas panas $c_p$:

$$\rho c_p\left(\frac{\partial T}{\partial t} + v_r \frac{\partial T}{\partial r} + v_z \frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right) + \dot{q}_{latent} + \dot{q}_{reaction}$$

Terma $\dot{q}_{latent}$ menjadi signifikan pada tahap *depressurization* ketika CO₂ transisi fase dari superkritis ke gas dengan pelepasan panas laten vaporisasi yang terserap dari dinding bejana dan substrat.

### 2.4 Persamaan Transport Solut (Mass Transfer)

Konsentrasi cannabinoid $C$ dalam fase superkritis dimodelkan dengan hukum Fick termodifikasi:

$$\frac{\partial C}{\partial t} + v_r \frac{\partial C}{\partial r} + v_z \frac{\partial C}{\partial z} = D_{AB}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - k_L a (C - C^*)$$

di mana $D_{AB}$ adalah koefisien difusi biner cannabinoid-CO₂ (orde $10^{-8}$ m²/s), $k_L a$ adalah koefisien transfer massa volumetrik (s⁻¹), dan $C^*$ adalah konsentrasi kesetimbangan yang ditentukan oleh persamaan Chrastil:

$$C^* = \rho^n \cdot K \cdot \exp\left(-\frac{\Delta H_{sol}}{R T}\right)$$

dengan $K$, $n$, dan $\Delta H_{sol}$ sebagai parameter kelarutan empiris Chrastil.

### 2.5 Persamaan Keadaan

Densitas CO₂ superkritis dihitung melalui persamaan keadaan **Peng-Robinson**:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

yang memberikan $\rho$ sebagai fungsi $P$ dan $T$ dengan akurasi tipikal <2% pada kondisi operasi SC-CO₂.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti arsitektur proses tiga-tap berikut:

**Tahap 1 — Pressurization:** CO₂ dari tangki penyimpanan (-20°C, 60 bar) dikompresi oleh *diaphragm pump* hingga tekanan operasi (250 bar). Perpindahan panas kompresi harus dihitung untuk mencegah *cavitation* dan overheating seal. Toledo & del Valle (2023) menunjukkan bahwa gradient termal radial dapat mencapai 15–25 K pada laju kompresi cepat (>2 bar/s).

**Tahap 2 — Extraction (Static atau Dynamic):** Dalam mode *static*, substrat kanabis direndam dalam fluida SC-CO₂ selama 30–120 menit. Dalam mode *dynamic*, CO₂ superkritis dialirkan secara kontinyu (*flow rate* 1–10 L/min) melalui bed material dengan *co-current* atau *counter-current* terhadap inlet. Solver CFD axisimetrik (Obchoei & Limtrakarn, 2024) diaplikasikan dengan *mesh* terstruktur ~50.000 sel, skema upwind second-order, dan *time step* adaptif $\Delta t = 10^{-3}$–$10^{-2}$ s.

**Tahap 3 — Depressurization:** CO₂ + solute mengalir ke *separator* (40–60 bar), di mana *cannabinoid* mengendap dan CO₂ direcycle. Penyerapan panas laten oleh dinding harus diimbangi oleh *heating jacket* untuk mencegah *clogging* oleh CO₂ kering (*dry ice* formation).

**SOP ringkas:**

| Langkah | Parameter Kritis | Set-point | Toleransi |
|--------|-----------------|-----------|-----------|
| 1. Persiapan substrat | Moisture content | <10% w/w | ±1% |
| 2. Pressurization | Pressure ramp rate | 2 bar/s | ±0.5 bar/s |
| 3. Ekstraksi | Tekanan, Temperatur | 250 bar, 313 K | ±5 bar, ±2 K |
| 4. Separasi | Tekanan separator | 50 bar | ±2 bar |
| 5. Depressurization | Cooling rate | 5 K/s | ±1 K/s |

Boundary conditions CFD: inlet *fully developed flow* dengan profil parabola, *no-slip* di dinding, *outflow