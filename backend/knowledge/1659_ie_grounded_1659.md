# 1659 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Sistem Manufaktur Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri — dengan spesialisasi Rekayasa Manufaktur Mikroelektronika dan Optimasi Rantai Pasok Semikonduktor
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatik dari arsitektur *system-on-chip* (SoC) monolitik menuju arsitektur *system-in-package* (SiP) berbasis **chiplet** dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh tiga tekanan simultan yang tak dapat diselesaikan oleh pendekatan tradisional. Pertama, **physical limit of reticle** — biaya masker untuk node N2 sudah melampaui ambang USD 50 juta per set masker, sehingga penggunaan retikulasi tunggal untuk desain >100 mm² menjadi tidak ekonomis. Kedua, **trade-off antara yield dan area** — probabilitas cacat (defect density) yang konstan menyebabkan *yield* turun secara superlinier terhadap luas die, mengikuti model Poissons atau Seeds. Ketiga, **heterogeneity requirement** — aplikasi AI/HPC, mobil otonom, dan edge computing menuntut ko-integrasi proses logika先进 CMOS, memori HBM, fotonik silikon, dan analog/RF dalam satu paket.

Roze dan Gerber (2026) dalam papernya di *2026 ICEP-HBS Symposium* mengidentifikasi bahwa solusi **Electronic Design Automation (EDA)** yang konvensional — yang dirancang untuk desain SoC planar — mengalami *breakdown* ketika diterapkan pada alur kerja chiplet. Permasalahan kunci yang diangkat adalah kurangnya integrasi native antara *floorplanning*, *partitioning*, verifikasi *bump/TSV*, dan analisis termal-mekanis dalam satu platform (Roze & Gerber, 2026). Sebelumnya, Lau (2023) telah memetakan bahwa teknologi **Cu-Cu hybrid bonding** dengan pitch sub-10 µm telah menjadi enabler fisik untuk integrasi vertikal плотная, namun memerlukan alignment akurasi <±200 nm yang hanya dapat diverifikasi melalui co-design EDA multi-domain (Lau, 2023).

Konteks ekonominya juga mendesak. Menurut data rantai pasok semikonduktor, biaya validasi ulang (re-spin) desain chiplet yang gagal integrasi dapat menyentuh USD 10–25 juta per iterasi. Oleh karena itu, adopsi platform EDA holistik bukan sekadar preferensi teknis, melainkan **hard requirement** untuk time-to-market dan total-cost-of-ownership. Modul ini memposisikan pemahaman EDA chiplet sebagai kompetensi inti insinyur Teknik Industri yang beroperasi di persimpangan desain, manufaktur, dan logistik semikonduktor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Partisi Chiplet Berdasarkan Hukum Rent

Partisi luas die ke dalam $N_c$ chiplet mengikuti perluasan hukum Rent yang telah dimodifikasi untuk arsitektur 3D:

$$A_{total} = \sum_{i=1}^{N_c} A_i \quad \text{dengan} \quad N_{IO, total} = K \cdot \left(\sum_{i=1}^{N_c} N_i\right)^{p}$$

di mana $N_i$ adalah jumlah gerbang pada chiplet-$i$, $K$ adalah konstanta pin (≈ 0.5–0.8), dan $p$ adalah **eksponen Rent** (0.55–0.75 untuk desain logika). Untuk arsitektur 3D stacked, jumlah *through-silicon via* (TSV) yang dibutuhkan dapat dimodelkan sebagai:

$$N_{TSV} = \alpha \cdot (N_{IO,total})^{\beta} \quad \text{dengan} \quad \beta \approx 0.5\text{–}0.7$$

dengan $\alpha$ sebagai koefisien densitas I/O per chiplet.

### 2.2. Model Yield Multi-Komponen

Yield sistem untuk $n$ chiplet yang diintegrasikan mengikuti asumsi keacakan cacat independen:

$$Y_{system} = \prod_{i=1}^{n} Y_i = \prod_{i=1}^{N_c} e^{-A_i \cdot D_0}$$

dengan $D_0$ adalah *defect density* (cacat/cm²). Ketika beberapa chiplet di-*stack* dengan hybrid bonding, yield bonding sendiri diturunkan dari formula Lau (2023):

$$Y_{bond} = \prod_{j=1}^{m} \left(1 - e^{-A_{bond,j} \cdot D_{bond}}\right)$$

di mana $A_{bond,j}$ adalah luas sambungan Cu-Cu pada layer-$j$ dan $D_{bond}$ adalah defect density proses bonding. Yield total paket adalah:

$$Y_{total} = Y_{system} \cdot Y_{bond}$$

### 2.3. Constraint Alignment Hybrid Bonding

Untuk Cu-Cu hybrid bonding dengan pitch $P$, akurasi alignment $3\sigma$ harus memenuhi syarat *kissing bond*:

$$3\sigma_{align} \leq \frac{P}{6} \cdot \eta_{overlap}$$

dengan $\eta_{overlap}$ adalah fraksi overlap minimum yang dapat diterima (umumnya ≥0.7). Untuk $P = 10\,\mu m$, batas ini menjadi $3\sigma_{align} \leq 1.67\,\mu m$, yang saat ini hanya dicapai oleh peralatan bonding generasi terbaru (Lau, 2023).

### 2.4. Resistansi Termal Vertikal

Resistansi termal stack 3D dievaluasi dengan model resistansi seri:

$$R_{th,total} = \sum_{k=1}^{n} \frac{t_k}{k_{th,k} \cdot A_{eff,k}}$$

dengan $t_k$ adalah ketebalan layer-$k$, $k_{th,k}$ konduktivitas termal material, dan $A_{eff,k}$ luas efektif penyebaran panas. Untuk TSV, kontribusi termal tambahan mengikuti:

$$R_{th,TSV} = \frac{1}{N_{TSV}} \cdot \frac{t_{Si}}{k_{Cu} \cdot A_{TSV}}$$

### 2.5. Optimasi Biaya Total

*Figure of merit* (FOM) biaya EDA-to-tape-out:

$$C_{total} = C_{mask} + \sum_{i=1}^{R} C_{re-spin,i} + C_{pkg} \cdot N_{pkg,failed}$$

dengan $R$ adalah jumlah iterasi desain ulang. Tujuan optimasi EDA adalah meminimalkan $C_{total}$ melalui prediksi yield dan integritas sinyal pada fase *floorplanning*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi alur kerja EDA untuk chiplet dan 3D-IC mengikuti SOP berlapis yang dipetakan Roze dan Gerber (2026):

**Tahap 1 — System-Level Co-Design (Arsitektur):**
1. Definisikan *use case* dan alokasi fungsional (logika, memori, I/O, analog).
2. Tentukan jumlah chiplet $N_c$, ukuran target $A_i$, dan teknologi proses tiap chiplet.
3. Pilih *interconnect fabric*: hybrid bonding Cu-Cu, *micro-bump*, atau *silicon interposer*.
4. Validasi awal menggunakan platform *what-if analysis* EDA multi-domain.

**Tahap 2 — Partitioning & Floorplanning:**
1. Jalankan algoritma partisi dengan constraint Rent-aware (minimasi $N_{IO,total}$).
2. Tempatkan chiplet pada *substrate* atau *interposer* dengan optimasi thermal-aware.
3. Routing *bump/TSV* array dengan verifikasi *signal integrity* (SI) dan *power integrity* (PI).

**Tahap 3 — Physical Implementation per Chiplet:**
1. Eksekusi *place-and-route* independen per chiplet.
2. Penempatan TSV sesuai *keep-out zone* dan aturan DRC (Design Rule Check).
3. Ekstraksi parasitik RC dan simulasi timing sign-off.

**Tahap 4 — 3D Stacking & Bonding Verification:**
1. Simulasi alignment toleransi terhadap pitch Cu-Cu.
2. Analisis *thermomechanical stress* dengan FEM pada interface hybrid bond.
3. Verifikasi *known-good-die* (KGD) dan prediksi yield paket.

**Tahap 5 — Sign-off Multi-Domain:**
1. Multi-physics sign-off: elektrik, termal, mekanis, manufaktur.
2. DRC/LVS lintas domain, *antenna check*, dan *DFM* (Design for Manufacturing).
3. Generasi *package assembly drawing* dan *test program* finalisasi.

Diagram logika alur (diadaptasi dari Roze & Gerber, 2026):

```
[System Spec] → [Partition] → [Chiplet P&R] → [3D Stack]
       ↓              ↓             ↓              ↓
  [Cost Model]  [Rent's Rule]  [TSV Extract]  [Alignment Sim]
       ↓              ↓             ↓              ↓
       └────────── [Multi-Physics Sign-off] ──────┘
                          ↓
                  [Tape-out & Assembly]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah integrator ASIC merancang paket HPC yang terdiri dari 1 chiplet logika (12 nm, $A_1 = 100\,\text{mm}^2$), 1 chiplet HBM base die ($A_2 = 80\,\text{mm}^2$), dan 4 stack DRAM ($A_3 = 70\,\text{mm}^2$ tiap). Proses bonding: Cu-Cu hybrid bonding dengan pitch $P = 9\,\mu m$. Defect density $D_0 = 0.08\,\text{ cacat/cm}^2$ untuk fab dan $D_{bond} = 0.5\,\text{ cacat/cm}^2$ untuk bonding.

**Langkah 1 — Yield per chiplet (model Seeds):**

$$Y_1 = e^{-A_1 \cdot D_0} = e^{-1.00 \cdot 0.08} = e^{-0.08} \approx 0.9231$$
$$Y_2 = e^{-0.80 \cdot