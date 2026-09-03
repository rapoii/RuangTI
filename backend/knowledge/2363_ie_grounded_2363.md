# 2363 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Cu-Cu, dan Rekayasa Sistem Pengemasan Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma desain semikonduktor dari pendekatan *system-on-chip* (SoC) monolitik menuju arsitektur *multi-die integration* berbasis chiplet dan *three-dimensional integrated circuit* (3D-IC) merepresentasikan salah satu transformasi paling disruptif dalam industri mikroelektronika abad ke-21. Ksenia Roze dan Mark Gerber (2026) dalam kontribusi mereka di ICEP-HBS 2026 mengidentifikasi bahwa kompleksitas geometris dan fungsional dari integrasi heterogen telah melampaui kapasitas metodologi Electronic Design Automation (EDA) konvensional yang dirancang untuk desain planar monolitik. Sebagai respons terhadap tantangan ini, komunitas riset kemasan elektronik global — termasuk kontribusi John H. Lau (2023) dalam edisi Springer tentang *Cu-Cu Hybrid Bonding* — telah mengarahkan upaya signifikan untuk membangun kerangka kerja EDA yang mampu mengorkestrasi secara simultan parameter kelistrikan, termal, mekanis, dan keandalan pada tumpukan tiga dimensi.

Urgensi industrialisasi chiplet didorong oleh tiga kekuatan struktural yang beroperasi secara bersamaan. Pertama, *economic yield scaling* — biaya wafer kelas先进 (advanced node, ≤3 nm) telah melonjak secara eksponensial sehingga pendekatan *known-good-die* (KGD) menjadi satu-satunya strategi yang layak secara finansial untuk mencapai *yield* kumulatif yang dapat diterima pada area die yang besar. Kedua, *heterogeneous integration imperative* — tidak ada satu pun proses fabrikasi CMOS yang optimal untuk logika performa tinggi, memori bandwidth tinggi (HBM), RF, fotonik, dan power delivery secara bersamaan, sehingga integrasi chiplet multi-proses menjadi kebutuhan arsitektural, bukan sekadar pilihan. Ketiga, *time-to-market compression* — bagi perusahaan seperti AMD, Intel, TSMC, dan NVIDIA yang telah mengadopsi arsitektur chiplet (Ryzen, Sapphire Rapids, CoWoS-S/L, Hopper/Blackwell), siklus desain harus dipotong dari 24-36 bulan menjadi 12-18 bulan, yang hanya dimungkinkan oleh otomatisasi EDA end-to-end (Roze & Gerber, 2026).

Secara ekonomi, pasar *heterogeneous integration packaging* diproyeksikan tumbuh dari USD 45 miliar (2024) menjadi lebih dari USD 95 miliar pada 2030, dengan CAGR sebesar ±13,5%. Penggerak utamanya adalah aplikasi High-Performance Computing (HPC), AI accelerators, dan mobile SoC yang memerlukan *compute density* >500 TOPS/W. Dalam konteks ini, peran EDA bukan lagi sekadar menghasilkan *layout* — melainkan sebagai *decision-support system* yang mengelola trade-off antara biaya, performa, termal, dan *time-to-yield* (Lau, 2023). Literatur menunjukkan bahwa lebih dari 60% jadwal tap-out saat ini diserap oleh iterasi verifikasi lintas-die, sehingga efisiensi *co-design flow* menjadi pembeda kompetitif utama.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis untuk EDA chiplet dan 3D-IC memerlukan perpaduan beberapa model kuantitatif fundamental yang beroperasi pada lapisan abstraksi berbeda. Roze dan Gerber (2026) menekankan bahwa arsitektur EDA modern harus mengakomodasi empat kelas model simultan: (i) model partisi dan floorplan, (ii) model kelistrikan dan sinyal, (iii) model termal multi-fisik, dan (iv) model keandalan & yield.

### 2.1 Model Partisi dan Estimasi Interkoneksi (Rent's Rule)

Kompleksitas interkoneksi sistem chiplet dimodelkan menggunakan generalisasi *Rent's rule* untuk arsitektur multi-die:

$$T = t \cdot N^{p}$$

di mana $T$ adalah jumlah terminal (pin/bumps/TSV) eksternal, $N$ adalah jumlah gerbang logika dalam blok, $t$ adalah rata-rata pin per gerbang (typically 2-4 untuk logika standar), dan $p$ adalah *Rent exponent* (0,5 ≤ p ≤ 0,75 untuk desain nyata). Untuk sistem chiplet dengan $N_{tot} = 10^{10}$ gerbang yang dipartisi menjadi $k$ chiplet identik, jumlah inter-die bumps yang diperlukan adalah:

$$B_{inter} \approx k \cdot t \cdot \left(\frac{N_{tot}}{k}\right)^{p} = t \cdot k^{1-p} \cdot N_{tot}^{p}$$

Untuk $k=8$ chiplet identik dengan $p=0,65$, diperoleh $B_{inter} \approx 0,42 \cdot B_{mono}$, mengindikasikan bahwa partisi moderat mengurangi kebutuhan interkoneksi eksternal sebesar ~58% dibanding solusi monolitik — sebuah justifikasi teoretis utama untuk arsitektur chiplet.

### 2.2 Model Termal Multi-Die

Untuk tumpukan 3D-IC, resistansi termal ekuivalen dari satu lapisan die terhadap heat sink direpresentasikan sebagai:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_{i}}{k_{i} \cdot A_{eff,i}} + R_{th,TIM} + R_{th,spreader} + R_{th,conv}$$

di mana $t_i$ adalah ketebalan lapisan ke-$i$ (silikon ~50-100 μm, TIM 20-50 μm, heat spreader 1-2 mm), $k_i$ adalah konduktivitas termal material ($k_{Si} \approx 148$ W/m·K, $k_{TIM} \approx 3-12$ W/m·K, $k_{Cu} \approx 400$ W/m·K, $k_{TIM1} \approx 1,5$ W/m·K untuk material organik), dan $A_{eff,i}$ adalah luas efektif area aliran panas yang mencakup efek *spreading resistance* (Roze & Gerber, 2026).

Untuk stack 4-die dengan satu die aktif di setiap lapisan, suhu junction die ke-$j$ relatif terhadap ambient:

$$T_{j,n} = T_{amb} + P_{tot} \cdot \left( \sum_{i=n+1}^{N} R_{th,i} + \sum_{i=1}^{n-1} \gamma_{i,n} \cdot R_{th,i} \right)$$

di mana $\gamma_{i,n}$ adalah faktor kopling termal vertikal yang merepresentasikan fraksi daya die-$i$ yang harus melewati die-$n$ sebelum mencapai heat sink. Untuk HBM yang ditempatkan di atas logika aktif, $\gamma$ dapat mencapai 0,8-0,95, menjadikan manajemen termal sebagai kendala desain yang kritis.

### 2.3 Model Keterlambatan Sinyal (RC Delay) untuk Inter-die Link

Keterlambatan propagasi untuk interkoneksi hybrid-bonded Cu-Cu die-to-die direpresentasikan sebagai:

$$\tau_{50\%} = 0,693 \cdot R_{int} \cdot C_{L} + 0,693 \cdot R_{drvr} \cdot (C_{L} + C_{int})$$

di mana $R_{int}$ adalah resistansi per satuan panjang kawat, $C_{L}$ adalah kapasitansi beban (kapasitansi bump hybrid + kapasitansi input receiver), dan $R_{drvr}$ adalah resistansi output driver. Untuk hybrid bonding Cu-Cu dengan pitch 3 μm dan diameter bump ~1,2 μm, resistansi kontak tipikal adalah:

$$R_{contact} = \frac{\rho_{Cu}}{2\pi r_{bump}} \cdot \arctanh\left(\frac{t_{Cu}}{2r_{bump}}\right)^{-1} \approx 5-15 \text{ m}\Omega$$

Keterlambatan total per link pada arsitektur UCIe (Universal Chiplet Interconnect Express) standar adalah <2 ns untuk panjang saluran hingga 25 mm, dengan *energy efficiency* <0,5 pJ/bit (Lau, 2023).

### 2.4 Model Yield Komposit untuk Multi-Die

Yield sistem untuk rakitan multi-chiplet dimodelkan sebagai:

$$Y_{sys} = \prod_{i=1}^{k} Y_{KGD,i} \cdot Y_{assembly} \cdot Y_{interconnect}$$

di mana $Y_{KGD,i}$ adalah yield *known-good-die* masing-masing chiplet (umumnya >95% setelah burn-in), $Y_{assembly}$ adalah yield proses pick-and-place dan bonding (~99,5-99,9% untuk hybrid bonding), dan $Y_{interconnect}$ adalah yield koneksi listrik yang bergantung pada *bonding defect density* $D_{def}$:

$$Y_{interconnect} =
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
