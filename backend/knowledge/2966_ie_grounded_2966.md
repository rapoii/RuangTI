# 2966 — Model Resiliensi Rantai Dingin (Cold Chain) untuk Produk Mudah Rusak dengan Integrasi Pemantauan IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain logistics*) merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, produk farmasi biologis, makanan segar, produk laut, dan bahan kimia tertentu. Menurut Khurshid & Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), jaringan cold chain menghadapi tekanan disrupsi yang semakin kompleks, mulai dari kerusakan peralatan pendingin, keterlambatan distribusi, kegagalan sumber daya listrik, hingga kesalahan prosedur operasional. Kerusakan produk akibat pelanggaran suhu (*temperature excursion*) tidak hanya menurunkan kualitas, tetapi juga menimbulkan kerugian ekonomi masif dan risiko kesehatan publik yang signifikan — terutama untuk vaksin yang merupakan produk hayati dengan *narrow thermal tolerance window* (WHO PQS Specification E001: 2–8 °C).

Di Indonesia, permasalahan ini mendapat sorotan tajam melalui studi Putra, Defit, dan Nurcahyo (2024) yang dipublikasikan di *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Penelitian tersebut menemukan bahwa Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak masih mengandalkan *cold chain box* tanpa sistem pemantauan suhu *real-time*. Pencatatan suhu dilakukan secara manual menggunakan *log sheet* setiap dua jam oleh apoteker — sebuah prosedur yang rentan terhadap human error, keterlambatan respons, dan kehilangan jejak audit (*audit trail*). Risiko yang muncul bersifat ganda: (1) kegagalan deteksi dini saat suhu naik melebihi ambang batas, dan (2) tidak adanya peringatan otomatis ketika terjadi kerusakan internal/eksternal pada unit pendingin.

Kedua paper ini saling melengkapi: Khurshid & Siddiqui (2024) membangun kerangka kuantitatif resiliensi untuk menilai kemampuan sistem pulih dari gangguan, sementara Putra dkk. (2024) menunjukkan titik-titik kerentanan teknis yang harus dimitigasi melalui sensor IoT (DS18B20) dan arsitektur *early warning*. Dalam konteks Teknik Industri, integrasi kedua perspektif ini memungkinkan pengembangan *resilient cold chain* yang tidak hanya reaktif, tetapi juga prediktif dan adaptif — sesuai dengan prinsip *Industry 4.0* dan *Supply Chain Risk Management* (SCOR model, ISO 28000:2007, serta GDP untuk obat — WHO TRS 961 Annex 6).

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi yang dirujuk dari Khurshid & Siddiqui (2024) mengikuti kerangka **Resilience Triangle** (Tierney & Bruneau, 2007) yang disesuaikan dengan dinamika termal cold chain. Tiga parameter fundamental yang merepresentasikan resiliensi sistem adalah:

1. **Resistensi ($\rho$):** Kemampuan sistem mempertahankan fungsinya saat terjadi gangguan.
2. **Absorpsi ($\alpha$):** Kapasitas sistem menyerap dampak sebelum terjadi degradasi kritis.
3. **Restorasi ($\tau$):** Kecepatan sistem kembali ke kondisi operasional normal.

Indeks resiliensi total didefinisikan sebagai:

$$R = \int_{t_0}^{t_1} \left[ 1 - Q(t) \right] dt + \int_{t_1}^{t_2} \frac{Q(t) - Q(t_2)}{t_2 - t_1} dt$$

di mana $Q(t) \in [0,1]$ adalah fungsi kualitas termal ternormalisasi pada waktu $t$, dengan $Q(t)=1$ menunjukkan kualitas sempurna (suhu ideal) dan $Q(t)=0$ menunjukkan kerusakan total. Titik $t_0$ adalah waktu awal gangguan, $t_1$ adalah waktu sistem mencapai degradasi maksimum, dan $t_2$ adalah waktu pemulihan penuh.

Untuk cold chain, fungsi $Q(t)$ dapat dimodelkan melalui persamaan transfer panas first-order:

$$Q(t) = 1 - \frac{T(t) - T_{ref}}{T_{max} - T_{ref}}$$

dengan $T_{ref}$ adalah suhu referensi (misal 5 °C untuk vaksin), $T_{max}$ adalah suhu batas kritis (misal 8 °C sebagai *upper limit*), dan $T(t)$ adalah suhu aktual terukur.

Sementara itu, Putra dkk. (2024) mengusulkan kerangka deteksi berbasis **Internet of Things (IoT)** dengan sensor DS18B20 yang memiliki akurasi $\pm 0.5\,^{\circ}\text{C}$ pada rentang $-10$ hingga $+85\,^{\circ}\text{C}$. Model akuisisi data mengikuti protokol *1-Wire* dengan laju sampling $f_s$. Kerugian kualitas produk akibat pelanggaran suhu dinyatakan sebagai:

$$L_{thermal} = k \int_{0}^{\Delta t_{exc}} \max(0, T(t) - T_{crit}) \, dt$$

dengan $k$ adalah koefisien degradasi spesifik produk (untuk vaksin, umumnya mengikuti kinetika Arrhenius), $\Delta t_{exc}$ adalah durasi pelanggaran suhu, dan $T_{crit}$ adalah suhu kritis.

Kerugian total rantai dingin kemudian diagregasikan sebagai:

$$L_{total} = L_{thermal} + L_{waste} + L_{recall} + L_{reputation}$$

Menggabungkan kedua kerangka, *expected loss* sistem dapat diminimalkan dengan menyelesaikan:

$$\min_{u(t)} \,\, E[L_{total}(u)] \quad \text{subject to} \quad T_{min} \leq T(t) \leq T_{max}$$

di mana $u(t)$ adalah *control vector* (daya kompresor, frekuensi pintu terbuka, kebijakan staf, dsb.) yang dapat diatur untuk mempertahankan suhu dalam koridor termal yang diizinkan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *resilient cold chain* mengikuti kerangka 6-tahap yang dapat diturunkan dari gabungan kedua paper rujukan:

**Tahap 1 — Pemetaan Proses dan Identifikasi Failure Mode (FMEA)**
Setiap node cold chain (cold room, refrigerated vehicle, cold chain box) dianalisis menggunakan Failure Mode and Effects Analysis dengan menghitung *Risk Priority Number*:

$$RPN = S \times O \times D$$

dengan $S$ = Severity, $O$ = Occurrence, $D$ = Detection. Untuk cold chain box di UPTD Farmasi Siak (Putra dkk., 2024), kegagalan utama yang teridentifikasi adalah: (i) kegagalan deteksi suhu ($D=8$), (ii) pencatatan manual 2-jam sekali ($D=7$), dan (iii) tidak ada *alert system* ($S=9$).

**Tahap 2 — Instrumentasi IoT**
Sensor DS18B20 ditempatkan pada zona *load zone* (area produk), *return air*, dan *door perimeter*. Sensor berkomunikasi dengan mikrokontroler (ESP32/Arduino) melalui protokol *1-Wire*, kemudian data dikirim ke *cloud dashboard* via MQTT/WiFi. Akuisisi data dilakukan setiap $f_s = 30$ detik — peningkatan 240× lipat dibanding pencatatan manual 2 jam.

**Tahap 3 — Threshold & Alert Logic**
Alarm tiga tingkat dipasang:
- *Warning* pada $T > 6\,^{\circ}\text{C}$ selama $>5$ menit
- *Critical* pada $T > 8\,^{\circ}\text{C}$ selama $>2$ menit
- *Emergency* pada $T > 10\,^{\circ}\text{C}$ (langsung notifikasi SMS/WhatsApp ke apoteker)

**Tahap 4 — Predictive Maintenance**
Analisis tren suhu menggunakan moving average dan *statistical process control* (SPC) untuk mendeteksi anomali kompresor sebelum kerusakan terjadi.

**Tahap 5 — Response Playbook**
SOP respons darurat mencakup: (a) aktivasi *backup cooling*, (b) pemindahan produk ke unit cadangan, (c) notifikasi ke *cold chain manager*, (d) dokumentasi insiden.

**Tahap 6 — Audit & Continuous Improvement**
Data historis digunakan untuk memperbarui model resiliensi secara berkala dan memenuhi persyaratan dokumentasi WHO PQS dan ISO 9001.

Arsitektur sistem ini selaras dengan rekomendasi Khurshid & Siddiqui (2024) bahwa resiliensi cold chain membutuhkan integrasi empat pilar: **technology**, **process**, **information**, dan **people**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah UPTD Farmasi menyimpan 1.500 dosis vaksin COVID-19 dalam *cold chain box* berkapasitas 50 L dengan suhu referensi $T_{ref} = 5\,^{\circ}\text{C}$ dan batas kritis atas $T_{max} = 8\,^{\circ}\text{C}$ (sesuai WHO PQS E001). Pada pukul 08:00, catu daya kompresor terputus akibat gangguan PLN.

**Parameter:**
- Koefisien transfer panas kabin: $UA = 0{,}85$ W/K
- Massa thermal efektif: $m c_p = 4{,}2$ kJ/K
- Suhu ambien: $T_a = 30\,^{\circ}\text{C}$
- Suhu kritis absolut (pembuangan): $T_{crit} = 8\,^{\circ}\text{C}$

**Step 1 — Pemodelan Laju Kenaikan Suhu (Newton's Law of Cooling):**

$$T(t) = T_a - (T_a - T_0) \exp\left(-\frac{UA}{mc_p}t\right)$$

dengan $T_0 = 5\,^{\circ}\text{C}$, sehingga:

$$T(t) = 30 - 25\exp\left(-\frac{0{,}85}{4200}t\right)$$

**Step 2 — Menghitung Waktu Mencapai Suhu Kritis:**

Subukasi $T(t) = 8\,^{\circ}\text{C}$:

$$8 = 30 - 25\exp(-0{,}0002024\,t)$$

$$25\exp(-0{,}0002024\,t) = 22$$

$$\exp(-0{,}0002024\,t) = 0{,}88$$

$$t = -\frac{\ln(0{,}88)}{0{,}0002024} \approx 632\,\text{detik} \approx 10{,}5\,\text{menit}$$

**Step 3 — Kerugian Kualitas dengan Sistem Manual (pencatatan 2 jam):**
Karena *log sheet* hanya diperiksa setiap 2 jam = 7.200 detik, saat apoteker mengetahui pelanggaran suhu pada $t = 7.200$ s, suhu sudah mencapai:

$$T(7200) = 30 - 25\exp(-0{,}0002024 \times 7200) = 30 - 25(0{,}2337) \approx 24{,}16\,^{\circ}\text{C}$$

Kerugian termal:

$$L_{thermal, manual} = k \int_{632}^{7200} (T(t) - 8)\, dt \approx k \times 14.650 \approx 14{,}650\,k$$

**Step 4 — Kerugian dengan Sistem IoT (alert pada $t = 5$ menit = 300 s setelah $T > 6\,^{\circ}\text{C}$):**
Suhu pada $t = 632 + 300 = 932$ s adalah:

$$T(932) = 30 - 25\exp(-0{,}1886) = 30 - 25(0{,}8281) \approx 9{,}30\,^{\circ}\text{C}$$

Suhu masih di bawah ambang kritis, namun peringatan otomatis memicu *backup cooling* dalam $\Delta t_{resp} = 60$ s. Kerugian termal turun menjadi:

$$L_{thermal, IoT} = k \int_{632}^{932} (T(t) - 8)\, dt \approx k \times 96 \approx 96\,k$$

**Step 5 — Indeks Resiliensi (Khurshid & Siddiqui, 2024):**

Asumsikan $\alpha = 0{,}95$ (kemampuan absorpsi) dan $\tau_{manual} = 7.200$ s vs $\tau_{IoT} = 932$ s. Peningkatan resiliensi:

$$\Delta R = \frac{\tau_{manual} - \tau_{IoT}}{\tau_{manual}} = \frac{7200 - 932}{7200} \approx 87\%$$

**Interpretasi Manajerial:** Investasi IoT (sensor DS18B20 + ESP32 + dashboard) senilai ±Rp 4,5 juta untuk satu unit cold chain box memberikan *return* berupa pengurangan kerugian termal sekitar **99,3%** ($1 - 96/14650$) pada skenario ini. Dengan nilai 1.500 dosis @ Rp 250.000/dosis, kerugian terhindarkan per insiden ≈ Rp 372 juta — NPV positif dalam satu insiden saja.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Evaluasi Kritis.** Model Khurshid & Siddiqui (2024) memberikan kerangka kuantitatif yang kuat, namun bergantung pada asumsi fungsi $Q(t)$ linier dan *single-failure mode*. Dalam praktik industri, cold chain menghadapi *cascading failure* (misalnya kegagalan kompresor + keterlambatan transportasi) yang membutuhkan pendekatan *Bayesian Network* atau *Markov Chain*. Sementara itu, sistem Io