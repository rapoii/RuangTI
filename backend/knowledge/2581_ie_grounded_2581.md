# 2581 — Strategi Rantai Pasok Closed-Loop untuk Pemanfaatan Bertingkat dan Daur Ulang Manufaktur Baterai Bekas Pembangkit Listrik: Formulasi Game Theory, Optimisasi Robust, dan Arsitektur Sistem Sirkular Ekonomi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-loop Supply Chain (CLSC) untuk Baterai Lithium-ion Pensiun (Retired EV/Power Battery) dengan Integrasi Echelon Utilization dan Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi energi global yang masif menuju elektrifikasi kendaraan bermotor (EV) dan sistem penyimpanan energi stasioner (BESS) telah menciptakan tantangan rekayasa industri yang belum pernah terjadi sebelumnya dalam pengelolaan *end-of-life* (EoL) baterai lithium-ion. Permintaan global baterai lithium-ion diproyeksikan melebihi 4.700 GWh per tahun pada 2030 (Li et al., 2024), yang secara simultan menghasilkan volume baterai pensiun (state-of-health/SoH < 80%) dalam orde jutaan unit. Tanpa strategi rantai pasok closed-loop (CLSC) yang matang, baterai pensiun tersebut menjadi limbah B3 (bahan berbahaya dan beracun) yang menimbulkan risiko lingkungan dan ekonomi sirkular yang signifikan. JIANG Lin dan TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) secara eksplisit menyoroti urgensi pengembangan strategi CLSC yang mempertimbangkan dua moda pemulihan secara bersamaan, yaitu *echelon utilization* (pemanfaatan bertingkat pada aplikasi second-life seperti penyimpanan energi gardu induk atau microgrid) dan *recycling remanufacturing* (daur ulang material katoda/anoda melalui proses hidrometalurgi). Kedua strategi ini memiliki karakteristik biaya, lead-time, dan profitabilitas yang berbeda sehingga keputusan alokasi volume baterai pensiun menjadi keputusan multi-kriteria yang kompleks.

Permasalahan sentral yang diangkat adalah *coordination failure* antara pelaku rantai pasok, yaitu OEM baterai (*original equipment manufacturer*), *third-party collector*, fasilitas *echelon repurposing*, dan *recycling remanufacturer*. Tanpa mekanisme insentif dan koordinasi yang tepat, masing-masing pelaku cenderung mengoptimalkan keputusan lokalnya sehingga menghasilkan *suboptimal Nash equilibrium* yang merugikan keseluruhan sistem. Sebagai contoh, OEM memiliki insentif untuk mempertahankan baterai pensiun guna aplikasi second-life bernilai tinggi, sementara *recycler* memiliki insentif untuk melakukan *closed-loop material recovery* guna memenuhi regulasi Extended Producer Responsibility (EPR). Konflik kepentingan ini hanya dapat diselesaikan melalui formulasi game theory dan mekanisme *transfer payment* yang dirancang secara presisi.

Konteks ekonomi sirkular mensyaratkan integrasi tiga pilar: desain untuk daur ulang (Design for Recycling/DfR), logistik balik (*reverse logistics*) yang efisien, dan pasar sekunder untuk produk remanufaktur. Shin, Kim, dan Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi analisis ini dengan memperkenalkan *Robust Closed-Loop Supply Chain Model* yang secara eksplisit mengelola ketidakpastian (*uncertainty*) dari laju pengembalian baterai, kapasitas回收, dan permintaan pasar sekunder. Mereka menunjukkan bahwa tanpa formulasi robust optimization, keputusan optimal menjadi *fragile* terhadap realisasi parameter stokastik di lapangan, yang dalam praktik industri memicu *stockout* pada fasilitas remanufaktur atau *over-stock* pada gudang koleksi. Kombinasi kedua literatur ini memberikan landasan komprehensif untuk membangun arsitektur CLSC baterai pensiun yang adaptif, koordinatif, dan resilien terhadap dinamika pasar baterai EV global.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Pemain dan Struktur Keputusan Stackelberg

Model JIANG & TANG (2025) merumuskan CLSC baterai pensiun sebagai permainan diferensial Stackelberg tiga tingkat (*three-level Stackelberg differential game*) dengan hierarki keputusan sebagai berikut:

1. **Level 1 — OEM baterai (*leader*)**: menentukan harga jual baterai baru ($p_n$), insentif pengembalian ($r$), dan alokasi baterai pensiun antara *echelon* ($q_e$) dan *recycling* ($q_r$).
2. **Level 2 — Collector (*follower 1*)**: menentukan kapasitas koleksi $K_c$ dan biaya transfer ke OEM.
3. **Level 3 — Recycler (*follower 2*)**: menentukan kapasitas daur ulang $K_r$ dan harga jual material daur ulang ($p_m$).

Fungsi laba masing-masing pemain dalam horizon kontinu $t \in [0, T]$ adalah:

$$\pi_{OEM}(t) = \left(p_n(t) - c_n\right) D_n(t) + r(t) \cdot q_c(t) - c_e q_e(t) - c_r q_r(t)$$

$$\pi_{C}(t) = \left(r(t) - c_{col}\right) q_c(t) - \frac{\eta_c}{2} K_c^2$$

$$\pi_{R}(t) = \left(p_m(t) - c_m\right) q_r(t) - c_{rem} \cdot \lambda(q_r) - \frac{\eta_r}{2} K_r^2$$

dengan $c_n, c_{col}, c_m$ adalah biaya produksi/koleksi/material per unit; $\lambda(q_r)$ adalah *learning curve function* yang merepresentasikan penurunan biaya remanufaktur seiring skala; dan $\eta_c, \eta_r$ adalah koefisien biaya kapasitas kuadratik.

### 2.2 Formulasi Optimisasi Robust (Shin, Kim, Jeong, 2024)

Untuk mengelola ketidakpastian permintaan pasar sekunder dan laju pengembalian, Shin dkk. (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menggunakan formulasi *robust counterpart* dengan *box uncertainty set*:

$$\tilde{D}_s(t) \in \mathcal{U}_D = \left\{ D_s : D_s(t) = \bar{D}_s(t) + \hat{D}_s \cdot \zeta_s(t), \; |\zeta_s(t)| \leq 1 \right\}$$

di mana $\bar{D}_s(t)$ adalah permintaan nominal pasar second-life, $\hat{D}_s$ adalah deviasi maksimum, dan $\zeta_s(t)$ adalah variabel acak dalam [-1,1]. Model robust-nya:

$$\max_{q_e, q_r, K_c, K_r} \min_{\zeta_s, \zeta_r \in \mathcal{U}} \Pi_{total}(q_e, q_r, K_c, K_r, \zeta_s, \zeta_r)$$

dengan kendala kapasitas:

$$q_e(t) + q_r(t) \leq q_c(t) \leq K_c$$
$$0 \leq q_r(t) \leq K_r$$
$$q_e(t), q_r(t) \geq 0$$

*Robust counterpart* liniernya (dengan引入 variabel dual $\mu, \nu \geq 0$):

$$\max \Pi_{nom} - \mu \cdot \hat{D}_s - \nu \cdot \hat{R}_c$$
$$\text{st} \; q_e + q_r \leq \bar{q}_c + \hat{q}_c, \; q_r \leq K_r$$

### 2.3 Fungsi Utilitas Negara Dinamis (Differential Game)

JIANG & TANG (2025) memodelkan state dinamis $X(t) = [X_e(t), X_r(t)]^T$ yang merepresentasikan akumulasi baterai pensiun pada kedua moda pemulihan:

$$\frac{dX_e(t)}{dt} = \alpha_e q_e(t) - \beta_e X_e(t) - \delta_e X_e(t)$$

$$\frac{dX_r(t)}{dt} = \alpha_r q_r(t) - \beta_r X_r(t) - \delta_r X_r(t)$$

dengan $\alpha_i$ koefisien konversi (yield), $\beta_i$ laju utilisasi, dan $\delta_i$ tingkat depresiasi teknis. Fungsi nilai Hamiltonian optimal:

$$H = e^{-\rho t}\left[\pi_{OEM} + \pi_C + \pi_R\right] + \lambda_e(t)\dot{X}_e + \lambda_r(t)\dot{X}_r$$

dengan $\rho$ sebagai *discount rate* dan $\lambda_e(t), \lambda_r(t)$ sebagai *costate variables* yang memenuhi:

$$\dot{\lambda}_i(t) = (\rho + \beta_i + \delta_i)\lambda_i(t) - \frac{\partial \pi}{\partial X_i}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai pensiun memerlukan kerangka SOP yang mengikuti standar IEC 62933-2-1 (Electrical Energy Storage Systems) dan ISO 14001 (Environmental Management). Berikut adalah prosedur operasional baku berbasis temuan JIANG & TANG (2025) yang diadaptasi dengan *robust planning layer* dari Shin dkk. (2024):

### SOP-CLSC-01: Alur Proses Closed-Loop Baterai Pensiun

```
[Tahap 1] Identifikasi baterai pensiun (SoH < 80%)
    ↓
[Tahap 2] Sortasi di Collection Center (Grade A: 70-80%, Grade B: 50-70%, Grade C: <50%)
    ↓
[Tahap 3A] Grade A → Echelon Center → Re-diagnosis → Second-life BESS
    ↓
[Tahap 3B] Grade B/C → Recycler → Hidrometalurgi → Material recovery (Li, Co, Ni)
    ↓
[Tahap 4] Material daur ulang → OEM (closed-loop material supply)
```

### SOP-CLSC-02: Prosedur Optimisasi Kapasitas (Algoritma Penyelesaian)

**Langkah 1 — Formulasi parameter industri**: estimasi $\bar{D}_s, \hat{D}_s, \bar{q}_c, \hat{q}_c, c_e, c_r, c_{col}$ berdasarkan data historis 24 bulan.

**Langkah 2 — Penyelesaian model nominal**: gunakan *interior-point method* atau *sequential quadratic programming* (SQP) pada persamaan (2.1)-(2.3).

**Langkah 3 — Robust adjustment**: kalibrasi $\mu, \nu$ untuk memastikan *worst-case protection level* $\Gamma \in [0, |\mathcal{U}|]$ sesuai *budget of uncertainty* (misal $\Gamma = 4$ dari 12 periode).

**Langkah 4 — Verifikasi backward induction**: validasi keseimbangan Stackelberg melalui simulasi Monte Carlo 10.000 iterasi.

**Langkah 5 — Implementasi capacity reservation**: kunci kontrak kapasitas $K_c^*, K_r^*$ dengan *take-or-pay clause* untuk menjamin ketersediaan.

### SOP-CLSC-03: Arsitektur Sistem Informasi CLSC

Sistem IT yang diperlukan mengintegrasikan: (a) **Battery Passport** berbasis blockchain sesuai EU Battery Regulation 2023/1542, (b) **IoT telematics** untuk monitoring SoH real-time, (c) **Advanced Planning System (APS)** dengan modul robust optimization, dan (d) **ERP integration** (SAP S/4HANA) untuk visibilitas end-to-end.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Industri Hipotetis (Berdasarkan Karakteristik Pasar Baterai EV Indonesia/Cina)

| Parameter | Nilai | Satuan | Sumber |
|-----------|-------|--------|--------|
| Permintaan baterai baru $\bar{D}_n$ | 5.000 | unit/tahun | Asumsi OEM |
| Harga jual baterai baru $p_n$ | 12.000 | USD/unit | Market 2024 |
| Biaya produksi $c_n$ | 8.500 | USD/unit | OEM disclosure |
| Insentif pengembalian $r$ | 800 | USD/unit | Studi JIANG & TANG |
| Permintaan pasar second-life $\bar{D}_s$ | 1.800 | unit/tahun | BESS market |
| Deviasi permintaan $\hat{D}_s$ | 360 | unit/tahun | 20% variasi |
| Biaya echelon $c_e$ |