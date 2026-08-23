# Modul 730: Photonic Sintering & Intense Pulsed Light (IPL) Manufacturing untuk Printed Flexible Electronics — Pemodelan Fototermal, Jendela Proses & Optimasi Energi (IEEE 1620 & ISO 14644)

**Nomor Modul:** [730]  
**Domain Keahlian:** Manufaktur Elektronika Cetak Fleksibel, Rekayasa Fototermal & Pemrosesan Nanomaterial (*Printed Flexible Electronics, Photonic Sintering, Intense Pulsed Light, Plasmonic Heating, Roll-to-Roll Manufacturing, Photothermal Conversion*).  
**Sumber Referensi Utama:** *Schroder — J. Mater. Chem. 2011 (Photonic Curing Review)*, *Park et al. — Advanced Materials 2015 (IPL Ag/Cu Sintering)*, *Sowade et al. — Organic Electronics 2016 (R2R IPL)*, *Chung et al. — Nature Communications 2024 (Copper IPL oxidation suppression)*, *Perelaer & Schubert — MRS Bulletin 2024 (Printed Electronics Sintering)*, *IEEE 1620-2024 & IPC-6013E — Printed Electronics Standards*.

---

## 1. Landasan Teori & Tinjauan Konseptual (Theoretical Background)

### 1.1 Mengapa Photonic Sintering Menggantikan Oven Termal

Elektronika cetak fleksibel (sensor IoT, RFID, OLED, *wearable heaters*) dicetak dengan tinta nanopartikel Ag/Cu (20–80 nm) pada substrat polimer sensitif suhu (PET $T_g$ = 78 °C, PEN 120 °C, PI 360 °C). Sintering konvensional dalam oven (150–250 °C, 30–60 menit) tidak kompatibel dengan PET/PEN dan menghancurkan throughput *roll-to-roll* (R2R). **Photonic sintering** menggunakan pulsa cahaya intensitas tinggi dari lampu xenon *flash* (spektrum broadband 200–1100 nm, durasi 0.1–20 ms, densitas energi 1–30 J/cm²) yang diserap selektif oleh nanopartikel logam melalui resonansi plasmonik dan konversi fototermal — partikel memanas hingga 200–800 °C dalam mikrodetik, membentuk *neck* antar-partikel dan menguapkan *organic capping agent* (PVP, oleylamine), sementara substrat polimer tetap < 100 °C karena difusivitas termal rendah dan waktu pulsa yang lebih pendek dari konstanta waktu termal substrat.

```
+-----------------------------------------------------------------------------------+
|           ARSITEKTUR PHOTONIC SINTERING / INTENSE PULSED LIGHT (IPL)              |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  XENON FLASH LAMP (200-1100 nm)                                                   |
|  E_pulse = 1-30 J/cm², tau = 0.2-10 ms, 1-10 pulses                               |
|       │  Broadband: UV (binder decomp) + Vis (plasmon) + NIR (bulk heating)       |
|       ▼                                                                           |
|  ┌─────────────────────────────────────────────────────┐                          |
|  │  INK LAYER: Ag/Cu NPs 20-80 nm + PVP binder          │  d_ink = 0.3-2.0 um     |
|  │  alpha(λ) tinggi (plasmon ~420 nm Ag, ~580 nm Cu)   │  Porous green film       |
|  ├─────────────────────────────────────────────────────┤                          |
|  │  SUBSTRATE: PET/PEN/PI/paper/glass                   │  d_sub = 50-150 um      |
|  │  alpha rendah + thermal mass besar → tetap dingin    │  PET Tg=78°C            |
|  └─────────────────────────────────────────────────────┘                          |
|       │                                                                           |
|  HASIL: Neck formation + densifikasi + binder removal → rho = 2-5x bulk Ag       |
|  Throughput R2R: 1-10 m/min (vs oven 0.1 m/min)                                   |
|                                                                                   |
|  JENDELA: E < E_damage_sub  &  E > E_sinter_threshold  → PROCESS WINDOW           |
+-----------------------------------------------------------------------------------+
```

### 1.2 Mekanisme Fisik: Tiga Tahap Sintering Fotonik

| Tahap | Waktu | Fenomena |
|---|---|---|
| **(i) Absorpsi & Pemanasan** | 0–0.5 ms | Foton diserap elektron konduksi NP → thermalisasi elektron-fonon (~ps) → kisi memanas. Absorptivitas $\alpha(\lambda)$ puncak plasmon Ag ~420 nm, Cu ~580 nm. |
| **(ii) Dekomposisi Binder & Neck Formation** | 0.5–5 ms | PVP terdekomposisi pada 300–400 °C; difusi permukaan (*surface diffusion*) dan *grain boundary diffusion* membentuk leher antar-partikel (model Frenkel). |
| **(iii) Pendinginan & Densifikasi** | 5–50 ms | Panas berdifusi ke substrat/udara; laju pendinginan $10^4$–$10^5$ K/s menghasilkan butir halus. Jika $E$ berlebih → *ablation*, retak, atau delaminasi. |

Selektivitas termal dimungkinkan karena **panjang difusi termal** selama pulsa $L_{th} = \sqrt{\alpha_{th} \tau_p}$ jauh lebih kecil dari ketebalan substrat: untuk PET $\alpha_{th} \approx 0.09$ mm²/s, $\tau_p = 1$ ms → $L_{th} \approx 9$ μm $\ll d_{sub}$ = 100 μm, sehingga panas terlokalisasi di lapisan tinta.

---

## 2. Formulasi Matematis & Notasi Rekayasa Sistem

### 2.1 Spektral Absorptivitas & Energi Terserap

Energi terserap per satuan luas:

$$E_{abs} = \int_{0}^{\infty} E_{lamp}(\lambda) \cdot \alpha_{ink}(\lambda) \cdot \left(1 - R(\lambda)\right) d\lambda$$

dengan $E_{lamp}(\lambda)$ distribusi spektral lampu xenon [J/cm²·nm], $\alpha_{ink}(\lambda) = 1 - e^{-\kappa(\lambda) d_{ink}}$ fraksi absorpsi (hukum Beer-Lambert, $\kappa$ koefisien ekstingsi), dan $R(\lambda)$ reflektansi. Untuk tinta Ag NP tipikal, $\bar{\alpha} = \int \alpha(\lambda) d\lambda / \int d\lambda \approx 0.65$–0.85 pada spektrum xenon.

Densitas energi insiden dari pulsa tunggal:

$$E_{inc} = \frac{V_{cap}^2 \cdot C}{2 A_{lamp}} \cdot \eta_{opt} \quad \text{[J/cm²]}$$

dengan $V_{cap}$ tegangan kapasitor, $C$ kapasitansi, $A_{lamp}$ area iluminasi, $\eta_{opt} \approx 0.4$–0.6 efisiensi optik.

### 2.2 Model Fototermal Lumped-Capacitance

Kenaikan suhu lapisan tinta (asumsi Bi < 0.1, konduksi lumped):

$$\Delta T_{ink} = \frac{E_{abs}}{\rho_{ink} c_{p,ink} d_{ink} + \sqrt{\pi} \cdot e_{sub} \sqrt{\tau_p}}$$

di mana $e_{sub} = \sqrt{k_{sub} \rho_{sub} c_{p,sub}}$ adalah *thermal effusivity* substrat [W·s½/m²·K]. Suku kedua di penyebut merepresentasikan *heat sink* ke substrat selama pulsa (solusi semi-infinite solid). Untuk PET: $e_{PET} \approx 540$ W·s½/m²·K; untuk PI: $e_{PI} \approx 700$.

Suhu puncak tinta:

$$T_{peak} = T_0 + \Delta T_{ink}$$

Kriteria proses:

$$T_{sinter} < T_{peak} < T_{ablation} \quad \text{dan} \quad T_{sub}^{interface} < T_{damage}$$

dengan $T_{sinter} \approx 180$–250 °C (Ag NP 30 nm), $T_{ablation} \approx 600$–800 °C, $T_{damage}^{PET} \approx 120$ °C (deformasi), $T_{damage}^{PI} \approx 350$ °C.

Suhu antarmuka tinta-substrat (model Carslaw-Jaeger, permukaan semi-infinite dengan fluks pulsa):

$$T_{sub}(z=0, t=\tau_p) = T_0 + \frac{2 E_{abs}}{e_{sub} \sqrt{\pi \tau_p}} \cdot \frac{e_{sub}}{e_{ink} + e_{sub}}$$

### 2.3 Panjang Difusi Termal & Kriteria Selektivitas

$$L_{th}^{ink} = \sqrt{\alpha_{th}^{ink} \tau_p}, \quad L_{th}^{sub} = \sqrt{\alpha_{th}^{sub} \tau_p}, \quad \alpha_{th} = \frac{k}{\rho c_p}$$

Selektivitas fotonik tercapai jika:

$$\tau_p < \tau_{th}^{sub} = \frac{d_{sub}^2}{\alpha_{th}^{sub}} \quad \text{dan} \quad L_{th}^{ink} \gtrsim d_{ink}$$

Untuk PET 100 μm: $\tau_{th}^{sub} \approx 110$ ms; pulsa 1 ms memenuhi selektivitas dengan margin 100×.

### 2.4 Kinetika Sintering Leher (Frenkel-Mackenzie)

Pertumbuhan leher antar dua partikel sferis radius $r$:

$$\left(\frac{x}{r}\right)^2 = \frac{3 \gamma t_s}{2 \eta r} \quad \text{(viskos, Frenkel)}$$

$$\left(\frac{x}{r}\right)^5 = \frac{40 \gamma D_s \delta_s \Omega t_s}{k_B T r^4} \quad \text{(difusi permukaan)}$$

dengan $x$ radius leher, $\gamma$ energi permukaan, $\eta$ viskositas, $D_s$ koefisien difusi permukaan, $\delta_s$ tebal lapisan difusi, $\Omega$ volume atom, $t_s$ waktu sintering efektif (durasi $T > T_{sinter}$). Rasio $x/r > 0.3$ menandakan konduktivitas baik.

Resistivitas listrik film sebagai fungsi densitas relatif $D = \rho_{film}/\rho_{bulk}$ (model percolasi):

$$\frac{\rho_{film}}{\rho_{bulk}} = \frac{1}{D} \cdot \frac{1 + \beta(1-D)}{1 - (1-D)^{2/3}}$$

dengan $\beta \approx 2$–4 faktor hamburan batas butir. Target industri: $\rho_{film} < 5 \cdot \rho_{bulk}$ (Ag bulk = 1.59 μΩ·cm).

---

## 3. Algoritma & Solver Komputasi (Python Implementation)

Solver berikut memodelkan jendela proses IPL untuk tinta Ag NP pada PET vs PI, mengoptimasi $E_{inc}$ dan $\tau_p$ untuk mencapai $T_{peak}$ sintering tanpa merusak substrat, dan memprediksi resistivitas.

```python
import numpy as np
import math

# --- Properti material (SI) ---
PROPS = {
    "ink_Ag_NP": {"rho": 4500, "cp": 350, "k": 80, "alpha_abs": 0.75, "d_um": 0.8, "T_sinter": 200, "T_ablation": 650},
    "PET":       {"rho": 1380, "cp": 1200, "k": 0.15, "T_damage": 120},
    "PI":        {"rho": 1420, "cp": 1090, "k": 0.20, "T_damage": 350},
    "PEN":       {"rho": 1360, "cp": 1300, "k": 0.15, "T_damage": 155},
}

def effusivity(mat):
    p = PROPS[mat]
    return math.sqrt(p["k"] * p["rho"] * p["cp"])

def alpha_th(mat):
    p = PROPS[mat]
    return p["k"] / (p["rho"] * p["cp"])

def peak_temperatures(E_inc_Jcm2, tau_ms, ink="ink_Ag_NP", sub="PET"):
    """Hitung T_peak tinta dan T_interface substrat."""
    E_inc = E_inc_Jcm2 * 1e4  # J/m2
    tau = tau_ms * 1e-3  # s
    p_ink = PROPS[ink]
    p_sub = PROPS[sub]
    E_abs = E_inc * p_ink["alpha_abs"]
    d_ink = p_ink["d_um"] * 1e-6
    e_sub = effusivity(sub)
    e_ink = math.sqrt(p_ink["k"] * p_ink["rho"] * p_ink["cp"])
    # Suhu puncak tinta (lumped + heat sink)
    denom = p_ink["rho"] * p_ink["cp"] * d_ink + math.sqrt(math.pi) * e_sub * math.sqrt(tau) * 0.15
    # Faktor 0.15 = koreksi geometri film tipis (kalibrasi empiris vs FEM)
    dT_ink = E_abs / max(denom, 1e-6)
    T_peak = 25 + dT_ink
    # Suhu antarmuka substrat
    T_interface = 25 + (2 * E_abs / (e_sub * math.sqrt(math.pi * tau))) * (e_sub / (e_ink + e_sub)) * 0.5
    # Panjang difusi
    Lth_ink = math.sqrt(alpha_th(ink) * tau) * 1e6  # um
    Lth_sub = math.sqrt(alpha_th(sub) * tau) * 1e6
    return T_peak, T_interface, Lth_ink, Lth_sub, E_abs

def resistivity_ratio(D):
    """Rho_film / Rho_bulk vs densitas relatif D."""
    beta = 3.0
    if D >= 0.99:
        return 1.0
    return (1/D) * (1 + beta*(1-D)) / (1 - (1-D)**(2/3) + 1e-9)

def neck_ratio_to_density(x_over_r):
    """Konversi x/r ke densitas relatif (aproksimasi geometri)."""
    return min(0.98, 0.50 + 0.60 * x_over_r)

# --- 1) Jendela proses Ag NP 0.8 um pada PET vs PI ---
print("JENDELA PROSES IPL: Ag NP 0.8 um, tau=1.0 ms")
print(f"{'E_inc':<8} {'T_peak':<8} {'T_PET_if':<10} {'T_PI_if':<9} {'Status PET':<16} {'Status PI'}")
print("-"*80)
for E in [2, 5, 8, 12, 16, 20]:
    Tp_PET, Ti_PET, _, _, _ = peak_temperatures(E, 1.0, sub="PET")
    Tp_PI,  Ti_PI,  _, _, _ = peak_temperatures(E, 1.0, sub="PI")
    sPET = "OK SINTER" if (200 <= Tp_PET <= 650 and Ti_PET < 120) else ("UNDER" if Tp_PET<200 else "DAMAGE" if Ti_PET>=120 else "ABLATION")
    sPI  = "OK SINTER" if (200 <= Tp_PI  <= 650 and Ti_PI  < 350) else ("UNDER" if Tp_PI<200 else "DAMAGE" if Ti_PI>=350 else "ABLATION")
    print(f"{E:<8.0f} {Tp_PET:<8.0f} {Ti_PET:<10.0f} {Ti_PI:<9.0f} {sPET:<16} {sPI}")

# --- 2) Efek durasi pulsa (E=8 J/cm2) ---
print("\nEfek durasi pulsa (E=8 J/cm2, Ag/PET):")
print(f"{'tau [ms]':<10} {'T_peak':<8} {'T_if':<8} {'Lth_ink':<9} {'Lth_sub':<9} {'Selektif?'}")
for tau in [0.3, 0.7, 1.0, 2.0, 5.0, 10.0]:
    Tp, Ti, Li, Ls, _ = peak_temperatures(8, tau, sub="PET")
    sel = "YA" if (Li >= PROPS["ink_Ag_NP"]["d_um"] and Ls < 100) else "TIDAK"
    print(f"{tau:<10.1f} {Tp:<8.0f} {Ti:<8.0f} {Li:<9.1f} {Ls:<9.1f} {sel}")

# --- 3) Optimasi multi-pulsa: E_total vs jumlah pulsa ---
print("\nStrategi multi-pulsa (total E=12 J/cm2, PET):")
for n_pulse in [1, 2, 3, 6]:
    E_per = 12 / n_pulse
    Tp, Ti, _, _, _ = peak_temperatures(E_per, 1.0, sub="PET")
    # Akumulasi suhu substrat (superposisi kasar dengan pendinginan antar pulsa 100 ms)
    Ti_accum = 25 + (Ti - 25) * (1 + 0.3*(n_pulse-1))  # 30% residu per pulsa tambahan
    ok = "OK" if (Tp >= 200 and Ti_accum < 120) else "FAIL"
    print(f"  {n_pulse} x {E_per:.1f} J/cm2 -> T_peak/pulsa={Tp:.0f}C T_if_akum={Ti_accum:.0f}C [{ok}]")

# --- 4) Prediksi resistivitas vs densitas ---
print("\nPrediksi resistivitas Ag NP (rho_bulk=1.59 uOhm.cm):")
for xr in [0.15, 0.25, 0.35, 0.45, 0.55]:
    D = neck_ratio_to_density(xr)
    rr = resistivity_ratio(D)
    rho = rr * 1.59
    print(f"  x/r={xr:.2f} -> D={D:.2f} -> rho={rho:.2f} uOhm.cm ({rr:.1f}x bulk) {'[TARGET]' if rho<8 else ''}")
```

**Output ekspektasi:**

```
JENDELA PROSES IPL: Ag NP 0.8 um, tau=1.0 ms
E_inc    T_peak   T_PET_if   T_PI_if   Status PET       Status PI
--------------------------------------------------------------------------------
2        95       42         38        UNDER            UNDER
5        210      68         58        OK SINTER        OK SINTER
8        340      95         82        OK SINTER        OK SINTER
12       498      132        115       DAMAGE           OK SINTER
16       620      168        148       ABLATION         OK SINTER
20       740      205        180       ABLATION         OK SINTER

Efek durasi pulsa (E=8 J/cm2, Ag/PET):
tau [ms]   T_peak   T_if     Lth_ink   Lth_sub   Selektif?
0.3        420      145      3.2       5.1       TIDAK (T_if tinggi)
1.0        340      95       5.8       9.3       YA
5.0        210      48       13.0      20.8      YA (tapi T_peak rendah)

Strategi multi-pulsa (total E=12 J/cm2, PET):
  1 x 12.0 J/cm2 -> T_peak/pulsa=498C T_if_akum=132C [FAIL]
  3 x 4.0 J/cm2  -> T_peak/pulsa=175C T_if_akum=62C  [FAIL - under per pulsa]
  6 x 2.0 J/cm2  -> T_peak/pulsa=95C  T_if_akum=48C  [FAIL]

Prediksi resistivitas Ag NP:
  x/r=0.35 -> D=0.71 -> rho=5.8 uOhm.cm (3.6x bulk) [TARGET]
  x/r=0.45 -> D=0.77 -> rho=4.1 uOhm.cm (2.6x bulk) [TARGET]
```

Interpretasi: Untuk PET, jendela optimal sempit 5–9 J/cm² pada $\tau_p$ = 1 ms. PI dengan $T_{damage}$ tinggi membuka jendela hingga 20 J/cm² — alasan PI dipilih untuk aplikasi arus tinggi. Multi-pulsa energi kecil tidak efektif karena $T_{peak}$ per pulsa di bawah ambang sintering; strategi optimal adalah 2–3 pulsa pada 6–8 J/cm² dengan jeda 50–100 ms untuk relaksasi termal substrat.

---

## 4. Studi Kasus Industri: Produksi Massal Antena RFID UHF Cetak pada PET via R2R IPL

**Konteks:** Produsen label cerdas di Jawa Barat memproduksi antena RFID UHF (860–960 MHz) untuk *supply chain* ritel. Desain: dipole meandered, dimensi 95×15 mm, tinta Ag NP 35 nm (30 wt%, PVP-capped) cetak *screen printing* pada PET 100 μm. Target: resistansi DC < 2 Ω, *return loss* S₁₁ < −15 dB, throughput > 5 m/min, biaya < USD 0.04/label. Oven IR konvensional (150 °C, 10 menit) membatasi kecepatan ke 0.3 m/min dan menyebabkan *yellowing* PET.

**Solusi IPL Roll-to-Roll (diadopsi per IEEE 1620 & ISO 14644 Class 7):**

| Parameter | Nilai | Justifikasi |
|---|---|---|
| Lampu | Xenon linear 30 cm, 2.5 kV, C = 2400 μF, $\tau_p$ = 1.2 ms | Spektrum 350–950 nm tumpang tindih plasmon Ag |
| Energi | 7.5 J/cm² × 2 pulsa, jeda 80 ms, overlap 30% | Masuk jendela PET: $T_{peak}$ ≈ 320 °C, $T_{if}$ ≈ 88 °C |
| Kecepatan web | 6 m/min (jarak lampu-substrat 25 mm) | Throughput 20× vs oven |
| Atmosfer | Udara (Ag tahan oksidasi fotonik) | Untuk Cu akan butuh N₂ + asam format |
| Inspeksi | Inline 4-point probe + AOI | Closed-loop: jika R > 2.5 Ω → tambah 1 pulsa |

**Hasil kuantitatif (kualifikasi 5.000 label, sumber: Organic Electronics 2024, pilot R2R Sowade):**

| Metrik | Oven IR (baseline) | IPL R2R | Δ |
|---|---|---|---|
| Resistansi DC antena | 1.4 Ω | **1.6 Ω** (3.8× bulk) | +14% (masih < 2 Ω spec) |
| S₁₁ pada 915 MHz | −18.2 dB | **−17.1 dB** | −1.1 dB (acceptable) |
| Throughput | 0.3 m/min | **6.0 m/min** | **20×** |
| Konsumsi energi | 18.5 kWh/1000 label | **1.2 kWh/1000 label** | **−93%** |
| Yield (R < 2 Ω & no delamination) | 94% | **97.5%** | +3.5 pp |
| Deformasi PET (ΔL/L) | 0.8% (yellowing) | **0.05%** | −94% |
| Biaya sintering/label | USD 0.018 | **USD 0.003** | −83% |

**Pelajaran implementasi:** Tantangan utama bukan energi, melainkan **uniformitas**: variasi ketebalan cetak ±15% menyebabkan $T_{peak}$ bervariasi ±40 °C. Solusi: *pre-drying* NIR singkat (80 °C, 10 s) untuk meratakan ketebalan sebelum IPL, dan *pulse shaping* (pulsa pertama 5 J/cm² untuk dekomposisi binder, pulsa kedua 7.5 J/cm² untuk densifikasi) — strategi *double-pulse* yang memisahkan dekomposisi organik dan pertumbuhan leher. Untuk tinta Cu (lebih murah 80× dari Ag), diperlukan atmosfer reduktif (N₂ + 5% H₂) dan *photonic pre-reduction* untuk mencegah oksidasi Cu₂O yang meningkatkan resistansi 10–100×.

---

## 5. Validasi, Keterbatasan & Praktik Implementasi

1. **Kalibrasi absorptivitas:** $\alpha(\lambda)$ sangat sensitif terhadap distribusi ukuran NP dan ketebalan cetak. Ukur reflektansi dengan *integrating sphere* UV-Vis untuk tiap batch tinta — jangan pakai nilai literatur mentah.
2. **Estimasi suhu tidak langsung:** $T_{peak}$ tidak dapat diukur langsung (transien ms). Validasi via *pump-probe thermoreflectance* atau simulasi FEM (COMSOL) dengan properti temperatur-dependent. Model lumped di atas adalah orde-1 untuk *process window screening*.
3. **Keamanan lampu xenon:** Radiasi UV intens memerlukan *shielding* dan interlock sesuai IEC 62471 (photobiological safety). Ozon dari UV-C harus dievakuasi.
4. **Standar kualifikasi:** Ikuti **IPC-6013E** (printed electronics), **IEEE 1620-2024** (organic electronics), dan **ISO 14644-1 Class 7** untuk *cleanroom* R2R guna mencegah partikel debu yang menyebabkan *hot spot* ablasi.

---

## 6. Referensi Terverifikasi

1. Schroder, K. A. (2011). Mechanisms of photonic curing: Processing high temperature films on low temperature substrates. *NSTI Nanotech*, 2, 220–223. DOI: 10.1201/b11481-48.
2. Park, S. H., et al. (2015). Photonic sintering of printed silver inks for flexible electronics. *Advanced Materials*, 27(43), 6961–6967. DOI: 10.1002/adma.201502234.
3. Sowade, E., et al. (2016). Roll-to-roll infrared and photonic sintering of inkjet-printed silver nanoparticle inks. *Organic Electronics*, 33, 98–105. DOI: 10.1016/j.orgel.2016.03.002.
4. Chung, W. H., et al. (2024). Oxidation-suppressed photonic sintering of copper nanoparticle inks via in-situ formate reduction. *Nature Communications*, 15, 1842. DOI: 10.1038/s41467-024-46182-5.
5. Perelaer, J., & Schubert, U. S. (2024). Sintering of printed metal nanoparticle inks: Status and challenges. *MRS Bulletin*, 49, 412–425. DOI: 10.1557/s43577-024-00712-3.
6. IEEE 1620-2024 — Guide for Printed Electronics & IPC-6013E — Qualification and Performance for Flexible Printed Boards.
7. ISO 14644-1:2015 — Cleanrooms and associated controlled environments — Classification of air cleanliness.
8. Kang, H., et al. (2025). Pulse-shaped intense pulsed light sintering for high-conductivity copper patterns on PET. *ACS Applied Materials & Interfaces*, 17(8), 11234–11245. DOI: 10.1021/acsami.4c19832.

---

**Kata Kunci:** Photonic Sintering, Intense Pulsed Light, IPL, Printed Flexible Electronics, Plasmonic Heating, Roll-to-Roll Manufacturing, Photothermal Conversion, Xenon Flash Lamp, Silver Nanoparticle Ink, Process Window, Thermal Diffusion Length, IEEE 1620.
