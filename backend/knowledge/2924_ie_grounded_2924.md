# 2924 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi PAT, Rekayasa Proses, dan Pengendalian Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks (WSN) for Lyophilization — Penerapan Process Analytical Technology (PAT) pada Pengeringan Beku Farmasi
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan ganda yang semakin tajam pada dekade ini: di satu sisi, permintaan akan produk biologis kompleks seperti antibodi monoklonal (mAb), conjugate antibodi-obat (ADC), terapi seluler, dan vaksin mRNA meningkat hampir 12–14% CAGR menurut laporan pasar farmasi global; di sisi lain, hampir 50% produk farmasi molekuler besar yang masuk pipeline klinis bersifat labil secara termal dan memerlukan liofilisasi (freeze-drying) untuk menjamin stabilitas jangka panjang. Liofilisasi adalah proses pengeringan dengan menghilangkan air melalui sublimasi (tahap *primary drying*) dan desorpsi (tahap *secondary drying*) di bawah tekanan vakum rendah (< 1 mbar), yang mana membutuhkan pemahaman presisi terhadap dinamika termal dan transport massa di dalam vial. Proses ini secara historis bergantung pada thermocouple berkabel (T-type atau K-type) yang ditempatkan pada subset vial—biasanya hanya 1–3 vial dari total 5.000–30.000 vial per batch—sehingga menimbulkan blind spot informasi dan variabilitas vial-ke-vial (Meza-Galvan, Strongrich & Darwish, 2026, DOI: 10.1002/9783527850303.ch4).

Dalam kerangka Process Analytical Technology (PAT) yang diamanatkan FDA sejak 2004 (Guidance for Industry: PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance), paradigma lama ini dianggap tidak lagi memadai karena filosofi Quality-by-Design (QbD) menuntut pemahaman *real-time* terhadap *Critical Quality Attributes* (CQA) seperti kadar air residu, morfologi cake, dan waktu penyelesaian sublimasi. Meza-Galvan, Strongrich dan Darwish (2026) berargumen bahwa solusi paling transformatif terhadap keterbatasan ini adalah adopsi Wireless Sensor Networks (WSN)—arsitektur node sensor otonom bertenaga baterai yang mampu memantau suhu produk, tekanan parsial uap air, dan bahkan parameter spektroskopi secara terdistribusi pada seluruh vial di dalam chamber. Berbeda dengan thermocouple berkabel, node WSN menghilangkan konduksi termal parasitik (yang dapat menginduksi error pembacaan suhu 2–5°C menurut literatur), memungkinkan pemetaan suhu produk secara spasial dua atau tiga dimensi, serta menyediakan redundansi data untuk validasi proses sesuai ICH Q8(R2) dan Q9.

Urgensi ekonomis dari adopsi WSN cukup signifikan: satu batch liofilisasi gagal dapat bernilai USD 0,5–5 juta tergantung produk, sementara sensor nirkabel terbukti menurunkan tingkat batch failure hingga 30–40% dengan memberikan kemampuan intervensi berbasis data pada fase *primary drying*. Artusio, Barresi dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) melengkapi tinjauan ini dengan menyoroti bagaimana teknologi emerging—seperti sensor NIR berbasis MEMS, MEMS pressure transducers, dan algoritma machine learning on-node—berintegrasi secara native dengan WSN untuk membentuk *smart lyophilizer*. Tulisan ini akan menyusun basis pengetahuan teknik industri yang komprehensif, mulai dari model matematis transport panas dan massa, arsitektur protokol komunikasi, hingga studi kasus kuantitatif pada vial 10R berisi formulasi sukrosa 5% (b/v).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termodinamika Liofilisasi (Pikal–Pande)

Model kuasi-steady-state untuk *primary drying* liofilisasi, yang pertama kali diformalkan oleh Pikal et al. (1983) dan selanjutnya disempurnakan oleh Pikal dan Pande, menyatakan bahwa laju sublimasi dikendalikan secara seri oleh dua resistensi: resistansi transfer panas dari rak ke antarmuka sublimasi, dan resistansi transfer massa uap air melalui cake kering. Bentuk differensial sederhana dari model ini dapat ditulis:

$$\frac{dm}{dt} = \frac{A_p \cdot (p_i - p_c)}{R_p} = \frac{A_v \cdot K_v \cdot (T_s - T_b)}{1 + \frac{K_v \cdot A_v \cdot R_p}{A_p}}$$

di mana $dm/dt$ adalah laju sublimasi (kg/s), $A_p$ adalah luas penampang vial bagian dalam (m²), $p_i$ adalah tekanan uap air pada antarmuka sublimasi (Pa), $p_c$ adalah tekanan ruang (Pa), $R_p$ adalah resistansi cake kering (Pa·m²·s/kg atau cmHg·m²·h/g), $A_v$ adalah luas penampang luar vial (m²), $K_v$ adalah koefisien transfer panas vial (W/m²·K), $T_s$ adalah suhu rak, dan $T_b$ adalah suhu produk pada antarmika sublimasi (Meza-Galvan et al., 2026).

### 2.2 Resistansi Cake dan Parameter Transport

Resistansi cake $R_p$ merupakan fungsi non-linear dari dry layer thickness $L$ dan dapat diekspresikan melalui persamaan yang melibatkan parameter empiris $R_0$ dan $A_{Rp}$:

$$R_p = R_0 + \frac{A_{Rp} \cdot L}{1 + B_{Rp} \cdot L}$$

Persamaan ini menunjukkan bahwa cake kering memiliki resistansi awal $R_0$ (akibat desiccant effect pada permukaan) yang kemudian meningkat seiring pertumbuhan lapisan kering. Untuk formulasi sukrosa 5% (b/v), parameter tipikal pada $-25°C$ adalah $R_0 \approx 0,7$ cmHg·h/g dan $A_{Rp} \approx 1,4$ cmHg·h/g per cm. Laju pertumbuhan lapisan kering mengikuti:

$$\frac{dL}{dt} = \frac{1}{\rho_{\text{ice}} \cdot A_p} \cdot \frac{dm}{dt}$$

di mana $\rho_{\text{ice}} \approx 917$ kg/m³ adalah densitas es. Persamaan-persamaan ini menentukan **apa yang harus diukur secara real-time**: suhu $T_b$ pada antarmuka sublimasi dan tekanan ruang $p_c$, yang keduanya menjadi target ideal bagi node WSN (Artusio, Barresi & Pisano, 2026).

### 2.3 Arsitektur Jaringan Sensor Nirkabel

WSN dalam liofilizer mengikuti topologi cluster-tree berbasis IEEE 802.15.4 (standar fisik dan MAC layer untuk LR-WPAN). Setiap node sensor $i$ pada posisi vial $\mathbf{x}_i = (x_i, y_i, z_i)$ melakukan akuisisi data dengan perioda sampling $T_s$ dan mengirimkannya ke *coordinator* melalui *router node*. Throughput efektif jaringan, dinotasikan sebagai $S_{\text{eff}}$, dibatasi oleh:

$$S_{\text{eff}} = \frac{N \cdot L_p}{T_s \cdot (1 + \text{PER})}$$

di mana $N$ adalah jumlah node aktif, $L_p$ adalah payload per transmisi (bytes), dan PER adalah *Packet Error Rate*. Untuk menjaga latensi kontrol di bawah 2 detik (syarat loop kontrol PAT menurut FDA PAT Guidance), dengan $N = 200$ node dan $L_p = 32$ byte, diperlukan $T_s \leq 3$ s pada PER $\leq 1\%$.

### 2.4 Kalibrasi dan Ketertelusuran NIST

Sensor nirkabel harus memiliki ketidakpastian $\sigma_T \leq 0,5°C$ untuk suhu dan $\sigma_p \leq 0,05$ mbar untuk tekanan. Fungsi kalibrasi khas node resistansi platinum (PT0) mengikuti persepsi Callendar-Van Dusen:

$$R(T) = R_0 \cdot [1 + AT + BT^2 + C(T-100)T^3]$$

yang mana untuk rentang suhu $-50°C$ hingga $+100°C$ cukup didekati dengan koefisien linier dan kuadratik. Ketertelusuran ke standar nasional (NIST) menjamin kesepadanan data antar-batch dan antar-fasilitas produksi sesuai ICH Q7.

## 3. Metodologi Rekayasa & SOP

### 3.1 Arsitektur Sistem

Implementasi WSN dalam liofilizer mengikuti arsitektur berlapis berikut:

1. **Lapisan fisik (sensor):** Termistor PT1000 (presisi $\pm 0,1°C$), MEMS pressure sensor (rentang 0,01–10 mbar, presisi $\pm 0,02$ mbar), sensor kapasitif RH, dan opcional NIR micro-spectrometer ($\lambda = 900–1700$ nm) untuk inferensi kadar air residu.
2. **Lapisan komunikasi:** Modul radio 2,4 GHz IEEE 802.15.4 (atau sub-GHz 868/915 MHz untuk penetrasi baja chamber), protokol time-synchronized channel hopping (TSCH), enkripsi AES-128.
3. **Lapisan edge gateway:** Mini-PC industri dengan software SCADA/HMI, menerima data via Ethernet/USB, melakukan estimasi state (misalnya Kalman filter), dan mengirim setpoint ke PLC lyophilizer via OPC-UA.
4. **Lapisan analitik:** Historian berbasis time-series database (InfluxDB/OSIsoft PI), dashboard visualisasi 3-D thermal map vial, dan modul ML untuk prediksi akhir sublimasi.

### 3.2 SOP Akuisisi dan Validasi

**Langkah A — Pemetaan Termal Awal.** Sebelum produksi rutin, dilakukan *thermal mapping* dengan menempatkan node sensor pada seluruh grid vial (misalnya 7×7 array tengah + 4 sudut). Suhu rak dan chamber divariasikan pada tiga titik ($-30°C$, $+5°C$, $+30°C$) untuk membangun model regresi linier $\hat{T}_b = \beta_0 + \beta_1 T_s + \beta_2 p_c$.

**Langkah B — Penempatan Node Sterilisasi.** Node sensor dimasukkan ke dalam vial setelah filling dalam kondisi aseptik (ISO 5 laminar flow), ditutup dengan rubber stopper partial, dan disusun menggunakan loading pattern yang validated. Identitas node (UUID) diikat ke koordinat vial dalam Manufacturing Execution System (MES).

**Langkah C — Kalibrasi In-Situ.** Sebelum tiap batch, node menjalani kalibrasi dua titik pada $0°C$ (es melting) dan $20°C$ (water triple point verified). Offset $\delta T$ disimpan sebagai metadata batch.

**Langkah D — Akuisisi Real-Time.** Sampling rate $T_s = 1$ Hz untuk suhu, $T_s = 0,2$ Hz untuk tekanan. Data dikirim via TSCH schedule untuk menjamin determinisme latensi.

**Langkah E — Pengendalian Loop Tertutup.** Berdasarkan $T_b$ terukur, algoritma *controlled nucleation* dan *adaptive shelf temperature ramping* dijalankan: jika $T_b > T_{\text{target}} - 1°C$, suhu rak diturunkan; jika $T_b < T_{\text{target}} - 3°C$, dinaikkan. Logika kontrol ini mengikuti persamaan PID diskret:

$$u[k] = K_p \cdot e[k] + K_i \sum_{j=0}^{k} e[j] + K_d (e[k] - e[k-1])$$

dengan $e[k] = T_{\text{target}} - T_b[k]$. Tuning parameter $K_p$, $K_i$, $K_d$ dilakukan menggunakan metode Ziegler-Nichols atau auto-tuning LQR untuk masing-masing produk.

**Langkah F — Dokumentasi dan Pelaporan.** Setelah batch selesai, seluruh dataset T/p/time diarsipkan dalam format OPC-UA sesuai ALCOA+