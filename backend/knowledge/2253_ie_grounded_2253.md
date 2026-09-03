# 2253 — Perilaku dan Karakterisasi Kerak Autoclave pada Pelindian Bijih Nikel Laterit dengan Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang mengalami transformasi struktural yang dipicu oleh transisi energi kendaraan listrik (EV) dan permintaan baterai lithium-ion berskala masif. Nikel kelas baterai (Class I Ni, dengan kemurnian >99,8%) yang menjadi prekursor utama katoda NMC (nickel-manganese-cobalt) dan NCA (nickel-cobalt-aluminium) hanya dapat diproduksi secara ekonomis melalui jalur hidrometalurgi, terutama **High-Pressure Acid Leaching (HPAL)** terhadap bijih nikel laterit (limonit dan saprolit). Sebagaimana ditegaskan oleh Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems*, proses HPAL yang berlangsung pada suhu 240–270 °C dan tekanan 35–45 bar dengan media asam sulfat memiliki satu permasalahan operasional paling kronis yang menurunkan *overall equipment effectiveness* (OEE) pabrik secara signifikan: **pembentukan kerak (*autoclave scaling*)** di dinding dalam, pipa, dan agitator reaktor bertekanan tinggi.

Kerak tersebut terbentuk akibat pengendapan senyawa besi (terutama hematit Fe₂O₃ dan jarosite), aluminium hidroksida, serta magnesium sulfat ketika larutan jenuh mengalami *flash cooling* dan pergeseran pH selama siklus pemanasan–pendinginan. Studi rii l Dickson et al. (2026) dengan DOI [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503) melakukan karakterisasi morfologi, komposisi kimia, dan laju akresi kerak pada autoclave pilot-plant, dan menemukan bahwa ketebalan kerak dapat mencapai 5–25 mm per *campaign* produksi (60–90 hari), sehingga koefisien perpindahan panas menyeluruh (U) turun hingga 60% dari desain awal. Secara ekonomi, hal ini berarti *shutdown* tak terencana yang menyebabkan *loss of production* hingga 8–12% kapasitas terpasang, merugikan puluhan juta USD per tahun pada pabrik HPAL berskala 30.000–60.000 ton Ni per tahun.

Di sisi hulu, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melaporkan bahwa proses *roasting-reduction* bijih laterit dengan penambahan agen desulfurisasi pada suhu 600–900 °C mampu mengubah mineral sulfida menjadi oksida yang lebih stabil sehingga menurunkan beban pengotor besi dan sulfur dalam umpan autoclave. Pra-perlakuan ini secara tidak langsung memitigasi potensi fouling kerak karena konsentrasi sulfat bebas dalam slurry umpan HPAL berkurang 15–30%. Integrasi dua lini riset ini—karakterisasi kerak di dalam autoclave (Dickson et al., 2026) dan modifikasi umpan lewat *roasting-reduction* (Andrameda et al., 2024)—menjadi pilar penting dalam rekayasa sistem HPAL masa depan yang berkelanjutan (*zero-waste*, low-carbon footprint).

Urgensi industrialnya bersifat multi-dimensi: dari perspektif *availability* aset, setiap satu milimeter kerak menurunkan efisiensi termal 2–3%; dari perspektif keselamatan proses, kerak menyebabkan *hot spot* lokal yang memicu *stress corrosion cracking* pada baja tahan karat autoclave (umumnya grade 904L atau alloy 20Cb-3); dari perspektif lingkungan, semakin sering *shut-down* untuk *descaling* menggunakan asam fluorida berujung pada peningkatan jejak hidrometalurgi dan risiko tumpahan. Karena itu, pemahaman kuantitatif perilaku kerak menjadi kebutuhan strategis bagi insinyur industri yang mengelola proses, kapasitas, dan keberlanjutan pabrik HPAL.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Pelindian HPAL (Shrinking Core Model)

Pelindian partikel bijih laterit dalam autoclave mengikuti model inti menyusut (*shrinking unreacted core model*). Untuk reaksi umum antara asam sulfat dan mineral target (contoh: $NiO + H_2SO_4 \rightarrow NiSO_4 + H_2O$), laju konversi fraksional $X$ terhadap waktu $t$ dikendalikan oleh salah satu tahap yang paling lambat:

$$t^* = \frac{\rho_B \, R^2}{b \, D_e \, C_{A0}} \cdot X \quad \text{(kontrol difusi lapisan produk)}$$

$$t^* = \frac{\rho_B \, R}{b \, k_s \, C_{A0}} \cdot \left[1 - (1-X)^{1/3}\right] \quad \text{(kontrol reaksi permukaan)}$$

di mana $\rho_B$ adalah densitas molar bijih, $R$ jari-jari awal partikel, $D_e$ difusivitas efektif dalam lapisan produk, $C_{A0}$ konsentrasi asam sulfat awal, $k_s$ konstanta laju reaksi permukaan, dan $b$ koefisien stoikiometri. Pada suhu HPAL (>250 °C), tahanan difusi mendominasi sehingga laju ekstraksi nikel ditentukan oleh permeabilitas *ash layer* yang juga ikut menentukan struktur kerak (Dickson et al., 2026).

### 2.2 Kinetika Pengendapan Kerak (Hematite–Alunina–Jarosite)

Pembentukan kerak dimodelkan sebagai pengendapan heterogen pada permukaan logam autoclave. Laju penebalan kerak $\frac{d\delta}{dt}$ dapat diekspresikan melalui pendekatan analogi perpindahan massa:

$$\frac{d\delta}{dt} = \frac{k_m \left(C_b - C_{sat}\right)}{\rho_s}$$

dengan $k_m$ koefisien transfer massa konvektif (tergantung bilangan Reynolds dan Schmidt), $C_b$ konsentrasi terlarut aktual, $C_{sat}$ konsentrasi jenuh, dan $\rho_s$ densitas molar kerak. Pengaruh suhu terhadap $k_m$ mengikuti hukum Arrhenius:

$$k_m = A \, \exp\left(-\frac{E_a}{RT}\right)$$

Dickson et al. (2026) melaporkan energi aktivasi $E_a$ untuk pengendapan hematit dan jarosite pada dinding autoclave berada pada rentang 55–78 kJ/mol, yang konsisten dengan mekanisme nukleasi–pertumbuhan kristal.

### 2.3 Penurunan Perpindahan Panas Akibat Kerak

Kerak bertindak sebagai resistansi termal tambahan. Untuk autoclave silindris dengan steam jacket, koefisien perpindahan panas menyeluruh $U$ menjadi:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{scale}}{k_{scale}} + \frac{\Delta x_{wall}}{k_{wall}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ koefisien konveksi sisi dalam (slurry) dan luar (steam), $k_{scale}$ konduktivitas termal kerak (umumnya 0,8–1,5 W/m·K untuk komposit hematit–alumina), dan $k_{wall}$ konduktivitas baja autoclave (≈16 W/m·K). Ketika $\delta_{scale}$ meningkat dari 0 menjadi 15 mm, resistansi dominan berpindah dari dinding baja ke lapisan kerak, dan fluks panas $q = U \cdot \Delta T$ turun linier (Dickson et al., 2026).

### 2.4 Neraca Massa Kerak

Neraca massa parsial untuk besi yang mengendap sebagai kerak per *campaign*:

$$m_{scale}^{Fe} = Q \cdot t \cdot \left([Fe]_{in} - [Fe]_{out}\right) \cdot \eta_{deposition}$$

dengan $Q$ laju alir slurry (m³/jam), $t$ durasi operasi, dan $\eta_{deposition}$ efisiensi deposisi (0,08–0,18 menurut pengukuran Dickson et al., 2026 pada pilot autoclave 2 m³). Neraca ini penting untuk estimasi kapasitas *descaling* dan interval *shutdown*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan sistematis hasil Dickson et al. (2026) dan Andrameda et al. (2024) di lapangan mengikuti SOP 6-tahap berikut:

**Tahap 1 — Karakterisasi Umpan (Feed Characterization).**
Analisis XRD, XRF, dan *complete acid digestion* (ICP-OES) untuk mengukur kadar Fe, Al, Mg, S, dan Ni dalam umpan laterit. Bila rasio Fe/Ni > 12 dan kadar S > 0,8%, maka dilakukan *pre-roasting* sesuai protokol Andrameda et al. (2024) dengan agen desulfurisasi (CaO atau Na₂CO₃) pada 700–850 °C selama 60–90 menit.

**Tahap 2 — Pengaturan Parameter Autoclave.**
Kontrol suhu 250 ± 5 °C, tekanan 40 ± 2 bar, konsentrasi H₂SO₄ umpan 220–280 g/L, dan *retention time* 60–90 menit. Kecepatan agitator 80–120 rpm untuk mempertahankan suspensi dan meminimalkan gradien konsentrasi lokal yang memicu pengendapan heterogen.

**Tahap 3 — Pemantauan Kerak In-Situ.**
Pemasangan *skin thermocouple* pada dinding autoclave (setiap 30° keliling) untuk mendeteksi kenaikan suhu dinding yang berkorelasi dengan pertumbuhan $\delta_{scale}$ melalui inversi numerik persamaan $U$.

**Tahap 4 — Pemodelan Laju Pertumbuhan Kerak.**
Penggunaan model sektional 2 (Persamaan 2.2 dan 2.3) untuk memprediksi waktu kritis (*critical thickness*) ketika perpindahan panas turun >40% dari baseline; pada titik ini *shutdown* terencana dilakukan.

**Tahap 5 — Descaling dan Pretreatment Permukaan.**
Pelaksanaan *chemical cleaning* dengan larutan H₂SO₄ 5–10% + HF 1–2% pada suhu 60–80 °C selama 4–8 jam untuk melarutkan kerak hematit–alumina; diikuti *passivation* dengan larutan HNO₃ 10% untuk membentuk lapisan protektif Cr₂O₃.

**Tahap 6 — Validasi dan Continuous Improvement.**
Perbandingan ketebalan kerak aktual vs prediksi model, kalibrasi ulang parameter $k_m$ dan $E_a$, dan integrasi hasil ke sistem *digital twin* pabrik untuk optimasi interval *campaign*.

Diagram alir sederhana proses:

```
Umpan Laterit ──► Preparasi & Slurry ──► Pre-Roasting (opsional, Andrameda 2024)
                                                  │
                                                  ▼
                                       Autoclave HPAL (250°C, 40 bar)
                                                  │
                                                  ▼
                                       CCD / Counter-Current Decantation
                                                  │
                                                  ▼
                                       Neutralisasi & Precipitation Ni(OH)₂
                                                  │
                                                  ▼
                                       Drying & Calcination → NiO/Class I Ni
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Autoclave HPAL pilot Dickson et al. (2026) dengan volume slurry 2 m³, dinding baja 904L setebal 25 mm, suhu operasi 255 °C, dan tekanan 42 bar.

**Input Parameter:**
- Laju alir slurry: $Q = 4,5 \, \text{m}^3/\text{jam}$
- Konsentrasi Fe terlarut umpan: $[Fe]_{in} = 18.500 \, \text{mg/L}$
- Konsentrasi Fe keluaran autoclave: $[Fe]_{out} = 15.900 \, \text{mg/L}$
- Durasi *campaign*: $t = 70 \, \text{hari} = 1.680 \, \text{jam}$
- Efisiensi deposisi (Dickson et al., 2026): $\eta_{deposition} = 0,12$
- Konduktivitas termal kerak: $k