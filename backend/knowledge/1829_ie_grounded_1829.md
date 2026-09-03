# 1829 — Strategi Rantai Pasok Tertutup untuk Baterai Daya Pensiun: Pemanfaatan Bertingkat dan Perakitan Ulang Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global telah menciptakan paradoks lingkungan yang krusial di abad ke-21: di satu sisi, elektrifikasi transportasi menjadi pilar dekarbonisasi, namun di sisi lain, akumulasi baterai daya pensiun (state-of-health, SOH < 70–80%) menjadi tantangan logistik, ekologis, dan ekonomis yang masif. JIANG Lin dan TANG Lidan (2025), dalam proceedings *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* yang dipublikasikan dengan DOI [10.52202/078960-0068](https://doi.org/10.52202/078960-0068), secara eksplisit memposisikan baterai lithium-ion pensiun sebagai *strategic secondary resource* yang memerlukan desain *closed-loop supply chain* (CLSC) terpadu, mencakup dua subsistem kritis: **pemanfaatan bertingkat** (*echelon utilization* / *cascade utilization*) untuk aplikasi *second-life* seperti penyimpanan energi stasioner, dan **perakitan ulang daur ulang** (*recycling remanufacturing*) untuk recuperar material kritis (litium, kobalt, nikel). 

Konteks industri yang melatarbelakangi paper ini sangat relevan dengan agenda transformatif di Republik Rakyat China, Uni Eropa, dan Amerika Serikat. Di China saja, NEV (New Energy Vehicle)销量 menembus 8,87 juta unit pada 2023, dengan total baterai terpasang melebihi 350 GWh. Estimasi konservatif menunjukkan bahwa pada 2025, lebih dari 78.000 ton baterai pensiun akan memasuki fase *end-of-first-life*, menciptakan *reverse logistics* wajib yang belum tertangani secara optimal. Kompleksitas struktural bertambah karena baterai pensiun tidak homogen: ada yang masih layak untuk aplikasi *less-demanding* (penyimpanan energi grid, lampu jalan, telekomunikasi base station), dan ada yang harus langsung diarahkan ke *hydrometallurgical recycling*. Keputusan alokasi ini sensitif terhadap harga pasar material daur ulang, subsidi pemerintah, dan kapasitas fasilitas pengolahan.

Urgensi operasional dari riset JIANG & TANG (2025) diperkuat oleh kontribusi Youngchul Shin, Gwang Kim, dan Yoonjea Jeong (2024) dengan DOI [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197), yang menyoroti bahwa CLSC untuk ekonomi sirkular harus dirancang dengan **ketahanan terhadap ketidakpastian** (*robustness*)—mengingat variabilitas tingkat pengembalian, permintaan pasar sekunder, dan biaya pemrosesan. Integrasi kedua perspektif ini—strategi struktural JIANG & TANG dan pendekatan robust SHIN et al.—menjadi cetak biru penting bagi perancang rantai pasok baterai abad ke-21.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Baterai

Model JIANG & TANG (2025) membangun CLSC empat-tingkat: (1) **Collection Centers** (CC) yang menerima baterai pensiun dari OEM dan konsumen; (2) **Testing & Sorting Facilities** (TSF) yang melakukan karakterisasi SOH; (3) **Echelon Utilization Facilities** (EUF) untuk aplikasi *second-life*; dan (4) **Recycling Plants** (RP) untuk daur ulang material. Aliran baterai dari CC menuju TSF, lalu bercabang secara stokastik menuju EUF atau RP berdasarkan kapasitas residu.

### 2.2 Formulasi Optimasi Deterministik

Notasi parameter:

- $i \in I$: indeks *collection center*
- $j \in J$: indeks *testing & sorting facility*
- $k \in K$: indeks *echelon utilization facility*
- $m \in M$: indeks *recycling plant*
- $q_i$: jumlah baterai pensiun yang dikumpulkan di $i$ (unit)
- $\theta_j$: ambang batas SOH di TSF $j$ (fraksi)
- $c_i^{col}$: biaya koleksi per baterai di $i$ (CNY/unit)
- $c_j^{test}$: biaya pengujian di TSF $j$
- $c_k^{ech}$: biaya pemrosesan echelon di $k$
- $c_m^{rec}$: biaya daur ulang di $m$
- $p_k^{ech}$: harga jual produk echelon di $k$
- $p_m^{rec}$: nilai material recovered dari $m$
- $s$: subsidi pemerintah per unit baterai pensiun (CNY/unit)
- $\alpha$: fraksi baterai pensiun yang lolos ambang SOH (di luar ambang, dipakai sebagai *cut-off*)

**Fungsi tujuan:** memaksimumkan laba total CLSC:

$$\max \Pi = \sum_{k \in K} p_k^{ech} z_k + \sum_{m \in M} p_m^{rec} w_m + \sum_{i \in I} s \, q_i - \sum_{i \in I} c_i^{col} q_i - \sum_{j \in J} c_j^{test} u_j - \sum_{k \in K} c_k^{ech} z_k - \sum_{m \in M} c_m^{rec} w_m \tag{1}$$

dengan variabel keputusan:
- $z_k \geq 0$: jumlah baterai yang dialokasikan ke EUF $k$
- $w_m \geq 0$: jumlah baterai yang dialokasikan ke RP $m$
- $u_j \geq 0$: jumlah baterai yang diuji di TSF $j$
- $y_j \in \{0,1\}$: keputusan pembukaan TSF $j$
- $f_j$: biaya tetap pembukaan TSF $j$

**Kendala utama:**

$$\sum_{k \in K} z_k + \sum_{m \in M} w_m = \sum_{j \in J} u_j \quad \text{(konservasi aliran)} \tag{2}$$

$$z_k \leq