# 2829 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Karakterisasi perilaku kerak (scaling) pada autoclave proses *High Pressure Acid Leaching* (HPAL) bijih nikel laterit
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global tengah mengalami transformasi struktural yang dipicu oleh permintaan baterai lithium-ion untuk kendaraan listrik (*electric vehicles*/EV) dan sistem penyimpanan energi. Lebih dari 70% cadangan nikel dunia berada dalam bentuk bijih laterit (*oxide ore*), yang tidak dapat diproses secara ekonomis melalui teknik pirometalurgi konvensional (smelting) untuk menghasilkan *Class I nickel* (nikel dengan kemurnian >99,8%) yang dibutuhkan baterai. Teknologi *High Pressure Acid Leaching* (HPAL) muncul sebagai *workhorse* hidrometalurgi untuk mengekstraksi nikel dan kobalt dari bijih laterit saponit-limonit pada suhu tinggi (240–270 °C) dan tekanan tinggi (35–55 bar) dengan pereaksi asam sulfat.

Dickson, Deleau, dan Espitalier (2026) menyoroti salah satu tantangan operasional paling kritis dalam HPAL, yaitu **fenomena *autoclave scaling*** — terbentuknya endapan keras anorganik pada dinding, pipa, dan impeller autoclave yang secara langsung menurunkan koefisien perpindahan panas, menambah bobot mati (*dead load*) struktur, dan memaksa *unscheduled shutdown* untuk dilakukan *decoking* maupun *hydroblasting*. Pada lini produksi HPAL komersial seperti Murrin Murrin, Ravensthorpe, Goro, dan Ambatovy, downtime terkait kerak dilaporkan dapat mengonsumsi 8–15% dari total *available operating time*, dengan estimasi kerugian produksi USD 5–15 juta per peristiwa *shutdown* besar. Sebagai konteks strategis, Indonesia — yang menguasai ~38% produksi nikel dunia — sedang membangun setidaknya 8–10 kompleks HPAL baru di Morowali, Halmahera, dan Sulawesi Tenggara dalam kerangka *Indonesia Morowali Industrial Park* (IMIP), sehingga keandalan autoclave menjadi variabel determinan bagi kelayakan finansial proyek.

Studi Andrameda, Triaswinanti, dan Madra (2024) melengkapi wacana ini dengan menginvestigasi efek agen desulfurisasi, suhu, dan durasi *roasting-reduction* terhadap residu HPAL, yang secara langsung berkaitan dengan manajemen slag dan meminimalisasi senyawa pembentuk kerak seperti *basic ferric sulfate* dan alunit. Modul 2829 ini menyintesiskan kedua literatur tersebut ke dalam kerangka rekayasa sistem industri untuk memahami, mengkuantifikasi, dan mengendalikan *autoclave scaling* pada lini HPAL.

## 2. Landasan Teori & Formulasi Matematis

Perilaku kerak pada autoclave HPAL merupakan resultante dari tiga fenomena simultan: (a) kelarutan dan *supersaturasi* spesies ion dalam slurry, (b) nukleasi heterogen dan pertumbuhan kristal, serta (c) aglomerasi partikel serta deposisi pada permukaan logam. Pemodelan kuantitatif memerlukan kerangka termodinamika dan kinetika yang ketat.

### 2.1 Keseimbangan Kelarutan dan Produk Kelarutan

Kerak HPAL umumnya terdiri dari campuran hematit (α-Fe₂O₃), alunit (KAl₃(SO₄)₂(OH)₆), anhidrit (CaSO₄), dan magnesium sulfat hidrat (MgSO₄·nH₂O). Konstanta produk kelarutan (Ksp) merupakan fungsi suhu melalui persamaan van't Hoff:

$$\ln K_{sp}(T) = \ln K_{sp}(T_{ref}) - \frac{\Delta H^{\circ}_{diss}}{R}\left(\frac{1}{T} - \frac{1}{T_{ref}}\right)$$

dengan $T$ dalam Kelvin, $\Delta H^{\circ}_{diss}$ entalpi disosiasi standar (J/mol), dan $R = 8{,}314$ J/(mol·K). Untuk alunit, harga tipikal $\Delta H^{\circ}_{diss}$ berkisar 145–180 kJ/mol sehingga kelarutan menurun tajam ketika suhu operasi autoclave melampaui ambang kristalisasi sekitar 220–240 °C.

### 2.2 Kinetika Pertumbuhan Kerak (*Scaling Rate*)

Laju penebalan kerak pada permukaan autoclave ($\frac{dx}{dt}$) mengikuti hukum parabolik (*diffusion-controlled growth*):

$$\frac{dx}{dt} = \frac{k_p \cdot C_s^n}{x}$$

yang setelah integrasi menghasilkan:

$$x(t) = \sqrt{2 k_p C_s^n \, t + x_0^2}$$

dengan $x$ tebal kerak (m), $k_p$ konstanta laju (m²/s), $C_s$ konsentrasi *supersaturasi* (mol/m³), dan $n$ orde reaksi (umumnya 1–2). Konstanta $k_p$ dependen suhu menurut persamaan Arrhenius:

$$k_p = A \, e^{-E_a/RT}$$

dengan energi aktivasi $E_a$ untuk alunit dan *basic ferric sulfate* dilaporkan 65–95 kJ/mol pada rentang operasi HPAL.

### 2.3 Kinetika Pelindian — *Shrinking Core Model*

Ekstraksi Ni dari limonit mengikuti model inti menyusut (*shrinking unreacted core*) dikontrol difusi melalui lapisan produk:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \, C_A}{\rho_B \, r_p^2}\, t$$

dengan $\alpha$ fraksi Ni terleaching (0–1), $C_A$ konsentrasi asam (kg/m³), $\rho_B$ densitas padatan (kg/m³), $r_p$ jari-jari partikel, dan $k_d$ koefisien difusi efektif.

### 2.4 Neraca Energi dan Perpindahan Panas

Koefisien perpindahan panas keseluruhan $U$ antara steam pemanas dan slurry melalui dinding autoclave yang sudah berkerak:

$$\frac{1}{U} = \frac{1}{h_{steam}} + \frac{x_{steel}}{k_{steel}} + \frac{x_{scale}}{k_{scale}} + \frac{1}{h_{slurry}}$$

Kerak dengan $k_{scale} \approx 0{,}5$–$1{,}2$ W/(m·K) (alunit/hematit) menjadi *thermal bottleneck* yang mampu meningkatkan konsumsi steam 12–25% bila tebal $x_{scale}$ melampaui 8–10 mm.

### 2.5 Neraca Massa Asam Sulfat

Konsumsi asam sulfat (kg H₂SO₄ per ton bijih kering) untuk bijih laterit saponit dengan kadar MgO 8–14%:

$$M_{H_2SO_4} = \sum_i \nu_i \, n_i^{oxide} \cdot \frac{MW_{H_2SO_4}}{MW_{oxide}}$$

dengan $\nu_i$ koefisien stoikiometri untuk reaksi: Fe₂O₃ + 3H₂SO₄ → Fe₂(SO₄)₃ + 3H₂O; Al₂O₃ + 3H₂SO₄ → Al₂(SO₄)₃ +