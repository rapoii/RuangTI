# 2827 — Perancangan Sistem EDA Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global berada di persimpangan kritis antara berakhirnya kelayakan ekonomi penskalaan planar Moore klasik dan melonjaknya tuntutan komputasi untuk aplikasi hyperscale — kecerdasan buatan generatif, pelatihan Large Language Model (LLM), akselerasi GPU cloud, kendaraan otonom Level 4/5, dan komputasi edge berdaya rendah. Menurut Roze dan Gerber (2026) dalam makalah "EDA Solution for Chiplet and 3D-IC Design" yang dipresentasikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, desain monolitik wafer tunggal telah mendekati batas fisika-ekonomi di node 3 nm dan 2 nm, dengan *yield* wafer yang turun drastis dan biaya掩膜 (*mask set*) melampaui ambang USD 50 juta per *tape-out* (Roze & Gerber, 2026). Artikel tersebut menegaskan bahwa arsitektur chiplet — yang membagi *System-on-Chip* (SoC) monolitik menjadi beberapa *die* kecil yang diintegrasikan melalui interposer atau *direct hybrid bonding* — telah menjadi paradigma dominan untuk melanjutkan peningkatandensitas fungsional tanpa束手 pada hukum ekonomi Moore tradisional.

Urgensi operasional diperkuat oleh data pasar: pasar chiplet global diproyeksikan tumbuh dari USD 7,8 miliar (2024) menjadi lebih dari USD 145 miliar pada 2034 (CAGR ~34%), didorong oleh adopsi *Universal Chiplet Interconnect Express* (UCIe) sebagai standar terbuka. Sementara itu, Lau (2023) dalam bab "Cu-Cu Hybrid Bonding" dari monograph *Chiplet Design and Heterogeneous Integration Packaging* menunjukkan bahwa *direct copper-to-copper hybrid bonding* — bukan lagi solder microbump — adalah teknologi enabling kunci, mampu mencapai *pitch* interconnect serendah 1–3 μm, densitas I/O >10⁶/mm², dan resistansi kontak < 50 mΩ per sambungan, jauh melampaui batas termodinamika C4/Solder bumping (Lau, 2023).

Perspektif Teknik Industri memandang transisi ini bukan semata sebagai problema perangkat keras, melainkan sebagai masalah **sistem rekayasa kompleks** yang membutuhkan optimasi simultan terhadap biaya, *yield*, keandalan jangka panjang, termal, integritas sinyal, integritas daya, dan waktu *time-to-market*. Roze dan Gerber (2026) menekankan bahwa *tool* EDA konvensional untuk desain IC planar tidak mampu lagi menangani ko-desain multi-die 3D yang memerlukan verifikasi holistik listrik-termal-mekanikal pada sistem tersusun vertikal. Kebutuhan ini memunculkan kategori baru EDA — *multi-die co-design platform* — yang mengintegrasikan *floorplanning*, *partitioning*, *placement & routing* (P&R) aware-3D, simulasi multi-fisika, dan verifikasi sign-off dalam satu *tool flow* terpadu.

Secara ekonomis, keputusan untuk mengadopsi arsitektur chiplet versus desain monolitik kini merupakan keputusan *make-or-buy* pada tingkat manufaktur semikonduktor. Sebuah SoC 600 mm² monolitik pada node 5 nm memiliki *die yield* efektif < 30%, sementara dekomposisi menjadi empat chiplet 150 mm² yang disusun pada interposer menaikkan *yield* majemuk menjadi > 70%, dengan total *cost-per-good-die* turun 35–45%. Konteks ini menjadikan rekayasa EDA chiplet sebagai kompetensi inti dalam kurikulum Teknik Industri modern — mengkhususkan pada *systems engineering*, optimasi proses manufaktur maju, dan manajemen rantai pasok semikonduktor.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis untuk perancangan EDA chiplet dan 3D-IC mengikuti perspektif *multi-domain optimization* yang dirumuskan oleh Roze dan Gerber (2026). Kami menurunkan formulasi fundamental dalam empat domain fisik yang saling terkopling: **(a) kelistrikan**, **(b) termal**, **(c) mekanis-termal**, dan **(d) keandalan/yield**.

### 2.1 Model Resistansi Termal dan Jaringan RC Termal

Untuk tumpukan vertikal *n* chiplet yang dihubungkan oleh *Through-Silicon Via* (TSV) dan lapisan *micro-bump* atau *hybrid bond*, resistansi termal total dievaluasi sebagai jaringan RC 1D terdiskretisasi:

$$R_{th,\,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i} + \sum_{j=1}^{m} R_{th,\,interface,j}$$

di mana $t_i$ adalah ketebalan die ke-$i$, $k_i$ konduktivitas termal material (untuk silikon $k_{Si} \approx 148$ W/m·K, untuk *underfill* $k_{UF} \approx 0,8$–$2,5$ W/m·K), dan $A_i$ luas penampang aliran panas. Kapasitansi termal diekspresikan:

$$C_{th} = \rho \cdot c_p \cdot V_i = \rho c_p A_i t_i$$

dengan $\rho$ densitas massa dan $c_p$ kapasitas panas spesifik. Konstanta waktu termal sistem adalah $\tau_{th} = R_{th} \cdot C_{th}$, yang menentukan kemampuan *transient heat spreading* saat workload berubah (misalnya burst LLM inference).

### 2.2 Model Integritas Sinyal untuk Interkoneksi TSV dan Hybrid Bond

Menurut Lau (2023), *hybrid bond* Cu-Cu memiliki parasitik listrik urutan magnitudo lebih rendah dibanding solder micro-bump konvensional. Resistansi kontak satu sambungan *hybrid bond*:

$$R_{contact} = \frac{\rho_{Cu} \cdot L_{bond}}{A_{bond}} + R_{interface}$$

dengan $L_{bond}$ tinggi sambungan tipikal 1–3 μm, $A_{bond} = p^2$ luas bond pitch-$p$. Induktansi loop diaproksimasi untuk geometri koaksial silinder TSV:

$$L_{TSV} \approx \frac{\mu_0}{2\pi} \cdot h_{TSV} \cdot \left[ \ln\left(\frac{2h_{TSV}}{r_{TSV}}\right) - 1 \right]$$

Kapasitansi TSV terhadap substrat:

$$C_{TSV} = \frac{2\pi \varepsilon_0 \varepsilon_r h_{TSV}}{\ln\left(\frac{d_{pitch}}{2r_{TSV}}\right)}$$

di mana $h_{TSV}$ adalah tinggi via, $r_{TSV}$ radius, $d_{pitch}$ jarak *pitch*, dan $\varepsilon_r$ permitivitas relatif dielektrik. Impedansi karakteristik interconnect interconnect:

$$Z_0 = \sqrt{\frac{L_{TSV}}{C_{TSV}}} \approx 50\,\Omega \text{ (target desain)}$$

*Time delay* propagasi sinyal dalam TSV diberikan oleh:

$$t_{d} = \sqrt{L_{TSV} \cdot C_{TSV}} \approx \sqrt{\varepsilon_r} \cdot \frac{h_{TSV}}{c}$$

dengan $c$ kecepatan cahaya. Untuk TSV 50 μm dengan $\varepsilon_r = 3,9$ (SiO₂), diperoleh $t_d \approx 1,05$ ps — jauh lebih kecil dari delay routing planar, menjustifikasi arsitektur 3D untuk mengurangi panjang kabel kritis.

### 2.3 Model Densitas Bandwidth dan Throughput

Untuk standar inter-die seperti UCIe, *bandwidth density* didefinisikan:

$$BW_{density} = \frac{N_{lanes} \cdot f_{clock} \cdot W_{encoding}}{A_{die}}$$

dengan $N_{lanes}$ jumlah *lane*, $f_{clock}$ frekuensi transfer, dan $W_{encoding}$ lebar bus per transfer (bit/lane × modulasi). Standar UCIe 1.1/2.0 mencapai $BW_{density} > 1$ TB/s/mm² pada paket 3 nm dengan *pitch* hybrid bond 1 μm.

### 2.4 Model Yield dan Biaya Per-Good-Die

Model yield majemuk untuk sistem multi-die mengikuti formulasi negatif eksponensial dan disederhanakan sebagai:

$$Y_{system} = \prod_{i=1}^{n} Y_i \cdot Y_{assembly}$$

dengan $Y_i$ yield fabrikasi die ke-$i$ (Poisson atau negatif binomial), dan $Y_{assembly}$ yield perakitan hybrid bonding. Yield per die individual menggunakan model Seeds:

$$Y_i = \left(\frac{1 - e^{-D_0 A_i}}{D_0 A_i}\right)^2$$

di mana $D_0$ adalah *defect density* (tipikal 0,1–0,5 cacat/cm² pada node 5 nm) dan $A_i$ luas die. Biaya per good die total sistem:

$$C_{good,\,sys} = \frac{\sum_{i=1}^{n} C_{fab,i} + C_{assembly} + C_{packaging}}{Y_{system}}$$

### 2.5 Fungsi Objektif Optimasi Co-Design

Roze dan Gerber (2026) merumuskan masalah optimasi co-design sebagai:

$$\min_{x} \left[ \alpha \cdot C_{good,\,sys}(x) + \beta \cdot T_{max}(x) + \gamma \cdot SI_{margin}(x) + \delta \cdot t_{design}(x) \right]$$

terhadap kendala: luas total $\sum A_i \leq A_{budget}$, *pitch* $p_{min}$, dan $Y_{system} \geq Y_{threshold}$. Vektor keputusan $x$ mencakup pilihan partisi, *floorplan*, dan routing layer.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka yang diuraikan Roze dan Gerber (2026) serta best practice dari Lau (2023), prosedur operasional standar (*Standard Operating Procedure*) perancangan chiplet 3D-IC dapat distrukturisasi dalam delapan tahap rekayasa sistem:

**Tahap 1 — Spesifikasi Sistem dan Partisi Arsitektur.** Definisikan target performa (TOPS/W untuk AI accelerator, latency, power budget), pilih standar interkoneksi (UCIe, BoW, OpenHBI