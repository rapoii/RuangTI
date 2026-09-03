# 0251 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Manufaktur Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatik dari pendekatan *System-on-Chip* (SoC) monolitik menuju arsitektur *chiplet* dan integrasi tiga dimensi (3D-IC) sebagai respons terhadap berakhirnya hukum skalari Dennard dan melonjaknya biaya *mask set* pada node teknologi sub-3nm yang telah melampaui ambang USD 30 juta per desain (Lau, 2023). Roze dan Gerber (2026) dalam makalahnya di *IEEE ICEP-HBS Symposium* mengidentifikasi bahwa EDA (Electronic Design Automation) konvensional tidak lagi memadai untuk menghadapi kompleksitas multi-die, *floorplanning* heterogen, dan verifikasi *signal/power integrity* lintas substrat. Arsitektur chiplet memungkinkan *yield* manufaktur yang lebih tinggi karena fabrikasi *die* kecil memiliki probabilitas cacat yang jauh lebih rendah dibanding *die* besar monolitik, sekaligus memungkinkan integrasi * Intellectual Property (IP) block* dari *foundry* berbeda dalam satu paket (*heterogeneous integration*).

Permasalahan kritis yang diangkat Roze dan Gerber (2026) mencakup tiga hal: pertama, kebutuhan akan platform EDA yang mampu melakukan *partitioning* otomatis sebuah *netlist* RTL menjadi beberapa *chiplet* dengan mempertimbangkan约束 *thermal*, *timing*, dan *manufacturability*; kedua, simulasi *parasitic extraction* untuk interconnect hybrid bonding Cu-Cu yang memiliki pitch di bawah 10 μm; ketiga, verifikasi *die-to-die* interface protocol seperti Universal Chiplet Interconnect Express (UCIe) yang menuntut akurasi *timing budgeting* pada level pikosecond. Studi ini diperkuat oleh analisis Lau (2023) yang mendokumentasikan bahwa teknologi hybrid bonding Cu-Cu mampu mencapai kepadatan interconnect >10⁶ koneksi/mm² dengan resistansi kontak <5 mΩ per sambungan, sehingga memungkinkan *bandwidth* antardie hingga beberapa Tbps. Urgensi ekonomi dari adopsi solusi EDA berbasis chiplet juga didorong oleh data pasar: menurut estimasi industri yang dirujuk kedua literatur, pasar *heterogeneous integration* diproyeksikan tumbuh dengan CAGR >15% hingga 2030, sementara itu desain SoC monolitik menghadapi *area scaling crisis* di mana *reticle limit* (~858 mm² untuk EUV) membatasi dimensi *die* maksimal. Konteks operasional ini menjadikan solusi EDA chiplet bukan sekadar pilihan teknis melainkan kebutuhan strategis bagi perusahaan semikonduktor, OEM, dan *integrated device manufacturer* (IDM) untuk mempertahankan daya saing dalam rantai pasok mikroelektronika global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Hasil Gabung (Compound Yield) untuk Multi-Die

Roze dan Gerber (2026) membangun kerangka EDA yang secara eksplisit memodelkan *yield* gabungan dari beberapa *chiplet* yang diintegrasikan. Model *compound yield* mengikuti formulasi probabilistik independen:

$$Y_{system} = \prod_{i=1}^{n} Y_i$$

di mana $Y_i$ adalah *yield* individual *chiplet ke-$i$* dan $n$ adalah jumlah total *die* dalam paket. Untuk *die* berbentuk persegi dengan luas $A_i$ dan densitas cacat $D$ (cacat per cm²), *yield* individual mengikuti model Murphy:

$$Y_i = \left[\frac{1 - e^{-D \cdot A_i}}{D \cdot A_i}\right]^2$$

Model ini krusial untuk justifikasi ekonomis chipletization: sebuah *die* monolitik 600 mm² yang dipecah menjadi 6 chiplet masing-masing 100 mm² akan menghasilkan peningkatan *yield* sistem yang signifikan karena $D \cdot A$ turun linier dengan luas.

### 2.2 Model Termal untuk Stack 3D-IC

Lau (2023) menurunkan model resistansi termal ekuivalen (*thermal resistance*, $\theta_{JA}$) untuk *stack* vertikal 3D-IC dengan $k$ *layer*:

$$\theta_{JA} = \sum_{j=1}^{k} \frac{t_j}{k_{th,j} \cdot A_{eff,j}}$$

di mana $t_j$ adalah tebal *layer ke-$j$*, $k_{th,j}$ adalah konduktivitas termal material, dan $A_{eff,j}$ adalah luas efektif disipasi pada *layer* tersebut. Untuk struktur hybrid bonding Cu-Cu dengan *thermal interface material* (TIM), kontribusi resistansi kontak $\theta_{c}$ ditambahkan secara seri.

### 2.3 Optimasi Pitch Hybrid Bonding

Akurasi *alignment* hybrid bonding Cu-Cu dimodelkan dengan persamaan *alignment tolerance budget*:

$$\sigma_{total} = \sqrt{\sigma_{tool}^2 + \sigma_{overlay}^2 + \sigma_{warpage}^2 + \sigma_{thermal}^2}$$

di mana $\sigma_{total}$ harus lebih kecil dari *bonding pitch* yang dibagi enam untuk menjamin *contact yield* >99.7% (Lau, 2023). Roze dan Gerber (2026) menambahkan model *RC parasitik* untuk interconnect hybrid bonding:

$$\tau_{RC} = R_{contact} \cdot C_{pad} = \frac{\rho_{Cu} \cdot l_{via}}{A_{contact}} \cdot \frac{\varepsilon_0 \varepsilon_r A_{pad}}{t_{diel}}$$

di mana $\tau_{RC}$ menentukan batas *data rate* per sambungan; untuk pitch 5 μm, *bandwidth density* dapat melampaui 8 Tbps/mm².

### 2.4 Model Biaya Chiplet vs Monolitik

Trade-off biaya diformulasikan sebagai:

$$C_{total} = C_{design} + \sum_{i=1}^{n} \left(C_{mask,i} + \frac{C_{wafer}}{N_{die,i} \cdot Y_i}\right) + C_{assembly} \cdot n$$

Model ini menjadi basis keputusan EDA dalam memilih *partitioning* optimal antara fabrikasi *dedicated foundry* vs *reuse* IP *chiplet*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA berlapis (*layered EDA framework*) dengan alur kerja sebagai berikut:

**Tahap 1: System-Level Specification & Chiplet Partitioning**
- Input: *netlist* RTL lengkap, *constraint* performa (throughput, latensi, daya), dan *technology file* masing-masing *foundry*.
- Proses: Algoritma *min-cut partitioning* dengan fungsi objektif multi-target:
$$\min_{P} \left[ \alpha \cdot f_{timing}(P) + \beta \cdot f_{thermal}(P) + \gamma \cdot f_{cost}(P) \right]$$
di mana $\alpha, \beta, \gamma$ adalah bobot yang diset oleh *designer*.
- Output: Sub-*netlist* per chiplet dan spesifikasi *die-to-die interface* (UCIe, Bunch of Wires/BoW, atau *proprietary*).

**Tahap 2: Physical Implementation per Chiplet**
- *Floorplanning*, *place-and-route*, dan *clock tree synthesis* dilakukan secara paralel untuk setiap chiplet dengan memanfaatkan PDK (Process Design Kit) spesifik.
- Standar: Penggunaan format *LEF/DEF* dan *OpenAccess* database untuk interoperabilitas.

**Tahap 3: Die-to-Die Interface Planning & Verification**
- Penempatan *bump* atau *hybrid bonding pad* dengan optimasi *signal integrity* dan *power delivery network* (PDN).
- Verifikasi *IR-drop* lintas substrat menggunakan solver elektromagnetik 3D.

**Tahap 4: Package & 3D Stack Assembly**
- Integrasi model termal paket (TIM1, TIM2, *heat spreader*, *heat sink*).
- Simulasi *thermo-mechanical stress* untuk mencegah *warpage* yang dapat mengganggu *alignment* hybrid bonding.

**Tahap 5: Verification & Sign-off**
- Static Timing Analysis (STA) multi-korner multi-mode (MCMM).
- Power Integrity Analysis dengan *vector-based dynamic* IR-drop.
- *Formality equivalence checking* antara pre- dan post-partition.

**Tahap 6: Manufacturing Handoff & Known Good Die (KGD) Test**
- Setiap chiplet harus melalui *probe test* dengan cakupan >95% untuk menjamin *Known Good Die*.
- *Yield learning loop* mengembalikan data manufaktur ke tahap 1 untuk iterasi desain berikutnya.

Diagram alir keseluruhan mengikuti pola *spiral development* dengan iterasi antara *front-end design*, *physical implementation*, dan *manufacturing feedback*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: SoC AI Accelerator 600 mm² → Konfigurasi 6-Chiplet

**Parameter Input:**
- Luas total SoC monolitik: $A_{mono} = 600$ mm²
- Densitas cacat *wafer*: $D = 0.15$ cacat/cm² (asumsi node 5nm mature)
- Target partisi: 6 chiplet masing-masing $A_i = 100$ mm²
- Pitch hybrid bonding Cu-Cu: $p = 5$ μm
- Resistivitas Cu: $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m
- Panjang via tipikal: $l_{via} = 3$ μm
- Luas kontak via: $A_{contact} = (p/2)^2 = 6.25$ μm²

**Langkah Perhitungan:**

**Langkah 1: Hitung Yield Individual (Model Murphy)**

Untuk *die* monolitik 600 mm² = 6 cm²:
$$D \cdot A_{mono} = 0.15 \times 6 = 0.9$$
$$Y_{mono} = \left[\frac{1 - e^{-0.9}}{0.9}\right]^2 = \left[\frac{1 - 0.4066}{0.9}\right]^2 = [0.6593]^2 = 0.4347$$

Untuk setiap chiplet 100 mm² = 1 cm²:
$$D \cdot A_{chiplet} = 0.15 \times 1 = 0.15$$
$$Y_{chiplet} = \left[\frac{1 - e^{-0.15}}{0.15}\right]^2 = \left[\frac{1 - 0.8607}{0.15}\right]^2 = [0.9287]^2 = 0.8625$$

**Langkah 2: Hitung Yield Sistem**

Monolitik (1 die):
$$Y_{system,mono} = 0.4347$$

6 chiplet independen:
$$Y_{system,chiplet} = (0.8625)^6 = 0.4274$$

Hasil menunjukkan bahwa partisi 6 chiplet *tidak meningkatkan yield sistem secara substansial*. Namun, jika kita hitung jumlah *working die per wafer* (asumsi *wafer* 300mm berisi ~120 *die* monolitik 600 mm² atau ~770 *chiplet* 100 mm²):

- *Working product* monolitik: $120 \times 0.4347 = 52.16$ unit
- *Working product* chiplet-set: $\lfloor 770/6 \rfloor \times 0.4274 = 128 \times 0.4274 = 54.71$ set

Keunggulan chiplet tampak pada *scalability* dan *reuse IP*: biaya rekayasa (*NRE*) dapat diamortisasi across multiple products.

**Langkah 3: Resistansi Kontak Hybrid Bonding**

$$R_{contact} = \frac{\rho_{Cu} \cdot l_{via}}{A_{contact}} = \frac{1.68 \times 10^{-8} \times 3 \times 10^{-6}}{6.25 \times 10^{-12}} = \frac{5.04 \times 10^{-14}}{6.25 \times 10^{-12}} = 8.06 \times 10^{-3} \text{ Ω}$$

atau sekitar **8.06 mΩ** per sambungan, mendekati nilai referensi Lau (2023) yang menyebutkan <5-10 mΩ.

**Langkah 4: Bandwidth Density per mm²**

Dengan *data rate* per link $f = 16$ Gbps (UCIe standard) dan jumlah link per mm²:
$$N_{link} = \frac{1}{(p \times 10^{-3})^2} = \frac{1}{(5 \times 10^{-3})^2} = 40.000 \text{ link/mm}^2$$
$$
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
