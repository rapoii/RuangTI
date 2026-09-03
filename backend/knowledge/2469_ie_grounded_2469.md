# 2469 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Berjenjang (Echelon Utilization) dan Daur Ulang Manufaktur Baterai Power Bekas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Kim & Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Krisis keberlanjutan yang ditimbulkan oleh pensiunnya baterai power (power battery retirement) kendaraan listrik global telah menjadi salah satu tantangan rekayasa sistem industri paling mendesak di dekade 2020-an. Berdasarkan proyeksi International Energy Agency (IEA), lebih dari 2 juta ton baterai lithium-ion akan mencapai end-of-life (EoL) pada tahun 2030, dan jumlah ini dapat melonjak menjadi lebih dari 11 juta ton pada 2040 (JIANG & TANG, 2025). Di tengah dinamika ini, JIANG & TANG (2025) dalam naskah ICLSE 2024 menyoroti urgensi pengembangan strategi *closed-loop supply chain* (CLSC) yang secara simultan mengakomodasi dua mekanisme pasca-pensiun: **echelon utilization** (pemanfaatan berjenjang, yaitu baterai dengan *State of Health*/SoH 60–80% yang masih layak dipakai untuk aplikasi sekunder seperti *stationary energy storage system*/SESS) serta **recycling remanufacturing** (daur ulang manufaktur yang mengekstraksi material kritis Li, Co, Ni untuk fabrikasi sel baru). Pendekatan terpadu tersebut membedakan penelitian ini dari studi konvensional yang hanya mempertimbangkan satu skenario回收.

Fenomena ini beririsan kuat dengan studi Shin, Kim & Jeong (2024) yang membangun model CLSC robust dengan sistem manajemen pengembalian untuk ekonomi sirkular. Kedua naskah—JIANG & TANG (2025) serta Shin, Kim & Jeong (2024)—secara konsisten menekankan bahwa desain jaringan *closed-loop* tanpa mempertimbangkan ketidakpastian *return flow*, kapasitas daur ulang, dan dinamika harga material sekunder akan menghasilkan solusi suboptimal yang rentan terhadap guncangan pasar (DOI: 10.2139/ssrn.4934197). Dalam konteks manufaktur baterai di Tiongkok, yang merupakan produsen EV terbesar dunia, proporsi baterai pensiun diproyeksikan mencapai 76% dari total kapasitas terpasang pada 2030, menciptakan *reverse logistics* dalam skala masif yang menuntut optimasi matematis berlapis.

Secara operasional, permasalahan ini melibatkan setidaknya tiga *decision-maker*: produsen baterai (*original equipment manufacturer*/OEM), operator echelon (utilitas penyimpanan energi atau operator telekomunikasi), dan *third-party recycler* (TPR). Ketiga entitas ini memiliki fungsi utilitas yang saling kontradiktif—OEM ingin menekan biaya akuisisi material sekunder, operator echelon menginginkan baterai bekas dengan harga rendah, sementara TPR mengejar margin dari aktivitas daur ulang. Oleh karena itu, diperlukan kerangka pemodelan *Stackelberg game* atau *bilevel programming* untuk menganalisis keseimbangan Nash-Stackelberg dalam rantai nilai baterai bekas (JIANG & TANG, 2025).

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang dikembangkan oleh JIANG & TANG (2025) menggunakan kerangka *mixed-integer linear programming* (MILP) yang dikombinasikan dengan teori permainan *Stackelberg* berjenjang. Formulasi inti dapat diuraikan sebagai berikut.

### 2.1 Notasi Himpunan dan Parameter

- $I = \{1, 2, \ldots, m\}$ : himpunan fasilitas manufaktur OEM
- $J = \{1, 2, \ldots, n\}$ : himpunan pusat daur ulang (recycling centers)
- $K = \{1, 2, \ldots, p\}$ : himpunan operator echelon (EUs – Echelon Users)
- $M = \{1, 2, \ldots, q\}$ : himpunan titik koleksi (*collection points*)
- $c_{ij}$ : biaya transportasi baterai baru dari $i$ ke $j$
- $r_{kj}$ : biaya transport baterai pensiun dari operator echelon $k$ ke recycler $j$
- $d_i$ : permintaan pasar baterai baru
- $s_m$ : suplai baterai pensiun dari titik koleksi $m$
- $\rho$ : rasio echelon utilization (fraksi baterai yang memenuhi ambang SoH ≥ 60%)
- $\alpha, \beta$ : parameter pemulihan material ($\alpha$ untuk remanufacturing, $\beta$ untuk echelon)

### 2.2 Variabel Keputusan

$$x_{ij} \geq 0 : \text{aliran baterai baru dari } i \text{ ke } j$$
$$y_{kj} \geq 0 : \text{aliran baterai pensiun dari } k \text{ ke } j$$
$$z_{mk} \geq 0 : \text{aliran baterai pensiun dari } m \text{ ke operator echelon } k$$
$$u_i \in \{0,1\} : \text{status pembukaan fasilitas manufaktur } i$$
$$v_j \in \{0,1\} : \text{status pembukaan pusat daur ulang } j$$
$$w_k \in \{0,1\} : \text{status pembukaan operator echelon } k$$

### 2.3 Fungsi Tujuan (Biaya Total CLSC)

Fungsi tujuan memformulasikan minimisasi biaya total rantai pasok tertutup, terdiri atas biaya produksi, operasional fasilitas, transportasi maju-mundur, dan biaya kehilangan (*waste penalty*):

$$\min Z = \underbrace{\sum_{i \in I} f_i u_i + \sum_{j \in J} g_j v_j + \sum_{k \in K} h_k w_k}_{\text{biaya tetap fasilitas}}$$
$$+ \underbrace{\sum_{i \in I}\sum_{j \in J} c_{ij} x_{ij}}_{\text{transport maju}}$$
$$+ \underbrace{\sum_{m \in M}\sum_{k \in K} r_{mk} z_{mk} + \sum_{k \in K}\sum_{j \in J} r_{kj} y_{kj}}_{\text{transport balik}}$$
$$+ \underbrace{\sum_{j \in J} p_{j}^{rec} \left( \sum_{i \in I} x_{ij} - \sum_{i' \in I} x_{i'j}^{reuse} \right)}_{\text{biaya pemrosesan daur ulang}}$$
$$+ \underbrace{\lambda \sum_{j \in J} W_j}_{\text{penalti limbah}}$$

di mana $\lambda$ adalah koefisien penalti lingkungan (environmental penalty) yang merepresentasikan eksternalitas negatif dari baterai yang tidak ter-recovery.

### 2.4 Kendala (Constraints)

**Kendala keseimbangan massa di tiap pusat daur ulang:**

$$\sum_{i \in I} x_{ij} + \alpha \sum_{k \in K} y_{kj} = D_j^{req}, \quad \forall j \in J$$

**Kendala kapasitas operator echelon:**

$$\rho \sum_{m \in M} z_{mk} \leq C_k^{EU}, \quad \forall k \in K$$

**Kendala suplai dari titik koleksi:**

$$\sum_{k \in K} z_{mk} \leq s_m, \quad \forall m \in M$$

**Kendala non-negativitas dan biner:**

$$x_{ij}, y_{kj}, z_{mk} \geq 0; \quad u_i, v_j, w_k \in \{0,1\}$$

### 2.5 Formulasi Game Stackelberg Berjenjang

JIANG & TANG (2025) lebih lanjut menyusun permainan berjenjang di mana OEM sebagai *leader* mengumumkan harga beli baterai pensiun $\pi_r$, sementara operator echelon dan TPR bertindak sebagai *follower* yang menentukan volume pengembalian. Fungsi utilitas OEM:

$$\Pi^{OEM} = \sum_{i,j} (p - c_{ij}) x_{ij} - \pi_r \sum_{m,k} z_{mk}$$

Fungsi utilitas operator echelon $k$:

$$\Pi_k^{EU} = \pi_r \sum_m z_{mk} - \sum_j r_{kj} y_{kj} - C_k^{op}$$

Keseimbangan tercapai pada titik di mana $\partial \Pi^{OEM}/\partial \pi_r = 0$ dan $\partial \Pi_k^{EU}/\partial z_{mk} = 0$, menghasilkan harga keseimbangan $\pi_r^*$ yang memenuhi:

$$\pi_r^* = \frac{1}{2} \left( C_k^{op} + \sum_j r_{kj} + \sum_i c_{ij} \right)$$

Persamaan ini menunjukkan bahwa harga keseimbangan回收 baterai pensiun ditentukan oleh biaya operasional operator echelon, biaya transport ke recycler, dan biaya transport baterai baru dari OEM—mekanisme yang memastikan *price discovery* yang efisien dalam CLSC.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari strategi CLSC baterai pensiun mengikuti kerangka SOP berlapis yang disintesis dari JIANG & TANG (2025) dan diperkuat dengan pendekatan robust optimization dari Shin, Kim & Jeong (2024):

### 3.1 Diagram Alir Proses (Process Flowchart)

```
┌─────────────────────────────────────────────────────┐
│ FASE 1: Koleksi Baterai Pensiun                    │
│ → Titik koleksi 4S-dealer, OEM service center      │
│ → Logistik berpendingin (SoH preservation)         │
└──────────────────────┬──────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────┐
│ FASE 2: Diagnostik & Klasifikasi SoH               │
│ → SoH ≥ 80%  : Direct reuse / refurbishment       │
│ → 60% ≤ SoH < 80% : Echelon utilization → SESS    │
│ → SoH < 60%  : Recycling remanufacturing           │
└──────────────────────┬──────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────┐
│ FASE 3: Disassembly & Material Recovery             │
│ → Hidrometalurgi (leaching Li, Co, Ni)             │
│ → Pirometalurgi (smelting untuk Co & Ni)           │
│ → Direct recycling (cathode regeneration)          │
└──────────────────────┬──────────────────────────────┘
                       ▼
┌─────────────────────────────────────────────────────┐
│ FASE 4: Redistribusi Material ke Manufaktur Sel    │
│ → Closed-loop feedback ke lini produksi OEM        │
│ → Validasi material (purity ≥ 99.5%)               │
└─────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Operasional Standar (SOP) – 7 Tahapan Kritis

| No | Tahapan | Standar Acuan | KPI |
|----|---------|---------------|-----|
| 1 | Pendaftaran baterai pensiun (barcode traceability) | GB/T 34014-2017 | 100% terlacak |
| 2 | Pengujian SoH (capacity test, internal resistance) | IEC 62933-3-1 | Presisi ±2% |
| 3 | Keputusan alur (echelon vs recycle) | Threshold SoH 60% | Akurasi 95% |
| 4 | Transport ADR Class 9 (UN 3480) | UN Recommendations | Zero incident |
| 5 | Pretreatment (discharge ke <30% SoC) | IEC 62660 | Safety compliant |
| 6 | Proses metalurgi (hydrometallurgical) | ISO 14001 | Recovery rate ≥90% |
| 7 | Validasi material recovered | ASTM E165 | Purity ≥99.5% |

### 3.3 Arsitektur Teknologi Pendukung

JIANG & TANG (2025) mengusulkan platform digital terintegrasi berbasis *blockchain* untuk traceability baterai, *IoT sensor* untuk monitoring SoH real-time, dan *digital twin* untuk simulasi jaringan CLSC. Arsitektur ini selaras dengan rekomendasi Shin, Kim & Jeong (2024) yang menekankan pentingnya sistem manajemen pengembalian (*return management system*/RMS) berbasis TI untuk mengurangi *uncertainty* dalam reverse logistics.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Industri

Diadaptasi dari skenario kasus yang umum dijumpai di CLSC baterai EV regional skala menengah:

- Jumlah titik koleksi: $M = 5$ (kota Beijing, Shanghai, Guangzhou, Chengdu, Wuhan)
- Jumlah fasilitas manufaktur OEM: $I = 2$
- Jumlah pusat daur ulang: $J = 2$
- Jumlah operator echelon: $K = 2$ (stasiun penyimpanan energi & operator telekomunikasi)
- Permintaan baterai baru tahunan: $D = 50{,}000$ unit
- Suplai baterai pensiun: $s_m = 8