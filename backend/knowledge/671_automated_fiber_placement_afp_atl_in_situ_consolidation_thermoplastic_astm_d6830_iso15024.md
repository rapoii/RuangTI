# Modul 671: Automated Fiber Placement (AFP) & Automated Tape Laying (ATL): Mekanika In-Situ Consolidation Termoplastik (CF/PEEK & CF/LM-PAEK), Termodinamika Pemanasan Laser Diode & Hot Gas Torch, Viskoelastisitas Compaction Roller, Kinetika Intimate Contact & Autohesi Reptasi Polimer, serta Mitigasi Cacat Steering Tape (ASTM D6830, ISO 15024, SAMPE & NASA TM)

## 1. Pengantar & Konteks Industri: Revolusi Komposit Termoplastik Tanpa Autoklaf (Out-of-Autoclave)

Dalam manufaktur struktur komposit kedirgantaraan modern (*aerospace structural composites*), seperti badan pesawat komersial (*fuselage barrels* seperti Boeing 787 dan Airbus A350), sayap pesawat tempur (*fighter jet wings*), serta tangki bahan bakar kriogenik roket ruang angkasa, penggunaan material komposit polimer berpenguat serat karbon (*Carbon Fiber Reinforced Polymers - CFRP*) telah melampaui paduan aluminium dan titanium sebagai material struktural primer.

Secara tradisional, manufaktur CFRP kedirgantaraan didominasi oleh sistem **serat termoset prepreg (*thermoset prepregs*, seperti epoxy resin)** yang ditempatkan secara otomatis menggunakan mesin *Automated Fiber Placement* (AFP) atau *Automated Tape Laying* (ATL), kemudian memerlukan proses konsolidasi dan pengeringan sekunder di dalam bejana autoklaf (*autoclave curing*) bersuhu $180\ \text{°C}$ dan tekanan $7\ \text{bar}$ selama $6 - 12\ \text{jam}$. Ketergantungan pada autoklaf ini menimbulkan *bottleneck* produksi yang luar biasa masif: konsumsi energi listrik raksasa, siklus waktu *lead time* yang lambat, batasan dimensi part oleh ukuran diameter ruang autoklaf, serta umur simpan material termoset (*shelf-life*) yang sangat terbatas dalam *freezer storage* ($-18\ \text{°C}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|              PARADIGMA MANUFAKTUR KOMPOSIT: TERMOSET AUTOKLAF VS IN-SITU CONSOLIDATION TERMOPLASTIK                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. TERMOSET KONVENSIONAL (AUTOCLAVE-BASED):                                                                         |
|      - Material: Serat Karbon / Resin Epoxy (Prepreg belum matang).                                                   |
|      - Proses Peletakan: AFP/ATL dingin (suhu ruang ~25 °C, tackiness mengandalkan resin lengket).                    |
|      - Pasca-Peletakan: Vacuum bagging manual + Siklus Autoklaf 8 jam (Biaya modal & energi tinggi, non-recyclable).  |
|                                                                                                                       |
|   2. TERMOPLASTIK AFP/ATL (IN-SITU CONSOLIDATION / OOA):                                                              |
|      - Material: Pita Unidirectional (UD) Serat Karbon / PEEK, PEKK, atau LM-PAEK (Polimer semi-kristalin).           |
|      - Pemanasan Titik Kontak: Laser Dioda Berdaya Tinggi (HPDL, 3-6 kW) atau Hot Gas Torch (HGT, T = 380 - 450 °C).  |
|      - Konsolidasi Seketika: Compaction Roller Elastomer menekan pita saat polimer meleleh dalam hitungan milidetik.  |
|      - Hasil: Part komposit berkekuatan penuh (void content < 1%) langsung jadi dari kepala robot tanpa autoklaf!     |
|                                                                                                                       |
|                           Kepala Robot AFP (Automated Fiber Placement Head)                                           |
|                                     ┌─────────────────────────┐                                                       |
|                                     │ Spool Tape CF/PEEK (Tow)│                                                       |
|                                     └───────────┬─────────────┘                                                       |
|                                                 │ Feed Motion                                                         |
|                                                 ▼                                                                     |
|                                        Laser Diode Collimator                                                         |
|                                              \  3-6 kW /                                                              |
|                                               \ Pemanasan /                                                           |
|                                                \ Titik Nip /                                                          |
|                                                 ▼         ▼                                                           |
|                                             ┌─────────────────┐                                                       |
|                                             │ COMPACTION      │ Gaya Tekan F_c = 200 - 1500 N                         |
|                                             │ CONFORMABLE     │                                                       |
|                       Pita Datang (Incoming)│ ROLLER (Silikon)│                                                       |
|                     ───────────────────────►│  (Viskoelastik) │                                                       |
|                                             └────────┬────────┘                                                       |
|                                                      │ Tekanan Nip P_nip > 2 - 10 MPa                                 |
|                                                      ▼                                                                |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
|    ◄── Gerak Pemasangan Robot (Placement Velocity V_p = 50 - 500 mm/s)                                                |
|    ▲ SUBSTRAT LAMINASI TERKONSOLIDASI (CF/PEEK LAMINATE)                                                              |
|      - Intimate Contact Degree (D_ic) -> 1.0                                                                          |
|      - Autohesi / Difusi Rantai Polimer (D_au) -> 1.0 (Waktu Interpenetrasi t_rep ~ 10-50 ms)                         |
|      - Tingkat Kristalinitas Terkontrol: X_c = 30 - 35%                                                               |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
+-----------------------------------------------------------------------------------------------------------------------+
```

Untuk melompati keterbatasan tersebut, industri beralih ke **komposit termoplastik berkinerja tinggi (*High-Performance Thermoplastic Composites - TP-CFRP*)**, seperti *Polyetheretherketone* (CF/PEEK), *Polyetherketoneketone* (CF/PEKK), dan *Low-Melting Polyaryletherketone* (CF/LM-PAEK). Melalui teknologi **In-Situ Consolidation (ISC)** pada AFP/ATL, pita serat searah (*unidirectional tows*) dipanaskan secara lokal hingga di atas titik leleh kristalinnya ($T_m \approx 305 - 343\ \text{°C}$), ditekan ke substrat menggunakan *compaction roller* yang dapat berkonformasi (*conformable elastomer roller*), dan didinginkan seketika di bawah temperatur transisi gelas ($T_g \approx 143 - 160\ \text{°C}$) di bawah tekanan penjepitan rol, menghasilkan ikatan interlaminar penuh tanpa memerlukan perlakuan autoklaf pasca-peletakan (*Out-of-Autoclave / OOA*).

Standar internasional, kedirgantaraan, dan protokol industri yang mengatur material komposit termoplastik, proses AFP, serta integritas pengujian mekanik meliputi:
1. **ASTM D6830 / ASTM D3878**: *Standard Terminology for Composite Materials and Automated Deposition*.
2. **ISO 15024:2023**: *Fibre-reinforced plastic composites — Determination of mode I interlaminar fracture toughness, $G_{IC}$, for unidirectionally reinforced materials*.
3. **ISO 14130**: *Fibre-reinforced plastic composites — Determination of apparent interlaminar shear strength (ILSS) by short-beam method*.
4. **ASTM D2344 / D2344M**: *Standard Test Method for Short-Beam Strength of Polymer Matrix Composite Materials*.
5. **ASTM D790 / ISO 178**: *Standard Test Methods for Flexural Properties of Unreinforced and Reinforced Plastics and Electrical Insulating Materials*.
6. **SAMPE Technical Guidelines**: *Recommended Practices for In-Situ Thermoplastic AFP/ATL Automated Processing*.
7. **NASA/TM-20210018241**: *Characterization and Manufacturing Defects in Thermoplastic Automated Fiber Placement*.

---

## 2. Termodinamika & Dinamika Termal Pemanasan Titik Nip (Nip-Point Heating)

### 2.1 Neraca Energi Titik Kontak (Nip-Point Energy Balance)

Dalam proses ISC AFP, sumber energi (Laser Dioda Berdaya Tinggi / *High Power Diode Laser - HPDL* atau Obor Gas Panas / *Hot Gas Torch - HGT*) memancarkan fluks kalor terfokus pada irisan baji antara pita yang masuk (*incoming tape*) dan pita substrat (*substrate laminate*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                     GEOMETRI SUDUT BAJI (WEDGE ANGLE) & DISTRIBUSI FLUKS KALOR LASER NIP-POINT                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                             Pita Datang (Incoming Tape, Tebal h_tape)                                                 |
|                           ─────────────────────────────────────────┐                                                  |
|                                                                    │                                                  |
|                                                    Sinar Laser HPDL│                                                  |
|                                                    (Laser Beam)    │                                                  |
|                                                       \ \ \ \ \    │                                                  |
|                                                        \ \ \ \ \   │                                                  |
|                                                         ▼ ▼ ▼ ▼ ▼  │ Rol Penekan (Roller Radius R_r)                  |
|                                              Sudut Baji (2θ)       │  . ─── .                                         |
|                                               \                 /  /         \                                        |
|                                                \               /  │   Roller  │                                       |
|                                                 \  Nip Point  /   │ Elastomer │                                       |
|                                                  \     ▼     /     \         /                                        |
|                                                   ` ─────── '       ` ─── . '                                         |
|                                           ══════════════════════════════════════════                                  |
|                                           Substrat Laminasi Dasar (Substrate)                                         |
|                                           ◄── Panjang Kontak Konsolidasi (L_c) ──►                                    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Persamaan konduksi panas transient 2D/3D non-stasioner pada pita komposit ortotropik bergerak dengan kecepatan peletakan $V_p$ dinyatakan oleh:

$$\rho C_p \left( \frac{\partial T}{\partial t} + V_p \frac{\partial T}{\partial x} \right) = \frac{\partial}{\partial x} \left( k_{xx} \frac{\partial T}{\partial x} \right) + \frac{\partial}{\partial y} \left( k_{yy} \frac{\partial T}{\partial y} \right) + \frac{\partial}{\partial z} \left( k_{zz} \frac{\partial T}{\partial z} \right) + \dot{q}_{\text{laser}}$$

Di mana:
- $\rho$ adalah densitas komposit ($\text{kg/m}^3$), untuk CF/PEEK $\rho \approx 1580 - 1600\ \text{kg/m}^3$.
- $C_p(T)$ adalah kalor jenis komposit sebagai fungsi temperatur ($\text{J/(kg}\cdot\text{K)}$).
- $k_{xx}, k_{yy}, k_{zz}$ adalah konduktivitas termal anisotropik material ($\text{W/(m}\cdot\text{K)}$), di mana konduktivitas longitudinal sepanjang serat ($k_{xx} \approx 5 - 10\ \text{W/(m}\cdot\text{K)}$) jauh lebih tinggi daripada arah transversal ketebalan ($k_{zz} \approx 0{,}5 - 0{,}8\ \text{W/(m}\cdot\text{K)}$).
- $\dot{q}_{\text{laser}}$ adalah laju pembangkitan panas volumetrik dari penyerapan radiasi laser inframerah ($\lambda = 940 - 1064\ \text{nm}$).

Fluks radiasi laser efektif yang diserap oleh permukaan komposit serat karbon abu-abu diatur oleh hukum Lambert-Beer dan absorptisitas optik $\alpha_{\text{abs}} \approx 0{,}85 - 0{,}92$:

$$q_{\text{abs}}(x, y) = \alpha_{\text{abs}} \cdot I_0 \cdot \exp\left( -2 \left( \frac{(x - x_0)^2}{w_x^2} + \frac{(y - y_0)^2}{w_y^2} \right) \right)$$

Di mana $I_0$ adalah intensitas puncak laser ($\text{W/m}^2$), dan $w_x, w_y$ adalah radius lebar berkas sinar eliptik/persegi panjang pada zona baji titik nip.

---

## 3. Mekanika Kontak Intim (Intimate Contact) & Kinetika Autohesi Polimer (Reptation Theory)

Konsolidasi interlaminar penuh antara pita incoming dan substrat yang telah memadat bergantung pada dua fenomena fisik berurutan: **Kontak Intim Permukaan (*Intimate Contact*)** dan **Autohesi / Difusi Rantai Polimer (*Autohesion / Molecular Healing*)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                FENOMENOLOGI KONSOLIDASI INTERLAMINAR: INTIMATE CONTACT DAN MOLECULAR HEALING                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   TAHAP 1: KEKASARAN AWAL (ASPERITIES)        TAHAP 2: DEFORMASI VISKOS          TAHAP 3: DIFUSI RANTAI (REPTASI)     |
|                                                                                                                       |
|         Pita Incoming (T > Tm)                     Tekanan Rol P_nip                  Penyatuan Rantai Antar-Muka     |
|       ┌─┐   ┌─┐   ┌─┐   ┌─┐                     ═════════════════════                 ═══════════════════════════     |
|       │ └───┘ │───┘ │───┘ │ (Kekasaran R_a)     ───┬───┬───┬───┬─────                 ... ~~~ ... ~~~ ... ~~~ ...     |
|       │                   │                        │   │   │   │                  ~~~ (Rantai PEEK Berdifusi) ~~~ |
|       ┴───────────────────┴                     ───┴───┴───┴───┴─────                 ... ~~~ ... ~~~ ... ~~~ ...     |
|       Void / Rongga Udara Terjebak               Deformasi Aliran Viskos               Kekuatan Ikatan Penuh (G_IC)   |
|       ┬───────────────────┬                     ─────────────────────                 ═══════════════════════════     |
|       │                   │                     Substrat Bawah                        Substrat Bawah                  |
|       └───────────────────┘                                                                                           |
|       Derajat Kontak D_ic = 0                   Derajat Kontak D_ic -> 1.0            Derajat Autohesi D_au -> 1.0    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Model De-Gennes Rantai Polimer & Kinetika Autohesi ($D_{au}$)

Setelah kontak intim fisik terbentuk, rantai polimer dari kedua sisi antarmuka mulai berdifusi melintasi batas partisi menurut teori reptasi de-Gennes (*de Gennes reptation model*). Derajat autohesi atau penyembuhan molekular (*degree of autohesion / healing*) $D_{au}(t)$ didefinisikan sebagai rasio ketangguhan retak interlaminar instan $G_{IC}(t)$ terhadap ketangguhan retak maksimum material murni $G_{IC\infty}$:

$$D_{au}(t) = \frac{G_{IC}(t)}{G_{IC\infty}} = \left( \frac{t}{t_{\text{rep}}(T)} \right)^{1/4} \quad \text{untuk } t < t_{\text{rep}}$$

Di mana $t_{\text{rep}}(T)$ adalah waktu relaksasi reptasi de-Gennes polimer pada temperatur absolut $T$, yang mengikuti relasi Arrhenius di atas suhu leleh $T_m$:

$$t_{\text{rep}}(T) = t_{\text{rep}, 0} \cdot \exp\left( \frac{E_a}{R \cdot T} \right)$$

Di mana:
- $E_a$ adalah energi aktivasi aliran viskos polimer ($\text{J/mol}$), untuk PEEK $E_a \approx 45 - 55\ \text{kJ/mol}$.
- $R = 8{,}314\ \text{J/(mol}\cdot\text{K)}$ adalah konstanta gas universal.
- $t_{\text{rep}, 0}$ adalah konstanta waktu reptasi intrinsik ($10^{-5} - 10^{-6}\ \text{s}$).

Untuk riwayat termal transient non-isotermal selama peletakan pita, derajat autohesi terintegrasi dihitung melalui integrasi waktu terbobot:

$$D_{au}(t) = \left[ \int_{0}^{t_{\text{nip}}} \left( \frac{1}{t_{\text{rep}}(T(\tau))} \right)^{1/2} d\tau \right]^{1/2}$$

### 3.2 Model Kontak Intim Lee-Springer / Yang-Pitchumani ($D_{ic}$)

Kekasaran permukaan pita prepreg dimodelkan sebagai susunan periodik tonjolan persegi panjang (*rectangular asperities*) dengan lebar $b_0$ dan tinggi $a_0$. Di bawah tekanan rol penekan $P_{\text{nip}}$ dan viskositas matriks leleh $\eta_m(T)$, derajat kontak intim $D_{ic}(t)$ berevolusi menurut persamaan diferensial deformasi viskositas:

$$D_{ic}(t) = \frac{w(t)}{w_0 + b_0} = \frac{1}{1 + \frac{w_0}{b_0}} \left[ 1 + \left( 1 + \frac{w_0}{b_0} \right) \left( \frac{5 \cdot a_0}{b_0} \right) \int_{0}^{t} \frac{P_{\text{nip}}(\tau)}{\eta_m(T(\tau))} d\tau \right]^{1/5}$$

Viskositas leleh PEEK sebagai fungsi temperatur dan laju geser ($\dot{\gamma}$) diatur oleh model Carreau-Yasuda:

$$\eta_m(T, \dot{\gamma}) = \eta_0(T) \left[ 1 + (\lambda_{\text{rel}} \cdot \dot{\gamma})^a \right]^{\frac{n-1}{a}}$$

Di mana $\eta_0(T) = A_{\eta} \exp\left(\frac{E_{\eta}}{R T}\right)$ adalah viskositas nol-geser (*zero-shear viscosity*).

### 3.3 Derajat Ikatan Interlaminar Total ($D_{\text{bond}}$)

Derajat konsolidasi dan kekuatan interlaminar total merupakan hasil kali dari derajat kontak mekanik dan derajat difusi molekuler:

$$D_{\text{bond}}(t) = D_{ic}(t) \cdot D_{au}(t)$$

Kondisi konsolidasi sempurna tanpa autoklaf tercapai apabila pada akhir zona pelepasan rol penekan:

$$D_{\text{bond}} \ge 0{,}98 \quad \text{dan} \quad V_{\text{void}} < 1{,}0\%$$

---

## 4. Mekanika Kontak Rol Penekan Elastomer (Compaction Roller Contact Mechanics)

Rol penekan pada kepala robot AFP umumnya dibuat dari karet silikon bersuhu tinggi (*high-temperature fluorosilicone / fluoroelastomer*) dengan inti poros logam kaku. Karakteristik kompresibilitas dan fleksibilitas rol memungkinkan penyerapan variasi kontur permukaan cetakan kompleks 3D.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DISTRIBUSI TEKANAN KONTAK HERTZIAN MODIFIKASI PADA ROL ELASTOMER AFP                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                            Poros Baja Kaku (Rigid Core, Radius R_core)                                |
|                                                    ┌─────────────────┐                                                |
|                                                    │  (Poros Logam)  │                                                |
|                                                    └────────┬────────┘                                                |
|                                                             │                                                         |
|                                            Lapisan Karet Silikon (Tebal t_elast, Modulus E_r)                         |
|                                                    ┌────────┴────────┐                                                |
|                                                    │   ELASTOMER     │  Gaya Tekan F_c (N)                            |
|                                                    │   SILIKON       │  ▼                                             |
|                                                    └────────┬────────┘                                                |
|                                                             │                                                         |
|                                                             ▼                                                         |
|                       Distribusi Tekanan Nip P(x):                                                                    |
|                       P(x) ▲ Tekanan Puncak P_max = 2 F_c / (pi * b_c * L_w)                                          |
|                            │                . ─── .                                                                   |
|                            │              /    ▲    \                                                                 |
|                            │             /     │     \                                                                |
|                          0 ┼────────────/──────┼──────\────────────► Arah Peletakan x                                 |
|                            │           ◄────── b_c ────► (Lebar Kontak Footprint)                                     |
|                            │                                                                                          |
|                                     Panjang Jejak Kontak: b_c = 2 * sqrt( (4 F_c R_eff) / (pi E* L_w) )               |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Panjang Jejak Kontak (*Contact Footprint*) & Waktu Tinggal Tekanan (*Dwell Time*)

Berdasarkan teori kontak silinder-pada-bidang elastis tak-terbatas (Modifikasi Hertz), setengah lebar jejak kontak nip $b_c$ adalah:

$$b_c = \sqrt{\frac{4 \cdot F_c \cdot R_{\text{eff}}}{\pi \cdot L_w \cdot E^*}}$$

Di mana:
- $F_c$ adalah gaya kompresi rol normal ($\text{N}$).
- $L_w$ adalah lebar total pita/tow yang ditekan ($\text{m}$).
- $R_{\text{eff}}$ adalah radius efektif rol penekan ($\text{m}$).
- $E^*$ adalah modulus elastisitas kontak ekivalen bidang:

$$\frac{1}{E^*} = \frac{1 - \nu_r^2}{E_r} + \frac{1 - \nu_s^2}{E_s}$$

Karena modulus substrat komposit $E_s \gg E_r$ ($E_r \approx 5 - 20\ \text{MPa}, \nu_r \approx 0{,}48 - 0{,}49$ untuk silikon elastomer), maka $\frac{1}{E^*} \approx \frac{1 - \nu_r^2}{E_r}$.

Waktu tinggal tekanan konsolidasi efektif (*dwell time*) $t_{\text{dwell}}$ di mana pita berada di bawah tekanan kompaksi tinggi adalah:

$$t_{\text{dwell}} = \frac{2 \cdot b_c}{V_p}$$

Untuk kecepatan peletakan $V_p = 200\ \text{mm/s}$ dan lebar jejak kontak $2 b_c = 10\ \text{mm}$, waktu tinggal konsolidasi hanya $t_{\text{dwell}} = 50\ \text{ms}$. Oleh karena itu, pelelehan, pembasahan, dan penyembuhan polimer wajib selesai dalam jendela waktu fraksi milidetik tersebut!

---

## 5. Analisis Cacat Manufaktur pada Trajektori Steering Tape AFP

Pada pembuatan struktur aero-struktur berdinding ganda dengan jalur serat bervariasi (*Variable Angle Tow - VAT*) untuk optimalisasi distribusi beban elastis (*aeroelastic tailoring*), kepala robot AFP melakukan manuver pembelokan pita (*tape steering*) dengan radius kelengkungan $R_{\text{steer}}$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|             MEKANIKA CACAT STEERING TAPE: BUCKLING TEKANAN BAGIAN DALAM VS PEREGANGAN TEPI LUAR                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                  Radius Kelengkungan Steering (R_steer)                                               |
|                                        ◄──────────────────────────────►                                               |
|                                     Pusat Kelengkungan (Center O)                                                     |
|                                                *                                                                      |
|                                               / \                                                                     |
|                                              /   \                                                                    |
|                                             /  θ  \                                                                   |
|                                            /       \                                                                  |
|                                           /         \                                                                 |
|                                          /           \                                                                |
|                                         /             \                                                               |
|        Tepi Dalam (Inner Edge):        /               \                                                              |
|        - Regangan Tekan (ε < 0)       ┌─────────────────┐ ◄── Tepi Luar (Outer Edge):                                 |
|        - Potensi BUCKLING / WRINKLE   │ ~ ~ ~ ~ ~ ~ ~ ~ │     - Regangan Tarik (ε > 0)                                |
|        - Pembentukan Lipatan Serat    │                 │     - Potensi TAPE PULL-OFF / GAP                           |
|                                       └─────────────────┘                                                             |
|                                       ◄── Lebar W_tape ─►                                                             |
|                                                                                                                       |
|   Distribusi Regangan Longitudinal Linier: ε_x(y) = (y - W/2) / R_steer                                               |
|   Radius Minimum Bebas Cacat: R_crit = (W_tape / 2) / sqrt( (pi^2 * E_11 * I_b) / (G_12 * A_tape) )                   |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.1 Distribusi Regangan Diferensial & Kondisi Batas Buckling

Ketika pita komposit dengan lebar $W_{\text{tape}}$ dibelokkan pada radius $R_{\text{steer}}$, perbedaan panjang lintasan antara tepi dalam dan tepi luar memicu regangan normal terdistribusi:

$$\varepsilon(y) = \frac{y}{R_{\text{steer}}} \quad \text{untuk } -\frac{W_{\text{tape}}}{2} \le y \le +\frac{W_{\text{tape}}}{2}$$

- **Tepi Luar ($y = +W_{\text{tape}}/2$)**: Mengalami tegangan tarik $\sigma_{\text{outer}} = E_{11} \frac{W_{\text{tape}}}{2 R_{\text{steer}}}$. Jika tegangan tarik melampaui adhesi leleh atau batas geser antarmuka, terjadi cacat pelepasan pita (*tape pull-off / edge lifting*).
- **Tepi Dalam ($y = -W_{\text{tape}}/2$)**: Mengalami tegangan tekan $\sigma_{\text{inner}} = -E_{11} \frac{W_{\text{tape}}}{2 R_{\text{steer}}}$. Serat karbon yang memiliki rasio kelangsingan sangat tinggi akan mengalami **tekuk mikro (*out-of-plane wrinkling / in-plane waviness / buckling*)**.

Tegangan tekan kritis tekuk elastis pada pita tipis bertumpuan fondasi viskoelastis leleh dinyatakan oleh:

$$\sigma_{\text{crit, buckle}} = 2 \sqrt{\frac{K_{\text{foundation}}(T) \cdot D_{\text{flex}}}{h_{\text{tape}}}}$$

Di mana $D_{\text{flex}} = \frac{E_{11} h_{\text{tape}}^3}{12 (1 - \nu_{12}\nu_{21})}$ adalah kekakuan lentur pita, dan $K_{\text{foundation}}$ adalah modulus fondasi elastis matriks termoplastik leleh. Radius putar steering minimum absolut ($R_{\text{min, safe}}$) yang diizinkan untuk mencegah kerutan (*wrinkle-free*) adalah:

$$R_{\text{min, safe}} \ge \frac{E_{11} \cdot W_{\text{tape}}}{2 \cdot \sigma_{\text{crit, buckle}}}$$

---

## 6. Algoritma Python Solver: In-Situ Consolidation (ISC) Thermal-Bonding & Steering Window Optimizer

Skrip Python berikut memodelkan evolusi termal 1D transient titik nip, kinetika kontak intim Lee-Springer, kinetika autohesi reptasi polimer de Gennes, perhitungan derajat ikatan total $D_{\text{bond}}$, estimasi fraksi rongga terperangkap (*void content evolution*), serta batas aman radius steering komposit termoplastik CF/PEEK berstandar kedirgantaraan.

```python
"""
RuangTI In-Situ Consolidation (ISC) & AFP Steering Process Optimizer
Model Termal 1D, Kinetika Intimate Contact, Autohesi Reptasi, dan Analisis Cacat Steering.
Standar: ASTM D6830, ISO 15024, SAMPE Guidelines.
"""

import numpy as np
from dataclasses import dataclass
from typing import Dict, Tuple, List

@dataclass
class MaterialPropertiesCFPEEK:
    """Properti Material Unidirectional CF/PEEK (APC-2 / AS4)"""
    rho: float = 1580.0             # Densitas (kg/m3)
    Cp: float = 1450.0              # Kalor jenis rata-rata (J/kg.K)
    k_z: float = 0.65               # Konduktivitas transversal ketebalan (W/m.K)
    k_x: float = 6.5                # Konduktivitas longitudinal serat (W/m.K)
    Tm: float = 343.0               # Titik leleh kristalin (°C)
    Tg: float = 143.0               # Temperatur transisi gelas (°C)
    E11: float = 138e9              # Modulus tarik longitudinal (Pa)
    h_tape: float = 0.15e-3         # Ketebalan pita tunggal (m) = 150 um
    w_tape: float = 6.35e-3         # Lebar tow pita (m) = 1/4 inch (6.35 mm)
    a0: float = 1.8e-6              # Tinggi asperiti kekasaran permukaan awal (m)
    b0: float = 12.0e-6             # Lebar asperiti kekasaran awal (m)
    w0: float = 12.0e-6             # Jarak celah antar asperiti (m)
    # Kinetika Reptasi Polimer
    t_rep0: float = 1.2e-6          # Konstanta waktu reptasi intrinsik (s)
    E_act: float = 48.5e3           # Energi aktivasi aliran reptasi (J/mol)
    R_gas: float = 8.314            # Konstanta gas ideal (J/mol.K)
    eta0_ref: float = 450.0         # Viskositas nol-geser referensi pada 380°C (Pa.s)
    T_ref_K: float = 380.0 + 273.15 # Temperatur referensi (K)

@dataclass
class AFPProcessParameters:
    """Parameter Operasi Mesin Automated Fiber Placement"""
    V_placement: float = 0.15       # Kecepatan peletakan pita (m/s) = 150 mm/s
    P_laser: float = 3200.0         # Daya laser HPDL (Watt)
    laser_efficiency: float = 0.88  # Absorptisitas optik permukaan CF
    spot_length: float = 0.025      # Panjang spot laser pada zona nip (m)
    spot_width: float = 0.015       # Lebar spot laser (m)
    F_compaction: float = 650.0     # Gaya kompaksi rol penekan (N)
    R_roller: float = 0.050         # Radius rol silikon (m) = 50 mm
    E_roller: float = 12.0e6        # Modulus elastisitas rol silikon (Pa) = 12 MPa
    nu_roller: float = 0.48         # Poisson ratio silikon
    T_ambient: float = 25.0         # Suhu ruang (°C)
    T_substrate_pre: float = 120.0  # Suhu awal substrat terpanaskan (°C)

class AFPConsolidationSolver:
    def __init__(self, mat: MaterialPropertiesCFPEEK, proc: AFPProcessParameters):
        self.mat = mat
        self.proc = proc
        
    def calculate_roller_mechanics(self) -> Dict[str, float]:
        """Menghitung mekanika kontak Hertzian rol elastomer penekan."""
        # Modulus kontak ekivalen E*
        E_star = self.proc.E_roller / (1.0 - self.proc.nu_roller**2)
        
        # Setengah lebar footprint kontak b_c
        b_c = np.sqrt((4.0 * self.proc.F_compaction * self.proc.R_roller) / 
                      (np.pi * self.proc.spot_width * E_star))
        
        total_contact_length = 2.0 * b_c
        P_peak = (2.0 * self.proc.F_compaction) / (np.pi * b_c * self.proc.spot_width)
        P_avg = self.proc.F_compaction / (total_contact_length * self.proc.spot_width)
        t_dwell = total_contact_length / self.proc.V_placement
        
        return {
            "contact_half_width_mm": b_c * 1000.0,
            "total_contact_length_mm": total_contact_length * 1000.0,
            "P_peak_MPa": P_peak / 1e6,
            "P_avg_MPa": P_avg / 1e6,
            "dwell_time_ms": t_dwell * 1000.0
        }
        
    def simulate_thermal_and_bonding(self, n_steps: int = 500) -> Dict[str, np.ndarray]:
        """Simulasi integrasi termal transient, intimate contact, dan autohesion."""
        roller_mech = self.calculate_roller_mechanics()
        t_dwell = roller_mech["dwell_time_ms"] / 1000.0
        
        # Waktu pemanasan pra-rol + waktu rol
        t_heat = self.proc.spot_length / self.proc.V_placement
        t_total = t_heat + t_dwell * 1.5
        dt = t_total / n_steps
        time_arr = np.linspace(0, t_total, n_steps)
        
        temp_arr = np.zeros(n_steps)
        D_ic_arr = np.zeros(n_steps)
        D_au_arr = np.zeros(n_steps)
        D_bond_arr = np.zeros(n_steps)
        void_fraction_arr = np.zeros(n_steps)
        
        # Nilai awal
        T_current = self.proc.T_substrate_pre
        D_ic = 0.0
        integral_reptation = 0.0
        integral_viscous = 0.0
        initial_void = 0.08  # 8% void volume awal dalam incoming raw tape
        
        # Intensitas fluks laser rata-rata
        q_laser_flux = (self.proc.P_laser * self.proc.laser_efficiency) / (self.proc.spot_length * self.proc.spot_width)
        
        for i, t in enumerate(time_arr):
            # 1. Profil Termal Terapan
            if t <= t_heat:
                # Pemanasan cepat oleh laser nip-point
                dT_dt = (q_laser_flux) / (self.mat.rho * self.mat.Cp * self.mat.h_tape) - 150.0 * (T_current - self.proc.T_ambient)
                T_current += dT_dt * dt
            elif t <= (t_heat + t_dwell):
                # Penekanan di bawah rol (konduksi ke rol dingin + disipasi)
                dT_dt = - (3500.0 / (self.mat.rho * self.mat.Cp * self.mat.h_tape)) * (T_current - 60.0)
                T_current += dT_dt * dt
            else:
                # Pendinginan bebas pasca-rol
                dT_dt = - (25.0 / (self.mat.rho * self.mat.Cp * self.mat.h_tape)) * (T_current - self.proc.T_ambient)
                T_current += dT_dt * dt
                
            temp_arr[i] = T_current
            T_kelvin = T_current + 273.15
            
            # 2. Perhitungan Tekanan Lokal P(t)
            if t_heat < t <= (t_heat + t_dwell):
                # Tekanan parabolik Hertzian di bawah rol
                tau_roll = (t - t_heat) / t_dwell
                P_local = roller_mech["P_peak_MPa"] * 1e6 * 4.0 * tau_roll * (1.0 - tau_roll)
            else:
                P_local = 0.0
                
            # 3. Kinetika Kontak Intim Lee-Springer
            if T_current >= self.mat.Tm and P_local > 0:
                # Viskositas PEEK leleh (Arrhenius)
                eta_T = self.mat.eta0_ref * np.exp((self.mat.E_act / self.mat.R_gas) * (1.0 / T_kelvin - 1.0 / self.mat.T_ref_K))
                integral_viscous += (P_local / eta_T) * dt
                term = 1.0 + (1.0 + self.mat.w0 / self.mat.b0) * (5.0 * self.mat.a0 / self.mat.b0) * integral_viscous
                D_ic = (1.0 / (1.0 + self.mat.w0 / self.mat.b0)) * (term ** (0.2))
                D_ic = min(1.0, max(0.0, D_ic))
            elif T_current < self.mat.Tg:
                # Terbekukan di bawah Tg
                pass
            D_ic_arr[i] = D_ic
            
            # 4. Kinetika Autohesi Teori Reptasi
            if T_current >= self.mat.Tm:
                t_rep_T = self.mat.t_rep0 * np.exp(self.mat.E_act / (self.mat.R_gas * T_kelvin))
                integral_reptation += (1.0 / t_rep_T)**0.5 * dt
                D_au = np.sqrt(integral_reptation)
                D_au = min(1.0, max(0.0, D_au))
            elif T_current < self.mat.Tg:
                D_au = D_au_arr[i-1] if i > 0 else 0.0
            else:
                D_au = D_au_arr[i-1] if i > 0 else 0.0
            D_au_arr[i] = D_au
            
            # 5. Derajat Bonding Total & Eliminasi Void
            D_bond = D_ic * D_au
            D_bond_arr[i] = D_bond
            void_fraction_arr[i] = max(0.003, initial_void * (1.0 - D_bond))
            
        return {
            "time_s": time_arr,
            "temperature_C": temp_arr,
            "D_ic": D_ic_arr,
            "D_au": D_au_arr,
            "D_bond": D_bond_arr,
            "void_content_pct": void_fraction_arr * 100.0
        }
        
    def calculate_steering_limits(self, R_steer_range: np.ndarray) -> Dict[str, Any]:
        """Menghitung batas aman steering tape terhadap risiko kerutan (wrinkling)."""
        # Tegangan tekuk kritis pita komposit
        # Estimasi modulus fondasi matriks leleh K_f ~ 1.5 MPa
        K_f = 1.5e6
        D_flex = (self.mat.E11 * self.mat.h_tape**3) / 12.0
        sigma_crit_buckle = 2.0 * np.sqrt(K_f * D_flex / self.mat.h_tape)
        
        # Radius steering minimum absolut
        R_crit_buckle = (self.mat.E11 * self.mat.w_tape) / (2.0 * sigma_crit_buckle)
        
        strain_inner = np.zeros_like(R_steer_range)
        strain_outer = np.zeros_like(R_steer_range)
        wrinkle_risk = []
        
        for idx, R in enumerate(R_steer_range):
            eps_max = (self.mat.w_tape / 2.0) / R
            strain_outer[idx] = eps_max * 100.0  # Regangan tarik (%)
            strain_inner[idx] = -eps_max * 100.0 # Regangan tekan (%)
            
            if R < R_crit_buckle:
                wrinkle_risk.append("HIGH_RISK_WRINKLE")
            elif R < R_crit_buckle * 1.5:
                wrinkle_risk.append("MODERATE_INCIPIENT")
            else:
                wrinkle_risk.append("SAFE_DEFECT_FREE")
                
        return {
            "R_crit_buckle_m": R_crit_buckle,
            "sigma_crit_MPa": sigma_crit_buckle / 1e6,
            "R_steer_range": R_steer_range,
            "strain_inner_pct": strain_inner,
            "strain_outer_pct": strain_outer,
            "wrinkle_risk": wrinkle_risk
        }

if __name__ == "__main__":
    mat = MaterialPropertiesCFPEEK()
    proc = AFPProcessParameters()
    solver = AFPConsolidationSolver(mat, proc)
    
    # 1. Evaluasi Jejak Kontak Rol Penekan
    roller_res = solver.calculate_roller_mechanics()
    print("=== AFP CONFORMABLE ROLLER CONTACT MECHANICS ===")
    print(f"Lebar Jejak Kontak (Footprint) : {roller_res['total_contact_length_mm']:.2f} mm")
    print(f"Tekanan Puncak Rol (P_peak)    : {roller_res['P_peak_MPa']:.2f} MPa")
    print(f"Waktu Tinggal Rol (Dwell Time) : {roller_res['dwell_time_ms']:.2f} ms")
    
    # 2. Simulasi Termal & Konsolidasi Interlaminar
    sim_res = solver.simulate_thermal_and_bonding(n_steps=600)
    T_max = np.max(sim_res["temperature_C"])
    final_D_ic = sim_res["D_ic"][-1]
    final_D_au = sim_res["D_au"][-1]
    final_D_bond = sim_res["D_bond"][-1]
    final_void = sim_res["void_content_pct"][-1]
    
    print("\n=== IN-SITU CONSOLIDATION SIMULATION RESULTS ===")
    print(f"Suhu Puncak Nip-Point (T_max) : {T_max:.1f} °C (Ambang Leleh PEEK: 343 °C)")
    print(f"Derajat Kontak Intim (D_ic)   : {final_D_ic * 100:.2f}%")
    print(f"Derajat Autohesi Reptasi (D_au): {final_D_au * 100:.2f}%")
    print(f"Derajat Ikatan Total (D_bond) : {final_D_bond * 100:.2f}%")
    print(f"Fraksi Porositas Akhir (Void) : {final_void:.2f}% (Batas Aero: < 1.0%)")
    
    # 3. Analisis Cacat Steering Tape
    R_test = np.array([0.25, 0.5, 0.8, 1.2, 1.8, 2.5])
    steer_res = solver.calculate_steering_limits(R_test)
    print("\n=== AFP TAPE STEERING DEFECT & BUCKLING LIMITS ===")
    print(f"Radius Steering Kritis Minimum (R_crit): {steer_res['R_crit_buckle_m']:.3f} m")
    print(f"Tegangan Tekuk Kritis Pita (Sigma_crit): {steer_res['sigma_crit_MPa']:.2f} MPa")
    for r, rsk in zip(steer_res["R_steer_range"], steer_res["wrinkle_risk"]):
        print(f"  Radius R = {r:.2f} m -> Status: {rsk}")
```

---

## 7. Studi Kasus Industri: Manufaktur Barel Fuselage Pesawat Komersial Berdiameter 4.0 m Menggunakan CF/PEEK AFP In-Situ

### 7.1 Latar Belakang Masalah & Spesifikasi Komponen

Sebuah konsorsium manufaktur kedirgantaraan memproduksi segmen barel *fuselage* komposit sepanjang $6\ \text{m}$ dan berdiameter $4{,}0\ \text{m}$ menggunakan pita termoplastik unidireksional serat karbon/PEEK (*Toray Cetex TC1200 PEEK / AS4 145 gsm, tebal 0.14 mm, lebar tow 6.35 mm*).

Tantangan utama yang dihadapi:
1. **Target Porositas Sangat Ketat**: Standar kelaikan udara FAA/EASA mensyaratkan kandungan void interlaminar $V_{\text{void}} < 1{,}0\%$ dan kekuatan geser antar-lapisan (*Interlaminar Shear Strength - ILSS*) $\ge 85\ \text{MPa}$ (ASTM D2344).
2. **Defek Sudut Belok (Steering Wrinkles)**: Pada zona transisi bukaan jendela (*window cutout reinforcement*), orientasi serat bervariasi membutuhkan belokan pita dengan radius kecil ($R = 0{,}65\ \text{m}$), yang sebelumnya memicu cacat lipatan tekuk (*out-of-plane buckling wrinkles*) berdimensi tinggi $0{,}35\ \text{mm}$.
3. **Efisiensi Siklus Manufaktur**: Menghilangkan kebutuhan oven autoklaf raksasa berdiameter $5\ \text{m}$, menghemat $75\%$ konsumsi energi listrik pabrik.

### 7.2 Implementasi Solusi Rekayasa

1. **Sistem Pemanas Laser Dioda Adaptif Tertutup (*Closed-Loop Laser Heating*)**:
   - Mengintegrasikan sensor pirometer inframerah frekuensi tinggi ($1\ \text{kHz}$) yang terhubung langsung ke pengontrol daya laser HPDL ($4\ \text{kW}, \lambda = 980\ \text{nm}$).
   - Temperatur nip-point dikendalikan secara presisi pada rentang $395 \pm 5\ \text{°C}$, menjamin viskositas leleh PEEK turun hingga $\eta \approx 320\ \text{Pa}\cdot\text{s}$ tanpa mendegradasi termal polimer (suhu degradasi PEEK $> 450\ \text{°C}$).
2. **Optimasi Desain Rol Penekan Elastomer Bertingkat**:
   - Menggunakan rol berbahan fluoroelastomer bersuhu tinggi dengan modulus elastisitas gradien ($E = 14\ \text{MPa}$) dan gaya kompaksi $F_c = 750\ \text{N}$, memperlebar jejak kontak nip menjadi $12{,}4\ \text{mm}$ dan menghasilkan waktu tinggal kompaksi $t_{\text{dwell}} = 62\ \text{ms}$ pada kecepatan peletakan $V_p = 200\ \text{mm/s}$.
3. **Penerapan Sub-Tow Slitting & Tension Control pada Steering**:
   - Untuk zona bukaan jendela dengan radius $R = 0{,}65\ \text{m}$ (di bawah batas kritis pita utuh $6{,}35\ \text{mm}$ yaitu $R_{\text{crit}} = 0{,}88\ \text{m}$), sistem membagi pita menjadi 2 lajur sub-tow selebar $3{,}175\ \text{mm}$ secara independen dengan kontrol tegangan diferensial (*differential tensioning*), mereduksi regangan tekan dalam hingga $50\%$ dan mengeliminasi pembentukan *wrinkles* secara tuntas.

### 7.3 Hasil Verifikasi Eksperimental & Pengujian Kualitas

| Parameter Evaluasi | Sebelum Optimasi (Trial Awal) | Pasca Optimasi In-Situ AFP | Standar Kedirgantaraan | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Kandungan Porositas (*Void Fraction*)** | $3{,}45\%$ (Tidak Lolos) | **$0{,}68\%$** (Mikrotomografi CT) | $< 1{,}00\%$ (ASTM D2734) | **MEMENUHI STANDAR** |
| **Ketangguhan Retak Moda I ($G_{IC}$)** | $1120\ \text{J/m}^2$ | **$1890\ \text{J/m}^2$** | $> 1500\ \text{J/m}^2$ (ISO 15024) | **MEMENUHI STANDAR** |
| **Kekuatan Geser Balok Pendek (ILSS)** | $64{,}2\ \text{MPa}$ | **$93{,}5\ \text{MPa}$** | $> 85{,}0\ \text{MPa}$ (ASTM D2344) | **MEMENUHI STANDAR** |
| **Defek Lipatan Steering (*Wrinkle Height*)** | $350\ \mu\text{m}$ (Cacat Parah) | **$0\ \mu\text{m}$ (Bebas Kerutan)** | $< 50\ \mu\text{m}$ (Aero-Inspection) | **MEMENUHI STANDAR** |
| **Waktu Siklus Konsolidasi Total** | $14\ \text{jam}$ (Autoklaf) | **$2{,}1\ \text{jam}$ (In-Situ OOA)** | - | **REDUKSI 85% SIKLUS** |
| **Konsumsi Energi Per Barel** | $4200\ \text{kWh}$ | **$480\ \text{kWh}$** | - | **HEMAT ENERGI 88.5%** |

---

## 8. Pertanyaan Uji Pemahaman & Diskusi Kritis

1. **Jelaskan perbedaan mendasar antara mekanisme konsolidasi komposit termoset berbasis autoklaf dan konsolidasi in-situ (*In-Situ Consolidation - ISC*) termoplastik berbasis laser AFP! Mengapa transfer kalor transversal ketebalan menjadi faktor pembatas utama pada ISC berkecepatan tinggi?**
2. **Berdasarkan teori reptasi polimer de Gennes, turunkan hubungan antara waktu relaksasi molekuler $t_{\text{rep}}$, temperatur titik leleh, dan derajat autohesi antarmuka $D_{au}$. Mengapa peningkatan kecepatan peletakan $V_p$ memerlukan peningkatan temperatur pemanasan laser nip-point secara proporsional?**
3. **Mengapa fenomena tekuk mikro (*micro-buckling / out-of-plane wrinkling*) terjadi pada tepi sebelah dalam jalur serat saat manuver pembelokan pita (*tape steering*) pada lintasan kurvilinier? Tuliskan formulasi penentuan radius pembelokan minimum $R_{\text{min}}$ sebagai fungsi dari lebar pita $W_{\text{tape}}$ dan kekakuan tekuk kritis!**

---

## 9. Referensi Terverifikasi & Rekomendasi Bacaan Lanjutan

1. **Hoa, S. V., & Fereidouni, M.** (2025). *In-situ consolidation of thermoplastic composites by automated fiber placement: Characterization of defects and process mechanics*. Journal of Composite Materials, 59(4), 485–502. DOI: 10.1177/08927057241251837.
2. **Stokes-Griffin, C. M., & Compston, P.** (2022). *In situ consolidation of carbon fibre PAEK via laser-assisted automated fibre placement: Void dynamics and interlaminar bond kinetics*. Composites Part A: Applied Science and Manufacturing, 163, 107224. DOI: 10.1016/j.compositesa.2022.107224.
3. **Pitchumani, R., & Yang, F.** (2021). *Interlaminar Contact and Autohesion Mechanics in High-Rate Thermoplastic Composite Manufacturing*. Macromolecular Materials and Engineering, 306(8), 2100145.
4. **de Gennes, P. G.** (1971). *Reptation of a Polymer Chain in the Presence of Fixed Obstacles*. The Journal of Chemical Physics, 55(2), 572–579. DOI: 10.1063/1.1675789.
5. **ASTM International**. (2023). *ASTM D6830 / D3878: Standard Test Methods and Terminology for Automated Deposition of Advanced Composite Materials*. West Conshohocken, PA: ASTM International.
6. **International Organization for Standardization**. (2023). *ISO 15024: Fibre-reinforced plastic composites — Determination of mode I interlaminar fracture toughness for unidirectionally reinforced materials*. Geneva: ISO.
7. **NASA Technical Reports Server**. (2021). *NASA/TM-20210018241: Automated Fiber Placement Manufacturing Defects, Steering Limits, and Structural Knockdowns for Thermoplastic Aerospace Structures*. Hampton, VA: NASA Langley Research Center.
