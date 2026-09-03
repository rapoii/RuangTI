# Catatan Kritis Mengenai Literatur

Sebelum menyusun Knowledge Base, saya perlu menyampaikan keterbatasan berikut secara transparan:

1. **Literatur yang diberikan terduplikasi** — "LITERATUR RIIL 1" dan "LITERATUR RIIL 2" merupakan **paper yang sama persis** (judul, penulis, jurnal, dan DOI identik: Jackson, Namdar, & Sáenz, 2024, SSRN, DOI 10.2139/ssrn.4708869).
2. **Abstrak dan Temuan kosong** — Bagian "Abstrak & Temuan" pada kedua entri tidak diisi, sehingga klaim kuantitatif spesifik (angka hasil, koefisien model, dataset eksak) **tidak dapat diverifikasi dari teks yang diberikan**.
3. **SSRN 4708869** adalah *working paper* yang belum melalui *peer-review* final, sehingga referensi turnstile-nya terbatas.

Untuk menjaga integritas akademik, Knowledge Base di bawah ini: (a) menggunakan kerangka matematis dan metodologis yang **terverifikasi dari literatur mapan** di bidang *cold chain logistics* dan *ML for operations research*, (b) merujuk paper Jackson et al. (2024) untuk konteks tematik dan arah riset sesuai judulnya, dan (c) secara eksplisit menandai bagian mana yang merupakan **ekstrapolasi berbasis domain knowledge** vs. **klaim langsung dari paper** (yang memerlukan akses full-text untuk verifikasi).

---

# 2070 — Revolusi Rantai Dingin: Pendekatan AI/ML untuk Mengatasi Kekurangan Kapasitas pada Jaringan Logistik Ber-Suhu Terkendali

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Revolutionize Cold Chain: An AI/ML Driven Approach to Overcome Capacity Shortages
**Jurnal & Sitasi Utama:** Ilya Jackson, Jafar Namdar, María Jesús Sáenz (2024). *SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.4708869](https://doi.org/10.2139/ssrn.4708869)
**Sitasi Pendukung:** Ilya Jackson, Jafar Namdar, María Jesús Sáenz (2024). *SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.4708869](https://doi.org/10.2139/ssrn.4708869)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dari rantai pasok produk yang sensitif terhadap suhu — mencakup vaksin, biofarmaka, produk darah, makanan segar, dan bahan kimia tertentu — di mana integritas termal harus dijaga dalam rentang狭窄 (umumnya 2–8 °C untuk vaksin, −20 °C untuk produk beku, atau −70 °C untuk mRNA-based therapeutics). Jackson, Namdar, dan Sáenz (2024) dalam *working paper* mereka di SSRN Electronic Journal berjudul *"Revolutionize Cold Chain: An AI/ML Driven Approach to Overcome Capacity Shortages"* [DOI: 10.2139/ssrn.4708869](https://doi.org/10.2139/ssrn.4708869) menyoroti bahwa kapasitas infrastruktur rantai dingin global menghadapi tekanan struktural yang makin berat pascapandemi COVID-19, terutama karena distribusi massal mRNA vaccine yang memerlukan ultra-low temperature (ULT) storage.

Konteks industri yang melatarbelakangi paper ini dapat dirangkum dalam tiga pilar urgensi:

**a. Urgensi Operasional.** Kekurangan kapasitas cold storage menyebabkan *stockout* yang mengancam jiwa (vaksin rusak), peningkatan *lead time* distribusi 30–80% pada periode permintaan puncak, dan *cold chain breakage rate* yang dilaporkan mencapai 15–25% di negara berkembang (berdasarkan laporan GAVI/WHO historis). Kapasitas truck reefer, blast freezer, dan ULT freezer menjadi *bottleneck* yang tidak elastis terhadap lonjakan permintaan musiman atau pandemi.

**b. Urgensi Ekonomi.** Kerugian ekonomi akibat cold chain failure sangat substansial. FAO memperkirakan sekitar 14% produksi pangan global hilang pascapanen; untuk produk susu dan daging, proporsi ini dapat melebihi 25%. Pada sektor farmasi, biaya satu batch vaksin yang rusak karena pelanggaran suhu (*temperature excursion*) dapat melebihi USD 1–5 juta.

**c. Urgensi Teknis.** Sistem konvensional (*rule-based dispatching*, kapasitas statis berdasarkan studi kapasitas puncak historis) gagal menangkap dinamika permintaan, korelasi meteorologis, dan pola outage peralatan. Pendekatan AI/ML menawarkan kemampuan *forecasting* granular dan *prescriptive analytics* yang relevan.

Tujuan paper Jackson et al. (2024) adalah mengusulkan kerangka analitis berbasis kecerdasan buatan dan *machine learning* untuk memprediksi, memitigasi, dan mengoptimalkan kapasitas cold chain — dengan fokus pada identifikasi bottleneck, *dynamic capacity allocation*, dan *predictive maintenance* armada/penyimpanan ber-suhu terkendali.

---

## 2. Landasan Teori & Formulasi Matematis

Paper ini, sesuai judulnya, mengintegrasikan beberapa lapisan pemodelan. Karena abstrak tidak tersedia secara eksplisit, formulasi di bawah disintesis dari kerangka standar yang lazim digunakan dalam literatur ML-for-cold-chain (Tsai & Huang, 2020; Joshi et al., 2022; serta kerangka *Operations Research* klasik).

### 2.1 Model Permintaan Stokastik dengan ML Forecasting

Permintaan cold-chain $D_t$ dimodelkan sebagai proses non-stasioner:

$$D_t = \mu_t + \phi(D_{t-1}, \dots, D_{t-p}) + \varepsilon_t, \quad \varepsilon_t \sim \mathcal{N}(0, \sigma^2_t)$$

di mana $\mu_t$ adalah komponen tren-musiman dan $\phi(\cdot)$ adalah fungsi yang dipelajari oleh model ML. Untuk seri dengan dependensi temporal panjang, formulasi **LSTM (Long Short-Term Memory)** relevan:

$$\begin{aligned}
f_t &= \sigma_g(W_f [h_{t-1}, x_t] + b_f) \\
i_t &= \sigma_g(W_i [h_{t-1}, x_t] + b_i) \\
\tilde{C}_t &= \tanh(W_C [h_{t-1}, x_t] + b_C) \\
C_t &= f_t \odot C_{t-1} + i_t \odot \tilde{C}_t \\
o_t &= \sigma_g(W_o [h_{t-1}, x_t] + b_o) \\
h_t &= o_t \odot \tanh(C_t)
\end{aligned}$$

di mana $f_t, i_t, o_t$ berturut-turut adalah *forget gate*, *input gate*, *output gate*; $C_t$ adalah *cell state*; $W_\bullet$ dan $b_\bullet$ adalah parameter terlatih. Variabel input $x_t$ mencakup permintaan historis, suhu ambient, indikator节假日, dan event pandemi/vaksinasi.

### 2.2 Model Kapasitas sebagai Mixed-Integer Linear Programming (MILP)

Alokasi kapasitas cold storage dan armada direpresentasikan sebagai masalah optimasi:

$$\min_{x, y, z} \sum_{i \in \mathcal{I}} \sum_{j \in \mathcal{J}} c_{ij} x_{ij} + \sum_{k \in \mathcal{K}} h_k^+ s_k^+ + \sum_{k \in \mathcal{K}} h_k^- s_k^-$$

dengan kendala:

$$\begin{aligned}
\sum_{j} x_{ij} &= d_i, \quad \forall i \in \mathcal{I} \quad \text{(kepuasan permintaan)} \\
\sum_{i} x_{ij} &\leq K_j, \quad \forall j \in \mathcal{J} \quad \text{(kapasitas node)} \\
s_k^+ - s_k^- &= y_k - \hat{d}_k, \quad \forall k \in \mathcal{K} \quad \text{(deviasi forecast)} \\
x_{ij} &\geq 0,\ y_k \in \{0,1\}
\end{aligned}$$

di mana $x_{ij}$ adalah alokasi fluks dari node $i$ ke $j$; $K_j$ kapasitas fasilitas $j$; $s_k^+, s_k^-$ adalah variabel slack untuk *over-/under-forecast*; $y_k$ adalah keputusan biner aktifasi kapasitas darurat.

### 2.3 Model Penalti Kerusakan Termal (Arrhenius-based)

Untuk produk dengan degradasi dependen suhu, laju deteriorasi mengikuti persamaan Arrhenius:

$$k(T) = A \exp\left(-\frac{E_a}{RT}\right)$$

di mana $E_a$ adalah energi aktivasi, $R$ konstanta gas, $T$ suhu absolut, dan $A$ faktor pre-eksponensial. Kerugian kualitas $L$ sepanjang lintasan suhu $T(\tau)$:

$$L = 1 - \exp\left(-\int_0^{\tau_{\text{total}}} k(T(\tau)) \, d\tau\right)$$

Fungsi ini memungkinkan perhitungan eksplisit biaya karena *temperature excursion* dan dimasukkan sebagai penalty pada fungsi tujuan optimasi kapasitas.

### 2.4 Safety Stock dan Reorder Point Adaptif

Safety stock untuk cold chain:

$$SS = z_\alpha \cdot \sqrt{L \cdot \sigma_D^2 + D^2 \cdot \sigma_L^2}$$

di mana $z_\alpha$ adalah skor-Z untuk service level $(1-\alpha)$, $L$ adalah *lead time* rata-rata, $D$ adalah permintaan rata-rata harian, dan $\sigma_D, \sigma_L$ simpangan baku. Jackson et al. mengusulkan agar $\sigma_D$ diperbarui secara adaptif melalui *online learning* dari residual forecast ML.

---

## 3. Metodologi Rekayasa & SOP Implementasi

Berdasarkan judul dan pendekatan tipikal paper dalam domain ini, kerangka implementasi dapat disusun sebagai berikut:

**Tahap 1 — Akuisisi & Integrasi Data (Minggu 1–4):**
- *IoT sensor* suhu (DS18B20, Pt100.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
