# 2544 — Rancang Bangun Jaringan Rantai Pasok Multi-Objek Produk Susu dengan Benders Decomposition: Integrasi Keputusan Kualitas dan Operasional Reverse Logistics

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik biofisik produknya: *highly perishable*, rantai pendingin (*cold chain*) yang rapuh, serta sensitivitas tinggi terhadap waktu simpan (*shelf life*). Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* menyoroti bahwa sekitar 20–25% produk susu di negara berkembang terbuang sebelum sampai ke konsumen akhir, menimbulkan kerugian ekonomi signifikan sekaligus emisi lingkungan yang tidak perlu. Studi tersebut merancang sebuah *framework* multi-objek yang secara simultan meminimalkan biaya total jaringan, kehilangan kesegaran produk, dan dampak lingkungan (jejak karbon), dengan menggunakan **Benders Decomposition** sebagai algoritma eksak untuk memecahkan Mixed-Integer Linear Programming (MILP) berskala besar.

Urgensi pengembangan model ini diperkuat oleh Zhang, Li, dan Ren (2024) yang menyatakan bahwa desain jaringan rantai pasok modern tidak lagi dapat dipisahkan dari keputusan kualitas (*quality decisions*) dan aliran balik (*reverse supply chain*). Dalam konteks industri susu, *reverse flow* mencakup pengembalian produk mendekati *expiry date*, daur ulang kemasan, serta penarikan produk (*recall*) akibat insiden keamanan pangan. Integrasi kedua aspek ini ke dalam satu model optimasi menjadi keniscayaan karena keputusan fasilitas, alokasi kapasitas, dan transportasi ke depan (*forward*) sangat memengaruhi laju pengembalian dan kualitas yang dapat diselamatkan di hilir.

Secara ekonomi, pasar susu dunia bernilai lebih dari USD 893 miliar (estimasi OECD-FAO), dengan pangsa ASEAN dan Asia Selatan yang tumbuh >6% CAGR. Namun, margin keuntungan industri ini tipis (3–7%), sehingga inefisiensi 1–2% pada jaringan distribusi dapat langsung menggerus profitabilitas. Dari perspektif keberlanjutan, sektor ini menyumbang 3–4% emisi gas rumah kaca global, sebagian besar berasal dari *cold chain logistics* dan pembuangan produk. Oleh sebab itu, framework multi-objek yang diajukan Lead Researchers (2023) bukan hanya relevan secara akademis, tetapi juga menjadi *decision-support tool* yang krusial bagi manajer operasional, perencana kapasitas, dan regulator industri pangan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Set, Parameter, dan Variabel Keputusan

**Himpunan (Sets):**
- $I = \{1, 2, \ldots, m\}$: himpunan peternakan/pemasok susu segar
- $J = \{1, 2, \ldots, n\}$: himpunan pabrik pengolahan (UHT/pasteurisasi/Yogurt)
- $K = \{1, 2, \ldots, p\}$: himpunan pusat distribusi (DC) berpendingin
- $L = \{1, 2, \ldots, q\}$: himpunan zona permintaan pelanggan
- $P = \{1, 2, \ldots, r\}$: himpunan varian produk (susu cair, keju, yogurt, mentega)
- $T = \{1, 2, \ldots, \tau\}$: periode perencanaan (misal hari atau minggu)

**Parameter:**
- $a_{i}$: kapasitas pasokan harian di peternakan $i$ (liter/hari)
- $d_{lpt}$: permintaan produk $p$ di zona $l$ pada periode $t$ (liter)
- $f_j$: biaya tetap pembukaan pabrik $j$ (USD)
- $g_k$: biaya tetap pembukaan DC $k$ (USD)
- $c_{ijp}^{f}$: biaya angkut *forward* per liter dari $i$ ke $j$ untuk produk $p$
- $c_{jkp}^{f}, c_{klp}^{f}$: biaya angkut antar-tier
- $c_{klp}^{r}$: biaya angkut *reverse* (pengembalian produk) dari $l$ ke $k$
- $h_{jp}$: biaya *holding* per liter per periode di pabrik $j$
- $\theta_p \in (0,1)$: laju degradasi kualitas produk $p$ per periode
- $\alpha_p^{\max}$: ambang batas kehilangan kualitas yang dapat diterima (misal 0,15)
- $\gamma_p$: faktor emisi CO$_2$ per liter-km
- $M$: bilangan *Big-M* yang besar

**Variabel Keputusan:**
- $u_j \in \{0,1\}$: 1 jika pabrik $j$ dibuka
- $v_k \in \{0,1\}$: 1 jika DC $k$ dibuka
- $x_{ijpt} \geq 0$: volume produk $p$ dari $i$ ke $j$ di periode $t$
- $y_{jkpt} \geq 0$: volume dari pabrik $j$ ke DC $k$
- $z_{klpt} \geq 0$: volume dari DC $k$ ke pelanggan $l$
- $s_{jpt} \geq 0$: tingkat persediaan di pabrik $j$
- $r_{klpt} \geq 0$: volume produk $p$ yang dikembalikan dari $l$ ke $k$

### 2.2 Formulasi Multi-Objek

Lead Researchers (2023) mengusulkan tiga fungsi tujuan yang diminimalkan secara simultan:

$$Z_1 = \sum_{j} f_j u_j + \sum_{k} g_k v_k + \sum_{i,j,p,t} c_{ijp}^f x_{ijpt} + \sum_{j,k,p,t} c_{jkp}^f y_{jkpt} + \sum_{k,l,p,t} c_{klp}^f z_{klpt} + \sum_{k,l,p,t} c_{klp}^r r_{klpt} + \sum_{j,p,t} h_{jp} s_{jpt}$$

$$Z_2 = \sum_{p} \theta_p \left( \sum_{i,j,t} \Delta t_{ij}^{sh} x_{ijpt} + \sum_{j,k,t} \Delta t_{jk}^{sh} y_{jkpt} + \sum_{k,l,t} \Delta t_{kl}^{sh} z_{klpt} \right)$$

$$Z_3 = \sum_{i,j,k,l,p,t} \gamma_p \cdot d_{ijkl} \cdot (\text{flow}_{ijklpt})$$

di mana $\Delta t^{sh}$ adalah *shelf-life* yang terpakai pada setiap tahap rantai pasok.

### 2.3 Kendala (Constraints)

Keseimbangan aliran di pabrik $j$:

$$\sum_{i} x_{ijpt} - \sum_{k} y_{jkpt} + s_{j,p,t-1} - s_{jpt} = 0, \quad \forall j,p,t \tag{1}$$

Kapasitas pabrik:

$$\sum_{i,p} x_{ijpt} \leq C_j^{proc} \cdot u_j, \quad \forall j,t \tag{2}$$

Kapasitas DC:

$$\sum_{j,p} y_{jkpt} \leq C_k^{dc} \cdot v_k, \quad \forall k,t \tag{3}$$

Kualitas produk sampai ke pelanggan:

$$\sum_{(i,j,k,l)} \tau_{ijkl} \cdot \text{flow}_{ijklpt} \leq \alpha_p^{\max} \cdot d_{lpt}, \quad \forall l,p,t \tag{4}$$

Kapasitas peternakan:

$$\sum_{j,p} x_{ijpt} \leq a_i, \quad \forall i,t \tag{5}$$

Pemenuhan permintaan (pelanggan dilayani dari tepat satu DC):

$$\sum_{k} z_{klpt} - r_{klpt} = d_{lpt}, \quad \forall l,p,t \tag{6}$$

### 2.4 Benders Decomposition

Mengikuti kerangka Lead Researchers (2023) dan diperkuat oleh Zhang et al. (2024), masalah dipecah menjadi:

**(a) Master Problem (MP)** — keputusan investasi fasilitas:

$$\min_{u,v} \quad \sum_j f_j u_j + \sum_k g_k v_k + \Phi(u,v)$$

$$\text{s.t.} \quad \sum_j u_j \geq 1, \quad \sum_k v_k \geq 1, \quad u_j, v_k \in \{0,1\}$$

dengan $\Phi(u,v)$ adalah fungsi nilai optimal subproblem.

**(b) Subproblem (SP)** — keputusan operasional diberikan $(u^*, v^*)$:

$$\min_{x,y,z,s,r} \quad Z_1^{ops} = \sum c \cdot \text{flow}$$

$$\text{s.t. } (1)-(6), \quad x_{ijpt} \leq M u_j, \quad y_{jkpt} \leq M v_k$$

Dual subproblem menghasilkan vektor $\boldsymbol{\pi}$. Benders cut yang ditambahkan ke MP:

$$\Phi \geq Z_1^{ops}(\bar{u}, \bar{v}) + \sum_j \pi_j (u_j - \bar{u}_j) + \sum_k \pi_k (v_k - \bar{v}_k)$$

Iterasi berhenti ketika $\Phi^{upper} - \Phi^{lower} \leq \epsilon$ (gap optimalitas).

### 2.5 Penyelesaian Multi-Objek: Metode $\epsilon$-Constraint

Untuk menghasilkan **Pareto front**, salah satu objektif dimasukkan ke konstrain:

$$\min Z_1 \quad \text{s.t.} \quad Z_2 \leq \epsilon_2, \quad Z_3 \leq \epsilon_3$$

dengan $\epsilon_2, \epsilon_3$ divariasikan secara grid untuk merepresentasikan trade-off biaya-kualitas-lingkungan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi (Diagram Alir Logika)

Implementasi *framework* di industri mengikuti tahapan berikut (disintesis dari Lead Researchers, 2023, dan Zhang et al., 2024):

```
┌────────────────────────────────────────────────────┐
│ TAHAP 1: PENGUMPULAN DATA INDUSTRI                 │
│ • Demand forecasting (time-series ARIMA/LSTM)      │
│ • Kapasitas peternakan & fasilitas eksisting       │
│ • Data shelf-life, suhu cold chain                 │
│ • Parameter emisi (ISO 14064