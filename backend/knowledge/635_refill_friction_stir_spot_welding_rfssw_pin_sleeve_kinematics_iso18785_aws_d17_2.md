# Modul 635: Refill Friction Stir Spot Welding (RFSSW): Kinematika Tiga Bagian Pahat (Clamping Ring, Sleeve, Pin), Termomekanika Plastisisasi Solid-State, Dinamika Pengisian Lubang Kunci (Keyhole-Free Refill), dan Integritas Sambungan Lapisan Tipis Dirgantara/Otomotif (ISO 18785, AWS D17.2 & ASTM E8M)

## 1. Pengantar & Konteks Industri: Pengelasan Titik Gesek Tanpa Lubang Kunci (*Keyhole-Free Solid-State Spot Joining*)

*Refill Friction Stir Spot Welding* (RFSSW) — juga dikenal sebagai *Friction Spot Joining* — adalah teknologi penyambungan solid-state (*solid-state joining*) mutakhir yang dikembangkan untuk mengatasi kelemahan mendasar dari *Friction Stir Spot Welding* (FSSW) konvensional, yaitu keberadaan lubang kunci (*exit keyhole*) yang tertinggal di tengah sambungan akibat penarikan pahat putar (*probe retract*). Dalam RFSSW, perkakas las non-konsumsi terdiri dari tiga komponen konsentris yang dapat bergerak secara independen satu sama lain: cincin penjepit (*clamping ring*), selongsong putar luar (*rotating sleeve*), dan pin putar dalam (*rotating pin*). 

Dengan memanipulasi translasi aksial relatif antara *sleeve* dan *pin* selama proses rotasi berkecepatan tinggi, material logam yang terplastisisasi (*viscoplasticized metal*) ditampung sementara di dalam rongga alat (*cavity*), lalu ditekan kembali (*refilled*) ke dalam volume sambungan secara penuh pada akhir siklus. Hasilnya adalah sambungan titik datar (*flush surface*), bebas lubang kunci (*keyhole-free*), memiliki efisiensi kekuatan geser tarik (*lap shear strength*) mendekati material induk ($> 90\%$), serta integritas lelah (*fatigue life*) yang jauh lebih tinggi dibandingkan FSSW standar atau paku keling konvensional.

Aplikasi industri utama RFSSW meliputi:
1. **Struktur Primer & Sekunder Dirgantara (*Aerospace Airframes*)**: Penyambungan lembaran paduan aluminium berkekuatan tinggi seri $2\text{xxx}$ (Al-Cu seperti AA2024-T3) dan seri $7\text{xxx}$ (Al-Zn-Mg-Cu seperti AA7075-T6) pada panel *fuselage*, *stringer*, dan *wing skin*, menggantikan paku keling mekanis titanium/aluminium dengan penghematan bobot hingga $30 - 40\%$ dan eliminasi waktu pemboran/pemasangan *fastener*.
2. **Kendaraan Listrik & Otomotif Ringan (*Automotive & EV Body-in-White*)**: Perakitan rangka bodi aluminium-ke-aluminium dan sambungan multi-material *dissimilar* (Aluminium paduan $6\text{xxx}$ ke Lembaran Baja Galvanis Berkekuatan Tinggi / DP600-DP980 atau paduan Magnesium AZ31) pada pintu, kap mesin, dan kompartemen baterai (*battery enclosure trays*).
3. **Industri Kereta Cepat (*High-Speed Rolling Stock*)**: Panel atap dan dinding samping gerbong kereta berbahan aluminium ekstrusi seri $6\text{xxx}$ (AA6005A, AA6082).
4. **Enklosur Elektronik & Penukar Panas (*Electronics & Heat Exchangers*)**: Penyambungan lembaran tipis tembaga-aluminium (*Cu-Al busbars*) pada transmisi daya sel baterai litium-ion.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       ARSITEKTUR PERKAKAS TIGA ELEMEN KONSENTRIS & KINEMATIKA RFSSW (SLEEVE-PLUNGE)                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                     POROS AKSIAL GANDA & SERVO HIDROLIK / MOTOR LINIER                                |
|                                   ┌─────────────────────────────────────────────────────┐                             |
|                                   │  Kontrol Presisi Independen (F_clamp, F_s, F_p)    │                             |
|                                   │  Sensor Torsi & Beban Load-Cell Piezoelektrik       │                             |
|                                   └──────────────────────────┬──────────────────────────┘                             |
|                                                              │                                                        |
|                         CINCIN PENJEPIT (Stationary)         │                                                        |
|                       ┌──────────────────────────────┐       │                                                        |
|                       │ Clamping Ring (Non-rotating) │       │                                                        |
|                       │ Mencegah Flash & Menjepit    │       │                                                        |
|                       └──────────────┬───────────────┘       │                                                        |
|                                      │                       │                                                        |
|                                      │       SELONGSONG PUTAR (Rotating Sleeve)                                       |
|                                      │     ┌────────────────────────────────────┐                                     |
|                                      │     │ Diameter Luar D_s, Berputar omega  │                                     |
|                                      │     │ Penetrasi Aksial ke Lembaran (h_s) │                                     |
|                                      │     └─────────────────┬──────────────────┘                                     |
|                                      │                       │                                                        |
|                                      │                       │       PIN PUTAR DALAM (Rotating Pin)                   |
|                                      │                       │     ┌────────────────────────────────┐                 |
|                                      │                       │     │ Diameter D_p, Berputar omega   │                 |
|                                      │                       │     │ Bergerak Retract/Maju Aksial   │                 |
|                                      │                       │     └───────────────┬────────────────┘                 |
|                                      │                       │                     │                                  |
|                                      ▼                       ▼                     ▼                                  |
|                       ═══════════════╦═══════════════════════╦═════════════════════╦═══════════════════════════════   |
|                                      ║    Clamping Ring      ║   Rotating Sleeve   ║          Rotating Pin         ║   |
|                                      ║    (Diam / Statis)    ║   (Putar + Plunge)  ║       (Putar + Retract)       ║   |
|                                      ╠═══════════════════════╬═════════════════════╬═══════════════════════════════╣   |
|    Lembaran Atas (Sheet 1) ──────────╢                       ║                     ║                               ║   |
|                                      ║   Bahan Terjepit      ║   Zona Gesek &      ║     Rongga Penampung Logam    ║   |
|    Lembaran Bawah (Sheet 2) ─────────╢   Tanpa Distorsi      ║   Plastisisasi      ║     Terplastisisasi (Cavity)  ║   |
|                                      ╚═══════════════════════╩═════════════════════╩═══════════════════════════════╝   |
|                       ─────────────────────────────────────────────────────────────────────────────────────────────   |
|                                                      LANDASAN ANVIL BAJA KERAS (Backing Anvil)                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar internasional, pedoman teknis pengelasan, dan metodologi pengujian yang mengatur proses RFSSW meliputi:
- **ISO 18785-1 s/d 18785-5**: *Friction spot welding — Aluminium — Part 1: Vocabulary; Part 2: Design of weld joints; Part 3: Qualification of welding personnel; Part 4: Specification and qualification of welding procedures; Part 5: Quality and inspection requirements*.
- **AWS D17.2 / D17.2M**: *Specification for Resistance Welding and Solid-State Spot Welding for Aerospace Applications*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials (Lap Shear and Cross Tension Testing)*.
- **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
- **ISO 25239-1 s/d 25239-5**: *Friction stir welding — Aluminium*.

---

## 2. Kinematika Perkakas Tiga Bagian & Urutan Siklus Pengelasan (*Welding Cycle Mechanics*)

RFSSW beroperasi berdasarkan dua varian proses utama yang dibedakan oleh elemen perkakas mana yang melakukan penetrasi (*plunge*) ke dalam benda kerja: **Varian Penetrasi Selongsong (*Sleeve-Plunge Variant*)** dan **Varian Penetrasi Pin (*Pin-Plunge Variant*)**. Varian *Sleeve-Plunge* adalah yang paling luas diadopsi di industri manufaktur karena menghasilkan area inti adukan (*Stir Zone / SZ*) yang lebih besar dan kapasitas penahanan beban geser tarik (*tensile lap shear load*) yang superior.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                            SIKLUS PROSES RFSSW VARIAN SLEEVE-PLUNGE (4 TAHAP UTAMA)                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    1. PENJEPITAN & GESEKAN AWAL    2. PENETRASI SLEEVE & RETRAKSI PIN  3. REFILL & REVERSI POSISI    4. PELEPASAN & FLUSH     |
|       (Clamping & Pre-friction)       (Sleeve Plunge & Pin Retract)       (Refill & Forging Action)     (Tool Extraction)     |
|                                                                                                                       |
|         Ring   Sleeve   Pin             Ring   Sleeve   Pin                 Ring   Sleeve   Pin           Ring   Sleeve   Pin |
|         [▼]     [▼]     [▼]             [▼]     [▼]     [▲]                 [▼]     [▲]     [▼]           [▲]     [▲]     [▲] |
|       ┌─────┐ ┌─────┐ ┌─────┐         ┌─────┐         ┌─────┐             ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐ ┌─────┐ |
|       │     │ │     │ │     │         │     │ ┌─────┐ │     │             │     │ │     │ │     │       │     │ │     │ │     │ |
|       │     │ │  ω  │ │  ω  │         │     │ │  ω  │ │     │ Cavity      │     │ │  ω  │ │  ω  │       │     │ │     │ │     │ |
|       └──┬──┘ └──┬──┘ └──┬──┘         └──┬──┘ │  ▼  │ └──┬──┘             └──┬──┘ └──▲──┘ └──┬──┘       └──┬──┘ └──┬──┘ └──┬──┘ |
|          │       │       │               │    └──┬──┘    │                   │       │       │             │       │       │   |
|          ▼       ▼       ▼               ▼       ▼       ▲ (Retract)         ▼       ▲       ▼ (Forge)     ▲       ▲       ▲   |
|       ═══════════════════════         ═══════╗       ╔═══════             ═══════════════════════       ═══════════════════════ |
|       ┌─────────────────────┐         ┌──────╢ Logam ╟──────┐             ┌─────────────────────┐       ┌─────────────────────┐ |
|       │ Sheet 1 (Plastis)   │         │Sheet1║Plastis║      │             │ Sambungan Refilled  │       │ Permukaan Datar     │ |
|       ├─────────────────────┤         ├──────╢Terisi ╟──────┤             ├─────────────────────┤       ├──────(Flush)────────┤ |
|       │ Sheet 2 (Landasan)  │         │Sheet2╚═══════╝      │             │ Terkonsolidasi Penuh│       │ Bebas Lubang Kunci  │ |
|       └─────────────────────┘         └─────────────────────┘             └─────────────────────┘       └─────────────────────┘ |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Analisis Kinematika Perpindahan Volume (*Volumetric Conservation Law*)
Selama tahap penetrasi (*plunge stage*), selongsong bergerak menembus lembaran sedalam $h_s(t)$ dengan kecepatan penetrasi $v_{p,s} = \frac{dh_s}{dt}$. Agar tidak terjadi cacat *flash* keluar di bawah *clamping ring* atau kelebihan tekanan hidrostatis lokal yang merusak struktur kristal, volume logam plastis yang digusur oleh *sleeve* ($V_{displaced}$) harus secara simultan sama persis dengan volume ruang kosong (*cavity*) yang dibuka oleh pin yang bergerak mundur sedalam $h_p(t)$ dengan laju $v_{r,p} = \frac{dh_p}{dt}$.

Persamaan kekekalan volume fluida plastis inkompresibel:

$$V_{displaced} = V_{cavity}$$

$$\frac{\pi}{4} \cdot \left( D_s^2 - D_p^2 \right) \cdot h_s(t) = \frac{\pi}{4} \cdot D_p^2 \cdot h_p(t)$$

Dengan mendiferensialkan terhadap waktu $t$, hubungan rasio kecepatan aksial antara pin dan sleeve dirumuskan secara analitis:

$$\frac{v_{r,p}(t)}{v_{p,s}(t)} = \frac{dh_p / dt}{dh_s / dt} = \frac{D_s^2 - D_p^2}{D_p^2} = \left( \frac{D_s}{D_p} \right)^2 - 1$$

Di mana:
- $D_s$ = Diameter luar selongsong (*outer sleeve diameter*), $[\text{mm}]$.
- $D_p$ = Diameter pin dalam (*pin diameter* = diameter dalam *sleeve*), $[\text{mm}]$.
- $h_s(t)$ = Kedalaman penetrasi selongsong sebagai fungsi waktu, $[\text{mm}]$.
- $h_p(t)$ = Jarak retraksi pin ke atas sebagai fungsi waktu, $[\text{mm}]$.
- $v_{p,s}(t)$ = Kecepatan aksial penetrasi selongsong (*sleeve plunge rate*), $[\text{mm/s}]$.
- $v_{r,p}(t)$ = Kecepatan aksial retraksi pin (*pin retraction rate*), $[\text{mm/s}]$.

Jika rasio kecepatan ini tidak dipenuhi secara sinkron oleh sistem kontrol servo elektro-hidrolik mesin, akan timbul cacat formasi:
1. **Under-retraction ($v_{r,p} < v_{r,p}^{ideal}$)**: Tekanan fluida plastis berlebih menyebabkan logam menerobos celah toleransi antara *clamping ring* dan *sleeve*, menimbulkan *heavy flashing* dan penurunan massa sambungan.
2. **Over-retraction ($v_{r,p} > v_{r,p}^{ideal}$)**: Terbentuk rongga udara (*cavity void*) di bawah pin, menyebabkan cacat *unbonded interface* atau *internal void* saat proses pengisian balik (*refill*).

---

## 3. Pembangkitan Panas Gesek & Termofluidika Viskoplastis Solid-State

Pembangkitan panas dalam RFSSW merupakan gabungan dari disipasi daya gesek kontak (*frictional contact dissipation*) pada antarmuka perkakas-benda kerja dan disipasi kerja deformasi plastis volumetrik (*volumetric plastic shear strain dissipation*).

### 3.1 Pembangkitan Laju Panas Gesek Total ($Q_{total}$)
Laju pembangkitan panas total dinyatakan sebagai penjumlahan kontribusi muka kontak *sleeve* ($Q_{sleeve}$) dan muka *pin* ($Q_{pin}$):

$$Q_{total}(t) = Q_s(t) + Q_p(t)$$

Pada permukaan kontak putar dengan kecepatan sudut rotasi $\omega\ [\text{rad/s}]$, tegangan geser kontak antarmuka dimodelkan dengan hukum gesekan Coulomb-Tresca termodifikasi:

$$\tau_{contact} = \min \left( \mu \cdot P_N,\ \tau_{yield}(T, \dot{\varepsilon}) \right) = \min \left( \mu \cdot P_N,\ \frac{\sigma_y(T, \dot{\varepsilon})}{\sqrt{3}} \right)$$

Untuk selongsong berongga (*hollow sleeve*) dengan radius luar $R_{s,out} = D_s/2$ dan radius dalam $R_{s,in} = D_p/2$:

$$Q_s(t) = \int_{R_{s,in}}^{R_{s,out}} 2\pi \cdot r \cdot \tau_{contact} \cdot (\omega \cdot r) \, dr + 2\pi R_{s,out} \cdot h_s(t) \cdot \tau_{cyl,out} \cdot (\omega R_{s,out}) + 2\pi R_{s,in} \cdot h_s(t) \cdot \tau_{cyl,in} \cdot (\omega R_{s,in})$$

$$Q_{s,face} = \frac{2}{3} \pi \cdot \tau_{contact} \cdot \omega \cdot \left( R_{s,out}^3 - R_{s,in}^3 \right)$$

Untuk permukaan ujung pin beradius $R_p = D_p/2$:

$$Q_{p,face} = \frac{2}{3} \pi \cdot \tau_{contact} \cdot \omega \cdot R_p^3$$

### 3.2 Persamaan Konstitutif Tegangan Alir Viskoplastis (Model Johnson-Cook)
Selama pembentukan las titik gesek, logam mengalami laju regangan geser sangat tinggi ($\dot{\varepsilon} \approx 10^2 - 10^4\ \text{s}^{-1}$) pada temperatur homolog tinggi ($T/T_m \approx 0.6 - 0.85$). Tegangan alir plastis material dimodelkan menggunakan persamaan konstitutif Johnson-Cook:

$$\sigma_{flow} = \left[ A + B \cdot \varepsilon_p^n \right] \cdot \left[ 1 + C \cdot \ln \left( \frac{\dot{\varepsilon}_p}{\dot{\varepsilon}_0} \right) \right] \cdot \left[ 1 - \left( \frac{T - T_{ref}}{T_m - T_{ref}} \right)^m \right]$$

Di mana:
- $A$ = Tegangan luluh awal pada temperatur referensi (*yield strength*), $[\text{MPa}]$.
- $B$ = Koefisien pengerasan regangan (*strain hardening modulus*), $[\text{MPa}]$.
- $n$ = Eksponen pengerasan regangan (*hardening exponent*).
- $C$ = Koefisien sensitivitas laju regangan (*strain rate sensitivity coefficient*).
- $m$ = Eksponen pelunakan termal (*thermal softening exponent*).
- $\dot{\varepsilon}_0$ = Laju regangan referensi kuasi-statis ($\approx 1.0\ \text{s}^{-1}$).
- $T_m$ = Titik leleh absolut material logam induk, $[\text{K}]$.
- $T_{ref}$ = Temperatur referensi ($298.15\ \text{K}$).

---

## 4. Evolusi Struktur Mikro, Metalurgi Zona Las, dan Karakteristik Cacat

Sambungan RFSSW memiliki empat zona metalurgi yang khas dengan variasi ukuran butir kristal dan densitas dislokasi:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                         DISTRIBUSI ZONA METALURGI & PROFIL KEKERASAN MIKRO SAMBUNGAN RFSSW                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|              BM                 HAZ             TMAZ             SZ             TMAZ             HAZ             BM   |
|        (Base Metal)       (Heat-Affected)   (Thermo-Mech)   (Stir Zone)    (Thermo-Mech)   (Heat-Affected)   (Base Metal)
|                                                                                                                       |
|         Butir Kasar         Butir Kasar      Butir Terdistorsi  Butir Sangat Halus  Butir Terdistorsi  Butir Kasar    Butir Kasar |
|         Struktur Asli       Presipitat Kasar Terdeformasi Kuat  Rekristalisasi      Terdeformasi Kuat  Presipitat Ksr Struktur Asli|
|         (Rolled Grain)      (Overaged)       (Rotasi Geser)     Dinamis (DRX)       (Rotasi Geser)     (Overaged)     (Rolled)    |
|       ┌──────────────┐     ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   ┌──────────────┐  ┌──────────────┐ ┌────────┐   |
|       │  Grain Size  │     │  Grain Size  │  │  Grain Size  │  │  Grain Size  │   │  Grain Size  │  │  Grain Size  │ │  Grain │   |
|       │  30 - 50 µm  │     │  30 - 50 µm  │  │  15 - 30 µm  │  │  1.5 - 4 µm  │   │  15 - 30 µm  │  │  30 - 50 µm  │ │ 30-50µm│   |
|       └──────────────┘     └──────────────┘  └──────────────┘  └──────────────┘   └──────────────┘  └──────────────┘ └────────┘   |
|                                                                                                                       |
|         Profil Kekerasan Mikro Vickers (HV) - Tipikal Paduan Aluminium Age-Hardenable (AA2024-T3 / AA7075-T6)        |
|         Hardness (HV)                                                                                                |
|           ▲                                                                                                          |
|       140 ┼──┐ (BM)                                                                                     ┌── (BM)     |
|           │  │                                                                                          │            |
|       120 ┼──┴───┐                                      ┌───────────────┐                             ┌─┴────────────|
|           │      │                                      │  SZ (HV Naik  │                             │              |
|       100 ┼──────┴───────┐                              │  akibat Hall- │                      ┌──────┴──────────────┤
|           │              │  HAZ (Softening /            │  Petch DRX)   │       HAZ            │                     |
|        80 ┼──────────────┴── Presipitat Larut) ─────────┴───────────────┴──────────────────────┴─────────────────────┤
|           │                                                                                                          |
|         0 ┼──────────────────────────────────────────────────────────────────────────────────────────────────────────►|
|           -15            -10             -5             0               +5             +10            +15   Jarak (mm)|
|                                                    Pusat Sambungan (Centerline)                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Mekanisme Rekristalisasi Dinamik (*Continuous Dynamic Recrystallization / CDRX*)
Di dalam zona inti adukan (*Stir Zone / SZ*), regangan geser plastis masif dan temperatur puncak ($400 - 500\ ^\circ\text{C}$ untuk Al) memicu fenomena CDRX. Ukuran butir rekristalisasi ekiax rata-rata ($d_{grain}$) dimodelkan menggunakan persamaan parameter Zener-Hollomon ($Z$):

$$Z = \dot{\varepsilon} \cdot \exp \left( \frac{Q_{def}}{R \cdot T_{peak}} \right)$$

$$d_{grain} = A_z \cdot Z^{-n_z}$$

Di mana $Q_{def}$ adalah energi aktivasi deformasi kisi ($\approx 145 - 160\text{ kJ/mol}$ untuk aluminium), $R = 8.314\text{ J/(mol}\cdot\text{K)}$, $A_z$ dan $n_z$ adalah konstanta material ($n_z \approx 0.25 - 0.35$). Pengecilan ukuran butir dari $40\ \mu\text{m}$ (material induk) menjadi $1.5 - 3.5\ \mu\text{m}$ (SZ) meningkatkan kekuatan lokal menurut relasi Hall-Petch:

$$\sigma_y = \sigma_0 + \frac{k_y}{\sqrt{d_{grain}}}$$

### 4.2 Cacat Khas Sambungan RFSSW & Kriteria Mitigasi

| Jenis Cacat | Penyebab Fisik & Fenomenologi | Dampak Mekanis | Parameter Mitigasi Standar ISO 18785 |
| :--- | :--- | :--- | :--- |
| **Hooking Defect (Defleksi Antarmuka)** | Lapisan oksida antarmuka terdorong ke atas oleh penetrasi *sleeve* melengkung ke arah lembaran atas | Menjadi konsentrasi tegangan inisiasi retak lelah (*fatigue crack notch*) | Optimasi kedalaman penetrasi $h_s \le 0.85 \times$ tebal pelat bawah; naikkan gaya penempaan (*forge pressure*) |
| **Incomplete Refill (Void Lubang Kunci)** | Rasio laju pin/sleeve tidak seimbang atau waktu penahanan penempaan (*dwell time*) terlalu singkat | Penurunan luas penampang efektif penahan beban geser tarik | Sinkronisasi servo linier volumetrik; tambah *dwell time* ($t_{dwell} \ge 1.0\text{ s}$) |
| **Bonding Line / Kissing Bond** | Dekomposisi lapisan oksida aluminium ($\text{Al}_2\text{O}_3$) tidak sempurna akibat panas gesek kurang | Kekuatan tarik silang (*cross-tension strength*) anjlok drastis | Naikkan kecepatan rotasi spindel $\omega \ge 1800\text{ RPM}$ atau perlambat laju penetrasi $v_{p,s}$ |
| **Outer Ring Flash** | Celah geser mekanis antara *clamping ring* dan *sleeve* aus ($> 0.05\text{ mm}$) atau tekanan jepit $F_{clamp}$ kurang | Pengurangan ketebalan pelat sisa (*undercut*) dan keausan perkakas | Tingkatkan gaya penjepit $F_{clamp} \ge 8\text{ kN}$; ganti ring ber-toleransi presisi |

---

## 5. Implementasi Python: Simulasi Termomekanika RFSSW, Kinematika Volumetrik & Prediksi Kekuatan Sambungan

Berikut adalah skrip Python komprehensif untuk memodelkan proses RFSSW, menghitung kinematika sinkronisasi pin-sleeve, memprediksi profil temperatur transien menggunakan metode beda hingga 1D, dan mengestimasi beban geser patah tarik (*Lap Shear Separation Load / LSS*):

```python
"""
RuangTI - Industrial Engineering Knowledge Base Engine
Modul 635: Refill Friction Stir Spot Welding (RFSSW) Simulation & Optimization
Standard Compliance: ISO 18785, AWS D17.2, ASTM E8M
"""

import math
from typing import Dict, List, Tuple

class RFSSWSimulator:
    def __init__(
        self,
        d_sleeve_out: float = 9.0,   # mm (Diameter Luar Sleeve)
        d_pin: float = 5.2,          # mm (Diameter Pin = Diameter Dalam Sleeve)
        sheet1_thickness: float = 1.6, # mm (Tebal Lembaran Atas Al 2024-T3)
        sheet2_thickness: float = 1.6, # mm (Tebal Lembaran Bawah Al 2024-T3)
        rpm: float = 2000.0,         # RPM (Kecepatan Sudut Spindel)
        plunge_depth: float = 2.2,   # mm (Kedalaman Penetrasi Sleeve)
        plunge_time: float = 2.0,    # s (Waktu Penetrasi)
        dwell_time: float = 1.0,     # s (Waktu Tahan Pengadukan)
        refill_time: float = 2.0,    # s (Waktu Pengisian Balik / Penempaan)
        clamping_force: float = 10.0 # kN (Gaya Penjepit Clamping Ring)
    ):
        self.d_s = d_sleeve_out
        self.d_p = d_pin
        self.t1 = sheet1_thickness
        self.t2 = sheet2_thickness
        self.t_total = self.t1 + self.t2
        self.rpm = rpm
        self.omega = (2.0 * math.pi * rpm) / 60.0  # rad/s
        self.h_plunge = plunge_depth
        self.t_plunge = plunge_time
        self.t_dwell = dwell_time
        self.t_refill = refill_time
        self.t_cycle = plunge_time + dwell_time + refill_time
        self.f_clamp = clamping_force * 1000.0  # N

        # Sifat Termofisik Aluminium Paduan AA2024-T3
        self.rho = 2780.0       # kg/m^3 (Densitas)
        self.cp = 875.0         # J/(kg*K) (Kapasitas Panas Spesifik)
        self.k_th = 121.0       # W/(m*K) (Konduktivitas Termal)
        self.t_solidus = 502.0  # °C (Temperatur Solidus AA2024)
        self.t_ambient = 25.0   # °C
        self.base_uts = 470.0   # MPa (Ultimate Tensile Strength Induk)
        self.base_yield = 325.0 # MPa (Yield Strength Induk)

    def calculate_kinematics(self) -> Dict[str, float]:
        """
        Menghitung kinematika perpindahan volume dan rasio kecepatan pin terhadap sleeve.
        Hukum Kekekalan Volume: A_sleeve * h_s = A_pin * h_p
        """
        area_sleeve = (math.pi / 4.0) * (self.d_s**2 - self.d_p**2)  # mm^2
        area_pin = (math.pi / 4.0) * (self.d_p**2)                   # mm^2
        vol_displaced = area_sleeve * self.h_plunge                  # mm^3

        # Retraksi aksial pin yang dibutuhkan secara teoretis
        pin_retract_depth = vol_displaced / area_pin  # mm
        speed_ratio = (self.d_s**2 - self.d_p**2) / (self.d_p**2)
        v_plunge_sleeve = self.h_plunge / self.t_plunge  # mm/s
        v_retract_pin = pin_retract_depth / self.t_plunge # mm/s

        return {
            "area_sleeve_mm2": round(area_sleeve, 3),
            "area_pin_mm2": round(area_pin, 3),
            "vol_displaced_mm3": round(vol_displaced, 3),
            "pin_retract_depth_mm": round(pin_retract_depth, 3),
            "velocity_ratio_pin_to_sleeve": round(speed_ratio, 3),
            "sleeve_plunge_speed_mm_s": round(v_plunge_sleeve, 3),
            "pin_retract_speed_mm_s": round(v_retract_pin, 3)
        }

    def simulate_thermal_cycle(self) -> Dict[str, float]:
        """
        Estimasi pembangkitan daya termal dan temperatur puncak pada zona adukan (Stir Zone).
        """
        # Tegangan geser kontak efektif saat plastis (Tresca shear limit ~ sigma_y / sqrt(3))
        # Pada temperatur tinggi ~ 400°C, sigma_y turun menjadi ~ 70 MPa
        tau_yield_hot = 70.0 * 1e6  # Pa
        r_s_out = (self.d_s / 2.0) * 1e-3  # m
        r_s_in = (self.d_p / 2.0) * 1e-3   # m
        r_p = (self.d_p / 2.0) * 1e-3      # m

        # Pembangkitan panas torsi gesek pada ujung muka perkakas
        # Q = 2/3 * pi * tau * omega * (R_out^3 - R_in^3)
        q_sleeve_face = (2.0 / 3.0) * math.pi * tau_yield_hot * self.omega * (r_s_out**3 - r_s_in**3) # Watt
        q_pin_face = (2.0 / 3.0) * math.pi * tau_yield_hot * self.omega * (r_p**3) # Watt
        q_total = q_sleeve_face + q_pin_face # Watt

        # Volume zona terdeformasi termal lokal
        vol_stir_m3 = (math.pi / 4.0) * ((self.d_s * 1e-3)**2) * (self.h_plunge * 1.2 * 1e-3)
        mass_stir = self.rho * vol_stir_m3 # kg

        # Efisiensi perpindahan panas ke benda kerja (eta ~ 0.55, sisanya ke backing anvil & perkakas)
        eta_th = 0.55
        heat_input_j = q_total * (self.t_plunge + self.t_dwell) * eta_th

        # Estimasi temperatur puncak rata-rata zona aduk
        delta_t = (heat_input_j * 0.35) / (mass_stir * self.cp)
        t_peak = self.t_ambient + delta_t
        if t_peak > (self.t_solidus - 15.0):
            t_peak = self.t_solidus - 15.0  # Terbatas secara termodinamika pada batas solidus

        return {
            "heat_generation_total_watts": round(q_total, 1),
            "peak_temperature_celsius": round(t_peak, 1),
            "homologous_temperature_ratio": round((t_peak + 273.15) / (self.t_solidus + 273.15), 3)
        }

    def predict_mechanical_strength(self) -> Dict[str, float]:
        """
        Prediksi kekuatan geser tarik (Lap Shear Separation Load) berdasarkan ISO 18785.
        Kekuatan ditentukan oleh area geser efektif pada antarmuka pelat dan kekuatan luluh HAZ/SZ.
        """
        kin = self.calculate_kinematics()
        therm = self.simulate_thermal_cycle()

        # Diameter bonded nugget efektif di antarmuka sambungan
        d_bonded_eff = self.d_s * 1.05  # mm (Sedikit melebihi diameter sleeve akibat adukan termomekanis)
        area_bonded = (math.pi / 4.0) * (d_bonded_eff**2)  # mm^2

        # Tegangan geser kritis patah antarmuka (0.6 * UTS lokal SZ/HAZ)
        # Efisiensi sambungan pada Al 2024-T3 berkisar antara 75% s/d 92% UTS material induk
        joint_efficiency = 0.84 if therm["peak_temperature_celsius"] < 480.0 else 0.76
        tau_shear_failure = (self.base_uts * joint_efficiency) / math.sqrt(3.0)  # MPa

        # Prediksi Lap Shear Tensile Force (LSS)
        # Kegagalan geser antarmuka vs perobekan lembaran (nugget pull-out)
        f_shear_failure = area_bonded * tau_shear_failure  # N
        
        # Kapasitas tarik silang (Cross-Tension Load ~ 0.45 - 0.55 dari Lap Shear)
        f_cross_tension = f_shear_failure * 0.48  # N

        return {
            "effective_bonded_diameter_mm": round(d_bonded_eff, 2),
            "effective_bonded_area_mm2": round(area_bonded, 2),
            "joint_efficiency_percent": round(joint_efficiency * 100.0, 1),
            "lap_shear_force_kn": round(f_shear_failure / 1000.0, 2),
            "cross_tension_force_kn": round(f_cross_tension / 1000.0, 2)
        }

if __name__ == "__main__":
    sim = RFSSWSimulator(
        d_sleeve_out=9.0,
        d_pin=5.2,
        sheet1_thickness=1.6,
        sheet2_thickness=1.6,
        rpm=2200.0,
        plunge_depth=2.1,
        plunge_time=1.8,
        dwell_time=1.0,
        refill_time=1.8,
        clamping_force=12.0
    )

    print("=== RFSSW KINEMATICS ANALYSIS ===")
    for k, v in sim.calculate_kinematics().items():
        print(f"  {k}: {v}")

    print("\n=== RFSSW THERMAL PROCESS ===")
    for k, v in sim.simulate_thermal_cycle().items():
        print(f"  {k}: {v}")

    print("\n=== RFSSW MECHANICAL STRENGTH PREDICTION ===")
    for k, v in sim.predict_mechanical_strength().items():
        print(f"  {k}: {v}")
```

---

## 6. Studi Kasus Industri: Penggantian Keling Titanium pada Panel *Fuselage* Dirgantara AA2024-T3 / AA7075-T6

### 6.1 Latar Belakang Masalah
Pabrikan aerostruktur terkemuka merakit panel kulit badan pesawat (*fuselage skin panels*) yang terdiri dari lembaran paduan aluminium Al-Cu AA2024-T3 ($t_1 = 1.6\text{ mm}$) dan pengaku *stringer* ekstrusi Al-Zn AA7075-T6 ($t_2 = 2.0\text{ mm}$). Metode penyambungan awal menggunakan paku keling paduan titanium *Hi-Lok* berdiameter $4.8\text{ mm}$ dengan total 14.500 titik per sub-rakit.

Tantangan utama yang dihadapi:
1. **Penambahan Bobot Parasitik (*Parasitic Weight*)**: Berat pengencang mekanis (*fasteners*) titanium menyumbang $42\text{ kg}$ per seksi panel.
2. **Biaya Manufaktur & Waktu Siklus**: Tahapan pengeboran lubang presisi (*hole drilling*), *countersinking*, inspeksi retak mikro lubang (*hole deburring*), dan pemasangan *fastener* membutuhkan waktu $48\text{ detik/titik}$.
3. **Konsentrasi Tegangan Lubang**: Lubang baut menjadi lokasi awal inisiasi retak lelah akibat efek takik (*notch fatigue effect*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       PERBANDINGAN KELING TITANIUM VS RFSSW PADA PANEL DIRGANTARA AA2024-T3                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    METODE A: PAKU KELING TITANIUM HI-LOK (KONVENSIONAL)      METODE B: REFILL FRICTION STIR SPOT WELDING (RFSSW)     |
|                                                                                                                       |
|         Kepala Keling (Fastener Head)                             Permukaan Las Datar Bebas Lubang Kunci (Flush)      |
|             ┌─────────────┐                                           ═════════════════════════════════════           |
|         ┌───┴─────────────┴───┐                                       ┌───────────────────────────────────┐           |
|         │  AA2024-T3 Skin     │ (Lubang Bor)                          │ AA2024-T3 Fuselage Skin           │           |
|    ─────┴──┐               ┌──┴─────                             ─────┴───────────────────────────────────┴─────      |
|    ════════│  Batang       │════════                             ═══════════════╦═══════════════╦══════════════       |
|    ─────┬──┘  Fastener     └──┬─────                             ─────┬─────────╢ Inti Las (SZ) ╟─────────┬─────      |
|         │  AA7075-T6 Stringer │                                       │         ║ Rekristalisasi║         │           |
|         └───┬─────────────┬───┘ (Retak Takik Awal)                    │ AA7075  ║ Dinamis Halus ║ AA7075  │           |
|             └─────────────┘ Collar                                    │ Stringer╚═══════════════╝ Stringer│           |
|                                                                       └───────────────────────────────────┘           |
|                                                                                                                       |
|    • Waktu Siklus: 48 s / titik                                       • Waktu Siklus: 4.6 s / titik (Hemat 90.4%)     |
|    • Penambahan Bobot: +42 kg / panel                                 • Penambahan Bobot: 0 kg (Hemat 100% Fastener)  |
|    • Batas Beban Lelah (10^6 siklus): 2.4 kN                          • Batas Beban Lelah (10^6 siklus): 3.9 kN (+62%)|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Penerapan Solusi & Parameter Optimasi RFSSW
Tim rekayasa manufaktur mengimplementasikan mesin RFSSW servo elektro-hidrolik 4-sumbu terprogram CNC dengan konfigurasi perkakas:
- Diameter Luar Sleeve ($D_s$): $9.0\text{ mm}$ (Baja Perkakas H13 Nitrided)
- Diameter Pin ($D_p$): $5.2\text{ mm}$
- Kecepatan Spindel ($\omega$): $2200\text{ RPM}$
- Kedalaman Penetrasi Sleeve ($h_s$): $2.2\text{ mm}$ (Menembus $0.6\text{ mm}$ ke pelat bawah AA7075)
- Waktu Penetrasi ($t_p$): $1.8\text{ s}$
- Waktu Pengadukan (*Dwell*): $1.0\text{ s}$
- Waktu Pengisian Balik (*Refill*): $1.8\text{ s}$
- Gaya Jepit Ring ($F_{clamp}$): $12.0\text{ kN}$
- Gaya Penempaan Akhir Pin ($F_{forge}$): $16.5\text{ kN}$

### 6.3 Hasil Kuantitatif & Validasi Mekanis
1. **Kekuatan Tarik Geser Statis (*Lap Shear Load*)**: Rata-rata beban putus geser mencapai $9.82\text{ kN}$, melampaui batas minimum spesifikasi AWS D17.2 Kelas A ($7.20\text{ kN}$) sebesar $+36.4\%$.
2. **Kekuatan Tarik Silang (*Cross-Tension Load*)**: Mencapai $4.75\text{ kN}$ dengan moda patah *full nugget pull-out* (bukan pemisahan antarmuka getas).
3. **Ketahanan Lelah Siklik (*Fatigue Life*)**: Pada amplitudo beban sinusoidal $R = 0.1$ dengan beban puncak $3.0\text{ kN}$, usia lelah rata-rata meningkat dari $2.4 \times 10^5$ siklus (keling titanium) menjadi $1.15 \times 10^6$ siklus (RFSSW).
4. **Efisiensi Waktu & Biaya Manufaktur**: Total waktu perakitan satu panel terpangkas dari $193.3\text{ jam-orang}$ menjadi $18.5\text{ jam-orang}$ (efisiensi waktu $90.4\%$) dengan penghematan biaya komponen *fastener* sebesar $\$18,200$ per seksi pesawat.

---

## 7. Referensi Terverifikasi & Standar Industri

1. **ISO 18785-1:2018 / ISO 18785-2:2018**: *Friction spot welding — Aluminium — Part 1: Vocabulary and definitions; Part 2: Design of weld joints*. International Organization for Standardization, Geneva, Switzerland.
2. **AWS D17.2/D17.2M:2019**: *Specification for Resistance Welding and Friction Spot Welding for Aerospace Applications*. American Welding Society (AWS), Miami, FL, USA.
3. **ASTM E8/E8M-24**: *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA, USA. DOI: `10.1520/E0008_E0008M-24`.
4. **Mishra, R. S., & Mahoney, M. W.** (2007). *Friction Stir Welding and Processing*. ASM International, Materials Park, OH, USA. ISBN: 978-0-87170-840-3.
5. **Shen, Z., Yang, X., Zhang, Z., Murtaza, G., & Cui, L.** (2013). *Microstructure and mechanical properties of refill friction stir spot welded 7075-T6 aluminum alloy*. *Materials & Design*, 54, 766-773. DOI: `10.1016/j.matdes.2013.08.100`.
6. **Rosendo, T. S., Tier, M. A. D., Mazzaferro, J. A. E., Mazzaferro, C. P., Strohaecker, T. R., & dos Santos, J. F.** (2015). *Mechanical and metallurgical properties of refill friction stir spot welded AA2024-T3 joints*. *Journal of Materials Processing Technology*, 225, 418-428. DOI: `10.1016/j.jmatprotec.2015.06.022`.
7. **Kluz, R., Kubit, A., & Bucior, M.** (2022). *Experimental and numerical investigation of the RFSSW process parameters on the lap shear strength of 7075-T6 aluminum alloy joints*. *Archives of Civil and Mechanical Engineering*, 22(1), 18. DOI: `10.1007/s43452-021-00339-4`.
8. **Zou, Y., Zhang, Z., & Chen, J.** (2024). *Material flow and metallurgical bonding mechanism during sleeve-plunge refill friction stir spot welding of dissimilar Al/steel sheets*. *Journal of Manufacturing Processes*, 112, 142-156. DOI: `10.1016/j.jmapro.2024.01.034`.
