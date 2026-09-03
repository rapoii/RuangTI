# 885 — Optimasi Pengambilan Pesanan di Gudang E-Commerce Besar: Pengelompokan Pesanan Bersama, Penugasan Zona, dan Algoritma Rute Picker TSP S-Shape Optimal

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Order Picking Optimization in Large E-Commerce Warehouses: Joint Order Batching, Zone Assignment, and Travelling Salesman S-Shape / Optimal TSP Picker Routing Algorithm  
**Standar & Referensi Utama:** de Koster, Le-Duc & Roodbergen (Eur. J. Oper. Res.); Ratliff & Rosenthal (Oper. Res. - S-Shape Optimal Router); Frazelle (World-Class Warehousing)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era digital saat ini, e-commerce telah menjadi pilar utama dalam sistem distribusi global. Dengan meningkatnya volume transaksi online, gudang e-commerce menghadapi tantangan signifikan dalam hal efisiensi operasional dan pengelolaan rantai pasok. Optimasi proses pengambilan pesanan (order picking) menjadi krusial karena berkontribusi langsung terhadap waktu pemenuhan pesanan dan kepuasan pelanggan. Menurut de Koster et al. (2007), pengambilan pesanan dapat menyumbang hingga 55% dari total biaya operasional gudang, sehingga memerlukan perhatian khusus dalam perancangan dan pengelolaan.

Tantangan utama dalam pengambilan pesanan di gudang besar mencakup pengelompokan pesanan yang efisien, penugasan zona yang optimal, dan pengaturan rute pengambilan yang efektif. Pengelompokan pesanan yang tidak efisien dapat menyebabkan perjalanan yang tidak perlu, meningkatkan waktu siklus dan biaya tenaga kerja. Penugasan zona yang tidak tepat dapat mengakibatkan penumpukan barang dan mengurangi throughput. Selain itu, algoritma rute pengambilan yang tidak optimal dapat memperpanjang waktu perjalanan picker, yang berdampak pada produktivitas keseluruhan.

Dalam konteks ini, penelitian ini bertujuan untuk mengeksplorasi metode optimasi yang mengintegrasikan pengelompokan pesanan, penugasan zona, dan algoritma rute pengambilan TSP S-Shape. Dengan pendekatan ini, diharapkan dapat dicapai efisiensi yang lebih tinggi dalam pengambilan pesanan, yang pada akhirnya akan meningkatkan kinerja gudang dan kepuasan pelanggan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Pengelompokan Pesanan

Pengelompokan pesanan adalah proses mengelompokkan beberapa pesanan untuk diambil secara bersamaan. Misalkan kita memiliki $N$ pesanan yang harus dipenuhi, dan setiap pesanan $i$ memiliki item $j$ yang harus diambil. Kita mendefinisikan variabel $x_{ij}$ sebagai:

$$
x_{ij} = 
\begin{cases} 
1 & \text{jika item } j \text{ diambil untuk pesanan } i \\
0 & \text{sebaliknya}
\end{cases}
$$

Tujuan dari pengelompokan adalah meminimalkan total waktu pengambilan, yang dapat dinyatakan sebagai:

$$
\text{Minimize } Z = \sum_{i=1}^{N} \sum_{j=1}^{M} d_{ij} x_{ij}
$$

di mana $d_{ij}$ adalah waktu yang diperlukan untuk mengambil item $j$ untuk pesanan $i$.

### 2.2. Penugasan Zona

Penugasan zona melibatkan pembagian gudang menjadi beberapa zona, di mana setiap zona ditugaskan untuk mengambil item tertentu. Misalkan kita memiliki $Z$ zona, dan kita mendefinisikan variabel $y_{iz}$ sebagai:

$$
y_{iz} = 
\begin{cases} 
1 & \text{jika pesanan } i \text{ ditugaskan ke zona } z \\
0 & \text{sebaliknya}
\end{cases}
$$

Tujuan dari penugasan zona adalah meminimalkan total waktu perjalanan, yang dapat dinyatakan sebagai:

$$
\text{Minimize } W = \sum_{i=1}^{N} \sum_{z=1}^{Z} t_{iz} y_{iz}
$$

di mana $t_{iz}$ adalah waktu perjalanan untuk mencapai zona $z$ dari posisi awal.

### 2.3. Algoritma Rute TSP S-Shape

Rute pengambilan dapat dimodelkan sebagai masalah Traveling Salesman Problem (TSP). Dalam konteks ini, kita mencari rute optimal yang mengunjungi setiap item yang diperlukan untuk pesanan. Misalkan $C_{ij}$ adalah biaya perjalanan dari item $i$ ke item $j$. Tujuan dari TSP adalah meminimalkan total biaya perjalanan:

$$
\text{Minimize } C = \sum_{i=1}^{N} \sum_{j=1}^{N} C_{ij} z_{ij}
$$

dengan syarat bahwa setiap item harus dikunjungi tepat satu kali.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Data Awal**: Kumpulkan data historis tentang pesanan, item, dan waktu pengambilan.
2. **Pengelompokan Pesanan**: Gunakan algoritma pengelompokan (seperti K-Means) untuk mengelompokkan pesanan berdasarkan kesamaan item.
3. **Penugasan Zona**: Tentukan zona berdasarkan lokasi item dalam gudang untuk meminimalkan waktu perjalanan.
4. **Rute Pengambilan**: Terapkan algoritma TSP S-Shape untuk menentukan rute optimal dalam setiap zona.
5. **Pengujian dan Validasi**: Uji sistem dengan data nyata dan validasi hasil untuk memastikan efisiensi.

### 3.2. Diagram Alir Proses

```
[Analisis Data] --> [Pengelompokan Pesanan] --> [Penugasan Zona] --> [Rute Pengambilan] --> [Pengujian]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Input Parameter

- Jumlah pesanan ($N$): 100
- Jumlah item per pesanan ($M$): 5
- Waktu pengambilan rata-rata per item ($d_{ij}$): 2 menit
- Waktu perjalanan rata-rata antar zona ($t_{iz}$): 3 menit

### 4.2. Langkah Kalkulasi

1. **Pengelompokan Pesanan**:
   - Misalkan kita mengelompokkan pesanan menjadi 20 kelompok.
   - Total waktu pengambilan untuk satu kelompok:

   $$
   Z = 20 \times 5 \times 2 = 200 \text{ menit}
   $$

2. **Penugasan Zona**:
   - Misalkan ada 4 zona.
   - Total waktu perjalanan untuk satu zona:

   $$
   W = 4 \times 3 = 12 \text{ menit}
   $$

3. **Rute Pengambilan TSP**:
   - Misalkan total biaya perjalanan untuk rute optimal adalah 50 menit.

### 4.3. Interpretasi Hasil

Total waktu untuk memenuhi 100 pesanan adalah:

$$
\text{Total Waktu} = Z + W + C = 200 + 12 + 50 = 262 \text{ menit}
$$

Dengan optimasi yang tepat, waktu pemenuhan dapat dikurangi, meningkatkan efisiensi operasional.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Optimasi pengambilan pesanan tidak hanya relevan untuk industri e-commerce, tetapi juga dapat diterapkan dalam sektor lain seperti manufaktur dan distribusi. Dalam konteks Supply Chain, pengelolaan yang efisien dapat mengurangi biaya dan meningkatkan layanan pelanggan. Otomasi dalam proses pengambilan juga menjadi tren yang berkembang, di mana teknologi seperti robotika dan AI dapat meningkatkan efisiensi lebih lanjut.

Namun, terdapat batasan dalam metodologi ini, seperti kompleksitas algoritma dan kebutuhan akan data yang akurat. Penelitian masa depan dapat fokus pada pengembangan algoritma yang lebih efisien dan penerapan teknologi baru untuk meningkatkan sistem pengambilan pesanan.

Dengan demikian, optimasi pengambilan pesanan di gudang e-commerce besar adalah langkah penting menuju efisiensi operasional yang lebih baik, yang pada akhirnya akan memberikan keuntungan kompetitif di pasar yang semakin ketat.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
