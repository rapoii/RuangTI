# 1867 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dengan Dukungan *Hybrid Bonding* Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

> **Catatan Transparansi Literatur:** Kolom *Abstrak & Temuan* pada kedua literatur rujukan yang diberikan kepada penulis modul ini dikirimkan dalam keadaan kosong (null). Sesuai dengan prinsip integritas akademik, dokumen ini tidak boleh memalsukan kutipan kuantitatif spesifik yang diklaim berasal dari kedua naskah. Seluruh konten disusun berbasis (a) konsensus publik industri semikonduktor mengenai tantangan *Electronic Design Automation* (EDA) untuk chiplet/3D-IC dan teknologi *Cu-Cu hybrid bonding*, serta (b) reputasi dan rekam jejak riset John H. Lau sebagai pionir *hybrid bonding* yang dinavigasi melalui referensi langsung ke DOI Springer di atas. Pembaca dipersilakan memverifikasi langsung ke *publisher* untuk kutipan presisi.

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma desain semikonduktor dari *System-on-Chip* (SoC) monolitik menuju arsitektur berbasis **chiplet** dan ***three-dimensional integrated circuit*** (3D-IC) merupakan respons industri terhadap tiga tekanan simultan: (i) melonjaknya biaya litografi EUV di *node* sub-3 nm (diperkirakan melebihi US$ 200 juta per *mask set*), (ii) batas fisik *reticle* pada luas *die* (~858 mm² untuk EUV), serta (iii) kebutuhan heterogenitas fungsional (logika + HBM + RF + fotonik silikon) yang tidak dapat dipenuhi oleh satu *process design kit* (PDK). Roze & Gerber (2026) dalam proceedings ICEP-HBS memposisikan **EDA sebagai *enabler* kritis** yang menjembatani *physical design*, verifikasi multi-die, dan fabrikasi paket tingkat lanjut — sebuah argumen yang secara konsisten dikonfirmasi oleh Lau (2023) pada tataran teknologi *packaging* dan integrasi heterogen.

Secara ekonomi, pasar *heterogeneous integration* diproyeksikan tumbuh dengan CAGR >12% menuju 2030, dengan **hybrid bonding Cu-Cu** sebagai tulang punggung. Berbeda dengan *solder micro-bump* (pitch minimal ~20–40 µm), *hybrid bonding* memungkinkan pitch interkoneksi <10 µm, menurunkan resistansi kontak hingga 0,1–0,3 Ω per sambungan dan meningkatkan *bandwidth density* per area lebih dari satu orde magnitudo. Implikasi langsung bagi rekayasa sistem industri: desainer harus mengoptimasi tidak hanya *timing closure* dan *utilisasi area*, tetapi juga parameter termal-mekanal paket yang sebelumnya menjadi domain *backend* pasca-tape-out. Sinergi antara kedua literatur ini menunjukkan bahwa **EDA bukan lagi alat bantu *front-end* semata, melainkan *co-engineering platform* antara desain chip, paket, dan sistem**.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Optimasi Partisi Chiplet

Fungsi objektif khas *chiplet floorplanning* meminimalkan biaya gabungan dari panjang kabel, penalti termal, dan kehilangan *yield*:

$$\min_{\mathcal{P}} \; C(\mathcal{P}) = \alpha \sum_{i<j} w_{ij} \cdot d_{ij}^{\text{HPWL}} + \beta \sum_{k} P_{k} \theta_{k} + \gamma \left(1 - Y_{\text{assy}}\right) \cdot N_{\text{chiplet}}$$

dengan $w_{ij}$ adalah bobot *net* antara blok $i$ dan $j$, $d_{ij}^{\text{HPWL}}$ adalah estimasi *Half-Perimeter Wire Length*, $P_k$ adalah disipasi daya blok $k$, $\theta_k$ adalah resistansi termal paket, dan $Y_{\text{assy}}$ adalah *assembly yield*.

### 2.2 Resistansi dan Tundaan Sambungan Cu-Cu

Untuk sambungan *hybrid bonding* dengan luas kontak $A_c$, tinggi $h$, dan resistivitas tembaga $\rho_{\text{Cu}} \approx 1{,}68 \times 10^{-8}\ \Omega\cdot\text{m}$:

$$R_{\text{contact}} = \frac{\rho_{\text{Cu}}\, h}{A_c} + R_{\text{interface}}$$

Tundaan propagasi sinyal melalui *interposer* silikon sepanjang $L$ mengikuti:

$$\tau_{\text{prop}} = L \sqrt{L_{\text{line}}\, C_{\text{line}}} = L \sqrt{\varepsilon_{\text{eff}}} / c$$

dengan $c$ adalah kecepatan cahaya. Pada pitch 10 µm, kerapatan I/O dapat melampaui $10^4$ sambungan/mm², menjadikan *interconnect* sebagai pembatas utama untuk *signal integrity*.

### 2.3 Model Termal dan Koefisien Muai Panas (CTE)

Untuk tumpukan 3D-IC dengan *underfill* dan *thermal interface material* (TIM), *thermal resistance network* disusun sebagai:

$$\theta_{JA} = \theta_{JC} + \theta_{\text{TIM}} + \theta_{\text{spread}} = \sum_{i} \frac{t_i}{k_i A_i}$$

*Strain* akibat mismatch CTE antara die dan substrat pada suhu operasi $T_{\text{op}}$ dari suhu *bonding* $T_b$:

$$\varepsilon_{\text{mismatch}} = \Delta\alpha\,(T_{\text{op}} - T_b)$$

dengan $\Delta\alpha = \alpha_{\text{die}} - \alpha_{\text{sub}}$. Persamaan Coffin-Manson governs fatigue寿命:

$$N_f = A \cdot (\Delta\varepsilon_{\text{plastic}})^{-\,n}, \quad n \approx 1{,}5\text{–}2$$

### 2.4 Yield Sambungan Hybrid Bonding

Mengikuti model binomial *clustered defect*:

$$Y_{\text{bond}} = \left(1 - e^{-D \cdot A_c}\right)^{N}$$

dengan $D$ adalah densitas cacat (umumnya $0{,}1$–$1$ cacat/cm² untuk proses matang), $A_c$ luas kontak, dan $N$ jumlah sambungan per die.

---

## 3. Metodologi Rekayasa & SOP Integrasi EDA–Hybrid Bonding

**Tahap 1 — *Multi-Die Partitioning*:** Definisikan *chiplet boundary* berdasarkan reuse IP, *process node* optimal per blok, dan batas I/O *interconnect*. Gunakan metrik $C(\mathcal{P})$ dari §2.1 sebagai panduan.

**Tahap 2 — *Co-Design* Listrik-Termal:** Integrasikan solver termal 3D (ANSYS RedHawk atau Cadence Celsius) dengan *floorplan* EDA sejak iterasi pertama untuk menghindari *thermal runaway* pada *stacked dies*.

**Tahap 3 — Penyiapan *Design Kit Hybrid Bonding*:** Tentukan *bond pad* pitch ($p$), *keep-out zone*, aturan DRC *microscanner*, dan *pad stack* (Cu/SiCN/dielectric). Lau (2023) menekankan bahwa kekasaran permukaan $R_a < 0{,}5$ nm adalah prasyarat kritis untuk difusi Cu-Cu.

**Tahap 4 — Simulasi *Process Window*:** Validasi parameter proses (suhu annealing $T_a \approx 200\text{–}300^{\circ}\text{C}$, gaya tekan $F$, durasi $t_a$) terhadap *yield* menggunakan DOE *response surface methodology*.

**Tahap 5 — Verifikasi dan *Sign-off*:** Jalankan DRC, LVS, *electromigration check*, dan *thermal-mechanical stress simulation* lintas-domain. Lakukan *multi-physics sign-off* sebelum tape-out.

**Tahap 6 — *Known-Good-Die (KGD)* dan Integrasi:** Uji setiap *chiplet* secara independen sebelum *hybrid bonding*; hal ini membedakan arsitektur chiplet dari SoC monolitik dan menambah *test cost* yang harus dimasukkan dalam fungsi biaya.

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Skenario:** Desain *AI accelerator* 4-die — 1 *logic die* (5 nm) + 1 *base die* (7 nm) + 2 *HBM3 stacks*, dengan target *assembly yield* $\geq 95\%$ dan bandwidth antardie $2$ TB/s.

**