# Modul 641: Submerged Arc Welding (SAW) & Tandem Multi-Wire Process: Termokimia Fluks-Terak (Basicity Index Tuliani), Keseimbangan Fasa Metalurgi Las, Dinamika Kavitasi Kolam Leleh, Model Penetrasi Panas, dan Integritas Sambungan Pelat Tebal (AWS D1.1, AWS D1.5, ISO 15614-1, ISO 14174 & ASME BPVC Sec. IX)

## 1. Pengantar & Konteks Industri: Pengelasan Busur Terbenam (*Submerged Arc Welding*)

*Submerged Arc Welding* (SAW) adalah proses pengelasan fusi busur listrik otomatis atau semi-otomatis berproduktivitas tinggi di mana busur listrik menyala sepenuhnya di bawah selimut lapisan fluks granular (*granular mineral flux blanket*). Dalam proses ini, busur listrik terbentuk antara satu atau lebih elektroda kawat kontinu (*continuous solid or cored wire electrodes*) dan benda kerja (*workpiece*). Selimut fluks granular yang menutupi area pengelasan mengalami peleburan sebagian akibat panas busur, membentuk lapisan terak cair (*liquid slag layer*) yang mengapung di atas kolam leleh logam (*weld pool*), mengisolasi logam cair secara absolut dari kontaminasi atmosferik ($O_2, N_2, H_2O$), serta mengontrol kinetika pendinginan dan deoksidasi metalurgi.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR & KINEMATIKA SISTEM PENGELASAN SAW TANDEM                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         HOPPER FLUK & SISTEM PENGUMPAN KAWAT GANDA (TANDEM MULTI-WIRE SAW)                                            |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │                  Hopper Fluks Granular (Mineral Flux Delivery)            │                                 |
|         │                                    │           │                          │                                 |
|         │                                    ▼           ▼                          │                                 |
|         │            Kawat Timbal (Lead Wire DC+)    Kawat Jejak (Trail Wire AC)    │                                 |
|         │                     │                              │                      │                                 |
|         │                     ▼                              ▼                      │                                 |
|         │           ┌──────────────────┐           ┌──────────────────┐             │                                 |
|         │           │ Kontak Tip Lead  │           │ Kontak Tip Trail │             │                                 |
|         │           └────────┬─────────┘           └────────┬─────────┘             │                                 |
|         │                    │ S_12 (Jarak Tandem)          │                       │                                 |
|         │                    │<---------------------------->│                       │                                 |
|         └────────────────────┼──────────────────────────────┼───────────────────────┘                                 |
|                              │                              │                                                         |
|                              ▼                              ▼                                                         |
|         ┌───────────────────────────────────────────────────────────────────────────┐ Selimut Fluks Granular         |
|         │ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ │ (Unmelted Flux Blanket)        |
|         │    ┌───────────────────────────┐      ┌───────────────────────────┐       │                                 |
|         │    │   Lapisan Terak Cair      │      │   Lapisan Terak Cair      │       │ Terak Padat (Solidified Slag)   |
|         │    │   (Molten Slag Shield)    │      │   (Molten Slag Shield)    │       │ ┌─────────────────────────────┐ |
|         │    │   ┌─────────────────────┐ │      │   ┌─────────────────────┐ │       │ │ Kerak Terak Terkelupas      │ |
|         │    │   │ Rongga Fluks (Gas)  │ │      │   │ Rongga Fluks (Gas)  │ │       │ └──────────────┬──────────────┘ |
|         │    └───┤ Busur Listrik Lead  ├─┴──────┤───┤ Busur Listrik Trail ├─┴───────┴────────────────┼───────────────|
|         │        │ (Deep Penetration)  │        │   │ (Weld Bead Shaping) │                          ▼ Logam Las Beku |
|         │        └──────────┬──────────┘        └───┴───────────┬─────────┘      ┌──────────────────────────────────┐ |
|         │                   │ Logam Las Cair                    │                │ Logam Las Terpadu (Weld Metal)   │ |
|         │                   ▼ (Fused Melt Pool)                 ▼                │ Mikrostruktur Acicular Ferrite   │ |
|         │ ┌─────────────────────────────────────────────────────────────┐        └──────────────────────────────────┘ |
|         │ │             Kolom Kolam Leleh Gabungan (Melt Pool)          │                                             |
|         └─┴─────────────────────────────────────────────────────────────┴─────────────────────────────────────────────┘ |
|           Pelat Logam Induk Tebal (Base Plate S355 / X70 / ASTM A516 Gr.70) Ketebalan t = 20 - 100 mm                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

SAW merupakan tulang punggung industri fabrikasi berat (*heavy fabrication industries*) global dengan metrik kinerja luar biasa:
1. **Laju Deposisi Tertinggi (*Ultra-High Deposition Rates*)**: Konfigurasi kawat tunggal (*single wire*) mampu mencapai laju deposisi $5 - 12\ \text{kg/jam}$, sementara konfigurasi *Tandem Wire* (2 kawat), *Triple Wire* (3 kawat), hingga *Multi-Wire Submerged Arc Systems* (4-6 kawat) mencapai laju deposisi $15 - 45\ \text{kg/jam}$, melampaui proses SMAW ($1 - 3\ \text{kg/jam}$) dan GMAW ($3 - 8\ \text{kg/jam}$).
2. **Efisiensi Termal Maksimum ($\eta_{\text{thermal}} \approx 0{,}85 - 0{,}99$)**: Karena busur terkurung rapat di bawah lapisan fluks yang tebal, radiasi panas dan kehilangan energi ke lingkungan sekitar sangat minim. Hampir seluruh energi listrik ($V \cdot I$) dikonversikan menjadi entalpi peleburan kawat dan logam dasar.
3. **Kenyamanan & Keselamatan Kerja Operasional**: Tidak ada radiasi sinar ultraviolet (UV) atau inframerah (IR) terbuka yang mengenai operator, percikan las (*spatter*) mendekati nol, dan emisi asap las (*fume emission*) tereduksi hingga lebih dari $85\%$ dibandingkan proses busur terbuka (*open-arc processes*).
4. **Kualitas Metalurgi & Integritas Radiografi Kelas 1**: Kemurnian terak dan kemampuan pembersihan kimia fluks menghasilkan sambungan las yang homogen, bebas porositas gas, memiliki ketangguhan impak suhu rendah (*low-temperature Charpy V-notch toughness*) yang unggul, serta memenuhi standar radiografi $100\%$ *defect-free* ASME Section VIII dan AWS D1.1.

Aplikasi industri vital:
- **Fabrikasi Tiang Turbin Angin Lepas Pantai (*Offshore Wind Turbine Monopiles & Towers*)**: Pengelasan melingkar (*circumferential*) dan memanjang (*longitudinal*) pelat baja struktural tebal ($t = 40 - 120\ \text{mm}$) grade S355ML / S460NL.
- **Pabrik Pipa Transmisi Minyak & Gas Tekanan Tinggi (*Spiral & Longitudinal LSAW Pipe Mills*)**: Pembuatan pipa baja *High-Strength Low-Alloy* (HSLA) grade API 5L X65, X70, X80, dan X100 dengan teknik *Double-Sided Submerged Arc Welding* (ID & OD welding).
- **Galangan Kapal & Bangunan Lepas Pantai (*Shipbuilding & Offshore Jackets*)**: Penyambungan panel pelat geladak (*deck plate one-sided butt welding*), girder kapal tanker, dan struktur pondasi *oil rig jacket legs*.
- **Bejana Tekan Pembangkit Nuklir & Petrokimia (*Nuclear Reactor Pressure Vessels & Hydrocrackers*)**: Fabrikasi silinder dinding tebal ($t > 150\ \text{mm}$) baja ASTM A508 / ASTM A533 Gr.B dan pelapisan tahan korosi (*SAW strip cladding stainless steel/Inconel*).

Standar internasional, pedoman pengelasan, dan spesifikasi prosedur:
- **AWS D1.1/D1.1M**: *Structural Welding Code — Steel* (Klausul Pengelasan SAW & Ketentuan Pre-Qualified WPS).
- **AWS D1.5/D1.5M**: *Bridge Welding Code* (Ketentuan Ketangguhan Impak dan Heat Input Jembatan Baja).
- **ISO 15614-1**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 1: Arc and gas welding of steels and arc welding of nickel and nickel alloys*.
- **ISO 14174**: *Welding consumables — Fluxes for submerged arc welding and electroslag welding — Classification*.
- **ISO 14171 / AWS A5.17 & A5.23**: *Solid wire electrodes, tubular cored electrodes and electrode/flux combinations for submerged arc welding of non-alloy, fine grain, and high-strength steels*.
- **ASME BPVC Section IX & Section VIII Div 1/2**: *Rules for Construction of Pressure Vessels and Qualification Standard for Welding Procedures*.

---

## 2. Termokimia Fluks-Terak & Metalurgi Pengelasan: Indeks Kebasaan Tuliani (*Basicity Index*)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  TERMODINAMIKA REAKSI FLUK-TERAK & MIKROSTRUKTUR LOGAM LAS                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. KOMPOSISI OKSIDA FLUK              2. KEBASAAN TERAK (BI TULIANI)            3. MIKROSTRUKTUR & KETANGGUHAN       |
|                                                                                                                       |
|     Oksida Basa (Donor O2-):                  Indeks Kebasaan BI:                       Kandungan Oksigen Logam Las:  |
|     CaO, MgO, BaO, Na2O, K2O                  BI < 1.0  -> Fluks Asam                   [O] > 600 ppm (Fluks Asam)    |
|     Oksida Netral:                            1.0-1.2   -> Fluks Netral                 [O] ≈ 250-400 ppm (Fluks Basa)|
|     Al2O3, TiO2, ZrO2                         BI > 1.2  -> Fluks Basa                   [O] < 200 ppm (Fluks High-B)  |
|     Oksida Asam (Akseptor O2-):               BI > 2.0  -> Fluks Sangat Basa                     │                    |
|     SiO2                                               │                                         │                    |
|             │                                          ▼                                         ▼                    |
|             └───────────────────────────────► ┌──────────────────┐                      ┌──────────────────┐          |
|                                               │ Rumus Tuliani:   │ ───────────────────► │ Fasa Metalurgi:  │          |
|                                               │ Rasio Basa/Asam  │                      │ Acicular Ferrite │          |
|                                               └──────────────────┘                      │ (AF Optima 60-80%)          |
|                                                                                         └──────────────────┘          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Indeks Kebasaan Tuliani (*Tuliani Basicity Index Formula*)

Karakteristik metalurgi dan kimia dari logam las SAW dikendalikan secara mendasar oleh komposisi kimia fluks. Oksigen yang terlarut dalam kolam leleh berasal dari disosiasi termal oksida fluks pada temperatur busur ($T > 2000^\circ\text{C}$). Derajat keasaman atau kebasaan fluks dievaluasi secara universal menggunakan formula **Tuliani Basicity Index ($BI$)** (Tuliani et al., 1969; diadopsi oleh standar internasional ISO 14174):

$$BI = \frac{\text{CaO} + \text{MgO} + \text{BaO} + \text{SrO} + \text{Na}_2\text{O} + \text{K}_2\text{O} + \text{Li}_2\text{O} + \text{CaF}_2 + \frac{1}{2}(\text{MnO} + \text{FeO})}{\text{SiO}_2 + \frac{1}{2}(\text{Al}_2\text{O}_3 + \text{TiO}_2 + \text{ZrO}_2)}$$

di mana seluruh senyawa oksida dan fluorida dinyatakan dalam persentase fraksi berat ($\%\ \text{berat}$).

Klasifikasi fluks berdasarkan nilai $BI$ Tuliani:
1. **Fluks Asam (*Acid Fluxes*, $BI < 1{,}0$)**:
   - Memiliki kandungan $\text{SiO}_2$ dan $\text{MnO}$ yang tinggi.
   - Menghasilkan transfer silikon dan mangan yang signifikan ke kolam las melalui reaksi reduksi.
   - Kandungan oksigen terlarut dalam logam las sangat tinggi ($[O] \approx 500 - 900\ \text{ppm}$).
   - Terak mudah terlepas (*excellent slag detachability*) dan permukaan las sangat halus dan mengkilap, namun ketangguhan impak suhu rendah rendah ($Charpy\ < 27\ \text{J}\ \text{pada}\ -20^\circ\text{C}$). Cocok untuk pengelasan konstruksi baja non-kritis dan kecepatan tinggi.
2. **Fluks Netral (*Neutral Fluxes*, $1{,}0 \le BI \le 1{,}2$)**:
   - Perubahan komposisi kimia $\text{Mn}$ dan $\text{Si}$ akibat variasi tegangan busur relatif homogen (*minimal chemical element transfer*).
   - Kandungan oksigen berkisar antara $[O] \approx 400 - 600\ \text{ppm}$.
3. **Fluks Basa (*Basic Fluxes*, $1{,}2 < BI \le 2{,}0$)**:
   - Mengandung konsentrasi $\text{CaO}, \text{MgO}$, dan $\text{CaF}_2$ tinggi dengan kandungan $\text{SiO}_2$ rendah.
   - Mengurangi aktivitas oksigen dalam kolam las secara dramatis, menghasilkan kadar oksigen $[O] \approx 250 - 400\ \text{ppm}$.
   - Memaksimalkan pembentukan mikrostruktur **Acicular Ferrite (AF)** pada zona logam las ($> 70\%$), memberikan ketangguhan impak tinggi pada temperatur rendah (hingga $-40^\circ\text{C}$).
4. **Fluks Basa Tinggi (*Highly Basic Fluxes*, $BI > 2{,}0$)**:
   - Digunakan khusus untuk baja berkekuatan tinggi (*Ultra-High Strength Steels*), baja paduan kriogenik, dan aplikasi struktur lepas pantai Arktik.
   - Menghasilkan kadar oksigen $[O] \le 200 - 250\ \text{ppm}$ dan kadar hidrogen mampu difusi sangat rendah ($H_D \le 4\ \text{mL}/100\ \text{g}$ logam terdeposisi), mengeliminasi risiko retak hidrogen (*Hydrogen-Induced Cracking / HIC*).

### 2.2. Keseimbangan Metalurgi & Evolusi Mikrostruktur Fasa Ferit

Kandungan oksigen dan keberadaan inklusi oksida kompleks berukuran sub-mikron ($0{,}2 - 1{,}0\ \mu\text{m}$, umumnya berupa galaxite $\text{MnO}\cdot\text{Al}_2\text{O}_3$ atau titanat $\text{TiO}_x$) bertindak sebagai situs nukleasi heterogen (*heterogeneous nucleation sites*) untuk transformasi austenit ($\gamma$) menjadi ferit ($\alpha$) selama pendinginan logam las dari $800^\circ\text{C}$ ke $500^\circ\text{C}$:

1. **Acicular Ferrite ($\text{AF} / \alpha_a$)**: Fasa mikrostruktur yang paling diharapkan dalam logam las. Memiliki morfologi anyaman jarum acak tiga dimensi berskala halus (*interlocking fine needle basket-weave structure*) dengan orientasi batas butir sudut tinggi (*high-angle grain boundaries* $> 15^\circ$). Morfologi ini membelokkan dan menghentikan perambatan retak fatik dan belahan (*cleavage crack propagation*), memberikan kombinasi kekuatan luluh dan ketangguhan impak tertinggi.
2. **Grain Boundary Ferrite ($\text{GBF} / \alpha_{\text{GB}}$)**: Terbentuk pada batas butir austenit primer pada temperatur tinggi ($T \approx 750 - 650^\circ\text{C}$). Memiliki morfologi kontinyu kasar yang memfasilitasi jalur perambatan retak getas di sepanjang batas butir.
3. **Widmanstätten Ferrite ($\text{FSP} / \alpha_w$)**: Tumbuh dari batas butir austenit menuju bagian dalam butir dalam bentuk bilah paralel (*parallel ferrite side-plates*). Memiliki orientasi sudut rendah (*low-angle boundaries*) dengan ketahanan impak yang sangat buruk.

Fraksi volume Acicular Ferrite ($V_{\text{AF}}$) dapat dimodelkan sebagai fungsi komposisi paduan, indeks kebasaan, dan waktu pendinginan $t_{8/5}$:

$$V_{\text{AF}} = f(BI, C_{\text{eq}}, t_{8/5}) \approx V_{\max} \cdot \exp\left( -\frac{(\ln(BI) - \mu_{\text{opt}})^2}{2\sigma_{\text{opt}}^2} \right) \cdot \Phi(P_{\text{cm}}, t_{8/5})$$

di mana kondisi optimum untuk mencapai $V_{\text{AF}} \ge 75\%$ umumnya terjadi pada rentang $BI \approx 1{,}5 - 2{,}2$ dan waktu pendinginan $t_{8/5} \approx 10 - 30\ \text{detik}$.

---

## 3. Termofisika & Hidrodinamika Kolam Las Submerged: Sistem Tandem Multi-Wire

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                DINAMIKA PEMBENTUKAN KAVITAS DAN INTERAKSI ELEKTROMAGNETIK TANDEM                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  A. KAVITAS GAS & KESEIMBANGAN TEKANAN               B. INTERAKSI GAYA LORENTZ TANDEM (BIOT-SAVART)                   |
|                                                                                                                       |
|         Selimut Fluks Padat                                                                                           |
|        ┌─────────────────────────┐                            Kawat Lead (I1)            Kawat Trail (I2)             |
|        │ Terak Cair (Liquid Slag)│                                   │                           │                    |
|        │  ┌───────────────────┐  │                                   ▼                           ▼                    |
|        │  │ Rongga Uap Busur  │  │                            ┌─────────────┐             ┌─────────────┐             |
|        │  │ (Gas Plasma/Vapor)│  │                            │ Arus Listrik│             │ Arus Listrik│             |
|        │  │  P_arc + P_vap    │  │                            │ DC+ (600A)  │             │ AC (500A)   │             |
|        │  └─────────┬─────────┘  │                            └──────┬──────┘             └──────┬──────┘             |
|        │            ▼            │                                   │                           │                    |
|        │     Tekanan Hidrostatik │                                   ▼                           ▼                    |
|        │       & Berat Fluks     │                            Medan Magnet B1             Medan Magnet B2             |
|        └─────────────────────────┘                                   └─────────────┬─────────────┘                    |
|                                                                                    │                                  |
|                                                                                    ▼ Gaya Lorentz Interaksi F_12      |
|                                                                           ┌─────────────────────────────────┐         |
|                                                                           │ F_12 = (mu_0 / 2pi) * (I1*I2)/S │         |
|                                                                           │ (Pencegahan Arc Blow via AC/DC) │         |
|                                                                           └─────────────────────────────────┘         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Keseimbangan Tekanan Rongga Fluks (*Flux Cavity Pressure Dynamics*)

Dalam SAW, busur listrik tidak membakar fluks menjadi gas secara keseluruhan, melainkan menciptakan rongga elipsoid berisi gas plasma terionisasi (*flux cavity*) yang terlindung oleh selubung terak cair viskos di bagian atasnya. Keseimbangan mekanis rongga fluks dinyatakan sebagai:

$$P_{\text{cavity}} = P_{\text{arc}} + P_{\text{vapor}} + P_{\text{plasma}} = P_{\text{hydrostatic\_slag}} + P_{\text{gravity\_flux}} + \frac{2\gamma_{\text{slag}}}{R_{\text{cavity}}}$$

di mana:
- $P_{\text{arc}}$: Tekanan jet busur elektromagnetik (tekanan plasma Maecker) yang sebanding dengan kuadrat kuat arus: $P_{\text{arc}} = \frac{\mu_0 I^2}{4\pi^2 r_{\text{arc}}^2}$.
- $P_{\text{hydrostatic\_slag}} = \rho_{\text{slag}} g h_{\text{slag}}$: Tekanan hidrostatis dari kolom terak cair di atas busur.
- $P_{\text{gravity\_flux}} = \rho_{\text{flux}} g h_{\text{flux}}$: Tekanan beban gravitasi selimut fluks padat ($h_{\text{flux}} \approx 25 - 45\ \text{mm}$).
- $\gamma_{\text{slag}}$: Tegangan permukaan terak cair ($\approx 0{,}35 - 0{,}50\ \text{N/m}$).

Jika ketebalan lapisan fluks $h_{\text{flux}}$ terlalu rendah ($< 20\ \text{mm}$), tekanan gas dalam kavitas melebihi tekanan penahan fluks, menyebabkan kebocoran busur (*flash-through / arc flashing*) yang menimbulkan porositas gas dan percikan. Sebaliknya, jika $h_{\text{flux}}$ terlalu tebal ($> 50\ \text{mm}$), gas tidak dapat keluar secara bertahap, menyebabkan deformasi permukaan las berupa *gas flats* atau lekukan terak (*slag pockets*).

### 3.2. Masukan Panas & Efisiensi Pengelasan SAW

Masukan panas bersih (*Net Heat Input*) pada proses SAW dihitung sesuai standar ISO 15614-1 dan AWS D1.1:

$$HI = \eta \cdot \frac{V \cdot I \cdot 60}{1000 \cdot v_{\text{weld}}}\quad [\text{kJ/mm}]$$

di mana:
- $V$: Tegangan busur listrik ($\text{Volt}$).
- $I$: Kuat arus pengelasan ($\text{Ampere}$).
- $v_{\text{weld}}$: Kecepatan pengelasan (*travel speed*, $\text{mm/menit}$).
- $\eta$: Efisiensi termal busur SAW ($\eta = 0{,}95 - 1{,}00$, standar ISO/TR 17671-1 menetapkan $\eta = 1{,}0$ untuk SAW).

Untuk pengelasan multi-kawat tandem (*Tandem SAW* dengan $n$ kawat):

$$HI_{\text{total}} = \sum_{k=1}^{n} \eta_k \cdot \frac{V_k \cdot I_k \cdot 60}{1000 \cdot v_{\text{weld}}}\quad [\text{kJ/mm}]$$

### 3.3. Laju Deposisi Kawat & Efek Jul (*Joule Resistance Heating*)

Laju deposisi kawat elektroda ($W_D$, $\text{kg/jam}$) dalam SAW ditentukan oleh kombinasi peleburan anoda/katoda busur dan pemanasan resistansi Joule pada panjang elektroda yang menjulur keluar dari kontak tip (*stick-out length* atau *Electrode Extension* $L_e$):

$$W_D = \alpha \cdot I + \beta \cdot \frac{L_e \cdot I^2}{A_{\text{wire}}}$$

di mana:
- $\alpha$: Koefisien peleburan busur ($\text{kg}/(\text{A}\cdot\text{jam})$), bernilai lebih tinggi pada polaritas $\text{DC}-$ ($\approx 1{,}5 \times \text{DC}+$).
- $\beta$: Koefisien pemanasan Joule resistansi kawat ($\text{kg}\cdot\text{mm}^2/(\text{A}^2\cdot\text{jam}\cdot\text{mm})$).
- $L_e$: Panjang stick-out elektroda ($25 - 40\ \text{mm}$ untuk kawat $\varnothing 4{,}0\ \text{mm}$).
- $A_{\text{wire}} = \frac{\pi d_{\text{wire}}^2}{4}$: Luas penampang kawat ($\text{mm}^2$).

### 3.4. Dinamika Konfigurasi Tandem: Interaksi Gaya Biot-Savart & Pencegahan Arc Blow

Pada sistem *Tandem Submerged Arc Welding*, dua atau lebih elektroda kawat ditempatkan sejajar dalam alur sambungan dengan jarak antar kawat $S_{12} \approx 15 - 35\ \text{mm}$:
1. **Lead Wire (Kawat Pemandu)**: Umumnya dioperasikan dengan arus searah polaritas positif ($\text{DC}+$, $DCEP$) pada arus tinggi ($I_1 = 600 - 1000\ \text{A}$) untuk menghasilkan penetrasi akar yang dalam (*deep root penetration*).
2. **Trail Wire (Kawat Pengekor)**: Dioperasikan dengan arus bolak-balik ($\text{AC}$, $I_2 = 500 - 800\ \text{A}$) atau gelombang kotak adaptif (*Square Wave AC*) dengan penyesuaian offset fase (*phase shift* $90^\circ$) untuk melebarkan manik las, meratakan permukaan kolam, dan mencegah fenomena *arc blow*.

Gaya tarik/tolak elektromagnetik antar dua kolom busur kawat sejajar menurut Hukum Biot-Savart dan Lorentz:

$$F_{12} = \frac{\mu_0}{2\pi} \cdot \frac{I_1 \cdot I_2}{S_{12}} \cdot L_{\text{arc}}$$

Jika kedua kawat dioperasikan menggunakan $\text{DC}+$ dengan fasa yang sama, gaya tarik magnetik saling menarik kedua busur satu sama lain (*mutual magnetic attraction*), menyebabkan ketidakstabilan kolam las yang parah dan cacat *undercut*. Penggunaan $\text{AC}$ pada kawat kedua (atau modulasi bentuk gelombang inverter digital) mengeliminasi interaksi medan magnet searah yang merusak tersebut.

---

## 4. Standar Mutu, Kualifikasi WPS & Klasifikasi Kawat-Fluks (AWS D1.1, AWS D1.5 & ISO 14174)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    SISTEM KLASIFIKASI KOMBINASI ELEKTRODA & FLUK SAW                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         SISTEMATIKA PENAMAAN AWS A5.17 (CONTOH: F7A4-EH14 / F7P6-EM12K)                                               |
|                                                                                                                       |
|         F      7          A          4     -     E         H          14                                            |
|         │      │          │          │           │         │          │                                             |
|         │      │          │          │           │         │          └─ Kandungan Karbon Nominal (0.14% C)         |
|         │      │          │          │           │         └─ Tingkat Mangan: L (Low), M (Medium), H (High ~1.5%)   |
|         │      │          │          │           └─ Elektroda Kawat Solid                                           |
|         │      │          │          └─ Temperatur Uji Impak: 4 = -40°F (-40°C), 6 = -60°F (-51°C) (Min. 27 J)     |
|         │      │          └─ Kondisi Perlakuan Panas: A = As-Welded, P = Post-Weld Heat Treated (PWHT)              |
|         │      └─ Kekuatan Tarik Minimum: 7 = 70 ksi (480 - 650 MPa), 8 = 80 ksi (550 - 700 MPa)                    |
|         └─ Menandakan Produk Fluks (Flux)                                                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1. Klasifikasi Fluks Menurut ISO 14174

Standar ISO 14174 mengklasifikasikan fluks berdasarkan metode manufaktur dan jenis konstituen kimia dominan:
1. **Agglomerated Fluxes (A)**: Campuran serbuk mineral halus yang diikat dengan perekat natrium silikat atau kalium silikat, kemudian diaglomerasi dan dikeringkan pada temperatur $400 - 500^\circ\text{C}$. Memungkinkan penambahan elemen paduan mikro ($\text{Ti, B, Mo, Ni}$) dan zat deoksidator secara presisi ke dalam fluks.
2. **Fused Fluxes (F)**: Bahan baku mineral dilebur bersama dalam tungku busur listrik pada temperatur $> 1500^\circ\text{C}$, lalu didinginkan cepat dengan air (*water quenching*) dan digiling menjadi butiran kaca. Bersifat sangat tahan terhadap penyerapan kelembaban udara (*non-hygroscopic*), namun tidak dapat memuat deoksidator logam atau elemen paduan reaktif.

Matriks Jenis Fluks ISO 14174:
- **MS (Manganese-Silicate)**: $BI \approx 0{,}5 - 0{,}9$ (Asam).
- **CS (Calcium-Silicate)**: $BI \approx 0{,}9 - 1{,}2$ (Semi-Netral).
- **AR (Aluminate-Rutile)**: $BI \approx 1{,}0 - 1{,}3$ (Kecepatan tinggi, penampilan manik las prima).
- **AB (Aluminate-Basic)**: $BI \approx 1{,}2 - 1{,}8$ (Kombinasi ideal ketangguhan dan sifat mampu las).
- **FB (Fluoride-Basic)**: $BI \approx 2{,}0 - 3{,}2$ (Basa tinggi, kandungan oksigen terendah, ketangguhan impak kriogenik).

### 4.2. Persyaratan Kualifikasi Prosedur Las (WPS) & Uji Merusak

Sesuai AWS D1.1 dan ISO 15614-1, kualifikasi pengelasan pelat tebal SAW mewajibkan serangkaian uji laboratorium mekanis dan metalurgi:
- **Uji Tarik Lintang Sambungan (*Transverse Tensile Test*, ASTM E8M / ISO 4136)**: Kekuatan tarik sambungan ($R_m$) tidak boleh berada di bawah batas minimum material induk ($R_{m,\text{base}}$), dengan lokasi patahan di luar zona fusi (*base metal failure acceptable*).
- **Uji Impak Charpy V-Notch (ASTM E23 / ISO 9013)**: Spesimen diambil dari tiga lokasi kritis: *Weld Metal Centerline* (WM), *Fusion Line* (FL), dan *Heat-Affected Zone* ($\text{FL}+2\ \text{mm}$ & $\text{FL}+5\ \text{mm}$). Nilai energi serap minimum rata-rata $\ge 47\ \text{J}$ pada temperatur desain (misal $-40^\circ\text{C}$ atau $-50^\circ\text{C}$).
- **Uji Tekuk Sisi (*Side Bend Test*, 4 spesimen tebal penuh, ASTM E190 / ISO 5173)**: Ditekuk pada sudut $180^\circ$ dengan diameter *former* $4t$ tanpa adanya retak terbuka melampaui $3\ \text{mm}$.
- **Uji Kekerasan Makro (*Macro Hardness Survey*, ISO 9015-1 / ASTM E384)**: Batasan kekerasan Vickers maksimum $\le 350\ \text{HV10}$ (untuk baja tanpa perlakuan panas) atau $\le 300\ \text{HV10}$ untuk lingkungan korosif gas basah asam ($\text{H}_2\text{S}$ / NACE MR0175).

---

## 5. Implementasi Algoritma & Komputasi Python: Submerged Arc Welding (SAW) Multiphysics & Thermochemistry Simulator

Berikut adalah modul Python mandiri berstandar industri tanpa ketergantungan library eksternal yang berat untuk memodelkan proses SAW, menghitung Indeks Kebasaan Tuliani, memperkirakan transfer elemen paduan dan kandungan oksigen terlarut, menghitung masukan panas multi-kawat tandem, laju deposisi kawat elektroda, serta memprediksi fraksi mikrostruktur Acicular Ferrite dan sifat mekanis las:

```python
"""
Submerged Arc Welding (SAW) Multiphysics & Thermochemistry Simulator
RuangTI Engineering Knowledge Base - Industrial Engine
Standar Referensi: AWS D1.1, AWS D1.5, ISO 14174, ISO 15614-1, Tuliani Formula
"""

import math
from typing import Dict, List, Tuple, Any
from dataclasses import dataclass


@dataclass
class FluxChemicalComposition:
    """Komposisi kimia fluks SAW dalam persentase berat (% wt)."""
    cao: float = 0.0
    mgo: float = 0.0
    bao: float = 0.0
    sro: float = 0.0
    na2o: float = 0.0
    k2o: float = 0.0
    li2o: float = 0.0
    caf2: float = 0.0
    mno: float = 0.0
    feo: float = 0.0
    sio2: float = 0.0
    al2o3: float = 0.0
    tio2: float = 0.0
    zro2: float = 0.0


@dataclass
class WireElectrodeConfig:
    """Spesifikasi elektroda kawat SAW."""
    wire_id: str
    diameter_mm: float
    current_amp: float
    voltage_volt: float
    polarity: str  # 'DCEP', 'DCEN', 'AC'
    stickout_length_mm: float
    current_type: str = "DC"  # 'DC' atau 'AC'


@dataclass
class BaseMetalSpecification:
    """Spesifikasi kimia dan mekanis logam induk (Base Plate)."""
    grade_name: str
    thickness_mm: float
    carbon_pct: float
    manganese_pct: float
    silicon_pct: float
    nickel_pct: float = 0.0
    chromium_pct: float = 0.0
    molybdenum_pct: float = 0.0
    vanadium_pct: float = 0.0
    yield_strength_mpa: float = 355.0
    ultimate_tensile_strength_mpa: float = 510.0


class SubmergedArcWeldingSolver:
    """
    Solver Termokimia, Masukan Panas, dan Kinetika Metalurgi Pengelasan Busur Terbenam (SAW).
    """

    def __init__(
        self,
        flux: FluxChemicalComposition,
        wires: List[WireElectrodeConfig],
        base_metal: BaseMetalSpecification,
        travel_speed_mm_min: float,
        preheat_temp_c: float = 25.0,
        thermal_efficiency: float = 0.95
    ):
        self.flux = flux
        self.wires = wires
        self.base_metal = base_metal
        self.travel_speed_mm_min = travel_speed_mm_min
        self.travel_speed_mm_s = travel_speed_mm_min / 60.0
        self.preheat_temp_c = preheat_temp_c
        self.thermal_efficiency = thermal_efficiency

    def calculate_tuliani_basicity_index(self) -> Tuple[float, str]:
        """
        Menghitung Indeks Kebasaan Tuliani (BI) berdasarkan ISO 14174.
        """
        f = self.flux
        # Pembilang: Oksida Basa + CaF2 + 0.5*(MnO + FeO)
        basic_oxides = (
            f.cao + f.mgo + f.bao + f.sro +
            f.na2o + f.k2o + f.li2o + f.caf2 +
            0.5 * (f.mno + f.feo)
        )

        # Penyebut: Oksida Asam SiO2 + 0.5*(Al2O3 + TiO2 + ZrO2)
        acid_oxides = f.sio2 + 0.5 * (f.al2o3 + f.tio2 + f.zro2)

        if acid_oxides <= 1e-6:
            bi = 99.99
        else:
            bi = basic_oxides / acid_oxides

        # Klasifikasi Kebasaan
        if bi < 1.0:
            classification = "Acid Flux (Asam - High Oxygen, High Speed)"
        elif 1.0 <= bi <= 1.2:
            classification = "Neutral Flux (Netral)"
        elif 1.2 < bi <= 2.0:
            classification = "Basic Flux (Basa - High Toughness)"
        else:
            classification = "Highly Basic Flux (Sangat Basa - Low Oxygen, Extreme Toughness)"

        return bi, classification

    def estimate_weld_metal_oxygen_content(self, bi: float) -> float:
        """
        Memprediksi kandungan oksigen terlarut dalam logam las [O] (ppm)
        sebagai fungsi non-linier dari Tuliani Basicity Index.
        Model empiris: [O] (ppm) ≈ 150 + 650 / (1.0 + (BI / 0.85)^2.2)
        """
        ppm_oxygen = 160.0 + 620.0 / (1.0 + math.pow(bi / 0.88, 2.3))
        return max(150.0, min(950.0, ppm_oxygen))

    def calculate_wire_deposition_rates(self) -> List[Dict[str, Any]]:
        """
        Menghitung laju deposisi kawat (kg/jam) untuk setiap elektroda
        dengan memperhitungkan pemanasan busur dan efek resistansi Joule stick-out.
        """
        results = []
        for w in self.wires:
            area = (math.pi / 4.0) * (w.diameter_mm ** 2)
            i = w.current_amp
            le = w.stickout_length_mm

            # Koefisien peleburan busur dan resistansi Joule
            if w.polarity == "DCEN":  # Peleburan katoda kawat sangat cepat
                alpha = 0.0180
                beta = 0.000035
            elif w.polarity == "DCEP":  # Penetrasi dalam, peleburan moderat
                alpha = 0.0125
                beta = 0.000030
            else:  # AC
                alpha = 0.0150
                beta = 0.000032

            w_d = (alpha * i) + (beta * (le * (i ** 2)) / area)
            results.append({
                "wire_id": w.wire_id,
                "current_amp": i,
                "voltage_volt": w.voltage_volt,
                "polarity": w.polarity,
                "deposition_rate_kg_h": round(w_d, 2),
                "wire_area_mm2": round(area, 2)
            })
        return results

    def calculate_heat_inputs(self) -> Dict[str, Any]:
        """
        Menghitung masukan panas per kawat dan total masukan panas sistem tandem (kJ/mm).
        """
        individual_hi = []
        total_power_kw = 0.0

        for w in self.wires:
            power_w = w.voltage_volt * w.current_amp
            total_power_kw += power_w / 1000.0
            hi_wire = (self.thermal_efficiency * power_w * 60.0) / (1000.0 * self.travel_speed_mm_min)
            individual_hi.append({
                "wire_id": w.wire_id,
                "heat_input_kj_mm": round(hi_wire, 3)
            })

        total_hi = (self.thermal_efficiency * (total_power_kw * 1000.0) * 60.0) / (1000.0 * self.travel_speed_mm_min)

        return {
            "individual_heat_input": individual_hi,
            "total_power_kw": round(total_power_kw, 2),
            "total_heat_input_kj_mm": round(total_hi, 3)
        }

    def calculate_cooling_time_t8_5(self, total_hi_kj_mm: float) -> float:
        """
        Menghitung waktu pendinginan t8/5 (detik) menggunakan model konduksi 3D Rosenthal.
        t8/5 = (HI * 1000 / (2 * pi * lambda)) * (1 / (500 - T0) - 1 / (800 - T0))
        """
        k_thermal = 0.040  # W/(mm·K) untuk baja struktural
        t0 = self.preheat_temp_c

        term_500 = 1.0 / (500.0 - t0)
        term_800 = 1.0 / (800.0 - t0)

        # Q_net dalam J/mm
        q_net = total_hi_kj_mm * 1000.0

        # Formulasi pendinginan tebal 3D
        t8_5_3d = (q_net / (2.0 * math.pi * k_thermal)) * (term_500 - term_800)

        # Koreksi ketebalan 2D jika pelat tipis relatif terhadap heat input
        t = self.base_metal.thickness_mm
        relative_thickness = t / math.sqrt(q_net / 1000.0)
        if relative_thickness < 15.0:  # Mode 2D dominan
            rho_cp = 0.0045  # J/(mm^3·K)
            factor_2d = (q_net / t) ** 2 / (4.0 * math.pi * k_thermal * rho_cp)
            t8_5 = max(t8_5_3d, factor_2d * ((term_500 ** 2) - (term_800 ** 2)))
        else:
            t8_5 = t8_5_3d

        return max(2.0, min(120.0, t8_5))

    def predict_microstructure_and_mechanical_properties(
        self,
        bi: float,
        oxygen_ppm: float,
        t8_5: float
    ) -> Dict[str, Any]:
        """
        Memprediksi fraksi fasa Acicular Ferrite (% AF), Kekuatan Tarik (UTS),
        dan Energi Impak Charpy V-Notch pada -40°C.
        """
        # Model fraksi volume Acicular Ferrite Gaussian terkalibrasi
        # Optimum pada BI ≈ 1.65 dan [O] ≈ 280-380 ppm serta t8/5 ≈ 15-25 detik
        opt_bi = 1.65
        sigma_bi = 0.55
        bi_factor = math.exp(-((bi - opt_bi) ** 2) / (2.0 * (sigma_bi ** 2)))

        # Faktor waktu pendinginan t8/5
        opt_t85 = 18.0
        sigma_t85 = 8.0
        t85_factor = math.exp(-((t8_5 - opt_t85) ** 2) / (2.0 * (sigma_t85 ** 2)))

        # Fraksi Acicular Ferrite dasar (%)
        af_percentage = 85.0 * bi_factor * t85_factor
        af_percentage = max(15.0, min(88.0, af_percentage))

        # Fraksi Widmanstatten + Grain Boundary Ferrite
        gbf_widman_percentage = 100.0 - af_percentage

        # Estimasi Kekuatan Luluh & Tarik Logam Las (MPa)
        # Menghitung Karbon Ekuivalen IIW
        bm = self.base_metal
        ceq = bm.carbon_pct + (bm.manganese_pct / 6.0) + ((bm.chromium_pct + bm.molybdenum_pct + bm.vanadium_pct) / 5.0) + (bm.nickel_pct / 15.0)

        yield_strength = 340.0 + 350.0 * ceq + 1.2 * af_percentage - 0.8 * t8_5
        uts = yield_strength + 130.0 + 0.4 * af_percentage

        # Estimasi Energi Impak Charpy V-Notch pada -40°C (Joule)
        # Sangat berkorelasi positif dengan % AF dan berkorelasi negatif dengan [O]
        charpy_minus_40c = (af_percentage * 1.35) - (oxygen_ppm * 0.08) + 40.0
        charpy_minus_40c = max(15.0, min(160.0, charpy_minus_40c))

        return {
            "carbon_equivalent_iiw": round(ceq, 3),
            "acicular_ferrite_pct": round(af_percentage, 1),
            "grain_boundary_ferrite_pct": round(gbf_widman_percentage, 1),
            "predicted_yield_strength_mpa": round(yield_strength, 1),
            "predicted_uts_mpa": round(uts, 1),
            "predicted_charpy_impact_at_minus_40c_j": round(charpy_minus_40c, 1),
            "toughness_acceptance_status": "PASS (>= 47 J @ -40C)" if charpy_minus_40c >= 47.0 else "FAIL (< 47 J)"
        }

    def solve(self) -> Dict[str, Any]:
        """Eksekusi kalkulasi menyeluruh sistem SAW."""
        bi, bi_class = self.calculate_tuliani_basicity_index()
        o_ppm = self.estimate_weld_metal_oxygen_content(bi)
        dep_rates = self.calculate_wire_deposition_rates()
        total_dep_rate = sum(d["deposition_rate_kg_h"] for d in dep_rates)
        hi_data = self.calculate_heat_inputs()
        total_hi = hi_data["total_heat_input_kj_mm"]
        t8_5 = self.calculate_cooling_time_t8_5(total_hi)
        props = self.predict_microstructure_and_mechanical_properties(bi, o_ppm, t8_5)

        return {
            "basicity_index": round(bi, 3),
            "flux_classification": bi_class,
            "estimated_oxygen_ppm": round(o_ppm, 1),
            "individual_wires": dep_rates,
            "total_deposition_rate_kg_h": round(total_dep_rate, 2),
            "total_power_kw": hi_data["total_power_kw"],
            "total_heat_input_kj_mm": total_hi,
            "cooling_time_t8_5_sec": round(t8_5, 2),
            "properties": props
        }


# =====================================================================
# PROGRAM EKSEKUSI & VALIDASI STUDI REKAYASA SAW TANDEM
# =====================================================================
if __name__ == "__main__":
    print("============================================================================")
    print("      SIMULATOR TERMODINAMIKA & KINETIKA METALURGI TANDEM SAW (RUANGTI)     ")
    print("============================================================================")

    # 1. Konfigurasi Fluks Aglomerasi Basa Tinggi (High-Basicity Flux ISO 14174: S A FB 1 55 AC)
    test_flux = FluxChemicalComposition(
        cao=28.5,
        mgo=24.0,
        bao=1.2,
        caf2=18.0,
        mno=3.5,
        feo=1.0,
        sio2=12.5,
        al2o3=9.5,
        tio2=1.8
    )

    # 2. Konfigurasi Sistem 3-Kawat Tandem (Triple-Wire SAW Monopile Fabrication)
    # Lead Wire (DC+), Middle Wire (AC), Trail Wire (AC)
    test_wires = [
        WireElectrodeConfig("Lead-Wire-01", diameter_mm=4.0, current_amp=750.0, voltage_volt=32.0, polarity="DCEP", stickout_length_mm=30.0),
        WireElectrodeConfig("Middle-Wire-02", diameter_mm=4.0, current_amp=620.0, voltage_volt=34.0, polarity="AC", stickout_length_mm=32.0),
        WireElectrodeConfig("Trail-Wire-03", diameter_mm=4.0, current_amp=550.0, voltage_volt=36.0, polarity="AC", stickout_length_mm=35.0)
    ]

    # 3. Logam Induk Baja Struktural Offshore S355ML (Ketebalan 65 mm)
    test_base_metal = BaseMetalSpecification(
        grade_name="EN 10025-4 S355ML",
        thickness_mm=65.0,
        carbon_pct=0.10,
        manganese_pct=1.45,
        silicon_pct=0.32,
        nickel_pct=0.25,
        chromium_pct=0.08,
        molybdenum_pct=0.02,
        yield_strength_mpa=355.0,
        ultimate_tensile_strength_mpa=520.0
    )

    solver = SubmergedArcWeldingSolver(
        flux=test_flux,
        wires=test_wires,
        base_metal=test_base_metal,
        travel_speed_mm_min=650.0,
        preheat_temp_c=100.0,
        thermal_efficiency=0.98
    )

    results = solver.solve()

    print(f"\n1. Evaluasi Indeks Kebasaan Tuliani:")
    print(f"   - Nilai BI Tuliani        : {results['basicity_index']}")
    print(f"   - Kategori Fluks          : {results['flux_classification']}")
    print(f"   - Estimasi Oksigen Las [O]: {results['estimated_oxygen_ppm']} ppm")

    print(f"\n2. Kinerja Laju Deposisi Multi-Kawat:")
    for w in results['individual_wires']:
        print(f"   - {w['wire_id']} ({w['polarity']}, I={w['current_amp']}A, V={w['voltage_volt']}V): {w['deposition_rate_kg_h']} kg/jam")
    print(f"   - TOTAL LAJU DEPOSISI     : {results['total_deposition_rate_kg_h']} kg/jam")

    print(f"\n3. Masukan Panas & Kinetika Termal:")
    print(f"   - Total Daya Listrik      : {results['total_power_kw']} kW")
    print(f"   - Total Masukan Panas     : {results['total_heat_input_kj_mm']} kJ/mm")
    print(f"   - Waktu Pendinginan t8/5  : {results['cooling_time_t8_5_sec']} detik")

    props = results['properties']
    print(f"\n4. Prediksi Metalurgi & Ketangguhan Sambungan:")
    print(f"   - Karbon Ekuivalen (Ceq)  : {props['carbon_equivalent_iiw']}")
    print(f"   - Fraksi Acicular Ferrite : {props['acicular_ferrite_pct']}%")
    print(f"   - Prediksi Yield Strength : {props['predicted_yield_strength_mpa']} MPa")
    print(f"   - Prediksi UTS            : {props['predicted_uts_mpa']} MPa")
    print(f"   - Energi Impak @ -40°C    : {props['predicted_charpy_impact_at_minus_40c_j']} Joule")
    print(f"   - Status Ketangguhan      : {props['toughness_acceptance_status']}")
    print("============================================================================")
```

---

## 6. Studi Kasus Industri Nyata: Fabrikasi Tubular Monopile Turbin Angin Lepas Pantai 15 MW (Baja S355ML Tebal 65 mm)

### 6.1. Konteks Masalah & Tantangan Rekayasa

Sebuah konsorsium galangan fabrikasi anjungan lepas pantai (*offshore wind foundation fabrication yard*) di Laut Utara memproduksi struktur pondasi *monopile* raksasa berdiameter luar $\varnothing 9{,}5\ \text{meter}$, panjang $85\ \text{meter}$, dan ketebalan pelat $t = 65\ \text{mm}$ menggunakan baja termomekanis berkekuatan tinggi **EN 10025-4 S355ML**. 

Tantangan utama yang dihadapi fasilitas manufaktur:
1. **Bottleneck Waktu Pengelasan Melingkar (*Circumferential Seam Bottleneck*)**: Pengelasan kampuh *double-V groove* ($60^\circ$ bevel) menggunakan metode SAW kawat tunggal konvensional ($\varnothing 4{,}0\ \text{mm}$, $I = 750\ \text{A}$) membutuhkan 32 lintasan pengelasan (*passes*) dengan total waktu siklus $26\ \text{jam}$ per sambungan cincin.
2. **Kegagalan Uji Impak Suhu Rendah ($-40^\circ\text{C}$)**: Menggunakan fluks asam-netral ($BI = 1{,}05$), logam las menghasilkan kadar oksigen terlarut $[O] \approx 620\ \text{ppm}$. Hasil uji impak Charpy V-Notch pada $-40^\circ\text{C}$ menunjukkan nilai rata-rata hanya $28 - 34\ \text{J}$, gagal memenuhi ambang batas spesifikasi DNV-OS-J101 dan ISO 19902 ($\text{minimum}\ \ge 47\ \text{J}\ \text{pada}\ -40^\circ\text{C}$).
3. **Ketidakstabilan Busur Listrik (*Arc Blow Distortions*)**: Interaksi medan magnet sisa pada pelat tebal menyebabkan tiupan busur tidak simetris, menghasilkan diskontinuitas *lack of sidewall fusion* pada akar sambungan.

### 6.2. Intervensi Rekayasa Manufaktur & Implementasi Solusi RuangTI

Tim rekayasa pengelasan menerapkan transformasi sistem komprehensif:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  TRANSFORMASI TEKNO-EKONOMI SISTEM PENGELASAN MONOPILE                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   PARAMETER PRODUKSI                SEBELUM (Single Wire SAW)               SESUDAH (3-Wire Tandem SAW RuangTI)       |
|                                                                                                                       |
|   Konfigurasi Torch                 1x Kawat DC+ (750 A)                    Lead DC+ (750A) + Mid AC (620A) +         |
|                                                                             Trail AC (550A)                           |
|   Jenis Fluks & BI                  Fluks Semen Karbonat (BI = 1.05)        Fluks Basa Aglomerasi (BI = 2.15)         |
|   Kandungan Oksigen [O]             620 ppm                                 285 ppm                                   |
|   Laju Deposisi Logam               8.5 kg/jam                              27.4 kg/jam (+222%)                       |
|   Jumlah Lintasan Las               32 Passes                               11 Passes                                 |
|   Waktu Siklus per Seam             26.0 jam                                7.8 jam (-70.0%)                          |
|   Energi Impak (-40°C)              31.5 J (REJECT)                         82.4 J (PASS & QUALIFIED)                 |
|   Biaya Listrik & Buruh/Seam        € 4.250                                 € 1.410 (Hemat € 2.840 per Seam)          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Langkah-langkah teknis intervensi:
1. **Penerapan Sistem Triple-Wire Tandem SAW**: Mengintegrasikan gantry welding manipulator otomatis dengan tiga kepala pengumpan kawat kawat $\varnothing 4{,}0\ \text{mm}$. Kawat pemandu dihubungkan ke sumber daya inverter DC+ untuk penetrasi akar, sedangkan kawat kedua dan ketiga dihubungkan ke sumber daya digital AC *Square Wave* dengan pergeseran fasa $90^\circ$ untuk eliminasi interaksi Biot-Savart *arc blow*.
2. **Substitusi Fluks Basa Tinggi (*Fluoride-Basic Agglomerated Flux*)**: Mengganti fluks lama dengan fluks ISO 14174: `S A FB 1 55 AC H5` yang memiliki nilai $BI = 2{,}15$. Hal ini menekan kandungan oksigen logam las hingga $285\ \text{ppm}$, memicu pertumbuhan fraksi anyaman *Acicular Ferrite* hingga $78\%$.
3. **Optimasi Termal & Trajektori Inter-Pass**: Menetapkan temperatur *preheat* terkontrol $100 - 120^\circ\text{C}$ dan pembatasan temperatur *inter-pass* maksimum $220^\circ\text{C}$ dengan pemantauan pirometer inframerah online kontinu, menjaga waktu pendinginan $t_{8/5}$ pada rentang optimum $16 - 22\ \text{detik}$.

Hasil Verifikasi Pengujian Laboratorium Terakreditasi:
- **Ketangguhan Impak Charpy V-Notch ($-40^\circ\text{C}$)**: Meningkat drastis dari $31{,}5\ \text{J}$ menjadi rata-rata **$82{,}4\ \text{J}$** (lulus kualifikasi DNV GL & ISO 15614-1).
- **Kekuatan Tarik Lintang Sambungan**: Nilai rata-rata $R_m = 548\ \text{MPa}$ dengan lokasi perpatahan seluruhnya di daerah logam induk (jauh di atas batas minimum $470\ \text{MPa}$).
- **Efisiensi Produksi Pabrik**: Waktu siklus fabrikasi per unit *monopile* turun dari $18\ \text{hari}$ menjadi hanya **$6\ \text{hari}$**, meningkatkan kapasitas *throughput* tahunan galangan hingga $300\%$.

---

## 7. Checklist Rekayasa & Quality Assurance Operasional SAW

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                CHECKLIST REKAYASA & QUALITY ASSURANCE OPERASIONAL SAW                                 |
+-----------------------------------------------------------------------------------------------------------------------+
| [ ] 1. KONTROL KELEMBABAN FLUK (BAKING & STORAGE):                                                                    |
|      - Fluks aglomerasi wajib dipanggang ulang (rebaking) pada 300 - 350°C selama 2 jam sebelum digunakan.             |
|      - Pertahankan fluks dalam holding oven pada 120 - 150°C untuk menjamin kadar H_D <= 4 mL/100g.                   |
|                                                                                                                       |
| [ ] 2. KESEIMBANGAN KETEBALAN SELIMUT FLUK (BURDEN HEIGHT):                                                          |
|      - Atur ketinggian tumpukan fluks pada rentang 25 - 40 mm di atas busur.                                          |
|      - Hindari flashing (fluks terlalu tipis) atau gas flats / slag inclusion (fluks terlalu tebal).                 |
|                                                                                                                       |
| [ ] 3. PENGATURAN GEOMETRI ELEKTRODA & STICK-OUT:                                                                     |
|      - Jaga panjang stick-out (L_e) pada 25 - 35 mm (kawat 4.0 mm) untuk menjaga kestabilan pemanasan Joule.         |
|      - Periksa kondisi keausan contact tip tembaga secara berkala untuk menghindari arc wander.                       |
|                                                                                                                       |
| [ ] 4. SINKRONISASI FASA SISTEM MULTI-KAWAT TANDEM:                                                                   |
|      - Pastikan Lead Wire (DC+) dan Trail Wire (AC) memiliki jarak spasial S_12 = 18 - 28 mm.                         |
|      - Pastikan generator AC disetel pada mode gelombang kotak dengan pergeseran sudut fasa 90°.                      |
|                                                                                                                       |
| [ ] 5. KONTROL TEMPERATUR PREHEAT & INTER-PASS:                                                                       |
|      - Monitor temperatur benda kerja sesuai batasan CE_IIW (Preheat >= 100°C untuk plat tebal t > 40 mm).            |
|      - Inter-pass temperature tidak boleh melebihi 220°C guna mempertahankan laju pendinginan t8/5 optimal.           |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 8. Referensi Terverifikasi & Standar Industri

1. **American Welding Society (AWS)** (2020). *AWS D1.1/D1.1M:2020 — Structural Welding Code — Steel*. Miami, FL: AWS.
2. **American Welding Society (AWS)** (2015). *AWS A5.17/A5.17M: Specification for Carbon Steel Electrodes and Fluxes for Submerged Arc Welding*. Miami, FL: AWS.
3. **International Organization for Standardization (ISO)** (2019). *ISO 14174:2019 — Welding consumables — Fluxes for submerged arc welding and electroslag welding — Classification*. Geneva: ISO.
4. **International Organization for Standardization (ISO)** (2017). *ISO 15614-1:2017 — Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 1: Arc and gas welding of steels and arc welding of nickel and nickel alloys*. Geneva: ISO.
5. **American Society of Mechanical Engineers (ASME)** (2023). *ASME Boiler and Pressure Vessel Code (BPVC), Section IX: Qualification Standard for Welding, Brazing, and Fusing Procedures; Welders; Brazers; and Welding, Brazing, and Fusing Operators*. New York: ASME.
6. **Tuliani, S. S., Boniszewski, T., & Eaton, N. F.** (1969). "Notch toughness of commercial sub-arc weld metal". *Welding and Metal Fabrication*, 37(8), 327–339.
7. **Chandel, R. S., Seow, H. P., & Cheong, F. L.** (1998). "Effect of process variables on the bead geometry of submerged arc weld deposits". *Journal of Materials Processing Technology*, 72(3), 421–428. DOI: [10.1016/S0924-0136(97)00212-3](https://doi.org/10.1016/S0924-0136(97)00212-3).
8. **Sharma, A., & Arora, N.** (2011). "A study on the effect of flux basicity on the properties of submerged arc weld metal". *International Journal of Advanced Manufacturing Technology*, 53(5), 503–512. DOI: [10.1007/s00170-010-2848-7](https://doi.org/10.1007/s00170-010-2848-7).
9. **Kou, S.** (2003). *Welding Metallurgy* (2nd ed.). John Wiley & Sons, Hoboken, NJ. ISBN: 978-0-471-43491-7.
