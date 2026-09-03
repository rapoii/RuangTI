# 1988 — Pemilihan Strategi Solusi untuk Penjadwalan Automated Guided Vehicle (AGV) dalam Produksi Menggunakan Machine Learning

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Choosing Solution Strategies for Scheduling Automated Guided Vehicles in Production Using Machine Learning*
**Jurnal & Sitasi Utama:** Felicia Schweitzer, Günter Bitsch, Louis Louw (2023). *Applied Sciences*, Vol. 13, Issue 2, Article 806. DOI: [https://doi.org/10.3390/app13020806](https://doi.org/10.3390/app13020806)
**Sitasi Pendukung:** Diego Navarro-Cabrera, Niceto Rafael Luque Sola, Ros Vidal, Eduardo (2022). *Zenodo (CERN European Organization for Nuclear Research)*, Deliverable WP3 D3.1. DOI: [https://doi.org/10.5281/zenodo.7575244](https://doi.org/10.5281/zenodo.7575244)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur menuju paradigma *smart manufacturing* (Industri 4.0) telah memposisikan *Automated Guided Vehicle* (AGV) sebagai elemen kritis dalam arsitektur logistik internal pabrik modern. Schweitzer, Bitsch, dan Louw (2023) dalam publikasi mereka di jurnal *Applied Sciences* menegaskan bahwa AGV memiliki kontribusi signifikan terhadap peningkatan fleksibilitas produksi karena kemampuannya melakukan adaptasi lintasan, penjadwalan ulang (*rescheduling*), dan integrasi dengan sistem eksekusi manufaktur (MES). DOI [10.3390/app13020806](https://doi.org/10.3390/app13020806) menunjukkan bahwa produktivitas sistem manufaktur secara keseluruhan sangat bergantung pada kualitas jadwal yang dihasilkan, di mana *makespan* dan *delay* menjadi dua metrik utama yang menentukan efisiensi biaya produksi.

Permasalahan fundamental yang diidentifikasi oleh Schweitzer et al. (2023) adalah bahwa algoritma penjadwalan tradisional—seperti *First-Come-First-Served* (FCFS), *Shortest Processing Time* (SPT), atau heuristik berbasis aturan dispatching—memiliki keterbatasan adaptif terhadap dinamika lingkungan produksi. Perubahan kondisi lantai produksi, seperti kemacetan jalur (*congestion*), kerusakan kendaraan, variasi *order arrival*, dan *bottleneck* workstation, seringkali tidak tertangani secara real-time oleh algoritma deterministik. Lebih lanjut, paper tersebut menunjukkan secara empiris bahwa performa algoritma penjadwalan sangat tergantung pada karakteristik spesifik dari *scheduling problem* yang dihadapi (*no free lunch theorem*), sehingga pemilihan strategi solusi tidak dapat dilakukan secara seragam.

Urgensi ekonomi dari topik ini sangat substansial: dalam studi kasus Schweitzer et al. (2023), peningkatan kualitas jadwal AGV dapat menghasilkan penghematan biaya produksi hingga 15–25% melalui minimasi *makespan* dan *delay*. Konteks ini menjadi semakin relevan ketika manufaktur bergerak menuju konfigurasi *mass customization*, di mana volume produksi lebih kecil tetapi variasi SKU lebih tinggi, sehingga kompleksitas penjadwalan meningkat secara eksponensial. Sebagai komplementer, Navarro-Cabrera et al. (2022) dalam deliverable proyek EUROfusion (DOI [10.5281/zenodo.7575244](https://doi.org/10.5281/zenodo.7575244)) menekankan pentingnya *advanced motion control* pada level kontrol lapis kedua (*Layer 2*) yang berfungsi sebagai jembatan antara penjadwalan tingkat tinggi dengan eksekusi aktuator di lantai produksi, memastikan bahwa keputusan penjadwalan benar-benar diterjemahkan menjadi perilaku fisik AGV yang aman dan efisien.

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis permasalahan penjadwalan AGV yang diangkat Schweitzer et al. (2023) dapat dimodelkan sebagai *job shop scheduling problem* (JSSP) dengan karakteristik transportasi. Himpunan dasar model mencakup:

- **Himpunan pekerjaan (jobs):** $\mathcal{J} = \{J_1, J_2, \ldots, J_n\}$
- **Himpunan AGV (vehicles):** $\mathcal{V} = \{V_1, V_2, \ldots, V_m\}$
- **Himpunan workstation:** $\mathcal{W} = \{W_1, W_2, \ldots, W_k\}$
- **Matriks waktu proses:** $P_{ij}$ = waktu proses pekerjaan $i$ di workstation $j$
- **Matriks jarak tempuh:** $D_{uv}$ = jarak antara workstation $u$ dan $v$

**Fungsi tujuan utama** yang diminimasi adalah *makespan* total sistem:

$$C_{max} = \min \left( \max_{J_i \in \mathcal{J}} C_i \right)$$

di mana $C_i$ adalah *completion time* pekerjaan $i$. Fungsi tujuan sekunder mencakup minimasi total *tardiness*:

$$T_{total} = \sum_{i=1}^{n} \max(0, C_i - d_i)$$

di mana $d_i$ adalah *due date* pekerjaan $i$.

Untuk AGV, biaya transportasi ditambahkan sebagai komponen penting:

$$C_{max}^{AGV} = \min \left( \max_{i} \left( \sum_{j=1}^{k_i} P_{ij} + \sum_{r=1}^{r_i} \frac{D_{uv}}{v_{agv}} \right) \right)$$

di mana $v_{agv}$ adalah kecepatan rata-rata AGV, $k_i$ jumlah operasi pekerjaan $i$, dan $r_i$ jumlah segmen perjalanan. Waktu tunggu karena konflik jalur (*conflict delay*) didefinisikan sebagai:

$$\Delta_{conflict} = \sum_{e \in E} \mathbb{1}_{conflict}(e) \cdot t_{wait}(e)$$

di mana $E$ adalah himpunan *edge* dalam grafik lintasan, dan $\mathbb{1}_{conflict}(e)$ adalah fungsi indikator apakah terjadi konflik pada edge $e$.

Schweitzer et al. (2023) mengusulkan pendekatan *meta-learning* berbasis fitur (*feature-based meta-learning*) untuk memilih algoritma penjadwalan optimal. Vektor fitur $\mathbf{x} \in \mathbb{R}^p$ merepresentasikan karakteristik instance problem:

$$\mathbf{x} = [x_1, x_2, \ldots, x_p]^T$$

di mana fitur-fitur tersebut meliputi *job density* ($\rho = n/k$), *due date tightness* ($\tau = 1 - \bar{d}/C_{max}^{LB}$), *machine utilization*, dan rasio AGV terhadap pekerjaan ($\eta = m/n$). Model klasifikasi *decision tree* kemudian memetakan fitur ini ke rekomendasi algoritma:

$$f: \mathbb{R}^p \rightarrow \mathcal{A} = \{A_1, A_2, \ldots, A_s\}$$

dengan distribusi probabilitas bersyarat $P(A_k | \mathbf{x})$ yang dipelajari dari dataset benchmark. Akurasi klasifikasi dievaluasi menggunakan *k-fold cross-validation*:

$$CV_{acc} = \frac{1}{k} \sum_{i=1}^{k} \frac{TP_i + TN_i}{N_i}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari kerangka Schweitzer et al. (2023) mengikuti *Standard Operating Procedure* (SOP) berlapis:

**Tahap 1 — Akuisisi Data Historis.** Mengumpulkan dataset penjadwalan historis minimal 1000 *instance* yang mencakup variasi karakteristik problem: jumlah pekerjaan (10–100), jumlah AGV (2–20), kompleksitas routing, dan pola *due date*. Fitur diekstraksi menggunakan rumus *feature engineering* standar industri:

$$x_{utilization} = \frac{\sum_{i=1}^{n} \sum_{j=1}^{k} P_{ij}}{m \cdot H_{planning}}$$

**Tahap 2 — Benchmarking Algoritma.** Evaluasi *s* algoritma kandidat (misalnya, FCFS, SPT, *Genetic Algorithm*, *Simulated Annealing*, *Tabu Search*) pada setiap *instance* menggunakan simulator diskrit (*discrete-event simulation*). Performa dinormalisasi menjadi *performance ratio*:

$$PR(A_k, \mathbf{x}_i) = \frac{C_{max}(A_k, \mathbf{x}_i)}{C_{max}^{LB}(\mathbf{x}_i)}$$

**Tahap 3 — Pelatihan Model Meta-Learning.** Algoritma *decision tree classifier* dilatih dengan input fitur $\mathbf{x}_i$ dan label $\arg\min_k PR(A_k, \mathbf{x}_i)$. Validasi menggunakan *10-fold cross-validation*.

**Tahap 4 — Integrasi dengan Control Layer.** Mengacu pada arsitektur kontrol berlapis Navarro-Cabrera et al. (2022, DOI [10.5281/zenodo.7575244](https://doi.org/10.5281/zenodo.7575244)), output meta-learner diteruskan ke *Layer 2 (control layer)* yang menerjemahkan jadwal abstrak menjadi perintah *motion control* spesifik: referensi posisi, kecepatan, dan profil akselerasi untuk setiap AGV. Loop kontrol umpan balik (*feedback control loop*) beroperasi pada frekuensi tinggi:

$$u(t) = K_p \cdot e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de(t)}{dt}$$

di mana $e(t)$ adalah *tracking error* antara posisi referensi dan posisi aktual AGV.

**Tahap 5 — Monitoring dan Retraining.** Model dievaluasi *online* dengan metrik *prediction accuracy* dan *regret*:

$$R_{regret}(t) = \sum_{\tau=1}^{t} \left[ C(A^*, \mathbf{x}_\tau) - C(A_\tau, \mathbf{x}_\tau) \right]$$

Jika $R_{regret}(t)/t > \epsilon_{threshold}$, model di-retrain dengan data baru.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik komponen otomotif dengan 15 workstation dan 5 AGV, memproses 24 job dengan *due date* terdistribusi uniform pada $[50, 200]$ menit.

**Parameter Input:**
- $n = 24$ pekerjaan
- $m = 5$ AGV
- $k = 15$ workstation
- Kecepatan AGV: $v_{agv} = 30$ m/menit
- Waktu proses rata-rata: $\bar{P} = 12$ menit
- Due date tightness: $\tau = 0.6$

**Langkah Perhitungan:**

*Langkah 1 — Hitung Density Fitur:*
$$\rho = n/k = 24/15 = 1.6$$
$$\eta = m/n = 5/24 = 0.208$$
$$\tau = 1 - \bar{d}/C_{max}^{LB} = 0.6$$

*Langkah 2 — Estimasi Makespan Lower Bound:*
$$C_{max}^{LB} = \max \left( \max_i \sum_j P_{ij}, \frac{\sum_i \sum_j P_{ij}}{m} \right)$$
Untuk workload total = $24 \times 12 = 288$ menit-operasi:
$$C_{max}^{LB} = \max(150, 288/5) = \max(150, 57.6) = 150 \text{ menit}$$

*Langkah 3 — Evaluasi Tiga Algoritma pada Instance:*

| Algoritma | $C_{max}$ (menit) | $PR$ | $T_{total}$ (menit) |
|-----------|-------------------|------|----------------------|
| FCFS | 187 | 1.247 | 420 |
| SPT | 172 | 1.147 | 285 |
| *Genetic Algorithm* (GA, pop=50, gen=100) | 158 | 1.053 | 198 |

*Langkah 4 — Keputusan Meta-Learner:* Berdasarkan vektor fitur $\mathbf{x} = [1.6, 0.208, 0.6]^T$, *decision tree* memprediksi GA sebagai algoritma optimal dengan keyakinan 87%.

*Langkah 5 — Simulasi Biaya Produksi:*

Asumsikan biaya produksi per menit延误 (*tardiness cost*) = €8/menit dan biaya operasional AGV per menit = €0.5/menit.

$$Cost_{FCFS} = (187 - 158) \times 5 \times 0.5 + 420 \times 8 = 72.5 + 3360 = €3432.5$$
$$Cost_{SPT} = (172 - 158) \times 5 \times 0.5 + 285 \times 8 = 35 + 2280 = €2315$$
$$Cost_{GA} = 0 + 198 \times 8 = €1584$$

**Interpretasi Manajerial:** Pemilihan algoritma GA berdasarkan rekomendasi meta-learner menghasilkan penghematan €1848.5 (53.9%) dibanding FCFS dan €731 (31.6%) dibanding SPT. *Makespan* berkurang 15.5% dari FCFS ke GA, mengkonfirmasi tesis Schweitzer et al. (2023) bahwa pemilihan algoritma adaptif memberikan dampak ekonomi signifikan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Evaluasi Kritis.** Pendekatan Schweitzer et al. (2023) memiliki beberapa limitasi metodologis. Pertama, akurasi meta-learner sangat bergantung pada kualitas dan keragaman dataset benchmark; instance yang *out-of-distribution* terhadap data pelatihan dapat menghasilkan prediksi yang误导. Kedua, *decision tree* memiliki interpretabilitas tinggi tetapi rentan terhadap *overfitting* pada fitur dengan kardinalitas besar; metode ensemble (*Random Forest*, *Gradient Boosting*) mungkin memberikan generalisasi lebih baik. Ketiga, paper ini belum sepenuhnya membahas aspek *real-time rescheduling* ketika terjadi disrupsi tak terduga seperti *vehicle breakdown* atau *order cancellation*.

**Aplikasi Lintas Sektor.** Kerangka pemilihan strategi penjadwalan ini dapat di-*extend* ke berbagai domain: (1) **Warehouse logistics** — penjadwalan *autonomous mobile robots* (AMR) di pusat distribusi e-commerce dengan multi-pick path optimization; (2) **Container terminal** — penjadwalan *Automated Stacking Cranes* (ASC) dan AGV untuk optimasi *yard crane scheduling*; (3) **Healthcare** — penjadwalan *autonomous mobile robots* untuk distribusi obat di rumah sakit besar; (4) **Nuclear fusion facility** — sesuai dengan Deliverable D3.1 (Navarro-Cabrera et al., 2022, DOI [10.5281/zenodo.7575244](https://doi.org.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
