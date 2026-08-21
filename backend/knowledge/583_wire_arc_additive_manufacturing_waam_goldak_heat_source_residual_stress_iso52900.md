# Modul 583: Wire Arc Additive Manufacturing (WAAM): Pemodelan Sumber Panas Goldak Double-Ellipsoid, Dinamika Kinetika Kolam Leleh (Melt Pool), Geometri Manik Las (Bead Geometry), Tegangan Sisa Termomekanis, dan Standar Kualifikasi Fabrikasi (ISO/ASTM 52900 & AWS D20.1)

## 1. Pengantar & Prinsip Fundamental Wire Arc Additive Manufacturing (WAAM)

Wire Arc Additive Manufacturing (WAAM) adalah teknologi manufaktur aditif berbasis energi terarah (*Directed Energy Deposition-Arc / DED-arc*) yang memanfaatkan busur listrik (*electric arc*) atau plasma sebagai sumber energi termal terkonsentrasi untuk melelehkan kawat logam pengumpan (*continuous wire feedstock*) lapis-demi-lapis (*layer-by-layer deposition*) di atas pelat substrat dasar (*substrate baseplate*). Dalam taksonomi manufaktur aditif internasional **ISO/ASTM 52900:2021**, WAAM diklasifikasikan ke dalam kategori *Directed Energy Deposition (DED)* logam skala besar.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR PERALATAN SISTEM INTEGRASI WAAM ROBOTIK 6-DOF                           |
|                                         (Cold Metal Transfer / CMT GMAW Configuration)                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   ┌───────────────────────────┐         ┌──────────────────────────────────────────────────────────┐                  |
|   │ CNC / Lengan Robot 6-DOF  │         │ Sumber Daya Las Terkontrol Digital (CMT / Pulsed GMAW)   │                  |
|   │ (Posisi: X, Y, Z, Rx,Ry,Rz)────────►│ V = 14 - 28 V, I = 80 - 320 A, Frekuensi Pulsa 50-200 Hz  │                  |
|   └─────────────┬─────────────┘         └────────────────────────────┬─────────────────────────────┘                  |
|                 │                                                    │                                                |
|                 ▼                                                    │ Daya Listrik + Sinyal Kontrol                  |
|   ┌───────────────────────────┐                                      │                                                |
|   │ Torch Pengelasan Robotik  │◄─────────────────────────────────────┘                                                |
|   │ - Nozel Gas Pelindung     │◄─── Gas Pelindung (Ar / Ar+CO2 / Ar+He, Laju Alir Q_g = 15 - 25 L/min)                |
|   │ - Kontak Tip Tembaga      │                                                                                       |
|   │ - Kawat Elektroda Kontinu │◄─── Pengumpan Kawat Presisi (Wire Feeder, WFS = 2.0 - 12.0 m/min)                     |
|   └─────────────┬─────────────┘                                                                                       |
|                 │                                                                                                     |
|                 ▼ Busur Listrik Terkonsentrasi (Electric Arc) & Transfer Tetesan Logam (Droplet Transfer)             |
|          ╭───────────────╮                                                                                            |
|          │  Busur Plasma │                                                                                            |
|          ╰───────┬───────╯                                                                                            |
|                  ▼                                                                                                    |
|    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   ◄── Ketinggian Lapisan Efektif (Layer Height, h_layer)             |
|    ░░ Kolam Leleh Cair (Melt Pool Liquid)      ░░                                                                     |
|    ░░ T_peak = 1800 - 2400 K; Tegangan Marangoni░░                                                                    |
|    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                                                                     |
|    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ◄── Manik Las Terpadu (Solidified Weld Bead, Lebar w)               |
|    ▓▓ Zona Terpengaruh Panas (HAZ)             ▓▓                                                                     |
|    ▓▓ Mikrostruktur Butir Kolumnar-ke-Ekuaksial▓▓                                                                     |
|    ─────────────────────────────────────────────   ◄── Lapisan Terdeposit Sebelumnya (Layer n-1)                      |
|    █████████████████████████████████████████████                                                                      |
|    ██ Pelat Substrat Dasar (Substrate Baseplate)██  (Ketebalan t_sub = 10 - 50 mm, Konduksi Termal 3D)                |
|    █████████████████████████████████████████████                                                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Dibandingkan dengan proses berbasis serbuk seperti *Laser Powder Bed Fusion (PBF-LB)* atau *Electron Beam Melting (PBF-EB)*, WAAM menawarkan keunggulan kompetitif industri yang signifikan:
1. **Laju Deposisi Tinggi (*High Deposition Rate*)**: Mencapai $1.0 - 10.0\text{ kg/jam}$ (bahkan hingga $>15\text{ kg/jam}$ pada sistem *Tandem Wire*), dibandingkan PBF yang hanya berkisar $0.05 - 0.2\text{ kg/jam}$.
2. **Efisiensi Pemanfaatan Material Sangat Tinggi (*Buy-to-Fly Ratio*)**: Mampu mereduksi rasio *Buy-to-Fly* komponen struktural kedirgantaraan dan maritim dari $10:1 - 20:1$ (pada *machining* dari *billet* tempa masif) menjadi $1.1:1 - 1.5:1$ (*near-net-shape*).
3. **Skalabilitas Dimensi Tanpa Batas Ruang Vakum**: Tidak dibatasi oleh volume bilik tertutup (*build chamber*), melainkan hanya oleh ruang kerja (*working envelope*) robot artikulasi multi-sumbu atau *gantry*.
4. **Efisiensi Energi Listrik Tinggi**: Efisiensi termal transfer busur gas metal (*GMAW arc thermal efficiency*) mencapai $\eta = 0.75 - 0.90$, jauh melampaui efisiensi serapan energi laser pada logam reflektif ($\eta \approx 0.15 - 0.40$).

Proses utama pengelasan yang diintegrasikan dalam WAAM meliputi:
- **Gas Metal Arc Welding (GMAW / MIG / MAG)**: Menggunakan elektroda kawat kontinu yang meleleh sendiri.
- **Cold Metal Transfer (CMT)**: Varian GMAW termodifikasi dengan mekanisme retraksi kawat bolak-balik frekuensi tinggi ($50 - 130\text{ Hz}$) yang menyinkronkan transfer tetesan saat arus listrik berada pada titik terendah, menghasilkan *heat input* ultra-rendah dan deposisi bebas percikan (*spatter-free*).
- **Gas Tungsten Arc Welding (GTAW / TIG)** & **Plasma Arc Welding (PAW)**: Menggunakan elektroda tungsten non-konsumsi dengan sistem pengumpan kawat dingin/panas (*cold/hot wire feeding*) lateral terpisah, memberikan kontrol decoupling independen antara energi termal busur dan laju pengumpanan material.

Standar internasional dan acuan industri yang mengatur WAAM mencakup:
- **ISO/ASTM 52900**: *Additive manufacturing — General principles — Fundamentals and vocabulary*.
- **ISO/ASTM 52920**: *Additive manufacturing for automotive and aerospace — Qualification principles for sites and production processes*.
- **AWS D20.1/D20.1M**: *Specification for Fabrication of Metal Components using Additive Manufacturing*.
- **BS EN ISO 15614-1**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test*.
- **ASTM E8/E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.

---

## 2. Pemodelan Matematis Termal: Sumber Panas Goldak Double-Ellipsoid

Prediksi riwayat termal (*thermal history*), laju pendinginan (*cooling rate* $\partial T / \partial t$), dan dimensi kolam leleh (*melt pool geometry*) dalam WAAM diselesaikan secara matematis menggunakan persamaan konduksi panas transien non-linier tiga dimensi:

$$\rho(T) \cdot C_p(T) \cdot \frac{\partial T}{\partial t} = \nabla \cdot \left( k(T) \nabla T \right) + Q_{\text{source}}(x,y,z,t) - Q_{\text{loss}}$$

Di mana:
- $\rho(T)$ = Massa jenis material sebagai fungsi temperatur ($\text{kg/m}^3$).
- $C_p(T)$ = Kapasitas kalor spesifik ($\text{J/(kg}\cdot\text{K)}$).
- $k(T)$ = Konduktivitas termal material ($\text{W/(m}\cdot\text{K)}$).
- $Q_{\text{loss}} = h_{\text{conv}}(T - T_0) + \epsilon \sigma_{\text{SB}} (T^4 - T_0^4)$ merepresentasikan kehilangan kalor akibat konveksi alami/paksa gas pelindung dan radiasi permukaan ke lingkungan.
- $Q_{\text{source}}(x,y,z,t)$ = Sumber fluks kalor volumetrik busur listrik.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI SUMBER PANAS GOLDAK DOUBLE-ELLIPSOID                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                            Arah Pergerakan Torch Las (Kecepatan Deposisi v_TS)                                        |
|                                       ────────────────────────► +x                                                    |
|                                                                                                                       |
|                                             │ z = 0 (Permukaan)                                                       |
|                                  ◄── a_f ───┼──────── a_r ────────►                                                   |
|                             ┌───────────────┬─────────────────────────────┐                                           |
|                           ▲ │   Front       │          Rear               │                                           |
|                           │ │  Semi-Ellip-  │       Semi-Ellipsoid        │                                           |
|                       2*b │ │     soid      │         (Trailing)          │                                           |
|                           │ │   (Leading)   │                             │                                           |
|                           ▼ └───────────────┴─────────────────────────────┘                                           |
|                                             │                                                                         |
|                                             ▼ Kedalaman Penetrasi c (Sumbu Z)                                         |
|                                                                                                                       |
|                       Kerapatan Daya Puncak q_max berada pada pusat koordinat (0,0,0)                                 |
|                       q_f(x,y,z) untuk x >= 0  |  q_r(x,y,z) untuk x < 0                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Model sumber panas **Goldak Double-Ellipsoid** (Goldak et al., 1984) membagi distribusi panas menjadi dua semi-elipsoida (bagian depan *front* dan bagian belakang *rear*) untuk menangkap asimetri gradien termal yang tajam di depan busur dan ekor landai di belakang busur:

### 2.1 Persamaan Fluks Kalor Volumetrik Goldak

Untuk kuadran depan ($x \ge 0$, searah gerak elektroda):
$$q_f(x, y, z) = \frac{6 \sqrt{3} f_f \eta V I}{\pi \sqrt{\pi} a_f b c} \exp\left( -3\frac{x^2}{a_f^2} - 3\frac{y^2}{b^2} - 3\frac{z^2}{c^2} \right)$$

Untuk kuadran belakang ($x < 0$, di belakang elektroda):
$$q_r(x, y, z) = \frac{6 \sqrt{3} f_r \eta V I}{\pi \sqrt{\pi} a_r b c} \exp\left( -3\frac{x^2}{a_r^2} - 3\frac{y^2}{b^2} - 3\frac{z^2}{c^2} \right)$$

Di mana:
- $V$ = Tegangan busur listrik (*arc voltage*, Volt).
- $I$ = Arus listrik las (*welding current*, Ampere).
- $\eta$ = Efisiensi termal busur listrik ($\eta_{\text{GMAW}} \approx 0.80 - 0.85$, $\eta_{\text{CMT}} \approx 0.75 - 0.80$, $\eta_{\text{GTAW}} \approx 0.65 - 0.75$).
- $Q_{\text{eff}} = \eta V I$ = Daya termal efektif yang ditransfer ke kolam leleh ($\text{Watt}$).
- $a_f, a_r$ = Parameter panjang semi-elipsoida depan (*front*) dan belakang (*rear*) ($\text{m}$).
- $b$ = Parameter setengah lebar kolam leleh (*semi-width*, $\text{m}$).
- $c$ = Parameter kedalaman penetrasi lelehan (*penetration depth*, $\text{m}$).
- $f_f, f_r$ = Fraksi distribusi energi pada bagian depan dan belakang, dengan syarat kontinuitas energi:

$$f_f + f_r = 2 \quad \text{di mana} \quad f_f = \frac{2 a_f}{a_f + a_r}, \quad f_r = \frac{2 a_r}{a_f + a_r}$$

### 2.2 Masukan Panas Linier (Linear Heat Input)
Besaran energi bersih per satuan panjang deposit didefinisikan sebagai:

$$HI = \eta \cdot \frac{V \cdot I}{v_{\text{TS}}} = \eta \cdot \frac{P_{\text{arc}}}{v_{\text{TS}}} \quad \left[\text{J/mm}\right]$$

di mana $v_{\text{TS}}$ adalah kecepatan translasi gerak busur (*Travel Speed*, $\text{mm/s}$).

---

## 3. Dinamika Fluida Kolam Leleh & Morfologi Manik Las

Di dalam kolam leleh cair (*liquid melt pool*), transfer massa dan panas tidak hanya dipengaruhi oleh konduksi termal, melainkan didominasi oleh **konveksi konvektif hidrodinamika fluida** yang digerakkan oleh 4 gaya penggerak utama:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GAYA-GAYA PENGGERAK FLUIDA DALAM KOLAM LELEH WAAM                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. GAYA APUNG (BUOYANCY FORCE):            F_b = rho * g * beta * (T - T_ref)                                       |
|      Konveksi alami akibat gradien densitas termal (arah ke atas pada inti terpanas).                                 |
|                                                                                                                       |
|   2. GAYA ELEKTROMAGNETIK LORENTZ:           F_L = J x B                                                              |
|      Interaksi kerapatan arus listrik divergensi (J) dengan medan magnet induksi diri (B),                            |
|      menghasilkan jet sirkulasi fluida vertikal ke arah bawah menuju dasar manik las.                                 |
|                                                                                                                       |
|   3. TEGANGAN GESER MARANGONI (THERMOCAPILLARY SHEAR STRESS):                                                         |
|      tau_M = mu * (du/dz) = (dgamma/dT) * (dT/dr)                                                                     |
|      - Jika dgamma/dT < 0 (Logam Murni / Paduan Deoksidasi Rendah): Aliran sentrifugal ke tepi luar -> Bead Melebar. |
|      - Jika dgamma/dT > 0 (Adanya Surfaktan Aktif seperti Oksigen/Belerang terlarut): Aliran sentripetal ke pusat.   |
|                                                                                                                       |
|   4. TEKANAN AKSIAL BUSUR & IMPULSE DROPLET (ARC PRESSURE & DROPLET IMPACT):                                          |
|      P_arc(r) = (mu_0 * I^2 / 4*pi^2 * r_arc^2) * exp(-r^2 / 2*sigma_arc^2)                                          |
|      Menekan depresi kawah kolam leleh secara langsung di bawah sumbu elektroda.                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Model Geometri Manik Las Tunggal (Single-Bead Profile)

Penampang lintang manik las tunggal (*single weld bead*) secara matematis dimodelkan dengan akurasi tinggi menggunakan pendekatan fungsi **Parabolik** atau **Distribusi Gaussian**:

```
           z (Tinggi)
           ▲
           │             (0, h)
           │            . - - - .
           │         .             .
           │       .                 .
           │     .                     .
───────────┼────.───────────────────────.────► y (Lebar)
       (-w/2, 0)                         (w/2, 0)
           │◄──────────── w ────────────►│
```

#### Model Parabolik:
$$z(y) = h \left( 1 - \frac{4 y^2}{w^2} \right) \quad \text{untuk} \quad -\frac{w}{2} \le y \le \frac{w}{2}$$

Luas penampang lintang deposisi ($A_{\text{bead}}$):
$$A_{\text{bead}} = \int_{-w/2}^{w/2} z(y)\, dy = \frac{2}{3} w \cdot h$$

Berdasarkan hukum kekekalan massa kawat umpan terhadap volume deposit:
$$A_{\text{bead}} \cdot v_{\text{TS}} = \frac{\pi d_w^2}{4} \cdot WFS$$

$$\frac{2}{3} w \cdot h = \frac{\pi d_w^2 \cdot WFS}{4 v_{\text{TS}}} \implies w \cdot h = \frac{3\pi d_w^2 \cdot WFS}{8 v_{\text{TS}}}$$

Di mana:
- $d_w$ = Diameter kawat las ($\text{mm}$, umumnya $1.0 - 1.6\text{ mm}$).
- $WFS$ = Kecepatan pengumpanan kawat (*Wire Feed Speed*, $\text{mm/s}$).
- $v_{\text{TS}}$ = Kecepatan gerak translasi torch (*Travel Speed*, $\text{mm/s}$).
- $w$ = Lebar manik las (*bead width*, $\text{mm}$).
- $h$ = Tinggi manik las (*bead height*, $\text{mm}$).

Rasio aspek manik las dinotasikan sebagai $\xi = w / h$. Korelasi empiris-fisik untuk lebar manik las $w$:
$$w = k_w \cdot \frac{I^{\alpha} \cdot V^{\beta}}{v_{\text{TS}}^{\gamma}}$$

### 3.2 Model Tumpang-Tindih Multi-Manik (Multi-Bead Overlapping Model - FOM / TSM)

Untuk membentuk dinding pejal (*solid thin-wall*) atau blok volumetrik (*solid blocks*), manik las harus ditumpuk bersebelahan dengan jarak antar-sumbu geser (*center-to-center stepover distance*, $d_s$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  FLAT TOP OVERLAPPING MODEL (FOM) UNTUK SURFACE QUALITY OPTIMAL                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                   Bead (n-1)                           Bead (n)                                                       |
|             . - - - - - .                       . - - - - - .                                                         |
|          .       ▲         .                 .       ▲         .                                                      |
|        .         │           .   Overlapping   .     │           .                                                    |
|       .          │            .   Region     .       │            .                                                   |
|      .           │             .    ╭─╮    .         │             .                                                  |
|     .            h              .  │ █ │  .          h              .                                                 |
|    .             │               . │ █ │ .           │               .                                                |
|   .              │                .╰─┬─╯.            │                .                                               |
|  ────────────────┴───────────────────┼───────────────┴─────────────────► y                                            |
|   │◄───────── w ──────────►│         │       │                                                                        |
|   │◄─────────────── Center-to-Center Jarak d_s ─────►│                                                                |
|                                                                                                                       |
|   Kondisi Permukaan Rata Ideal (Flat-Top Condition):  d_s / w = 0.637 - 0.738                                          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Berdasarkan *Flat-Top Overlapping Model (FOM)* (Suryakumar et al., 2011):
Tinggi overlap total dari dua profil parabolik dengan jarak $d_s$:
$$z_{\text{overlap}}(y) = z(y) + z(y - d_s)$$

Untuk memastikan ketebalan dinding yang seragam tanpa timbulnya lembah lekukan (*valleys*) atau akumulasi puncak (*peaks*), rasio jarak geser optimal teoritis adalah:
$$d_s^* = 0.738 \cdot w \quad \text{hingga} \quad d_s^* = 0.667 \cdot w$$

---

## 4. Termomekanika Tegangan Sisa & Distorsi Struktur

Akibat siklus pemanasan dan pendinginan cepat yang terlokalisasi secara ekstrim, komponen WAAM rentan mengalami akumulasi **tegangan sisa tarik longitudinal tinggi** (*high tensile longitudinal residual stresses*) mendekati batas luluh material ($\sigma_{\text{yield}}$) pada lapisan atas dan zona HAZ, serta distorsi sudut (*angular distortion*) dan lengkungan (*warping/buckling*) pada pelat substrat.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                   PROFIL DISTRIBUSI TEGANGAN SISA LONGITUDINAL (sigma_xx)                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Tegangan Sisa Longitudinal sigma_xx (MPa)                                                                           |
|                                                                                                                       |
|         +sigma_yield ┼ - - - - - - - - - - - - - - - ┌────────────────┐ (Tarik Maksimum / Tensile Yield)              |
|                      │                               │  Lapisan WAAM  │                                               |
|                      │                               │  Terdeposit    │                                               |
|                      │                               │                │                                               |
|                    0 ┼───────────────────────────────┘                └─────────────────── (Garis Netral Tegangan)    |
|                      │                              ▲                  ▲                                              |
|                      │                             HAZ                HAZ                                             |
|         -sigma_comp  ┼ - - - - - ┌────────────────────────────────────────┐ - - - - - (Kompresi Penyeimbang)        |
|                      │           │   Pelat Substrat Bawah (Baseplate)     │                                           |
|                      │           └────────────────────────────────────────┘                                           |
|                      └────────────────────────────────────────────────────────────► Posisi Z Vertikal                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Persamaan Konstitutif Elastoplastik Termal
Regangan total ($\varepsilon_{ij}^{\text{total}}$) didekomposisi menjadi kontribusi elastis, plastis, ekspansi termal, dan transformasi fasa metalurgi:

$$\varepsilon_{ij}^{\text{total}} = \varepsilon_{ij}^e + \varepsilon_{ij}^p + \varepsilon_{ij}^{\text{th}} + \varepsilon_{ij}^{\text{tr}}$$

1. **Regangan Termal**:
$$\varepsilon_{ij}^{\text{th}} = \delta_{ij} \int_{T_{\text{ref}}}^T \alpha(T')\, dT'$$

2. **Kriteria Luluh von Mises & Aturan Aliran Plastis Prandtl-Reuss**:
$$f(\boldsymbol{\sigma}, \bar{\varepsilon}^p, T) = \sqrt{\frac{3}{2} \mathbf{s}:\mathbf{s}} - \sigma_y(\bar{\varepsilon}^p, T) = 0$$
di mana $\mathbf{s} = \boldsymbol{\sigma} - \frac{1}{3}\text{Tr}(\boldsymbol{\sigma})\mathbf{I}$ adalah tensor deviasi tegangan.

3. **Evolusi Tegangan Termomekanik 1D Terkekang**:
Pada pendinginan dari temperatur puncak $T_{\text{peak}}$ ke temperatur antar-lapisan $T_{\text{interpass}}$, tegangan termal yang timbul jika terkekang penuh:
$$\sigma_{xx} = -\int_{T_{\text{interpass}}}^{T_{\text{peak}}} \frac{E(T) \cdot \alpha(T)}{1 - 2\nu(T)}\, dT$$

Jika nilai integrasi ini melampaui $\sigma_y(T)$, deformasi plastis kompresi terjadi pada temperatur tinggi; saat mendingin ke suhu ruang, pembalikan regangan memicu tegangan tarik sisa residual permanen sebesar $\sigma_{xx} \approx \sigma_{\text{yield}}(T_{\text{ambient}})$.

### 4.2 Strategi Mitigasi Tegangan Sisa & Distorsi Industri
1. **High-Pressure Interpass Rolling**: Pengaplikasian rol hidrolik bertekanan tinggi ($F_{\text{roll}} = 15 - 50\text{ kN}$) langsung pada permukaan manik las yang baru memadat di antara lapis (*interpass rolling*). Hal ini menginduksi regangan plastis kompresi dingin yang mengubah tegangan tarik sisa menjadi tegangan tekan residual (-200 s.d. -400 MPa) serta menghancurkan struktur butir kolumnar kasar menjadi ekuaksial halus.
2. **Optimasi Strategi Jalur Lintasan (Toolpath Strategy)**:
   - *Alternating Direction (Back-and-Forth Scan)*: Menyeimbangkan akumulasi panas asimetris.
   - *Continuous Contour Infill*: Menghilangkan diskontinuitas titik penyalaan busur (*arc ignition*) dan pemadaman busur (*arc crater extinction*).
3. **Pemanasan Awal Substrat & Kontrol Suhu Interpass (*Active Interpass Cooling*)**: Mengatur $T_{\text{interpass}} \le 150\text{ }^\circ\text{C}$ untuk baja paduan atau paduan aluminium guna mencegah *heat buildup* berlebih yang menyebabkan pelelehan runtuh (*slumping*).

---

## 5. Implementasi Algoritma & Python Solver: Termal Goldak 3D & Optimasi Overlap

Berikut adalah implementasi komputasi numerik Python lengkap yang memodelkan distribusi sumber panas Goldak 3D transien, kalkulasi masukan panas bersih (*linear heat input*), pemodelan profil geometri manik tunggal, simulasi profil multi-bead overlapping (FOM), dan evaluasi rasio ketidakteraturan permukaan (*Surface Waviness Index*):

```python
"""
RuangTI - Industrial Engineering Knowledge Hub
Module 583: Wire Arc Additive Manufacturing (WAAM) Multiphysics & Toolpath Optimizer
Solves: Goldak Double-Ellipsoid 3D Heat Source, Single Bead Profile, and Multi-Bead Overlapping
"""

import numpy as np
import math
from typing import Dict, Tuple, List

class WAAMThermalAndBeadOptimizer:
    def __init__(self, 
                 voltage: float,          # Arc Voltage (V)
                 current: float,          # Arc Current (A)
                 efficiency: float,       # Thermal Efficiency eta (0.0 - 1.0)
                 travel_speed: float,     # Torch Travel Speed (mm/s)
                 wire_feed_speed: float,  # Wire Feed Speed (mm/s)
                 wire_diameter: float):   # Wire Diameter (mm)
        self.V = voltage
        self.I = current
        self.eta = efficiency
        self.v_ts = travel_speed
        self.wfs = wire_feed_speed
        self.d_w = wire_diameter
        
        # Calculate Power and Heat Input
        self.P_gross = self.V * self.I
        self.P_eff = self.eta * self.P_gross  # Effective Heat Input (W)
        self.heat_input_linear = self.P_eff / self.v_ts  # J/mm
        
    def goldak_power_density_3d(self, 
                                x: float, 
                                y: float, 
                                z: float, 
                                t: float,
                                a_f: float = 4.0,   # Front semi-length (mm)
                                a_r: float = 12.0,  # Rear semi-length (mm)
                                b: float = 4.5,     # Semi-width (mm)
                                c: float = 3.5      # Semi-depth / penetration (mm)
                                ) -> float:
        """
        Calculates volumetric heat flux q(x,y,z,t) in W/mm^3 using Goldak double-ellipsoid model.
        Source moves along the +x axis at speed v_ts.
        """
        # Coordinate transformation to moving heat source origin
        x_source = self.v_ts * t
        dx = x - x_source
        
        f_f = 2.0 * a_f / (a_f + a_r)
        f_r = 2.0 * a_r / (a_f + a_r)
        
        if dx >= 0:
            # Front semi-ellipsoid
            coeff = (6.0 * math.sqrt(3.0) * f_f * self.P_eff) / (math.pi * math.sqrt(math.pi) * a_f * b * c)
            exponent = -3.0 * (dx / a_f)**2 - 3.0 * (y / b)**2 - 3.0 * (z / c)**2
        else:
            # Rear semi-ellipsoid
            coeff = (6.0 * math.sqrt(3.0) * f_r * self.P_eff) / (math.pi * math.sqrt(math.pi) * a_r * b * c)
            exponent = -3.0 * (dx / a_r)**2 - 3.0 * (y / b)**2 - 3.0 * (z / c)**2
            
        q_vol = coeff * math.exp(exponent) if exponent > -50 else 0.0
        return q_vol

    def calculate_single_bead_dimensions(self, k_aspect: float = 2.2) -> Tuple[float, float, float]:
        """
        Calculates bead cross-sectional area (A_bead), bead width (w), and bead height (h)
        assuming parabolic geometry and mass conservation:
        A_bead * v_ts = (pi/4) * d_w^2 * wfs
        w / h = k_aspect
        """
        volumetric_feed_rate = (math.pi * (self.d_w ** 2) / 4.0) * self.wfs  # mm^3/s
        a_bead = volumetric_feed_rate / self.v_ts  # mm^2
        
        # A_bead = (2/3) * w * h = (2/3) * (k_aspect * h) * h = (2/3) * k_aspect * h^2
        h_bead = math.sqrt((1.5 * a_bead) / k_aspect)
        w_bead = k_aspect * h_bead
        
        return a_bead, w_bead, h_bead

    def simulate_multibead_overlapping(self, 
                                      num_beads: int = 5, 
                                      stepover_ratio: float = 0.70,
                                      grid_resolution: int = 1000) -> Dict[str, float]:
        """
        Simulates multi-bead profile across transverse coordinate y.
        Calculates flat-top thickness, valley depth, and Surface Waviness Index (SWI).
        """
        a_bead, w, h = self.calculate_single_bead_dimensions()
        stepover_distance = stepover_ratio * w
        
        total_width = (num_beads - 1) * stepover_distance + 2.0 * w
        y_coords = np.linspace(-w, (num_beads - 1) * stepover_distance + w, grid_resolution)
        total_profile = np.zeros_like(y_coords)
        
        # Superimpose individual parabolic beads
        for i in range(num_beads):
            y_center = i * stepover_distance
            y_rel = y_coords - y_center
            
            # Parabolic formula: z = h * (1 - 4 * (y_rel/w)^2) for |y_rel| <= w/2
            mask = np.abs(y_rel) <= (w / 2.0)
            bead_z = np.zeros_like(y_coords)
            bead_z[mask] = h * (1.0 - 4.0 * (y_rel[mask] / w)**2)
            total_profile += bead_z
            
        # Analyze steady-state central overlapping zone (between bead 1 and bead n-2)
        if num_beads >= 3:
            eval_start = 0.5 * stepover_distance
            eval_end = (num_beads - 1.5) * stepover_distance
            eval_mask = (y_coords >= eval_start) & (y_coords <= eval_end)
            
            steady_profile = total_profile[eval_mask]
            z_max = float(np.max(steady_profile))
            z_min = float(np.min(steady_profile))
            z_mean = float(np.mean(steady_profile))
            waviness_index = ((z_max - z_min) / z_mean) * 100.0 if z_mean > 0 else 0.0
        else:
            z_max = float(np.max(total_profile))
            z_min = float(np.min(total_profile))
            z_mean = float(np.mean(total_profile))
            waviness_index = 0.0
            
        return {
            "A_bead_mm2": a_bead,
            "bead_width_mm": w,
            "bead_height_mm": h,
            "stepover_distance_mm": stepover_distance,
            "stepover_ratio": stepover_ratio,
            "effective_layer_height_mm": z_mean,
            "surface_waviness_percent": waviness_index,
            "peak_to_valley_height_mm": z_max - z_min
        }

if __name__ == "__main__":
    # Parameter Operasional WAAM Paduan Titanium Ti-6Al-4V (CMT Process)
    optimizer = WAAMThermalAndBeadOptimizer(
        voltage=18.5,            # V
        current=140.0,           # A
        efficiency=0.82,         # CMT efficiency
        travel_speed=7.5,        # mm/s (450 mm/min)
        wire_feed_speed=80.0,    # mm/s (4.8 m/min)
        wire_diameter=1.2        # mm
    )
    
    print(f"=== HASIL KALKULASI PROSES WAAM TI-6AL-4V ===")
    print(f"Daya Bruto Busur (P_gross)     : {optimizer.P_gross:.2f} W")
    print(f"Daya Efektif Kolam (P_eff)     : {optimizer.P_eff:.2f} W")
    print(f"Masukan Panas Linier (HI)      : {optimizer.heat_input_linear:.2f} J/mm")
    
    # Uji Fluks Volumetrik Goldak pada Pusat Kolam Leleh
    q_center = optimizer.goldak_power_density_3d(x=0.0, y=0.0, z=0.0, t=0.0)
    print(f"Kerapatan Fluks Puncak Goldak  : {q_center:.2e} W/mm^3")
    
    # Simulasi Multi-Bead Overlapping dengan Variasi Jarak Stepover
    print("\n=== OPTIMASI STEP-OVER OVERLAPPING MODEL (FOM) ===")
    for ratio in [0.55, 0.667, 0.738, 0.85]:
        res = optimizer.simulate_multibead_overlapping(num_beads=5, stepover_ratio=ratio)
        print(f"Rasio d_s/w = {ratio:.3f} | Lebar: {res['bead_width_mm']:.2f} mm | Jarak d_s: {res['stepover_distance_mm']:.2f} mm | "
              f"Tinggi Efektif: {res['effective_layer_height_mm']:.2f} mm | Waviness: {res['surface_waviness_percent']:.2f}%")
```

---

## 6. Studi Kasus Industri: Fabrikasi Komponen Dinding Tipis Paduan Titanium Ti-6Al-4V Dirgantara

### 6.1 Latar Belakang & Spesifikasi Komponen
Sebuah industri manufaktur komponen kedirgantaraan (*aerospace tier-1 supplier*) memproduksi struktur penyangga spar rangka badan pesawat (*fuselage frame stiffener*) berbahan paduan titanium **Ti-6Al-4V (Grade 5)** dengan dimensi panjang $1200\text{ mm}$, tinggi dinding $180\text{ mm}$, dan ketebalan dinding bersih $8.0\text{ mm}$.

- **Metode Konvensional**: Permesinan CNC 5-sumbu dari balok tempa (*forged billet*) padat seberat $145\text{ kg}$ untuk menghasilkan komponen akhir seberat $9.2\text{ kg}$ (*Buy-to-Fly Ratio* = $15.8:1$, waktu permesinan 38 jam, biaya material terbuang sangat masif).
- **Inovasi WAAM**: Deposisi *near-net-shape thin-wall* menggunakan sistem robotik CMT-WAAM 6-DOF terintegrasi sumber kawat $\varnothing 1.2\text{ mm}$, dilanjutkan permesinan akhir (*finish machining*) tipis pada permukaan luar ($0.8\text{ mm}$ allowance).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PERBANDINGAN METRIK TEKNO-EKONOMI: CNC VS. WAAM TI-6AL-4V                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Metrik Kinerja                     Permesinan Konvensional (Billet)       WAAM Near-Net-Shape + Finish CNC          |
|   ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────   |
|   Massa Bahan Mentah Awal            145.0 kg (Titanium Billet)             14.2 kg (Kawat + Substrat Pelat)          |
|   Massa Komponen Bersih Akhir        9.2 kg                                 9.2 kg                                    |
|   Buy-to-Fly (BTF) Ratio             15.76 : 1                              1.54 : 1  (-90.2% Penghematan Material)   |
|   Waktu Siklus Total Fabrikasi       38.5 jam (Roughing + Finishing)        6.8 jam (3.2h WAAM + 3.6h Finishing CNC)  |
|   Konsumsi Energi Listrik Spesifik   420 kWh / part                         88 kWh / part  (-79.0% Konsumsi Energi)   |
|   Biaya Manufaktur per Unit          USD $4,850                             USD $1,620 (-66.6% Reduksi Biaya)         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Prosedur Kualifikasi & Pengujian Sesuai Standar AWS D20.1 & ASTM E8
1. **Pemeriksaan Cacat Volumetrik (NDT Radiografi & Phased Array Ultrasonic)**: Memastikan nol diskontinuitas fusi (*lack of fusion*), tidak ada inklusi tungsten, dan porositas gas $\varnothing \le 0.2\text{ mm}$ sesuai batasan *AWS D20.1 Class A*.
2. **Perlakuan Panas Pasca-Deposisi (Post-Deposition Heat Treatment - Stress Relief & Annealing)**: Komponen menjalani *vacuum stress relief annealing* pada $730\text{ }^\circ\text{C}$ selama $2\text{ jam}$ diikuti pendinginan lambat di dalam tungku (*furnace cooling* $\le 5\text{ }^\circ\text{C/min}$) untuk mereduksi 95% tegangan sisa termal.
3. **Uji Tarik Mekanis (ASTM E8 / E8M)**:
   - *Arah Longitudinal (Sumbu X - Paralel Jalur Las)*: Yield Strength $R_{p0.2} = 895\text{ MPa}$, Ultimate Tensile Strength $R_m = 985\text{ MPa}$, Elongasi $A = 12.4\%$.
   - *Arah Transversal/Tinggi (Sumbu Z - Antar-Lapisan)*: Yield Strength $R_{p0.2} = 870\text{ MPa}$, Ultimate Tensile Strength $R_m = 960\text{ MPa}$, Elongasi $A = 10.8\%$.
   - Tingkat anisotropi mekanis $\le 3.5\%$, melampaui batas minimum spesifikasi tempa ASTM F136.

---

## 7. Referensi Akademis Terverifikasi (Standards & Peer-Reviewed Literature)

1. **Williams, S. W., Martina, F., Addison, A. C., Ding, J., Pardal, G., & Colegrove, P. (2016)**. *Wire + Arc Additive Manufacturing*. Materials Science and Technology, 32(7), 641–647. [DOI: 10.1179/1743284715Y.0000000073](https://doi.org/10.1179/1743284715Y.0000000073)
2. **Goldak, J., Chakravarti, A., & Bibby, M. (1984)**. *A new finite element model for welding heat sources*. Metallurgical Transactions B, 15(2), 299–305. [DOI: 10.1007/BF02667333](https://doi.org/10.1007/BF02667333)
3. **Derekar, K. S. (2018)**. *A review of wire arc additive manufacturing and advances in wire arc additive manufacturing of aluminium*. Materials Science and Technology, 34(6), 695–716. [DOI: 10.1080/02670836.2018.1455012](https://doi.org/10.1080/02670836.2018.1455012)
4. **Huang, H., & Ma, N. (2020)**. *Toward large-scale simulation of residual stress and distortion in wire and arc additive manufacturing*. Additive Manufacturing, 34, 101248. [DOI: 10.1016/j.addma.2020.101248](https://doi.org/10.1016/j.addma.2020.101248)
5. **Hönnige, J. R., Colegrove, P. A., Ahmad, B., Fitzpatrick, M. E., Ganguly, S., & Martina, F. (2018)**. *Control of residual stress and distortion in aluminium wire + arc additive manufacture with rolling*. Additive Manufacturing, 22, 775–783. [DOI: 10.1016/j.addma.2018.06.015](https://doi.org/10.1016/j.addma.2018.06.015)
6. **Suryakumar, S., Karunakaran, K. P., Bernard, A., Chandrasekhar, U., Raghavender, N., & Sharma, D. (2011)**. *Weld bead modeling and process optimal parameter selection in Rapid Manufacturing*. Computer-Aided Design, 43(9), 1137–1144. [DOI: 10.1016/j.cad.2011.06.005](https://doi.org/10.1016/j.cad.2011.06.005)
7. **American Welding Society (AWS) (2019)**. *AWS D20.1/D20.1M: Specification for Fabrication of Metal Components using Additive Manufacturing*. American Welding Society, Miami, FL.
8. **ISO/ASTM International (2021)**. *ISO/ASTM 52900:2021 Additive manufacturing — General principles — Fundamentals and vocabulary*. International Organization for Standardization, Geneva.
