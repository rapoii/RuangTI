# 2252 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Teknologi Analitik Proses (PAT) dalam Rekayasa Manufaktur Biologis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization — Process Analytical Technology (PAT) dalam Manufaktur Freeze-Drying Farmasi
**Jurnal & Sitasi Utama:** Meza-Galvan, J., Strongrich, A., & Darwish, A. (2026). *Wireless Sensor Networks for Lyophilization*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze-Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Artusio, F., Barresi, A. A., & Pisano, R. (2026). *Emerging Technologies in Pharmaceutical Freeze-Drying*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze-Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi modern yang digunakan untuk menstabilkan produk biologis sensitif seperti vaksin mRNA, antibodi monoklonal (mAb), dan protein terapeutik dengan menghilangkan air melalui sublimasi di bawah kondisi vakum. Lebih dari 50% produk biofarmasi yang saat ini disetujui oleh regulator memerlukan proses liofilisasi karena sensitivitas termal produk dan kebutuhan akan stabilitas jangka panjang pada suhu penyimpanan 2–8°C. Menurut Meza-Galvan, Strongrich, dan Darwish (2026), meningkatnya kompleksitas formulasi biologis modern, ditambah dengan tren *fill-finish* dalam vial berdiameter besar (10–100 mL) untuk terapi gen dan sel, menuntut visibilitas proses yang jauh lebih granular daripada metode konvensional berbasis thermocouple hard-wired.

Urgensi operasional dan ekonomi industri farmasi terletak pada kenyataan bahwa satu batch produksi vaksin dapat bernilai USD 5–50 juta, dan kegagalan siklus primer drying akibat *collapse* (keruntuhan struktur cake) atau *eutectic melt* (pelelehan eutektik) dapat menyebabkan kerugian finansial masif dan gangguan rantai pasok. Sebagai contoh, estimasi biaya kerugian akibat *batch failure* pada industri bioteknologi global mencapai USD 1,5–2 miliar per tahun (Artusio, Barresi, & Pisano, 2026). Dalam konteks ini, paradigma Process Analytical Technology (PAT) yang digariskan oleh FDA sejak 2004 mendorong adopsi sensor non-invasif dan *wireless sensor networks* (WSN) untuk memonitor variabel kritis proses (*critical process parameters*, CPP) seperti suhu produk ($T_p$), suhu rak ($T_{shelf}$), tekanan ruang ($P_c$), dan fluks kalor sublimasi ($q$) secara real-time pada setiap vial individual dalam *batch*.

Konteks industri saat ini menghadapi tantangan skalabilitas: konfigurasi sensor thermocouple tradisional (T-type, K-type) hanya mampu memonitor 3–5 vial representatif dari populasi 10.000–50.000 vial per batch, menghasilkan generalisasi statistik yang lemah. Meza-Galvan et al. (2026) menyatakan bahwa penerapan WSN berbasis *smart vial* dengan thermocouple miniaturisasi terintegrasi *radio-frequency identification* (RFID) atau transduser LoRa/Wi-Fi dapat meningkatkan cakupan monitoring hingga 50–100 vial per batch, secara dramatis meningkatkan pemahaman tentang heterogenitas vial (*vial-to-vial variability*) yang merupakan sumber utama deviasi kualitas. Implikasi ekonominya sangat substansial: optimalisasi 2–3 jam pada *primary drying* per siklus berpotensi menghemat energi listrik pengeringan beku sebesar 15–20%, yang sebanding dengan USD 200.000–500.000 penghematan tahunan untuk fasilitas liofilisasi skala komersial.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Kalor Liofilisasi

Mekanisme perpindahan kalor utama dalam liofilisasi terjadi secara konduksi dari rak ke vial, melalui gas pada tekanan rendah (konduksi gas terkontrol), dan melalui dinding vial. Persamaan dasar fluks kalor sublimasi menurut model Pikal (1985) yang diadopsi oleh Meza-Galvan et al. (2026) dinyatakan sebagai:

$$q = A_v \left[ \frac{T_{shelf} - T_p}{R_s} \right]$$

di mana $q$ adalah laju perpindahan kalor (W), $A_v$ adalah luas penampang vial (m²), $T_{shelf}$ adalah suhu rak (K), $T_p$ adalah suhu produk pada *sublimation interface* (K), dan $R_s$ adalah resistansi termal total rak-ke-produk (K·m²/W). Resistansi $R_s$ terdiri dari tiga komponen seri:

$$R_s = R_{gas} + R_{glass} + R_{cake}$$

dengan $R_{gas}$ adalah resistansi gas pada tekanan rendah, $R_{glass}$ resistansi dinding vial kaca, dan $R_{cake}$ resistansi dried layer. Untuk $R_{gas}$ pada regime *free molecular flow* (Knudsen > 1), berlaku:

$$R_{gas} = \frac{1}{\alpha_p \cdot c_v \cdot P_c} \cdot \frac{d_{gap}}{A_v}$$

di mana $\alpha_p$ adalah *accommodation coefficient* (~0.7), $c_v$ kapasitas kalor uap air pada volume konstan, $P_c$ tekanan ruang (Pa), dan $d_{gap}$ jarak vial-rak.

### 2.2 Laju Sublimasi dan Konservasi Massa

Laju sublimasi air dari *frozen matrix* mengikuti hukum konservasi massa:

$$\dot{m} = \frac{q}{\Delta H_s} = \frac{A_v (T_{shelf} - T_p)}{R_s \cdot \Delta H_s}$$

di mana $\Delta H_s$ adalah entalpi sublimasi es (~2809 kJ/kg pada 0°C). Massa total yang di-sublimasikan selama primary drying:

$$M_{total} = \rho_{ice} \cdot V_{solid} \cdot \left(1 - \frac{C_{solid}}{\rho_{solution}}\right)$$

dengan $\rho_{ice}$ densitas es (917 kg/m³), $V_{solid}$ volume solid konten vial, dan $C_{solid}$ konsentrasi solid formulasi. Durasi primary drying kemudian dihitung sebagai:

$$t_d = \frac{M_{total} \cdot R_s \cdot \Delta H_s}{A_v \cdot (T_{shelf} - T_p)}$$

### 2.3 Kinetika Degradasi Produk dan Kriteria Kritis

Kriteria kritis untuk mencegah *collapse* produk menggunakan persamaan *glass transition* Gordon-Taylor:

$$T_g^{mix} = \frac{w_1 T_{g1} + k \cdot w_2 T_{g2}}{w_1 + k \cdot w_2}$$

dengan $w_1, w_2$ fraksi massa komponen, dan $k$ konstanta Gordon-Taylor. Batasan operasionalnya:

$$T_p < T_g^{mix} - 3°C$$

Degradasi protein mengikuti kinetika Arrhenius orde pertama:

$$k_{deg} = A \cdot \exp\left(-\frac{E_a}{RT_p}\right)$$

di mana $E_a$ adalah energi aktivasi (~80–120 kJ/mol untuk protein tipikal), $A$ faktor pre-eksponensial, dan $R$ konstanta gas universal (8,314 J/mol·K). Fraksi protein aktif tersisa:

$$\ln\left(\frac{C_t}{C_0}\right) = -k_{deg} \cdot t_{process}$$

### 2.4 Metrik Kinerja Jaringan Sensor Nirkabel

Untuk arsitektur WSN yang diusulkan Meza-Galvan et al. (2026), parameter kinerja kritis meliputi:

- **Packet Delivery Ratio (PDR):** $\text{PDR} = \frac{N_{received}}{N_{transmitted}} \times 100\%$
- **Konsumsi Energi per Transmisi:** $E_{tx} = V \cdot I \cdot t_{tx}$
- **Path Loss (Friis Free-Space Model):**

$$P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^n$$

dengan $P_t$ daya transmisi (dBm), $G_t, G_r$ gain antena, $\lambda$ panjang gelombang, $d$ jarak, dan $n$ *path loss exponent* (2 untuk free-space, 2,5–4 untuk lingkungan industri dengan refleksi metal).

- **Laten Sampling:** $t_{latency} = n_{hops} \cdot t_{proc} + t_{propagation}$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-Freeze-Dryer

Meza-Galvan et al. (2026) mengusulkan arsitektur empat-lapis:

1. **Lapis Sensor (Smart Vial Layer):** Termokopel T-type miniaturisasi (diameter 0,5 mm) tertanam dalam vial representatif, ditransmisikan via transduser RFID pasif atau LoRa aktif (433 MHz / 2,4 GHz).
2. **Lapis Gateway:** Aggregator node dalam ruang vakum (*vacuum-compatible*) mengumpulkan data melalui protokol IEEE 802.15.4 (ZigBee) atau LoRaWAN.
3. **Lapis Edge Computing:** PLC *edge processor* menjalankan algoritma *Model-Predictive Control* (MPC) untuk menyesuaikan $T_{shelf}$ dan $P_c$ secara adaptif.
4. **Lapis Cloud/Historian:** Penyimpanan data time-series (PI System, OSIsoft) untuk analisis batch dan *continuous verification*.

### 3.2 SOP Implementasi di Lini Produksi

**Tahap 1 — Kalibrasi & Validasi (IQ/OQ):**
- Kalibrasi termokopel WSN terhadap standar NIST traceable pada rentang -60°C hingga +60°C dengan akurasi ±0,3°C.
- Validasi *vacuum compatibility*: sensor harus lulus *Helium leak test* < 1×10⁻⁹ mbar·L/s.

**Tahap 2 — Placement Strategis:**
- Penempatan sensor dalam pola *central-composite design* (CCD) atau *Latin Hypercube Sampling* untuk menangkap heterogenitas vial edge-center (efek辐射 perisai dari dinding chamber).
- Jumlah minimal sensor: $\sqrt{N_{total}}$ menurut Teorema Chebyshev.

**Tahap 3 — Freezing Stage Monitoring:**
- Monitoring laju pendinginan $\frac{dT_p}{dt}$ dengan batas $\leq 1°C/min$ untuk menghindari *freezing-induced concentration effects*.
- Deteksi onset nukleasi ($T_{nucleation}$) via anomali spike eksotermik.

**Tahap 4 — Primary Drying Adaptive Control:**
- Implementasi algoritma *Pressure Rise Test* (PRT): menutup katup chamber selama 25 detik, mengamati $\frac{dP_c}{dt}$ untuk menentukan $R_s$ aktual.
- Iterasi MPC setiap 60 detik dengan constraint $T_p \leq T_g^{mix} - 3°C$.

**Tahap 5 — Secondary Drying & Endpoint Detection:**
- Monitoring *residual moisture* via *near-infrared* (NIR) sensor diintegrasikan dengan WSN.
- Endpoint: $\frac{dm}{dt} < 0,01\%$/jam selama 3 jam berturut-turut.

**Tahap 6 — Data Integrity (21 CFR Part 11):**
- Enkripsi AES-256 transmisi data.
- *Audit trail* immutable dengan timestamp NTP-synchronized.
- *Electronic signature* untuk batch release.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Studi kasus mengikuti formulasi tipikal Artusio et al. (2026): **vaksin mRNA dalam sucrose 5% (w/v)**, vial 10 mL Schott tipo 1, lyophilizer SP Scientific Hull Lyosystem skala pilot (luas rak 1 m²).

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Volume vial | $V_v$ | 10 mL |
| Luas penampang vial | $A_v$ | 4,52×10⁻⁴ m² |
| Konsentrasi sucrose | $C_s$ | 50 g/L |
| Jumlah vial per batch.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
