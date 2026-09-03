# 2780 — Jaringan Sensor Nirkabel (WSN) untuk Liofilisasi Farmasi: Arsitektur Pemantauan Proses dan Optimalisasi Siklus Beku-Kering

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri farmasi global menghadapi tantangan operasional yang semakin kompleks dalam memproduksi bentuk sediaan steril dan stabil, terutama untuk produk biologis, vaksin, antibiotik, dan terapi berbasis protein yang rentan terhadap degradasi termal. Liofilisasi atau *freeze-drying* merupakan unit operasi kritis yang mengubah larutan menjadi padatan kering melalui sublimasi pelarut pada tekanan vakum rendah, sehingga mempertahankan aktivitas molekul aktif dan memperpanjang *shelf-life* produk hingga 2–5 tahun (Meza-Galvan, Strongrich, & Darwish, 2026). Namun demikian, satu siklus liofilisasi konvensional untuk batch 10.000–50.000 vial membutuhkan durasi 24–72 jam dengan konsumsi energi spesifik rata-rata 4,5–6,8 kWh per liter vial, menjadikan proses ini sebagai *energy hotspot* dalam *good manufacturing practice* (GMP) fasilitas farmasi modern (Artusio, Barresi, & Pisano, 2026).

Dalam konteks *Process Analytical Technology* (PAT) yang diamanatkan oleh FDA sejak pedoman 2004, kebutuhan akan pemantauan real-time multivariat menjadi imperatif mutu. Sensor thermocouple tradisional berbasis kabel (misalnya RTD PT-100) memiliki kelemahan inheren: instalasi invasive yang melanggar sterilitas vial, jumlah *channel* terbatas pada *data logger* konvensional (umumnya 32–64 kanal), serta *single point of failure* ketika satu kabel putus pada salah satu vial. Meza-Galvan et al. (2026) mengusulkan arsitektur *Wireless Sensor Networks* (WSN) berbasis protokol IEEE 802.15.4 / Zigbee sebagai solusi terhadap keterbatasan tersebut, dengan kemampuan部署 hingga 250 *node* aktif per *coordinator* dalam satu *freeze-dryer* chamber.

Urgensi ekonomi dari adopsi WSN dapat dihitung dari pengurangan *batch failure rate* yang dalam praktik industri farmasi berkisar 2,3–4,1% per tahun. Dengan nilai satu batch vial antibodi monoklonal rata-rata USD 850.000, pengurangan *failure rate* sebesar 1,5% melalui deteksi anomali dini menghasilkan *saving* tahunan USD 1,27 juta untuk fasilitas dengan throughput 100 batch/tahun (Meza-Galvan et al., 2026). Selain itu, Artusio et al. (2026) melaporkan bahwa integrasi WSN dengan algoritma *Model Predictive Control* (MPC) mampu memendekkan durasi siklus primer-drying hingga 18–25% melalui optimasi *shelf temperature ramp* dinamis, yang secara langsung menurunkan biaya energi dan meningkatkan kapasitas *plant* tanpa investasi modal tambahan pada ruang liofilisasi baru.

Konteks regulasi yang melatarbelakangi adopsi WSN liofilisasi meliputi: (1) FDA 21 CFR Part 11 untuk integritas data elektronik, (2) USP ⟨1207⟩ untuk *container closure integrity*, dan (3) EMA Annex 1 (2022) tentang *contamination control strategy* yang mensyaratkan *in-process monitoring* tanpa mengganggu *primary packaging*. Arsitektur WSN yang memenuhi ketiga kerangka regulasi ini menjadi *enabler* transformasi digital lini liofilisasi farmasi menuju paradigma *Industry 4.0* dan *Pharma 4.0*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Sublimasi pada Liofilisasi Primer

Laju sublimasi es pada lapisan beku vial dikendalikan oleh mekanisme perpindahan panas dan massa secara seri, sebagaimana diformalisasikan oleh Pikal (1985) dan dimutakhirkan oleh Meza-Galvan et al. (2026). Resistansi termal total sistem dapat dinyatakan sebagai:

$$\frac{1}{U_{total}} = \frac{1}{h_c} + \frac{L_d}{k_d} + \frac{L_s}{k_s} + \frac{1}{h_{sub}}$$

di mana $h_c$ adalah koefisien konveksi gas pada ruang vakum (tipikal 5–15 W/m²K), $L_d$ dan $L_s$ masing-masing adalah tebal lapisan kering (*dried layer*) dan lapisan produk beku, $k_d$ serta $k_s$ adalah konduktivitas termal efektif, sedangkan $h_{sub}$ adalah koefisien transfer panas sublimasi (W/m²K). Laju sublimasi massa per vial dinyatakan:

$$\dot{m} = \frac{A_v \cdot (P_{ice,T_p} - P_c)}{R_{gas} \cdot T_p}$$

dengan $A_v$ luas sublimasi vial, $P_{ice,T_p}$ tekanan uap jenuh es pada temperatur produk $T_p$ (persamaan Antoine), $P_c$ tekanan ruang (*chamber pressure*), dan $R_{gas}$ konstanta gas uap air (461,5 J/kg·K).

### 2.2 Model Sensor Network dan Topologi Mesh

Arsitektur WSN untuk liofilisasi dirancang dengan topologi *mesh* yang menjamin redundansi jalur komunikasi. Setiap *sensor node*配备 tiga sensor terintegrasi: termokopel tipe T (akurasi ±0,1°C, rentang −80°C hingga +50°C), sensor kapasitif untuk kelembaban residual, dan *pressure transducer* miniatur. Konsumsi daya per node mengikuti persamaan:

$$P_{node} = P_{tx} \cdot t_{tx} + P_{rx} \cdot t_{rx} + P_{sleep} \cdot t_{sleep} + P_{sense}$$

Untuk baterai lithium-thionyl chloride (Li-SOCl₂) kapasitas 2.400 mAh pada 3,6 V, dengan *duty cycle* transmisi 5%, *lifetime* node melebihi 36 bulan (Meza-Galvan et al., 2026).

### 2.3 Model Probabilistik Kegagalan Batch

Peluang batch vial lolos QC akhir mengikuti distribusi Beta-Binomial yang sesuai untuk data proporsi cacat:

$$P(X=k) = \binom{n}{k} \frac{B(k+\alpha, n-k+\beta)}{B(\alpha, \beta)}$$

di mana $\alpha$ dan $\beta$ adalah parameter bentuk prior yang di-*update* melalui Bayesian updating setiap batch menggunakan data WSN real-time. Deteksi anomali sublimasi front (misalnya *collapse* atau *melt-back*) dilakukan melalui algoritma *CUSUM* (cumulative sum) dengan batas keputusan:

$$S_t = \max(0, S_{t-1} + (x_t - \mu_0 - k))$$

di mana $x_t$ adalah pembacaan sensor waktu ke-$t$, $\mu_0$ nilai rata-rata nominal, dan $k$ parameter *allowance* (tipikal 0,5σ).

### 2.4 Persamaan Energi dan Biaya Siklus

Total konsumsi energi satu batch:

$$E_{batch} = \sum_{t=0}^{T_{cycle}} \left( P_{heater}(t) + P_{vacuum}(t) + P_{condenser}(t) + P_{WSN}(t) \right) \cdot \Delta t$$

Artusio et al. (2026) menunjukkan bahwa optimalisasi berbasis WSN menghasilkan reduksi $E_{batch}$ hingga 22% melalui eliminasi *over-drying* dan pendeknya fase non-stasioner.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operansi (SOP)

Implementasi WSN pada lini liofilisasi mengikuti kerangka **DMAIC-RFID** yang diadaptasi dari Six Sigma untuk konteks farmasi:

**Fase 1 — Define & Design (Minggu 1–4):**
1. Karakterisasi *freeze-dryer* (misalnya LyoStar 3.0 atau GEA Lyophil) meliputi volume rak, jumlah vial tipikal 10.000–40.000 unit, dan rentang operasional tekanan 0,05–1,000 mbar.
2. Penempatan *node* mengikuti desain *latin hypercube sampling* (LHS) agar representasi spasial terdistribusi secara statistik: 64 node untuk chamber berkapasitas 20.000 vial (rasio 1:312).
3. Validasi protocol komunikasi Zigbee pada lingkungan cryogenic −80°C menggunakan *range extender* aktif (*repeater*).

**Fase 2 — Measure (Minggu 5–8):**
1. Kalibrasi sensor terhadap *primary standard* (NIST-traceable) dengan *uncertainty budget* maksimum $\pm 0{,}3°C$.
2. Instalasi *gateway* dengan *encryption* AES-128 sesuai 21 CFR Part 11.
3. Baseline data historis minimal 10 batch untuk pembentukan *golden batch fingerprint*.

**Fase 3 — Analyze (Minggu 9–12):**
1. Pengembangan model *multivariate statistical process control* (MSPC) berbasis Principal Component Analysis (PCA) atau *Partial Least Squares* (PLS) yang menghubungkan profil suhu-tekanan dengan atribut kritis produk (residual moisture, cake appearance).
2. Identifikasi variabel dominan yang menjelaskan ≥95% varians proses melalui *scree plot* analisis.

**Fase 4 — Improve (Minggu 13–16):**
1. Implementasi *closed-loop control* dengan algoritma MPC horizon prediksi 30 menit dan *control horizon* 5 menit.
2. Setting *alarm threshold* tiga tingkat: *warning* (2σ), *action* (3σ), dan *batch hold* (4σ).

**Fase 5 — Control (Minggu 17–20):**
1. Dokumentasi SOP lengkap dengan *change control* procedure.
2. Pelatihan operator dan *qualified person* (QP).
3. *Periodic review* setiap 6 bulan untuk *re-qualification* sensor berdasarkan *drift* dan *aging*.

Diagram alir integrasi:

```
[Sensor Node] →[Mesh Network Zigbee] →[Gateway] →[Historian PI Server]
       ↓                                      ↓
[Battery Monitor]                       [MPC Controller]
                                              ↓
                              [Lyo PLC ←→ HMI Supervisory]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik farmasi di Asia Tenggara memproduksi 50.000 vial/vaksin mRNA per batch pada freeze-dryer dengan kapasitas 50.000 vial. Terapkan arsitektur WSN 160 *node* sesuai protokol Meza-Galvan et al. (2026).

**Parameter Input:**
- $T_{shelf,nominal} = -35°C$ (freezing) dan $+25°C$ (drying)
- $P_{chamber} = 0{,}10 \text{ mbar}$
- $k_d = 0{,}020 \text{ W/m·K}$ (efektif untuk produk 5% mannitol)
- $L_s = 1{,}0 \text{ cm}$ (tinggi awal vial)
- $A_v = 4{,}9 \text{ cm}^2$ (vial 10 mL)
- $R_{gas} = 461{,}5 \text{ J/kg·K}$
- $T_p = -30°C = 243{,}15 \text{ K}$

**Langkah 1: Hitung tekanan uap es pada $T_p$**
Menggunakan persamaan Goff-Gratch atau formulasi Murphy & Koop (2005):
$$P_{ice,243{,}15} = 0{,}38 \text{ mbar} = 38 \text{ Pa}$$

**Langkah 2: Hitung driving force tekanan**
$$\Delta P = P_{ice} - P_c = 38 - 10 = 28 \text{ Pa}$$

**Langkah 3: Laju sublimasi per vial**
$$\dot{m} = \frac{(4{,}9 \times 10^{-4}) \cdot 28}{461{,}5 \cdot 243{,}15} = 1{,}22 \times 10^{-7} \text{ kg/s} = 0{,}44 \text{ g/jam/vial}$$

**Langkah 4: Total sublimat batch**
$$M_{total} = 50{,}000 \cdot 0{,}010 \text{ L} \cdot 1{,}0 \text{ kg/L (air)} \cdot 0{,}95 \text{ (solid fraction)}$$
$$M_{total} \approx 475 \text{ kg uap air}$$

**Langkah 5: Durasi primary drying tanpa WSN (baseline)**
$$t_{baseline} = \frac{475{,}000}{50{,}000 \cdot 0{,}44/1000 \cdot 3600} = \frac{475{,}000}{79{,}200} = 6{,}0 \text{ jam}$$

Karena *heat transfer limitation*, durasi riil dengan faktor 0,25 menjadi ~24 jam.

**Langkah 6: Durasi dengan WSN-MPC optimization (Artusio et al., 2026)**
Reduksi 22%: $t_{WSN} = 24 \times 0{,}78 = 18{,}7$ jam

**Langkah 7: Penghematan energi per batch**
Konsumsi spesifik baseline: $6{,}0 \text{ kWh/L}$ × 500 L = 3.000 kWh
Penghematan: $3{,}000 \times 0{,}22 = 660 \text{