# 758 — Kurva Pembelajaran (Learning Curve) Wright–Crawford: Estimasi Waktu Kerja, Biaya Tenaga Kerja, Ramp-Up Produksi, dan Model Lupa (Forgetting)

**Domain:** Cost Engineering & Analisis Produktivitas · Manajemen Operasi · Perencanaan Tenaga Kerja  
**Topik Spesialis:** Unit Learning Curve (Crawford), Cumulative-Average Model (Wright), Model Plateau DeJong, Learning–Forgetting Model, Estimasi Biaya Kontrak, Penjadwalan dengan Efek Pembelajaran  
**Standar & Referensi Utama:** Wright (1936) Journal of the Aeronautical Sciences; Crawford (1944) Lockheed Aircraft Corporation; Jaber & Bonney (1996) Applied Mathematical Modelling; Anzanello & Fogliatto (2011) International Journal of Industrial Ergonomics; GAO Cost Estimating and Assessment Guide  

---

## 1. Pendahuluan dan Konteks Industri

Fenomena kurva pembelajaran (*learning curve*) pertama dikuantifikasi oleh T.P. Wright pada tahun 1936 ketika menganalisis data produksi pesawat terbang di Amerika Serikat. Wright menemukan bahwa setiap kali kumulatif unit pesawat yang dirakit menjadi dua kali lipat, rata-rata jam tenaga kerja per unit menurun secara konsisten sekitar 20% — lahir istilah **kurva 80%** yang kemudian menjadi salah satu empiri paling robust dalam sejarah manajemen operasi. Sejak itu, kurva pembelajaran menjadi instrumen standar dalam *cost engineering* industri dirgantara, galangan kapal, otomotif, elektronik, hingga konstruksi. John R. Crawford dari Lockheed Aircraft Corporation mengembangkan varian model berbasis *unit time* yang kini digunakan berdampingan dengan model *cumulative-average* Wright.

Bagi Teknik Industri, kurva pembelajaran adalah jembatan antara *work measurement* (statis) dan dinamika produktivitas riil: *standard time* yang ditetapkan lewat MTM/MOST hanya valid untuk operator yang telah mencapai fase stabil, sedangkan pada awal *ramp-up* produksi — peluncuran produk baru, migrasi lini, atau onboard pekerja baru — waktu siklus turun mengikuti pola log-linear yang dapat diprediksi. Mengabaikan efek ini menyebabkan estimasi biaya kontrak terlalu murah (*underbid*), jadwal pengiriman terlalu agresif, dan target laba meleset.

Konteks Indonesia sangat relevan: industri padat karya (garmen, alas kaki, komponen otomotif), program hilirisasi yang memunculkan fasilitas baru (smelter nikel, gigafactory baterai EV), serta tender alutsista dan konstruksi kapal semuanya menghadapi fase *ramp-up* panjang dengan tenaga kerja baru. Modul ini membahas formulasi matematis kedua model kanonik, model perluasan (plateau, lupa, multivariat), metodologi estimasi parameter, studi kasus numerik terverifikasi, serta implementasi dalam penentuan harga kontrak, penjadwalan, dan keputusan *make-or-buy*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Unit Time (Crawford)

Model Crawford menyatakan bahwa waktu produksi **unit ke-$n$** menurun sebagai fungsi pangkat dari nomor unit:

$$
T_n = T_1 \cdot n^{\,b}, \qquad b = \frac{\ln r}{\ln 2}
$$

dengan $T_1$ waktu unit pertama, $r$ *learning rate* (misal $r = 0{,}85$ untuk kurva 85%), dan $b < 0$ eksponen pembelajaran. Setiap penggandaan kumulatif unit ($n \to 2n$) mengurangi waktu unit sebesar faktor $r$. Total jam kerja untuk $n$ unit pertama:

$$
Y(n) = \sum_{i=1}^{n} T_1\, i^{\,b} \;\approx\; \frac{T_1}{b+1}\left[\left(n+\tfrac{1}{2}\right)^{b+1} - \left(\tfrac{1}{2}\right)^{b+1}\right]
$$

Aproksimasi kontinu terkoreksi setengah-langkah di atas akurat untuk $n$ moderat (diverifikasi pada studi kasus Bagian 5 dengan deviasi $< 0{,}2\%$).

### 2.2 Model Cumulative-Average (Wright)

Model Wright menyatakan bahwa **rata-rata kumulatif** waktu per unit yang menurun mengikuti pangkat:

$$
\bar{T}(n) = T_1 \cdot n^{\,b} \quad\Longrightarrow\quad Y(n) = n \cdot T_1 \cdot n^{\,b} = T_1\, n^{\,b+1}
$$

Perbedaan definisi ini tampak subtapi konsekuensinya besar: pada tingkat *learning rate* yang sama, model Wright selalu lebih optimistis daripada Crawford pada lot awal, karena penurunan cepat pada unit-unit pertama "menular" ke seluruh rata-rata.

### 2.3 Ilustrasi Kontras Dua Model ($r = 85\%$, $T_1 = 100$ jam)

Dengan $b = \ln(0{,}85)/\ln 2 = -0{,}23447$:

| $n$ | Unit-time Crawford $T_n$ (jam) | Total kumulatif Crawford (jam) | Rata-rata kumulatif Wright (jam) | Total kumulatif Wright (jam) |
|---|---|---|---|---|
| 1 | 100,00 | 100,00 | 100,00 | 100,00 |
| 2 | 85,00 | 185,00 | 85,00 | 170,00 |
| 4 | 72,25 | 334,54 | 72,25 | 289,00 |
| 8 | 61,41 | 593,59 | 61,41 | 491,28 |

Untuk lot 8 unit, pemakaian model Wright ketika proses riil mengikuti Crawford menyebabkan *underbudget* sekitar $1 - 491{,}28/593{,}59 \approx 17{,}2\%$.

### 2.4 Estimasi Parameter via Regresi Log-Linear

Karena $T_n = T_1 n^b$ linier dalam skala logaritmik, parameter diestimasi dengan *ordinary least squares* atas pasangan observasi $(\ln i, \ln T_i)$:

$$
\hat{b} = \frac{\sum_{i=1}^{n}\left(\ln i - \overline{\ln i}\right)\left(\ln T_i - \overline{\ln T}\right)}{\sum_{i=1}^{n}\left(\ln i - \overline{\ln i}\right)^2}, \qquad
\hat{T}_1 = \exp\!\left(\overline{\ln T} - \hat{b}\,\overline{\ln i}\right), \qquad \hat{r} = 2^{\hat{b}}
$$

Kualitas fit dinilai dari koefisien determinasi $R^2$ pada skala log dan analisis residual; data riil umumnya memberikan $R^2 > 0{,}90$ untuk fase *learning* murni.

---

## 3. Model Lanjutan: Plateau, Lupa (Forgetting), dan Pembelajaran Multivariat

### 3.1 Model Plateau DeJong

Praktik industri menunjukkan pembelajaran berhenti (*plateau*) ketika sebagian tugas didominasi mesin sehingga tidak dapat dipercepat oleh keterampilan manusia. Model DeJong (1957) memperkenalkan fraksi *incompressible* $\alpha \in [0,1]$:

$$
T_n = T_1\left[(1-\alpha)\,n^{-b} + \alpha\right]
$$

$\alpha = 0$ mereduksi ke model Crawford penuh; $\alpha \to 1$ berarti praktis tanpa pembelajaran. Nilai $\alpha$ dapat diestimasi dari proporsi elemen kerja berbasis mesin dalam *machine coupling chart*.

### 3.2 Interupsi Produksi dan Model Lupa (Learning–Forgetting)

Produksi sering terputus — pergantian model (*changeover*), musiman permintaan, atau rotasi pekerja. Saat produksi dilanjutkan, waktu siklus melompat kembali ke atas kurva: fenomena **forgetting**. Kerangka umumnya memodelkan:

- **Akumulasi waktu produktif** sebelum jeda: $p(n) = \sum_{i=1}^{n} T_i$, yang mencerminkan "kedalaman" keterampilan yang tersimpan.
- **Konstanta pelupakan** $l$: lamanya waktu tanpa latihan sampai keterampilan lenyap total.
- ***Recency*** $\approx p(n)/l$: semakin besar rasio ini relatif terhadap durasi jeda $d$, semakin kecil degradasi performa.
- **Kemiringan lupa** $f$: garis pelupusan pada skala log-log yang paralel-balik terhadap kurva belajar; waktu unit pertama setelah jeda diinterpolasi pada titik potong kedua garis.

Varian formal yang banyak dirujuk antara lain model *learn-forget* Globerson–Levin–Shtub (1989) dan model Jaber–Bonney (1996) pada *Applied Mathematical Modelling*, serta integrasi psikologi eksperimental *power integration model* (Sikström & Jaber, 2002). Implikasi praktisnya: penjadwalan lot sebaiknya meminimalkan jumlah interupsi panjang pada produk dengan konten kerja manual tinggi.

### 3.3 Learning Curve vs Experience Curve

*Kurva pengalaman* (Boston Consulting Group) memperluas cakupan dari jam kerja langsung menjadi **biaya total riil per unit** (termasuk material, overhead, distribusi, R&D), yang juga menurun konstan tiap penggandaan volume kumulatif. Learning curve adalah subset khusus berbasis tenaga kerja; experience curve dipakai untuk strategi penetapan harga dan *market share*.

### 3.4 Pembelajaran Multivariat

Waktu siklus dapat diregresikan terhadap beberapa prediktor simultan: volume kumulatif produk, volume kumulatif keluarga produk (*platform learning*), kompleksitas tugas, heterogenitas operator, dan intensitas pelatihan. Pendekatan regresi berganda pada transformasi log atau model campuran (*mixed-effects*) memungkinkan dekomposisi kontribusi tiap sumber pembelajaran — arah riset yang dirangkum sistematis oleh Anzanello & Fogliatto (2011).

---

## 4. Metodologi Estimasi, Validasi, dan Jebakan Praktis

**Langkah 1 — Definisi unit analisis.** Tentukan objek pembelajaran: unit produk, batch, subassembly, atau operasi tunggal. Agregasi terlalu tinggi mendilusi efek belajar; terlalu rendah membuat data bising.

**Langkah 2 — Pengumpulan data.** Jam kerja aktual per unit dari MES/timekeeping, dikoreksi terhadap lembur, absensi, dan perubahan metode kerja. Data harus dibersihkan dari *outlier* non-belajar (kerusakan mesin, kekurangan material).

**Langkah 3 — Regresi dan uji fit.** Lakukan OLS log-linear (Bagian 2.4), periksa $R^2$, residual, dan stabilitas $\hat{r}$ antar-sub-periode. Jika residual berpola naik-turun berkala, curigai interupsi (efek lupa) atau pergantian rekayasa produk.

**Langkah 4 — Validasi eksternal.** Bandingkan $\hat{r}$ dengan benchmark industri: pesawat sipil dan alutsista lazim 80–85%, perakitan elektronik 85–92%, konstruksi repetitif 88–95%, proses *machine-paced* mendekati 100% (tanpa pembelajaran tenaga kerja signifikan).

**Jebakan umum yang harus diantisipasi:**
1. **Campuran produk** (*mix shift*) — penurunan waktu bukan karena belajar, melainkan komposisi berubah ke produk lebih sederhana.
2. **Engineering change** — revisi desain mereset kurva; tandai titik reset dan fit ulang segmen.
3. **Konfound kelelahan** — percepatan siklus justru menaikkan risiko MSD dan kesalahan kualitas; hubungkan dengan modul kelelahan kumulatif (Modul 180) dan *upper extremity MSDs* (Modul 175) agar target waktu tetap aman ergonomis.
4. **Ekstrapolasi liar** — kurva tidak berlaku tak terbatas; batasi proyeksi pada horizon dengan teknologi/metode yang sama.

---

## 5. Studi Kasus Industri (Numerik Terverifikasi)

**Skenario.** Stasiun perakitan unit alat pertanian membutuhkan $T_1 = 100$ jam/unit. Data pilot 8 unit pertama mengikuti kurva Crawford $r = 85\%$. Manajemen ingin estimasi jam tenaga kerja untuk kontrak **32 unit**, tarif tenaga kerja Rp150.000/jam.

**Langkah 1 — Eksponen:** $b = \ln 0{,}85 / \ln 2 = -0{,}23447$.

**Langkah 2 — Waktu unit kunci:** $T_8 = 100 \times 8^{-0{,}23447} = 61{,}41$ jam; $T_{32} = 100 \times 32^{-0{,}23447} = 44{,}38$ jam.

**Langkah 3 — Total jam lot 32 unit** (penjumlahan diskrit persamaan unit): $Y(32) = \sum_{i=1}^{32} 100\,i^{-0{,}23447} \approx \mathbf{1.798{,}2}$ jam. Aproksimasi kontinu terkoreksi memberi $Y(32) \approx 1.800{,}7$ jam — deviasi hanya $0{,}14\%$, memvalidasi rumus cepat untuk penawaran.

**Langkah 4 — Biaya tenaga kerja langsung:** $1.798{,}2 \times \text{Rp}150.000 \approx \textbf{Rp 269,7 juta}$ (≈ Rp 270 juta). Rata-rata per unit $= 56{,}2$ jam — bukan $T_{32}$, karena unit-unit awal lebih mahal.

**Langkah 5 — Sensitivitas pilihan model.** Jika analis keliru memakai model Wright untuk proses yang riilnya Crawford, total 32 unit diestimasi $32 \times 100 \times 32^{-0{,}23447} \approx 1.420{,}1$ jam — *underestimate* $\approx 21\%$, setara defisit penawaran ±Rp 57 juta pada kasus ini. Kesimpulan kasus: identifikasi jenis model (unit vs cumulative-average) dari data historis adalah langkah bernilai uang tertinggi sebelum regresi mana pun dijalankan.

**Benchmark lintas industri.** Pola serupa terekam pada *ramp-up* pabrik baterai EV, perakitan kapal (asal-usul data Crawford), waktu bedah tim medis yang berulang, hingga *yield learning* fabrikasi wafer (lihat Modul 439 untuk mekanisme statistik *yield*-nya).

---

## 6. Implementasi dalam Praktik & Integrasi Sistem

1. **Estimasi biaya kontrak dan *bidding*.** Gabungkan $Y(n)$ dengan tarif tenaga kerja, *scrap rate*, dan overhead untuk menyusun kurva harga bertingkat (*tiered pricing*) pada tender lot besar.
2. **Penjadwalan dengan efek pembelajaran.** Model penjadwalan mesin tunggal memodifikasi waktu proses menjadi bergantung-posisi $p_{j[k]} = p_j \, k^{\,a}$ ($a \le 0$), mengubah struktur urutan optimal — landasan dari Biskup (1999, *EJOR*) yang kini berkembang ke *flow shop* dan *job shop* dengan pembelajaran.
3. **Lot-sizing dinamis.** Literatur EMQ/EOQ dengan pembelajaran (dirangkum Jaber & Bonney, 1999, *IJPE*) menunjukkan ukuran lot optimal berubah saat biaya setup efektif menurun karena keterampilan; bandingkan dengan baseline statis Modul 496.
4. ***Make-or-buy* dan target costing.** Selisih kurva belajar internal vs harga pemasok menjadi dasar keputusan sourcing jangka menengah.
5. **Manajemen SDM.** Rotasi kerja dan *cross-training* (Modul 497) menyeimbangkan kedalaman kurva individual dengan fleksibilitas; program pelatihan difokuskan pada fase awal di mana derivatif pembelajaran paling curam.
6. **Integrasi data.** MES/ERP menyediakan deret waktu aktual per unit; dashboard produktivitas memantau deviasi terhadap kurva rencana dan memicu investigasi saat residual melebihi batas kendali — selaras dengan logika SPC Modul 002.
7. **Pemanfaatan di RuangTI.** Contoh kueri workspace: *"hitung total jam kontrak 120 unit jika unit pertama 340 jam dan kurva 88%, model Crawford"* — asisten menjalankan formulasi Bagian 2 dan mengembalikan tabel unit, kumulatif, serta biaya.

---

## 7. Referensi

1. Wright, T.P. (1936). Factors affecting the cost of airplanes. *Journal of the Aeronautical Sciences*, 3(4), 122–128.
2. Crawford, J.R. (1944). Learning curve, ship curve, ratios, related data. Lockheed Aircraft Corporation (laporan internal, sitasi klasik).
3. DeJong, J.R. (1957). The effects of increasing skill on cycle time and its consequences for time standards. *Ergonomics*, 1(1), 51–60.
4. Yelle, L.E. (1979). The learning curves: Historical review and comprehensive survey. *Decision Sciences*, 10(2), 302–328.
5. Argote, L., & Epple, D. (1990). Learning curves in manufacturing. *Science*, 247(4945), 920–924.
6. Teplitz, C.J. (1991). *The Learning Curve Deskbook: A Reference Guide to Theory, Calculation, and Applications*. Quorum Books.
7. Globerson, S., Levin, N., & Shtub, A. (1989). The impact of breaks on forgetting when performing repetitive tasks. *IIE Transactions*, 21(4).
8. Jaber, M.Y., & Bonney, M. (1996). Production breaks and the learning curve: The forgetting phenomenon. *Applied Mathematical Modelling*, 20(2), 162–169.
9. Jaber, M.Y., & Bonney, M. (1999). The economic manufacture/order quantity (EMQ/EOQ) and the learning curve: Past, present, and future. *International Journal of Production Economics*, 59(1–3).
10. Biskup, D. (1999). Single-machine scheduling with learning considerations. *European Journal of Operational Research*, 99(1), 173–181.
11. Anzanello, M.J., & Fogliatto, F.S. (2011). Learning curve models and applications: Literature review and research directions. *International Journal of Industrial Ergonomics*, 41(5), 573–583.
12. Jaber, M.Y. (Ed.). (2011). *Learning Curves: Theory, Models, and Applications*. CRC Press.
13. U.S. Government Accountability Office. (2020). *GAO Cost Estimating and Assessment Guide* (pembahasan learning curve analysis untuk estimasi kontrak pemerintah).
