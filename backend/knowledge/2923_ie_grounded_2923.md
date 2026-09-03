# 2923 — Solusi Electronic Design Automation (EDA) untuk Desain Chiplet dan Sirkuit Terintegrasi Tiga Dimensi (3D-IC)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigma arsitektural yang fundamental, dari desain *System-on-Chip* (SoC) monolitik menuju paradigma *disintegrated system* berbasis **chiplet** dan **3D-IC**. Pergeseran ini dipicu oleh tiga tekanan struktural simultan: (1) biaya masker litografi *sub-3 nm* yang menembus ambang **USD 50 juta per set masker** untuk node EUV lanjutan (Roze & Gerber, 2026), (2) batas fisik penskalaan *Moore's Law* dua dimensi yang ditandai dengan melonjaknya *defect density* pada wafer besar, dan (3) meningkatnya diversifikasi beban kerja komputasi (AI, HPC, edge) yang menuntut heterogenitas material tidak mungkin diakomodasi oleh satu proses CMOS homogen (Lau, 2023).

Dalam konteks operasional, desainer集成电路 menghadapi problema *productivity gap* — yaitu gap antara kompleksitas desain yang dapat dieksploitasi versus kapasitas rekayasa manusia yang tersedia. Roze & Gerber (2026) menekankan bahwa platform EDA konvensional yang diwarisi dari alur SoC 2D tidak lagi memadai karena mengasumsikan *die* tunggal dengan *floorplan* planar. Sementara itu, integrasi chiplet 2.5D/3D memperkenalkan variabel desain baru berupa *inter-die connectivity*, *bump/bridge pitch*, *thermal co-design*, dan *multi-vendor die interface* yang harus diverifikasi secara holistik sebelum fabrikasi.

Secara ekonomis, pasar *heterogeneous integration* diproyeksikan mencapai **USD 96 miliar pada 2030** menurut data industri yang dirujuk dalam literatur EDA mutakhir. Urgensi ini diperkuat oleh strategi hyperscaler seperti AMD (infinity fabric chiplet), Intel (Foveros, EMIB), dan TSMC (CoWoS, InFO) yang telah mengomersilkan ratusan juta unit chiplet. Tantangan engineering yang diuraikan oleh Roze & Gerber (2026) meliputi kebutuhan akan orkestrasi *multi-physics simulation* (listrik, termal, mekanik, sinyal), otomasi verifikasi *cross-die*, dan standardisasi *die-to-die interface* (D2D) seperti **UCIe** (Universal Chiplet Interconnect Express). Tanpa platform EDA terpadu, biaya verifikasi dapat menyerap **30–40% dari total biaya rekayasa** sebuah produk 3D-IC. Konteks ini menggarisbawahi mengapa solusi EDA untuk chiplet bukan sekadar peningkatan teknis, melainkan *enabler* strategis bagi keberlanjutan ekosistem semikonduktor di era post-Moore.

## 2. Landasan Teori & Formulasi Matematis

Rekayasa EDA untuk chiplet dan 3D-IC memerlukan kerangka matematis multi-disiplin yang menggabungkan persamaan termal, elektrik, dan keandalan. Tiga fondasi teoritis utama adalah sebagai berikut.

### 2.1 Model Resistansi Termal Jalur Through-Silicon Via (TSV)

Untuk TSV silinder dengan tinggi $L$, diameter $D$, dan konduktivitas termal efektif $k_{\text{eff}}$, resistansi termal konduksi per TSV dihitung sebagai:

$$\theta_{\text{TSV}} = \frac{L}{k_{\text{eff}} \cdot A_{\text{TSV}}} = \frac{4L}{k_{\text{eff}} \cdot \pi D^2}$$

dengan $A_{\text{TSV}} = \pi D^2 / 4$. Resistansi paralel dari $N$ TSV dihitung sebagai $\theta_{\text{array}} = \theta_{\text{TSV}} / N$ ketika pitch antar-TSV cukup besar sehingga *thermal crosstalk* diabaikan. Suhu *junction* die atas kemudian:

$$T_j = T_{\text{amb}} + P_{\text{diss}} \cdot \theta_{ja} = T_{\text{amb}} + P_{\text{diss}} \left( \theta_{\text{array}} + \theta_{\text{spreader}} + \theta_{\text{convec}} \right)$$

di mana $P_{\text{diss}}$ adalah disipasi daya total dan $\theta_{ja}$ adalah resistansi termal total *junction-to-ambient*.

### 2.2 Model Penundaan RC untuk Interkoneksi Hybrid Bonding Cu-Cu

Lau (2023) menunjukkan bahwa hybrid bonding Cu-Cu menggantikan bump solder dengan pitch yang jauh lebih kecil (sub-10 μm). Resistansi kontak per sambungan mengikuti:

$$R_c = \frac{\rho_{\text{Cu}}}{A_{\text{pad}}} \cdot \sqrt{\frac{\omega \mu}{2}} \cdot \ell_{\text{skin}}$$

dengan $\rho_{\text{Cu}} = 1.68 \times 10^{-8} \, \Omega \cdot \text{m}$ adalah resistivitas tembaga, $A_{\text{pad}}$ luas area sambungan, dan $\ell_{\text{skin}} = \sqrt{2\rho_{\text{Cu}}/(\omega \mu)}$ kedalaman kulit. Kapasitansi sambungan dimodelkan sebagai kapasitor paralel plat:

$$C_{\text{pad}} = \varepsilon_0 \varepsilon_r \frac{A_{\text{pad}}}{t_{\text{diel}}}$$

sehingga penundaan propagasi sinyal D2D adalah $\tau \approx 0.69 \cdot R_c \cdot C_{\text{pad}}$ (respon 50% untuk RC orde-satu). Reduksi pitch dari 100 μm (bump solder) menjadi 3 μm (Cu-Cu hybrid bonding) menghasilkan *bandwidth density* per milimeter tepi die yang meningkat proporsional terhadap $1/p^2$ — yaitu sekitar **1100× lipat**.

### 2.3 Model Hasil (Yield) Multi-Die

Yield sistem terintegrasi chiplet mengikuti probabilitas seri produk dari yield individual die. Jika $Y_i$ adalah yield die ke-$i$ setelah Known-Good-Die (KGD) test, maka:

$$Y_{\text{system}} = \prod_{i=1}^{n} Y_i \cdot Y_{\text{bonding}} \cdot Y_{\text{assembly}}$$

Untuk *chiplet* yang sudah melewati sortasi KGD dengan $Y_i = 0{,}997$, dan $Y_{\text{bonding}} = 0{,}995$, sistem 4-die menghasilkan $Y_{\text{system}} \approx 0{,}97$, sebanding dengan yield die monolitik advanced-node — sebuah justifikasi ekonomis utama bagi disintegrasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis alur EDA chiplet mengikuti SOP 7-tahap yang distandarkan oleh konsorsium industri dan diacu dalam literatur Roze & Gerber (2026):

**Tahap 1 — Spesifikasi Sistem & Partisi:** Definisikan target bandwidth, latensi, dan disipasi daya. Partisi logika ke dalam chiplet dengan mempertimbangkan *process node* optimal per blok fungsional (misalnya compute pada 3 nm, IO pada 5 nm, memori pada memori-IP khusus).

**Tahap 2 — Desain Individual Die:** Setiap chiplet didesain dengan alur EDA konvensional (sintesis RTL → place & route → signoff STA, DRC, LVS) menggunakan PDK spesifik.

**Tahap 3 — Floorplan & Packaging Co-Design:** Integrasi dalam platform EDA 3D-aware (Synopsys 3DIC Compiler, Cadence Integrity 3D-IC, Siemens Calibre 3DSTACK) yang mensimulasikan interposer, bridge, dan TSV secara simultan dengan *floorplan* aktif.

**Tahap 4 — Multi-Physics Simulation:** Iterasi coupled simulation termal (ANSYS Icepak, Siemens Simcenter Flotherm), elektrik (ANSYS HFSS untuk SI/PI), dan mekanik (ANSYS Mechanical untuk warpage, *thermo-mechanical stress*).

**Tahap 5 — Die-to-Die Interface Verification:** Validasi kepatuhan terhadap protokol UCIe, BoW (Bunch of Wires), atau OpenHBI. Termasuk verifikasi *escape routing* pada pad I/O chiplet dengan pitch terbatas.

**Tahap 6 — Assembly & Test Integration:** Implementasi KGD test plan, *known-good-stack* validation, dan *boundary scan* D2D.

**Tahap 7 — Sign-off Manufaktur:** Finalisasi *bonding diagram*, profil termal *reflow*/annealing (untuk Cu-Cu hybrid bonding: suhu ~200–300 °C, tekanan 50–150 MPa, durasi 30–600 s sesuai Lau, 2023), dan *tape-out* ke fab.

Diagram alir logikanya adalah siklik: setiap perubahan pada satu chiplet memerlukan re-validasi termal dan signal integrity pada stack, yang difasilitasi oleh *unified database* EDA.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah akselerator AI dirancang sebagai stack 2-die — chiplet **Compute** (3 nm, 250 mm²) di atas chiplet **IO/Memori** (5 nm, 200 mm²), disambung melalui hybrid bonding Cu-Cu dengan pitch $p = 6 \, \mu\text{m}$ dan diameter pad $d_{\text{pad}} = 4 \, \mu\text{m}$.

### 4.1 Perhitungan Densitas Interkoneksi

Jumlah sambungan per milimeter tepi die dihitung sebagai:

$$n_{\text{edge}} = \frac{1000 \, \mu\text{m}}{p} = \frac{1000}{6} \approx 166 \, \text{koneksi/mm}$$

Untuk keliling aktif chiplet Compute sebesar $K = 4 \times \sqrt{250} \approx 63{,}2 \, \text{mm}$, total sambungan:

$$N_{\text{total}} = 63{,}2 \times 166 \approx 10.500 \, \text{sambungan}$$

Ini memenuhi kebutuhan bandwidth antardie untuk antarmuka chiplet memori HBM-adjacent.

### 4.2 Perhitungan Resistansi Termal TSV

Asumsikan: $L = 50 \, \mu\text{m}$, $D = 5 \, \mu\text{m}$, $k_{\text{eff}} = 150 \, \text{W/(m·K)}$ (komposit tembaga + liner), $N = 5000$ TSV paralel di bawah region *hotspot*. Resistansi array:

$$\theta_{\text{array}} = \frac{4L}{k_{\text{eff}} \pi D^2 N} = \frac{4 \times 50 \times 10^{-6}}{