# 2517 — Strategi Closed-Loop Supply Chain untuk Baterai Power Bekas: Optimasi Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain Strategy — Retired Power Battery Echelon Utilization & Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan logistik dan lingkungan baru yang kompleks, yaitu akumulasi baterai lithium-ion (LiB) pensiun (*retired power batteries*). Berdasarkan proyeksi yang dilaporkan dalam literatur rantai pasok baterai, volume baterai pensiun di pasar terbesar dunia diproyeksikan melampaui 1,2 juta ton pada 2030 (JIANG & TANG, 2025). Setelah State of Health (SoH) turun di bawah ambang 70–80%, baterai EV tidak lagi layak untuk aplikasi otomotif tetapi masih memiliki kapasitas residu yang signifikan—menjadikannya kandidat utama untuk **pemanfaatan bertingkat (*echelon utilization*)** sebelum proses daur ulang material (*recycling remanufacturing*) dilaksanakan. Dual-track valorisasi inilah yang menjadi fokus utama paper JIANG & TANG (2025), yang memandang baterai pensiun sebagai aset logistik bernilai tinggi yang memerlukan keputusan alokasi jaringan closed-loop yang presisi.

Urgensi strategis dari topik ini bersifat tiga dimensi. Pertama, dimensi regulasi: Extended Producer Responsibility (EPR) di Uni Eropa, Battery Directive 2023/1542, dan kebijakan China tentang daur ulang baterai mengamanatkan tingkat回收 (*recycling rate*) minimal 50% pada 2026. Kedua, dimensi ekonomi: material kritis seperti litium, kobalt, dan nikel memiliki volatilitas harga tinggi, menjadikan baterai pensiun sebagai *urban mining* yang strategis. Ketiga, dimensi teknis: variasi SoH antar batch baterai pensiun menuntut model keputusan yang mampu membedakan antara jalur echelon (misalnya *stationary energy storage system*/SESS) dan jalur recycling-remanufacturing secara optimal. Tanpa strategi closed-loop supply chain (CLSC) yang robust, pelaku industri menghadapi inefisiensi alokasi aset bernilai miliaran dolar dan risiko kebocoran material ke tempat pembuangan akhir.

Konstribusi paper JIANG & TANG (2025) terletak pada formulasi keputusan dialokatif yang secara simultan mengoptimasi pemilihan antara echelon utilization dan recycling-remanufacturing dengan mempertimbangkan parameter kualitas baterai, kapasitas fasilitas, dan biaya transport-proses. Pendekatan ini selaras dengan model robust CLSC yang dikemukakan oleh Shin, Kim, & Jeong (2024), yang memperkenalkan *return management system* dengan parameter ketidakpastian (*uncertainty set*) untuk menjaga kestabilan keputusan pada skenario fluktuasi return flow. Integrasi keduanya memberikan kerangka keputusan yang cocok untuk konteks industri baterai ber-volume tinggi dan ketidakpastian return yang tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC yang dibangun mengikuti struktur jaringan multi-echelon dengan dua lintasan reverse logistics utama: **Echelon Channel** dan **Recycling Channel**. Formulasi matematis diadaptasi dari kerangka JIANG & TANG (2025) dengan prosedur robust optimization mengikuti Shin et al. (2024).

### 2.1 Notasi Himpunan dan Parameter

- $I = \{1,2,\dots,i\}$ : himpunan pusat pengumpulan (*collection centers*)
- $J = \{1,2,\dots,j\}$ : himpunan fasilitas echelon utilization
- $K = \{1,2,\dots,k\}$ : himpunan fasilitas daur ulang/remanufaktur
- $M = \{1,2,\dots,m\}$ : himpunan pasar sekunder (SESS, EV低速, telekomunikasi)
- $R = \{r_1, r_2, r_3\}$ : kelas kualitas baterai pensiun berdsarkan rentang SoH; $r_1$: 70–80%, $r_2$: 60–70%, $r_3$: <60%

**Parameter:**
- $q_{ir}$ : volume return baterai kelas $r$ di pusat $i$ (unit/tahun)
- $c^{e}_{ij}$ : biaya transportasi dari $i$ ke fasilitas echelon $j$ (RMB/unit)
- $c^{r}_{ik}$ : biaya transportasi dari $i$ ke fasilitas recycling $k$
- $p^{e}_{jr}$ : biaya echelon processing untuk kelas $r$ di $j$
- $p^{r}_{kr}$ : biaya recycling-remanufacturing untuk kelas $r$ di $k$
- $v_{jr}$ : nilai jual baterai echelon kelas $r$ (RMB/unit)
- $\theta_{kr}$ : yield material recovery kelas $r$ (0–1)
- $U_j, U_k$ : kapasitas fasilitas echelon dan recycling
- $d_m$ : permintaan pasar sekunder $m$

### 2.2 Variabel Keputusan

$$x_{ijr} \in \mathbb{R}^+ : \text{aliran baterai kelas } r \text{ dari } i \text{ ke fasilitas echelon } j$$
$$y_{ikr} \in \mathbb{R}^+ : \text{aliran baterai kelas } r \text{ dari } i \text{ ke fasilitas recycling } k$$
$$z_{jm} \in \mathbb{R}^+ : \text{aliran baterai echelon dari } j \text{ ke pasar } m$$
$$w_k \in \{0,1\} : \text{aktivasi fasilitas recycling } k$$

### 2.3 Fungsi Tujuan (Base Model)

$$\min Z = \sum_{i,j,r} c^{e}_{ij} x_{ijr} + \sum_{i,k,r} c^{r}_{ik} y_{ikr} + \sum_{j,r} p^{e}_{jr} x_{ijr} + \sum_{k,r} p^{r}_{kr} y_{ikr} + F_k w_k$$

$$- \sum_{j,m,r} v_{jr} z_{jm} - \sum_{k,r} \theta_{kr} \cdot \pi_r y_{ikr}$$

di mana $\pi_r$ adalah harga jual material daur ulang kelas $r$, dan $F_k$ adalah fixed cost fasilitas $k$.

### 2.4 Kendala Dasar

**(i) Konservasi aliran return di pusat pengumpulan:**
$$\sum_j x_{ijr} + \sum_k y_{ikr} = q_{ir} \quad \forall i, r$$

**(ii) Kapasitas fasilitas:**
$$\sum_{i,r} x_{ijr} \leq U_j \quad \forall j \qquad \sum_{i,r} y_{ikr} \leq U_k \cdot w_k \quad \forall k$$

**(iii) Kelayakan alokasi kelas kualitas (JIANG & TANG, 2025):**
$$x_{ij, r_3} = 0 \quad \forall i, j \quad \text{(kelas } r_3 \text{ tidak layak echelon)}$$

**(iv) Pemenuhan permintaan pasar sekunder:**
$$\sum_j z_{jm} \geq d_m \quad \forall m$$

**(v) Konservasi di fasilitas echelon:**
$$\sum_m z_{jm} = \sum_{i,r} x_{ijr} \quad \forall j$$

### 2.5 Robust Counterpart (Shin et al., 2024)

Untuk menangani ketidakpastian return $q_{ir}$ dan permintaan $d_m$, didefinisikan *uncertainty set* box:

$$\mathcal{U} = \left\{ (q,d) : q_{ir} \in [\bar{q}_{ir}-\hat{q}_{ir},\ \bar{q}_{ir}+\hat{q}_{ir}],\ d_m \in [\bar{d}_m-\hat{d}_m,\ \bar{d}_m+\hat{d}_m] \right\}$$

Rob counterpart diperoleh melalui dualisasi:
$$\min Z = \text{(deterministic)} + \sum_{i,r} \hat{q}_{ir} \pi_{ir}^{+} + \sum_{i,r} \hat{q}_{ir} \pi_{ir}^{-} + \sum_m \hat{d}_m \gamma_m$$

dengan kendala dual $\pi_{ir}^{+}, \pi_{ir}^{-}, \gamma_m \geq 0$.

---

## 3. Metodologi Rekayasa & SOP Implementasi

Implementasi sistem CLSC baterai pensiun mengikuti prosedur operasional terstandar yang terdiri atas lima fase:

**Fase 1 – Pemetaan Aset & Segmentasi Kualitas.** Setiap baterai pensiun yang dikumpulkan di-*testing* menggunakan Battery Management System (BMS) untuk menentukan SoH, impedansi internal, dan riwayat siklus. Hasil pengujian menjadi input parameter $q_{ir}$.

**Fase 2 – Desain Jaringan Reverse Logistics.** Menentukan lokasi fasilitas echelon dan recycling dengan mempertimbangkan radius pengumpulan (umumnya ≤150 km untuk menekan emisi transport), akses terhadap pasar sekunder (SESS, telekomunikasi), dan kapasitas daur ulang regional. Algoritma *p-median* atau *facility location* dengan bobot biaya digunakan untuk menentukan lokasi optimal.

**Fase 3 – Pengambilan Keputusan Alokatif.** Model robust CLSC dijalankan dengan solver MILP (mis. Gurobi, CPLEX) untuk menentukan $x_{ijr}$, $y_{ikr}$, $z_{jm}$ yang optimal pada seluruh skenario ketidakpastian. **Diagram alir keputusan**:

```
[Return Battery @ Collection Center i]
            │
            ▼
    ┌───────────────────┐
    │  Classify SoH     │
    └───────┬───────────┘
            │
   ┌────────┴────────┐
   ▼                 ▼
[70-80% SoH]    [<70% SoH]
   │                 │
   ▼                 ▼
[Echelon     [Recycling-
 Facility]   Remanufacturing]
   │                 │
   ▼                 ▼
[Stationary  [Material Recovery
 Storage /   → Cathode Powder
 Low-speed   → Re-entry to
 EV Market]  Cell Production]
```

**Fase 4 – Eksekusi Logistik Terbalik.** Pengumpulan baterai menggunakan armada khusus dengan sertifikasi UN3480 (transportasi baterai lithium). Jalur *echelon* menggunakan moda standar (truk kontainer), jalur *recycling* mungkin memerlukan hazardous material handling.

**Fase 5 – Monitoring & Audit Sustainability.** KPI yang dipantau: *echelon conversion rate*, *material recovery yield*, *carbon footprint per ton baterai*, dan kepatuhan terhadap regulasi EPR.

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Skenario:** Sebuah operator CLSC baterai di Cina mengelola 100.000 unit baterai pensiun/tahun dari 3 pusat pengumpulan ($i=1,2,3$), dengan sebaran kelas kualitas: $q_{1,r_1}=15.000$, $q_{1,r_2}=10.000$, $q_{1,r_3}=5.000$; $q_{2,r_1}=12.000$, $q_{2,r_2}=9.000$, $q_{2,r_3}=4.000$; $