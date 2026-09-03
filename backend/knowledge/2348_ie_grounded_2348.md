# 2348 — Jaringan Sensor Nirkabel (WSN) untuk Pemantauan Liofilisasi Farmasi: Integrasi PAT dalam Rekayasa Proses Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Konsentrasi Sistem Manufaktur Farmasi & Process Analytical Technology (PAT)
**Topik Spesifik:** Wireless Sensor Networks (WSN) untuk Lyophilization (Pengeringan Beku)
**Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*, dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying*, dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri biofarmasi global menghadapi tantangan struktural yang makin kompleks dalam rantai pasok produk steril: antibodi monoklonal (mAb), vaksin mRNA, terapi seluler (cell & gene therapy), dan protein rekombinan semuanya membutuhkan stabilitas termal yang tidak dapat dipenuhi oleh formulasi cair konvensional. Liofilisasi atau *freeze-drying* tetap menjadi teknologi baku emas (*gold standard*) untuk mempertahankan aktivitas biologis molekul sensitif tersebut selama distribusi multi-kontinen. Secara global, lebih dari 60 % produk parenteral steril yang memerlukan cold-chain memanfaatkan proses ini, dan pasar lyophilized pharmaceuticals diproyeksikan melebihi USD 7,5 miliar pada 2030 dengan CAGR 8–10 %.

Meza-Galvan, Strongrich, dan Darwish (2026, [DOI:10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) menekankan bahwa masalah fundamental yang selama puluhan tahun melekat pada industri ini adalah **ketidakseragaman spasial** dalam proses liofilisasi di dalam satu batch. Meskipun para insinyur proses menetapkan parameter kontrol makro (suhu rak, tekanan ruang, laju ramp), satu siklus liofilisasi tipikal dengan 20.000 vial dapat menunjukkan gradien suhu produk (T_p) lebih dari 5 °C antara vial di tepi dan di tengah rak — gradien ini menentukan keragaman *collapse temperature* dan *residual moisture*, yang secara langsung berkorelasi dengan *shelf life* dan tingkat rejeksi Quality Control (QC). Artusio, Barresi, dan Pisano (2026, [DOI:10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menambahkan bahwa tanpa visibilitas *real-time* per-vial, keputusan desain *cycle* menjadi sangat konservatif, dengan margin safety suhu terlalu lebar, yang menaikkan waktu siklus 20–40 % dan mengurangi throughput chamber hingga 30 %.

Urgensi ekonominya jelas: setiap jam tambahan siklus utama pada freeze dryer industri berskala pilot (mis. LyoStar 4.0 SP Scientific atau A lyophilizer Virtis Genesis) bernilai USD 800–2.000 dalam *opportunity cost*. Konteks operasionalnya adalah perlunya migrasi dari **parameter kontrol titik tunggal** (single-point thermocouple atau PIRANEI Pressure Rise Analysis) menuju **distribusi spasial multivariat** yang hanya dimungkinkan oleh arsitektur *Wireless Sensor Networks* (WSN) dengan *nanosensors* thermocouple, capacitive humidity, dan MEMS pressure, yang mampu menyajikan *heat-map* dinamis ke platform kontrol SCADA/DCS.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas–Massa pada Liofilisasi (Persamaan Stefan)

Meza-Galvan dkk. (2026) membangun landasan teoritis dengan persamaan *Stefan* yang diselesaikan secara kuasi-stasioner untuk antarmuka sublimasi (*sublimation interface*). Laju sublimasi massa per satuan luas vial $\dot{m}$ diberikan oleh:

$$\dot{m}(t) = \frac{T_s - T_p(t)}{R_p(T_p) \cdot \Delta H_s} \quad \text{(heat-transfer-limited)} \tag{1}$$

dengan $T_s$ suhu rak (*shelf*, K), $T_p(t)$ suhu produk pada antarmuka (K), $R_p(T_p)$ tahanan cake kering (m²·Pa·s·J⁻¹), dan $\Delta H_s$ entalpi sublimasi es (≈ 2.838 kJ·kg⁻¹ pada 263 K). Resistansi cake kering dimodelkan mengikuti korelasi Pikal yang diturunkan Artusio dkk. (2026):

$$R_p(T_p) = R_{p0} \cdot \exp\!\left[\beta \left( T_p - T_{ref} \right)\right] + A_p \cdot L(t) \tag{2}$$

dengan $R_{p0}$ resistansi awal, $\beta$ koefisien suhu (≈ 0,025 K⁻¹), $L(t)$ ketebalan cake kering yang tumbuh terhadap waktu (m). Neraca massa menghasilkan:

$$L(t) = L_0 + \frac{1}{\rho_{ice}} \int_0^t \dot{m}(\tau)\, d\tau \tag{3}$$

Konservasi energi untuk lapisan beku (frozen layer) memerlukan:

$$\rho_f c_{p,f} \frac{\partial T_f}{\partial t} = k_f \nabla^2 T_f - \rho_{ice} \Delta H_s \frac{\partial L}{\partial t} \tag{4}$$

Persamaan ini menjadi dasar di mana **pembacaan WSN multi-titik** menyediakan $T_p(x,y,z,t)$ untuk menyelesaikan $\dot{m}$ dan $L(t)$ di setiap lokasi vial.

### 2.2 Karakteristik WSN: Kerapatan Node, Coverage, dan Energi

Desain jaringan sensor nirkabel diformulasikan sebagai masalah cakupan probabilistik (Meza-Galvan dkk., 2026). Dengan menempatkan $n$ node pada rak seluas $A$ (m²), kerapatan node $\lambda = n/A$. Jika cakupan setiap node mengikuti distribusi Poisson titik (*stochastic deployment*), probabilitas setiap titik dalam rak tercakup paling sedikit satu node adalah:

$$P_{cov}(\lambda, r_s) = 1 - e^{-\lambda \pi r_s^2} \tag{5}$$

dengan $r_s$ radius sensing efektif sensor suhu tipikal nirkabel (0,10–0,25 m pada rak 1 m² berisi 250 vial). Konsumsi energi tiap node mengikuti model *first-order radio* Heinzelman:

$$E_{tx}(k,d) = E_{elec}\cdot k + \varepsilon_{amp}\cdot k\cdot d^{n} \tag{6a}$$
$$E_{rx}(k) = E_{elec}\cdot k \tag{6b}$$

dengan $k$ ukuran paket (bit), $d$ jarak ke gateway, $n$ path-loss exponent (2 untuk *line-of-sight* pada ruang stainless steel lyophilizer, ≈ 3,3 jika terhalang elemen vial kaca), $E_{elec} = 50$ nJ/bit, $\varepsilon_{amp} = 100$ pJ/bit/m².

### 2.3 Model Path Loss pada Lingkungan Vakum & Suhu Rendah

Meza-Galvan dkk. (2026) menurunkan model propagasi dalam ruang vakum dengan gradien termal:

$$PL(d) = PL(d_0) + 10n \log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma \tag{7}$$

dengan $X_\sigma$ variabel acak Gaussian (zero mean, σ ≈ 4–7 dB) yang merepresentasikan fluktuasi akibat kondensasi es pada antena. SNR pada penerima:

$$\text{SNR}(d) = P_{tx} - PL(d) - N_0 + G_{tx} + G_{rx} \tag{8}$$

dengan $N_0 = -174 + 10\log_{10}(BW)$ (dBm) thermal noise. Konektivitas handal mensyaratkan SNR ≥ 12 dB untuk target BER $10^{-3}$ (protokol IEEE 802.15.4g pada 868 MHz).

---

## 3. Metodologi Rekayasa & SOP Implementasi

Penerapan sistem WSN untuk liofilisasi mengikuti kerangka PAT yang digariskan oleh FDA (2004) dan dirinci oleh Artusio dkk. (2026) menjadi SOP 5-tahap:

**Tahap 1 — Risk Assessment & Design Space (QbD).** Identifikasi CQAs (*Critical Quality Attributes*: residual moisture, cake appearance, reconstitution time) dan CPPs (*Critical Process Parameters*: T_s, P_c, ramp rate). Buat ICH Q8 Design Space.

**Tahap 2 — Deployment Node Sensor.** Pilih nirkabel thermocouple MEMS (mis. TDK MEMS Hive ™, akurasi ±0,3 °C) dan *capacitive RH sensor* untuk moisture desorption. Pasang pada 0,5–2 % vial total untuk sampling representatif; gunakan stratifikasi: vial center, vial edge, vial corner.

**Tahap 3 — Jaringan Topologi.** Bangun topologi *mesh* IEEE 802.15.4e (TSCH) atau LoRaWAN kelas A (di dalam ruang vakum operasi, topologi star lebih aman daripada mesh karena kegagalan node tetangga tidak boleh menggugurkan konsentrasi data). Gateway terpasang pada dinding ruang steril, disuplai baterai LiSOCl₂ tahan −40 °C.

**Tahap 4 — Pengumpulan & Sinkronisasi Data.** Sampling rate 0,1–1 Hz (untuk T_p, T_s); data ditransmisikan ke edge gateway setiap 60–300 s (duty cycle hemat energi). Metadata timestamp disinkronkan via NTP/PTP dari server DCS.

**Tahap 5 — Analitik & Umpan Balik Kontrol.** Algoritma inverse problem (regularized least squares) menyelesaikan $L(t)$ dan $\dot{m}$ dari distribusi $T_p$. Hasil menjadi input pengendali PID adaptif yang menyesuaikan $T_s$ dan $P_c$ per-rak (jika rak multi-zip) atau per-batch.

Diagram alir keputusan:

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Freeze Phase    │ →  │ Primary Drying   │ →  │ Secondary Drying │
│ T_s ramp -5°C/  │    │ T_s, P_c kontrol │    │ T_s step-up 30°C │
│ menit, T_p<-30°C│    │ + WSN feed-back  │    │ + RH_desorp mon  │
└─────────────────┘    └──────────────────┘    └──────────────────┘
                              │
                              ▼
            ┌────────────────────────────────┐
            │ WSN Real-Time Heat-Map T_p(x,y)│
            │ → Solve Stefan Eq. (1)–(4)     │
            │ → Adjust T_s, P_c adaptively   │
            └────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
