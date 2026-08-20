# Modul 496: Economic Production Quantity (EPQ) dengan Item Kualitas Tidak Sempurna, Laju Screening Penuh, dan Pendekatan Renewal-Reward Salameh-Jaber

## 1. Pengantar & Latar Belakang Masalah

Dalam model persediaan klasik seperti **Economic Order Quantity (EOQ)** oleh Ford W. Harris (1913) dan **Economic Production Quantity (EPQ)** oleh E.W. Taft (1918), terdapat asumsi fundamental yang sangat restriktif: *seluruh unit yang diproduksi atau diterima dianggap memiliki kualitas sempurna 100% (zero defects)*. Pada realitas lantai pabrik manufaktur modern (*machining*, semikonduktor, *plastic injection molding*, pengerjaan logam lembaran, dan proses kimia), proses produksi selalu tunduk pada degradasi mesin, keausan perkakas (*tool wear*), ketidakmurnian bahan baku, serta fluktuasi operator manusia. Akibatnya, sebagian proporsi barang yang dihasilkan merupakan **produk berkualitas tidak sempurna (imperfect quality items)** atau cacat (*defective*).

```
+--------------------------------------------------------------------------------------------------+
|      PARADIGMA EPQ KLASIK (TAFT 1918) VS EPQ IMPERFECT QUALITY (SALAMEH & JABER 2000)          |
+--------------------------------------------------------------------------------------------------+
| ASUMSI KLASIK:                                                                                   |
|  [ Batch Ukuran y ] ---> [ 100% Produk Sempurna ] ---> [ Memenuhi Permintaan Pelanggan D ]       |
|                                                                                                  |
| REALITAS INDUSTRI (SALAMEH & JABER):                                                             |
|  [ Batch Ukuran y ] ---> [ Proses Screening Laju x ]                                            |
|                                |                                                                 |
|                                +---> [ (1 - p) y Produk Sempurna ] ---> [ Permintaan Pasar D ]  |
|                                |                                                                 |
|                                +---> [ p y Produk Cacat/Imperfect ] ---> [ Pasar Sekunder s ]   |
|                                                                          (Diskon di Akhir t_1)   |
+--------------------------------------------------------------------------------------------------+
```

Model perintis yang merevolusi teori persediaan stokastik untuk masalah ini diajukan oleh **Salameh dan Jaber (2000)** dalam *International Journal of Production Economics*, yang kemudian disempurnakan secara matematis menggunakan **Teori Pembaruan (*Renewal-Reward Theorem*)** oleh **Maddah dan Jaber (2008)**.

Dalam model ini:
1. Setiap siklus persediaan memesan atau memproduksi batch sebesar $y$ unit.
2. Setiap lot mengandung proporsi cacat acak $p$ yang mengikuti fungsi kepekatan peluang (*probability density function*) $f(p)$ pada rentang $[0, p_{max}]$.
3. Dilakukan proses penyortiran/inspeksi 100% (*screening process*) dengan laju screening konstan $x$ unit per satuan waktu ($x > D$).
4. Unit yang lolos seleksi (kualitas sempurna) langsung dialirkan untuk memenuhi permintaan pasar dengan laju $D$.
5. Unit cacat dipisahkan dan dijual sekaligus sebagai satu lot tunggal pada akhir masa inspeksi $t_1 = y / x$ ke pasar sekunder (*salvage/secondary market*) dengan harga diskon $s < c$.

---

## 2. Formulasi Matematis & Dinamika Persediaan

### A. Geometri Profil Persediaan

Diberikan parameter sistem industri:
- $y$: Ukuran lot pesanan / produksi (variabel keputusan, unit).
- $D$: Laju permintaan pasar (*demand rate*, unit/tahun).
- $x$: Laju screening/inspeksi (*screening rate*, unit/tahun), dengan syarat kestabilan $x > D$.
- $p$: Fraksi cacat dalam lot (variabel acak kontinu, $0 \le p \le p_{max} < 1 - D/x$).
- $K$: Biaya tetap pemesanan atau setup mesin (*fixed setup cost*, $\text{Rp/siklus}$).
- $c$: Biaya pengadaan / manufaktur per unit ($\text{Rp/unit}$).
- $c_s$: Biaya inspeksi / screening per unit ($\text{Rp/unit}$).
- $h$: Biaya simpan per unit per satuan waktu ($\text{Rp/unit/tahun}$).
- $s$: Nilai sisa / harga jual produk imperfect di pasar sekunder per unit ($\text{Rp/unit}$).
- $v$: Harga jual produk kualitas sempurna per unit ($\text{Rp/unit}$).

```
+--------------------------------------------------------------------------------------------------+
|                    PROFIL TINGKAT PERSEDIAAN SEPANJANG SATU SIKLUS T                             |
+--------------------------------------------------------------------------------------------------+
|  Tingkat Persediaan I(t)                                                                         |
|      ^                                                                                           |
|    y |                                                                                           |
|      |\                                                                                          |
|      | \ (Penurunan laju D saat inspeksi berlangsung)                                            |
|      |  \                                                                                        |
|      |   \                                                                                       |
|      |    \                                                                                      |
|      |     \ | <-- Penjualan mendadak unit imperfect (py) pada t_1 = y/x                        |
|      |      \|                                                                                   |
|      |       +                                                                                   |
|      |        \                                                                                  |
|      |         \ (Penurunan laju D untuk sisa stok sempurna)                                     |
|      |          \                                                                                |
|      |           \                                                                               |
|      |            \                                                                              |
|    0 +-------------+----------------------------------------------------------> Waktu (t)        |
|      0            t_1 = y/x                                                 T                    |
|                                                                                                  |
|      |<--Inspeksi->|<----------------- Masa Konsumsi Stok Sisa ------------->|                   |
+--------------------------------------------------------------------------------------------------+
```

### B. Durasi Waktu Inspeksi dan Siklus

Waktu yang dibutuhkan untuk menyelesaikan inspeksi seluruh batch $y$:
$$t_1 = \frac{y}{x}$$

Jumlah unit berkualitas sempurna dalam batch adalah $(1 - p)y$. Unit-unit ini digunakan untuk memenuhi permintaan konsumen dengan laju $D$. Oleh karena itu, panjang total satu siklus persediaan $T$ adalah:
$$T = \frac{(1 - p)y}{D}$$

Agar tidak terjadi kekurangan persediaan (*shortages / stockout*) selama masa inspeksi, jumlah unit sempurna yang ditemukan selama interval $t_1$ harus mampu mencukupi permintaan selama interval tersebut:
$$(1 - p)y \ge D \cdot t_1 = D \cdot \frac{y}{x} \implies 1 - p \ge \frac{D}{x} \implies p \le 1 - \frac{D}{x}$$
Sehingga batas atas fraksi cacat yang diizinkan adalah:
$$p_{max} \le 1 - \frac{D}{x}$$

---

## 3. Analisis Biaya & Total Keuntungan (Renewal-Reward Theorem)

### A. Evaluasi Luas Area Persediaan Kumulatif

Total biaya simpan ditentukan oleh akumulasi integral tingkat persediaan terhadap waktu selama satu siklus. Profil persediaan terdiri dari dua komponen:
1. **Persediaan Produk Kualitas Sempurna**:
   Tingkat persediaan awal efektif adalah $(1 - p)y$, yang menurun secara linier dengan laju $D$ hingga mencapai 0 pada waktu $T = (1 - p)y / D$. Luas segitiga persediaan ini adalah:
   $$A_1 = \frac{1}{2} \cdot \left[ (1 - p)y \right] \cdot T = \frac{(1 - p)^2 y^2}{2D}$$

2. **Persediaan Produk Kualitas Tidak Sempurna (Imperfect Items)**:
   Unit cacat dipisahkan secara bertahap selama interval $[0, t_1]$ dan disimpan hingga waktu $t_1 = y/x$ sebelum dijual sekaligus. Pada waktu $t_1$, akumulasi unit cacat mencapai $py$. Luas trapesium/segitiga penahanan unit cacat selama periode screening adalah:
   $$A_2 = \frac{p y \cdot t_1}{2} = \frac{p y^2}{2x}$$

Total waktu penahanan persediaan per siklus adalah:
$$A(y, p) = A_1 + A_2 = \frac{(1 - p)^2 y^2}{2D} + \frac{p y^2}{2x}$$

### B. Total Pendapatan dan Total Biaya per Siklus

Untuk satu siklus pembaruan (*renewal cycle*), diperoleh:
- **Total Pendapatan per Siklus, $R(y, p)$**:
  $$R(y, p) = v (1 - p)y + s p y$$

- **Total Biaya per Siklus, $C(y, p)$**:
  $$C(y, p) = K + c y + c_s y + h \left[ \frac{(1 - p)^2 y^2}{2D} + \frac{p y^2}{2x} \right]$$

- **Keuntungan Total per Siklus, $\Pi(y, p)$**:
  $$\Pi(y, p) = R(y, p) - C(y, p) = v(1 - p)y + spy - K - (c + c_s)y - h y^2 \left[ \frac{(1 - p)^2}{2D} + \frac{p}{2x} \right]$$

### C. Koreksi Maddah-Jaber via Teori Pembaruan (Renewal-Reward Theorem)

Dalam makalah asli Salameh dan Jaber (2000), nilai harapan keuntungan per satuan waktu dihitung dengan membagi $\mathbb{E}[\Pi(y, p)]$ dengan $\mathbb{E}[T]$, yakni:
$$\text{Pendekatan Klasik}: \quad \text{ECU}(y) = \frac{\mathbb{E}[\Pi(y, p)]}{\mathbb{E}[T]}$$

Maddah dan Jaber (2008) membuktikan secara rigor bahwa berdasarkan **Renewal Reward Theorem**, keuntungan jangka panjang per satuan waktu yang tepat ($\text{TPU}_\infty$) secara probabilistik adalah:
$$\lim_{t \to \infty} \frac{\Pi(t)}{t} = \frac{\mathbb{E}[\Pi(y, p)]}{\mathbb{E}[T]}$$

Dengan menghitung nilai ekspektasi:
$$\mathbb{E}[T] = \frac{(1 - \mathbb{E}[p]) y}{D}$$
$$\mathbb{E}[\Pi(y, p)] = \left[ v(1 - \mathbb{E}[p]) + s \mathbb{E}[p] - (c + c_s) \right] y - K - h y^2 \left[ \frac{\mathbb{E}[(1 - p)^2]}{2D} + \frac{\mathbb{E}[p]}{2x} \right]$$

Maka fungsi ekspektasi keuntungan per satuan waktu $E[\text{TPU}(y)]$ adalah:
$$\mathbb{E}[\text{TPU}(y)] = \frac{\mathbb{E}[\Pi(y, p)]}{\mathbb{E}[T]} = D \left[ v + \frac{s \mathbb{E}[p] - (c + c_s)}{1 - \mathbb{E}[p]} \right] - \frac{K D}{(1 - \mathbb{E}[p]) y} - \frac{h y D}{1 - \mathbb{E}[p]} \left[ \frac{\mathbb{E}[(1 - p)^2]}{2D} + \frac{\mathbb{E}[p]}{2x} \right]$$

Definisikan konstanta penyederhana:
$$\Phi = \frac{\mathbb{E}[(1 - p)^2]}{2D} + \frac{\mathbb{E}[p]}{2x}$$

Fungsi keuntungan dapat dituliskan secara elegan:
$$\mathbb{E}[\text{TPU}(y)] = D \left[ v + \frac{s \mathbb{E}[p] - (c + c_s)}{1 - \mathbb{E}[p]} \right] - \frac{K D}{(1 - \mathbb{E}[p])} \cdot \frac{1}{y} - \frac{h D \Phi}{1 - \mathbb{E}[p]} \cdot y$$

### D. Optimasi Ukuran Lot Ekonomis Optimal ($y^*$)

Untuk memaksimumkan $\mathbb{E}[\text{TPU}(y)]$, kita turunkan terhadap $y$ dan samakan dengan nol:
$$\frac{d \, \mathbb{E}[\text{TPU}(y)]}{dy} = \frac{K D}{(1 - \mathbb{E}[p]) y^2} - \frac{h D \Phi}{1 - \mathbb{E}[p]} = 0$$

$$\frac{K D}{(1 - \mathbb{E}[p]) y^2} = \frac{h D \Phi}{1 - \mathbb{E}[p]}$$

$$y^{*2} = \frac{K}{h \Phi}$$

$$y^* = \sqrt{\frac{K}{h \Phi}} = \sqrt{\frac{2 K}{h \left[ \frac{\mathbb{E}[(1 - p)^2]}{D} + \frac{\mathbb{E}[p]}{x} \right]}}$$

Uji turunan kedua untuk konveksitas/kecekungan:
$$\frac{d^2 \, \mathbb{E}[\text{TPU}(y)]}{dy^2} = -\frac{2 K D}{(1 - \mathbb{E}[p]) y^3} < 0 \quad (\forall y > 0)$$
Karena turunan kedua selalu negatif, fungsi $\mathbb{E}[\text{TPU}(y)]$ bersifat *strictly concave*, menjamin bahwa $y^*$ adalah titik maksimum global yang unik.

---

## 4. Analisis Kasus Distribusi Kontinu

Jika fraksi cacat $p$ berdistribusi seragam kontinu (*Uniform Distribution*) $p \sim \mathcal{U}[0, \beta]$ dengan $0 < \beta \le 1 - D/x$:
1. $\mathbb{E}[p] = \frac{\beta}{2}$
2. $\mathbb{E}[p^2] = \int_{0}^{\beta} \frac{p^2}{\beta} dp = \frac{\beta^2}{3}$
3. $\mathbb{E}[(1 - p)^2] = 1 - 2\mathbb{E}[p] + \mathbb{E}[p^2] = 1 - \beta + \frac{\beta^2}{3}$

Maka parameter $\Phi$ bernilai:
$$\Phi = \frac{1 - \beta + \beta^2/3}{2D} + \frac{\beta}{4x}$$

---

## 5. Implementasi Algoritma & Solver Python

Berikut adalah modul Python lengkap untuk menyelesaikan model EPQ Imperfect Quality Salameh-Jaber dan Maddah-Jaber, termasuk simulasi Monte Carlo, analisis sensitivitas fraksi cacat, dan perbandingan terhadap model EOQ klasik.

```python
"""
RuangTI - Industrial Engineering Optimization Engine
Modul 496: EPQ with Imperfect Quality Items (Salameh-Jaber & Maddah-Jaber Models)
"""

import numpy as np
import scipy.integrate as integrate
from dataclasses import dataclass
from typing import Dict, Any, Tuple

@dataclass
class EPQImperfectParams:
    demand_rate: float        # D (unit/tahun)
    screening_rate: float     # x (unit/tahun, x > D)
    setup_cost: float         # K (Rp/setup)
    unit_cost: float          # c (Rp/unit)
    screening_cost: float     # c_s (Rp/unit)
    holding_cost: float       # h (Rp/unit/tahun)
    selling_price: float      # v (Rp/unit)
    salvage_price: float      # s (Rp/unit, s < c)
    p_max: float              # Batas atas fraksi cacat (Uniform [0, p_max])

class SalamehJaberSolver:
    def __init__(self, params: EPQImperfectParams):
        self.p = params
        self._validate_parameters()

    def _validate_parameters(self):
        if self.p.screening_rate <= self.p.demand_rate:
            raise ValueError("Laju screening x harus lebih besar dari laju permintaan D!")
        max_allowed_p = 1.0 - (self.p.demand_rate / self.p.screening_rate)
        if self.p.p_max > max_allowed_p:
            raise ValueError(f"p_max ({self.p.p_max:.4f}) melebihi batas kestabilan tanpa stockout ({max_allowed_p:.4f})!")

    def calculate_moments_uniform(self) -> Tuple[float, float, float]:
        """Menghitung E[p], E[p^2], dan E[(1-p)^2] untuk Uniform[0, p_max]."""
        beta = self.p.p_max
        e_p = beta / 2.0
        e_p2 = (beta ** 2) / 3.0
        e_1_minus_p_sq = 1.0 - beta + (beta ** 2) / 3.0
        return e_p, e_p2, e_1_minus_p_sq

    def solve_optimal_policy(self) -> Dict[str, Any]:
        """Menghitung lot size optimal y*, panjang siklus T*, dan profit tahunan TPU*."""
        e_p, e_p2, e_1_minus_p_sq = self.calculate_moments_uniform()
        
        # Faktor Phi
        phi = (e_1_minus_p_sq / (2.0 * self.p.demand_rate)) + (e_p / (2.0 * self.p.screening_rate))
        
        # Ukuran lot ekonomis optimal y*
        y_opt = np.sqrt(self.p.setup_cost / (self.p.holding_cost * phi))
        
        # Ekspektasi panjang siklus E[T]
        e_t = (1.0 - e_p) * y_opt / self.p.demand_rate
        
        # Waktu screening t_1
        t_1 = y_opt / self.p.screening_rate
        
        # Ekspektasi Keuntungan Tahunan E[TPU]
        revenue_term = self.p.demand_rate * (
            self.p.selling_price + (self.p.salvage_price * e_p - (self.p.unit_cost + self.p.screening_cost)) / (1.0 - e_p)
        )
        setup_cost_term = (self.p.setup_cost * self.p.demand_rate) / ((1.0 - e_p) * y_opt)
        holding_cost_term = (self.p.holding_cost * self.p.demand_rate * phi * y_opt) / (1.0 - e_p)
        
        expected_tpu = revenue_term - setup_cost_term - holding_cost_term
        
        # Perbandingan dengan EOQ Klasik (mengabaikan imperfect items)
        y_classic = np.sqrt(2.0 * self.p.demand_rate * self.p.setup_cost / self.p.holding_cost)
        
        return {
            "optimal_lot_size_y": float(y_opt),
            "classic_eoq_y": float(y_classic),
            "lot_size_inflation_pct": float((y_opt - y_classic) / y_classic * 100.0),
            "expected_cycle_time_years": float(e_t),
            "expected_cycle_time_days": float(e_t * 365.0),
            "screening_time_days": float(t_1 * 365.0),
            "expected_tpu_annual": float(expected_tpu),
            "expected_imperfect_fraction": float(e_p),
            "phi_factor": float(phi)
        }

    def run_monte_carlo_validation(self, n_cycles: int = 20000, seed: int = 42) -> Dict[str, float]:
        """Validasi simulasi stokastik Monte Carlo untuk memverifikasi Renewal-Reward."""
        np.random.seed(seed)
        res = self.solve_optimal_policy()
        y = res["optimal_lot_size_y"]
        
        p_samples = np.random.uniform(0, self.p.p_max, n_cycles)
        
        total_rewards = []
        total_durations = []
        
        for p_val in p_samples:
            # Durasi siklus aktual
            cycle_time = (1.0 - p_val) * y / self.p.demand_rate
            
            # Pendapatan dan biaya per siklus
            rev = self.p.selling_price * (1.0 - p_val) * y + self.p.salvage_price * p_val * y
            cost_setup = self.p.setup_cost
            cost_purch = (self.p.unit_cost + self.p.screening_cost) * y
            hold_area = ((1.0 - p_val)**2 * y**2 / (2.0 * self.p.demand_rate)) + (p_val * y**2 / (2.0 * self.p.screening_rate))
            cost_holding = self.p.holding_cost * hold_area
            
            profit = rev - (cost_setup + cost_purch + cost_holding)
            total_rewards.append(profit)
            total_durations.append(cycle_time)
            
        simulated_tpu = np.sum(total_rewards) / np.sum(total_durations)
        analytical_tpu = res["expected_tpu_annual"]
        error_pct = abs(simulated_tpu - analytical_tpu) / analytical_tpu * 100.0
        
        return {
            "simulated_tpu": float(simulated_tpu),
            "analytical_tpu": float(analytical_tpu),
            "relative_error_pct": float(error_pct)
        }

if __name__ == "__main__":
    params = EPQImperfectParams(
        demand_rate=50000.0,      # 50.000 unit/tahun
        screening_rate=175200.0,   # 175.200 unit/tahun (1 unit per 3 menit operasi)
        setup_cost=1500000.0,      # Rp 1.500.000 per setup lot
        unit_cost=25000.0,         # Rp 25.000 per unit
        screening_cost=1500.0,     # Rp 1.500 per unit screening
        holding_cost=5000.0,       # Rp 5.000 per unit/tahun
        selling_price=50000.0,     # Rp 50.000 per unit produk baik
        salvage_price=18000.0,     # Rp 18.000 per unit produk cacat
        p_max=0.15                 # Maksimal 15% cacat (Uniform [0, 0.15])
    )
    
    solver = SalamehJaberSolver(params)
    results = solver.solve_optimal_policy()
    mc_val = solver.run_monte_carlo_validation(n_cycles=50000)
    
    print("=== HASIL OPTIMASI EPQ IMPERFECT QUALITY (SALAMEH-JABER / MADDAH-JABER) ===")
    for k, v in results.items():
        print(f"{k:30s}: {v:15.4f}")
        
    print("\n=== VALIDASI TEOREMA PEMBARUAN (MONTE CARLO) ===")
    for k, v in mc_val.items():
        print(f"{k:30s}: {v:15.4f}")
```

---

## 6. Studi Kasus Industri: Manufaktur Komponen Otomotif Presisi

### Profil Kasus
PT Presisi Otomotif Nusantara memproduksi bushing suspensi berbahan paduan aluminium untuk OEM perakitan mobil. Data operasional lini:
- Permintaan tahunan ($D$): $50.000\text{ unit/tahun}$.
- Kapasitas stasiun *Coordinate Measuring Machine (CMM)* otomatis ($x$): $175.200\text{ unit/tahun}$.
- Biaya persiapan mesin CNC ($K$): $\text{Rp } 1.500.000\text{ per setup}$.
- Biaya manufaktur langsung ($c$): $\text{Rp } 25.000\text{ per unit}$.
- Biaya inspeksi dimensional ($c_s$): $\text{Rp } 1.500\text{ per unit}$.
- Biaya simpan tahunan ($h$): $\text{Rp } 5.000\text{ per unit/tahun}$.
- Harga jual suku cadang standar OEM ($v$): $\text{Rp } 50.000\text{ per unit}$.
- Harga lelang unit *imperfect* ke pabrik daur ulang peleburan ($s$): $\text{Rp } 18.000\text{ per unit}$.
- Proporsi produk cacat berdistribusi seragam $p \sim \mathcal{U}[0, 0.15]$ (rata-rata $\mathbb{E}[p] = 7,5\%$).

### Perhitungan Langkah demi Langkah:
1. **Pemeriksaan Syarat Kestabilan**:
   $$p_{max} = 0.15 \le 1 - \frac{50.000}{175.200} = 1 - 0.2854 = 0.7146 \quad (\text{Memenuhi syarat tanpa stockout})$$

2. **Momen Probabilitas**:
   $$\mathbb{E}[p] = \frac{0.15}{2} = 0.075$$
   $$\mathbb{E}[(1 - p)^2] = 1 - 0.15 + \frac{0.15^2}{3} = 0.85 + 0.0075 = 0.8575$$

3. **Faktor $\Phi$**:
   $$\Phi = \frac{0.8575}{2 \times 50.000} + \frac{0.075}{2 \times 175.200} = 8.575 \times 10^{-6} + 0.214 \times 10^{-6} = 8.789 \times 10^{-6}$$

4. **Ukuran Lot Optimal ($y^*$)**:
   $$y^* = \sqrt{\frac{1.500.000}{5.000 \times 8.789 \times 10^{-6}}} = \sqrt{\frac{1.500.000}{0.043945}} \approx 5.842\text{ unit}$$

5. **Perbandingan dengan EOQ Klasik ($y_{classic}$)**:
   $$y_{classic} = \sqrt{\frac{2 \times 50.000 \times 1.500.000}{5.000}} = \sqrt{30.000.000} \approx 5.477\text{ unit}$$
   *Temuan Manajerial*: Ukuran lot optimal dengan item imperfect lebih besar $+6.66\%$ daripada model klasik untuk mengompensasi unit cacat yang disortir keluar dari aliran permintaan utama.

---

## 7. Rangkuman & Pedoman Implementasi Praktisi

| Dimensi Parameter | Pengaruh Kenaikan Parameter terhadap Lot $y^*$ | Implikasi Kebijakan Manajerial di Lantai Produksi |
| :--- | :--- | :--- |
| **Rata-rata Fraksi Cacat ($\mathbb{E}[p]$)** | Meningkat ($\uparrow$) | Perusahaan harus memproduksi lot lebih besar sebagai bantalan (*buffer*) atas produk cacat yang terbuang. |
| **Laju Screening ($x$)** | Menurun perlahan ($\downarrow$) | Semakin cepat inspeksi, semakin singkat waktu simpan unit cacat, mengurangi biaya penahanan holding. |
| **Biaya Screening ($c_s$)** | Tidak mengubah $y^*$, Menurunkan Profit | Memicu urgensi investasi otomatisasi visual AI untuk menekan biaya inspeksi satuan. |
| **Nilai Sisa / Salvage ($s$)** | Tidak mengubah $y^*$, Menaikkan Profit | Negosiasi kontrak penjualan limbah ke industri sekunder memaksimalkan pengembalian modal. |

---

## 8. Referensi Terverifikasi (Academic References)

1. **Salameh, M. K., & Jaber, M. Y.** (2000). Economic production quantity model for items with imperfect quality. *International Journal of Production Economics*, 64(1-3), 59-64. [DOI: 10.1016/s0925-5273(99)00044-4](https://doi.org/10.1016/s0925-5273(99)00044-4)
2. **Maddah, B., & Jaber, M. Y.** (2008). Economic order quantity for items with imperfect quality: Revisited. *International Journal of Production Economics*, 112(2), 808-815. [DOI: 10.1016/j.ijpe.2007.07.003](https://doi.org/10.1016/j.ijpe.2007.07.003)
3. **Konstantaras, I., Skouri, K., & Jaber, M. Y.** (2012). Inventory models for imperfect quality items with shortages and learning in inspection. *Applied Mathematical Modelling*, 36(11), 5334-5343. [DOI: 10.1016/j.apm.2011.12.005](https://doi.org/10.1016/j.apm.2011.12.005)
4. **Montgomery, D. C.** (2020). *Introduction to Statistical Quality Control* (8th ed.). John Wiley & Sons, New York.
5. **Silver, E. A., Pyke, D. F., & Thomas, D. J.** (2016). *Inventory and Production Management in Supply Chains* (4th ed.). CRC Press, Boca Raton.
