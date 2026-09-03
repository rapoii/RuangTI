# 2357 — Strategi Closed-Loop Supply Chain untuk Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Power Bekas Pakai

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain (CLSC) untuk Pemanfaatan Bertingkat (*Echelon Utilization*) dan Remanufaktur Daur Ulang Baterai Power Bekas Pakai
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik global — yang diproyeksikan menembus 145 juta unit pada 2030 (IEA, 2024) — telah menciptakan tantangan logistik terbalik (*reverse logistics*) yang belum pernah terjadi sebelumnya dalam sejarah manufaktur baterai. Baterai Lithium-ion (*power battery*) yang memasuki fase *end-of-first-life* (umumnya setelah State of Health/SoH turun di bawah 80%) memiliki kapasitas tersisa yang masih signifikan untuk aplikasi *second-life*, namun jalur pemrosesan pascapakainya masih sangat terfragmentasi. JIANG Lin & TANG Lidan (2025) dalam prosiding ICLSE 2024 ([DOI: 10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menekankan urgensi pengembangan arsitektur CLSC terintegrasi yang mampu mengakomodasi dua jalur pemulihan secara simultan, yaitu *echelon utilization* (pemanfaatan bertingkat untuk aplikasi stasioner seperti penyimpanan energi grid atau UPS telekomunikasi) dan *recycling remanufacturing* (daur ulang material katoda/anoda untuk produksi sel baru). Kompleksitas meningkat ketika mempertimbangkan disparitas kualitas退役 baterai, fluktuasi harga material kritis seperti litium ($13,5/kg di LME 2024), kobalt ($33.000/ton), dan nikel, serta ketidakpastian permintaan pasar sekunder.

Kontribusi krusial paper JIANG & TANG terletak pada perumusan strategi CLSC yang tidak lagi memperlakukan baterai bekas sebagai *waste stream* homogen, melainkan sebagai *heterogeneous asset flow* dengan empat kategori kualitas berdasarkan SoH: Grade A (>90%), Grade B (80–90%), Grade C (70–80%), dan Grade E (<70% yang langsung menuju *recycling*). Pendekatan ini secara fundamental mengubah paradigma desain jaringan terbalik dari model *single-channel* konvensional menjadi *multi-channel hybrid echelon-recycling network*. Pelengkap penting dari kerangka ini adalah integrasi dimensi *robust optimization* untuk mengelola ketidakpastian *return rate*, seperti yang dikemukakan Shin, Kim, & Jeong (2024) dalam [DOI: 10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197), yang menyoroti bahwa kegagalan mengelola variabilitas pengembalian baterai dapat meningkatkan total biaya CLSC hingga 23–38% pada skenario worst-case. Urgensi industri semakin diperkuat oleh regulasi Extended Producer Responsibility (EPR) yang berlaku di Uni Eropa (Direktif 2023/1542) dan Tiongkok (GB/T 34014-2017), yang mewajibkan OEM baterai mengambil tanggung jawab finansial dan logistik atas siklus hidup penuh produk. Konteks Indonesia juga relevan dengan target *Net Zero Emission* 2060 dan potensi besar baterai bekas dari armada ojek listrik dan *captive power* telekomunikasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Jaringan CLSC Multi-Eselon

JIANG & TANG (2025) memodelkan CLSC baterai dengan tujuh entitas keputusan: *battery manufacturer* (BM), *echelon utilization center* (EUC), *recycling remanufacturing plant* (RRP), *collection center* (CC), *second-life market* (SLM), *primary market* (PM), dan *disposal facility* (DF). Fungsi tujuan utama (*objective function*) meminimalkan total biaya sistem $\Pi$ selama horizon perencanaan $T$:

$$\min \Pi = \sum_{t=1}^{T} \left( C_{prod}^{t} + C_{coll}^{t} + C_{trans}^{t} + C_{proc}^{t} + C_{inv}^{t} + C_{pen}^{t} \right)$$

di mana $C_{prod}^{t}$ adalah biaya produksi baterai baru, $C_{coll}^{t}$ biaya pengumpulan, $C_{trans}^{t}$ biaya транспортasi, $C_{proc}^{t}$ biaya pemrosesan (echelon + recycling), $C_{inv}^{t}$ biaya inventori, dan $C_{pen}^{t}$ biaya penalti ketidakpuasan permintaan.

### 2.2 Fungsi Biaya Detail

Untuk setiap jalur distribusi $i \to j$ pada periode $t$, biaya transportasi dimodelkan sebagai fungsi tonase:

$$C_{trans}^{t} = \sum_{i \in I}\sum_{j \in J} \left( \alpha_{ij} + \beta_{ij} \cdot q_{ij}^{t\,2} \right)$$

dengan $\alpha_{ij}$ biaya tetap per rute, $\beta_{ij}$ koefisien biaya variabel (*convex cost function* untuk menangkap efek kemacetan), dan $q_{ij}^{t}$ kuantitas aliran baterai (unit).

Biaya pemrosesan di EUC mempertimbangkan degradasi kapasitas saat repurposing:

$$C_{proc,EUC}^{t} = \sum_{k \in K} \left( \gamma_k^{rem} + \delta_k \cdot \left( 1 - \eta_k \right) \right) \cdot x_{k,EUC}^{t}$$

di mana $\gamma_k^{rem}$ adalah biaya remanufaktur per grade $k$, $\delta_k$ penalti kapasitas hilang, $\eta_k$ *retention rate* kapasitas (Grade B: $\eta = 0,85$, Grade C: $\eta = 0,72$), dan $x_{k,EUC}^{t}$ alokasi baterai grade $k$ ke EUC.

### 2.3 Model *Robust Counterpart* untuk Ketidakpastian Return

Mengadopsi kerangka Shin, Kim, & Jeong (2024), parameter permintaan dan return rate $\tilde{d}^{t}$ dimodelkan sebagai variabel tidak pasti dalam *uncertainty set* box ellipsoidal:

$$\mathcal{U} = \left\{ \tilde{d}^{t} : \tilde{d}^{t} = \bar{d}^{t} + \hat{d}^{t} \cdot \zeta^{t},\ \sum_{t=1}^{T} |\zeta^{t}| \leq \Gamma \right\}$$

dengan $\Gamma$ adalah *budget of uncertainty* (parameter konservativeness), $\bar{d}^{t}$ nilai nominal, dan $\hat{d}^{t}$ deviasi maksimum. *Robust counterpart* dari kendala kapasitas EUC menjadi:

$$\sum_{k} x_{k,EUC}^{t} + \Gamma \cdot \hat{x}_{EUC} \leq \text{Cap}_{EUC} + \sum_{k}\eta_k \cdot \bar{x}_{k,EUC}^{t}$$

### 2.4 Kendala Keseimbangan Aliran (*Flow Balance*)

Setiap collection center harus memenuhi konservasi massa baterai:

$$\sum_{i} q_{ci}^{t} + r^{t} = \sum_{j \in \{EUC, RRP, DF\}} q_{cj}^{t}$$

di mana $r^{t}$ adalah *return rate* dari pasar primer pada periode $t$.

### 2.5 Model Harga & Keputusan Stackelberg

JIANG & TANG (2025) menyertakan struktur keputusan hierarkis di mana BM sebagai *leader* menentukan harga jual $p_{new}^{t}$ dan harga beli kembali $p_{buy}^{t}$, sementara *recycler* dan EUC sebagai *follower* merespons dengan keputusan kapasitas $y_{RRP}$, $y_{EUC}$. Harga beli kembali optimal memenuhi:

$$p_{buy}^{t*} = \arg\max_{p_{buy}^{t}} \pi_{BM}^{t} \quad \text{s.t.} \quad \text{IR}_{RRP} \geq 0,\ \text{IR}_{EUC} \geq 0$$

di mana IR (*Individual Rationality*) menjamin profit non-negatif bagi follower.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka CLSC baterai bekas mengikuti SOP berlapis yang dikembangkan dari protokol JIANG & TANG (2025) dengan augmentasi *return management* Shin et al. (2024):

**Tahap 1 — Identifikasi & Klasifikasi Armada.** Pelacakan unit baterai melalui *Battery Management System* (BMS) dengan telemetry SoH, siklus pengisian, suhu operasi, dan C-rate historis. Data di-*streaming* ke *digital twin* baterai menggunakan protokol ISO 21434 (keamanan siber otomotif).

**Tahap 2 — Trigger Pengumpulan.** Saat SoH turun di bawah ambang 85%, BMS mengirim sinyal balik ke OEM; pada SoH 80%, baterai secara otomatis masuk *second-life pipeline*. Ini mengikuti logika *trigger*:

$$\text{Trigger}_{\text{return}} = \mathbb{1}\left[\text{SoH}^{t} \leq 0,80\ \lor\ \text{Cycles}^{t} \geq 2000\right]$$

**Tahap 3 — Pengumpulan & Transportasi.** Pengangkutan baterai bekas mengikuti standar UN 3480 (kelas 9 dangerous goods) dengan kemasan *Class 9* dan suhu terkontrol ($15–25^\circ$C). Rute transportasi dioptimasi dengan *Vehicle Routing Problem with Time Windows* (VRP-TW) yang meminimalkan:

$$\min \sum_{v \in V} \sum_{(i,j) \in E} c_{ij} \cdot z_{ijv}$$

dengan $z_{ijv} \in \{0,1\}$ keputusan apakah kendaraan $v$ melewati edge $(i,j)$.

**Tahap 4 — Diagnosis & Sorting di Collection Center.** Pengujian kapasitas (*capacity test*), impedansi AC, dan *thermal runaway* screening. Baterai diklasifikasikan ke Grade A/B/C/E menggunakan model *Random Forest classifier* (akurasi 94,7% menurut literatur industri).

**Tahap 5 — Disposisi Multi-Saluran.** Grade A → pasar second-life premium (pertahanan, aerospace); Grade B → *echelon utilization* UPS telekomunikasi/storage grid; Grade C → baterai industri forklift/AGV; Grade E → *recycling* melalui proses hidrometalurgi (*leaching* dengan asam sulfat untuk回收 litium/kobalt).

**Tahap 6 — Penutupan Loop & Reverse Logistics.** Material hasil daur ulang dikirim kembali ke BM untuk produksi sel baru, menutup *closed-loop* secara sempurna. Indikator keberhasilan diukur melalui *Material Circularity Indicator* (MCI) dari Ellen MacArthur Foundation.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Operator armada 50.000 unit EV (masing-masing baterai 75 kWh NMC 811) memasuki fase退役 di pasar Jakarta-Bandung pada 2025–2030. Kita hitung dimensi CLSC-nya.

### 4.1 Parameter Input

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Unit baterai退役 | $N$ | 50.000 | unit |
| Kapasitas awal per unit | $C_{0}$ | 75 | kWh |
| Kapasitas rata-rata退役 | $\bar{C}$ | 60 | kWh (SoH 80%) |
| Harga litium (LME) | $p_{Li}$ | 13,5 | USD/kg |
| Harga kobalt | $p_{Co}$ | 33.000 | USD/ton |
| Densitas energi katoda NMC | $\rho$ | 0,18 | kg/kWh |
| Recovery rate litium | $\eta_{Li}$ | 0,92 | – |
| Recovery rate kobalt | $\eta_{Co}$ | 0,95 | – |
| Biaya сбор | $c_{coll}$ | 45 | USD/unit |
| Biaya pengangkutan | $c_{trans}$ | 12 | USD/unit/km |
| Biaya拆卸 Grade B | $c_{rem,B}$ | 280 | USD/unit |
| Biaya recycling Grade E | $c_{rec,E}$ | 720 | USD/unit |
| Harga jual second-life Grade B | $p_{SL,B}$ | 6.200 | USD/unit |
| Permintaan second-life | $D_{SL}$ | 18.000 | unit/tahun |
| Permintaan pasar primer | $D_{PM}$ | 45.000 | unit/tahun |

### 4.2 Distribusi Grade Kualitas

Berdasarkan data empiris paper JIANG & TANG (2025) untuk pasar baterai matang:
- Grade A (SoH >90%): $\lambda_A = 0,08$ → $N_A = 4.000$ unit
- Grade B (80–90%): $\lambda_B = 0,42$ → $N_B = 21.000$ unit
- Grade C (70–80%): $\lambda_C = 0,30$ → $N_C = 15.000$ unit
- Grade E (<70%): $\lambda_E = 0,20$ → $N_E = 10.000$ unit

### 4.3 Perhitungan Revenue Second-Life (Grade B)

$$R_{SL} = N_B \cdot p_{SL,B} = 21.000