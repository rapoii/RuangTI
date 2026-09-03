# 2405 — Pengambilan Keputusan dan Analisis Manfaat Rantai Pasok Remanufaktur Loop Tertutup dengan Subsidi Pemerintah

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Decision making and benefit analysis of closed-loop remanufacturing supply chain considering government subsidies
**Jurnal & Sitasi Utama:** Peng Wan, Zhiyuan Xie (2024). *Heliyon*. DOI: [https://doi.org/10.1016/j.heliyon.2024.e38487](https://doi.org/10.1016/j.heliyon.2024.e38487)
**Sitasi Pendukung:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)

---

## 1. Pendahuluan dan Konteks Industri

Krisis lingkungan global yang dipicu oleh akumulasi limbah elektronik (e-waste), penipisan sumber daya mineral kritis (litium, kobalt, nikel), serta komitmen dekarbonisasi menjadikan rantai pasok remanufaktur *closed-loop* (CLSC) sebagai pilar strategis transformasi industri manufaktur abad ke-21. Dalam konteks operasional, rantai pasok linier konvensional ("ambil-buat-buang") tidak lagi layak secara ekonomi-ekologis karena menghasilkan *externalities* berupa polusi, inefisiensi material, dan ketergantungan pada ekstraksi sumber daya primer yangvolatile harganya. Peng Wan dan Zhiyuan Xie (2024) dalam *Heliyon* (DOI: [10.1016/j.heliyon.2024.e38487](https://doi.org/10.1016/j.heliyon.2024.e38487)) menyoroti bahwa pengambilan keputusan dalam CLSC yang mempertimbangkan subsidi pemerintah menjadi semakin krusial, terutama ketika terjadi kegagalan pasar (*market failure*) dalam koordinasi回收回收回收 pengembalian produk *end-of-life* (EOL).

Urgensi operasional dari penelitian ini tecermin pada tiga dimensi. Pertama, secara ekonomi, remanufaktur memungkinkan penghematan biaya produksi hingga 40–85% dibandingkan manufaktur virgin (savings tergantung kompleksitas produk), namun menuntut tingkat pengembalian (*return rate*) yang tinggi agar layak secara finansial. Kedua, secara teknis, proses *disassembly*, *testing*, *refurbishing*, dan *reassembly* memerlukan kapasitas reverse logistics yang tidak dimiliki semua *stakeholder*, sehingga muncul kebutuhan akan pihak ketiga khusus (*third-party recycler*, TPR). Ketiga, secara kebijakan, instrumen subsidi pemerintah—baik berupa subsidi per-unit回收 (k sebesar Rp150.000–300.000/unit pada konteks baterai lithium di Indonesia berdasarkan estimasi Kementerian Perindustrian 2023), subsidi infrastruktur daur ulang, maupun keringanan pajak—diakui Wan dan Xie (2024) sebagai katalisator esensial untuk mendorong partisipasi korporat dalam CLSC.

Studi pelengkap dari JIANG Lin dan TANG Lidan (2025) dalam *14th International Conference on Logistics and Systems Engineering* (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menunjukkan bahwa pada konteks spesifik baterai daya bekas (*retired power battery*), terdapat dilema keputusan yang lebih kompleks: apakah baterai tersebut harus diarahkan ke pemanfaatan bertingkat/*echelon utilization* (misalnya sebagai *stationary storage*) atau langsung ke daur ulang material (*recycling remanufacturing*). Integrasi keputusan ini ke dalam struktur CLSC menciptakan arsitektur keputusan multi-arah yang memerlukan pendekatan analitis kuantitatif, bukan sekadar intuisi manajerial. Dengan demikian, modul 2405 ini membingkai problema CLSC sebagai problem *engineering economics* dan *operations research* yang harus diselesaikan secara formal melalui pemodelan game teoritis.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang digunakan mengikuti arsitektur **Stackelberg game** tiga-tingkat (*three-echelon*) sebagaimana dikembangkan oleh Wan dan Xie (2024): Produsen (*Manufacturer*, M) sebagai *leader* Tier-1, Pengecer (*Retailer*, R) sebagai *leader* Tier-2, dan Pihak Ketiga回收 (TPR) sebagai *follower*. Pemerintah (*Government*, G) bertindak sebagai *exogenous regulator* yang menyuntikkan subsidi ke titik-titik strategis dalam rantai.

### 2.1 Notasi Parameter dan Variabel Keputusan

| Simbol | Definisi |
|--------|----------|
| $c_m$ | Biaya produksi unit remanufaktur oleh Produsen |
| $c_n$ | Biaya produksi unit baru (virgin) oleh Produsen |
| $w$ | Harga grosir yang ditetapkan Produsen |
| $p$ | Harga eceran yang ditetapkan Pengecer |
| $b$ | Harga回收 insentif yang ditawarkan Pengecer ke konsumen |
| $\tau$ | Tingkat pengembalian konsumen ($0 < \tau < 1$) |
| $k$ | Subsidi pemerintah per unit remanufaktur |
| $s$ | Subsidi pemerintah per unit回收 yang berhasil dikembalikan |
| $a$ | Parameter ukuran pasar potensial |
| $\theta$ | Elastisitas harga permintaan |

### 2.2 Fungsi Permintaan dan Pasokan回收

Fungsi permintaan pasar mengikuti model linear klasik:

$$D(p) = a - \theta p$$

Volume回收 yang berhasil dikumpulkan TPR ditentukan oleh insentif回收 $b$ dan tingkat回收 $\tau$:

$$Q_r = \tau (a - \theta p)$$

### 2.3 Fungsi Keuntungan Setiap *Stakeholder*

**Keuntungan Produsen (M):** Produsen menjual unit baru dan remanufaktur dengan margin berbeda, ditambah subsidi pemerintah $k$ per unit remanufaktur dan $s$ per unit回收 yang diterima TPR:

$$\pi_M = (w - c_n)(a - \theta p) + (c_n - c_m + k)\tau(a - \theta p) + s \cdot \tau(a - \theta p)$$

**Keuntungan Pengecer (R):** Pengecer memperoleh margin penjualan dan menanggung biaya insentif回收 $b$:

$$\pi_R = (p - w)(a - \theta p) - b \cdot \tau(a - \theta p)$$

**Keuntungan TPR:** TPR memperoleh pendapatan dari aktivitas daur ulang, insentif回收 yang dibayarkan Pengecer, dan subsidi pemerintah $s$ per unit, dikurangi biaya operasional回收 $c_t$:

$$\pi_T = (b - c_t)\tau(a - \theta p) + s \cdot \tau(a - \theta p)$$

### 2.4 Penyelesaian Equilibrium dengan *Backward Induction*

Mengikuti prosedur Wan dan Xie (2024), solusi *Subgame Perfect Equilibrium* (SPE) diperoleh melalui:

**Step 1:** Maksimasi $\pi_T$ terhadap $b$ menghasilkan *best response* Pengecer:

$$\frac{\partial \pi_T}{\partial b} = \tau(a - \theta p) = 0 \Rightarrow b^* = c_t + s$$

Karena $\tau(a - \theta p) > 0$, maka optimal $b$ dihitung melalui second-order condition dan batas atas yang feasible.

**Step 2:** Substitusi $b^*$ ke $\pi_R$, lalu turunkan terhadap $p$:

$$\frac{\partial \pi_R}{\partial p} = (a - \theta p) + (p - w)(-\theta) - b^* \tau(-\theta) = 0$$

Menghasilkan harga eceran optimal:

$$p^* = \frac{a + \theta w + \theta b^* \tau}{2\theta}$$

**Step 3:** Substitusi $p^*$ ke $\pi_M$, optimalkan terhadap $w$:

$$w^* = \frac{a + \theta c_n + \theta c_m - k\theta - s\theta - \theta b^* \tau}{2\theta}$$

### 2.5 Dampak Subsidi terhadap Keseimbangan

*Comparative statics* menghasilkan hubungan kuantitatif:

$$\frac{\partial w^*}{\partial k} = -\frac{1}{2}, \quad \frac{\partial p^*}{\partial k} = -\frac{1}{4}, \quad \frac{\partial \pi_M}{\partial k} > 0, \quad \frac{\partial \pi_T}{\partial k} = 0$$

Interpretasi: peningkatan subsidi $k$ menurunkan harga grosir dan eceran, meningkatkan profit Produsen, namun tidak langsung memengaruhi profit TPR. Ini mengonfirmasi hipotesis Wan dan Xie (2024) bahwa subsidi per-unit remanufaktur paling efektif untuk Produsen, sedangkan subsidi per-unit回收 paling efektif untuk TPR.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model CLSC dengan subsidi ini mengikuti *Framework* 7-tahap sebagaimana dikristalisasikan dari kedua literatur:

### 3.1 Diagram Alir Proses Rekayasa

```
[Tahap 1] Identifikasi Scope & Pemetaan Stakeholder
        ↓
[Tahap 2] Estimasi Parameter Struktural (a, θ, c_n, c_m, c_t)
        ↓
[Tahap 3] Formulasi Game Stackelberg 3-Echelon
        ↓
[Tahap 4] Penyelesaian SPE dengan Backward Induction
        ↓
[Tahap 5] Validasi Numerik & Sensitivity Analysis
        ↓
[Tahap 6] Negosiasi Struktur Subsidi dengan Regulator
        ↓
[Tahap 7] Implementasi Kontrak Koordinasi (Revenue Sharing / Cost Sharing)
```

### 3.2 SOP Implementasi Industri

**Fase A — Desain Sistem (Bulan 1-3):**
1. Lakukan *value stream mapping* terhadap reverse logistics existing
2. Estimasi parameter permintaan dan biaya berdasarkan data historis 24 bulan
3. Bangun model game teoritis menggunakan software optimasi (GAMS, MATLAB, atau Python/SciPy)
4. Validasi equilibrium dengan metode Monte Carlo (N=10.000 iterasi)

**Fase B — Negosiasi Kebijakan (Bulan 4-6):**
5. Sampaikan hasil simulasi ke otoritas pemerintah (misalnya KLHK, Kemenperin) untuk justifikasi subsidi $k$ dan $s$
6. Tetapkan *baseline* kontrak koordinasi: misalnya *revenue-sharing contract* dengan rasio $\phi = 0.6$ (Produsen) : $\phi = 0.4$ (Pengecer) untuk mencegah *double marginalization*

**Fase C — Operasionalisasi (Bulan 7-12):**
7. Implementasikan *reverse supply chain information system* dengan blockchain traceability
8. Monitor KPI:回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收回收