# 2349 — Perilaku dan Karakterisasi Kerak Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri metalurgi ekstraktif nikel global sedang mengalami pergeseran struktural yang fundamental akibat menipisnya cadangan bijih nikel sulfida yang berkualitas tinggi. Lebih dari 70% cadangan nikel dunia saat ini berbentuk bijih laterit—endapan oksida yang terbentuk melalui pelapukan intensif batuan ultrabasa di zona tropis seperti Indonesia, Filipina, Kaledonia Baru, dan Kuba (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Bijih laterit—terutama varian *limonite* dan *saprolite*—memiliki kadar nikel rendah (0.8–2.5%) namun terdistribusi sangat luas secara geografis, menjadikannya sumber daya strategis untuk transisi energi global, khususnya dalam rantai pasok baterai ion litium dan baja nikel tahan karat.

Proses High-Pressure Acid Leaching (HPAL) telah muncul sebagai teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit karena kemampuannya memulihkan logam target secara selektif pada回收率 yang melampaui metode pirometalurgi seperti rotary kiln electric furnace (RKEF). Dalam konfigurasi HPAL, slurry bijih dicampur dengan asam sulfat pekat dan dipanaskan pada rentang suhu 240–270°C dengan tekanan parsial 30–50 bar di dalam autoclave *titanium-clad* berskala industri (>3000 m³ pada fasilitas modern seperti PT Halmahera Persada Lygend, Ramu, dan Goro). Namun demikian, keberlanjutan operasional fasilitas HPAL sangat terganggu oleh satu fenomena kritis: pembentukan kerak (*scaling*) pada dinding autoclave, agitator, dan pipa penukar panas.

Dickson, Deleau, dan Espitalier (2026) menyoroti bahwa perilaku kerak autoclave merupakan salah satu bottleneck operasional paling signifikan yang menentukan kapasitas produksi, ketersediaan (*availability*) fasilitas, dan total biaya operasional (*OPEX*) unit HPAL. Kerak yang terbentuk terutama tersusun atas gypsum (CaSO₄·2H₂O), hematit (Fe₂O₃), alunit, dan oksida-hidroksida besi serta alumunium yang mengalami transformasi fasa akibat gradien termal ekstrem antara fluida proses (≥250°C) dan permukaan logam autoclave (Andrameda dkk., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)). Akumulasi kerak setebal 5–50 mm dalam satu siklus produksi 90–120 hari terbukti dapat menurunkan koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*) hingga 35–60%, memaksa dilakukannya *shutdown* untuk *de-scaling* secara mekanik maupun kimiawi. Kerugian ekonomi dari satu peristiwa *unplanned shutdown* pada pabrik HPAL berkapasitas 30.000–50.000 ton nikel per tahun dapat melebihi USD 15–30 juta per kejadian, belum termasuk kehilangan produksi dan tekanan terhadap kontrak *off-take*.

Konteks ini menegaskan bahwa karakterisasi perilaku kerak autoclave bukan sekadar isu metalurgi, melainkan permasalahan rekayasa sistem industri multidimensi yang membutuhkan integrasi antara kimia proses, perpindahan panas, pemodelan kinetika, dan strategi pemeliharaan prediktif. Kedua literatur yang menjadi basis modul ini—yakni studi Dickson dkk. (2026) yang mendalam tentang perilaku kerak dalam kondisi HPAL, serta kontribusi Andrameda dkk. (2024) mengenai efek agen desulfurisasi, suhu, dan waktu *roasting-reduction* terhadap residu HPAL—secara komplementer menyediakan landasan ilmiah untuk pengembangan solusi teknologi yang berorientasi pada keberlanjutan (*cleaner production*), efisiensi energi, dan optimasi rantai pasok nikel.

---

## 2. Landasan Teori & Formulasi Matematis

Perilaku kerak pada autoclave HPAL dapat dimodelkan melalui tiga kerangka teoretik utama: (i) kinetika nukleasi dan pertumbuhan kristal, (ii) perpindahan panas konduktif melalui lapisan kerak, dan (iii) neraca massa serta stoikiometri pelarutan selektif.

### 2.1 Kinetika Nukleasi dan Pertumbuhan Kerak

Laju pengendapan kerak pada permukaan autoclave mengikuti persamaan laju heterogen:

$$r_s = k_s \cdot \left(C_b - C_{sat}\right)^n \cdot A_s$$

di mana $r_s$ adalah laju deposisi massa kerak (kg/jam), $k_s$ adalah konstanta laju pengendapan (m/s), $C_b$ adalah konsentrasi zat terlarut aktual dalam slurry (kg/m³), $C_{sat}$ adalah konsentrasi jenuh pada suhu lokal (kg/m³), $n$ adalah orde reaksi pengendapan (umumnya 1–2), dan $A_s$ adalah luas permukaan efektif (m²). Hubungan $C_{sat}$ dengan suhu dapat diekspresikan melalui formulasi Arrhenius untuk kelarutan terbalik (*inverse solubility*) garam sulfat:

$$C_{sat}(T) = C_{sat,0} \cdot \exp\left[\frac{\Delta H_{diss}}{R}\left(\frac{1}{T} - \frac{1}{T_0}\right)\right]$$

di mana $\Delta H_{diss}$ adalah entalpi disosiasi garam (J/mol), $R$ adalah konstanta gas ideal (8.314 J/mol·K), $T$ adalah suhu lokal (K), dan $T_0$ adalah suhu referensi (K). Pada konteks HPAL, gypsum dan anhydrite menunjukkan perilaku *retrograde solubility*, sehingga $C_{sat}$ justru menurun ketika suhu naik—menjelaskan mengapa kerak paling tebal terbentuk di zona superheat dan dekat dinding autoclave.

### 2.2 Model Perpindahan Panas Konduktif melalui Lapisan Kerak

Koefisien perpindahan panas keseluruhan (U) sistem autoclave dimodelkan sebagai resistansi termal seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_s}{k_s^{th}} + \frac{\delta_w}{k_w} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi pada sisi slurry dan sisi uap/steam (W/m²·K), $\delta_s$ dan $\delta_w$ adalah tebal lapisan kerak dan dinding autoclave (m), sedangkan $k_s^{th}$ dan $k_w$ adalah konduktivitas termal kerak dan dinding (W/m·K). Konduktivitas termal kerak HPAL tipikal berada pada rentang 0.8–2.5 W/m·K, jauh lebih rendah dibanding baja karbon (45 W/m·K) atau titanium (21 W/m·K), menjadikan kerak sebagai *insulator* yang dominan menentukan rugi-rugi efisiensi termal.

### 2.3 Neraca Massa Pelarutan Selektif

Untuk komponen utama nikel dalam bijih limonit, reaksi pelindian dapat direpresentasikan sebagai:

$$\text{NiO} \cdot \text{Fe}_2\text{O}_3 + 4\text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

Reaksi kinetik dikontrol oleh difusi melalui lapisan *ash* dan mengikuti model shrinking-unreacted-core:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k \cdot C_{H^+} \cdot t}{\rho_p \cdot r_p^2}$$

di mana $\alpha$ adalah fraksi konversi, $k$ adalah konstanta laju efektif (m/s), $C_{H^+}$ adalah konsentrasi asam (mol/m³), $t$ adalah waktu (s), $\rho_p$ adalah densitas partikel (kg/m³), dan $r_p$ adalah radius awal partikel (m). Andrameda dkk. (2024) menunjukkan bahwa parameter suhu dan waktu proses *roasting-reduction* secara langsung memengaruhi struktur residu yang menjadi media deposisi kerak berikutnya, dengan aktivasi termal mengikuti hukum Arrhenius:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

### 2.4 Indeks Saturasi sebagai Prediktor Pembentukan Kerak

Dickson dkk. (2026) mengusulkan penggunaan indeks saturasi (*saturation index, SI*) sebagai parameter kontrol prediktif:

$$SI = \log_{10}\left(\frac{IAP}{K_{sp}}\right)$$

di mana $IAP$ adalah *ion activity product* dan $K_{sp}$ adalah tetapan kesetimbangan kelarutan. Nilai $SI > 0$ mengindikasikan kondisi supersaturasi dan risiko kerak, sementara $SI < 0$ menunjukkan kondisi undersaturasi. Pendekatan ini menjadi dasar pengembangan *soft-sensor* untuk sistem kontrol otomatis umpan asam dan suhu di fasilitas HPAL modern.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis untuk mitigasi dan karakterisasi kerak autoclave HPAL mengikuti *Standard Operating Procedure* berlapis yang terdiri dari enam tahap rekayasa:

**Tahap 1 – Karakterisasi Feed dan Pra-Proses.** Analisis proksimat bijih laterit meliputi XRD, XRF, dan ICP-OES untuk menentukan komposisi mineralogi (goethit, limonit, serpentin, garnierit) serta rasio Mg/Fe yang memengaruhi perilaku pelindian. Pra-proses seperti *reductive roasting* (Andrameda dkk., 2024) dilaporkan mampu memodifikasi struktur residu dan mengurangi kecenderungan kerak sulfat.

**Tahap 2 – Preparasi Slurry dan Injeksi Asam.** Slurry dengan padatan 35–45% dicampur dengan H₂SO₄ 98% dalam tangki preheat pada 80–95°C sebelum diumpankan ke autoclave. Rasio asam/bijih dikontrol melalui *ratio controller* otomatis dengan target konsumsi spesifik 350–500 kg H₂SO₄ per ton bijih kering.

**Tahap 3 – Operasi Autoclave Multi-Kompartemen.** Autoclave HPAL industri terdiri dari 4–6 kompartemen dengan kontrol suhu independen (245–270°C pada kompartemen awal, turun bertahap ke 240°C pada kompartemen akhir). Pemantauan real-time melalui *multiphase flow meters*,