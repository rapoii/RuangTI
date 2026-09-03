# 2164 — Perencanaan Gerak Otonom Berbasis Reinforcement Learning untuk Robot Bergerak dan Sistem Multi-Agen Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan gerak (*motion planning*) merupakan salah satu pilar fundamental dalam operasionalisasi *Autonomous Mobile Robots* (AMR) dan sistem multi-agen yang menjadi tulang punggung transformasi Industri 4.0 menuju 5.0. Kala (2024) dalam bab buku *Autonomous Mobile Robots* yang diterbitkan oleh Elsevier menjelaskan bahwa *motion planning* bukan sekadar persoalan geometrik menemukan jalur bebas hambatan dari konfigurasi awal ke konfigurasi tujuan, melainkan sebuah proses pengambilan keputusan sekuensial di bawah ketidakpastian lingkungan, dinamika non-linear, serta kendala operasional yang berubah secara *real-time* (Kala, 2024, https://doi.org/10.1016/b978-0-443-18908-1.00016-9). Pendekatan klasik seperti *Rapidly-exploring Random Tree* (RRT), *Probabilistic Roadmap* (PRM), atau pencarian graf deterministik (A*, Dijkstra) bekerja optimal pada lingkungan statis yang telah dipetakan sebelumnya (*a priori*), namun menunjukkan degradasi performa signifikan ketika menghadapi hambatan dinamis berupa manusia, AGV lain, atau inventaris yang berpindah.

Konteks industri kontemporer menunjukkan urgensi yang sangat nyata. Pasar global AMR diproyeksikan mencapai USD 8,7 miliar pada tahun 2030 dengan CAGR sekitar 23%, didorong oleh ekspansi e-commerce, otomatisasi pergudangan (*Amazon Robotics* dilaporkan mengoperasikan lebih dari 750.000 unit robot驱动的 di seluruh *fulfillment centers*-nya), serta kebutuhan fleksibilitas lini manufaktur terhadap variasi produk dengan *lot size* yang semakin kecil dalam paradigma *mass customization*. Di Indonesia sendiri, adopsi AMR di sektor manufaktur otomotif, FMCG, dan logistik masih berada di tahap awal namun meningkat pesat pasca-pandemi, seiring menipisnya tenaga kerja operasional di lini produksi.

Lebih lanjut, Borah (2024) menyoroti bahwa pada sistem multi-agen yang kompleks (Smart Autonomous Multi-agent Systems/SAMAS), kegagalan satu komponen — apakah itu sensor LiDAR, aktuator roda, maupun *link* komunikasi nirkabel — dapat memicu efek domino yang menurunkan produktivitas lini hingga 35–50% dan meningkatkan *unplanned downtime* yang biayanya mencapai USD 10.000–50.000 per jam di industri semikonduktor. Oleh karena itu, kemampuan Fault Detection, Isolation, and Reconstruction (FDIR) menjadi kebutuhan kritis yang tidak terpisahkan dari *motion planning* modern. Integrasi *reinforcement learning* (RL) dengan *nonlinear filtering* (misalnya *Extended Kalman Filter*/EKF atau *Unscented Kalman Filter*/UKF) menawarkan paradigma baru di mana agen robotik mampu belajar kebijakan optimal melalui interaksi *trial-and-error*, sekaligus mempertahankan ketahanan terhadap degradasi sensor dan *fault* aktuator (Borah, 2024, https://doi.org/10.32920/25412566.v1).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformalkan masalah *motion planning* sebagai MDP diskret-waktu yang dinyatakan oleh 5-tupel:

$$\mathcal{M} = (S, A, P, R, \gamma)$$

di mana:
- $S \subset \mathbb{R}^{n}$ adalah ruang state kontinu yang mencakup konfigurasi robot $\mathbf{q}_t = (x_t, y_t, \theta_t) \in SE(2)$, ditambah pembacaan sensor $\mathbf{z}_t$;
- $A$ adalah ruang aksi (misalnya $\{0, \pm 30^\circ, \pm 60^\circ\}$ untuk steering diskret, atau torsik/kantim untuk aksi kontinu);
- $P(s'|s,a) : S \times A \times S \rightarrow [0,1]$ adalah fungsi probabilitas transisi;
- $R: S \times A \times S \rightarrow \mathbb{R}$ adalah *reward function*;
- $\gamma \in [0,1)$ adalah *discount factor* yang menentukan trade-off antara reward jangka pendek dan jangka panjang.

### 2.2 Persamaan Bellman dan Fungsi Nilai Optimal

Fungsi nilai optimal $V^*(s)$ merepresentasikan ekspektasi reward kumulatif maksimum dari state $s$, yang memenuhi *Bellman optimality equation*:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\bigl[R(s,a,s') + \gamma V^*(s')\bigr]$$

Fungsi aksi-nilai (Q-function) yang menjadi dasar algoritma Q-learning diformulasikan sebagai:

$$Q^*(s,a) = \sum_{s' \in S} P(s'|s,a)\bigl[R(s,a,s') +