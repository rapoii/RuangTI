# 124. Dynamic Pricing with ML & Demand Segmentation

## Kerangka Konseptual
Dynamic Pricing adalah penetapan harga adaptif yang diperbarui berdasarkan kondisi pasar real-time: permintaan, sisa inventaris, harga kompetitor, dan perilaku konsumen. Perbedaan mendasar dari revenue management klasik adalah **loop pembelajaran**: harga bukan hanya instrumen monetisasi tetapi juga eksperimen yang menghasilkan data untuk memperbaiki estimasi fungsi permintaan — menciptakan trade-off *exploration vs exploitation*. Machine Learning memungkinkan (1) estimasi demand non-parametrik dengan fitur kaya, (2) segmentasi mikro otomatis, dan (3) personalisasi diskon pada level individu, namun membuka risiko baru: bias seleksi (*endogeneity* — harga historis berkorelasi dengan shock demand), fairness pricing, dan *price discrimination* yang diatur regulasi. Di Uni Eropa (DSA) maupun Indonesia (POJK & UU PDP), transparansi algoritma dituntut sehingga arsitektur sistem wajib menyertakan audit trail keputusan harga per transaksi.

## Formulasi Matematis
### Model Permintaan Stokastik
Permintaan $D(p, x)$ sebagai fungsi harga $p$ dan fitur kontekstual $x$:
$$D(p, x) = f(p, x; \theta) + \epsilon$$
dengan $f(\cdot)$ parametrik (log-linear $D = e^{a - b p}$, multinomial logit atas alternatif produk) atau non-parametrik (gradient boosting, neural network). Elastisitas lokal: $\varepsilon_p = \frac{\partial D}{\partial p} \cdot \frac{p}{D}$.

### Optimasi Harga Single-Period
$$p^* = \arg\max_{p \in [\underline{p}, \bar{p}]} \quad p \cdot \mathbb{E}[D(p,x)] - C(D(p,x))$$
Kondisi orde pertama memberikan hubungan klasik markup–elastisitas (Lerner index): $\frac{p^* - MC}{p^*} = -\frac{1}{\varepsilon_p(p^*)}$.

### Multi-Period dengan Batasan Inventaris
Dinamika program stokastik (Bellman):
$$V_t(s) = \max_{p}\left\{ p\,\lambda(p) + \mathbb{E}_{D}\left[V_{t+1}\!\left(s - D\right)\right] \right\}, \quad V_T(s) = 0$$
dengan $s$ = sisa stok dan $\lambda(p)$ = intensitas demand Poisson pada harga $p$. Struktur solusi optimal pada kasus deterministik: *booking limit* menurun terhadap waktu.

### Segmentasi via Clustering
Partisi basis pelanggan $\mathcal{C}$ menjadi $K$ segmen (k-means / Gaussian mixture):
$$\min_{\{\mu_k\}} \sum_{k=1}^K \sum_{c \in S_k} \| x_c - \mu_k \|^2$$
Tiap segmen memiliki price-response $f_k(p, x;\theta_k)$ yang diestimasi terpisah; harga segmen ditetapkan independen selama arbitrase antar-segmen terkontrol.

## Metode Solusi & Teknik ML
- **Causal Inference:** Double/Debiased ML (Chernozhukov et al., 2018) mengestimasi treatment effect harga tanpa bias confounding; instrumental variables untuk endogenitas.
- **Contextual Bandits:** LinUCB dan Thompson Sampling menyeimbangkan eksplorasi harga baru vs eksploitasi harga optimal saat ini; regret bound $O(d\sqrt{T})$.
- **Deep Reinforcement Learning:** DDPG/SAC untuk kontrol harga-inventaris gabungan dengan state kontinu.
- **Constrained Optimization:** Price floor/ceiling, fairness constraint ($|p_i - p_j| \leq \delta$ untuk pelanggan serupa), dan business rules sebagai hard constraints.

## Aplikasi Industri
- **Revenue Management:** Airlines, hotel, rental car — kapasitas perishable dengan nested booking limits.
- **E-commerce Retail:** Diskon personal, flash sale, competitor-responsive repricing (Amazon ~2,5 juta repricing/hari).
- **Ride-hailing & Logistics:** Surge pricing berbasis ketidakseimbangan supply-demand spasial-temporal.
- **Energy Markets:** Time-of-use tariff dan program demand response industri.
- **Manufaktur B2B:** Quoting engine konfigurasi-produk dengan margin optimization per segmen channel.

## Modul Terkait
- **[130] Perishable Inventory** — integrasi pricing dengan deteriorasi stok.
- **[125] Strategic Sourcing** — cerminan pricing dari sisi pengadaan.
- Modul Revenue Management & Forecasting — fondasi demand forecasting.

## Referensi Terverifikasi
- Talluri, K., & van Ryzin, G. (2004). *The Theory and Practice of Revenue Management*. Springer.
- den Boer, A. V. (2015). Dynamic pricing and learning: historical origins, current research, and new directions. *Surveys in Operations Research and Management Science*, 20(1), 1–18.
- Misra, S., Schwartz, E. M., & Abernethy, J. (2023). Dynamic online pricing with incomplete information using multiarmed bandit experiments. *Marketing Science*, 42(2), 376–402.
- Chen, Y., & Hu, Z. (2024). Deep reinforcement learning for dynamic pricing and inventory control with unobserved confounders. *Management Science*, 70(5), 3124–3148.
