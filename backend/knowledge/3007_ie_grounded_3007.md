# 3007 — Redesain Produk Medical-Wellness dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Coffee Enema Basket

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan dan wellness global tengah mengalami transformasi besar pascapandemi COVID-19, dengan nilai pasar yang diproyeksikan mencapai lebih dari USD 660 miliar pada tahun 2030. Dalam konteks nasional Indonesia, permintaan terhadap perangkat medical-wellness non-invasif—termasuk coffee enema basket sebagai alat terapi komplementer—meningkat seiring kesadaran masyarakat terhadap kesehatan preventif. Namun, desain konvensional produk semacam ini masih menghadapi tantangan signifikan dari sisi *manufacturability* dan *assembly efficiency* yang berdampak langsung pada biaya produksi, *time-to-market*, dan kualitas produk akhir. Amirullah dan Jakaria (2024) dalam paper yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa banyak produk medical-wellness lokal masih dirancang tanpa mempertimbangkan prinsip rekayasa industri secara sistematis, sehingga menghasilkan jumlah komponen yang berlebihan, proses perakitan yang kompleks, dan biaya produksi yang tidak kompetitif.

Urgensi redesain menggunakan metode Design for Manufacture and Assembly (DFMA) menjadi semakin penting karena tiga faktor operasional utama. Pertama, dari perspektif *bill of materials* (BOM), produk dengan komponen berlebih meningkatkan kompleksitas rantai pasok dan risiko keterlambatan produksi. Kedua, dari perspektif *ergonomic assembly*, desain yang tidak mempertimbangkan postur dan gerakan operator akan menurunkan produktivitas lini perakitan hingga 20-30%. Ketiga, dari perspektif *regulatory compliance*, standar ISO 13485 untuk perangkat medis mensyaratkan *design control* yang terdokumentasi dengan baik—suatu aspek yang secara natural terjawab ketika produk dirancang dengan pendekatan DFMA. Pendekatan DFMA yang diusulkan oleh Boothroyd dan Dewhurst sejak 1980-an tetap relevan hingga hari ini karena menggabungkan dua dimensi optimasi simultan: *design for manufacture* (DFM) yang meminimalkan kompleksitas fabrikasi, dan *design for assembly* (DFA) yang meminimalkan kompleksitas perakitan. Kontribusi paper Amirullah dan Jakaria (2024) menjadi penting karena menunjukkan aplikasi DFMA pada konteks produk medical-wellhouse yang spesifik, melengkapi literature DFMA yang lebih banyak diaplikasikan pada produk massal seperti otomotif dan elektronik. Pendekatan ini diperkuat oleh studi Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang membuktikan bahwa integrasi DfMA dengan Building Information Modelling (BIM) mampu menghasilkan keputusan desain yang lebih berkualitas pada proyek jembatan prefabrikasi, sehingga validitas pendekatan DFMA untuk konteks rekayasa produk lintas-sektor semakin terkonfirmasi.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan dalam paper Amirullah dan Jakaria (2024) bersandar pada tiga pilar kuantitatif utama, yaitu *part count reduction*, *assembly efficiency analysis*, dan *manufacturing cost estimation*. Setiap pilar memiliki formulasi matematis yang presisi sebagai berikut.

**Pilar 1: Part Count Reduction Analysis**

Indeks DFA didefinisikan sebagai rasio antara jumlah minimum teoritis bagian yang diperlukan untuk memenuhi fungsi produk terhadap jumlah aktual bagian yang digunakan dalam desain. Formulasi indeks ini dinyatakan sebagai:

$$I_{DFA} = \frac{N_{min}}{N_a} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis bagian yang memenuhi seluruh fungsi produk, dan $N_a$ adalah jumlah aktual bagian dalam desain. Nilai $I_{DFA}$ mendekati 100% menunjukkan desain yang efisien, sementara nilai di bawah 50% mengindikasikan peluang konsolidasi bagian yang signifikan. Prinsip ini mengacu pada *Boothroyd-Dewhurst DFA Index* yang sudah terstandarisasi dalam literatur *Concurrent Engineering*.

**Pilar 2: Assembly Efficiency (Boothroyd-Dewhurst Method)**

Efisiensi perakitan dihitung dengan mempertimbangkan waktu perakitan aktual terhadap waktu perakitan minimum teoritis. Formulasi yang digunakan adalah:

$$E_m = \frac{N_{min} \cdot t_{min}}{N_{min} \cdot t_{min} + N_a \cdot t_a} \times 100\%$$

di mana $t_{min}$ adalah waktu handling minimum teoritis per bagian (umumnya 1,5–3 detik menggunakan standar *Methods Time Measurement* atau MTM), dan $t_a$ adalah waktu perakitan aktual per bagian. Efisiensi manufaktur keseluruhan juga dapat diformulasikan sebagai:

$$E_{total} = w_1 \cdot E_m + w_2 \cdot E_c + w_3 \cdot E_f$$

dengan $E_m$ = efisiensi material, $E_c$ = efisiensi biaya, $E_f$ = efisiensi fabrikasi, dan $w_i$ adalah bobot relatif yang ditentukan berdasarkan prioritas desain. Pendekatan multi-kriteria ini konsisten dengan framework evaluasi yang dikembangkan oleh Islam (2024) untuk proyek jembatan prefabrikasi dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21).

**Pilar 3: Manufacturing Cost Estimation**

Total biaya manufaktur produk diformulasikan sebagai:

$$C_{total} = C_m + C_p + C_a + C_q + C_o$$

di mana $C_m$ = biaya material, $C_p$ = biaya proses (machining, forming, casting), $C_a$ = biaya perakitan, $C_q$ = biaya quality control, dan $C_o$ = biaya overhead. Pengurangan biaya keseluruhan setelah redesain dihitung dengan:

$$\Delta C = C_{before} - C_{after} = \sum_{i=1}^{n}(C_{m,i} + C_{a,i}) - \sum_{j