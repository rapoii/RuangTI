# 2012 — Pengembangan Proses dan Atribut Kualitas Liofilisasi (Freeze-Drying) untuk Formulasi Farmasi, Biofarmasi, dan Sistem Penghantaran Nanomedisin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Process development and quality attributes for the freeze-drying process in pharmaceuticals, biopharmaceuticals and nanomedicine delivery: a state-of-the-art review
**Jurnal & Sitasi Utama:** Sagar R. Pardeshi, Nilesh S. Deshmukh, Darshan R. Telange (2023). *Future Journal of Pharmaceutical Sciences*. DOI: [https://doi.org/10.1186/s43094-023-00551-8](https://doi.org/10.1186/s43094-023-00551-8)
**Sitasi Pendukung:** Abdulrahman A. Halwani (2022). *Pharmaceutics*. DOI: [https://doi.org/10.3390/pharmaceutics14010106](https://doi.org/10.3390/pharmaceutics14010106)

---

## 1. Pendahuluan dan Konteks Industri

Industri farmasi global menghadapi tantangan struktural yang semakin kompleks dalam aspek stabilitas formulasi, skalabilitas proses, dan kepatuhan terhadap regulasi Quality-by-Design (QbD) yang digencarkan oleh badan pengawas seperti FDA dan EMA. Pardeshi, Deshmukh, dan Telange (2023) dalam *Future Journal of Pharmaceutical Sciences* menegaskan bahwa sekitar **50% dari 300 industri farmasi yang telah mendapat persetujuan FDA** mengandalkan teknologi *freeze-drying* atau liofilisasi untuk menjaga stabilitas produknya. Angka ini menunjukkan bahwa liofilisasi bukan sekadar opsi alternatif, melainkan telah menjadi *backbone* utama dalam strategi preservasi produk farmasi modern, khususnya untuk biofarmasi berbasis protein, antibodi monoklonal, dan sistem penghantaran obat nano (*nanomedicine*) [DOI: 10.1186/s43094-023-00551-8].

Latar belakang urgensi proses ini muncul dari kenyataan bahwa banyak agen farmasi konvensional (*conventional drug-delivery systems/CDDSs*) melepaskan dosis secara cepat dan tidak terkontrol segera setelah administrasi, sehingga meningkatkan frekuensi pemberian dan menurunkan kepatuhan pasien. Halwani (2022) dalam *Pharmaceutics* menjelaskan bahwa kelemahan utama CDDS adalah pelepasan *burst release* yang tidak terukur, yang dalam konteks rekayasa sistem industri dimaknai sebagai inefisiensi pada dimensi Quality Function Deployment (QFD) dan menambah *total cost of ownership* karena kebutuhan dosis berulang [DOI: 10.3390/pharmaceutics14010106].

Dalam konteks operasional, intensifikasi proses (*process intensification*) pada skala produksi menjadi tantangan utama karena perilaku termodinamika pelarut air dan pelarut organik sangat bergantung pada formulasi, tekanan ruang, dan gradien suhu. Pardeshi et al. (2023) menekankan bahwa strategi penghilangan pelarut (*solvent removal strategies*) yang konvensional sering kali menurunkan stabilitas fisikokimia aktif, sehingga framework QbD menjadi wajib untuk mengendalikan *Critical Quality Attributes* (CQA) seperti bentuk kristal, kadar air residu, waktu rekonstitusi, dan stabilitas jangka panjang. Gabungan dua tren besar — kebutuhan akan produk biologis yang stabil dan meningkatnya adopsi nanomedisin berbasis nanopartikel polimer, liposom, dan nanokristal — menjadikan liofilisasi sebagai simpul kritis dalam rantai pasok farmasi. Maka, keahlian spesialis teknik industri dalam mengendalikan parameter proses ini menjadi kebutuhan strategis yang tidak terhindarkan.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis liofilisasi berpijak pada tiga pilar fenomena transport: perpindahan panas, perpindahan massa sublimasi, dan kinetika degradasi produk. Pardeshi et al. (2023) menyusun formulasi *heat and mass transfer* secara simultan yang diselesaikan selama tahap *primary drying*.

### 2.1 Laju Sublimasi dan Resistansi Mass Transfer

Laju sublimasi $\frac{dm}{dt}$ (kg/s) pada antarmuka es-vakum didekati dengan persamaan *quartz*:

$$\frac{dm}{dt} = \frac{P_i - P_c}{R_p + R_s}$$

di mana $P_i$ adalah tekanan uap pada antarmuka sublimasi (Pa), $P_c$ adalah tekanan ruang kondensor (Pa), $R_p$ adalah resistansi produk kering (Pa·m²·s/kg), dan $R_s$ adalah resistansi stopper vial. Resistansi $R_p$ meningkat secara nonlinear selama proses karena terbentuknya *dried cake*:

$$R_p = R_{p,0} + A_p \cdot \left(\frac{m_0 - m}{m_0}\right)$$

dengan $R_{p,0}$ adalah resistansi awal (Pa·m²·s/kg), $A_p$ adalah parameter empiris yang bergantung pada konsentrasi padatan dan jenis eksipien (kristal vs amorf), $m_0$ adalah massa total air pada awal *primary drying*, dan $m$ adalah massa air yang tersisa.

### 2.2 Persamaan Energi dan Laju Aliran Panas

Kalor sublimasi $\Delta H_s$ (J/kg) pada tekanan parsial tertentu memenuhi:

$$\frac{dQ}{dt} = \Delta H_s \cdot \frac{dm}{dt} = K_v \cdot A_v \cdot (T_s - T_i)$$

dengan $K_v$ adalah koefisien transfer panas vial (W/m²·K), $A_v$ adalah luas penampang vial, $T_s$ adalah suhu rak (*shelf temperature*), dan $T_i$ adalah suhu pada antarmuka sublimasi. Keseimbangan antara $\frac{dQ}{dt}$ dari persamaan ini dan $\Delta H_s \cdot \frac{dm}{dt}$ menghasilkan *coupled system* yang diselesaikan secara iteratif untuk mencegah *collapse* produk.

### 2.3 Suhu Kritis dan Batas Collapse

Kondisi operasi harus menjaga $T_i$ di bawah suhu *collapse* $T_c$ (untuk produk amorf) atau di bawah *eutectic temperature* $T_e$ (untuk produk kristalin). Persamaan *Gordon-Taylor* digunakan untuk memprediksi $T_g'$ (suhu transisi gelas):

$$T_g = \frac{w_1 T_{g,1} + k_{GT} w_2 T_{g,2}}{w_1 + k_{GT} w_2}$$

dengan $w_1, w_2$ adalah fraksi massa komponen, $T_{g,1}, T_{g,2}$ adalah suhu transisi glasial masing-masing komponen, dan $k_{GT}$ adalah parameter *Gordon-Taylor*.

### 2.4 Kinetika Pelepasan Nanomedisin

Untuk sistem penghantaran nanomedisin yang dihasilkan, pelepasan obat sering dimodelkan dengan persamaan Korsmeyer-Peppas:

$$\frac{M_t}{M_\infty} = k \cdot t^n$$

dengan $M_t/M_\infty$ adalah fraksi kumulatif obat yang dilepas, $k$ adalah konstanta kinetik, dan $n$ adalah eksponen difusi. Untuk sistem sferik, $n \approx 0.43$ mengindikasikan difusi Fickian, $0.43 < n < 0.85$ adalah *anomalous transport*, dan $n \approx 0.85$ adalah *case-II transport*. Pelengkap yang relevan adalah model Higuchi:

$$\frac{M_t}{M_\infty} = k_H \sqrt{t}$$

### 2.5 Kinetika Degradasi Stabilitas Jangka Panjang

Stabilitas pasca-liofilisasi dimodelkan dengan persamaan Arrhenius:

$$k_{deg} = A \cdot e^{-E_a / RT}$$

dengan $E_a$ adalah energi aktivasi, $R$ adalah konstanta gas universal, dan $T$ adalah suhu penyimpanan. Framework QbD yang dirujuk Pardeshi et al. (2023) menggunakan persamaan ini untuk menentukan *Design Space* multivariat yang menjamin CQA berada dalam rentang spesifikasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis proses liofilisasi mengikuti SOP berlapis yang sejalan dengan prinsip *Process Validation Lifecycle* (FDA Process Validation Guidance, 2011) dan ICH Q8-Q12. Pardeshi et al. (2023) menyusun alur sebagai berikut:

**Tahap 1 — Formulasi dan Pre-Formulation Study.** Penentuan komposisi *cryoprotectant* (trehalosa, sukrosa, atau manitol), *buffering agent*, dan eksipien berbasis QbD. Desain eksperimental dengan *Design of Experiments* (DoE) menggunakan *fractional factorial* atau *response surface methodology* (RSM).

**Tahap 2 — Freezing Stage.** Penurunan suhu rak dari $T_{ambient}$ ke $\approx -45°C$ dengan laju pendinginan $0,5-2°C$/menit. Tahap ini mencakup *annealing* pada $-10°C$ hingga $-20°C$ selama 2-4 jam untuk kristalisasi trehalosa atau manitol, sehingga diperoleh struktur kristal yang menguntungkan *cake* dan resistansi termal yang terprediksi.

**Tahap 3 — Primary Drying (Sublimasi).** Aplikasi vakum hingga $P_c \approx 10-30$ Pa dengan suhu rak $+10°C$ hingga $+30°C$. Selama $\approx 24-48$ jam, sublimasi terjadi dan air berpindah ke kondensor pada suhu $\leq -50°C$. Pemantauan real-time menggunakan *Comparative Pressure Measurement* (Thermocouples + Pirani gauge) atau *Manometric Temperature Measurement* (MTM).

**Tahap 4 — Secondary Drying (Desorpsi).* Peningkatan suhu rak ke $+30°C$ hingga $+40°C$ pada tekanan rendah untuk menurunkan kadar air residu hingga $< 1-3\%$ (berat basah). Tahap ini berlangsung $\approx 6-12$ jam.

**Tahap 5 — Vial Stoppering & Sealing.** Dalam kondisi vakum parsial atau atmosfer inert (N₂), vial disegel dengan stopper butil rubber.

**Tahap 6 — Quality Verification.** Pengujian CQA mencakup: kadar air (Karl Fischer), morfologi *cake* (XRD, SEM), waktu rekonstitusi (< 30 detik untuk mayoritas produk parenteral), *potency assay*, dan *subvisible particle* untuk produk protein (Hallewi, 2022, menekankan signifikansi ini untuk nanomedisin).

Diagram alir logikanya mengikuti struktur **Input → Process → Output** klasik teknik industri, dengan *feedback loop* dari *PAT* (Process Analytical Technology) ke sistem kontrol.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Liofilisasi suspensi nanokristal kurkumin 50 mg/vial dalam vial 10 mL, dengan target *residual moisture* 2% dan suhu produk tidak melebihi $T_g' - 5°C$.

**Parameter Input (diadopsi dari skenario khas Pardeshi et al., 2023):**

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Luas penampang vial | $A_v = 3,8 \times 10^{-4}$ m² | $A_v$ |
| Koefisien transfer panas vial | $K_v = 15$ W/m²·K | $K_v$ |
| Suhu rak | $T_s = 25°C = 298,15$ K | $T_s$ |
| Tekanan ruang | $P_c = 15$ Pa | $P_c$ |
| Resistansi awal produk | $R_{p,0} = 1,5 \times 10^{4}$ Pa·m²·s/kg | $R_{p,0}$ |
| Parameter empiris | $A_p = 2,5 \times 10^{5}$ Pa·m²·s/kg | $A_p$ |
| Tekanan uap antarmuka | $P_i = 25$ Pa (pada $T_i \approx -20°C$) | $P_i$ |
| Kalor sublimasi es | $\Delta H_s = 2,84 \times 10^{6}$ J/kg | $\Delta H_s$ |

**Langkah 1 — Laju Sublimasi Awal (saat $m = m_0$):**

$$R_p = R_{p,0} + A_p \cdot 0 = 1,5 \times 10^{4} \text{ Pa·m²·s/kg}$$

$$\frac{dm}{dt}\bigg|_{t=0} = \frac{P_i - P_c}{R_p} = \frac{25 - 15}{1,5 \times 10^{4}} = 6,67 \times 10^{-4} \text{ kg/s}$$

**