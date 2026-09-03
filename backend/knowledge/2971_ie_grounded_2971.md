# 2971 — Solusi EDA untuk Perancangan Chiplet dan Integrated Circuit Tiga Dimensi (3D-IC): Optimasi Multi-Fisika, Hibrid Bonding Tembaga-Tembaga, dan Manajemen Rantai Pasok Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari arsitektur *System-on-Chip* (SoC) monolitik menuju paradigma *integrasi heterogen* berbasis chiplet dan *tiga-dimensi Integrated Circuit* (3D-IC). Pergeseran ini dipicu oleh tiga batasan struktural yang tak terhindarkan dalam manufaktur CMOS planar: (i) batas reticle litografi (kurang lebih 858 mm² untuk bidang eksposur EUV), (ii) degradasi *yield* eksponensial seiring membesarnya area die, dan (iii) ketidakmampuan mengintegrasikan teknologi proses yang secara fisika tidak kompatibel (misalnya logika FinFet 3 nm dengan fotonik silikon, memori HBM dengan sensor MEMS) dalam satu substrat monolitik. Roze dan Gerber (2026) dalam makalahnya yang dipublikasikan di *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menegaskan bahwa kompleksitas multi-disiplin yang melekat pada perancangan chiplet — yang sebelumnya didistribusikan ke vendor IP, *foundry*, dan *OSAT* — kini mengharuskan satu solusi *Electronic Design Automation* (EDA) terpadu yang mampu menjembatani seluruh rantai nilai dari spesifikasi sistem hingga *tape-out* paket.

Urgensi ekonominya bersifat strategis. Pasar chiplet global diproyeksikan menembus lebih dari USD 100 miliar pada 2030, didorong oleh adopsi masif hyperscaler (AWS, Google, Microsoft) untuk akselerator AI, serta strategi *fabless* seperti AMD (arsitektur Infinity Fabric), Intel (Foveros 3D, Ponte Vecchio), dan NVIDIA (NVLink-C2C pada Grace Hopper). Tantangan terbesarnya bukan pada fabrikasi fisik — karena teknologi *Cu-Cu hybrid bonding* yang diuraikan oleh John H. Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) telah menunjukkan kelayakan pitch interkoneksi 3 µm bahkan hingga sub-2 µm — melainkan pada orkestrasi *tool*, *flow*, serta *verification* EDA yang mampu menjamin integritas sinyal, termal, dan *power delivery* lintas ribuan *Through-Silicon Via* (TSV) dan *Hybrid Bonding Interconnect* (HBI). Tanpa solusi EDA koheren, *time-to-market* perancangan chiplet dapat melonjak 3–5 kali lipat, yang secara langsung menggerus margin perusahaan semikonduktor di pasar dengan siklus hidup produk kurang dari 18 bulan.

---

## 2. Landasan Teori & Formulasi Matematis

Perancangan EDA untuk chiplet dan 3D-IC memerlukan kerangka kuantitatif multi-fisika yang secara simultan mengoptimalkan metrik elektris, termal, mekanis, dan ekonomis. Berikut adalah fondasi matematis yang digunakan dalam literatur acuan.

### 2.1 Model Yield Defek Cluster untuk Cluster Chiplet

Berbeda dengan model Poisson klasik yang mengasumsikan cacat terdistribusi secara independen, manufaktur 3D-IC rentan terhadap cacat *clustered* pada antarmuka *hybrid bonding*. Model *negative binomial* memberikan pendekatan lebih akurat:

$$Y_{3D} = \left( 1 + \frac{D_0 \cdot A_{eff}}{c} \right)^{-c} \tag{1}$$

di mana $D_0$ adalah densitas cacat (cacat/cm²), $A_{eff}$ adalah area efektif die, dan $c$ adalah parameter clustering (semakin kecil $c$, semakin tinggi korelasi cacat). Untuk stack 4-die dengan $D_0 = 0{,}05$ cacat/cm² dan $A_{eff} = 1\,\text{cm}^2$, yield system menjadi:

$$Y_{stack} = \prod_{i=1}^{n} Y_i \cdot \prod_{j=1}^{m} Y_{bond,j} \tag{2}$$

dengan $Y_{bond,j}$ adalah yield dari setiap antarmuk *Cu-Cu hybrid bond* yang sangat bergantung pada *roughness* permukaan ( harus kurang dari 0,5 nm Ra) dan *alignment accuracy* ( kurang dari 200 nm untuk pitch 3 µm menurut Lau, 2023).

### 2.2 Jaringan Resistansi Termal Lumped-Parameter

Distribusi panas dalam stack 3D-IC dimodelkan sebagai jaringan resistansi 1D:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_{eff,i}} + R_{th,TIM} + R_{th,heat\,sink} \tag{3}$$

di mana $t_i$ adalah tebal layer ke-$i$, $k_i$ konduktivitas termal efektif (untuk silikon $k_{Si} \approx 148\,\text{W/m·K}$, untuk tembaga $k_{Cu} \approx 400\,\text{W/m·K}$, untuk dielektrik BEOL $k_{ILD} \approx 1{,}4\,\text{W/m·K}$). Temperatur *junction* maksimum diberikan oleh:

$$T_j = T_a + P_{diss} \cdot R_{th,total} \tag{4}$$

dengan $T_a$ temperatur ambien dan $P_{diss}$ disipasi daya total. Batasan desain tipik adalah $T_j \leq 85°\text{C}$ untuk aplikasi *data center*.

### 2.3 Model RC Interkoneksi TSV dan HBI

Delay propagasi sinyal melalui TSV dan *hybrid bond* dimodelkan oleh:

$$\tau_{prop} = R_{int} \cdot C_{int} + \frac{1}{2} R_{int} \cdot C_{load} + \frac{1}{2} R_{driver} \cdot C_{int} \tag{5}$$

Resistansi TSV silikon diberikan oleh pendekatan silinder berongga:

$$R_{TSV} = \frac{\rho_{Cu}}{h_{TSV}} \cdot \frac{1}{\pi \left( r_{out}^2 - r_{in}^2 \right)} \tag{6}$$

sedangkan kapasitansi *hybrid bond* tembaga-tembaga dengan pitch $p$ dan diameter pad $d$ dapat dihampiri sebagai kapasitor paralel:

$$C_{HBI} \approx \varepsilon_0 \varepsilon_r \frac{\pi d^2}{4 p} \tag{7}$$

Untuk pitch 3 µm dan diameter 1,5 µm dengan dielektrik $\varepsilon_r = 3{,}0$ (SiO₂ berpori rendah-k modern), kapasitas per sambungan mencapai orde 1–2 fF, yang menentukan batas bandwidth *die-to-die*.

### 2.4 Fungsi Objektif Optimasi Partisi Chiplet

Pemartisian optimal fungsi sistem ke dalam $k$ chiplet merupakan masalah *NP-hard* yang diformulasikan sebagai:

$$\min_{\mathcal{P}} \left[ \alpha \cdot A_{total} + \beta \cdot P_{comm} + \gamma \cdot N_{bond} + \delta \cdot T_{j,max} \right] \tag{8}$$

dengan $\mathcal{P}$ adalah himpunan partisi yang valid, $A_{total}$ total area silikon, $P_{comm}$ total daya komunikasi *die-to-die*, $N_{bond}$ jumlah sambungan *hybrid bond*, $T_{j,max}$ temperatur junction puncak, dan $\alpha, \beta, \gamma, \delta$ adalah bobot manajerial yang mencerminkan prioritas *yield*, *bandwidth*, *biaya*, dan *termal*. Roze dan Gerber (2026) menekankan bahwa EDA modern harus menyelesaikan masalah multi-objective ini secara simultan dengan *machine-learning-guided heuristics*, bukan sebagai urutan optimasi sekuensial.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi EDA solution untuk perancangan chiplet dan 3D-IC mengikuti alur kerja (*design flow*) berlapis yang distandarisasi oleh konsorsium industri. Berikut SOP yang dapat diadopsi oleh organisasi rekayasa sistem industri.

### 3.1 Tahapan Alur Kerja EDA Chiplet

**Tahap 1 — Spesifikasi Sistem dan Kontrak Antarmuka (*Interface Contract*).** Tahap paling kritis. Setiap chiplet didefinisikan melalui *die-to-die interface specification* yang mencakup: topologi protokol (*UCIe*, *BoW*, atau *OpenHBI*), lebar bus, latensi target, dan peta I/O. Tanpa kontrak ini, *mixed-vendor chiplet integration* mustahil dilakukan karena ketidakpastian *timing closure* antar-vendor.

**Tahap 2 — Partisi dan Floorplanning Hierarkis.** Dengan masukkan netlist RTL tingkat sistem, algoritma *min-cut hypergraph partitioning* membagi logika menjadi $k$ partisi. Setiap partisi kemudian difloorplan pada kanvas