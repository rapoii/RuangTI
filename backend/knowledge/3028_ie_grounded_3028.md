# 3028 — Perencanaan Gerak Robot Otonom Berbasis Pembelajaran Penguatan dalam Sistem Manufaktur dan Logistik Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning (Perencanaan Gerak menggunakan Reinforcement Learning)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, in *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental lanskap operasional manufaktur, pergudangan, dan rantai pasok global. Salah satu pilar utama transformasi ini adalah adopsi masif *Autonomous Mobile Robots* (AMR) dan *Automated Guided Vehicles* (AGV) yang mampu bernavigasi secara otonom di lingkungan produksi yang semakin kompleks. Rahul Kala (2024) dalam chapter bukunya yang berjudul *Motion Planning Using Reinforcement Learning* menyoroti bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan kemampuan robot untuk merancang lintasan optimal dari konfigurasi awal ke konfigurasi tujuan dengan tetap memenuhi kendala operasional seperti halangan statis/dinamis, konsumsi energi, dan waktu siklus ([DOI: 10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Urgensi ekonomis dari penerapan AMR berbasis reinforcement learning (RL) sangat signifikan. Menurut proyeksi yang dikontekstualisasikan oleh Kala (2024), pasar global AMR diproyeksikan mencapai USD 14–18 miliar pada 2030, dengan CAGR >15%. Dalam konteks lantai pabrik, satu unit AMR dapat menggantikan 2–3 operator manual pada operasi *pick-and-place* dengan tingkat kesalahan mendekati nol, sehingga menurunkan *total cost of ownership* (TCO) hingga 30–40% selama siklus hidup 10 tahun. Kala menekankan bahwa pendekatan motion planning klasik seperti *A\**, *Rapidly-exploring Random Tree* (RRT), dan *Probabilistic Roadmap* (PRM) memiliki keterbatasan fatal ketika menghadapi lingkungan dinamis (misalnya, pekerja yang berpindah, AGV lain, atau perubahan tata letak gudang) karena algoritma tersebut umumnya mengasumsikan *fully observable, static environment* ([DOI: 10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). 

Lebih lanjut, Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-agent Systems* (SAMAS) memberikan perspektif pelengkap yang krusial: sistem multi-agen otonom tidak hanya harus mampu merencanakan gerakan, tetapi juga harus memiliki kapabilitas *Fault Detection, Isolation, and Reconstruction* (FDIR) untuk menjaga keberlanjutan operasional ketika terjadi malfungsi sensor, aktuator, atau jaringan komunikasi ([DOI: 10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Integrasi RL dengan *nonlinear filtering* (misalnya *Extended Kalman Filter* dan *Particle Filter*) memungkinkan agen untuk mengestimasi keadaan internalnya secara robust meskipun terdapat derau sensor dan kegagalan parsial. Sinergi kedua literatur ini menunjukkan bahwa rekayasa sistem AMR modern membutuhkan arsitektur perencanaan gerak yang adaptif (Kala, 2024) yang ditopang oleh mekanisme deteksi-responsi kegagalan real-time (Borah, 2024) untuk menjamin *Overall Equipment Effectiveness* (OEE) di atas 85%.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Markov Decision Process (MDP)

Permasalahan motion planning dengan reinforcement learning diformulasikan secara formal sebagai *Markov Decision Process* (MDP) berhingga dengan tupel $(S, A, P, R, \gamma)$ sesuai kerangka yang diuraikan oleh Kala (2024) ([DOI: 10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)):

- $S$ : himpunan berhingga keadaan (*states*), merepresentasikan konfigurasi robot dan lingkungannya, misalnya posisi diskret $(x, y)$ di grid lantai gudang.
- $A$ : himpunan berhingga aksi (*actions*), misal $\{ \text{utara, selatan, timur, barat}, \text{diam} \}$ untuk AMR 4-arah.
- $P(s'|s,a)$ : fungsi transisi probabilistik, yaitu peluang berpindah dari keadaan $s$ ke $s'$ ketika aksi $a$ dieksekusi.
- $R(s,a,s')$ : fungsi imbalan (*reward*) yang diterima setelah transisi.
- $\gamma \in [0,1)$ : faktor diskon yang menentukan bobot imbalan masa depan.

### 2.2. Persamaan Bellman dan Fungsi Nilai Optimal

Tujuan agen RL adalah mempelajari *policy* $\pi: S \rightarrow A$ yang memaksimalkan *expected discounted cumulative reward*. Fungsi nilai keadaan optimal $V^*(s)$ memenuhi **persamaan Bellman optimalitas**:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a) \left[ R(s,a,s') + \gamma \, V^*(s') \right]$$

Karena model transisi $P$ umumnya tidak diketahui dalam skenario industri nyata, Kala (2024) mengajukan pendekatan berbasis **Q-learning** yang mempelajari fungsi aksi-nilai $Q(s,a)$ secara langsung melalui interaksi. Aturan pembaruan Q-learning adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

dengan $\alpha \in (0,1]$ adalah *learning rate*, $r_{t+1} = R(s_t, a_t, s_{t+1})$ adalah imbalan langsung, dan $\delta_t = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)$ adalah **TD-error** (*temporal difference error*).

### 2.3. Desain Fungsi Imbalan untuk Navigasi Industri

Kala (2024) menekankan bahwa desain reward function merupakan keputusan rekayasa paling kritis. Untuk AMR gudang, struktur reward yang umum digunakan adalah:

$$R(s_t, a_t, s_{t+1}) = \begin{cases} +R_{\text{goal}} & \text{jika } s_{t+1} = s_{\text{goal}} \\ -R_{\text{collision}} & \text{jika terjadi tabrakan} \\ -R_{\text{step}} & \text{lainnya (biaya langkah)} \\ +R_{\text{progress}} \cdot d(s_t, s_{\text{goal}}) - d(s_{t+1}, s_{\text{goal}}) & \text{shaping reward} \end{cases}$$

Term *shaping reward* (berbasis perbedaan jarak Euclidean $d$) mempercepat konvergensi dengan memberikan sinyal kepadatan navigasi progresif. Borah (2024) menambahkan dimensi reward yang menggabungkan informasi keandalan sistem, misalnya penalti ketika *sensor confidence* turun di bawah ambang batas ([DOI: 10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

### 2.4. Eksplorasi vs Eksploitasi: Kebijakan $\varepsilon$-greedy

Untuk menyeimbangkan eksplorasi dan eksploitasi, kebijakan $\varepsilon$-greedy diterapkan:

$$\pi(a|s) = \begin{cases} \arg\max_{a} Q(s,a) & \text{dengan peluang } 1-\varepsilon \\ \text{acak uniform dari } A & \text{dengan peluang } \varepsilon \end{cases}$$

dengan **skema peluruhan** $\varepsilon_t = \varepsilon_{\min} + (\varepsilon_0 - \varepsilon_{\min}) e^{-\lambda t}$ di mana $\lambda$ adalah laju peluruhan. Kala merekomendasikan $\varepsilon_0 = 1{,}0$ dan $\varepsilon_{\min} = 0{,}05$ untuk sistem AMR industri ([DOI: 10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AMR berbasis RL di lingkungan industri mengikuti **SOP 7-tahap** yang disintesis dari pedoman Kala (2024) dan Borah (2024):

**Tahap 1 — Pemetaan Lingkungan & Diskretisasi State Space.** Lantai gudang dipetakan menjadi occupancy grid 2D dengan resolusi tipik $\Delta = 0{,}5$ m. Untuk gudang 50 m × 30 m dihasilkan $|S| = 100 \times 60 = 6.000$ keadaan. Sel terlarang (rak, dinding, zona eksklusif) ditandai bernilai 1.

**Tahap 2 — Definisi Action Space & Kinematika.** Untuk AMR dengan *differential drive*, ruang aksi adalah kecepatan linier $v \in \{0, v_{\text{nom}}\}$ dan kecepatan anguler $\omega \in \{-\omega_{\max}, 0, +\omega_{\max}\}$, menghasilkan $|A| = 6$ aksi diskret.

**Tahap 3 — Inisialisasi Sensor & Estimasi Keadaan (per Borah, 2024).** Modul *Extended Kalman Filter* dipasang untuk mengestimasi pose $(\hat{x}, \hat{y}, \hat{\theta})$ dari data *LiDAR* + *wheel odometry*. Covariance threshold $\text{tr}(P_k) > \sigma_{\text{thresh}}$ memicu flag degradasi sensor.

**Tahap 4 — Inisialisasi Q-table atau Jaringan Neural.** Untuk $|S| \leq 10.000$, gunakan tabel $$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.

$$
