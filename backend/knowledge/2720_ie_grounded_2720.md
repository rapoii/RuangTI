# 2720 — Desain Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders: Formulasi, Optimasi, dan Implementasi Rekayasa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy industry) merupakan salah satu subsektor agroindustri dengan karakteristik operasional paling menantang dalam rantai pasok global. Produk susu seperti *pasteurized milk*, *yogurt*, *cheese*, dan *cream* memiliki sifat **highly perishable** dengan umur simpan (*shelf life*) berkisar 5–21 hari pada suhu refrigerasi 2–4°C. Menurut Lead Researchers (2023) dalam kerangka multi-objektif yang dipublikasikan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), karakteristik perishability ini menciptakan dilema struktural pada jaringan rantai pasok: biaya fasilitas rantai dingin (*cold chain*) yang tinggi harus diseimbangkan dengan degradasi kualitas produk yang berakibat pada *shrinkage* (penyusutan stok) dan kerugian ekonomi. Secara global, FAO memperkirakan bahwa sekitar 14% produk susu hilang (*food loss*) antara tahap pascapanen hingga distribusi, dengan nilai ekonomi tahunan melebihi USD 30 miliar.

Urgensi perancangan jaringan rantai pasok susu diperparah oleh tiga tren simultan. Pertama, peningkatan konsumsi protein hewani di pasar Asia-Pasifik yang tumbuh rata-rata 4,8% CAGR selama 2018–2023, menuntut ekspansi kapasitas produksi dan distribusi. Kedua, regulasi keamanan pangan yang semakin ketat (contoh: SNI 01-3951-1995 di Indonesia, FDA Pasteurized Milk Ordinance di AS) memerlukan traceability dan kontrol suhu yang presisi. Ketiga, tekanan terhadap dekarbonisasi rantai pasok memaksa perusahaan mengadopsi tujuan multi-objektif yang tidak hanya mengoptimalkan biaya, tetapi juga emisi CO₂ dan kesegaran produk. Zhang, Li, dan Ren (2024) dalam studi lanjutan mereka yang dipublikasikan dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) menekankan bahwa dalam konteks *reverse supply chain*, keputusan kualitas (*quality decisions*) memiliki efek *spillover* terhadap keputusan desain jaringan *forward*, sehingga diperlukan pendekatan optimasi terkoordinasi.

Lead Researchers (2023) berargumen bahwa model jaringan rantai pasok susu konvensional yang bersifat *single-objective cost-minimization* tidak lagi memadai karena gagal menangkap tiga dimensi kritis secara simultan: (i) total biaya logistik yang mencakup biaya fasilitas, transportasi ber-suhu terkontrol, dan inventory holding; (ii) tingkat kesegaran produk (*freshness level*) yang terukur melalui parameter *remaining useful lifetime*; dan (iii) emisi gas rumah kaca dari moda transportasi dan fasilitas refrigerasi. Oleh karena itu, paper tersebut mengusulkan framework MILP (Mixed-Integer Linear Programming) multi-objektif yang diselesaikan secara efisien menggunakan algoritma **Benders Decomposition**, sebuah teknik dekomposisi yang memisahkan variabel keputusan desain (*strategic*) dari variabel operasional (*tactical/operational*). Pendekatan ini secara signifikan mengurangi kompleksitas komputasional, terutama untuk jaringan dengan ratusan node pelanggan dan produk susu multi-jenis dengan karakteristik perishability yang heterogen.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Model Jaringan

Model mengikuti struktur **four-echelon supply chain network** yang terdiri dari:
- **Plant/Pabrik Pengolahan Susu** ($i \in I$): fasilitas upstream yang menerima bahan baku dan memproduksi produk susu jadi.
- **Distribution Center (DC)** ($j \in J$): fasilitas intermediate dengan kemampuan refrigerated storage.
- **Customer Zone** ($k \in K$): titik demand geografis.
- **Product Type** ($p \in P$): varian produk susu dengan karakteristik perishability berbeda.

### 2.2 Parameter Model

| Simbol | Deskripsi | Unit |
|--------|-----------|------|
| $F_i$ | Biaya tetap pembukaan plant $i$ | USD |
| $C_j$ | Biaya tetap pembukaan DC $j$ | USD |
| $t_{ij}$ | Biaya transportasi unit dari $i$ ke $j$ | USD/unit |
| $t_{jk}$ | Biaya distribusi unit dari $j$ ke $k$ | USD/unit |
| $h_j^p$ | Biaya inventory holding produk $p$ di DC $j$ | USD/unit·hari |
| $d_k^p$ | Demand produk $p$ di customer zone $k$ | unit/hari |
| $\alpha^p$ | Laju degradasi kesegaran produk $p$ | %/hari |
| $\beta$ | Faktor emisi CO₂ per unit·km | kg CO₂/unit·km |
| $\theta_p$ | Standar mutu minimum produk $p$ | % kesegaran |
| $M$ | Big-M konstan untuk linearisasi | — |

### 2.3 Variabel Keputusan

$$y_i = \begin{cases} 1, & \text{jika plant } i \text{ dibuka} \\ 0, & \text{lainnya} \end{cases}, \quad z_j = \begin{cases} 1, & \text{jika DC } j \text{ dibuka} \\ 0, & \text{lainnya} \end{cases}$$

$$x_{ij}^p \geq 0: \text{aliran produk } p \text{ dari plant } i \text{ ke DC } j$$
$$w_{jk}^p \geq 0: \text{aliran produk } p \text{ dari DC } j \text{ ke customer } k$$
$$v_j^p \geq 0: \text{level inventory produk } p \text{ di DC } j$$
$$f_k^p \geq 0: \text{tingkat kesegaran produk } p \text{ yang抵达 customer } k$$

### 2.4 Formulasi Multi-Objektif (ε-Constraint Method)

Tiga fungsi tujuan yang diminimasi:

**Objektif 1 — Total Biaya Logistik:**
$$\min Z_1 = \sum_{i \in I} F_i y_i + \sum_{j \in J} C_j z_j + \sum_{i,j,p} t_{ij} x_{ij}^p + \sum_{j,k,p} t_{jk} w_{jk}^p + \sum_{j,p} h_j^p v_j^p \tag{1}$$

**Objektif 2 — Degradasi Kesegaran (rata-rata):**
$$\min Z_2 = \frac{1}{\sum_{k,p} d_k^p} \sum_{j,k,p} \alpha^p \cdot T_{jk} \cdot w_{jk}^p \tag{2}$$

di mana $T_{jk}$ adalah waktu transit dari DC $j$ ke customer $k$ (hari).

**Objektif 3 — Emisi Karbon:**
$$\min Z_3 = \beta \sum_{i,j,p} \text{dist}(i,j) \cdot x_{ij}^p + \beta \sum_{j,k,p} \text{dist}(j,k) \cdot w_{jk}^p \tag{3}$$

**Kendala utama:**

$$\sum_{j \in J} w_{jk}^p = d_k^p \quad \forall k, p \tag{4}$$

$$\sum_{k \in K} w_{jk}^p \leq \sum_{i \in I} x_{ij}^p \quad \forall j, p \tag{5}$$

$$v_j^p \geq \sum_{k \in K} w_{jk}^p \cdot \theta_p^{T_{jk}} \quad \forall j, p \tag{6}$$

$$x_{ij}^p \leq M \cdot y_i, \quad w_{jk}^p \leq M \cdot z_j \tag{7}$$

$$\sum_{i \in I} y_i \leq N_{plant}^{max}, \quad \sum_{j \in J} z_j \leq N_{DC}^{max} \tag{8}$$

### 2.5 Benders Decomposition

Lead Researchers (2023) menerapkan **Benders Decomposition** dengan struktur berikut:

**Master Problem (MP)** — variabel desain:
$$\min \sum_{i} F_i y_i + \sum_{j} C_j z_j + \eta \tag{9}$$

subject to kendala (7), (8), dan kendala cut Benders $\eta \geq Q(y,z)$.

**Subproblem (SP)** — diberikan $(y^*, z^*)$ tetap, minimasi biaya operasional:
$$\min \sum_{i,j,p} t_{ij} x_{ij}^p + \sum_{j,k,p} (t_{jk} + \alpha^p T_{jk}) w_{jk}^p + \sum_{j,p} h_j^p v_j^p \tag{10}$$

dengan dual variabel $\pi, \rho, \sigma$ berturut-turut untuk kendala (4), (5), dan (6). **Benders optimality cut** yang ditambahkan ke MP pada iterasi ke-$\nu$ adalah:

$$\eta \geq \sum_{k,p} \pi_k^{p,\nu} d_k^p - \sum_{j,p} \left( \rho_j^{p,\nu} + \sigma_j^{p,\nu} \theta_p^{T_{jk}} \right) M y_i^{*} \quad \forall \nu \tag{11}$$

Algoritma berulang hingga $|\eta^{\nu} - \eta^{\nu-1}| < \epsilon$ dengan toleransi $\epsilon = 10^{-4}$, sesuai konvensi pada paper referensi utama. Pendekatan ini dilaporkan Lead Researchers (2023) mampu mengurangi *computational time* sebesar 67% dibanding solver MILP langsung (CPLEX/Gurobi) untuk instans jaringan skala industri.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework Benders multi-objektif di lingkungan industri memerlukan **prosedur operasional standar** delapan tahap berikut:

### Tahap 1 — Akuisisi Data Supply Chain
Melakukan inventarisasi seluruh node fasilitas, parameter demand historis (minimum 24 bulan), karakteristik perishability produk, dan kapasitas refrigerated storage. Data harus memenuhi akurasi GPS ±50 meter dan data suhu harus *time-stamped* dengan interval sampling ≤ 15 menit.

### Tahap 2 — Estimasi Parameter Degradasi
Lakukan **accelerated shelf-life testing (ASLT)** mengikuti protokol Arrhenius untuk menentukan laju degradasi $\alpha^p$ pada suhu aktual. Untuk susu pasteurisasi, $\alpha^{milk} \approx 0{,}082$/hari pada 4°C.

### Tahap 3 — Kalibrasi Model
Validasi parameter biaya transportasi dan inventory holding terhadap data akuntansi biaya aktual perusahaan dengan toleransi deviasi ≤ 5%. Tune parameter big-M menggunakan teknik *M-cuts tightening* dari Codato & Fischetti (2006).

### Tahap 4 — Inisialisasi Benders
Tetapkan batas bawah (LB) awal dari solusi *relaxation* LP dan batas atas (UB) dari solusi heuristik sederhana (contoh: *greedy facility opening*). Pilih toleransi konvergensi $\epsilon = 10^{-4}$.

### Tahap 5 — Iterasi Benders
```
START
  ν ← 0; LB ← -∞; UB ← +∞
  REPEAT
    ν ← ν + 1
    Solve MP(ν) → (y^ν, z^ν, η^ν)
    Update LB ← max(LB, η^ν + Σ F_i y_i^ν + Σ C_j z_j^ν)
    Solve SP(y^ν, z^ν) → (x^ν, w^ν, v^ν) dan dual (π^ν, ρ^ν, σ^ν)
    Compute Z_OP^ν = Σ(t_ij x^ν) + Σ(t_jk + α^p T_jk) w^ν + Σ h v^ν
    Update UB ← min(UB, Z_OP^ν + Σ F_i y_i^ν + Σ C_j z_j^ν)
    Generate Benders cut eq.(11) and append to MP
  UNTIL (UB - LB)/LB < ε
  Return (y*, z*, x*, w*, v*)
END
```

### Tahap 6 — Pembangkitan Pareto Front
Gunakan **ε-constraint method** dengan iterasi pada dua objective secara sistematis. Discretize rentang $Z_2$ dan $Z_3$ masing-masing menjadi 10 grid point, menghasilkan hingga 100 titik Pareto. Filter dengan kriteria *non-dominance* dan *proper Pareto optimality* (Geoffrion's criterion).

### Tahap 7 — Decision Support System (DSS)
Hasil Pareto-front disajikan dalam *dashboard interaktif* yang menampilkan *trade-off curve* antara biaya, kesegaran, dan emisi. Stakeholder memilih solusi menggunakan **