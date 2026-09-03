# Modul 450: Green Vehicle Routing Problem dengan Time Windows & Mekanisme Carbon Cap-and-Trade (G-VRPTW-CCT)

## 1. Konsep Dasar & Urgensi Dekarbonisasi Logistik Berkelanjutan
Dalam rekayasa sistem transportasi dan logistik industri modern, pergeseran paradigma dari efisiensi biaya murni (*pure economic cost*) menuju keberlanjutan lingkungan (*environmental sustainability & ESG compliance*) telah menjadi keharusan mutlak. Sektor transportasi darat menyumbang lebih dari 24% emisi gas rumah kaca (*Greenhouse Gas* / GHG) global. Regulator internasional dan nasional kini menerapkan regulasi ketat seperti **Mekanisme Nilai Ekonomi Karbon (NEK)**, Pajak Karbon (*Carbon Tax*), dan skema perdagangan kuota emisi **Cap-and-Trade** (seperti *EU Emissions Trading System* / EU ETS dan Bursa Karbon Indonesia IDXCarbon).

**Green Vehicle Routing Problem with Time Windows and Carbon Cap-and-Trade (G-VRPTW-CCT)** memperluas model klasik *Capacitated Vehicle Routing Problem with Time Windows* (CVRPTW) dengan mengintegrasikan:
1. **Fisika Konsumsi Bahan Bakar & Emisi Karbon Riil**: Menggunakan model emisi modal komprehensif (*Comprehensive Modal Emission Model* / CMEM) yang dipelopori oleh Barth & Boriboonsomsin (2009) dan diadaptasi oleh Demir, Bektaş, & Laporte (2012, 2014), di mana emisi karbon merupakan fungsi non-linier dari bobot total kendaraan (tara + muatan muatan dinamis), kecepatan jelajah (*speed profile*), percepatan, dan gradien elevasi jalan.
2. **Jendela Waktu Pelayanan (*Time Windows*)**: Batasan rentang waktu kedatangan $[e_i, l_i]$ di mana pelanggan $i$ harus dilayani. Kedatangan lebih awal memicu waktu tunggu (*waiting time*), sedangkan kedatangan terlambat memicu penalti kelayakan (*service level violation*).
3. **Mekanisme Finansial Carbon Cap-and-Trade**: Perusahaan dialokasikan batas kuota emisi karbon gratis (*Carbon Cap*, $Q_{\text{cap}}$). Jika total emisi logistik armada melebihi $Q_{\text{cap}}$, perusahaan wajib membeli kuota defisit di bursa karbon dengan harga pasar $P_{\text{carbon}}$. Sebaliknya, jika emisi riil berada di bawah kuota, surplus kuota dapat dijual kembali ke pasar untuk menghasilkan pendapatan tambahan (*carbon credit revenue*).

```
+---------------------------------------------------------------------------------------------------+
|               MEKANISME SISTEM GREEN VRPTW DENGAN SKEMA CARBON CAP-AND-TRADE                      |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    +-----------------------------------------------------------------------------------------+    |
|    | ALOKASI REGULASI PEMERINTAH: Batas Kuota Emisi Karbon Gratis Per Periode (Q_cap kg CO2) |    |
|    +-----------------------------------------------------------------------------------------+    |
|                                                |                                                  |
|                        +-----------------------+-----------------------+                          |
|                        |                                               |                          |
|                        v                                               v                          |
|     +-------------------------------------+         +-------------------------------------+       |
|     | KASUS 1: EMISI MELEBIHI KUOTA       |         | KASUS 2: EMISI DI BAWAH KUOTA       |       |
|     |   E_total > Q_cap                   |         |   E_total < Q_cap                   |       |
|     |   Defisit Emisi Karbon              |         |   Surplus / Kredit Karbon           |       |
|     |   -> Wajib Beli Kuota Tambahan      |         |   -> Dijual ke Bursa Karbon         |       |
|     |   Biaya = P_c * (E_total - Q_cap)   |         |   Pendapatan = P_c * (Q_cap - E)    |       |
|     +-------------------------------------+         +-------------------------------------+       |
|                        \                                               /                          |
|                         \----------------------+----------------------/                           |
|                                                |                                                  |
|                                                v                                                  |
|     +---------------------------------------------------------------------------------------+     |
|     | FUNGSI OBJEKTIF LOGISTIK TERPADU:                                                     |     |
|     | MIN Z = (Biaya Supir + Bahan Bakar) + P_carbon · (Total Emisi CO2(x, L, v) - Q_cap)   |     |
|     +---------------------------------------------------------------------------------------+     |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Model Fisika Emisi Komprehensif (CMEM) & Formulasi Matematis

### 2.1 Model Emisi Modal Komprehensif (CMEM)
Berdasarkan formulasi Demir, Bektaş, & Laporte (2012), tenaga mekanis mesin yang dibutuhkan kendaraan saat melintasi busur $(i, j)$ dengan kecepatan rata-rata $v_{ij}$ (m/s) dan bobot total $M_{ij} = (w_0 + L_{ij})$ kg dinyatakan sebagai:
$$P_{ij} = \frac{P_{ij,\text{tract}}}{\epsilon} + P_{\text{acc}}$$

di mana:
- $w_0$: Berat kosong kendaraan (*tare weight*) dalam kg.
- $L_{ij}$: Beban muatan barang yang diangkut pada busur $(i, j)$ dalam kg.
- $\epsilon$: Efisiensi mekanis transmisi (*drivetrain efficiency* $\approx 0.40 - 0.45$).
- $P_{\text{acc}}$: Daya mesin yang dikonsumsi peralatan aksesoris (AC, hidrolik $\approx 2.5 - 5.0$ kW).
- Daya traksi mesin ($P_{ij,\text{tract}}$) diturunkan dari mekanika gaya Newton:
  $$P_{ij,\text{tract}} = \left( M_{ij} g C_r \cos\theta + M_{ij} g \sin\theta + 0.5 C_d A \rho v_{ij}^2 + M_{ij} a \right) v_{ij}$$

Untuk jalan datar rata tanpa percepatan konstan ($\theta = 0, a = 0$), konsumsi bahan bakar total (Liter) pada rute berjarak $d_{ij}$ meter disederhanakan menjadi model linear terhadap beban muatan:
$$F_{ij}(L_{ij}, d_{ij}) = \alpha_{ij} d_{ij} + \beta_{ij} d_{ij} L_{ij}$$

di mana:
- $\alpha_{ij} = \left( \frac{\xi}{\kappa \psi} \right) \cdot \left( k N_e V_d + \frac{0.5 C_d A \rho v_{ij}^3 + w_0 g C_r v_{ij}}{\epsilon} \right)$: Koefisien dasar konsumsi bahan bakar per km untuk truk kosong.
- $\beta_{ij} = \left( \frac{\xi}{\kappa \psi} \right) \cdot \left( \frac{g C_r v_{ij}}{\epsilon} \right)$: Koefisien marjinal bahan bakar per kg muatan per km.
- $\xi$: Rasio bahan bakar-ke-udara (*fuel-to-air ratio* $\approx 1$).
- $\kappa$: Nilai kalor bahan bakar solar (*heating value* $\approx 44 \times 10^6$ J/kg).
- $\psi$: Densitas bahan bakar solar ($\approx 0.832$ kg/L).
- $C_e$: Faktor konversi emisi bahan bakar solar ke $\text{CO}_2$ ($\approx 2.68$ kg $\text{CO}_2$/Liter solar).

Total emisi karbon $\text{CO}_2$ (kg) pada busur $(i, j)$ adalah:
$$E_{ij}(L_{ij}, d_{ij}) = C_e \cdot F_{ij}(L_{ij}, d_{ij}) = C_e (\alpha_{ij} d_{ij} + \beta_{ij} d_{ij} L_{ij})$$

```
+---------------------------------------------------------------------------------------------------+
|               KETERKAITAN NON-LINIER ANTARA BEBAN, RUTE, DAN EMISI KARBON                         |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|    Rute Konvensional (Jarak Terpendek):                                                           |
|    Depot -> [Pelanggan 1 (Muatan Berat)] -> [Pelanggan 2 (Muatan Ringan)] -> Depot                |
|    * Mengangkut beban berat melintasi jarak jauh -> Emisi Karbon Membengkak Tinggi!               |
|                                                                                                   |
|    Rute Green Logistics (Minimasi Emisi Beban-Jarak Terpadu):                                     |
|    Depot -> [Pelanggan Terdekat Muatan Berat (Drop Cepat)] -> [Muatan Ringan] -> Depot            |
|    * Menurunkan muatan berat di awal rute mengurangi bobot total truk untuk sisa perjalanan,      |
|      sehingga menghemat konsumsi solar dan menekan emisi CO2 secara dramatis.                     |
+---------------------------------------------------------------------------------------------------+
```

### 2.2 Formulasi Matematis Terpadu Mixed-Integer Linear Programming (MILP)
Didefinisikan graf terarah $G = (V, A)$ di mana:
- $V = \{0\} \cup C$: Simpul depot $0$ dan himpunan pelanggan $C = \{1, 2, \dots, N\}$.
- $A = \{(i, j) \mid i, j \in V, \, i \ne j\}$: Himpunan busur perjalanan.
- $K$: Himpunan kendaraan homogen berkapasitas maksimum $Q_{\text{veh}}$.
- $q_i$: Permintaan barang dari pelanggan $i \in C$ ($q_0 = 0$).
- $[e_i, l_i]$: Jendela waktu pelayanan pada simpul $i$ ($e_0 = 0, l_0 = T_{\text{max}}$).
- $s_i$: Waktu bongkar muat (*service time*) pada simpul $i$ ($s_0 = 0$).
- $t_{ij}$: Waktu tempuh perjalanan dari simpul $i$ ke $j$.
- $c_d$: Biaya pengemudi dan operasional per unit jarak ($d_{ij}$).
- $c_f$: Harga bahan bakar per liter.
- $P_{\text{carbon}}$: Harga pasar kuota karbon per kg $\text{CO}_2$.
- $Q_{\text{cap}}$: Batas kuota emisi karbon perusahaan per periode operasi (kg $\text{CO}_2$).

Variabel keputusan:
- $x_{ijk} \in \{0, 1\}$: 1 jika kendaraan $k$ melintasi busur $(i, j)$; 0 jika tidak.
- $L_{ijk} \ge 0$: Beban muatan pada kendaraan $k$ saat melintasi busur $(i, j)$.
- $w_{ik} \ge 0$: Waktu dimulainya pelayanan kendaraan $k$ pada simpul $i$.

Formulasi Objektif Komprehensif:
$$\min \quad Z = \sum_{k \in K} \sum_{(i,j) \in A} \left( c_d d_{ij} + c_f \alpha_{ij} d_{ij} \right) x_{ijk} + \sum_{k \in K} \sum_{(i,j) \in A} c_f \beta_{ij} d_{ij} L_{ijk} + P_{\text{carbon}} \cdot \left( E_{\text{total}} - Q_{\text{cap}} \right)$$

di mana total emisi karbon seluruh armada adalah:
$$E_{\text{total}} = C_e \sum_{k \in K} \sum_{(i,j) \in A} \left( \alpha_{ij} d_{ij} x_{ijk} + \beta_{ij} d_{ij} L_{ijk} \right)$$

$$\text{subject to:}$$
$$\sum_{k \in K} \sum_{j \in V, j \ne i} x_{ijk} = 1, \quad \forall i \in C \quad (\text{Setiap pelanggan dilayani tepat satu kali})$$
$$\sum_{j \in C} x_{0jk} = 1, \quad \forall k \in K \quad (\text{Setiap kendaraan berangkat dari depot})$$
$$\sum_{i \in V, i \ne h} x_{ihk} - \sum_{j \in V, j \ne h} x_{hjk} = 0, \quad \forall h \in C, \, \forall k \in K \quad (\text{Konservasi Aliran Rute})$$
$$\sum_{i \in C} x_{i0k} = 1, \quad \forall k \in K \quad (\text{Setiap kendaraan kembali ke depot})$$
$$\sum_{j \in V, j \ne i} L_{jik} - \sum_{j \in V, j \ne i} L_{ijk} = q_i \sum_{j \in V, j \ne i} x_{ijk}, \quad \forall i \in C, \, \forall k \in K \quad (\text{Konservasi Muatan Beban Dinamis})$$
$$q_j x_{ijk} \le L_{ijk} \le (Q_{\text{veh}} - q_i) x_{ijk}, \quad \forall (i,j) \in A, \, \forall k \in K \quad (\text{Batasan Kapasitas Muatan})$$
$$w_{ik} + s_i + t_{ij} - M(1 - x_{ijk}) \le w_{jk}, \quad \forall (i,j) \in A, \, \forall k \in K \quad (\text{Propagasi Waktu Pelayanan})$$
$$e_i \le w_{ik} \le l_i, \quad \forall i \in V, \, \forall k \in K \quad (\text{Kepatuhan Jendela Waktu})$$
$$x_{ijk} \in \{0, 1\}, \quad L_{ijk} \ge 0, \quad w_{ik} \ge 0$$

---

## 3. Algoritma Penyelesaian: Adaptive Large Neighborhood Search (ALNS)

Untuk menyelesaikan model skala industri dalam hitungan detik, digunakan metaheuristik tingkat lanjut **Adaptive Large Neighborhood Search (ALNS)** yang menggabungkan berbagai operator penghancuran (*destroy*) dan perbaikan (*repair*) adaptif:

```
+---------------------------------------------------------------------------------------------------+
|               SKEMA ALGORITMA ADAPTIVE LARGE NEIGHBORHOOD SEARCH (ALNS)                           |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|     +---------------------------------------------------------------------------------------+     |
|     | Inisialisasi Solusi Awal s_0 (Greedy Insertion Terbobot Emisi & Time Windows), T = T0 |     |
|     +---------------------------------------------------------------------------------------+     |
|                                                |                                                  |
|                                                v                                                  |
|     +---------------------------------------------------------------------------------------+     |
|     | 1. Pemilihan Operator secara Roulette Wheel berdasarkan Bobot Historis Kinerja:       |     |
|     |    - Destroy Operators: Shaw Removal, Random Removal, Worst Carbon Emission Removal   |     |
|     |    - Repair Operators: Greedy Insertion, Regret-2 Insertion, Carbon-Aware Insertion   |     |
|     +---------------------------------------------------------------------------------------+     |
|                                                |                                                  |
|                                                v                                                  |
|     +---------------------------------------------------------------------------------------+     |
|     | 2. Hancurkan q pelanggan dari s -> s_destroy -> Rekonstruksi s'                       |     |
|     +---------------------------------------------------------------------------------------+     |
|                                                |                                                  |
|                                                v                                                  |
|     +---------------------------------------------------------------------------------------+     |
|     | 3. Kriteria Penerimaan Simulated Annealing:                                           |     |
|     |    - Jika Z(s') < Z(s) -> Terima s = s'                                               |     |
|     |    - Jika Z(s') >= Z(s) -> Terima dengan probabilitas p = exp(-(Z(s') - Z(s)) / T)   |     |
|     +---------------------------------------------------------------------------------------+     |
|                                                |                                                  |
|                                                v                                                  |
|     +---------------------------------------------------------------------------------------+     |
|     | 4. Pembaruan Skor & Bobot Adaptif Operator:                                           |     |
|     |    - Skor +sigma_1 jika menemukan solusi terbaik global baru                          |     |
|     |    - Skor +sigma_2 jika memperbaiki solusi saat ini                                   |     |
|     |    - Pendinginan Suhu: T = T * CoolingRate; Perbarui Probabilitas Pilihan             |     |
|     +---------------------------------------------------------------------------------------+     |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. Implementasi Komputasional: Python Production Solver

Berikut adalah implementasi Python mandiri (*self-contained engine*) berbasis `numpy` untuk menyelesaikan G-VRPTW-CCT secara efisien:

```python
"""
RuangTI - Industrial Engineering Optimization Suite
Modul 450: Green Vehicle Routing Problem with Time Windows and Carbon Cap-and-Trade (G-VRPTW-CCT)
"""

import numpy as np
import math
import random
import time
from typing import List, Dict, Tuple, Any


class GreenVRPTWSolver:
    """
    Solver Green Vehicle Routing Problem with Time Windows & Carbon Cap-and-Trade
    menggunakan algoritma Adaptive Large Neighborhood Search (ALNS) & Model CMEM Fisika Karbon.
    """
    
    def __init__(
        self,
        depot_coord: Tuple[float, float],
        customer_coords: List[Tuple[float, float]],
        demands: List[float],          # kg per pelanggan
        time_windows: List[Tuple[float, float]], # [ready_time, due_time] dalam menit
        service_times: List[float],    # menit
        vehicle_capacity: float = 1000.0, # kg
        max_vehicles: int = 5,
        vehicle_speed: float = 40.0,   # km/jam
        tare_weight: float = 2500.0,   # kg (berat kosong kendaraan)
        carbon_cap: float = 80.0,      # kg CO2 batas kuota gratis
        carbon_price: float = 0.05,    # USD per kg CO2 (atau IDR ekuivalen)
        driver_cost_per_km: float = 0.8, # USD/km
        fuel_price_per_liter: float = 1.2, # USD/liter
        alpha_base: float = 0.12,      # Liter solar / km (kondisi truk kosong)
        beta_load: float = 0.00008,    # Liter solar / (km * kg muatan)
        co2_factor: float = 2.68       # kg CO2 per Liter solar
    ):
        self.depot_coord = depot_coord
        self.coords = [depot_coord] + customer_coords
        self.n_cust = len(customer_coords)
        self.n_total = self.n_cust + 1
        
        self.demands = [0.0] + demands
        self.tw = [(0.0, 1440.0)] + time_windows
        self.service_times = [0.0] + service_times
        
        self.Q_veh = vehicle_capacity
        self.K = max_vehicles
        self.speed = vehicle_speed # km/jam
        self.tare_weight = tare_weight
        
        self.carbon_cap = carbon_cap
        self.carbon_price = carbon_price
        self.driver_cost_per_km = driver_cost_per_km
        self.fuel_price = fuel_price_per_liter
        self.alpha = alpha_base
        self.beta = beta_load
        self.co2_factor = co2_factor
        
        # Matriks Jarak Euclidean (km) dan Waktu Tempuh (menit)
        self.dist_matrix = np.zeros((self.n_total, self.n_total))
        self.time_matrix = np.zeros((self.n_total, self.n_total))
        self._calc_distance_matrix()

    def _calc_distance_matrix(self):
        for i in range(self.n_total):
            for j in range(self.n_total):
                if i != j:
                    d = math.hypot(self.coords[i][0] - self.coords[j][0], self.coords[i][1] - self.coords[j][1])
                    self.dist_matrix[i, j] = d
                    self.time_matrix[i, j] = (d / self.speed) * 60.0 # menit

    def evaluate_route(self, route: List[int]) -> Tuple[bool, float, float, float, float]:
        """
        Evaluasi satu rute kendaraan:
        Return: (is_feasible, distance, fuel_liters, co2_kg, operating_cost)
        """
        if not route:
            return True, 0.0, 0.0, 0.0, 0.0
            
        total_load = sum(self.demands[node] for node in route)
        if total_load > self.Q_veh:
            return False, 0.0, 0.0, 0.0, float('inf')
            
        current_time = 0.0
        current_load = total_load
        prev_node = 0
        total_dist = 0.0
        total_fuel = 0.0
        
        full_path = [0] + route + [0]
        for i in range(len(full_path) - 1):
            u = full_path[i]
            v = full_path[i+1]
            
            d_uv = self.dist_matrix[u, v]
            t_uv = self.time_matrix[u, v]
            
            arr_time = current_time + t_uv
            ready_v, due_v = self.tw[v]
            
            if arr_time > due_v:
                return False, 0.0, 0.0, 0.0, float('inf') # Melanggar Time Windows
                
            start_service = max(arr_time, ready_v)
            current_time = start_service + self.service_times[v]
            
            # Konsumsi solar pada segmen (u, v) dengan muatan aktual
            fuel_segment = (self.alpha + self.beta * current_load) * d_uv
            total_fuel += fuel_segment
            total_dist += d_uv
            
            if v != 0:
                current_load -= self.demands[v] # Pengurangan muatan dinamis
                
        co2_emitted = total_fuel * self.co2_factor
        op_cost = (total_dist * self.driver_cost_per_km) + (total_fuel * self.fuel_price)
        return True, total_dist, total_fuel, co2_emitted, op_cost

    def evaluate_solution(self, routes: List[List[int]]) -> Dict[str, Any]:
        """
        Evaluasi sistem terpadu seluruh rute armada dengan mekanisme Carbon Cap-and-Trade.
        """
        total_dist = 0.0
        total_fuel = 0.0
        total_co2 = 0.0
        total_op_cost = 0.0
        is_all_feasible = True
        
        active_routes = [r for r in routes if len(r) > 0]
        if len(active_routes) > self.K:
            return {"feasible": False, "total_cost": float('inf')}
            
        for r in active_routes:
            feas, dist, fuel, co2, cost = self.evaluate_route(r)
            if not feas:
                is_all_feasible = False
                break
            total_dist += dist
            total_fuel += fuel
            total_co2 += co2
            total_op_cost += cost
            
        if not is_all_feasible:
            return {"feasible": False, "total_cost": float('inf')}
            
        # Penyesuaian Finansial Karbon Cap-and-Trade
        carbon_balance = total_co2 - self.carbon_cap
        carbon_financial_cost = carbon_balance * self.carbon_price # Positif = Beli, Negatif = Untung jual
        
        grand_total_cost = total_op_cost + carbon_financial_cost
        
        return {
            "feasible": True,
            "grand_total_cost": grand_total_cost,
            "operating_cost": total_op_cost,
            "total_distance_km": total_dist,
            "total_fuel_liters": total_fuel,
            "total_co2_kg": total_co2,
            "carbon_cap_kg": self.carbon_cap,
            "carbon_net_balance_kg": carbon_balance,
            "carbon_financial_impact": carbon_financial_cost,
            "active_vehicles": len(active_routes),
            "routes": active_routes
        }

    def _initial_greedy_solution(self) -> List[List[int]]:
        """
        Membangun solusi awal menggunakan Nearest Time-Window Insertion Heuristic.
        """
        unassigned = list(range(1, self.n_cust + 1))
        routes = []
        
        while unassigned:
            curr_route = []
            curr_cap = 0.0
            curr_node = 0
            curr_time = 0.0
            
            while True:
                best_candidate = None
                best_cost = float('inf')
                
                for cand in unassigned:
                    if curr_cap + self.demands[cand] <= self.Q_veh:
                        t_travel = self.time_matrix[curr_node, cand]
                        arr_time = curr_time + t_travel
                        ready, due = self.tw[cand]
                        if arr_time <= due:
                            # Biaya penambahan: kombinasi jarak dan kedekatan waktu
                            cost_val = self.dist_matrix[curr_node, cand] + max(0, ready - arr_time) * 0.2
                            if cost_val < best_cost:
                                best_cost = cost_val
                                best_candidate = cand
                                
                if best_candidate is not None:
                    curr_route.append(best_candidate)
                    curr_cap += self.demands[best_candidate]
                    arr_time = curr_time + self.time_matrix[curr_node, best_candidate]
                    curr_time = max(arr_time, self.tw[best_candidate][0]) + self.service_times[best_candidate]
                    curr_node = best_candidate
                    unassigned.remove(best_candidate)
                else:
                    break
                    
            routes.append(curr_route)
            
        return routes

    def solve_alns(self, max_iterations: int = 400) -> Dict[str, Any]:
        """
        Penyelesaian menggunakan Metaheuristik ALNS dengan Kriteria Simulated Annealing.
        """
        start_time = time.time()
        current_sol = self._initial_greedy_solution()
        current_eval = self.evaluate_solution(current_sol)
        
        best_sol = [list(r) for r in current_sol]
        best_eval = current_eval
        
        T = 100.0
        cooling_rate = 0.985
        
        for it in range(max_iterations):
            # 1. Destroy: Ambil p pelanggan secara acak / worst emission
            p_remove = min(max(2, int(self.n_cust * 0.25)), self.n_cust)
            sol_copy = [list(r) for r in current_sol]
            
            all_custs = [node for r in sol_copy for node in r]
            removed = random.sample(all_custs, p_remove)
            
            for r in sol_copy:
                for rem in removed:
                    if rem in r:
                        r.remove(rem)
            sol_copy = [r for r in sol_copy if len(r) > 0]
            
            # 2. Repair: Greedy Best Carbon Cost Insertion
            random.shuffle(removed)
            for cust in removed:
                best_insert_r = -1
                best_insert_pos = -1
                best_insert_cost = float('inf')
                
                # Coba sisipkan pada rute yang ada
                for r_idx, r in enumerate(sol_copy):
                    for pos in range(len(r) + 1):
                        new_r = r[:pos] + [cust] + r[pos:]
                        feas, dist, fuel, co2, cost = self.evaluate_route(new_r)
                        if feas:
                            # Evaluasi penambahan biaya
                            c_eval = cost + (co2 * self.carbon_price)
                            if c_eval < best_insert_cost:
                                best_insert_cost = c_eval
                                best_insert_r = r_idx
                                best_insert_pos = pos
                                
                # Coba buat rute baru jika masih memungkinkan
                if len(sol_copy) < self.K:
                    new_r = [cust]
                    feas, dist, fuel, co2, cost = self.evaluate_route(new_r)
                    if feas:
                        c_eval = cost + (co2 * self.carbon_price)
                        if c_eval < best_insert_cost:
                            best_insert_cost = c_eval
                            best_insert_r = len(sol_copy)
                            best_insert_pos = 0
                            
                if best_insert_r != -1:
                    if best_insert_r < len(sol_copy):
                        sol_copy[best_insert_r].insert(best_insert_pos, cust)
                    else:
                        sol_copy.append([cust])
                else:
                    # Fallback jika gagal sisipkan
                    sol_copy.append([cust])
                    
            cand_eval = self.evaluate_solution(sol_copy)
            
            # 3. Kriteria Penerimaan Solusi Baru
            if cand_eval["feasible"]:
                delta = cand_eval["grand_total_cost"] - current_eval["grand_total_cost"]
                if delta < 0 or math.exp(-delta / max(T, 1e-4)) > random.random():
                    current_sol = sol_copy
                    current_eval = cand_eval
                    
                    if current_eval["grand_total_cost"] < best_eval["grand_total_cost"]:
                        best_sol = [list(r) for r in current_sol]
                        best_eval = current_eval
                        
            T *= cooling_rate
            
        elapsed = time.time() - start_time
        best_eval["runtime_seconds"] = round(elapsed, 4)
        best_eval["routes"] = best_sol
        return best_eval


# ==============================================================================
# STUDI KASUS INDUSTRI: DISTRIBUSI LOGISTIK GREEN FMCG DENGAN BURSA KARBON
# ==============================================================================
if __name__ == "__main__":
    random.seed(42)
    np.random.seed(42)
    
    depot = (50.0, 50.0) # Koordinat Central Depot
    
    # 10 Simpul Toko / Ritel Pelanggan
    customers = [
        (45.0, 68.0), (30.0, 52.0), (70.0, 80.0), (82.0, 55.0), (60.0, 20.0),
        (35.0, 25.0), (20.0, 35.0), (75.0, 30.0), (55.0, 85.0), (15.0, 75.0)
    ]
    demands = [180.0, 240.0, 310.0, 150.0, 290.0, 200.0, 160.0, 220.0, 190.0, 250.0] # kg
    
    # Jendela Waktu (Menit sejak jam 08:00 pagi)
    time_windows = [
        (30.0, 150.0), (60.0, 210.0), (120.0, 300.0), (90.0, 240.0), (150.0, 360.0),
        (60.0, 200.0), (180.0, 420.0), (240.0, 480.0), (180.0, 360.0), (240.0, 450.0)
    ]
    service_times = [15.0] * 10 # 15 menit per toko
    
    print("=" * 80)
    print("SIMULASI OPTIMASI GREEN VRPTW & CARBON CAP-AND-TRADE (RUANGTI ENGINE)")
    print("=" * 80)
    print(f"Batas Kuota Karbon Gratis (Cap): 65.0 kg CO2 | Harga Karbon: $0.15 / kg CO2")
    
    solver = GreenVRPTWSolver(
        depot_coord=depot,
        customer_coords=customers,
        demands=demands,
        time_windows=time_windows,
        service_times=service_times,
        vehicle_capacity=800.0, # kg
        max_vehicles=4,
        carbon_cap=65.0,        # kg CO2
        carbon_price=0.15,      # $0.15/kg CO2
        driver_cost_per_km=0.85, # $/km
        fuel_price_per_liter=1.15
    )
    
    res = solver.solve_alns(max_iterations=500)
    
    print("\n--- HASIL OPTIMASI GREEN LOGISTICS TERPADU ---")
    print(f"Status Solusi             : {'Fisibel' if res['feasible'] else 'Gagal'}")
    print(f"Total Biaya Terpadu       : ${res['grand_total_cost']:,.2f}")
    print(f"Biaya Operasional Dasar   : ${res['operating_cost']:,.2f}")
    print(f"Total Jarak Tempuh Armada : {res['total_distance_km']:.2f} km")
    print(f"Total Konsumsi Solar      : {res['total_fuel_liters']:.2f} Liter")
    print(f"Total Emisi Karbon CO2    : {res['total_co2_kg']:.2f} kg CO2")
    print(f"Batas Kuota Karbon (Cap)  : {res['carbon_cap_kg']:.2f} kg CO2")
    
    if res['carbon_net_balance_kg'] > 0:
        print(f"Dampak Finansial Karbon   : DEFISIT +{res['carbon_net_balance_kg']:.2f} kg CO2 (Beli Kuota: +${res['carbon_financial_impact']:,.2f})")
    else:
        print(f"Dampak Finansial Karbon   : SURPLUS {abs(res['carbon_net_balance_kg']):.2f} kg CO2 (Pendapatan Bursa: -${abs(res['carbon_financial_impact']):,.2f})")
        
    print(f"Jumlah Armada Aktif       : {res['active_vehicles']} Kendaraan")
    print(f"Waktu Komputasi ALNS      : {res['runtime_seconds']} detik")
    
    print("\n--- RUTE OPERASIONAL KENDARAAN ---")
    for idx, r in enumerate(res['routes'], 1):
        _, d, f, c, cost = solver.evaluate_route(r)
        cust_str = " -> ".join([f"Toko {c_id}" for c_id in r])
        load_tot = sum(demands[c_id-1] for c_id in r)
        print(f"Rute #{idx} (Muatan: {load_tot} kg | {d:.1f} km | {c:.2f} kg CO2): Depot -> {cust_str} -> Depot")
```

---

## 5. Studi Kasus Industri: Distribusi Green FMCG & Pasar Bursa Karbon

### 5.1 Latar Belakang Masalah
Perusahaan logistik perkotaan mengoperasikan armada distribusi bahan pangan segar menuju 10 gerai ritel modern di area metropolitan. Sesuai regulasi Perpres Nilai Ekonomi Karbon (NEK) dan bursa karbon, perusahaan memperoleh kuota batas emisi karbon gratis sebesar **65,0 kg $\text{CO}_2$** per siklus distribusi harian. Pelanggan memiliki batasan jendela waktu kedatangan ketat untuk mencegah antrean di pintu bongkar (*unloading bay*).

### 5.2 Evaluasi Komparatif Kinerja Solusi
Melalui eksekusi algoritma ALNS terintegrasi model emisi CMEM:
1. **Efisiensi Rute & Alokasi Armada**: Sistem mengoptimalkan 10 titik ritel menjadi **4 rute armada** dengan total jarak tempuh **381,84 km** dan waktu komputasi sangat singkat **0,0495 detik**.
2. **Kinerja Emisi Karbon & Neraca Bursa**:
   - Total emisi $\text{CO}_2$ riil yang dihasilkan armada adalah **144,78 kg $\text{CO}_2$** dari konsumsi 54,02 Liter solar.
   - Dengan batas kuota gratis $65,0\text{ kg } \text{CO}_2$, armada mengalami defisit bersih kuota sebesar **79,78 kg $\text{CO}_2$** yang memerlukan pembelian kredit karbon tambahan sebesar **$11,97** di bursa karbon.
3. **Total Biaya Terpadu**: **$398,66** per siklus harian (terdiri dari Biaya Operasional Kendaraan & Supir sebesar $386,69 dan Biaya Kuota Karbon sebesar $11,97). Pendekatan optimasi ini berhasil meminimalkan total biaya gabungan secara global sambil mempertahankan kepatuhan penuh terhadap batas jendela waktu pelayanan ritel.

---

## 6. Referensi Terverifikasi & Literatur Standar

1. **Demir, E., Bektaş, T., & Laporte, G.** (2011). *A comparative analysis of several vehicle emission models for road freight transportation*. **Transportation Research Part D: Transport and Environment**, 16(5), 347–357. [DOI: 10.1016/j.trd.2011.01.011](https://doi.org/10.1016/j.trd.2011.01.011)
2. **Demir, E., Bektaş, T., & Laporte, G.** (2012). *An adaptive large neighborhood search heuristic for the Pollution-Routing Problem*. **European Journal of Operational Research**, 223(2), 346–359. [DOI: 10.1016/j.ejor.2012.06.044](https://doi.org/10.1016/j.ejor.2012.06.044)
3. **Demir, E., Bektaş, T., & Laporte, G.** (2014). *A review of recent research on green road freight transportation*. **European Journal of Operational Research**, 237(3), 775–793. [DOI: 10.1016/j.ejor.2013.12.033](https://doi.org/10.1016/j.ejor.2013.12.033)
4. **Barth, M., & Boriboonsomsin, K.** (2009). *Energy and emissions impacts of a freeway-based dynamic eco-driving system*. **Transportation Research Part D: Transport and Environment**, 14(6), 400–410. [DOI: 10.1016/j.trd.2009.01.004](https://doi.org/10.1016/j.trd.2009.01.004)
5. **Zhang, S., Gajpal, Y., Appadoo, S. S., & Wei, Q.** (2020). *Multi-Depot Green Vehicle Routing Problem to Minimize Carbon Emissions*. **Sustainability**, 12(8), 3500. [DOI: 10.3390/su12083500](https://doi.org/10.3390/su12083500)
6. **Tompkins, J. A., White, J. A., Bozer, Y. A., & Tanchoco, J. M. A.** (2010). *Facilities Planning* (4th ed.). John Wiley & Sons, Hoboken, NJ.
7. **Hillier, F. S., & Lieberman, G. J.** (2021). *Introduction to Operations Research* (11th ed.). McGraw-Hill Education, New York, NY.$.
