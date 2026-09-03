# 2213 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (*Echelon Utilization*) dan Daur Ulang Manufaktur Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain (CLSC) untuk Baterai Power Bekas dengan Integrasi *Echelon Utilization* dan *Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (*Electric Vehicle*/EV) global yang diproyeksikan menembus lebih dari 250 juta unit pada 2030 (IEA, *Global EV Outlook*) menimbulkan tantangan siklus hidup (*end-of-life*/EoL) yang krusial: bagaimana mengelola baterai lithium-ion bekas (*retired power battery*). Baterai EV yang telah terdegradasi hingga *State of Health* (SoH) 70–80% tidak lagi layak untuk aplikasi otomotif, namun masih memiliki kapasitas residu yang signifikan untuk pemanfaatan kedua (*second-life*). JIANG Lin & TANG Lidan (2025) dalam makalahnya yang diterbitkan di *14th International Conference on Logistics and Systems Engineering* (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menegaskan bahwa strategi *closed-loop supply chain* (CLSC) yang mengintegrasikan *echelon utilization* dan *recycling remanufacturing* merupakan pendekatan paling *system-efficient* untuk menangkap nilai ekonomi residu sekaligus menekan dampak lingkungan.

Urgensi penelitian ini bersifat *triple bottom line*:

1. **Ekonomi:** Nilai pasar baterai bekas global diproyeksikan mencapai USD 95,5 miliar pada 2030 (BloombergNEF). Tanpa orkestrasi rantai pasok yang tepat, *leakage* nilai ke sektor informal (dengan yield回收 < 30%) akan merugikan industri.
2. **Operasional:** Variabilitas SoH, fragmentasi pengumpul, dan ketidakpastian permintaan untuk produk *second-life* (misalnya *stationary energy storage system*/SESS) menciptakan *bullwhip effect* pada reverse logistics.
3. **Regulasi:** Arahan Uni Eropa *Battery Regulation 2023/1542* mewajibkan tingkat daur ulang material 65% pada 2025 dan 70% pada 2030, memaksa integrasi vertikal CLSC.

JIANG & TANG (2025) memposisikan *echelon utilization* (pemanfaatan bertingkat) sebagai *first-tier* yang memaksimalkan utilisasi aset, sedangkan *recycling remanufacturing* menjadi *second-tier* yang memulihkan material kritis (Li, Co, Ni). Pendekatan ini diperkuat oleh Shin, Kim, & Jeong (2024) (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) yang menekankan pentingnya *robust return management system* untuk menghadapi ketidakpastian return rate dan demand dalam kerangka *circular economy*. Kombinasi keduanya menghasilkan CLSC yang adaptif dan tangguh (*resilient*) terhadap dinamika pasar sekunder.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur CLSC Multi-Eselon

Model JIANG & TANG (2025) mengadopsi arsitektur **Stackelberg game** tiga-tingkat dengan pemain keputusan:

- **Manufacturer (M)** sebagai *leader* yang menentukan harga jual baterai baru ($p_m$), subsidi *trade-in* ($\tau$), dan tingkat daur ulang material ($\rho$).
- **Echelon Operator (E)** sebagai *follower* yang menentukan tingkat akuisisi baterai bekas untuk *second-life* ($\eta$).
- **Recycler (R)** sebagai *follower* yang menentukan kapasitas *remanufacturing* ($q_r$).

### 2.2 Parameter dan Variabel Keputusan

| Simbol | Deskripsi | Domain |
|--------|-----------|--------|
| $D_0$ | Permintaan dasar baterai baru | $\mathbb{R}^+$ |
| $\alpha, \beta$ | Elastisitas harga & subsidi | $\mathbb{R}^+$ |
| $p_m, p_e, p_r$ | Harga baterai baru, *echelon*, recycled | $\mathbb{R}^+$ |
| $c_m, c_e, c_r$ | Biaya produksi baterai baru, refurbish, remanufaktur | $\mathbb{R}^+$ |
| $\tau$ | Subsidi *trade-in* dari M ke konsumen | $\mathbb{R}^+$ |
| $\lambda$ | Tingkat pengumpulan (*collection rate*) | $[0,1]$ |
| $\eta$ | Proporsi *echelon utilization* dari unit terkumpul | $[0,1]$ |
| $\theta$ | Ambang SoH untuk layak *echelon* | $[0.6, 0.8]$ |
| $\rho$ | Tingkat pemulihan material | $[0,1]$ |
| $\gamma$ | Faktor kualitas baterai bekas | $[0,1]$ |

### 2.3 Fungsi Permintaan dan Pasokan

Permintaan baterai baru menurun terhadap harganya dan meningkat terhadap subsidi (JIANG & TANG, 2025):

$$D_m = D_0 - \alpha p_m + \beta \tau \tag{1}$$

Permintaan untuk baterai *echelon* (untuk aplikasi SESS) adalah:

$$D_e = a_e - \alpha_e p_e + \delta \eta \quad \text{ dengan } \delta > 0 \tag{2}$$

Pasokan baterai bekas yang tersedia untuk *echelon* dan *recycling*:

$$S_{battery} = \lambda \cdot \gamma \cdot D_m \tag{3}$$

Alokasi antara *echelon* dan *recycling*:

$$Q_e = \eta \cdot S_{battery}, \quad Q_r = (1 - \eta) \cdot S_{battery} \tag{4}$$

### 2.4 Fungsi Objektif (Profit Stackelberg)

**Manufacturer's profit:**

$$\pi_M = (p_m - c_m) D_m - \tau D_m + w_e Q_e + (p_r - c_d) Q_r \tag{5}$$

di mana $w_e$ adalah harga transfer dari *echelon operator* ke manufaktur, dan $c_d$ adalah biaya disposal.

**Echelon operator's profit:**

$$\pi_E = (p_e - c_e - w_e) Q_e - I_e(\eta) \tag{6}$$

dengan $I_e(\eta) = \frac{1}{2} k_e \eta^2$ adalah biaya investasi kapasitas *second-life* yang konveks.

**Recycler's profit:**

$$\pi_R = (\rho \cdot v_{mat} - c_r) Q_r - I_r(q_r) \tag{7}$$

dengan $v_{mat}$ adalah nilai material kritis yang dipulihkan.

### 2.5 Formulasi Robust Counterpart (Shin, Kim, & Jeong, 2024)

Untuk mengatasi ketidakpastian $\tilde{\lambda} \in [\bar{\lambda} - \hat{\lambda}, \bar{\lambda} + \hat{\lambda}]$, Shin et al. (2024) menggunakan *box uncertainty set* $\mathcal{U} = \{\lambda : |\lambda - \bar{\lambda}| \leq \hat{\lambda}\}$ sehingga *robust counterpart* untuk kendala suplai:

$$\sum_{i} Q_i \leq (\bar{\lambda} - \hat{\lambda}) \cdot \gamma \cdot D_m \tag{8}$$

Hal ini menjamin kelayakan bahkan pada sk terburuk (*worst-case*) dengan *conservatism level* yang dapat dikontrol oleh parameter $\Gamma$ (Soyster/Bertsimas-Sim).

### 2.6 Kondisi *Induction Method* (Backwards Induction)

JIANG & TANG (2025) menyelesaikan *equilibrium* dengan *backwards induction*:

$$\max_{p_m, \tau, \rho} \pi_M \quad \text{s.t.} \quad (\eta^*, q_r^*) = \arg\max \pi_E, \pi_R \tag{9}$$

dengan KKT conditions:

$$\frac{\partial \pi_E}{\partial \eta} = 0 \Rightarrow (p_e - c_e - w_e) S_{battery} - k_e \eta = 0 \tag{10}$$

$$\eta^* = \frac{(p_e - c_e - w_e) S_{battery}}{k_e} \tag{11}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur CLSC End-to-End

JIANG & TANG (2025) mengusulkan arsitektur empat *node* yang saling terhubung melalui *digital ledger* (blockchain-traceable):

```
[EV Consumer] → [Collection Hub] → [Screening & Testing] → ┬─→ [Echelon: SESS/ESS]
                                                       └─→ [Recycler: Hydrometallurgy]
                                                                  ↓
                                                       [Material Recovery: Li/Co/Ni]
                                                                  ↓
                                                       [Re-manufactured Cell]
```

### 3.2 SOP Pengumpulan Baterai Bekas

| Tahap | Aktivitas | Standar | Output |
|-------|-----------|---------|--------|
| **1. Trigger** | Konsumen ajukan *trade-in*

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
