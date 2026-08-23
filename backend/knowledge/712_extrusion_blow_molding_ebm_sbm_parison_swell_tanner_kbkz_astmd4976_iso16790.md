# Modul 712: Extrusion Blow Molding (EBM) & Stretch Blow Molding (SBM): Kinetika Parison Die Swell (Tanner Elastic Recovery), Viskoelastisitas Non-Newtonian Polimer (K-BKZ Model), Inflasi Peregangan Termomekanis Biaxially Oriented, dan Optimasi Distribusi Ketebalan Dinding Wadah (ISO 16790, ASTM D4976 & ASTM D2911)

## 1. Konsep Dasar, Fenomenologi Polimer Molten, dan Arsitektur Sistem Blow Molding

Dalam industri kemasan massal, tangki bahan bakar otomotif (*automotive fuel tanks*), kontainer kimia berbahaya (*intermediate bulk containers* / IBC), serta botol minuman bertekanan (*carbonated soft drink* / CSD), proses pencetakan tiup (**Blow Molding**) merupakan metode manufaktur polimer berongga (*hollow plastic products*) paling dominan secara global. 

Proses ini secara umum terbagi ke dalam dua paradigma utama:
1. **Extrusion Blow Molding (EBM)**: Ekstrusi kontinyu atau intermiten (*accumulator head*) dari lelehan polimer termoplastik berberat molekul tinggi (seperti HDPE, PP, HMW-HDPE) melalui die annular untuk membentuk tabung lelehan vertikal yang disebut **parison**. Parison kemudian dijepit oleh cetakan dua rongga (*split mold*), dipotong, dan ditiup dengan udara bertekanan ($0.4 - 1.0\ \text{MPa}$) hingga menempel pada dinding cetakan yang didinginkan.
2. **Injection Stretch Blow Molding (ISBM / RSBM)**: Proses dua tahap (atau satu tahap terintegrasi) yang umum diterapkan pada Polyethylene Terephthalate (PET). Preform berulir yang dihasilkan dari *injection molding* dipanaskan kembali di atas temperatur transisi gelas ($T_g < T < T_m$), diregangkan secara mekanis secara aksial menggunakan batang peregang (*stretch rod*), dan ditiup secara radial dalam dua tahap (*pre-blow* dan *final blow*) untuk mencapai orientasi molekuler biaksial (*biaxial molecular orientation*).

```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|               ARSITEKTUR PERBANDINGAN SIKLUS PROSES EBM DAN ISBM/RSBM INDUSTRI                    |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|                                                                                                   |
|   A. EXTRUSION BLOW MOLDING (EBM)                                                                 |
|      +-----------------+      +------------------+      +------------------+      +-------------+ |
|      | Ekstruder Ulir  | ───► | Parison Swell &  | ───► | Penjepitan Mold  | ───► | Tiupan &    | |
|      | (Melt Homogen)  |      | Sagging Vertikal |      | & Pinch-Off      |      | Ejection    | |
|      +-----------------+      +------------------+      +------------------+      +-------------+ |
|                                                                                                   |
|   B. REHEAT STRETCH BLOW MOLDING (ISBM / RSBM)                                                    |
|      +-----------------+      +------------------+      +------------------+      +-------------+ |
|      | Injeksi Preform | ───► | Pemanasan Oven IR| ───► | Peregangan Aksial| ───► | Tiupan Ganda| |
|      | Awal (Amorf)    |      | (T_g + 15°C~35°C)|      | (Stretch Rod)    |      | & Biaxial OR| |
|      +-----------------+      +------------------+      +------------------+      +-------------+ |
|                                                                                                   |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
```

### Fenomenologi Fisika & Reologi Kritis
Keberhasilan proses blow molding dikendalikan oleh interaksi kompleks antara:
- **Die Swell / Extrudate Swell**: Pemulihan elastis (*elastic strain recovery*) dari rantai makromolekul yang terdeformasi geser dan terorientasi saat mengalir melalui celah die (*die gap*).
- **Parison Sagging**: Deformasi mulur gravitasi (*gravitational creep sag*) yang menarik parison ke bawah, menyebabkan penipisan dinding pada bagian atas dan penebalan pada bagian bawah sebelum cetakan tertutup.
- **Pinch-Off Sealing**: Pengelasan fasa leleh pada garis pertemuan bawah (*parting line*) yang menentukan kekuatan mekanis impak dan ketahanan retak lingkungan (*Environmental Stress Crack Resistance* / ESCR).
- **Biaxial Strain-Induced Crystallization (SIC)**: Peningkatan kekuatan tarik, modulus elastisitas, dan sifat penghalang gas (*gas barrier properties*) akibat penyelarasan rantai rantai polimer PET selama peregangan biaksial.

---

## 2. Reologi Lelehan Polimer & Fenomena Parison Swell

Saat lelehan polimer kental elastis (*viscoelastic polymer melt*) dipaksa mengalir melalui die konvergen dan saluran bibir die (*die land*), rantai-rantai molekul mengalami orientasi regangan geser dan ekstensional. Begitu lelehan keluar dari batas dinding saluran die menuju atmosfer bebas, energi elastis yang tersimpan dilepaskan, menyebabkan ekspansi diameter dan ketebalan lelehan yang signifikan.

```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|               MEKANIKA DIE SWELL DAN RELAKSASI ELASTIS PADA BIBIR DIE ANNULAR                     |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|                                                                                                   |
|                     │ ◄─── D_die (Diameter Luar Die) ───► │                                       |
|                  ┌──┴─────────────────────────────────────┴──┐                                    |
|                  │           Bibir Die (Die Lips)            │                                    |
|                  │   Tegangan Geser Dinding: \tau_w          │                                    |
|                  │   Perbedaan Tegangan Normal: N_1          │                                    |
|                  └──┬─────────────────────────────────────┬──┘                                    |
|                     │ ◄─────────── h_die (Celah) ────────►│                                       |
|                     │                                     │                                       |
|                     ▼  Titik Pelepasan Tekanan Atmosfer   ▼                                       |
|                   (                                         )                                     |
|                  (    Rekoveri Regangan Elastis Tanner       )                                    |
|                 (     Ekspansi Diameter: B_D = D_p / D_die    )                                   |
|                (      Ekspansi Tebal:    B_h = h_p / h_die     )                                  |
|               (                                                 )                                 |
|               │ ◄──────── D_p (Diameter Parison Terbengkak) ───►│                                 |
|               │                                                 │                                 |
|               │  Gaya Gravitasi: Sagging Penipisan Parison       │                                 |
|               ▼                                                 ▼                                 |
|                                                                                                   |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
```

### 2.1 Model Pemulihan Elastis Tanner (*Tanner Elastic Recovery Equation*)
Model analitis Tanner menghubungkan rasio pembengkakan ekstrudat isotermal total ($B$) dengan perbedaan tegangan normal pertama (*first normal stress difference*, $N_1 = \sigma_{11} - \sigma_{22}$) dan tegangan geser dinding (*wall shear stress*, $\tau_w$):

$$B = \frac{h_p}{h_{\text{die}}} = \left[ 1 + \frac{1}{2} \left( \frac{N_1}{2\tau_w} \right)^2 \right]^{1/6} + 0.1$$

di mana:
- $h_p$ adalah ketebalan dinding parison setelah relaksasi bebas ($\text{mm}$).
- $h_{\text{die}}$ adalah celah bukaan die (*die gap opening*, $\text{mm}$).
- $N_1 / (2\tau_w) = S_R$ merepresentasikan rasio keterpulihan elastis (*recoverable shear strain*).
- Konstanta $0.1$ adalah koreksi hidrodinamika Newton (*Newtonian swelling baseline* $B_0 \approx 1.10$ untuk geometri celah planar/slit).

Untuk die annular silindris tipis dengan rasio diameter $R_o / R_i \approx 1$, rasio pembengkakan diameter ($B_D$) dan pembengkakan ketebalan ($B_h$) terkait melalui kekekalan massa tak mampu-mampat (*incompressible mass conservation*):

$$B_D = \frac{D_p}{D_{\text{die}}}, \quad B_h = \frac{h_p}{h_{\text{die}}}$$

$$B_w = B_D \cdot B_h = \frac{A_p}{A_{\text{die}}} \approx B^2$$

### 2.2 Model Konstitutif Viskoelastis Integral K-BKZ (*Kaye-Bernstein-Kearsley-Zapas*)
Dalam rezim deformasi non-linier transien, tegangan total tensor $\boldsymbol{\sigma}(t)$ dari lelehan polimer dimodelkan secara akurat melalui formulasi integral memori masa lalu:

$$\boldsymbol{\sigma}(t) = -p \mathbf{I} + \int_{-\infty}^{t} m(t - t') \left[ \phi_1(I_1, I_2) \mathbf{C}_t^{-1}(t') + \phi_2(I_1, I_2) \mathbf{C}_t(t') \right] dt'$$

di mana:
- $p$ adalah tekanan hidrostatis isotropik.
- $\mathbf{C}_t(t')$ dan $\mathbf{C}_t^{-1}(t')$ berturut-turut adalah tensor deformasi Cauchy-Green kanan dan tensor Finger relatif terhadap konfigurasi waktu $t$.
- $m(t - t')$ adalah fungsi memori relaksasi linier, didekomposisi ke dalam deret Maxwell-Prony:

$$m(t - t') = \sum_{k=1}^{M} \frac{g_k}{\lambda_k} \exp\left( -\frac{t - t'}{\lambda_k} \right)$$

- $\phi_1, \phi_2$ adalah fungsi redaman regangan (*damping functions*) Wagner-Papanastasiou:

$$\phi(I_1, I_2) = \frac{\alpha}{(\alpha - 3) + \beta I_1 + (1 - \beta) I_2}$$

dengan $I_1 = \text{tr}(\mathbf{C}_t^{-1})$ dan $I_2 = \text{tr}(\mathbf{C}_t)$ merupakan invarian pertama dan kedua dari tensor regangan, sedangkan $\alpha, \beta$ adalah parameter nonlinier material.

---

## 3. Dinamika Gabungan Swell vs. Sagging dan Parison Programming

Saat parison diekstrusi vertikal ke bawah, dua fenomena yang berlawanan bersaing secara dinamis:
1. **Swell Kinetics**: Menyebabkan parison mengembang secara radial dan menebal secara eksponensial terhadap waktu relaksasi polimer $\lambda$.
2. **Gravitational Sagging**: Menarik massa parison ke bawah di bawah percepatan gravitasi $g$, memperpanjang parison dan menipiskan penampang bagian atas.

```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|               PROFIL DISTRIBUSI TEBAL PARISON AKIBAT SWELLING VS. SAGGING                         |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|                                                                                                   |
|   Posisi z                                                                                        |
|   ┌───────┐  z = 0 (Bibir Die) ──► Mengalami Swell Maksimum (Baru Keluar, Belum Terbebani Berat)  |
|   │       │                                                                                       |
|   │   │   │                                                                                       |
|   │   │   │  Bagian Atas Parison ──► Mengalami Regangan Tarik Maksimum Akibat Berat Total Massa    |
|   │   │   │                          di Bawahnya (Dinding Menjadi Paling Tipis / Sagging Berat)   |
|   │   │   │                                                                                       |
|   │   │   │                                                                                       |
|   │       │                                                                                       |
|   │       │  Bagian Bawah Parison ──► Waktu Relaksasi Swell Terpanjang, Beban Gravitasi Nol       |
|   └───────┘  z = L (Ujung Bawah)      (Dinding Cenderung Paling Tebal dan Diameter Mengembang)    |
|                                                                                                   |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
```

### 3.1 Formulasi Diferensial Laju Penipisan Sagging
Untuk elemen massa parison pada koordinat Lagrangian $z$ dari ujung bawah, gaya tarik aksial gravitasi $F_g(z, t)$ adalah berat seluruh bagian di bawahnya:

$$F_g(z, t) = \int_{0}^{z} \rho_m g A(z', t) \, dz'$$

Laju regangan perpanjangan aksial akibat mulur gravitasi ($\dot{\varepsilon}_{zz}$) dikendalikan oleh viskositas ekstensional transien Trouton $\eta_E(\dot{\varepsilon}, t)$:

$$\dot{\varepsilon}_{zz}(z, t) = \frac{\partial v_z}{\partial z} = \frac{F_g(z, t)}{A(z, t) \cdot \eta_E(\dot{\varepsilon}, t)}$$

Ketebalan lokal $h(z, t)$ pada sembarang elevasi memenuhi persamaan kontinuitas:

$$\frac{\partial h(z, t)}{\partial t} + v_z \frac{\partial h(z, t)}{\partial z} = h(z, t) \left( \frac{1}{B_h} \frac{d B_h}{dt} - \frac{1}{2} \dot{\varepsilon}_{zz}(z, t) \right)$$

### 3.2 Parison Programming (Electronic Die Gap Profiling)
Untuk mengimbangi penipisan akibat gravitasi dan rasio peniupan yang bervariasi di sepanjang cetakan kontur kompleks, sistem modern menggunakan aktuator hidrolik servo-proporsional berkecepatan tinggi yang mengatur posisi celah die $h_{\text{die}}(t)$ secara dinamis dalam 100 hingga 400 titik kendali:

$$h_{\text{die}}(t) = h_{\text{base}} \cdot \Psi(z(t))$$

di mana $\Psi(z(t))$ adalah fungsi profil bobot pemetaan invers (*inverse thickness mapping curve*) yang ditargetkan untuk menghasilkan ketebalan dinding produk akhir yang homogen.

---

## 4. Mekanika Inflasi Peniupan, Rasio Blow-Up (BUR), dan Distribusi Ketebalan Akhir

Setelah parison terkunci di dalam rongga cetakan dingin, udara terkompresi diinjeksikan melalui pin tiup (*blow pin*). Membran polimer cair meregang secara cepat hingga menyentuh permukaan dinding cetakan (*free inflation to contact phase*).

```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|               KINEMATIKA INFLASI RADIAL MEMBRAN PARISON KE DINDING CETAKAN                        |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|                                                                                                   |
|                       ┌───────────────────────────────────────┐                                   |
|                       │         Dinding Cetakan Dingin        │                                   |
|                       │     ┌───────────────────────────┐     │                                   |
|                       │     │  Inflasi Membran Polimer  │     │                                   |
|                       │     │        r(t), h(t)         │     │                                   |
|                       │     │             ▲             │     │                                   |
|                       │  ───┼─────────────┼─────────────┼───  │                                   |
|                       │     │   Tekanan   │ P_blow      │     │                                   |
|                       │     │             ▼             │     │                                   |
|                       │     └───────────────────────────┘     │                                   |
|                       │  Kontak Awal (Freeze Segitiga)        │                                   |
|                       └───────────────────────────────────────┘                                   |
|                                                                                                   |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
```

### 4.1 Definisi Rasio Peniupan Industri (*Blow Molding Ratios*)
1. **Blow-Up Ratio (BUR)**: Rasio diameter rongga cetakan maksimum ($D_{\text{mold}}$) terhadap diameter luar parison sebelum ditiup ($D_p$):

$$\text{BUR} = \frac{D_{\text{mold}}}{D_p}$$

2. **Parison Layflat Width ($W_{\text{LF}}$)**: Lebar parison saat dijepit rata oleh penarik atau cetakan:

$$W_{\text{LF}} = \frac{\pi}{2} D_p$$

3. **Length-to-Diameter Draw Ratio**:

$$\text{DR}_L = \frac{L_{\text{mold}}}{D_p}$$

### 4.2 Teorema Tipis Membran Laplace & Prediksi Ketebalan Dinding Silinder
Dengan mengasumsikan lelehan polimer tak mampu-mampat dan inflasi seragam sepanjang jari-jari radial $r$, ketebalan dinding produk akhir pada bagian silindris sederhana $t_{\text{part}}$ dihitung dari kekekalan volume:

$$t_{\text{part}}(r) = h_p \cdot \left( \frac{R_p}{r} \right) = \frac{h_p}{\text{BUR}}$$

Untuk wadah prismatik persegi berdimensi panjang $L_b$, lebar $W_b$, dan radius sudut $R_c$, ketebalan dinding di sudut tajam (*corner wall thickness*, $t_{\text{corner}}$) mengalami penipisan paling kritis:

$$t_{\text{corner}} \approx t_{\text{flat}} \cdot \left( \frac{R_c}{\sqrt{L_b^2 + W_b^2} / 2} \right)^{n_g}$$

di mana $n_g \approx 0.65 - 0.85$ tergantung pada laju regangan dan temperatur pemadatan cetakan.

---

## 5. Termomekanika Stretch Blow Molding (ISBM / RSBM) pada Polimer PET

Pada pembentukan botol PET melalui Reheat Stretch Blow Molding (RSBM), preform amorf dipanaskan dalam rentang temperatur elastis-karet (*rubbery regime*, $95^\circ\text{C} - 115^\circ\text{C}$, tepat di atas $T_g \approx 78^\circ\text{C}$).

```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|         ORIENTASI BIAKSIAL & KRISTALISASI INDUKSI REGANGAN (SIC) PADA PET RSBM                    |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|                                                                                                   |
|   1. Preform Amorf Acak       2. Peregangan Aksial Rod       3. Inflasi Tiupan Radial             |
|      (Transparan, Rapuh)         (Rantai Terarah Z)             (Kristalit Terorientasi X-Y-Z)    |
|                                                                                                   |
|      O ~~~ O ~~~ O               |     |     |                  \   /   \   /   \   /             |
|        /     \                   |     |     |                   ─── O ─── O ─── O ───            |
|      O ~~~ O ~~~ O               |     |     |                  /   \   /   \   /   \             |
|                                                                                                   |
|      - Sifat Isotropik Rendah    - Penguatan Arah Mesin         - Kekuatan Tarik > 250 MPa        |
|      - Barrier CO2 Rendah        - Menghambat Necking           - Barrier CO2/O2 Naik 250%        |
|                                                                                                   |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
```

### 5.1 Model Pengerasan Regangan Biaksial (*Strain Hardening Modulus*)
Karakteristik deformasi PET di atas $T_g$ menunjukkan fenomena *natural draw ratio* ($\lambda_{\text{nat}} \approx 3.0 - 3.8$). Di atas rasio ini, tegangan melonjak secara asimtotik akibat penguncian jaringan rantai polimer (*entanglement network lock-up*).

Model konstitutif Buckley-Jones / Edwards-Vilgis untuk kerapatan energi regangan $W(\lambda_1, \lambda_2, \lambda_3)$:

$$W_{\text{visco}} = G_R \left[ \frac{(1 - \alpha_c) \sum \lambda_i^2}{1 - \alpha_c \sum \lambda_i^2 / I_{\text{max}}} + \ln\left(1 - \alpha_c \frac{\sum \lambda_i^2}{I_{\text{max}}}\right) \right] + K_b (\ln J)^2$$

di mana:
- $G_R$ adalah modulus elastisitas jaringan karet (*rubbery network modulus* $\approx 1.5 - 4.0\ \text{MPa}$).
- $I_{\text{max}}$ adalah batas kemampuan perpanjangan rantai molekul maksimum (*limiting chain extensibility*).
- $\alpha_c$ adalah koefisien interaksi antar ikatan rantai.

### 5.2 Rasio Penarikan Total Planar Area (*Total Planar Stretch Ratio*)
Untuk botol berkapasitas tinggi, rasio regangan total luas permukaan ($S_A$) didefinisikan sebagai perkalian rasio regangan hoop radial ($\lambda_{\theta}$) dan aksial ($\lambda_z$):

$$\lambda_{\theta} = \frac{D_{\text{bottle}}}{D_{\text{preform}}}, \quad \lambda_z = \frac{L_{\text{bottle}}}{L_{\text{preform}}}$$

$$S_A = \lambda_{\theta} \cdot \lambda_z$$

Untuk botol minuman berkarbonasi (CSD), nilai optimal $S_A$ berkisar antara $9.5$ hingga $12.5$ guna menjamin derajat kristalinitas regangan (*strain-induced crystallinity*, $X_c$) mencapai $30\% - 38\%$.

---

## 6. Standar Kualitas Internasional, Kualifikasi Pengujian & Mitigasi Cacat

Proses blow molding diatur secara ketat oleh standar internasional untuk menjamin integritas bejana tekan dan wadah bahan berbahaya:

### 6.1 Matriks Standar Pengujian Komoditas & Industri
| Standar | Ruang Lingkup & Parameter Uji | Batas Kualifikasi Standar |
| :--- | :--- | :--- |
| **ISO 16790** | Karakterisasi elongasional lelehan polimer termoplastik untuk proses pembentukan tiup | Rasio pengerasan regangan ekstensional $\chi_E \ge 1.8$ |
| **ASTM D4976** | Spesifikasi standar material plastik cetak tiup berbahan dasar Polietilena (PE) | Densitas: $0.941 - 0.965\ \text{g/cm}^3$, $\text{MFI}: 0.1 - 1.2\ \text{g/10 min}$ |
| **ASTM D2911** | Dimensi toleransi leher dan ulir botol plastik (*plastic bottle neck finish dimensions*) | Toleransi diameter luar ulir $T \pm 0.25\ \text{mm}$, alur E $\pm 0.20\ \text{mm}$ |
| **ASTM D2561** | Ketahanan retak akibat tegangan lingkungan (*Environmental Stress Crack Resistance* / ESCR) | $F_{50} \ge 100\ \text{jam}$ pada $50^\circ\text{C}$ dalam larutan $10\%$ Igepal CO-630 |
| **ISO 9008 / ASTM D2463** | Uji ketahanan jatuh bebas kontainer termoplastik (*Drop Impact Resistance*) | Ketinggian jatuh $\ge 1.8\ \text{m}$ tanpa retak atau kebocoran fluida |
| **ISO 22000 / FDA 21 CFR** | Kebersihan dan batas migrasi senyawa kimia pada botol pangan & farmasi | Migrasi global $< 10\ \text{mg/dm}^2$, konsentrasi asetaldehida $< 1.5\ \text{ppm}$ |

### 6.2 Matriks Diagnostik dan Mitigasi Cacat Blow Molding
```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|                 PANDUAN DIAGNOSTIK & SOLUSI CACAT PRODUKSI BLOW MOLDING                           |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|                                                                                                   |
|  Gejala Cacat               Akar Penyebab Termomekanis        Tindakan Koreksi Parameter Mesin    |
|  ─────────────────────────  ────────────────────────────────  ──────────────────────────────────  |
|  1. Bottom Pinch-Off Retak  Temperatur lelehan terlalu rendah Tingkatkan suhu pisau/pinch block;  |
|     / Bocor                 atau pinch land terlalu lebar.    perkecil land width (0.2-0.5 mm).   |
|                                                                                                   |
|  2. Variasi Tebal Aksial    Parison sagging berlebih akibat   Tingkatkan laju ekstrusi; optimalkan|
|     (Atas Tipis/Bawah Tebal)MFI tinggi atau siklus lambat.    profil servo parison programming.   |
|                                                                                                   |
|  3. Haze / Keruh pada PET   Suhu preform terlalu rendah (di   Naikkan daya lampu pemanas IR oven; |
|     (Pearlescence / Hazing) bawah Tg -> stress whitening)     turunkan laju peregangan aksial.    |
|                                                                                                   |
|  4. Dinding Melengkung      Pendinginan cetakan tidak merata  Periksa sirkulasi saluran pendingin |
|     (Warpage / Ovalitas)    atau waktu cooling terlalu pendek mold; naikkan flow rate chiller.    |
|                                                                                                   |
|  5. Permukaan Kulit Jeruk   Tekanan peniupan kurang atau      Naikkan tekanan blow (0.6-1.0 MPa); |
|     (Orange Peel / Rough)   de-aerasi cetakan tersumbat.      bersihkan saluran ventilasi udara.  |
|                                                                                                   |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
```

---

## 7. Implementasi Numerik & Algoritma Python Solver

Script Python mandiri berikut menghitung profil dinamika swell-sagging gabungan pada parison EBM, pemodelan inflasi ketebalan radial kontur, serta pemetaan profil parison programming servo untuk menghasilkan ketebalan dinding yang seragam.

```python
import numpy as np

def calculate_parison_and_blowing(
    die_outer_dia_mm: float = 30.0,
    die_gap_mm: float = 1.8,
    melt_density_kg_m3: float = 780.0,
    wall_shear_stress_kpa: float = 85.0,
    first_normal_stress_kpa: float = 180.0,
    extrusion_velocity_mm_s: float = 45.0,
    parison_length_mm: float = 500.0,
    extensional_viscosity_kpa_s: float = 120.0,
    bottle_outer_dia_mm: float = 85.0,
    target_wall_thickness_mm: float = 1.2,
    num_nodes: int = 50
):
    """
    Simulasi Reologi Extrusion Blow Molding:
    1. Perhitungan Die Swell melalui Model Tanner Elastic Recovery.
    2. Dinamika Sagging Gravitasi Transien sepanjang sumbu parison.
    3. Prediksi Ketebalan Dinding Akhir Pasca Inflasi Cetakan (BUR Laplace).
    4. Optimasi Profil Parison Programming (Die Gap Profiling).
    """
    # 1. Perhitungan Die Swell (Tanner Model)
    # S_R = N_1 / (2 * tau_w)
    recoverable_shear = (first_normal_stress_kpa * 1000.0) / (2.0 * wall_shear_stress_kpa * 1000.0)
    swell_ratio_thickness = (1.0 + 0.5 * (recoverable_shear ** 2)) ** (1.0 / 6.0) + 0.10
    swell_ratio_diameter = np.sqrt(swell_ratio_thickness)
    
    initial_parison_dia = die_outer_dia_mm * swell_ratio_diameter
    initial_parison_thick = die_gap_mm * swell_ratio_thickness
    
    # 2. Dinamika Sagging Gravitasi
    # Elemen z diukur dari bibir die (z=0) ke ujung bawah parison (z=L)
    z_coords = np.linspace(0, parison_length_mm, num_nodes)
    time_to_extrude = parison_length_mm / extrusion_velocity_mm_s
    g_accel = 9.81  # m/s^2
    
    # Waktu tinggal elemen di bawah gravitasi (elemen bawah mengalami gravitasi lebih lama)
    t_residence = (parison_length_mm - z_coords) / extrusion_velocity_mm_s
    
    # Massa di bawah titik z
    # Luas penampang parison terelaksasi (m^2)
    A_p0 = np.pi * (initial_parison_dia * 1e-3) * (initial_parison_thick * 1e-3)
    
    sagged_thickness = np.zeros(num_nodes)
    parison_dia_sagged = np.zeros(num_nodes)
    
    for i, z in enumerate(z_coords):
        mass_below_kg = melt_density_kg_m3 * A_p0 * ((parison_length_mm - z) * 1e-3)
        weight_force_N = mass_below_kg * g_accel
        
        # Tegangan tarik aksial sigma_zz (Pa)
        sigma_zz = weight_force_N / A_p0 if A_p0 > 0 else 0.0
        
        # Laju regangan ekstensional dan total regangan mulur
        eps_dot = sigma_zz / (extensional_viscosity_kpa_s * 1000.0)
        eps_sag = eps_dot * t_residence[i]
        
        # Reduksi ketebalan dan diameter akibat Poisson-like incompressibility (faktor exp(-0.5 * eps))
        sag_factor = np.exp(-0.5 * eps_sag)
        sagged_thickness[i] = initial_parison_thick * sag_factor
        parison_dia_sagged[i] = initial_parison_dia * sag_factor
        
    # 3. Inflasi Tiupan dan Distribusi Tebal Akhir Tanpa Programming
    bur_local = bottle_outer_dia_mm / parison_dia_sagged
    blown_thickness_uncontrolled = sagged_thickness / bur_local
    
    # 4. Parison Programming Profiling
    # Mencari celah die gap h_die(z) agar blown_thickness = target_wall_thickness_mm
    # target = (h_die * B_h * sag_factor) / (D_mold / (D_die * B_D * sag_factor))
    # h_die(z) = target * (D_mold / D_die) * (1 / (B_h * B_D)) * (1 / sag_factor^2)
    programmed_die_gap = np.zeros(num_nodes)
    for i in range(num_nodes):
        sag_fact = sagged_thickness[i] / initial_parison_thick
        programmed_die_gap[i] = (
            target_wall_thickness_mm * 
            (bottle_outer_dia_mm / die_outer_dia_mm) * 
            (1.0 / (swell_ratio_thickness * swell_ratio_diameter)) * 
            (1.0 / (sag_fact ** 2))
        )
        
    return {
        "swell_ratio_thickness": swell_ratio_thickness,
        "swell_ratio_diameter": swell_ratio_diameter,
        "initial_parison_dia_mm": initial_parison_dia,
        "initial_parison_thick_mm": initial_parison_thick,
        "z_coords_mm": z_coords,
        "sagged_thickness_mm": sagged_thickness,
        "parison_dia_sagged_mm": parison_dia_sagged,
        "blown_thickness_uncontrolled_mm": blown_thickness_uncontrolled,
        "programmed_die_gap_mm": programmed_die_gap
    }

if __name__ == "__main__":
    res = calculate_parison_and_blowing()
    print("=" * 78)
    print("HASIL SIMULASI NUMERIK EXTRUSION BLOW MOLDING & PARISON PROGRAMMING")
    print("=" * 78)
    print(f"Rasio Swell Tebal (Tanner B_h)     : {res['swell_ratio_thickness']:.3f}")
    print(f"Rasio Swell Diameter (Tanner B_D)  : {res['swell_ratio_diameter']:.3f}")
    print(f"Dimensi Parison Bebas Awal         : OD = {res['initial_parison_dia_mm']:.2f} mm, Tebal = {res['initial_parison_thick_mm']:.2f} mm")
    print("-" * 78)
    print(f"{'Z (mm)':<10}{'Dia Parison':<15}{'Tebal Parison':<15}{'Tebal Botol (Polos)':<22}{'Programmed Gap':<15}")
    print(f"{'':<10}{'(mm)':<15}{'(mm)':<15}{'(mm)':<22}{'(mm)':<15}")
    print("-" * 78)
    indices = [0, 10, 25, 38, 49]
    for idx in indices:
        z = res["z_coords_mm"][idx]
        dp = res["parison_dia_sagged_mm"][idx]
        hp = res["sagged_thickness_mm"][idx]
        tb = res["blown_thickness_uncontrolled_mm"][idx]
        pg = res["programmed_die_gap_mm"][idx]
        print(f"{z:<10.1f}{dp:<15.2f}{hp:<15.3f}{tb:<22.3f}{pg:<15.3f}")
    print("=" * 78)
```

---

## 8. Studi Kasus Industri: Manufaktur Wadah Kimia 20-Liter HDPE (UN-Packaging Certified)

### 8.1 Deskripsi Masalah & Batasan Teknis
Sebuah perusahaan manufaktur kemasan industri memproduksi jerigen 20 Liter berbahan **High Molecular Weight High-Density Polyethylene (HMW-HDPE)** untuk sertifikasi pengangkutan zat berbahaya PBB (*UN Dangerous Goods Certificate*). Dalam pengujian awal, jerigen gagal pada uji jatuh dingin (*cold drop test* pada $-18^\circ\text{C}$ dari ketinggian $1.9\ \text{m}$) akibat keretakan pada garis las *bottom pinch-off* dan penipisan dinding pada radius sudut samping bawah.

### 8.2 Parameter Proses Eksisting vs. Optimasi
- **Material**: HMW-HDPE ($\text{MFI} = 0.05\ \text{g/10 min}$ pada $190^\circ\text{C}/21.6\ \text{kg}$, densitas $0.952\ \text{g/cm}^3$).
- **Mesin**: Ekstruder Akumulator 60 mm dengan die annular berdiameter $120\ \text{mm}$.
- **Data Eksperimen**:
  - Profil Awal: Celah die konstan $h_{\text{die}} = 3.5\ \text{mm}$.
  - Masalah: Rasio BUR sudut mencapai $3.4$, menyebabkan tebal sudut hanya $0.72\ \text{mm}$ (ambang batas aman $\ge 1.40\ \text{mm}$), serta temperatur pengelasan pinch-off turun ke $162^\circ\text{C}$ akibat waktu parison hanging terlalu lama ($12\ \text{detik}$).

### 8.3 Solusi Rekayasa & Hasil Perbaikan
1. **Penerapan 100-Point Servo Parison Programming**:
   - Memodifikasi bukaan celah die dari $2.2\ \text{mm}$ pada area badan silindris hingga $5.8\ \text{mm}$ pada area sudut bawah dan pinch-off.
2. **Redesain Profil Pisau Pinch-Off**:
   - Lebar *pinch land* dipotong dari $1.2\ \text{mm}$ menjadi $0.4\ \text{mm}$ dengan sudut relaksasi *flash relief angle* $30^\circ$, meningkatkan tekanan fusi leleh spesifik saat cetakan terkunci.
3. **Peningkatan Sirkulasi Pendinginan Bawah Cetakan**:
   - Menambahkan saluran pendingin tembaga berilium (*Beryllium-Copper inserts*) pada area pinch-off untuk mempercepat pemadatan simetris tanpa menginduksi tegangan sisa tarik.

**Hasil**:
- Ketebalan dinding sudut meningkat dari $0.72\ \text{mm}$ menjadi $1.58\ \text{mm}$ ($\pm 0.08\ \text{mm}$).
- Ketahanan uji jatuh $-18^\circ\text{C}$ mencapai $100\%$ kelolosan pada 30 sampel berurutan (Standar ISO 9008 / UN 3H1).
- Total cycle time berkurang $14.3\%$ dari $35\ \text{detik}$ menjadi $30\ \text{detik}$.

---

## 9. Referensi Akademis & Standar Industri Terverifikasi

1. **Billon, N.** (2023). *Strain induced crystallization of PET under biaxial conditions: From laboratory tests to injection stretch-blow molding*. **Polymer**, 276, 125953. DOI: `10.1016/j.polymer.2023.125953`.
2. **Menary, G. H., Tan, C. W., & Harkin-Jones, E. M. A.** (2011). *Biaxial deformation and experimental study of PET at conditions applicable to stretch blow molding*. **Polymer Engineering & Science**, 51(11), 2213–2224. DOI: `10.1002/pen.22134`.
3. **Huang, H. X., & Liao, C. M.** (2002). *Prediction of parison swell in plastics extrusion blow molding using a neural network method*. **Polymer Testing**, 21(7), 745–749. DOI: `10.1016/S0142-9418(02)00005-3`.
4. **Tanner, R. I.** (2000). *Engineering Rheology* (2nd ed.). Oxford University Press. ISBN: `978-0198564737`.
5. **Throne, J. L.** (2004). *Understanding Blow Molding*. Carl Hanser Verlag. ISBN: `978-3446226685`.
6. **ASTM D4976-21**: *Standard Specification for Polyethylene Plastics Molding and Extrusion Materials*. ASTM International, West Conshohocken, PA.
7. **ISO 16790:2021**: *Plastics — Determination of experimental methods for drawing properties of polymer melts in extensional flow*. International Organization for Standardization, Geneva.
8. **ASTM D2911/D2911M-16**: *Standard Specification for Dimensions and Tolerances for Plastic Bottles*. ASTM International, West Conshohocken, PA.
