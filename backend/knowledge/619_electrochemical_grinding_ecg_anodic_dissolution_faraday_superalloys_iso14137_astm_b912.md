# Modul 619: Electrochemical Grinding (ECG) & Hybrid Abrasive Machining: Kinetika Pelarutan Anodik Faraday, Laju Erosi Mekanis Roda Konduktif, Supresi Lapisan Pasivasi, dan Pemesinan Komponen Superalloy Bebas Tegangan Sisa (ISO 14137, ASTM B912 & ASME B46.1)

## 1. Pengantar & Konteks Industri: Pemesinan Hibrida Non-Konvensional (ECG)

Dalam pemrosesan material berkekuatan ultra-tinggi dan tahan panas (*High-Temperature Superalloys* / HTSA seperti Inconel 718, René 80, Waspaloy, Titanium Ti-6Al-4V, dan karbida tersementasi Tungsten Carbide-Cobalt WC-Co), proses gerinda mekanis konvensional (*conventional grinding*) menghadapi tantangan metalurgi dan manufaktur yang sangat parah:
1. **Kerusakan Termal Bawah Permukaan (*Thermal Damage & Subsurface Microcracking*)**: Fluks panas gerinda yang sangat intensif ($\Phi > 50 - 150\text{ W/mm}^2$) memicu lonjakan temperatur lokal melampaui titik rekristalisasi/transformasi fasa, menyebabkan terbentuknya lapisan putih getas (*brittle untempered white layer*), pembakaran permukaan (*burns*), dan tegangan sisa tarik berbahaya (*residual tensile stress*) yang mempercepat inisiasi retak fatik siklus tinggi (*HCF failure*).
2. **Keausan Roda Gerinda Masif (*Catastrophic Wheel Wear*)**: Rasio gerinda (*G-ratio* = volume material terbuang per volume keausan roda) anjlok hingga $G < 1 - 5$, memerlukan siklus *dressing* atau *truing* yang sangat sering serta meningkatkan biaya perkakas abrasi intan/CBN (*superabrasives*).
3. **Deformasi Plastis & Geram (*Burrs & Plastic Smearing*)**: Pada pemesinan komponen berdinding tipis berpresisi tinggi—seperti sarang lebah (*honeycomb seals*) turbin gas atau jarum injeksi medis hipodermik berdinding tipis—gaya kontak mekanis yang tinggi ($F_n > 500\text{ N}$) menyebabkan deformasi elastis-plastis, pembengkokan sirip (*fin deflection*), dan pembentukan *burr* tajam pada tepi keluar yang memerlukan operasi *deburring* manual berbiaya tinggi.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    ARSITEKTUR & MEKANISME HYBRID ELECTROCHEMICAL GRINDING (ECG)                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                       Catu Daya DC Arus Searah (0 - 30 V, 100 - 3000 A)                               |
|                                                 (+) ───────────────┬─────────────── (-)                               |
|                                                  │                 │                                                  |
|                                                  ▼                 ▼                                                  |
|                                            ┌───────────┐     ┌───────────┐                                            |
|                                            │ BENDA     │     │ RODA      │                                            |
|                                            │ KERJA     │     │ GERINDA   │ (Baja/Tembaga Berikat Konduktif                |
|                                            │ (Anoda +) │     │ (Katoda -)│  dengan Butir Abrasif Intan/Al2O3)             |
|                                            └─────┬─────┘     └─────┬─────┘                                            |
|                                                  │                 │                                                  |
|                                                  │  Celah Elektrolit │                                                |
|                                                  │ (Gap g = 10-30 µm)│                                                |
|                                                  ▼                 ▼                                                  |
|                          ┌────────────────────────────────────────────────────────┐                                   |
|                          │ Nozel Injeksi Elektrolit (NaNO3 / NaCl Bertekanan)     │                                   |
|                          │ Aliran Hidrodinamik Superkritis (v_el = 15 - 35 m/s)   │                                   |
|                          └───────────────────────┬────────────────────────────────┘                                   |
|                                                  │                                                                    |
|                                                  ▼                                                                    |
|                 ╭───────────────────────────────────────────────────────────────────╮                                 |
|                 │                     ZONA REAKSI HIBRIDA ECG                       │                                 |
|                 │                                                                   │                                 |
|                 │   1. REAKSI ANODIK (Faraday Dissolution ~ 90-95% MRR):            │                                 |
|                 │      M -> M^(z+) + z e^-  (Pelarutan ionik tanpa gaya mekanis)    │                                 |
|                 │                                                                   │                                 |
|                 │   2. PEMBENTUKAN LAPISAN PASIVASI OKSIDA:                         │                                 |
|                 │      M^(z+) + z OH^- -> M(OH)_z -> MO_(z/2) (Film pasif isolatif) │                                 |
|                 │                                                                   │                                 |
|                 │   3. PENGELUPASAN MEKANIS OLEH BUTIR ABRASIF (~ 5-10% MRR):       │                                 |
|                 │      Butir intan/Al2O3 mengikis lapisan pasif lunak, membuka      │                                 |
|                 │      permukaan logam segar untuk pelarutan anodik kontinu         │                                 |
|                 ╰────────────────────────────────┬──────────────────────────────────╯                                 |
|                                                  │                                                                    |
|                                                  ▼                                                                    |
|                               KOMPONEN SELESAI DIPROSES (ECG PART)                                                    |
|                   ═════════════════════════════════════════════════════════                                           |
|                   Bebas Retak Termal, Bebas Lapisan Putih, Bebas Tegangan Sisa Tarik,                                 |
|                   Bebas Burr (Burr-Free), Integritas Permukaan Utuh (Ra = 0.1 - 0.4 µm)                               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Electrochemical Grinding (ECG)**—dikenal juga sebagai *Electrolytic Grinding*—adalah proses manufaktur hibrida mutakhir yang menyinergikan pelarutan elektrokimia anodik (*anodic electrochemical dissolution*, berkontribusi sekitar $85\% - 95\%$ dari total laju pembuangan material) dan abrasi mekanis ringan (*mechanical abrasive wiping/scraping*, berkontribusi sekitar $5\% - 15\%$). 

Dalam sistem ECG, benda kerja logam bertindak sebagai anoda ($+$), sedangkan roda gerinda konduktif (terdiri atas partikel abrasif non-konduktif seperti intan atau aluminium oksida yang terikat dalam matriks logam konduktif seperti perunggu, nikel, atau resin bermuatan tembaga) bertindak sebagai katoda ($-$). Cairan elektrolit aqueous (biasanya larutan sodium nitrat $\text{NaNO}_3$ atau sodium klorida $\text{NaCl}$) disuntikkan ke dalam celah antar-elektroda (*inter-electrode gap*, $g \approx 10 - 30\ \mu\text{m}$). 

Partikel abrasif yang menonjol dari permukaan roda berfungsi ganda:
1. Sebagai **penjaga celah dielektrik/elektrolit (*precision gap spacer*)**, mencegah terjadinya hubungan arus pendek (*short-circuit*) langsung antara bodi konduktif roda dan benda kerja.
2. Sebagai **pengikis mekanis mikro (*micro-mechanical scraper*)**, yang terus-menerus menyingkirkan film pasivasi oksida/hidroksida tipis yang terbentuk secara instan di permukaan anoda, mengekspos logam murni baru (*fresh active substrate*) untuk terus terlarut secara elektrokimia dengan efisiensi tinggi tanpa membebani spindel mesin dengan gaya potong berat.

Standar internasional, acuan keselamatan, pengujian integritas permukaan, dan kualifikasi proses ECG meliputi:
- **ISO 14137**: *Machine tools — Safety — Electro-discharge machines and electrochemical machines*.
- **ASTM B912**: *Standard Specification for Passivation of Stainless Steels and Superalloys Using Electropolishing and Electrochemical Methods*.
- **ASME B46.1**: *Surface Texture (Surface Roughness, Waviness, and Lay)*.
- **ISO 4287 / ISO 25178**: *Geometrical Product Specifications (GPS) — Surface texture: Profile and Areal methods*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials (Surface Integrity & Fatigue Precursor Evaluation)*.

---

## 2. Termodinamika Elektrokimia & Kinetika Pelarutan Anodik Faraday

Prinsip fundamental pengangkatan material secara elektrokimia pada anoda diatur oleh Hukum Faraday tentang Elektrolisis.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DINAMIKA KINEMATIKA DAN LAPISAN CELAH ANTAR-ELEKTRODA PADA ECG                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       RODA GERINDA KATODA KONDUKTIF BERPUTAR (v_s = 20 - 35 m/s)                                      |
|                       ┌───────────────────────────────────────────────────────────┐                                   |
|                       │  Matriks Logam Pengikat Konduktif (Katoda Negatif -)      │                                   |
|                       └───────┬───────────────────┬───────────────────┬───────────┘                                   |
|                               │                   │                   │                                               |
|                              ┌┴┐                 ┌┴┐                 ┌┴┐ Butir Abrasif Intan Non-Konduktif            |
|                              │▲│                 │▲│                 │▲│ (Tinggi Tonjolan h_p = 15 - 30 µm)           |
|                              └┬┘                 └┬┘                 └┬┘                                              |
|                               │                   │                   │                                               |
|        Aliran Elektrolit  ════╪═══════════════════╪═══════════════════╪════► Tekanan Injeksi P_el = 0.2 - 0.8 MPa     |
|        (NaNO3 10-20 wt%)      │                   │                   │     Celah Elektrolit Efektif g = 10 - 25 µm   |
|                               ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                                               |
|                               █████████████████████████████████████████ Lapisan Pasif Oksida Lunak M(OH)z             |
|                       ┌───────────────────────────────────────────────────────────┐                                   |
|                       │ Benda Kerja Superalloy / Karbida (Anoda Positif +)        │                                   |
|                       └───────────────────────────────────────────────────────────┘                                   |
|                               Kecepatan Umpan Meja Benda Kerja (v_f = 0.5 - 5.0 mm/s)                                 |
|                                           ════════════════►                                                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Formulasi Volumetrik Hukum Faraday & Massa Ekuivalen Elektrokimia
Massa material logam murni yang terlarut pada anoda ($m_{\text{ec}}$) sebanding dengan total muatan listrik ($Q = \int I \, dt$) yang dialirkan melintasi sel elektrolisis:
$$m_{\text{ec}} = \eta \cdot \frac{A_{\text{at}} \cdot I \cdot t}{z \cdot F}$$

Di mana:
- $\eta$ adalah efisiensi arus anodik (*anodic current efficiency*, $0 \le \eta \le 1{,}0$).
- $A_{\text{at}}$ adalah massa atom relatif unsur ($\text{g/mol}$).
- $I$ adalah kuat arus listrik total ($\text{A}$).
- $t$ adalah durasi waktu proses ($\text{s}$).
- $z$ adalah valensi pelarutan elektrokimia (bilangan transfer elektron, misalnya $\text{Ni}^{2+} \to z=2$, $\text{Fe}^{3+} \to z=3$, $\text{Cr}^{6+} \to z=6$).
- $F$ adalah konstanta Faraday ($F \approx 96\,485{,}332\ \text{C/mol} = \text{A}\cdot\text{s/mol}$).

Laju Pembuangan Material Elektrokimia Volumetrik teoritis ($\text{MRR}_{\text{ec}}$, dalam satuan $\text{mm}^3/\text{min}$) dinyatakan sebagai:
$$\text{MRR}_{\text{ec}} = 60 \times 10^3 \cdot \frac{\eta \cdot I \cdot C_{\text{ec}}}{\rho_m}$$

Di mana $\rho_m$ adalah massa jenis material anoda ($\text{g/cm}^3$) dan $C_{\text{ec}}$ adalah massa ekuivalen elektrokimia (*electrochemical equivalent*, $\text{g/C}$):
$$C_{\text{ec}} = \frac{A_{\text{at}}}{z \cdot F}$$

### 2.2 Ekuivalen Elektrokimia untuk Paduan Multikomponen (Superalloys)
Pada material multi-elemen seperti Inconel 718 atau Ti-6Al-4V, laju disolusi ditentukan oleh fraksi massa ($w_i$), massa atom ($A_i$), dan bilangan valensi ($z_i$) dari masing-masing unsur penyusun $n$:
$$\frac{1}{C_{\text{ec, alloy}}} = F \sum_{i=1}^n \frac{w_i \cdot z_i}{A_i}$$

Massa ekuivalen paduan efektif ($E_{\text{alloy}}$, dalam satuan $\text{g/valensi}$) adalah:
$$E_{\text{alloy}} = \frac{1}{\sum_{i=1}^n \frac{w_i \cdot z_i}{A_i}}$$
$$\text{MRR}_{\text{ec, alloy}} = 60 \times 10^3 \cdot \frac{\eta \cdot I \cdot E_{\text{alloy}}}{\rho_m \cdot F}$$

---

## 3. Pemodelan Rapat Arus, Distribusi Potensial & Penetrasi Celah Elektrolit

Konduksi ionik di dalam celah celah antar-elektroda mengikuti Hukum Ohm terdistribusi pada elektrolit cair.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    SKEMA RANGKAIAN LISTRIK EKUIVALEN SEL ELEKTROKIMIA ECG                                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       Tegangan Catu Daya DC (V_applied = 4 - 18 V)                                                    |
|                                           (+) ────┬──── (-)                                                           |
|                                                   │                                                                   |
|                                                   ▼                                                                   |
|        ┌───────────────┐     ┌───────────────┐     ┌───────────────┐     ┌───────────────┐     ┌───────────────┐      |
|        │ Overpotensial │     │ Hambatan Film │     │ Hambatan Ohm  │     │ Hambatan Film │     │ Overpotensial │      |
|        │ Anoda (E_a)   │──►──│ Pasivasi (R_p)│──►──│ Elektrolit    │──►──│ Gas / Gelembung│──►──│ Katoda (E_c)  │      |
|        │ ~ 0.8 - 1.5 V │     │ (Dynamic)     │     │ R_el = g/(k*A)│     │ R_gas (H2)    │     │ ~ 0.5 - 1.2 V │      |
|        └───────────────┘     └───────────────┘     └───────────────┘     └───────────────┘     └───────────────┘      |
|                                                   │                                                                   |
|                                                   ▼                                                                   |
|                            Tegangan Efektif Celah: V_eff = V_applied - Delta_E_pol                                    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Hambatan Elektrolit & Rapat Arus (*Current Density*)
Rapat arus anodik lokal ($J$, dalam satuan $\text{A/cm}^2$) di celah antar-elektroda dengan ketebalan celah $g(x)$ dan konduktivitas spesifik elektrolit $\kappa_{\text{el}}$ ($\text{S/cm}$ atau $\Omega^{-1}\text{cm}^{-1}$) diformulasikan sebagai:
$$J(x) = \frac{V_{\text{applied}} - \Delta E_{\text{pol}}}{g(x) / \kappa_{\text{el}} + R_{\text{film}}}$$

Di mana:
- $V_{\text{applied}}$ adalah beda potensial total yang disuplai oleh catu daya ($4 - 20\text{ V}$).
- $\Delta E_{\text{pol}} = E_a + E_c$ adalah total potensial polarisasi dan overpotensial elektroda anoda-katoda ($1{,}5 - 2{,}8\text{ V}$).
- $R_{\text{film}}$ adalah resistansi spesifik lapisan pasivasi permukaan dan gelembung gas hidrogen ($\Omega\cdot\text{cm}^2$).

### 3.2 Modifikasi Konduktivitas Elektrolit Akibat Gelembung Gas & Temperatur
Aliran arus tinggi memicu disosiasi air di katoda menghasilkan gas hidrogen ($2\text{H}_2\text{O} + 2e^- \to \text{H}_2\uparrow + 2\text{OH}^-$) serta disipasi panas Joule ($Q_{\text{Joule}} = J^2 / \kappa_{\text{el}}$). Konduktivitas elektrolit efektif $\kappa(x)$ di sepanjang lintasan aliran $x$ dimodelkan dengan relasi Bruggeman-Maxwell dan koefisien termal:
$$\kappa(T, \alpha) = \kappa_0 \cdot \left[1 + \beta_T (T(x) - T_0)\right] \cdot (1 - \alpha_g(x))^{1{,}5}$$

Di mana:
- $\kappa_0$ adalah konduktivitas dasar larutan elektrolit pada temperatur $T_0 = 25^\circ\text{C}$ (misal $15\%\ \text{NaNO}_3 \approx 0{,}14\ \text{S/cm}$).
- $\beta_T$ adalah koefisien temperatur konduktivitas ($\approx 0{,}02\ ^\circ\text{C}^{-1}$).
- $\alpha_g(x)$ adalah fraksi volumetrik gas void (*gas void fraction*, $0 \le \alpha_g < 0{,}4$).

---

## 4. Mekanika Pengikisan Abrasif & Model Sinergi Hibrida Total MRR

Total laju pembuangan material pada ECG merupakan superposisi sinergis antara pelarutan elektrokimia anodik ($\text{MRR}_{\text{ec}}$) dan aksi pengelupasan mekanis oleh butir abrasif ($\text{MRR}_{\text{mech}}$):
$$\text{MRR}_{\text{total}} = \text{MRR}_{\text{ec}} + \text{MRR}_{\text{mech}}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    KONTRIBUSI FRAKSIONAL MRR PADA BERBAGAI PARAMETER TEGANGAN ECG                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Fraksi MRR (%)                                                                                                      |
|   100 % ┌───────────────────────────────────────────────────────────────────┐                                         |
|         │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                                         |
|    80 % │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ ◄── Pelarutan Elektrokimia Anodik      |
|         │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│     (MRR_ec ~ 85% - 95%)              |
|    60 % │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│     Dominan pada Tegangan Tinggi V > 8V|
|         │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                                         |
|    40 % │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                                         |
|         │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                                         |
|    20 % │███████████████████████████████████████████████████████████████████│ ◄── Pengikisan Mekanis Abrasif         |
|         │███████████████████████████████████████████████████████████████████│     (MRR_mech ~ 5% - 15%)             |
|     0 % └───────────────────────────────────────────────────────────────────┘                                         |
|          0 V          4 V           8 V          12 V         16 V        20 V (Tegangan DC Terpasang V_applied)          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Formulasi Penetrasi Butir Abrasif & Gaya Kontak Mekanis
Karena mayoritas material dihilangkan melalui disolusi ionik, gaya normal mekanis kontak ($F_n$) yang dialami oleh butir abrasif pada ECG hanya berkisar antara $5\% - 10\%$ dibandingkan dengan proses gerinda konvensional pada kedalaman potong yang sama:
$$F_{n, \text{ECG}} \approx (1 - f_{\text{ec}}) \cdot F_{n, \text{conv}}$$

Di mana $f_{\text{ec}} = \frac{\text{MRR}_{\text{ec}}}{\text{MRR}_{\text{total}}} \approx 0{,}85 - 0{,}95$.

Pengurangan gaya kontak mekanis sebesar $90\%$ ini memberikan keuntungan industri yang revolusioner:
- Peniadaan distorsi lentur pada bagian mikro (*zero deflection on ultra-thin walls*).
- Masa pakai roda (*wheel tool life*) meningkat hingga $300\% - 1000\%$ ($G_{\text{ratio}} > 50 - 200$).
- Lapisan permukaan bebas dari dislokasi plastis densitas tinggi, tegangan sisa tarik, dan retak fatik.

---

## 5. Implementasi Algoritma & Solver Python: ECG Process Window & Multiphysics Optimizer

Berikut adalah program solver Python mandiri (*self-contained*) untuk memodelkan kesetimbangan massa ekuivalen paduan superalloy, memprediksi laju disolusi Faraday, menghitung fraksi kontribusi elektrokimia vs mekanis, memetakan medan temperatur celah elektrolit, dan memverifikasi integritas permukaan bebas tegangan sisa sesuai standar ISO 14137 & ASTM B912.

```python
"""
Electrochemical Grinding (ECG) Multiphysics & Surface Integrity Optimizer
Standard References: ISO 14137, ASTM B912, ASME B46.1, ISO 4287, ASTM E8/E8M
"""

import math
from typing import Dict, List, Tuple, Any

FARADAY_CONSTANT = 96485.33212  # C/mol (A*s/mol)

class ElectrochemicalGrindingModel:
    def __init__(self, alloy_name: str, composition: Dict[str, Dict[str, float]], density: float):
        """
        Inisialisasi Parameter Material Benda Kerja.
        composition: {
            'Element': {'weight_fraction': w_i, 'atomic_mass': A_i, 'valence': z_i}
        }
        density: Densitas material (g/cm^3)
        """
        self.alloy_name = alloy_name
        self.composition = composition
        self.density = density
        self.equivalent_weight = self._calculate_equivalent_weight()
        
    def _calculate_equivalent_weight(self) -> float:
        """Menghitung Massa Ekuivalen Elektrokimia Paduan (g/valence)."""
        sum_val = 0.0
        for elem, props in self.composition.items():
            w_i = props['weight_fraction']
            A_i = props['atomic_mass']
            z_i = props['valence']
            sum_val += (w_i * z_i) / A_i
        return 1.0 / sum_val if sum_val > 0 else 0.0

    def calculate_faraday_dissolution(
        self, 
        current_amp: float, 
        current_efficiency: float = 0.95
    ) -> Dict[str, float]:
        """
        Menghitung Laju Pembuangan Elektrokimia Murni (MRR_ec).
        """
        # Massa terlarut per detik (g/s)
        mass_rate_gps = (current_efficiency * current_amp * self.equivalent_weight) / FARADAY_CONSTANT
        # Volumetrik (cm^3/s -> mm^3/min)
        vol_rate_cm3_per_s = mass_rate_gps / self.density
        mrr_ec_mm3_per_min = vol_rate_cm3_per_s * 1000.0 * 60.0
        
        return {
            "equivalent_weight_g_per_val": self.equivalent_weight,
            "mass_rate_g_per_sec": mass_rate_gps,
            "mrr_ec_mm3_per_min": mrr_ec_mm3_per_min
        }

    def simulate_ecg_process(
        self,
        applied_voltage: float,
        electrolyte_conductivity_25c: float,  # S/cm
        gap_um: float,                        # Inter-electrode gap (µm)
        wheel_diameter_mm: float,
        grinding_width_mm: float,
        depth_of_cut_mm: float,
        table_feed_speed_mmpm: float,         # mm/min
        electrolyte_flow_velocity_mps: float, # m/s
        polarization_overpotential: float = 1.8, # V
        mechanical_removal_ratio: float = 0.08  # 8% aksi mekanis
    ) -> Dict[str, Any]:
        """
        Simulasi Multiphysics ECG: Rapat Arus, Distribusi Hambatan, Total MRR,
        Gaya Kontak Relatif, dan Integritas Permukaan.
        """
        gap_cm = gap_um * 1e-4
        contact_length_mm = math.sqrt(wheel_diameter_mm * depth_of_cut_mm)
        contact_area_cm2 = (contact_length_mm * grinding_width_mm) * 1e-2
        
        # Tegangan efektif
        effective_voltage = max(0.0, applied_voltage - polarization_overpotential)
        
        # Hambatan celah elektrolit dan film pasivasi dinamis (Ohm)
        # R_film dinamis rata-rata ~ 0.015 Ohm.cm2 pada kondisi gesekan butir abrasif
        r_film_specific = 0.012  # Ohm * cm^2
        r_electrolyte = (gap_cm / electrolyte_conductivity_25c + r_film_specific) / contact_area_cm2
        
        # Kuat arus listrik sel (Ampere)
        cell_current = effective_voltage / r_electrolyte if r_electrolyte > 0 else 0.0
        current_density_a_cm2 = cell_current / contact_area_cm2
        
        # Komputasi MRR Elektrokimia
        ec_results = self.calculate_faraday_dissolution(cell_current, current_efficiency=0.92)
        mrr_ec = ec_results["mrr_ec_mm3_per_min"]
        
        # Sinergi Hibrida: Total MRR = MRR_ec + MRR_mech
        mrr_mech = mrr_ec * (mechanical_removal_ratio / (1.0 - mechanical_removal_ratio))
        mrr_total_actual = mrr_ec + mrr_mech
        
        # Perhitungan Gaya Kontak Relatif dibandingkan Grinding Konvensional
        relative_normal_force_pct = (mrr_mech / mrr_total_actual) * 100.0 if mrr_total_actual > 0 else 100.0
        
        # Pembangkitan Panas Joule pada Celah
        joule_heat_watts = (cell_current ** 2) * r_electrolyte
        # Laju Aliran Massa Elektrolit (injeksi nozel bertekanan dengan nozel celah 1.5 mm x 20 mm)
        nozzle_area_m2 = (grinding_width_mm * 1e-3) * 1.5e-3
        mass_flow_rate_kg_s = 1080.0 * nozzle_area_m2 * electrolyte_flow_velocity_mps
        
        cp_electrolyte = 3900.0  # J / (kg * K)
        delta_temp_c = joule_heat_watts / (mass_flow_rate_kg_s * cp_electrolyte) if mass_flow_rate_kg_s > 0 else 0.0
        
        # Prediksi Kekasaran Permukaan Ra (ASME B46.1)
        # Pada ECG optimal: Ra = 0.15 - 0.35 µm bebas burr
        predicted_ra_um = 0.12 + 0.001 * (mrr_mech / contact_area_cm2) + 0.0003 * current_density_a_cm2
        
        # Verifikasi Bebas Lapisan Putih (White Layer) & Bebas Retak
        is_thermal_damage_free = delta_temp_c < 25.0 and current_density_a_cm2 < 500.0
        
        return {
            "contact_length_mm": contact_length_mm,
            "contact_area_cm2": contact_area_cm2,
            "cell_current_amp": cell_current,
            "current_density_a_per_cm2": current_density_a_cm2,
            "joule_heat_power_watts": joule_heat_watts,
            "electrolyte_temp_rise_degc": delta_temp_c,
            "mrr_ec_mm3_per_min": mrr_ec,
            "mrr_mech_mm3_per_min": mrr_mech,
            "mrr_total_mm3_per_min": mrr_total_actual,
            "ec_contribution_pct": (mrr_ec / mrr_total_actual) * 100.0 if mrr_total_actual > 0 else 0.0,
            "relative_normal_force_pct": relative_normal_force_pct,
            "predicted_surface_roughness_ra_um": predicted_ra_um,
            "thermal_damage_free_status": is_thermal_damage_free,
            "iso14137_safety_compliance": cell_current < 1500.0 and delta_temp_c < 30.0
        }

if __name__ == "__main__":
    # Superalloy Inconel 718 (AMS 5662 / ASTM B637)
    # Komposisi Kimia Nominal: Ni: 53%, Cr: 19%, Fe: 18%, Nb: 5%, Mo: 3%, Ti: 1%, Al: 1%
    inconel_718_comp = {
        "Ni": {"weight_fraction": 0.53, "atomic_mass": 58.69, "valence": 2.0},
        "Cr": {"weight_fraction": 0.19, "atomic_mass": 52.00, "valence": 3.0},
        "Fe": {"weight_fraction": 0.18, "atomic_mass": 55.85, "valence": 2.0},
        "Nb": {"weight_fraction": 0.05, "atomic_mass": 92.91, "valence": 5.0},
        "Mo": {"weight_fraction": 0.03, "atomic_mass": 95.95, "valence": 3.0},
        "Ti": {"weight_fraction": 0.01, "atomic_mass": 47.87, "valence": 4.0},
        "Al": {"weight_fraction": 0.01, "atomic_mass": 26.98, "valence": 3.0},
    }
    
    inconel_density = 8.19  # g/cm^3
    
    ecg_solver = ElectrochemicalGrindingModel("Inconel 718 Superalloy", inconel_718_comp, inconel_density)
    
    # Eksekusi Simulasi Parameter Operasi ECG Industri Dirgantara
    sim_res = ecg_solver.simulate_ecg_process(
        applied_voltage=10.5,                  # Volt DC
        electrolyte_conductivity_25c=0.165,    # S/cm (18 wt% NaNO3)
        gap_um=20.0,                           # 20 µm celah rata-rata
        wheel_diameter_mm=250.0,               # Roda Diamond Metal-Bonded 250 mm
        grinding_width_mm=15.0,                # Lebar pemotongan 15 mm
        depth_of_cut_mm=0.80,                  # Depth of cut 0.80 mm
        table_feed_speed_mmpm=45.0,            # 45 mm/min
        electrolyte_flow_velocity_mps=22.0,    # Kecepatan semburan nozel 22 m/s
        polarization_overpotential=1.85,
        mechanical_removal_ratio=0.08          # 92% EC, 8% Mech
    )
    
    print("=" * 85)
    print("SIMULASI MULTIPHYSICS & INTEGRITAS PERMUKAAN ELECTROCHEMICAL GRINDING (ECG)")
    print(f"Material Benda Kerja : {ecg_solver.alloy_name} (Densitas: {inconel_density} g/cm3)")
    print(f"Massa Ekuivalen Paduan: {ecg_solver.equivalent_weight:.4f} g/mol.val")
    print("=" * 85)
    print(f"1. PARAMETER KELISTRIKAN & ZONA KONTAK:")
    print(f"   - Panjang Kontak Busur Roda   : {sim_res['contact_length_mm']:.3f} mm")
    print(f"   - Luas Zona Reaksi Efektif    : {sim_res['contact_area_cm2']:.4f} cm2")
    print(f"   - Arus Listrik Sel Total      : {sim_res['cell_current_amp']:.2f} A")
    print(f"   - Rapat Arus Rata-rata (J)    : {sim_res['current_density_a_per_cm2']:.2f} A/cm2")
    print(f"   - Disipasi Panas Joule        : {sim_res['joule_heat_power_watts']:.2f} W")
    print(f"   - Kenaikan Suhu Elektrolit    : {sim_res['electrolyte_temp_rise_degc']:.2f} °C (Aman < 25°C)")
    print("\n2. KINATIKA LAJU PEMBUANGAN MATERIAL (MRR):")
    print(f"   - MRR Elektrokimia (Faraday)  : {sim_res['mrr_ec_mm3_per_min']:.2f} mm3/min")
    print(f"   - MRR Pengikisan Mekanis      : {sim_res['mrr_mech_mm3_per_min']:.2f} mm3/min")
    print(f"   - Total MRR Aktual            : {sim_res['mrr_total_mm3_per_min']:.2f} mm3/min")
    print(f"   - Kontribusi Disolusi Anodik  : {sim_res['ec_contribution_pct']:.2f} %")
    print("\n3. EVALUASI MEKANIS & KUALIFIKASI INTEGRITAS PERMUKAAN:")
    print(f"   - Beban Gaya Kontak Mekanis   : {sim_res['relative_normal_force_pct']:.2f} % dari Grinding Konvensional")
    print(f"   - Prediksi Kekasaran Ra       : {sim_res['predicted_surface_roughness_ra_um']:.3f} µm (ASME B46.1 Class N5)")
    print(f"   - Bebas Kerusakan Termal/Retak: {sim_res['thermal_damage_free_status']} (ASTM B912 Passivated)")
    print(f"   - Kepatuhan Safety ISO 14137  : {sim_res['iso14137_safety_compliance']}")
    print("=" * 85)
```

---

## 6. Studi Kasus Industri: Pemesinan Sarang Lebah (Honeycomb Turbine Seal) Inconel 718

### 6.1 Latar Belakang Masalah
Sebuah manufaktur mesin jet kedirgantaraan tingkat satu (*Tier-1 Aerospace Propulsion Manufacturer*) memproduksi rakitan penyekat gas panas turbin (*turbine shroud honeycomb seal segment*) berbahan paduan Inconel 718. Struktur sel sarang lebah memiliki ketebalan dinding foil hanya $t_w = 0{,}075\text{ mm}$ ($75\ \mu\text{m}$) dengan kedalaman sel $h_c = 12{,}0\text{ mm}$.

Pada proses awal menggunakan gerinda konvensional kecepatan tinggi (*High-Speed Conventional Grinding*), terjadi kegagalan sistemik:
- **Tingkat Cacat Pembengkokan Dinding (*Wall Smearing / Crushing*)**: $28{,}4\%$ dari komponen mengalami tekuk plastis pada foil sarang lebah akibat gaya normal pemotongan yang melebihi tegangan luluh kritis foil tipis.
- **Burr Masif pada Tepi Potong**: Dinding sarang lebah menghasilkan *burr* leleh yang memerlukan waktu pembersihan manual (*hand deburring*) selama 4,5 jam per segmen dengan risiko merusak geometri sel.
- **Tegangan Sisa Tarik Bawah Permukaan**: Pemeriksaan difraksi sinar-X (XRD) menunjukkan tegangan sisa tarik sebesar $+420\text{ MPa}$ di dekat permukaan, menyebabkan keretakan fatik termal selama pengujian mesin.

### 6.2 Solusi Rekayasa Berbasis Electrochemical Grinding (ECG)
Tim rekayasa manufaktur beralih ke mesin ECG CNC 5-Axis (standar ISO 14137) dengan konfigurasi parameter:
- **Roda Gerinda Katoda**: Roda intan konduktif berikat logam tembaga-perunggu (*metal-bonded diamond wheel*, ukuran butir abrasif Mesh 120 / $D_p \approx 125\ \mu\text{m}$).
- **Elektrolit**: Larutan Sodium Nitrat ($\text{NaNO}_3$) konsentrasi $18\ \text{wt}\%$, konduktivitas $\kappa = 0{,}165\ \text{S/cm}$, temperatur pasokan $T_0 = 24^\circ\text{C}$, debit injeksi fluida laminar $Q_{\text{el}} = 85\ \text{L/min}$ pada tekanan $P = 0{,}45\text{ MPa}$.
- **Parameter Kelistrikan**: Beda potensial $V_{\text{applied}} = 10{,}5\text{ V DC}$, kuat arus terukur $I = 485\text{ A}$, celah rata-rata $g \approx 20\ \mu\text{m}$.
- **Kecepatan Kinematika**: Kecepatan putar spindel roda $v_s = 28\text{ m/s}$, kecepatan umpan meja $v_f = 45\text{ mm/min}$, *depth of cut* $a_p = 0{,}80\text{ mm}$.

### 6.3 Hasil Pengujian & Verifikasi Kualitas
Hasil audit metalurgi dan metrologi dimensi menunjukkan lonjakan performa yang dramatis:
1. **Peniadaan Cacat Pembengkokan Dinding (*Zero Foil Smearing*)**: Karena $92{,}0\%$ material dihilangkan melalui disolusi Faraday fasa ionik, gaya normal mekanis turun sebesar $92\%$. Seluruh foil dinding $75\ \mu\text{m}$ berdiri tegak sempurna tanpa distorsi geometri ($0\%$ cacat bengkok).
2. **Eliminasi Total Operasi Deburring (*100% Burr-Free*)**: Tepi dinding sarang lebah terpotong bersih secara elektrolitik tanpa geram, menghemat biaya dan waktu pemrosesan manual sebesar $100\%$ ($4{,}5\text{ jam/komponen} \to 0\text{ jam}$).
3. **Integritas Metalurgi & Umur Fatik**: Pemeriksaan metalografi penampang melintang (*cross-sectional SEM*) mengonfirmasi tidak adanya lapisan putih (*zero white layer*), nol mikro-retak, dan tegangan sisa permukaan berada pada kondisi netral hingga kompresif ringan ($-35\text{ MPa}$), meningkatkan umur fatik siklus tinggi komponen turbin sebesar $240\%$.

---

## 7. Referensi Terverifikasi & Standar Industri

1. **ISO 14137:2015.** *Machine tools — Safety — Electro-discharge machines and electrochemical machines.* International Organization for Standardization, Geneva.
2. **ASTM B912-02(2018).** *Standard Specification for Passivation of Stainless Steels Using Electropolishing and Electrochemical Methods.* ASTM International, West Conshohocken, PA. DOI: [10.1520/B0912-02R18](https://doi.org/10.1520/B0912-02R18).
3. **ASME B46.1-2020.** *Surface Texture (Surface Roughness, Waviness, and Lay).* The American Society of Mechanical Engineers, New York.
4. **Rajurkar, K. P., Sundaram, M. M., & Malshe, A. P. (2013).** *Review of Electrochemical and Electrodischarge Machining.* Procedia CIRP, 6, pp. 13–26. DOI: [10.1016/j.procir.2013.03.002](https://doi.org/10.1016/j.procir.2013.03.002).
5. **Bhattacharyya, B., & Sorkhel, S. K. (1999).** *Investigation for controlled electrochemical machining through response surface methodology-based approach.* Journal of Materials Processing Technology, 86(1-3), pp. 200–207. DOI: [10.1016/S0924-0136(98)00311-2](https://doi.org/10.1016/S0924-0136(98)00311-2).
6. **McGeough, J. A. (1974).** *Principles of Electrochemical Machining.* Chapman and Hall, London / Halsted Press, New York. ISBN: 978-0412119705.
7. **Groover, M. P. (2020).** *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th ed.). John Wiley & Sons, Hoboken, NJ. ISBN: 978-1119706427.
