# Modul 636: Direct Squeeze Casting & Liquid Metal Forging: Termomekanika Pembekuan Bertekanan Tinggi (High Pressure Solidification), Eliminasi Porositas Gas/Penyusutan, Penghalusan Struktur Mikro Dendritik (SDAS), dan Rekayasa Komponen Struktural Paduan Ringan (ASTM B85, NADCA & ASM Handbook Vol. 15)

## 1. Pengantar & Konteks Industri: Pengecoran Bertekanan Langsung (*Direct Squeeze Casting / Liquid Metal Forging*)

*Direct Squeeze Casting* (juga dikenal dalam literatur metalurgi sebagai *Liquid Metal Forging* atau *Extrusion Casting*) adalah proses manufaktur hibrida mutakhir yang mengintegrasikan fleksibilitas pembentukan bentuk rongga rumit dari pengecoran (*casting*) dengan keunggulan integritas mekanis dan densitas struktur mikro bebas cacat dari penempaan (*forging*). Dalam proses ini, logam cair dituangkan secara presisi dengan turbulensi rendah ke dalam rongga cetakan baja perkakas yang dipanaskan (*preheated die*), kemudian ditutup dan ditekan secara langsung menggunakan penumbuk hidrolik (*hydraulic punch/ram*) dengan tekanan isostatik/uniaksial masif ($P = 50 - 150\text{ MPa}$) yang dipertahankan secara kontinyu di seluruh siklus pembekuan (*isothermal solidification under high pressure*).

Pemberlakuan tekanan tinggi langsung pada logam yang sedang bertransisi dari fase cair ke padat memberikan keuntungan metalurgi yang tidak dapat dicapai oleh metode pengecoran konvensional seperti *High Pressure Die Casting* (HPDC) atau *Gravity Die Casting*:
1. **Eliminasi Celah Udara Antarmuka (*Air Gap Suppression*)**: Tekanan hidrostatis meniadakan pembentukan celah isolasi termal udara (*die-casting air gap*) akibat penyusutan termal logam, melipatgandakan koefisien perpindahan panas antarmuka ($h_{int}$) hingga $5000 - 8000\ \text{W/(m}^2\cdot\text{K)}$ (dibandingkan $500 - 1000\ \text{W/(m}^2\cdot\text{K)}$ pada pengecoran gravitasi).
2. **Penghapusan Porositas Gas & Penyusutan (*Zero Shrinkage & Gas Porosity*)**: Tekanan tinggi memaksa gas terlarut (seperti Hidrogen pada aluminium) tetap berada dalam larutan padat (*solid solution*) dan mengkompensasi penyusutan volume pembekuan secara mekanis (*plastic volumetric feeding*).
3. **Kemampuan Perlakuan Panas Penuh (*Full T6 Heat Treatability*)**: Tanpa adanya kantong gas terperangkap (*entrapped gas porosity*), komponen *squeeze cast* dapat menjalani *solution heat treatment* dan *artificial aging* (T6) pada temperatur tinggi ($520 - 540\ ^\circ\text{C}$) tanpa mengalami pembengkakan permukaan (*surface blistering*).
4. **Penghalusan Struktur Butir & Dendrit (*Grain Refinement & SDAS Reduction*)**: Laju pendinginan super cepat memangkas jarak cabang dendrit sekunder (*Secondary Dendrite Arm Spacing / SDAS*) dari $35 - 50\ \mu\text{m}$ menjadi $10 - 15\ \mu\text{m}$, meningkatkan kekuatan tarik dan keuletan secara simultan.

Aplikasi industri vital mencakup:
- **Otomotif & Transportasi Kinerja Tinggi**: *Steering knuckles*, lengan kendali suspensi (*suspension control arms*), kaliper rem monoblok, piston mesin diesel berbahan komposit matriks logam (MMC/Al-SiC), dan braket mesin struktural.
- **Dirgantara & Pertahanan**: Rangka penyangga avionik, rumah roda pendarat (*landing gear brackets*), dan silinder hidrolik bertekanan tinggi dari paduan Al-Zn-Mg-Cu (AA7075) dan Al-Cu (AA2014 / AA2024).
- **Energi & Industri Berat**: *Impeller* kompresor gas dan roda gigi cacing perunggu berkekuatan ultra tinggi.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                             ARSITEKTUR & SIKLUS PROSES DIRECT SQUEEZE CASTING (4 TAHAPAN)                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    1. PENUANGAN LOGAM CAIR         2. PENUTUPAN & APLIKASI TEKANAN  3. PEMBEKUAN BERTEKANAN TINGGI  4. EJEKSI KOMPONEN        |
|       (Liquid Metal Dosing)           (Die Closure & Pressurization)   (Solidification under 100 MPa)  (Part Ejection)        |
|                                                                                                                       |
|         Sendok Tuang Otomatis             Penumbuk Atas (Upper Punch)       Penumbuk Atas                   Penumbuk Naik     |
|             \   Logam                     ┌─────────────────────────┐       ┌─────────────────────────┐       ┌─────────────┐ |
|              \  Cair                      │    Silinder Hidrolik    │       │ Tekanan Masif (100 MPa) │       │             │ |
|               ▼                           └────────────┬────────────┘       └────────────┬────────────┘       └─────────────┘ |
|         ┌──────────┐                                   │                                 │                            ▲       |
|         │          │                                   ▼                                 ▼                            │       |
|       ┌─┴──────────┴─┐                   ┌─────────────────────────┐       ┌─────────────────────────┐                │       |
|       │ Cetakan Bawah│                   │      Punch Masuk        │       │   Kontak Termal Kuat    │                        |
|       │ (Lower Die)  │                   ├─────────────────────────┤       ├─────────────────────────┤        ┌─────────────┐ |
|       │ Dipanaskan   │                   │ Logam Tertekan Penuh    │       │ Pembekuan Sangat Cepat  │        │ Komponen T6 │ |
|       │ 200 - 300°C  │                   │ Mengisi Rongga Mikro    │       │ Struktur Mikro Halus    │        │ Siap Heat-Tr│ |
|       └──────────────┘                   └─────────────────────────┘       └─────────────────────────┘        └──────┬──────┘ |
|                                          ┌─────────────────────────┐       ┌─────────────────────────┐               │        |
|                                          │      Lower Die Block    │       │      Lower Die Block    │        ┌──────┴──────┐ |
|                                          └─────────────────────────┘       └─────────────────────────┘        │ Pin Ejektor │ |
|                                                                                                               └─────────────┘ |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar internasional, pedoman teknis pengecoran bertekanan, dan metodologi pengujian yang mengatur proses ini meliputi:
- **ASTM B85 / B85M**: *Standard Specification for Aluminum-Alloy Die Castings*.
- **NADCA (North American Die Casting Association) Standards**: *Product Specification Standards for Die Castings (High Integrity Castings)*.
- **ASM Handbook Volume 15**: *Casting — Squeeze Casting and Liquid Metal Forging Processes*.
- **ISO 8062-3**: *Geometrical Product Specifications (GPS) — Dimensional and geometrical tolerances for moulded parts*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ASTM E505**: *Standard Reference Radiographs for Inspection of Aluminum and Magnesium Die Castings*.

---

## 2. Termomekanika Pembekuan Bertekanan Tinggi & Persamaan Clausius-Clapeyron

Ketika tekanan hidrostatis tinggi ($P$) diterapkan pada logam yang sedang membeku, titik kesetimbangan termodinamika mengalami pergeseran fundamental yang dijelaskan oleh relasi Clausius-Clapeyron:

$$\frac{dT_m}{dP} = \frac{T_m \cdot \Delta V_m}{\Delta H_m} = \frac{T_m \cdot \left( \frac{1}{\rho_s} - \frac{1}{\rho_l} \right)}{\Delta H_m}$$

Di mana:
- $T_m$ = Temperatur lebur kesetimbangan pada tekanan atmosfer, $[\text{K}]$.
- $P$ = Tekanan hidrostatis yang diterapkan, $[\text{Pa}]$.
- $\Delta V_m = V_l - V_s$ = Perubahan volume molar saat peleburan (karena kebanyakan logam menyusut saat memadat, $\rho_s > \rho_l$, maka $\Delta V_m > 0$), $[\text{m}^3/\text{kg}]$.
- $\Delta H_m = L_f$ = Panas laten peleburan (*latent heat of fusion*), $[\text{J/kg}]$.
- $\rho_s, \rho_l$ = Densitas fase padat dan cair pada titik lebur, $[\text{kg/m}^3]$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                   PERUBAHAN DIAGRAM FASE & PERPINDAHAN PANAS AKIBAT TEKANAN SQUEEZE CASTING                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    DIAGRAM KESETIMBANGAN TERMAL LOGAM (CLAUSIUS-CLAPEYRON)     KOEFISIEN PERPINDAHAN PANAS ANTARMUKA (h_int)          |
|                                                                                                                       |
|      Temperatur (T)                                              Koefisien h_int [W/(m^2*K)]                          |
|         ▲                                                           ▲                                                 |
|         │                         Kurva Likuidus Bertekanan         │ 8000 ┼───────────────────────┐                  |
|         │                          (P = 100 MPa)                    │      │ Squeeze Casting       │                  |
|         │                        /                                  │ 6000 ┼ (P = 100 MPa)         │                  |
|  T_m(P) ┼───────────────────────/                                   │      │ Tekanan Menghilangkan │                  |
|         │                      /  Kurva Likuidus Atmosfer           │ 4000 ┼ Celah Udara (Air Gap) │                  |
|  T_m(0) ┼─────────────────────/  (P = 1 atm)                        │      │                       │  Pengecoran      |
|         │   Delta T_m = +6 s/d 12 °C                                │ 2000 ┼                       │  Gravitasi       |
|         │   Supercooling Efektif Meningkat Masif                    │      │                       ├──┐ (Air Gap)     |
|         │   -> Nukleasi Butir Heterogen Homogen                     │    0 ┼───────────────────────┴──┴─────────►     |
|         └───────────────────────────────────────────────►           │      0         2         4         6  Waktu (s) |
|                       Fraksi Padat (f_s)                                                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Untuk paduan aluminium komersial seperti A356 ($\text{Al-7Si-0.3Mg}$), kenaikan titik lebur efektif dihitung:

$$\Delta T_m \approx \left( \frac{887\text{ K} \times (3.85 \times 10^{-5}\text{ m}^3/\text{kg})}{398 \times 10^3\text{ J/kg}} \right) \times 100 \times 10^6\text{ Pa} \approx +8.58\ ^\circ\text{C}$$

Peningkatan $T_m$ instan ini menghasilkan derajat lewat-dingin termodinamika (*thermodynamic undercooling* $\Delta T_u = T_m(P) - T_{actual}$) yang memicu laju nukleasi kristal heterogen secara serentak di seluruh volume cairan (*bulk equiaxed nucleation*), mencegah terbentuknya struktur butir kolumnar kasar (*columnar dendritic zone*).

### 2.1 Perpindahan Panas Transien Tanpa Celah Udara (*Air Gap Suppression*)
Pada pengecoran gravitasi, logam yang mendingin menyusut dan terpisah dari dinding cetakan, membentuk celah udara isolatif mikro ($20 - 100\ \mu\text{m}$) dengan konduktivitas termal udara yang sangat rendah ($k_{air} \approx 0.03\ \text{W/(m}\cdot\text{K)}$).

Dalam *Direct Squeeze Casting*, tekanan $P \ge 50\text{ MPa}$ melebihi kekuatan luluh panas logam ($P > \sigma_y(T)$), sehingga material mengalami deformasi plastis mikro yang menempel rapat ke permukaan cetakan. Fluks panas antarmuka ($q''$) dinyatakan:

$$q''(t) = h_{int}(P) \cdot \left( T_{surface}(t) - T_{die}(t) \right)$$

Di mana koefisien perpindahan panas antarmuka bergantung pada tekanan kontak efektif:

$$h_{int}(P) = h_0 + \alpha \cdot P^\beta$$

Untuk cetakan baja perkakas H13 dan paduan aluminium: $h_0 \approx 800\ \text{W/(m}^2\cdot\text{K)}$, $\alpha \approx 45.0$, $\beta \approx 0.65$ dengan tekanan $P$ dalam $\text{MPa}$, menghasilkan $h_{int} \approx 5000 - 7500\ \text{W/(m}^2\cdot\text{K)}$.

---

## 3. Kinetika Struktur Mikro: Secondary Dendrite Arm Spacing (SDAS) & Densifikasi

Laju pendinginan lokal yang sangat tinggi ($\dot{T} = \frac{\partial T}{\partial t} = G \cdot R$) secara langsung mengendalikan ukuran morfologi dendritik. *Secondary Dendrite Arm Spacing* (SDAS, dinotasikan $\lambda_2$) merupakan parameter kunci yang menentukan sifat mekanis dan keuletan paduan cor.

### 3.1 Model Teoretis SDAS (Model Koalesensi Flemings-Brody)
Pertumbuhan cabang dendrit sekunder dikendalikan oleh difusi solut dan pematangan Ostwald (*Ostwald ripening/coarsening*). Model analitis Flemings merumuskan:

$$\lambda_2 = K_{sdas} \cdot t_f^{1/3} = K_{sdas} \cdot \left( \frac{\Delta T_0}{\dot{T}} \right)^{1/3} = C \cdot \dot{T}^{-m}$$

Di mana:
- $\lambda_2$ = Jarak antar cabang dendrit sekunder (*SDAS*), $[\mu\text{m}]$.
- $t_f$ = Waktu pembekuan lokal (*local solidification time*), rentang antara temperatur likuidus ($T_{liq}$) dan solidus ($T_{sol}$), $[\text{s}]$.
- $\Delta T_0 = T_{liq} - T_{sol}$ = Rentang suhu pembekuan (*freezing range*), $[\text{K}]$.
- $\dot{T}$ = Laju pendinginan lokal (*cooling rate*), $[\text{K/s}]$.
- $K_{sdas}, C, m$ = Konstanta metalurgi material ($m \approx 0.33$ untuk aluminium A356/A380, $C \approx 45 - 55$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PERBANDINGAN MORFOLOGI DENDRITIK DAN DISTRIBUSI CACAT CORAN INDUSTRI                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    A. HIGH PRESSURE DIE CASTING (HPDC)                   B. DIRECT SQUEEZE CASTING (100 MPa)                          |
|                                                                                                                       |
|       Struktur Dendritik Kasar & Porositas Udara            Struktur Seluler Ekiax Sangat Halus & Padat Bebas Pori    |
|                                                                                                                       |
|         │◄───────── SDAS λ_2 ≈ 35 - 50 µm ────────►│          │◄──── SDAS λ_2 ≈ 10 - 14 µm ───►│                      |
|                                                                                                                       |
|           ┌──┐     ┌──┐     ┌──┐                                 ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐                          |
|           │  │     │  │ (Porositas)                              │ │ │ │ │ │ │ │ │ │ │ │ │ │                          |
|           │  │  (O)│  │     (O)                                  │ │ │ │ │ │ │ │ │ │ │ │ │ │ (Bebas Rongga Gas)       |
|       ────┴──┴─────┴──┴─────┴──┴─────                        ────┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴───                         |
|           │  │     │  │     │  │                                 │ │ │ │ │ │ │ │ │ │ │ │ │ │                          |
|           └──┘     └──┘     └──┘                                 └─┘ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘                          |
|                                                                                                                       |
|       • Porositas Total: 1.5 - 3.5% (Gas + Shrinkage)        • Porositas Total: < 0.05% (Kerapatan Teoretis 99.95%)   |
|       • Perlakuan Panas: Tidak Bisa T6 (Blistering)          • Perlakuan Panas: Sempurna T6 (Full Precipitation)      |
|       • Kekuatan Tarik (UTS): 220 - 250 MPa                  • Kekuatan Tarik (UTS): 340 - 370 MPa (+55%)             |
|       • Keuletan (Elongasi): 1.5 - 3.0%                      • Keuletan (Elongasi): 9.0 - 12.5% (+350%)               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.2 Tabel Komparasi Karakteristik Metalurgi Berbagai Proses Pengecoran Aluminium

| Parameter Proses | Sand Casting | Permanent Mold (Gravity) | High Pressure Die Casting (HPDC) | Direct Squeeze Casting |
| :--- | :---: | :---: | :---: | :---: |
| **Tekanan Pembekuan ($P$)** | $0.1\text{ MPa}$ (Gravitasi) | $0.1\text{ MPa}$ (Gravitasi) | $30 - 70\text{ MPa}$ (Intensifikasi) | $\mathbf{50 - 150\text{ MPa}}$ (Langsung) |
| **Koefisien $h_{int}$ ($\text{W/m}^2\text{K}$)** | $200 - 400$ | $800 - 1500$ | $1500 - 3000$ | $\mathbf{5000 - 8000}$ |
| **Laju Pendinginan $\dot{T}$ ($^\circ\text{C/s}$)** | $0.5 - 2.0$ | $5 - 15$ | $20 - 50$ | $\mathbf{60 - 150}$ |
| **SDAS Rata-rata ($\lambda_2$, $\mu\text{m}$)** | $60 - 90$ | $30 - 45$ | $25 - 40$ | $\mathbf{10 - 15}$ |
| **Kerapatan Relatif ($\%$)** | $97.0 - 98.5\%$ | $98.5 - 99.2\%$ | $96.5 - 98.2\%$ | $\mathbf{99.90 - 99.98\%}$ |
| **Toleransi Heat Treatment T6** | Ya | Ya | Tidak (Blistering) | **Sangat Baik (Optimal T6)** |

---

## 4. Perlakuan Panas T6, Termomekanika Penguatan Presipitasi & Integritas Produk

Salah satu keunggulan terbesar *Direct Squeeze Casting* dibandingkan HPDC konvensional adalah kemampuannya menjalani siklus perlakuan panas penuh **T6 (*Solution Treatment + Quenching + Artificial Aging*)**. Pada HPDC, kantong gas udara/uap minyak cetakan yang terperangkap bertekanan tinggi akan berekspansi secara eksplosif saat dipanaskan pada temperatur pelarutan ($535 - 540\ ^\circ\text{C}$), menimbulkan cacat gelembung permukaan (*blistering*) dan distorsi dimensi parah.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               SIKLUS PERLAKUAN PANAS T6 KOMPONEN SQUEEZE CAST A356                                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Temperatur (°C)                                                                                                    |
|      ▲                                                                                                                |
|  540 ┼─────────┌──────────────────────────┐ (Solution Treatment 535°C, 4-6 jam)                                       |
|      │         │ Larutan Padat Homogen    │                                                                           |
|      │         │ Mg2Si Larut Sempurna     │                                                                           |
|      │         │ Morfologi Eutektik Si    │                                                                           |
|      │         │ Mengalami Sferoidisasi   │                                                                           |
|  200 ┼─────────┼──────────────────────────┴──┐                               ┌──────────────────────┐                 |
|      │         │                             │                               │ Artificial Aging     │                 |
|      │         │                             │ Quenching Air                 │ 155-165°C, 4-8 jam   │                 |
|      │         │                             │ Cepat (60-80°C)               │ Presipitasi β''      │                 |
|   25 ┼─────────┴─────────────────────────────┴───────────────────────────────┴──────────────────────┴───────►         |
|      0         1                          6  6.1                             7                     15  Waktu (jam)    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Mekanisme Penguatan Presipitasi Paduan Al-Si-Mg ($\text{Mg}_2\text{Si}$)
Selama proses penuaan buatan (*artificial aging*), fasa presipitat metastabil mengalami urutan transformasi:

$$\text{Larutan Padat Lewat Jenuh (SSSS)} \longrightarrow \text{Zona GP (Guinier-Preston)} \longrightarrow \beta'' \text{ (Needle-like } \text{Mg}_5\text{Si}_6) \longrightarrow \beta' \text{ (Rod-like)} \longrightarrow \beta \text{ (Equiaxed } \text{Mg}_2\text{Si})$$

Fasa jarum $\beta''$ berukuran nanometrik ($4\times 4\times 50\text{ nm}$) memberikan interaksi penguncian dislokasi Orowan (*Orowan dislocation looping*) maksimum, menghasilkan peningkatan tegangan luluh ($\Delta \sigma_{yield}$) yang dirumuskan:

$$\Delta \sigma_{Orowan} = M_T \cdot \frac{0.4 \cdot G_{Al} \cdot b}{\pi \cdot \sqrt{1 - \nu}} \cdot \frac{\ln(2\bar{r}/r_0)}{\lambda_p - 2\bar{r}}$$

Di mana:
- $M_T$ = Faktor orientasi Taylor ($M_T \approx 3.06$ untuk polikristal Al FCC).
- $G_{Al}$ = Modulus geser matriks aluminium ($26.5\text{ GPa}$).
- $b$ = Vektor Burgers dislokasi ($0.286\text{ nm}$).
- $\nu$ = Rasio Poisson ($0.33$).
- $\bar{r}$ = Radius rata-rata partikel presipitat $\beta''$.
- $\lambda_p$ = Jarak antar partikel presipitat (*inter-precipitate spacing*).

---

## 5. Implementasi Python: Simulator Termomekanika Squeeze Casting, Clausius-Clapeyron, SDAS & Prediksi Sifat Tarik

Berikut adalah program Python ilmiah terpadu untuk memodelkan dinamika pembekuan bertekanan tinggi, menghitung pergeseran kesetimbangan Clausius-Clapeyron, memprediksi laju pendinginan dan jarak dendrit SDAS, serta mengevaluasi sifat mekanis pasca-perlakuan panas T6:

```python
"""
RuangTI - Industrial Engineering Knowledge Base Engine
Modul 636: Direct Squeeze Casting & High-Pressure Solidification Modeling
Standard Compliance: ASTM B85, NADCA Standards, ASM Handbook Vol. 15
"""

import math
from typing import Dict, List, Tuple

class DirectSqueezeCastingSimulator:
    def __init__(
        self,
        alloy_name: str = "A356.0",
        applied_pressure_mpa: float = 100.0,
        casting_thickness_mm: float = 15.0,
        die_preheat_temp_c: float = 250.0,
        pour_temperature_c: float = 710.0,
        die_material: str = "H13 Tool Steel"
    ):
        self.alloy = alloy_name
        self.pressure_mpa = applied_pressure_mpa
        self.pressure_pa = applied_pressure_mpa * 1e6
        self.thickness_m = casting_thickness_mm * 1e-3
        self.t_die = die_preheat_temp_c
        self.t_pour = pour_temperature_c
        self.die_mat = die_material

        # Sifat Termofisik Paduan Aluminium A356 (Al-7Si-0.3Mg)
        self.rho_liquid = 2450.0      # kg/m^3
        self.rho_solid = 2680.0       # kg/m^3
        self.latent_heat = 398.0e3    # J/kg
        self.cp_liquid = 1050.0       # J/(kg*K)
        self.cp_solid = 963.0         # J/(kg*K)
        self.k_solid = 160.0          # W/(m*K)
        self.t_liquidus_0 = 615.0     # °C pada 1 atm
        self.t_solidus_0 = 557.0      # °C pada 1 atm

    def calculate_clausius_clapeyron_shift(self) -> Dict[str, float]:
        """
        Menghitung pergeseran temperatur likuidus dan solidus akibat tekanan hidrostatis tinggi.
        dT/dP = (T_m * Delta V) / Delta H
        """
        # Perubahan volume spesifik saat peleburan (m^3/kg)
        delta_v = (1.0 / self.rho_liquid) - (1.0 / self.rho_solid)
        t_liq_kelvin = self.t_liquidus_0 + 273.15
        t_sol_kelvin = self.t_solidus_0 + 273.15

        # Laju kenaikan temperatur terhadap tekanan (K/Pa)
        dt_dp_liq = (t_liq_kelvin * delta_v) / self.latent_heat
        dt_dp_sol = (t_sol_kelvin * delta_v) / self.latent_heat

        delta_t_liq = dt_dp_liq * self.pressure_pa
        delta_t_sol = dt_dp_sol * self.pressure_pa

        t_liq_pressurized = self.t_liquidus_0 + delta_t_liq
        t_sol_pressurized = self.t_solidus_0 + delta_t_sol

        return {
            "specific_volume_change_m3_kg": delta_v,
            "dt_dp_rate_k_per_gpa": round(dt_dp_liq * 1e9, 2),
            "delta_t_liquidus_c": round(delta_t_liq, 2),
            "delta_t_solidus_c": round(delta_t_sol, 2),
            "pressurized_liquidus_c": round(t_liq_pressurized, 2),
            "pressurized_solidus_c": round(t_sol_pressurized, 2)
        }

    def calculate_heat_transfer_and_cooling(self) -> Dict[str, float]:
        """
        Menghitung koefisien perpindahan panas antarmuka (h_int) dan laju pendinginan.
        h_int = h0 + alpha * P^beta
        """
        # Model kontak termomekanis H13 - Aluminium
        h0 = 800.0
        alpha = 45.0
        beta = 0.65
        h_int = h0 + alpha * (self.pressure_mpa ** beta)  # W/(m^2*K)

        # Modulus termal pelat (Thickness / 2 untuk pendinginan 2 sisi)
        modulus_m = self.thickness_m / 2.0

        # Waktu pembekuan total Chvorinov termodifikasi untuk cetakan logam bertekanan
        # t_s = (rho * L_f' * M) / (h_eff * (T_m - T_die))
        superheat = max(0.0, self.t_pour - self.t_liquidus_0)
        l_prime = self.latent_heat + self.cp_liquid * superheat
        t_mean_melt = (self.t_liquidus_0 + self.t_solidus_0) / 2.0
        delta_t_effective = t_mean_melt - self.t_die

        # Resistansi termal total (antarmuka + konduksi coran)
        r_th_total = (1.0 / h_int) + (modulus_m / (2.0 * self.k_solid))
        h_eff = 1.0 / r_th_total

        solidification_time_s = (self.rho_solid * l_prime * modulus_m) / (h_eff * delta_t_effective)
        cooling_rate_c_s = (self.t_liquidus_0 - self.t_solidus_0) / solidification_time_s

        return {
            "interfacial_heat_transfer_coeff_w_m2k": round(h_int, 1),
            "effective_heat_transfer_coeff_w_m2k": round(h_eff, 1),
            "total_solidification_time_s": round(solidification_time_s, 2),
            "average_cooling_rate_c_s": round(cooling_rate_c_s, 2)
        }

    def predict_microstructure_and_properties_t6(self) -> Dict[str, float]:
        """
        Prediksi Secondary Dendrite Arm Spacing (SDAS) dan sifat mekanis setelah T6.
        SDAS = C * (Cooling Rate)^(-m)
        """
        cc = self.calculate_clausius_clapeyron_shift()
        ht = self.calculate_heat_transfer_and_cooling()

        cr = ht["average_cooling_rate_c_s"]
        # Konstanta paduan A356: C = 48.5, m = 0.33
        sdas_microns = 48.5 * (cr ** (-0.33))

        # Model regresi sifat mekanis A356-T6 berdasarkan SDAS dan densitas
        # UTS = 385 - 2.8 * SDAS (MPa)
        # Yield = 295 - 1.2 * SDAS (MPa)
        # Elongation = 16.5 * exp(-0.045 * SDAS) (%)
        uts_t6 = max(200.0, 385.0 - 2.8 * sdas_microns)
        yield_t6 = max(180.0, 295.0 - 1.2 * sdas_microns)
        elongation_pct = max(1.0, 16.5 * math.exp(-0.045 * sdas_microns))

        # Prediksi Kerapatan Porositas Relatif (%)
        # Porositas ditekan secara eksponensial oleh tekanan hidrostatis
        base_porosity_pct = 2.2 # % pada 0.1 MPa
        porosity_pct = base_porosity_pct * math.exp(-0.04 * self.pressure_mpa)
        relative_density = 100.0 - porosity_pct

        return {
            "sdas_secondary_dendrite_arm_spacing_um": round(sdas_microns, 2),
            "residual_porosity_percent": round(porosity_pct, 4),
            "relative_density_percent": round(relative_density, 3),
            "ultimate_tensile_strength_uts_t6_mpa": round(uts_t6, 1),
            "yield_strength_t6_mpa": round(yield_t6, 1),
            "elongation_at_fracture_percent": round(elongation_pct, 2)
        }

if __name__ == "__main__":
    sim = DirectSqueezeCastingSimulator(
        alloy_name="A356.0 (Al-7Si-0.3Mg)",
        applied_pressure_mpa=120.0,
        casting_thickness_mm=16.0,
        die_preheat_temp_c=260.0,
        pour_temperature_c=715.0
    )

    print("=== CLAUSIUS-CLAPEYRON EQUILIBRIUM SHIFT ===")
    for k, v in sim.calculate_clausius_clapeyron_shift().items():
        print(f"  {k}: {v}")

    print("\n=== THERMAL HEAT TRANSFER & COOLING DYNAMICS ===")
    for k, v in sim.calculate_heat_transfer_and_cooling().items():
        print(f"  {k}: {v}")

    print("\n=== MICROSTRUCTURE SDAS & MECHANICAL PROPERTIES (T6) ===")
    for k, v in sim.predict_microstructure_and_properties_t6().items():
        print(f"  {k}: {v}")
```

---

## 6. Studi Kasus Industri: Manufaktur Komponen *Steering Knuckle* Suspensi Otomotif Berbeban Tinggi

### 6.1 Latar Belakang Masalah
Sebuah produsen kendaraan listrik (EV) global membutuhkan komponen buku jari kemudi (*steering knuckle*) berkekuatan ultra-tinggi untuk poros roda depan dengan kriteria desain:
- Mampu menahan beban impak kejut vertikal $> 35\text{ kN}$ saat melintasi lubang jalan (*pothole impact test*).
- Bobot komponen harus direduksi sebesar $35\%$ dibandingkan desain baja tuang (*cast iron* nodular GGG40 seberat $6.8\text{ kg}$).
- Umur lelah siklik (*fatigue durability*) $\ge 3.0 \times 10^5\text{ siklus}$ pada uji dinamika multi-sumbu.

Upaya awal menggunakan proses *High Pressure Die Casting* (HPDC) standar dengan paduan A380/A356 gagal memenuhi syarat:
1. **Kegagalan Uji Impak**: Cacat porositas gas internal ($1.8 - 2.5\text{ vol}\%$) di persimpangan dinding tebal-tipis menjadi titik konsentrasi tegangan yang memicu retak getas pada beban $21\text{ kN}$.
2. **Ketidakmampuan Perlakuan Panas**: Saat dilakukan perlakuan panas *solutionizing* $535\ ^\circ\text{C}$ untuk menaikkan kekuatan luluh, timbul *blistering* parah di seluruh permukaan komponen.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PERBANDINGAN KNUCKLE SUSPENSI: HPDC KONVENSIONAL VS DIRECT SQUEEZE CASTING                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    A. HIGH PRESSURE DIE CASTING (HPDC A356-F)           B. DIRECT SQUEEZE CASTING (A356-T6 under 120 MPa)             |
|                                                                                                                       |
|         Porositas Gas Internal                              Struktur Padat Bebas Pori 99.96% Densitas                 |
|       ┌──────────────────────────────────────┐            ┌──────────────────────────────────────┐                    |
|       │           (O)     (O) (O)            │            │                                      │                    |
|       │  (O) Porositas Jebakan Gas &         │            │  Mikrostruktur Dendritik Ultra-Halus │                    |
|       │      Penyusutan Termal               │            │  (SDAS = 11.8 µm)                    │                    |
|       │              (O)          (O)        │            │                                      │                    |
|       └──────────────────┬───────────────────┘            └──────────────────┬───────────────────┘                    |
|                          │                                                   │                                        |
|                          ▼                                                   ▼                                        |
|         Inisiasi Retak Impak Dini (21 kN)                   Ketahanan Impak Melampaui Syarat (> 48 kN)               |
|         Gagal Uji Pothole Road Simulator                    Lolos Uji Lelah Siklik 1.2 x 10^6 Siklus                  |
|                                                                                                                       |
|    • Beban Impak Patah: 21.4 kN (FAIL)                      • Beban Impak Patah: 48.7 kN (PASS, +127%)                |
|    • Kekuatan Tarik (UTS): 225 MPa                          • Kekuatan Tarik (UTS): 352 MPa (+56.4%)                  |
|    • Elongasi Patah: 2.8%                                   • Elongasi Patah: 10.4% (+271%)                           |
|    • Bobot Komponen: 4.42 kg (Aluminium)                    • Bobot Komponen: 4.40 kg (-35.3% vs Besi Tuang)          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Implementasi Parameter Direct Squeeze Casting
Proses dialihkan ke mesin *Direct Squeeze Casting Hydraulic Press* 800-ton dengan parameter tervalidasi:
- Paduan: Aluminium A356.0 dengan modifikasi Strontium ($0.015\%\text{ Sr}$) dan *grain refiner* Al-5Ti-1B.
- Temperatur Tuang Logam: $710 \pm 5\ ^\circ\text{C}$.
- Temperatur Pra-Pemanasan Cetakan ($T_{die}$): $260\ ^\circ\text{C}$ (dilapisi insulasi mikro *boron nitride* tipis $15\ \mu\text{m}$).
- Tekanan Hidrostatis Spesifik ($P$): $120\text{ MPa}$ diaplikasikan dalam waktu $1.2\text{ detik}$ setelah penuangan.
- Waktu Tahan Tekanan (*Pressure Dwell Time*): $18\text{ detik}$ (hingga pembekuan tuntas $f_s = 1.0$).
- Siklus Heat Treatment T6: Pelarutan $535\ ^\circ\text{C}$ selama 5 jam $\rightarrow$ *Quench* air $70\ ^\circ\text{C}$ ($< 10\text{ s}$ transfer) $\rightarrow$ *Artificial Aging* $160\ ^\circ\text{C}$ selama 6 jam.

### 6.3 Hasil Kuantitatif & Validasi Pengujian
1. **Inspeksi Radiografi X-Ray (ASTM E505)**: Porositas gas dan penyusutan berkurang drastis dari $2.15\%$ menjadi $0.038\%$, memenuhi standar mutu radiografi Kelas 1 (bebas cacat).
2. **Karakterisasi Metalografi SDAS**: Nilai SDAS rata-rata menurun dari $38.4\ \mu\text{m}$ (HPDC) menjadi $11.8\ \mu\text{m}$ pada *Direct Squeeze Casting*.
3. **Kekuatan Tarik & Keuletan (ASTM E8M)**:
   - *Ultimate Tensile Strength* (UTS): Meningkat dari $225\text{ MPa}$ menjadi $352\text{ MPa}$ ($+56.4\%$).
   - *Yield Strength* ($YS$): Meningkat dari $145\text{ MPa}$ menjadi $281\text{ MPa}$ ($+93.8\%$).
   - *Elongation at Fracture* ($A\%$): Meningkat dari $2.8\%$ menjadi $10.4\%$ ($+271\%$).
4. **Validasi Uji Beban Komponen Nyata**: *Steering knuckle* menahan beban impak statis hingga $48.7\text{ kN}$ tanpa mengalami retak, serta lolos pengujian lelah $1.2 \times 10^6$ siklus (4x lipat dari target desain).

---

## 7. Referensi Terverifikasi & Standar Industri

1. **ASTM B85/B85M-23**: *Standard Specification for Aluminum-Alloy Die Castings*. ASTM International, West Conshohocken, PA, USA. DOI: `10.1520/B0085_B0085M-23`.
2. **North American Die Casting Association (NADCA)**. (2021). *Product Specification Standards for Die Castings: High Integrity Squeeze & Semi-Solid Castings*. NADCA Publication #402, Arlington Heights, IL, USA.
3. **ASM International Handbook Committee**. (2008). *ASM Handbook, Volume 15: Casting (Squeeze Casting & Liquid Metal Forging)*. ASM International, Materials Park, OH, USA. ISBN: 978-0-87170-711-6.
4. **Ghomashchi, M. R., & Vikhrov, A.** (2000). *Squeeze casting: an overview*. *Journal of Materials Processing Technology*, 101(1-3), 1-9. DOI: `10.1016/S0924-0136(99)00429-X`.
5. **Maleki, A., Niroumand, B., & Shafyei, A.** (2006). *Effects of squeeze casting parameters on density, macrostructure and hardness of LM13 alloy*. *Materials Science and Engineering: A*, 428(1-2), 135-140. DOI: `10.1016/j.msea.2006.04.099`.
6. **Vijian, P., & Arunachalam, V. P.** (2007). *Modelling and multi-objective optimization of squeeze casting process parameters using response surface methodology and genetic algorithm*. *The International Journal of Advanced Manufacturing Technology*, 33(7), 670-680. DOI: `10.1007/s00170-006-0518-6`.
7. **Zhang, L. Y., Jiang, H. Y., Ma, Z. J., Shan, C. X., & Lu, C. X.** (2020). *Effect of high pressure on solidification microstructure and mechanical properties of squeeze-cast Al-Cu-Mn alloy*. *Transactions of Nonferrous Metals Society of China*, 30(5), 1165-1175. DOI: `10.1016/S1003-6326(20)65286-4`.
8. **ISO 8062-3:2023**: *Geometrical product specifications (GPS) — Dimensional and geometrical tolerances for moulded parts — Part 3: General dimensional and geometrical tolerances and machining allowances for castings*. International Organization for Standardization, Geneva, Switzerland.
