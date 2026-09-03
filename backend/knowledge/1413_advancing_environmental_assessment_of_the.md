# 1413 — Penilaian Lingkungan Lanjutan untuk Ekonomi Sirkular: Tantangan Metodologis pada Level Meso–Makro dan Integrasi Prediksi Neural Network pada Rantai Agri-Food

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Advancing environmental assessment of the circular economy: Challenges and opportunities
**Jurnal & Sitasi Utama:** Dwarakanath Ravikumar, Gregory A. Keoleian, Julien Walzberg (2024). *Resources Conservation & Recycling Advances*. DOI: [https://doi.org/10.1016/j.rcradv.2024.200203](https://doi.org/10.1016/j.rcradv.2024.200203)
**Sitasi Pendukung:** E. G. Muñoz-Grillo, Neyfe Sablón Cossío, Sebastiana del Monserrate Ruíz Cedeño (2024). *International Journal of Industrial Engineering and Management*. DOI: [https://doi.org/10.24867/ijiem-2024-1-347](https://doi.org/10.24867/ijiem-2024-1-347)

---

## 1. Pendahuluan dan Konteks Industri

Krisis lingkungan global yang ditandai dengan peningkatan konsentrasi gas rumah kaca, degradasi lahan pertanian, dan kelangkaan air tawar telah menempatkan konsep *circular economy* (CE) atau ekonomi sirkular sebagai salah satu pilar transformasi industri abad ke-21. Ravikumar, Keoleian, dan Walzberg (2024) dalam artikel seminal mereka di *Resources Conservation & Recycling Advances* ([DOI: 10.1016/j.rcradv.2024.200203](https://doi.org/10.1016/j.rcradv.2024.200203)) menekankan bahwa meskipun kerangka *Life Cycle Assessment* (LCA) telah menjadi standar de-facto untuk mengevaluasi kinerja lingkungan sistem produk, penerapannya secara dominan masih terbatas pada *micro-level* — yaitu analisis terhadap satu produk atau satu lini produksi tunggal. Padahal, implementasi ekonomi sirkular dalam praktik industri nyata hampir selalu terjadi pada dua level agregasi yang lebih luas: **meso-level** (pada klaster industri seperti *eco-industrial parks*) dan **macro-level** (pada skala kota, provinsi, atau nasional). Artikel tersebut secara eksplisit mengidentifikasi **enam tantangan metodologis** yang belum terjawab dalam literatur LCA-CE: (1) pemilihan batas sistem (*system boundary*) dan unit fungsional yang relevan, (2) kelangkaan data dan ketidakpastian, (3) akomodasi perilaku pemangku kepentingan, (4) penilaian *trade-off* dari penggunaan energi terbarukan, (5) perhitungan evolusi manufaktur dan teknologi, serta (6) kuantifikasi *displacement* dan *rebound effect*.

Dalam konteks aplikasi industri, Muñoz-Grillo, Sablón Cossío, dan Ruíz Cedeño (2024) di *International Journal of Industrial Engineering and Management* ([DOI: 10.24867/ijiem-2024-1-347](https://doi.org/10.24867/ijiem-2024-1-347)) melengkapi perspektif ini dengan menunjukkan bahwa keputusan strategis terkait tingkat implementasi CE — misalnya pada rantai agri-food yang sangat kompleks dan rentan terhadap variabilitas musiman — dapat diprediksi secara empiris melalui arsitektur *neural network* (NN). Penelitian mereka melatih NN dengan 128 data historis dari dua rantai agri-food dan memperoleh korelasi signifikan antara prediksi NN dengan bobot variabel CE yang heterogen. Sinergi antara kerangka LCA pada level meso/makro dan prediksi berbasis NN menjadi sangat relevan bagi praktisi teknik industri karena memungkinkan pengambilan keputusan *real-time* berbasis data ketika data primer untuk LCA penuh belum tersedia.

Urgensi operasional dari integrasi kedua pendekatan ini semakin nyata ketika mempertimbangkan bahwa sektor agri-food global bertanggung jawab atas sekitar 26% emisi gas rumah kaca antropogenik (FAO, 2023) dan lebih dari 32% kehilangan pangan terjadi antara panen dan ritel (UNEP, 2024). Sebuah klaster *eco-industrial park* agri-food yang dirancang di Pulau Jawa, misalnya, harus mampu mengkuantifikasi aliran material antar-unit pengolah, mengevaluasi dampak lingkungan secara agregat, dan memprediksi seberapa "sirkular" sistem tersebut pada horizon 5–10 tahun. Modul 1413 ini disusun untuk memberikan landasan kuantitatif dan prosedural bagi perekayasa industri dalam menjawab tantangan tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Life Cycle Assessment (LCA) Meso–Makro

Menurut Ravikumar dkk. (2024), perluasan LCA dari level mikro ke meso/makro memerlukan redefinisi unit fungsional dari "1 kg produk" menjadi "satuan jasa sistemik", misalnya satu ton *Functional Unit Output* per tahun dari klaster industri. Karakterisasi dampak lingkungan untuk kategori dampak $i$ dapat diformulasikan sebagai:

$$E_i = \sum_{s=1}^{S} \sum_{j=1}^{J} m_{s,j} \cdot CF_{i,j,s}$$

di mana $E_i$ adalah total dampak untuk kategori $i$ (misalnya *Global Warming Potential* dalam kg CO₂-eq), $m_{s,j}$ adalah massa aliran material $j$ dari sumber $s$ (misalnya limbah organik dari unit pengolah singkong), dan $CF_{i,j,s}$ adalah *characterization factor* dari database LCA seperti ecoinvent atau USLCI.

Pada level meso, Ravikumar dkk. menekankan bahwa batas sistem harus memasukkan **aliran simbiosis industri** antar fasilitas. Neraca massa agregat klaster mengikuti persamaan konservatif:

$$\sum_{k=1}^{K} I_k + \sum_{r=1}^{R} M_r^{recycled} = \sum_{k=1}^{K} O_k + \sum_{r=1}^{R} M_r^{loss} + \Delta S_{stock}$$

dengan $I_k$ adalah input material ke fasilitas $k$, $M_r^{recycled}$ adalah material yang didaur ulang dari proses $r$, $O_k$ adalah output produk, $M_r^{loss}$ adalah kehilangan material ke lingkungan, dan $\Delta S_{stock}$ adalah perubahan stok internal klaster.

Indeks Circular Economy (CEI) yang menjadi target kuantifikasi pada meso-level didefinisikan oleh Muñoz-Grillo dkk. (2024) sebagai:

$$CEI = \alpha \cdot \frac{M_{recycled}}{M_{total}} + \beta \cdot \frac{M_{reused}}{M_{total}} + \gamma \cdot \frac{E_{renewable}}{E_{total}}$$

dengan $\alpha + \beta + \gamma = 1$ dan $CEI \in [0,1]$. Koefisien bobot $\alpha$, $\beta$, $\gamma$ merepresentasikan preferensi strategi sirkular yang dapat dioptimasi melalui analisis multi-kriteria.

### 2.2 Prediksi Tingkat CE Berbasis Neural Network

Muñoz-Grillo dkk. (2024) menggunakan arsitektur *feedforward neural network* (FNN) dengan satu *hidden layer* untuk memprediksi CEI. Propagasi maju untuk satu neuron隐藏 dituliskan sebagai:

$$z_j = \sigma\left(\sum_{i=1}^{n} w_{ij} x_i + b_j\right)$$

dengan $x_i$ adalah variabel input (misalnya rasio daur ulang, konsumsi energi, jejak air), $w_{ij}$ adalah bobot sinaptik, $b_j$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear — dalam studi tersebut digunakan sigmoid $\sigma(z) = \frac{1}{1+e^{-z}}$. Output akhir CEI diprediksi oleh neuron output:

$$\hat{y} = \sigma\left(\sum_{j=1}^{m} v_j z_j + c\right)$$

Pelatihan jaringan mengikuti algoritma *backpropagation* dengan *gradient descent*, di mana pembaruan bobot pada epoch ke-$t$ diberikan oleh:

$$w_{ij}^{(t+1)} = w_{ij}^{(t)} - \eta \frac{\partial L}{\partial w_{ij}}$$

dengan $\eta$ adalah *learning rate* dan $L$ adalah fungsi *loss* (misalnya *Mean Squared Error*):

$$L = \frac{1}{N} \sum_{n=1}^{N} \left(y_n - \hat{y}_n\right)^2$$

### 2.3 Kuantifikasi Displacement dan Rebound

Tantangan ke-6 yang diidentifikasi Ravikumar dkk. (2024) memerlukan formulasi eksplisit untuk *displacement* dan *rebound effect*:

$$D_{displacement} = 1 - \frac{Q_{recycled}}{Q_{virgin, displaced}}$$

dan *rebound factor*:

$$R_{rebound} = \frac{\Delta C_{consumption}}{\Delta C_{efficiency}}$$

di mana $\Delta C_{consumption}$ adalah peningkatan konsumsi absolut dan $\Delta C_{efficiency}$ adalah peningkatan konsumsi yang diharapkan dari peningkatan efisiensi. Kedua parameter ini krusial untuk mencegah *over-estimation* manfaat CE.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan integrasi kedua paper di atas, SOP untuk rekayasa penilaian lingkungan CE pada level meso–makro dapat distandarisasi sebagai berikut:

**Tahap 1 — Definisi Sistem & Unit Fungsional.** Perekayasa industri bersama *stakeholder* klaster menetapkan batas sistem geografis dan fungsional. Untuk *eco-industrial park* agri-food di Indonesia, unit fungsional yang direkomendasikan adalah "1 ton produk pangan layak-konsumsi keluar dari klaster per tahun".

**Tahap 2 — Inventori Material & Energi.** Pengumpulan data primer dari setiap fasilitas anggota (kapasitas produksi, komposisi input-output, konsumsi energi) dan data sekunder dari database LCA (ecoinvent v3.10, Agri-footprint). Aliran antar-fasilitas (limbah organik ke biogas, air bekas ke irigasi) diinventarisasi sebagai *by-product exchange*.

**Tahap 3 — Pemodelan dengan Neural Network.** Variabel input yang merepresentasikan karakteristik klaster (misalnya 8 variabel: rasio daur ulang, intensitas energi, jejak air, proporsi energi terbarukan, tingkat substitusi material, jarak rata-rata ke konsumen, tingkat kehilangan rantai pasok, tingkat adopsi CE) dimasukkan ke dalam FNN terlatih dari Muñoz-Grillo dkk. (2024) untuk menghasilkan prediksi CEI awal.

**Tahap 4 — Karakterisasi Dampak LCA.** Menggunakan persamaan $E_i$ pada bagian 2.1, hitung dampak multi-kategori (GWP, *water scarcity footprint*, *eutrophication potential*, *land use*).

**Tahap 5 — Koreksi Displacement & Rebound.** Kalikan dampak bersih dengan faktor $(1 - D_{displacement}) \cdot (1 - R_{rebound})$ untuk memperoleh dampak *adjusted*.

**Tahap 6 — Benchmarking & Rekomendasi.** Bandingkan CEI dan dampak terhadap baseline *linear scenario*; identifikasi *hotspot* dan rekomendasikan intervensi (misalnya retrofit boiler biomassa, instalasi biogas dari limbah singkong).

```
┌──────────────────────────────────────────────────┐
│  FASE 1: Definisi Sistem & Unit Fungsional      │
│  (Output
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
