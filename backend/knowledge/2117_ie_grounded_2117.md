# 2117 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Closed-Loop Supply Chain (CLSC) dengan Integrasi Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. SSRN Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global (Global EV Outlook 2024, IEA) telah menciptakan dilema siklus hidup (life-cycle dilemma) yang belum sepenuhnya terpecahkan: bagaimana mengelola jutaan unit baterai Lithium-ion (LIB) yang memasuki fase akhir masa pakai (end-of-life/EOL) dalam 5–10 tahun ke depan. JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) dalam proceedings ICLSE 2024 secara eksplisit menyoroti bahwa baterai EOL tidak boleh dipandang sebagai limbah tunggal, melainkan sebagai sumber daya ganda yang memiliki nilai pada setidaknya tiga tingkatan ekonomi: (i) pemanfaatan bertingkat (*echelon/cascade utilization*) untuk aplikasi sekunder seperti *stationary energy storage system* (ESS) atau penyimpanan energi telekomunikasi, (ii) remanufaktur untuk kembali ke lini OEM, dan (iii) daur ulang material (*urban mining*) untuk mengekstraksi litium, kobalt, dan nikel.

Urgensi operasional dari masalah ini bersifat tiga-dimensi. Pertama, secara **ekonomi**, kandungan material baterai EV mencapai 40–60% dari biaya produksi; nilai residu baterai bekas dengan *State of Health* (SOH) 70–80% masih signifikan untuk aplikasi *second-life*. Kedua, secara **regulasi**, mandat *Extended Producer Responsibility* (EPR) yang berlaku di Uni Eropa (Direktif 2006/66/EC, revisi 2023) dan paralel regulasi di Tiongkok (GB/T 34014-2017) mengharuskan OEM bertanggung jawab atas pengumpulan, perlakuan, dan daur ulang baterai EOL. Ketiga, secara **teknis**, parameter SOH menjadi variabel penentu utama apakah baterai layak masuk jalur *echelon*, remanufaktur, atau langsung ke *material recovery*.

Studi pelengkap oleh Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) memperkuat pentingnya perspektif *circular economy* dengan memperkenalkan **robust optimization** terhadap ketidakpastian tingkat pengembalian (*return rate uncertainty*), harga material sekunder, dan permintaan aplikasi *second-life*. Kombinasi kedua literatur ini membentuk kerangka keputusan manajerial berlapis: bagaimana merancang arsitektur *closed-loop supply chain* (CLSC) yang optimal secara profit sekaligus *robust* terhadap guncangan pasar. Secara spesifik, JIANG & TANG (2025) mengusulkan model *Stackelberg game* tiga-tingkat (OEM sebagai *leader*, pengecer dan pihak ketiga daur ulang sebagai *followers*), dengan variabel keputusan mencakup harga grosir, harga ritel, harga beli kembali (*recycling price*), tingkat pengumpulan ($\tau$), dan alokasi baterai EOL ke tiga saluran pemulihan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Pemain dan Variabel Keputusan

Model CLSC baterai EV mengintegrasikan empat entitas keputusan: (1) Produsen baterai / OEM, (2) Pengecer / *aftermarket*, (3) Pusat *Echelon Utilization* (misal operator ESS), dan (4) Pabrik Daur Ulang Material (*hydrometallurgical/pyrometallurgical recycler*). Struktur keputusan hierarkis mengikuti formulasi JIANG & TANG (2025).

**Variabel keputusan utama:**

- $w$: harga jual grosir OEM ke pengecer (USD/unit)
- $p$: harga jual ritel ke konsumen akhir (USD/unit)
- $p_r$: insentif pengembalian yang dibayar recycler kepada konsumen (USD/unit)
- $\tau \in [0,1]$: tingkat pengumpulan (*collection rate*) baterai EOL
- $\theta_e \in [0,1]$: proporsi baterai EOL yang dialokasikan ke *echelon utilization*
- $\theta_m \in [0,1]$: proporsi yang dikirim ke remanufaktur
- $\theta_z = 1 - \theta_e - \theta_m$: proporsi yang dikirim ke daur ulang material

### 2.2 Fungsi Permintaan dan Arus Balik

Permintaan primer baterai baru mengikuti fungsi linear:

$$D(p) = a - b \cdot p, \quad a, b > 0$$

Arus balik baterai EOL dihitung sebagai:

$$Q = \tau \cdot \alpha \cdot D(p)$$

di mana $\alpha \in [0,1]$ adalah fransi baterai dari generasi sebelumnya yang memasuki masa EOL pada horizon perencanaan.

### 2.3 Fungsi Profit Tiap Pemain

**Profit OEM ($ \pi_M $):**

$$\pi_M = (w - c_n) D(p) + \theta_e \cdot Q \cdot (v_e - c_e) + \theta_m \cdot Q \cdot (v_m - c_m) - \theta_z \cdot Q \cdot c_z$$

dengan $c_n$ = biaya produksi baru, $c_e, c_m, c_z$ = biaya proses untuk echelon, remanufaktur, daur ulang, dan $v_e, v_m$ = nilai jual hasil proses.

**Profit Pengecer ($ \pi_{RT} $):**

$$\pi_{RT} = (p - w) D(p)$$

**Profit Recycler ($ \pi_R $):**

$$\pi_R = \theta_z \cdot Q \cdot v_z - p_r \cdot Q - \theta_z \cdot Q \cdot c_z$$

dengan $v_z$ = nilai material yang dipulihkan (*black mass value*).

### 2.4 Formulasi *Robust Counterpart* (Shin et al., 2024)

Menggabungkan pendekatan robust Shin, Kim & Jeong (2024) untuk menangani ketidakpastian $\alpha$ dan $a$ melalui *box uncertainty set*:

$$\mathcal{U} = \left\{ (\tilde{\alpha}, \tilde{a}) : \tilde{\alpha} \in [\alpha^L, \alpha^U], \; \tilde{a} \in [a^L, a^U] \right\}$$

Formulasi robust maximin untuk OEM:

$$\max_{w, p, \tau, \theta_e, \theta_m} \min_{(\tilde{\alpha}, \tilde{a}) \in \mathcal{U}} \; \pi_M(\tilde{\alpha}, \tilde{a})$$

Karena $\pi_M$ bersifat *concave* dalam $(\tilde{\alpha}, \tilde{a})$, skenario terburuk terjadi pada batas bawah $a = a^L$ dan batas bawah efektif untuk $\alpha$ tergantung pada tanda koefisien — umumnya worst-case $\alpha^L$ untuk sebagian saluran dan $\alpha^U$ untuk lainnya. *Robust counterpart*-nya menjadi:

$$\pi_M^{RC} = (w - c_n)(a^L - bp) + \tau \theta_z \alpha^L (a^L - bp)(v_z - p_r - c_z) + \tau(\theta_e(v_e - c_e) + \theta_m(v_m - c_m))\alpha^L(a^L - bp)$$

### 2.5 Kondisi Keseimbangan Stackelberg

Mengikuti JIANG & TANG (2025), OEM bergerak pertama (*leader*), sementara pengecer dan recycler bertindak sebagai *followers* yang menyelesaikan masalah best-response mereka. Kondisi KKT untuk follower pengecer:

$$\frac{\partial \pi_{RT}}{\partial p} = a - 2bp + bw = 0 \implies p^*(w) = \frac{a + bw}{2b}$$

Untuk recycler:

$$\frac{\partial \pi_R}{\partial \theta_z} = \tau \alpha D (v_z - p_r - c_z) = 0 \implies \theta_z^* = \begin{cases} 1 & \text{jika } v_z > p_r + c_z \\ 0 & \text{lainnya} \end{cases}$$

*Backward induction* kemudian diselesaikan dengan substitusi reaksi optimal.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
