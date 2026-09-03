# 2067 — Physics-Informed Neural Network (PINN) untuk Prognostik Kelelahan Bearing Utama Turbin Angin: Integrasi Model Mekanika Fraktur dan Deep Learning dalam Sistem Pemeliharaan Prediktif Lintas-Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** Physics-informed Neural Network (PINN) untuk Pemodelan Kelelahan Bearing Utama Turbin Angin (*Wind Turbine Main Bearing Fatigue*)  
**Jurnal & Sitasi Utama:** Yigit Yucesan & Felipe Viana (2023). *A Physics-informed Neural Network for Wind Turbine Main Bearing Fatigue*. *International Journal of Prognostics and Health Management*, Vol. 11, No. 1. DOI: [https://doi.org/10.36001/ijphm.2020.v11i1.2594](https://doi.org/10.36001/ijphm.2020.v11i1.2594)  
**Sitasi Pendukung Lintas-Sektor:** Oumaima Manchadi, Fatima-Ezzahraa Ben-Bouazza, & Bassma Jioudi (2023). *Predictive Maintenance in Healthcare System: A Survey*. *IEEE Access*, Vol. 11. DOI: [https://doi.org/10.1109/access.2023.3287490](https://doi.org/10.1109/access.2023.3287490)  

---

## 1. Pendahuluan dan Konteks Industri

Turbin angin modern merupakan aset rekayasa kompleks dengan nilai kapitalisasi tinggi, di mana satu unit turbin lepas-pantai (*offshore wind turbine*) kelas 8 MW dapat bernilai investasi lebih dari €12 juta, dengan biaya pemeliharaan operasional mencapai 25–30% dari total *Levelized Cost of Energy* (LCOE) sepanjang siklus hidupnya (Yucesan & Viana, 2023). Di antara seluruh subsistem turbin, *main bearing* atau bantalan poros utama—yang mentransmisikan gaya aerodinamis dan beban gravitasi rotor menuju *nacelle* dan *gearbox*—teridentifikasi sebagai salah satu komponen dengan tingkat kegagalan paling kritis dan paling mahal. Kegagalan tak terduga pada bearing utama memicu biaya tak terduga (unwanted maintenance) yang sangat signifikan, terutama karena kebutuhan akan crane heavy-lift (kapasitas >600 ton untuk turbin besar), downtime produksi energi, logistik suku cadang, dan tenaga kerja spesialis di lokasi lepas-pantai yang sulit diakses.

Yucesan dan Viana (2023) menyoroti bahwa data historis menunjukkan kegagalan bearing utama dapat terjadi jauh lebih awal dari *design life* yang ditentukan pabrikan (yang umumnya 20 tahun atau 175.000 jam operasi). Investigasi *root cause analysis* mengidentifikasi bahwa kontributor utama kegagalan bersifat multifaktorial: cacat manufaktur (*inherent manufacturing defects*), *event loads* berupa *startups*, *shutdowns*, dan *emergency stops*, kondisi lingkungan ekstrem (kelembapan, salinitas, siklus termal), serta praktik pemeliharaan yang suboptimal. Multifaktorialitas ini membuat pemodelan *Remaining Useful Life* (RUL) bearing utama menjadi tantangan rekayasa yang sangat berat (*a very daunting task*).

Dalam konteks industri 4.0 dan transformasi digital, pendekatan *predictive maintenance* (PdM) berbasis data telah berkembang pesat. Manchadi, Ben-Bouazza, dan Jioudi (2023) dalam survei komprehensifnya di *IEEE Access* menunjukkan bahwa filosofi PdM—yang awalnya berkembang di sektor manufaktur dan energi—sekarang telah menyebar ke sistem kesehatan, di mana kegagalan peralatan medis vital seperti *ventilator*, *MRI*, dan *infusion pump* memiliki konsekuensi langsung terhadap keselamatan pasien. Persamaan struktural antara kedua domain ini sangat relevan: keduanya menghadapi (a) sistem kompleks dengan mode kegagalan multipel, (b) ketidakpastian tinggi akibat variabilitas operasional, (c) kebutuhan akan keputusan pemeliharaan yang optimal secara ekonomi dengan biaya inventaris dan logistik yang tinggi, serta (d) tekanan regulasi untuk keandalan dan keselamatan. Oleh karena itu, pengembangan metodologi PINN yang diusulkan oleh Yucesan dan Viana (2023) memiliki signifikansi konseptual yang melampaui satu domain industri dan menjadi kerangka kerja generik untuk prognosis sistem kritis.

Urgensi ekonomis dari pendekatan PINN ini dapat dihitung sebagai berikut. Dengan asumsi biaya kegagalan tak terduga (corrective maintenance) sebesar €500.000 per kejadian (terutama karena sewa kapal dan crane), sedangkan biaya inspeksi dan pemeliharaan preventif terjadwal hanya €80.000, rasio penghematan potensial mencapai 6,25:1 untuk setiap kegagalan yang dapat diprediksi. Agregat penghematan pada portofolio 100 turbin dalam satu tahun fiskal dapat melebihi €20 juta, sebuah justifikasi bisnis yang kuat untuk adopsi metodologi ini.

---

## 2. Landasan Teori & Formulasi Matematis

Yucesan dan Viana (2023) mengusulkan arsitektur *Physics-informed Neural Network* (PINN) yang mengintegrasikan hukum mekanika fraktur ke dalam fungsi kerugian (*loss function*) jaringan saraf tiruan. Kerangka teoretis ini dibangun di atas tiga pilar matematis utama.

### 2.1 Model Mekanika Fraktur: Hukum Paris-Erdogan

Laju pertumbuhan retak lelah (*fatigue crack*) pada material bearing mengikuti hukum Paris-Erdogan:

$$\frac{da}{dN} = C(\Delta K)^m = C\left(Y\sigma\sqrt{\pi a}\right)^m$$

di mana $a$ adalah panjang retak (mm), $N$ adalah jumlah siklus beban, $\Delta K$ adalah rentang faktor intensitas tegangan ($\text{MPa}\sqrt{\text{mm}}$), $Y$ adalah faktor geometri (untuk bearing spherical roller tipikal $Y \approx 1{,}0$–$1{,}2$), $\sigma$ adalah rentang tegangan tarik, sedangkan $C$ dan $m$ adalah konstanta material. Untuk baja bantalan AISI 52100 (baja krom tinggi), nilai tipikal parameter material ini pada regim Paris adalah $C = 1{,}5 \times 10^{-11}$ dan $m = 3{,}0$ (dengan $\Delta K$ dalam $\text{MPa}\sqrt{\text{m}}$). Persamaan ini diselesaikan secara analitik untuk memprediksi jumlah siklus hingga retak mencapai panjang kritis $a_c$:

$$N_f = \int_{a_0}^{a_c} \frac{da}{C(Y\sigma\sqrt{\pi a})^m} = \frac{a_0^{1-m/2} - a_c^{1-m/2}}{C Y^m \sigma^m \pi^{m/2} \left(1 - \frac{m}{2}\right)}$$

dengan $a_0$ adalah panjang retak awal yang terdeteksi (umumnya 0,1–0,5 mm pada kemampuan deteksi *eddy current testing*).

### 2.2 Model Kerusakan Kumulatif Palmgren-Miner

Karena beban pada bearing turbin angin bersifat variabel terhadap waktu (akibat fluktuasi kecepatan angin dan siklus operasional), diperlukan model kerusakan kumulatif:

$$D = \sum_{i=1}^{k} \frac{n_i}{N_i(\sigma_i)}$$

di mana $n_i$ adalah jumlah siklus pada tingkat tegangan $\sigma_i$, dan $N_i(\sigma_i)$ adalah jumlah siklus hingga kegagalan pada tingkat tegangan tersebut (diperoleh dari kurva S-N Wöhler $\sigma_a = \sigma_f' (2N_f)^b$). Kegagalan terjadi ketika $D \geq 1$.

### 2.3 Arsitektur PINN: Hybrid Loss Function

Inti kontribusi Yucesan dan Viana (2023) adalah formulasi fungsi kerugian hybrid yang memaksa jaringan saraf untuk tidak hanya meminimalkan kesalahan prediksi terhadap data observasi tetapi juga memenuhi kendala fisik dari hukum Paris:

$$\mathcal{L}_{total}(\theta) = w_{data}\mathcal{L}_{data} + w_{physics}\mathcal{L}_{physics} + w_{IC}\mathcal{L}_{IC}$$

dengan komponen-komponen:

$$\mathcal{L}_{data} = \frac{1}{N_{data}}\sum_{i=1}^{N_{data}}\left(a_{NN}(t_i, \theta) - a_{obs}(t_i)\right)^2$$

$$\mathcal{L}_{physics} = \frac{1}{N_{colloc}}\sum_{j=1}^{N_{colloc}}\left(\frac{\partial a_{NN}}{\partial t}\bigg|_{t_j} - f_{physics}(a_{NN}, t_j)\right)^2$$

$$\mathcal{L}_{IC} = \left(a_{NN}(t_0, \theta) - a_0\right)^2$$

di mana $a_{NN}(t, \theta)$ adalah prediksi panjang retak oleh jaringan saraf dengan parameter $\theta$, $f_{physics}$ adalah representasi diskret dari hukum Paris (menggunakan *automatic differentiation* untuk menghitung $\partial a_{NN}/\partial t$), $w_{data}$, $w_{physics}$, $w_{IC}$ adalah bobot relatif yang di-tune selama pelatihan, dan $N_{colloc}$ adalah jumlah titik kolokasi (collocation points) tempat kendala fisik dievaluasi.

### 2.4 Model Beban dan Persamaan Gerak

Untuk bearing utama turbin, persamaan beban dinamis mengikuti:

$$F_{bearing}(t) = F_{gravity} + F_{thrust}(t) + F_{gyroscopic}(t)$$

dengan gaya aerodinamis:

$$F_{thrust}(t) = \frac{1}{2}\rho_{air} C_T A_{rotor} v(t)^2$$

di mana $\rho_{air}$ adalah densitas udara ($1{,}225 \text{ kg/m}^3$ pada kondisi standar), $C_T$ adalah koefisien thrust ($0{,}8$–$1{,}2$ tergantung pitch angle), $A_{rotor}$ adalah luas sapuan rotor, dan $v(t)$ adalah kecepatan angin sebagai fungsi waktu. Tegangan geser $(\tau)$ pada jalur kontak bearing dapat diturunkan dari teori Hertz:

$$\tau_{max} = \tau_0 \cdot \exp\left(f \cdot \frac{P}{P_0}\right)$$

di mana $\tau_0$ adalah tegangan referensi pada kondisi tanpa beban dan $f$ adalah faktor beban-operasi.

### 2.5 Representasi Stokastik

Karena variabilitas lingkungan dan operasional, Yucesan dan Viana (2023) mengadopsi pendekatan stokastik dengan memodelkan $C$ sebagai variabel acak berdistribusi lognormal: $C \sim \text{Lognormal}(\mu_C, \sigma_C^2)$, sehingga menghasilkan distribusi probabilistik RUL yang lebih informatif bagi pengambil keputusan pemeliharaan daripada estimasi titik (*point estimate*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pendekatan PINN untuk prognosis bearing utama turbin angin mengikuti prosedur operasional baku yang dirancang oleh Yucesan dan Viana (2023), dapat distandarkan sebagai berikut:

**Tahap 1: Akuisisi Data Sensor & Pra-Pemrosesan.** Data historis operasi turbin dikumpulkan dari SCADA (*Supervisory Control and Data Acquisition*) system dengan resolusi 10-menit, mencakup: kecepatan angin, suhu bearing (*bearing temperature*), getaran aksial/radial, daya output, status pitch, dan jumlah siklus start/stop. Data mentah melalui tahapan *outlier removal* menggunakan *z-score threshold* $|z| > 3{,}5$, normalisasi *min-max*, dan *rainflow counting* untuk mengekstrak histogram siklus beban.

**Tahap 2: Konstruksi Model Beban Operasional.** Distribusi probabilistik kecepatan angin dimodelkan menggunakan distribusi Weibull dua-parameter: $f(v) = \frac{k}{c}\left(\frac{v}{c}\right)^{k-1}\exp\left[-\left(\frac{v}{c}\right)^k\right]$, dengan parameter tipikal $k = 2{,}0$ dan $c = 8{,}5 \text{ m/s}$ untuk lokasi onshore Eropa Utara.

**Tahap 3: Estimasi Panjang Retak Awal.** Menggunakan data *eddy current* atau *ultrasonic testing* historis, $$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.

$$
