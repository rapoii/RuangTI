# 2389 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain)电池 Baterai Bekas Kendaraan Listrik: Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain dengan Integrasi Pemanfaatan Bertingkat (*Echelon Utilization*) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (*Electric Vehicle*/EV) global telah menciptakan tantangan rekayasa baru yang krusial di lini akhir-umur (*end-of-life*/EOL) baterai lithium-ion. Berdasarkan studi JIANG dan TANG (2025) yang dipublikasikan dalam proceeding ICLSE 2024 (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), peningkatan volume baterai *retired* (pensiun) dari armada EV secara masif menuntut re-desain total arsitektur rantai pasok. Baterai yang sudah tidak memenuhi standar performa otomotif (umumnya *State of Health*/SOH di bawah 80%) tidak seharusnya langsung masuk ke proses daur ulang material, karena masih menyimpan kapasitas energi residual yang signifikan untuk aplikasi sekunder. Inilah yang kemudian memunculkan konsep **pemanfaatan bertingkat** atau *echelon utilization* (梯次利用) — sebuah strategi kaskade nilai (*value cascade*) yang memaksimalkan utilisasi residual sebelum material benar-benar direcovery.

Konsep ini diperkuat oleh Shin, Kim, dan Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)), yang menekankan pentingnya membangun sistem *return management* yang robust untuk menjamin kontinuitas aliran balik (*reverse flow*) dalam ekonomi sirkular. Tanpa sistem pengembalian yang andal, baik pemanfaatan bertingkat maupun remanufaktur akan menghadapi ketidakpastian suplai yang menghambat skala ekonomi.

Urgensi strategis modul ini bersifat tiga-dimensi:

1. **Dimensional lingkungan:** baterai lithium-ion mengandung lithium, kobalt, dan nikel — logam kritis dengan jejak karbon ekstraktif tinggi. Pemanfaatan bertingkat dapat menunda *cradle-to-grave* footprint hingga 5–8 tahun per unit baterai.
2. **Dimensional ekonomi:** selisih biaya manufaktur baterai baru versus remanufaktur/echo-use mencapai 30–60%, memberikan *margin* signifikan bagi pelaku rantai pasok.
3. **Dimensional regulasi:** regulasi *Extended Producer Responsibility* (EPR) di Uni Eropa, Tiongkok, dan Indonesia mendorong manufaktur untuk bertanggung jawab atas pemulihan baterai.

Dengan demikian, desain CLSC yang mengintegrasikan tiga *sink* (echelon-use, remanufacturing, dan material recycling) bukan sekadar pilihan rekayasa, melainkan kebutuhan strategis yang didukung oleh keputusan *Stackelberg* antara manufaktur sebagai *leader* dan retailer/pengumpul sebagai *follower*.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC baterai bekas yang dikembangkan JIANG dan TANG (2025) menggunakan pendekatan **game teori dua tingkat** dengan struktur keputusan berurutan. Formulasi mengikuti perluasan model CLSC klasik (Savaskan, 2004) yang diperkaya dengan tiga *recovery channel* paralel.

### 2.1 Notasi Parameter

Misalkan:
- $a > 0$ = ukuran potensial pasar (intercept permintaan)
- $b > 0$ = sensitivitas harga (slope permintaan)
- $c_m$ = biaya produksi baterai baru (CNY/unit)
- $c_r$ = biaya remanufaktur baterai (CNY/unit)
- $c_e$ = biaya *echelon utilization* (CNY/unit)
- $c_g$ = biaya daur ulang material (CNY/unit)
- $\lambda \in (0,1]$ = tingkat pengumpulan (*collection rate*)
- $\alpha \in [0,1]$ = proporsi baterai bekas yang memenuhi syarat echelon-use
- $\beta \in [0,1]$ = proporsi baterai bekas yang memenuhi syarat remanufaktur
- $(1-\alpha-\beta)$ = proporsi baterai yang langsung masuk daur ulang material
- $w$ = harga grosir (*wholesale price*) yang ditetapkan manufaktur
- $p$ = harga eceran (*retail price*) yang ditetapkan retailer
- $p_e$ = harga jual produk echelon-use
- $p_n$ = harga jual produk remanufaktur
- $p_g$ = revenue daur ulang material (dari penjualan *black mass*)

### 2.2 Fungsi Permintaan

Permintaan primer baterai EV bersifat deterministik linier terhadap harga:

$$D(p) = a - b p, \quad a > 0, \; b > 0$$

### 2.3 Fungsi Profit Retailer

Retailer membeli dari manufaktur pada harga $w$ dan menjual ke konsumen pada harga $p$. Laba retailer adalah:

$$\pi_R(p) = (p - w)(a - b p) = (p - w) \cdot D(p)$$

### 2.4 Fungsi Profit Manufaktur (Channel Terintegrasi)

Manufaktur mengambil keputusan tingkat pertama (*leader*) dengan memperhitungkan tiga pendapatan residual dari reverse channel:

$$\pi_M(w) = (w - c_m)(a - b p) + \lambda(a - b p) \Big[ \alpha(p_e - c_e) + \beta(p_n - c_r) + (1-\alpha-\beta)(p_g - c_g) \Big]$$

### 2.5 Prosedur Backward Induction (Stackelberg Equilibrium)

Untuk menyelesaikan *Nash equilibrium*, dilakukan *backward induction*:

**Langkah 1:** Reaksi optimal retailer dengan mendiferensialkan $\pi_R$ terhadap $p$:

$$\frac{\partial \pi_R}{\partial p} = a - 2bp + bw = 0 \implies p^*(w) = \frac{a + b w}{2b}$$

**Langkah 2:** Substitusi $p^*(w)$ ke fungsi $\pi_M$, lalu diferensiasi terhadap $w$:

$$\frac{\partial \pi_M}{\partial w} = \frac{a - b w}{2} + \lambda \cdot \frac{a - b w}{2} \cdot \Big[ \alpha(p_e - c_e) + \beta(p_n - c_r) + (1-\alpha-\beta)(p_g - c_g) \Big] \cdot \frac{1}{2} = 0$$

Mengakomodasi koefisien回收收益 $\Phi$:

$$\Phi = \alpha(p_e - c_e) + \beta(p_n - c_r) + (1-\alpha-\beta)(p_g - c_g)$$

Maka *equilibrium wholesale price*:

$$w^* = \frac{a + b c_m - b \lambda \Phi}{2b}$$

Dan *equilibrium retail price*:

$$p^* = \frac{3a + b c_m + b \lambda \Phi}{4b}$$

### 2.6 Model Robust untuk Ketidakpastian (Shin et al., 2024)

Shin, Kim, dan Jeong (2024) menambahkan *robust optimization layer* guna menghadapi fluktuasi permintaan $\tilde{D} = a - bp + \epsilon$ dengan $\epsilon \in \mathcal{U}$ (uncertainty set). Fungsi objektif manufaktur menjadi:

$$\max_{w} \min_{\epsilon \in \mathcal{U}} \pi_M(w, \tilde{D}) - \rho \cdot \|\Gamma\|_2$$

di mana $\rho$ adalah parameter konservatisme (*robustness budget*) dan $\Gamma$ adalah himpunan kendala ketidakpastian. Pendekatan ini menjamin *feasibility* terhadap skenario terburuk (*worst-case scenario*) yang relevan untuk rantai pasok baterai dengan volatilitas harga lithium yang tinggi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas memerlukan SOP berlapis yang mengintegrasikan empat pilar: **identifikasi → pengumpulan → sortasi → redistribusi**. Berikut adalah arsitektur SOP yang diturunkan dari temuan JIANG & TANG (2025) dan diperkuat oleh kerangka *return management* Shin et al. (2024):

### 3.1 Tahap 1: Identifikasi & Registrasi Baterai

Setiap baterai EV yang diproduksi harus memiliki *Battery Passport* (sesuai EU Battery Regulation 2023/1542) yang mencatat:
- Kimia sel (NMC/LFP/NCA)
- Riwayat siklus (cycle count)
- Kapasitas tersisa ($\text{SOH}_i = C_i / C_{\text{nominal}}$)
- Geolokasi dan ownership chain

### 3.2 Tahap 2: Pengumpulan (Collection Network)

| Parameter | Spesifikasi |
|-----------|-------------|
| Jarak maks pengumpul ke konsumen | ≤ 50 km (urban) |
| Target $\lambda$ (collection rate) | ≥ 95% (regulasi EPR) |
| Moda transport | Insulated container, UN 3480 compliant |
| Interval inspeksi visual | Setiap 30 hari di hub |

### 3.3 Tahap 3: Sortasi Tiga Jalur (*Triaging*)

Aliran keputusan (*decision flow*) berikut berlaku di *sorting hub*:

```
[Baterai Masuk]
     │
     ▼
[SOH Test: Kapasitas & Internal Resistance]
     │
     ├── SOH ≥ 80% ──► [Re-use Otomotif] → Refurbish → Jual OEM
     │
     ├── 60% ≤ SOH < 80% ──► [Echelon Station]
     │       │
     │       ├── Resistansi internal OK ──► Stationary Storage (grid)
     │       └── Resistansi borderline ──► Low-power application (UPS, street light)
     │
     ├── 40% ≤ SOH < 60% ──► [Remanufacturing Plant]
     │       │
     │       └── Disassembly → Cell-level test → Re-pack ke modul baru
     │
     └── SOH < 40% ──► [Hydrometallurgical Recycling] → Black mass → Li/Co/Ni recovery
```

### 3.4 Tahap 4: Redistribusi & Penutupan Loop

Produk echelon-use dan remanufaktur memasuki pasar sekunder dengan *price discount* sebesar $\delta_e$ dan $\delta_r$ dari harga OEM baru. Dokumentasi *chain of custody* digital (DLT-based) menjamin *provenance* untuk audit ESG.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Ambil studi kasus sebuah OEM baterai di pasar Asia Timur, dengan parameter berikut (dimodifikasi dari JIANG & TANG, 2025):

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $a$ | 10.000 | unit/tahun |
| $b$ | 50 | unit/(CNY·tahun) |
| $c_m$ | 800 | CNY/unit |
| $c_r$ | 350 | CNY/unit |
| $c_e$ | 150 | CNY/unit |
| $c_g$ | 80 | CNY/unit |
| $\lambda$ | 0,75 | — |
| $\alpha$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
