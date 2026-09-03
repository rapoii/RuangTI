# 2229 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Daur Ulang Manufaktur Baterai Daya Pensiun (Echelon Utilization & Remanufacturing)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Rantai Pasok Tertutup (CLSC) Baterai Daya Pensiun dengan Pemanfaatan Bertingkat, Daur Ulang, dan Manufaktur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (Electric Vehicle/EV) global yang diproyeksikan mencapai lebih dari 250 juta unit pada 2030 (IEA, 2024) menciptakan tantangan operasional baru dalam bentuk *end-of-life* (EoL) baterai lithium-ion (LIB). Baterai daya pensiun—yang umumnya masih memiliki **70%–80% State of Health (SOH)** dari kapasitas awal—mewakili potensi nilai ekonomi dan lingkungan yang sangat besar jika dikelola melalui rantai pasok tertutup (Closed-Loop Supply Chain/CLSC). Menurut JIANG Lin & TANG Lidan (2025) dalam proceeding ICLSE 2024 (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), pengelolaan baterai pensiun tidak cukup hanya melalui daur ulang material (*recycling*), melainkan harus mempertimbangkan strategi **pemanfaatan bertingkat (*echelon utilization*)**—yakni penggunaan kembali baterai pada aplikasi *second-life* seperti penyimpanan energi stasioner (stationary energy storage), telekomunikasi, atau *microgrid*—sebelum akhirnya dilakukan manufaktur ulang (*remanufacturing*) untuk memulihkan material kritis seperti litium, kobalt, dan nikel.

Urgensi industrialisasi CLSC baterai ini didorong oleh tiga faktor simultan. Pertama, **regulasi Extended Producer Responsibility (EPR)** yang berlaku di Uni Eropa (Directive 2006/66/EC amendment 2018/849) dan Tiongkok (GB/T 34014-2017) mengharuskan manufaktur Original Equipment Manufacturer (OEM) bertanggung jawab atas pengembalian baterai EoL. Kedua, **fluktuasi harga material kritis**—di mana harga litium karbonat pernah menembus USD 80.000/ton pada 2022—menjadiklan *urban mining* dari baterai pensiun jauh lebih menarik secara ekonomi dibandingkan penambangan primer. Ketiga, **volatilitas permintaan dan kualitas pengembalian** yang tinggi memerlukan pendekatan *robust optimization* seperti yang dikemukakan oleh Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) untuk menjamin keberlanjutan rantai pasok di bawah ketidakpastian struktural.

Dalam konteks Indonesia—yang memiliki lebih dari 15.000 unit armada EV TransJakarta dan ambisi elektrifikasi 2 juta unit EV pada 2030—topologi CLSC baterai menjadi kritikal karena belum adanya fasilitas *recycling* berskala komersial domestik. Keputusan strategis terkait alokasi baterai pensiun antara *echelon use*, *remanufacturing*, dan *landfill* menjadi *trade-off* multi-kriteria yang memerlukan formulasi matematis presisi, sebagaimana diuraikan oleh JIANG & TANG (2025) menggunakan pendekatan **Stackelberg Leader-Follower Game**.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Keputusan CLSC Multi-Eselon

JIANG & TANG (2025) memodelkan CLSC baterai pensiun dengan tiga entitas keputusan:
- **Manufaktur OEM (M)** sebagai *leader* yang menentukan harga grosir ($w$), tingkat daur ulang ($\tau_r$), dan alokasi echelon ($\alpha$)
- **Retailer/Pengumpul (R)** sebagai *follower* yang menentukan harga eceran ($p$) dan tingkat pengumpulan ($\lambda$)
- **Fasilitas Pemanfaatan Bertingkat (Echelon Operator/EO)** sebagai entitas *third-party* yang menyerap baterai pensiun dari R untuk aplikasi *second-life*

Variabel keputusan utama:
$$\mathbf{x} = (w, p, \lambda, \tau_r, \alpha) \in \mathbb{R}^5_{+}$$

### 2.2 Model Permintaan dengan Sensitivitas Harga

Fungsi permintaan pasar untuk baterai baru dan refurbished menggunakan model linier price-sensitive (JIANG & TANG, 2025):
$$D_b = a - b p + s \cdot p_r$$
$$D_r = \delta + s \cdot p - \gamma p_r$$

di mana:
- $a, b$ = intercept dan slope permintaan baterai baru
- $\delta, \gamma$ = parameter permintaan baterai remanufaktur
- $s$ = koefisien substitusi silang (cross-price elasticity)
- $p_r$ = harga jual baterai remanufaktur

### 2.3 Fungsi Profit Maksimum (Stackelberg Equilibrium)

**Profit Manufaktur OEM (Leader):**
$$\pi_M = (w - c_m) D_b + (p_r - c_r) D_r + \alpha \cdot v_e \cdot G(\lambda) - \tau_r C_{rec} \cdot G(\lambda)$$

**Profit Retailer/Pengumpul (Follower):**
$$\pi_R = (p - w) D_b + (A - c_{coll}) \cdot G(\lambda) - \alpha \cdot A_e \cdot G(\lambda)$$

di mana:
- $c_m, c_r$ = biaya produksi baterai baru & remanufaktur
- $C_{rec}$ = biaya daur ulang material per unit
- $G(\lambda) = \lambda \cdot Q_{EoL}$ = volume baterai pensiun yang terkumpul
- $v_e$ = nilai *second-life* per unit baterai echelon
- $A, A_e$ = harga beli baterai pensiun dari retailer untuk OEM vs EO
- $Q_{EoL}$ = total baterai pensiun di pasar

### 2.4 Formulasi Robust Optimization (Pendukung: Shin et al., 2024)

Untuk mengatasi ketidakpastian permintaan pasar $a \sim U[a^L, a^U]$, Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) mengusulkan formulasi robust counterpart:
$$\max_{\mathbf{x}} \min_{a \in \mathcal{U}} \pi_M(\mathbf{x}, a)$$

dengan *box uncertainty set*:
$$\mathcal{U} = \left\{ a : a^L \leq a \leq a^U, \; |a - \hat{a}| \leq \rho \cdot \hat{\sigma}_a \right\}$$

di mana $\rho$ = parameter konservatisme (biasanya $\rho \in [1, 5]$). Semakin tinggi $\rho$, solusi semakin *risk-averse* namun profit ekspektasi menurun—mewakili *risk-return trade-off*.

### 2.5 Kondisi First-Order (Backward Induction)

Dengan asumsi *follower* bersifat *rational*, kita selesaikan masalah R terlebih dahulu:
$$\frac{\partial \pi_R}{\partial p} = 0 \implies p^*(w, \lambda) = \frac{a + bw + s p_r}{2b}$$
$$\frac{\partial \pi_R}{\partial \lambda} = 0 \implies \lambda^*(A, \alpha) = \frac{A(1-\alpha) Q_{EoL} + A_e \alpha Q_{EoL} - c_{coll} Q_{EoL}}{2k}$$

Substitusi ke $\pi_M$ menghasilkan **Stackelberg Equilibrium** $(\bar{w}, \bar{\alpha}, \bar{\tau_r})$ yang optimal secara *subgame perfect Nash equilibrium*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) bersama Shin et al. (2024) menyusun arsitektur CLSC baterai pensiun dalam SOP 7-tahap sebagai berikut:

### Diagram Alir CLSC Baterai Pensiun

```
[EV退役] → [Collection Center/Retailer] → ┬─→ [Diagnostic Test SOH]
                                          │        │
                                          ├─→ SOH ≥ 80% → [Echelon Application (storage)]
                                          │        │
                                          ├─→ 60% ≤ SOH < 80% → [Remanufacturing]
                                          │        │
                                          └─→ SOH < 60% → [Hydrometallurgical Recycling]
                                                                     │
                                                                     ▼
                                                          [Material Recovery → OEM Loop]
```

### Tahapan SOP:

**Tahap 1 — Battery Passport Registration:**
Setiap baterai baru yang diproduksi OEM harus teregistrasi dalam *digital battery passport* (sesuai EU Regulation 2023/1542) berisi data kimia sel, siklus pengisian, dan riwayat operasional.

**Tahap 2 — Threshold Collection & Logistics:**
Retailer/3PL menentukan *reverse logistics network* dengan biaya $c_{coll}$ per unit. JIANG & TANG (2025) menyarankan target $\lambda \geq 0.6$ untuk memenuhi *collection rate target* OECD.

**Tahap 3 — Echelon Screening & Grading:**
Pemilahan baterai pensiun menggunakan tiga kriteria:
- **State of Health (SOH):** $SOH = \frac{C_{actual}}{C_{rated}} \times 100\%$
- **Internal Resistance (IR):** $IR < 1.5 \cdot IR_{rated}$
- **Self-Discharge Rate:** $\Delta V_{24h} < 3\%$

**Tahap 4 — Stackelberg Game Equilibrium Computation:**
Selesaikan sistem persamaan first-order menggunakan *backward induction* hingga konvergen (toleransi $\epsilon < 10^{-4}$). Implementasi melalui solver *GAMS/MINOS* atau *Python Pyomo*.

**Tahap 5 — Robust Counterpart Formulation:**
Definisikan uncertainty budget $\Gamma \in [0, |\mathcal{U}|]$ (Shin et al., 2024). Pilih $\Gamma = 0$ untuk *nominal*, $\Gamma = |\mathcal{U}|$ untuk *worst-case robust*.

**Tahap 6 — Echelon Revenue Allocation:**
Hitung distribusi nilai tambah (*value-sharing contract*):
$$v_e = p_{sl} \cdot \eta_{cycle} \cdot SOH - C_{repacking}$$

di mana $p_{sl}$ = harga jual second-life per kWh, $\eta_{cycle}$ = efisiensi siklus tersisa.

**Tahap 7 — Performance Monitoring KPI:**
- Collection Rate: $\lambda \geq 0.65$
- Echelon Yield: $\alpha \cdot SOH \geq 0.4$
- Recycling Recovery: $\geq 90\%$ untuk Co/Ni, $\geq 50\%$ untuk Li (target EU 2027)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Industri (Studi Kasus: Produsen EV Skala 500.000 unit/tahun)

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Permintaan baterai baru intercept | $a$ | 600.000 | unit |
| Slope permintaan | $b$ | 80 | unit/¥ |
| Koefisien substitusi | $s$ | 25 | unit/¥ |
| Permintaan remanufaktur | $\delta$ | 120.000 | unit |
| Slope remanufaktur | $\gamma$ | 50 | unit/¥ |
| Biaya produksi baru | $c_m$ | 45.000 | ¥/unit |
| Biaya remanufaktur | $c_r$ | 28.000 | ¥/unit |
| Biaya daur ulang | $C_{rec}$ | 8.000 | ¥/unit |
| Biaya pengumpulan | $c_{coll}$ | 1.500 | ¥/unit |
| Volume baterai pensiun | $Q_{EoL}$ | 150.000 | unit/tahun |
| Nilai second-life | $v_e$ | 12.000 | ¥/unit |
| Konservatisme robust | $\rho$ | 2.5 | - |

### 4.2 Langkah Kalkulasi Step-by-Step

**Langkah 1 — Substitusi Subproblem Retailer:**
Substitusi $p^*(w, \lambda) = \frac{a + bw + s p_r}{2b}$ dengan $a = 600.000$, $b = 80$, $s = 25$, $p_r = 50.000$:
$$p^* = \frac{600.000 + 80w + 25(50.000)}{160} = \frac{600.000 + 80w + 1.250.000}{160} = 11.562,5 + 0,5w$$

**Langkah 2 — Perhitungan Permintaan Equilibrium:**
$$D_b = 600.000 - 80 p^* + 25(50.000) = 600.000 - 80(11.562,5
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
