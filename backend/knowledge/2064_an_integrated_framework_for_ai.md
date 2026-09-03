# 2064 — Kerangka Terintegrasi Kecerdasan Buatan dan Analitik Prediktif dalam Manajemen Rantai Pasok untuk Sistem Sirkular Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** An Integrated Framework for AI and Predictive Analytics in Supply Chain Management — Perspektif Sistem Sirkular Berbasis Metaheuristik
**Jurnal & Sitasi Utama:** Shah Rukh, Omorinsola Bibire Seyi-Lande, Stanley Tochukwu Oziri (2024). *International Journal of Scientific Research in Humanities and Social Sciences*. DOI: [https://doi.org/10.32628/ijsrssh243671](https://doi.org/10.32628/ijsrssh243671)
**Sitasi Pendukung:** Pankaj Kumar Detwal, Rajat Agrawal, Ashutosh Samadhiya (2023). *Engineering Applications of Artificial Intelligence*. DOI: [https://doi.org/10.1016/j.engappai.2023.107102](https://doi.org/10.1016/j.engappai.2023.107102)

---

## 1. Pendahuluan dan Konteks Industri

Krisis rantai pasok global yang dipicu oleh pandemi COVID-19, ketegangan geopolitik, serta fragmentasi perdagangan internasional telah memaparkan kerentanan struktural sistem logistik konvensional yang bersifat *reactive* dan *silo-based*. Menurut Shah Rukh, Omorinsola Bibire Seyi-Lande, dan Stanley Tochukwu Oziri (2024) dalam publikasi mereka di *International Journal of Scientific Research in Humanities and Social Sciences* dengan DOI [10.32628/ijsrssh243671](https://doi.org/10.32628/ijsrssh243671), gelombang transformasi digital berbasis kecerdasan buatan (AI) dan analitik prediktif kini bukan lagi sekadar keunggulan kompetitif, melainkan prasyarat operasional untuk mempertahankan kelangsungan rantai pasok di era *post-normal*. Kerangka terintegrasi yang mereka usulkan menjawab tiga tantangan struktural yang selama ini menghambat digitalisasi rantai pasok: (1) fragmentasi data heterogen dari berbagai sistem korporat (ERP, WMS, TMS, sensor IoT, telematika, umpan balik mitra), (2) disparitas kematangan analitik antara deskriptif, prediktif, dan preskriptif, serta (3) lemahnya tata kelola (*governance*) yang menghambat *scaling* model analitik lintas fungsi.

Konteks industri menunjukkan bahwa volume data yang dihasilkan oleh sensor IoT di sektor manufaktur global tumbuh pada CAGR 26,4% (2022–2030), sementara nilai pasar *prescriptive analytics* diproyeksikan mencapai USD 23,5 miliar pada 2030 (Shah Rukh et al., 2024). Urgensi ekonomi juga tecermin dari fakta bahwa rata-rata perusahaan manufaktur kehilangan 2,3% revenue tahunan akibat *stockout* dan *overstock* yang dapat diminimalisasi melalui integrasi analitik real-time. Lebih lanjut, Detwal, Agrawal, dan Samadhiya (2023) dalam *Engineering Applications of Artificial Intelligence* (DOI [10.1016/j.engappai.2023.107102](https://doi.org/10.1016/j.engappai.2023.107102)) menambahkan bahwa transisi menuju ekonomi sirkular memerlukan optimasi kompleks pada jaringan *reverse logistics* yang tidak dapat diselesaikan secara eksak melainkan melalui pendekatan metaheuristik. Sinergi antara kedua perspektif ini — AI prediktif untuk antisipasi permintaan dan metaheuristik untuk optimasi jaringan sirkular — menjadi pilar modul 2064 ini.

Konteks Indonesia dan Asia Tenggara juga relevan: dengan lebih dari 270 juta konsumen, fragmentasi *tier-2* dan *tier-3* kota, serta pertumbuhan e-commerce >22% YoY, kebutuhan akan *demand sensing* presisi tinggi menjadi imperatif. Modul ini menyintesiskan kedua literatur untuk memberikan panduan engineering yang aplikatif bagi insinyur industri, analis rantai pasok, dan arsitek transformasi digital.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Representasi Knowledge Graph untuk Virtualisasi Data Heterogen

Shah Rukh et al. (2024) membangun arsitektur data yang menyatukan entitas heterogen dalam struktur *knowledge graph* berorientasi industri:

$$G = (V, E, R, \phi, \psi)$$

di mana $V$ adalah himpunan node (entitas: produk, supplier, fasilitas, sensor, lot pesanan), $E$ adalah himpunan edge (relasi: *supplies*, *transports*, *stores*, *produces*), $R$ adalah himpunan tipe relasi, $\phi: V \rightarrow \mathcal{A}$ adalah fungsi pemetaan atribut node ke *property graph schema*, dan $\psi: E \rightarrow \mathcal{R}$ adalah pemetaan edge ke relasi semantik. Setiap node $v_i$ memiliki embedding vektor $\mathbf{e}_i \in \mathbb{R}^d$ yang dipelajari melalui *graph neural network* (GNN) untuk menangkap konteks topologi rantai pasok.

### 2.2 Model *Demand Sensing* Hybrid Time-Series dan Machine Learning

Model hibrida yang diajukan menggabungkan kekuatan dekomposisi musiman ARIMA-SARIMA dengan kemampuan generalisasi *gradient boosting* (XGBoost) dan LSTM:

$$\hat{y}_{t+h} = \alpha \cdot f_{\text{TS}}(y_{t-k:t}, s_{t+h}) + \beta \cdot f_{\text{ML}}(\mathbf{X}_{t-k:t}; \Theta) + \gamma \cdot \epsilon_t$$

di mana:
- $f_{\text{TS}}$ adalah komponen SARIMA dengan orde $(p,d,q)(P,D,Q)_s$
- $f_{\text{ML}}$ adalah *ensemble* XGBoost-LSTM dengan parameter $\Theta$
- $\mathbf{X}_{t-k:t}$ adalah matriks fitur eksogen (harga, promosi, cuaca, indeks Google Trends, kalender event)
- $\epsilon_t \sim \mathcal{N}(0, \sigma^2)$ adalah residual
- $\alpha + \beta + \gamma = 1$ dengan bobot optimal dipilih melalui *stacking cross-validation*
- $h$ adalah horizon peramalan (misal 1–12 minggu)

### 2.3 Optimasi Inventarir Stokastik dengan Prediksi Input

Bermula dari model Economic Order Quantity (EOQ) klasik, kerangka ini memperluas ke kondisi permintaan tidak pasti dengan perkiraan permintaan yang dihasilkan AI:

$$Q^* = \sqrt{\frac{2D\hat{K}}{h_c}}$$

dengan safety stock berbasis service level:

$$SS = z_{\alpha} \cdot \sqrt{L \cdot \sigma_D^2 + \bar{D}^2 \cdot \sigma_L^2}$$

di mana $D\hat{}$ adalah prediksi permintaan tahunan, $K$ adalah biaya pemesanan, $h_c$ adalah biaya penyimpanan per unit per tahun, $z_{\alpha}$ adalah *z-score* untuk service level $\alpha$, $L$ adalah lead time rata-rata, dan $\sigma_D$, $\sigma_L$ adalah standar deviasi permintaan dan lead time (Shah Rukh et al., 2024).

### 2.4 Formulasi Metaheuristik untuk Jaringan Sirkular

Detwal et al. (2023) mengidentifikasi lima kelas metaheuristik dominan untuk *circular supply chain*: Genetic Algorithm (GA), Particle Swarm Optimization (PSO), Simulated Annealing (SA), Ant Colony Optimization (ACO), dan Grey Wolf Optimizer (GWO). Formulasi umum masalah multi-tujuan:

$$\min_{x \in \mathcal{X}} F(x) = \left[f_1(x), f_2(x), \ldots, f_k(x)\right]^T$$

dengan:
- $f_1(x) = \sum_{i \in I} c_i x_i$ (biaya operasional)
- $f_2(x) = \sum_{j \in J} e_j \cdot q_j(x)$ (jejak karbon)
- $f_3(x) = 1 - R(x)$ (indeks linearitas, $R$ = rasio material dipulihkan)
- $f_4(x) = \sum_{m \in M} t_m(x)$ (waktu siklus)
- $x \in \mathcal{X}$ memenuhi kendala kapasitas, kapasitas armada, dan keseimbangan aliran

Solusi optimal Pareto-front direpresentasikan sebagai himpunan tak-dominan:

$$\mathcal{P}^* = \{x \in \mathcal{X} : \nexists x' \in \mathcal{X}, x' \prec x\}$$

dengan relasi dominasi $x' \prec x \iff \forall i, f_i(x') \leq f_i(x) \land \exists i, f_i(x') < f_i(x)$.

### 2.5 Arsitektur Pembelajaran Ensemble dalam *Feature Store*

Shah Rukh et al. (2024) menekankan pentingnya *feature store* sebagai komponen orkestrasi fitur:

$$\mathcal{F} = \{f_{ij} : X_i \rightarrow \mathbb{R}^{d_j} \mid i = 1,\ldots,n; j = 1,\ldots,m\}$$

di mana setiap fitur $f_{ij}$ memiliki *metadata* termasuk *freshness SLA*, *lineage*, dan *drift indicator* $\Delta_{ij} = \mathbb{E}[|f_{ij}(t) - f_{ij}(t-\tau)|]$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Lima-Lapisan Framework Integratif

Berdasarkan Shah Rukh et al. (2024), arsitektur sistem tersusun dalam lima lapisan yang bersifat modular dan saling tergantung:

**Lapisan 1 — Data Virtualization & Ingestion:**
Menggunakan *change data capture* (CDC) dan *message queue* (Kafka) untuk menyerap data dari ERP (SAP S/4HANA), WMS (Manhattan), TMS (Oracle TMS), telematika armada (Geotab), dan sensor IoT厂房 (OPC-UA). Standar koneksi mengikuti ISO/IEC 19944 untuk interoperabilitas cloud-edge.

**Lapisan 2 — Knowledge Graph & Feature Store:**
Data yang telah disaring dipetakan ke ontologi industri (misalnya GS1 standards) dan disimpan dalam *property graph* (Neo4j) dengan *vector embedding* untuk pencarian semantik. *Feature store* (Feast/Tecton) mengelola fitur dengan *point-in-time correctness*.

**Lapisan 3 — Analytics Services Modular:**
- *Descriptive*: KPI dashboard real-time (OTIF, fill rate, inventory turnover)
- *Predictive*: API forecasting dengan *automated retraining* (MLOps)
- *Prescriptive*: Solusi optimasi (linear programming, metaheuristik)

**Lapisan 4 — Decision & Execution Layer:**
Integrasi dengan S&OP (Sales & Operations Planning) dan S&OE (Sales & Operations Execution) untuk mengeksekusi rekomendasi secara otomatis atau *human-in-the-loop*.

**Lapisan 5 — Governance & Trust:**
Audit trail model (model card, datasheet), *fairness check*, *bias monitoring*, dan compliance ISO/IEC 27001.

### 3.2 Diagram Alir Proses Implementasi

```
┌─────────────────────────────────────────────────────────────┐
│  [1] Business Problem Framing → KPI Definition              │
│       ↓                                                      │
│  [2] Data Audit & Source Mapping (ERP/WMS/TMS/IoT)          │
│       ↓                                                      │
│  [3] Knowledge Graph Construction (Ontology + Embedding)    │
│       ↓                                                      │
│  [4] Feature Engineering & Feature Store Registration        │
│       ↓                                                      │
│