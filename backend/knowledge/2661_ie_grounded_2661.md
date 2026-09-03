# 2661 — Strategi Closed-Loop Supply Chain Baterai Bekas: Integrasi Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi kendaraan listrik (Electric Vehicle/EV) global telah menciptakan tantangan rekayasa industri yang sangat mendesak terkait siklus hidup baterai litium-ion pasca-penggunaan. Berdasarkan laju adopsi EV yang diproyeksikan oleh IEA (International Energy Agency), lebih dari 145 juta unit EV akan beredar di jalan raya global pada tahun 2030, sehingga menghasilkan volume *retired power battery* (baterai daya退役/afkir) yang masif. JIANG Lin dan TANG Lidan (2025) dalam paper berjudul *"Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing"* yang dipublikasikan pada *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* menegaskan bahwa tanpa strategi *closed-loop supply chain* (CLSC) yang matang, tumpukan baterai afkir akan menjadi bom waktu lingkungan dan beban ekonomi bernilai triliunan rupiah. DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068).

Urgensi operasional muncul dari karakteristik baterai yang tetap menyimpan kapasitas residual (State of Health/SoH 70–80%) setelah masa pakai otomotifnya berakhir. Hal ini membuka peluang *echelon utilization*—yakni penggunaan baterai pada aplikasi *second-life* seperti penyimpanan energi stasioner (stationary energy storage system/S-ESS), telekomunikasi backup, atau lampu jalan pintar—sebelum akhirnya masuk ke tahap *recycling* dan *remanufacturing* material. JIANG & TANG (2025) memformulasikan arsitektur keputusan multi-tingkat yang harus mengakomodasi tiga pelaku rantai pasok simultan: OEM baterai, operator *echelon*, dan *recycler*.

Konteks ini diperkuat oleh Youngchul Shin, Gwang Kim, dan Yoonjea Jeong (2024) dalam paper *"Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy"* (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) yang menunjukkan bahwa ketidakpastian tingkat pengembalian (*return rate*), fluktuasi harga material daur ulang (litium, kobalt, nikel), serta regulasi Extended Producer Responsibility (EPR) menuntut model CLSC yang *robust* (tahan terhadap variasi parameter). Kedua paper ini bersama-sama membentuk landasan bagi rekayasa rantai pasok sirkular untuk baterai daya.

Aspek ekonomi dari CLSC baterai sangat signifikan: pasar global *battery recycling* diproyeksi mencapai USD 23,7 miliar pada 2030 dengan CAGR 19,2%, sementara pasar *second-life battery* akan menyentuh USD 7,8 miliar. Tanpa strategi optimasi terintegrasi, pelaku industri menghadapi risiko inefisiensi alokasi material antara *echelon* dan *recycling*, sehingga diperlukan model keputusan kuantitatif seperti yang dikembangkan oleh JIANG & TANG (2025) dengan pendekatan *Stackelberg game* atau Mixed-Integer Linear Programming (MILP).

## 2. Landasan Teori & Formulasi Matematis

Model CLSC baterai afkir yang dikembangkan oleh JIANG & TANG (2025) mengintegrasikan tiga sub-sistem keputusan: **(a) tahap pengumpulan (*collection*)**, **(b) alokasi baterai ke *echelon utilization***, dan **(c) keputusan *recycling vs remanufacturing***. Formulasi matematis berikut dibangun berdasarkan struktur tipikal model bilevel/multilevel pada CLSC baterai.

### 2.1 Notasi Parameter

- $i \in \{O,R,E,M\}$: indeks pelaku, masing-masing OEM (*Original Equipment Manufacturer*), *Recycler*, *Echelon Operator*, dan *Remanufacturer*.
- $c_c$: biaya pengumpulan per unit baterai (transportasi + sortir).
- $c_e$: biaya retrofit untuk *echelon utilization* per unit.
- $c_r$: biaya proses daur ulang (hidrometalurgi) per unit.
- $c_m$: biaya remanufaktur per unit.
- $p_e$: harga jual *second-life battery pack*.
- $p_m$: harga jual *remanufactured battery pack*.
- $v_r$: nilai material yang dipulihkan (*recovered material value*) per unit baterai dari proses *recycling*.
- $Q$: total volume baterai afkir yang dikumpulkan.
- $\alpha_e, \alpha_r, \alpha_m$: fraksi alokasi baterai ke *echelon*, *recycling*, dan *remanufacturing*, dengan $\alpha_e + \alpha_r + \alpha_m = 1$.
- $\theta$: parameter ketidakpastian permintaan pasar *second-life* (sesuai Shin dkk., 2024).

### 2.2 Fungsi Objektif (Bilevel Stackelberg Game)

Sebagai *leader*, OEM baterai menentukan harga transfer $(w_r, w_m)$ dan tingkat pengumpulan, sementara *recycler* dan *remanufacturer* sebagai *follower* merespons dengan keputusan volume.

**Tingkat 1 (OEM — Maksimisasi Profit):**

$$\max_{w_r, w_m, \alpha} \Pi_O = (p_e \alpha_e - w_m \alpha_m - c_c) Q + (v_r - w_r) Q \alpha_r - C_{env}(\alpha)$$

dengan $C_{env}(\alpha)$ adalah fungsi penalti emisi karbon sesuai regulasi.

**Tingkat 2 (Recycler — sebagai Follower):**

$$\max_{\alpha_r} \Pi_R = (w_r - c_r - v_r^{loss}) Q \alpha_r$$

dengan $v_r^{loss}$ adalah losses proses daur ulang.

### 2.3 Model Robust (menurut Shin, Kim & Jeong, 2024)

Untuk mengatasi ketidakpastian $\theta$ terhadap *return rate* baterai, bentuk *robust counterpart* dari masalah optimasi CLSC adalah:

$$\min_{x \in X} \max_{\theta \in \mathcal{U}} \Pi(x, \theta)$$

di mana $\mathcal{U}$ adalah *uncertainty set* yang didefinisikan sebagai:

$$\mathcal{U} = \left\{ \theta : \sum_{k} |\theta_k - \bar{\theta}_k| \leq \Gamma, \; \underline{\theta}_k \leq \theta_k \leq \bar{\theta}_k \right\}$$

dengan $\Gamma$ adalah *budget of uncertainty* (parameter konservatisme pengambil keputusan).

### 2.4 Kendala Utama

$$\text{(Kapasitas Echelon)} \quad Q \alpha_e \leq K_e$$

$$\text{(Kapasitas Recycler)} \quad Q \alpha_r \leq K_r$$

$$\text{(Nilai Tambah Material)} \quad v_r \geq v_r^{min}$$

$$\text{(Batas SoH untuk Echelon)} \quad SoH \geq 0.70$$

$$\alpha_e + \alpha_r + \alpha_m = 1, \quad \alpha_i \geq 0$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai memerlukan arsitektur rekayasa industri yang prosedural. Berikut SOP 7-langkah yang disintesiskan dari kedua paper rujukan:

### Langkah 1: Penilaian State of Health (SoH)
Baterai afkir menjalani diagnostik menggunakan Pulse Power Test (PPT) dan Electrochemical Impedance Spectroscopy (EIS). Klasifikasi biner: **Grade A** (SoH ≥ 80%, layak remanufaktur langsung), **Grade B** (70% ≤ SoH < 80%, kandidat *echelon*), **Grade C** (SoH < 70%, langsung *recycling*).

### Langkah 2: Desain Jaringan Pengumpulan (*Reverse Logistics Network*)
JIANG & TANG (2025) mengusulkan *hub-and-sp