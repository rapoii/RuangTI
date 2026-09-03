# 1524 — Perencanaan Gerak Otonom Berbasis Reinforcement Learning untuk Sistem Robotika Industri dan Multi-Agen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion Planning Menggunakan Reinforcement Learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memindahkan pusat gravitasi otomasi dari lini produksi tetap (*fixed automation*) menuju lingkungan yang dinamis, terdistribusi, dan saling terhubung. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots* dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), menegaskan bahwa perencanaan gerak (*motion planning*) merupakan tulang punggung pengoperasian Autonomous Mobile Robots (AMR) di gudang, pusat distribusi, dan lantai manufaktur modern. Berbeda dengan pendekatan klasik seperti A*, Rapidly-exploring Random Tree (RRT), atau Potential Field yang bersifat *reaktif-deterministik*, Kala mengusulkan paradigma pembelajaran penguatan (*Reinforcement Learning*/RL) sebagai kerangka keputusan yang memungkinkan robot *belajar* dari interaksi berulang dengan lingkungannya, mengatasi ketidakpastian tinggi pada persepsi sensor, dinamika beban, dan perilaku pejalan kaki.

Urgensi industrial-ekonomis dari transisi ini nyata. Laporan McKinsey (2022) menunjukkan pasar AMR global tumbuh 19% CAGR, didorong oleh kekurangan tenaga kerja, kebutuhan *throughput* 24/7, dan fragmentasi pesanan e-commerce. Kala (2024) menekankan bahwa dalam skenario *mixed-traffic* (manusia-robot-robot), algoritma perencanaan klasik akan menghasilkan *path* konservatif yang menurunkan utilisasi armada hingga 30%. RL, melalui formulasi Markov Decision Process (MDP), menawarkan kebijakan adaptif yang meminimalkan *expected cumulative travel time* sambil memaksakan kendala keamanan (ISO 3691-4 untuk AMR industri).

Pada tataran sistem multi-agen, Kaustav Borah (2024) dalam disertasinya (DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memperluas cakupan ke arah *Smart Autonomous Multi-Agent Systems* (SAMAS), di mana deteksi, isolasi, dan rekonstruksi fault (FDIR) harus berjalan simultan dengan perencanaan gerak. Borah menunjukkan bahwa sensor noise, kegagalan aktuator, atau gangguan jaringan komunikasi dapat dikompensasi melalui kombinasi *nonlinear filtering* (Extended/Unscented Kalman Filter) dan pembelajaran penguatan terdistribusi. Integrasi kedua perspektif ini—RL untuk kebijakan tingkat tinggi dan filtering nonlinier untuk estimasi tingkat rendah—mendefinisikan arsitektur robotika industri modern yang *fault-tolerant*, *self-optimizing*, dan siap menghadapi kompleksitas operasional nyata.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Perencanaan gerak berbasis RL diformalisasi sebagai MDP tupel:

$$M = (\mathcal{S}, \mathcal{A}, P, R, \gamma)$$

di mana $\mathcal{S}$ adalah ruang状态 (*state space*), $\mathcal{A}$ adalah ruang aksi (*action space*), $P(s'|s,a)$ adalah probabilitas transisi, $R(s,a,s')$ adalah *reward* langsung, dan $\gamma \in [0,1)$ adalah faktor diskon. Untuk AMR, Kala (2024) mendefinisikan:

$$\mathcal{S} = \{(x, y, \theta, v, \mathbf{o}) : x,y \in \mathbb{R}, \theta \in [0,2\pi), v \in [0, v_{\max}], \mathbf{o} \in \mathbb{R}^{n_{\text{obs}}}\}$$

dengan $(x, y, \theta)$ pose robot, dan $\mathbf{o}$ adalah observasi lidar/kamera. Ruang aksi untuk penggerak diferensial adalah:

$$\mathcal{A} = \{(v, \omega) : v \in [0, v_{\max}], \omega \in [-\omega_{\max}, \omega_{\max}]\}$$

### 2.2 Persamaan Bellman dan Fungsi Nilai

Fungsi nilai optimal memenuhi *Bellman optimality equation*:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

Fungsi aksi-nilai (*Q-function*) menjadi target pembelajaran algoritma Q-learning:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

Aturan pembaruan Q-learning yang digunakan Kala adalah:

$$Q(s,a) \leftarrow Q(s,a) + \alpha\left[r + \gamma \max_{a'} Q(s',a') - Q(s,a)\right]$$

dengan $\alpha \in (0,1)$ adalah laju pembelajaran. Bukti konvergensi mengikuti Robbins-Monro: $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

### 2.3 Desain Reward Function

Kala menekankan bahwa desain *reward* menentukan keberhasilan kebijakan. Bentuk tipikal untuk perencanaan gerak:

$$R(s,a,s') = R_{\text{goal}} \cdot \mathbb{1}_{\text{goal}} + R_{\text{collision}} \cdot \mathbb{1}_{\text{collision}} + c_t \Delta t + c_d \, d_{\min}^{-1}$$

dengan $R_{\text{goal}}$ (misal +100), $R_{\text{collision}}$ (misal −50), $c_t$ penalti waktu, dan $c_d \, d_{\min}^{-1}$ penalti jarak minimum ke obstacle.

### 2.4 Deep Q-Network dan Policy Gradient

Untuk ruang状態 kontinu berdimensi tinggi, Kala menggunakan Deep Q-Network (DQN) dengan *replay buffer* $\mathcal{D}$ dan *target network* $\hat{Q}$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} \hat{Q}(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

Untuk aksi kontinu (misal *velocity* dan *angular velocity* pada AGV), policy gradient lebih sesuai:

$$\nabla J(\theta) = \mathbb{E}_{\pi_\theta}\left[\nabla_\theta \log \pi_\theta(a|s) \cdot Q^{\pi_\theta}(s,a)\right]$$

### 2.5 Multi-Agent Reinforcement Learning (MARL)

Borah (2024) memformalkan SAMAS sebagai *Decentralized Partially Observable MDP* (Dec-POMDP):

$$\mathcal{M}_N = \langle \mathcal{I}, \mathcal{S}, \{\mathcal{A}_i\}_{i=1}^N, P, \{R_i\}_{i=1}^N, \{\Omega_i\}_{i=1}^N, O, \gamma \rangle$$

dengan $\mathcal{I}$ himpunan agen, $\Omega_i$ observasi parsial agen $i$, dan $O$ fungsi observasi bersama. Estimasi状態 dilakukan melalui *Unscented Kalman Filter* (UKF) untuk persamaan状态 nonlinier:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k \left(y_k - h(\hat{x}_{k|k-1})\right)$$

dengan gain Kalman $K_k$ yang dihitung dari