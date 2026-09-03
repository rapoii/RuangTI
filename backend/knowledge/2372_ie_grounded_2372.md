# 2372 — Perencanaan Gerak Otonom Berbasis Pembelajaran Penguatan untuk Sistem Robotik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning (Perencanaan gerak menggunakan pembelajaran penguatan)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots: Planning, Navigation, and Control*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan Society 5.0 telah mendorong adopsi masif terhadap sistem robotik otonom di lantai produksi, gudang logistik, dan rantai pasok global. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots*, menyoroti bahwa perencanaan gerak (*motion planning*) merupakan salah satu pilar fundamental yang menentukan keberhasilan operasional *Automated Guided Vehicle* (AGV), *Autonomous Mobile Robot* (AMR), dan *Unmanned Aerial Vehicle* (UAV) di lingkungan industri yang dinamis. Permasalahan perencanaan gerak secara klasik diselesaikan melalui pendekatan *sampling-based planner* seperti Rapidly-exploring Random Tree (RRT) dan Probabilistic Roadmap (PRM), namun metode ini memiliki keterbatasan ketika menghadapi lingkungan yang berubah secara stokastik, adanya rintangan dinamis, serta kebutuhan optimalisasi multi-kriteria (waktu tempuh, konsumsi energi, dan keselamatan) [Kala, 2024].

Dalam konteks industri manufaktur dan logistik, urgensi penerapan pembelajaran penguatan (*Reinforcement Learning*/RL) untuk perencanaan gerak muncul karena tiga faktor utama. Pertama, kompleksitas state-space yang sangat tinggi pada fasilitas produksi modern—di mana satu gudang*e-commerce* berskala besar dapat memiliki lebih dari $10^6$ kemungkinan konfigurasi sel. Kedua, kebutuhan akan adaptabilitas real-time terhadap perubahan tata letak, dinamika pejalan kaki, dan failure mode pada aktuator. Ketiga, integrasi dengan arsitektur multi-agen yang memerlukan koordinasi terdistribusi. Kaustav Borah (2024) dalam disertasinya menjelaskan bahwa *Smart Autonomous Multi-Agent Systems* (SAMAS) memerlukan kerangka *Fault Detection, Isolation, and Reconstruction* (FDIR) yang selaras dengan kebijakan gerak yang dipelajari melalui RL, sehingga robot tidak hanya mampu menavigasi tetapi juga pulih dari kerusakan sensor atau aktuator secara otonom [Borah, 2024].

Secara ekonomi, pasar global AMR diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR 15%, dan lebih dari 60% penerapan AMR baru telah mengadopsi modul RL untuk navigasi otonom. Oleh karena itu, kemampuan mengkuantifikasi, memodelkan, dan mengimplementasikan perencanaan gerak berbasis RL menjadi kompetensi inti bagi insinyur industri masa depan.

## 2. Landasan Teori & Formulasi Matematis

Perencanaan gerak berbasis RL diformulasikan secara formal sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $(S, A, P, R, \gamma)$, di mana $S$ adalah himpunan state (konfigurasi robot dan lingkungan), $A$ adalah himpunan action (perintah gerak diskret/kontinu), $P(s'|s,a)$ adalah probabilitas transisi state, $R(s,a,s')$ adalah reward function, dan $\gamma \in [0,1)$ adalah *discount factor* [Kala, 2024].

Fungsi nilai optimal $V^*(s)$ memenuhi **Persamaan Bellman**:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

Secara ekuivalen, fungsi nilai-aksi optimal $Q^*(s,a)$ memenuhi:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

### 2.1 Algoritma Q-Learning untuk Perencanaan Gerak Diskret

Untuk grid-world perencanaan gerak, Kala (2024) merujuk pada aturan pembaruan Q-learning klasik:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha\left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)\right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate* dan $\text{TD-error} = r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)$ merepresentasikan selisih temporal (*temporal difference*).

### 2.2 Deep Q-Network (DQN) untuk State-Space Kontinu

Ketika state-space berdimensi tinggi (misalnya data lidar 360° atau kamera RGB-D), representasi Q-table tidak lagi feasible. DQN memanfaatkan *neural network* dengan parameter $\theta$ untuk mengaproksimasi $Q(s,a;\theta) \approx Q^*(s,a)$. Fungsi loss yang diminimalkan adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui secara periodik, dan $\mathcal{D}$ adalah *replay buffer* pengalaman [Kala, 2024].

### 2.3 Policy Gradient untuk Aksi Kontinu

Untuk robot dengan ruang aksi kontinu (kecepatan linear $v$ dan angular $\omega$), digunakan metode *actor-critic* seperti Deep Deterministic Policy Gradient (DDPG) atau Proximal Policy Optimization (PPO). *Policy gradient theorem* memberikan gradien objektif:

$$\nabla_\theta J(\theta) = \mathbb{E}_{s \sim \rho^\pi}\left[\nabla_\theta \log \pi_\theta(a|s) \cdot A^{\pi}(s,a)\right]$$

di mana $A^{\pi}(s,a) = Q^{\pi}(s,a) - V^{\pi}(s)$ adalah *advantage function* [Borah, 2024].

### 2.4 Reward Shaping untuk Navigasi Industri

Perancangan reward function yang tepat sangat menentukan konvergensi. Untuk AGV di gudang, reward dapat diformulasikan:

$$r_t = r_{\text{goal}} \cdot \mathbb{1}_{s_t = s_{\text{goal}}} + r_{\text{collision}} \cdot \mathbb{1}_{\text{collision}} + r_{\text{step}} + \lambda_d \cdot d(s_t, s_{\text{goal}})$$

di mana $d(s_t, s_{\text{goal}})$ adalah jarak Euclidean ke target, $\lambda_d$ adalah bobot pengarah, dan $r_{\text{step}}$ adalah penalti per langkah waktu untuk mendorong efisiensi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi perencanaan gerak berbasis RL di lingkungan industri mengikuti SOP berikut yang diselaraskan dengan framework Kala (2024) dan Borah (2024):

**Tahap 1 — Pemodelan Lingkungan dan Diskretisasi.**
State-space didefinisikan sebagai $s_t = [x_t, y_t, \theta_t, v_t, \mathbf{L}_t]$, di mana $(x_t,y_t)$ adalah posisi, $\theta_t$ orientasi, $v_t$ kecepatan, dan $\mathbf{L}_t \in \mathbb{R}^{360}$ adalah vektor pembacaan lidar. Action space untuk diskret: $A = \{\text{maju, mundur, belok-kiri, belok-kanan, berhenti}\}$.

**Tahap 2 — Perancangan Reward dan Fungsi Biaya.**
Menerapkan reward shaping seperti pada Persamaan (4). Standar industri (ISO 3691-4 untuk AGV) mensyaratkan penalti tinggi untuk collision ($r_{\text{collision}} \leq -100$) untuk menjamin *safety margin*.

**Tahap 3 — Inisialisasi dan Pelatihan.**
Eksplorasi awal menggunakan *epsilon-greedy* dengan $\epsilon_0 = 1{,}0$ dan *decay* $\epsilon_t = \epsilon_0 \cdot \rho^t$ dengan $\rho = 0{,}995$. Total *episode* minimal $N_{\text{ep}} = 10.000$ hingga $50.000$ untuk memastikan konvergensi $Q$-value.

**Tahap 4 — Validasi dengan Simulasi High-Fidelity.**
Sebelum deployment, model diuji pada *digital twin* fasilitas menggunakan simulator seperti Gazebo, NVIDIA Isaac Sim, atau Webots dengan metrik: *success rate* ($\geq 99\%$), *collision rate* ($\leq 0{,}1\%$ per 1000 episode), dan *path optimality ratio* ($\geq 0{,}85$).

**Tahap 5 — Integrasi dengan FDIR.**
Sesuai Borah (2024), kebijakan RL diintegrasikan dengan modul *Nonlinear Filtering* (misalnya Extended Kalman Filter untuk estimasi state terkontaminasi derau) dan arsitektur deteksi anomali berbasis *autoencoder*. Jika confidence interval estimasi state melebihi ambang $\sigma_{\text{th}}$, robot berpindah ke mode *safe-stop* dengan kebijakan konservatif.

**Tahap 6 — Deployment dan Pemantauan Berkelanjutan.**
Model yang telah tervalidasi di-*deploy* ke *edge computing* (NVIDIA Jetson Orin, Intel NUC) dengan inferensi latensi $< 50$ ms untuk memenuhi *real-time constraint* ISO 13849.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** AGV di gudang *e-commerce* seluas $20 \times 20$ meter harus menavigasi dari titik pickup $(0,0)$ ke titik drop-off $(18,15)$ dengan dua rintangan statis di $(10,8)$ dan $(14,12)$. AGV menggunakan Q-learning dengan state diskret grid $20 \times 20$, action space 5 (atas, bawah, kiri, kanan, diam), learning rate $\alpha = 0{,}1$, $\gamma = 0{,}9$.

**Langkah 1 — Inisialisasi Q-Table.**
$Q(s,a) = 0$ untuk seluruh $(s,a)$. Reward: $+100$ jika mencapai goal, $-100$ jika menabrak rintangan, $-1$ untuk setiap langkah lain.

**Langkah 2 — Satu Episode Simulasi.**
Ambil trajectory hipotetis dari state $s_0 = (0,0)$ dengan