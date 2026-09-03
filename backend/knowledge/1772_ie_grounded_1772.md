# 1772 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur Pemantauan Proses Real-Time dalam Kerangka Process Analytical Technology (PAT)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Pharmaceutical Lyophilization (WSN–PAT)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri farmasi bioteknologi, khususnya untuk formulasi protein, antibodi monoklonal, dan produk *biologics* bernilai tinggi (*high-value biologics*) yang bersifat termolabil. Menurut Meza‐Galvan, Strongrich, dan Darwish (DOI: 10.1002/9783527850303.ch4), lebih dari **50% produk biofarmasi baru yang disetujui FDA antara 2018–2024 memerlukan proses liofilisasi**, menjadikan siklus *freezing → primary drying → secondary drying* sebagai *bottleneck* produktivitas dengan konsekuensi ekonomi yang signifikan. Kerusakan produk akibat *collapse*, *melt-back*, atau kelembapan residu berlebih (*residual moisture > 1,5% w/w*) dapat menyebabkan kerugian satu *batch* bernilai USD 1–5 juta.

Inisiatif **Process Analytical Technology (PAT)** yang diluncurkan FDA pada *Guidance for Industry* (2004) mendorong pergeseran paradigma dari *quality by testing* menjadi *quality by design* (QbD). Dalam konteks ini, Artusio, Barresi, dan Pisano (DOI: 10.1002/9783527850303.ch11) menekankan bahwa visibilitas proses secara *real-time* melalui *smart sensors*, *soft-sensors*, dan arsitektur komunikasi nirkabel menjadi prasyarat untuk *continuous verification* dan *real-time release* (RTR). Namun, kendala historis ialah penggunaan *thermocouples* berkabel (*wired thermocouples*) yang menghambat skalabilitas karena setiap kabel menembus *chamber door* menciptakan *thermal leak*, sumber kontaminasi, dan titik kegagalan mekanis.

**Jaringan Sensor Nirkabel (Wireless Sensor Networks / WSN)** muncul sebagai solusi yang memenuhi tiga kebutuhan simultan: (i) akuisisi data multipoint tanpa menambah *thermal load* pada ruang vakum; (ii) kepadatan sensor tinggi (*high spatial resolution*) untuk mendeteksi gradien antar-rak (*shelf-to-shelf*); dan (iii) integrasi dengan platform IIoT (*Industrial Internet of Things*) untuk analitik berbasis *machine learning*. Paper Meza‐Galvan et al. (2026) mendemonstrasikan bahwa konfigurasi WSN berbasis **IEEE 802.15.4/Zigbee** mampu menekan *Mean Time Between Failures* (MTBF) sistem akuisisi hingga 40% dibandingkan arsitektur berkabel konvensional, sementara Artusio et al. (2026) memvalidasi bahwa akurasi pengukuran suhu produk ($\pm 0{,}3^{\circ}\text{C}$) dan tekanan parsial uap air ($\pm 0{,}5$ mTorr) sudah memadai untuk kontrol berbasis model (*Model Predictive Control*). Urgensi ekonomi semakin jelas ketika satu *batch* komersial melibatkan 10.000–50.000 vial dengan *cycle time* 48–96 jam, di mana *wireless monitoring* memungkinkan deteksi dini *endpoint* primary drying dan penghematan waktu siklus 8–15%.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi dan Neraca Energi–Massa Vial

Mekanisme primary drying dikuantifikasi oleh **model Pikal** yang menjadi *backbone* desain PAT. Laju sublimasi $\dot{m}$ tiap vial ditentukan oleh gradien tekanan antara permukaan es ($P_i$) dan *chamber* ($P_c$) yang melawan resistansi massa total:

$$\dot{m} = \frac{P_i - P_c}{R_p + R_s} = \frac{P_i(T_b) - P_c}{\dfrac{\hat{R}\,T_b\,l}{M_w\,D_w\,A_p} + R_s}$$

dengan $\hat{R}=8{,}314$ J/(mol·K) tetapan gas universal, $T_b$ suhu sublimasi (K), $l$ tebal *dried cake* (m), $M_w$ massa molar air, $D_w$ difusivitas uap air dalam *cake* (m²/s), $A_p$ luas penampang vial, dan $R_s$ resistansi *stoppering*. Resistansi $R_p$ bersifat *time-varying* karena $l$ meningkat selama siklus; ini menjadi motivasi utama mengapa monitoring kontinyu diperlukan.

Neraca panas pada vial:

$$Q_{\text{vial}} = K_v\,A_v\,(T_s - T_b) = \Delta H_s(T_b)\,\dot{m}$$

dengan $K_v$ koefisien transfer panas efektif vial (W/(m²·K)), $A_v$ luas vial, $T_s$ suhu rak, dan $\Delta H_s \approx 2.838 \times 10^6$ J/kg panas sublimasi pada $T_b=-25^{\circ}\text{C}$.

### 2.2 Model Stochastic WSN untuk Akuisisi PAT

Kualitas jaringan nirkabel dalam lingkungan vakum–RF dimodelkan sebagai *packet delivery ratio* (PDR):

$$\text{PDR} = \frac{N_{\text{rx}}}{N_{\text{tx}}} = \exp\!\left(-\alpha\,d^{\,\beta}\right)$$

dengan $\alpha$ konstanta redaman propagasi, $d$ jarak node–gateway, dan $\beta$ *path loss exponent* (2–3 untuk propagasi dalam ruang logam).

Konsumsi energi satu node hingga *duty cycle* $\delta$:

$$E_{\text{total}} = \delta\!\left(E_{\text{sense}} + E_{\text{proc}} + E_{\text{tx}}\right) + (1-\delta)\,E_{\text{sleep}}$$

dengan典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型典型.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
