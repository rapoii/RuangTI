# Modul 643: Creep Feed Grinding (CFG) & High-Efficiency Deep Grinding (HEDG): Termomekanika Kontak Busur, Model Partisi Panas Jaeger-Rowe, Energi Spesifik ($u_c$), Batas Fluks Kalor Hidrodinamika Coolant Burnout, dan Integritas Permukaan Sudu Turbin Superalloy Nikel (ISO 3002, CIRP & ASTM E8M)

## 1. Pengantar & Konteks Industri: Paradigma Penggerindaan Dalam (*Deep Grinding Technology*)

*Creep Feed Grinding* (CFG) dan *High-Efficiency Deep Grinding* (HEDG) adalah teknologi pemesinan abrasif tingkat lanjut (*advanced abrasive machining processes*) yang dirancang untuk menghasilkan laju pembuangan material tinggi (*high Material Removal Rate* / MRR) sekaligus mempertahankan toleransi dimensional mikron dan integritas permukaan superalloy yang sangat sensitif terhadap panas.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  ARSITEKTUR & KINEMATIKA PROSES PENGGERINDAAN DALAM (CFG & HEDG)                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         PENGGERINDAAN MERAYAP (CREEP FEED GRINDING / CFG)     PENGGERINDAAN DALAM EFISIENSI TINGGI (HEDG)             |
|         - Kedalaman potong tinggi: a_e = 1 - 30 mm             - Kedalaman potong tinggi: a_e = 1 - 10 mm              |
|         - Kecepatan benda kerja rendah: v_w = 0.1 - 10 mm/s    - Kecepatan benda kerja tinggi: v_w = 100 - 2000 mm/s   |
|         - Kecepatan roda gerinda standar: v_s = 20 - 45 m/s    - Kecepatan roda ultra-tinggi: v_s = 80 - 250 m/s (CBN) |
|         - Kontak busur sangat panjang: l_c = 10 - 50 mm        - Kontak busur panjang: l_c = 5 - 25 mm                 |
|                                                                                                                       |
|                             Roda Gerinda (Grinding Wheel)                                                             |
|                             Rotasi v_s (Arah Potong Up/Down-Cut)                                                      |
|                                       ┌──────────┐                                                                    |
|                                     ┌─┘          └─┐                                                                  |
|                                    ┌┘   Diameter   └┐                                                                 |
|                                   ┌┘      d_s       └┐                                                                |
|                                   │        ●         │                                                                |
|                                   └┐      O_s       ┌┘                                                                |
|                                    └┐              ┌┘                                                                 |
|                                     └─┐          ┌─┘                                                                  |
|                                       └────┬─────┘                                                                    |
|                                            │ Busur Kontak l_c = sqrt(a_e * d_e)                                       |
|             Nozel Fluida Pendingin         ▼                                                                          |
|             Tekanan Tinggi (HP Coolant) ┌─────────────────────────┐                                                   |
|             Jet P_c = 10 - 40 bar ──►   │ Zona Kontak Termomekanik│                                                   |
|                                         │ Fluks Panas q_w(x)      │ Kedalaman Aksial /                              |
|                                         └───────────┬─────────────┘ Potong Penuh a_e                                  |
|       Benda Kerja (Superalloy Inconel 718)          │               (1 - 25 mm)                                       |
|       ◄─────────────────────────────────────────────┴─────────────                                                    |
|                   Umpan Benda Kerja v_w                                                                               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Perbedaan mendasar antara Penggerindaan Konvensional (*Surface/Cylindrical Grinding*), CFG, dan HEDG terletak pada kombinasi parameter kedalaman potong (*depth of cut* $a_e$), kecepatan kerja benda (*workpiece speed* $v_w$), dan kecepatan periferal roda gerinda (*wheel speed* $v_s$):

1. **Penggerindaan Permukaan Konvensional (*Reciprocating Grinding*)**:
   - Kedalaman potong sangat dangkal ($a_e \approx 0{,}005 - 0{,}05\ \text{mm}$).
   - Kecepatan meja translasi bolak-balik tinggi ($v_w \approx 100 - 500\ \text{mm/s}$).
   - Panjang busur kontak sangat pendek ($l_c \approx 1 - 3\ \text{mm}$).
   - Membutuhkan puluhan hingga ratusan *passes* untuk membentuk profil geometris, rentan terhadap ketidakseragaman akibat akumulasi defleksi alat.

2. **Penggerindaan Merayap (*Creep Feed Grinding* / CFG)**:
   - Kedalaman potong aksial penuh dalam satu langkah (*single-pass full-depth cut*, $a_e \approx 1 - 30\ \text{mm}$).
   - Kecepatan meja benda kerja sangat lambat atau merayap (*creeping table feed*, $v_w \approx 0{,}1 - 10\ \text{mm/s}$).
   - Panjang busur kontak geometris sangat besar ($l_c \approx 15 - 50\ \text{mm}$).
   - Menghasilkan profil presisi tinggi seperti akar fir-tree (*fir-tree root*) dan shroud sudu turbin gas dirgantara dalam waktu siklus singkat, namun menghadapi tantangan evakuasi fluida pendingin untuk mencegah *thermal burn* (kerusakan termal).

3. **Penggerindaan Dalam Efisiensi Tinggi (*High-Efficiency Deep Grinding* / HEDG)**:
   - Kedalaman potong besar ($a_e \approx 1 - 10\ \text{mm}$) dipadukan dengan kecepatan benda kerja tinggi ($v_w \approx 100 - 2000\ \text{mm/s}$) dan kecepatan periferal roda superabrasif CBN (*Cubic Boron Nitride*) ultra-tinggi ($v_s \approx 80 - 250\ \text{m/s}$).
   - Waktu kontak termal lokal sangat singkat ($t_{contact} = l_c / v_w \approx 5 - 20\ \text{ms}$), sehingga mayoritas energi termal terbawa keluar oleh gram/tatal abrasif (*chip convection evacuation*) sebelum sempat berdifusi jauh ke dalam matriks benda kerja (*near-isothermal workpiece core*).

Aplikasi industri strategis:
- **Industri Dirgantara & Pembangkit Listrik (*Aerospace Turbomachinery & Power Generation*)**: Pemesinan profil akar sudu turbin bertingkat (*fir-tree root profiles* dan *dovetail slots*) pada material *nickel-based superalloy* (Inconel 718, Inconel 738LC, René 80, CMSX-4 single crystal) dan paduan titanium (Ti-6Al-4V).
- **Industri Otomotif & Alat Berat (*Automotive Powertrain & Fuel Injection*)**: Pemesinan alur rotor pompa transmisi, cam lobes, dan alur injektor diesel rel bersama (*common rail injectors*) dengan batu gerinda vitrified CBN.
- **Industri Perkakas Presisi (*Cutting Tool Manufacturing*)**: Pembuatan saluran heliks mata bor (*flute grinding*) dan insert karbida tungsten padat (*solid tungsten carbide end mills*).

Standar internasional, terminologi pemesinan abrasif, dan metodologi karakterisasi:
- **ISO 3002-1 s/d 3002-5**: *Basic quantities in cutting and grinding — Geometry of the active part of cutting tools, kinematics, forces, energy*.
- **CIRP Annals — Manufacturing Technology**: *Standards and Thermal Models in High-Efficiency Grinding*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ISO 4287 / ISO 25178**: *Geometrical Product Specifications (GPS) — Surface texture: Profile and Areal methods*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.

---

## 2. Termomekanika Kontak Busur Gerinda & Model Partisi Panas Jaeger-Rowe

```
+-----------------------------------------------------------------------------------------------------------------------+
|                             TERMODINAMIKA & KESEIMBANGAN FLUKS PANAS ZONA KONTAK CFG/HEDG                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         ENERGI MEKANIK TOTAL                   ZONA KONTAK ABRASIF                PARTISI PEMBAGIAN ENERGI TERMAL     |
|                                                                                                                       |
|      Daya Spindel Gerinda P_net               Busur Kontak l_c                   ┌──────────────────────────────────┐ |
|      Tegangan Tangensial F_t                  Sumber Panas Bergerak              │ 1. Benda Kerja q_w = R_w * q_tot │ |
|      Kecepatan Roda v_s                       Panjang l_c = sqrt(a_e * d_e)      ├──────────────────────────────────┤ |
|      ┌────────────────────────┐               ┌───────────────────────┐          │ 2. Tatal/Gram q_ch = R_ch * q_tot│ |
|      │ Fluks Daya Gerinda:    │               │ P_tot = F_t * v_s     │          ├──────────────────────────────────┤ |
|      │ q_tot = (F_t*v_s)/(b*l)│ ────────────► │ q_tot = q_w + q_s +   │ ───────► │ 3. Roda Gerinda q_s = R_s * q_tot│ |
|      └────────────────────────┘               │         q_ch + q_f    │          ├──────────────────────────────────┤ |
|                                               └───────────────────────┘          │ 4. Fluida Pendingin q_f = R_f*...│ |
|                                                                                  └──────────────────────────────────┘ |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Kinematika Busur Kontak & Diameter Ekivalen

Panjang kontak busur geometris ($l_c$) antara roda gerinda berdiameter $d_s$ dan benda kerja pada penggerindaan datar (*flat surface grinding*) dengan kedalaman potong aksial $a_e$:

$$l_c = \sqrt{a_e \cdot d_e}$$

di mana $d_e$ adalah diameter roda ekivalen (*equivalent wheel diameter*):

$$d_e = \begin{cases} d_s & \text{untuk penggerindaan permukaan datar (surface grinding)} \\ \dfrac{d_s \cdot d_w}{d_w + d_s} & \text{untuk penggerindaan silindris luar (external cylindrical)} \\ \dfrac{d_s \cdot d_w}{d_w - d_s} & \text{untuk penggerindaan silindris dalam (internal cylindrical, } d_w > d_s) \end{cases}$$

Pada proses CFG dan HEDG di mana gaya potong normal spesifik ($F_n'$) bernilai tinggi, defleksi elastis pada butir abrasif dan matriks pengikat roda (*wheel bond compliance*) memperpanjang busur kontak riil ($l_{c,\text{real}}$) melebihi panjang geometris teoritis. Model Rowe-Qi mendefinisikan panjang kontak riil:

$$l_{c,\text{real}} = \sqrt{a_e d_e + 8 R_r' F_n' (K_s + K_w) d_e}$$

di mana:
- $F_n' = \dfrac{F_n}{b}$ adalah gaya normal per satuan lebar gerinda ($\text{N/mm}$).
- $K_s = \dfrac{1 - \nu_s^2}{\pi E_s}$ dan $K_w = \dfrac{1 - \nu_w^2}{\pi E_w}$ adalah parameter elastisitas Hertzian untuk roda gerinda dan benda kerja.
- $R_r'$ adalah faktor koreksi kekasaran kontak butir abrasif ($R_r' \approx 1{,}0 - 1{,}5$).

### 2.2. Energi Gerinda Spesifik (*Specific Grinding Energy* $u$)

Energi pemotongan total yang dikonsumsi per satuan volume material yang dibuang dinyatakan sebagai:

$$u = \frac{P_{\text{net}}}{Q_w} = \frac{F_t \cdot v_s}{v_w \cdot a_e \cdot b} = \frac{F_t' \cdot v_s}{v_w \cdot a_e}\quad \left[\frac{\text{J}}{\text{mm}^3}\ \text{atau}\ \text{MPa}\right]$$

di mana:
- $P_{\text{net}}$: Daya mekanik bersih pada antarmuka gerinda ($\text{Watt}$).
- $Q_w = v_w \cdot a_e \cdot b$: Laju pembuangan material volumetrik ($\text{mm}^3/\text{s}$).
- $F_t' = \dfrac{F_t}{b}$: Gaya tangensial spesifik per satuan lebar potong ($\text{N/mm}$).
- $b$: Lebar aktif penggerindaan ($\text{mm}$).

Menurut dekomposisi energi Malkin-Guo, energi spesifik total $u$ tersusun atas tiga komponen fisik diskrit:

$$u = u_{\text{chip}} + u_{\text{plow}} + u_{\text{slide}}$$

1. **Energi Pembentukan Tatal/Gram ($u_{\text{chip}}$)**: Energi deformasi plastis geser primer yang bernilai mendekati kekuatan luluh adiabatik material ($u_{\text{chip}} \approx 13{,}8\ \text{J/mm}^3$ untuk baja paduan dan $\approx 18 - 25\ \text{J/mm}^3$ untuk superalloy berbasis nikel).
2. **Energi Pembajakan/Ploughing ($u_{\text{plow}}$)**: Energi deformasi elastoplastis tanpa pembentukan gram ketika butir abrasif menekan dan mendorong material ke sisi alur goresan.
3. **Energi Gesekan/Sliding ($u_{\text{slide}}$)**: Gesekan langsung antara *wear flats* (titik tumpul keausan butir abrasif) dengan permukaan benda kerja:
   
   $$u_{\text{slide}} = \mu \cdot \bar{p}_{\text{flat}} \cdot A_{\text{flat}} \cdot \frac{v_s}{Q_w}$$

Pada proses CFG, karena ketebalan gram maksimum butir abrasif tunggal ($h_{cu}$) sangat kecil akibat rasio $v_w / v_s \ll 1$, porsi energi *sliding* dan *ploughing* menjadi dominan terhadap energi total, menaikkan $u$ hingga $60 - 150\ \text{J/mm}^3$. Sebaliknya pada HEDG, karena $v_w$ tinggi, ukuran gram membesar sehingga energi spesifik $u$ turun mendekati rezim pemotongan efisien ($u \approx 20 - 40\ \text{J/mm}^3$).

### 2.3. Model Partisi Panas Jaeger-Rowe (*Thermal Energy Partitioning*)

Hampir $100\%$ dari energi mekanik total $P_{\text{net}}$ terdisipasi menjadi energi termal pada zona kontak. Fluks kalor total yang memasuki busur kontak per satuan luas:

$$q_{\text{tot}} = \frac{F_t \cdot v_s}{b \cdot l_c} = u \cdot \frac{v_w \cdot a_e}{l_c}\quad \left[\frac{\text{W}}{\text{mm}^2}\right]$$

Fluks kalor total ini terbagi (*partitioned*) ke dalam empat media penerima:

$$q_{\text{tot}} = q_w + q_s + q_{\text{chip}} + q_f$$

$$1 = R_w + R_s + R_{\text{chip}} + R_f$$

di mana $R_w, R_s, R_{\text{chip}}, R_f$ masing-masing adalah fraksi partisi panas yang mengalir ke benda kerja (*workpiece*), butir roda gerinda (*grinding wheel grains*), tatal gram (*chips*), dan fluida pendingin (*coolant fluid*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               SIRKUIT TERMAL ANALOGI ROWE UNTUK ZONA KONTAK PENGGERINDAAN                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                         Sumber Panas Kontak q_tot                                                     |
|                                                    │                                                                  |
|                         ┌──────────────────────────┼──────────────────────────┬──────────────────────┐                |
|                         │                          │                          │                      │                |
|                         ▼                          ▼                          ▼                      ▼                |
|                  ┌──────────────┐           ┌──────────────┐           ┌──────────────┐       ┌──────────────┐        |
|                  │ Benda Kerja  │           │ Roda Gerinda │           │ Fluida Coolan│       │ Tatal/Gram   │        |
|                  │ Resitansi R_w│           │ Resistansi R_│           │ Resistansi R_│       │ Konveksi     │        |
|                  │              │           │              │           │              │       │ R_chip       │        |
|                  └──────┬───────┘           └──────┬───────┘           └──────┬───────┘       └──────┬───────┘        |
|                         │                          │                          │                      │                |
|                         └──────────────────────────┴──────────────────────────┴──────────────────────┘                |
|                                                    │                                                                  |
|                                                    ▼                                                                  |
|                                         Suhu Kontak Antarmuka T_c                                                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Model kesetaraan suhu antarmuka Rowe (*Rowe's temperature matching model*) merumuskan fraksi partisi panas ke benda kerja $R_w$ sebagai:

$$R_w = \left[ 1 + \frac{h_s + h_f + h_{\text{chip}}}{h_w} \right]^{-1}$$

di mana koefisien transfer panas efektif masing-masing komponen:

1. **Koefisien Transfer Panas Benda Kerja ($h_w$)**: Berdasarkan teori sumber panas pita bergerak Jaeger (*Jaeger moving band source*):
   
   $$h_w = \frac{C_{\text{shape}} \cdot \beta_w \cdot \sqrt{v_w}}{\sqrt{l_c}} = \frac{C_{\text{shape}} \sqrt{k_w \cdot \rho_w \cdot c_{p,w} \cdot v_w}}{\sqrt{l_c}}$$
   
   di mana:
   - $\beta_w = \sqrt{k_w \rho_w c_{p,w}}$ adalah efusivitas termal benda kerja ($\text{J}\cdot\text{m}^{-2}\cdot\text{K}^{-1}\cdot\text{s}^{-1/2}$).
   - $C_{\text{shape}}$ adalah faktor bentuk distribusi fluks panas ($C_{\text{shape}} = 1{,}13$ untuk distribusi fluks segitiga/triangular, $C_{\text{shape}} = 1{,}06$ untuk distribusi seragam).

2. **Koefisien Transfer Panas Roda Gerinda ($h_s$)**: Berdasarkan konduksi butir abrasif tunggal:
   
   $$h_s = \frac{C_{\text{shape}} \cdot \beta_g \cdot \sqrt{v_s}}{\sqrt{l_c}} \cdot \left(\frac{A_{\text{flat}}}{A_{\text{nom}}}\right)^{1/2}$$
   
   di mana $\beta_g = \sqrt{k_g \rho_g c_{p,g}}$ adalah efusivitas termal butir abrasif (butir CBN memiliki $\beta_g \approx 35.000\ \text{J}\cdot\text{m}^{-2}\cdot\text{K}^{-1}\cdot\text{s}^{-1/2}$, jauh lebih tinggi dibandingkan aluminium oksida $\text{Al}_2\text{O}_3$ dengan $\beta_g \approx 12.000$, sehingga roda CBN menarik proporsi panas keluar dari benda kerja jauh lebih masif).

3. **Koefisien Evakuasi Panas Tatal ($h_{\text{chip}}$)**:
   
   $$h_{\text{chip}} = \rho_w \cdot c_{p,w} \cdot \left(\frac{a_e \cdot v_w}{l_c}\right) \cdot E_{\text{eff}}$$
   
   di mana $E_{\text{eff}}$ adalah efisiensi entalpi peleburan gram ($E_{\text{eff}} \approx 0{,}8 - 1{,}0$).

4. **Koefisien Konveksi Fluida Pendingin ($h_f$)**: Ditentukan oleh hidrodinamika fluida dalam zona pori-pori kontak gerinda ($h_f \approx 20.000 - 150.000\ \text{W/m}^2\text{K}$ sebelum terjadi *film boiling*).

### 2.4. Prediksi Suhu Maksimum Kontak Zona Penggerindaan ($T_{\text{max}}$)

Suhu puncak kontak antarmuka pada permukaan benda kerja dihitung melalui integral Jaeger untuk sumber panas pita linier:

$$T_{\text{max}} = T_{\text{ambient}} + \frac{R_w \cdot q_{\text{tot}}}{h_w} = T_{\text{ambient}} + \frac{R_w \cdot q_{\text{tot}} \cdot \sqrt{l_c}}{C_{\text{shape}} \cdot \sqrt{k_w \cdot \rho_w \cdot c_{p,w} \cdot v_w}}$$

Kriteria batas termal superalloy: Pada Inconel 718, suhu puncak $T_{\text{max}}$ harus dijaga di bawah suhu disolusi fasa presipitat penguat $\gamma''\ (\text{Ni}_3\text{Nb})$ yaitu $T_{\text{crit}} \approx 650^\circ\text{C} - 700^\circ\text{C}$ untuk mencegah degradasi kekerasan mikro dan terbentuknya tegangan sisa tarik permukaan (*tensile residual stress*).

---

## 3. Batas Hidrodinamika Fluida Pendingin & Kinetika *Coolant Burnout*

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               REZIM PERPINDAHAN PANAS FLUIDA & FENOMENA COOLANT BURNOUT                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Fluks Panas Benda Kerja q_w (W/mm^2)                                                                          |
|         ▲                                                                                                             |
|         │                                                                                                             |
|         │                                          TITIK BURNOUT KRITIS (CRITICAL HEAT FLUX q_crit)                   |
|         │                                                ▲                                                            |
|         │                                               ╱ ╲                                                           |
|         │                                              ╱   ╲  Transisi Cepat ke Film Boiling                          |
|         │                                             ╱     ╲ (Isolasi Selimut Uap / Vapor Blanket)                   |
|         │               Rezim Pendidihan             ╱       ╲                                                        |
|         │               Nukleat Efisien             ╱         ╲                                                       |
|         │               (Nucleate Boiling)         ╱           └──────────────────────────────                        |
|         │                                         ╱             Fluks Panas Konveksi Anjlok Drastis:                  |
|         │                                        ╱              h_f anjlok dari 100 kW/m^2K ke 2 kW/m^2K              |
|         │       Rezim Konveksi Paksa Tunggal    ╱               Suhu Benda Kerja Melonjak > 900°C                     |
|         │       (Single-Phase Forced Convection)                Kerusakan Termal / Microcracking Parah                |
|         │      ┌───────────────────────────────┘                                                                      |
|         │     ┌┘                                                                                                      |
|         └─────┴─────────────────────────────────────────────────────────────────────────────────────────────►         |
|               0                               100°C (Suhu Didih)      T_crit (130°C - 160°C)       Suhu Dinding T_w   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Mekanisme Kritis *Coolant Burnout* & *Film Boiling*

Tantangan terberat pada proses CFG dengan kontak busur panjang ($l_c > 20\ \text{mm}$) adalah fenomena *Coolant Burnout*. 

Ketika fluks panas yang dihantarkan ke lapisan fluida pendingin ($q_f$) melampaui Fluks Kalor Kritis (*Critical Heat Flux* / $q_{\text{crit}}$), gelembung uap mikroskopis yang terbentuk pada permukaan benda kerja saling bergabung (*coalesce*) membentuk selimut uap tipis (*vapor blanket barrier*). Konduktivitas termal selimut uap gas sangat rendah ($k_{\text{vapor}} \approx 0{,}025\ \text{W/m}\cdot\text{K}$ dibandingkan air cair $k_{\text{liquid}} \approx 0{,}6\ \text{W/m}\cdot\text{K}$), menyebabkan koefisien perpindahan panas fluida $h_f$ seketika runtuh (*drop*) hingga lebih dari $95\%$. Akibatnya, panas terperangkap dan mengalir seluruhnya ke dalam matriks benda kerja ($R_w \to 0{,}80 - 0{,}95$), memicu pembentukan lapisan putih rapuh (*white layer*), pelunakan struktur mikro (*microstructural overtempering*), dan tegangan sisa tarik destruktif.

### 3.2. Model Hidrodinamika Fluks Kalor Kritis ($q_{\text{crit}}$)

Berdasarkan formulasi Zuber-Rowe untuk aliran terbatasi dalam celah pori-pori roda gerinda:

$$q_{\text{crit}} = C_{\text{CHF}} \cdot \rho_v^{1/2} \cdot h_{lv} \cdot \left[ \sigma \cdot g \cdot (\rho_l - \rho_v) \right]^{1/4} \cdot \left( 1 + \frac{\rho_l}{\rho_v} \right)^{1/2} \cdot f(\text{velocity, pressure})$$

Dalam kondisi praktis penggerindaan industri bertekanan, fluks kalor kritis efektif fluida pendingin berbasis air (*water-based emulsion*) dapat diestimasi dengan model empiris Rowe-Guo:

$$q_{\text{crit}} = h_{\text{conv}} \cdot (T_{\text{boil}} - T_{\text{ambient}}) + C_{\text{pool}} \cdot v_{\text{coolant}}^{0{,}5} \cdot P_{\text{nozzle}}^{0{,}3}$$

di mana:
- $h_{\text{conv}} \approx 10.000 - 30.000\ \text{W/m}^2\text{K}$.
- $T_{\text{boil}}$: Titik didih fluida pada tekanan lokal rongga pori ($\approx 100^\circ\text{C} - 130^\circ\text{C}$).
- $v_{\text{coolant}}$: Kecepatan jet semprotan nozel fluida pendingin ($\text{m/s}$). Untuk mengatasi lapisan batas aerodinamis udara roda gerinda (*air boundary layer barrier*), kecepatan semprotan nozel wajib disinkronkan mendekati kecepatan periferal roda ($v_{\text{coolant}} \approx 0{,}8 - 1{,}0\ v_s$).
- $P_{\text{nozzle}}$: Tekanan suplai nozel pendingin ($\text{bar}$). Pada CFG superalloy, sistem *Coherent Jet Nozzle* tekanan tinggi ($15 - 35\ \text{bar}$) diterapkan untuk menjamin penetrasi fluida ke ujung paling depan busur kontak (*leading edge of contact arc*).

---

## 4. Integritas Permukaan Sudu Turbin & Rekayasa Tegangan Sisa

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               DISTRIBUSI TEGANGAN SISA KEDALAMAN PADA SUPERALLOY INCONEL 718                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Tegangan Sisa Longitudinal \sigma_res (MPa)                                                                   |
|         ▲                                                                                                             |
|    +600 ┼ - - - - - - - - - - - - - - - - - - - - - - - - - - - - ┌─────────────────────┐                            |
|         │                                                         │ KONDISI BURNOUT /   │                            |
|    +400 ┼                                  ┌────────────────────► │ TERMAL BERLEBIH     │ (Tegangan Sisa Tarik       |
|         │                                ┌─┘                      │ CFG Tanpa HP-Coolant│  Inisiasi Retak Fatik)     |
|    +200 ┼                               ┌┘                        └─────────────────────┘                            |
|         │                             ┌─┘                                                                            |
|       0 ┼────────────────────────────┬─────────────────────────────────────────────────────────────►                 |
|         │                          ┌─┘                            Kedalaman dari Permukaan z (μm)                    |
|    -200 ┼                        ┌─┘     50          100         150         200         250                         |
|         │                      ┌─┘                                                                                   |
|    -400 ┼                    ┌─┘                                  ┌─────────────────────┐                            |
|         │       ┌────────────┘                                    │ KONDISI HEDG /      │ (Tegangan Sisa Tekan       |
|    -600 ┼───────┘                                                 │ CFG OPTIMAL CBN     │  Ketahanan Fatik Tinggi    |
|         │ Tegangan Sisa Tekan Menguntungkan                       │ Jet Koheren HP      │  > 10^7 Siklus)            |
|    -800 ┼                                                         └─────────────────────┘                            |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Integritas permukaan (*Surface Integrity*) komponen dirgantara seperti sudu turbin gas Inconel 718 diatur secara ketat berdasarkan tiga kriteria metalurgi-mekanik:

1. **Struktur Mikro & Bebas Kerusakan Termal (*Zero Thermal Damage*)**:
   - Tidak boleh terbentuk lapisan rekristalisasi getas tanpa fasa presipitat (*white etching layer*).
   - Kedalaman zona terpengaruh panas (*Heat Affected Zone* / HAZ) tidak boleh melebihi $15\ \mu\text{m}$.
   - Bebas dari retak mikro antarbutir (*intergranular microcracks*) yang terdeteksi via pengujian penetran fluoresen ASTM E1417.

2. **Kekasaran Permukaan (*Surface Roughness*)**:
   - Parameter kekasaran aritmatika rata-rata $R_a \le 0{,}4\ \mu\text{m}$ dan tinggi maksimum profil $R_z \le 2{,}0\ \mu\text{m}$ sesuai ISO 4287.
   - Kekasaran permukaan pada penggerindaan ditentukan oleh kerapatan butir aktif per satuan luas ($C_a$), rasio kecepatan $v_w / v_s$, dan kedalaman potong butir maksimum $h_{cu,\text{max}}$:
     
     $$R_a \approx 0{,}45 \cdot \left[ \frac{v_w}{v_s \cdot C_a \cdot d_e^{1/2}} \right]^{2/3}$$

3. **Profil Tegangan Sisa (*Residual Stress Profile*)**:
   - Penggerindaan yang optimal wajib menghasilkan tegangan sisa tekan (*compressive residual stress*) di permukaan hingga kedalaman $50 - 150\ \mu\text{m}$ dengan magnitudo puncak $\sigma_{\text{res}} \le -400\ \text{MPa}$.
   - Tegangan sisa tekan menahan inisiasi retak fatik siklus tinggi (*High Cycle Fatigue* / HCF) pada temperatur operasi turbin gas mencapai $650^\circ\text{C}$.

---

## 5. Implementasi Algoritma & Komputasi: Python CFG/HEDG Thermal Solver

Skrip Python di bawah ini mengimplementasikan model termomekanika penggerindaan analitik tingkat lanjut: menghitung panjang busur kontak elastoplastis Hertzian-Rowe, estimasi energi gerinda spesifik Malkin-Guo, pemecahan sistem persamaan partisi panas matriks Rowe-Jaeger, evaluasi batas fluks kalor kritis burnout ($q_{\text{crit}}$), serta kalkulasi distribusi suhu kedalaman benda kerja.

```python
"""
CREEP FEED & HIGH-EFFICIENCY DEEP GRINDING THERMO-MECHANICAL SOLVER
Standard Compliance: ISO 3002, CIRP Annals, ASTM E8M.
Author: RuangTI Precision Manufacturing Knowledge Base Specialist.
"""

import math
from typing import Dict, Tuple, Any

class CreepFeedGrindingSolver:
    def __init__(self,
                 workpiece_material: str = "Inconel 718",
                 rho_w: float = 8190.0,       # kg/m^3
                 cp_w: float = 435.0,         # J/(kg*K)
                 k_w: float = 11.4,           # W/(m*K)
                 E_w: float = 205e9,          # Pa (Modulus Elastisitas Benda)
                 nu_w: float = 0.29,          # Poisson's ratio benda
                 wheel_type: str = "Vitrified CBN",
                 rho_g: float = 3480.0,       # kg/m^3 (CBN)
                 cp_g: float = 790.0,         # J/(kg*K)
                 k_g: float = 1300.0,         # W/(m*K)
                 E_s: float = 150e9,          # Pa (Modulus Roda Gerinda)
                 nu_s: float = 0.20):         # Poisson's ratio roda
        self.workpiece = workpiece_material
        self.rho_w = rho_w
        self.cp_w = cp_w
        self.k_w = k_w
        self.E_w = E_w
        self.nu_w = nu_w
        self.beta_w = math.sqrt(k_w * rho_w * cp_w) # Efusivitas termal benda
        
        self.wheel_type = wheel_type
        self.rho_g = rho_g
        self.cp_g = cp_g
        self.k_g = k_g
        self.E_s = E_s
        self.nu_s = nu_s
        self.beta_g = math.sqrt(k_g * rho_g * cp_g) # Efusivitas termal butir
        
    def solve_contact_kinematics(self,
                                  d_s_mm: float,
                                  a_e_mm: float,
                                  b_mm: float,
                                  v_s_ms: float,
                                  v_w_mms: float,
                                  F_n_N: float) -> Dict[str, float]:
        """Menghitung panjang kontak riil elastis dan geometri MRR."""
        d_e = d_s_mm # Flat surface grinding
        l_c_geom = math.sqrt(a_e_mm * d_e) # mm
        
        # Kepatuhan kontak elastis Hertzian (Rowe-Qi Model)
        K_s = (1.0 - self.nu_s**2) / (math.pi * self.E_s)
        K_w = (1.0 - self.nu_w**2) / (math.pi * self.E_w)
        F_n_prime = F_n_N / b_mm # N/mm
        
        # Konversi ke meter untuk perhitungan kontak elastis
        term_elastic = 8.0 * 1.2 * (F_n_prime * 1e3) * (K_s + K_w) * (d_e * 1e-3)
        l_c_real_mm = math.sqrt((a_e_mm * d_e) + (term_elastic * 1e6))
        
        mrr_vol = v_w_mms * a_e_mm * b_mm # mm^3/s
        mrr_spec = v_w_mms * a_e_mm # mm^3/(mm*s) = mm^2/s
        
        return {
            "l_c_geometric_mm": l_c_geom,
            "l_c_real_mm": l_c_real_mm,
            "contact_length_ratio": l_c_real_mm / l_c_geom,
            "MRR_volumetric_mm3_s": mrr_vol,
            "MRR_specific_mm2_s": mrr_spec
        }

    def evaluate_thermal_partition(self,
                                  d_s_mm: float,
                                  a_e_mm: float,
                                  b_mm: float,
                                  v_s_ms: float,
                                  v_w_mms: float,
                                  F_t_N: float,
                                  F_n_N: float,
                                  A_flat_fraction: float = 0.03,
                                  h_fluid_forced: float = 35000.0, # W/(m^2*K)
                                  T_ambient_C: float = 25.0) -> Dict[str, Any]:
        """
        Menyelesaikan partisi energi panas Jaeger-Rowe dan memeriksa batas CHF Burnout.
        """
        kinematics = self.solve_contact_kinematics(d_s_mm, a_e_mm, b_mm, v_s_ms, v_w_mms, F_n_N)
        l_c_m = kinematics["l_c_real_mm"] * 1e-3
        v_w_ms = v_w_mms * 1e-3
        b_m = b_mm * 1e-3
        a_e_m = a_e_mm * 1e-3
        
        # Daya dan Fluks Panas Total
        P_net_W = F_t_N * v_s_ms
        u_specific_J_mm3 = P_net_W / kinematics["MRR_volumetric_mm3_s"]
        q_tot_Wm2 = P_net_W / (b_m * l_c_m)
        
        # 1. Koefisien Transfer Panas Benda Kerja (Jaeger moving source)
        C_shape = 1.13 # Fluks segitiga
        h_w = (C_shape * self.beta_w * math.sqrt(v_w_ms)) / math.sqrt(l_c_m) if v_w_ms > 0 else 1.0
        
        # 2. Koefisien Transfer Panas Roda Gerinda (Butir Abrasif)
        h_s = (C_shape * self.beta_g * math.sqrt(v_s_ms) / math.sqrt(l_c_m)) * math.sqrt(A_flat_fraction)
        
        # 3. Koefisien Panas Tatal/Gram
        h_chip = self.rho_w * self.cp_w * (a_e_m * v_w_ms / l_c_m) * 0.90
        
        # 4. Koefisien Fluida Pendingin
        h_f = h_fluid_forced
        
        # Partisi Panas Benda Kerja R_w
        denominator = h_w + h_s + h_chip + h_f
        R_w = h_w / denominator
        R_s = h_s / denominator
        R_chip = h_chip / denominator
        R_f = h_f / denominator
        
        # Fluks Panas Aktual ke Benda Kerja
        q_w_Wm2 = R_w * q_tot_Wm2
        
        # Suhu Maksimum Kontak Benda Kerja
        delta_T_max = q_w_Wm2 / h_w
        T_max_C = T_ambient_C + delta_T_max
        
        # Estimasi Fluks Kalor Kritis (CHF) Burnout (Rowe-Zuber Correlation)
        # Untuk air emulsi gerinda tipikal pada 20 bar jet
        q_crit_Wm2 = 4.5e6 + (15000.0 * (v_s_ms**0.4))
        is_burnout = q_w_Wm2 > q_crit_Wm2 or T_max_C > 650.0
        burnout_safety_factor = q_crit_Wm2 / max(q_w_Wm2, 1.0)
        
        return {
            "specific_energy_u_J_mm3": u_specific_J_mm3,
            "q_total_MW_m2": q_tot_Wm2 * 1e-6,
            "q_workpiece_MW_m2": q_w_Wm2 * 1e-6,
            "q_critical_CHF_MW_m2": q_crit_Wm2 * 1e-6,
            "partition_workpiece_Rw": R_w,
            "partition_wheel_Rs": R_s,
            "partition_chips_Rchip": R_chip,
            "partition_fluid_Rf": R_f,
            "T_max_contact_Celsius": T_max_C,
            "burnout_safety_factor": burnout_safety_factor,
            "is_burnout_detected": is_burnout,
            "kinematics": kinematics
        }

    def compute_depth_temperature_profile(self,
                                          q_w_Wm2: float,
                                          l_c_m: float,
                                          v_w_ms: float,
                                          depths_um: list) -> list:
        """Menghitung penetrasi gradien suhu kedalaman z ke dalam benda kerja."""
        alpha_w = self.k_w / (self.rho_w * self.cp_w) # Difusivitas termal (m^2/s)
        # Peclet Number Benda Kerja
        L_prime = (v_w_ms * l_c_m) / (4.0 * alpha_w)
        
        profiles = []
        for z_um in depths_um:
            z_m = z_um * 1e-6
            # Model konduksi 1D transient semi-infinite dengan sumber pita
            # Reduksi suhu eksponensial terhadap kedalaman tak berdimensi
            Z_dim = z_m / l_c_m
            factor = math.exp(-2.0 * math.sqrt(max(L_prime, 0.1)) * Z_dim)
            T_z_rise = (q_w_Wm2 * math.sqrt(l_c_m) / (1.13 * self.beta_w * math.sqrt(max(v_w_ms, 1e-6)))) * factor
            profiles.append({"depth_um": z_um, "temperature_rise_C": T_z_rise})
        return profiles

# Demonstrasi Eksekusi Studi Kasus
if __name__ == "__main__":
    solver = CreepFeedGrindingSolver()
    
    print("=== SIMULASI 1: Creep Feed Grinding (CFG) Sudu Turbin Inconel 718 ===")
    res_cfg = solver.evaluate_thermal_partition(
        d_s_mm=400.0,
        a_e_mm=8.0,
        b_mm=25.0,
        v_s_ms=32.0,
        v_w_mms=1.5,       # 1.5 mm/s (merayap)
        F_t_N=620.0,
        F_n_N=1850.0,
        A_flat_fraction=0.035,
        h_fluid_forced=45000.0
    )
    print(f"Panjang Kontak Riil (l_c) : {res_cfg['kinematics']['l_c_real_mm']:.2f} mm")
    print(f"Energi Spesifik (u)       : {res_cfg['specific_energy_u_J_mm3']:.2f} J/mm^3")
    print(f"Fluks Panas Total         : {res_cfg['q_total_MW_m2']:.2f} MW/m^2")
    print(f"Partisi Panas Benda (R_w) : {res_cfg['partition_workpiece_Rw']*100:.2f} %")
    print(f"Partisi Panas Roda (R_s)  : {res_cfg['partition_wheel_Rs']*100:.2f} %")
    print(f"Partisi Panas Fluida (R_f): {res_cfg['partition_fluid_Rf']*100:.2f} %")
    print(f"Suhu Puncak Kontak (T_max): {res_cfg['T_max_contact_Celsius']:.1f} °C")
    print(f"Batas Kritis Burnout      : {res_cfg['q_critical_CHF_MW_m2']:.2f} MW/m^2 (Safety Factor: {res_cfg['burnout_safety_factor']:.2f})")
    print(f"Status Kerusakan Termal   : {'BAHAYA BURNOUT' if res_cfg['is_burnout_detected'] else 'AMAN / ZERO DEFECT'}\n")
    
    print("=== SIMULASI 2: High-Efficiency Deep Grinding (HEDG) CBN ===")
    res_hedg = solver.evaluate_thermal_partition(
        d_s_mm=400.0,
        a_e_mm=3.0,
        b_mm=25.0,
        v_s_ms=120.0,      # Kecepatan CBN Ultra-Tinggi
        v_w_mms=350.0,     # Kecepatan Meja Sangat Cepat (350 mm/s)
        F_t_N=410.0,
        F_n_N=980.0,
        A_flat_fraction=0.020,
        h_fluid_forced=25000.0
    )
    print(f"Panjang Kontak Riil (l_c) : {res_hedg['kinematics']['l_c_real_mm']:.2f} mm")
    print(f"Energi Spesifik (u)       : {res_hedg['specific_energy_u_J_mm3']:.2f} J/mm^3")
    print(f"Partisi Panas Benda (R_w) : {res_hedg['partition_workpiece_Rw']*100:.2f} %")
    print(f"Partisi Panas Tatal (R_ch): {res_hedg['partition_chips_Rchip']*100:.2f} %")
    print(f"Suhu Puncak Kontak (T_max): {res_hedg['T_max_contact_Celsius']:.1f} °C")
    print(f"Status Kerusakan Termal   : {'BAHAYA BURNOUT' if res_hedg['is_burnout_detected'] else 'AMAN / ZERO DEFECT'}")
```

---

## 6. Studi Kasus Industri: Pemesinan Profil Fir-Tree Sudu Turbin Gas Dirgantara (Inconel 718)

### 6.1. Deskripsi Masalah & Spesifikasi Komponen

Sebuah pabrik mesin turbofan kedirgantaraan memproduksi akar sudu turbin bertingkat (*multi-stage fir-tree turbine blade roots*) berbahan superalloy Inconel 718 hasil perlakuan panas *solution treated & aged* (kekerasan nominal $44\ \text{HRC}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               GEOMETRI PROFIL FIR-TREE SUDU TURBIN GAS & ZONA KRITIS PEMESINAN                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Profil Fir-Tree (Multi-Lobe Dovetail Root)           Spesifikasi Kualitas Kritis (ISO 10012 / AS9100):         |
|         ┌───────────────────────────────────────┐            - Toleransi Profil Lobe : ± 0.005 mm (5 μm)              |
|         │    /\        /\        /\            │            - Kekasaran Permukaan   : R_a ≤ 0.35 μm                  |
|         │   /  \______/  \______/  \           │            - Tegangan Sisa         : Kompresif σ_res ≤ -350 MPa     |
|         │  /   Zona Lekukan Kritis  \          │            - Bebas Lapisan Putih   : White Layer Thickness = 0 μm   |
|         │ /    (Stress Concentration)\         │                                                                     |
|         │/      Radius r = 0.8 mm     \        │            Kondisi Awal (Eksisting - Cacat Burnout Sering Terjadi):  |
|         ├──────────────────────────────┤       │            - Roda Al2O3 Konvensional, d_s = 350 mm                  |
|         │      Material: Inconel 718   │       │            - Nozel Pendingin Standar (P_c = 4 bar)                  |
|         │      Kedalaman Total: 14 mm  │       │            - Laju Penolakan Kualitas (*Scrap Rate*): 8.4%           |
|         └──────────────────────────────┘                                                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Permasalahan: Pada proses eksisting menggunakan batu gerinda aluminium oksida ($\text{Al}_2\text{O}_3$), sering terjadi *coolant burnout* pada lekukan terdalam (*innermost fir-tree lob*) yang memicu *microcracking* dan tegangan sisa tarik hingga $+450\ \text{MPa}$. Laju cacat mencapai $8{,}4\%$, mengakibatkan biaya *scrap* mencapai \$140.000 per bulan.

### 6.2. Rancangan Rekayasa & Solusi Berbasis CFG Berkelanjutan

Tim rekayasa manufaktur menerapkan perombakan total proses berbasis prinsip termomekanika CFG modern:

1. **Konversi ke Roda Superabrasif Poros Terbuka Vitrified CBN**:
   - Mengganti roda $\text{Al}_2\text{O}_3$ dengan roda *Vitrified Bonded CBN* berkonsentrasi butir $B126$ dengan porositas terinduksi $45\%$. Konduktivitas termal butir melonjak dari $k = 30\ \text{W/m}\cdot\text{K}$ menjadi $1300\ \text{W/m}\cdot\text{K}$, meningkatkan penyerapan panas oleh roda ($R_s$) dari $8\%$ menjadi $34\%$.
2. **Implementasi Nozel Jet Koheren Tekanan Tinggi (*High-Pressure Coherent Nozzle*)**:
   - Mendesain nozel profil modular CNC yang mengikuti kontur fir-tree secara presisi dengan jarak *standoff* $15\ \text{mm}$.
   - Tekanan fluida pendingin dinaikkan menjadi $P_c = 22\ \text{bar}$ dengan laju aliran $Q = 180\ \text{L/menit}$ untuk memastikan kecepatan jet fluida menyamai kecepatan potong roda ($v_j = v_s = 35\ \text{m/s}$), mengeliminasi selimut udara (*air barrier destruction*).
3. **Optimasi Lintasan Pemotongan Inkremental (*Continuous Dress Creep Feed Grinding* / CDCF)**:
   - Menerapkan pembentukan profil kontinu menggunakan rol intan putar (*diamond rotary dresser*) dengan laju kompensasi dressed $0{,}4\ \mu\text{m/putaran}$ untuk menjaga butir abrasif selalu tajam, menekan energi spesifik $u$ dari $140\ \text{J/mm}^3$ ke $55\ \text{J/mm}^3$.

### 6.3. Hasil Evaluasi & Validasi Kualitas

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    TABEL KOMPARASI PERFORMA PROSES SUDU TURBIN INCONEL 718                            |
+-----------------------------------------------------------------------------------------------------------------------+
| Parameter Kinerja                 | Metode Konvensional Al2O3      | Solusi Rekayasa CFG Vitrified CBN | Perbaikan     |
+-----------------------------------+--------------------------------+-----------------------------------+---------------+
| Laju Pembuangan Material (MRR)    | 12.5 mm^3/(mm*s)               | 38.0 mm^3/(mm*s)                  | + 204 %       |
| Suhu Puncak Antarmuka (T_max)     | 740 °C (Melampaui T_crit)      | 285 °C (Jauh di bawah T_crit)     | - 61.5 %      |
| Kekasaran Permukaan (R_a)         | 0.58 μm                        | 0.22 μm                           | - 62.1 %      |
| Tegangan Sisa Permukaan (σ_res)   | + 450 MPa (Tarik Destruktif)   | - 480 MPa (Tekan Sangat Baik)     | Berbalik Baik |
| Umur Kelelahan Siklus Tinggi (HCF)| 1.8 x 10^5 siklus              | > 1.0 x 10^7 siklus               | > 50x Lipat   |
| Laju Cacat (*Scrap Rate*)         | 8.4 %                          | 0.05 %                            | - 99.4 %      |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 7. Referensi Terverifikasi & Literatur Akademis

1. **Rowe, W. B.** (2014). *Principles of Modern Grinding Technology* (2nd Edition). Elsevier / William Andrew Publishing. ISBN: 978-0-323-24271-4.
2. **Malkin, S., & Guo, C.** (2008). *Grinding Technology: Theory and Applications of Machining with Abrasives* (2nd Edition). Industrial Press. ISBN: 978-0-8311-3247-7.
3. **Shaw, M. C.** (2005). *Metal Cutting Principles* (2nd Edition). Oxford University Press. ISBN: 978-0-195-14206-8.
4. **CIRP Annals — Manufacturing Technology** (2020). *Advances in High-Efficiency Deep Grinding and Thermal Damage Mitigation of Nickel-Based Superalloys*. CIRP Annals, 69(2), 650–673. DOI: 10.1016/j.cirp.2020.05.004.
5. **ISO 3002-1:1982 / Amd 2018**: *Geometry of the active part of cutting tools — Part 1: General terms, reference systems, tool and working angles, chip breakers*. International Organization for Standardization.
6. **ASTM E8 / E8M-22**: *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: 10.1520/E0008_E0008M-22.
7. **Klocke, F., & Zeis, M.** (2018). *Manufacturing Processes 2: Grinding, Honing, Lapping*. Springer-Verlag Berlin Heidelberg. ISBN: 978-3-662-55070-0.$.
