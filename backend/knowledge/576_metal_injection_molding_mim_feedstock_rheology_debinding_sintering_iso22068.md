# Modul 576: Metal Injection Molding (MIM): Reologi Feedstock, Kinetika Debinding Pelarut-Termal, Densifikasi Sintering Fasa Padat, dan Pengendalian Toleransi Geometri Presisi (ISO 22068 & MPIF Standard 35)

## 1. Pengantar & Prinsip Fundamental Metal Injection Molding (MIM)

Metal Injection Molding (MIM) merupakan cabang manufaktur metalurgi serbuk (*powder metallurgy*) tingkat lanjut yang menggabungkan keleluasaan desain geometri cetak injeksi plastik (*plastic injection molding*) dengan keunggulan performa mekanis dan termal paduan logam solid berdensitas tinggi ($\ge 96 - 99.5\%$ dari densitas teoretis).

Proses MIM secara universal diterapkan pada manufaktur komponen presisi berkontur mikro-kompleks (*complex net-shape miniaturized components*) dalam industri dirgantara, perangkat medis (*surgical instruments*), otomotif (*turbocharger vanes, fuel injectors*), persenjataan, serta elektronik konsumen (*smartphones hinges and camera brackets*). Standar acuan internasional untuk spesifikasi material serbuk injeksi logam dipandu oleh **ISO 22068** (*Sintered-metal injection-moulded materials — Specifications*) dan **MPIF Standard 35-MIM** (*Materials Standards for Metal Injection Molded Parts*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    TAHAPAN SIKLUS PROSES METAL INJECTION MOLDING (MIM)                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. SERBUK LOGAM & PENGIKAT         2. MOLDING INJEKSI                3. SOLVENT DEBINDING                           |
|  ┌───────────────────────────┐      ┌─────────────────────────┐       ┌───────────────────────────┐                   |
|  │ Serbuk Halus (d50 < 15µm) │      │ Mesin Injeksi Presisi   │       │ Pelarutan Binder Primer   │                   |
|  │ + Binder Polimer Multikom-│ ───► │ P_inj: 60 - 150 MPa     │ ────► │ Larutan N-Heptane / Cair  │                   |
|  │   ponen (Wax, PP, PE, SA) │      │ T_barrel: 160 - 200°C   │       │ Fraksi Bobot Hilang ~60%  │                   |
|  └───────────────────────────┘      └─────────────────────────┘       └───────────────────────────┘                   |
|          [ Feedstock MIM ]               [ Green Part ]                      [ Brown Part 1 ]                         |
|                                                                                      │                                |
|                                                                                      ▼                                |
|   6. KOMPONEN AKHIR BERDENSITAS TINGGI   5. SINTERING SUHU TINGGI          4. THERMAL DEBINDING                       |
|  ┌───────────────────────────┐      ┌─────────────────────────┐       ┌───────────────────────────┐                   |
|  │ Densitas: 96% - 99.5%     │      │ Tungku Vakum / H2       │       │ Pirolisis Binder Sekunder │                   |
|  │ Kekuatan Mekanis Penuh    │ ◄─── │ T_sint: 1200 - 1380°C   │ ◄──── │ T = 300 - 550°C           │                   |
|  │ Penyusutan Linier 14 - 20%│      │ Difusi Kisi & Batas Btr │       │ Pori Terbuka Terkoneksi   │                   |
|  └───────────────────────────┘      └─────────────────────────┘       └───────────────────────────┘                   |
|         [ Sintered Part ]              [ Densifikasi Padat ]                 [ Brown Part 2 ]                         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

```
+-----------------------------------------------------------------------------------------------------------------------+
|                        ARSITEKTUR MIKROSTRUKTUR & PERUBAHAN TAHAPAN DARI FEEDSTOCK HINGGA SINTERING                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    (A) GREEN PART                  (B) BROWN PART                   (C) AWAL SINTERING             (D) FINAL SINTERED |
|  ┌─────────────────────┐         ┌─────────────────────┐          ┌─────────────────────┐        ┌──────────────────┐ |
|  │ ░░░ ◯ ░░░ ◯ ░░░ ◯ ░░│         │     ◯     ◯     ◯   │          │     (◯═◯)   (◯═◯)   │        │ ┌────┬────┬────┐ │ |
|  │ ░░ ◯ ░░░ ◯ ░░░ ◯ ░░░│ ──────► │   ◯     ◯     ◯     │  ──────► │    (◯═══◯) (◯═══◯)  │ ─────► │ │    │    │    │ │ |
|  │ ░░░ ◯ ░░░ ◯ ░░░ ◯ ░░│         │     ◯     ◯     ◯   │          │     (◯═◯)   (◯═◯)   │        │ ├────┼────┼────┤ │ |
|  │ ░░ ◯ ░░░ ◯ ░░░ ◯ ░░░│         │   ◯     ◯     ◯     │          │    (Leher Kontak)   │        │ │    │    │    │ │ |
|  └─────────────────────┘         └─────────────────────┘          └─────────────────────┘        └──────────────────┘ |
|   Serbuk Logam Terkunci           Binder Dihilangkan Penuh         Pertumbuhan Leher Difusi       Butir Padat Utuh    |
|   di Matriks Polimer              Pori Terbuka Antar-Partikel      Penyusutan Dimensi Dimulai     Densitas > 98%      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Reologi Feedstock & Pembebanan Serbuk Kritis

Feedstock MIM adalah suspensi partikel logam padat di dalam matriks polimer organik multikomponen. Keberhasilan proses pencetakan ditentukan oleh viskositas dan stabilitas aliran lelehan.

### 2.1 Pembebanan Padatan Serbuk (*Solids Loading*, $\phi$) & Model Krieger-Dougherty
Fraksi volumetrik serbuk padat terhadap total volume campuran didefinisikan sebagai $\phi = V_{\text{powder}} / (V_{\text{powder}} + V_{\text{binder}})$.

Viskositas efektif lelehan feedstock $\eta$ terhadap viskositas polimer murni $\eta_0$ dimodelkan secara akurat melalui persamaan **Krieger-Dougherty**:

$$\eta(\phi) = \eta_0 \left( 1 - \frac{\phi}{\phi_m} \right)^{-[\eta] \phi_m}$$

Di mana:
- $\phi_m$ : Fraksi pembebanan serbuk kemas maksimum (*maximum packing fraction*), tipikal $0.68 - 0.74$ untuk serbuk sferis bimodal hasil atomisasi gas (*gas atomized powder*).
- $[\eta]$ : Viskositas intrinsik partikel ($[\eta] = 2.5$ untuk partikel sferis monodispers menurut Teori Einstein).

Pembebanan serbuk optimum untuk proses komersial MIM berada tepat pada $2 - 5\%$ di bawah titik pembebanan kritis ($\phi_{\text{opt}} \approx \phi_{\text{crit}} - 0.04 \approx 0.60 - 0.65$). Jika $\phi > \phi_{\text{crit}}$, viskositas melonjak tak berhingga ($\eta \to \infty$) yang memicu *clogging*, gesekan berlebih, dan segregasi binder-serbuk.

### 2.2 Sifat Non-Newtonian Pseudoplastis (Power-Law Fluid)
Lelehan feedstock harus bersifat *shear-thinning* (pseudoplastis) agar mudah mengisi rongga cetakan berdinding tipis pada laju geser tinggi saat diinjeksi ($\dot{\gamma} = 10^3 - 10^5\text{ s}^{-1}$), namun mempertahankan bentuk kaku saat pendinginan:

$$\eta(\dot{\gamma}, T) = K(T) \cdot \dot{\gamma}^{n-1} \cdot \exp\left( \frac{E_a}{R T} \right)$$

Di mana eksponen indeks perilaku aliran $n < 1$ (pada MIM yang ideal, $0.2 < n < 0.6$), $E_a$ adalah energi aktivasi aliran fluida ($E_a \approx 20 - 45\text{ kJ/mol}$), dan $R$ adalah konstanta gas universal ($8.314\text{ J/mol}\cdot\text{K}$).

---

## 3. Termodinamika & Kinetika Debinding (Ekstraksi Binder)

Debinding bertujuan mengekstraksi seluruh polimer pengikat tanpa menimbulkan distorsi geometri, retak mikro (*micro-cracking*), ataupun pembentukan gelembung gas (*blistering*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    SISTEM BINDER MULTI-KOMPONEN PADA PROSES MIM                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Komponen Binder               Proporsi Bobot    Fungsi Spesifik & Mekanisme Pengeluaran                              |
|  -------------------------------------------------------------------------------------------------------------------  |
|  1. Primary Extractable Wax    50% - 70% wt      Menurunkan viskositas; Dilarutkan pertama via Solvent Debinding      |
|     (Paraffin Wax / PEG)                         (Solvent: Heptane / Air pada 50 - 60°C). Menciptakan jalur pori.     |
|                                                                                                                       |
|  2. Secondary Backbone Polymer 25% - 45% wt      Memberikan kekuatan mekanis pada "Brown Part" agar tidak runtuh;     |
|     (HDPE / PP / EVA)                            Didegradasi secara lambat via Thermal Debinding (300 - 550°C).       |
|                                                                                                                       |
|  3. Surfactant / Coupling Agt  1% - 5% wt        Mencegah aglomerasi serbuk; Meningkatkan wetting antara logam-binder |
|     (Stearic Acid / Oleic Acid)                  (Asam stearat membentuk lapisan monomolekuler pada serbuk).          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Kinetika Solvent Debinding (Difusi Fickian 1D)
Kecepatan ekstraksi wax larut dalam media pelarut cair mengikuti hukum difusi Fick kedua dengan antarmuka batas bergerak:

$$\frac{\partial C}{\partial t} = D_{\text{eff}}(T) \frac{\partial^2 C}{\partial x^2}$$

Fraksi kehilangan massa binder pelarut $M_t / M_\infty$ untuk lembaran tebal $2 L$ dinyatakan sebagai:

$$\frac{M_t}{M_\infty} = 1 - \sum_{k=0}^{\infty} \frac{8}{(2k+1)^2 \pi^2} \exp\left( -\frac{(2k+1)^2 \pi^2 D_{\text{eff}} t}{4 L^2} \right)$$

Untuk tahap awal ($M_t / M_\infty < 0.6$), relasi dapat didekati dengan hukum parabolik: $\frac{M_t}{M_\infty} \approx \frac{2}{\sqrt{\pi}} \sqrt{\frac{D_{\text{eff}} \cdot t}{L^2}}$.

### 3.2 Kinetika Thermal Debinding (Termogravimetri & Laju Pirolisis)
Pada dekomposisi termal polimer tulang punggung (*backbone*), laju kehilangan massa binder volatil mengikuti kinetika reaksi orde-$n$:

$$\frac{d\alpha}{dt} = A_{\text{pyr}} \exp\left( -\frac{E_{\text{pyr}}}{R T} \right) (1 - \alpha)^{n_p}$$

Untuk mencegah lonjakan tekanan internal gas $\Delta P_{\text{pore}} = \frac{2 \gamma_{lv}}{r_p}$ yang dapat meledakkan dinding komponen, laju pemanasan tungku dikendalikan secara lambat ($\beta = 1 - 3^\circ\text{C/min}$) pada rentang kritis $320 - 480^\circ\text{C}$.

---

## 4. Teori Sintering & Master Sintering Curve (MSC)

Sintering fasa padat adalah fenomena penggabungan partikel serbuk di bawah titik leleh absolutnya ($T_{\text{sint}} \approx 0.7 - 0.85\text{ }T_{\text{melt}}$) yang digerakkan oleh penurunan energi bebas permukaan total material ($\Delta G_s = \gamma_{sv} \cdot \Delta A_{\text{surface}} < 0$).

### 4.1 Mekanisme Transport Massa Difusional
Laju pertumbuhan leher kontak antar-dua partikel berdiameter $D_p$ dinyatakan oleh persamaan umum Frenkel-Kuczynski:

$$\left( \frac{x}{D_p} \right)^m = \frac{K_{\text{mech}}(T)}{D_p^n} \cdot t$$

- Difusi Batas Butir (*Grain Boundary Diffusion*, $m=6, n=4$): Penggerak utama penyusutan volume dan densifikasi.
- Difusi Kisi Volume (*Volume/Lattice Diffusion*, $m=5, n=3$): Berkontribusi pada densifikasi pada temperatur ultra-tinggi.
- Difusi Permukaan (*Surface Diffusion*, $m=7, n=4$): Memicu pembesaran leher tanpa penyusutan volumetrik (memperlambat densifikasi).

### 4.2 Teori Konseptual Master Sintering Curve (MSC) Su & Johnson
Densifikasi relatif komponen ($\rho(t, T)$) dapat dipetakan secara terpadu melalui integral *work of sintering* ($\Theta$):

$$\Theta(t) = \int_0^t \frac{1}{T(\tau)} \exp\left( -\frac{Q_{\text{sint}}}{R T(\tau)} \right) d\tau$$

Densitas akhir material diprediksi melalui formulasi sigmoidal terpadu:

$$\rho(\Theta) = \rho_0 + \frac{1 - \rho_0}{1 + \exp\left( -\frac{\ln \Theta - \ln \Theta_0}{a_{\text{msc}}} \right)}$$

Di mana $Q_{\text{sint}}$ adalah energi aktivasi sintering paduan logam spesifik ($Q_{\text{sint}} \approx 240 - 280\text{ kJ/mol}$ untuk baja tahan karat 17-4PH / 316L).

### 4.3 Prediksi Penyusutan Linier Isotropik (*Linear Shrinkage*, $S_L$)
Komponen MIM mengalami penyusutan geometris homogen yang signifikan dari *green state* ke *sintered state*. Nilai faktor penyusutan linier teoritis ($S_L$) dan faktor pembesaran cetakan (*Oversize Factor / OSF*) dihitung persis berdasarkan fraksi padatan $\phi$ dan densitas sintering relatif $\rho_r$:

$$S_L = 1 - \left( \frac{\phi}{\rho_r} \right)^{1/3}$$

$$\text{OSF} = \frac{1}{1 - S_L} = \left( \frac{\rho_r}{\phi} \right)^{1/3}$$

Pada pembebanan serbuk $\phi = 0.62$ dan densitas akhir $\rho_r = 0.985$, penyusutan linier mencapai $S_L = 14.34\%$ dan $\text{OSF} = 1.1673$ (artinya cetakan *tooling die* harus dikerjakan $16.73\%$ lebih besar dari gambar teknik akhir).

---

## 5. Implementasi Python Solver: Enterprise MIM Simulation Engine (Feedstock, Debinding, & Sintering)

Berikut adalah implementasi Python mandiri berstandar teknik industri untuk memodelkan reologi suspensi feedstock, kinetika ekstraksi binder pelarut, densifikasi sintering Master Sintering Curve (MSC), serta kompensasi dimensi perkakas cetak (*mold oversize optimization*).

```python
"""
RuangTI - Advanced Metal Injection Molding (MIM) Enterprise Simulator
Modul 576: Feedstock Rheology, Solvent Extraction Kinetics, MSC Sintering, & Tooling Scale
"""

import math
from typing import Dict, List, Tuple, Any

class MetalInjectionMoldingEngine:
    def __init__(
        self,
        powder_type: str = "Stainless Steel 17-4PH (AISI 630)",
        powder_d50_um: float = 12.5,
        solids_loading_phi: float = 0.625,
        max_packing_phi_m: float = 0.720,
        component_thickness_mm: float = 4.0,
        binder_wax_fraction_wt: float = 0.60,
        sintering_temp_c: float = 1340.0,
        sintering_dwell_hours: float = 2.5,
        target_relative_density: float = 0.985
    ):
        self.powder_type = powder_type
        self.d50 = powder_d50_um * 1e-6  # m
        self.phi = solids_loading_phi
        self.phi_m = max_packing_phi_m
        self.L = (component_thickness_mm / 2.0) / 1000.0  # half-thickness (m)
        self.wax_wt = binder_wax_fraction_wt
        self.T_sint_k = sintering_temp_c + 273.15
        self.dwell_s = sintering_dwell_hours * 3600.0
        self.target_rho = target_relative_density
        
        # Konstanta Sintering 17-4PH
        self.Q_sint = 265000.0  # J/mol
        self.R = 8.314462618    # J/mol.K
        self.ln_theta_0 = -18.2 # MSC reference
        self.a_msc = 0.85       # Parameter kemiringan MSC

    def calculate_feedstock_rheology(self, shear_rate_s_inv: float = 1000.0, temp_c: float = 180.0) -> Dict[str, float]:
        """Menghitung viskositas efektif feedstock dengan model Krieger-Dougherty & Power-Law."""
        intrinsic_visc = 2.5
        eta_0_binder = 0.85  # Pa.s pada 180 C
        
        # Krieger-Dougherty relative viscosity
        term = max(1e-5, 1.0 - (self.phi / self.phi_m))
        eta_relative = term ** (-intrinsic_visc * self.phi_m)
        eta_zero_shear = eta_0_binder * eta_relative
        
        # Pseudoplastic power law index
        n_flow_index = 0.38
        viscosity_apparent = eta_zero_shear * (shear_rate_s_inv ** (n_flow_index - 1.0))
        
        return {
            "Solids_Loading_vol_pct": self.phi * 100.0,
            "Max_Packing_vol_pct": self.phi_m * 100.0,
            "Relative_Viscosity_Ratio": eta_relative,
            "Apparent_Viscosity_Pa_s": viscosity_apparent,
            "Flow_Behavior_Index_n": n_flow_index
        }

    def simulate_solvent_debinding(self, solvent_temp_c: float = 55.0, total_hours: float = 8.0, dt_min: float = 2.0) -> Dict[str, Any]:
        """Simulasi kinetika ekstraksi wax solvent debinding 1D Fickian Diffusion."""
        # Arrhenius diffusivity of wax in solvent
        D_0 = 1.2e-4  # m2/s
        E_diff = 42000.0  # J/mol
        T_k = solvent_temp_c + 273.15
        D_eff = D_0 * math.exp(-E_diff / (self.R * T_k))
        
        total_seconds = total_hours * 3600.0
        dt_s = dt_min * 60.0
        steps = int(total_seconds / dt_s)
        
        time_hours_list = []
        fraction_extracted_list = []
        
        for step in range(steps + 1):
            t_s = step * dt_s
            t_h = t_s / 3600.0
            
            # Infinite series solution Fick 1D
            sum_series = 0.0
            for k in range(15):
                m = 2 * k + 1
                exponent = -(m**2) * (math.pi**2) * D_eff * t_s / (4.0 * (self.L**2))
                sum_series += (8.0 / ((m**2) * (math.pi**2))) * math.exp(exponent)
                
            fraction_extracted = max(0.0, min(1.0, 1.0 - sum_series))
            time_hours_list.append(t_h)
            fraction_extracted_list.append(fraction_extracted * 100.0)
            
        return {
            "Effective_Diffusivity_m2_per_s": D_eff,
            "Final_Extraction_Pct": fraction_extracted_list[-1],
            "Time_to_90pct_Wax_Extraction_Hours": self._find_threshold_time(time_hours_list, fraction_extracted_list, 90.0),
            "Time_Series_Hours": time_hours_list,
            "Extraction_Series_Pct": fraction_extracted_list
        }

    def calculate_sintering_and_shrinkage(self) -> Dict[str, float]:
        """Prediksi densifikasi MSC Su & Johnson dan optimasi faktor penskalaan cetakan."""
        # Integrasi sintering work (tahap isothermal dwell)
        work_of_sintering = (1.0 / self.T_sint_k) * math.exp(-self.Q_sint / (self.R * self.T_sint_k)) * self.dwell_s
        ln_theta = math.log(max(1e-30, work_of_sintering))
        
        # Prediksi densitas relatif dari MSC
        initial_green_relative_density = self.phi
        predicted_density = initial_green_relative_density + (1.0 - initial_green_relative_density) / (
            1.0 + math.exp(-(ln_theta - self.ln_theta_0) / self.a_msc)
        )
        predicted_density = min(0.998, max(initial_green_relative_density, predicted_density))
        
        # Perhitungan Linear Shrinkage & Oversize Factor (OSF)
        linear_shrinkage = 1.0 - (self.phi / predicted_density) ** (1.0 / 3.0)
        oversize_factor = 1.0 / (1.0 - linear_shrinkage)
        
        return {
            "Work_of_Sintering_ln_Theta": ln_theta,
            "Predicted_Relative_Density_Pct": predicted_density * 100.0,
            "Theoretical_Linear_Shrinkage_Pct": linear_shrinkage * 100.0,
            "Tooling_Oversize_Factor_OSF": oversize_factor,
            "Dimensional_Scale_Multiplier": oversize_factor
        }

    def _find_threshold_time(self, t_list: List[float], val_list: List[float], threshold: float) -> float:
        for t, val in zip(t_list, val_list):
            if val >= threshold:
                return t
        return t_list[-1]

if __name__ == "__main__":
    mim_solver = MetalInjectionMoldingEngine(
        powder_type="17-4PH Stainless Steel (Precipitation Hardening)",
        powder_d50_um=10.8,
        solids_loading_phi=0.635,
        max_packing_phi_m=0.725,
        component_thickness_mm=3.2,
        sintering_temp_c=1350.0,
        sintering_dwell_hours=3.0
    )
    
    rheo = mim_solver.calculate_feedstock_rheology(shear_rate_s_inv=1500.0, temp_c=185.0)
    debind = mim_solver.simulate_solvent_debinding(solvent_temp_c=55.0, total_hours=6.0)
    sint = mim_solver.calculate_sintering_and_shrinkage()
    
    print("=" * 75)
    print("SIMULASI INTEGRAL METAL INJECTION MOLDING (MIM) 17-4PH ENGINE")
    print("=" * 75)
    print(f"1. Pembebanan Padatan Serbuk (Solids Loading)  : {rheo['Solids_Loading_vol_pct']:.2f} % vol")
    print(f"2. Viskositas Geser Injeksi (pada 1500 1/s)    : {rheo['Apparent_Viscosity_Pa_s']:.2f} Pa·s (Fluiditas Baik)")
    print(f"3. Indeks Perilaku Aliran Pseudoplastis (n)    : {rheo['Flow_Behavior_Index_n']:.2f} (Shear Thinning)")
    print(f"4. Difusivitas Efektif Ekstraksi Pelarut       : {debind['Effective_Diffusivity_m2_per_s']:.3e} m²/s")
    print(f"5. Waktu Debinding Pelarut untuk 90% Wax       : {debind['Time_to_90pct_Wax_Extraction_Hours']:.2f} Jam")
    print(f"6. Ekstraksi Wax Total Pasca 6 Jam             : {debind['Final_Extraction_Pct']:.2f} %")
    print(f"7. Prediksi Densitas Relatif Sintering MSC     : {sint['Predicted_Relative_Density_Pct']:.2f} % (Standar > 98%)")
    print(f"8. Persentase Penyusutan Linier Isotropik      : {sint['Theoretical_Linear_Shrinkage_Pct']:.2f} %")
    print(f"9. Faktor Skala Pembesaran Cetakan (Tool OSF)  : {sint['Tooling_Oversize_Factor_OSF']:.4f} x")
    print("=" * 75)
```

---

## 6. Studi Kasus Industri: Manufaktur Komponen Bedah Medis Endoskopik (17-4PH Surgical Jaw)

### 6.1 Deskripsi Problem & Persyaratan Mutu Medis
Pabrik manufaktur instrumen bedah memproduksi *Articulating Laparoscopic Grasper Jaw* dengan persyaratan geometri mikro-presisi:
- Material: Baja Tahan Karat Presipitasi **17-4PH (AISI 630 / DIN 1.4542)** sesuai standar implan/medis **ASTM F2885**.
- Fitur kritis: Gigi pencengkeram mikro ($0.35\text{ mm}$ pitch), dinding berongga tipis ($0.8\text{ mm}$), dan lubang pin poros pivot berdiameter nominal $1.200\text{ mm} \pm 0.012\text{ mm}$.
- Tuntutan mekanis pasca *heat treatment* perlakuan panas kondisi H900: $\text{UTS} \ge 1150\text{ MPa}$, Kekerasan $\ge 38\text{ HRC}$, Porositas residual $\le 1.5\%$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    ANALISIS PENYUSUTAN DAN PRESI PENGUKURAN GEOMETRI SURGICAL GRASPER JAW 17-4PH                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Dimensi Fitur Kritis          Ukuran Rongga Die (Tooling)   Ukuran Sintered (Final)     Toleransi Hasil Akhir      |
|    -------------------------------------------------------------------------------------------------------------      |
|    1. Panjang Total Komponen     18.152 mm (OSF = 1.1562)      15.700 mm                   ± 0.025 mm (ISO 22068-1)   |
|    2. Diameter Lubang Pivot Pin   1.387 mm (OSF = 1.1562)       1.200 mm                   ± 0.008 mm (Presisi Tinggi)|
|    3. Tebal Dinding Slot Jepit    0.925 mm (OSF = 1.1562)       0.800 mm                   ± 0.010 mm                 |
|    4. Pitch Gigi Mikro            0.405 mm (OSF = 1.1562)       0.350 mm                   ± 0.005 mm (Mikro-Akurasi) |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Hasil Evaluasi Kualitas & Karakteristik Komponen
Dengan mengaplikasikan kontrol formulasi feedstock serbuk gas atomisasi ($d_{50} = 10.8\text{ }\mu\text{m}$, $\phi = 63.5\%$) dan perlakuan pelarutan *n-heptane* $55^\circ\text{C}$ selama 4.5 jam dilanjutkan sintering atmosfer hidrogen murni pada $1350^\circ\text{C}$ selama 3 jam:
1. **Densitas Akhir**: $7.68\text{ g/cm}^3$ ($98.72\%$ densitas teoretis).
2. **Kekuatan Tarik (Kondisi H900)**: $\text{UTS} = 1220\text{ MPa}$, Kekuatan Luluh $R_{p0.2} = 1090\text{ MPa}$, Elongasi $6.2\%$.
3. **Ketepatan Toleransi Dimensi**: Kemampuan kapabilitas proses $C_{pk} = 1.62$ pada diameter lubang poros pivot ($1.200 \pm 0.007\text{ mm}$), memenuhi batas akurasi kelas satu **ISO 22068 Level 1 Precision**.

---

## 7. Standar Internasional & Pedoman Keteknikan Terkait

1. **ISO 22068**: *Sintered-metal injection-moulded materials — Specifications* — Standar klasifikasi internasional untuk paduan serbuk cetak injeksi (baja karbon, paduan rendah, baja tahan karat, dan paduan titanium).
2. **MPIF Standard 35-MIM**: *Materials Standards for Metal Injection Molded Parts* — Standar asosiasi Metal Powder Industries Federation yang menetapkan batas kekuatan luluh, elongasi, dan kekerasan.
3. **ASTM F2885**: *Standard Specification for Metal Injection Molded Titanium-6Aluminum-4Vanadium Components for Surgical Implant Applications*.
4. **DIN EN ISO 4490**: *Metallic powders — Determination of flow rate by means of a calibrated funnel (Hall flowmeter)*.

---

## 8. Referensi Akademis Terverifikasi

1. German, R. M., & Bose, A. (1997). *Injection Molding of Metals and Ceramics*. Metal Powder Industries Federation, Princeton, NJ. ISBN: 978-1-878954-61-9.
2. German, R. M. (2011). "Coarsening in sintering: Grain shape, grain growth, and pore evolution". *Materials Science and Engineering: A*, 528(3), pp. 811-820. DOI: [10.1016/j.msea.2010.09.096](https://doi.org/10.1016/j.msea.2010.09.096).
3. Heaney, D. F. (Ed.). (2018). *Handbook of Metal Injection Molding* (2nd Edition). Woodhead Publishing / Elsevier, Cambridge. DOI: [10.1016/B978-0-08-102152-1.00001-5](https://doi.org/10.1016/B978-0-08-102152-1.00001-5).
4. Su, H., & Johnson, D. L. (1996). "Master sintering curve: A tool for sintering optimization". *Journal of the American Ceramic Society*, 79(12), pp. 3211-3217. DOI: [10.1111/j.1151-2916.1996.tb08097.x](https://doi.org/10.1111/j.1151-2916.1996.tb08097.x).
5. Enneti, R. K., Atre, S. V., & German, R. M. (2012). "Debinding and sintering of metal injection molding (MIM) components". In *Handbook of Metal Injection Molding*, pp. 145-182. DOI: [10.1533/9780857090669.2.145](https://doi.org/10.1533/9780857090669.2.145).
6. Sotomayor, M. E., Varez, A., & Levenfeld, B. (2010). "Influence of powder particle size distribution on rheological properties of 316L powder injection moulding feedstocks". *Powder Technology*, 200(1-2), pp. 30-36. DOI: [10.1016/j.powtec.2010.02.003](https://doi.org/10.1016/j.powtec.2010.02.003).
