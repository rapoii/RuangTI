# 2549 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Pembangkit Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Remanufaktur Baterai Lithium-ion Bekas (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global telah menciptakan tantangan operasional dan lingkungan yang belum pernah terjadi sebelumnya dalam rantai pasok industri otomotif dan penyimpanan energi. Menurut JIANG Lin dan TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), baterai lithium-ion yang telah pensiun dari aplikasi otomotif (state-of-health, SOH < 80%) masih memiliki kapasitas residu yang cukup signifikan untuk dimanfaatkan pada aplikasi stasioner berdaya rendah — sebuah konsep yang dikenal sebagai *echelon utilization* atau pemanfaatan bertingkat. Jika tidak dikelola dengan benar, limbah baterai bekas ini akan menjadi bom ekologis yang mengandung logam berat (kobalt, nikel, litium) yang sulit terurai dan berpotensi mencemari ekosistem.

Urgensi strategis dari studi ini dapat dikuantifikasi melalui tiga dimensi utama. **Pertama**, dimensi regulasi: kebijakan Extended Producer Responsibility (EPR) yang berlaku di Uni Eropa (EU Battery Directive 2023/1542) dan perkembangan regulasi serupa di Tiongkok (GB/T 34014-2017 tentang standarisasi kode baterai otomotif) mengharuskan produsen baterai bertanggung jawab penuh atas daur hidup produk. **Kedua**, dimensi ekonomi: pasar baterai bekas global diproyeksikan mencapai USD 51,7 miliar pada 2030 dengan CAGR 22,5%, di mana efisiensi logistik daur balik (*reverse logistics*) menjadi variabel profitabilitas determinan. **Ketiga**, dimensi teknis: parameter SOH baterai bekas bervariasi antara 60–80% yang menimbulkan uncertainty dalam perencanaan kapasitas remanufaktur.

Studi Youngchul Shin, Gwang Kim, dan Yoonjea Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) memperkuat urgensi ini dengan menunjukkan bahwa dalam konteks ekonomi sirkular, sistem return management yang robust mampu meningkatkan profitabilitas CLSC hingga 18–24% melalui pengurangan biaya persediaan pengaman (*safety stock*). Kedua literatur ini secara komplementer membahas bagaimana desain CLSC harus mengintegrasikan keputusan multi-echelon (produsen OEM, remanufakturer, recycler, dan secondary-market operator) di bawah kondisi permintaan dan kualitas baterai bekas yang stokastik.

Konteks industri Indonesia semakin relevan karena adanya proyek ambisius transisi energi 2060 dan proliferasi manufaktur baterai domestik (contoh: pabrik baterai Hyundai-LG di Karawang dan rencana investasi CATL). Desain CLSC yang optimal akan menentukan apakah Indonesia mampu menangkap nilai tambah ekonomi sirkular atau hanya menjadi konsumen akhir daur ulang.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model CLSC Multi-Echelon

JIANG & TANG (2025) memformulasikan arsitektur CLSC baterai bekas sebagai jaringan empat-tingkat yang terdiri dari: (i) **pusat koleksi** baterai retired dari OEM/operator fleet, (ii) **fasilitas inspeksi dan sortasi** untuk klasifikasi SOH, (iii) **lokasi echelon utilization** untuk aplikasi second-life (stasiun pengisian EV, penyimpanan energi terbarukan), dan (iv) **pabrik remanufaktur/daur ulang material**.

### 2.2 Formulasi Fungsi Tujuan

Model optimasi Mixed-Integer Linear Programming (MILP) yang dikembangkan meminimalkan total biaya CLSC yang mencakup biaya transportasi, biaya sortasi-inspeksi, biaya echelon utilization, biaya remanufaktur, dan biaya daur ulang material, dengan tetap memaksimalkan revenue dari penjualan second-life battery dan material recovered.

$$\min Z = \sum_{i \in I}\sum_{j \in J}c_{ij}^t \cdot x_{ij} + \sum_{k \in K}c_k^s \cdot y_k + \sum_{m \in M}c_m^r \cdot z_m + \sum_{r \in R}c_r^d \cdot w_r - \sum_{s \in S}p_s \cdot q_s$$

di mana:
- $c_{ij}^t$ = biaya transportasi per unit baterai dari pusat koleksi $i$ ke fasilitas $j$
- $x_{ij}$ = jumlah baterai yang dikirimkan dari $i$ ke $j$
- $c_k^s$ = biaya sortasi dan inspeksi per unit di fasilitas $k$
- $y_k$ = jumlah baterai yang diinspeksi di fasilitas $k$
- $c_m^r$ = biaya remanufaktur per unit baterai
- $z_m$ = jumlah baterai yang di-remanufaktur di fasilitas $m$
- $c_r^d$ = biaya daur ulang material per unit
- $w_r$ = jumlah baterai yang di-recycle di fasilitas $r$
- $p_s$ = harga jual second-life battery di pasar $s$
- $q_s$ = jumlah baterai yang dijual untuk aplikasi second-life

### 2.3 Model Stokastik dengan Demand Uncertainty

Shin, Kim, dan Jeong (2024) mengusulkan perluasan robust optimization untuk mengatasi ketidakpastian kualitas baterai masuk dan permintaan pasar second-life. Formulasi robust counterpart-nya:

$$\min_{x,y} \max_{u \in \mathcal{U}} \left\{ c^Tx + d^Ty : Ax + By \geq h - Mu,\ x \in X,\ y \in Y \right\}$$

di mana $\mathcal{U} = \{u : \|u\|_\infty \leq \Gamma\}$ adalah uncertainty set dengan budget of uncertainty $\Gamma$, dan $M$ adalah matriks yang merepresentasikan sensitivitas kendala terhadap realisasi ketidakpastian kualitas baterai (SOH deviation dari nilai nominal).

### 2.4 Kendala Kapasitas dan Keseimbangan Aliran

Persamaan keseimbangan aliran material (flow balance) di setiap node fasilitas:

$$\sum_{i \in I} x_{ij} = y_j \quad \forall j \in J$$

Kendala kapasitas sortasi berdasarkan kapasitas inspeksi harian $\kappa_j$:

$$y_j \leq \kappa_j \cdot T \quad \forall j \in J$$

Kendala kualitas untuk klasifikasi baterai:

$$y_j^{SOH \geq 0.8} + y_j^{0.6 \leq SOH < 0.8} + y_j^{SOH < 0.6} = y_j$$

di mana baterai dengan SOH ≥ 80% masuk remanufaktur high-grade, SOH 60–80% masuk echelon utilization, dan SOH < 60% langsung masuk daur ulang material.

### 2.5 Fungsi Utilitas Keputusan Tambahan

Indikator profitabilitas CLSC menggunakan Net Present Value (NPV) dengan discount factor $\beta$:

$$NPV = \sum_{t=0}^{T}\frac{R_t - C_t}{(1+\beta)^t}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas memerlukan SOP berlapis yang mengikuti standar internasional GB/T 34014-2017 (Tiongkok), IEC 62933-2-1 (sistem penyimpanan energi), dan ISO 14001 (manajemen lingkungan). Berdasarkan integrasi kedua literatur, berikut arsitektur SOP yang direkomendasikan:

### 3.1 Tahap 1 — Reverse Logistics & Collection Network

1. **Registrasi baterai retired** melalui sistem Battery Passport digital dengan teknologi blockchain (ISO 23257).
2. **Pre-collection triage** menggunakan handheld BMS scanner untuk verifikasi SOH awal sebelum pengiriman.
3. **Transport dengan kemasan Class 9 UN3480** sesuai UN Recommendations on the Transport of Dangerous Goods.
4. **Asuransi reverse-logistics** berbasis nilai pasar baterai (mengikuti parameter $c_{ij}^t$ pada model).

### 3.2 Tahap 2 — Inspection, Testing & Sorting

1. **Capacity testing** menggunakan cycler Arbin LBT-21024 dengan protokol charge-discharge pada C/3 rate selama 3 siklus.
2. **Electrochemical Impedance Spectroscopy (EIS)** untuk identifikasi degradation mode.
3. **AI-assisted classification** menggunakan model Random Forest dengan fitur: kapasitas残存率, internal resistance, dan self-discharge rate. Akurasi klasifikasi tipikal: 94–96%.
4. **Decision routing** ke salah satu dari tiga alur berdasarkan SOH threshold.

### 3.3 Tahap 3 — Echelon Utilization

1. **Reconfiguration pack** dengan kapasitas modul 2–5 kWh untuk aplikasi spesifik.
2. **BMS retrofit** dengan algoritma state-of-health tracking berbasis Kalman Filter.
3. **Instalasi pada aplikasi second-life**: penyimpanan energi terbarukan (PV-storage), UPS industri, EV charging buffer.
4. **Monitoring lifetime** dengan target ≥5 tahun operasi pada depth-of-discharge (DoD) 70%.

### 3.4 Tahap 4 — Recycling & Material Recovery

1. **Pretreatment**: discharging ke 0% SOC, dismantling mekanik, dan shredding.
2. **Pyrometallurgy atau Hydrometallurgy** untuk recovery Li, Co, Ni.
3. **Efficiency target**: ≥95% recovery rate untuk Co dan Ni, ≥80% untuk Li (sesuai EU Battery Regulation 2023/1542).

### 3.5 Diagram Alir Logika Pengambilan Keputusan

```
[Battery Retired Collection]
        ↓
[Initial Triage & Registration]
        ↓
[Capacity & EIS Testing]
        ↓
[AI Classification]
        ↓
   ┌────┼────┐
   ↓    ↓    ↓
SOH≥80% 60-80% <60%
   ↓    ↓    ↓
[Reman.][Echelon][Recycle]
   ↓    ↓    ↓
   └────┴────┘
        ↓
[Material Flow to Secondary Market]
```

### 3.6 Integrasi dengan Return Management System (Shin et al., 2024)

Sistem informasi terpusat (Return Management System/RMS) mengintegrasikan data real-time dari collection centers, warehouse baterai bekas, dan secondary markets untuk memberikan visibilitas end-to-end. Arsitektur ini menggunakan three-tier IT architecture: (i) data acquisition layer (IoT sensors pada container baterai), (ii) processing layer (cloud-based analytics), dan (iii) presentation layer (dashboard decision support).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Industri

Simulasi dilakukan untuk fasilitas CLSC di Provinsi Jiangsu, Tiongkok (lokasi studi JIANG & TANG 2025) dengan data sebagai berikut:

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Jumlah baterai retired per tahun | $D$ | 50.000 | unit |
| Kapasitas inspeksi harian | $\kappa_j$ | 250 | unit/hari |
| Biaya transportasi | $c_{ij}^t$ | 12 | USD/unit |
| Biaya sortasi & inspeksi | $c_k^s$ | 18 | USD/unit |
| Biaya remanufaktur | $c_m^r$ | 145 | USD/unit |
| Biaya daur ulang | $c_r^d$ | 65 | USD/unit |
| Harga jual second-life (SOH 60-80%) | $p_s$ | 95 | USD/unit |
| Harga jual material回收 | $p_m$ | 48 | USD/unit |
| Proporsi SOH ≥ 80% | $\alpha_1$ | 30% | — |
| Proporsi SOH 60-80% | $\alpha_2$ | 45% | — |
| Proporsi SOH < 60% | $\alpha_3$ | 25% | — |
| Horizon perencanaan | $T$ | 5 | tahun |

### 4.2 Perhitungan Distribusi Aliran

**Langkah 1:** Hitung jumlah baterai di setiap kategori kualitas:

$$y^{SOH \geq 0.8} = 50.000 \times 0{,}30 = 15.000 \text{ unit/tahun}$$

$$y^{0{,}6 \leq SOH < 0{,}8} = 50.000 \times 0{,}45 = 22.500 \text{ unit/tahun}$$

$$y^{SOH < 0{,}6} = 50.000 \times 0{,}25 = 12.500 \text{ unit/tahun}$$

**Langkah 2:** Hitung total biaya operasional tahunan (TC):

$$TC = \underbrace{(50.000 \times 12)}_{\text{transport}} + \underbrace{(50.000 \times 18)}_{\text{sortasi}} + \underbrace{(15.000 \times 145)}_{\text{remanufaktur}} + \underbrace{(12.500 \times 65)}_{\text{daur ulang}}$$

$$TC = 600.000 + 900.000 + 2.175.000 + 812.500 = 4.487.500 \text{ USD/tahun}$$

**Langkah 3:** Hitung total revenue dari penjualan:

$$R = (15.000 \times 280)_{\text{remanufaktur}} + (22.500 \times 95)_{\text{echelon}} + (12.500 \times 48)_{\text{material}}$$

$$R = 4.200.000 + 2.137.500 + 600.000 = 6.937.500 \text{ USD/tahun}$$

(harga jual baterai remanufaktur high-grade diasumsikan $280/unit di pasar OEM).

**Langkah 4:** Hitung Net Operating Profit:

$$NOP = R - TC = 6.937.500 - 4.487.500 = 2.450.000 \text{ USD/tahun}$$

**Langkah 5:** Hitung margin operasional:

$$\text{Margin} = \frac{NOP}{R} \times 100\% = \frac{2.450.000}{6.937.500} \times 100\% = 35{,}32\%$$

### 4.3 Analisis Sensitivitas Robust (Mengikuti Shin et$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
