# 1435 — Perencanaan Tata Letak (Floorplanning) Chiplet 3D yang Sadar-Pin dan Sadar-Termal melalui MILP Tersemat Konvolusi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Chiplet3D: Pin- and Thermal-Aware 3D Chiplet Floorplanning via Convolution-Embedded MILP
**Jurnal & Sitasi Utama:** Shuo Ren, Libo Shen, Yaohui Han (2026). *arXiv (Cornell University)*. DOI: [https://openalex.org/W7168433340](https://openalex.org/W7168433340)
**Sitasi Pendukung:** Shuo Ren, Libo Shen, Yaohui Han (2026). *arXiv (Cornell University)*. DOI: [https://openalex.org/W7168433340](https://openalex.org/W7168433340)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap industri semikonduktor global, perlambatan penskalaan Hukum Moore telah memaksa para praktisi *Very Large Scale Integration* (VLSI) untuk bertransisi dari arsitektur planar dua dimensi menuju integrasi tiga dimensi (*3D-IC*). Menurut Ren, Shen, dan Han (2026) dalam paper *Chiplet3D* yang dipublikasikan di repositori *arXiv* Cornell University (DOI: [https://openalex.org/W7168433340](https://openalex.org/W7168433340)), penumpukan vertikal beberapa *die* aktif menjadi satu paket merupakan respons strategis untuk mempertahankan trajektori peningkatan kinerja tanpa bergantung pada miniaturisasi transistor semata. Namun, struktur 3D ini menyimpan konsekuensi termodinamika yang serius: panas yang dihasilkan oleh *die* bagian dalam terjebak di dalam tumpukan, menciptakan *hotspot* yang tidak hanya menurunkan keandalan perangkat tetapi juga membatasi *clock frequency* dan memperpendek Mean Time To Failure (MTTF).

Dari perspektif *Engineering Economics* dan *Design for Manufacturability* (DFM), pemilihan tahap intervensi untuk mitigasi termal menjadi keputusan yang sangat menentukan biaya produksi. Paper Chiplet3D secara eksplisit menyatakan bahwa *floorplanning* — yaitu tahap penentuan posisi fisik blok-blok logika pada kanvas *die* — merupakan **tahap paling awal dan paling hemat biaya** untuk menyelesaikan masalah termal. Jika masalah ini dibiarkan hingga tahap *routing* atau *place-and-route*, biaya koreksi dapat meningkat secara eksponensial karena setiap perubahan pada suhu memerlukan iterasi ulang pada lintasan fisik dan *packaging*. Lebih lanjut, bagi industri *fabless* dan *foundry*, keputusan *floorplanning* yang buruk dapat menyebabkan *yield loss* signifikan, peningkatan Biaya per Wafer (PUSD), dan ketidakpatuhan terhadap *Power-Thermal Budget* yang ditetapkan oleh klien.

Urgensi operasional makin diperkuat oleh fakta bahwa desain chiplet — yaitu dekomposisi *System-on-Chip* (SoC) monolitik menjadi beberapa *chip* kecil yang dipasang secara heterogen — telah menjadi standar de facto di pasar *datacenter accelerator*, *AI training chip*, dan *mobile application processor*. AMD, Intel, dan NVIDIA telah mengadopsi pendekatan *multi-die* untuk produk unggulan mereka. Akan tetapi, literatur *floorplanning* konvensional — yang umumnya mengasumsikan kabel (kawat) terhubung ke titik pusat blok dan memperkirakan suhu melalui kalkulasi berbasis-daya yang terlalu sederhana — terbukti menyesatkan optimasi panjang kabel (*wirelength*) dan meninggalkan *hotspot* yang tidak terselesaikan. Kelemahan inilah yang menjadi celah riset yang diisi oleh Ren et al. (2026) melalui kerangka Chiplet3D.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka Chiplet3D yang diajukan oleh Ren et al. (2026) memformulasikan masalah *floorplanning* 3D *two-die* sebagai *Mixed-Integer Linear Programming* (MILP) yang disematkan dengan operator konvolusi untuk estimasi termal cepat. Berikut adalah formalisasi matematis yang merepresentasikan inti pendekatan mereka.

### 2.1 Modelasi Geometris Blok dan Variabel Keputusan

Misalkan terdapat himpunan $N$ blok (chiplet) yang akan ditempatkan pada dua *die* aktif: $D_1$ (dasar) dan $D_2$ (atas). Setiap blok $i \in N$ memiliki lebar $w_i$ dan tinggi $h_i$. Posisi blok direpresentasikan oleh koordinat pojok kiri-bawah $(x_i, y_i)$. Untuk mendukung **sadar-pin**, diperkenalkan empat variabel biner untuk merepresentasikan kemungkinan rotasi $0°, 90°, 180°, 270°$ dan dua variabel flip (sumbu-X dan sumbu-Y):

$$\theta_{i,r} \in \{0,1\}, \quad r \in \{0,1,2,3\}, \quad \sum_{r=0}^{3} \theta_{i,r} = 1$$

$$\phi_{i,f} \in \{0,1\}, \quad f \in \{0,1\}, \quad \sum_{f=0}^{1} \phi_{i,f} = 1$$

Dimensi efektif blok setelah transformasi menjadi:

$$W_i = \sum_{r=0}^{3}\theta_{i,r} \left[ (w_i \cos^2(\frac{r\pi}{2}) + h_i \sin^2(\frac{r\pi}{2})) (1-\phi_{i,0}) + (h_i \cos^2(\frac{r\pi}{2}) + w_i \sin^2(\frac{r\pi}{2})) \phi_{i,0} \right]$$

### 2.2 Estimasi Wirelength Sadar-Pin

Tidak seperti pendekatan tradisional yang menggunakan *Half-Perimeter Wire Length* (HPWL) berbasis titik pusat, Chiplet3D menghitung panjang kabel dari **lokasi pin eksak** setelah transformasi rotasi/flip diterapkan. Untuk setiap *net* $n$ dengan himpunan pin $P_n$, koordinat pin ke-$p$ setelah transformasi menjadi $(\tilde{x}_p, \tilde{y}_p)$. Panjang kabel Half-Perimeter Wire Length (HPWL) menjadi:

$$L_{HPWL} = \sum_{n \in \text{Nets}} \left( \max_{p \in P_n} \tilde{x}_p - \min_{p \in P_n} \tilde{x}_p + \max_{p \in P_n} \tilde{y}_p - \min_{p \in P_n} \tilde{y}_p \right)$$

Estimasi panjang kabel total:

$$W_{total} = \sum_{n \in \text{Nets}} L_{HPWL}(n)$$

### 2.3 Modelasi Termal via Konvolusi

Untuk menggantikan metrik berbasis-daya yang terlalu kasar, Ren et al. (2026) menggunakan **operator konvolusi diskret** pada peta kepadatan daya 2D. Peta suhu $T(x,y)$ pada permukaan *die* diperoleh dari konvolusi antara peta disipasi daya $P(x,y)$ dengan fungsi respons termal $K(x,y)$:

$$T(x,y) = P(x,y) \circledast K(x,y) = \sum_{u}\sum_{v} P(u,v) \cdot K(x-u, y-v)$$

di mana $K(x,y)$ adalah *Green's function* termal diskret yang memperhitungkan konduktivitas termal material (*bulk silicon*, *thermal interface material/TIM*, *underfill*), ketebalan lapisan, dan koefisien konveksi *heat sink*:

$$K(x,y) = \frac{1}{2\pi k_{eff}} \cdot \ln\left(\frac{r_{max}}{r_{xy}}\right)$$

dengan $r_{xy} = \sqrt{x^2 + y^2}$ dan $k_{eff}$ merupakan konduktivitas termal efektif *stack*. Estimasi suhu *coarse-grained* ini memungkinkan solver MILP mengevaluasi ratusan ribu kandidat *floorplan* dalam hitungan menit — jauh lebih cepat dibanding simulasi *finite-element* (FEM) penuh yang memerlukan jam komputasi per kandidat.

### 2.4 Fungsi Objektif MILP

Fungsi objektif Chiplet3D meminimalkan kombinasi terbobot dari panjang kabel dan pelanggaran *thermal constraint*:

$$\min Z = \alpha \cdot W_{total} + \beta \cdot \sum_{(x,y) \in \text{Grid}} \max(0, T(x,y) - T_{max})$$

di mana $\alpha$ dan $\beta$ adalah bobot penalti, $T_{max}$ adalah suhu ambang batas operasional (umumnya 85°C untuk grade industri atau 105°C untuk grade otomotif), dan *Grid* merepresentasikan resolusi diskretisasi termal (misalnya 32×32 sel per *die*). Konstanta $\beta$ yang besar迫使 *solver* memilih konfigurasi yang menekan *hotspot* meski dengan kompromi panjang kabel yang sedikit lebih tinggi.

### 2.5 Kendala (*Constraints*)

Kendala utama mencakup: (i) *non-overlapping* antar blok pada *die* yang sama menggunakan *Big-M* formulation; (ii) *alignment* pin *through-silicon via* (TSV) antar dua *die*; (iii) batas area; dan (iv) kendala termal lokal:

$$\sum_{i \in D_k} (x_i + W_i - x_j) \cdot \delta_{i,j}^{right} + \sum_{i \in D_k} (x_j + W_j - x_i) \cdot \delta_{i,j}^{left} \geq 0, \quad \forall (i,j)$$

di mana $\delta_{i,j}^{right}$ dan $\delta_{i,j}^{left}$ adalah variabel biner penunjuk relasi horizontal antar blok.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Chiplet3D di lingkungan produksi semikonduktor mengikuti SOP rekayasa lima tahap berikut:

**Tahap 1 — Akuisisi Data Desain.** *Design team* mengoleksi *netlist* (deskripsi konektivitas logika), *library* fisik blok (lebar, tinggi, jumlah pin, lokasi pin, daya rata-rata), dan peta termal *package* dari vendor *thermal interface material*. Data ini menjadi input deterministik solver.

**Tahap 2 — Pre-Processing Geometris.** Setiap blok di-*encode* dengan 8 kemungkinan transformasi geometris (4 rotasi × 2 flip). Lokasi pin ditransformasikan secara analitik untuk setiap konfigurasi kandidat sehingga panjang kabel dapat dihitung dari titik eksak, bukan pendekatan titik pusat. Langkah ini biasanya menghasilkan tabel pencarian (*lookup table*) sebesar $O(8 \times N_{pins})$ per blok.

**Tahap 3 — Pembentukan Model MILP.** *Physical design engineer* menerjemahkan spesifikasi ke dalam model MILP menggunakan pustaka seperti Gurobi atau CPLEX. Parameter solver mencakup *MIP gap tolerance* (default 0.5%), *time limit*, dan *branching priority* untuk variabel termal.

**Tahap 4 — Evaluasi Termal via Konvolusi.** Di setiap *node* pohon Branch-and-Bound, solver memanggil modul konvolusi untuk memperbarui peta suhu kandidat. Operator konvolusi diimplementasikan sebagai *matrix multiplication* sparse atau melalui *Fast Fourier Transform* (FFT) 2D untuk kompleksitas $O(N \log N)$ per evaluasi — jauh lebih efisien dibanding FEM.

**Tahap 5 — Validasi dan Verifikasi.** Solusi MILP divalidasi menggunakan simulasi FEM termal penuh pada subset kandidat terbaik untuk mengonfirmasi akurasi model konvolusi (per Ren et al., 2026, simpangan relatif di bawah 5%). Hasil akhir diterjemahkan kembali ke dalam *layout GDSII* untuk proses fabrikasi.

Arsitektur teknologi Chiplet3D secara skematis:

```
[Netlist + Library] → [Pin-aware Transform Encoder] → [MILP Solver]
                                                              │
                            ┌─────────────────────────────────┤
                            │                                 │
                     [Geometric Constraints]        [Convolution Thermal Kernel]
                            │                                 │
                            └────────────┬────────────────────┘
                                         ▼
                              [Optimal 3D Floorplan]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *AI accelerator startup* merancang 3D-IC dua-die untuk *edge inference*, terdiri dari 4 blok logika (Chiplet A, B, C, D) dengan total 24 pin yang harus terhubung melalui 6 *net*. Daya total disipasi sebesar 8 W terdistribusi tidak merata.

**Tabel Input Parameter:**

| Blok | $w_i$ (mm) | $h_i$ (mm) | Pin | Daya (W) |
|------|-----------|-----------|-----|----------|
| A    | 4.0       | 3.0       | 8   | 3.0      |
| B    | 3.0       | 2.0       | 4   | 1.5      |
| C    | 2.5       | 2.5       | 6   | 2.0      |
| D    | 3.5       | 2.0       | 6   | 1.5      |

**Langkah 1