# 2859 — Sistem EDA untuk Desain Chiplet dan Sirkuit Terintegrasi 3D: Kerangka Kerja Rekayasa Heterogen, Solusi Verifikasi Multi-Fisika, dan Integrasi Proses Hybrid Bonding Tembaga-Tembaga

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah menghadapi persimpangan strategis yang menentukan arsitektur komputasi selama dua dekade mendatang. Setelah berakhirnya era penskalaan transistor planar *Dennard* dan melonjaknya biaya fabrikasi untuk node proses sub-3 nm (mask-set tunggal melampaui US$500 juta menurut data International Business Strategies yang dikutip dalam laporan industri 2024), paradigma *monolithic system-on-chip* (SoC) menjadi tidak lagi berkelanjutan secara ekonomi. Respons industri—yang kini diformalisasikan oleh roadmap IRDS 2023 dan diperkuat oleh konsorsium UCIe, BoW, dan Bunch of Wires—adalah transisi masif menuju desain berbasis **chiplet** dengan integrasi tiga dimensi (3D-IC).

Dalam konteks ini, kontribusi Roze dan Gerber (2026) pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menjadi titik referensi krusial. Kedua penulis ini berasal dari komunitas vendor *Electronic Design Automation* (EDA) tingkat lanjut dan memaparkan kerangka kerja EDA end-to-end yang menjembatani kesenjangan antara desain logika chip individual, integrasi *package* heterogen, dan verifikasi *multi-physics*. Permasalahan yang mereka identifikasi bukan lagi sekadar "cara menyambung dua die", melainkan bagaimana mengelola **koherensi elektro-termal-mekanis** pada sistem dengan puluhan chiplet yang berbeda proses, vendor, dan karakteristik termalnya.

Urgensi operasional dari solusi EDA semacam ini bersifat ganda. Dari perspektif *time-to-market*, sebuah tim desain GPU modern membutuhkan iterasi floorplan, *place-and-route*, dan analisis *signal-integrity* yang pada pendekatan monolitik memakan waktu 8–12 minggu per iterasi; pada arsitektur chiplet 3D, tanpa platform EDA terpadu, iterasi ini dapat membengkak menjadi 20–30 minggu karena setiap kali satu chiplet diubah, jaringan interkoneksi *through-silicon-via* (TSV), distribusi *power-delivery network* (PDN), dan peta termal seluruh stack harus dihitung ulang. Secara ekonomis, studi biaya IEEE ECTC 2023 menunjukkan bahwa *chiplet-based design* dengan EDA yang matang mampu menurunkan *non-recurring engineering* (NRE) sebesar 35–45% untuk produk dengan volume di bawah 50 juta unit per tahun, asalkan *yield* integrasi paket tetap di atas 92%.

Dari sisi teknologi proses, fondasi fisik yang memungkinkan densitas interkoneksi tersebut adalah **Cu-Cu hybrid bonding** yang diuraikan secara otoritatif oleh John H. Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)). Lau mendokumentasikan parameter proses—suhu anil 200–300 °C, tekanan 70–150 MPa, waktu tahan 30–60 menit, dan *pitch* pad yang sudah mencapai 3 µm pada prototipe riset—yang menentukan apakah dua die mampu membentuk sambungan metalurgi kontinyu. Tanpa solusi EDA yang mampu mengkuantifikasi dampak *Coefficient of Thermal Expansion* (CTE) mismatch antara tembaga ($16{,}5 \text{ ppm/K}$) dan silikon ($2{,}6 \text{ ppm/K}$) terhadap umur lelah sambungan, sebuah integrasi chiplet secara fisik mungkin berhasil di lini produksi namun gagal prematur di lapangan.

Dengan demikian, **modul 2859** ini membahas secara holistik keterkaitan antara kapabilitas EDA (Roze & Gerber, 2026) dan landasan teknologi hybrid bonding (Lau, 2023), guna membekali perekayasa industri dengan perangkat analisis kuantitatif untuk pengambilan keputusan integrasi heterogen.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis yang dibangun Roze dan Gerber (2026) merepresentasikan sistem chiplet 3D-IC sebagai masalah optimasi kombinatorial multi-domain. Empat besaran fisika harus dipenuhi secara simultan: integritas sinyal, distribusi daya, manajemen termal, dan keandalan mekanis sambungan. Untuk masing-masing domain, formulasi matematis berikut menjadi tulang punggung verifikasi.

### 2.1 Model Yield Multi-Komponen

Untuk paket heterogen dengan $N$ chiplet, *assembly yield* total tidak lagi mengikuti perkalian sederhana, melainkan harus memperhitungkan korelasi proses antar-die. Roze dan Gerber mengadopsi model binomial negatif terkoreksi:

$$
Y_{\text{system}} = \prod_{i=1}^{N} \left(1 - D_i \cdot A_i \cdot f_i\right) \cdot \exp\!\left(-\sum_{j<k} \rho_{jk}\right)
$$

di mana $D_i$ adalah densitas cacat per cm² chiplet-$i$, $A_i$ adalah luas aktifnya, $f_i$ adalah faktor *stack-up*, dan $\rho_{jk}$ adalah koefisien korelasi proses antara chiplet $j$ dan $k$. Parameter $\rho_{jk}$ hanya dapat diestimasi melalui *Design-of-Experiments* (DoE) yang difasilitasi oleh platform EDA.

### 2.2 Impedansi Power-Delivery Network (PDN)

Untuk mencegah *IR-drop* yang melanggar spesifikasi *voltage-noise margin* $\Delta V_{\text{spec}}$, impedansi PDN pada frekuensi operasi $f_{\text{op}}$ harus memenuhi:

$$
Z_{\text{PDN}}(f_{\text{op}}) = \sqrt{R_{\text{PDN}}^2(f_{\text{op}}) + X_{L,\text{eff}}^2(f_{\text{op}})} \le \frac{\Delta V_{\text{spec}}}{I_{\text{transient,max}}}
$$

dengan $R_{\text{PDN}}$ tahanan ekuivalen jaringan, $X_{L,\text{eff}}$ reaktansi induktif efektif yang menurun seiring bertambahnya jumlah TSV, dan $I_{\text{transient,max}}$ arus puncak sesaat. Pada arsitektur chiplet dengan $M$ TSV paralel, induktansi total turun sebagai $1/M$, sehingga $X_{L,\text{eff}} = L_{\text{TSV}} / M$.

### 2.3 Resistansi Termal Setara Stack 3D

Resistansi termal ekuivalen dari sebuah stack $N$-die dengan *thermal interface material* (TIM) di antaranya dirumuskan oleh:

$$
R_{\text{th,total}} = \sum_{i=1}^{N} \left(\frac{t_i}{k_i \cdot A_i}\right) + \sum_{j=1}^{N-1} R_{\text{TIM},j}
$$

dengan $t_i$ ketebalan die-$i$, $k_i$ konduktivitas termal efektifnya (silikon bulk $\sim 148 \text{ W/m·K}$, sedangkan region *keep-out-zone* di sekitar TSV hanya $\sim 5$–$10 \text{ W/m·K}$ karena kerusakan kristalin), dan $A_i$ luas penampang termal. Roze dan Gerber menekankan bahwa *EDA thermal solver* wajib melakukan homogenisasi