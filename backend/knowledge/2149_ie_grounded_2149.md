# 2149 — Strategi Closed-Loop Supply Chain Baterai Power Bekas: Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Menuju Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Closed-Loop Supply Chain untuk Baterai Power Bekas dengan Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang  
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)  
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)  

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik global (Electric Vehicle/EV) telah menciptakan tantangan operasional, ekonomi, dan lingkungan yang belum pernah terjadi sebelumnya dalam manajemen rantai pasok baterai lithium-ion. Data pasar menunjukkan bahwa populasi baterai power EV akan memasuki fase pensiun masif (retirement wave) antara tahun 2025–2035, dengan volume kumulatif baterai bekas secara global berpotensi melampaui 2 juta metrik ton. Situasi ini menjadi fokus utama studi JIANG & TANG (2025) yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* dengan DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068). Penulis mengidentifikasi tiga permasalahan inti yang melatarbelakangi perlunya strategi *Closed-Loop Supply Chain* (CLSC) yang holistik.

**Pertama, degradasi performa baterai.** Baterai EV modern umumnya dirancang dengan kapasitas awal (*State of Health*/SOH = 100%). Setelah 1.500–2.000 siklus pengisian atau penurunan SOH di bawah ambang 70–80%, baterai sudah tidak layak secara teknis untuk aplikasi otomotif karena dapat mengganggu jangkauan dan keamanan kendaraan. Namun demikian, baterai ini masih menyimpan 60–80% kapasitas terpasangnya, yang sangat memadai untuk aplikasi stasioner dengan densitas energi rendah seperti *storage* energi terbarukan (PLTS, microgrid), *base transceiver station* (BTS) telekomunikasi, dan *forklift* industri. Konsep inilah yang disebut *echelon utilization* atau *cascade utilization* — pemanfaatan bertingkat baterai bekas sebelum akhirnya didaur ulang menjadi material baku (*urban mining*).

**Kedua, keputusan multi-channel pada reverse logistics.** Baterai bekas tidak memiliki satu-satunya alur daur ulang. Produsen Original Equipment Manufacturer (OEM), operator fleet, dan integrator *second-life* harus memutuskan tiga alur paralel: (i) direct remanufacturing untuk aplikasi ulang sebagai baterai EV; (ii) echelon utilization untuk aplikasi stasioner; dan (iii) recycling material (hidrometalurgi/pirometalurgi) untuk mengekstrak litium, kobalt, dan nikel. Pilihan alur sangat bergantung pada SOH baterai, biaya logistik pengumpulan (*collection cost*), nilai jual pasar sekunder, dan kapasitas fasilitas processing. JIANG & TANG (2025) memformalkan keputusan ini sebagai masalah optimasi multi-period, multi-echelon yang harus menyeimbangkan antara margin jangka pendek dan kelestarian lingkungan jangka panjang.

**Ketiga, ketidakpastian struktural pasar.** Shin, Kim, & Jeong (2024) dengan DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) menyoroti bahwa CLSC untuk baterai sangat rentan terhadap *demand uncertainty*, *return uncertainty*, dan *price fluctuation* logam tanah jarang. Mereka mengusulkan formulasi *robust optimization* untuk menjamin *feasibility* keputusan di seluruh skenario worst-case, sebuah pendekatan yang melengkapi perspektif normatif JIANG & TANG (2025). Kombinasi keduanya memberikan kerangka kerja yang utuh untuk pengambilan keputusan di industri baterai yang volatile.

Secara regulasi, *EU Battery Regulation 2023/1542* (yang berlaku efektif sejak Agustus 2024) mewajibkan *collection rate* minimal 63% pada 2027 dan 73% pada 2030, ditambah *recycling efficiency* 90% untuk kobalt, 50% untuk litium, dan 95% untuk nikel. Regulasi ini secara langsung memperkuat urgensi adopsi model CLSC yang ditawarkan oleh kedua literatur utama modul ini. Dengan demikian, sinergi CLSC + robust return management menjadi pilar strategis bagi industri baterai abad ke-21.

---

## 2. Landasan Teori & Formulasi Matematis

Model JIANG & TANG (2025) membangun CLSC *three-echelon* yang terdiri dari *manufacturer* (M), *retailer* (R), dan *end consumer* (C), dengan tambahan *reverse channels* berupa *echelon center* (E) untuk *second-life application*, *remanufacturing center* (RM) untuk refurbishing baterai, dan *recycling center* (RC) untuk ekstraksi material. Kerangka robust-nya mengikuti formulasi Bertsimas & Sim untuk menangani ketidakpastian.

### 2.1 Parameter dan Variabel Keputusan

**Parameter deterministik:**

$$\begin{aligned}
c_m &= \text{biaya manufaktur baterai baru (USD/unit)} \\
c_d &= \text{biaya distribusi forward (USD/unit)} \\
c_e, c_{rm}, c_{rc} &= \text{biaya processing echelon, remanufaktur, daur ulang} \\
p_r, p_e, p_{rm} &= \text{harga jual ritel, second-life, remanufaktur} \\
q_0 &= \text{kapasitas produksi baterai baru} \\
Q_e^{cap}, Q_{rm}^{cap}, Q_{rc}^{cap} &= \text{kapasitas fasilitas} \\
\theta &= \text{ambang SOH untuk remanufaktur (0.70–0.80)}
\end{aligned}$$

**Variabel keputusan:**

$$\begin{aligned}
x_1 &= \text{jumlah baterai baru yang diproduksi (forward)} \\
x_2, x_3, x_4 &= \text{jumlah baterai bekas dialokasikan ke E, RM, RC} \\
y &= \text{tingkat pengumpulan (collection rate) baterai bekas}
\end{aligned}$$

### 2.2 Fungsi Permintaan dan Return

Permintaan forward dimodelkan linear terhadap harga ritel:

$$D(p_r) = D_0 - k \cdot p_r \quad \text{dengan} \quad k > 0$$

Sementara aliran return dimodelkan sebagai fungsi dari *collection rate* dan *age distribution* baterai di pasar:

$$Q_{return} = y \cdot N_{retired} = y \cdot \sum_{t=0}^{T} \alpha_t \cdot D_{t}$$

di mana $\alpha_t$ adalah proporsi baterai yang pensiun pada tahun ke-$t$ dari total populasi aktif.

### 2.3 Fungsi Tujuan (Profit Maximization)

Total profit gabungan forward dan reverse didefinisikan sebagai:

$$\Pi_{total} = (p_r - c_m - c_d) \cdot D(p_r) + \sum_{i \in \{E, RM, RC\}} \left[ (v_i - c_i) \cdot x_{i+1} \right] - C_{pen}(y)$$

di mana $v_i$ adalah nilai jual produk reverse (echelon/rem/recycle) dan $C_{pen}(y)$ adalah penalty cost jika collection rate $y$ tidak memenuhi target regulatori. Formulasi lengkap model nonlinear programming JIANG & TANG (2025) dapat ditulis:

$$\max_{x_1, x_2, x_3, x_4, y} \; \Pi_{total}$$

### 2.4 Kendala Operasional

$$\begin{aligned}
\text{(K1)} &\quad x_1 = D(p_r) \quad \text{(supply-demand balance)} \\
\text{(K2)} &\quad x_2 + x_3 + x_4 = Q_{return} \quad \text{(mass balance reverse)} \\
\text{(K3)} &\quad x_3 \leq Q_{rm}^{cap}, \quad x_2 \leq Q_e^{cap}, \quad x_4 \leq Q_{rc}^{cap} \\
\text{(K4)} &\quad x_3 \leq \theta \cdot N_{retired} \quad \text{(hanya SOH > }\theta\text{)} \\
\text{(K5)} &\quad x_2, x_3, x_4, x_1, y \geq 0
\end{aligned}$$

### 2.5 Formulasi Robust (Shin, Kim, & Jeong, 2024)

Untuk menangani ketidakpastian pada parameter demand $D_0$ dan collection rate $y$, Shin et al. (2024) menerapkan *budget of uncertainty* $\Gamma$ ala Bertsimas-Sim. Variabel uncertain $D_0$ dimodelkan sebagai $D_0 = \bar{D}_0 + \tilde{D}_0$ dengan $\tilde{D}_0 \in [-\hat{D}_0, \hat{D}_0]$. Fungsi tujuan robust menjadi:

$$\Pi_{rob} = \Pi_{nom} - \Gamma \cdot \max_{(S,T) \in \mathcal{U}} \left\{ \sum_{i} |S_{ij}| + \|T_i\|_2 \right\}$$

di mana $\mathcal{U} = \{ (\tilde{D}_0, \tilde{y}) : \|\tilde{D}_0\|_1 + \|\tilde{y}\|_1 \leq \Gamma \}$ adalah uncertainty set polyhedral. Ini menjamin bahwa keputusan optimal tetap feasible untuk semua skenario dalam set tersebut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model di atas memerlukan SOP berlapis yang mengikuti rekomendasi operasional dari kedua literatur. Prosedur ini dirancang agar dapat diadopsi oleh integrator CLSC baterai seperti CATL (Brunp Recycling), BYD, atau Tesla Energy.

### 3.1 Fase 1: Diagnostik SOH dan Alokasi Portofolio

```
┌────────────────────────
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
