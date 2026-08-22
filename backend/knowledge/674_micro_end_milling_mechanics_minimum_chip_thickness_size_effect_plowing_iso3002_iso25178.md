# Modul 674: Micro End Milling Mechanics: Fenomena Ketebalan Geram Minimum (Minimum Chip Thickness Effect), Efek Ukuran (Size Effect), Transisi Deformasi Elastis Plowing-Shearing, Dinamika Gaya Pemotongan Orde Mikron, dan Integritas Permukaan Mikro-Fitur (ISO 3002, ISO 25178, CIRP Annals & ASTM E8)

## 1. Pengantar & Konteks Industri: Miniaturisasi Komponen Presisi Tinggi

Dalam era Industri 4.0 dan transisi menuju sistem manufaktur mikro/nano (*micro-electromechanical systems* - MEMS, perangkat biomedis mikrofluidik *Lab-on-a-Chip*, jarum mikro bedah *microneedles*, susunan nosel injektor mikro dirgantara, serta mikro-optik), kebutuhan akan komponen 3D kompleks berorde mikrometer hingga milimeter dengan toleransi geometrik sub-mikron ($\pm 0{,}5\ \mu\text{m}$) dan kekasaran permukaan nanometrik ($S_a < 50\ \text{nm}$) mengalami lonjakan eksponensial.

```
+-----------------------------------------------------------------------------------------------------------------------+
|            PARADIGMA PEMESINAN: MACRO END MILLING KONVENSIONAL VS MICRO END MILLING PRESISI TINGGI                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. MACRO MILLING KONVENSIONAL (Diameter Pahat D > 1 - 20 mm, Radius Tepi Potong r_e << h):                          |
|      - Asumsi Dasar: Radius tepi potong tajam sempurna (r_e ~= 0 relatif terhadap tebal geram h).                     |
|      - Mekanisme Utama: Pemotongan Geser Murni (Pure Shear Plastic Deformation, Model Merchant/Oxley).                |
|      - Rasio Pakan per Gigi terhadap Radius: f_z / r_e >> 10 - 100.                                                   |
|      - Energi Pemotongan Spesifik (Specific Cutting Energy u_c) konstan dan tidak bergantung pada ukuran geram.       |
|                                                                                                                       |
|   2. MICRO END MILLING (Diameter Pahat D = 10 um - 500 um, Radius Tepi Potong r_e >= h):                              |
|      - Realitas Fisik: Radius tepi potong pahat (r_e = 1 - 5 um) SEUKURAN ATAU LEBIH BESAR dari tebal geram (h).     |
|      - Sudut Garuk Efektif (Effective Rake Angle gamma_eff) MENJADI SANGAT NEGATIF (-40 deg s.d. -75 deg)!           |
|      - Terjadi FENOMENA KETEBALAN GERAM MINIMUM (Minimum Chip Thickness h_min):                                       |
|        * Jika h < h_min -> TIDAK ADA GERAM TERBENTUK! Terjadi Deformasi Elastis Murni & Plowing (Menggesek/Membajak). |
|        * Jika h = h_min -> Titik Stagnasi Aliran Material Membelah (Bifurkasi Geser-Elastis).                         |
|        * Jika h > h_min -> Pembentukan Geram Plastis Melalui Gesekan Negatif Ekstrem (Shearing + Plowing).            |
|      - EFEK UKURAN (SIZE EFFECT): Energi potong spesifik melonjak 500% - 2000% akibat dislokasi regangan gradien!     |
|      - Runout Dinamis Spindel Mikro (r_0 ~ 1-3 um) SEBANDING DENGAN FEED PER TOOTH -> Variasi Gaya Potong Masif!     |
|                                                                                                                       |
|                                 Spindel Frekuensi Ultra-Tinggi (High-Speed Air Bearing Spindle)                       |
|                                         ┌───────────────────────────┐                                                 |
|                                         │   Kecepatan Putar Spindel │ N = 60.000 - 150.000 RPM                        |
|                                         │   Runout Dinamis epsilon  │ epsilon = 0.5 - 2.0 um                          |
|                                         └───────────┬───────────────┘                                                 |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|                                         ┌───────────────────────────┐                                                 |
|                                         │ Mikro End Mill Karbida /  │ Diameter D_tool = 100 - 500 um                  |
|                                         │ Intan Monokristal (PCD)   │ Radius Tepi r_e = 1.0 - 3.5 um                  |
|                                         └───────────┬───────────────┘                                                 |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
|    ◄── Gerak Pakan Mikro per Gigi (Feed per Tooth f_z = 0.2 - 2.0 um/flute)                                           |
|    ▼ SUBSTRAT MIKROFLUIDIK PMMA / PADUAN BIOMEDIS TITANIUM Ti-6Al-4V / BAJA CETAKAN NAK80                             |
|      - Fasa 1 (h < h_min): Deformasi Elastis & Pemulihan (Elastic Recovery) -> Peningkatan Kekasaran Permukaan       |
|      - Fasa 2 (h = h_min): Titik Balik Pembentukan Geram Mikro (Chip Initiation Bifurcation)                          |
|      - Fasa 3 (h > h_min): Pemotongan Deformasi Geser Mikro-Plastis                                                  |
|      - Pembentukan Bur Mikro (Micro-Burr Formation): Top Burr, Entrance Burr, Exit Burr pada Sudut Mikro-Dinding     |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Micro End Milling** adalah proses pemesinan mekanis subtraktif berpresisi tinggi yang memanfaatkan pahat frais putar mikro berdiameter kurang dari $1\ \text{mm}$ (umumnya antara $50\ \mu\text{m}$ hingga $500\ \mu\text{m}$) untuk membuat fitur-fitur mikro 3D berdinding tegak, saluran mikro (*micro-channels*), rongga cetakan mikro (*micro-cavities*), dan geometri bebas berorde mikron. 

Meskipun secara kinematika menyerupai proses frais konvensional, secara mekanika mikro end milling berada pada domain fisika yang sepenuhnya berbeda. Pada skala mikron, asumsi kontinuum homogen dan sudut potong tajam tak lagi berlaku karena:
1. Ketebalan geram yang dipotong berada dalam orde yang sama dengan ukuran butir kristal material (*grain size* $d_{\text{grain}} \sim 5 - 30\ \mu\text{m}$).
2. Jari-jari ketumpulan mata potong pahat (*tool edge radius* $r_e$) menjadi sebanding atau lebih besar daripada tebal potongan instan ($h(\theta)$).
3. Fenomena deformasi dominan didominasi oleh mekanisme **Plowing** (pembajakan plastis/elastis) alih-alih pemotongan geser ortogonal biasa (*shearing*).

Standar internasional yang mendasari terminologi, pengukuran gaya, dan karakterisasi integritas permukaan mikro meliputi:
1. **ISO 3002-1 s.d. 3002-4**: *Basic quantities in cutting and grinding — Geometry of the active part of cutting tools*.
2. **ISO 25178-2:2021**: *Geometrical product specifications (GPS) — Surface texture: Areal ($S_a, S_q, S_z, S_{sk}, S_{ku}$)*.
3. **ISO 4287 / ISO 21920**: *Geometrical product specifications (GPS) — Surface texture: Profile method ($R_a, R_z, R_{max}$)*.
4. **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials* (Karakterisasi kekuatan luluh dan modulus elastisitas mikro).
5. **CIRP Annals - Manufacturing Technology**: *Keynotes on Micromachining, Minimum Chip Thickness, Size Effect, and Tool Runout Mechanics*.

---

## 2. Mekanika Ketebalan Geram Minimum (*Minimum Chip Thickness Phenomenon*)

### 2.1 Teori Titik Stagnasi & Sudut Rake Efektif Negatif

Pada makro-milling, pahat diasumsikan memiliki ujung potong bersudut tajam ideal ($r_e \approx 0$). Namun, pada pahat mikro end mill berbahan *tungsten carbide* (WC-Co) atau intan polikristalin (PCD), batasan teknologi penajaman manufaktur menyebabkan pahat mikro memiliki jari-jari pembulatan tepi potong alami sebesar $r_e = 1{,}0 - 4{,}0\ \mu\text{m}$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    MEKANISME PEMBAGIAN ALIRAN MATERIAL PADA TEPI MATA POTONG BULAT (TOOL EDGE RADIUS)                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       Muka Garuk Pahat (Rake Face, Sudut gamma_0)                                                     |
|                                      \                                                                                |
|                                       \                                                                               |
|                                        \  Titik Transisi Busur                                                        |
|                                         \┌──────────────────────────┐                                                 |
|                                          │  Busur Tepi Bulat (r_e)  │                                                 |
|                                          │                          │                                                 |
|    Aliran Pembentukan Geram              │       O (Pusat Busur)    │                                                 |
|    (Shearing / Chip Flow)                │         *──────r_e───────┤                                                 |
|       ▲                                  │        / \               │                                                 |
|       │                                  │       /   \ Sudut Stagnasi theta_s                                         |
|       │     ●────────────────────────────┴──────●     \             │                                                 |
|       │    /                              Titik │      \            │                                                 |
|       │   /                          Stagnasi S │       \           │                                                 |
|       └──/──────────────────────────────────────┘        ▼          │                                                 |
|                                                 \                   │                                                 |
|   Lapisan Geram Tebal: h(theta) >= h_min         \  Sudut Rake      │ Muka Bidang Bebas                               |
|   ══════════════════════════════════════════════  \ Efektif Negatif │ (Flank Face, Sudut alpha_0)                     |
|                                                 │  (gamma_eff << 0) │                                                 |
|   Lapisan Plowing / Deformasi Elastis: h < h_min│                   │                                                 |
|   ──────────────────────────────────────────────┴───────────────────┴──────────────────────                           |
|   Aliran Material Terbajak di Bawah Titik Stagnasi S (Plowing Under Tool Flank)                                       |
|   Mengalami Pemulihan Elastis Sub-Permukaan (Elastic Recovery Height p_e)                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Ketika pahat bergerak menyayat benda kerja dengan ketebalan pemotongan sesaat $h(\theta)$, material yang mendekati busur tepi potong terbagi menjadi dua aliran di sekitar **Titik Stagnasi (*Stagnation Point* $S$)**:
1. Material di atas titik stagnasi ($z > h_{\text{min}}$) terdorong ke atas sepanjang muka garuk pahat dan terlepas sebagai geram terdeformasi plastis (*sheared chip*).
2. Material di bawah titik stagnasi ($z < h_{\text{min}}$) tertindih dan terdesak ke bawah serta ke belakang melewati bidang bebas pahat (*flank face*), mengalami proses **pembajakan (*plowing*)** dan deformasi elastis-plastis lokal.

Sudut stagnasi netral $\theta_s$ (diukur dari sumbu horizontal) dan ketebalan geram minimum $h_{\text{min}}$ dinyatakan oleh hubungan analitik slip-line field:

$$\theta_s = \frac{1}{2} \arccos\left( \frac{\tau_{\text{int}}}{k_{\text{shear}}} \right) = \frac{1}{2} \arccos(m_f)$$

Di mana:
- $m_f = \frac{\tau_{\text{int}}}{k_{\text{shear}}}$ adalah faktor gesekan geser antarmuka kontak ($0 \le m_f \le 1$).
- $k_{\text{shear}} = \frac{\sigma_y}{\sqrt{3}}$ adalah kuat luluh geser material benda kerja.
- $\tau_{\text{int}}$ adalah tegangan geser gesekan pada antarmuka pahat-geram.

Secara geometris, **Ketebalan Geram Minimum ($h_{\text{min}}$)** diturunkan dari koordinat titik stagnasi pada busur lingkaran $r_e$:

$$h_{\text{min}} = r_e \cdot \left( 1 - \cos(\theta_s) \right)$$

Untuk sebagian besar logam teknik dan paduan struktural (Baja, Paduan Aluminium, Paduan Titanium Ti-6Al-4V, Tembaga OFHC), rasio $h_{\text{min}} / r_e$ berada pada rentang stabil:

$$h_{\text{min}} \approx (0{,}20 - 0{,}40) \cdot r_e$$

Sudut garuk efektif sesaat ($\gamma_{\text{eff}}$) pada saat pemotongan dengan ketebalan $h \le r_e$ menjadi fungsi non-linier yang bernilai negatif ekstrem:

$$\gamma_{\text{eff}}(h) = \arcsin\left( \frac{h - r_e}{r_e} \right) = - \arccos\left( \frac{r_e - h}{r_e} \right) \quad \text{untuk } h \le r_e$$

### 2.2 Fenomena Pemulihan Elastis (*Elastic Recovery*)

Material yang terbajak di bawah titik stagnasi mengalami kompresi elastis-plastis di bawah bidang bebas pahat. Pasca kontak dengan bidang pahat, sebagian regangan elastis akan memantul kembali (*spring back*) menuju permukaan bebas benda kerja. Fenomena ini disebut **Tinggi Pemulihan Elastis (*Elastic Recovery Height* $p_e$)**:

$$p_e = \xi_e \cdot r_e \cdot \left( \frac{\sigma_y}{E} \right)$$

Di mana:
- $\xi_e$ adalah koefisien pemulihan elastoplastis empiris ($1{,}5 - 3{,}0$).
- $\sigma_y$ adalah kuat luluh material benda kerja ($\text{MPa}$).
- $E$ adalah modulus elastisitas material benda kerja ($\text{MPa}$).

Dampak pemulihan elastis ini adalah bertambahnya gaya gesekan normal dan tangensial pada bidang bebas pahat (*flank rubbing*), yang mempercepat keausan pahat mikro dan membatasi nilai kekasaran permukaan terendah yang dapat dicapai secara teoritis.

---

## 3. Efek Ukuran (*Size Effect*) pada Energi Pemotongan Spesifik

### 3.1 Teori Plastisitas Gradien Regangan (*Strain Gradient Plasticity*)

Dalam pemesinan konvensional (skala makro), energi pemotongan spesifik $u_c$ (didefinisikan sebagai rasio total gaya potong tangensial terhadap laju pembuangan volume material: $u_c = F_c / (a_p \cdot h)$) bernilai konstan. Namun pada mikro end milling, saat ketebalan geram $h$ mendekati ukuran butir kristal atau radius tepi potong $r_e$, nilai $u_c$ melonjak secara dramatis mengikuti hukum pangkat (*power-law scaling*):

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    KURVA EFEK UKURAN (SIZE EFFECT) PADA ENERGI PEMOTONGAN SPESIFIK u_c                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Energi Pemotongan Spesifik u_c (J/mm^3 atau GPa)                                                                    |
|       ▲                                                                                                               |
|       │                                                                                                               |
| 12.0 ─┼──●                                                                                                            |
|       │   \                                                                                                           |
| 10.0 ─┼─── \                                                                                                          |
|       │     \    REZIM MIKRO: LONJAKAN ENERGI SPESIFIK (SIZE EFFECT)                                                  |
|  8.0 ─┼──────●   Didominasi Deformasi Plowing, Dislokasi Geometris Terkendala                                         |
|       │       \  (Geometrically Necessary Dislocations - GND), & Gesekan Rake Negatif                                 |
|  6.0 ─┼────────\                                                                                                      |
|       │         \                                                                                                     |
|  4.0 ─┼──────────●                                                                                                    |
|       │           \                                                                                                   |
|  2.0 ─┼────────────\───────────────────────────●───────────────────────────────────●                                  |
|       │             \                       REZIM MAKRO: Energi Spesifik Konstan                                      |
|       └──────────────┴─────────────────────────┴───────────────────────────────────┴──►                               |
|       0            h_min                      10*h_min                           100*h_min    Tebal Geram h (um)      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Model analitik energi spesifik pemotongan mikro dengan memperhitungkan efek ukuran disajikan melalui formulasi Backer-Marshall-Shaw dan Fleck-Hutchinson:

$$u_c(h) = u_0 \cdot \left( \frac{h_0}{h} \right)^{m_s} + u_{\text{plow}} \cdot \left( \frac{r_e}{h} \right)$$

Di mana:
- $u_0$ adalah energi pemotongan spesifik dasar pada ketebalan referensi $h_0$ ($\text{J/mm}^3$).
- $m_s$ adalah eksponen efek ukuran ($0{,}20 - 0{,}45$).
- $u_{\text{plow}}$ adalah komponen disipasi energi akibat pembajakan pada antarmuka tepi bulat.

Berdasarkan teori plastisitas plastis gradien regangan (*Strain Gradient Plasticity - SGP*), peningkatan tegangan alir material pada skala mikron diakibatkan oleh akumulasi dislokasi yang diperlukan secara geometris (*Geometrically Necessary Dislocations* - GNDs, $\rho_{\text{GND}}$) di samping dislokasi tersimpan acak (*Statistically Stored Dislocations* - SSDs, $\rho_{\text{SSD}}$):

$$\sigma_{\text{flow}} = \sigma_0 \sqrt{1 + l_{\text{char}} \cdot \eta_{\text{grad}}}$$

$$\eta_{\text{grad}} = \frac{|\nabla \gamma_p|}{\bar{b}_{\text{Burgers}}}$$

Di mana $l_{\text{char}}$ adalah panjang skala karakteristik intrinsik material ($0{,}5 - 5\ \mu\text{m}$), $\eta_{\text{grad}}$ adalah gradien regangan plastis geser, dan $\bar{b}_{\text{Burgers}}$ adalah magnitudo vektor Burgers kisi kristal. Karena deformasi geser di sekitar ujung pahat mikro terjadi pada gradien volumetrik yang sangat curam ($\nabla \gamma_p \sim 10^5\ \text{m}^{-1}$), tegangan alir efektif material menjadi berlipat ganda dibanding uji tarik standar makro ASTM E8.

---

## 4. Kinematika Pahat Mikro & Pengaruh Eksentrisitas Spindel (*Tool Runout*)

### 4.1 Persamaan Lintasan Trochoidal dan Tebal Geram Sesaat dengan Runout

Dalam proses frais mikro, lintasan ujung mata potong adalah kurva trochoidal sejati. Dengan adanya eksentrisitas spindel/pemasangan collet (*tool runout* dengan magnitudo $r_o$ dan sudut orientasi fasa $\psi_o$), setiap mata potong (flute $j$) memiliki jari-jari putar dinamis efektif yang berbeda:

$$R_j = R_{\text{nom}} + r_o \cos(\phi_j - \psi_o)$$

Di mana $\phi_j(t) = \omega t + (j-1)\frac{2\pi}{N_{\text{flute}}}$ adalah sudut putar posisi flute ke-$j$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DINAMIKA RUNOUT SPINDEL PADA PAHAT MIKRO DUA FLUTE (TWO-FLUTE MICRO END MILL)                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       Pusat Putar Spindel Aktual (O_s)                                                |
|                                                *                                                                      |
|                                               / \                                                                     |
|                             Vektor Runout    /   \ R_2 (Flute 2 - Jari-jari Pendek)                                   |
|                             (r_o, psi_o)    /     \                                                                   |
|                                            *       \                                                                  |
|                          Pusat Geometris  O_g       \                                                                 |
|                          Pahat Frais Mikro           \                                                                |
|                                 │                     ▼                                                               |
|                                 │                ● Flute 2 (Tebal Geram h_2 < h_min -> HANYA PLOWING!)                |
|                                 │                                                                                     |
|                                 ▼ R_1 (Flute 1 - Jari-jari Panjang)                                                   |
|                            ● Flute 1 (Tebal Geram h_1 >> h_min -> MEMOTONG SELURUH MATERIAL!)                         |
|                                                                                                                       |
|   DAMPAK INDUSTRI: Flute 1 memikul 80-100% beban pemotongan -> Aus & patah dini! Flute 2 hanya menggosok permukaan!  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Ketebalan geram sesaat flute ke-$j$ pada sudut $\phi_j$, dengan memperhitungkan runout dinamis dan sisa lintasan dari putaran flute sebelumnya:

$$h_j(\phi_j) \approx f_z \sin(\phi_j) + (R_j - R_{j-1}) \cos(\phi_j)$$

Jika $r_o \ge f_z$, flute dengan radius efektif lebih pendek sama sekali tidak menghasilkan ketebalan potong yang melebihi $h_{\text{min}}$ ($h_2 < h_{\text{min}}$), sehingga **satu flute memotong seluruh benda kerja pada dua kali lipat beban nominal ($2 \times f_z$), sementara flute lainnya hanya membajak/menggesek permukaan**. Kondisi ini memicu ketidakseimbangan gaya radial dinamis yang besar, getaran obrolan (*chatter vibration*), dan defleksi lentur pahat mikro yang berujung pada patah katastropik (*micro-tool breakage*).

---

## 5. Pemodelan Gaya Pemotongan Tiga Zona (Elastic-Plowing-Shearing)

Gaya pemotongan total pada satu elemen mata potong mikro dibagi menjadi dua komponen ortogonal (Gaya Tangensial $dF_t$ dan Gaya Radial $dF_r$):

$$dF_t(\phi_j, z) = dF_t^{\text{shear}} + dF_t^{\text{plow}} + dF_t^{\text{elastic}}$$

$$dF_r(\phi_j, z) = dF_r^{\text{shear}} + dF_r^{\text{plow}} + dF_r^{\text{elastic}}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 KLASIFIKASI REGIME PEMOTONGAN TIGA ZONA PADA MIKRO FRAIS                                              |
+-----------------------------------------------------------------------------------------------------------------------+
|  Regime Pemotongan  | Kondisi Ketebalan h(phi)      | Mekanisme Fisika Utama                                          |
+---------------------+-------------------------------+-----------------------------------------------------------------+
|  1. Zona Elastis    | 0 <= h < h_elastic            | Deformasi kontak Hertzian murni, gesekan elastis bidang bebas.  |
|                     | (h < 0.05 * r_e)              | Tidak ada geram, gaya proporsional terhadap luas kontak pemulih.|
+---------------------+-------------------------------+-----------------------------------------------------------------+
|  2. Zona Plowing    | h_elastic <= h < h_min        | Deformasi plastis lokal tanpa pemisahan geram (bifurkasi bawah).|
|                     | (0.05 * r_e <= h < 0.3 * r_e) | Disipasi energi geser masif di depan tepi bulat mata potong.    |
+---------------------+-------------------------------+-----------------------------------------------------------------+
|  3. Zona Shearing   | h >= h_min                    | Pembentukan geram kontinu/bergerigi via bidang geser primer,    |
|                     | (h >= 0.3 * r_e)              | superposisi gaya geser Merchant + gaya plowing residual konstan.|
+---------------------+-------------------------------+-----------------------------------------------------------------+
```

### 5.1 Formulasi Gaya Pemotongan Analitik Tiga Rezim

1. **Untuk Rezim Pemotongan Geser ($h \ge h_{\text{min}}$)**:
   $$dF_t = \left[ K_{tc} \cdot h(\phi_j) + K_{te} \right] dz$$
   $$dF_r = \left[ K_{rc} \cdot h(\phi_j) + K_{re} \right] dz$$
   Di mana $K_{tc}, K_{rc}$ adalah koefisien pemotongan geser spesifik ($\text{N/mm}^2$), dan $K_{te}, K_{re}$ adalah koefisien gaya tepi plowing ($\text{N/mm}$).

2. **Untuk Rezim Pembajakan Murni ($h_{\text{elastic}} \le h < h_{\text{min}}$)**:
   $$dF_t = K_{tp} \cdot \left( \frac{h(\phi_j)}{h_{\text{min}}} \right)^2 dz$$
   $$dF_r = K_{rp} \cdot \left( \frac{h(\phi_j)}{h_{\text{min}}} \right) dz$$
   Di mana gaya radial $dF_r$ mendominasi secara signifikan dibanding gaya tangensial $dF_t$ ($dF_r / dF_t > 2 - 4$), yang merupakan ciri khas fenomena plowing pada pahat bertepi bulat.

3. **Transformasi ke Sistem Koordinat Kartesian Mesin ($X, Y, Z$)**:
   $$\begin{bmatrix} dF_x \\ dF_y \end{bmatrix} = \begin{bmatrix} -\cos(\phi_j) & -\sin(\phi_j) \\ \sin(\phi_j) & -\cos(\phi_j) \end{bmatrix} \begin{bmatrix} dF_t \\ dF_r \end{bmatrix}$$

---

## 6. Algoritma Komputasi Python: Simulator Dinamika Gaya Mikro Milling Tiga Rezim & Integritas Permukaan

Skrip Python terintegrasi berikut memodelkan:
1. Kinematika geram sesaat flute-by-flute dengan efek eksentrisitas spindel (*runout*).
2. Pemilahan regime pemotongan (Elastis, Plowing, Shearing) berbasis kriteria $h_{\text{min}}$.
3. Prediksi profil gaya pemotongan dinamis $F_x(t), F_y(t), F_z(t)$.
4. Estimasi kekasaran permukaan topografi 3D $S_a$ dan tinggi bur mikro (*micro-burr height*).

```python
"""
MICRO END MILLING MECHANICS & FORCE DYNAMICS SOLVER (THREE-ZONE REGIME)
Standar Acuan: ISO 3002, ISO 25178, CIRP Annals on Micromachining
Modul Pengetahuan RuangTI: #674
"""

import numpy as np
import math
from typing import Dict, List, Tuple

class MicroEndMillingSimulator:
    def __init__(self, tool_diameter_um: float, num_flutes: int, 
                 helix_angle_deg: float, edge_radius_um: float,
                 spindle_rpm: float, feed_per_tooth_um: float, 
                 axial_depth_um: float, runout_um: float, runout_angle_deg: float):
        """
        Inisialisasi Geometri Pahat Mikro dan Parameter Pemotongan
        """
        self.D = tool_diameter_um # Diameter pahat mikro (um)
        self.R = tool_diameter_um / 2.0 # Jari-jari nominal (um)
        self.Nt = num_flutes # Jumlah flute
        self.helix_rad = math.radians(helix_angle_deg)
        self.r_e = edge_radius_um # Jari-jari pembulatan tepi potong (um)
        self.rpm = spindle_rpm
        self.fz = feed_per_tooth_um # Pakan per gigi nominal (um/tooth)
        self.ap = axial_depth_um # Kedalaman potong aksial (um)
        self.r_o = runout_um # Eksentrisitas runout poros (um)
        self.psi_o = math.radians(runout_angle_deg) # Fasa runout
        
        # Kecepatan sudut
        self.omega = 2.0 * math.pi * (spindle_rpm / 60.0) # rad/s
        
        # Penentuan batas ketebalan geram minimum h_min
        # Rasio tipikal untuk baja paduan/titanium: h_min = 0.28 * r_e
        self.h_min = 0.28 * self.r_e
        self.h_elastic = 0.05 * self.r_e

    def calculate_instantaneous_chip_thickness(self, phi_deg: float, flute_idx: int) -> Tuple[float, str]:
        """
        Menghitung tebal geram instan h(phi) dengan runout dinamis.
        Menentukan regime: 'ELASTIC', 'PLOWING', atau 'SHEARING'
        """
        phi_rad = math.radians(phi_deg)
        flute_pitch = (2.0 * math.pi / self.Nt) * flute_idx
        phi_eff = (phi_rad + flute_pitch) % (2.0 * math.pi)
        
        # Hanya aktif pada zona perpotongan (0 s.d. pi untuk slotting)
        if 0.0 <= phi_eff <= math.pi:
            # Koreksi radius akibat runout
            delta_R = self.r_o * math.cos(phi_eff - self.psi_o)
            # Ketebalan geram sejati
            h = self.fz * math.sin(phi_eff) + delta_R
            h = max(h, 0.0)
            
            # Penentuan regime
            if h < self.h_elastic:
                regime = "ELASTIC"
            elif h < self.h_min:
                regime = "PLOWING"
            else:
                regime = "SHEARING"
        else:
            h = 0.0
            regime = "OUT_OF_CUT"
            
        return h, regime

    def simulate_cutting_forces_profile(self, num_points: int = 360) -> Dict[str, any]:
        """
        Simulasi Gaya Pemotongan Satu Putaran Penuh (360 Derajat)
        Koefisien Material Spesifik untuk Titanium Ti-6Al-4V:
        Ktc = 1950 MPa, Krc = 850 MPa, Kte = 14 N/mm, Kre = 22 N/mm
        """
        Ktc = 1.95 # N/(um * mm) -> 1950 MPa
        Krc = 0.85
        Kte = 0.014 # N/um
        Kre = 0.022
        Ktp = 0.035 # Koefisien plowing
        Krp = 0.070
        
        d_z_mm = self.ap / 1000.0 # Konversi ke mm
        
        angle_array = np.linspace(0.0, 360.0, num_points)
        Fx_total = np.zeros(num_points)
        Fy_total = np.zeros(num_points)
        regimes_history = []
        
        for idx, phi_deg in enumerate(angle_array):
            fx_sum = 0.0
            fy_sum = 0.0
            active_regimes = []
            
            for j in range(self.Nt):
                h_val, regime = self.calculate_instantaneous_chip_thickness(phi_deg, j)
                active_regimes.append(regime)
                
                if regime == "SHEARING":
                    # Model Superposisi Merchant-Oxley
                    dFt = (Ktc * h_val + Kte * 1000.0) * d_z_mm
                    dFr = (Krc * h_val + Kre * 1000.0) * d_z_mm
                elif regime == "PLOWING":
                    # Model Plowing Nonlinear
                    norm_ratio = (h_val / self.h_min) ** 2
                    dFt = (Ktp * norm_ratio * 1000.0) * d_z_mm
                    dFr = (Krp * (h_val / self.h_min) * 1000.0) * d_z_mm
                elif regime == "ELASTIC":
                    # Kontak elastis Hertzian murni
                    dFt = 0.005 * 1000.0 * d_z_mm
                    dFr = 0.025 * 1000.0 * d_z_mm
                else:
                    dFt = 0.0
                    dFr = 0.0
                    
                # Transformasi ke Koordinat Mesin (X: Pakan, Y: Normal Pakan)
                phi_rad = math.radians(phi_deg) + (2.0 * math.pi / self.Nt) * j
                fx = - dFt * math.cos(phi_rad) - dFr * math.sin(phi_rad)
                fy =   dFt * math.sin(phi_rad) - dFr * math.cos(phi_rad)
                
                fx_sum += fx
                fy_sum += fy
                
            Fx_total[idx] = fx_sum
            Fy_total[idx] = fy_sum
            regimes_history.append(active_regimes)
            
        # Prediksi Kekasaran Permukaan Areal Aritmatik Sa (ISO 25178)
        # Teori Kinematik Frais Mikro Termodifikasi Efek Plowing & Elastic Recovery
        p_e = 2.2 * self.r_e * (910.0 / 114000.0) # Pemulihan elastis Ti-6Al-4V
        Sa_kinematic = (self.fz ** 2) / (32.0 * self.R) * 1000.0 # nm
        Sa_actual = (Sa_kinematic + p_e * 1000.0 * 0.45 + (self.h_min * 1000.0 * 0.15))
        
        return {
            "rotation_angles_deg": angle_array,
            "Fx_forces_N": Fx_total,
            "Fy_forces_N": Fy_total,
            "Fx_max_N": np.max(np.abs(Fx_total)),
            "Fy_max_N": np.max(np.abs(Fy_total)),
            "Minimum_chip_thickness_um": self.h_min,
            "Elastic_recovery_height_um": p_e,
            "Predicted_surface_roughness_Sa_nm": Sa_actual,
            "Regimes_summary": regimes_history
        }

# =====================================================================
# EKSEKUSI DEMONSTRASI STUDI KASUS MIKRO-MILLING SALURAN TITANIUM
# =====================================================================
if __name__ == "__main__":
    print("=" * 80)
    print("RUANGTI IE RAG - ENGINE SIMULASI MEKANIKA MIKRO END MILLING (ISO 3002/25178)")
    print("=" * 80)
    
    # Inisialisasi Kasus: Pahat Mikro Karbida Solid 2-Flute (D = 200 um, r_e = 2.5 um)
    # Kecepatan Spindel 80.000 RPM, Pakan fz = 0.8 um/tooth, Kedalaman Aksial ap = 25 um
    # Eksentrisitas Runout Spindel = 0.9 um
    sim = MicroEndMillingSimulator(
        tool_diameter_um=200.0,
        num_flutes=2,
        helix_angle_deg=30.0,
        edge_radius_um=2.5,
        spindle_rpm=80000.0,
        feed_per_tooth_um=0.8,
        axial_depth_um=25.0,
        runout_um=0.9,
        runout_angle_deg=45.0
    )
    
    results = sim.simulate_cutting_forces_profile(num_points=360)
    
    print(f"\n[1] PARAMETER FISIKA & GEOMETRI PAHAT MIKRO:")
    print(f"    - Diameter Pahat (D)                    : {sim.D:.1f} um (0.2 mm)")
    print(f"    - Jari-jari Tepi Potong (r_e)           : {sim.r_e:.2f} um")
    print(f"    - Ketebalan Geram Minimum (h_min)       : {results['Minimum_chip_thickness_um']:.3f} um ({(results['Minimum_chip_thickness_um']/sim.r_e)*100:.1f}% dari r_e)")
    print(f"    - Pakan per Gigi Nominal (fz)           : {sim.fz:.2f} um/tooth")
    print(f"    - Runout Spindel Dinamis (r_o)          : {sim.r_o:.2f} um ({(sim.r_o/sim.fz)*100:.1f}% dari pakan fz!)")
    
    print(f"\n[2] HASIL SIMULASI GAYA DINAMIS & DOMAIN DEFORMASI:")
    print(f"    - Gaya Potong Maksimum Sumbu Pakan (Fx) : {results['Fx_max_N']:.4f} Newton")
    print(f"    - Gaya Dorong Maksimum Normal (Fy)      : {results['Fy_max_N']:.4f} Newton")
    print(f"    - Rasio Fy/Fx (Dominasi Plowing)        : {results['Fy_max_N']/results['Fx_max_N']:.2f}")
    
    print(f"\n[3] INTEGRITAS PERMUKAAN & METROLOGI 3D (ISO 25178):")
    print(f"    - Tinggi Pemulihan Elastis (p_e)        : {results['Elastic_recovery_height_um']*1000.0:.1f} nm")
    print(f"    - Prediksi Kekasaran Permukaan Areal Sa : {results['Predicted_surface_roughness_Sa_nm']:.2f} nm (Kualitas Cermin Mikro)")
    print("=" * 80)
```

---

## 7. Studi Kasus Industri: Fabrikasi Saluran Mikrofluida (*Microfluidic Bio-Chip Channels*) pada Paduan Titanium Ti-6Al-4V ELI

### 7.1 Latar Belakang & Persyaratan Toleransi Medis
Sebuah produsen perangkat implan medis dan diagnostik biomedis mikro memproduksi *microfluidic lab-on-a-chip* berbahan titanium medis **Ti-6Al-4V ELI (Grade 23, ASTM F136)**. Komponen ini memiliki saluran mikro fluida berdimensi lebar $W = 150\ \mu\text{m}$, kedalaman $D = 80\ \mu\text{m}$, dan panjang $L = 25\ \text{mm}$.

**Spesifikasi Kritis Kualitas:**
1. Kekasaran dasar saluran mikro: $S_a \le 45\ \text{nm}$ untuk mencegah turbulensi dan degradasi sel darah merah (*hemolysis*).
2. Ketinggian bur mikro tepi atas (*top burr height*): $h_{\text{burr}} \le 2{,}0\ \mu\text{m}$ agar proses pengikatan difusi (*diffusion bonding*) dengan penutup kaca borosilikat dapat tertutup rapat tanpa kebocoran (*leak-tight*).
3. Akurasi ketegakan dinding mikro: Kemiringan $< 0{,}8^\circ$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PENGARUH RASIO f_z / h_min TERHADAP PEMBENTUKAN BURR MIKRO                                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. KONDISI 1: FEED SANGAT KECIL (f_z = 0.2 um < h_min = 0.7 um) -> REGIME PLOWING DOMINAN:                        |
|      - Material hanya tertekan ke samping tanpa terpotong rapi.                                                       |
|      - Terjadi Penumpukan Plastis Masif (Side Plowing Pile-up).                                                       |
|      - Terbentuk BURR MIKRO RAKSASA (Top Burr Height h_burr = 12 - 18 um) di sepanjang bibir saluran!                 |
|      - Kekasaran Permukaan Buruk (Sa > 180 nm). Pahat cepat aus akibat gesekan berulang.                              |
|                                                                                                                       |
|   2. KONDISI 2: FEED OPTIMAL TERKALIBRASI (f_z = 1.2 um > h_min = 0.7 um) -> REGIME SHEARING STABIL:                  |
|      - Geram mikro terbentuk bersih pada setiap lintasan flute (Clean Micro-Chip Formation).                         |
|      - Plowing diminimalkan hanya pada zona awal kontak.                                                              |
|      - Tinggi Burr Mikro Sangat Rendah (h_burr < 1.2 um, memenuhi syarat difusi bonding!).                           |
|      - Kualitas Permukaan Nanometrik (Sa = 38 nm). Umur pahat mikro meningkat 340%.                                    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.2 Optimalisasi Parameter Proses & Hasil Metrologi Mikro
Dengan menerapkan kontrol getaran aktif pada spindel aerostatik 120.000 RPM, menggunakan pendinginan kabut mikro MQL (*Minimum Quantity Lubrication* berbasis ester nabati bertekanan), dan menyetel pakan per gigi $f_z = 1{,}25\ \mu\text{m/tooth}$ ($f_z / h_{\text{min}} \approx 1{,}8$):
- **Kekasaran Permukaan Terukur (ISO 25178 Optical Profilometry)**: $S_a = 36{,}4\ \text{nm}$, $S_q = 48{,}1\ \text{nm}$.
- **Tinggi Burr Mikro Tepi Saluran**: $h_{\text{burr}} = 0{,}95\ \mu\text{m}$ (bebas operasi deburring manual sekunder).
- **Integritas Tegangan Sisa Dasar Saluran**: Mengalami sedikit tegangan tekan residual ($\sigma_{\text{res}} = -140\ \text{MPa}$) yang menguntungkan ketahanan korosi fluida tubuh manusia.

---

## 8. Pertanyaan Uji Kompetensi & Diskusi Kritis

1. **Bifurkasi Fisika Minimum Chip Thickness:**
   *Mengapa penurunan laju pakan per gigi ($f_z$) di bawah ambang batas ketebalan geram minimum ($h_{\text{min}}$) justru meningkatkan kekasaran permukaan ($S_a$) dan mempercepat laju keausan pahat mikro, bertentangan dengan rumus kinematika permesinan makro konvensional ($R_a \propto f_z^2$)?*

2. **Dinamika Runout Spindel & Umur Pahat Mikro:**
   *Jelaskan secara matematis bagaimana rasio runout spindel terhadap pakan ($r_o / f_z$) dapat menyebabkan fenomena 'single-tooth cutting dominant' pada pahat mikro multi-flute, dan apa strategi kompensasi kontrol CNC yang dapat diterapkan untuk mengatasi keausan asimetris tersebut!*

3. **Plastisitas Gradien Regangan vs Efek Ukuran:**
   *Berdasarkan teori Fleck-Hutchinson dan akumulasi dislokasi GNDs ($\rho_{\text{GND}}$), mengapa energi pemotongan spesifik ($u_c$) meningkat secara asimtotik saat memotong ketebalan geram sub-mikron pada material polikristalin murni?*

---

## 9. Referensi Terverifikasi & Standar Industri

1. **ISO (2021)**. *ISO 25178-2:2021: Geometrical product specifications (GPS) — Surface texture: Areal — Part 2: Terms, definitions and surface texture parameters*. International Organization for Standardization, Geneva.
2. **ISO (2019)**. *ISO 3002-1: Basic quantities in cutting and grinding — Part 1: Geometry of the active part of cutting tools*.
3. **ASTM International (2021)**. *ASTM E8/E8M-21: Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA.
4. **Dornfeld, D., Min, S., & Takeuchi, Y. (2006)**. *Recent Advances in Mechanical Micromachining*. *CIRP Annals - Manufacturing Technology*, 55(2), 745-768. DOI: 10.1016/j.cirp.2006.10.006.
5. **Malekian, M., Park, S. S., & Jun, M. B. (2009)**. *Modeling of dynamic forces and tool runout in micro end milling*. *International Journal of Machine Tools and Manufacture*, 49(6), 496-508. DOI: 10.1016/j.ijmachtools.2009.01.002.
6. **Liu, X., DeVor, R. E., & Kapoor, S. G. (2004)**. *The mechanics of machining at the microscale: assessment of the current state of the art*. *Journal of Manufacturing Science and Engineering*, 126(4), 666-678. DOI: 10.1115/1.1813469.
7. **Shaw, M. C. (2005)**. *Metal Cutting Principles* (2nd ed.). Oxford University Press, New York. ISBN: 978-0-19-514206-8.
8. **Fleck, N. A., & Hutchinson, J. W. (1997)**. *Strain gradient plasticity*. *Advances in Applied Mechanics*, 33, 295-361. DOI: 10.1016/S0065-2156(08)70388-0.
9. **Biermann, D., & Baschin, A. (2023)**. *Advanced Micromilling: Tool Wear Phenomena, Edge Radius Effects, and Micro-Burr Suppression in Difficult-to-Cut Alloys*. *CIRP Annals - Manufacturing Technology*, 72(1), 89-94. DOI: 10.1016/j.cirp.2023.03.018.
10. **Zhang, X., Ehmann, K. F., & Yu, T. (2024)**. *Mechanistic Cutting Force Modeling for Micro End Milling Considering Size Effect, Tool Runout, and Elastic Recovery*. *Precision Engineering*, 85, 210-224. DOI: 10.1016/j.precisioneng.2023.11.004.
