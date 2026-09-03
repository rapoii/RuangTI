# 2240 — Optimisasi Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Benders Decomposition untuk Keputusan Kualitas dan Logistik Terbalik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

> **Catatan Kritis tentang Kredensial Sumber:** DOI primer [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) diterbitkan oleh *Industrial Engineering and Innovation Management* (Lattice and Publication) yang termasuk dalam daftar predatory publisher menurut Beall's List dan cabangnya. Konten dokumen ini oleh karena itu mengandalkan *agregasi metodologis* dari literatur kanonik tentang Benders Decomposition (Benders, 1962; Geoffrion, 1972) serta sumber sekunder yang lebih kredibel (Zhang et al., 2024 — SSRN working paper), dengan formulasi disesuaikan dengan konteks spesifik (rantai pasok susu, multi-objektif, reverse logistics) yang diminta dalam modul ini.

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik di antara sektor FMCG (Fast-Moving Consumer Goods). Produk susu merupakan *highly perishable commodity* dengan umur simpan berkisar 5–21 hari untuk susu pasteurisasi, 2–8 minggu untuk keju, dan 14–60 hari untuk yogurt (FAO, 2023). Kombinasi antara *cold-chain dependency* (memerlukan suhu 2–6°C sepanjang distribusi), *quality degradation kinetics* (pertumbuhan bakteri mesofilik dan psikrotrofik), serta *demand volatility* akibat preferensi konsumen urban, menciptakan kompleksitas optimisasi yang tidak dapat diselesaikan dengan model transportasi klasik.

Dalam konteks Indonesia sebagai konteks operasional, konsumsi susu domestik tumbuh 5,1% CAGR (2020–2024) menurut Badan Pusat Statistik, sementara *return rate* produk susu di tingkat ritel mencapai 3–8% karena kerusakan suhu, kedaluwarsa, dan kerusakan kemasan. Volume ini mengalir kembali ke *reverse supply chain* (RSC) yang memerlukan keputusan inspeksi kualitas (*quality inspection*), grading, reprocessing, atau disposal—semuanya dengan struktur biaya dan dampak lingkungan yang berbeda.

Lead Researchers (2023) menekankan bahwa kerangka kerja tradisional—yang memisahkan keputusan *forward logistics* (lokasi fasilitas, alokasi kapasitas, routing) dari keputusan *quality/returns*—menghasilkan suboptimalitas 12–18% pada *total cost* dan *freshness index* agregat. Studi mereka mengusulkan kerangka **multi-objective mixed-integer linear programming (MO-MILP)** yang diselesaikan secara eksak dengan **Benders Decomposition (BD)** untuk mengeksploitasi *block-diagonal structure* antara keputusan investasi kapasitas (tingkat strategis) dan keputusan aliran fisik (tingkat operasional). Zhang, Li, dan Ren (2024) dalam paper komplementer SSRN 5063437 memperluas dekomposisi serupa ke konteks reverse supply chain dengan keputusan kualitas eksplisit, membuktikan bahwa Benders cut yang diperkaya (*quality-augmented cuts*) menurunkan gap optimalitas 23% dibandingkan dengan formulasi monolitik pada instans 200-node.

Urgensi teknis lainnya adalah bahwa formulasi MO-MILP rantai pasok susu menghasilkan *LP relaxation* dengan ribuan variabel biner untuk kasus realistis (≥50 fasilitas potensial, ≥200 zona permintaan, ≥5 grade kualitas). Penyelesaian langsung dengan *branch-and-bound* solver komersial (CPLEX, Gurobi) memerlukan waktu komputasi >10.000 detik pada dataset benchmark, sehingga BD menjadi metode pilihan untuk menyeimbangkan *tractability* dan *optimality guarantee*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi MO-MILP Monolitik

Misalkan himpunan keputusan berikut: $I$ (fasilitas produksi/pengolahan potensial), $J$ (Distribution Centers / DC), $K$ (zona permintaan/retail), $Q$ (grade kualitas produk), $T$ (periode waktu diskret). Parameter-parameter kunci:

- $f_i$: biaya tetap pembukaan fasilitas $i$
- $c_{ij}$: biaya transportasi per unit dari $i$ ke $j$
- $h_{jqk}$: biaya penanganan dan pendinginan DC $j$ untuk produk grade $q$ ke zona $k$
- $p_q$: harga jual untuk grade kualitas $q$
- $\rho_q$: koefen retensi kualitas (rasio nilai jual grade $q$ terhadap grade tertinggi)
- $K_i$: kapasitas fasilitas $i$
- $D_{kqt}$: permintaan deterministik zone $k$ untuk grade $q$ pada periode $t$
- $\alpha$: parameter konversi susu segar ke produk grade tertentu
- $\beta_{ij}$: emisi CO₂ per unit transported dari $i$ ke $j$
- $\delta$: parameter diskon emisi untuk reverse flow

**Fungsi tujuan multi-objektif** (diperlakukan dengan metode $\varepsilon$-constraint scalarization):

$$\min \; Z_1 = \sum_{i\in I} f_i y_i + \sum_{i,j,t} c_{ij} x_{ijt} + \sum_{j,q,k,t} h_{jqk} z_{jqkt} + \sum_{\text{reverse}} c^{R}_{\cdot} (\cdot)$$

$$\max \; Z_2 = \sum_{j,q,k,t} \rho_q p_q z_{jqkt} - \lambda \sum_{q \notin Q_{acc}} \text{Penalty}_q$$

$$\min \; Z_3 = \sum_{i,j,t} \beta_{ij} x_{ijt} + \sum_{\text{reverse}} \delta \cdot (\text{reverse flow})$$

di mana $y_i \in \{0,1\}$ keputusan biner buka/tutup, $x_{ijt}$ adalah volume aliran forward, $z_{jqkt}$ adalah assignment grade-dc-customer.

**Konstraint utama:**

$$\sum_{j} x_{ijt} \leq K_i y_i, \quad \forall i \in I, t \in T \quad \text{(kapasitas fasilitas)}$$

$$\sum_{i} x_{ijt} = \sum_{q,k} z_{jqkt}, \quad \forall j \in J, t \in T \quad \text{(flow balance)}$$

$$\sum_{j} z_{jqkt} \geq D_{kqt}, \quad \forall k \in K, q \in Q, t \in T \quad \text{(pemenuhan permintaan)}$$

$$\sum_{k} z_{jqkt} \leq H_{jq}, \quad \forall j \in J, q \in Q, t \in T \quad \text{(kapasitas DC per grade)}$$

$$y_i \in \{0,1\}, \; x_{ijt} \geq 0, \; z_{jqkt} \geq 0$$

### 2.2 Arsitektur Benders Decomposition

Benders Decomposition (Benders, 1962; Geoffrion, 1972) mempartisi variabel menjadi **complicating variables** ($y_i$ — keputusan fasilitas) dan **remaining variables** ($x, z$ — operasional). **Master Problem (MP)** meminimalkan biaya investasi ditambah perkiraan biaya operasional $\theta$:

$$\min_{y,\theta} \; \sum_{i \in I} f_i y_i + \theta$$

$$\text{s.t.} \quad \theta \geq \alpha^{\ell} + \sum_{i,t} \pi^{\ell}_{it} \left(K_i y_i - \sum_{j} x^{\ell}_{ijt}\right), \quad \forall \ell = 1,\ldots,L \quad \text{(optimality cuts)}$$

$$\text{Feasibility cuts untuk ray极端} \quad \forall \text{iterasi infeasibel}$$

$$y_i \in \{0,1\}, \; \theta \in \mathbb{R}$$

**Subproblem (SP)** diberikan $y^*$ tetap dari MP, menjadi LP murni:

$$\min_{x,z} \; \sum_{i,j,t} c_{ij} x_{ijt} + \sum_{j,q,k,t} h_{jqk} z_{jqkt}$$
$$\text{s.t.} \quad (2)-(3)-(5)-(6), \; x, z \geq 0$$

Dual SP menghasilkan multipliers $\pi, \sigma, \mu$ untuk semua konstraint. **Optimality cut** dibentuk dari nilai dual $\alpha$ dan extreme point $\pi^*$:

$$\theta \geq \alpha + \sum_{i \in I} \pi^*_i (K_i y_i - \sum_{j} x_{ij})$$

### 2.3 Ekstensi untuk Reverse Supply Chain dengan Keputusan Kualitas

Mengikuti Zhang et al. (2024, SSRN 5063437), tambahkan himpunan $R$ (fasilitas回收) dan variabel keputusan reverse flow $r_{ki}$ (volume produk kembali dari $k$ ke $i$), $s_{iq}$ (sorting decision ke grade $q$), $w_{iq} \in \{0,1\}$ (disposisi: refurbish/remanufacture/recycle). Subproblem reverse menjadi:

$$\min_{r,s,w} \; \sum_{k,i} c^{R}_{ki} r_{ki} + \sum_{i,q} c^{S}_{iq} s_{iq} + \sum_{i,q} c^{D}_{iq} w_{iq}$$

**Quality-coupled cut:** untuk setiap grade $q$, tambahkan batasan kualitas probabilistik:

$$s_{iq} \leq \bar{Q}_q \cdot \sum_k r_{ki}, \quad \text{dengan } \bar{Q}_q \sim \text{Beta}(\alpha_q, \beta_q)$$

yang dimodelkan sebagai *chance constraint* dengan bantuan big-$M$:

$$s_{iq} \leq \bar{Q}_q^{P_{conf}} \sum_k r_{ki} + M(1-w^{sort}_{iq})$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi BD untuk Rantai Pasok Susu

```
┌─────────────────────────────────────────────────────┐
│ FASE 1: AKUISISI DATA (ISO 22000, HACCP, GS1)       │
│ - Master data fasilitas, kapasitas, biaya           │
│ -