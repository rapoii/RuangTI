# 2404 — Perencanaan Gerak Otonom Berbasis Reinforcement Learning untuk Robot Mobile Industri dan Sistem Multi-Agen Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi Industri 4.0 telah men transformasi fundamental terhadap arsitektur lantai produksi dan rantai pasok global, di mana robot mobile otonom—seperti Automated Guided Vehicle (AGV), Autonomous Mobile Robot (AMR), dan drone logistik—berkembang dari sekadar alat material handling menjadi simpul keputusan cerdas yang beroperasi dalam lingkungan stokastik. Rahul Kala (2024) dalam chapter *Autonomous Mobile Robots* yang diterbitkan Elsevier menekankan bahwa perencanaan gerak (motion planning) merupakan salah satu tantangan paling menentukan dalam mengoperasionalkan robot otonom secara aman dan efisien dalam ruang kerja bersama manusia (*human-robot collaboration*) (Kala, 2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Berbeda dengan perencanaan jalur deterministik klasik seperti algoritma A*, Rapidly-exploring Random Tree (RRT), atau Potential Field, reinforcement learning (RL) memungkinkan agen robot untuk *belajar* kebijakan navigasi optimal melalui interaksi trial-and-error dengan lingkungan, sehingga mampu beradaptasi terhadap dinamika lantai pabrik yang terus berubah.

Urgensi ekonomi dan operasional pendekatan ini dapat diukur dari beberapa indikator. Pasar global AGV/AMR diproyeksikan mencapai lebih dari USD 14 miliar pada 2030 dengan Compound Annual Growth Rate (CAGR) di kisaran 15–17%, didorong oleh kelangkaan tenaga kerja, kebutuhan akan *order fulfillment* dalam waktu kurang dari 24 jam pada e-commerce, serta standar keselamatan ISO 3691-4 untuk kendaraan tanpa pengemudi. Namun, kompleksitas operasional meningkat tajam ketika robot-robot ini harus beroperasi sebagai *fleet*—puluhan hingga ratusan unit yang saling berinteraksi di jalur sempit. Dalam konteks ini, Kaustav Borah (2024) berargumen bahwa sistem multi-agen otonom (Smart Autonomous Multi-Agent Systems/SAMAS) memerlukan integrasi RL dengan *nonlinear filtering* (misalnya Extended Kalman Filter/Particle Filter) untuk melakukan *Fault Detection, Isolation, and Reconstruction* (FDIR) secara real-time ketika sensor, aktuator, atau link komunikasi mengalami degradasi (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Kombinasi ini menghasilkan arsitektur robotika industri yang tidak hanya *path-aware* tetapi juga *fault-resilient*.

Dari perspektif Teknik Industri, permasalahan motion planning bukan sekadar persoalan algoritmik, melainkan persoalan rekayasa sistem yang menuntut keseimbangan antara empat metrik utama: (1) *path optimality* (panjang jalur minimum), (2) *safety* (jarak minimum ke rintangan dan manusia), (3) *throughput* (waktu siklus per pick-up), dan (4) *energy efficiency* (konsumsi Watt-hour per mission). RL—sebagaimana dibingkai Kala—menyediakan kerangka formal Markov Decision Process (MDP) untuk mengoptimasi keempat metrik ini secara simultan melalui fungsi reward yang dirancang secara cermat. Bagian berikutnya akan memformulasikan kerangka matematis tersebut secara rigor.

## 2. Landasan Teori & Formulasi Matematis

Perencanaan gerak dengan reinforcement learning diformulasikan secara formal sebagai **Markov Decision Process (MDP)** yang dinyatakan oleh tuple $\langle S, A, P, R, \gamma \rangle$, di mana:

- $S$ : himpunan state (konfigurasi robot + peta representasi lingkungan),
- $A$ : himpunan aksi diskret atau kontinu (percepatan, kecepatan sudut, perpindahan),
- $P(s'|s,a)$ : probabilitas transisi state,
- $R(s,a,s')$ : fungsi reward skalar,
- $\gamma \in [0,1)$ : faktor diskonto horizon panjang.

Kebijakan (policy) $\pi: S \rightarrow A$ dievaluasi melalui *value function*:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\!\left[\sum_{t=0}^{\infty} \gamma^{t} R(s_t, a_t, s_{t+1}) \,\Big|\, s_0 = s\right]$$

dan *action-value function* (Q-function):

$$Q^{\pi}(s,a) = \mathbb{E}_{\pi}\!\left[\sum_{t=0}^{\infty} \gamma^{t} R(s_t,a_t,s_{t+1}) \,\Big|\, s_0=s,\, a_0=a\right]$$

yang memenuhi **Bellman optimality equation**:

$$Q^{*}(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^{*}(s',a')\right]$$

Untuk kasus industri dengan state space berdimensi tinggi dan kontinu (misalnya peta grid $100\times100$ berisi informasi obstacle dinamis), Kala (2024) mengadopsi **Deep Q-Network (DQN)** yang mengaproksimasi $Q^{*}(s,a) \approx Q(s,a;\theta)$ menggunakan parameter jaringan saraf $\theta$. Fungsi loss yang diminimasi adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\!\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta)\right)^{2}\right]$$

di mana $\mathcal{D}$ adalah *replay buffer* yang menyimpan transisi pengalaman, dan $\theta^{-}$ adalah parameter dari *target network* yang di-*update* secara periodik untuk menstabilkan training.

Untuk tugas-tugas dengan aksi kontinu (seperti pada AMR dengan penggerak differential-drive yang memerlukan kecepatan sudut dan linear kontinu), digunakan algoritma **Deep Deterministic Policy Gradient (DDPG)** atau **Proximal Policy Optimization (PPG)** dengan objective:

$$J(\phi) = \mathbb{E}_{s \sim \mathcal{D}}\!\left[Q(s, \pi(s;\phi))\right]$$

Pada level koordinasi fleet, formulasi diperluas menjadi **Multi-Agent MDP** (M-MDP) atau **Decentralized Partially Observable MDP (Dec-POMDP)**. Borah (2024) mengusulkan arsitektur SAMAS di mana setiap agen $i \in \{1,\ldots,N\}$ mempertahankan belief state $b_i^{t}$ yang di-*update* melalui *nonlinear filter*:

$$b_i^{t} = f_{\text{NF}}\!\left(b_i^{t-1}, a_i^{t-1}, z_i^{t}\right)$$

di mana $z_i^{t}$ adalah observasi sensor yang mengandung derau. Keputusan aksi kemudian dipilih melalui policy terdistribusi $\pi_i(b_i^{t})$, dan FDIR dijalankan dengan menghitung residual:

$$\rho_i^{t} = \| z_i^{t} - h(\hat{x}_i^{t|t-1}) \|_{\Sigma^{-1}}$$

yang dibandingkan terhadap ambang $\chi^{2}_{\alpha, n}$ untuk menentukan apakah terjadi fault pada sensor/aktuator. Jika terdeteksi, mekanisme rekonstruksi $\hat{x}_i^{t|t} = g(b_i^{t}, u_i^{t-1})$ mengaktifkan jalur kontrol cadangan sehingga robot melanjutkan misi tanpa interupsi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lingkungan industri mengikuti SOP 7-tahap yang distandarkan sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan dan Diskritisasi State.** Peta lantai pabrik direpresentasikan sebagai occupancy grid dengan resolusi $\Delta r = 0{,}25$ m per sel. State $s_t$ didefinisikan sebagai tuple: posisi robot $(x_t, y_t)$, orientasi $\theta_t$, kecepatan linier $v_t$, jarak ke goal $d_g$, jarak minimum ke obstacle $d_{obs}$, dan top-$k$ tetangga terdekat (koordinat relatif + ukuran). Total dimensi fitur umumnya 12–20.

**Tahap 2 — Desain Aksi Diskret.** Untuk AGV dengan kinematic constraint non-holonomic, aksi yang umum digunakan adalah 5-primitif: $\{ \text{stop}, \text{forward}, \text{backward}, \text{turn-left}, \text{turn-right} \}$ dengan $\Delta v = 0{,}1$ m/s dan $\Delta \theta = 15^{\circ}$. Ini memenuhi standar ISO 3691-4 untuk manuver terukur.

**Tahap 3 — Desain Fungsi Reward.** Reward shaping yang lazim dalam literatur Kala (2024) mengikuti pola:

$$r_t = \alpha_1 (d_{g}^{t-1} - d_g^{t}) - \alpha_2 \cdot \mathbb{1}[d_{obs} < d_{\text{safe}}] - \alpha_3 \cdot \mathbb{1}[\text{collision}] + \alpha_4 \cdot \mathbb{1}[\text{goal reached}]$$

dengan tipikal $\alpha_1 = 10$, $\alpha_2 = 5$, $\alpha_3 = 100$, $\alpha_4 = 50$, dan $d_{\text{safe}} = 0{,}5$ m (memenuhi jarak pelindung ISO 13855).

**Tahap 4 — Arsitektur Jaringan dan Training.** Menggunakan dua hidden layer 64-neuron dengan aktivasi ReLU, optimizer Adam dengan learning rate $\eta = 10^{-4}$, dan replay buffer kapasitas $\mathcal{D} = 10^{6}$. Training dilakukan secara off-line di *digital twin* (NVIDIA Isaac Sim atau Gazebo) selama $M = 10^{6}$ episode sebelum deployment ke lantai produksi (memenuhi protokol V\&V ISO 10218-2 untuk collaborative robots).

**Tahap 5 — Integrasi dengan Nonlinear Filter (per Borah, 2024).** State observer berbasis *Unscented Kalman Filter* dipasang pada robot dengan update rate 50 Hz, memberikan *belief* yang siap dipakai sebagai input state RL.

**Tahap 6 — Deployment dan Safety Layer.** Modul RL menghasilkan aksi referensi yang dilewatkan ke *safety filter* (Control Barrier Function) sebelum dieksekusi aktuator, menjamin kepatuhan terhadap batas kecepatan dan zona eksklusi manusia.

**Tahap 7 — Monitoring, FDIR, dan Continual Learning.** Fault detector berbasis $\chi^{2}$-test memantau residual; jika fault terdeteksi, policy RL dialihkan ke mode *safe-stop* dan alarm dikirim ke Fleet Management System (FMS). Data fault digunakan untuk *fine-tune* policy melalui federated learning lintas robot.

Diagram alir proses rekayasa secara skematis adalah:

```
   Sensor (LIDAR, IMU) → UKF Estimator → Belief State s_t
                                                  ↓
                                          Policy Network π_θ(s)
                                                  ↓
                                          Safety Barrier Filter
                                                  ↓
                                          Aksi aktuator (v, ω)
                                                  ↓
                                          Residual → FDIR Module
                                                  ↓
                              [OK] ──→ Lanjut misi
                              [FAULT] → Safe-stop + Alarm FMS
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah gudang e-commerce berkapasitas 50.000 SKU mengoperasikan 12 unit AMR dengan misi pick-and-to-person. Lantai produksi berukuran $L_x \times L_y = 80\,\text{m} \times 40\,\text{m}$ dengan occupancy grid $320 \times 160$ sel ($\Delta r = 0{,}25$ m). Robot start pada $(x_0, y_0) = (5, 5)$ m dan goal pada $(x_g, y_g) = (70, 35)$ m dengan 17 obstacle statis dan 2 obstacle dinamis (pejalan kaki).

**Parameter training RL (DQN):**

| Parameter | Nilai | Parameter | Nilai |
|-----------|-------|-----------|-------|
| $\gamma$ | 0,99 | Batch size | 64 |