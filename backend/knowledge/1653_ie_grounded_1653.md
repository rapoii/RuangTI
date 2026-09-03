# 1653 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Daur Ulang Remanufaktur Baterai Lithium Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global (global EV market) yang diproyeksikan menembus 14 juta unit per tahun pada 2030 membawa konsekuensi logistik berupa limpahan baterai lithium-ion (LiB) bekas pakai (*retired power batteries*, RPB) dengan total estimasi mencapai 1,2 juta ton pada 2030 menurut *International Energy Agency* (IEA). Setelah degradasi kapasitas mencapai ambang 70–80% dari *state of health* (SoH), baterai RPB tidak lagi layak untuk aplikasi otomotif, namun masih memiliki potensi nilai ekonomis yang signifikan melalui dua jalur strategis: (i) *echelon utilization* (pemanfaatan bertingkat) sebagai *stationary energy storage system* (SESS) pada gardu induk fotovoltaik, *base transceiver station* telekomunikasi, maupun *behind-the-meter* industri, serta (ii) *recycling remanufacturing* berupa ekstraksi material kritis (Li, Co, Ni) dan fabrikasi *remanufactured cell* untuk aplikasi e-mobility kelas bawah. JIANG Lin & TANG Lidan (2025) [DOI: 10.52202/078960-0068] menekankan bahwa keputusan alokasi RPB antara kanal echelon dan kanal daur ulang menentukan profitabilitas total rantai pasok, sementara Shin, Kim & Jeong (2024) [DOI: 10.2139/ssrn.4934197] melengkapi kerangka tersebut dengan mekanisme *Return Management System* (RMS) yang robust terhadap fluktuasi harga material dan ketidakpastian tingkat pengembalian. Urgensi riset didorong oleh tiga faktor simultan: (a) tekanan regulasi *Extended Producer Responsibility* (EPR) di Uni Eropa dan *Electric Vehicle Power Battery Recycling Policy* di Tiongkok; (b) volatilitas harga kobalt dan litium yang menyentuh ±40% koefisien variasi triwulanan; serta (c) kebutuhan dekarbonisasi yang membuat *circular economy* baterai menjadi pilar ESG perusahaan manufaktur otomotif. Permasalahan riset yang diangkat adalah bagaimana merancang arsitektur keputusan terkoordinasi (harga, tingkat daur ulang τ, alokasi echelon α, dan upaya pengembalian konsumen) yang memaksimalkan profit gabungan rantai pasok di bawah ketidakpastian permintaan dan kapasitas回收 (*recovery capacity*).

## 2. Landasan Teori & Formulasi Matematis

Model rujukan mengikuti arsitektur *Stackelberg-Nash* dengan satu manufaktur (*leader*), satu retailer perakitan EV (*follower*), satu operator echelon (EO), dan satu fasilitas daur ulang (RF) mengikuti JIANG & TANG (2025). Parameter dan variabel keputusan didefinisikan sebagai berikut:

- $w$ = harga grosir baterai baru (CNY/kWh)
- $p$ = harga ritel ke konsumen akhir
- $c_m$ = biaya produksi marginal baterai baru
- $c_r$ = biaya remanufaktur per kWh
- $c_e$ = biaya konversi echelon per kWh
- $\tau \in [0,1]$ = rasio pengumpulan RPB (*collection rate*)
- $\alpha \in [0,1]$ = fraksi RPB dialokasikan ke echelon, $(1-\alpha)$ dialokasikan ke daur ulang material
- $g$ = subsidi pemerintah per kWh RPB yang dikembalikan

Fungsi permintaan-deterministik mengikuti bentuk linier yang lazim di pustaka CLSC:

$$D(p) = a - b\,p, \quad a>0,\; b>0$$

dengan tambahan elastisitas terhadap *recycling effort* $e \ge 0$:

$$D(p,e) = a - b\,p + \rho\,e, \quad 0 \le \rho < b$$

Fungsi profit setiap agen ditulis:

$$\Pi_M = (w - c_m)D - c_{rec}\,\tau D + g\,\tau D + (p_m - c_m^{r})\,(1-\alpha)\tau D \cdot \eta$$

$$\Pi_R = (p - w)D - \frac{\kappa\,e^2}{2}$$

$$\Pi_{EO} = (p_e - c_e)\,\alpha\,\tau D \cdot \delta$$

$$\Pi_{RF} = (p_m - c_m^{r})\,(1-\alpha)\tau D \cdot \eta + v\,(1-\alpha)\tau D$$

dengan $\eta$ = efisiensi yield daur ulang material (0,90–0,95), $\delta$ = rasio kapasitas echelon per kWh (0,70–0,85), $\kappa$ = koefisien biaya investasi回收, $v$ = nilai residu material. Profit total rantai pasok:

$$\Pi_{SC} = \Pi_M + \Pi_R + \Pi_{EO} + \Pi_{RF}$$

Untuk menangani ketidakpastian permintaan dan harga material, Shin, Kim & Jeong (2024) memperkenalkan *robust counterpart* dengan himpunan ketidakpastian *box-plus-budget* ala Bertsimas–Sim:

$$\mathcal{U} = \left\{ u \in \mathbb{R}^{n} \,\middle|\, \|u\|_\infty \le 1,\; \sum_{i=1}^{n} |u_i| \le \Gamma \right\}$$

sehingga masalah keputusan berubah menjadi:

$$\max_{(w,p,\tau,\alpha,e) \in \mathcal{X}}\; \min_{u \in \mathcal{U}} \; \Pi_{SC}(w,p,\tau,\alpha,e;\,\bar{D}+u,\, \bar{c}_r+u)$$

dengan $\bar{D}$ dan $\bar{c}_r$ sebagai nilai nominal, dan $\Gamma$ adalah *budget of uncertainty* (0 ≤ Γ ≤ n). Kondisi optimalitas KKT untuk subproblem *min* menghasilkan dual variabel $\lambda_i$ dan $\mu$, sehingga robust counterpart ekuivalen dengan:

$$\max_{x} \left\{ \Pi_{SC}(x) - \Gamma\,\pi - \sum_{i=1}^{n} \lambda_i \right\}$$

dengan $\pi$ = variabel auxilear sesuai struktur linearisasi worst-case.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan industri mengikuti SOP enam-tahap yang disintesis dari kedua literatur:

1. **Karakterisasi RPB** — Pengukuran SoH via *hybrid pulse power characterization* (HPPC) dan kapasitas residual $C_{res} = C_{nom}\cdot(1-\sigma_{deg})$ untuk mengklasifikasikan baterai ke kelas A (echelon layak), B (remanufaktur), atau C (daur ulang material).
2. **Desain *Take-Back Network*** — Penetapan *collection center* dengan radius ekonomis $R_{eco} = \sqrt{A/\pi}$ dengan $A$ = luas cakupan, mengikuti model *gravitational* dari Shin *et al.* (2024).
3. **Pemodelan Keputusan Hierarkis** — Penyelesaian model Stackelberg dengan *backward induction*: retailer terlebih dahulu memilih $p$ dan $e$ untuk memaksimumkan $\Pi_R$ diberikan $w$, kemudian manufaktur memilih $(w,\tau,\alpha)$.
4. **Optimasi Robust** — Validasi solusi melalui simulasi Monte Carlo (≥10.000 iterasi) di atas himpunan $\mathcal{U}$.
5. **Implementasi RMS** — Integrasi platform IT berbasis *blockchain ledger* untuk traceability setiap batch RPB (ISO 21434 & UN R100 compliance).
6. **Kontrol & Audit** — Pemantauan KPI: *collection rate* τ, *echelon yield* α·δ, *material recovery* (1-α)·η, dan *carbon abatement* (tCO₂e/kWh).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Ambil satu operator OEM besar di pasar domestik dengan parameter berikut (representatif industri baterai 2025):

| Parameter | Nilai | Unit |
|---|---|---|
| $a$ | 5.000.000 | unit/tahun |
| $b$ | 15.000 | unit/(CNY·tahun) |
| $c_m$ | 480 | CNY/kWh |
| $c_r$ | 320 | CNY/kWh |
| $c_e$ | 180 | CNY/kWh |
| $\rho$ | 8.000 | unit/(CNY·tahun) per unit e |
| $\kappa$ | 50.000 | CNY·tahun/(unit·e²) |
| $\eta$ | 0,92 | – |
| $\delta$ | 0,80 | – |
| $g$ | 60 | CNY/kWh |
| $\Gamma$ | 2 | – |

**Langkah 1 — Penentuan $p$ optimal retailer.** Given $w=720$ CNY/kWh, kondisi FOC $\partial \Pi_R/\partial p = 0$ menghasilkan:

$$p^* = \frac{a + b\,w}{2b} = \frac{5.000.
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
