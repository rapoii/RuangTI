# 2628 — Perencanaan Gerak (Motion Planning) Robot Mobil Otonom Menggunakan Pembelajaran Penguatan (Reinforcement Learning)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi manufaktur menuju *Industry 4.0* dan *Society 5.0* telah menempatkan robot mobil otonom (*Autonomous Mobile Robots*/AMR) sebagai tulang punggung logistik intralogistik, perakitan fleksibel, dan rantai pasok dingin (*cold chain*). Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan kemampuan robot menavigasi lingkungan dinamis, menghindari halangan, dan memenuhi约束 waktu siklus (*cycle time*) yang diminta operator lantai produksi [DOI: 10.1016/b978-0-443-18908-1.00016-9]. Secara ekonomi, pasar AMR global diproyeksikan melampaui USD 8 miliar pada 2030, didorong oleh e-commerce, *micro-fulfillment*, dan kelangkaan tenaga kerja gudang.

Dalam konteks Teknik Industri, motion planning bukan sekadar persoalan geometris, melainkan masalah keputusan stokastik di bawah ketidakpastian lingkungan (lalu lintas AMR lain, pejalan kaki, perubahan layout). Metode klasik seperti *A\**, Rapidly-exploring Random Tree (RRT), dan Potential Field menunjukkan degradasi performa ketika ruang状态 (*state space*) membesar dan ketika biaya komputasi menjadi pembatas *real-time*. Kala (2024) berargumen bahwa *Reinforcement Learning* (RL) memberikan kerangka pemecahan masalah keputusan Markov (*Markov Decision Process*/MDP) yang adaptif, mampu belajar kebijakan optimal melalui interaksi trial-and-error tanpa memerlukan model lingkungan eksplisit.

Urgensi diperkuat oleh Kaustav Borah (2024) yang menyoroti bahwa sistem otonom multi-agen (*Smart Autonomous Multi-Agent Systems*/SAMAS) menghadapi risiko故障 sensor, aktuator, dan *controller* yang menurunkan keandalan motion planning [DOI: 10.32920/25412566.v1]. Borah memperkenalkan arsitektur *Fault Detection, Isolation, and Reconstruction* (FDIR) berbasis nonlinear filtering yang harus berjalan simultan dengan modul perencanaan gerak RL. Dengan demikian, integrasi RL + FDIR menjadi *baseline* riset dan praktik industri modern.

Dari perspektif lantai pabrik, keputusan memilih arsitektur motion planning berdampak langsung pada *Overall Equipment Effectiveness* (OEE), utilisasi kapasitas (%), dan *Safety Integrity Level* (SIL). Sambung pandang ini mengarahkan insinyur industri pada kebutuhan akan algoritma RL yang *sample-efficient*, *safety-aware*, dan dapat di-*certify* menurut ISO 13849 (keselamatan mesin) dan IEC 61508 (sistem instrumentasi keselamatan).

## 2. Landasan Teori & Formulasi Matematis

Kerangka formal motion planning dengan RL dimodelkan sebagai MDP yang didefinisikan oleh tuple lima-elemen:

$$
\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle
$$

di mana $\mathcal{S}$ adalah himpunan状态 (posisi diskret atau kontinu robot), $\mathcal{A}$ himpunan aksi (misalnya $\{maju, mundur, kiri, kanan, diam\}$), $P(s' \mid s,a)$ probabilitas transisi, $R(s,a,s')$ fungsi reward, dan $\gamma \in [0,1)$ faktor diskonto. Kala (2024) menekankan bahwa asumsi Markov — *future is independent of the past given the present* — menjadi fondasi konvergensi algoritma.

Kebijakan $\pi : \mathcal{S} \rightarrow \mathcal{A}$ dievaluasi oleh fungsi nilai状态:

$$
V^{\pi}(s) = \mathbb{E}_{\pi}\!\left[\sum_{k=0}^{\infty}\gamma^{k} R_{t+k+1} \mid S_t = s\right]
$$

dan fungsi aksi-nilai (Q-function) yang lebih relevan untuk kontrol:

$$
Q^{\pi}(s,a) = \mathbb{E}_{\pi}\!\left[\sum_{k=0}^{\infty}\gamma^{k} R_{t+k+1} \mid S_t = s, A_t = a\right]
$$

Persamaan optimalitas Bellman untuk $Q^{\star}$ adalah:

$$
Q^{\star}(s,a) = \mathbb{E}\!\left[R_{t+1} + \gamma \max_{a' \in \mathcal{A}} Q^{\star}(S_{t+1}, a') \;\middle|\; S_t = s, A_t = a\right]
$$

Untuk lingkungan diskret berukuran kecil, Q-learning tabular digunakan dengan aturan pembaruan:

$$
Q(s,a) \leftarrow Q(s,a) + \alpha\!\left[r + \gamma \max_{a'} Q(s', a') - Q(s,a)\right]
$$

di mana $\alpha$ adalah *learning rate*. Bukti konvergensi (Watkins, 1992) mensyaratkan $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

Untuk ruang状态 kontinu berdimensi tinggi — tipikal gudang modern dengan ratusan sel rak — Kala (2024) mengusulkan Deep Q-Network (DQN) yang mengaproksimasi $Q(s,a;\theta)$ dengan jaringan saraf tiruan. Fungsi rugi yang diminimisasi:

$$
L(\theta) = \mathbb{E}_{(s,a,r,s')\sim D}\!\left[\left(y_i - Q(s,a;\theta)\right)^{2}\right]
\quad \text{dengan} \quad
y_i = r + \gamma \max_{a'} Q(s', a';\theta^{-})
$$

menggunakan *target network* dengan parameter $\theta^{-}$ yang di-*update* periodik dan *experience replay buffer* $D$ untuk de-korelasi sampel.

Untuk kasus multi-agen sebagaimana disinggung Borah (2024), masalah diperluas menjadi *Decentralized Partially Observable MDP* (Dec-POMDP), di mana setiap agen $i$ mempertahankan keyakinan (*belief*) $b_i$ dan kebijakan bersyarat $\pi_i(b_i)$. Formulasi aktor-kritik multi-agen:

$$
\nabla_{\theta_i} J(\theta_i) = \mathbb{E}_{s\sim p^{\pi}, a\sim\pi_i}\!\left[\nabla_{\theta_i} \log \pi_i(a_i \mid b_i)\, A^{\pi}(s, a)\right]
$$

dengan $A^{\pi}$ fungsi keunggulan (*advantage*). Nonlinear filter (misalnya Extended Kalman Filter) yang dikembangkan Borah menyaring状态 sensor untuk membangun $b_i$ secara Bayesian:

$$
\hat{x}_{k\mid k} = \hat{x}_{k\mid k-1} + K_k\!\left(z_k - h(\hat{x}_{k\mid k-1})\right)
\quad,\quad
K_k = P_{k\mid k-1} H_k^{\top}\!\left(H_k P_{k\mid k-1} H_k^{\top} + R_k\right)^{-1}
$$

di mana $K_k$ adalah *Kalman gain* yang meminimalkan kovariansi galat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning RL di lantai pabrik mengikuti SOP delapan-langkah berikut, yang konsisten dengan praktik Kala (2024) dan protokol FDIR Borah (2024):

**Langkah 1 — Pemetaan Pabrik (*SLAM*).** Menggunakan LiDAR 2D/3D dan encoder roda, bangun *occupancy grid* $\mathcal{G}\in\{0,1\}^{H\times W}$ dengan resolusi $\Delta$ (umumnya 0,05 m).

**Langkah 2 — Diskretisasi状态.** Tentukan himpunan状态 $\mathcal{S}$ sebagai sel aktif yang dapat dilalui AMR. Definisikan aksi $\mathcal{A}$ sesuai derajat kebebasan (*degrees of freedom*/DOF) dan kinematika differential-drive.

**Langkah 3 — Desain Fungsi Reward.** Rancang $R(s,a,s')$ menurut *reward shaping*: $r_{goal}=+100$, $r_{collision}=-100$, $r_{obstacle}=-10$, $r_{step}=-1$. Tambahkan *potential-based shaping* $\Phi(s)$ untuk mempercepat konvergensi:

$$
r'(s,a,s') = r(s,a,s') + \gamma \Phi(s') - \Phi(s)
$$

**Langkah 4 — Inisialisasi Q-table / Bobot Jaringan.** Inisialisasi $Q(s,a)=0$ untuk tabular atau bobot acak kecil ($\sim\mathcal{N}(0, 10^{-3})$) untuk DQN.

**Langkah 5 — Loop Pelatihan Episodik.** Untuk setiap episode, reset posisi, jalankan kebijakan $\varepsilon$-greedy ($\varepsilon$ decay dari 1,0 ke 0,01), kumpulkan transisi, simpan di *replay buffer*, dan lakukan pembaruan parameter setiap $N$ langkah.

**Langkah 6 — Validasi Silang (*Cross-Validation*).** Pisahkan 20% sel menjadi *test grid*, ukur *success rate*, *average steps-to-goal*, dan *collision rate*. Target: success rate $\geq 95\%$ pada 100 episode uji.

**Langkah 7 — Integrasi FDIR (Borah, 2024).** Pasang modul nonlinear filter untuk状态 sensor residual $\mathbf{r}_k = \mathbf{z}_k - \mathbf{H}\hat{\mathbf{x}}_{k\mid k-1}$. Jika $\chi^2$-test pada $\|\mathbf{r}_k\|^2$ melebihi ambang, aktifkan mode *safe-stop* dan rekonstruksi状态 menggunakan *actor-critic* fallback.

**Langkah 8 — Audit & Sertifikasi.** Dokumentasikan semua hiper-parameter, latih di *Hardware-in-the-Loop* (HIL), dan verifikasi terhadap ISO 3691-4 (AMR industri) dan IEC 61508 SIL-2.

```
[Pemetaan] → [Diskretisasi] → [Reward Design] → [Inisialisasi] 
        ↓
[Pelatihan Episodik] ⇄ [Replay Buffer]
        ↓
[Validasi 20% test grid]
        ↓
[Integrasi FDIR Filter ⇄ RL Policy]
        ↓
[HIL Test] → [Sertifikasi ISO/IEC]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah gudang e-commerce 5×5 sel (resolusi 0,5 m, luas total 6,25 m²) memiliki halangan di sel $(1,2)$, $(2,2)$, $(2,3)$, $(3,1)$. Robot differential-drive dimulai di $S_0=(0,0)$, target di $S_g=(4,4)$. Parameter RL: $\alpha=0{,}1$, $\gamma=0{,}9$, $\varepsilon$-greedy decay $0{,}99$ per episode, reward $r_g=+100$, $r_c=-100$, $r_o=-10$, $r_{step}=-1$.

**Langkah 1 — Inisialisasi Q-table 25×4** (baris=state, kolom=aksi $\{$up, down, left, right$\}$), semua entri $=0$.

**Langkah 2 — Episode 1, langkah t=1.** Robot di $(0,0)$, pilih aksi *right* ($\varepsilon$-greedy).状态 berikutnya $(1,0)$ (bukan halangan), $r=-1$. Pembaruan:

$$
Q((0,0), right) \leftarrow 0 + 0