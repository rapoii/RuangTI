# 2220 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Pemantauan Proses Kritis Berbasis PAT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi modern yang digunakan untuk menstabilkan produk biologis, vaksin, antibodi monoklonal, dan API termosensitif. Meza‐Galvan, Strongrich, dan Darwish (2026) dalam bab monografinya di *Process Analytical Technology for Pharmaceutical Freeze‐Drying* menegaskan bahwa proses ini menyumbang **40–60% dari total biaya produksi** untuk banyak produk biofarmasi modern karena durasi siklus yang panjang (umumnya 24–72 jam per batch) dan konsumsi energi yang masif pada tahap *primary drying* (sublimasi) dan *secondary drying* (desorpsi) (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Urgensi penerapan Jaringan Sensor Nirkabel (WSN) muncul dari empat tantangan operasional konkret. Pertama, **heterogenitas vial-to-vial**: dalam satu *batch* berisi 10.000–20.000 vial, suhu produk pada vial tepi dapat berbeda 2–5°C dari vial tengah, namun thermocouple berkabel hanya mampu memantau kurang dari 10 vial representatif karena port terbatas pada dinding ruang pengering. Kedua, **intervensi manual yang merusak sterilitas**: pemasangan thermocouple berkabel memerlukan tutup vial khusus (*stoppering in-process*) yang menambah kompleksitas lini aseptik. Ketiga, **kebutuhan PAT (*Process Analytical Technology*) real-time** sesuai inisiatif FDA 2004: pengendalian mutu berbasis atribut kritis (*Critical Quality Attributes*, CQA) menuntut data *batch*-wide dengan resolusi temporal < 30 detik. Keempat, **efisiensi energi dan waktu siklus**: optimasi gradien suhu shelf berbasis data WSN terbukti memangkas waktu *primary drying* 15–30%, menghemat biaya operasional signifikan.

Artusio, Barresi, dan Pisano (2026) melengkapi perspektif ini dengan menunjukkan bahwa teknologi WSN—seperti *Tempris* (transponder SAW), *LyoRx*, dan sistem berbasis RFID—telah matang untuk diterapkan di lini produksi GMP, asalkan memenuhi standar validasi 21 CFR Part 11 dan kalibrasi *traceable* ke NIST (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)). Investasi CAPEX untuk retrofit satu liofilizer skala industri (≥ 100 kg es/batch) dengan 50–100 sensor nirkabel tipikal berada di kisaran €150.000–€400.000 dengan *payback period* 2–4 tahun melalui peningkatan *batch success rate* dan penurunan reject rate.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas Vial

Meza‐Galvan et al. (2026) menurunkan model perpindahan panas satu dimensi untuk vial liofilisasi yang menjadi fondasi algoritma interpretasi data WSN. Fluks panas dari rak ke vial diformulasikan sebagai:

$$q_v = A_v \cdot K_v \cdot (T_s - T_b)$$

di mana $A_v$ adalah luas penampang vial (m²), $K_v$ koefisien perpindahan panas keseluruhan (W/m²·K), $T_s$ suhu rak, dan $T_b$ suhu produk di *sublimation front*. Resistansi total $K_v$ didekomposisi menjadi komponen konduksi gas, radiasi, dan konduksi melalui dinding vial:

$$\frac{1}{K_v} = \frac{1}{K_c + K_r} + \frac{L_p}{k_p} + \frac{1}{K_b}$$

dengan $K_c$ koefisien konveksi gas, $K_r$ kontribusi radiasi, $L_p$ tebal *cake* produk, $k_p$ konduktivitas termal produk beku (tipikal 0,1–0,3 W/m·K untuk larutan protein), dan $K_b$ konduksi melalui dasar vial (umumnya $K_b \approx 50$ W/m²·K untuk vial Schott 10R).

### 2.2 Laju Sublimasi dan Neraca Massa

Laju sublimasi $\dot{m}$ dikopling dengan fluks panas melalui *enthalpy of sublimation* $\Delta H_s$ es (≈ 2.840 kJ/kg pada 0°C):

$$\dot{m} = \frac{q_v}{\Delta H_s} = \frac{A_v \cdot K_v \cdot (T_s - T_b)}{\Delta H_s}$$

Waktu pengeringan total untuk menguapkan massa es $m_{ice}$ pada batch dengan $N$ vial dirumuskan:

$$t_{dry} = \frac{m_{ice}}{N \cdot \dot{m}} = \frac{m_{ice} \cdot \Delta H_s}{N \cdot A_v \cdot K_v \cdot (T_s - T_b)}$$

### 2.3 Model Termodinamika Ekuilibrium

Tekanan uap air di *sublimation front* mengikuti persamaan Clausius–Clapeyron yang disederhanakan menjadi bentuk eksponensial (Gigachev–Kumin):

$$\ln(P_w) = -\frac{6134}{T_b} + 24.721$$

dengan $P_w$ dalam Torr dan $T_b$ dalam Kelvin. Parameter ini vital karena sensor nirkabel memantau $T_b$ secara langsung, sedangkan tekanan ruang $P_c$ diukur terpisah—rasio $P_w/P_c$ menentukan *safety margin* terhadap *choked flow* dan *bubble formation*.

### 2.4 Model Sensor SAW (*Surface Acoustic Wave*)

Sensor nirkabel Tempris yang didokumentasikan Meza‐Galvan et al. beroperasi berbasis *surface acoustic wave* dengan frekuensi resonansi $f_0$ yang bergantung pada suhu:

$$f(T) = f_0 \cdot \sqrt{1 - \frac{T - T_{ref}}{\kappa}}$$

dengan $\kappa$ konstanta material piezoelektrik. Sensor ini aktif hanya ketika ditenaga RF reader melalui *inductive link*, sehingga ideal untuk lingkungan vakum tanpa baterai.

### 2.5 Persamaan Arrhenius untuk Degradasi Produk

Untuk menjamin kualitas, suhu produk harus dijaga di bawah $T_{max}$ dengan *safety factor*. Kinetika degradasi mengikuti:

$$\frac{dC}{dt} = -k_0 \cdot e^{-E_a/(R T_b)} \cdot C^n$$

Akumulasi degradasi dipakai WSN untuk mengimplementasikan *soft sensor* yang memprediksi sisa umur guna (*shelf life*) produk secara real-time.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN pada liofilizer industri mengikuti SOP bertahap yang dipetakan oleh Meza‐Galvan et al. (2026) sebagai berikut:

**Tahap 1 — Pemetaan Risiko & Desain Sensor (UQRA).** Lakukan *Uncertainty Quantification and Risk Assessment* dengan mensimulasikan distribusi suhu vial via CFD-DEM (Ansys Fluent + Rocky DEM) untuk menentukan posisi sensor yang representatif. Titik kritis tipikal: vial tepi, vial tengah, vial dekat katup isolasi.

**Tahap 2 — Kalibrasi & Validasi IQ/OQ/PQ.** Sensor nirkabel dikalibrasi terhadap *standard reference* NIST pada rentang –60°C hingga +60°C dengan akurasi ±0,5°C. Prosedur IQ (Installation Qualification) memverifikasi *signal-to-noise ratio* (SNR > 20 dB), jangkauan RF, dan *packaging integrity* di lingkungan vakum 0,05 mbar.

**Tahap 3 — Konfigurasi Jaringan.** Topologi *star network* dengan 1–4 *reader antenna* eksternal di balik dinding ruang. Frekuensi operasi 433 MHz atau 2,4 GHz; *sampling rate* 1–10 Hz. Data ditransmisikan ke historian PI (OSIsoft) atau Siemens PCS 7 dengan protokol OPC-UA.

**Tahap 4 — Logic Pengendalian (PLC/SCADA).** Algoritma *control logic* berlapis:
- Layer 1: PID loop suhu rak $T_s$ (respon 1–5 menit)
- Layer 2: *Model Predictive Control* (MPC) berdasarkan prediksi $T_b$ dari WSN (horizon 30 menit)
- Layer 3: *Adaptive shelf temperature ramping* menggunakan $K_v$ yang diestimasi real-time

**Tahap 5 — Penentuan *Primary Drying Endpoint*.** Metode *pressure rise test* (PRT) dan komparasi dengan sensor WSN: ketika gradien $dT_b/dt \to 0$ pada semua vial (variansi < 0,3°C), *primary drying* berakhir dan sistem otomatis melanjutkan ke *secondary drying*.

**Tahap 6 — Documentation & Batch Release.** Seluruh data WSN masuk ke *electronic batch record* (EBR) sesuai 21 CFR Part 11 dengan *audit trail*, *electronic signature*, dan *time-stamped event log*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Skenario
Sebuah CDMO memproduksi liofilisat protein (konsentrasi 50 mg/mL, fill volume 3 mL) dalam vial Schott 10R pada liofilizer industri dengan kapasitas **6 rak × 1.200 vial = 7.200 vial per batch**. Spesifikasi: suhu rak $T_s = +25°C$, tekanan ruang $P_c = 0,15$ mbar (0,1125 Torr), suhu awal produk $-40°C$.

### Langkah 1 — Perhitungan Parameter Termodinamika
Tekanan uap di sublimation front pada suhu produk desain $T_b = -25°C = 248,15$ K:

$$\ln(P_w) = -\frac{6134}{248,15} + 24,721 = -24,719 + 24,721 = 0,002$$

$$P_w = e^{0,002} \approx 1,002 \text{ Torr} = 1,336 \text{ mbar}$$

Rasio $P_w/P_c = 1,002/0,1125 = 8,91$. Rasio > 4 menunjukkan sublimasi berlangsung dalam rezim *molecular flow*, aman dari *choked flow*.

### Langkah 2 — Perhitungan Fluks Panas
Parameter vial Schott 10R: $A_v = 3,80 \times 10^{-4}$ m², $K_v = 12,5$ W/m²·K (tipikal untuk vial Schott pada 0,1 mbar):

$$q_v = (3,80 \times 10^{-4}) \cdot 12,5 \cdot (25 - (-25))$$
$$q_v = 3,80 \times 10^{-4} \cdot 12,5 \cdot 50 = 0,2375 \text{ W per vial}$$

### Langkah 3 — Laju Sublimasi
$$\dot{m} = \frac{q_v}{\Delta H_s} = \frac{0,2375 \text{ W}}{2.840.000 \text{ J/kg}} = 8,36 \times 10^{-8} \text{ kg/s} = 0,301 \text{ g/jam per vial}$$

### Langkah 4 — Total Massa Es dan Waktu Pengeringan
Massa es per vial = volume larutan × densitas larutan × fraksi es (asumsi 90%):
$$m_{ice} = 3 \times 10^{-6} \text{ m}^3 \cdot 1000 \text{ kg/m}^3 \cdot 0,9 = 2,7 \times 10^{-3} \text{ kg} = 2,7 \text{ g}$$

Total massa es batch:
$$M_{batch} = 7.200 \cdot 2,7 \text{ g} = 19,44 \text{ kg es}$$

Waktu *primary drying* tanpa WSN (asumsi uniform $T_b = -25°C$):
$$t_{dry} = \frac{2,7 \text{ g}}{0,301 \text{ g/jam}} = 8,97 \text{ jam per vial}$$

### Langkah 5 — Dampak WSN terhadap Optimasi
Dengan WSN, sistem MPC mendeteksi bahwa vial tepi bersuhu