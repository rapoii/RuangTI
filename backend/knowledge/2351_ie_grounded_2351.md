# 2351 — Redesain Rakitan Produk Industri menggunakan Metodologi Design for Manufacture and Assembly (DFMA): Sintesis Rekayasa, Formulasi Kuantitatif, dan Aplikasi Lintas Sektor Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (Universitas Merdeka Malang)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tekanan kompetisi yang semakin masif dari tiga dimensi simultan: waktu peluncuran produk (time-to-market), biaya produksi (production cost), dan kualitas fungsional (functional quality). Dalam kerangka *Concurrent Engineering*, keputusan desain yang diambil pada fase konseptual menyumbang hingga 70–80% dari total *life-cycle cost* sebuah produk, sementara hanya 20% dari biaya tersebut yang telah ter-commit secara aktual (Boothroyd, Dewhurst & Knight, 2010). Realitas ini menjadi titik pijak utama bagi Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) untuk melakukan redesain pada **Coffee Enema Basket** — sebuah perangkat medis-alternatif yang digunakan dalam prosedur hidroterapi kolon — dengan mengaplikasikan metodologi **Design for Manufacture and Assembly (DFMA)**.

Permasalahan fundamental yang melatarbelakangi penelitian ini adalah belum optimalnya geometri, jumlah komponen, dan urutan perakitan pada produk eksisting. Produk medis-alternatif semacam ini mensyaratkan tiga karakteristik sekaligus: (1) higienitas tinggi karena kontak langsung dengan jaringan biologis, (2) kemampuan manufaktur dengan toleransi presisi menggunakan material stainless steel food-grade, dan (3) efisiensi perakitan agar biaya produksi massal dapat ditekan tanpa mengorbankan keamanan pasien. Ketidaksesuaian desain eksisting terhadap ketiga syarat tersebut pada akhirnya akan meningkatkan *scrap rate*, memperpanjang *cycle time*, dan menurunkan *Design for Assembly (DFA) index*.

Di sisi lain, Mubashir Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam studi konstruksi jembatan prefabrikasi menunjukkan bahwa integrasi DFMA dengan platform **Building Information Modelling (BIM)** mampu mencegah *buildability problems* yang biasanya baru terdeteksi saat shop-drawing production atau fase erection di lapangan — saat desain telah *frozen* dan koreksi hanya mungkin dilakukan dengan biaya tinggi. Paralelisme antara kedua domain (perangkat medis skala kecil vs. struktur jembatan skala besar) menunjukkan bahwa DFMA adalah metodologi *domain-invariant* yang esensinya terletak pada transformasi informasi desain menjadi keputusan manufaktur dan perakitan yang *lean*, *robust*, dan *scalable*.

Urgensi ekonomis dari penerapan DFMA juga tak terbantahkan: menurut literatur manufaktur, setiap pengurangan satu bagian komponen pada rakitan dapat menurunkan biaya perakitan sebesar 3–7%, sedangkan setiap detik penghematan *assembly time* pada lini produksi massal (volume > 10.000 unit/tahun) berpotensi menghemat hingga puluhan juta rupiah per tahun. Oleh karena itu, studi redesain oleh Amirullah dan Jakaria (2024) tidak hanya bernilai akademis, tetapi juga memiliki implikasi manajerial yang langsung terukur pada *bottom-line* perusahaan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual DFMA

DFMA merupakan integrasi dua sub-metodologi yang saling komplementer:

- **Design for Manufacture (DFM):** optimalisasi desain agar produk dapat difabrikasi dengan proses manufaktur tertentu secara efisien, dengan mempertimbangkan material, proses pembentukan, toleransi, dan *tooling*.
- **Design for Assembly (DFA):** optimalisasi desain agar produk dapat dirakit dengan jumlah komponen minimum, operasi perakitan minimum, dan orientasi *self-locating* / *self-fastening*.

### 2.2 Formulasi *Design Efficiency* (Boothroyd-Dewhurst)

Indeks efisiensi desain secara matematis diformulasikan oleh Boothroyd, Dewhurst dan Knight sebagai berikut:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{a,min}}{N_a \cdot t_a} \times 100\%$$

di mana:

- $\eta_{DFA}$ = efisiensi desain untuk perakitan (*Design Efficiency*, %)
- $N_{min}$ = jumlah minimum teoritis komponen yang dibutuhkan untuk memenuhi fungsi utama produk
- $t_{a,min}$ = waktu perakitan minimum teoritis per komponen (detik)
- $N_a$ = jumlah aktual komponen dalam desain
- $t_a$ = waktu perakitan aktual total (detik)

Nilai $\eta_{DFA} < 60\%$ mengindikasikan desain perlu redesain secara radikal, sedangkan $\eta_{DFA} \geq 90\%$ merepresentasikan desain yang sudah mendekati optimal.

### 2.3 Formulasi Biaya Manufaktur Total

Untuk komponen individu, biaya manufaktur total diformulasikan sebagai:

$$C_{m,i} = C_{mat,i} + C_{proc,i} + C_{tool,i} + \frac{C_{overhead}}{N_{batch}}$$

di mana:

- $C_{m,i}$ = total biaya manufaktur komponen ke-$i$ (Rp/unit)
- $C_{mat,i}$ = biaya material komponen ke-$i$ (Rp/unit)
- $C_{proc,i}$ = biaya proses (machining, forming, injection, stamping) komponen ke-$i$ (Rp/unit)
- $C_{tool,i}$ = alokasi biaya *tooling* (Rp/unit, diamortisasi)
- $C_{overhead}$ = biaya overhead pabrik (Rp)
- $N_{batch}$ = jumlah unit per batch produksi

### 2.4 Formulasi *Assembly Cost*

Untuk sistem rakitan secara keseluruhan:

$$C_a = \sum_{i=1}^{N_a} \left( C_{m,i} + t_{a,i} \cdot R_l \right)$$

di mana:

- $C_a$ = total biaya produksi per unit rakitan (Rp/unit)
- $t_{a,i}$ = waktu perakitan komponen ke-$i$ (detik)
- $R_l$ = *labor rate* operator lini perakitan (Rp/detik)
- $N_a$ = jumlah aktual komponen

### 2.5 Formulasi *Manufacturing Complexity Index*

Kompleksitas manufaktur suatu komponen dapat diukur melalui:

$$MCI_i = \alpha \cdot \frac{n_{ops}}{n_{ops,ref}} + \beta \cdot \frac{T_{tol,i}}{T_{tol,ref}} + \gamma \cdot \frac{k_{setup,i}}{k_{setup,ref}}$$

di mana $n_{ops}$ = jumlah operasi proses, $T_{tol}$ = keketatan toleransi, $k_{setup}$ = jumlah *setup*, dan $\alpha + \beta + \gamma = 1$ adalah bobot relatif yang ditentukan oleh analisis AHP.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Sistematis DFMA (SOP Adaptif Amirullah & Jakaria, 2024)

Berdasarkan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309), prosedur DFMA yang diterapkan pada redesain Coffee Enema Basket mengikuti alur berikut:

**Tahap 1 — Analisis Produk Eksisting (*As-Is Analysis*)**
- Dekomposisi struktural produk menjadi *Bill of Materials* (BOM) multi-level.
- Identifikasi fungsi setiap komponen menggunakan *function analysis* (FAST diagram).
- Pengukuran $N_a$ aktual, $t_a$ aktual, dan biaya produksi eksisting sebagai *baseline*.

**Tahap 2 — Penerapan Prinsip DFA (Boothroyd Method)**
- Evaluasi setiap komponen terhadap tiga kriteria eliminasi Boothroyd: (i) apakah komponen bergerak relatif terhadap komponen lain selama operasi?, (ii) apakah komponen harus terbuat dari material berbeda?, (iii) apakah komponen harus dipisahkan untuk memungkinkan perakitan/pembongkaran komponen lain?
- Jika seluruh jawaban "tidak", maka komponen layak dikonsolidasikan atau dieliminasikan.

**Tahap 3 — Penerapan Prinsip DFM**
- Seleksi proses manufaktur optimal: *sheet metal forming* untuk badan basket, *stamping* untuk plat perforasi, dan *laser cutting* untuk kerangka.
- Optimisasi toleransi geometris menggunakan prinsip *Taylor's Tolerance Stack-Up* untuk menjamin *interchangeability* dan *key characteristic* medis.

**Tahap 4 — Redesain dan Sintesis Alternatif**
- Generate minimal 3 alternatif desain geometris.
- Penentuan alternatif optimum melalui *weighted scoring* terhadap kriteria: jumlah komponen, waktu perakitan, biaya produksi, dan higienitas.

**Tahap 5 — Validasi dan Implementasi**
- Pembuatan prototipe menggunakan *rapid prototyping* (3D printing SLS untuk verifikasi geometri).
- *Pilot run* lini perakitan untuk verifikasi $t_a$ aktual dan *first-pass yield*.

### 3.2 Diagram Alir Logika DFMA

```
┌──────────────────────────┐
│  Identifikasi Produk &   │
│  Fungsi Utama            │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Dekomposisi BOM &       │
│  FAST Diagram            │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Hitung N_a, t_a aktual  │  ──► Baseline C_a^(0)
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Evaluasi 3 Kriteria     │
│  Boothroyd per komponen  │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Eliminasi/Konsolidasi   │  ──► Tentukan N_min
│  Komponen                │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Redesain Geometris &    │
│  Seleksi Proses DFM      │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Hitung η_DFA & C_a baru │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Prototipe & Pilot Run   │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Validasi & Standarisasi │
└──────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Coffee Enema Basket

Coffee Enema Basket adalah perangkat berbentuk silinder berlubang yang berfungsi sebagai *filter* dan *holder* bubuk kopi dalam prosedur hidroterapi kolon. Produk eksisting dirancang dari 8 komponen utama: badan silinder (1), dasar berlubang (1), pegangan lateral (2), pengunci ulir (1), ring penjepit (1), tutup atas (1), dan sambungan ulir (1).

### 4.2 Input Parameter (Baseline Eksisting)

| Parameter | Nilai Awal |
|-----------|------------|
| $N_a$ (jumlah aktual komponen) | 8 |
| $t_a$ (waktu perakitan aktual) | 285 detik/unit |
| $R_l$ (labor rate) | Rp 50/detik |
| $C_{mat}$ total | Rp 32.500/unit |
| $C_{proc}$ total | Rp 18.200/unit |
| $C_{tool}$ alokasi | Rp 4.300/unit |
| $C_{overhead}/N_{batch}$ | Rp 6.500/unit |

### 4.3 Perhitungan Step-by-Step Redesain

**Langkah 1 — Hitung biaya eksisting menggunakan persamaan (4):**

$$C_a^{(0)} = \sum_{i=1}^{8} \left( C_{m,i} + t_{a,i} \cdot R_l \right)$$

Dengan distribusi komponen pada tabel aktual,