# 1458 — Integrasi Large Language Model dan Digital Twin dalam Konteks Industry 5.0: Kerangka Kerja, Tantangan, dan Peluang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Integrating large language model and digital twins in the context of industry 5.0: Framework, challenges and opportunities
**Jurnal & Sitasi Utama:** Chong Chen, K. Zhao, Jiewu Leng (2025). *Robotics and Computer-Integrated Manufacturing*, Vol. 92, Article 102982. DOI: [https://doi.org/10.1016/j.rcim.2025.102982](https://doi.org/10.1016/j.rcim.2025.102982)
**Sitasi Pendukung:** Leonardo Maretto, Maurizio Faccio, Daria Battini (2023). *Journal of Manufacturing Systems*, Vol. 69, pp. 320–338. DOI: [https://doi.org/10.1016/j.jmsy.2023.05.009](https://doi.org/10.1016/j.jmsy.2023.05.009)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi sistem manufaktur global memasuki fase kelima yang dikenal sebagai *Industry 5.0*, sebuah paradigma yang menanggapi keterbatasan paradigma *Industry 4.0* yang terlalu berorientasi pada otomatisasi penuh dan konektivitas mesin-mesin (*cyber-physical systems*). Jika *Industry 4.0* menitikberatkan pada integrasi horizontal dan vertikal melalui Internet of Things (IoT), *cloud computing*, dan *cyber-physical production systems*, maka *Industry 5.0*—sebagaimana dirumuskan oleh European Commission (2021) dan selanjutnya dikaji secara sistematis oleh Chen, Zhao, dan Leng (2025, DOI: [10.1016/j.rcim.2025.102982](https://doi.org/10.1016/j.rcim.2025.102982))—menempatkan manusia (*human-centric*), keberlanjutan (*sustainable*), dan ketangguhan (*resilient*) sebagai tiga pilar utama. Dalam konteks ini, integrasi antara Large Language Model (LLM) dan Digital Twin (DT) muncul sebagai tulang punggung rekayasa sistem industri generasi berikutnya.

Studi Chen et al. (2025) yang dipublikasikan di *Robotics and Computer-Integrated Manufacturing* berargumen bahwa LLM—yang selama ini identik dengan aplikasi *natural language processing* seperti *chatbots* dan *generative AI*—memiliki potensi transformatif ketika di-*coupling* dengan DT untuk menghasilkan apa yang mereka sebut sebagai *cognitive digital twin*. DT sendiri adalah replika virtual dari entitas fisik yang terus-menerus disinkronkan melalui aliran data sensorik. Ketika LLM disematkan ke dalam DT, kemampuan *reasoning*, *contextual understanding*, dan *human-machine interaction* meningkat secara eksponensial. Urgensi integrasi ini diperkuat oleh temuan Maretto, Faccio, dan Battini (2023, DOI: [10.1016/j.jmsy.2023.05.009](https://doi.org/10.1016/j.jmsy.2023.05.009)) yang melakukan tinjauan sistematis terhadap 229 *case studies* adopsi teknologi digital di manufaktur. Mereka menemukan bahwa meskipun adopsi DT, AI, dan *additive manufacturing* meningkat signifikan pasca-2020, masih terdapat kesenjangan besar dalam hal analisis *cost-benefit* kuantitatif—dengan hanya 38% studi yang melaporkan *return on investment* (ROI) terukur.

Secara operasional, integrasi LLM-DT memberikan nilai tambah pada tiga dimensi: (i) **pengambilan keputusan**: LLM menerjemahkan pola data kompleks dari DT menjadi rekomendasi yang dapat dipahami operator; (ii) **pemeliharaan prediktif**: model bahasa membantu meng-*generate* skenario kegagalan (*failure mode narratives*) yang tidak tersedia dalam model fisik murni; (iii) **kolaborasi manusia-mesin**: antarmuka percakapan (*conversational interface*) menurunkan *skill barrier* bagi operator lantai produksi. Konteks industri ini menjadi semakin relevan ketika rantai pasok global menghadapi disrupsi berulang (pandemi, konflik geopolitik, kelangkaan semikonduktor), sehingga ketangguhan sistem—salah satu pilar *Industry 5.0*—menuntut sistem yang adaptif dan *self-explaining*.

## 2. Landasan Teori & Formulasi Matematis

Kerangka integrasi LLM-DT yang diajukan Chen et al. (2025) dapat diformalisasikan melalui beberapa persamaan dasar. Pertama, *Digital Twin Synchronization Error* didefinisikan sebagai selisih antara keadaan fisik aktual $S_p(t)$ dan keadaan virtual $S_v(t)$ pada waktu diskret $t$:

$$\Delta_{sync}(t) = \| S_p(t) - S_v(t) \|_2 = \sqrt{\sum_{i=1}^{n} \left( s_{p,i}(t) - s_{v,i}(t) \right)^2}$$

di mana $n$ adalah jumlah dimensi status sistem (misalnya suhu, getaran, tekanan, laju produksi). Nilai $\Delta_{sync}(t)$ harus diminimalkan melalui algoritma *state estimation*, dengan target operasional $\Delta_{sync}(t) \leq \epsilon$ di mana $\epsilon$ adalah ambang toleransi yang ditetapkan berdasarkan *Mean Absolute Percentage Error* historis.

Kedua, untuk mengkuantifikasi kontribusi model bahasa dalam menurunkan *uncertainty* keputusan, kita dapat menggunakan formulasi *information entropy* Shannon yang diadopsi dari arsitektur *transformer* LLM:

$$H(X) = -\sum_{i=1}^{N} p(x_i) \log_2 p(x_i)$$

di mana $p(x_i)$ adalah probabilitas keluaran token ke-$i$ dari *vocabulary* berukuran $N$. Penurunan entropi pasca-intervensi LLM—yaitu $\Delta H = H_{pre} - H_{post}$—menunjukkan reduksi ketidakpastian informasi yang dialami operator. Semakin besar $\Delta H$, semakin efektif LLM dalam mengkristalisasi informasi DT menjadi rekomendasi yang actionable.

Ketiga, untuk memperbarui status DT berdasarkan observasi sensorik baru dengan tetap mempertahankan inkorporasi *prior knowledge* LLM, kita gunakan formulasi *Bayesian update*:

$$P(S_v(t) \mid O_{1:t}) = \frac{P(O_t \mid S_v(t)) \cdot P(S_v(t) \mid O_{1:t-1})}{\int P(O_t \mid S_v') \cdot P(S_v' \mid O_{1:t-1}) \, dS_v'}$$

di mana $O_{1:t}$ adalah himpunan observasi dari waktu $1$ hingga $t$, dan $S_v(t)$ adalah status virtual DT. Likelihood $P(O_t \mid S_v(t))$ dihasilkan oleh model sensorik, sedangkan prior $P(S_v(t-1) \mid O_{1:t-1})$ dipengaruhi oleh *semantic embedding* dari LLM yang mengkodekan pengetahuan domain pakar.

Keempat, metrik efektivitas investasi teknologi digital yang ditekankan oleh Maretto et al. (2023) diformalisasikan sebagai *Net Present Value* (NPV) dengan horizon perencanaan $T$ tahun dan tingkat diskonto $r$:

$$NPV = \sum_{t=0}^{T} \frac{CF_t}{(1+r)^t} - C_0$$

di mana $CF_t$ adalah *cash flow* bersih pada tahun ke-$t$ dan $C_0$ adalah investasi awal (*capital expenditure*). Payback period dihasilkan dari persamaan:

$$T_{payback} = \min \left\{ t : \sum_{k=0}^{t} CF_k \geq C_0 \right\}$$

Akhirnya, indeks performa gabungan yang merepresentasikan kualitas integrasi LLM-DT didefinisikan sebagai *Cognitive Twin Performance Index* (CTPI):

$$CTPI = w_1 (1 - \overline{\Delta_{sync}}) + w_2 (1 - \overline{H_{post}}) + w_3 \cdot \frac{NPV}{C_0}$$

di mana $w_1 + w_2 + w_3 = 1$ adalah bobot yang ditetapkan oleh manajemen berdasarkan prioritas strategis (misalnya ketahanan vs. profitabilitas).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka LLM-DT mengikuti prosedur operasional standar (SOP) delapan tahap yang diadaptasi dari Chen et al. (2025) dan diperkuat dengan dimensi ekonomis dari Maretto et al. (2023):

**Tahap 1 — Asesemen Kematangan Digital (*Digital Maturity Assessment*).** Gunakan model *Smart Industry Readiness Index* (SIRI) atau *Industry 4.0 Maturity Index* untuk memetakan kondisi eksisting. Tahap ini menghasilkan baseline skor kematangan pada 16 dimensi, termasuk integrasi horizontal/vertikal dan *human-machine interaction*.

**Tahap 2 — Identifikasi *Use Case* Prioritas.** Pilih 3–5 *use case* berdasarkan matriks *value vs. complexity*, dengan fokus pada proses yang memiliki *downtime cost* tinggi (misalnya *bottleneck* lini perakitan).

**Tahap 3 — Akuisisi Data & Konstruksi DT.** Pasang sensor IoT pada aset fisik, bangun arsitektur tiga lapis (*physical layer*, *communication layer*, *virtual layer*), dan validasi model dengan data historis minimal 6 bulan.

**Tahap 4 — Fine-Tuning LLM Domain-Spesifik.** Lakukan *pre-training* lanjutan pada LLM fondasi (misalnya GPT-4 atau Llama-3) menggunakan *corpus* spesifik industri: laporan pemeliharaan, SOP, *failure mode database*, dan *maintenance logs*. Parameter *learning rate* dan *epoch* disesuaikan melalui *grid search*.

**Tahap 5 — Integrasi LLM-DT melalui *API Middleware*.** Bangun *middleware* berbasis REST/GraphQL yang memungkinkan LLM melakukan *query* terhadap status DT dan sebaliknya DT dapat menerima *semantic instruction* dari LLM.

**Tahap 6 — Validasi dengan *Human-in-the-Loop*.** Sebelum *go-live*, libatkan operator dan insinyur untuk memvalidasi keluaran LLM. Hitung *inter-annotator agreement* dengan Cohen's Kappa: $\kappa = (p_o - p_e)/(1 - p_e)$ di mana $p_o$ adalah proporsi kesepakatan aktual dan $p_e$ adalah kesepakatan kebetulan.

**Tahap 7 — Pelatihan Operator & Change Management.** Selenggarakan pelatihan intensif dan bangun mekanisme *feedback loop* agar operator dapat mengoreksi halusinasi LLM.

**Tahap 8 — Pemantauan Berkelanjutan & Iterasi.** Pantau CTPI secara mingguan dan lakukan *retraining* model setiap 3–6 bulan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik perakitan komponen otomotif dengan 12 lini produksi, mengadopsi integrasi LLM-DT untuk sistem *predictive maintenance* pada 40 *CNC machine*.

**Parameter Input Industri (estimasi berbasis data Maretto et al. (2023) untuk industri mid-size Eropa):**

| Parameter | Nilai |
|---|---|
| Investasi awal LLM-DT ($C_0$) | €480.000 |
| Biaya operasional tahunan | €65.000 |
| Penghematan *unplanned downtime* | €220.000/tahun |
| Penghematan energi & scrap | €90.000/tahun |
| Peningkatan produktivitas | €70.000/tahun |
| Tingkat diskonto ($r$) | 8% |
| Horizon analisis ($T$) | 5 tahun |

**Langkah 1: Hitung *Cash Flow* Bersih Tahunan.**

$$CF_t = \text{Penghematan Total} - \text{Biaya Operasional} = (220.000 + 90.000 + 70.000) - 65.000 = €315.000/\text{tahun}$$

**Langkah 2: Hitung NPV menggunakan rumus diskonto majemuk.**

$$NPV = \sum_{t=1}^{5} \frac{315.000}{(1+0
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
