# 2261 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Daya Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global, yang diproyeksikan menembus 145 juta unit pada 2030 (IEA, 2024), menimbulkan konsekuensi strategis berupa "tsunami baterai pensiun" (*retired battery wave*). baterai litium-ion (LIB) dengan kapasitas awal antara 50–100 kWh per unit EV umumnya mencapai *end-of-first-life* (EoFL) ketika State of Health (SoH) turun di bawah 70–80%, yang dalam konteks operasional armada taksi dan *ride-hailing* di Tiongkok terjadi pada usia 4–6 tahun (JIANG & TANG, 2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)). Tanpa strategi rantai pasok tertutup (CLSC) yang terkoordinasi, baterai-baterai tersebut akan berakhir di *landfill* atau *informal recycling*, menimbulkan risiko pencemaran kobalt, nikel, dan elektrolit organik yang nilainya secara *recoverable materials* ditaksir mencapai USD 100 miliar pada 2030 (World Economic Forum, *Circular Cars Initiative*, 2023).

Urgensi riset yang diidentifikasi JIANG & TANG (2025) muncul dari struktur keputusan yang saling bertentangan (*conflicting objectives*): di satu sisi, manufaktur baterai baru membutuhkan ekstraksi litium dan grafit dengan *carbon footprint* 150–200 kg CO₂eq/kWh; di sisi lain, keputusan pemilik armada (agen *forward*) untuk mengirimkan baterai bekas ke pemanfaatan bertingkat (*echelon utilization*, misalnya *second-life* sebagai *stationary energy storage*/SES) versus *direct recycling* (ekstraksi material langsung) memiliki struktur payoff yang berbeda dengan operator daur ulang (agen *reverse*). Permasalahan ini menjadi semakin kompleks ketika *battery heterogeneity* (variasi kapasitas, impedansi internal, dan siklus hidup) membatasi kelayakan teknis baterai untuk jalur penggunaan kedua tertentu. Shin, Kim, dan Jeong (2024) melengkapi landasan ini dengan kerangka *Return Management System* (RMS) yang robust terhadap ketidakpastian permintaan (*demand uncertainty*) dan kualitas baterai kembali, yang menjadi referensi krusial bagi desain CLSC berbasis ekonomi sirkular (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)).

Dari perspektif regulasi, *Extended Producer Responsibility* (EPR) yang diadopsi Uni Eropa melalui *Battery Regulation 2023/1542* dan *China's Interim Measures on New Energy Vehicle Power Battery Recycling* (工信部, 2018) secara eksplisit mengharuskan OEM membangun jaringan CLSC. Namun, menurut JIANG & TANG (2025), implementasi EPR menghadapi tiga tantangan operasional: (i) ketidakpastian *recovery yield* yang fluktuatif antara 60–92% tergantung teknologi hidrometalurgi versus pirometalurgi; (ii) *price volatility* material kritis yang menciptakan selisih biaya opportunity cost antara *echelon utilization* dan *direct recycling*; serta (iii) fragmentasi jaringan收集 (*collection network*) yang menghambat pencapaian *economies of scale* pada fasilitas daur ulang. Konteks ini menjadikan studi JIANG & TANG (2025) dan Shin et al. (2024) sebagai referensi fundamental bagi insinyur industri yang merancang strategi CLSC baterai pensiun.

## 2. Landasan Teori & Formulasi Matematis

JIANG & TANG (2025) mengusulkan model keputusan dua tingkat (*bi-level programming*) di mana *manufacturer* (pabrikan OEM) sebagai pemimpin (*leader*) menentukan harga收购 (*acquisition price*) dan alokasi baterai pensiun, sementara operator *echelon* (misalnya operator SES) dan *recycler* sebagai pengikut (*follower*) memutuskan kuantitas参与 dalam setiap jalur. Formulasi ini dibangun di atas struktur *Stackelberg-Nash-Stackelberg* untuk menangkap interaksi strategis antarpelaku CLSC.

### 2.1 Notasi Himpunan dan Parameter

Misalkan $\mathcal{B} = \{1,2,\dots,B\}$ adalah himpunan baterai pensiun dengan kapasitas残存 $c_b$ (kWh) dan SoH $s_b \in [0,1]$ untuk masing-masing baterai $b$. Himpunan jalur pemanfaatan didefinisikan sebagai $\mathcal{J} = \{j_1, j_2, j_3\}$, berturut-turut merepresentasikan *echelon utilization* (SES), *remanufacturing* (refabrikasi menjadi baterai baru dengan degradasi lebih rendah), dan *recycling* (ekstraksi material). Parameter-parameter kunci meliputi:

- $p_j$ : harga jual output jalur $j$ (USD/kWh), dengan $p_{j_1} = 180$, $p_{j_2} = 220$, $p_{j_3} = 35$ (untuk black mass Ni-Co)
- $c_j$ : biaya proses jalur $j$ (USD/kWh), $c_{j_1} = 45$, $c_{j_2} = 90$, $c_{j_3} = 15$
- $\eta_j$ : *recovery efficiency* jalur $j$, $\eta_{j_1} = 0.75$, $\eta_{j_2} = 0.85$, $\eta_{j_3} = 0.92$
- $\alpha_b$ : koefisien kelayakan teknis baterai $b$ terhadap jalur $j_1$, dengan $\alpha_b = 1$ jika $s_b \geq 0.7$ dan kapasitas $\geq 30$ kWh, selain itu $\alpha_b = 0$

### 2.2 Fungsi Objektif Tingkat Atas (Manufacturer Leader)

Produsen OEM memaksimalkan:

$$\max_{w_a} \Pi_M = \sum_{b \in \mathcal{B}} \sum_{j \in \mathcal{J}} \left[ (p_{j} - c_j)\eta_j \cdot x_{bj} \cdot \alpha_{bj} - w_a \cdot q_b \right] - C_{log}$$

di mana $w_a$ adalah *acquisition price* (USD/kWh) yang ditawarkan OEM kepada pemilik baterai, $q_b = c_b \cdot s_b$ adalah kapasitas utilisable baterai $b$, $x_{bj}$ adalah variabel keputusan alokasi (biner, $\sum_j x_{bj} = 1$), dan $C_{log}$ adalah biaya logistik jaringan收集-distribusi. Batasan kapasitas OEM:

$$\sum_{b \in \mathcal{B}} c_b \cdot x_{bj} \leq K_j \quad \forall j \in \mathcal{J}$$

dengan $K_j$ adalah kapasitas fasilitas jalur $j$.

### 2.3 Fungsi Objektif Tingkat Bawah (Followers)

Operator *echelon* memaksimalkan $\Pi_E = \sum_b (p_{j_1} - c_{j_1}) \eta_{j_1} \alpha_b q_b \cdot x_{b,j_1} - \pi_E$, sementara *recycler* memaksimalkan $\Pi_R = \sum_b (p_{j_3} - c_{j_3}) \eta_{j_3} q_b \cdot x_{b,j_3} - \pi_R$. Model robust Shin et al. (2024) menambahkan *budget of uncertainty* $\Gamma$ untuk mengakomodasi fluktuasi kualitas baterai kembali:

$$\tilde{\alpha}_b = \alpha_b + \xi_b, \quad \xi_b \in [-\delta_b, +\delta_b], \quad \sum_b |\xi_b|/q_b \leq \Gamma$$

yang menjamin solusi tetap *feasible* untuk seluruh realisasi ketidakpastian dalam *uncertainty set* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)).

### 2.4 Kondisi KKT dan Solusi

Dengan menyubstitusikan kondisi KKT tingkat bawah ke fungsi Lagrangian tingkat atas, JIANG & TANG (2025) merumuskan masalah ekuivalen Mixed-Integer Linear Programming (MILP) yang diselesaikan dengan algoritma *branch-and-bound* dengan *big-M* formulation. Kompleksitas komputasional berada pada orde $\mathcal{O}(B^2 \cdot |\mathcal{J}|)$ per iterasi, dengan *runtime* kurang dari 240 detik untuk $B = 500$ pada CPU Intel Xeon 3.0 GHz.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari strategi CLSC baterai pensiun mengikuti kerangka SOP 8-tahap yang disintesiskan dari JIANG & TANG (2025) dan divalidasi terhadap kerangka robust Shin et al. (2024):

**Tahap 1 — Registrasi & Digital Twin Baterai (Battery Passport)**
Setiap baterai EV dilengkapi *battery passport* berbasis blockchain sesuai standar ISO/IEC 21434 dan GBA (*Global Battery Alliance*). Data yang dicatat mencakup riwayat siklus (C-rate, DoD, suhu operasi) yang menjadi input algoritma *remaining useful life* (RUL) berbasis model $\hat{R}(t) = R_0 - \beta_1 N_{cyc} - \beta_2 \int T dt$.

**Tahap 2 — Penentuan End-of-First-Life (EoFL)**
Baterai diklasifikasikan退役 saat SoH $< 0.7$ atau resistansi internal $> 150\% \cdot R_0$, mengikuti standar GB/T 34014-2017 (Tiongkok) dan SAE J2997.

**Tahap 3 — Collection Network Optimization**
Jaringan收集 (*collection points*) dioptimasi menggunakan *maximal covering location problem* (MCLP) dengan fungsi tujuan:

$$\max \sum_{i \in \mathcal{I}} \omega_i \cdot y_i \quad \text{s.t.} \quad \sum_{j \in \mathcal{N}(i)} x_j \geq y_i, \quad \sum_{j} f_j x_j \leq B_{cap}$$

di mana $\mathcal{N}(i)$ adalah himpunan fasilitas dalam radius layanan $\leq 50$ km dari titik permintaan $i$.

**Tahap 4 — Diagnostic & Sorting**
Pengujian non-destruktif (ultrasonic, electrochemical impedance spectroscopy/EIS) mengestimasi SoH residual dengan akurasi $\pm 2.5\%$. Baterai diklasifikasikan ke Grade A (SoH $\geq 0.8$, layak *echelon*), Grade B ($0.7 \leq$ SoH $< 0.8$, layak *remanufacturing*), Grade C (SoH $< 0.7$, *recycling only*).

**Tahap 5 — Echelon Allocation & Repurposing**
Baterai Grade A dirakit ulang menjadi modul SES untuk aplikasi *peak shaving* atau *microgrid*. Konfigurasi mengikuti standar UL 1974 dan IEC 62933 untuk *second-life batteries*.

**Tahap 6 — Remanufacturing**
Baterai Grade B menjalani *cell-level screening*, penggantian sel yang degradasi $> 30\%$, dan *rebalancing* dengan kapasitas目标 90% kapasitas awal, mengikuti protokol UN R100 Rev.4 untuk kendaraan listrik.

**Tahap 7 — Recycling & Material Recovery**
Proses hidrometalurgi dengan *leaching efficiency* $\eta_{Ni} = 0.95$, $\eta_{Co} = 0.93$, $\eta_{Li} = 0.85$ menggunakan *green chemistry* (asam organik) sesuai EU *Critical Raw Materials Act*.

**Tahap 8 — Reverse Logistics & Closed-loop Closure**
Material yang diperoleh (NiSO₄, CoSO₄, Li₂CO₃) dialirkan ke *cathode precursor production* dengan traceability penuh, menutup loop CLSC.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah OEM di Provinsi Guangdong mengelola回收 1.000 unit baterai pensiun EV (model BYD e6, kapasitas awal $c_0 = 60$ kWh) dengan distribusi SoH residual sebagai berikut: 320 baterai Grade A (SoH rata-rata 0.78), 380 Grade B (0.72), dan 300 Grade C (0.65).

### Langkah 1: Kapasitas Utilisable Tiap Grade

Kapasitas utilisable tiap baterai: $q_b = c_0 \cdot s_b$.

- Grade A: $q_A = 60 \times 0.78 = 46.8$ kWh
- Grade B: $q_B = 60 \times 0.72 = 43.2$ kWh
- Grade C: $q_C = 60 \times 0.65 = 39.0$ kWh

Total utilisable: $320 \times 46.8 + 380 \times 43.2 + 300 \times 39.0 = 14.976 + 16.416 + 11.700 = 43.092$ MWh.

### Langkah 2: Optimasi Alokasi per Jalur

Dengan harga收购 OEM $w_a = 50$ USD/kWh dan kapasitas