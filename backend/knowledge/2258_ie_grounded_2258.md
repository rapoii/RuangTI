# 2258 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G Industri dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai implementasi Digital Twin untuk sistem komunikasi 5G industri dan sistem transfer perakitan siber-fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di lantai pabrik (shop-floor) modern mensyaratkan integrasi vertikal dan horizontal yang mulus antara aset fisik, sistem kendali, dan lapisan enterprise. Dalam konteks tersebut, Asset Administration Shell (AAS) muncul sebagai komponen fundamental dari *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang diformalkan oleh *Plattform Industrie 4.0* dan kini diadopsi luas dalam standar IEC 63278 (Cavalieri et al., 2024, https://doi.org/10.5220/0012914200003822). Paper Cavalieri, Di Natale, dan Gambadoro (2024) mengangkat isu strategis bahwa sistem komunikasi 5G — yang menjadi tulang punggung *private campus network* di industri manufaktur — belum memiliki representasi digital twin yang terstandarisasi sehingga menghambat interoperabilitas antar-vendor dan pengelolaan siklus hidup aset telekomunikasi secara end-to-end.

Urgensi industri sangat nyata: menurut data yang dirangkum dalam paper, lebih dari 70% inisiatif Industry 4.0 di Eropa membutuhkan jaringan nirkabel deterministik untuk aplikasi *closed-loop control* dengan latensi kurang dari 1 ms dan keandalan 99,999% (suku "five-nines"). Tanpa model data digital twin yang konsisten, setiap *Radio Unit* (RU), *Distributed Unit* (DU), *Centralized Unit* (CU), dan *User Equipment* (UE) akan dikelola secara silo menggunakan *Element Management System* (EMS) propieter. Hal ini menciptakan *lock-in* teknologi, menghambat integrasi dengan *Manufacturing Execution System* (MES), dan meningkatkan total biaya kepemilikan (TCO) hingga 25-30% sepanjang siklus hidup 10-15 tahun aset telekomunikasi.

Di sisi lain, paper De Marchi, Rojas, dan Mark (2022, https://doi.org/10.5220/0011589900003329) menunjukkan bahwa arsitektur digital twin untuk *cyber-physical assembly transfer system* menghadapi tantangan serupa: bagaimana merepresentasikan konveyor, aktuator pneumatik, dan *pick-and-place modules* sedemikian rupa sehingga data status real-time (posisi, kecepatan, torsi, getaran) dapat diakses oleh sistem perencanaan produksi tanpa kehilangan konsistensi semantik. Kedua paper ini, ketika dibaca secara komplementer, membentuk kerangka rekayasa yang diperlukan untuk mengimplementasikan AAS sebagai *lingua franca* antara domain telekomunikasi dan domain manufaktur — sebuah prasyarat bagi *cyber-physical production systems* (CPPS) generasi berikutnya.

Konteks ekonomi turut memperkuat urgensi. Investasi global pada 5G *private network* diestimasi mencapai USD 36 miliar pada 2028, sementara pasar *digital twin* industri diproyeksikan menyentuh USD 110 miliar pada 2030. Integrasi keduanya melalui AAS memungkinkan pabrik mencapai *Overall Equipment Effectiveness* (OEE) di atas 85%, dibandingkan rata-rata global industri manufaktur yang masih berkisar 60-65%. Dengan demikian, rekayasa sistem digital twin berbasis AAS bukan sekadar agenda riset, melainkan kebutuhan kompetitif yang bersifat *mission-critical*.

## 2. Landasan Teori & Formulasi Matematis

AAS merupakan representasi digital dari sebuah aset fisik yang didefinisikan secara formal oleh *details* dan *submodels*. Setiap *submodel* mengandung himpunan *property*, *operation*, *event*, dan *capability* yang dapat diakses melalui antarmuka REST/HTTP atau OPC UA. Formulasi identitas sebuah aset ke-i dalam domain telekomunikasi 5G dapat dinyatakan sebagai:

$$A_i = \{ID_i, M_i, S_i(t), P_i(t), H_i\}$$

di mana $ID_i$ adalah *globally unique Asset Identifier* (mengacu pada standar IEC 61406-1), $M_i$ adalah himpunan *submodels* (misalnya *Identification*, *Communication*, *Diagnostics*, *Lifecycle*), $S_i(t)$ adalah snapshot state pada waktu $t$, $P_i(t)$ adalah *property* dinamis (misalnya latensi aktual, packet loss, throughput), dan $H_i$ adalah *history* berupa deret waktu untuk analitik prediktif.

Untuk sistem komunikasi 5G, Cavalieri et al. (2024) memodelkan *Quality of Service* agregat pada sebuah *network slice* $k$ sebagai fungsi dari tiga metrik utama:

$$QoS_k = w_1 \cdot \frac{L_{target}}{L_{measured}} + w_2 \cdot \frac{R_{target}}{R_{measured}} + w_3 \cdot \frac{T_{achieved}}{T_{target}}$$

dengan $L$ = latensi end-to-end, $R$ = reliability, $T$ = throughput, dan $w_1 + w_2 + w_3 = 1$. Untuk aplikasi URLLC (Ultra-Reliable Low-Latency Communication), bobot tipikal adalah $w_1 = 0{,}5$; $w_2 = 0{,}4$; $w_3 = 0{,}1$, mencerminkan dominansi *deterministic* latency. Persamaan ini digunakan untuk mengisi *property* `QualityOfService` pada *submodel* AAS secara real-time.

Model sinkronisasi antara AAS digital twin dan entitas fisik 5G mengikuti persamaan *state update*:

$$S_i(t+\Delta t) = f\big(S_i(t), \mathbf{u}(t), \mathbf{\epsilon}(t)\big)$$

di mana $\mathbf{u}(t)$ adalah vektor input kontrol (misalnya alokasi radio resource), dan $\mathbf{\epsilon}(t) \sim \mathcal{N}(0, \Sigma)$ adalah *stochastic disturbance* yang merepresentasikan noise kanal dan interferensi. Cavalieri et al. (2024) menerapkan *Kalman Filter* atau *Extended Kalman Filter* untuk mengestimasi state yang tidak terukur langsung, sehingga *property* AAS tetap konsisten dengan realitas fisik.

Untuk sistem transfer perakitan siber-fisik yang dibahas De Marchi et al. (2022), formulasi *throughput* jalur transfer mengikuti persamaan Little:

$$N = \lambda \cdot W$$

dengan $N$ = jumlah workpiece dalam sistem (steady-state), $\lambda$ = laju kedatangan (workpiece/detik), dan $W$ = rata-rata waktu tinggal. Jika $W_i$ adalah waktu proses pada stasiun $i$, maka *cycle time* total jalur transfer:

$$CT = \max_{i}\{W_i\} + \sum_{i=1}^{n-1} \frac{B_i}{v_i}$$

di mana $B_i$ adalah panjang buffer antar-stasiun, dan $v_i$ adalah kecepatan transfer. Digital twin berbasis AAS memungkinkan *bottleneck* diidentifikasi secara real-time melalui persamaan:

$$\rho_i = \frac{\lambda_i}{\mu_i}$$

di mana $\rho_i$ adalah *utilization* stasiun $i$, $\lambda_i$ laju kedatangan, dan $\mu_i$ laju pelayanan. Jika $\rho_i \to 1$, stasiun tersebut menjadi *bottleneck* prioritas untuk optimasi.

Untuk keandalan sistem, fungsi reliabilitas *Weibull* lazim digunakan untuk memodelkan usia pakai komponen kritis seperti motor konveyor atau modul radio 5G:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

dengan $\eta$ = *characteristic life* (skala) dan $\beta$ = *shape parameter*. Data ini dimasukkan ke dalam *submodel* `Reliability` AAS, sehingga sistem *predictive maintenance* dapat menghitung *Remaining Useful Life* (RUL):

$$RUL = \eta \cdot \left[-\ln(0{,}9)\right]^{1/\beta} - t_{current}$$

Konsistensi semantik antar-AAS dijamin oleh penggunaan *submodel templates* (IEC 63278-4) yang berupa *dictionary* terstandar. Model referensi domain telekomunikasi 5G dan domain *assembly transfer* masing-masing memiliki *template* tersendiri, namun keduanya berbagi *Identifiable*-interface, sehingga dapat di-*compose* menjadi `Digital Nameplate`, `Capability Description`, dan `Handover Documentation` lintas-domain.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS digital twin mengikuti SOP berlapis yang dapat diuraikan sebagai berikut:

**Tahap 1 — Identifikasi Aset dan Pemetaan Submodel.** Setiap *Radio Unit*, konveyor, dan *gripper* diberi `globalAssetId` sesuai ISO 29002. Submodel yang relevan diidentifikasi berdasarkan use case: untuk 5G adalah `NetworkSliceInfo`, `RadioResourceUsage`, `LatencyMonitoring`; untuk assembly transfer adalah `MotionState`, `CycleTimeStats`, `EnergyConsumption`. Setiap *property* didefinisikan dengan *value type* (misalnya `xs:float`, `xs:dateTime`) dan *semanticId* yang merujuk pada *Eclass* atau *IEC Common Data Dictionary* (CDD).

**Tahap 2 — Deployment Infrastruktur AAS Registry.** Server AAS (BaSyx, AASX Package Explorer, atau SAP Asset Performance) di-deploy pada *edge cloud* yang terhubung ke *5G core*. *Endpoints* yang dikonfigurasi: HTTP/REST (port 8081) untuk akses MES, OPC UA (port 4840) untuk koneksi PLC, dan MQTT (port 1883) untuk streaming telemetri berkecepatan tinggi.

**Tahap 3 — *Provisioning* dan Konfigurasi Awal.** Nilai *property* awal (factory defaults) dimuat dari `AASX` package. Proses ini sesuai dengan *out-of-the-box commissioning* yang dijelaskan Cavalieri et al. (2024): sebuah `submodel Operation` bernama `ConfigureNetworkSlice` dipanggil dengan parameter `sliceType=URLLC`, `latencyBudget=1ms`, `reliability=99.999%`.

**Tahap 4 — *Operation* Loop Real-Time.** Sensor pada aset fisik mengirim data melalui protokol yang sesuai (OPC UA untuk PLC, NETCONF/YANG untuk 5G RAN). *Event* yang melampaui ambang batas (misalnya $L_{measured} > 1{,}5$ ms) memicu *push event* AAS ke subscriber, sekaligus membuka *Operation* `TriggerRootCauseAnalysis` pada *submodel* `Diagnostics`.

**Tahap 5 — *Lifecycle* Update dan Audit.** Perubahan firmware, konfigurasi *radio*, atau status *End-of-Life* dicatat dalam *submodel* `Lifecycle` dengan *timestamp* dan *actor*. Trail ini memenuhi persyaratan *Industry 4.0 Compliance* dan ISO 9001.

Diagram alir proses rekayasa secara lengkap dapat digambarkan sebagai:

```
[Aset Fisik 5G/Transfer] 
        ↓ (OPC UA/NETCONF)
[Sensor & PLC] 
        ↓ (MQTT/streaming)
[AAS Agent (Edge)]
        ↓ (HTTPS POST /submodels/{id}/properties
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
