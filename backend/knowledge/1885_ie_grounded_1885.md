# 1885 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit pada Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions; integrasi dengan pengaruh desulfurisasi dan proses roasting-reduksi pada residu HPAL nikel laterit
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak tajam menyusul transisi elektrifikasi kendaraan dan penetrasi teknologi baterai litium-ion NMC (Ni-Mn-Co) serta NCA (Ni-Co-Al). Lebih dari 60% cadangan nikel dunia berbentuk bijih laterit, namun bijih ini memiliki kadar nikel rendah (0,8–2,5%) dan tersebar dalam mineralogi kompleks berupa limonit, saprolit, dan garnierit (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Proses High-Pressure Acid Leaching (HPAL) merupakan rute hidrometalurgi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit karena kemampuannya melarutkan selektif nikel dan kobalt sambil mempertahankan besi dalam bentuk hematit (Fe₂O₃) atau jarosit yang tidak larut.

Dalam operasional HPAL, slurry bijih laterit dipompa ke dalam autoclave baja berlapis titanium atau stainless-steel khusus dengan kondisi operasi 240–270 °C dan tekanan 35–55 bar, dengan konsumsi asam sulfat 350–500 kg per ton bijih (Andrameda dkk., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)). Meskipun secara termodinamika efisien, skala industri menghadapi tantangan operasional serius berupa *autoclave scaling* — deposisi senyawa anorganik pada dinding dan komponen internal autoclave yang menurunkan koefisien perpindahan panas, mempersempit diameter pipa dan kompartemen, serta memaksa *shutdown* tak terjadwal. Dickson, Deleau, dan Espitalier (2026) secara sistematis mengkarakterisasi perilaku scaling pada autoclave HPAL dengan mengidentifikasi tiga famili kerak utama: (i) endapan berbasis hematit/jarosit (KFe₃(SO₄)₂(OH)₆), (ii) endapan silika/aluminosilikat amorf, dan (iii) endapan sulfat basa aluminium. Studi Andrameda dkk. (2024) menambahkan dimensi kritis berupa pengaruh sulfur dalam feed (sering muncul sebagai pirit FeS₂ atau gypsum) yang tidak hanya menurunkan yield nikel melalui pembentukan alunit dan jarosit, tetapi juga mempercepat laju penskalaan dinding autoclave.

Urgensi ekonomis dari masalah ini sangat signifikan. Studi kelayakan proyek HPAL menunjukkan bahwa *downtime* akibat scaling menambah *operating expense* (OPEX) sebesar USD 0,30–0,80 per pon nikel yang diproduksi, sekaligus mengurangi *throughput* efektif autoclave hingga 15–25% sepanjang siklus operasi (Dickson dkk., 2026). Dengan kapasitas instalasi HPAL modern mencapai 30.000–50.000 ton nikel per tahun per *train*, kehilangan produktivitas akibat penskalaan dapat menimbulkan kerugian finansial lebih dari USD 50 juta per tahun per fasilitas. Karena itu, karakterisasi kuantitatif perilaku scaling menjadi *enabler* utama untuk predictive maintenance, optimasi siklus acid-wash, dan desain *campaign* leaching yang lebih panjang. Integrasi kedua literatur ini memberikan kerangka komprehensif yang menjembatani fenomena *process-side* (desulfurisasi feed dan parameter roasting-reduksi menurut Andrameda dkk., 2024) dengan fenomena *equipment-side* (deposisi kerak dan kinetika penskalaan menurut Dickson dkk., 2026).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Nikel Laterit

Reaksi pelindian nikel dari mineral laterit (khususnya saprolit) pada kondisi HPAL dapat direpresentasikan sebagai reaksi pseudo-homogen orde satu terhadap konsentrasi H⁺:

$$\frac{dC_{Ni}}{dt} = -k_1 \, C_{H^+}^{n} \, C_{Ni}$$

Integrasi pada kondisi $C_{H^+} \approx$ konstan (karena buffer asam sulfat berlebih) menghasilkan:

$$C_{Ni}(t) = C_{Ni,0} \left[1 - \exp\left(-k_1 \, t\right)\right]$$

di mana $k_1$ mengikuti hukum Arrhenius:

$$k_1 = A \exp\left(-\frac{E_a}{RT}\right)$$

dengan $A$ = faktor pre-eksponensial, $E_a$ = energi aktivasi (umumnya 50–90 kJ/mol untuk nikel laterit), $R$ = 8,314 J/(mol·K), dan $T$ = suhu absolut (K).

### 2.2 Model Pembentukan Kerak Autoclave

Dickson dkk. (2026) mengusulkan model deposisi kerak berbasis *mass-transfer-limited crystallization* yang menggabungkan fluks difusi dan kinetika nukleasi. Laju deposisi massa kerak per satuan luas, $\dot{m}_{s}$ (kg/m²·jam), dinyatakan sebagai:

$$\dot{m}_{s} = k_{d} \left(C_{sat} - C_{b}\right) \cdot \exp\left(-\frac{E_{d}}{RT_{w}}\right)$$

di mana $k_d$ = koefisien transfer massa deposisi (m/s), $C_{sat}$ = konsentrasi jenuh ion pembentuk kerak (mol/L), $C_b$ = konsentrasi di bulk, $E_d$ = energi aktivasi deposisi, dan $T_w$ = suhu dinding autoclave.

### 2.3 Kinetika Hidrolisis Fe dan Pembentukan Hematit

Reaksi kritis dalam HPAL adalah hidrolisis Fe³⁺ menjadi hematit:

$$2\,\text{Fe}^{3+} + 3\,\text{H}_2\text{O} \rightleftharpoons \text{Fe}_2\text{O}_3\,(s) + 6\,\text{H}^+$$

Konsentrasi kesetimbangan Fe³⁺ pada suhu $T$ mengikuti:

$$\left[\text{Fe}^{3+}\right]_{eq} = K_{sp}^{1/2} \left[\text{H}^+\right]^3$$

Kelarutan Fe³⁺ menurun drastis pada T > 240 °C, sehingga pada suhu tersebut sebagian besar Fe mengalami presipitasi sebagai hematit atau jarosit. Pembentukan jarosit melalui reaksi:

$$3\,\text{Fe}^{3+} + 2\,\text{SO}_4^{2-} + 6\,\text{H}_2\text{O} \rightleftharpoons \text{KFe}_3(\text{SO}_4)_2(\text{OH})_6 + 6\,\text{H}^+ + \text{K}^+$$

menjadi jalur penskalaan dominan bila konsentrasi sulfat tinggi dan ion monovalen (K⁺, Na⁺) cukup.

### 2.4 Neraca Massa dan Energi pada Autoclave

Untuk autoclave dengan volume $V$, laju alir slurry $Q$, dan waktu tinggal $\tau = V/Q$, neraca panas steady-state:

$$\dot{m} c_p (T_{in} - T_{out}) + \Delta H_{rxn} \, r \, V = UA \, (T_{w} - T_{bulk})$$

di mana $\dot{m}$ = laju alir massa slurry, $c_p$ = kapasitas panas spesifik, $r$ = laju reaksi per volume, $U$ = koefisien perpindahan panas keseluruhan, dan $A$ = luas permukaan heat exchanger. Penebalan kerak menurunkan $U$ melalui:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_s}{k_s} + \frac{1}{h_o}$$

di mana $\delta_s$ dan $k_s$ adalah tebal dan konduktivitas termal kerak (umumnya $\delta_s$ mencapai 5–25 mm dengan $k_s \approx$ 0,3–1,2 W/m·K menurut Dickson dkk., 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial dari temuan Dickson dkk. (2026) dan Andrameda dkk. (2024) untuk mitigasi *autoclave scaling* mengikuti kerangka SOP berikut:

**Tahap 1 — Karakterisasi Feed dan Desulfurisasi (Pre-treatment).**
- Sampling bijih laterit dan analisis XRF/XRD untuk menentukan kadar Fe (total dan sebagai goethite), Al, Si, Mg, dan S total.
- Bila kadar S > 0,4%, dilakukan *pre-roasting* pada suhu 600–750 °C selama 30–60 menit untuk dekomposisi pirit menjadi hematit dan SO₂ (Andrameda dkk., 2024), dengan reaksi: $4\,\text{FeS}_2 + 11\,\text{O}_2 \rightarrow 2\,\text{Fe}_2\text{O}_3 + 8\,\text{SO}_2$. Agen desulfurisasi seperti Na₂CO₃ atau CaCO₃ dapat ditambahkan untuk mengikat sulfur sebagai sulfat stabil.
- *Roasting-reduksi* selektif (reductive roasting dengan batubara atau gas CO) mengurangi Fe³⁺ menjadi Fe²⁺ (yang lebih larut dan lambat membentuk jarosit), sekaligus mengubah mineral nikel laterit menjadi fase reduksi yang lebih reaktif terhadap asam.

**Tahap 2 — Preparasi Slurry dan Injeksi ke Autoclave.**
- Slurry dipreparasi pada solid-to-liquid ratio 1:1 sampai 1:1,5 (w/w) dengan penambahan asam sulfat 350–500 kg/t bijih.
- Penambahan *seed* hematit sebanyak 5–15 g/L untuk mengontrol nukleasi heterogen dan menghasilkan partikel hematit yang tumbuh di bulk solution, bukan di dinding autoclave (Dickson dkk., 2026).
- Pengaturan pH awal slurry pada 1,0–1,5 untuk mencegah presipitasi dini.

**Tahap 3 — Operasi HPAL dalam Autoclave Multi-kompartemen.**
- Pemanasan slurry secara gradual: kompartemen prapanas (180–220 °C), kompartemen leaching utama (245–270 °C), dan kompartemen pendinginan (flash cooling).
- Waktu tinggal total 60–90 menit, dengan tekanan operasi dijaga pada 35–55 bar.
- Agitasi mekanis 200–400 rpm menggunakan impeller titanium untuk mencegah gradien konsentrasi lokal yang memicu penskalaan dinding.

**Tahap 4 — Monitoring dan Predictive Maintenance.**
- Implementasi *online monitoring* suhu dinding autoclave (RTD thermocouple) untuk mendeteksi penurunan $U$ yang mengindikasikan penebalan kerak.
- Penjadwalan *acid wash* periodik (H₂SO₄ 5–10% pada 60–80 °C) setiap 20–40 hari operasi untuk melarutkan kerak hematit dan jarosit.
- Pengukuran laju korosi paduan titanium (umumnya < 0,1 mm/tahun) sebagai parameter kritis integritas struktural.

**Tahap 5 — Post-treatment dan Pemulihan Logam.**
- Larutan kaya nikel-kobalt dimurnikan melalui *neutralization* (menghilangkan sisa Fe/Al), *selective precipitation*, dan *solvent extraction* (SX) sebelum *electrowinning*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah fasilitas HPAL berkapasitas 35.000 t Ni/tahun mengolah bijih limonitic-saprolitic blend dengan komposisi feed: 1,6% Ni, 38% Fe, 4,5% Al, 12% SiO₂, 0,55% S total, dan 1,8% Mg. Suhu operasi autoclave 255 °C (528 K), waktu tinggal 75 menit, laju alir slurry 250 m³/jam, dan solid-to-liquid ratio 1:1,2.

**Langkah 1 — Estimasi laju pelindian nikel.**
Dengan $k_1$ pada 255 °C menggunakan parameter Arrhenius dari literatur ($A = 4,2 \times 10^5$ jam⁻¹, $E_a = 68$ kJ/mol):

$$k_1 = 4{,}2 \times 10^5 \cdot \exp\left(-\frac{68.000}{8{,}314 \cdot 528}\right) = 4{,}2 \times 10^5 \cdot \exp(-15{,}48) \approx 6{,}1 \text{ jam}^{-1}$$

Recovery Ni pada $t = 1{,}25$ jam:

$$X_{Ni} = 1 - \exp(-6{,}1 \times 1{,}25) = 1 - \exp(-7{,}63) = 99{,}95\%$$

Realistis, dengan memperhitungkan efisiensi mixing dan fouling, recovery aktual sekitar 93–95%.

**Langkah