# 2821 — Strategi Closed-Loop Supply Chain untuk Baterai Power Bekas: Pemanfaatan Bertingkat (Echelon Utilization) dan Daur Ulang Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan rantai pasok baru yang fundamental: bagaimana mengelola **agelombang pensiun (retirement wave)** baterai lithium-ion dalam volume masif. Berdasarkan proyeksi International Energy Agency (IEA, 2024), lebih dari **2 juta ton baterai lithium-ion** akan mencapai akhir siklus pakai pertamanya antara 2025–2040, dengan Tiongkok sebagai episentrum manufaktur dan daur ulang. Baterai pensiun ini — umumnya didefinisikan sebagai baterai dengan *State of Health* (SoH) ≤ 70–80% kapasitas awal — **bukanlah limbah**, melainkan *resources* dengan nilai intrinsik yang harus dipulihkan melalui dua jalur utama: **pemanfaatan bertingkat (echelon/cascade utilization)** dan **daur ulang manufaktur (recycling remanufacturing)**.

JIANG Lin & TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) dalam karya mereka yang dipublikasikan di *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* secara eksplisit memposisikan keputusan ini sebagai masalah **closed-loop supply chain (CLSC)** yang kompleks, di mana seorang *original equipment manufacturer* (OEM) atau *battery manufacturer* harus secara simultan menentukan strategi pengembalian, alokasi antara echelon utilization versus recycling, dan harga dalam struktur *Stackelberg*. Urgensi operasional makin nyata karena kapasitas daur ulang saat ini (global ~< 200.000 ton/tahun) masih jauh di bawah backlog pensiun baterai, menciptakan *bottleneck* struktural.

Secara bersamaan, Youngchul Shin, Gwang Kim, dan Yoonjea Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menyoroti bahwa ketidakpastian permintaan baterai baru, volatilitas harga logam (litium, kobalt, nikel), serta *return rate* yang tidak deterministik menjadikan model CLSC konvensional tidak robust. Mereka mengusulkan kerangka **robust closed-loop supply chain dengan return management system** yang relevan dengan konteks baterai bekas.

Dari perspektif **rekayasa sistem industri**, isu ini bukan sekadar masalah lingkungan, melainkan keputusan optimasi multi-objektif yang melibatkan: (1) *trade-off* margin antara penjualan baterai baru dan recovery value baterai bekas; (2) investasi kapasitas *echelon utilization* (misalnya *second-life* untuk *stationary energy storage system*/SESS) versus kapasitas *hydrometallurgical/pyrometallurgical recycling*; serta (3) koordinasi insentif antara OEM, retailer, dan third-party recycler (3PR). Tanpa formulasi kuantitatif yang rigorous, keputusan ini rentan terhadap inefisiensi alokasi modal yang signifikan — diestimasikan mencapai 15–25% kerugian nilai terhadap potensi *total recoverable value*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Pemain CLSC (Stackelberg Game)

Mengikuti kerangka JIANG & TANG (2025), model melibatkan tiga *decision-maker*:

- **Manufacturer (M)** — *leader* yang menentukan *wholesale price* $w$ untuk baterai baru dan *subsidy* $s$ untuk pengembalian baterai bekas.
- **Retailer (R)** — *follower* yang menentukan *retail price* $p$ untuk konsumen akhir dan *collection effort* $\tau \in [0,1]$.
- **Third-Party Recycler (3PR)** — menerima baterai bekas, memilih proporsi **echelon utilization** ($\alpha$) versus **recycling** ($1-\alpha$).

### 2.2 Fungsi Permintaan dan Pengembalian

Permintaan baterai baru dimodelkan sebagai fungsi *price-dependent*:

$$D(p) = a - b\,p + \theta, \quad \theta \sim \mathcal{U}[-\Delta, +\Delta]$$

dengan $a, b > 0$ adalah parameter sensitivitas dan $\theta$ adalah *uncertainty factor*. Sebaliknya, return rate baterai bekas dimodelkan:

$$R(p, \tau) = \tau\,(c + d\,\eta_{\text{SoH}}), \quad \eta_{\text{SoH}} \in [\underline{\eta}, \bar{\eta}]$$

di mana $\eta_{\text{SoH}}$ adalah *expected state-of-health* yang tidak deterministik — aspek yang ditangani Shin et al. (2024) melalui formulasi *robust counterpart*.

### 2.3 Fungsi Profit

**Profit Manufacturer:**
$$\pi_M = (w - c_m)\,D(p) - s\,R(p,\tau) + \lambda_{\text{recycle}}\,(1-\alpha)\,R(p,\tau)$$

**Profit Retailer:**
$$\pi_R = (p - w)\,D(p) + s\,R(p,\tau) - \frac{1}{2}k\tau^2$$

**Profit 3PR (Echelon + Recycling):**
$$\pi_{3PR} = \underbrace{\alpha\,R(p,\tau)\,v_e}_{\text{echelon revenue}} + \underbrace{(1-\alpha)\,R(p,\tau)\,(r_{\text{Li}}q_{\text{Li}} + r_{\text{Co}}q_{\text{Co}} + r_{\text{Ni}}q_{\text{Ni}})}_{\text{recycling material recovery}} - C_{3PR}(\alpha)$$

dengan $c_m$ = biaya produksi baterai baru, $v_e$ = nilai jual *second-life battery*, $r_i$ dan $q_i$ = harga pasar dan *recovery yield* material $i \in \{\text{Li, Co, Ni}\}$.

### 2.4 Formulasi Robust Counterpart

Shin et al. (2024) mengusulkan *robust optimization* untuk menangani ketidakpastian $\eta_{\text{SoH}}$:

$$\max_{\alpha, w, p} \min_{\theta \in \mathcal{U}} \pi_{\text{total}}(w, p, \alpha, \tau; \theta)$$

yang diselesaikan melalui transformasi *worst-case equivalent*:

$$\min_{\theta} (a - b\,p + \theta)^2 \quad \Longrightarrow \quad \theta^* = -\Delta$$

sehingga fungsi tujuan robust menjadi:

$$\pi_{\text{robust}} = (w - c_m)(a - b\,p - \Delta) + \lambda_{\text{recycle}}\,(1-\alpha)\,R_{\min}$$

### 2.5 Kendala Kapasitas dan Konservasi Aliran

$$\alpha\,R(p,\tau) \leq K_e, \quad (1-\alpha)\,R(p,\tau) \leq K_r$$

dengan $K_e$ = kapasitas fasilitas echelon dan $K_r$ = kapasitas recycler.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses CLSC Baterai Bekas

Berdasarkan sintesis dari kedua paper, *end-to-end process flow* yang direkomendasikan adalah:

```
┌──────────────────────────────────────────────────────────────────┐
│  STAGE 1: FORWARD CHAIN                                         │
│  Material Supplier → Cell Manufacturer → Pack Assembler →       │
│  OEM → Retailer → EV Consumer                                     │
└──────────────────────────────────────────────────────────────────┘
                              ↓ (Battery Retirement, SoH ≤ 70-80%)
┌──────────────────────────────────────────────────────────────────┐
│  STAGE 2: COLLECTION & TRIAGE                                    │
│  - Reverse logistics network (dealer/3PL pickup)                 │
│  - Initial health screening (SoH test, IR measurement)           │
│  - Sorting: Grade A (echelon-eligible) vs Grade B (recycle)      │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│  STAGE 3: ECHELON UTILIZATION (Second-Life)                      │
│  Target: Stationary Storage / Low-Speed EV / Telecom Backup     │
│  - Repackaging (module-to-pack reconfig)                          │
│  - BMS upgrade                                                   │
│  - Certification per GB/T 34014-2017 (China) / UL 1974 (US)     │
└──────────────────────────────────────────────────────────────────┘
                              ↓ (End-of-2nd-life)
┌──────────────────────────────────────────────────────────────────┐
│  STAGE 4: RECYCLING (Pyro + Hydro)                               │
│  - Disassembly → Shredding → Black mass → Hydrometallurgy       │
│  - Recovery: Li₂CO₃, NiSO₄, CoSO₄                                │
│  - Closed-loop to Stage 1                                        │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Penentuan Alokasi Echelon vs Recycle

1. **Step A — Pengujian SoH menggunakan kapasitas discharge pada C/3 rate**; baterai dengan SoH ≥ 70% masuk *echelon candidate pool*.
2. **Step B — Cost-Benefit Analysis:** Hitung NPV echelon (umur pakai 5–8 tahun sebagai SESS) vs nilai material回收回收 pada jalur recycle.
3. **Step C — Optimasi $\alpha^*$** melalui algoritma *backward induction* Stackelberg: Manufacturer → Retailer → 3PR.
4. **Step D — Robust scenario testing** dengan memvariasikan $\theta \in [-\Delta, +\Delta]$ dan $\eta_{\text{SoH}} \in [\underline{\eta}, \bar{\eta}]$ (mengikuti metodologi Shin et al., 2024).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Industri Realistis (EV Battery CLSC, 2025 baseline)

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Intercept permintaan | $a$ | 500.000 | unit/tahun |
| Sensitivitas harga | $b$ | 1.200 | unit/(juta Rp) |
| Biaya produksi baterai | $c_m$ | 180 |