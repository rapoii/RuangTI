# 1636 — Perencanaan Gerak Otonom Berbasis Pembelajaran Penguatan untuk Sistem Multi-Agen di Lingkungan Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion Planning Menggunakan Reinforcement Learning untuk Robot Otonom dan Sistem Multi-Agen Industri
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots: Planning, Kinematics, Dynamics, and Control*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 telah menempatkan sistem robot otonom sebagai tulang punggung operasional di berbagai sektor strategis. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots* yang diterbitkan Elsevier dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), mengargumentasikan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan kelayakan operasional robot bergerak otonom (*Autonomous Mobile Robots*/AMR) di lingkungan industri dinamis. Kala secara eksplisit menyatakan bahwa "traditional motion planning approaches, such as A* and RRT, often fail in dynamic and uncertain environments because they cannot adapt to real-time changes," yang menjadi justifikasi utama adopsi *Reinforcement Learning* (RL) sebagai paradigma komputasional dominan (Kala, 2024).

Urgensi industri terhadap motion planning berbasis RL didorong oleh tiga faktor ekonomi-operasional. Pertama, pasar AMR global diproyeksi mencapai USD 8,70 miliar pada 2030 dengan CAGR 14,2% (post-pandemic e-commerce boom), di mana efisiensi routing menentukan margin operasional gudang. Kedua, downtime akibat tabrakan atau dead-lock pada armada AGV (*Automated Guided Vehicle*) di pusat distribusi Amazon, Alibaba, dan DHL mencapai kerugian rata-rata USD 22.000 per jam. Ketiga, integrasi AMR dengan sistem *Warehouse Management System* (WMS) memerlukan kemampuan re-planning real-time yang tidak dapat dipenuhi oleh algoritma konvensional berbasis graf statis.

Kontribusi Kaustav Borah (2024) dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) memperkuat narasi ini melalui kerangka **Smart Autonomous Multi-Agent Systems (SAMAS)** yang mengintegrasikan *nonlinear filtering* (misalnya *Extended Kalman Filter* dan *Particle Filter*) dengan RL untuk menangani deteksi, isolasi, dan rekonstruksi fault (FDIR) pada sistem multi-agen. Borah secara eksplisit menyatakan bahwa "the increasing complexity of engineering systems necessitates autonomous operation, especially given potential malfunctions in sensors, actuators, components, communication networks, and controllers" (Borah, 2024). Kedua literatur ini secara sinergis memposisikan RL bukan sekadar sebagai algoritma kontrol, melainkan sebagai kerangka arsitektural untuk sistem industri yang resilien terhadap perturbasi lingkungan, kegagalan sensor, dan dinamika pasar yang volatile.

Dalam konteks manufaktur, motion planning RL digunakan untuk (i) routing AGV di lantai produksi, (ii) cooperative manipulation pada *cyber-physical production systems* (CPPS), (iii) predictive maintenance melalui trajectory analysis, dan (iv) koordinasi *human-robot collaboration* (HRC) di lini perakitan. Konteks ini menggeser paradigma desain sistem industri dari *predefined rigid automation* menuju *adaptive self-learning automation*, yang merupakan pilar utama **RAMI 4.0** (*Reference Architecture Model Industrie 4.0*) dan standar **ISO 23247** untuk digital twin manufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kerangka fundamental RL untuk motion planning adalah **Markov Decision Process (MDP)** yang didefinisikan sebagai tuple $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$: himpunan state (konfigurasi robot + lingkungan)
- $\mathcal{A}$: himpunan action (perintah gerak: translasi, rotasi)
- $P(s'|s,a)$: probabilitas transisi state
- $R(s,a,s')$: fungsi reward langsung
- $\gamma \in [0,1)$: discount factor untuk horizon tak hingga

Asumsi Markov menyatakan bahwa state masa depan independen terhadap histori masa lalu mengingat state saat ini:

$$P(s_{t+1}|s_t, a_t, s_{t-1}, a_{t-1}, \ldots, s_0, a_0) = P(s_{t+1}|s_t, a_t)$$

### 2.2 Persamaan Bellman dan Value Function

Fungsi nilai optimal $V^*(s)$ didefinisikan melalui **Bellman Optimality Equation**:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^*(s') \right]$$

Untuk ruang state kontinu pada AMR, digunakan **Q-function** sebagai *action-value function*:

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s'} P(s'|s,a) \max_{a'} Q^*(s',a')$$

### 2.3 Q-Learning dan Update Rule

Algoritma Q-learning melakukan iterasi *Bellman backup* sebagai berikut:

$$Q_{t+1}(s_t, a_t) \leftarrow Q_t(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q_t(s_{t+1}, a') - Q_t(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah learning rate. Batas konvergensi Q-learning dijamin oleh persamaan Robbins-Monro: $\sum_{t=0}^{\infty} \alpha_t = \infty$ dan $\sum_{t=0}^{\infty} \alpha_t^2 < \infty$.

### 2.4 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Kala (2024) menekankan bahwa state ruang kontinu (misalnya koordinat kartesian, kecepatan, orientasi) tidak dapat ditangani Q-table konvensional. **Deep Q-Network (DQN)** memparametrisasi $Q(s,a;\theta)$ dengan neural network, dan meminimalkan loss function:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter *target network* yang di-update periodik, dan $\mathcal{D}$ adalah *replay buffer* berukuran $N$.

### 2.5 Policy Gradient (REINFORCE)

Untuk ruang action kontinu (kecepatan linear $v$ dan angular $\omega$ pada differential-drive robot), digunakan **Policy Gradient**:

$$\nabla_\theta J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot G_t \right]$$

dengan return $G_t = \sum_{k=t}^{T} \gamma^{k-t} r_k$. Actor-Critic menggabungkan value baseline:

$$\nabla_\theta J(\theta) = \mathbb{E} \left[ \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot A^\pi(s_t, a_t) \right]$$

dengan advantage function $A^\pi(s,a) = Q^\pi(s,a) - V^\pi(s)$.

### 2.6 Kinematika Differential-Drive untuk AMR

Model kinematika robot bergerak dengan dua roda penggerak independen:

$$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos\theta & 0 \\ \sin\theta & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v \\ \omega \end{bmatrix}$$

dengan constraint nonholonomic $\dot{x}\sin\theta - \dot{y}\cos\theta = 0$. Kecepatan linear dan angular dihitung dari kecepatan roda:

$$v = \frac{r}{2}(\omega_R + \omega_L), \quad \omega = \frac{r}{L}(\omega_R - \omega_L)$$

di mana $r$ adalah radius roda dan $L$ adalah jarak antar roda (*wheelbase*).

### 2.7 Reward Function Engineering

Fungsi reward untuk motion planning AMR umumnya berbentuk:

$$r(s_t, a_t) = \begin{cases} +R_{\text{goal}} & \text{jika } \|p_t - p_{\text{goal}}\| < \epsilon \\ -R_{\text{collision}} & \text{jika collision detected} \\ -c_v \cdot \|v_t\| - c_\omega \cdot |\omega_t| - c_{\text{time}} & \text{otherwise} \end{cases}$$

di mana $c_v, c_\omega, c_{\text{time}}$ adalah koefisien biaya energi dan waktu. Borah (2024) menambahkan komponen fault-penalty melalui residual filtering:

$$r_{\text{FDIR}}(s_t) = -\lambda \|y_t - \hat{y}_t\|^2$$

dengan $\lambda$ bobot惩罚 dan $y_t - \hat{y}_t$ adalah residual antara pengukuran sensor dan estimasi filter.

### 2.8 Formulasi Multi-Agen (MARL)

Untuk sistem SAMAS Borah, joint policy $\boldsymbol{\pi} = (\pi_1, \ldots, \pi_N)$ dengan shared Q-function melalui **Mean-Field Q-Learning**:

$$Q_i(s, a_i, \bar{a}_{-i}) = \mathbb{E}_{s'} \left[ r_i + \gamma \mathbb{E}_{\bar{a}'_{-i} \sim \bar{\pi}_{-i}} Q_i(s', a_i', \bar{a}'_{-i}) \right]$$

di mana $\bar{a}_{-i} = \frac{1}{N-1}\sum_{j \neq i} a_j$ merepresentasikan aksi rata-rata agen lain, mengurangi kompleksitas dari $O(|\mathcal{A}|^N)$ menjadi $O(|\mathcal{A}|^2)$.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Implementasi motion planning RL di industri mengikuti SOP 7-tahap yang disintesis dari Kala (2024) dan Borah (2024):

### Tahap 1: Pemetaan Lingkungan dan Diskretisasi State
Lingkungan industri (gudang, lantai pabrik) dipetakan ke occupancy grid 2D dengan resolusi $\Delta = 0,1$ m. Sensor LiDAR 2D menghasilkan scan $z_t \in \mathbb{R}^{H}$ (H=360 beams) yang dikonversi ke state melalui CNN encoder.

### Tahap 2: Perancangan State Space
State direpresentasikan sebagai vektor $\mathbf{s}_t = [p_x, p_y, \theta, v, \omega, d_{\text{goal}}, \phi_{\text{goal}}, d_{\text{obstacle,min}}, \mathbf{z}_t]^T \in \mathbb{R}^{n}$ dengan $n \approx 20-30$ dimensi.

### Tahap 3: Perancangan Action Space
Untuk differential-drive AMR, action space diskret: $\mathcal{A} = \{(v, \omega) : v \in \{0, 0,3, 0,6, 1,0\}, \omega \in \{-1,0, -0,5, 0, 0,5, 1,0\}\}$ rad/m.

### Tahap 4: Rekayasa Reward Function
Reward function dirancang melalui proses iteratif dengan komponen: goal-reaching bonus, collision penalty, time penalty, smoothness regularization, dan energy minimization.

### Tahap 5: Pelatihan dan Validasi
Pelatihan dilakukan dalam **Gazebo/ROS2** simulator dengan 1 juta episode, *transfer learning* ke *digital twin* sesuai **ISO 23247**, lalu *sim-to-real* deployment dengan *domain randomization*.

### Tahap 6: Integrasi dengan Nonlinear Filter
Berdasarkan Borah (2024), EKF diintegrasikan untuk state estimation guna menangani sensor noise dan fault:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t(z_t - H\hat{x}_{t|t-1})$$

dengan Kalman gain $K_t = P_{t|t-1}H^T(HP_{t|t-1}H^T + R)^{-1}$. Residual $r_t = z_t - H\hat{x}_{t|t-1}$ dimonitor untuk FDIR menggunakan $\chi^2$-test: $r_t^T S_t^{-1} r_t > \tau$ menandakan fault.

### Tahap 7: Deployment, Monitoring, dan Continuous Learning
AMR di-deploy dengan *safety shield* (rule-based override) dan dikirim data trajectory ke server untuk *federated learning* lintas armada. Loop *continuous improvement* mengikuti metodologi PDCA (*Plan-Do-Check-Act*) standar **ISO 9001:2015**.

**Diagram Alur SOP:**

```
[Pemetaan Lingkungan] → [Desain State/Action] → [Reward Engineering]
        ↓
[Simulasi RL Training] → [Validasi Digital Twin] → [Integrasi EKF/FDIR]
        ↓
[Sim-to-Real Transfer] → [Safety-Certified Deployment] → [Continuous Learning]
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Skenario Kasus: AGV di Gudang E-Commerce

**Parameter Input:**
- Gudang rectangular $50 \times 30$ m, 120 rak, 20 charging station
- Armada: 8 unit AGV differential-drive, $$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.

$$
