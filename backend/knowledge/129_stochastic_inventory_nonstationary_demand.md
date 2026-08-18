# 129. Stochastic Inventory with Non-Stationary Demand

## Konsep Dasar
Model inventori klasik (EOQ, newsvendor) mengasumsikan permintaan stasioner atau i.i.d. Dalam praktik, permintaan sering kali **non-stasioner**: memiliki tren, musiman, siklus bisnis, atau perubahan struktural akibat promosi, peluncuran produk baru, atau fase end-of-life. Mengabaikan non-stasioneritas menyebabkan stockout kronis atau overstocking sistematis.

Pendekatan modern menggabungkan **forecasting adaptif** dengan **optimasi inventori dinamis**, di mana parameter kebijakan (reorder point, order-up-to level) diperbarui setiap periode berdasarkan estimasi demand distribution terkini.

## Formulasi Matematis

### Model Permintaan Non-Stasioner
$$ D_t = \mu_t + \epsilon_t, \quad \epsilon_t \sim \mathcal{N}(0, \sigma_t^2) $$
di mana $\mu_t$ dan $\sigma_t$ berubah terhadap waktu. Contoh proses:
- **Random Walk:** $\mu_t = \mu_{t-1} + \eta_t$
- **Seasonal ARIMA:** $(1-B)(1-B^s)\Phi(B)y_t = \Theta(B)\epsilon_t$
- **State Space / Kalman Filter:** $\mu_t = F\mu_{t-1} + w_t$, $D_t = H\mu_t + v_t$

### Dynamic Order-Up-To Policy
Untuk finite horizon $T$ dengan biaya holding $h$, shortage $p$, dan setup $K$:
$$ V_t(x) = \min_{y \geq x} \left\{ K\delta(y-x) + c(y-x) + L_t(y) + \alpha \mathbb{E}[V_{t+1}(y-D_t)] \right\} $$
di mana $L_t(y) = h\mathbb{E}[(y-D_t)^+] + p\mathbb{E}[(D_t-y)^+]$.

Jika $K=0$, optimal policy adalah base-stock: order up to $S_t^*$ yang memenuhi:
$$ F_{D_t}(S_t^*) = \frac{p - c(1-\alpha)}{p + h} $$
dengan $F_{D_t}$ adalah CDF permintaan lead-time pada periode $t$.

### Adaptive Safety Stock
Safety stock dinamis menyesuaikan variabilitas forecast error:
$$ SS_t = z_\alpha \cdot \hat{\sigma}_{L,t} $$
di mana $\hat{\sigma}_{L,t}$ diestimasi dari residual forecast terkini (bukan historical average statis). Exponentially weighted moving variance:
$$ \hat{\sigma}_t^2 = \lambda e_t^2 + (1-\lambda)\hat{\sigma}_{t-1}^2 $$

## Metode Forecasting untuk Inventori
- **Exponential Smoothing (Holt-Winters):** Tren + musiman, cocok untuk SKU-level.
- **Kalman Filter:** Optimal untuk linear Gaussian state space; update rekursif.
- **ML-Based:** Gradient boosting, LSTM untuk capture nonlinear patterns & external regressors.
- **Bayesian Updating:** Posterior predictive distribution untuk uncertainty quantification.

## Aplikasi di Industrial Engineering
- Perencanaan inventori ritel dengan seasonal demand patterns.
- Spare parts management dengan intermittent/lumpy demand (Croston's method, TSB).
- New product introduction: forecasting tanpa historical data (analogi, Bass diffusion).
- End-of-life inventory: declining demand dengan obsolescence risk.

## Referensi Terverifikasi
- Silver, E. A., Pyke, D. F., & Thomas, D. J. (2016). *Inventory and Production Management in Supply Chains* (4th ed.). CRC Press.
- Syntetos, A. A., Boylan, J. E., & Croston, J. (2023). On the bias of intermittent demand estimates. *International Journal of Production Economics*, 257, 108789.
- Petropoulos, F., & Svetunkov, I. (2024). The Theta model: A decomposition approach to forecasting and inventory management. *European Journal of Operational Research*, 312(1), 1–18.
- Chen, L., & Li, X. (2025). Machine learning for non-stationary demand forecasting and inventory optimization: A unified framework. *Computers & Industrial Engineering*, 202, 110934.

</content>