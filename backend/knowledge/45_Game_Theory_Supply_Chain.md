---
title: "Game Theory in Supply Chain"
category: "Industrial Engineering"
topic: "Supply Chain Management"
level: "Master"
---

# Game Theory in Supply Chain (Teori Permainan dalam Rantai Pasok)

## 1. Pendahuluan

*Game Theory* (Teori Permainan) adalah kerangka kerja matematis yang digunakan untuk menganalisis interaksi strategis antara beberapa agen pembuat keputusan rasional (pemain). Dalam konteks Rantai Pasok (*Supply Chain*), teori permainan sangat berguna karena rantai pasok modern terdiri dari beberapa entitas independen (seperti pemasok, produsen, distributor, dan pengecer) yang masing-masing berusaha memaksimalkan keuntungan atau meminimalkan biaya sendiri, seringkali pada mengorbankan entitas lain. 

Studi *Game Theory* dalam IE (Teknik Industri) membantu merancang mekanisme koordinasi dan kontrak yang menyelaraskan tujuan individu dengan tujuan sistem secara keseluruhan.

## 2. Elemen Dasar Teori Permainan

Sebuah permainan ($\Gamma$) biasanya didefinisikan oleh tiga komponen utama:
1.  **Pemain ($N$):** Himpunan agen pengambil keputusan, $N = \{1, 2, ..., n\}$. Dalam supply chain, ini bisa berupa *supplier* dan *retailer*.
2.  **Strategi ($S_i$):** Himpunan pilihan tindakan yang tersedia untuk pemain $i$. Profil strategi adalah vektor $s = (s_1, s_2, ..., s_n)$.
3.  **Fungsi Payoff ($\pi_i$):** Fungsi yang memetakan profil strategi ke utilitas (keuntungan/biaya) untuk pemain $i$, $\pi_i(s_1, s_2, ..., s_n)$.

## 3. Jenis-Jenis Permainan dalam Supply Chain

### 3.1. Non-Cooperative Games (Permainan Non-Kooperatif)
Pemain tidak dapat membuat kesepakatan yang mengikat (binding agreements). Setiap entitas membuat keputusan secara independen untuk memaksimalkan utilitasnya sendiri.

*   **Nash Equilibrium:** Konsep solusi paling fundamental. Suatu profil strategi $s^* = (s_1^*, s_2^*, ..., s_n^*)$ adalah sebuah Nash Equilibrium jika tidak ada pemain yang dapat meningkatkan *payoff*-nya dengan mengubah strateginya secara sepihak, dengan asumsi pemain lain mempertahankan strategi mereka.
    Secara matematis, untuk setiap pemain $i$:
    $$ \pi_i(s_i^*, s_{-i}^*) \geq \pi_i(s_i, s_{-i}^*) \quad \forall s_i \in S_i $$
    Di mana $s_{-i}^*$ adalah strategi optimal dari semua pemain kecuali pemain $i$.

*   **Stackelberg Game (Permainan Berurutan):** Sangat umum dalam rantai pasok yang didominasi oleh satu pihak (misalnya, Walmart sebagai *retailer* raksasa). Ada seorang *Leader* (Pemimpin) yang bergerak lebih dulu, dan *Follower* (Pengikut) yang mengamati gerakan pemimpin lalu merespons.
    1.  *Leader* memilih $s_L$ untuk memaksimalkan $\pi_L(s_L, s_F(s_L))$.
    2.  *Follower* merespons dengan fungsi reaksi $s_F(s_L)$ yang memaksimalkan $\pi_F(s_L, s_F)$ untuk $s_L$ yang diberikan.

### 3.2. Cooperative Games (Permainan Kooperatif)
Pemain dapat berkolaborasi, membagikan informasi, dan membuat kesepakatan yang mengikat untuk meningkatkan keuntungan total sistem (Total Supply Chain Profit). Fokus utamanya adalah bagaimana mengalokasikan "kue" keuntungan tambahan yang dihasilkan dari kolaborasi secara adil.

*   **Shapley Value:** Metode untuk membagikan surplus koalisi kepada setiap pemain berdasarkan kontribusi marjinal mereka.
    $$ \phi_i(v) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|!(|N|-|S|-1)!}{|N|!} (v(S \cup \{i\}) - v(S)) $$
    Di mana $v(S)$ adalah nilai koalisi $S$, dan $\phi_i(v)$ adalah alokasi untuk pemain $i$.

## 4. Aplikasi Klasik dalam Rantai Pasok

### 4.1. Masalah Double Marginalization (Marginalisasi Ganda)
Ini terjadi dalam rantai pasok terdesentralisasi (misal: 1 Manufaktur, 1 Retailer) di mana kedua belah pihak menambahkan margin keuntungan.
*   Misalkan fungsi permintaan adalah linear: $D(p) = a - b \cdot p$ (di mana $p$ adalah harga jual eceran).
*   Manufaktur memproduksi dengan biaya marjinal $c$ dan menjual ke Retailer dengan harga grosir $w$.
*   Retailer menjual ke pelanggan dengan harga $p$.

**Desentralisasi (Stackelberg Game):**
*   Retailer memaksimalkan $\pi_R = (p - w)(a - b \cdot p)$. Syarat orde pertama menghasilkan harga optimal: $p(w) = \frac{a + b \cdot w}{2b}$.
*   Manufaktur mengantisipasi ini dan memaksimalkan $\pi_M = (w - c)(a - b \cdot p(w))$.
Hasilnya, harga jual ke konsumen akan terlalu tinggi dan kuantitas penjualan terlalu rendah dibandingkan dengan kondisi optimal, sehingga total keuntungan supply chain berkurang.

**Koordinasi Rantai Pasok:**
Untuk menyelesaikan masalah ini, Teori Permainan digunakan untuk merancang kontrak (seperti *Revenue Sharing Contract*, *Buyback Contract*, atau *Quantity Discount*) yang mengkoordinasikan saluran sehingga profitabilitas keseluruhan menyamai *Centralized Supply Chain* (rantai pasok terpusat).

### 4.2. Persaingan antar Pemasok atau Pengecer (Cournot / Bertrand)
*   **Cournot Competition:** Pengecer bersaing dalam hal kuantitas pesanan.
*   **Bertrand Competition:** Pengecer bersaing dalam hal penetapan harga.

## 5. Referensi Akademik Tervalidasi

1.  Grigoryan, G., & Collins, A. J. (2021). "Game theory for systems engineering: a survey". *International Journal of System of Systems Engineering*, 11(6), 44. DOI: 10.1504/IJSSE.2021.116044
2.  Marousi, A., & Charitopoulos, V. M. (2023). "Game theoretic optimisation in process and energy systems engineering: A review". *Frontiers in Chemical Engineering*, 5. DOI: 10.3389/fceng.2023.1130568
3.  Cachon, G. P., & Netessine, S. (2006). "Game theory in supply chain analysis". In *Models, methods, and applications for innovative decision making* (pp. 200-233). INFORMS.
4.  Leng, M., & Parlar, M. (2005). "Game theoretic applications in supply chain management: a review". *INFOR, 43*(3), 187-220.

---
*Divisi Keilmuan RAG RuangTI - Modul Master IE Lanjutan.*
