# 1669 — Strategi Closed-Loop Supply Chain untuk Baterai Power Bekas: Echelon Utilization, Daur Ulang, dan Remanufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Closed-Loop Supply Chain (CLSC) Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global (Global EV Outlook IEA, 2024) telah menghasilkan tantangan rekayasa tingkat lanjut berupa pengelolaan *end-of-life* (EoL) baterai lithium-ion (LiB) dalam volume masif. JIANG Lin & TANG Lidan (2025) dalam makalah yang dipublikasikan pada *14th ICLSE* (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menekankan bahwa baterai *power* yang telah pensiun dari aplikasi otomotif (*retired EV batteries*) masih memiliki *state-of-health* (SoH) pada rentang 70–80%, sehingga secara teknis dan ekonomis layak dimanfaatkan kembali melalui skema **echelon utilization** (pemanfaatan bertingkat/berjenjang) sebelum akhirnya masuk ke tahap *recycling* material murni. Paradigma ini menuntut pergeseran strategi rantai pasok dari model *forward-only* menjadi **Closed-Loop Supply Chain (CLSC)** yang mengintegrasikan loop回收 balik, reproses, dan redistribusi.

Urgensi strategis topik ini bersifat tiga-dimensi: (i) dimensi lingkungan — pengurangan jejak karbon dan penumpukan limbah B3 (bahan berbahaya dan beracun); (ii) dimensi ekonomi — pemulihan material kritis seperti litium, kobalt, dan nikel yang memiliki volatilitas harga tinggi; serta (iii) dimensi regulasi — kepatuhan terhadap *Extended Producer Responsibility* (EPR) yang berlaku di Uni Eropa, Tiongkok, dan mulai diadopsi di Indonesia melalui PP No. 27/2020 dan roadmap *end-of-life vehicle* nasional. Tanpa arsitektur CLSC yang optimal, biaya logistik balik dapat mencapai 30–40% dari total biaya siklus hidup baterai, menggerus profitabilitas operator daur ulang.

Penelitian Youngchul Shin, Gwang Kim, dan Yoonjea Jeong (2024) yang diterbitkan di jurnal *peer-reviewed* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi kerangka ini dengan mengusulkan **model CLSC robust dengan sistem manajemen retur** untuk ekonomi sirkular, yang secara eksplisit memformulasikan ketidakpastian permintaan retur (*return uncertainty*) menggunakan himpunan ketidakpastian (*uncertainty set*) Box dan Budget. Kedua paper ini secara konvergen menjustifikasi kebutuhan akan model optimisasi kuantitatif yang menggabungkan keputusan echelon, remanufaktur, dan *recycling* di bawah kendala lingkungan dan ketidakpastian pasar.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Multi-Echelon

Model JIANG & TANG (2025) membangun jaringan CLSC dengan struktur hierarkis sebagai berikut:

- **Node hulu (OEM/Manufaktur):** produksi baterai baru $i \in I$
- **Node konsumen:** pengguna akhir (otomotif dan aplikasi stasioner)
- **Node pemulihan:** *Collection Centers* $c \in C$, *Echelon Utilization Facilities* $e \in E$, *Remanufacturing Plants* $r \in R$, *Recycling Plants* $d \in D$
- **Loop retrograde:** baterai EoL dialokasikan ke salah satu dari tiga *end-of-life pathways*: echelon, remanufaktur, atau daur ulang material.

### 2.2 Formulasi Model Mixed-Integer Linear Programming (MILP)

Fungsi tujuan memaksimalkan profit total CLSC (atau meminimalkan total biaya logistik), dengan variabel keputusan:
- $q_{ic}$ : aliran baterai baru dari OEM $i$ ke koleksi $c$
- $x_{ce}$ : alokasi baterai EoL dari koleksi ke fasilitas echelon $e$
- $y_{cr}$ : alokasi ke remanufaktur $r$
- $z_{cd}$ : alokasi ke daur ulang $d$
- $f_{e}^{\text{casc}}$ : output produk echelon (mis. *energy storage system*/ESS)
- $f_{r}^{\text{reman}}$ : output baterai remanufaktur
- $f_{d}^{\text{mat}}$ : output material kritis (Li, Co, Ni)

$$\max \Pi = \sum_{e} p_e^{casc} f_e^{casc} + \sum_{r} p_r^{reman} f_r^{reman} + \sum_{d} p_d^{mat} f_d^{mat} - \sum_{i,c} c_{ic}^{new} q_{ic} - \sum_{c,e} c_{ce}^{col} x_{ce} - \sum_{c,r} c_{cr}^{reman} y_{cr} - \sum_{c,d} c_{cd}^{recy} z_{cd}$$

dengan kendala kapasitas, keseimbangan aliran, dan batasan kualitas baterai (SoH ≥ 70% untuk echelon, 60–70% untuk remanufaktur, <60% untuk daur ulang material):

$$\sum_{e} x_{ce} + \sum_{r} y_{cr} + \sum_{d} z_{cd} = R_c \quad \forall c \in C \quad \text{(keseimbangan retur)}$$

$$\alpha_{\min}^{casc} R_c \leq \sum_{e} x_{ce} \leq \alpha_{\max}^{casc} R_c$$

$$f_e^{casc} \leq \eta_e^{casc} \sum_{c} x_{ce} \quad \text{(faktor konversi echelon)}$$

$$0 \leq x_{ce}, y_{cr}, z_{cd} \leq K_c$$

### 2.3 Model Robust untuk Ketidakpastian (Shin, Kim & Jeong, 2024)

Shin et al. (2024) memperkenalkan formulasi **robust counterpart** untuk menangani ketidakpastian laju retur $\tilde{R}_c$ yang berfluktuasi di sekitar nilai nominal $\bar{R}_c$:

$$\tilde{R}_c = \bar{R}_c + \hat{R}_c \cdot \zeta_c, \quad \zeta_c \in [-1, 1], \quad \sum_c |\zeta_c| \leq \Gamma$$

di mana $\Gamma$ adalah *budget of uncertainty*. Problem robust-nya menjadi:

$$\min_{x,y,z} \max_{\zeta \in \mathcal{U}} \sum_c c^{pen}_c \left( \tilde{R}_c - \sum_e x_{ce} - \sum_r y_{cr} - \sum_d z_{cd} \right)^+$$

yang diselesaikan melalui dekomposisi Bender atau formulasi *box-uncertainty* linearized menjadi MILP deterministik setara.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi strategi CLSC baterai EoL mengikuti kerangka 7-tahap berikut, distandarkan dari JIANG & TANG (2025) dan diperkuat oleh protokol *return management* Shin et al. (2024):

**Tahap 1 — Sensing & Collection Trigger:** Telemetri *battery management system* (BMS) mengirim data SoH real-time ke cloud platform OEM. Saat SoH < 80% atau *cycle life* > 80% kapasitas awal, sistem mengeluarkan *retrieval order* otomatis. Threshold mengikuti standar IEC 62933-2-1.

**Tahap 2 — Reverse Logistics Routing:** Armada *reverse logistics* di-dispatch dari *Collection Center* terdekat dengan algoritma *vehicle routing problem with time windows* (VRPTW) yang meminimasi emisi CO₂ per kg baterai terangkut.

**Tahap 3 — Disassembly & SoH Grading:** Baterai dibongkar ke modul dan sel individual. Pengujian kapasitas, impedansi, dan *thermal runaway* risk menentukan grade A/B/C.

**Tahap 4 — Allocation Decision (MILP Solver):** Sistem menjalankan model optimisasi Bagian 2 dengan *real-time data feeds* untuk memutuskan alokasi ke echelon/remanufaktur/recycling.

**Tahap 5 — Echelon Repackaging:** Modul grade A+B dirakit ulang menjadi *second-life battery energy storage system* (BESS) untuk aplikasi *behind-the-meter*, telekomunikasi, atau *microgrid*.

**Tahap 6 — Remanufacturing Loop:** Modul grade B+C menjalani *cell-level* replacement, *rebalancing*, dan uji kelayakan, kemudian kembali ke OEM sebagai baterai refurbished (dengan garansi residual).

**Tahap 7 — Material Recovery:** Sisa baterai grade C dan *production scrap* masuk ke *hydrometallurgical recycling* dengan target recovery rate ≥ 95% untuk Li/Co/Ni.

Diagram alir logika keputusan dapat direpresentasikan sebagai *decision tree* dengan *root node*: $\text{SoH}(b)$, *internal nodes*: kapasitas fasilitas dan demand ESS, *leaf nodes*: terminal pathway $\{E, R, D\}$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Sebuah OEM di Asia Tenggara mengelola 50.000 unit baterai EoL per tahun dengan karakteristik berikut:

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Laju retur tahunan | 50.000 unit | $R_c$ |
| Proporsi echelon-eligible (SoH 70-80%) | 35% | $\alpha^{casc}$ |
| Proporsi remanufaktur-eligible (SoH 60-70%) | 40% | $\alpha^{reman}$ |
| Proporsi recycle-only (<60%) | 25% | $\alpha^{recy}$ |
| Harga jual produk echelon (BESS) | \$120/unit | $p_e^{casc}$ |
| Harga jual baterai remanufaktur | \$80/unit | $p_r^{reman}$ |
| Harga jual material daur ulang | \$45/unit | $p_d^{mat}$ |
| Biaya pengumpulan | \$15/unit | $c_{ce}^{col}$ |
| Biaya remanufaktur | \$30/unit | $c_{cr}^{reman}$ |
| Biaya daur ulang | \$25/unit | $c_{cd}^{recy}$ |

### 4.2 Perhitungan Aliran Optimal

**Langkah 1: Alokasi EoL**
$$x_e = 0{,}35 \times 50.000 = 17.500 \text{ unit (echelon)}$$
$$y_r = 0{,}40 \times 50.000 = 20.000 \text{ unit (remanufaktur)}$$
$$z_d = 0{,}25 \times 50.000 = 12.500 \text{ unit (daur ulang)}$$

**Langkah 2: Asumsi faktor konversi (yield rate)**
- $\eta_e^{casc} = 0{,}92$ (8% loss saat repackaging)
- $\eta_r^{reman} = 0{,}85$ (15% scrap rate)
- $\eta_d^{recy} = 0{,}95$ (5% slag)

**Langkah 3: Output Pasar**
$$f_e^{casc} = 0{,}92 \times 17.500 = 16.100 \text{ BESS unit}$$
$$f_r^{reman} = 0{,}85 \times 20.000 = 17.000 \text{ refurbished battery}$$
$$f_d^{mat} = 0{,}95 \times 12.500 = 11.875 \text{ eq. unit material}$$

**Langkah 4: Pendapatan Kotor**
$$Rev = 16.100 \times 120 + 17.000 \times 80 + 11.875 \times 45$$
$$Rev = 1.932.000 + 1.360.000 + 534.375 = \$3.826.375$$

**Langkah 5: Biaya Proses Retrograde**
$$C_{retro} = 17.500 \times 15 + 20.000 \times 30 + 12.500 \times 25$$
$$C_{retro} = 262.500 + 600.000 + 312.500 = \$1.175.000$$

**Langkah 6: Profit Bersih CLSC**
$$\Pi = 3.826.375 - 1.175.000 = \$2.651
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
$
