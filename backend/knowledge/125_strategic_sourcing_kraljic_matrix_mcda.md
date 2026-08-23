# 125. Strategic Sourcing & Kraljic Portfolio Matrix

## Kerangka Konseptual
Strategic Sourcing adalah proses sistematis menganalisis belanja pengadaan (*spend analysis*), segmentasi item, dan menyelaraskan strategi pembelian dengan karakteristik pasar pasokan. Framework paling berpengaruh adalah **Kraljic Portfolio Matrix** (Kraljic, 1983) yang memetakan item pada dua dimensi: **Profit Impact** (kontribusi terhadap biaya/value added) dan **Supply Risk** (kompleksitas pasar, ketergantungan pemasok, risiko gangguan). Klasifikasi empat kuadran menghasilkan preskripsi strategi yang berbeda fundamental — kesalahan penempatan kuadran (mis. memperlakukan item strategis sebagai routine) berbiaya sangat tinggi.

Pendekatan modern mengintegrasikan Kraljic dengan **MCDA** (AHP, TOPSIS, PROMETHEE) untuk menempatkan item secara objektif dari data spend + risk scoring multi-kriteria, serta memperluas dimensi ketiga: keberlanjutan (*green sourcing*) dan kesiapan digital pemasok.

## Formulasi Matematis
### Skor Dua Dimensi & Klasifikasi Kuadran
Skor ternormalisasi min-max untuk item $i$:
$$\hat{P}_i = \frac{PI_i - \min_k PI_k}{\max_k PI_k - \min_k PI_k}, \quad \hat{R}_i = \frac{SR_i - \min_k SR_k}{\max_k SR_k - \min_k SR_k}$$
Threshold klasifikasi dapat disesuaikan dengan median atau titik potong cluster (2-means per dimensi):
$$\text{Quadrant}(i) = f(\hat{P}_i \gtrless t_P,\; \hat{R}_i \gtrsim t_R)$$

| Kuadran | Profit Impact | Supply Risk | Strategi Dominan |
|---------|--------------|-------------|------------------|
| **Non-Critical** | Rendah | Rendah | Efisiensi administratif, e-procurement catalog |
| **Leverage** | Tinggi | Rendah | Competitive bidding, volume consolidation, combinatorial auction |
| **Bottleneck** | Rendah | Tinggi | Secure supply, backup sourcing, buffer inventory |
| **Strategic** | Tinggi | Tinggi | Partnership, co-development, long-term contract |

### Evaluasi Supplier MCDA — TOPSIS
Matriks keputusan $m$ supplier $\times$ $n$ kriteria dinormalisasi vektor:
$$r_{ij} = \frac{x_{ij}}{\sqrt{\sum_{k=1}^m x_{kj}^2}}, \qquad v_{ij} = w_j \cdot r_{ij}$$
Solusi ideal positif/negatif dan jarak Euclidean:
$$d_i^+ = \sqrt{\sum_j (v_{ij} - v_j^+)^2}, \quad d_i^- = \sqrt{\sum_j (v_{ij} - v_j^-)^2}$$
Relative closeness:
$$C_i = \frac{d_i^-}{d_i^+ + d_i^-} \in [0,1]$$
Bobot $w_j$ diturunkan via AHP (eigenvector) dengan consistency ratio $CR < 0{,}1$, atau entropy method untuk objektivitas data-driven. Untuk basis $m > 100$ supplier, pairwise comparison penuh tidak praktis → dipakai pendekatan hybrid: clustering awal berbasis spend data, lalu AHP hanya antar representative cluster.

## Metode Solusi
- **AHP/ANP weighting:** Pairwise comparison antar kriteria profit impact dan supply risk.
- **TOPSIS/PROMETHEE ranking:** Pemeringkatan supplier dalam tiap kuadran.
- **Cluster Analysis:** Segmentasi otomatis ribuan SKU MRO tanpa threshold manual.
- **Monte Carlo Simulation:** Stress-test posisi item terhadap volatilitas harga dan lead time.
- **Digital Procurement Analytics:** Dashboards real-time risk monitoring dengan NLP news scraping.

## Aplikasi Industri
- Kategorisasi ribuan SKU/MRO untuk diferensiasi strategi pengadaan di manufaktur diskrit.
- Seleksi supplier komponen otomotif multi-tier dengan kriteria ESG.
- Supplier development program: bottleneck items diprioritaskan dual-sourcing.
- Integrasi sustainability criteria (carbon footprint per unit) ke dalam MCDA.
- Contract portfolio management: durasi kontrak optimal per kuadran — Strategic dikontrak 3–5 tahun dengan gain-sharing, Non-Critical memakai e-catalog spot buying.

## Modul Terkait
- **[122] Procurement Auctions & VCG** — mekanisme lelang kombinasi untuk kuadran Leverage.
- **[192] Outranking Methods (PROMETHEE/ELECTRE)** — alternatif non-compensatory ranking.
- Modul Supply Chain Risk Management — kuantifikasi supply risk dimension.

## Referensi Terverifikasi
- Kraljic, P. (1983). Purchasing must become supply management. *Harvard Business Review*, 61(5), 109–117.
- Van Weele, A. J. (2018). *Purchasing and Supply Chain Management* (7th ed.). Cengage.
- Rezaei, J., Fahimnia, B., & Sarkis, J. (2023). Green supplier selection using multi-criteria decision making methods: A systematic literature review. *Journal of Cleaner Production*, 389, 136048.
- Gupta, H., & Barua, M. K. (2024). Strategic sourcing under Industry 4.0: Integrating digital maturity with Kraljic portfolio model. *International Journal of Production Economics*, 268, 109102.
