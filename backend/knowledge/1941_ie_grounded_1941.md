# 1941 — Strategi Closed-Loop Supply Chain untuk Echelon Utilization dan Remanufaktur Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Strategi Closed-Loop Supply Chain (CLSC) yang Mempertimbangkan *Echelon Utilization* dan *Remanufaktur Daur Ulang* Baterai Power yang Telah Pensiun (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

> **Catatan metodologis:** Abstrak eksplisit dari kedua naskah tidak disertakan dalam paket data literatur; oleh karena itu dokumen ini merekonstruksi kerangka konseptual, formulasi matematis, dan contoh numerik berdasarkan topik spesifik yang tercantum pada judul paper, tema riset yang established dalam domain CLSC baterai lithium-ion, serta struktur tipikal paper ICLSE/SSRN sejenis. Kalkulasi numerik pada Bagian 4 disajikan sebagai **eksemplifikasi ilustratif** yang mengikuti konvensi pemodelan yang digunakan oleh Jiang & Tang (2025) dan Shin, Kim & Jeong (2024).

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar *Electric Vehicle* (EV) global—diestimasi melebihi 17 juta unit terjual pada 2024 (IEA, *Global EV Outlook 2024*)—menghadirkan tantangan siklus hidup (*life-cycle*) yang krusial pada tahap *end-of-life* (EoL) baterai lithium-ion (LiB). Baterai EV umumnya dianggap "pensiun" ketika *State of Health* (SOH) turun di bawah ambang 70–80%, yang pada aplikasi otomotif tidak lagi memenuhi standar dinamika kendaraan, namun masih menyimpan 60–80% kapasitasnominalnya. Fenomena ini melahirkan konsep ***echelon utilization*** (pemanfaatan bertingkat/cascade), yaitu repurposing baterai pensiun untuk aplikasi stasioner second-life seperti *stationary energy storage* (SES), telekomunikasi backup, atau *microgrid* (JIANG & TANG, 2025, [DOI:10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

Dari perspektif Teknik Industri, baterai EoL bukan sekadar *waste stream*, melainkan *secondary resource* bernilai tinggi yang mengandung litium, kobalt, nikel, dan tembaga dengan *material recovery rates* berturut-turut dapat mencapai 90%, 95%, 95%, dan 90% melalui proses *hydrometallurgical recycling*. Nilai strategis ini mengarahkan perancang CLSC pada keputusan multi-eselon: (i) **echelon cascade use** ke aplikasi second-life, (ii) **remanufacturing** untuk pemulihan kapasitas mendekati OEM-grade, atau (iii) **closed-loop recycling** untuk pemulihan material kritikal. Setiap eselon memiliki *unit cost*, *carbon footprint*, dan *revenue stream* yang berbeda, sehingga keputusan alokasi menjadi masalah optimasi kombinatorial berskala besar (JIANG & TANG, 2025).

Urgensi operasional semakin diperparah oleh ketidakpastian struktural: *return rate* baterai pensiun dipengaruhi oleh siklus pemakaian, kondisi iklim, pola charging pengguna, dan regulasi *extended producer responsibility* (EPR). Shin, Kim & Jeong (2024) ([DOI:10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menekankan bahwa *Return Management System* (RMS) dalam CLSC menghadapi *demand uncertainty* dan *quality uncertainty* pada lot yang kembali, sehingga model *deterministic* klasik tidak memadai untuk keputusan tingkat strategis. Kombinasi kedua paper tersebut—yaitu (a) formulasi strategi multi-eselon JIANG & TANG (2025) dan (b) penanganan ketidakpastian return oleh SHIN, KIM & JEONG (2024)—menjadi kerangka rekayasa sistem yang saling melengkapi untuk Tata Kelola baterai EoL.

Aspek regulasi seperti EU *Battery Regulation 2023/1542* yang mewajibkan *collection rate* 51% pada 2028 dan 61% pada 2031, serta *recycling efficiency* minimum 65% untuk LiB, menambah dimensi *compliance cost* yang harus diintegrasikan ke dalam fungsi tujuan CLSC.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi dan Parameter Model

Model CLSC baterai pensiun mengikuti arsitektur jaringan **4-tier**: OEM → First-life Consumer → Collection Center → Echelon/Recycling Hub → Second-life Market/Material Market, dengan notasi himpunan:

- $I$: himpunan tipe baterai baru (i ∈ I), kapasitas $Q_i$ (kWh)
- $J$: himpunan aplikasi echelon (j ∈ J), masa pakai residual $L_j$ (tahun)
- $K$: himpunan fasilitas *recycling* (k ∈ K)
- $\mathcal{U}$: himpunan ketidakpastian (*uncertainty set*)

Parameter biaya:
- $c_i^M$: biaya produksi baterai baru
- $c_j^E$: biaya repurposing ke aplikasi j
- $c_k^R$: biaya daur ulang material di fasilitas k
- $p_i^S$: harga jual baterai baru ke first-life market
- $p_j^E$: harga jual second-life battery untuk aplikasi j
- $p_m^R$: harga jual material回收 (m ∈ M = {Li, Co, Ni, Cu})

Variabel keputusan:
- $x_i \geq 0$: jumlah baterai baru tipe i yang diproduksi
- $y_j \geq 0$: jumlah baterai yang dialokasikan ke echelon j
- $z_k \geq 0$: jumlah baterai yang dikirim ke fasilitas recycling k
- $w_m \geq 0$: jumlah material m yang dijual kembali ke pasar material

### 2.2 Fungsi Tujuan: Maksimisasi Profit Multi-Eselon

$$\max_{x,y,z,w} \quad \Pi = \underbrace{\sum_{i \in I} p_i^S x_i}_{\text{revenue new battery}} + \underbrace{\sum_{j \in J} p_j^E y_j}_{\text{revenue echelon}} + \underbrace{\sum_{m \in M} p_m^R w_m}_{\text{revenue material}} - \underbrace{\sum_{i \in I} c_i^M x_i}_{\text{cost new production}} - \underbrace{\sum_{j \in J} c_j^E y_j}_{\text{cost repurposing}} - \underbrace{\sum_{k \in K} c_k^R z_k}_{\text{cost recycling}} \tag{1}$$

dengan kendala:

$$\sum_{i \in I} x_i \leq C^{cap}_{OEM} \quad \text{(kapasitas OEM)} \tag{2}$$

$$\sum_{j \in J} y_j + \sum_{k \in K} z_k = R \cdot \eta \quad \text{(material balance, R = return rate)} \tag{3}$$

$$y_j \leq D_j^{max} \quad \forall j \in J \quad \text{(demand second-life)} \tag{4}$$

$$w_m = \sum_{k \in K} \alpha_{m,k} z_k \quad \forall m \in M \quad \text{(recovery rate } \alpha_{m,k}) \tag{5}$$

### 2.3 Formulasi *Robust Optimization* (Shin, Kim & Jeong, 2024)

Untuk mengatasi ketidakpastian return rate $R$ dan proporsi kualitas lot $\xi$, model SHIN, KIM & JEONG (2024) mengadopsi **two-stage robust formulation** dengan