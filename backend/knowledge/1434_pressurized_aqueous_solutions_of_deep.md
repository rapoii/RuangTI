# 1434 — Optimasi Ekstraksi Antosianin Hijau dengan Deep Eutectic Solvent (DES) Berbasis Pressurized Liquid Extraction dan Pendekatan Machine Learning Mixed-Variable Multi-Objective

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Pressurized aqueous solutions of deep eutectic solvent (DES): A green emergent extraction of anthocyanins from a Brazilian berry processing by-product
**Jurnal & Sitasi Utama:** Laís Benvenutti, Acácio Antônio Ferreira Zielinski, Sandra Regina Salvador Ferreira (2022). *Food Chemistry X*. DOI: [https://doi.org/10.1016/j.fochx.2022.100236](https://doi.org/10.1016/j.fochx.2022.100236)
**Sitasi Pendukung:** Oliver J. Kershaw, Adam D. Clayton, Jamie A. Manson (2022). *Chemical Engineering Journal*. DOI: [https://doi.org/10.1016/j.cej.2022.138443](https://doi.org/10.1016/j.cej.2022.138443)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan buah tropis di Brasil — khususnya *Myrciaria jaboticaba* (jaboticaba) — menghadapi tantangan struktural berupa volume *by-product* kulit buah yang mencapai 30–45% dari total biomassa masuk, sementara kandungan antosianin (sianidin-3-glukosida dan delfinidin-3-glukosida) di dalamnya memiliki nilai fungsional tinggi untuk pangan, nutrasetikal, dan kosmetik (Benvenutti, Zielinski, & Salvador Ferreira, 2022, DOI: [10.1016/j.fochx.2022.100236](https://doi.org/10.1016/j.fochx.2022.100236)). Permintaan global akan pewarna alami dan bahan bioaktif meningkat sekitar 6,8% CAGR (2018–2024) sehingga valorisasi limbah menjadi *strategic imperative*, bukan opsi. Pelarut organik konvensional seperti metanol dan etanol—asam memiliki toksisitas tinggi, jejak karbon signifikan, serta tidak memenuhi ambang batas residu pelarut FDA 21 CFR §173.250 untuk aplikasi food-grade.

Di sisi lain, *deep eutectic solvents* (DES) — campuran *choline chloride* (ChCl) dengan *hydrogen bond donor* (HBD) seperti propylene glycol (PG) atau asam malat (Ma) — muncul sebagai pelarut generasi baru yang biodegradable, murah, dan dapat dimodifikasi. Studi Benvenutti dkk. (2022) membuktikan bahwa integrasi DES dengan *Pressurized Liquid Extraction* (PLE) pada 10 MPa, 90 °C, dan *flow rate* 5,3 mL/min menghasilkan yield antosianin hingga 50% lebih tinggi dibanding pelarut konvensional, sekaligus memenuhi indikator Green Certificate dan EcoScore. Urgensi industrialnya bersifat tiga dimensi: (i) ekonomi sirkular, (ii) compliance lingkungan, dan (iii) diferensiasi produk premium. Pelengkap yang krusial adalah integrasi *machine learning* untuk optimasi variabel campuran diskret-kontinyu, sebagaimana dibuktikan oleh Kershaw, Clayton, dan Manson (2022, DOI: [10.1016/j.cej.2022.138443](https://doi.org/10.1016/j.cej.2022.138443)) yang menerapkan algoritma MVMOO berbasis Bayesian pada reaksi SNAr dan Sonogashira — pendekatan yang secara langsung dapat di-port ke sistem PLE-DES untuk menentukan komposisi HBD, konsentrasi DES, dan suhu secara simultan demi *trade-off curve* antara yield, stabilitas termal, dan aktivitas antioksidan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Permukaan Respons (RSM) untuk Optimasi PLE

Benvenutti dkk. (2022) menggunakan *Central Composite Rotatable Design* (CCRD) dengan tiga faktor kontinyu: konsentrasi DES ($X_1$, %), suhu ($X_2$, °C), dan *flow rate* ($X_3$, mL/min). Respons yield antosianin dimodelkan dengan polinomial orde dua:

$$Y = \beta_0 + \sum_{i=1}^{k}\beta_i X_i + \sum_{i=1}^{k}\beta_{ii}X_i^2 + \sum_{i<j}\beta_{ij}X_i X_j + \varepsilon \tag{1}$$

dengan $\beta_0$ adalah intersep, $\beta_i$ koefisien linier, $\beta_{ii}$ kuadratik, $\beta_{ij}$ interaksi, dan $\varepsilon$ galat acak terdistribusi normal $N(0, \sigma^2)$. Kondisi optimal hasil optimasi: $X_1^* = 47\%$, $X_2^* = 90\,°C$, $X_3^* = 5{,}3$ mL/min.

### 2.2 Kinetika Degradasi Termal Antosianin

Stabilitas termal antosianin mengikuti model kinetika orde satu dengan aktivasi energi yang diestimasi via persamaan Arrhenius:

$$k = A \cdot \exp\left(-\frac{E_a}{RT}\right) \tag{2}$$

dengan $k$ = konstanta laju degradasi (min⁻¹), $A$ = faktor pre-eksponensial, $E_a$ = energi aktivasi (J/mol), $R$ = 8,314 J/(mol·K), dan $T$ = suhu absolut (K). Benvenutti dkk. (2022) melaporkan $E_a = 77{,}5$ kJ/mol untuk sediaan ChCl:Ma — nilai tertinggi dibanding ChCl:PG, mengindikasikan kestabilan termal superior.

### 2.3 Kapasitas Antioksidan (DPPH/ABTS) dan Inhibisi Enzim

Aktivitas antioksidan dimodelkan sebagai:

$$\text{IC}_{50} = \frac{[S]_{50\%}}{[S]_0} \times 100\% \tag{3}$$

Aktivitas anti-diabetes via inhibisi $\alpha$-glukosidase dan anti-obesitas via inhibisi lipase pankreas dimodelkan:

$$\%\,\text{Inhibition} = \frac{A_{\text{control}} - A_{\text{sample}}}{A_{\text{control}}} \times 100\% \tag{4}$$

### 2.4 Bayesian Mixed-Variable Multi-Objective Optimization (MVMOO)

Kershaw dkk. (2022) memperkenalkan algoritma yang mengoptimalkan variabel diskret (jenis katalis, ligan, pelarut) dan kontinyu secara simultan. Fungsi akuisisi_expected improvement dihitung sebagai:

$$\text{EI}(\mathbf{x}) = \mathbb{E}\left[\max(f(\mathbf{x}) - f^*, 0)\right] = \sigma(\mathbf{x})\left[z\Phi(z) + \phi(z)\right] \tag{5}$$

dengan $z = \frac{\mu(\mathbf{x}) - f^*}{\sigma(\mathbf{x})}$, $\Phi$ dan $\phi$ masing-masing adalah CDF dan PDF normal standar. *Pareto front* untuk dua objektif $f_1, f_2$ didefinisikan sebagai himpunan solusi non-dominan:

$$\mathcal{P} = \left\{\mathbf{x} \in \mathcal{X} \,\middle|\, \nexists\,\mathbf{x}' : f_i(\mathbf{x}') \geq f_i(\mathbf{x})\ \forall i,\ \text{dengan pertidaksamaan ketat untuk setidaknya satu } i\right\} \tag{6}$$

Pendekatan ini sangat relevan untuk PLE-DES karena kita memiliki ruang keputusan campuran: {ChCl:PG, ChCl:Ma} (diskret) × {$X_1, X_2, X_3$} (kontinyu) × {yield, stabilitas, aktivitas antioksidan} (multi-objektif).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir PLE-DES Terintegrasi ML

```
[Bibit limbah jaboticaba] → [Pretreatment: drying 40°C, milling <500 µm]
       ↓
[Pembuatan DES] (ChCl + HBD, rasio mol 1:2, stirring 80°C, 30 min)
       ↓
[Pelarutan DES dalam air] → konsentrasi target (47%)
       ↓
[Unit PLE] → kondisi optimal (10 MPa, 90°C, 5,3 mL/min, 12 min)
       ↓
[Filtrat] → [Evaporasi vakum] → [Analitik: HPLC-DAD, DPPH]
       ↓
[Loop Optimasi ML] ← Bayesian MVMOO ← data yield & kualitas
```

### 3.2 SOP Ekstraksi PLE-DES (12 Langkah)

1. **Preparasi biomassa**: Keringkan kulit jaboticaba pada 40 °C hingga kadar air <10%; giling dan ayak pada mesh 35 (≤500 µm).
2. **Sintesis DES**: Campurkan ChCl (1 mol) dengan HBD (PG atau Ma, 2 mol); aduk pada 80 °C, 200 rpm selama 30 min hingga jernih homogen.
3. **Pengenceran**: Larutkan DES dalam akuades pada konsentrasi $X_1$% (v/v) sesuai desain CCRD.
4. **Packing sel PLE**: Isi sel ekstraksi 10 mL dengan 1 g biomassa; tambahkan *diatomaceous earth* sebagai dispersant.
5. **Set-up parameter**: Tekanan 10 MPa, suhu 90 °C, *flow rate* 5,3 mL/min, *static time* 12 menit.
6. **Eksekusi ekstraksi**: Lakukan *flush* 60% volume sel, kumpulkan ekstrak dalam vial amber.
7. **Post-treatment**: Saring dengan membran PTFE 0,45 µm; simpan pada 4 °C terlindung cahaya.
8. **Kuantifikasi antosianin**: HPLC-DAD pada $\lambda = 520$ nm dengan standar sianidin-3-glukosida.
9. **Uji antioksidan**: DPPH (517 nm) dan ABTS (734 nm); hitung IC₅₀ via Persamaan (3).
10. **Uji anti-diabetes/anti-obesitas**: Inhibisi $\alpha$-glukosidase dan lipase pankreas sesuai protokol (Persamaan 4).
11. **Analisis green metrics**: Hitung Green Certificate dan EcoScale (skor 50–100; >75 = excellent).
12. **Iterasi ML**: Masukkan data ke MVMOO Bayesian (Persamaan 5–6) untuk *next-best-experiment* hingga konvergensi Pareto front.

### 3.3 Integrasi dengan Machine Learning

Pipeline digital twin menggunakan *Gaussian Process Regression* dengan kernel campuran (Matern 5/2 untuk variabel kontinyu, Hamming untuk diskret). Validasi dengan 5-fold cross-validation; threshold RMSE <5% dianggap konvergen.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Produksi Skala Pilot

Asumsikan pabrik nutrasetikal mengolah 50 kg kulit jaboticaba kering per batch. Parameter optimal Benvenutti dkk. (2022): $T = 90\,°C = 363{,}15$ K, $P = 10$ MPa, $C_{\text{DES}} = 47\%$, $Q = 5{,}3$ mL/min, $t = 12$ min.

**Langkah 1: Volume pelarut total**

$$V_{\text{solvent}} = Q \times t = 5{,}3\,\text{mL/min} \times 12\,\text{min} = 63{,}6\,\text{mL/g} \times 50{,}000\,\text{g} = 3{,}180\,\text{L per batch}$$

**Langkah 2: Komposisi pelarut DES-air**

$$V_{\text{DES}} = 0{,}47 \times 3{,}180\,\text{L} = 1.494{,}6\,\text{L},\quad V_{\