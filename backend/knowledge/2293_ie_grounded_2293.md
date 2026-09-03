# 2293 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal SSRN. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (Electric Vehicle/EV) global telah menciptakan paradoks rekayasa lingkungan yang belum pernah terjadi sebelumnya: keberhasilan adopsi EV sebagai solusi dekarbonisasi transportasi justru menghasilkan *emerging waste stream* berupa baterai lithium-ion bekas (retired EV batteries) dalam volume masif. JIANG Lin dan TANG Lidan (2025) dalam prosiding ICLSE 2024 menekankan bahwa pada periode 2025–2035, Tiongkok saja diproyeksikan menghadapi lebih dari 200 juta unit baterai bekas dengan total berat melebihi 4 juta ton, menjadikan CLSC (Closed-Loop Supply Chain) untuk baterai EV sebagai salah satu isu paling strategis dalam bidang *industrial ecology* dan *circular economy engineering* (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

Urgensi teknis dari permasalahan ini bersifat multidimensional. Pertama, baterai lithium-ion mengandung material kritis (lithium, kobalt, nikel) yang nilai ekonominya tinggi namun ketersediaannya (*critical raw material*) terbatas dan terkonsentrasi di segelintir negara, sehingga terjadi *supply risk* strategis. Kedua, limbah baterai mengandung elektrolit dan logam berat yang bersifat *hazardous* sehingga memerlukan *reverse logistics* yang ketat sesuai standar UN Recommendation on the Transport of Dangerous Goods dan regulasi GB/T 34014-2017 (Tiongkok) tentang pelacakan *automotive power battery traceability*. Ketiga, secara ekonomis, baterai EV yang telah mengalami degradasi *State of Health* (SOH) hingga 70–80% masih memiliki kapasitas residu yang signifikan sehingga layak untuk *echelon utilization* (pemanfaatan bertingkat) pada aplikasi stasioner seperti penyimpanan energi terbarukan (*renewable energy storage*), *telecommunication base station backup*, dan *microgrid*.

Konteks industri ini diperkuat oleh studi Youngchul Shin, Gwang Kim, dan Yoonjea Jeong (2024) yang menunjukkan bahwa model CLSC yang robust harus mengintegrasikan *return management system* untuk menghadapi ketidakpastian permintaan dan kualitas produk yang dikembalikan (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)). Para penulis ini menegaskan bahwa keputusan manufaktur ulang (*remanufacturing*), refurbishment, dan daur ulang material (*material recovery*) harus dioptimasi secara simultan di bawah kendala *stochastic return quantity*. Sinergi kedua literatur ini mengarahkan pada kebutuhan formulasi matematis yang menggabungkan keputusan multi-tier (manufacturer, echelon-user, recycler) di bawah struktur permainan Stackelberg dengan ketidakpastian parameter.

---

## 2. Landasan Teori & Formulasi Matematis

JIANG Lin dan TANG Lidan (2025) mengembangkan model CLSC tiga tahap yang melibatkan **Battery Manufacturer (BM)**, **Echelon Utilization Operator (EU)**, dan **Recycling Remanufacturer (RR)** dalam kerangka *Stackelberg game* di mana BM bertindak sebagai *leader* yang menentukan harga jual baterai baru ($w_b$), harga收购 (*trade-in price*) baterai bekas ($w_r$), serta alokasi kapasitas produksi.

### 2.1 Parameter Keputusan dan Notasi

Parameter keputusan utama:
- $p_b$ = harga jual eceran baterai baru ke konsumen akhir
- $p_e$ = harga jual baterai bekas layak echelon ke aplikasi sekunder
- $p_m$ = harga jual material daur ulang (recovered material)
- $q_b$ = kuantitas produksi baterai baru
- $q_r$ = kuantitas baterai bekas yang dikembalikan dan di-disassemble
- $x$ = fraksi baterai bekas yang dialokasikan untuk echelon utilization, dengan $0 \leq x \leq 1$

### 2.2 Fungsi Permintaan dan Degradasi

Fungsi permintaan baterai baru dimodelkan sebagai fungsi linier dari harga:

$$D_b(p_b) = \alpha - \beta p_b + \gamma x$$

di mana $\alpha$ adalah potensi pasar, $\beta$ adalah elastisitas harga, dan $\gamma$ merepresentasikan efek *green perception* konsumen terhadap program echelon utilization (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

Fungsi penawaran baterai bekas mengikuti formulasi *return flow*:

$$R = \min\left\{\eta q_b, \, \theta D_b(p_b)\right\}$$

dengan $\eta$ adalah rasio baterai yang kembali setelah masa pakai (umumnya 0,7–0,85), dan $\theta$ adalah faktor skala permintaan. Pendekatan serupa untuk *return management* juga diadopsi oleh Shin et al. (2024) yang memperkenalkan variabel acak $\tilde{R}$ dengan distribusi tertentu untuk menguji robustitas model (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)).

### 2.3 Fungsi Objektif

**Fungsi keuntungan Battery Manufacturer (BM) sebagai Stackelberg leader:**

$$\max_{w_b, w_r} \Pi_{BM} = (w_b - c_b) q_b + (w_r - c_r)(1-x)R + A \cdot x \cdot R - \kappa(x)$$

di mana:
- $c_b$ = biaya produksi baterai baru
- $c_r$ = biaya disassembly baterai bekas
- $A$ = *subsidy rate* dari pemerintah untuk program echelon
- $\kappa(x)$ = biaya koordinasi program echelon utilization

**Fungsi keuntungan Echelon Utilization Operator (EU):**

$$\max_{p_e} \Pi_{EU} = (p_e - c_e - w_r) x R$$

dengan $c_e$ adalah biaya operasional echelon (uji kapasitas, refabrikasi ringan, integrasi sistem storage).

**Fungsi keuntungan Recycling Remanufacturer (RR):**

$$\max_{p_m} \Pi_{RR} = (p_m - c_m)(1-x)R + \delta(1-x)R$$

dengan $c_m$ adalah biaya *material recovery* dan $\delta$ adalah *credit value* dari recovery logam kritis.

### 2.4 Kendala (Constraints)

Kendala kapasitas produksi:
$$q_b \leq Q_{max}^{BM}$$

Kendala kualitas baterai bekas untuk echelon:
$$xR \leq R_{echelon}^{max}$$

Kendala non-negatif dan partisipasi individu (*individual rationality*):
$$\Pi_i \geq 0, \quad \forall i \in \{BM, EU, RR\}$$

### 2.5 Prosedur Solusi

JIANG dan TANG (2025) menerapkan prosedur *backward induction* untuk menyelesaikan permainan Stackelberg tiga tingkat. Pertama, reaksi optimal EU dan RR ditentukan sebagai fungsi dari keputusan BM. Kedua, reaksi EU dan RR tersebut disubstitusikan ke fungsi objektif BM untuk kemudian diselesaikan menggunakan *Karush-Kuhn-Tucker (KKT) conditions*. Ketiga, *sensitivity analysis* dilakukan terhadap parameter ketidakpastian (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi CLSC baterai bekas mengikuti arsitektur SOP berlapis yang dirancang untuk menjamin *traceability*, *safety*, dan *economic feasibility*. Berdasarkan integrasi temuan kedua paper, prosedur operasional standar tersusun sebagai berikut:

**Tahap 1 — Battery Collection & Traceability Activation.** Setiap baterai bekas yang masuk ke *collection network* harus disertai kode QR *battery passport* sesuai standar GB/T 34014 yang memuat riwayat siklus pengisian, SOH aktual, dan *carbon footprint* kumulatif. Operator reverse logistics melakukan *triage awal* berdasarkan SOH: baterai dengan SOH ≥ 70% diarahkan ke *echelon channel*, sedangkan SOH < 70% masuk *recycling channel*.

**Tahap 2 — Diagnostic & Sorting.** Echelon Operator melakukan pengujian kapasitas, internal resistance, dan *thermal runaway risk assessment* menggunakan protokol IEC 62933-3-3. baterai yang lolos uji diklasifikasikan ke Grade A (untuk *grid-scale storage*), Grade B (untuk *backup power*), dan Grade C (untuk *low-power applications*).

**Tahap 3 — Decision Allocation Optimization.** Alokasi optimal antar echelon dan recycling diselesaikan dengan model Stackelberg di Section 2, dengan input berupa data kualitas aktual. Hasil optimasi menentukan fraksi $x^*$ yang menjadi *feed-forward command* ke unit disassembly.

**Tahap 4 — Disassembly & Reconditioning.** Proses disassembly mengikuti *Bill of Disassembly* (BoD) yang dikembangkan JIANG dan TANG (2025). Modul baterai dibuka dalam *dry room* dengan *dew point* di bawah -40°C, kemudian sel-sel diuji satu per satu. Sel dengan kapasitas residu ≥ 60% direkonfigurasi untuk aplikasi echelon; sel gagal masuk proses *hydrometallurgical recovery*.

**Tahap 5 — Echelon Integration & Recycling Loop.** Produk echelon diintegrasikan ke sistem *Battery Energy Storage System* (BESS) dengan inverter dan BMS (Battery Management System) yang sesuai. Material recovery dari *recycling channel* menghasilkan lithium carbonate, nickel sulfate, dan cobalt sulfate yang di-supply kembali ke lini produksi BM (*closed-loop material flow*).

**Tahap 6 — Robust Return Management.** Mengikuti Shin et al. (2024), sistem dilengkapi dengan *robust optimization layer* yang menangani fluktuasi kuantitas return, kualitas, dan harga material daur ulang (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)). Pendekatan *box uncertainty set* digunakan untuk menjamin feasibility terhadap skenario terburuk.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan implementasi model, dilakukan studi kasus hipotetis berbasis parameter industri baterai EV LFP (Lithium Iron Phosphate) di pasar Tiongkok. Parameter input ditetapkan sebagai berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $\alpha$ (potensi pasar) | 100.000 | unit/tahun |
| $\beta$ (elastisitas harga) | 50 | unit/juta Yuan |
| $\gamma$ (efek green perception) | 8.000 | unit |
| $c_b$ (biaya produksi baterai baru) | 0,6 | juta Yuan/unit |
| $c_e$ (biaya operasional echelon) | 0,15 | juta Yuan/unit |
| $c_m$ (biaya material recovery) | 0,20 | juta Yuan/unit |
| $c_r$ (biaya disassembly) | 0,05 | juta Yuan/unit |
| $\eta$ (return rate) | 0,75 | - |
| $\theta$ (faktor skala return) | 0,60 | - |
| $A$ (subsidi pemerintah) | 0,08 | juta Yuan/unit |
| $\delta$ (credit recovery) | 0,03 | juta Yuan/unit |

**Langkah 1 — Penentuan Kuantitas Return.** Dengan asumsi harga jual baterai baru $p_b = 1,0$ juta Yuan, maka:
$$D_b = 100.000 - 50(1,0) + 8.000x = 50.000 + 8.000x$$
$$R = 0,75 \cdot q_b, \quad q_b = D_b$$
$$R = 0,75(50.000 + 8.000x) = 37.500 + 6.000x$$

**Langkah 2 — Reaksi Optimal Echelon Operator.** EU memaksimumkan $\Pi_{EU} = (p_e - 0,15 - w_r)(xR)$ dengan kondisi orde-1:
$$p_e^* = \frac{c_e + w_r + \mu}{2}$$
dengan $\mu$ adalah *markup* kompetitif, diasumsikan $\mu = 0,10$ juta Yuan.

**Langkah 3 — Reaksi Optimal Recycler.** RR memaksimumkan $\Pi_{RR} = (p_m - 0,20)(1-x)R + 0,03(1-x)R$. Kondisi KKT menghasilkan:
$$p_m^* = \frac{c_m - \delta + \nu}{2} = \frac{0,20 - 0,03 + 0,15}{2} = 0,16 \text{ juta Yuan}$$

**Langkah 4 — Optimasi BM dengan Backward Induction.** Substitusi reaksi EU dan RR ke $\Pi_{BM}$:
$$\Pi_{BM} = (1,0 - 0,6)(50.000 + 8.000x) + (w_r - 0,05)(1-x)(37.500 + 6.000x) + 0,08x(37.500 + 6.000x) - \kappa(x)$$

Asumsikan $\kappa(x) = 0,02x^2(37.500)$ (biaya koordinasi kuadratik). Derivatif parsial terhadap $x$ dan disetarakan dengan nol menghasilkan persamaan:

$$320.000 + (w_r - 0,05)(6.000 - 6.000x) - 0,08(6.000x) + 0,08(37.500 + 6.000x) - 1.500x = 0$$

Dengan menetapkan $w_r = 0,12$ juta Yuan (harga收购 yang fair terhadap konsumen):

$$320.000 + 0,07(6.000 - 6.000x) - 480x + 3.000 + 480x - 1.500x = 0$$
$$