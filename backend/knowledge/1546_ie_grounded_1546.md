# 1546 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol—khususnya ekstraksi minyak kanabis (*Cannabis sativa* L.)—telah mengalami transformasi signifikan sejak diterapkannya kerangka regulasi *Good Manufacturing Practices* (GMP) untuk produk farmasi berbasis kanabinoid. Metode konvensional seperti ekstraksi pelarut organik (etanol, heksana, kloroform) menghadapi kendala serius terkait toksisitas residu, degradasi termal senyawa termolabil seperti *cannabidiol* (CBD) dan *tetrahydrocannabinol* (THC), serta jejak lingkungan yang tinggi. Sebagai respons, teknologi *Supercritical Fluid Extraction* (SFE) dengan CO₂ telah menjadi *gold standard* dalam rantai pasok *cannabis-derived pharmaceutical ingredients* (CDPI), baik karena profil keamanan (GRAS—*Generally Recognized as Safe*) maupun kemampuan selektivitasnya yang tinggi melalui penyetelan tekanan dan suhu (Thanachai Obchoei & Wiroj Limtrakarn, 2024).

Obchoei dan Limtrakarn (2024) dalam terbitan *International Journal of Thermofluids* menyoroti bahwa pada pabrik ekstraksi berskala industri, perilaku fluida di dalam *packed-bed extractor* sangat menentukan yield, konsumsi energi spesifik, dan konsistensi mutu bets. Mereka mengajukan **model aliran aksisimetrik** (*axisymmetric flow model*) yang merepresentasikan kolom ekstraktor berbentuk silinder secara dua-dimensi radial-aksial, mengakomodasi distribusi kecepatan, tekanan, dan konsentrasi溶质 yang tidak homogen di sepanjang radius. Sebelumnya, Toledo & del Valle (2023) dalam *The Journal of Supercritical Fluids* telah mendemonstrasikan bahwa **efek perpindahan panas** pada tahap *pressurization*, *extraction*, dan *depressurization* secara dominan mengendalikan durasi siklus total dan profil termal internal bed; tanpa akomodasi perpindahan panas yang akurat, prediksi yield menjadi bias hingga 18–25%.

Secara ekonomis, pasar global ekstrak kanabis medis diproyeksikan mencapai USD 8,7 miliar pada 2028 dengan CAGR 16,4%. Margin operasional sangat sensitif terhadap parameter proses: kenaikan suhu dari 40°C ke 60°C pada tekanan 300 bar dapat mengubah yield minyak total dari 18% menjadi 24% (basis berat kering), namun sekaligus menaikkan rasio THC terhadap CBD karena dekarboksilasi parsial. Urgensi rekayasa industri di sini adalah membangun model matematis yang mampu mengkuantifikasi trade-off ini secara deterministik sehingga operator dapat mengoptimasi *specific energy consumption* (kWh/kg ekstrak) dan *material utilization efficiency* secara bersamaan. Integrasi model aksisimetrik dengan model perpindahan panas Toledo & del Valle menjadi fondasi penting untuk desain *digital twin* ekstraktor SFE-CO₂ modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pembangkit Fluida Superkritis

CO₂ superkritis didefinisikan sebagai keadaan di mana $T > T_c = 304{,}13\ \text{K}$ dan $P > P_c = 73{,}8\ \text{bar}$, sehingga batas fasa cair–gas lenyap. Densitasnya mendekati fase cair ($\rho \approx 600\text{–}900\ \text{kg/m}^3$), sementara viskositas kinematiknya mendekati fase gas ($\nu \approx 10^{-7}\ \text{m}^2/\text{s}$), menghasilkan daya solvasi tinggi dan difusivitas溶质 yang superior (Obchoei & Limtrakarn, 2024).

### 2.2 Model Aliran Aksisimetrik dalam Packed-Bed

Untuk kolom silinder dengan sumbu $z$ dan radius $r$, hipotesis aksisimetrik menyatakan bahwa seluruh variabel hanya bergantung pada $(r,z,t)$. Persamaan kontinuitas (konservasi massa) fluida adalah:

$$
\frac{\partial \varepsilon \rho_f}{\partial t} + \frac{1}{r}\frac{\partial (r \rho_f u_r)}{\partial r} + \frac{\partial (\rho_f u_z)}{\partial z} = 0
$$

dengan $\varepsilon$ porositas bed (umumnya $\varepsilon \approx 0{,}4$ untuk partikel kanabis giling), $\rho_f$ densitas fluida, dan $u_r, u_z$ komponen kecepatan radial dan aksial. Karena bilangan Reynolds partikel $Re_p = \rho_f u d_p / \mu_f < 10$ pada operasi tipikal, hukum Darcy-Forchheimer digunakan:

$$
-\frac{\partial P}{\partial z} = \frac{\mu_f}{K} u_z + \beta_F \rho_f u_z^2
\quad\text{dan}\quad
u_r = -\frac{K_r}{\mu_f}\frac{\partial P}{\partial r}
$$

dengan permeabilitas intrinsik $K \approx 10^{-9}\ \text{m}^2$, koefisien inersia Forchheimer $\beta_F$, dan $K_r$ permeabilitas arah radial. Untuk dinding impermeable, syarat batas radial $u_r|_{r=R} = 0$.

### 2.3 Konservasi Momentum dan Energi

Karena kecepatan rendah, momentum radial sering disederhanakan menjadi **persamaan Laplace** untuk tekanan:

$$
\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial P}{\partial r}\right) + \frac{\partial^2 P}{\partial z^2} = 0
$$

Persamaan energi untuk fase fluida dan padat digabungkan oleh koefisien perpindahan panas efektif $h_{eff}$ (Toledo & del Valle, 2023):

$$
\varepsilon \rho_f c_{p,f} \left(\frac{\partial T_f}{\partial t} + u_z \frac{\partial T_f}{\partial z}\right) = h_{eff}\, a_v (T_s - T_f) + k_{eff}\nabla^2 T_f
$$

$$
(1-\varepsilon)\rho_s c_{p,s} \frac{\partial T_s}{\partial t} = h_{eff}\, a_v (T_f - T_s)
$$

dengan $a_v$ luas spesifik partikel per volume bed ($\text{m}^{-1}$).

### 2.4 Persamaan Perpindahan Massa Solute (Cannabinoid)

Untuk komponen cannabinoid $i$ (CBD, THC, CBN) dalam matriks padat, model *shrinking core* atau *broken-and-intact cell* lazim digunakan. Versi disederhanakan oleh Obchoei & Limtrakarn (2024) adalah:

$$
\rho_s (1-\varepsilon) \frac{\partial q_i}{\partial t} = k_s a_s (q_i^* - q_i)
$$

dengan $q_i$ konsentrasi solute di padatan, $q_i^*$ konsentrasi kesetimbangan yang bergantung pada $P$ dan $T$. Konsentrasi fluida $c_i$ mengikuti:

$$
\varepsilon \frac{\partial c_i}{\partial t} + u_z \frac{\partial c_i}{\partial z} - D_{ax} \frac{\partial^2 c_i}{\partial z^2} = k_f a_v (c_i^* - c_i)
$$

dengan $D_{ax}$ dispersi aksial dan $k_f$ koefisien transfer massa konvektif yang dikorelasikan sebagai $Sh = 2{,}0 + 1{,}8\, Re_p^{0{,}5} Sc^{0{,}33}$.

### 2.5 Persamaan Keadaan (Equation of State)

Untuk menghitung $\rho_f$ dan $\mu_f$ pada kondisi superkritis, persamaan **Peng–Robinson** digunakan:

$$
P = \frac{RT}{V_m - b} - \frac{a\, \alpha(T)}{V_m(V_m + b) + b(V_m - b)}
$$

dengan parameter $a, b$ yang merupakan fungsi dari $T_c, P_c,$ dan faktor aksentrik $\omega$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses Ekstraksi SFE-CO₂

```
[1] Penyiapan Bahan Baku
       ↓ (size reduction, moisture 8-12%)
[2] Loading ke Extraction Vessel
       ↓
[3] Pressurization  →  [4] Static Soak  →  [5] Dynamic Extraction
       ↓                                          ↓
   (Heat-up via jacketed                  (Recirculation CO₂,
    heater, ramp P hingga                  ΔP separator)
    200-350 bar)                                      ↓
       ↓                                  [6] Depressurization
[Sistem Kontrol SCADA: P, T, ṁ, dp/dt]         ↓
                                       [7] Collection Vessel
                                              ↓
                                       [8] Post-processing
                                          (winterisasi, distilasi)
```

### 3.2 SOP Tiga Tahap (berdasarkan Toledo & del Valle, 2023)

**Tahap I — Pressurization** (5–15 menit): CO₂ dialirkan dengan laju massa terkontrol $\dot{m} = K_v \sqrt{\rho_f(P_{up} - P_{down})}$ hingga target tekanan tercapai. Pemanasan awal menggunakan jaket pemanas dengan daya $Q_{jacket} = m_s c_{p,s}(T_{set} - T_{initial})/t_{ramp}$.

**Tahap II — Extraction** (60–180 menit): Dilakukan dalam mode *dynamic* dengan rasio solvent-to-feed (S/F) 20–40. Parameter operasional optimal menurut Obchoei & Limtrakarn (2024): $T = 40\text{–}60°C$, $P = 250\text{–}350\ \text{bar}$, $\dot{m}_{CO_2} = 1\text{–}5\ \text{kg/menit}$.

**Tahap III — Depressurization** (3–8 menit): Tekanan diturunkan secara eksponensial $P(t) = P_{final} + (P_{initial} - P_{final})e^{-t/\tau}$ dengan konstanta waktu $\tau$ yang dirancang agar laju pendinginan tidak melebihi 5°C/menit guna mencegah thermal shock pada cannabinoid.

### 3.3 Arsitektur Sistem Pengendalian

Sistem SCADA memantau empat *critical process parameters* (CPP): tekanan, suhu bed, laju alir massa CO₂, dan gradien tekanan antar-separator. *Process Analytical Technology* (PAT) seperti FTIR *in-line* digunakan untuk monitoring konsentrasi cannabinoid secara real-time.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit Ekstraktor

Ambil unit komersial dengan kapasitas sebagai berikut:

| Parameter | Nilai |
|---|---|
| Diameter kolom $D$ | 0,20 m |
| Tinggi bed $L$ | 1,20 m |
| Massa umpan kanabis | 5,0 kg (kering) |
| Porositas $\varepsilon$ | 0,42 |
| Densitas partikel $\rho_s$ | 380 kg/m³ |
| Diameter partikel $d_p$ | 1,5 mm |

### 4.2 Penentuan Kondisi Operasi Target

Target kondisi superkritis: $T = 50°C = 323{,}15\ \text{K}$ dan $P = 300\ \text{bar}$. Menggunakan persamaan Peng–Robinson, diperoleh secara iteratif:

$$
\rho_f \approx 830\ \text{kg/m}^3, \quad \mu_f \approx 7{,}2 \times 10^{-5}\ \text{Pa·s}
$$

### 4.3 Perhitungan Laju Alir CO₂ dan Kecepatan Superfisial

Untuk laju alir massa $\dot{m}_{CO_2} = 3{,}0\ \text{kg/menit} = 0{,}05\ \text{kg/s}$, luas penampang kolom:

$$
A = \frac{\pi D^2}{4} = \frac{\pi (0{,}20)^2}{4} = 3{,}142 \times 10^{-2}\ \text{m}^2
$$

Kecepatan superfisial:

$$
u_{sup} = \frac{\dot{m}}{\rho_f A} = \frac{0{,}05}{830 \times 3{,}142 \times 10^{-2}} = 1{,}92 \times 10^{-3}\ \text{m/s}
$$

Bilangan Reynolds partikel:

$$