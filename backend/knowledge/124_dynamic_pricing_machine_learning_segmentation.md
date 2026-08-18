# 124. Dynamic Pricing with ML & Demand Segmentation

## Konsep Dasar
Dynamic Pricing adalah strategi penetapan harga yang menyesuaikan secara real-time berdasarkan kondisi pasar, permintaan, inventaris, dan perilaku konsumen. Dalam era digital, Machine Learning (ML) memungkinkan estimasi fungsi permintaan yang kompleks dan personalisasi harga pada level segmen mikro atau bahkan individu, melampaui model elastisitas tradisional.

## Formulasi Matematis

### Model Permintaan Stokastik
Permintaan $D(p, x)$ sebagai fungsi harga $p$ dan fitur kontekstual $x$:
$$ D(p, x) = f(p, x; \theta) + \epsilon $$
di mana $f(\cdot)$ dapat berupa model parametrik (log-linear, logit) atau non-parametrik (neural network, gradient boosting).

### Optimasi Harga Single-Period
$$ p^* = \arg\max_p \quad p \cdot \mathbb{E}[D(p, x)] - C(D(p, x)) $$
Untuk multi-period dengan inventory constraint:
$$ V_t(s) = \max_{p} \left\{ p \cdot \lambda(p) + \sum_{d=0}^{s} P(D=d|p) V_{t-1}(s-d) \right\} $$

### Demand Segmentation via Clustering
Partisi customer base $\mathcal{C}$ menjadi $K$ segmen:
$$ \min_{\{\mu_k\}} \sum_{k=1}^K \sum_{c \in S_k} \| x_c - \mu_k \|^2 $$
Setiap segmen $k$ memiliki price response function $f_k(p, x; \theta_k)$ yang diestimasi terpisah.

## Teknik Machine Learning
- **Causal Inference:** Double/Debiased ML (Chernozhukov et al.) untuk mengestimasi treatment effect harga tanpa bias confounding.
- **Contextual Bandits:** Explore-exploit tradeoff dalam pricing experiments online. LinUCB, Thompson Sampling.
- **Deep Demand Models:** LSTM/Transformer untuk temporal patterns; Graph Neural Networks untuk cross-product substitution effects.
- **Constrained Optimization:** Price fairness constraints, business rules (price floors/ceilings) sebagai regularizers atau hard constraints dalam training.

## Aplikasi di Industrial Engineering
- **Revenue Management:** Airlines, hotels, rental cars — capacity-constrained perishable assets.
- **E-commerce Retail:** Personalized discounts, flash sales, competitor-responsive pricing.
- **Ride-hailing & Logistics:** Surge pricing based on real-time supply-demand imbalance.
- **Energy Markets:** Time-of-use pricing and demand response programs.

## Referensi Terverifikasi
- Talluri, K., & van Ryzin, G. (2004). *The Theory and Practice of Revenue Management*. Springer.
- den Boer, A. V. (2015). Dynamic pricing and learning: historical origins, current research, and new directions. *Surveys in Operations Research and Management Science*, 20(1), 1–18.
- Misra, S., Schwartz, E. M., & Abernethy, J. (2023). Dynamic Online Pricing with Incomplete Information Using Multiarmed Bandit Experiments. *Marketing Science*, 42(2), 376–402.
- Chen, Y., & Hu, Z. (2024). Deep reinforcement learning for dynamic pricing and inventory control with unobserved confounders. *Management Science*, 70(5), 3124–3148.

</content>