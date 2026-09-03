# 2096 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang sangat khas dibandingkan rantai pasok produk manufaktur konvensional. Karakteristik perishability yang tinggi, siklus hidup produk yang pendek (umumnya 7–21 hari untuk produk segar), serta sensitivitas suhu selama distribusi cold chain mengharuskan perancang rantai pasok untuk mempertimbangkan dimensi kualitas dan waktu secara simultan dalam keputusan desain jaringan. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), optimalisasi jaringan distribusi susu tidak cukup hanya meminimumkan total biaya logistik, melainkan harus memperhitungkan secara eksplisit konflik trade-off antara efisiensi biaya, tingkat pelayanan, dan degradasi kualitas produk di setiap titik rantai nilai.

Konteks industri yang melatarbelakangi studi ini adalah realitas bahwa sekitar 20–25% produk susu di negara berkembang terbuang sia-sia karena inefisiensi rantai dingin, sementara margin keuntungan pelaku industri susu tipikal hanya berkisar 4–8%. Studi tersebut mengusulkan kerangka multi-objektif yang diselesaikan dengan Benders Decomposition untuk mengeksplorasi front Pareto antara biaya total jaringan, emisi karbon dari operasional cold chain, dan proporsi produk yang masih memenuhi standar kualitas saat sampai ke konsumen akhir. Pendekatan ini memperluas kerangka Supply Chain Network Design (SCND) klasik yang lazim digunakan pada produk non-perishable.

Pelengkap penting untuk memahami kompleksitas desain jaringan berbasis kualitas adalah kontribusi Zhang, Li, dan Ren (2024) yang diterbitkan dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437). Mereka menunjukkan bahwa keputusan kualitas produk dalam rantai pasok balik (reverse supply chain) memiliki analogi struktural dengan keputusan degradasi mutu pada rantai pasok maju produk susu: pada kedua kasus, kondisi fisik produk menentukan rute pemrosesan dan mempengaruhi profitabilitas. Integrasi kedua literatur ini membentuk basis pemikiran bahwa keputusan desain jaringan produk susu harus bersifat dua dimensi (maju–mundur) dengan memasukkan inspeksi mutu, reprocessing, dan disposal sebagai bagian integral dari arsitektur jaringan.

Urgensi ekonomis dan operasional dari topik ini diperkuat oleh tren global berupa urbanisasi yang meningkatkan jarak rata-rata antara produsen susu dan konsumen, serta meningkatnya tuntutan regulasi terkait food safety, traceability, dan pengurangan food waste sesuai Sustainable Development Goal (SDG) 12.3. Oleh sebab itu, kemampuan untuk menghasilkan keputusan desain jaringan yang robust secara kuantitatif menjadi kebutuhan strategis bagi perusahaan susu dalam meningkatkan daya saing jangka panjang.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan Multi-Eselon

Model Lead Researchers (2023) mempertimbangkan jaringan empat eselon: (i) peternakan susu sebagai titik sourcing $(i \in I)$, (ii) fasilitas processing $(p \in P)$, (iii) distribution center $(d \in D)$, dan (iv) zona permintaan零售商 $(j \in J)$. Setiap produk susu yang dikirim dari fasilitas processing ke distribution center mengalami degradasi mutu yang dimodelkan sebagai fungsi waktu transit dan suhu operasional cold chain.

### 2.2 Formulasi Mixed-Integer Multi-Objective

Tiga fungsi tujuan yang digunakan adalah:

**Objektif 1 — Total biaya jaringan:**

$$Z_1 = \sum_{i \in I} f_i^{farms} + \sum_{p \in P} f_p^{proc} y_p + \sum_{d \in D} f_d^{dc} y_d + \sum_{i,p} c_{ip}^{rp} q_{ip} + \sum_{p,d} c_{pd}^{pd} q_{pd} + \sum_{d,j} c_{dj}^{dj} q_{dj}$$

**Objektif 2 — Emisi karbon cold chain:**

$$Z_2 = \sum_{p,d} e_{pd}^{trans} q_{pd} \delta_{pd} + \sum_{d,j} e_{dj}^{trans} q_{dj} \delta_{dj} + \sum_{p} e_p^{proc} y_p$$

**Objektif 3 — Indeks kualitas produk sampai konsumen:**

$$Z_3 = 1 - \frac{\sum_{j \in J} \sum_{d \in D} q_{dj}(1 - \theta_{dj})}{\sum_{j \in J} D_j}$$

dengan $\theta_{dj} \in [0,1]$ merupakan faktor retensi kualitas yang bergantung pada waktu transit dan suhu cold chain, mengikuti persamaan Arrhenius-like:

$$\theta_{dj} = \exp\left(-\kappa \int_{0}^{t_{dj}} \exp\left(\frac{E_a}{R}\left(\frac{1}{T_{ref}} - \frac{1}{T(t)}\right)\right) dt\right)$$

di mana $\kappa$ adalah konstanta laju deteriorasi, $E_a$ adalah energi aktivasi, dan $T(t)$ adalah profil suhu sepanjang perjalanan.

### 2.3 Kendala Utama

Kendala kapasitas processing:

$$\sum_{i \in I} q_{ip} \leq Cap_p^{proc} \cdot y_p, \quad \forall p \in P$$

Kendala keseimbangan aliran:

$$\sum_{i \in I} q_{ip} = \sum_{d \in D} q_{pd}, \quad \forall p \in P$$

Kendala kepuasan permintaan:

$$\sum_{d \in D} q_{dj} \geq D_j, \quad \forall j \in J$$

Kendala kualitas minimum:

$$\theta_{dj} \geq \theta^{min}, \quad \forall (d,j)$$

Kendala integritas biner:

$$y_p, y_d \in \{0,1\}, \quad q_{ip}, q_{pd}, q_{dj} \geq 0$$

### 2.4 Benders Decomposition

Karena ukuran masalah meningkat secara eksponensial dengan jumlah kandidat fasilitas dan skenario kualitas, Lead Researchers (2023) menerapkan Benders Decomposition sebagai berikut. **Master Problem (MP)** berisi variabel biner lokasi dan menghasilkan *first-stage decisions*:

$$\min_{y \in \{0,1\}} \sum_{p} f_p y_p + \sum_{d} f_d y_d + \eta$$

dengan $\eta$ adalah variabel yang menangkap biaya operasional optimal dari subproblem. **Subproblem (SP)** untuk setiap nilai $y^*$ yang diberikan:

$$\min_{q \geq 0} \sum c \cdot q$$

subject to kendala kontinu. Dual dari SP menghasilkan *optimality cuts*:

$$\eta \geq \sum_{(i,p)} \pi_{ip} q_{ip} + \sum_{(p,d)} \pi_{pd} q_{pd} + \sum_{(d,j)} \pi_{dj} q_{dj}$$

yang ditambahkan ke MP pada iterasi berikutnya sampai gap konvergensi $\epsilon \leq 0.5\%$ tercapai.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP 7-tahap yang distandarisasi oleh Lead Researchers (2023):

1. **Tahap 1 — Karakterisasi Supply Base:** Pemetaan titik-titik peternakan, kapasitas harian musiman, dan profil kualitas susu mentah (Total Plate Count, Somatic Cell Count).
2. **Tahap 2 — Segmentasi Permintaan:** Diskretisasi zona permintaan berdasarkan analisis cluster terhadap data ritel historis.
3. **Tahap 3 — Konstruksi Model Multi-Objektif:** Pembangunan formulasi MIP dengan parameter degradasi mutu aktual.
4. **Tahap 4 — Generasi Pareto Front:** Menggunakan metode $\epsilon$-constraint dengan 8–12 titik referensi pada setiap objektif.
5. **Tahap 5 — Validasi dengan Dekomposisi Benders:** Penerapan cuts ganda (optimality dan feasibility) sampai konvergensi.
6. **Tahap 6 — Stress Testing:** Pengujian terhadap skenario disrupsi (gangguan cold chain, fluktuasi permintaan musiman).
7. **Tahap 7 — Implementasi Bertahap:** Roll-out keputusan lokasi dalam 2–3 horizon kuartalan dengan monitoring KPI kualitas.

Arsitektur teknologi pendukung menggunakan platform optimasi GAMS/CPLEX atau Python(Pyomo + Gurobi) untuk solver inti, dengan integrasi GIS untuk visualisasi spasial jaringan dan dashboard Power BI untuk monitoring kualitas real-time. Pendekatan ini paralel dengan kerangka Zhang et al. (2024) yang menekankan pentingnya integrasi keputusan kualitas ke dalam optimasi jaringan melalui modul inspeksi eksplisit.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Industri Hipotetis (Distributor Susu di Jawa)

| Parameter | Nilai |
|-----------|-------|
| Peternakan $(i)$ | 6 lokasi |
| Processing plant $(p)$ | 3 kandidat |
| Distribution center $(d)$ | 5 kandidat |
| Zona permintaan $(j)$ | 8 zona |
| Total permintaan | 480.000 liter/hari |
| Kapasitas processing | 200.000 liter/hari per plant |
| Fixed cost processing | Rp 12 Miliar/tahun |
| Fixed cost DC | Rp 4,5 Miliar/tahun |
| Biaya transport per liter-km | Rp 8–14 |

### 4.2 Langkah Perhitungan Subproblem (Single Iteration)

Misalkan dari hasil MP, diputuskan $y^* = (1,0,1)$ untuk processing dan $y^*_{DC} = (1,1,0,1,0)$. SP diselesaikan untuk menghitung aliran optimal:

$$q_{p1,d1} = 142.000 \text{ liter/hari}, \quad q_{p3,d4} = 195.000 \text{ liter/hari}$$

Dengan $q_{p1,d2} = 98.000$ dan $q_{p3,d1} = 45.000$. 

**Perhitungan biaya operasional subproblem:**

$$Z_1^{SP} = (142.000 \times 280) + (98.000 \times 310) + (195.000 \times 245) + (45.000 \times 290)$$
$$= 39.760.000 + 30.380.000 + 47.775.000 + 13.050.000 = \text{Rp } 130.965.000/\text{hari}$$

**Perhitungan indeks kualitas** dengan asumsi waktu transit rata-rata 14 jam dan suhu cold chain 4°C vs referensi 2°C:

$$\theta = \exp(-0.012 \times 14) = 0.845$$

Artinya produk sampai konsumen dengan retensi kualitas ~84.5%, di atas ambang batas minimum 75%.

**Perhitungan emisi CO₂:**

$$Z_2 = (240.000 \times 0.085) + (95.000 \times 0.092) = 20.400 + 8.740 = 29.140 \text{ kg CO}_2\text{/hari}$$

### 4.3 Generasi Pareto Front (3 Titik Representative)

| Solusi | Biaya (Miliar Rp/thn) | Emisi (ton CO₂/thn) | Kualitas (%) |
|--------|----------------------|---------------------|--------------|
| A (cost-focused) | 47.2 | 11.8 | 78.3 |
| B (balanced) | 52.6 | 9.4 | 84.5 |
| C (quality-focused) | 61.9 | 7.1 | 91.2 |

**Interpretasi Manajerial:** Solusi B memberikan keseimbangan optimal karena penurunan emisi 20.4% dengan peningkatan kualitas 6.2 poin hanya memerlukan tambahan biaya 11.4%. Trade-off ini umumnya dapat diterima oleh