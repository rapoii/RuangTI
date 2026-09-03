# 1718 — Model Resiliensi Logistik Cold Chain Produk Perishable Terintegrasi Sistem Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup produk farmasi (vaksin, biofarmaseutika), makanan beku, produk bioteknologi, dan bahan kimia khusus. Gangguan sekecil apa pun pada kisaran suhu yang dipersyaratkan—misalnya 2–8 °C untuk mayoritas vaksin program imunisasi WHO—dapat memicu degradasi irreversible pada struktur molekuler produk. Khurshid dan Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengajukan model resiliensi kuantitatif yang secara eksplisit memformulasikan kapasitas pemulihan (*recovery capacity*) sistem cold chain ketika terjadi ekskursi suhu. Pendekatan ini mengisi celah fundamental yang selama ini didominasi oleh analisis risiko statis tanpa dimensi temporal pemulihan.

Konteks empiris pada tataran operasional ditunjukkan oleh Putra, Defit, dan Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) di UPTD Farmasi Dinas Kesehatan Kabupaten Siak. Penulis menemukan tiga permasalahan struktural yang merepresentasikan tipikal kegagalan sistem cold chain di negara berkembang: (1) *cold chain box* tidak dilengkapi sistem peringatan suhu *real-time*, (2) pencatatan suhu dilakukan secara manual setiap dua jam melalui *log sheet* oleh apoteker—prosedur yang sangat rentan terhadap human error dan *recall bias*, serta (3) tidak adanya dokumentasi digital yang mampu diaudit untuk keperluan *post-market surveillance*. Studi ini menjadi bukti lapangan (*field evidence*) bahwa investasi pada dimensi teknologi Informasi (IoT) merupakan prasyarat bagi implementasi model resiliensi yang dirancang oleh Khurshid dan Siddiqui.

Urgensi ekonomi dari topik ini sangat substansial. World Health Organization (WHO) memperkirakan bahwa hingga 50% vaksin terbuang sia-sia secara global akibat kerusakan rantai dingin (*cold chain failure*), dengan nilai ekonomis tahunan mencapai USD 2,5–3,5 miliar pada sektor farmasi publik. Di Indonesia, dengan lebih dari 1,2 juta *outlet* farmasi dan lebih dari 10.000 Puskesmas yang melakukan program imunisasi rutin, kehilangan 10% stok vaksin saja sudah menimbulkan potensi kerugian di atas Rp 2,5 triliun per tahun. Kerugian ini tidak hanya bersifat finansial, tetapi juga epidemiologis: penurunan *coverage* imunisasi akibat ketidaktersediaan vaksin secara langsung meningkatkan *morbidity* dan *mortality* penyakit *vaccine-preventable*. Dengan demikian, integrasi antara model resiliensi teoritis (Khurshid & Siddiqui, 2024) dan solusi IoT konkret (Putra *et al.*, 2024) merupakan kebutuhan strategis dalam transformasi digital logistik farmasi Indonesia.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Bruneau yang Diadaptasi

Model resiliensi yang digunakan Khurshid dan Siddiqui (2024) bersandar pada kerangka Bruneau *et al.* yang awalnya dirancang untuk ketahanan infrastruktur seismik. Resiliensi didefinisikan sebagai kemampuan sistem untuk mengurangi probabilitas kegagalan, menyerap konsekuensi kegagalan, dan memulihkan fungsi dengan cepat. Untuk cold chain, fungsi sistem $Q(t)$ merepresentasikan persentase kualitas produk pada waktu $t$, dengan $Q_{max} = 100\%$ sebagai kondisi ideal.

**Fungsi Kerugian Kumulatif (*Cumulative Performance Loss*):**
$$L = \int_{t_0}^{t_1} [Q_{max} - Q(t)] \, dt$$

dengan:
- $t_0$ = waktu dimulainya ekskursi suhu (jam)
- $t_1$ = waktu pencapaian pemulihan penuh (jam)
- $Q(t)$ = fungsi kualitas temporal

**Indeks Resiliensi:**
$$R = 1 - \frac{L}{Q_{max} \cdot (t_1 - t_0)}$$

Sistem dengan $R \to 1$ menunjukkan resiliensi tinggi, sedangkan $R \to 0$ mengindikasikan sistem yang gagal pulih.

### 2.2 Model Kinetika Degradasi Produk

Degradasi produk biologi mengikuti kinetika Arrhenius, yang diformalisasikan oleh Haynes (1971) sebagai **Mean Kinetic Temperature (MKT)**—parameter standar yang diadopsi USP ⟨1079⟩ untuk evaluasi stabilitas:

$$T_{MKT} = \frac{\Delta H / R}{-\ln\left(\dfrac{1}{n}\sum_{i=1}^{n} e^{-\Delta H / (R \cdot T_i)}\right)}$$

dengan:
- $\Delta H$ = energi aktivasi (tipikal 83,144 kJ/mol untuk vaksin protein)
- $R$ = konstanta gas universal (8,314 J/mol·K)
- $T_i$ = suhu absolut terukur (K) pada pengukuran ke-$i$
- $n$ = jumlah total pengukuran

Laju degradasi mengikuti hukum Arrhenius:

$$k(T) = A \cdot e^{-\Delta H / (R \cdot T)}$$

sehingga fraksi produk yang tersisa setelah eksposur selama $t_{eksp}$:

$$C(t_{eksp}) = C_0 \cdot e^{-k(T_{eksp}) \cdot t_{eksp}}$$

### 2.3 Formulasi Statistik Proses untuk Pemantauan IoT

Untuk sistem sensor DS18B20 dengan akurasi $\pm 0{,}5$ °C pada rentang $-10$ °C sampai $+85$ °C, pengendalian mutu menggunakan peta kontrol Shewhart:

$$\bar{T} = \frac{1}{N} \sum_{i=1}^{N} T_i$$

$$\sigma = \sqrt{\frac{1}{N-1} \sum_{i=1}^{N} (T_i - \bar{T})^2}$$

dengan batas kendali:
$$UCL = \bar{T} + 3\sigma, \quad LCL = \bar{T} - 3\sigma$$

**Aturan Alert Generation:**
$$A(t) = \begin{cases} 1, & |\Delta T(t)| > \tau \text{ atau } \left| \frac{dT}{dt} \right| > \rho \\ 0, & \text{selainnya} \end{cases}$$

dengan $\tau$ = ambang batas suhu (misalnya 1 °C dari setpoint) dan $\rho$ = laju perubahan kritis.

### 2.4 Model Biaya Kerugian

Kerugian ekonomi akibat ekskursi suhu:

$$C_{loss} = V_{batch} \cdot P_{unit} \cdot \left[1 - e^{-\lambda(T_{eksp}) \cdot t_{eksp}}\right] + C_{mitigation}$$

dengan $V_{batch}$ = volume batch, $P_{unit}$ = harga satuan, dan $C_{mitigation}$ = biaya respons darurat.

##.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
