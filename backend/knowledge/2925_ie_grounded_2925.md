# 2925 — Karakterisasi Perilaku Pembentukan Kerak (Scaling) pada Autoclave dalam Pelindian Bijih Nikel Laterit Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi masif yang dipicu oleh transisi energi, elektrifikasi kendaraan, dan permintaan baterai lithium-ion yang diproyeksikan tumbuh Compound Annual Growth Rate (CAGR) di atas 12% per tahun hingga 2030 (Dickson *et al.*, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Lebih dari 60% cadangan nikel dunia berbentuk bijih laterit kadar rendah (limonit dan saprolit) yang hanya dapat diproses secara ekonomis melalui teknologi High Pressure Acid Leaching (HPAL), bukan melalui pirometalurgi konvensional. Teknologi HPAL yang beroperasi pada suhu 220–270 °C dan tekanan 30–45 bar dalam autoclave horizontal multi-kompartemen telah menjadi *backbone* operasional proyek-proyek strategis di Indonesia, termasuk di Halmahera (Halmahera Persada Lygend), Morowali, dan Sulawesi Tenggara. Dalam konteks nasional, kontribusi Indonesia sebagai produsen nikel terbesar dunia—yang menyumbang lebih dari 48% produksi global—menjadikan keandalan operasi HPAL sebagai isu strategis ketahanan industri (*industrial sovereignty*) dan juga isu lingkungan karena proses ini menghasilkan tailing magnesia-silika dengan pH rendah.

Permasalahan operasional paling signifikan yang dibahas oleh Dickson, Deleau, dan Espitalier (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) adalah pembentukan kerak (*autoclave scaling*) yang terjadi secara sistematis pada dinding dalam autoclave. Kerak ini terbentuk sebagai produk samping reaksi pelindian asam sulfat terhadap mineral-mineral laterit seperti goethit (FeOOH), gibsit (Al(OH)₃), dan serpentin (Mg₃Si₂O₅(OH)₄). Akumulasi kerak tersebut menyebabkan beberapa degradasi performa kritis: (1) koefisien pindah panas keseluruhan (*overall heat transfer coefficient*, *U*) menurun secara signifikan seiring waktu operasi, sehingga kebutuhan steam untuk mempertahankan suhu isothermal 250 °C meningkat; (3) throughput volumetrik efektif berkurang karena penampang reaktor menyempit; (4) keausan mekanis pada agitator dan komponen internal; dan (5) *unplanned downtime* untuk *acid wash* dan *mechanical descaling*. Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melengkapi perspektif ini dengan menunjukkan bahwa residu HPAL yang mengandung sulfur dan besi masih memerlukan proses *roasting-reduction* lanjutan untuk pemulihan nilai tambah, sehingga sirkuit panas dan asam harus dirancang agar kehilangan (*losses*) ke kerak diminimalkan untuk menjaga kelayakan ekonomi total proses. Kedua literatur tersebut menegaskan bahwa karakterisasi perilaku kerak bukan sekadar persoalan teknis pemeliharaan, melainkan variabel keputusan rekayasa sistem industri yang menentukan Availability, Throughput, dan Total Cost of Ownership fasilitas HPAL.

Urgensi ekonomi dapat dihitung secara kasar: pada fasilitas HPAL kapasitas 50.000 ton Ni-equiv/tahun dengan margin USD 4.000–6.000/ton Ni, setiap satu hari *unplanned shutdown* setara dengan kerugian opportunity cost sebesar USD 5,5–8,2 juta. Dengan frekuensi *shut-down* 8–12 kali per tahun yang lazim terjadi pada fasilitas HPAL konvensional akibat scaling, total *production loss* mencapai USD 44–98 juta/tahun—angka yang menjelaskan mengapa riset karakterisasi kerak seperti yang dilakukan Dickson *et al.* (2026) menjadi investasi R&D yang sangat rasional. Lebih jauh, pemahaman kuantitatif terhadap mekanisme nukleasi, pertumbuhan, dan komposisi kerak memungkinkan rekayasa preventif seperti *anti-scalant injection*, modifikasi komposisi feed slurry, dan optimasi profil suhu-tekanan yang menjadi pilar *Operational Excellence* fasilitas HPAL modern.

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang dibangun untuk menjelaskan perilaku kerak pada autoclave HPAL mengintegrasikan tiga sub-model: (a) kinetika pelindian mineralogi bijih, (b) kinetika pertumbuhan kerak, dan (c) model perpindahan panas dengan *fouling resistance*. Berikut formulasi lengkapnya.

### 2.1 Kinetika Pelindian: Shrinking Core Model (SCM)

Untuk reaksi pelindian partikel bijih laterit bulat dengan asam sulfat, model Inti Mengecil (Shrinking Unreacted Core) lazim diaplikasikan. Untuk mineral goethit α-FeOOH, reaksi stoikiometri dasarnya adalah:

$$2\text{FeOOH} + 3\text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

Fraksi konversi Fe ke dalam larutan, $X_{Fe}$, mengikuti bentuk terintegrasi:

$$1 - (1 - X_{Fe})^{1/3} = \frac{k_s \cdot C_A \cdot t}{\rho_p \cdot R_p}$$

di mana $k_s$ adalah konstanta kecepatan reaksi permukaan (m/s), $C_A$ adalah konsentrasi asam sulfat di *bulk* (kg/m³), $t$ adalah waktu tinggal (s), $\rho_p$ densitas partikel (kg/m³), dan $R_p$ jari-jari partikel (m). Untuk Ni yang terinklusi dalam matriks goethit/laterit, ekstraksinya mengikuti kinetika serupa dengan $k_{Ni}$ yang umumnya 1,4–1,8 kali lebih cepat dibanding Fe karena Ni²⁺ lebih mudah larut.

Ketergantungan suhu mengikuti hukum Arrhenius:

$$k_s = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ = 60–85 kJ/mol (umum untuk reaksi pelindian laterit HPAL), $R$ = 8,314 J/(mol·K), dan $T$ suhu absolut (K).

### 2.2 Kinetika Pertumbuhan Kerak

Pertumbuhan tebal kerak $\delta(t)$ (dalam meter) mengikuti hukum parabolik Wagner-type untuk proses *diffusion-controlled solid-state growth*:

$$\delta^2(t) = 2 \cdot k_p \cdot t \quad \Rightarrow \quad \frac{d\delta}{dt} = \frac{k_p}{\delta}$$

dengan $k_p$ adalah konstanta parabolik pertumbuhan kerak (m²/s) yang tergantung pada suhu:

$$k_p = k_{p,0} \cdot \exp\left(-\frac{E_{a,p}}{RT}\right)$$

Untuk kerak hematit-goethit pada autoclave HPAL, $E_{a,p}$ berada pada rentang 75–110 kJ/mol. Persamaan diferensial ini memiliki solusi implisit yang menunjukkan bahwa laju pertumbuhan kerak melambat seiring bertambahnya tebal kerak, namun *availability loss* yang diakibatkannya bersifat *path-dependent*.

### 2.3 Perpindahan Panas dengan Fouling Resistance

Koefisien perpindahan panas keseluruhan *U* (W/m²·K) menurut resistansi-telirisan-tahanan (*resistance-in-series*) adalah:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta}{k_s^{scale}} + \frac{x_{wall}}{k_{wall}} + \frac{1}{h_o}$$

di mana $h_i$ adalah koefisien konveksi sisi slurry (dalam), $k_s^{scale}$ konduktivitas termal kerak (0,4–1,2 W/m·K untuk kerak hematit-basah), $x_{wall}$ tebal dinding autoclave (carbon steel tipikal 50–80 mm dengan $k_{wall}$ ≈ 45 W/m·K), dan $h_o$ koefisien konveksi sisi steam. Penurunan $U$ seiring waktu menjadi *Key Performance Indicator* degradasi termal:

$$\eta_{thermal}(t) = \frac{U(t)}{U_0} = \left[1 + \frac{h_i \cdot \delta(t)}{k_s^{scale}}\right]^{-1}$$

### 2.4 Konsumsi Asam Stoikiometri dan Neraca Massa

Kebutuhan asam sulfat per ton bijih (*acid consumption*, kg H₂SO₄/t ore) ditentukan oleh komposisi mineralogi:

$$AC = \sum_i \nu_i \cdot \frac{M_{H_2SO_4}}{M_i} \cdot w_i$$

di mana $\nu_i$ adalah koefisien stoikiometri, $M$ massa molar, dan $w_i$ fraksi massa mineral $i$. Untuk bijih limonit tipikal (Fe = 38%, Mg = 4%, Al = 3%), $AC$ berada pada 380–480 kg/t