# 2034 — Integrasi Large Language Models dan Ekosistem Digital Twin dalam Manufaktur Digital: Kerangka Sistematis untuk Optimalisasi Proses, Struktur Data, dan Interaksi Manusia-Mesin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Integrating Large Language Models into Digital Manufacturing: A Systematic Review and Research Agenda
**Jurnal & Sitasi Utama:** Chourouk Ouerghemmi, Myriam Ertz (2025). *Computers*. DOI: [https://doi.org/10.3390/computers14080318](https://doi.org/10.3390/computers14080318)
**Sitasi Pendukung:** Victória Melo, Flávia Pires, José Barbosa (2025). *Production & Manufacturing Research*. DOI: [https://doi.org/10.1080/21693277.2025.2591786](https://doi.org/10.1080/21693277.2025.2591786)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri global sedang bergerak pada kecepatan yang belum pernah terjadi sebelumnya, didorong oleh konvergensi antara Revolusi Industri 4.0 dan paradigma baru Industri 5.0 yang menempatkan manusia kembali di pusat sistem produksi. Di jantung konvergensi ini, *Large Language Models* (LLMs) muncul sebagai enabler teknologi yang mengubah fundamental cara pabrik cerdas memproses informasi, mengoptimalkan proses, dan berkolaborasi dengan pekerja manusia. Ouerghemmi dan Ertz (2025) dalam *tinjauan sistematis* terhadap 53 makalah peer-reviewed yang diterbitkan di jurnal *Computers* menyoroti sebuah realitas industri yang penting: meskipun volume riset tentang LLM dalam manufaktur digital terus meningkat secara eksponensial, literatur akademik tetap terfragmentasi dan tidak memiliki kerangka integratif yang mampu menangkap implikasi multifaset dari adopsi teknologi ini.

Konteks ekonomi makro menunjukkan urgensi yang jelas. Menurut data yang dirangkum dalam systematic review tersebut, sektor manufaktur global menghadapi tekanan simultan berupa: (i) biaya energi yang fluktuatif, (ii) kekurangan tenaga kerja terampil di negara-negara OECD, (iii) permintaan akan kustomisasi massal (*mass customization*), dan (iv) keharusan memenuhi regulasi keberlanjutan seperti EU CSRD dan ISO 14001. Dalam konteks ini, LLMs bukan sekadar alat otomatisasi, melainkan katalis untuk mengonversi data heterogen dari lantai pabrik (sensor IoT, log CNC, MES, ERP) menjadi pengetahuan aksiabel. Tiga sumbu tematik yang diidentifikasi oleh Ouerghemmi dan Ertz (2025) — optimalisasi proses manufaktur, strukturisasi data dan inovasi, serta interaksi manusia-mesin — merepresentasikan cetak biru (*blueprint*) transformasi komprehensif yang harus dipahami oleh setiap insinyur industri.

Sementara itu, lapisan teknologi pelengkap yang menopang integrasi LLM dalam manufaktur adalah **Digital Twin (DT)**. Melo, Pires, dan Barbosa (2025) dalam makalah mereka di *Production & Manufacturing Research* menekankan bahwa DT telah berevolusi dari representasi tunggal (*single unit*) menjadi **ekosistem DT** — jejaring DT yang saling berinterkoneksi dengan struktur organisasi yang beragam: tersentralisasi, hierarkis, heterarkis, dan holonik. Evolusi ini krusial karena struktur organisasi menentukan latensi propagasi data, redundansi, skalabilitas, dan pada akhirnya — kualitas input yang diterima oleh LLM untuk menghasilkan keputusan optimal. Keterkaitan antara kedua literatur ini membentuk kawasan riset前沿 yang sangat relevan bagi ruang lingkup Teknik Industri modern: bagaimana arsitektur ekosistem DT dan kapabilitas LLM dapat diorkestrasi untuk mencapai *smart factory* yang benar-benar adaptif.

Urgensi operasional dari integrasi ini dapat diukur dari tiga dimensi konkret. Pertama, **dimensi kualitas**: defect rate pada manufaktur semikonduktor masih berkisar 50-150 DPMO (defects per million opportunities), di mana deteksi dini berbasis LLM berpotensi menurunkan angka ini hingga 30-50%. Kedua, **dimensi efisiensi energi, di mana LLMs yang dilatih pada data konsumsi energi real-time dapat mengidentifikasi anomali 8-15% lebih awal dibanding rule-based SCADA systems. Ketiga, **dimensi waktu respons**: siklus decision-making di lantai pabrik yang saat ini membutuhkan 4-24 jam untuk eskalasi insiden, dapat dikompresi menjadi menit melalui orkestrasi LLM-DT real-time. Pemahaman menyeluruh terhadap kerangka teoritis dan prosedur operasional dari integrasi ini menjadi kompetensi inti yang wajib dikuasai oleh spesialis Teknik Industri abad ke-21.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Transformer dan Mekanisme Atensi

LLMs modern berlandaskan pada arsitektur Transformer (Vaswani et al., 2017 — referensi kanonik yang dikutip secara implisit dalam kerangka teoritis Ouerghemmi & Ertz, 2025). Inti arsitektur ini adalah **scaled dot-product attention** yang diformulasikan sebagai:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^{\top}}{\sqrt{d_k}}\right)V$$

di mana $Q \in \mathbb{R}^{n \times d_k}$ adalah matriks *query*, $K \in \mathbb{R}^{n \times d_k}$ adalah matriks *key*, dan $V \in \mathbb{R}^{n \times d_v}$ adalah matriks *value*. Faktor penskalaan $\sqrt{d_k}$ mencegah gradien explode saat dimensi $d_k$ bernilai besar. Untuk aplikasi manufaktur, $Q$, $K$, $V$ dapat diinterpretasikan sebagai proyeksi linier dari *multivariate time-series* sinyal sensor (suhu, getaran, tekanan, arus) — menjadikan LLMs mampu melakukan *pattern recognition* pada data sensorik yang kompleks.

### 2.2 Formulasi Optimalisasi Proses Manufaktur

Untuk sumbu tematik pertama (optimalisasi proses), Ouerghemmi dan Ertz (2025) melaporkan penggunaan LLMs dalam formulasi **multi-objective optimization** dengan fungsi tujuan gabungan:

$$\min_{x \in \mathcal{X}} \; F(x) = \left[ f_1(x), \; f_2(x), \; f_3(x) \right]^{\top}$$

di mana $f_1(x) = C(x)$ adalah biaya produksi, $f_2(x) = -\eta(x)$ adalah efisiensi energi (dimaksimasi melalui minimasi negatif), dan $f_3(x) = Q(x)$ adalah metrik kualitas (defect rate). LLM berperan sebagai *surrogate model* yang memperkirakan $F(x)$ jauh lebih cepat dibanding simulasi fisika (Finite Element Analysis) yang mahal secara komputasional. Kecepatan inferensi LLM dapat diformulasikan sebagai:

$$t_{\text{inference}} = \alpha \cdot n_{\text{tokens}} + \beta \cdot d_{\text{model}} + \gamma$$

dengan $n_{\text{tokens}}$ adalah panjang sekuens input, $d_{\text{model}}$ dimensi embedding, dan $\alpha, \beta, \gamma$ adalah parameter perangkat keras yang dapat dikalibrasi.

### 2.3 Topologi Jaringan Ekosistem Digital Twin

Melo, Pires, dan Barbosa (2025) memperkenalkan empat struktur organisasi DT yang masing-masing memiliki karakteristik topologis terukur. Untuk struktur **tersentralisasi**, latensi rata-rata sistem dapat dimodelkan sebagai:

$$L_{\text{centralized}} = \frac{1}{n}\sum_{i=1}^{n} \left( \frac{2 \cdot d_i \cdot \rho}{B} + t_{\text{proc}}^{\text{server}} \right)$$

di mana $n$ adalah jumlah DT nodes, $d_i$ jarak topologi node $i$ ke server pusat, $\rho$ ukuran payload data, dan $B$ bandwidth jaringan. Untuk struktur **heterarkis** (jaringan mesh), latensi rata-rata menjadi:

$$L_{\text{heterarchical}} = \frac{1}{|E|}\sum_{(i,j) \in E} \frac{d_{ij} \cdot \rho_{ij}}{B_{ij}}$$

dengan $E$ himpunan edge jaringan. Perbandingan kuantitatif antara struktur-struktur ini menjadi alat bantu keputusan (*decision support tool*) bagi perancang pabrik cerdas.

### 2.4 Metrik Interaksi Manusia-Mesin

Untuk sumbu tematik ketiga (interaksi manusia-mesin), metrik **usability** dan **cognitive load** dapat diformulasikan melalui NASA-TLX index yang diadaptasi:

$$\text{TLX}_{\text{score}} = \frac{1}{6}\sum_{k=1}^{6} w_k \cdot r_k$$

di mana $w_k$ adalah bobot subskala ($k \in \{\text{Mental, Physical, Temporal, Performance, Effort, Frustration}\}$) dan $r_k$ adalah rating (skala 0-100). Integrasi LLM sebagai *co-pilot* operator terbukti menurunkan $\text{TLX}_{\text{score}}$ sebesar 18-27% berdasarkan data yang dirangkum dalam Ouerghemmi & Ertz (2025).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi integrasi LLM-DT dalam manufaktur mengikuti SOP berlapis yang diturunkan dari metodologi PRISMA (*Preferred Reporting Items for Systematic Reviews and Meta-Analyses*) yang digunakan Ouerghemmi dan Ertz (2025), serta rekomendasi arsitektural dari Melo et al. (2025).

### 3.1 Tahap 1: Asesmen Kematangan Digital (Digital Maturity Assessment)
Lakukan audit terhadap empat pilar: (a) infrastruktur IoT dan konektivitas (jumlah sensor, protokol OPC-UA, MQTT), (b) kualitas data historis (volume, variabilitas, kelengkapan), (c) kapasitas komputasi (GPU cluster, edge computing nodes), (d) kapabilitas SDM (literasi data, familiaritas dengan LLM tools). Skor kematangan dihitung sebagai:

$$\text{DMS} = \frac{1}{4}\sum_{p=1}^{4} \frac{s_p}{s_p^{\max}} \times 100\%$$

di mana $s_p$ adalah skor pilar $p$. Jika $\text{DMS} < 60\%$, lakukan *gap-closing* terlebih dahulu sebelum implementasi.

### 3.2 Tahap 2: Pemilihan Struktur Ekosistem DT
Berdasarkan hasil asesmen, pilih struktur organisasi DT sesuai tipologi Melo et al. (2025): gunakan struktur **tersentralisasi** untuk pabrik kecil-menengah dengan <50 aset kritis; **hierarkis** untuk fasilitas multi-line dengan klaster produksi yang jelas; **heterarkis** untuk supply chain multi-aktor dengan kebutuhan resilient; **holonik** untuk sistem yang membutuhkan otonomi tinggi dan adaptasi cepat terhadap disrupsi.

### 3.3 Tahap 3: Akuisisi dan Pra-pemrosesan Data
Data yang dikumpulkan harus melalui *data quality pipeline*: filtering menggunakan aturan $\sigma$-rule ($\pm 3\sigma$), interpolasi missing values dengan metode MICE (Multiple Imputation by Chained Equations), dan normalisasi:

$$x_{\text{norm}} = \frac{x - \mu}{\sigma}$$

di mana $\mu$ dan $\sigma$ adalah mean dan standar deviasi dari fitur $x$.

### 3.4 Tahap 4: Fine-Tuning LLM Spesifik Domain
Gunakan teknik **Low-Rank Adaptation (LoRA)** untuk melakukan fine-tuning LLM foundation model (misalnya LLaMA-3 atau Mistral) pada dataset spesifik manufaktur:

$$\min_{\theta} \mathcal{L}(\theta) = -\sum_{i=1}^{N} \log P(y_i | x_i; \theta_{\text{base}} + \Delta\theta)$$

di mana $\Delta\theta$ adalah matriks low-rank dengan dekomposisi $\Delta\theta = AB$, $A \in \mathbb{R}^{d \times r}$, $B \in \mathbb{R}^{r \times k}$, dan $r \ll \min(d, k)$. Teknik ini memungkinkan fine-tuning hanya dengan 0.1-1% parameter trainable.

### 3.5 Tahap 5: Integrasi dan Validasi闭环 (Closed-Loop Validation)
Hubungkan LLM dengan ekosistem DT melalui *middleware* (misalnya menggunakan protokol ISO 23247). Validasi dilakukan dengan **k-fold cross-validation** ($k=5$):

$$\text{CV error} = \frac{1}{k}\sum_{i=1}^{k} \mathcal{L}_{\text{test}}^{(i)}$$

Pastikan CV error < threshold yang telah ditentukan (umumnya < 5% untuk aplikasi kritis).

### 3.6 Tahap 6: Deployment dan Continuous Monitoring
Deploy dengan strategi **canary release**: 5% traffic awal, naikkan secara gradual hingga 100% dengan monitoring *drift detection*:

$$D_t = \text{KL}\big(P_{\text{ref}}(X) \,\|\, P_t(X)\big) = \sum_{x} P_{\text{ref}}(x) \log \frac{P_{\text{ref}}(x)}{P_t(x)}$$

Jika $D_t > \tau_{\text{drift}}$, picu *retraining pipeline* secara otomatis.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pabrik Otomotif dengan 12 Lini Produksi

Sebuah pabrik komponen otomotif di Jawa Timur memiliki 12 lini produksi dengan karakteristik berikut: produksi harian 8.000 unit *engine block*, defect rate historis 4,2% (336 unit reject/hari), downtime rata-rata 7,3%, dan biaya produksi Rp