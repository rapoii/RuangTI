# Modul 741: Stochastic Dominance & Risk-Averse Optimization dalam Rantai Pasok Manufaktur

## 1. Pendahuluan: Paradigma Pengambilan Keputusan di Bawah Ketidakpastian

Dalam operasi manufaktur dan manajemen rantai pasok, pengambil keputusan——khususnya manajer produksi, kepala gudang, dan direktur supply chain——sering menghadapi skenario di mana distribusi probabilitas hasil (*outcome distribution*) bersifat kompleks, asimetris, atau tidak dapat dinyatakan secara parametrik. Metode konvensional seperti optimasi ekspektasi (*mean-variance optimization*) atau *Conditional Value-at-Risk* (CVaR) memiliki keterbatasan:

1. **Mean-Variance (Markowitz)**: Mengasumsikan investor/manajer bersifat risk-neutral dan distribusi return bersifat normal, yang sering dilanggar pada distribusi return aset produksi yang bersifat *skewed* (mean-preserving spread).
2. **CVaR/VaR**: Bergantung pada pemilihan quantile threshold (α) yang bersifat arbitrari dan tidak transitif secara penuh (*not fully transitive preference*).

**Stochastic Dominance** (Dominasi Stokastik) menawarkan kerangka aksiomatik dari teori keputusan normatif yang lebih kuat——berdasarkan preferensi utilitas monotonic dan konveksitas——tanpa memerlukan spesifikasi parametrik distribusi yang rigid.

## 2. Fondasi Teori: First-Order & Second-Order Stochastic Dominance

### 2.1 Definisi Formal

Diberikan dua variabel acak $X$ dan $Y$ yang merepresentasikan keuntungan (profit) atau biaya (cost) dengan fungsi distribusi kumulatif (CDF) $F_X$ dan $F_Y$, serta fungsi utilitas $u(\cdot)$ yang diasumsikan monoton naik dan concave untuk risk-averse decision maker:

**First-Order Stochastic Dominance (FSD):**

$$X \succeq_{FSD} Y \iff F_X(t) \leq F_Y(t) \quad \forall t \in \mathbb{R}$$

Artinya, distribusi $X$ mendominasi $Y$ jika dan hanya jika probability cumulative $X$ tidak pernah melebihi $Y$ pada titik manapun——setiap quantile dari $X$ memberikan hasil minimal sama baik atau lebih baik.

**Second-Order Stochastic Dominance (SSD):**

$$X \succeq_{SSD} Y \iff \int_{-\infty}^{t} [F_Y(s) - F_X(s)] \, ds \geq 0 \quad \forall t \in \mathbb{R}$$

SSD menangkap preferensi risk-averse: untuk setiap level ambang (*threshold*) $t$, luas area di antara CDF $Y$ dan $X$ dari $-\infty$ hingga $t$ tidak negatif. Secara ekonomis, SSD berarti $X$ memberikan mean-preserving spread yang lebih kecil atau dominasi yang lebih baik dalam hal downside protection.

### 2.2 Hubungan dengan Fungsi Utilitas

Jika $X \succeq_{SSD} Y$, maka untuk SEMUA fungsi utilitas $u$ yang monoton naik dan concave (risk-averse):

$$E[u(X)] \geq E[u(Y)]$$

Ini adalah teorema fundamental yang membedakan stochastic dominance dari pengukuran risiko parametrik lain.

## 3. Optimisasi dengan Kendala Stochastic Dominance

### 3.1 Model Matematis

Masalah optimisasi risk-averse dengan kendala stochastic dominance dapat diformulasikan sebagai:

$$\min_{x \in \mathcal{X}} \quad c^T x$$

$$\text{s.t.} \quad \xi(x) \succeq_{SSD} \eta$$

Di mana:
- $x$ = vektor keputusan (jumlah order, level inventori, kapasitas produksi)
- $\mathcal{X}$ = himpunan kelayakan (constraints kapasitas, lead time, budget)
- $\xi(x)$ = distribusi keuntungan/kerugian (loss) sebagai fungsi keputusan
- $\eta$ = distribusi benchmark (misalnya, target manajemen atau kompetitor)

### 3.2 Konversi ke Linear Programming

Ketika distribusi diskrit (berdasarkan *scenarios* $s = 1, \ldots, S$ dengan probabilitas $p_s$), formulasi SSD dapat dikonversi menjadi kendala linear menggunakan *cumulative prospect framework*:

$$\sum_{s=1}^{k} p_s [y_s - x_s] \geq 0 \quad \forall k = 1, \ldots, S$$

di mana $y_{(1)} \leq y_{(2)} \leq \ldots \leq y_{(S)}$ dan $x_{(1)} \leq x_{(2)} \leq \ldots \leq x_{(S)}$ adalah urutan *non-decreasing* dari hasil.

## 4. Studi Kasus: Optimasi Inventori Multi-SKU dengan Stochastic Dominance

### 4.1 Konteks Industri

PT Industri Manufaktur Elektronik "TeknoAssembly" memiliki 4 SKU utama (Printed Circuit Board / PCB Assembly) yang menghadapi ketidakpastian permintaan musiman dengan distribusi *right-skewed* (long tail demand). Manajer supply chain menetapkan target: distribusi total biaya inventori (*holding + stockout*) tahun depan harus mendominasi (*SSD*) distribusi tahun berjalan (baseline).

### 4.2 Data Historis & Skenario

| Parameter | Nilai |
|-----------|-------|
| Number of SKUs | 4 |
| Number of scenarios | 5 |
| Planning horizon | 12 bulan |
| Holding cost (% per unit per tahun) | 22% |
| Stockout cost (per unit) | Rp 85.000 |
| Safety factor (z-score) baseline | 1.65 |
| Budget constraint | Rp 500.000.000 |

Data distribusi permintaan bulanan (unit):

| Skenario | Probabilitas | SKU-A | SKU-B | SKU-C | SKU-D |
|----------|--------------|-------|-------|-------|-------|
| S1 (Boom) | 0.15 | 12.000 | 8.500 | 6.200 | 4.800 |
| S2 (High) | 0.25 | 10.500 | 7.200 | 5.400 | 4.100 |
| S3 (Medium) | 0.35 | 9.000 | 6.000 | 4.500 | 3.500 |
| S4 (Low) | 0.20 | 7.500 | 4.800 | 3.600 | 2.800 |
| S5 (Recession) | 0.05 | 5.000 | 3.200 | 2.400 | 1.900 |

### 4.3 Pemodelan Matematis

**Variabel Keputusan:**
- $q_i$ = reorder point untuk SKU $i$ ($i = 1, 2, 3, 4$)
- $SS_i$ = safety stock untuk SKU $i$

**Fungsi Tujuan:**
$$\min \sum_{i=1}^{4} [h_i \cdot SS_i + p_i \cdot EOQ_i]$$

**Kendala SSD:**
$$\sum_{s=1}^{k} p_s \cdot TC_s(q) \leq \sum_{s=1}^{k} p_s \cdot TC_s^{baseline} \quad \forall k = 1, \ldots, 5$$

### 4.4 Implementasi Python Solver

```python
"""
Modul Optimisasi Inventori Multi-SKU dengan Kendala Second-Order Stochastic Dominance
Solver: PuLP (Linear Programming) + NumPy/NumPyro (Distribusi)
"""

import numpy as np
import pandas as pd
from pulp import (
    LpProblem, LpMinimize, LpVariable, 
    lpSum, LpStatus, value, PULP_CBC_CMD
)
from typing import Dict, List, Tuple
import warnings
warnings.filterwarnings('ignore')


class StochasticDominanceInventoryOptimizer:
    """
    Optimasi inventori multi-item dengan kendala Second-Order Stochastic Dominance (SSD).
    
    Metode: Konversi kendala SSD diskrit menjadi kendala linear menggunakan
    cumulative prospect constraint (Dentcheva & Ruszczynski, 2003).
    """
    
    def __init__(self, scenarios: np.ndarray, probabilities: np.ndarray,
                 unit_costs: np.ndarray, holding_rate: float,
                 stockout_cost: float, baseline_costs: np.ndarray,
                 budget: float):
        """
        Parameters:
        -----------
        scenarios : ndarray, shape=(n_scenarios, n_items)
            Matriks permintaan per skenario per item
        probabilities : ndarray, shape=(n_scenarios,)
            Probabilitas setiap skenario
        unit_costs : ndarray, shape=(n_items,)
            Biaya per unit setiap item (Rp)
        holding_rate : float
            Biaya simpan tahunan sebagai fraksi dari nilai inventori
        stockout_cost : float
            Biaya stockout per unit (Rp)
        baseline_costs : ndarray, shape=(n_scenarios,)
            Total biaya inventori baseline (untuk perbandingan SSD)
        budget : float
            Batasan anggaran total (Rp)
        """
        self.S = scenarios
        self.prob = probabilities
        self.c = unit_costs
        self.holding_rate = holding_rate
        self.stockout_cost = stockout_cost
        self.baseline = baseline_costs
        self.budget = budget
        self.n_scenarios, self.n_items = scenarios.shape
        
        # Inisialisasi model
        self.model = LpProblem(
            name="Multi_SKU_SSD_Inventory_Optimization",
            sense=LpMinimize
        )
        
    def compute_safety_stock(self, q: np.ndarray, 
                           mean_demand: np.ndarray) -> np.ndarray:
        """Hitung safety stock dari reorder points."""
        return np.maximum(0, q - mean_demand)
    
    def compute_total_cost(self, q: np.ndarray, 
                          mean_demand: np.ndarray) -> np.ndarray:
        """Hitung total biaya inventori per skenario."""
        ss = self.compute_safety_stock(q, mean_demand)
        safety_stocks = np.tile(ss, (self.n_scenarios, 1))
        
        # Demand per skenario
        demand_scenario = self.S
        
        # Holding cost = SS * unit_cost * holding_rate
        holding_costs = np.sum(
            safety_stocks * self.c * self.holding_rate, axis=1
        )
        
        # Stockout cost (simplified: excess demand over reorder point)
        stockout_qty = np.maximum(0, demand_scenario - q)
        stockout_costs = np.sum(
            stockout_qty * self.stockout_cost / self.n_scenarios, axis=1
        )
        
        return holding_costs + stockout_costs
    
    def build_ssd_constraints(self, tc_vars: List[LpVariable]) -> None:
        """
        Bangun kendala SSD diskrit: 
        Kumulatif biaya inventori decision ≤ Kumulatif biaya baseline
        untuk setiap kumulatif threshold.
        """
        # Urutkan skenario berdasarkan biaya baseline (ascending)
        sorted_indices = np.argsort(self.baseline)
        sorted_baseline = self.baseline[sorted_indices]
        sorted_prob = self.prob[sorted_indices]
        
        # Urutkan variabel biaya sesuai urutan baseline
        tc_array = np.array([tc_vars[i] for i in sorted_indices])
        
        # Konstruksi kendala kumulatif
        for k in range(1, self.n_scenarios + 1):
            cumulative_left = lpSum(
                sorted_prob[:k] * tc_array[:k]
            )
            cumulative_right = np.sum(
                sorted_prob[:k] * sorted_baseline[:k]
            )
            self.model += (cumulative_left <= cumulative_right + 1e-6,
                          f"SSD_Constraint_k{k}")
    
    def build_model(self, mean_demand: np.ndarray) -> None:
        """Bangun model optimasi lengkap."""
        
        # Variabel keputusan: reorder points untuk setiap item
        q_vars = [
            LpVariable(name=f"reorder_point_SKU{i+1}", 
                      lowBound=0, cat='Integer')
            for i in range(self.n_items)
        ]
        
        # Variabel slack untuk biaya per skenario
        tc_vars = [
            LpVariable(name=f"total_cost_scenario{s+1}",
                      lowBound=0, cat='Continuous')
            for s in range(self.n_scenarios)
        ]
        
        # Fungsi tujuan: minimalkan total biaya inventori
        self.model += lpSum(tc_vars), "Total_Inventory_Cost"
        
        # Kendala definisi biaya per skenario
        for s in range(self.n_scenarios):
            ss_sum = lpSum([
                lpSum([q_vars[j] - mean_demand[j] 
                       for j in range(self.n_items) if q_vars[j].value() is None 
                       else max(0, q_vars[j].varValue - mean_demand[j])])
            ])
            # Note: Real implementation would use linear constraints
            # for holding and stockout costs here
            
        # Kendala SSD
        self.build_ssd_constraints(tc_vars)
        
        # Kendala budget
        self.model += lpSum(tc_vars) <= self.budget, "Budget_Constraint"
        
        # Kendala minimum service level
        for i in range(self.n_items):
            # 95% service level: z = 1.645
            self.model += (
                q_vars[i] >= mean_demand[i] + 1.645 * np.std(self.S[:, i]),
                f"ServiceLevel_SKU{i+1}"
            )
    
    def solve(self, mean_demand: np.ndarray) -> Dict:
        """Selesaikan model dan return hasil."""
        
        # Rebuild model dengan parameter actual
        self.model = LpProblem(
            name="Multi_SKU_SSD_Inventory_Optimization",
            sense=LpMinimize
        )
        
        # Variabel keputusan
        q_vars = {
            i: LpVariable(name=f"q_SKU{i+1}", lowBound=0, cat='Continuous')
            for i in range(self.n_items)
        }
        
        # Biaya holding per item
        holding_cost = lpSum([
            self.holding_rate * self.c[i] * (q_vars[i] - mean_demand[i])
            for i in range(self.n_items)
            if self.c[i] > 0
        ])
        
        # Biaya stockout (expected)
        stockout_cost = lpSum([
            self.stockout_cost * np.mean(np.maximum(0, self.S[:, i] - mean_demand[i]))
            for i in range(self.n_items)
        ])
        
        # Fungsi tujuan
        self.model += holding_cost + stockout_cost, "Total_Expected_Cost"
        
        # Kendala SSD
        sorted_idx = np.argsort(self.baseline)
        for k in range(1, self.n_scenarios + 1):
            cumulative_prob = np.sum(self.prob[sorted_idx[:k]])
            cumulative_baseline = np.sum(self.baseline[sorted_idx[:k]])
            # Add constraint ensuring cumulative cost doesn't exceed baseline
            self.model += (
                cumulative_prob * value(holding_cost + stockout_cost) 
                <= cumulative_baseline,
                f"SSD_k{k}"
            )
        
        # Solve
        solver = PULP_CBC_CMD(msg=0, timeLimit=60)
        status = self.model.solve(solver)
        
        return {
            'status': LpStatus[self.model.status],
            'optimal_q': {i: value(q_vars[i]) for i in q_vars},
            'expected_cost': value(self.model.objective),
            'confidence': 0.95
        }


def run_case_study():
    """Eksekusi studi kasus TeknoAssembly."""
    
    print("=" * 70)
    print("STUDI KASUS: Optimasi Inventori Multi-SKU dengan SSD Constraint")
    print("PT TeknoAssembly Electronics Manufacturing")
    print("=" * 70)
    
    # Data input
    scenarios = np.array([
        [12000, 8500, 6200, 4800],  # S1 Boom
        [10500, 7200, 5400, 4100],  # S2 High
        [9000,  6000, 4500, 3500],   # S3 Medium
        [7500,  4800, 3600, 2800],   # S4 Low
        [5000,  3200, 2400, 1900],   # S5 Recession
    ])
    
    probabilities = np.array([0.15, 0.25, 0.35, 0.20, 0.05])
    unit_costs = np.array([85000, 120000, 65000, 95000])  # Rp
    holding_rate = 0.22
    stockout_cost = 85000
    budget = 500_000_000
    
    # Baseline: menggunakan safety factor z=1.65
    mean_demand = np.mean(scenarios, axis=0)
    baseline_ss = mean_demand + 1.65 * np.std(scenarios, axis=0)
    baseline_costs = np.array([
        85000 * 0.22 * baseline_ss[0] + 120000 * 0.22 * baseline_ss[1] +
        65000 * 0.22 * baseline_ss[2] + 95000 * 0.22 * baseline_ss[3]
    ] * 5)
    
    # Initialize optimizer
    optimizer = StochasticDominanceInventoryOptimizer(
        scenarios=scenarios,
        probabilities=probabilities,
        unit_costs=unit_costs,
        holding_rate=holding_rate,
        stockout_cost=stockout_cost,
        baseline_costs=baseline_costs,
        budget=budget
    )
    
    # Solve
    result = optimizer.solve(mean_demand)
    
    print(f"\nStatus Optimasi: {result['status']}")
    print("\nReorder Points Optimal:")
    for i, q in result['optimal_q'].items():
        print(f"  SKU-{i+1}: {q:,.0f} unit (Safety Stock: {q - mean_demand[i]:,.0f})")
    print(f"\nExpected Total Cost: Rp {result['expected_cost']:,.0f}")
    print(f"Service Level Target: {result['confidence']*100:.0f}%")
    
    return result


if __name__ == "__main__":
    result = run_case_study()
```

### 4.5 Hasil Numerik (Ilustratif)

```
============================================================
HASIL OPTIMASI: STOCHASTIC DOMINANCE INVENTORY MODEL
============================================================
SKU         | Reorder Point | Safety Stock | Unit Cost
------------|---------------|--------------|------------
SKU-A (PCB) | 10,450        | 1,450        | Rp 85,000
SKU-B (IC)  | 6,850         | 850          | Rp 120,000
SKU-C (Cap) | 4,750         | 250          | Rp 65,000
SKU-D (Res) | 3,600         | 100          | Rp 95,000

Expected Total Cost (SSD-Optimal):  Rp 287,450,000
Baseline Total Cost (Mean-Var):     Rp 312,600,000
Cost Reduction:                     Rp 25,150,000 (8.0%)

SSD Verification:
  Cumulative Cost Path ⊆ Cumulative Baseline Path ✓
  All k-th order constraints satisfied ✓
============================================================
```

## 5. Aplikasi Industri Lainnya

### 5.1 Portofolio Produksi dengan Constraint SSD

Dalam alokasi kapasitas produksi lintas lini, stochastic dominance memastikan distribusi output total "mendominasi" target manajemen pada setiap quantile——krusial untuk perencanaan kapasitas jangka panjang di mana variance produksi sangat tinggi.

### 5.2 Procurement Risk Management

Vendor selection dengan SSD constraint memastikan distribusi biaya procurement tahun depan mendominasi (lebih baik atau sama) benchmark——tanpa memerlukan asumsi distribusi normal atau estimasi variance eksplisit.

### 5.3 Project Scheduling dengan Uncertainty

Dalam penjadwalan proyek multi-stage (CPM/PERT), SSD constraint dapat membatasi distribusi makespan agar mendominasi deadline contractual——memberikan risk-averse protection tanpa optimisme berlebihan.

## 6. Perbandingan dengan Metode Risk-Averse Lainnya

| Aspek | Mean-Variance (Markowitz) | CVaR/VaR | Stochastic Dominance |
|-------|---------------------------|-----------|----------------------|
| Asumsi Distribusi | Normal | Arbitrary (but quantile-specific) | Nonparametric |
| Preferensi Utilitas | Quadratic (mean-preserving) | piecewise-linear | Monotonic + Concave |
| Transitivity | Yes | Partial | Yes (complete) |
| Computational Complexity | O(n²) | O(n) | O(n log n) |
| Informasi yang Dibutuhkan | Mean + Variance | Quantile (α) | Full CDF |
| Interpretasi | Variance penalty | Tail risk | Full distribution dominance |

## 7. Standar & Referensi Profesi

### Standar Internasional
- **ISO 31000:2018** — Risk Management: Prinsip dan panduan integrasi stochastic dominance dalam framework risk management korporat.
- **ISO 45001:2018** — Occupational Health and Safety: Aplikasi SSD dalam manajemen risiko keselamatan kerja dengan distribusi insiden stokastik.

### Jurnal & Publikasi Akademis
1. Dentcheva, D. & Ruszczynski, A. (2003). "Optimization with Stochastic Dominance Constraints." *SIAM Journal on Optimization*, 14(2), 548-566. DOI: 10.1137/S1052623402420548
2. Ogryczak, W. & Ruszczynski, A. (2002). "On Consistency of Stochastic Dominance and Mean-Semideviation Models." *Mathematical Programming*, 89, 217-232. DOI: 10.1007/s101070100244
3. Hadar, J. & Russell, W.R. (1969). "Rules for Ordering Uncertain Prospects." *American Economic Review*, 59(1), 25-34.
4. Levy, H. (2016). "Stochastic Dominance: Investment Decision Making Under Uncertainty." 3rd Edition, Springer. ISBN: 978-3-319-21783-0.
5. Liu, Y., Wei, W., & Zhao, Q. (2023). "Risk-averse decision-making to maintain supply chain viability under propagated disruptions." *International Journal of Production Research*, 62(8), 2853-2867. DOI: 10.1080/00207543.2023.2236726
6. Dai, H. & Xue, Y. (2023). "Learning to Optimize with Stochastic Dominance Constraints." *Proceedings of Machine Learning Research*, 206, 1-18.

### Buku Teks Referensi
- Taha, H.A. (2017). *Operations Research: An Introduction*. 10th Edition. Pearson. (Bab 14-15: Stochastic Processes & Decision Analysis)
- Hillier, F.S. & Lieberman, G.J. (2021). *Introduction to Operations Research*. 12th Edition. McGraw-Hill. (Bab 22: Nonlinear Programming & Appendix: Decision Analysis)

## 8. Kesimpulan & Rekomendasi Implementasi

Optimasi dengan kendala **Stochastic Dominance** merupakan tools powerful bagi engineer industri yang menghadapi:
1. Distribusi hasil non-normal atau unknown distribution
2. Persyaratan risk-averse yang tidak dapat dipenuhi oleh VaR/CVaR
3. Kebutuhan benchmarking yang normatif dan transitif

**Rekomendasi Implementasi:**
- Mulai dengan **SSD (Second-Order)** untuk mayoritas aplikasi risk-averse
- Gunakan software: **GAMS/CPLEX** untuk formulasi nonlinear, **PuLP** untuk prototipe Python
- Verifikasi kondisi **Karamata's Theorem** sebelum menerapkan SSD pada distribusi diskrit
- Kombinasikan dengan **Monte Carlo simulation** untuk validasi hasil.
