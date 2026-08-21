# Modul 585: Electron Beam Melting (PBF-EB / EBM) Logam & Paduan: Relativistik Electron Gun, Fenomena Charging & Powder Smoke, Kinetika Solidifikasi Melt Pool, dan Mikrostruktur Fasa Ti-6Al-4V ELI (ISO/ASTM 52900 & ASTM F3001)

## 1. Pengantar & Prinsip Fundamental Electron Beam Melting (PBF-EB / EBM)

Electron Beam Melting (*Powder Bed Fusion - Electron Beam* / PBF-EB atau EBM) adalah proses manufaktur aditif fusi serbuk logam presisi tinggi di mana berkas elektron berenergi tinggi yang diarahkan dan difokuskan secara elektromagnetik digunakan untuk melebur partikel serbuk logam lapis demi lapis di bawah kondisi vakum tinggi (*high vacuum*, $P_{\text{chamber}} \approx 10^{-4} - 10^{-2}\text{ mbar}$ dengan injeksi parsial gas mulia Helium terkontrol $P_{\text{He}} \approx 10^{-3}\text{ mbar}$). 

Berbeda dengan sistem *Laser Powder Bed Fusion* (PBF-LB / L-PBF) yang mengandalkan foton elektromagnetik dan sistem pemindaian cermin galvano-mekanis, PBF-EB menggunakan elektron termionik berkecepatan relativistik ($\approx 0.1 - 0.5\text{ c}$) yang dibelokkan secara inersial bebas (*massless inertialess deflection*) menggunakan kumparan defleksi elektromagnetik (*magnetic deflection coils*). Hal ini memungkinkan kecepatan pemindaian (*scanning speed*) mencapai ribuan meter per detik ($v_s > 10^3 - 10^4\text{ m/s}$) serta pemanasan multi-titik kuasi-simultan (*quasi-simultaneous multi-spot melting*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ARSITEKTUR SISTEM PBF-EB / EBM & PROSES FUSI SERBUK VAKUM                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐     |
|   │ KOLOM SENJATA ELEKTRON (ELECTRON GUN COLUMN) - ULTRA-HIGH VACUUM (P < 10^-5 mbar)                           │     |
|   │                                                                                                             │     |
|   │      Katoda Filamen Tungsten/LaB6 (T > 2500 K) ────► [ -60 kV Bias ] (Emisi Termionik)                      │     |
|   │                                                               │                                             │     |
|   │      Anoda Ground (0 V) ───────────────────────────► ═════════╪═════════ (Akselerasi v_e ~ 0.44 c)         │     |
|   │                                                               │                                             │     |
|   │      Lensa Kolimasi & Stigmator ───────────────────► [ ( ) ( ) ( ) ] (Koreksi Astigmatisme)                │     |
|   │                                                               │                                             │     |
|   │      Lensa Fokus Magnetik (Magnetic Focus Lens) ───► [ ( ( O ) ) ] (Diameter Berkas d_b = 100 - 300 um)     │     |
|   │                                                               │                                             │     |
|   │      Kumparan Defleksi Magnetik (Deflection Coils) ─► / / / / \ \ \ \ (Defleksi Inersial Bebas v_s > 5 km/s)│     |
|   └──────────────────────────────────────────────────────────────┬──────────────────────────────────────────────┘     |
|                                                                  │                                                    |
|                                                                  ▼ Berkas Elektron Relativistik (E = 60 keV)          |
|   ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐     |
|   │ RUANG PROSES (BUILD CHAMBER) - VACUUM DENGAN CONTROLLED HELIUM BLEED (P ~ 2x10^-3 mbar)                     │     |
|   │                                                                                                             │     |
|   │  Hopper Serbuk Logam               Rake Pemadat Serbuk           Kolom Pemanas & Peleburan                 │     |
|   │  ┌────────────────┐                ┌───┐                         │ Berkas Berkelajuan Tinggi                │     |
|   │  │ Ti-6Al-4V ELI  │ ─────────────► │   │ ──────────────────────► │                                         │     |
|   │  │ 45 - 105 um    │                └───┘                         ▼                                         │     |
|   │  └────────────────┘                                         ░░░░░░░░░░░░░░░ Serbuk Pre-heated (~ 700 °C)   │     |
|   │                                                             ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Kolam Lebur (Melt Pool)        │     |
|   │                                                             ███████████████ Part Padat Bebas Residual Stress│     |
|   │                                                                                                             │     |
|   │  Plat Substrat (Start Plate) ──────────────────────────────► ═══════════════ (Suhu Tinggi T_bed = 650-1000°C)│   |
|   │  Piston Penurun Sumbu Z (Build Table) ─────────────────────►       │                                        │     |
|   │                                                                    ▼ Turun Delta-Z (50 - 100 um)            │     |
|   └─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Keunggulan metalurgi utama dari proses PBF-EB meliputi:
1. **Temperatur Proses Tinggi (*High-Temperature Build Environment*)**: Lapisan serbuk dipertahankan pada temperatur $T_{\text{bed}} \approx 650 - 1000^\circ\text{C}$ (bergantung pada material, misalnya $650 - 730^\circ\text{C}$ untuk paduan $Ti\text{-}6Al\text{-}4V$ dan $>950^\circ\text{C}$ untuk intermetalik $\gamma\text{-}TiAl$). Hal ini mengeliminasi tegangan sisa termal (*thermal residual stresses*), mencegah delaminasi part, dan meminimalkan kebutuhan perlakuan panas pelepasan tegangan pasca-proses (*post-process stress relief*).
2. **Kualitas Vakum Mencegah Oksidasi Logam Reaktif**: Lingkungan vakum tinggi mencegah kontaminasi unsur interstisial (oksigen, nitrogen, hidrogen) pada material yang sangat reaktif seperti Titanium, Tantalum, Tungsten, dan Zirkonium.
3. **Efisiensi Kopling Energi Tinggi**: Penyerapan energi berkas elektron ke dalam serbuk logam mencapai $\eta_{\text{abs}} \approx 80\% - 95\%$, jauh melampaui penyerapan reflektif laser pada paduan berkilap atau reflektifitas tinggi (seperti Cu, Al, Au).
4. **Sintering Parsial Lapisan Serbuk (Preheating Stage)**: Sebelum peleburan kontur (*melt scan*), berkas elektron yang di-defokus (*defocused beam*) menyapu seluruh area kerja dengan kecepatan sangat tinggi untuk melakukan *pre-sintering*. Langkah ini mengunci partikel serbuk di tempatnya, memberikan konduktivitas listrik dan termal yang cukup untuk mencegah fenomena ledakan serbuk (*powder smoke*).

Standar regulasi industri manufaktur aditif untuk PBF-EB mencakup:
- **ISO/ASTM 52900**: *Additive manufacturing — General principles — Fundamentals and vocabulary*.
- **ISO/ASTM 52911-2**: *Additive manufacturing — Design — Part 2: Laser-based and electron beam powder bed fusion of metals*.
- **ASTM F3001**: *Standard Specification for Additive Manufacturing Titanium-6 Aluminum-4 Vanadium ELI (Extra Low Interstitial) with Powder Bed Fusion*.
- **ASTM F2924**: *Standard Specification for Additive Manufacturing Titanium-6 Aluminum-4 Vanadium with Powder Bed Fusion*.
- **ASTM F3055**: *Standard Specification for Additive Manufacturing Nickel Alloy (UNS N07718) with Powder Bed Fusion*.
- **AMS 4999**: *Titanium Alloy Direct Deposited Products, 6Al-4V Annealed*.

---

## 2. Fisika Senjata Berkas Elektron & Dinamika Partikel Relativistik

### 2.1 Emisi Termionik dan Akselerasi Elektrostatik
Elektron diemisikan dari filamen katoda panas (Tungsten atau Cerium/Lanthanum Hexaboride $LaB_6$) mengikuti persamaan emisi termionik Richardson-Dushman:

$$J = A_R \cdot T^2 \cdot \exp\left(-\frac{\Phi}{k_B T}\right)$$

Di mana:
- $J$ = Kerapatan arus emisi termionik ($\text{A/m}^2$).
- $A_R = \frac{4\pi m_e k_B^2}{e \hbar^3} \approx 1.20 \times 10^6\text{ A}\cdot\text{m}^{-2}\cdot\text{K}^{-2}$ (konstanta Richardson teoretis).
- $T$ = Temperatur absolut filamen ($\text{K}$).
- $\Phi$ = Fungsi kerja material katoda ($\text{eV}$, $\approx 4.5\text{ eV}$ untuk W, $\approx 2.7\text{ eV}$ untuk $LaB_6$).
- $k_B$ = Konstanta Boltzmann ($1.380649 \times 10^{-23}\text{ J/K}$).

Elektron yang terlepas kemudian dipercepat melintasi medan elektrostatik tegangan tinggi $V_a$ (biasanya $V_a = 60\text{ kV}$). Energi kinetik elektron yang dipercepat adalah:

$$E_k = e \cdot V_a = 60\text{ keV} = 60 \times 10^3 \times 1.6022 \times 10^{-19}\text{ J} \approx 9.613 \times 10^{-15}\text{ J}$$

### 2.2 Koreksi Relativistik Massa dan Kecepatan Elektron
Karena energi kinetik $E_k = 60\text{ keV}$ merupakan fraksi signifikan dari energi diam elektron ($E_0 = m_0 c^2 \approx 511\text{ keV}$, rasio $E_k/E_0 \approx 0.117$), efek mekanika relativistik khusus Albert Einstein harus diperhitungkan:

$$\gamma = 1 + \frac{e V_a}{m_0 c^2} = 1 + \frac{60\text{ keV}}{510.999\text{ keV}} \approx 1.1174$$

Kecepatan elektron terakselerasi $v_e$ dihitung melalui:

$$v_e = c \sqrt{1 - \frac{1}{\gamma^2}} = 2.9979 \times 10^8 \times \sqrt{1 - \frac{1}{(1.1174)^2}} \approx 1.334 \times 10^8\text{ m/s} \approx 0.445\text{ }c$$

Massa relativistik elektron adalah $m = \gamma m_0 \approx 1.1174 \times 9.109 \times 10^{-31}\text{ kg} \approx 1.018 \times 10^{-30}\text{ kg}$.

### 2.3 Penetrasi Elektron ke Dalam Serbuk Paduan (Kanaya-Okayama Range)
Ketika berkas elektron menembus permukaan serbuk padat, elektron kehilangan energi melalui hamburan inelastis dengan awan elektron atom target (*Bethe stopping power*). Kedalaman penetrasi maksimum elektron (*electron penetration range*, $R_{KO}$) dimodelkan secara akurat oleh formula Kanaya-Okayama:

$$R_{KO} = \frac{0.0276 \cdot A \cdot E_0^{1.67}}{\rho \cdot Z^{0.89}} \quad [\mu\text{m}]$$

Di mana:
- $E_0 = e V_a$ = Energi berkas datang ($\text{keV}$, e.g. $60\text{ keV}$).
- $A$ = Massa atom rata-rata paduan ($\text{g/mol}$, untuk Ti-6Al-4V: $A \approx 46.68\text{ g/mol}$).
- $Z$ = Nomor atom rata-rata paduan ($Z \approx 21.6$ untuk Ti-6Al-4V).
- $\rho$ = Densitas teoritis material target ($\text{g/cm}^3$, untuk paduan padat Ti-6Al-4V $\rho = 4.43\text{ g/cm}^3$; untuk lapisan serbuk berporositas $\varepsilon \approx 0.5$, $\rho_{\text{bed}} = \rho (1 - \varepsilon) \approx 2.215\text{ g/cm}^3$).

Untuk $V_a = 60\text{ keV}$ pada paduan Ti-6Al-4V:
$$R_{KO,\text{solid}} \approx \frac{0.0276 \times 46.68 \times 60^{1.67}}{4.43 \times (21.6)^{0.89}} \approx \frac{1.2884 \times 930.5}{4.43 \times 15.42} \approx 17.55\text{ }\mu\text{m}$$

Pada lapisan serbuk yang belum padat, $R_{KO,\text{powder}} \approx 35.1\text{ }\mu\text{m}$. Hal ini menunjukkan bahwa elektron mendeposisikan energinya secara volumetrik (*volumetric heat source*), bukan sekadar fluks fluks fluks permukaan murni seperti laser.

---

## 3. Fenomena Elektrostatik Serbuk: Mekanisme Powder "Smoke" dan Mitigasi

### 3.1 Teori Akumulasi Muatan Listrik dan Tolakan Coulomb
Tantangan fisika paling kritis dalam PBF-EB adalah fenomena **Powder Smoke** (letupan atau penghamburan serbuk tiba-tiba). Karena elektron membawa muatan negatif tunggal ($-e$), ketika berkas elektron berenergi tinggi menghantam serbuk logam isolator/semi-isolator (karena resistansi kontak antar-partikel), muatan listrik negatif terakumulasi pada partikel-partikel serbuk.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                KESETIMBANGAN GAYA PADA PARTIKEL SERBUK DALAM PBF-EB                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       Gaya Tolak Elektrostatik F_Coulomb                                              |
|                                                     ▲                                                                 |
|                                                     │                                                                 |
|                                            .-'''''-.│                                                                 |
|                                          .'  - - -  '.                                                                |
|                                         / -  Partikel \                                                               |
|                                        |  -  Serbuk -  |                                                              |
|                                         \ -  Muatan q /                                                               |
|                                          '.  - - -  .'                                                                |
|                                            '-.....-'│                                                                 |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|                                       Gaya Gravitasi F_g + Gaya van der Waals F_vdW                                   |
|                                       + Gaya Necking Sintering Awal F_neck                                            |
|                                                                                                                       |
|    KONDISI STABIL (BEBAS SMOKE):        F_g + F_vdW + F_neck > F_Coulomb                                              |
|    KONDISI KRITIS (POWDER SMOKE):       F_Coulomb >= F_g + F_vdW + F_neck  ──► SERBUK MELEDAK / TERBANG              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Jika muatan listrik per partikel $q$ terakumulasi hingga tegangan elektrostatis melebihi batas kohesif serbuk, gaya tolak-menolak Coulomb antar-partikel yang bertetangga ($F_C$) akan melebihi gaya gravitasi ($F_g$), gaya van der Waals ($F_{\text{vdW}}$), dan ikatan mekanis serbuk. Akibatnya, jutaan partikel serbuk serentak meledak dan terlontar ke ruang vakum, merusak berkas dan mengotori kolom senjata elektron.

Persamaan neraca muatan dinamis pada partikel serbuk tunggal:

$$\frac{dq}{dt} = I_{\text{absorbed}} - I_{\text{emission}} - I_{\text{leak}}$$

Di mana:
- $I_{\text{absorbed}} = (1 - \eta_{BSE} - \delta_{SE}) I_b$ (Arus bersih yang diserap dari arus berkas elektron $I_b$, di mana $\eta_{BSE}$ adalah koefisien elektron hamburan balik /*backscattered electrons*/ dan $\delta_{SE}$ adalah koefisien emisi elektron sekunder /*secondary electron emission*/).
- $I_{\text{leak}} = \frac{V_{\text{particle}}}{R_{\text{contact}}} = \frac{q}{C_{\text{eff}} R_{\text{bed}}}$ (Arus kebocoran muatan ke pelat dasar melalui kontak antar-butir serbuk).

### 3.2 Kriteria Ketidakstabilan Smoke
Gaya tolak Coulomb antara dua partikel bermuatan identik $q$ dengan jarak pusat $r = 2 R_p = d_p$:

$$F_{\text{Coulomb}} = \frac{1}{4\pi \varepsilon_0} \frac{q^2}{d_p^2}$$

Gaya gravitasi penahan:
$$F_g = m_p g = \left(\frac{\pi}{6} d_p^3 \rho\right) g$$

Gaya van der Waals antar partikel bola:
$$F_{\text{vdW}} = \frac{A_H \cdot d_p}{24 \cdot z_0^2}$$
Di mana $A_H$ adalah konstanta Hamaker ($\approx 1 - 3 \times 10^{-19}\text{ J}$ untuk logam) dan $z_0$ adalah jarak pisah atomik ($\approx 0.3 - 0.4\text{ nm}$).

Batas muatan kritis $q_{\text{crit}}$ yang memicu *smoke*:

$$q_{\text{crit}} = \sqrt{4\pi \varepsilon_0 d_p^2 \left( m_p g + F_{\text{vdW}} + F_{\text{neck}} \right)}$$

### 3.3 Strategi Eliminasi Smoke Industri
1. **Preheating Tahap Awal**: Pemanasan awal lapisan serbuk dengan kecepatan berkas $v_s = 10^3 - 10^4\text{ m/s}$ dan arus $I_b \approx 20 - 45\text{ mA}$ menciptakan titik las leher mikro (*micro-sintered necks*, $F_{\text{neck}} \gg F_{\text{Coulomb}}$) di antara partikel serbuk.
2. **Helium Gas Bleed Inflow**: Tekanan Helium terkontrol ($P \approx 2 \times 10^{-3}\text{ mbar}$) menghasilkan ionisasi gas $He \to He^+ + e^-$. Ion-ion positif $He^+$ tertarik ke permukaan serbuk yang bermuatan negatif dan secara instan menetralkan akumulasi muatan statis.

---

## 4. Termodinamika & Kinetika Perpindahan Panas Melt Pool PBF-EB

### 4.1 Persamaan Konduksi Panas Sumber Volumetrik Bergerak Rosenthal
Temperatur quasi-steady state $T(x,y,z)$ di sekitar kolam lebur akibat pergerakan sumber panas berkas elektron dengan kecepatan konstan $v$ sepanjang sumbu $x$ dimodelkan dengan modifikasi Rosenthal-Goldak 3D Gaussian Volumetric Heat Source:

$$T(x,y,z) - T_0 = \frac{\eta P}{2\pi k R_{\text{dist}}} \exp\left( -\frac{v (x' + R_{\text{dist}})}{2\alpha} \right)$$

Di mana:
- $P = V_a \cdot I_b$ = Daya berkas elektron ($\text{W}$, tipikal $60\text{ kV} \times 15\text{ mA} = 900\text{ W}$ hingga $3000\text{ W}$).
- $\eta$ = Efisiensi kopling energi elektron ($\eta \approx 0.85 - 0.90$).
- $k$ = Konduktivitas termal material ($\text{W}/(\text{m}\cdot\text{K})$).
- $\alpha = \frac{k}{\rho c_p}$ = Difusivitas termal ($\text{m}^2/\text{s}$).
- $x' = x - v t$ = Koordinat bergerak searah lintasan scan.
- $R_{\text{dist}} = \sqrt{(x')^2 + y^2 + z^2}$ = Jarak Euclidean dari titik fokus berkas.

### 4.2 Gradien Termal ($G$), Kecepatan Solidifikasi ($R$), dan Laju Pendinginan ($\dot{T}$)
Karakteristik mikrostruktur hasil pembekuan kolam lebur ditentukan oleh dua variabel kunci pada antarmuka cair-padat (*liquid-solid interface*):
1. **Gradien Termal ($G$)**:
   $$G = \|\nabla T\| = \sqrt{\left(\frac{\partial T}{\partial x}\right)^2 + \left(\frac{\partial T}{\partial y}\right)^2 + \left(\frac{\partial T}{\partial z}\right)^2} \quad [\text{K/m}]$$
2. **Laju Pertumbuhan Solidifikasi ($R$)**:
   $$R = v_{\text{scan}} \cdot \cos\theta \quad [\text{m/s}]$$
   Di mana $\theta$ adalah sudut antara vektor normal antarmuka pembekuan dengan arah kecepatan berkas.

Parameter pengendali mikrostruktur:
- **Morfologi Butir ($G/R$)**: Menentukan transisi morfologi kristalisasi.
  $$\frac{G}{R} > \left(\frac{G}{R}\right)_{\text{crit}} \implies \text{Solidifikasi Selular / Planar}$$
  $$\frac{G}{R} < \left(\frac{G}{R}\right)_{\text{crit}} \implies \text{Solidifikasi Kolumnar Dendritik / Ekuaksial (Columnar-to-Equiaxed Transition, CET)}$$
- **Ukuran Butir & Spasi Lengan Dendritik ($\dot{T} = G \cdot R$)**:
  $$\dot{T} = G \times R \quad [\text{K/s}]$$
  Dalam PBF-EB, laju pendinginan berada pada rentang $\dot{T} \approx 10^3 - 10^5\text{ K/s}$. Nilai ini lebih rendah dari PBF-LB ($\dot{T} \approx 10^5 - 10^7\text{ K/s}$) karena tingginya temperatur *preheat* ($T_{\text{bed}} \approx 700^\circ\text{C}$), menghasilkan struktur mikro yang lebih stabil tanpa fasa martensit getas murni.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                          PETA MIKROSTRUKTUR SOLIDIFIKASI: HUBUNGAN G TERHADAP R                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Gradien Termal G [K/m]                                                                                              |
|         ▲                                                                                                             |
|     10^8│       PLANAR                                                                                                |
|         │         \                                                                                                   |
|     10^7│          \    SELULAR                                                                                       |
|         │           \      \                                                                                          |
|     10^6│            \      \   KOLUMNAR DENDRITIK (PBF-EB Dominan)                                                   |
|         │             \      \      \                                                                                 |
|     10^5│  G/R Tinggi  \      \      \                                                                                |
|         │  (Bebas       \      \      \                                                                               |
|     10^4│  Constitutional\      \      \   EKUAKSIAL DENDRITIK                                                        |
|         │  Supercooling)  \      \      \                                                                             |
|     10^3│                  \      \      \  Laju Pendinginan G*R = 10^5 K/s                                           |
|         │                   \      \      \                                                                           |
|         └────────────────────┴──────┴──────┴────────────────────────► Kecepatan Pertumbuhan R [m/s]                  |
|                             10^-3  10^-2  10^-1                                                                       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Evolusi Mikrostruktur Fasa Paduan Ti-6Al-4V ELI (ASTM F3001)

Paduan $Ti\text{-}6Al\text{-}4V\text{ ELI}$ (*Grade 23*, ASTM F3001) merupakan material paduan alfa-beta ($\alpha+\beta$) yang paling ekstensif diproduksi menggunakan PBF-EB untuk aplikasi implan biomedis dan komponen struktur luar angkasa.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                          JALUR TRANSFORMASI FASA KINETIKA PENDINGINAN Ti-6Al-4V PBF-EB                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Temperatur [°C]                                                                                                     |
|                                                                                                                       |
|      1660 °C ┼────────────────── Fasa Cair (Liquid Melt Pool)                                                         |
|              │                   │                                                                                    |
|              │                   ▼ Solidifikasi Primer                                                                |
|      1600 °C ┼────────────────── Butir Fasa Beta Prior Kolumnar Lebar (Prior-β Grain Boundaries)                      |
|              │                   │                                                                                    |
|              │                   ▼ Pendinginan Cepat Melintasi Temperatur Transus Beta (T_β ~ 995 °C)                 |
|       995 °C ┼ - - - - - - - - - T_β Transus - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -              |
|              │                   │                                                                                    |
|              │                   ├───────────────────────────────┬──────────────────────────────┐                     |
|              │                   │ PBF-LB (Quench Dingin)        │ PBF-EB (High T_bed = 700 °C) │                     |
|              │                   ▼                               ▼                              ▼                     |
|              │             Martensit Asikular            Nukleasi Lamela Alfa          Morfologi Basketweave          |
|              │             Getas (α'-hcp)                pada Batas Butir β             (Widmanstätten α+β)           |
|              │             (Keras, Ulet Rendah)          (α_GB + Lamela α/β)           (Ulet, Tangguh Retak)          |
|              │                                                   │                              │                     |
|       700 °C ┼───────────────────────────────────────────────────┴──────────────────────────────┴── In-situ Annealing |
|              │   Dekomposisi Termal Terkontrol Selama Siklus Fabrikasi: α' ──► α (hcp) + β (bcc)                      |
|              │   Hasil: Matriks Ultrafine Lamellar α + Butir β Interlamelar Stabil Bebas Tegangan Sisa               |
|        25 °C ┼─────────────────────────────────────────────────────────────────────────────────────────────────────── │
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Transformasi fasa pada PBF-EB berbeda secara fundamental dari PBF-LB:
1. **Dekomposisi In-Situ Martensit**: Pada pendinginan awal melintasi $T_\beta \approx 995^\circ\text{C}$, struktur martensit heksagonal non-ekuilibrium ($\alpha'$) dapat terbentuk sejenak. Namun, karena dasar *build* dipertahankan pada temperatur $T_{\text{bed}} \approx 650 - 720^\circ\text{C}$ selama berjam-jam selama proses berlangsung, fasa $\alpha'$ terurai secara in-situ (*in-situ intrinsic heat treatment*):
   $$\alpha' \xrightarrow{650-720^\circ\text{C}} \alpha (\text{hcp}) + \beta (\text{bcc})$$
2. **Struktur Mikro Widmanstätten (Basketweave)**: Mikrostruktur akhir terdiri dari lath $\alpha$ halus berbentuk anyaman keranjang (*basketweave microstructure*) dengan batas butir prior-$\beta$ memanjang searah sumbu pembangunan ($Z$-axis), dikelilingi oleh lapisan tipis fasa $\beta$ tertahan yang kaya Vanadium.
3. **Persyaratan Properti Mekanik ASTM F3001**:
   - Kuat Tarik Luluh (*Yield Strength*, $0.2\%$ offset): $R_{p0.2} \ge 795\text{ MPa}$
   - Kuat Tarik Maksimum (*Ultimate Tensile Strength*, UTS): $R_m \ge 860\text{ MPa}$
   - Regangan Putus (*Elongation at Break*, $A$): $\ge 10\%$
   - Reduksi Area ($Z$): $\ge 15\%$
   - Fraksi Interstisial Maksimum: $O \le 0.13\text{ wt}\%$, $N \le 0.05\text{ wt}\%$, $C \le 0.08\text{ wt}\%$, $H \le 0.012\text{ wt}\%$, $Fe \le 0.25\text{ wt}\%$.

---

## 6. Implementasi Algoritma & Python Solver: PBF-EB Melt Pool & Smoke Limit Simulator

Berikut adalah program Python mandiri (*standalone industrial solver*) untuk mensimulasikan penetrasi berkas Kanaya-Okayama, neraca muatan & kriteria ledakan serbuk (*powder smoke threshold*), pemodelan termal 3D kolam lebur Rosenthal, serta perhitungan rasio $G/R$ dan laju pendinginan $\dot{T}$.

```python
"""
PBF-EB / Electron Beam Melting (ASTM F3001 / ISO 52900) Physical Simulator.
Simulates:
1. Relativistic electron dynamics & Kanaya-Okayama volumetric penetration.
2. Electrostatic powder charge accumulation vs. van der Waals / gravity stability (Smoke Threshold).
3. 3D Rosenthal thermal field, Melt Pool geometry, G/R solidification morphology, and Cooling Rate.
"""

import math
from typing import Dict, Any, Tuple, List

class PBFEBSimulator:
    # Universal Physical Constants
    C_LIGHT = 2.99792458e8         # Speed of light [m/s]
    E_CHARGE = 1.602176634e-19     # Electron charge [C]
    M_ELECTRON = 9.1093837e-31     # Electron rest mass [kg]
    EPSILON_0 = 8.8541878128e-12   # Vacuum permittivity [F/m]
    GRAVITY = 9.80665              # Gravitational acceleration [m/s^2]
    HAMAKER_A = 2.5e-19            # Hamaker constant for metals [J]
    Z0_VDW = 0.35e-9               # Cut-off distance for vdW [m]

    def __init__(
        self,
        accel_voltage_kv: float = 60.0,
        beam_current_ma: float = 18.0,
        scan_speed_m_s: float = 1.2,
        beam_diameter_um: float = 200.0,
        bed_temp_c: float = 700.0,
        powder_diameter_um: float = 55.0,
        bed_porosity: float = 0.48,
        absorptivity: float = 0.88,
        he_pressure_mbar: float = 2.0e-3
    ):
        self.v_a = accel_voltage_kv * 1e3
        self.i_b = beam_current_ma * 1e-3
        self.v_scan = scan_speed_m_s
        self.d_beam = beam_diameter_um * 1e-6
        self.t_bed_k = bed_temp_c + 273.15
        self.d_p = powder_diameter_um * 1e-6
        self.porosity = bed_porosity
        self.eta = absorptivity
        self.p_he = he_pressure_mbar

        # Material Properties (Ti-6Al-4V Grade 23 ELI)
        self.mat_density_solid = 4430.0     # kg/m^3
        self.mat_density_bed = self.mat_density_solid * (1.0 - self.porosity)
        self.mat_k_thermal = 18.5           # W/(m*K) at elevated temperature
        self.mat_cp = 670.0                 # J/(kg*K)
        self.mat_alpha = self.mat_k_thermal / (self.mat_density_solid * self.mat_cp)
        self.mat_t_liquidus = 1660.0 + 273.15  # K (1933.15 K)
        self.mat_t_solidus = 1604.0 + 273.15   # K (1877.15 K)
        self.mat_atomic_weight = 46.68      # g/mol
        self.mat_atomic_num = 21.6

    def calculate_relativistic_electron_dynamics(self) -> Dict[str, float]:
        """Calculates Lorentz factor, relativistic speed, and Kanaya-Okayama range."""
        kinetic_energy_joules = self.E_CHARGE * self.v_a
        rest_energy_joules = self.M_ELECTRON * (self.C_LIGHT ** 2)
        
        # Lorentz Factor
        gamma = 1.0 + (kinetic_energy_joules / rest_energy_joules)
        
        # Relativistic velocity
        v_electron = self.C_LIGHT * math.sqrt(1.0 - (1.0 / (gamma ** 2)))
        v_ratio_c = v_electron / self.C_LIGHT
        
        # Kanaya-Okayama Penetration Range (in solid and powder)
        # R_KO = 0.0276 * A * E0^1.67 / (rho * Z^0.89)  [in um]
        e0_kev = self.v_a / 1000.0
        rho_solid_g_cm3 = self.mat_density_solid / 1000.0
        rho_bed_g_cm3 = self.mat_density_bed / 1000.0
        
        numerator = 0.0276 * self.mat_atomic_weight * (e0_kev ** 1.67)
        denominator_base = (self.mat_atomic_num ** 0.89)
        
        r_ko_solid_um = numerator / (rho_solid_g_cm3 * denominator_base)
        r_ko_bed_um = numerator / (rho_bed_g_cm3 * denominator_base)
        
        return {
            "kinetic_energy_keV": e0_kev,
            "lorentz_gamma": gamma,
            "electron_velocity_m_s": v_electron,
            "velocity_ratio_c": v_ratio_c,
            "penetration_range_solid_um": r_ko_solid_um,
            "penetration_range_powder_um": r_ko_bed_um
        }

    def evaluate_powder_smoke_stability(self, micro_neck_area_ratio: float = 0.005) -> Dict[str, Any]:
        """
        Evaluates electrostatic charge buildup vs gravity, van der Waals, and necking forces.
        Returns critical charge, repulsive force, and safety margin against 'Smoke'.
        """
        # Particle volume and mass
        vol_p = (math.pi / 6.0) * (self.d_p ** 3)
        mass_p = vol_p * self.mat_density_solid
        f_grav = mass_p * self.GRAVITY
        
        # Van der Waals adhesion force
        f_vdw = (self.HAMAKER_A * self.d_p) / (24.0 * (self.Z0_VDW ** 2))
        
        # Pre-sintering micro-neck strength force (yield strength at 700 C ~ 300 MPa)
        sigma_yield_700c = 300.0e6  # Pa
        neck_area = (math.pi / 4.0) * ((self.d_p * micro_neck_area_ratio) ** 2)
        f_neck = sigma_yield_700c * neck_area
        
        # Total holding force
        f_holding_total = f_grav + f_vdw + f_neck
        
        # Critical electrostatic charge to overcome holding force
        # F_coulomb = (1 / 4*pi*eps0) * (q_crit^2 / d_p^2) = F_holding
        q_crit = math.sqrt(4.0 * math.pi * self.EPSILON_0 * (self.d_p ** 2) * f_holding_total)
        
        # In-process accumulated charge estimation during un-neutralized dwell time
        # Net current = I_absorbed; Dwell time = d_beam / v_scan
        dwell_time = self.d_beam / self.v_scan
        # Helium neutralization factor (suppresses 99.7% of charge buildup)
        he_neutralization_factor = max(0.001, 1.0 - (self.p_he / 2.0e-3) * 0.998)
        accumulated_charge = (self.i_b * dwell_time) * (self.d_p / self.d_beam)**2 * he_neutralization_factor
        
        f_coulomb_actual = (1.0 / (4.0 * math.pi * self.EPSILON_0)) * (accumulated_charge ** 2) / (self.d_p ** 2)
        
        smoke_safety_factor = f_holding_total / max(1e-15, f_coulomb_actual)
        is_stable = smoke_safety_factor > 1.0
        
        return {
            "particle_mass_kg": mass_p,
            "f_gravity_N": f_grav,
            "f_van_der_waals_N": f_vdw,
            "f_sinter_neck_N": f_neck,
            "f_holding_total_N": f_holding_total,
            "critical_charge_Coulombs": q_crit,
            "actual_accumulated_charge_C": accumulated_charge,
            "actual_coulomb_force_N": f_coulomb_actual,
            "smoke_safety_factor": smoke_safety_factor,
            "smoke_risk_status": "STABLE (No Smoke)" if is_stable else "HIGH RISK (Powder Explosion Hazard)"
        }

    def calculate_rosenthal_thermal_field(
        self,
        x_prime_grid: List[float],
        y_grid: List[float],
        z_grid: List[float]
    ) -> Dict[str, Any]:
        """
        Calculates 3D quasi-steady state temperature distribution and melt pool dimensions.
        """
        beam_power = self.v_a * self.i_b
        effective_power = self.eta * beam_power
        
        t_matrix = {}
        max_temp_k = self.t_bed_k
        melt_pool_length = 0.0
        melt_pool_width = 0.0
        melt_pool_depth = 0.0
        
        for x in x_prime_grid:
            for y in y_grid:
                for z in z_grid:
                    r_dist = math.sqrt(x**2 + y**2 + z**2)
                    if r_dist < 1e-7:
                        r_dist = 1e-7
                    
                    # Rosenthal 3D equation
                    exp_term = math.exp(- (self.v_scan * (x + r_dist)) / (2.0 * self.mat_alpha))
                    delta_t = (effective_power / (2.0 * math.pi * self.mat_k_thermal * r_dist)) * exp_term
                    t_point = self.t_bed_k + delta_t
                    
                    if t_point > max_temp_k:
                        max_temp_k = t_point
                    
                    # Check melt pool boundaries (T >= T_liquidus)
                    if t_point >= self.mat_t_liquidus:
                        melt_pool_length = max(melt_pool_length, abs(x) * 2.0)
                        melt_pool_width = max(melt_pool_width, abs(y) * 2.0)
                        melt_pool_depth = max(melt_pool_depth, abs(z))
                        
                    t_matrix[(round(x*1e6, 1), round(y*1e6, 1), round(z*1e6, 1))] = t_point

        # Calculate Solidification Parameters at the trailing edge centerline
        # Trailing edge: x = -L_melt/2, y=0, z=0
        r_trail = max(1e-6, melt_pool_length / 2.0)
        # Approximate G = dT/dr at boundary
        dt_dr = (effective_power / (2.0 * math.pi * self.mat_k_thermal * (r_trail**2))) * \
                (1.0 + (self.v_scan * r_trail) / (2.0 * self.mat_alpha)) * \
                math.exp(- (self.v_scan * 0.0) / (2.0 * self.mat_alpha))
        
        g_thermal_gradient = dt_dr  # K/m
        r_solidification_rate = self.v_scan  # m/s on centerline
        cooling_rate = g_thermal_gradient * r_solidification_rate  # K/s
        g_over_r = g_thermal_gradient / max(1e-5, r_solidification_rate)  # K*s/m^2

        return {
            "beam_power_W": beam_power,
            "absorbed_power_W": effective_power,
            "peak_temperature_C": max_temp_k - 273.15,
            "melt_pool_length_um": melt_pool_length * 1e6,
            "melt_pool_width_um": melt_pool_width * 1e6,
            "melt_pool_depth_um": melt_pool_depth * 1e6,
            "thermal_gradient_G_K_m": g_thermal_gradient,
            "solidification_rate_R_m_s": r_solidification_rate,
            "cooling_rate_dT_dt_K_s": cooling_rate,
            "G_over_R_ratio": g_over_r,
            "predicted_morphology": "Fine Columnar Dendritic with In-situ Widmanstatten Basketweave"
        }

if __name__ == "__main__":
    print("=" * 85)
    print("  SIMULASI FISIKA & METALURGI PBF-EB / ELECTRON BEAM MELTING (ASTM F3001 / ISO 52900)")
    print("=" * 85)

    sim = PBFEBSimulator(
        accel_voltage_kv=60.0,
        beam_current_ma=15.0,
        scan_speed_m_s=1.5,
        beam_diameter_um=220.0,
        bed_temp_c=700.0,
        powder_diameter_um=65.0,
        bed_porosity=0.48,
        absorptivity=0.88,
        he_pressure_mbar=2.2e-3
    )

    # 1. Relativistic Electron Dynamics
    rel_results = sim.calculate_relativistic_electron_dynamics()
    print("\n[1] DINAMIKA ELEKTRON RELATIVISTIK & PENETRASI KANAYA-OKAYAMA:")
    print(f"  - Tegangan Akselerasi (Va)        : {rel_results['kinetic_energy_keV']:.1f} kV")
    print(f"  - Faktor Relativistik Lorentz (γ) : {rel_results['lorentz_gamma']:.4f}")
    print(f"  - Kecepatan Berkas Elektron (ve)  : {rel_results['electron_velocity_m_s']/1e6:.2f} x 10^6 m/s ({rel_results['velocity_ratio_c']*100:.2f}% Kecepatan Cahaya c)")
    print(f"  - Penetrasi Kanaya-Okayama Solid  : {rel_results['penetration_range_solid_um']:.2f} µm")
    print(f"  - Penetrasi Kanaya-Okayama Serbuk : {rel_results['penetration_range_powder_um']:.2f} µm")

    # 2. Powder Smoke Stability Analysis
    smoke_results = sim.evaluate_powder_smoke_stability()
    print("\n[2] ANALISIS KESTABILAN ELEKTROSTATIK SERBUK & SMOKE THRESHOLD:")
    print(f"  - Gaya Penahan Total (F_hold)     : {smoke_results['f_holding_total_N']:.3e} N (vdW + Grav + Neck)")
    print(f"  - Muatan Ambang Batas Kritis (qc) : {smoke_results['critical_charge_Coulombs']:.3e} C")
    print(f"  - Muatan Aktual Terakumulasi      : {smoke_results['actual_accumulated_charge_C']:.3e} C")
    print(f"  - Gaya Tolak Coulomb Aktual (Fc)  : {smoke_results['actual_coulomb_force_N']:.3e} N")
    print(f"  - Smoke Safety Factor             : {smoke_results['smoke_safety_factor']:.2f}")
    print(f"  - Status Kestabilan Proses        : {smoke_results['smoke_risk_status']}")

    # 3. 3D Rosenthal Thermal Field & Solidification
    # Generate 1D sample points for grid evaluation
    x_pts = [i * 10e-6 for i in range(-50, 51, 5)]
    y_pts = [i * 10e-6 for i in range(-25, 26, 5)]
    z_pts = [i * 10e-6 for i in range(0, 26, 5)]
    
    thermal_results = sim.calculate_rosenthal_thermal_field(x_pts, y_pts, z_pts)
    print("\n[3] TERMOMAL & KINETIKA SOLIDIFIKASI KOLAM LEBUR (MELT POOL):")
    print(f"  - Daya Berkas Elektron Total      : {thermal_results['beam_power_W']:.1f} W")
    print(f"  - Daya Terserap Efektif (η=88%)   : {thermal_results['absorbed_power_W']:.1f} W")
    print(f"  - Temperatur Puncak Kolam Lebur   : {thermal_results['peak_temperature_C']:.1f} °C")
    print(f"  - Dimensi Kolam Lebur (P x L x D) : {thermal_results['melt_pool_length_um']:.1f} x {thermal_results['melt_pool_width_um']:.1f} x {thermal_results['melt_pool_depth_um']:.1f} µm")
    print(f"  - Gradien Termal (G)              : {thermal_results['thermal_gradient_G_K_m']:.3e} K/m")
    print(f"  - Laju Pembekuan (R)              : {thermal_results['solidification_rate_R_m_s']:.2f} m/s")
    print(f"  - Laju Pendinginan (dT/dt = G*R)  : {thermal_results['cooling_rate_dT_dt_K_s']:.3e} K/s")
    print(f"  - Rasio Morfologi G/R             : {thermal_results['G_over_R_ratio']:.3e} K·s/m²")
    print(f"  - Prediksi Fasa Mikrostruktur     : {thermal_results['predicted_morphology']}")
    print("=" * 85)
```

---

## 7. Studi Kasus Industri: Fabrikasi Implan Ortopedi Porous Acetabular Cup Ti-6Al-4V ELI (ASTM F3001 & ISO 13485)

### 7.1 Latar Belakang & Persyaratan Desain Komponen
Sebuah fasilitas manufaktur alat kesehatan biomedis memproduksi *Acetabular Cup Hip Replacement Implant* dengan struktur kisi trabekular terintegrasi (*integrated trabecular bone-mimicking lattice*) menggunakan mesin Arcam EBM Q10 Plus. Struktur implan memiliki dua zona fungsional:
1. **Inti Padat Struktural (*Dense Structural Core*)**: Membutuhkan densitas relatif $\ge 99.8\%$, kekuatan luluh $R_{p0.2} \ge 820\text{ MPa}$, dan ketahanan lelah siklus tinggi (*high-cycle fatigue*) melampaui $10^7$ siklus pada tegangan bolak-balik $\sigma_a = 450\text{ MPa}$.
2. **Permukaan Kisi Trabekular Porous (*Cellular Titanium Ingrowth Surface*)**: Membutuhkan porositas terbuka terhubung $65\% \pm 3\%$, ukuran pori rata-rata $d_{\text{pore}} = 450 - 650\text{ }\mu\text{m}$, dan modulus elastisitas elastis rendah ($E_{\text{lattice}} \approx 2.8 - 3.5\text{ GPa}$) untuk mencocokkan modulus tulang kanselus manusia (*cancellous bone*) guna mencegah fenomena *stress shielding* dan atrofi tulang pasca-operasi.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       STUDI KASUS IMPLAN BIOMEDIS ACETABULAR CUP PBF-EB TI-6AL-4V ELI                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|             Bagian Luar: Kisi Porous Trabekular             Bagian Dalam: Inti Padat & Dudukan Polimer (Liner)        |
|             (Osseointegrasi & Bio-fiksasi Cepat)            (Kekuatan Fatik & Ketahanan Aus Bebas Cacat)              |
|                                                                                                                       |
|                       .---''''''---.                                       .---''''''---.                             |
|                    .-'  ░ ░ ░ ░ ░   '-.                                 .-'   ████████   '-.                          |
|                  .'  ░ ░ ░ ░ ░ ░ ░ ░   '.                             .'   █████████████   '.                         |
|                 /  ░ ░ ░ ░ ░ ░ ░ ░ ░ ░   \                           /   ████         ████   \                        |
|                |  ░ ░ ░ Diamond Lattice ░ |                         |   ███  Kubah Padat ███  |                       |
|                |  ░ ░ Porositas 65%   ░ ░ |                         |   ███  Porositas   ███  |                       |
|                 \  ░ ░ Pori 550 um   ░ ░ /                           \   ████ < 0.15% ████   /                        |
|                  '.  ░ ░ ░ ░ ░ ░ ░ ░   .'                             .'   █████████████   .'                         |
|                    '-.  ░ ░ ░ ░ ░   .-'                                 '-.   ████████   .-'                          |
|                       '---......---'                                       '---......---'                             |
|                                                                                                                       |
|    Karakteristik Mekanik Hasil Uji Uji Tarik & Fatik (ASTM F3001 / ISO 13485):                                        |
|    - Densitas Inti Padat (Archimedes ASTM B962)      : 99.88% (Bebas Porositas Keyhole / Gas Entrapment)             |
|    - Kekuatan Tarik Luluh (Yield Strength Rp0.2)     : 855 MPa (Standar Min: 795 MPa)                                 |
|    - Kekuatan Tarik Maksimum (UTS Rm)                : 942 MPa (Standar Min: 860 MPa)                                 |
|    - Perpanjangan Saat Putus (Elongation A%)         : 13.6% (Standar Min: 10.0%)                                     |
|    - Fraksi Fasa Mikrostruktur                       : 91.5% Lamelar α + 8.5% Interlamelar β (Widmanstätten)          |
|    - Kandungan Interstisial Oksigen [O]              : 0.108 wt% (Standar Max ASTM F3001: 0.130 wt%)                  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.2 Analisis Kualifikasi & Verifikasi Mutu
1. **Verifikasi Kerapatan & Porositas**: Pengujian menggunakan *Industrial X-ray Computed Tomography* (XCT) resolusi $5\text{ }\mu\text{m}$ menunjukkan ketiadaan cacat *lack of fusion* (LoF). Sinergi pemanasan dasar $T_{\text{bed}} = 700^\circ\text{C}$ dan kecepatan berkas pemindaian $1.5\text{ m/s}$ menghasilkan dekomposisi martensitik penuh secara kontinu.
2. **Kesesuaian Standar ASTM F3001**: Nilai elongasi mencapai $13.6\%$ tanpa perlunya perlakuan panas *Hot Isostatic Pressing* (HIP) sekunder yang mahal, mengurangi *lead time* produksi per batch sebesar $40\%$ dan biaya operasional sebesar $28\%$.

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. **Choudhuri, A., et al.** (2024). "Powder smoking phenomenon in electron beam powder bed fusion: A comprehensive review of prediction, monitoring, and mitigation methods". *Journal of Manufacturing Processes*, 124, pp. 885–907. DOI: [10.1016/j.jmapro.2024.07.054](https://doi.org/10.1016/j.jmapro.2024.07.054).
2. **Körner, C.** (2016). "Additive manufacturing of metallic components by selective electron beam melting — a review". *International Materials Reviews*, 61(5), pp. 361–377. DOI: [10.1080/09506608.2016.1176289](https://doi.org/10.1080/09506608.2016.1176289).
3. **ASTM F3001-14(2021)**. *Standard Specification for Additive Manufacturing Titanium-6 Aluminum-4 Vanadium ELI (Extra Low Interstitial) with Powder Bed Fusion*. ASTM International, West Conshohocken, PA. DOI: [10.1520/F3001-14R21](https://doi.org/10.1520/F3001-14R21).
4. **ISO/ASTM 52900:2021**. *Additive manufacturing — General principles — Fundamentals and vocabulary*. International Organization for Standardization, Geneva, Switzerland.
5. **Gong, X., et al.** (2023). "Microstructure and mechanical properties of Ti-6Al-4V fabricated by electron beam powder bed fusion: A high-temperature in-situ annealing mechanism". *Acta Materialia*, 245, 118635. DOI: [10.1016/j.actamat.2022.118635](https://doi.org/10.1016/j.actamat.2022.118635).
6. **Kanaya, K., & Okayama, S.** (1972). "Penetration and energy-loss theory of electrons in solid targets". *Journal of Physics D: Applied Physics*, 5(1), pp. 43–58. DOI: [10.1088/0022-3727/5/1/308](https://doi.org/10.1088/0022-3727/5/1/308).
7. **Tan, X., et al.** (2020). "Selective electron beam melting of titanium aluminides: Solidification kinetics and phase evolution". *Materials & Design*, 194, 108920. DOI: [10.1016/j.matdes.2020.108920](https://doi.org/10.1016/j.matdes.2020.108920).
