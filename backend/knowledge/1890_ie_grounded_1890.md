# 1890 — Asset Administration Shell Digital Twin Sistem Komunikasi 5G untuk Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin Sistem Komunikasi 5G untuk Integrasi Cyber-Physical Production Systems
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada sektor manufaktur dan logistik telah memasuki fase integrasi mendalam antara *cyber-physical systems* (CPS), jaringan komunikasi nirkabel generasi kelima (5G), dan digital twin sebagai representasi virtual aset industri. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalahnya yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi pengembangan digital twin untuk sistem komunikasi 5G yang dikelola melalui standar *Asset Administration Shell* (AAS). Pendekatan ini muncul sebagai respons terhadap kompleksitas operasional infrastruktur 5G privat yang kini menjadi tulang punggung arsitektur *smart factory*, di mana satu kesalahan konfigurasi pada elemen radio dapat memicu kerugian produksi hingga ratusan ribu dolar per jam.

Dalam konteks rekayasa sistem industri, 5G bukan lagi sekadar teknologi telekomunikasi, melainkan merupakan *cyber-physical infrastructure* yang menentukan kualitas layanan (Quality of Service/QoS) pada lantai produksi. Cavalieri et al. (2024) menekankan bahwa digital twin diperlukan tidak hanya untuk memvisualisasikan status jaringan, tetapi juga untuk mengelola *lifecycle* lengkap aset jaringan — mulai dari *commissioning*, *operation & maintenance*, hingga *decommissioning*. Hal ini sejalan dengan temuan De Marchi, Rojas, dan Mark (2022) yang mengembangkan arsitektur digital twin untuk sistem transfer rakitan *cyber-physical* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), di mana keterlambatan propagasi data antara fisik dan virtual menjadi bottleneck utama yang menurunkan efisiensi lini perakitan.

Permasalahan industri yang melatarbelakangi riset ini bersifat multidimensional. Pertama, fragmentasi standar digital twin pada level internasional menghambat interoperabilitas antar-vendor perangkat 5G (Ericsson, Nokia, Huawei) dengan platform *Manufacturing Execution System* (MES) dan *Enterprise Resource Planning* (ERP). Kedua, kompleksitas parameter jaringan — *latency*, *jitter*, *packet loss*, *throughput*, *availability* — membutuhkan model matematis yang dapat dipetakan secara deterministik ke submodel AAS. Ketiga, adopsi *Industry 4.0* di Eropa melalui program *Plattform Industrie 4.0* dan referensi arsitektur RAMI 4.0 (*Reference Architecture Model Industrie 4.0*) telah menjadikan AAS sebagai standar de facto untuk merepresentasikan aset industri.

Cavalieri et al. (2024) memposisikan kontribusinya pada celah riset: bagaimana membangun digital twin yang tidak hanya memodelkan perilaku *user equipment* (UE) atau *base station* (gNB), tetapi seluruh *ecosystem* 5G termasuk *core network*, *edge node*, dan *network slicing* dalam kerangka AAS. Pendekatan ini melengkapi riset De Marchi et al. (2022) yang lebih fokus pada arsitektur digital twin untuk lini perakitan fisik. Dengan menggabungkan keduanya, diperoleh perspektif holistik: AAS digital twin 5G tidak hanya memonitor jaringan, tetapi menjadi enabler bagi komunikasi deterministik antara lini produksi yang terdiri dari *automated guided vehicle* (AGV), *collaborative robot* (cobot), dan sensor IoT.

Urgensi ekonomis dari adopsi pendekatan ini juga signifikan. Studi *5G-PPP* menunjukkan bahwa *smart manufacturing* yang didukung 5G privat dapat meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 15-25% melalui reduksi *downtime* dan optimalisasi *changeover*. Oleh karena itu, modul ini akan membahas secara sistematis: (i) formulasi matematis untuk AAS digital twin 5G, (ii) metodologi implementasi berdasarkan SOP industri, (iii) studi kasus kuantitatif, dan (iv) evaluasi kritis terhadap keterbatasan dan prospek riset masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Asset Administration Shell (AAS)

AAS merupakan representasi digital terstandarisasi dari sebuah aset industri, yang didefinisikan secara formal melalui spesifikasi *Plattform Industrie 4.0* dan kini diadopsi menjadi IEC PAS 63278. Struktur AAS terdiri dari beberapa *Submodel* yang masing-masing merepresentasikan aspek spesifik dari aset. Untuk jaringan 5G, Cavalieri et al. (2024) mengusulkan minimal empat submodel esensial:

- *Identification Submodel* — menyimpan *Global Asset Identifier* (GAI) dan metadata administratif
- *Capability Submodel* — mendeskripsikan kemampuan fungsional (mendukung *network slicing*, frekuensi, bandwidth)
- *Operational Data Submodel* — berisi Key Performance Indicator (KPI) jaringan secara real-time
- *Diagnostic Submodel* — menyimpan *event log*, alarm, dan histori *failure*

Secara matematis, sebuah AAS untuk elemen 5G dapat diformulasikan sebagai tuple:

$$AAS = \langle ID, C, O, D, R \rangle$$

di mana $ID$ adalah identitas unik aset, $C$ adalah himpunan kemampuan $\{c_1, c_2, ..., c_n\}$, $O$ adalah himpunan data operasional dengan $O \subset \mathbb{R}^k$, $D$ adalah himpunan event diagnostik, dan $R$ adalah relasi dengan AAS lain dalam *AAS Repository*.

### 2.2 Formulasi KPI Jaringan 5G

Cavalieri et al. (2024) mendefinisikan lima KPI primer yang harus dimonitor secara kontinu oleh digital twin. Kelima KPI ini diekspos sebagai *Property* AAS dengan semantic ID sesuai *Eclass* atau *IEC Common Data Dictionary* (CDD):

**a. End-to-End Latency ($L_{e2e}$):**
$$L_{e2e} = T_{tx} + T_{prop} + T_{queue} + T_{proc} + T_{retrans}$$

di mana $T_{tx}$ adalah waktu transmisi, $T_{prop}$ adalah propagasi sinyal, $T_{queue}$ adalah waktu tunggu di *buffer*, $T_{proc}$ adalah processing di *gNB/UE*, dan $T_{retrans}$ adalah retransmisi *Hybrid Automatic Repeat Request* (HARQ). Untuk URLLC (*Ultra-Reliable Low-Latency Communication*), target $L_{e2e} < 1\,\text{ms}$.

**b. Throughput ($R$):**
$$R = \frac{N_{bits}}{T_{window}} \quad [\text{bps}]$$

$$R_{Shannon} = B \cdot \log_2\left(1 + \frac{S}{N}\right)$$

di mana $B$ adalah bandwidth alokasi dalam Hz, dan $S/N$ adalah *Signal-to-Noise Ratio*. Pada 5G NR (*New Radio*) dengan bandwidth 100 MHz pada band n78 (3.5 GHz), kapasitas puncak teoretis mencapai 1.4 Gbps pada layer PHY.

**c. Reliability ($Rel$):**
$$Rel = 1 - P_{fail} = 1 - \left(1 - (1 - BER)^L\right)^{N_{tx}}$$

dengan $BER$ adalah *Bit Error Rate*, $L$ adalah panjang paket (bits), dan $N_{tx}$ adalah jumlah percobaan transmisi. Untuk URLLC, target $Rel \geq 99.999\%$ (lima sembilan).

**d. Availability ($A$):**
$$A = \frac{MTBF}{MTBF + MTTR}$$

di mana $MTBF$ adalah *Mean Time Between Failure* dan $MTTR$ adalah *Mean Time To Repair*. Untuk aset 5G mission-critical, target $A \geq 99.95\%$.

**e. Jitter ($J$):**
$$J = \sigma(L_{e2e}) = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N}(L_i - \bar{L})^2}$$

### 2.3 Sinkronisasi Digital Twin

De Marchi et al. (2022) membahas arsitektur digital twin untuk *cyber-physical assembly transfer system* dan menekankan bahwa sinkronisasi antara state fisik dan virtual merupakan tantangan fundamental. Formulasi sinkronisasi yang diadopsi untuk digital twin 5G adalah:

$$S_{DT}(t) = \alpha \cdot S_{phy}(t) + (1 - \alpha) \cdot S_{DT}(t - \Delta t)$$

di mana $S_{DT}(t)$ adalah state digital twin saat waktu $t$, $S_{phy}(t)$ adalah state fisik yang diobservasi, dan $\alpha \in [0,1]$ adalah faktor *blending*. Untuk aplikasi *mission-critical*, $\alpha \approx 1$ (prioritas real-time), sedangkan untuk aplikasi *predictive maintenance*, $\alpha \approx 0.7$ karena memerlukan *smoothing* data historis.

### 2.4 Network Slicing Formulation

5G memperkenalkan konsep *network slicing* yang memungkinkan alokasi sumber daya jaringan secara terisolasi untuk berbagai use case. Formulasi alokasi resource untuk $K$ slice adalah:

$$\max \sum_{k=1}^{K} U_k(R_k, L_k)$
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
$
