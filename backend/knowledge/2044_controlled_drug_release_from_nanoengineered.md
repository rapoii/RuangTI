# 2044 — Rekayasa Sistem Pelepasan Terkontrol dari Polisakarida Nanoengineered dan Integrasi Prinsip Food Engineering dalam Rantai Pasok Bio-Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Controlled Drug Release from Nanoengineered Polysaccharides
**Jurnal & Sitasi Utama:** Ilker S. Bayer (2023). *Pharmaceutics*. DOI: [https://doi.org/10.3390/pharmaceutics15051364](https://doi.org/10.3390/pharmaceutics15051364)
**Sitasi Pendukung:** Sin-Young Park, Hack-Youn Kim (2022). *Food Chemistry X*. DOI: [https://doi.org/10.1016/j.fochx.2022.100216](https://doi.org/10.1016/j.fochx.2022.100216)

---

## 1. Pendahuluan dan Konteks Industri

Industri farmasi global menghadapi tantangan krusial dalam merancang sistem penghantaran obat (*drug delivery system*) yang presisi, efisien, dan biokompatibel. Bayer (2023) dalam *Pharmaceutics* menekankan bahwa polisakarida — sebagai makromolekul kompleks yang berasal dari sumber nabati, hewani, maupun mikrobial — muncul sebagai material strategis berkat sifat *biocompatibility* dan *biodegradability* yang melekat secara intrinsik (Bayer, 2023, DOI: 10.3390/pharmaceutics15051364). Dalam konteks Teknik Industri, fenomena ini bukan sekadar isu laboratorium, melainkan problem optimasi proses berskala produksi yang memerlukan pemodelan kuantitatif terhadap kinetika pelepasan obat (*drug release kinetics*), perencanaan kapasitas produksi nanopartikel, hingga standardisasi quality control (QC) berbasis *Good Manufacturing Practice* (GMP).

Urgensi ekonomi dari sistem pelepasan terkontrol sangat signifikan. Menurut Bayer (2023), model pelepasan yang efektif mampu memprediksi perilaku matriks nano-polisakarida secara akurat sehingga mengurangi eksperimentasi *trial-and-error* yang mahal dan memperpendek *time-to-market* produk farmasi. Bayangkan implikasi finansialnya: sebuah perusahaan farmasi besar dapat menghemat hingga 30–40% biaya R&D formulasi dengan adopsi model matematis yang valid. Lebih lanjut, kemampuan mengontrol profil pelepasan obat memungkinkan diferensiasi produk (*product differentiation*) melalui mekanisme *sustained*, *controlled*, atau *targeted release*, yang merupakan *value proposition* premium di pasar farmasi modern.

Pada tataran operasional, integrasi pendekatan ini dengan sektor food engineering yang didokumentasikan oleh Park & Kim (2022, DOI: 10.1016/j.fochx.2022.100216) tentang suplementasi *lyophilized chive* pada *frying batter mixture* mengilustrasikan satu benang merah konseptual: **kontrol kualitas proses berbasis prinsip rekayasa matriks**. Dalam paper tersebut, viskositas *batter*, *coating pickup*, *frying yield*, serta profil sensorik berubah secara proporsional terhadap konsentrasi chive (Park & Kim, 2022). Analoginya dalam industri farmasi nano-polisakarida adalah bagaimana komposisi dan struktur matriks menentukan profil pelepasan zat aktif. Keduanya memerlukan metodologi Quality by Design (QbD) yang serupa.

Konteks regulasi dan standarisasi juga tidak kalah penting. Implementasi nanopartikel polisakarida dalam formulasi farmasi harus memenuhi pedoman FDA, EMA, dan BPOM terkait karakterisasi partikel, profil pelepasan in vitro/in vivo, serta stabilitas jangka panjang. Dari perspektif *Industrial Engineering*, hal ini berarti kebutuhan akan sistem traceability yang kuat, proses batch yang terdokumentasi dengan baik (*batch records*), dan kapasitas produksi fleksibel yang mampu mengakomodasi berbagai skala — dari *lab-scale* (gram) hingga *commercial-scale* (kilogram). Bayer (2023) menyoroti bahwa tanpa model kinetika yang terkalibrasi, proses validasi menjadi bottleneck yang menghambat komersialisasi. Dengan demikian, modul ini membahas bagaimana kerangka pemodelan matematis dan prosedur rekayasa industri dapat diterapkan secara sinergis untuk menjawab tantangan tersebut.

## 2. Landasan Teori & Formulasi Matematis

Landasan teori utama untuk sistem pelepasan obat dari matriks nano-polisakarida adalah sekumpulan model kinetika yang telah teruji secara empiris. Bayer (2023) menekankan bahwa pemilihan model yang tepat bergantung pada mekanisme pelepasan dominan: *diffusion-controlled*, *swelling-controlled*, *erosion-controlled*, atau kombinasi keduanya. Berikut adalah formulasi matematis esensial.

### 2.1 Model Kinetika Pelepasan Obat

**Model Orde-Nol (*Zero-Order Kinetics*):**
Pelepasan konstan tanpa bergantung pada konsentrasi:

$$Q_t = Q_0 + k_0 \cdot t$$

di mana $Q_t$ adalah jumlah obat yang dilepas pada waktu $t$, $Q_0$ adalah dosis awal, dan $k_0$ adalah konstanta laju orde-nol.

**Model Orde-Satu (*First-Order Kinetics*):**

$$\frac{dQ_t}{dt} = -k_1 \cdot Q_t \implies Q_t = Q_\infty (1 - e^{-k_1 t})$$

di mana $Q_\infty$ adalah dosis total yang dilepas dan $k_1$ adalah konstanta laju orde-satu.

**Model Higuchi (1961):**
Untuk sistem matriks dengan difusi Fickian:

$$Q_t = k_H \cdot \sqrt{t}$$

dengan $k_H = \sqrt{D \cdot (2C_s - C_s) \cdot C_s}$ untuk slab planar, di mana $D$ adalah koefisien difusi dan $C_s$ adalah kelarutan jenuh obat dalam matriks.

**Model Korsmeyer-Peppas (1983):**
Model empiris semi-empiris paling relevan untuk polimer swelling:

$$\frac{M_t}{M_\infty} = k_{KP} \cdot t^n$$

di mana $M_t / M_\infty$ adalah fraksi obat yang dilepas, $k_{KP}$ adalah konstanta kinematik, dan $n$ adalah eksponen difusi yang mengindikasikan mekanisme pelepasan (nilai $n = 0.5$ → difusi Fickian, $0.5 < n < 1.0$ → *anomalous transport*, $n = 1.0$ → *Case-II transport*, $n > 1.0$ → *Super Case-II*). Untuk geometri *nanoparticle* (spherical), kriteria $n$ bergeser sedikit.

**Model Peppas-Sahlin (1989):**
Membedakan kontribusi difusi Fickian dan *relaxation-controlled*:

$$\frac{M_t}{M_\infty} = k_1 \cdot t^m + k_2 \cdot t^{2m}$$

di mana $k_1$ adalah konstanta difusi Fickian dan $k_2$ adalah konstanta relaksasi matriks.

**Model Hixson-Crowell (1931):**
Untuk mekanisme erosi permukaan:

$$W_0^{1/3} - W_t^{1/3} = \kappa \cdot t$$

di mana $W_0$ dan $W_t$ adalah volume/konsentrasi awal dan pada waktu $t$, $\kappa$ adalah konstanta erosi.

### 2.2 Prinsip Food Engineering Pendukung

Park & Kim (2022) menggunakan parameter kuantitatif berikut yang paralel dengan pendekatan Quality by Design dalam farmasi:

**Coating Pickup (CP):**

$$CP(\%) = \frac{W_{coated} - W_{uncoated}}{W_{uncoated}} \times 100\%$$

**Frying Yield (FY):**

$$FY(\%) = \frac{W_{fried}}{W_{uncoated}} \times 100\%$$

**Viskositas *Batter* (Brookfield):**

$$\tau = \eta \cdot \dot{\gamma}$$

di mana $\tau$ adalah *shear stress*, $\eta$ adalah viskositas dinamik, dan $\dot{\gamma}$ adalah *shear rate*. Hubungan viskositas dengan konsentrasi chive $C_{chive}$ dapat dimodelkan dengan persamaan power-law:

$$\eta = K \cdot \dot{\gamma}^{n-1}$$

dengan $K$ adalah *consistency index* dan $n$ adalah *flow behavior index*. Park & Kim (2022) menemukan bahwa viskositas, *crispness*, kandungan lemak dan abu, serta kalori secara langsung proporsional terhadap $C_{chive}$, sedangkan lightness ($L^*$), redness ($a^*$), yellowness ($b^*$), dan pH bersifat invers proporsional.

### 2.3 Analisis Multivariat (PCA)

Principal Component Analysis yang digunakan Park & Kim (2022) untuk membedakan profil aroma antar formulasi juga relevan dalam farmasi untuk membedakan profil pelepasan antar batch:

$$X = T \cdot P^T + E$$

di mana $X$ adalah matriks data terstandarisasi, $T$ adalah *score matrix*, $P$ adalah *loading matrix*, dan $E$ adalah *residual matrix*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Proses Produksi Nanopartikel Polisakarida

Bayer (2023) mengidentifikasi tahapan utama sebagai berikut:

**Tahap 1: Seleksi dan Preparasi Polisakarida**
Polisakarida (misalnya *chitosan*, *alginate*, *hyaluronic acid*, *dextran*, *pullulan*) dimurnikan dan dimodifikasi secara kimia (karboksimetilasi, sulfonasi, grafting) untuk menyesuaikan sifat mekanik dan degradasi.

**Tahap 2: Formulasi Nanopartikel**
Metode yang digunakan antara lain:
- *Ionic gelation* (untuk alginate/kitosan dengan tripolifosfat)
- *Emulsification-solvent evaporation*
- *Self-assembly* berbasis hidrofobisitas
- *Electrospraying/electrospinning*

Diagram alir proses (*process flow diagram*) mengikuti prinsip:

```
Seleksi Polisakarida → Modifikasi Kimia → Pembuatan Larutan
    → Pencampuran dengan Drug → Formulasi Nano → Karakterisasi
    → Validasi Pelepasan In Vitro → Scale-up Produksi → QC & Release
```

**Tahap 3: Karakterisasi Partikel**
- Dynamic Light Scattering (DLS) untuk ukuran partikel ($d_{50}$, PDI)
- Zeta Potential ($\zeta$) untuk stabilitas koloid
- SEM/TEM untuk morfologi
- FTIR/XRD untuk konformasi kristalin

**Tahap 4: Uji Pelepasan In Vitro**
Uji dissolution USP Apparatus II (paddle) pada 37°C dalam medium buffer (pH 7.4 / pH 1.2 untuk simulasi gastrointestinal), pengukuran kuantitatif dengan UV-Vis atau HPLC pada interval waktu yang telah ditentukan (0, 0.25, 0.5, 1, 2, 4, 6, 8, 12, 24 jam).

**Tahap 5: Fitting Model dan Optimasi**
Data pelepasan di-*fit* ke model kinetika menggunakan regresi non-linear (misalnya Levenberg-Marquardt) dan dievaluasi dengan koefisien determinasi $R^2$ dan AIC (Akaike Information Criterion).

### 3.2 SOP Pengujian Kinetika Pelepasan

SOP harus mencakup: (a) persiapan media dissolution, (b) kalibrasi alat, (c) prosedur sampling dengan *replacement* media, (d) analisa data dengan persamaan Korsmeyer-Peppas untuk menentukan mekanisme pelepasan, (e) kriteria penerimaan (acceptance criteria) berupa $R^2 \geq 0.95$ dan reprodusibilitas antar-batch dengan RSD $\leq 5\%$.

### 3.3 Integrasi Prinsip Food Engineering sebagai Benchmark

Analog dengan Park & Kim (2022) yang menggunakan viskositas *batter* sebagai kontrol kualitas, industri farmasi menggunakan parameter reologi suspensi nanopartikel (viskositas, *thixotropy*, *yield stress*) sebagai *Critical Quality Attribute* (CQA) yang berkorelasi langsung dengan kinerja pelepasan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus 1: Formulasi Nanopartikel Kitosan-Ibuprofen

Sebuah perusahaan farmasi memproduksi nanopartikel kitosan-TPP (*sodium tripolyphosphate*) untuk delivery ibuprofen. Data karakterisasi awal:
- Diameter rata-rata partikel: $d = 250$ nm
- PDI = 0.18
- Zeta potential: $\zeta = +32$ mV
- Loading capacity: $LC = 18.5\%$
- Encapsulation efficiency: $EE = 82.4\%$

**Data pelepasan in vitro (USP Apparatus II, pH 7.4, 37°C):**

| Waktu $t$ (jam) | % Terlepas $M_t/M_\infty$ |
|:---:|:---:|
| 0.25 |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
