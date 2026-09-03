# 2741 — Strategi Rantai Pasok Tertutup (CLSC) untuk Utilisasi Bertingkat dan Daur Ulang Remanufaktur Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing  
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)  
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global (Electric Vehicle/EV) yang diproyeksikan menembus 145 juta unit pada 2030 (IEA, 2024) menciptakan tantangan siklus hidup (*life-cycle*) yang krusial, yaitu manajemen baterai lithium-ion bekas (*retired power battery*). Ketika State of Health (SOH) baterai turun di bawah ambang 70–80%, modul baterai tidak lagi layak untuk aplikasi otomotif, namun kapasitas residualnya masih signifikan untuk aplikasi sekunder seperti *stationary energy storage system* (ESS), lampu jalan pintar, dan *backup power* telekomunikasi. Inilah yang disebut **echelon utilization** (utilisasi bertingkat) — sebuah strategi kaskade umur pakai (*cascading usage*) yang memperpanjang nilai ekonomis baterai sebelum akhirnya memasuki fase *recycling* dan *remanufacturing* (JIANG & TANG, 2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

Studi JIANG dan TANG (2025) yang dipublikasikan dalam *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)* mengembangkan strategi rantai pasok tertutup (*closed-loop supply chain*/CLSC) yang secara simultan mengintegrasikan tiga sub-sistem: (1) **forward chain** dari manufaktur baterai baru hingga konsumen EV; (2) **reverse chain** berupa pengumpulan baterai退役 (*retired*); dan (3) **echelon channel** yang melakukan redistribusi baterai bekas untuk aplikasi sekunder. Pendekatan ini dianalisis menggunakan *Stackelberg game theory* dengan *battery manufacturer* sebagai *leader* dan *recycler/remanufakturer* sebagai *follower*, menghasilkan titik ekuilibrium Nash-Generalized Nash Equilibrium (GNE) yang optimal secara profit-maksimisasi.

Urgensi strategis penelitian ini diperkuat oleh data International Energy Agency (IEA) yang memperkirakan akan ada 1,2 juta ton baterai lithium-ion bekas yang memasuki *end-of-life* pada 2030. Tanpa arsitektur CLSC yang matang, penumpukan baterai bekas akan menciptakan **eksternalitas lingkungan masif** (kebocoran elektrolit, kontaminasi tanah) dan **kehilangan ekonomi sirkular** karena material kritis seperti litium, kobalt, dan nikel tidak dapat direkoveri secara efisien. Shin, Kim, dan Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* melengkapi kerangka ini dengan menambahkan dimensi *return management system* yang robust terhadap ketidakpastian permintaan回收, sehingga model JIANG-TANG menjadi lebih *resilient* terhadap fluktuasi pasar. Kombinasi kedua paper ini memberikan fondasi analitis yang kuat bagi insinyur industri untuk merancang ekosistem baterai sirkular yang profitable dan sustainable.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Sistem CLSC Tiga-Eselon

Model JIANG dan TANG (2025) mempertimbangkan struktur jaringan dengan empat entitas keputusan:

- **Battery Manufacturer (BM)**: Memproduksi baterai baru ($q_n$) dan menentukan harga jual grosir ($w$) ke OEM
- **OEM/EV Manufacturer**: Meng-assembly baterai ke kendaraan dengan harga retail ($p$)
- **Third-party Recycler (TPR)**: Mengumpulkan baterai bekas, melakukan *echelon utilization* dan *remanufacturing*
- **Echelon Market (EM)**: Pasar sekunder untuk baterai repurposed (ESS, telekomunikasi, dll.)

### 2.2 Formulasi Model *Stackelberg Game*

**Fungsi Permintaan Pasar Primer** (downward-sloping linear):
$$D_n = a - b p \quad \text{...(1)}$$

di mana $a > 0$ adalah *market potential* dan $b > 0$ adalah koefisien sensitivitas harga.

**Fungsi Profit Battery Manufacturer**:
$$\pi_{BM} = (w - c_n) q_n + (w_r - c_r) q_r - \alpha I_e \quad \text{...(2)}$$

dengan $c_n$ = biaya produksi baterai baru, $w_r$ = harga jual baterai remanufaktur, $c_r$ = biaya remanufaktur, $q_r$ = kuantitas remanufaktur, $\alpha$ = koefisien investasi echelon, $I_e$ = investasi di fasilitas echelon utilization.

**Fungsi Profit Recycler/Remanufakturer**:
$$\pi_{TPR} = p_e q_e + p_{rm} q_{rm} - c_{col} q_{col} - c_{proc} q_{proc} \quad \text{...(3)}$$

dengan $p_e$ = harga jual baterai echelon, $p_{rm}$ = harga jual material daur ulang, $c_{col}$ = biaya pengumpulan, $c_{proc}$ = biaya proses.

**Konservasi Aliran Material (Flow Balance)**:
$$q_{col} = q_e + q_{rm} + q_{loss} \quad \text{...(4)}$$

di mana $q_{col}$ adalah baterai yang dikumpulkan, terdistribusi ke echelon ($q_e$), remanufaktur ($q_{rm}$), dan kerugian proses ($q_{loss}$).

**Fungsi Harga Daur Ulang** (menurut Shin, Kim & Jeong, 2024):
$$p_{rm} = \beta - \gamma \cdot \theta \quad \text{...(5)}$$

di mana $\theta$ adalah *collection rate* dan $\beta, \gamma$ adalah parameter pasar material recovered.

### 2.3 Model Robust (Pelengkap Shin et al., 2024)

Untuk menangani ketidakpastian permintaan回收 $\tilde{D}_r = D_r + \epsilon$ dengan $\epsilon \sim U[-\delta, \delta]$, Shin et al. (2024) menggunakan **worst-case robust optimization**:

$$\max_{q_r} \min_{\tilde{D}_r} \pi_{TPR}^{robust} = \max_{q_r} \min_{\tilde{D}_r} \left[ (p_{rm} - c_{rm}) \tilde{D}_r - c_{hold} (q_r - \tilde{D}_r)^+ - c_{loss}(q_r - \tilde{D}_r)^- \right] \quad \text{...(6)}$$

Solusi analitis menghasilkan *order-up-to level* optimal:
$$q_r^* = D_r + \frac{\delta}{2} \sqrt{\frac{c_{hold}}{c_{hold} + c_{loss}}} \quad \text{...(7)}$$

Persamaan (7) menunjukkan bahwa ketidakpastian回收 $\delta$ secara langsung meningkatkan *safety stock*回收 secara proporsional.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir CLSC Baterai Bekas

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ 1. Material      │───▶│ 2. Battery       │───▶│ 3. OEM/EV        │
│    Sourcing      │    │    Manufacturer  │    │    Assembly      │
│ (Li, Co, Ni)     │    │    (BM)          │    │                  │
└──────────────────┘    └──────────────────┘    └────────┬─────────┘
                                                         │
                                                         ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ 8. Material      │◀───│ 7. Hydromet/     │◀───│ 4. End Consumer  │
│    Recovery      │    │    Pyromet       │    │    (EV Fleet)    │
│ (Closed Loop)    │    │    Recycling     │    │                  │
└──────────────────┘    └──────────────────┘    └────────┬─────────┘
        ▲                      ▲                         │
        │                      │                         ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ 6. Echelon       │◀───│ 5. Collection    │◀───│   SOH < 70-80%   │
│    Utilization   │    │    Network (TPR) │    │   Retired Battery│
│ (ESS, Telecom)   │    │                  │    │                  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

### 3.2 SOP Implementasi Industri

**Tahap 1: Identifikasi & Pengumpulan (Collection)**
1. Pasang *battery monitoring system* (BMS) di tiap EV untuk tracking real-time SOH, impedansi, dan siklus charge-discharge
2. Saat SOH < 80%, OEM mengeluarkan *end-of-first-life certificate* (berdasarkan standar IEC 62933-3-1 dan GB/T 34014-2017 China)
3. TPR melakukan *reverse logistics pickup* dengan armada bersertifikat UN 3480 (transportasi baterai lithium)

**Tahap 2: Sortasi & Diagnosis**
1. **Tier-A testing**: Modul dengan SOH 70–80% → masuk *echelon utilization* (profit margin lebih tinggi, ~USD 80–120/kWh)
2. **Tier-B testing**: Modul dengan SOH 50–70% → *remanufacturing* (cell-level replacement, ~USD 50–80/kWh)
3. **Tier-C (SOH < 50%)**: Direct *recycling* → *hydrometallurgical* atau *pyrometallurgical* recovery

**Tahap 3: Optimasi Jaringan CLSC**
1. Formulasikan model Stackelberg (Persamaan 1–5) dengan parameter aktual
2. Solve menggunakan *Generalized Nash Equilibrium Problem* (GNEP) dengan metode *variational equilibrium* atau *semi-smooth Newton*
3. Validasi robust solution (Persamaan 6–7) untuk skenario stress test permintaan回收 ±20%

**Tahap 4: Implementasi & Monitoring**
1. Deploy *digital twin* baterai berbasis blockchain untuk traceability material (sesuai ISO 21494)
2. KPI monitoring: *collection rate* ≥ 90%, *echelon yield* ≥ 60%, *recycling efficiency* ≥ 95%
3. Review kuartalan dengan mekanisme *price-sharing* antara BM dan TPR

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Studi Kasus: Pabrik Baterai 50 GWh/tahun di Asia Tenggara)

| Parameter | Simbol | Nilai | Unit |
|-----------|--------|-------|------|
| Market potential | $a$ | 500.000 | unit baterai/tahun |
| Price sensitivity | $b$ | 1.200 | unit/USD |
| Biaya produksi baterai baru | $c_n$ | 95 | USD/kWh |
| Biaya remanufaktur | $c_r$ | 45 | USD/kWh |
| Biaya pengumpulan | $c_{col}$ | 8 | USD/kWh |
| Biaya proses daur ulang | $c_{proc}$ | 12 | USD/kWh |
| Koefisien回收 | $\beta$ | 70 | USD/kWh |
| Sensitivitas回收 | $\gamma$ | 50 | USD/kWh |
| Kapasitas baterai rata-rata | $K$ | 60 | kWh/unit |
| Ketidakpastian回收 | $\delta$ | 15.000 | unit/tahun |
| Collection rate target | $\theta$ | 0,85 | - |
| Biaya holding回收 | $c_{hold}$ | 5 | USD/unit |
| Biaya stockout回收 | $c_{loss}$ | 25 | USD/unit |

### 4.2 Perhitungan Step-by-Step

**Langkah 1: Penentuan Harga Equilibrium**

Untuk *Stackelberg game*, BM sebagai *leader* mengumumkan harga $w$ terlebih dahulu, kemudian TPR merespons dengan keputusan回收 $q_r$.

*Best response function* TPR (turunan parsial $\partial \pi_{TPR}/\partial q_r = 0$):
$$q_r^*(w) = \frac{\beta - c_{proc} - \gamma \theta - 0,5w}{2\gamma} \