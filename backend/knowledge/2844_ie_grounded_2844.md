# 2844 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Sistem Pemantauan Proses Kritis dalam Kerangka Process Analytical Technology (PAT)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan unit operasi kritis dalam manufaktur biofarmasi modern yang digunakan untuk menstabilkan produk termolabil seperti protein monoklonal, vaksin mRNA, antibodi terapeutik, dan formulasi biologis kompleks lainnya. Proses ini melibatkan tiga tahapan utama — pembekuan (*freezing*), pengeringan primer (*primary drying*) melalui sublimasi, dan pengeringan sekunder (*secondary drying*) melalui desorpsi — yang seluruhnya harus dikendalikan dengan presisi tinggi agar memenuhi parameter kualitas kritis (*Critical Quality Attributes*/CQA) berupa aktivitas biologis, kemurnian, dan stabilitas jangka panjang (Meza‐Galvan, Strongrich, & Darwish, 2026, DOI: 10.1002/9783527850303.ch4). Dalam industri farmasi global bernilai lebih dari USD 1,5 triliun, gagal dalam satu siklus liofilisasi pada produk bernilai tinggi seperti antibodi monoklonal dapat menimbulkan kerugian ekonomi hingga USD 5–50 juta per batch, menjadikan keandalan sistem pemantauan proses sebagai imperatif strategis.

Kerangka *Process Analytical Technology* (PAT) yang dicanangkan oleh FDA sejak 2004 menuntut pengukuran *real-time* terhadap *Critical Process Parameters* (CPP) seperti suhu vial, suhu rak, tekanan ruang, dan laju sublimasi. Secara konvensional, pemantauan ini mengandalkan termokopel kawat (*wired thermocouple*, T/C) yang bersifat invasif, memerlukan jumlah sensor terbatas (umumnya 5–10 vial per batch dengan ribuan vial), dan menimbulkan risiko kontaminasi akibat penetrasi dinding vial. Meza-Galvan et al. (2026) menunjukkan bahwa arsitektur *Wireless Sensor Networks* (WSN) berbasis node *thermochron* (DS1923 iButton) mampu menggantikan keterbatasan ini dengan menyediakan pengukuran suhu vial secara nirkabel, non-invasif, dan terdistribusi secara masif hingga ratusan titik pengukuran per batch. Di sisi lain, Artusio, Barresi, dan Pisano (2026) menekankan bahwa integrasi WSN dengan teknik *soft-sensing*, *tunable diode laser absorption spectroscopy* (TDLAS), dan *mathematical modeling* berbasis *heat and mass transfer* menjadi pilar transformasi digital liofilisasi farmasi (DOI: 10.1002/9783527850303.ch11).

Urgensi penerapan WSN dalam liofilisasi tidak hanya bersifat teknologis, tetapi juga ekonomis dan regulasi. Pertama, biaya produksi biologis didominasi oleh *failure rate* liofilisasi yang mencapai 5–15% pada skala komersial; kedua, regulator seperti FDA dan EMA mensyaratkan *Quality by Design* (QbD) dan *continuous manufacturing* yang hanya dapat dipenuhi melalui visibilitas proses *real-time*; ketiga, transisi menuju *Industry 4.0* dan *Pharma 4.0* menuntut integrasi data historis untuk *batch release* berbasis statistik. Kombinasi ketiga faktor ini menjadikan WSN bukan sekadar alat ukur, melainkan infrastruktur keputusan manufaktur berbasis bukti (*evidence-based manufacturing*).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi Primer

Laju sublimasi es pada pengeringan primer dikendalikan oleh resistansi termal dan resistansi massa produk. Persamaan dasar yang digunakan adalah hukum Fourier untuk konduksi panas dari rak ke vial dan hukum Fick untuk difusi uap air melalui lapisan kering:

$$\dot{m} = \frac{T_{shelf} - T_v}{\Delta H_s \cdot R_p} = \frac{P_{w,i} - P_c}{R_s}$$

di mana $\dot{m}$ adalah laju sublimasi (kg/m²·s), $T_{shelf}$ suhu rak (K), $T_v$ suhu vial pada *sublimation front*, $\Delta H_s$ entalpi sublimasi es (≈ 2.838 kJ/kg), $R_p$ resistansi produk kering (m²·Pa·s/kg), $P_{w,i}$ tekanan uap air pada antarmuka sublimasi (Pa), $P_c$ tekanan ruang (Pa), dan $R_s$ resistansi stopper/lapisan kering terhadap aliran uap.

### 2.2 Persamaan Arrhenius untuk Degradasi Produk

Degradasi biologis selama siklus liofilisasi遵循 laju kinetika Arrhenius:

$$k_d = A \cdot \exp\left(-\frac{E_a}{R \cdot T_v}\right)$$

dengan $k_d$ konstanta laju degradasi (s⁻¹), $A$ faktor pra-ekspulsif, $E_a$ energi aktivasi (J/mol), dan $R$ konstanta gas universal (8,314 J/mol·K). Akumulasi degradasi mengikuti:

$$\% \text{Degradasi} = \left[1 - \exp\left(-\int_0^t k_d(T_v(\tau)) \, d\tau\right)\right] \times 100\%$$

### 2.3 Model Konsumsi Energi Node Sensor Nirkabel

Daya total node sensor WSN dengan protokol IEEE 802.15.4 (ZigBee) terdiri dari komponen *transmit*, *receive*, *idle listening*, dan *sleep*:

$$E_{total} = (P_{tx} \cdot t_{tx} + P_{rx} \cdot t_{rx} + P_{idle} \cdot t_{idle} + P_{sleep} \cdot t_{sleep}) \cdot N_{samples}$$

dengan estimasi *battery lifetime*:

$$T_{life} = \frac{C_{bat} \cdot V_{bat}}{E_{total}/T_{cycle}}$$

di mana $C_{bat}$ kapasitas baterai (mAh), $V_{bat}$ tegangan nominal (3,0–3,6 V), dan $T_{cycle}$ interval sampling (s).

### 2.4 Model Jaringan dan Topologi Mesh

Untuk topologi mesh dengan $N$ node, probabilitas konektivitas mengikuti persamaan Erdős–Rényi:

$$P_{conn}(p, N) = 1 - \sum_{k=0}^{N-1} \binom{N-1}{k} p^k (1-p)^{N-1-k}$$

di mana $p$ adalah probabilitas link aktif antar node. *Redundancy factor* untuk *fault tolerance* didefinisikan sebagai:

$$R_f = \frac{\sum_{i=1}^{N} (d_i - 1)}{N}$$

dengan $d_i$ derajat node ke-$i$. Standar industri mensyaratkan $R_f \geq 1$ untuk menjamin konektivitas saat satu node gagal.

### 2.5 Akurasi Sensor dan Dampaknya pada Cycle Time

Ketidakpastian pengukuran suhu vial ($\sigma_T$) berpropagasi langsung ke estimasi *primary drying endpoint*:

$$\Delta t_{cycle} = \frac{\sigma_T}{\partial T_v/\partial t} \cdot z_{\alpha/2}$$

dengan $z_{\alpha/2}$ nilai kritis pada tingkat signifikansi $\alpha$ (umumnya 1,96 untuk 95% CI).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti arsitektur berlapis (*layered architecture*) sesuai panduan PAT:

**Tahap 1 — Analisis Risiko dan Desain Eksperimen (DoE)**
1. Identifikasi CPP dan CQA menggunakan *Fishbone Diagram* dan *Failure Mode and Effects Analysis* (FMEA).
2. Penentuan jumlah sensor minimal melalui *spatial sampling theory* dengan *coverage factor* ≥ 95% vial.
3. Kalibrasi node sensor pada rentang $-50°C$ hingga $+60°C$ dengan akurasi $\pm 0,5°C$ menggunakan *reference standard* NIST-traceable.

**Tahap 2 — Instalasi dan Konfigurasi Node**
1. Penempatan node *iButton DS1923* pada vial representatif (vial sudut, tengah, dan tepi rak).
2. Aktivasi mode *mission*: sampling setiap 30–60 detik selama *primary drying*, dan setiap 5 menit selama *secondary drying*.
3. Konfigurasi *gateway* dengan protokol ZigBee/LoRa pada frekuensi 2,4 GHz atau 868/915 MHz (berbeda per region).

**Tahap 3 — Akuisisi Data dan Validasi**
1. Pengumpulan data melalui *time-stamped logging* dengan resolusi waktu ≤ 1 detik.
2. Validasi silang (*cross-validation*) antara data WSN dan termokopel kawat pada vial kontrol.
3. Penerapan *Moving Average Filter* dengan *window size* 5–10 sampel untuk mitigasi *noise*.

**Tahap 4 — Analisis dan Kontrol Umpan Balik**
1. Estimasi parameter kritis ($R_p$, $K_v$, *heat transfer coefficient*) secara *real-time* menggunakan *gravimetric* dan *manometric temperature measurement* (MTM).
2. Penentuan *primary drying endpoint* berbasis kriteria $dP/dt$ (laju perubahan tekanan) dan $T_v$.
3. Implementasi *feedforward control* pada suhu rak untuk menjaga $T_v < T_{collapse}$ (*collapse temperature*).

**Diagram Alir SOP:**

```
[Start] → Analisis Risiko (FMEA)
   ↓
[Desain Jaringan Sensor] → Penentuan jumlah & lokasi node
   ↓
[Kalibrasi Sensor] ← Reference Standard NIST
   ↓
[Loading Vial + Aktivasi Node] → Sampling rate 30-60 detik
   ↓
[Data Acquisition] → Gateway → Database (LIMS/PAT-KM)
   ↓
[Real-time Analysis] → Estimasi R_p, K_v, endpoint
   ↓
{Endpoint tercapai?}
   ├─ Ya → [Secondary Drying Phase]
   └─ Tidak → [Lanjutkan Primary Drying + Adaptive Control]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah fasilitas liofilisasi memproduksi batch antibodi monoklonal pada lyophilizer skala pilot dengan kapasitas 1.000 vial (volume 20 mL). Tujuan: mengevaluasi dampak adopsi WSN terhadap durasi siklus dan *failure rate*.

**Parameter Input Industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah vial | 1.000 | vial |
| Jumlah node WSN | 50 | node |
| Suhu rak target | 5 | °C |
| $T_{collapse}$ produk | -32 | °C |
| Sampling interval | 60 | detik |
| Durasi primary drying konvensional | 48 | jam |
| Akurasi T/C konvensional | ±1,5 | °C |
| Akurasi WSN | ±0,5 | °C |
| Biaya vial produk | 250 | USD/vial |
| Biaya node WSN | 85 | USD/node |

**Perhitungan 1 — Penghematan Cycle Time karena Akurasi Sensor**

Laju kenaikan suhu vial rata-rata pada akhir *primary drying* adalah $\partial T_v/\partial t \approx 0,3°C$/jam. Dengan $z_{0,025} = 1,96$:

$$\Delta t_{cycle,T/C} = \frac{1,5}{0,3} \times 1,96 \approx 9,8 \text{ jam (margin konservatif)}$$

$$\Delta t_{cycle,WSN} = \frac{0,5}{0,3} \times 1,96 \approx 3,3 \text{ jam (margin konservatif)}$$

Penghematan waktu siklus: $9,8 - 3,3 = 6,5$ jam per batch.

**Perhitungan 2 — Nilai Ekonomi Penghematan**

Asumsi biaya operasional lyophilizer (energi, SDM, *depreciation*) = 800 USD/jam:

$$\text{Penghematan/batch} = 6,5 \times 800 = \text{USD } 5.200$$

Investasi WSN: $50 \times 85 = \text{USD } 4.250$.

*Payback period*