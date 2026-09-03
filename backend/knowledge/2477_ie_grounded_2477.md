# 2477 — Perilaku Scaling Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel laterit global sedang menghadapi tantangan operasional yang semakin kompleks seiring meningkatnya permintaan baterai kendaraan listrik (*electric vehicle*/EV) dan baja nikel khusus. Bijih laterit—yang menyusun hampir 70% cadangan nikel bumi tetapi hanya menyumbang sekitar 40% produksi nikel primer—memiliki karakteristik mineralogi limonitik dan saprolitik yang menuntut teknologi hidrometalurgi khusus untuk mengekstraksi nikel dan kobalt secara ekonomis. Di antara teknologi yang tersedia, proses **High-Pressure Acid Leaching (HPAL)** menjadi standar industri (*industry benchmark*) karena mampu mencapairecovery nikel >90% dari bijih limonitik kadar rendah (1,0–1,5% Ni). Namun demikian, seperti yang didokumentasikan secara empiris oleh Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)), permasalahan **autoclave scaling** masih menjadi *single largest contributor* terhadap degradasi kinerja operasional HPAL, menyebabkan kerugian produksi hingga 15% kapasitas terpasang (*nameplate capacity*) pada fasilitas komersial di Sulawesi dan Filipina.

Fenomena scaling dalam autoclave HPAL terjadi karena kombinasi kondisi termodinamika ekstrem—temperatur operasi 240–270 °C dan tekanan parsial 35–50 bar—dengan kimia air proses yang sangat agresif (H₂SO₄ 50–150 g/L). Presipitat utama yang membentuk kerak (*scale*) adalah campuran kompleks **hematit (α-Fe₂O₃)**, **goethit terhidrasi (α-FeOOH→Fe₂O₃·H₂O)**, **alunit/hidrogarnet aluminium**, dan **silika amorf (SiO₂·nH₂O)** yang terdeposisi pada dinding internal autoclave, pipa transfer slurry, dan elemen pemanas (*heater tubes*). Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menegaskan bahwa keberadaan sulfur residual dalam biji—yang selanjutnya didesulfurisasi melalui proses *roasting-reduction*—berkorelasi langsung dengan kinetika presipitasi scale dan komposisi kimia endapan autoclave. Urgensi rekayasa dari penelitian ini bersifat tiga-dimensi: **(1) ekonomi** karena biaya *shutdown* untuk *de-scaling* mencapai USD 2–5 juta per event pada autoclave komersial berkapasitas 5.000 tpd; **(2) lingkungan** karena pembuangan scale yang mengandung logam berat ke *tailings storage facility* (TSF) memerlukan stabilisasi geokimia jangka panjang; dan **(3) keberlanjutan proses** karena *throughput* menurun drastis ketika ketebalan scale melebihi ambang kritis 8–12 mm, sehingga koefisien perpindahan panas overall (*U*-value) jatuh di bawah 250 W/m²·K. Kajian oleh Dickson et al. (2026) secara kuantitatif memetakan perilaku tersebut melalui karakterisasi mineralogi XRD/SEM-EDS dan pemodelan termodinamika kinetik yang akan diuraikan pada bagian Landasan Teori.

## 2. Landasan Teori & Formulasi Matematis

Perilaku scaling autoclave HPAL dapat diformulasikan melalui empat kerangka matematis yang saling komplementer: **(a) kesetimbangan termodinamika presipitasi**, **(b) kinetika nukleasi-tumbuh partikel**, **(c) resistansi perpindahan panas berlapis**, dan **(d) neraca massa downstream**.

**(a) Kesetimbangan presipitasi hematit.** Reaksi disosiasi goethit dan oksidasi Fe²⁺→Fe³⁺ dalam medium sulfat mengikuti persamaan kesetimbangan:

$$\text{FeOOH}_{(s)} + \text{H}^+_{(aq)} \rightleftharpoons \text{Fe}^{3+}_{(aq)} + 2\text{H}_2\text{O}_{(l)}, \quad \log K_{sp}(T) = -\frac{2.485 \times 10^{3}}{T} + 5{,}71$$

dengan $T$ dalam Kelvin. Konsentrasi Fe³⁑ supersaturasi terhadap hematit didefinisikan sebagai:

$$\Omega = \frac{a_{\text{Fe}^{3+}}^{2} \cdot a_{\text{O}^{2-}}^{3}}{K_{sp}(\alpha\text{-Fe}_2\text{O}_3)}$$

Ketika $\Omega > 1$, presipitasi menjadi spontan dengan laju yang mengikuti model Arrhenius klasik.

**(b) Kinetika nukleasi-tumbuh.** Laju pertumbuhan scale per satuan luas permukaan autoclave, $R_s$ (kg/m²·jam), mengikuti persamaan kinetik homogen-heterogen kombinasi:

$$R_s = k_0 \exp\left(-\frac{E_a}{RT}\right) \cdot [\text{Fe}^{3+}]^n [\text{SO}_4^{2-}]^m \cdot (1-\theta)$$

di mana $k_0$ adalah konstanta pre-exponensial, $E_a$ adalah energi aktivasi (khas 65–85 kJ/mol untuk presipitasi hematit dalam medium sulfat), $R$ adalah konstanta gas universal (8,314 J/mol·K), $n$ dan $m$ adalah orde parsial reaksi (empiris 1,2–1,8 dan 0,3–0,5), dan $\theta$ adalah fraksi permukaan autoclave yang sudah tertutup scale (0 ≤ θ ≤ 1).

**(c) Resistansi termal berlapis.** Koefisien perpindahan panas overall, $U$ (W/m²·K), menurun seiring akumulasi scale sesuai model resistansi seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{x_s}{k_s} + \frac{x_{st}}{k_{st}} + \frac{x_w}{k_w} + \frac{1}{h_o}$$

dengan $h_i$ dan $h_o$ adalah koefisien konveksi fluida internal (slurry asam) dan eksternal (steam), $x_s, x_{st}, x_w$ adalah ketebalan berturut-turut untuk scale, *steel wall*, dan deposit korosi air (*water-side fouling*), sedangkan $k_s, k_{st}, k_w$ adalah konduktivitas termal material terkait. Untuk scale hematit-goethit, $k_s \approx 0{,}35$–$0{,}80$ W/m·K, jauh lebih rendah dibanding baja karbon autoclave $k_{st} \approx 45$ W/m·K.

**(d) Neraca massa air umpan (*feed slurry*).** Komposisi umpan dapat dinyatakan sebagai:

$$M_{\text{feed}} = M_{\text{Ni}} + M_{\text{Co}} + M_{\text{Fe}} + M_{\text{Al}} + M_{\text{SiO}_2} + M_{\text{MgO}}$$

dan *extraction efficiency* nikel didefinisikan:

$$\eta_{\text{Ni}} = \frac{C_{\text{Ni,PLS}} \cdot V_{\text{PLS}}}{C_{\text{Ni,feed}} \cdot m_{\text{feed}}} \times 100\%$$

dengan $C$ adalah konsentrasi (mg/L atau %), $V$ volume liquor, dan $m$ massa bijih umpan. Penurunan $\eta_{\text{Ni}}$ akibat scaling merupakan indikator kunci degradasi proses yang digunakan Dickson et al. (2026) sebagai variabel respon utama.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis strategi mitigasi scaling autoclave mengikuti kerangka *Plan–Do–Check–Act* (PDCA) yang diadaptasi dari standar ISO 9001 dan *good engineering practice* industri hidrometalurgi. Tahapan prosedural dapat divisualisasikan sebagai diagram alir berikut:

**Tahap 1: Karakterisasi umpan (Characterisation).** Meliputi analisis *loss-on-ignition* (LOI), XRF untuk komposisi mayor, XRD untuk fase mineralogi (khas: goethit >50%, garnierit, serpentin), dan *size distribution* (P₈₀ = 75–150 μm). Output: basis data karakteristik bijih per *batch*.

**Tahap 2: Pretreatment dan desulfurisasi.** Mengacu pada Andrameda et al. (2024), *roasting-reduction* pada 600–800 °C selama 60–120 menit dengan aditif CaO atau Na₂CO₃ mampu mereduksi sulfur 70–85% dan mengkonversi sebagian goethit amorf menjadi hematit yang lebih inert secara kimia, menekan potensi scale downstream.

**Tahap 3: Pengaturan kondisi HPAL.** Kontrol temperatur (250 ± 2 °C), tekanan (43 ± 0,5 bar), densitas pulp (1,35–1,45 g/cm³), dan rasio asam/bijih (*acid-to-ore ratio*, A/O = 0,35–0,45 t H₂SO₄/t bijih kering). Sistem *Distributed Control System* (DCS) dengan PID controller menjaga parameter dalam *envelope* yang ditentukan.

**Tahap 4: Monitoring real-time.** Sensor temperatur multi-titik (*multi-point thermocouples*) pada dinding autoclave memantau gradien termal ΔT; peningkatan ΔT > 8 °C mengindikasikan scale >5 mm dan memicu *corrective action*.

**Tahap 5: De-scaling terjadwal.** Setiap 60–90 hari operasi, dilakukan *shut-down* dan *de-scaling* secara mekanis (high-pressure water jet pada 200–300 bar) atau kimiawi (inhibited HCl circulation).

**Tahap 6: Validasi dan continuous improvement.** Data historis diolah dengan Six Sigma DMAIC untuk menurunkan *scale formation rate* (kg scale/t bijih umpan) sebagai KPI operasional.

Arsitektur teknologi keseluruhan mengikuti *process flow diagram* standar: **Ore receiving → Slurry mixing → Pre-heating (heat recovery dari flash steam) → Autoclave HPAL (multi-compartment, 4–6 stages) → Flash cooling → CCD (counter-current decantation) thickeners → Neutralization (CCL) → Mixed hydroxide precipitation (MHP) → Filtration**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Autoclave HPAL berkapasitas umpan 4.500 tpd bijih laterit limonitik dengan komposisi umpan (%) Ni = 1,30; Co = 0,08; Fe = 38,5; Al = 4,2; SiO₂ = 12,8; MgO = 3,5; S = 0,18. Target operasi: T = 250 °C, P = 43 bar, A/O = 0,40, residence time τ_r = 60 menit, *extraction* Ni ≥ 92%, Co ≥ 88%.

**Langkah 1: Neraca massa harian umpan.**

$$m_{\text{Ni}} = 4.500 \times 0{,}0130 = 58{,}5 \text{ t Ni/hari}$$
$$m_{\text{Co}} = 4.500 \times 0{,}0008 = 3{,}60 \text{ t Co/hari}$$
$$m_{\text{Fe}} = 4.500 \times 0{,}385 = 1.732{,}5 \text{ t Fe/hari}$$

**Langkah 2: Kebutuhan asam sulfat teoritis.**

Asam total ≈ A/O × m_feed = 0,40 × 4.500 = 1.800 t H₂SO₄/hari, dengan koreksi over-acid 8% (untuk mengompensasi konsumsi oleh MgO dan Al₂O₃): $1.800 \times 1{,}08 = 1.944$ t H₂SO₄/hari.

**Langkah 3: Estimasi pembentukan scale.**

Berdasarkan korelasi empiris Dickson et al. (2026) untuk bijih limonitik di 250 °C:

$$\text{Scale yield} = 0{,}042 \cdot m_{\text{Fe,feed}} \cdot f_T \cdot f_{\text{A/O}}$$

dengan $f_T = \exp[0{,}023 \cdot (T-240)]$ dan $f_{\text{A/O}} = 1 + 2{,}5 \cdot (\text{A/O} - 0{,}40)$. Substitusi angka:

$$f_T = \exp[0{,}023 \times 10] = 1{,}257; \quad f_{\text{A/O}} = 1