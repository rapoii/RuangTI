# 2033 — Sistem Perencanaan Rantai Pasok Lanjutan (Advanced Planning Systems) dalam Industri Pangan: Integrasi Model Matematis, Matheuristik, dan Implementasi Software

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Systematic Literature Review of Modelling Approaches and Implementation of Enabling Software for Supply Chain Planning in the Food Industry
**Jurnal & Sitasi Utama:** David Stüve, Robert Van Der Meer, Mouhamad Shaker Ali Agha (2022). *Production & Manufacturing Research*. DOI: [https://doi.org/10.1080/21693277.2022.2091057](https://doi.org/10.1080/21693277.2022.2091057)
**Sitasi Pendukung:** Sara Charaf, Duygu Taş, Simme Douwe P. Flapper (2024). *Computers & Operations Research*. DOI: [https://doi.org/10.1016/j.cor.2024.106778](https://doi.org/10.1016/j.cor.2024.106778)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok industri pangan merupakan salah satu sistem logistik paling kompleks di dunia modern karena menghadapi tantangan unik yang tidak dijumpai pada rantai pasok manufaktur konvensional. Stüve, Van Der Meer, dan Agha (2022) dalam *Production & Manufacturing Research* menegaskan bahwa karakteristik produk pangan yang mudah rusak (*perishable*), tengkulak (*commodity*) dengan margin tipis, musiman (*seasonality*) permintaan yang tinggi, serta regulasi keamanan pangan (*food safety*) yang ketat, menuntut keputusan perencanaan yang simultan pada tiga tingkatan hierarkis: desain jaringan rantai pasok (Supply Chain Network Design/SCND), perencanaan penjualan dan operasi (Sales & Operations Planning/S&OP), serta perencanaan dan penjadwalan produksi (Production Planning & Scheduling/PP&S). Pada ranah operasional, sistem Advanced Planning Systems (APS) telah muncul sebagai platform perangkat lunak yang menjanjikan peningkatan efisiensi pengambilan keputusan, namun tinjauan sistematis yang dilakukan oleh Stüve et al. (2022) mengungkap jurang (*gap*) yang nyata antara literatur akademis yang kaya akan model optimasi dengan implementasi empiris di lapangan yang masih sangat terbatas (Stüve et al., 2022, DOI: [10.1080/21693277.2022.2091057](https://doi.org/10.1080/21693277.2022.2091057)).

Konteks ekonomi global memperkuat urgensi topik ini. Data industri menunjukkan bahwa biaya logistik dapat menyerap 12–15% dari PDB suatu negara, sementara food waste menyumbang sekitar 8–10% dari emisi gas rumah kaca global. Pada rantai pasok dingin (*cold chain*), keputusan routing dan inventory tidak dapat dilepaskan satu sama lain karena keputusan pengiriman memengaruhi langsung tingkat persediaan di tingkat retail. Inilah yang mendasari Charaf, Taş, dan Flapper (2024) dalam *Computers & Operations Research* mengembangkan *two-echelon inventory-routing problem* (2E-IRP) di bawah rezim Vendor-Managed Inventory (VMI), di mana pemasok bertanggung jawab penuh memenuhi permintaan pelanggan geografis yang tersebar melalui fasilitas perantara dalam horizon perencanaan hingga beberapa periode (Charaf et al., 2024, DOI: [10.1016/j.cor.2024.106778](https://doi.org/10.1016/j.cor.2024.106778)). Dekomposisi operasional keputusan routing dan inventory—yang selama ini dianggap deterministik dan sekuensial—menjadi keputusan terkoordinasi dalam horizon diskrit, merupakan kontribusi signifikan bagi industri pangan modern.

Dalam perspektif transformasi digital, Industry 4.0 menuntut integrasi antara APS dengan platform ERP (Enterprise Resource Planning), sensor IoT untuk pelacakan suhu, dan algoritma metaheuristik untuk pemecahan masalah NP-hard secara *real-time*. Modul 2033 ini menyajikan kerangka komprehensif yang menjembatani ketiga elemen tersebut dengan menggunakan formulasi matematis yang ketat dan bukti empiris berbasis kasus.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Supply Chain Network Design (SCND)

SCND menentukan lokasi fasilitas, kapasitas, dan alokasi aliran dalam horizon jangka panjang. Formulasi Mixed Integer Linear Programming (MILP) yang dirangkum dari Stüve et al. (2022) adalah sebagai berikut:

$$\min Z_{SCND} = \sum_{i \in I} f_i y_i + \sum_{i \in I} \sum_{j \in J} \sum_{p \in P} c_{ij}^p x_{ij}^p + \sum_{j \in J} \sum_{p \in P} h_j^p s_j^p$$

Subject to:
$$\sum_{i \in I} x_{ij}^p = d_j^p, \quad \forall j \in J, p \in P$$
$$\sum_{j \in J} x_{ij}^p \leq K_i y_i, \quad \forall i \in I, p \in P$$
$$x_{ij}^p \geq 0, \; y_i \in \{0,1\}$$

di mana $y_i$ adalah variabel biner pembukaan fasilitas, $x_{ij}^p$ adalah alokasi produk $p$ dari fasilitas $i$ ke pelanggan $j$, $f_i$ adalah biaya tetap, $c_{ij}^p$ adalah biaya transportasi per unit, $h_j^p$ adalah biaya inventory, dan $K_i$ adalah kapasitas fasilitas.

### 2.2 Formulasi Sales & Operations Planning (S&OP)

S&OP menyeimbangkan penawaran dan permintaan dalam horizon bulanan-kuartalan. Stüve et al. (2022) menyusun formulasi linear programming dengan variabel produksi, inventaris, dan backorder:

$$\min Z_{S\&OP} = \sum_{t=1}^{T} \left[ \sum_{p \in P} (c_p^t P_p^t + h_p^t I_p^t + b_p^t B_p^t + o_p^t O_p^t + u_p^t U_p^t) \right]$$

dengan kendala keseimbangan stok:
$$I_{p,t} = I_{p,t-1} + P_p^t + U_p^t - O_p^t - D_p^t + B_{p,t-1} - B_{p,t}, \quad \forall p, t$$
$$0 \leq P_p^t \leq P_p^{max}, \quad 0 \leq O_p^t \leq D_p^t$$
$$U_p^t, O_p^t \geq 0, \quad B_{p,t} \geq 0$$

### 2.3 Formulasi Production Planning & Scheduling (PP&S)

Pada tingkatan taktis-operasional, PP&S mencakup penugasan mesin dan urutan job pada lini produksi dengan batasan kapasitas dan *sequence-dependent setup*. Formulasi umumnya:

$$\min \sum_{j \in J} \sum_{t \in T} c_j X_{jt} + \sum_{s \in S} \alpha_s S_s$$
$$\text{s.t.} \quad \sum_{j \in J} a_{ij} X_{jt} \leq C_i, \quad \forall i, t$$
$$S_{s} \geq X_{j,s} - X_{j,s-1}, \quad \forall j, s \geq 2$$
$$X_{jt} \in \mathbb{Z}_{\geq 0}$$

### 2.4 Formulasi Two-Echelon Inventory-Routing Problem (2E-IRP) — Charaf et al. (2024)

Charaf et al. (2024) memformulasikan masalah sebagai berikut. Diberikan himpunan pelanggan $N$, fasilitas perantara $F$, depot $D$, kendaraan $K$, dan horizon diskrit $T$:

**Parameter:** $c_{ij}$ = biaya routing antara simpul $i$ dan $j$; $h_i$ = biaya inventory per unit di pelanggan $i$; $d_{it}$ = permintaan $i$ pada periode $t$; $Q_k$ = kapasitas kendaraan; $V_i$ = kapasitas inventory.

**Variabel keputusan:** $x_{ijkt} \in \{0,1\}$ (routing), $q_{it} \geq 0$ (kuantitas pengiriman), $I_{it} \geq 0$ (level inventory di pelanggan).

**Fungsi tujuan:**
$$\min Z_{IRP} = \underbrace{\sum_{k \in K} \sum_{t \in T} \sum_{(i,j) \in A} c_{ij} x_{ijkt}}_{\text{routing cost}} + \underbrace{\sum_{i \in N} \sum_{t \in T} h_i I_{it}}_{\text{inventory cost}}$$

**Kendala utama:**
$$\sum_{j \in N \cup F} x_{ijkt} - \sum_{j \in N \cup F} x_{jikt} = 0, \quad \forall i, k, t \quad \text{(flow conservation)}$$
$$I_{i,t} = I_{i,t-1} + q_{it} - d_{it}, \quad \forall i \in N, t \in T \quad \text{(inventory balance)}$$
$$\sum_{i \in N} q_{it} \leq Q_k, \quad \forall k \in K, t \in T \quad \text{(vehicle capacity)}$$
$$0 \leq I_{it} \leq V_i, \quad \forall i, t \quad \text{(inventory bounds)}$$
$$\sum_{i \in N \cup F} x_{iikt} = 0, \quad \forall k, t \quad \text{(no self-loop)}$$

Charaf et al. (2024) mengusulkan **matheuristik dua fase** yang menggabungkan Tabu Search (TS) pada fase pertama untuk eksplorasi neighborhood, dan model matematis MILP pada fase kedua untuk perbaikan (*improvement*) rute parsial, sehingga tercapai gap optimalitas rata-rata <1% pada 99 instance uji kecil.

---

## 3. Metodologi Rekayasa & SOP Implementasi APS

Berdasarkan sintesis Stüve et al. (2022), implementasi APS di industri pangan mengikuti SOP delapan tahap:

```
[FASE 1: Diagnosis]
   ↓
[FASE 2: Pemodelan SCND]
   ↓
[FASE 3: S&OP Configuration]
   ↓
[FASE 4: PP&S