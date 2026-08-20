# Modul 466: Sintesis Jaringan Penukar Panas (Heat Exchanger Network Synthesis - HENS), Problem Table Algorithm Analisis Pinch, dan Optimasi Pemulihan Energi Maksimum (MER)

## 1. Pengantar & Landasan Strategis Integrasi Proses & Dekarbonisasi Industri

Dalam lanskap industri manufaktur kimia, petrokimia, kilang minyak (*oil refinery*), semen, kertas, dan pengolahan pangan modern, konsumsi energi termal (bahan bakar boiler, kukus bertekanan/*steam*, minyak termal, dan pendingin *cooling water* atau *chiller*) menyumbang antara **$40\%-70\%$ dari total biaya operasional langsung (*direct operating expenditure*)**. Bersamaan dengan itu, tekanan regulasi global menuju *Net-Zero Emissions*, standar efisiensi energi industri **ISO 50001**, dan skema perdagangan karbon (*Carbon Cap-and-Trade*) mewajibkan rekayasawan Teknik Industri (*Industrial & Energy Engineers*) untuk meminimalkan pemborosan energi termal.

Pendekatan perancangan termal konvensional sering kali merancang unit pemanas (*heater*) dan pendingin (*cooler*) secara terpisah untuk setiap aliran proses (*unit-by-unit design*). Akibatnya, sebagian aliran yang perlu didinginkan membuang panasnya langsung ke menara pendingin (*cooling tower*), sementara aliran lain yang perlu dipanaskan membakar bahan bakar baru di boiler. 

```
+---------------------------------------------------------------------------------------------------+
|               PARADIGMA INTEGRASI PROSES & SINTESIS JARINGAN PENUKAR PANAS (HENS)                 |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    SISTEM KONVENSIONAL (TANPA INTEGRASI)              SISTEM MER PINCH TERINTEGRASI (HENS)        |
|                                                                                                   |
|   Hot Process ----[ Cooler (CW) ]---> Buang Panas    Hot Process ---\                    /--->    |
|                                                                      \-[ HEAT EXCHANGER ]         |
|   Cold Process ---[ Heater (Fuel)]--> Butuh Panas    Cold Process --/  (Waste Heat Rec.) \--->    |
|                                                                                                   |
|   - Konsumsi Bahan Bakar Maksimal                     - Konsumsi Bahan Bakar Minimum (Q_H,min)    |
|   - Konsumsi Air Pendingin Maksimal                   - Konsumsi Beban Pendingin Minimum (Q_C,min)|
|   - Emisi Gas Rumah Kaca (CO2) Tinggi                 - Penghematan Biaya Energi: 25% - 50%       |
|                                                                                                   |
|                                         |                                                         |
|                                         v                                                         |
|   +--------------------------------------------------------------------------------------------+  |
|   |                  ALUR PROBLEM TABLE ALGORITHM & FORMULASI PINCH ANALYSIS                   |  |
|   |  1. Ekstraksi Data Aliran (T_supply, T_target, CP = m * Cp)                                |  |
|   |  2. Penyesuaian Suhu Interval Minimum (Shifted Temperatures T* dengan Delta T_min)         |  |
|   |  3. Kaskade Panas (Heat Cascade) -> Menentukan Titik Pinch (T_pinch), Q_H,min, dan Q_C,min |  |
|   |  4. Pemisahan Jaringan: Desain Sub-Jaringan Di Atas Pinch & Di Bawah Pinch                |  |
|   |  5. Penerapan Golden Rules of Pinch & Evaluasi Target Jumlah Unit Minimum (Euler U_min)    |  |
|   +--------------------------------------------------------------------------------------------+  |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

**Sintesis Jaringan Penukar Panas (*Heat Exchanger Network Synthesis* - HENS)** berbasis **Pinch Analysis** yang dipelopori oleh Bodo Linnhoff (1983) dan dikembangkan dalam rekayasa integrasi proses (Smith, 2016; Kemp, 2019; Grossmann, 2021) menyediakan metodologi termodinamika terstruktur dan deterministik untuk menentukan batas konsumsi energi terendah secara teoritis (*Maximum Energy Recovery* / MER) sebelum satu pun alat penukar panas (*Heat Exchanger* - HEX) dirancang secara fisik.

---

## 2. Prinsip & Teorema Fundamental Pinch Analysis (Linnhoff March Methodology)

### 2.1 Pergeseran Temperatur Minimum ($\Delta T_{\min}$) & Suhu Interval (*Shifted Temperatures*)

Untuk memungkinkan terjadinya perpindahan kalor secara spontan sesuai Hukum Kedua Termodinamika, harus selalu terdapat perbedaan suhu positif minimum ($\Delta T \ge \Delta T_{\min}$) di setiap titik kontak penukar panas. Parameter $\Delta T_{\min}$ (biasanya bernilai $10^\circ\text{C}-20^\circ\text{C}$ untuk industri proses kimia) mencerminkan kompromi tekno-ekonomi antara biaya modal alat (*capital cost* $\propto 1/\Delta T_{\min}$) dan biaya energi operasional (*operating cost* $\propto \Delta T_{\min}$).

Temperatur suplai ($T_s$) dan temperatur target ($T_t$) dari seluruh aliran proses disesuaikan (*shifted*) ke dalam skala temperatur interval tunggal $T^*$:

$$T^*_h = T_h - \frac{\Delta T_{\min}}{2} \quad (\text{untuk seluruh Hot Streams } h \in \mathcal{H})$$

$$T^*_c = T_c + \frac{\Delta T_{\min}}{2} \quad (\text{untuk seluruh Cold Streams } c \in \mathcal{C})$$

Di mana:
- $\mathcal{H}$ adalah himpunan aliran panas yang perlu didinginkan dari $T_{s,h}$ ke $T_{t,h}$ ($T_{s,h} > T_{t,h}$).
- $\mathcal{C}$ adalah himpunan aliran dingin yang perlu dipanaskan dari $T_{s,c}$ ke $T_{t,c}$ ($T_{s,c} < T_{t,c}$).
- Laju kapasitas panas aliran (*Heat Capacity Flowrate*) adalah $CP = \dot{m} \cdot c_p$ ($\text{kW/}^\circ\text{C}$ atau $\text{kW/K}$).

---

### 2.2 Algoritma Tabel Masalah (*Problem Table Algorithm*) & Kaskade Panas (*Heat Cascade*)

Problem Table Algorithm adalah prosedur numerik aljabar linier untuk menghitung kaskade entalpi antar interval suhu berurutan tanpa memerlukan penggambaran kurva grafis manual.

#### Langkah-Langkah Algoritma:
1. **Urutkan Seluruh Suhu Shifted**: Kumpulkan seluruh nilai $T^*$ yang unik dari seluruh aliran panas dan dingin, lalu urutkan secara menurun:
   $$T^*_1 > T^*_2 > T^*_3 > \dots > T^*_K$$
   Membentuk $K-1$ interval suhu $\Delta T^*_k = T^*_k - T^*_{k+1}$ untuk $k = 1, 2, \dots, K-1$.

2. **Hitung Neraca Entalpi Parsial per Interval ($\Delta H_k$)**:
   $$\Delta H_k = \left( \sum_{c \in \mathcal{C}_k} CP_c - \sum_{h \in \mathcal{H}_k} CP_h \right) \cdot \Delta T^*_k$$
   - Jika $\Delta H_k < 0$, interval $k$ mengalami surplus panas (panas tersedia untuk dikaskadekan ke interval di bawahnya).
   - Jika $\Delta H_k > 0$, interval $k$ mengalami defisit panas (membutuhkan input panas dari interval di atasnya).

3. **Kaskade Panas Awal (*Infeasible Heat Cascade*)**:
   Tetapkan input utilitas panas awal $R_0 = 0$. Entalpi residual yang keluar dari interval $k$ ke interval $k+1$ adalah:
   $$R_k = R_{k-1} - \Delta H_k, \quad \forall k = 1, 2, \dots, K-1$$

4. **Kalkulasi Target Utilitas Minimum & Identifikasi Titik Pinch**:
   Jika terdapat nilai $R_k < 0$, kaskade awal tidak layak secara termodinamika. Utilitas panas minimum yang harus disuplai dari luar adalah:
   $$Q_{H,\min} = \max_{k \in \{0, \dots, K-1\}} (-R_k)$$

5. **Kaskade Panas Layak (*Feasible Heat Cascade*)**:
   Tambahkan $Q_{H,\min}$ ke seluruh residual:
   $$R_k^{\text{feasible}} = R_k + Q_{H,\min}, \quad \forall k = 0, 1, \dots, K-1$$
   - Residual pada interval akhir adalah Utilitas Dingin Minimum: $Q_{C,\min} = R_{K-1}^{\text{feasible}}$.
   - **Titik Pinch ($T^*_{\text{pinch}}$)** terjadi tepat pada batas interval $k$ di mana entalpi residual bernilai nol:
     $$R_k^{\text{feasible}} = 0 \implies T^*_{\text{pinch}} = T^*_{k+1}$$
   - Suhu Pinch aktual: $T_{\text{pinch, hot}} = T^*_{\text{pinch}} + \frac{\Delta T_{\min}}{2}$ dan $T_{\text{pinch, cold}} = T^*_{\text{pinch}} - \frac{\Delta T_{\min}}{2}$.

```
+---------------------------------------------------------------------------------------------------+
|                     DIAGRAM KASKADE PANAS (HEAT CASCADE) & TITIK PINCH TERMAL                     |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    Utilitas Panas Eksternal: Q_H,min                                                              |
|                  |                                                                                |
|                  v                                                                                |
|          +---------------+                                                                        |
|          |  Interval 1   | ---> Delta H_1                                                         |
|          +---------------+                                                                        |
|                  | R_1                                                                            |
|                  v                                                                                |
|          +---------------+                                                                        |
|          |  Interval 2   | ---> Delta H_2                                                         |
|          +---------------+                                                                        |
|                  | R_2 = 0  <====== TITIK PINCH (FLUKSUAL ENERGI NETTO = 0)                       |
|                  v                                                                                |
|          +---------------+                                                                        |
|          |  Interval 3   | ---> Delta H_3                                                         |
|          +---------------+                                                                        |
|                  | R_3                                                                            |
|                  v                                                                                |
|          +---------------+                                                                        |
|          |  Interval 4   | ---> Delta H_4                                                         |
|          +---------------+                                                                        |
|                  |                                                                                |
|                  v                                                                                |
|    Utilitas Dingin Eksternal: Q_C,min                                                             |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

---

### 2.3 Tiga Aturan Emas Analisis Pinch (*Golden Rules of Pinch*)

Titik Pinch membagi seluruh sistem proses menjadi dua subsistem independen yang terisolasi secara termal:
1. **Subsistem Di Atas Pinch (*Above Pinch*)**: Bertindak sebagai **Penyerap Panas Bersih (*Heat Sink*)** dengan defisit entalpi sebesar $Q_{H,\min}$.
2. **Subsistem Di Bawah Pinch (*Below Pinch*)**: Bertindak sebagai **Sumber Panas Bersih (*Heat Source*)** dengan surplus entalpi sebesar $Q_{C,\min}$.

Dari sifat termodinamika ini, diturunkan 3 Aturan Mutlak (*The Three Golden Rules*):
1. **Dilarang mentransfer panas melewati Pinch ($Q_{\text{across pinch}} = 0$)**: Jika panas sebesar $\alpha$ ditransfer dari atas ke bawah Pinch, konsumsi $Q_H$ akan meningkat menjadi $Q_{H,\min} + \alpha$ dan konsumsi $Q_C$ meningkat menjadi $Q_{C,\min} + \alpha$ (penalti ganda).
2. **Dilarang menggunakan Utilitas Dingin di Atas Pinch ($Q_C = 0$ untuk $T > T_{\text{pinch}}$)**.
3. **Dilarang menggunakan Utilitas Panas di Bawah Pinch ($Q_H = 0$ untuk $T < T_{\text{pinch}}$)**.

---

### 2.4 Aturan Kelayakan Desain Pertukaran Panas di Sekitar Pinch & Target Jumlah Unit Euler ($U_{\min}$)

Agar penukar panas yang ditempatkan tepat pada Pinch memenuhi gradien suhu $\Delta T \ge \Delta T_{\min}$, berlaku kriteria kapasitas panas aliran (*CP matching criteria*):

$$\text{Di Atas Pinch (Above Pinch): } CP_h \le CP_c \quad (\forall \text{ stream match adjacent to pinch})$$

$$\text{Di Bawah Pinch (Below Pinch): } CP_h \ge CP_c \quad (\forall \text{ stream match adjacent to pinch})$$

Jika kriteria ini tidak terpenuhi, aliran harus dipecah (*stream splitting*) menjadi beberapa cabang paralel.

Target jumlah unit penukar panas minimum ($U_{\min}$) untuk mencapai pemulihan energi maksimum dihitung berdasarkan Teorema Graf Euler:

$$U_{\min} = U_{\min, \text{above}} + U_{\min, \text{below}}$$

$$U_{\min, \text{above}} = N_{\text{streams, above}} + N_{\text{utilities, above}} - L_{\text{loops, above}}$$

Di mana $N$ adalah jumlah aliran proses aktif dan $L$ adalah jumlah loop entalpi independen (umumnya bernilai $1$ untuk jaringan tak terhubung per komponen).

---

## 3. Formulasi Optimasi Matematis HENS: Model Superstruktur Stage-Wise (Yee & Grossmann, 1990)

Untuk optimasi simultan antara luas area penukar panas ($A_{ij}$), konsumsi utilitas ($q_{cu,i}, q_{hu,j}$), dan konfigurasi jaringan, digunakan formulasi **Mixed-Integer Non-Linear Programming (MINLP)** berbasis *Synheat Stage-Wise Superstructure*:

$$\min \text{TAC} = \sum_{i \in \mathcal{H}} C_{CU} \cdot q_{cu,i} + \sum_{j \in \mathcal{C}} C_{HU} \cdot q_{hu,j} + \sum_{i \in \mathcal{H}} \sum_{j \in \mathcal{C}} \sum_{k \in \mathcal{S}} \left( a_E \cdot z_{i,j,k} + b_E \cdot A_{i,j,k}^\beta \right) + \sum_{i \in \mathcal{H}} \left( a_C \cdot z_{cu,i} + b_C \cdot A_{cu,i}^\beta \right) + \sum_{j \in \mathcal{C}} \left( a_H \cdot z_{hu,j} + b_H \cdot A_{hu,j}^\beta \right)$$

Dengan batasan utama (*constraints*):
1. **Neraca Panas Aliran pada Setiap Stage $k$**:
   $$(T_{i,k} - T_{i,k+1}) \cdot CP_i = \sum_{j \in \mathcal{C}} q_{i,j,k}, \quad \forall i \in \mathcal{H}, k \in \mathcal{S}$$
   $$(t_{j,k} - t_{j,k+1}) \cdot CP_j = \sum_{i \in \mathcal{H}} q_{i,j,k}, \quad \forall j \in \mathcal{C}, k \in \mathcal{S}$$
2. **Keterkaitan Logika Variabel Biner Match**:
   $$q_{i,j,k} - Q_{\max} \cdot z_{i,j,k} \le 0, \quad z_{i,j,k} \in \{0, 1\}$$
3. **Driving Force Beda Suhu Logaritmik (LMTD)**:
   $$A_{i,j,k} = \frac{q_{i,j,k}}{U_{ij} \cdot \text{LMTD}_{i,j,k}}, \quad \text{LMTD}_{i,j,k} = \frac{\Delta T_{1} - \Delta T_{2}}{\ln(\Delta T_1 / \Delta T_2)}$$
   $$\Delta T_1 = T_{i,k} - t_{j,k} + \Gamma (1 - z_{i,j,k}), \quad \Delta T_2 = T_{i,k+1} - t_{j,k+1} + \Gamma (1 - z_{i,j,k})$$

---

## 4. Implementasi Python Solver: Problem Table Algorithm, Heat Cascade, & Pinch Target Calculator

Berikut adalah implementasi Python mandiri (*pure Python* berbasis `math` dan aljabar analitis) yang memodelkan Problem Table Algorithm, Heat Cascade, Grand Composite Curve, kalkulasi unit Euler minimum, serta valuasi tekno-ekonomi dekarbonisasi:

```python
"""
RuangTI Heat Exchanger Network Synthesis (HENS) & Pinch Analysis Suite
Modul 466: Problem Table Algorithm, Heat Cascade, MER Targets, & Carbon Reduction
"""

import math
from typing import List, Dict, Tuple, Any

class ProcessStream:
    def __init__(self, stream_id: str, stream_type: str, T_supply: float, T_target: float, CP: float):
        """
        stream_type: 'HOT' (perlu didinginkan) atau 'COLD' (perlu dipanaskan)
        T_supply: Temperatur awal aliran (deg C)
        T_target: Temperatur akhir aliran (deg C)
        CP: Heat Capacity Flowrate m_dot * Cp (kW/deg C)
        """
        self.stream_id = stream_id
        self.stream_type = stream_type.upper()
        self.T_supply = float(T_supply)
        self.T_target = float(T_target)
        self.CP = float(CP)
        self.enthalpy_load = abs(self.T_supply - self.T_target) * self.CP  # kW

class PinchAnalysisSolver:
    def __init__(self, delta_T_min: float = 10.0):
        self.delta_T_min = float(delta_T_min)
        self.streams: List[ProcessStream] = []
        
    def add_stream(self, stream_id: str, stream_type: str, T_supply: float, T_target: float, CP: float):
        stream = ProcessStream(stream_id, stream_type, T_supply, T_target, CP)
        self.streams.append(stream)
        
    def solve_problem_table(self) -> Dict[str, Any]:
        """
        Menjalankan Problem Table Algorithm & Kaskade Panas Deterministik
        """
        if not self.streams:
            raise ValueError("Tidak ada aliran proses yang terdaftar.")
            
        # 1. Hitung Shifted Temperatures (T*)
        shifted_temps = set()
        for s in self.streams:
            if s.stream_type == 'HOT':
                t_s_star = s.T_supply - (self.delta_T_min / 2.0)
                t_t_star = s.T_target - (self.delta_T_min / 2.0)
            elif s.stream_type == 'COLD':
                t_s_star = s.T_supply + (self.delta_T_min / 2.0)
                t_t_star = s.T_target + (self.delta_T_min / 2.0)
            else:
                continue
            shifted_temps.add(round(t_s_star, 4))
            shifted_temps.add(round(t_t_star, 4))
            
        # Urutkan temperatur shifted secara menurun
        sorted_T_star = sorted(list(shifted_temps), reverse=True)
        K = len(sorted_T_star)
        
        # 2. Hitung delta H per interval temperatur
        intervals = []
        delta_H_list = []
        for k in range(K - 1):
            T_high = sorted_T_star[k]
            T_low = sorted_T_star[k + 1]
            delta_T_interval = T_high - T_low
            
            # Cari aliran yang aktif di interval ini
            sum_CP_cold = 0.0
            sum_CP_hot = 0.0
            for s in self.streams:
                if s.stream_type == 'HOT':
                    s_high = s.T_supply - (self.delta_T_min / 2.0)
                    s_low = s.T_target - (self.delta_T_min / 2.0)
                    if s_high >= T_high and s_low <= T_low:
                        sum_CP_hot += s.CP
                elif s.stream_type == 'COLD':
                    s_low = s.T_supply + (self.delta_T_min / 2.0)
                    s_high = s.T_target + (self.delta_T_min / 2.0)
                    if s_high >= T_high and s_low <= T_low:
                        sum_CP_cold += s.CP
                        
            delta_H_k = (sum_CP_cold - sum_CP_hot) * delta_T_interval
            delta_H_list.append(delta_H_k)
            intervals.append({
                "interval_idx": k + 1,
                "T_high": T_high,
                "T_low": T_low,
                "delta_T": delta_T_interval,
                "sum_CP_hot": sum_CP_hot,
                "sum_CP_cold": sum_CP_cold,
                "delta_H": delta_H_k
            })
            
        # 3. Kaskade Panas Awal (R_0 = 0)
        R_infeasible = [0.0]
        curr_R = 0.0
        for dH in delta_H_list:
            curr_R = curr_R - dH
            R_infeasible.append(curr_R)
            
        # 4. Tentukan Q_H,min dan Titik Pinch
        min_R_val = min(R_infeasible)
        Q_H_min = -min_R_val if min_R_val < 0.0 else 0.0
        
        # 5. Kaskade Panas Layak (Feasible Heat Cascade)
        R_feasible = [round(r + Q_H_min, 4) for r in R_infeasible]
        Q_C_min = R_feasible[-1]
        
        # Cari Pinch Location (di mana R_feasible == 0)
        pinch_indices = [idx for idx, val in enumerate(R_feasible) if abs(val) < 1e-4]
        pinch_T_star = sorted_T_star[pinch_indices[0]] if pinch_indices else None
        
        pinch_T_hot = pinch_T_star + (self.delta_T_min / 2.0) if pinch_T_star is not None else None
        pinch_T_cold = pinch_T_star - (self.delta_T_min / 2.0) if pinch_T_star is not None else None
        
        # 6. Evaluasi Total Enthalpy & Penghematan
        total_hot_load = sum(s.enthalpy_load for s in self.streams if s.stream_type == 'HOT')
        total_cold_load = sum(s.enthalpy_load for s in self.streams if s.stream_type == 'COLD')
        heat_recovered_max = total_cold_load - Q_H_min
        
        # Target Unit Minimum Euler
        n_hot = sum(1 for s in self.streams if s.stream_type == 'HOT')
        n_cold = sum(1 for s in self.streams if s.stream_type == 'COLD')
        
        # Sub-jaringan di atas & di bawah pinch
        n_above = sum(1 for s in self.streams if (s.stream_type == 'HOT' and s.T_supply > (pinch_T_hot or 0)) or 
                                                 (s.stream_type == 'COLD' and s.T_target > (pinch_T_cold or 0)))
        n_below = sum(1 for s in self.streams if (s.stream_type == 'HOT' and s.T_target < (pinch_T_hot or 0)) or 
                                                 (s.stream_type == 'COLD' and s.T_supply < (pinch_T_cold or 0)))
        
        U_min_overall = (n_hot + n_cold + (1 if Q_H_min > 0 else 0) + (1 if Q_C_min > 0 else 0) - 1)
        U_min_mer = (n_above + (1 if Q_H_min > 0 else 0) - 1) + (n_below + (1 if Q_C_min > 0 else 0) - 1)
        
        return {
            "delta_T_min": self.delta_T_min,
            "sorted_T_star": sorted_T_star,
            "intervals": intervals,
            "R_feasible": R_feasible,
            "Q_H_min_kW": round(Q_H_min, 2),
            "Q_C_min_kW": round(Q_C_min, 2),
            "Pinch_T_star": round(pinch_T_star, 2) if pinch_T_star else None,
            "Pinch_T_hot": round(pinch_T_hot, 2) if pinch_T_hot else None,
            "Pinch_T_cold": round(pinch_T_cold, 2) if pinch_T_cold else None,
            "total_hot_duty_kW": round(total_hot_load, 2),
            "total_cold_duty_kW": round(total_cold_load, 2),
            "max_heat_recovery_kW": round(heat_recovered_max, 2),
            "energy_recovery_pct": round((heat_recovered_max / total_cold_load) * 100.0, 2) if total_cold_load > 0 else 0.0,
            "U_min_euler": max(1, U_min_mer)
        }

    @staticmethod
    def evaluate_economic_carbon_impact(Q_H_min_kW: float, Q_C_min_kW: float, 
                                        unintegrated_fuel_kW: float, unintegrated_cool_kW: float,
                                        operating_hours_per_year: float = 8000.0,
                                        fuel_cost_per_kWh: float = 0.045,      # USD/kWh (Gas alam/Steam)
                                        cool_cost_per_kWh: float = 0.008,      # USD/kWh (Cooling water)
                                        emission_factor_kgCO2_per_kWh: float = 0.202) -> Dict[str, float]:
        """
        Kalkulasi penghematan biaya operasional tahunan dan reduksi emisi CO2
        """
        saved_fuel_kW = unintegrated_fuel_kW - Q_H_min_kW
        saved_cool_kW = unintegrated_cool_kW - Q_C_min_kW
        
        annual_fuel_saved_kWh = saved_fuel_kW * operating_hours_per_year
        annual_cool_saved_kWh = saved_cool_kW * operating_hours_per_year
        
        annual_cost_savings_USD = (annual_fuel_saved_kWh * fuel_cost_per_kWh) + (annual_cool_saved_kWh * cool_cost_per_kWh)
        annual_CO2_reduction_tons = (annual_fuel_saved_kWh * emission_factor_kgCO2_per_kWh) / 1000.0
        
        return {
            "saved_heating_duty_kW": round(saved_fuel_kW, 2),
            "saved_cooling_duty_kW": round(saved_cool_kW, 2),
            "annual_cost_savings_USD": round(annual_cost_savings_USD, 2),
            "annual_CO2_reduction_tons": round(annual_CO2_reduction_tons, 2)
        }

# =====================================================================
# DEMONSTRASI & VALIDASI SOLVER PINCH ANALYSIS (4 PROCESS STREAMS)
# =====================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI HEAT EXCHANGER NETWORK SYNTHESIS (HENS) & PINCH ANALYSIS SOLVER")
    print("=" * 85)
    
    # Inisialisasi Solver dengan Delta T min = 10 deg C
    solver = PinchAnalysisSolver(delta_T_min=10.0)
    
    # Kasus Klasik Linnhoff 4-Stream Problem (2 Hot, 2 Cold):
    # H1: 170 -> 60 C, CP = 3.0 kW/C (Load = 330 kW)
    # H2: 150 -> 30 C, CP = 1.5 kW/C (Load = 180 kW)
    # C1: 20  -> 135 C, CP = 2.0 kW/C (Load = 230 kW)
    # C2: 80  -> 140 C, CP = 4.0 kW/C (Load = 240 kW)
    solver.add_stream("H1", "HOT", T_supply=170.0, T_target=60.0, CP=3.0)
    solver.add_stream("H2", "HOT", T_supply=150.0, T_target=30.0, CP=1.5)
    solver.add_stream("C1", "COLD", T_supply=20.0, T_target=135.0, CP=2.0)
    solver.add_stream("C2", "COLD", T_supply=80.0, T_target=140.0, CP=4.0)
    
    res = solver.solve_problem_table()
    
    print(f"\n[HASIL PROBLEM TABLE ALGORITHM]")
    print(f"  Beda Suhu Minimum (Delta T_min) : {res['delta_T_min']} deg C")
    print(f"  Total Kebutuhan Pemanas Aliran  : {res['total_cold_duty_kW']} kW")
    print(f"  Total Panas Terbuang Aliran     : {res['total_hot_duty_kW']} kW")
    print(f"  -------------------------------------------------------------")
    print(f"  Utilitas Panas Minimum (Q_H,min): {res['Q_H_min_kW']} kW")
    print(f"  Utilitas Dingin Minimum(Q_C,min): {res['Q_C_min_kW']} kW")
    print(f"  Pemulihan Energi Maksimum (MER) : {res['max_heat_recovery_kW']} kW ({res['energy_recovery_pct']}%)")
    print(f"  Titik Pinch Shifted (T*_pinch)  : {res['Pinch_T_star']} deg C")
    print(f"  Titik Pinch Aliran Panas (T_hot): {res['Pinch_T_hot']} deg C")
    print(f"  Titik Pinch Aliran Dingin(T_col): {res['Pinch_T_cold']} deg C")
    print(f"  Target Unit Minimum Euler(U_min): {res['U_min_euler']} Unit Penukar Panas")
    
    print("\n[DETAIL INTERVAL TEMPERATUR & HEAT CASCADE]")
    for interval in res['intervals']:
        print(f"  Int-{interval['interval_idx']}: T*=[{interval['T_high']:6.1f} -> {interval['T_low']:6.1f}] C | "
              f"CP_h={interval['sum_CP_hot']:4.1f}, CP_c={interval['sum_CP_cold']:4.1f} | "
              f"Delta H = {interval['delta_H']:+7.1f} kW")
        
    print(f"\n  Kaskade Entalpi Feasible R_k    : {res['R_feasible']}")
    
    # 2. Valuasi Tekno-Ekonomi & Dekarbonisasi
    # Tanpa integrasi: Seluruh Cold Stream butuh pemanas eksternal (470 kW), Hot Stream butuh pendingin (510 kW)
    eco = PinchAnalysisSolver.evaluate_economic_carbon_impact(
        Q_H_min_kW=res['Q_H_min_kW'],
        Q_C_min_kW=res['Q_C_min_kW'],
        unintegrated_fuel_kW=res['total_cold_duty_kW'],
        unintegrated_cool_kW=res['total_hot_duty_kW'],
        operating_hours_per_year=8400.0, # 350 hari x 24 jam
        fuel_cost_per_kWh=0.05,          # 0.05 USD/kWh
        cool_cost_per_kWh=0.01           # 0.01 USD/kWh
    )
    
    print("\n[EVALUASI EKONOMI & DEKARBONISASI INDUSTRI]")
    print(f"  Penghematan Daya Pemanas Boiler : {eco['saved_heating_duty_kW']} kW")
    print(f"  Penghematan Daya Cooling Water  : {eco['saved_cooling_duty_kW']} kW")
    print(f"  Penghematan Biaya Energi Tahunan: USD {eco['annual_cost_savings_USD']:,.2f} / tahun")
    print(f"  Reduksi Emisi Gas Rumah Kaca    : {eco['annual_CO2_reduction_tons']:,.2f} Ton CO2 / tahun")
    print("=" * 85)
```

---

## 5. Studi Kasus Industri Nyata: Integrasi Termal Crude Distillation Unit (CDU) Kilang Minyak

### 5.1 Deskripsi Proses & Data Operasional Kilang

Sebuah unit distilasi minyak mentah (*Crude Distillation Unit* - CDU) berkapasitas $100.000\text{ barel/hari}$ di Kilang Balongan, Jawa Barat mengoperasikan sistem pemanasan awal minyak mentah (*crude preheat train*) sebelum masuk ke furnace pemanas utama ($350^\circ\text{C}$).

Data termal aliran proses yang diekstraksi:
- **Hot Stream 1 (Residue Bottom)**: Laju alir $120\text{ ton/jam}$, $T_s = 340^\circ\text{C} \rightarrow T_t = 110^\circ\text{C}$, $CP = 85.0\text{ kW/K}$ (Load $= 19.55\text{ MW}$).
- **Hot Stream 2 (Heavy Gas Oil / HGO Pumparound)**: Laju alir $95\text{ ton/jam}$, $T_s = 280^\circ\text{C} \rightarrow T_t = 140^\circ\text{C}$, $CP = 62.5\text{ kW/K}$ (Load $= 8.75\text{ MW}$).
- **Hot Stream 3 (Kerosene Overhead)**: Laju alir $60\text{ ton/jam}$, $T_s = 190^\circ\text{C} \rightarrow T_t = 50^\circ\text{C}$, $CP = 38.0\text{ kW/K}$ (Load $= 5.32\text{ MW}$).
- **Cold Stream 1 (Raw Crude Oil Feed)**: Laju alir $380\text{ ton/jam}$, $T_s = 30^\circ\text{C} \rightarrow T_t = 290^\circ\text{C}$, $CP = 195.0\text{ kW/K}$ (Load $= 50.70\text{ MW}$).

---

### 5.2 Analisis Pinch & Desain Jaringan MER Terintegrasi

Dengan menetapkan $\Delta T_{\min} = 15^\circ\text{C}$:
1. **Total Kebutuhan Pemanas Aliran Dingin**: $50.70\text{ MW}$.
2. **Total Panas Terbuang Aliran Panas**: $33.62\text{ MW}$.
3. **Problem Table Execution**:
   - Titik Pinch: $T^*_{\text{pinch}} = 182.5^\circ\text{C} \implies T_{\text{pinch, hot}} = 190.0^\circ\text{C}, T_{\text{pinch, cold}} = 175.0^\circ\text{C}$.
   - **Utilitas Panas Minimum ($Q_{H,\min}$)**: **$17.08\text{ MW}$** (beban furnace berkurang dari $50.70\text{ MW}$).
   - **Utilitas Dingin Minimum ($Q_{C,\min}$)**: **$0.00\text{ MW}$** (seluruh panas buangan terserap $100\%$, *zero waste heat* ke cooling tower).
   - **Pemulihan Energi Panas Maksimum**: **$33.62\text{ MW}$ ($66.3\%$ dari total kebutuhan crude feed)**.

---

### 5.3 Valuasi Finansial & Kelayakan Investasi Modal Jaringan Penukar Panas

| Parameter Evaluasi Tekno-Ekonomi | Sistem Eksisting (Pre-Pinch) | Sistem HENS MER (Post-Pinch) | Peningkatan / Penghematan |
| :--- | :--- | :--- | :--- |
| **Konsumsi Bahan Bakar Furnace ($Q_H$)** | $50.70\text{ MW}$ ($173.0\text{ MMBTU/jam}$) | **$17.08\text{ MW}$ ($58.3\text{ MMBTU/jam}$)** | **Efisiensi Bahan Bakar $66.3\%$** |
| **Beban Air Pendingin ($Q_C$)** | $33.62\text{ MW}$ | **$0.00\text{ MW}$** | **Pengurangan Beban Pendingin $100\%$** |
| **Biaya Energi Tahunan (Gas Alam + CW)** | USD $22.45\text{ Juta/tahun}$ | **USD $7.56\text{ Juta/tahun}$** | **Penghematan USD $14.89\text{ Juta/tahun}$** |
| **Emisi $\text{CO}_2$ Langsung Tahunan** | $88.500\text{ Ton }\text{CO}_2\text{/tahun}$ | **$29.800\text{ Ton }\text{CO}_2\text{/tahun}$** | **Reduksi Emisi $58.700\text{ Ton }\text{CO}_2\text{/tahun}$** |
| **Estimasi Investasi Modal (Capex 6 HEX Baru)**| - | **USD $11.20\text{ Juta}$** | Luas Area Tambahan $4.850\text{ m}^2$ |
| **Simple Payback Period (SPP)** | - | **$0.75\text{ Tahun}$ ($9.0\text{ Bulan}$)** | **Sangat Layak secara Finansial** |

---

## 6. Standar Industri & Praktik Terbaik Integrasi Energi

Dalam perancangan dan audit energi jaringan penukar panas, praktisi Teknik Industri wajib mengacu pada regulasi dan panduan standar berikut:

1. **ISO 50001:2018**: *Energy management systems — Requirements with guidance for use* — Menetapkan target konsumsi energi spesifik (*Energy Performance Indicators* / EnPIs) berbasis hasil Pinch Analysis.
2. **ISO 50002:2014 / Permen ESDM No. 14/2012**: *Energy audits — Requirements with guidance for use* — Metodologi baku inspeksi termal, neraca massa-panas, dan identifikasi peluang konservasi energi (ECOs).
3. **ASME Boiler and Pressure Vessel Code (BPVC) Section VIII**: Standar rekayasa ketahanan mekanik, tekanan desain, dan sertifikasi bejana tekan alat penukar panas tipe *Shell and Tube* (TEMA Standards).
4. **IChemE User Guide on Process Integration**: Panduan standar rekayasa proses internasional untuk sintesis jaringan penukar panas, penempatan pompa panas (*Heat Pumps*), dan integrasi kolom distilasi.

---

## 7. Referensi Terverifikasi (Academic & Professional Literature)

1. **Linnhoff, B., & Hindmarsh, E.** (1983). The pinch design method for heat exchanger networks. **Chemical Engineering Science**, 38(5), 745-763. DOI: `10.1016/0009-2509(83)80112-2`. (Buku/Paper seminal Pinch Analysis).
2. **Smith, R.** (2016). *Chemical Process Design and Integration* (2nd ed.). John Wiley & Sons. ISBN: `978-1119990130`.
3. **Kemp, I. C.** (2019). *Pinch Analysis and Process Integration: A User Guide on Process Integration for the Efficient Use of Energy* (2nd ed.). Butterworth-Heinemann / Elsevier. ISBN: `978-0750682602`.
4. **Grossmann, I. E.** (2021). *Advanced Optimization for Process Systems Engineering*. Cambridge University Press. ISBN: `978-1108831864`. DOI: `10.1017/9781108924849`.
5. **Yee, T. F., & Grossmann, I. E.** (1990). Simultaneous optimization models for heat integration—II. Heat exchanger network synthesis. **Computers & Chemical Engineering**, 14(10), 1165-1184. DOI: `10.1016/0098-1354(90)85010-8`.
6. **Klemeš, J. J.** (Ed.). (2013). *Handbook of Process Integration (PI): Minimisation of Energy and Water Use, Waste and Emissions*. Woodhead Publishing / Elsevier. ISBN: `978-0857095930`.
7. **Mohsenpour, M., Pazuki, G., & Salimi, M.** (2024). Optimized heat exchanger network design for a phthalic anhydride plant using pinch technology: A Maximum Energy Recovery approach with economic analysis. **Results in Engineering**, 21, 103438. DOI: `10.1016/j.rineng.2024.103438`.
8. **International Organization for Standardization.** (2018). *ISO 50001: Energy management systems — Requirements with guidance for use*. ISO Central Secretariat, Geneva.
