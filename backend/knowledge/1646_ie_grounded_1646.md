# 1646 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu sektor *asset-heavy* dengan karakteristik intensitas modal (capital-intensive) tertinggi di dunia, di mana satu pesawat窄-body modern memiliki nilai aset USD 50–120 juta, sementara pesawat wide-body dapat mencapai USD 300–450 juta per unit. Dengan tingkat utilisasi harian rata-rata 8–14 jam terbang dan siklus hidup desain 25–30 tahun, pesawat komersial memerlukan regimen pemeliharaan yang sangat ketat untuk menjaga kelayakan terbang (airworthiness), keselamatan penumpang, dan profitabilitas operator. Hang Zhou (2024) dalam tulisannya yang dipublikasikan melalui DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menekankan bahwa Reliability-Centred Maintenance (RCM) merupakan pendekatan yang sangat dihargai dalam industri berbasis aset berat karena kemampuannya dalam **mengkuantifikasi degradasi non-linier terhadap performa life-cycle** sekaligus mengoptimalkan operasi melalui peningkatan keselamatan dan ketersediaan.

Urgensi penelitian ini diperkuat oleh fakta bahwa setiap satu jam *ground time* pesawat narrow-body dapat menimbulkan *revenue loss* sebesar USD 8.000–15.000, sementara pesawat wide-body mencapai USD 25.000–60.000 per jam karena *opportunity cost* akibat hilangnya slot terbang, *re-routing* penumpang, dan kompensasi延误. Regulasi internasional dari FAA (Federal Aviation Administration) melalui 14 CFR Part 121 dan EASA melalui Regulation (EU) No 1321/2014 mewajibkan operator untuk mematuhi program pemeliharaan yangapproved, yang umumnya berbentuk kebijakan hirarkis A/B/C/D check. Namun demikian, Zhou (2024) menyoroti bahwa implementasi RCM pada sistem kompleks seperti kebijakan A/B/C/D MRO di sektor aviasi masih menghadapi tantangan signifikan, terutama dalam mengintegrasikan fully refurbished D-check cycles dengan partial refurbishments pada fase mature-run operasi.

Masalah mendasar yang diidentifikasi oleh Zhou (2024) adalah **trade-off klasik antara scheduled downtime** (yang menurunkan availability sesaat) **dan reliability gain** (yang menurunkan unscheduled downtime dalam jangka panjang). Pendekatan konvensional yang hanya mengandalkan D-check berkala tanpa partial refurbishment sering kali menghasilkan degradasi performa yang cepat selama periode mature-run, sehingga meningkatkan probabilitas *unscheduled removal* komponen kritis. Sebaliknya, penambahan partial refurbishment meningkatkan *scheduled downtime* tetapi menurunkan tingkat kegagalan dan *removal rate* komponen. Optimalisasi trade-off ini memerlukan model matematis yang rigor, yang menjadi kontribusi inti paper Zhou (2024) melalui demonstrasi **eksistensi nilai optimal untuk model ketersediaan armada**. Konteks ini menjadikan modul 1646 sangat relevan untuk para insinyur industri yang bergerak di bidang *reliability engineering*, *fleet management*, dan *operations research* di sektor aviasi maupun industri *asset-intensive* lainnya.

---

## 2. Landasan Teori & Formulasi Matematis

Framework Zhou (2024) dibangun di atas pilar teori *Reliability-Centered Maintenance* yang diperkenalkan oleh Nowlan dan Heap (1978) untuk industri penerbangan militer AS, kemudian dikembangkan oleh Moubray (1997) dalam *Reliability-Centered Maintenance II*. RCM pada dasarnya menggeser paradigma pemeliharaan dari *fixed-time preventive maintenance* berbasis waktu kalender menjadi pendekatan berbasis kondisi (condition-based) dan risiko (risk-based), dengan fokus pada fungsi sistem bukan sekadar komponen.

### 2.1 Model Ketersediaan Tunak (Steady-State Availability)

Ketersediaan intrinsik sebuah aset pada kondisi tunak didefinisikan sebagai:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} = \frac{1}{1 + \rho}$$

di mana $\text{MTBF}$ adalah *Mean Time Between Failures*, $\text{MTTR}$ adalah *Mean Time To Repair*, dan $\rho = \text{MTTR}/\text{MTBF}$ adalah *service factor* atau *downtime ratio* (Zhou, 2024, DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 2.2 Formulasi Ketersediaan Hirarkis untuk Kebijakan A/B/C/D

Zhou (2024) memformulasikan ketersediaan sebuah pesawat tunggal selama horizon perencanaan $T$ sebagai:

$$A_i(T) = 1 - \frac{1}{T}\left(n_A \cdot d_A + n_B \cdot d_B + n_C \cdot d_C + n_P \cdot d_P + n_D \cdot d_D + \lambda_i \cdot \text{MTTR}_i \cdot T\right)$$

di mana:
- $n_A, n_B, n_C, n_P, n_D$ berturut-turut adalah jumlah A-check, B-check, C-check, *partial refurbishment*, dan D-check dalam horizon $T$
- $d_A, d_B, d_C, d_P, d_D$ adalah *downtime* masing-masing tingkat check
- $\lambda_i$ adalah laju kegagalan komponen kritis $i$ (failures per flight hour atau per siklus)
- $\text{MTTR}_i$ adalah *Mean Time To Repair* untuk kegagalan tak terjadwal

### 2.3 Model Degradasi Non-Linier Life-Cycle

Zhou (2024) mengadopsi model degradasi non-linier untuk menangkap karakteristik *bathtub curve* yang dimodifikasi, dengan fase *infant mortality*, *useful life*, dan *wear-out*:

$$\lambda(t) = \lambda_0 \cdot e^{-\alpha t} + \lambda_s + \beta \cdot t^{\gamma}$$

di mana $\lambda_0$ adalah laju kegagalan awal, $\lambda_s$ adalah laju kegagalan selama *useful life* (relatif konstan), $\beta \cdot t^{\gamma}$ adalah komponen *wear-out* dengan eksponen $\gamma \geq 1$, dan $\alpha$ adalah koefisien *burn-in*. Untuk komponen avionik dan turbine, Zhou mengusulkan $\gamma \approx 1.5$–$2.2$ yang merepresentasikan accelerated degradation.

### 2.4 Fungsi Objektif Optimasi

Masalah optimasi ketersediaan armada diformulasikan sebagai:

$$\max_{T_D, T_P, k_P} \; A_{\text{fleet}}(T_D, T_P, k_P) = \frac{1}{N}\sum_{i=1}^{N} A_i(T)$$

dengan kendala:

$$\begin{aligned}
\text{(i)} \quad & 0 < T_P < T_D \\
\text{(ii)} \quad & k_P = \lfloor T_D / T_P \rfloor - 1 \in \mathbb{Z}_{\geq 0} \\
\text{(iii)} \quad & C_{\text{total}} = n_D \cdot c_D + k_P \cdot c_P \leq C_{\text{budget}} \\
\text{(iv)} \quad & A_{\text{fleet}} \geq A_{\text{min}}
\end{aligned}$$

di mana $T_D$ adalah interval D-check, $T_P$ adalah interval partial refurbishment