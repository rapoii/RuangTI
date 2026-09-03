# 2074 — Rekayasa Pigmen Alami dari Sumber Nabati: Klasifikasi, Ekstraksi, dan Aplikasi Industri Pantungan dengan Pendekatan Teknik Industri & Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Natural Pigments of Plant Origin: Classification, Extraction and Application in Foods
**Jurnal & Sitasi Utama:** Azucena Rodríguez‐Mena, Luz Araceli Ochoa‐Martínez, Silvia Marina González‐Herrera (2022). *Food Chemistry*. DOI: [https://doi.org/10.1016/j.foodchem.2022.133908](https://doi.org/10.1016/j.foodchem.2022.133908)
**Sitasi Pendukung:** Florina Stoica, Gabriela Râpeanu, Roxana Nicoleta Rațu (2025). *Agriculture*. DOI: [https://doi.org/10.3390/agriculture15030270](https://doi.org/10.3390/agriculture15030270)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap pewarna pangan alami menunjukkan tren peningkatan yang konsisten dengan *Compound Annual Growth Rate* (CAGR) sebesar 6,8% pada periode 2020–2027, didorong oleh meningkatnya kesadaran konsumen akan efek karsinogenik dan neurotoksik pewarna sintetis seperti Tartrazine (E102), Sunset Yellow (E110), dan Allura Red (E129). Rodríguez-Mena et al. (2022) dalam *Food Chemistry* melakukan tinjauan sistematis terhadap klasifikasi, metode ekstraksi, dan aplikasi pewarna alami dari sumber nabati, mengidentifikasi empat kelas utama: klorofil (hijau), karotenoid (kuning–oranye–merah), antosianin (merah–ungu–biru), dan betalain (merah–violet–kuning), dengan total estimasi pasar global mencapai USD 2,3 miliar pada 2024.

Urgensi operasional industri berpijak pada tiga pilar: (i) tekanan regulasi — pelarangan bertahap pewarna sintetis di Uni Eropa melalui *European Food Safety Authority* (EFSA) dan preferensi label *clean-label* di Amerika Utara; (ii) tekanan eksternal — permintaan konsumen akan produk *plant-based* dan *non-GMO*; serta (iii) tekanan lingkungan — kebutuhan akan *circular economy* yang memanfaatkan *by-product* pertanian. Stoica et al. (2025) dalam *Agriculture* secara spesifik menyoroti bahwa industri pengolahan bit merah (*Beta vulgaris*) menghasilkan 35–45% limbah padat (kulit, pulp, ampas) yang masih kaya betalain (200–500 mg/100 g berat basah), fenolik, dan vitamin, sehingga menciptakan peluang rekayasa untuk mengkonversi *by-product* menjadi pewarna bernilai tambah tinggi.

Dari perspektif Teknik Industri, tantangan utama terletak pada optimalisasi proses ekstraksi yang efisien energi, perancangan *supply chain* pigmen yang *traceable*, dan integrasi unit operasi *upstream–downstream* dalam kerangka *Industrial Symbiosis*. Studi Rodríguez-Mena et al. (2022) menunjukkan bahwa penerapan teknik ekstraksi non-konvensional (*Ultrasound-Assisted Extraction*/UAE, *Microwave-Assisted Extraction*/MAE, *Supercritical Fluid Extraction*/SFE) mampu meningkatkan rendemen hingga 15–40% dibanding ekstraksi Soxhlet konvensional dengan konsumsi pelarut 60–80% lebih rendah.

## 2. Landasan Teori & Formulasi Matematis

Rekayasa ekstraksi pigmen alami memerlukan model kuantitatif yang menggabungkan kinetika transfer massa, termodinamika kelarutan, dan analisis kualitas warna.

**2.1. Model Kinetika Ekstraksi (Peleg's Model)**
Rendemen ekstraksi $Y_t$ pada waktu $t$ mengikuti model Peleg yang dimodifikasi:

$$Y_t = Y_0 + \frac{t}{K_1 + K_2 \cdot t}$$

di mana $Y_0$ adalah rendemen awal (umumnya = 0), $K_1$ (menit·g/mg) adalah konstanta laju awal, dan $K_2$ (g/mg) adalah konstanta kapasitas yang berbanding terbalik dengan rendemen kesetimbangan $Y_{eq} = Y_0 + 1/K_2$.

**2.2. Persamaan Laju Pseudo-Orde Satu**
Untuk ekstraksi dengan volume pelarut konstan:

$$C_t = C_{eq}\left(1 - e^{-k \cdot t}\right)$$

dengan $C_t$ (mg/L) konsentrasi pigmen pada waktu $t$, $C_{eq}$ konsentrasi kesetimbangan, dan $k$ (menit$^{-1}$) konstanta laju.

**2.3. Neraca Massa Unit Ekstraksi**

$$M_{raw} \cdot x_{pigmen} = M_{extract} \cdot C_{extract} + M_{residue} \cdot x_{residue} + M_{loss}$$

dengan $M_{raw}$ massa bahan baku (kg), $x_{pigmen}$ fraksi massa pigmen dalam bahan baku, $M_{extract}$ massa ekstrak, $C_{extract}$ konsentrasi pigmen dalam ekstrak, $M_{residue}$ massa padatan sisa, dan $M_{loss}$ kehilangan proses.

**2.4. Efisiensi Ekstraksi Overall**

$$\eta = \frac{C_{extract} \cdot V_{extract}}{x_{pigmen} \cdot M_{raw}} \times 100\%$$

**2.5. Kuantifikasi Warna Sistem CIELAB**

$$\Delta E^*_{ab} = \sqrt{(\Delta L^*)^2 + (\Delta a^*)^2 + (\Delta b^*)^2}$$

di mana $L^*$ (lightness, 0–100), $a^*$ (hijau–merah, −120 hingga +120), dan $b^*$ (biru–kuning, −120 hingga +120). Nilai $\Delta E^*_{ab} < 1$ menunjukkan perbedaan yang tidak terdeteksi secara visual; $\Delta E^*_{ab} > 3$ terdeteksi jelas oleh konsumen.

**2.6. Stabilitas Pigmen (Degradasi Kinetik)**

$$\ln\left(\frac{C_t}{C_0}\right) = -k_d \cdot t$$

dengan $k_d$ (jam$^{-1}$) konstanta degradasi yang bergantung pada pH, suhu, cahaya, dan oksigen.

**2.7. Fungsi Produksi Cobb-Douglas untuk Yield**

$$Y = A \cdot T^{\alpha} \cdot S^{\beta} \cdot P^{\gamma}$$

dengan $T$ suhu ekstraksi (°C), $S$ rasio pelarut:bahan baku (mL/g), $P$ daya ultrasonik (W) untuk UAE, dan $A, \alpha, \beta, \gamma$ parameter empiris yang diperoleh melalui *Response Surface Methodology* (RSM).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti kerangka *Process Flow Diagram* sembilan tahap sesuai *Good Manufacturing Practice* (GMP) untuk *Food-grade Colorants*:

**Tahap 1 — Penerimaan & Sortasi Bahan Baku:** Inpeksi visual, pengukuran $L^*a^*b^*$ awal, dan penentuan kadar air ($<10\%$ untuk bahan kering).

**Tahap 2 — Pre-treatment:** Pencucian, pengupasan, pengecilan ukuran (partikel 2–5 mm), dan * blanching* (80°C, 3 menit) untuk menginaktivasi enzim *polyphenol oxidase* (PPO).

**Tahap 3 — Ekstraksi:** Parameter yang dikontrol: rasio pelarut:bahan baku (10:1 hingga 30:1), suhu (30–60°C), waktu (15–60 menit untuk UAE), dan daya ultrasonik (20–40 kHz, 100–500 W). Stoica et al. (2025) melaporkan UAE dengan asam sitrat 1% (pH 3,5) menghasilkan rendemen betalain 78,3%.

**Tahap 4 — Separasi Padatan–Cairan:** Filtrasi membran (0,45 μm) atau sentrifugasi (5.000 ×g, 15 menit).

**Tahap 5 — Konsentrasi:** *Vacuum evaporation* (40°C, 50 mbar) atau *membrane filtration* (nanofiltrasi 300–500 Da).

**Tahap 6 — Purifikasi:** *Adsorption chromatography* dengan resin *XAD-7HP* atau *Sephadex LH-20*.

**Tahap 7 — Pengeringan:** *Spray drying* (T_in=180°C, T_out=80°C) atau *freeze drying* dengan *maltodextrin* sebagai *carrier* (rasio 1:3).

**Tahap 8 — Quality Control (QC):** Pengujian HPLC-DAD untuk kemurnian (>85%), spektrofotometer UV-Vis untuk total pigmen, dan pengukuran $L^*a^*b^*$ final. Sterilitas mikroba sesuai ISO 21528-2.

**Tahap 9 — Pengemasan & Penyimpanan:** Wadah *amber glass* atau *aluminum laminated*, penyimpanan pada 4°C, *Modified Atmosphere Packaging* (MAP) dengan N₂.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik pengolahan bit merah kapasitas 10.000 kg/batch, memproduksi konsentrat pigmen betalain untuk industri *dairy* dan *confectionery*.

**Parameter Input:**
- $M_{raw}$ = 10.000 kg bit merah
- $x_{pigmen}$ = 0,0008 (800 mg/kg berat basah, sesuai rentang Stoica et al. 2025)
- Metode.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
