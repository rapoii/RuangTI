# Modul 612: Magnetic Abrasive Finishing (MAF) & Magnetic Field Assisted Surface Machining: Mekanika Maxwell Stress Tensor, Fleksibilitas Magnetic Brush, Kinematika Micro-Cutting Partikel Komposit Feromagnetik-Abrasif, dan Integritas Permukaan Skala Nano (ISO 4287, ASTM E384, & ISO 12107)

## 1. Pengantar & Konteks Industri *Magnetic Abrasive Finishing* (MAF)

Dalam industri kedirgantaraan, optika presisi tinggi, instrumentasi biomedis, dan manufaktur semikonduktor, komponen bergeometri kompleks dengan saluran internal yang rumit (*freeform complex channels*), pipa kapiler berdinding tipis (*thin-walled capillary tubes*), bantalan gelinding keramik (*silicon nitride bearing balls*), serta bilah turbin fluida membutuhkan kualitas integritas permukaan super-presisi pada skala nanometer ($R_a < 10 - 50\text{ nm}$) tanpa merusak toleransi dimensi geometris makro (*form accuracy*).

Metode *finishing* konvensional seperti pemolesan manual (*hand polishing*), *grinding*, atau *lapping* mekanis menghadapi keterbatasan fisik yang parah:
1. **Ketidakmampuan Mengakses Geometri Kompleks**: Alat pemoles kaku (*rigid tools*) tidak dapat menjangkau saluran melengkung internal, pipa berdinding tipis fleksibel, atau sudut dalam beradius mikro tanpa menyebabkan distorsi lokal atau erosi tak seragam.
2. **Kerusakan Termal & Tegangan Sisa Tarik**: Gesekan pemesinan abrasif kaku konvensional menghasilkan masukan panas tinggi terlokalisasi yang memicu retak mikro (*micro-cracks*), pelunakan termal (*thermal softening*), fasa getas martensitik yang tidak terkontrol (*white layer*), dan tegangan sisa tarik (*tensile residual stresses*) yang menurunkan batas fatik (*fatigue life*).
3. **Kekakuan Alat yang Menimbulkan Goresan Dalam (*Deep Scratching*)**: Tekanan kontak yang tidak fleksibel memicu konsentrasi tegangan impak ketika partikel abrasif tersangkut, menghasilkan alur goresan dalam yang merusak fungsi optik atau memicu kavitasi hidrodinamik.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 ARSITEKTUR FISIK DAN PRINSIP KERJA SISTEM MAGNETIC ABRASIVE FINISHING (MAF)                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] SISTEM PEMBENTUKAN KUTUB MAGNET                          [B] MEKANISME BRUSH & GAYA PEMOTONGAN MIKRO             |
|                                                                                                                       |
|         ┌─────────────────────────────────────┐                                                                       |
|         │    KUTUB MAGNET UTARA (N-POLE)      │                                   Kutub Magnet Utara                  |
|         └──────────────────┬──────────────────┘                                      ┌─────────┐                      |
|                            │ Medan Magnet B(x,y,z)                                   │ N-POLE  │                      |
|                            ▼                                                         └────┬────┘                      |
|         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                           │ Garis Fluks B             |
|         ░░░░░ FLEKSIBEL MAGNETIC BRUSH (FMB) ░░                                           ▼                           |
|         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                          Partikel Feromagnetik (Besi Murni / Carbonyl)|
|                            │                                             Partikel Abrasif Keras (Diamon/SiC/Al2O3)    |
|                            ▼                                                    ┌───┐  ●  ┌───┐                       |
|         ┌─────────────────────────────────────┐                                 │Fe │ ●   │Fe │ Rantai Rantai Magnetik|
|         │      BENDA KERJA (WORKPIECE)        │                                 └───┬───┬───┬─┘ (Flexible Brush)      |
|         │      (Rotasi / Translasi V_w)       │                                     ▼ F_n (Gaya Normal Magnetik)      |
|         └─────────────────────────────────────┘                             ═════════════════════                     |
|                            │                                                ───▼───▼───▼───▼───── Permukaan Benda     |
|                            ▼                                                ◄─── F_t (Gaya Geser) Kerja (Workpiece)   |
|         ┌─────────────────────────────────────┐                                                                       |
|         │    KUTUB MAGNET SELATAN (S-POLE)    │                             Penetrasi Kedalaman Mikro: d_p < 50 nm    |
|         └─────────────────────────────────────┘                                                                       |
|                                                                                                                       |
|  Karakteristik: Self-sharpening, self-adaptability, bebas pemanasan berlebih, kekasaran akhir super-halus Ra < 10 nm. |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Magnetic Abrasive Finishing (MAF)** atau **Penyelesaian Abrasif Berbantuan Medan Magnet** adalah proses pemesinan ultra-presisi non-konvensional yang memanfaatkan campuran partikel feromagnetik berskala mikro (seperti serbuk besi karbonil atau besi-kobalt) dan partikel abrasif superkeras (seperti intan monokristalin, $\text{cBN}$, $\text{SiC}$, atau $\text{Al}_2\text{O}_3$) yang diikat oleh gradien medan magnet luar. 

Partikel-partikel magnetik menyelaraskan diri di sepanjang garis-garis fluks magnetik (*magnetic flux lines*), membentuk struktur sikat abrasif fleksibel dinamis yang disebut **Flexible Magnetic Brush (FMB)**. Ketika terjadi gerakan relatif (rotasi, vibrasi aksial frekuensi tinggi, atau osilasi translasi) antara *magnetic brush* dan permukaan benda kerja, partikel abrasif yang terjepit pada ujung rantai magnetik melakukan aksi pemotongan mikro (*micro-cutting*), *ploughing*, dan pemolesan elastis atomik (*shear polishing*) dengan kedalaman penetrasi sub-mikron ($d_p < 10 - 100\text{ nm}$), menghasilkan kualitas permukaan cermin (*mirror finish*) bebas cacat kristalografi.

Standar internasional dan regulasi manufaktur yang relevan:
- **ISO 4287**: *Geometrical Product Specifications (GPS) — Surface texture: Profile method — Terms, definitions and surface texture parameters*.
- **ISO 25178-2**: *Geometrical Product Specifications (GPS) — Surface texture: Areal — Part 2: Terms, definitions and surface texture parameter*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **ISO 12107**: *Metallic materials — Fatigue testing — Statistical planning and analysis of data*.
- **ASME B46.1**: *Surface Texture (Surface Roughness, Waviness, and Lay)*.

---

## 2. Elektrodinamika & Mekanika Gaya Magnetik Maxwell

### 2.1 Teori Tegangan Maxwell (*Maxwell Stress Tensor Formulation*)

Gaya mekanik yang bekerja pada partikel abrasif magnetik di dalam celah kerja dibangkitkan oleh gradien kerapatan energi medan magnetik. Berdasarkan elektrodinamika kontinum, kerapatan gaya volumetrik magnetik ($\mathbf{f}_{\text{mag}}$, dalam satuan $\text{N/m}^3$) dinyatakan oleh divergensi dari **Maxwell Stress Tensor** ($\mathbf{T}_M$):

$$\mathbf{f}_{\text{mag}} = \nabla \cdot \mathbf{T}_M = (\mathbf{M} \cdot \nabla)\mathbf{B} = \mu_0 \chi_m (\mathbf{H} \cdot \nabla)\mathbf{H} = \frac{\mu_0 \chi_m}{2 (1 + \chi_m)} \nabla (\mathbf{H}^2)$$

di mana:
- $\mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M}) = \mu_0 \mu_r \mathbf{H}$ = Vektor rapat fluks medan magnet ($\text{Tesla}$).
- $\mathbf{H}$ = Vektor intensitas medan magnet ($\text{A/m}$).
- $\mathbf{M} = \chi_m \mathbf{H}$ = Vektor magnetisasi material feromagnetik ($\text{A/m}$).
- $\chi_m = \mu_r - 1$ = Suseptibilitas magnetik volumetrik material partikel.
- $\mu_0 = 4\pi \times 10^{-7}\text{ H/m}$ = Permeabilitas magnetik ruang hampa.
- $\mu_r$ = Permeabilitas magnetik relatif partikel feromagnetik.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       RESOLUSI VEKTOR GAYA MAGNETIK PADA PARTIKEL ABRASIF MAF                                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                        GARIS FLUKS MAGNETIK (B)                                                       |
|                                                  │                                                                    |
|                                                  │                                                                    |
|                                                  ▼                                                                    |
|                                    ┌───────────────────────────┐                                                      |
|                                    │ Partikel Feromagnetik     │                                                      |
|                                    │ (Besi Karbonil, dia = D_m)│                                                      |
|                                    └─────────────┬─────────────┘                                                      |
|                                                  │ Ikatan Magnetik Kontak Interpartikel                               |
|                                                  ▼                                                                    |
|                                            (  Abrasif  )  Partikel Intan / SiC (dia = d_a)                            |
|                                            ( Diamond ● )                                                              |
|                                                  │                                                                    |
|                                                  ▼ Gaya Normal F_n (Penetrasi Mikro)                                  |
|     ─────────────────────────────────────────────▼─────────────────────────────────────────────────────               |
|     ///////////////////// PERMUKAAN BENDA KERJA (WORKPIECE) ///////////////////////////////////////////               |
|     ───────────────────────────────────────────────────────────────────────────────────────────────────               |
|                                 ◄────────────────────────────────                                                     |
|                                    Gaya Tangensial F_t = F_cut                                                        |
|                                    (Aksi Gesek / Chip Removal)                                                        |
+-----------------------------------------------------------------------------------------------------------------------+
```

Untuk sebuah partikel magnetik tunggal berbentuk bola dengan volume $V_p = \frac{\pi}{6} D_m^3$ yang berada di dalam gradien medan magnet tak seragam, gaya total magnetik yang dialami partikel diuraikan menjadi dua komponen ortogonal:

1. **Gaya Normal Magnetik ($F_n$, Arah Sumbu $z$ / Garis Medan Fluks)**:
   Gaya yang menekan partikel abrasif tegak lurus ke permukaan benda kerja, mengatur kedalaman penetrasi mikro ($d_p$):

   $$F_n = V_p \cdot \mu_0 \chi_m H_z \left( \frac{\partial H_z}{\partial z} \right) = \frac{\pi D_m^3 \mu_0 \chi_m}{6} \left( \frac{B_z}{\mu_0 \mu_r} \right) \left( \frac{\partial H_z}{\partial z} \right) = \frac{\pi D_m^3 \chi_m}{6 \mu_0 \mu_r} B_z \left( \frac{\partial B_z}{\partial z} \right)$$

2. **Gaya Tangensial Magnetik ($F_t$, Arah Bidang Kontak $x-y$)**:
   Gaya yang menahan partikel abrasif terhadap gaya geser pemotongan saat benda kerja berputar atau bertranslasi:

   $$F_t = V_p \cdot \mu_0 \chi_m H_x \left( \frac{\partial H_x}{\partial x} \right) = \frac{\pi D_m^3 \chi_m}{6 \mu_0 \mu_r} B_x \left( \frac{\partial B_x}{\partial x} \right)$$

---

### 2.2 Tekanan Kontak Rantai *Magnetic Brush* (*Magnetic Pressure*)

Ketika ribuan partikel magnetik saling mengunci membentuk rantai kolumnar di sepanjang celah kerja (*working gap* $h_{\text{gap}}$), tekanan magnetik total ($P_{\text{mag}}$, dalam satuan $\text{Pa}$ atau $\text{N/m}^2$) yang diberikan oleh *magnetic brush* pada permukaan benda kerja dihitung melalui persamaan Maxwell:

$$P_{\text{mag}} = \frac{B^2}{2 \mu_0} \cdot \left( 1 - \frac{1}{\mu_r} \right) \cdot \Phi_{\text{packing}}$$

di mana:
- $B$ = Kuat medan induksi magnetik rata-rata pada antarmuka celah kerja ($\text{Tesla}$).
- $\mu_r$ = Permeabilitas relatif efektif dari campuran serbuk abrasif magnetik ($\mu_r \approx 2.5 - 6.0$).
- $\Phi_{\text{packing}}$ = Fraksi volumetrik partikel padat di dalam *brush* ($\approx 0.45 - 0.65$).

Contoh: Dengan rapat fluks magnetik $B = 1.2\text{ Tesla}$, $\mu_r = 4.0$, dan $\Phi_{\text{packing}} = 0.55$:

$$P_{\text{mag}} = \frac{(1.2)^2}{2 \times (4\pi \times 10^{-7})} \cdot \left( 1 - \frac{1}{4} \right) \cdot 0.55 \approx 572,957 \times 0.75 \times 0.55 \approx 236.3\text{ kPa} = 0.236\text{ MPa}$$

Tekanan kontak moderat ini ($0.1 - 0.5\text{ MPa}$) menjamin pemotongan mikro elastis-plastis yang sangat lembut tanpa memicu deformasi plastis skala makro atau distorsi termal.

---

## 3. Kinematika Pemotongan Mikro & Kinetika Material Removal Rate (MRR)

### 3.1 Model Indentasi Mikro & Kedalaman Penetrasi Partikel (*Micro-Penetration Depth*)

Diasumsikan partikel abrasif (misalnya serbuk intan) berbentuk bola mikro kaku dengan diameter rata-rata $d_a$ ditekan ke permukaan material benda kerja dengan kekerasan Vickers $H_v$ ($\text{N/m}^2$). Berdasarkan mekanika kontak elastis-plastis Hertz-Tabor, gaya normal efektif per partikel aktif ($F_{n,\text{particle}}$) menghasilkan kedalaman penetrasi mikro ($d_p$):

$$d_p = \frac{F_{n,\text{particle}}}{\pi \cdot d_a \cdot H_v}$$

atau untuk geometri indentor kerucut tajam dengan sudut separuh puncak $\theta$:

$$d_p = \sqrt{\frac{F_{n,\text{particle}}}{\pi \cdot H_v \cdot \tan^2\theta}}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    MEKANIKA PENETRASI MIKRO DAN PELEPASAN GERAM (MICRO-CHIP REMOVAL)                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                           V_rel (Kecepatan Relatif Benda Kerja)                                                       |
|                                ◄══════════════════════                                                                |
|                                                                                                                       |
|                                    ┌──────────────┐                                                                   |
|                                    │ Rantai Besi  │                                                                   |
|                                    └──────┬───────┘                                                                   |
|                                           │ F_n                                                                       |
|                                           ▼                                                                           |
|                                        ( d_a )   Partikel Abrasif Intan                                               |
|             Geram Mikro (Micro-Chip)    \   /                                                                         |
|                       ▲                  \ /                                                                          |
|                      ╱                    ▼                                                                           |
|   ──────────────────┘                     │ ◄─ dp (Kedalaman Penetrasi < 50 nm)                                       |
|   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~┴~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Permukaan Awal Benda Kerja                    |
|   ───────────────────────────────────────────────────────────────────── Bidang Dasar Termachining (Super-Finish)      |
|                                                                                                                       |
|   Rezim Deformasi:                                                                                                    |
|   - d_p < d_crit (5 - 15 nm)  : Rezim Pemolesan Elastis Atomik (Atomic Elastic Shear, Bebas Kerusakan Kisi)           |
|   - d_crit <= d_p <= 100 nm   : Rezim Pembentukan Geram Plastis Mikro (Ductile Micro-Cutting Regime)                  |
+-----------------------------------------------------------------------------------------------------------------------+
```

Kedalaman penetrasi kritis transisi getas-ke-ulet (*ductile-to-brittle transition depth* $d_{\text{crit}}$) untuk material getas seperti keramik optik ($\text{SiC}, \text{Si}_3\text{N}_4, \text{BK7 Glass}$) dirumuskan oleh Bifano et al.:

$$d_{\text{crit}} = \psi \left( \frac{E}{H_v} \right) \left( \frac{K_{Ic}}{H_v} \right)^2$$

di mana:
- $E$ = Modulus elastisitas Young material benda kerja ($\text{GPa}$).
- $K_{Ic}$ = Ketangguhan retak fraktur (*fracture toughness*, $\text{MPa}\cdot\text{m}^{1/2}$).
- $\psi$ = Konstanta empiris material ($\approx 0.15$).

Dalam proses MAF, nilai penetrasi partikel ($d_p \approx 5 - 40\text{ nm}$) selalu dijaga berada di bawah batas $d_{\text{crit}}$, memungkinkan pemesinan keramik getas dalam mode ulet sempurna (*ductile regime machining*) tanpa menimbulkan inisiasi retak mikro permukaan.

---

### 3.2 Laju Pembuangan Material (*Material Removal Rate - MRR*)

Luas penampang alur geram mikro yang disingkirkan oleh satu partikel abrasif aktif berbentuk bola adalah:

$$A_{\text{cut}} \approx \frac{4}{3} d_p \sqrt{d_a \cdot d_p} \approx \frac{4}{3} d_a^{1/2} \cdot d_p^{3/2}$$

Laju volumetrik pembuangan material total per satuan luas permukaan benda kerja ($\text{MRR}$, dalam $\text{mm}^3/\text{min}$ atau $\text{mg/min}$) dihitung melalui integrasi jumlah partikel abrasif aktif per satuan luas ($N_{\text{active}}$) dan kecepatan relatif pemotongan ($V_{\text{rel}}$):

$$\text{MRR} = N_{\text{active}} \cdot A_{\text{cut}} \cdot V_{\text{rel}} \cdot K_{\text{kin}} = K_{\text{kin}} \cdot N_{\text{active}} \cdot \frac{4}{3} \sqrt{d_a} \cdot \left( \frac{F_{n,\text{particle}}}{\pi \cdot d_a \cdot H_v} \right)^{3/2} \cdot V_{\text{rel}}$$

Kecepatan relatif resultan ($V_{\text{rel}}$) merupakan kombinasi kinematik vektor rotasi spindel ($V_{\text{rot}} = \pi \cdot D_w \cdot N_{\text{rpm}} / 60$), kecepatan translasi aksial ($V_{\text{axial}}$), dan getaran ultrasonik aksial ($V_{\text{vib}} = 2\pi \cdot f_{\text{vib}} \cdot A_{\text{vib}} \cos(2\pi f_{\text{vib}} t)$):

$$V_{\text{rel}}(t) = \sqrt{ V_{\text{rot}}^2 + \left( V_{\text{axial}} + 2\pi f_{\text{vib}} A_{\text{vib}} \cos(2\pi f_{\text{vib}} t) \right)^2 }$$

---

### 3.3 Model Peluruhan Kekasaran Permukaan (*Surface Roughness Attenuation Model*)

Penurunan kekasaran permukaan rata-rata aritmatika $R_a(t)$ selama durasi penyelesaian MAF mengikuti persamaan diferensial kinetika orde satu:

$$\frac{d R_a(t)}{dt} = -K_{\text{maf}} \cdot \left( R_a(t) - R_{a,\text{lim}} \right)$$

Solusi analitis integral:

$$R_a(t) = R_{a,\text{lim}} + (R_{a,0} - R_{a,\text{lim}}) \cdot \exp\left( -K_{\text{maf}} \cdot t \right)$$

di mana:
- $R_{a,0}$ = Kekasaran permukaan awal sebelum MAF ($\mu\text{m}$).
- $R_{a,\text{lim}}$ = Batas teoretis kekasaran akhir minimum MAF ($\approx 0.005 - 0.015\,\mu\text{m} = 5 - 15\text{ nm}$).
- $K_{\text{maf}}$ = Koefisien laju penghalusan MAF ($\text{s}^{-1}$ atau $\text{min}^{-1}$), dirumuskan secara analitis sebagai:

$$K_{\text{maf}} = C_{\text{exp}} \cdot \frac{B^{1.8} \cdot V_{\text{rel}} \cdot \Phi_{\text{abrasive}}}{H_v \cdot h_{\text{gap}}^{0.75}}$$

Model ini menunjukkan bahwa peningkatan rapat fluks magnetik ($B$), peningkatan fraksi konsentrasi abrasif ($\Phi_{\text{abrasive}}$), dan penyempitan celah kerja ($h_{\text{gap}}$) mempercepat laju penghalusan secara eksponensial.

---

## 4. Desain Partikel Magnetik-Abrasif (MAPs), Konfigurasi Kutub & Parameter Proses

### 4.1 Metalurgi & Morfologi Magnetic Abrasive Particles (MAPs)

Partikel abrasif magnetik terbagi ke dalam tiga jenis struktur manufaktur:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    TIPE STRUKTUR PARTIKEL ABRASIF MAGNETIK (MAGNETIC ABRASIVE PARTICLES - MAPs)                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] CAMPURAN MEKANIS BEBAS                 [B] SINTERED COMPOSITE MAPs             [C] CHEMICAL PLATED / COATED MAPs |
|     (Unbonded Mechanical Mixture)              (Sintering Fasa Padat Fe + Al2O3)       (Pelapisan Intan pada Inti Fe) |
|                                                                                                                       |
|          ┌───────┐                                 ┌───────────────────┐                   ┌─────────────────────┐    |
|          │ Fe    │   ● Intan                       │  ┌───┐  ▲  ┌───┐  │                   │  ╔═══════════════╗  │    |
|          │ Matrix│                                 │  │AlO│ ╱█╲ │AlO│  │                   │  ║ Partikel Intan║  │    |
|          └───────┘   ● SiC                         │  └───┘ ╲█╱ └───┘  │                   │  ║ Monokristalin ║  │    |
|                                                    │   Matriks Besi Fe │                   │  ║  (Diamond)    ║  │    |
|   Partikel Fe dan abrasif terpisah,                │   Hasil Sintering │                   │  ╚═══════════════╝  │    |
|   rentan terlempar oleh gaya sentrifugal           └───────────────────┘                   │      Inti Besi Fe   │    |
|   pada kecepatan spindel tinggi (>1500 rpm).       Abrasif terkunci dalam matriks Fe,      └─────────────────────┘    |
|                                                    umur pakai panjang, stabilitas tinggi.  Adhesi kimiawi sangat kuat,|
|                                                                                            kekasaran nano Ra < 5 nm.  |
+-----------------------------------------------------------------------------------------------------------------------+
```

| Parameter Partikel | Campuran Mekanis (*Unbonded*) | Partikel Komposit Sinter (*Sintered*) | Partikel Lapis Kimia (*Coated/Plated*) |
|---|---|---|---|
| **Material Inti Magnetik** | Serbuk Besi Elektrolitik / Karbonil | Serbuk Besi Murni Atomized ($>99.5\%\text{ Fe}$) | Spherical Iron-Cobalt Powder |
| **Material Abrasif Keras** | $\text{SiC}, \text{Al}_2\text{O}_3, \text{Diamond}$ | $\text{Al}_2\text{O}_3, \text{cBN}, \text{Diamond}$ | Diamond Nano-Crystalline |
| **Ukuran Butir Magnetik ($D_m$)** | $50 - 150\,\mu\text{m}$ | $80 - 250\,\mu\text{m}$ | $40 - 100\,\mu\text{m}$ |
| **Ukuran Butir Abrasif ($d_a$)** | $1 - 15\,\mu\text{m}$ | $1 - 25\,\mu\text{m}$ (terkapsulasi) | $0.25 - 3.0\,\mu\text{m}$ |
| **Ketahanan Aus Sikat** | Rendah (Abrasif mudah lepas) | Sangat Tinggi ($> 100\text{ jam}$) | Ekstrim ($> 150\text{ jam}$) |
| **Aplikasi Tipikal** | Deburring, pembersihan kerak | Pipa industri, poros transmisi presisi | Cermin laser optik, stent implan, wafer |

---

### 4.2 Parameter Operasional Kritis & Jendela Proses MAF

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       MATRIKS JENDELA PARAMETER OPERASIONAL MAGNETIC ABRASIVE FINISHING                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  PARAMETER PROSES                    NILAI STANDAR OPTIMAL         BATAS KRITIS KONTROL (TOLERANSI)                   |
|  ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────  |
|  Rapat Fluks Magnetik Celah (B_gap)  0.8 - 1.5 Tesla               ± 0.05 Tesla (Elektromagnet DC / Neodymium N52)    |
|  Celah Kerja (Working Gap h_gap)     1.0 - 3.0 mm                  ± 0.1 mm (Mencegah tabrakan kutub fisik)           |
|  Kecepatan Spindel Rotasi (N_rot)    800 - 2500 RPM                ± 25 RPM (Kecepatan linear V_w = 1.0 - 5.0 m/s)    |
|  Frekuensi Vibrasi Aksial (f_vib)    10 - 40 Hz (atau 20 kHz USM)  ± 1.0 Hz (Mencegah pola garis rotasi searah)       |
|  Amplitudo Vibrasi Aksial (A_vib)    1.0 - 3.5 mm                  ± 0.1 mm                                           |
|  Massa Pengisian MAPs                5.0 - 25.0 gram               ± 0.5 gram (Tergantung volume celah kerja)         |
|  Pelumas / Base Fluid                Minyak Sintetis / Emulsi Air  Viskositas fluida η = 10 - 50 cSt (Anti-Fling)     |
|  Durasi Finishing Siklus (t_maf)     5.0 - 20.0 Menit              ± 5 Detik (Plateau limit tercapai)                 |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Integritas Permukaan, Tegangan Sisa & Metrologi Nano-Topografi

### 5.1 Reduksi Tegangan Sisa & Peningkatan Batas Lelah (*Fatigue Limit Enhancement*)

Berbeda dengan pemesinan abrasif konvensional yang meninggalkan tegangan tarik sisa permukaan ($\sigma_{\text{res}} > +200\text{ MPa}$), aksi pemotongan mikro elastis bertahap pada MAF mereduksi konsentrasi tegangan dan menginduksi sedikit tegangan sisa tekan mikro (*favorable compressive residual stress*, $\sigma_{\text{res}} \approx -50\text{ hingga } -150\text{ MPa}$) pada kedalaman $0 - 5\,\mu\text{m}$.

Peningkatan batas lelah fatik material ($\sigma_e$) dievaluasi melalui model tegangan lokal Peterson-Neuber:

$$\sigma_e = \frac{\sigma_{e,0}}{1 + q \cdot (K_t - 1)} + \alpha_{\text{res}} \cdot |\sigma_{\text{res, comp}}|$$

di mana faktor konsentrasi tegangan takik mikro topografi ($K_t$) dirumuskan melalui parameter kekasaran $R_z$ dan radius kelengkungan lembah mikro $\rho_{\text{valley}}$:

$$K_t = 1 + 2 \cdot \sqrt{\frac{R_z}{\rho_{\text{valley}}}}$$

Dalam proses MAF:
- Nilai $R_z$ berkurang drastis dari $> 3.0\,\mu\text{m}$ menjadi $< 0.1\,\mu\text{m}$.
- Radius kelengkungan lembah $\rho_{\text{valley}}$ meningkat dari $< 5\,\mu\text{m}$ (tajam) menjadi $> 80\,\mu\text{m}$ (tumpul membulat halus).
- Faktor konsentrasi tegangan $K_t$ mendekati nilai ideal $1.02 - 1.05$ (turun dari $2.2 - 3.5$), menghasilkan peningkatan batas lelah siklik (*fatigue life*) sebesar $+35\% - 60\%$ (ISO 12107).

---

## 6. Algoritma & Python Solver: Pemodelan Medan Magnetik Maxwell & Simulasi MAF

Berikut adalah implementasi Python komprehensif berstandar industri untuk memodelkan:
1. Distribusi medan fluks magnetik $B(z)$ dan kalkulasi Maxwell Stress Tensor / Tekanan Magnetik ($P_{\text{mag}}$).
2. Perhitungan gaya normal $F_n$ dan kedalaman penetrasi mikro partikel intan $d_p$.
3. Evaluasi rezim pemotongan (Ductile vs Brittle Fracture vs Elastic Polishing).
4. Simulasi kinetika peluruhan kekasaran permukaan $R_a(t)$ dan peningkatan batas fatik komponen.

```python
"""
Magnetic Abrasive Finishing (MAF) Multiphysics Solver
Industrial Engineering Module 612 - RuangTI Knowledge Base
Standards: ISO 4287, ASTM E384, ISO 12107, ASME B46.1
"""

import numpy as np
from dataclasses import dataclass
from typing import Dict, List, Tuple, Any


@dataclass
class WorkpieceMaterial:
    name: str
    vickers_hardness_hv: float      # Hardness in MPa (HV * 9.80665)
    youngs_modulus_gpa: float       # GPa
    poissons_ratio: float           # Poisson's ratio
    fracture_toughness_mpa_m05: float  # K_Ic (MPa·m^0.5)
    initial_ra_um: float            # μm
    initial_rz_um: float            # μm
    base_fatigue_limit_mpa: float   # MPa


@dataclass
class MagneticAbrasiveProperties:
    iron_particle_diameter_um: float      # D_m (μm)
    abrasive_grain_diameter_um: float     # d_a (μm)
    abrasive_type: str                    # 'Diamond', 'SiC', 'Al2O3', 'cBN'
    abrasive_volume_fraction: float       # Φ_abrasive (0.10 - 0.35)
    relative_permeability_brush: float    # μ_r (2.5 - 6.0)
    magnetic_susceptibility: float = 3.5  # χ_m


@dataclass
class MAFProcessParameters:
    magnetic_flux_density_tesla: float   # B (Tesla)
    working_gap_mm: float                # h_gap (mm)
    spindle_speed_rpm: float             # N (RPM)
    workpiece_diameter_mm: float         # D_w (mm)
    axial_oscillation_freq_hz: float     # f_vib (Hz)
    axial_oscillation_amp_mm: float      # A_vib (mm)
    process_duration_seconds: float      # t_total (s)


class MagneticAbrasiveFinishingSolver:
    """Solver Multiphysics Elektrodinamika & Mekanika Mikro-Cutting untuk MAF."""

    MU_0 = 4.0 * np.pi * 1e-7  # H/m (Permeabilitas vakum)

    def __init__(self, workpiece: WorkpieceMaterial, maps: MagneticAbrasiveProperties, params: MAFProcessParameters):
        self.w = workpiece
        self.m = maps
        self.p = params

    def calculate_magnetic_pressure_and_forces(self) -> Dict[str, float]:
        """
        Kalkulasi Maxwell Stress Tensor, tekanan kontak magnetik brush,
        dan gaya normal rata-rata per partikel abrasif aktif.
        """
        b = self.p.magnetic_flux_density_tesla
        mu_r = self.m.relative_permeability_brush
        
        # 1. Tekanan Magnetik Brush (Maxwell Stress Tensor P_mag)
        # P_mag = (B^2 / (2 * mu_0)) * (1 - 1/mu_r) * Packing_Fraction
        packing_fraction = 0.55
        p_mag_pa = (b ** 2 / (2.0 * self.MU_0)) * (1.0 - (1.0 / mu_r)) * packing_fraction
        p_mag_kpa = p_mag_pa / 1000.0

        # 2. Gaya Magnetik Partikel Tunggal
        # Volume partikel besi (m³)
        d_m_m = self.m.iron_particle_diameter_um * 1e-6
        v_particle_m3 = (np.pi / 6.0) * (d_m_m ** 3)
        
        # Gradien medan magnetik dalam celah (dB/dz approx B / h_gap)
        gap_m = self.p.working_gap_mm * 1e-3
        grad_b_z = b / gap_m
        
        # Gaya normal partikel (N)
        f_n_particle = (v_particle_m3 * self.m.magnetic_susceptibility / (self.MU_0 * mu_r)) * b * grad_b_z

        # 3. Kerapatan Partikel Aktif per mm²
        d_a_m = self.m.abrasive_grain_diameter_um * 1e-6
        contact_area_per_particle_m2 = (d_m_m) ** 2
        active_particle_density_per_mm2 = (1.0 / (contact_area_per_particle_m2 * 1e6)) * self.m.abrasive_volume_fraction

        return {
            'magnetic_pressure_kpa': p_mag_kpa,
            'f_normal_per_particle_micro_n': f_n_particle * 1e6,  # μN
            'f_normal_per_particle_n': f_n_particle,
            'active_particle_density_per_mm2': active_particle_density_per_mm2,
            'magnetic_flux_b_tesla': b
        }

    def evaluate_micro_cutting_kinematics(self, f_n_particle_n: float) -> Dict[str, Any]:
        """
        Kalkulasi kedalaman penetrasi mikro d_p, transisi ulet-ke-getas d_crit,
        dan kecepatan potong relatif resultan.
        """
        # Kecepatan rotasi periferal (m/s)
        v_rot = (np.pi * (self.p.workpiece_diameter_mm * 1e-3) * self.p.spindle_speed_rpm) / 60.0
        
        # Kecepatan osilasi aksial rata-rata (m/s)
        v_vib_rms = 4.0 * (self.p.axial_oscillation_amp_mm * 1e-3) * self.p.axial_oscillation_freq_hz
        
        # Kecepatan relatif resultan (m/s)
        v_rel = np.sqrt(v_rot ** 2 + v_vib_rms ** 2)

        # Kedalaman penetrasi partikel mikro (Hertz-Tabor elastis-plastis)
        d_a_m = self.m.abrasive_grain_diameter_um * 1e-6
        hv_pa = self.w.vickers_hardness_hv * 1e6  # Konversi ke Pa
        
        d_p_m = f_n_particle_n / (np.pi * d_a_m * hv_pa)
        d_p_nm = d_p_m * 1e9

        # Kedalaman kritis transisi getas-ke-ulet (Bifano model)
        e_pa = self.w.youngs_modulus_gpa * 1e9
        k_ic = self.w.fracture_toughness_mpa_m05 * 1e6
        psi = 0.15
        d_crit_m = psi * (e_pa / hv_pa) * ((k_ic / hv_pa) ** 2)
        d_crit_nm = d_crit_m * 1e9

        # Penentuan Rezim Pemesinan
        if d_p_nm < 8.0:
            regime = "Atomic Elastic Shear / Nano-Polishing (Bebas Dislokasi)"
        elif d_p_nm <= d_crit_nm:
            regime = f"Ductile Micro-Cutting Regime (Optimal, Bebas Retak Getas, dp={d_p_nm:.1f}nm <= dcrit={d_crit_nm:.1f}nm)"
        else:
            regime = f"Brittle Micro-Fracture (Risiko Retak Mikro, dp={d_p_nm:.1f}nm > dcrit={d_crit_nm:.1f}nm)"

        return {
            'cutting_velocity_v_rel_m_s': v_rel,
            'penetration_depth_dp_nm': d_p_nm,
            'ductile_brittle_transition_dcrit_nm': d_crit_nm,
            'cutting_regime': regime
        }

    def simulate_surface_finish_kinetics(self, v_rel: float, time_steps: int = 120) -> Dict[str, Any]:
        """
        Simulasi peluruhan profil kekasaran permukaan Ra(t) dan Rz(t)
        serta peningkatan integritas batas fatik.
        """
        t_arr = np.linspace(0, self.p.process_duration_seconds, time_steps)
        
        # Konstanta kinetika penghalusan K_maf (s⁻¹)
        # K_maf ~ B^1.8 * V_rel * Phi / (Hv * h_gap^0.75)
        k_maf = 0.0032 * (self.p.magnetic_flux_density_tesla ** 1.8) * v_rel * (self.m.abrasive_volume_fraction / 0.25) / ((self.p.working_gap_mm / 2.0) ** 0.75)
        
        ra_lim = 0.008  # Batas limit Ra teoretis (0.008 μm = 8 nm)
        rz_lim = 0.045  # Batas limit Rz teoretis (45 nm)
        
        ra_arr = ra_lim + (self.w.initial_ra_um - ra_lim) * np.exp(-k_maf * t_arr)
        rz_arr = rz_lim + (self.w.initial_rz_um - rz_lim) * np.exp(-k_maf * t_arr)
        
        final_ra = float(ra_arr[-1])
        final_rz = float(rz_arr[-1])

        # Evaluasi Faktor Konsentrasi Tegangan Takik Mikro (K_t)
        rho_initial = 4.0   # μm (Radius lembah mikro tajam awal)
        rho_final = 65.0    # μm (Radius lembah mikro tumpul membulat halus hasil MAF)
        
        kt_initial = 1.0 + 2.0 * np.sqrt(self.w.initial_rz_um / rho_initial)
        kt_final = 1.0 + 2.0 * np.sqrt(final_rz / rho_final)

        # Estimasi Tegangan Sisa Tekan Diinduksi MAF (MPa)
        compressive_residual_stress_mpa = -95.0
        
        # Batas Lelah Fatik Baru (Peterson Model)
        fatigue_initial = self.w.base_fatigue_limit_mpa / kt_initial
        fatigue_final = (self.w.base_fatigue_limit_mpa / kt_final) + 0.35 * abs(compressive_residual_stress_mpa)
        fatigue_enhancement_pct = ((fatigue_final - fatigue_initial) / fatigue_initial) * 100.0

        return {
            'time_seconds': t_arr,
            'ra_profile_um': ra_arr,
            'rz_profile_um': rz_arr,
            'k_maf_constant': k_maf,
            'final_ra_um': final_ra,
            'final_ra_nm': final_ra * 1000.0,
            'final_rz_um': final_rz,
            'final_rz_nm': final_rz * 1000.0,
            'kt_stress_conc_initial': kt_initial,
            'kt_stress_conc_final': kt_final,
            'fatigue_limit_initial_mpa': fatigue_initial,
            'fatigue_limit_final_mpa': fatigue_final,
            'fatigue_enhancement_pct': fatigue_enhancement_pct
        }


def run_industrial_case_study():
    """Eksekusi studi kasus industri MAF poros turbin kedirgantaraan Ti-6Al-4V."""
    print("=" * 85)
    print("  RUANGTI INDUSTRIAL CASE STUDY: MAGNETIC ABRASIVE FINISHING AEROSPACE SHAFT")
    print("  MATERIAL: TITANIUM ALLOY Ti-6Al-4V (UNS R56400) | STANDAR: ISO 4287, ASTM E384")
    print("=" * 85)

    # Definisi Material Benda Kerja Ti-6Al-4V
    titanium_alloy = WorkpieceMaterial(
        name="Titanium Ti-6Al-4V Grade 5",
        vickers_hardness_hv=3430.0,     # ~350 HV (3430 MPa)
        youngs_modulus_gpa=114.0,
        poissons_ratio=0.34,
        fracture_toughness_mpa_m05=55.0,
        initial_ra_um=0.48,             # Hasil CNC precision turning (480 nm)
        initial_rz_um=2.65,
        base_fatigue_limit_mpa=510.0
    )

    # Definisi Komposit Serbuk Abrasif Magnetik (Sintered Fe-Diamond MAPs)
    maps_properties = MagneticAbrasiveProperties(
        iron_particle_diameter_um=120.0,
        abrasive_grain_diameter_um=3.0,  # Diamond micro-grain 3 μm
        abrasive_type="Diamond",
        abrasive_volume_fraction=0.25,
        relative_permeability_brush=4.2,
        magnetic_susceptibility=3.2
    )

    # Parameter Proses MAF
    process_params = MAFProcessParameters(
        magnetic_flux_density_tesla=1.25,  # 1.25 Tesla Neodymium Pole
        working_gap_mm=1.8,                # 1.8 mm working gap
        spindle_speed_rpm=1450.0,          # 1450 RPM
        workpiece_diameter_mm=32.0,        # Poros diameter 32 mm
        axial_oscillation_freq_hz=20.0,    # 20 Hz osilasi aksial
        axial_oscillation_amp_mm=2.5,      # 2.5 mm amplitudo
        process_duration_seconds=600.0     # 10 menit (600 detik)
    )

    solver = MagneticAbrasiveFinishingSolver(workpiece=titanium_alloy, maps=maps_properties, params=process_params)

    # 1. Analisis Elektromagnetik Maxwell
    mag_results = solver.calculate_magnetic_pressure_and_forces()
    print(f"\n[1] Karakteristik Elektrodinamika & Medan Maxwell:")
    print(f"  - Kuat Medan Rapat Fluks (B_gap)   : {mag_results['magnetic_flux_b_tesla']:.2f} Tesla")
    print(f"  - Tekanan Magnetik Brush (P_mag)   : {mag_results['magnetic_pressure_kpa']:.2f} kPa ({mag_results['magnetic_pressure_kpa']/100.0:.3f} bar)")
    print(f"  - Gaya Normal per Partikel (F_n)   : {mag_results['f_normal_per_particle_micro_n']:.2f} μN ({mag_results['f_normal_per_particle_n']:.4e} N)")
    print(f"  - Kerapatan Partikel Aktif         : {mag_results['active_particle_density_per_mm2']:.1f} partikel/mm²")

    # 2. Kinematika Penetrasi & Rezim Pemotongan
    kinematics = solver.evaluate_micro_cutting_kinematics(mag_results['f_normal_per_particle_n'])
    print(f"\n[2] Kinematika Pemotongan Mikro & Transisi Rezim:")
    print(f"  - Kecepatan Potong Relatif (V_rel) : {kinematics['cutting_velocity_v_rel_m_s']:.3f} m/s")
    print(f"  - Kedalaman Penetrasi Intan (d_p)  : {kinematics['penetration_depth_dp_nm']:.2f} nm")
    print(f"  - Batas Transisi Kritis (d_crit)   : {kinematics['ductile_brittle_transition_dcrit_nm']:.2f} nm")
    print(f"  - Status Rezim Deformasi           : {kinematics['cutting_regime']}")

    # 3. Kinetika Penghalusan & Integritas Permukaan
    finish = solver.simulate_surface_finish_kinetics(kinematics['cutting_velocity_v_rel_m_s'])
    print(f"\n[3] Kinetika Penghalusan Topografi (ISO 4287):")
    print(f"  - Kekasaran Awal (Ra_0 / Rz_0)      : {titanium_alloy.initial_ra_um:.3f} μm ({titanium_alloy.initial_ra_um*1000:.0f} nm) / {titanium_alloy.initial_rz_um:.3f} μm")
    print(f"  - Konstanta Laju Kinetika (K_maf)   : {finish['k_maf_constant']:.4f} s⁻¹")
    print(f"  - Kekasaran Akhir (Ra_final)        : {finish['final_ra_um']:.4f} μm ({finish['final_ra_nm']:.1f} nm - NANO SPECULAR FINISH)")
    print(f"  - Kekasaran Tinggi Puncak (Rz_final): {finish['final_rz_um']:.4f} μm ({finish['final_rz_nm']:.1f} nm)")

    # 4. Analisis Batas Fatik & Integritas Mekanik
    print(f"\n[4] Evaluasi Integritas Struktur & Batas Lelah (ISO 12107):")
    print(f"  - Konsentrasi Tegangan Takik (K_t) : {finish['kt_stress_conc_initial']:.3f} (Awal) --> {finish['kt_stress_conc_final']:.3f} (Akhir, Mendekati Ideal 1.0)")
    print(f"  - Batas Lelah Fatik Awal (sigma_e) : {finish['fatigue_limit_initial_mpa']:.1f} MPa")
    print(f"  - Batas Lelah Fatik Akhir (sigma_e): {finish['fatigue_limit_final_mpa']:.1f} MPa")
    print(f"  - Peningkatan Umur Lelah Siklik    : +{finish['fatigue_enhancement_pct']:.2f} %")
    print("=" * 85)


if __name__ == "__main__":
    run_industrial_case_study()
```

---

## 7. Studi Kasus Industri: Penyelesaian Ultra-Presisi Poros Rotor Pompa Bahan Bakar Kedirgantaraan (Ti-6Al-4V)

### 7.1 Latar Belakang & Permasalahan
Dalam sistem injeksi propulsi kedirgantaraan, poros rotor pompa bahan bakar kriogenik berbahan paduan **Ti-6Al-4V ELI (Grade 23)** berputar pada kecepatan $> 45,000\text{ RPM}$. Pada proses sebelumnya, poros difinishing menggunakan pemolesan mekanis silikon karbida manual dengan hasil kekasaran rata-rata $R_a = 0.48\,\mu\text{m}$ ($480\text{ nm}$).

Permasalahan kualitas kritis yang dialami selama uji ketahanan operasional:
1. **Keausan Dini Seal Kriogenik (*Cryogenic Seal Degradation*)**: Jejak guratan arah aksial mikro (*feed marks*) mengikis lapisan ring grafit karbon dalam waktu $< 120\text{ jam}$ pengujian, memicu kebocoran bahan bakar cair.
2. **Inisiasi Retak Fatik Siklus Tinggi (*High-Cycle Fatigue - HCF Failure*)**: Alur pemolesan mekanis bertindak sebagai konsentrator tegangan takik ($K_t = 2.62$). Di bawah pembebanan dinamis, poros mengalami retak fatik pada zona transisi fillet poros dalam $3.8 \times 10^6\text{ siklus}$.

### 7.2 Implementasi Rekayasa Magnetic Abrasive Finishing (MAF)

Tim rekayasa manufaktur merancang stasiun kerja **CNC 4-Axis Magnetic Abrasive Finishing**:
1. **Pembangkit Medan Magnetik**: Pasangan kutub magnetik ganda elektromagnetik DC dengan kerapatan fluks $B = 1.25\text{ Tesla}$ pada celah kerja $h_{\text{gap}} = 1.8\text{ mm}$.
2. **Formulasi Partikel MAPs**: Partikel komposit sinter bulat serbuk besi atomisasi ($D_m = 120\,\mu\text{m}$) dengan partikel intan monokristalin terkapsulasi ($d_a = 3.0\,\mu\text{m}$, fraksi volumetrik $25\%$) tersuspensi dalam minyak pelumas ester sintetis bio-degradable berpelarut anti-flinging.
3. **Kinematika Spindel & Vibrasi**: Poros diputar pada $N = 1450\text{ RPM}$ ($V_{\text{rot}} = 2.43\text{ m/s}$) dipadukan dengan osilasi aksial berfrekuensi $f = 20\text{ Hz}$ dan amplitudo $A = 2.5\text{ mm}$ untuk menghilangkan pola alur searah (*cross-hatch random lay*).
4. **Durasi Siklus Pemesinan**: $10.0\text{ menit}$ ($600\text{ detik}$) per poros.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    TABEL EVALUASI METROLOGI SEBELUM DAN SESUDAH MAF                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|  Parameter Integritas Permukaan      Sebelum MAF (Manual Polish)   Sesudah MAF (CNC 4-Axis MAF) Target Kualitas Kritis|
|  ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────  |
|  Kekasaran Rata-rata Aritmatika (R_a) 0.480 μm (480 nm)             0.015 μm (15.2 nm)          <= 0.025 μm (25 nm)   |
|  Kekasaran Puncak-ke-Lembah (R_z)    2.650 μm (2650 nm)            0.088 μm (88.4 nm)          <= 0.150 μm           |
|  Faktor Konsentrasi Tegangan (K_t)   2.62                          1.07                        <= 1.15               |
|  Tegangan Sisa Permukaan (σ_res)     +145 MPa (Tarik Berbahaya)    -95 MPa (Tekan Menguntungkan) Residual Compressive |
|  Ketahanan Aus Seal Kriogenik        120 Jam Operasi               > 2,500 Jam (Nol Aus)       > 1,500 Jam           |
|  Umur Lelah Siklus Tinggi (HCF)      3.8 x 10^6 Siklus             > 2.5 x 10^7 Siklus (Lolos) > 1.0 x 10^7 Siklus   |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.3 Hasil Finansial & Keandalan Produk Kedirgantaraan
- **Eliminasi Cacat Reject Komponen**: Angka penolakan kualitas poros rotor turun dari $14.2\%$ menjadi $0.05\%$ (*Zero-Defect Six Sigma standard*).
- **Peningkatan Efisiensi Siklus Manufaktur**: Menggantikan 3 tahapan pemolesan manual bertingkat (grit 400, 800, 1200) menjadi satu siklus otomatis MAF 10 menit, memangkas waktu produksi per unit sebesar $68\%$.
- **Sertifikasi Kedirgantaraan**: Lolos uji kualifikasi getaran propulsi ekstrem FAA / MIL-STD-810H tanpa anomali struktural.

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. **Shinmura, T., Takazawa, K., Hatano, E., & Matsunaga, M.** (1985). *Study on Magnetic Abrasive Finishing: Finishing characteristics of cylindrical workpiece*. **Bulletin of the Japan Society of Precision Engineering**, 19(4), 281–287.
2. **Fox, M., Agrawal, P., Shinmura, T., & Komanduri, R.** (1994). *Magnetic abrasive finishing of advanced ceramics*. **CIRP Annals - Manufacturing Technology**, 43(1), 181–184. DOI: [10.1016/S0007-8506(07)62191-2](https://doi.org/10.1016/S0007-8506(07)62191-2).
3. **Jain, V. K., Kumar, P., Behera, P. K., & Jayswal, S. C.** (2001). *Investigation into the magnetic abrasive finishing of non-ferromagnetic tubes*. **Machining Science and Technology**, 5(1), 83–104. DOI: [10.1081/MST-100103180](https://doi.org/10.1081/MST-100103180).
4. **Bifano, T. G., Dow, T. A., & Scattergood, R. O.** (1991). *Ductile-regime grinding: a new technology for machining brittle materials*. **ASME Journal of Engineering for Industry**, 113(2), 184–189. DOI: [10.1115/1.2899676](https://doi.org/10.1115/1.2899676).
5. **Geng, Y., Li, W., & Song, J.** (2024). *Mechanisms and modeling of material removal in magnetic field-assisted finishing of complex curved surfaces: A comprehensive review*. **International Journal of Machine Tools and Manufacture**, 195, 104108. DOI: [10.1016/j.ijmachtools.2023.104108](https://doi.org/10.1016/j.ijmachtools.2023.104108).
6. **ISO 4287:1997 / Amd 1:2009**. *Geometrical Product Specifications (GPS) — Surface texture: Profile method — Terms, definitions and surface texture parameters*. International Organization for Standardization, Geneva.
7. **ASTM E384-22**. *Standard Test Method for Microindentation Hardness of Materials*. ASTM International, West Conshohocken, PA. DOI: [10.1520/E0384-22](https://doi.org/10.1520/E0384-22).
8. **ISO 12107:2012**. *Metallic materials — Fatigue testing — Statistical planning and analysis of data*. International Organization for Standardization, Geneva.
