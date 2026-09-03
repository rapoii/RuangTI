# 1957 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain (CLSC) untuk Baterai Power Bekas — Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global — yang diproyeksikan mencapai lebih dari 250 juta unit pada 2030 oleh IEA — telah menimbulkan tantangan struktural baru di ujung siklus hidup produk: **pembuangan baterai lithium-ion bekas (retired power batteries, RPB)**. Di China, sebagai episentrum manufaktur baterai dunia (lebih dari 75% kapasitas produksi global, BloombergNEF 2023), volume RPB diprediksi menembus angka **2,6 juta ton pada 2030** (MIIT China, 2023). Kompleksitas penanganan RPB tidak semata-mata isu lingkungan, melainkan masalah **rekayasa rantai pasok yang membutuhkan keputusan terkoordinasi antara manufaktur OEM, retailer, dan pihak ketiga pengumpul-daur ulang (third-party recycler, TPR)**.

JIANG Lin dan TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) mengidentifikasi dua jalur valorisasi RPB yang selama ini dianggap biner namun sebenarnya saling komplementer: **(i) echelon utilization (pemanfaatan bertingkat)** — penggunaan baterai EV dengan State of Health (SoH) 70–80% pada aplikasi sekunder seperti *stationary energy storage system* (SESS) atau lampu jalan pintar; dan **(ii) recycling remanufacturing** — ekstraksi material kritis (Li, Co, Ni) melalui proses hidrometalurgi/pirometalurgi. Optimalisasi kedua jalur ini dalam satu kerangka CLSC merupakan kebaruan utama paper tersebut, karena mayoritas literatur terdahulu (mis. Guide & Van Wassenhove, 2009) hanya memodelkan satu jalur回收.

Urgensi operasional makin diperkuat oleh **regulasi Extended Producer Responsibility (EPR)** yang berlaku di Uni Eropa (*Battery Regulation 2023/1542*) dan praktik serupa di China, Jepang, dan Korea Selatan. Produsen tidak hanya bertanggung jawab atas mutu produk baru, tetapi juga atas pengembalian, pengumpulan, dan valorisasi baterai bekas. Tanpa strategi CLSC yang robust, biaya kepatuhan EPR dapat menggerus margin hingga 8–12% dari *unit economics* EV (Shin, Kim, & Jeong, 2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)).

Dalam konteks Indonesia, di mana adopsi EV masih pada fase awal tetapi ekosistem manufaktur baterai (terutama di Morowali, Halmahera, dan Batang) sedang dibangun, lesson learned dari paper JIANG-TANG dan SHIN-KIM-JEONG menjadi **kritis untuk desain kebijakan nasional** sebelum terjadi *lock-in* pada model linear yang sulit diretrofit. Dokumen ini menyusun formulasi matematis, SOP rekayasa, dan studi kasus kuantitatif yang dapat diadaptasi oleh akademisi, konsultan, dan pengambil kebijakan di sektor manufaktur baterai Indonesia.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CLSC Tiga-Eselon dengan Pemanfaatan Bertingkat

Model JIANG & TANG (2025) membangun **game Stackelberg tiga-tingkat (three-echelon Stackelberg game)** dengan struktur berikut:

- **Tingkat 1 (Leader):** Manufaktur OEM, memutuskan *harga grosir* $w$, *laju pengumpulan* $\theta$, dan *laju konversi ke echelon* $\tau$.
- **Tingkat 2 (Follower Tier-1):** Retailer, memutuskan *harga eceran* $p$ dan *insentif konsumen* $s$ untuk mendorong pengembalian baterai.
- **Tingkat 3 (Follower Tier-2):** Recycler TPR, memutuskan *harga beli baterai bekas* $b_r$ dan *alokasi daur ulang vs. remanufaktur* $\eta$.

### 2.2 Fungsi Permintaan dan Konversi Echelon

Permintaan terhadap baterai baru dipengaruhi harga eceran dan persepsi konsumen atas program echelon (efek *green goodwill*):

$$D(p, \tau) = a - b\,p + \lambda\,\tau, \quad 0 \le \tau \le 1 \tag{1}$$

di mana $a > 0$ adalah potensi pasar, $b > 0$ adalah sensitivitas harga, dan $\lambda > 0$ adalah koefisien loyalitas green-brand.

Laju echelon utilization dimodelkan sebagai fungsi dari laju pengumpulan dan kualitas baterai:

$$\tau = \theta \cdot \eta \tag{2}$$

dengan $\eta \in [0,1]$ merepresentasikan fraksi baterai yang lolos uji SoH $\geq$ 70% dan layak untuk aplikasi sekunder.

### 2.3 Fungsi Profit Tiap Stakeholder

**Profit Manufaktur:**

$$\Pi_M = (w - c_m) D + (p_e - c_e) \tau D - c_c \theta D - c_i s^2/2 \tag{3}$$

dengan $c_m$ biaya produksi, $p_e$ harga jual echelon (SESS), $c_e$ biaya konversi echelon, $c_c$ biaya pengumpulan, dan $c_i s^2/2$ adalah biaya program insentif konsumen (konveks kuadratik untuk memastikan well-behaved optimum).

**Profit Retailer:**

$$\Pi_R = (p - w) D - s D + \pi_{bs}\, \theta D \tag{4}$$

dengan $\pi_{bs}$ adalah *bonus service fee* yang diterima retailer dari manufaktur per unit baterai yang berhasil dikumpulkan (diadopsi dari paper SHIN et al., 2024).

**Profit Recycler:**

$$\Pi_{Rec} = (p_m - b_r - c_d) (1-\eta) \theta D + (p_r - b_r - c_e) \eta \theta D \tag{5}$$

di mana $p_m$ harga jual material daur ulang, $c_d$ biaya proses daur ulang, $p_r$ harga jual baterai remanufaktur, dan $c_e$ biaya proses remanufaktur.

### 2.4 Prosedur Solusi: Backward Induction

Karena game bersifat *sequential* (manufaktur lebih dulu mengumumkan keputusan, retailer dan recycler merespons), solusi equilibrium diperoleh melalui **backward induction**. Subgame retailer menghasilkan:

$$\frac{\partial \Pi_R}{\partial p} = 0 \implies p^*(w, \tau, \theta) = \frac{a + b\,w + \lambda \tau + s}{2b} \tag{6}$$

Subgame recycler menghasilkan kondisi first-order:

$$\frac{\partial \Pi_{Rec}}{\partial b_r} = 0 \implies b_r^*(\eta, \theta, p_m, p_r) = \frac{p_m(1-\eta) + (p_r - c_e)\eta - c_d}{2} \tag{7}$$

Substitusi ke fungsi profit manufaktur menghasilkan masalah optimasi dua-variabel $(w, \tau)$ yang diselesaikan secara analitik atau dengan algoritma *gradient descent* jika domain tidak konveks.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Operasional CLSC Baterai

JIANG & TANG (2025) menyusun SOP tujuh-langkah untuk implementasi CLSC dengan echelon utilization:

1. **Registrasi Baterai (Battery Passport)** — Setiap unit baterai diberi *digital twin* berbasis blockchain sesuai ISO/IEC 21434:2021, mencakup kimia sel, kapasitas awal, siklus pengisian, dan tanggal produksi.
2. **Penentuan Titik Pengumpulan (Collection Points)** — Lokasi reverse logistics ditempatkan di *authorized service center* OEM dengan radius ≤ 50 km dari konsumen akhir (prinsip proximity).
3. **Diagnosis State of Health (SoH)** — Pengujian kapasitas retensi dan *internal resistance* menggunakan protocol IEC 62933-2-1.
4. **Sorting Decision Gate** — Bifurkasi: SoH ≥ 80% → *echelon utilization*; SoH 60–80% → *remanufacturing*; SoH < 60% → *material recycling*.
5. **Echelon Deployment** — Baterai second-life di-*pack* ulang dan digunakan pada aplikasi SESS dengan warranty 5 tahun.
6. **Material Recovery Loop** — Proses hidrometalurgi (leaching dengan H₂SO₄ + H₂O₂) menghasilkan *black mass* yang dikembalikan ke lini produksi OEM.
7. **Performance Feedback Loop** — Data field dikembalikan ke tim R&D untuk perbaikan *cell chemistry* generasi berikutnya (*closed-loop learning*).

### 3.2 Arsitektur Teknologi (IT/OT Integration)

Sistem CLSC membutuhkan integrasi tiga lapis:

- **Lapis Data:** Battery Management System (BMS) → IoT Gateway → Cloud (AWS IoT Core / Azure Digital Twins).
- **Lapis Analitik:** Algoritma SoH prediction (Long Short-Term Memory / LSTM), model optimasi Stackelberg (Gurobi / CPLEX solver).
- **Lapis Bisnis:** Dashboard ERP-SAP terintegrasi dengan modul Sustainability Reporting (GRI 306).

Diagram alur keputusan dapat diformulasikan sebagai *state machine*:

$$S_{t+1} = f(S_t, \theta_t, \eta_t, \text{SoH}_t) \tag{8}$$

dengan state $S_t \in \{\text{New, In-Use, Returned, Sorted, Echelon, Remanufaktur, Recycled}\}$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Parameter (Tipe EV Mid-size B-segment, China Market)

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Potensi pasar | $a$ | 50.000 | unit/tahun |
| Sensitivitas harga | $b$ | 500 | unit/(juta Rp) |
| Koefisien green loyalty | $\lambda$ | 1.200 | unit |
| Biaya produksi | $c_m$ | 1,8 | juta Rp/unit |
| Biaya pengumpulan | $c_c$ | 0,3 | juta Rp/unit |
| Biaya konversi echelon | $c_e$ | 0,5 | juta Rp/unit |
| Harga jual echelon | $p_e$ | 1,2 | juta Rp/unit |
| Harga jual material daur ulang | $p_m$ | 0,8 | juta Rp/unit |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
