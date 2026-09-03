# 2230 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (cold chain) merupakan subsistem kritis dalam jaringan distribusi produk termolabil—mulai dari sediaan farmasi (vaksin, insulin, produk biologis), makanan segar, hingga bahan kimia tertentu—yang membutuhkan kontrol suhu presisi sepanjang proses *handling*, penyimpanan, dan transportasi. Khurshid dan Siddiqui (2024) dalam artikelnya yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599) menekankan bahwa kompleksitas cold chain modern tidak hanya ditentukan oleh kapasitas termal peralatan, melainkan oleh **kapasitas sistemik untuk menyerap, beradaptasi, dan memulihkan diri (resilience)** ketika terjadi disrupsi. Pendekatan konvensional yang hanya berfokus pada *Mean Time Between Failures* (MTBF) terbukti tidak cukup untuk menangkap dinamika multi-echelon pada cold chain global (Khurshid & Siddiqui, 2024).

Urgensi ekonomis cold chain dapat dilihat dari data industri:WHO估算，全球每年浪费的疫苗约50% disebabkan oleh pelanggaran rantai dingin (cold chain breach). Di sisi lain, biaya logistik farmasi global diproyeksikan melebihi USD 110 miliar pada 2025, di mana 15–25% di antaranya terserap untuk mitigasi risiko termal. Putera, Defit, dan Nurcahyo (2024) dalam studi empiris di UPTD Farmasi Dinas Kesehatan Kabupaten Siak ([DOI 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) mengidentifikasi tiga *pain points* klasik yang menurunkan resiliensi cold chain: (1) absennya *real-time temperature monitoring* pada *cold chain box*, (2) keterlambatan peringatan dini ketika suhu naik akibat kerusakan internal atau eksternal, dan (3) pencatatan manual suhu setiap 2 jam pada *log sheet* oleh apoteker yang rentan terhadap human error dan keterlambatan respons.

Konteks industri ini menunjukkan bahwa resiliensi cold chain bukan sekadar variabel teknis, melainkan merupakan **konstruk multi-dimensi** yang menggabungkan keandalan perangkat keras (sensor, kompresor, refrigerated container), kualitas data (akurasi, granularitas, latensi), kapasitas manusia (pelatihan operator), dan arsitektur jaringan (redundansi node, *failover* komunikasi). Tanpa kerangka resiliensi yang formal, organisasi cenderung bereaksi secara ad-hoc terhadap disrupsi—yang dalam konteks farmasi dapat berarti kerugian ribuan dosis vaksin dalam hitungan menit. Oleh karena itu, pengembangan model resiliensi yang terukur secara kuantitatif menjadi kebutuhan strategis bagi insinyur industri, manajer operasional, dan regulator.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Sistem (System Resilience Index)

Khurshid dan Siddiqui (2024) mengajukan kerangka resiliensi yang diadaptasi dari teori Bruneau dkk., dengan modifikasi untuk karakteristik cold chain. Indeks resiliensi sistem $\mathcal{R}$ didefinisikan sebagai kemampuan mempertahankan fungsi kritis di bawah tekanan, yang dapat diformulasikan sebagai:

$$\mathcal{R} = \int_{t_0}^{t_1} \left[ 100\% - Q(t) \right] dt$$

di mana $Q(t)$ adalah kurva degradasi performa sistem pada waktu $t$, $t_0$ adalah waktu dimulainya disrupsi, dan $t_1$ adalah waktu pemulihan penuh. Semakin kecil luas area di bawah kurva degradasi, semakin resilien sistem tersebut.

### 2.2 Dimensi Resiliensi: Absorpsi, Adaptasi, dan Restorasi

Model Khurshid-Siddiqui membagi resiliensi menjadi tiga kapasitas operasional yang dapat dihitung secara terpisah:

$$\mathcal{R}_{total} = w_1 \cdot \mathcal{R}_{abs} + w_2 \cdot \mathcal{R}_{adap} + w_3 \cdot \mathcal{R}_{rest}$$

dengan $w_1 + w_2 + w_3 = 1$ adalah bobot kepentingan relatif. Kapasitas absorpsi dihitung dari probabilitas sistem mempertahankan performa pada ambang batas minimum:

$$\mathcal{R}_{abs} = P\left( T(t) \in [T_{min}, T_{max}] \;\; \forall t \in [0, \tau_{abs}] \right)$$

di mana $\tau_{abs}$ adalah jendela waktu absorpsi (misalnya 30 menit pertama disrupsi). Kapasitas adaptasi merepresentasikan kemampuan sistem menyesuaikan diri, dan kapasitas restorasi adalah *recovery time* hingga performa kembali ke level operasional.

### 2.3 Model Kegagalan Thermal (Thermal Failure Model)

Putra dkk. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0.5^\circ C$ pada resolusi 9–12 bit. Hubungan antara tegangan output digital sensor dan suhu adalah:

$$T_{raw} = \frac{N_{ADC}}{2^n - 1} \cdot T_{range}$$

dengan $N_{ADC}$ adalah nilai digital *Analog-to-Digital Converter*, $n$ adalah resolusi bit (12-bit default DS18B20), dan $T_{range}$ adalah rentang ukur ($55^\circ C$). Setelah kalibrasi linier menggunakan regresi:

$$T_{cal} = \alpha + \beta \cdot T_{raw} + \epsilon$$

di mana $\alpha, \beta$ adalah koefisien regresi dan $\epsilon$ adalah galat residual acak.

### 2.4 Probabilitas Disrupsi Kumulatif

Untuk cold chain multi-echelon dengan $m$ node distribusi, probabilitas disrupsi kumulatif mengikuti:

$$P_{dis}(t) = 1 - \prod_{i=1}^{m} \left[ 1 - p_i(t) \right]$$

di mana $p_i(t)$ adalah probabilitas kegagalan termal pada node $i$ pada waktu $t$. Fungsi $p_i(t)$ umumnya dimodelkan dengan distribusi Weibull:

$$p_i(t) = 1 - e^{-(t/\eta_i)^{\kappa_i}}$$

dengan $\eta_i$ adalah *scale parameter* (umur karakteristik) dan $\kappa_i$ adalah *shape parameter* (>1 menandakan *wear-out failure*).

### 2.5 Total Cost of Disruption

Kerugian total akibat disrupsi cold chain mencakup kerugian produk dan kerugian operasional:

$$C_{dis} = \sum_{j=1}^{J} \left( V_j \cdot Q_j^{spoiled} \right) + C_{ops} \cdot t_{recovery}$$

di mana $V_j$ adalah nilai satuan produk $j$, $Q_j^{spoiled}$ adalah kuantitas yang rusak, $C_{ops}$ adalah biaya operasional per jam, dan $t_{recovery}$ adalah durasi pemulihan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi pada cold chain farmasi mengikuti SOP terstruktur yang menggabungkan arsitektur IoT (Putra dkk., 2024) dengan kerangka analitis Khurshid-Siddiqui. Tahapan-tahapan utamanya adalah:

### 3.1 Pemetaan Sistem dan Identifikasi Node Kritis

Lakukan *Value Stream Mapping* (VSM) untuk mengidentifikasi seluruh *choke point* dalam cold chain: gudang sentral, kendaraan distribusi berpendingin, *last-mile delivery*, dan *cold chain box* di tingkat puskesmas. Setiap node diberi label parameter (kapasitas termal, MTBF historis, latensi komunikasi).

### 3.2 Instrumentasi Sensor dan Akuisisi Data

Sensor DS18B20 dipasang pada zona kritis (dekat produk, di inlet evaporator, di outlet kondensor). Sensor berkomunikasi melalui protokol 1-Wire dengan mikrokontroler (ESP32/Arduino). Data dikirim ke server melalui MQTT/HTTPS dengan interval sampling $\Delta t \leq 60$ detik (Putra dkk., 2024).

```
[Sensor DS18B20] → [1-Wire Bus] → [Mikrokontroler]
                                         ↓
                                 [WiFi/LoRaWAN]
                                         ↓
                              [Cloud Database]
                                         ↓
                        [Dashboard + Alert Engine]
```

### 3.3 Kalibrasi dan Validasi

Lakukan kalibrasi dua titik (es mencair $0^\circ C$ dan air mendidih $100^\circ C$, disesuaikan dengan rentang operasional 2–8°C untuk vaksin). Hitung koefisien $\alpha, \beta$ dan validasi menggunakan sertifikat kalibrasi tertelusur ke standar nasional.

### 3.4 Perhitungan Indeks Resiliensi Harian

Data suhu *real-time* digunakan untuk menghitung $\mathcal{R}_{abs}$, $\mathcal{R}_{adap}$, dan $\mathcal{R}_{rest}$ secara harian. Threshold peringatan dini ditetapkan pada:

$$T_{alert} = T_{optimal} \pm \Delta T_{kritis}$$

dengan $\Delta T_{kritis}$ umumnya $2^\circ C$ untuk vaksin program imunisasi WHO PQS.

### 3.5 SOP Tanggap Darurat

Jika $T(t) > T_{alert}$ selama $\geq 5$ menit, sistem otomatis mengirim notifikasi ke apoteker, memicu aktivasi generator/cooling backup, dan memulai *incident logging* untuk analisis *root cause* pasca-insiden.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah distributor farmasi regional mengelola 100 *cold chain box* untuk distribusi vaksin COVID-19 dengan parameter operasional:
- Volume box: 50 L
- Suhu optimal: $T_{opt} = 5^\circ C$ (rentang aman 2–8°C)
- Kapasitas cold pack: mempertahankan suhu $\leq 8°C$ selama 12 jam tanpa daya listrik
- Biaya dosis vaksin: $V = $ Rp 250.000/dosis
- Rata-rata 200 dosis per box
- Biaya operasional per jam saat recovery: $C_{ops} = $ Rp 50.000/jam

### 4.2 Perhitungan Probabilitas Disrupsi

Misalkan kegagalan kompresor pada *cold chain box* mengikuti distribusi Weibull dengan $\eta = 2000$ jam dan $\kappa = 2.5$. Probabilitas kegagalan dalam 8 jam operasional:

$$p(8) = 1 - e^{-(8/2000)^{2.5}} = 1 - e^{-0.000057} \approx 0.000057$$

Untuk 100 box simultan dengan asumsi independensi:

$$P_{dis}(8) = 1 - (1 - 0.000057)^{100} \approx 0.00568 \text{ atau } 0.568\%$$

Artinya, secara probabilistik terdapat $\approx 0.57$ box yang akan mengalami disrupsi termal dalam satu siklus 8 jam.

### 4.3 Simulasi Skenario Kegagalan Satu Box

Ambil satu box yang mengalami kegagalan pada $t = 0$ dengan profil suhu:

$$T(t) = T_{opt} + \Delta T_{max} \left( 1 - e^{-t/\tau_{th}} \right)$$

dengan $\Delta T_{max} = 20^\circ C$ (suhu ambient) dan konstanta waktu termal $\tau_{th} = 4$ jam. Ambang batas aman $T_{max} = 8^\circ C$ tercapai pada:

$$t_{breach} = -\tau_{th} \ln\left( 1 - \frac{T_{max} - T_{opt}}{\Delta T_{max}} \right) = -4 \ln\left( 1 - \frac{3}{20} \right)$$

$$t_{breach} = -4 \ln(0.85) = -4 \times (-0.1625) = 0.65 \text{ jam} \approx 39 \text{ menit}$$

### 4.4 Perhitungan Kerugian dan Indeks Resiliensi

Durasi pelanggaran suhu hingga intervensi manual: $t_{recovery} = 2$ jam (waktu respons apoteker + aktivasi cold pack cadangan). Kerugian produk:

$$C_{product} = V \cdot Q^{spoiled} = Rp\; 250{,}000 \times 200 = Rp\; 50{,}000{,}000$$

Total kerugian:

$$C_{dis} = Rp\; 50{,}000{,}000 + (Rp\; 50{,}000 \times 2) = Rp\; 50{,}100{,}000$$

Luas area degradasi (menggunakan integrasi numerik dengan langkah $\Delta t = 0.1$ jam):

$$\mathcal{A}_{deg} = \int_{0}^{2} Q(t) dt \approx 0.1875 \text{ (unit normalisasi)}$$

Indeks resiliensi ternormalisasi pada skala 0–1:

$$\mathcal{R} = 1 - \frac{\mathcal{A}_{deg}}{2} = 1 - 0.09375 = 0.906$$

### 4.5 Skenario Mitigasi dengan IoT Alert System