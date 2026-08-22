# Modul 672: Electrolytic In-Process Dressing (ELID) Grinding: Kinetika Lapisan Oksida Pasivasi Anodik, Dinamika Penonjolan Butiran Abrasif Mikro (Micro-Grit Protrusion), Pemesinan Rezim Ulet Kaca Optik & Keramik Maju, serta Kualitas Permukaan Nanometrik (ISO 3002, ISO 25178, CIRP Annals & ASTM C1424)

## 1. Pengantar & Konteks Industri: Tantangan Pemesinan Material Keras-Getas Berorde Nano

Dalam industri optik canggih (*advanced optics*), fabrikasi cermin teleskop ruang angkasa (*space telescope mirrors*), substrat wafer semikonduktor silikon monokristal ($\text{Si}$), silikon karbida ($\text{SiC}$), galium nitrida ($\text{GaN}$), dan keramik struktural presisi ($\text{Si}_3\text{N}_4, \text{ZrO}_2, \text{Al}_2\text{O}_3$), kebutuhan akan permukaan berkualitas cermin optik bebas retak mikro (*crack-free, mirror-quality surface finish*, kekasaran $R_a < 1 - 5\ \text{nm}$) dengan akurasi profil sub-mikron adalah mutlak.

Material-material keras-getas (*hard and brittle materials*) ini memiliki nilai kekerasan tinggi ($H_v > 15 - 30\ \text{GPa}$) namun memiliki ketangguhan retak patah yang rendah ($K_{IC} < 1 - 4\ \text{MPa}\cdot\text{m}^{1/2}$). Secara konvensional, pembuatan lensa atau cermin optik memerlukan proses penggerindaan kasar (*coarse grinding*) diikuti oleh pemolesan manual bertahap (*lapping and polishing*) menggunakan suspensi bubur abrasif (*slurry*) yang memakan waktu berjam-jam hingga berhari-hari, sulit diautomasi secara numerik (CNC), dan rentan terhadap distorsi geometri tepi part (*edge roll-off*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|             PARADIGMA PENGGERINDAAN PRESISI: KONVENSIONAL VS ELECTROLYTIC IN-PROCESS DRESSING (ELID)                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. PENGGERINDAAN BATU GERINDA LOGAM METAL-BONDED KONVENSIONAL:                                                      |
|      - Butiran abrasif intan mikro (Superabrasive Diamond / CBN, grit size < 3-5 um) diikat matriks logam (Cast Iron).|
|      - Masalah Utama: KEBUNTUAN (Loading & Glazing) dan HILANGNYA PROTRUSI BUTIRAN POTONG.                            |
|      - Gerinda cepat tumpul, gaya potong melonjak drastis, memicu perambatan retak getas masif pada benda kerja.     |
|      - Memerlukan penghentian mesin berkala untuk dressing mekanik manual (proses tidak kontinu & tidak stabil).      |
|                                                                                                                       |
|   2. ELECTROLYTIC IN-PROCESS DRESSING (ELID) GRINDING (Dipelopori oleh Dr. Hitoshi Ohmori / RIKEN):                   |
|      - Cairan pendingin gerinda bertindak sebagai elektrolit konduktif lemah.                                         |
|      - Roda gerinda Cast-Iron Bonded Diamond dihubungkan ke Kutub Anoda (+), Elektroda Katoda (-) dipasang berhadapan.|
|      - Pulsa Tegangan DC diterapkan secara kontinu/siklik selama proses gerinda berlangsung.                          |
|      - Reaksi Elektrolisis mengikis matriks logam pengikat, memunculkan butiran intan tajam baru (Self-Sharpening).   |
|      - Terbentuk LAPISAN OKSIDA PASIVASI NON-KONDUKTIF tipis yang mengatur laju elektrolisis & meredam getaran!      |
|                                                                                                                       |
|                                    Catu Daya Pulsa DC (Pulse Generator)                                              |
|                                         ┌───────────────────────────┐                                                 |
|                                         │   ELID Power Supply Unit  │ Tegangan V = 60 - 120 V                         |
|                                         │   (Frekuensi 1-50 kHz)    │ Arus I = 0.5 - 10 A                             |
|                                         └───┬───────────────────┬───┘                                                 |
|                                             │ Anoda (+)         │ Katoda (-)                                          |
|                                             ▼                   ▼                                                     |
|                                     ┌───────────────┐     ┌───────────┐                                               |
|                                     │ Roda Gerinda  │     │ Elektroda │                                               |
|                                     │ Metal-Bonded  │◄═══►│ Katoda Cu │ (Celah Elektrolisis d_gap = 0.1 - 0.3 mm)     |
|                                     │ (Cast Iron)   │     └─────┬─────┘                                               |
|                                     └───────┬───────┘           │ Semprotan Elektrolit                                |
|                                             │                   ▼ Konduktif (Grinding Fluid)                          |
|                                             ▼                                                                         |
|                                ┌─────────────────────────┐                                                            |
|                                │ Lapisan Oksida Pasivasi │ (Ketebalan t_ox = 5 - 30 um)                               |
|                                │ Insulator Alami Fe(OH)3 │                                                            |
|                                └────────────┬────────────┘                                                            |
|                                             │ Butiran Intan Protrusi Tajam (Micro-Diamond Grits)                      |
|                                             ▼                                                                         |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
|    ◄── Gerak Pakan Benda Kerja (Feed Rate v_w)                                                                        |
|    ▲ BENDA KERJA KACA OPTIK BK7 / CERMIN SILIKON KARBIDA (SiC)                                                        |
|      - Kedalaman Potong Kritis d_c > Kedalaman Aktual d_act -> PEMOTONGAN REZIM ULET (DUCTILE PLASTIC SHEARING)       |
|      - Gaya Gerinda Normal & Tangensial Sangat Stabil (F_n, F_t Rendah)                                               |
|      - Hasil Permukaan: Kualitas Cermin Nanometrik (Ra < 1.5 nm, Ry < 10 nm Bebas Retak)                              |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
+-----------------------------------------------------------------------------------------------------------------------+
```

Teknologi **Electrolytic In-Process Dressing (ELID)** yang dipelopori oleh Dr. Hitoshi Ohmori di RIKEN (Jepang) memecahkan kebuntuan permesinan ultra-presisi tersebut. Dengan mengintegrasikan sistem peluruhan elektrokimia in-situ secara terkendali pada roda gerinda berpengikat logam (*metal-bonded superabrasive diamond grinding wheels*), ELID secara kontinu melarutkan matriks logam (*bond material*) secara elektrolitis dan serentak membentuk lapisan oksida dielektrik pasivasi (*anodic insulating oxide layer*). Lapisan oksida ini memiliki fungsi ganda:
1. **Regulasi Diri Arus Elektrolisis (*Self-Regulating Passivation*)**: Mencegah peluruhan matriks logam berlebih dengan mengisolasi konduksi arus saat lapisan tumbuh menebal.
2. **Media Penyangga Elastis (*Elastic Cushioning & Soft Polishing*)**: Lapisan oksida yang lunak bertindak sebagai bantalan peredam gaya dinamis gerinda, mendistribusikan beban kontak secara merata pada ribuan butiran mikro-intan (#4000 s.d. #300000, ukuran grit $4\ \mu\text{m}$ hingga $50\ \text{nm}$), sehingga memungkinkan material getas terpotong dalam **rezim deformasi plastis murni (*ductile-regime grinding*)** tanpa mengalami inisiasi retak mikro getas (*micro-cracking*).

Standar internasional, metrologi permukaan, dan pengujian permesinan presisi yang mendasari proses penggerindaan ELID meliputi:
1. **ISO 3002-1 s.d. 3002-4**: *Basic quantities in cutting and grinding — Geometry of the active part of tools*.
2. **ISO 25178-2:2021**: *Geometrical product specifications (GPS) — Surface texture: Areal — Terms, definitions and surface texture parameters ($S_a, S_q, S_z$)*.
3. **ISO 4287 / ISO 21920**: *Geometrical product specifications (GPS) — Surface texture: Profile method ($R_a, R_z, R_t$)*.
4. **ASTM C1424**: *Standard Test Method for Monotonic Compressive Strength of Advanced Ceramics at Ambient Temperature*.
5. **ASTM C1327 / ASTM E384**: *Standard Test Method for Vickers Indentation Hardness of Advanced Ceramics and Ductile Boundary Characterization*.
6. **CIRP Annals - Manufacturing Technology**: *Keynotes on Electrolytic In-Process Dressing and Precision Ductile Mode Grinding*.

---

## 2. Termodinamika & Elektrokimia Peluruhan Anodik Matriks Logam Roda Gerinda

### 2.1 Reaksi Elektrokimia Anodik & Katodik

Pada roda gerinda berpengikat besi cor (*Cast Iron Bonded Diamond - CIB-D*), matriks besi ($\text{Fe}$) pada anoda roda gerinda mengalami oksidasi elektrokimia di bawah keberadaan elektrolit berbasis air yang mengandung garam terlarut.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    MEKANISME ELEKTROKIMIA ANODIK DAN PEMBENTUKAN LAPISAN OKSIDA PASIVASI ELID                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|             KUTUB ANODA (+) (Roda Gerinda)                        KUTUB KATODA (-) (Elektroda Tembaga/Baja)           |
|            ┌──────────────────────────────┐                      ┌──────────────────────────────┐                     |
|            │  Matriks Besi Cor (Fe)       │                      │  Katoda Logam (Cu / SS)      │                     |
|            │  Fe -> Fe(2+) + 2 e(-)       │                      │  2 H2O + 2 e(-) -> H2 + 2 OH-│                     |
|            └──────────────┬───────────────┘                      └──────────────┬───────────────┘                     |
|                           │                                                     │                                     |
|                           ▼                                                     ▼                                     |
|            Reaksi Hidroksida Sekunder:                             Aliran Ion di Celah Elektrolit                     |
|            Fe(2+) + 2 OH(-) -> Fe(OH)2                            (d_gap = 0.1 - 0.3 mm)                              |
|            4 Fe(OH)2 + O2 + 2 H2O -> 4 Fe(OH)3                                                                        |
|            Dehidrasi Parsial:                                                                                         |
|            2 Fe(OH)3 -> Fe2O3.3H2O (Lapisan Oksida Dielektrik)                                                        |
|                                                                                                                       |
|            ◄══════════════════════════ [ ALIRAN ELEKTRON ARUS DC PULSA ] ═══════════════════════════►                 |
+-----------------------------------------------------------------------------------------------------------------------+
```

Reaksi utama yang berlangsung pada antarmuka celah anoda-katoda:
1. **Reaksi Anoda (Oksidasi Matriks Besi)**:
   $$\text{Fe} \rightarrow \text{Fe}^{2+} + 2e^- \quad (E^\circ = -0{,}44\ \text{V})$$
   $$\text{Fe}^{2+} \rightarrow \text{Fe}^{3+} + e^- \quad (E^\circ = +0{,}77\ \text{V})$$
2. **Reaksi Katoda (Reduksi Air & Pembangkitan Gas Hidrogen)**:
   $$2\text{H}_2\text{O} + 2e^- \rightarrow \text{H}_2\uparrow + 2\text{OH}^- \quad (E^\circ = -0{,}83\ \text{V})$$
3. **Pembentukan Endapan Lapisan Pasivasi Oksida/Hidroksida Besi**:
   $$\text{Fe}^{2+} + 2\text{OH}^- \rightarrow \text{Fe(OH)}_2\downarrow$$
   $$4\text{Fe(OH)}_2 + \text{O}_2 + 2\text{H}_2\text{O} \rightarrow 4\text{Fe(OH)}_3\downarrow \rightarrow 2\text{Fe}_2\text{O}_3\cdot 3\text{H}_2\text{O}$$

### 2.2 Hukum Faraday untuk Peluruhan Massa Matriks ($m_{\text{diss}}$)

Laju peluruhan massa teoritis matriks logam anodik $m_{\text{diss}}$ diatur oleh Hukum Faraday tentang Elektrolisis:

$$m_{\text{diss}} = \eta_{\text{eff}} \cdot \frac{M \cdot I \cdot t_{\text{on}}}{n_{\text{val}} \cdot F_{\text{Faraday}}}$$

Di mana:
- $\eta_{\text{eff}}$ adalah efisiensi arus elektrokimia ($0{,}75 - 0{,}95$).
- $M$ adalah massa molar atom matriks ($\text{kg/mol}$), untuk besi $M_{\text{Fe}} \approx 0{,}05585\ \text{kg/mol}$.
- $I$ adalah arus elektrolisis rata-rata ($\text{Ampere}$).
- $t_{\text{on}}$ adalah durasi pulsa hidup aktif ($\text{detik}$).
- $n_{\text{val}}$ adalah bilangan valensi ionisasi (valensi rata-rata $\approx 2{,}5$).
- $F_{\text{Faraday}} = 96485{,}33\ \text{C/mol}$ adalah konstanta Faraday.

Laju penurunan ketebalan matriks logam pengikat (*bond recession rate*) $v_{\text{diss}}$ adalah:

$$v_{\text{diss}} = \frac{d h_{\text{mat}}}{dt} = \frac{m_{\text{diss}}}{\rho_{\text{mat}} \cdot A_{\text{anode}} \cdot t} = \frac{\eta_{\text{eff}} \cdot M \cdot J_{\text{curr}}}{n_{\text{val}} \cdot F_{\text{Faraday}} \cdot \rho_{\text{mat}}}$$

Di mana $J_{\text{curr}} = \frac{I}{A_{\text{anode}}}$ adalah densitas arus anodik ($\text{A/m}^2$), dan $\rho_{\text{mat}}$ adalah densitas matriks besi cor ($\approx 7200\ \text{kg/m}^3$).

---

## 3. Model Kinetika Pertumbuhan & Pengikisan Lapisan Oksida Pasivasi (Oxide Film Growth-Wear Dynamics)

Karakteristik fundamental yang membuat proses ELID stabil adalah kondisi **kesetimbangan dinamis (*dynamic equilibrium*)** antara pertumbuhan lapisan oksida elektrokimia dan pengikisan mekanis lapisan oksida akibat gesekan dengan benda kerja.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 EVOLUSI KETEBALAN LAPISAN OKSIDA PASIVASI ELID MENUJU KESETIMBANGAN DINAMIS                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Ketebalan Lapisan Oksida t_ox(t)                                                                                    |
|   ▲                                                                                                                   |
|   │                                    ─── KESETIMBANGAN DINAMIS (Steady-State Film Thickness t_eq) ───               |
|   │                                 . '                                                                               |
|   │                              . '       Laju Pertumbuhan Oksida Elektrolitik (d t_ox / dt)_growth                  |
|   │                           . '                       =                                                             |
|   │                        . '             Laju Pengikisan Gesek Mekanik Benda Kerja (d t_ox / dt)_wear               |
|   │                     . '                                                                                           |
|   │                  . '                                                                                              |
|   │               . '  Fasa Dressing Awal (Initial Dressing): Arus I tinggi -> Lapisan Oksida Tumbuh Cepat           |
|   │            . '                                                                                                    |
|   │         . '                                                                                                       |
|   │      . '                                                                                                          |
|   0 ┼───'─────────────────────────────────────────────────────────────────────────────────────────────► Waktu Gerinda t|
|                                                                                                                       |
|   Resistansi Listrik Total Celah: R_total(t) = R_electrolyte + R_oxide(t) = (d_gap / (k_el A)) + (t_ox / (k_ox A))    |
|   Arus Elektrolisis In-Process: I(t) = V_applied / R_total(t) -> Turun otomatis saat t_ox menebal (Self-Limiting)   |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Persamaan Diferensial Kinetika Lapisan Oksida

Laju perubahan ketebalan lapisan oksida pasivasi $t_{\text{ox}}(t)$ dimodelkan sebagai superposisi laju pertumbuhan anodik dan laju abrasi mekanis:

$$\frac{d t_{\text{ox}}(t)}{dt} = \left( \frac{d t_{\text{ox}}}{dt} \right)_{\text{growth}} - \left( \frac{d t_{\text{ox}}}{dt} \right)_{\text{wear}}$$

1. **Laju Pertumbuhan Elektrokimia (*Growth Rate*)**:
   $$\left( \frac{d t_{\text{ox}}}{dt} \right)_{\text{growth}} = \beta_{\text{ox}} \cdot \frac{M_{\text{ox}} \cdot I(t)}{n_{\text{val}} F \rho_{\text{ox}} A_{\text{el}}} = \frac{\beta_{\text{ox}} M_{\text{ox}}}{n_{\text{val}} F \rho_{\text{ox}}} \cdot \frac{V_{\text{pulse}}}{R_{\text{electrolyte}} + \frac{t_{\text{ox}}(t)}{\sigma_{\text{ox}} A_{\text{el}}}}$$

2. **Laju Keausan Abrasi Mekanik (*Mechanical Wear Rate*)**:
   $$\left( \frac{d t_{\text{ox}}}{dt} \right)_{\text{wear}} = K_{\text{wear}} \cdot \frac{F_n \cdot v_s}{H_{\text{ox}} \cdot A_{\text{contact}}}$$

Di mana:
- $\beta_{\text{ox}}$ adalah fraksi molar konversi ion besi menjadi oksida pasivasi padat ($\approx 0{,}80 - 0{,}90$).
- $\sigma_{\text{ox}}$ adalah konduktivitas listrik spesifik lapisan oksida besi terhidrasi ($10^{-3} - 10^{-5}\ \text{S/m}$, bersifat semi-insulator dielektrik).
- $K_{\text{wear}}$ adalah koefisien keausan abrasi Archard lapisan oksida.
- $H_{\text{ox}}$ adalah kekerasan lapisan oksida lunak ($\approx 1{,}5 - 3{,}0\ \text{GPa}$, jauh lebih lunak dibanding intan $100\ \text{GPa}$ atau matriks besi $6\ \text{GPa}$).
- $F_n$ adalah gaya gerinda normal ($\text{N}$).
- $v_s$ adalah kecepatan linier periferal roda gerinda ($\text{m/s}$, $v_s = \pi D_s n_s / 60$).

Pada kondisi tunak (*steady-state equilibrium*), $\frac{d t_{\text{ox}}}{dt} = 0$, menghasilkan ketebalan lapisan oksida kesetimbangan stabil $t_{\text{eq}}$:

$$t_{\text{eq}} = \sigma_{\text{ox}} A_{\text{el}} \left[ \frac{\beta_{\text{ox}} M_{\text{ox}} V_{\text{pulse}}}{n_{\text{val}} F \rho_{\text{ox}} \left( K_{\text{wear}} \frac{F_n v_s}{H_{\text{ox}} A_{\text{contact}}} \right)} - R_{\text{electrolyte}} \right]$$

---

## 4. Mekanika Pemotongan Rezim Ulet (Ductile-Regime Grinding) pada Material Keras-Getas

### 4.1 Kriteria Transisi Getas-ke-Ulet Bifano (Bifano's Critical Depth of Cut Model)

Pada permesinan material getas seperti kaca optik (Fused Silica, BK7) atau keramik ($\text{SiC}, \text{Si}_3\text{N}_4$), material akan terpotong melalui mekanisme deformasi plastis murni (pembentukan geram mikro pita kontinu seperti pada logam ulet) jika ketebalan pemotongan lokal tak-terdeformasi per butiran intan ($h_{\text{uncut}}$) berada di bawah **kedalaman potong kritis (*critical depth of cut - $d_c$*)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                MEKANIKA PEMOTONGAN REZIM ULET (DUCTILE-MODE) VS FRAKTUR GETAS (BRITTLE CHIPPING)                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. KONDISI GETAS (h_uncut > d_c):                         2. KONDISI REZIM ULET ELID (h_uncut < d_c):               |
|      - Terjadi Retak Median, Radial, dan Lateral               - Aliran Plastis Geser Murni (Plastic Shear Flow)      |
|      - Benda kerja mengalami spalling & subsurface damage      - Geram Mikro Kontinu Terbentuk Bebas Retakan          |
|      - Kekasaran permukaan tinggi (Ra > 100-500 nm)            - Kekasaran Cermin Nanometrik (Ra < 1-3 nm)            |
|                                                                                                                       |
|           Butiran Intan Kasar                                       Butiran Intan Mikro + Bantalan Oksida             |
|                ▼                                                         ▼                                            |
|             \     /                                                   \  ▲  /   (Lapisan Oksida Fe2O3.nH2O)           |
|              \   /                                                     \ │ /                                          |
|               \ /                                                       \v/                                           |
|       ═════════V═════════                                      ══════════v══════════                                  |
|               / \  Retak Lateral                                       ─ ─ ─ ─ ─ Aliran Plastis                       |
|              /   \ (Brittle Fracture)                                  ~~~~~~~~~ Bebas Retak                          |
|             /  │  \                                                                                                   |
|                ▼ Retak Median                                                                                         |
|                                                                                                                       |
|   Formulasi Bifano Kedalaman Potong Kritis: d_c = 0.15 * (E / H) * (K_IC / H)^2                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Model Bifano menentukan kedalaman potong kritis $d_c$ berdasarkan sifat mekanik intrinsik material benda kerja:

$$d_c = \xi \cdot \left( \frac{E_w}{H_w} \right) \cdot \left( \frac{K_{IC}}{H_w} \right)^2$$

Di mana:
- $\xi \approx 0{,}15$ adalah konstanta material tak-berdimensi.
- $E_w$ adalah modulus Young material benda kerja ($\text{GPa}$).
- $H_w$ adalah kekerasan mikro Vickers benda kerja ($\text{GPa}$).
- $K_{IC}$ adalah ketangguhan retak patah bidang (*fracture toughness*, $\text{MPa}\cdot\text{m}^{1/2}$).

| Material Keras-Getas | Modulus Young $E_w$ (GPa) | Kekerasan $H_w$ (GPa) | Ketangguhan $K_{IC}$ ($\text{MPa}\cdot\text{m}^{1/2}$) | Kedalaman Potong Kritis $d_c$ ($\text{nm}$) |
| :--- | :--- | :--- | :--- | :--- |
| **Fused Silica ($SiO_2$)** | $73$ | $9{,}0$ | $0{,}75$ | $\approx 8{,}5\ \text{nm}$ |
| **Kaca Optik BK7** | $81$ | $6{,}8$ | $0{,}82$ | $\approx 26{,}0\ \text{nm}$ |
| **Silikon Monokristal (Si)** | $160$ | $12{,}0$ | $0{,}95$ | $\approx 12{,}5\ \text{nm}$ |
| **Silikon Karbida ($\alpha$-SiC)** | $410$ | $26{,}0$ | $3{,}20$ | $\approx 36{,}0\ \text{nm}$ |
| **Zirkonia ($\text{ZrO}_2$-YTZP)** | $210$ | $13{,}5$ | $6{,}50$ | $\approx 540\ \text{nm}$ |

### 4.2 Ketebalan Geram Maksimum Tak-Terdeformasi ($h_{\text{max}}$) pada Roda Gerinda ELID

Untuk memastikan pemotongan berada $100\%$ dalam rezim ulet ($h_{\text{max}} < d_c$), ketebalan geram maksimum per butiran mikro intan pada penggerindaan permukaan (*surface grinding*) dimodelkan dengan persamaan Malkin & Snoeys:

$$h_{\text{max}} = \left[ \frac{6 \cdot v_w}{v_s \cdot C_{\text{grit}} \cdot \tan\theta_{\text{grit}}} \sqrt{\frac{a_e}{D_s}} \right]^{1/2}$$

Di mana:
- $v_w$ adalah kecepatan meja kerja (*workpiece traverse speed*, $\text{m/s}$).
- $v_s$ adalah kecepatan periferal roda gerinda ($\text{m/s}$).
- $a_e$ adalah kedalaman pemakanan potong (*depth of cut*, $\mu\text{m}$).
- $D_s$ adalah diameter roda gerinda ($\text{mm}$).
- $C_{\text{grit}}$ adalah densitas butiran abrasif aktif per satuan luas permukaan roda gerinda ($\text{grit}/\text{m}^2$).
- $\theta_{\text{grit}}$ adalah setengah sudut puncak butiran intan ($\approx 60^\circ$).

Dalam roda gerinda super-halus ELID (#8000 s.d. #30000, ukuran partikel intan $d_{\text{grit}} = 0{,}5 - 2\ \mu\text{m}$), densitas butiran sangat padat ($C_{\text{grit}} > 10^{10}\ \text{butir/m}^2$), sehingga $h_{\text{max}}$ bernilai antara $2 - 15\ \text{nm}$, jauh lebih kecil daripada kedalaman kritis $d_c$, menjamin **penghilangan material secara plastis murni tanpa cacat fraktur sub-permukaan**.

---

## 5. Dinamika Topografi Permukaan & Metrologi Areal ISO 25178

Kekasaran permukaan teoritis $R_a$ yang dihasilkan oleh replikasi kinematik ujung butiran intan sperikal dengan radius kelengkungan puncak $r_{\epsilon}$ dan jarak antar-lintasan puncak gerinda $f_{\text{cross}}$ dinyatakan oleh:

$$R_a \approx \frac{f_{\text{cross}}^2}{18\sqrt{3} \cdot r_{\epsilon}} + \Delta R_{\text{elastic}}$$

Di mana $\Delta R_{\text{elastic}}$ adalah faktor koreksi relaksasi elastis material di bawah lapisan oksida bantalan ELID.

```
+-----------------------------------------------------------------------------------------------------------------------+
|             SPEKTRUM PARAMETER TEKSTUR PERMUKAAN AREAL TIGA DIMENSI (ISO 25178-2) PADA ELID                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. Sa (Areal Arithmetic Mean Height):                                                                               |
|      Sa = (1 / A) * \iint_A |z(x,y)| dx dy  ---> Tolok ukur kehalusan permukaan optik global (Target Sa < 1.0 nm).    |
|                                                                                                                       |
|   2. Sq (Root Mean Square Height):                                                                                    |
|      Sq = sqrt( (1 / A) * \iint_A z(x,y)^2 dx dy ) ---> Standar kehalusan cermin teleskop astronomi (Sq < 1.5 nm).    |
|                                                                                                                       |
|   3. Sz (Maximum Peak-to-Valley Height of Surface):                                                                   |
|      Sz = Sp + Sv ---> Menentukan ketiadaan goresan dalam atau lubang cabutan getas (Pit-free, Sz < 10-15 nm).        |
|                                                                                                                       |
|   4. Sdr (Developed Interfacial Area Ratio):                                                                          |
|      Sdr = ( Luas Permukaan Riil 3D - Luas Proyeksi 2D Flat ) / Luas Proyeksi Flat * 100% ---> Sdr < 0.05%.           |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 6. Algoritma Python Solver: ELID Grinding Electrochemical-Mechanical Equilibrium & Ductile Regime Predictor

Skrip Python berikut memodelkan kinetika peluruhan elektrokimia Faraday, evolusi dinamika lapisan oksida pasivasi hingga kesetimbangan stabil $t_{\text{eq}}$, verifikasi kriteria rezim ulet Bifano untuk berbagai keramik maju/kaca optik, serta prediksi kekasaran permukaan nanometrik ISO 25178 ($S_a, S_q$).

```python
"""
RuangTI ELID Grinding Process Simulation & Ductile-Regime Nanometric Optimizer
Model Elektrokimia Faraday, Kinetika Lapisan Oksida Pasivasi, dan Kriteria Bifano.
Standar: ISO 3002, ISO 25178, CIRP Annals, ASTM C1424.
"""

import numpy as np
from dataclasses import dataclass
from typing import Dict, Tuple, List, Any

@dataclass
class ELIDPowerSupplyConfig:
    """Konfigurasi Catu Daya Pulsa DC ELID"""
    voltage_open_circuit: float = 90.0    # Tegangan rangkaian terbuka (Volt)
    current_limit: float = 6.0            # Batas arus puncak maksimum (Ampere)
    pulse_on_time_us: float = 2.0         # Waktu pulsa hidup t_on (mikrodetik)
    pulse_off_time_us: float = 2.0        # Waktu pulsa mati t_off (mikrodetik)
    gap_distance_mm: float = 0.20         # Celah celah elektroda katoda-anoda (mm)
    electrode_area_cm2: float = 8.0       # Luas penampang elektroda (cm2)
    electrolyte_conductivity: float = 0.8 # Konduktivitas fluida elektrolit (S/m)

@dataclass
class WheelAndWorkpieceConfig:
    """Konfigurasi Roda Gerinda Metal-Bonded dan Material Benda Kerja"""
    wheel_diameter_mm: float = 150.0      # Diameter roda gerinda (mm)
    wheel_speed_rpm: float = 3000.0       # Kecepatan putar spindel roda (RPM)
    grit_mesh_number: int = 8000          # Mesh butiran diamond (#8000 ~ 1.5 um)
    grit_size_um: float = 1.5             # Ukuran butiran rata-rata (um)
    grit_concentration: float = 100.0     # Konsentrasi butiran diamond (100 = 4.4 karat/cm3)
    # Properti Matriks Logam (Besi Cor / Cast Iron)
    rho_matrix: float = 7200.0            # Densitas matriks besi (kg/m3)
    M_fe: float = 0.05585                 # Massa molar Fe (kg/mol)
    valence_fe: float = 2.5               # Valensi ionisasi efektif
    # Properti Lapisan Oksida Pasivasi (Fe2O3.nH2O)
    rho_oxide: float = 3900.0             # Densitas lapisan oksida (kg/m3)
    M_oxide: float = 0.160                # Massa molar oksida (kg/mol)
    conductivity_oxide: float = 2.5e-4    # Konduktivitas lapisan oksida pasivasi (S/m)
    hardness_oxide_GPa: float = 2.2       # Kekerasan lapisan oksida lunak (GPa)
    K_wear_archard: float = 4.5e-5        # Koefisien keausan Archard lapisan oksida
    # Parameter Operasi Gerinda
    feed_rate_mm_min: float = 20.0        # Kecepatan translasi meja (mm/min)
    depth_of_cut_um: float = 1.0          # Kedalaman potong pemakanan a_e (um)
    normal_force_N: float = 12.0          # Gaya gerinda normal F_n (N)

class ELIDProcessOptimizer:
    def __init__(self, pwr: ELIDPowerSupplyConfig, cfg: WheelAndWorkpieceConfig):
        self.pwr = pwr
        self.cfg = cfg
        self.F_faraday = 96485.33         # C/mol
        
    def calculate_critical_depth(self, E_GPa: float, H_GPa: float, K_IC_MPam: float) -> float:
        """Menghitung kedalaman potong kritis rezim ulet Bifano (nm)."""
        xi = 0.15
        # d_c = xi * (E/H) * (K_IC/H)^2  (dalam meter, konversi ke nm)
        # K_IC dalam Pa.m^0.5, E dan H dalam Pa
        E_Pa = E_GPa * 1e9
        H_Pa = H_GPa * 1e9
        K_IC_Pa = K_IC_MPam * 1e6
        d_c_meters = xi * (E_Pa / H_Pa) * (K_IC_Pa / H_Pa)**2
        return d_c_meters * 1e9 # nm
        
    def simulate_oxide_film_dynamics(self, duration_sec: float = 600.0, n_steps: int = 1000) -> Dict[str, np.ndarray]:
        """Simulasi pertumbuhan dan kesetimbangan dinamis lapisan oksida ELID."""
        dt = duration_sec / n_steps
        time_arr = np.linspace(0, duration_sec, n_steps)
        
        t_ox_arr = np.zeros(n_steps)
        current_arr = np.zeros(n_steps)
        grit_protrusion_arr = np.zeros(n_steps)
        
        # Geometri dan resistansi
        A_el_m2 = self.pwr.electrode_area_cm2 * 1e-4
        d_gap_m = self.pwr.gap_distance_mm * 1e-3
        duty_cycle = self.pwr.pulse_on_time_us / (self.pwr.pulse_on_time_us + self.pwr.pulse_off_time_us)
        
        R_electrolyte = d_gap_m / (self.pwr.electrolyte_conductivity * A_el_m2)
        v_s = (np.pi * (self.cfg.wheel_diameter_mm * 1e-3) * self.cfg.wheel_speed_rpm) / 60.0 # m/s
        
        # Nilai awal
        t_ox = 0.0 # Ketebalan oksida awal (m)
        h_bond_recession = 0.0 # Penurunan matriks logam (m)
        
        for i, t in enumerate(time_arr):
            # 1. Resistansi Lapisan Oksida & Arus Elektrolisis
            R_oxide = t_ox / (self.cfg.conductivity_oxide * A_el_m2) if t_ox > 0 else 0.0
            R_total = R_electrolyte + R_oxide
            I_inst = min(self.pwr.current_limit, self.pwr.voltage_open_circuit / R_total)
            I_eff = I_inst * duty_cycle
            current_arr[i] = I_eff
            
            # 2. Laju Peluruhan Logam & Pertumbuhan Oksida (Faraday)
            v_diss = (0.85 * self.cfg.M_fe * I_eff) / (self.cfg.valence_fe * self.F_faraday * self.cfg.rho_matrix * A_el_m2)
            h_bond_recession += v_diss * dt
            
            beta_ox = 0.82
            rate_growth = (beta_ox * self.cfg.M_oxide * I_eff) / (self.cfg.valence_fe * self.F_faraday * self.cfg.rho_oxide * A_el_m2)
            
            # 3. Laju Keausan Abrasi Mekanis Lapisan Oksida
            # Kontak area efektif roda gerinda
            A_contact = 5.0e-5 # m2
            rate_wear = (self.cfg.K_wear_archard * self.cfg.normal_force_N * v_s) / (self.cfg.hardness_oxide_GPa * 1e9 * A_contact)
            
            # Update ketebalan oksida
            dt_ox = (rate_growth - rate_wear) * dt
            t_ox = max(0.0, t_ox + dt_ox)
            t_ox_arr[i] = t_ox * 1e6 # mikro meter (um)
            
            # 4. Penonjolan Butiran Intan Efektif (Protrusion Height)
            # Protrusi = Peluruhan matriks - ketebalan oksida di atas matriks
            protrusion = (h_bond_recession - t_ox * 0.4) * 1e6 # um
            grit_protrusion_arr[i] = max(0.1, min(self.cfg.grit_size_um * 0.6, protrusion))
            
        return {
            "time_s": time_arr,
            "t_ox_um": t_ox_arr,
            "current_A": current_arr,
            "protrusion_um": grit_protrusion_arr
        }
        
    def evaluate_ductile_regime_for_materials(self) -> List[Dict[str, Any]]:
        """Mengevaluasi kondisi pemotongan rezim ulet untuk berbagai material optik & semikonduktor."""
        materials = [
            {"name": "BK7 Optical Glass", "E_GPa": 81.0, "H_GPa": 6.8, "K_IC": 0.82},
            {"name": "Fused Silica (SiO2)", "E_GPa": 73.0, "H_GPa": 9.0, "K_IC": 0.75},
            {"name": "Monocrystalline Si (100)", "E_GPa": 160.0, "H_GPa": 12.0, "K_IC": 0.95},
            {"name": "Silicon Carbide (alpha-SiC)", "E_GPa": 410.0, "H_GPa": 26.0, "K_IC": 3.20},
            {"name": "Zirconia (ZrO2-YTZP)", "E_GPa": 210.0, "H_GPa": 13.5, "K_IC": 6.50}
        ]
        
        v_s = (np.pi * (self.cfg.wheel_diameter_mm * 1e-3) * self.cfg.wheel_speed_rpm) / 60.0
        v_w = (self.cfg.feed_rate_mm_min * 1e-3) / 60.0
        a_e = self.cfg.depth_of_cut_um * 1e-6
        D_s = self.cfg.wheel_diameter_mm * 1e-3
        
        # Densitas butiran aktif C_grit (butir / m2) untuk #8000 grit
        C_grit = 3.5e10
        tan_theta = np.tan(np.radians(60.0))
        
        # Ketebalan geram maksimum tak-terdeformasi h_max (Malkin Model)
        h_max_m = np.sqrt((6.0 * v_w) / (v_s * C_grit * tan_theta) * np.sqrt(a_e / D_s))
        h_max_nm = h_max_m * 1e9
        
        results = []
        for mat in materials:
            d_c_nm = self.calculate_critical_depth(mat["E_GPa"], mat["H_GPa"], mat["K_IC"])
            is_ductile = h_max_nm < d_c_nm
            safety_ratio = d_c_nm / h_max_nm if h_max_nm > 0 else 999.0
            
            # Estimasi kekasaran permukaan nanometrik ISO 25178 Sa
            if is_ductile:
                Sa_est_nm = 0.8 + 0.05 * h_max_nm
            else:
                Sa_est_nm = 15.0 + 2.5 * (h_max_nm - d_c_nm)
                
            results.append({
                "material": mat["name"],
                "d_c_nm": d_c_nm,
                "h_max_nm": h_max_nm,
                "is_ductile": is_ductile,
                "safety_ratio": safety_ratio,
                "predicted_Sa_nm": Sa_est_nm
            })
            
        return results

if __name__ == "__main__":
    pwr = ELIDPowerSupplyConfig()
    cfg = WheelAndWorkpieceConfig()
    optimizer = ELIDProcessOptimizer(pwr, cfg)
    
    # 1. Simulasi Dinamika Lapisan Oksida & Arus Pasivasi
    sim_res = optimizer.simulate_oxide_film_dynamics(duration_sec=600.0, n_steps=600)
    t_eq = sim_res["t_ox_um"][-1]
    I_eq = sim_res["current_A"][-1]
    prot_eq = sim_res["protrusion_um"][-1]
    
    print("=== ELID OXIDE FILM EQUILIBRIUM & PASSIVATION DYNAMICS ===")
    print(f"Ketebalan Oksida Tunak (t_eq)   : {t_eq:.2f} um")
    print(f"Arus Pasivasi Kesetimbangan     : {I_eq:.2f} A (Arus Awal: {sim_res['current_A'][0]:.2f} A)")
    print(f"Tinggi Protrusi Butiran Intan   : {prot_eq:.3f} um (Ukuran Butiran: {cfg.grit_size_um} um)")
    
    # 2. Evaluasi Rezim Ulet untuk Berbagai Material Keras-Getas
    ductile_eval = optimizer.evaluate_ductile_regime_for_materials()
    print("\n=== DUCTILE-REGIME GRINDING EVALUATION (BIFANO CRITERIA) ===")
    for res in ductile_eval:
        status_str = "DUCTILE (PLASTIC SHEAR)" if res["is_ductile"] else "BRITTLE FRACTURE RISK"
        print(f"Material: {res['material']:<26} | d_c = {res['d_c_nm']:>6.2f} nm | h_max = {res['h_max_nm']:>5.2f} nm | Status: {status_str} | Prediksi Sa: {res['predicted_Sa_nm']:.2f} nm")
```

---

## 7. Studi Kasus Industri: Fabrikasi Cermin Fotonik Silikon Karbida ($\alpha$-SiC) Berdiameter 200 mm untuk Teleskop Satelit

### 7.1 Latar Belakang Permasalahan & Persyaratan Desain

Sebuah laboratorium instrumentasi kedirgantaraan memproduksi cermin asferis optik primer berdiameter $200\ \text{mm}$ berbahan keramik silikon karbida disinter ($\text{Sintered }\alpha\text{-SiC}$, kekerasan $H_v = 26\ \text{GPa}$, modulus elastisitas $E = 410\ \text{GPa}$, ketangguhan retak $K_{IC} = 3{,}2\ \text{MPa}\cdot\text{m}^{1/2}$).

Tantangan dan target spesifikasi:
1. **Kekasaran Permukaan Areal Ekstrem**: Nilai $S_a < 1{,}5\ \text{nm}$ dan kekasaran kuadrat rata-rata $S_q < 2{,}0\ \text{nm}$ (ISO 25178) untuk mencegah hamburan cahaya gelombang pendek (*stray light scatter* pada spektrum ultraviolet).
2. **Ketiadaan Kerusakan Bawah-Permukaan (*Subsurface Damage - SSD*)**: Kedalaman retak mikro bawah permukaan wajib $\text{SSD} = 0\ \mu\text{m}$ untuk mencegah inisiasi patah getas di bawah beban getaran peluncuran roket.
3. **Efisiensi Siklus Manufaktur**: Mengeliminasi tahapan pemolesan manual tradisional (*lapping/polishing*) yang sebelumnya memakan waktu $45\ \text{jam}$ per cermin dengan konsistensi bentuk yang rendah.

### 7.2 Implementasi Sistem Penggerindaan Ultra-Presisi ELID

1. **Konfigurasi Roda Gerinda Logam Tiga-Tahap**:
   - Tahap 1 (Semi-Finishing): Roda gerinda *Cast Iron Bonded Diamond* (CIB-D) grit #2000 ($d_{\text{grit}} \approx 6\ \mu\text{m}$).
   - Tahap 2 (Mirror Finishing): CIB-D grit #8000 ($d_{\text{grit}} \approx 1{,}5\ \mu\text{m}$).
   - Tahap 3 (Nano Super-Finishing): CIB-D grit #30000 ($d_{\text{grit}} \approx 0{,}5\ \mu\text{m} = 500\ \text{nm}$).
2. **Pengendalian Adaptif Sumber Daya Pulsa DC ELID**:
   - Tegangan pulsa terbuka $V = 90\ \text{V}$, frekuensi pulsa $f = 25\ \text{kHz}$, *duty ratio* $50\%$.
   - Cairan pendingin: Elektrolit berbasis air sintetik terdeionisasi dengan inhibitor korosi ramah lingkungan ($10\%$ konsentrasi).
   - Selama proses, ketebalan lapisan oksida pasivasi $\text{Fe}_2\text{O}_3\cdot n\text{H}_2\text{O}$ dipertahankan secara stabil pada ketebalan $t_{\text{eq}} \approx 12{,}5\ \mu\text{m}$, meredam getaran mikroskopis roda gerinda.
3. **Penyesuaian Parameter Kinematik Rezim Ulet**:
   - Kecepatan periferal roda gerinda $v_s = 28\ \text{m/s}$ ($n = 3500\ \text{RPM}$, diameter roda $150\ \text{mm}$).
   - Kedalaman potong pemakanan $a_e = 0{,}5\ \mu\text{m}$ dan kecepatan pakan meja $v_w = 15\ \text{mm/min}$.
   - Kondisi ini menghasilkan ketebalan geram tak-terdeformasi $h_{\text{max}} \approx 4{,}8\ \text{nm}$, jauh di bawah kedalaman kritis Bifano silikon karbida ($d_c \approx 36\ \text{nm}$), menjamin operasi $100\%$ dalam rezim ulet.

### 7.3 Hasil Pengujian Metrologi & Verifikasi Kinerja

Pengukuran topografi permukaan dilakukan menggunakan *White Light Interferometry* (WLI) dan *Atomic Force Microscopy* (AFM) sesuai standar ISO 25178-2:

| Parameter Metrologi & Kinerja | Metode Konvensional (Grinding + Polishing) | ELID Ductile Grinding (#30000) | Spesifikasi Teleskop Satelit | Status Kelaikan |
| :--- | :--- | :--- | :--- | :--- |
| **Kekasaran Areal Rata-rata ($S_a$)** | $4{,}20\ \text{nm}$ (Setelah Lapping 30 jam) | **$0{,}92\ \text{nm}$** | $< 1{,}50\ \text{nm}$ (ISO 25178) | **MEMENUHI STANDAR** |
| **Root Mean Square Height ($S_q$)** | $5{,}80\ \text{nm}$ | **$1{,}18\ \text{nm}$** | $< 2{,}00\ \text{nm}$ (ISO 25178) | **MEMENUHI STANDAR** |
| **Tinggi Puncak-Lembah Maks ($S_z$)** | $48{,}5\ \text{nm}$ | **$8{,}40\ \text{nm}$** | $< 15{,}0\ \text{nm}$ | **MEMENUHI STANDAR** |
| **Kerusakan Bawah Permukaan (SSD)** | $1{,}85\ \mu\text{m}$ (Mikroretak Tersembunyi) | **$0{,}00\ \mu\text{m}$ (Bebas Cacat Retak)** | $0{,}00\ \mu\text{m}$ (TEM / HF Etch) | **MEMENUHI STANDAR** |
| **Akurasi Bentuk Permukaan ($PV$)** | $\lambda/4\ (\approx 158\ \text{nm})$ | **$\lambda/12\ (\approx 52\ \text{nm})$** | $< \lambda/8\ (79\ \text{nm})$ | **MEMENUHI STANDAR** |
| **Total Waktu Siklus Fabrikasi** | $45\ \text{jam}$ | **$3{,}5\ \text{jam}$** | - | **PENURUNAN WAKTU 92.2%** |

---

## 8. Pertanyaan Uji Pemahaman & Diskusi Kritis

1. **Jelaskan peran ganda (*dual functionality*) lapisan oksida pasivasi $\text{Fe}_2\text{O}_3\cdot n\text{H}_2\text{O}$ pada proses ELID grinding! Mengapa sifat dielektrik lapisan tersebut mampu menciptakan fenomena regulasi diri (*self-regulating electrochemical mechanism*)?**
2. **Berdasarkan model Bifano, turunkan hubungan matematis antara modulus Young ($E$), kekerasan ($H$), dan ketangguhan retak ($K_{IC}$) dalam menentukan kedalaman potong kritis rezim ulet ($d_c$). Mengapa kaca optik Fused Silica memiliki $d_c$ yang jauh lebih kecil ($\approx 8{,}5\ \text{nm}$) dibandingkan keramik Zirkonia ($\approx 540\ \text{nm}$)?**
3. **Bagaimana pengaruh penambahan frekuensi dan amplitudo getaran ultrasonik pada roda gerinda ELID (teknologi *Ultrasonic-Assisted ELID / UA-ELID*) terhadap stabilitas lapisan oksida pasivasi dan gaya potong rata-rata?**

---

## 9. Referensi Terverifikasi & Rekomendasi Bacaan Lanjutan

1. **Ohmori, H., & Nakagawa, T.** (1995). *Analysis of Mirror Surface Generation of Hard and Brittle Materials by ELID (Electrolytic In-Process Dressing) Grinding*. CIRP Annals - Manufacturing Technology, 44(1), 287–290. DOI: 10.1016/S0007-8506(07)62327-0.
2. **Katahira, K., Ohmori, H., Mishima, T., & Komotori, J.** (2025). *Formation and Removal Behavior of Oxide Film in Electrolytic In-Process Dressing Superfinishing of Cylindrical Rollers*. International Journal of Precision Engineering and Manufacturing, 26(2), 215–227. DOI: 10.1007/s12541-025-01378-4.
3. **Bifano, T. G., Dow, T. A., & Scattergood, R. O.** (1991). *Ductile-Regime Grinding: A New Technology for Machining Brittle Materials*. ASME Journal of Engineering for Industry, 113(2), 184–189. DOI: 10.1115/1.2899676.
4. **Malkin, S., & Guo, C.** (2008). *Grinding Technology: Theory and Applications of Machining with Abrasives (2nd Edition)*. New York: Industrial Press.
5. **International Organization for Standardization**. (2021). *ISO 25178-2: Geometrical product specifications (GPS) — Surface texture: Areal — Part 2: Terms, definitions and surface texture parameters*. Geneva: ISO.
6. **ASTM International**. (2022). *ASTM C1424: Standard Test Method for Monotonic Compressive Strength of Advanced Ceramics at Ambient Temperature*. West Conshohocken, PA: ASTM International.
7. **Zhang, B., & Yin, S.** (2020). *A Review of Ultrasonic Assisted Electrolytic In-Process Dressing (UA-ELID) Grinding: Principles, Wheel Topography and Surface Integrity*. Journal of Manufacturing Processes, 58, 1205–1222.
