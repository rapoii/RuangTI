# 1452 — Optimisasi dan Validasi Metode Ekstraksi Multiresidu Farmasi dalam Matriks Tanah, Selada, dan Cacing Tanah untuk Pemantauan Risiko Lingkungan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Optimization and validation of multiresidual extraction methods for pharmaceuticals in Soil, Lettuce, and Earthworms
**Jurnal & Sitasi Utama:** Ludmila Mravcová, Anna Amrichová, Jitka Navrkalová (2024). *Environmental Science and Pollution Research*. DOI: [https://doi.org/10.1007/s11356-024-33492-7](https://doi.org/10.1007/s11356-024-33492-7)
**Sitasi Pendukung:** Philip Wiredu Addo, Nichole Taylor, Sarah MacPherson (2022). *Journal of Applied Research on Medicinal and Aromatic Plants*. DOI: [https://doi.org/10.1016/j.jarmap.2022.100436](https://doi.org/10.1016/j.jarmap.2022.100436)

---

## 1. Pendahuluan dan Konteks Industri

Keberadaan senyawa farmasi aktif (Pharmaceutical Active Compounds/PhACs) di lingkungan telah menjadi perhatian serius komunitas ilmiah dan regulatori global sejak dua dekade terakhir. Senyawa-senyawa ini—meliputi antibiotik, analgesik, antidepresan, antikonvulsan, dan berbagai kelas terapetik lainnya—masuk ke dalam ekosistem melalui jalur pembuangan limbah domestik, effluent industri farmasi, praktik veteriner, serta aplikasi pupuk organik dari biosolid yang terkontaminasi. Mravcová et al. (2024) dalam publikasi mereka di *Environmental Science and Pollution Research* (DOI: [10.1007/s11356-024-33492-7](https://doi.org/10.1007/s11356-024-33492-7)) menegaskan bahwa penilaian risiko komprehensif terhadap PhACs membutuhkan metode analitis multiresidu yang robust untuk menentukan spektrum luas senyawa farmasi pada berbagai kompartemen lingkungan, khususnya tanah, tanaman pangan (selada/*Lactuca sativa*), dan organisme tanah (cacing tanah/*Eisenia fetida*).

Konteks industri dari permasalahan ini sangat strategis. Di Uni Eropa saja, konsumsi harian PhACs mencapai beberapa ton per juta penduduk, dengan estimasi 50–90% dari dosis yang dikonsumsi diekskresikan dalam bentuk aktif atau metabolit yang stabil secara lingkungan. Tanah pertanian menjadi reservoir akumulatif karena praktik irigasi dengan air limbah termuknisasi (*water reuse*) serta aplikasi biosolid dari instalasi pengolahan air limbah. Selada, sebagai sayuran daun dengan luas permukaan tinggi dan sistem perakaran dangkal, memiliki kapasitas akumulasi PhACs yang signifikan, sementara cacing tanah berperan sebagai bioindikator standar karena posisinya dalam jaring makanan tanah dan kemampuannya mengakumulasi kontaminan melalui kontak dermal dan ingesti. Addo et al. (2022) dalam studi pendukungnya (DOI: [10.1016/j.jarmap.2022.100436](https://doi.org/10.1016/j.jarmap.2022.100436)) turut menguatkan pentingnya metodologi rekayasa proses yang terstandarisasi dengan presisi kuantitatif tinggi—meskipun dalam konteks berbeda (pengeringan hop), prinsip-prinsip kinetika dan validasi metode yang mereka terapkan (model Page, koefisien difusi efektif, parameter statistik R², SSE, RMSE) menunjukkan relevansi langsung untuk standardisasi prosedur analitik multiresidu.

Urgensi operasional dari paper Mravcová et al. (2024) terletak pada dua hal fundamental. Pertama, hingga publikasi tersebut, terjadi *literature gap* yang nyata terkait metode ekstraksi tervalidasi untuk PhACs dalam jaringan cacing tanah dan selada—dua matriks yang secara metabolomik dan matrikomik sangat berbeda dengan tanah. Kedua, regulatori Eropa melalui *Watch List* dalam European Water Framework Directive terus menambahkan PhACs baru yang memerlukan metode deteksi sensitif pada level ng·g⁻¹. Oleh karena itu, pengembangan satu metode LC-MS/MS tunggal yang mampu mengkuantifikasi 40+ PhACs pada tiga matriks berbeda sekaligus merupakan kontribusi rekayasa analitis bernilai tinggi bagi industri monitoring lingkungan, laboratorium kontrak, dan departemen Quality Assurance (QA) pabrik farmasi yang perlu memantau emisi lingkungan dari proses produksi mereka.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Validasi Metode Analitis Multiresidu

Validasi metode ekstraksi multiresidu mengikuti protokol ICH Q2(R1), SANTE/11312/2021, dan ISO 17025, yang memerlukan evaluasi parameter: selektivitas, linearitas, akurasi (recovery), presisi (RSD), limit deteksi (LOD), limit kuantifikasi (LOQ), dan efek matriks. Persamaan dasar untuk parameter-parameter ini adalah:

**Recovery (R):**
$$R_i \,(\%) = \frac{C_{terukur,i} - C_{background,i}}{C_{spiked,i}} \times 100\%$$

di mana $C_{terukur,i}$ adalah konsentrasi analit $i$ yang terukur, $C_{background,i}$ konsentrasi background pada sampel blanko, dan $C_{spiked,i}$ konsentrasi analit yang di-spike. Mravcová et al. (2024) menargetkan rentang recovery 70–120% dengan RSD ≤20% sesuai panduan SANTE.

**Efek Matriks (ME):**
$$ME_i \,(\%) = \left(\frac{A_{ekstrak,spiked}}{A_{standar,solven}} - 1\right) \times 100\%$$

Nilai $|ME_i| < 20\%$ mengindikasikan efek matriks dapat diabaikan; jika melebihi, diperlukan koreksi melalui standard addition atau matrix-matched calibration.

**Linearitas & Koefisien Determinasi:**
Linearitas dievaluasi melalui regresi kuadrat terkecil:
$$y = \beta_0 + \beta_1 x + \varepsilon$$
dengan parameter kualitas $R^2 \geq 0.99$ yang harus dipenuhi untuk seluruh analit dalam rentang kerja.

### 2.2 Kinetika Ekstraksi Ultrasonik Multi-Tahap

Untuk ekstraksi tanah, Mravcová et al. (2024) menggunakan metode ekstraksi ultrasonik empat tahap dengan variasi kondisi. Dari perspektif Teknik Kimia, kinetika ekstraksi padat-cair mengikuti model fenolik diffusion-limited:

$$\frac{dC_t}{dt} = k_{ext} \cdot A_s \cdot (C_{saturated} - C_t)$$

Solusi analitik untuk kondisi batch multi-tahap adalah:

$$C_t^{(n)} = C_{saturated} \left[1 - \exp\left(-\sum_{j=1}^{n} k_{ext,j} \cdot \tau_j\right)\right]$$

di mana $C_t^{(n)}$ adalah konsentrasi kumulatif setelah $n$ tahap ekstraksi, $k_{ext,j}$ konstanta laju ekstraksi tahap ke-$j$, dan $\tau_j$ durasi ultrasonikasi tahap tersebut. Parameter $k_{ext}$ dipengaruhi oleh amplitudo ultrasonik, suhu, rasio pelarut-sampel, dan komposisi pelarut (umumnya campuran asetonitril/air/asam format).

### 2.3 Model Disipasi Pengeringan sebagai Acuan Metodologis

Meskipun fokus utama adalah ekstraksi farmasi, Addo et al. (2022) menyediakan kerangka matematis kinetika yang relevan untuk standarisasi prosedur preparasi sampel. Dua model utama yang mereka validasi adalah:

**Model Page:**
$$MR(t) = \exp(-k \cdot t^n)$$

**Model Logaritmik:**
$$MR(t) = a \cdot \exp(-k \cdot t) + c$$

di mana Moisture Ratio $MR = (M(t) - M_e)/(M_0 - M_e)$, dengan $M(t)$ kadar air pada waktu $t$, $M_e$ kadar air kesetimbangan, $M_0$ kadar air awal, dan $k$, $n$, $a$, $c$ adalah parameter empiris. Addo et al. (2022) melaporkan nilai $R^2 = 0{,}999$–$0{,}982$, SSE = $0{,}035$–$0{,}001$, dan RMSE = $0{,}058$–$0{,}004$.

Koefisien difusi efektif ($D_{eff}$) untuk geometri slab dihitung dari hukum Fick kedua dengan pendekatan Crank:

$$\ln(MR) = \ln\left(\frac{8}{\pi^2}\right) - \frac{\pi^2 \cdot D_{eff} \cdot t}{4 L^2}$$

sehingga:

$$D_{eff} = -\frac{4L^2}{\pi^2 t} \ln\left(\frac{\pi^2}{8} MR\right)$$

Addo et al. (2022) melaporkan $D_{eff}$ untuk hop berada pada rentang $5{,}91 \times 10^{-10}$ m²·s⁻¹ hingga $2{,}43 \times 10^{-7}$ m²·s⁻¹, bervariasi dengan suhu pengeringan (35–65 °C) dan daya microwave (0–200 W). Prinsip difusi ini secara langsung menganalogikan proses desorpsi analit dari matriks padat ke fasa pelarut dalam ekstraksi ultrasonik.

### 2.4 Solid Phase Extraction (SPE) dan QuEChERS

Untuk *clean-up*, Mravcová et.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
