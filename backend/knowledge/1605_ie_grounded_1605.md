# 1605 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Closed-Loop Supply Chain dengan Integrasi Echelon Utilization dan Recycling-Remanufacturing Baterai Pensiun (Retired Power Battery)
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global yang diproyeksikan mencapai lebih dari 250 juta unit pada 2030 (IEA, 2024) menghasilkan konsekuensi strategis berupa limpahan *retired power battery* (baterai lithium-ion pensiun) dalam skala masif. Baterai yang kapasitasnya turun hingga 70–80% dari *State of Health* (SoH) awal umumnya ditarik dari aplikasi otomotif, namun masih memiliki kapasitas residu 60–80% yang signifikan untuk aplikasi stasioner (*second-life*). Permasalahan ini menciptakan urgensi rekayasa sistem industri dalam merancang Closed-Loop Supply Chain (CLSC) yang mengintegrasikan dua keputusan simultan: (i) **echelon utilization** — kaskade penggunaan baterai pensiun untuk aplikasi sekunder berdaya-tahan rendah seperti *Battery Energy Storage System* (BESS) untuk solar PV, telekomunikasi base-station, dan *backup power*; serta (ii) **recycling-remanufacturing** — ekstraksi material kritis (Li, Co, Ni) dan rekonstruksi *cell* baru dengan grade yang dapat dikontrol. JIANG & TANG (2025) menyoroti bahwa tanpa arsitektur CLSC yang koheren, terjadi disekuilibrium harga (*price distortion*) antara pasar *echelon* dan pasar *remanufactured*, yang pada akhirnya menurunkan profitabilitas kolektif rantai pasok. Penelitian ini semakin relevan ketika dikorelasikan dengan model robust CLSC Shin, Kim, & Jeong (2024), yang menekankan pentingnya *return management system* sebagai mekanisme *risk-hedging* terhadap volatilitas return quality dan demand uncertainty pada ekonomi sirkular.

Konteks regulasi juga mendorong urgensi riset ini. Regulasi *Extended Producer Responsibility* (EPR) di Uni Eropa (Directive 2008/98/EC, amended 2018/851) mewajibkan pabrikan baterai untuk mengambil kembali minimal 65% limbah baterai lithium pada 2025 dan 70% pada 2030. Di Indonesia, PP No. 27 Tahun 2020 tentang Pengelolaan Sampah Spesifik dan Permen LHK No. 75 Tahun 2019 tentang Peta Jalan Pengelolaan Limbah B3 turut memperkuat mandat回收. Dari perspektif engineering economics, baterai EV mengandung material dengan nilai intrinsik sangat tinggi (sekitar USD 2.000–3.000 per kWh kapasitas awal pada 2024), sehingga keputusan *echelon vs. recycle* memiliki implikasi NPV (Net Present Value) jangka panjang yang signifikan terhadap investasi *gigafactory* dan fasilitas回收.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Keputusan Empat-Pemain

JIANG & TANG (2025) merumuskan model **Stackelberg game empat tingkat** yang terdiri dari: (1) Produsen baterai baru (Original Equipment Manufacturer / OEM), (2) Collector pihak ketiga yang mengakuisisi baterai pensiun, (3) Echelon Utilizer yang menggunakan baterai pensiun untuk BESS, dan (4) Recycler yang melakukan *material recovery*. OEM bertindak sebagai *leader* yang menentukan harga jual baterai baru ($p_n$) dan harga收购 ($p_b$), sementara *followers* (collector, echelon, recycler) menentukan volume transaksinya secara reaktif.

### 2.2 Fungsi Demand dan Utilitas

Fungsi demand baterai baru dimodelkan sebagai fungsi linier terhadap harga:

$$D_n = \alpha - \beta p_n + \gamma p_e + \delta p_r \quad (1)$$

di mana $\alpha, \beta > 0$ adalah parameter intercept dan elastisitas harga, sedangkan $\gamma, \delta \geq 0$ adalah parameter efek subtitusi dari harga baterai *echelon* ($p_e$) dan baterai remanufaktur ($p_r$). Permintaan baterai *echelon* mengikuti:

$$D_e = \mu - \nu p_e + \rho p_r + \lambda p_n \quad (2)$$

dengan parameter analogi yang mencerminkan sensitivitas pelanggan BESS terhadap harga substitusi.

### 2.3 Fungsi Profit Empat-Pemain

Profit OEM (termasuk margin remanufaktur):
$$\pi_{OEM} = (p_n - c_n)D_n + (p_b - c_b)Q_b + (p_r - c_r)D_r \quad (3)$$

Profit Collector:
$$\pi_{col} = (a - p_b)Q_b - c_{log}Q_b \quad (4)$$

Profit Echelon Utilizer:
$$\pi_{ech} = (p_e - c_e)D_e - c_{test}D_e - c_{int}D_e \quad (5)$$

Profit Recycler:
$$\pi_{rec} = (a' - p_r)D_r - c_{rec}D_r - \theta D_r^2 \quad (6)$$

di mana $Q_b$ adalah volume回收 baterai pensiun, $c_n, c_b, c_e, c_r, c_{log}, c_{test}, c_{int}$ masing-masing adalah biaya produksi, akuisisi, refurbish, daur ulang, logistik回收, pengujian SoH, dan integrasi; $a$ adalah willingness-to-pay collector; $a'$ adalah harga jual material recovery; $\theta D_r^2$ adalah biaya lingkungan kuadratik (convex cost) untuk mencerminkan diminishing returns pada volume回收 tinggi.

### 2.4 Kondisi KKT dan Solusi Equilibrium

Substitusi backward-induction menghasilkan *first-order conditions*:

$$\frac{\partial \pi_{ech}}{\partial p_e} = D_e + (p_e - c_e - c_{test} - c_{int})\frac{\partial D_e}{\partial p_e} = 0 \quad (7)$$

$$\frac{\partial \pi_{rec}}{\partial p_r} = D_r + (a' - p_r - c_{rec}) - 2\theta D_r = 0 \quad (8)$$

Solusi optimal diperoleh melalui penyelesaian simultan persamaan (7) dan (8) yang selanjutnya disubstitusikan ke fungsi reaksi OEM. Model ini selanjutnya diperkuat dengan ekstensi *robust optimization* ala Shin, Kim, & Jeong (2024) yang memperkenalkan *uncertainty set* $\mathcal{U}$:

$$\min_{x} \max_{u \in \mathcal{U}} \; \mathbf{c}^T x + \mathbf{d}^T x \cdot u \quad \text{s.t.} \; \mathbf{A}x \leq \mathbf{b} \quad (9)$$

yang melindungi keputusan dari fluktuasi kualitas baterai yang dikembalikan dan volatilitas harga material LiCoO₂ di pasar LME (London Metal Exchange).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

JIANG & TANG (2025) menyusun arsitektur SOP 7-tahap yang dapat diimplementasikan secara langsung di fasilitas回收 baterai berskala industri:

**Tahap 1 — Reverse Logistics Activation.** Aktivasi titik koleksi (drop-off) di diler resmi dan *service center* OEM dengan standar UN 38.3 (transportation testing) dan protokol IEC 62660 untuk packaging baterai Li-ion. Setiap baterai pensiun diberikan kode QR yang mencatat: SoH awal, cycle count, chemistry (NMC/LFP), dan provenance vehicle.

**Tahap 2 — Initial Screening & Triage.** Pengujian SoH dengan *Battery Management System* analyzer menggunakan *Hybrid Pulse Power Characterization* (HPPC) test (per standar IEC 62660-1). Baterai diklasifikasikan ke dalam tiga *grade*:
- **Grade A** (SoH ≥ 75%): kandidat echelon utilization untuk BESS
- **Grade B** (SoH 60–75%): kandidat remanufacturing setelah cell-balancing dan module replacement
- **Grade C** (SoH < 60%): direct material recycling (hydrometallurgical/pyrometallurgical route)

**Tahap 3 — Echelon Repurposing (Grade A).** Re-assembly menjadi *battery rack* bertegangan rendah (48V atau 400V DC) untuk aplikasi *behind-the-meter* storage atau *telecom backup*. Dilakukan *re-commissioning* sesuai standar UL 1973 dan IEEE 1547 untuk interconnection safety.

**Tahap 4 — Remanufacturing (Grade B).** Disassembly modul, pengujian cell individual, penggantian cell cacat (< 3% dari total), re-balancing dengan BMS baru, dan re-packaging ke modul standar OEM. Standar QC mengikuti ISO 9001 + IATF 16949 untuk traceability.

**Tahap 5 — Material Recycling (Grade C).** Hydrometallurgical leaching (H₂SO₄ + H₂O₂) untuk recovery Li, Co, Ni sebagai precursor pCAM (precathode active material). Residu dikirim ke *black-mass* processor.

**Tahap 6 — Decision Feedback Loop.** Data penjualan echelon dan recyclate dikembalikan ke modul pricing keputusan (persamaan 1–6) untuk update parameter Bayesian.

**Tahap 7 — Compliance & Reporting.** Generate *battery passport* sesuai EU Battery Regulation 2023/1542 untuk setiap unit yang diproses.

Diagram alir logika keputusan inti mengikuti logika IF-THEN:

```
IF SoH ≥ 75% → Route to Echelon
ELSE IF 60% ≤ SoH < 75% → Route to Remanufacturing
ELSE → Route to Hydrometallurgical Recycling
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Hipotetis Berbasis Literatur

Berdasarkan parameter tipikal yang digunakan JIANG & TANG (2025) dan data IEA Global EV Outlook 2024, ditetapkan parameter industri sebagai berikut untuk kapasitas回收 10.000 unit baterai pensiun/tahun dengan kapasitas rata-rata 60 kWh:

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Intercept demand baru | $\alpha$ | 50.000 | unit |
| Elastisitas harga | $\beta$ | 12 | unit/USD |
| Biaya produksi OEM | $c_n$ | 8.500 | USD/unit |
| Biaya akuisisi回收 | $c_b$ | 1.800 | USD/unit |
| Biaya refurbish echelon | $c_e$ | 950 | USD/unit |
| Biaya pengujian SoH | $c_{test}$ | 120 | USD/unit |
| Biaya integrasi BESS | $c_{int}$ | 350 | USD/unit |
| Biaya daur ulang | $c_{rec}$ | 1.100 | USD/unit |
| Biaya lingkungan kuadratik | $\theta$ | 0,05 | USD²/unit² |
| Willingness-to-pay collector | $a$ | 2.500 | USD/unit |
| Harga jual material | $a'$ | 1.700 | USD/unit |

### 4.2 Step-by-Step Calculation

**Step 1 — Optimasi Harga Echelon.** Substitusi ke persamaan (7) dengan asumsi $\mu = 15.000$, $\nu = 18$:

$$D_e = 15.000 - 18 p_e \quad (\gamma = \rho = \lambda = 0 \text{ untuk简化})$$

$$\frac{\partial \pi_{ech}}{\partial p_e} = (15.000 - 18 p_e) + (p_e - 1.420)(-18) = 0$$

$$15.000 - 18 p_e - 18 p_e + 25.560 = 0 \quad \Rightarrow \quad 36 p_e = 40.560$$

$$\boxed{p_e^* = 1.126{,}67 \text{ USD/unit}}$$

Demand optimum: $D_e^* = 15.000 - 18(1.126{,}67) = 14.720$ unit.

Profit Echelon Utilizer:
$$\pi_{ech}^* = (1.126{,}67 - 1.420)(14.720) = -4.313 \text{ USD (rugi) — indikasi perlu penyesuaian }c_e$$

Setelah optimasi biaya integrasi menjadi $c_{int} = 250$ USD, recalc:

$$\pi_{ech}^* = (1.126{,}67 - 1.320)(14.720) = -2.844 \text{ USD (rugi marginal)}$$

**Step 2 — Optimasi Harga Recyclate.** Substitusi ke persamaan (8):

$$D_r + (1.700 - p_r - 1.100) - 0{,}10 D_r = 0$$

dengan asumsi $D_r = 5.000 - 5 p_r$:

$$(5.000 - 5p_r) + 600 - p_r - 0{,}10(5.000 - 5p_r) = 0$$

$$5.500 - 6p_r - 0{,}50p_r = 0 \quad \Rightarrow \quad 6{,}5 p_r = 5.500$$