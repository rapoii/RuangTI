# 2620 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Pemantauan Proses Kritis & Optimalisasi Energi dalam Kerangka PAT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Liofilisasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan unit operasi kritis dalam manufaktur biofarmaka modern, mencakup lebih dari **50%** produk biologis dan vaksin yang memerlukan stabilitas jangka panjang tanpa refrigerasi. Proses ini melibatkan tiga tahap utama — pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi) — yang seluruhnya terjadi pada tekanan rendah (umumnya 10–100 mTorr) dan memerlukan profil suhu rak (*shelf*) serta tekanan ruang yang sangat presisi (Meza‐Galvan, Strongrich, & Darwish, 2026, DOI: 10.1002/9783527850303.ch4). Dalam konteks ini, konsistensi antar-vial menjadi masalah industri yang persisten: pada batch yang melibatkan 20.000 vial, gradien termal antar-posisi rak dapat menyebabkan **heterogenitas waktu pengeringan 20–30%**, yang berujung pada pembuangan produk, *over-drying*, atau degradasi protein aktif karena *collapse temperature* terlampaui.

Urgensi ekonomi dan regulasi menjadi penggerak utama adopsi teknologi *Process Analytical Technology* (PAT) sebagaimana dimandatkan FDA sejak 2004. Biaya satu siklus liofilisasi skala produksi untuk batch antibodi monoklonal mencapai USD 250.000–500.000, sehingga setiap peningkatan yield 1% bernilai signifikan. Meza‐Galvan *et al.* (2026, DOI: 10.1002/9783527850303.ch4) mengusulkan **arsitektur Wireless Sensor Network (WSN)** berbasis protokol IEEE 802.15.4 untuk menggantikan thermocouple berkabel (*thermoswitch* Wired PRT) yang selama ini memiliki kelemahan fatal: instalasi invasif yang menembus dinding vial, biaya probe tinggi (USD 50–200 per thermocouple), dan keterbatasan jumlah titik ukur (umumnya hanya 5–10 vial termonitori per batch). Dengan WSN, lebih dari 100 vial dapat dipantau secara simultan, *non-invasif*, dan *real-time*, memungkinkan implementasi *closed-loop control* dan *Quality by Design* (QbD).

Dari perspektif Teknik Industri, kontribusi utama WSN pada liofilisasi mencakup tiga dimensi: (i) **akuisisi data skala besar** untuk *state estimation* berbasis Kalman filter, (ii) **optimalisasi sumber daya energi** melalui algoritma *duty cycling* dan *routing* hierarkis, dan (iii) **desain eksperimen (DoE)** yang diperkaya untuk identifikasi parameter *Design Space*. Artusio, Barresi, & Pisano (2026, DOI: 10.1002/9783527850303.ch11) melengkapi paradigma ini dengan mengidentifikasi bahwa integrasi WSN dengan *soft sensors* dan *machine learning* membuka peluang transformatif bagi *batch release* secara *real-time*, menggantikan uji *post-process* yang memakan waktu berminggu-minggu. Kedua referensi ini menjadi tulang punggung literatur untuk modul 2620.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Sublimasi

Mekanisme sublimasi dikuantifikasi melalui resistansi termal total $R_{\text{tot}}$ dan resistansi perpindahan massa $R_p$:

$$Q = \frac{T_{\text{shelf}} - T_{\text{bottle}}}{R_{\text{tot}}} = \frac{T_{\text{bottle}} - T_{\text{ice}}}{\frac{1}{h_{\text{conv}} A_v}}$$

$$\frac{dm}{dt} = \frac{P_{\text{ice}}(T_{\text{ice}}) - P_c}{R_p}$$

di mana $P_{\text{ice}}(T_{\text{ice}})$ adalah tekanan uap jenuh di permukaan es yang dihitung dengan persamaan Antoine atau Goff–Gratch, $P_c$ adalah tekanan ruang, dan $h_{\text{conv}}$ adalah koefisien konveksi gas pada tekanan rendah. Resistansi perpindahan massa vial $R_p$ merupakan fungsi dari kekasaran *stopper*, luas penampang vial, dan panjang *choked flow* lapisan kering.

### 2.2 Model Propagasi Radio untuk WSN di dalam Freeze Dryer

Kualitas sinyal *wireless* di lingkungan ruang vakum dengan dinding stainless steel mengikuti *log-distance path loss model*:

$$PL(d) = PL(d_0) + 10n \cdot \log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ adalah rugi-rugi pada jarak referensi $d_0 = 1\,\text{m}$, $n$ adalah *path loss exponent* (2 untuk *line-of-sight* vakum, 3–4 untuk lingkungan dengan refleksi), dan $X_\sigma \sim \mathcal{N}(0, \sigma^2)$ adalah komponen *shadow fading*. Untuk lingkungan ruang vakum liofilisasi, Meza‐Galvan *et al.* (2026, DOI: 10.1002/9783527850303.ch4) melaporkan $n \approx 2.3$ pada frekuensi 2.4 GHz dengan $\sigma \approx 4$ dB.

### 2.3 Model Konsumsi Energi Node Sensor

Konsumsi energi per siklus transmisi mengikuti model *first-order radio* Heinzelman:

$$E_{\text{TX}}(k, d) = E_{\text{elec}} \cdot k + \varepsilon_{\text{amp}} \cdot k \cdot d^{\alpha}$$

$$E_{\text{RX}}(k) = E_{\text{elec}} \cdot k$$

dengan $k$ adalah ukuran paket (bit), $d$ jarak (m), $E_{\text{elec}} = 50\,\text{nJ/bit}$, $\varepsilon_{\text{amp}} = 10\,\text{pJ/bit/m}^2$ (untuk $\alpha = 2$), dan $\alpha = 2$–$4$ sesuai kondisi propagasi. Umur baterai node $T_{\text{life}}$ dapat dihitung:

$$T_{\text{life}} = \frac{E_{\text{battery}} - E_{\text{sensing}}}{P_{\text{TX}} \cdot t_{\text{active}} + P_{\text{sleep}} \cdot t_{\text{sleep}}}$$

dengan $P_{\text{sleep}}$ jauh lebih kecil (orde $\mu$W) dibanding $P_{\text{TX}}$ (orde mW), sehingga strategi *duty cycling* sangat menentukan masa pakai node.

### 2.4 Estimasi State dengan Kalman Filter untuk *Primary Drying*

Persamaan *state-space* untuk estimasi $T_{\text{ice}}$ berbasis pembacaan suhu *wireless* adalah:

$$\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k$$

$$\mathbf{y}_k = \mathbf{C}\mathbf{x}_k + \mathbf{v}_k$$

dengan $\mathbf{x}_k = [T_{\text{ice}}, m_{\text{dry}}, P_c]^T$, $\mathbf{A}$ matriks transisi, $\mathbf{w}_k \sim \mathcal{N}(0, \mathbf{Q})$, $\mathbf{v}_k \sim \mathcal{N}(0, \mathbf{R})$. Implementasi *Extended Kalman Filter* (EKF) memungkinkan *soft sensing* suhu sublimasi dari data suhu vial dan tekanan, mendukung kontrol adaptif parameter proses secara *real-time*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti alur SOP berikut, sebagaimana distandardisasi oleh Meza‐Galvan *et al.* (2026, DOI: 10.1002/9783527850303.ch4):

**Fase A — Desain & Spesifikasi**

1. Karakterisasi *Design Space*: tentukan rentang suhu rak, tekanan ruang, dan laju sublimasi target.
2. Pilih *form factor* node sensor: piramida tipis 15×15×5 mm dengan thermocouple贴片贴附 di dasar vial, atau termokopel *non-contact* inframerah untuk menghindari kontak langsung.
3. Tentukan topologi jaringan: *star* (untuk $< 30$ node), *mesh* (untuk 30–200 node), atau *cluster-tree* (untuk $> 200$ node pada dryer besar).

**Fase B — Instalasi**

4. Kalibrasi node: setiap node dikalibrasi pada tiga titik suhu (-40°C, 0°C, +40°C) dengan akurasi $\pm 0.5°C$ menggunakan *dry-block calibrator* bersertifikat NIST.
5. Penempatan *gateway* di dinding ruang dengan *feedthrough* hermetik untuk transmisi keluar vakum.
6. Validasi jangkauan RF: ukur RSSI minimal $-85$ dBm pada seluruh posisi vial; jika kurang, tambahkan *repeater* pasif di luar ruang.

**Fase C — Operasi & Pemantauan**

7. Konfigurasi *duty cycle*: pembacaan setiap 30–60 detik dengan transmisi burst setiap 5 menit untuk konservasi baterai.
8. Implementasi *time-synchronized mesh* berbasis protokol TSCH (IEEE 802.15.4e) untuk menghindari tabrakan paket.
9. Akuisisi data ke * historian* (PI, OSIsoft) dengan *time-stamping* presisi $\pm 10$ ms.

**Fase D — Validasi & Quality Release**

10. Bandingkan profil $T_{\text{bottle}}$ antar vial untuk mendeteksi *edge effects* dan *vial-to-vial heterogeneity*.
11. Hitung parameter kritis: $R_p$, $K_v$ (koefisien vial), dan *endpoint* sublimasi melalui metode *manometric temperature measurement* (MTM) atau *tunable diode laser absorption spectroscopy* (TDLAS) yang dikorelasikan dengan data WSN.

Arsitektur referensi tiga lapis — **(i) Sensor Layer** (vial-mounted), **(ii) Network Layer** (mesh + gateway), dan **(iii) Application Layer** (PAT dashboard + kontrol adaptif) — menjadi cetak biru industri seperti diuraikan dalam Meza‐Galvan *et al.* (2026, DOI: 10.1002/9783527850303.ch4) dan diperluas ke paradigma *digital twin* oleh Artusio, Barresi, & Pisano (2026, DOI: 10.1002/9783527850303.ch11).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Sistem

Studi kasus: freeze dryer skala pilot dengan **$N_v = 1{,}000$ vial** 10R ($A_v = 4.15\,\text{cm}^2$), rak stainless steel berdimensi $0.6 \times 0.5