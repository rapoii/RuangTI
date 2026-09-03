# 2766 — Kebijakan Pemeliharaan Hierarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *capital-intensive* dengan struktur biaya tetap (*fixed cost*) yang sangat dominan, di mana setiap jam terbang (*flight hour*/FH) pesawat narrow-body bernilai sekitar USD 6.000–9.000 dalam konfigurasi revenue-generating. Dalam kerangka ini, ketersediaan armada (*fleet availability*) bukan sekadar metrik operasional, melainkan *profitability engine* yang menentukan margin operasional maskapai. Studi Zhou (2024) dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menunjukkan bahwa penerapan *Reliability-Centered Maintenance* (RCM) pada sistem yang kompleks—khususnya struktur *check* hierarkis A/B/C/D pada sektor penerbangan—masih menghadapi tantangan signifikan dalam formulasi kuantitatifnya. Zhou secara eksplisit menyatakan: *"RCM modelling and implementation can be challenging, particularly in applying to the operations of complex systems such as the hierarchical A/B/C/D MRO policy used in the aviation sector."*

Konteks operasionalnya adalah sebagai berikut. Pesawat komersial modern wajib menjalani empat tingkatan pemeliharaan berkala sesuai regulasi *Continuing Airworthiness* (EASA Part-M, FAA Part 121): **A-check** (ringan, 50–80 jam kerja, setiap 400–600 FH), **B-check** (menengah, 100–250 jam, setiap 6–8 bulan), **C-check** (berat, 1–2 minggu, setiap 20–24 bulan), dan **D-check** (full overhaul, 1–2 bulan, setiap 6–12 tahun atau 30.000–50.000 FH). Karakteristik degradasi sistem penerbangan bersifat *non-linear*: komponen struktural, *landing gear*, APU, dan mesin mengalami degradasi yang akseleratif setelah beberapa siklus perbaikan parsial, sehingga tanpa strategi refurbishment penuh secara periodik, laju kegagalan akan meningkat secara kuasi-eksponensial. Zhou (2024) memperkenalkan kerangka kebijakan yang mengintegrasikan **D-check** sebagai *fully refurbished* dengan **A/B/C-check** sebagai *partial refurbishments* selama fase mature-run operasi, dengan tujuan optimasi terhadap *maximum available operation time* (DOI: 10.2139/ssrn.6387479). Urgensi ekonominya semakin nyata pasca-pandemi, ketika maskapai berupaya memulihkan kapasitas sambil mempertahankan *dispatch reliability* di atas 99%.

## 2. Landasan Teori & Formulasi Matematis

Model RCM hierarkis Zhou (2024) berakar pada *renewal reward theorem* yang diterapkan pada struktur *check* majemuk. Definisikan himpunan indeks $i \in \{A,B,C,D\}$ dengan $\tau_i$ adalah interval operasi (FH) antar-pemeliharaan tingkat $i$, dan $T_{m,i}$ adalah downtime rata-rata untuk tingkat $i$ (jam). Dalam satu siklus D-check (yang merupakan *renewal epoch*), jumlah masing-masing check adalah:

$$n_i = \frac{\tau_D}{\tau_i}, \quad \forall i \in \{A,B,C\}$$

Durasi total downtime per siklus D adalah:

$$T_{M}^{\text{total}} = \sum_{i \in \{A,B,C\}} n_i \cdot T_{m,i} + T_{m,D}$$

Ketersediaan jangka panjang (*steady-state availability*) sistem, mengikuti argumen renewal reward dari Zhou (2024), diformulasikan sebagai:

$$A(\tau_A, \tau_B, \tau_C) = \frac{\tau_D}{\tau_D + T_{M}^{\text{total}}} = \frac{\tau_D}{\tau_D + \displaystyle\sum_{i \in \{A,B,C\}} \frac{\tau_D}{\tau_i} T_{m,i} + T_{m,D}}$$

Untuk menangkap degradasi non-linear antar perbaikan parsial, Zhou menggunakan model perbaikan tak-sempurna Kijima-I di mana laju kegagalan setelah $k$ perbaikan parsial menjadi:

$$\lambda_k(t) = \lambda_0 +