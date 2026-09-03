# 1809 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Penentuan ukuran lot (lot sizing) dan penjadwalan produksi (production scheduling) merupakan dua keputusan operasional yang saling berinteraksi erat dalam sistem manufaktur modern. Secara historis, kedua keputusan ini sering ditangani secara terpisah dalam hierisasi perencanaan produksi (Hierarchical Production Planning, HPP) — lot sizing berada pada tingkatan Master Production Schedule (MPS), sedangkan penjadwalan rinci berada pada tingkatan Shop Floor Control. Namun dalam praktiknya, pemisahan ini menimbulkan *sub-optimization* yang merugikan perusahaan, karena kebijakan lot sizing yang "optimal" pada tingkat MPS dapat menghasilkan jadwal yang tidak layak di tingkat eksekusi.

Konteks industri yang melatarbelakangi penelitian ini sangat relevan untuk sektor *batch production* seperti industri makanan-minuman, farmasi, kimia khusus, dan komponen otomotif. Lead Researchers (2025) dalam artikelnya yang berjudul *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan sebuah model hibrida yang menjembatani kesenjangan antara formulasi stokastik akademik dan kebutuhan industri akan jadwal yang dapat dieksekusi. Urgensi operasionalnya nyata: kesalahan perencanaan ukuran lot pada industri *fast-moving consumer goods* (FMCG) dengan 50 SKU dan horizon 12 periode dapat menimbulkan *safety stock* berlebih hingga 18–22% dari kebutuhan aktual jika menggunakan pendekatan deterministik naïf.

Urgensi ekonomi muncul dari fluktuasi permintaan yang semakin tinggi akibat fragmentasi pasar, *short product life-cycles*, dan kustomisasi massal (mass customization). Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menekankan bahwa "pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan di praktik industri. Industri biasanya mengimplementasikan model deterministik dan mengakomodasi ketidakpastian dengan menggunakan *rolling-horizon planning framework* yang disertai *forecast update* yang sering." Pernyataan ini menggarisbawahi *research-practice gap* yang menjadi motivasi utama paper hibrida tersebut.

Urgensi teknis meliputi kapasitas produksi yang terbatas (*capacitated*), waktu setup yang *sequence-dependent*, dan kendala *bill of materials* multi-level. Pada industri kimia khusus misalnya, waktu pergantian produk (*changeover*) antar-grade dapat mencapai 4–8 jam, sehingga urutan produksi (*sequence*) bukan sekadar masalah efisiensi tetapi juga kelayakan operasional. Dengan demikian, integrasi keputusan lot sizing dan scheduling di bawah ketidakpastian permintaan bukan hanya perbaikan teoritis, melainkan kebutuhan rekayasa yang krusial untuk daya saing perusahaan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik CLSP (Capacitated Lot Sizing Problem)

Formulasi dasar *Capacitated Lot Sizing Problem* (CLSP) untuk $N$ produk dalam horizon $T$ periode adalah:

$$\min \; Z = \sum_{t=1}^{T} \sum_{i=1}^{N} \left( v_i x_{it} + h_i I_{it} + s_i y_{it} \right)$$

dengan kendala:

$$I_{i,t-1} + x_{it} - I_{it} = d_{it} \quad \forall i, t$$

$$x_{it} \leq C_{it} y_{it} \quad \forall i, t$$

$$\sum_{i=1}^{N} a_{it} x_{it} \leq CAP_t \quad \forall t$$

$$y_{it} \in \{0,1\}, \; x_{it} \geq 0, \; I_{it} \geq 0$$

di mana $v_i$ adalah biaya variabel produksi, $h_i$ biaya simpan, $s_i$ biaya setup, $C_{it}$ kapasitas maksimum, $a_{it}$ waktu proses per unit, dan $CAP_t$ kapasitas total periode $t$.

### 2.2 Formulasi Hibr