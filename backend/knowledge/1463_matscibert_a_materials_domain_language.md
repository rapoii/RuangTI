# 1463 — Model Bahasa Domain Material (MatSciBERT) untuk Penambangan Teks dan Ekstraksi Informasi dalam Rantai Nilai Manufaktur & Siklus Hidup Material

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** MatSciBERT: A materials domain language model for text mining and information extraction
**Jurnal & Sitasi Utama:** Tanishq Gupta, Mohd Zaki, N. M. Anoop Krishnan (2022). *npj Computational Materials*, 8, 127. DOI: [https://doi.org/10.1038/s41524-022-00784-w](https://doi.org/10.1038/s41524-022-00784-w)
**Sitasi Pendukung:** Shayan Khakmardan, Maximilian Rolinck, Felipe Cerdas (2023). *Procedia CIRP*, 116, 447–452. DOI: [https://doi.org/10.1016/j.procir.2023.02.102](https://doi.org/10.1016/j.procir.2023.02.102)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur, pertambangan, dan transisi energi bersih saat ini beroperasi dalam ledakan informasi tekstual yang belum pernah terjadi sebelumnya. Setiap tahunnya, lebih dari satu juta artikel ilmiah terkait ilmu material dipublikasikan, mencakup karakteristik mekanik paduan, komposisi keramik, diagram fase, perilaku korosi, hingga proses ekstraksi litium untuk baterai ion-litium. Gupta, Zaki, dan Krishnan (2022) dalam *npj Computational Materials* mengemukakan bahwa "a large amount of materials science knowledge is generated and stored as text published in peer-reviewed scientific literature" dan menunjukkan bahwa model bahasa umum seperti BERT atau SciBERT menghasilkan performa suboptimal ketika diterapkan pada korpus material karena tidak memahami notasi jargon spesifik domain seperti *space group*, *lattice parameter*, *Young's modulus*, atau *spodumene concentrate* (DOI: [10.1038/s41524-022-00784-w](https://doi.org/10.1038/s41524-022-00784-w)).

Urgensi operasional sangat terasa dalam konteks rantai pasok litium global. Khakmardan, Rolinck, dan Cerdas (2023) menyoroti bahwa "the clean energy transition requires a considerable amount of different minerals, and lithium is one of the most critical elements owing to its use in Lithium-ion batteries" — sehingga elemen ini dijuluki "*white Oil*" dan menjadi fokus kebijakan berbagai negara (DOI: [10.1016/j.procir.2023.02.102](https://doi.org/10.1016/j.procir.2023.02.102)). Studi tersebut membandingkan empat rute produksi litium: *brine* (Chili), *spodumene* (Australia & Tiongkok), *hectorite* (Meksiko), dan *zinnwaldite* (Jerman), menggunakan metodologi *Life Cycle Assessment* (LCA) *cradle-to-gate*. Setiap rute memiliki karakteristik mineral, konsumsi energi, dan jejak lingkungan yang berbeda — informasi yang umumnya terpencar dalam ratusan laporan teknis, database供应商, dan jurnal peer-review.

Dari sudut pandang Teknik Industri, masalah inti yang harus dijawab adalah bagaimana mengonversi volume dokumen yang sangat besar tersebut menjadi basis pengetahuan terstruktur yang siap pakai untuk keputusan *sourcing*, *process selection*, dan *risk assessment*. Teknik penambangan teks konvensional berbasis aturan (*rule-based*) atau *bag-of-words* memiliki keterbatasan dalam menangani sinonim, akronim, dan konteks numerik. MatSciBERT menutup celah tersebut dengan melakukan *pre-training* pada korpus skala besar teks material — menjadikannya *state-of-the-art* pada tiga tugas hilir: *Named Entity Recognition* (NER), *Relation Classification*, dan *Abstract Classification*. Integrasi kedua paper ini merepresentasikan cetak biru (*blueprint*) bagaimana Natural Language Processing (NLP) domain-spesifik dapat mempercepat pengambilan keputusan rekayasa di seluruh rantai nilai, mulai dari eksplorasi bijih, ekstraksi, refining, hingga daur ulang baterai.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Transformer dan Self-Attention

MatSciBERT dibangun di atas arsitektur *Bidirectional Encoder Representations from Transformers* (BERT) dengan 12 *encoder layer*, 768 *hidden dimension*, dan 12 *attention head*. Komponen inti adalah mekanisme **scaled dot-product self-attention** yang memungkinkan model menangkap dependensi antar-token dalam dua arah:

$$
\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{Q K^{\top}}{\sqrt{d_k}}\right) V
$$

di mana $Q, K, V \in \mathbb{R}^{n \times d_k}$ adalah matriks *query*, *key*, dan *value* yang diproyeksikan dari vektor embedding input, serta $d_k$ adalah dimensi key (pada MatSciBERT, $d_k = 64$). Dalam konteks teks material, mekanisme ini memungkinkan model memahami hubungan antara entitas seperti "*spodumene*", "*LiAl(SiO$_3$)$_2$*", dan "*α-phase*" dalam satu kalimat.

Untuk *multi-head attention*, keluaran digabungkan sebagai berikut:

$$
\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h) W^{O}
$$

$$
\text{head}_i = \text{Attention}(Q W_i^{Q}, K W_i^{K}, V W_i^{V})
$$

dengan $h = 12$ kepala perhatian dan $W^{O}$ adalah matriks proyeksi output.

### 2.2 Pre-training Objective

MatSciBERT menggunakan dua fungsi *loss* simultan selama *pre-training* pada korpus $\sim$3,7 juta abstrak material:

$$
\mathcal{L}_{\text{MLM}} = -\sum_{i \in \mathcal{M}} \log P(x_i \mid x_{\setminus \mathcal{M}})
$$

$$
\mathcal{L}_{\text{NSP}} = -\log P(\text{IsNext} \mid x_{1:n}, x_{n+1:2n})
$$

Total *loss* yang diminimalkan adalah $\mathcal{L} = \mathcal{L}_{\text{MLM}} + \mathcal{L}_{\text{NSP}}$. Masked Language Modeling (MLM) melatih prediksi token yang ditutupi menggunakan konteks dua arah, sedangkan Next Sentence Prediction (NSP) melatih hubungan antar-kalimat — keduanya krusial untuk memahami deskripsi proses seperti "*leaching of β-spodumene with sulfuric acid at 250 °C yields Li$_2$SO$_4$*".

### 2.3 Metrik Evaluasi untuk Ekstraksi Informasi

Untuk tugas NER dan *abstract classification*, Gupta dkk. (2022) menggunakan metrik *macro-averaged F1-score*:

$$
F_1 = 2 \cdot \frac{P \cdot R}{P + R}, \quad P = \frac{TP}{TP+FP}, \quad R = \frac{TP}{TP+FN}
$$

dengan $TP, FP, FN$ berturut-turut adalah true positive, false positive, dan false negative per kelas entitas (misalnya *Material*, *Property*, *Application*, *Synthesis*).

### 2.4 Formulasi Life Cycle Assessment (LCA)

Paper pendukung Khakmardan dkk. (2023) menggunakan formulasi dampak lingkungan midpoint sesuai metode ReCiPe 2016:

$$
\text{Impact}_{c} = \sum_{i \in \text{flows}} m_i \cdot \text{CF}_{i,c}
$$

di mana $m_i$ adalah massa *flow* $i$ (kg, MJ, atau m$^3$) dan $\text{CF}_{i,c}$ adalah *characterization factor* kategori dampak $c$ (misalnya *Global Warming Potential* dalam kg CO$_2$-eq/kWh, *Acidification Potential* dalam kg SO$_2$-eq). Kategori yang dianalisis mencakup GWP-100, AP, EP-freshwater, dan *water scarcity footprint*.

Total *cradle-to-gate* impact untuk 1 kg Li$_2$CO$_3$ ekuivalen menjadi fungsi dari konsumsi energi listrik $E_{\text{grid}}$, bahan kimia $M_{\text{chem}}$, dan air proses $W$:

$$
I_{\text{total}} = f(E_{\text{grid}}, M_{\text{chem}}, W, \eta_{\text{extraction}})
$$

dengan $\eta_{\text{extraction}}$ adalah *recovery rate* litium dari bijih/air garam (untuk *brine* Chili, $\eta \approx 30\text{–}50\%$; untuk *spodumene*, $\eta \approx 60\text{–}80\%$).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi MatSciBERT dalam alur kerja rekayasa industri mengikuti SOP enam-tahap berikut, yang dirancang selaras dengan standar **ISO 14040/14044** untuk LCA dan praktik *text mining* di industri:

```
┌──────────────────────────────────────────────────────────────────┐
│  SOP-01  Korpus Curation (PMC + Elsevier materials science)      │
│          → Tokenisasi BPE, cleaning, deduplication               │
│  SOP-02  Pre-training MatSciBERT (MLM + NSP, 12-layer, 768-d)   │
│          → Validasi perplexity pada held-out set                 │
│  SOP-03  Fine-tuning untuk NER (mis. token BIO + CRF head)       │
│          → Label: MATERIAL, PROPERTY, PROCESS, APPLICATION       │
│  SOP-04  Relation Extraction (Materials → Process → KPI)        │
│  SOP-05  Abstract Classification (topik, kategori material)       │
│  SOP-06  Integrasi ke knowledge graph → Keputusan LCA/sourcing  │
└──────────────────────────────────────────────────────────────────┘
```

**Tahap SOP-01 hingga SOP-05** sepenuhnya mengikuti protokol Gupta dkk. (2022): korpus awal terdiri dari abstrak jurnal *Materials Science and Engineering*, *Acta Materialia*, dan sub-domain baterai dari ScienceDirect; tokenisasi menggunakan *WordPiece*; *pre-training* dilakukan selama 100 epoch dengan *batch size* 64, *learning rate* 5e-5, dan *AdamW optimizer* ($\beta_1=0.9, \beta_2=0.999, \epsilon=1\text{e-}8$). **Tahap SOP-06** menjadi jembatan integrasi dengan paper Khakmardan dkk. (2023): entitas yang diekstraksi (misalnya "*spodumene*", "*hectorite*", "*zinnwaldite*", "*sulfuric acid roasting*") digunakan untuk mengisi *bill of materials* dan parameter proses dalam model LCA.

Arsitektur teknologi yang dihasilkan adalah **pipeline NLP-LCA** dengan diagram alir sebagai berikut:

1. **Ingestion**: Scopus/Elsevier API → PDF → Plain Text.
2. **Pre-processing**: Regex untuk membersihkan notasi kimia ($\text{LiAlSi}_2\text{O}_6$), normalisasi satuan (GPa, eV/atom).
3. **NER + RE via MatSciBERT**: Tag sequence BIO diekstrak; hubungan entitas disimpan dalam format JSON-LD sesuai skema **Materiaux** ontology.
4. **LCA Engine**: Mengambil parameter $\eta_{\text{extraction}}$, suhu kalsinasi, dan konsumsi energi dari JSON-LD, menjalankan simulasi SimaPro/openLCA sesuai **ISO 14040**.
5. **Decision Dashboard**: Visualisasi *impact score* per rute produksi dengan *uncertainty band* dari bootstrap $n=1000$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pemeringkatan Empat Rute Produksi Litium

Sebuah OEM baterai otomotif di Eropa ingin memilih rute *sourcing* litium paling berkelanjutan. Manajer ESG meminta analisis komparatif terhadap empat rute dari Khakdarman dkk. (2023): (i) *Brine* Chili, (ii) *Spodumene* Australia, (iii) *Spodumene* Tiongkok, dan (iv) *Zinnwaldite* Jerman. Data input dibakukan untuk functional unit 1 kg Li$_2$CO$_3$ ekuivalen (LCE).

**Langkah 1: Ekstraksi parameter via MatSciBERT.** Dari korpus 50 abstrak yang di-*fine-tune*, model mengekstrak parameter proses berikut (Tabel 1):

| Rute | Mineralogi | Proses Utama | $\eta_{\text{extraction}}$ | $E_{\text{grid}}$ (kWh/kg LCE) | $M_{\text{H}_2\text{SO}_4}$ (kg/kg) |
|---|---|---|---|---|---|
| Brine (Chili) | Li-bearing brine | Solar evaporation + Li$_2$CO$_3$ precip. | 0,40 | 8 | 0 |
| Spodumene (AUS) | β-spodumene | Roasting 1050 °C + acid leach | 0,75 | 32 | 2,8 |
| Spodumene (CHN) | β-spodumene | Roasting + acid leach | 0,70 | 47 | 3,1 |
| Zinnwaldite (GER) | Zinnwaldite | Roasting + sulfatisasi | 0,60 | 55 | 4,5 |

**Langkah 2: Perhitungan dampak GWP-100.** Karakterisasi faktor (CF) diambil dari Ecoinvent v3.9 (cut-off, APOS): untuk listrik *grid mix* Chili $0,52$ kg CO$_2$-eq/kWh, Australia (VIC) $0,84$, Tiongkok (Sichuan) $0,61$, dan Jerman $0,42$. Asumsikan CF untuk H$_2$SO$_4$ produksi sebesar $0,15$ kg CO$_2$-eq/kg (rata-rata Eropa). Fokus pada dampak langsung dari energi dan bahan kimia (abaikan transport, capital goods