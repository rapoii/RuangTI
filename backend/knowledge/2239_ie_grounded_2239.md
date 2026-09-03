# 2239 — Redesain Produk Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan dan wellness global mengalami transformasi signifikan di mana permintaan akan produk yang aman secara higienitas, efisien secara produksi, dan terjangkau secara harga menjadi determinan utama daya saing. Coffee enema basket—sebuah instrumen yang digunakan untuk menahan bubuk kopi (ground coffee) pada prosedur retensi enema kolon—merupakan produk dengan geometri sederhana namun memiliki kompleksitas perakitan yang cukup tinggi pada desain orisinalnya. Amirullah dan Jakaria (2024) dalam tulisannya yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa banyak produsen alat kesehatan kecil-menengah di Indonesia masih mengandalkan desain warisan (legacy design) tanpa melakukan evaluasi sistematis berbasis *Design for Manufacture and Assembly* (DFMA), sehingga biaya produksi, waktu perakitan, dan tingkat reject menjadi tidak optimal.

Urgensi penerapan DFMA dalam konteks ini diperkuat oleh argumentasi yang dikemukakan oleh Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang menemukan bahwa keputusan desain yang diambil secara konvensional—hanya berdasarkan biaya dan kecukupan struktural—memunculkan *buildability problems* yang baru teridentifikasi pada tahap shop-drawing atau bahkan di lapangan, ketika koreksi sudah sangat mahal. Prinsip yang sama berlaku pada produk consumer-grade seperti coffee enema basket: apabila keputusan manufaktur tidak dimasukkan ke dalam fase desain konseptual, maka biaya produksi akan terkunci pada tingkat yang tidak efisien. Pendekatan DFMA yang diperkenalkan oleh Boothroyd dan Dewhurst memungkinkan seorang insinyur untuk menyederhanakan struktur produk sejak fase konseptual, sehingga jumlah komponen (*part count*), jumlah pengikat (*fastener count*), waktu perakitan, dan total biaya produksi dapat ditekan secara terukur.

Dalam konteks persaingan global dan tekanan *time-to-market*, perusahaan manufaktur tidak lagi memiliki kemewaan untuk memperbaiki desain setelah produksi massal dimulai. Oleh karena itu, redesain sistematis menggunakan DFMA menjadi kebutuhan strategis, bukan sekadar pilihan metodologis. Modul ini membahas kerangka analitis, formulasi matematis, dan prosedur operasional yang diperlukan untuk melaksanakan redesain DFMA pada produk coffee enema basket, sekaligus mengekstrapolasi penerapannya ke sektor manufaktur lain termasuk konstruksi prefabrikasi sebagaimana diteliti oleh Islam (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar DFMA

DFMA merupakan integrasi dua pendekatan simultan: **Design for Manufacture (DFM)** yang mengoptimalkan proses fabrikasi setiap komponen, dan **Design for Assembly (DFA)** yang meminimalkan kompleksitas perakitan produk akhir. Metodologi inti yang digunakan oleh Amirullah dan Jakaria (2024) adalah teknik *teardown analysis* Boothroyd-Dewhurst dengan menerapkan tiga kriteria kelayakan komponen:

1. Apakah komponen tersebut bergerak relatif terhadap komponen lain yang sudah dirakit?
2. Apakah komponen tersebut harus terbuat dari material berbeda karena alasan fungsional?
3. Apakah komponen harus dipisahkan untuk memungkinkan proses perakitan atau pembongkaran?

Komponen yang gagal memenuhi setidaknya satu dari ketiga kriteria tersebut merupakan kandidat eliminasi, integrasi, atau konsolidasi.

### 2.2 Formulasi Efisiensi Perakitan (DFA Efficiency)

Indeks efisiensi perakitan Boothroyd-Dewhurst didefinisikan sebagai:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_a \cdot t_a} \times 100\%$$

di mana:
- $N_{min}$ = jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi produk
- $t_{min}$ = waktu minimum teoritis perakitan (detik atau menit per unit)
- $N_a$ = jumlah aktual komponen pada desain yang dievaluasi
- $t_a$ = waktu aktual perakitan (detik atau menit per unit)

Semakin kecil nilai $\eta_{DFA}$, semakin besar potensi simplifikasi yang tersedia. Target desain yang baik secara industri adalah $\eta_{DFA} \geq 60\%$ (Boothroyd, Dewhurst, & Knight, 2010).

### 2.3 Formulasi Biaya Total Manufaktur

Total biaya produksi per unit diformulasikan sebagai:

$$C_{total} = C_{material} + C_{machining} + C_{assembly} + C_{overhead}$$

dengan rincian:

$$C_{material} = \sum