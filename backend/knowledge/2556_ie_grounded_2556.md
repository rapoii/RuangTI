# 2556 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur PAT, Pemodelan Termodinamika, dan Optimalisasi Siklus Freeze‑Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Pharmaceutical Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‑Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‑Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‑Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze‑drying) merupakan unit operasi kritis dalam industri biofarmasi yang mengubah larutan terapeutik menjadi padatan kering berpori melalui sublimasi pelarut beku di bawah tekanan vakum. Proses ini menghasilkan produk dengan stabilitas termal superior sehingga memungkinkan penyimpanan tanpa cold‑chain, yang sangat relevan untuk vaksin mRNA, antibodi monoklonal, dan produk Advanced Therapy Medicinal Product (ATMP) generasi baru. Menurut Meza‑Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4), kebutuhan akan *Process Analytical Technology* (PAT) yang *real‑time*, non‑destruktif, dan terdistribusi secara spasial di dalam ruang pengeringan menjadi semakin mendesak karena kompleksitas formulasi modern dan tekanan regulasi dari FDA (21 CFR Part 11) serta ICH Q8(R2).

Urgensi operasionalnya bersifat multi‑dimensi. Pertama, secara ekonomis, satu siklus liofilisasi skala produksi dapat bernilai USD 200.000–500.000 per batch dengan kapasitas vial 10.000–50.000 unit; kehilangan satu batch akibat *collapse* atau *meltback* saja dapat menimbulkan kerugian signifikan. Kedua, secara teknis, gradient suhu antar‑vial pada rak (*shelf*) yang besar dapat mencapai 2–5 °C, yang cukup untuk menurunkan keseragaman kadar air residual dari target 1–3 % (b/b). Ketiga, secara manajerial, era Industry 4.0 menuntut integrasi data sensor ke dalam *Manufacturing Execution System* (MES) dan *digital twin* guna mendukung *batch release* berbasis data kontinyu (Aris et al., 2022 dalam tinjauan yang dirujuk Meza‑Galvan et al., 2026).

Pengukuran konvensional menggunakan *thermocouple* (tipe T atau K) dan *pirani gauge* memiliki keterbatasan inheren: sensor bersifat *wired*, membutuhkan *feed‑through* yang menambah beban vakum, dan memberikan informasi 1‑Dimensi (hanya pada posisi probe). Jaringan Sensor Nirkabel (*Wireless Sensor Networks*, WSN) muncul sebagai solusi arsitektural karena memungkinkan penempatan banyak node (≥16–64 per rak) dengan akuisisi data multi‑titik, *throughput* tinggi, dan integrasi nirkabel berbasis protokol seperti IEEE 802.15.4 (ZigBee/6LoWPAN) atau LoRaWAN. Chapter 11 oleh Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) menekankan bahwa *emerging technologies* dalam liofilisasi kini mengarah pada konvergensi WSN, *soft sensors* berbasis *machine learning*, dan spektroskopi *in‑line* (Raman, NIR) untuk menutup loop kontrol kualitas secara holistik. Kedua bab ini saling melengkapi: chapter 4 menyediakan landasan arsitektur WSN untuk monitoring, sementara chapter 11 memposisikan WSN di dalam ekosistem PAT yang lebih luas termasuk *model‑predictive control* (MPC) dan *digital twin*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Mekanisme Perpindahan Panas dan Massa pada Liofilisasi Primer

Selama *primary drying*, sublimasi terjadi pada antarmuka es‑produk (*sublimation front*). Neraca energi pada vial menghasilkan persamaan *quasi‑steady state* yang banyak diadopsi dari model Pikal (1985) dan dirujuk oleh Meza‑Galvan et al. (2026):

$$\boxed{\,q_d = q_s + q_r\,}$$

dengan $q_d$ adalah fluks kalor yang dihantarkan dari rak ke vial melalui konduksi (gas + konduksi kontak vial), $q_s$ adalah fluks kalor laten sublimasi, dan $q_r$ adalah radiasi dari dinding ruang. Fluks sublimasi sendiri diekspresikan sebagai:

$$q_s = \Delta H_s \cdot \dot{m}_{s} = \Delta H_s \cdot \frac{A_p}{V}\,\frac{1}{R_p}\,\left(P_{w,i} - P_{w,c}\right)$$

di mana $\Delta H_s$ adalah entalpi sublimasi es ($\approx 2.838\,\text{MJ/kg}$ pada $-40\,^\circ\text{C}$), $\dot{m}_s$ laju sublimasi, $A_p/V$ rasio area terhadap volume produk, $R_p$ resistansi perpindahan massa dari *dried layer* (yang tumbuh terhadap waktu $t$), dan $(P_{w,i} - P_{w,c})$ beda tekanan uap air pada antarmuka sublimasi dan di ruang vakum.

### 2.2. Resistansi Dinamis dan Resistansi Pratof (*Product Resistance*)

Resistansi produk $R_p$ meningkat seiring waktu karena lapisan kering menebal. Model sederhana yang dikutip dalam bab 4 adalah:

$$R_p(t) = R_{p,0} + a \cdot L_d(t)$$

dengan $L_d(t)$ adalah ketebalan lapisan kering yang dapat dihitung dari:

$$L_d(t) = L_0 \left[1 - \left(\frac{m(t)}{m_0}\right)^{1/3}\right]$$

di mana $L_0$ ketebalan awal dan $m(t)/m_0$ fraksi massa es tersisa. Pada vial 5 mL dengan luas penampang $A_v = 4{,}15\,\text{cm}^2$ dan fill depth $h_0 = 1{,}1\,\text{cm}$, tebal lapisan kering tipikal mencapai 0,5–0,8 cm di akhir *primary drying*.

### 2.3. Energi Aktivasi Degradasi (Arrhenius)

Untuk menjamin mutu hayati, suhu produk $T_p$ harus dijaga di bawah $T_{collapse}$ atau $T_{glass\,transition\,c}$ formulasi. Kinetika degradasi遵循 hukum Arrhenius:

$$k_{deg} = A\,\exp\!\left(-\frac{E_a}{R\,T_p}\right)$$

dengan $E_a$ energi aktivasi umum 80–120 kJ/mol untuk protein. Pada kenaikan $T_p$ sebesar 2 °C di atas batas desain, fraksi degradasi meningkat:

$$\frac{k_2}{k_1} = \exp\!\left[-\frac{E_a}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)\right]$$

### 2.4. Model Kanal Nirkabel dan Link Budget WSN

Untuk arsitektur WSN yang beroperasi di dalam ruang vakum, redaman propagasi mengikuti model *log‑distance path loss*:

$$PL(d) = PL(d_0) + 10\,n\,\log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $n$ eksponen redaman (tipikal 1,8–2,5 di dalam ruang vakum metalik), $X_\sigma\sim\mathcal{N}(0,\sigma^2)$ adalah *shadowing*. SNR pada penerima:

$$\text{SNR} = P_{tx} + G_{tx} - PL(d) + G_{rx} - N_{thermal}$$

dengan $N_{thermal}=-174 + 10\log_{10}(BW)$ dBm. Kualitas tautan menjadi penting karena siklus liofilisasi dapat berlangsung 36–96 jam tanpa gangguan transmisi.

### 2.5. Throughput Agregat dan Skalabilitas

Untuk jaringan star‑topology dengan $N$ node sensor yang mengirim paket sepanjang $L_{pkt}$ setiap interval sampling $\Delta t$:

$$\text{Throughput}_{agregat} = \frac{N \cdot L_{pkt}}{\Delta t}$$

Keterbatasan bandwidth IEEE 802.15.4 (250 kbps) menuntut *duty‑cycling* node. Parameter *quality of service* jaringan didefinisikan sebagai *packet delivery ratio* (PDR):

$$\text{PDR} = \frac{\text{Paket diterima}}{\text{Paket dikirim}}\times 100\%$$

Target PDR ≥ 99,5 % direkomendasikan Meza‑Galvan et al. (2026) untuk kebutuhan *batch release* yang *data‑driven*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur WSN untuk Ruang Liofilisasi

Sistem yang dirancang mengikuti arsitektur tiga lapis sesuai paparan Meza‑Galvan et al. (2026):

1. **Lapisan Sensor (Tier 1):** Node miniatur berisi MCU (mis. CC2652 dari Texas Instruments), sensor suhu digital (presisi ±0,1 °C, rentang −55 °C sampai +125 °C), serta sensor tekanan kapasitif mini untuk membaca *Pirani* lokal. Node ditempatkan di dalam vial *dummy* dan vial produksi sesuai rencana sampling *Design of Experiments* (DoE) QbD.
2. **Lapisan Komunikasi (Tier 2):** Gateway di dalam ruang vakum berfungsi sebagai koordinator dengan protokol *time‑synchronized channel hopping* (TSCH) untuk mitigasi interferensi multi‑path. Gateway memancarkan data ke akses poin luar melalui *optical fiber feed‑through* (loss sinyal RF menembus dinding logam ruang terlalu besar).
3. **Lapisan Analitik (Tier 3):** Data dikirim ke server *edge* yang menjalankan algoritma soft‑sensor (regresi Gaussian Process) untuk memprediksi $T_p$ dan $R_p$ secara *real‑time* dan memberikan umpan balik ke kontroler PLC lyo.

### 3.2. SOP Implementasi WSN (10 Langkah)

| Langkah | Aktivitas | Standar Acuan |
|---------|-----------|---------------|
| 1 | URS (User Requirement Specification): target PDR ≥99,5 %, latensi <2 s, akurasi suhu ±0,5 °C | ICH Q9 |
| 2 | Pemetaan posisi sensor (16–64 titik per rak) menggunakan DoE *space‑filling* (Latin Hypercube) | ASTM E2709 |
| 3 | Kalibrasi sensor di lingkungan vakum pada 0,1–1 mbar dan suhu −40 °C s.d. +40 °C | NIST traceable |
| 4 | Validasi *thermal mapping* sebelum *GMP* batch | FDA PAT Guidance |
| 5 | Instalasi node dan gateway dengan *optical feed‑through* | ASME BPE |
| 6 | Konfigurasi TSCH (slotframe ≥10 ms, *dedicated cell* per node) | IEEE 802.15.4e |
| 7 | *Qualification* IQ/OQ/PQ (Installation/Operational/Performance Qualification) | GAMP 5 |
| 8 | Integrasi dengan LIMS/MES via OPC‑UA | ISA‑95 |
| 9 | Penyiapan *dashboard* real‑time dengan *control chart* SPC (mis. CUSUM) | ICH Q10 |
| 10 | Prosedur *release* otomatis jika semua *critical quality attribute* (CQA) terpenuhi | 21 CFR Part 11 |

### 3.3. Diagram Alir Pengambilan Keputusan

```
[Data WSN masuk] → [Filter Kalman] → [Soft Sensor (GP)]
                                            ↓
                            [Estimasi T_p, R_p, L_d, kadar_air]
                                            ↓
                          ┌───────────────┴───────────────┐
                  CQA terpenuhi?                       Tidak
                          │                               │
                  [Auto-release]              [Feedback → MPC: turunkan T_shelf / naikkan P_c]
                          │                               │
                  [Log ke ELN + MES]             [Loop tertutup sampai konvergen]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario

Sebuah produk biologis (formulasi 5 % sukrosa + 1 % BSA) dikemas dalam vial 5 mL (luas penampang $A_v = 4{,}15\,\text{cm}^2$, $h_0 = 1{,}1\,\text{cm}$). Target mutu: kadar air residual ≤1,5 % (b/b), $T_p \le -32\,^\circ\text{C}$. Parameter proses awal:

- $T_{shelf} = -15\,^\circ\text{C}$
- $P_c = 0{,}12\,\text{mbar}$
- $K_v = 1{,}25 \cdot 10^{-3}\,\text{cal}\cdot\text{s}^{-1}\cdot\text{cm}^{-2}\cdot\text{K}^{-1}$ (koefisien kalor vial)
- $R_{p,0} = 0\,\text{cm}^2\cdot\text{h}\cdot\text{mbar}\,\text{g}^{-1}$ ; $a = 4{,}0\,\text{cm}^2\cdot\text{h}\cdot\text{mbar}\,\text{g}^{-1}$

### 4.2. Perhitungan

**Langkah 1 – Tekanan uap jenuh es pada antarmuka sublimasi.**
Gunakan persamaan Goff‑Gratch atau korelasi sederhana:

$$P_{w,i}\text{(mbar)} \approx 6{,}1114\cdot\exp\!\left[22{,}452\,\left(\frac{T_p}{273{,}15+T_p}\right)\right]$$

Asumsi awal $T_p = -38\,^\circ\text{C}$ → $P_{w,i} \approx 0{,}134\,\text{mbar}$.

**Langkah 2 – Driving force sublimasi:**
$$\Delta P = P_{w,i} - P_c = 0{,}134 - 0{,}12 = 0{,}014\,\text{mbar}$$

**