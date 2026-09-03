# 1740 — Jaringan Sensor Nirkabel untuk Proses Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Freeze-Drying Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan struktural yang semakin kompleks dalam manufaktur produk biologis, vaksin, dan API (Active Pharmaceutical Ingredient) termolabil. Liofilisasi atau *freeze-drying* masih menjadi metode dehidrasi dominan untuk menstabilkan lebih dari 50% produk biofarmasi yang disetujui FDA pada dekade terakhir (Meza‐Galvan, Strongrich, & Darwish, 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)). Proses ini melibatkan tiga tahap kritis secara sekuensial: pembekuan (*freezing*), pengeringan primer (*primary drying*) melalui sublimasi, dan pengeringan sekunder (*secondary drying*) melalui desorpsi, yang secara kumulatif menentukan kualitas, stabilitas jangka panjang, dan bioavailabilitas produk akhir.

Secara operasional, satu siklus liofilisasi batch pada skala pilot hingga produksi dapat berlangsung antara 24–72 jam dengan konsumsi energi spesifik 1,2–2,5 kWh per vial pada pengeringan primer, tergantung formulasi dan konfigurasi vial (Artusio, Barresi, & Pisano, 2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)). Deviasi suhu produk hanya sebesar 2–3°C di atas ambang *collapse temperature* atau *eutectic temperature* dapat menyebabkan kerugian batch bernilai ratusan ribu hingga jutaan dolar AS pada lini produksi vaksin parenteral.

Kerangka *Process Analytical Technology* (PAT) yang dipelopori FDA sejak 2004 mendorong adopsi *real-time monitoring* multivariat untuk memahami, mengontrol, dan memperbaiki proses manufaktur secara berkelanjutan. Dalam konteks ini, Meza‐Galvan et al. (2026) menyoroti keterbatasan arsitektur instrumentasi wired konvensional yang menghambat skalabilitas, mobilitas sensor, dan granularitas spasial-temporal data proses. Jaringan Sensor Nirkabel (*Wireless Sensor Networks*/WSN) muncul sebagai enabler teknologi yang memungkinkan penempatan puluhan hingga ratusan node sensor secara *non-invasive* di dalam ruang liofilizer, memberikan visibilitas proses yang sebelumnya tidak ekonomis. Urgensi industrialnya bersifat tiga dimensi: (i) peningkatan *batch yield* melalui deteksi dini anomali; (ii) kepatuhan terhadap pedoman *Quality by Design* (QbD) ICH Q8(R2); dan (iii) reduksi *cycle time* melalui optimasi dinamis berbasis data suhu dan tekanan *in-situ*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi Liofilisasi *Quasi-Steady State*

Model matematis baku yang diadopsi Meza‐Galvan et al. (2026) untuk menginterpretasi data sensor WSN adalah persamaan *quasi-steady state* Pikal yang menggabungkan resistansi panas dan massa secara seri. Laju sublimasi $\dot{m}$ (kg·s⁻¹) dinyatakan sebagai:

$$\dot{m} = \frac{A_p \left[ P_{w,sat}(T_p) - P_c \right]}{R_p}$$

dengan $A_p$ adalah luas sublimasi interfacial (m²), $P_{w,sat}(T_p)$ tekanan uap jenuh es pada suhu produk $T_p$ (Pa), $P_c$ tekanan ruang (chamber pressure, Pa), dan $R_p$ resistansi terhadap aliran uap melalui lapisan kering (*dried layer*, m²·Pa·s·kg⁻¹). Tekanan uap jenuh es mengikuti persamaan Goff–Gratch atau bentuk eksponensial yang lebih ringkas:

$$P_{w,sat}(T_p) = P_0 \cdot \exp\left(-\frac{\Delta H_{sub}}{R_u}\left(\frac{1}{T_p}-\frac{1}{T_0}\right)\right)$$

dengan $\Delta H_{sub} \approx 51.100$ J·mol⁻¹ pada 0°C dan $R_u = 8{,}314$ J·mol⁻¹·K⁻¹.

### 2.2 Neraca Energi dan Kopling Panas–Massa

Keseimbangan energi di permukaan sublimasi menghasilkan kopling antara fluks panas dari rak (*shelf*) dengan laju sublimasi:

$$\dot{m} \cdot \Delta H_{sub} = A_v \cdot K_v \cdot (T_s - T_p)$$

dengan $A_v$ luas vial efektif, $K_v$ koefisien transfer panas vial (W·m⁻²·K⁻¹), dan $T_s$ suhu rak. Eliminasi $\dot{m}$ dari kedua persamaan menghasilkan persamaan desain yang menjadi basis algoritma *Smart Freeze-Drying* yang dibahas Artusio et al. (2026):

$$T_p = T_s - \frac{\Delta H_{sub}}{K_v}\cdot \frac{P_{w,sat}(T_p)-P_c}{R_p \cdot A_p/A_v}$$

Persamaan ini diselesaikan secara iteratif (misalnya Newton–Raphson) untuk menentukan $T_p$ pada set-point $T_s$ dan $P_c$ tertentu, memungkinkan kontrol umpan balik berbasis WSN.

### 2.3 Kinetika Desorpsi Pengeringan Sekunder

Untuk pengeringan sekunder, model Arrhenius orde-satu menggambarkan fraksi air terikat $C_w$ terhadap waktu:

$$\frac{dC_w}{dt} = -k_0 \exp\left(-\frac{E_a}{R_u T_b}\right) \cdot C_w$$

dengan $k_0$ faktor pra-eksponensial, $E_a$ energi aktivasi desorpsi (kJ·mol⁻¹, tipikal 40–80), dan $T_b$ suhu vial pada tahap sekunder.

### 2.4 Model Propagasi Radio untuk WSN dalam Liofilizer

Saluran radio di dalam ruang liofilizer bersifat *dense multipath* karena geometri logamnya. Model *log-distance path loss* yang digunakan Meza‐Galvan et al. (2026) adalah:

$$L_{dB}(d) = L_0 + 10 n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $L_0$ rugi-rugi referensi pada jarak $d_0 = 1$ m, $n$ eksponen rugi jalur (3,0–4,5 di dalam chamber baja), dan $X_\sigma$ variabel acak Gaussian shadowing. Persamaan *Friis* menentukan *link budget* efektif untuk memastikan ketersediaan packet pada sensor suhu berjenis thermocouple-nirkabel:

$$P_r = P_t + G_t + G_r - 20\log_{10}\left(\frac{4\pi d f}{c}\right)$$

dengan $f$ frekuensi operasi (2,4 GHz pada ZigBee/802.15.4), $c$ kecepatan cahaya, dan $G_t, G_r$ penguatan antena.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti arsitektur berlapis yang terdiri atas: (i) *lapis persepsi* (sensor thermocouple tipe-T, pirani, dan kapasitif), (ii) *lapis jaringan mesh* (gateway dengan redundansi topologi *cluster tree*), (iii) *lapis middleware* (OPC-UA untuk interoperabilitas dengan sistem SCADA/DCS), dan (iv) *lapis analitik* (modul PAT dengan soft-sensor berbasis Kalman Filter dan *multivariate statistical process control*/MSPC).

SOP implementasi mengikuti langkah sistematis berikut, dengan rujukan pada metodologi yang dilaporkan Meza‐Galvan et al. (2026) dan Artusio et al. (2026):

1. **Pra-kualifikasi Sensor:** Kalibrasi thermocouple nirkabel terhadap NIST-traceable standar pada rentang $-50°C$ hingga $+60°C$ dengan akurasi target $\pm 0{,}3°C$.
2. **Karakterisasi Saluran Radio:** Pemetaan RSSI (*Received Signal Strength Indicator*) dan *packet delivery ratio* pada posisi tipikal vial di setiap rak; mitigasi *multipath* melalui antena patch terarah.
3. **Pemetaan Suhu Pra-proses (*Thermal Mapping*):** Penempatan node sensor pada posisi *edge-of-shelf*, *center*, dan *corner* untuk membentuk grid 3D yang representatif terhadap profil suhu intrinsik chamber.
4. **Integrasi PAT:** Penyelarasan data WSN dengan data tekanan chamber, laju sublimasi gravimetrik, dan keluaran *Tunable Diode Laser Absorption Spectroscopy* (TDLAS) untuk mengukur $P_{w,sat}(T_p)$ secara *in-situ*.
5. **Loop Kontrol Tertutup (*Smart Freeze-Drying*):** Algoritma MPC (*Model Predictive Control*) berbasis soft-sensor WSN menyesuaikan $T_s$ dan $P_c$ secara dinamis mengikuti batas desain *design space* yang telah tervalidasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Liofilisasi vaksin mRNA dalam vial 10 mL pada lyophilizer produksi berisi 7 rak, total 10.500 vial, dengan luas sublimasi efektif $A_p = 6{,}0 \times 10^{-4}$ m² per vial. Asumsi parameter:

- $T_s = -15°C$ (rak), $P_c = 10$ Pa
- $R_p = 1{,}5 \times 10^4$ m²·Pa·s·kg⁻¹ (formulasi 5% sukrosa + 1% mRNA)
- $K_v = 8{,}0$ W·m⁻²·K⁻¹
- $\Delta H_{sub} = 2{,}83 \times 10^6$ J·kg⁻¹

**Langkah 1:** Hitung $P_{w,sat}(T_p)$ pada tebakan awal $T_p = -25°C = 248{,}15$ K.

$$P_{w,sat} = 611{,}2 \cdot \exp\left(-\frac{51100}{8314}\left(\frac{1}{248{,}15}-\frac{1}{273{,}15}\right)\right) \approx 76{,}8 \text{ Pa}$$

**Langkah 2:** Hitung gradien tekanan.

$$\Delta P