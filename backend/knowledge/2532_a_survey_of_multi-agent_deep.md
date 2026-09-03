# 2532 — Komunikasi Multi-Agen dalam Pembelajaran Penguatan Dalam untuk Optimasi Sistem Industri Terdistribusi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Survei Multi-Agent Deep Reinforcement Learning dengan Komunikasi (Comm-MADRL)
**Jurnal & Sitasi Utama:** Changxi Zhu, Mehdi Dastani, Shihan Wang (2024). *Autonomous Agents and Multi-Agent Systems*. DOI: [https://doi.org/10.1007/s10458-023-09633-6](https://doi.org/10.1007/s10458-023-09633-6)
**Sitasi Pendukung:** Changxi Zhu, Mehdi Dastani, Shihan Wang (2024). *Autonomous Agents and Multi-Agent Systems* (Koreksi). DOI: [https://doi.org/10.1007/s10458-024-09644-x](https://doi.org/10.1007/s10458-024-09644-x)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 mendorong pabrik, gudang, dan rantai pasok menuju arsitektur siber-fisik terdistribusi di mana ratusan bahkan ribuan entitas otonom—*Automated Guided Vehicle* (AGV), lengan robot kolaboratif, drone inspeksi, hingga agen perangkat lunak penjadwal produksi—harus berkolaborasi secara real-time. Dalam lanskap ini, *Multi-Agent Deep Reinforcement Learning* (MADRL) muncul sebagai paradigma pelatihan berbasis pengalaman (*experience-driven learning*) yang memungkinkan setiap agen belajar kebijakan optimal melalui interaksi trial-and-error terstruktur (Zhu, Dastani & Wang, 2024). Namun, salah satu keterbatasan fundamental MADRL klasik adalah *partial observability*: setiap agen hanya dapat merasakan subset lokal dari lingkungan, sehingga menimbulkan *coordination dilemma* ketika keputusan individual harus selaras dengan tujuan sistemik.

Komunikasi antar-agen (*inter-agent communication*) menjadi mekanisme perekat kognitif yang memperluas "lapang pandang" (horizon informasi) setiap agen, mirip dengan bagaimana *Manufacturing Execution System* (MES) mempertukarkan data antar workstation di pabrik modern. Zhu, Dastani & Wang (2024) dalam *Autonomous Agents and Multi-Agent Systems* (DOI: [10.1007/s10458-023-09633-6](https://doi.org/10.1007/s10458-023-09633-6)) secara sistematis mensurvei bidang *Comm-MADRL* yang berkembang pesat, membedakan tiga dimensi kritis: (i) **what to communicate** (konten pesan—misalnya observasi, aksi, gradien, latent state), (ii) **whom to communicate with** (selektivitas penerima—broadcast, neighbor-based, attention-weighted), dan (iii) **when to communicate** (kondisi pemicu komunikasi—event-driven, periodic, learned-gated).

Urgensi industrial atas komunikasi agen ini tecermin pada tiga tren operasional. Pertama, kompleksitas sistem manufaktur fleksibel (FMS) modern memerlukan *dynamic job-shop rescheduling* yang tidak dapat diselesaikan oleh pengendali terpusat karena *combinatorial explosion*—distribusi agen dengan komunikasi lokal menjadi satu-satunya pendekatan yang scalable. Kedua, *throughput* gudang e-commerce telah bergeser dari 100 menjadi >10.000 item/jam per fasilitas, membuat latency komunikasi latency antar-robot menjadi *bottleneck* performansi. Ketiga, biaya kegagalan koordinasi (*coordination failure cost*) dalam rantai pasok dingin (*cold chain*) farmasi—misalnya kerusakan vaksin akibat *temperature excursion*—dapat bernilai miliaran rupiah per insiden. Oleh karena itu, disiplin Comm-MADRL bukan sekadar riset akademis melainkan kebutuhan rekayasa kritis bagi sistem industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Dec-POMDP

Sistem multi-agen dengan pengamatan parsial dan komunikasi diformulasikan secara kanonik sebagai *Decentralized Partially Observable Markov Decision Process* (Dec-POMDP), yang merupakan generalisasi MDP ke $\mathcal{N}$ agen:

$$\langle \mathcal{I}, \mathcal{S}, \{A_i\}_{i \in \mathcal{I}}, P, \{R_i\}, \mathcal{O}, \gamma \rangle$$

di mana:
- $\mathcal{I} = \{1, 2, \dots, N\}$ adalah himpunan indeks agen,
- $\mathcal{S}$ adalah ruang keadaan (state) lingkungan bersama,
- $A_i$ adalah ruang aksi agen $i$,
- $P(s' \mid s, a_1, \dots, a_N)$ adalah fungsi transisi,
- $R_i(s, \mathbf{a})$ adalah fungsi reward individual,
- $\mathcal{O}_i$ adalah ruang observasi parsial agen $i$,
- $\gamma \in [0,1)$ adalah *discount factor*.

Tujuan setiap agen adalah memaksimalkan expected discounted return:

$$J_i(\pi) = \mathbb{E}_{\tau \sim \pi}\!\left[\sum_{t=0}^{T} \gamma^{t}\, R_i(s_t, \mathbf{a}_t)\right]$$

### 2.2. Mekanisme Komunikasi sebagai Augmentasi Ruang Aksi

Zhu, Dastani & Wang (2024) menekankan bahwa komunikasi dapat dipandang sebagai **augmentasi ruang aksi efektif**. Misalkan $m_i^{(t)} \in \mathcal{M}_i$ adalah pesan yang dikirimkan agen $i$ pada waktu $t$. Aksi gabungan menjadi $\tilde{a}_i^{(t)} = (a_i^{(t)}, m_i^{(t)})$, dan kebijakan diperluas menjadi:

$$\pi_i(o_i^{(t)}, \mathbf{m}_{-i}^{(t)}) = \Pr(\tilde{a}_i^{(t)} \mid o_i^{(t)}, \mathbf{m}_{-i}^{(t)})$$

di mana $\mathbf{m}_{-i}^{(t)} = \{m_j^{(t)} : j \neq i\}$ adalah himpunan pesan yang diterima dari agen tetangga. Dengan demikian, komunikasi berfungsi sebagai **saluran informasi kondisional** yang mendekatkan pengamatan bersama (*joint observability*).

### 2.3. Reformulasi Nilai-Q dengan Augmentasi Komunikasi

Untuk algoritma berbasis *value-function* seperti CommNet, BiCNet, dan TarMAC, fungsi Q didekonsposisikan sebagai:

$$Q_i(s, \mathbf{a}) \approx f_i\!\left(h_i(o_i),\, g_i(\mathbf{m}_{-i})\right)$$

di mana $h_i(\cdot)$ adalah *observation encoder* dan $g_i(\cdot)$ adalah *message aggregator*. Pembaruan nilai mengikuti aturan Q-learning terdistribusi:

$$Q_i(o_i, \tilde{a}_i) \leftarrow Q_i(o_i, \tilde{a}_i) + \alpha\!\left[r_i + \gamma \max_{\tilde{a}_i'} \hat{Q}_i(o_i', \tilde{a}_i') - Q_i(o_i, \tilde{a}_i)\right]$$

dengan $\alpha$ sebagai *learning rate*.

### 2.4. Ukuran Informasi untuk Desain Komunikasi

Untuk mengukur kegunaan informasi komunikasi, *mutual information* antara pesan dan keadaan lingkungan digunakan:

$$I(\mathcal{M}; \mathcal{S}) = \sum_{m \in \mathcal{M}} \sum_{s \in \mathcal{S}} \Pr(m, s) \log_2 \frac{\Pr(m, s)}{\Pr(m)\Pr(s)}$$

Dalam varian *learned communication*, regularisasi informasi mencegah pesan menjadi acak (noise) atau degenerate (konstan):

$$\mathcal{L}_{info} = -\beta\, I(\mathcal{M}; \mathcal{S}) + \lambda\, \mathrm{KL}\!\left[p(m \mid \tau) \;\|\; \mathcal{U}(\mathcal{M})\right]$$

dengan $\beta, \lambda$ sebagai koefisien regularisasi dan $\mathcal{U}(\mathcal{M})$ adalah distribusi prior uniform terhadap pesan.

### 2.5. Attention-Based Communication (TarMAC)

Arsitektur komunikasi modern seperti *Targeted Multi-Agent Communication* (TarMAC) menggunakan mekanisme *scaled dot-product attention*:

$$\mathrm{Attn}(q_i, \mathbf{k}) = \mathrm{softmax}\!\left(\frac{q_i \cdot \mathbf{k}^{\top}}{\sqrt{d_k}}\right)\mathbf{v}$$

di mana $q_i$ adalah *query* agen $i$, dan $\mathbf{k}, \mathbf{v}$ adalah *key* dan *value* yang dikomunikasikan dari agen lain. Bobot attention $\alpha_{ij}$ secara implisit menentukan **whom to communicate with**.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka klasifikasi Zhu, Dastani & Wang (2024), berikut adalah SOP implementasi Comm-MADRL dalam konteks rekayasa sistem industri:

### 3.1. Tahapan Desain Sistem

**Tahap 1 — Karakterisasi Multi-Agen:** Identifikasi entitas otonom (robot, workstation, drone) dan definisikan *state*, *action space*, dan *observation space* sesuai ISO 23247 (Digital Twin framework untuk manufaktur).

**Tahap 2 — Desain Protokol Komunikasi:** Pilih salah satu dari tiga skema utama:
- **Broadcast communication:** semua agen menerima semua pesan (kompleksitas $\mathcal{O}(N^2)$, cocok untuk $N < 20$).
- **Neighborhood-based:** pesan hanya dikirim ke tetangga topologis (kompleksitas $\mathcal{O}(N \cdot k)$, $k$ = degree).
- **Attention-based gating:** agen belajar secara end-to-end siapa yang harus diberi pesan (kompleksitas pelatihan tinggi namun efisien saat inferensi).

**Tahap 3 — Desain Reward Function:** Gunakan *potential-based reward shaping* untuk menghindari *reward hacking*:

$$R'(s, a, s') = R(s, a, s') + \gamma\, \Phi(s') - \Phi(s)$$

dengan $\Phi(\cdot)$ sebagai fungsi potensial (misalnya invers jarak ke target).

**Tahap 4 — Pelatihan Terpusat dengan Eksekusi Terdesentralisasi (CTDE):** Ikuti pola *Centralized Training with Decentralized Execution* agar *critic* memiliki akses ke informasi global selama pelatihan, namun kebijakan eksekusi tetap *decentralized*.

**Tahap 5 — Validasi dalam Digital Twin:** Gunakan *digital twin* pabrik (sesuai ISO 23247) untuk simulasi sebelum *deployment*, dengan metrik: *average reward*, *success rate*, *collision count*, dan *communication overhead* (bits/step).

### 3.2. Diagram Alur Implementasi

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  1. Characterize │───▶│  2. Design Comm  │───▶│ 3. Design Reward │
│   Multi-Agent    │    │    Protocol      │    │    Function      │
└──────────────────┘    └──────────────────┘    └──────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  6. Deploy to    │◀───│  5. Validate in  │◀───│ 4. CTDE Training │
│   Real System    │    │   Digital Twin   │    │   (Centralized)  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

### 3.3. SOP Pemantauan Operasional

Sesuai ISO/IEC 42001 (AI Management Systems), setiap agen yang menerapkan Comm-MADRL harus dilengkapi *communication logger* yang mencatat: bandwidth, latency, paket drop, dan entropy pesan. Threshold alert: jika *communication entropy* jatuh di bawah $H_{\min} = 0.1$ nat, sistem harus *trigger retraining* karena agen berpotensi *mode-collapse* pada pesan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario: Koordinasi 8 AGV dalam Gudang E-Commerce

Sebuah gudang e-commerce配备了 8 AGV拣选订单. Tujuan: meminimalkan makespan dengan throughput target 600 item/jam. Setiap AGV memiliki *local observation* berupa 8 tetangga terdekat dan status beban.

**Parameter Awal:**
- Jumlah agen: $N = 8$
- Discount factor: $\gamma = 0.95$
- Learning rate: $\alpha = 0.001$
- Dimensi pesan: $d_m = 32$ byte
- Episode length: $T = 200$ step
- Target throughput: $\Phi_{target} = 600$ item/jam

### 4.2. Perhitungan Throughput dengan Komunikasi

Asumsikan setiap AGV tanpa komunikasi memiliki tingkat keberhasilan pengambilan $p_0 = 0.82$ (akibat tabrakan dan blocking). Dengan Comm-MADRL menggunakan attention-based communication (TarMAC), Zhu et al. melaporkan peningkatan koordinatif hingga +18% pada benchmark MPE. Kita hitung:

$$p_{comm} = p_0 + \Delta p = 0.82 + 0.18 \times 0.82 = 0.82 + 0.148 = 0.968$$

Throughput efektif:

$$\Phi_{comm} = N \cdot r_{pick} \cdot p_{comm} \cdot \frac{3600}{T_{cycle}}$$

di mana $r_{$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
