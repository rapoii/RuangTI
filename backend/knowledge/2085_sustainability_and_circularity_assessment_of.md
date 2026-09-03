# 2085 — Penilaian Keberlanjutan dan Sirkularitas Rantai Pasok Energi Berbasis Biomassa: Integrasi Multi-Criteria Decision Making dan Life Cycle Thinking

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Sustainability and circularity assessment of biomass-based energy supply chain
**Jurnal & Sitasi Utama:** Thanh Quang Nguyen, Le Quyen Luu, Nicolás Martínez-Ramón (2024). *Heliyon*. DOI: [https://doi.org/10.1016/j.heliyon.2024.e38557](https://doi.org/10.1016/j.heliyon.2024.e38557)
**Sitasi Pendukung:** Sajad Amirian, Maghsoud Amiri, Mohammad Taghi Taghavifard (2022). *Complexity*. DOI: [https://doi.org/10.1155/2022/9415465](https://doi.org/10.1155/2022/9415465)

---

## 1. Pendahuluan dan Konteks Industri

Krisis iklim global yang dipicu oleh emisi gas rumah kaca (GRK) dari aktivitas sosio-ekonomi telah memaksa transformasi fundamental pada arsitektur rantai pasok energi dunia. Sektor energi bertanggung jawab atas sekitar 73% emisi GRK global, sementara cadangan bahan bakar fosil terus menurun dengan laju eksploitasi yang tidak berkelanjutan. Dalam konteks inilah biomassa—sebagai sumber energi terbarukan yang netral karbon secara siklik—muncul sebagai pilar strategis transisi energi. Namun, Nguyen, Luu, dan Martínez-Ramón (2024) dalam *Heliyon* (DOI: [10.1016/j.heliyon.2024.e38557](https://doi.org/10.1016/j.heliyon.2024.e38557)) menekankan bahwa adopsi biomassa tanpa kerangka penilaian yang rigor justru dapat menimbulkan paradoks lingkungan, berupa kompetisi dengan ketahanan pangan, deforestasi tidak langsung (iLUC), dan emisi tersembunyi sepanjang siklus hidup.

Urgensi operasional semakin nyata ketika industri dihadapkan pada keterbatasan sumber daya bumi dan meningkatnya tekanan regulasi, seperti EU Renewable Energy Directive (RED III), Carbon Border Adjustment Mechanism (CBAM), serta ISO 14040/14044 untuk Life Cycle Assessment (LCA). Bagi para insinyur industri, pertanyaannya bukan sekadar "biomassa mana yang dipakai", melainkan "rantai pasok biomassa mana yang memberikan kombinasi optimal antara kinerja keberlanjutan (sustainability) dan tingkat sirkularitas (circularity)". Amirian, Amiri, dan Taghavifard (2022) dalam *Complexity* (DOI: [10.1155/2022/9415465](https://doi.org/10.1155/2022/9415465)) menunjukkan melalui tinjauan sistematis terhadap 42 artikel bahwa paradigma *Sustainable and Reliable Supply Chain* (S&RSC) kini menjadi kerangka dominan dalam desain jaringan rantai pasok kontemporer, menggantikan pendekatan linear tradisional. Pergeseran ini memerlukan alat keputusan yang mampu mengintegrasikan dimensi lingkungan, ekonomi, sosial, dan keandalan secara simultan.

Tujuan utama modul ini adalah membangun modul pengetahuan yang membekali engineer dengan: (i) pemahaman metodologis integrasi *Life Cycle Thinking* (LCT) dengan Multi-Criteria Decision Making (MCDM), (ii) kemampuan membangun model kuantitatif untuk menilai alternatif rantai pasok biomassa, dan (iii) kapasitas interpretasi hasil guna mendukung keputusan investasi dan kebijakan energi yang berkelanjutan serta sirkular.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual Integrasi LCT–MCDM

Framework yang diusulkan Nguyen et al. (2024) beroperasi pada empat lapisan keputusan: (1) **goal & scope definition** berdasarkan ISO 14040, (2) **life cycle inventory** (LCI) yang menghimpun aliran massa-energi-emisi, (3) **life cycle impact assessment** (LCIA) yang menghasilkan *characterized* dan *normalized impact scores*, dan (4) **MCDM aggregation** yang mentranslasikan skor multi-dimensi menjadi indeks kelayakan tunggal (*sustainability-circularity index*).

### 2.2 Life Cycle Impact Assessment (LCIA)

Skor dampak lingkungan untuk kategori dampak $k$ dihitung menggunakan persamaan:

$$IS_k = \sum_{j=1}^{J} CF_{k,j} \cdot m_j$$

di mana $IS_k$ adalah *impact score* kategori $k$ (misalnya GWP dalam kg CO₂-eq), $CF_{k,j}$ adalah *characterization factor* zat $j$ terhadap kategori $k$, dan $m_j$ adalah massa emisi zat $j$. Untuk memungkinkan agregasi antar-kategori, skor dinormalisasi:

$$IN_k = \frac{IS_k}{NF_k}$$

dengan $NF_k$ adalah *normalization factor* (misalnya total emisi GWP EU-27 per kapita per tahun menurut metode ReCiPe 2016).

### 2.3 Material Circularity Indicator (MCI)

Circularity rantai pasok dikuantifikasi melalui indikator MCI (berbasis Ellen MacArthur Foundation / Granta Design):

$$LFI = \frac{V}{2M} + \frac{W_F}{2M}$$

$$MCI = 1 - LFI$$

dengan $V$ = massa material virgin yang masuk, $M$ = total massa material yang digunakan dalam produk/proses, dan $W_F$ = massa material yang berakhir di landfill. Nilai $MCI \in [0,1]$, di mana $1$ menunjukkan sirkularitas sempurna.

### 2.4 Pembobotan Kriteria dengan Analytic Hierarchy Process (AHP)

Bobot kriteria $w_j$ diturunkan dari *pairwise comparison matrix* $A = [a_{ij}]_{n \times n}$ dengan skala Saaty 1–9. Vektor bobot dihitung melalui *geometric mean method*:

$$\bar{w}_i = \left(\prod_{j=1}^{n} a_{ij}\right)^{1/n}, \quad w_i = \frac{\bar{w}_i}{\sum_{k=1}^{n} \bar{w}_k}$$

Konsistensi matriks diverifikasi melalui:

$$CI = \frac{\lambda_{\max} - n}{n - 1}, \quad CR = \frac{CI}{RI}$$

dengan $RI$ adalah *random index* (untuk $n=5$, $RI=1.12$). Threshold $CR < 0.10$ menandakan konsistensi acceptable.

### 2.5 Perangkingan dengan TOPSIS

Untuk $m$ alternatif dan $n$ kriteria, langkah TOPSIS adalah:

**Normalisasi vektor:**

$$r_{ij} = \frac{x_{ij}}{\sqrt{\sum_{i=1}^{m} x_{ij}^2}}$$

**Matriks terbobotkan:**

$$v_{ij} = w_j \cdot r_{ij}$$

**Solusi ideal positif dan negatif:**

$$A^+ = \{(max_i v_{ij} \mid j \in J_b), (min_i v_{ij} \mid j \in J_c)\}$$
$$A^- = \{(min_i v_{ij} \mid j \in J_b), (max_i v_{ij} \mid j \in J_c)\}$$

dengan $J_b$ = kriteria *benefit*, $J_c$ = kriteria *cost*.

**Jarak Euclidean:**

$$D_i^+ = \sqrt{\sum_{j=1}^{n}(v_{ij} - v_j^+)^2}, \quad D_i^- = \sqrt{\sum_{j=1}^{n}(v_{ij} - v_j^-)^2}$$

**Indeks kedekatan relatif (*closeness coefficient*):**

$$C_i = \frac{D_i^-}{D_i^+ + D_i^-}, \quad 0 \leq C_i \leq 1$$

Alternatif dengan $C_i$ tertinggi merupakan pilihan optimal.

### 2.6 Sustainability-Circularity Composite Index (SCCI)

Indeks komposit yang diusulkan Nguyen et al. (2024):

$$SCCI_i = \alpha \cdot S_i + \beta \cdot Circ_i$$

dengan $S_i$ = skor keberlanjutan ternormalisasi, $Circ_i$ = skor sirkularitas, $\alpha + \beta = 1$, dan $\alpha, \beta$ merefleksikan preferensi pembuat kebijakan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis framework LCT–MCDM untuk penilaian rantai pasok biomassa mengikuti *Standard Operating Procedure* (SOP) delapan tahap yang selaras dengan ISO 14040/14044 dan best practice Amirian et al. (2022):

**Tahap 1 — Definisi Tujuan & Cakupan.** Rekayasa tujuan fungsional (*functional unit*), misalnya "menyediakan 1 GJ energi primer biomassa", batas sistem (*cradle-to-gate* atau *cradle-to-grave*), serta prinsip alokasi untuk multi-output.

**Tahap 2 — Pemetaan Rantai Pasok.** Identifikasi aktor: supplier biomassa (petani, limbah pertanian, limbah kota), fasilitas pretreatment/konversi (pabrik bioetanol, reaktor biogas, *fast pyrolysis*), distribusi (logistik curah/pipa), dan titik konsumsi (pembangkit listrik, industri, rumah tangga).

**Tahap 3 — Inventarisasi Siklus Hidup (LCI).** Pengumpulan data kuantitatif: konsumsi energi (MJ/MJ output), air (m³/GJ), lahan (ha·yr/GJ), emisi (kg CO₂-eq/GJ, kg SO₂-eq/GJ, kg PO₄³⁻-eq/GJ), dan aliran material siklik (kg/GJ).

**Tahap 4 — Penilaian Dampak (LCIA).** Penerjemahan LCI menjadi kategori dampak menggunakan *characterization factor* metode ReCiPe 2016.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
