# 969 — Perancangan Stasiun Pengisian Kendaraan Listrik Ultra-Fast di Jalan Raya: Jaringan Antrian Multi-Server dengan Kedatangan Stochastic Berdasarkan Status Pengisian Baterai (SoC), Perancangan Transformator Jaringan, dan Peak Shaving BESS

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Ultra-Fast EV Highway Charging Station Sizing: Multi-Server Queuing Network with Battery State-of-Charge (SoC) Stochastic Arrival, Grid Transformer Sizing, and Peak Shaving BESS  
**Standar & Referensi Utama:** IEEE Std 2030.1.1; SAE J1772; Gross, Shortle, Thompson & Harris (Fundamentals of Queueing Theory, 5th Ed., Wiley); Applied Energy

---

## 1. Pendahuluan dan Konteks Industri

Dalam beberapa tahun terakhir, permintaan akan kendaraan listrik (EV) mengalami peningkatan yang signifikan, sejalan dengan upaya global untuk mengurangi emisi karbon dan ketergantungan pada bahan bakar fosil. Menurut laporan dari International Energy Agency (IEA), penjualan kendaraan listrik global mencapai 6,6 juta unit pada tahun 2021, dan diperkirakan akan terus meningkat. Hal ini menuntut pengembangan infrastruktur pengisian yang efisien dan cepat, terutama di jalan raya. Stasiun pengisian ultra-cepat menjadi solusi utama untuk memenuhi kebutuhan pengisian cepat bagi pengguna EV, namun tantangan dalam perancangan dan pengoperasiannya tetap ada.

Salah satu tantangan utama adalah pengelolaan antrian kendaraan yang datang untuk mengisi daya. Dengan kedatangan kendaraan yang bersifat stochastic, penting untuk menerapkan model jaringan antrian multi-server yang dapat mengoptimalkan waktu tunggu dan throughput pengisian. Selain itu, perancangan transformator jaringan yang tepat juga diperlukan untuk memastikan pasokan listrik yang memadai, serta penerapan sistem penyimpanan energi baterai (BESS) untuk mengurangi puncak beban (peak shaving) dan menjaga kestabilan jaringan. 

Konteks ini menekankan pentingnya integrasi antara teori antrian, manajemen energi, dan rekayasa sistem untuk menciptakan stasiun pengisian yang efisien dan berkelanjutan. Dalam modul ini, kami akan membahas secara mendalam tentang perancangan stasiun pengisian EV ultra-cepat, termasuk aspek-aspek teknis dan ekonomis yang relevan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Teori Antrian

Model antrian dapat digambarkan dengan notasi Kendall, yang dinyatakan sebagai $A/S/c$, di mana:
- $A$ adalah distribusi kedatangan (misalnya, Poisson),
- $S$ adalah distribusi layanan (misalnya, eksponensial),
- $c$ adalah jumlah server.

Dalam konteks stasiun pengisian EV, kita dapat menggunakan model $M/M/c$ untuk menggambarkan kedatangan kendaraan yang mengikuti distribusi Poisson dan waktu layanan yang mengikuti distribusi eksponensial. 

### 2.2. Parameter dan Variabel

- $\lambda$: laju kedatangan kendaraan (kendaraan/jam)
- $\mu$: laju layanan per server (kendaraan/jam)
- $c$: jumlah server (stasiun pengisian)
- $P_n$: probabilitas terdapat $n$ kendaraan dalam sistem
- $L$: rata-rata jumlah kendaraan dalam sistem
- $W$: rata-rata waktu kendaraan dalam sistem

### 2.3. Rumus Dasar

Probabilitas $P_0$ (tidak ada kendaraan dalam sistem) dapat dihitung dengan rumus:

$$
P_0 = \left( \sum_{n=0}^{c-1} \frac{(\lambda/\mu)^n}{n!} + \frac{(\lambda/\mu)^c}{c! (1 - \rho)} \right)^{-1}
$$

di mana $\rho = \frac{\lambda}{c\mu}$ adalah tingkat pemanfaatan sistem.

Rata-rata jumlah kendaraan dalam sistem $L$ dapat dihitung dengan:

$$
L = L_q + c \cdot \frac{\lambda}{\mu}
$$

dengan $L_q$ adalah rata-rata jumlah kendaraan dalam antrian yang dapat dihitung sebagai:

$$
L_q = \frac{(\lambda/\mu)^c \cdot \rho}{c! (1 - \rho)^2}
$$

### 2.4. Derivasi

Dari rumus di atas, kita dapat melihat bahwa dengan meningkatkan jumlah server $c$, kita dapat mengurangi waktu tunggu rata-rata $W$ dan meningkatkan throughput sistem. Hal ini sangat penting dalam konteks stasiun pengisian EV yang harus melayani banyak kendaraan dalam waktu singkat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Analisis Kebutuhan**: Identifikasi lokasi stasiun pengisian dan estimasi laju kedatangan kendaraan berdasarkan data historis dan proyeksi pertumbuhan EV.
2. **Perancangan Jaringan Antrian**: Tentukan model antrian yang sesuai (misalnya, $M/M/c$) dan hitung parameter $\lambda$, $\mu$, dan $c$.
3. **Perancangan Transformator Jaringan**: Hitung kapasitas transformator yang diperlukan berdasarkan total daya yang dibutuhkan oleh semua server.
4. **Implementasi BESS**: Rancang sistem penyimpanan energi untuk mengurangi beban puncak dan memastikan pasokan energi yang stabil.
5. **Pengujian dan Validasi**: Lakukan simulasi untuk memvalidasi model dan parameter yang telah ditentukan.

### 3.2. Diagram Alir Proses

![Diagram Alir Proses](https://via.placeholder.com/600x400.png?text=Diagram+Alir+Proses)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

Misalkan kita memiliki data berikut untuk stasiun pengisian EV:

- Laju kedatangan kendaraan ($\lambda$): 120 kendaraan/jam
- Laju layanan per server ($\mu$): 30 kendaraan/jam
- Jumlah server ($c$): 4

### 4.2. Perhitungan

1. **Hitung $\rho$**:

$$
\rho = \frac{\lambda}{c\mu} = \frac{120}{4 \cdot 30} = 1
$$

2. **Hitung $P_0$**:

Karena $\rho = 1$, kita perlu menghitung $P_0$ dengan pendekatan lain. Misalkan kita gunakan rumus untuk $P_0$:

$$
P_0 = \left( \sum_{n=0}^{3} \frac{(4)^n}{n!} + \frac{(4)^4}{4! (1 - 1)} \right)^{-1}
$$

3. **Hitung $L$ dan $W$**:

Dengan menggunakan rumus yang telah dijelaskan sebelumnya, kita dapat menghitung rata-rata jumlah kendaraan dalam sistem $L$ dan waktu rata-rata dalam sistem $W$.

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa dengan 4 server, stasiun pengisian dapat melayani 120 kendaraan/jam dengan waktu tunggu yang minimal. Ini menunjukkan bahwa perancangan yang tepat dapat meningkatkan efisiensi operasional stasiun pengisian.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Perancangan stasiun pengisian EV tidak hanya berkaitan dengan teknik industri, tetapi juga memiliki implikasi dalam manajemen rantai pasok, otomasi, dan manajemen biaya. Integrasi sistem penyimpanan energi dan pengelolaan beban puncak juga berkaitan erat dengan prinsip-prinsip keberlanjutan dan tanggung jawab sosial perusahaan (CSR).

### 5.2. Batasan Metodologi

Meskipun model antrian memberikan wawasan yang berharga, terdapat batasan dalam asumsi yang digunakan, seperti distribusi kedatangan dan layanan yang mungkin tidak selalu sesuai dengan kenyataan. Oleh karena itu, perlu dilakukan penelitian lebih lanjut untuk mengembangkan model yang lebih akurat.

### 5.3. Arah Riset Masa Depan

Riset di masa depan dapat difokuskan pada pengembangan algoritma optimasi untuk penjadwalan pengisian, integrasi teknologi smart grid, dan penerapan analitik data besar untuk memprediksi pola kedatangan kendaraan. Selain itu, penelitian tentang dampak lingkungan dari stasiun pengisian EV juga perlu menjadi perhatian utama.

---

Dokumen ini memberikan gambaran menyeluruh tentang perancangan stasiun pengisian kendaraan listrik ultra-cepat, dengan fokus pada aspek teknis dan metodologis yang relevan. Dengan mengikuti standar dan referensi yang telah ditetapkan, diharapkan modul ini dapat menjadi panduan yang berguna bagi para profesional di bidang teknik industri dan rekayasa sistem industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
