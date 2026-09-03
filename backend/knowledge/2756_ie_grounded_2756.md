# 2756 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah mendorong kebutuhan mendesak akan sistem otonom yang mampu beroperasi dalam lingkungan produksi, distribusi, dan logistik dengan tingkat ketidakpastian yang tinggi. Rahul Kala (2024) dalam chapter *Autonomous Mobile Robots* menjelaskan bahwa perencanaan gerak (*motion planning*) merupakan kemampuan fundamental yang menentukan keberhasilan *Autonomous Mobile Robot* (AMR) di lantai produksi modern. Permasalahan klasik perencanaan gerak—seperti *path planning* untuk menghindari rintangan, navigasi pada lingkungan dinamis, dan optimalisasi waktu siklus—tidak dapat diselesaikan secara memadai menggunakan pendekatan konvensional berbasis *rule-based* atau algoritma deterministik seperti A* murni, karena kompleksitas ruang keadaan (*state space*) yang meledak secara eksponensial.

Kala (2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menekankan bahwa *Reinforcement Learning* (RL) memberikan paradigma baru di mana agen belajar melalui interaksi langsung dengan lingkungan (*trial-and-error*) untuk memaksimalkan sinyal imbalan kumulatif. Dalam konteks rantai pasok global yang bernilai triliunan dolar, kemampuan AMR untuk mengambil keputusan otonom dapat menurunkan biaya operasional logistik hingga 20–40%, mengurangi *downtime* akibat perencanaan ulang rute yang konstan, dan meningkatkan *throughput* gudang otomatis (ASRS). 

Melengkapi perspektif ini, Kaustav Borah (2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) dalam disertasinya mengembangkan kerangka *Smart Autonomous Multi-Agent Systems* (SAMAS) yang mengintegrasikan RL dengan *nonlinear filtering* untuk deteksi, isolasi, dan rekonstruksi kesalahan (*Fault Detection, Isolation, and Reconstruction*/FDIR). Integrasi ini relevan bagi industri karena sistem multi-agen dengan AMR menghadapi potensi kegagalan pada sensor, aktuator, maupun jaringan komunikasi—skenario yang menjadi nyata dalam praktik ketika *fleet* robot beroperasi selama 24/7 di pusat distribusi. Urgensi ekonomis dan teknis dari adopsi motion planning berbasis RL terletak pada tiga pilar: (1) reduksi biaya pemrograman ulang (*reprogramming cost*) ketika layout pabrik berubah; (2) kemampuan adaptasi terhadap lingkungan yang tidak terstruktur; dan (3) peningkatan keselamatan kerja melalui keputusan manuver yang halus dan dapat diprediksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Proses Keputusan Markov (MDP)

Kerangka teoretis utama yang digunakan Kala (2024) adalah *Markov Decision Process* (MDP), yang didefinisikan secara formal sebagai tuple:

$$\mathcal{M} = (\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$$

di mana $\mathcal{S}$ adalah himpunan keadaan (*states*), $\mathcal{A}$ adalah himpunan aksi (*actions*), $\mathcal{P}(s'|s,a)$ adalah probabilitas transisi keadaan, $\mathcal{R}(s,a)$ adalah fungsi imbalan (*reward*), dan $\gamma \in [0,1]$ adalah faktor diskonto temporal.

Tujuan agen RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

dengan *value function*遵守 Bellman optimality equation:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ \mathcal{R}(s,a) + \gamma \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a) \, V^*(s') \right]$$

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk ruang keadaan diskret yang besar atau kontinyu, Kala (2024) menggunakan Q-Learning dengan aturan pembaruan:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

di mana $\alpha$ adalah laju pembelajaran. Untuk masalah dengan ruang aksi kontinyu—khas pada motion planning dengan kecepatan dan sudut kemudi—digunakan **Deep Q-Network** (DQN) dengan parameter $\theta$ yang meminimalkan *loss function*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

dengan $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer*.

### 2.3 Policy Gradient dan PPO

Untuk motion planning dengan ruang aksi kontinyu, Kala (2024) merekomendasikan algoritma **Proximal Policy Optimization** (PPO) dengan *objective*:

$$L^{\text{CLIP}}(\theta) = \mathbb{E}_t \left[ \min\left( r_t(\theta) \hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t \right) \right]$$

di mana $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{\text{old}}}(a_t|s_t)}$ adalah rasio probabilitas, $\hat{A}_t$ adalah estimator *advantage function*, dan $\epsilon = 0.2$ adalah parameter kliping.

### 2.4 Formulasi Reward untuk Motion Planning

Fungsi imbalan dirancang untuk menyeimbangkan tiga tujuan: pencapaian target, penghindaran rintangan, dan kelancaran gerakan:

$$R(s_t, a_t) = w_1 \cdot \mathbb{1}_{\text{goal}} + w_2 \cdot d(s_t, s_{\text{obs}})^{-1} - w_3 \|a_t\|^2 - w_4 \Delta t$$

di mana $w_1, w_2, w_3, w_4$ adalah bobot tuning, $d(s_t, s_{\text{obs}})$ adalah jarak ke rintangan terdekat, dan $\|a_t\|^2$ adalah penalti energi.

### 2.5 Kerangka Multi-Agen Borah (2024)

Borah (2024) melengkapi dengan *Nonlinear Filter* (Extended Kalman Filter/Particle Filter) untuk estimasi keadaan sensor, dan penggabungan melalui arsitektur *Consensus-based*:

$$\hat{x}_t^{(i)} = \sum_{j \in \mathcal{N}(i)} w_{ij} \hat{x}_t^{(j)} + u_t^{(i)}$$

di mana $\hat{x}_t^{(i)}$ adalah estimasi keadaan agen $i$, $w_{ij}$ adalah bobot konsensus, dan $u_t^{(i)}$ adalah koreksi dari filter nonlinier.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti protokol bertahap sebagai berikut (disintesis dari Kala, 2024, dan diperkuat dengan kerangka FDIR Borah, 2024):

**Tahap 1 — Analisis Ruang Keadaan dan Pemodelan Lingkungan.** Lakukan pemetaan (*SLAM* — *Simultaneous Localization and Mapping*) menggunakan LiDAR 2D/3D. Representasikan lingkungan sebagai *occupancy grid* dengan resolusi $\Delta$ (umumnya 0,05–0,5 m). Tentukan *state space* $\mathcal{S}$ mencakup: posisi $(x,y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, dan jarak ke rintangan dalam 8 arah radial.

**Tahap 2 — Perancangan Fungsi Imbalan.** Tetapkan bobot reward berdasarkan prioritas operasional: $w_1 \gg w_2 > w_3 \approx w_4$. Kalibrasi menggunakan *simulation environment* (Gazebo, Isaac Sim) sebelum deployment nyata.

**Tahap 3 — Pelatihan dalam Simulasi.** Jalankan pelatihan menggunakan ribuan *episode* (≥ 100.000) pada simulator dengan parameter domain randomization: variasi koefisien gesekan, tingkat pencahayaan, dan posisi rintangan dinamis. Terapkan *curriculum learning*: mulai dari lingkungan kosong, bertahap tambah kompleksitas.

**Tahap 4 — Validasi dengan ISO 3691-4 dan ANSI/RIA R15.08.** Sebelum deployment, validasi kebijakan $\pi^*$ terhadap standar keselamatan robot industri, termasuk *emergency stop* latency ≤ 50 ms dan *safety-rated monitored stop*.

**Tahap 5 — Integrasi FDIR (Borah, 2024).** Pasang modul *nonlinear filtering* untuk memantau residual sensor. Definisikan threshold $\tau$ untuk deteksi anomali:

$$\text{Fault Flag} = \mathbb{1}\left[ \|r_t - \hat{r}_t\| > \tau \right]$$

di mana $r_t$ adalah pembacaan aktual dan $\hat{r}_t$ adalah prediksi filter.

**Tahap 6 — *Sim-to-Real Transfer* dan Continuous Learning.** Terapkan *domain adaptation* dengan fine-tuning terbatas di lapangan. *Monitoring* terus-menerus terhadap distribusi keadaan (*distribution shift*).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AMR di Gudang E-Commerce

**Parameter Input:**
- Luas gudang: 10.000 m²
- Jumlah rak: 200 unit dengan lorong selebar 1,8 m
- 5 unit AMR kapasitas angkut 100 kg
- Kecepatan maksimum: $v_{\max} = 1{,}5$ m/s
- Resolusi grid: $\Delta = 0{,}25$ m

**Langkah Perhitungan:**

**Langkah 1 — Estimasi Ukuran Ruang Keadaan.** 
Jumlah total *states* per AMR:
$$|\mathcal{S}| = \left(\frac{L}{\Delta}\right) \times \left(\frac{W}{\Delta}\right) \times |\Theta| \approx 160.000 \times 16 = 2.560.000$$

Untuk 5 agen dalam kerangka Borah, ruang keadaan gabungan meningkat menjadi $|\mathcal{S}|^{5/2} \approx 10^{13}$ (perkiraan *decentralized partial observability*).

**Langkah 2 — Desain Reward.**
- $w_1 = +100$ (pencapaian target)
- $w_2 = +5$ (per impedansi rintangan)
- $w_3 = -0{,}1$ (penalti energi)
- $w_4 = -0{,}01$ (penalti waktu per langkah)

**Langkah 3 — Simulasi Episode.** 
Asumsikan panjang episode rata-rata = 200 langkah, dengan diskonto $\gamma = 0{,}99$. Return horizon efektif:
$$H_{\text{eff}} = \frac{1}{1-\gamma} = 100 \text{ langkah}$$

**Langkah 4 — Perhitungan Throughput.**
Misalkan setelah pelatihan, AMR berhasil menyelesaikan pick-and-place dengan rerata waktu siklus $T_{\text{cycle}} = 45$ detik (vs. 75 detik dengan A* konvensional). 

Throughput harian per AMR:
$$\text{TH}_{\text{AMR}} = \frac{8 \text{ jam} \times 3600}{45} \approx 640 \text{ siklus/hari}$$

Peningkatan produktivitas:
$$\Delta \text{TH} = \frac{640 - 480}{480} \times 100\% = 33{,}3\%$$

**Langkah 5 — Analisis FDIR (Borah, 2024).**
Misalkan rata-rata kegagalan sensor LiDAR mengikuti distribusi Poisson dengan $\lambda = 0{,}05$ kejadian/jam. Probabilitas deteksi tepat waktu oleh *nonlinear filter* dengan threshold $\tau = 3\sigma$:
$$P(\text{detect} | \text{fault}) = 0{,}987$$

*Mean Time To Failure Recovery*: dari 8 jam (tanpa FDIR) menjadi 0,5 jam (dengan SAMAS-FDIR).

**Langkah 6 — Perhitungan ROI.**
Investasi RL training: Rp 250 juta (satu kali). 
Penghematan operasional tahunan dari peningkatan throughput 33,3% pada 5 AMR: 
$$\text{Savings} = 5 \times 160 \text{ siklus/hari} \times 365 \text{ hari} \times \text{Rp }15.000/\text{siklus} = \text{Rp }4{,}38 \text{ miliar/tahun}$$

*Payback Period*: $250/4.380 \times 12 \approx 0{,}68$ bulan.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Evaluasi Batasan Metodologi

Kala (2024) secara eksplisit mengakui beberapa keterbatasan motion planning berbasis RL: (1) **Sample inefficiency** — DQN klasik memerlukan jutaan *transisi* untuk konvergensi pada tugas kompleks; (2) **Safety exploration** — eksplorasi acak (*$\epsilon$-greedy*) selama pelatihan dapat menghasilkan perilaku berbahaya di lingkungan nyata sehingga memerlukan *sim-to-real*; (3) **Lack of formal guarantees** — tidak seperti pengontrol optimal LQR yang memiliki bukti stabilitas, kebijakan RL bersifat *empirical*. Borah (2024) menambahkan tantangan dalam *scalability*

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
