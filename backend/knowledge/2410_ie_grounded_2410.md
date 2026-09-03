# 2410 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction/SFE) menggunakan CO₂ telah menjadi teknologi pemisahan hijau yang dominan dalam industri fitofarmaka, nutraseutika, dan bioteknologi karena sifatnya yang non-toksik, mudah diatur, dan residue-free. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* memperkenalkan model aliran aksisimetrik (axisymmetric flow model) untuk memprediksi yield dan kinetika ekstraksi minyak kanabis (Cannabis sativa L.) — senyawa bernilai tinggi seperti cannabidiol (CBD) dan tetrahydrocannabinol (THC) yang kini menjadi bahan baku industri farmasi, kosmetik, dan makanan fungsional bernilai pasar global逾USD 60 miliar per 2024.

Konteks industri: pasar legal kanabis global diproyeksikan tumbuh pada CAGR 25–30% (Grand View Research, 2024), sehingga efisiensi proses ekstraksi berdampak langsung pada margin operasional. Ekstraksi konvensional dengan pelarut organik (etanol, heksana) meninggalkan residu pelarut yang tidak dapat diterima untuk aplikasi farmasi (sesuai USP ⟨467⟩ dan ICH Q3C). SFE-CO₂ menawarkan alternatif karena CO₂ pada kondisi superkritis (P > 73,8 bar, T > 31,1 °C) memiliki difusivitas tinggi dan viskositas rendah, memungkinkan penetrasi ke dalam matriks padat tanaman. Namun, tantangan operasional muncul dari perilaku fasa termodinamika CO₂ yang sensitif terhadap tekanan dan suhu, serta fenomena perpindahan panas transien selama tahap *pressurization*, *extraction*, dan *depressurization* yang dikuantifikasi secara eksplisit oleh Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids*.

Urgensi rekayasa: tanpa model termodinamika dan hidrodinamika yang valid, operator industri mengoperasikan ekstraktor secara konservatif (over-design) — menggunakan tekanan lebih tinggi dan waktu tinggal lebih lama dari yang diperlukan, yang meningkatkan biaya energi kompresi (CAPEX pompa CO₂ dapat mencapai 40% dari total investasi). Obchoei dan Limtrakarn (2024) menjawab tantangan ini dengan membangun model 2D-CFD aksisimetrik yang menangkap gradien konsentrasi radial-aksial dalam reaktor unggun tetap (packed-bed extractor), sementara Toledo dan del Valle (2023) melengkapi dengan sub-model perpindahan panas yang memvalidasi dinamika suhu selama perubahan tekanan mendadak. Kombinasi keduanya memungkinkan *digital twin* proses SFE yang akurat untuk optimalisasi operasional dan penskalaan dari lab-scale (100 mL) ke produksi komersial (100–1000 L).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Asumsi Model

Reaktor SFE dimodelkan sebagai silinder vertikal dengan sumbu simetri di $z$ dan koordinat radial $r$. Domain komputasi $(r, z)$ menggunakan kondisi batas:

- **Inlet** ($z = 0$): laju alir massa masuk $G_{in}$ (kg/m²·s), konsentrasi solute masuk $C_{in}$
- **Outlet** ($z = L$): tekanan keluar $P_{out}$, diasumsikan fully-developed flow
- **Dinding** ($r = R$): perpindahan panas konveksi ke jacket dengan koefisien $h_w$ dan suhu $T_w$
- **Simetri** ($r = 0$): $\partial \phi / \partial r = 0$

### 2.2 Persamaan Kontinuitas dan Momentum (Darcy-Forchheimer)

Aliran CO₂ superkritis melalui unggun biomassa padat dimodelkan dengan persamaan momentum modified Darcy-Forchheimer:

$$\frac{\partial}{\partial t}(\rho v_i) + \frac{\partial}{\partial x_j}(\rho v_i v_j) = -\frac{\partial P}{\partial x_i} + \frac{\partial \tau_{ij}}{\partial x_j} - \frac{\mu}{k_p} v_i - \beta \rho |v| v_i + \rho g_i$$

di mana $k_p$ adalah permeabilitas unggun (m²), $\beta$ adalah koefisien inersia Forchheimer, dan $\rho$ adalah densitas CO₂ yang bergantung pada P dan T melalui persamaan keadaan Span-Wagner (Obchoei & Limtrakarn, 2024). Persamaan kontinuitas:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0$$

### 2.3 Persamaan Perpindahan Massa (Species Transport)

Konsentrasi solute $C_s$ (kg solute/m³ pelarut) mengikuti persamaan konveksi-difusi dengan sumber dari matriks padat:

$$\varepsilon \frac{\partial C_s}{\partial t} = \nabla \cdot (D_{eff} \nabla C_s) - \nabla \cdot (\vec{v} C_s) + (1-\varepsilon) J_s$$

dengan $\varepsilon$ porositas unggun, $D_{eff}$ koefisien dispersi aksial-radial, dan $J_s$ fluks desorpsi solute dari partikel padat (kg/m³ solid·s) yang dimodelkan dengan linear driving force (LDF):

$$J_s = k_f a_p (C_s^* - C_s)$$

di mana $k_f$ adalah koefisien transfer massa eksternal, $a_p$ luas spesifik partikel (m²/m³), dan $C_s^*$ konsentrasi kesetimbangan yang dihitung dari:

$$C_s^* = \frac{x_s P}{RT} \cdot \frac{\phi_s}{\phi_f}$$

dengan $\phi$ adalah koefisien fugacity dari EOS Peng-Robinson.

### 2.4 Persamaan Energi (Enthalpy Balance)

Untuk menangkap efek perpindahan panas selama pressurization dan depressurization (Toledo & del Valle, 2023):

$$\rho c_p \frac{\partial T}{\partial t} = \nabla \cdot (k_{eff} \nabla T) - \rho c_p \vec{v} \cdot \nabla T + \mu \Phi + Q_{Joule-Thomson} - \Delta H_s \cdot J_s$$

di mana $\mu \Phi$ adalah disipasi viskos, $\Delta H_s$ entalpi desorpsi solute, dan $Q_{J-T}$ adalah efek pendinginan Joule-Thomson yang signifikan saat CO₂ mengalami dekompresi:

$$Q_{J-T} = -\rho c_p \mu_{JT} \left(\frac{\partial P}{\partial t}\right)_h$$

dengan $\mu_{JT}$ koefisien Joule-Thomson untuk CO₂ (≈ 1,1 K/bar pada 40°C, 200 bar).

### 2.5 Kondisi Tunak vs Transien

Selama tahap *extraction* steady, $\partial/\partial t = 0$ dan sistem menjadi elliptic. Namun saat *pressurization* (Δt ≈ 30–60 s), $Q_{J-T}$ menurunkan suhu lokal hingga 5–8°C (Toledo & del Valle, 2023), mengubah kelarutan solute secara drastis.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses SFE-CO₂ Industri

```
[Bahan Baku Kanabis] → [Grinding & Sieving] → [Loading Ekstraktor]
         ↓
[Pressurization (CO₂ → P_target)]  → [Heating (T_target)]
         ↓
[Static Extraction (t_soak)] → [Dynamic Extraction (CO₂ flow)]
         ↓
[Separator 1: P₁=90 bar] → [Separator 2: P₂=50 bar] → [Separator 3: P₃<20 bar]
         ↓
[Collected Crude Oil] → [Winterization] → [Decarboxylation] → [Distillasi]
```

### 3.2 SOP Implementasi Model Aksisimetrik

1. **Karakterisasi bahan baku**: kadar air <10%, ukuran partikel 0,3–0,8 mm (ayakan Tyler 20–48), densitas unggun terukur 400–550 kg/m³.
2. **Validasi properti termodinamika CO₂**: gunakan EOS Span-Wagner untuk range P=100–350 bar, T=308–333 K dengan validasi NIST REFPROP 10.0.
3. **Discretization numerik**: mesh struktur quad/hex dengan refined near-wall (y+ < 1), time-step 0,1–1,0 s untuk fase transien, solver SIMPLE/COUPLED pada ANSYS Fluent atau OpenFOAM `rhoPimpleFoam`.
4. **Validasi eksperimental**: bandingkan kurva *yield vs. time* model dengan data lab pada 150, 250, dan 350 bar.
5. **Analisis sensitivitas**: identifikasi parameter dominan (P, T, $k_p$, $D_{eff}$) via ANOVA atau Sobol index.
6. **Penskalaan (scale-up)**: gunakan constant *pressure drop ratio* (ΔP/L) ≈ 0,5 bar/cm sebagai kriteria geometris.

### 3.3 SOP Operasional (GMP-compliant per EU-GMP Annex 11)

- Pre-startup checks: leak test (soap bubble + helium mass spec), valve lineup LOTO
- Pressurization rate: 5–10 bar/min untuk menghindari thermal shock dan degradasi termal cannabinoid
- Hold-time extraction: 60–180 menit pada target P dan T (mengikuti rekomendasi Obchoei & Limtrakarn, 2024)
- CO₂回收: separator cascade dengan回收率 > 95% melalui expansion valve isenthalpic
- CIP/SIP: sanitary design dengan EHEDG Doc. 2 dan 8 compliance

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Input

Ekstraktor komersial skala pilot: $L = 1{,}0$ m, $R = 0{,}075$ m, massa biomassa $m_b = 12$ kg kanabis kering (kadar air 8%), $\varepsilon = 0{,}42$. Target operasional: $P_{op} = 250$ bar, $T_{op} = 318$ K (45 °C), laju CO₂ $Q_{CO_2} = 8$ kg/jam.

### 4.2 Properti CO₂ pada Kondisi Operasi

Dari EOS Peng-Robinson pada 250 bar, 318 K:
- $\rho_{CO_2} = 871{,}3$ kg/m³
- $\mu_{CO_2} = 9{,}42 \times 10^{-5}$ Pa·s
- $k_{CO_2} = 0{,}139$ W/(m·K)
- $c_{p,CO_2} = 1456$ J/(kg·K)

### 4.3 Perhitungan Permeabilitas Unggun (Kozeny-Carman)

$$k_p = \frac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2} = \frac{(5 \times 10^{-4})^2 (0{,}42)^3}{180(0{,}58)^2} = 1{,}78 \times 10^{-9} \text{ m}^2$$

### 4.4 Kecepatan Interstitial

Luas penampang: $A = \pi R^2 = \pi (0{,}075)^2 = 1{,}767 \times 10^{-2}$ m²

Kecepatan superficial: $u_s = \frac{Q_{CO_2}}{\rho_{CO_2} A} = \frac{8/(3600)}{871{,}3 \times 1{,}767 \times 10^{-2}} = 1{,}45 \times 10^{-4}$ m/s

Kecepatan interstitial: $v = u_s / \varepsilon = 1{,}45 \times 10^{-4} / 0{,}42 = 3{,}45 \times 10^{-4}$ m/s

### 4.5 Pressure Drop (Darcy-Forchheimer)

Untuk verifikasi operasional: $\Delta P = \frac{L}{k_p}(\mu v + \beta \rho v^2)$. Dengan $\beta \approx 0{,}55$:

$$\Delta P = \frac{1{,}0}{1{,}78 \times 10^{-9}} \left[(9{,}42 \times 10^{-5})(3{,}45 \times 10^{-4}) + 0{,}55 \times 871{,}3 \times (3{,}45 \times 10^{-