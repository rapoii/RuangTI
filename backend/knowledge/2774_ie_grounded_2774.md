# 2774 — Model Ketahanan (Resilience) Rantai Dingin Produk Mudah Rusak dengan Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam logistik produk mudah rusak (*perishable products*) yang mencakup produk farmasi (vaksin, biologik), bahan pangan (daging, ikan, susu, buah), serta reagen diagnostik. Kerusakan akibat pelanggaran suhu (*temperature excursion*) bukan sekadar persoalan teknis, melainkan persoalan sosio-ekonomi berskala nasional: WHO memperkirakan bahwa lebih dari 50% vaksin terbuang sia-sia secara global karena kegagalan rantai dingin, sementara pada sektor pangan, FAO melaporkan kerugian pascapanen mencapai USD 30 miliar per tahun akibat *cold chain failure*.

Khurshid dan Siddiqui (2024) dalam artikel "A Resilience Model for Cold Chain Logistics of Perishable Products" menyoroti bahwa pendekatan tradisional yang hanya berfokus pada *reliability* (keandalan perangkat) tidak cukup untuk menghadapi skenario gangguan modern yang bersifat *multi-hazard* — mulai dari pemadaman listrik, kerusakan kompresor, bencana alam, hingga serangan siber pada sistem SCADA. Ketahanan (*resilience*) didefinisikan sebagai kapasitas sistem untuk menyerap gangguan (*absorb*), beradaptasi (*adapt*), dan memulihkan kinerja (*recover*) dalam waktu yang dapat diterima, sebuah paradigma yang melampaui sekadar Mean Time Between Failures (MTBF).

Konteks empiris yang sangat relevan dikemukakan oleh Putra, Defit, dan Nurcahyo (2024) di Jurnal KomtekInfo: Dinas Kesehatan Kabupaten Siak, Riau, melalui UPTD Farmasi, menghadapi permasalahan operasional konkret — cold chain box vaksin tidak dilengkapi alat pemantau suhu *real-time*, sehingga peringatan dini terhadap kenaikan suhu (akibat kerusakan internal/eksternal) tidak tersedia, dan pencatatan suhu masih dilakukan secara manual setiap 2 jam oleh apoteker pada *log sheet*. Pola seperti ini tersebar di ratusan UPTD farmasi kabupaten/kota di Indonesia, sehingga kebutuhan akan model ketahanan yang mengintegrasikan pemantauan IoT menjadi strategis.

Dari perspektif Teknik Industri, permasalahan ini merupakan masalah optimasi sistem terintegrasi dengan empat subsistem: (i) jaringan distribusi fisik, (ii) sistem penyimpanan terkondisi (cold storage), (iii) sistem instrumentasi & telemetri (IoT), dan (iv) protokol respons gangguan (SOP tanggap darurat). Keempat subsistem ini harus dirancang secara simultan agar diperoleh *system resilience index* yang optimal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Indeks Ketahanan Sistem Cold Chain

Khurshid dan Siddiqui (2024) membangun model ketahanan dengan *Quality Performance Ratio* (QPR) sebagai fungsi waktu. Jika $Q(t)$ menyatakan rasio kinerja sistem terhadap kinerja nominal pada waktu $t$, maka untuk horizon waktu $T_0$ indeks ketahanan sistem didefinisikan sebagai:

$$R = \frac{1}{T_0} \int_{t_0}^{t_0+T_0} Q(t) \, dt$$

dimana $Q(t) \in [0,1]$. Nilai $Q(t)=1$ menunjukkan kinerja nominal, sementara $Q(t)=0$ menandakan kegagalan total. Untuk skenario gangguan yang terjadi pada $t_d$ dan berakhir pada $t_r$ (dengan $t_r > t_d$), dengan asumsi degradasi linier selama gangguan dan pemulihan eksponensial, maka:

$$Q(t) = \begin{cases} 1, & t < t_d \\ 1 - \dfrac{t-t_d}{\tau_a}, & t_d \leq t < t_{d}+\tau_a \\ Q_{\min}\, e^{-\frac{t-t_{d}-\tau_a}{\tau_r}}, & t \geq t_d+\tau_a \end{cases}$$

dimana $\tau_a$ adalah waktu absorpsi (degradasi ke level minimum $Q_{\min}$) dan $\tau_r$ adalah konstanta waktu pemulihan (*recovery time constant*).

### 2.2. Expected Loss of Quality (ELQ)

Beban ekonomi gangguan dapat diformulasikan sebagai *Expected Loss of Quality* (ELQ):

$$\text{ELQ} = \sum_{i=1}^{n} P_i \cdot V_i \cdot (1 - Q_{\text{avg},i})$$

dimana $P_i$ adalah probabilitas skenario gangguan ke-$i$, $V_i$ adalah nilai produk yang terpapar, dan $Q_{\text{avg},i}$ adalah kinerja rata-rata sistem selama skenario tersebut.

### 2.3. Model Sensor DS18B20 (Putra et al., 2024)

Sensor DS18B20 memiliki resolusi 9–12 bit, dengan akurasi $\pm 0{,}5^\circ\text{C}$ pada rentang $-10^\circ\text{C}$ hingga $+85^\circ\text{C}$. Hubungan antara kode digital dan suhu terukur:

$$T_{\text{measured}} = \frac{n}{2^{N-4}} + \epsilon$$

dimana $n$ adalah keluaran digital 12-bit (resolusi $0{,}0625^\circ\text{C}$ untuk $N=12$), dan $\epsilon \sim \mathcal{N}(0, \sigma^2)$ adalah *noise* Gaussian dengan $\sigma \leq 0{,}1^\circ\text{C}$ pada kondisi terkalibrasi.

### 2.4. Logika Peringatan Dini (Alert Threshold)

Ambang batas suhu untuk kategori vaksin rutin Program Imunisasi Nasional (PIN) Indonesia adalah $2^\circ\text{C} \leq T \leq 8^\circ\text{C}$. Fungsi aktivasi alarm:

$$A(t) = \begin{cases} 1, & T(t) < T_{\min} \lor T(t) > T_{\max} \\ 0, & \text{lainnya} \end{cases}$$

dimana $A(t)=1$ menandakan aktivasi protokol tanggap darurat (transfer batch, investigasi akar penyebab, pelaporan ke BPOM).

### 2.5. Probabilitas Deteksi Gangguan dengan IoT

Keunggulan IoT vs pencatatan manual dapat dimodelkan sebagai berikut. Jika pencatatan manual memiliki periode $\Delta t_{\text{manual}} = 120$ menit, sedangkan IoT memiliki periode $\Delta t_{\text{IoT}} = 1$ menit, maka probabilitas deteksi gangguan yang terjadi sesaat setelah pembacaan:

$$P_{\text{detect}} = 1 - e^{-\lambda \Delta t}$$

dimana $\lambda$ adalah laju kejadian excursion. Untuk $\lambda = 0{,}01$/menit, diperoleh $P_{\text{detect,manual}} = 0{,}698$ dan $P_{\text{detect,IoT}} = 0{,}00995$ — IoT menurunkan *expected time-to-detect* sebesar 120×.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem Pemantauan Cold Chain IoT

Berdasarkan arsitektur yang diimplementasikan Putra et al. (2024), sistem terdiri atas empat lapisan:

1. **Lapisan Persepsi (Sensor):** Sensor DS18B20 (1-Wire interface), terhubung ke mikrokontroler ESP32/Arduino. Untuk cold chain box multi-rak, digunakan topologi *daisy-chain* dengan alamat ROM 64-bit unik.
2. **Lapisan Komunikasi:** Protokol MQTT (Message Queuing Telemetry Transport) over WiFi/GSM; payload JSON berisi timestamp, ID sensor, nilai suhu, status baterai.
3. **