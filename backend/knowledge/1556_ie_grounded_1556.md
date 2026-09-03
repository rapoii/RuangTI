# 1556 — Perencanaan Gerak (Motion Planning) Robot Otonom Menggunakan Reinforcement Learning dalam Sistem Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning menggunakan reinforcement learning untuk autonomous mobile robots
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri menuju *Industry 4.0* dan *Society 5.0* telah menempatkan *autonomous mobile robots* (AMR) sebagai komponen vital dalam rantai pasok manufaktur, logistik pergudangan, dan sistem produksi fleksibel. Rahul Kala (2024) dalam tulisannya di buku *Autonomous Mobile Robots* menyoroti bahwa perencanaan gerak (*motion planning*) merupakan tantangan fundamental yang menentukan efisiensi operasional AMR di lingkungan industri yang dinamis, tidak terstruktur, dan penuh interferensi. Permasalahan ini bukan sekadar persoalan navigasi geometris, melainkan masalah optimasi keputusan sekuensial di mana robot harus memilih lintasan optimal dengan mempertimbangkan kendala kinematik, dinamik, konsumsi energi, dan keamanan operasional (Kala, 2024, DOI: 10.1016/b978-0-443-18908-1.00016-9).

Secara ekonomis, pasar AMR global diproyeksikan menembus nilai USD 14–18 miliar pada 2030 dengan *Compound Annual Growth Rate* (CAGR) di kisaran 18–22 persen. Urgensi utama industri adalah mengurangi *order-to-delivery lead time*, menekan biaya *pick-and-place* per unit, serta meningkatkan *throughput* gudang tanpa penambahan luas lantai. Kala (2024) menekankan bahwa pendekatan konvensional seperti *A\* search*, *Rapidly-exploring Random Tree* (RRT), dan *Artificial Potential Field* memiliki keterbatasan ketika menghadapi lingkungan yang berubah secara *real-time*, tabrakan dinamis dengan operator manusia, serta kebutuhan adaptasi terhadap kegagalan sensor. Disinilah *reinforcement learning* (RL) muncul sebagai paradigma yang memungkinkan AMR belajar kebijakan (*policy*) optimal melalui interaksi berulang dengan lingkungan tanpa memerlukan model eksplisit lengkap.

Borah (2024) melengkapi konteks ini dengan menunjukkan bahwa integrasi RL ke dalam sistem multi-agen otonom memerlukan arsitektur FDIR (*Fault Detection, Isolation, and Reconstruction*) yang kuat. Dalam sistem manufaktur terdistribusi, satu AMR yang gagal mengambil keputusan gerak dapat memicu efek domino pada lini produksi (Borah, 2024, DOI: 10.32920/25412566.v1). Oleh karena itu, modul ini memposisikan RL-based motion planning bukan sebagai riset akademis terisolasi, melainkan sebagai enabler strategis untuk otentikasi otonomi tingkat lanjut di fasilitas industri modern.

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti motion planning sebagai RL dipetakan ke dalam kerangka *Markov Decision Process* (MDP). Kala (2024) mendefinisikan MDP sebagai tuple $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ dengan komponen:

- $\mathcal{S}$: himpunan state (konfigurasi posisi, orientasi, kecepatan robot, plus peta okupansi lingkungan).
- $\mathcal{A}$: himpunan aksi diskret atau kontinyu (kecepatan linear $v$ dan angular $\omega$).
- $P(s'|s,a)$: probabilitas transisi state.
- $R(s,a,s')$: fungsi reward.
- $\gamma \in [0,1)$: faktor diskonto untuk biaya masa depan.

Tujuan agen RL adalah memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Fungsi nilai state $V^{\pi}(s)$ dan fungsi aksi-nilai $Q^{\pi}(s,a)$ didefinisikan melalui *Bellman optimality equation*:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

$$Q^*(s,a) = \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma \max_{a'} Q^*(s',a') \right]$$

Untuk kasus *model-free* yang lazim di AMR, Kala (2024) mengusulkan penggunaan Q-learning dengan aturan pembaruan:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

di mana $\alpha$ adalah laju pembelajaran. Untuk ruang state-aksi kontinyu yang besar, arsitektur *Deep Q-Network* (DQN) memperkirakan $Q(s,a;\theta)$ dengan parameter jaringan saraf $\theta$, dan meminimalkan loss:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

Borah (2024) menambahkan formulasi *state-space* untuk agen dengan dinamika nonlinier:

$$\mathbf{x}_{t+1} = f(\mathbf{x}_t, \mathbf{u}_t) + w_t, \quad \mathbf{y}_t = h(\mathbf{x}_t) + v_t$$

di mana $\mathbf{x}_t$ adalah vektor state (posisi, kecepatan), $\mathbf{u}_t$ adalah input kontrol, sedangkan $w_t$ dan $v_t$ adalah noise proses dan pengukuran. Pemfilteran nonlinier (misalnya *Extended Kalman Filter* atau *Particle Filter*) memberikan estimasi $\hat{\mathbf{x}}_t$ yang kemudian menjadi input state ke policy RL.

Fungsi reward khas motion planning industri:

$$r_t = -\lambda_1 d(s_t, s_{goal}) - \lambda_2 \mathbb{1}_{collision} + \lambda_3 \Delta v_t - \lambda_4 E_t$$

di mana $d(\cdot,\cdot)$ adalah jarak Euclidean ke goal, $\mathbb{1}_{collision}$ indikator tabrakan, $\Delta v_t$ perubahan kecepatan (menghargai kelancaran), dan $E_t$ konsumsi energi sesaat. Bobot $\lambda_i$ dituning oleh insinyur sesuai KPI operasional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di fasilitas industri mengikuti SOP bertahap yang diuraikan Kala (2024) dan diperkuat Borah (2024):

**Tahap 1 — Pemetaan Lingkungan dan Akuisisi Data.** Operator melakukan *site survey* dengan LiDAR 2D/3D, menghasilkan peta okupansi grid dengan resolusi tipikal 5–10 cm per sel. Peta disimpan dalam format *OccupancyGrid* ROS.

**Tahap 2 — Desain MDP.** Engineer mendefinisikan diskretisasi state (misalnya grid 50×50 meter dengan sel 0,25 m) dan aksi (8 arah diskret atau kontinyu $(v,\omega)$ dengan $v \in [0, 1.5]$ m/s, $\omega \in [-1.0, 1.0]$ rad/s). Reward function dikonstruksi sesuai KPI (waktu tempuh, jarak, keselamatan).

**Tahap 3 — Pelatihan Simulasi.** Digunakan *digital twin* fasilitas dalam simulator (Gazebo, Isaac Sim). Agen menjalani 1–5 juta episode dengan algoritma *Proximal Policy Optimization* (PPO) atau *Soft Actor-Critic* (SAC) untuk stabilitas. *Reward shaping* diterapkan agar konvergensi lebih cepat.

**Tahap 4 — Validasi Silikon-ke-Besi (*sim-to-real*).** *Domain randomization* terhadap parameter fisik (gesekan, massa, latensi sensor) mengurangi kesenjangan *reality gap*. Tahap ini sesuai standar ISO 13482 untuk robot personal care dan ISO/TS 15066 untuk kolaboratif.

**Tahap 5 — Deployment dan Monitoring.** Policy $\pi_\theta$ dibekukan dan di-*deploy* ke *onboard computer* AMR (misalnya NVIDIA Jetson Orin). Telemetri dikirim ke *fleet management system* untuk KPI real-time.

**Tahap 6 — FDIR Loop.** Mengikuti kerangka Borah (2024), modul FDIR memantau anomali: jika drift estimator KF melebihi ambang $\sigma_{threshold}$, agen masuk *safe mode* (berhenti) dan meminta intervensi operator. Setelah rekonstruksi state, *transfer learning* dengan jaringan kecil menyesuaikan policy dalam hitungan menit.

Diagram alir logikanya: *Persepsi Sensor → Estimasi State (Filter Nonlinier) → Pilih Aksi via Policy RL → Eksekusi Aktuator → Hitung Reward → Update Buffer Replay → Periodik Sinkronisasi Bobot*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik komponen otomotif di Cikarang memiliki 12 AMR yang melayani transfer bin antara *staging area* dan 24 workstation. Target KPI: *mean time-to-goal* ≤ 18 detik untuk jarak 25 meter, dengan tingkat tabrakan < 0,1 persen per 1000 misi.

**Parameter MDP:**
- $\gamma = 0{,}99$, $\alpha = 5 \times 10^{-4}$
- Grid: $100 \times 100$ sel (resolusi 0,25 m)
- Aksi diskret: 8 arah
- Bobot reward: $\lambda_1 = 1{,}0$, $\lambda_2 = 100$, $\lambda_3 = 0{,}1$, $\lambda_4 = 0{,}05$

**Iterasi Q-Learning Numerik (1 Episode Sederhana):**
Misalkan robot di state $s = (x,y,\theta) = (10, 10, 0)$, goal di $(90, 90)$, rintangan di $(50,50)$. Ambil aksi $a = \text{forward}$ (maju 0,25 m).

*Hitung jarak:* $d_{old} = \sqrt{(90-10)^2 + (90-10)^2} = \sqrt{12800} \approx 113{,}14$ sel.
Setelah aksi: state baru $(10,25,0)$, $d_{new} = \sqrt{(80)^2+(65)^2} = \sqrt{10225} \approx 101{,}12$ sel.

*Reward:* $r = -\lambda_1(d_{new}-d_{old}) - \lambda_2 \mathbb{1}_{collision} + \lambda_3 \Delta v$
$r = -1{,}0 \times (101{,}12 - 113{,}14) - 0 + 0{,}1 \times 0{,}05 = 12{,}02 + 0{,}005 = 12{,}025$

*Update Q:* dengan asumsi $Q(s,a) = 5{,}0$ dan $\max_{a'} Q(s',a') = 5{,}8$:

$$Q_{new} = 5{,}0 + 5 \times 10^{-4} \left[ 12{,}025 + 0{,}99 \times 5{,}8 - 5{,}0 \right]$$
$$= 5{,}0 + 5 \times 10^{-4} \left[ 12{,}025 + 5{,}742 - 5{,}0 \right]$$
$$= 5{,}0 + 5 \times 10^{-4} \times 12{,}767 = 5{,}0064$$

Setelah 200.000 episode (≈ 14 hari pelatihan pada GPU A100), konvergensi $Q$-value tercapai dengan *moving average reward* $+8{,}4 \pm 0{,}6$.

**Perhitungan Konsumsi Energi:**
Lintasan optimal hasil RL memiliki panjang 31,2 meter (lebih pendek 5,8 persen dari baseline A\*). Dengan daya motor 60 W pada kecepatan 1,0 m/s:

$$E = P \times t = 60 \times \frac{31{,}2}{1{,}0} = 1872 \text{ J per misi}$$

Baseline A\*: $E_{baseline} = 60 \times \frac{33{,}1}{1{,}0} = 1986$ J. Penghematan: $(1986-1872)/1986 = 5{,}74\%$.

Untuk 12 AMR × 2500 misi/hari × 300 hari/tahun, total penghematan energi tahunan:

$$\Delta E_{total} = 12 \times 2500 \times 300 \times 114 = 1{,}026 \times 10^9 \text{ J} \approx 285{,}0 \text{ kWh}$$

Dengan tarif listrik industri Rp 1.467/kWh (tarif PLN 2024 untuk industri menengah), penghematan biaya tahunan:

$$Savings = 285{,}0 \times Rp\,1.467 = Rp\,418.095 \approx \text{Rp } 418 \text{ juta per tahun}$$

**Interpretasi Manajerial:** ROI pelatihan RL (biaya engineer + GPU ≈ Rp 250 juta satu kali) tercapai dalam < 8 bulan. Ditambah *mean time-to-goal* turun dari 21,4 detik menjadi 17,6 detik (penurunan 17,8 persen), meningkatkan throughput workstation hingga 12,4 persen per shift. Ini menunjukkan RL tidak hanya optimal secara algoritmik, tetapi juga terukur secara finansial.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Metodologi.** Kala (2024) mengakui beberapa kelemahan: (1) *sample inefficiency* — diperlukan jutaan episode untuk konvergensi pada environment kompleks; (2) *safety exploration* — aksi acak selama pelatihan dapat menimbulkan risiko fisik pada AMR sebenarnya; (3) *transfer learning* antar-denah gudang masih memerlukan fine-tuning 5–10 persen episode. Borah (2024) menambahkan bahwa asumsi Markovian state sulit dipenuhi ketika