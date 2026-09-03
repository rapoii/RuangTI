# 2128 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Multi-Objective Optimization of Perishable Dairy Supply Chain Networks via Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, Vol. 6, Issue 5. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *SSRN Electronic Journal – Benders Decomposition for Reverse Supply Chain with Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan susu (dairy processing industry) merupakan salah satu subsektor agro-manufaktur dengan karakteristik operasional yang paling kompleks dalam konteks rekayasa rantai pasok. Produk susu — termasuk *pasteurized fluid milk*, *yogurt*, *keju*, *butter*, dan *milk powder* — memiliki sifat *perishable* dengan umur simpan yang pendek (rata-rata 7–21 hari untuk produk segar), sehingga memerlukan integritas rantai dingin (*cold chain*) yang ketat pada rentang suhu 2–6°C. Kerusakan kualitas akibat pelanggaran rantai dingin, menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), dapat menyebabkan kerugian ekonomi hingga 15–30% dari nilai produksi, terutama pada jaringan distribusi yang melewati banyak simpul dengan permintaan yang *stokastik* dan memiliki variabilitas musiman yang tinggi.

Urgensi perancangan jaringan rantai pasok susu (*dairy supply chain network design* – DSCND) semakin meningkat seiring dengan tiga tekanan industri simultan: (i) **volatilitas harga bahan baku** di tingkat peternakan (*raw milk collection*), (ii) **fluktuasi permintaan** konsumen yang dipengaruhi tren gaya hidup sehat dan urbanisasi, serta (iii) **tekanan regulasi** terkait food safety, emisi karbon, dan *circular economy*. Lead Researchers (2023) mengusulkan kerangka multi-objektif yang secara simultan meminimalkan total biaya logistik, emisi CO₂eq, dan degradasi kualitas produk, dengan menggunakan **Dekomposisi Benders** sebagai teknik optimasi untuk memecahkan masalah Mixed-Integer Linear Programming (MILP) berskala besar yang muncul dari diskretisasi keputusan lokasi fasilitas.

Komplementer terhadap hal tersebut, Zhang, Li, & Ren (2024) dalam DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) menunjukkan bahwa keputusan kualitas (*quality-based disposition decisions*) pada rantai pasok balik (*reverse supply chain*) — berupa pemilahan antara *remanufacturing*, *recycling*, dan *disposal* produk susu kadaluwarsa — memiliki interaksi keputusan yang kuat dengan desain jaringan maju (*forward network*). Integrasi kedua perspektif ini menjadi fondasi kerangka holistik yang memungkinkan para insinyur industri merancang jaringan yang resilient, sustainable, dan cost-efficient secara bersamaan. Dengan kata lain, optimasi DSCND bukan sekadar persoalan *facility location-allocation* klasik, melainkan masalah keputusan multi-objektif yang harus diselesaikan di bawah ketidakpastian dan dengan struktur masalah yang *block-angular* — sebuah karakteristik yang sangat cocok untuk didekomposisi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan dan Asumsi Dasar

Jaringan rantai pasok susu dimodelkan sebagai graf berarah $\mathcal{G} = (\mathcal{N}, \mathcal{A})$ dengan himpunan simpul $\mathcal{N} = \mathcal{P} \cup \mathcal{W} \cup \mathcal{C} \cup \mathcal{R}$, di mana $\mathcal{P}$ adalah *processing plant*, $\mathcal{W}$ adalah *cold-storage warehouse*, $\mathcal{C}$ adalah *customer zone*, dan $\mathcal{R}$ adalah *reprocessing/recovery facility*. Himpunan produk $\mathcal{I}$ merepresentasikan varian produk susu (misal: $\mathcal{I} = \{M_1, M_2, M_3\}$ untuk susu pasteurisasi, yogurt, dan keju). Asumsi-asumsi inti mengikuti formulasi Lead Researchers (2023):

1. Permintaan $d_{c,i}$ bersifat deterministik pada *planning horizon* (ekstensi ke *stochastic programming* dimungkinkan melalui *scenario-based* Benders).
2. Kapasitas fasilitas $Cap_p$ dan $Cap_w$ bersifat *hard constraint*.
3. Degradasi kualitas dimodelkan sebagai fungsi linier dari waktu transit: $Q_{p,c,i} = Q_0 - \alpha \cdot t_{p,c}^{transit}$.

### 2.2 Formulasi MILP Master Problem

Variabel keputusan utama adalah:
- $y_p \in \{0,1\}$: keputusan membuka plant $p$
- $x_{p,w,i} \geq 0$: alur produk $i$ dari plant $p$ ke warehouse $w$ (ton)
- $z_{w,c,i} \geq 0$: alur produk $i$ dari warehouse $w$ ke customer $c$
- $\theta$: variabel skalar yang merepresentasikan nilai optimal subproblem

**Master Problem (MP)** menangani keputusan *here-and-now* (lokasi dan kapasitas fasilitas):

$$
\min_{y, \theta} \quad \sum_{p \in \mathcal{P}} f_p \, y_p + \theta \tag{MP.Obj}
$$

dengan kendala:

$$
\sum_{p} y_p \geq 1 \quad \text{(cakupan pelayanan minimum)} \tag{MP.1}
$$

$$
\theta \geq \pi_k \left( d - B y \right), \quad \forall k \in \mathcal{K} \tag{MP.2}
$$

$$
y_p \in \{0,1\}, \quad \theta \in \mathbb{R} \tag{MP.3}
$$

di mana $\pi_k$ adalah *dual multiplier* dari iterasi Benders ke-$k$ dan $\mathcal{K}$ adalah himpunan cuts yang dibangkitkan secara iteratif. Persamaan (MP.2) dikenal sebagai **optimality cut** yang mengakomodasi biaya operasional yang bergantung pada keputusan lokasi.

### 2.3 Subproblem (Operational Layer)

Setelah $y_p$ difiksasi, *subproblem* menyelesaikan keputusan *wait-and-see* (aliran produksi dan distribusi) yang meminimalkan biaya variabel dan penalti kualitas:

$$
\min_{x,z} \quad \sum_{p,w,i} c^P_{p,i} x_{p,w,i} + \sum_{w,c,i} c^T_{w,c,i} z_{w,c,i} + \sum_{c,i} \rho_i \, S_{c,i} \tag{SP.Obj}
$$

dengan kendala:

$$
\sum_{w} x_{p,w,i} \leq Cap_p \, y_p, \quad \forall p,i \tag{SP.1}
$$

$$
\sum_{c} z_{w,c,i} \leq Cap_w, \quad \forall w,i \tag{SP.2}
$$

$$
\sum_{w} z_{w,c,i} + S_{c,i} = d_{c,i}, \quad \forall c,i \tag{SP.3}
$$

$$
\sum_{i} x_{p,w,i} \leq \sum_{i} Cap_w^{in}, \quad \forall p,w \tag{SP.4}
$$

$$
x_{p,w,i}, z_{w,c,i}, S_{c,i} \geq 0 \tag{SP.5}
$$

di mana $S_{c,i}$ adalah *shortage variable* dengan penalti $\rho_i$. Dual solusi subproblem memberikan *extreme ray* atau *extreme point* yang digunakan untuk membangkitkan cuts berikutnya.

### 2.4 Dual Subproblem dan Pembangkitan Cuts

Bentuk dual subproblem adalah:

$$
\max_{\pi \geq 0} \quad \sum_{p,i} Cap_p y_p \cdot \alpha_{p,i} + \sum_{c,i} d_{c,i} \gamma_{c,i} \tag{SP.Dual}
$$

$$
\text{s.t.} \quad \alpha_{p,i} + \beta_{p,w,i} \leq c^P_{p,i}, \; \forall p,w,i \tag{D.1}
$$

$$
\gamma_{c,i} - \beta_{