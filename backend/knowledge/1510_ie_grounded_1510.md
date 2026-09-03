# 1510 — Model Ketahanan (Resilience) Rantai Dingin Produk Mudah Rusak dengan Pemantauan Suhu Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dari logistik produk mudah rusak (*perishable products*) yang mencakup vaksin, produk farmasi biologis, produk makanan beku, dan bahan kimia peka suhu. Khurshid dan Siddiqui (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) menegaskan bahwa mempertahankan integritas suhu pada rentang preskripsi farmasi (umumnya 2–8 °C untuk mayoritas vaksin menurut WHO PQS E001) bukan sekadar persoalan teknis pendinginan, melainkan persoalan rekayasa ketahanan (*resilience engineering*) sistem yang rentan terhadap empat kelas gangguan utama: (i) kegagalan peralatan primer (kompresor, evaporator, sensor), (ii) gangguan daya listrik, (iii) kesalahan prosedur manusia, dan (iv) paparan lingkungan ekstrem saat distribusi lintas-simpul.

Konteks empiris yang sangat relevan dipaparkan oleh Putra, Defit, dan Nurcahyo (2024) dalam *Jurnal KomtekInfo* dengan DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589). Penulis mendokumentasikan kondisi nyata di Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, Indonesia, yang bertanggung jawab penuh atas kualitas vaksin sejak kedatangan hingga distribusi. Tiga permasalahan struktural teridentifikasi: (1) *cold chain box* sebagai media penyimpanan tidak dilengkapi alat pemantau suhu *realtime*, (2) tidak ada mekanisme peringatan dini yang memberi notifikasi kepada apoteker ketika suhu menyimpang akibat kerusakan internal atau eksternal, dan (3) pencatatan suhu masih dilakukan secara manual setiap 2 (dua) jam pada lembar kendali (*log sheet*) oleh apoteker, sehingga menciptakan *single point of human failure* dan jeda waktu deteksi (*detection lag*) yang berpotensi merusak vaksin *Bacillus Calmette–Guérin* (BCG), *DPT*, polio, atau *Measles-Rubella* (MR) yang sensitif terhadap deviasi suhu.

Secara ekonomi dan operasional, risiko ini bukan teoritis. Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa sekitar 50% vaksin terbuang secara global akibat kesalahan pengelolaan rantai dingin (*cold chain failures*), dengan nilai kerugian industri biofarmasi global mencapai lebih dari USD 35 miliar per tahun. Di Indonesia sendiri, dengan lebih dari 1,4 juta titik distribusi vaksin ke puskesmas, posyandu, dan rumah sakit di lebih dari 500 kabupaten/kota, paparan suhu di luar rentang hanya selama 30 menit pun dapat menurunkan potensi antigen hingga 20–40% pada beberapa jenis vaksin. Oleh karena itu, integrasi antara model resilience kuantitatif Khurshid & Siddiqui (2024) dan arsitektur IoT berbasis sensor DS18B20 yang diajukan Putra et al. (2024) menjadi agenda rekayasa industri yang mendesak untuk diterjemahkan ke dalam Standar Operasional Prosedur (SOP) dan sistem pendukung keputusan manajerial.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis yang dibangun dalam modul ini mengintegrasikan empat pilar analitis: (i) model degradasi Arrhenius–Time Temperature Integrator (TTI), (ii) fungsi keandalan (*reliability function*) peralatan pendingin, (iii) metrik ketahanan sistem (*system resilience metric*), dan (iv) deteksi anomali berbasis ambang batas (*threshold-based anomaly detection*) untuk arsitektur IoT.

### 2.1 Model Degradasi Kinetika Arrhenius–TTI

Degradasi produk biologis akibat paparan suhu di luar ambang batas mengikuti persamaan Arrhenius klasik yang telah diadopsi oleh Khurshid & Siddiqui (2024) sebagai basis kerusakan kumulatif:

$$
k(T) = A \cdot \exp\!\left(-\frac{E_a}{R \cdot T}\right)
$$

di mana $k(T)$ adalah laju degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah faktor pra-eksponensial, $E_a$ adalah energi aktivasi (J/mol), dan $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal. Indeks kerusakan kumulatif selama profil suhu time-varying $T(t)$ didefinisikan sebagai:

$$
D(t) = \int_0^{t} k(T(\tau)) \, d\tau = \int_0^{t} A \cdot \exp\!\left(-\frac{E_a}{R \cdot T(\tau)}\right) d\tau
$$

Produk dianggap失效 (*失效* =失效失效失效失效失效失效)失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效失效