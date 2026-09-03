# 2165 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Closed-Loop Supply Chain dengan Pertimbangan Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik (*Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*)
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju elektrifikasi kendaraan (*electric vehicles* / EV) memicu permintaan masif terhadap baterai ion litium (*lithium-ion battery* / LIB) sebagai komponen penyimpan energi utama. Namun, setiap baterai EV memiliki siklus hidup terbatas—umumnya 8 hingga 10 tahun atau sekitar 1.500–2.500 siklus pengisian sebelum kapasitasnya turun di bawah ambang 70–80% dari kapasitas awal (*State of Health* / SOH < 0,7). Berdasarkan proyeksi International Energy Agency (IEA), lebih dari 2 juta ton baterai EV bekas akan dihasilkan secara global per akhir dekade ini, menjadikan pengelolaan *end-of-life* (EoL) baterai sebagai tantangan operasional, lingkungan, dan strategis yang mendesak (JIANG & TANG, 2025).

Dalam konteks ini, paradigma *closed-loop supply chain* (CLSC) muncul sebagai kerangka integratif yang menghubungkan aliran maju (*forward flow*) baterai baru dari manufaktur ke konsumen dengan aliran balik (*reverse flow*) baterai bekas untuk diproses melalui pemanfaatan bertingkat (*echelon utilization*) atau daur ulang material. Pemanfaatan bertingkat merujuk pada aplikasi baterai bekas yang kapasitasnya sudah tidak memenuhi standar otomotif namun masih layak untuk aplikasi stasioner berskala lebih rendah (misalnya *storage* energi terbarukan, *backup power*, atau *microgrid*); sementara remanufaktur berfokus pada pemulihan dan daur ulang material aktif seperti litium, kobalt, nikel, dan mangan. JIANG & TANG (2025) menekankan bahwa keputusan manajerial antara dua jalur ini sangat bergantung pada SOH residual, biaya logistik retrograde, harga material daur ulang, serta insentif regulasi, sehingga diperlukan model optimisasi multi-tujuan yang robust.

Urgensi industri diperkuat oleh fakta bahwa rantai pasok litium dan kobalt sangat terkonsentrasi secara geografis (>60% produksi kobalt berasal dari Republik Demokratik Kongo), sehingga memperpendek siklus material melalui CLSC bukan sekadar isu keberlanjutan (*green logistics*) melainkan juga strategi mitigasi *supply chain risk*. Pendekatan robust CLSC yang juga dikemukakan oleh Shin, Kim, & Jeong (2024) menambahkan lapisan ketidakpastian (*uncertainty*) berupa permintaan return yang fluktuatif, kapasitas fasilitas daur ulang yang terbatas, dan fluktuasi harga material sekunder. Kedua paper ini memberikan landasan konseptual dan matematis bagi perancang sistem industri untuk membangun ekosistem baterai sirkular yang layak secara teknis dan ekonomis.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC baterai bekas pada dasarnya merupakan permasalahan *mixed-integer linear programming* (MILP) atau *mixed-integer nonlinear programming* (MINLP) dengan struktur jaringan multi-echelon. JIANG & TANG (2025) merumuskan fungsi tujuan sebagai maksimisasi profit total bersih sepanjang horizon perencanaan $T$, dengan komponen biaya dari aliran maju, aliran balik, proses echelon, dan proses daur ulang.

### 2.1 Notasi dan Parameter Model

Misalkan:
- $i \in I$ : indeks titik demand (pasar/konsumen EV),
- $j \in J$ : indeks pusat distribusi,
- $k \in K$ : indeks fasilitas manufaktur/echelon,
- $l \in L$ : indeks fasilitas daur ulang material,
- $t \in \{1, 2, \dots, T\}$ : periode waktu diskret.

Parameter kunci:
- $c^{f}_{ijk}$ : biaya unit transportasi maju dari $i$ ke $j$ ke $k$,
- $c^{r}_{k l}$ : biaya unit transportasi retrograde dari $k$ ke $l$,
- $p$ : harga jual baterai baru,
- $p^{e}$ : harga jual baterai echelon,
- $p^{m}_{r}$ : harga jual material daur ulang ke-$r$ (litium, kobalt, nikel, dll.),
- $\theta_{i}$ : SOH residual baterai dari konsumen $i$,
- $\eta^{e}$ : efisiensi utilisasi kapasitas pada aplikasi echelon,
- $\rho^{m}_{r}$ : rasio recovery material $r$ per baterai,
- $Q_k, Q_l$ : kapasitas fasilitas echelon dan daur ulang.

### 2.2 Fungsi Tujuan

$$\max Z = \sum_{t=1}^{T} \left[ \sum_{i,j,k} p \cdot x_{ijk} - \sum_{i,j,k} c^{f}_{ijk} x_{ijk} + \sum_{k} p^{e} y^{e}_{k} - \sum_{k} c^{e} y^{e}_{k} + \sum_{l,r} p^{m}_{r} \rho^{m}_{r} y^{r}_{l} - \sum_{k,l} c^{r}_{k l} z_{kl} \right]$$

di mana:
- $x_{ijk}$ : kuantitas baterai baru yang dikirim,
- $y^{e}_{k}$ : kuantitas baterai bekas yang dialihkan ke echelon utilization,
- $y^{r}_{l}$ : kuantitas baterai bekas yang dikirim ke daur ulang,
- $z_{kl}$ : kuantitas aliran retrograde.

### 2.3 Kendala Utama

**Kendala keseimbangan aliran retrograde:**
$$\sum_{l} z_{kl} + y^{e}_{k} = \sum_{i,j} R_{ijk}, \quad \forall k$$

**Kendala kapasitas:**
$$\sum_{k} y^{e}_{k} \leq Q_{k}, \quad \sum_{l} y^{r}_{l} \leq Q_{l}$$

**Kendala ambang SOH untuk echelon:**
$$y^{e}_{k} \leq M \cdot \mathbb{1}\{\theta_{k} \geq \theta^{\min}\}$$

di mana $\theta^{\min}$ adalah ambang SOH minimal untuk aplikasi echelon (umumnya 0,6–0,7), dan $M$ adalah bilangan besar (*big-M*).

**Kendala non-negativitas dan integrality:**
$$x_{ijk}, y^{e}_{k}, y^{r}_{l}, z_{kl} \geq 0$$

### 2.4 Pendekatan Robust (Shin, Kim, & Jeong, 2024)

Untuk menangani ketidakpastian permintaan return, Shin, Kim, & Jeong (2024) memperkenalkan *robust counterpart* dengan *budget of uncertainty* $\Gamma$:

$$\sum_{i,j} R_{ijk} \in [\underline{R}_{ijk}, \overline{R}_{ijk}], \quad \sum_{(i,j,k) \in S} (\overline{R}_{ijk} - R_{ijk}) \leq \Gamma$$

Pendekatan ini menjamin *feasibility* solusi pada skenario worst-case dengan tingkat konservatisme yang dapat dikontrol oleh decision maker, sehingga menghasilkan keputusan yang *risk-averse* namun tidak over-pessimistic.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas di industri mengikuti kerangka SOP berlapis yang mengintegrasikan dimensi logistik, teknis, dan regulasi. Berdasarkan sintesis dari JIANG & TANG (2025) serta pelengkap robust dari Shin, Kim, & Jeong (2024), alur metodologi dapat distrukturisasi sebagai berikut:

### 3.1 Tahap 1: Klasifikasi & Asesmen Baterai Bekas

Baterai yang kembali (*returned battery*) memasuki fasilitas *echelon sorting center* untuk pengujian SOH melalui prosedur *hybrid pulse power characterization* (HPPC) dan *electrochemical impedance spectroscopy* (EIS). Klasifikasi 3-tier umum digunakan:
- **Tier A** (SOH ≥ 0,8): memenuhi standar OEM untuk remanufaktur sebagai baterai EV,
- **Tier B** (0,6 ≤ SOH < 0,8): layak untuk echelon utilization (stasioner),
- **Tier C** (SOH < 0,6): langsung diarahkan ke *pyrometallurgical* atau *hydrometallurgical* recycling.

### 3.2 Tahap 2: Optimisasi Jaringan Multi-Echelon

Berdasarkan hasil asesmen Tier, *decision support system* (DSS) berbasis MILP dijalankan untuk menentukan alokasi optimal baterai Tier B dan Tier C ke fasilitas echelon atau daur ulang. Algoritma *branch-and-cut* dengan pemecah (solver) Gurobi atau CPLEX digunakan untuk instance berskala industri (ribuan variabel biner).

### 3.3 Tahap 3: Disassembly, Refurbishment, dan Remanufacturing

Modul baterai dibuka (*disassembly*) dalam kondisi atmosfer terkontrol (Argon, < 100 ppm O₂ dan < 50 ppm H₂O sesuai standar GB/T 36276-2018 untuk baterai litium domestik Cina). Sel-sel yang lolos uji kapasitas dan impedansi digabungkan kembali (*repack*) untuk aplikasi echelon; sel-sel gagal masuk ke jalur daur ulang.

### 3.4 Tahap 4: Daur Ulang Material

Material katoda (*black mass*) diproses melalui hidrometalurgi (leaching dengan H₂SO₄ atau asam organik, presipitasi selektif) untuk memisahkan litium sebagai Li₂CO₃ atau LiOH·H₂O, serta kobalt/nikel sebagai sulfat atau hidroksida. *Recovery rate* industri saat ini untuk litium sekitar 90–95%, kobalt 95–98%.

### 3.5 Tahap 5: Reverse Logistics & Traceability

Setiap modul baterai dilengkapi *battery passport* sesuai regulasi EU Battery Regulation 2023/1542 yang mulai berlaku Agustus 2024, memungkinkan pelacakan siklus hidup lengkap untuk kepatuhan Extended Producer Responsibility (EPR).

### 3.6 Diagram Alir Proses

```
[Konsumen EV] → (Pengembalian Tier A/B/C)
       ↓
[Collection Hub] → [SOH & EIS Testing]
       ↓
   ┌────┴────┐
[Tier A] [Tier B]   [Tier C]
   ↓         ↓          ↓
[Repack] [Echelon]  [Recycling]
   ↓         ↓          ↓
[OEM EV] [Storage]  [Black Mass]
                          ↓
                   [Hydrometallurgy]
                          ↓
              [Li₂CO₃, NiSO₄, CoSO₄]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Studi kasus berikut dirancang untuk merepresentasikan kondisi operator CLSC skala regional dengan kapasitas moderat, menggunakan parameter industri yang realistis. Asumsikan seorang operator CLSC melayani pasar EV di satu aglomerasi perkotaan besar (≈ 500.000 unit EV, baterai rata-rata 60 kWh).

### 4.1 Parameter Input

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $p$ (harga jual baterai baru) | 8.500 | USD/unit |
| $p^e$ (harga jual baterai echelon) | 2.800 | USD/unit |
| $p^m_{Li}$ (harga Li₂CO₃) | 18.000 | USD/ton |
| $p^m_{Co}$ (harga CoSO₄·7H₂O) | 8.500 | USD/ton |
| $\rho^m_{Li}$ | 0,045 | ton/unit baterai |
| $\rho^m_{Co}$ | 0,028 | ton/unit baterai |
| $c^e$ (biaya refurbishment echelon) | 750 | USD/unit |
| $c^r$ (biaya daur ulang per unit) | 450 | USD/unit |
| $c^f$ (transportasi maju rata-rata) | 60 | USD/unit |
| $\theta^{\min}$ | 0,65 | - |
| Return rate $R$ | 12.000 | unit/tahun |

### 4.2 Langkah Kalkulasi

**Langkah 1: Estimasi kontribusi revenue echelon per unit baterai Tier B**

Revenue echelon per unit:
$$R_e = p^e - c^e - c^f = 2.800 - 750 - 60 = 1.990 \text{ USD/unit}$$

**Langkah 2: Estimasi revenue daur ulang per unit baterai Tier C**

Revenue material per unit baterai:
$$R_m = (\rho^m_{Li} \cdot p^m_{Li}) + (\rho^m_{Co} \cdot p^m_{Co}) = (0{,}045 \cdot 18.000) + (0{,}028 \cdot 8.500)$$
$$R_m = 810 + 238 = 1.048 \text{ USD/unit}$$

Revenue daur ulang neto per unit:
$$R_r = R_m - c^r = 1.048 - 450 = 598 \text{ USD/unit}$$

**Langkah 3: Alokasi optimal alokasi return**

Berdasarkan data historis, proporsi Tier B dan Tier C diasumsikan 60% dan 40% dari total return:
- Alokasi ke echelon: $y^e = 0{,}60 \times 12.000 = 7.200$ unit/tahun
- Alokasi ke daur ulang: $y^r = 0{,}40 \times 12.000 = 4.800$ unit/tahun

**Langkah 4: Perhitungan profit tahunan dari reverse loop**

Profit echelon:
$$\Pi_e = y^e \cdot R_e = 7.200 \times 1.990 = 14.328.000 \text{ USD/tahun}$$

Profit daur ulang:
$$\Pi_r = y^r \cdot R_r = 4.
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
