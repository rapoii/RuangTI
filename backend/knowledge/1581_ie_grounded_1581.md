# 1581 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (High Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Hidrometalurgi Tekanan Tinggi
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1063/5.0186417)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan bijih nikel laterit telah menjadi tulang punggung rantai pasok kendaraan listrik global, terutama untuk kategori *Class II nickel* (mixed hydroxide precipitate/MHP dan nickel sulfate) yang melayani industri *battery-grade* precursor katoda NCM/NCA. Lebih dari 70% cadangan nikel dunia tersimpan dalam bijih laterit, namun sekitar 60% produksi nikel primer global masih berbasis bijih sulfida yang secara geologis lebih mudah diolah. Pergeseran stratetik ini memaksa hilirisasi bijih laterit *limonitic* dan *saprolitic* melalui proses **High Pressure Acid Leaching (HPAL)** — teknologi hidrometalurgi tekanan tinggi yang diakui sebagai satu-satunya rute komersial yang layak secara teknis untuk mengekstraksi nikel dan kobalt dari bijih laterit kadar rendah (biasanya 0,8–1,5% Ni) secara ekonomis. Seperti ditegaskan oleh Dickson, Deleau, dan Espitalier (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)), perilaku dan karakterisasi kerak (*scaling*) di dalam autoclave HPAL merupakan salah satu bottleneck operasional paling kritis yang menentukan ketersediaan pabrik (*plant availability*), konsumsi energi spesifik, dan ultimately tingkat pengembalian modal (*IRR*) proyek.

Konteks keekonomiannya tidak dapat dipandang sebelah mata. Pabrik HPAL modern — yang dioperasikan oleh pemain seperti PT Halmahera Persada Lygend (Indonesia), Murrin Murrin (Australia), Goro (New Caledonia), Coral Bay dan Taganito (Filipina), serta Ramu (Papua Nugini) — menghadapi CAPEX 1–3 miliar USD per *train* dengan kapasitas 30.000–60.000 t Ni per tahun. Setiap 1% penurunan availability pada fasilitas bernilai miliaran dolar ini setara dengan kerugian revenue 5–15 juta USD per tahun (estimasi berdasarkan harga nikel 18.000 USD/t). Formasi kerak pada dinding autoclave, *baffle*, pipa *flash*, dan *let-down valve* bertanggung jawab atas 30–45% unplanned shutdown pada banyak instalasi HPAL. Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menekankan bahwa langkah desulfurisasi dan parameter *roasting-reduction* pada residu HPAL memiliki korelasi langsung dengan komposisi kerak yang terbentuk di hulu, yang menjadikan pemahaman kimia permukaan dan termodinamika endapan sebagai prasyarat desain operasi.

Urgensi teknisnya bersifat multidimensional. Pertama, kerak bertindak sebagai isolator termal yang menurunkan koefisien perpindahan panas (*overall heat transfer coefficient*, U) dari nilai awal 1.500–2.200 W/m²·K pada autoclave bersih menjadi 350–600 W/m²·K setelah periode operasi 30–60 hari, sehingga konsumsi uap (*steam*) untuk mempertahankan suhu leaching 245–255°C dapat meningkat 25–40%. Kedua, kerak mengurangi volume efektif autoclave (kapasitas turun 5–12%), memperpanjang *residence time* rata-rata slurry dan mengubah hidrodinamika pencampuran. Ketiga, akumulasi kerak besi-alumina-silikat-magnesium sulfat memicu *thermal stress* dan *hot spot* yang menurunkan *fatigue life* baja tahan karat *alloy* tinggi (umumnya *Alloy 20*, *Hastelloy C-276*, atau *Sanicro 28*) — material yang harganya 6–10 kali lipat baja karbon konvensional. Keempat, dalam kerangka *Cleaner Production* dan target *dekarbonisasi* industri metalurgi, mitigasi kerak menjadi enabler langsung pengurangan emisi CO₂ spesifik (t CO₂/t Ni) karena berkorelasi dengan efisiensi energi dan kebutuhan *rework* kimia.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika dan Kinetika Pelindian Asam Tekanan Tinggi

Reaksi pelindian HPAL pada bijih laterit limonitik pada suhu 240–260°C mengikuti stoikiometri dominan:

$$\text{NiO} \cdot \text{Fe}_2\text{O}_3 + 4\text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

dengan kinetika yang umumnya mengikuti *shrinking core model* untuk partikel mineralogi tertentu dan laju yang bergantung pada difusi melalui lapisan produk. Persamaan Arrhenius laju pelindian adalah:

$$k = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

di mana $A$ adalah faktor pra-eksponensial, $E_a$ energi aktivasi (umumnya 50–90 kJ/mol untuk pelindian Ni), $R$ konstanta gas universal (8,314 J/mol·K), dan $T$ suhu absolut (K). Untuk bijih laterit, transisi dari kontrol kinetik kimia ke kontrol difusi terjadi sekitar 220–240°C.

### 2.2 Mekanisme Pembentukan Kerak (*Scaling Mechanism*)

Kerak HPAL terbentuk melalui tiga mekanisme simultan: (a) presipitasi *retrograde* garam sulfat yang kelarutannya menurun drastis pada suhu tinggi (misalnya natrojarosite, alunite, anhydrite); (b) polimerisasi dan *dewatering* silika amorf menjadi fase kristalin; (c) deposisi partikel *goethite/hematite* hasil *re-pulping* slurry yang menempel pada permukaan melalui mekanisme *heterogeneous nucleation*. Untuk pendekatan kuantitatif, kami mendefinisikan laju pertumbuhan tebal kerak $\delta(t)$ mengikuti model parabolik *diffusion-controlled*:

$$\delta(t) = \sqrt{2 \cdot k_p \cdot t + \delta_0^2}$$

dengan $k_p$ (m²/s) adalah konstanta laju pertumbuhan parabolik dan $\delta_0$ tebal kerak awal. Untuk mekanisme *surface reaction-controlled*, hukum laju menjadi linier: $\delta(t) = k_l \cdot t + \delta_0$.

### 2.3 Resistansi Termal Total Autoclave Berlapis Kerak

Koefisien perpindahan panas keseluruhan *scaled* $U_s$ direpresentasikan melalui model resistansi seri:

$$\frac{1}{U_s} = \frac{1}{U_c} + \frac{\delta}{k_{scale}} + R_{film,in} + R_{film,out}$$

di mana $U_c$ adalah koefisien autoclave bersih, $k_{scale}$ konduktivitas termal kerak (umumnya 0,3–1,2 W/m·K untuk kerak multi-fasa Fe-Al-Si sulfat, jauh di bawah 16–20 W/m·K untuk baja tahan karat), dan $R_{film}$ resistansi konveksi pada sisi slurry dan sisi uap. Persamaan fluks panas menjadi:

$$q = \frac{T_{steam} - T_{slurry}}{\frac{1}{U_s}} = U_s \cdot \Delta T_{LMTD}$$

dengan $T_{LMTD}$ pendekatan *Log-Mean Temperature Difference* untuk penukar panas autoclave tipe *compartmentalised* dengan steam injection.

### 2.4 Model Komposisi Kerak dan Kapasitas Larutan

Kelarutan kritis sulfat logam transisi mengikuti:

$$\ln K_{sp}(T) = \ln K_{sp}(T_{ref}) + \frac{\Delta H_{diss}}{R}\left(\frac{1}{T} - \frac{1}{T_{ref}}\right)$$

Untuk alunit $KAl_3(SO_4)_2(OH)_6$, kelarutan turun signifikan di atas 200°C, memicu presipitasi intensif pada rentang operasi 240–255°C. Konsentrasi kritis ion pengendap dihitung dari:

$$[\text{Al}^{3+}]^3 \cdot [\text{K}^+] \cdot [\text{SO}_4^{2-}]^2 > K_{sp}(T)$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dan Titik Kritis Scaling

Diagram blok proses HPAL standar: **(1)** Slurry preparation (pulp density 35–45% solids) → **(2)** Pre-heating (1–4 stages, T 80–180°C) → **(3)** Autoclave leaching (4–6 compartments, T 240–255°C, P 38–45 bar, τ 60–90 min) → **(4)** Flash cooling (multi-stage, tekanan turun ke atmosfer) → **(5)** Counter-current decantation (CCD) thickeners → **(6)** Neutralization dan Mixed Hydroxide Precipitation (MHP). Titik kritis *scaling* terutama terjadi di: bagian atas autoclave (uap-cecairan *interface*), dinding dan *baffle* di kompartemen akhir (suhu & densitas tertinggi), pipa *flash*, dan katup *let-down*.

### 3.2 SOP Pengendalian Kerak Berlapis

**Fase A — Pre-Operation Inspection (setiap 30–45 hari):**
1. Visual borescope inspection pada dinding kompartemen 1–6
2. Pengambilan sampel kerak dengan *pneumatic drill sampling* pada lokasi referensi (8–12 titik per train)
3. Pengukuran tebal kerak dengan *ultrasonic thickness gauge* (frekuensi 5–10 MHz)
4. Karakterisasi laboratorium: XRD (