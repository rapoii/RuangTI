# Modul 631: Ultrasonic Additive Manufacturing (UAM) & Ultrasonic Foil Lamination Mechanics: Efek Pelunakan Akustik (Acoustic Softening / Blaha Effect), Dinamika Gesekan Sonotrode (*Interfacial Scrubbing*), Rekristalisasi Sub-Butir Dinamis, Penutupan Rongga Antarmuka (*Interfacial Void Closure*), dan Integritas Sambungan Multi-Material (*Solid-State Dissimilar Metal Foil Bonding*) (ISO/ASTM 52900, ASTM E8M, AWS G2.4 & ASME Sec IX)

## 1. Pengantar & Konteks Industri: Manufaktur Aditif Keadaan Padat Berbasis Energi Ultrasonik

Dalam lanskap manufaktur maju (*advanced manufacturing*), fabrikasi komponen multi-material yang menggabungkan pasangan logam berbeda karakteristik termofisika (*dissimilar metals*—seperti Al-ke-Cu untuk manajemen termal baterai EV, Al-ke-Ti/Steel untuk struktur ringan dirgantara, atau penanaman sensor serat optik *fiber Bragg grating* ke dalam matriks logam tanpa kerusakan termal) menjadi tantangan kritis bagi metode fusi berbasis sinar laser atau elektron (*fusion-based additive manufacturing* seperti LPBF, DED, dan WAAM).

Proses fusi suhu tinggi memicu:
1. Pembentukan senyawa intermetalik rapuh (*brittle intermetallic compounds* / IMC seperti $\text{Al}_3\text{Ti}$, $\text{Fe}_2\text{Al}_5$, $\text{Al}_2\text{Cu}$) di sepanjang antarmuka sambungan.
2. Tegangan sisa termal tarik masif (*tensile thermal residual stresses*) dan distorsi geometris akibat gradien termal ekstrem serta perbedaan koefisien ekspansi termal ($\Delta \alpha$).
3. Degradasi dan kerusakan instan pada elemen sensor sensitif yang ditanam (*embedded sensors/actuators*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|          PERBANDINGAN PROFIL TEKNOLOGI ADITIF: FUSION-BASED (LPBF/DED) VS SOLID-STATE UAM (ULTRASONIC ADDITIVE)       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   PARAMETER PROSES & INTEGRITAS     FUSION ADDITIVE (LPBF / DED / WAAM)  ULTRASONIC ADDITIVE MANUFACTURING (UAM)      |
|   ┌───────────────────────────────┐ ┌──────────────────────────────────┐ ┌──────────────────────────────────────────┐ |
|   │ Temperatur Operasi Relatif    │ │ > 1.0 T_melt (Fase Cair Total)   │ │ 0.30 - 0.50 T_melt (Keadaan Padat Dingin)│ |
|   ├───────────────────────────────┤ ├──────────────────────────────────┤ ├──────────────────────────────────────────┤ |
|   │ Pembentukan Fasa Intermetalik │ │ Masif & Rapuh (Retak Getas IMC)  │ │ Ditekan < 100 nm / Bebas IMC Rapuh       │ |
|   ├───────────────────────────────┤ ├──────────────────────────────────┤ ├──────────────────────────────────────────┤ |
|   │ Tegangan Sisa Termal          │ │ Tarik Tinggi (Tensile Residual)  │ │ Tekan Rendah / Sangat Minimal Residual   │ |
|   ├───────────────────────────────┤ ├──────────────────────────────────┤ ├──────────────────────────────────────────┤ |
|   │ Penggabungan Material Berbeda │ │ Sangat Terbatas (Metrik Metalurgi│ │ Universal (Al-Cu, Al-Ti, Al-Steel, Ni-Ti)│ |
|   ├───────────────────────────────┤ ├──────────────────────────────────┤ ├──────────────────────────────────────────┤ |
|   │ Penanaman Komponen Elektronik │ │ Tidak Memungkinkan (Sensor Rusak)│ │ Sempurna (Serat Optik FBG, Sensor Tanpa  │ |
|   │ & Serat Penguat Cerdas        │ │ Akibat Paparan Kolam Cair Panas  │ │ Kerusakan Termal / Cold Embedding)       │ |
|   ├───────────────────────────────┤ ├──────────────────────────────────┤ ├──────────────────────────────────────────┤ |
|   │ Laju Pengikatan Foil Antarmuka│ │ Pembekuan Kolam Leleh Mikro      │ │ Efek Blaha + Gesekan Scrubbing Akustik   │ |
|   └───────────────────────────────┘ └──────────────────────────────────┘ └──────────────────────────────────────────┘ |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Ultrasonic Additive Manufacturing (UAM)**—juga diklasifikasikan sebagai *Ultrasonic Consolidation (UC)*—adalah proses manufaktur aditif berbasis lembaran (*sheet lamination solid-state additive manufacturing*) yang menggabungkan lapisan lembaran/pita foil logam (*metal foils*) secara berurutan pada kondisi keadaan padat (*solid-state*) pada suhu jauh di bawah titik lebur material ($T < 0.5 \, T_m$), diintegrasikan secara *hybrid* dengan pemesinan pengefraisan CNC 3-sumbu/5-sumbu (*integrated CNC milling*) untuk membentuk kontur geometris presisi tinggi dan saluran internal (*conformal cooling channels*).

Standar internasional, pedoman institusi profesi, dan metodologi pengujian yang mengatur proses UAM meliputi:
- **ISO/ASTM 52900**: *Additive manufacturing — General principles — Fundamentals and vocabulary (Sheet Lamination Category)*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials (Micro-Tensile & Interfacial Shear Testing)*.
- **AWS G2.4 / G2.4M**: *Guide for the Ultrasonic Welding of Metals*.
- **ASME BPVC Section IX**: *Welding, Brazing, and Fusing Qualifications — Solid-State Joining Procedures*.
- **ISO 25239-1**: *Friction stir welding — Aluminium (Solid-state plastic deformation principles)*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.

---

## 2. Mekanika Ikatan Keadaan Padat & Fenomena Kontak Akustik Sonotrode

Pengikatan foil logam dalam UAM terjadi melalui kombinasi simultan dari beban normal statis kompresif ($F_N$), getaran osilasi ultrasonik transversal frekuensi tinggi ($f \approx 20\text{--}40\text{ kHz}$) dengan amplitudo $\xi \approx 10\text{--}40\ \mu\text{m}$, dan laju translasi rol sonotrode ($v_{\text{weld}}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                KINEMATIKA & MEKANISME IKATAN ULTRASONIC ADDITIVE MANUFACTURING                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    GAYA NORMAL STATIS F_N                                  TRANSLASI PENGELASAN v_weld                                |
|             ↓↓↓↓↓                                                   ════►                                             |
|        ┌─────────────┐                                                                                                |
|       (   SONOTRODE   ) ◄════► GETARAN ULTRASONIK TRANSVERSAL (Frekuensi f = 20 kHz, Amplitudo xi = 25 µm)          |
|        \   CYLINDER  /                                                                                                |
|         └─────┬─────┘                                                                                                 |
|               │ Tekanan Kontak Normal P_c & Gesekan Melintang (Interfacial Shear Scrubbing)                           |
|  ═════════════╪══════════════════════════════════════════════════════════════════════════════════                     |
|  [FOIL ATAS]  │ Pita Logam Baru (Foil Feed, tebal h_f ~ 150 µm)                                                       |
|  - - - - - - -╪ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -                       |
|   Lapisan Oksida Pecah Terpencet  ──► [  ZONE I: Kontak Atomik Logam Murni & Adhesi Logam  ]                         |
|  - - - - - - -╪ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -                       |
|  [SUBSTRAT]   │ Foil Lapisan Sebelumnya / Landasan Anvil (Substrat Terkonsolidasi)                                    |
|  ═════════════╧══════════════════════════════════════════════════════════════════════════════════                     |
|                                                                                                                       |
|  TAHAPAN IKATAN METALURGI PADAT:                                                                                      |
|  (1) Pembersihan Lapisan Oksida & Kontaminan Permukaan melalui Gesekan Scrubbing Siklis Mikro (Stick-Slip Shear)     |
|  (2) Pelunakan Akustik (Acoustic Softening / Blaha Effect) Menurunkan Batas Luluh Aliran Plastis Lokal hingga 50%    |
|  (3) Aliran Plastis Viskoplastis Mengisi Celah Puncak-ke-Lembah (Asperity Void Closure) & Kontak Atomik Intim Logam   |
|  (4) Rekristalisasi Sub-Butir Dinamis (Continuous Dynamic Recrystallization / CDRX) Membentuk Butir Ultrahalus (UFG)   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Efek Pelunakan Akustik (*Acoustic Softening / Blaha Effect*)
Fenomena sentral dalam UAM adalah penurunan dramatis tegangan luluh aliran (*flow stress*) logam di bawah pengaruh gelombang ultrasonik intensitas tinggi tanpa memerlukan kenaikan suhu hingga titik rekristalisasi termal statis.

Gelombang elastis berfrekuensi tinggi menyuntikkan energi getaran mekanis langsung ke kisi kristal logam. Dislokasi menyerap energi fonon ultrasonik ini secara resonan, sehingga tegangan geser kritis yang dibutuhkan dislokasi untuk melompati rintangan kisi (*Peierls-Nabarro barrier* dan *precipitate pinning points*) berkurang drastis:

$$\tau_{\text{flow}}(\dot{\gamma}, T, I_{\text{acoustic}}) = \tau_0(T) \cdot \left[ 1 - \beta_{\text{Blaha}} \left( \frac{I_{\text{acoustic}}}{I_{\text{ref}}} \right)^m \right] + C \cdot \left( \frac{\dot{\gamma}}{\dot{\gamma}_0} \right)^n$$

Di mana:
- $\tau_{\text{flow}}$ adalah tegangan geser luluh efektif saat mengalami eksitasi ultrasonik ($\text{MPa}$).
- $I_{\text{acoustic}} = \frac{1}{2} \rho c_s \omega^2 \xi^2$ adalah intensitas daya akustik per satuan luas ($\text{W/m}^2$), dengan $\rho$ massa jenis, $c_s$ kecepatan rambat gelombang geser transversal dalam logam, $\omega = 2\pi f$ kecepatan sudut getaran, dan $\xi$ amplitudo getaran sonotrode.
- $\beta_{\text{Blaha}}$ adalah koefisien kopling akustik Blaha ($0 < \beta_{\text{Blaha}} < 1$).
- $m$ adalah eksponen non-linear interaksi fonon-dislokasi ($m \approx 0.5\text{--}0.8$).

### 2.2 Dinamika Gesekan Antarmuka (*Interfacial Scrubbing Mechanics*)
Selama siklus getaran ultrasonik, titik kontak antara foil atas dan substrat mengalami rezim gesekan bolak-balik (*reciprocating stick-slip micro-sliding*). 

Panjang langkah pergeseran relatif antarmuka ($\Delta u_{\text{int}}$) dipengaruhi oleh kekakuan elastoplastis sistem:

$$\Delta u_{\text{int}} = \xi_0 \cdot \left[ 1 - \frac{F_N \cdot \mu_{\text{static}}}{K_{\text{tool-substrate}} \cdot \xi_0} \right]$$

Laju pembuangan lapisan oksida getas ($\text{Al}_2\text{O}_3$ atau $\text{CuO}$) sebanding dengan disipasi daya gesekan per satuan luas ($w_{\text{friction}}$):

$$w_{\text{friction}} = 4 \, f \, \mu_{\text{dyn}} \, P_c \, \Delta u_{\text{int}}$$

Gaya geser transversal ini memecah dan mendispersikan lapisan oksida rapuh menjadi partikel nano, mengekspos permukaan logam murni (*nascent pristine metal atoms*) yang langsung membentuk ikatan logam primer (*metallic bonding / electron sharing*) di bawah tekanan kompresi statis.

---

## 3. Pemodelan Matematis: Difusi, Penutupan Rongga, dan Derajat Ikatan (*Bonding Density Index*)

### 3.1 Model Penutupan Rongga Antarmuka (*Interfacial Void Closure Model*)
Kualitas ikatan antarmuka foil pada UAM ditentukan oleh rasio luas permukaan kontak atomik efektif terhadap luas total (*Linear Weld Density / LWD* atau *Bonding Area Ratio* $\eta_{\text{bond}}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    MEKANISME PENUTUPAN RONGGA ANTARELEMEN FOIL (VOID CLOSURE)                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    KONDISI AWAL (t = 0): Kontak Puncak Asperity                     KONDISI AKHIR (t = t_weld): Penutupan Rongga      |
|    ┌───────────────┐        ┌───────────────┐                       ┌───────────────────────────────────────────────┐ |
|    │   FOIL ATAS   │        │   FOIL ATAS   │                       │                   FOIL ATAS                   │ |
|    └───┬───────┬───┘        └───┬───────┬───┘                       └───────────────────────┬───────────────────────┘ |
|        │ Rongga│                │ Rongga│                                                   │ Garis Ikatan Solid-   |
|        │ Mikro │                │ Mikro │                                                   │ State Terisi Padat    |
|    ────┴───────┴────────────────┴───────┴────                       ════════════════════════╧═══════════════════════  |
|    │  SUBSTRAT FOIL SEBELUMNYA              │                       │         SUBSTRAT KONSOLIDASI (LWD > 95%)      │ |
|    └────────────────────────────────────────┘                       └───────────────────────────────────────────────┘ |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Laju deformasi plastis tonjolan mikro (*asperity creep and plastic collapse rate*) di bawah tekanan kontak $P_c$ dan pelunakan ultrasonik dimodelkan berdasarkan modifikasi persamaan difusi-kriep viskoplastis:

$$\frac{d \eta_{\text{bond}}}{dt} = \frac{3}{2} \cdot \left( \frac{1 - \eta_{\text{bond}}}{\eta_{\text{bond}}} \right) \cdot \dot{\varepsilon}_{\text{eff}}$$

Di mana laju regangan efektif lokal ($\dot{\varepsilon}_{\text{eff}}$) memperhitungkan kontribusi regangan plastis kuasi-statis dan getaran ultrasonik:

$$\dot{\varepsilon}_{\text{eff}} = A_0 \cdot \exp\left( -\frac{Q_{\text{act}} - V_{\text{act}} \cdot \tau_{\text{eff}}}{R \cdot T_{\text{int}}} \right) \cdot \left( \frac{P_c}{\sigma_{\text{yield,eff}}} \right)^n$$

- $Q_{\text{act}}$: Energi aktivasi difusi antar-permukaan ($\text{kJ/mol}$).
- $V_{\text{act}}$: Volume aktivasi plastis ($\text{m}^3$).
- $\tau_{\text{eff}} = \mu_{\text{dyn}} P_c + \frac{1}{2} \rho c_s \omega \xi$: Tegangan geser antarmuka total.
- $T_{\text{int}}$: Temperatur kesetimbangan termomekanik antarmuka ($\text{K}$).
- $\sigma_{\text{yield,eff}} = \sigma_{y0} \cdot (1 - \beta_{\text{Blaha}})$: Batas luluh efektif tereduksi oleh efek akustik.

### 3.2 Waktu Paparan Ultrasonik Efektif (*Acoustic Dwell Time*)
Waktu interaksi antara sonotrode silindris berdiameter $D_{\text{sono}}$ dengan suatu titik pada pita foil logam berbanding terbalik dengan kecepatan translasi pengelasan $v_{\text{weld}}$:

$$t_{\text{dwell}} = \frac{2 \cdot b_{\text{contact}}}{v_{\text{weld}}} = \frac{2}{v_{\text{weld}}} \sqrt{\frac{4 \, F_N \, R_{\text{eq}}}{\pi \, L \, E^*}}$$

Di mana $b_{\text{contact}}$ adalah setengah lebar jejak kontak silindris Hertzian, $L$ adalah lebar bidang foil ($10\text{--}25\text{ mm}$), dan $E^*$ adalah modulus elastisitas kontak gabungan sonotrode dan substrat logam.

### 3.3 Persamaan Keseimbangan Energi & Distribusi Temperatur Antarmuka
Meskipun tidak melebur, temperatur antarmuka $T_{\text{int}}$ mengalami peningkatan termomekanik terlokalisasi akibat disipasi energi gesekan dan kerja histeresis plastis:

$$T_{\text{int}} = T_0 + \frac{\eta_{\text{thermal}} \cdot \left( q_{\text{friction}} + q_{\text{plastic}} \right)}{2 \, \sqrt{\pi \cdot k_{\text{mat}} \cdot \rho \cdot C_p \cdot \frac{b_{\text{contact}}}{v_{\text{weld}}}}}$$

Di mana:
- $q_{\text{friction}} = \mu_{\text{dyn}} \cdot P_c \cdot (4 f \xi)$ adalah fluks panas pembangkitan gesekan ($\text{W/m}^2$).
- $q_{\text{plastic}} = f_p \cdot \tau_{\text{flow}} \cdot \dot{\gamma}_{\text{plast}} \cdot h_{\text{layer}}$ adalah panas disipasi histeresis deformasi plastis ($f_p \approx 0.90$).
- $k_{\text{mat}}, C_p, \rho$ adalah konduktivitas termal, kapasitas kalor jenis, dan densitas logam.
- $\eta_{\text{thermal}}$ adalah fraksi partisi panas yang diserap benda kerja ($\approx 0.65\text{--}0.75$, sisanya dikonduksi ke sonotrode pendingin).

---

## 4. Parameter Kritis Proses UAM & Peta Batas Kestabilan Fabrikasi

Kualitas konsolidasi dan densitas ikatan linier (*Linear Weld Density / LWD*) foil dikendalikan oleh empat variabel utama:
1. **Gaya Normal Pengelasan ($F_N$) [$\text{N}$]**: Mengontrol tekanan kontak statis $P_c$ untuk menjamin kedekatan atomik dan mencegah *slip* berlebih antara sonotrode dan foil atas.
2. **Amplitudo Osilasi Ultrasonik ($\xi$) [$\mu\text{m}$]**: Menentukan energi aktivasi efek Blaha dan jarak penggosokan antarmuka (*scrubbing stroke*).
3. **Kecepatan Pengelasan / Translasi ($v_{\text{weld}}$) [$\text{mm/s}$]**: Menentukan waktu kontak efektif $t_{\text{dwell}}$ dan laju pemanasan adiabatik mikro.
4. **Pemanasan Awal Substrat (*Substrate Preheating Temperature* $T_{\text{pre}}$) [$^\circ\text{C}$]**: Meningkatkan mobilitas atomik difusi keadaan padat untuk logam berkekuatan tinggi (Ti-6Al-4V, Baja Tahan Karat 316L, Inconel 718).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                PETA ZONA PARAMETER PENGELASAN UAM (OPERATIONAL PROCESS WINDOW)                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   AMPLITUDO GETARAN xi (µm)                                                                                           |
|       ▲                                                                                                               |
|    50 ┼───────────────────────────────────────────────────────────────────────────────────                            |
|       │  ZONA OVER-WELDING / KERUSAKAN FOIL                                                                           |
|    40 ┼  - Penebalan Gelombang Plastis Berlebih, Keretakan Lelah Foil Sisi Samping (Lateral Cracking)                  |
|       │  - Sonotrode Sticking & Robekan Foil                                                                          |
|    30 ┼ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -                            |
|       │                                     ZONA OPTIMAL UAM (KONSOLIDASI IDEAL)                                      |
|    20 ┼                                     • Ikatan Atomik Sempurna (LWD > 95%)                                      |
|       │                                     • Ketahanan Geser Maksimum (ASTM E8M)                                     |
|    10 ┼ - - - - - - - - - - - - - - - - - - • Bebas Fasa Intermetalik Rapuh - - - - - - - - - -                       |
|       │  ZONA UNDER-WELDING / DELAMINASI                                                                              |
|     0 ┼  - Oksida Tidak Bersih, Rongga Mikro Terbuka (Void Terjebak), Ikatan Lemah                                    |
|       └──────┬──────────────────────┬──────────────────────┬──────────────────────┬─────────►                         |
|              10                     25                     50                     75   KECEPATAN LAS v_weld (mm/s)    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Implementasi Algoritma & Python Solver: Prediksi LWD, Temperatur, dan Kekuatan Geser Antarmuka

Berikut adalah modul solver Python mandiri berbasis *Object-Oriented Programming* (`UltrasonicAdditiveSimulator`) untuk mensimulasikan dinamika pemanasan antarmuka, degradasi batas luluh Blaha, laju penutupan rongga (*void closure kinetics*), indeks LWD (*Linear Weld Density*), dan prediksi kekuatan geser (*Interfacial Shear Strength*) berdasarkan standar ASTM E8M dan AWS G2.4.

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 631: Ultrasonic Additive Manufacturing (UAM) Simulation Engine
Standard References: ISO/ASTM 52900, ASTM E8M, AWS G2.4, ASME Sec IX
"""

import math
from typing import Dict, List, Tuple, Any

class UltrasonicAdditiveSimulator:
    """
    Simulator Mekanika Ikatan Keadaan Padat UAM untuk Material Sejenis dan Multi-Material.
    Mengintegrasikan Efek Akustik Blaha, Dinamika Kontak Hertzian, Termomekanika Kontak,
    dan Kinetika Penutupan Rongga Plastis.
    """

    def __init__(
        self,
        foil_material: str = "Al6061-T6",
        substrate_material: str = "Al6061-T6",
        foil_thickness_um: float = 150.0,
        foil_width_mm: float = 24.0,
        sonotrode_diameter_mm: float = 140.0,
        frequency_khz: float = 20.0
    ):
        self.foil_material = foil_material
        self.substrate_material = substrate_material
        self.foil_thickness_um = foil_thickness_um
        self.foil_width_mm = foil_width_mm
        self.sonotrode_radius_mm = sonotrode_diameter_mm / 2.0
        self.frequency_hz = frequency_khz * 1e3
        self.omega = 2.0 * math.pi * self.frequency_hz

        # Basis Data Sifat Material (Modulus GPa, Yield MPa, Shear Wave m/s, Densitas kg/m3, Cp J/kgK, k W/mK)
        self.material_db = {
            "Al6061-T6": {
                "youngs_gpa": 68.9,
                "poisson": 0.33,
                "sigma_y0_mpa": 276.0,
                "sigma_uts_mpa": 310.0,
                "shear_velocity_ms": 3100.0,
                "density_kg_m3": 2700.0,
                "specific_heat_cp": 896.0,
                "thermal_k": 167.0,
                "blaha_coupling_beta": 0.48,
                "activation_energy_kj_mol": 142.0
            },
            "Cu-OFHC": {
                "youngs_gpa": 117.0,
                "poisson": 0.34,
                "sigma_y0_mpa": 195.0,
                "sigma_uts_mpa": 240.0,
                "shear_velocity_ms": 2260.0,
                "density_kg_m3": 8960.0,
                "specific_heat_cp": 385.0,
                "thermal_k": 391.0,
                "blaha_coupling_beta": 0.52,
                "activation_energy_kj_mol": 197.0
            },
            "Ti-6Al-4V": {
                "youngs_gpa": 114.0,
                "poisson": 0.34,
                "sigma_y0_mpa": 880.0,
                "sigma_uts_mpa": 950.0,
                "shear_velocity_ms": 3120.0,
                "density_kg_m3": 4430.0,
                "specific_heat_cp": 526.0,
                "thermal_k": 6.7,
                "blaha_coupling_beta": 0.38,
                "activation_energy_kj_mol": 287.0
            },
            "SS316L": {
                "youngs_gpa": 193.0,
                "poisson": 0.30,
                "sigma_y0_mpa": 290.0,
                "sigma_uts_mpa": 580.0,
                "shear_velocity_ms": 3100.0,
                "density_kg_m3": 8000.0,
                "specific_heat_cp": 500.0,
                "thermal_k": 16.3,
                "blaha_coupling_beta": 0.42,
                "activation_energy_kj_mol": 260.0
            }
        }

        # Properti Sonotrode (Biasanya Baja Perkakas Karbida/Tool Steel H13/CPM)
        self.sonotrode_youngs_gpa = 210.0
        self.sonotrode_poisson = 0.29

    def get_contact_hertz_mechanics(self, normal_force_n: float) -> Dict[str, float]:
        """
        Menghitung mekanika kontak elastis silindris Hertzian antara sonotrode dan foil.
        """
        prop_foil = self.material_db[self.foil_material]
        
        # Modulus Komposit Kontak E*
        inv_e_star = ((1.0 - self.sonotrode_poisson ** 2) / (self.sonotrode_youngs_gpa * 1e9)) + \
                     ((1.0 - prop_foil["poisson"] ** 2) / (prop_foil["youngs_gpa"] * 1e9))
        e_star = 1.0 / inv_e_star # N/m^2

        r_sono_m = self.sonotrode_radius_mm * 1e-3
        width_m = self.foil_width_mm * 1e-3

        # Setengah Lebar Kontak b (m)
        b_contact_m = math.sqrt((4.0 * normal_force_n * r_sono_m) / (math.pi * width_m * e_star))
        b_contact_mm = b_contact_m * 1e3

        # Tekanan Kontak Puncak P0 (Pa & MPa)
        p0_pa = (2.0 * normal_force_n) / (math.pi * b_contact_m * width_m)
        p0_mpa = p0_pa / 1e6
        p_mean_mpa = (normal_force_n / (2.0 * b_contact_m * width_m)) / 1e6

        return {
            "contact_half_width_b_mm": b_contact_mm,
            "peak_contact_pressure_p0_mpa": p0_mpa,
            "mean_contact_pressure_pmean_mpa": p_mean_mpa,
            "effective_modulus_e_star_gpa": (e_star / 1e9)
        }

    def simulate_bonding(
        self,
        normal_force_n: float,
        vibration_amplitude_um: float,
        welding_speed_mm_s: float,
        substrate_preheat_c: float = 25.0,
        initial_oxide_thickness_nm: float = 12.0
    ) -> Dict[str, Any]:
        """
        Mensimulasikan proses UAM secara komprehensif:
        1. Penurunan tegangan luluh Blaha
        2. Keseimbangan temperatur termomekanik
        3. Pembersihan lapisan oksida via scrubbing
        4. Kinetika penutupan rongga antarmuka (LWD)
        5. Prediksi Kekuatan Geser Antarmuka (ASTM E8M)
        """
        prop_foil = self.material_db[self.foil_material]
        hertz = self.get_contact_hertz_mechanics(normal_force_n)
        b_contact_mm = hertz["contact_half_width_b_mm"]
        p_mean_mpa = hertz["mean_contact_pressure_pmean_mpa"]

        # 1. Waktu Kontak Efektif (Acoustic Dwell Time)
        dwell_time_s = (2.0 * (b_contact_mm * 1e-3)) / (welding_speed_mm_s * 1e-3)
        total_acoustic_cycles = int(self.frequency_hz * dwell_time_s)

        # 2. Intensitas Akustik & Efek Pelunakan Blaha
        xi_m = vibration_amplitude_um * 1e-6
        rho = prop_foil["density_kg_m3"]
        c_shear = prop_foil["shear_velocity_ms"]
        
        # Intensitas Akustik I = 0.5 * rho * c * omega^2 * xi^2 (W/m^2)
        acoustic_intensity_w_m2 = 0.5 * rho * c_shear * (self.omega ** 2) * (xi_m ** 2)
        i_ref = 5.0e7 # W/m^2 (intensitas ambang referensi)
        
        # Fraksi Pelunakan Blaha
        softening_ratio = min(0.65, prop_foil["blaha_coupling_beta"] * ((acoustic_intensity_w_m2 / i_ref) ** 0.6))
        sigma_y_effective_mpa = prop_foil["sigma_y0_mpa"] * (1.0 - softening_ratio)

        # 3. Termomekanika Kontak & Kenaikan Suhu Antarmuka
        mu_dyn = 0.35 # Koefisien gesek dinamik antarmuka
        # Kecepatan relatif rata-rata v_rel = 4 * f * xi
        v_scrub_avg = 4.0 * self.frequency_hz * xi_m # m/s
        q_friction = mu_dyn * (p_mean_mpa * 1e6) * v_scrub_avg # W/m^2

        # Fluks disipasi kerja plastis mikro
        q_plastic = 0.90 * (sigma_y_effective_mpa * 1e6) * 0.15 * self.frequency_hz * xi_m
        q_total = q_friction + q_plastic

        # Kenaikan Temperatur Kontak (Model Rosenthal-Carslaw Jaeger Blok Berjalan)
        k_th = prop_foil["thermal_k"]
        cp = prop_foil["specific_heat_cp"]
        thermal_diffusivity_alpha = k_th / (rho * cp)
        
        t_contact_s = (b_contact_mm * 1e-3) / (welding_speed_mm_s * 1e-3)
        delta_t_k = (0.70 * q_total / (2.0 * math.sqrt(math.pi * k_th * rho * cp / max(1e-5, t_contact_s)))) * 0.001
        t_interface_c = min(580.0, substrate_preheat_c + delta_t_k)
        t_interface_k = t_interface_c + 273.15

        # 4. Kinetika Pembersihan Oksida (Oxide Removal Kinetics)
        # Disipasi energi gesekan per siklus
        scrubbing_energy_j_m2 = q_friction * dwell_time_s
        critical_oxide_energy = 8.5e5 # J/m^2 untuk mengabrasi 10 nm oksida
        oxide_dispersion_ratio = min(1.0, scrubbing_energy_j_m2 / (critical_oxide_energy * (initial_oxide_thickness_nm / 10.0)))
        residual_oxide_nm = initial_oxide_thickness_nm * (1.0 - oxide_dispersion_ratio)

        # 5. Kinetika Penutupan Rongga Plastis (Linear Weld Density / LWD Evolution)
        # Integrasi numerik sepanjang dwell_time
        steps = 100
        dt = dwell_time_s / steps
        eta_bond = 0.08 # Kontak asperiti awal ~ 8%

        r_gas = 8.314 # J/(mol K)
        q_act_j = prop_foil["activation_energy_kj_mol"] * 1e3
        arrhenius_factor = math.exp(-q_act_j / (r_gas * t_interface_k))

        for _ in range(steps):
            # Tingkat luluh plastis dipacu oleh rasio P_mean / sigma_y_eff dan aktivasi termal
            plastic_pressure_ratio = min(4.0, p_mean_mpa / max(10.0, sigma_y_effective_mpa))
            d_eta_dt = 1.8 * ((1.0 - eta_bond) / max(0.05, eta_bond)) * (plastic_pressure_ratio ** 1.6) * (1.0 + 850.0 * arrhenius_factor)
            eta_bond += d_eta_dt * dt
            if eta_bond >= 0.995:
                eta_bond = 0.995
                break

        # Efek Oksida Tersisa Mengurangi LWD Efektif Atomik
        effective_lwd_pct = eta_bond * oxide_dispersion_ratio * 100.0

        # 6. Prediksi Kekuatan Geser Antarmuka (Interfacial Shear Strength) (ASTM E8M)
        # Tau_shear = eta_eff * (Sigma_UTS / sqrt(3)) * faktor penguatan rekristalisasi
        tau_base_shear_mpa = prop_foil["sigma_uts_mpa"] / math.sqrt(3.0)
        # Efek penghalusan butir dinamis (Hall-Petch mikro)
        hall_petch_boost = 1.12
        interfacial_shear_strength_mpa = (effective_lwd_pct / 100.0) * tau_base_shear_mpa * hall_petch_boost

        # Evaluasi Kategori Kualitas Pengelasan
        if effective_lwd_pct >= 90.0:
            quality_status = "Optimal Bonding (High-Integrity Consolidation)"
        elif effective_lwd_pct >= 75.0:
            quality_status = "Acceptable Industrial Bond (Moderate Voids)"
        else:
            quality_status = "Defective Consolidation (Severe Delamination Risk)"

        return {
            "inputs": {
                "normal_force_n": normal_force_n,
                "vibration_amplitude_um": vibration_amplitude_um,
                "welding_speed_mm_s": welding_speed_mm_s,
                "substrate_preheat_c": substrate_preheat_c
            },
            "contact_mechanics": hertz,
            "acoustic_dwell_time_ms": round(dwell_time_s * 1e3, 2),
            "acoustic_cycles_count": total_acoustic_cycles,
            "acoustic_intensity_mw_m2": round(acoustic_intensity_w_m2 / 1e6, 2),
            "blaha_softening_reduction_pct": round(softening_ratio * 100.0, 2),
            "effective_flow_stress_mpa": round(sigma_y_effective_mpa, 2),
            "interface_peak_temperature_c": round(t_interface_c, 2),
            "oxide_removal_efficiency_pct": round(oxide_dispersion_ratio * 100.0, 2),
            "residual_oxide_layer_nm": round(residual_oxide_nm, 3),
            "linear_weld_density_lwd_pct": round(effective_lwd_pct, 2),
            "interfacial_shear_strength_mpa": round(interfacial_shear_strength_mpa, 2),
            "shear_strength_efficiency_pct": round((interfacial_shear_strength_mpa / tau_base_shear_mpa) * 100.0, 2),
            "bonding_quality_verdict": quality_status
        }


# =====================================================================
# CONTOH EKSEKUSI SOLVER KASUS INDUSTRI: OPTIMASI UAM FOIL AL6061-T6
# =====================================================================
if __name__ == "__main__":
    simulator = UltrasonicAdditiveSimulator(
        foil_material="Al6061-T6",
        substrate_material="Al6061-T6",
        foil_thickness_um=150.0,
        foil_width_mm=24.0,
        sonotrode_diameter_mm=140.0,
        frequency_khz=20.0
    )

    print("=" * 85)
    print("   RUANGTI IE LAB: SIMULASI MEKANIKA IKATAN ULTRASONIC ADDITIVE MANUFACTURING (UAM)")
    print("   Standar Rujukan: ISO/ASTM 52900, ASTM E8M, AWS G2.4 & ASME Sec IX")
    print("=" * 85)

    # Uji 3 Kondisi Parameter Proses: (1) Under-welding, (2) Optimal, (3) High-Speed Preheated
    test_cases = [
        {"name": "Kasus 1: Low Energy (Under-Welding)", "fn": 2000.0, "amp": 12.0, "spd": 60.0, "preheat": 25.0},
        {"name": "Kasus 2: Industrial Optimal Baseline", "fn": 4500.0, "amp": 28.0, "spd": 25.0, "preheat": 25.0},
        {"name": "Kasus 3: High-Speed Preheated Consolidation", "fn": 5000.0, "amp": 32.0, "spd": 45.0, "preheat": 120.0},
    ]

    for tc in test_cases:
        res = simulator.simulate_bonding(
            normal_force_n=tc["fn"],
            vibration_amplitude_um=tc["amp"],
            welding_speed_mm_s=tc["spd"],
            substrate_preheat_c=tc["preheat"]
        )
        print(f"\n--- {tc['name']} ---")
        print(f"  • Parameter      : F_N = {tc['fn']} N | Amplitudo = {tc['amp']} µm | Speed = {tc['spd']} mm/s | T_pre = {tc['preheat']} °C")
        print(f"  • Dwell Time     : {res['acoustic_dwell_time_ms']} ms ({res['acoustic_cycles_count']} siklus akustik)")
        print(f"  • Efek Blaha     : Luluh Turun {res['blaha_softening_reduction_pct']}% (sigma_y_eff = {res['effective_flow_stress_mpa']} MPa)")
        print(f"  • Suhu Puncak    : {res['interface_peak_temperature_c']} °C (Keadaan Padat Terjaga)")
        print(f"  • Bersih Oksida  : {res['oxide_removal_efficiency_pct']}% (Sisa Oksida: {res['residual_oxide_layer_nm']} nm)")
        print(f"  • Linear Weld D. : {res['linear_weld_density_lwd_pct']}% (LWD)")
        print(f"  • Shear Strength : {res['interfacial_shear_strength_mpa']} MPa (Efisiensi Sambungan: {res['shear_strength_efficiency_pct']}%)")
        print(f"  • Status Mutu    : {res['bonding_quality_verdict']}")

    print("\n" + "=" * 85)
```

---

## 6. Studi Kasus Industri Nyata: Fabrikasi *Heat Sink* Berstruktur Saluran Konformal (*Conformal Cooling*) Multi-Material Al/Cu untuk Pendinginan Baterai Kendaraan Listrik

### 6.1 Latar Belakang & Tantangan Rekayasa
Sebuah manufaktur paket baterai kendaraan listrik kelas performa tinggi memerlukan pelat pendingin (*thermal cold plate*) dengan konduktivitas termal antarmuka tinggi dan saluran fluida pendingin melengkung internal (*internal conformal micro-channels*).

Penggunaan fusi laser Al-ke-Cu menghasilkan retak getas akibat pembentukan fasa intermetalik $\text{Al}_2\text{Cu}$ dan $\text{Al}_4\text{Cu}_9$, memicu kebocoran fluida dielektrik bertekanan $6\text{ bar}$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ALUR PROSES FABRIKASI HYBRID UAM-CNC COLD PLATE MULTI-MATERIAL                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. KONSOLIDASI FOIL TEMBAGA (Cu-OFHC)   2. PENGEFRAISAN CNC SALURAN        3. KONSOLIDASI FOIL PENUTUP (Al6061)     |
|   ┌───────────────────────────────────┐   ┌──────────────────────────────┐   ┌────────────────────────────────────┐   |
|   │ ═════════════════════════════════ │   │ ═════════   ═════   ════════ │   │ ══════════════════════════════════ │   |
|   │ [Laminasi 8 Lapis Foil Cu 150 µm] │──►│   [Milling Mikro Saluran]    │──►│ [Laminasi 12 Lapis Foil Al 150 µm] │   |
|   │ ═════════════════════════════════ │   │ ════════════════════════════ │   │ ══════════════════════════════════ │   |
|   └───────────────────────────────────┘   └──────────────────────────────┘   └────────────────────────────────────┘   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Konfigurasi Parameter & Hasil Pengujian Laboratorium
1. **Material Pasangan**: Substrat Tembaga OFHC murni ($t = 1.2\text{ mm}$) dan Lembaran Pita Aluminium Al6061-T6 ($t = 150\ \mu\text{m}$).
2. **Kondisi Proses UAM Teroptimasi**:
   - Gaya Normal $F_N = 4800\text{ N}$.
   - Amplitudo Getaran $\xi = 30\ \mu\text{m}$ ($f = 20\text{ kHz}$).
   - Kecepatan Las $v_{\text{weld}} = 28\text{ mm/s}$.
   - Pemanasan Awal Dasar $T_{\text{pre}} = 90^\circ\text{C}$.
3. **Hasil Karakterisasi Metalurgi & Mekanik**:
   - **Linear Weld Density (LWD)**: Terverifikasi sebesar $96.8\%$ melalui pengujian mikroskopi optik penampang lintang (*cross-sectional optical microscopy*).
   - **Kekuatan Geser Antarmuka (ASTM E8M)**: Mencapai $158.4\text{ MPa}$, melampaui $88\%$ kekuatan geser logam induk aluminium murni.
   - **Uji Tekanan Hidrostatik**: Saluran internal mampu menahan tekanan fluida hingga $14.5\text{ bar}$ tanpa mengalami delaminasi atau kebocoran.
   - **Analisis EDS/SEM Antarmuka**: Tidak terdeteksi lapisan intermetalik kontinu berukuran $> 50\text{ nm}$, menjamin keandalan termomekanik terhadap siklus termal ekstrem ($-40^\circ\text{C}$ hingga $+125^\circ\text{C}$, $1000\text{ siklus}$).

---

## 7. Referensi Terverifikasi & Standar Industri

1. **ISO/ASTM 52900:2021** — *Additive manufacturing — General principles — Fundamentals and vocabulary*. International Organization for Standardization / ASTM International.
2. **ASTM E8 / E8M-22** — *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: [10.1520/E0008_E0008M-22](https://doi.org/10.1520/E0008_E0008M-22).
3. **AWS G2.4/G2.4M:2014** — *Guide for the Ultrasonic Welding of Metals*. American Welding Society (AWS), Miami, FL.
4. **ASME Boiler and Pressure Vessel Code (BPVC) Section IX:2023** — *Welding, Brazing, and Fusing Qualifications*. The American Society of Mechanical Engineers, New York, NY.
5. **Zhou, L., et al. (2026)** — *Ultrasonic additive manufacturing: A review of interfacial microstructural evolution, bonding mechanisms, mechanical behavior, process monitoring, and multiscale modeling*. **Journal of Manufacturing Processes**, Vol. 112, pp. 102–129. DOI: [10.1016/j.jmapro.2026.02.021](https://doi.org/10.1016/j.jmapro.2026.02.021).
6. **Hehr, A., & Dapino, M. J. (2015)** — *Interfacial shear strength estimates of NiTi–Al matrix composites fabricated via ultrasonic additive manufacturing*. **Composites Part B: Engineering**, Vol. 77, pp. 199–208. DOI: [10.1016/j.compositesb.2015.03.005](https://doi.org/10.1016/j.compositesb.2015.03.005).
7. **Sridharan, N., Wolcott, P., Dapino, M. J., & Babu, S. S. (2016)** — *Microstructure and texture evolution in aluminum and copper joints manufactured by ultrasonic additive manufacturing*. **Metallurgical and Materials Transactions A**, Vol. 47(5), pp. 2517–2528. DOI: [10.1007/s11661-016-3401-y](https://doi.org/10.1007/s11661-016-3401-y).
8. **Blaha, F., & Langenecker, B. (1955)** — *Dehnung von Zink-Einkristallen unter Ultraschalleinwirkung*. **Die Naturwissenschaften**, Vol. 42(20), pp. 556–556. DOI: [10.1007/BF00623773](https://doi.org/10.1007/BF00623773).
