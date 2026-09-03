# 1802 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction, SFE) menggunakan CO₂ telah menjadi tulang punggung teknologi pemisahan bernilai tinggi di industri fitofarmaka, nutraseutika, dan kosmeseutika global. Khusus untuk ekstraksi minyak kanabis (*Cannabis sativa* L.) yang kaya akan kanabinoid seperti tetrahidrokanabinol (THC), kanabidiol (CBD), dan kanabigerol (CBG), proses ini menggantikan pelarut organik konvensional seperti etanol, heksana, dan kloroform yang memiliki toksisitas residual dan проблем regulasi keamanan pangan (Obchoei & Limtrakarn, 2024; DOI: 10.1016/j.ijft.2024.100682).

Konteks industri global menunjukkan urgensi strategis yang sangat tinggi. Pasar legal kanabis medis dan rekreasional melampaui USD 30 miliar pada 2023, dengan CAGR >20% (Grand View Research). Dalam rantai pasok ini, efisiensi ekstraksi secara langsung menentukan margin operasional, mengingat biaya bahan baku biomassa kering dapat mencapai 60–70% dari total biaya produksi (COGS). Yield ekstraksi, kemurnian kanabinoid, dan waktu siklus (*turnaround time*) menjadi Key Performance Indicators (KPI) kritis yang menentukan daya saing.

Permasalahan teknis yang diidentifikasi Obchoei & Limtrakarn (2024) adalah ketidakhomogenan distribusi fluida di dalam *extractor vessel* berbentuk silinder. Aliran CO₂ superkritis pada tekanan 25–35 MPa dan suhu 308–343 K cenderung membentuk profil kecepatan non-uniform, menciptakan *channeling* dan *bypass* yang menurunkan efisiensi kontak padat-cair. Lebih lanjut, perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization* secara fundamental memengaruhi solubilitas CO₂ dan selektivitas ekstrak (Toledo & del Valle, 2023; DOI: 10.1016/j.supflu.2023.106046). Tanpa model termodinamika dan fluida yang akurat, scale-up dari skala laboratorium (0,5–2 L) ke kapasitas industri (200–1000 L) menjadi penuh risiko, seperti yang diderita banyak fasilitas komersial di Kanada, Kolombia, dan Swiss pada fase awal industrialisasi 2018–2022.

Urgensi operasional ini diperparah oleh tuntutan *good manufacturing practice* (GMP) dari FDA, EMA, dan Health Canada yang memerlukan prediktabilitas proses dan validasi cleaning, sehingga pendekatan berbasis model matematis (*model-based process design*) menjadi kebutuhan fundamental, bukan sekadar opsional.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konservasi untuk Aliran Aksisimetrik

Karena geometri *extractor vessel* berupa silinder vertikal dengan sumbu-z sebagai aksis simetri, model dikembangkan dalam koordinat silindris (r, z). Persamaan kontinuitas untuk fluida superkritis kompresibel:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

dengan $\rho$ densitas CO₂ superkritis (kg/m³), $v_r$ dan $v_z$ komponen kecepatan radial dan aksial (m/s).

Persamaan momentum Navier-Stokes dalam bentuk aksisimetrik, dengan asumsi sumbu radial dominan dan aliran tunak (*steady-state*):

$$\rho\left(v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z \tag{2}$$

dengan $p$ tekanan (Pa), $\mu$ viskositas dinamis (Pa·s), dan $g_z$ percepatan gravitasi sepanjang sumbu-z.

### 2.2 Model Perpindahan Panas

Merujuk pada Toledo & del Valle (2023), energi selama tahap *pressurization*, *extraction*, dan *depressurization* dimodelkan melalui:

$$\rho C_p \frac{DT}{Dt} = k\nabla^2 T + \Phi_v + \dot{q}_{rxn} \tag{3}$$

dengan $C_p$ kapasitas panas spesifik (J/kg·K), $k$ konduktivitas termal (W/m·K), $\Phi_v$ fungsi disipasi viskos, dan $\dot{q}_{rxn}$ sumber panas reaksi (negligible untuk ekstraksi fisik). Untuk aliran dalam media berpori (packed bed biomassa), persamaan energi dua-fasa:

$$\varepsilon \rho_f C_{p,f} \frac{\partial T_f}{\partial t} + (1-\varepsilon)\rho_s C_{p,s}\frac{\partial T_s}{\partial t} + \rho_f C_{p,f}(v_z)\frac{\partial T_f}{\partial z} = k_{eff}\frac{\partial^2 T}{\partial z^2} + U a_v (T_s - T_f) \tag{4}$$

dengan $\varepsilon$ porositas packed bed, $U$ koefisien perpindahan panas overall (W/m²·K), dan $a_v$ luas permukaan spesifik partikel per volume (m²/m³).

### 2.3 Persamaan keadaan CO₂ Superkritis

Densitas CO₂ pada kondisi superkritis dihitung menggunakan persamaan keadaan Peng-Robinson (PR-EOS):

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)} \tag{5}$$

$$a(T) = 0.45724\frac{R^2 T_c^2}{P_c}\left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2 \tag{6}$$

$$b = 0.07780\frac{RT_c}{P_c} \tag{7}$$

dengan $T_c = 304.13$ K dan $P_c = 7.377$ MPa untuk CO₂.

### 2.4 Model Solubilitas Chrastil

Kelompok Obchoei & Limtrakarn mengadopsi model Chrastil untuk memprediksi solubilitas kanabinoid dalam CO₂ superkritis:

$$\ln(s) = k\ln(\rho) + \frac{a}{T} + b \tag{8}$$

dengan $s$ solubilitas (g kanabinoid/kg CO₂), $k$ adalah parameter asosiasi (umumnya 2–4 untuk kanabinoid), $a$ merepresentasikan entalpi solvasi, dan $b$ konstanta empiris.

### 2.5 Persamaan Laju Perpindahan Massa

Untuk perpindahan massa eksternal dari permukaan partikel ke fluida bulk:

$$Sh = \frac{k_c d_p}{D_{AB}} = 2 + 0.6\, Re^{1/2} Sc^{1/3} \tag{9}$$

dengan $Sh$ Sherwood number, $k_c$ koefisien perpindahan massa (m/s), $d_p$ diameter partikel, $D_{AB}$ difusivitas biner, $Re = \rho v d_p / \mu$ Reynolds number, dan $Sc = \mu / (\rho D_{AB})$ Schmidt number.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan prosedur yang divalidasi oleh Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023), SOP industri untuk ekstraksi minyak kanabis skala komersial (kapasitas 100–500 L) terdiri atas tujuh tahap kritis:

**Tahap 1: Persiapan Biomassa.** Bunga kanabis kering (*cannabis flower*) digiling hingga ukuran partikel 1–3 mm dengan moisture content 8–12%. Partikel terlalu halus menyebabkan *channeling* dan pressure drop berlebihan; partikel terlalu kasar menurunkan luas kontak.

**Tahap 2: Loading dan Sealing.** Biomassa dimasukkan ke *extractor vessel* dengan porositas packed bed target $\varepsilon = 0.35$–$0.45$. Rasio massa biomassa terhadap volume vessel dirancang sedemikian sehingga menghasilkan kapasitas muat 200–350 kg/m³.

**Tahap 3: Pressurization.** CO₂ dipompa dari reservoir (-20°C, 5 MPa) oleh *diaphragm compressor* hingga mencapai tekanan operasi 25–30 MPa. Laju pressurisasi divariasikan 0.5–2 MPa/menit untuk menghindari *thermal shock* pada dinding vessel.

**Tahap 4: Pemanasan Awal (Heating Stage).** Vessel dipanaskan oleh jaket pemanas (steam atau electrical heater) hingga suhu operasi 313–333 K. Profil suhu dimonitor secara real-time di tiga lokasi aksial (top, middle, bottom) untuk validasi model perpindahan panas (Toledo & del Valle, 2023).

**Tahap 5: Ekstraksi Dinamis (Dynamic Extraction).** CO₂ superkritis dialirkan dengan debit 5–25 kg/jam (rasio solvent-to-feed 20:1 hingga 50:1). Pada fase ini, profil aksisimetrik aliran menjadi krusial — gradien tekanan dan suhu sepanjang sumbu-z harus dijaga ΔP/Δz ≤ 0.05 MPa/m.

**Tahap 6: Separasi (Recovery).** Larutan CO₂+kanabinoid masuk ke *separator vessel* pada tekanan 5–8 MPa dan suhu 313 K, di mana kanabinoid mengendap (*precipitate*) karena penurunan solubilitas drastis.

**Tahap 7: Depressurization dan Recycle.** CO₂ dikembalikan ke reservoir melalui *expander* untuk efisiensi energi. Total siklus: 4–8 jam per batch.

Arsitektur kontrol PID dengan *cascade loop* pada tekanan dan suhu, serta *feedforward* terhadap flow rate CO₂, direkomendasikan untuk menjaga steady-state.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Spesifikasi studi kasus:** Vessel volume V = 100 L, biomassa kanabis m_b = 25 kg, kondisi operasi T = 323 K (50°C), P = 28 MPa, flow rate CO₂ ṁ = 8 kg/jam.

**Langkah 1: Perhitungan Densitas CO₂ Superkritis.**

Menggunakan PR-EOS dengan parameter CO₂: T_c = 304.13 K, P_c = 7.377 MPa, R = 8.314 J/mol·K, M_CO₂ = 0.04401 kg/mol.

Faktor acentrik ω = 0.225, maka:
$$\kappa = 0.37464 + 1.54226\omega - 0.26992\omega^2 = 0.5578$$

$$a(T) = 0.45724 \cdot \frac{(8.314)^2 (304.13)^2}{7.377 \times 10^6}\left[1 + 0.5578\left(1 - \sqrt{323/304.13}\right)\right]^2$$

Perhitungan iteratif menghasilkan molar volume V_m = 7.79 × 10⁻⁵ m