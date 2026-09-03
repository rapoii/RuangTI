# 3045 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Pakai Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi *Closed-Loop Supply Chain* (CLSC) yang Mempertimbangkan Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Pensiun (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (*Electric Vehicle*/EV) global telah menciptakan tantangan lingkungan dan rantai pasok baru yang sangat strategis bagi insinyur industri. Berdasarkan proyeksi International Energy Agency (IEA) yang dirujuk oleh JIANG & TANG (2025) dalam proceeding ICLSE 2024 (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), lebih dari 14 juta unit baterai lithium-ion (LIB) pensiun akan dihasilkan secara global pada dekade ini, dengan pasar baterai bekas ini bernilai ekonomis melampaui USD 30 miliar. Baterai pensiun tersebut tidak serta-merta menjadi limbah toksik; kapasitas residunya (*State of Health*/SOH) umumnya masih berada di rentang 70%–80% sehingga masih layak untuk *echelon utilization*—yaitu repurposing menjadi *Battery Energy Storage System* (BESS) untuk aplikasi *second-life* seperti penstabilan jaringan fotovoltaik, *peak shaving* industri, atau *backup power* telekomunikasi.

Urgensi strategis dari riset CLSC ini diperkuat oleh Shin, Kim & Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) yang menunjukkan bahwa rantai pasok baterai menghadapi tiga sumber ketidakpastian utama: (1) fluktuasi kuantitas pengembalian (*return flow*), (2) degradasi kualitas fisikokimia baterai yang bersifat stokastik, dan (3) ketidakstabilan harga material kritis seperti litium, kobalt, dan nikel. JIANG & TANG (2025) kemudian mengusulkan arsitektur CLSC multi-tujuan yang secara simultan mengoptimalkan keputusan alokasi baterai pensiun antara dua jalur pemulihan: **jalur *echelon utilization*** (langsung ke pasar BESS) dan **jalur *recycling remanufacturing*** (dekomposisi material melalui hidrometalurgi atau pirometalurgi). 

Konteks industrial ini relevan bagi Indonesia, yang memiliki target ambisius net-zero emission 2060 dan mendorong adopsi EV melalui Permen ESDM No. 13/2020. Namun, belum ada *reverse logistics infrastructure* nasional yang terkoordinasi untuk baterai pensiun. Oleh karena itu, model kuantitatif dari JIANG & TANG (2025) serta pendekatan *robust optimization* dari Shin, Kim & Jeong (2024) menjadi fondasi teoretis yang sangat dibutuhkan untuk merancang *closed-loop supply chain* yang tangguh, layak secara ekonomi, dan ramah lingkungan di konteks manufaktur Indonesia.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC yang dibangun oleh JIANG & TANG (2025) dalam DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) mengintegrasikan tiga subsistem keputusan: **(i) lokasi fasilitas pemulihan**, **(iii) alokasi aliran baterai pensiun**, dan **(iii) penentuan harga jual di pasar sekunder**. Formulasi inti model dirangkum dalam struktur program bilangan bulat campuran (*Mixed-Integer Linear Programming*/MILP) yang tujuannya meminimalkan total biaya logistik rantai pasok neto.

### 2.1 Parameter dan Variabel Keputusan

Misalkan $I$ adalah himpunan titik koleksi baterai pensiun (collection centers), $J$ adalah himpunan pusat inspeksi/grading, $K$ adalah himpunan fasilitas *echelon utilization*, dan $L$ adalah himpunan fasilitas *recycling remanufacturing*. Variabel keputusan utama didefinisikan sebagai:

$$
x_{ijkl} \geq 0 \quad \text{(kuantitas baterai pensiun yang mengalir dari } i \text{ ke } k \text{ atau } l\text{)}
$$
$$
y_k, y_l \in \{0,1\} \quad \text{(variabel biner pembukaan fasilitas)}
$$
$$
p_k, p_l \geq 0 \quad \text{(harga jual produk di pasar sekunder)}
$$

### 2.2 Fungsi Objektif

JIANG & TANG (2025) merumuskan fungsi tujuan sebagai minimisasi biaya total rantai pasok yang mencakup biaya koleksi $c^c$, biaya transportasi $c^t$, biaya grading $c^g$, biaya *echelon* $c^e$, biaya *recycling* $c^r$, dan penalti lingkungan $c^{env}$:

$$
\min Z = \sum_{i \in I} \sum_{j \in J} c_{ij}^{t} x_{ij} + \sum_{j \in J} \sum_{k \in K} c_{jk}^{t} x_{jk} + \sum_{j \in J} \sum_{l \in L} c_{jl}^{t} x_{jl} + \sum_{k \in K} (F_k y_k + \sum_{k} c_k^{e} x_k) + \sum_{l \in L} (F_l y_l + \sum_{l} c_l^{r} x_l) + c^{env} \sum_{l} (1-\eta_r) x_l
$$

di mana $\eta_r$ adalah tingkat efisiensi ekstraksi material pada fasilitas recycling, dan $F_k, F_l$ adalah *fixed cost* investasi fasilitas.

### 2.3 Kendala Utama

**Kendala keseimbangan aliran (*flow balance*)** di setiap titik koleksi:
$$
\sum_{j \in J} x_{ij} = Q_i \quad \forall i \in I
$$
dengan $Q_i$ adalah jumlah baterai pensiun yang dikembalikan di titik koleksi $i$.

**Kendala permintaan pasar *second-life*:**
$$
\sum_{i \in I} \sum_{k \in K} x_{ijk} \leq D_k(p_k) \quad \forall k \in K
$$
di mana $D_k(p_k)$ adalah fungsi permintaan *second-life* (misalnya $\alpha_k - \beta_k p_k$).

**Kendala *echelon grading threshold*:**
$$
\sum_{k \in K} x_{ijk} \leq \theta \sum_{j \in J} x_{ij} \quad \forall i \in I
$$
dengan $\theta$ merepresentasikan proporsi baterai dengan SOH $\geq 70\%$ yang dialokasikan ke *echelon utilization*. Sisanya $(1-\theta)$ dialokasikan ke *recycling remanufacturing*.

### 2.4 Model *Robust Counterpart* (dari Shin, Kim & Jeong, 2024)

Untuk menangani ketidakpastian $Q_i$ dan harga material, Shin, Kim & Jeong (2024) (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) memperkenalkan pendekatan *robust optimization* dengan *budget of uncertainty* $\Gamma$:

$$
\sum_{i \in I} \sum_{j \in J} x_{ij} \geq Q_i^{nom} + \sum_{i \in I} \hat{q}_i z_i, \quad \sum_{i} z_i \leq \Gamma, \quad 0 \leq z_i \leq 1
$$

Formulasi ini menjamin bahwa solusi tetap layak (*feasible*) pada seluruh skenario ketidakpastian dalam *uncertainty set*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model JIANG & TANG (2025) mensyaratkan SOP berlapis yang mengintegrasikan inspeksi teknis, *reverse logistics*, dan keputusan alokasi berbasis *echelon threshold*. Arsitektur proses yang dirancang mengikuti enam tahapan utama:

### 3.1 Tahap 1 – Koleksi dan Logistik Terbalik
Baterai pensiun dikumpulkan dari dealer EV dan operator armada melalui *take-back network*. Konsentrasi jaringan mengikuti model *hub-and-spoke* dimana *regional collection hubs* ditempatkan di kota-kota dengan densitas > 50.000 unit EV. Modul transportasi mengikuti UN Model Regulations untuk pengangkutan barang berbahaya Kelas 9 (UN 3480/3481), dengan suhu wadah terkontrol pada rentang 15–25°C.

### 3.2 Tahap 2 – Diagnosis dan *State of Health* (SOH) Assessment
Setiap baterai melewati *cell-level testing* menggunakan protokol *hybrid pulse power characterization* (HPPC) dan electrochemical impedance spectroscopy (EIS). Output SOH $\sigma$ menentukan jalur:
- $\sigma \geq 0.80$ → kandidat *echelon utilization* premium (BESS frekuensi tinggi)
- $0.70 \leq \sigma < 0.80$ → kandidat BESS stasioner standar
- $\sigma < 0.70$ → jalur *recycling remanufacturing* (dekomposisi material)

### 3.3 Tahap 3 – Keputusan Alokasi (*Echelon vs Recycling*)
Tahap ini diselesaikan dengan model MILP pada Bagian 2. Untuk aplikasi skala industri, perangkat lunak optimasi (misalnya Gurobi atau CPLEX) dengan *branch-and-bound*求解 digunakan pada dataset operasional.

### 3.4 Tahap 4 – *Echelon Utilization* (Repurposing)
Baterai dengan SOH layak dibongkar, dicocokkan (*matching*) ke modul-modul homogen, dan dirakit ulang menjadi BESS sesuai standar IEC 62933 (Electrical Energy Storage Systems) dan UL 1974 (Evaluation for Repurposing Batteries).

### 3.5 Tahap 5 – *Recycling Remanufacturing*
Modul yang tidak lolos *echelon* dikirim ke fasilitas hidrometalurgi dengan proses leaching menggunakan H₂SO₄ + H₂O₂, menghasilkan *black mass* yang kemudian diproses untuk回收 litium, kobalt, dan nikel. Standar rujukan: EU Battery Regulation 2023/1542 yang mensyaratkan recovery rate minimal 90% untuk Co/Ni dan 50% untuk Li pada tahun 2027.

### 3.6 Tahap 6 – Distribusi Pasar Sekunder dan Loop Material
Produk *echelon* dijual ke operator jaringan listrik atau *behind-the-meter* BESS, sementara material hasil回收 dimasukkan kembali ke lini produksi baterai baru (*closed-loop material flow*).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan model JIANG & TANG (2025), disajikan studi kasus pada sebuah klaster EV di Jakarta-Bandung dengan parameter berikut:

### 4.1 Parameter Input Industri

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Baterai pensiun yang dikembalikan | $Q_i$ | 50.000 | unit/tahun |
| Proporsi SOH ≥ 70% | $\theta$ | 0,60 | – |
| Biaya koleksi | $c^c$ | 25 | USD/unit |
| Biaya transportasi | $c^t$ | 8 | USD/unit·km |
| Biaya grading | $c^g$ | 12 | USD/unit |
| Biaya *echelon* | $c^e$ | 45 | USD/unit |
| Biaya *recycling* | $c^r$ | 60 | USD/unit |
| Biaya tetap fasilitas *echelon* | $F_k$ | 800.000 | USD |
| Biaya tetap fasilitas *recycling* | $F_l$ | 2.000.000 | USD |
| Harga jual BESS *second-life* | $p_k$ | 95 | USD/kWh |
| Harga jual material回收 | $p_l$ | 7,5 | USD/kg |
| Recovery rate | $\eta_r$ | 0,92 | – |
| Kapasitas rata-rata baterai | $C$ | 60 | kWh |
| Massa baterai | $m$ | 350 | kg |

### 4.2 Perhitungan Aliran Optimal

Baterai pensiun total: $Q = 50.000$ unit/tahun.

**Alokasi ke *echelon utilization*:**
$$
x_{echelon} = \theta \cdot Q = 0{,}60 \times 50.000 = 30.000 \text{ unit/tahun}
$$
Energi *second-life* yang dapat dijual: $30.000 \times 60 \text{ kWh} = 1.800.000$ kWh/tahun.

**Alokasi ke *recycling remanufacturing*:**
$$
x_{recycling} = (1-\theta) \cdot Q = 0{,}40 \times 50.000 = 20.000 \text{ unit/tahun}
$$
Massa baterai ke daur ulang: $20.000 \times 350 = 7.000.000$ kg/tahun.
Material berguna yang diekstraksi: $0{,}92 \times 7.000.000 = 6.440.000$ kg/tahun.

### 4.3 Pendapatan Pasar Sekunder

$$
\text{Revenue}_{echelon} = 1.800.000 \times 95 = 171.000.000 \text{ USD/tahun}
$$
$$
\text{Revenue}_{recycling} = 6.440.000 \times 7{,}5 = 48.300.000 \text{ USD/tahun}
$$
$$
\text{Revenue Total} = 219.300.000 \text{ USD/tahun}
$$

### 4.4 Biaya Operasional CLSC

$$
C_{koleksi} = 50.000 \times 25 = 1.250.000 \text{ USD}
$$
$$
C_{grading} = 50.000 \times 12 = 600.000 \text{ USD}
$$
$$
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
