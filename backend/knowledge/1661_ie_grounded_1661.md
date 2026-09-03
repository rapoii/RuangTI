# 1661 — Perilaku Pembentukan Kerak (Scaling) dan Karakterisasinya pada Autoclave dalam Pelindian Bijih Nikel Laterit pada Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) melonjak tajam seiring transisi elektrifikasi kendaraan listrik dan penetrasi baterai litium-ion NMC/NCA. Lebih dari 60% cadangan nikel dunia berupa bijih laterit, yang tidak dapat diproses secara ekonomis melalui teknologi pirometalurgi konvensional karena kadar Ni rendah (0,8–2,5%) dan kadar MgO/Fe tinggi. Teknologi dominan yang dipilih adalah *High-Pressure Acid Leaching* (HPAL), yang beroperasi pada suhu 240–270 °C, tekanan 35–50 bar, dan atmosfer inert (oksigen parsial terkontrol) dalam autoclave horizontal multi-kompartemen (Dickson *et al.*, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Permasalahan operasional terbesar pada fasilitas HPAL—seperti yang dialami pabrik PT Halmahera Persada Lygend, Coral Bay, Ramu NiCo, dan Huayou Cobalt—adalah pembentukan kerak (*scaling*) pada dinding autoclave, pipa transfer slurry, kompartemen separator, dan internal *agitator*. Kerak tersebut utamanya tersusun dari campuran *basic iron sulfate* (Fe(OH)SO₄, Fe₃(SO₄)₂(OH)₅·2H₂O), alunit (KAl₃(SO₄)₂(OH)₆), jarosit (KFe₃(SO₄)₂(OH)₆), gipsum (CaSO₄·2H₂O), dan hematit amorf (Fe₂O₃). Akumulasi kerak setebal 5–80 mm selama satu *campaign* produksi (40–60 hari) menyebabkan (i) degradasi koefisien perpindahan panas (U) hingga 40–65%, (ii) peningkatan konsumsi energi spesifik agitasi dan steam, (iii) downtime tak terjadwal untuk *acid boil-out*, dan (iv) kerugian produksi yang ditaksir mencapai USD 2–8 juta per kejadian (*cleaning shutdown*) per reaktor (Dickson *et al.*, 2026).

Studi oleh Andrameda *et al.* (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menunjukkan bahwa residu HPAL yang mengandung sulfur tinggi (≥ 2,8% S) memerlukan tahap *roasting-reduction* dengan penambahan *desulfurization agent* (CaO atau Na₂CO₃) untuk menekan aktivitas sulfat residu yang menjadi *precursor* kerak dalam siklus operasional berikutnya. Sinergi antara karakterisasi mineralogi kerak, optimasi parameter desulfurisasi, dan kontrol suhu/tahan proses menjadi pilar strategis untuk keberlanjutan HPAL. Urgensi rekayasa sistem ini tidak hanya bersifat teknis, namun juga memiliki dimensi lingkungan—karena *cleaning shutdown* menghasilkan 1.500–3.000 m³ larutan asam bekas (*spent acid*) yang harus dinetralisasi sebelum *tailing disposal*. Dalam konteks Industri 4.0, integrasi *real-time scaling sensors*, *predictive maintenance*, dan *digital twin* terhadap autoclave HPAL menjadi agenda strategis yang akan dibahas dalam modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dengan Shrinking Core Model

Pelindian bijih laterit di dalam autoclave HPAL mengikuti *shrinking core model* (SCM) dengan resistansi kombinasi difusi lapisan produk dan reaksi kimia permukaan. Untuk partikel spherical dengan jari-jari awal $r_0$ dan jari-jari inti tak terlarutkan $r_c$, waktu pelindian total $t$ diberikan oleh Levenspiel (1999) yang disesuaikan untuk sistem HPAL:

$$t = \frac{\rho_B \cdot r_0}{b \cdot C_{A,s}} \left[ \frac{1}{3} \left(1 - \frac{r_c}{r_0}\right) + \frac{D_A}{k_s r_0} \left(1 - \frac{r_c}{r_0}\right) + \frac{D_A}{2 D_{eA}} \left(1 - \frac{r_c^2}{r_0^2}\right) \right] \tag{1}$$

dengan $\rho_B$ densitas molar padatan, $b$ koefisien stoikiometri reaksi, $C_{A,s}$ konsentrasi H₂SO₄ di permukaan, $k_s$ konstanta laju reaksi intrinsik (m/s), $D_A$ koefisien difusi bulk, dan $D_{eA}$ difusi efektif dalam lapisan produk.

### 2.2 Laju Pembentukan Kerak (*Scaling Rate*)

Kinetika deposisi kerak pada dinding autoclave mengikuti persamaan induksi-nukleasi-kristalisasi yang dirangkum oleh Dickson *et al.* (2026):

$$\frac{dm_s}{dt} = k_s^* \cdot (C_{sat} - C_{bulk})^n \cdot e^{-E_a/RT} \cdot A_{wall} - k_{rem} \cdot \tau_w^{0{,}5} \tag{2}$$

dengan $m_s$ massa kerak terakumulasi (kg), $k_s^*$ konstanta laju deposisi intrinsik ($k_{s}^* \approx 1{,}8 \times 10^{-4}$ kg·m⁻²·s⁻¹ untuk Fe₃(SO₄)₂(OH)₅·2H₂O), $C_{sat}$ konsentrasi saturasi, $C_{bulk}$ konsentrasi bulk, $n$ orde nukleasi (umumnya 2 untuk mekanisme heterogen), $E_a$ energi aktivasi (85–125 kJ/mol), $R$ konstanta gas universal (8,314 J/mol·K), dan $k_{rem}$ konstanta ablasi oleh tegangan geser dinding $\tau_w$.

### 2.3 Neraca Energi Autoclave

Untuk autoclave kompartemen ganda dengan steam jacket, neraca energi tunak (*steady-state*) diekspresikan:

$$Q_{steam} = m_s^{slurry} \cdot c_p^{slurry} \cdot (T_{out} - T_{in}) + \Delta H_{rxn} \cdot \dot{n}_{Ni} + U_{overall} \cdot A_{wall} \cdot (T_{wall} - T_{process}) + Q_{loss} \tag{3}$$

Koefisien perpindahan panas *overall* $U_{overall}$ terdegradasi seiring akumulasi kerak dengan resistansi termal seri:

$$\frac{1}{U_{overall}} = \frac{1}{h_i} + \frac{\delta_{steel}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o} \tag{4}$$

dengan $\delta_{scale}$ ketebalan kerak dan $k_{scale}$ konduktivitas termal kerak (0,18–0,42 W/m·K untuk Fe-based scale, dibandingkan baja karbon $k_{steel} \approx 45$ W/m·K).

### 2.4 Persamaan Desulfurisasi Residu HPAL (Andrameda *et al.*, 2024)

Reaksi desulfurisasi residu HPAL dengan CaO pada suhu 600–900 °C:

$$CaSO_4 \cdot 2H_2O + 2\,C \rightarrow CaS + 2\,CO_2 + 2\,H_2O \quad (\Delta G^\circ_{900°C} = -128{,}4 \text{ kJ/mol}) \tag{5}$$

$$CaSO_4 \cdot 2H_2O + CaO \rightarrow Ca_2SO_4 \cdot 2H_2O + \tfrac{1}{2}\,O_2 \quad \text{(oksidatif pada }T > 1100°C\text{)} \tag{6}$$

Konversi sulfur mengikuti model Avrami–Erofeev:

$$-\ln(1 - X_S) = (k_d \cdot t)^m \tag{7}$$

dengan $X_S$ fraksi sulfur yang dilepas, $k_d$ konstanta laju desulfurisasi ($k_d = 4{,}2 \times 10^{-3}$ s⁻¹ pada 800 °C), dan $m = 1{,}15$ untuk nukleasi dwidimensional.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi *scaling* mengikuti *SOP HPAL Rev. 4* yang terdiri atas delapan fase rekayasa:

**Fase 1 – Karakterisasi Umpan.** Analisis XRF, XRD, dan SEM-EDS terhadap bijih laterit untuk menentukan rasio Fe/Ni, kadar MgO (penentu konsumsi asam), dan distribusi ukuran partikel (target $d_{80} \leq 75\,\mu m$). Standar acuan: ISO 9516 (kimia multi-elem) dan ASTM E112 (analisis butir).

**Fase 2 – Preparasi Slurry.** Pencampuran bijih dengan asam sulfat 98% pada *solid-liquid ratio* (S/L) 1:3,5–1:4,5 dalam *repulping tank* ber-Agitator axial-flow. Penambahan *dispersant* (polyacrylate 0,05%) dan *antifoam agent* (silicone-based 30 ppm).

**Fase 3 – Pre-heating Cascade.** Pemanasan slurry bertahap dalam 3 *heater train* (low-pressure flash steam recovery) hingga 220 °C dengan laju kenaikan suhu tidak melebihi 4 °C/menit untuk menghindari *thermal shock cracking* pada lapisan refraktori.

**Fase 4 – Reaksi HPAL di Autoclave.** Empat kompartemen serial dengan kondisi operasi:
- *Kompartemen 1 (Primary Leach):* $T = 250\pm 2$ °C, $P = 40$ bar, $\tau = 60$ menit, duty agitator 65 kW/m³.
- *Kompartemen 2–3 (Secondary Leach):* $T = 255$ °C, $P = 42$ bar, $\tau = 45$ menit.
- *Kompartemen 4 (Conditioning):* Penambahan flash steam recycle, $T = 245$ °C, $\tau = 30$ menit.

**Fase 5 – Flash Cooling & Neutralisasi.** Tekanan diturunkan secara bertingkat (3 stage flash) untuk meregenerasi steam (energi recovery 38%) dan mendinginkan slurry ke 95 °C sebelum netralisasi dengan batu kapur (CaCO₃).

**Fase 6 – CCD (Counter-Current Decantation).** Pemisahan liquor kaya Ni dari *tailings* padat dalam 6 stage thickener, dengan *underflow* density 55% w/w.

**Fase 7 – Mixed Sulfide Precipitation (MSP).** Precipitasi Ni/Co sebagai MS dengan H₂S pada $pH = 2{,}8$.

**Fase 8 – Pengendalian Kerak & Prediksi Lifespan.** Implementasi *On-stream XRF analyzer*, *wall temperature thermocouple grid*, dan *digital twin* berbasis Persamaan (2)–(4) untuk memprediksi $\delta_{scale}$ dan merencanakan *acid boil-out* ketika $U_{overall}$ turun > 25% dari baseline.

Prosedur *acid boil-out* (SOP-CB-2026): autoclave diisi dengan H₂SO₄ 8% pada 95 °C, sirkulasi selama 6 jam dengan agitator pada 30% duty, diikuti *neutralization wash* dan *passivation* dengan larutan tannin 0,3%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Umpan (