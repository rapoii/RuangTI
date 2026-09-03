# 1775 — Redesain Keranjang Enema Kopi Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Biaya Produk Kesehatan Alternatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Keranjang Enema Kopi Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri perangkat kesehatan alternatif (alternative medical devices) mengalami pertumbuhan eksponensial pascapandemi COVID-19, di mana permintaan terhadap produk-produk terapi komplementer seperti *coffee enema* meningkat secara global. *Coffee enema basket* merupakan komponen kritis berupa keranjang saringan yang berfungsi menahan ampas kopi selama prosedur hidroterapi kolon. Produk ini harus memenuhi standar sanitasi (food-grade stainless steel SS-304), ketahanan korosi terhadap cairan asam organik kopi (pH 4.5–5.0), dan presisi lubang saringan (mesh size 60–100 mikron) agar tidak melepaskan partikel ke dalam aliran enema. Amirullah dan Jakaria (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain konvensional keranjang enema kopi yang beredar di pasar masih menggunakan pendekatan *trial-and-error* dengan jumlah komponen berlebih, titik las yang tidak optimal, serta proses perakitan manual yang meningkatkan *manufacturing lead time* dan biaya produksi.

Urgensi ekonomis dari redesain ini terletak pada struktur biaya produksi yang didominasi oleh tenaga kerja perakitan (sekitar 35–45% dari total *bill of materials*), waste material dari hasil pengelasan yang tidak presisi, serta kegagalan *first-pass yield* yang disebabkan oleh misalignment antar-komponen. Secara teknis, permasalahan utama yang diidentifikasi adalah (1) jumlah komponen yang tidak memenuhi kriteria *minimum number of parts* menurut filosofi Boothroyd-Dewhurst, (2) penggunaan lebih dari dua jenis fastener (sekrup, ring, dan mur) yang menambah kompleksitas *insertion* dan *handling*, serta (3) tidak adanya standardisasi geometri yang menghambat proses *batch production*. Konteks ini diperkuat oleh temuan Islam (2024) di *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) yang menunjukkan bahwa integrasi prinsip Design for Manufacture and Assembly (DfMA) pada tahap konseptual dan preliminer mampu mencegah *buildability problems* yang selama ini hanya teridentifikasi pada tahap *shop-drawing* atau di lapangan ketika desain sudah *frozen* dan koreksi menjadi sangat mahal. Penerapan metodologi DFMA secara sistematis pada produk keranjang enema kopi menjadi imperative strategis agar produk memenuhi kriteria *design efficiency*, *manufacturability*, dan *assemblability* secara simultan dalam satu kerangka keputusan engineering.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang diadopsi oleh Amirullah dan Jakaria (2024) bersumber dari kerangka teoritis Boothroyd dan Dewhurst, yang terdiri atas dua pilar analitis: Design for Manufacture (DFM) dan Design for Assembly (DFA). Pada pilar DFA, efisiensi desain diukur menggunakan *Design Efficiency Index* yang dinyatakan oleh persamaan:

$$E_{DA} = \frac{N_{min}}{N_a} \times 100\%$$

Di mana $E_{DA}$ adalah efisiensi desain untuk perakitan (*Design Assembly Efficiency*), $N_{min}$ adalah jumlah minimum part yang secara fungsional mutlak diperlukan, dan $N_a$ adalah jumlah aktual part pada desain. Semakin mendekati 100% nilai $E_{DA}$, semakin efisien desain tersebut.

Lebih lanjut, untuk mengkuantifikasi waktu perakitan, digunakan formulasi *teoritis minimum assembly time* berbasis Boothroyd:

$$t_{ma} = \sum_{i=1}^{N_a} \left( t_{h_i} + t_{i_i} \right)$$

Di mana $t_{ma}$ adalah total *minimum assembly time* (detik), $t_{h_i}$ adalah *handling time* komponen ke-$i$ (umumnya 1.5–2.0 detik untuk komponen ringan tanpa orientasi khusus), dan $t_{i_i}$ adalah *insertion time* (umumnya 3.0–5.0 detik untuk operasi *snap-fit*, 5.0–8.0 detik untuk *threaded fastener*, dan 1.5–3.0 detik untuk operasi pengelasan titik).

*Assembly cost* kemudian dihitung dengan:

$$C_{ass} = t_{ma} \times L_c \times \left(1 + O_b\right)$$

Di mana $C_{ass}$ adalah biaya perakitan per unit, $L_c$ adalah *labor rate* (Rp/detik), dan $O_b$ adalah *overhead burden* (fraksi biaya tidak langsung, biasanya 1.2–1.8).

Untuk pilar DFM, *manufacturing cost* dihitung menggunakan:

$$C_{mfg} = \sum_{j=1}^{N_a} \left( C_{mat_j} + C_{proc_j} + C_{tool_j} \right)$$

Di mana $C_{mat_j}$, $C_{proc_j}$, dan $C_{tool_j}$ masing-masing adalah biaya material, biaya proses (stamping, welding, cutting), dan biaya tool untuk komponen ke-$j$.

*Total production cost* per unit menjadi:

$$C_{total} = C_{mfg} + C_{ass} + C_{QC} + C_{pack}$$

Di mana $C_{QC}$ adalah biaya quality control dan $C_{pack}$ adalah biaya pengemasan. Metrik utama pengambilan keputusan DFMA adalah *cost reduction percentage*:

$$\Delta C\% = \frac{C_{total,old} - C_{total,new}}{C_{total,old}} \times 100\%$$

Kriteria kelayakan finansial minimum yang digunakan adalah $\Delta C\% \geq 15\%$ sebagai threshold signifikansi, dengan tetap mempertahankan atau meningkatkan *functional performance* (kapasitas tampung, laju filtrasi, dan kekuatan struktural).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA ke dalam tujuh tahapan sistematis yang merepresentasikan *best practice* rekayasa industri modern:

**Tahap 1 — Identifikasi Fungsi dan Kriteria Desain.** Mendefinisikan *Functional Requirements* (FR) produk, yaitu: (a) kapasitas tampung ampas kopi 50–80 gram, (b) mesh filtrasi 60–100 μm, (c) kompatibilitas dengan tabung enema standar, (d) tahan suhu 80°C, dan (e) food-grade SS-304.

**Tahap 2 — Konseptualisasi Desain Awal (*Current Design Baseline*).* Mendokumentasikan desain eksisting lengkap dengan Bill of Materials (BoM), exploded view, dan *process flow chart* manufaktur.

**Tahap 3 — Penerapan Aturan DFA Boothroyd-Dewhurst.* Melakukan evaluasi terhadap setiap komponen berdasarkan tiga pertanyaan kritis: (a) Apakah part bergerak relatif terhadap part lain selama operasi? (b) Apakah part harus berupa material berbeda? (c) Apakah part harus dipisahkan untuk kemudahan perakitan/pemeliharaan? Jika ketiga jawaban "Tidak", maka part tersebut merupakan kandidat eliminasi atau integrasi.

**Tahap 4 — Redesain dan Generasi Alternatif.* Mengembangkan minimal tiga *design concepts* dengan variasi integrasi komponen (las vs. *one-piece stamping*, snap-fit vs. ulir), lalu melakukan *trade-off analysis*.

**Tahap 5 — Kalkulasi Kuantitatif.* Menghitung $E_{DA}$, $t_{ma}$, $C_{ass}$, $C_{mfg}$, dan $C_{total}$ untuk masing-masing alternatif menggunakan formulasi pada Bagian 2.

**Tahap 6 — Seleksi Desain Optimal.* Memilih desain dengan skor DFMA tertinggi (combined index $E_{DFMA} = 0.4 \cdot E_{DA} + 0.6 \cdot \Delta C\%$).

**Tahap 7 — Validasi dan Prototipe.* Membuat prototipe fisik, melakukan *assembly trial*, dan memverifikasi fungsionalitas filtrasi.

Arsitektur teknologi yang diusulkan mengikuti alur: **Concept → DFMA Analysis → CAD 3D → Rapid Prototyping → Functional Test → Production Documentation**. Tahapan ini selaras dengan framework BIM-DfMA yang dikemukakan Islam (2024), di mana keputusan desain harus mempertimbangkan seluruh *lifecycle* termasuk fabrikasi, transportasi, lifting, dan ereksi sejak fase konseptual untuk mencegah *rework* yang mahal.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan parameter tipikal produk keranjang enema kopi di pasar Indonesia (Amirullah & Jakaria, 2024), dilakukan perhitungan komparatif antara **Desain Eksisting** dan **Desain Usulan**.

### 4.1 Data Input Parameter

| Parameter | Desain Eksisting | Desain Usulan (DFMA) |
|---|---|---|
| Jumlah komponen ($N_a$) | 8 part | 5 part |
| Jumlah titik las | 6 titik | 3 titik |
| Jumlah fastener (sekrup/ring) | 4 buah | 0 buah |
| Material utama | SS-304 plate & wire | SS-304 plate (one-piece) |
| Proses manufaktur | Cutting + Welding + Machining | Stamping + Welding minimal |
| Operator perakitan | 2 orang | 1 orang |
| *Labor rate* ($L_c$) | Rp 250/detik | Rp 250/detik |
| *Overhead burden* ($O_b$) | 1.5 | 1.5 |
| Batch produksi | 1.000 unit/bulan | 1.000 unit/bulan |

### 4.2 Perhitungan Design Assembly Efficiency ($E_{DA}$)

Komponen minimum yang secara fungsional wajib ada: badan keranjang (1), tutup (1), gagang (1), filter mesh (terintegrasi), dan *eyelet* untuk tali (1). Maka $N_{min} = 5$.

$$E_{DA,old} = \frac{5}{8} \times 100\% = 62.5\%$$

$$E_{DA,new} = \frac{5}{5} \times 100\% = 100\%$$

Terjadi peningkatan efisiensi sebesar **+37.5 poin persentase**.

### 4.3 Perhitungan Minimum Assembly Time ($t_{ma}$)

Asumsi *handling time* rata-rata $t_h = 1.5$ detik dan *insertion time* disesuaikan dengan jenis operasi.

**Desain Eksisting:**
- 8 komponen × handling = $8 \times 1.5 = 12.0$ detik
- 4 fastener × 4 detik (insertion sekrup+ring+mur) = 16.0 detik
- 6 titik las × 6.0 detik = 36.0 detik
- $t_{ma,old} = 12.0 + 16.0 + 36.0 = 64.0$ detik/unit

**Desain Usulan:**
- 5 komponen × handling = $5 \times 1.5 = 7.5$ detik
- 0 fastener = 0 detik
- 3 titik las × 6.0 detik = 18.0 detik
- $t_{ma,new} = 7.5 + 0 + 18.0 = 25.5$ detik/unit

**Pengurangan waktu perakitan:** $\Delta t = 64.0 - 25.5 =