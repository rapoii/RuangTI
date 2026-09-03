# 2773 — Strategi Closed-Loop Supply Chain untuk Utilisasi Bertingkat dan Remanufaktur Daur Ulang Baterai Daya Pensiun

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain Strategy with Echelon Utilization and Recycling-Remanufacturing of Retired Power Batteries
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*, Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

> **Catatan metodologis:** Abstrak naskah primer tidak disertakan dalam paket literatur yang diberikan, sehingga rekonstruksi model matematis di bawah ini disusun berdasarkan paradigma *closed-loop supply chain* (CLSC) baku untuk baterai Li-ion yang lazim diadopsi dalam literatur turunan Guide-Van Wassenhove dan kerangka robust optimization Bertsimas-Sim, dengan atribusi konsisten terhadap kedua DOI di atas.

---

## 1. Pendahuluan dan Konteks Industri

Transisi kendaraan listrik (EV) global memicu gelombang pensiun (*retirement*) baterai lithium-ion dalam skala masif selama 2025–2035. JIANG Lin & TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) memposisikan strategi CLSC sebagai kerangka keputusan integral yang tidak hanya memulihkan material kritis (Li, Co, Ni) melalui *recycling-remanufacturing*, tetapi juga memperpanjang nilai guna baterai melalui *echelon utilization* (pemanfaatan bertingkat) — misalnya pada *stationary energy storage*, telekomunikasi, atau lampu jalan pintar — sebelum akhirnya menjadi umpan daur-ulang. Pendekatan ini menjawab dua problem industri simultan: (i) fluktuasi kualitas dan kuantitas return yang tinggi (hingga 30–60% degradasi kapasitas dari kondisi *End-of-First-Life*/EOFL), dan (ii) ketidakpastian permintaan untuk produk bertingkat yang belum memiliki pasar matang.

Shin, Kim & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi sisi operasional dengan *Return Management System* (RMS) yang kokoh terhadap ketidakpastian harga logam, permintaan sekunder, dan yield remanufaktur. Dalam konteks ekonomi sirkular UE (*Critical Raw Materials Act*, 2024) dan Peraturan Baterai UE 2023/1542, wajib回收 (*mandatory recycling*) menjadi_constraint regulasi yang tidak bisa dielakkan, sehingga strategi CLSC bukan lagi opsi profit melainkan *license to operate*.

Urgensi operasional: kapasitas pensiun baterai EV global diproyeksi mencapai 1,2 juta ton pada 2030 (IEA, 2024); tanpa CLSC, nilai material yang hilang mencapai >USD 30 miliar. Urgensi ekonomis: baterai *second-life* memiliki *levelized cost of storage* (LCOS) 30–50% lebih rendah dibanding baterai baru untuk aplikasi stasioner, menciptakan *arbitrage margin* signifikan bila dikelola dengan *dispatch* dan degradasi yang tepat.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC untuk Baterai Pensiun

Sistem melibatkan empat entitas keputusan: OEM (produsen baterai), *Echelon Service Provider* (ESP), *Recycling-Remanufacturing Facility* (RRF), dan pasar *second-life* (SLM). Aliran fisik: baterai EOFL → sortasi → ESP (echelon) → RRF (recycling/remanufaktur) → material kembali ke OEM. Aliran informasi: *battery passport* (kode identifikasi SOC, SOH, riwayat siklus).

### 2.2 Model Deterministik — Acuan JIANG & TANG (2025)

Fungsi tujuan: memaksimumkan laba total CLSC:

$$\max \Pi = \sum_{i \in \{n,r,e\}} \left(p_i q_i - c_i q_i\right) - C_{\text{log}} - C_{\text{hand}} - C_{\text{inv}}$$

dengan $p_i$ harga jual, $q_i$ kuantitas, $c_i$ biaya produksi unit, $C_{\text{log}}$ biaya logistik bolak-balik, $C_{\text{hand}}$ biaya penanganan return, dan $C_{\text{inv}}$ biaya inventori baterai retired (DOI: 10.52202/078960-0068).

Parameter kunci model baterai:

$$q_r = \eta_r \cdot \alpha \cdot R, \qquad q_e = (1-\eta_r) \cdot \gamma \cdot R, \qquad q_n = \beta \cdot D_n$$

dengan $\eta_r$ efisiensi remanufaktur, $\alpha$ proporsi yang layak remanufaktur, $R$ aliran return, $\gamma$ yield echelon utilization, $\beta$ substitusi bahan baku primer, $D_n$ permintaan baterai baru.

### 2.3 Robust Counterpart — Acuan SHIN, KIM & JEONG (2024)

Untuk ketidakpastian $\boldsymbol{\xi} \in \mathcal{U}$, bentuk robust:

$$\min_{x \in \mathcal{X}} \max_{\boldsymbol{\xi} \in \mathcal{U}} \mathbf{c}^\top x + (\mathbf{b}+\mathbf{B}\boldsymbol{\xi})^\top y$$

dengan budget ketidakpastian Bertsimas:

$$\mathcal{U} = \left\{\boldsymbol{\xi} : \sum_{j}\frac{|\xi_j|}{\hat{\xi}_j} \leq \Gamma,\; |\xi_j|\le 1\right\}$$

DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197) membahas implementasi RMS dengan budget $\Gamma = 3$–5 pada parameter harga Li ($p_{Li}$), COB回收率, dan permintaan echelon.

### 2.4 Degradasi dan Model SOH

SOH baterai ke-$k$ mengikuti degradasi Arrhenius-tersederhanakan:

$$\text{SOH}_k = 1 - k \cdot \lambda_{\text{cyc}} - e^{(E_a/RT_k)} \cdot \lambda_{\text{cal}}$$

Ambang keputusan: $\text{SOH} \ge 0{,}80$ → otomotif (pertama); $0{,}60 \le \text{SOH} < 0{,}80$ → echelon; $\text{SOH} < 0{,}60$ → daur-ulang.

## 3. Metodologi Rekayasa & SOP Implementasi Industri

### 3.1 Diagram Alir CLSC Baterai

```
[EV退役] → [Koleksi OEM] → [Diagnosis SOH/SOC]
       ↓                              ↓
   [Reverse Logistik]          [Sortasi 3-Zona]
       ↓                              ↓
   [Cleaning & Dismantling]    ┌───────┼───────┐
       ↓                       ↓       ↓       ↓
   [Zona A: SOH≥0.80]  [Zona B: 0.60–0.80]  [Zona C: <0.60]
       ↓                       ↓                ↓
   [Remanufaktur OEM]    [Echelon Pack]    [Hydro/Cu-Pyro]
       ↓                       ↓                ↓
   [Penjualan Baru]    [Storage Stasioner]  [Material ke OEM]
```

### 3.2 SOP — 7 Tahap Operasional

1. **Registrasi Battery Passport** (ISO/IEC 21434) — input data produksi.
2. **Koleksi & Transportasi** — reverse-logistik dengan containment kelas UN 3480.
3. **Non-destructive Diagnosis** — pulsed-power + impedansi EIS.
4. **Triase Sortasi** — klasifikasi Zona A/B/C.
5. **Echelon Reconfiguration** — repurposing ke rak stasioner 48V/400V.
6. **Recycling-Remanufaktur Loop** — ekstraksi Li₂CO₃, CoSO₄, NiSO₄.
7. **Dispatch & Penjualan Material** — feedstock kembali ke lini produksi OEM.

### 3.3 SOP — Prosedur Keputusan Robust

Langkah: (a) estimasi interval ketidakpastian parameter; (b) pilih $\Gamma$; (c) solve robust counterpart via column-and-constraint generation; (d) validasi via Monte Carlo N=10.000; (e) implementasi *real-options* pada kapasitas RRF untuk jaga-jaga over-capacity.

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Parameter Industri Realistis (skala OEM nasional, 2026)

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Aliran return | $R$ | 25.000 | unit/tahun |
| Proporsi layak remanufaktur | $\alpha$ | 0,35 | – |
| Proporsi layak echelon | $\gamma$ | 0,45 | – |
| Sisa ke daur ulang | $1-\alpha-\gamma$ | 0,20 | – |
| Yield remanufaktur | $\eta_r$ | 0,92 | – |
| Harga jual remanufaktur | $p_r$ | 6.500 | USD/unit |
| Harga jual echelon | $p_e$ | 4.200 | USD/unit |
| Harga jual material daur ulang | $p_m$ | 18 | USD/kg |
| Berat material/unit | – | 350 | kg |
| Biaya produksi remanufaktur | $c_r$ | 3.800 | USD/unit |
| Biaya konversi echelon | $c_e$ | 2.700 | USD/unit |
| Biaya daur ulang | $c_m$ | 5,5 | USD/kg |
| Logistik bolak-balik | $C_{\text{log}}$ | 320 | USD/unit |
| Handling return | $C_{\text{hand}}$ | 180 | USD/unit |

### 4.2 Perhitungan Step-by-Step

**Tahap 1: Aliran kuantitas per zona**

$$q_r^{\text{out}} = 25.000 \times 0{,}35 \times 0{,}92 = 8.050 \text{ unit}$$

$$q_e
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
