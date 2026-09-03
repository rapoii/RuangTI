# 2418 — Digital Twin *Asset Administration Shell* (AAS) untuk Sistem Komunikasi Industri 5G: Arsitektur Referensi, Formulasi Sinkronisasi, dan Prosedur Rekayasa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Asset Administration Shell Digital Twin* Sistem Komunikasi 5G untuk Lingkungan Cyber-Physical
**Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. SciTePress. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. SciTePress. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi Industri 4.0 telah menggeser paradigma manufaktur dari sekadar otomasi tersegmentasi menuju ekosistem *cyber-physical production systems* (CPPS) yang sepenuhnya terdigitalisasi. Dalam konteks ini, *Reference Architecture Model Industrie 4.0* (RAMI 4.0) yang dikembangkan oleh Plattform Industrie 4.0 memperkenalkan konsep *Asset Administration Shell* (AAS) sebagai representasi digital terstandarisasi dari sebuah aset fisik. Standar AAS kini diformalkan melalui IEC 63278 (dulunya IEC PAS 63030), dan menyediakan kerangka interoperabilitas untuk seluruh siklus hidup aset — mulai dari desain, produksi, operasi, hingga daur ulang.

Cavalieri, Di Natale, dan Gambadoro (2024) — yang karyanya dipublikasikan dalam Proceedings ICINCO 2024 dengan DOI [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822) — menyoroti kebutuhan kritis untuk membangun AAS yang merepresentasikan *infrastruktur komunikasi 5G* itu sendiri, bukan sekadar perangkat field yang menggunakan 5G. Pendekatan ini mengisi celah literatur yang sebelumnya menganggap jaringan komunikasi sebagai "pipa transparan" (*transparent pipe*), padahal di lingkungan pabrik modern 5G menentukan determinisme, latensi, dan keandalan sistem kendali terdistribusi.

De Marchi, Rojas, dan Mark (2022) — pada DOI [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329) — melengkapi konteks tersebut dengan menunjukkan bagaimana arsitektur *digital twin* pada *cyber-physical assembly transfer system* memerlukan umpan balik dua arah antara dunia fisik dan virtual dengan latensi yang terkendali. Perpaduan kedua literatur ini menunjukkan bahwa integrasi AAS–5G–CPPS bukan opsi, melainkan prasyarat untuk memenuhi target *Time-Sensitive Networking* (TSN) dan *Ultra-Reliable Low-Latency Communication* (URLLC) yang menjadi tulang punggung pabrik seluler (*cellular manufacturing*) dan sistem produksi fleksibel.

Urgensi ekonominya juga signifikan: studi internal pelaku industri telekomunikasi menunjukkan bahwa downtime jaringan 5G privat di lini produksi otomotif dapat menimbulkan kerugian produksi hingga €15.000–€40.000 per menit, sehingga kemampuan memprediksi degradasi kualitas sinyal melalui *digital twin* AAS menjadi kebutuhan manajerial, bukan sekadar teknis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model *State-Space* Digital Twin

Digital twin AAS mengikuti formulasi ruang keadaan kontemporer berikut. Misalkan $\mathbf{x}_p(t) \in \mathbb{R}^n$ adalah vektor状态 fisik aset 5G (misal: daya pancar, level interferensi, suhu BTS), dan $\mathbf{x}_v(t)$ adalah状態 twin virtual, maka dinamikanya dapat ditulis:

$$\dot{\mathbf{x}}_v(t) = A\mathbf{x}_v(t) + B\mathbf{u}(t) + K\bigl[\mathbf{y}_p(t) - C\mathbf{x}_v(t)\bigr]$$

dengan $A$ matriks状态 sistem, $C$ matriks observasi, $K$ gain *Kalman filter* yang menyinkronkan状态 virtual dengan pengukuran fisik $\mathbf{y}_p(t)$. *Error sinkronisasi* didefinisikan sebagai:

$$e(t) = \|\mathbf{x}_p(t) - \mathbf{x}_v(t)\|_2 = \sqrt{\sum_{i=1}^{n}\bigl(x_{p,i}(t) - x_{v,i}(t)\bigr)^2}$$

### 2.2 Model Latensi URLLC untuk Sinyal 5G

Kualitas *slice* URLLC pada jaringan 5G Privat (seperti dibahas Cavalieri *et al.*, 2024) dapat dimodelkan dengan *network calculus*. Batas atas latensi end-to-end $D_{e2e}$ memenuhi:

$$D_{e2e} \leq \frac{b_{\max}}{R} + \sum_{k=1}^{N_h} \frac{L_{\max,k}}{C_k} + T_{proc}$$

dengan $b_{\max}$ ukuran burst maksimum, $R$ laju pelayanan, $L_{\max,k}$ panjang paket maksimum di hop ke-$k$, $C_k$ kapasitas link, dan $T_{proc}$ waktu pemrosesan. Untuk URLLC, target $D_{e2e} \leq 1$ ms dengan reliabilitas $1-10^{-5}$.

### 2.3 Entropi Informasi Submodel AAS

Setiap submodel AAS (misalnya Submodel *CommunicationProfile*, *QualityOfService*, *LifecycleStatus*) membawa kandungan informasi $I_i$ yang dihitung dari entropi Shannon:

$$I_i = -\sum_{j=1}^{m_i} p_{i,j} \log_2 p_{i,j}$$

Total kandungan informasi AAS:

$$\mathcal{I}_{AAS} = \sum_{i=1}^{N_s} w_i \cdot I_i, \quad \sum w_i = 1$$

dengan $w_i$ bobot kepentingan submodel terhadap konteks rekayasa.

### 2.4 Indeks Kematangan Digital Twin

De Marchi *et al.* (2022) mengusulkan *Digital Twin Maturity Index* (DTMI) yang diadaptasi dari skala kematangan SaaS:

$$\text{DTMI} = \alpha \cdot M_{sync} + \beta \cdot M_{interop} + \gamma \cdot M_{autonomy}, \quad \alpha + \beta + \gamma = 1$$

dengan $M_{sync} \in [0,1]$ tingkat sinkronisasi, $M_{interop}$ interoperabilitas protokol (AAS, OPC UA, MQTT), $M_{autonomy}$ kemampuan self-optimization.

---

## 3. Metodologi Rekayasa & SOP Implementasi

Implementasi AAS *Digital Twin* untuk sistem 5G mengikuti SOP rekayasa 7 tahap berikut, yang disintesis dari Cavalieri *et al.* (2024) dan diperkuat oleh arsitektur CPPS pada De Marchi *et al.* (2022):

**Tahap 1 — Identifikasi Aset & Pemetaan Fungsi.** Inventarisasi seluruh elemen jaringan 5G (gNB, AMF, SMF, UPF, antena MIMO, *edge compute node*) ke dalam *Asset Lifecycle* sesuai ISO 23247.

**Tahap 2 — Dekomposisi Submodel AAS.** Definisikan submodel sesuai *AAS Metamodel* (IEC 63278): `Identification`, `Documentation`, `CommunicationProfile`, `CapabilityDescription`, `OperationalData`. Setiap submodel menggunakan format `.aasx` (AAS eXchange).

**Tahap 3 — Akuisisi Data Sensor & Telemetri.** Instalasi agen SNMP/Netconf/yang-model pada elemen jaringan; kirim telemetry ke *AAS Server* (BaSyx, AASX Server) melalui *Message Broker* (MQTT/HTTPS).

**Tahap 4 — Kalibrasi *State-Space* Model.** Lakukan identifikasi parameter matriks $A$, $B$, $C$ menggunakan data historis; tuning Kalman gain $K$ melalui minimisasi *Mean Squared Error*:

$$K = \arg\min_K \; \mathbb{E}\bigl[e(t)^2\bigr]$$

**Tahap 5 — Validasi Sinkronisasi & Uji Latensi.** Ukur $D_{e2e}$ dan error $e(t)$; pastikan memenuhi target URLLC dengan uji statistik *one-sided tolerance interval* pada tingkat kepercayaan $99{,}999\%$.

**Tahap 6 — Integrasi dengan CPPS & Line Produksi.** Sambungkan AAS ke *Manufacturing Execution System* (MES) via OPC UA, dan ke *Assembly Transfer System* (ATS) sesuai arsitektur De Marchi *et al.* (2022) untuk orkestrasi lintas domain.

**Tahap 7 — Operasi, Pemeliharaan Prediktif & Iterasi.** Jalankan *predictive maintenance* menggunakan *remaining useful life* (RUL) yang diturunkan dari model degradasi:

$$\text{RUL}(t) = \int_{t}^{\infty} \frac{1}{\lambda(\tau)}\, d\tau$$

dengan $\lambda(\tau)$ laju kegagalan sesaat dari *Weibull distribution*.

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Skenario:** Lini perakitan seluler dengan 1 unit BTS 5G privat (band n78, 3,5 GHz) melayani 20 *Automated Guided Vehicle* (AGV). Data dikonsolidasikan mengikuti kerangka AAS pada Cavalieri *et al.* (2024) dengan dukungan arsitektur CPPS De Marchi *et al.* (2022).

**Parameter Input:**

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Burst maksimum | $b_{\max}$ | 256 | kbit |
| Laju pelayanan *slice* URLLC | $R$ | 100 | Mbit/s |
| Hop jaringan | $N_h$ | 4 | — |
| Panjang paket maks | $L_{\max,k}$ | 1500 | byte |
| Kapasitas link per hop | $C_k$ | 250 | Mbit/s |
| Waktu pemrosesan | $T_{proc}$ | 0,15 | ms |
| Jumlah submodel AAS | $N_s$ | 6 | — |
| Standar deviasi sync error | $\sigma_e$ | 0,08 | — |

**Langkah 1 — Hitung latensi end-to-end:**

$$D_{e2e} \leq \frac{256 \times 10^3}{100 \times 10^6} + 4 \cdot \frac{1500 \times 8}{250 \times 10^6} + 0{,}15 \times 10^{-3}$$

$$D_{e2e} \leq 2{,}56 \times 10^{-3} + 1{,}92 \times 10^{-4} + 0{,}15 \times 10^{-3}$$

$$D_{e2e} \leq 2{,}912 \times 10^{-3}\ \text{detik} = 2{,}91\ \text{ms}$$

**Interpretasi:** Latensi 2,91 ms melebihi target URLLC (1 ms). Bottleneck pada komponen burst $\frac{b_{\max}}{R}$.

**Langkah 2 — Redesain dengan *subcarrier spacing* 60 kHz dan alokasi *mini-slot*:**
Dengan *mini-slot* 2-OFDM-symbol, waktu transmisi turun menjadi $T_{slot} = 0{,}125$ ms. Dengan asumsi $b_{\max}$ berkurang menjadi 64 kbit akibat *packet aggregation* yang lebih agresif:

$$D_{e2e}^{baru} \leq \frac{64 \times 10^3}{100 \times 10^6} + 4 \cdot \frac{300 \
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
