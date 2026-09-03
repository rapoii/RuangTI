# 2468 — Perencanaan Gerak (Motion Planning) Mobile Robot Otonom Berbasis Reinforcement Learning untuk Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi Industri 4.0 telah mengubah secara fundamental arsitektur lantai produksi dan rantai pasok modern, di mana *Autonomous Mobile Robots* (AMR) dan *Automated Guided Vehicles* (AGV) menjadi tulang punggung sistem intralogistik. Dalam konteks Teknik Industri, perencanaan gerak (*motion planning*) bukan sekadar persoalan navigasi robot, melainkan masalah optimasi keputusan diskret-kontinyu yang menentukan *throughput*, *lead time*, konsumsi energi, dan tingkat keselamatan operasional. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* yang diterbitkan Elsevier dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9) menegaskan bahwa algoritma *reinforcement learning* (RL) memberikan paradigma baru untuk permasalahan motion planning karena kemampuannya menangani ruang状态 kontinyu berdimensi tinggi, ketidakpastian sensor, serta dinamika lingkungan yang berubah secara *real-time* — keterbatasan yang tidak mampu diatasi secara elegan oleh metode konvensional seperti *A**, Rapidly-exploring Random Tree* (RRT), atau *Artificial Potential Fields*.

Urgensi ekonomi dari adopsi RL-based motion planning sangat nyata. Studi internal McKinsey (2023) yang dirujuk oleh Kala menunjukkan bahwa pasar AMR industri diproyeksikan mencapai USD 14 miliar pada tahun 2027, didorong oleh kebutuhan *e-commerce fulfillment* (Amazon, Alibaba), *flexible manufacturing* (Siemens, Bosch), dan rumah sakit otomatis. Akan tetapi, Rahul Kala (2024) menekankan bahwa lebih dari 30% downtime AMR di gudang modern disebabkan oleh kegagalan perencanaan gerak ketika menghadapi pekerja pejalan kaki (*pedestrian*), barang jatuh, atau perubahan tata letak dinamis. Inilah celah yang coba ditutup RL: agen belajar kebijakan optimal $\pi^*(a|s)$ melalui interaksi, tanpa memerlukan peta statis yang harus diprogram ulang setiap kali lingkungan berubah.

Komplementer terhadap perspektif Kala, Kaustav Borah (2024) dalam disertasinya yang terdaftar di [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) memperkenalkan kerangka *Smart Autonomous Multi-agent Systems* (SAMAS) yang mengintegrasikan RL dengan *nonlinear filtering* (Extended Kalman Filter, Particle Filter) untuk *Fault Detection, Isolation, and Reconstruction* (FDIR). Bagi praktisi Teknik Industri, kontribusi Borah sangat relevan karena menambah dimensi *reliability engineering* pada swarm robot: sebuah armada AMR tidak hanya harus bergerak optimal, tetapi juga harus mampu mendeteksi kegagalan sensor/aktuator dan merekonstruksi perilaku secara otonom. Gabungan kedua literatur ini memberikan fondasi yang utuh untuk mendesain sistem intralogistik yang adaptif dan resilien — sebuah kebutuhan yang tidak lagi opsional di era *lights-out manufacturing*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) merumuskan masalah motion planning sebagai MDP dengan tuple $\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma \rangle$, di mana:

- $\mathcal{S}$: ruang状态 (state space), mencakup posisi $(x, y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, dan jarak ke obstacles terdekat $d_{obs}$.
- $\mathcal{A}$: ruang aksi diskret atau kontinyu (misalnya $\{forward, turn\_left, turn\_right, stop\}$ atau $(v, \omega) \in \mathbb{R}^2$).
- $\mathcal{P}(s'|s,a)$: probabilitas transisi状态, umumnya tidak diketahui secara eksplisit sehingga harus diestimasi dari sampling.
- $\mathcal{R}: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$: fungsi reward.
- $\gamma \in [0,1)$: faktor diskon yang mengontrol horizon keputusan.

Fungsi nilai optimal didefinisikan melalui persamaan Bellman:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ \mathcal{R}(s, a) + \gamma \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a) \, V^*(s') \right] \quad (1)$$

Kebijakan optimal