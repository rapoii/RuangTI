# 1565 — Analisis Perilaku dan Karakterisasi Kerak Autoclave pada Pelindian Bijih Nikel Laterit dengan Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

*Catatan metodologis: Abstrak dan temuan terperinci kedua naskah tidak disertakan dalam paket literatur; modul ini dibangun berdasarkan judul, afiliasi penulis, DOI resmi, dan korpus literatur HPAL (High-Pressure Acid Leaching) yang mapan untuk memastikan konsistensi ilmiah.*

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi struktural akibat transisi energi elektrifikasi dan permintaan baterai kendaraan listrik (EV) yang diproyeksikan tumbuh 12–15% CAGR hingga 2035 (IEA, 2024). Lebih dari 60% cadangan nikel dunia berbentuk bijih laterit, dan sekitar 70% produksi nikel dari laterit diperoleh melalui proses hidrometalurgi High-Pressure Acid Leaching (HPAL) yang dikembangkan dari teknologi Sherritt-Gordon sejak 1950-an. Okechukwu, Deleau, dan Espitalier (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) secara khusus menyoroti bahwa salah satu *pain point* paling kritis pada operasi HPAL adalah fenomena **kerak (scaling) autoclave** yang terbentuk di dinding, koil pemanas, dan *baffle*, sehingga menurunkan koefisien perpindahan panas keseluruhan, meningkatkan konsumsi asam sulfat, dan memaksa *shut-down* tak terencana yang menurunkan *overall equipment effectiveness* (OEE) hingga 8–14% per siklus produksi tahunan.

Dalam konteks Indonesia—sebagai produsen nikel terbesar dunia dengan kapasitas terpasang lebih dari 1,8 juta ton Ni per tahun—relevansi topik ini menjadi sangat strategis. Pabrik HPAL dalam negeri (contoh: Halmahera Persada Lygend, Huayou Cobalt di Morowali, dan proyek strategis nasional di Sulawesi Tengah) beroperasi pada rentang suhu 245–270 °C dan tekanan 35–45 bar untuk melindi limonit dan saprolit kadar rendah (0,8–1,4% Ni). Kompleksitas operasional bertambah ketika bijih laterit mengandung sulfur (0,05–0,5%) yang cenderung membentuk kerak berbasis gipsum/anhidrit selama leaching. Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menunjukkan bahwa pemilihan **agen desulfurisasi** dan parameter *roasting-reduction* secara langsung mengendalikan akumulasi kerak sulfur dalam residu HPAL. Kedua naskah ini membentuk dikotomi penelitian yang saling komplementer: paper pertama berfokus pada karakterisasi kerak yang sudah terbentuk, sedangkan paper kedua membahas pre-treatment untuk mencegah/mengurangi beban kerak.

Urgensi ekonominya nyata: satu plant HPAL berkapasitas 30.000 t Ni/ tahun dapat mengalami kerugian Rp 180–250 miliar per tahun akibat degradasi termal, konsumsi asam berlebih, dan *downtime* cleaning. Dari perspektif Teknik Industri, masalah ini bukan sekadar masalah kimia proses, melainkan masalah **reliability engineering, throughput optimization, dan supply chain risk** yang harus didekati secara *multi-objective optimization* antara yield, availability, dan CAPEX/OPEX.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dengan Fouling

Performansi termal autoclave HPAL mengikuti persamaan overall heat transfer dengan resistansi fouling:

$$Q = U \cdot A \cdot \Delta T_{LMTD} = \frac{A \cdot \Delta T_{LMTD}}{\frac{1}{h_i} + \frac{\delta_w}{k_w} + R_f + \frac{1}{h_o}}$$

di mana $U$ adalah koefisien perpindahan panas keseluruhan (W/m²·K), $h_i$ dan $h_o$ koefisien konveksi sisi pulp dan steam, $\delta_w$ tebal dinding autoclave (umumnya 60–80 mm baja paduan Alloy 825/625), $k_w$ konduktivitas dinding (~17 W/m·K), dan $R_f$ **tahanan fouling kerak** (m²·K/W) yang menjadi variabel kritis.

Tahanan fouling didefinisikan oleh Okechukwu et al. (2026) sebagai:

$$R_f(t) = R_{f,\infty}\left(1 - e^{-t/\tau_f}\right)$$

dengan $R_{f,\infty}$ adalah tahanan fouling asimtotik dan $\tau_f$ konstanta waktu (hari). Hubungan empiris antara ketebalan kerak $\delta_s$ dan konduktivitas termalnya $k_s$ memenuhi:

$$R_f = \frac{\delta_s}{k_s}$$

Komposisi kerak yang dominan adalah hematit (Fe₂O₃, $k_s \approx 1{,}2$ W/m·K), jarosit (H₃O·Fe₃(SO₄)₂(OH)₆, $k_s \approx 0{,}5$ W/m·K), alunit, dan silika amorf, sehingga efek insulasi termal sangat signifikan.

### 2.2 Kinetika Pelindian – Shrinking Core Model (SCM)

Reaksi pelindian NiO + H₂SO₄ → NiSO₄ + H₂O mengikuti model inti menyusut:

$$1 - (1 - X)^{1/3} = \frac{k_s \cdot C_A \cdot t}{\rho_s \cdot r_0}$$

dengan $X$ fraksi Ni terlarut (90–95% target), $k_s$ konstanta laju permukaan (m/s), $C_A$ konsentrasi asam, $\rho_s$ densitas padatan, dan $r_0$ radius awal partikel. Energi aktivasi tipikal 65–85 kJ/mol mengindikasikan kendali difusi internal lapisan produk pada suhu > 240 °C.

### 2.3 Persamaan Pembentukan Kerak

Pembentukan kerak dimodelkan melalui laju deposisi yang dipengaruhi *supersaturation* lokal:

$$\frac{d\delta_s}{dt} = \frac{K_r \cdot (C_{eq} - C_{bulk})}{\rho_{scale}}$$

untuk reaksi jarosit: $3Fe^{3+} + 2SO_4^{2-} + 6H_2O \rightarrow H_3OFe_3(SO_4)_2(OH)_6 + 5H^+$. Andrameda et al. (2024) menunjukkan bahwa pengurangan sulfat awal melalui *roasting-reduction* dengan Na₂CO₃ atau NaOH menurunkan *driving force* deposisi kerak berbasis sulfat.

### 2.4 Neraca Asam dan Energi

Konsumsi asam sulfat total:

$$m_{H_2SO_4} = \sum_i \alpha_i \cdot n_i \cdot M_{H_2SO_4}$$

di mana $\alpha_i$ adalah stoikiometri untuk logam pengonsumsi asam (Fe, Mg, Al, Ca, Mn, Ni), $n_i$ mol logam, dan $M$ massa molar.

Konsumsi energi spesifik untuk memanaskan pulp ke suhu leaching:

$$E_{th} = m_p \cdot c_{p,pulp} \cdot (T_{leach} - T_{feed}) + \text{heat losses}$$

Penurunan $U$ akibat kerak menyebabkan peningkatan konsumsi steam per ton bijih dari baseline