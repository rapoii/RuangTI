# 1949 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang menghadapi transformasi struktural yang dipicu oleh permintaan baterai lithium-ion untuk kendaraan listrik (EV) dan sistem penyimpanan energi stasioner. Lebih dari 70% cadangan nikel dunia berada dalam bentuk bijih laterit, yang umumnya diproses melalui teknologi *High-Pressure Acid Leaching* (HPAL) karena keterbatasan teknologi pirometalurgi dalam mengekstraksi nikel dari bijih limonitic dengan kadar rendah (biasanya 0,8–1,5% Ni). Teknologi HPAL, yang beroperasi pada suhu 245–270 °C dan tekanan 35–45 bar dengan pereaksi asam sulfat, mampu mencapai tingkat *recovery* nikel dan kobalt masing-masing di atas 90% dan 85%, menjadikannya proses *frontier* dalam metalurgi hidrometalurgi (Dickson et al., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun demikian, keberlanjutan operasional HPAL sangat terganggu oleh fenomena **autoclave scaling** — yaitu pengendapan dan akumulasi kerak anorganik pada dinding, agitator, serta pipa internal autoclave. Kerak ini terbentuk terutama dari campuran senyawa *ferric oxide-hydrate* (Fe₂O₃·H₂O/hematite), *aluminum hydroxide* (AlOOH/boehmite), dan berbagai sulfat rangkap (*alunite*-type phases, *jarosite*) yang mengkristalisasi ketika konsentrasi asam lokal turun drastis di zona stagnan. Dickson, Deleau, dan Espitalier (2026) mendemonstrasikan bahwa laju akumulasi kerak dapat mencapai 0,8–1,5 mm/hari pada autoclave multi-compartment komersial, menurunkan koefisien perpindahan panas efektif (*U*-value) hingga 45% dalam satu siklus operasi 90 hari, yang secara langsung meningkatkan konsumsi energi spesifik dari 1,8 menjadi 3,2 GJ per ton nikel yang diproduksi.

Urgensi ekonomi dari fenomena ini sangat substansial. Sebuah pabrik HPAL berkapasitas 30.000 ton nikel/tahun dapat mengalami *downtime* tak terencana hingga 12–18% dari total jam operasi tahunan karena *shut-down* pembersihan kerak, mewakili kerugian pendapatan mencapai USD 35–60 juta per tahun. Lebih jauh, operasional HPAL juga menghadapi tantangan pada tahap *pre-treatment* bijih, di mana Andrameda et al. (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menunjukkan bahwa proses *roasting-reduction* dengan penambahan *desulfurization agent* dapat menurunkan konsumsi asam sulfat hingga 18% sekaligus mereduksi emisi sulfur ke atmosfer. Integrasi pendekatan pre-treatment tersebut dengan strategi mitigasi scaling menjadi agenda riset kritis dalam metalurgi nikel laterit modern.

---

## 2. Landasan Teori & Formulasi Matematis

Perilaku autoclave scaling dapat dimodelkan secara mekanistik melalui interaksi tiga fenomena simultan: (i) kinetika reaksi pelindian, (ii) termodinamika pengendapan senyawa kerak, dan (iii) dinamika fluida dalam autoclave bertekanan. Kerangka matematis berikut mengikuti pendekatan Dickson et al. (2026) yang mengintegrasikan model *Arrhenius* dengan model pertumbuhan kerak *parabolic-diffusion-controlled*.

**Model Kinetika Pelindian:** Laju ekstraksi nikel dari matriks laterit mengikuti kinetika *shrinking core* dengan reaksi permukaan terkontrol:

$$1 - (1 - X_{Ni})^{1/3} = k_{Ni} \cdot C_{H_2SO_4}^{n} \cdot \exp\left(-\frac{E_a}{RT}\right) \cdot t$$

di mana $X_{Ni}$ adalah fraksi Ni terekstraksi, $k_{Ni}$ adalah konstanta laju intrinsik (m/s), $C_{H_2SO_4}$ adalah konsentrasi asam sulfat bebas (kg/m³), $n$ adalah orde reaksi terhadap asam (umumnya 0,6–0,9 untuk limonit), $E_a$ adalah energi aktivasi (kJ/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), $T$ adalah suhu operasi (K), dan $t$ adalah waktu tinggal (s). Untuk bijih limonit, $E_a$ tipikal berkisar 55–72 kJ/mol menurut Dickson et al. (2026).

**Model Pertumbuhan Kerak (Scale Growth):** Laju penebalan kerak $dr_s/dt$ mengikuti persamaan *parabolic* yang dikontrol oleh difusi ion Fe³⁺ dan Al³⁺ melalui lapisan pori kerak:

$$\frac{dr_s}{dt} = \frac{K_s \cdot \Delta C_{Fe^{3+}}}{r_s(t)}$$

dengan solusi integral:

$$r_s(t) = \sqrt{r_{s,0}^2 + 2 K_s \cdot \Delta C_{Fe^{3+}} \cdot t}$$

di mana $r_{s,0}$ adalah ketebalan kerak awal, $K_s$ adalah koefisien difusi reaktif, dan $\Delta C_{Fe^{3+}}$ adalah gradien konsentrasi Fe³⁺ antara *bulk solution* dan permukaan antarmuka kerak-padatan. Persamaan ini menghasilkan profil penebalan yang melambat secara asimtotik seiring waktu, konsisten dengan pengamatan lapangan Dickson et al. (2026).

**Model Resistansi Termal Komposit Kerak:** Penurunan koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*, $U_{eff}$) akibat penebalan kerak dimodelkan melalui resistansi termal seri:

$$\frac{1}{U_{eff}} = \frac{1}{h_i} + \frac{r_s}{k_s} + \frac{r_w}{k_w} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal (sisi slurry) dan eksternal (sisi uap), $k_s$ dan $k_w$ adalah konduktivitas termal kerak dan dinding baja autoclave (W/m·K), dan $r_s$, $r_w$ adalah ketebalan kerak dan dinding. Nilai tipikal $k_s$ untuk kerak hematit-goethit adalah 0,35–0,65 W/m·K, jauh lebih rendah dibanding baja karbon ($k_w \approx 45$ W/m·K), sehingga dominasi resistansi termal berpindah dari dinding ke kerak ketika $r_s > 2,5$ mm (Dickson et al., 2026).

**Model Neraca Massa Logam:** Untuk sistem multi-komponen Ni–Co–Fe–Al dalam autoclave kompartemen:

$$\frac{dm_{i,j}}{dt} = F_{in} \cdot C_{i,in} - F_{out} \cdot C_{i,j} - R_{i,j}$$

di mana $m_{i,j}$ adalah massa logam $i$ pada kompartemen $j$, $F$ adalah laju alir volumetrik slurry, dan $R_{i,j}$ adalah laju reaksi (pelindian atau pengendapan). Konstanta kinetika untuk presipitasi *alunite* mengikuti:

$$K_{sp}^{alunite} = a_{K^+} \cdot a_{Al^{3+}} \cdot (a_{SO_4^{2-}})^2 \cdot a_{OH^-}^6$$

dengan $pK_{sp}$ tipikal 4,8–5,4 pada 250 °C (Dickson et al., 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi scaling pada autoclave HPAL mengikuti protokol rekayasa terstruktur yang dibagi menjadi empat fase utama: (i) *feed preparation & pre-treatment*, (ii) *operational monitoring*, (iii) *predictive maintenance*, dan (iv) *shut-down cleaning*. Diagram alir proses lengkap disajikan sebagai berikut:

```
[Bijih Laterit] → [Kominusi & Klassifikasi] → [Slurry Mixing (H₂SO₄ 98%)]
        ↓
[Pre-heater (Spiral Heat Exchanger)] → [Autoclave Multi-Compartment (4-6 stages, 245-270°C, 35-45 bar)]
        ↓                              ↘
[Flash Cooling] → [CCD Counter-Current Decantation]    [Scale Sampling & Thickness Mapping]
        ↓
[Neutralization & Metal Recovery] ← [Neutral Thickener]
```

**Fase 1 — Pre-treatment Bijih:** Mengikuti metodologi Andrameda et al. (2024), bijih laterit kering dicampur dengan agen *desulfurization* berupa CaO atau Na₂CO₃ pada komposisi 2–5% berat, kemudian di-*roasting* pada suhu 600–800 °C selama 60–120 menit dalam atmosfer reduktif (gas CO/H₂ dari pembakaran tidak sempurna). Proses ini mengurangi Fe³⁺ menjadi Fe²⁺ (magnetit/Fe₃O₄) dan menurunkan viskositas slurry di autoclave, sekaligus memitigasi pembentukan kerak sulfat. Andrameda et al. (2024) melaporkan peningkatan *recovery* nikel dari 87,3% menjadi 92,1% dan penurunan konsumsi asam spesifik dari 412 menjadi 338 kg H₂SO₄ per ton bijih dengan pendekatan ini.

**Fase 2 — Parameter Operasi Autoclave (SOP):** SOP operasional mengikuti batasan kritis: suhu masuk autoclave $T_{in} = 245 \pm 3$ °C, tekanan operasi $P = 38 \pm 1$ bar, rasio padat-cair *pulp density* $65 \pm 2$% berat, dan waktu tinggal total $\tau = 60$–$90$ menit. Konsentrasi asam bebas dipertahankan pada 30–55 g/L H₂SO₄ dengan *control loop* otomatis berbasis *titrator* inline. Kecepatan agitasi tipikal 80–120 RPM untuk diameter autoclave 4,5 m, menghasilkan bilangan Reynolds turbulen $> 10^5$ yang penting untuk mencegah zona stagnan pemicu nukleasi kerak.

**Fase 3 — Monitoring & Inspeksi:** Sensor *wall thickness* ultrasonic (UT) dipasang pada delapan lokasi azimuthal di setiap kompartemen, dengan akurasi $\pm 0,1$ mm dan frekuensi akuisisi 4 jam. Data *real-time* diolah menggunakan *digital twin* berbasis *physics-informed neural network* (PINN) yang memprediksi sisa waktu operasional hingga batas kritis $r_s^{max} = 8$ mm. Inspeksi visual dengan boroskop dilakukan setiap 30 hari untuk verifikasi korelasi.

**Fase 4 — Shut-down & Cleaning:** Pembersihan kerak dilakukan secara mekanis (high-pressure water jet pada 250 bar) dan kimiawi (leaching menggunakan 8% HCl atau campuran H₂SO₄ 5% + HF 0,5% pada 60 °C selama 6–8 jam). Material kerak yang dibuang dikarakterisasi melalui XRD, SEM-EDS, dan TGA untuk identifikasi fase dominan dan umpan balik ke model kinetika.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik HPAL "Sulawesi Laterite Project" kapasitas olah 2.500 ton bijih/hari, kadar Ni 1,2% dan Fe 38,5%, beroperasi pada $T = 255$ °C dan $P = 40$ bar dengan 5 kompartemen autoclave seri. Data diambil mengikuti protokol Dickson et al. (2026).

**Langkah 1 — Estimasi Laju Ekstraksi Nikel.** Dengan $E_a = 65$ kJ/mol, $k_{Ni,0} = 2,4 \times 10^{-4}$ m/s pada $T_{