# 2417 — Optimasi Stokastik Hibrida untuk Masalah Lot Sizing dan Penjadwalan Produksi pada Lingkungan Perencanaan Rollover-Horizon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, Vol. 54, No. 2, hlm. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning.* Production and Operations Management. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur global yang ditandai dengan permintaan pelanggan yang semakin fluktuatif, fragmentasi rantai pasok, serta siklus hidup produk yang makin pendek, keputusan lot sizing dan penjadwalan produksi tidak lagi dapat dipisahkan sebagai aktivitas perencanaan yang statis. Lead Researchers (2025) dalam artikelnya yang berjudul *"A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem"* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menegaskan bahwa penggabungan keputusan *lot sizing* (penentuan ukuran batch ekonomis) dengan *scheduling* (urutan dan alokasi kapasitas mesin) menjadi semakin esensial ketika lingkungan permintaan mengandung komponen stokastik yang signifikan. Tanpa penanganan yang tepat, perusahaan manufaktur menghadapi risiko *inventory bloat* (penumpukan inventaris) saat permintaan turun atau *stockout* saat permintaan melonjak, yang keduanya menggerus margin laba.

Secara empiris, Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menunjukkan fenomena penting: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates."* Temuan ini mengungkap *gap* struktural antara riset akademik dan praktik industri. Industri cenderung menggunakan model deterministik sederhana (misalnya Wagner-Whitin atau lot-for-lot) yang kemudian dieksekusi dalam kerangka *rolling-horizon planning* (RHP) dengan pembaruan ramalan mingguan atau harian. Namun, pembaruan ramalan tersebut selama ini *diabaikan* dalam formulasi stokastik akademik, sehingga solusi yang dihasilkan menjadi suboptimal ketika diimplementasikan.

Urgensi operasional dari masalah ini dapat diukur dari dampak ekonominya. Studi Forel-Grunow menunjukkan bahwa model yang mengintegrasikan *martingale model of forecast evolution* (MMFE) dengan lot sizing stokastik mampu **mengurangi biaya aktual hingga signifikan** dibanding baseline deterministik, khususnya pada industri dengan demand volatility tinggi seperti FMCG, semikonduktor, dan farmasi. Dari sisi teknis, masalah lot sizing & scheduling dengan ketidakpastian permintaan termasuk kategori NP-hard karena kombinasi variabel biner (setup decisions) dengan skenario permintaan kontinu. Pendekatan hibrida yang menggabungkan *two-stage stochastic programming* (TSP) dengan *metaheuristic scheduling* atau *decomposition* menjadi jalur solusi yang semakin relevan, dan menjadi fokus utama Modul 2417 ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Lot Sizing Stokastik Dasar

Model lot sizing stokastik yang diajukan mengadaptasi kerangka *multi-item capacitated lot sizing problem* (MICLSP) dengan ketidakpastian permintaan. Formulasi dua-tahap (two-stage stochastic program) dinyatakan sebagai berikut. Misalkan $T$ adalah horizon perencanaan, $I$ himpunan item, $K$ himpunan periode, dan $\Omega$ himpunan skenario permintaan dengan probabilitas $p_\omega$.

Parameter:
- $c_i^t$ = biaya produksi per unit item $i$ pada periode $t$
- $h_i^t$ = biaya simpan per unit per periode
- $s_i^t$ = biaya setup (fixed cost) item $i$ pada periode $t$
- $d_{i,\omega}^t$ = permintaan item $i$ pada periode $t$ dalam skenario $\omega$
- $C^t$ = kapasitas produksi pada periode $t$
- $M$ = big-M (konstanta besar)

Variabel keputusan:
- $X_{i,\omega}^t$ = jumlah produksi item $i$ pada periode $t$ skenario $\omega$
- $Y_i^t$ = variabel biner setup (1 jika memproduksi item $i$ di periode $t$, 0 sebaliknya)
- $I_{i,\omega}^t$ = inventaris akhir item $i$ di periode $t$ skenario $\omega$
- $Q_{i,\omega}^t$ = ukuran lot aktual (recourse variable)

Formulasi Program Linear Integer Stokastik:

$$
\min \; Z = \sum_{t \in K} \sum_{i \in I} \left( s_i^t Y_i^t + \mathbb{E}_\omega [c_i^t X_{i,\omega}^t + h_i^t I_{i,\omega}^t] \right)
$$

dengan kendala:

$$
\sum_{i \in I} \sum_{\tau=1}^{t} a_{i,\tau} X_{i,\omega}^\tau \leq C^t, \quad \forall t, \forall \omega \tag{1}
$$

$$
I_{i,\omega}^t = I_{i,\omega}^{t-1} + X_{i,\omega}^t - d_{i,\omega}^t, \quad \forall i,t,\omega \tag{2}
$$

$$
X_{i,\omega}^t \leq M \cdot Y_i^t, \quad \forall i,t,\omega \tag{3}
$$

$$
Y_i^t \in \{0,1\}, \; X_{i,\omega}^t, I_{i,\omega}^t \geq 0 \tag{4}
$$

Persamaan (1) menjamin alokasi kapasitas; (2) menjamin keseimbangan aliran inventaris; (3) mengkaitkan keputusan setup dengan kuantitas produksi melalui *big-M relaxation*.

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan MMFE yang menyatakan bahwa ramalan permintaan pada periode $t$, dinotasikan $F^t$, merupakan martingale terhadap filtrasi informasi historis $\mathcal{F}^t$. Secara matematis:

$$
\mathbb{E}[d_{i}^{t+1} \mid \mathcal{F}^t] = F_i^t, \quad \forall t \in \{0, 1, \ldots, T-1\} \tag{5}
$$

dengan *forecast error* mengikuti model *multiplicative noise*:

$$
d_{i}^{t+1} = F_i^t \cdot \varepsilon_{i}^{t+1}, \quad \varepsilon_{i}^{t+1} \sim \mathcal{N}(\mu_\varepsilon, \sigma_\varepsilon^2) \tag{6}
$$

dimana $\varepsilon$ merupakan *innovation term* yang menangkap evolusi informasi baru. Formulasi ini memungkinkan perencana untuk meng-*anticipate* pembaruan ramalan dalam horizon RHP dan secara adaptif menyesuaikan lot size melalui *production recourse*.

### 2.3 Komponen Hybrid dan Fungsi Objektif Terintegrasi

Lead Researchers (2025) mengusulkan arsitektur hibrida yang mengintegrasikan:

**(a)** *Two-stage stochastic MILP* untuk lot sizing keputusan tingkat-taktis (first-stage), dan
**(b)** *Dispatching heuristic / Genetic Algorithm* untuk penjadwalan tingkat-operasional (second-stage recourse).

Fungsi objektif gabungan:

$$
\min \; \underbrace{\sum_{t} \sum_{i} (s_i Y_i^t + c_i X_i^t)}_{\text{first-stage (here-and-now)}} + \underbrace{\mathbb{E}_\omega \left[ \sum_{t} \sum_{i} (h_i I_{i,\omega}^t + \pi_i S_{i,\omega}^t) \right]}_{\text{second-stage (recourse)}} + \underbrace{\rho \cdot C_{\text{sched}}^{\omega}}_{\text{scheduling penalty}} \tag{7}
$$

dimana $S_{i,\omega}^t$ adalah shortage/penalty stockout, $\pi_i$ adalah *backorder cost*, dan $C_{\text{sched}}^{\omega}$ adalah makespan/ tardiness dari modul penjadwalan dengan bobot $\rho$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida ini di industri mengikuti prosedur operasional standar berlapis yang diadaptasi dari kerangka RHP Forel-Grunow dan arsitektur Lead Researchers:

**Tahap 1 — Inisialisasi dan Pengumpulan Data (T-14 hari).** Kumpulkan data historis permintaan 24–36 bulan, hitung parameter MMFE ($\mu_\varepsilon, \sigma_\varepsilon$), serta identifikasi kapasitas, biaya setup, dan *bill of materials*.

**Tahap 2 — Generasi Skenario.** Gunakan *moment matching* atau *Monte Carlo simulation* dengan 200–500 skenario permintaan, lalu reduksi skenario melalui *forward selection* (algoritma Heitsch-Kölmel) menjadi 20–30 skenario representatif untuk menjaga tractability.

**Tahap 3 — Optimasi Lot Sizing Stokastik (First-Stage).** Selesaikan formulasi TSP menggunakan solver commercial (Gurobi/CPLEX) atau open-source (HiGHS) dengan *Benders decomposition* jika horizon > 12 periode dan item > 50.

**Tahap 4 — Recourse & Rolling Horizon.** Setiap periode rolling (misal mingguan), update ramalan dengan MMFE, lalu selesaikan *subproblem recourse* yang menghasilkan lot aktual $Q_{i,\omega}^t$. Periode beku (*frozen period*) sepanjang $\tau_f$ menjaga stabilitas jadwal.

**Tahap 5 — Modul Scheduling Hybrid.** Masukkan lot hasil recourse ke dalam *short-term scheduling*: alokasikan ke mesin menggunakan *dispatching rules* (EDD, SPT, atau CR) yang di-optimasi via *genetic algorithm* dengan kromosom merepresentasikan urutan job di setiap mesin.

**Tahap 6 — Feedback dan Iterasi.** Pantau KPI: service level $\geq 95\%$, inventory carrying cost ratio $\leq 8\%$, setup cost reduction $\geq 12\%$.

Diagram alir logikanya dapat direpresentasikan sebagai:

```
[Data Historis] → [Estimasi MMFE] → [Generasi Skenario] 
        ↓
[Optimasi First-Stage TSP] → [Keputusan Setup Y_i^t]
        ↓
[Rolling Horizon Trigger] → [Update Ramalan MMFE]
        ↓
[Subproblem Recourse] → [Q_{i,ω}^t Aktual]
        ↓
[Modul Scheduling GA] → [Jadwal Eksekusi] → [Feedback KPI]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik FMCG dengan 3 item (A, B, C), horizon 6 periode, kapasitas 100 unit/periode, biaya setup 500, produksi 10/unit, simpan 2/unit/periode, backorder 15/unit.

**Tabel Permintaan Stokastik (skenario rata-rata):**

| Periode | Item A | Item B | Item C |
|---------|--------|--------|--------|
| 1 | 40 | 30 | 20 |
| 2 | 35 | 35 | 25 |
| 3 | 50 | 25 | 30 |
| 4 | 45 | 40 | 20 |
| 5 | 30 | 30 | 35 |
| 6 | 55 | 25 | 30 |

Misalkan setelah MMFE, permintaan aktual Item A pada periode 3 ternyata adalah $d_A^3 = 50 \cdot \varepsilon^3$ dengan $\varepsilon^3 = 1.18$ (skenario kenaikan 18%), sehingga $d_A^3 = 59$.

**Perhitungan First-Stage:** Solver menghasilkan keputusan setup $Y_A^1 = Y_A^3 = 1$, lot $X_A^1 = 75, X_A^3 = 90$. Total biaya first-stage:

$$
C_1 = 2(500) + (10)(75 + 90) = 1000 + 1650 = 2650
$$

**Perhitungan Second-Stage (recourse):** Pada periode 3, shortfall Item A = $90 - 59 = 31$ unit, dipenuhi dari inventory carry-over atau backorder. Asumsikan dipenuhi dari produksi periode 1 carry-over (31 unit masih tersedia). Inventory akhir periode 3:

$$
I_A^3 = (75 - 40 - 35) + (90 - 59) = 0 + 31 = 31 \text{ unit}
$$

Biaya simpan periode 3 = $31 \times 2 = 62$. Expected recourse cost across skenario (3 skenario equally likely dengan deviasi ±10%, ±20%):

$$
\mathbb{E}[C_2] = 62 \cdot (0.33 + 0.34 + 0.33 \times \text{adjusted}) \approx 68
$$

**Total biaya期望 (expected):**

$$
\mathbb{E}[