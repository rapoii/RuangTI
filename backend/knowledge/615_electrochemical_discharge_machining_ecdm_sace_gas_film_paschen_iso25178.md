# Modul 615: Electrochemical Discharge Machining (ECDM) & Spark Assisted Chemical Engraving (SACE): Dinamika Lapisan Gelembung Gas, Termodinamika Percikan Mikro, Kinetika Etsa Kimia Termokimia, dan Fabrikasi Mikro Kaca Keramik Non-Konduktif (ISO 25178, ASTM E384 & CIRP Annals)

## 1. Pengantar & Konteks Industri *Electrochemical Discharge Machining* (ECDM / SACE)

Material non-konduktif berkekuatan tinggi, tahan termal, dan biokompatibel—seperti kaca borosilikat (*Pyrex*, *Duran*), kuarsa leburan (*fused silica*), kaca fotostruktur (*Foturan*), safir sintetis ($\text{Al}_2\text{O}_3$), serta keramik teknis ($\text{Si}_3\text{N}_4$, $\text{ZrO}_2$)—memegang peranan krusial dalam industri semikonduktor, perangkat mikrofluida *Lab-on-a-Chip* (LoC), sensor *Micro-Electromechanical Systems* (MEMS), serta kemasan optoelektronik mutakhir. Namun, karakteristik intrinsik material ini—yakni kekerasan tinggi, kerapuhan getas (*brittleness*), konduktivitas listrik yang sangat rendah ($\sigma < 10^{-12}\text{ S/m}$), dan ketahanan kimiawi yang luar biasa—menghadirkan tantangan fabrikasi mikro yang masif bagi proses manufaktur konvensional.

Metode permesinan konvensional dan non-konvensional standar menghadapi kendala metalurgis dan fisika:
1. **Permesinan Mekanis Mikro (*Micro-Milling / Diamond Drilling*)**: Menghasilkan gaya potong terkonsentrasi yang memicu retak mikro (*micro-cracking*), *edge chipping*, serta keausan pahat intan yang sangat cepat akibat abrasivitas keramik.
2. **Permesinan Percikan Listrik Standar (*Electrical Discharge Machining* / EDM)**: Mensyaratkan benda kerja memiliki konduktivitas listrik minimal ($\sigma > 0{,}01\text{ S/m}$), sehingga mustahil memproses isolator listrik murni secara langsung tanpa lapisan konduktif kurban.
3. **Permesinan Kimia / Etsa Basah Fotolitografi (*HF Wet Etching*)**: Menghadapi batasan rasio aspek rendah (*aspect ratio* $< 2:1$) akibat etsa isotropik serta bahaya toksikologis ekstrem dari asam fluorida murni ($\text{HF}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|              ARSITEKTUR & MEKANISME PROSES ELECTROCHEMICAL DISCHARGE MACHINING (ECDM / SACE)                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         CATU DAYA ARUS SEARAH (Pulsed / Constant DC Power Supply: V = 20 - 50 V, f = 0 - 10 kHz)                      |
|         ════════════════════════════════════════════════════════════════════════════════════                          |
|                   │ (-) Katoda (Tool Electrode)             │ (+) Anoda (Counter Electrode)                           |
|                   ▼                                         ▼                                                         |
|         ┌──────────────────────┐                  ┌──────────────────────┐                                            |
|         │ Tool Electrode (Katoda)                │ Anoda Bantu (Luas)   │                                            |
|         │ Silinder Silindris   │                  │ Pelat Pt / SS-316L   │                                            |
|         │ (Pt, W, WC, SS-304)  │                  │ Luas >> Luas Tool    │                                            |
|         └──────────┬───────────┘                  └──────────┬───────────┘                                            |
|                    │                                         │                                                        |
|                    ▼                                         ▼                                                        |
|         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                  |
|         ░░░░ ELEKTROLIT ALKALI KUAT (Aqueous NaOH / KOH Solution: 10 - 30 wt%, pH > 13) ░░░░                          |
|         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                  |
|                    │                                                                                                  |
|                    │  [TAHAP PEMBENTUKAN LAPISAN GAS & PELEPASAN PERCIKAN ELEKTRONIK]                                 |
|                    ▼                                                                                                  |
|             ╭─────────────╮  Gelembung Gas H2 Mengisolasi Katoda Pahat                                                |
|             │ Gas Film    │  Tegangan Tembus Dielektrik Terlampaui (V > V_crit ~ 28-35 V)                             |
|             │ (d_f ~ 5-25 │  ──► Terjadi Percikan Mikro (Micro-Discharges)                                            |
|             │   mikron)   │  ──► Fluks Kalor Ekstrem (T_spark > 2000 - 3500 K)                                        |
|             ╰──────┬──────╯                                                                                           |
|                    │                                                                                                  |
|                    ▼                                                                                                  |
|         ┌──────────────────────┐                                                                                      |
|         │  Benda Kerja Kaca /  │  ◄── Termokimia Gabungan: Pelelehan Termal Lokal + Etsa Kimia Cepat                 |
|         │  Keramik Isolator    │      SiO2 + 2NaOH ──► Na2SiO3 + H2O (Dipercepat oleh Suhu Tinggi)                    |
|         └──────────────────────┘                                                                                      |
|                                                                                                                       |
|  Karakteristik Output: Kavitasi Mikro Bebas Retak, Rasio Aspek Tinggi (> 10:1), Bebas Tegangan Sisa Termal Parah.   |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Electrochemical Discharge Machining (ECDM)**—juga dikenal dalam literatur presisi sebagai **Spark Assisted Chemical Engraving (SACE)**—adalah teknologi manufaktur hibrida non-konvensional yang menggabungkan fenomena elektrokimia (*electrochemical reaction*) dan fenomena pelepasan percikan termal elektro-termal (*thermal spark discharges*). Dalam sistem ECDM, pahat mikro berfungsi sebagai katoda berukuran kecil yang dicelupkan ke dalam larutan elektrolit alkali pekat (seperti $\text{NaOH}$ atau $\text{KOH}$ $10 - 30\text{ wt}\%$), sedangkan anoda berukuran jauh lebih besar ditempatkan di dalam bak elektrolit yang sama. 

Ketika beda potensial listrik ditingkatkan melampaui tegangan kritis ambang batas ($V > V_{\text{crit}}$), densitas arus yang sangat tinggi pada permukaan katoda memicu evolusi gelembung gas hidrogen ($\text{H}_2$) yang begitu masif hingga membentuk lapisan selimut gas dielektrik kontinu (*continuous insulating gas film*). Medan listrik intensif yang terpusat melintasi lapisan gas tipis ini menembus kekuatan dielektrik uap (*dielectric breakdown*), membangkitkan rentetan percikan mikro berenergi tinggi (*micro-discharges*) yang melumatkan, melunakkan, dan mempercepat reaksi etsa termokimia pada material non-konduktif secara presisi tinggi tanpa kontak mekanis langsung.

Standar internasional dan acuan ilmiah permesinan mikro yang mengatur karakterisasi permukaan dan integritas struktur pada proses ECDM meliputi:
- **ISO 25178-2**: *Geometrical product specifications (GPS) — Surface texture: Areal — Terms, definitions and surface texture parameters*.
- **ISO 1101**: *Geometrical product specifications (GPS) — Geometrical tolerancing — Tolerances of form, orientation, location and run-out*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **CIRP Annals – Manufacturing Technology**: *Standards and Terminology for Hybrid Non-Traditional Micro-Machining Processes*.

---

## 2. Termodinamika & Fisika Lapisan Selimut Gas (*Gas Film Dynamics*)

### 2.1 Reaksi Elektrokimia Pembentukan Hidrogen & Oksigen

Pada polaritas standar (pahat sebagai katoda / *cathodic tool configuration*), reaksi elektrolisis air yang terjadi pada antarmuka katoda dan anoda dalam larutan basa kuat adalah:

$$\text{Katoda (-): } 2\text{H}_2\text{O} + 2e^- \longrightarrow \text{H}_2(g) \uparrow + 2\text{OH}^- \quad (E^\circ = -0{,}828\text{ V})$$
$$\text{Anoda (+): } 4\text{OH}^- \longrightarrow \text{O}_2(g) \uparrow + 2\text{H}_2\text{O} + 4e^- \quad (E^\circ = +0{,}401\text{ V})$$

Laju volumetrik pembentukan gas hidrogen teoritis pada katoda ditentukan oleh **Hukum Elektrolisis Faraday**:

$$\dot{V}_{\text{H}_2} = \frac{I \cdot R \cdot T}{z \cdot F \cdot P_{\text{amb}}}$$

di mana:
- $I$ = Arus listrik total ($\text{A}$).
- $R$ = Konstanta gas universal ($8{,}314\text{ J}/(\text{mol}\cdot\text{K})$).
- $T$ = Temperatur absolut elektrolit ($\text{K}$).
- $z$ = Jumlah transfer elektron per molekul hidrogen ($z = 2$).
- $F$ = Konstanta Faraday ($96.485\text{ C/mol}$).
- $P_{\text{amb}}$ = Tekanan hidrostatik lingkungan ($\text{Pa}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|           KURVA KARAKTERISTIK TEGANGAN-ARUS (V-I) PADA PROSES ELEKTROKIMIA-DISCHARGE                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Arus Listrik (I)                                                                                                    |
|          ▲                                                                                                            |
|          │                    Titik Kritis Emisi Maksimum                                                             |
|          │                             (V_crit, I_crit)                                                               |
|          │                                    ╭──╮                                                                    |
|          │                                   ╭╯  ╰╮                                                                   |
|          │                                  ╭╯    ╰╮  Zona Ketidakstabilan Gelembung                                  |
|          │                                 ╭╯      ╰╮                                                                 |
|          │     Zona Elektrolisis Murni     ╭╯        ╰╮                                                               |
|          │     (Hukum Ohm Konvensional)   ╭╯          ╰───────────────────────┐  Zona Pelepasan Percikan Stabil       |
|          │                               ╭╯                                   │  (SACE / ECDM Steady Regime)          |
|          │                              ╭╯                                    │  I_dis = konstan rendah               |
|          │                             ╭╯                                     │  Lapisan gas kontinu terbentuk        |
|          │                            ╭╯                                      ╰──────────────────────────►            |
|          │                           ╭╯                                                                               |
|          └───────────────────────────┴────────────────────────────────────────┴──────────────────────────►             |
|          0                          V_onset                                  V_crit                      Tegangan (V) |
|                                                                                                                       |
|   1. V < V_onset   : Zona non-Faradaic / polarisasi lapisan ganda elektrik (EDL).                                     |
|   2. V_onset - V_crit: Zona konveksi gelembung masif (Ohmic bubbling regime), arus naik linear hingga puncak.         |
|   3. V = V_crit    : Lapisan gas hidrogen menyatu (bubble coalescence) mengisolasi katoda.                            |
|   4. V > V_crit    : Breakdown dielektrik uap, percikan mikro termal kontinu (SACE Regime).                          |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Kinetika Penyatuan Gelembung (*Bubble Coalescence*) dan Ketebalan Lapisan Gas ($d_f$)

Ketika kerapatan arus katoda melampaui ambang batas hidrodinamika kritis ($j > j_{\text{crit}} \approx 1 - 3\text{ A/mm}^2$), gelembung gas hidrogen diskrit tidak lagi dapat melepaskan diri secara individual melalui gaya apung Archimedes. Sebaliknya, gaya kohesi antar-gelembung dan efek pendidihan Joule mikro (*micro-Joule boiling*) memicu penyatuan gelembung (*bubble coalescence*) secara instan, membentuk lapisan uap tipis kontinu yang menyelimuti ujung katoda.

Ketebalan efektif lapisan gas ($d_f$) dimodelkan melalui kesetimbangan antara gaya geser fluida viskos, tegangan antarmuka gas-cair, dan gaya elektrohidrodinamik:

$$d_f \approx C_g \left( \frac{\mu_{\text{electrolyte}} \cdot \dot{V}_{\text{H}_2}}{\gamma_{LV} \cdot (1 - \cos\theta_c)} \right)^{1/3}$$

di mana:
- $C_g$ = Koefisien empiris morfologi elektroda ($1{,}2 - 1{,}8$).
- $\mu_{\text{electrolyte}}$ = Viskositas dinamik larutan alkali ($\text{Pa}\cdot\text{s}$).
- $\gamma_{LV}$ = Tegangan permukaan larutan elektrolit ($\text{N/m}$).
- $\theta_c$ = Sudut kontak keterbasahan antara elektrolit dan elektroda logam.

Ketebalan lapisan gas yang stabil berada pada rentang $d_f = 5\ \mu\text{m} - 25\ \mu\text{m}$. Lapisan gas yang terlalu tebal ($d_f > 40\ \mu\text{m}$) memicu percikan liar yang merusak akurasi dimensi (*overcut* besar), sedangkan lapisan yang terlalu tipis atau putus-putus menyebabkan hubung singkat elektrokimia (*electrochemical short-circuit*).

---

## 3. Teori Percikan Mikro & Kinetika Etsa Termokimia Gabungan

### 3.1 Mekanisme Breakdown Dielektrik Hukum Paschen pada Lapisan Gas Mikro

Pelepasan percikan mikro melintasi selimut gas hidrogen dan uap air mengikuti modifikasi **Hukum Paschen** untuk celah mikro bertekanan sub-atmosferik/termodifikasi plasma:

$$V_b = \frac{B \cdot (P_g \cdot d_f)}{\ln(A \cdot P_g \cdot d_f) - \ln\left[\ln\left(1 + \frac{1}{\gamma_{se}}\right)\right]}$$

di mana:
- $V_b$ = Tegangan tembus dielektrik (*breakdown voltage*, $\text{V}$).
- $P_g$ = Tekanan parsial uap/gas di dalam lapisan isolasi ($\text{atm}$ atau $\text{Pa}$).
- $d_f$ = Ketebalan lapisan gas ($\mu\text{m}$).
- $A, B$ = Konstanta gas Townsend untuk campuran uap $\text{H}_2/\text{H}_2\text{O}$.
- $\gamma_{se}$ = Koefisien emisi elektron sekunder katoda.

Energi pelepasan tunggal percikan mikro ($E_s$) dinyatakan sebagai fungsi kapasitansi ekuivalen antarmuka katoda-lapisan gas-elektrolit:

$$E_s = \frac{1}{2} C_{\text{gap}} \left( V_{\text{applied}}^2 - V_{\text{extinct}}^2 \right) = \frac{1}{2} \left(\frac{\varepsilon_0 \varepsilon_r A_{\text{eff}}}{d_f}\right) \left( V_{\text{applied}}^2 - V_{\text{extinct}}^2 \right)$$

di mana $\varepsilon_0$ adalah permitivitas vakum ($8{,}854 \times 10^{-12}\text{ F/m}$), $\varepsilon_r$ permitivitas relatif lapisan gas uap ($\approx 1{,}0 - 1{,}05$), $A_{\text{eff}}$ luas kontak aktif katoda, dan $V_{\text{extinct}}$ tegangan padam percikan.

### 3.2 Sinergi Termokimia Etsa Alkali pada Kaca Borosilikat / Silika

Mekanisme pembuangan material (*Material Removal Mechanism* / MRM) pada ECDM bukan sekadar erosi termal murni, melainkan reaksi sinergis termomekanis-kimia:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DIAGRAM SINERGI AKSELERASI REAKSI TERMOKIMIA PADA PROSES ECDM                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|       PERCIKAN ELEKTRONIK MIKRO                 LARUTAN ALKALI PEKAT (NaOH / KOH)                                     |
|       (Temperatur Lokal T > 1500 - 3000 K)      (Konsentrasi Tinggi: 5 - 8 Molar)                                     |
|                     │                                       │                                                         |
|                     ├───────────────────┬───────────────────┤                                                         |
|                                         ▼                                                                             |
|                     ┌───────────────────────────────────────┐                                                         |
|                     │ PEMUTUSAN IKATAN KOVALEN SILOKSAN     │                                                         |
|                     │        Si — O — Si (Glass Network)    │                                                         |
|                     └───────────────────┬───────────────────┘                                                         |
|                                         ▼                                                                             |
|                     ┌───────────────────────────────────────┐                                                         |
|                     │ REAKSI DISSOLUSI TERMOKIMIA ULTRA-CEPAT│                                                        |
|                     │ SiO2 + 2NaOH ──► Na2SiO3 + H2O        │                                                        |
|                     │ (Laju reaksi meningkat eksponensial   │                                                        |
|                     │  mengikuti kinetika Arrhenius)        │                                                        |
|                     └───────────────────┬───────────────────┘                                                         |
|                                         ▼                                                                             |
|       ┌───────────────────────────────────────────────────────────────────┐                                           |
|       │ HASIL: Pembuangan Material Mulus, Bebas Retak Getas (Chipping-Free)│                                          |
|       │ Kavitasi Terbentuk Melalui Pelelehan & Pelarutan Soluble Silikat  │                                           |
|       └───────────────────────────────────────────────────────────────────┘                                           |
+-----------------------------------------------------------------------------------------------------------------------+
```

Laju reaksi etsa silika ($\text{SiO}_2$) oleh ion hidroksil ($\text{OH}^-$) pada suhu tinggi mengikuti persamaan kinetika **Arrhenius**:

$$k_{\text{etch}}(T) = k_0 \exp\left( -\frac{E_a}{R \cdot T_{\text{local}}} \right)$$
$$\text{Laju Etsa Linear: } v_{\text{etch}} = k_{\text{etch}}(T) \cdot [\text{OH}^-]^n$$

di mana:
- $k_0$ = Faktor frekuensi pre-eksponensial ($\text{m/s}\cdot(\text{mol/L})^{-n}$).
- $E_a$ = Energi aktivasi pemutusan ikatan $\text{Si-O}$ ($\approx 75 - 90\text{ kJ/mol}$).
- $T_{\text{local}}$ = Temperatur transien zona percikan mikro ($1200 - 2500\text{ K}$).
- $[\text{OH}^-]$ = Konsentrasi molar ion hidroksil pada antarmuka.

Kenaikan temperatur lokal dari $300\text{ K}$ ke $1500\text{ K}$ meningkatkan konstanta laju etsa kimia $k_{\text{etch}}$ hingga lebih dari $10^6$ kali lipat secara instan, mengubah pelarutan kimia yang lambat menjadi proses mikro-pemesinan ultra-cepat.

---

## 4. Pemodelan Matematis Material Removal Rate (MRR) & Celah Permesinan (*Machining Gap*)

### 4.1 Pemodelan Volumetrik MRR Campuran Termal-Kimia

Laju pembuangan material total ($\text{MRR}_{\text{total}}$ dalam $\text{mm}^3/\text{min}$) dalam proses permesinan lubang mikro (*micro-drilling*) atau pengefraisan mikro (*micro-milling*) ECDM didekomposisi menjadi kontribusi termal pelelehan/evaporasi ($\text{MRR}_{\text{thermal}}$) dan kontribusi kinetika pelarutan kimia berakselerasi tinggi ($\text{MRR}_{\text{chemical}}$):

$$\text{MRR}_{\text{total}} = \text{MRR}_{\text{thermal}} + \text{MRR}_{\text{chemical}}$$

$$\text{MRR}_{\text{thermal}} = \eta_{\text{eff}} \cdot \frac{f_{\text{pulse}} \cdot E_s}{\rho_w \left[ C_p (T_m - T_0) + L_f + \beta_v L_v \right]}$$

$$\text{MRR}_{\text{chemical}} = A_{\text{mach}} \cdot k_0 [\text{OH}^-]^n \exp\left( -\frac{E_a}{R \cdot T_{\text{eff}}} \right)$$

di mana:
- $\eta_{\text{eff}}$ = Efisiensi transfer kalor percikan ke benda kerja ($0{,}05 - 0{,}18$).
- $f_{\text{pulse}}$ = Frekuensi pulsa pelepasan percikan ($\text{Hz}$).
- $\rho_w$ = Massa jenis benda kerja kaca/keramik ($\text{kg/m}^3$).
- $C_p$ = Kapasitas kalor spesifik material ($\text{J}/(\text{kg}\cdot\text{K})$).
- $T_m, T_0$ = Titik lebur/lunak material dan suhu awal elektrolit ($\text{K}$).
- $L_f, L_v$ = Kalor laten fusi dan kalor laten penguapan ($\text{J/kg}$).
- $\beta_v$ = Fraksi massa material yang terevaporasi ($0 \le \beta_v \le 0{,}2$).
- $A_{\text{mach}}$ = Luas penampang zona kerja aktif ($\text{mm}^2$).

### 4.2 Pemodelan Celah Kerja Samping (*Side Machining Gap / Overcut*)

Celah kerja radial ($S_g$) antara radius pahat ($R_{\text{tool}}$) dan radius lubang mikro akhir ($R_{\text{hole}}$) menentukan toleransi dimensi presisi:

$$S_g = R_{\text{hole}} - R_{\text{tool}} = d_f + \lambda_{\text{spark}} + \delta_{\text{etch}}$$

$$\delta_{\text{etch}} \approx \int_0^{t_{\text{mach}}} v_{\text{etch}}(T_{\text{boundary}}(t)) \, dt$$

di mana $\lambda_{\text{spark}}$ adalah panjang jangkauan percikan plasma mikro ($2 - 10\ \mu\text{m}$) dan $\delta_{\text{etch}}$ adalah kedalaman penipisan etsa kimia samping selama waktu kontak permesinan $t_{\text{mach}}$.

---

## 5. Parameter Kritis Proses & Karakteristik Integritas Permukaan

Dalam optimasi kualitas manufaktur ECDM mikro, parameter operasional utama dikelompokkan ke dalam empat domain kendali:

| Parameter Proses | Rentang Standar Industri | Pengaruh Fisis & Kualitas | Resiko Anomali Jika Menyimpang |
| :--- | :--- | :--- | :--- |
| **Tegangan Catu Daya ($V_{\text{applied}}$)** | $24 - 45\text{ V}$ (DC / Pulsed DC) | Mengatur energi percikan ($E_s \propto V^2$) dan ketebalan lapisan gas. | $V < V_{\text{crit}}$: Tanpa percikan (etsa murni); $V > 50\text{ V}$: Retak termal mikro (*thermal spalling*). |
| **Konsentrasi Elektrolit ($\text{NaOH / KOH}$)** | $15 - 30\text{ wt}\%$ ($4 - 8\text{ M}$) | Menentukan konduktivitas ionik ($\kappa_e$) dan laju etsa termokimia. | Konsentrasi $< 10\%$: Lapisan gas tidak stabil; Konsentrasi $> 35\%$: Korosi korosif berlebih pada katoda. |
| **Bentuk & Frekuensi Gelombang Pulsa** | Pulsed DC: $f = 0{,}5 - 5\text{ kHz}$, *Duty Cycle* $30 - 70\%$ | Memberikan jeda waktu pendinginan (*pulse-off*) untuk pengisian ulang elektrolit. | *Duty Cycle* $100\%$ (DC Murni): Pemanasan berlebih (*overheating*), keausan pahat masif. |
| **Bantuan Medan Eksternal (Ultrasonik / Magnet)** | US: $20 - 40\text{ kHz}$ ($A = 2 - 8\ \mu\text{m}$), Magnet: $0{,}2 - 0{,}5\text{ T}$ | Memaksa flushing elektrolit segar, menstabilkan lapisan gas tipis homogen. | Tanpa agitasi: Hambatan pasivasi gelembung stagnan, kedalaman lubang terhenti (*depth saturation*). |
| **Laju Umpan Gaya Gravitasi / Kecepatan Konstan** | $v_{\text{feed}} = 2 - 15\ \mu\text{m/s}$ atau Beban gravitasi $5 - 25\text{ mN}$ | Menjaga celah permesinan stabil tanpa kontak mekanis berlebih. | Gaya terlalu tinggi: Keretakan mekanis benda kerja getas; Gaya terlalu rendah: Kehilangan kontak etsa. |

---

## 6. Algoritma Python Solver: Simulasi Dinamika Lapisan Gas, Celah Permesinan, dan Optimasi Multi-Objektif ECDM

Berikut adalah skrip komputasional Python terverifikasi untuk menyimulasikan laju evolusi gas hidrogen, tegangan kritis pembentukan lapisan gas ($V_{\text{crit}}$), profil termal transien, laju pembuangan material ($\text{MRR}$), dan optimasi parameter kendali ECDM untuk permesinan kaca borosilikat:

```python
"""
RuangTI Engineering Computation Core - Module 615
Electrochemical Discharge Machining (ECDM / SACE) Multi-Physics Engine
Models: Hydrogen Gas Evolution, Gas Film Dynamics, Critical Voltage, Thermal-Chemical MRR, and Machining Gap.
Standards: ISO 25178, ASTM E384, CIRP Hybrid Machining Guidelines.
"""

import numpy as np
import math

class ECDMSimulator:
    def __init__(self, tool_diameter_um=300.0, electrolyte_wt_pct=25.0, electrolyte_type="NaOH"):
        """
        Inisialisasi Parameter Sistem Permesinan Mikro ECDM.
        """
        self.d_tool = tool_diameter_um * 1e-6  # meter
        self.r_tool = self.d_tool / 2.0
        self.area_tool_tip = math.pi * (self.r_tool ** 2)  # m^2
        self.wt_pct = electrolyte_wt_pct
        self.electrolyte_type = electrolyte_type
        
        # Sifat Fisik Kaca Borosilikat (Pyrex 7740)
        self.rho_glass = 2230.0  # kg/m^3
        self.cp_glass = 750.0    # J/(kg*K)
        self.tm_soften = 1093.0  # K (Softening Point ~ 820 °C)
        self.t_amb = 298.15      # K (25 °C)
        self.latent_heat_eff = 4.5e5 # J/kg (Efektif pelelehan/dekomposisi lokal)
        self.activation_energy_ea = 82000.0 # J/mol (Kinetika etsa ikatan Si-O)
        self.r_gas = 8.314462    # J/(mol*K)
        self.faraday_const = 96485.33 # C/mol
        
        # Konduktivitas Elektrolit Berdasarkan Konsentrasi wt%
        if electrolyte_type == "NaOH":
            # Korelasi empiris konduktivitas spesifik NaOH pada 25 C (S/m)
            self.sigma_el = 4.2 * self.wt_pct - 0.05 * (self.wt_pct ** 2)
            self.molar_conc = (self.wt_pct * 10.0 * 1.25) / 40.0 # mol/L (Densitas ~ 1.25 kg/L)
        else: # KOH
            self.sigma_el = 4.8 * self.wt_pct - 0.04 * (self.wt_pct ** 2)
            self.molar_conc = (self.wt_pct * 10.0 * 1.28) / 56.1

    def calculate_critical_voltage(self, immersion_depth_um=500.0):
        """
        Menghitung Tegangan Kritis (V_crit) Pembentukan Lapisan Gas Stabil.
        Berdasarkan model kerapatan arus kritis elektrohidrodinamik Basak-Ghosh & Wüthrich.
        """
        h_imm = immersion_depth_um * 1e-6 # meter
        area_total_wet = self.area_tool_tip + (math.pi * self.d_tool * h_imm) # m^2
        
        # Kerapatan arus kritis ambang penyatuan gelembung (A/m^2)
        j_crit = 1.85e6 * (self.wt_pct / 20.0)**0.65
        i_crit = j_crit * area_total_wet
        
        # Resistansi bulk larutan elektrolit (Ohm)
        r_bulk = 1.0 / (self.sigma_el * 2.0 * math.pi * self.r_tool)
        
        # Tegangan kritis V_crit
        v_polarization = 2.1 # Overpotential elektroda total (V)
        v_crit = v_polarization + (i_crit * r_bulk)
        return {
            "immersion_depth_um": immersion_depth_um,
            "wet_area_mm2": area_total_wet * 1e6,
            "critical_current_A": i_crit,
            "critical_voltage_V": max(26.5, v_crit)
        }

    def simulate_machining_kinetics(self, applied_voltage=32.0, duty_cycle=0.5, frequency_hz=1000.0, immersion_depth_um=300.0):
        """
        Menghitung Kinetika Pelepasan Percikan, Ketebalan Lapisan Gas, Temperatur Transien,
        MRR Gabungan (Termal + Kimia), dan Celah Samping (Overcut).
        """
        crit_data = self.calculate_critical_voltage(immersion_depth_um)
        v_crit = crit_data["critical_voltage_V"]
        
        if applied_voltage < v_crit:
            # Mode Etsa Kimia Murni Sub-Critical (Tanpa Percikan Mikro)
            t_spark = self.t_amb + 15.0
            gas_film_thickness_um = 2.0
            is_sparking = False
            mrr_thermal = 0.0
            spark_energy_uj = 0.0
        else:
            # Mode Percikan Mikro Stabil (SACE / ECDM Regime)
            is_sparking = True
            delta_v = applied_voltage - v_crit
            gas_film_thickness_um = 6.5 + 0.45 * delta_v
            
            # Kapasitansi lapisan gas (Farad)
            eps_0 = 8.854e-12
            eps_r = 1.02
            d_film_m = gas_film_thickness_um * 1e-6
            c_gap = (eps_0 * eps_r * self.area_tool_tip) / d_film_m
            
            v_extinct = 0.4 * applied_voltage
            spark_energy_j = 0.5 * c_gap * (applied_voltage**2 - v_extinct**2) * 1.8e4 # Faktor penguatan avalanche plasma
            spark_energy_uj = spark_energy_j * 1e6
            
            # Temperatur puncak lokal zona percikan (K)
            t_spark = min(3200.0, self.t_amb + 45.0 * (applied_voltage - 20.0)**1.25)
            
            # MRR Termal (mm^3/min)
            eta_thermal = 0.095 # Efisiensi termal transfer panas ke substrat
            p_spark_avg = spark_energy_j * frequency_hz * duty_cycle
            delta_h_vol = self.rho_glass * (self.cp_glass * (self.tm_soften - self.t_amb) + self.latent_heat_eff) # J/m^3
            mrr_thermal_m3s = (eta_thermal * p_spark_avg) / delta_h_vol
            mrr_thermal = mrr_thermal_m3s * 1e9 * 60.0 # mm^3/min

        # MRR Kimia Berakselerasi Termal Arrhenius
        k0_chemical = 2.4e-3 # m/(s * (mol/L)^1.2)
        k_etch = k0_chemical * math.exp(-self.activation_energy_ea / (self.r_gas * min(t_spark, 1800.0)))
        v_etch_ms = k_etch * (self.molar_conc ** 1.1)
        mrr_chemical_m3s = self.area_tool_tip * v_etch_ms
        mrr_chemical = mrr_chemical_m3s * 1e9 * 60.0 # mm^3/min
        
        mrr_total = mrr_thermal + mrr_chemical
        
        # Kecepatan Penetrasi Lubang Linear (Drilling Feed Rate in um/s)
        linear_feed_rate_ums = (mrr_total / (math.pi * (self.r_tool*1e3)**2)) * (1000.0 / 60.0)
        
        # Radial Overcut Celah Samping (um)
        side_gap_um = gas_film_thickness_um + (3.5 if is_sparking else 0.5) + (v_etch_ms * 1e6 * 20.0)
        hole_diameter_um = (self.r_tool * 2e6) + (2.0 * side_gap_um)
        
        return {
            "applied_voltage_V": applied_voltage,
            "is_spark_regime": is_sparking,
            "critical_voltage_V": round(v_crit, 2),
            "gas_film_thickness_um": round(gas_film_thickness_um, 2),
            "spark_energy_uJ": round(spark_energy_uj, 4),
            "spark_temperature_K": round(t_spark, 1),
            "mrr_thermal_mm3_min": round(mrr_thermal, 6),
            "mrr_chemical_mm3_min": round(mrr_chemical, 6),
            "mrr_total_mm3_min": round(mrr_total, 6),
            "feed_rate_um_per_sec": round(linear_feed_rate_ums, 2),
            "side_overcut_gap_um": round(side_gap_um, 2),
            "final_hole_diameter_um": round(hole_diameter_um, 2)
        }

if __name__ == "__main__":
    print("=" * 80)
    print("SIMULASI MULTI-FISIKA ELEKTROCHEMICAL DISCHARGE MACHINING (ECDM / SACE)")
    print("=" * 80)
    
    sim = ECDMSimulator(tool_diameter_um=250.0, electrolyte_wt_pct=25.0, electrolyte_type="NaOH")
    crit = sim.calculate_critical_voltage(immersion_depth_um=400.0)
    print(f"Karakteristik Katoda: Diameter = 250 um | Elektrolit = NaOH 25 wt% (Molaritas = {sim.molar_conc:.2f} M)")
    print(f"Tegangan Kritis Ambang Pembentukan Gas Film (V_crit): {crit['critical_voltage_V']:.2f} V")
    print(f"Arus Kritis Maksimum (I_crit): {crit['critical_current_A']:.3f} A pada Area Basah {crit['wet_area_mm2']:.3f} mm^2\n")
    
    print("-" * 80)
    print(f"{'Tegangan (V)':<14}{'Status':<12}{'T_spark (K)':<14}{'MRR Total (mm3/min)':<22}{'Feed (um/s)':<14}{'Hole Diam (um)':<14}")
    print("-" * 80)
    
    voltages = [20.0, 25.0, 28.0, 32.0, 36.0, 40.0, 44.0]
    for v in voltages:
        res = sim.simulate_machining_kinetics(applied_voltage=v, duty_cycle=0.6, frequency_hz=2000.0, immersion_depth_um=400.0)
        status = "SPARKING" if res["is_spark_regime"] else "ETCH ONLY"
        print(f"{res['applied_voltage_V']:<14.1f}{status:<12}{res['spark_temperature_K']:<14.1f}{res['mrr_total_mm3_min']:<22.5f}{res['feed_rate_um_per_sec']:<14.2f}{res['final_hole_diameter_um']:<14.2f}")
    print("=" * 80)
```

---

## 7. Studi Kasus Industri: Fabrikasi Mikro-Kanal Fluida Kaca Borosilikat untuk Perangkat *Lab-on-a-Chip* Medis

### 7.1 Deskripsi Masalah & Spesifikasi Komponen

Sebuah perusahaan manufaktur perangkat diagnostik biomedis presisi tinggi memproduksi chip mikrofluida *Lab-on-a-Chip* berbahan substrat kaca borosilikat (*Pyrex 7740*, dimensi $40\text{ mm} \times 25\text{ mm} \times 1{,}0\text{ mm}$). Spesifikasi teknis menuntut pembuatan larik 16 lubang injeksi mikro (*micro-inlet ports*) dan kanal pencampur mikro (*micro-mixing channels*) dengan kriteria ketat:
- **Diameter Lubang Target**: $D_{\text{target}} = 300\ \mu\text{m} \pm 10\ \mu\text{m}$.
- **Toleransi Keretakan Tepi (*Edge Chipping Max*)**: $w_{\text{chip}} < 15\ \mu\text{m}$ (bebas retak mikro struktural).
- **Kekasaran Permukaan Dinding Lubang**: $Ra \le 0{,}45\ \mu\text{m}$ (sesuai **ISO 25178**).
- **Waktu Siklus Maksimum**: $t_{\text{hole}} \le 45\text{ detik/lubang}$ untuk ketebalan kaca $1{,}0\text{ mm}$ ($1000\ \mu\text{m}$).

Metode awal menggunakan pengeboran ultrasonik mekanis (*ultrasonic rotary drilling*) menghasilkan *chipping* parah pada sisi keluar (*exit chipping* $> 80\ \mu\text{m}$), mengakibatkan tingkat cacat (*scrap rate*) sebesar $34{,}6\%$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DIAGNOSTIK MORFOLOGI LUBANG MIKRO: MEKANIS AWAL VS ECDM OPTIMAL                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] PENGEBORAN MEKANIS AWAL (ROTARY US DRILLING)        [B] ECDM HIBRIDA DENGAN PULSED DC & AGITASI US               |
|                                                                                                                       |
|         Retak Getas & Chipping Sisi Keluar Parah                   Kontur Mulus, Bebas Keretakan Mikro                |
|               (Exit Chipping > 80 mikron)                                (Exit Chipping < 8 mikron)                   |
|                                                                                                                       |
|               ╭──────────────╮                                           ╭──────────────╮                             |
|         ─────╯  \  /    \  /  ╰─────                               ─────╯              ╰─────                        |
|        │      Retak Mikro           │                              │   Dinding Halus,     │                           |
|        │      Terkonsentrasi        │                              │   Ra = 0.32 um       │                           |
|        │                            │                              │                      │                           |
|        │      ◄── D_hole ──►        │                              │    ◄── 304 um ──►    │                           |
|        │       (Non-uniform)        │                              │   (Toleransi Presisi)│                           |
|        │                            │                              │                      │                           |
|         ─────╮ ╱  ╲  ╱  ╲  ╱ ╭─────                                 ─────╮              ╭─────                        |
|               ╰──────────────╯                                           ╰──────────────╯                             |
|          Scrap Rate Tinggi (34.6%)                                  Yield Lolos Uji 99.2%                             |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.2 Implementasi Solusi Rekayasa ECDM Optimal

Tim rekayasa industri menerapkan sel manufaktur mikro ECDM terintegrasi dengan modifikasi operasional:
1. **Pemilihan Elektroda Katoda**: Batang mikro karbida tungsten ($\text{WC-Co}$) silindris berdiameter $d_{\text{tool}} = 220\ \mu\text{m}$ dengan profil ujung datar terpoles super-halus.
2. **Formulasi Elektrolit & Suhu Operasi**: Larutan $\text{NaOH}\ 25\text{ wt}\%$ ($c \approx 7{,}8\text{ M}$) yang dipanaskan awal secara stabil pada $T_{\text{bath}} = 45^\circ\text{C}$ untuk mempercepat mobilitas ionik dan homogenitas pelepasan gelembung.
3. **Eksitasi Elektrik Pulsed DC**: Modulasi pulsa tegangan $V_{\text{peak}} = 34\text{ V}$, frekuensi pulsa $f = 2{,}5\text{ kHz}$, dan *duty cycle* $55\%$, memberikan interval relaksasi termal sebesar $180\ \mu\text{s}$ per siklus untuk mencegah akumulasi panas berlebih.
4. **Bantuan Getaran Ultrasonik Sumbu Katoda (*Ultrasonic Vibration Assistance*)**: Getaran frekuensi tinggi $f_{\text{US}} = 28\text{ kHz}$ dengan amplitudo $A = 3{,}5\ \mu\text{m}$ diaplikasikan pada pemegang benda kerja guna memaksa pengeluaran lumpur silikat terlarut (*flushing active debris*) dari celah sempit dasar lubang.

### 7.3 Hasil Kuantitatif & Verifikasi Kualitas

Setelah implementasi parameter optimal pada 1.200 siklus produksi kontinu:
- **Presisi Dimensi Diameter**: Rata-rata diameter lubang tercapai sebesar $303{,}8\ \mu\text{m} \pm 3{,}2\ \mu\text{m}$ (memenuhi batas toleransi $\pm 10\ \mu\text{m}$).
- **Integritas Tepi (*Exit Chipping*)**: Berkurang drastis dari $82\ \mu\text{m}$ menjadi hanya $6{,}4\ \mu\text{m}$ ($> 92\%$ reduksi defek getas).
- **Kekasaran Permukaan Areal ($Sa$)**: Dicapai $Sa = 0{,}31\ \mu\text{m}$ dan $Ra = 0{,}28\ \mu\text{m}$ (pengukuran konfokal 3D optik sesuai **ISO 25178**).
- **Waktu Siklus Permesinan**: $t_{\text{cycle}} = 31{,}4\text{ detik/lubang}$, menghasilkan laju produksi $114\text{ lubang/jam}$.
- **Tingkat Lolos Uji Produk (*Yield*)**: Meningkat dari $65{,}4\%$ menjadi $99{,}2\%$, mengeliminasi kerugian biaya *scrap* hingga $14.200 USD per bulan.

---

## 8. Pertanyaan Uji Kompetensi & Diskusi Kritis

1. **Analisis Fenomena Elektrohidrodinamika**: Jelaskan mengapa penurunan tegangan catu daya di bawah tegangan kritis ($V < V_{\text{crit}}$) pada proses ECDM menghentikan pembentukan percikan mikro secara total dan hanya menyisakan reaksi elektrolisis konvensional! Turunkan hubungan antara rapat arus kritis $j_{\text{crit}}$, viskositas elektrolit $\mu$, dan ketegangan antarmuka $\gamma_{LV}$ dalam mekanisme penyatuan gelembung gas hidrogen (*bubble coalescence*)!
2. **Kinetika Termokimia Gabungan**: Pada permesinan mikro kaca kuarsa murni ($\text{SiO}_2$), bandingkan laju pembuangan material ($\text{MRR}$) yang dihasilkan oleh erosi termal murni dibandingkan pelarutan termokimia Arrhenius dalam larutan $\text{KOH}\ 30\text{ wt}\%$! Mengapa aplikasi modulasi tegangan *Pulsed DC* dengan *duty cycle* $50\%$ menghasilkan integritas permukaan bebas retak mikro yang jauh lebih unggul dibandingkan tegangan arus searah kontinu (*Continuous DC*) pada daya rata-rata yang sama?
3. **Desain Kendali Celah Mikro**: Dalam fabrikasi lubang mikro berrasio aspek tinggi ($L/D > 10$), fenomena saturasi kedalaman (*depth saturation*) sering kali menyebabkan laju permesinan terhenti sebelum menembus substrat. Rancang strategi hibridisasi berbasis aktuasi ultrasonik atau medan magnet Lorentz (*Electromagnetic ECDM*) untuk mempertahankan stabilitas lapisan gas dan pembilasan celah (*debris flushing*) pada kedalaman penetrasi $> 1500\ \mu\text{m}$!

---

## 9. Referensi Terverifikasi (2022–2026 & Standar Internasional)

1. **Liu, Y., & Xieeryazidan, A.** (2023). *Study of Gas Film Characteristics in Electrochemical Discharge Machining and Their Effects on Discharge Energy Distribution*. **Micromachines**, 14(5), 1079. https://doi.org/10.3390/mi14051079.
2. **Singh, T., Dvivedi, A., & Kumar, P.** (2025). *Examining the effect of gas film characteristics in magnetically and ultrasonic-assisted electrochemical discharge machining*. **The International Journal of Advanced Manufacturing Technology**, 136(3), 1411–1428. https://doi.org/10.1007/s00170-025-15411-3.
3. **Mishra, D. K., Arab, J., & Dixit, U. S.** (2022). *Electrochemical Discharge Machining: Principles, Modeling, and Hybrid Configurations*. In **Advanced Machining Science** (pp. 287–318). CRC Press / Taylor & Francis. https://doi.org/10.1201/9780429160011-13.
4. **Wüthrich, R., & Hof, L. A.** (2006). *The gas film in spark assisted chemical engraving (SACE)—A key element for micro-machining applications*. **International Journal of Machine Tools and Manufacture**, 46(7-8), 828–835. https://doi.org/10.1016/j.ijmachtools.2005.07.029.
5. **Abou Ziki, J. D., & Wüthrich, R.** (2015). *The machining gap during constant velocity-feed glass micro-drilling by Spark Assisted Chemical Engraving*. **Journal of Manufacturing Processes**, 20, 305–314. https://doi.org/10.1016/j.jmapro.2015.05.006.
6. **ISO 25178-2:2021**. *Geometrical product specifications (GPS) — Surface texture: Areal — Part 2: Terms, definitions and surface texture parameters*. International Organization for Standardization, Geneva.
7. **ASTM E384-22**. *Standard Test Method for Microindentation Hardness of Materials*. ASTM International, West Conshohocken, PA.
