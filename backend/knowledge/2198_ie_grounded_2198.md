# 2198 — Model Ketahanan (Resilience) Logistik Cold Chain Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik cold chain merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu (temperature-sensitive), mencakup produk farmasi, vaksin, biologis, makanan beku, serta bahan kimia tertentu. Kerusakan pada satu mata rantai suhu—baik berupa kenaikan suhu (_temperature excursion_) di atas ambang kritis maupun keterlambatan distribusi—dapat menimbulkan kerugian ekonomi, sosial, dan kesehatan masyarakat yang sangat besar. Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan sebuah _Resilience Model_ untuk cold chain produk mudah rusak, yang memandang kemampuan sistem tidak hanya untuk mencegah gangguan (_prevention_), tetapi juga menyerap (_absorb_), beradaptasi (_adapt_), dan memulihkan (_recover_) fungsinya pasca-gangguan. Pendekatan ini menandai pergeseran paradigma dari _reliability_ klasik menuju _resilience engineering_ yang lebih relevan untuk rantai pasok modern yang menghadapi volatilitas, disrupsi iklim, pandemi, serta ketidakpastian permintaan.

Urgensi topik ini tecermin dari data operasional di tingkat lapangan. Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mendokumentasikan permasalahan nyata pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak, yang bertanggung jawab penuh menjaga kualitas vaksin dari titik terima hingga distribusi. Dua permasalahan struktural teridentifikasi: (1) _cold chain box_ sebagai media penyimpanan dan pendingin vaksin belum dilengkapi alat pemantauan suhu _real-time_ yang mampu memberikan peringatan dini kepada apoteker ketika suhu _cold chain box_ naik akibat kerusakan internal (misalnya kegagalan _ice pack_ atau kompresor) maupun eksternal (misalnya paparan lingkungan atau kegagalan catu daya); dan (2) proses pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada _log sheet_ kertas oleh apoteker, yang rentan terhadap _human error_, keterlambatan respons, dan kehilangan jejak audit (_audit trail_). Kombinasi keduanya menciptakan _single point of failure_ yang menurunkan _resilience_ sistem secara keseluruhan.

Secara ekonomi, Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin terbuang secara global akibat kegagalan cold chain—angka yang diperparah oleh kurangnya visibilitas suhu. Dalam konteks nasional Indonesia, dengan geografi kepulauan dan infrastruktur listrik yang heterogen, persoalan ini menjadi tantangan manajerial yang khas. Oleh karena itu, integrasi antara model _resilience_ tingkat strategis (Khurshid & Siddiqui, 2024) dengan implementasi sensor suhu _real-time_ tingkat operasional (Putra et al., 2024) menjadi agenda rekayasa yang sangat relevan bagi para insinyur industri, _supply chain analyst_, dan perancang sistem kualitas di industri farmasi, makanan, dan _biotech_.

## 2. Landasan Teori & Formulasi Matematis

Model ketahanan cold chain yang dirujuk oleh Khurshid dan Siddiqui (2024) berakar pada kerangka _Resilience Triangle_ yang dipopulerkan oleh Bruneau dkk., di mana kinerja sistem $Q(t)$ menurun pasca-gangguan pada waktu $t_0$ menuju level minimum $Q_{\min}$, kemudian dipulihkan ke tingkat target $Q_{\text{target}}$ pada waktu $t_1$. Indeks ketahanan _Deterministic Resilience_ didefinisikan sebagai:

$$\text{Res} = \frac{1}{t_1 - t_0} \int_{t_0}^{t_1} Q(t)\, dt \tag{1}$$

Untuk kasus cold chain yang kinerjanya menurun secara linear selama periode ekskursi suhu (orde pertama), fungsi kualitas produk dapat dimodelkan sebagai degradasi mengikuti persamaan Arrhenius:

$$k(T) = A \cdot e^{-E_a / (R_g T)} \tag{2}$$

dengan $k(T)$ adalah laju degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah faktor pra-eksponensial, $E_a$ adalah energi aktivasi (J/mol), dan $R_g = 8{,}314\,\text{J/(mol·K)}$ adalah konstanta gas. Untuk produk seperti vaksin, kenaikan suhu dari 4 °C ke 8 °C dapat meningkatkan laju degradasi secara eksponensial.

Untuk sistem yang terdiri atas $n$ node cold chain (misalnya _cold storage_ → armada运输 → _last-mile delivery_), ketahanan jaringan dimodelkan sebagai:

$$R_{\text{network}} = 1 - \prod_{i=1}^{n} \left(1 - p_i\right) \tag{3}$$

dengan $p_i$ adalah probabilitas node $i$ mempertahankan integritas suhu selama periode pengamatan. Sistem IoT pemantauan suhu _real-time_ yang diusung Putra et al. (2024) berfungsi meningkatkan $p_i$ melalui dua mekanisme: (a) deteksi dini ekskursi sehingga _recovery time_ berkurang, dan (b) automasi pencatatan sehingga _Mean Time to Detect_ (MTTD) berkurang secara signifikan.

Formulasi _Expected Resilience Loss_ (ERL) atau _Resilience Deficit_ menurut Bruneau dapat dituliskan:

$$\text{ERL} = \int_{t_0}^{t_1} \left[100\% - Q(t)\right] dt \tag{4}$$

Dalam konteks cold chain, $Q(t)$ dapat diproksikan dengan _Potency Remaining_ atau _Vaccine Vial Monitor_ (VVM) status. ERL inilah yang diminimalkan oleh investasi sistem IoT. Jika biaya investasi sensor dan _gateway_ adalah $C_{\text{IoT}}$ dan _Expected Loss Reduction_ tahunan adalah $\Delta L$, maka kriteria kelayakan investasi mengikuti _Net Present Value_ (NPV):

$$\text{NPV} = \sum_{t=0}^{T} \frac{\Delta L_t - C_{\text{op},t}}{(1+r)^t} - C_{\text{IoT}} \tag{5}$$

dengan $r$ adalah _discount rate_ dan $C_{\text{op},t}$ adalah biaya operasional sistem IoT tahun ke-$t$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi _Resilience Cold Chain_ mengikuti pendekatan berlapis yang mensinergikan kerangka konseptual Khurshid dan Siddiqui (2024) dengan arsitektur teknis Putra et al. (2024). Prosedur operasionalnya dapat disusun sebagai berikut:

**Tahap 1 — Pemetaan Risiko dan Karakterisasi Produk.** Setiap produk (vaksin, _biological_, makanan beku) memiliki _cold chain profile_ spesifik berupa rentang suhu (umumnya 2–8 °C untuk vaksin), _Mean Kinetic Temperature_ (MKT), dan _Time-out-of-Storage_ (TOS) maksimum. Tahap ini menghasilkan _baseline_ kinerja yang menjadi acuan $Q(t)$ awal.

**Tahap 2 — Instrumentasi Cold Box dengan Sensor DS18B20.** Putra et al. (2024) menggunakan sensor DS18B20 yang memiliki karakteristik: rentang ukur $-55\,^\circ\text{C}$ hingga $+125\,^\circ\text{C}$, akurasi $\pm 0{,}5\,^\circ\text{C}$ pada rentang $-10\,^\circ\text{C}$ hingga $+85\,^\circ\text{C}$, resolusi 9–12 bit yang dapat diprogram, dan antarmuka _1-Wire_ yang hemat _pin_ mikrokontroler. Sensor ini diinstal di minimal tiga titik pada _cold box_: dekat evaporator/ice pack, tengah _payload_, dan dekat pintu/penutup untuk mendeteksi _thermal gradient_.

**Tahap 3 — Akuisisi Data dan Akuisisi Jaringan.** Mikrokontroler (Arduino/ESP32) membaca sensor secara periodik dengan laju sampling $f_s$ yang dipilih berdasarkan teorema Nyquist relatif terhadap dinamika termal _cold box_:

$$f_s \geq 2 \cdot f_{\text{thermal,max}} \tag{6}$$

Data dikirim ke _cloud server_ melalui protokol MQTT/HTTP untuk _dashboard_ real-time dan _audit trail_ otomatis—menggantikan pencatatan manual 2 jam sekali.

**Tahap 4 — Peringatan Dini dan _Response Protocol_.** Sistem menetapkan ambang peringatan dua tingkat: (a) _warning_ pada saat suhu menyimpang $\pm 1\,^\circ\text{C}$ dari _setpoint_, dan (b) _alarm_ pada saat suhu menyimpang $\pm 2\,^\circ\text{C}$ atau berada di luar rentang produk. Peringatan dikirimkan melalui SMS, _push notification_, dan _buzzer_ lokal.

**Tahap 5 — _Post-Incident Review_ dan _Resilience Improvement Loop_.** Setiap insiden ekskursi dicatat dalam _event log_ terstruktur yang mencakup _time-to-detect_ (TTD), _time-to-respond_ (TTR), _time-to-recover_ (TTRcvr), dan _product loss_. Data ini dimasukkan ke model Khurshid & Siddiqui untuk mengkalibrasi ulang parameter $p_i$ dan $R_{\text{network}}$ secara berkala—mewujudkan _closed-loop continuous improvement_ sesuai prinsip _resilience engineering_.

Arsitektur teknologi mengikuti pola berlapis: _Perception Layer_ (sensor