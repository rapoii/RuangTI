# Modul 633: Single Point Diamond Turning (SPDT) & Ultra-Precision Ductile-Regime Machining: Kinematika Pemotongan Nanometrik, Model Kedalaman Kritis Bifano (Critical Depth of Cut), Kristalografi Anisotropi Monokristal Diamond, dan Integritas Permukaan Cermin Optik Asferis/Bebas-Bentuk (ISO 10110, ASME B46.1, CIRP Annals & ASTM E384)

## 1. Pengantar & Konteks Industri: Pemesinan Ultra-Presisi Nanometrik

*Single Point Diamond Turning* (SPDT) adalah proses pemesinan ultra-presisi (*ultra-precision machining*) yang menggunakan pahat bermata potong berlian monokristal alami atau sintetis (*Single-Crystal Diamond / SCD*) dengan ketajaman tepi pemotongan (*cutting edge radius*) skala nanometer ($r_n \approx 10 - 50\text{ nm}$). SPDT memungkinkan pembentukan langsung permukaan optik presisi tinggi (*optical mirror finish*) pada komponen asferis (*aspheric*), toroid, dan permukaan bebas (*freeform optics*) tanpa memerlukan tahapan pemolesan manual (*post-polishing/lapping*) yang memakan waktu dan menurunkan akurasi geometris profil.

Aplikasi industri utama SPDT mencakup:
1. **Optik Inframerah & Pertahanan (Infrared / Defense Optics)**: Lensa dan jendela inframerah termal gelombang panjang (*Long-Wave Infrared / LWIR* $8 - 12\ \mu\text{m}$) dari kristal Germanium ($\text{Ge}$), Silikon ($\text{Si}$), Seng Sulfida ($\text{ZnS}$), dan Seng Selenida ($\text{ZnSe}$).
2. **Cermin Laser & Dirgantara (Laser Mirrors & Aerospace)**: Cermin berdaya tinggi berbahan Tembaga Bebas Oksigen (*OFHC Copper*), paduan Aluminium 6061-T6 *optical grade*, dan lapisan Nikel Tak-Berelektrolit (*Electroless Nickel / NiP*).
3. **Optik Polimer & Cetakan Lensa Ponsel**: Cetakan sisipan baja/NiP untuk pencetakan injeksi lensa kamera *smartphone* dengan akurasi bentuk puncak-ke-lembah (*Peak-to-Valley / PV*) $< 0.1\ \mu\text{m}$ dan kekasaran permukaan rata-rata ($Ra$) $< 2\text{ nm}$.
4. **Implan Medis & Lensa Intraokular (IOL)**: Pembuatan lensa kontak hidrogel presisi dan lensa mata intraokular berbahan PMMA.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       ARSITEKTUR MESIN SINGLE POINT DIAMOND TURNING (SPDT) & KONTROL LINGKUNGAN                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐    |
|    │ ENKAPUSLASI RUANG BERSIH (CLEANROOM ISO 5) & KONTROL TERMAL PRESISI TINGGI (20.00 ± 0.01 °C)                │    |
|    └──────────────────────────────────────────────────────┬──────────────────────────────────────────────────────┘    |
|                                                           │                                                           |
|             SPINDEL UDARA AEROSTATIS                      │                   PAHAT BERLIAN MONOKRISTAL               |
|             (Aerostatic Air Bearing Spindle)              │                   (Single Crystal Diamond Tool)           |
|             • Runout Asial/Radial < 15 nm                 │                   • Edge Radius r_n = 10 - 30 nm          |
|             • Kecepatan: 500 - 8000 RPM                   │                   • Rake Angle: -25° s/d 0°               |
|                       │                                   │                   • Relief Angle: 5° s/d 10°              |
|                       ▼                                   │                             │                             |
|             ┌───────────────────┐                         │                             ▼                             |
|             │   CHUCK VAKUM     │                         │                      ┌─────────────┐                      |
|             │  (Porous Ceramic) │                         │                      │ Pahat SCD   │                      |
|             └─────────┬─────────┘                         │                      └──────┬──────┘                      |
|                       │                                   ▼                             │                             |
|                       │ Benda Kerja (Ge / Si / NiP) ─────────────► [Kontak Nanometrik]  │                             |
|                       └─────────────────────────────────────────────────────────────────┘                             |
|                                                           │                                                           |
|    ┌──────────────────────────────────────────────────────┴──────────────────────────────────────────────────────┐    |
|    │ MEJA GESER HIDROSTATIS BERPENGGERAK MOTOR LINIER (Linear Motor Hydrostatic Guideway X/Z)                    │    |
|    │ • Resolusi Enkoder Holografik Laser / Kisi Kisi Difraksi: 0.01 nm s/d 0.1 nm                                │    |
|    │ • Lurus Gerak (Straightness of Travel): < 50 nm sepanjang 100 mm                                            │    |
|    └──────────────────────────────────────────────────────┬──────────────────────────────────────────────────────┘    |
|                                                           │                                                           |
|    ┌──────────────────────────────────────────────────────┴──────────────────────────────────────────────────────┐    |
|    │ ISOLASI GETARAN AKTIF (Granite Machine Bed & Pneumatic / Piezo Vibration Dampers, Cutoff < 1.0 Hz)          │    |
|    └─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar internasional, pedoman metrologi permukaan, dan acuan profesi yang mengatur proses pemesinan ultra-presisi ini meliputi:
- **ISO 10110-1 s/d 10110-19**: *Optics and photonics — Preparation of drawings for optical elements and systems — Part 8: Surface texture; Part 5: Surface form tolerances*.
- **ISO 14978**: *Geometrical Product Specifications (GPS) — General concepts and requirements for GPS measuring equipment*.
- **ASME B46.1**: *Surface Texture (Surface Roughness, Waviness, and Lay)*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **CIRP Annals - Manufacturing Technology**: *Keynotes on Ultra-Precision Machining and Ductile-Regime Material Removal of Brittle Solids*.

---

## 2. Mekanika Pemotongan Nanometrik & Transisi Daktil-ke-Getas (*Ductile-to-Brittle Transition*)

Dalam pemesinan konvensional, material getas (*brittle materials*) seperti silikon kristal tunggal, germanium, kaca silika, dan keramik lanjutan mengalami keruntuhan getas (*brittle fracture*) yang menghasilkan retak mikro (*micro-cracking*), pecahan terkelupas (*pitting/spalling*), dan integritas permukaan yang buruk.

Namun, ketika kedalaman pemotongan efektif (*uncut chip thickness* $t_1$ atau $h_m$) berada di bawah nilai ambang batas kritis yang dikenal sebagai **Kedalaman Pemotongan Kritis (*Critical Depth of Cut*, $d_c$)**, mekanisme pelepasan material bertransformasi secara fundamental dari fraktur getas (*cleavage/fracture*) menjadi deformasi plastis kontinyu (*ductile-mode cutting*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       MEKANISME TRANSISI DAKTIL-KE-GETAS (DUCTILE-TO-BRITTLE TRANSITION)                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    A. REZIM FRAKTUR GETAS (d > d_c)                       B. REZIM PEMOTONGAN DAKTIL (d < d_c)                        |
|       (Brittle Fracture Mode - Gagal / Retak)                (Ductile Regime Mode - Halus / Cermin)                   |
|                                                                                                                       |
|          Geram Terfragmentasi (Brittle Chips)                   Geram Pita Kontinyu (Continuous Ribbon Chip)          |
|                  *  *   *                                            \  \  \                                          |
|                *   *  *                                               \  \  \                                         |
|             ┌──────────────┐ PAHAT BERLIAN                         ┌───\──\───┐ PAHAT BERLIAN                         |
|             │              │                                       │          │                                       |
|             │              │                                       │          │                                       |
|    ─────────┴──┐           │                              ─────────┴──┐       │                                       |
|    ▲           │ \         │                              ▲           │ \     │                                       |
|    │ Kedalaman │  \ Retak  │                              │ Kedalaman │  \    │ Zona Tekanan Hidrostatis Tinggi       |
|    │ d > d_c   │   \ Mikro │                              │ d < d_c   │   \   │ (High Hydrostatic Pressure Zone       |
|    ▼           │    \ (Crack)                             ▼           │    \  │ Phase Transformation Si-I -> Si-II)   |
|    ════════════╪═════▼═════╪══════════════                ════════════╪═════▼═╪══════════════════════════════════════ |
|    Benda Kerja │ Retak     │ Permukaan Rusak              Benda Kerja │ Permukaan Halus Sempurna (Mirror Ra < 2 nm)   |
|    Getas       │ Merambat  │ (Subsurface Damage)          Dideformasi │ Bebas Retak Mikro (Zero Subsurface Crack)     |
|                │ ke Bawah  │                              Secara      │                                               |
|                ▼           │                              Plastis     │                                               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Model Energi Kritis Bifano (*Bifano Energy Balance Model*)
Thomas G. Bifano (1991) merumuskan model analitis kedalaman pemotongan kritis berdasarkan keseimbangan energi antara energi deformasi plastis spesifik ($E_p$) dan energi perambatan retak fraktur getas ($E_f$).

Ketika volume material dideformasi, energi regangan plastis per satuan volume sebanding dengan kekerasan material ($H$). Sebaliknya, energi yang diperlukan untuk merambatkan retak baru per satuan luas sebanding dengan ketangguhan retak kritis ($K_{Ic}$) atau laju pelepasan energi kritis ($G_c = K_{Ic}^2 / E$).

Dengan menyamakan energi fraktur permukaan dengan energi plastisitas volume pada skala kritis $d_c$:

$$d_c = \xi \left( \frac{E}{H} \right) \left( \frac{K_{Ic}}{H} \right)^2 = \xi \cdot \frac{E \cdot K_{Ic}^2}{H^3}$$

Di mana:
- $d_c$ = Kedalaman pemotongan kritis (*critical depth of cut*), $[\text{m}]$ atau $[\text{nm}]$.
- $\xi$ = Konstanta tak-berdimensi empiris proporsionalitas geometri pemotongan ($\xi \approx 0.15$ untuk proses pembubutan berlian dan penggerindaan presisi menurut Bifano et al.).
- $E$ = Modulus elastisitas Young material benda kerja, $[\text{Pa}]$ atau $[\text{GPa}]$.
- $H$ = Kekerasan indentasi mikro/nano Vickers / Knoop material, $[\text{Pa}]$ atau $[\text{GPa}]$.
- $K_{Ic}$ = Ketangguhan retak kritis (*plane-strain fracture toughness*), $[\text{Pa}\cdot\text{m}^{1/2}]$ atau $[\text{MPa}\cdot\text{m}^{1/2}]$.

### 2.2 Tabel Sifat Mekanis & Ambang Batas $d_c$ Material Optik Kristalin

| Material Optik | Modulus Young $E$ (GPa) | Kekerasan $H$ (GPa) | Ketangguhan Retak $K_{Ic}$ ($\text{MPa}\cdot\text{m}^{1/2}$) | Rasio $E/H$ | Kedalaman Kritis $d_c$ Teoretis (nm) | $d_c$ Eksperimental SPDT (nm) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Germanium ($\text{Ge}$)** | $103$ | $7.8$ | $0.55$ | $13.2$ | $98.4$ | $80 - 120$ |
| **Silikon Kristal ($\text{Si}\langle 100\rangle$)** | $165$ | $11.5$ | $0.95$ | $14.3$ | $168.7$ | $120 - 180$ |
| **Seng Sulfida ($\text{ZnS}$)** | $74.5$ | $2.5$ | $0.80$ | $29.8$ | $457.6$ | $350 - 500$ |
| **Seng Selenida ($\text{ZnSe}$)** | $67.2$ | $1.2$ | $0.55$ | $56.0$ | $1764.0$ | $1200 - 1800$ |
| **Kalsium Fluorida ($\text{CaF}_2$)** | $75.8$ | $1.6$ | $0.35$ | $47.4$ | $341.2$ | $250 - 380$ |
| **Kaca Silika Fusi ($\text{Fused SiO}_2$)** | $73.0$ | $8.5$ | $0.75$ | $8.59$ | $86.5$ | $20 - 45$ |
| **Safir Monokristal ($\text{Al}_2\text{O}_3$)** | $345$ | $21.0$ | $2.20$ | $16.4$ | $183.2$ | $40 - 75$ |

---

## 3. Transformasi Fasa Tekanan Tinggi (*High-Pressure Phase Transformation / HPPT*)

Pada semikonduktor kovalen seperti Silikon ($\text{Si}$) dan Germanium ($\text{Ge}$), pemotongan daktil dipermudah oleh fenomena fisika zat padat yang sangat unik: **Transformasi Fasa Akibat Tekanan Hidrostatis Tinggi (*High-Pressure Phase Transformation / HPPT*)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|               TRANSFORMASI FASA KRISTAL SILIKON DI BAWAH TEKANAN KONTAK NANOMETRIK PAHAT BERLIAN                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|     Struktur Semikonduktor Getas                   Fasa Logam Daktil (Metallic)             Struktur Amorf / Metastabil|
|       [ Si-I Diamond Cubic ]                        [ Si-II beta-Tin Tetragonal ]            [ a-Si / Si-III / Si-XII ]|
|                                  P > 11 - 12 GPa                               Pelepasan Tekanan                       |
|        Pita Energi (Eg = 1.12 eV)  ───────────────►     Konduktor Metalik Daktil   ────────────────►  Lapisan Terdeformasi|
|          Sangat Getas / Keras                           Mudah Tergeser Secara Plastis                   Bebas Retak    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Pembebanan Kontak (*Loading Stage*)**:
   Ujung pahat berlian monokristal yang memiliki radius pembulatan tepi $r_n$ memberikan gaya tekan terpusat yang sangat besar. Tekanan hidrostatis lokal ($P_h = -\frac{1}{3}\text{Tr}(\boldsymbol{\sigma})$) di zona kontak mencapai $12 - 15\text{ GPa}$.
   Pada tekanan $P_h \ge 11.3\text{ GPa}$, struktur kristal silikon bertransformasi dari fasa awal kubik intan (*Diamond Cubic, Si-I*) menjadi fasa tetragon metastabil padat logam $\beta\text{-Sn}$ (*Si-II*). Fasa Si-II bersifat metalik, daktil, dan memiliki mobilitas dislokasi sangat tinggi sehingga dapat terpotong secara plastis membentuk pita geram tipis tanpa menimbulkan patahan.

2. **Pelepasan Beban (*Unloading / Recovery Stage*)**:
   Saat pahat bergerak meninggalkan zona potong, tekanan hidrostatik merosot secara drastis ($P_h \to 0$). Fasa Si-II bertransformasi kembali menjadi silikon amorf (*amorphous silicon, a-Si*) atau campuran fasa polikristal metastabil (*Si-III bc8* dan *Si-XII r8*). Ketebalan lapisan amorf terinduksi permukaan ini berkisar antara $5 - 20\text{ nm}$ dan dapat dideteksi menggunakan spektroskopi Raman mikro (*Micro-Raman Spectroscopy*).

---

## 4. Kristalografi Anisotropi Pahat Berlian & Efek Radius Tepi Pemotongan

### 4.1 Orientasi Kristal Pahat Berlian Monokristal (*Single Crystal Diamond*)
Berlian monokristal merupakan material paling keras di alam semesta ($H \approx 80 - 100\text{ GPa}$), namun memiliki sifat mekanis dan laju keausan yang sangat anisotropik tergantung pada orientasi bidang kristalnya menurut indeks Miller $\langle hkl\rangle$:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       ORIENTASI KRISTALOGRAFI MUKA PAHAT BERLIAN MONOKRISTAL (SCD TOOL)                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|     Bidang (100) - Kubik Intan               Bidang (110) - Dodekahedral             Bidang (111) - Oktahedral        |
|     ──────────────────────────               ───────────────────────────             ─────────────────────────        |
|     • Kekerasan sedang-tinggi                • Ketahanan aus gesek optimum           • Bidang belahan alami           |
|     • Sangat mudah diasah tajam              • Pilihan standar muka garuk            • Sangat getas terhadap gaya     |
|       (grindable & polishable)                 pahat SPDT kualitas optik               kejut / impak potong           |
|     • Orientasi rake face populer            • Ketahanan chipping luar biasa         • Dihindari untuk ujung potong   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Bidang Garuk Pahat (*Rake Face Plane*)**: Umumnya diorientasikan pada bidang $(110)$ atau $(100)$ dengan arah pemotongan paralel terhadap vektor kristalografi $[100]$ atau $[110]$ untuk meminimalkan keausan kawah (*crater wear*) dan mencegah sumbing mikroskopis (*micro-chipping*).
2. **Sudut Garuk Negatif (*Negative Rake Angle*)**: Pada pemesinan daktil material keras-getas, sudut garuk nominal disetel negatif ($\alpha = -15^\circ\text{ s/d }-30^\circ$). Sudut negatif menghasilkan medan tegangan kompresi hidrostatis tinggi ($-\sigma_h$) di depan ujung pahat, yang krusial untuk mencegah inisiasi retak tarik (*tensile cracks*) menurut kriteria Griffith.

### 4.2 Efek Radius Tepi Pahat (*Tool Edge Radius Effect*) & Tebal Geram Minimum ($h_{min}$)
Pada skala nanometrik, asumsi mata pahat tajam sempurna (*infinitely sharp tool*) tidak lagi berlaku. Radius pembulatan ujung pahat ($r_n = 10 - 50\text{ nm}$) memiliki ukuran yang sebanding dengan tebal pemotongan ($t_1$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                      FENOMENA TEBAL GERAM MINIMUM (MINIMUM CHIP THICKNESS h_min) DI UJUNG PAHAT                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                             PAHAT BERLIAN (Radius Ujung r_n)                                          |
|                                            ┌───────────────────────────────┐                                          |
|                                            │                               │                                          |
|                                            │   Sudut Garuk Efektif         │                                          |
|                                            │   Sangat Negatif (alpha_eff)  │                                          |
|                                            │                               │                                          |
|                                            └───────────────┬───────────────┘                                          |
|                                                            │ r_n (10-30 nm)                                           |
|                                                            ▼                                                          |
|                    GERAM TERBENTUK (t_1 > h_min)          .-'""'-.  Titik Stagnasi (Stagnation Point S)               |
|                           ▲                             .'        '. ◄────────── Sudut Stagnasi (theta_s)             |
|                          /                             /     S      \                                                 |
|                         /                             |      •       |                                                |
|    ────────────────────┘                              \             /                                                 |
|    ▲ Tebal Potong t_1                                  '.         .'                                                  |
|    │                                                     '-....-'                                                     |
|    ▼ (t_1 < h_min: TERJADI PLOWING & ELASTIC RECOVERY)      │                                                         |
|    ═════════════════════════════════════════════════════════╪═════════════════════════════════════════════════        |
|    BENDA KERJA                                              │                                                         |
|                                                             ▼ Pemulihan Elastis Permukaan (Elastic Recovery delta_e)  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Tebal Geram Minimum ($h_{min}$)**:
   Ambang batas minimum tebal lapisan yang harus dipotong agar geram dapat terlepas secara plastis. Jika tebal potong sesaat $t_1 < h_{min}$, material tidak terpotong menjadi geram, melainkan tertekan secara elastis dan terbajak secara plastis (*plowing / rubbing*).
   Secara analitis:
   
   $$h_{min} = r_n \cdot (1 - \cos \theta_s)$$
   
   Di mana $\theta_s$ adalah sudut titik stagnasi material pada radius pahat ($\theta_s \approx 30^\circ - 45^\circ$). Untuk material logam dan kristal semikonduktor:
   
   $$h_{min} \approx 0.10 \cdot r_n \quad \text{s/d} \quad 0.25 \cdot r_n$$

2. **Pemulihan Elastis (*Elastic Recovery*, $\delta_e$)**:
   Setelah pahat melintas, deformasi elastis di bawah ujung pahat mengalami pemulihan balik ke atas sebesar:
   
   $$\delta_e \approx 0.6 \cdot \frac{H}{E} \cdot r_n$$
   
   Pemulihan elastis ini bergesekan langsung dengan muka bebas pahat (*clearance/flank face*), menimbulkan keausan bidang bebas (*flank wear*) dan mempengaruhi kekasaran permukaan akhir.

---

## 5. Kinematika Pembentukan Permukaan & Pemodelan Kekasaran (*Surface Roughness*)

Pada proses pembubutan ujung bundar (*nose turning*) dengan pahat berlian ber-radius hidung $R_{tool}$ dan gerak makan per putaran (*feed rate*) $f$:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PROFIL KEKASARAN PERMUKAAN TEORETIS KINEMATIK (CUSP HEIGHT / KETINGGIAN PUNCAK)                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                Pahat Posisi (i-1)            Pahat Posisi (i)            Pahat Posisi (i+1)                           |
|                  .------------.               .------------.               .------------.                             |
|                 /              \             /              \             /              \                            |
|                /   Radius       \           /   Radius       \           /   Radius       \                           |
|               (    Hidung Pahat  )         (    Hidung Pahat  )         (    Hidung Pahat  )                          |
|                \   R_tool       /           \   R_tool       /           \   R_tool       /                           |
|                 '--.        .--'             '--.        .--'             '--.        .--'                            |
|                     \      /                     \      /                     \      /                                |
|                      \    /                       \    /                       \    /                                 |
|                       '--'                         '--'                         '--'                                  |
|                         \                           / \                           /                                   |
|                          \                         /   \                         /                                    |
|    ───────────────────────\───────────────────────/─────\───────────────────────/─────────────────────────────       |
|                            \       Puncak        /       \       Puncak        /                                      |
|                             \      (Cusp)       /         \      (Cusp)       /   ▲ Ketinggian Puncak Teoretis        |
|                              \       ▲         /           \       ▲         /    │ R_max (Peak-to-Valley P-V)        |
|                               \      │        /             \      │        /     ▼                                   |
|                                '────┼────────'               '────┼────────'  ─────────────────────────────────       |
|                                      │                             │                                                  |
|                                      │◄────── Gerak Makan f ──────►│                                                  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.1 Model Kekasaran Kinematik Klasik
1. **Kekasaran Maksimum Puncak-ke-Lembah Teoretis ($R_{max}$ / $R_t$ / $PV_{kin}$)**:
   
   $$R_{max} = R_{tool} - \sqrt{R_{tool}^2 - \frac{f^2}{4}} \approx \frac{f^2}{8 R_{tool}}$$

2. **Kekasaran Rata-Rata Aritmetika Teoretis ($Ra_{kin}$)**:
   
   $$Ra_{kin} = \frac{1}{f} \int_0^f |z(x) - \bar{z}| \, dx \approx \frac{f^2}{18 \sqrt{3} \cdot R_{tool}} \approx \frac{0.0321 \cdot f^2}{R_{tool}}$$

### 5.2 Model Kekasaran Komprehensif Diperluas (*Extended Surface Roughness Model*)
Kekasaran permukaan aktual pada SPDT merupakan superposisi dari kinematika ideal, efek pembulatan radius ujung pahat ($r_n$), *material swelling / side flow*, serta getaran mikro relatif dinamis antara pahat dan spindel ($\Delta z_{vib}$):

$$Ra_{aktual} = \sqrt{Ra_{kin}^2 + Ra_{edge}^2 + Ra_{flow}^2 + Ra_{vib}^2}$$

Di mana kontribusi efek radius tepi pemotongan dinyatakan sebagai:

$$Ra_{edge} \approx 0.25 \cdot h_{min} \left( 1 - \frac{h_{min}}{2 r_n} \right)$$

---

## 6. Algoritma & Implementasi Python: SPDT Process Optimization & Simulation Engine

Berikut adalah program Python mandiri (*standalone executable*) untuk mensimulasikan mekanika pemesinan daktil SPDT, memverifikasi ketercapaian rezim daktil berdasarkan kriteria kedalaman kritis Bifano, menghitung profil tegangan transisi fasa hidrostatis Si-II, serta mengoptimalkan parameter pemotongan ($f$, $R_{tool}$, spindle speed) untuk memenuhi toleransi ISO 10110 ($Ra < 2\text{ nm}$).

```python
"""
SPDT Precision Engineering Solver & Ductile Regime Machining Simulator
Sesuai standar ISO 10110, ASME B46.1, ASTM E384, dan Model Bifano-CIRP.
"""

from dataclasses import dataclass
import math
from typing import Dict, Tuple, List
import numpy as np


@dataclass(frozen=True)
class MaterialProperties:
    name: str
    youngs_modulus_gpa: float        # Modulus Young E (GPa)
    hardness_gpa: float              # Kekerasan Indentasi H (GPa)
    fracture_toughness_mpam05: float # Ketangguhan Retak K_Ic (MPa*m^0.5)
    hppt_threshold_pressure_gpa: float # Tekanan Hidrostatis Kritis Transisi Fasa (GPa)
    poissons_ratio: float            # Rasio Poisson nu


@dataclass(frozen=True)
class ToolGeometry:
    nose_radius_mm: float            # Nose radius pahat R_tool (mm)
    edge_radius_nm: float            # Cutting edge radius r_n (nm)
    rake_angle_deg: float            # Rake angle nominal alpha (derajat)
    clearance_angle_deg: float       # Clearance angle gamma (derajat)


@dataclass
class MachiningParameters:
    cutting_speed_m_per_min: float   # Kecepatan potong V_c (m/min)
    feed_rate_um_per_rev: float      # Gerak makan f (um/rev)
    depth_of_cut_nm: float           # Kedalaman potong sesaat d (nm)
    spindle_runout_nm: float         # Runout radial/aksial spindel (nm)
    vibration_amplitude_nm: float    # Amplitudo getaran sisa lingkungan (nm)


class SPDTProcessSimulator:
    def __init__(self, material: MaterialProperties, tool: ToolGeometry, params: MachiningParameters):
        self.mat = material
        self.tool = tool
        self.params = params

    def calculate_bifano_critical_depth(self, xi: float = 1.5) -> float:
        """
        Menghitung kedalaman pemotongan kritis d_c (nm) untuk pembubutan berlian (SPDT).
        Rumus Bifano diperluas dengan faktor geometri pemotongan:
        d_c = xi * (E / H) * (K_Ic / H)^2
        di mana xi approx 1.5 untuk pahat berlian nose turning dengan negative rake angle.
        """
        e_pa = self.mat.youngs_modulus_gpa * 1e9
        h_pa = self.mat.hardness_gpa * 1e9
        k_ic_pa = self.mat.fracture_toughness_mpam05 * 1e6

        d_c_m = xi * (e_pa / h_pa) * ((k_ic_pa / h_pa) ** 2)
        d_c_nm = d_c_m * 1e9
        return d_c_nm

    def calculate_minimum_chip_thickness(self) -> float:
        """
        Menghitung tebal geram minimum h_min (nm).
        h_min approx 0.15 * r_n
        """
        return 0.15 * self.tool.edge_radius_nm

    def evaluate_machining_regime(self) -> Dict[str, any]:
        """
        Mengevaluasi apakah parameter berada dalam rezim daktil murni,
        transisi, atau fraktur getas.
        """
        d_c = self.calculate_bifano_critical_depth()
        d_actual = self.params.depth_of_cut_nm
        h_min = self.calculate_minimum_chip_thickness()

        if d_actual <= d_c:
            regime = "DUCTILE_REGIME (Mirror Finish, Zero Crack)"
            is_ductile = True
        elif d_actual <= 1.25 * d_c:
            regime = "TRANSITION_ZONE (Marginal Micro-Pitting Risk)"
            is_ductile = False
        else:
            regime = "BRITTLE_FRACTURE (Surface Damage, Micro-Cracks)"
            is_ductile = False

        ratio_to_critical = d_actual / d_c
        return {
            "critical_depth_dc_nm": d_c,
            "actual_depth_nm": d_actual,
            "depth_ratio_d_over_dc": ratio_to_critical,
            "minimum_chip_thickness_hmin_nm": h_min,
            "machining_regime": regime,
            "is_ductile_valid": is_ductile,
        }

    def calculate_contact_hydrostatic_pressure(self) -> Dict[str, float]:
        """
        Menghitung estimasi medan tekanan kontak hidrostatis rata-rata P_mean (GPa)
        dan mengecek apakah melampaui batas HPPT untuk pembentukan fasa logam terdeformasi daktil.
        """
        h_gpa = self.mat.hardness_gpa
        alpha_rad = math.radians(abs(self.tool.rake_angle_deg))

        # P_mean approx H * (1 + 1.2 * sin(alpha_neg))
        p_hydro_gpa = h_gpa * (1.0 + 1.2 * math.sin(alpha_rad) + 0.3)
        hppt_reached = p_hydro_gpa >= self.mat.hppt_threshold_pressure_gpa

        return {
            "estimated_hydrostatic_pressure_gpa": p_hydro_gpa,
            "hppt_threshold_gpa": self.mat.hppt_threshold_pressure_gpa,
            "hppt_metallic_phase_active": hppt_reached,
        }

    def predict_surface_roughness(self) -> Dict[str, float]:
        """
        Menghitung prediksi kekasaran permukaan teoretis dan komprehensif (Ra & PV / Rmax)
        berdasarkan ISO 10110 & ASME B46.1.
        """
        f_mm = self.params.feed_rate_um_per_rev / 1000.0  # konversi ke mm
        r_tool_mm = self.tool.nose_radius_mm

        # 1. Kinematik Ideal
        # Rmax_kin = f^2 / (8 * R_tool)  [mm]
        rmax_kin_nm = (f_mm ** 2 / (8.0 * r_tool_mm)) * 1e6
        ra_kin_nm = (0.0321 * (f_mm ** 2) / r_tool_mm) * 1e6

        # 2. Efek Edge Radius & Minimum Chip Thickness (nm)
        h_min_nm = self.calculate_minimum_chip_thickness()
        r_n_nm = self.tool.edge_radius_nm
        ra_edge_nm = 0.25 * h_min_nm * (1.0 - (h_min_nm / (2.0 * r_n_nm)))

        # 3. Efek Runout Spindel & Getaran Mesin (nm)
        ra_vib_nm = 0.05 * math.sqrt(
            self.params.spindle_runout_nm ** 2 + self.params.vibration_amplitude_nm ** 2
        )

        # 4. Superposisi RMS Total
        ra_total_nm = math.sqrt(ra_kin_nm ** 2 + ra_edge_nm ** 2 + ra_vib_nm ** 2)
        pv_total_nm = rmax_kin_nm + (2.5 * ra_edge_nm) + (2.0 * ra_vib_nm)

        return {
            "Ra_kinematic_nm": ra_kin_nm,
            "Rmax_PV_kinematic_nm": rmax_kin_nm,
            "Ra_edge_effect_nm": ra_edge_nm,
            "Ra_vibration_noise_nm": ra_vib_nm,
            "Ra_predicted_total_nm": ra_total_nm,
            "PV_predicted_total_nm": pv_total_nm,
            "meets_laser_mirror_spec_ra_2nm": ra_total_nm <= 2.0,
        }


def run_unit_tests_and_demonstration():
    print("=" * 80)
    print("RUANGTI - SPDT ULTRA-PRECISION DUCTILE MACHINING SOLVER")
    print("Standar: ISO 10110, ASME B46.1, CIRP Annals, Bifano Model")
    print("=" * 80)

    # 1. Inisialisasi Material Monokristal Germanium (Ge) untuk Lensa Optik Inframerah LWIR
    ge_material = MaterialProperties(
        name="Monocrystalline Germanium (Ge <111>)",
        youngs_modulus_gpa=103.0,
        hardness_gpa=7.8,
        fracture_toughness_mpam05=0.55,
        hppt_threshold_pressure_gpa=9.5,
        poissons_ratio=0.26,
    )

    # 2. Inisialisasi Pahat Berlian Monokristal (SCD Diamond Tool)
    scd_tool = ToolGeometry(
        nose_radius_mm=1.5,
        edge_radius_nm=20.0,
        rake_angle_deg=-25.0,  # Negative rake angle untuk kompresi hidrostatik tinggi
        clearance_angle_deg=8.0,
    )

    # 3. Inisialisasi Parameter Pemesinan Ultra-Presisi
    machining_cfg = MachiningParameters(
        cutting_speed_m_per_min=120.0,
        feed_rate_um_per_rev=1.2,
        depth_of_cut_nm=65.0,       # Di bawah d_c Germanium (~98 nm)
        spindle_runout_nm=8.0,
        vibration_amplitude_nm=0.8,
    )

    solver = SPDTProcessSimulator(ge_material, scd_tool, machining_cfg)

    regime_res = solver.evaluate_machining_regime()
    hppt_res = solver.calculate_contact_hydrostatic_pressure()
    roughness_res = solver.predict_surface_roughness()

    print(f"\n[1] Material: {ge_material.name}")
    print(f"    • Modulus Young (E)           : {ge_material.youngs_modulus_gpa:.1f} GPa")
    print(f"    • Micro-Hardness (H)          : {ge_material.hardness_gpa:.1f} GPa")
    print(f"    • Fracture Toughness (K_Ic)   : {ge_material.fracture_toughness_mpam05:.2f} MPa*m^0.5")
    print(f"    • Kedalaman Kritis Bifano (d_c): {regime_res['critical_depth_dc_nm']:.2f} nm")
    print(f"    • Kedalaman Aktual (d)        : {regime_res['actual_depth_nm']:.2f} nm")
    print(f"    • Rasio Kedalaman (d / d_c)   : {regime_res['depth_ratio_d_over_dc']:.3f}")
    print(f"    • Status Rezim Pemotongan     : {regime_res['machining_regime']}")

    print(f"\n[2] Analisis Transformasi Fasa Tekanan Tinggi (HPPT):")
    print(f"    • Estimasi Tekanan Kontak     : {hppt_res['estimated_hydrostatic_pressure_gpa']:.2f} GPa")
    print(f"    • Ambang Batas Transisi Fasa  : {hppt_res['hppt_threshold_gpa']:.2f} GPa")
    print(f"    • Fasa Logam Daktil Aktif     : {hppt_res['hppt_metallic_phase_active']}")

    print(f"\n[3] Prediksi Metrologi Topografi Permukaan (ISO 10110 / ASME B46.1):")
    print(f"    • Ra Kinematik Ideal          : {roughness_res['Ra_kinematic_nm']:.3f} nm")
    print(f"    • Ra Efek Edge Radius Pahat   : {roughness_res['Ra_edge_effect_nm']:.3f} nm")
    print(f"    • Ra Noise Spindel/Getaran    : {roughness_res['Ra_vibration_noise_nm']:.3f} nm")
    print(f"    • Ra Prediksi Total (RMS)     : {roughness_res['Ra_predicted_total_nm']:.3f} nm")
    print(f"    • Peak-to-Valley (PV / Rmax)  : {roughness_res['PV_predicted_total_nm']:.3f} nm")
    print(f"    • Kepatuhan Spek Optik Cermin : {roughness_res['meets_laser_mirror_spec_ra_2nm']}")

    # Unit Tests / Assertions
    assert regime_res["is_ductile_valid"] is True, "Pemesinan harus berada dalam rezim daktil"
    assert hppt_res["hppt_metallic_phase_active"] is True, "Tekanan hidrostatis harus memicu fasa logam"
    assert roughness_res["Ra_predicted_total_nm"] < 2.0, "Kekasaran permukaan harus di bawah 2.0 nm"
    print("\n>>> SELURUH UNIT TEST & ASSERTION VALIDASI FISIKA BERHASIL (100% PASS) <<<")


if __name__ == "__main__":
    run_unit_tests_and_demonstration()
```

---

## 7. Studi Kasus Industri: Manufaktur Lensa Asferis Germanium Inframerah (LWIR 8-12 $\mu\text{m}$) untuk Sensor Dirgantara

### 7.1 Latar Belakang Masalah & Spesifikasi Komponen
Sebuah industri manufaktur optik kedirgantaraan memproduksi elemen lensa asferis Germanium monokristal ($\text{Ge}\langle 111\rangle$) berdiameter $\varnothing 80\text{ mm}$ untuk sistem pencitraan kamera termal inframerah FLIR (*Forward-Looking Infrared*).

Spesifikasi toleransi ketat menurut **ISO 10110**:
- Kesalahan bentuk asferis (*Peak-to-Valley Form Error*, $PV_{form}$): $\le 0.15\ \mu\text{m}\ (150\text{ nm})$.
- Kekasaran permukaan aritmetika rata-rata ($Ra$): $\le 1.8\text{ nm}$.
- Kerusakan bawah permukaan (*Subsurface Damage / SSD*): $0\text{ retak mikro}$ (kedalaman retak $< 5\text{ nm}$).
- *Transmittance* inframerah pada $\lambda = 10.6\ \mu\text{m}$: $\ge 98.5\%$ (setelah pelapisan AR *coating*).

### 7.2 Masalah Awal (Kondisi Eksisting)
Pada parameter awal ($f = 6.5\ \mu\text{m/rev}$, $d = 350\text{ nm}$, sudut garuk pahat $\alpha = 0^\circ$), rasio $d / d_c = 350 / 98.4 = 3.55$ (jauh melampaui batas daktil).
Akibatnya:
1. Terjadi keruntuhan getas getas masif berupa lubang mikroskopis (*micro-pitting*) dan retakan mikro sedalam $1.8\ \mu\text{m}$ di bawah permukaan.
2. Kekasaran permukaan $Ra$ mencapai $14.6\text{ nm}$, menyebabkan hamburan cahaya inframerah (*optical scattering*) tinggi.
3. *Yield rate* lolos uji interferometri laser Zygo hanya sebesar $38.2\%$.

### 7.3 Langkah Optimasi & Intervensi Rekayasa SPDT
1. **Reduksi Kedalaman Potong Sesaat**: Pemesinan *finishing* dibagi menjadi 2 lintasan: *semi-finishing* ($d = 120\text{ nm}$) dan *final ultra-fine finishing* ($d = 60\text{ nm} < d_c$).
2. **Optimalisasi Geometri Pahat SCD**: Mengganti pahat ke sudut garuk negatif $\alpha = -25^\circ$ dengan radius hidung $R_{tool} = 1.5\text{ mm}$ dan radius ujung pemotongan terinspeksi SEM $r_n = 18\text{ nm}$ untuk memicu transformasi fasa logam daktil Si-II/Ge-II.
3. **Kontrol Gerak Makan & Kecepatan Spindel**: Gerak makan $f$ diturunkan menjadi $1.2\ \mu\text{m/rev}$ dengan kecepatan potong konstan (*CSS*) $V_c = 110\text{ m/min}$ dikontrol spindel aerostatis berbasis vakum porus.
4. **Pelumasan Kabut Mikro (*Micro-Mist MQL*)**: Menggunakan pelumas hidrokarbon sintetik ultra-viskositas rendah untuk mengevakuasi pita geram tipis dari muka pahat dan mencegah goresan sekunder (*chip redeposition*).

### 7.4 Hasil Sebelum vs. Sesudah Optimasi

| Parameter Metrologi & Kinerja | Kondisi Awal (Rezim Getas) | Setelah Optimasi SPDT (Rezim Daktil Murni) | Target Standar ISO 10110 | Status Kepatuhan |
| :--- | :---: | :---: | :---: | :---: |
| **Kedalaman Potong Akhir ($d$)** | $350\text{ nm}$ | $60\text{ nm}$ | $< 98\text{ nm}$ | **Memenuhi ($d < d_c$)** |
| **Sudut Garuk Pahat ($\alpha$)** | $0^\circ$ | $-25^\circ$ | $-20^\circ \text{ s/d } -30^\circ$ | **Memenuhi** |
| **Kekasaran Permukaan ($Ra$)** | $14.6\text{ nm}$ | **$1.42\text{ nm}$** | $\le 1.80\text{ nm}$ | **Sangat Sesuai** |
| **Kekasaran Puncak-Lembah ($PV$)** | $92.4\text{ nm}$ | **$9.85\text{ nm}$** | $\le 15.0\text{ nm}$ | **Sangat Sesuai** |
| **Akurasi Bentuk Asferis ($PV_{form}$)** | $0.48\ \mu\text{m}$ | **$0.11\ \mu\text{m}$** | $\le 0.15\ \mu\text{m}$ | **Sangat Sesuai** |
| **Kedalaman Kerusakan Retak (SSD)** | $1800\text{ nm}$ | **$0\text{ nm}$ (Zero micro-crack)** | $0\text{ nm}$ | **Sangat Sesuai** |
| **Transmisi Optik LWIR ($\lambda=10.6\ \mu\text{m}$)** | $91.4\%$ | **$99.1\%$** | $\ge 98.5\%$ | **Sangat Sesuai** |
| **Lolos Inspeksi Pertama (*First Pass Yield*)** | $38.2\%$ | **$96.8\%$** | $\ge 95.0\%$ | **Lolos Kualifikasi Dirgantara** |

---

## 8. Standar Rujukan, Pedoman Profesi & Referensi Terverifikasi

1. **ISO 10110-8:2019**: *Optics and photonics — Preparation of drawings for optical elements and systems — Part 8: Surface texture*.
2. **ASME B46.1-2019**: *Surface Texture (Surface Roughness, Waviness, and Lay)*. The American Society of Mechanical Engineers, New York.
3. **Bifano, T. G., Dow, T. A., & Scattergood, R. O. (1991)**. *Ductile-Regime Grinding: A New Technology for Machining Brittle Materials*. **ASME Journal of Engineering for Industry**, 113(2), 184–189. DOI: [10.1115/1.2899676](https://doi.org/10.1115/1.2899676).
4. **Namba, Y., Saeki, N., & Ikawa, N. (2003)**. *Optical Surface Generation of Organic Nonlinear Crystals by Single-Point Diamond Turning*. **CIRP Annals - Manufacturing Technology**, 52(1), 475–478. DOI: [10.1016/S0007-8506(07)60629-5](https://doi.org/10.1016/S0007-8506(07)60629-5).
5. **Zhang, S. J., Chen, N., & Han, W. (2021)**. *Brittle-Ductile Transition and Nano-Surface Generation in Single-Point Diamond Turning of Single-Crystal Germanium*. **Precision Engineering & Applied Surface Science**. DOI: [10.2139/ssrn.3963571](https://doi.org/10.2139/ssrn.3963571).
6. **Fang, F. Z., Wu, H., & Zhou, W. (2007)**. *Modelling and experimental investigation on mechanism of nanometric cutting*. **International Journal of Machine Tools and Manufacture**, 47(9), 1396–1407.
7. **Goel, S., Luo, X., & Reuben, R. L. (2012)**. *Molecular dynamics simulation model for the ductile-regime machining of single crystal silicon*. **Applied Physics Letters**, 100(23), 231902.
8. **Groover, M. P. (2020)**. *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems (7th Edition)*. John Wiley & Sons, Inc.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
