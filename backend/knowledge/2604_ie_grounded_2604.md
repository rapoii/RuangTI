# 2604 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi PAT dan Rekayasa Sistem Pemantauan Cerdas pada Proses Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (Bab 4). DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (Bab 11). DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi modern yang digunakan untuk menstabilkan produk biologis termolabil seperti vaksin mRNA, antibodi monoklonal, probiotik, dan antibiotik β-laktam. Lebih dari 50 % sediaan biologis yang disetujui FDA dalam dekade terakhir memerlukan proses liofilisasi untuk mempertahankan aktivitas farmakologis selama distribusi rantai dingin (*cold chain*) (Meza-Galvan, Strongrich, & Darwish, 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)). Secara global, pasar peralatan freeze-drying farmasi tercatat menembus lebih dari USD 8,4 miliar pada 2024 dengan proyeksi CAGR 6,8 %, didorong oleh lonjakan manufaktur vaksin, terapi gen, dan formulasi *biologics* berbiaya tinggi (Artusio, Barresi, & Pisano, 2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Dalam konteks *Inisiatif Process Analytical Technology* (PAT) FDA (2004), kualitas tidak boleh diuji ke dalam produk (*quality by testing*), melainkan harus dirancang dan dipantau secara *real-time* sepanjang proses. Liofilisasi konvensional sangat bergantung pada termokopel berkabel (*wired thermocouples*) yang dipasang hanya pada satu atau beberapa vial representatif. Keterbatasan ini menciptakan tiga masalah operasional serius: (i) resolusi spasial rendah yang gagal mendeteksi gradien suhu antar-vial (*edge effect* dan *center effect*), (ii) introduksi *feedthrough* logam pada dinding ruang vakum yang meningkatkan risiko kebocoran dan kontaminasi, serta (iii) tidak fleksibelnya penempatan sensor untuk *design space exploration* (Meza-Galvan dkk., 2026).

Jaringan Sensor Nirkabel (*Wireless Sensor Networks* — WSN) muncul sebagai enabler strategis. WSN memungkinkan penempatan puluhan hingga ratusan *mote* sensor otonom di dalam *chamber* vakum, mengukur suhu produk, tekanan, dan bahkan spektroskopi NIR/Raman secara terdistribusi. Data dikumpulkan secara *time-synchronized* dan dikirim *gateway* melalui dinding dengan *RF-transparent window* atau *inductive coupling*. Implementasi WSN telah dilaporkan menurunkan *batch failure rate* hingga 30–45 % pada lini produksi *biologics* dan memperpendek *cycle time* optimalisasi sebesar 40–60 % melalui *dynamic parameters control* (Artusio dkk., 2026). Dari perspektif *lean manufacturing*, investasi WSN (CAPEX USD 50–150 ribu per liofilizer) umumnya Break-Even dalam 6–12 siklus produksi bernilai jutaan dolar.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas Vial
Panas memasuki vial dari *shelf* melalui tiga mekanisme: konduksi gas (~$K_c$), konduksi padat pada kontak dasar (~$K_s$), dan radiasi (~$K_r$). Koefisien perpindahan panas vial total didefinisikan:

$$K_v = K_c + K_s + K_r \quad \left[\frac{\text{W}}{\text{m}^2 \cdot \text{K}}\right]$$

Komponen gas biasanya linier terhadap tekanan ruang:

$$K_c = K_c^0 + \beta_c \cdot P_c$$

dengan $K_c^0$ ≈ 0,025 W/m²K (konduksi residual pada vakum tinggi), $\beta_c \approx 0{,}19$ W/m²K·mbar pada konfigurasi khas *stoppered vial*, dan $P_c$ tekanan ruang (mbar). Fluks panas ke vial:

$$q_v = A_v \cdot K_v \cdot (T_s - T_b) \quad [\text{W}]$$

dengan $A_v$ luas penampang vial, $T_s$ suhu *shelf*, $T_b$ suhu dasar vial.

### 2.2 Neraca Massa Sub