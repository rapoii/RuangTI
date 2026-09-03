# 2948 — Perencanaan Gerak pada Robot Bergerak Otonom Menggunakan Reinforcement Learning: Formulasi Matematis, Integrasi Multi-Agen, dan Implementasi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur dan logistik modern, robot bergerak otonom (Autonomous Mobile Robots/AMR) telah menjadi tulang punggung transformasi digital yang memicu paradigma *Industry 4.0* dan *Logistics 4.0*. Rahul Kala (2024) dalam bab "Motion planning using reinforcement learning" yang termuat dalam buku *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menekankan bahwa perencanaan gerak (motion planning) merupakan subsistem kritis yang menentukan kemampuan AMR untuk bernavigasi pada lingkungan dinamis, menghindari rintangan statis maupun dinamis, serta memenuhi konstrain kinematik dan dinamik secara simultan. Urgensi ekonominya sangat nyata: menurut proyeksi internal industri yang dikutip Kala, biaya operasional logistik menyumbang hampir 13–15% dari GDP negara maju, dan optimalisasi perencanaan gerak berpotensi memangkas *cycle time* pengambilan barang di gudang hingga 35–50% dibandingkan sistem AGV berbasis lintasan tetap (fixed-path AGV).

Dari sisi teknis, permasalahan *motion planning* klasik seperti A*, Dijkstra, Rapidly-exploring Random Tree (RRT), dan Potential Field seringkali gagal ketika menghadapi (i) ruang状态 berdimensi tinggi, (ii) dinamika lingkungan stokastik seperti keberadaan pekerja manusia yang berpindah secara acak, dan (iii) kebutuhan untuk belajar dari pengalaman jangka panjang. Reinforcement Learning (RL) menjawab keterbatasan ini dengan membiarkan agen (robot) membangun kebijakan optimal melalui interaksi trial-and-error terhadap lingkungannya, sehingga mampu menghasilkan perilaku adaptif yang tidak dapat dicapai oleh metode konvensional berbasis aturan deterministik. Pendekatan ini semakin relevan ketika AMR diintegrasikan ke dalam *swarm* multi-agen, sebagaimana diuraikan oleh Kaustav Borah (2024) dalam disertasinya tentang Smart Autonomous Multi-agent Systems (SAMAS) (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Borah menekankan bahwa di sistem multi-agen, RL tidak hanya berperan untuk navigasi tetapi juga untuk *Fault Detection, Isolation, and Reconstruction* (FDIR) yang esensial dalam memastikan reliabilitas operasional.

Dalam konteks industri manufaktur Indonesia—yang sedang mendorong inisiatif *Making Indonesia 4.0*—penguasaan terhadap teknologi perencanaan gerak berbasis RL menjadi kompetensi strategis. Perusahaan seperti Toyota, Nestlé, dan Unilever telah melaporkan peningkatan throughput sebesar 20–40% setelah migrasi dari fixed-path AGV ke AMR berbasis RL yang mampu merencanakan ulang jalur secara real-time ketika terjadi perubahan layout, kerusakan conveyor, atau kepadatan inventaris yang tidak terduga. Lebih jauh, integrasi RL dengan sistem eksekusi manufaktur (MES) memungkinkan robot tidak hanya bergerak secara optimal tetapi juga menyinkronkan jadwal produksinya dengan目标 OEE (*Overall Equipment Effectiveness*). Dengan latar belakang inilah modul ini membangun pemahaman mendalam tentang formulasi matematis, metodologi rekayasa, serta studi kasus kuantitatif penerapan RL untuk *motion planning*.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis RL untuk *motion planning* dibangun di atas **Proses Keputusan Markov** (*Markov Decision Process*/MDP) yang didefinisikan sebagai tuple $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma \rangle$ di mana:

- $\mathcal{S}$ adalah himpunan berhingga (atau kontinu) state yang merepresentasikan konfigurasi robot dan lingkungannya, misalnya posisi $(x,y)$, orientasi $\theta$, kecepatan $v$, dan jarak ke rintangan terdekat.
- $\mathcal{A}$ adalah himpunan aksi yang dapat dieksekusi robot (misalnya $\{maj{u}, mundur, belok kiri, belok kanan, berhenti\}$ untuk navigasi diskret, atau perintah kecepatan/acceleration untuk kontrol kontinu).
- $\mathcal{P}(s'|s,a)$ adalah probabilitas transisi state—model stokastik yang merepresentasikan ketidakpastian kinematik dan gangguan lingkungan.
- $\mathcal{R}(s,a,s')$ adalah fungsi reward immediate yang berfungsi sebagai sinyal kualitas suatu transisi.
- $\gamma \in [0,1)$ adalah *discount factor* yang mengontrol horizon pengambilan keputusan.

Tujuan utama agen RL adalah mempelajari kebijakan $\pi: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$
J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^{t} R_{t+1}\right]
$$

Nilai optimal untuk setiap state didefinisikan melalui **persamaan Bellman optimalitas**:

$$
V^{*}(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a)\left[\mathcal{R}(s,a,s') + \gamma V^{*}(s')\right]
$$

dan nilai state-action optimal (Q-function):

$$
Q^{*}(s,a) = \sum_{s'} \mathcal{P}(s'|s,a)\left[\mathcal{R}(s,a,s') + \gamma \max_{a'} Q^{*}(s',a')\right]
$$

Untuk implementasi praktis di industri, $\mathcal{P}(s'|s,a)$ umumnya tidak diketahui secara eksplisit (*model-free*), sehingga digunakan algoritma **Q-learning** dengan aturan pembaruan:

$$
Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t) \right]
$$

di mana $\alpha \in (0,1]$ adalah laju pembelajaran. Kala (2024) menekankan bahwa untuk *motion planning* pada ruang kontinu, penggunaan **Deep Q-Network (DQN)** dengan *function approximation* $Q(s,a;\theta)$ menjadi wajib, dengan *loss function*:

$$
L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta) \right)^{2} \right]
$$

di mana $\theta^{-}$ adalah parameter jaringan target (*target network*) yang diperbarui secara periodik untuk menstabilkan pelatihan, dan $\mathcal{D}$ adalah *replay buffer*.

Untuk kasus multi-agen yang relevan dengan sistem AMR *swarm*, Borah (2024) mengusulkan perluasan menjadi **Decentralized Partially Observable MDP** (Dec-POMDP) $\langle \mathcal{I}, \mathcal{S}, \{\mathcal{A}_i\}, \mathcal{P}, \{\mathcal{O}_i\}, \{\mathcal{R}_i\}, \gamma \rangle$ dengan $\mathcal{I}$ himpunan agen. Ketika beberapa AMR harus beroperasi bersamaan di gudang, kebijakan bersama $\pi: \mathcal{S} \to \Delta(\mathcal{A}_1 \times \cdots \times \mathcal{A}_n)$ dapat dipelajari melalui algoritma **Multi-Agent Deep Deterministic Policy Gradient (MADDPG)** dengan gradien:

$$
\nabla_{\theta_i} J(\pi_i) = \mathbb{E}_{s \sim \rho^{\pi}, a_i \sim \pi_i} \left[ \nabla_{\theta_i} \log \pi_i(a_i|o_i) \cdot Q_i^{\pi}(\mathbf{x}, a_1, \dots, a_n) \right]
$$

di mana $Q_i^{\pi}$ adalah fungsi Q ter-sentralisasi yang memperhitungkan aksi seluruh agen. Borah memadukan ini dengan **Unscented Kalman Filter (UKF)** untuk menyaring observasi sensor yang noisy sebelum menjadi input kebijakan RL, sehingga robust terhadap kegagalan sensorik parsial—kondisi yang umum pada AMR berskala besar.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *motion planning* berbasis RL di lingkungan industri mengikuti SOP berlapis yang mengintegrasikan standar internasional seperti **ISO 3691-4:2020** untuk kendaraan industri tanpa pengemudi, **ISO 10218-1/-2** untuk keamanan robot industri, serta **VDI 2510** untuk sistem AGV. Berikut adalah arsitektur dan tahapan implementasi sistematis yang disusun berdasarkan sintesis Kala (2024) dan Borah (2024):

**Tahap 1 – Pemodelan Lingkungan dan Akuisisi Data.**
Lingkungan kerja (gudang, lini produksi, rumah sakit) dipetakan menggunakan *Simultaneous Localization and Mapping* (SLAM) dengan sensor LiDAR 2D/3D dan kamera depth. Representasi state mencakup grid okupansi (untuk RL diskret) atau fitur geometris seperti jarak ke dinding, lebar lorong, dan kepadatan pejalan kaki yang diekstrak melalui *Convolutional Neural Network*.

**Tahap 2 – Desain Fungsi Reward.**
Fungsi reward harus *sparse reward* (hadiah hanya padaゴール) atau *dense reward* (sinyal kontinu). Contoh tipikal untuk AMR gudang:

$$
r_t = \underbrace{-0{,}1}_{\text{biaya waktu}} + \underbrace{+10 \cdot \mathbb{1}_{\text{goal}}}_{\text{insentifゴール}} + \underbrace{-20 \cdot \mathbb{1}_{\text{collision}}}_{\text{penalti tabrakan}} + \underbrace{+0{,}5 \cdot (d_{t-1} - d_t)}_{\text{reward progress}}
$$

di mana $d_t$ adalah jarak Euclidean ke target pada langkah $t$.

**Tahap 3 – Pelatihan dalam Simulator High-Fidelity.**
Menggunakan *digital twin* (misalnya NVIDIA Isaac Sim, Webots, atau Gazebo) untuk menjalankan $\geq 10^6$ episode sebelum deployment. Ini esensial karena pelatihan di dunia nyata (*real-world training*) berisiko merusak robot dan окружающей среды.

**Tahap 4 – Validasi dengan *Hardware-in-the-Loop* (HIL).**
Kebijakan yang telah terlatih divalidasi menggunakan rig HIL denganPlant Model realistik.

**Tahap 5 – Deployment dan Continuous Learning.**
Kebijakan di