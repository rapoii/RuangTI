# 1493 — Strategi Rantai Pasok Closed-Loop untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (Electric Vehicle/EV) global—yang mencapai lebih dari 14 juta unit terjual sepanjang 2023 menurut laporan IEA—menghadirkan tantangan struktural baru pada sistem logistik dan manufaktur: bagaimana mengelola end-of-life (EOL) baterai lithium-ion secara ekonomis, lingkungan, dan secara rantai pasok yang koheren. Baterai power lithium-ion dengan kapasitas awal 60–100 kWh memiliki umur pakai first-life pada aplikasi otomotif selama 8–10 tahun sebelum State of Health (SOH) turun ke ambang batas 70–80%. Pada titik退役 (retired), baterai tidak lagi layak untuk aplikasi otomotif namun masih menyimpan 60–80% kapasitas aslinya, sehingga terbuka peluang **pemanfaatan bertingkat (echelon utilization)** untuk aplikasi stasioner berdaya lebih rendah seperti储能 (energy storage systems/ESS), catu daya telekomunikasi, atau pencahayaan darurat.

JIANG & TANG (2025) dalam paper yang dipublikasikan di *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* dengan DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068) menyoroti bahwa keputusan untuk mengalokasikan baterai retired ke echelon utilization versus langsung ke recycling-remanufacturing memiliki konsekuensi profitabilitas dan keberlanjutan yang sangat berbeda. Studi ini membangun model closed-loop supply chain (CLSC) yang secara simultan mengoptimasi tiga aliran material: (i) aliran maju dari manufaktur OEM ke konsumen, (ii) aliran balik pengumpulan baterai retired, dan (iii) aliran redistribusi ke pasar sekunder dan daur ulang material. Urgensi penelitian ini diperkuat oleh regulasi wajib Extended Producer Responsibility (EPR) di Uni Eropa, China, dan Korea Selatan, yang memaksa OEM untuk menjamin回收 tingkat回收率 (recovery rate) minimal 70% pada 2030.

Komplementer dengan hal tersebut, Shin, Kim, & Jeong (2024) pada DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) menyumbangkan perspektif penting tentang **robust CLSC** dengan return management system untuk ekonomi sirkular. Mereka menunjukkan bahwa ketidakpastian permintaan pasar sekunder, fluktuasi harga bahan baku kritis (litium, kobalt, nikel), dan kualitas baterai退役 yang stokastik dapat menggoyahkan keputusan optimal yang dihasilkan model deterministik. Pendekatan robust optimization dengan box uncertainty set dan budget of uncertainty terbukti secara signifikan mengurangi expected regret keputusan rantai pasok di bawah skenario worst-case. Sinergi kedua paper ini memberikan fondasi analitis yang kuat untuk desain strategi CLSC baterai power yang resilient.

Dari sisi ekonomi, pasar global baterai bekas diproyeksikan mencapai USD 38,2 miliar pada 2030 (compound annual growth rate/CAGR > 22%), sementara nilai material kritis yang dapat direcovery dari satu baterai EV 60 kWh mencapai USD 1.200–1.800 pada harga 2024. Dari sisi lingkungan, satu baterai yang berhasil di-remanufacture dapat menghindari emisi 80–120 kg CO₂eq dibanding produksi baterai baru, dan pemanfaatan bertingkat ESS baterai退役延长 (memperpanjang) siklus hidup total menjadi 15–20 tahun. Konteks ini menegaskan bahwa strategi CLSC baterai bukan sekadar masalah disposal, melainkan keputusan rekayasa sistem industri bernilai tambah tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Tiga-Eselon

JIANG & TANG (2025) memodelkan jaringan CLSC sebagai sistem empat-entitas dengan tiga jenis aliran: OEM (manufaktur baterai baru), Collection Center (CC), Echelon Utilization Hub (EUH), dan Recycling-Remanufacturing Plant (RRP). Konsumen EV merupakan node demand first-life, sedangkan pasar ESS dan pasar material daur ulang merupakan node demand sekunder. Konsumen废旧 mengirimkan baterai retired melalui CC, lalu EUH dan RRP bersaing untuk mendapatkan alokasi baterai retired berdasarkan kualitas (State of Health, $SOH$) dan harga beli ($w$).

### 2.2 Formulasi Objective Function

Model matematis CLSC maximizar total profit sistem (Total System Profit, TSP) yang mencakup pendapatan penjualan first-life, pendapatan echelon utilization, pendapatan daur ulang material, dan pengurangan biaya disposal, dikurangi biaya operasional seluruh entitas:

$$
\max \; \Pi = \sum_{i \in \mathcal{I}} p_i^{new} q_i^{new} + \sum_{j \in \mathcal{J}} p_j^{EU} q_j^{EU} + \sum_{k \in \mathcal{K}} p_k^{RM} q_k^{RM} - \sum_{m \in \mathcal{M}} C_m^{op}
$$

di mana $\mathcal{I}$, $\mathcal{J}$, $\mathcal{K}$, $\mathcal{M}$ masing-masing adalah himpunan lini produksi baterai baru, aplikasi echelon, lini remanufacturing, dan seluruh node CLSC. $p_i^{new}$, $p_j^{EV}$ (salah ketik; maksud EU), $p_k^{RM}$ adalah harga jual per unit di masing-masing pasar, sedangkan $q_i^{new}$, $q_j^{EU}$, $q_k^{RM}$ adalah kuantitas aliran. $C_m^{op}$ adalah biaya operasional node $m$.

### 2.3 Model Kualitas dan Diskriminasi SOH

Baterai退役 diklasifikasikan ke dalam $L$ tingkat kualitas diskrit berdasarkan SOH dengan threshold $\theta_l$, $l = 1, 2, \ldots, L$. Probabilitas baterai退役 memiliki SOH pada tingkat $l$ adalah $\rho_l$, sehingga $\sum_{l=1}^{L} \rho_l = 1$. Baterai dengan SOH tingkat atas (high-grade, $l \leq l_0$) dialokasikan ke echelon utilization, sedangkan baterai low-grade ($l > l_0$) langsung dikirim ke recycling:

$$
q_j^{EU} = \sum_{l=1}^{l_0} \rho_l \cdot R^{total}, \quad q_k^{RM} = \sum_{l=l_0+1}^{L} \rho_l \cdot R^{total}
$$

di mana $R^{total}$ adalah total baterai退役 yang berhasil dikumpulkan.

### 2.4 Formulasi Robust Optimization

Shin et al. (2024) memperkenalkan formulasi robust dengan box uncertainty set $\mathcal{U}$ untuk menangani fluktuasi harga pasar sekunder $p_j^{EU}$ dan tingkat pengembalian $r$ (return rate):

$$
\mathcal{U} = \left\{ \tilde{p}_j^{EU}, \tilde{r} : \tilde{p}_j^{EU} \in [p_j^{EU}(1-\delta_p), p_j^{EU}(1+\delta_p)], \; \tilde{r} \in [r(1-\delta_r), r(1+\delta_r)] \right\}
$$

dengan $\delta_p, \delta_r \in [0,1]$ adalah deviasi parameter relatif. Problem robust kemudian diselesaikan dengan formulasi worst-case:

$$
\max_{\mathbf{q} \in \mathcal{Q}} \min_{\tilde{\mathbf{u}} \in \mathcal{U}} \; \Pi(\mathbf{q}, \tilde{\mathbf{u}})
$$

di mana $\mathbf{q}$ adalah vektor keputusan (kuantitas), $\tilde{\mathbf{u}}$ adalah parameter tidak pasti, dan $\mathcal{Q}$ adalah feasible region kendala deterministik.

### 2.5 Kendala Keseimbangan Aliran (Flow Balance)

Setiap node CLSC harus memenuhi keseimbangan inflow-outflow:

$$
q_m^{in} = q_m^{out} + q_m^{inv}, \quad \forall m \in \mathcal{M}
$$

dengan kendala kapasitas:

$$
0 \leq q_m^{out} \leq Q_m^{cap}, \quad \forall m \in \mathcal{M}
$$

dan kendala non-negativitas keputusan:

$$
q_i^{new}, q_j^{EU}, q_k^{RM} \geq 0
$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi strategi CLSC baterai退役 mengikuti kerangka SOP tujuh-tahap yang diturunkan dari temuan JIANG & TANG (2025) dan diperkuat dengan protokol robust management Shin et al. (2024):

**Tahap 1 — Akuisisi & Pengumpulan Baterai退役.** OEM atau third-party logistics (3PL) membangun jaringan collection center dalam radius 50–150 km dari konsentrasi pengguna EV. Battery passport digital (mengacu pada EU Battery Regulation 2023/1542) mencatat riwayat operasional, siklus pengisian, dan profil termal setiap unit, menjadi prasyarat untuk triase mutu.

**Tahap 2 — Diagnostik & Klasifikasi SOH.** Setiap baterai退役 menjalani pengujian kapasitas (capacity test), internal resistance measurement, dan electrochemical impedance spectroscopy (EIS) untuk menentukan SOH aktual. Klasifikasi mengikuti grid $L = 4$ tingkat: Grade A (SOH ≥ 85%, layak aplikasi ESS demanding), Grade B (70–85%, ESS stand-by/telekomunikasi), Grade C (55–70%, daur ulang langsung ke material recovery), dan Grade D (< 55%, disposal aman).

**Tahap 3 — Triase Rute Alokasi.** Algoritma optimasi Mixed Integer Linear Programming (MILP) dijalankan mingguan untuk menentukan alokasi optimal baterai Grade A/B ke EUH dan Grade C ke RRP. Solusi memperhitungkan harga pasar sekunder real-time dan kapasitas EUH/RRP.

**Tahap 4 — Proses Echelon Utilization di EUH.** Baterai menjalani refurbishment ringan (rebalancing sel, penggantian BMS, uji kapasitas ulang), lalu dirakit menjadi modul ESS standar 50–500 kWh. Modul ini dijual ke operator ESS grid-scale atau microgrid industri.

**Tahap 5 — Proses Recycling-Remanufacturing di RRP.** Baterai Grade C menjalani discharging aman, dismantling mekanis, dan proses hidrometalurgi atau pirometalurgi untuk回收 litium, kobalt, dan nikel. Material hasil recovery menjadi feedstock untuk lini baterai baru, menutup loop material.

**Tahap 6 — Robust Monitoring & Re-optimization.** Sesuai Shin et al. (2024), parameter pasar sekunder dimonitor harian melalui dashboard big data; jika deviasi melebihi ambang $\delta_p = 15\%$ atau $\delta_r = 10\%$, model robust di-re-run untuk re-generate keputusan alokasi baru.

**Tahap 7 — Pelaporan Regulator & Life Cycle Assessment (LCA).** Output seluruh tahap dicatat dalam battery passport dan dilaporkan ke regulator sesuaiDirective EPR; agregat metrik recovery rate, CO₂eq avoided, dan profitabilitas CLSC dilaporkan setiap kuartal.

Diagram alir proses secara skematis dapat dinyatakan sebagai:

$$
\text{EV退役} \xrightarrow{\text{Collection}} \text{CC} \xrightarrow{\text{SOH Test}} 
\begin{cases} 
\xrightarrow{\text{Grade A/B}} \text{EUH} \rightarrow \text{ESS Market} \\
\xrightarrow{\text{Grade C}} \text{RRP} \rightarrow \text{Material Recovery} \rightarrow \text{OEM Feedstock}
\end{cases}
$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Industri Hipotetis-Realistis

Berdasarkan kalibrasi JIANG & TANG (2025) untuk konteks pasar baterai China 2024 dan disesuaikan dengan referensi Shin et al. (2024) untuk ketidakpastian harga ESS, ditetapkan parameter kasus berikut:

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Total baterai退役 dikumpulkan | $R^{total}$ | 10.000 | unit/tahun |
| Harga jual baterai baru | $p^{new}$ | 12.000 | USD/unit |
| Harga jual ESS modul Grade A | $p_A^{EU}$ | 4.800 | USD/unit |
| Harga jual ESS modul Grade B | $p_B^{EU}$ | 3.200 | USD/unit |
| Harga jual material daur ulang | $p^{RM}$ | 1.500 | USD/unit |
| Biaya operasional OEM | $C_{OEM}$ | 5.000.000 | USD/tahun |
| Biaya operasional CC | $C_{CC}$ | 800.000 | USD/tahun |
| Biaya operasional EUH | $C_{EUH}$ | 1.500.000 | USD/tahun |
| Biaya operasional RRP | $C_{RRP}$ | 2.000.000 | USD/tahun |
| Probabilitas Grade A | $\rho_A$ | 0,25 | - |
| Probabilitas Grade B | $\rho_B$ | 0,40