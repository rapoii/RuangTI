# 1405 — Proses Oksidasi Lanjut untuk Pengolahan Air dan Air Limbah: Panduan Sistematis Riset Masa Depan, Optimasi Berbasis Kecerdasan Buatan, dan Standardisasi Skala Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Advanced oxidation processes for water and wastewater treatment – Guidance for systematic future research
**Jurnal & Sitasi Utama:** Uwe Hübner, Stephanie Spahr, Holger V. Lutze (2024). *Heliyon*. DOI: [https://doi.org/10.1016/j.heliyon.2024.e30402](https://doi.org/10.1016/j.heliyon.2024.e30402)
**Sitasi Pendukung:** Mohsen Soori, Behrooz Arezoo, Roza Dastres (2023). *Cognitive Robotics*. DOI: [https://doi.org/10.1016/j.cogr.2023.04.001](https://doi.org/10.1016/j.cogr.2023.04.001)

---

## 1. Pendahuluan dan Konteks Industri

Pengolahan air dan air limbah merupakan salah satu rantai pasok paling kritik dalam infrastruktur industri modern, mencakup sektor farmasi, petrokimia, tekstil, semikonduktor, serta utilitas kota. Dalam dua dekade terakhir, **Advanced Oxidation Processes (AOPs)** — proses oksidasi lanjut yang mengandalkan generasi radikal hidroksil (HO•) dengan potensial oksidasi standar $E^0 = +2{,}80$ V vs SHE — muncul sebagai teknologi unggulan untuk degradasi mikropolutan organik refraktori, kontaminan yang tidak dapat ditangani secara efektif oleh proses biologis konvensional (Hübner, Spahr, & Lutze, 2024, DOI: [10.1016/j.heliyon.2024.e30402](https://doi.org/10.1016/j.heliyon.2024.e30402)). Urgensi industri terhadap AOPs didorong oleh tiga faktor struktural: (i) regulasi emisi yang semakin ketat terhadap *emerging contaminants* seperti PFAS, pestisida, dan produk farmasi; (ii) kebutuhan daur ulang air (*water reuse*) untuk mengurangi ketergantungan pada sumber air baku di tengah perubahan iklim; dan (iii) tuntutan efisiensi energi dalam operasional *water treatment plant* (WTP) berskala besar.

Hübner dkk. (2024) menyoroti permasalahan fundamental dalam adopsi AOPs: meskipun lebih dari 5.000 publikasi ilmiah tentang AOPs telah dihasilkan, **tingkat transisi dari skala laboratorium ke pilot dan full-scale masih rendah**. Inkonsistensi dalam pendekatan eksperimental — variasi matriks air, dosis oksidan, kondisi pH, suhu, dan metrik evaluasi — menghambat komparabilitas, identifikasi proses paling prospektif, serta pemodelan *upscaling*. Sebagai contoh, laporan kinerja AOPs berbasis ozon (O₃/H₂O₂) dari dua laboratorium berbeda dapat bervariasi hingga tiga orde magnitudo akibat perbedaan mendasar dalam kontrol kualitas air umpan dan protokol sampling. *Tutorial review* Hübner dkk. (2024) hadir sebagai respon terhadap *gap* ini dengan mengusulkan kerangka kerja terstandar untuk eksperimen AOPs yang *scalable* dan komparabel.

Di sisi lain, Soori, Arezoo, dan Dastres (2023) dalam *Cognitive Robotics* menunjukkan bahwa **Artificial Intelligence (AI), Machine Learning (ML), dan Deep Learning (DL)** telah merevolusi bidang robotika tingkat lanjut dengan aplikasi pada navigasi otonom, pengenalan objek, *predictive maintenance*, dan optimalisasi proses manufaktur (DOI: [10.1016/j.cogr.2023.04.001](https://doi.org/10.1016/j.cogr.2023.04.001)). Relevansi langsung terhadap AOPs terletak pada potensi *coupling*: algoritma *supervised learning* seperti *Random Forest*, *Gradient Boosting*, dan *Recurrent Neural Networks* (RNN) dapat digunakan untuk memprediksi konsentrasi HO• steady-state, konsumsi energi spesifik (*Electrical Energy per Order*, EE/O), serta pembentukan *transformation products* (TPs) berdasarkan parameter operasi multivariat. Sinergi AOPs + AI menjadi agenda riset masa depan yang strategis bagi teknik industri karena memungkinkan pengurangan biaya eksperimen laboratorium hingga 60–80% melalui *surrogate modeling*.

Dengan demikian, modul ini membahas: (a) landasan matematis AOPs, (b) prosedur operasi standar (SOP) yang diajukan Hübner dkk. (2024), (c) studi kasus kuantitatif dengan perhitungan EE/O dan kinetika degradasi, serta (d) integrasi dengan ML/DL untuk optimasi proses dan standardisasi masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Reaksi Pseudo-Orde Satu

Degradasi mikropolutan target $P$ dalam sistem AOPs mengikuti kinetika pseudo-orde satu ketika konsentrasi HO• dan spesies oksidan lainnya berada dalam kondisi *steady-state*:

$$\frac{dC_P}{dt} = -k_{obs} \cdot C_P \quad \Rightarrow \quad \ln\left(\frac{C_P(t)}{C_{P,0}}\right) = -k_{obs} \cdot t$$

di mana $C_P(t)$ adalah konsentrasi polutan pada waktu $t$ (mg/L atau µM), $C_{P,0}$ konsentrasi awal, dan $k_{obs}$ konstanta laju observasi (s⁻¹). Waktu paruh degradasi didefinisikan sebagai:

$$t_{1/2} = \frac{\ln 2}{k_{obs}} \approx \frac{0{,}693}{k_{obs}}$$

### 2.2 Konstanta Laju Komposit

Menurut Hübner dkk. (2024), $k_{obs}$ merupakan kontribusi aditif dari berbagai jalur oksidasi:

$$k_{obs} = k_{\bullet OH,\,P} \cdot [\text{HO}^\bullet]_{ss} + k_{O_3,\,P} \cdot [O_3]_{ss} + \sum_i k_{i,\,P} \cdot [S_i]_{ss}$$

di mana $k_{\bullet OH,\,P}$ adalah konstanta laju orde dua reaksi polutan dengan HO• (umumnya $10^8$–$10^{10}$ M⁻¹s⁻¹), $[\text{HO}^\bullet]_{ss}$ konsentrasi *steady-state* radikal hidroksil (tipikal $10^{-13}$–$10^{-11}$ M untuk AOPs berbasis ozon), dan $[O_3]_{ss}$ konsentrasi ozon terlarut sisa. Sebagai contoh, untuk senyawa target atrazin: $k_{\bullet OH,\,atrazin} = 3{,}0 \times 10^9$ M⁻¹s⁻¹ dan $k_{O_3,\,atrazin} = 6{,}3$ M⁻¹s⁻¹ (Hübner dkk., 2024).

### 2.3 *Electrical Energy per Order* (EE/O)

Metrik efisiensi energi paling umum dalam AOPs adalah EE/O, yang didefinisikan sebagai energi listrik (kWh) yang dibutuhkan untuk menurunkan konsentrasi polutan sebanyak satu orde magnitudo (faktor 10) per m³ air terolah:

$$EE/O = \frac{P}{Q \cdot \log_{10}\left(\frac{C_{P,0}}{C_P}\right)}$$

di mana $P$ adalah daya listrik input (kW), $Q$ debit volumetrik (m³/h), dan $\log_{10}(C_{P,0}/C_P)$ jumlah orde penurunan. EE/O digunakan untuk membandingkan AOPs yang berbeda secara langsung: untuk senyawa yang mudah teroksidasi, EE/O < 1 kWh/m³/order; untuk senyawa refraktori, EE/O dapat mencapai 100–1000 kWh/m³/order.

### 2.4 Model *Mass Transfer* Ozon

Transfer ozon dari fase gas ke fase cair遵循 persamaan *two-film*:

$$\frac{d[O_3]}{dt} = k_L a \cdot \left([O_3]^* - [O_3]\right) - r_{O_3}$$

di mana $k_L a$ adalah koefisien transfer volumetrik (s⁻¹), $[O_3]^*$ konsentrasi saturasi sesuai hukum Henry ($H_{O_3} \approx 0{,}082$ M·atm⁻¹ pada 25°C), dan $r_{O_3}$ laju konsumsi ozon oleh reaksi di fase cair. Hübner dkk. (2024) menekankan bahwa pelaporan $k_L a$ dan profil konsentrasi ozon terlarut merupakan parameter wajib untuk memastikan reproducibility eksperimen AOPs berbasis ozon.

### 2.5 Formulasi AI/ML sebagai Surrogate Model

Dari perspektif Soori dkk. (2023), integrasi ML dapat diformulasikan sebagai fungsi pemetaan:

$$\hat{y} = f_\theta(\mathbf{x}) + \epsilon$$

di mana $\hat{y}$ adalah output prediksi (misalnya $k_{obs}$, EE/O, atau $[\text{HO}^\bullet]_{ss}$), $\mathbf{x} = [pH, T, [O_3]_0, [H_2O_2]_0, C_{P,0}, \text{TOC}, \text{alkalinitas}]^T$ vektor fitur operasi, $f_\theta$ adalah model parametrik (misalnya *feedforward neural network*), dan $\epsilon$ galat residu. Pelatihan menggunakan *loss function*:

$$\mathcal{L}(\theta) = \frac{1}{N}\sum_{i=1}^{N}\left(y_i - f_\theta(\mathbf{x}_i)\right)^2 + \lambda \|\theta\|_2^2$$

dengan regularisasi L2 ($\lambda$) untuk mencegah *overfitting*. Pendekatan ini memungkinkan prediksi real-time dan *process control* adaptif.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Hübner dkk. (2024) mengusulkan kerangka SOP yang terdiri dari **lima tahap utama** untuk memastikan eksperimen AOPs yang *scalable