# 2677 — Strategi Rantai Pasok Closed-Loop untuk Baterai Power Bekas: Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain (CLSC) dengan Integrasi Pemanfaatan Bertingkat (Echelon Utilization) Baterai Power Bekas dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim & Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (Electric Vehicle/EV) global telah menciptakan tantangan logistik dan lingkungan baru berupa akumulasi baterai lithium-ion bekas (*retired power batteries*). Menurut JIANG & TANG (2025, DOI: 10.52202/078960-0068), baterai EV yang umumnya memiliki *State of Health* (SoH) di bawah 80% dianggap tidak layak lagi untuk aplikasi otomotif, namun masih memiliki kapasitas residu 60–70% yang sangat berharga untuk aplikasi sekunder. Volume baterai pensiun ini diproyeksikan mencapai 1,4 juta ton secara global pada 2030, menciptakan urgensi strategis untuk merancang rantai pasok *closed-loop* (CLSC) yang tidak hanya mendaur ulang (*recycling*) tetapi juga memaksimalkan nilai ekonomi melalui pemanfaatan bertingkat (*echelon utilization*).

Permasalahan mendasar yang diangkat oleh JIANG & TANG (2025, DOI: 10.52202/078960-0068) adalah bagaimana menyusun strategi CLSC yang mengintegrasikan dua jalur *reverse logistics* secara simultan: (1) **pemanfaatan bertingkat** untuk aplikasi seperti *stationary energy storage system* (SESS), forklift listrik, dan lampu jalan pintar, dan (2) **remanufaktur daur ulang** untuk mengekstraksi material kritis (litium, kobalt, nikel). Pendekatan tradisional yang hanya mempertimbangkan satu jalur *reverse* terbukti inefisien karena gagal menangkap nilai marjinal dari baterai yang masih memiliki siklus hidup tersisa.

Shin, Kim & Jeong (2024, DOI: 10.2139/ssrn.4934197) melengkapi perspektif ini dengan menyoroti bahwa implementasi CLSC menghadapi ketidakpastian permintaan dan tingkat pengembalian yang tinggi. Mereka mengusulkan model **robust optimization** yang memungkinkan keputusan optimal tetap layak (*feasible*) dalam skenario terburuk (*worst-case scenario*), suatu aspek yang sangat relevan untuk industri baterai di mana fluktuasi harga litium dan kebijakan subsidi pemerintah berubah secara dinamis. DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197).

Konteks industri ini penting karena tiga alasan strategis. Pertama, regulasi *Extended Producer Responsibility* (EPR) di Uni Eropa dan Tiongkok mewajibkan produsen baterai untuk mengelola *end-of-life* produk mereka. Kedua, volatilitas harga bahan baku kritis—kobalt naik 40% YoY pada 2024—menjadikannya sangat tidak bijaksana untuk melakukan *virgin material extraction* saja. Ketiga, *carbon footprint* baterai daur ulang hanya 30–40% dari baterai baru, menjadikan CLSC bukan hanya keputusan profit tetapi juga keputusan *environmental, social, and governance* (ESG). Dengan demikian, paper JIANG & TANG (2025) memberikan kerangka keputusan kuantitatif yang menjembatani optimalitas ekonomi dan keberlanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Stackelberg Dua-Tahap

JIANG & TANG (2025, DOI: 10.52202/078960-0068) memodelkan CLSC sebagai permainan Stackelberg tiga-tingkat dengan **produsen sebagai pemimpin** (*leader*), pengecer dan *third-party recycler* (TPR) sebagai pengikut (*followers*). Struktur keputusan bergerak sebagai berikut: produsen mengumumkan harga grosir ($w$), harga beli balik baterai bekas ($p_b$), dan subsidi trade-in ($\tau$); pengecer merespons dengan harga eceran ($p$) dan jumlah pemesanan ($q$); TPR menentukan harga jual remanufaktur ($p_r$) dan alokasi antara *echelon* versus daur ulang murni.

**Fungsi permintaan linear** untuk baterai baru:
$$D_n(p) = a - b p$$

di mana $a$ merepresentasikan ukuran pasar potensial dan $b$ koefisien sensitivitas harga. **Permintaan untuk baterai echelon** (misalnya untuk SESS) dimodelkan:
$$D_e(p_e) = \alpha - \beta p_e$$

### 2.2 Fungsi Profit Pemain Rantai Pasok

**Profit Produsen** ($\pi_m$):
$$\pi_m = (w - c_m)(a - bp) + p_b \cdot \eta \cdot (a - bp) - c_e \cdot e \cdot \eta(a - bp) - c_r(1-e)\eta(a-bp)$$

di mana:
- $c_m$ = biaya manufaktur baterai baru
- $\eta$ = tingkat pengumpulan (*collection rate*) baterai bekas
- $e$ = fraksi baterai bekas yang dialokasikan ke *echelon utilization* ($0 \le e \le 1$)
- $c_e$ = biaya proses *echelon utilization* per unit
- $c_r$ = biaya *recycling remanufacturing* per unit

**Profit Pengecer** ($\pi_r$):
$$\pi_r = (p - w)(a - bp) - \tau \cdot \eta(a - bp)$$

**Profit Third-Party Recycler** ($\pi_t$):
$$\pi_t = (p_r - c_{re}) \cdot e \cdot \eta(a - bp) + (p_s - c_s) \cdot (1-e) \cdot \eta(a-bp)$$

di mana $c_{re}$ adalah biaya remanufaktur, $p_s$ harga jual material daur ulang, dan $c_s$ biaya ekstraksi.

### 2.3 Formulasi Robust Counterpart (Shin et al., 2024)

Untuk mengatasi ketidakpastian permintaan, Shin, Kim & Jeong (2024, DOI: 10.2139/ssrn.4934197) memperkenalkan **uncertainty set** $\mathcal{U}$ untuk parameter permintaan:
$$\mathcal{U} = \{(a, b) : a_L \le a \le a_U, \; b_L \le b \le b_U\}$$

Formulasi **robust counterpart** dari masalah maksimisasi profit produsen menjadi:
$$\max_{w,p_b,\tau} \min_{(a,b) \in \mathcal{U}} \pi_m(w, p_b, \tau; a, b)$$

DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197).

### 2.4 Kondisi Keseimbangan (*Nash Equilibrium*)

Dengan menggunakan **backward induction**, turunan pertama profit pengecer terhadap $p$ menghasilkan *best-response function*:
$$p^*(w, \tau) = \frac{a + b(w - \tau\eta)}{2b}$$

Substitusi ke fungsi profit produsen dan penyelesaian KKT conditions menghasilkan harga grosir optimal:
$$w^* = \frac{a + b(c_m - p_b\eta + c_e e\eta + c_r(1-e)\eta)}{2b}$$

Fraksi echelon optimal $e^*$ diperoleh dari:
$$\frac{\partial \pi_m}{\partial e} = 0 \implies (p_r - c_{re}) - (p_s - c_s) + \eta(a-bp) = 0$$

Kondisi ini menyiratkan bahwa alokasi optimal terjadi ketika **margin remanufaktur** sama dengan **margin daur ulang murni**.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi CLSC Baterai Bekas

JIANG & TANG (2025, DOI: 10.52202/078960-0068) menyusun SOP implementasi sebagai berikut:

```
┌──────────────────────────────────────────────────────────┐
│ TAHAP 1: Klasifikasi Baterai Pensiun (SoH Testing)      │
│  • Discharge test & impedance spectroscopy              │
│  • Threshold: SoH ≥ 70% → Echelon Path                 │
│  • Threshold: SoH < 70% → Direct Recycling Path         │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ TAHAP 2: Pengumpulan via Trade-In Subsidy (τ)            │
│  • Produsen tetapkan τ optimal dari model Stackelberg    │
│  • Retailer sebagai collection hub                       │
│  • Target collection rate: η ≥ 0.5                      │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ TAHAP 3: Sorting & Allocation                           │
│  • Decision variable: e (fraksi echelon)                │
│  • TPR sortir baterai berdasarkan spesifikasi teknis     │
│  • Output: jalur Echelon (e·η·q) + jalur Daur Ulang     │
└────────────────────────┬─────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────┐
│ TAHAP 4: Pemanfaatan Bertingkat (Echelon)               │
│  • Re-fabrication modul untuk SESS / low-speed EV       │
│  • Standar: GB/T 34014-2017 (Tiongkok), IEC 62933       │
│  • Estimasi siklus hidup sisa:
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
