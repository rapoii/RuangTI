# 2250 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Cannabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dari biomassa nabati telah mengalami transformasi signifikan dalam dua dekade terakhir, didorong oleh permintaan global akan produk berbasis cannabinoid (THC, CBD, CBG) untuk aplikasi farmasi, nutraceutical, kosmetik, dan rekreasional yang telah dilegalisasi di berbagai yurisdiksi. Ekstraksi dengan fluida superkritis CO₂ (Supercritical Fluid Extraction — SFE) muncul sebagai teknologi unggulan dibandingkan metode konvensional seperti ekstraksi pelarut organik (etanol, heksana), karena meninggalkan residu pelarut, bersifat ramah lingkungan (GRAS — *Generally Recognized As Safe*), dan memungkinkan selektivitas proses melalui pengendalian tekanan serta temperatur secara presisi.

Thanachai Obchoei dan Wiroj Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti urgensi pengembangan model aliran aksisimetrik untuk memprediksi kinerja ekstraktor SFE-CO₂ pada kolom berisi partikel biomassa cannabis. Permasalahan inti yang mereka identifikasi adalah heterogenitas distribusi fluida di dalam reaktor silinder, yang menimbulkan gradien konsentrasi solute secara radial dan aksial, serta menurunkan yield dan selektivitas jika tidak dikendalikan. Ketidakseragaman ini secara langsung berdampak pada produktivitas fasilitas ekstraksi bernilai investasi jutaan dolar dan menjadi titik kritis dalam desain Plant (lihat [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Di sisi lain, Felipe R. Toledo dan José M. del Valle (2023) dalam *The Journal of Supercritical Fluids* volume 200, menunjukkan bahwa perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization* menentukan laju pelarutan cannabinoid dan profil kinetika yield. Mereka memvalidasi model perpindahan panas dengan eksperimen menggunakan substrat nabati dan melaporkan deviasi prediksi-teori di bawah 8% (lihat [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Gabungan kedua riset ini menjadi pilar utama dalam optimalisasi desain reaktor SFE-CO₂ untuk produksi minyak cannabis dengan kemurnian tinggi.

Dari perspektif Teknik Industri, masalah ini bukan sekadar fenomena termodinamika dan transport, melainkan masalah optimasi proses, kapasitas produksi, dan konsumsi energi spesifik. Setiap kg biomassa cannabis membutuhkan energi antara 5–15 MJ untuk proses SFE-CO₂ tergantung pada target yield; oleh karena itu, model prediktif yang andal menjadi *decision-support tool* yang krusial bagi perancang pabrik dan operator proses.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Sifat Termodinamika CO₂ pada Kondisi Superkritis

CO₂ mencapai kondisi superkritis saat temperatur $T > T_c = 304{,}13\text{ K}$ ($31{,}0\,^\circ\text{C}$) dan tekanan $P > P_c = 73{,}8\text{ bar}$. Pada kondisi ini, fluida memiliki densitas mirip cairan dan viskositas mirip gas, menjadikannya pelarut ideal untuk cannabinoid non-polar hingga semi-polar. Densitas CO₂ superkritis $\rho_{CO_2}$ umumnya dihitung dengan persamaan keadaan Span–Wagner atau disederhanakan dengan korelasi:

$$\rho_{CO_2} = \rho_{CO_2}(T, P)$$

Untuk rentang operasi umum SFE ($T = 313$–$353\text{ K}$, $P = 150$–$350\text{ bar}$), densitas $\rho_{CO_2}$ berkisar antara $300$–$900\text{ kg/m}^3$.

### 2.2 Model Kelarutan Chrastil

Kelarutan solute $c^*$ dalam CO₂ superkritis secara klasik dimodelkan dengan persamaan Chrastil (1982), yang menghubungkan konsentrasi kelarutan terhadap densitas fluida dan temperatur absolut:

$$c^* = \rho_{CO_2}^k \cdot \exp\!\left(\frac{a}{T} + b\right)$$

di mana $a = \dfrac{\Delta H_{sol}}{R}$ (dengan $\Delta H_{sol}$ entalpi pelarutan dan $R = 8{,}314\text{ J/mol·K}$), $b$ adalah konstanta empiris, dan $k$ merepresentasikan jumlah molekul CO₂ yang mengelilingi satu molekul solute (asosiasi). Bentuk linier untuk regresi data eksperimental adalah:

$$\ln c^* = k \ln \rho_{CO_2} + \frac{a}{T} + b$$

### 2.3 Persamaan Pengatur Aliran Aksisimetrik dalam Media Berpori

Model Obchoei & Limtrakarn (2024) menggunakan geometri silinder 2-D aksisimetrik. Sistem persamaan pengatur terdiri atas kontinuitas, momentum (Darcy–Forchheimer), energi, dan spesies massa dalam koordinat silinder $(r, z)$.

**Persamaan Kontinuitas:**

$$\frac{\partial (\varepsilon \rho_f)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho_f u_r)}{\partial r} + \frac{\partial (\rho_f u_z)}{\partial z} = 0$$

dengan $\varepsilon$ porositas bed (umumnya $0{,}35$–$0{,}45$), $u_r$ dan $u_z$ komponen kecepatan intrinsik fluida dalam arah radial dan aksial.

**Persamaan Momentum (Darcy–Forchheimer):**

$$\frac{\partial (\varepsilon \rho_f u_i)}{\partial t} + \frac{\partial (\varepsilon \rho_f u_i u_j)}{\partial x_j} = -\varepsilon \frac{\partial P}{\partial x_i} - \frac{\mu}{K}u_i - \frac{F_c}{\sqrt{K}}\rho_f u_i |u_j|$$

dengan $\mu$ viskositas dinamis CO₂, $K$ permeabilitas bed (Kozeny–Carman: $K = \dfrac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2}$), dan $F_c$ koefisien inersia Forchheimer ($\approx 1{,}75/\sqrt{150\,\varepsilon^3}$).

**Persamaan Energi:**

$$\left[\varepsilon \rho_f c_{p,f} + (1-\varepsilon)\rho_s c_{p,s}\right]\frac{\partial T}{\partial t} + \rho_f c_{p,f} u_j \frac{\partial T}{\partial x_j} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right)$$

dengan $k_{eff}$ konduktivitas efektif bed yang menggabungkan kontribusi konduksi statis dan dispersi termal.

**Persamaan Spesies Massa (Transfer Massa Solute):**

$$\varepsilon \frac{\partial c}{\partial t} + u_j \frac{\partial c}{\partial x_j} = D_{ax}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial c}{\partial r}\right) + \frac{\partial^2 c}{\partial z^2}\right] + (1-\varepsilon)\rho_s k_f a_p (c_s^* - c)$$

dengan $D_{ax}$ koefisien dispersi aksial, $k_f$ koefisien transfer massa eksternal, $a_p$ luas spesifik partikel, dan $c_s^*$ konsentrasi kelarutan pada permukaan partikel.

### 2.4 Model Perpindahan Panas Toledo & del Valle (2023)

Toledo & del Valle memformulasi neraca energi unsteady pada dinding dan interior ekstraktor:

$$\rho_w c_{p,w} V_w \frac{dT_w}{dt} = h_i A_i (T_b - T_w) - h_o A_o (T_w - T_\infty)$$

dengan indeks $w$ dinding, $b$ fluida di dalam bed, $i$ sisi dalam, dan $o$ sisi luar. Mereka melaporkan bahwa bilangan Biot $Bi = \dfrac{h_i r_i}{k_{eff}}$ menentukan apakah rezim perpindahan panas dikontrol oleh resistansi internal atau eksternal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri SFE-CO₂ untuk cannabis mengikuti tahapan sistematis berikut, yang sejalan dengan rekomendasi desain pada kedua paper acuan:

### 3.1 Diagram Alir Proses (SOP)

```
[1] Pre-treatment biomassa
       ↓ (grinding, sieving, d_p = 0,5–1,5 mm)
[2] Pengisian kolom ekstraktor
       ↓ (porositas target ε = 0,40)
[3] Pressurization (tahap 1)
       ↓ (P: atmosferik → 250 bar dalam 5–15 menit)
[4] Pemanasan awal ke T operasi (313–333 K)
       ↓
[5] Ekstraksi dinamis (tahap 2)
       ↓ (Q_CO2 = 0,5–5 kg/jam; mode co-current)
[6] Pemisahan multi-stage (separator 1 & 2)
       ↓ (P1 = 60 bar, P2 = 30 bar)
[7] Depressurization (tahap 3)
       ↓ (recovery CO₂ liquified → recycle)
[8] Post-processing minyak (winterisasi, deklorofilasi)
       ↓
[9] QC (HPLC cannabinoid profile)
```

### 3.2 SOP Detail Tahap Ekstraksi

| Parameter | Set-point | Toleransi | Metode Kontrol |
|-----------|-----------|-----------|----------------|
| Tekanan ekstraksi | 250 bar | ±5 bar | PID via pompa membran |
| Temperatur bed | 313 K | ±1 K | Heater jacket + sensor PT100 |
| Laju alir CO₂ | 2,5 kg/jam | ±0,1 kg/jam | Mass flow controller (MFC) |
| Rasio S/F (solvent/feed) | 30:1 | – | Akumulasi flow integrator |
| Waktu ekstraksi | 180 menit | ±10 min | PLC timer |

### 3.3 Arsitektur Teknologi dan Sensor

Sistem modern mengintegrasikan sensor tekanan (akurasi 0,1%), temperatur (akurasi 0,1 K), flow meter Coriolis, dan *in-line NIR spectrometer* untuk monitoring yield secara real-time. Data dikirimkan ke *Distributed Control System* (DCS) dengan sampling rate ≥1 Hz untuk implementasi model digital twin berbasis persamaan (2)-(5) di atas.

### 3.4 Standardisasi

Proses mengikuti standar ASME BPE (Bioreaktor & Pharmaceutical Equipment), GMP (Good Manufacturing Practice), dan untuk pasar Uni Eropa, regulasi Novel Food. Sertifikasi GACP untuk input biomassa wajib dipenuhi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Kasus

Misalkan sebuah fasilitas SFE-CO₂ berkapasitas sedang akan memproses **1 batch = 10 kg biomassa cannabis** (kandungan cannabinoid target 15% berat kering). Parameter operasi:

- Tekanan: $P = 250\text{ bar}$
- Temperatur: $T = 318\text{ K}$ ($45\,^\circ\text{C}$)
- Laju alir CO₂: $\dot{m}_{CO_2} = 2{,}5\text{ kg/jam}$
- Diameter partikel rerata: $d_p = 1$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
