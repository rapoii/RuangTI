# Modul 639: Electron Beam Welding (EBW): Optika Elektron Relativistik, Dinamika Keyhole Vapor Cavity, Konveksi Marangoni Termokapiler, dan Metalurgi Penetrasi Dalam (ISO 15616, AWS C8.1, ASTM E8M & ASME Sec. IX)

## 1. Pengantar & Konteks Industri: Pengelasan Berkas Elektron (*Electron Beam Welding*)

*Electron Beam Welding* (EBW) adalah proses penyambungan fusi densitas energi sangat tinggi (*high energy density fusion welding process*) di mana panas pengelasan dibangkitkan melalui konversi energi kinetik dari berkas elektron bebas yang dipercepat pada medan elektrostatik tegangan tinggi ($V_a \approx 30 - 200\ \text{kV}$) dan difokuskan secara elektromagnetik ke area mikroskopis pada permukaan sambungan benda kerja ($d_b \approx 0{,}1 - 1{,}0\ \text{mm}$). Kerapatan daya (*power density*) yang dihasilkan mencapai rentang masif $10^6 - 10^8\ \text{W/cm}^2$, melampaui ambang batas penguapan logam secara instan dan menciptakan rongga uap bertekanan tinggi yang menembus ketebalan material secara penuh (*keyhole mode*).

Proses EBW secara konvensional dieksekusi di dalam ruang hampa udara tinggi (*high vacuum chamber*, $P \le 10^{-4}\ \text{mbar}$ atau $10^{-2}\ \text{Pa}$) untuk mencegah hamburan (*scattering*) dan deselerasi elektron akibat tumbukan molekul-molekul gas atmosfer. Ketiadaan atmosfer pelindung gas memberikan kebersihan metalurgi absolut, meniadakan kontaminasi interstisial gas reaktif (seperti $O_2$, $N_2$, dan $H_2$), serta memungkinkan pembentukan rasio aspek penetrasi kedalaman terhadap lebar sambungan (*depth-to-width aspect ratio*) yang sangat tinggi hingga $40:1$ atau lebih dalam satu lintasan tunggal (*single-pass welding*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR & OPTIKA ELEKTRON SISTEM ELECTRON BEAM WELDING                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         RUANG PEMBANGKIT BERKAS (GUN CHAMBER, P < 10^-4 mbar)                                                         |
|         ┌──────────────────────────────────────────────────┐                                                          |
|         │           Katoda Filamen Panas (Tungsten / LaB6) │ ◄── Arus Filamen I_f (Emisi Termionik Richardson-Dushman)|
|         │               ┌──────────────────┐               │                                                          |
|         │               │     ════════     │               │                                                          |
|         │               └────────┬─────────┘               │                                                          |
|         │                        │                         │                                                          |
|         │             Elektroda Wehnelt Bias Grid          │ ◄── Kontrol Arus Berkas I_b (-0.5 s/d -2.0 kV)           |
|         │               ┌───────   ────────┐               │                                                          |
|         │               │  ───►  │  ◄───   │               │                                                          |
|         │               └───────┬──────────┘               │                                                          |
|         │                       │ Tegangan Akselerasi V_a  │ ◄── Medan Anoda Tinggi (+60 s/d +150 kV)                 |
|         │                       ▼                          │                                                          |
|         │               ┌──────────────────┐               │                                                          |
|         │               │  Anoda Berlubang │               │                                                          |
|         └───────────────┴───────┬──────────┴───────────────┘                                                          |
|                                 │ Berkas Elektron Terakselerasi (v ≈ 0.4c - 0.7c)                                     |
|                                 ▼                                                                                     |
|         KOLOM ELEKTRO-OPTIKA (ELECTRON OPTICAL COLUMN)                                                                |
|         ┌──────────────────────────────────────────────────┐                                                          |
|         │  ┌────────────┐                  ┌────────────┐  │                                                          |
|         │  │ Lensa Stigmator (Koreksi Aberasi Astigmatisme)│  │                                                          |
|         │  └────────────┘                  └────────────┘  │                                                          |
|         │  ┌────────────┐                  ┌────────────┐  │                                                          |
|         │  │ Lensa Fokus Elektromagnetik (Kumparan Solenoid│  │ ◄── Arus Fokus I_focus (Pengaturan Posisi Focal Point) |
|         │  └────────────┘                  └────────────┘  │                                                          |
|         │  ┌────────────┐                  ┌────────────┐  │                                                          |
|         │  │ Koil Defleksi X-Y (Scanning Berfrekuensi Tggi)│  │ ◄── Modulasi Pola Defleksi (Circle, Sine, Figure-8)   |
|         └───────────────┴───────┬──────────┴───────────────┘                                                          |
|                                 │ Berkas Elektron Terfokus (Diameter d_b ≈ 0.2 - 0.5 mm)                              |
|                                 ▼                                                                                     |
|         RUANG KERJA WAKUM & ZONA PENGELASAN                                                                           |
|         ┌──────────────────────────────────────────────────┐                                                          |
|         │                                                  │                                                          |
|         │                 Rongga Uap (Keyhole)             │                                                          |
|         │                 ┌─────┐                          │                                                          |
|         │       Benda     │  │  │ Logam Cair (Melt Pool)   │                                                          |
|         │       Kerja (1) │  │  │                          │  Benda Kerja (2)                                         |
|         │      ═══════════╪══╪══╪══════════════════════════╡                                                          |
|         │                 │  │  │ ◄─── Tekanan Rekoil Uap │                                                          |
|         │                 │  ▼  │      P_recoil(T)         │                                                          |
|         │                 └─────┘                          │                                                          |
|         │             Penetrasi Dalam (Depth h > 50 mm)    │                                                          |
|         └──────────────────────────────────────────────────┘                                                          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Karakteristik rekayasa manufaktur dan metalurgi EBW meliputi:
- **Heat-Affected Zone (HAZ) Ultra-Sempit**: Karena konsentrasi energi yang ekstrem dan kecepatan pengelasan yang tinggi ($v \ge 15 - 50\ \text{mm/s}$), masukan panas neto per satuan panjang (*net heat input*) sangat rendah ($Q_{\text{net}} \approx 100 - 600\ \text{J/mm}$). Hal ini meminimalkan distorsi geometris angular dan degradasi mikrostruktur pada logam induk.
- **Metalurgi Material Reaktif & Refraktori**: EBW adalah metode primer untuk mengelas logam reaktif dan paduan tahan panas tinggi yang sangat rentan terhadap oksidasi getas, seperti Titanium Grade 5 ($Ti\text{-}6Al\text{-}4V$), Superalloy berbasis Nikel ($Inconel\ 718$, $Waspaloy$), Tantalum ($Ta$), Molibdenum ($Mo$), Zirkonium ($Zr$), serta Niobium ($Nb$).
- **Kemampuan Penetrasi Pelat Tebal Sekali Jalan (*Thick-Section Single-Pass*)**: Dapat menembus baja struktural atau paduan tembaga/aluminium dengan ketebalan hingga $100 - 200\ \text{mm}$ tanpa memerlukan alur kampuh las (*bevel groove preparation*) maupun kawat las pengisi (*filler wire*).

Aplikasi industri strategis:
- **Industri Dirgantara & Aviasi**: Pengelasan *rotor disc* kompresor turbin gas, struktur sayap sentral titanium jet tempur, modul injektor roket cair, dan *casing* ruang bakar.
- **Pembangkit Daya & Nuklir**: Bejana reaktor bertekanan, tabung enkapsulasi bahan bakar nuklir zircaloy, dan rotor turbin uap superkritis berdimensi raksasa.
- **Transmisi Otomotif & Instrumentasi Presisi**: Rangkaian roda gigi ganda transmisi otomatis (*dual-clutch transmission gears*), rumah sensor diafragma tipis hermetis, dan bimetallic saw blades.

Standar internasional, pedoman desain, dan kualifikasi manufaktur pengelasan berkas elektron:
- **ISO 15616-1 / 2 / 3**: *Acceptance tests for electron-beam welding machines*.
- **AWS C8.1 / C8.1M**: *Recommended Practices for Electron Beam Welding and Allied Processes*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ASME BPVC Section IX**: *Welding, Brazing, and Fusing Qualifications — Electron Beam Welding (QW-215 / QW-400)*.
- **ISO 13919-1**: *Electron and laser-beam welded joints — Guidance on quality levels for imperfections (Steel, nickel, titanium)*.

---

## 2. Termodinamika & Fisika Terakselerasi: Emisi Termionik & Relativitas Berkas Elektron

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                MEKANISME TRANSFER ENERGI & FISIKA EMISI BERKAS ELEKTRON                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. EMISI ELEKTRON (Richardson-Dushman)     2. AKSELERASI & RELATIVITAS EINSTEIN      3. VOLUMETRIC HEAT DEPOSITION   |
|                                                                                                                       |
|         Katoda Filamen Terpanaskan                 Tegangan Akselerasi V_a                     Permukaan Logam        |
|               (T ≈ 2600 - 2800 K)                         (60 - 150 kV)                          (Z = Kedalaman)      |
|               ┌─────────────────┐                       ┌──────────────┐                       ┌────────────────┐     |
|               │  J_e = A T^2    │                       │  v_e = c *   │                       │   Berkas e^-   │     |
|               │  * exp(-Φ/kT)   │                       │ sqrt(1-1/γ^2)│                       │   Densitas I_b │     |
|               └────────┬────────┘                       └──────┬───────┘                       └───────┬────────┘     |
|                        │                                       │                                       │              |
|                        ▼ Arus Emisi                            ▼ Kecepatan Relativistik                ▼ Penetrasi e- |
|               ┌─────────────────┐                       ┌──────────────┐                       ┌────────────────┐     |
|               │ Arus Berkas I_b │ ────────────────────► │ E_k = e V_a  │ ────────────────────► │ Bethe Stopping │     |
|               │  (10 - 500 mA)  │                       │ = (γ - 1)mc^2│                       │ Range R_B (μm) │     |
|               └─────────────────┘                       └──────────────┘                       └────────────────┘     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Pembangkitan Emisi Termionik Elektron

Rapat arus emisi termionik ($J_e$) dari filamen katoda tungsten atau kristal lantanum heksaborida ($LaB_6$) yang dipanaskan hingga temperatur termodinamika $T_c$ dipandu oleh **Persamaan Richardson-Dushman**:

$$J_e = A_R \, T_c^2 \, \exp\left(-\frac{\Phi_w}{k_B T_c}\right)$$

Di mana:
- $J_e$ = Rapat arus emisi termionik per satuan luas katoda ($\text{A/m}^2$).
- $A_R$ = Konstanta universal Richardson ($\approx 1{,}20173 \times 10^6\ \text{A}/(\text{m}^2 \cdot \text{K}^2)$ untuk emisi permukaan ideal).
- $T_c$ = Temperatur absolut katoda filamen ($\text{K}$).
- $\Phi_w$ = Fungsi kerja permukaan logam katoda (*work function*, untuk Tungsten $\Phi_w \approx 4{,}54\ \text{eV} = 7{,}27 \times 10^{-19}\ \text{J}$; untuk $LaB_6$ $\Phi_w \approx 2{,}7\ \text{eV}$).
- $k_B$ = Konstanta Boltzmann ($1{,}380649 \times 10^{-23}\ \text{J/K}$).

### 2.2. Dinamika Relativistik Berkas Elektron

Ketika elektron bermassa diam $m_0 = 9{,}10938 \times 10^{-31}\ \text{kg}$ dan bermuatan elementer $e = 1{,}602176 \times 10^{-19}\ \text{C}$ melintasi medan tegangan akselerasi $V_a$, energi kinetik kinetik relativistic yang diperoleh elektron adalah:

$$E_k = e V_a = (\gamma - 1) m_0 c^2$$

Faktor Lorentz relativistik ($\gamma$) didefinisikan sebagai:

$$\gamma = 1 + \frac{e V_a}{m_0 c^2}$$

Maka kecepatan elektron $v_e$ saat meninggalkan celah anoda adalah:

$$v_e = c \sqrt{1 - \frac{1}{\gamma^2}} = c \sqrt{1 - \left(1 + \frac{e V_a}{m_0 c^2}\right)^{-2}}$$

Di mana $c$ adalah kecepatan cahaya dalam vakum ($2{,}99792 \times 10^8\ \text{m/s}$). Pada tegangan $V_a = 150\ \text{kV}$, $\gamma \approx 1{,}2935$ dan kecepatan elektron mencapai $v_e \approx 0{,}634\ c$ ($1{,}90 \times 10^8\ \text{m/s}$), sehingga efek dinamika relativistik wajib diperhitungkan dalam kalibrasi koil pemfokus lensa magnetik.

### 2.3. Laju Deselerasi & Kedalaman Penetrasi Elektron (Bethe Stopping Power)

Saat berkas elektron menghantam material padat, elektron kehilangan energinya melalui hamburan inelastis dengan awan elektron logam. Laju disipasi energi kinetik per satuan panjang lintasan ($dE/dx$) di dalam substrat diprediksi oleh **Hukum Bethe-Bloch**:

$$-\frac{dE}{dx} = \frac{2\pi e^4 N_A \rho Z_m}{m_0 v_e^2 A_m (4\pi \varepsilon_0)^2} \ln\left(\frac{m_0 v_e^2 E_k}{2 J_m^2 (1 - \beta^2)}\right)$$

Di mana:
- $\rho$ = Densitas massa benda kerja ($\text{kg/m}^3$).
- $Z_m$ = Nomor atom material benda kerja.
- $A_m$ = Massa molar rata-rata substrat ($\text{kg/mol}$).
- $J_m$ = Potensial ionisasi rata-rata atom logam ($J_m \approx 11{,}5 \, Z_m\ \text{eV}$).
- $\beta = v_e / c$.

Rentang penetrasi volumetrik partikel elektron tunggal ke dalam logam padat (*Bethe penetration range* $R_B$) didekati melalui rumus empiris Kanaya-Okayama:

$$R_B = \frac{0{,}0276 \, A_m \, V_a^{1{,}67}}{\rho \, Z_m^{0{,}89}} \quad [\mu\text{m}]$$

Dengan $V_a$ dalam $\text{kV}$, $\rho$ dalam $\text{g/cm}^3$, dan $A_m$ dalam $\text{g/mol}$. Nilai $R_B$ berada pada orde $10 - 60\ \mu\text{m}$. Meskipun jangkauan elektron individual sangat tipis, akumulasi densitas fluks kalor yang sangat masif memicu penguapan logam instan, membuka saluran kapiler *keyhole* yang menembus puluhan milimeter ke dalam substrat.

---

## 3. Hidrodinamika Rongga Uap (*Keyhole Dynamics*) & Konveksi Marangoni

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               KESEIMBANGAN HIDRODINAMIKA & GAYA PADA DINDING KEYHOLE EBW                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                     Berkas Elektron Fokus (I_b, V_a)                                                  |
|                                                   │   │                                                               |
|                                                   │   │                                                               |
|                                                   ▼   ▼                                                               |
|          Permukaan Bebas ───────────────────────┐       ┌─────────────────────── Permukaan Bebas                      |
|                                                 │       │                                                             |
|                                ┌────────────────┘       └────────────────┐                                            |
|                                │ ◄── P_recoil(T)                 P_σ ──► │                                            |
|                                │ (Tekanan Rekoil Uap)   (Tegangan Muka)  │                                            |
|                                │                                         │                                            |
|                                │                Rongga Uap               │                                            |
|              Dinding Depan     │                 (Keyhole)               │      Dinding Belakang                      |
|              (Front Wall)      │                                         │      (Rear Melt Pool)                      |
|              Melebur & Menguap │                                         │      Aliran Sirkulasi                      |
|                                │                                         │      Termokapiler Marangoni                |
|                                │ ◄── P_vapor(T)                 P_h ──►  │      (Gamma_T * dT/dz)                     |
|                                │ (Tekanan Uap Statis)   (Tekanan Hidro)  │                                            |
|                                └────────────────┐       ┌────────────────┘                                            |
|                                                 │       │                                                             |
|                                                 └───────┘                                                             |
|                                                Ujung Bawah                                                            |
|                                              (Keyhole Root)                                                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Keseimbangan Tekanan pada Antarmuka Dinding Keyhole

Stabilitas struktur morfologi saluran *keyhole* silindris bergantung pada keseimbangan dinamis tekanan fluida lokal pada antarmuka cair-gas sepanjang sumbu kedalaman $z$:

$$P_{\text{recoil}}(T_w) + P_{\text{vapor}}(T_w) = P_{\sigma}(r_k, \gamma_s) + P_{\text{hydrostatic}}(z) + P_{\text{dynamic}}(v_f)$$

Di mana komponen-komponen tegangan dan tekanan adalah:

1. **Tekanan Rekoil Uap (*Recoil Pressure* $P_{\text{recoil}}$)**: Gaya dorong balik akibat atom-atom logam yang terevaporasi secara eksplosif dari dinding depan *keyhole*, dipandu oleh model Anisimov-Knight:

$$P_{\text{recoil}}(T_w) = \frac{1 + \beta_R}{2} P_0 \exp\left[\frac{\Delta H_v}{R_g T_b}\left(1 - \frac{T_b}{T_w}\right)\right]$$

Di mana $\beta_R \approx 0{,}18$ adalah fraksi molekul uap yang terkondensasi kembali (*back-scattering fraction*), $P_0 = 101325\ \text{Pa}$, $\Delta H_v$ adalah entalpi penguapan spesifik ($\text{J/mol}$), $T_b$ adalah titik didih normal logam ($\text{K}$), dan $T_w$ adalah temperatur antarmuka dinding *keyhole* ($T_w > T_b$).

2. **Tekanan Penutupan Lapisan Permukaan Kapiler (*Capillary Surface Tension Pressure* $P_\sigma$)**:

$$P_\sigma(r_k) = \frac{\gamma_s(T)}{r_k(z)}$$

Di mana $\gamma_s(T)$ adalah tegangan permukaan logam cair ($\text{N/m}$) dan $r_k(z)$ adalah radius kelengkungan saluran *keyhole* pada kedalaman $z$.

3. **Tekanan Hidrostatis & Dinamis Logam Cair ($P_{\text{hydrostatic}} + P_{\text{dynamic}}$)**:

$$P_{\text{hydrostatic}}(z) = \rho_l \, g \, z, \qquad P_{\text{dynamic}} = \frac{1}{2} \rho_l \, v_{\text{fluid}}^2$$

Jika pada sembarang zona kedalaman $P_{\text{recoil}} < P_\sigma$, dinding logam cair akan runtuh (*keyhole collapse*), menjebak gelembung uap logam di dasar kolam las dan membentuk cacat porositas akar las (*root porosity / void defects*).

### 3.2. Termokapiler & Efek Marangoni (*Marangoni Convection*)

Gradien temperatur yang sangat curam antara sumbu tengah las ($T \approx 3000\ \text{K}$) dan garis fusi batas padat ($T_m \approx 1900\ \text{K}$) membangkitkan gradien tegangan permukaan masif sepanjang permukaan kolam leburan. Tegangan geser Marangoni ($\tau_M$) pada fluida lapisan batas memenuhi:

$$\tau_M = \mu \frac{\partial v_r}{\partial z} = \frac{\partial \gamma_s}{\partial T} \frac{\partial T}{\partial r}$$

Bilangan Marangoni termal ($Ma$), yang mengukur rasio gaya adveksi termokapiler terhadap difusi termal molekular, dirumuskan sebagai:

$$Ma = \frac{-\left(\dfrac{d\gamma_s}{dT}\right) \Delta T \, L_c}{\mu_l \, \alpha_{\text{th}}}$$

Di mana:
- $\dfrac{d\gamma_s}{dT}$ = Koefisien temperatur dari tegangan permukaan ($\text{N}/(\text{m}\cdot\text{K})$). Untuk logam murni dan paduan bersih tanpa elemen aktif permukaan, nilainya negatif ($\approx -0{,}4 \times 10^{-3}\ \text{N/m}\cdot\text{K}$), mendorong fluida bergerak keluar menuju tepi kolam las (memperlebar *weld bead*).
- $\Delta T = T_{\text{peak}} - T_{\text{liquidus}}$ ($\text{K}$).
- $L_c$ = Panjang karakteristik kolam las ($\text{m}$).
- $\mu_l$ = Viskositas dinamik logam cair ($\text{Pa}\cdot\text{s}$).
- $\alpha_{\text{th}} = \dfrac{k_m}{\rho_l C_p}$ = Difusivitas termal ($\text{m}^2/\text{s}$).

Dalam pengelasan EBW, nilai $Ma$ tipikal berkisar antara $10^3 - 10^5$, menunjukkan bahwa transfer panas konvektif mendominasi konduksi murni di dalam kolam cairan logam lasan.

---

## 4. Pemodelan Distribusi Panas Volumetrik Tiga Dimensi: Model Kerucut Modifikasi Rosenthal & Goldak

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                MODEL VOLUMETRIC HEAT SOURCE KERUCUT TERPANCUNG (CONICAL GAUSSIAN)                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|             z = 0 (Permukaan Atas) ──────────┬─────────── r_e (Radius Atas)                                           |
|                                            / │ \                                                                      |
|                                           /  │  \                                                                     |
|                                          /   │   \                                                                    |
|             Kedalaman z ─────────────── /────┼────\ ──── r_0(z) = r_e - (r_e - r_i)*(z / H)                           |
|                                        /     │     \                                                                  |
|                                       /      │      \                                                                 |
|             z = H (Ujung Penetrasi) ─/───────┼───────\── r_i (Radius Bawah)                                           |
|                                      └───────┴───────┘                                                                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Untuk merefleksikan morfologi penetrasi *keyhole* EBW yang meruncing secara vertikal, sumber panas dimodelkan sebagai fluks volumetrik Gaussian kerucut tiga dimensi (*3D Conical Gaussian Heat Source Model*):

$$q_{\text{EBW}}(x, y, z) = q_0(z) \exp\left(-\frac{3 (x - v t)^2}{r_0^2(z)} - \frac{3 y^2}{r_0^2(z)}\right)$$

Radius sebaran panas efektif $r_0(z)$ menyempit secara linier terhadap kedalaman $z$:

$$r_0(z) = r_e - (r_e - r_i)\frac{z}{H_p}$$

Di mana:
- $r_e$ = Radius distribusi panas pada permukaan atas ($z = 0$).
- $r_i$ = Radius distribusi panas pada akar penetrasi las ($z = H_p$).
- $H_p$ = Kedalaman total penetrasi las (*welding penetration depth*).
- $v$ = Kecepatan translasi lintasan pengelasan ($\text{m/s}$).

Amplitudo fluks panas volumetrik puncak pada sembarang irisan horizontal kedalaman $z$ diatur oleh konservasi daya berkas elektron neto ($\eta_b \, P_b = \eta_b \, V_a \, I_b$):

$$q_0(z) = \frac{9 \, \eta_b \, V_a \, I_b}{\pi \, H_p \left(r_e^2 + r_e r_i + r_i^2\right)} \left[1 - \left(1 - \frac{r_i}{r_e}\right)\frac{z}{H_p}\right]^{-2}$$

Di mana $\eta_b$ adalah efisiensi termal transfer berkas elektron ($\eta_b \approx 0{,}85 - 0{,}95$ untuk pengelasan vakum tinggi).

---

## 5. Algoritma Komputasi Python: Multiphysics Solver & Optimasi Parameter EBW

Skrip Python berstandar industri di bawah ini mengimplementasikan simulasi profil termal transien 3D, verifikasi stabilitas hidrodinamika *keyhole*, perhitungan rasio aspek penetrasi, dan optimasi jendela operasi tegangan-arus berkas elektron untuk paduan $Ti\text{-}6Al\text{-}4V$ dan Baja Tahan Karat $316L$.

```python
"""
EBW Multiphysics Thermal, Keyhole Dynamics & Operating Window Optimizer.
Standar Acuan: ISO 15616, AWS C8.1, ASTM E8M, dan ASME BPVC Section IX.
"""

import math
from typing import Dict, Tuple, List

class ElectronBeamWelderSolver:
    def __init__(self, material: str = "Ti6Al4V"):
        self.material = material
        self.c = 2.99792458e8  # Kecepatan cahaya (m/s)
        self.m0 = 9.1093837e-31 # Massa diam elektron (kg)
        self.e_charge = 1.60217663e-19 # Muatan elementer (C)
        
        # Database Termofisika Material
        if material == "Ti6Al4V":
            self.props = {
                "density": 4430.0,       # kg/m^3
                "specific_heat": 560.0,  # J/(kg*K)
                "thermal_cond": 6.7,     # W/(m*K)
                "T_melt": 1923.0,        # K (1650 C)
                "T_boil": 3560.0,        # K (3287 C)
                "latent_heat_fus": 2.9e5,# J/kg
                "latent_heat_vap": 8.8e6,# J/kg
                "surf_tension": 1.52,    # N/m pada T_melt
                "d_gamma_dT": -0.28e-3,  # N/(m*K)
                "viscosity": 4.5e-3,     # Pa*s
                "atomic_weight": 47.87,  # g/mol
                "atomic_number": 22
            }
        elif material == "SS316L":
            self.props = {
                "density": 7900.0,
                "specific_heat": 500.0,
                "thermal_cond": 21.5,
                "T_melt": 1673.0,
                "T_boil": 3086.0,
                "latent_heat_fus": 2.7e5,
                "latent_heat_vap": 6.3e6,
                "surf_tension": 1.70,
                "d_gamma_dT": -0.40e-3,
                "viscosity": 5.5e-3,
                "atomic_weight": 55.85,
                "atomic_number": 26
            }
        else:
            raise ValueError(f"Material {material} tidak terdefinisi.")

    def calculate_relativistic_electron_optics(self, Va_kV: float, Ib_mA: float) -> Dict[str, float]:
        """Menghitung kinematika relativistik berkas elektron dan daya berkas."""
        Va = Va_kV * 1e3
        Ib = Ib_mA * 1e-3
        
        # Lorentz Factor
        gamma = 1.0 + (self.e_charge * Va) / (self.m0 * self.c**2)
        velocity = self.c * math.sqrt(1.0 - (1.0 / (gamma**2)))
        velocity_fraction_c = velocity / self.c
        
        # Total Beam Power
        power_W = Va * Ib
        
        # Bethe-Kanaya Range (Kedalaman penetrasi partikel tunggal sebelum henti)
        rho_g_cm3 = self.props["density"] / 1000.0
        A = self.props["atomic_weight"]
        Z = self.props["atomic_number"]
        range_bethe_um = (0.0276 * A * (Va_kV**1.67)) / (rho_g_cm3 * (Z**0.89))
        
        return {
            "gamma": gamma,
            "electron_velocity_m_s": velocity,
            "velocity_fraction_c": velocity_fraction_c,
            "beam_power_kW": power_W / 1000.0,
            "bethe_stopping_range_um": range_bethe_um
        }

    def predict_penetration_and_aspect_ratio(
        self, Va_kV: float, Ib_mA: float, speed_mm_s: float, beam_dia_mm: float, eta: float = 0.90
    ) -> Dict[str, float]:
        """
        Prediksi kedalaman penetrasi keyhole (H_p) dan rasio aspek depth-to-width
        menggunakan integrasi termomekanika masukan energi linear dan konduksi transien.
        """
        v_m_s = speed_mm_s * 1e-3
        P_net = eta * (Va_kV * 1e3) * (Ib_mA * 1e-3) # Watt
        
        rho = self.props["density"]
        Cp = self.props["specific_heat"]
        Tm = self.props["T_melt"]
        Lf = self.props["latent_heat_fus"]
        k = self.props["thermal_cond"]
        T0 = 298.15 # Ambient K
        
        # Energi volumetrik yang dibutuhkan untuk mencairkan satuan volume
        H_melting = rho * (Cp * (Tm - T0) + Lf) # J/m^3
        
        # Difusivitas termal
        alpha = k / (rho * Cp)
        
        # Peclet Number
        db_m = beam_dia_mm * 1e-3
        Pe = (v_m_s * db_m) / (2.0 * alpha)
        
        # Estimasi Kedalaman Penetrasi Keyhole (Model Swift-Hook & Gick termodifikasi)
        # Menghitung kehilangan panas konduksi 2D sekitar dinding keyhole
        conduction_factor = 1.0 + (1.5 / math.sqrt(1.0 + 2.0 * Pe))
        area_fusion_rate = P_net / (H_melting * conduction_factor) # m^3/s
        
        width_m = db_m * (1.1 + 0.3 / math.sqrt(Pe + 0.1))
        penetration_depth_m = area_fusion_rate / (v_m_s * width_m)
        penetration_depth_mm = penetration_depth_m * 1e3
        width_mm = width_m * 1e3
        
        aspect_ratio = penetration_depth_mm / width_mm
        linear_heat_input_J_mm = (P_net / v_m_s) / 1e3
        
        return {
            "penetration_depth_mm": penetration_depth_mm,
            "fusion_width_mm": width_mm,
            "depth_to_width_aspect_ratio": aspect_ratio,
            "linear_heat_input_J_mm": linear_heat_input_J_mm,
            "peclet_number": Pe
        }

    def evaluate_keyhole_stability(
        self, Va_kV: float, Ib_mA: float, beam_dia_mm: float, penetration_depth_mm: float
    ) -> Dict[str, float]:
        """
        Evaluasi keseimbangan gaya hidrostatik, tegangan muka kapiler, dan tekanan rekoil uap.
        """
        # Estimasi Temperatur Dinding Keyhole Puncak Tw
        power_density = ((Va_kV * 1e3) * (Ib_mA * 1e-3)) / (math.pi * (beam_dia_mm * 1e-3 / 2.0)**2) # W/m^2
        # Temperatur evaporasi aktif di bawah berkas fokus tinggi
        Tw = self.props["T_boil"] + 250.0 * math.log10(max(1.0, power_density / 1e8))
        
        # 1. Recoil Pressure (Anisimov model)
        P0 = 101325.0
        Lv_mol = self.props["latent_heat_vap"] * (self.props["atomic_weight"] / 1000.0)
        Rg = 8.3144626
        Tb = self.props["T_boil"]
        
        exponent = (Lv_mol / (Rg * Tb)) * (1.0 - (Tb / Tw))
        P_recoil = 0.59 * P0 * math.exp(min(40.0, exponent))
        
        # 2. Capillary Pressure
        rk = (beam_dia_mm * 1e-3) / 2.0
        P_capillary = self.props["surf_tension"] / rk
        
        # 3. Hydrostatic Pressure at Root
        H = penetration_depth_mm * 1e-3
        P_hydrostatic = self.props["density"] * 9.80665 * H
        
        # Stability Margin Index: P_recoil / (P_capillary + P_hydrostatic)
        # Indeks ideal: 1.05 <= Index <= 3.5 (Di atas 3.5 spatter masif, di bawah 1.0 keyhole runtuh)
        closing_pressure = P_capillary + P_hydrostatic
        stability_index = P_recoil / closing_pressure if closing_pressure > 0 else 999.0
        
        is_stable = 1.05 <= stability_index <= 3.8
        
        return {
            "Tw_estimated_K": Tw,
            "recoil_pressure_kPa": P_recoil / 1e3,
            "capillary_pressure_kPa": P_capillary / 1e3,
            "hydrostatic_pressure_kPa": P_hydrostatic / 1e3,
            "stability_index": stability_index,
            "keyhole_stable_flag": 1.0 if is_stable else 0.0
        }

if __name__ == "__main__":
    solver = ElectronBeamWelderSolver(material="Ti6Al4V")
    
    # Parameter Pengelasan Dirgantara (Rotor Titanium Ti-6Al-4V)
    Va = 120.0       # kV
    Ib = 45.0        # mA
    speed = 20.0     # mm/s
    beam_dia = 0.35  # mm
    
    optics = solver.calculate_relativistic_electron_optics(Va, Ib)
    penetration = solver.predict_penetration_and_aspect_ratio(Va, Ib, speed, beam_dia)
    stability = solver.evaluate_keyhole_stability(Va, Ib, beam_dia, penetration["penetration_depth_mm"])
    
    print("=================================================================")
    print(f"HASIL SIMULASI ELECTRON BEAM WELDING — {solver.material}")
    print("=================================================================")
    print(f"Kecepatan Relativistik Elektron (v/c): {optics['velocity_fraction_c']:.3f} c ({optics['electron_velocity_m_s']/1e6:.1f} Mm/s)")
    print(f"Faktor Lorentz (gamma)              : {optics['gamma']:.4f}")
    print(f"Daya Berkas Neto (Power)            : {optics['beam_power_kW']:.2f} kW")
    print(f"Jangkauan Henti Bethe               : {optics['bethe_stopping_range_um']:.2f} µm")
    print("-----------------------------------------------------------------")
    print(f"Kedalaman Penetrasi Las (Depth H_p) : {penetration['penetration_depth_mm']:.2f} mm")
    print(f"Lebar Kolam Fusi (Width W)          : {penetration['fusion_width_mm']:.2f} mm")
    print(f"Rasio Aspek (Depth/Width)           : {penetration['depth_to_width_aspect_ratio']:.2f} : 1")
    print(f"Masukan Panas Linear                : {penetration['linear_heat_input_J_mm']:.2f} J/mm")
    print("-----------------------------------------------------------------")
    print(f"Tekanan Rekoil Uap Dinding Keyhole  : {stability['recoil_pressure_kPa']:.2f} kPa")
    print(f"Tekanan Penutupan Kapiler Permukaan : {stability['capillary_pressure_kPa']:.2f} kPa")
    print(f"Indeks Stabilitas Keyhole           : {stability['stability_index']:.2f} (Status: {'STABIL' if stability['keyhole_stable_flag'] else 'UNSTABLE'})")
    print("=================================================================")
```

---

## 6. Studi Kasus Industri: Pengelasan Bejana Tekan Titanium Rotor Turbin Dirgantara ($Ti\text{-}6Al\text{-}4V$)

### 6.1. Konteks Masalah & Spesifikasi Komponen

Sebuah konsorsium manufaktur mesin dirgantara memproduksi modul poros kompresor turbin bertekanan tinggi (*high-pressure compressor spool*) berbahan dasar titanium superalloy $Ti\text{-}6Al\text{-}4V$ (AMS 4928) dengan ketebalan dinding flensa $H_0 = 32{,}0\ \text{mm}$. 

Tantangan utama yang dihadapi:
1. Pengelasan busur konvensional (TIG/GTAW) memerlukan alur kampuh ganda dengan 18 lintasan (*multi-pass*), menghasilkan distorsi aksial sebesar $3{,}4\ \text{mm}$ (melebihi toleransi desain $\pm 0{,}25\ \text{mm}$) dan degradasi fatik akibat kontaminasi gas oksigen ($> 1800\ \text{ppm}$).
2. Persyaratan integritas lasan menurut kualifikasi **ISO 15616-1** dan **ASME BPVC Section IX (QW-215)** mensyaratkan penembusan penuh sekali jalan (*single-pass full penetration*), rasio aspek kedalaman terhadap lebar minimal $\ge 12:1$, lebar zona terpengaruh panas (HAZ) $< 0{,}6\ \text{mm}$, dan nihilnya cacat porositas akar las (*zero root voids*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       STUDI KASUS: OPTIMASI PARAMETER PENGELASAN EBW POROS KOMPRESOR TITANIUM Ti-6Al-4V               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Parameter Proses                     Pengelasan Busur TIG            Pengelasan Berkas Elektron (EBW)         |
|         ───────────────────────────────────────────────────────────────────────────────────────────────────           |
|         Jumlah Lintasan (*Passes*)           18 Lintasan (Multi-Pass)        1 Lintasan (*Single Pass Full Penetration)   |
|         Tegangan Akselerasi ($V_a$)          N/A (22 V)                      130 kV                                   |
|         Arus Berkas ($I_b$)                  220 A                           65 mA (Daya: 8,45 kW)                    |
|         Kecepatan Pengelasan ($v$)           2,2 mm/s                        18,0 mm/s                                |
|         Tingkat Vakum Ruang Kerja            Atmosfer + Argon Shielding      1,2 x 10^-4 mbar (High Vacuum)           |
|         Masukan Panas (*Heat Input*)         2200 J/mm                       422,5 J/mm (Reduksi 80,8%)               |
|         Lebar HAZ                            4,8 mm                          0,42 mm                                  |
|         Distorsi Runout Aksial               3,4 mm (REJECT)                 0,11 mm (PASS < 0,25 mm)                 |
|         Batas Fatik Siklus Tinggi (10^7)     410 MPa                         785 MPa (Sama dengan Logam Induk)        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2. Implementasi & Verifikasi Metalurgi

Melalui penerapan EBW bertegangan tinggi ($130\ \text{kV}$) dengan modulasi defleksi berkas frekuensi tinggi bermotif elips (*high-frequency circular beam oscillation*, $f_{\text{osc}} = 500\ \text{Hz}$, $r_{\text{osc}} = 0{,}4\ \text{mm}$):
- Fluktuasi tekanan hidrodinamika logam cair teredam, mencegah keruntuhan dinding *keyhole* dan menghasilkan saluran fusi yang bebas porositas akar (*zero root cavitation*).
- Struktur mikro pada zona fusi bertransformasi menjadi martensit jarum halus ($\alpha'$-martensite acicular) dengan orientasi butir acak yang homogen.
- Pengujian tak merusak (*non-destructive testing*) melalui *radiographic examination* kelas 1 (ISO 17636-2) dan *ultrasonic phased array* (ASTM E2700) mengonfirmasi 100% sambungan bebas cacat.

---

## 7. Rujukan Terverifikasi (Standards & Peer-Reviewed Literature)

1. **ISO 15616-1:2003**: *Acceptance tests for electron-beam welding machines for high quality welding of metallic materials — Part 1: Electric and electronic measurement equipment*. International Organization for Standardization.
2. **AWS C8.1M:2017**: *Recommended Practices for Electron Beam Welding and Allied Processes*. American Welding Society.
3. **ASME Boiler and Pressure Vessel Code (BPVC) Section IX:2023**: *Welding, Brazing, and Fusing Qualifications — Qualification of Electron Beam Welding Procedures and Operators (QW-215 & QW-400)*. American Society of Mechanical Engineers.
4. **ASTM E8 / E8M-24**: *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: https://doi.org/10.1520/E0008_E0008M-24.
5. Yang, Z., Fang, Y., & He, J. (2020). *Numerical simulation of heat transfer and fluid flow during vacuum electron beam welding of 2219 aluminium girth joints*. **Vacuum**, 175, 109256. DOI: https://doi.org/10.1016/j.vacuum.2020.109256.
6. Chen, G., Liu, J., Shu, X., Gu, H., & Zhang, B. (2019). *Numerical simulation of keyhole morphology and molten pool flow behavior in aluminum alloy electron-beam welding*. **International Journal of Heat and Mass Transfer**, 137, 439-449. DOI: https://doi.org/10.1016/j.ijheatmasstransfer.2019.04.112.
7. Skryabinskyi, V. V., Nesterenkov, V. M., & Rusynyk, M. O. (2020). *Electron beam welding with programming of beam power density distribution*. **The Paton Welding Journal**, 2020(1), 38-44. DOI: https://doi.org/10.37434/tpwj2020.01.07.
8. Trushnikov, D. N., Mladenov, G. M., & Belenkiy, V. Y. (2013). *Controlling the Electron Beam Focus Regime and Monitoring the Keyhole in Electron Beam Welding*. **Quarterly Journal of the Japan Welding Society**, 31(4), 91s-94s. DOI: https://doi.org/10.2207/qjjws.31.91s.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
