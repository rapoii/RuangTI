# Modul 611: Electropolishing (EP) & Anodic Electrochemical Surface Passivation: Teori Lapisan Difusi Viskos Jacquet, Kinetika Polarisasi Anodik, Perataan Mikro (Micro-Peak Leveling), Rasio Pengayaan Oksida Cr/Fe, dan Integritas Permukaan Ultra-Clean (ASTM B912, ISO 15730, ASME BPE, & ASTM A380/A967)

## 1. Pengantar & Konteks Industri *Electropolishing* (EP)

Dalam industri dengan persyaratan higienitas, kemurnian ultra-tinggi (*ultra-high purity - UHP*), biokompatibilitas, dan ketahanan korosi ekstrim—seperti manufaktur biofarmasi (reaktor bejana fermentasi, pipa transfer steril *Water-for-Injection - WFI*), pemrosesan semikonduktor canggih (sistem pengiriman gas UHP fotolitografi), implan medis ortopedi/kardiovaskular (stent koroner paduan Co-Cr dan pelat titanium), serta komponen ruang bakar kedirgantaraan—kondisi topografi dan metalurgi lapisan terluar (*surface boundary layer*) material logam memegang peranan krusial yang menentukan keandalan operasional.

Metode penyelesaian permukaan mekanis konvensional (*mechanical grinding and buffing*) memiliki kelemahan mendasar:
1. **Deformasi Plastis Mikro & Lapisan Beilby (*Amorphous Beilby Layer*)**: Aksi gesek mekanis memicu pelelehan mikro dan pembentukan lapisan terdistorsi amorf yang sarat tegangan sisa tarik (*tensile residual stresses*), dislokasi kisi yang padat, dan retak mikro (*micro-fissures*).
2. **Inklusi Partikel Abrasif & Kontaminasi Fe Bebas**: Partikel abrasif ($\text{Al}_2\text{O}_3, \text{SiC}$) dan partikel besi bebas (*free iron*) tertanam secara mekanis ke dalam matriks logam, menjadi situs inisiasi korosi sumuran (*pitting corrosion*) dan kontaminasi silang produk biologis.
3. **Topografi Lipatan Mikro (*Micro-folds and Smears*)**: Permukaan mekanis sering tampak berkilap secara makroskopis namun memiliki celah sempit (*crevices*) mikroskopis yang menjadi perangkap bakteri, biofilm, dan partikel debu sub-mikron yang tidak dapat dibersihkan melalui protokol *Clean-In-Place* (CIP) / *Sterilize-In-Place* (SIP).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 PERBANDINGAN STRUKTURAL PERMUKAAN MEKANIS VS PERMUKAAN ELECTROPOLISHING (EP)                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] FINISHING MEKANIS (GRINDING / BUFFING)                   [B] FINISHING ELECTROPOLISHING (EP)                    |
|                                                                                                                       |
|     Partikel Abrasif Tertanam      Lapisan Beilby Terdistorsi         Lapisan Pasif Kaya Kromium (Cr2O3 / CrO)        |
|            ▼           ▼                   ▼                                    ▼     ▼     ▼                         |
|      ┌───┐   ┌───┐   ┌───────────────────────────┐                 ═════════════════════════════════════             |
|   ───┴───┴───┴───┴───┘                           └────             ─────────────────────────────────────             |
|   ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~              Substrat Kristalin Bebas Tegangan Sisa            |
|   Matriks Logam Terdeformasi & Penuh Tegangan Tarik                dan Bebas Inklusi Partikel Abrasif                 |
|   (Rentan Korosi Sumuran, Biofilm, & Patah Fatik)                  (Ketahanan Korosi Maksimum, Cr/Fe > 2.0)          |
|                                                                                                                       |
|   Kekasaran: Makro halus, Mikro berlembah & bergerigi               Kekasaran: R_a < 0.1 μm, R_z < 0.5 μm (Cermin)     |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Electropolishing (EP)** atau **Poles Elektrokimia** adalah proses pelarutan anodik non-kontak terkontrol di mana benda kerja logam diposisikan sebagai anoda ($+$) di dalam sel elektrolit asam konduktif dengan katoda berlawanan ($-$). Di bawah pengaruh medan potensial listrik searah (DC) pada rentang polarisasi tertentu (*limiting current plateau*), terjadi pelarutan atomik terarah yang mengikis tonjolan mikroskopis (*micro-peaks / asperities*) secara eksponensial lebih cepat dibandingkan lembah (*valleys*). 

Proses ini menghasilkan permukaan yang datar sempurna pada skala nano (*featureless specular planarization*), menghilangkan seluruh lapisan logam terdistorsi, mengeliminasi inklusi non-metalik, serta secara termodinamika menginduksi pengayaan unsur kromium oksida ($\text{Cr}_2\text{O}_3$) relatif terhadap besi oksida ($\text{Fe}_2\text{O}_3$), mendongkrak rasio $\text{Cr/Fe}$ dari level batas material dasar ($0.4 - 0.7$) menjadi $> 1.5 - 3.5$.

Standar internasional dan regulasi manufaktur yang relevan:
- **ASTM B912**: *Standard Specification for Passivation of Stainless Steels Using Electropolishing*.
- **ISO 15730**: *Metallic and other inorganic coatings — Electropolishing as a means of smoothing and passivating stainless steel*.
- **ASME BPE (Part SF)**: *Bioprocessing Equipment Standard — Surface Acceptance Criteria for Stainless Steel and Higher Alloys (SF4: $R_a \le 0.375\,\mu\text{m}$ EP, SF5: $R_a \le 0.50\,\mu\text{m}$ EP, SF6: $R_a \le 0.625\,\mu\text{m}$ EP)*.
- **ASTM A380 / ASTM A967**: *Standard Practice / Specification for Chemical Cleaning, Descaling, and Passivation of Stainless Steel Parts*.
- **ASTM F519**: *Standard Test Method for Mechanical Hydrogen Embrittlement Evaluation of Plating/Coating Processes and Service Environments*.

---

## 2. Termodinamika & Elektrokimia Pelarutan Anodik

### 2.1 Teori Lapisan Difusi Viskos Jacquet (*Jacquet's Viscous Boundary Layer Theory*)

Mekanisme fundamental perataan elektropolishing pertama kali dirumuskan secara ilmiah oleh **Pierre A. Jacquet (1936)**. Ketika logam anoda padat larut ke dalam elektrolit asam pekat (campuran $\text{H}_3\text{PO}_4 - \text{H}_2\text{SO}_4$), ion-ion logam terlarut ($\text{Fe}^{2+}, \text{Fe}^{3+}, \text{Cr}^{3+}, \text{Ni}^{2+}$) terakumulasi secara masif di antarmuka padat-cair, bereaksi dengan anion fosfat/sulfat membentuk garam kompleks dengan berat molekul tinggi dan viskositas sangat pekat.

Lapisan fluida kental ini disebut **Lapisan Batas Viskos (*Viscous Boundary Layer*)** dengan ketebalan $\delta_N$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                     MEKANISME PERATAAN MIKRO JACQUET PADA ANTARMUKA ANODA ELEKTROPOLISHING                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                     BULK ELEKTROLIT (Asam Encer, Konduktivitas Tinggi)                                |
|                                                                                                                       |
|  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Batas Luar Lapisan Viskos |
|                        ▲                                            ▲                                                 |
|          δ_peak (Tipis)│                              δ_valley (Tebal)                                                |
|                        ▼                                            │                                                 |
|                   ┌─────────┐                                       │   Lapisan Difusi Viskos (Kental,                |
|                  ╱           ╲                                      ▼   Resistansi Listrik & Difusi Tinggi)           |
|                 ╱  PUNCAK     ╲                                   ┌───┐                                               |
|                ╱   (PEAK)      ╲                                 ╱     ╲   LEMBAH                                     |
|               ╱                 ╲                               ╱       ╲  (VALLEY)                                   |
|   ───────────┘                   └─────────────────────────────┘         └──────────────                              |
|   SUBSTRAT LOGAM ANODA (+)                                                                                            |
|                                                                                                                       |
|   Gradien Konsentrasi: (dC/dx)_peak > (dC/dx)_valley  ==> Fluks Difusi: J_peak >> J_valley                           |
|   Kerapatan Arus Efektif: I_peak >> I_valley          ==> Laju Pelarutan: (dh/dt)_peak >> (dh/dt)_valley              |
+-----------------------------------------------------------------------------------------------------------------------+
```

Karena batas luar lapisan viskos cenderung rata akibat gravitasi dan tegangan antarmuka fluida, ketebalan lapisan viskos di atas puncak mikro ($\delta_{\text{peak}}$) jauh lebih tipis dibandingkan ketebalan lapisan di atas lembah mikro ($\delta_{\text{valley}}$):

$$\delta_{\text{peak}} < \delta_{\text{valley}}$$

Berdasarkan Hukum Difusi Fick Pertama, fluks massa difusi ion logam jenuh ($J_M$) dari permukaan anoda menuju *bulk* elektrolit berbanding terbalik dengan ketebalan lapisan difusi:

$$J_M = -D \cdot \left( \frac{\partial C}{\partial x} \right) \approx D \cdot \frac{C_{\text{sat}} - C_{\text{bulk}}}{\delta(x)}$$

di mana:
- $D$ = Koefisien difusi ion logam dalam lapisan batas viskos ($\text{m}^2/\text{s}$).
- $C_{\text{sat}}$ = Konsentrasi saturasi ion logam pada permukaan elektroda ($\text{mol/m}^3$).
- $C_{\text{bulk}}$ = Konsentrasi ion logam di dalam *bulk* larutan elektrolit ($\text{mol/m}^3$).
- $\delta(x)$ = Ketebalan lokal lapisan batas viskos pada koordinat lateral $x$ ($\text{m}$).

Karena $\delta_{\text{peak}} \ll \delta_{\text{valley}}$, gradien konsentrasi pada puncak jauh lebih curam daripada di lembah:

$$\left( \frac{\partial C}{\partial x} \right)_{\text{peak}} \gg \left( \frac{\partial C}{\partial x} \right)_{\text{valley}} \implies J_{\text{peak}} \gg J_{\text{valley}}$$

Akibatnya, laju pelarutan anodik pada puncak mikro berlangsung berkali-kali lipat lebih cepat daripada pada lembah mikro, meratakan topografi kasar menjadi permukaan datar cermin (*specular planar surface*).

---

### 2.2 Kurva Karakteristik Polarisasi Anodik (*I-V Characteristic Curve*)

Hubungan antara tegangan anoda-katoda ($V$) dan kerapatan arus anodik ($i_{\text{anode}}$) pada sistem elektropolishing terbagi ke dalam empat zona fundamental:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                            KURVA POLARISASI ANODIK SISTEM ELEKTROPOLISHING LOGAM                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|  Kerapatan Arus (i, A/dm²)                                                                                            |
|       │                                                                                                               |
|       │                                                   / Zona IV: Evolusi Gas Oksigen                              |
|       │                                                  /  (Pitting & Overheating Zone)                              |
|       │                                                 /   2 H2O -> O2 + 4 H+ + 4 e-                                 |
|       │                                                /                                                              |
|       │                     ┌─────────────────────────┘                                                               |
|  i_lim│.....................│   ZONA III: POLISHING   │ (Plateau Arus Batas Difusi)                                   |
|       │                    ╱│   (Poles Cermin Optimal)│                                                               |
|       │                   ╱ └─────────────────────────┘                                                               |
|       │                  ╱                                                                                            |
|       │                 ╱ Zona II: Transisi / Fluktuasi Passivasi Instabil                                            |
|       │                ╱                                                                                              |
|       │     ┌─────────┘                                                                                               |
|       │    ╱ Zona I: Etsa Anodik (Etching Zone)                                                                       |
|       │   ╱  M(s) -> M^(z+) + z e- (Pelarutan Selektif Butir Batas, Kasar & Buram)                                    |
|   ────┴──┴────────────────────────────────────────────────────────► Tegangan Sel (V, Volt)                            |
|          0         V_etch        V_plateau_min      V_plateau_max                                                     |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Zona I: Etsa Anodik (*Anodic Etching Zone*, $0 < V < V_{\text{etch}}$)**:
   - Tegangan rendah di bawah potensial pembentukan lapisan viskos stabil.
   - Pelarutan dikendalikan oleh aktivasi elektrokimia (*charge transfer activation control*).
   - Terjadi penyerangan selektif terhadap batas butir kristal (*grain boundaries*), menghasilkan permukaan kasar, buram (*frosty/matte*), dan bertekstur etsa.

2. **Zona II: Fluktuasi Transisi (*Unstable Passivation Transition Zone*, $V_{\text{etch}} \le V < V_{\text{plat\_min}}$)**:
   - Terjadi kompetisi dinamis antara pembentukan garam pasif viskos dan pelarutan kimianya.
   - Arus berosilasi secara periodik, menghasilkan pola garis gelombang (*flow marks / streaks*) yang cacat.

3. **Zona III: Dataran Arus Batas / Poles (*Limiting Current Plateau / Polishing Zone*, $V_{\text{plat\_min}} \le V \le V_{\text{plat\_max}}$)**:
   - **Zona Operasi Wajib Elektropolishing**.
   - Terjadi kesetimbangan dinamis stasioner di mana laju difusi ion logam melalui lapisan viskos mencapai batas maksimum (*mass transport limiting current* $i_{\text{lim}}$).
   - Kerapatan arus konstan independen terhadap sedikit fluktuasi voltase.
   - Terjadi pelarutan perataan mikro Jacquet murni, menghasilkan kilap cermin sempurna dan pengayaan oksida kromium.

4. **Zona IV: Evolusi Gas Oksigen (*Gas Evolution / Over-polishing Zone*, $V > V_{\text{plat\_max}}$)**:
   - Potensial anoda melebihi potensial dekomposisi air ($2\text{H}_2\text{O} \to \text{O}_2\uparrow + 4\text{H}^+ + 4e^-$).
   - Gelembung gas oksigen menempel pada permukaan anoda, mengisolasi titik kontak lokal dan memicu cacat sumuran parah (*gas streak pitting / orange peel defects*).

---

### 2.3 Hukum Faraday & Kinetika Pelarutan Massa Anodik

Massa logam total yang terlarut dari anoda selama proses elektropolishing ($m_{\text{dissolved}}$) diatur oleh Hukum Elektrolisis Faraday:

$$m_{\text{dissolved}} = \frac{M_{\text{eq}} \cdot I \cdot t \cdot \eta_{\text{anode}}}{F}$$

di mana:
- $I$ = Arus listrik total yang mengalir melalui sel ($\text{Ampere}$).
- $t$ = Durasi waktu elektropolishing ($\text{detik}$).
- $F = 96485.33\text{ C/mol}$ = Konstanta Faraday.
- $\eta_{\text{anode}}$ = Efisiensi arus anodik ($\approx 0.75 - 0.95$, fraksi arus yang digunakan murni untuk pelarutan logam vs evolusi gas).
- $M_{\text{eq}}$ = Berat ekivalen elektrokimia paduan (*equivalent weight*, $\text{g/mol}$), dihitung berdasarkan fraksi massa unsur ($w_k$), berat atom ($A_k$), dan valensi valensi oksidasi ($z_k$):

$$M_{\text{eq}} = \frac{1}{\sum_{k} \frac{w_k \cdot z_k}{A_k}}$$

Untuk baja tahan karat austenitik **AISI 316L** (Komposisi tipikal: $65.5\%\text{ Fe}, 17.5\%\text{ Cr}, 12.5\%\text{ Ni}, 2.5\%\text{ Mo}, 2.0\%\text{ Mn}$ dengan valensi oksidasi $\text{Fe}^{3+}, \text{Cr}^{3+}, \text{Ni}^{2+}, \text{Mo}^{6+}, \text{Mn}^{2+}$):

$$M_{\text{eq, 316L}} \approx \left[ \frac{0.655 \times 3}{55.845} + \frac{0.175 \times 3}{51.996} + \frac{0.125 \times 2}{58.693} + \frac{0.025 \times 6}{95.95} + \frac{0.02 \times 2}{54.938} \right]^{-1} \approx 19.82\text{ g/ekivalen}$$

Ketebalan rata-rata lapisan logam yang terkikis ($\Delta h_{\text{metal}}$, dalam satuan meter) dihitung melalui kerapatan massa paduan ($\rho$, $\text{kg/m}^3$) dan luas permukaan anoda ($A_{\text{anode}}$, $\text{m}^2$):

$$\Delta h_{\text{metal}} = \frac{m_{\text{dissolved}}}{\rho \cdot A_{\text{anode}}} = \frac{M_{\text{eq}} \cdot i_{\text{anode}} \cdot t \cdot \eta_{\text{anode}}}{\rho \cdot F}$$

di mana $i_{\text{anode}} = \frac{I}{A_{\text{anode}}}$ adalah kerapatan arus anodik ($\text{A/m}^2$ atau $\text{A/dm}^2$).

---

## 3. Kinetika Perataan Mikro & Termodinamika Pasivasi Oksida

### 3.1 Model Matematika Reduksi Kekasaran Permukaan (*Roughness Decay Kinetics*)

Evolusi profil kekasaran permukaan rata-rata aritmatika ($R_a$) atau tinggi puncak-ke-lembah ($R_z$) selama elektropolishing pada kondisi *limiting current* dimodelkan sebagai proses peluruhan eksponensial terhadap waktu:

$$R_a(t) = R_{a,\infty} + (R_{a,0} - R_{a,\infty}) \cdot \exp\left( -k_{\text{ep}} \cdot t \right)$$

di mana:
- $R_{a,0}$ = Kekasaran permukaan awal sebelum elektropolishing ($\mu\text{m}$).
- $R_{a,\infty}$ = Batas teoretis kekasaran permukaan akhir terendah ($\approx 0.02 - 0.05\,\mu\text{m}$, dibatasi oleh ketidakhomogenan batas butir dan inklusi mikro sub-kisi).
- $k_{\text{ep}}$ = Koefisien laju perataan elektropolishing ($\text{s}^{-1}$), yang merupakan fungsi dari kerapatan arus batas $i_{\text{lim}}$, bilangan gelombang kekasaran permukaan $\omega = \frac{2\pi}{\lambda_{\text{roughness}}}$, dan ketebalan lapisan difusi viskos $\delta_N$:

$$k_{\text{ep}} = \frac{2\pi \cdot M_{\text{eq}} \cdot i_{\text{lim}} \cdot \eta_{\text{anode}}}{\rho \cdot F \cdot \lambda_{\text{roughness}}} \cdot \tanh\left( \frac{2\pi \delta_N}{\lambda_{\text{roughness}}} \right)$$

Model ini membuktikan secara analitis bahwa gelombang kekasaran dengan panjang gelombang pendek ($\lambda$ kecil, yaitu kekasaran mikro/tajam) terkikis secara eksponensial jauh lebih cepat dibandingkan waviness makro ($\lambda$ besar).

---

### 3.2 Termodinamika Selektivitas Oksidasi & Rasio Pengayaan $\text{Cr/Fe}$

Keunggulan terbesar elektropolishing dibandingkan pasivasi asam kimia murni (seperti *citric acid* atau *nitric acid bath* ASTM A967) adalah kemampuannya memperkaya konsentrasi atomik kromium dalam lapisan film pasif tipis nanometer ($1.5 - 4.0\text{ nm}$).

Berdasarkan Diagram Pourbaix ($\text{E-pH}$) dan energi bebas Gibbs pembentukan oksida ($\Delta G^\circ_f$):

$$\Delta G^\circ_f(\text{Cr}_2\text{O}_3) = -1058.1\text{ kJ/mol} \quad \text{vs} \quad \Delta G^\circ_f(\text{Fe}_2\text{O}_3) = -742.2\text{ kJ/mol}$$

Di bawah potensial anodik zona *polishing*, atom besi ($\text{Fe}$) memiliki laju pelarutan anodik yang lebih tinggi ke dalam kompleks fosfat daripada atom kromium ($\text{Cr}$). Hal ini meninggalkan lapisan permukaan yang sangat jenuh oleh kromium teroksidasi:

$$\text{Cr}^{3+} + 3\text{H}_2\text{O} \longrightarrow \text{Cr}(\text{OH})_3 + 3\text{H}^+ \xrightarrow{\Delta T / \text{dry}} \frac{1}{2}\text{Cr}_2\text{O}_3 + \frac{3}{2}\text{H}_2\text{O}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PROFIL KEDALAMAN ELEMEN OKSIDA PERMUKAAN HASIL ANALISIS XPS / AES                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|  Fraksi Konsentrasi Atomik (%)                                                                                        |
|  100 % ┬                                                                                                              |
|        │                                                                                                              |
|   80 % ┼              Oksigen O 1s (Lapisan Oksida Pasif)                                                             |
|        │            \                                                                                                 |
|   60 % ┼             \──────────────────────────                                   Fe 2p Substrat (Besi Matriks)      |
|        │              \                                                          /                                    |
|   40 % ┼   Cr 2p (Puncak Oksida Pasif Cr2O3)                                    /───────────────────────────────────  |
|        │   /────────────\                                                      /                                      |
|   20 % ┼  /              \                                                    /   Ni 2p (Nikel Matriks)               |
|        │ /                \──────────────────────────────────────────────────/─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   |
|    0 % ┴─┴────────┬─────────┴──────────────┬─────────────────────────────────┴──────────────────────────────►         |
|        0        1.0       2.0            3.0                               4.0                 5.0  Kedalaman (nm)    |
|        │◄────── Lapisan Film Pasif ───────►│◄───────────────── Matriks Logam Substrat ─────────────────►              |
|        Rasio Cr/Fe Puncak > 2.5             Rasio Cr/Fe Bulk = 0.27                                                   |
+-----------------------------------------------------------------------------------------------------------------------+
```

Rasio atomik $\text{Cr/Fe}$ yang diukur melalui *X-ray Photoelectron Spectroscopy* (XPS) atau *Auger Electron Spectroscopy* (AES) pada kedalaman $0 - 2\text{ nm}$ menjadi tolok ukur penerimaan standar biofarmasi ASME BPE:
- **Permukaan Standar Non-EP (Mechanically polished)**: $\text{Cr/Fe} \approx 0.40 - 0.70$.
- **Permukaan Kimiawi Asam Nitrat / Sitrat (Passivated only)**: $\text{Cr/Fe} \approx 1.00 - 1.40$.
- **Permukaan Standar Tinggi Electropolished (ASTM B912 / ASME BPE SF4)**: $\text{Cr/Fe} \ge 1.50 - 3.50$.
- **Ketebalan Lapisan Pasif Oksida Efektif**: $\delta_{\text{oxide}} \ge 2.0\text{ nm} - 3.5\text{ nm}$.

---

## 4. Desain Elektrolit, Arsitektur Sel & Parameter Proses Industri

### 4.1 Formulasi Kimia Elektrolit Standar

Formulasi elektrolit elektropolishing untuk paduan baja tahan karat austenitik (304, 316L, 317L) dan paduan nikel tinggi (Hastelloy C-22, Inconel 625) berbasis asam ortofosfat dan asam sulfat pekat:

| Komponen Elektrolit | Fraksi Volume (% v/v) | Fraksi Berat (% w/w) | Peran Fungsional dalam Proses |
|---|---|---|---|
| **Asam Ortofosfat ($\text{H}_3\text{PO}_4, 85\%$)** | $50 - 65\%$ | $55 - 70\%$ | Pembentuk lapisan viskos batas Jacquet, penstabil ion logam kompleks, pelarut oksida. |
| **Asam Sulfat Pekat ($\text{H}_2\text{SO}_4, 96\%$)** | $30 - 45\%$ | $25 - 40\%$ | Donor ion konduktivitas listrik tinggi, pemicu kinetika polarisasi anodik dan disosiasi asam. |
| **Air Deionisasi ($\text{H}_2\text{O}$)** | $5 - 10\%$ | $3 - 8\%$ | Pelarut viskositas, pengatur tegangan permukaan dan batas saturasi ion logam. |
| **Aditif Inhibitor / Surfactant (Opsional)** | $< 1\%$ | $< 0.5\%$ | Penebar gelembung gas, penurun tegangan antarmuka, pencegah *gas streak pitting*. |

Sifat Fisik Kritis Mandi Elektrolit:
- Berat Jenis Spesifik (*Specific Gravity*): $\gamma = 1.68 - 1.75\text{ g/cm}^3$ (pada $25^\circ\text{C}$).
- Kandungan Besi Terlarut Maksimum (*Dissolved Iron Limit*): $[\text{Fe}^{3+}]_{\text{max}} \le 4.5\% - 5.5\%\text{ w/w}$. Jika melebihi batas ini, viskositas mandi menjadi terlampau tinggi, menuntut regenerasi mandi atau pembuangan sebagian.

---

### 4.2 Parameter Operasional Kritis & Jendela Proses

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    MATRIKS JENDELA PARAMETER OPERASIONAL ELECTROPOLISHING (STAINLESS STEEL 316L)                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  PARAMETER PROSES                    NILAI STANDAR OPTIMAL         BATAS KRITIS KONTROL (TOLERANSI)                   |
|  ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────  |
|  Kerapatan Arus Anodik (i_anode)     15 - 35 A/dm² (1.0 - 2.5 ASI) ± 2.0 A/dm² (Di dalam Limiting Current Plateau)   |
|  Tegangan Sel DC (V_cell)            9.0 - 18.0 Volt               ± 0.5 Volt (Bergantung jarak Anoda-Katoda)         |
|  Suhu Mandi Elektrolit (T_bath)      50 - 65 °C                    ± 2.0 °C (Heat Exchanger Teflon / PVDF)            |
|  Durasi Proses (t_ep)                3.0 - 10.0 Menit              ± 5 Detik (Removal Stock: 10 - 25 μm)              |
|  Rasio Luas Katoda : Anoda           2 : 1 hingga 3 : 1            Katoda Timbal (Pb) / Tembaga / SS316L              |
|  Jarak Spasi Antar Elektroda         25 - 75 mm                    Keseragaman medan medan fluks potensial primer     |
|  Agitasi Elektrolit                  Sirkulasi Pompa / Laminar     Kecepatan aliran v = 0.2 - 0.5 m/s (Tanpa turbulensi|
|  Post-EP Acid Rinse (Neutralization) 5 - 15% HNO3 / Asam Sitrat    ASTM A967 Passivation Soak (55 °C, 10 min)         |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.3 Mitigasi Efek Samping: *Edge Rounding* & *Hydrogen Embrittlement*

1. **Efek Pembulatan Sudut Berlebih (*Excessive Edge Rounding*)**:
   - Terjadi akibat konsentrasi garis medan listrik primer (*primary current distribution*) pada sudut tajam geometris.
   - Solusi: Penggunaan *current thieves / auxiliary shields* (pelindung dielektrik non-konduktif PTFE/PP) pada ujung benda kerja untuk membiaskan garis medan arus berlebih.

2. **Mitigasi Penggetasan Hidrogen (*Hydrogen Embrittlement Mitigation*)**:
   - Pada katoda terjadi reduksi gas hidrogen ($2\text{H}^+ + 2e^- \to \text{H}_2\uparrow$). Pada paduan baja berkekuatan tinggi ($\text{UTS} > 1000\text{ MPa}$) atau pegas presisi, atom hidrogen berpotensi berdifusi ke dalam batas butir anoda selama transfer.
   - Sesuai **ASTM F519** dan **ISO 9588**, komponen baja bertekanan tinggi wajib melalui proses pemanggangan pembebasan hidrogen (*de-embrittlement baking post-EP*) pada suhu $190 - 220^\circ\text{C}$ selama $4 - 24\text{ jam}$ maksimal dalam waktu 4 jam setelah proses EP selesai.

---

## 5. Standar Industri, Protokol Metrologi & Verifikasi Kualitas

### 5.1 Kriteria Penerimaan ASME BPE (Bioprocessing Equipment)

Standar **ASME BPE Part SF (Surface Finishes)** menetapkan klasifikasi integritas permukaan kontak produk untuk material baja austenitik 316L / 304L dan paduan nikel:

| Kode Finis ASME BPE | Tipe Finishing Permukaan | Kekasaran Maksimum $R_a$ ($\mu\text{m}$) | Kekasaran Maksimum $R_a$ ($\mu\text{in}$) | Syarat Electropolishing (EP) | Inspeksi Visual (100% Surface) |
|---|---|---|---|---|---|
| **SF1** | Poles Mekanis Murni | $\le 0.50\,\mu\text{m}$ | $\le 20\,\mu\text{in}$ | Tidak Wajib | Bebas goresan, cacat pit, orange peel |
| **SF2** | Poles Mekanis Murni | $\le 0.625\,\mu\text{m}$ | $\le 25\,\mu\text{in}$ | Tidak Wajib | Bebas goresan, cacat pit, orange peel |
| **SF3** | Poles Mekanis Murni | $\le 0.75\,\mu\text{m}$ | $\le 30\,\mu\text{in}$ | Tidak Wajib | Bebas goresan, cacat pit, orange peel |
| **SF4** | **Poles Mekanis + EP** | **$\le 0.375\,\mu\text{m}$** | **$\le 15\,\mu\text{in}$** | **Wajib Elektropolishing** | Bebas noda etsa, pitting, inklusi |
| **SF5** | Poles Mekanis + EP | $\le 0.50\,\mu\text{m}$ | $\le 20\,\mu\text{in}$ | **Wajib Elektropolishing** | Bebas noda etsa, pitting, inklusi |
| **SF6** | Poles Mekanis + EP | $\le 0.625\,\mu\text{m}$ | $\le 25\,\mu\text{in}$ | **Wajib Elektropolishing** | Bebas noda etsa, pitting, inklusi |

---

### 5.2 Metode Pengujian Integritas Lapisan Pasif

Sesuai **ASTM B912**, **ASTM A967**, dan **ISO 15730**, verifikasi efektivitas passivasi hasil elektropolishing diverifikasi melalui protokol berikut:

1. **Uji Tembaga Sulfat (*Copper Sulfate Test*, ASTM A967 Practice D)**:
   - Larutan uji: $4.0\text{ g } \text{CuSO}_4 \cdot 5\text{H}_2\text{O} + 10.0\text{ g } \text{H}_2\text{SO}_4 (\text{sp. gr. } 1.84) + 90\text{ mL } \text{H}_2\text{O}$.
   - Diteteskan pada permukaan benda kerja selama 6 menit pada $20 - 25^\circ\text{C}$.
   - Kriteria Lolos: Tidak boleh terbentuk endapan tembaga logam merah kecokelatan ($\text{Cu}^0$) yang menandakan keberadaan atom besi bebas ($\text{Fe}^0 + \text{Cu}^{2+} \to \text{Fe}^{2+} + \text{Cu}\downarrow$).

2. **Uji Kelembaban Tinggi & Uji Kabut Garam (*Humidity & Salt Spray Test*, ASTM A967 Practice A / ASTM B117)**:
   - Paparan kelembaban relatif $97\% - 100\%$ pada $38^\circ\text{C}$ selama 24 - 48 jam atau *neutral salt spray (NSS)* 5% NaCl selama 100 jam.
   - Kriteria Lolos: Nol noda karat (*rust spots*) atau diskolorisasi pada perbesaran visual 10x.

3. **Uji Potensiodinamik Elektrokimia (*Electrochemical Potentiodynamic Reactivation - EPR / Cyclic Polarization*, ASTM G61)**:
   - Pengukuran potensial korosi sumuran (*Pitting Potential* $E_{\text{pit}}$) dalam larutan 3.5% NaCl.
   - Nilai $E_{\text{pit}}$ untuk 316L hasil EP harus meningkat minimal $+250\text{ mV}$ hingga $+450\text{ mV}$ dibandingkan permukaan poles mekanis non-EP ($E_{\text{pit}} > +600\text{ mV vs SCE}$).

---

## 6. Algoritma & Python Solver: Simulasi Kinetika Elektropolishing

Berikut adalah implementasi Python komprehensif berstandar industri untuk memodelkan:
1. Kurva polarisasi arus-tegangan anodik ($I-V$ characteristic) dan penentuan jendela *limiting current plateau*.
2. Perhitungan neraca massa pelarutan Faraday dan pemindahan ketebalan logam ($\Delta h_{\text{metal}}$).
3. Simulasi peluruhan kekasaran permukaan eksponensial ($R_a(t)$ dan $R_z(t)$).
4. Estimasi rasio pengayaan atomik kromium oksida ($\text{Cr/Fe}$) dan ketebalan lapisan pasif $\text{Cr}_2\text{O}_3$.

```python
"""
Electropolishing & Anodic Passivation Multiphysics Solver
Industrial Engineering Module 611 - RuangTI Knowledge Base
Standards: ASTM B912, ISO 15730, ASME BPE, ASTM A380/A967
"""

import numpy as np
from dataclasses import dataclass
from typing import Dict, List, Tuple, Any


@dataclass
class MaterialComposition:
    name: str
    density_kg_m3: float  # kg/m³
    elements: Dict[str, Dict[str, float]]  # Element: {'wt_fraction': float, 'atomic_wt': float, 'valence': int}

    def calculate_equivalent_weight(self) -> float:
        """Menghitung berat ekivalen elektrokimia (M_eq) dalam g/ekivalen."""
        sum_val = 0.0
        for elem, props in self.elements.items():
            w_k = props['wt_fraction']
            A_k = props['atomic_wt']
            z_k = props['valence']
            sum_val += (w_k * z_k) / A_k
        return 1.0 / sum_val


@dataclass
class ProcessParameters:
    bath_temp_celsius: float       # °C
    anode_surface_area_dm2: float  # dm²
    applied_current_a: float       # Ampere
    process_time_seconds: float    # Detik
    initial_ra_um: float           # μm
    initial_rz_um: float           # μm
    anode_efficiency: float = 0.88 # Efisiensi pelarutan logam (85-92%)
    roughness_wavelength_um: float = 25.0  # Panjang gelombang mikro-asperity (μm)


class ElectropolishingSolver:
    """Solver Multiphysics untuk Simulasi Proses Elektropolishing & Pasivasi Permukaan."""

    FARADAY_CONSTANT = 96485.33  # C / mol (A·s / mol)

    def __init__(self, material: MaterialComposition, params: ProcessParameters):
        self.mat = material
        self.p = params
        self.m_eq = self.mat.calculate_equivalent_weight()

    def simulate_polarization_curve(self) -> Dict[str, np.ndarray]:
        """
        Menghasilkan kurva polarisasi anodik I-V terkalibrasi untuk memvisualisasikan:
        Zona I (Etching), Zona II (Transition), Zona III (Polishing Plateau), dan Zona IV (Gas Evolution).
        """
        voltages = np.linspace(0.0, 24.0, 241)
        current_densities = np.zeros_like(voltages)

        i_lim = 25.0  # Limiting current plateau density (A/dm²)

        for idx, v in enumerate(voltages):
            if v < 4.0:
                # Zona I: Etching (Tafel-like activation control)
                current_densities[idx] = i_lim * (v / 4.0) ** 1.8 * 0.7
            elif 4.0 <= v < 7.5:
                # Zona II: Transisi pembentukan lapisan viskos
                progress = (v - 4.0) / 3.5
                current_densities[idx] = (0.7 * i_lim) + progress * (0.3 * i_lim) + 1.5 * np.sin(progress * np.pi)
            elif 7.5 <= v <= 16.5:
                # Zona III: Limiting Current Plateau (Zona Optimal Polishing)
                # Sedikit kemiringan difusi ohmik residual
                current_densities[idx] = i_lim + 0.15 * (v - 7.5)
            else:
                # Zona IV: Gas Evolution (Pitting & Overheating)
                over_v = v - 16.5
                current_densities[idx] = (i_lim + 0.15 * 9.0) + 3.2 * (over_v ** 1.6)

        return {
            'voltage_v': voltages,
            'current_density_a_dm2': current_densities,
            'plateau_v_range': (7.5, 16.5),
            'i_limiting_plateau': i_lim
        }

    def calculate_material_removal(self) -> Dict[str, float]:
        """Menghitung massa terlarut, ketebalan pengikisan logam, dan laju removal."""
        area_m2 = self.p.anode_surface_area_dm2 * 1e-2  # konversi dm² ke m²
        current_density_a_dm2 = self.p.applied_current_a / self.p.anode_surface_area_dm2
        
        # Massa terlarut Faraday (gram)
        # m = (M_eq * I * t * eta) / F
        mass_dissolved_g = (self.m_eq * self.p.applied_current_a * self.p.process_time_seconds * self.p.anode_efficiency) / self.FARADAY_CONSTANT
        
        # Volume logam terlarut (m³)
        density_g_cm3 = self.mat.density_kg_m3 / 1000.0
        volume_dissolved_cm3 = mass_dissolved_g / density_g_cm3
        volume_dissolved_m3 = volume_dissolved_cm3 * 1e-6
        
        # Ketebalan terkikis (μm)
        thickness_removed_m = volume_dissolved_m3 / area_m2
        thickness_removed_um = thickness_removed_m * 1e6
        
        removal_rate_um_min = (thickness_removed_um / self.p.process_time_seconds) * 60.0

        return {
            'current_density_a_dm2': current_density_a_dm2,
            'mass_dissolved_grams': mass_dissolved_g,
            'thickness_removed_um': thickness_removed_um,
            'removal_rate_um_per_min': removal_rate_um_min,
            'm_eq_g_equiv': self.m_eq
        }

    def simulate_surface_roughness_decay(self, time_steps: int = 100) -> Dict[str, np.ndarray]:
        """
        Simulasi kinetika peluruhan kekasaran permukaan Ra(t) dan Rz(t)
        berdasarkan model difusi viskos perataan Jacquet.
        """
        time_arr = np.linspace(0, self.p.process_time_seconds, time_steps)
        
        # Parameter laju k_ep (s^-1)
        i_a_dm2 = self.p.applied_current_a / self.p.anode_surface_area_dm2
        k_ep = 0.00045 * i_a_dm2 * (25.0 / self.p.roughness_wavelength_um) ** 0.8
        
        ra_inf = 0.04  # Asymptotic Ra limit (μm)
        rz_inf = 0.22  # Asymptotic Rz limit (μm)
        
        ra_arr = ra_inf + (self.p.initial_ra_um - ra_inf) * np.exp(-k_ep * time_arr)
        rz_arr = rz_inf + (self.p.initial_rz_um - rz_inf) * np.exp(-k_ep * time_arr)

        return {
            'time_seconds': time_arr,
            'ra_profile_um': ra_arr,
            'rz_profile_um': rz_arr,
            'k_ep_rate_constant': k_ep,
            'final_ra_um': float(ra_arr[-1]),
            'final_rz_um': float(rz_arr[-1])
        }

    def evaluate_passivation_enrichment(self, thickness_removed_um: float) -> Dict[str, Any]:
        """
        Estimasi pengayaan rasio Cr/Fe dan ketebalan film oksida pasif
        berdasarkan stok pengikisan material, kinetika pelarutan selektif Fe vs Cr,
        dan pembuangan tuntas lapisan Beilby terdistorsi.
        """
        # Lapisan Beilby terdistorsi umumnya sedalam 3.0 - 5.0 μm
        beilby_removed = thickness_removed_um >= 5.0
        
        # Rasio Cr/Fe dasar bulk paduan
        bulk_cr_wt = self.mat.elements.get('Cr', {}).get('wt_fraction', 0.175)
        bulk_fe_wt = self.mat.elements.get('Fe', {}).get('wt_fraction', 0.655)
        bulk_cr_fe_ratio = (bulk_cr_wt / 51.996) / (bulk_fe_wt / 55.845)
        
        # Pada lapisan terluar (0-2 nm) pasca EP, selektivitas pelarutan anodik Fe
        # mendongkrak konsentrasi oksida Cr2O3 dalam lapisan film pasif (faktor pengayaan termodinamika 7.0x - 9.5x)
        if thickness_removed_um < 3.0:
            enrichment_factor = 1.0 + (thickness_removed_um / 3.0) * 4.5
        elif 3.0 <= thickness_removed_um <= 20.0:
            # Kondisi optimal pembuangan lapisan rusak & saturasi Cr2O3
            enrichment_factor = 5.5 + 3.7 * (1.0 - np.exp(-(thickness_removed_um - 3.0) / 4.0))
        else:
            enrichment_factor = 9.2  # Saturasi batas termodinamika XPS
            
        surface_cr_fe_ratio = bulk_cr_fe_ratio * enrichment_factor
        oxide_thickness_nm = 1.8 + 1.2 * (1.0 - np.exp(-thickness_removed_um / 6.0))
        
        # Evaluasi terhadap standar ASME BPE SF4 (Cr/Fe >= 1.5) dan ASTM B912 (Cr/Fe >= 1.3)
        passes_asme_bpe_sf4 = (surface_cr_fe_ratio >= 1.5) and (oxide_thickness_nm >= 2.0)
        passes_astm_b912 = surface_cr_fe_ratio >= 1.3

        return {
            'bulk_cr_fe_atomic_ratio': round(bulk_cr_fe_ratio, 3),
            'surface_cr_fe_atomic_ratio': round(surface_cr_fe_ratio, 3),
            'passive_oxide_thickness_nm': round(oxide_thickness_nm, 2),
            'beilby_layer_fully_eliminated': beilby_removed,
            'passes_astm_b912_passivation': passes_astm_b912,
            'passes_asme_bpe_sf4': passes_asme_bpe_sf4
        }


def run_industrial_case_study():
    """Eksekusi studi kasus industri elektropolishing bejana reaktor biokompatibel AISI 316L."""
    print("=" * 85)
    print("  RUANGTI INDUSTRIAL CASE STUDY: ELECTROPOLISHING BIOREACTOR VESSEL (AISI 316L)")
    print("  STANDAR ACUAN: ASME BPE Part SF4, ASTM B912, ISO 15730, ASTM A967")
    print("=" * 85)

    # Definisi Paduan Logam AISI 316L
    ss316l = MaterialComposition(
        name="Austenitic Stainless Steel AISI 316L",
        density_kg_m3=8000.0,
        elements={
            'Fe': {'wt_fraction': 0.655, 'atomic_wt': 55.845, 'valence': 3},
            'Cr': {'wt_fraction': 0.175, 'atomic_wt': 51.996, 'valence': 3},
            'Ni': {'wt_fraction': 0.125, 'atomic_wt': 58.693, 'valence': 2},
            'Mo': {'wt_fraction': 0.025, 'atomic_wt': 95.950, 'valence': 6},
            'Mn': {'wt_fraction': 0.020, 'atomic_wt': 54.938, 'valence': 2}
        }
    )

    # Parameter Proses Elektropolishing
    process_params = ProcessParameters(
        bath_temp_celsius=55.0,
        anode_surface_area_dm2=120.0,    # 1.2 m² interior vessel
        applied_current_a=3000.0,        # Total current 3000 A -> Kerapatan 25 A/dm²
        process_time_seconds=360.0,      # 6 menit (360 detik)
        initial_ra_um=0.85,              # Hasil mechanical grain No. 4 finish
        initial_rz_um=4.20,
        anode_efficiency=0.90,
        roughness_wavelength_um=20.0
    )

    solver = ElectropolishingSolver(material=ss316l, params=process_params)
    
    # 1. Analisis Polarisasi
    polarization = solver.simulate_polarization_curve()
    print(f"\n[1] Karakteristik Polarisasi Anodik:")
    print(f"  - Berat Ekivalen Logam (M_eq)      : {solver.m_eq:.3f} g/ekivalen")
    print(f"  - Jendela Limiting Current Plateau  : {polarization['plateau_v_range'][0]} V - {polarization['plateau_v_range'][1]} V")
    print(f"  - Arus Batas Difusi (i_lim)         : {polarization['i_limiting_plateau']:.1f} A/dm²")

    # 2. Neraca Massa & Pengikisan
    removal = solver.calculate_material_removal()
    print(f"\n[2] Neraca Massa & Pengikisan Logam (Hukum Faraday):")
    print(f"  - Kerapatan Arus Operasi (i_anode) : {removal['current_density_a_dm2']:.2f} A/dm² (2.32 ASI)")
    print(f"  - Total Massa Logam Terlarut       : {removal['mass_dissolved_grams']:.2f} gram ({removal['mass_dissolved_grams']/1000.0:.3f} kg)")
    print(f"  - Ketebalan Logam Terkikis (Delta h): {removal['thickness_removed_um']:.2f} μm")
    print(f"  - Laju Pengikisan Rata-rata        : {removal['removal_rate_um_per_min']:.2f} μm/menit")

    # 3. Kinetika Perataan Permukaan (Roughness Decay)
    roughness = solver.simulate_surface_roughness_decay()
    print(f"\n[3] Kinetika Perataan Mikro Permukaan (Jacquet Model):")
    print(f"  - Kekasaran Awal (Ra_0 / Rz_0)      : {process_params.initial_ra_um:.3f} μm / {process_params.initial_rz_um:.3f} μm")
    print(f"  - Konstanta Laju Perataan (k_ep)    : {roughness['k_ep_rate_constant']:.4f} s⁻¹")
    print(f"  - Kekasaran Akhir (Ra_t / Rz_t)     : {roughness['final_ra_um']:.3f} μm / {roughness['final_rz_t' if 'final_rz_t' in roughness else 'final_rz_um']:.3f} μm")

    # 4. Pengayaan Lapisan Pasif Oksida
    passivation = solver.evaluate_passivation_enrichment(removal['thickness_removed_um'])
    print(f"\n[4] Karakterisasi Lapisan Pasif Oksida (Cr/Fe Enrichment):")
    print(f"  - Rasio Atomik Cr/Fe Material Bulk : {passivation['bulk_cr_fe_atomic_ratio']:.3f}")
    print(f"  - Rasio Atomik Cr/Fe Permukaan EP   : {passivation['surface_cr_fe_atomic_ratio']:.3f} (Peningkatan {passivation['surface_cr_fe_atomic_ratio']/passivation['bulk_cr_fe_atomic_ratio']:.1f}x)")
    print(f"  - Estimasi Tebal Film Oksida Cr2O3 : {passivation['passive_oxide_thickness_nm']:.2f} nm")
    print(f"  - Eliminasi Penuh Lapisan Beilby   : {'LULUS (TERKIKIS SEMPURNA)' if passivation['beilby_layer_fully_eliminated'] else 'GAGAL'}")
    print(f"  - Kepatuhan Standar ASTM B912      : {'MEMENUHI SYARAT (PASS)' if passivation['passes_astm_b912_passivation'] else 'GAGAL'}")
    print(f"  - Kepatuhan Standar ASME BPE SF4   : {'MEMENUHI SYARAT KELAS SF4 (Ra <= 0.375 μm & Cr/Fe >= 1.5)' if (roughness['final_ra_um'] <= 0.375 and passivation['passes_asme_bpe_sf4']) else 'GAGAL'}")
    print("=" * 85)


if __name__ == "__main__":
    run_industrial_case_study()
```

---

## 7. Studi Kasus Industri: Manufaktur Bejana Bioreaktor Fermentasi Biofarmasi (ASME BPE Grade SF4)

### 7.1 Latar Belakang & Masalah Teknis
Sebuah fasilitas manufaktur biofarmasi di Cikarang memproduksi vaksin rekombinan menggunakan tangki bioreaktor fermentasi berkapasitas $500\text{ Liter}$ berbahan paduan **AISI 316L** (*UNS S31603*). Pada awalnya, bagian interior bejana hanya diselesaikan menggunakan pemolesan mekanis grit 320 dengan nilai kekasaran permukaan $R_a = 0.45\,\mu\text{m}$. 

Setelah 14 siklus fermentasi dan pembersihan *Clean-In-Place* (CIP: sirkulasi 2% NaOH pada $80^\circ\text{C}$ diikuti $1\%\text{ HNO}_3$ pada $65^\circ\text{C}$), tim QA/QC menemukan masalah serius:
1. **Pembentukan Biofilm Bakteri (*Pseudomonas aeruginosa*)**: Ditemukan akumulasi koloni mikroorganisme pada celah mikro (*micro-grooves*) lasan internal yang tidak terjangkau semprotan bola semprot CIP (*CIP spray ball shadow zones*).
2. **Inisiasi Korosi Sumuran (*Rouging & Pitting Corrosion*)**: Lapisan oksida besi ($\text{Fe}_2\text{O}_3$) terlarut dan membentuk endapan merah kecokelatan (*Class I rouge*), menurunkan kualitas air steril WFI di bawah ambang batas FDA cGMP.

### 7.2 Implementasi Solusi Rekayasa Elektropolishing Terkendali

Manajemen rekayasa menerapkan modifikasi total proses akhir interior bioreaktor menjadi **ASME BPE SF4 Electropolished Finish**:
1. **Pra-Perlakuan Mekanis**: Penggerindaan terkontrol hingga $R_{a,0} = 0.85\,\mu\text{m}$ tanpa pemolesan *buffing compound* berbasis silika untuk menghindari inklusi mineral.
2. **Penyusunan Sel & Elektroda Katoda**: Katoda berbentuk silinder konsentris paduan tembaga berlapis timbal ($\text{Pb}$) diposisikan tepat di pusat bejana dengan celah anoda-katoda $d_{\text{gap}} = 50\text{ mm}$ guna menjamin distribusi medan potensial seragam.
3. **Formulasi Mandi Asam**: $60\%\text{ v/v } \text{H}_3\text{PO}_4 (85\%) + 35\%\text{ v/v } \text{H}_2\text{SO}_4 (96\%) + 5\%\text{ Deionized Water}$ pada suhu $55 \pm 1.5^\circ\text{C}$.
4. **Parameter Elektrolisis**: Kerapatan arus $i_{\text{anode}} = 25.0\text{ A/dm}^2$ pada tegangan $12.5\text{ Volt}$ DC selama $6.0\text{ menit}$ ($360\text{ detik}$).
5. **Pasivasi Akhir & Pembilasan**: Pembilasan air deionisasi bertingkat (*cascade DI rinse* resistivitas $> 15\text{ M}\Omega\cdot\text{cm}$), dilanjutkan *soaking* pasivasi asam sitrat ASTM A967 (10% w/w, $50^\circ\text{C}$, 20 menit) dan pengeringan udara nitrogen panas steril.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    TABEL EVALUASI METROLOGI SEBELUM DAN SESUDAH EP                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|  Parameter Kualitas Permukaan        Sebelum EP (Mechanical 320)  Sesudah EP (ASME BPE SF4)   Standar Target ASME BPE |
|  ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────  |
|  Kekasaran Rata-rata (R_a)           0.45 - 0.85 μm               0.11 - 0.14 μm              <= 0.375 μm (SF4)       |
|  Kekasaran Maksimum (R_z)            3.80 - 4.50 μm               0.72 - 0.85 μm              <= 1.50 μm              |
|  Rasio Atomik Cr/Fe (XPS Analysis)   0.58                         2.64                        >= 1.50                 |
|  Tebal Lapisan Pasif Oksida (Cr2O3)  1.2 nm                       2.95 nm                     >= 2.0 nm               |
|  Potensial Korosi Sumuran (E_pit)    +290 mV vs SCE               +685 mV vs SCE              >= +500 mV vs SCE       |
|  Uji Tembaga Sulfat (ASTM A967)      Gagal (Bintik Tembaga Merah) Lulus Mutlak (0 Reaksi)     Bebas Fe Bebas          |
|  Retensi Biofilm Pasca CIP (CFU/cm²) 140 CFU/cm²                  < 1 CFU/cm² (Steril Total)  0 Koloni                |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.3 Hasil Finansial & Keandalan Operasional
- **Peningkatan Umur Pakai Bejana**: Bebas dari insiden *rouging* dan korosi sumuran selama $> 48\text{ bulan}$ pemantauan kontinu.
- **Efisiensi Waktu Siklus CIP**: Pengurangan waktu siklus pencucian dan sterilisasi sebesar $42\%$ karena permukaan yang licin sempurna memudahkan pembilasan residu media kultur fermentasi.
- **Kepatuhan Regulasi FDA**: Lolos audit validasi cGMP FDA 21 CFR Part 211 tanpa temuan kritis (*zero 483 inspection observations*).

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. **Jacquet, P. A.** (1936). *On the anodic polishing of copper and other metals and its applications*. **Transactions of the Electrochemical Society**, 69(1), 629–655. DOI: [10.1149/1.3498240](https://doi.org/10.1149/1.3498240).
2. **Landolt, D.** (1987). *Fundamental aspects of electropolishing*. **Electrochimica Acta**, 32(1), 1–11. DOI: [10.1016/0013-4686(87)87001-9](https://doi.org/10.1016/0013-4686(87)87001-9).
3. **Datta, M., & Landolt, D.** (2000). *Fundamental aspects and applications of electrochemical microfabrication*. **Electrochimica Acta**, 45(15-16), 2535–2558. DOI: [10.1016/S0013-4686(00)00350-9](https://doi.org/10.1016/S0013-4686(00)00350-9).
4. **El-Taweel, T. A., & Haridy, S.** (2023). *Modeling and multi-objective optimization of electrochemical polishing parameters for austenitic stainless steel using response surface methodology and machine learning*. **Journal of Manufacturing Processes**, 92, 340–356. DOI: [10.1016/j.jmapro.2023.02.045](https://doi.org/10.1016/j.jmapro.2023.02.045).
5. **ASME BPE-2024**. *Bioprocessing Equipment Standard: Part SF — Surface Finishes Criteria*. American Society of Mechanical Engineers, New York.
6. **ASTM B912-02(2023)**. *Standard Specification for Passivation of Stainless Steels Using Electropolishing*. ASTM International, West Conshohocken, PA. DOI: [10.1520/B0912-02R23](https://doi.org/10.1520/B0912-02R23).
7. **ISO 15730:2020**. *Metallic and other inorganic coatings — Electropolishing as a means of smoothing and passivating stainless steel*. International Organization for Standardization, Geneva.
8. **ASTM A967/A967M-17**. *Standard Specification for Chemical Passivation Treatments for Stainless Steel Parts*. ASTM International, West Conshohocken, PA. DOI: [10.1520/A0967_A0967M-17](https://doi.org/10.1520/A0967_A0967M-17).
