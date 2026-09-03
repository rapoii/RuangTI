# 1500 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology, Pemantauan Suhu–Tekanan Real-Time, dan Optimalisasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan salah satu proses manufaktur farmasi paling kritis dalam produksi sediaan biologis, vaksin, antibodi monoklonal, dan API (Active Pharmaceutical Ingredients) yang tidak stabil dalam bentuk larutan cair. Proses ini menghilangkan air melalui sublimasi (pengeringan primer) dan desorpsi (pengeringan sekunder) untuk menghasilkan produk kering dengan aktivitas air (*water activity*, $a_w$) kurang dari 0,3, sehingga menjamin stabilitas jangka panjang tanpa cold-chain distribution. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026, [DOI:10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), kualitas produk akhir liofilisasi sangat ditentukan oleh profil termodinamika vial selama siklus berlangsung, khususnya gradien suhu antara rak (*shelf*) dan antarmuka es (*ice interface*), serta tekanan ruang (*chamber pressure*). Deviasi sekecil 1–2 K dari setpoint kritis sudah cukup untuk memicu *collapse* (keruntuhan struktur cake) atau *meltback*, yang menurunkan reconstitution time dan bioaktivitas produk.

Dalam industri farmasi modern, kendala operasional terbesar adalah bagaimana memantau *end-point* sublimasi secara akurat tanpa menghambat throughput lini produksi. Termokopel berkabel (*wired thermocouple*) konvensional memiliki keterbatasan inheren: jumlah probe terbatas (umumnya hanya 5–16 channel per batch), memerlukan sterilisasi berulang yang menurunkan MTBF (*Mean Time Between Failure*), memerlukan port khusus pada dinding chamber yang menciptakan risiko *cross-contamination*, serta menjadi bottleneck saat rotasi produk antar-format vial. Meza-Galvan dkk. (2026) mengusulkan *Wireless Sensor Networks* (WSN) sebagai paradigma baru yang memungkinkan pemasangan ratusan node sensor pada seluruh rak liofilizer, memberikan visibilitas *batch-level* yang sebelumnya tidak ekonomis. Pendekatan ini sejajar dengan kerangka **Process Analytical Technology (PAT)** yang diterbitkan FDA sejak 2004 dan diperkuat oleh Pedoman ICH Q8(R2), Q9, dan Q10, di mana "quality cannot be tested into products; it should be built in by design" (Meza-Galvan dkk., 2026, ch.4).

Urgensi ekonominya signifikan: lini liofilisasi kelas industri memiliki kapasitas 30.000–100.000 vial per batch dengan nilai produk mencapai USD 5–50 per vial pada sediaan biologis high-value. Setiap jam downtime siklus lost batch menimbulkan kerugian ratusan ribu dolar AS, terutama ketika investigasi OOS (*Out-of-Specification*) memerlukan 30–60 hari. Dengan WSN, kemampuan *multivariate monitoring* terhadap parameter Cp (product temperature) dan Pc (chamber pressure) secara real-time memungkinkan *feedforward control* yang mempersingkat primary drying 10–25%, sebagaimana ditunjukkan oleh Artusio, Barresi, dan Pisano (2026, [DOI:10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) dalam kompilasi emerging technologies. Konteks ini menjadikan integrasi WSN bukan sekadar upgrade instrumentasi, melainkan re-engineering lini farmasi secara menyeluruh yang memerlukan orkestrasi lintas disiplin: instrumentasi, *data science*, *regulatory compliance*, dan teknik industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Primary Drying

Mekanisme sublimasi dikendalikan oleh keseimbangan antara fluks panas dari rak ke vial dan resistansi massa dari *dried cake*. Pada kondisi quasi-steady state, laju sublimasi per vial mengikuti model Pikal yang sudah terstandardisasi:

$$\frac{dm}{dt} = \frac{A_v \, (P_{w,i}(T_b) - P_c)}{R_p} \tag{1}$$

dengan:
- $A_v$ = luas penampang internal vial (m²)
- $P_{w,i}(T_b)$ = tekanan uap air pada antarmuka es sebagai fungsi suhu produk $T_b$ (Pa)
- $P_c$ = tekanan ruang chamber (Pa)
- $R_p$ = resistansi terhadap aliran uap melalui *dried cake* (m·s·kg⁻¹)

Persamaan panas yang mengkonversi fluks sublimasi menjadi kebutuhan energi rak:

$$Q = A_v \, K_v \, (T_s - T_b) = \Delta H_s \, \frac{dm}{dt} \tag{2}$$

dengan $K_v$ = koefisien perpindahan panas efektif vial (W·m⁻²·K⁻¹), $T_s$ = suhu rak (K), dan $\Delta H_s$ ≈ 2.838 kJ·kg⁻¹ untuk sublimasi es pada kondisi tipikal.

### 2.2 Resistansi Dried Cake dan Model Geometric

Resistansi $R_p$ meningkat secara nonlinear terhadap tebal lapisan kering. Model yang digunakan oleh Meza-Galvan dkk. (2026) mengikuti formulasi garis lurus semi-empiris:

$$R_p = R_{p,0} + \alpha \cdot L(t) \tag{3}$$

dengan $L(t)$ adalah ketebalan cake kering yang tumbuh seiring waktu. Secara geometris, jika fraksi solid produk $x_s$ diketahui:

$$L(t) = \frac{m_{\text{total}} - m_{\text{sublimated}}(t)}{x_s \cdot \rho_{\text{ice}} \cdot A_v} \tag{4}$$

Kombinasi Persamaan (1)–(4) menghasilkan persamaan diferensial yang diselesaikan secara numerik untuk memprediksi $T_b(t)$, yang menjadi variabel kontrol utama dalam algoritma PAT.

### 2.3 Model Energi Jaringan Sensor Nirkabel

Pada setiap node WSN, konsumsi energi mengikuti profil operasional radio transceiver:

$$E_{\text{total}} = \sum_{i=1}^{N_{\text{cycle}}} \left( P_{\text{tx}} \, t_{\text{tx}} + P_{\text{rx}} \, t_{\text{rx}} + P_{\text{idle}} \, t_{\text{idle}} + P_{\text{sleep}} \, t_{\text{sleep}} \right) \tag{5}$$

Lifetime baterai dalam kondisi duty-cycled transmission mengikuti:

$$T_{\text{life}} = \frac{E_{\text{battery}}}{N_{\text{tot}} \cdot \bar{P}} \tag{6}$$

dengan $\bar{P}$ adalah rata-rata daya node selama satu siklus transmisi.

### 2.4 Signal Attenuation dan Kualitas Data

Lingkungan ruang vakum liofilizer menghadirkan tantangan propagasi RF (radio frequency) berupa atenuasi multi-path dari dinding stainless steel. Model log-distance path loss:

$$PL(d) = PL(d_0) + 10n \log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma \tag{7}$$

dengan $n$ = path loss exponent (2–4 untuk lingkungan industri), dan $X_\sigma$ = shadowing Gaussian. SNR yang diterima:

$$\text{SNR} = P_{\text{tx}} - PL(d) - N_0 - 10\log_{10} B \tag{8}$$

dengan $N_0$ = noise spectral density dan $B$ = bandwidth. Untuk memenuhi BER ≤ 10⁻⁵ pada protokol ZigBee/LoRa di dalam chamber, diperlukan SNR ≥ 12 dB.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Meza-Galvan dkk. (2026) serta Artusio dkk. (2026) menyusun kerangka implementasi bertahap yang disebut *Closed-Loop PAT Implementation Framework*. Tahapan utamanya:

**Tahap 1 — Site Survey & RF Characterization.** Pemetaan profil propagasi RF di dalam chamber kosong dan