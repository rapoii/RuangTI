# 2123 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibridisasi Cu-Cu, dan Optimasi Manufaktur Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigma fundamental dari arsitektur System-on-Chip (SoC) monolitik menuju desain berbasis chiplet dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh tiga tekanan struktural simultan: (1) melonjaknya biaya fabrikasi pada node teknologi sub-3 nm yang telah menembus ambang USD 20 miliar per fab (Roze & Gerber, 2026); (2) berakhirnya efektivitas skalari *Dennard* yang telah berlangsung selama hampir empat dekade; serta (3) meningkatnya permintaan akan akselerasi AI/HPC yang memerlukan bandwidth memori masif dan latensi sub-mikrodetik (Lau, 2023).

Roze dan Gerber (2026) menyoroti bahwa pendekatan *monolithic SoC* menghadapi *reticle limit* ~858 mm² (area masker EUV maksimum) serta degradasi *yield* yang eksponensial terhadap luas die. Sebagai respons, arsitektur chiplet memecah fungsionalitas sistem menjadi beberapa *die* kecil yang kemudian diintegrasikan melalui *interposer* silikon, *redistribution layer* (RDL), atau *hybrid bonding*. Pendekatan ini, menurut Lau (2023), memungkinkan pencampuran *process node* yang heterogen—misalnya chiplet logika 3 nm yang dipasangkan dengan chiplet memori 12 nm—sehingga *figure-of-merit* biaya-versus-performa menjadi optimal.

Urgensi ekonominya sangat konkret: pasar chiplet global diproyeksikan tumbuh dari USD 6,8 miliar (2023) menjadi USD 147 miliar (2033) dengan CAGR ~36%. Dari perspektif *Industrial Engineering*, fenomena ini menciptakan tantangan baru dalam domain perancangan: bagaimana mengelola ribuan *bump* atau *hybrid bond* dengan pitch <10 μm, bagaimana memvalidasi integritas sinyal pada >100 link inter-chiplet, serta bagaimana memastikan *Design for Testability* (DFT) yang andal untuk *Known-Good-Die* (KGD). Roze dan Gerber (2026) menegaskan bahwa tanpa solusi EDA (*Electronic Design Automation*) yang koheren dan terintegrasi, adopsi chiplet akan terhambat oleh *rework cost* yang dapat mencapai USD 2–5 juta per iterasi tape-out. Konteks ini menggarisbawahi perlunya metodologi rekayasa yang tidak hanya bersifat teknikal-elektrikal, tetapi juga memperhatikan dimensi sistem-industri: alur kerja kolaboratif lintas-disipilin, standardisasi *interface*, dan orkestrasi *supply chain* antara *fab*, *OSAT* (Outsourced Semiconductor Assembly and Test), dan integrator sistem.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Komposit untuk Multi-Chiplet

Salah satu tantangan fundamental dalam desain chiplet adalah menentukan *yield* sistem total yang merupakan fungsi dari *yield* masing-masing die dan tingkat keberhasilan proses *bonding*. Roze dan Gerber (2026) merumuskan model *compound yield* sebagai berikut:

$$Y_{system} = \left(\prod_{i=1}^{n} Y_{die,i}\right) \cdot Y_{bonding}^{m}$$

di mana $Y_{die,i}$ adalah *yield* individual chiplet ke-$i$, $Y_{bonding}$ adalah probabilitas keberhasilan satu sambungan, $n$ adalah jumlah chiplet dalam paket, dan $m$ adalah jumlah sambungan *hybrid bond* aktif. Misalnya, untuk sistem yang mengintegrasikan 4 chiplet masing-masing dengan $Y_{die}=0{,}90$ dan 10.000 sambungan dengan $Y_{bonding}=0{,}99999$:

$$Y_{system} = (0{,}90)^4 \cdot (0{,}99999)^{10000} = 0{,}6561 \cdot 0{,}9048 \approx 0{,}5936$$

Hasil ini menunjukkan bahwa meskipun *bond yield* per-koneksi sangat tinggi (99,999%), degradasi eksponensial pada ribuan koneksi menurunkan yield total secara signifikan.

### 2.2 Resistansi Termal Sambungan Cu-Cu Hybrid Bond

Lau (2023) memberikan formulasi resistansi termal untuk sambungan *Cu-Cu hybrid bond* yang beroperasi pada pitch sub-10 μm:

$$R_{th} = \frac{t_{Cu}}{\kappa_{Cu} \cdot A_{bond}} + \frac{t_{ILD}}{\kappa_{ILD} \cdot A_{bond}}$$

dengan $t_{Cu}$ adalah tebal lapisan tembaga (~5 μm), $\kappa_{Cu} \approx 401\,\mathrm{W/(m\cdot K)}$, $t_{ILD}$ adalah tebal *inter-layer dielectric* SiO₂ (~1 μm), $\kappa_{ILD}\approx 1{,}4\,\mathrm{W/(m\cdot K)}$, dan $A_{bond}$ adalah luas penampang satu sambungan. Untuk pitch 10 μm dengan luas efektif $A_{bond}\approx 50\,\mu m^2 = 5\times 10^{-11}\,\mathrm{m}^2$:

$$R_{th} \approx \frac{5\times 10^{-6}}{401 \cdot 5\times 10^{-11}} + \frac{1\times 10^{-6}}{1{,}4 \cdot 5\times 10^{-11}} \approx 249 + 14.286 \approx 14.535\,\mathrm{K/\mu W}$$

### 2.3 Model Crosstalk dan Integritas Sinyal

Roze dan Gerber (2026) menekankan bahwa pada arsitektur 3D-IC, *crosstalk* antar-saluran di *Through-Silicon Via* (TSV) dan *micro-bump* harus dimodelkan secara stokastik. Fungsi kerapatan probabilitas amplitudo *crosstalk* dapat dinyatakan sebagai:

$$f(A_c) = \frac{A_c}{\sigma_c^2}\exp\left(-\frac{A_c^2}{2\sigma_c^2}\right)$$

dengan $A_c$ adalah amplitudo *crosstalk* dan $\sigma_c$ adalah deviasi standar yang tergantung pada pitch, tinggi TSV, dan frekuensi operasi. *Bit Error Rate* (BER) sistem kemudian:

$$BER = \frac{1}{2}\mathrm{erfc}\left(\frac{V_{th} - \mu_c}{\sqrt{2}\sigma_c}\right)$$

### 2.4 Model Biaya Total Kepemilikan (TCO) untuk Desain Chiplet

Untuk analisis keputusan industri, *Total Cost of Ownership* chiplet dapat dimodelkan sebagai:

$$TCO = \sum_{i=1}^{n}\left(C_{mask,i} + C_{wafer,i}\cdot\frac{A_{die,i}}{A_{wafer}}\right) + C_{assembly}\cdot n + C_{test,i}\cdot n + C_{rework}\cdot P(fail)$$

dengan $C_{mask}$ adalah biaya masker, $C_{wafer}$ adalah biaya wafer per satuan luas, $A_{die}$ adalah luas chiplet, $A_{wafer}$ adalah luas wafer utilisable, dan $C_{rework}$ adalah biaya *rework* terhadap probabilitas kegagalan $P(fail)$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA berlapis untuk desain chiplet/3D-IC yang dapat distandardisasi sebagai SOP industri dengan alur berikut:

**Fase 1 — Spesifikasi & Partisi Arsitektur**
1. Definisikan *Performance, Power, Area* (PPA) target per-subsistem.
2. Lakukan *multi-objective optimization* untuk menentukan partisi chiplet optimal menggunakan algoritma seperti NSGA-II dengan fungsi tujuan:
$$\min_{x} \left\{\alpha\cdot\frac{P}{P_{target}} + \beta\cdot\frac{A}{A_{target}} + \gamma\cdot\frac{C}{C_{target}}\right\}$$
3. Pilih standar *interface*: UCIe, BoW, atau OpenHBI dengan target bandwidth >100 Gbps/lane.

**Fase 2 — Co-Design Multi-Fisika**
Platform EDA harus menjalankan simulasi simultan: *signal integrity* (analisis *channel* SerDes), *power integrity* (IR-drop pada PDN), *thermal analysis* (distribusi panas 3D), dan *mechanical stress* (CTE mismatch). Roze dan Gerber (2026) menekankan pentingnya *unified database* untuk menghindari inkonsistensi antara domain.

**Fase 3 — Floorplanning & Routing 3D**
Gunakan algoritma *force-directed* dan *simulated annealing* untuk menempatkan chiplet pada interposer, dengan kendala:
- *Bump pitch* minimum (Cu-Cu: <10 μm; micro-bump: 25–40 μm)
- *Thermal hotspot* tersebar merata
- *TSV keep-out zone*

**Fase 4 — Validasi & Verifikasi DFT**
Setiap chiplet harus memiliki *Built-In Self-Test* (BIST) untuk *scan*, *BIST memori*, dan *JTAG* sesuai IEEE 1687. Validasi *Known-Good-Die* dilakukan *pre-bonding* dengan target cakupan >98%.

**Fase 5 — Tape-out & Manufaktur**
Orkestrasi jadwal *tape-out* multi-chiplet menggunakan *Gantt chart* digital dengan dependensi kritis, lalu dilanjutkan ke fase *hybrid bonding* di OSAT pada suhu ~400°C dengan tekanan mekanis terkontrol (Lau, 2023).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Sistem akselerator AI skala *datacenter* dengan target throughput 1 PFLOPS (INT8),功耗 ≤300 W, dan BoM ≤USD 4.000 per unit.

**Input Parameter:**
- Jumlah chiplet: 4 compute + 1 HBM + 1 I/O = 6 chiplet
- Node proses: compute 5 nm, HBM 12 nm, I/O 7 nm
- Luas per chiplet: compute 120 mm², HBM 80 mm², I/O 60 mm²
- Pitch sambungan Cu-Cu hybrid bond: 8 μm
- Jumlah sambungan per chiplet: 25.000
- $Y_{die}$ (asumsi): 5 nm → 0,85; 7 nm → 0,92; 12 nm → 0,95
- Biaya masker: 5 nm = USD 40 juta; 7 nm = USD 25 juta; 12 nm = USD 12 juta
- Biaya wafer: 5 nm = USD 17.000; 7 nm = USD 9.000; 12 nm = USD 4.000
- Biaya *assembly* hybrid bond per chiplet: USD 80
- Biaya *test* per chiplet: USD 25

**Langkah 1 — Yield Sistem:**
$$Y_{system} = (0{,}85)^4 \cdot (0{,}95)^1 \cdot (0{,}92)^1 \cdot (0{,}99998)^{150000}$$
$$= 0{,}5220 \cdot 0{,}95 \cdot 0{,}92 \cdot 0{,}0498 \approx 0{,}0227$$

Yield terlalu rendah → strategi mitigasi: tambah redundansi chiplet ke-6 (compute) atau gunakan *interposer pasif* dengan sambungan yang lebih sedikit.

**Langkah 2 — Optimasi dengan Redundansi:**
Tambahkan satu chiplet komputasi cadangan ($n_{compute}=5$):
$$Y_{system}' = (0{,}85)^5 \cdot (0{,}95) \cdot (0{,}92) \cdot (0{,}99998)^{150000} \approx 0{,}0264$$
Margin tetap tipis; perlu pendekatan *partial good die* atau *interposer yield enhancement*.

**Langkah 3 — Perhitungan TCO per Unit (dengan asumsi $Y_{final}=0{,}85$ setelah *binning*):**

Biaya fabrikasi per wafer dengan *defect density* $D_0=0{,}008\,\mathrm{cm^{-2}}$ (model Murphy):
$$Y_{wafer} = \left(\frac{1-e^{-D_0\cdot A}}{D_0\cdot A}\right)^2$$

Untuk chiplet 120 mm² = 1,2 cm²:
$$Y_{wafer,5nm} = \left(\frac{1-e^{-0{,}0096}}{0{,}0096}\right)^2 \approx \left(\frac{0{,}00955}{0{,}0096}\right)^2 \approx 0{,}990$$

Wafer utilisable 300 mm: $A_{wafer