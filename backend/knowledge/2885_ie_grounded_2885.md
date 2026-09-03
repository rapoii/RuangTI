# 2885 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Rantai Pasok Tertutup dengan Pemanfaatan Bertingkat dan Remanufaktur Baterai Bekas Kendaraan Listrik
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. **14th International Conference on Logistics and Systems Engineering (ICLSE 2024)**. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. **Peer-Reviewed Journal (SSRN)**. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global (Electric Vehicles/EV) telah menciptakan paradoks lingkungan dan industri yang krusial pada dekade 2020-an. World Economic Forum (2023) memperkirakan lebih dari 14 juta unit EV terjual secara kumulatif hingga 2023, dengan baterai lithium-ion sebagai komponen dominan yang mencapai 60–80% nilai moneter kendaraan. Setelah berakhirnya siklus hidup otomotif 8–10 tahun, baterai EV memasuki fase *retirement* dengan State of Health (SoH) residu 70–80%. Akumulasi baterai bekas ini — yang oleh JIANG Lin dan TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) dikarakterisasikan sebagai *retired power batteries* — menjadi masalah strategis yang membutuhkan pendekatan *closed-loop supply chain* (CLSC) berlapis.

Permasalahan industri ini memiliki tiga urgensi operasional dan ekonomis yang dibahas secara eksplisit oleh JIANG & TANG (2025). Pertama, urgensi lingkungan: baterai litium-ion mengandung kobalt, nikel, dan mangan yang bersifat karsinogenik serta elektrolit yang mudah terbakar; pembuangan ilegal atau *landfilling* menimbulkan risiko kontaminasi tanah dan emisi CO₂ yang diestimasikan 70% lebih tinggi dibanding proses daur ulang tertutup. Kedua, urgensi ekonomi-material: harga litium karbonat telah berfluktuasi dari USD 6.000/ton (2020) menjadi lebih dari USD 80.000/ton (2022), menjadikan *urban mining* baterai sebagai sumber kritis untuk transisi energi. Ketiga, urgensi teknis-regulatori: kebijakan Extended Producer Responsibility (EPR) di Uni Eropa (Directive 2006/66/EC) dan *Regulations on the Recycling of Electric Vehicle Power Batteries* di Tiongkok (2023) mewajibkan tingkat daur ulang (recycling rate) minimal 90% untuk kobalt, nikel, dan tembaga, serta 50% untuk litium.

JIANG & TANG (2025) memperkenalkan kerangka *echelon utilization* (pemanfaatan bertingkat) sebagai strategi cascading value recovery yang terdiri atas empat tingkatan keputusan: (i) **echelon-1 reuse** pada aplikasi stasioner berdaya rendah seperti *telecom base stations*, penyimpanan energi rumah tangga, dan lampu jalan pintar; (ii) **echelon-2 remanufacturing** untuk pengembalian kapasitas fungsional mendekati kapasitas asli; (iii) **echelon-3 material recycling** melalui proses hidrometalurgi dan pirometalurgi; dan (iv) **ultimate disposal** sebagai residu. Pendekatan ini secara fundamental berbeda dengan CLSC konvensional yang umumnya hanya mempertimbangkan dua ujung (produk-aset-pasok). Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) melengkapi kerangka ini dengan *Robust CLSC Model with Return Management System* yang menangani ketidakpastian permintaan, tingkat pengembalian (return rate), dan kapasitas fasilitas — aspek yang krusial karena perilaku konsumen dalam mengembalikan baterai bekas sangat stokastik dengan variabilitas 15–30%.

Konteks industri ini selanjutnya berdampak pada desain jaringan yang sangat berbeda dengan forward supply chain: titik pengumpulan (collection points) harus terdistribusi secara padat di kota-kota besar, fasilitas deteksi SoH memerlukan teknologi *non-destructive testing* seperti impedance spectroscopy dan neutron imaging, sementara fasilitas *echelon utilization* dan *remanufacturing* membutuhkan kapasitas yang fleksibel untuk menyerap batch baterai dengan karakteristik heterogen.

## 2. Landasan Teori & Formulasi Matematis

JIANG & TANG (2025) mengusulkan model optimasi Mixed-Integer Linear Programming (MILP) empat tingkat dengan fungsi tujuan maksimisasi profit bersih sistem CLSC. Formulasi umum profit dapat dinyatakan sebagai:

$$\max \Pi = \sum_{i \in \mathcal{I}} (p_i^s - c_i^s) q_i^s + \sum_{j \in \mathcal{J}} (p_j^e - c_j^e) q_j^e + \sum_{k \in \mathcal{K}} (p_k^r - c_k^r) q_k^r - \sum_{m \in \mathcal{M}} c_m^{pen} \delta_m^+$$

dengan:
- $\mathcal{I}, \mathcal{J}, \mathcal{K}, \mathcal{M}$ masing-masing adalah himpunan fasilitas *echelon-1 reuse*, *echelon-2 remanufacturing*, *recycling*, dan *disposal*.
- $q_i^s$ adalah throughput *echelon-1 reuse* (unit baterai/tahun).
- $q_j^e$ adalah throughput *echelon-2 remanufacturing*.
- $q_k^r$ adalah throughput daur ulang material.
- $p$ dan $c$ berturut-turut adalah harga jual dan biaya proses per unit.
- $\delta_m^+$ adalah variabel slack defisit kapasitas di fasilitas $m$ dengan *penalty cost* $c_m^{pen}$.

**Kendala utama (1) — Keseimbangan Aliran Material (Material Flow Balance):**

$$Q_i^{ret} = q_i^s + q_j^e + q_k^r + q_m^{disp}, \quad \forall i \in \mathcal{I}$$

yang memastikan bahwa total baterai bekas yang dikumpulkan $Q_i^{ret}$ dialokasikan secara eksklusif ke salah satu dari empat stratum nilai, dengan parameter tingkat pengembalian (return rate) $\rho$ sehingga:

$$Q_i^{ret} = \rho \cdot Q_i^{used}$$

**Kendala utama (2) — Kapasitas Fasilitas:**

$$q_i^s \leq C_i^s, \quad q_j^e \leq C_j^e, \quad q_k^r \leq C_k^r$$

dengan $C_i^s, C_j^e, C_k^r$ berturut-turut adalah kapasitas desain tahunan fasilitas.

**Kendala utama (3) — Konservasi Material pada Recycling:**

$$\sum_{k \in \mathcal{K}} \eta_l \cdot q_k^r \geq D_l^{mat}, \quad \forall l \in \{Li, Co, Ni, Mn\}$$

di mana $\eta_l$ adalah *recovery rate* material $l$ (umumnya $\eta_{Co} \approx 0.95$, $\eta_{Ni} \approx 0.92$, $\eta_{Li} \approx 0.90$) dan $D_l^{mat}$ adalah permintaan pasar akan material kritis daur ulang untuk kebutuhan manufaktur baterai baru.

Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) memperluas model ini dengan formulasi *robust optimization* untuk mengatasi ketidakpastian permintaan dan return rate. Bentuk kanoniknya adalah:

$$\min_{x \in \mathcal{X}} \max_{\xi \in \mathcal{U}} f(x, \xi)$$

$$\text{s.t. } g_j(x, \xi) \leq 0, \quad \forall \xi \in \mathcal{U}, \quad j = 1, \ldots, m$$

dengan $\xi = (\rho, D_l^{mat}, c^{proc})$ merepresentasikan vektor parameter ketidakpastian dalam *uncertainty set* $\mathcal{U}$ berbentuk polyhedron:

$$\mathcal{U} = \left\{ \xi : \xi = \bar{\xi} + \sum_{s=1}^{S} z_s \hat{\xi}_s, \; \|z\|_\infty \leq \Gamma \right\}$$

di mana $\bar{\xi}$ adalah nilai nominal, $\hat{\xi}_s$ adalah deviasi, $z_s$ adalah variabel auxiliary, dan $\Gamma$ adalah *budget of uncertainty* yang mengontrol tingkat konservatisme solusi (semakin tinggi $\Gamma$, semakin konservatif).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rantai pasok tertutup baterai bekas mengikuti SOP berlapis yang dapat diuraikan menjadi **delapan tahap operasional** yang secara struktural selaras dengan metodologi JIANG & TANG (2025):

**Tahap 1 — Collection Network Planning.** Penentuan lokasi *collection points* dengan model $p$-median atau *maximal covering location problem* (MCLP) untuk memastikan radius pengumpulan maksimum 50 km dari konsentrasi kendaraan listrik退役, guna menekan biaya logistik balik (*reverse logistics cost*) yang umumnya 1,5–2× biaya distribusi maju.

**Tahap 2 — Initial Screening & Triage.** Setiap baterai bekas menjalani tiga uji cepat: (a) pengukuran State of Health (SoH) menggunakan *Battery Management System* (BMS) reader; (b) inspeksi visual untuk kerusakan fisik (swelling, leakage, dendrite); (c) pengukuran impedansi AC dengan *Electrochemical Impedance Spectroscopy* (EIS) pada frekuensi 0,1–1000 Hz. Klasifikasi SoH menentukan routing downstream sesuai *decision tree* berikut:

$$\text{SoH} \geq 80\% \Rightarrow \text{Reuse/Repurpose (echelon-1)}$$
$$60\% \leq \text{SoH} < 80\% \Rightarrow \text{Remanufacturing (echelon-2)}$$
$$\text{SoH} < 60\% \Rightarrow \text{Material Recycling (echelon-3)}$$

**Tahap 3 — Echelon-1 Reuse Processing.** Baterai dengan SoH ≥ 80% dibongkar modulnya, di-*repack* dalam konfigurasi baru (seri/paralel disesuaikan), dan dipasang BMS baru. Aplikasi target: *telecom backup power*, *residential energy storage*, *street lighting*. Kapasitas ekonomi per baterai bekas: utilisasi tambahan 5–7 tahun.

**Tahap 4 — Echelon-2 Remanufacturing.** Baterai 60–80% SoH menjalani *cell replacement*, *capacity rebalancing*, dan *formation cycling*. Yield rate umumnya 85–92%, dengan biaya produksi 30–40% lebih rendah dibanding baterai baru.

**Tahap 5 — Pre-Treatment untuk Recycling.** Modul yang lolos dari echelon-1 dan -2 dilakukan *discharge*, *disassembly*, *crushing*, dan *screening* untuk memisahkan *black mass* (campuran oksida katol).

**Tahap 6 — Hydrometallurgical / Pyrometallurgical Processing.** *Black mass* diproses dengan leaching asam (H₂SO₄ + H₂O₂) atau pirometalurgi pada suhu 1400–1600°C untuk mengekstrak Li₂CO₃, CoSO₄, NiSO₄.

**Tahap 7 — Material Recovery & Reintegration.** Material hasil ekstraksi direintegrasikan ke