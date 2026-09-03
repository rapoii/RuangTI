# 2170 — Pemodelan Aliran Aksisimetrik dan Perpindahan Kalor pada Ekstraksi Minyak Kanabis dengan Fluida Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitokimia global tengah mengalami transformasi paradigmatik yang dipicu oleh tiga kekuatan simultan: liberalisasi regulasi kanabis medis di lebih dari 50 negara (termasuk Thailand, Kanada, Jerman, dan beberapa negara bagian Amerika Serikat), meningkatnya permintaan konsumen terhadap produk *clean-label* bebas pelarut organik residual, serta ketatnya ambang batas kontaminan yang ditetapkan oleh *United States Pharmacopeia* (USP) dan *European Pharmacopoeia* (Ph. Eur.). Dalam konteks ini, **ekstraksi fluida superkritikal dengan CO₂ (SC-CO₂)** muncul sebagai teknologi *gold-standard* karena mampu meninggalkan residu pelarut (<5 ppm), beroperasi pada suhu rendah yang mempertahankan termolabilitas kanabinoid (THC, CBD, CBG, CBN), dan memungkinkan tuning selektivitas melalui manipulasi tekanan serta suhu operasi. Menurut Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids*, pasar global ekstrak kanabis diproyeksikan menembus **USD 23,7 miliar** pada 2030 dengan CAGR 17,4%, sehingga optimalisasi proses menjadi imperatif strategis bagi *Contract Manufacturing Organizations* (CMO) dan *Good Manufacturing Practice* (GMP) extractor.

Secara operasional, ekstraktor SC-CO₂ industri memiliki volume 5–1.200 liter dan dioperasikan pada tekanan 250–350 bar dengan suhu 40–70 °C. Kompleksitas fenomenanya bersumber dari interaksi multi-fisika: hidrodinamika fluida superkritik dalam *packed-bed* biomassa kanabis, perpindahan kalor *transient* selama tahap *pressurization* dan *depressurization*, kesetimbangan fase padat-cair untuk溶ut kanabinoid, serta termodinamika real-gas CO₂ yang memerlukan persamaan keadaan non-ideal. Obchoei dan Limtrakarn (2024) secara eksplisit menekankan bahwa **model aliran aksisimetrik**—yang mengeksploitasi simetri geometri silinder ekstraktor—menyediakan reduksi dimensional yang signifikan secara komputasional tanpa mengorbankan akurasi prediksi profil konsentrasi dan suhu radial-aksial. Studi Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* melengkapinya dengan model perpindahan kalor rigorous yang memperhitungkan efek *Joule-Thomson inversion* CO₂, konduksi *transient* melalui dinding bejana bertekanan, dan konveksi paksa dalam lapisan batas termal.

Urgensi rekayasa sistem industri pada modul ini berpijak pada empat pain point aktual di lantai produksi: (i) yield aktual industri yang hanya mencapai 60–75% dari potensi yield stoikiometrik karena *channeling* dan *bypass flow* dalam packed-bed, (ii) konsumsi energi spesifik 2,5–4,2 kWh/kg biomassa yang didominasi oleh kompresi CO₂ dan stage *heat-up/cool-down*, (iii) ketidakhomogenan kualitas ekstrak antar-batch yang menghambat konsistensi farmasetikal, dan (iv) belum adanya standar SNI/ISO khusus untuk desain dan validasi proses SC-CO₂ kanabis. Dokumen Knowledge Base ini akan membedah secara sistematis model matematis, metodologi implementasi, dan studi kasus kuantitatif untuk menjawab tantangan tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Kontinuitas dan Momentum Aksisimetrik

Model Obchoei dan Limtrakarn (2024) bekerja dalam koordinat silinder $(r, \theta, z)$ dengan asumsi **axisymmetry** ($\partial/\partial\theta = 0$), *steady-state*, dan *incompressible-like* untuk fase superkritik. Persamaan kontinuitas dituliskan sebagai:

$$\frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

di mana $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial, sementara $\rho$ adalah densitas CO₂ superkritik. Persamaan momentum (Navier-Stokes) untuk komponen aksial dalam packed-bed biomassa dihitung menggunakan **persamaan Darcy-Forchheimer-Brinkman** yang dimodifikasi:

$$\rho \left( v_z \frac{\partial v_z}{\partial z} + v_r \frac{\partial v_z}{\partial r} \right) = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial v_z}{\partial r} \right) + \frac{\partial^2 v_z}{\partial z^2} \right] - \frac{\mu}{\kappa} v_z - \frac{C_F}{\sqrt{\kappa}} \rho v_z^2$$

dengan $\mu$ viskositas dinamik CO₂, $\kappa$ permeabilitas packed-bed, dan $C_F$ koefisien inersia Forchheimer. Untuk komponen radial, persamaan serupa diaplikasikan dengan gradien tekanan radial yang biasanya jauh lebih kecil namun signifikan di dekat dinding.

### 2.2 Persamaan Energi dan Model Perpindahan Kalor

Toledo dan del Valle (2023) mengembangkan persamaan energi dua域 (*two-domain*) yang mencakup solid biomassa dan fluida superkritik:

$$\varepsilon \rho_f c_{p,f} \left( v_z \frac{\partial T_f}{\partial z} + v_r \frac{\partial T_f}{\partial r} \right) = k_{e,f} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial T_f}{\partial r} \right) + \frac{\partial^2 T_f}{\partial z^2} \right] + h_v (T_s - T_f)$$

$$(1-\varepsilon) \rho_s c_{p,s} \frac{\partial T_s}{\partial t} = k_{e,s} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial T_s}{\partial r} \right) + \frac{\partial^2 T_s}{\partial z^2} \right] - h_v (T_s - T_f) + \rho_s \Delta H_s \frac{\partial q}{\partial t}$$

di mana $\varepsilon$ adalah porositas packed-bed, $h_v$ koefisien perpindahan kalor volumetrik antara fase padat-cair, $\Delta H_s$ entalpi desorpsi solut, dan $q$ konsentrasi kanabinoid dalam biomassa (kg solut/kg biomassa).

### 2.3 Persamaan Keadaan dan Termodinamika Real-Gas

Densitas dan viskositas CO₂ superkritik dihitung melalui persamaan keadaan **Peng-Robinson**:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a(T)$ dan $b$ yang bergantung pada temperatur kritik $T_c = 304{,}13$ K, tekanan kritik $P_c = 73{,}80$ bar, dan faktor acentrik $\omega = 0{,}225$. Pada kondisi operasi tipikal ($T = 323$ K, $P = 300$ bar), diperoleh $\rho \approx 830$ kg/m³ dan $\mu \approx 7{,}2 \times 10^{-5}$ Pa·s.

### 2.4 Model Perpindahan Massa Kanabinoid

Laju desorpsi THC/CBD dari matriks biomassa dimodelkan dengan persamaan **Linear Driving Force (LDF)**:

$$\frac{\partial q}{\partial t} = k_s (q^* - q)$$

dengan $q^*$ konsentrasi kesetimbangan yang bergantung pada solubilitas $y^* = \gamma(T,P) \cdot x$ dan koefisien transfer massa $k_s = 0{,}05 - 0{,}20$ min⁻¹ untuk sistem kanabis-CBD menurut data eksperimental yang dikutip Obchoei dan Limtrakarn (2024).

### 2.5 Korelasi Perpindahan Kalor Eksternal

Toledo dan del Valle (2023) menggunakan korelasi Nu untuk packed-bed silinder:

$$Nu = \frac{h_v d_p}{k_f} = 2{,}0 + 1{,}1 Re_p^{0{,}6} Pr^{1/3}$$

dengan bilangan Reynolds partikel $Re_p = \rho v d_p / \mu$ dan Prandtl number $Pr = \mu c_{p,f} / k_f$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses dan Diagram Alir

Implementasi industri mengikuti diagram alir standar berikut (disintesis dari kedua paper):

```
[Biomassa Kanabis] → [Grinding & Sieving (d_p = 0,5-1,2 mm)]
         ↓
   [Loading Ekstraktor Silinder (V = 5-1000 L, ID = 100-400 mm)]
         ↓
   [Tahap 1: Pressurization (P: 0 → 300 bar, t: 0-180 s)]
         ↓
   [Tahap 2: Soak/Static Extraction (t: 30-60 min, T = 50°C)]
         ↓
   [Tahap 3: Dynamic Extraction (Q_CO2 = 1-5 kg/min, t: 60-180 min)]
         ↓
   [Tahap 4: Depressurization (P: 300 → 50 bar, t: 30-120 s)]
         ↓
   [Separasi Cascade (S1: 90 bar/45°C; S2: 60 bar/30°C; S3: 35 bar/20°C)]
         ↓
   [Winterization & Decarboxylation (opsional)]
         ↓
   [Produk: Ekstrak Kanabinoid Full-Spectrum]
```

### 3.2 Prosedur Operasional Standar (SOP) Tervalidasi

**Fase Pra-Produksi (GMP-compliant):**
1. Validasi CO₂ food-grade (purity ≥99,9%) sesuai *International Society for Pharmaceutical Engineering* (ISPE) Baseline Guide.
2. Kalibrasi sensor tekanan (akurasi ±0,5% FS) dan termokopel Tipe-K (±0,5°C).
3. *Sanitization* ekstraktor dengan etanol 70% dan *steam-in-place* (SIP) pada 121°C selama 30 menit.

**Fase Ekstraksi (sesuai protokol Obchoei & Limtrakarn 2024):**
1. **Inisialisasi termal:** Pre-heat jacket hingga $T_{set} = 50 ± 1$ °C minimal 15 menit untuk stabilisasi gradien radial.
2. **Pressurization terkontrol:** Implementasikan ramp tekanan $\partial P/\partial t = 1{,}67$ bar/s untuk menghindari *thermal shock* pada dinding bejana ASME Section VIII Div.