# 2702 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu sektor *asset-intensive* dengan tingkat kompleksitas operasional tertinggi di dunia. Nilai pasar global MRO (Maintenance, Repair, and Overhaul) penerbangan mencapai lebih dari USD 100 miliar per tahun, menyumbang sekitar 10–15% dari total biaya operasional maskapai, dan diproyeksikan tumbuh pada CAGR 4,3% menuju USD 135 miliar pada 2030 (Boeing Commercial Market Outlook, 2024). Dalam konteks inilah Hang Zhou (2024) menerbitkan karya berjudul *"Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability"* yang secara spesifik menyoroti kelemahan pendekatan pemeliharaan jadwal-tetap (*fixed-schedule*) yang masih dominan di industri MRO penerbangan.

Menurut Zhou (2024, DOI: 10.2139/ssrn.6387479), degradasi performa siklus hidup aset penerbangan bersifat **non-linear**, sehingga pendekatan scheduled maintenance konvensional—yang mengasumsikan laju degradasi linier—sering kali menghasilkan dua inefisiensi serius: (1) *over-maintenance* pada komponen yang sebenarnya masih dalam kondisi prima, dan (2) *under-maintenance* pada sub-sistem yang mengalami degradasi dipercepat. Paradigma Reliability-Centered Maintenance (RCM) yang awalnya diformalisasi oleh Moubray (1997) melalui standar SAE JA1011, lalu diadopsi oleh FAA AC 121-22A dan EASA Part-M, menjadi kerangka analitis yang mampu menangkap perilaku non-linear tersebut.

Konteks spesifik yang ditangani Zhou adalah struktur **A/B/C/D-check** yang berlaku universal di aviasi: A-check dilakukan setiap 400–600 flight hours (sekitar 6–8 minggu), B-check setiap 6–8 bulan, C-check setiap 20–24 bulan, dan D-check berupa *heavy maintenance visit* penuh setiap 6–12 tahun atau 20.000–30.000 flight cycles. Zhou (2024) menunjukkan bahwa menggabungkan siklus D-check penuh dengan *partial refurbishment* pada fase *mature-run* operasi pesawat mampu meningkatkan availability armada secara signifikan, dibuktikan dengan eksistensi nilai optimum yang rigorous secara matematis.

Urgensi ekonominya jelas: setiap peningkatan 1% *fleet availability* pada armada 100 pesawat narrow-body bernilai sekitar USD 50–80 juta per tahun dari sisi revenue uplift (IATA Economics, 2023). Oleh karena itu, kontribusi teoretis Zhou (2024, DOI: 10.2139/ssrn.5291672) menjadi landasan krusial bagi *reliability engineer*, *fleet planner*, dan analis MRO dalam merancang kebijakan pemeliharaan yang optimal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear Berbasis Power-Law

Zhou (2024) memodelkan reliabilitas fungsi waktu dengan laju kegagalan yang meningkat secara non-monoton. Jika $R(t)$ adalah reliabilitas pada waktu operasi $t$, maka:

$$R(t) = \exp\left(-\int_{0}^{t} \lambda(u)\,du\right)$$

dengan hazard rate $\lambda(t)$ berbentuk power-law:

$$\lambda(t) = \lambda_{0}\cdot t^{\beta}$$

di mana $\lambda_{0}$ adalah *baseline failure rate* dan $\beta \in [1, 2.5]$ adalah *shape parameter* yang merepresentasikan tingkat non-linieritas degradasi. Substitusi menghasilkan:

$$R(t) = \exp\left(-\frac{\lambda_{0}\,t^{\beta+1}}{\beta+1}\right)$$

### 2.2 Fungsi Ketersediaan Hirarkis A/B/C/D

Ketersediaan *steady-state* untuk sistem dengan multiple preventive maintenance didefinisikan:

$$A_{\infty} = \frac{T_{U}}{T_{U} + T_{D}}$$

Untuk hierarki A/B/C/D dengan interval $T_A, T_B, T_C, T_D$ dan durasi inspeksi $t_A, t_B, t_C, t_D$, downtime kumulatif dalam satu siklus panjang $T_D$ adalah:

$$T_{D}^{\text{total}} = \frac{T_D}{T_A}\,t_A + \frac{T_D}{T_B}\,t_B + \frac{T_D}{T_C}\,t_C + t_D$$

### 2.3 Formulasi Optimasi

Masalah optimasi ketersediaan menurut Zhou (2024) adalah:

$$\max_{T_A, T_B, T_C}\, A_{\infty}(T_A, T_B, T_C)$$

*subject to*:

$$0 < T_A < T_B < T_C < T_D$$
$$A_{\infty} \geq A_{\min}$$
$$C_{\text{MRO}}(T_A, T_B