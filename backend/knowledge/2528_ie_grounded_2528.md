# 2528 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks sepanjang dekade terakhir. Berdasarkan Lead Researchers (2023) yang dipublikasikan dalam *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), jaringan rantai pasok susu характеризован oleh tiga karakteristik operasional yang membedakannya dari rantai pasok produk dry-goods konvensional: **(1) tingkat deteriorasi kualitas yang sangat tinggi** dengan umur simpan rata-rata 5–21 hari untuk produk pasteurisasi dan 3–6 bulan untuk UHT; **(2) kebutuhan suhu terkontrol** pada rentang 2–8°C yang menimbulkan biaya energi 30–50% lebih tinggi dibandingkan transportasi dry-cargo; serta **(3) permintaan musiman dan volatilitas harga bahan baku** yang didominasi oleh fluktuasi produksi sapi perah. Ketiga karakteristik ini menjadikan desain jaringan rantai pasok susu sebagai masalah optimasi *large-scale mixed-integer non-linear programming* (MINLP) yang sulit diselesaikan dengan pendekatan branch-and-bound konvensional.

Urgensi ekonomis dari optimasi ini semakin nyata mengingat data FAO menunjukkan bahwa sekitar 14% produk susu global terbuang sebelum sampai ke konsumen akhir, setara dengan nilai ekonomis lebih dari USD 30 miliar per tahun. Kerugian ini sebagian besar berasal dari keputusan desain jaringan yang tidak optimal — misalnya lokasi fasilitas processing yang terlalu jauh dari zona produksi susu mentah, sehingga waktu transit melebihi *shelf-life* produk. Lead Researchers (2023) menekankan bahwa keputusan lokasi fasilitas, alokasi pelanggan, kapasitas produksi, dan perencanaan inventori harus diselesaikan secara simultan dalam satu kerangka keputusan, bukan secara terpisah.

Paralel dengan konteks dairy forward logistics, Zhang, Li, dan Ren (2024) dalam paper SSRN [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) menunjukkan bahwa reverse supply chain untuk produk dengan degradasi kualitas — termasuk dairy by-products seperti whey dan produk kadaluwarsa — menghadapi tantangan optimasi serupa. Keputusan *quality-based disposition* (remanufacturing, recovery, disposal) menambah dimensi keputusan tambahan yang memperbesar ruang solusi secara eksponensial. Kedua paper ini sepakat bahwa **Benders Decomposition** (BD) adalah metodologi yang paling efektif untuk menangani masalah mixed-integer dengan struktur dua-level yang inheren dalam desain jaringan rantai pasok dengan keputusan kualitas.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Model Multi-Objektif

Formulasi mengikuti kerangka tiga-objektif yang diajukan Lead Researchers (2023), dengan fungsi tujuan **minimasi total biaya rantai pasok**, **minimasi degradasi kualitas total** (sebagai proksi dari kerugian produk), dan **minimasi emisi karbon**. Untuk keperluan formulasi, kami sajikan versi skalar-terbobot sebagai berikut:

$$\min Z = w_1 \cdot \text{TC} + w_2 \cdot \text{TD} + w_3 \cdot \text{TE}$$

dengan $w_1 + w_2 + w_3 = 1$ dan $w_k \geq 0$ untuk $k=1,2,3$.

### 2.2 Notasi Himpunan, Parameter, dan Variabel Keputusan

**Himpunan (Sets):**
- $I = \{1, 2, \ldots, m\}$: himpunan fasilitas produksi (processing plant)
- $J = \{1, 2, \ldots, n\}$: himpunan pusat distribusi (distribution center/DC)
- $K = \{1, 2, \ldots, p\}$: himpunan zona permintaan (customer zone)
- $S = \{1, 2, \ldots, q\}$: himpunan supplier susu mentah (farm)

**Parameter:**
- $f_i$: biaya tetap pembukaan fasilitas $i \in I$ (Rp/unit/tahun)
- $g_j$: biaya tetap pembukaan DC $j \in J$
- $c_{ij}$: biaya transportasi per unit dari $i$ ke $j$
- $d_{jk}$: biaya distribusi per unit dari $j$ ke zona $k$
- $q_s$: kapasitas suplai susu mentah dari farm $s \in S$
- $Q_i$: kapasitas produksi fasilitas $i$
- $D_k$: permintaan rata-rata zona $k$
- $\alpha$: laju deteriorasi kualitas per unit waktu (per hari)
- $t_{ij}^{tr}$: waktu transit dari $i$ ke $j$
- $e_{ij}$: emisi CO₂ per unit yang diangkut dari $i$ ke $j$
- $M$: bilangan big-M untuk linearisasi

**Variabel Keputusan:**
- $y_i \in \{0,1\}$: 1 jika fasilitas $i$ dibuka
- $z_j \in \{0,1\}$: 1 jika DC $j$ dibuka
- $x_{ij} \geq 0$: aliran produk dari $i$ ke $j$
- $w_{jk} \geq 0$: alflow produk dari $j$ ke $k$
- $v_s \geq 0$: volume susu mentah yang dibeli dari farm $s$

### 2.3 Fungsi Tujuan

$$\text{TC} = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} d_{jk} w_{jk} + \sum_{s \in S} p_s v_s$$

$$\text{TD} = \sum_{i \in I} \sum_{j \in J} \alpha \cdot t_{ij}^{tr} \cdot x_{ij} + \sum_{j \in J} \sum_{k \in K} \alpha \cdot t_{jk}^{tr} \cdot w_{jk}$$

$$\text{TE} = \sum_{i \in I} \sum_{j \in J} e_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} e_{jk} w_{jk}$$

### 2.4 Kendala (Constraints)

**(a) Kapasitas produksi:**
$$\sum_{j \in J} x_{ij} \leq Q_i \cdot y_i, \quad \forall i \in I$$

**(b) Konservasi aliran di DC:**
$$\sum_{i \in I} x_{ij} = \sum_{k \in K} w_{jk}, \quad \forall j \in J$$

**(c) Kapasitas DC:**
$$\sum_{k \in K} w_{jk} \leq C_j \cdot z_j, \quad \forall j \in J$$

**(d) Pemenuhan permintaan:**
$$\sum_{j \in J} w_{jk} \geq D_k, \quad \forall k \in K$$

**(e) Pasokan bahan baku:**
$$\sum_{i \in I} \sum_{j \in J} x_{ij} \leq \sum_{s \in S} v_s, \quad \text{dengan } v_s \leq q_s$$

### 2.5 Formulasi Benders Decomposition (BD)

Lead Researchers (2023) dan Zhang et al. (2024) mendekomposisi model MINLP ini menjadi **Master Problem (MP)** yang hanya memuat variabel fasilitas (variabel binary) dan **Subproblem (SP)** yang memuat variabel aliran (variabel kontinu). Struktur dekomposisi:**

**Master Problem (MP) — iterasi ke-$\nu$:**
$$\min_{y, z} \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \theta$$

dengan kendala:
$$y_i \in \{0,1\}, \quad z_j \in \{0,1\}$$
$$\theta \geq \bar{Z}_{\text{SP}}^{(\ell)} + \sum_{i \in I} \pi_i^{(\ell)} (Q_i y_i - \sum_{j \in J} x_{ij}^{(\ell)}) + \sum_{j \in J} \mu_j^{(\ell)} (C_j z_j - \sum_{k \in K} w_{jk}^{(\ell)}), \quad \forall \ell = 1, \ldots, \nu-1$$

**Subproblem (SP) — untuk fixed $(y^*, z^*)$:**
$$\bar{Z}_{\text{SP}}(y^*, z^*) = \min_{x, w, v} w_1 \left[\sum c_{ij} x_{ij} + \sum d_{jk} w_{jk} + \sum p_s v_s\right] + w_2 \cdot \text{TD} + w_3 \cdot \text{TE}$$

$$\text{st. } \sum_{j \in J} x_{ij} \leq Q_i y_i^*, \quad \forall i \in I$$
$$\sum_{k \in K} w_{jk} \leq C_j z_j^*, \quad \forall j \in J$$
$$\sum_{i \in I} x_{ij} = \sum_{k \in K} w_{jk}, \quad \forall j \in J$$
$$\sum_{j \in J} w_{jk} \geq D_k, \quad \forall k \in K$$
$$\sum_{s \in S} v_s \geq \sum_{i \in I} \sum_{j \in J} x_{ij}, \quad v_s \leq q_s$$
$$x_{ij}, w_{jk}, v_s \geq 0$$

**Dual SP** menghasilkan multiplier $(\pi, \mu, \lambda, \rho, \sigma)$ yang digunakan untuk membentuk **Benders cut** (optimality cut atau feasibility cut) yang ditambahkan ke MP pada iterasi berikutnya. Algoritma berhenti ketika $\theta \geq \bar{Z}_{\text{SP}}^{(\nu)} - \epsilon$ dengan $\epsilon$ adalah toleransi konvergensi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi algoritma Benders Decomposition dalam konteks desain jaringan rantai pasok susu mengikuti SOP terstruktur berikut yang disesuaikan dengan kerangka Lead Researchers (2023):

**Tahap 1 — Definisi Ruang Keputusan.** Akuisisi data empiris: kapasitas produksi existing, demand forecasting (time-series ARIMA atau Prophet), lokasi kandidat fasilitas (shortlist berdasarkan analisis GIS dan proximity terhadap jalan arteri), serta parameter biaya (logistik, energi refrigerasi, tenaga kerja). Lead Researchers (2023) merekomendasikan horizon perencanaan 5–10 tahun dengan diskonto 8–12%.

**Tahap 2 — Formulasi Model MINLP.** Kodefikasi model menggunakan notasi standar seperti pada Bagian 2. Validasi model melalui sanity check: solusi trivial (semua node dibuka) harus reproducible, dan batas bawah (lower bound) tidak boleh melebihi solusi trivial.

**Tahap 3 — Implementasi Solver Hybrid.** Lead Researchers (2023) menggunakan Python + Gurobi/CBC untuk MP (MIP) dan CPLEX untuk SP (LP). Setiap iterasi BD mengikuti alur:

```
START (ν=0, UB=+∞, LB=-∞)
  1. Solve MP → (y*, z*, θ*, LB_new)
  2. Update LB = max(LB, LB_new)
  3. Fix (y*, z*) → Solve SP → (x*, w*, v*, Z_SP*, π*, μ*, λ*)
  4. UB_new = Σ f_i y* + Σ g_j z* + Z_SP*
  5. Update UB = min(UB, UB_new)
  6. IF UB - LB ≤ ε: STOP, solusi optimal
  7. ELSE: Tambahkan optimality cut ke MP, ν=ν+1, GOTO 1
END
```

**Tahap 4 — Sensitivity Analysis & Robust Optimization.** Lakukan analisis sensitivitas terhadap parameter kritis: harga bahan baku (susu mentah), la