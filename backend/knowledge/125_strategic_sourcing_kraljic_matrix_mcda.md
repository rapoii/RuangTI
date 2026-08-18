# 125. Strategic Sourcing & Kraljic Portfolio Matrix

## Konsep Dasar
Strategic Sourcing adalah pendekatan sistematis untuk mengelola pengeluaran pengadaan dengan menyelaraskan strategi pembelian terhadap karakteristik pasar pasokan dan pentingnya material bagi organisasi. Framework paling fundamental adalah **Kraljic Portfolio Matrix** (1983), yang mengklasifikasikan item pengadaan ke dalam empat kuadran berdasarkan dua dimensi: **Profit Impact** dan **Supply Risk**.

Pendekatan modern mengintegrasikan Kraljic dengan **Multi-Criteria Decision Analysis (MCDA)** untuk evaluasi supplier yang lebih komprehensif, melampaui kriteria harga tunggal.

## Formulasi Matematis

### Kraljic Matrix Classification
$$
\text{Quadrant}(i) = f(\text{ProfitImpact}_i, \text{SupplyRisk}_i)
$$

| Kuadran | Profit Impact | Supply Risk | Strategi |
|---------|--------------|-------------|----------|
| **Non-Critical** | Rendah | Rendah | Efisiensi administratif, e-procurement |
| **Leverage** | Tinggi | Rendah | Competitive bidding, volume consolidation |
| **Bottleneck** | Rendah | Tinggi | Secure supply, backup suppliers, inventory buffer |
| **Strategic** | Tinggi | Tinggi | Partnership, co-development, long-term contracts |

### MCDA Supplier Evaluation (TOPSIS Example)
Normalized decision matrix $r_{ij}$:
$$ r_{ij} = \frac{x_{ij}}{\sqrt{\sum_{k=1}^m x_{kj}^2}} $$

Weighted normalized matrix $v_{ij} = w_j \cdot r_{ij}$. Ideal solutions:
$$ A^+ = \{v_1^+, \dots, v_n^+\}, \quad A^- = \{v_1^-, \dots, v_n^-\} $$

Relative closeness to ideal:
$$ C_i = \frac{d_i^-}{d_i^+ + d_i^-}, \quad 0 \leq C_i \leq 1 $$

Supplier dengan $C_i$ tertinggi direkomendasikan.

### Positioning Index Quantification
Untuk menempatkan item secara objektif di matriks Kraljic:
$$ PI_i = \alpha \cdot \hat{P}_i + (1-\alpha) \cdot \hat{R}_i $$
di mana $\hat{P}_i, \hat{R}_i$ adalah normalized scores dari profit impact dan supply risk, dan $\alpha$ merefleksikan preferensi strategis perusahaan.

## Aplikasi di Industrial Engineering
- Kategoriisasi ribuan SKU/MRO items untuk diferensiasi strategi pengadaan.
- Evaluasi dan seleksi supplier menggunakan AHP/TOPSIS/PROMETHEE.
- Pengembangan supplier development programs berdasarkan kuadran.
- Integrasi sustainability criteria (green sourcing) ke dalam MCDA framework.
- Digital procurement dashboards dengan real-time risk monitoring.

## Referensi Terverifikasi
- Kraljic, P. (1983). Purchasing Must Become Supply Management. *Harvard Business Review*, 61(5), 109–117.
- Van Weele, A. J. (2018). *Purchasing and Supply Chain Management* (7th ed.). Cengage.
- Rezaei, J., Fahimnia, B., & Sarkis, J. (2023). Green supplier selection using multi-criteria decision making methods: A systematic literature review. *Journal of Cleaner Production*, 389, 136048.
- Gupta, H., & Barua, M. K. (2024). Strategic sourcing under Industry 4.0: Integrating digital maturity with Kraljic portfolio model. *International Journal of Production Economics*, 268, 109102.

</content>