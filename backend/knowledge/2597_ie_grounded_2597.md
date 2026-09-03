# 2597 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) Baterai Pensiun: Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** *Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*  
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)  
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal of Robust Closed-Loop Supply Chain with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Industri kendaraan listrik global memasuki fase krusial yang sering disebut sebagai *battery retirement tsunami* — gelombang pensiun massal baterai lithium-ion dalam dekade 2025–2035. JIANG Lin & TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menekankan bahwa satu baterai *power* kendaraan listrik (kapasitas 50–80 kWh) yang pensiun pada ambang *State of Health* (SoH) 70–80% masih menyimpan 60–70% kapasitas nominalnya, sehingga memiliki nilai residu yang signifikan untuk dimanfaatkan kembali (*echelon utilization*) pada aplikasi stasioner berdaya lebih rendah seperti *peak shaving* gardu listrik, lampu jalan surya, *backup* telekomunikasi, dan *forklift* listrik. Tanpa strategi rantai pasok tertutup (*closed-loop supply chain*/CLSC) yang matang, baterai pensiun akan menjadi beban lingkungan masif karena kandungan litium, kobalt, dan nikel yang bersifat toksik serta *embodied energy* produksi sel baterai yang sangat tinggi (≈150 kWh/kg sel menurut berbagai *life cycle assessment*).

Urgensi ekonominya juga tidak kalah penting. JIANG & TANG (2025) memperkirakan bahwa pada skenario agresif, nilai ekonomi baterai pensiun di pasar *echelon* (Rp 2–4 juta/kWh) hampir menyamai setengah harga sel baru, menjadikan baterai pensiun sebagai *secondary raw material* strategis. Namun keputusan antara *echelon utilization* versus daur ulang material (*recycling*) melibatkan trade-off multi-stakeholder: produsen OEM baterai (*battery manufacturer*), operator *echelon* (sering pihak ketiga atau utilitas listrik), dan *recycler* yang memiliki fungsi biaya, margin, dan risiko berbeda. Studi Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menambahkan dimensi ketidakpastian (*uncertainty*) pada parameter returns, kualitas baterai yang dikembalikan, dan harga logam daur ulang, sehingga mengusulkan model *robust optimization* untuk CLSC ekonomi sirkular.

Konteks regulasi dunia, termasuk *China's Interim Measures for the Management of Recycling and Utilization of NEV Power Batteries* (2018) dan *EU Battery Regulation 2023/1542*, mewajibkan *extended producer responsibility* (EPR) yang memaksa OEM membangun jaringan pengembalian. Tantangan operasional: lokasi *echelon* users, kapasitas *echelon* facilities, biaya logistik balik (*reverse logistics*), kualitas baterai yang heterogen, dan koordinasi harga antar-stakeholder. Inilah yang kemudian dirumuskan JIANG & TANG (2025) sebagai *bilevel programming* dengan produsen sebagai *leader* (penentu harga jual baru dan insentif pengembalian) serta operator *echelon* dan *recycler* sebagai *followers* (penentu volume alokasi baterai pensiun).

---

## 2. Landasan Teori & Formulasi Matematis

JIANG Lin & TANG Lidan (2025) mengusulkan model **bilevel programming** untuk keputusan stratejik CLSC baterai pensiun. Pada *upper level*, manufaktur (M) memaksimalkan:

$$\max_{p_m,\,w} \quad \Pi_M = (p_m - c_m)\,D(p_m) - w\,Q + \pi_e(q_e^{*}) + \pi_r(q_r^{*})$$

dengan $p_m$ harga jual baterai baru, $c_m$ biaya produksi, $D(p_m)=a-b\,p_m$ fungsi permintaan-deterministik, $w$ insentif回收 per baterai, dan $Q$ total baterai pensiun potensial. Dua fungsi keuntungan *lower level* adalah:

$$\Pi_E = (p_e - c_e)\,q_e - w\,q_e - t_e\,d_e \tag{echelon operator}$$

$$\Pi_R = (p_r - c_r - \delta\cdot q_r)\,q_r - w\,q_r - t_r\,d_r \tag{recycler}$$

dimana $q_e, q_r$ berturut-turut adalah volume baterai dialokasikan ke *echelon* dan daur ulang, $p_e, p_r$ harga jual produk *echelon* (mis. Rp 3 juta/kWh untuk baterai stasioner) dan produk daur ulang, $c_e, c_r$ biaya operasional, $t_e, t_r$ tarif transport per unit jarak, $d_e, d_r$ jarak rata-rata, dan $\delta$ koefisien biaya lingkungan (*negative externality*) yang dibebankan pada *recycler*.

**Kendala utama:**

$$q_e + q_r \leq Q \quad \text{(kapasitas total)}$$

$$q_e \leq K_e, \quad q_r \leq K_r \quad \text{(kapasitas fasilitas)}$$

$$q_e, q_r \geq 0$$

Karena *lower level* bersifat *convex*, KKT conditions diterapkan untuk mengubah *bilevel* menjadi *single-level Mixed-Integer Linear Programming* (MILP) dengan variabel dual $\lambda_e, \lambda_r, \mu_e, \mu_r$:

$$\begin{cases}
p_e - c_e - w - t_e\,d_e - \lambda_e + \mu_e = 0 \\
p_r - c_r - 2\delta\,q_r - w - t_r\,d_r - \lambda_r + \mu_r = 0 \\
\lambda_e\,(q_e - K_e) = 0, \quad \mu_e\,q_e = 0 \\
\lambda_r\,(q_r - K_r) = 0, \quad \mu_r\,q_r = 0 \\
\lambda_e, \lambda_r, \mu_e, \mu_r \geq 0
\end{cases}$$

Shin, Kim, & Jeong (2024) melengkapi kerangka ini dengan pendekatan *robust counterpart* Bertsimas-Sim untuk melindungi keputusan CLSC dari fluktuasi parameter kunci $\tilde{a}$ (demand intercept), $\tilde{c}_m$ (biaya produksi), dan $\tilde{Q}$ (volume returns) yang memiliki deviasi $\hat{a}, \hat{c}_m, \hat{Q}$:

$$\max_{x} \; c^{\top}x \quad \text{s.t.} \quad \tilde{a}_i x \leq b_i \;\;\forall \tilde{a}_i \in \mathcal{U}_i$$

dengan *uncertainty set*:

$$\mathcal{U}_i = \left\{ \tilde{a}_i : \tilde{a}_i = a_i + \zeta_i\hat{a}_i, \sum_i |\zeta_i| \leq \Gamma \right\}$$

Parameter $\Gamma \in [0, |\mathcal{I}|]$ adalah *budget of uncertainty* yang mengendalikan konservatisme solusi. Kombinasi model JIANG & TANG (2025) untuk keputusan stratejik dan Shin, Kim, & Jeong (2024) untuk keputusan taktis-operasional memberikan kerangka hierarkis yang robust.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri CLSC baterai pensiun mengikuti prosedur 7-tahap yang disintesis dari kedua literatur:

1. **Karakterisasi baterai pensiun** — Pengujian SoH, kapasitansi aktual ($C_{aktual}$), *internal resistance* ($IR$), dan *state of safety* menggunakan protokol GB/T 34014-2017 (China) atau ISO 12405-4. Baterai diklasifikasikan ke Grade A ($SoH \geq 80\%$), Grade B ($70\% \leq SoH < 80\%$), dan Grade C ($SoH < 70\%$).

2. **Pengumpulan & reverse logistics** — Desain jaringan *collection points* berbasis densitas EV dan biaya transport, diselesaikan sebagai *facility location problem* (FLP) dengan mixed kapasitas.

3. **Alokasi baterai** — Keputusan Grade A → direct *echelon* (aplikasi premium); Grade B → *echelon* setelah re-grading; Grade C → *recycling*. Keputusan alokasi dimodelkan sebagai *bilevel* seperti di Bagian 2.

4. **Penetapan harga & insentif** — Produsen menentukan insentif pengembalian $w$ menggunakan *Stackelberg* equilibrium. Platform *online* (seperti CATL-Brompton atau NIO-PowerUp) mendukung transparansi harga.

5. **Kontrak & coordination** — *Revenue-sharing contract* atau *cost-sharing* untuk menyelaraskan利益 seluruh stakeholder (JIANG & TANG, 2025). Parameter $r \in [0,1]$ mengatur proporsi revenue yang dikembalikan ke recycler/echelon operator.

6. **Operasional echelon & remanufaktur** — Standar IEC 62933-2-1 untuk *electrical energy storage* dan UN 38.3 untuk *transportation safety*. Proses *echelon* mencakup *screening*, *re-grouping* (penyusunan ulang pack), dan *BMS reconfiguration*.

7. **Monitoring & feedback loop** — Integrasi IoT dan *battery passport* (sesuai EU Battery Regulation 2023/1542) memungkinkan *traceability* end-to-end. Data historis diumpan-balikkan ke model untuk *re-optimization* periodik.

Diagram alir keputusan: *Collection → Testing → Classification → {Echelon path | Recycling path} → Remanufacturing/Material recovery → Market*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Data parameter** (konsisten dengan JIANG & TANG, 2025): Sebuah OEM baterai di pasar China dengan total baterai pensiun potensial $Q = 100{,}000$ unit/tahun, kapasitas rata-rata 60 kWh, biaya produksi $c_m = 5{,}500$ RMB/kWh, harga jual baterai baru $p_m = 8{,}000$ RMB/kWh, fungsi permintaan $D = 200{,}000 - 15\,p_m$.

**Parameter echelon:** $p_e = 3{,}000$ RMB/kWh, $c_e = 1{,}500$ RMB/kWh, kapasitas $K_e = 60{,}000$ unit, $t_e \cdot d_e = 200$ RMB/unit.  
**Parameter recycler:** $p_r = 2{,}200$ RMB/kWh (setara recovered material), $c_r = 800$ RMB/kWh, $\delta = 50$ RMB/unit², kapasitas $K_r = 50{,}000$ unit, $t_r \cdot d_r = 250$ RMB/unit.  
**Variabel keputusan:** insentif $w$, alokasi $q_e, q_r$.

**Optimisasi.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
