# 1909 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain (CLSC) Baterai Power Bekas dengan Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*, Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global telah menciptakan tantangan industri yang belum pernah terjadi sebelumnya: bagaimana mengelola end-of-life (EoL) baterai lithium-ion (LIB) dalam volume jutaan ton per tahun. JIANG Lin & TANG Lidan (2025) dalam naskah yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* dengan DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068) menegaskan bahwa dengan proyeksi stok EV global melampaui 250 juta unit pada 2030, volume baterai pensiun (retired power batteries) akan menjadi masalah logistik, lingkungan, dan strategis yang krusial. Mereka mengusulkan strategi Closed-Loop Supply Chain (CLSC) yang mengintegrasikan tiga keputusan simultan: (i) manufaktur baterai baru, (ii) pemanfaatan bertingkat (*echelon utilization*) untuk aplikasi second-life seperti penyimpanan energi stasioner atau *low-speed EV*, serta (iii) remanufaktur daur ulang (*recycling remanufacturing*) untuk pemulihan material kritikal seperti litium, kobalt, dan nikel.

Urgensi permasalahan ini bersifat multi-dimensi. Pertama, secara lingkungan, baterai EoL yang tidak terkelola mengandung elektrolit toksik dan logam berat yang berisiko mencemari tanah dan air tanah jika dibuang ke landfill. Kedua, secara ekonomi, nilai material kritis dalam satu baterai EV 50 kWh mencapai ¥18.000–25.000 (tiga hingga empat kali lipat nilai baja bekas), menjadikannya "urban mine" bernilai tinggi. Ketiga, secara strategis, ketidakpastian harga kobalt dan nikel yang berfluktuasi 30–60% per tahun mengancam ketahanan rantai pasok (*supply chain resilience*) bagi manufaktur OEM.

Shin, Kim & Jeong (2024) dalam naskah ber-DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) melengkapi kerangka JIANG & TANG dengan dimensi *robustness* melalui formulasi *Robust Closed-Loop Supply Chain with Return Management System* yang secara eksplisit memodelkan ketidakpastian permintaan (*demand uncertainty*) dan tingkat pengembalian (*return rate uncertainty*) menggunakan *uncertainty sets* polihedral. Integrasi kedua perspektif ini—strategi echelon-recycling ala JIANG & TANG dan optimisasi robust ala Shin et al.—menjadi pilar rekayasa sistem industri modern untuk industri baterai.

Konteks regulasi juga memainkan peran penting. Kebijakan *Extended Producer Responsibility* (EPR) di Uni Eropa (Directive 2006/66/EC) dan subsidi daur ulang baterai di Tiongkok (¥100/kWh dari NDRC) menciptakan *incentive structure* yang harus diakomodasi dalam model optimisasi. Tanpa kerangka CLSC yang matang, manufaktur menghadapi risiko inefisiensi alokasi sumber daya, *deadweight loss* pada titik pertemuan (*meeting point*) antara aliran produk baru dan reverse logistics, dan potensi kebocoran material kritikal ke luar ekosistem industri formal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Tiga-Eselon

JIANG & TANG (2025) memodelkan CLSC baterai sebagai sistem tiga-esselon (*three-echelon*) dengan aktor keputusan:

1. **Manufaktur (M)** — memutuskan harga jual baterai baru $p_n$, jumlah produksi $q_n$, dan harga transfer $\tau$ untuk baterai bekas.
2. **Retailer (R)** — memesan $q_n$ dari M, menjual ke konsumen dengan margin $\pi_R$, serta mengumpulkan baterai bekas dengan laju $\lambda \in [0,1]$.
3. **Pemanfaat/Re-cycler pihak ketiga (T)** — menerima baterai bekas dari R dengan harga transfer $\tau$, melakukan *echelon utilization* sebanyak $e$ unit dan *recycling remanufacturing* sebanyak $c$ unit.

Permintaan pasar dimodelkan sebagai fungsi linear terhadap harga, sesuai konvensi literatur *Stackelberg game* dalam CLSC:

$$D_n(p_n) = a_n - b_n p_n, \quad D_r(p_r) = a_r - b_r p_r$$

dengan $a_n, a_r > 0$ adalah parameter *market base* dan $b_n, b_r > 0$ adalah elastisitas harga. Pasar remanufaktur bersaing secara horizontal dengan pasar baterai baru, sehingga komponen *cross-price effect* ditambahkan:

$$D_r(p_r, p_n) = a_r - b_r p_r + \gamma p_n$$

dengan $\gamma \in [0, b_r]$ merepresentasikan efek substitusi.

### 2.2 Fungsi Profit dan Struktur Stackelberg

Permainan hierarkis *leader-follower* diformulasikan sebagai berikut. **Manufaktur sebagai leader** mengumumkan $p_n$ dan $\tau$; **retailer sebagai follower** merespons dengan quantity $q_n$; **recycler sebagai second follower** merespons dengan alokasi $(e, c)$ sedemikian rupa sehingga $e + c = \lambda q_n$ (konservasi aliran material):

$$\Pi_M = (p_n - c_m) q_n + (p_r - c_r) D_r - \tau \lambda q_n + s \cdot c$$

$$\Pi_R = (p_n - w) q_n - c_h I + (\tau - p_{buy}) \lambda q_n$$

$$\Pi_T = (p_{sell}^e - c_e) e + (p_{sell}^c - c_c) c + (w_T - \tau) \lambda q_n$$

dengan:
- $c_m$ = biaya manufaktur baterai baru
- $c_r$ = biaya remanufaktur
- $c_e$ = biaya refurbishment untuk echelon utilization
- $c_c$ = biaya daur ulang material
- $w$ = harga grosir (wholesale price)
- $p_{buy}$ = insentif beli-balik konsumen
- $s$ = subsidi pemerintah per unit daur ulang
- $c_h$ = biaya holding inventory, $I = (q_n - D_n)/2$

### 2.3 Formulasi Robust Optimization (Shin et al., 2024)

Untuk mengatasi ketidakpastian permintaan dan return rate, Shin, Kim & Jeong (2024) memperkenalkan *uncertainty sets* berbentuk *box* dan *ellipsoidal*:

$$\mathcal{U}_d = \left\{ \mathbf{d} \in \mathbb{R}^n_+ : \bar{d}_i - \hat{d}_i \leq d_i \leq \bar{d}_i + \hat{d}_i, \; \forall i \right\}$$

$$\mathcal{U}_\lambda = \left\{ \lambda : \bar{\lambda} - \hat{\lambda} \rho \leq \lambda \leq \bar{\lambda}