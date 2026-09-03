# 1984 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition: Formulasi, Implementasi, dan Aplikasi Lintas-Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21379/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), rantai pasok susu segar memiliki karakteristik unik yang membedakannya dari jaringan manufaktur konvensional: (i) sifat produk yang mudah rusak (*perishability*) dengan umur simpan rata-rata 7–14 hari pada suhu 2–4°C, (ii) fluktuasi musiman permintaan hingga 25–30% antara puncak dan lembah, dan (iii) kendala kualitas ganda yang mencakup standar keamanan pangan (*food safety*) dan nilai gizi. Permintaan global akan produk susu diestimasi mencapai 890 juta ton pada 2023 dengan tingkat pertumbuhan majemuk (CAGR) sebesar 2,4% per tahun, sehingga kebutuhan akan kerangka keputusan yang rigorous untuk desain jaringan menjadi sangat mendesak.

Urgensi operasionalnya bersifat multidimensional. Dari sisi ekonomi, biaya logistik rantai dingin susu mencapai 18–22% dari total biaya produk, jauh lebih tinggi dibandingkan produk dry-goods (5–8%). Dari sisi lingkungan, emisi CO₂ dari sektor dairy menyumbang sekitar 3,4% dari total emisi gas rumah kaca global, sehingga muncul kebutuhan untuk menyeimbangkan fungsi biaya dengan dampak eksternalitas lingkungan. Lead Researchers (2023) menekankan bahwa keputusan desain jaringan — mencakup lokasi fasilitas processing, alokasi kapasitas, dan routing armada refrigerated truck — merupakan keputusan berjenis *tactical-strategic* yang harus mengakomodasi multiple conflicting objectives secara simultan. Kerangka multi-objective dengan Benders Decomposition yang diajukan oleh peneliti tersebut menjawab kebutuhan tersebut melalui dekomposisi masalah Mixed-Integer Linear Programming (MILP) berskala besar menjadi master problem dan subproblem yang lebih tractable.

Konteks ini juga relevan dengan studi Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437), di mana Benders Decomposition diaplikasikan pada jaringan reverse supply chain dengan mempertimbangkan keputusan kualitas (*quality decisions*). Sinergi keduanya menunjukkan bahwa metodologi Benders bersifat portabel lintas-mode rantai pasok: dari forward dairy network ke reverse logistics dengan dimensi quality grading. Implikasi manajerialnya adalah kemampuan untuk melakukan *what-if scenario analysis* secara efisien terhadap perubahan harga susu mentah, tarif energi refrigerated storage, dan regulasi emisi, yang dalam praktik industri biasanya memerlukan waktu komputasi berjam-jam jika diselesaikan dengan solver monolithic.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi MILP Multi-Objektif

Model yang dibangun oleh Lead Researchers (2023) menggunakan struktur MILP empat-tier yang terdiri dari: *farm suppliers* (sumber susu mentah), *processing plants* (pabrik pengolahan), *cold-storage distribution centers* (gudang berpendingin), dan *retail zones* (zona ritel). Notasi indeks dan parameter yang digunakan:

**Himpunan indeks:**
- $I = \{1, 2, \ldots, m\}$: himpunan farm suppliers
- $J = \{1, 2, \ldots, n\}$: himpunan kandidat processing plants
- $K = \{1, 2, \ldots, p\}$: himpunan kandidat distribution centers
- $L = \{1, 2, \ldots, q\}$: himpunan retail demand zones

**Parameter:**
- $c_{ij}$: biaya transportasi per unit dari farm $i$ ke plant $j$
- $c_{jk}$: biaya transportasi per unit dari plant $j$ ke DC $k$
- $c_{kl}$: biaya transportasi per unit dari DC $k$ ke retail zone $l$
- $f_j$: fixed cost pembangunan plant $j$
- $g_k$: fixed cost operasional DC $k$
- $a_i$: kapasitas suplai farm $i$
- $b_j$: kapasitas produksi plant $j$
- $d_k$: kapasitas cold-storage DC $k$
- $D_l$: permintaan retail zone $l$
- $\alpha$: emisi CO₂ per ton-km susu

**Variabel keputusan:**
- $x_{ij} \geq 0$: alokasi susu mentah dari farm $i$ ke plant $j$
- $y_{jk} \geq 0$: alokasi produk olahan dari plant $j$ ke DC $k$
- $z_{kl} \geq 0$: alokasi dari DC $k$ ke retail zone $l$
- $u_j \in \{0,1\}$: 1 jika plant $j$ dibuka
- $v_k \in \{0,1\}$: 1 jika DC $k$ diaktifkan

### 2.2 Fungsi Objektif Ganda

Lead Researchers (2023) merumuskan dua fungsi objektif yang saling konfliktual:

**Objektif 1 — Minimasi Total Biaya Rantai Pasok:**

$$\min Z_1 = \sum_{j \in J} f_j u_j + \sum_{k \in K} g_k v_k + \sum_{i \in I}\sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J}\sum_{k \in K} c_{jk} y_{jk} + \sum_{k \in K}\sum_{l \in L} c_{kl} z_{kl} \tag{1}$$

**Objektif 2 — Minimasi Jejak Karbon (Emisi CO₂):**

$$\min Z_2 = \alpha \left( \sum_{i \in I}\sum_{j \in J} d_{ij} x_{ij} + \sum_{j \in J}\sum_{k \in K} d_{jk} y_{jk} + \sum_{k \in K}\sum_{l \in L} d_{kl} z_{kl} \right) \tag{2}$$

di mana $d_{ij}$, $d_{jk}$, $d_{kl}$ berturut-turut adalah jarak geografis antar-node.

### 2.3 Kendala (*Constraints*)

$$\sum_{j \in J} x_{ij} \leq a_i \quad \forall i \in I \tag{3}$$

$$\sum_{i \in I} x_{ij} \leq b_j u_j \quad \forall j \in J \tag{4}$$

$$\sum_{j \in J} y_{jk} \leq d_k v_k \quad \forall k \in K \tag{5}$$

$$\sum_{k \in K} z_{kl} = D_l \quad \forall l \in L \tag{6}$$

$$\sum_{k \in K} y_{jk} = \sum_{i \in I} x_{ij} \quad \forall j \in J \tag{7}$$

$$u_j, v_k \in \{0,1\}, \quad x_{ij}, y_{jk}, z_{kl} \geq 0 \tag{8}$$

### 2.4 Benders Decomposition

Karena masalah di atas bersifat MILP dengan ribuan variabel biner dan kontinyu, Lead Researchers (2023) menerapkan Benders Decomposition (Benders, 1962) yang memisahkan keputusan lokasi (*u_j*, *v_k*) ke dalam **master problem (MP)** dan alokasi aliran ke dalam **subproblem (SP)**.

**Master Problem (MP):**

$$\min \sum_{j \in J} f_j u_j + \sum_{k \in K} g_k v_k + \eta \tag{9}$$

dengan kendala: $u_j, v_k \in \{0,1\}$ dan $\eta \geq 0$ (variabel epigraf).

**Subproblem (SP) — diberikan $(\bar{u}, \bar{v})$ dari MP:**

$$\min \sum_{i \in I}\sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J}\sum_{k \in K} c_{jk} y_{jk} + \sum_{k \in K}\sum_{l \in L} c_{kl} z_{kl} \tag{10}$$

subjek terhadap kendala (3)–(8) dengan $u_j = \bar{u}_j$ dan $v_k = \bar{v}_k$. Dual dari SP menghasilkan *Benders cut* yang ditambahkan ke MP:

$$\eta \geq \pi^T (b - F\bar{u} - G\bar{v}) \tag{11}$$

Iterasi berlanjut hingga gap primal-dual < ε (umumnya ε = 10⁻⁴). Pendekatan serupa juga digunakan oleh Zhang, Li, dan Ren (2024) untuk reverse supply chain dengan penambahan dimensi kualitas produk daur ulang.

## 3. Metodologi Rekayasa & SOP Implementasi

Implementasi di industri mengikuti **SOP 8-Langkah** berdasarkan protokol yang diuraikan Lead Researchers (2023) dan diperkuat dengan prosedur Zhang et al. (2024):

```
┌──────────────────────────────────────────────────────────────┐
│  LANGKAH 1: Data Acquisition (GIS, ERP, sensor IoT)         │
│       ↓                                                      │
│  LANGKAH 2: Parameter Calibration & Validation              │
│       ↓                                                      │
│  LANGKAH 3: Scenario Generation (demand, cost, emission)    │
│       ↓                                                      │
│  LANGKAH 4: Formulasi MP & SP (CPLEX/Gurobi Python API)    │
│       ↓                                                      │
│  LANGKAH 5: Eksekusi Benders Loop dengan warm-start         │
│       ↓                                                      │
│  LANGKAH 6: Pareto-Front Extraction (ε-constraint method)   │
│       ↓                                                      │
│  LANGKAH 7: Sensitivity Analysis (±15% parameter sweep)     │
│       ↓                                                      │
│  LANGKAH 8: Decision Dashboard & Implementation Plan        │
└──────────────────────────────────────────────────────────────┘
```

**Arsitektur teknologi** yang disarankan: (i) layer data fusion dengan Kafka stream untuk integrasi IoT cold-chain sensor; (ii) layer optimasi berbasis Python + Gurobi 11.0 dengan modul Pyomo.Benders; (iii) layer visualisasi menggunakan Power BI dengan parameter koneksi ke REST API. Standar referensi: ISO 22000 untuk keamanan pangan, ISO 14064 untuk carbon accounting, dan GFSI (Global Food Safety Initiative) untuk benchmarking.

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Data Input Industri

Ambil studi kasus hipotetis-realistis dari jaringan dairy regional dengan parameter sebagai berikut (disintesis dari Lead Researchers, 2023):

| Parameter | Nilai |
|-----------|-------|
| Jumlah farm ($m$) | 6 |
| Kandidat plant ($n$) | 4 |
| Kandidat DC ($p$) | 3 |
| Retail zones ($q$) | 8 |
| Total demand $\sum D_l$ | 12.500 ton/bulan |
| Fixed cost plant $f_j$ | [8, 10, 7, 9] M-IDR |
| Fixed cost DC $g_k$ | [3, 4, 3.5] M-IDR |
| $\alpha$ (faktor emisi) | 0.00021 ton CO₂/ton-km |

### 4.2 Perhitungan Iterasi Benders (Manual Trace)

**Iterasi 1 — MP Relaxation:**
MP tanpa cut apapun memilih $u_j = 1$ untuk semua $j$ (karena biaya tetap rendah). Misalkan dipilih subset: $u_1 = u_3 = 1$, $v_1 = 1$ (MP lower bound = 18 M-IDR + η).

**SP dengan $\bar{u}_1 = \bar{u}_3 = \bar{v}_1 = 1$:** SP diselesaikan sebagai LP murni (variabel kontinyu). Misalkan biaya transportasi total optimum = 47,3 M-IDR, sehingga η = 47,3. **Primal bound = 18 + 47,3 = 65,3 M-IDR; Dual bound = 65,3 M-IDR** → konvergen pada iterasi ini untuk subset tersebut.

**Iterasi 2 — Tambahkan Cut:** Dual SP menghasilkan vektor π. Misalkan:
- $\pi_a = [1.2, 1.0, 1.3, 0.9, 1.1, 1.4]$ untuk kendala kapasitas farm,
- $\pi_b = [0.8, 0.7, 0.9, 0.6]$ untuk kendala kapasitas plant.

Cut yang ditambahkan:
$$\eta \geq 12{,}500 - 1.2 u_1 - 0.8 u_2 - 1.0 u_3 - 0.7 u_4 - 1.3 v_1 - 1.1 v_2 - 1.4 v_3$$

**Iterasi 3 — Solusi Akhir:** Setelah 4–6 iterasi, konvergen pada konfigurasi:
$$u^* = (1, 0, 1, 0), \quad v^* = (1, 1, 0)$$

**Hasil optimal:**
- Total biaya: $Z_1^* = 8 + 7 + 3 + 4 + 47{,}3 = 69