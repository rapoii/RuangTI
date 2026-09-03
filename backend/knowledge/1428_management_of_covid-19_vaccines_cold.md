# 1428 — Manajemen Logistik Rantai Dingin Vaksin COVID-19 dan Integrasi Sensor Multi-Sumber serta Pembelajaran Mesin untuk Prediksi Mutu Produk Biologis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Management of COVID-19 vaccines cold chain logistics: a scoping review* dan aplikasi lintas-sektor pembelajaran mesin untuk prediksi mutu dalam rantai dingin
**Jurnal & Sitasi Utama:** Mathumalar Loganathan Fahrni, Intan An-Nisaa' Ismail, Dalia Mohammed Refi (2022). *Journal of Pharmaceutical Policy and Practice*. DOI: [https://doi.org/10.1186/s40545-022-00411-5](https://doi.org/10.1186/s40545-022-00411-5)
**Sitasi Pendukung:** Wentao Huang, Xuepei Wang, Junchang Zhang (2022). *Food Control*. DOI: [https://doi.org/10.1016/j.foodcont.2022.109496](https://doi.org/10.1016/j.foodcont.2022.109496)

---

## 1. Pendahuluan dan Konteks Industri

Krisis pandemi COVID-19 telah mengubah secara fundamental arsitektur rantai pasok farmasi global. Fahrni, Ismail, dan Refi (2022) dalam *scoping review* mereka yang dipublikasikan di *Journal of Pharmaceutical Policy and Practice* (DOI: 10.1186/s40545-022-00411-5) menyintesis证据 empiris dari basis data PubMed (LitCovid), Scopus, dan ScienceDirect (April 2020–Januari 2022) menggunakan checklist PRISMA-ScR 2018 untuk memetakan permasalahan rantai dingin (*cold chain*) vaksin. Temuan utama menunjukkan bahwa meskipun program vaksinasi massal merupakan salah satu pencapaian kesehatan masyarakat terbesar abad ke-21, aspek manajemen rantai dingin—yang menjamin potensi hayati (*biological potency*) produk dari lini produksi hingga titik injeksi—sering kali kurang dilaporkan (*under-reported*) dalam literatur ilmiah. Padahal, untuk vaksin mRNA (misalnya Pfizer-BioNTech) yang memerlukan penyimpanan pada suhu ultra-rendah (-70°C ± 10°C) atau vaksin vektor adenovirus (-20°C), setiap deviasi suhu di luar ambang batas akan mempercepat degradasi antigenik melalui reaksi hidrolisis, oksidasi, dan denaturasi termal.

Secara operasional, biaya logistik farmasi global diproyeksikan mencapai USD 130 miliar pada 2025, di mana 25–30% di antaranya merupakan biaya terkait kontrol suhu. Kerugian ekonomi akibat pembuangan (*wastage*) vaksin yang rusak termal di negara-negara berkembang dilaporkan mencapai 30% dari total dosis yang dibeli. Oleh karena itu, integrasi teknologi sensor multi-sumber—yang telah mapan dalam rantai dingin pangan—menjadi agenda strategis. Huang, Wang, dan Zhang (2022) dalam *Food Control* (DOI: 10.1016/j.foodcont.2022.109496) membuktikan bahwa kombinasi sensor suhu, kelembapan relatif, dan konsentrasi gas etilen dengan algoritma *Back-Propagation Neural Network* (BPNN) mampu memprediksi umur simpan (*shelf-life*) blueberry segar dengan akurasi RMSE sebesar 0,847 hari (R² = 0,964)—signifikan lebih baik daripada model kinetika Arrhenius klasik (RMSE = 1,523 hari). Pelajaran berharga dari rantai dingin pangan ini dapat ditranslasikan ke rantai dingin farmasi melalui kerangka *Technology Readiness Level* (TRL) yang serupa.

Urgensi industri bagi praktisi Teknik Industri terletak pada desain jaringan distribusi yang menggabungkan: (1) optimasi lokasi fasilitas *cold storage* dengan model *facility location-allocation*, (2) perencanaan kapasitas armada berpendingin dengan kendala *vehicle routing problem with time windows* (VRPTW), dan (3) implementasi *digital twin* berbasis Internet of Things (IoT) untuk visibilitas suhu *real-time*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Degradasi Arrhenius untuk Produk Biologis

Degradasi potensi vaksin dan kualitas produk biologis secara umum mengikuti model Arrhenius, yang menyatakan laju reaksi degradasi $k$ sebagai fungsi suhu absolut $T$:

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

di mana $A$ adalah faktor pre-eksponensial (s$^{-1}$), $E_a$ adalah energi aktivasi (J·mol$^{-1}$), dan $R$ adalah konstanta gas universal (8,314 J·mol$^{-1}$·K$^{-1}$). Untuk vaksin mRNA, energi aktivasi hidrolisis fosfodiester dilaporkan berkisar 80–110 kJ·mol$^{-1}$, sedangkan untuk protein subunit sekitar 60–90 kJ·mol$^{-1}$.

### 2.2 Aturan Q$_{10}$ untuk Koefisien Sensitivitas Termal

Aturan Q$_{10}$—yang banyak dikutip dalam studi stabilitas farmasi dan pangan—mengkuantifikasi peningkatan laju degradasi setiap kenaikan suhu 10°C:

$$Q_{10} = \left( \frac{k_2}{k_1} \right)^{\frac{10}{T_2 - T_1}}$$

Untuk produk biologi rantai dingin, Q$_{10}$ tipikal berada pada rentang 2–4. Jika suhu penyimpanan naik dari -70°C menjadi -50°C (ekskursi 20°C), maka potensi hayati dapat terdegradasi sebesar faktor $Q_{10}^2 = 4$ hingga $Q_{10}^4 = 16$ kali lebih cepat.

### 2.3 Beban Termal (*Heat Load*) pada Wadah Berpendingin

Integritas suhu dalam cooler box atau *reefer container* dipertahankan melalui keseimbangan beban termal:

$$Q_{total} = Q_{konduksi} + Q_{konveksi} + Q_{radiasi} + Q_{respirasi}$$

Untuk dinding cooler box dengan luas permukaan $A$ (m²), koefisien transfer panas keseluruhan $U$ (W·m$^{-2}$·K$^{-1}$), dan perbedaan suhu $\Delta T$ (K) selama waktu $t$ (s):

$$Q_{konduksi} = U \cdot A \cdot \Delta T \cdot t$$

### 2.4 Model Prediksi Umur Simpan Berbasis Pembelajaran Mesin

Huang et al. (2022) menggunakan arsitektur BPNN dengan fungsi aktivasi sigmoid pada lapisan tersembunyi untuk menangkap relasi non-linear antara fitur sensor dan atribut mutu:

$$\hat{y}_i = f_{BPNN}\left( \mathbf{x}_i; \mathbf{W}, \mathbf{b} \right) = \sum_{j=1}^{h} w_j \cdot \sigma\left( \sum_{k=1}^{m} w_{jk} x_{ik} + b_j \right) + b_0$$

di mana $\mathbf{W}$ dan $\mathbf{b}$ adalah parameter bobot dan bias yang dioptimasi melalui *back-propagation* dengan fungsi kerugian *Mean Squared Error*:

$$MSE = \frac{1}{n}\sum_{i=1}^{n}\left( y_i - \hat{y}_i \right)^2$$

Metrik kinerja model dilaporkan Huang et al. (2022) mencakup *Root Mean Square Error* (RMSE) dan koefisien determinasi $R^2$:

$$RMSE = \sqrt{\frac{1}{n}\sum_{i=1}^{n}\left( y_i - \hat{y}_i \right)^2} \quad ; \quad R^2 = 1 - \frac{\sum_{i=1}^{n}\left( y_i - \hat{y}_i \right)^2}{\sum_{i=1}^{n}\left( y_i - \bar{y} \right)^2}$$

### 2.5 Manajemen Persediaan: Economic Order Quantity (EOQ) dan Safety Stock

Untuk dosis vaksin dengan permintaan deterministik-stokastik:

$$Q^* = \sqrt{\frac{2 \cdot D \cdot S}{H}}$$

$$SS = z_{\alpha} \cdot \sigma_{LT} \cdot \sqrt{L}$$

di mana $D$ = permintaan tahunan, $S$ = biaya pemesanan,