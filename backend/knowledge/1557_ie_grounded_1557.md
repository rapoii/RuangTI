# 1557 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Berjenjang (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Bekas Pembangkit Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan kendaraan listrik (Electric Vehicle/EV) global yang diproyeksikan mencapai lebih dari 245 juta unit pada 2030 (IEA, 2024) telah menciptakan tantangan end-of-life (EoL) yang masif terhadap baterai litium-ion (LIB). Baterai dengan *State of Health* (SOH) di bawah 70–80% tidak lagi layak untuk aplikasi otomotif, namun masih memiliki kapasitas residu yang signifikan untuk aplikasi sekunder seperti *stationary grid storage*, *telecom backup*, dan *forklift industrial*. Fenomena ini memicu konsep *echelon utilization* (pemanfaatan berjenjang/kaskade), di mana baterai pensiun dari level performa tinggi dialihkan ke level performa lebih rendah sebelum akhirnya diremanufactur atau didaur ulang untuk回收 material kritis (Co, Ni, Li).

JIANG Lin & TANG Lidan (2025) dalam naskah yang dipublikasikan melalui proceedings ICLSE 2024 (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menyoroti bahwa strategi *closed-loop supply chain* (CLSC) konvensional yang hanya mempertimbangkan daur ulang material sering mengabaikan nilai ekonomi residual dari *second-life battery*. Mereka mengusulkan kerangka keputusan terpadu yang mengoptimalkan secara simultan keputusan manufaktur baru, *take-back*, pemilahan kaskade, dan remanufaktur. Di sisi komplementer, Shin, Kim & Jeong (2024) (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) memperkuat urgensi ini melalui model CLSC *robust* yang secara eksplisit mengelola ketidakpastian *return flow* dalam konteks ekonomi sirkular.

Konteks industri di pasar baterai China — yang menguasai lebih dari 75% kapasitas manufaktur LIB global — menunjukkan bahwa tanpa strategi CLSC yang terkoordinasi, biaya logistik回收 bisa mencapai 18–25% dari total biaya siklus hidup baterai, sekaligus menciptakan *environmental liability* yang signifikan. Regulasi *Extended Producer Responsibility* (EPR) yang berlaku di Uni Eropa, China, dan Korea Selatan secara langsung menuntut produsen untuk menginternalisasi biaya EoL, menjadikan optimasi CLSC bukan sekadar keputusan profit, melainkan *compliance imperative*. Kertas kerja JIANG & TANG (2025) menjawab gap ini dengan formulasi *Stackelberg game* tiga level (produsen sebagai leader, retailer dan recycler sebagai follower) yang menyeimbangkan tiga *objective*: margin penjualan baru, pendapatan *second-life*, dan biaya回收.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC dengan Echelon

Jaringan CLSC yang dikaji JIANG & TANG (2025) terdiri atas empat entitas: **produsen (M)**, **retailer (R)**, **echelon operator (E)**, dan **recycler (RC)**. Aliran material membentuk satu loop utama: $M \to R \to \text{konsumer} \to \text{koleksi} \to \{E \oplus RC\} \to M$. Parameter-parameter kunci didefinisikan sebagai berikut:

- $c_m$ : biaya produksi baterai baru (per unit kapasitas, USD/kWh)
- $c_e$ : biaya refurbishing untuk *second-life* (USD/kWh)
- $c_r$ : biaya daur ulang & ekstraksi material (USD/kWh)
- $w$ : harga grosir dari M ke R
- $p_r$ : harga ritel ke konsumen akhir
- $p_e^s$ : harga jual *second-life* battery oleh E ke pasar sekunder
- $\tau \in [0,1]$ : tingkat take-back (recycling/collection rate)
- $\theta \in [0,1]$ : fraksi baterai terpulihkan yang dialokasikan ke echelon (sisanya $1-\theta$ didaur ulang)
- $R$ : total stok baterai pensiun yang tersedia untuk回收 per periode
- $e \in [0,1]$ : tingkat investasi collector/efort回收 (effort green)

### 2.2 Fungsi Permintaan & Fungsi Profit

Fungsi permintaan mengikuti struktur permintaan linier deterministik dengan efek *green effort*:

$$D_n(p_r, e) = \alpha - \beta p_r + \gamma e$$

$$D_e(p_e^s) = \delta - \epsilon p_e^s$$

di mana $\alpha, \beta, \delta, \epsilon, \gamma > 0$. Fungsi profit untuk masing-masing entitas:

$$\pi_M = (w - c_m) D_n + (p_e^s - c_e)\,\theta \tau R + (A - c_r)(1 - \theta)\tau R - C_e(e)$$

$$\pi_R = (p_r - w) D_n$$

$$\pi_E = (p_e^{market} - p_e^s) D_e - f_E(\theta \tau R)$$

$$\pi_{RC} = (A - c_r)(1-\theta)\tau R - f_{RC}(\theta, \tau)$$

dengan $A$ adalah nilai material hasil daur ulang (per kWh), $f_E(\cdot)$ dan $f_{RC}(\cdot)$ adalah biaya operasional pemrosesan, dan $C_e(e) = \frac{1}{2}\eta e^2$ adalah biaya kuadratik untuk green effort.

### 2.3 Formulasi Optimasi Stackelberg

Produsen sebagai leader memaksimumkan $\pi_M$ dengan memilih $(w, p_e^s, \theta, e)$, sementara retailer merespons dengan $p_r$ dan echelon operator dengan $p_e^{market}$. Kondisi *best response* retailer:

$$p_r^*(w, e) = \frac{\alpha + \beta w + \gamma e}{2\beta}$$

Substitusi balik menghasilkan *reduced profit* produsen:

$$\max_{w, p_e^s, \theta, e}\; \Pi_M = \frac{(\alpha - \beta w + \gamma e)^2}{4\beta} + (p_e^s - c_e)\theta\tau R + (A - c_r)(1-\theta)\tau R - \frac{\eta e^2}{2}$$

### 2.4 Ekstensi Robust (Shin, Kim & Jeong, 2024)

Untuk mengelola ketidakpastian return flow dan permintaan, Shin et al. (2024) memperkenalkan *uncertainty set box* $\mathcal{U} = \{(\tilde{D}, \tilde{R}) : |\tilde{D} - \bar{D}| \leq \rho_D, \; |\tilde{R} - \bar{R}| \leq \rho_R\}$. Formulasi robust counterpart menjadi:

$$\max_{w, p_r, \theta} \min_{(\tilde{D}, \tilde{R}) \in \mathcal{U}} \pi_{CLSC}(\cdot)$$

yang diselesaikan melalui dekomposisi dual dan menghasilkan *conservative profit bound* yang menjamin feasibility di seluruh worst-case scenario.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP enam-tahap berikut, yang disintesis dari framework JIANG & TANG (2025) dan Shin et al. (2024):

**Tahap 1 — Karakterisasi Baterai Pensiun (SOH Testing).**
Setiap baterai退役 menjalani pengujian kapasitas, internal resistance, dan cyclic history. Klasifikasi bivariat: SOH $\geq 80\%$ → *echelon candidate*; $60\% \leq$ SOH $< 80\%$ → *cascade candidate*; SOH $< 60\%$ → *direct recycling*.

**Tahap 2 — Desain Jaringan Take-Back.**
Aktivasi *reverse logistics nodes* (collection hubs) dengan radius jangkauan optimal $\leq 150$ km dari konsentrasi EV untuk meminimumkan transportation cost per kWh.

**Tahap 3 — Optimasi Harga & Effort.**
Penerapan *reverse Stackelberg solver* (mis. algoritma backward induction numerik) untuk menentukan $(w^*, p_r^*, \theta^*, e^*)$ berdasarkan parameter kalibrasi industri.

**Tahap 4 — Disassembly & Sorting.**
Modul baterai dibongkar mengikuti standar GB/T 34014-2017 (China) atau UN R100 (internasional), dipilah menjadi cell-pack-module hierarchy.

**Tahap 5 — Repurposing atau Remanufacturing.**
- *Repurposing*: reconfiguring module menjadi rack untuk stationary storage (48V/400V configurations).
- *Remanufacturing*: hydrometallurgical atau pyrometallurgical leaching untuk回收 Li, Co, Ni.

**Tahap 6 — Closed-loop Performance Monitoring.**
KPI: *collection rate* $\tau$, *second-life yield* $\theta$, *material recovery rate* $\rho$, dan *CLSC profit margin*. Pemantauan dilakukan melalui dashboard IoT berbasis BMS-data historis.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Parameter input** (kalibrasi mendekati kondisi operasional China 2024):

| Parameter | Nilai | Satuan |
|---|---|---|
| $\alpha$ | 5.000.000 | unit/thn |
| $\beta$ | 8.000 | unit/USD |
| $\gamma$ | 200.000 | unit/effort |
| $\delta$ | 1.200.000 | unit/thn |
| $\epsilon$ | 3.000 | unit/USD |
| $c_m$ | 95 | USD/kWh |
| $c_e$ | 22 | USD/kWh |
| $c_r$ | 8 | USD/kWh |
| $A$ | 28 | USD/kWh |
| $R$ | 800.000 | unit/thn |
| $\eta$ | 1.200.000 | USD |
| $\tau$ | 0,55 | – |

**Langkah 1 — Best Response Retailer.**
$$p_r^*(w, e) = \frac{5.000.000 + 8.000 w + 200.000 e}{2 \cdot 8.000} = \frac{5.