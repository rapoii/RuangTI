# 2394 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritis: Integrasi CFD dan Termodinamika Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction, SFE) menggunakan CO₂ telah menjadi teknologi unggulan dalam industri fitofarmaka, nutraceutical, dan farmasi modern untuk isolasi senyawa bioaktif termolabil seperti cannabinoid (THC, CBD, CBG) dan terpenoid dari biomassa kanabis (*Cannabis sativa* L.). Berbeda dengan ekstraksi pelarut organik konvensional (etanol, heksana, kloroform) yang meninggalkan residu toksik dan memerlukan tahap pemurnian tambahan, CO₂ superkritis menawarkan keunggulan ganda: sifatnya yang tunable (densitas dan daya pelarut dikendalikan oleh tekanan serta suhu), inert secara kimiawi, tidak mudah terbakar, dan memenuhi standar *Generally Recognized as Safe* (GRAS) FDA serta regulasi GMP farmasi Eropa (European Pharmacopoeia 11th Edition, 2022).

Obchoei dan Limtrakarn (2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) menyoroti bahwa desain *extractor vessel* industri—yang umumnya berbentuk tabung silinder vertikal dengan geometri aksisimetrik—masih didesain berdasarkan asumsi simplistis berupa *plug flow ideal* dengan gradien konsentrasi dan suhu uniform. Padahal secara fisis, distribusi CO₂ di dalam *bed* biomassa mengalami maldistribusi signifikan akibat *channeling*, efek dinding, dan gradien tekanan aksial. Ketidakakuratan asumsi ini menyebabkan *scale-up* yang gagal, rendemen (yield) yang tidak reproducible, dan konsumsi energi spesifik (SEC, MJ/kg) yang 2–3 kali lebih tinggi dari optimum termodinamik. Sebagai respons, Obchoei dan Limtrakarn (2024) membangun model aliran aksisimetrik 2D yang menggabungkan persamaan Navier–Stokes, persamaan energi, dan perspecies transport untuk cannabinoid.

Di sisi paralel, Toledo dan del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) menunjukkan bahwa 35–50% dari total energi yang dikonsumsi pada siklus SFE terjadi pada tahap *pressurization* dan *depressurization*—dua tahap yang secara historis diabaikan dalam desain reaktor SFE. Mereka mengembangkan model perpindahan panas transien 1D yang memvalidasi bahwa laju kompresi dan ekspansi secara langsung menentukan profil suhu internal *bed* yang dapat menyimpang hingga 15–20°C dari setpoint operasi, memengaruhi selektivitas dan yield. Konteks industri global sangat relevan: pasar legal kanabis medis diproyeksikan mencapai USD 65–75 miliar pada 2028 (Grand View Research, 2023), sehingga optimalisasi proses SFE memiliki dampak ekonomi langsung pada profitabilitas fasilitas ekstraksi.

Urgensi teknis semakin kuat ketika mempertimbangkan biaya modal *extractor* industri skala komersial (kapasitas 100–1000 L) yang berkisar USD 500.000–3.000.000 per unit (Attarde dkk., 2021). Setiap peningkatan yield sebesar 1% absolut atau reduksi SEC sebesar 5% akan memberikan ROI signifikan pada payback period kurang dari 24 bulan. Oleh karena itu, integrasi kedua pendekatan—pemodelan CFD aksisimetrik (Obchoei & Limtrakarn, 2024) dan model termodinamika perpindahan panas transien (Toledo & del Valle, 2023)—menjadi kerangka engineering modern untuk desain, optimasi, dan kontrol proses SFE kanabis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konservasi Momentum (Navier–Stokes)

Untuk geometri aksisimetrik silinder (koordinat $(r, z)$), Obchoei dan Limtrakarn (2024) menyelesaikan bentuk simplifikasi persamaan momentum dengan asumsi sumbu simetri di $r = 0$:

$$\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} = -\frac{1}{\rho_{mix}}\frac{\partial p}{\partial z} + \mu_{mix}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + g_z - \frac{\mu_{mix}}{K_{perm}}\epsilon \, u_z$$

di mana $\rho_{mix}$ adalah densitas campuran CO₂ + solut (kg/m³), $\mu_{mix}$ viskositas dinamis (Pa·s), $K_{perm}$ permeabilitas intrinsik *bed* biomassa (m²), dan $\epsilon$ porositas (–). Persamaan analog untuk komponen radial $u_r$ mengikuti formulasi momentum silindris standar.

### 2.2 Persamaan Konservasi Massa Spesies (Species Transport)

Transport cannabinoid dalam fase superkritis dimodelkan dengan persamaan konveksi-difusi dengan sumber termal dari kelarutan equilibrium:

$$\frac{\partial C_i}{\partial t} + \nabla \cdot (\vec{u} C_i) = D_{eff,i} \nabla^2 C_i + \dot{m}_i$$

dengan laju pelepasan (*desorption*) dari matriks biomassa mengikuti model *shrinking core* Laplace:

$$\dot{m}_i = k_f \, a_v \, (C^*_i - C_i)$$

di mana $C^*_i$ adalah konsentrasi equilibrium yang dihitung dari korelasi Chrastil (Chrastil, 1982):

$$\ln(C^*_i) = a + \frac{b}{T} + c \ln(\rho_{CO_2})$$

dengan $a, b, c$ parameter empiris spesifik untuk cannabinoid target.

### 2.3 Persamaan Energi (Enthalpy Balance)

Toledo dan del Valle (2023) merumuskan persamaan energi transien 1D radial-aksial pada tahap *pressurization*:

$$\rho_{bed} c_{p,bed} \frac{\partial T}{\partial t} = k_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] - \rho_{CO_2} c_{p,CO_2} u_z \frac{\partial T}{\partial z} + \dot{q}_{comp} - \dot{q}_{loss}$$

dengan sumber panas kompresi reversibel:

$$\dot{q}_{comp} = \frac{\beta T}{\rho_{CO_2}}\frac{\partial p}{\partial t}$$

di mana $\beta$ adalah koefisien ekspansi termal CO₂ (≈ 1/$\rho \cdot \partial \rho / \partial T$).

### 2.4 Persamaan Keadaan CO₂ Superkritis

Untuk kondisi operasi $T = 313\text{–}333\,\text{K}$ dan $p = 15\text{–}30\,\text{MPa}$, densitas dan viskositas CO₂ dihitung dari persamaan keadaan Span–Wagner (Span & Wagner, 1996) atau pendekatan Peng–Robinson:

$$p = \frac{RT}{v-b} - \frac{a(T)}{v(v+b) + b(v-b)}$$

Parameter $a(T)$ dan $b$ dihitung dari $T_c = 304.13\,\text{K}$, $p_c = 7.377\,\text{MPa}$, dan faktor acentrik $\omega = 0.2236$.

### 2.5 Bilangan Tak Berdimensi Karakteristik

- *Reynolds bed*: $\text{Re}_p = \dfrac{\rho_{CO_2} \, u_z \, d_p}{\mu_{CO_2} \, (1-\epsilon)}$
- *Schmidt*: $\text{Sc} = \dfrac{\mu_{CO_2}}{\rho_{CO_2} \, D_{i,m}}$
- *Peclet aksial*: $\text{Pe}_z = \dfrac{u_z \, L}{D_{ax}}$
- *Peclet radial*: $\text{Pe}_r = \dfrac{u_z \, d_p}{D_{rad}}$

di mana $D_{ax}$ dan $D_{rad}$ adalah koefisien dispersi aksial dan radial.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi pemodelan aksisimetrik pada unit SFE mengikuti SOP berlapis sebagai berikut:

**Tahap 1 – Karakterisasi Biomassa.** Penentuan kadar air ($<10\%\,w/w$), ukuran partikel ($d_p = 0.3\text{–}1.5\,\text{mm}$ via *laser diffraction*), densitas bulk ($\rho_b$), porositas $\epsilon = 1 - \rho_b/\rho_{true}$, dan permeabilitas $K_{perm}$ (Kozeny–Carman):

$$K_{perm} = \frac{d_p^2 \, \epsilon^3}{180 \, (1-\epsilon)^2}$$

**Tahap 2 – Pengukuran Korelasi Kelarutan.** Kalibrasi parameter Chrastil $(a, b, c)$ untuk cannabinoid target pada rentang 10–30 MPa dan 313–333 K menggunakan *solubility cell* statis (Sovová dkk., 2020).

**Tahap 3 – Diskritisasi CFD.** Pembuatan geometri aksisimetrik 2D dengan *mesh* terstruktur quadrilateral ($N_r \approx 80$, $N_z \approx 200$) dan refinement di zona dekat dinding. Penggunaan solver *pressure-based* dengan skema SIMPLE atau PISO, *second-order upwind* untuk momentum dan energi, dan toleransi konvergensi $10^{-6}$.

**Tahap 4 – Validasi dengan Data Eksperimental.** Perbandingan profil konsentrasi aksial dan yield kumulatif terhadap data eksperimental laboratorium (misalnya, selekstaktor 1 L) menggunakan metrik RMSE dan *R²* minimal 0.95.

**Tahap 5 – Scale-up dan Optimasi Multi-objektif.** Eksekusi DOE (*Design of Experiments*) Taguchi atau Response Surface Methodology (RSM) dengan variabel: tekanan ($p$), suhu ($T$), laju alir CO₂ ($Q$), waktu ekstraksi ($t$), dan ukuran partikel ($d_p$). Optimasi ganda: maksimasi yield $\eta$ (%) dan minimasi SEC.

**Tahap 6 – Integrasi Profil Termal.** Penyertaan model perpindahan panas Toledo–del Valle (2023) untuk memprediksi deviasi suhu selama *pressurization* (5–15 menit) dan *depressurization* (3–8 menit), dengan validasi termo-kopel tipe-K pada dinding dan *centerline* vessel.

**Diagram Alir Proses (SFE Industri):**

```
[Raw Cannabis] → [Grinding & Sieving] → [Drying (vacuum 40°C)]
        ↓
[Loading into Extractor Vessel (aksisimetrik)]
        ↓
[Pressurization → CO₂ mencapai p, T setpoint]   ← Model Toledo-del Valle
        ↓
[Static Soak (5–30 min)] → [Dynamic Extraction (CO₂ flow Q)]
        ↓
[CO₂ + Solut] → [Separator 1 (p₁ = 6 MPa)] → [Separator 2 (p₂ = 2 MPa)]
        ↓
[Crude Cannabis Oil] ← [Decarboxylation (opsional 110°C, 30 min)]
        ↓
[Winterization, Distillation, QC (HPLC, GC-MS)]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit Ekstraksi (Kasus Industri Skala Menengah)

Misalkan sebuah fasilitas ekstraksi dioperasikan dengan parameter berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Tekanan operasi $p$ | 25 | MPa |
| Suhu operasi $T$ | 328 | K (55°C) |
| Diameter vessel $D$ | 0.30 | m |
| Tinggi bed $L$ | 1.20 | m |
| Laju alir CO₂ $Q$ | 8 | kg/jam |
| Diameter partikel $d_p$ | 0.0008 | m |
| Porositas bed $\epsilon$ | 0.42 | – |
| Permeabilitas $K_{perm}$ | $2.5 \times 10^{-9}$ | m² |
| Massa biomassa $m_{bio}$ | 30 | kg |
| Densitas CO₂ @ 25 MPa, 55°C | 871.2 | kg/m³ |
| Viskositas CO₂ | $9.87 \times 10^{-5}$ | Pa·s |

### 4.2 Perhitungan Kecepatan Interstitial dan