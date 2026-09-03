# 2884 — Perencanaan Gerak Berbasis Pembelajaran Penguatan untuk Sistem Otonom Multi-Agen Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning Menggunakan Reinforcement Learning untuk Autonomous Mobile Robots dan Multi-Agent Industrial Systems
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Figshare/Dissertation Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri menuju **Industry 4.0** dan **Industry 5.0** telah mengubah secara fundamental paradigma otomasi pabrik dan rantai pasok. Autonomous Mobile Robots (AMR) dan Automated Guided Vehicles (AGV)不再是 hanya elemen pendukung, melainkan menjadi tulang punggung operasional di pusat distribusi, fasilitas manufaktur, dan gudang otomatis. Rahul Kala (2024) dalam chapter *Motion planning using reinforcement learning* pada buku *Autonomous Mobile Robots* menyoroti bahwa kemampuan navigasi otonom—terutama di lingkungan yang dinamis dan tidak terstruktur—menjadi *core competency* bagi robot generasi baru. Berbeda dengan AGV konvensional yang依赖于 lintasan magnetik atau pita reflektif, AMR современных menggunakan algoritma pembelajaran penguatan (reinforcement learning, RL) untuk beradaptasi terhadap perubahan tata letak gudang, keberadaan obstacle dinamis seperti pekerja manusia, serta variasi beban kerja secara real-time.

Konteks ekonomi industri modern memberikan urgensi yang sangat tinggi. Sebagai contoh, Amazon Robotics mengoperasikan lebih dari 520.000 unit robot驱动的 drive unit di gudang-gudang globalnya per 2023, di mana setiap detik keterlambatan dalam perencanaan gerak dapat menimbulkan kerugian produktivitas yang sangat signifikan. Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-agent Systems* (SAMAS) menekankan bahwa di sistem multi-agen industri, isu *fault detection, isolation, and reconstruction* (FDIR) menjadi semakin kompleks karena interdependensi antara sensor, aktuator, jaringan komunikasi, dan controller. Kegagalan satu agen dapat memicu *cascade failure* yang menurunkan keseluruhan *throughput* sistem.

Urgensi teknis lainnya adalah keterbatasan metode perencanaan gerak klasik seperti A*, RRT (Rapidly-exploring Random Tree), dan PRM (Probabilistic Roadmap). Algoritma ini bersifat *reaktif* dan memerlukan re-planning setiap kali lingkungan berubah, sehingga tidak efisien untuk skenario dengan obstacle dinamis berfrekuensi tinggi. Pendekatan RL memungkinkan robot *belajar kebijakan* (policy) yang memetakan state lingkungan ke aksi secara langsung, sehingga waktu respons terhadap perubahan dapat ditekan dari ratusan milidetik (re-planning klasik) menjadi kurang dari 10 ms (policy inference neural network). Dengan mengintegrasikan formulasi MDP (Markov Decision Process) dan algoritma deep RL seperti DQN, DDPG, dan PPO, sistem dapat mencapai *convergence* ke kebijakan optimal yang robust terhadap noise sensor dan ketidakpastian lingkungan. Kombinasi ini menjadi fondasi bagi modul teknis 2884 yang akan mengupas secara mendalam aspek matematis, prosedural, dan implementasinya di lingkungan industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Perencanaan gerak dengan reinforcement learning diformulasikan secara formal sebagai MDP yang didefinisikan oleh tuple $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ di mana:

- $\mathcal{S}$ = himpunan state (konfigurasi robot + persepsi lingkungan),
- $\mathcal{A}$ = himpunan aksi (perintah gerak diskret atau kontinu),
- $P(s'|s,a)$ = fungsi transisi probabilistik,
- $R(s,a,s')$ = fungsi reward,
- $\gamma \in [0,1)$ = discount factor.

Fungsi nilai state optimal $V^*(s)$ memenuhi **Bellman Optimality Equation**:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

Untuk permasalahan navigasi diskret (misalnya grid 2D), aksi $a \in \{\text{utara, selatan, timur, barat, diam}\}$ dan reward dirancang secara *sparse* dengan $r_{\text{goal}} = +100$, $r_{\text{collision}} = -50$, dan $r_{\text{step}} = -1$ untuk mendorong lintasan terpendek.

### 2.2 Algoritma Q-Learning

Update aturan Q-Learning yang digunakan sebagai basis dalam banyak implementasi motion planning adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah *learning rate*. Kala (2024) menekankan bahwa untuk AMR skala industri, penggunaan **Deep Q-Network (DQN)** dengan *experience replay buffer* $\mathcal{D}$ dan target network $Q_{\theta^-}$ diperlukan agar konvergensi terjamin:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q_{\theta^-}(s', a') - Q_\theta(s,a) \right)^2 \right]$$

### 2.3 Reward Engineering untuk Navigasi Industri

Reward function untuk AMR gudang harus multi-objective agar mencerminkan tujuan operasional sesungguhnya:

$$r_t = w_1 \cdot r_{\text{goal}} + w_2 \cdot r_{\text{safety}} + w_3 \cdot r_{\text{energy}} + w_4 \cdot r_{\text{throughput}}$$

di mana $w_1 + w_2 + w_3 + w_4 = 1$. Misalnya $w_1=0{,}4$, $w_2=0{,}3$, $w_3=0{,}15$, $w_4=0{,}15$.

### 2.4 Multi-Agent Extension: Dec-POMDP

Untuk konteks multi-robot seperti yang disinggung Borah (2024), formulasi diperluas menjadi **Decentralized Partially Observable MDP (Dec-POMDP)**:

$$\langle \mathcal{I}, \mathcal{S}, \{\mathcal{A}_i\}, P, \{\Omega_i\}, O, R, \gamma \rangle$$

di mana agen $i$ menerima observasi parsial $o_i \in \Omega_i$ dan mempertahankan belief state $b_i$ yang diperbarui dengan Bayesian filtering. Untuk deteksi fault, residual generator didefinisikan sebagai:

$$r_k = y_k - \hat{y}_k$$

dengan $\hat{y}_k$ adalah output prediksi dari Kalman filter atau extended Kalman filter pada model nonlinear sistem. Jika $\|r_k\| > \tau$ (statistical threshold), fault diisolasi ke agen atau komponen yang berkorelasi dengan pola residual tersebut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di industri mengikuti **SOP