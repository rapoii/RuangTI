# Modul 644: Orbital Forging & Rotary Cold Forging (RCF): Kinematika Gerak Nutasi Cetakan (*Nutating Die Kinematics*), Mekanika Reduksi Gaya Pembentukan Kontak Lokal, Aliran Logam Deformasi Inkremental, Kriteria Kelelahan Fatik Cetakan (*Die Fatigue*), dan Fabrikasi Flange Roda Gigi Konis Otomotif (*Automotive Bevel Gear Flange*) (DIN 8583, ISO 6892-1 & ASTM E9)

## 1. Pengantar & Konteks Industri: Teknologi Penempaan Orbital Inkremental (*Orbital & Rotary Cold Forging*)

*Orbital Forging* (juga dikenal sebagai *Rotary Forging*, *Rocking Die Forging*, atau *Rotary Cold Forging* / RCF) adalah proses deformasi plastis inkremental (*incremental bulk metal forming*) di mana deformasi benda kerja dilakukan secara bertahap melalui kontak lokal yang bergulir kontinu antara cetakan atas yang bernutasi (*nutating upper die*) dan cetakan bawah stasioner atau translasi aksial.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    KINEMATIKA & ARSITEKTUR MESIN PENEMPAAN ORBITAL (RCF)                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         KEPALA CETAKAN NUTASI (NUTATING DIE HEAD)                                                                     |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │                        Sumbu Putar Mesin Utama (Z-Axis)                   │                                 |
|         │                                      │                                    │                                 |
|         │                                      ▼                                    │                                 |
|         │                           ┌─────────────────────┐                         │ Sudut Inklinasi Nutasi:         |
|         │                           │   Mekanisme Eksentrik│                         │ gamma = 1.0° - 3.0°             |
|         │                           └──────────┬──────────┘                         │                                 |
|         │                                      │                                    │                                 |
|         │                                      ├────────────────────┐               │ Sumbu Miring Cetakan (Z')       |
|         │                                      │ Sudut Gamma (γ)    │               │                                 |
|         │                                      ▼                    ▼               │                                 |
|         │                             ┌───────────────────────────────┐             │ Kecepatan Nutasi:               |
|         │                             │     Cetakan Atas Miring       │             │ n_rot = 150 - 600 RPM           |
|         │                             │       (Rocking / Nutating)    │             │                                 |
|         │                             └───────────────┬───────────────┘             │                                 |
|         └─────────────────────────────────────────────┼─────────────────────────────┘                                 |
|                                                       │                                                               |
|                                                       ▼                                                               |
|                                       ┌───────────────────────────────┐ Kontak Garis / Baji Lokal:                    |
|                                       │   Zona Deformasi Kontak Lokal │ A_c = (0.05 - 0.20) * A_nom                   |
|                                       │   Tekanan Kontak P_contact    │ Gaya Aksial Drop 80% - 90%                    |
|                                       └───────────────┬───────────────┘ Dibanding Tempa Konvensional                  |
|                                                       │                                                               |
|               Billet Benda Kerja (Baja Paduan 20CrMo / 42CrMo4 / AISI 8620)                                           |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │                                                                           │                                 |
|         │             ┌───────────────────────────────────────────────┐             │                                 |
|         │             │      Cetakan Bawah Bergerak Aksial Naik       │             │ Silinder Hidrolik Bawah         |
|         │             │             Kecepatan Umpan v_z               │             │ Gaya Aksial F_z                 |
|         │             └───────────────────────┬───────────────────────┘             │                                 |
|         │                                     ▲                                     │                                 |
|         └─────────────────────────────────────┼─────────────────────────────────────┘                                 |
|                                               │                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Pada proses penempaan konvensional (*conventional drop/press forging*), seluruh luas penampang benda kerja ($A_{\text{nom}}$) mengalami kontak dan ditekan secara simultan oleh cetakan atas dan bawah. Hal ini menuntut kapasitas tonase mesin hidrolik/mekanik yang sangat raksasa ($F_z > 2000 - 10.000\ \text{ton}$) untuk mengalirkan logam ke bentuk geometri berflange lebar atau berdinding tipis, disertai getaran masif, kebisingan tinggi, dan umur cetakan yang pendek akibat keausan aus-gesek (*abrasive die wear*).

Sebaliknya, pada *Orbital Forging*:
1. **Reduksi Gaya Aksial Ekstrem (*Massive Force Reduction*)**: Cetakan atas diposisikan miring pada sudut inklinasi presisi ($\gamma \approx 1{,}0^\circ - 3{,}5^\circ$) terhadap sumbu vertikal dan diputar secara orbital/nutasi dengan frekuensi $n_{\text{rot}} \approx 150 - 600\ \text{RPM}$. Akibatnya, pada setiap fraksi mikrodetik, kontak mekanis hanya terjadi pada sebagian kecil permukaan benda kerja berbentuk baji (*sectoral contact zone* $A_c \approx 5\% - 20\%\ A_{\text{nom}}$).
2. **Efisiensi Deformasi Inkremental**: Deformasi plastis terlokalisasi bergerak merambat secara sirkuler menyapu seluruh penampang benda kerja. Gaya tempa aksial yang dibutuhkan tereduksi drastis menjadi hanya $10\% - 20\%$ dari gaya penempaan konvensional untuk dimensi komponen yang sama.
3. **Peningkatan Presisi Dimensional & *Near-Net-Shape***: Mampu membentuk flensa tipis lebar, alur spline, dan geometri gigi bevel dengan toleransi kelas IT7-IT8 tanpa perlu langkah pemesinan kasar (*rough machining elimination*).

Pola lintasan gerak cetakan atas (*Trajectory Motion Patterns*):
- **Gerak Sirkular (*Circular / Pure Orbital Motion*)**: Sumbu cetakan atas berotasi mengelilingi sumbu vertikal mesin dengan sudut kemiringan tetap $\gamma$, menghasilkan gelombang kontak sirkular seragam untuk benda simetris putar (*discs, flanges, bearing rings*).
- **Gerak Garis Lurus / Berosilasi (*Linear / Planetary Rocking*)**: Sumbu cetakan berayun bolak-balik dalam satu bidang, cocok untuk komponen berbentuk balok panjang atau engsel.
- **Gerak Daun Semanggi / Mawar (*Spiral & Rosette Motion*)**: Lintasan kompleks multi-daun (3 atau 4 daun) untuk memastikan distribusi deformasi plastis yang homogen pada komponen non-simetris aksial atau alur gigi bevel roda gigi.

Aplikasi industri utama:
- **Otomotif & Powertrain (*Automotive Driveline Components*)**: Flange diferensial (*differential gear flange*), roda gigi konis pinion (*bevel gears*), hub bantalan roda (*wheel hub bearing rings*), pelat kopling, dan sambungan universal CVJ (*constant velocity joint housings*).
- **Dirgantara & Turbin (*Aerospace Thin-Web Discs*)**: Piringan kompresor berdinding tipis paduan titanium Ti-6Al-4V dan paduan nikel.
- **Alat Berat & Flange Pipa Tekanan Tinggi (*Heavy Machinery Flanges*)**: *Weld-neck flanges*, klem transmisi, dan cincin pengunci hidrolik paduan baja berkekuatan tinggi (AISI 4140 / 42CrMo4).

Standar internasional dan spesifikasi pengujian mekanik:
- **DIN 8583-1 s/d 8583-4**: *Manufacturing processes forming under compressive conditions — Terms, classification and theoretical principles (Druckumformen)*.
- **ISO 6892-1**: *Metallic materials — Tensile testing — Part 1: Method of test at room temperature*.
- **ASTM E9-19**: *Standard Test Methods of Compression Testing of Metallic Materials at Room Temperature*.
- **ISO 1143**: *Metallic materials — Rotating bar bending fatigue testing*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.

---

## 2. Termomekanika & Analisis Plastisitas Deformasi Kontak Lokal

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                MEKANIKA TEGANGAN TRIAKSIAL & GEOMETRI AREA KONTAK LOKAL                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         GEOMETRI BIDANG KONTAK BAJI SEKTORAL                   TEGANGAN HIDROSTATIK & TEGANGAN EFEKTIF VON MISES      |
|                                                                                                                       |
|                 Sumbu Vertikal Z                                      Tegangan Kontak P(r, theta)                     |
|                        │                                              ▲                                               |
|         Cetakan Miring │ Sumbu Nutasi Z'                              │              Puncak Kontak Terlokalisasi      |
|              \         │  / Sudut Inklinasi γ                         │                      ┌────────┐               |
|               \        │ /                                            │                     ┌┘        └┐              |
|                \       │/                                             │                    ┌┘          └┐             |
|                 \      │                                              │                   ┌┘            └┐            |
|         ┌────────▼─────┴────────┐                                     │                  ┌┘              └┐           |
|         │  Cetakan Atas Kontak  │                                     │       ───────────┘                └────────   |
|         └───────┬───────────────┘                                     └───────────────────────────────────────►       |
|                 │ Kedalaman Inkremental s_z                                   -psi_0           0            +psi_0    |
|                 ▼                                                                     Sudut Kontak Sektor Psi         |
|         ┌───────────────────────┐                                                                                     |
|         │ Area Kontak Baji A_c  │ ◄── Luas Baji: A_c ≈ psi_0 * R^2                                                    |
|         │ (Sector Contact Zone) │     Sudut Kontak: psi_0 = arccos(1 - s_z / (R * tan(gamma)))                        |
|         └───────────────────────┘                                                                                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Kinematika Busur Kontak Baji & Sudut Cakupan Sektoral ($\psi_0$)

Misalkan billet berbentuk silinder berjari-jari $R$ dideformasi oleh cetakan atas yang miring dengan sudut $\gamma$. Pada setiap satu putaran nutasi ($n_{\text{rot}}$), cetakan bawah bergerak naik dengan kecepatan aksial $v_z$, menghasilkan umpan aksial per putaran (*feed per revolution* $s_z$):

$$s_z = \frac{v_z}{n_{\text{rot}}}\quad [\text{mm/rev}]$$

Penetrasi inkremental baji cetakan atas menekan benda kerja sedalam $\Delta h(r, \theta)$. Sudut cakupan kontak sektoral setengah ($\psi_0$) pada radius luar $R$ dirumuskan secara geometris:

$$\cos(\psi_0) = 1 - \frac{s_z}{R \cdot \tan(\gamma)}$$

$$\psi_0 = \arccos\left(1 - \frac{s_z}{R \cdot \tan(\gamma)}\right)\quad [\text{rad}]$$

Luas area kontak sesaat (*instantaneous contact area* $A_c$) antara cetakan miring dan benda kerja adalah luas irisan sektor lingkaran termodifikasi:

$$A_c = \frac{1}{2} R^2 \cdot (2\psi_0 - \sin(2\psi_0)) \approx \frac{4}{3} R \cdot \sqrt{\frac{2 s_z R}{\tan(\gamma)}}$$

Rasio luas kontak lokal terhadap luas penampang nominal total billet ($A_{\text{nom}} = \pi R^2$):

$$\alpha_{\text{contact}} = \frac{A_c}{A_{\text{nom}}} = \frac{4}{3\pi} \sqrt{\frac{2 s_z}{R \cdot \tan(\gamma)}}$$

Pada kondisi operasional standar ($s_z = 0{,}2 - 1{,}0\ \text{mm/rev}$, $R = 50\ \text{mm}$, $\gamma = 2^\circ$), rasio luas kontak $\alpha_{\text{contact}}$ bernilai hanya $0{,}08 - 0{,}18$ ($8\% - 18\%$).

### 2.2. Model Gaya Pembentukan Aksial & Reduksi Gaya Tempa

Gaya penempaan aksial total ($F_z$) pada proses penempaan orbital dihitung dengan mengintegrasikan tegangan kontak normal $p_n(r, \theta)$ di atas area kontak aktif $A_c$:

$$F_z = \iint_{A_c} p_n(r, \theta) \cdot r\,dr\,d\theta$$

Menurut teori medan garis luncur (*slip-line field theory*) dan hukum gesekan Coulomb-Siebel untuk deformasi kompresi baji berputar, tegangan kontak rata-rata $\bar{p}_n$ dapat dinyatakan sebagai perkalian faktor pembesaran tegangan (*stress enhancement factor* $n_p$) dan tegangan alir plastis material ($\sigma_f$):

$$\bar{p}_n = n_p \cdot \sigma_f$$

$$n_p = \left( 1 + \frac{\mu \cdot R}{3 \cdot h} + \frac{\tan(\gamma)}{2\mu} \right)$$

di mana:
- $\mu$: Koefisien gesekan antarmuka benda kerja-cetakan ($\mu \approx 0{,}08 - 0{,}15$ untuk pelumasan dingin fosfat/molekuler).
- $h$: Ketebalan benda kerja sesaat ($\text{mm}$).
- $\sigma_f$: Tegangan alir material berdasarkan model pengerasan regangan Hollomon/Ludwik:
  
  $$\sigma_f = K \cdot \varepsilon_{\text{eq}}^n \cdot \left(\frac{\dot{\varepsilon}_{\text{eq}}}{\dot{\varepsilon}_0}\right)^m$$

Sehingga gaya aksial orbital forging $F_{z,\text{orbital}}$:

$$F_{z,\text{orbital}} = \bar{p}_n \cdot A_c = n_p \cdot \sigma_f \cdot A_c$$

Bila dibandingkan dengan gaya penempaan konvensional di mana seluruh area $A_{\text{nom}}$ ditekan secara serempak:

$$F_{z,\text{conv}} = n_{p,\text{conv}} \cdot \sigma_f \cdot A_{\text{nom}}$$

Rasio reduksi gaya penempaan (*Force Reduction Factor* $\chi$):

$$\chi = \frac{F_{z,\text{orbital}}}{F_{z,\text{conv}}} \approx \frac{A_c}{A_{\text{nom}}} \cdot \frac{n_p}{n_{p,\text{conv}}} \approx (0{,}10 - 0{,}22)$$

Pengurangan gaya sebesar $80\% - 90\%$ ini memungkinkan penggunaan mesin press berkapasitas $300 - 500\ \text{ton}$ untuk menghasilkan komponen yang pada penempaan konvensional membutuhkan mesin press raksasa berkekuatan $3000 - 5000\ \text{ton}$.

### 2.3. Torsi Nutasi & Konsumsi Daya Mesin

Karena cetakan atas miring terhadap sumbu vertikal, resultan gaya kontak normal menghasilkan momen lentur dan torsi nutasi (*nutation drive torque* $M_{\text{drive}}$) yang harus ditopang oleh motor spindel mesin:

$$M_{\text{drive}} = F_z \cdot R_{\text{eff}} \cdot \sin(\gamma) + \mu \cdot F_z \cdot R_{\text{eff}}$$

di mana $R_{\text{eff}} \approx \dfrac{2}{3} R$ adalah radius lengan gaya efektif zona kontak baji.

Daya mekanik total yang dikonsumsi sistem:

$$P_{\text{total}} = F_z \cdot v_z + M_{\text{drive}} \cdot \omega_{\text{rot}} = F_z \cdot v_z + M_{\text{drive}} \cdot \left(\frac{2\pi n_{\text{rot}}}{60}\right)$$

---

## 3. Aliran Logam Inkremental, Tegangan Sisa, dan Umur Fatik Cetakan

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                POLA ALIRAN GRAIN FLOW & MEKANISME KERUSAKAN CETAKAN (DIE FATIGUE)                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  STRUKTUR ALIRAN BUTIR SERAT (GRAIN FLOW)              MEKANISME KERUSAKAN FATIK CETAKAN TEMPA                        |
|                                                                                                                       |
|  Penempaan Orbital RCF:                                1. Tegangan Kontak Siklik Bolak-Balik:                         |
|  - Serat kontinyu mengikuti kontur flange                 Delta_sigma = P_max - 0 (Siklus Berulang n_rot RPM)         |
|  - Tanpa pemotongan serat ujung (*end fiber cut*)      2. Kelelahan Termomekanik Siklik Bawah Permukaan:              |
|  - Ketahanan fatik bending gigi meningkat 35%             Inisiasi Retak Fatik (Basquin-Manson-Coffin):               |
|                                                           N_f = 0.5 * (Delta_sigma / (2 * sigma_f'))^(1/b)            |
|       ┌──────────────────────────────────────┐         3. Keausan Aus-Gesek Terlokalisasi:                            |
|       │ ════════════════════════════════════ │            Volume Keausan Archard: W = K_wear * (F_n * s) / H_die      |
|       │ ═══════════════╗  ╔═════════════════ │                                                                        |
|       │ ═══════════════╝  ╚═════════════════ │         Solusi Rekayasa Cetakan:                                       |
|       │ ════════════════════════════════════ │         - Material: Baja Perkakas Hot-Work AISI H13 / 1.2344           |
|       └──────────────────────────────────────┘         - Perlakuan: Quench-Temper + Nitridasi Plasma (35 μm)          |
|                                                        - Kekerasan Permukaan: 62 - 64 HRC (HV > 1050)                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Keunggulan Metalurgi & Distribusi Serat (*Fiber Grain Flow*)

Pada pembentukan roda gigi konis (*bevel gears*) melalui proses pemotongan bubut/frais (*machining*), orientasi serat butir kristal logam (*grain flow lines*) terpotong secara melintang pada bagian akar gigi (*tooth root*), menciptakan konsentrasi tegangan lokal yang menjadi titik awal retak lelah.

Pada *Rotary Cold Forging*, deformasi inkremental menghasilkan pola aliran butir (*unbroken continuous grain flow*) yang melengkung secara mulus mengikuti kontur gigi dan flange:
- Memadatkan densitas dislokasi di lapisan terluar (*strain hardening* terkendali).
- Meningkatkan batas fatik lentur akar gigi (*tooth bending fatigue limit*) hingga $30\% - 45\%$ dibandingkan gigi hasil proses pemesinan.
- Menghasilkan kekasaran permukaan akhir $R_a \le 0{,}4\ \mu\text{m}$ setara dengan proses *grinding*.

### 3.2. Kinetika Fatik & Umur Pakai Cetakan (*Die Fatigue Life Prediction*)

Meskipun gaya total tereduksi, cetakan orbital menerima beban kontak terlokalisasi dengan frekuensi siklik tinggi ($150 - 600\ \text{siklus/menit}$). Model umur kelelahan cetakan berpedoman pada kriteria regangan-umur Manson-Coffin-Basquin:

$$\frac{\Delta \varepsilon_{\text{total}}}{2} = \frac{\Delta \varepsilon_e}{2} + \frac{\Delta \varepsilon_p}{2} = \frac{\sigma_f'}{E} (2N_f)^b + \varepsilon_f' (2N_f)^c$$

di mana:
- $N_f$: Jumlah siklus putaran hingga terjadinya inisiasi retak fatik cetakan.
- $\sigma_f', \varepsilon_f'$: Koefisien kekuatan fatik dan koefisien keuletan fatik baja cetakan (AISI H13 / DIN 1.2344).
- $b, c$: Eksponen fatik elastis ($b \approx -0{,}08$) dan plastis ($c \approx -0{,}60$).

Untuk memperpanjang umur cetakan hingga melampaui $100.000\ \text{parts}$:
1. Mengaplikasikan perlakuan panas *vacuum quenching & multi-tempering* pada kekerasan matriks $54 - 56\ \text{HRC}$.
2. Melakukan pelapisan permukaan *Duplex Surface Engineering* (Nitridasi Plasma terpadu pelapisan PVD CrAlN/AlCrTiN) dengan ketebalan lapisan difusi nitrida $150\ \mu\text{m}$ dan kekerasan permukaan $\ge 1100\ \text{HV}$.

---

## 4. Perbandingan Karakteristik: Penempaan Orbital vs Penempaan Konvensional

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                TABEL EVALUASI KOMPARATIF METODE PENEMPAAN KOMPONEN FLANGE                             |
+-----------------------------------------------------------------------------------------------------------------------+
| Parameter Pembanding              | Penempaan Konvensional (Drop/Press) | Penempaan Orbital Inkremental (RCF)         |
+-----------------------------------+-------------------------------------+---------------------------------------------+
| Kebutuhan Tonase Mesin            | Sangat Besar (2000 - 6000 Ton)      | Sangat Efisien (200 - 600 Ton, Hemat 85%)   |
| Luas Kontak Sesaat (A_c)          | 100% dari Luas Billet (A_nom)       | 8% - 18% dari Luas Billet (Baji Lokal)      |
| Tingkat Kebisingan & Getaran      | Sangat Tinggi (> 105 dB, Impak)     | Rendah & Halus (< 75 dB, Operasi Kontinu)   |
| Konsumsi Energi Listrik Spesifik  | 450 - 650 kWh/ton                   | 120 - 180 kWh/ton (Hemat > 65%)             |
| Toleransi Geometris Flange        | Kasar (± 0.5 - 1.2 mm)              | Presisi Tinggi (± 0.03 - 0.08 mm, IT7-IT8)  |
| Kelonggaran Pemesinan (Allowance) | Membutuhkan Machining 2 - 5 mm      | Near-Net-Shape (Allowance 0 - 0.2 mm)       |
| Pemanfaatan Material (Yield Rate) | 65% - 75% (Banyak Flash Scrap)      | 92% - 98% (Flashless / Minimal Flash)       |
| Keutuhan Serat Struktur Logam     | Serat Terpotong Saat Machining      | Aliran Serat Kontinu Utuh Menahan Beban     |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Implementasi Algoritma & Komputasi: Python Orbital Forging Kinematics & Force Solver

Skrip Python berikut memodelkan kinematika nutasi cetakan atas, kalkulasi sudut cakupan baji sektoral $\psi_0$, luas kontak sesaat $A_c$, estimasi gaya penempaan aksial dinamis $F_z$, torsi penggerak nutasi $M_{\text{drive}}$, konsumsi daya motor spindel, serta perbandingan langsung dengan penempaan konvensional.

```python
"""
ORBITAL FORGING (ROTARY COLD FORGING) KINEMATICS & FORCE SOLVER
Standard Compliance: DIN 8583, ISO 6892-1, ASTM E9.
Author: RuangTI Precision Manufacturing Knowledge Base Specialist.
"""

import math
from typing import Dict, List, Tuple, Any

class OrbitalForgingSolver:
    def __init__(self,
                 material_name: str = "20CrMo Alloy Steel",
                 K_strength_coeff_MPa: float = 850.0,
                 n_strain_hardening: float = 0.18,
                 mu_friction: float = 0.10,
                 die_angle_gamma_deg: float = 2.0,
                 rotational_speed_rpm: float = 250.0):
        self.material = material_name
        self.K = K_strength_coeff_MPa
        self.n = n_strain_hardening
        self.mu = mu_friction
        self.gamma_deg = die_angle_gamma_deg
        self.gamma_rad = math.radians(die_angle_gamma_deg)
        self.n_rot = rotational_speed_rpm
        self.omega = (2.0 * math.pi * rotational_speed_rpm) / 60.0 # rad/s

    def compute_flow_stress(self, true_strain: float) -> float:
        """Menghitung tegangan alir plastis material Hollomon model."""
        eps = max(true_strain, 0.005)
        return self.K * (eps ** self.n)

    def solve_incremental_kinematics(self,
                                     billet_radius_R_mm: float,
                                     current_height_h_mm: float,
                                     axial_feed_speed_vz_mms: float) -> Dict[str, float]:
        """
        Menghitung kinematika penetrasi baji inkremental per putaran nutasi.
        """
        # Umpan aksial per putaran nutasi
        s_z = axial_feed_speed_vz_mms / (self.n_rot / 60.0) # mm/rev
        
        # Sudut cakupan kontak sektoral psi_0 (rad)
        term_cos = 1.0 - (s_z / (billet_radius_R_mm * math.tan(self.gamma_rad)))
        term_cos_clamped = max(min(term_cos, 1.0), -1.0)
        psi_0_rad = math.acos(term_cos_clamped)
        psi_0_deg = math.degrees(psi_0_rad)
        
        # Luas area kontak sesaat A_c (mm^2)
        # Sektor termodifikasi
        A_c_exact = 0.5 * (billet_radius_R_mm**2) * (2.0 * psi_0_rad - math.sin(2.0 * psi_0_rad))
        # Luas penampang nominal total
        A_nom = math.pi * (billet_radius_R_mm**2)
        
        contact_area_ratio = A_c_exact / A_nom
        
        return {
            "s_z_feed_per_rev_mm": s_z,
            "psi_0_half_angle_deg": psi_0_deg,
            "contact_area_Ac_mm2": A_c_exact,
            "nominal_area_Anom_mm2": A_nom,
            "contact_ratio_alpha": contact_area_ratio
        }

    def evaluate_forming_forces(self,
                                billet_radius_R_mm: float,
                                current_height_h_mm: float,
                                initial_height_h0_mm: float,
                                axial_feed_speed_vz_mms: float) -> Dict[str, Any]:
        """
        Menghitung gaya pembentukan aksial, torsi penggerak, daya, dan komparasi dengan konvensional.
        """
        kin = self.solve_incremental_kinematics(billet_radius_R_mm, current_height_h_mm, axial_feed_speed_vz_mms)
        
        # Regangan sejati kumulatif
        true_strain = math.log(initial_height_h0_mm / current_height_h_mm)
        sigma_f = self.compute_flow_stress(true_strain) # MPa (N/mm^2)
        
        # Faktor pengali tegangan kontak baji n_p (Siebel-Snoeys model)
        n_p_orbital = 1.0 + (self.mu * billet_radius_R_mm / (3.0 * current_height_h_mm)) + (math.tan(self.gamma_rad) / (2.0 * self.mu))
        
        # Tegangan kontak normal rata-rata
        p_mean_orbital = n_p_orbital * sigma_f # MPa
        
        # Gaya Aksial Orbital Forging (kN dan Ton)
        F_z_orbital_N = p_mean_orbital * kin["contact_area_Ac_mm2"]
        F_z_orbital_kN = F_z_orbital_N * 1e-3
        F_z_orbital_ton = F_z_orbital_kN / 9.80665
        
        # Torsi Penggerak Nutasi M_drive (N*m)
        R_eff_m = (2.0 / 3.0) * (billet_radius_R_mm * 1e-3)
        M_drive_Nm = (F_z_orbital_N * R_eff_m * math.sin(self.gamma_rad)) + (self.mu * F_z_orbital_N * R_eff_m)
        
        # Daya Motor Total (kW)
        P_axial_kW = (F_z_orbital_N * (axial_feed_speed_vz_mms * 1e-3)) * 1e-3
        P_rotational_kW = (M_drive_Nm * self.omega) * 1e-3
        P_total_kW = P_axial_kW + P_rotational_kW
        
        # Perhitungan Komparasi Penempaan Konvensional (Upsetting Penuh)
        n_p_conv = 1.0 + (2.0 * self.mu * billet_radius_R_mm / (3.0 * current_height_h_mm))
        p_mean_conv = n_p_conv * sigma_f
        F_z_conv_N = p_mean_conv * kin["nominal_area_Anom_mm2"]
        F_z_conv_kN = F_z_conv_N * 1e-3
        F_z_conv_ton = F_z_conv_kN / 9.80665
        
        force_reduction_percent = (1.0 - (F_z_orbital_N / F_z_conv_N)) * 100.0
        
        return {
            "true_strain": true_strain,
            "flow_stress_sigma_f_MPa": sigma_f,
            "mean_contact_pressure_MPa": p_mean_orbital,
            "orbital_axial_force_kN": F_z_orbital_kN,
            "orbital_axial_force_ton": F_z_orbital_ton,
            "nutation_torque_Nm": M_drive_Nm,
            "total_power_kW": P_total_kW,
            "conventional_force_kN": F_z_conv_kN,
            "conventional_force_ton": F_z_conv_ton,
            "force_reduction_percentage": force_reduction_percent,
            "kinematics": kin
        }

    def simulate_forming_stroke(self,
                                billet_radius_R0_mm: float,
                                h0_mm: float,
                                h_final_mm: float,
                                vz_mms: float,
                                steps: int = 10) -> List[Dict[str, float]]:
        """Simulasi profil pembentukan dari billet awal hingga geometri akhir."""
        results = []
        dh = (h0_mm - h_final_mm) / steps
        for i in range(steps + 1):
            h_curr = h0_mm - (i * dh)
            if h_curr <= h_final_mm:
                h_curr = h_final_mm
            # Asumsi volume konstan: V = pi * R0^2 * h0 = pi * R_curr^2 * h_curr
            R_curr = billet_radius_R0_mm * math.sqrt(h0_mm / h_curr)
            res = self.evaluate_forming_forces(R_curr, h_curr, h0_mm, vz_mms)
            results.append({
                "stroke_height_mm": h_curr,
                "current_radius_mm": R_curr,
                "orbital_ton": res["orbital_axial_force_ton"],
                "conv_ton": res["conventional_force_ton"],
                "power_kW": res["total_power_kW"]
            })
        return results

# Demonstrasi Eksekusi
if __name__ == "__main__":
    solver = OrbitalForgingSolver(
        material_name="Baja Paduan 42CrMo4 (AISI 4140)",
        K_strength_coeff_MPa=920.0,
        n_strain_hardening=0.16,
        mu_friction=0.09,
        die_angle_gamma_deg=2.0,
        rotational_speed_rpm=300.0
    )
    
    print("=== SIMULASI 1: Pembentukan Flange Roda Gigi Konis Otomotif ===")
    eval_res = solver.evaluate_forming_forces(
        billet_radius_R_mm=60.0,
        current_height_h_mm=18.0,
        initial_height_h0_mm=45.0,
        axial_feed_speed_vz_mms=2.0
    )
    
    kin = eval_res["kinematics"]
    print(f"Umpan per Putaran (s_z)       : {kin['s_z_feed_per_rev_mm']:.3f} mm/rev")
    print(f"Sudut Kontak Baji (psi_0)     : {kin['psi_0_half_angle_deg']:.2f} derajat")
    print(f"Rasio Luas Kontak Sesaat      : {kin['contact_ratio_alpha']*100:.2f} % dari Luas Nominal")
    print(f"Tegangan Alir Material        : {eval_res['flow_stress_sigma_f_MPa']:.2f} MPa")
    print(f"Tekanan Kontak Rata-Rata      : {eval_res['mean_contact_pressure_MPa']:.2f} MPa")
    print(f"Gaya Aksial Orbital (F_z)     : {eval_res['orbital_axial_force_kN']:.2f} kN ({eval_res['orbital_axial_force_ton']:.1f} Ton)")
    print(f"Torsi Penggerak Nutasi        : {eval_res['nutation_torque_Nm']:.2f} N*m")
    print(f"Daya Total Dibutuhkan         : {eval_res['total_power_kW']:.2f} kW")
    print(f"Gaya Tempa Konvensional       : {eval_res['conventional_force_kN']:.2f} kN ({eval_res['conventional_force_ton']:.1f} Ton)")
    print(f"Reduksi Beban Pembentukan     : {eval_res['force_reduction_percentage']:.2f} % PENGHEMATAN BEBAN")
```

---

## 6. Studi Kasus Industri: Fabrikasi Flange Roda Gigi Diferensial Otomotif (*Automotive Differential Bevel Gear*)

### 6.1. Deskripsi Permasalahan & Kendala Pabrikasi Eksisting

Sebuah perusahaan manufaktur komponen transmisi otomotif (*Tier-1 automotive driveline supplier*) memproduksi komponen roda gigi diferensial berflange lebar (*flanged bevel gear blank*) berbahan baja paduan tempa 20CrMo (DIN 1.7218).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                              GEOMETRI FLANGE RODA GIGI DIFERENSIAL & DISTRIBUSI GAYA TEMPA                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Geometri Komponen: Flange Bevel Gear Blank            Spesifikasi Kualitas & Toleransi:                       |
|         ┌───────────────────────────────────────┐            - Diameter Luar Flange  : 140 mm (Radius R = 70 mm)      |
|         │      Flange Tipis Lebar (t = 8 mm)    │            - Ketebalan Dinding Web : 8.0 ± 0.05 mm                  |
|         │  ┌─────────────────────────────────┐  │            - Kekasaran Permukaan   : R_a ≤ 0.6 μm                   |
|         │  │                                 │  │            - Konsentrisitas        : ≤ 0.03 mm                      |
|         └──┴──────────┐           ┌──────────┴──┘                                                                     |
|                       │   Hub     │                          Kondisi Eksisting (Press Konvensional 3000 Ton):         |
|                       │   Poros   │                          - Kebutuhan Tonase Beban Puncak: 2850 Ton                |
|                       │           │                          - Flash Scrap Metal Terbuang   : 32% Berat Billet        |
|                       └───────────┘                          - Umur Pakai Cetakan           : Hanya 6500 Stroke       |
|                                                              - Konsumsi Listrik             : 580 kWh / Ton Produk    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Permasalahan: Pada lini produksi lama menggunakan mesin press mekanik konvensional $3000\ \text{ton}$, cetakan mengalami keausan fatik berat (*thermal-mechanical fatigue cracking*) setelah hanya $6.500$ langkah penempaan karena beban tonase ekstrem ($2850\ \text{ton}$). Selain itu, terdapat sirip sisa (*flash scrap*) sebesar $32\%$ yang harus dibuang melalui proses *trimming* dan pembubutan lanjutan.

### 6.2. Implementasi Solusi Rekayasa Berbasis Penempaan Orbital Dingin

Manajemen rekayasa mengadopsi lini *Rotary Cold Forging* (RCF) berkapasitas $400\ \text{ton}$ dengan mekanisme nutasi terpadu:

1. **Parameterisasi Kinematika Nutasi**:
   - Mengatur sudut inklinasi nutasi cetakan atas $\gamma = 2{,}0^\circ$ dengan kecepatan putar $n_{\text{rot}} = 280\ \text{RPM}$.
   - Kecepatan umpan aksial hidrolik bawah ditetapkan $v_z = 1{,}8\ \text{mm/s}$, menghasilkan umpan inkremental per putaran $s_z = 0{,}385\ \text{mm/rev}$.
   - Rasio luas kontak baji terhadap penampang nominal terjaga pada $\alpha_{\text{contact}} = 11{,}4\%$, mereduksi gaya aksial puncak menjadi hanya $320\ \text{ton}$ ($3138\ \text{kN}$).
2. **Rancang Bangun Cetakan Tertutup Tanpa Sirip (*Flashless Closed Die Tooling*)**:
   - Menggunakan cetakan bawah tipe *pre-stressed container ring* dengan cincin karbida tungsten untuk mengeliminasi pembentukan sirip *flash*, menaikkan pemanfaatan material (*material yield rate*) dari $68\%$ menjadi $97{,}5\%$.
3. **Peningkatan Metalurgi Cetakan (*Duplex Treated H13 Tooling*)**:
   - Menggunakan baja perkakas premium DIN 1.2344 (*vacuum hardened* $55\ \text{HRC}$) dilapisi *Duplex Plasma Nitriding + TiAlN PVD coating*.

### 6.3. Hasil Evaluasi & Validasi Kinerja

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    TABEL HASIL PENINGKATAN KINERJA PABRIKASI BEVEL GEAR                               |
+-----------------------------------------------------------------------------------------------------------------------+
| Parameter Indikator               | Metode Press Tempa Konvensional | Solusi Rotary Cold Forging (RCF)| Peningkatan   |
+-----------------------------------+---------------------------------+---------------------------------+---------------+
| Kapasitas Mesin Digunakan         | 3000 Ton Press Hidrolik         | 400 Ton Orbital Forging Press   | Hemat Tonase  |
| Beban Gaya Tempa Aktual           | 2850 Ton                        | 320 Ton                         | - 88.8 %      |
| Pemanfaatan Bahan Baku (*Yield*)  | 68.0 %                          | 97.5 %                          | + 43.4 %      |
| Konsumsi Energi Listrik Spesifik  | 580 kWh/ton                     | 165 kWh/ton                     | - 71.5 %      |
| Umur Pakai Cetakan (*Die Life*)   | 6.500 komponen                  | 85.000 komponen                 | 13.0x Lipat   |
| Toleransi Ketebalan Flange        | ± 0.45 mm                       | ± 0.04 mm                       | 11.2x Presisi |
| Penghematan Biaya per Komponen    | Baseline ($ 14.80 / pcs)        | $ 6.15 / pcs                    | - 58.4 %      |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 7. Referensi Terverifikasi & Literatur Akademis

1. **Lange, K.** (1985). *Handbook of Metal Forming*. McGraw-Hill Book Company. ISBN: 978-0-070-36285-7.
2. **Altan, T., Ngaile, G., & Shen, G.** (2005). *Cold and Hot Forging: Fundamentals and Applications*. ASM International, Materials Park, Ohio. ISBN: 978-0-87170-805-2.
3. **Standring, P. M.** (2000). *Rotary Forging: Principles and Applications*. Journal of Materials Processing Technology, 106(1-3), 200–206. DOI: 10.1016/S0924-0136(00)00614-7.
4. **CIRP Annals — Manufacturing Technology** (2018). *Incremental Bulk Forming Processes: Mechanics, Kinematics and Industrial Innovations*. CIRP Annals, 67(2), 741–764. DOI: 10.1016/j.cirp.2018.05.008.
5. **DIN 8583-1:2003**: *Manufacturing processes forming under compressive conditions — Part 1: General; Classification, subdivision, terms and definitions*. Deutsches Institut für Normung.
6. **ISO 6892-1:2019**: *Metallic materials — Tensile testing — Part 1: Method of test at room temperature*. International Organization for Standardization.
7. **ASTM E9-19**: *Standard Test Methods of Compression Testing of Metallic Materials at Room Temperature*. ASTM International, West Conshohocken, PA. DOI: 10.1520/E0009-19.
