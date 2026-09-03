# 1878 — Model Resiliensi untuk Rantai Dingin (Cold Chain) Produk Mudah Rusak: Integrasi Pemantauan IoT dan Pemodelan Ketahanan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12 No. 1. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup vaksin, produk biofarmasi, makanan segar, dan bahan biologis bernilai tinggi. Kegagalan menjaga integritas termal pada rentang suhu tertentu (misalnya $2^\circ\text{C}$–$8^\circ\text{C}$ untuk vaksin sensitif menurut WHO PQS) tidak hanya menimbulkan kerugian ekonomi langsung berupa kerusakan stok, tetapi juga risiko kesehatan publik yang tidak terkompensasi oleh mekanisme pasar konvensional. Khurshid dan Siddiqui (2024) dalam tulisannya yang dipublikasikan melalui *Social Science Research Network* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengajukan sebuah **model resiliensi** yang memformalkan kemampuan sistem rantai dingin untuk bertahan (*absorb*), beradaptasi (*adapt*), dan pulih (*recover*) dari berbagai modus disrupsi—mulai dari kegagalan refrigerasi, keterlambatan transportasi, hingga *human error* dalam pencatatan data operasional.

Urgensi model ini semakin nyata ketika dikorelasikan dengan temuan empiris di lapangan yang dilaporkan oleh Putra, Defit, dan Nurcahyo (2024) pada *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Studi kasus pada Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak menunjukkan bahwa *cold chain box* yang digunakan sebagai media penyimpanan dan pendingin vaksin **belum dilengkapi alat pemantauan suhu secara *real-time***, sehingga apoteker tidak menerima peringatan dini ketika terjadi *excursion* suhu yang dipicu oleh kerusakan internal (kompresor, kebocoran refrigerant) maupun kerusakan eksternal (paparan lingkungan ambien, pintu tidak tertutup rapat). Lebih lanjut, pencatatan suhu masih dilakukan secara manual setiap dua jam sekali pada *log sheet*, yang mengandung tiga kelemahan struktural: (i) *sampling rate* terlalu rendah untuk menangkap *transient excursion*, (ii) risiko *human error* dalam transkripsi, dan (iii) tidak adanya *audit trail* digital yang dapat diintegrasikan dengan sistem mutu.

Perspektif Teknik Industri memandang masalah ini sebagai persoalan **keandalan sistem (*system reliability*)**, **kapabilitas proses (*process capability*)**, dan **manajemen risiko rantai pasok (*supply chain risk management*)** secara simultan. Secara ekonomi, industri farmasi global kehilangan estimasi hingga USD 35 miliar per tahun akibat kerusakan produk rantai dingin, sementara di sektor makanan segar angka *post-harvest losses* di negara berkembang mencapai 30–40%. Oleh karena itu, integrasi antara model resiliensi teoretis Khurshid & Siddiqui (2024) dan arsitektur teknis IoT berbasis sensor DS18B20 yang dirancang Putra et al. (2024) menjadi kerangka rekayasa yang holistik: model kuantitatif menyediakan *what-if analysis* dan metrik ketahanan, sedangkan perangkat IoT menyediakan *data acquisition* beresolusi tinggi yang dibutuhkan untuk mengkalibrasi dan memvalidasi model tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi rantai dingin yang dikembangkan oleh Khurshid dan Siddiqui (2024) berakar pada teori sistem dinamis dan teori probabilitas, dengan empat konstruk utama: **(i) fungsi kinerja sistem**, **(ii) laju degradasi termal**, **(iii) probabilitas disrupsi**, dan **(iv) fungsi pemulihan (*recovery*)**. Secara matematis, kinerja sistem rantai dingin pada waktu $t$ dapat dinyatakan sebagai:

$$Q(t) = Q_0 \cdot \exp\!\left(-\int_{0}^{t}\lambda(\tau)\,d\tau\right) + Q_{\infty}\!\left(1-\exp(-\mu t)\right)$$

di mana $Q_0$ adalah kapasitas fungsional awal, $\lambda(\tau)$ adalah laju degradasi dependen waktu (terutama dipengaruhi oleh *excursion* suhu), $\mu$ adalah laju pemulihan intrinsik sistem (misalnya respons refrigerasi cadangan), dan $Q_{\infty}$ adalah kapasitas kesetimbangan pasca-pemulihan. Indeks resiliensi kemudian didefinisikan sebagai rasio antara kinerja aktual terhadap kinerja target:

$$\mathcal{R}(t) = \frac{Q(t)}{Q_{\text{target}}} \in [0,1]$$

Untuk produk biofarmasi yang sangat sensitif terhadap suhu, degradasi kualitatif mengikuti **persamaan Arrhenius** yang dimodifikasi:

$$k(T) = A \cdot \exp\!\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $k(T)$ adalah laju degradasi pada suhu absolut $T$ (Kelvin), $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), dan $R = 8{,}314\,\text{J/(mol·K)}$ adalah konstanta gas universal. Kerusakan kumulatif produk selama periode disrupsi suhu $\Delta t$ pada suhu $T$ dapat dihitung sebagai:

$$D = \int_{0}^{\Delta t} k(T(\tau))\,d\tau$$

Putra et al. (2024) melengkapi kerangka ini dengan akuisisi data melalui sensor DS18B20, sebuah *digital thermometer* dengan akurasi $\pm 0{,}5^\circ\text{C}$ pada rentang $-10^\circ\text{C}$ hingga $+85^\circ\text{C}$ dan resolusi $0{,}0625^\circ\text{C}$. Akuisisi data mengikuti protokol *1-Wire* dengan laju *sampling* $f_s$ yang direkomendasikan:

$$f_s \geq \frac{1}{\Delta t_{\min}}$$

di mana $\Delta t_{\min}$ adalah durasi *transient excursion* terpendek yang harus terdeteksi (umumnya 60 detik untuk aplikasi farmasi kritis). Akurasi pengukuran total sistem $\varepsilon_{\text{total}$ mengikuti aturan *root-sum-square*:

$$\varepsilon_{\text{total}} = \sqrt{\varepsilon_{\text{sensor}}^2 + \varepsilon_{\text{ADC}}^2 + \varepsilon_{\text{kalibrasi}}^2}$$

Dengan $\varepsilon_{\text{sensor}} = 0{,}5^\circ\text{C}$ dan $\varepsilon_{\text{ADC}} = 0{,}0625^\circ\text{C}$, diperoleh $\varepsilon_{\text{total}} \approx 0{,}504^\circ\text{C}$, yang masih memenuhi ambang batas ketat WHO PQS E006 untuk *temperature monitoring device* kelas farmasi.

Probabilitas disrupsi sistem $\mathcal{P}_d$ dalam horizon waktu $T_h$ dimodelkan sebagai distribusi Poisson non-homogen:

$$\mathcal{P}_d(T_h) = 1 - \exp\!\left(-\int_{0}^{T_h} \lambda_d(t)\,dt\right)$$

dengan $\lambda_d(t)$ adalah *hazard rate* dependen waktu yang dipengaruhi oleh usia peralatan, kondisi lingkungan, dan riwayat pemeliharaan. Ketika sebuah disrupsi terdeteksi, sistem peringatan dini (*early warning system*) berbasis IoT memicu protokol pemulihan yang menurunkan *expected downtime* dari $T_{\text{down}}^{\text{manual}}$ menjadi $T_{\text{down}}^{\text{IoT}}$, sehingga peningkatan resiliensi total menjadi:

$$\Delta\mathcal{R} = \frac{T_{\text{down}}^{\text{manual}} - T_{\text{down}}^{\text{IoT}}}{T_h}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi Khurshid–Siddiqui (2024) di lapangan mengikuti **lima tahap rekayasa** yang diintegrasikan dengan arsitektur IoT yang dirancang Putra et al. (2024). Tahapan tersebut dapat divisualisasikan sebagai berikut:

```
[1] Identifikasi Stakeholder & Pemetaan Alur Rantai Dingin
              ↓
[2] Karakterisasi Parameter Termal & Batas Kritis Produk
              ↓
[3] Instalasi Jaringan Sensor DS18B20 + Gateway IoT (ESP8266/NodeMCU)
              ↓
[4] Kalibrasi Model Resiliensi terhadap Data Historis
              ↓
[5] Implementasi Dashboard Pemantauan + Protokol Peringatan Dini
```

**Tahap 1 – Pemetaan Alur.** Setiap node rantai dingin (gudang sentral → transporter → *cold chain box* lapangan → titik layanan) dipetakan dengan parameter **MTTF** (*Mean Time To Failure*) dan **MTTR** (*Mean Time To Repair*) yang relevan.

**Tahap 2 – Karakterisasi Termal.** Batas operasional suhu ditetapkan dari spesifikasi produk (misalnya $2^\circ\text{C} \leq T \leq 8^\circ\text{C}$ untuk vaksin sensitif). Persamaan berikut mendefinisikan *service level* termal:

$$\text{SLA}_{\text{termal}} = \frac{t\{T_{\min} \leq T(t) \leq T_{\max}\}}{t_{\text{total}}} \times 100\%$$

dengan target $\text{SLA}_{\text{termal}} \geq 99{,}5\%$ sesuai pedoman WHO.

**Tahap 3 – Arsitektur IoT.** Sensor DS18B20 ditempatkan pada tiga zona *cold chain box* (atas, tengah, bawah) untuk mendeteksi gradien termal. Sensor berkomunikasi dengan mikrokontroler melalui protokol *1-Wire*, dengan alamat unik 64-bit. Data dikirim ke *cloud server* melalui modul WiFi ESP8266 dengan protokol MQTT, sehingga latensi end-to-end $L_{e2e} < 5$ detik. Diagram logika sistem peringatan dini:

```
IF T(t) > T_max OR T(t) < T_min:
    TRIGGER alarm level = (T(t) - T_max) / T_max × 100%
    IF alarm level > 10%: SEND SMS + EMAIL + BUZZER
    LOG event ke database + timestamp
ELSE:
    CONTINUE monitoring dengan fs yang ditetapkan
```

**Tahap 4 – Kalibrasi Model.** Parameter $\lambda(\tau)$, $\mu$, dan $Q_{\infty}$ dikalibrasi menggunakan data historis 90 hari melalui metode *least squares fitting* dengan *objective function*:

$$\min_{\lambda,\mu,Q_{\infty}} \sum_{i=1}^{N} \left(Q_{\text{obs},i} - Q_{\text{model},i}\right)^2$$

**Tahap 5 – SOP Pemantauan.** Putra et al. (2024) menetapkan SOP bahwa apoteker **tidak lagi perlu melakukan pencatatan manual setiap 2 jam**, melainkan cukup memverifikasi *dashboard* digital dan menindaklanjuti anomali yang terdeteksi oleh sistem otomatis, sehingga *human workload* berkurang hingga 80% dan risiko *transcription error* turun mendekati nol.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** UPTD