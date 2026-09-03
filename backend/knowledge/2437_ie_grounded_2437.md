# 2437 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Daur Ulang Remanufaktur Baterai Daya Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Closed-Loop Supply Chain dengan Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Baterai Daya Pensiun (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global yang diproyeksikan menembus lebih dari 45 juta unit pada 2030 (IEA, 2024) menciptakan tantangan operasional yang belum pernah terjadi sebelumnya dalam pengelolaan *end-of-life* (EoL) baterai lithium-ion (LiB). Baterai daya kendaraan listrik, yang umumnya memiliki kapasitas retensi 70–80% setelah 8–10 tahun operasi, tidak lagi memenuhi standar otomotif namun masih menyimpan 50–70% kapasitas energi yang secara teknis dapat dimanfaatkan untuk aplikasi stasioner—fenomena yang dalam literatur Teknik Industri dan Operasi dikenal sebagai *echelon utilization* atau *second-life application* (JIANG & TANG, 2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)). Permasalahan ini menjadi sangat strategis karena tiga tekanan simultan: (i) tekanan regulasi Extended Producer Responsibility (EPR) di Uni Eropa, Tiongkok, dan Korea Selatan yang mengalihkan tanggung jawab pengumpulan ke Original Equipment Manufacturer (OEM); (ii) tekanan ekonomis terkait fluktuasi harga litium, kobalt, dan nikel yang membuat *urban mining* semakin kompetitif; serta (iii) tekanan lingkungan berupa target *carbon-neutrality* 2060 yang mengharuskan penurunan emisi *Scope 3* dari rantai pasok.

JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menyoroti urgensi pengembangan strategi *closed-loop supply chain* (CLSC) yang secara eksplisit mengintegrasikan keputusan antara pemanfaatan bertingkat (*echelon*) dan daur ulang material (*recycling-remanufacturing*). Ketiadaan strategi terintegrasi ini, menurut penulis, menyebabkan tiga inefisiensi utama di industri: pertama, OEM cenderung memilih satu jalur disposal (recycling saja atau echelon saja) tanpa optimasi bersama, sehingga *recovery value* tidak dimaksimumkan; kedua, ketidakpastian kualitas baterai退役 (kapasitas residual, *state-of-health*, dan kondisi sel) menghambat perencanaan kapasitas; ketiga, lemahnya koordinasi antara *echelon user* (misalnya operator *battery energy storage system*/BESS) dan *recycler* menyebabkan bottleneck pada titik pengumpulan (collection point).

Studi pelengkap oleh Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menambahkan dimensi robustitas dengan mengusulkan formulasi *robust closed-loop supply chain* yang secara eksplisit memodelkan ketidakpastian tingkat pengembalian (*return rate*), permintaan pasar sekunder, dan biaya penanganan. Pendekatan robust *min-max regret* atau *box uncertainty set* yang mereka usulkan terbukti secara signifikan mengurangi eksposur risiko terhadap disrupsi pasar ketika dibandingkan dengan model deterministik konvensional. Sinergi kedua paper ini menjadi pijakan utama modul ini, yang menyatukan kerangka integrasi keputusan echelon-recycling dengan mekanisme pertahanan terhadap ketidakpastian struktural—suatu kebutuhan mutlak dalam konteks dinamika harga material baterai yang sangat volatil.

Dari perspektif rekayasa sistem industri, modul ini menempati posisi kritis pada irisan antara *reverse logistics*, *circular economy operations*, dan *production planning under uncertainty*. Masalah keputusan yang harus dijawab bersifat multi-eselon: berapa tingkat pengumpulan optimal $(q)$? Berapa proporsi baterai yang dialokasikan ke *echelon* versus *recycling* $(\lambda)$? Berapa harga jual produk remanufaktur dan second-life BESS $(p_r, p_e)$? Bagaimana mendesain kontrak koordinasi (*revenue-sharing*, *cost-sharing*, atau *two-part tariff*) agar tercapai equilibrium *win-win* antara OEM, *echelon operator*, dan *third-party recycler* (TPR)? Seluruh pertanyaan ini akan diformulasikan secara matematis pada Bagian 2 dengan basis kedua literatur tersebut.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Baterai Daya

JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) mengusulkan arsitektur jaringan yang terdiri dari empat *echelon* berurutan dan satu *loop* tertutup:

1. **Echelon 1 — OEM (Produsen baterai baru)**: Memproduksi sel baterai baru $q_n$ dan menjualnya ke pasar EV dengan harga $p_n$.
2. **Echelon 2 — Collection Center (Pusat Pengumpulan)**: Mengumpulkan baterai pensiun dari konsumen dengan *collection rate* $\tau \in [0,1]$, lalu melakukan *screening* dan *testing* berdasarkan *state-of-health* (SoH).
3. **Echelon 3a — Echelon Operator**: Menerima baterai dengan $\text{SoH} \geq 70\%$ untuk aplikasi second-life (BESS, *backup power*, *low-speed EV*) dengan alokasi proporsi $\lambda_e$.
4. **Echelon 3b — Recycler**: Menerima baterai dengan $\text{SoH} < 70\%$ atau baterai yang telah melewati siklus second-life dengan proporsi $\lambda_r = 1 - \lambda_e$, melakukan *disassembly*, *hydrometallurgical/pyrometallurgical processing*, dan memasok material *black mass* ke OEM (closed loop).
5. **Echelon 4 — Pasar Sekunder**: Permintaan deterministic atau stochastic $D(p)$ untuk produk echelon dan material daur ulang.

### 2.2 Fungsi Permintaan dan Pendapatan

Mengikuti formulasi *price-dependent demand* yang lazim dalam literatur *operations research* (berdasarkan Shin et al., 2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)):

$$D_r(p_r) = a_r - b_r p_r, \quad a_r, b_r > 0$$

$$D_e(p_e) = a_e - b_e p_e, \quad a_e, b_e > 0$$

dengan $D_r$ adalah permintaan terhadap produk remanufaktur/daur ulang dan $D_e$ permintaan terhadap baterai second-life. Pendapatan total *echelon operator* dan *recycler* menjadi:

$$\Pi_e(p_e) = (p_e - c_e) D_e(p_e) - c_{h,e} \lambda_e q$$

$$\Pi_r(p_r) = (p_r - c_r) D_r(p_r) - c_{h,r} \lambda_r q$$

dengan $q$ adalah jumlah baterai pensiun yang berhasil dikumpulkan, $c_e, c_r$ adalah biaya *processing* per unit, dan $c_{h,e}, c_{h,r}$ adalah biaya *handling* dan *screening*.

### 2.3 Model Optimasi Profit OEM (Pemimpin Stackelberg)

JIANG & TANG (2025) memodelkan OEM sebagai *Stackelberg leader* yang mengumumkan *wholesale price* $w$ dan *buy-back price* $b$ sebelum keputusan alokasi $\lambda_e, \lambda_r$ diambil oleh *echelon operator* dan *recycler*. Fungsi profit OEM:

$$\max_{w, b, p_n} \Pi_{OEM} = (p_n - c_n) D_n(p_n) + (b - c_{re}) \cdot \lambda_r q - c_{inv} \cdot I$$

dengan $c_n$ adalah biaya produksi baterai baru, $c_{re}$ adalah insentif recovery per unit, $c_{inv}$ adalah biaya persediaan material daur ulang, dan $I$ adalah *inventory level*. Fungsi permintaan baterai baru dimodelkan:

$$D_n(p_n) = a_n - b_n p_n + \gamma \cdot \Pi_{recycle}$$

di mana $\gamma$ adalah *cross-price elasticity* terhadap persepsi *green-ness* rantai pasok—sebuah parameter kritis karena konsumen EV semakin mempertimbangkan *sustainability credentials*.

### 2.4 Formulasi Robust Optimization (Pelengkap Shin et al., 2024)

Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menyempurnakan model di atas dengan memperkenalkan *uncertainty set* ellipsoidal:

$$\mathcal{U} = \left\{ \tilde{\xi} : \tilde{\xi} = \xi_0 + \sum_{i=1}^{m} z_i \xi_i, \; \|z\|_2 \leq \rho \right\}$$

dengan $\tilde{\xi}$ adalah vektor parameter tidak pasti (*collection rate* $\tilde{\tau}$, *demand intercept* $\tilde{a}$, *material price* $\tilde{c}_{re}$), $\xi_0$ adalah nilai nominal, $\xi_i$ adalah deviasi dasar, $z_i$ adalah variabel bebas, dan $\rho$ adalah *budget of uncertainty*. Model *robust counterpart* menjadi:

$$\max_{w, b, \lambda} \min_{\tilde{\xi} \in \mathcal{U}} \Pi_{OEM}(\lambda; \tilde{\xi})$$

Formulasi *robust counterpart* melalui *dual linearization* menghasilkan *second-order cone program* (SOCP):

$$\max_{w, b, \lambda, t} \; t$$

$$\text{s.t.} \quad \Pi_{OEM}(\lambda; \xi_0) - \sum_{i} |c_i| \cdot u_i \geq t, \quad \|u\|_2 \leq \rho$$

dengan $u_i$ adalah variabel dual dan $c_i$ adalah koefisien linear dalam $\xi_i$. SOCP ini solvable secara polinomial melalui interior-point methods.

### 2.5 Model Alokasi Echelon-Recycling (JIANG & TANG, 2025)

Keputusan alokasi $\lambda_e$ dimodelkan sebagai berikut:

$$\lambda_e^* = \arg\max_{\lambda_e} \left[ V_e(\lambda_e) + V_r(1-\lambda_e) \right]$$

dengan syarat keseimbangan material:

$$q = \lambda_e q + \lambda_r q, \quad \lambda_e + \lambda_r = 1$$

dan kendala kapasitas:

$$\lambda_e q \leq K_e, \quad \lambda_r q \leq K_r, \quad q \leq Q_{max}$$

di mana $K_e$ dan $K_r$ adalah kapasitas fasilitas masing-masing, dan $Q_{max}$ adalah kapasitas maksimum collection center.

### 2.6 Kontrak Koordinasi Revenue-Sharing

Untuk mengatasi *double marginalization*, kedua paper menginvestigasi kontrak *revenue-sharing*:

$$p_n = w + \phi, \quad \phi = \alpha (p_n - w)$$

dengan $\alpha \in [0,1]$ adalah fraksi revenue yang dibagikan OEM ke *echelon operator* atau *recycler*. Kondisi koordinasi *win-win* tercapai ketika:

$$\Pi_{OEM}^{RS} \geq \Pi_{OEM}^{NC}, \quad \Pi_e^{RS} \geq \Pi_e^{NC}, \quad \Pi_r^{RS} \geq \Pi_r^{NC}$$

dengan *superscript* NC merujuk pada *no-contract* (skema desentralisasi naif).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Pengumpulan, Sortasi, dan Alokasi Baterai Pensiun

Berdasarkan sintesis prosedur pada JIANG & TANG (2025) dan best practices industri (standar IEC 62933, GB/T 34014-2017), prosedur operasional standar disusun sebagai berikut:

**Fase 1 — Collection Planning (T-12 bulan)**
- Estimasi volume baterai pensiun menggunakan *degradation model* berdasarkan data telematik OEM.
- Penetapan target *collection rate* $\tau_{target}$ sesuai regulasi EPR lokal (≥70% pada 2030 untuk Uni Eropa).
- Desain jaringan *collection points* dengan optimasi fasilitas $N_c$.

**Fase 2 — Logistics Reverse (T-6 bulan)**
- Reverse pickup dari dealer/service center menggunakan *milk-run* routing.
- Transportasi dengan packaging Class 9 (UN 3480/UN 3481) sesuai *Dangerous Goods Regulation* IATA.
- Tracking dengan Battery Passport (ISO/IEC 21434 compliant).

**Fase 3.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
