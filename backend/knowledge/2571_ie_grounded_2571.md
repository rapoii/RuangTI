# 2571 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*, Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma desain semikonduktor dari System-on-Chip (SoC) monolitik menuju arsitektur chiplet dan *Three-Dimensional Integrated Circuit* (3D-IC) merupakan konsekuensi langsung dari melambatnya *Moore's Law* pada node teknologi sub-3 nm, sekaligus dari melonjaknya biaya fabrikasi *wafer* advanced yang telah menembus kisaran USD 20.000 per *wafer* untuk proses N3 dan diproyeksikan melampaui USD 30.000 pada node N2. Roze dan Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menekankan bahwa heterogenitas fabrikasi—di mana inti logika 3 nm, SRAM 5 nm, *I/O* 7 nm, memori HBM pada *die* terpisah, dan bahkan blok fotonik atau MEMS digabungkan dalam satu *package*—menuntut lapisan *Electronic Design Automation* (EDA) yang mampu menjembatani disparitas proses, vendor, dan domain fisik. Tanpa *tool* EDA holistik, rantai pasok semikonduktor global yang bernilai lebih dari USD 1 triliun akan terhambat oleh silo teknologi.

Konteks operasional industri menjelaskan urgensi ini. Pasar chiplet global diproyeksikan tumbuh dari sekitar USD 7,8 miliar pada 2024 menjadi lebih dari USD 150 miliar pada 2034 dengan CAGR rata-rata 30%+, sementara IEEE Heterogeneous Integration Roadmap (HIR) dan International Roadmap for Devices and Systems (IRDS) secara eksplisit mengidentifikasi otomatisasi desain 3D sebagai enabler utama. Pelaku industri seperti AMD (arsitektur Infinity Fabric pada EPYC dan Ryzen), Intel (Foveros Direct pada Meteor Lake dan Ponte Vecchio), TSMC (3DFabric dengan SoIC-X), Samsung (3D X-Cube), serta NVIDIA (H100/H200 dengan HBM3) sudah memproduksi volume tinggi *stacked die*. Roze dan Gerber (2026) berargumen bahwa kompleksitas tata letak—yang kini melibatkan *floorplan* 3D, *Through-Silicon Via* (TSV), *hybrid bonding* interface, dan *interposer* silikon—melampaui kapasitas metodologi 2D konvensional, sehingga memerlukan *unified design flow* EDA.

Dari perspektif ekonomi dan operasional, *yield* *Known-Good-Die* (KGD) menjadi variabel kritis. Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menunjukkan bahwa *Cu-Cu hybrid bonding* dengan pitch sub-10 μm menggantikan *microbump* solder (pitch ~40–55 μm) dan memungkinkan kerapatan I/O hingga 100× lebih tinggi per satuan luas, namun dengan jendela proses yang jauh lebih sempit. Variabilitas *bonding alignment* (±200 nm), *warpage* *wafer* setelah *thinning* (sering >1 cm pada diameter 300 mm), serta koefisien ekspansi termal (CTE) yang tidak匹配 antar *die* memaksa adopsi metodologi EDA yang mengintegrasikan simulasi multi-fisika sejak tahap *architectural planning*, bukan setelah tape-out. Inilah kontribusi utama Roze dan Gerber (2026): menyediakan *framework* EDA yang menyatukan *floorplanning*, analisis termal, *power integrity*, *signal integrity*, dan verifikasi 3D dalam satu *closed-loop* yang kohesif.

## 2. Landasan Teori & Formulasi Matematis

Kerangka EDA untuk chiplet dan 3D-IC memerlukan formulasi kuantitatif yang menjembatani optimasi lintas-domain. Roze dan Gerber (2026) mengusulkan *cost function* *hierarchical 3D floorplanning* yang meminimalkan gabungan *weighted length*, beban termal, dan degradasi *signal integrity*. Formulasi dasarnya:

$$\min_{\mathbf{x},\mathbf{y},\mathbf{z}} \; C(\mathbf{x},\mathbf{y},\mathbf{z}) = \sum_{i<j} w_{ij} \cdot d(\chi_i, \chi_j) + \alpha \cdot \sum_{i} T_{j,i}(\mathbf{x},\mathbf{y},\mathbf{z}) + \beta \cdot \sum_{k} \mathbb{1}_{\text{SI}_{violation}}(k)$$

di mana $\chi_i = (x_i, y_i, z_i)$ merepresentasikan koordinat 3D chiplet $i$, $d(\chi_i, \chi_j)$ adalah jarak Manhattan atau Euclidean antar chiplet, $w_{ij}$ adalah bobot *net* kritis, $T_{j,i}$ adalah suhu *junction*, dan parameter $\alpha, \beta$ adalah koefisien regularisasi lintas-domain.

Model termal mengikuti pendekatan *compact thermal RC network* yang juga dirujuk oleh Lau (2023) untuk verifikasi stack HBM-logik. Resistansi termal total dari *junction* ke *ambient*:

$$\theta_{JA} = \frac{T_J - T_A}{P_{diss}} = \theta_{JC} + \theta_{CS} + \theta_{SA}$$

Untuk *stack* 3D dengan $N$ *die*, resistansi termal kumulatif menjadi:

$$\theta_{stack} = \sum_{i=1}^{N} \frac{t_i}{k_i \cdot A_i} + \theta_{TIM} + \theta_{spreader}$$

di mana $t_i$ adalah ketebalan *die* ke-$i$, $k_i$ konduktivitas termal, dan $A_i$ luas efektif. Lau (2023) melaporkan bahwa *thinning* *die* hingga 30–50 μm dengan *handle wafer* menjadi prasyarat *hybrid bonding* dan secara langsung menurunkan $\theta_{stack}$, namun meningkatkan risiko *warpage* yang dimodelkan sebagai:

$$\delta_{warp} = \frac{3 \cdot \sigma_{film} \cdot (1-\nu^2)}{E \cdot t^2} \cdot \left(\frac{D}{2}\right)^2$$

dengan $\sigma_{film}$ adalah tegangan residu film tipis, $\nu$ rasio Poisson, $E$ modulus Young, $t$ ketebalan *die*, dan $D$ diameter *wafer*.

Untuk *signal integrity*, Roze dan Gerber (2026) mengadopsi model transmisi untuk TSV dan *hybrid bonding* interconnect. Resistansi TSV silikon tembaga:

$$
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
