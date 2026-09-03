# 0250 — Optimasi Ekstraksi Minyak Biji Lobak (Turnip Seed Oil) dengan Karbondioksida Superkritis: Pendekatan Proses, Pemodelan Aliran Aksisimetrik, dan Rekayasa Kualitas Produk

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Supercritical CO2 extraction of turnip seed oil: Optimizing the process for enhanced oil yield, chemical composition, and volatile compounds
**Jurnal & Sitasi Utama:** Li Yue, Tingting Zhang, Jiamin Wang (2026). *LWT*. DOI: [https://doi.org/10.1016/j.lwt.2026.119472](https://doi.org/10.1016/j.lwt.2026.119472)
**Sitasi Pendukung:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nabati global sedang mengalami transformasi teknologi yang signifikan, didorong oleh meningkatnya permintaan konsumen terhadap produk alami yang minim residu pelarut, berkualitas pangan/farmasi, dan berkelanjutan secara lingkungan. Minyak biji lobak (*Brassica rapa* subsp. *rapa*) merupakan salah satu sumber trigliserida minor yang bernilai strategis karena profil asam lemaknya didominasi oleh asam erukat, oleat, linoleat, dan linolenat, serta mengandung tokoferol dan fitosterol yang relevan untuk aplikasi nutrasetika dan kosmetik. Li, Zhang, dan Wang (2026) dalam publikasi mereka di jurnal *LWT* menyoroti bahwa ekstraksi minyak biji lobak dengan metode konvensional (pres mekanis dan pelarut organik *n*-heksana) menghadapi tiga masalah operasional utama: (i) rendemen yang fluktuatif akibat variabilitas kadar air bahan baku, (ii) degradasi termal senyawa volatil pada suhu tinggi, dan (iii) keberadaan residu pelarut yang menghambat sertifikasi pangan bersih. Untuk menjawab keterbatasan tersebut, teknologi *Supercritical Fluid Extraction* dengan CO₂ (SC-CO₂) muncul sebagai alternatif menjanjikan karena sifat CO₂ yang inert, toksisitas rendah, dan kemampuan tuneability melalui parameter tekanan serta suhu (Yue *et al.*, 2026).

Dari perspektif rantai pasok, optimalisasi proses SC-CO₂ menjadi krusial karena biaya operasional didominasi oleh konsumsi CO₂, energi kompresi, dan waktu siklus ekstraktor. Studi Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menunjukkan bahwa fenomena hidrodinamika dalam vessel extractor—khususnya profil aliran aksisimetrik CO₂ di atas matriks padat biji—berpengaruh langsung terhadap laju perpindahan massa dan keseragaman hasil. Integrasi kedua perspektif, yaitu optimasi proses dan pemodelan aliran, menjadi kebutuhan rekayasa industri kontemporer untuk menjawab pertanyaan manajerial tentang *trade-off* antara yield, kualitas volatil, dan throughput produksi. Oleh karena itu, modul ini memadukan kerangka optimasi respon (Response Surface Methodology/Box-Behnken) dari Yue *et al.* (2026) dengan model aliran aksisimetrik dari Obchoei & Limtrakarn (2024) guna memberikan landasan rekayasa yang holistik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Yield Ekstraksi

Yield minyak nabati didefinisikan sebagai rasio massa minyak terekstrak terhadap massa umpan kering, dinyatakan sebagai:

$$Y(\%) = \frac{m_{oil}}{m_{feed,\,db}} \times 100 \tag{1}$$

dengan $m_{oil}$ adalah massa minyak yang dikoleksi (g) dan $m_{feed,\,db}$ adalah massa umpan pada basis kering (g). Parameter ini menjadi fungsi multivariabel terhadap tekanan ($P$, bar), suhu ($T$, °C), laju alir CO₂ ($Q$, L/min), dan waktu ekstraksi ($t$, min).

### 2.2 Model Perpindahan Massa Dua-Fase Sovová (1994)

Model klasik yang banyak diadopsi dalam studi SC-CO₂ adalah model *broken and intact cells* dari Sovová. Konsentrasi solute dalam fase fluida dan padat masing-masing diekspresikan sebagai:

$$\frac{\partial C}{\partial t} = -u \frac{\partial C}{\partial z} + k_f a (C^* - C) \tag{2}$$

$$\frac{\partial q}{\partial t} = k_s a_s (q_0 - q) \tag{3}$$

dengan $C$ adalah konsentrasi solute dalam fasa superkritis (kg/m³), $C^*$ konsentrasi keseimbangan, $q$ konsentrasi solute dalam matriks padat (kg/kg), $q_0$ konsentrasi awal, $u$ kecepatan superfisial CO₂, $k_f$ koefisien transfer massa eksternal, $k_s$ koefisien transfer massa internal, serta $a$ dan $a_s$ adalah luas spesifik interfasial.

### 2.3 Persamaan Navier–Stokes Aksisimetrik

Pemodelan hidrodinamika dalam vessel dilakukan oleh Obchoei & Limtrakarn (2024) dengan menyederhanakan geometri sebagai silinder aksisimetrik. Persamaan kontinuitas dan momentum dalam koordinat silinder $(r,z)$ adalah:

$$\frac{1}{r}\frac{\partial (r u_r)}{\partial r} + \frac{\partial u_z}{\partial z} = 0 \tag{4}$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g \tag{5}$$

dengan $\rho$ densitas CO₂ superkritis, $\mu$ viskositas dinamis, dan $p$ tekanan lokal. Pengaruh kecepatan radial $u_r$ pada dispersi aksial menentukan pola *channeling* yang menurunkan efisiensi ekstraksi.

### 2.4 Optimasi Respon Permukaan (RSM)

Hubungan antara variabel proses dan yield dimodelkan dengan polinomial orde dua:

$$Y = \beta_0 + \sum_{i=1}^{k}\beta_i X_i + \sum_{i=1}^{k}\beta_{ii} X_i^2 + \sum_{i<j}\beta_{ij} X_i X_j + \varepsilon \tag{6}$$

Koefisien $\beta$ diestimasi dengan *least-squares*, dan signifikansi dievaluasi melalui ANOVA dengan $p$-value $<0{,}05$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti kerangka sistematis sebagai berikut:

**Tahap 1 — Preparasi Bahan Baku.** Biji lobak dikeringkan hingga kadar air $\le 8\%$ (basis basah), digiling, dan diayak pada fraksi 0,25–0,80 mm. Yue *et al.* (2026) menekankan bahwa distribusi ukuran partikel sangat memengaruhi laju perpindahan massa internal karena difusivitas efektif sebanding dengan kuadrat jari-jari pori menurut hukum Fick.

**Tahap 2 — Pemuatan Ekstraktor.** Vessel diisi dengan biomassa secara bertingkat dengan *fritted disk* di dasar; kepadatan bed divariasikan 0,45–0,55 g/cm³ untuk menghindari kompaksi berlebih yang meningkatkan *pressure drop*.

**Tahap 3 — Stabilisasi Termodinamika.** Sistem dinaikkan tekanannya secara gradual (ramp $\le 50$ bar/menit) hingga set-point dengan katup ekspansi tertutup untuk mencegah *thermal shock* pada fluid.

**Tahap 4 — Ekstraksi Dinamis.** CO₂ dipompakan dengan laju konstan; separator dikondisikan pada 40–60 bar dan 25–35 °C untuk memisahkan CO₂ dari ekstrak. Rasio solvent-to-feed ($S/F$) dijaga pada 30–60 untuk memastikan kurva breakthrough teramati penuh.

**Tahap 5 — Akuisisi Data & Pengendalian Kualitas.** Sampel diambil pada interval waktu terdefinisi; yield, profil asam lemak (GC-FID), dan senyawa volatil (GC-MS) dianalisis. Diagram alir proses mengikuti pola satu-ekstraktor dua-separator (*off-line*回收 CO₂ $\ge 95\%$).

**Tahap 6 — Pemodelan dan Optimasi.** Data eksperimen dimasukkan ke persamaan (6) untuk memperoleh kondisi optimum yang divalidasi melalui *confirmation run* triplo.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan suatu unit SC-CO₂ kapasitas 5 L akan mengolah biji lobak sebanyak $m_{feed,db}=250$ g pada kondisi optimum yang dilaporkan Yue *et al.* (2026): $P=350$ bar, $T=45$ °C, $Q=2{,}5$ L/min. Pada kondisi tersebut, densitas CO₂ $\rho_{CO_2}\approx 871$ kg/m³ dan viskositas $\mu\approx 8{,}6\times 10^{-5}$ Pa·s. Dengan diameter vessel $D=10$ cm, luas penampang $A=\pi D^2/4 \approx 78{,}54$ cm², kecepatan superfisial:

$$u = \frac{Q}{A} = \frac{2{,}5\times 10^{-3}\,\text{m}^3/\text{min}}{78{,}54\times 10^{-4}\,\text{m}^2} \approx 0{,}318\,\text{m/min} \approx 0{,}0053\,\text{m/s}$$

Dari model persamaan (2) dan (3), dengan asumsi $k_f a = 0{,}08\,\text{s}^{-1}$, $C^* \approx 8{,}5\,\text{kg/m}^3$, dan $k_s a_s = 0{,}012\,\text{s}^{-1}$, yield ekuilibrium diprediksi:

$$Y_{eq} = \frac{q_0 \cdot m_{feed,\,db}\left(1-e^{-k_s a_s t}\right)}{m_{feed,\,db}} \times 100 \approx 28{,}4\%\quad\text{(pada }t=90\,\text{menit)}$$

**Optimasi multivariat.** Dengan Box-Behnken 17-run, koefisien signifikan yang diperoleh Yue *et al.* (2026) menghasilkan persamaan:

$$\hat{Y}=32{,}1+2{,}4X_1-1{,}1X_2+1{,}8X_3-1{,}6X_1^2-2{,}3X_2^2-1{,}9X_3^2+1{,}3X_1X_2$$

dengan $X_1$, $X_2$, $X_3$ berturut.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
