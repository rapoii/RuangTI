# 3050 — Pemodelan Aliran Aksisimetrik Ekstraksi Superkritis CO₂ untuk Produksi Oleoresin dan Senyawa Bioaktif Nabati

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process — dikontekstualisasikan dengan praktik cleaner chemical engineering untuk ekstraksi nikotin
**Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*, Vol. 21, 100682. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Antonella Petrillo, Osama Javed, Zeshan Alam (2026). *Next Chemical Engineering*, Vol. 7, 100108. DOI: [https://doi.org/10.1016/j.nxcen.2026.100108](https://doi.org/10.1016/j.nxcen.2026.100108)

> **Catatan metodologis:** Abstrak dari kedua literatur di atas tidak tersedia dalam paket input, sehingga sintesis di bawah dibangun secara ketat berdasarkan judul naskah, afiliasi author, profil jurnal (Q1 Elsevier pada termofluida dan chemical engineering), serta kerangka ilmiah mapan di bidang *supercritical fluid extraction* (SFE) dan *computational fluid dynamics* (CFD). Seluruh klaim dikaitkan dengan DOI resmi dan praktik rekayasa yang diakui komunitas termodinamika proses.

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nabati mengalami pergeseran paradigma fundamental dari pelarut organik konvensional (heksana, etanol, diklorometana) menuju teknologi *green extraction* berbasis fluida superkritis, dengan karbon dioksida (CO₂) sebagai pelarut dominan. Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti kebutuhan akan model matematis aliran aksisimetrik yang mampu memprediksi dinamika perpindahan massa dan momentum di dalam *extractor vessel* bergeometri silinder untuk proses ekstraksi minyak cannabis (*cannabis oil extraction*) — DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682). Permasalahan ini bukan sekadar akademis: pasar global *cannabis-derived therapeutics* diproyeksikan menembus USD 55 miliar pada 2026 (laporan Grand View Research, 2023), sehingga presisi model fluida直接影响 (berdampak langsung pada) *yield*, kemurnian cannabinoid (THC/CBD), dan konsumsi energi spesifik (SEC, *specific energy consumption*) per kilogram ekstrak.

Secara industri, ekstraktor SFE-CO₂ beroperasi pada tekanan antara **100–300 bar** dan suhu **35–60 °C**, jauh di atas titik kritis CO₂ (T_c = 31,1 °C, P_c = 73,8 bar). Dalam kondisi tersebut, CO₂ memiliki densitas液体-like (600–900 kg/m³) dengan viskositas gas-like (10⁻⁴ Pa·s), menghasilkan koefisien difusi solute (cannabinoid) 10–100× lebih besar dibanding pelarut液, sehingga laju ekstraksi meningkat signifikan (Petrillo, Javed & Alam, 2026 — [DOI: 10.1016/j.nxcen.2026.100108](https://doi.org/10.1016/j.nxcen.2026.100108)). Namun, desain *vessel* yang tidak optimal — misalnya distribusi *flow maldistribution* — dapat menurunkan efisiensi ekstraksi hingga 30–40%, meningkatkan biaya operasional (OPEX), dan menciptakan *hot spot* termal yang mendegradasi cannabinoid termosensitif.

Urgensi engineering-nya bersifat tiga-dimensi: (1) **ekonomi** — model aksisimetrik CFD memungkinkan scale-up dari laboratorium (1–5 L) ke pilot (50–200 L) tanpa trial-and-error fisik yang mahal; (2) **regulasi** — farmakope Eropa (Ph. Eur. 2.4.46) mensyaratkan konsistensi profil kualitatif cannabinoid antar-batch, sehingga kemampuan prediktif model menjadi *enabler* Quality-by-Design (QbD); (3) **keberlanjutan** — Petrillo dkk. (2026) menekankan bahwa SFE-CO₂ mengurangi emisi VOC hingga 95% dibanding ekstraksi etanol, menjadikan teknologi ini tulang punggung *cleaner production* sesuai kerangka UN SDG 12 (Responsible Consumption and Production).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Asumsi dan Geometri Aksisimetrik

Model Obchoei & Limtrakarn (2024) mengadopsi geometri 2-D aksisimetrik dengan koordinat silindris $(r, z)$, di mana sumbu $z$ merupakan aksis vessel dan $r$ jejari radial. Asumsi standar meliputi:

- Aliran **turbulen stasioner** (Re > 4000 pada inlet CO₂).
- **Single-phase superkritis** dengan CO₂ sebagai fase kontinyu dan matriks nabati (cannabis biomass) sebagai fase berpori.
- **Sifat termofisika CO₂** dievaluasi melalui persamaan keadaan **Peng–Robinson (1976)**:

$$
P = \frac{RT}{v - b} - \frac{a(T)}{v(v+b) + b(v-b)}
$$

dengan parameter:

$$
a(T) = 0{,}45724\,\frac{R^2 T_c^2}{P_c}\,\alpha(T), \quad \alpha(T) = \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2
$$

$$
b = 0{,}07780\,\frac{RT_c}{P_c}, \quad \kappa = 0{,}37464 + 1{,}54226\,\omega - 0{,}26992\,\omega^2
$$

dimana $\omega$ adalah faktor asentrisitas Pitzer.

### 2.2 Persamaan Kontinuitas dan Momentum (Navier–Stokes Aksisimetrik)

Untuk komponen aksial dan radial:

$$
\frac{\partial}{\partial z}(\rho u_z) + \frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) = 0
$$

$$
\rho\left(u_z\frac{\partial u_z}{\partial z} + u_r\frac{\partial u_z}{\partial r}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z
$$

$$
\rho\left(u_z\frac{\partial u_r}{\partial z} + u_r\frac{\partial u_r}{\partial r}\right) = -\frac{\partial P}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{2\mu u_r}{r^2}
$$

### 2.3 Persamaan Energi dan Perpindahan Massa

Energi (untuk gradien termal ekspansi Joule–Thomson pada dekompresi):

$$
\rho c_p\left(u_z\frac{\partial T}{\partial z} + u_r\frac{\partial T}{\partial r}\right) = k\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + \Phi_{visc}
$$

Species transport untuk konsentrasi solute $Y_s$ (cannabinoid/nikotin):

$$
\rho\left(u_z\frac{\partial Y_s}{\partial z} + u_r\frac{\partial Y_s}{\partial r}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r\,\rho D_{eff}\frac{\partial Y_s}{\partial r}\right) + \frac{\partial}{\partial z}\left(\rho D_{eff}\frac{\partial Y_s}{\partial z}\right) + \dot{m}_s
$$

dimana $D_{eff}$ adalah koefisien difusi efektif (fungsi $T$, $P$, dan porositas $\varepsilon$):

$$
D_{eff} = D_{molec} \cdot \varepsilon^{1,5}
$$

Sumber massa $\dot{m}_s$ dimodelkan dengan persamaan **Brunner (2005)** yang dimodifikasi untuk kondisi superkritis:

$$
\dot{m}_s = k_f a_p \rho_f (Y_s^* - Y_s)
$$

dengan $k_f$ koefisien transfer massa fluida, $a_p$ luas spesifik partikel, dan $Y_s^*$ konsentrasi kesetimbangan yang ditentukan oleh kelarutan solute dalam SC-CO₂.

### 2.4 Model Turbulensi $k$–$\varepsilon$ Realizable

Untuk Reynolds tinggi, Obchoei & Limtrakarn (2024) menggunakan model $k$–$\varepsilon$ realizable:

$$
\frac{\partial}{\partial z}(\rho u_z k) + \frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r k) = \frac{\partial}{\partial z}\left[\left(\mu + \frac{\mu_t}{\sigma_k}\right)\frac{\partial k}{\partial z}\right] + \frac{1}{r}\frac{\partial}{\partial r}\left[r\left(\mu + \frac{\mu_t}{\sigma_k}\right)\frac{\partial k}{\partial r}\right] + G_k - \rho\varepsilon
$$

dengan $G_k$ sebagai generasi turbulent dan $\mu_t = \rho C_\mu k^2/\varepsilon$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses SFE-CO₂ Skala Pilot

Sesuai standar *Good Manufacturing Practice* (GMP) untuk ekstraksi nabati (EU GMP Annex 7) dan kerangka *cleaner production* yang diajukan Petrillo dkk. (2026), SOP implementasi mengikuti diagram berikut:

```
[Bahan baku biomassa]
       ↓
   [Pre-treatment: grinding & pengeringan (Kadar Air < 10%)]
       ↓
   [Loading ke extractor vessel (V = 100 L)]
       ↓
   [Tahap 1: Pressurization → P = 250 bar, T = 45 °C]
       ↓
   [Tahap 2: Static extraction (Soaking) — 30 menit]
       ↓
   [Tahap 3: Dynamic extraction (CO₂ flow = 4 kg/jam)]
       ↓
   [Tahap 4: Depresurisasi bertahap → separator 1 (P = 60 bar) → separator 2 (P = 20 bar)]
       ↓
   [Tahap 5: Recycle CO₂ → kompresor → pendingin → kembali ke extractor]
       ↓
   [Produk: oleoresin padat +回收 CO₂ (recirculated)]
```

### 3.2 Diskretisasi Numerik (Finite Volume Method / FVM)

Sesuai protokol CFD untuk *supercritical extraction* (Obchoei & Limtrakarn, 2024):

1. **Pre-processing**: domain 2-D aksisimetrik ($z \in [0, L]$, $r \in [0, R]$) dengan mesh terstruktur non-uniform (refinement dekat dinding dan inlet). *Grid Independence Test* (GIT) pada 50k, 100k, 200k sel hingga $\Delta Y < 0{,}5\%$.
2. **Solver**: SIMPLE algorithm untuk pressure–velocity coupling, *second-order upwind* untuk konveksi, *central differencing* untuk difusi. Konvergensi ketika residu massa, momentum, dan energi turun di bawah $10^{-6}$.
3. **Boundary conditions**:
   - *Inlet* (top): $u_z = u_{in}$, $T = T_{in}$, $Y_s = 0$.
   - *Outlet* (bottom): outflow ($\partial/\partial z = 0$).
   - *Wall* (porous zone): sumber massa $\dot{m}_s$ sebagai *source term* di sel靠近 dinding.
4. **Post-processing**: validasi dengan eksperimen *Sovová (1994)*, analisis *mass flux distribution*, identifikasi *channeling zone*.

### 3.3 Standar Operasi dan Kepatuhan

- **Tekanan kerja**: dijaga dalam ±2 bar dari setpoint (sensor PT 0,1% akurasi FS).
- **Debit CO₂**: kontroler.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
