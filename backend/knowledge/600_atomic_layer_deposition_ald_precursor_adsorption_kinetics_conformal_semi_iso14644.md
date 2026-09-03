# Modul 600: Atomic Layer Deposition (ALD) untuk Rekayasa Nanocoating Industri: Kinetika Adsorpsi Langmuir Self-Terminating, Pertumbuhan Digital Layer-by-Layer, dan Cakupan Konformal Rasio Aspek Tinggi (SEMI & ISO 14644)

## 1. Pengantar & Konteks Industri Atomic Layer Deposition (ALD)

Dalam fabrikasi mikroelektronika semikonduktor skala sub-3nm (*Gate-All-Around* / GAA-FETs, 3D NAND Flash hingga 300+ lapis, memori DRAM kapasitor parit dalam), sel surya fotovoltaik generasi lanjut (TOPCon & Silicon Heterojunction / HJT), serta enkapsulasi pelindung ultra-rapat pada layar fleksibel OLED dan implan biomedikal, kebutuhan akan lapisan tipis berskala nanometer menghadapi kendala limitasi fisika dari metode pengendapan konvensional:
1. **Ketidakmampuan Penetrasi pada Rasio Aspek Ekstrem (*High Aspect Ratio Shadowing*)**: Metode deposisi uap fisik (*Physical Vapor Deposition* / PVD seperti *magnetron sputtering* atau *thermal evaporation*) bersifat *line-of-sight* (garis lurus pandang). Hal ini menyebabkan efek pembayangan (*shadowing effect*), penipisan dinding samping (*sidewall thinning*), dan penutupan lubang prematur (*trench overhang / pinch-off void*) pada struktur pori mikro-trench dengan rasio aspek $AR > 20:1$.
2. **Ketiadaan Kontrol Ketebalan Tingkat Atomik (*Lack of Sub-Angstrom Digital Control*)**: Metode *Chemical Vapor Deposition* (CVD) konvensional mereaksikan prekursor secara simultan dalam fasa gas, menghasilkan ketebalan non-seragam akibat gradien temperatur dan dinamika fluida perpindahan massa reaktor.
3. **Cacat Lubang Jarum (*Pinhole Defects*) & Kebocoran Dielektrik**: Pada gerbang transistor modern dengan ketebalan oksida setara (*Equivalent Oxide Thickness* / EOT) $< 1\ \text{nm}$, bahkan satu cacat pin-hole mikro dapat memicu lonjakan arus bocor kuantum (*quantum tunneling leakage current*), menyebabkan korsleting termal chip.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       SKEMATIKA SIKLUS 4-TAHAP ATOMIC LAYER DEPOSITION (ALD)                                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    [ TAHAP 1: Pulsa Prekursor A ]               [ TAHAP 2: Purge Gas Inert (N2 / Ar) ]                               |
|    - Kemisorpsi Self-Terminating                - Evakuasi Molekul Prekursor A Sisa                                   |
|    - Saturasi Monolapis Permukaan               - Eliminasi Hasil Samping Reaksi Fasa Gas                             |
|         Prekursor Logam (e.g. TMA)                   Gas Pembawa N2 Ultra-Murni                                       |
|             │ │ │ │ │ │ │                                │ │ │ │ │ │ │                                                |
|             ▼ ▼ ▼ ▼ ▼ ▼ ▼                                ▼ ▼ ▼ ▼ ▼ ▼ ▼                                                |
|      ───●───●───●───●───●─── (Monolayer A)        ───●───●───●───●───●─── (Permukaan Bersih A)                         |
|      ═══════════════════════ (Substrat)           ═══════════════════════ (Substrat)                                  |
|                                                                                                                       |
|    [ TAHAP 3: Pulsa Ko-Reaktan B ]              [ TAHAP 4: Purge Gas Inert (N2 / Ar) ]                               |
|    - Reaksi Permukaan Ligan (e.g. H2O / O3)     - Pembuangan Gas Sampingan (e.g. CH4)                                 |
|    - Pembentukan Lapisan Oksida/Nitrida         - Regenerasi Gugus Aktif untuk Siklus Baru                            |
|             │ │ │ │ │ │ │                                │ │ │ │ │ │ │                                                |
|             ▼ ▼ ▼ ▼ ▼ ▼ ▼                                ▼ ▼ ▼ ▼ ▼ ▼ ▼                                                |
|      ───○───○───○───○───○─── (Lapisan Al2O3)      ───○───○───○───○───○─── (Satu Monolapis Tumbuh)                     |
|      ═══════════════════════ (Substrat)           ═══════════════════════ (Substrat, Siap Siklus N+1)                  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Atomic Layer Deposition (ALD)** adalah teknologi deposisi uap kimia fase gas keadaan permukaan (*surface-controlled gas-phase thin film deposition technique*) yang didasarkan pada reaksi kimia permukaan berurutan (*sequential*), terpisah secara temporal (*time-separated*), dan **membatasi diri secara otomatis (*self-limiting / self-terminating*)**. 

Dengan memisahkan pemaparan prekursor logam dan ko-reaktan non-logam melalui siklus pulsa dan hembusan pembersihan (*purge*) gas inert berulang, ALD menghilangkan reaksi fasa gas parasitik, menjamin keseragaman ketebalan tingkat sub-angstrom ($0.05 - 0.15\ \text{nm/siklus}$), serta menghasilkan **cakupan konformal 100% (*100% conformal step coverage*)** pada topografi celah sempit dengan rasio aspek ekstrem ($AR > 100:1$).

### 1.1 Standar Internasional & Regulasi Fabrikasi Bersih Terkait ALD
- **SEMI E49 / E49.8**: *Guide for High Purity and Ultrahigh Purity Gas Distribution Systems in Semiconductor Manufacturing*.
- **SEMI E54**: *Standard for Sensor/Actuator Network Communications in Semiconductor Processing Tools*.
- **ISO 14644-1 / ISO 14644-2**: *Cleanrooms and associated controlled environments — Part 1: Classification of air cleanliness by particle concentration; Part 2: Monitoring to provide evidence of cleanroom performance*.
- **ASTM E2943**: *Standard Guide for Metrication of Nanotechnology Standards*.
- **IEEE EDS (Electron Devices Society)**: *International Roadmap for Devices and Systems (IRDS) — More Moore & Beyond CMOS Interconnect and Gate Stacks*.

---

## 2. Termodinamika & Kinetika Kimia Permukaan Self-Terminating

### 2.1 Reaksi Permukaan Dua Langkah Biner (Studi Kasus: $\text{TMA} + \text{H}_2\text{O} \rightarrow \text{Al}_2\text{O}_3$)
Sistem model arketipal ALD yang paling banyak dipelajari secara kuantum dan kinetik adalah pembentukan aluminium oksida ($\text{Al}_2\text{O}_3$) menggunakan prekursor *trimethylaluminum* ($\text{Al(CH}_3)_3$, disingkat TMA) dan uap air ($\text{H}_2\text{O}$):

1. **Setengah Reaksi A (Pemasukan Pulsa Prekursor TMA)**:
   Molekul TMA dalam fasa gas bereaksi dengan gugus hidroksil ($-\text{OH}$) yang teradsorpsi pada permukaan substrat:
   
   $$\|{-\text{OH}}_{(s)} + \text{Al(CH}_3)_{3(g)} \xrightarrow{k_A} \|{-\text{O}-\text{Al(CH}_3)_{2(s)}} + \text{CH}_{4(g)} \uparrow$$
   
   atau melalui reaksi dengan dua gugus hidroksil yang berdekatan:
   
   $$2 \|{-\text{OH}}_{(s)} + \text{Al(CH}_3)_{3(g)} \rightarrow \|{-\text{O}}_2\text{-Al(CH}_3)_{(s)} + 2\,\text{CH}_{4(g)} \uparrow$$

2. **Setengah Reaksi B (Pemasukan Pulsa Ko-Reaktan $\text{H}_2\text{O}$)**:
   Uap air dimasukkan untuk merehidrolisis gugus metil ($-\text{CH}_3$) yang menutupi permukaan:
   
   $$\|{-\text{O}-\text{Al(CH}_3)_{2(s)}} + 2\,\text{H}_2\text{O}_{(g)} \xrightarrow{k_B} \|{-\text{O}-\text{Al(OH)}_{2(s)}} + 2\,\text{CH}_{4(g)} \uparrow$$

Sifat *self-limiting* muncul karena molekul TMA fasa gas tidak dapat bereaksi lebih lanjut dengan sesama gugus metil ($-\text{CH}_3$) pada permukaan yang telah jenuh (*steric hindrance & chemical inertness*), sehingga reaksi terhenti total secara spontan begitu seluruh situs aktif $-\text{OH}$ telah habis terpakai.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                     ALD TEMPERATURE PROCESS WINDOW                                                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Growth Per Cycle (GPC, Å/cycle)                                                                                     |
|   ▲                                                                                                                   |
|   │     (I) Kondensasi               JENDELA PROSES ALD OPTIMAL            (IV) Dekomposisi Prekursor                 |
|   │     Prekursor                    ┌────────────────────────────┐        (CVD Parasitik, GPC Melejit)               |
|   │     (GPC Naik Tak Terkendali)    │ GPC Konstan & Saturasi     │               /                                   |
|   │             \                    │ Layer-by-Layer Ideal       │              /                                    |
|   │              \                   │ (Self-Terminating Regime)  │             /                                     |
|   │               \                  ├────────────────────────────┤            /                                      |
|   │                \                 │ GPC ≈ 1.1 Å/cycle (Al2O3)  │           /                                       |
|   │                 \────────────────┴────────────────────────────┴──────────/                                        |
|   │                  \                                              /                                                 |
|   │                   \ (II) Energi Aktivasi       (III) Desorpsi  /                                                  |
|   │                          Termal Kurang               Prekursor                                                    |
|   │                          (Reaksi Lambat)             (GPC Turun)                                                  |
|   └────────────────────────────────────────────────────────────────────────────────────────► Temperatur Substrat (°C) |
|                       T_min ≈ 120°C                T_max ≈ 300°C                                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Pemodelan Matematis: Kinetika Adsorpsi Langmuir, Fluks Knudsen, & Pertumbuhan GPC

### 3.1 Model Kinetika Adsorpsi Permukaan Langmuir-Hinshelwood
Fraksi cakupan situs reaktif permukaan $\theta(t)$ pada waktu pemaparan pulsa $t$ dimodelkan melalui persamaan laju adsorpsi ireversibel orde satu:

$$\frac{d\theta(t)}{dt} = S_0 \cdot \frac{J_{\text{flux}}}{N_{\text{sites}}} \cdot (1 - \theta(t))^{\alpha_{\text{order}}}$$

di mana:
- $S_0$: Koefisien penempelan awal (*initial sticking coefficient*, $0 < S_0 \le 1$).
- $N_{\text{sites}}$: Kerapatan situs aktif permukaan per satuan luas ($\text{situs/m}^2$, untuk gugus $-\text{OH}$ silikon berkisar $5 \times 10^{18}\ \text{m}^{-2}$).
- $\alpha_{\text{order}}$: Orde kinetika reaksi permukaan ($\alpha_{\text{order}} = 1$ untuk kemisorpsi monomolekular).
- $J_{\text{flux}}$: Fluks impak molekuler fase gas ke permukaan benda kerja menurut persamaan Hertz-Knudsen:

$$J_{\text{flux}} = \frac{P_{\text{partial}}}{\sqrt{2 \pi M_{\text{mol}} R_g T_{\text{gas}}}}$$

di mana $P_{\text{partial}}$ adalah tekanan parsial prekursor ($\text{Pa}$), $M_{\text{mol}}$ adalah massa molar prekursor ($\text{kg/mol}$), $R_g$ adalah konstanta gas ($8.31446\ \text{J/(mol}\cdot\text{K)}$), dan $T_{\text{gas}}$ adalah temperatur gas mutlak ($\text{K}$).

Solusi analitis integrasi fraksi saturasi $\theta(t)$ terhadap waktu pulsa prekursor $t_{\text{pulse}}$:

$$\theta(t) = 1 - \exp\left( - \frac{S_0 \cdot J_{\text{flux}}}{N_{\text{sites}}} \cdot t_{\text{pulse}} \right)$$

Untuk mencapai derajat saturasi $99.9\%$ ($\theta = 0.999$), dosis paparan minimum (*Langmuir exposure dose*, $L_{\text{sat}}$) yang dibutuhkan:

$$D_{\text{sat}} = P_{\text{partial}} \cdot t_{\text{pulse}} \ge \frac{3 \cdot \ln(10) \cdot N_{\text{sites}} \sqrt{2 \pi M_{\text{mol}} R_g T_{\text{gas}}}}{S_0}$$

### 3.2 Transpor Massa Balistik & Fluks Knudsen dalam Parit Rasio Aspek Tinggi (*High Aspect Ratio*)
Pada celah nano dengan lebar parit $w$ atau diameter pori $d_v$ berskala puluhan nanometer ($d_v \approx 10 - 100\ \text{nm}$) di bawah tekanan reaktor ALD $P_{\text{total}} \approx 0.1 - 10\ \text{Torr}$ ($13.3 - 1333\ \text{Pa}$), lintasan bebas rata-rata molekul gas ($\lambda_{\text{mfp}}$) dihitung:

$$\lambda_{\text{mfp}} = \frac{k_B T_{\text{gas}}}{\sqrt{2} \pi d_{\text{coll}}^2 P_{\text{total}}}$$

di mana $d_{\text{coll}}$ adalah diameter tabrakan kinetik molekul ($\approx 0.4\ \text{nm}$). Karena $\lambda_{\text{mfp}} \gg d_v$, **Bilangan Knudsen ($Kn$)** berada pada rezim aliran bebas molekuler (*free molecular / Knudsen regime*):

$$Kn = \frac{\lambda_{\text{mfp}}}{d_v} \gg 10$$

Dalam rezim Knudsen, tabrakan molekul-dinding (*gas-wall collisions*) mendominasi sepenuhnya di atas tabrakan molekul-molekul (*intermolecular collisions*). Koefisien difusi Knudsen ($D_K$) di dalam parit silindris berdiameter $d_v$ didefinisikan:

$$D_K = \frac{d_v}{3} \bar{v}_{\text{thermal}} = \frac{d_v}{3} \sqrt{\frac{8 R_g T_{\text{gas}}}{\pi M_{\text{mol}}}}$$

### 3.3 Model Saturasi Parit Dalam & Waktu Paparan Gordon (*Gordon's Saturation Time Law*)
Untuk melapisi secara konformal dinding dan dasar parit dengan kedalaman $H$ dan diameter lubang $d_v$ (Rasio Aspek $AR = H / d_v$), Gordon et al. menurunkan waktu pulsa minimum prekursor $t_{\text{sat, AR}}$ yang diperlukan agar saturasi chemisorption mencapai dasar lubang:

$$t_{\text{sat, AR}} = t_{\text{planar}} \cdot \left[ 1 + \frac{3}{4} \cdot AR + \frac{3}{8} \cdot AR^2 \right]$$

di mana $t_{\text{planar}}$ adalah waktu saturasi untuk permukaan datar planar. 
Untuk rasio aspek ekstrem ($AR \gg 1$), waktu pulsa saturasi berskala kuadratik terhadap rasio aspek:

$$t_{\text{sat, AR}} \propto AR^2$$

### 3.4 Persamaan Ketebalan Total Lapisan (*Total Film Thickness & Uniformity*)
Ketebalan total lapisan oksida $h_{\text{film}}$ setelah mengeksekusi sebanyak $N_{\text{cycles}}$ siklus ALD:

$$h_{\text{film}} = \sum_{k=1}^{N_{\text{cycles}}} \text{GPC}_k(\theta_A, \theta_B, T_{\text{sub}}) \approx N_{\text{cycles}} \cdot \text{GPC}_0 \cdot \theta_A \cdot \theta_B$$

di mana $\text{GPC}_0$ adalah laju pertumbuhan ideal saturasi penuh ($\approx 0.11\ \text{nm/cycle}$ untuk $\text{Al}_2\text{O}_3$ pada $200^\circ\text{C}$).

---

## 4. Evaluasi Konformalitas & Metrik Kualitas Lapisan Tipis (SEMI & ISO 14644)

### 4.1 Definisi *Step Coverage* ($SC$)
Konformalitas lapisan dievaluasi melalui rasio *step coverage* persentase:

$$SC = \frac{h_{\text{bottom}}}{h_{\text{top}}} \times 100\% \quad \text{atau} \quad SC_{\text{sidewall}} = \frac{h_{\text{sidewall, bottom}}}{h_{\text{top}}} \times 100\%$$

di mana:
- $h_{\text{top}}$: Ketebalan lapisan pada permukaan planar atas wafer.
- $h_{\text{bottom}}$: Ketebalan lapisan pada dasar parit trench.
- $h_{\text{sidewall, bottom}}$: Ketebalan lapisan pada dinding samping parit terdalam.
Pada proses ALD yang teroptimasi, $SC \ge 99.5\%$, sedangkan metode PVD konvensional sering kali hanya mencapai $SC < 15\%$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       PERBANDINGAN STEP COVERAGE: PVD SPUTTERING VS CHEMICAL CVD VS ALD                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         [ 1. PVD Sputtering (Line-of-Sight) ]     [ 2. CVD Konvensional ]              [ 3. ALD (Self-Terminating) ]  |
|                                                                                                                       |
|         Top: Tebal (h_top)                        Top: Sangat Tebal                    Top: Presisi Seragam (h_0)     |
|         ┌───███████████───┐                       ┌───███████████───┐                  ┌───███████████───┐            |
|         │   │         │   │                       │   │  Overhang │   │                  │   │           │   │            |
|         │   │         │   │ Sidewall Tipis        │   ██         ██   │ Sidewall Sedang  │   █           █   │ Sidewall   |
|         │                 │                       │    ██       ██    │ (Pinch-off Void) │   █  Uniform  █   │ Sempurna   |
|         │       ___       │                       │        ___        │                  │   █           █   │ (SC=100%)  |
|         └──────█████──────┘                       └───────█████───────┘                  └───────█████───────┘            |
|         Bottom: Kosong (SC < 10%)                 Bottom: Non-uniform (SC ≈ 50%)         Bottom: Identik (SC = 100%)  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Algoritma Python Solver: Simulasi Kinetika Reaktor ALD & Penetrasi Struktur High Aspect Ratio (HAR)

Skrip Python berikut memodelkan kinetika adsorpsi Hertz-Knudsen/Langmuir, menghitung difusi balistik Knudsen, memprediksi profil saturasi kedalaman pada saluran trench berrasio aspek tinggi ($AR = 10 - 200$), serta mengoptimalkan durasi pulsa/purge untuk konsumsi gas minimal.

```python
#!/usr/bin/env python3
"""
Atomic Layer Deposition (ALD) Surface Kinetics & HAR Trench Diffusion Solver
Kompatibel dengan standar SEMI E49, ISO 14644-1, dan IEEE EDS IRDS Standards.
"""

import numpy as np
import math

class ALDReactorSimulator:
    def __init__(self,
                 precursor_name: str = "TMA - Al(CH3)3",
                 molar_mass_kg: float = 0.07208,   # 72.08 g/mol untuk TMA
                 coreactant_name: str = "H2O",
                 molar_mass_coreactant: float = 0.018015, # 18.015 g/mol
                 N_sites: float = 5.0e18,          # Kerapatan situs aktif per m^2
                 S_0: float = 0.015,               # Initial sticking coefficient
                 GPC_ideal_nm: float = 0.11,       # nm per cycle Al2O3
                 reactor_temp_C: float = 200.0,    # Suhu ruang deposisi
                 carrier_gas: str = "N2"):
        self.precursor = precursor_name
        self.M_A = molar_mass_kg
        self.M_B = molar_mass_coreactant
        self.N_sites = N_sites
        self.S_0 = S_0
        self.GPC_0 = GPC_ideal_nm
        self.T_K = reactor_temp_C + 273.15
        self.R_gas = 8.31446 # J/(mol*K)
        self.k_B = 1.380649e-23 # J/K

    def compute_hertz_knudsen_flux(self, partial_pressure_Pa: float) -> dict:
        """
        Menghitung fluks molekuler Hertz-Knudsen dan laju tumbukan permukaan.
        """
        # Fluks molekuler J (molekul / (m^2 * s))
        v_thermal = math.sqrt(8.0 * self.R_gas * self.T_K / (math.pi * self.M_A))
        term_denom = math.sqrt(2.0 * math.pi * self.M_A * self.R_gas * self.T_K)
        J_flux = (partial_pressure_Pa * 6.02214e23) / term_denom

        return {
            "v_thermal_m_s": v_thermal,
            "J_flux_molecules_m2_s": J_flux,
            "exposure_rate_Langmuir_s": partial_pressure_Pa / 1.33322e-4
        }

    def compute_planar_saturation(self,
                                  partial_pressure_Pa: float,
                                  pulse_time_s: float) -> dict:
        """
        Menghitung fraksi saturasi kemisorpsi Langmuir pada permukaan datar planar.
        """
        flux_info = self.compute_hertz_knudsen_flux(partial_pressure_Pa)
        J_flux = flux_info["J_flux_molecules_m2_s"]
        
        # Tau waktu karakteristik saturasi (s)
        tau_sat = self.N_sites / (self.S_0 * J_flux)
        
        # Fraksi cakupan permukaan theta
        theta = 1.0 - math.exp(-pulse_time_s / tau_sat)
        
        return {
            "tau_characteristic_s": tau_sat,
            "surface_coverage_theta": theta,
            "effective_GPC_nm": self.GPC_0 * theta
        }

    def simulate_har_trench_penetration(self,
                                        aspect_ratio: float,
                                        trench_width_nm: float,
                                        partial_pressure_Pa: float,
                                        pulse_time_s: float,
                                        num_nodes: int = 50) -> dict:
        """
        Simulasi profil saturasi fraksi kemisorpsi sepanjang kedalaman parit HAR
        menggunakan diskretisasi model difusi balistik Knudsen 1D.
        """
        w_trench = trench_width_nm * 1e-9 # meter
        depth_H = w_trench * aspect_ratio  # meter
        
        # Difusi Knudsen D_K (m^2/s)
        v_th = math.sqrt(8.0 * self.R_gas * self.T_K / (math.pi * self.M_A))
        D_K = (w_trench / 3.0) * v_th
        
        # Waktu saturasi Gordon analitis
        t_planar = (self.N_sites * math.sqrt(2.0 * math.pi * self.M_A * self.R_gas * self.T_K)) / \
                   (self.S_0 * partial_pressure_Pa * 6.02214e23) * math.log(1000.0)
        t_sat_gordon = t_planar * (1.0 + 0.75 * aspect_ratio + 0.375 * (aspect_ratio**2))
        
        # Profil numerik kedalaman z = [0 .. H]
        z_array = np.linspace(0, depth_H, num_nodes)
        # Penurunan tekanan parsial di sepanjang parit akibat konsumsi kimia
        # P(z) ≈ P_0 * cosh(gamma * (H - z)) / cosh(gamma * H)
        gamma = math.sqrt((self.S_0 * v_th) / (2.0 * w_trench * D_K))
        pressure_profile = partial_pressure_Pa * (np.cosh(gamma * (depth_H - z_array)) / np.cosh(gamma * depth_H))
        
        # Estimasi fraksi cakupan di dasar parit (bottom coverage)
        P_bottom = pressure_profile[-1]
        flux_bottom = (P_bottom * 6.02214e23) / math.sqrt(2.0 * math.pi * self.M_A * self.R_gas * self.T_K)
        tau_bottom = self.N_sites / (self.S_0 * flux_bottom)
        theta_bottom = 1.0 - math.exp(-pulse_time_s / tau_bottom)
        
        # Step coverage (%)
        step_coverage_pct = min(100.0, (theta_bottom / max(1e-6, 1.0 - math.exp(-pulse_time_s / (self.N_sites / (self.S_0 * ((partial_pressure_Pa * 6.02214e23)/math.sqrt(2*math.pi*self.M_A*self.R_gas*self.T_K)))))) * 100.0)

        return {
            "aspect_ratio": aspect_ratio,
            "trench_depth_um": depth_H * 1e6,
            "Knudsen_diffusivity_m2_s": D_K,
            "t_sat_Gordon_s": t_sat_gordon,
            "bottom_partial_pressure_Pa": P_bottom,
            "theta_bottom": theta_bottom,
            "step_coverage_pct": step_coverage_pct,
            "conformal_pass": step_coverage_pct >= 99.0
        }

    def optimize_recipe(self,
                        target_thickness_nm: float,
                        aspect_ratio: float,
                        trench_width_nm: float,
                        dose_pressure_Pa: float = 50.0) -> dict:
        """
        Menghasilkan resep optimasi siklus ALD untuk mencapai ketebalan target dengan 100% konformalitas.
        """
        cycles_required = int(math.ceil(target_thickness_nm / self.GPC_0))
        har_sim = self.simulate_har_trench_penetration(
            aspect_ratio=aspect_ratio,
            trench_width_nm=trench_width_nm,
            partial_pressure_Pa=dose_pressure_Pa,
            pulse_time_s=1.0 # Baseline probe
        )
        
        # Waktu pulsa prekursor optimal (dengan safety margin 1.25x dari Gordon sat time)
        pulse_A_opt = har_sim["t_sat_Gordon_s"] * 1.25
        purge_A_opt = max(2.0, pulse_A_opt * 1.5)
        pulse_B_opt = pulse_A_opt * 0.8
        purge_B_opt = purge_A_opt
        
        total_cycle_time_s = pulse_A_opt + purge_A_opt + pulse_B_opt + purge_B_opt
        total_process_time_min = (cycles_required * total_cycle_time_s) / 60.0

        return {
            "total_cycles": cycles_required,
            "nominal_thickness_nm": cycles_required * self.GPC_0,
            "pulse_A_s": pulse_A_opt,
            "purge_A_s": purge_A_opt,
            "pulse_B_s": pulse_B_opt,
            "purge_B_s": purge_B_opt,
            "single_cycle_duration_s": total_cycle_time_s,
            "total_recipe_time_min": total_process_time_min
        }

if __name__ == "__main__":
    simulator = ALDReactorSimulator(
        precursor_name="TMA (Trimethylaluminum)",
        reactor_temp_C=200.0,
        GPC_ideal_nm=0.11
    )
    
    print("=== 1. ANALISIS KINETIKA HERTZ-KNUDSEN PLANAR ===")
    planar_kin = simulator.compute_planar_saturation(partial_pressure_Pa=25.0, pulse_time_s=0.08)
    print(f"Konstanta Waktu Saturasi (tau) : {planar_kin['tau_characteristic_s']*1e3:.2f} ms")
    print(f"Cakupan Permukaan (Theta)      : {planar_kin['surface_coverage_theta']*100:.3f} %")
    print(f"Pertumbuhan Efektif per Siklus : {planar_kin['effective_GPC_nm']:.4f} nm/cycle")
    
    print("\n=== 2. SIMULASI PENETRASI PARIT HAR (3D NAND / GAA-FET) ===")
    har_results = simulator.simulate_har_trench_penetration(
        aspect_ratio=60.0,
        trench_width_nm=30.0,
        partial_pressure_Pa=40.0,
        pulse_time_s=1.85
    )
    print(f"Rasio Aspek (AR)               : {har_results['aspect_ratio']}:1 (Kedalaman: {har_results['trench_depth_um']:.2f} μm)")
    print(f"Koefisien Difusi Knudsen (D_K) : {har_results['Knudsen_diffusivity_m2_s']:.2e} m^2/s")
    print(f"Waktu Saturasi Gordon Teoretis : {har_results['t_sat_Gordon_s']:.3f} s")
    print(f"Tekanan di Dasar Parit         : {har_results['bottom_partial_pressure_Pa']:.2f} Pa")
    print(f"Cakupan di Dasar Parit (Theta) : {har_results['theta_bottom']*100:.2f} %")
    print(f"Step Coverage Akhir            : {har_results['step_coverage_pct']:.2f} %")
    print(f"Status Kualitas Konformalitas  : {'LOLOS (Conformal)' if har_results['conformal_pass'] else 'GAGAL (Non-Conformal)'}")
    
    print("\n=== 3. RESEP OPTIMASI ALD PADA GERBANG HIGH-K (EOT < 1 nm) ===")
    recipe = simulator.optimize_recipe(
        target_thickness_nm=4.4, # 40 siklus Al2O3
        aspect_ratio=60.0,
        trench_width_nm=30.0,
        dose_pressure_Pa=40.0
    )
    print(f"Total Siklus Diperlukan        : {recipe['total_cycles']} siklus")
    print(f"Ketebalan Target               : {recipe['nominal_thickness_nm']:.2f} nm")
    print(f"Durasi Pulsa Prekursor A (TMA) : {recipe['pulse_A_s']:.3f} s")
    print(f"Durasi Purge N2 A              : {recipe['purge_A_s']:.3f} s")
    print(f"Durasi Pulsa Ko-reaktan B (H2O): {recipe['pulse_B_s']:.3f} s")
    print(f"Durasi Purge N2 B              : {recipe['purge_B_s']:.3f} s")
    print(f"Waktu Total Proses Deposisi    : {recipe['total_recipe_time_min']:.2f} menit")
```

---

## 6. Studi Kasus Rekayasa Industri: Deposisi Dielektrik High-$k$ $\text{Al}_2\text{O}_3/\text{HfO}_2$ pada Struktur Trenched GAA-FET Rasio Aspek 60:1

### 6.1 Latar Belakang Masalah & Spesifikasi Teknis
Sebuah *foundry* semikonduktor memproduksi transistor *Gate-All-Around Nanosheet FET* (GAA-FET) generasi sub-3nm. Arsitektur celah gerbang memiliki struktur saluran nano (*nanosheet channels*) dengan lebar parit $w = 25\ \text{nm}$, kedalaman trench $H = 1.5\ \mu\text{m}$ (Rasio Aspek $AR = 60:1$), dan kebutuhan lapisan dielektrik gerbang *high-k* ($\text{HfO}_2 / \text{Al}_2\text{O}_3$ bilayer) setebal $3.5\ \text{nm} \pm 0.05\ \text{nm}$.

Proses awal menggunakan sistem *Plasma-Enhanced Chemical Vapor Deposition* (PECVD) mengalami kegagalan fatal:
1. **Efek Pinch-off & Cacat Void**: Spesies radikal plasma mengalami rekombinasi cepat di bibir atas celah, menyebabkan penumpukan material di mulut parit (*overhang*) dan menyisakan rongga hampa (*internal keyhole void*) di sepanjang dinding dalam nanosheet.
2. **Lonjakan Arus Bocor Gerbang (*Gate Leakage Current*)**: Akibat variasi ketebalan dielektrik ($SC < 42\%$), nilai *Equivalent Oxide Thickness* (EOT) berfluktuasi dari $0.75\ \text{nm}$ di atas menjadi $> 2.8\ \text{nm}$ di bawah, memicu kegagalan integritas dielektrik dengan *gate leakage current* $J_g > 10^{-2}\ \text{A/cm}^2$ (Standar IRDS mengharuskan $J_g < 10^{-6}\ \text{A/cm}^2$).

### 6.2 Solusi Rekayasa Berbasis Thermal ALD Resep Pulsa Dinamis
Tim rekayasa proses mengganti sistem ke **Thermal ALD Multi-Zone Showerhead Reactor** (Sertifikasi ISO 14644-1 Class 1 Cleanroom) dengan resep bertingkat:
- **Prekursor Logam**: Hafnium tetrachloride ($\text{HfCl}_4$) dan Trimethylaluminum ($\text{TMA}$) dengan kemurnian elektronik $99.9999\%$ (SEMI E49.8).
- **Ko-Reaktan Oksidan**: Uap air deionisasi ultra-murni ($\text{DI }\text{H}_2\text{O}$) dan Gas Ozon ($\text{O}_3$, $180\ \text{g/Nm}^3$).
- **Optimasi Tekanan Dosis & Waktu Pulsa Gordon**:
  - Dosis pulsa ditingkatkan ke $P_{\text{dose}} = 45\ \text{Pa}$ dengan injeksi *stop-valve quasi-static exposure* (menutup katup isolasi vakum selama $1.2\ \text{s}$ untuk menahan uap prekursor dalam parit tanpa terhisap langsung oleh pompa turbomolekuler).
  - Waktu hembusan *purge* gas $\text{N}_2$ ditingkatkan menjadi $3.5\ \text{s}$ pada laju alir $400\ \text{sccm}$ untuk menjamin molekul $\text{HCl}$ dan $\text{CH}_4$ sisa reaksi terbuang tuntas dari dasar lubang nano.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       METRIK KINERJA: PECVD KONVENSIONAL VS QUASI-STATIC THERMAL ALD                                  |
+-----------------------------------------------------------------------------------------------------------------------+
| Parameter Kinerja                           Proses PECVD Lama         Thermal ALD Quasi-Static      Perubahan / Status|
+-----------------------------------------------------------------------------------------------------------------------+
| Step Coverage pada Rasio Aspek 60:1         38.5 % (Cacat Pinch-off)  99.8 % (Konformal Sempurna)   +159.2% (Eliminasi)|
| Deviasi Ketebalan Lapisan (1σ Wafer)        ± 0.62 nm                 ± 0.03 nm (Sub-Angstrom)      -95.2% (Presisi)  |
| Cacat Lubang Jarum (Pinhole Density / cm2)  14.2 defects/cm2          0.00 defects/cm2              -100% (Bebas Pinhole)|
| Gate Leakage Current Density (J_g @ 1V)     4.8 x 10^-2 A/cm2         1.2 x 10^-8 A/cm2             Turun 6 Orde Magnitudo|
| Equivalent Oxide Thickness (EOT) Rata-rata  1.68 nm                   0.82 nm                       -51.2% (High-k EOT)|
| Fabrikasi Wafer Yield                       61.4 %                    99.1 %                        +37.7% (Profitabilitas)|
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.3 Analisis Hasil & Dampak Keekonomian Manufaktur
1. **Integritas Dielektrik Skala Atom**: Pengendapan layer-by-layer bebas cacat pin-hole berhasil menekan arus bocor gerbang hingga 6 orde magnitudo, meloloskan transistor GAA-FET pada uji ketahanan degradasi dielektrik bergantung waktu (*Time-Dependent Dielectric Breakdown* / TDDB, ASTM F1260) dengan masa pakai terproyeksi $> 10$ tahun pada tegangan operasional $0.75\ \text{V}$.
2. **Kenaikan Yield Manufaktur**: Eliminasi cacat mikrovoid dan variasi dimensi EOT meningkatkan hasil panen wafer (*wafer functional yield*) dari $61.4\%$ menjadi $99.1\%$, menghasilkan efisiensi biaya produksi chip sebesar \$18.4 juta per lini produksi tahunan.

---

## 7. Referensi Akademik Terverifikasi (SEMI, ISO, & Reputable Journals)

1. **Puurunen, R. L.** (2005). *Surface chemistry of atomic layer deposition: A case study for the trimethylaluminum/water process*. *Journal of Applied Physics*, 97(12), 121301. DOI: [10.1063/1.1940727](https://doi.org/10.1063/1.1940727).
2. **George, S. M.** (2010). *Atomic Layer Deposition: An Overview*. *Chemical Reviews*, 110(1), 111–131. DOI: [10.1021/cr900056b](https://doi.org/10.1021/cr900056b).
3. **Gordon, R. G., Hausmann, D., Kim, E., & Shepard, J.** (2003). *A Kinetic Model for Step Coverage by Atomic Layer Deposition in Narrow Holes or Trenches*. *Chemical Vapor Deposition*, 9(2), 73–78. DOI: [10.1002/cvde.200390005](https://doi.org/10.1002/cvde.200390005).
4. **Wooding, J. P., Gregory, C. W., Atassi, O., & Losego, M. D.** (2023). *Transformation kinetics for low temperature post-deposition crystallization of TiO2 thin films prepared via atomic layer deposition (ALD)*. *Atomic Layer Deposition*, 1, 101276. DOI: [10.3897/aldj.1.101276](https://doi.org/10.3897/aldj.1.101276).
5. **International Organization for Standardization.** (2015). *ISO 14644-1:2015 - Cleanrooms and associated controlled environments — Part 1: Classification of air cleanliness by particle concentration*. ISO Central Secretariat, Geneva, Switzerland.
6. **Semiconductor Equipment and Materials International.** (2020). *SEMI E49.8-0620: Guide for High Purity and Ultrahigh Purity Gas Distribution Systems in Semiconductor Manufacturing*. SEMI International Standards, Milpitas, CA.$.
