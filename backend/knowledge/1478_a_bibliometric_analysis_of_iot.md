# 1478 — Analisis Bibliometrik dan Pemodelan Game Theory pada Aplikasi IoT, Blockchain, dan Teknologi Industri 4.0 dalam Manajemen Rantai Pasok serta Rantai Dingin Logistik Produk Pertanian Segar

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A bibliometric analysis of IoT applications in logistics and supply chain management
**Jurnal & Sitasi Utama:** Imen Zrelli, Abderahman Rejeb (2024). *Heliyon*. DOI: [https://doi.org/10.1016/j.heliyon.2024.e36578](https://doi.org/10.1016/j.heliyon.2024.e36578)
**Sitasi Pendukung:** Yanhu Bai, Hansheng Wu, Minmin Huang (2023). *PLoS ONE*. DOI: [https://doi.org/10.1371/journal.pone.0294520](https://doi.org/10.1371/journal.pone.0294520)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada sektor logistik dan manajemen rantai pasok (Supply Chain Management/SCM) memasuki fase akselerasi yang ditandai dengan adopsi masif Internet of Things (IoT), Radio Frequency Identification (RFID), Industrial Internet of Things (IIoT), Artificial Intelligence (AI), dan Blockchain. Zrelli & Rejeb (2024) melalui *Heliyon* dengan DOI [10.1016/j.heliyon.2024.e36578](https://doi.org/10.1016/j.heliyon.2024.e36578) melakukan analisis bibliometrik terhadap 2.680 publikasi terindeks Scopus (periode 2010–2023) yang mengungkap pergeseran paradigma dari eksplorasi fondasional menuju implementasi matang. Studi ini menegaskan empat pilar tematik utama: (i) integrasi RFID dalam traceability, (ii) konvergensi Industry 4.0 dengan SCM melalui AI-IIoT, (iii) blockchain sebagai enabler traceability dan keamanan, dan (iv) protokol komunikasi serta enkripsi untuk pertukaran data yang aman.

Urgensi industri diperkuat oleh Bai, Wu, & Huang (2023) dalam *PLoS ONE* dengan DOI [10.1371/journal.pone.0294520](https://doi.org/10.1371/journal.pone.0294520) yang menyoroti tingkat kehilangan (*spoilage rate*) produk pertanian segar di China yang mencapai 20–30% sepanjang rantai dingin (*cold chain*) konvensional, menimbulkan ancaman langsung terhadap ketahanan pangan. Nilai pasar global cold chain logistics diproyeksikan tumbuh pada Compound Annual Growth Rate (CAGR) sebesar 12,5% dengan total valuasi melampaui USD 450 miliar pada 2028. Tanpa adopsi teknologi *immutable ledger* (blockchain) dan sensor IoT, kerugian ekonomi tahunan akibat *post-harvest loss* di negara berkembang berpotensi melampaui USD 310 miliar (FAO, 2023). Konteks ini menegaskan perlunya kerangka analitis kuantitatif yang mampu memodelkan perilaku strategis pelaku rantai pasok dan justifikasi investasi teknologi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Bibliometrik Pertumbuhan Publikasi

Pertumbuhan literatur IoT-SCM dimodelkan menggunakan persamaan eksponensial Bradford-like yang diadaptasi dari hukum Lotka:

$$P(t) = P_0 \cdot e^{r(t - t_0)}$$

di mana $P(t)$ adalah jumlah kumulatif publikasi pada tahun $t$, $P_0$ adalah publikasi awal, dan $r$ adalah laju pertumbuhan intrinsik. Dari data Zrelli & Rejeb (2024), rataan $r \approx 0{,}287$ per tahun sehingga CAGR dapat dihitung sebagai:

$$\text{CAGR} = e^{r} - 1 = e^{0{,}287} - 1 \approx 0{,}3323 \text{ atau } 33{,}23\%$$

Hukum Lotka untuk distribusi produktivitas penulis:

$$f(x) = \frac{C}{x^{\alpha}}$$

dengan $f(x)$ adalah fraksi penulis yang memproduksi $x$ publikasi, $C$ konstanta normalisasi, dan eksponen $\alpha \approx 2$ untuk disiplin teknik. Indeks h (Hirsch index) didefinisikan sebagai nilai terbesar $h$ sedemikian rupa sehingga penulis memiliki minimal $h$ publikasi yang masing-masing dikutip minimal $h$ kali.

### 2.2 Replicator Dynamics untuk Evolutionary Game Tripartite

Model Bai, Wu, & Huang (2023) menggunakan *prospect theory* untuk menangkap asimetri persepsi risiko (*loss aversion*) yang diformulasikan sebagai fungsi nilai:

$$v(\Delta x) = \begin{cases} (\Delta x)^{\alpha}, & \Delta x \geq 0 \\ -\lambda(-\Delta x)^{\beta}, & \Delta x < 0 \end{cases}$$

dengan parameter tipikal $\alpha = \beta = 0{,}88$ dan koefisien *loss aversion* $\lambda = 2{,}25$ (Tversky & Kahneman, 1992). Bobot keputusan $\pi(p)$ terhadap probabilitas objektif $p$ dimodelkan sebagai:

$$\pi(p) = \frac{p^{\gamma}}{(p^{\gamma} + (1-p)^{\gamma})^{1/\gamma}}$$

dengan $\gamma = 0{,}61$.

Dinamika replikasi strategi untuk tiga populasi pemain $\{x, y, z\}$ (operator *n-level*, konsumen, pemerintah) mengikuti:

$$\dot{x}_i = x_i \left[ u_i(\mathbf{s}) - \bar{u}(\mathbf{s}) \right], \quad i = 1, 2, 3$$

di mana $u_i(\mathbf{s})$ adalah *fitness* (ekspektasi payoff) strategi $i$ dan $\bar{u}(\mathbf{s})$ adalah rataan fitness populasi. Titik kesetimbangan Nash evolucioner (ESS) tercapai ketika $\dot{x}_i = 0$ untuk seluruh $i$.

### 2.3 Model Cost-Benefit IoT-Blockchain pada Cold Chain

Total biaya sistem per siklus pengiriman:

$$\text{TC} = C_{\text{fixed}} + C_{\text{var}} \cdot Q + C_{\text{spoilage}} + C_{\text{IoT}} + C_{\text{BC}}$$

dengan $Q$ adalah volume pengiriman, $C_{\text{spoilage}} = p \cdot v \cdot Q$ di mana $p$ adalah proporsi kerugian dan $v$ nilai satuan produk. Penurunan $p$ akibat adopsi teknologi mengikuti:

$$p_{\text{new}} = p_{\text{old}} \cdot (1 - \eta_{\text{IoT}}) \cdot (1 - \eta_{\text{BC}})$$

dengan efikasi teknologi IoT ($\eta_{\text{IoT}}$) dan blockchain ($\eta_{\text{BC}}$).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur implementasi mengikuti protokol ISO/IEC 30141 (Internet of Things Reference Architecture) dan ISO 22005 untuk traceability pangan, dengan tahapan SOP sebagai berikut:

**Tahap 1 — Pemetaan Rantai Nilai (Value Stream Mapping):** Identifikasi *n-level* pelaku (produsen, distributor, ritel, konsumen) menggunakan diagram RACI dan *Bill of Materials Information* (BOM-I).

**Tahap 2 — Instrumentasi Sensor IoT:** Deployment sensor suhu-kelembaban (akurasi $\pm 0{,}3^{\circ}$C), GPS tracker, dan smart-RFID tag pada kontainer cold chain. Frekuensi sampling $f_s = 1$ Hz dengan payload 256-bit terenkripsi AES-256.

**Tahap 3 — Integrasi Blockchain:** Setiap *event* IoT (pembacaan sensor, perpindahan kustodi) di-hash menggunakan SHA-256 dan dicatat pada *permissioned blockchain* (Hyperledger Fabric) dengan konsensus PBFT (*Practical Byzantine Fault Tolerance*). Ukuran blok $b = 4$ MB, interval konsensus $\tau_{\text{block}} = 2$ detik.

**Tahap 4 — Smart Contract untuk Insentif:** Kontrak pintar (*smart contract*) mendistribusikan *reward token* $\rho$ kepada operator yang mempertahankan suhu dalam rentang $[T_{\min}, T_{\max}]$ dan penalty $\pi$ untuk pelanggaran (*Service Level Agreement*).

**Tahap 5 — Dashboard Analitik AI:** Layer analitik menggunakan Long Short-Term Memory (LSTM) untuk prediksi *spoilage risk* dengan *Mean Absolute Percentage Error* (MAPE):

$$\text{MAPE} = \frac{100\%}{N} \sum_{t=1}^{N} \left| \frac{A_t - F_t}{A_t} \right|$$

dengan target MAPE $< 5\%$ untuk prediksi 24-jam ke depan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Distribusi produk stroberi (*Fragaria × ananassa*) dari petani di Kabupaten Wonosobo ke ritel modern di Jakarta menggunakan kontainer *reefer* berkapasitas $Q = 5.000$ kg, nilai $v = \text{Rp }85.000$/kg, suhu target $T = 2^{\circ}\text{C}$.

### 4.1 Baseline (Tanpa IoT-Blockchain)

Parameter industri:
- $p_{\text{old}} = 0{,}25$ (kerugian 25% berdasarkan literatur Bai et al., 2023)
- $C_{\text{fixed}} = \text{Rp }8.000.000$ (biaya armada, SDM, sewa kontainer)
- $C_{\text{var}} = \text{Rp }4.500$/kg (handling, solar, es kering)
- $C_{\text{IoT}} = 0$, $C_{\text{BC}} = 0$ (skenario baseline)

Kalkulasi:

$$\text{TC}_{\text{base}} = 8.000.000 + 4.500 \cdot 5.000 + 0{,}25 \cdot 85.000 \cdot 5.000$$
$$= 8.000.000 + 22.500.000 + 106.250.000 = \text{Rp }136.750.000$$

Kerugian produk: $0{,}25 \times 5.000 \times 85.000 = \text{Rp }106.250.000$.

### 4.2 Skenario Implementasi IoT + Blockchain

Asumsi efikasi gabungan $\eta_{\text{IoT}} = 0{,}35$ (monitoring real-time) dan $\eta_{\text{BC}} = 0{,}25$ (traceability dan *enforcement* kualitas), sehingga:

$$p_{\text{new}} = 0{,}25 \cdot (1 - 0{,}35) \cdot (1 - 0{,}25) = 0{,}25 \cdot 0{,}65 \cdot 0{,}75 = 0{,}1219$$

Penurunan kerugian absolut: $\Delta p = 0{,}25 - 0{,}1219 = 0{,}1281$ (penghematan 12,81% dari total volume).

Biaya investasi teknologi per siklus:
- Sensor IoT (amortisasi 5 tahun, 250 siklus/tahun): $\text{Rp }1.200.000$/siklus
- Subscription blockchain (Hyperledger cloud): $\text{Rp }850.000$/siklus
- SDM teknisi: $\text{Rp }1.500.000$/siklus
- Total $C_{\text{tech}} = \text{Rp }3.550.000$/siklus

Kalkulasi biaya baru:

$$\text{TC}_{\text{new}} = 8.000.000 + 22.500.000 + 3.550.000 + 0{,}1219 \cdot 85.000 \cdot 5.000$$
$$= 34.050.000 + 51.807.500 = \text{Rp }85.857.500$$

### 4.3 Analisis Payback Period dan NPV

Penghematan bruto per siklus:

$$S = \text{TC}_{\text{base}} - \text{TC}_{\text{new}} = 136.750.000 - 85.857.500 = \text{Rp }50.892.500$$

Net Present Value dengan *discount rate* $i = 10\%$ per tahun, 250 siklus/tahun, umur investasi $n = 5$ tahun:

$$\text{NPV} = \sum_{t=1}^{5} \frac{S_t \cdot 250}{(1 + 0{,}10)^t} - C_{\text{initial}}$$

dengan asumsi $C_{\text{initial}} = \text{Rp }850.000.000$ (capex sensor + gateway + integrasi).

$$\text{NPV
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
