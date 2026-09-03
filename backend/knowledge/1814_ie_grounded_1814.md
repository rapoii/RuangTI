# 1814 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi Pemantauan IoT dan Mitigasi Gangguan Rantai Pasok Dingin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok dingin (*cold chain logistics*) merupakan subsistem kritis dalam industri produk mudah rusak (*perishable products*) yang mencakup vaksin, produk farmasi biologis, makanan laut, daging, produk susu, serta hortikultura segar. Khurshid & Siddiqui (2024, DOI: 10.2139/ssrn.4959599) menekankan bahwa karakteristik produk-produk tersebut mengharuskan pemeliharaan suhu dalam rentang termal yang sangat sempit sepanjang siklus *last-mile delivery* — untuk vaksin COVID-19 misalnya WHO merekomendasikan suhu $-20^{\circ}\text{C}$ hingga $-80^{\circ}\text{C}$ (cold chain *ultra-low*), sedangkan untuk vaksin program rutin pada umumnya dijaga pada $2°C$–$8°C$. Setiap deviasi suhu di luar ambang batas yang ditentukan selama periode kritis akan memicu degradasi kualitas ireversibel; pada konteks farmasi, kondisi ini dapat menurunkan potensi antigenik vaksin hingga menyebabkan kerugian sosial-ekonomi yang signifikan.

Di Indonesia, realitas operasional tantangan cold chain terungkap melalui penelitian Putra, Defit, & Nurcahyo (2024, DOI: 10.35134/komtekinfo.v12i1.589) yang mendokumentasikan kasus Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak. Penulis menemukan dua masalah struktural yang persisten: (1) *cold chain box* yang berfungsi sebagai media penyimpanan dan pendingin vaksin belum配备 sistem pemantauan suhu *real-time* sehingga apoteker tidak menerima peringatan dini ketika suhu menyimpang akibat kerusakan internal (misalnya kegagalan termoelektrik) maupun eksternal (misalnya paparan lingkungan ambien), dan (2) proses pencatatan suhu masih dilakukan secara manual dengan frekuensi 2 jam pada lembar log (*log sheet*), yang mengandung risiko kesalahan manusiawi (*human error*), keterlambatan respons, dan tidak adanya jejak audit digital (*digital audit trail*) yang dapat di-*query* untuk analisis forensik pascainsiden.

Konvergensi kedua perspektif ini menunjukkan urgensi pengembangan model resiliensi yang tidak hanya bersifat reaktif tetapi juga prediktif-proaktif. Kerugian ekonomi akibat *cold chain failure* diestimasi mencapai miliaran dolar secara global per tahun (Khurshid & Siddiqui, 2024), dengan proporsi signifikan disebabkan oleh lemahnya kapasitas pemulihan (*recovery capacity*) pascagangguan. Oleh karena itu, kebutuhan untuk mengkuantifikasi resiliensi cold chain melalui indikator matematis yang rigor menjadi penting bagi insinyur industri yang bertanggung jawab atas desain, pengoperasian, dan continuous improvement sistem rantai pasok dingin.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Sistem Cold Chain

Khurshid & Siddiqui (2024) mengajukan formulasi indeks resiliensi $R$ yang merepresentasikan kemampuan sistem untuk mempertahankan tingkat layanan setelah mengalami gangguan. Secara matematis:

$$R = \frac{\displaystyle\int_{t_d}^{t_r} Q(t)\,dt}{\displaystyle\int_{t_0}^{t_d} Q(t)\,dt}$$

di mana $Q(t)$ adalah fungsi kualitas/service level pada waktu $t$, $t_0$ adalah waktu sebelum gangguan, $t_d$ adalah waktu onset gangguan, dan $t_r$ adalah waktu pemulihan penuh. Indeks $R \in [0, \infty)$; nilai mendekati 1 menunjukkan pemulihan sempurna, nilai lebih besar dari 1 mengindikasikan *over-recovery*, sementara $R < 1$ menandakan degradasi kualitas residual.

### 2.2 Kinetika Degradasi Kualitas (Persamaan Arrhenius)

Untuk produk biologis dan pangan, laju degradasi kualitas $k$ sangat bergantung pada suhu dan mengikuti persamaan Arrhenius:

$$k(T) = A \cdot \exp\left(-\frac{E_a}{R_g \cdot T}\right)$$

dengan $A$ adalah faktor pra-eksponensial (frekuensi reaksi), $E_a$ adalah energi aktivasi (J/mol), $R_g = 8{,}314$ J/(mol·K) adalah konstanta gas universal, dan $T$ adalah suhu absolut (K). Fungsi kualitas seiring waktu mengikuti:

$$Q(t) = Q_0 \cdot \exp\left(-k(T) \cdot t\right)$$

Untuk vaksin dengan parameter tipikal $E_a \approx 80$ kJ/mol pada suhu referensi $T_{ref} = 278{,}15$ K ($5^{\circ}\text{C}$), peningkatan suhu ke $T = 298{,}15$ K ($25^{\circ}\text{C}$) selama $\Delta t = 30$ menit menghasilkan peningkatan laju degradasi:

$$\frac{k(298{,}15)}{k(278{,}15)} = \exp\left[\frac{E_a}{R_g}\left(\frac{1}{278{,}15} - \frac{1}{298{,}15}\right)\right] \approx 6{,}7\times$$

Artinya setiap 30 menit paparan pada suhu ruang mempercepat degradasi sekitar 6,7 kali lipat dibanding penyimpanan pada suhu standar.

### 2.3 Model Pemantauan IoT dengan Sensor DS18B20

Putra et al. (2024) menggunakan sensor DS18B20 yang memiliki akurasi $\pm 0{,}5^{\circ}\text{C}$ pada rentang $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$ dengan resolusi $0{,}0625^{\circ}\text{C}$ dan protokol komunikasi *1-Wire*. Akuisisi data mengikuti model pengukuran diskret:

$$T_{measured}(n) = T_{true}(n \cdot \tau) + \epsilon(n), \quad \epsilon \sim \mathcal{N}(0, \sigma^2)$$

dengan $\tau$ adalah interval sampling (misalnya 60 detik) dan $\sigma \approx 0{,}25^{\circ}\text{C}$. Ambang batas alarm didefinisikan sebagai:

$$\text{ALARM} = \mathbb{1}\left[T_{measured} \notin [T_{min}, T_{max}]\right]$$

dengan $T_{min} = 2^{\circ}\text{C}$ dan $T_{max} = 8^{\circ}\text{C}$ untuk cold chain vaksin rutin.

### 2.4 Indeks Kritisitas Gangguan (Severity Index)

Untuk mengkuantifikasi tingkat keparahan suatu insiden cold chain, didefinisikan:

$$S = \int_{t_d}^{t_d + \Delta t} \max\left(0, \frac{|T(t) - T_{set}|}{\Delta T_{tol}}\right) dt$$

di mana $\Delta T_{tol}$ adalah toleransi deviasi suhu. Nilai $S > 1$ mengindikasikan pelanggaran yang melebihi ambang toleransi dan perlu ditindaklanjuti dengan protokol pemulihan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka Khurshid & Siddiqui (2024) dan arsitektur teknis Putra et al. (2024), disusun SOP rekayasa berikut:

**Fase 1 — Desain Sistem Pemantauan (Pre-Deployment).** Lakukan pemetaan rantai pasok dingin menggunakan diagram Value Stream Mapping (VSM) untuk mengidentifikasi titik-titik kritis di mana risiko deviasi suhu maksimum (misalnya pada titik transfer antar moda, *loading dock*, dan *last-mile delivery*). Spesifikasi sensor DS18B20 minimal 3 unit per cold box untuk triangulasi data dan deteksi anomali.

**Fase 2 — Instalasi & Konfigurasi.** Sensor DS18B20 dikalibrasi terhadap termometer referensi bersertifikat NIST. Interval sampling $\tau$ ditetapkan 60 detik (Putra et al., 2024). Transmisi data menggunakan mikrokontroler (misalnya ESP32/Arduino) yang mengirim data ke *cloud server* melalui protokol MQTT dengan enkripsi TLS.

**Fase 3 — Operasional & Alerting.** Logika alarm berlapis (*multi-tier alarm*): Level 1 (warning) untuk $|T - T_{set}| > 1^{\circ}\text{C}$ selama $>5$ menit; Level 2 (critical) untuk $|T - T_{set}| > 3^{\circ}\text{C}$ selama $>2$ menit; Level 3 (catastrophic) untuk $T \notin [2, 8]^{\circ}\text{C}$ sama sekali. Setiap alarm men-trigger notifikasi ke apoteker dan supervisor melalui SMS/WhatsApp Gateway.

**Fase 4 — Response & Recovery.** Jika alarm Level 2/3 aktif, personel melakukan: (a) verifikasi fisik, (b) pemindahan produk ke cold chain cadangan jika diperlukan, (c) investigasi akar penyebab (*root cause analysis*) menggunakan *5-Why* dan Fishbone Diagram, (d) pengisian insiden ke dalam sistem dokumentasi digital.

**Fase 5 — Continuous Improvement.** Data historis dianalisis mingguan untuk menghitung distribusi $S$ dan $R$ guna mengidentifikasi tren degradasi sistem. Rekomendasi perbaikan kapasitas isolasi termal, pelatihan SDM, atau peremajaan peralatan dilakukan berdasarkan hasil analisis.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Distribusi Vaksin COVID-19 dari UPTD Farmasi Kabupaten Siak ke 14 Puskesmas dengan 3 Armada Cold Box (berdasarkan parameter Putra et al., 2024).**

**Parameter Input:**
- Kapasitas cold box: 50 vial/armada, total 150 vial
- Suhu operasional target: $T_{set} = 5^{\circ}\text{C}$, rentang aman $[2, 8]^{\circ}\text{C}$
- Energi aktivasi vaksin mRNA: $E_a = 90$ kJ/mol
- Durasi distribusi *rata-rata*: $t_{avg} = 8$ jam
- Sampling interval: $\tau = 60$ s
- Akurasi sensor DS18B20: $\sigma = 0{,}25^{\circ}\text{C}$

**Skenario Gangguan:** Salah satu armada mengalami kegagalan sistem pendingin selama $\Delta t = 45$ menit dengan suhu rata-rata eskalasi menjadi $T_{avg} = 18^{\circ}\text{C}$ sebelum teknisi melakukan intervensi.

**Perhitungan 1 — Laju Degradasi Relatif:**

$$\frac{k(291{,}15)}{k(278{,}15)} = \exp\left[\frac{90.000}{8{,}314}\left(\frac{1}{278{,}15} - \frac{1}{291{,}15}\right)\right] = \exp(4{,}14) \approx 63{,}1\times$$

**Perhitungan 2 — Severity Index $S$:**

$$S = \frac{|18 - 5|}{6} \times 45 \text{ menit} = 2{,}17 \times 45 = 97{,}5 \text{ menit·unit}$$

Karena $S \gg 1$, pelanggaran ini bersifat kritis dan memerlukan *quarantine* terhadap 50 vial pada armada tersebut untuk uji potensi.

**Perhitungan 3 — Estimasi Kehilangan Potensi (%):**

Diasumsikan $k(T_{ref}) = 10^{-4}$/jam pada $T_{ref} = 278{,}15$ K. Penurunan kualitas akibat gangguan:

$$\Delta Q = 1 - \exp\left[-k(T_{ref}) \cdot \left(\frac{63{,}1 - 1}{60} \cdot 45 \text{ menit}\right)\right]$$
$$\Delta Q = 1 - \exp\left[-10^{-4} \cdot 0{,}75\right] \approx 0{,}0075\%$$

Untuk paparan berulang atau suhu lebih tinggi (misalnya $25^{\circ}\text{C}$), nilai $\Delta Q$ meningkat signifikan secara non-linear sesuai karakteristik Arrhenius.

**Perhitungan 4 — Indeks Resiliensi:**

Sebelum implementasi IoT (Putra et al., 2024), waktu deteksi rata-rata gangguan adalah 2 jam (pencatatan manual setiap 2 jam). Setelah implementasi sistem IoT, waktu deteksi turun menjadi $<5$ menit ($0{,}083$ jam):

$$R_{before} = \frac