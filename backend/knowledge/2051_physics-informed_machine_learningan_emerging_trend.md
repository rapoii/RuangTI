# 2051 — Physics-Informed Machine Learning dalam Tribologi: Integrasi Hukum Fisika untuk Prediksi Gesekan, Keausan, dan Pelumasan Presisi Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Physics-Informed Machine Learning—An Emerging Trend in Tribology
**Jurnal & Sitasi Utama:** Max Marian & Stephan Tremmel (2023). *Physics-Informed Machine Learning—An Emerging Trend in Tribology*. *Lubricants*, 11(11), 463. DOI: [https://doi.org/10.3390/lubricants11110463](https://doi.org/10.3390/lubricants11110463)
**Sitasi Pendukung:** Ekram Al Mahdouri, Said Al‐Abri, & Hassan Yousef (2025). *Physics-Informed Neural Networks in Grid-Connected Inverters: A Review*. *Energies*, 18(20), 5441. DOI: [https://doi.org/10.3390/en18205441](https://doi.org/10.3390/en18205441)

---

## 1. Pendahuluan dan Konteks Industri

Tribologi—ilmu tentang gesekan (*friction*), keausan (*wear*), dan pelumasan (*lubrication*)—merupakan salah satu pilar fundamental dalam efisiensi sistem mekanis modern. Menurut Marian dan Tremmel (2023), sekitar 23% konsumsi energi global hilang akibat gesekan, dan keausan menyumbang kerugian ekonomi tahunan melebihi US$ 500 miliar di sektor industri manufaktur, otomotif, dan energi. Angka yang dirilis dalam paper tersebut (DOI: 10.3390/lubricants11110463) menunjukkan urgensi strategis integrasi pendekatan komputasional mutakhir untuk memodelkan fenomena tribologis secara lebih akurat. Selama dua dekade terakhir, *machine learning* (ML) konvensional berbasis data—seperti *Random Forest*, *Gradient Boosting*, dan deep *Neural Networks*—telah diterapkan untuk memprediksi koefisien gesekan, umur lelah bantalan, dan tingkat keausan pahat. Namun, model ML murni data-driven memiliki kelemahan inheren: ketergantungan ekstrem pada volume data besar, kemampuan generalisasi rendah di luar domain pelatihan, serta ketidakmampuan menghasilkan prediksi yang *physically consistent* ketika beroperasi dalam regime tribologis yang belum pernah diamati (*extrapolation regime*).

Di sinilah *Physics-Informed Machine Learning* (PIML), khususnya *Physics-Informed Neural Networks* (PINNs), hadir sebagai paradigma transformatif. Marian dan Tremmel (2023) menekankan bahwa PINNs tidak hanya memetakan korelasi statistik antar-variabel operasional, melainkan secara eksplisit menanamkan (*embed*) hukum fisika kontinum—seperti Persamaan Reynolds untuk pelumasan hidrodinamik dan Persamaan Hertz untuk kontak elastis—ke dalam fungsi *loss* jaringan saraf. Pendekatan ini menjawab tiga tantangan utama industri modern: (i) kelangkaan data eksperimen tribologis berlabel berkualitas tinggi, (ii) kebutuhan akan prediksi yang dapat diinterpretasikan secara fisik oleh insinyur manufaktur, dan (iii) tuntutan akan model yang *transferable* lintas kondisi operasional. Konvergensi PIML dengan tribologi juga dilaporkan oleh Al Mahdouri et al. (2025) dalam konteks sistem inverter terhubung jaringan (DOI: 10.3390/en18205441), di mana arsitektur PINN berhasil meningkatkan akurasi estimasi parameter *aging* dan deteksi degradasi sebesar 15–30% dibanding model ML konvensional. Implikasi lintas-domain ini mengindikasikan bahwa PIML bukan sekadar tren akademis, melainkan metodologi yang siap diadopsi oleh industri 4.0 untuk Predictive Maintenance, digital twin, dan *Remaining Useful Life* (RUL) prediction pada sistem mekanis kritikal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Physics-Informed Neural Networks (PINN)

PINN adalah arsitektur *feedforward neural network* yang menerima koordinat spasial dan/atau temporal sebagai input, dan menghasilkan solusi persamaan diferensial parsial (PDE) sebagai output. Jaringan ini dilatih dengan fungsi *loss* gabungan yang terdiri dari tiga komponen utama:

$$\mathcal{L}_{total} = w_d \mathcal{L}_{data} + w_p \mathcal{L}_{physics} + w_b \mathcal{L}_{boundary}$$

di mana $w_d$, $w_p$, dan $w_b$ adalah bobot relatif; $\mathcal{L}_{data}$ mengukur galat terhadap data eksperimen; $\mathcal{L}_{physics}$ mengukur residual PDE; dan $\mathcal{L}_{boundary}$ mengukur kepatuhan terhadap kondisi batas.

### 2.2 Persamaan Reynolds untuk Pelumasan Hidrodinamik

Dalam regime pelumasan fluida penuh, distribusi tekanan film lubricant direpresentasikan oleh Persamaan Reynolds umum (Marian & Tremmel, 2023):

$$\frac{\partial}{\partial x}\left(\frac{\rho h^3}{12\eta}\frac{\partial p}{\partial x}\right) + \frac{\partial}{\partial z}\left(\frac{\rho h^3}{12\eta}\frac{\partial p}{\partial z}\right) = U\frac{\partial(\rho h)}{\partial x} + \frac{\partial(\rho h)}{\partial t}$$

dengan $p(x,z,t)$ adalah tekanan film, $h(x,z,t)$ ketebalan film, $\eta$ viskositas dinamik, $\rho$ densitas lubricant, dan $U$ kecepatan slip tangensial. Persamaan ini menjadi komponen utama dari $\mathcal{L}_{physics}$ ketika PINN diaplikasikan pada sistem bantalan jurnal (*journal bearing*) atau bantalan dorong (*thrust bearing*).

### 2.3 Persamaan Hertz untuk Tekanan Kontak Elastis

Untuk kontak bola atau silinder di bawah beban normal, distribusi tekanan kontak diberikan oleh:

$$p_0 = \frac{3F}{2\pi a^2}$$

di mana $a$ adalah jari-jari area kontak:

$$a = \sqrt[3]{\frac{3FR}{4E^*}}$$

dengan $F$ gaya normal, $R$ jari-jari efektif relatif, dan $E^*$ modulus elastis efektif. PINN dapat menggunakan hukum Hertz ini sebagai *soft constraint* untuk memvalidasi prediksi tekanan kontak pada roda gigi dan *rolling element bearing*.

### 2.4 Persamaan Archard untuk Laju Keausan

Laju keausan aditif direpresentasikan oleh:

$$\dot{V} = K \frac{W \cdot v_s}{H}$$

dengan $V$ volume keausan, $K$ koefisien keausan (tak berdimensi, tergantung material dan regime pelumasan), $W$ beban normal, $v_s$ kecepatan sliding, dan $H$ kekerasan material. Marian dan Tremmel (2023) menunjukkan bahwa PINN dapat digunakan untuk mengestimasi parameter $K$ secara *data-driven* dengan tetap menjunjung hukum kekekalan massa dan energi sebagai约束.

### 2.5 Kurva Stribeck dan Bilangan Hersey

Untuk karakterisasi regime pelumasan, digunakan bilangan Hersey $\eta N / P$ yang memetakan tiga regime: *boundary lubrication*, *mixed lubrication*, dan *elastohydrodynamic lubrication* (EHL). Model Stribeck kuadratik dapat ditulis sebagai:

$$\mu(\eta, N, P) = \mu_{bl} + \beta_1 \sqrt{\frac{\eta N}{P}} + \beta_2 \frac{\eta N}{P}$$

PINN dengan arsitektur *spline* adaptif mampu menangkap transisi non-linear antar-regime ini secara presisi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PIML dalam rekayasa tribologi mengikuti prosedur operasional standar berikut, yang diadaptasi dari framework yang diuraikan oleh Marian dan Tremmel (2023) serta pendekatan Al Mahdouri et al. (2025) untuk sistem kontrol industri:

**Tahap 1 – Karakterisasi Sistem Fisik.** Insinyur mengidentifikasi PDE governing (Reynolds, Hertz, Archard), kondisi batas (Cavitation Reynolds: $p \geq 0$), dan parameter operasional kritis (viskositas, kecepatan, beban). Hasil dari tahap ini adalah *digital twin specification* yang sesuai dengan ISO 23247 untuk sistem manufaktur digital.

**Tahap 2 – Akuisisi dan Augmentasi Data.** Data sensor tribologis (akustik emission, accelerometer, oil debris sensor) dikumpulkan sesuai standar ISO 18436 untuk *condition monitoring*. Data kemudian di-*augment* dengan sampel *collocation points* dari PDE governing untuk memperkaya sinyal pelatihan.

**Tahap 3 – Arsitektur Jaringan.** Arsitektur PINN dirancang dengan 4–8 *hidden layer*, masing-masing 32–128 neuron, aktivasi *tanh* atau *sinusoidal* (lebih baik untuk menangkap periodicitas pada kontak roda gigi). Normalisasi input-output menggunakan transformasi logaritmik untuk menstabilkan gradien.

**Tahap 4 – Pelatihan Multi-Fungsi Loss.** Pelatihan menggunakan optimisasi Adam dengan *learning rate* adaptif ($10^{-3}$ hingga $10^{-5}$), dilanjutkan L-BFGS untuk konvergensi halus. Total epoch: 10.000–50.000 dengan *batch size* 256–1024.

**Tahap 5 – Validasi dan Sertifikasi.** Model divalidasi terhadap data eksperimen independen dan di-*certify* menggunakan *Sobol sensitivity analysis* untuk memastikan kepatuhan fisik (*physics compliance*).

Diagram alur lengkap: **Data Sensor → Pra-pemrosesan (ISO 4406 oil cleanliness) → PINN Forward Pass → Komputasi Residual PDE → Auto-differentiation → Backpropagation → Update Bobot → Iterasi hingga konvergensi → Model Tervalidasi → Deploy ke Edge Device**.

Standar industri relevan: **ISO 9001** (manajemen mutu), **ISO 14001** (manajemen lingkungan untuk pelumas), **AGMA 2001** (desain roda gigi), **DIN 51825** (spektrum gemuk), **API 670** (*machinery protection systems*), dan **IEC 61850** (komunikasi sistem kontrol industri, relevan untuk integrasi PIML dalam sistem SCADA seperti diuraikan Al Mahdouri et al., 2025).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Sistem: Bantalan Rol Silinder pada Turbin Angin

**Parameter Operasional:**
- Beban radial $W = 12.500$ N
- Diameter pitch $D = 320$ mm
- Kecepatan rotasi $N = 1.480$ rpm
- Viskositas kinematik pelumas $\nu = 68$ cSt pada 40°C
- Diameter elemen rol $d = 40$ mm, jumlah rol $Z = 18$
- Modulus Young $E = 2,1 \times 10^{11}$ Pa
- Poisson ratio $\nu_m = 0,3$
- Koefisien keausan $.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
