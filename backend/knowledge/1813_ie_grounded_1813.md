# 1813 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Krisis global limbah baterai lithium-ion (LIB) dari kendaraan listrik (EV) end-of-life (EoL) menjadi salah satu tantangan rekayasa sistem industri paling mendesak dekade ini. Berdasarkan proyeksi International Energy Agency (IEA) yang dirujuk oleh JIANG Lin & TANG Lidan (2025) dalam proceeding ICLSE 2024, volume baterai power bekas pakai di pasar Tiongkok diproyeksikan menembus 2,6 juta ton pada 2030, didominasi oleh fase retirement masal kendaraan listrik generasi pertama (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)). Urgensi ini memunculkan kebutuhan akan arsitektur *Closed-Loop Supply Chain* (CLSC) yang tidak hanya回收 (*recycling*) material, tetapi juga melakukan *echelon utilization* — yaitu repurpose baterai dengan State-of-Health (SoH) 70–80% ke aplikasi stasioner second-life seperti penyimpanan energi surya, telekomunikasi, dan *uninterruptible power supply* (UPS).

Permasalahan mendasar yang diidentifikasi JIANG & TANG (2025) adalah fragmentasi keputusan antara tiga pemangku kepentingan utama: Original Equipment Manufacturer (OEM) baterai, operator *echelon utilization* (EU), dan fasilitas *remanufacturing-recycling* (RR). Tanpa koordinasi harga, kapasitas, dan kualitas intake, terjadi inefisiensi alokasi yang menurunkan profitabilitas keseluruhan rantai pasok. Sebagai komplemen, Shin, Kim, & Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menyoroti bahwa ketidakpastian tingkat pengembalian (*return rate*), kualitas baterai kembali, dan harga logam kritis (Li, Co, Ni) menuntut formulasi model yang robust agar keputusan tidak *worst-case vulnerable*. Konteks regulasi seperti EU Battery Regulation 2023/1542 yang mensyaratkan tingkat daur ulang 65% untuk baterai Li-ion dan recovery target 90% untuk kobalt, nikel, dan tembaga semakin memperkuat justifikasi strategis CLSC. Dengan demikian, integrasi keputusan *echelon allocation* dan *remanufacturing* di bawah payung optimasi robust menjadi *research gap* yang mengisi celah antara riset akademis dan kebutuhan implementasi industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CLSC Tiga Eselon

Model mengikuti struktur JIANG & TANG (2025) yang melibatkan eselon *forward* (manufaktur baterai baru), *reverse* (collection, inspection, sorting), dan *remanufacturing* (echelon utilization + daur ulang material). Notasi parameter:

- $i \in \{1, 2, 3\}$: indeks eselon (OEM, EU-operator, RR-facility)
- $q_i$ : kuantitas baterai/aliran material di eselon $i$ (unit)
- $p_i$ : harga transfer di eselon $i$ (CNY/unit)
- $c_i$ : biaya unit operasi di eselon $i$ (CNY/unit)
- $\theta$ : SoH baterai, dengan $0,7 \leq \theta \leq 0,8$ masuk EU, $\theta < 0,7$ masuk RR
- $\alpha$ : proporsi baterai retired layak echelon ($0 \leq \alpha \leq 1$)

### 2.2 Fungsi Permintaan dan Profit

Permintaan *echelon utilization* dan *remanufacturing* bersifat saling tergantung (substitusi parsial) sesuai formulasi JIANG & TANG (2025):

$$D_2 = a_2 - b_2 p_2 + \gamma p_3, \quad D_3 = a_3 - b_3 p_3 + \gamma p_2$$

dengan $b_i > 0$ adalah sensitivitas harga dan $\gamma \in (0, b_2)$ adalah koefisien substitusi silang. Fungsi profit masing-masing eselon:

$$\pi_2(q_2) = (p_2 - c_2) D_2 - \frac{\eta q_2^2}{2}, \quad \pi_3(q_3) = (p_3 - c_3) D_3 - \frac{\mu q_3^2}{2}$$

di mana $\eta, \mu$ adalah parameter biaya kuadratik kapasitas (*capacity scaling cost*).

### 2.3 Stackelberg–Nash Equilibrium

OEM sebagai *Stackelberg leader* menentukan *wholesale price* $w$ dan *buy-back price* $b$ untuk mengkoordinasi EU dan RR. Fungsi objektif OEM:

$$\max_{w,b} \; \Pi_1 = (w - c_1)Q_1 + (b - c_r)Q_r - \Phi(w,b)$$

dengan $\Phi(w,b)$ adalah *coordination cost*. Kondisi *first-order* (KKT) pada *best response* EU $(q_2^*)$ dan RR $(q_3^*)$ menghasilkan sistem simultan:

$$\frac{\partial \pi_2}{\partial q_2} = p_2 - c_2 - \eta q_2 - b_2 p_2 = 0 \implies q_2^*(p_2) = \frac{a_2 - c_2 - b_2 p_2 + \gamma p_3}{\eta + b_2^2}$$

$$\frac{\partial \pi_3}{\partial q_3} = p_3 - c_3 - \mu q_3 - b_3 p_3 = 0 \implies q_3^*(p_3) = \frac{a_3 - c_3 - b_3 p_3 + \gamma p_2}{\mu + b_3^2}$$

Substitusi ke objektif OEM menghasilkan *reduced form* yang dapat diselesaikan dengan *backward induction*.

### 2.4 Formulasi Robust (Shin, Kim, & Jeong, 2024)

Untuk mengatasi ketidakpastian return rate $\tilde{\rho} \in [\rho - \Delta_\rho, \rho + \Delta_\rho]$ dan harga logam $\tilde{\lambda} \in [\lambda - \Delta_\lambda, \lambda + \Delta_\lambda]$, Shin et al. (2024) mengusulkan *box uncertainty set*:

$$\mathcal{U} = \left\{ (\tilde{\rho}, \tilde{\lambda}) : \frac{|\tilde{\rho} - \rho|}{\rho} \leq \psi_\rho, \; \frac{|\tilde{\lambda} - \lambda|}{\lambda} \leq \psi_\lambda \right\}$$

dengan budget ketidakpastian $\psi_\rho, \psi_\lambda \in [0,1]$. Model robust counterpart:

$$\min_{x \in \mathcal{X}} \max_{u \in \mathcal{U}} \; \mathbf{c}^T x + \mathbf{d}^T(u) x$$

yang setelah dualisasi (berdasarkan *Bertsimas-Sim theory*) menjadi *Mixed Integer Linear Programming* (MILP) tractable.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas mengikuti kerangka *Standard Operating Procedure* (SOP) yang distandardisasi dalam 6 tahap rekayasa sesuai rekomendasi JIANG & TANG (2025) dan Shin et al. (2024):

**Tahap 1 — Collection & Aggregation.** Baterai retired dikumpulkan dari *4R channel* (Retailer, Reuse-market, Repair-shop, Recycling-point) menggunakan *Internet-of-Things* (IoT) tracking sesuai GB/T 34014-2017. Setiap unit dilengkapi Battery Passport (EU 2023/1542 compliant) berisi data siklus, SoH historis, dan provenance material.

**Tahap 2 — Diagnosis & Sorting.** Pengujian *State-of-Health* (SoH) menggunakan *Electrochemical Impedance Spectroscopy* (EIS) memisahkan baterai ke tiga *grade*: Grade A (SoH ≥ 80%, layak reuse), Grade B (70% ≤ SoH < 80%, layak echelon), Grade C (SoH < 70%, layak recycling). Aturan alokasi:

$$\text{Grade}(b_k) = \begin{cases} A & \text{jika } \theta_k \geq 0{,}80 \\ B & \text{jika } 0{,}70 \leq \theta_k < 0{,}80 \\ C & \text{jika } \theta_k < 0{,}70 \end{cases}$$

**Tahap 3 — Pricing Decision (Stackelberg Layer).** OEM menjalankan algoritma *backward induction* untuk menetapkan $w^*$ dan $b^*$ yang memaksimalkan $\Pi_1$ dengan memperhatikan *best-response* EU dan RR.

**Tahap 4 — Echelon Reconfiguration.** Grade B di-*repurpose* dengan mengganti BMS (Battery Management System), rekondisi sel, dan diuji pada aplikasi target. *Cycle-life enhancement* dihitung:

$$N_{\text{residual}}(\theta) = N_{\text{total}} \left(1 - \left(\frac{1 - \theta}{0{,}3}\right)^{k}\right)$$

**Tahap 5 — Hydrometallurgical Recycling.** Grade C melalui *pretreatment* (mechanical shredding), *pyrometallurgy* (smelting), dan *hydrometallurgy* (leaching + solvent extraction) untuk recovery Li ($> 95\%$), Co ($> 98\%$), Ni ($> 98\%$).

**Tahap 6 — Robust Re-optimization (Tahap 6 per