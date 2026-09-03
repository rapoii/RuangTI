# 2205 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Nikel laterit telah menjadi tulang punggung transisi energi global karena perannya yang tidak tergantikan dalam baterai litium-ion (NMC/NCA) untuk kendaraan listrik dan stainless steel austenitik. Diperkirakan lebih dari 70% sumber daya nikel dunia berupa bijih laterit, namun hanya sekitar 40% produksi nikel primer global yang berasal dari bijih ini karena kompleksitas metalurgi dan biaya operasional yang tinggi (Dickson, Deleau, & Espitalier, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). High-Pressure Acid Leaching (HPAL) merupakan teknologi dominan untuk mengekstraksi nikel dari bijih laterit limonitik pada suhu 240–270°C dan tekanan 35–45 bar dengan media asam sulfat. Namun, keberlanjutan proses HPAL secara industrial sangat terkendala oleh fenomena *scaling*—yaitu pengendapan dan penumpukan kerak padat pada dinding, agitator, pipa, dan heat exchanger internal autoclave.

Menurut Dickson et al. (2026), pembentukan kerak di dalam autoclave HPAL merupakan masalah operasional kritis yang menurunkan koefisien perpindahan panas hingga 50–70% sepanjang satu kampanye produksi, memperkecil volume efektif reaktor, meningkatkan konsumsi asam, dan迫使 dilakukannya *shut-down* tak terjadwal yang biayanya mencapai USD 2–8 juta per kejadian (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Komposisi kerak tipikal meliputi *gypsum* (CaSO₄·2H₂O), *anhydrite* (CaSO₄), *hematite* (Fe₂O₃), *alunite* (KAl₃(SO₄)₂(OH)₆), *jarosite* (KFe₃(SO₄)₂(OH)₆), dan *basic iron sulfates* yang terbentuk karena kelarutan *retrograde* senyawa-senyawa tersebut di kisaran suhu operasi HPAL. Dari perspektif Teknik Industri, masalah ini bukan semata fenomena kimiawi, melainkan masalah *reliability engineering*, *process intensification*, dan *total cost of ownership* yang krusial.

Studi pelengkap oleh Andrameda, Triaswinanti, & Madra (2024) yang dipublikasikan di *AIP Conference Proceedings* menyoroti bahwa perlakuan awal bijih melalui *roasting-reduction* dengan penambahan agen desulfurisasi dapat secara signifikan mengubah karakteristik residu HPAL dan menurunkan potensi pembentukan kerak pada autoclave (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)). Pendekatan ini membuka peluang rekayasa hulu (*upstream engineering*) untuk mengendalikan masalah yang biasanya hanya ditangani secara hilir melalui *acid wash*, *mechanical descaling*, atau *shot blasting*. Dengan meningkatnya permintaan nikel kelas baterai (≥99.9% NiSO₄·6H₂O), kapasitas HPAL global diproyeksikan tumbuh dari ~600 kt Ni/tahun (2024) menjadi >1.200 kt Ni/tahun pada 2030, sehingga efisiensi autoclave menjadi pembeda kompetitif yang menentukan margin EBITDA operasional.

Urgensi ekonominya sangat nyata. Sebuah autoclave HPAL komersial dengan kapasitas 5.000 t/dry ore per hari dapat kehilangan 3–5% produktivitas nikel akibat scaling, setara dengan kerugian revenue USD 15–25 juta per tahun pada harga nikel USD 18.000–22.000/ton. Oleh karena itu, kemampuan memodelkan, mengkarakterisasi, dan memitigasi pembentukan kerak merupakan kompetensi inti insinyur proses dalam ekosistem Teknik Industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Kelarutan Retrograde dan Indeks Saturasi

Fenomena utama yang mendasari scaling di autoclave HPAL adalah *retrograde solubility*, di mana kelarutan suatu garam menurun seiring naiknya suhu di atas titik tertentu. Untuk *anhydrite* (CaSO₄), kelarutan turun signifikan pada suhu >150°C dalam media asam sulfat. Formulasi Indeks Saturasi (SI) menjadi landasan kuantitatif:

$$SI = \log_{10}\left(\frac{[Ca^{2+}][SO_4^{2-}] \cdot \gamma_{Ca^{2+}} \cdot \gamma_{SO_4^{2-}}}{K_{sp}(T,P)}\right)$$

di mana $[Ca^{2+}]$ dan $[SO_4^{2-}]$ adalah konsentrasi molar ion, $\gamma_i$ adalah koefisien aktivitas (dimodelkan dengan persamaan Pitzer atau Davies untuk larutan elektrolit kuat pada kekuatan ionik tinggi), dan $K_{sp}(T,P)$ adalah konstanta kelarutan sebagai fungsi suhu dan tekanan. Pada $SI > 0$ sistem bersifat *supersaturated* dan presipitasi terjadi secara spontan (Dickson et al., 2026).

### 2.2 Kinetika Nukleasi dan Pertumbuhan Kristal

Berdasarkan *Classical Nucleation Theory* (CNT), laju nukleasi homogen $J$ dinyatakan oleh:

$$J = A \exp\left(-\frac{16\pi \gamma_s^3 v_m^2}{3(k_B T)^3 (\ln S)^2}\right)$$

di mana $A$ adalah faktor pre-eksponensial (~10²⁰–10³⁰ m⁻³·s⁻¹), $\gamma_s$ adalah tegangan permukaan antar-fase (J/m²), $v_m$ adalah volume molar fase padat, $k_B$ adalah konstanta Boltzmann, dan $S$ adalah tingkat supersaturasi. Pada dinding autoclave yang sudah memiliki *seed* (permukaan baja karbon atau baja tahan karat berpasiokan oksida), nukleasi heterogen dominan terjadi dengan *energy barrier* yang jauh lebih rendah, dimodelkan dengan *shape factor* $\Phi(\theta) < 1$:

$$\Delta G^*_{hetero} = \Phi(\theta) \cdot \Delta G^*_{homo}$$

Laju pertumbuhan kristal mengikuti hukum *power-law*:

$$R_g = \frac{dm}{dt} = k_g \cdot A_s \cdot (S-1)^n$$

dengan $k_g$ konstanta laju pertumbuhan (m/s), $A_s$ luas permukaan kristal efektif, dan $n$ orde pertumbuhan tipikal 1–2.

### 2.3 Model Pertumbuhan Tebal Kerak

Dickson et al. (2026) mengidentifikasi dua rejim pertumbuhan kerak pada autoclave HPAL. Untuk deposit *anhydrite/gypsum*, model parabolic diffusion-limited berlaku:

$$x_s^2(t) = x_0^2 + k_p \cdot t$$

dengan $x_s$ tebal kerak (m), $x_0$ tebal awal, $k_p$ konstanta parabolic (m²/s). Untuk deposit *iron-based* (hematite, jarosite), model linier lebih sesuai karena reaksi permukaan yang dominan:

$$x_s(t) = x_0 + k_l \cdot t$$

Konstanta laju mengikuti persamaan Arrhenius dengan dependensi suhu yang kuat:

$$k = A_k \exp\left(-\frac{E_a}{RT}\right)$$

Nilai tipikal $E_a$ untuk presipitasi CaSO₄ berada pada rentang 40–80 kJ/mol, dan untuk presipitasi *basic iron sulfates* 60–110 kJ/mol (Dickson et al., 2026).

### 2.4 Penurunan Perpindahan Panas Akibat Kerak

Penurunan efisiensi termal merupakan konsekuensi engineering paling langsung dari scaling. Resistansi termal total sistem perpindahan panas autoclave dimodelkan sebagai:

$$\frac{1}{U_{total}} = \frac{1}{h_{process}} + \frac{x_{wall}}{\lambda_{wall}} + \frac{x_s}{\lambda_s} + R_{fouling}} + \frac{1}{h_{coolant}}$$

di mana $U_{total}$ adalah koefisien perpindahan panas keseluruhan (W/m²·K), $h$ koefisien konveksi, $\lambda$ konduktivitas termal, dan $R_{fouling}$ adalah resistansi fouling residual. Kerak *anhydrite* memiliki $\lambda_s \approx 1{,}0{-}2{,}5$ W/m·K, sementara kerak *hematite* $\lambda_s \approx 0{,}5{-}1{,}2$ W/m·K—jauh lebih rendah dari baja tahan karat