# 929 — Dewatering Tailings Tambang Industri Menggunakan Deep Cone Thickener: Rheologi Slurry Non-Newtonian, Kinetika Pengendapan Flokulan, dan Hidrodinamika Pompa Underflow

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Deep Cone Thickener Dewatering of Industrial Mine Tailings: Non-Newtonian Yield Stress Slurry Rheology, Flocculant Settling Kinetics, and Underflow Pumping Hydrodynamics  
**Standar & Referensi Utama:** Jewell & Fourie (Paste and Thickened Tailings, Australian Centre for Geomechanics); ASTM D4648; Slatter (Rheology of High Density Tailings)

---

## 1. Pendahuluan dan Konteks Industri

Dewatering tailings tambang merupakan salah satu tantangan utama dalam industri pertambangan modern. Proses ini tidak hanya penting untuk mengurangi volume limbah yang dihasilkan, tetapi juga untuk meminimalkan dampak lingkungan dan meningkatkan efisiensi operasional. Dalam konteks ini, penggunaan deep cone thickener menjadi semakin relevan, terutama dalam pengolahan tailings yang bersifat non-Newtonian. Tailings yang dihasilkan dari proses ekstraksi mineral sering kali memiliki karakteristik rheologi yang kompleks, termasuk yield stress yang tinggi, yang mempengaruhi proses pengendapan dan pemisahan air.

Berdasarkan Jewell & Fourie (2016), pengelolaan tailings yang efektif dapat mengurangi biaya transportasi dan penyimpanan, serta meningkatkan pemulihan sumber daya. Namun, tantangan yang dihadapi termasuk variabilitas sifat fisik tailings, kebutuhan untuk mengoptimalkan penggunaan flokulan, dan pemilihan pompa yang tepat untuk mengalirkan slurry kental. Keterbatasan dalam pemahaman tentang kinetika pengendapan flokulan dan hidrodinamika pompa dapat menyebabkan inefisiensi, yang berujung pada peningkatan biaya operasional dan risiko lingkungan.

Dalam konteks ini, penting untuk mengembangkan metodologi yang sistematis untuk menganalisis dan merancang sistem dewatering yang efisien. Dengan memanfaatkan prinsip-prinsip rekayasa dan standar yang ada, kita dapat meningkatkan pemahaman tentang proses ini dan merumuskan solusi yang lebih baik untuk tantangan yang ada di industri pertambangan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Rheologi Slurry Non-Newtonian

Slurry tailings sering kali menunjukkan perilaku non-Newtonian, di mana viskositasnya bergantung pada laju geser. Salah satu model yang umum digunakan untuk menggambarkan perilaku ini adalah model Bingham, yang didefinisikan sebagai:

$$
\tau = \tau_y + \eta \frac{du}{dy}
$$

di mana:
- $\tau$ = tegangan geser (Pa)
- $\tau_y$ = yield stress (Pa)
- $\eta$ = viskositas (Pa.s)
- $\frac{du}{dy}$ = laju geser (s$^{-1}$)

### 2.2 Kinetika Pengendapan Flokulan

Kinetika pengendapan flokulan dapat dimodelkan menggunakan hukum Stokes untuk partikel bulat, yang dinyatakan sebagai:

$$
v = \frac{2}{9} \frac{(r^2)(\rho_p - \rho_f)g}{\mu}
$$

di mana:
- $v$ = kecepatan pengendapan (m/s)
- $r$ = jari-jari partikel (m)
- $\rho_p$ = densitas partikel (kg/m³)
- $\rho_f$ = densitas fluida (kg/m³)
- $g$ = percepatan gravitasi (m/s²)
- $\mu$ = viskositas fluida (Pa.s)

### 2.3 Hidrodinamika Pompa Underflow

Hidrodinamika pompa untuk slurry kental dapat dianalisis dengan menggunakan persamaan Bernoulli yang dimodifikasi untuk mempertimbangkan kehilangan energi akibat gesekan:

$$
P_1 + \frac{1}{2} \rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2} \rho v_2^2 + \rho g h_2 + h_f
$$

di mana:
- $P_1$, $P_2$ = tekanan (Pa)
- $\rho$ = densitas slurry (kg/m³)
- $v_1$, $v_2$ = kecepatan aliran (m/s)
- $h_1$, $h_2$ = tinggi (m)
- $h_f$ = kehilangan energi akibat gesekan (m)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Langkah-langkah Implementasi

1. **Karakterisasi Tailings**: Lakukan analisis laboratorium untuk menentukan sifat fisik dan rheologi tailings, termasuk yield stress dan viskositas.
2. **Pemilihan Flokulan**: Uji berbagai jenis flokulan untuk menentukan yang paling efektif dalam meningkatkan kecepatan pengendapan.
3. **Desain Deep Cone Thickener**: Rancang geometris deep cone thickener berdasarkan karakteristik slurry dan hasil pengujian flokulan.
4. **Simulasi Hidrodinamika**: Gunakan perangkat lunak simulasi untuk menganalisis aliran slurry dalam thickener dan sistem pompa.
5. **Pengujian Lapangan**: Implementasikan sistem di lokasi tambang dan lakukan pengujian untuk memverifikasi kinerja.

### 3.2 Diagram Alir Proses

```plaintext
+-------------------+       +---------------------+
| Karakterisasi     | ----> | Pemilihan Flokulan  |
| Tailings          |       +---------------------+
+-------------------+                 |
                                      v
                             +---------------------+
                             | Desain Deep Cone    |
                             | Thickener           |
                             +---------------------+
                                      |
                                      v
                             +---------------------+
                             | Simulasi Hidrodinamika|
                             +---------------------+
                                      |
                                      v
                             +---------------------+
                             | Pengujian Lapangan  |
                             +---------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Misalkan kita memiliki tailings dengan parameter berikut:
- Yield stress ($\tau_y$) = 50 Pa
- Viskositas ($\eta$) = 100 Pa.s
- Densitas partikel ($\rho_p$) = 2500 kg/m³
- Densitas fluida ($\rho_f$) = 1000 kg/m³
- Jari-jari partikel ($r$) = 0.01 m

### 4.2 Langkah Kalkulasi

1. **Hitung kecepatan pengendapan menggunakan hukum Stokes**:

$$
v = \frac{2}{9} \frac{(0.01^2)(2500 - 1000)(9.81)}{100} = \frac{2}{9} \frac{(0.0001)(1500)(9.81)}{100} = 0.00033 \text{ m/s}
$$

2. **Hitung kehilangan energi akibat gesekan** (misalkan $h_f = 5$ m):

$$
P_1 + \frac{1}{2} \rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2} \rho v_2^2 + \rho g h_2 + 5
$$

Dengan asumsi $P_1 = P_2 = 0$ dan $h_1 = h_2 = 0$, kita dapat menyederhanakan persamaan untuk menghitung kecepatan aliran.

### 4.3 Interpretasi Hasil

Kecepatan pengendapan yang rendah menunjukkan bahwa slurry memiliki yield stress yang signifikan, sehingga memerlukan pengolahan lebih lanjut untuk meningkatkan efisiensi dewatering. Penggunaan flokulan yang tepat dapat meningkatkan kecepatan pengendapan dan mengurangi waktu tinggal dalam thickener.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Proses dewatering tailings tidak hanya relevan dalam industri pertambangan, tetapi juga memiliki aplikasi dalam sektor lain seperti pengolahan limbah, industri kimia, dan pengolahan air. Integrasi teknologi otomasi dan sensor dalam proses ini dapat meningkatkan efisiensi dan mengurangi biaya operasional.

Namun, tantangan yang dihadapi termasuk variabilitas sifat tailings dan kebutuhan untuk mematuhi standar lingkungan yang ketat. Penelitian masa depan harus fokus pada pengembangan teknologi baru untuk meningkatkan efisiensi pengendapan dan mengurangi dampak lingkungan dari tailings.

Dengan memahami dan menerapkan prinsip-prinsip ini, kita dapat merumuskan solusi yang lebih baik untuk tantangan yang dihadapi dalam pengelolaan tailings, serta berkontribusi pada keberlanjutan industri pertambangan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
