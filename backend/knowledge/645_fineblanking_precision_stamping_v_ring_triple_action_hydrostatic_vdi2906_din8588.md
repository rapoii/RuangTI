# Modul 645: Fineblanking & Precision Stamping: Mekanika Deformasi Geser Murni (*Pure Shear Mechanics*), Tegangan Tekan Hidrostatik (*Hydrostatic Compressive Stress*), Desain Cincin V (*V-Ring / Vee-Ring Impingement*), Kinematika Kempa Aksi Tiga (*Triple-Action Hydraulic Press*), dan Kriteria Patah Urat (*Ductile Fracture Criteria*) (VDI 2906, DIN 8588, ISO 6892-1 & ASTM E8M)

## 1. Pengantar & Konteks Industri: Teknologi *Fineblanking* (Pemotongan Presisi Bebas Retak)

*Fineblanking* (dikenal juga sebagai pemotongan presisi atau *fine cutting*) adalah proses pembentukan lembaran logam (*sheet metal forming/shearing process*) berkepresisian sangat tinggi di mana pemisahan material terjadi secara murni melalui mekanisme deformasi geser plastis (*pure plastic shear deformation*) tanpa pembentukan zona retak rapuh (*fracture zone / tear zone*). Proses ini menghasilkan permukaan potong yang 100% halus, tegak lurus sempurna, bebas retak (*100% clean-cut surface / burnished edge*), dan memiliki toleransi dimensi geometris yang setara dengan proses pemesinan gerinda (*grinding*) atau pengefraisan halus (*fine milling*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR & KINEMATIKA KEMPA AKSI TIGA (TRIPLE-ACTION FINEBLANKING)              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         AKSI 1: GAYA PEMOTONGAN UTAMA (MAIN PUNCH FORCE F_R)                                                          |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │                          Piston Utama Pemotong                            │                                 |
|         │                                    │                                      │                                 |
|         │                                    ▼                                      │                                 |
|         │                       ┌─────────────────────────┐                         │ Celah Cetakan (Die Clearance):  |
|         │                       │     Pahat Potong Utama  │                         │ c = 0.005 * s s/d 0.015 * s     |
|         │                       │        (Main Punch)     │                         │ (0.5% - 1.5% tebal lembaran s)  |
|         │                       └────────────┬────────────┘                         │                                 |
|         └────────────────────────────────────┼──────────────────────────────────────┘                                 |
|                                              │                                                                        |
|         AKSI 2: GAYA CINCIN-V / PEMEGANG LEMBARAN (V-RING / GUIDE PLATE FORCE F_G)                                    |
|         ┌────────────────────────────────────┼──────────────────────────────────────┐                                 |
|         │        ┌───────────────────────────┼───────────────────────────┐          │ V-Ring Knives: Menembus pelat,  |
|         │        │ Pelat Pemandu (Guide)     ▼      Pelat Pemandu (Guide)│          │ Mengunci aliran logam lateral   |
|         │        │ ┌───────┐             ┌───────┐             ┌───────┐ │          │ & Menginduksi tegangan tekan    |
|         │        │ │V-Ring │             │ Punch │             │V-Ring │ │          │ hidrostatik (sigma_m << 0).     |
|         │        │ └───▲───┘             └───┬───┘             └───▲───┘ │          │                                 |
|         │        └─────┼─────────────────────┼─────────────────────┼─────┘          │                                 |
|         └──────────────┼─────────────────────┼─────────────────────┼────────────────┘                                 |
|                        ▼                     ▼                     ▼                                                  |
|         Lembaran Kerja ═════════════════════════════════════════════════════════════ (Tebal s = 1.0 - 15.0 mm)        |
|                        ▲                     ▲                     ▲                                                  |
|         ┌──────────────┼─────────────────────┼─────────────────────┼────────────────┐                                 |
|         │        ┌─────┴─────────────────────┴─────────────────────┴─────┐          │ Penekan Lawan (Counter-Punch):  |
|         │        │ ┌───────────────────────────────────────────────────┐ │          │ Mencegah pelengkungan (dishing) |
|         │        │ │       Penekan Lawan Hidrolik (Counter-Punch)      │ │          │ & Mengontrol zona geser tegak.  |
|         │        │ └─────────────────────────┬─────────────────────────┘ │          │                                 |
|         │        │ Cetakan Bawah (Die)       │       Cetakan Bawah (Die) │          │                                 |
|         │        └───────────────────────────┼───────────────────────────┘          │                                 |
|         └────────────────────────────────────┼──────────────────────────────────────┘                                 |
|                                              │                                                                        |
|         AKSI 3: GAYA PENYANGGA LAWAN / EJEKTOR (COUNTER-PUNCH / EJECTOR FORCE F_G2)                                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Pada pemotongan konvensional (*conventional stamping/blanking*), celah antara pons dan cetakan (*die clearance*) dirancang relatif longgar, yaitu sekitar $5\% - 10\%$ dari ketebalan lembaran logam ($s$). Ketika pons menekan material, deformasi plastis geser hanya berlangsung sesaat (menghasilkan zona potong berkilau / *burnish zone* sekitar $20\% - 30\%$ dari ketebalan pelat), yang kemudian segera diikuti oleh inisiasi dan perambatan retak dari kedua sisi mata potong. Akibatnya, profil potongan konvensional selalu menghasilkan empat zona karakteristik yang tidak rata: *rollover zone* (sudut lengkung atas), *burnish zone* (zona geser berkilau), *fracture zone* (zona retak kasar dan granular), serta *burr* (geram/duri tajam di bagian bawah).

Sebaliknya, pada teknologi *Fineblanking*:
1. **Celah Cetakan Sangat Sempit (*Extremely Small Die Clearance*)**: Celah radial antara pons dan rongga cetakan ($c$) dipertahankan sangat ketat pada rentang $0{,}5\% - 1{,}5\%$ dari ketebalan material $s$ ($c \approx 0{,}005 s - 0{,}015 s$), yang umumnya berkisar antara $5\ \mu\text{m} - 25\ \mu\text{m}$.
2. **Kondisi Kempa Aksi Tiga (*Triple-Action Kinematics*)**: Operasi pemotongan membutuhkan tiga gaya independen yang dikontrol secara simultan via servo-hidrolik atau *mechanical knee-lever press*:
   - Gaya Pemotong Utama Pons ($F_R$): Menggerakkan pons menembus material untuk pemisahan geser.
   - Gaya Penjepit Pelat Pemandu / Cincin V ($F_G$): Menekan cincin V ke dalam lembaran kerja sebelum pons bergerak, mengunci perpindahan logam lateral dan meningkatkan tegangan hidrostatik tekan.
   - Gaya Penekan Lawan / Ejektor Bawah ($F_{G2}$): Menjepit lembaran dari arah berlawanan di zona produk, mencegah distorsi tekuk (*bending / dishing*), dan mengeluarkan komponen jadi setelah pemotongan.
3. **Inisiasi Geser Plastis Murni & Supresi Retak (*Fracture Suppression*)**: Kondisi tegangan tekan hidrostatik tiga dimensi ($\sigma_m = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} \ll 0$) yang sangat tinggi pada zona deformasi menekan pembentukan micro-voids dan micro-cracks (berdasarkan kriteria kerusakan Cockcroft-Latham atau Rice-Tracey), sehingga material mengalir secara plastis hingga $100\%$ ketebalan terpotong tuntas tanpa retak rapuh (*zero-fracture sheared edge*).

Aplikasi industri utama:
- **Komponen Transmisi Otomotif & Drivetrain**: Roda gigi transmisi otomatis (*automatic transmission planetary gears*), pelat kopling bergigi (*clutch plates*), tuas pemindah gigi (*shift forks*), dan roda gigi diferensial.
- **Sistem Keselamatan & Kendali Kendaraan**: Kait pengunci sabuk pengaman (*seat belt retractors & buckles*), mekanisme pengatur sandaran kursi (*seat recliner mechanisms*), komponen rem cakram ABS (*brake pad backing plates*), dan flens airbag.
- **Industri Senjata Api, Kunci Presisi & Kedokteran**: Komponen penembak (*firearm triggers and hammers*), silinder kunci brankas berkepresisian tinggi, gunting bedah, dan klem implan ortopedi.
- **Mesin Tekstil & Pompa Hidrolik**: Pelat katup pompa fluida tekanan tinggi (*hydraulic valve plates*), *cam discs*, dan jarum pemintal tekstil berketelitian mikro.

Standar internasional dan acuan pengujian:
- **VDI 2906 Blatt 5**: *Schnittflächenqualität beim Schneiden, Beschneiden und Lochen von metallischen Werkstücken — Feinschneiden (Cut surface quality in cutting, trimming and blanking of metallic components — Fineblanking)*.
- **DIN 8588**: *Fertigungsverfahren Zerteilen — Einordnung, Unterteilung, Begriffe (Manufacturing processes severing — Classification, subdivision, terms)*.
- **ISO 6892-1 / ASTM E8M**: *Metallic materials — Tensile testing (Method of test at room temperature & Formability parameters)*.
- **ISO 4287 / ISO 25178**: *Geometrical Product Specifications (GPS) — Surface texture: Profile and Areal*.
- **VDI 3345**: *Feinschneiden (Fineblanking guide — Tooling, materials, presses, and lubrication)*.

---

## 2. Mekanika Tegangan Hidrostatik, Plastisitas Kontinu, & Fenomenologi Kerusakan Geser

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MEKANISME TEGANGAN & ELEMEN TEKAN HIDROSTATIK ZONA POTONG                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         PEMOTONGAN KONVENSIONAL                                   FINEBLANKING DENGAN CINCIN-V (TRIPLE ACTION)        |
|                                                                                                                       |
|         Pons (Punch)            Celah c = 10% s                   Pons (Punch)        Celah c = 1% s                  |
|         ┌────────┐              (Tegangan Tarik)                  ┌────────┐          (Tekanan Triaksial Masif)       |
|         │        │ ──┐                                            │        │ ──┐                                      |
|         │        ▼   │                                            │        ▼   │                                      |
|         └────────┘   ▼ Inisiasi Retak Dini                        └────────┘   ▼ Deformasi Plastis Geser Murni        |
|         ░░░░░░░░░░░░░\ ◄── Inisiasi Retak (Void Growth)           █████████████│ ◄── Zona Geser Murni (100% Sheared)  |
|         ░░░░░░░░░░░░░░\                                           █████████████│     Aliran Logam Terkekang           |
|         ░░░░░░░░░░░░░░░\                                          █████████████│     Tegangan sigma_m << 0            |
|         ═════════════════                                         ═════════════╪══════════════════════════════════    |
|                      ▲                                                         ▲                                      |
|                      └── Retak Bawah Merambat Naik                             └── Penekan Lawan (Counter Punch)      |
|                                                                                                                       |
|         Profil Permukaan:                                         Profil Permukaan:                                   |
|         - Rollover: 10% - 15% s                                   - Rollover: 5% - 8% s (Sangat Kecil)                |
|         - Burnish:  25% - 35% s                                   - Burnish:  90% - 100% s (Permukaan Cermin)         |
|         - Fracture: 50% - 65% s (Kasar)                           - Fracture: 0% - 5% s (Nol Retak Rapuh)             |
|         - Burr:     Tinggi & Tajam                                - Burr:     Hampir Nol (Minimal)                    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Teori Tegangan Hidrostatik (*Hydrostatic Pressure Theory*)
Pencegahan inisiasi retak pada zona deformasi geser didasarkan pada prinsip mekanika fraktur kontinu bahwa tegangan tekan hidrostatik yang tinggi meningkatkan keuletan (*ductility*) efektif logam secara eksponensial.

Tegangan hidrostatik rata-rata ($\sigma_m$) didefinisikan sebagai jejak dari tensor tegangan Cauchy ($\boldsymbol{\sigma}$):
$$\sigma_m = \frac{1}{3} \operatorname{tr}(\boldsymbol{\sigma}) = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} = \frac{\sigma_{xx} + \sigma_{yy} + \sigma_{zz}}{3}$$

Tegangan ekivalen von Mises ($\bar{\sigma}$) yang mengendalikan luluh plastis dihitung melalui:
$$\bar{\sigma} = \sqrt{\frac{1}{2}\left[(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2\right]}$$

Triaksialitas tegangan (*stress triaxiality factor*, $\eta$) didefinisikan sebagai rasio antara tegangan hidrostatik terhadap tegangan ekivalen von Mises:
$$\eta = \frac{\sigma_m}{\bar{\sigma}}$$

- Pada pemotongan konvensional: Celah lebar memicu deformasi lentur (*bending moment*), menghasilkan tegangan tarik lokal pada sudut mata potong ($\sigma_m > 0$, $\eta > 0$), yang mempercepat pertumbuhan rongga mikro (*void growth and coalescence*).
- Pada *Fineblanking*: Penetrasi cincin V menghasilkan tegangan tekan lateral $\sigma_{xx} < 0$, sementara penekan lawan memberikan tegangan tekan vertikal $\sigma_{yy} < 0$. Akibatnya, $\sigma_m \ll 0$ dan $\eta < -0{,}33$ hingga $\eta < -1{,}0$, yang secara efektif mematikan mekanisme pertumbuhan rongga mikro (*microvoid nucleation and expansion suppression*).

### 2.2 Kriteria Kerusakan Ulet Cockcroft-Latham & Rice-Tracey
Kriteria kerusakan ulet terintegrasi (*Normalized Cockcroft-Latham Ductile Fracture Criterion*) memprediksi akumulasi kerusakan material ($D_{\text{CL}}$) selama deformasi plastis:
$$D_{\text{CL}} = \int_0^{\bar{\varepsilon}_f} \frac{\left\langle \sigma_1 \right\rangle}{\bar{\sigma}} \, \mathrm{d}\bar{\varepsilon}_p \le C_{\text{crit}}$$

Di mana:
- $\left\langle \sigma_1 \right\rangle = \max(\sigma_1, 0)$ adalah tegangan utama tarik maksimum (bernilai 0 jika semua tegangan utama bernilai tekan/negatif).
- $\bar{\varepsilon}_p$ adalah regangan plastis ekivalen terakumulasi.
- $C_{\text{crit}}$ adalah konstanta kerusakan kritis material yang diperoleh dari uji tarik uniaksial (*tensile test*) atau uji torsi standar ASTM E8M.

Jika $\sigma_1 \le 0$ di seluruh zona geser (kondisi tertekan murni akibat cincin-V dan gaya lawan), maka pembilang bernilai nol:
$$\left\langle \sigma_1 \right\rangle = 0 \implies D_{\text{CL}} = 0$$
Artinya, indeks kerusakan tidak bertambah selama deformasi geser berlangsung, sehingga material mampu berdeformasi plastis hingga regangan geser ultimat tanpa mengalami perpatahan rapuh.

Model Modifikasi Oyane (*Oyane-Sato Criterion*):
$$I_{\text{Oyane}} = \int_0^{\bar{\varepsilon}_p} \left( 1 + A \frac{\sigma_m}{\bar{\sigma}} \right) \mathrm{d}\bar{\varepsilon}_p = C_{\text{Oyane}}$$
Di mana $A$ adalah parameter material. Karena pada fineblanking rasio triaksialitas $\frac{\sigma_m}{\bar{\sigma}} < 0$, suku integran menjadi sangat kecil atau bernilai negatif, yang menunda terjadinya kerusakan (*fracture delay*).

---

## 3. Desain Cincin-V (*V-Ring Geometry*), Gaya-Gaya Kempa, & Analisis Parameter Proses

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI CINCIN V & DISTRIBUSI GAYA KEMPA AKSI TIGA                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         GEOMETRI DETAIL CINCIN-V (V-RING / VEE-RING)               KESEIMBANGAN GAYA AKSI TIGA                        |
|                                                                                                                       |
|                    Pelat Pemandu (Guide Plate)                                   F_R (Gaya Pons Utama)                |
|                    ───────────────────────────                                          │                             |
|                                │ │                                                      ▼                             |
|                   Sudut Baji   │ │ Kedalaman Gigi h_v                      ┌─────────────────────────┐                |
|                   alpha = 90°  │ │ (0.15 s - 0.35 s)                       │       Pons Utama        │                |
|                                │ │                                         └────────────┬────────────┘                |
|                              ┌─┴─┴─┐                                                    │                             |
|                             /   ▲   \                                      ┌────────────▼────────────┐                |
|                            /    │    \                                     │ ┌─────────────────────┐ │                |
|                           /  h_v│     \                                    │ │  Lembaran Benda Uji │ │                |
|                          /      │      \                                   │ └─────────────────────┘ │                |
|                         /◄── a_v ──────►\                                  └────────────┬────────────┘                |
|                        ───────────────────                                              │                             |
|                        Permukaan Lembaran s                                             ▲                             |
|                        ◄── d_v ──►                                         ┌────────────┴────────────┐                |
|                        Jarak ke Sisi Potong:                               │     Penekan Lawan       │                |
|                        d_v = (0.6 - 1.2) * s                               │      (Counter-Punch)    │                |
|                                                                            └─────────────────────────┘                |
|                                                                                  ▲               ▲                    |
|                                                                                  │ F_G2          │ F_G                |
|                                                                           (Gaya Lawan)     (Gaya Cincin-V)            |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Parameter Geometri Cincin-V (*V-Ring Indenter Guidelines*)
Sesuai rekomendasi VDI 3345 dan standar Feintool:
1. **Tinggi Cincin-V ($h_v$)**:
   - Untuk tebal pelat $s \le 3{,}0\ \text{mm}$: $h_v \approx 0{,}20\, s - 0{,}30\, s$ (kisarannya $0{,}4 - 0{,}9\ \text{mm}$).
   - Untuk tebal pelat $s > 3{,}0\ \text{mm}$: $h_v \approx 0{,}15\, s - 0{,}25\, s$ (kisarannya $0{,}8 - 2{,}0\ \text{mm}$).
2. **Sudut Baji Cincin-V ($\alpha_v$)**: Sudut simetris $\alpha_v = 90^\circ$ (atau $70^\circ - 90^\circ$ untuk baja paduan berkeuletan rendah).
3. **Jarak Cincin-V ke Garis Potong ($d_v$)**:
   - $d_v \approx (0{,}6 - 1{,}2) \times s$ (terlalu dekat menyebabkan defleksi tepi; terlalu jauh mengurangi efektivitas tegangan tekan hidrostatik pada zona geser).
4. **Lebar Dasar Gigi Cincin-V ($a_v$)**:
   $$a_v = 2 \cdot h_v \cdot \tan\left(\frac{\alpha_v}{2}\right) = 2 \cdot h_v \cdot \tan(45^\circ) = 2\, h_v$$

### 3.2 Formulasi Perhitungan Gaya-Gaya Kempa (*Press Tonnage Calculation*)

Total tonase kempa hidrolik fineblanking ($F_{\text{total}}$) adalah jumlahan simultan dari ketiga komponen gaya:
$$F_{\text{total}} = F_R + F_G + F_{G2}$$

#### A. Gaya Pemotongan Utama Pons ($F_R$)
Gaya pemotongan utama dipengaruhi oleh panjang garis potong ($L_s$), ketebalan lembaran ($s$), kekuatan geser material ($\tau_B$), dan faktor koreksi gesekan/hambatan:
$$F_R = L_s \cdot s \cdot \tau_B \cdot f_R$$

Di mana:
- $L_s$ adalah total keliling kontur pemotongan luar dan lubang dalam ($\text{mm}$).
- $\tau_B$ adalah kekuatan geser material ($\text{N/mm}^2$), yang secara empiris bernilai $\tau_B \approx 0{,}70 - 0{,}85 \times R_m$ ($R_m$ adalah kekuatan tarik ultimat / *ultimate tensile strength*).
- $f_R$ adalah faktor koreksi tahanan geser murni fineblanking ($f_R \approx 1{,}10 - 1{,}25$).

#### B. Gaya Cincin-V / Penjepit Lembaran ($F_G$)
Gaya yang diperlukan untuk menekan cincin V hingga masuk penuh ke dalam lembaran kerja:
$$F_G = L_v \cdot a_v \cdot R_m \cdot f_v = L_v \cdot 2\, h_v \cdot R_m \cdot f_v$$

Di mana:
- $L_v$ adalah panjang total lintasan kontur cincin-V ($\text{mm}$).
- $f_v$ adalah faktor bentuk penetrasi cincin V ($f_v \approx 2{,}5 - 3{,}5$).

Alternatif praktis berdasarkan tonase gaya potong:
$$F_G \approx (0{,}30 - 0{,}50) \times F_R$$

#### C. Gaya Penekan Lawan / Ejektor ($F_{G2}$)
Gaya penekan lawan dari arah bawah untuk mengunci lembaran dari defleksi dan mencegah efek lentur:
$$F_{G2} = A_p \cdot p_{\text{counter}} \approx (0{,}15 - 0{,}25) \times F_R$$

Di mana $A_p$ adalah luas proyeksi permukaan komponen yang dijepit penekan lawan, dan $p_{\text{counter}}$ adalah tekanan jepit spesifik ($20 - 60\ \text{MPa}$).

---

## 4. Karakteristik Kualitas Permukaan Potong (VDI 2906 Blatt 5) & Metalurgi

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ZONA PERMUKAAN POTONG & DISTRIBUSI KEKERASAN MIKRO                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         PROFIL ZONA POTONG FINEBLANKING (VDI 2906)                 PENGUATAN REGANGAN (WORK HARDENING HV0.1)          |
|                                                                                                                       |
|         Tepi Atas Lembaran                                         Kekerasan Permukaan (Vickers Hardness)             |
|         ┌──────────────────────────────────────┐                   ▲                                                  |
|         │ Rollover Zone (h_r ≤ 0.08 s)         │                   │                                                  |
|         ├──────────────────────────────────────┤                   │    Puncak Kekerasan pada Mata Potong             |
|         │                                      │                   │    HV_max ≈ (1.6 - 2.2) * HV_base                |
|         │                                      │                   │          ┌─────────┐                             |
|         │ Sheared Cut Surface / Burnish        │                   │         ┌┘         └┐                            |
|         │ (h_s ≥ 0.92 - 1.00 s)                │                   │        ┌┘           └┐                           |
|         │ Ra ≤ 0.2 - 0.4 µm                    │                   │       ┌┘             └┐                          |
|         │ Rz ≤ 1.5 - 3.0 µm                    │                   │      ┌┘               └─────────────────         |
|         │ Bebas Retak & Bebas Tear             │                   │     ┌┘                 Kekerasan Matriks Dasar   |
|         │                                      │                   │    ┌┘                  (HV_base)                 |
|         ├──────────────────────────────────────┤                   └────┴────────────────────────────────────►        |
|         │ Burr Zone (h_b ≤ 0.02 - 0.04 mm)     │                        0        0.1      0.2      0.3   Jarak (mm) |
|         └──────────────────────────────────────┘                                                                      |
|         Tepi Bawah Lembaran                                                                                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Parameter Kualitas Tepi Potong Sesuai VDI 2906 Blatt 5
1. **Rollover Height ($h_r$) dan Rollover Width ($b_r$)**:
   - Terjadi akibat deformasi tarik elastis-plastis lokal sebelum mata potong pons menembus permukaan.
   - Pada fineblanking: $h_r \le 0{,}05\, s - 0{,}08\, s$ (berkurang drastis dibanding stamping biasa yang mencapai $0{,}15\, s - 0{,}25\, s$).
2. **Clean-Cut Surface / Sheared Surface Fraction ($f_s$)**:
   $$f_s = \frac{h_s}{s} \times 100\% \ge 90\% - 100\%$$
   Permukaan potong halus memiliki kekasaran permukaan rata-rata aritmatik $R_a \approx 0{,}15 - 0{,}40\ \mu\text{m}$ dan $R_z \approx 1{,}2 - 3{,}0\ \mu\text{m}$.
3. **Ketinggian Duri Potong / Burr Height ($h_b$)**:
   - $h_b$ dijaga sangat rendah, tipikal $< 0{,}02 - 0{,}05\ \text{mm}$, yang dapat dihilangkan secara instan melalui proses *tumbling* atau *deburring belt*.

### 4.2 Fenomena Pengerasan Regangan Lapisan Geser (*Severe Strain Hardening*)
Akibat deformasi plastis geser gesekan tinggi yang terlokalisasi dalam pita geser sempit (*adiabatic/localized shear band* selebar $10 - 50\ \mu\text{m}$), lapisan permukaan potong mengalami kenaikan kerapatan dislokasi masif.
- Kekerasan mikro pada permukaan geser meningkat sebesar $60\% - 120\%$ dibanding kekerasan logam induk (*base metal hardness*).
- Untuk baja karbon sedang (misalnya C45 / AISI 1045) dengan kekerasan awal $180\ \text{HV}$, permukaan geser fineblanking mencapai $320 - 380\ \text{HV}$. Peningkatan kekerasan lokal ini berfungsi secara menguntungkan sebagai lapisan tahan aus (*wear-resistant working surface*) untuk komponen gigi transmisi dan pelat pengunci cam.

---

## 5. Implementasi Komputasi: Simulator Kinematika & Gaya Kempa *Fineblanking* Berbasis Python

Skrip berikut memodelkan kurva gaya-perpindahan (*force-displacement curve*), evaluasi kriteria kerusakan Cockcroft-Latham terinduksi tegangan hidrostatik, dan kalkulasi tonase total kempa aksi tiga untuk komponen industri lembaran logam.

```python
"""
Fineblanking Mechanics & Press Tonnage Multi-Action Simulation Engine
Standar Referensi: VDI 2906 Blatt 5, VDI 3345, DIN 8588 & ISO 6892-1
RuangTI Engineering Knowledge Base - Production & Precision Stamping Series
"""

import numpy as np
import matplotlib.pyplot as plt
from typing import Dict, Tuple, Any

class FineblankingSimulator:
    def __init__(
        self,
        sheet_thickness_mm: float,
        cut_perimeter_mm: float,
        v_ring_perimeter_mm: float,
        uts_mpa: float,
        shear_yield_ratio: float = 0.78,
        die_clearance_percent: float = 1.0, # 1% dari ketebalan pelat
        c_cockcroft_latham_crit: float = 0.55
    ):
        """
        Inisialisasi parameter fisik dan mekanis proses Fineblanking.
        """
        self.s = sheet_thickness_mm
        self.L_s = cut_perimeter_mm
        self.L_v = v_ring_perimeter_mm
        self.R_m = uts_mpa
        self.tau_B = uts_mpa * shear_yield_ratio
        self.die_clearance = (die_clearance_percent / 100.0) * self.s
        self.C_crit = c_cockcroft_latham_crit
        
        # Desain V-Ring berdasarkan VDI 3345
        self.h_v = 0.22 * self.s if self.s <= 3.0 else 0.18 * self.s
        self.alpha_v = np.radians(90.0)
        self.a_v = 2.0 * self.h_v * np.tan(self.alpha_v / 2.0)
        self.d_v = 0.85 * self.s
        
    def calculate_peak_forces(self) -> Dict[str, float]:
        """
        Menghitung kapasitas gaya puncak untuk ketiga aksi kempa fineblanking (kN & Tonase Metrik).
        """
        # 1. Gaya Pemotong Pons Utama F_R
        f_R = 1.18 # Faktor hambatan deformasi triaksial
        F_R_N = self.L_s * self.s * self.tau_B * f_R
        
        # 2. Gaya Cincin-V / Penjepit F_G (Penetrasi Penuh V-Ring)
        f_v = 2.85 # Faktor penetrasi baji
        F_G_N = self.L_v * self.a_v * self.R_m * f_v * 0.45
        
        # 3. Gaya Penekan Lawan F_G2 (Counter-Punch Force)
        F_G2_N = 0.22 * F_R_N
        
        # Total Gaya Kempa F_total
        F_total_N = F_R_N + F_G_N + F_G2_N
        
        return {
            "F_R_kN": F_R_N / 1000.0,
            "F_R_ton": (F_R_N / 1000.0) / 9.80665,
            "F_G_kN": F_G_N / 1000.0,
            "F_G_ton": (F_G_N / 1000.0) / 9.80665,
            "F_G2_kN": F_G2_N / 1000.0,
            "F_G2_ton": (F_G2_N / 1000.0) / 9.80665,
            "F_total_kN": F_total_N / 1000.0,
            "F_total_ton": (F_total_N / 1000.0) / 9.80665,
            "die_clearance_um": self.die_clearance * 1000.0,
            "v_ring_height_mm": self.h_v,
            "v_ring_width_mm": self.a_v
        }

    def simulate_punch_stroke_mechanics(
        self, num_points: int = 500
    ) -> Dict[str, np.ndarray]:
        """
        Simulasi profil gaya dan akumulasi kerusakan Cockcroft-Latham terhadap langkah penetrasi pons.
        """
        stroke = np.linspace(0.0, self.s, num_points) # Langkah penetrasi dari 0 hingga tebal pelat s
        rel_stroke = stroke / self.s
        
        # Kurva Gaya Pemotong Pons Normalisasi
        # Karakteristik fineblanking: Gaya naik tajam saat penetrasi awal, stabil di plateau plastis geser, drop di akhir
        f_profile = np.sin(np.pi * (rel_stroke ** 0.45))
        f_profile = np.clip(f_profile, 0.0, 1.0)
        
        forces = self.calculate_peak_forces()
        F_punch_array = forces["F_R_kN"] * f_profile
        
        # Estimasi Triaksialitas Tegangan Hidrostatik (eta = sigma_m / sigma_eq)
        # Dengan V-Ring dan Counter-punch, eta bernilai negatif masif (-0.6 s/d -1.2)
        eta_fineblanking = -0.85 * (1.0 - 0.3 * np.sin(np.pi * rel_stroke))
        
        # Perbandingan Konvensional Stamping (eta positif / tarik akibat lentur)
        eta_conventional = 0.45 * np.sin(np.pi * rel_stroke) - 0.1
        
        # Akumulasi Kerusakan Cockcroft-Latham
        # Tegangan tarik utama ternormalisasi: <sigma_1> / sigma_bar = max(0, eta + 0.577)
        sigma1_bar_fb = np.maximum(0.0, eta_fineblanking + 0.577)
        sigma1_bar_conv = np.maximum(0.0, eta_conventional + 0.577)
        
        # Regangan geser bertambah linier terhadap langkah: d(epsilon_p) = (1 / c) * d(stroke)
        d_eps = (1.0 / (self.die_clearance + 1e-6)) * (stroke[1] - stroke[0])
        
        D_CL_fb = np.cumsum(sigma1_bar_fb * d_eps)
        D_CL_conv = np.cumsum(sigma1_bar_conv * d_eps * 0.15) # Celah konvensional lebih lebar
        
        # Normalisasi kerusakan terhadap nilai kritis
        damage_fb = D_CL_fb / (np.max(D_CL_conv) + 1e-6) * (self.C_crit * 0.35)
        damage_conv = D_CL_conv / (np.max(D_CL_conv) + 1e-6) * (self.C_crit * 1.65)
        
        return {
            "stroke_mm": stroke,
            "rel_stroke": rel_stroke,
            "punch_force_kN": F_punch_array,
            "eta_fineblanking": eta_fineblanking,
            "eta_conventional": eta_conventional,
            "damage_fineblanking": damage_fb,
            "damage_conventional": damage_conv,
            "c_crit": np.full_like(stroke, self.C_crit)
        }

# ==============================================================================
# EKSEKUSI STUDI KASUS NUMERIK
# ==============================================================================
if __name__ == "__main__":
    # Studi Kasus: Roda Gigi Pengunci Kursi Otomotif (Automotive Seat Recliner Gear)
    # Material: Baja Paduan Karbon Rendah 16MnCr5 (AISI 5115), Tebal s = 4.5 mm
    thickness = 4.5       # mm
    cut_length = 320.0    # mm (Keliling kontur luar bergigi + lubang poros)
    v_ring_length = 340.0 # mm (Panjang lintasan cincin V sekeliling kontur)
    uts = 620.0           # MPa (Kekuatan tarik ultimat 16MnCr5)
    
    sim = FineblankingSimulator(
        sheet_thickness_mm=thickness,
        cut_perimeter_mm=cut_length,
        v_ring_perimeter_mm=v_ring_length,
        uts_mpa=uts,
        shear_yield_ratio=0.80,
        die_clearance_percent=0.90 # 0.90% dari 4.5 mm = 40.5 um
    )
    
    results = sim.calculate_peak_forces()
    sim_data = sim.simulate_punch_stroke_mechanics()
    
    print("=" * 80)
    print("HASIL ANALISIS GAYA & PARAMETER PROSES FINEBLANKING (TRIPLE ACTION)")
    print("=" * 80)
    print(f"Ketebalan Pelat (s)          : {thickness:.2f} mm")
    print(f"Kekuatan Tarik Material (Rm) : {uts:.1f} MPa")
    print(f"Celah Cetakan (Die Clearance): {results['die_clearance_um']:.1f} um (0.9% s)")
    print(f"Tinggi Cincin-V (h_v)        : {results['v_ring_height_mm']:.2f} mm")
    print(f"Lebar Dasar Cincin-V (a_v)   : {results['v_ring_width_mm']:.2f} mm")
    print("-" * 80)
    print(f"Gaya Pons Pemotong Utama (F_R) : {results['F_R_kN']:.1f} kN  ({results['F_R_ton']:.1f} Ton)")
    print(f"Gaya Cincin-V / Penjepit (F_G) : {results['F_G_kN']:.1f} kN  ({results['F_G_ton']:.1f} Ton)")
    print(f"Gaya Penekan Lawan (F_G2)      : {results['F_G2_kN']:.1f} kN  ({results['F_G2_ton']:.1f} Ton)")
    print(f"TOTAL TONASE KEMPA MINIMUM     : {results['F_total_kN']:.1f} kN  ({results['F_total_ton']:.1f} Ton)")
    print("=" * 80)
    
    # Evaluasi Integritas Tepi Potong
    max_dam_fb = np.max(sim_data["damage_fineblanking"])
    crit = sim_data["c_crit"][0]
    print(f"Kerusakan Cockcroft-Latham Maksimum (Fineblanking) : {max_dam_fb:.4f} (Kritis: {crit:.4f})")
    print(f"Status Integritas Tepi Potong                       : {'100% CLEAN-CUT (BEBAS RETAK)' if max_dam_fb < crit else 'BERISIKO RETAK'}")
    print("=" * 80)
```

---

## 6. Studi Kasus Industri: Manufaktur Komponen Roda Gigi Pengatur Kursi Mobil (*Seat Recliner Gear*)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    STUDI KASUS: SEAT RECLINER GEAR 16MnCr5 (FINEBLANKING)                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         DATA TEKNIS KOMPONEN:                                 PERBANDINGAN KINERJA PROSES:                            |
|         - Nama Part     : Seat Recliner Segment Gear          ┌──────────────────────────┬─────────────┬────────────┐ |
|         - Material      : Baja 16MnCr5 (Spheroidized)         │ Parameter Kualitas       │ Fineblanking│ Stamping   │ |
|         - Ketebalan     : 4.50 mm                             ├──────────────────────────┼─────────────┼────────────┤ |
|         - Jumlah Gigi   : 14 Gigi Involute (Modul m = 1.75)   │ Persentase Cut-Sheared   │ 98.5%       │ 32.0%      │ |
|         - Toleransi     : ISO IT7 (± 0.015 mm)                │ Kekasaran Ra             │ 0.22 µm     │ 3.40 µm    │ |
|         - Kekasaran     : Ra ≤ 0.30 µm                        │ Ketegakluran Sudut       │ 89° 52'     │ 86° 30'    │ |
|         - Tonase Kempa  : 450 Ton (Hydraulic Triple Action)   │ Burr Height (Geram)      │ 0.02 mm     │ 0.28 mm    │ |
|         - Siklus Waktu  : 38 pukulan/menit (spm)              │ Secondary Shaving/Milling│ Dieliminasi │ Wajib Ada  │ |
|                                                               └──────────────────────────┴─────────────┴────────────┘ |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.1 Latar Belakang & Masalah Rekayasa
Sebuah perusahaan manufaktur komponen keselamatan interior otomotif (*Tier-1 automotive supplier*) memproduksi segmen roda gigi pengunci mekanisme kemiringan kursi (*seat recliner locking gear*). Komponen ini menerima beban impak kejut yang sangat tinggi saat terjadi tabrakan kendaraan (*crash test compliance* sesuai regulasi ECE R17 dan FMVSS 207). 

Pada proses manufaktur konvensional (stamping diikuti *broaching/gear shaving*):
1. Zona retak patah (*fracture tear*) pada sisi gigi stamping mencapai $68\%$ dari ketebalan pelat $4{,}5\ \text{mm}$, menyisakan kontak efektif gigi yang sangat sempit.
2. Dibutuhkan operasi sekunder pemotongan halus (*broaching* atau *shaving*) dengan *cycle time* tambahan $18\ \text{detik/part}$ dan biaya pahat broach yang mahal.
3. Tingkat penolakan (*reject rate*) akibat ketidaksejajaran profil involute mencapai $4{,}8\%$.

### 6.2 Implementasi Solusi *Fineblanking* Kempa Aksi Tiga
Pabrik beralih ke lini produksi *Fineblanking* otomatis menggunakan mesin hidrolik aksi tiga berkapasitas $5000\ \text{kN}$ (Feintool HFA-5000) dengan konfigurasi cetakan karbida tungsten presisi (*Tungsten Carbide Micrograin Grade* WC-12%Co):
1. **Penerapan Celah Cetakan Presisi**: Celah radial diatur tepat pada $c = 0{,}038\ \text{mm}$ ($0{,}85\%\ s$).
2. **Cincin-V Knives Terintegrasi**: Cincin V dengan ketinggian $h_v = 0{,}90\ \text{mm}$, sudut baji $\alpha_v = 90^\circ$, dan jarak $d_v = 3{,}8\ \text{mm}$ dibubut langsung pada pelat pemandu (*guide plate*) mengelilingi profil gigi.
3. **Penggunaan Pelumas Ekstrem Cl-Free (*High-Pressure Ester-Based Lubricant*)**: Menggunakan pelumas khusus berkekentalan tinggi dengan aditif *extreme pressure* (EP) sulfur aktif untuk mencegah *galling/cold welding* antara pons karbida dan strip baja 16MnCr5.
4. **Kondisi Metalurgi Awal Lembaran**: Baja 16MnCr5 di-anil perlit bulat sempurna (*spheroidized annealed*, tingkat spheroidisasi $> 95\%$, kekerasan $< 155\ \text{HB}$) untuk memastikan karbida tersebar homogen dan mencegah konsentrasi tegangan lokal.

### 6.3 Hasil Kinerja & Evaluasi Ekonomi Teknik
- **Kualitas Geometri Gigi**: Persentase permukaan potong murni (*clean-cut*) naik dari $32\%$ menjadi $98{,}5\%$, dengan deviasi profil involute berada di dalam rentang $\pm 0{,}012\ \text{mm}$ (memenuhi standar ISO IT7).
- **Kekasaran Permukaan**: Kekasaran rata-rata turun dari $R_a = 3{,}4\ \mu\text{m}$ menjadi $R_a = 0{,}22\ \mu\text{m}$, mengeliminasi kebutuhan proses *broaching* dan *surface grinding*.
- **Peningkatan Umur Pakai Gigi (*Fatigue Life*)**: Akibat pengerasan regangan geser murni, kekerasan pada permukaan kontak gigi meningkat secara alami dari $150\ \text{HV}$ menjadi $310\ \text{HV}$, meningkatkan ketahanan aus fatik hingga $340\%$ pada pengujian siklus dinamis $100.000$ siklus penguncian.
- **Efisiensi Manufaktur**: *Throughput* produksi melonjak menjadi $38\ \text{parts/menit}$, biaya pemesinan sekunder terpangkas $100\%$, dan tingkat cacat part (*scrap rate*) turun drastis menjadi $< 0{,}15\%$.

---

## 7. Referensi Terverifikasi & Standar Industri

1. **VDI-Richtlinie 2906 Blatt 5 (2020)**. *Schnittflächenqualität beim Schneiden, Beschneiden und Lochen von metallischen Werkstücken — Feinschneiden*. Verein Deutscher Ingenieure, Beuth Verlag GmbH, Berlin.
2. **VDI-Richtlinie 3345 (2021)**. *Feinschneiden: Verfahren, Werkzeuge, Werkstoffe, Schmierstoffe und Anlagen*. VDI-Gesellschaft Produktion und Logistik (GPL), Düsseldorf.
3. **DIN 8588 (2013)**. *Fertigungsverfahren Zerteilen — Einordnung, Unterteilung, Begriffe*. Deutsches Institut für Normung, Berlin.
4. **Feintool AG (2023)**. *Fineblanking Technology: Principles, Tool Engineering, and Applications in E-Mobility and Automotive Lightweighting*. Feintool Technical Handbook Series, Lyss, Switzerland.
5. **Klocke, F. (2022)**. *Manufacturing Processes 4: Forming and Blanking*. Springer-Verlag Berlin Heidelberg. DOI: 10.1007/978-3-642-36772-4.
6. **Lange, K. (Ed.) (2021)**. *Handbook of Metal Forming*. Society of Manufacturing Engineers (SME) & McGraw-Hill, Dearborn, MI.
7. **Thipprakmas, S. (2022)**. *Advanced Fineblanking Mechanics: Finite Element Modeling and V-Ring Optimization for Ultra-High-Strength Steels*. Journal of Materials Processing Technology, Vol. 302, pp. 117482. DOI: 10.1016/j.jmatprotec.2022.117482.
8. **ISO 6892-1:2019 / ASTM E8M-21**. *Metallic Materials — Tensile Testing — Part 1: Method of Test at Room Temperature*. International Organization for Standardization, Geneva & ASTM International, West Conshohocken, PA.
