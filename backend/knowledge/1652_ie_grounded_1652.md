# 1652 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Robot Mobil Otonom dan Sistem Multi-Agen Cerdas di Lingkungan Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning menggunakan reinforcement learning (RL) pada sistem otonom industri
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*. Dalam *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. Peer-Reviewed Journal / Dissertation Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 telah memaksa pelaku industri manufaktur, pergudangan, logistik, dan energi untuk mengadopsi sistem otonom berskala besar. Rahul Kala (2024) dalam bab "*Motion Planning Using Reinforcement Learning*" di buku *Autonomous Mobile Robots* menegaskan bahwa perencanaan gerak (motion planning) merupakan salah satu tantangan fundamental dalam pengoperasian robot mobil otonom (AMR), khususnya di lingkungan yang tidak terstruktur penuh, bersifat dinamis, dan memiliki banyak hambatan [DOI: 10.1016/b978-0-443-18908-1.00016-9]. Kala mengkritik pendekatan klasik seperti *Artificial Potential Field* (APF), *Probabilistic Roadmap* (PRM), dan *Rapidly-exploring Random Tree* (RRT) yang bersifat reaktif dan deterministik; pendekatan ini cenderung gagal menemukan kebijakan optimal ketika ruang keadaan (state space) bersifat kontinu berdimensi tinggi, menjebak agen di minimum lokal, atau tidak mampu beradaptasi terhadap perubahan lingkungan secara *real-time*.

Kebutuhan industri akan perencanaan gerak yang adaptif semakin mendesak seiring dengan meningkatnya kompleksitas rantai pasok. Warehouse automation seperti yang dikembangkan oleh Amazon Robotics, Symbotic, dan AutoStore menuntut AMR untuk menavigasi lorong sempit dengan ratusan rak, manusia, dan forklift yang berpindah secara stokastik. Dalam konteks ini, pendekatan *Reinforcement Learning* (RL) — yang mempelajari kebijakan (policy) optimal melalui interaksi berulang dengan lingkungan menggunakan sinyal *reward* — menjadi paradigma yang memungkinkan agen memilih aksi *a* ∈ *A* secara probabilistik berdasarkan *state* *s* ∈ *S* untuk memaksimumkan *expected cumulative reward* jangka panjang.

Kontribusi penting lainnya datang dari Kaustav Borah (2024) yang membahas arsitektur *Smart Autonomous Multi-Agent Systems* (SAMAS) berbasis RL dan *nonlinear filtering* [DOI: 10.32920/25412566.v1]. Borah menyoroti bahwa di sistem teknik kompleks — seperti jaringan pipa migas, gardu induk tenaga listrik, atau lini perakitan robotik — kerusakan pada sensor, aktuator, atau jaringan komunikasi dapat terjadi sewaktu-waktu dan menyebabkan kerugian ekonomi signifikan. Metodologi *Fault Detection, Isolation, and Reconstruction* (FDIR) berbasis multi-agen RL Borah ditujukan untuk mendeteksi anomali secara dini, mengisolasi lokasi kegagalan, dan merekonstruksi fungsi agen yang terganggu. Perspektif ini relevan bagi teknisi industri karena mengintegrasikan perencanaan gerak otonom dengan keandalan sistem (system reliability), sehingga tidak sekadar fokus pada pencapaian tugas tetapi juga pada keberlanjutan operasional (operational continuity).

Urgensi ekonominya tampak pada statistik: menurut laporan industri, downtime satu menit pada lini produksi semikonduktor bernilai lebih dari USD 50.000, sementara kesalahan navigasi satu unit AMR di gudang dapat menunda hingga 200 order. Dengan demikian, integrasi RL untuk motion planning bukan sekadar keunggulan kompetitif, melainkan kebutuhan operasional strategis bagi insinyur teknik industri masa kini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

RL untuk motion planning secara formal dimodelkan sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tupel ⟨*S*, *A*, *P*, *R*, *γ*⟩, di mana:

- *S* = himpunan state (posisi, orientasi, kecepatan, pembacaan sensor),
- *A* = himpunan aksi (kecepatan linear *v*, kecepatan angular *ω*, atau perintah diskret),
- *P*(*s′* | *s*, *a*) = probabilitas transisi ke *s′* dari *s* ketika aksi *a* dilakukan,
- *R*(*s*, *a*) = fungsi reward langsung,
- *γ* ∈ [0,1) = faktor diskonto untuk horizon masa depan.

Fungsi tujuan (objective function) agen RL adalah memaksimumkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k \, R(s_{t+k}, a_{t+k})$$

Kala (2024) menekankan bahwa fungsi *Q* yang merepresentasikan nilai ekspektasi kumulatif mengikuti *Bellman optimality equation*:

$$Q^*(s, a) = \mathbb{E}\left[ R(s, a) + \gamma \max_{a'} Q^*(s', a') \right]$$

### 2.2 Deep Q-Network (DQN) untuk State Kontinu

Karena ruang keadaan AMR bersifat kontinu (misalnya koordinat (*x*, *y*) ∈ ℝ² dan heading *θ* ∈ [0, 2π]), Kala mengusulkan penggunaan *Deep Q-Network* (DQN) dengan parameter θ sebagai fungsi aproksimator:

$$Q(s, a; \boldsymbol{\theta}) \approx Q^*(s, a)$$

Fungsi *loss* untuk melatih DQN adalah:

$$L(\boldsymbol{\theta}) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \boldsymbol{\theta}^{-}) - Q(s, a; \boldsymbol{\theta}) \right)^2 \right]$$

dengan θ⁻ adalah parameter dari *target network* yang diperbarui periodik, dan 𝒟 adalah *replay buffer* untuk dekorelasi sampel pelatihan.

### 2.3 Formulasi SAMAS dan Nonlinear Filtering (Borah, 2024)

Borah (2024) memodelkan dinamika agen ke-*i* sebagai sistem nonlinier:

$$\mathbf{x}_k^{(i)} = f_i(\mathbf{x}_{k-1}^{(i)}, \mathbf{u}_k^{(i)}) + \mathbf{w}_{k-1}^{(i)}$$

dengan pengukuran sensor:

$$\mathbf{z}_k^{(i)} = h_i(\mathbf{x}_k^{(i)}) + \mathbf{v}_k^{(i)}$$

di mana $\mathbf{w}_k$ dan $\mathbf{v}_k$ adalah noise proses dan pengukuran, masing-masing berdistribusi 𝒩(0, *Q*) dan 𝒩(0, *R*). Untuk rekonstruksi state digunakan *Extended Kalman Filter* (EKF):

$$\hat{\mathbf{x}}_k = \hat{\mathbf{x}}_k^- + \mathbf{K}_k \left( \mathbf{z}_k - h(\hat{\mathbf{x}}_k^-) \right)$$

dengan *gain* Kalman:

$$\mathbf{K}_k = \mathbf{P}_k^- \mathbf{H}_k^\top \left( \mathbf{H}_k \mathbf{P}_k^- \mathbf{H}_k^\top + \mathbf{R}_k \right)^{-1}$$

dan linierisasi Jacobian $H_k = \left. \frac{\partial h}{\partial \mathbf{x}} \right|_{\hat{\mathbf{x}}_k^-}$.

### 2.4 Integrasi Reward untuk Navigasi dan FDIR

Reward fungsi yang menggabungkan aspek navigasi dan deteksi fault dapat ditulis sebagai:

$$R(s, a) = \alpha \cdot R_{nav}(s, a) + \beta \cdot R_{safe}(s, a) + \delta \cdot R_{fdir}(s, a)$$

dengan α, β, δ adalah bobot trade-off (umumnya α + β + δ = 1). $R_{nav}$ memberikan reward positif saat agen mendekati target dan reward negatif saat menabrak hambatan; $R_{fdir}$ memberikan sinyal ketika residual filter $\mathbf{r}_k = \mathbf{z}_k - h(\hat{\mathbf{x}}_k^-)$ melebihi ambang batas statistik (misalnya $|r_k| > 3\sigma$), mengindikasikan anomali sensor atau kerusakan aktuator.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning RL di lingkungan produksi mengikuti SOP berikut:

### 3.1 Arsitektur Sistem

1. **Akuisisi Data & Pemetaan (SLAM)** — Menggunakan LiDAR 2D/3D dan *Simultaneous Localization and Mapping* untuk menghasilkan peta grid occupancy (umumnya resolusi 0,05–0,1 m). Standar yang relevan: ISO 3691-4:2020 untuk *driverless industrial trucks*.
2. **Pre-processing State** — Konversi peta dan bacaan sensor ke fitur input Jaringan Saraf Tiruan (misalnya tensor 80×80 untuk CNN).
3. **Pelatihan Agen RL** — Dilakukan secara *offline* dalam simulator (Gazebo, Webots, atau Isaac Sim) selama 1–5 juta episode, kemudian di-*fine-tune* di lingkungan nyata.
4. **Validasi SIL/HIL** — *Software-in-the-Loop* dan *Hardware-in-the-Loop* sesuai IEC 61508 untuk fungsional safety.
5. **Deployment & Monitoring** — Integrasi dengan Fleet Management System (FMS), WMS, dan dasbor SCADA.

### 3.2 Diagram Alir Implementasi

```
[Mulai] → [Inisialisasi SLAM] → [Bangun Occupancy Grid]
   ↓
[Inisialisasi Bobot DQN θ, Replay Buffer D]
   ↓
[Loop Episode]:
   Episode = 1..M
   ↓
   [Reset Posisi Awal s₀]
   ↓
   [Loop t = 1..T]:
       Observasi s_t → ε-greedy pilih a_t
       Eksekusi a_t, observasi r_t, s_{t+1}
       Simpan (s_t, a_t, r_t, s_{t+1}) ke D
       Sample mini-batch dari D
       Hitung loss L(θ), backprop, update θ
       Periodik update target θ⁻ ← θ
   ↓
   [Evaluasi: collision rate, success rate, path length]
   ↓
[Deploy ke AMR fisik + modul FDIR (EKF/UKF)]
   ↓
[Monitoring via FMS, Alert jika residual > 3σ]
   ↓
[Selesai]
```

### 3.3 Prosedur FDIR berbasis SAMAS

Mengikuti kerangka Borah (2024), setiap agen menjalankan tiga subsistem secara paralel:

- **Detection**: statistik χ² terhadap residual filter, ambang batas τ_d.
- **Isolation**: *bank of Kalman filters* dengan hipotesis fault berbeda, pilih hipotesis dengan likelihood residual tertinggi.
- **Reconstruction**: ganti state estimator dengan rekonstruksi berbasis tetangga agen melalui consensus filter atau replikasi kontrol.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario

Sebuah fasilitas *e-commerce* berkapasitas 50.000 order/hari menggunakan 100 unit AMR untuk memindahkan *tote* dari area receiving ke storage. Target laju produksi: 1.200 tote/jam dengan jarak rata-rata 80 meter per tote.

### 4.2 Parameter Input

| Parameter | Nilai | Keterangan |
|-----------|-------|------------|
| Grid resolution | 0,1 m | ISO-compliant |
| Aksi diskret | 5 aksi | Maju, mundur, belok kiri, belok kanan, berhenti |
| γ (faktor diskonto) | 0,95 | RL hyperparameter |
| ε (eksplorasi awal) | 1,0 → 0,05 | Decay 0,995/episode |
| Learning rate | 1e-4 | Adam optimizer |
| Batch size | 64 | DQN |
| Reward goal | +100 | Capai target |
| Reward collision | −50 | Tabrakan |
| Reward step | −1 | Biaya langkah |

### 4.3 Perhitungan Reward Kumulatif Episode

Misalkan agen berhasil sampai target dalam 80 langkah tanpa tabrakan. Expected return dengan γ=0,95:

$$G = \sum_{k=0}^{79} (0,95)^k \cdot (-1) + (0,95)^{80} \cdot 100$$

$$G_{step} = -1 \cdot \frac{1-(0,95)^{80}}{1-0,95} = -\frac{1-0,0169}{0,05} = -19,66$$

$$G_{goal} = (0,95)^{80} \cdot 100 = 1,69$$

$$G_{total} = 81,34$$

Jika agen menabrak di langkah 40: $G = -1 \cdot \frac{1-(0,95)^{40}}{0,05} + (0,95)^{40} \cdot (-50) = -16,46 + (-2,84) = -19,30$. Perbedaan nilai ini menjadi sinyal pelatihan bagi DQN untuk membedakan kebijakan aman vs berisiko.

### 4.4 Perhitungan Path Optimal dengan APF (baseline)

Potensial tarik ke target $(x_g, y_g) = (80, 0)$ dari posisi $(0, 0)$:

$$U_{att} = \frac{1}{2} k_{att} \cdot d^2 = \frac{1}{2} \cdot 0{,}5 \cdot 80^2 = 1600$$

Potensial tolak dari satu hambatan di $(40, 5)$ berjarak 5 m:

$$U_{rep} = \frac{1}{2} k_{rep} \left(\frac{1}{d} - \frac{1}{d_0}\right)^2 = \frac{1}{2} \cdot 500 \left(\frac{1}{5} - \frac{1}{10}\right)^2 = 2{,}5$$

Gaya resultan pada agen memberikan arah gerak yang mana APF cenderung gagal ketika hambatan berbentuk concave (masalah minimum lokal).

### 4.5 Simulasi DQN vs Baseline

Setelah 500.000 episode pelatihan di simulator:

| Met.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
