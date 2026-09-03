# 2320 — Perancangan Jaringan Rantai Pasok Multi-Objektif dengan Benders Decomposition: Aplikasi pada Industri Produk Susu dan Rantai Pasok Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir, terutama karena karakteristik intrinsik produk yang sangat mudah rusak (*perishable*), rentang waktu simpan yang pendek, serta persyaratan rantai dingin (*cold chain*) yang ketat sepanjang jaringan distribusi. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), desain jaringan rantai pasok susu bukan sekadar persoalan minimasi biaya运输 melainkan masalah multi-dimensi yang harus menyeimbangkan empat tujuan simultan: (1) minimasi total biaya fasilitas, produksi, persediaan, dan distribusi; (2) maksimisasi kesegaran produk (*freshness*) pada titik konsumsi; (3) minimasi emisi karbon akibat rantai dingin; serta (4) maksimisasi tingkat pelayanan pelanggan (*service level*). Dalam konteks Indonesia, dengan konsumsi susu per kapita yang masih rendah namun tumbuh di atas 5% per tahun dan dominasi produk Ultra High Temperature (UHT) serta pasteurisasi, permasalahan jaringan ini menjadi sangat relevan bagi perusahaan manufaktur seperti PT Indofood Sukses Makmur (divisi dairy), PT Ultrajaya, dan koperasi susu sapi perah skala menengah.

Urgensi ekonomis dari perancangan jaringan ini ditunjukkan oleh data bahwa 8–15% produk susu di negara berkembang terbuang sebelum dikonsumsi akibat kerusakan mutu pada tahap distribusi. Lead Researchers (2023) menekankan bahwa keputusan lokasi fasilitas (*facility location*), kapasitas produksi, alokasi pelanggan, dan kebijakan persediaan pada dasarnya saling зависимы (saling bergantung) sehingga pemodelan monolitik Mixed Integer Linear Programming (MILP) berskala industri akan menghadapi *computational intractability* yang signifikan. Oleh sebab itu, Benders Decomposition (BD) diajukan sebagai kerangka pemecah (*decomposition framework*) yang memisahkan keputusan strategis (master problem) dari keputusan operasional (subproblem). Pendekatan ini diperkuat oleh studi Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) yang membuktikan efektivitas Benders Decomposition pada rantai pasok balik (*reverse supply chain*) dengan keputusan kualitas, sehingga memperluas applicability teknik dekomposisi pada konteks industri yang memerlukan integrasi aliran maju dan aliran mundur termasuk pada kasus daur ulang kemasan susu, pemulihan produk kedaluwarsa, dan program *trade-in* produk. Kedua paper ini secara sinergis membangun fondasi metodologis untuk riset operasi modern dalam desain jaringan rantai pasok agribisnis dan manufaktur berkelanjutan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Multi-Eselon

Model Lead Researchers (2023) mempertimbangkan jaringan empat-esekon yang terdiri dari: (i) peternakan/pusat pengumpulan susu mentah (*raw milk collection centers* — RMCC), (ii) pabrik pengolahan (*processing plants* — PP), (iii) pusat distribusi (*distribution centers* — DC), dan (iv) zona permintaan pelanggan (*customer zones* — CZ). Setiap esekon memiliki variabel keputusan biner untuk pembukaan fasilitas dan variabel kontinu untuk aliran material.

### 2.2 Notasi Himpunan dan Parameter

- $I$ : himpunan kandidat RMCC, $|I|=i$
- $J$ : himpunan kandidat PP, $|J|=j$
- $K$ : himpunan kandidat DC, $|K|=k$
- $L$ : himpunan zona pelanggan, $|L|=l$
- $T$ : himpunan periode perencanaan, $|T|=t$ (umumnya 12 bulan atau 52 minggu)
- $P$ : himpunan jenis produk susu (misal: UHT, pasteurisasi, yogurt, keju)

Parameter kunci:
- $d_{lpt}$ : permintaan pelanggan $l$ untuk produk $p$ pada periode $t$ (liter)
- $f_i, g_j, h_k$ : biaya tetap pembukaan fasilitas
- $c_{ij}$ : biaya transportasi per liter dari RMCC $i$ ke PP $j$
- $c_{jkl}$ : biaya distribusi dari PP $j$ ke DC $k$ dan dari DC $k$ ke pelanggan $l$
- $\alpha_p$ : laju penurunan kesegaran produk $p$ (fraksi/hari)
- $\theta_{ij}^{max}$ : kapasitas maksimum PP $j$
- $cap_i, cap_j, cap_k$ : kapasitas fasilitas masing-masing
- $\rho$ : faktor emisi CO₂ per liter-km untuk truk refrigerated

### 2.3 Fungsi Tujuan Multi-Objektif

Karena problem bersifat multi-tujuan, Lead Researchers (2023) menggunakan pendekatan $\epsilon$-constraint untuk menghasilkan frontier Pareto. Fungsi tujuan utama (primer) adalah minimasi total biaya:

$$Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{k \in K} h_k w_k + \sum_{i,j,t} c_{ij} x_{ijt} + \sum_{j,k,l,t} c_{jkl} q_{jkl t} + \sum_{j,p,t} s_{jp} v_{jpt}$$

di mana $y_i, z_j, w_k \in \{0,1\}$ adalah variabel biner pembukaan fasilitas, $x_{ijt}$ adalah volume susu mentah yang dikirimkan, $q_{jkl t}$ adalah volume distribusi ke pelanggan, $v_{jpt}$ adalah volume produksi, dan $s_{jp}$ adalah biaya produksi per liter.

Tujuan sekunder (约束 $\epsilon$-constraint):

$$Z_2 = \sum_{j,k,l,p,t} \alpha_p \cdot \tau_{jkl} \cdot q_{jkl t} \geq \epsilon_2 \quad \text{(batas minimum kesegaran)}$$

$$Z_3 = \sum_{i,j,k,l,p,t} \rho \cdot d_{ijkl} \cdot q_{ijkl t} \leq \epsilon_3 \quad \text{(batas emisi karbon)}$$

$$Z_4 = \sum_{l,p,t} \frac{\text{demand}_{lpt}^{fulfilled}}{\text{demand}_{lpt}} \geq \epsilon_4 \quad \text{(service level)}$$

### 2.4 Kendala (*Constraints*)

Kendala keseimbangan material pada PP $j$:
$$\sum_{i \in I} x_{ijt} = \sum_{p \in P} v_{jpt}, \quad \forall j \in J, t \in T$$

Kendala kapasitas:
$$\sum_{p \in P} v_{jpt} \leq \theta_j^{max} z_j, \quad \forall j \in J, t \in T$$

Kendala permintaan terpenuhi:
$$\sum_{j \in J, k \in K} q_{jkl t} = d_{lpt}, \quad \forall l \in L, p \in P, t \in T$$

### 2.5 Formulasi Benders Decomposition

Benders Decomposition mempartisi variabel menjadi **variabel kompleks (complicating variables)** $y = (y_i, z_j, w_k)$ yang bersifat biner dan **variabel kontinu** $X = (x_{ijt}, q_{jkl t}, v_{jpt})$.

**Master Problem (MP)**:
$$\min_{y} \sum_{i} f_i y_i + \sum_{j} g_j z_j + \sum_{k} h_k w_k + \theta$$
subject to: 
- Kendala kapasitas dan logis biner
- $\theta \geq \eta^s + \sum_{i,j,k} \pi^{s,T}(y - y^s), \quad \forall s \in \text{optimal cuts}$

di mana $\eta^s$ adalah nilai optimal subproblem pada iterasi $s$ dan $\pi^s$ adalah dual variables.

**Subproblem (SP)** untuk fixed $\bar{y}$:
$$\min_{X} \sum_{i,j,t} c_{ij} x_{ijt} + \sum_{j,k,l,t} c_{jkl} q_{jkl t} + \sum_{j,p,t} s_{jp} v_{jpt}$$
subject to: kendala keseimbangan material, kapasitas (dengan $\bar{y}$ fixed), permintaan.

Berdasarkan Yanzi Zhang et al. (2024), augmentasi berupa **quality-based feasibility cuts** dan **optimality cuts** dapat ditambahkan pada reverse supply chain case, di mana parameter kualitas $q_{product}$ (grade A/B/C) menentukan disposition produk (reprocess/remarket/dispose).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Lead Researchers (2023) dalam lingkungan industri mengikuti SOP tujuh-tahap berikut:

**Tahap 1 — Akuisisi Data Historis & Pemetaan Jaringan Eksisting.** Data dikumpulkan dari ERP (SAP S/4HANA, Oracle SCM), WMS, dan TMS selama 24–36 bulan terakhir. GIS mapping dilakukan untuk mengidentifikasi kandidat lokasi fasilitas berdasarkan zona industri, akses jalan tol, kedekatan dengan peternakan, dan ketersediaan listrik (penting untuk cold storage).

**Tahap 2 — Estimasi Parameter & Validasi Ahli.** Parameter permintaan $d_{lpt}$ diforecast menggunakan SARIMA atau Prophet; parameter kesegaran $\alpha_p$ dikalibrasi dari uji laboratorium (total plate count, acidity test); biaya transportasi menggunakan vehicle routing cost matrix.

**Tahap 3 — Formulasi Model & Implementasi Komputasional.** Model diimplementasikan dalam Python (Pyomo/Gurobi) atau AMPL + CPLEX. Library Benders khusus seperti `PyomoBenders` atau `GCG` (Gurobi Column & Cut Generator) digunakan untuk otomasi dekomposisi.

**Tahap 4 — Eksekusi Benders Iteratif.** Algoritma: (i) Inisialisasi $\bar{y}^0$, solve SP → optimal $(\eta^0, \pi^0)$; (ii) Solve MP dengan optimality cut → new $\bar{y}^{s+1}$; (iii) Repeat sampai $|gap| \leq 10^{-4}$. Pseudocode berikut:

```
Initialize UB=∞, LB=-∞, ε=1e-4
Solve relaxed MP → y^0
while (UB-LB)/UB > ε:
    Solve SP(y^s) → (η^s, π^s)
    UB = min(UB, c(y^s) + η^s)
    Add optimality cut: θ ≥ η^s + π^s·(y - y^s) to MP
    Solve MP → y^{s+1}, θ^{s+1}
    LB = c(y^{s+1}) + θ^{s+1}
end while
return y*
```

**Tahap 5 — Validasi Solusi dengan Simulasi Diskrit.** Solusi jaringan di-*stress-test* menggunakan simulasi Monte Carlo (AnyLogic, FlexSim) untuk skenario demand shock, disruption rantai dingin, dan fluktuasi harga bahan bakar.

**Tahap 6 — Analisis Pareto & Negosiasi Trade-off.** *Pareto frontier* dihasilkan dengan memvariasikan parameter $\epsilon$, kemudian disajikan ke manajemen menggunakan visualisasi interaktif (Tableau, Power BI) untuk negosiasi trade-off biaya vs kesegaran vs emisi.

**Tahap 7 — Implementasi Bertahap (*Phased Roll-out*).** Jaringan diimplementasikan dalam 3 fase (12 bulan per fase) dengan *pilot site* di 1 pabrik dan 2 DC sebelum full deployment, mengikuti prinsip *Plan-Do-Check-Act* (PDCA) dari ISO 9001:2015.

Diagram alir lengkap tujuh tahap ini dapat direpresentasikan sebagai: `Data Acquisition → Parameter Calibration → MILP Formulation → Benders Master-Subproblem Loop → Discrete-Event Validation → Pareto Negotiation → Phased Implementation`. Standar acuan yang relevan meliputi ISO 22000 (food safety management), ISO 14001 (environmental management), dan SQF Edition 9 untuk industri susu.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Data Hipotetis (Berdasarkan Karakteristik Industri Indonesia)

Pertimbangkan jaringan susu PT "X" di Pulau Jawa dengan parameter sebagai berikut:

| Parameter | Nilai |
|-----------|-------|
| Kandidat RMCC