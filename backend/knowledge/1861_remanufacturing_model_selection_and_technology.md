# 1861 — Seleksi Model Remanufaktur dan Adopsi Teknologi pada Rantai Pasok Tertutup (Closed-Loop Supply Chain) dengan Mempertimbangkan Penghindaran Risiko Konsumen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Remanufacturing Model Selection and Technology Adoption of Closed-Loop Supply Chain Considering Consumer Risk Aversion
**Jurnal & Sitasi Utama:** Jianhua Yang, Na Liu, Wei Wang (2024). *Journal of Systems Science and Systems Engineering*. DOI: [https://doi.org/10.1007/s11518-026-5749-1](https://doi.org/10.1007/s11518-026-5749-1)
**Sitasi Pendukung:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok tertutup (*Closed-Loop Supply Chain*/CLSC) merupakan arsitektur logistik yang mengintegrasikan aliran maju (*forward logistics*) dari produsen ke konsumen dengan aliran mundur (*reverse logistics*) berupa pengembalian produk *end-of-life* (EOL) untuk didaur ulang, diremajakan, atau diretas sesuai dengan prinsip ekonomi sirkular (Yang, Liu, & Wang, 2024). Dalam dua dekade terakhir, transformasi menuju CLSC tidak lagi dipandang sebagai inisiatif lingkungan semata, melainkan sebagai strategi korporat untuk memulihkan nilai tambah, mengurangi ketergantungan pada bahan baku kritis, serta membangun *barrier to entry* yang berkelanjutan. Studi Yang, Liu, dan Wang (2024) yang dipublikasikan di *Journal of Systems Science and Systems Engineering* menyoroti satu dimensi strategis yang selama ini luput dari literatur CLSC konvensional: bagaimana **penghindaran risiko konsumen** (*consumer risk aversion*) ikut membentuk keputusan seleksi model remanufaktur dan adopsi teknologi (*technology adoption*) pada rantai nilai tertutup.

Konteks industri yang melatari riset ini sangat relevan dengan pasar *high-tech* seperti peralatan medis, semikonduktor, dan *power battery* kendaraan listrik (EV). Konsumen produk remanufaktur (*remanufactured products*) secara perseptual membedakan kualitasnya dengan produk baru, sehingga muncul risiko kinerja yang dipersepsikan (*perceived performance risk*). Risiko ini tidak homogen; sebagian konsumen *risk-neutral* dan sebagian lagi *risk-averse*. Perilaku ini termanifestasi dalam permintaan pasar (*market demand*) yang sensitif terhadap selisih kualitas, harga, dan parameter kepekaan risiko. Studi JIANG Lin dan TANG Lidan (2025) yang dipublikasikan dalam *Proceedings of the 14th International Conference on Logistics and Systems Engineering* menunjukkan bahwa pada konteks baterai EV *retired*, keputusan antara *echelon utilization* (pemanfaatan bertingkat, mis. untuk *stationary storage*) versus *recycling remanufacturing* sangat bergantung pada tingkat degradasi State of Health (SoH) baterai dan preferensi konsumen industri hilir, yang secara intrinsik juga memiliki komponen penghindaran risiko. Kedua paper secara simultan meneguhkan bahwa pemilihan model remanufaktur tidak bisa dipisahkan dari perilaku prosumer dan struktur risiko pasarnya.

Urgensi operasional dari riset ini dapat diukur dari beberapa indikator makro. Menurut basis data *Circularity Gap Reporting* dan tinjauan sistematis yang dirujuk oleh Yang, Liu, dan Wang (2024), potensi pemulihan material pada CLSC secara global dapat mencapai 4–8% dari konsumsi bahan baku industri manufaktur, namun realisasi aktualnya masih di bawah 2% karena ketidakselarasan keputusan antara *original equipment manufacturer* (OEM), *third-party remanufacturer* (TPR), dan konsumen. Adopsi teknologi seperti *advanced disassembly*, *Industry 4.0 traceability*, dan *blockchain-based provenance verification* menjadi katalis, tetapi memerlukan keputusan investasi (*capital expenditure*) yang kuantitatif. Tanpa kerangka keputusan yang memasukkan dimensi perilaku konsumen, investasi teknologi sering kali salah alokasi dan tidak menghasilkan *net present value* (NPV) positif. Oleh sebab itu, modul 1861 ini membahas secara komprehensif arsitektur keputusan CLSC yang mengintegrasikan preferensi risiko, adopsi teknologi, dan strategi remanufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Pasar dan Permintaan dengan Penghindaran Risiko

Paper Yang, Liu, dan Wang (2024) memformalkan permintaan pasar sebagai fungsi yang terdekomposisi menjadi komponen *reference demand* dan komponen *risk-driven discount*. Untuk produk baru dan produk remanufaktur, permintaan dasar mengikuti bentuk linier klasik:

$$D_n(p_n) = a - b p_n, \qquad D_r(p_r) = a - b p_r$$

dengan $D_n$ dan $D_r$ berturut-turut adalah permintaan produk baru (*new*) dan remanufaktur (*remanufactured*), $a > 0$ adalah *market potential*, $b > 0$ adalah sensitivitas harga, serta $p_n$ dan $p_r$ adalah harga jual eceran. Untuk memperhitungkan *consumer risk aversion*, paper memperkenalkan koefisien $\alpha \in [0,1]$ yang merepresentasikan fraksi konsumen *risk-averse* dan selisih persepsi kualitas $\Delta q = q_n - q_r \geq 0$. Permintaan efektif produk remanufaktur dimodifikasi menjadi:

$$D_r^{eff}(p_r, \alpha) = \left[ (1-\alpha)(a - b p_r) + \alpha \cdot \beta(a - b p_r - \gamma \Delta q) \right]^+$$

dengan $\beta \in (0,1)$ adalah parameter *trust coefficient* terhadap platform/jaminan kualitas, $\gamma > 0$ adalah bobot diskonto risiko, dan operator $[\cdot]^+$ memastikan permintaan non-negatif. Variabel $\alpha$ menjadi parameter kritis yang menentukan elastisitas permintaan remanufaktur terhadap strategi harga dan kualitas.

### 2.2 Model Utilitas Konsumen dengan *Expected Utility Theory*

Untuk konsumen *risk-averse*, paper menggunakan fungsi utilitas eksponensial (*constant absolute risk aversion*/CARA):

$$U(\omega) = -e^{-\rho \omega}, \qquad \rho > 0$$

dengan $\omega$ adalah *wealth outcome* pasca-konsumsi dan $\rho$ adalah koefisien *absolute risk aversion*. *Expected utility* konsumen ketika membeli produk remanufaktur dengan probabilitas kinerja baik sebesar $q_r$ dan probabilitas kinerja buruk $(1 - q_r)$ adalah:

$$EU_r = q_r \cdot U(\omega_{good}) + (1-q_r) \cdot U(\omega_{bad})$$

Konsumen *risk-neutral* hanya memaksimalkan $\mathbb{E}[\omega] = q_r \omega_{good} + (1-q_r) \omega_{bad}$, sedangkan konsumen CARA mendiskonto ekspektasi tersebut dengan *certainty equivalent*:

$$\omega_{CE} = -\frac{1}{\rho} \ln\left[ q_r e^{-\rho \omega_{good}} + (1-q_r) e^{-\rho \omega_{bad}} \right]$$

Selisih $\omega_{CE} - \mathbb{E}[\omega]$ merepresentasikan *risk premium* yang bersedia dibayar konsumen, dan menjadi dasar diskonto harga pada permintaan pasar.

### 2.3 Fungsi Profit dan Struktur Permainan Stackelberg

Permainan keputusan CLSC diformulasikan sebagai *two-stage Stackelberg game* di mana OEM bertindak sebagai *leader* dan TPR (atau retailer) sebagai *follower*. Fungsi profit OEM adalah:

$$\pi_{OEM} = (w_n - c_n) D_n + (w_r - c_n + \delta c_r) D_r^{eff} - K \cdot \eta^2$$

dengan $w_n, w_r$ adalah harga grosir, $c_n$ biaya produksi baru, $c_r$ biaya remanufaktur dengan parameter pemulihan $\delta \in [0,1]$, $K$ adalah biaya investasi teknologi, dan $\eta \in [0,1]$ adalah tingkat adopsi teknologi (*technology adoption level*). Term kuadratik $K \eta^2$ merepresentasikan *convex adoption cost*, konsisten dengan literatur *technology diffusion* (Bass, 1969) yang dirujuk oleh Yang et al. (2024). Profit retailer:

$$\pi_{R} = (p_n - w_n) D_n + (p_r - w_r) D_r^{eff}$$

### 2.4 Model *Echelon Utilization* untuk Baterai EV (JIANG Lin & TANG Lidan, 2025)

Untuk konteks baterai retired, JIANG Lin dan TANG Lidan (2025) memformalkan keputusan *echelon utilization* sebagai berikut. Misal $s \in [0,1]$ adalah *state of health* (SoH) baterai retired. Jika $s \geq s^*$ (ambang utilisasi), baterai diarahkan ke *echelon* (mis. *stationary energy storage*); jika $s < s^*$, baterai di-*recycling*. Fungsi nilai baterai pada *echelon*:

$$V_e(s) = \int_0^{T} e^{-rt} \cdot P(s) \cdot \pi_e \, dt - C_{retrofit}(s)$$

dengan $P(s)$ kapasitas daya efektif, $\pi_e$ *margin* per kWh, dan $C_{retrofit}$ biaya retrofit. Nilai daur ulang (*recycling*) material:

$$V_r = \sum_{m \in \{Li, Ni, Co\}} q_m \cdot p_m - C_{process}$$

Keputusan optimal terjadi saat $V_e(s) \geq V_r$, dengan memperhatikan risiko degradasi lanjutan dan preferensi *risk aversion* pembeli *echelon*.

### 2.5 Keputusan Seleksi Model Remanufaktur

Model diskrit yang diperkenalkan Yang et al. (2024) mempertimbangkan tiga opsi remanufaktur: **Model A** (*OEM in-house remanufacturing*), **Model B** (*OEM outsources to TPR*), dan **Model C** (*hybrid*). Pemilihan model ditentukan oleh perbandingan *total cost-to-serve* (TCS):

$$\text{TCS}_k = \sum_{i \in \{c,w,p,r\}} c_i^{(k)} + \text{RiskCost}^{(k)}(\alpha) + \text{TechCost}^{(k)}(\eta), \quad k \in \{A,B,C\}$$

$$\text{RiskCost}^{(k)}(\alpha) = \alpha \cdot \mathbb{E}\left[ (p_r - c_r^{(k)}) \cdot |D_r^{eff}(p_r, \alpha) - D_r^{eff}(p_r, 0)| \right]$$

dan dipilih model $k^*$ yang memaksimalkan $\pi_{OEM}$ jangka panjang dengan kendala partisipasi (*participation constraint*) TPR/retailer: $\pi_R^{(k^*)} \geq \pi_R^{\min}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Prosedur CLSC Berisiko-Sadar

Implementasi industri mengikuti SOP 6-tahap berikut, yang diturunkan dari arsitektur keputusan pada bagian 2:

```
[FASE 1] Segmentasi pasar & estimasi parameter risiko konsumen
     ↓ (output: α, ρ, β, Δq)
[FASE 2] Forecasting permintaan D_n dan D_r^eff
     ↓ (output: time-series demand)
[FASE 3] Optimasi Stackelberg (backward induction)
     ↓ (output: p_n*, p_r*, w_n*, w_r*, η*)
[FASE 4] Seleksi model remanufaktur (A/B/C) & keputusan investasi teknologi
     ↓ (output: CAPEX, OPEX, model k*)
[FASE 5] Implementasi pilot (3–6 bulan) + monitoring KPI
     ↓ (output: data aktual vs proyeksi)
[FASE 6] Scale-up & continuous improvement (PDCA)
```

### 3.2 Standar Prosedural per Fase

**Fase 1 — Segmentasi Risiko Konsumen.** Gunakan *conjoint analysis* dengan survei minimal $n = 384$ responden (margin of error 5%, confidence 95%) untuk mengestimasi $\alpha$, $\rho$, dan β. Pengukuran menggunakan *lottery-based elicitation* sesuai protokol Holt-Laury untuk CARA. Standar rujukan: ISO 20200:2015 (Material Declaration) dan ISO 14021:2016 (Self-declared Environmental Claims).

**Fase 2 — Forecasting Permintaan.** Terapkan model SARIMA atau *state-space model* untuk memroyeksikan permintaan. Sertakan *scenario tree* untuk variasi $\alpha \in \{0.2, 0.5, 0.8\}$ guna menguji *robustness*.

**Fase 3 — Optimasi Stackelberg.** Gunakan algoritma *backward induction* dengan bantuan solver (mis. GAMS, CPLEX, atau Pyomo). Kunci: setiap *follower* menyelesaikan $\max_{p_r} \pi_R$ secara kondisional pada strategi *leader*, kemudian *leader* menyelesaikan $\max_{w_n, w_r, \eta} \pi_{OEM}$.

**Fase 4 — Seleksi Model.** Lakukan *NPV analysis* selama horizon 5–10 tahun dengan *discount rate* $r_d = 8$–12%. Investasi teknologi $\eta^*$ dipilih dari set diskrit $\eta \in \{0$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
