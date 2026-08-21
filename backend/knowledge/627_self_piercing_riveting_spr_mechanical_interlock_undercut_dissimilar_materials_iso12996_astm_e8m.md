# Modul 627: Self-Piercing Riveting (SPR) untuk Penyambungan Material Heterogen Otomotif: Mekanika Interlock Geometris, Pembentukan Undercut, Analisis Beban Geser-Tarik (Lap-Shear/Cross-Tension), dan Integritas Struktural Multi-Material (ISO 12996, ASTM E8/E8M, DIN EN ISO 14272 & AWS D8.1M)

## 1. Pengantar & Konteks Industri: Revolusi Penyambungan Multi-Material Otomotif

Dalam era manufaktur otomotif modern (*automotive lightweighting*) dan kendaraan listrik (*Electric Vehicles* / EV), pengurangan bobot struktur kendaraan (*Body-in-White* / BIW) menjadi pendorong utama efisiensi konsumsi energi dan peningkatan jarak tempuh baterai. Transisi industri dari struktur monolitik baja tradisional menuju arsitektur multi-material (*multi-material lightweight design*) mengintegrasikan paduan aluminium berkekuatan tinggi (seri 5xxx, 6xxx, 7xxx), baja berkekuatan sangat tinggi (*Advanced High-Strength Steel* / AHSS, *Dual Phase* DP600-DP1000, *Press Hardened Steel* 22MnB5), paduan magnesium, hingga komposit polimer berpenguat serat karbon (*Carbon Fiber Reinforced Polymers* / CFRP).

Tantangan metalurgi terbesar dalam menyambung kombinasi lembaran heterogen (misalnya paduan aluminium $6061\text{-T6}$ dengan lembaran baja berkekuatan tinggi $DP780$) adalah ketidakmampuan metode pengelasan fusi konvensional (*Resistance Spot Welding* / RSW) untuk menghasilkan sambungan yang andal:
1. **Perbedaan Titik Leleh & Konduktivitas Termal yang Ekstrem**: Titik leleh aluminium ($\sim 660^\circ\text{C}$) jauh lebih rendah dibandingkan baja ($\sim 1538^\circ\text{C}$), disertai konduktivitas termal dan kelistrikan aluminium yang 3-4 kali lebih tinggi, menyulitkan konsentrasi energi panas resistif pada antarmuka.
2. **Pembentukan Fasa Intermetalik Rapuh**: Pada fusi Al-Fe, terbentuk lapisan intermetalik getas (*brittle intermetallic compound* / IMC) seperti $\text{Fe}_2\text{Al}_5$ dan $\text{Fe}\text{Al}_3$ dengan ketebalan melebihi batas kritis $> 10\,\mu\text{m}$, yang memicu kerapuhan sambungan dan degradasi dini di bawah beban dinamis/fatik.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                      PERBANDINGAN METODE PENYAMBUNGAN LEMBARAN MULTI-MATERIAL OTOMOTIF (Al-Steel)                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   METODE PENYAMBUNGAN               MEKANISME UTAMA          KENDALA MATERIAL HETEROGEN         KEBUTUHAN LUBANG AWAL |
|   ┌───────────────────────────────┐ ┌──────────────────────┐ ┌────────────────────────────────┐ ┌────────────────────┐|
|   │ Resistance Spot Welding (RSW) │ │ Fusi Termal Resistif │ │ Lapisan Intermetalik Rapuh IMC │ │ Tidak Perlu        │|
|   ├───────────────────────────────┤ ├──────────────────────┤ ├────────────────────────────────┤ ├────────────────────┤|
|   │ Bolting / Blind Riveting      │ │ Penguncian Mekanis   │ │ Perlu Lubang Punch/Drill Awal  │ │ WAJIB Pre-Hole     │|
|   ├───────────────────────────────┤ ├──────────────────────┤ ├────────────────────────────────┤ ├────────────────────┤|
|   │ Adhesive Bonding              │ │ Adhesi Kimia Polimer │ │ Sensitif Terhadap Suhu & Degr. │ │ Tidak Perlu        │|
|   ├───────────────────────────────┤ ├──────────────────────┤ ├────────────────────────────────┤ ├────────────────────┤|
|   │ Self-Piercing Riveting (SPR)  │ │ Interlock Deformasi  │ │ Bebas Cacat Termal & Tanpa IMC │ │ TANPA Lubang Awal  │|
|   └───────────────────────────────┘ └──────────────────────┘ └────────────────────────────────┘ └────────────────────┘|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Self-Piercing Riveting (SPR)** hadir sebagai teknologi penyambungan dingin keadaan padat (*cold mechanical fastening*) paling dominan dalam industri otomotif kelas premium (Audi ASF, BMW, Ford F-150, Tesla Model S/X/3). SPR menggunakan paku keling semi-tubular berkekuatan tinggi (*high-strength semi-tubular rivet*, kekerasan $450 - 550\text{ HV}$) yang didorong menembus lembaran atas (*top sheet*) dan mengembang secara plastis di dalam lembaran bawah (*bottom sheet*) tanpa melubangi tembus lapisan bawah, menghasilkan kuncian mekanis (*mechanical interlock*) yang kuat, kedap air/gas, dan memiliki ketahanan lelah (*fatigue resistance*) yang jauh melampaui titik las resistansi konvensional.

Standar internasional yang mengatur karakterisasi dan kualifikasi sambungan SPR meliputi:
- **ISO 12996**: *Mechanical joining — Destructive testing of joints — Specimen dimensions and test procedure for tensile shear testing of single mechanical joints*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **DIN EN ISO 14272**: *Resistance welding and mechanical joining — Destructive testing of welds — Specimen dimensions and procedure for cross tension testing of resistance spot and embossed projection welds / mechanical joints*.
- **AWS D8.1M**: *Specification for Automotive Weld Quality and Mechanical Fastening — Resistance Spot Welding and Mechanical Joining*.
- **ISO 18592**: *Resistance welding and mechanical joining — Destructive testing of welds — Method for fatigue testing of multi-spot-welded and mechanically fastened specimens*.

---

## 2. Kinematika Proses 4-Tahap Self-Piercing Riveting

Proses SPR berlangsung secara kontinu dalam waktu sangat singkat ($t = 0{,}8 - 2{,}0\text{ detik}$) di dalam satu siklus stroke aktuator servo-listrik atau hidrolik melalui interaksi antara *punch*, *blank holder* (penjepit), paku keling semi-tubular, lembaran kerja, dan *die* berkontur khusus (*cavity die*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    EMPAT TAHAPAN KINEMATIKA SIKLUS PROSES SPR                                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  TAHAP 1: CLAMPING & POSITIONING      TAHAP 2: PIERCING TOP SHEET      TAHAP 3: FLAIRING & EXPANSION  TAHAP 4: COINING|
|                                                                                                                       |
|         Punch          Punch                 Punch                          Punch                         Punch       |
|          ↓↓↓            ↓↓↓                   ↓↓↓                            ↓↓↓                           ↓↓↓        |
|     ┌───────────┐  ┌───────────┐         ┌───────────┐                  ┌───────────┐                 ┌───────────┐   |
|     │           │  │  [Rivet]  │         │  [Rivet]  │                  │  [Rivet]  │                 │  [Rivet]  │   |
|  ┌──┴──┐     ┌──┴──┐           │      ┌──┴──┐     ┌──┴──┐            ┌──┴──┐     ┌──┴──┐           ┌──┴──┐     ┌──┴──┐|
|  │Hold │     │Hold │           │      │Hold │     │Hold │            │Hold │     │Hold │           │Hold │     │Hold │|
|  └──┬──┘     └──┬──┘           │      └──┬──┘     └──┬──┘            └──┬──┘     └──┬──┘           └──┬──┘     └──┬──┘|
|  ═══╪═══════════╪══════════════╪══════╪══╪═══════════╪══════════════╪══╪═══════════╪═════════════╪══╪═══════════╪═══|
|  ───┴───────────┴──────────────┴──────┴──┴───────────┴──────────────┴──┴───────────┴─────────────┴──┴───────────┴───|
|     [ Lembaran Atas / Top Sheet ]        (Rivet menusuk Lembaran Atas)  (Kaki Rivet Mengembang)     (Flush Surface)   |
|  ─────────────────────────────────────   ─────────────────────────────  ─────────────────────────   ───────────────── |
|     [ Lembaran Bawah / Bottom Sheet ]    (Deformasi Menuju Die)         (Interlock Geometris)       (Undercut Terkunci|
|  ───┬───────────┬──────────────┬──────┬──┬───────────┬──────────────┬──┬───────────┬─────────────┬──┬───────────┬───|
|     │   Die     │ Rongga Pip   │      │   Die     │ Rongga Pip   │  │   Die     │ Rongga Pip  │  │   Die     │ Pip │|
|     └───────────┘              │      └───────────┘              │  └───────────┘             │  └───────────┘     │|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Tahap 1: Penjepitan (*Clamping / Sheet Pre-loading*)
*Blank holder* bergerak turun terlebih dahulu dengan gaya jepit konstan ($F_{\text{clamp}} = 2 - 10\text{ kN}$). Tujuannya adalah merapatkan lembaran atas dan bawah untuk menghilangkan celah udara (*gap clearance*), mencegah kerutan pelat (*sheet wrinkling*), dan memusatkan sumbu penetrasi paku keling.

### 2.2 Tahap 2: Penetrasi Lembaran Atas (*Piercing / Shearing*)
*Punch* mendorong paku keling semi-tubular ke bawah. Kaki runcing paku keling (*rivet shank tip*) bertindak sebagai *punch cutting tool*, memotong lembaran atas melalui kombinasi geser murni dan deformasi plastis lokal. Material lembaran atas yang terpotong (*slug/plug*) terdorong masuk ke dalam rongga dalam kaki paku (*rivet bore cavity*).

### 2.3 Tahap 3: Pembentukan Flare & Penguncian Radial (*Flaring & Interlocking*)
Ketika kaki paku menyentuh lembaran bawah, kontur rongga *die* dan tonjolan pusat *die* (*die pip / anvil nipple*) memaksa kaki paku keling mengalami deformasi tekuk radial ke arah luar (*radial flaring*). Kaki paku yang mengembang menancap ke dalam massa lembaran bawah tanpa menembus permukaan luar lembaran bawah, menciptakan kaitan geometris (*mechanical undercut*).

### 2.4 Tahap 4: Penempaan Akhir (*Coining / Setting & Unloading*)
Pada akhir langkah *stroke*, kepala paku keling ditekan rata (*flush*) atau sedikit tenggelam relatif terhadap permukaan lembaran atas dengan gaya puncak (*peak setting force* $F_{\text{set}} = 30 - 90\text{ kN}$). Hal ini menghasilkan tegangan sisa tekan (*residual compressive stress*) yang menguntungkan integritas fatik sambungan.

---

## 3. Parameter Geometris Kunci & Kriteria Kualitas Sambungan SPR

Kualitas fisik sambungan SPR dievaluasi melalui pengukuran metalografi potongan melintang (*cross-sectional macro-etched micrograph*) dengan parameter kritis:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI POTONGAN MELINTANG SAMBUNGAN SPR                                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       ◄────────────────── Diameter Kepala D_head ──────────────────►                                  |
|                      ┌──────────────────────────────────────────────────────────────┐  ▲                              |
|                      │                     KEPALA RIVET (FLUSH)                     │  │ Tinggi Kepala h_head         |
|                      └───┬──────────────────────────────────────────────────────┬───┘  ▼                              |
|                          │                                                      │                                     |
|     LEMBARAN ATAS        │              Rongga Dalam (Bore)                     │        LEMBARAN ATAS                |
|     (Top Sheet t_1)      │                                                      │        (Top Sheet t_1)              |
|   ═══════════════════════╪════════════                                  ════════╪═════════════════════════════════    |
|   ───────────────────────┘        ▲                                ▲    └─────────────────────────────────────────    |
|                                   │                                │                                                  |
|     LEMBARAN BAWAH                │ Kaki Rivet Mengembang (Flare)  │                     LEMBARAN BAWAH               |
|     (Bottom Sheet t_2)       ◄────┴──►                        ◄────┴──►                  (Bottom Sheet t_2)           |
|                          Undercut (u_L)                   Undercut (u_R)                                              |
|   ───────────────────────┐                                              ┌─────────────────────────────────────────    |
|   ═══════════════════════╧══════════════════════════════════════════════╧═════════════════════════════════════════    |
|                          │◄─────────── Sisa Tebal Bawah (t_b) ─────────►│                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Parameter utama evaluasi kualitas meliputi:
1. **Nilai Interlock / Undercut ($u$)**: Jarak proyeksi radial horizontal antara ujung terluar kaki paku keling (*rivet shank tip*) dengan titik terluar batas potongan lembaran atas:
   $$u = \frac{u_L + u_R}{2}$$
   Kriteria minimum otomotif mensyaratkan $u \ge 0{,}20\text{ mm}$ (ideal $u = 0{,}30 - 0{,}60\text{ mm}$) untuk menjamin ketahanan terhadap beban cabut (*pull-out resistance*).
2. **Ketebalan Dasar Lembaran Bawah (*Bottom Remaining Thickness*, $t_b$)**: Ketebalan sisa lembaran bawah di bawah dasar paku keling:
   $$t_b \ge 0{,}20\text{ mm} \quad \text{atau} \quad t_b \ge 0{,}15 \times t_2$$
   Jika $t_b$ terlalu tipis ($t_b < 0{,}15\text{ mm}$), terjadi risiko retak tembus (*cracking/piercing through*), korosi galvanik, dan kebocoran fluida.
3. **Ketebalan Kaki Rivet Minimum (*Minimum Shank/Flange Thickness*, $t_s$)**: Mengukur derajat penipisan paku akibat deformasi plastis; mencegah keruntuhan geser kaki paku (*rivet shear failure*).
4. **Tinggi Kepala Rivet (*Rivet Head Height*, $h_{\text{head}}$)**: Pengukuran kerataan kepala paku terhadap pelat atas, toleransi standar $-0{,}1\text{ mm} \le h_{\text{head}} \le +0{,}2\text{ mm}$.

---

## 4. Teori Mekanika & Pemodelan Kekuatan Beban Sambungan SPR

### 4.1 Gaya Pembentukan SPR (*Peak Setting Force Model*)
Gaya penetrasi dan pembentukan paku keling ($F_{\text{peak}}$) merupakan fungsi dari tegangan alir plastis lembaran ($k_1, k_2$), material paku keling, dan koefisien gesekan antarmuka ($\mu$):

$$F_{\text{peak}} \approx \pi \cdot D_r \cdot t_1 \cdot \frac{2}{\sqrt{3}}\sigma_{y,1} + \pi \cdot \left(\frac{D_r^2 - d_i^2}{4}\right) \cdot \left[ \sigma_{y,\text{rivet}} \left(1 + \frac{\mu D_r}{2 h_{\text{die}}}\right) \right] + C_{\text{flow}} \cdot \sigma_{y,2} \cdot A_{\text{proj}}$$

Di mana:
- $D_r, d_i$: Diameter luar dan diameter dalam shank paku keling ($\text{mm}$).
- $t_1, t_2$: Ketebalan lembaran atas dan bawah ($\text{mm}$).
- $\sigma_{y,1}, \sigma_{y,2}$: Tegangan luluh lembaran atas dan bawah ($\text{MPa}$).
- $\sigma_{y,\text{rivet}}$: Tegangan luluh material paku baja keras ($\text{MPa}$).
- $C_{\text{flow}}$: Faktor hambatan aliran kontur die ($C_{\text{flow}} \approx 1{,}8 - 2{,}5$).

### 4.2 Mode Kegagalan Sambungan SPR di Bawah Beban Kuasistatik
Berdasarkan uji destruktif ISO 12996 dan DIN EN ISO 14272, sambungan SPR mengalami tiga mode kegagalan utama:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                     TIGA MODE KEGAGALAN UTAMA SAMBUNGAN SPR                                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  MODE 1: RIVET PULL-OUT                MODE 2: RIVET SHEAR FRACTURE            MODE 3: SHEET BEARING / TEAR-OUT       |
|                                                                                                                       |
|         Gaya Tarik F_y                         Gaya Geser F_x                          Gaya Geser F_x                 |
|               ▲▲▲                                   ►►►►                                    ►►►►                      |
|        ┌──────────────┐                       ┌──────────────┐                        ┌──────────────┐                |
|        │    Rivet     │                       │    Rivet     │ (Patah Geser Kaki)     │    Rivet     │                |
|        └───┬──────┬───┘                       └───┬──────────┘                        └───┬──────┬───┘                |
|  ══════════╪══════╪════════════         ══════════╪═══════════════════          ══════════╪══════╪════════════        |
|  ──────────┘      └────────────         ──────────┘                             ──────────┘      └────────────        |
|    (Kaki Rivet Tercabut Lepas)                     (Garis Patah Geser)             (Lembaran Bawah Robek Bearing)     |
|  ──────────────────────────────         ──────────────────────────────          ───────░░░░░░░░░░░────────────        |
|                                                                                                                       |
|  Dominan pada: Beban Cross-Tension      Dominan pada: Lembaran Baja Kuat        Dominan pada: Lembaran Al Tipis /     |
|  dan Undercut Kecil (u < 0.25 mm)       Tinggi (AHSS) & Rivet Lunak             Daktilitas Rendah                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

#### A. Kapasitas Beban Geser Lap-Shear Peak ($F_{\text{shear}}$)
Beban geser maksimum sambungan ($F_{\text{shear}}$) diestimasi melalui formula semi-empiris gabungan kapasitas dukung bantalan lembaran (*bearing capacity*) dan ketahanan cabut paku:

$$F_{\text{shear}} = \min \left( F_{\text{bearing}}, F_{\text{rivet\_shear}}, F_{\text{interlock\_shear}} \right)$$

1. **Beban Kegagalan Bearing Lembaran ($F_{\text{bearing}}$)**:
   $$F_{\text{bearing}} = k_b \cdot D_{\text{outer}} \cdot t_1 \cdot \sigma_{\text{UTS}, 1}$$
   di mana $k_b \approx 2{,}0 - 2{,}4$ adalah faktor konsentrasi tegangan bearing lokal.

2. **Beban Patah Geser Rivet ($F_{\text{rivet\_shear}}$)**:
   $$F_{\text{rivet\_shear}} = \tau_{\text{ult, rivet}} \cdot \frac{\pi}{4}\left(D_{\text{outer}}^2 - D_{\text{inner}}^2\right) \approx \frac{\sigma_{\text{UTS, rivet}}}{\sqrt{3}} \cdot A_{\text{shank}}$$

3. **Beban Interlock Shear ($F_{\text{interlock\_shear}}$)**:
   $$F_{\text{interlock\_shear}} = \pi \cdot D_{\text{flare}} \cdot u \cdot \tau_{\text{flow}, 2}$$

#### B. Kapasitas Beban Tarik Salib / Cross-Tension Peak ($F_{\text{tension}}$)
Pada pembebanan tarik murni tegak lurus sumbu sambungan (*cross-tension test* DIN EN ISO 14272), ketahanan sambungan ditentukan oleh volume kuncian interlock $u$ dan momen lentur kaki paku:

$$F_{\text{tension}} \approx \pi \cdot D_{\text{flare}} \cdot u \cdot \sigma_{y, 2} \cdot \left[ 1 + \sqrt{\frac{t_b}{t_2}} \right]$$

Rasio daktilitas sambungan (*ductility ratio*) dinyatakan sebagai:
$$\xi_{\text{ductility}} = \frac{F_{\text{tension}}}{F_{\text{shear}}}$$
Pada sambungan SPR industri otomotif standar, rasio $\xi_{\text{ductility}}$ berada pada rentang $0{,}40 - 0{,}70$.

---

## 5. Implementasi Python Solver: Simulasi Kualitas Interlock SPR & Prediksi Beban Sambungan

Script Python berikut mengimplementasikan kalkulator mekanika SPR untuk menentukan parameter interlock ($u, t_b$), gaya pembebanan instalasi puncak, serta prediksi kekuatan sambungan geser (*lap-shear*) dan tarik (*cross-tension*) sesuai standar ISO 12996.

```python
"""
SPR_Joint_Analyzer.py
Kalkulator Desain & Integritas Sambungan Self-Piercing Riveting (SPR)
Standar Kepatuhan: ISO 12996, DIN EN ISO 14272, AWS D8.1M
RuangTI Engineering Toolkit - Advanced Manufacturing Division
"""

import math
from typing import Dict, Any, Tuple

class SPRJointEngine:
    def __init__(self,
                 top_sheet_material: str,
                 top_sheet_thickness: float,      # mm (t1)
                 top_sheet_uts: float,            # MPa (UTS1)
                 top_sheet_yield: float,          # MPa (YS1)
                 bottom_sheet_material: str,
                 bottom_sheet_thickness: float,   # mm (t2)
                 bottom_sheet_uts: float,         # MPa (UTS2)
                 bottom_sheet_yield: float,       # MPa (YS2)
                 rivet_diameter_outer: float,     # mm (Dr)
                 rivet_bore_diameter: float,      # mm (di)
                 rivet_length: float,             # mm (L_rivet)
                 rivet_hardness_hv: float,        # HV
                 die_diameter: float,             # mm (D_die)
                 die_depth: float,                # mm (h_die)
                 die_pip_height: float):          # mm (h_pip)
        
        self.mat1 = top_sheet_material
        self.t1 = top_sheet_thickness
        self.uts1 = top_sheet_uts
        self.ys1 = top_sheet_yield
        
        self.mat2 = bottom_sheet_material
        self.t2 = bottom_sheet_thickness
        self.uts2 = bottom_sheet_uts
        self.ys2 = bottom_sheet_yield
        
        self.dr = rivet_diameter_outer
        self.di = rivet_bore_diameter
        self.l_rivet = rivet_length
        self.hv = rivet_hardness_hv
        
        self.d_die = die_diameter
        self.h_die = die_depth
        self.h_pip = die_pip_height
        
        # Konversi kekerasan Vickers Rivet ke UTS & Yield (Baja Karbon Martensitik/Bainitik)
        # Aproksimasi ASTM E140: UTS_rivet ~= 3.2 * HV
        self.uts_rivet = 3.2 * self.hv
        self.ys_rivet = 0.85 * self.uts_rivet

    def calculate_geometric_interlock(self) -> Dict[str, float]:
        """
        Menghitung estimasi analitis undercut (u) dan bottom thickness (t_b)
        berdasarkan rasio volume paku dan geometri rongga die.
        """
        total_sheet_thickness = self.t1 + self.t2
        
        # Estimasi penetrasi dan sisa tebal lembaran bawah
        # Penetrasi efektif kaki paku ke lembaran bawah
        effective_penetration = min(self.l_rivet - self.t1, self.t2 * 0.85)
        tb_est = max(0.10, self.t2 - (effective_penetration * 0.70))
        
        # Ekspansi flare radial kaki paku akibat kontur die dan volume displacement
        die_clearance_ratio = (self.d_die - self.dr) / 2.0
        pip_influence = self.h_pip * 0.45
        
        # Undercut geometris (u)
        undercut_est = (die_clearance_ratio * 0.65) + pip_influence - (0.15 * (self.uts2 / 1000.0))
        undercut_est = max(0.05, min(undercut_est, 0.85))
        
        flare_diameter = self.dr + (2.0 * undercut_est)
        
        return {
            "total_stack_thickness_mm": total_sheet_thickness,
            "undercut_u_mm": round(undercut_est, 3),
            "bottom_thickness_tb_mm": round(tb_est, 3),
            "flare_diameter_mm": round(flare_diameter, 3),
            "rivet_head_flushness_mm": round(self.l_rivet - (total_sheet_thickness + tb_est * 0.3), 3)
        }

    def calculate_forming_forces(self) -> Dict[str, float]:
        """Menghitung prediksi profil gaya pembebanan pemasangan SPR."""
        # 1. Gaya Piercing Pelat Atas
        f_pierce_kn = (math.pi * self.dr * self.t1 * (self.uts1 / math.sqrt(3))) / 1000.0
        
        # 2. Gaya Flaring Lembaran Bawah & Penetrasi Rivet
        a_shank = (math.pi / 4.0) * (self.dr**2 - self.di**2)
        f_flaring_kn = (a_shank * self.ys_rivet * 0.35 + (math.pi * self.d_die * self.t2 * self.ys2 * 0.8)) / 1000.0
        
        # 3. Gaya Coining / Setting Puncak (Peak Force)
        f_coining_kn = (f_pierce_kn + f_flaring_kn) * 1.65 + (self.uts2 * 0.015)
        
        return {
            "piercing_force_kn": round(f_pierce_kn, 2),
            "flaring_force_kn": round(f_flaring_kn, 2),
            "peak_setting_force_kn": round(f_coining_kn, 2),
            "recommended_clamping_force_kn": round(f_coining_kn * 0.12, 2)
        }

    def predict_joint_strength(self, undercut_mm: float, tb_mm: float) -> Dict[str, Any]:
        """
        Menghitung kapasitas beban geser (Lap-Shear) dan tarik (Cross-Tension)
        serta memprediksi mode kegagalan dominan berdasarkan ISO 12996.
        """
        # A. Mode Geser (Lap-Shear)
        # 1. Bearing Failure Pelat Atas
        f_bearing = 2.2 * self.dr * self.t1 * self.uts1 / 1000.0  # kN
        
        # 2. Rivet Shank Shear Failure
        a_shank = (math.pi / 4.0) * (self.dr**2 - self.di**2)
        tau_rivet = self.uts_rivet / math.sqrt(3)
        f_rivet_shear = (tau_rivet * a_shank) / 1000.0  # kN
        
        # 3. Interlock Pull-Out in Shear
        d_flare = self.dr + 2.0 * undercut_mm
        tau_mat2 = self.uts2 / math.sqrt(3)
        f_interlock_shear = (math.pi * d_flare * undercut_mm * tau_mat2 * 1.5) / 1000.0  # kN
        
        # Kapasitas Geser Maksimum & Penentuan Mode
        shear_capacities = {
            "Sheet Bearing Tear-out": f_bearing,
            "Rivet Shear Fracture": f_rivet_shear,
            "Interlock Pull-out": f_interlock_shear
        }
        pred_shear_mode = min(shear_capacities, key=shear_capacities.get)
        peak_lap_shear_load_kn = shear_capacities[pred_shear_mode]
        
        # B. Mode Tarik Salib (Cross-Tension)
        # Ketahanan tarik bergantung langsung pada undercut (u) dan bending resistance kaki rivet
        f_tension_interlock = (math.pi * d_flare * undercut_mm * self.ys2 * (1.0 + math.sqrt(tb_mm / self.t2))) / 1000.0 # kN
        f_tension_rivet_head = (math.pi * self.dr * self.t1 * self.uts1 * 0.8) / 1000.0 # kN
        
        tension_capacities = {
            "Rivet Pull-out from Bottom Sheet": f_tension_interlock,
            "Rivet Head Pull-through Top Sheet": f_tension_rivet_head
        }
        pred_tension_mode = min(tension_capacities, key=tension_capacities.get)
        peak_cross_tension_load_kn = tension_capacities[pred_tension_mode]
        
        # Energy Absorption (Uji Kuasistatik, Estimasi Integrasi Luas Kurva Beban-Perpindahan)
        # Displacement at Failure approx: Lap shear ~ 2.5 mm, Cross tension ~ 1.8 mm
        energy_absorption_joules = (0.65 * peak_lap_shear_load_kn * 1000.0 * 0.0028)
        
        # Validasi Kualitas Sesuai Norma Kriteria Industri Otomotif
        is_undercut_ok = undercut_mm >= 0.20
        is_tb_ok = tb_mm >= 0.20
        quality_status = "PASSED (KUALITAS TINGGI)" if (is_undercut_ok and is_tb_ok) else "REJECTED (PARAMETER DIE/RIVET PERLU OPTIMASI)"
        
        return {
            "peak_lap_shear_load_kn": round(peak_lap_shear_load_kn, 2),
            "dominant_shear_failure_mode": pred_shear_mode,
            "peak_cross_tension_load_kn": round(peak_cross_tension_load_kn, 2),
            "dominant_tension_failure_mode": pred_tension_mode,
            "ductility_ratio_xi": round(peak_cross_tension_load_kn / peak_lap_shear_load_kn, 3),
            "estimated_energy_absorption_j": round(energy_absorption_joules, 2),
            "quality_audit": {
                "undercut_check": f"{undercut_mm} mm (Min Req: 0.20 mm) -> {'OK' if is_undercut_ok else 'FAIL'}",
                "bottom_thickness_check": f"{tb_mm} mm (Min Req: 0.20 mm) -> {'OK' if is_tb_ok else 'FAIL'}",
                "overall_status": quality_status
            }
        }

# ==============================================================================
# EKSEKUSI STUDI KASUS: PENYAMBUNGAN MULTI-MATERIAL BIW (Al 6061-T6 + DP780)
# ==============================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("  SIMULASI REKAYASA PRESI-INGENIUTAS SPR (SELF-PIERCING RIVETING) - RUANGTI  ")
    print("  Kasus Sambungan: Lembaran Atas Al 6061-T6 (1.5 mm) ke Baja Bawah DP780 (1.2 mm)")
    print("=" * 85)
    
    # Inisialisasi Model Sambungan
    spr_system = SPRJointEngine(
        top_sheet_material="Aluminium Alloy AA6061-T6",
        top_sheet_thickness=1.50,      # mm
        top_sheet_uts=310.0,           # MPa
        top_sheet_yield=275.0,         # MPa
        bottom_sheet_material="Baja Fasa Ganda AHSS DP780",
        bottom_sheet_thickness=1.20,   # mm
        bottom_sheet_uts=780.0,        # MPa
        bottom_sheet_yield=510.0,      # MPa
        rivet_diameter_outer=5.30,     # mm (Standard C-Rivet)
        rivet_bore_diameter=3.10,      # mm
        rivet_length=5.00,             # mm
        rivet_hardness_hv=480.0,       # HV (Boron Steel Quenched)
        die_diameter=9.00,             # mm
        die_depth=1.80,                # mm
        die_pip_height=0.40            # mm
    )
    
    # 1. Analisis Geometri Kuncian Interlock
    geom = spr_system.calculate_geometric_interlock()
    print("\n[1] PARAMETER GEOMETRI POTONGAN MELINTANG:")
    for k, v in geom.items():
        print(f"  - {k.replace('_', ' ').title()}: {v}")
        
    # 2. Analisis Beban Pembentukan (Tooling Forces)
    forces = spr_system.calculate_forming_forces()
    print("\n[2] GAYA OPERASIONAL PEMBENTUKAN (FORMING LOADS):")
    for k, v in forces.items():
        print(f"  - {k.replace('_', ' ').title()}: {v} kN")
        
    # 3. Prediksi Kekuatan Sambungan & Mode Kegagalan Destruktif (ISO 12996)
    joint_perf = spr_system.predict_joint_strength(geom["undercut_u_mm"], geom["bottom_thickness_tb_mm"])
    print("\n[3] PREDIKSI INTEGRITAS MEKANIS & MODE KEGAGALAN:")
    print(f"  - Peak Lap-Shear Strength (F_max)     : {joint_perf['peak_lap_shear_load_kn']} kN")
    print(f"  - Dominant Shear Failure Mode         : {joint_perf['dominant_shear_failure_mode']}")
    print(f"  - Peak Cross-Tension Strength         : {joint_perf['peak_cross_tension_load_kn']} kN")
    print(f"  - Dominant Tension Failure Mode       : {joint_perf['dominant_tension_failure_mode']}")
    print(f"  - Ductility Ratio (F_tens / F_shear)  : {joint_perf['ductility_ratio_xi']}")
    print(f"  - Energy Absorption Capacity          : {joint_perf['estimated_energy_absorption_j']} Joules")
    print("\n[4] AUDIT KUALITAS STANDAR OTOMOTIF:")
    for check_name, status in joint_perf["quality_audit"].items():
        print(f"  * {check_name.replace('_', ' ').title()}: {status}")
    print("=" * 85)
```

---

## 6. Studi Kasus Industri: Implementasi SPR pada B-Pillar & Shock Tower Aluminium-Baja EV

### 6.1 Deskripsi Problem & Spesifikasi Perakitan
Dalam manufaktur struktur samping kendaraan listrik (*side-impact crash structure*), perakitan *cast shock tower* aluminium paduan $\text{AlSi10MnMg}$ berketebalan $2{,}5\text{ mm}$ harus disambungkan ke penguat pilar B (*B-Pillar outer*) berbahan lembaran baja martensitik canai panas $22\text{MnB5}$ (ketebalan $1{,}4\text{ mm}$, kekuatan tarik $\text{UTS} = 1500\text{ MPa}$).

Kendala teknis di lantai pabrik:
1. Pengelasan resistansi titik (RSW) konvensional gagal karena pembentukan fasa getas $\text{Fe}_4\text{Al}_{13}$ dan keausan elektroda tembaga yang sangat cepat.
2. Ketika menggunakan paku keling SPR standar kekerasan $400\text{ HV}$, lembaran baja $22\text{MnB5}$ yang sangat keras menyebabkan kaki paku mengalami pembelokan deformasi plastis yang salah (*shank buckling*) atau patah getas sebelum menembus lembaran atas.

### 6.2 Solusi Rekayasa & Konfigurasi Tooling
Tim rekayasa manufaktur mengimplementasikan konfigurasi SPR presisi tinggi:
1. **Paku Keling Khusus Super-Hard**: Digunakan paku keling baja boron berkekuatan ultra-tinggi ($520 - 550\text{ HV}$) dengan pelapisan anti-korosi *Almac zinc-nickel* untuk mencegah korosi kontak galvanik Al-Fe.
2. **Orientasi Penetrasi Lembaran**: Lembaran aluminium lunak diletakkan di sisi atas (*top sheet*) dan baja martensitik keras diletakkan di sisi bawah (*bottom sheet*), memanfaatkan *die* berprofil dasar datar (*flat bottom die*) dengan tonjolan *pip* berdiameter $2{,}8\text{ mm}$.
3. **Kontrol Gaya Servo-Elektrik Adaptif**: Sistem penyambungan servo mengaplikasikan kurva beban presisi dengan gaya jepit awal $F_{\text{clamp}} = 6\text{ kN}$ dan gaya pembentukan puncak $F_{\text{peak}} = 68\text{ kN}$.

### 6.3 Hasil Verifikasi Metalurgi & Pengujian Destruktif
Berdasarkan uji destruktif sesuai ISO 12996 dan ISO 18592:
- **Parameter Geometri**: Diperoleh nilai *undercut* $u = 0{,}42\text{ mm}$ dan *bottom thickness* $t_b = 0{,}36\text{ mm}$ (memenuhi kriteria $> 0{,}20\text{ mm}$).
- **Kekuatan Lap-Shear**: Kekuatan geser puncak mencapai $F_{\text{shear}} = 10{,}85\text{ kN}$ dengan mode kegagalan *bearing deformation* pada lembaran aluminium atas tanpa pelepasan paku.
- **Kekuatan Cross-Tension**: Beban tarik puncak mencapai $F_{\text{cross-tension}} = 5{,}72\text{ kN}$ ($\xi_{\text{ductility}} = 0{,}527$).
- **Ketahanan Lelah (*Fatigue Life*)**: Pada pembebanan siklik dinamis ($R = 0{,}1$, amplitudo beban $F_a = 3{,}0\text{ kN}$), sambungan bertahan hingga $> 2 \times 10^6$ siklus tanpa inisiasi retak lelah, melampaui standar kelayakan tabrakan FMVSS 214.

---

## 7. Referensi Terverifikasi & Standar Industri

1. **ISO 12996:2013**: *Mechanical joining — Destructive testing of joints — Specimen dimensions and test procedure for tensile shear testing of single mechanical joints*. International Organization for Standardization, Geneva, Switzerland.
2. **ASTM E8 / E8M-24**: *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: `10.1520/E0008_E0008M-24`.
3. **DIN EN ISO 14272:2016**: *Resistance welding and mechanical joining — Destructive testing of welds — Specimen dimensions and procedure for cross tension testing of resistance spot and embossed projection welds*. Beuth Verlag GmbH, Berlin.
4. **AWS D8.1M:2021**: *Specification for Automotive Weld Quality and Mechanical Fastening — Resistance Spot Welding and Mechanical Joining*. American Welding Society (AWS), Miami, FL.
5. **He, X., Pearson, I., & Young, K. (2008)**. *Self-pierce riveting for sheet materials: State of the art*. Journal of Materials Processing Technology, 199(1-3), 27-36. DOI: `10.1016/j.jmatprotec.2007.10.071`.
6. **Mori, K., Bay, N., Fratini, L., Micari, F., & Subbiah, S. (2013)**. *Joining by plastic deformation*. CIRP Annals - Manufacturing Technology, 62(2), 673-694. DOI: `10.1016/j.cirp.2013.05.004`.
7. **Ha, S. T., Kang, M., & Kim, C. (2022)**. *Strength and Failure of Self-Piercing Riveted Aluminum and High-Strength Steel Sheets*. Journal of Advanced Joining Processes, 5, 100113. DOI: `10.1016/j.jajp.2022.100113`.
8. **Groover, M. P. (2020)**. *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems (7th Edition)*. John Wiley & Sons, Hoboken, NJ. ISBN: 978-1-119-70642-7.
