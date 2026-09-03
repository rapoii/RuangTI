# 1995 — Sistem dalam Kemasan (System-in-Package): Integrasi Heterogen, Keandalan Termal-Mekanis-Elektrikal, dan Arsitektur Chip Hibrida untuk Manufaktur Elektronik Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Review of System-in-Package Technologies: Application and Reliability of Advanced Packaging
**Jurnal & Sitasi Utama:** Haoyu Wang, Jianshe Ma, Yide Yang (2023). *Micromachines*. DOI: [https://doi.org/10.3390/mi14061149](https://doi.org/10.3390/mi14061149)
**Sitasi Pendukung:** Konstantinos Rogdakis, George Psaltakis, Giorgos Fagas (2024). *Discover Materials*. DOI: [https://doi.org/10.1007/s43939-024-00074-w](https://doi.org/10.1007/s43939-024-00074-w)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang menghadapi transisi paradigma yang sangat signifikan, dari pendekatan *Moore's Law* tradisional menuju paradigma *More-than-Moore* di mana integrasi heterogen dan fungsionalitas sistem menjadi pembeda kompetitif utama. Dalam konteks ini, **System-in-Package (SiP)** muncul sebagai teknologi kemasan yang tidak hanya mengecilkan footprint fisik sirkuit terpadu, tetapi juga mengintegrasikan multiple die—baik *active* (CPU, memory, RF transceiver) maupun *passive* (resistor, kapasitor, filter)—ke dalam satu unit paket tunggal dengan interkoneksi berdensitas tinggi. Wang, Ma, dan Yang (2023) dalam *Micromachines* menjelaskan bahwa SiP telah menarik perhatian besar karena tiga keunggulan fundamentalnya: *integration* (integrasi multi-fungsi), *shrinking* (miniaturisasi footprint), dan *high density* (densitas I/O tinggi) — yang secara langsung menjawab kebutuhan pasar akan perangkat kompak, multifungsi, dan berdaya rendah seperti *wearable*, *smartphone* 5G, *implantable medical device*, dan unit kontrol elektronik otomotif (DOI: [10.3390/mi14061149](https://doi.org/10.3390/mi14061149)).

Urgensi ekonomi dari teknologi SiP bersifat strategis. Pada 2022, pasar SiP global bernilai lebih dari USD 14 miliar dan diproyeksikan tumbuh dengan CAGR >8% menuju 2030, didorong oleh permintaan *Internet of Things* (IoT), kendaraan listrik (EV), dan infrastruktur *edge computing*. Namun, seperti ditegaskan oleh Wang et al. (2023), **keandalan (reliability)** masih menjadi blocker utama adopsi SiP di aplikasi *mission-critical*. Tiga faktor kegagalan yang saling terkait—*thermal management*, *mechanical stress*, dan *electrical properties*—harus dikelola secara simultan melalui pendekatan *Design for Reliability* (DfR). Di sisi lain, Rogdakis, Psaltakis, dan Fagas (2024) dalam *Discover Materials* (DOI: [10.1007/s43939-024-00074-w](https://doi.org/10.1007/s43939-024-00074-w)) melengkapi narasi ini dengan memperkenalkan konsep **hybrid chips**: integrasi heterogen material dan teknologi manufaktur yang berbeda pada satu substrak atau paket, dengan tujuan eksplisit menjawab tantangan *sustainability* (daya, jejak karbon, umur pakai) pada generasi baru komponen IoT. Kombinasi keduanya membentuk pilar utama *advanced packaging* era 2020-an dan seterusnya, yang memiliki implikasi langsung terhadap strategi rantai pasok, desain pabrik, dan keputusan rekayasa dalam industri elektronik.

## 2. Landasan Teori & Formulasi Matematis

Keandalan SiP secara kuantitatif dimodelkan melalui tiga persamaan fisika fundamental yang masing-masing merepresentasikan dimensi keandalan yang dibahas Wang et al. (2023): termal, mekanis, dan elektrikal.

**2.1. Model Termal — Persamaan Konduksi Panas Fourier**

Distribusi panas pada SiP dimodelkan dengan hukum Fourier dalam kondisi tunak (steady-state) untuk geometri multi-layer:

$$q'' = -k \cdot A \cdot \frac{dT}{dx}$$

di mana $q''$ adalah fluks panas (W/m²), $k$ adalah konduktivitas termal material (W/m·K), $A$ adalah luas penampang lintasan panas (m²), dan $dT/dx$ adalah gradien suhu. Untuk susunan multi-layer (die → TIM1 → heat spreader → TIM2 → heatsink), resistansi termal total dievaluasi sebagai resistansi seri:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i}$$

dengan $t_i$ adalah tebal lapisan ke-$i$. Wang et al. (2023) menekankan bahwa thermal interface material (TIM) dengan konduktivitas $k_{TIM}$ rendah merupakan *bottleneck* dominan — untuk TIM konvensional $k_{TIM} \approx 1{-}4$ W/m·K, sementara target material graphene-enhanced TIM mencapai $k_{TIM} > 12$ W/m·K. Suhu junction maksimum $T_j$ kemudian dihitung:

$$T_j = T_a + P_{diss} \cdot R_{th,total}$$

dengan $T_a$ suhu ambien dan $P_{diss}$ disipasi daya total. Spesifikasi industri seperti JEDEC JESD51 mensyaratkan $T_j \leq 125°C$ untuk grade komersial.

**2.2. Model Mekanis — Mismatch Koefisien Ekspansi Termal (CTE)**

Stres mekanis akibat siklus termal dimodelkan dengan persamaan Timoshenko untuk *bi-material strip*:

$$\varepsilon_{mismatch} = \Delta\alpha \cdot \Delta T$$

$$\sigma = E \cdot \varepsilon_{mismatch} = E \cdot \Delta\alpha \cdot \Delta T$$

dengan $\Delta\alpha = \alpha_{die} - \alpha_{substrate}$ adalah selisih CTE, $E$ adalah modulus Young, dan $\Delta T$ adalah ekskursi termal. Wang et al. (2023) melaporkan bahwa CTE silikon ($\alpha_{Si} \approx 2.6$ ppm/K) sangat berbeda dengan CTE substrat organik FR-4 ($\alpha_{FR4} \approx 14{-}17$ ppm/K), sehingga siklus termal operasi dapat menghasilkan tegangan geser pada *solder joint* dan *underfill*. Prediksi umur lelah (fatigue life) sering menggunakan hukum Coffin-Manson:

$$N_f = A \cdot (\Delta\gamma)^{-n}$$

dengan $\Delta\gamma$ adalah *shear strain range* per siklus, dan eksponen $n \approx 1.9{-}2.5$ untuk solder SAC (Sn-Ag-Cu).

**2.3. Model Elektrikal — Integritas Sinyal dan Daya**

Untuk jalur interkoneksi SiP dengan panjang kritis $l$ dan resistivitas $\rho$, resistansi DC diberikan oleh:

$$R_{dc} = \frac{\rho \cdot l}{w \cdot t}$$

dan untuk frekuensi tinggi di mana *skin effect* dominan, resistansi AC mendekati:

$$R_{ac} \approx R_{dc} \cdot \frac{t}{\delta}$$

dengan $\delta = \sqrt{2\rho/(\omega \mu)}$ adalah *skin depth*. Rugi-rugi dielektrik pada substrat dievaluasi dengan *loss tangent* $\tan\delta$, yang menjadi perhatian khusus pada aplikasi RF 5G mmWave yang beroperasi pada 28–60 GHz (Wang et al., 2023).

**2.4. Pendekatan Hybrid Chip — Efisiensi Daya Heterogen**

Rogdakis et al. (2024) memperkenalkan kerangka **Energy-Performance Sustainability Index (EPSI)** untuk sistem hybrid:

$$EPSI = \frac{P_{op} \cdot E_{carbon}}{T_{useful}}$$

di mana $P_{op}$ adalah daya operasional, $E_{carbon}$ adalah *embodied carbon* (kg CO₂-eq per fabrikasi chip), dan $T_{useful}$ adalah *useful lifetime*. Hybrid chips yang mengintegrasikan node CMOS成熟 dengan material *thin-film* atau *compound semiconductor* secara substansial menurunkan $P_{op}$ untuk workload IoT tertentu.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri SiP mengikuti alur rekayasa berlapis yang selaras dengan standar IPC, JEDEC, dan IEEE, sebagaimana distrukturkan oleh Wang et al. (2023):

```
┌──────────────────────────────────────────────────────────────┐
│  Tahap 1: System-Level Co-Design & Architecture Partitioning  │
│   - Spesifikasi fungsional, power budget, thermal envelope    │
│   - Pilih 2.5D/3D/Fan-Out-Wafer-Level-Packaging (FOWLP)      │
└──────────────────────────┬───────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 2: Material & Substrate Selection (DfR Stage-1)       │
│   - CTE matching via interposer Si/glass/organic              │
│   - TIM konduktivitas tinggi (graphene, Ag-Sinter)            │
└──────────────────────────┬───────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 3: Thermal-Mechanical-Electrical Co-Simulation         │
│   - FEA (ANSYS/Icepak) untuk T-distribution & stress          │
│   - Power integrity (PI) & Signal integrity (SI) EM-solver    │
└──────────────────────────┬───────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 4: Reliability Validation per JEDEC/IPC Standards     │
│   - TCT: -65°C ↔ +150°C, 1000 siklus (JESD22-A104)           │
│   - HTSL, HTS, uHAST, Solder joint shear test                │
│   - HTOL & Board-Level Reliability (IPC-9701)                │
└──────────────────────────┬───────────────────────────────────┘
                           ▼
┌──────────────────────────────────────────────────────────────┐
│  Tahap 5: Failure Analysis & Continuous Improvement           │
│   - SAM, X-section, SEM/EDX, dye-and-pry                     │
│   - Update model, feedback ke Tahap 1 (V-loop)                │
└──────────────────────────────────────────────────────────────┘
```

Wang et al. (2023) menekankan bahwa integrasi **multi-physics co-simulation** pada Tahap 3 sangat krusial karena optimasi termal saja dapat mengorbankan integritas mekanis dan sebaliknya — diperlukan algoritma *multi-objective optimization* (misal: NSGA-II) yang meminimalkan $R_{th,total}$, $\sigma_{max}$, dan $R_{ac}$ secara simultan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah SiP untuk aplikasi *wearable health monitor* dengan arsitektur: 1× application processor (AP) + 1× BLE 5.3 radio + 1× low-power MCU + 4× passive filter, dikemas dalam konfigurasi **Fan-Out Wafer-Level Packaging (FOWLP)** dengan substrat epoxy molding compound (EMC).

**Input Parameter Industri:**

| Parameter | Nilai | Satuan |
|---|---|---|
| $P_{diss}$ (AP peak) | 1.20 | W |
| $P_{diss}$ (radio aktif) | 0.15 | W |
| $P_{diss}$ (MCU + passives) | 0.05 | W |
| $T_a$ (skenario wearable, kulit) | 35.0 | °C |
| $t_{die}$ | 0.30 | mm |
| $t_{TIM1}$ | 0.05 | mm |
| $t_{mold}$ | 0.50 | mm |
| $k_{die}$ (Si) | 148 | W/m·K |
| $k_{TIM1}$ (konvensional) | 3.0 | W/m·K |
| $k_{mold}$ (EMC) | 0.9 | W/m·K |
| $A_{eff}$ (effective heat-spread) | 25 | mm² = 2.5×10⁻⁵ m² |

**Langkah 1 — Total disipasi daya aktif rata-rata (duty-cycled, 30%):**

$$P_{total} = (1.20 \times 0.30) + (0.15 \times 0.20) + 0.05 = 0.44 \text{ W}$$

**Langkah 2 — Resistansi termal total serial:**

$$R_{th,die} = \frac{0.30\times 10^{-3}}{148 \times 2.5\times 10^{-5}} = \frac{3.0\times 10^{-4}}{3.7\times 10^{-3}} = 0.081 \text{ K/W}$$

$$R_{th,TIM1} = \frac{0.05\times 10^{-3}}{3.0 \times 2.5\times 10^{-5}} = \frac{5.0\times 10^{-5}}{7.5\times 10^{-5}} = 0.667 \text{ K/W}$$

$$R_{th,mold} = \frac{0.50\times 10^{-3}}{0.9 \times 2.5\times 10^{-5}} = \frac{5.0\times 10^{-4}}{2.25\times 10^{-5}} = 22.22 \text{ K/W}$$

$$R_{th,total} = 0.081 + 0.667 + 22.22 = 22.97 \text{ K/W}$$

**Langkah 3 — Suhu junction aktual:**

$$T_j = 35 + 0.44 \times 22.97 = 35 + 10.11 = 45.11 \text{ °C}$$

**Langkah 4 — Skenario perbaikan (TIM graphene-enhanced, $k_{TIM} = 12$ W/m·K):**

$$R_{th,TIM1,new} = \frac{5.0\times 10^{-5}}{12 \times 2.5\times 10^{-5}} = \frac{5.0\times 10^{-5}}{3.0\times 10^{-4}} = 0.167 \text{ K/W}$$

$$R
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
