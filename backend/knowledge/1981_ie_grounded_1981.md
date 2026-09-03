# 1981 — Perilaku dan Karakteristik *Scaling* Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak drastis seiring transisi elektrifikasi kendaraan dan penyimpanan energi. Diperkirakan lebih dari 70% sumber daya nikel dunia berupa bijih laterit (limonit dan saprolit) yang tersebar di Indonesia, Filipina, Kaledonia Baru, dan Kuba. Berbeda dengan bijih sulfida yang dapat diproses secara pirometalurgi, bijih laterit memiliki kadar nikel rendah (0,8–2,5%) dan struktur mineral yang kompleks, sehingga satu-satunya rute hidrometalurgi yang mapan secara komersial adalah *High-Pressure Acid Leaching* (HPAL). Proses HPAL yang dikembangkan oleh Sherritt Gordon sejak akhir 1950-an dan kini diadopsi secara luas di pabrik-pabrik诸如 PT Halmahera Persada Lygend, QNI, Tsingshan, dan Huayou Cobalt ini berlangsung pada suhu 240–270 °C dan tekanan total 38–45 bar dalam autoklaf *titanium-clad* multi-kompartemen dengan injeksi asam sulfat pekat (H₂SO₄ 98%) (Dickson dkk., 2026; Andrameda dkk., 2024).

Meskipun secara termodinamika efisien, operasi HPAL menghadapi satu tantangan operasional paling kronis yang mendistorsi *availability*, kapasitas produksi, dan *unit cost* secara simultan: fenomena *scaling* atau pengerakan pada dinding, agitator, dan pipa internal autoklaf. *Scaling* adalah deposisi lapisan padat anhidrat, gypsum (CaSO₄), hematit (Fe₂O₃), *basic iron sulfate* (FeOHSO₄), alunit, dan aluminium sulfat (Al₂(SO₄)₃·nH₂O) yang terbentuk akibat supersaturasi lokal, *retrograde solubility* sulfat, dan ko-presipitasi multi-ion pada zona *flash* uap maupun dinding *baffle*. Studi terbaru oleh Dickson, Deleau, dan Espitalier (2026) yang dipublikasikan di *Cleaner Waste Systems* secara eksplisit memetakan perilaku *scaling* ini sebagai fungsi komposisi umpan, laju alir pulp, profil suhu, dan strategi desulfurisasi, sementara Andrameda, Triaswinanti, dan Madra (2024) melengkapi dengan eksperimen *roasting-reduction* terhadap residu HPAL sebagai jalur mitigasi padatan.

Urgensi ekonomi dari pengendalian *scaling* sangat nyata: setiap siklus *shutdown* untuk *acid wash* (umumnya dengan H₂SO₄ 5–10% pada 80–95 °C selama 12–24 jam) menurunkan *overall equipment effectiveness* (OEE) autoclave hingga 8–15% per tahun. Tanaman HPAL di Indonesia dilaporkan kehilangan kapasitas efektif hingga 30% akibat scaling parah jika tidak dilakukan intervensi *anti-scalant* dan kontrol proses yang ketat. Lebih jauh, *scaling* bertindak sebagai isolator termal yang menurunkan koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*, U) hingga 40–60%, sehingga konsumsi uap (*steam*) per ton bijih naik signifikan dan *payback period* investasi autoklaf memanjang. Oleh karena itu, kemampuan untuk mengkuantifikasi laju pertumbuhan *scale*, memprediksi komposisi mineralnya, dan merancang SOP *chemical cleaning* yang presisi menjadi kompetensi inti seorang spesialis teknik industri yang bekerja pada rantai pasok nikel kelas baterai.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dan Konsumsi Asam

Reaksi pelindian inti pada bijih limonit Ni(OH)₂·FeOOH dan saprolit (Mg,Ni)₆Si₄O₁₀(OH)₈ dalam HPAL mengikuti stoikiometri pseudohomogen:

$$\text{NiO}_{(\text{s})} + \text{H}_2\text{SO}_4 \xrightarrow{k_1} \text{NiSO}_4 + \text{H}_2\text{O}$$

Laju pelindian umumnya mengikuti model inti tak-terkontraksi (*shrinking core*) untuk partikel saprolit dan model partikel retak (*crackling core*) untuk limonit. Untuk kontrol difusi melalui lapisan produk, laju dapat ditulis sebagai:

$$\frac{d\alpha}{dt} = \frac{3 D_e C_{A,b}}{\rho_p r_p^2} \cdot \frac{(1-\alpha)^{1/3}}{1 - (1-\alpha)^{1/3} + \frac{K_r}{K_p}\left[(1-\alpha)^{1/3} - (1-\alpha)^{2/3}\right]}$$

dengan $\alpha$ fraksi terurai, $D_e$ koefisien difusi efektif ($m^2/s$), $C_{A,b}$ konsentrasi asam sulfat di *bulk*, $\rho_p$ densitas partikel, dan $r_p$ jari-jari awal. Konstanta laju mengikuti persamaan Arrhenius yang dimodifikasi untuk efek aktivitas air (Stumm & Morgan):

$$k = k_0 \exp\left(-\frac{E_a}{RT}\right) \cdot a_{\text{H}_2\text{O}}^n$$

dengan $E_a$ untuk pelindian nikel dari limonit berada pada rentang 60–90 kJ/mol, dan $n \approx 2$–$3$ untuk sistem HPAL real karena *autocatalysis* oleh Fe³⁺.

Konsumsi asam total per ton bijih kering dapat dimodelkan sebagai:

$$M_{\text{H}_2\text{SO}_4} = \sum_i \nu_i \cdot \frac{x_i \cdot M_{i,\text{eq}}}{\eta_i}$$

di mana $\nu_i$ adalah koefisien stoikiometri, $x_i$ fraksi oksida reaktif (Fe, Al, Mg, Mn, Ca), $M_{i,\text{eq}}$ berat ekuivalen, dan $\eta_i$ efisiensi leaching. Untuk bijih limonit Indonesia tipikal (Fe 40%, Al 5%, Mg 2%), konsumsi asam dapat mencapai 450–600 kg H₂SO₄ per ton bijih.

### 2.2 Termodinamika Supersaturasi dan Pembentukan Scale

Deposisi *scale* terjadi ketika *ion activity product* (IAP) melewati *solubility product* ($K_{sp}$) dari fasa padat tertentu. Untuk gypsum/anhydrit:

$$\text{CaSO}_4 \cdot 2\text{H}_2\text{O}_{(\text{s})} \rightleftharpoons \text{Ca}^{2+} + \text{SO}_4^{2-} + 2\text{H}_2\text{O}, \quad K_{sp}^{25°C} \approx 10^{-4.6}$$

Akan tetapi, dalam media asam kuat bersuhu tinggi, kelarutan CaSO₄ *retrograde*: naik hingga 150 °C lalu turun seiring suhu autoklaf, memicu presipitasi CaSO₄ atau anhydrit (CaSO₄) pada permukaan logam. Indeks saturasi didefinisikan sebagai:

$$\text{SI} = \log\left(\frac{\text{IAP}}{K_{sp}(T)}\right)$$

Saat SI > 0, terjadi pengendapan spontan. Untuk *basic iron sulfate* (BFS) yang merupakan penyusun dominan *scale* HPAL:

$$\text{FeOHSO}_4 \rightarrow \text{Fe}^{3+} + \text{OH}^- + \text{SO}_4^{2-}, \quad \log K_{sp}(250°C) \approx -9.8$$

### 2.3 Model Pertumbuhan Layer Scale

Laju pertumbuhan ketebalan *scale* $\delta(t)$ mengikuti model paralel: deposisi partikel tersuspensi (aerosolisasi mineral) dan kristalisasi permukaan. Pendekatan hukum pangkat:

$$\delta(t) = \delta_0 + k_d \cdot \Delta C_{\text{eff}} \cdot t^{n_s}$$

dengan $k_d$ konstanta deposisi, $\Delta C_{\text{eff}}$ selisih konsentrasi jenuh aktual, dan eksponen $n_s \in [0.5, 1]$ yang menandai regimen difusi ($n_s=0.5$) atau reaksi permukaan ($n_s=1$). Data lapangan Dickson dkk. (2026) menunjukkan $n_s \approx 0.72$ untuk *scale* komposit di autoklaf industri.

### 2.4 Dampak Termal: Hambatan Konduksi Panas

*Scale* memiliki konduktivitas termal rendah. Perpindahan panas keseluruhan:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{\text{scale}}}{k_{\text{scale}}} + \frac{\delta_{\text{wall}}}{k_{\text{wall}}} + \frac{1}{h_o}$$

dengan $k_{\text{scale}}$ gypsum $\approx 1.3 \text{ W/m·K}$, BFS $\approx 0.8 \text{ W/m·K}$, jauh di bawah titanium ($k \approx 22 \text{ W/m·K}$). Untuk $\delta_{\text{scale}} = 5 \text{ mm}$, resistansi termal naik 6–10 kali, menjelaskan degradasi U yang terukur di lapangan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pencegahan dan pengendalian *scaling* mengikuti SOP berlapis (*defense-in-depth*) yang distandardisasi oleh Sherritt, Vale, dan praktik terbaik Tsingshan-Huayou:

**Tahap 1: Pra-Kondisi Umpan.** Bijih laterit di-*slurrying* pada densitas pulp 1.30–1.45 g/cm³ dengan air proses daur ulang (*CCD overflow*). Penghilangan klorida melalui pencucian (*washing*) wajib dilakukan karena Cl⁻ menyerang titanium dan mengkatalisis *pitting*.

**Tahap 2: Pemanasan Bertahap (*Pre-heating Train*).** Tiga hingga empat *flash train* dengan valve *letdown* menurunkan tekanan secara bertahap sehingga uap sekunder dimanfaatkan sebagai pemanas. Profil suhu naik: 90 → 150 → 200 → 240 °C, masing-masing menghilangkan supersaturasi lokal Fe₂O₃.

**Tahap 3: Injeksi Asam Multi-Tahap.** Asam sulfat tidak disuntikkan sekaligus melainkan terdistribusi sepanjang kompartemen autoklaf (4–6 kompartemen) untuk menjaga rasio molar $\text{H}^+/\text{Fe} \approx 0.25$–$0.30$. Konsentrasi asam bebas (*free acid*, FA) dijaga 30–55 g/L dengan target akhir 20–35 g/L setelah leaching.

**Tahap 4: Kontrol Agitasi dan Residence Time.** Kecepatan tip agitator 80–150 RPM memastikan transfer massa Ca²⁺, Mg²⁺ ke fase larutan tanpa *attrition* berlebih yang menghasilkan fines penyebab *scaling* permukaan.

**Tahap 5: Acid Wash Berkala.** Setiap 45–90 hari operasi, dilakukan *acid boil-out* dengan H₂SO₄ 5–8% pada 80–95 °C selama 14–24 jam, dibantu inhibitor korosi (Rodine 213, Armohib 28).

**Tahap 6: Roasting-Reduction Residu (Andrameda dkk., 2024).** Residu HPAL yang kaya Fe, Al, Mg dapat direduksi dengan batubara/coke pada 800–1100 °C untuk回收 nikel residual sekaligus mengurangi volume tailing, menurut tinjauan Andrameda dkk. (2024).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Pabrik HPAL Sulawesi dengan kapasitas 50.000 ton nikel hidrat per tahun, mengolah bijih limonit dengan komposisi: Ni 1.30%, Fe 42.0%, Al 4.8%, Mg 2.1%, Ca 0.35%, Mn 0.45%, Si 5.5%.

**Langkah 1 — Stoikiometri konsumsi asam.** Kebutuhan stoikiometri untuk oksida reaktif:

- Fe₂O₃ → Fe₂(SO₄)₃: $\nu_{\text{Fe}} = 3$, $M_{\text{eq}} = 160/3 \cdot 98 \approx 1.633$ t H₂SO₄/t Fe.
- Al₂O₃ → Al₂(SO₄)₃: $\nu_{\text{Al}} = 3$, $M_{\text{eq}} \approx 2.85$ t/t Al.
- MgO → MgSO₄: $M_{\text{eq}} \approx 2.43$ t/t Mg.
- CaO → CaSO₄: $M_{\text{eq}} \approx 1.75$ t/t Ca.
- MnO → MnSO₄: $M_{\text{eq}} \approx 1.55$