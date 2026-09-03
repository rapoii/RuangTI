# 1409 — Perencanaan Stasiun Pengisian Daya Tinggi (High-Power Charging) untuk Kendaraan Listrik: Kerangka Rekayasa Sistem, Optimasi Lokasi, dan Integrasi Jaringan Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Planning of High-Power Charging Stations for Electric Vehicles: A Review
**Jurnal & Sitasi Utama:** Alberto Danese, Bendik Nybakk Torsæter, Andreas Sumper (2022). *Applied Sciences*, 12(7), 3214. DOI: [https://doi.org/10.3390/app12073214](https://doi.org/10.3390/app12073214)
**Sitasi Pendukung:** Yulei Wu, Hong‐Ning Dai, Haozhe Wang (2022). *IEEE Communications Surveys & Tutorials*, 24(2), 1178–1211. DOI: [https://doi.org/10.1109/comst.2022.3158270](https://doi.org/10.1109/comst.2022.3158270)

---

## 1. Pendahuluan dan Konteks Industri

Elektrifikasi sektor transportasi global telah menjadi pilar utama strategi dekarbonisasi dan pencapaian target *Net Zero Emissions*. Seperti ditegaskan oleh Danese, Torsæter, dan Sumper (2022) dalam tinjauan sistematisnya di *Applied Sciences*, perencanaan infrastruktur pengisian kendaraan listrik (Electric Vehicle Supply Equipment/EVSE) bukan sekadar persoalan pemasangan unit charger, melainkan sebuah *siklus perencanaan rekayasa sistem* yang kompleks dan berjangka panjang. Menurut Danese et al. (2022, DOI: 10.3390/app12073214), terdapat tiga tantangan struktural yang harus dijawab secara simultan: (1) ketidakpastian laju adopsi EV per moda transportasi, (2) kesenjangan kapasitas jaringan distribusi tenaga listrik terhadap beban puncak agregat, dan (3) fragmentasi standar teknis antarpabrikan yang menimbulkan risiko interoperabilitas.

Konteks industri modern menunjukkan bahwa pasar EV global tumbuh pada Compound Annual Growth Rate (CAGR) lebih dari 25% per tahun, sementara densitas publik charger masih menjadi *bottleneck* dominan. High-Power Charging (HPC) stations—yang didefinisikan oleh Danese et al. (2022) sebagai unit pengisian dengan kapasitas ≥ 150 kW (DC fast charging) hingga 350 kW+ (extreme fast charging)—memiliki karakteristik operasional yang berbeda secara fundamental dari AC charger konvensional. HPC menuntut *grid upgrade*, transformator dedicated, sistem pendingin aktif pada konektor, dan site footprint minimal 50–100 m² untuk menghindari *queue overflow*.

Urgensi ekonominya semakin nyata ketika dimasukkan variabel *Total Cost of Ownership (TCO)*. Danese et al. (2022) menekankan bahwa perencanaan tanpa metodologi optimasi akan menghasilkan *overspending* 30–60% pada fase CapEx dan *underutilization* pada 40% aset charger di tahun operasional pertama. Lebih lanjut, paper Wu, Dai, dan Wang (2022, DOI: 10.1109/comst.2022.3158270) dalam *IEEE Communications Surveys & Tutorials* menambahkan dimensi baru: infrastruktur HPC modern tidak lagi berdiri sendiri, melainkan merupakan *cyber-physical system* yang memerlukan *network slicing* 5G/6G, edge computing, dan protokol Vehicle-to-Grid (V2G). Integrasi ini menciptakan permintaan baru akan *orchestration layer* yang mampu mengelola ribuan aset secara real-time.

Dalam perspektif Teknik Industri, perencanaan HPC merupakan masalah *facility location problem* klasik yang diperkaya dengan kendala dinamis: permintaan yang *time-varying*, kapasitas jaringan yang *stochastic*, dan harga listrik yang bergantung pada *day-ahead market*. Tanpa kerangka kuantitatif yang kuat, keputusan investasi akan didominasi oleh intuisi politis dan *first-mover bias*, alih-alih oleh analisis optimasi multi-objective. Oleh karena itu, modul ini menyajikan formulasi matematis, SOP rekayasa, dan studi kasus kuantitatif untuk menjawab kebutuhan tersebut.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lokasi-Alokasi Mixed Integer Linear Programming (MILP)

Formulasi kanonik yang digunakan dalam Danese et al. (2022) untuk menentukan lokasi optimal dan jumlah charger per stasiun adalah sebagai berikut. Misalkan himpunan kandidat lokasi $i \in \mathcal{I}$ dengan $| \mathcal{I} | = N$, dan himpunan zona permintaan $j \in \mathcal{J}$ dengan permintaan harian $\lambda_j$ (dalam sesi pengisian). Parameter biaya meliputi $f_i$ (fixed cost lokasi $i$), $c_i$ (biaya charger/unit), $K_i$ (kapasitas maksimum charger di lokasi $i$), dan $d_{ij}$ (jarak atau waktu tempuh antara $i$ dan $j$).

Variabel keputusan:
- $y_i \in \{0,1\}$: 1 jika lokasi $i$ dipilih dibuka
- $x_{ij} \in \mathbb{Z}_{\geq 0}$: jumlah charger di lokasi $i$ yang melayani zona $j$

Fungsi objektif meminimalkan total biaya tertimbang (CapEx + aksesibilitas):

$$\min \; Z = \sum_{i \in \mathcal{I}} f_i y_i + \sum_{i \in \mathcal{I}} \sum_{j \in \mathcal{J}} \alpha \, d_{ij} x_{ij} + \sum_{i \in \mathcal{I}} \beta \, x_{ij}$$

dengan $\alpha$ adalah bobot penalti jarak tempuh pengguna dan $\beta$ adalah biaya variabel per unit charger. Kendala utama:

$$\sum_{i \in \mathcal{I}} x_{ij} \geq \lambda_j, \quad \forall j \in \mathcal{J} \tag{1}$$

$$\sum_{j \in \mathcal{J}} x_{ij} \leq K_i y_i, \quad \forall i \in \mathcal{I} \tag{2}$$

$$x_{ij} \leq M \, y_i, \quad \forall i,j \tag{3}$$

$$y_i \in \{0,1\}, \quad x_{ij} \in \mathbb{Z}_{\geq 0} \tag{4}$$

Persamaan (1) menjamin setiap zona permintaan terlayani minimal sesuai demand-nya, (2) mengikat kapasitas charger terhadap status pembukaan lokasi, dan (3) adalah *big-M relaxation* untuk linearisasi.

### 2.2 Model Permintaan Time-Varying (Profil Beban Harian)

Permintaan HPC bersifat *peaky*. Danese et al. (2022) merekomendasikan penggunaan profil beban agregat:

$$P_{\text{agg}}(t) = \sum_{i \in \mathcal{I}} \sum_{k \in \mathcal{K}_i} p_k \cdot \mathbb{1}_{\{t \in [t_{k}^{\text{arr}}, t_{k}^{\text{dep}}]\}}$$

dengan $p_k$ adalah daya charger $k$, $\mathcal{K}_i$ himpunan charger di lokasi $i$, dan $\mathbb{1}\{\cdot\}$ fungsi indikator. Permintaan puncak harian untuk sizing gardu induk:

$$P_{\text{peak}} = \max_{t \in [0,T]} P_{\text{agg}}(t) \cdot (1 + \rho)$$

dengan $\rho$ adalah *coincidence factor* (umumnya 0,15–0,30 untuk jaringan HPC menurut Danese et al., 2022).

### 2.3 Model Antrean M/M/c untuk Kapasitas Charger

Untuk menentukan jumlah charger $c$ agar *probability of waiting* di bawah toleransi $\epsilon$, gunakan formula Erlang-C:

$$P_{\text{wait}} = \frac{\frac{(c\rho)^c}{c!}\cdot\frac{1}{1-\rho}}{\sum_{n=0}^{c-1}\frac{(c\rho)^n}{n!}+\frac{(c\rho)^c}{c!}\cdot\frac{1}{1-\rho}}$$

dengan $\rho = \lambda/(\mu c)$, $\lambda$ laju kedatangan (kendaraan/jam), $\mu$ laju servis (kendaraan/jam per charger). Untuk HPC, $\mu$ dipengaruhi langsung oleh State of Charge (SoC) target; formula praktis:

$$\mu = \frac{1}{t_{\text{service}}} = \frac{P_{\text{charger}}}{\eta \cdot (E_{\text{bat}} \cdot \Delta \text{SoC})}$$

dengan $P_{\text{charger}}$ kapasitas charger (kW), $\eta$ efisiensi charging (~0,90 untuk DC fast), $E_{\text{bat}}$ kapasitas baterai (kWh), dan $\Delta \text{SoC}$ fraksi SoC yang ditambah per sesi.

### 2.4 Optimasi Biaya Levelized Cost of Charging (LCOC)

$$LCOC = \frac{\sum_{t=0}^{T} \frac{C_{\text{capex},t} + C_{\text{opex},t}}{(1+r)^t}}{\sum_{t=0}^{T} \frac{E_{\text{delivered},t}}{(1+r)^t}}$$

dengan $r$ discount rate dan $E_{\text{delivered},t}$ total energi yang disalurkan pada tahun $t$ (kWh). Indikator ini memungkinkan *benchmarking* lintas moda pengisian dan skenario grid.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan siklus perencanaan yang dipetakan oleh Danese et al. (2022), disusun SOP 7-tahap sebagai berikut:

**Tahap 1 — Target Identification & Stakeholder Alignment.** Tentukan *horizon* perencanaan (5/10/20 tahun), moda transportasi yang dilayani (LDV, MHD, bus, fleet komersial), dan batas teknologi (HPC 150/350/600 kW). Definisikan KPI: *coverage*, *utilization*, *grid headroom*, *LCOC*.

**Tahap 2 — Demand Forecasting.** Estimasi $\lambda_j(t)$ per zona menggunakan *bottom-up diffusion model* dengan input: GDP per kapita, densitas populasi, tingkat urbanisasi, harga EV, dan *range anxiety index*. Validasi dengan *triangulation* terhadap data registrasi kendaraan, survei origin-destination, dan traffic count.

**Tahap 3 — Site Candidate Generation.** Saring kandidat lokasi dengan filter hard constraint: jarak minimum ke gardu induk (≤ 5 km untuk HPC 350 kW), akses jalan arteri, ketersediaan lahan ≥ 50 m², dan *right-of-way* jaringan distribusi. Hasilkan set $\mathcal{I}$ dengan ukuran $| \mathcal{I} | = 50$–500 kandidat.

**Tahap 4 — Formulasi & Solusi Optimasi.** Bangun MILP (Section 2.1) dengan perangkat lunak Gurobi/CPLEX. Jalankan *sensitivity analysis* terhadap $\alpha$, $\beta$, dan $K_i$. Validasi solusi terhadap kendala integrasi grid menggunakan *power flow simulation* (DIgSILENT PowerFactory, OpenDSS).

**Tahap 5 — Network Slicing & ICT Enablement.** Integrasikan arsitektur IIoT sesuai Wu, Dai, dan Wang (2022, DOI: 10.1109/comst.2022.3158270). Tentukan *slices* spesifik: (a) *ultra-reliable low-latency* untuk V2G authentication (< 10 ms), (b) *enhanced mobile broadband* untuk telemetry & firmware update, dan (c) *massive machine-type* untuk sensor parkir. *Orchestrator* berbasis SDN/NFV mengelola alokasi sumber daya.

**Tahap 6 — Implementation & Commissioning.** Tutup SOP dengan uji komisioning berstandar IEC 61851-23 (DC conductive charging) dan ISO 15118 (plug-and-charge, V2G).

**Tahap 7 — Operations, Monitoring & Re-planning.** Pasang sistem SCADA dengan interval telemetry ≤ 15 detik. Trigger *re-planning* jika *utilization* aktual menyimpang > 20% dari rencana selama ≥ 6 bulan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Skenario

Sebuah kota metropolitan dengan 1,2 juta penduduk merencanakan jaringan HPC untuk mendukung target 100.000 EV pada 2030. Asumsi parameter:

| Parameter | Nilai | Satuan |
|---|---|---|
| Populasi target EV 2030 | 100.000 | unit |
| EV ringan (LDV) harian yang mengisi publik | 15% × 100.000 = 15.000 | sesi/hari |
| Energi rata-rata per sesi | 40 | kWh |
| Kapasitas charger HPC | 300 | kW |
| $\eta$ efisiensi charging | 0,90 | – |
| $\Delta$SoC rata-rata | 0,50 | – |
| Jam operasi puncak | 07.00–10.00 dan 17.00–21.00 | – |
| Faktor coincidence ($\rho$) | 0,20 | – |
| Jumlah zona permintaan ($\|J\|$) | 25 | zona |
| Biaya CapEx per charger | €35.000 | €/unit |
| Biaya site per lokasi | €150.000 | €/site |
| Bobot jarak $\alpha$ | 2,5 | €/km·sesi |
| Tingkat diskonto $r$ | 6% | – |
| Horizon $T$ | 15 | tahun |

### 4.2 Penentuan Jumlah Charger per Lokasi (M/M/c)

Laju kedatangan puncak per zona diasumsikan: $\lambda_{\text{puncak}} = 600$ sesi/jam (agregat 25 zona). Dengan $t_{\text{service}} = (40 / 0,90 / 300) \approx 0,148$ jam → $\mu = 6,76$ charger/jam. Asumsikan 30 lokasi dibuka → 5 charger/lokasi. Utilisasi per charger:

$$\rho = \frac{\lambda}{c \mu} = \frac{600}{30 \cdot 5 \cdot 6,76} = \frac{600}{
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
