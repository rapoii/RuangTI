# 1956 — Perencanaan Gerak Robotik Otonom Berbasis Pembelajaran Penguatan untuk Sistem Multi-Agen Industri Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan gerak (*motion planning*) merupakan salah satu masalah fundamental dalam rekayasa robotika otonom yang memiliki dampak langsung terhadap produktivitas, fleksibilitas, dan keselamatan operasional di lingkungan industri modern. Rahul Kala (2024), dalam bab bukunya yang berjudul *"Motion planning using reinforcement learning"* yang diterbitkan di *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)), mengemukakan bahwa pendekatan konvensional terhadap perencanaan gerak—seperti algoritma A*, Rapidly-exploring Random Tree (RRT), dan Probabilistic Roadmap (PRM)—menghadapi keterbatasan substansial ketika diterapkan pada lingkungan industri yang dinamis, tidak deterministik, dan memiliki banyak agen secara simultan. Kala menegaskan bahwa pembelajaran penguatan (*reinforcement learning*/RL) menyediakan paradigma baru yang memungkinkan robot mempelajari kebijakan gerak optimal melalui interaksi langsung dengan lingkungannya, sehingga mampu beradaptasi terhadap perubahan konfigurasi ruang kerja, kemunculan rintangan dinamis, dan gangguan sensorik tanpa memerlukan pemodelan eksplisit yang kaku.

Urgensi industrialisasi pendekatan ini diperkuat oleh Kaustav Borah (2024) dalam disertasinya yang berjudul *"Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems"* (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Borah menyoroti bahwa sistem rekayasa kompleks di era Industri 4.0—mulai dari lini manufaktur fleksibel, gudang otomatis, hingga armada logistik otonom—memerlukan kemampuan deteksi, isolasi, dan rekonstruksi kesalahan (*fault detection, isolation, and reconstruction*/FDIR) yang canggih karena potensi malfunction pada sensor, aktuator, komponen, jaringan komunikasi, dan pengendali. Kedua literatur ini secara konvergen menunjukkan bahwa perencanaan gerak berbasis RL bukan sekadar peningkatan algoritmik, melainkan kebutuhan strategis untuk mempertahankan kelangsungan operasional (*operational continuity*) di tengah peningkatan kompleksitas sistem.

Dari perspektif ekonomi industri, adopsi RL-based motion planning menawarkan beberapa nilai tambah terukur: (1) pengurangan waktu pemrograman ulang (*reprogramming time*) yang biasanya mencapai 40–60% dari total deployment time pada sistem robot konvensional; (2) peningkatan *throughput* AGV (*Automated Guided Vehicle*) hingga 15–25% melalui optimalisasi rute dinamis; (3) kepatuhan terhadap standar kolaboratif ISO 10218 dan ISO/TS 15066 yang mensyaratkan perencanaan gerak aman di sekitar pekerja manusia; serta (4) kemampuan skalabilitas untuk *fleet management* dengan puluhan hingga ratusan unit robot heterogen yang beroperasi dalam ruang bersama. Dalam konteks ini, modul 1956 menjadi krusial bagi insinyur industri yang dituntut memahami tidak hanya aspek teoretis tetapi juga implikasi operasional, ekonomis, dan manajerial dari integrasi RL dalam perencanaan gerak.

## 2. Landasan Teori & Formulasi Matematis

Kerangka matematis utama yang mendasari perencanaan gerak berbasis RL adalah Proses Keputusan Markov (*Markov Decision Process*/MDP), yang secara formal didefinisikan sebagai tuple $M = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana $\mathcal{S}$ adalah ruang keadaan (*state space*), $\mathcal{A}$ adalah ruang aksi (*action space*), $P(s'|s,a)$ adalah fungsi transisi probabilistik, $R(s,a)$ adalah fungsi imbalan (*reward function*), dan $\gamma \in [0,1]$ adalah faktor diskonto (*discount factor*). Untuk perencanaan gerak robotik, $\mathcal{S}$ umumnya merepresentasikan pose robot $(x, y, \theta)$ beserta informasi rintangan dan dinamika lingkungan, sedangkan $\mathcal{A}$ mencakup aksi kendali seperti translasi longitudinal $v$ dan rotasi angular $\omega$.

Tujuan agen RL adalah mempelajari kebijakan $\pi(a|s)$ yang memaksimalkan imbalan kumulatif yang diharapkan, yang didefinisikan sebagai *return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Fungsi nilai (*value function*) yang bersesuaian dengan kebijakan $\pi$ dinyatakan sebagai:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s\right]$$

Sementara fungsi aksi-nilai (*action-value function* atau Q-function) didefinisikan sebagai:

$$Q^{\pi}(s,a) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s, A_t = a\right]$$

Persamaan Bellman optimal yang menjadi landasan konvergensi algoritma pembelajaran adalah:

$$Q^{*}(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \max_{a'} Q^{*}(s',a')$$

Untuk aplikasi perencanaan gerak dengan ruang keadaan kontinu berdimensi tinggi—misalnya pada robot bergerak dengan sensor LIDAR 360°—Kala (2024) mengusulkan penggunaan Deep Q-Network (DQN) yang mengaproksimasi $Q^{*}(s,a)$ dengan jaringan saraf tiruan parameterized oleh $\theta$:

$$Q(s,a;\theta) \approx Q^{*}(s,a)$$

Fungsi kerugian (*loss function*) yang diminimalkan selama pelatihan adalah:

$$L(\theta) = \mathbb{E}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta)\right)^2\right]$$

di mana $\theta^{-}$ adalah parameter dari *target network* yang diperbarui secara periodik untuk menstabilkan proses pembelajaran.

Perancangan fungsi imbalan menjadi aspek kritis yang dibahas secara mendalam oleh Kala (2024). Untuk masalah navigasi robotik, fungsi imbalan tipikal berbentuk:

$$R(s,a) = \begin{cases} +r_{goal}, & \text{jika } \|p_{robot} - p_{goal}\|_2 \leq \epsilon \\ -r_{collision}, & \text{jika terjadi kontak dengan rintangan} \\ -\eta \cdot d(s, s_{goal}), & \text{keadaan transisi} \end{cases}$$

di mana $d(s, s_{goal})$ merepresentasikan jarak Euclidean atau jarak geodesik terhadap sasaran, dan $\eta$ adalah koefisien biaya langkah (*step cost*).

Untuk sistem multi-agen seperti yang dikaji Borah (2024), formulasi diperluas menjadi Decentralized Partially Observable Markov Decision Process (DEC-POMDP):

$$\langle \mathcal{I}, \mathcal{S}, \{A_i\}_{i \in \mathcal{I}}, P, \{\Omega_i\}_{i \in \mathcal{I}}, O, \{R_i\}_{i \in \mathcal{I}}, \gamma \rangle$$

di mana setiap agen $i \in \mathcal{I}$ memiliki aksi $A_i$, observasi $\Omega_i$, dan fungsi observasi bersama $O(o|s,a)$, dengan tujuan kolektif memaksimalkan $\sum_{i} R_i$. Borah (2024) memperkenalkan penggabungan dengan *nonlinear filtering* (misalnya Extended Kalman Filter atau Particle Filter) untuk menangani ketidakpastian observasi dan rekonstruksi kesalahan secara real-time.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa sistem perencanaan gerak berbasis RL mengikuti kerangka prosedural terstruktur yang selaras dengan standar ISO 10218-1 (Robot industri – Persyaratan keselamatan), ISO/TS 15066 (Robot kolaboratif), serta praktik terbaik *ROS 2* (Robot Operating System 2). Prosedur operasional baku (*Standard Operating Procedure*/SOP) yang diuraikan oleh Kala (2024) dapat diadaptasi untuk lingkungan industri sebagai berikut:

**Tahap 1 – Analisis Kebutuhan Operasional.** Identifikasi spesifikasi misi: struktur ruang kerja, jenis rintangan (stat