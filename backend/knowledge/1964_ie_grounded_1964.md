# 1964 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dan Teknologi Pemantauan Mutakhir

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau freeze-drying merupakan unit operasi kritis dalam manufaktur farmasi modern yang digunakan untuk menstabilkan produk biologis, vaksin, antibodi monoklonal, dan formulasi protein termolabil. Proses ini menghilangkan air melalui sublimasi di bawah tekanan vakum, sehingga mempertahankan integritas struktural molekul aktif yang tidak dapat dicapai oleh metode pengeringan konvensional. Berdasarkan tinjauan Meza-Galvan, Strongrich, dan Darwish (2026) yang dipublikasikan sebagai Bab 4 dalam *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), kompleksitas intrinsik dari siklus liofilisasi—yang terdiri atas tiga tahap utama yaitu pembekuan (freezing), pengeringan primer (primary drying), dan pengeringan sekunder (secondary drying)—menuntut sistem pemantauan parameter proses yang akurat, real-time, dan non-invasif.

Dalam lanskap industri farmasi global yang semakin mengadopsi kerangka *Pharma 4.0*, penggunaan *Process Analytical Technology* (PAT) yang diinisiasi oleh FDA sejak 2004 telah menjadi pilar strategis untuk memastikan *Quality by Design* (QbD). Paper Meza-Galvan et al. (2026) menyoroti urgensi implementasi Wireless Sensor Networks (WSN) karena tiga alasan fundamental: (1) lingkungan steril ruang liofilisasi melarang penggunaan kabel tembaga yang sulit disanitasi dan menjadi titik akumulasi kontaminan; (2) kebutuhan akan *spatial resolution* tinggi untuk memetakan gradien suhu antar-vial dalam satu batch; dan (3) tuntutan regulatori untuk dokumentasi *continuous process verification* sesuai ICH Q8-Q12.

Secara ekonomis, satu siklus liofilisasi skala produksi dapat berlangsung 24–96 jam dengan nilai batch yang melebihi USD 500.000 untuk produk biologi bernilai tinggi. Kegagalan proses akibat deviasi suhu sublimasi hanya beberapa derajat Celsius dapat menghasilkan reject rate 5–15%, sehingga *monitoring* real-time menjadi *mission-critical*. Artikel Artusio, Barresi, dan Pisano (2026) sebagai Bab 11 dalam volume yang sama (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) mengontekstualisasikan WSN sebagai bagian dari ekosistem teknologi emergen yang mencakup *tunable diode laser absorption spectroscopy* (TDLAS), *Raman spectroscopy*, dan *mass spectrometry*—menempatkan sensor nirkabel sebagai elemen fundamental arsitektur PAT holistik. Kedua bab tersebut saling melengkapi dalam memberikan kerangka integratif antara instrumentasi lapangan dan analitik data berbasis kecerdasan buatan untuk pengendalian proses adaptif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi dan Transfer Massa pada Primary Drying

Persamaan dasar fluks sublimasi dalam lapisan produk beku mengikuti formulasi Pikal (1985) yang diadopsi oleh Meza-Galvan et al. (2026):

$$J_q = \frac{P_{ice}(T_p) - P_c}{R_p}$$

di mana $J_q$ adalah fluks sublimasi ($\text{kg}\cdot\text{m}^{-2}\cdot\text{hr}^{-1}$), $P_{ice}(T_p)$ adalah tekanan uap air pada permukaan es yang bergantung suhu produk $T_p$ (Pa), $P_c$ adalah tekanan ruang (chamber pressure, Pa), dan $R_p$ adalah tahanan produk terhadap transfer massa ($\text{Pa}\cdot\text{m}^2\cdot\text{s}\cdot\text{kg}^{-1}$). Tekanan uap es mengikuti persamaan Clausius-Clapeyron:

$$P_{ice}(T) = \exp\left(28.881 - \frac{6134.668}{T + 273.15}\right)$$

dengan $T$ dalam °C. Hubungan ini krusial karena kesalahan pengukuran $T_p$ sebesar 1°C dapat mengubah $P_{ice}$ sebesar ~15%, sehingga menghasilkan deviasi $J_q$ yang signifikan.

### 2.2 Neraca Energi pada Shelf dan Vial

Mekanisme transfer panas dari shelf ke vial dimodelkan oleh kombinasi konduksi, radiasi, dan konveksi gas:

$$q = K_v \cdot (T_s - T_p) + h_g \cdot (T_s - T_p)$$

atau dalam bentuk terintegrasi yang sering dikutip:

$$q = A_v \cdot (P_{w,s} - P_{w,p})$$

dengan $K_v$ adalah koefisien konduksi vial ($\text{J}\cdot\text{m}^{-2}\cdot\text{s}^{-1}\cdot\text{K}^{-1}$), $h_g$ koefisien konveksi gas, $A_v$ area sublimasi aktif, $P_{w,s}$ dan $P_{w,p}$ masing-masing tekanan parsial air pada permukaan shelf dan produk. Neraca energi pada antarmuka sublimasi memerlukan:

$$q = \Delta H_s(T_p) \cdot J_q$$

di mana $\Delta H_s$ adalah entalpi sublimasi es yang bernilai $\approx 2.838 \times 10^6 \text{ J/kg}$ pada $T_p = -30°C$.

### 2.3 Arsitektur Jaringan Sensor Nirkabel (WSN)

Sebuah *node* sensor nirkabel untuk liofilisasi tipikal terdiri atas empat subsistem: unit sensing (RTD atau termokopel mini), unit pemrosesan (mikrokontroler low-power seperti ARM Cortex-M0), unit komunikasi radio (IEEE 802.15.4 / ZigBee / BLE), dan unit daya (baterai Li-ion atau energy harvesting). Model konsumsi daya node mengikuti:

$$P_{node} = P_{sleep} \cdot (1 - D) + P_{active} \cdot D$$

dengan $D$ adalah duty cycle. Untuk protokol ZigBee dengan transmisi burst pada interval sampling 30 detik:

$$E_{tx} = V \cdot I_{tx} \cdot t_{packet}, \quad E_{rx} = V \cdot I_{rx} \cdot t_{packet}$$

Lifetime jaringan (network lifetime) dengan $N$ node dan kapasitas baterai $C_b$ (mAh) dapat dihitung:

$$T_{network} = \frac{N \cdot C_b \cdot V}{\sum_{i=1}^{N} P_{node,i}}$$

### 2.4 Throughput dan Latensi Komunikasi

Laju data agregat jaringan WSN untuk aplikasi liofilisasi:

$$R_{agg} = \sum_{i=1}^{N} f_{s,i} \cdot b_{i}$$

dengan $f_s$ adalah frekuensi sampling (Hz) dan $b$ adalah ukuran payload per transmisi (bytes). Latensi end-to-end untuk topologi star:

$$t_{lat} = t_{proc} + t_{queue} + t_{tx} + t_{prop} + t_{MAC}$$

yang harus dijaga di bawah 1 detik untuk memenuhi persyaratan *real-time* pada primary drying yang memiliki konstanta waktu termal vial $\tau \approx 60-180$ detik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi WSN dalam Liofilizer

Meza-Galvan et al. (2026) mengusulkan arsitektur tiga lapis (*three-tier architecture*):

**Tier 1 — Sensing Layer:** Penempatan node sensor pada posisi strategis dalam rak (manifold) vial. Strategi placement mengikuti desain *Design of Experiments* (DoE) dengan edge-center-corner configuration untuk menangkap gradien termal radial pada shelf. Jumlah node tipikal: 16–64 node per shelf tergantung kapasitas liofilizer.

**Tier 2 — Communication Layer:** Gateway coordinator berbasis protokol IEEE 802.15.4 dengan topologi mesh untuk redundansi. Gateway terletak di luar chamber melalui feedthrough hermetik (*wireless vacuum feedthrough*) atau menggunakan antena in-vacuum khusus.

**Tier 3 — Analytics Layer:** Server SCADA/OPC-UA yang menerima data melalui MQTT atau HTTP REST API, kemudian memproses menggunakan model *machine learning* (misalnya LSTM untuk prediksi akhir primary drying).

### 3.2 SOP Implementasi Sistematis

1. **Pra-deployment:** Kalibrasi node sensor terhadap traceable reference (NIST atau PTB) dengan rentang -$50°C$ hingga $+50°C$, akurasi target $\pm 0.3°C$.
2. **Validasi Kualifikasi Instalasi (IQ):** Pemetaan sinyal RF dalam ruang vakum untuk memastikan *received signal strength indicator* (RSSI) > -85 dBm di seluruh shelf.
3. **Validasi Kualifikasi Operasional (OQ):** Uji *challenge test* dengan simulasi deviasi suhu ±5°C; verifikasi latensi end-to-end < 1 detik.
4. **Validasi Kualifikasi Performa (PQ):** Eksekusi 3 batch placebo dengan monitoring PAT paralel (termokopel wired) sebagai pembanding; *correlation coefficient* $R^2 > 0.98$ antara WSN dan sistem referensi.
5. **Pemeliharaan Preventif:** Kalibrasi ulang setiap 6 bulan, penggantian baterai setiap 12 bulan atau 500 siklus charge.

### 3.3 Integrasi dengan PAT dan Control Strategy

Berdasarkan tinjauan Artusio, Barresi, dan Pisano (2026), WSN berperan sebagai *enabler* untuk *Multivariate Statistical Process Control* (MSPC) dan *Real-Time Release Testing* (RTRT). Data suhu dari node WSN dimasukkan ke dalam *soft-sensor* yang menghitung $R_p$ dan $K_v$ secara online, memungkinkan *feedback control* terhadap $T_s$ (shelf temperature) dan $P_c$ untuk mempertahankan $T_p$ pada setpoint optimal.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Sebuah liofilizer produksi memiliki spesifikasi:
- Kapasitas: 6 shelf, masing-masing 500 vial 10 mL
- Total vial: 3.000 unit
- Formulasi: sucrose-based, $R_p$ awal = $1.2 \times 10^5 \text{ Pa}\cdot\text{m}^2\cdot\text{s}\cdot\text{kg}^{-1}$
- Setpoint $T_p = -30°C$, $P_c = 10$ Pa

### 4.2 Perhitungan Fluks Sublimasi

**Langkah 1:** Hitung $P_{ice}$ pada $T_p = -30°C$ (243.15 K):
$$P_{ice} = \exp\left(28.881 - \frac{6134.668}{243.15}\right) = \exp(28.881 - 25.231) = \exp(3.650) \approx 38.5 \text{ Pa}$$

**Langkah 2:** Hitung driving force:
$$\Delta P = P_{ice} - P_c = 38.5 - 10 = 28.5 \text{ Pa}$$

**Langkah 3:** Hitung fluks sublimasi:
$$J_q = \frac{28.5}{1.2 \times 10^5} = 2.375 \times 10^{-4} \text{ Pa}\cdot\text{m}^2\cdot\text{s}\cdot\text{kg}^{-1} / \text{Pa}\cdot\text{m}^2\cdot\text{s}\cdot\text{kg}^{-1}$$

Konversi satuan: $J_q \approx 0.855 \text{