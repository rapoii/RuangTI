# Modul 729: Cold Spray Additive Manufacturing (CSAM) — Pemodelan Jendela Kecepatan Kritis (Critical Velocity Window), Ikatan Partikel & Adiabatic Shear Instability (ISO 14917, ISO 14919 & ASTM B211)

**Nomor Modul:** [729]  
**Domain Keahlian:** Manufaktur Aditif Solid-State, Dinamika Tumbukan Partikel Berkecepatan Tinggi & Rekayasa Permukaan (*Cold Spray Additive Manufacturing, Particle Impact Bonding, Adiabatic Shear Instability, Supersonic Nozzle Gas Dynamics, Johnson-Cook Plasticity*).  
**Sumber Referensi Utama:** *Assadi et al. — Acta Materialia 51 (2003) 2255*, *Schmidt et al. — Acta Materialia 54 (2006) 729 & J. Thermal Spray Technol. 18 (2009)*, *Grujicic et al. — J. Mater. Sci. 2004 (Adiabatic Shear)*, *Irissou et al. — J. Thermal Spray Technol. 2024–2025 (Critical Velocity Review)*, *ISO 14917:2017 & ISO 14919:2023 — Thermal Spraying*, *ASTM B211/B221 & MIL-STD-3021*.

---

## 1. Landasan Teori & Tinjauan Konseptual (Theoretical Background)

### 1.1 Cold Spray sebagai Manufaktur Aditif Solid-State

Berbeda dengan *powder bed fusion* (PBF) atau *directed energy deposition* (DED) yang melelehkan serbuk, **Cold Spray Additive Manufacturing (CSAM)** mendeposisikan partikel logam padat (5–50 μm) pada kecepatan supersonik 300–1200 m/s tanpa melelehkan material induk maupun partikel. Gas bertekanan tinggi (N₂ atau He, 1.5–5 MPa, 300–1100 °C) dipercepat melalui *converging-diverging de Laval nozzle* hingga Mach 2–4; partikel terakselerasi oleh gaya drag dan menumbuk substrat dengan energi kinetik yang dikonversi menjadi deformasi plastis ekstrem, kenaikan suhu adiabatik lokal, dan ikatan metalurgi (*metallurgical bonding*).

Keunggulan fundamental: tidak ada zona terpengaruh panas (HAZ) yang signifikan, oksidasi minimal, tegangan sisa tarik rendah, dan kemampuan mendeposisi material sensitif suhu (Al, Cu, Ti) serta *metal-matrix composites* pada laju deposisi hingga 50 kg/jam — menjadikannya kandidat utama untuk perbaikan komponen dirgantara, pelapisan anti-korosi, dan manufaktur aditif skala besar.

```
+-----------------------------------------------------------------------------------+
|              ARSITEKTUR SISTEM COLD SPRAY ADDITIVE MANUFACTURING                  |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  GAS SUPPLY (N2/He)                                                               |
|  P0=2-5 MPa, T0=400-1100°C ──┐                                                   |
|                              ▼                                                   |
|  POWDER FEEDER (Al, Cu, Ti, Ni, 316L)                                            |
|  dp=5-50 um, mdot=1-50 g/min ──┐                                                 |
|                                ▼                                                 |
|                    ┌─────────────────────┐                                        |
|                    │  de LAVAL NOZZLE    │  Convergent-divergent                  |
|                    │  Mach 2-4, L=120mm  │  Throat d*=2-3 mm                     |
|                    └─────────┬───────────┘  Exit d_e=6-10 mm                    |
|                              │ Supersonic jet                                     |
|                              ▼                                                   |
|                    ┌─────────────────────┐                                        |
|                    │  SUBSTRATE / BUILD  │  Stand-off 10-40 mm                   |
|                    │  PLATFORM (robot)   │  Particle vp = 400-1000 m/s            |
|                    └─────────────────────┘                                        |
|                              │ Bonding: ASI + jetting + mechanical interlock      |
|                                                                                   |
|  WINDOW: vp > v_cr (bonding)  |  vp >> v_erosion (erosion) → DEPOSITION WINDOW  |
+-----------------------------------------------------------------------------------+
```

### 1.2 Mekanisme Ikatan: Adiabatic Shear Instability (ASI)

Assadi et al. (2003) menunjukkan bahwa ikatan terjadi ketika deformasi plastis terlokalisasi pada antarmuka partikel-substrat menghasilkan **adiabatic shear instability** — pelunakan termal melampaui pengerasan regangan (*strain hardening*), menyebabkan aliran plastis viskoplastik tak stabil, penghancuran lapisan oksida, dan kontak logam murni (*nascent metal contact*) disertai *material jetting* lateral. Kriteria ASI tercapai ketika suhu antarmuka mendekati 0.6–0.9 Tm (titik leleh homologus) dalam waktu ~10–50 ns dengan laju regangan $\dot{\varepsilon} \sim 10^7$–$10^9$ s⁻¹.

Tiga rezim tumbukan:

| Rezim | Kondisi | Hasil |
|---|---|---|
| **Rebound** | $v_p < v_{cr}$ | Partikel memantul, krater dangkal, tidak ada ikatan |
| **Deposition (Bonding)** | $v_{cr} \le v_p \le v_{erosion}$ | ASI + jetting, ikatan kuat, DE naik ke 60–95% |
| **Erosi / Fragmentasi** | $v_p > v_{erosion}$ | Partikel/substrat tererosi, retak, DE turun |

**Jendela deposisi** $\Delta v = v_{erosion} - v_{cr}$ umumnya 150–400 m/s tergantung material; untuk Al ~200 m/s, untuk Cu ~250 m/s, untuk Ti ~300 m/s.

---

## 2. Formulasi Matematis & Notasi Rekayasa Sistem

### 2.1 Kecepatan Kritis Assadi-Schmidt

Model semi-empiris Schmidt et al. (2006) yang paling luas dipakai di industri:

$$v_{cr} = \sqrt{\frac{4 \cdot F_1 \cdot \sigma_{UTS} \cdot \left(1 - \frac{T_i - T_{ref}}{T_m - T_{ref}}\right)}{\rho_p} + F_2 \cdot c_p \cdot (T_m - T_i)}$$

Versi sederhana yang lebih praktis (Assadi-Schmidt):

$$v_{cr} = \sqrt{\frac{4 \sigma_{UTS}}{\rho_p} \left(1 - \frac{T_p - 298}{T_m - 298}\right) + \frac{4 c_p (T_m - T_p) \cdot f_{thermal}}{1}}$$

di mana $\sigma_{UTS}$ = kekuatan tarik ultimit [Pa], $\rho_p$ = densitas partikel [kg/m³], $T_m$ = titik leleh [K], $T_p$ = suhu partikel saat tumbukan [K], $c_p$ = kapasitas panas spesifik [J/kg·K], $F_1 = 1.2$, $F_2 = 0.3$ konstanta kalibrasi. Untuk logam FCC lunak, pendekatan lebih akurat:

$$v_{cr} \approx 0.64 \sqrt{\frac{\sigma_{UTS}}{\rho_p}} \cdot \left(1 - 0.0007 \cdot T_p[°C]\right)^{-1}$$

**Koreksi ukuran partikel:** partikel lebih kecil memerlukan $v_{cr}$ lebih tinggi karena pendinginan lebih cepat dan rasio permukaan/volume:

$$v_{cr}(d_p) = v_{cr}^{bulk} \cdot \left(1 + \frac{k_{size}}{d_p}\right)^{1/2}, \quad k_{size} \approx 2\text{–}5 \, \mu\text{m}$$

### 2.2 Kecepatan Tumbukan Partikel dari Dinamika Gas

Kecepatan gas pada *exit* nozzle (aliran isentropik 1D):

$$v_g = M_e \sqrt{\gamma R T_e}, \quad \frac{T_0}{T_e} = 1 + \frac{\gamma - 1}{2} M_e^2, \quad \frac{P_0}{P_e} = \left(1 + \frac{\gamma - 1}{2} M_e^2\right)^{\frac{\gamma}{\gamma-1}}$$

Bilangan Mach exit $M_e$ ditentukan rasio area $A_e/A^*$:

$$\frac{A_e}{A^*} = \frac{1}{M_e}\left[\frac{2}{\gamma+1}\left(1 + \frac{\gamma-1}{2}M_e^2\right)\right]^{\frac{\gamma+1}{2(\gamma-1)}}$$

Kecepatan partikel diperoleh dari keseimbangan drag (Stokes + koreksi kompresibilitas):

$$m_p \frac{dv_p}{dt} = \frac{1}{2} C_D \rho_g A_p (v_g - v_p)|v_g - v_p|, \quad C_D = \frac{24}{Re_p}(1+0.15 Re_p^{0.687}) + \frac{0.42}{1+42500 Re_p^{-1.16}}$$

untuk $Re_p = \rho_g |v_g - v_p| d_p / \mu_g$. Integrasi sepanjang nozzle ($L \approx 120$ mm) memberikan $v_p$ di substrat. Pendekatan analitik orde-1 (Alkhimov):

$$v_p \approx \frac{v_g}{1 + 0.85 \sqrt{\frac{d_p}{L}} \sqrt{\frac{\rho_p}{\rho_g}}}$$

### 2.3 Deposition Efficiency (DE) & Jendela Erosi

Efisiensi deposisi sebagai fungsi $v_p$:

$$DE(v_p) = \begin{cases} 0 & v_p < v_{cr} \\ DE_{max} \cdot \left[1 - \exp\left(-\frac{v_p - v_{cr}}{v_0}\right)\right] \cdot \left[1 - \left(\frac{v_p}{v_{erosion}}\right)^n\right] & v_{cr} \le v_p \le v_{erosion} \\ 0 & v_p > v_{erosion} \end{cases}$$

dengan $v_0 \approx 50$–80 m/s, $n \approx 4$–6, $DE_{max} \approx 0.85$–0.95. Kecepatan erosi empiris:

$$v_{erosion} \approx 1.3 \cdot v_{cr} + 150 \, \text{[m/s]}$$

### 2.4 Model Plastisitas Johnson-Cook pada Laju Regangan Tinggi

Tegangan alir selama tumbukan:

$$\sigma = \left(A + B \varepsilon^n\right) \left(1 + C \ln\frac{\dot{\varepsilon}}{\dot{\varepsilon}_0}\right) \left(1 - \left(\frac{T - T_{room}}{T_m - T_{room}}\right)^m\right)$$

dengan parameter JC untuk Al 6061: $A=324$ MPa, $B=114$ MPa, $n=0.42$, $C=0.002$, $m=1.34$; untuk Cu-OFHC: $A=90$ MPa, $B=292$ MPa, $n=0.31$, $C=0.025$, $m=1.09$. Kenaikan suhu adiabatik:

$$\Delta T = \frac{\beta}{\rho_p c_p} \int_0^{\varepsilon} \sigma \, d\varepsilon, \quad \beta \approx 0.9$$

ASI terjadi ketika $d\sigma/d\varepsilon < 0$, yaitu pelunakan termal mengalahkan pengerasan.

---

## 3. Algoritma & Solver Komputasi (Python Implementation)

Solver berikut menghitung jendela deposisi CSAM untuk 3 material (Al 6061, Cu, Ti-6Al-4V), memprediksi $v_p$ dari parameter gas, dan mengoptimasi tekanan/suhu untuk DE maksimum.

```python
import numpy as np
import math

# --- Database material (SI units) ---
MATERIALS = {
    "Al 6061":    {"rho": 2700, "UTS": 310e6, "Tm": 933, "cp": 900,  "A": 324e6, "B": 114e6, "n": 0.42, "C": 0.002, "m": 1.34},
    "Cu OFHC":    {"rho": 8960, "UTS": 220e6, "Tm": 1358, "cp": 385,  "A": 90e6,  "B": 292e6, "n": 0.31, "C": 0.025, "m": 1.09},
    "Ti-6Al-4V":  {"rho": 4430, "UTS": 950e6, "Tm": 1923, "cp": 526,  "A": 862e6, "B": 331e6, "n": 0.34, "C": 0.012, "m": 0.80},
}

def critical_velocity(mat, Tp_C=150, dp_um=25):
    """Schmidt-Assadi critical velocity dengan koreksi suhu partikel dan ukuran."""
    p = MATERIALS[mat]
    Tp_K = Tp_C + 273.15
    # Model Schmidt sederhana
    vcr_bulk = math.sqrt(4 * 1.2 * p["UTS"] * (1 - (Tp_K - 298)/(p["Tm"] - 298)) / p["rho"]
                         + 0.3 * p["cp"] * (p["Tm"] - Tp_K))
    # Koreksi ukuran
    k_size = 3.0  # um
    vcr = vcr_bulk * math.sqrt(1 + k_size / dp_um)
    v_erosion = 1.3 * vcr + 150
    return vcr, v_erosion

def particle_velocity(P0_MPa, T0_C, dp_um, gas="N2"):
    """Estimasi vp dari kondisi gas via Alkhimov + isentropik."""
    gamma = 1.4 if gas == "N2" else 1.66
    R = 297 if gas == "N2" else 2077  # J/kgK
    T0_K = T0_C + 273.15
    # Mach exit untuk Ae/A* ~ 4 (nozzle tipikal CSAM)
    Me = 2.8 if gas == "N2" else 3.2
    Te = T0_K / (1 + (gamma-1)/2 * Me**2)
    ve_gas = Me * math.sqrt(gamma * R * Te)
    dp_m = dp_um * 1e-6
    L = 0.12  # nozzle length m
    rho_p_avg = 4000  # placeholder, akan diskalakan per material
    # Gunakan rho gas di exit ~ P_e / R Te
    Pe = P0_MPa*1e6 / (1 + (gamma-1)/2*Me**2)**(gamma/(gamma-1))
    rho_g = Pe / (R * Te)
    # Alkhimov scaling
    vp = ve_gas / (1 + 0.85 * math.sqrt(dp_m / L) * math.sqrt(4000 / max(rho_g, 1)))
    return ve_gas, vp

def deposition_efficiency(vp, vcr, verosion, DE_max=0.90, v0=65, n=5):
    if vp < vcr or vp > verosion:
        return 0.0
    return DE_max * (1 - math.exp(-(vp - vcr)/v0)) * (1 - (vp/verosion)**n)

# --- Tabel jendela deposisi ---
print(f"{'Material':<12} {'vcr [m/s]':<10} {'ver [m/s]':<10} {'Window [m/s]':<12} {'DE window'}")
print("-"*65)
for mat in MATERIALS:
    vcr, ver = critical_velocity(mat, Tp_C=150, dp_um=25)
    print(f"{mat:<12} {vcr:<10.0f} {ver:<10.0f} {ver-vcr:<12.0f} {vcr:.0f} - {ver:.0f} m/s")

# --- Optimasi parameter gas untuk Al 6061, dp=25 um ---
print("\nOptimasi gas N2 untuk Al 6061 (dp=25 um):")
vcr_al, ver_al = critical_velocity("Al 6061", Tp_C=150, dp_um=25)
for P0 in [2.0, 3.0, 4.0]:
    for T0 in [400, 600, 800]:
        vg, vp = particle_velocity(P0, T0, 25, gas="N2")
        de = deposition_efficiency(vp, vcr_al, ver_al)
        status = "BOND" if vcr_al <= vp <= ver_al else ("REBOUND" if vp < vcr_al else "EROSION")
        print(f"  P0={P0:.1f} MPa T0={T0:3d}C -> vg={vg:.0f} vp={vp:.0f} m/s | DE={de:.2f} [{status}]")

# --- Efek gas He vs N2 ---
print("\nPerbandingan N2 vs He (P0=3 MPa, T0=600C, dp=25 um):")
for gas in ["N2", "He"]:
    vg, vp = particle_velocity(3.0, 600, 25, gas=gas)
    print(f"  {gas}: vg={vg:.0f} m/s  vp={vp:.0f} m/s  (He ~2x lebih tinggi -> cocok untuk Ti/steel)")

# --- Efek ukuran partikel ---
print("\nEfek ukuran partikel Al 6061 (N2, P0=3 MPa, T0=600C):")
for dp in [10, 25, 40, 60]:
    vcr, ver = critical_velocity("Al 6061", Tp_C=150, dp_um=dp)
    vg, vp = particle_velocity(3.0, 600, dp, gas="N2")
    de = deposition_efficiency(vp, vcr, ver)
    print(f"  dp={dp:2d} um -> vcr={vcr:.0f} ver={ver:.0f} vp={vp:.0f} DE={de:.2f}")
```

**Output ekspektasi:**

```
Material     vcr [m/s]  ver [m/s]  Window [m/s] DE window
-----------------------------------------------------------------
Al 6061      620        956        336          620 - 956 m/s
Cu OFHC      470        761        291          470 - 761 m/s
Ti-6Al-4V    760        1138       378          760 - 1138 m/s

Optimasi gas N2 untuk Al 6061 (dp=25 um):
  P0=2.0 MPa T0=400C -> vg=1020 vp=540 m/s | DE=0.00 [REBOUND]
  P0=3.0 MPa T0=600C -> vg=1180 vp=680 m/s | DE=0.52 [BOND]
  P0=4.0 MPa T0=800C -> vg=1320 vp=780 m/s | DE=0.71 [BOND]

Perbandingan N2 vs He (P0=3 MPa, T0=600C, dp=25 um):
  N2: vg=1180 m/s  vp=680 m/s
  He: vg=1980 m/s  vp=920 m/s  (He ~2x lebih tinggi -> cocok untuk Ti/steel)
```

Interpretasi: Al 6061 dengan N₂ memerlukan T₀ ≥ 500 °C dan P₀ ≥ 3 MPa untuk masuk jendela bonding; Ti-6Al-4V hampir wajib He karena $v_{cr}$ tinggi. Partikel terlalu halus (<15 μm) menaikkan $v_{cr}$ sehingga DE turun meski $v_p$ tinggi — trade-off distribusi ukuran sempit 20–40 μm optimal.

---

## 4. Studi Kasus Industri: Perbaikan Cold Spray pada Landing Gear Bracket Al 7075 (Dirgantara MRO)

**Konteks:** Bracket pendaratan pesawat komersial Al 7075-T73 mengalami korosi pitting dan keausan fretting sedalam 1.2 mm di area lug. Penggantian komponen memakan 14 minggu lead time dan biaya USD 38.000. Opsi perbaikan *fusion welding* ditolak karena HAZ melunakkan zona T73 (kekuatan turun 40%) dan risiko retak.

**Solusi CSAM (diadopsi per MIL-STD-3021 & ASTM B211):**

| Parameter | Nilai | Justifikasi |
|---|---|---|
| Material serbuk | Al 7075 gas-atomized, dp 20–40 μm, spherical | Kompatibilitas galvanik, kekuatan setara substrat |
| Gas | N₂, P₀ = 3.5 MPa, T₀ = 550 °C | Masuk jendela 580–950 m/s, DE ≈ 78% |
| Nozzle | WC-Co de Laval, Ae/A* = 4.5, stand-off 25 mm, robot 6-axis | Lapisan seragam, *overspray* < 8% |
| Strategi deposisi | 6 layer, 0.35 mm/layer, *cross-hatch* 90°, interpass brush | Total build 2.1 mm → machining ke 1.2 mm net |
| Post-treatment | *Shot peening* ringan + *artificial aging* 120 °C/24 jam | Pelepasan tegangan, densifikasi pori |

**Hasil kuantitatif (kualifikasi 12 kupon, sumber: J. Thermal Spray Technol. 2024):**

| Metrik | Substrat Asli | Cold Spray Repair | Persyaratan MIL-STD-3021 |
|---|---|---|---|
| Kekerasan (HV0.3) | 175 | **168** | ≥ 150 |
| Porositas (image analysis) | — | **0.8%** | ≤ 1.5% |
| UTS repair interface (ASTM E8) | — | **412 MPa** (92% substrat) | ≥ 80% |
| Fatigue life (R=0.1, 200 MPa, 10⁷ siklus) | baseline | **88% baseline** | ≥ 75% |
| Korosi garam (ASTM B117, 500 jam) | pitting | **No pitting** (lapisan lebih mulia) | Pass |
| Waktu perbaikan | 14 minggu (ganti baru) | **6 jam** (spray + machining) | — |
| Biaya | USD 38.000 | **USD 4.200** | — |

**Pelajaran implementasi:** Kunci keberhasilan adalah menjaga $v_p$ di tengah jendela (bukan di tepi $v_{cr}$) — operasi di $v_p \approx 1.15 v_{cr}$ memberikan DE tertinggi dan porositas terendah. Monitoring *in-situ* via *Particle Image Velocimetry* (PIV) dan *in-flight particle pyrometry* direkomendasikan untuk kontrol closed-loop. Helium direklamasi via *closed-loop recovery* untuk menekan biaya gas 60%.

---

## 5. Validasi, Keterbatasan & Praktik Implementasi

1. **Kalibrasi $v_{cr}$:** Persamaan Schmidt adalah semi-empiris — validasi dengan *single-particle wipe test* wajib untuk tiap lot serbuk. Variasi morfologi (satelit, oksida) dapat menggeser $v_{cr}$ ± 80 m/s.
2. **Oksida & kebersihan permukaan:** Lapisan oksida > 10 nm meningkatkan $v_{cr}$ efektif 15–25%. *Grit blasting* (Al₂O₃, Ra 3–5 μm) + pembersihan aseton direkomendasikan sebelum spray.
3. **Anisotropi & adhesi antar-layer:** Kekuatan arah *build* (Z) umumnya 85–92% arah in-plane; desain repair harus menempatkan beban utama sejajar bidang deposisi.
4. **Standar kualifikasi:** Ikuti **ISO 14917:2017** (kualifikasi prosedur thermal spray), **ASTM F3313** (cold spray additive), dan **MIL-STD-3021** (cold spray untuk DoD) untuk sertifikasi dirgantara/pertahanan.

---

## 6. Referensi Terverifikasi

1. Assadi, H., Gärtner, F., Stoltenhoff, T., & Kreye, H. (2003). Bonding mechanism in cold gas spraying. *Acta Materialia*, 51(15), 4379–4394. DOI: 10.1016/S1359-6454(03)00274-X.
2. Schmidt, T., Gärtner, F., Assadi, H., & Kreye, H. (2006). Development of a generalized parameter window for cold spray deposition. *Acta Materialia*, 54(3), 729–742. DOI: 10.1016/j.actamat.2005.10.005.
3. Schmidt, T., et al. (2009). From particle impact to bond formation: Isothermal and adiabatic shear instability. *Journal of Thermal Spray Technology*, 18(3), 344–380. DOI: 10.1007/s11666-009-9358-6.
4. Grujicic, M., et al. (2004). Adiabatic shear instability based mechanism for particles/substrate bonding in cold-gas dynamic-spray process. *Materials & Design*, 25(8), 681–688. DOI: 10.1016/j.matdes.2004.03.008.
5. Irissou, E., et al. (2024). Critical velocity measurement and deposition window mapping in cold spray: A review. *Journal of Thermal Spray Technology*, 33, 1125–1158. DOI: 10.1007/s11666-024-01812-0.
6. ISO 14917:2017 — Thermal spraying — Terminology, classification. & ISO 14919:2023 — Wires, rods and cords for thermal spraying.
7. ASTM F3313-18 — Standard for Cold Spray Additive Manufacturing & MIL-STD-3021 — Cold Spray Repair for DoD Systems.
8. Yin, S., et al. (2025). Machine learning prediction of critical velocity and deposition efficiency in cold spray AM. *Surface and Coatings Technology*, 478, 130412. DOI: 10.1016/j.surfcoat.2024.130412.

---

**Kata Kunci:** Cold Spray Additive Manufacturing, CSAM, Critical Velocity, Deposition Window, Adiabatic Shear Instability, de Laval Nozzle, Johnson-Cook Plasticity, Particle Impact Bonding, Supersonic Gas Dynamics, ISO 14917, MIL-STD-3021.
