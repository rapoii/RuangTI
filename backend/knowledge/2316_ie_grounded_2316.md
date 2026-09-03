# 2316 — Jaringan Sensor Nirkabel untuk Proses Liofilisasi Farmasi: Integrasi PAT, Pemodelan Termodinamika, dan Optimasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur farmasi parenteral, khususnya untuk produk biologis, vaksin, antibiotik, dan API (Active Pharmaceutical Ingredient) yang bersifat termolabil. Lebih dari 50% produk biofarmasi modern memerlukan liofilisasi sebagai langkah stabilisasi akhir (Meza‐Galvan, Strongrich, & Darwish, 2026). Satu siklus batch liofilisasi pada skala produksi dapat berlangsung antara 48 hingga 96 jam, dengan konsumsi energi yang signifikan pada tahap sublimasi (primary drying) dan desorpsi (secondary drying). Mengacu pada buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (2026), biaya operasional satu siklus liofilizer industri berkapasitas 100 m² untuk vial 10 mL dapat melebihi USD 20.000 per batch, menjadikan *yield* dan durasi proses sebagai variabel strategis bagi profitabilitas fasilitas.

Regulasi FDA melalui *Guidance for Industry — PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (2004) mendorong adopsi sistem monitoring real-time untuk menggantikan pendekatan *batch release* konvensional. Dalam konteks ini, Meza-Galvan et al. (2026) mengargumentasikan bahwa **Wireless Sensor Networks (WSN)** memberikan solusi arsitektural yang memungkinkan instrumentasi vial-densely pada ribuan vial tanpa retrofit kabel yang mahal. Sebagai pembanding, Artusio, Barresi, dan Pisano (2026) menegaskan bahwa teknologi emerging — termasuk WSN, soft-sensor model-based, dan *tunable diode laser absorption spectroscopy* (TDLAS) — merupakan pilar utama *Pharmaceutical 4.0* untuk freeze-drying.

Urgensi industri yang melatarbelakangi penerapan WSN dalam liofilisasi setidaknya terbagi dalam tiga pilar. Pertama, **akurasi proses**: kegagalan mendeteksi *batch collapse* atau *melt-back* pada satu vial dapat mengkontaminasi seluruh batch karena komunikasi vial ke vial melalui fase uap air. Kedua, **variabilitas antar-vial**: gradien suhu dan tekanan dalam chamber industri dapat mencapai 3–5°C antara vial tepi dan vial tengah, sehingga sampling thermocouple konvensional (hanya 6–12 probe) tidak representatif. Ketiga, **efisiensi energi**: penerapan WSN memungkinkan implementasi algoritma *cycle optimization* seperti Controlled Ice Nucleation dan *Smart Freezing*, yang dapat memangkas durasi primary drying hingga 30–40% dan mengurangi konsumsi energi 20–25% (Artusio et al., 2026).

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis utama yang mendasari analisis liofilisasi adalah **model resistansi seri untuk coupled heat and mass transfer** (Meza-Galvan et al., 2026). Laju sublimasi massa per satuan luas vial, $\dot{m}$, diekspresikan sebagai:

$$\dot{m} = \frac{P_i - P_c}{R_p} = \frac{T_b - T_s}{R_s}$$

di mana $P_i$ adalah tekanan uap air pada interfase sublimasi (Pa), $P_c$ tekanan ruang chamber (Pa), $T_b$ suhu vial di bagian bawah (K), $T_s$ suhu permukaan sublimasi (K), serta $R_p$ dan $R_s$ berturut-turut adalah resistansi terhadap aliran uap dan resistansi terhadap aliran kalor (m²·K/W dan m²·Pa·s/kg).

Fluks kalor total $Q$ yang masuk ke vial dapat didekomposisi melalui model resistansi vial-dinding-shelter:

$$Q = A_v \left[ \frac{T_{shelf} - T_b}{R_{total}} \right]$$

dengan $R_{total} = R_{vial} + R_{gas} + R_{cake}$, dan $A_v$ adalah luas penampang vial (m²). Pada tahap *primary drying*, energi sublimasi dominan mengikuti:

$$Q_{subl} = \dot{m} \cdot \Delta H_{sub} \approx \dot{m} \cdot 2.800 \times 10^6 \text{ J/kg}$$

Untuk pressure-driven regime, hubungan antara tekanan parsial uap pada suhu sublimasi mengikuti persamaan Clausius-Clapeyron atau persamaan Antoine yang disederhanakan:

$$\ln P_i = -\frac{A}{T_s} + B$$

dengan $A \approx 6.143 \times 10^3$ K dan $B \approx 24.72$ untuk es pada rentang $-40°C$ hingga $0°C$.

Pada tahap **secondary drying**, desorpsi air terikat mengikuti kinetika orde pertama dengan konstanta $k_d$ yang bergantung pada suhu menurut hukum Arrhenius:

$$\frac{dC_w}{dt} = -k_d \cdot C_w, \quad k_d = k_0 \exp\left(-\frac{E_a}{RT_b}\right)$$

Untuk Wireless Sensor Network sendiri, parameter kunci yang dimodelkan adalah **konsumsi energi node** $E_{node}$:

$$E_{node} = P_{tx} \cdot t_{tx} + P_{rx} \cdot t_{rx} + P_{sleep} \cdot t_{sleep} + P_{sens} \cdot t_{sens}$$

dengan $P_{tx}$, $P_{rx}$, $P_{sleep}$, $P_{sens}$ berturut-turut adalah daya transmisi, penerimaan, mode sleep, dan sensing (W). Model *duty cycling*:

$$\text{Duty Cycle (\%)} = \frac{t_{active}}{t_{active} + t_{sleep}} \times 100\%$$

Akuisisi data PAT melalui WSN memungkinkan rekonstruksi profil sublimasi menggunakan metode *non-linear regression* terhadap model **Lumped Parameter**:

$$T_b(t) = T_{shelf} - \frac{\dot{m} \cdot \Delta H_{sub} \cdot R_{total}}{A_v}$$

Perubahan suhu vial yang tiba-tiba — dikenal sebagai **Pirani Pressure Rise Test** atau **Thermocouple-Inferred Endpoint** — terjadi saat sublimasi berakhir:

$$\frac{dT_b}{dt}\Big|_{endpoint} \rightarrow \text{maksimum}$$

Persamaan ini menjadi basis algoritma *end-of-primary-drying detection* yang ditanamkan pada gateway WSN (Meza-Galvan et al., 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti arsitektur berlapis yang dijelaskan oleh Meza-Galvan et al. (2026) sebagai berikut:

**Layer 1 — Sensor Node (Vial-Level):** Setiap node terdiri dari (i) elemen sensor RTD kelas platinum PT100 atau PT1000 dengan akurasi ±0,1°C pada rentang -60°C hingga +60°C, (ii) mikrokontroler berdaya rendah (misalnya seri MSP430 atau ARM Cortex-M0+), (iii) transceiver radio ISM-band 2,4 GHz (ZigBee/Thread/BLE), dan (iv) baterai LiSOCl₂ 3,6 V dengan densitas energi ~700 Wh/kg. Sensor ditempatkan di dalam vial menggunakan probe stainless-steel 1,2 mm diameter, atau secara *non-invasive* melalui patch termokromik yang dibaca oleh fotodioda node.

**Layer 2 — Cluster Head & Routing:** Node dikelompokkan dalam topologi mesh (*IEEE 802.15.4*) dengan cluster-head yang melakukan agregasi data, kompresi (misalnya algoritma *Discrete Wavelet Transform*), dan retransmisi ke gateway. Satu cluster-head mengelola 16–32 node vial.

**Layer 3 — Gateway & Edge Computing:** Gateway berupa mini-PC industri (fanless, IP65) yang menjalankan software supervisory seperti *OPC UA Server*, MQTT broker, dan modul inferensi PAT. Gateway mengimplementasikan soft-sensor berbasis *Python/NumPy* untuk prediksi $T_s$ dan $\dot{m}$ dari data $T_b$.

**Layer 4 — Historian & Cloud:** Data dikirim ke *Process Historian* (Wonderware, OSIsoft PI) atau cloud (AWS IoT, Azure Industrial IoT) dengan *Quality of Service* berbasis *store-and-forward*.

**SOP Implementasi (6 Langkah):**
1. **Spesifikasi sistem** — penentuan jumlah vial yang akan di-instrumentasi (umumnya 24–48 vial untuk lot 5.000–20.000 vial).
2. **Validasi IQ/OQ/PQ** — kalibrasi tiga titik RTD pada -50°C, 0°C, dan +25°C dengan sertifikat NIST-traceable.
3. **Pemasangan vial & sealing** — vial diisi secara aseptik, sensor dipasang *in-process*, vial di-load ke rak liofilizer.
4. **Sinkronisasi waktu & registrasi node** — seluruh node di-*commission* ke gateway dengan timestamps NTP/PTP berakurasi ≤1 ms.
5. **Eksekusi cycle & monitoring real-time** — operator memantau profil $T_b$ vs $T_{setpoint}$, alarm threshold, dan trend Pirani.
6. **Post-batch review & model update** — data historis digunakan untuk re-training *digital twin* dan memperbaiki cycle berikutnya.

Diagram alir proses yang harus diikuti oleh setiap batch liofilisasi yang diinstrumentasi WSN mencakup *decision node* apakah $dT_b/dt$ telah melewati threshold — bila ya, sistem otomatis mengaktifkan fase *secondary drying* (Artusio et al., 2026).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Liofilisasi sediaan mannitol 5% w/v pada vial 10 mL, loaded 8.000 vial ke dalam liofilizer kapasitas 100 m². Tujuan: menghitung durasi *primary drying* dan menentukan *endpoint* berbasis data WSN.

**Parameter input industri:**

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Tekanan chamber | $P_c$ | 10 | Pa |
| Suhu shelf | $T_{shelf}$ | -25 | °C |
| Resistansi cake | $R_p$ | $8{,}0 \times 10^3$ | m²·Pa·s/kg |
| Resistansi vial+gas | $R_{vg}$ | 1,2 × 10⁻³ | m²·K/W |
| Resistansi cake thermal | $R_c$ | 4,0 × 10⁻³ | m²·K/W |
| Resistansi total | $R_{total}$ | 5,2 × 10⁻³ | m²·K/W |
| Luas penampang vial | $A_v$ | 5,0 × 10⁻⁴ | m² |
| Energi sublimasi | $\Delta H_{sub}$ | 2,80 × 10⁶ | J/kg |
| Massa es per vial | $m_0$ | 1,0 × 10⁻³ | kg |

**Langkah 1: Hitung tekanan uap pada interfase sublimasi $T_s$**

Asumsikan $T_s = -35°C = 238{,}15$ K. Gunakan persamaan Clausius-Clapeyron yang telah dikalibrasi untuk es:

$$\ln P_i = -\frac{6143}{238{,}15} + 24{,}72 = -25{,}80 + 24{,}72 = -1{,}08$$

$$P_i = e^{-1{,}08} = 0{,}34 \text{ kPa} = 340 \text{ Pa}$$

**Langkah 2: Hitung fluks sublimasi $\dot{m}$**

$$\dot{m} = \frac{P_i - P_c}{R_p} = \frac{340 - 10}{8{,}0 \times 10^3} = \frac{330}{8.000} = 0{,}04125 \text{ kg/(m²·s)}$$

**Langkah 3: Hitung fluks kalor dan suhu vial $T_b$**

$$Q = \dot{m} \cdot \Delta H_{sub} = 0{,}04125 \times 2{,}80 \times 10^6 = 115.500 \text{ W/m}^2$$

$$T_b = T_{shelf} - Q \cdot R_{total} = -25 - (115.500 \times 5{,}2 \times 10^{-3}) = -25 - 600{,}6$$

$$T_b \approx -625{,}6°C \quad \text{(nilai fisika nyata sekitar}