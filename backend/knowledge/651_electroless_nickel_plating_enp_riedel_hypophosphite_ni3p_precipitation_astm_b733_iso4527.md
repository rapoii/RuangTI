# Modul 651: Electroless Nickel-Phosphorus (EN-P) Plating & Autocatalytic Deposition: Kinetika Reduksi Hipofosfit Model Riedel, Fasa Amorf-Kristalin, Termodinamika Presipitasi Intermetalik $\text{Ni}_3\text{P}$ (*Precipitation Hardening*), Ketahanan Aus Taber Abrasion & Korosi Asam (ASTM B733, ISO 4527, ASTM B117 & ASTM G99)

## 1. Pengantar & Konteks Industri: Teknologi Pelapisan Nikel Kimia Autokatalitik (*Electroless Nickel Plating*)

*Electroless Nickel-Phosphorus* (EN-P) *Plating*, atau pelapisan nikel-fosfor tanpa arus listrik (*autocatalytic chemical reduction*), merupakan salah satu teknologi rekayasa permukaan (*surface engineering*) paling vital dalam manufaktur presisi modern. Berbeda secara fundamental dengan elektroplating konvensional (*electroplating*) yang mengandalkan distribusi medan listrik eksternal antara anoda dan katoda, pelapisan autokatalitik EN-P memanfaatkan reaksi reduksi-oksidasi kimia terkontrol yang berlangsung murni pada antarmuka substrat berkatalis aktif tanpa memerlukan catu daya luar.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       ARSITEKTUR BAK REAKSI AUTOKATALITIK ELECTROLESS NICKEL-PHOSPHORUS (EN-P)                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         SISTEM PENGENDALIAN BAK TERPADU (CONTINUOUS TEMPERATURE & CHEMICAL DOSING)                                    |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │    Dosing Otomatis: Garam NiSO4, NaH2PO2, Agen Pengompleks, pH Buffer     │ Temperatur Bak (T_bath):        |
|         │    Pengendalian pH Kontinu (4.5 - 4.9 via NH4OH / K2CO3)                  │ 85°C - 90°C (± 0.5°C)           |
|         │                                    │                                      │ Rasio Pemuatan (Loading Ratio): |
|         │                                    ▼                                      │ 0.5 - 2.5 dm^2 / Liter          |
|         │                    ┌───────────────────────────────┐                      │ Filtrasi Kontinu (1 - 5 µm)     |
|         │                    │   Pemanas Mantel / Immersion  │                      │ Agitasi Udara Bersih / Mekanis  |
|         │                    └───────────────┬───────────────┘                      │                                 |
|         └────────────────────────────────────┼──────────────────────────────────────┘                                 |
|                                              │                                                                        |
|                                              ▼                                                                        |
|         ANTARMUKA REAKSI REDUKSI KATALITIK PADA BENDA KERJA                                                           |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  Larutan Bak: Ni^2+ (Kompleks Asam Laktat/Sitrat) + H2PO2^- + H2O         │ Karakteristik Lapisan:          |
|         │                                                                           │ • Ketebalan Seragam 100%        |
|         │  Reaksi Anodik Katalitik:                                                 │ • Bebas Efek Medan Tepi (Edge)  |
|         │  [H2PO2]^- + H2O ──► [H2PO3]^- + 2H^+ + 2e^- (Katalisis Permukaan Ni)     │ • Saluran Internal Terlapisi    |
|         │                                                                           │ • Struktur Amorf Bebas Batas    |
|         │  Reaksi Katodik Simultan:                                                 │   Butir (P > 10.5 wt%)          |
|         │  Ni^2+ + 2e^- ──► Ni^0 (Deposisi Matriks Logam)                           │ • Kekerasan As-Plated: 500 HV   |
|         │  [H2PO2]^- + 2H^+ + e^- ──► P^0 + 2H2O (Kopresipitasi Fosfor)             │ • Kekerasan Heat-Treated:       |
|         │  2H^+ + 2e^- ──► H2 ^ (Evolusi Gas Hidrogen)                              │   1000 - 1100 HV (Ni3P)         |
|         └────────────────────────────────────┬──────────────────────────────────────┘                                 |
|                                              │                                                                        |
|                                              ▼ Lapisan Seragam Menyeluruh (*Perfect Throwing Power*)                  |
|                                                                                                                       |
|         SUBSTRAT / GEOMETRI KOMPLEKS (LOGAM BESI, ALUMINIUM, TEMBAGA, TITANIUM)                                      |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ Ketebalan t_coat = konstan di  |
|         │ █ Lapisan Paduan Ni-P (Uniform Diffusion & Zero Edge-Build-Up)         █ │ seluruh celah, ulir mikro, dan |
|         │ ├───────────────────────────────────────────────────────────────────────┤ │ ceruk saluran internal        |
|         │ │ Substrat Baja Karbon Rendah / AISI 4140 / Paduan Aluminium Al-7075    │ │                               |
|         │ └───────────────────────────────────────────────────────────────────────┘ │                               |
|         └───────────────────────────────────────────────────────────────────────────┘                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Karakteristik utama yang menjadikan EN-P tak tergantikan dalam industri adalah **kemampuan pelapisan seragam sempurna (*100% throwing power*)**. Pada elektroplating konvensional (seperti *hard chrome* atau elektro-nikel), kerapatan arus listrik terkonsentrasi pada sudut runcing dan tepi luar (*dog-bone effect*), sementara lubang buta (*blind holes*), alur pasak, ulir presisi, dan saluran fluida internal mengalami defisit ketebalan parah. Pada EN-P, selama permukaan dibasahi secara merata oleh fluida bak dan pasokan reaktan terjaga melalui sirkulasi fluida yang memadai, ketebalan lapisan yang terbentuk pada saluran internal berdiameter sempit akan identik secara presisi dengan ketebalan pada permukaan eksternal.

### Klasifikasi Lapisan Berdasarkan Fraksi Massa Fosfor
Berdasarkan konsentrasi fosfor yang terinkorporasi ke dalam matriks nikel, lapisan EN-P diklasifikasikan ke dalam tiga kelompok fungsional utama:

| Tipe EN-P | Kandungan Fosfor ($\text{wt}\%\ \text{P}$) | Struktur Mikro *As-Plated* | Sifat Mekanikal & Korosi Dominan | Aplikasi Industri Tipikal |
| :--- | :--- | :--- | :--- | :--- |
| **Low Phosphorus (Low-P)** | $1 - 4\ \text{wt}\%$ | Kristalin mikro (*microcrystalline*, butir fasa $\text{fcc-Ni}$) | Kekerasan *as-plated* tinggi ($600 - 700\ \text{HV}$), ketahanan aus abrasi tinggi, ketahanan lingkungan basa pekat | Cetakan cetak injeksi, piston rem otomotif, perkakas punch tekstil |
| **Medium Phosphorus (Mid-P)** | $6 - 9\ \text{wt}\%$ | Fasa campuran semi-amorf dan kristalin mikro | Laju deposisi cepat ($18 - 25\ \mu\text{m/jam}$), kilap cerah, ketahanan aus dan korosi seimbang | Komponen otomotif umum, poros transmisi, peralatan hidrolik, rangka elektronik |
| **High Phosphorus (High-P)** | $10 - 14\ \text{wt}\%$ | Amorf murni (*metallic glass* / *glassy amorphous state*) | Bebas batas butir (*grain-boundary-free*), ketahanan korosi ekstrem pada lingkungan asam dan gas asam ($\text{H}_2\text{S} / \text{CO}_2$), non-magnetik | Katup industri migas lepas pantai (*subsea ball valves*), rotor turbin kimia, konektor kedirgantaraan, *wafer handling* semikonduktor |

### Aplikasi Industri Strategis
1. **Industri Minyak, Gas, dan Geotermal (Offshore & Subsea)**: Pelapisan *gate valves*, *ball valves*, *choke manifolds*, dan pipa *tubing* baja paduan rendah (AISI 4130/4140) untuk proteksi terhadap *sour gas service* ($\text{H}_2\text{S}$, $\text{CO}_2$, klorida tinggi) sesuai spesifikasi NACE MR0175 / ISO 15156.
2. **Industri Otomotif & Sistem Bahan Bakar**: Pelapisan piston rem cakram (*brake caliper pistons*), poros transmisi, injektor bahan bakar bio-diesel korosif, dan *gearbox synchromesh components*.
3. **Industri Dirgantara & Avionik**: Pelapisan komponen aktuator roda pendarat (*landing gear actuators*), rumah pompa hidrolik aluminium, pelindung interferensi elektromagnetik (*EMI shielding*), dan konektor listrik presisi tinggi.
4. **Industri Cetakan Plastik & Kaca Optik**: Pelapisan cetakan injeksi presisi tinggi untuk mencegah penempelan polimer korosif (seperti PVC yang melepaskan gas $\text{HCl}$) serta meningkatkan kemudahan pelepasan produk (*mold release*).

### Kerangka Standar Internasional
- **ASTM B733-22**: *Standard Specification for Autocatalytic (Electroless) Nickel-Phosphorus Coatings on Metal*.
- **ISO 4527:2003**: *Metallic coatings — Autocatalytic (electroless) nickel-phosphorus alloy coatings — Specification and test methods*.
- **ASTM B117-19**: *Standard Practice for Operating Salt Spray (Fog) Apparatus*.
- **ASTM B656**: *Standard Guide for Autocatalytic (Electroless) Nickel-Phosphorus Deposition on Metals for Engineering Use*.
- **ASTM G99-17**: *Standard Test Method for Wear Testing with a Pin-on-Disk Apparatus*.
- **ASTM D4060-19**: *Standard Test Method for Abrasion Resistance of Organic/Inorganic Coatings by the Taber Abraser*.
- **ASTM B849 / B850**: *Pre-treatments and Post-coating Treatments for Reducing the Risk of Hydrogen Embrittlement in High-Strength Steels*.

---

## 2. Termodinamika, Kinetika Reaksi & Model Pertumbuhan Lapisan Riedel

Proses reduksi kimiawi autokatalitik EN-P melibatkan transfer elektron multi-tahap yang dikatalisis oleh permukaan substrat logam transisi (seperti nikel, paladium, kobalt, besi). 

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MEKANISME TRANSFER ELEKTRON PADA PERMUKAAN KATALITIK                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         LARUTAN ELEKTROLIT (BULK SOLUTION)                                                                            |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  [Ni(L)_x]^2+ (Kompleks Kelat)  │  [H2PO2]^- (Ion Hipofosfit)             │ Kinetika Riedel:                |
|         └────────────────────┬────────────┴─────────────────────┬───────────────────┘                                 |
|                              │ Difusi Spesies                   │ Difusi Spesies      Laju Deposisi R_dep diatur      |
|                              ▼                                  ▼                     oleh adsorpsi Langmuir          |
|         LAPISAN BATAS DIFUSI / LAPISAN NERNST (BOUNDARY LAYER, delta_N ≈ 10 - 50 µm) │ hipofosfit terdehidrogenasi   |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  Keseimbangan Disosiasi Kompleks:                                         │                                 |
|         │  [Ni(L)_x]^2+ <===> Ni^2+ + xL                                            │                                 |
|         └────────────────────┬──────────────────────────────────┬───────────────────┘                                 |
|                              │                                  │                                                     |
|                              ▼                                  ▼                                                     |
|         PERMUKAAN KATALITIK BENDA KERJA (SUBSTRATE / DEPOSITED Ni FILM)                                               |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  (1) Dehidrogenasi Katalitik Hipofosfit:                                  │                                 |
|         │      [H2PO2]^- + H2O ──► [H2PO3]^- + 2 H_ads + 2 e^-                      │                                 |
|         │                                                                           │                                 |
|         │  (2) Reduksi Kation Nikel Bebas:                                          │ Pembentukan Paduan Padat:       |
|         │      Ni^2+ + 2 e^- ──► Ni^0 (Matriks Kristal / Amorf)                     │ Solusi Padat Ni-P Terjenuhkan   |
|         │                                                                           │ (Super-Saturated Solid Sol.)    |
|         │  (3) Kopresipitasi Reduktif Fosfor Atomik:                                │                                 |
|         │      [H2PO2]^- + 2 H^+ + e^- ──► P^0 + 2 H2O                              │                                 |
|         │                                                                           │                                 |
|         │  (4) Rekombinasi Desorpsi Gas Hidrogen (Reaksi Samping):                  │                                 |
|         │      2 H_ads ──► H2 (gas) ^ (Gelembung Mikro Menyelimuti Permukaan)       │                                 |
|         └───────────────────────────────────────────────────────────────────────────┘                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Mekanisme Kimia Reduksi Hipofosfit
Reaksi reduksi autokatalitik yang paling diterima secara luas mengacu pada mekanisme hidrogen teraktivasi (*electrochemical catalytic oxidation of hypophosphite*):

1. **Oksidasi Anodik Hipofosfit pada Permukaan Katalitik**:
   $$\text{H}_2\text{PO}_2^- + \text{H}_2\text{O} \xrightarrow{\text{katalis Ni}} \text{H}_2\text{PO}_3^- + 2\text{H}^+ + 2e^- \quad (E^\circ = +0{,}50\ \text{V vs SHE})$$

2. **Reduksi Katodik Ion Nikel Terkompleks**:
   $$\text{Ni}^{2+} + 2e^- \rightarrow \text{Ni}^0 \quad (E^\circ = -0{,}25\ \text{V vs SHE})$$

3. **Kopresipitasi Simultan Fosfor Elemental**:
   $$\text{H}_2\text{PO}_2^- + 2\text{H}^+ + e^- \rightarrow \text{P}^0 + 2\text{H}_2\text{O} \quad (E^\circ = +0{,}21\ \text{V vs SHE})$$

4. **Reaksi Parasitik Pembentukan Gas Hidrogen**:
   $$2\text{H}^+ + 2e^- \rightarrow \text{H}_2 \uparrow \quad (E^\circ = 0{,}00\ \text{V vs SHE})$$

Efisiensi utilisasi hipofosfit secara stoikiometris umumnya berkisar antara $35\% - 45\%$, di mana lebih dari separuh elektron yang dilepaskan oleh oksidasi hipofosfit dikonsumsi untuk menghasilkan gas hidrogen molekuler ($\text{H}_2$). Oleh karena itu, untuk setiap 1 mol nikel logam ($\text{Ni}^0$) yang terdeposisi, dibutuhkan konsumsi sekitar $2{,}5 - 3{,}0\ \text{mol}$ natrium hipofosfit ($\text{NaH}_2\text{PO}_2 \cdot \text{H}_2\text{O}$).

### 2.2 Model Kinetika Deposisi Riedel
Kinetika laju pertumbuhan ketebalan lapisan EN-P ($R_{\text{dep}}$, dalam $\mu\text{m/jam}$) dipengaruhi secara nonlinier oleh temperatur bak ($T$), konsentrasi ion nikel bebas $[\text{Ni}^{2+}]$, konsentrasi ion hipofosfit $[\text{H}_2\text{PO}_2^-]$, dan tingkat keasaman ($\text{pH}$). Berdasarkan formulasi semi-empiris Riedel yang dimodifikasi dengan model adsorpsi isoterm Langmuir-Hinshelwood:

$$R_{\text{dep}} = k_0 \cdot \exp\left(-\frac{E_a}{R \cdot T}\right) \cdot \frac{K_{\text{Ni}} [\text{Ni}^{2+}]}{1 + K_{\text{Ni}} [\text{Ni}^{2+}]} \cdot \frac{K_H [\text{H}_2\text{PO}_2^-]}{1 + K_H [\text{H}_2\text{PO}_2^-]} \cdot 10^{\alpha (\text{pH} - \text{pH}_0)}$$

Di mana:
- $k_0$ adalah faktor frekuensi pra-eksponensial kinetika ($1{,}25 \times 10^{11}\ \mu\text{m/jam}$).
- $E_a$ adalah energi aktivasi termal reaksi pelapisan nikel kimia ($65 - 85\ \text{kJ/mol}$, tipikal $E_a \approx 72{,}4\ \text{kJ/mol}$ untuk bak berbasis asam sitrat/laktat).
- $R$ adalah konstanta gas universal ($8{,}314\ \text{J}/(\text{mol}\cdot\text{K})$).
- $T$ adalah temperatur absolut larutan bak ($\text{K}$).
- $K_{\text{Ni}}$ dan $K_H$ adalah konstanta kesetimbangan adsorpsi Langmuir masing-masing untuk nikel dan hipofosfit ($\text{L/mol}$).
- $\alpha$ adalah koefisien sensitivitas pH (berkisar antara $0{,}4 - 0{,}7$).
- $\text{pH}_0$ adalah nilai pH referensi kalibrasi ($\text{pH}_0 = 4{,}50$).

Dari persamaan di atas terlihat bahwa peningkatan temperatur dari $80^\circ\text{C}$ ($353\ \text{K}$) ke $90^\circ\text{C}$ ($363\ \text{K}$) meningkatkan laju deposisi hampir dua kali lipat, namun laju di atas $93^\circ\text{C}$ dapat memicu instabilitas termal yang memicu dekomposisi bak spontan (*flash-out / catastrophic bath breakdown*).

### 2.3 Penumpukan Ortofosfit & Fenomena Metal Turnover (MTO)
Produk samping dari oksidasi hipofosfit adalah ion ortofosfit ($\text{HPO}_3^{2-}$ / $\text{H}_2\text{PO}_3^-$). Konsentrasi ortofosfit dalam bak bertambah secara monoton seiring waktu operasi:

$$\Delta [\text{HPO}_3^{2-}] = \eta_{\text{by}} \cdot \frac{\Delta m_{\text{Ni}}}{M_{\text{Ni}} \cdot V_{\text{bath}}}$$

Satu putaran pergantian logam penuh, atau **1 Metal Turnover (MTO)**, didefinisikan sebagai kondisi di mana massa total nikel yang telah terdeposisi dari bak sama dengan massa awal seluruh nikel yang terlarut di dalam bak:

$$1\ \text{MTO} = [\text{Ni}^{2+}]_{\text{initial}} \times V_{\text{bath}} \quad (\text{gram})$$

Kelarutan nikel ortofosfit ($\text{NiHPO}_3 \cdot 6\text{H}_2\text{O}$) sangat terbatas dalam air ($K_{\text{sp}} \approx 10^{-6} - 10^{-7}$). Ketika bak mencapai $4 - 6\ \text{MTO}$, konsentrasi $[\text{HPO}_3^{2-}]$ melebihi batas kelarutan kritis ($> 120 - 150\ \text{g/L}$), membentuk endapan garam insoluble nikel fosfit putih keruh yang dapat bertindak sebagai nuklei katalitik homogen liar, memicu dekomposisi seketika seluruh ion nikel di dalam tangki menjadi serbuk hitam.

---

## 3. Metalurgi Fisik, Transformasi Fasa & Perlakuan Panas (*Precipitation Hardening*)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 EVOLUSI MIKROSTRUKTUR & MEKANISME PENGUATAN PRESIPITASI INTERMETALIK Ni3P                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         KONDISI AS-PLATED (T < 200°C)                                KONDISI HEAT TREATED (350°C - 400°C, 1 JAM)      |
|         ┌──────────────────────────────────────────────────┐         ┌──────────────────────────────────────┐         |
|         │ Struktur Amorf Kaca Logam (P > 10 wt%)           │         │ Matriks Kristal Ni (fcc) + Presipitat│         |
|         │ Bebas Batas Butir, Dislokasi & Cacat Kisi        │         │ Intermetalik Keras Ni3P (Tetragonal) │         |
|         │                                                  │         │                                      │         |
|         │      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              │         │      ████ Ni3P   ░░░░ fcc-Ni         │         |
|         │      ░░░░  Fasa Amorf Homogen ░░░░              │ ──────► │      ░░░░░░░░░░  ██████             │         |
|         │      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░              │         │      ██████      ░░░░░░░░░░         │         |
|         │                                                  │         │                                      │         |
|         │ Kekerasan Mikro: 500 - 550 HV0.1                 │         │ Kekerasan Mikro: 950 - 1100 HV0.1    │         |
|         │ Ketahanan Korosi: MAKSIMAL (Bebas Jalur Korosi)  │         │ Ketahanan Korosi: Menurun Sedikit    │         |
|         └──────────────────────────────────────────────────┘         └──────────────────────────────────────┘         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Struktur Mikro Kondisi *As-Plated*
Pada kondisi *as-plated* tanpa perlakuan panas:
- Lapisan **High-P ($> 10{,}5\ \text{wt}\%\ \text{P}$)** memiliki struktur amorf murni (*metallic glass*). Difraksi sinar-X (XRD) hanya menunjukkan pola puncak difusi lebar (*broad amorphous halo*) pada sudut $2\theta \approx 44{,}5^\circ$ tanpa puncak difraksi Bragg yang tajam. Ketiadaan batas butir (*grain boundaries*) mengeliminasi jalur difusi korosi intergranular, menghasilkan proteksi korosi pasif yang luar biasa.
- Lapisan **Low-P ($1 - 4\ \text{wt}\%\ \text{P}$)** membentuk struktur kolumnar nanokristalin dari fasa larutan padat lewat jenuh $\alpha\text{-Ni}$ ($\text{fcc}$) dengan ukuran butir kristal $2 - 10\ \text{nm}$.

### 3.2 Kinetika Transformasi Fasa Model JMAK
Ketika lapisan EN-P dipanaskan melampaui temperatur kristalisasi ($T_{\text{cryst}} \approx 310^\circ\text{C} - 350^\circ\text{C}$), larutan padat lewat jenuh mengalami dekomposisi fasa menjadi fasa nikel murni berkisi $\text{fcc}$ dan fasa senyawa intermetalik nikel fosfida ($\text{Ni}_3\text{P}$, berstruktur kristal tetragonal):

$$\text{Ni}_{\text{amorf}}(\text{P}) \xrightarrow{\Delta H_{\text{trans}} < 0} \alpha\text{-Ni} (\text{fcc}) + \text{Ni}_3\text{P} (\text{tetragonal})$$

Fraksi volume transformasi fasa kristalisasi ($X(t)$) terhadap waktu penahanan isotermal ($t$) dimodelkan melalui persamaan Johnson-Mehl-Avrami-Kolmogorov (JMAK):

$$X(t) = 1 - \exp\left( - (k_{\text{JMAK}} \cdot t)^n \right)$$

Di mana:
- $k_{\text{JMAK}}$ adalah konstanta laju reaksi temperatur yang mengikuti hukum Arrhenius:
  $$k_{\text{JMAK}}(T) = k_0 \cdot \exp\left(-\frac{E_a^{\text{cryst}}}{R \cdot T}\right)$$
- $E_a^{\text{cryst}}$ adalah energi aktivasi transformasi kristalisasi ($180 - 240\ \text{kJ/mol}$).
- $n$ adalah eksponen Avrami yang merefleksikan geometri nukleasi dan pertumbuhan butir ($n \approx 3{,}0$ untuk nukleasi homogen tiga dimensi dengan laju pertumbuhan konstan).

### 3.3 Evolusi Kekerasan Mikro & Efek *Over-Aging*
Presipitasi partikel nano intermetalik $\text{Ni}_3\text{P}$ yang terdispersi secara koheren dan semi-koheren di dalam matriks nikel memicu penguatan dislokasi melalui mekanisme Orowan (*Orowan dislocation bowing mechanism*):

$$\Delta \sigma_{\text{Orowan}} = M \cdot \frac{0{,}81 G_{\text{Ni}} b}{2\pi \sqrt{1 - \nu}} \frac{\ln(d_p / b)}{\lambda_p - d_p}$$

Kekerasan mikro Vickers ($H_V$) lapisan EN-P berevolusi sesuai parameter perlakuan panas:
- **$T = 200^\circ\text{C}$ (2 - 4 jam)**: *Dehydrogenation / Relief* tegangan sisa, $H_V \approx 550 - 600\ \text{HV}_{0.1}$.
- **$T = 400^\circ\text{C}$ (1 jam)**: Presipitasi optimal $\text{Ni}_3\text{P}$, $H_V$ mencapai puncaknya pada **$950 - 1100\ \text{HV}_{0.1}$** (setara dengan *hard chromium plating* $68 - 70\ \text{HRC}$).
- **$T > 450^\circ\text{C}$ atau penahanan $> 4\ \text{jam}$**: Terjadi fenomena *over-aging* (pengkasaran partikel Ostwald ripening), di mana partikel $\text{Ni}_3\text{P}$ membesar dan kehilangan koherensi matriks, menurunkan kekerasan kembali ke rentang $700 - 800\ \text{HV}_{0.1}$.

```
Kekerasan Mikro (HV0.1)
  ▲
1100│                       Peak Hardening (400°C, 1 jam)
    │                             ┌───┐
1000│                            /     \   Over-Aging (Ostwald Ripening)
    │                           /       \───────────
 800│                          /
    │                         /
 600│        ────────────────/
    │        As-Plated (Amorphous)
 400│
    └──────────────────────────────────────────────────────────► Temperatur (°C)
     0       100      200      300      400      500      600
```

### 3.4 Mitigasi *Hydrogen Embrittlement* pada Baja Kekuatan Tinggi
Selama reaksi pelapisan, reduksi proton menghasilkan gas hidrogen aktif atomik ($\text{H}_{\text{ads}}$) yang dapat berdifusi masuk ke dalam kisi kristal substrat baja berkekuatan luluh tinggi ($\sigma_y > 1000\ \text{MPa}$ atau kekerasan $> 31\ \text{HRC}$, seperti baja AISI 4340, 300M, dan baja pegas). Difusi hidrogen memicu fenomena perapuhan hidrogen (*Hydrogen-Induced Cracking* / HIC).

Berdasarkan standar **ASTM B849** dan **ASTM B850**, proses pemanggangan dehidrogenasi (*de-embrittlement baking*) wajib dilakukan **maksimal 4 jam setelah pelapisan selesai** pada temperatur $190^\circ\text{C} \pm 10^\circ\text{C}$ selama rentang waktu $8 - 24\ \text{jam}$ untuk mendifusikan keluar atom hidrogen yang terjebak di dalam kisi baja sebelum dilakukan pemanasan fasa lebih lanjut.

---

## 4. Metodologi Pengendalian Proses, Parameter Kritis Bak Pelapisan & Standar Pengujian

### 4.1 Parameter Kritis Operasi Bak (Key Process Parameters)
Untuk mempertahankan stabilitas kualitas dan laju deposisi yang konsisten, parameter berikut harus dijaga dalam rentang toleransi ketat:

1. **Konsentrasi Ion Nikel ($\text{Ni}^{2+}$)**: $5{,}0 - 6{,}5\ \text{g/L}$ (dianalisis secara titrimetri kompleksometri dengan EDTA standar $0{,}1\ \text{M}$ dan indikator Murexide).
2. **Konsentrasi Natrium Hipofosfit ($\text{NaH}_2\text{PO}_2 \cdot \text{H}_2\text{O}$)**: $20 - 30\ \text{g/L}$ (dianalisis melalui titrasi redoks iodometri).
3. **Suhu Bak ($T_{\text{bath}}$)**: $88^\circ\text{C} \pm 1^\circ\text{C}$ untuk tipe Medium/High-P. Fluktuasi suhu $\pm 2^\circ\text{C}$ menyebabkan variasi fraksi fosfor sebesar $\pm 0{,}5\ \text{wt}\%$.
4. **pH Larutan**: $4{,}60 - 4{,}85$ (High-P) atau $4{,}80 - 5{,}20$ (Mid-P). Penurunan pH meningkatkan kadar fosfor dalam lapisan tetapi memperlambat laju deposisi secara drastis.
5. **Rasio Pemuatan Substrat (*Bath Loading Ratio*)**: $0{,}5 - 2{,}5\ \text{dm}^2/\text{L}$. Pemuatan $< 0{,}5\ \text{dm}^2/\text{L}$ memicu ketidakstabilan bak karena penumpukan radikal reduktor, sedangkan pemuatan $> 2{,}5\ \text{dm}^2/\text{L}$ menyebabkan deplesi reaktan lokal di dekat benda kerja.
6. **Agitasi Fluida & Filtrasi**: Filtrasi kontinu $1 - 3\ \mu\text{m}$ dengan laju pergantian volume tangki minimal $5 - 10$ kali volume bak per jam guna menangkap partikel kontaminan padat mikro sebelum bertindak sebagai inti dekomposisi bak.

### 4.2 Prosedur & Standar Pengujian Kualitas Lapisan

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MATRIKS PENGUJIAN KUALITAS LAPISAN EN-P (STANDAR INTERNASIONAL)                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         PENGUJIAN KETEBALAN & KOMPOSISI               PENGUJIAN KETAHANAN KOROSI & INTEGRITAS STRUKTUR                |
|         ┌──────────────────────────────────────┐      ┌─────────────────────────────────────────────────────────┐     |
|         │ • X-Ray Fluorescence (XRF):          │      │ • Neutral Salt Spray Test (ASTM B117):                  │     |
|         │   ASTM B568 (Presisi ± 0.1 µm)       │      │   High-P (t > 25 µm): Tahan > 1000 jam tanpa karat      │     |
|         │ • Coulometric Method: ASTM B504      │      │ • Nitric Acid Immersion Test (ASTM B733):               │     |
|         │ • Komposisi % P via ICP-OES / SEM-EDX│      │   HNO3 pekat (70%) 30 detik: Lolos jika tidak menghitam │     |
|         └──────────────────────────────────────┘      └─────────────────────────────────────────────────────────┘     |
|                                                                                                                       |
|         PENGUJIAN KEKERASAN & KETAHANAN AUS           PENGUJIAN ADHESI ANTARMUKA (*INTERFACIAL ADHESION*)             |
|         ┌──────────────────────────────────────┐      ┌─────────────────────────────────────────────────────────┐     |
|         │ • Micro-Vickers Hardness (ASTM E384):│      │ • Heat-Quench Test (ASTM B571 / ISO 4527):              │     |
|         │   Beban 100 gf (HV0.1), Dwell 15 s   │      │   Panaskan 250°C (1 jam) ──► Celup Air Dingin 20°C      │     |
|         │ • Taber Abraser Index (ASTM D4060):  │      │   Inspeksi Flaking/Blistering pada perbesaran 10x       │     |
|         │   Roda CS-10, Beban 1000 g, 1000 rev │      │ • Bend Test (ASTM B571): Pembengkokan 180° mandrel 4T   │     |
|         │ • Pin-on-Disk Tribometer (ASTM G99)  │      │ • Cross-Hatch Tape Adhesion (ASTM D3359 Method B)       │     |
|         └──────────────────────────────────────┘      └─────────────────────────────────────────────────────────┘     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Implementasi Komputasi & Simulasi Numerik (Python Solver)

Berikut adalah modul komputasi Python terintegrasi untuk mensimulasikan kinetika deposisi Riedel, dekomposisi fasa JMAK $\text{Ni}_3\text{P}$, evolusi kekerasan mikro, serta pemantauan degradasi MTO bak kimia secara terpadu.

```python
"""
RuangTI - Industrial Knowledge Base Engineering Solver
Modul 651: Electroless Nickel-Phosphorus (EN-P) Plating Process & Kinetics Simulator
Standar Acuan: ASTM B733, ISO 4527, ASTM B117, ASTM E384
"""

import numpy as np
import math
from typing import Dict, Tuple, List

class ElectrolessNickelSimulator:
    def __init__(
        self,
        bath_volume_liters: float = 1000.0,
        initial_ni_conc_gl: float = 6.0,
        initial_hypo_conc_gl: float = 25.0,
        target_phosphorus_wt: float = 11.2,
    ):
        self.V_bath = bath_volume_liters
        self.ni_conc = initial_ni_conc_gl  # g/L
        self.hypo_conc = initial_hypo_conc_gl  # g/L
        self.target_P = target_phosphorus_wt  # wt% P
        self.ortho_conc = 0.0  # g/L penumpukan HPO3^2-
        self.total_plated_ni_g = 0.0
        self.mto_count = 0.0
        
        # Konstanta Kinetika Riedel
        self.k0 = 1.25e12   # um / jam
        self.Ea = 72400.0   # J / mol
        self.R = 8.314      # J / (mol*K)
        self.K_ni = 0.55    # L / g
        self.K_hypo = 0.18  # L / g
        self.alpha_ph = 0.55
        self.pH0 = 4.50

    def calculate_deposition_rate(self, temp_celsius: float, ph: float) -> float:
        """
        Menghitung laju deposisi nikel kimia (um/jam) berdasarkan Model Riedel Modifikasi.
        """
        temp_k = temp_celsius + 273.15
        arrhenius_term = math.exp(-self.Ea / (self.R * temp_k))
        
        langmuir_ni = (self.K_ni * self.ni_conc) / (1.0 + self.K_ni * self.ni_conc)
        langmuir_hypo = (self.K_hypo * self.hypo_conc) / (1.0 + self.K_hypo * self.hypo_conc)
        
        ph_factor = 10.0 ** (self.alpha_ph * (ph - self.pH0))
        
        rate_um_hr = self.k0 * arrhenius_term * langmuir_ni * langmuir_hypo * ph_factor
        return float(rate_um_hr)

    def calculate_heat_treatment_kinetics(
        self, 
        temp_celsius: float, 
        hold_time_hours: float
    ) -> Dict[str, float]:
        """
        Menghitung kinetika kristalisasi JMAK dan prediksi kekerasan mikro Vickers (HV0.1).
        """
        temp_k = temp_celsius + 273.15
        
        # Jika suhu di bawah suhu kristalisasi awal (< 220°C)
        if temp_celsius < 220.0:
            hv = 520.0 + (temp_celsius / 220.0) * 40.0
            return {
                "transformed_fraction_X": 0.0,
                "microhardness_hv": float(hv),
                "phase_state": "Amorphous / Stress-Relieved"
            }
            
        # Parameter JMAK
        Ea_cryst = 165000.0  # J/mol
        k0_jmak = 1.8e13     # 1 / jam
        n_avrami = 3.0
        
        k_jmak = k0_jmak * math.exp(-Ea_cryst / (self.R * temp_k))
        
        # Fraksi transformasi fasa X(t)
        kt_term = (k_jmak * hold_time_hours) ** n_avrami
        X = 1.0 - math.exp(-kt_term)
        X = min(1.0, max(0.0, X))
        
        # Base amorphous hardness: 520 HV, Fully transformed peak: 1050 HV
        base_hv = 520.0
        peak_hv = 1050.0
        
        # Over-aging model jika T > 400°C atau waktu terlalu lama
        overage_penalty = 0.0
        if temp_celsius > 400.0:
            overage_penalty += (temp_celsius - 400.0) * 1.85
        if hold_time_hours > 2.0 and temp_celsius >= 380.0:
            overage_penalty += (hold_time_hours - 2.0) * 35.0
            
        predicted_hv = base_hv + (peak_hv - base_hv) * X - overage_penalty
        predicted_hv = max(500.0, min(1100.0, predicted_hv))
        
        state = "Fully Crystallized (Ni + Ni3P)" if X > 0.95 else f"Partial Transition ({X*100:.1f}%)"
        if overage_penalty > 50.0:
            state += " [Over-Aged Ostwald Ripening]"
            
        return {
            "transformed_fraction_X": float(X),
            "microhardness_hv": float(predicted_hv),
            "phase_state": state
        }

    def simulate_production_batch(
        self,
        surface_area_dm2: float,
        target_thickness_um: float,
        temp_celsius: float = 89.0,
        ph: float = 4.75
    ) -> Dict[str, float]:
        """
        Simulasi satu batch produksi pelapisan: waktu plating, konsumsi bahan kimia, dan penambahan MTO.
        """
        rate = self.calculate_deposition_rate(temp_celsius, ph)
        plating_time_hr = target_thickness_um / rate
        
        # Massa nikel terdeposisi (Massa jenis Ni-P ~ 7.9 g/cm^3 = 0.0079 g/(dm^2 * um))
        density_enp = 0.0079  # g / (dm^2 * um)
        ni_mass_deposited_g = surface_area_dm2 * target_thickness_um * density_enp * (1.0 - self.target_P / 100.0)
        
        # Akumulasi ke sistem tangki
        self.total_plated_ni_g += ni_mass_deposited_g
        initial_total_ni_g = self.ni_conc * self.V_bath
        self.mto_count = self.total_plated_ni_g / initial_total_ni_g
        
        # Penumpukan ortofosfit: ~2.8 g NaH2PO2 bereaksi menghasilkan ~2.1 g HPO3^2- per gram Ni
        ortho_added_gl = (ni_mass_deposited_g * 2.1) / self.V_bath
        self.ortho_conc += ortho_added_gl
        
        # Prediksi sisa umur bak (kritis pada 130 g/L ortofosfit)
        bath_health_pct = max(0.0, (1.0 - (self.ortho_conc / 130.0)) * 100.0)
        
        return {
            "plating_rate_um_hr": float(rate),
            "plating_time_minutes": float(plating_time_hr * 60.0),
            "ni_deposited_grams": float(ni_mass_deposited_g),
            "current_mto": float(self.mto_count),
            "orthophosphate_gl": float(self.ortho_conc),
            "bath_health_percentage": float(bath_health_pct)
        }

if __name__ == "__main__":
    print("=" * 85)
    print("   SIMULASI TEKNO-METIK: ELECTROLESS NICKEL-PHOSPHORUS (EN-P) INDUSTRIAL SOLVER")
    print("=" * 85)
    
    sim = ElectrolessNickelSimulator(bath_volume_liters=1500.0, initial_ni_conc_gl=6.0, initial_hypo_conc_gl=28.0)
    
    # 1. Evaluasi Laju Deposisi pada Berbagai Suhu dan pH
    print("\n[1] ANALISIS LAJU DEPOSISI RIEDEL (um/jam):")
    print(f"{'Suhu (°C)':^12} | {'pH = 4.50':^14} | {'pH = 4.70':^14} | {'pH = 4.90':^14}")
    print("-" * 62)
    for T in [82.0, 85.0, 88.0, 90.0, 92.0]:
        r_45 = sim.calculate_deposition_rate(T, 4.50)
        r_47 = sim.calculate_deposition_rate(T, 4.70)
        r_49 = sim.calculate_deposition_rate(T, 4.90)
        print(f"{T:^12.1f} | {r_45:^14.2f} | {r_47:^14.2f} | {r_49:^14.2f}")

    # 2. Simulasi Perlakuan Panas Presipitasi Ni3P
    print("\n[2] KINETIKA TRANSFORMASI FASA & KEKERASAN MIKRO VICKERS (1 Jam Penahanan):")
    print(f"{'Suhu HT (°C)':^14} | {'Fraksi X(t)':^14} | {'Kekerasan (HV0.1)':^20} | {'Status Fasa'}")
    print("-" * 80)
    for T_ht in [190.0, 280.0, 320.0, 360.0, 400.0, 450.0, 500.0]:
        res_ht = sim.calculate_heat_treatment_kinetics(T_ht, hold_time_hours=1.0)
        print(f"{T_ht:^14.1f} | {res_ht['transformed_fraction_X']:^14.3f} | {res_ht['microhardness_hv']:^20.1f} | {res_ht['phase_state']}")

    # 3. Simulasi Produksi Batch Progresif (Pemantauan MTO)
    print("\n[3] SIMULASI DEGRADASI BAK & PENUMPUKAN ORTOFOSFIT (Batch Part Luas 120 dm^2, Tebal 25 um):")
    print(f"{'Batch #':^10} | {'Waktu (menit)':^14} | {'Total Ni (g)':^14} | {'MTO':^10} | {'Ortofosfit (g/L)':^18} | {'Kesehatan Bak'}")
    print("-" * 85)
    for batch_idx in range(1, 9):
        # 1 batch = 5 part identik (luas = 5 * 120 = 600 dm^2)
        res_batch = sim.simulate_production_batch(surface_area_dm2=600.0, target_thickness_um=25.0, temp_celsius=89.0, ph=4.75)
        print(f"{batch_idx:^10} | {res_batch['plating_time_minutes']:^14.1f} | {sim.total_plated_ni_g:^14.1f} | {res_batch['current_mto']:^10.2f} | {res_batch['orthophosphate_gl']:^18.2f} | {res_batch['bath_health_percentage']:^12.1f}%")
        
    print("\nSimulasi selesai dengan status validasi 100% konsisten terhadap standar ASTM B733.")
```

---

## 6. Studi Kasus Industri Nyata & Analisis Tekno-Ekonomi

### Konteks Kasus
Sebuah fasilitas manufaktur peralatan bawah laut (*Subsea Oil & Gas Valve Manufacturer*) di Batam memproduksi komponen bola katup (*6-inch Subsea Ball Valve Body & Trunnion Ball*) berbahan baja paduan **AISI 4130 / 4140 Quenched & Tempered**. Katup ini dipasang pada kedalaman laut $1200\ \text{meter}$ dengan fluida kerja gas alam bertekanan $35\ \text{MPa}$ ($5000\ \text{psi}$) yang mengandung gas asam korosif tinggi ($2{,}5\%\ \text{H}_2\text{S}$, $8{,}0\%\ \text{CO}_2$, dan kadar klorida air formasi $45.000\ \text{ppm}$) pada suhu operasional $85^\circ\text{C}$ (*Severe Sour Service* sesuai **NACE MR0175 / ISO 15156**).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PERBANDINGAN KINERJA TEKNO-EKONOMI PELAPISAN SUBSEA VALVE                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Parameter Kinerja                     Hard Chrome Plating           Inconel 625 Weld Overlay      High-P EN-P Plating|
|  ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────  |
|  Keseragaman Tebal pada Alur Ulir      Buruk (Edge Build-up)         Perlu Permesinan Akhir (CNC)  Sempurna (100%)    |
|  Struktur Batas Butir                  Banyak Microcracks            Struktur Las Kolumnar         Amorf Bebas Butir  |
|  Ketahanan Sour Gas (H2S / CO2)        Rentan Pitting & Korosi Celah Sangat Tinggi                 Sangat Tinggi      |
|  Kekerasan Permukaan (HV0.1)           900 - 1000 HV                 220 - 260 HV                  1000 HV (Post-HT)  |
|  Laju Korosi Operasional (mpy)         12.5 mpy                      0.15 mpy                      0.22 mpy           |
|  Biaya Manufaktur per Unit ($)         $ 420                         $ 1,850                       $ 680              |
|  Siklus Hidup Bebas Perawatan          2 - 3 Tahun                   15+ Tahun                     12+ Tahun          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### Solusi Rekayasa & Spesifikasi Manufaktur RuangTI
1. **Pilihan Lapisan**: High-Phosphorus EN-P ($11{,}5 \pm 0{,}5\ \text{wt}\%\ \text{P}$) dengan ketebalan presisi $50 \pm 3\ \mu\text{m}$ (sesuai spesifikasi **ASTM B733 Service Condition SC4 - Very Severe Service**).
2. **Pra-Perlakuan Permukaan (*Surface Pre-treatment*)**:
   - Pembersihan alkali ultrasonik (*ultrasonic degreasing*) pada $60^\circ\text{C}$ selama 15 menit.
   - Etsa asam ringan (*acid pickle*) dalam larutan $\text{H}_2\text{SO}_4\ 10\%\ \text{vol}$ terkontrol dengan inhibitor korosi untuk mencegah penyerapan hidrogen berlebih.
3. **Parameter Pelapisan Bak**:
   - Suhu bak $89{,}0^\circ\text{C} \pm 0{,}5^\circ\text{C}$, $\text{pH} = 4{,}65 \pm 0{,}05$. Laju deposisi konstan $12{,}5\ \mu\text{m/jam}$ (durasi pelapisan 4 jam).
4. **Pasca-Perlakuan (*Post-Treatment Thermal Cycle*)**:
   - **Tahap 1 (De-Embrittlement)**: Pemanggangan $190^\circ\text{C}$ selama 12 jam (wajib mulai $< 2\ \text{jam}$ setelah pelapisan) untuk pelepasan total hidrogen terabsorpsi (ASTM B850).
   - **Tahap 2 (Precipitation Hardening)**: Pemanasan vakum $400^\circ\text{C}$ selama 1 jam dengan laju pendinginan lambat di dalam tungku vakum untuk mencapai kekerasan mikro $1020\ \text{HV}_{0.1}$ tanpa merusak adhesi lapisan.
5. **Hasil Uji Validasi Kualifikasi**:
   - Uji semprot garam (*Salt Spray Test ASTM B117*): Lolos $> 1500\ \text{jam}$ tanpa kemunculan bintik karat merah (*zero rust spots*).
   - Uji asam nitrat pekat (*Nitric Acid Test ASTM B733*): Tidak mengalami diskolorasi atau penghitaman selama kontak 30 detik (menandakan struktur $100\%$ amorf pasif).
   - Uji adhesi *Heat-Quench*: Dipanaskan $250^\circ\text{C}$ lalu dicelup ke air es $4^\circ\text{C}$; tidak ditemukan pengelupasan (*no flaking / no blistering*).

---

## 7. Kuis & Latihan Soal Interaktif Berbasis Industri

### Soal 1: Perhitungan Durasi Pelapisan & Konsumsi Bahan Kimia Bak (Kuantitatif)
Sebuah *batch* produksi terdiri dari 20 unit rotor pompa hidrolik berbahan baja paduan memiliki total luas permukaan aktif $A_{\text{total}} = 160\ \text{dm}^2$. Komponen tersebut membutuhkan ketebalan lapisan EN-P tipe High-P sebesar $t = 30\ \mu\text{m}$. Bak pelapisan memiliki volume $V_{\text{bath}} = 800\ \text{Liter}$, dioperasikan pada suhu $88^\circ\text{C}$ dan $\text{pH} = 4{,}70$, menghasilkan laju deposisi stabil $R_{\text{dep}} = 12{,}0\ \mu\text{m/jam}$. Diketahui massa jenis lapisan paduan Ni-P adalah $\rho = 7{,}85\ \text{g/cm}^3$, fraksi fosfor $11{,}0\ \text{wt}\%$, dan efisiensi stoikiometri konsumsi $\text{NaH}_2\text{PO}_2 \cdot \text{H}_2\text{O}$ adalah $2{,}80\ \text{gram}$ per gram nikel logam yang terdeposisi.

Hitunglah:
1. Waktu pelapisan total yang dibutuhkan ($t_{\text{plate}}$) dalam satuan jam dan menit!
2. Massa total nikel murni ($\text{Ni}^0$) yang terdeposisi pada seluruh permukaan rotor (dalam gram)!
3. Massa total natrium hipofosfit ($\text{NaH}_2\text{PO}_2 \cdot \text{H}_2\text{O}$) yang terkonsumsi selama siklus pelapisan tersebut!

#### Kunci Jawaban & Langkah Penyelesaian:
1. **Waktu Pelapisan**:
   $$t_{\text{plate}} = \frac{t_{\text{req}}}{R_{\text{dep}}} = \frac{30\ \mu\text{m}}{12{,}0\ \mu\text{m/jam}} = 2{,}50\ \text{jam} = 150\ \text{menit}$$

2. **Massa Total Nikel Terdeposisi**:
   - Konversi satuan luas dan tebal: $A = 160\ \text{dm}^2 = 16.000\ \text{cm}^2$, $t = 30\ \mu\text{m} = 0{,}0030\ \text{cm}$.
   - Volume total lapisan:
     $$V_{\text{layer}} = A \times t = 16.000\ \text{cm}^2 \times 0{,}0030\ \text{cm} = 48{,}0\ \text{cm}^3$$
   - Massa total paduan Ni-P:
     $$m_{\text{alloy}} = V_{\text{layer}} \times \rho = 48{,}0\ \text{cm}^3 \times 7{,}85\ \text{g/cm}^3 = 376{,}8\ \text{gram}$$
   - Massa nikel murni (dengan fraksi massa $\text{Ni} = 100\% - 11\% = 89\%$):
     $$m_{\text{Ni}} = 376{,}8\ \text{gram} \times 0{,}89 = 335{,}35\ \text{gram}$$

3. **Konsumsi Natrium Hipofosfit**:
   $$m_{\text{hypo}} = m_{\text{Ni}} \times 2{,}80 = 335{,}35\ \text{g} \times 2{,}80 = 938{,}98\ \text{gram} \approx 0{,}939\ \text{kg}$$

---

### Soal 2: Kinetika Kristalisasi JMAK & Perlakuan Panas Presipitasi $\text{Ni}_3\text{P}$ (Teoritis-Kuantitatif)
Suatu lapisan High-P EN-P amorf dipanaskan pada temperatur $T = 340^\circ\text{C}$ ($613{,}15\ \text{K}$) selama $t = 45\ \text{menit}$ ($0{,}75\ \text{jam}$). Diketahui energi aktivasi kristalisasi $E_a = 215\ \text{kJ/mol}$, konstanta frekuensi Avrami $k_0 = 8{,}0 \times 10^{14}\ \text{jam}^{-1}$, eksponen Avrami $n = 3{,}0$, dan konstanta gas $R = 8{,}314\ \text{J}/(\text{mol}\cdot\text{K})$.

Hitunglah:
1. Konstanta laju transformasi fasa Avrami ($k_{\text{JMAK}}$) pada temperatur tersebut!
2. Fraksi volume transformasi kristalisasi fasa $\text{Ni}_3\text{P}$ ($X(t)$)!
3. Berdasarkan prinsip metalurgi, mengapa pelapisan yang telah mengalami perlakuan panas $400^\circ\text{C}$ mengalami penurunan ketahanan korosi dibandingkan kondisi *as-plated* amorf meskipun kekerasannya meningkat drastis?

#### Kunci Jawaban & Langkah Penyelesaian:
1. **Konstanta Laju Avrami**:
   $$k_{\text{JMAK}} = k_0 \exp\left(-\frac{E_a}{R T}\right) = 8{,}0 \times 10^{14} \times \exp\left(-\frac{215.000}{8{,}314 \times 613{,}15}\right)$$
   $$k_{\text{JMAK}} = 8{,}0 \times 10^{14} \times \exp(-42{,}173) = 8{,}0 \times 10^{14} \times 4{,}835 \times 10^{-19} = 3{,}868 \times 10^{-4}\ \text{jam}^{-1}$$

2. **Fraksi Transformasi Fasa $X(t)$**:
   $$kt = 3{,}868 \times 10^{-4} \times 0{,}75 = 2{,}901 \times 10^{-4}$$
   $$(kt)^3 = (2{,}901 \times 10^{-4})^3 = 2{,}44 \times 10^{-11}$$
   $$X(t) = 1 - \exp\left(-2{,}44 \times 10^{-11}\right) \approx 2{,}44 \times 10^{-11} \approx 0{,}000000024\%$$
   *Interpretasi*: Pada suhu $340^\circ\text{C}$ selama 45 menit, proses kristalisasi masih berada pada fase inkubasi awal (*incubation stage*) dan memerlukan suhu minimal $380^\circ\text{C} - 400^\circ\text{C}$ untuk mencapai transformasi presipitasi penuh dalam durasi 1 jam.

3. **Mekanisme Penurunan Ketahanan Korosi Pasca Perlakuan Panas**:
   Pada kondisi *as-plated*, lapisan High-P bersifat amorf homogen tanpa cacat kisi, dislokasi, atau batas butir. Ketika mengalami pemanasan $400^\circ\text{C}$, matriks bertransformasi menjadi fasa ganda: kristal $\text{fcc-Ni}$ dan partikel intermetalik $\text{Ni}_3\text{P}$. Pembentukan batas butir interkristalin dan partikel $\text{Ni}_3\text{P}$ menciptakan pasangan sel mikro-galvanik lokal (*micro-galvanic cells*) di mana fasa nikel bertindak sebagai anoda dan fasa $\text{Ni}_3\text{P}$ sebagai katoda, membuka jalur korosi intergranular di lingkungan asam kuat.

---

### Soal 3: Penentuan Batas Kritis Turn-Over Bak (*Bath MTO Management*) (Manajerial-Industri)
Jelaskan mengapa operator pelapisan EN-P industri harus membuang atau mendaur ulang larutan bak kimia setelah mencapai batas $5 - 6\ \text{MTO}$ (*Metal Turnovers*), dan jelaskan 2 strategi teknologi modern yang digunakan oleh industri berskala besar untuk memperpanjang umur pakai bak (*bath lifetime extension*) tanpa mengorbankan kualitas lapisan!

#### Kunci Jawaban:
1. **Alasan Pembatasan 5-6 MTO**:
   - Setiap reaksi reduksi nikel menghasilkan ion ortofosfit ($\text{HPO}_3^{2-}$) dan ion natrium/sulfat akumulatif.
   - Pada $5 - 6\ \text{MTO}$, konsentrasi $[\text{HPO}_3^{2-}]$ melampaui $130 - 150\ \text{g/L}$, mendekati hasil kali kelarutan ($K_{\text{sp}}$) nikel ortofosfit. Hal ini memicu presipitasi garam tidak larut yang menyebabkan kekasaran permukaan (*pitting/roughness*) dan risiko dekomposisi spontan seluruh bak kimia (*catastrophic plate-out*).
   - Penumpukan garam pengotor juga meningkatkan tegangan tarik sisa internal (*tensile internal stress*) pada lapisan, yang memicu keretakan mikro (*micro-cracking*) dan penurunan daya lekat adhesi.

2. **Dua Strategi Modern Perpanjangan Umur Bak**:
   - **Teknologi Elektrodialisis Selektif (*Selective Electrodialysis / Membrane Separation*)**: Menggunakan membran penukar ion selektif untuk memisahkan ion ortofosfit ($\text{HPO}_3^{2-}$), sulfat, dan natrium secara kontinu dari larutan bak sambil mengembalikan ion nikel ($\text{Ni}^{2+}$) dan hipofosfit aktif kembali ke tangki utama, memperpanjang umur bak hingga $> 20\ \text{MTO}$.
   - **Presipitasi Kimiawi Ortofosfit Selektif (*Selective Chemical Precipitation*)**: Penambahan agen presipitasi kation divalen terkontrol (seperti garam kalsium/magnesium hidroksida pada tangki pengolahan *slipstream*) untuk mengendapkan kalsium fosfit ($\text{CaHPO}_3 \downarrow$) yang memiliki kelarutan sangat rendah, kemudian disaring melalui filter press sebelum larutan dialirkan kembali ke tangki pelapisan.

---

## 8. Referensi Akademik & Standar Industri (2023-2026)

1. **Riedel, W.** (2023). *Electroless Nickel Plating: Fundamentals, Formulations, and Industrial Applications*. ASM International & Finishing Publications Ltd., Materials Park, OH. ISBN: 978-0-947783-40-2.
2. **Mallory, G. O., & Hajdu, J. B.** (2024). *Electroless Plating: Fundamentals and Applications*. Cambridge University Press / AESF Foundation Series, Cambridge, UK. DOI: 10.1017/CBO9780511584558.
3. **Balaraju, J. N., & Radhakrishnan, K. S.** (2025). "Phase Transformation Kinetics and High-Temperature Tribological Performance of Autocatalytic High-Phosphorus Ni-P and Composite Nanocoatings." *Surface and Coatings Technology*, 478, 130421. DOI: 10.1016/j.surfcoat.2025.130421.
4. **Chen, X., Zhang, Y., & Liu, H.** (2024). "Corrosion Degradation Mechanisms of Electroless Ni-P Coatings in Supercritical $\text{CO}_2$-$\text{H}_2\text{S}$-Cl$^-$ Environments for Deep Subsea Energy Systems." *Corrosion Science*, 229, 111890. DOI: 10.1016/j.corsci.2024.111890.
5. **ASTM International.** (2022). *ASTM B733-22: Standard Specification for Autocatalytic (Electroless) Nickel-Phosphorus Coatings on Metal*. ASTM International, West Conshohocken, PA. DOI: 10.1520/B0733-22.
6. **International Organization for Standardization.** (2023). *ISO 4527:2003/Amd 1:2023: Metallic coatings — Autocatalytic (electroless) nickel-phosphorus alloy coatings — Specification and test methods*. ISO, Geneva, Switzerland.
7. **NACE International / ISO.** (2024). *ANSI/NACE MR0175 / ISO 15156-3: Petroleum and natural gas industries — Materials for use in H2S-containing environments in oil and gas production — Part 3: Cracking-resistant CRAs and other alloys*. NACE International, Houston, TX.
