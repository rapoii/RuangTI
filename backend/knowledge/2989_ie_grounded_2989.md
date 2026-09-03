# 2989 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang mengalami transformasi struktural akibat semakin menipisnya cadangan bijih nikel sulfida (magmatik) yang secara tradisional menjadi tulang punggung produksi nikel dunia. Sejak awal abad ke-21, bijih nikel laterit (*lateritic nickel ore*) yang mencakup sekitar 70% cadangan nikel terrestrial global, telah menjadi sumber daya strategis utama. Namun, kadar nikel yang rendah (biasanya 1,0–2,5% Ni) serta komposisi mineralogi yang didominasi oleh besi (Fe), aluminium (Al), magnesium (Mg), dan silika (Si) menuntut teknologi hidrometalurgi bertekanan tinggi yang dikenal sebagai **High-Pressure Acid Leaching (HPAL)**.

Proses HPAL beroperasi pada suhu 240–270 °C dan tekanan 4,0–5,5 MPa dengan media asam sulfat (H₂SO₄) berkonsentrasi 150–250 g/L (Whittington & Muir, 2000; McDonald & Whittington, 2008). Pada rentasi termodinamika ini, mineralogi limonit dan saprolit terlarutkan secara selektif dengan pelindian nikel dan kobalt, sementara sebagian besar besi diendapkan kembali sebagai hematit (Fe₂O₃). Akan tetapi, pembentukan kembali padatan pada dinding dan elemen internal autoclave—yang secara kolektif disebut *scaling* atau kerak—merupakan masalah operasional kronis yang sangat merugikan.

Kontribusi ilmiah Dickson, Deleau, dan Espitalier (2026) dalam jurnal *Cleaner Waste Systems* menyoroti perilaku pembentukan kerak secara *in-situ* selama pelindian nikel laterit, dengan melakukan karakterisasi mineralogi, morfologi, serta laju pertumbuhan kerak melalui pendekatan analisis multi-skala (XRD, SEM-EDS, TGA, dan ICP-OES). Studi ini menunjukkan bahwa komposisi kerak sangat bergantung pada parameter proses seperti suhu, konsentrasi asam, densitas pulp, dan waktu retensi, dengan setidaknya empat fasa dominan yang teridentifikasi: hematit, alunit (KAl₃(SO₄)₂(OH)₆), gipsum (CaSO₄·2H₂O), dan silika amorf. Sebaran morfologi kerak yang tidak homogen sepanjang autoclave mencerminkan gradien termal dan kimia yang kompleks.

Implikasi ekonomi dari fenomena scaling ini sangat signifikan. Pada fasilitas HPAL skala komersial seperti PT Halmahera Persada Lygend (Indonesia) atau proyek-proyek Coral Bay, Ramu, dan Goro, kehilangan kapasitas produksi akibat kerak dilaporkan mencapai 10–30% per siklus operasi. Setiap siklus *cleaning* (pembersihan mekanik-kimiawi) memakan waktu 2–4 minggu dengan biaya antara USD 5–15 juta per peristiwa shutdown. Secara agregat, biaya operasional terkait scaling dapat menambah 5–10% dari total biaya produksi nikel (*cash cost*).

Pendekatan valorisasi residu HPAL yang dikemukakan Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* menambahkan dimensi keberlanjutan. Mereka mengeksplorasi efek agen desulfurisasi (misalnya Na₂CO₃, NaOH, dan Ca(OH)₂), suhu, serta durasi proses *roasting-reduction* terhadap pemulihan nikel dari residu HPAL yang mengandung sulfur dan besi tinggi. Integrasi kedua perspektif ini—mitigasi *scaling* di hulu dan valorisasi residu di hilir—merupakan kerangka rekayasa sistem industri yang krusial untuk keberlanjutan industri nikel laterit.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika dan Kinetika Pembentukan Kerak

Pembentukan kerak HPAL mengikuti pola nukleasi-homogen dan pertumbuhan heterogen yang dapat diformulasikan melalui persamaan Arrhenius untuk laju pengendapan fasa padat:

$$k_p = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

di mana $k_p$ adalah konstanta laju presipitasi (m/s), $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), dan $T$ adalah suhu absolut (K). Untuk presipitasi hematit dalam media asam sulfat, energi aktivasi tipikal berkisar 60–85 kJ/mol (Berezowsky, 1990).

Laju pertumbuhan ketebalan kerak $\delta(t)$ mengikuti model parabolic:

$$\delta(t) = \sqrt{2 \cdot D_{eff} \cdot C_s \cdot \frac{M_w}{\rho_s} \cdot t}$$

dengan $D_{eff}$ adalah koefisien difusi efektif spesies pengendap, $C_s$ adalah konsentrasi jenuh, $M_w$ massa molar fasa padat, $\rho_s$ densitas kerak, dan $t$ adalah waktu operasi.

### 2.2 Model Tahanan Termal Majemuk

Penurunan koefisien perpindahan panas menyeluruh $U$ akibat akumulasi kerak dimodelkan dengan jaringan tahanan termal seri:

$$\frac{1}{U_{total}} = \frac{1}{h_i} + \frac{\delta_s}{k_s} + \frac{\delta_w}{k_{steel}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ berturut-turut adalah koefisien konveksi internal (slurry) dan eksternal (steam), $\delta_s$ adalah ketebalan kerak, $k_s$ konduktivitas termal kerak, $\delta_w$ ketebalan dinding baja autoclave, dan $k_{steel}$ ≈ 45 W/(m·K).

### 2.3 Laju Korosi dan Kinetika Pelindian Selektif

Perolehan nikel $\eta_{Ni}$ didefinisikan sebagai:

$$\eta_{Ni} = \frac{m_{Ni}^{leached}}{m_{Ni}^{ore}} \times 100\%$$

sedangkan selectivity ratio:

$$S_{Ni/Fe} = \frac{\eta_{Ni}}{\eta_{Fe}}$$

menjadi indikator kualitas proses: semakin tinggi $S_{Ni/Fe}$, semakin murni larutan yang diperoleh dan semakin sedikit Fe yang harus diendapkan (potensi kerak berkurang).

### 2.4 Kriteria Perpindahan Massa dan Energi

Bilangan Reynolds slurry dalam autoclave:

$$Re = \frac{\rho_{slurry} \cdot v \cdot D_e}{\mu_{slurry}}$$

Bilangan Nusselt untuk campuran non-Newtonian dalam tangki beraduk (*autoclave stirred tank*):

$$Nu = 0{,}74 \cdot Re^{