# 2708 — Perencanaan Gerak Cerdas Berbasis Pembelajaran Penguatan untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning dalam sistem multi-agen otonom dengan deteksi kegagalan
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots: Planning, Navigation, and Perception*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mendorong adopsi massif terhadap robot bergerak otonom (Autonomous Mobile Robots/AMR) di lantai pabrik, gudang distribusi, dan lini perakitan presisi. Kala (2024) dalam bab buku *Autonomous Mobile Robots* menyoroti bahwa perencanaan gerak (motion planning) merupakan subsistem paling kritikal yang menentukan keberhasilan operasi AMR dalam lingkungan industri yang dinamis dan tidak pasti. Permasalahan ini semakin kompleks ketika robot harus beroperasi berdampingan dengan manusia (human-robot collaboration), menghindari hambatan statis maupun dinamis, dan mengoptimalkan konsumsi energi baterai secara simultan (Kala, 2024).

Secara ekonomis, pasar AMR global diproyeksikan melampaui USD 14 miliar pada 2030 dengan Compound Annual Growth Rate (CAGR) rata-rata di atas 15% dalam dekade terakhir. Pelaku industri seperti Amazon Robotics, KIVA Systems, dan Fetch Robotics telah membuktikan bahwa optimalisasi motion planning berkontribusi langsung terhadap peningkatan *throughput*拣gudang hingga 40% dan reduksi biaya operasional hingga 25%. Kala (2024) berargumen bahwa pendekatan konvensional berbasis algoritma deterministik seperti A*, Dijkstra, atau Rapidly-exploring Random Trees (RRT) memiliki keterbatasan fundamental dalam menghadapi lingkungan stokastik dengan tingkat ketidakpastian tinggi, sehingga membutuhkan paradigma pembelajaran penguatan (Reinforcement Learning/RL) sebagai solusi modern.

Dalam konteks yang diperkuat oleh Borah (2024), tantangan industri tidak berhenti pada perencanaan gerak semata. Sistem otonom modern harus dilengkapi kapabilitas Fault Detection, Isolation, and Reconstruction (FDIR) untuk menangani malfungsi sensor, aktuator, maupun kegagalan komunikasi jaringan pada sistem multi-agen. Disertasi Borah (2024) mengembangkan metodologi Smart Autonomous Multi-Agent Systems (SAMAS) yang mengintegrasikan nonlinear filtering dengan reinforcement learning untuk menjamin keandalan operasional pada sistem dinamis kompleks. Integrasi kedua perspektif ini—motion planning berbasis RL dengan FDIR berbasis filter nonlinear—merepresentasikan frontier riset teknik industri yang menjawab kebutuhan akan sistem otonom yang adaptif, resilien, dan efisien.

Urgensi permasalahan ini diperkuat oleh data empiris: sekitar 60% downtime pada sistem robotik industri disebabkan oleh perencanaan lintasan yang suboptimal atau kegagalan deteksi anomali sensor. Tanpa arsitektur cerdas yang mengintegrasikan pembelajaran penguatan dan filter nonlinear, pelaku industri menghadapi risiko kerugian produksi signifikan serta pelanggaran standar keselamatan kerja ISO 10218 dan ISO/TS 15066.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Markov Decision Process (MDP)

Kerangka teoritikal fundamental untuk motion planning menggunakan RL adalah Process Keputusan Markov, yang secara formal didefinisikan sebagai tuple $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ : himpunan state (konfigurasi robot dan lingkungannya)
- $\mathcal{A}$ : himpunan action (percepatan, kecepatan sudut, dll.)
- $P(s'|s,a)$ : fungsi transisi probabilistik
- $R(s,a,s')$ : fungsi reward langsung
- $\gamma \in [0,1)$ : faktor diskonto

Fungsi nilai state $V^\pi(s)$ untuk policy $\pi$ memenuhi Persamaan Bellman (Kala, 2024):

$$V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma V^\pi(s')\right]$$

### 2.2. Q-Learning dan Deep Q-Network (DQN)

Untuk discrete action space, algoritma Q-Learning memperbarui nilai aksi menggunakan aturan:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah learning rate. Untuk continuous action space pada AMR, Kala (2024) mengusulkan Deep Q-Network dengan parameter $\theta$ yang diminimalkan melalui loss function:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right]$$

dengan $\theta^-$ adalah parameter target network dan $\mathcal{D}$ adalah replay buffer.

### 2.3. Actor-Critic Architecture (DDPG)

Untuk aplikasi motion planning yang membutuhkan presisi tinggi, algoritma Deep Deterministic Policy Gradient (DDPG) menggunakan dua jaringan:

$$\nabla_{\theta^\mu} J \approx \mathbb{E}_{s_t \sim \mathcal{D}} \left[ \nabla_a Q(s, a; \theta^Q) \Big|_{a=\mu(s|\theta^\mu)} \nabla_{\theta^\mu} \mu(s|\theta^\mu) \right]$$

### 2.4. Nonlinear Filtering (Pendukung FDIR)

Borah (2024) memformulasikan model state-space nonlinier untuk sistem dinamis multi-agen:

$$x_{k+1} = f(x_k, u_k) + w_k, \quad w_k \sim \mathcal{N}(0, Q_k)$$

$$y_k = h(x_k) + v_k, \quad v_k \sim \mathcal{N}(0, R_k)$$

Extended Kalman Filter (EKF) melakukan linearisasi melalui Jacobian:

$$F_k = \left. \frac{\partial f}{\partial x} \right|_{\hat{x}_k}, \quad H_k = \left. \frac{\partial h}{\partial x} \right|_{\hat{x}_k^-}$$

Update Kalman gain:

$$K_k = P_k^- H_k^T (H_k P_k^- H_k^T + R_k)^{-1}$$

$$\hat{x}_k = \hat{x}_k^- + K_k (y_k - h(\hat{x}_k^-))$$

Untuk nonlinieritas tinggi, Borah (2024) mengusulkan Unscented Kalman Filter (UKF) yang menggunakan transformasi unscented untuk akurasi superior tanpa komputasi Jacobian eksplisit, sehingga sangat relevan untuk deteksi fault pada aktuator AMR secara real-time.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL untuk AMR industri mengikuti protokol terstruktur berikut:

### SOP-1: Akuisisi & Pemetaan Lingkungan

1. **Pemetaan awal** menggunakan SLAM (Simultaneous Localization and Mapping) dengan resolusi grid $\Delta x = \Delta y = 0{,}05$ m.
2. **Kalibrasi sensor** LiDAR 2D (range 25 m), IMU 6-DOF, dan encoder roda mengikuti prosedur ISO 9283.
3. **Konstruksi occupancy grid** $G \in \{0,1\}^{m \times n}$ sebagai representasi state space diskret.

### SOP-2: Desain Reward Function

Fungsi reward dirancang sebagai kombinasi multi-kriteria:

$$r_t = w_1 \cdot r_{\text{progress}} + w_2 \cdot r_{\text{collision}} + w_3 \cdot r_{\text{energy}} + w_4 \cdot r_{\text{time}}$$

dengan bobot tipikal $w_1 = 0{,}5$, $w_2 = -1{,}0$, $w_3 = -0{,}1$, $w_4 = -0{,}05$.

### SOP-3: Pelatihan dengan Curriculum Learning

Pelatihan dilakukan secara bertahap (curriculum learning) mengikuti hierarki kesulitan:

| Tahap | Lingkungan | Episode | Target Reward |
|-------|-----------|---------|---------------|
| 1 | Koridor statis tanpa hambatan | 5.000 | $\geq 200$ |
| 2 | Lorong dengan 5 hambatan statis | 10.000 | $\geq 350$ |
| 3 | Gudang dinamis dengan 3 operator manusia | 20.000 | $\geq 450$ |
| 4 | Lingkungan nyata mixed traffic | 50.000 | $\geq 500$ |

### SOP-4: Integrasi FDIR dengan Filter Nonlinear

Mengikuti kerangka Borah (2024), setiap agen AMR dilengkapi subsistem FDIR:

1. **Residual generation**: $r_k = y_k - h(\hat{x}_k^-)$
2. **Decision function** dengan threshold $\chi^2$: $T_k = r_k^T S_k^{-1} r_k$, alarm jika $T_k > \chi^2_{\alpha, m}$
3. **Isolasi fault** menggunakan structured residual set
4. **Rekonstruksi state** melalui UKF yang diperbarui dengan estimator adaptif

### SOP-5: Validasi & Deployment

Validasi mengikuti standar ISO 13849 (Performance Level) dengan target PL=d untuk aplikasi keselamatan kritis, mencakup *failure rate* $< 10^{-6}$/jam operasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario: AMR Pengangkut Palet di Gudang E-Commerce

**Parameter Industri:**
- Luas gudang: $A = 50 \times 30 = 1.500$ m²
- Jumlah rak拣nama: $n = 60$ unit (5 baris × 12 kolom)
- Jumlah AMR: $N = 8$ unit
- Beban muatan: $m = 250$ kg per palet
- Kecepatan operasi: $v_{\max} = 1{,}5$ m/s
- Baterai: LiFePO4 48V 100Ah (kapasitas $E_{\text{cap}} = 4{,}8$ kWh)

### 4.2. Perhitungan Manual Q-Learning Update

Misalkan state $s_t$ merepresentasikan posisi AMR pada koordinat $(x, y, \theta)$ dan action $a_t \in \{\text{maju}, \text{belok-kanan}, \text{belok-kiri}, \text{berhenti}\}$. Tinjau satu transisi:

| Variabel | Nilai Awal | Nilai Target |
|---------|------------|--------------|
| $Q(s_t, a_t)$ lama | 12,4 | - |
| Reward $r_{t+1}$ | - | 8,5 (pergerakan progresif) |
| $\gamma$ | - | 0,95 |
| $\alpha$ | - | 0,10 |
| $\max_a Q(s_{t+1}, a)$ lama | 15,7 | - |

**Langkah 1:** Hitung TD-target:
$$y_t = r_{t+1} + \gamma \max_a Q(s_{t+1}, a) = 8{,}5 + 0{,}95 \times 15{,}7 = 8{,}5 + 14{,}915 = 23{,}415$$

**Langkah 2:** Hitung TD-error:
$$\delta_t = y_t - Q(s_t, a_t) = 23{,}415 - 12{,}4 = 11{,}015$$

**Langkah 3:** Update Q-value:
$$Q^{\text{new}}(s_t, a_t) = Q(s_t, a_t) + \alpha \cdot \delta_t = 12{,}4 + 0{,}10 \times 11{,}015 = 12{,}4 + 1{,}1015 = 13{,}5015$$

**Langkah 4:** Verifikasi konvergensi: peningkatan Q-value sebesar $+1{,}1015$ mengindikasikan agen belajar memberi nilai lebih tinggi pada state-aksi yang menghasilkan pergerakan progresif.

### 4.3. Perhitungan Konsumsi Energi

Dengan jarak tempuh rata-rata per misi $d = 45$ m dan massa total $M = 250 + 50 = 300$ kg (muatan + struktur AMR):

$$E_{\text{kinetik}} = \frac{1}{2} M v^2 = \frac{1}{2} \times 300 \times 1{,}5^2 = 337{,}5 \text{ J per fase akselerasi}$$

Untuk 1 siklus misi lengkap (akselerasi +巡航 + deselerasi):

$$E_{\text{misi}} = E_{\text{roll}} + E_{\text{acc}} + E_{\text{latent}} = 1{,}8 + 0{,}34 + 0{,}46 = 2{,}6 \
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
