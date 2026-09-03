# 2057 — Sistem Organic Rankine Cycle (ORC): Konfigurasi Termodinamika, Pemilihan Fluida Kerja, dan Tantangan Masa Depan dalam Pembangkitan Listrik Energi Termal Suhu Rendah

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Organic Rankine Cycle (ORC) untuk Konversi Energi Termal Suhu Rendah dan Pemulihan Panas Buang Industri
**Jurnal & Sitasi Utama:** F. Sánchez, Javier Barba, Carmen Mata (2025). *Energies*, Vol. 18, Issue 24, Article 6561. DOI: [https://doi.org/10.3390/en18246561](https://doi.org/10.3390/en18246561)
**Sitasi Pendukung:** Е. Н. Смирнов, Vladyslav Fikssen, Volodymyr Kukhar (2024). *Journal of Materials Science*. DOI: [https://doi.org/10.1007/s10853-024-10062-3](https://doi.org/10.1007/s10853-024-10062-3)

---

## 1. Pendahuluan dan Konteks Industri

Transisi nol-karbon (*zero-carbon transition*) yang tengah berlangsung secara global memaksa sektor industri dan utilitas listrik untuk mencari solusi pembangkitan energi yang mampu memanfaatkan sumber panas suhu-rendah (*low-grade heat*) yang sebelumnya terbuang sia-sia. Sánchez, Barba, dan Mata (2025) dalam *Energies* (DOI: [10.3390/en18246561](https://doi.org/10.3390/en18246561)) menyajikan *review* komprehensif mengenai teknologi *Organic Rankine Cycle* (ORC) sebagai salah satu jalur teknis paling matang untuk menjawab tantangan ini. Sumber panas yang dikaji dalam paper tersebut mencakup panas bumi (*geothermal*), panas termal surya, biomassa, gas buang mesin pembakaran internal, dan panas proses industri pada rentang suhu 80–350 °C. Data International Energy Agency (IEA) yang dirujuk oleh penulis menunjukkan bahwa lebih dari 50% energi primer industri global akhirnya terdisipasi sebagai panas buang pada suhu di bawah 250 °C, sebuah potensi yang secara ekonomis belum dimanfaatkan secara optimal.

Urgensi operasional ORC terletak pada kapasitasnya untuk menutup kesenjangan antara sumber panas suhu rendah dan kebutuhan listrik terdistribusi di lokasi (*distributed generation*). Sánchez dkk. (2025) menekankan bahwa pilihan fluida kerja (*working fluid*) dan konfigurasi siklus merupakan keputusan rekayasa kritikal yang menentukan kelayakan ekonomi proyek, terutama pada rentang suhu sumber 80–150 °C di mana efisiensi Carnot secara teoritis hanya mencapai 15–25%. Lebih lanjut, integrasi ORC dengan proses manufaktur—misalnya sistem *remelting* aluminium tipis yang dikaji oleh Smirnov, Fikssen, dan Kukhar (2024) dalam *Journal of Materials Science* (DOI: [10.1007/s10853-024-10062-3](https://doi.org/10.1007/s10853-024-10062-3))—membuka peluang baru. Proses indirect heating menggunakan *magnetodynamic pump* (MDP) pada sirkulasi aluminium cair menghasilkan *overheated melt stream* dengan suhu residu yang masih cukup tinggi (200–400 °C) untuk diekstraksi oleh ORC, sehingga meningkatkan *overall energy efficiency* fasilitas dari dua sisi sekaligus: peningkatan yield produk layak dari 60% menjadi 83% (sebagaimana dilaporkan Smirnov dkk., 2024) dan pemulihan energi termal.

Aspek ekonominya juga tidak kalah penting. Sánchez dkk. (2025) menyitir bahwa *Levelized Cost of Electricity* (LCOE) ORC pada skala 100–500 kWe berkisar 80–150 €/MWh, yang mendekati grid parity di banyak negara Eropa ketika *feed-in tariff* dan sertifikat energi terbarukan diperhitungkan. Namun, investasi awal (*Capital Expenditure* / CAPEX) masih menjadi barrier utama, dengan payback period 4–8 tahun untuk aplikasi waste heat recovery dan 6–12 tahun untuk aplikasi geotermal.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Termodinamika Dasar ORC

Siklus Rankine organik pada dasarnya merupakan modifikasi siklus Rankine-uap konvensional di mana fluida kerja diganti dengan fluida organik (R-134a, R-245fa, isobutana, pentana, toluena, atau refrigeran alami). Sánchez dkk. (2025) membedakan empat estado termodinamika utama dalam diagram T-s:

$$\text{1} \rightarrow \text{2: Kompresi adiabatik (pompa)}$$
$$\text{2} \rightarrow \text{3: Penambahan panas isobar (evaporator)}$$
$$\text{3} \rightarrow \text{4: Ekspansi adiabatik (turbin)}$$
$$\text{4} \rightarrow \text{1: Pelepasan panas isobar (kondensor)}$$

Efisiensi termal siklus didefinisikan sebagai:

$$\eta_{th} = \frac{\dot{W}_{net}}{\dot{Q}_{in}} = \frac{\dot{W}_{turb} - \dot{W}_{pump}}{\dot{Q}_{evap}}$$

di mana $\dot{W}_{turb} = \dot{m}(h_3 - h_4)$, $\dot{W}_{pump} = \dot{m}(h_2 - h_1)$, dan $\dot{Q}_{evap} = \dot{m}(h_3 - h_2)$. Berbeda dengan siklus Rankine-uap, fluida organik memiliki kemiringan kurva saturated vapor yang cenderung negatif (*negative slope*), sehingga proses ekspansi 3→4 tetap berada di dalam域 uap jenuh tanpa risiko droplet formation pada bilah turbin (Sánchez dkk., 2025).

### 2.2 Efisiensi Carnot dan Batas Termodinamika

Batas atas efisiensi konversi panas-listrik untuk sumber pada suhu $T_H$ dan sink pada suhu $T_L$ (dalam Kelvin) mengikuti:

$$\eta_{Carnot} = 1 - \frac{T_L}{T_H}$$

Untuk sumber panas 150 °C (423 K) dan kondensor 30 °C (303 K), $\eta_{Carnot} \approx 28,4\%$, sedangkan efisiensi aktual ORC biasanya hanya mencapai 8–14% tergantung pada fluida kerja dan parameter desain. Rasio efisiensi aktual terhadap Carnot disebut *second-law efficiency* atau efisiensi eksergi:

$$\eta_{II} = \frac{\eta_{th}}{\eta_{Carnot}}$$

### 2.3 Analisis Eksergi

Sánchez dkk. (2025) menggunakan kerangka eksergi untuk mengevaluasi irreversibilitas komponen. Eksergi spesifik fluida kerja dihitung dengan:

$$ex = (h - h_0) - T_0(s - s_0)$$

dengan subskrip 0 menandakan *dead state* (biasanya T₀ = 298,15 K, p₀ = 101,325 kPa). Destruksi eksergi pada masing-masing komponen:

$$\dot{E}_{D,k} = T_0 \dot{S}_{gen,k}$$

Total destruksi eksergi sistem $\dot{E}_{D,tot} = \sum_k \dot{E}_{D,k}$ harus diminimalkan melalui *pinch analysis* dan optimalisasi suhu pinch pada evaporator.

### 2.4 Parameter Desain Kritikal

Beberapa parameter operasional yang diidentifikasi Sánchez dkk. (2025) sebagai *design drivers*:

1. **Rasio tekanan** $\pi = p_2/p_1$
2. **Suhu superheat** $\Delta T_{sh} = T_3 - T_{sat}(p_3)$
3. **Temperatur pinch evaporator** $\Delta T_{pinch,evap}$
4. **Temperatur pinch kondensor** $\Delta T_{pinch,cond}$

Untuk refrigeran murni seperti R-245fa, profile pemanasan yang curam menyebabkan degradasi matched temperature di evaporator; sebaliknya fluida *zeotropic mixture* seperti R-407C memberikan *glide* suhu yang lebih sesuai dengan profil sumber panas.

### 2.5 Persamaan State dan Properti Fluida

Perhitungan properti termodinamika fluida kerja idealnya mengikuti persamaan Helmholtz energi bebas eksplisit:

$$\frac{a(T,\rho)}{RT} = \alpha^0(T,\rho) + \alpha^r(T,\rho)$$

dengan $\alpha^0$ komponen ideal-gas dan $\alpha^r$ komponen residual. Database REFPROP (NIST) digunakan oleh Sánchez dkk. (2025) untuk seluruh simulasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Sistematis Desain Sistem ORC

Berdasarkan kerangka metodologis Sánchez dkk. (2025), implementasi ORC di industri mengikuti tujuh tahapan prosedural:

**Tahap 1 – Karakterisasi Sumber Panas**
- Pengukuran profil suhu (*temperature curve*) vs. laju alir massa termal
- Identifikasi fluida pembawa (gas buang, air panas, uap jenuh, atau molten salt)
- Estimasi potensi termal: $\dot{Q}_{source} = \dot{m}_{source} \cdot c_p \cdot (T_{in} - T_{out})$

**Tahap 2 – Penentuan Fluida Kerja**
Pemilihan fluida kerja mengikuti kriteria filtrasi multi-objektif:
- Tekanan kritis di atas tekanan operasi (mencegah transcritical)
- *Global Warming Potential* (GWP) < 700 sesuai regulasi F-Gas EU 517/2014
- *Ozone Depletion Potential* (ODP) = 0
- Stabilitas termal pada suhu puncak siklus
- Dampak keselamatan (*toxicity class*, flammability)

**Tahap 3 – Konfigurasi Siklus**
Konfigurasi yang dibandingkan dalam paper Sánchez dkk. (2025):
| Konfigurasi | Kompleksitas | Aplikasi Tipikal |
|---|---|---|
| Basic ORC | Rendah | 80–150 °C, biomassa kecil |
| Regenerative ORC | Sedang | 150–250 °C |
| Transcritical cycle | Tinggi | 150–300 °C, sumber variabel |
| Supercritical ORC | Tinggi | >300 °C, surya terkonsentrasi |
| Cascaded ORC | Sangat tinggi | Multi-sumber heterogen |

**Tahap 4 – Optimasi Parameter**
Optimasi dilakukan terhadap rasio tekanan, derajat superheat, dan suhu pinch menggunakan algoritma *genetic algorithm* (GA) atau *particle swarm optimization* (PSO) yang dilaporkan oleh Sánchez dkk. (2025) mampu meningkatkan daya output sebesar 4–8% dibanding desain base-case.

**Tahap 5 – Analisis Eksergi dan Ekonomi**
Integrasi eksergo-ekonomi menggunakan parameter:
$$c_{k} = \frac{\dot{C}_{k}}{\dot{E}_{k}} = \frac{c_{fuel} \dot{E}_{D,k} + \sum Z_k}{\dot{E}_{k}}$$

di mana $\dot{C}_k$ adalah *cost rate*, $Z_k$ adalah *capital cost levelized*, dan $c_{fuel}$ adalah biaya unit eksergi bahan bakar.

**Tahap 6 – Integrasi dengan Proses Pabrik**
Pada konteks Smirnov dkk. (2024), integrasi dilakukan dengan memasang economizer pada jalur gas buang MDP (*magnetodynamic pump*) untuk preheating fluida kerja sebelum evaporator utama. Hal ini menaikkan suhu inlet evaporator dari 95 °C menjadi 140 °C tanpa konsumsi energi tambahan.

**Tahap 7 – Commissioning dan Monitoring**
SOP operasi mengikuti ISO 50001 (Energy Management System) dengan KPI:
- *Net electrical efficiency* $\geq$ baseline ± 5%
- *Availability* $\geq$ 95%
- *Capacity factor* $\geq$ 85% untuk aplikasi base-load

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain: ORC 250 kWe pada Sumber Panas Proses Aluminium Remelting

Kami merujuk pada integrasi fasilitas aluminium remelting Smirnov dkk. (2024) dengan unit ORC. Asumsi parameter:

| Parameter | Nilai | Satuan |
|---|---|---|
| Laju alir panas tersedia $\dot{Q}_{in}$ | 1.500 | kW |
| Suhu sumber masuk $T_{H,in}$ | 280 | °C |
| Suhu sumber keluar $T_{H,out}$ | 160 | °C |
| Suhu kondensor $T_L$ | 30 | °C |
| Fluida kerja | R-245fa | – |
| Efisiensi pompa $\eta_{pump}$ | 0,75 | – |
| Efisiensi turbin $\eta_{turb}$ | 0,80 | – |
| Tekanan kondensor $p_1$ | 150 | kPa |
| Tekanan operasi $p_2$ | 1.600 | kPa |

### 4.2 Langkah Perhitungan Termodinamika

**Langkah 1 – Tentukan estado 1 (inlet pompa, saturated liquid pada 150 kPa)**

Dari tabel saturasi R-245fa pada p = 150 kPa:
$h_1 = 241{,}86 \text{ kJ/kg}$
$s_1 = 1,1762 \text{ kJ/kg·K}$
$v_1 = 0,000791 \text{ m}^3/\text{kg}$

**Langkah 2 – Kompresi isentropik ke p₂ = 1.600 kPa**

Kerja pompa spesifik (ideal):
$$w_{pump,s} = v_1 (p_2 - p_1) = 0{,}000791 \times (1.600 - 150) = 1,146 \text{ kJ/kg}$$

Kerja pompa aktual:
$$w_{pump} = \frac{w_{pump,s}}{\eta_{p