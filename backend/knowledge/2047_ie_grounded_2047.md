# 2047 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Coffee Enema Basket dan Integrasi BIM-DfMA pada Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur global menghadapi tekanan ganda yang semakin intensif di era Industri 4.0, yaitu permintaan akan produk dengan kompleksitas fungsional tinggi disertai ekspektasi biaya produksi yang semakin rendah serta waktu penyampaian ke pasar (*time-to-market*) yang pendek. Dalam konteks ini, keputusan desain di fase konseptual menjadi determinan paling kritis terhadap 70–80% biaya total siklus hidup produk, sebagaimana ditunjukkan oleh berbagai studi klasik dalam rekayasa manufaktur. Amirullah dan Jakaria (2024) dalam artikel "Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method" (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengangkat kasus nyata berupa perangkat medis sederhana berupa *coffee enema basket*—komponen filtrasi berbentuk keranjang berlubang yang digunakan dalam prosedur terapi alternatif—sebagai objek studi penerapan metodologi DFMA. Meskipun produk ini berada di ceruk pasar yang spesifik, signifikansi akademisnya terletak pada demonstrasi bahwa prinsip DFMA yang awalnya dikembangkan untuk produk massal (*high-volume manufacturing*) dapat diadaptasi secara efektif pada produk dengan volume rendah namun dengan tuntutan higienitas, presisi, dan keamanan pengguna yang tinggi.

Di sisi lain, Islam (2024) dalam artikel "A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction" (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) menyoroti masalah struktural dalam industri konstruksi jembatan pracetak, di mana pemilihan alternatif desain jembatan secara konvensional hanya didasarkan pada biaya dan kecukupan struktural, tanpa memasukkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi pada tahap awal proses desain. Akibatnya, permasalahan *buildability* baru teridentifikasi pada fase produksi gambar kerja (*shop-drawing*) atau di lapangan konstruksi ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya dimungkinkan dengan biaya serta penundaan yang sangat besar. Integrasi Building Information Modelling (BIM) dengan prinsip DfMA yang ditawarkan Islam (2024) berupaya memindahkan proses evaluasi multi-kriteria ke tahap konseptual dan preliminary, sehingga keputusan desain sudah memperhitungkan kendala manufaktur dan ereksi sejak awal.

Kedua paper tersebut, meskipun berasal dari industri yang tampak berbeda (perangkat medis vs. infrastruktur konstruksi), sebenarnya menghadapi permasalahan mendasar yang sama: bagaimana menerjemahkan约束 teknis (*technical constraints*) dari fase manufaktur dan perakitan ke dalam bahasa desain yang dapat dievaluasi secara kuantitatif di tahap awal. Urgensi operasional dan ekonomis dari penerapan DFMA dapat diukur dari data industri: menurut berbagai *benchmark* manufaktur, setiap pengurangan satu bagian (*part*) dalam suatu produk dapat menurunkan biaya perakitan sebesar 10–30%, sementara setiap pengurangan satu operasi perakitan (*assembly operation*) dapat menghemat waktu produksi sebesar 20–50%. Oleh karena itu, penguasaan metodologi DFMA bukan sekadar kompetensi akademis, melainkan kebutuhan strategis bagi insinyur industri di berbagai sektor.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA pada dasarnya merupakan integrasi dua pilar: *Design for Manufacture* (DFM) yang mengoptimalkan proses fabrikasi individual, dan *Design for Assembly* (DFA) yang meminimalkan kompleksitas perakitan. Kerangka kuantitatif DFA yang paling banyak diadopsi adalah **Boothroyd-Dewhurst Method**, yang menggunakan beberapa metrik utama berikut.

**Indeks Efisiensi DFA (Design Efficiency Ratio):**

$$\eta_{DFA} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis bagian yang diperlukan untuk memenuhi fungsi produk, sedangkan $N_{actual}$ adalah jumlah aktual bagian dalam desain. Semakin tinggi nilai $\eta_{DFA}$ (mendekati 100%), semakin efisien desain tersebut secara struktural.

**Waktu Perakitan Estimasi (Boothroyd-Dewhurst):**

$$T_a = \sum_{i=1}^{n} (T_{h,i} + T_{i,i}) + T_{extra}$$

di mana $T_{h,i}$ adalah waktu *handling* bagian ke-$i$, $T_{i,i}$ adalah waktu *insertion*/pemasangan, dan $T_{extra}$ adalah waktu tambahan untuk operasi tambahan seperti pengencangan, perekatan, atau pengelasan.

**Kode Penanganan dan Pemasangan (Handling & Insertion Codes):**

Untuk setiap bagian dievaluasi berdasarkan tiga parameter: kesimetrisan (*symmetry*), ketebalan (*thickness*), dan kebutuhan *tooling*. Jika bagian memerlukan *re-orientation* atau *holding down* saat perakitan, maka nilai $T_h$ akan bertambah secara signifikan.

**Reduksi Biaya Total:**

$$\Delta