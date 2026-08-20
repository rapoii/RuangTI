# Modul 484: Stochastic Chance-Constrained Programming (CCP): Reformulasi Deterministik, Nilai Kritis Quantile, dan Manajemen Risiko Industri (VaR & CVaR)

## 1. Pengantar & Konteks Strategis: Optimasi di Bawah Ketidakpastian Stokastik

Dalam sistem rekayasa industri, perencanaan produksi, manajemen energi, dan logistik rantai pasok modern, parameter operasional seperti permintaan pasar (*demand*), waktu proses mesin (*processing time*), hasil panen/material (*yield rate*), dan ketersediaan energi terbarukan (*renewable generation*) memiliki sifat acak dan tidak pasti (*stochastic uncertainty*).

Pendekatan optimasi deterministik konvensional seringkali gagal menghadapi variabilitas acak karena mengabaikan peluang terjadinya pelanggaran kendala (*constraint violation*). Sebaliknya, pendekatan optimasi robust murni (*worst-case robust optimization*) cenderung menghasilkan solusi yang terlalu konservatif (*overly conservative*) dan menuntut biaya modal/operasional yang sangat tinggi hanya untuk mengantisipasi kejadian ekstrem berkemungkinan amat kecil.

```
+-------------------------------------------------------------------------------------------------------------+
|               SPEKTRUM PARADIGMA OPTIMASI DI BAWAH KETIDAKPASTIAN INDUSTRI                                  |
+-------------------------------------------------------------------------------------------------------------+
|                                                                                                             |
|  1. DETERMINISTIC OPTIMIZATION                                                                              |
|     Parameter: Nilai Ekspektasi Rata-rata E[xi]                                                             |
|     Karakteristik: Solusi rentan infeasible jika terjadi fluktuasi parameter nyata.                         |
|                                                                                                             |
|  2. WORST-CASE ROBUST OPTIMIZATION (RO)                                                                     |
|     Parameter: Himpunan Ketidakpastian Kotak / Polytopic / Ellipsoidal                                      |
|     Karakteristik: 100% aman namun biaya proteksi melonjak (terlalu pesimis/konservatif).                   |
|                                                                                                             |
|  3. CHANCE-CONSTRAINED PROGRAMMING (CCP - CHARNES & COOPER, 1959)                                           |
|     Batasan Probabilistik: P( Kendala Terpenuhi ) >= 1 - alpha  (Contoh: Service Level 95% atau 99%)         |
|     Karakteristik: Trade-off optimal antara efisiensi biaya dan keandalan operasional industri.              |
|                                                                                                             |
|  4. RISK-AVERSE REFORMULATION (VALUE-AT-RISK & CONDITIONAL VALUE-AT-RISK / CVaR)                            |
|     Karakteristik: Mengontrol besaran ekor kerugian (tail risk) menggunakan fungsi konveks Rockafellar-    |
|     Uryasev yang dapat dipecahkan via Linear Programming standar.                                           |
|                                                                                                             |
+-------------------------------------------------------------------------------------------------------------+
```

**Stochastic Chance-Constrained Programming (CCP)** yang dirintis oleh Charnes & Cooper (1959) dan dikembangkan lebih lanjut oleh Prékopa (1995), Nemirovski & Shapiro (2006), serta Rockafellar & Uryasev (2000) memungkinkan *industrial engineer* untuk merumuskan kendala yang dijamin terpenuhi dengan tingkat keyakinan probabilitas tertentu ($1 - \alpha$), di mana $\alpha \in (0, 1)$ merepresentasikan tingkat risiko pelanggaran yang ditoleransi (*significance / risk level*).

---

## 2. Landasan Teori & Formulasi Matematis Chance-Constrained Programming

### 2.1 Formulasi Umum Masalah Chance-Constrained Tingkat Tunggal (*Individual Chance Constraints*)

Misalkan $x \in \mathbb{R}^n$ adalah vektor variabel keputusan desain/operasi industri, $c \in \mathbb{R}^n$ adalah vektor biaya, dan parameter acak dimodelkan sebagai vektor acak $\xi \in \mathbb{R}^m$ yang memiliki fungsi distribusi probabilitas kumulatif $F_\xi(\cdot)$.

Formulasi umum pemrograman berkendala peluang individual dinyatakan sebagai:

$$\min_{x \in \mathcal{X}} \; c^T x$$

$$\text{subject to: } \mathbb{P}\left( a_i(\xi)^T x \le b_i(\xi) \right) \ge 1 - \alpha_i, \quad \forall i \in \{1, 2, \dots, m\}$$

di mana $\alpha_i \in (0, 0.5]$ adalah toleransi risiko pelanggaran kendala ke-$i$.

### 2.2 Reformulasi Deterministik Eksak (*Deterministic Equivalent*) untuk Distribusi Normal

Apabila parameter kendala sisi kanan bersifat acak independen dengan distribusi Gaussian normal $\tilde{b}_i \sim \mathcal{N}(\mu_i, \sigma_i^2)$ dan $a_i$ deterministik:

$$\mathbb{P}\left( a_i^T x \le \tilde{b}_i \right) \ge 1 - \alpha_i \iff \mathbb{P}\left( \frac{\tilde{b}_i - \mu_i}{\sigma_i} \ge \frac{a_i^T x - \mu_i}{\sigma_i} \right) \ge 1 - \alpha_i$$

Mengingat variabel terstandarisasi $Z = \frac{\tilde{b}_i - \mu_i}{\sigma_i} \sim \mathcal{N}(0, 1)$, kondisi di atas ekuivalen dengan:

$$1 - \Phi\left( \frac{a_i^T x - \mu_i}{\sigma_i} \right) \ge 1 - \alpha_i \implies \Phi\left( \frac{a_i^T x - \mu_i}{\sigma_i} \right) \le \alpha_i$$

$$\frac{a_i^T x - \mu_i}{\sigma_i} \le \Phi^{-1}(\alpha_i) = - \Phi^{-1}(1 - \alpha_i)$$

Sehingga diperoleh **Kendala Linear Deterministik Ekuivalen**:

$$a_i^T x \le \mu_i - \Phi^{-1}(1 - \alpha_i) \cdot \sigma_i$$

di mana $\Phi^{-1}(\cdot)$ adalah fungsi persentil (kuantil) dari distribusi normal standar.

### 2.3 Parameter Koefisien Teknologi Acak (*Random Technology Matrix*) & Second-Order Cone (SOCP)

Jika koefisien vektor $\tilde{a}_i \sim \mathcal{N}(\bar{a}_i, \Sigma_i)$ juga bersifat acak bersama dengan matriks kovarians $\Sigma_i \succ 0$:

Kombinasi linear $\tilde{a}_i^T x$ terdistribusi normal dengan rata-rata $\bar{a}_i^T x$ dan varians $x^T \Sigma_i x = \|\Sigma_i^{1/2} x\|_2^2$.

Kendala probabilistik:
$$\mathbb{P}\left( \tilde{a}_i^T x \le b_i \right) \ge 1 - \alpha_i \quad (\text{untuk } \alpha_i < 0.5)$$

Dapat direformulasi secara eksak menjadi kendala kerucut orde kedua konveks (*Second-Order Cone Constraint* / SOCP):

$$\bar{a}_i^T x + \Phi^{-1}(1 - \alpha_i) \cdot \|\Sigma_i^{1/2} x\|_2 \le b_i$$

Bentuk ini cembung (*strictly convex*) karena $\Phi^{-1}(1 - \alpha_i) > 0$ untuk $\alpha_i < 0.5$, sehingga menjamin ketercapaian solusi optimal global dengan algoritma *Interior-Point Method*.

```
      Ruang Feasible Deterministik vs Chance-Constrained SOCP
      
      x2 ^
         |         / (Linear Boundary Rata-rata E[a]^T x = b)
         |        /
         |       /     ) ) ) Margin Keamanan Non-Linear SOCP
         |      /     /      ||Sigma^(1/2) x|| * Phi^(-1)(1-alpha)
         |     /     /
         |    /     / 
         |   /     /    Ruang Feasible Chance-Constrained
         |  /     /
         +-------------------------------------------------> x1
```

### 2.4 Pendekatan Aproksimasi Berbasis Sampel (*Sample Average Approximation* - SAA) & Mixed-Integer Reformulation

Untuk distribusi acak non-parametrik atau data historis riil sebanyak $N$ skenario sampel $\{\xi^{(1)}, \xi^{(2)}, \dots, \xi^{(N)}\}$, kendala peluang dapat diaproksimasi menggunakan variabel biner indikator pelanggaran $z_s \in \{0, 1\}$:

$$a_i(\xi^{(s)})^T x \le b_i(\xi^{(s)}) + M \cdot z_s, \quad \forall s \in \{1, 2, \dots, N\}$$

$$\sum_{s=1}^N z_s \le \lfloor \alpha_i \cdot N \rfloor$$

$$z_s \in \{0, 1\}, \quad \forall s \in \{1, 2, \dots, N\}$$

di mana $M$ adalah konstanta skalar *Big-M* yang cukup besar.

### 2.5 Reformulasi Risiko Konveks: Value-at-Risk (VaR) dan Conditional Value-at-Risk (CVaR)

Untuk mengatasi sifat non-konveksitas dari batasan probabilitas empiris (*chance constraints with general distributions*), pendekatan modern menggunakan **Conditional Value-at-Risk** ($\text{CVaR}_\alpha$), yaitu nilai ekspektasi bersyarat kerugian yang melebihi ambang batas $\text{VaR}_\alpha$ (Rockafellar & Uryasev, 2000):

$$\text{CVaR}_\alpha(L(x, \xi)) = \min_{\gamma \in \mathbb{R}} \left\{ \gamma + \frac{1}{\alpha} \mathbb{E}\left[ \max(0, L(x, \xi) - \gamma) \right] \right\}$$

Dalam bentuk linear programming sampel skenario, kendala $\text{CVaR}_\alpha \le \text{RiskLimit}$ diformulasikan secara konveks:

$$\gamma + \frac{1}{\alpha N} \sum_{s=1}^N v_s \le \text{RiskLimit}$$

$$v_s \ge L(x, \xi^{(s)}) - \gamma, \quad v_s \ge 0, \quad \forall s \in \{1, \dots, N\}$$

---

## 3. Aplikasi Rekayasa Industri: Perencanaan Kapasitas & Agregat di Bawah Permintaan Acak

Dalam sistem perencanaan kapasitas manufaktur multi-produk dengan permintaan stokastik $\tilde{d}_k \sim \mathcal{N}(\mu_k, \sigma_k^2)$:
- $x_k$ : Volume produksi item $k$ yang dialokasikan.
- $h_k$ : Biaya simpan per unit kelebihan produksi.
- $p_k$ : Biaya penalti *backorder* / kekurangan produksi.
- $A_{j, k}$ : Konsumsi kapasitas mesin stasiun $j$ per unit produk $k$.
- $C_j$ : Kapasitas kerja mesin $j$ yang tersedia.

Manajer operasi menetapkan *Service Level Minimum* $1 - \alpha_k$ (misal $95\%$) untuk masing-masing item produk guna menjamin ketersediaan barang di pasar tanpa menimbun inventaris berlebih.

---

## 4. Algoritma Python Solver: Chance-Constrained & CVaR Production Planning

Berikut adalah modul solver Python berbasis komputasi matriks dan optimasi konveks linear untuk menyelesaikan masalah CCP deterministik ekuivalen dan reformulasi CVaR:

```python
import numpy as np
import math

def normal_cdf_inverse(p: float) -> float:
    """
    Aproksimasi numerik rasional presisi tinggi untuk fungsi kuantil Normal Standar (Acklam's algorithm).
    Menghitung Z-score = Phi^(-1)(p) dengan error absolut < 1.15e-9.
    """
    if p <= 0.0 or p >= 1.0:
        raise ValueError("Probabilitas p harus berada pada interval terbuka (0, 1)")
        
    # Koefisien aproksimasi rasional
    a = [-3.969683028665376e+01,  2.209460984245205e+02, -2.759285104469687e+02,
          1.383577518672690e+02, -3.066479806614716e+01,  2.506628277459239e+00]
    b = [-5.447609879822406e+01,  1.615858368580409e+02, -1.556989798598866e+02,
          6.680133647897810e+01, -1.328068155288572e+01]
    c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00,
         -2.549732539343734e+00,  4.374664141464968e+00,  2.938163982698783e+00]
    d = [ 7.784695709041462e-03,  3.224671290700398e-01,  2.445134137142996e+00,
          3.754408661907416e+00]

    p_low = 0.02425
    p_high = 1.0 - p_low

    if p < p_low:
        q = math.sqrt(-2.0 * math.log(p))
        return (((((c[0]*q + c[1])*q + c[2])*q + c[3])*q + c[4])*q + c[5]) / \
               ((((d[0]*q + d[1])*q + d[2])*q + d[3])*q + 1.0)
    elif p <= p_high:
        q = p - 0.5
        r = q * q
        return (((((a[0]*r + a[1])*r + a[2])*r + a[3])*r + a[4])*r + a[5]) * q / \
               (((((b[0]*r + b[1])*r + b[2])*r + b[3])*r + b[4])*r + 1.0)
    else:
        q = math.sqrt(-2.0 * math.log(1.0 - p))
        return -(((((c[0]*q + c[1])*q + c[2])*q + c[3])*q + c[4])*q + c[5]) / \
                ((((d[0]*q + d[1])*q + d[2])*q + d[3])*q + 1.0)

def solve_chance_constrained_production_plan():
    """
    Optimasi Perencanaan Produksi Stokastik Berbasis Chance Constraints (CCP)
    Meminimalkan biaya produksi linier dengan batas kapasitas mesin stasiun kerja
    serta kepastian pemenuhan service level permintaan stokastik normal.
    """
    # 1. Definisi Data Masalah
    # 4 Jenis Produk Industri: P1, P2, P3, P4
    products = [
        {"name": "Hydraulic Valve Block", "unit_cost": 45.0, "d_mean": 500, "d_std": 60, "target_sl": 0.95},
        {"name": "Pneumatic Actuator Cyl", "unit_cost": 32.0, "d_mean": 750, "d_std": 95, "target_sl": 0.95},
        {"name": "Electronic Control Box",  "unit_cost": 78.0, "d_mean": 320, "d_std": 45, "target_sl": 0.98},
        {"name": "Heavy Sensor Housing",   "unit_cost": 26.0, "d_mean": 1100, "d_std": 140, "target_sl": 0.90}
    ]
    
    # 3 Stasiun Kerja Utama (Kapasitas jam kerja per bulan)
    # Konsumsi jam kerja mesin per unit produk pada [Stasiun 1 (CNC), Stasiun 2 (Heat Treatment), Stasiun 3 (Assembly)]
    machining_hours = np.array([
        [1.2, 0.8, 2.0, 0.5],   # CNC Milling & Turning (Jam)
        [0.5, 0.4, 0.1, 0.3],   # Induction Heat Treatment (Jam)
        [0.8, 0.6, 1.2, 0.4]    # Precision Assembly & Testing (Jam)
    ])
    station_capacity = np.array([3200.0, 1200.0, 2200.0]) # Total Jam Tersedia
    
    num_prod = len(products)
    
    # 2. Perhitungan Batas Bawah Deterministik Ekuivalen CCP
    # x_k >= mu_k + Phi^(-1)(1 - alpha_k) * sigma_k
    min_required_x = np.zeros(num_prod)
    z_scores = np.zeros(num_prod)
    
    for k, p in enumerate(products):
        alpha_k = 1.0 - p["target_sl"]
        z_k = normal_cdf_inverse(p["target_sl"])
        z_scores[k] = z_k
        min_required_x[k] = p["d_mean"] + z_k * p["d_std"]
        
    # 3. Evaluasi Kelayakan Kapasitas Mesin terhadap Kebutuhan CCP
    required_capacity = np.dot(machining_hours, min_required_x)
    capacity_slack = station_capacity - required_capacity
    
    is_feasible = np.all(capacity_slack >= 0)
    
    # 4. Hitung Solusi Produksi Optimal
    # Mengingat c_k > 0 dan fungsi objektif adalah minimisasi sum(c_k * x_k),
    # solusi optimal adalah nilai batas bawah terkecil yang memenuhi chance constraints:
    optimal_production = min_required_x.copy()
    total_min_cost = sum(optimal_production[k] * products[k]["unit_cost"] for k in range(num_prod))
    
    # 5. Simulasi Monte Carlo Verifikasi Probabilitas Pemenuhan (N = 100,000 skenario)
    np.random.seed(42)
    num_simulations = 100000
    empirical_sl = np.zeros(num_prod)
    
    for k, p in enumerate(products):
        simulated_demands = np.random.normal(loc=p["d_mean"], scale=p["d_std"], size=num_simulations)
        # Service level tercapai jika produksi x_k >= permintaan acak
        fulfilled = np.sum(optimal_production[k] >= simulated_demands)
        empirical_sl[k] = (fulfilled / num_simulations) * 100.0
        
    return {
        "is_feasible": bool(is_feasible),
        "products": products,
        "z_scores": z_scores,
        "optimal_x": optimal_production,
        "deterministic_demand": [p["d_mean"] for p in products],
        "safety_buffer_units": optimal_production - np.array([p["d_mean"] for p in products]),
        "total_cost": total_min_cost,
        "capacity_used": required_capacity,
        "capacity_total": station_capacity,
        "capacity_utilization": (required_capacity / station_capacity) * 100.0,
        "empirical_sl": empirical_sl
    }

if __name__ == "__main__":
    res = solve_chance_constrained_production_plan()
    print("=== HASIL OPTIMASI STOCHASTIC CHANCE-CONSTRAINED PROGRAMMING (CCP) ===")
    print(f"Status Kelayakan Kapasitas Sistem : {'FEASIBLE (OPTIMAL)' if res['is_feasible'] else 'INFEASIBLE (OVERLOAD)'}")
    print(f"Total Biaya Minimum Produksi       : ${res['total_cost']:,.2f}\n")
    
    print(f"{'Nama Produk':<26} | {'E[Dem]':<6} | {'Z-Score':<7} | {'Target SL':<9} | {'Optimal X':<10} | {'Safety Buf':<10} | {'Empirical SL':<12}")
    print("-" * 95)
    for k, p in enumerate(res["products"]):
        print(f"{p['name']:<26} | {res['deterministic_demand'][k]:<6} | {res['z_scores'][k]:<7.3f} | {p['target_sl']*100:<8.1f}% | {res['optimal_x'][k]:<10.1f} | +{res['safety_buffer_units'][k]:<9.1f} | {res['empirical_sl'][k]:<11.2f}%")
        
    print("\nEvaluasi Pemanfaatan Kapasitas Stasiun Kerja:")
    station_names = ["Stasiun 1 (CNC Machining)", "Stasiun 2 (Heat Treatment)", "Stasiun 3 (Assembly & Test)"]
    for j in range(3):
        print(f" - {station_names[j]:<28} : {res['capacity_used'][j]:,.1f} / {res['capacity_total'][j]:,.1f} Jam ({res['capacity_utilization'][j]:.1f}%)")
```

---

## 5. Studi Kasus Industri: Alokasi Bahan Baku Petrokimia & Risiko Fluktuasi Kualitas

### 5.1 Latar Belakang Masalah
Sebuah kilang polimer industri memproduksi resin termoplastik kelas tinggi. Salah satu bahan baku utama (*feedstock additive*) memiliki konsentrasi monomer aktif $\tilde{\eta}$ yang berfluktuasi secara acak harian mengikuti distribusi Gaussian $\tilde{\eta} \sim \mathcal{N}(0.88, 0.04^2)$ akibat variasi sumber tambang.

Untuk menjamin densitas molekuler standar internasional (ISO 1133):
- Total monomer murni aktif yang masuk ke reaktor per batch harus memenuhi batas minimum: $\mathbb{P}\left( \tilde{\eta} \cdot X_{\text{feed}} \ge 400 \text{ kg} \right) \ge 0.99$ (*Service Level $99\%$*).
- Jika menggunakan pendekatan deterministik rata-rata ($\mathbb{E}[\eta] = 0.88$), operator hanya memasukkan $X_{\text{feed}} = 400 / 0.88 = 454.55\text{ kg}$. Namun pada kondisi nyata, batch mengalami *off-spec rejection* hingga $50\%$ dari waktu operasional!

### 5.2 Aplikasi Formulasi CCP
Dengan tingkat signifikansi risiko $\alpha = 0.01$ ($1 - \alpha = 0.99$):
$$Z_{0.99} = \Phi^{-1}(0.99) = 2.3263$$

Reformulasi deterministik ekuivalen:
$$X_{\text{feed}} \cdot \left( \mu_\eta - Z_{0.99} \cdot \sigma_\eta \right) \ge 400$$
$$X_{\text{feed}} \cdot \left( 0.88 - 2.3263 \times 0.04 \right) \ge 400$$
$$X_{\text{feed}} \cdot (0.88 - 0.09305) \ge 400 \implies X_{\text{feed}} \cdot (0.78695) \ge 400$$
$$X_{\text{feed}} \ge 508.29\text{ kg}$$

### 5.3 Analisis Komparatif Performa Kualitas Kilang
| Pendekatan Optimasi | Input Feedstock ($X_{\text{feed}}$) | Probabilitas Kualitas Lolos ($\ge 400\text{ kg}$) | Tingkat Scrap / Off-Spec | Biaya Rejection Bulanan |
| :--- | :--- | :--- | :--- | :--- |
| **Deterministik Rata-rata** | $454.55\text{ kg}$ | $50.00\%$ | **$50.00\%$ (Kritis)** | $\$84,000\text{ /bulan}$ |
| **Worst-Case Robust ($3\sigma$)**| $526.32\text{ kg}$ | $99.87\%$ | $0.13\%$ | $\$1,200\text{ /bulan}$ |
| **Chance-Constrained ($99\%$)** | $508.29\text{ kg}$ | **$99.00\%$** | **$1.00\%$ (Terkontrol)** | **$\$2,400\text{ /bulan}$** |

*Kesimpulan Manajerial*: Formulasi CCP memberikan proteksi kepatuhan mutu sebesar $99\%$ dengan penghematan bahan baku aditif sebesar $18.03\text{ kg per batch}$ ($3.42\%$) dibandingkan model robust deterministik ekstrem, menghasilkan penghematan modal kerja tahunan sebesar $\$142,000$.

---

## 6. Referensi Terverifikasi & Standar Akademis

1. **Charnes, A., & Cooper, W. W.** (1959). Chance-constrained programming. *Management Science*, 6(1), 73-79. DOI: [10.1287/mnsc.6.1.73](https://doi.org/10.1287/mnsc.6.1.73).
2. **Nemirovski, A., & Shapiro, A.** (2006). Convex approximations of chance constrained programs. *SIAM Journal on Optimization*, 17(4), 969-996. DOI: [10.1137/050622320](https://doi.org/10.1137/050622320).
3. **Rockafellar, R. T., & Uryasev, S.** (2000). Optimization of conditional value-at-risk. *Journal of Risk*, 2(3), 21-41. DOI: [10.21314/JOR.2000.038](https://doi.org/10.21314/JOR.2000.038).
4. **Prékopa, A.** (1995). *Stochastic Programming*. Kluwer Academic Publishers / Springer, Dordrecht. ISBN: 978-90-481-4560-7. DOI: [10.1007/978-94-017-3087-7](https://doi.org/10.1007/978-94-017-3087-7).
5. **Birge, J. R., & Louveaux, F.** (2011). *Introduction to Stochastic Programming* (2nd Edition). Springer Science & Business Media, New York. ISBN: 978-1-4614-0236-7. DOI: [10.1007/978-1-4614-0237-4](https://doi.org/10.1007/978-1-4614-0237-4).
