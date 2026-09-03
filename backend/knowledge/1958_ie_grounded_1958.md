# 1958 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik cold chain merupakan subsistem kritis dalam rantai pasok produk mudah rusak (perishable products) yang mencakup vaksin, produk biofarmasi, makanan laut, produk susu, hortikultura segar, dan reagen diagnostik. Menurut Khurshid & Siddiqui (2024) dalam tulisannya yang dipublikasikan di SSRN dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599), integritas suhu sepanjang rantai pasok tidak hanya menjadi penentu kualitas produk akhir, melainkan juga menyangkut keselamatan publik—terutama untuk produk farmasi kritis seperti vaksin mRNA, insulin, dan produk darah. Kerusakan rantai dingin pada vaksin COVID-19 saja berpotensi menimbulkan kerugian ekonomi global lebih dari USD 34,1 miliar per tahun menurut perkiraan WHO dan UNICEF yang dirujuk dalam literatur.

Di sisi teknis operasional, Putra, Defit, & Nurcahyo (2024) dengan DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589) memaparkan temuan lapangan pada Dinas Kesehatan Kabupaten Siak, Indonesia, bahwa Unit Pelaksana Teknis Dinas (UPTD) Farmasi masih mengandalkan pencatatan suhu manual setiap dua jam pada *log sheet* yang dikerjakan apoteker. Kondisi ini memiliki tiga risiko fundamental: (1) human error dalam pembacaan termometer analog, (2) tidak adanya peringatan *real-time* saat terjadi *temperature excursion* (penyimpangan suhu) akibat kerusakan internal kompresor atau pembukaan pintu berulang, dan (3) kemampuan respons yang terbatas ketika *cold chain box* mengalami *thermal drift* di luar rentang $+2^{\circ}\text{C}$ hingga $+8^{\circ}\text{C}$.

Konteks industri modern menuntut transformasi menuju *Industry 4.0-compliant cold chain* yang menggabungkan sensor IoT, analitik data, dan model resiliensi kuantitatif. Permasalahan yang diangkat oleh Khurshid & Siddiqui (2024) menyoroti belum adanya kerangka resiliensi terpadu yang mampu mengkuantifikasi kapasitas pemulihan (*recovery capacity*) sistem cold chain terhadap gangguan—mulai dari kegagalan peralatan, pemadaman listrik, hingga variasi suhu lingkungan. Kombinasi dua literatur ini memberikan landasan holistik: perspektif model resiliensi makro (Khurshid & Siddiqui, 2024) dan perspektif implementasi sensor mikro IoT (Putra dkk., 2024). Dengan integrasi keduanya, perusahaan farmasi, distributor makanan, dan operator logistik dapat membangun sistem cold chain yang tidak hanya *fault-tolerant* tetapi juga *self-recovering* dengan *Mean Time To Recovery* (MTTR) yang terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Sistem Cold Chain

Khurshid & Siddiqui (2024) mengusulkan kerangka resiliensi yang didefinisikan sebagai kemampuan sistem untuk menyerap, beradaptasi, dan memulihkan fungsi kritisnya setelah gangguan. Indeks resiliensi $R(t)$ pada selang waktu $[t_0, t_1]$ dapat diformulasikan sebagai:

$$
R = \frac{\int_{t_0}^{t_1} Q(t)\, dt}{\int_{t_0}^{t_1} Q_{\text{nom}}(t)\, dt}
$$

dengan $Q(t)$ adalah *system performance function* aktual selama gangguan, dan $Q_{\text{nom}}(t)$ adalah kinerja nominal tanpa gangguan. Nilai $R \in [0,1]$, di mana $R = 1$ menunjukkan resiliensi sempurna.

### 2.2 Model Kinetika Degradasi Termal (Arrhenius)

Untuk produk farmasi dan pangan mudah rusak, degradasi kualitas mengikuti kinetika Arrhenius yang dirujuk dalam literatur cold chain:

$$
k(T) = A \cdot e^{-E_a / (R_g T)}
$$

di mana:
- $k(T)$ = laju degradasi pada suhu absolut $T$ (Kelvin)
- $A$ = faktor pra-eksponensial (satuan tergantung orde reaksi)
- $E_a$ = energi aktivasi (J/mol)
- $R_g = 8{,}314\,\text{J/(mol·K)}$ = konstanta gas universal

Untuk vaksin sensitif, biaya kualitas kumulatif akibat *temperature excursion* diberikan oleh:

$$
C_{\text{deg}}(T, t) = C_0 \cdot \left(1 - e^{-k(T) \cdot t}\right)
$$

dengan $C_0$ adalah nilai moneter produk yang terancam rusak.

### 2.3 Model Probabilitas Kegagalan Sensor IoT

Putra dkk. (2024) menggunakan sensor DS18B20 yang memiliki akurasi $\pm 0{,}5^{\circ}\text{C}$ pada rentang $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$. Probabilitas deteksi tepat (*probability of accurate detection*) terhadap *temperature excursion* dimodelkan sebagai:

$$
P_{\text{detect}} = 1 - \Phi\left(\frac{\theta - \mu_{\text{err}}}{\sigma_{\text{err}}}\right)
$$

dengan $\Phi(\cdot)$ adalah *cumulative distribution function* normal standar, $\theta$ adalah ambang batas (*threshold*) deteksi, $\mu_{\text{err}}$ dan $\sigma_{\text{err}}$ berturut-turut adalah mean dan standar deviasi error sensor.

### 2.4 Model Antrian Markov untuk Status Cold Chain

Status operasional cold chain box dimodelkan sebagai rantai Markov dengan empat state: $S_0$ (normal), $S_1$ (peringatan dini), $S_2$ (eskalasi), dan $S_3$ (kerusakan kritis). Matriks transisi $\mathbf{P}$ berukuran $4 \times 4$:

$$
\mathbf{P} = \begin{bmatrix} p_{00} & p_{01} & 0 & 0 \\ p_{10} & p_{11} & p_{12} & 0 \\ 0 & p_{21} & p_{22} & p_{23} \\ 0 & 0 & 0 & 1 \end{bmatrix}
$$

Probabilitas stasioner $\pi_i$ diselesaikan dari $\boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi}$ dengan $\sum_{i=0}^{3} \pi_i = 1$.

### 2.5 Fungsi Resiliensi dengan IoT

Ketika sensor IoT diintegrasikan, *time-to-detection* $\tau_{\text{det}}$ menurun signifikan, sehingga resiliensi efektif menjadi:

$$
R_{\text{eff}} = R \cdot \left(1 + \alpha \cdot e^{-\beta \tau_{\text{det}}}\right)
$$

dengan $\alpha, \beta > 0$ adalah parameter kalibrasi yang merepresentasikan kontribusi IoT terhadap akselerasi pemulihan sistem.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem IoT Cold Chain

Berdasarkan Putra dkk. (2024), arsitektur pemantauan suhu cold chain box terdiri atas empat lapisan terintegrasi:

1. **Lapisan Sensor (Perception Layer):** Sensor DS18B20 dengan protokol *1-Wire* yang mampu membaca suhu dengan resolusi $0{,}0625^{\circ}\text{C}$, dikonfigurasi pada mode *parasitic power* agar tidak memerlukan suplai eksternal.
2. **Lapisan Transmisi (Network Layer):** Mikrokontroler ESP32 yang mengirimkan data melalui Wi-Fi ke *cloud server* dengan interval akuisisi 10 detik.
3. **Lapisan Pemrosesan (Processing Layer):** Platform IoT (misalnya *ThingSpeak*, *Blynk*, atau *AWS IoT Core*) yang menjalankan aturan ambang batas (*threshold rule*) dan *anomaly detection*.
4. **Lapisan Aplikasi (Application Layer):** Dasbor *real-time*, *push notification* ke ponsel apoteker, dan *audit trail* untuk kepatuhan regulatori BPOM/CDC.

### 3.2 SOP Pemantauan Cold Chain

| No | Langkah | Penanggung Jawab | Frekuensi |
|----|---------|------------------|-----------|
| 1 | Pra-perjalanan: verifikasi suhu awal cold chain box ($T_{\text{initial}} \in [2^{\circ}\text{C}, 8^{\circ}\text{C}]$) | Apoteker UPTD | Setiap batch |
| 2 | Aktivasi sensor IoT dan validasi konektivitas | Teknisi farmasi | Setiap batch |
| 3 | Pemantauan *real-time* via dasbor | Apoteker | Kontinu (24/7) |
| 4 | Dokumentasi otomatis ke *cloud* dan *local backup* | Sistem | Setiap 10 detik |
| 5 | Eskalasi peringatan jika $T \notin [2,8]^{\circ}\text{C}$ lebih dari 15 menit | Apoteker & Supervisor | Insidental |
| 6 | Investigasi akar penyebab (RCA) pasca-insiden | Tim QA | Pasca-insiden |
| 7 | Audit triwulanan terhadap *temperature logs* dan *system uptime* | Manajer Mutu | Triwulanan |

### 3.3 Diagram Alir Logika Deteksi dan Respons

```
┌─────────────────┐
│  Baca Sensor T  │ ◄─── Setiap 10 detik
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐         ┌──────────────────┐
│ 2°C ≤ T ≤ 8°C?          │── Ya ──▶│ Log Normal       │
└────────┬────────────────┘         └──────────────────┘
         │ Tidak
         ▼
┌─────────────────────────┐         ┌──────────────────┐
│ T < 2°C atau T > 8°C    │────────▶│ Alert Level 1    │
│ selama > 5 menit?       │         │ (Push Notifikasi)│
└────────┬────────────────┘         └──────────────────┘
         │ Ya
         ▼
┌─────────────────────────┐         ┌──────────────────┐
│ T > 10°C atau T < 0°C   │────────▶│ Alert Level 2    │
│ selama > 15 menit?      │         │ (Sirene + Telpon)│
└────────┬────────────────┘         └──────────────────┘
         │ Ya
         ▼
┌─────────────────────────┐         ┌──────────────────┐
│ Inisiasi SOP Karantina  │────────▶│ Quarantine Flag  │
│ & Evaluasi Kerusakan    │         │ & Batch Recall   │
└─────────────────────────┘         └──────────────────┘
```

### 3.4 Integrasi dengan Model Resiliensi Khurshid & Siddiqui

Pada level strategis, *resilience dashboard* dikembangkan berbasis KPI yang dipetakan langsung ke kerangka Khurshid & Siddiqui (2024): (i) *Robustness Index* (kemampuan menahan guncangan), (ii) *Redundancy Factor* (kapasitas cadangan), (iii) *Resourcefulness Score* (kapabilitas adaptif), dan (iv) *Rapidity Metric* (kecepatan pemulihan). Setiap KPI dihitung mingguan dan dibandingkan terhadap *baseline* historis untuk deteksi degradasi sistemik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus

Sebuah distributor farmasi di Indonesia mengelola *cold chain box* berisi vaksin COVID-19 dengan kapasitas 500 vial @ dosis Rp 250.000. Data operasional sesuai skenario diadaptasi dari Putra dkk. (2024):

- Suhu set-point: $T_{\text{set}} = 5^{\circ}\text{C}$
- Rentang aman: $[T_{\min}, T_{\max}] = [2^{\circ}\text{C}, 8^{\circ}\text{C}]$
- Volume batch: $N = 500$ vial
- Nilai batch: $V_{\text{batch}} = 500 \times \text{Rp }250.000 = \text{Rp }125.000.000$
- Energi aktivasi degradasi vaksin: $E_a = 80.000\,\text{J/mol}$ (tipikal protein)
- Faktor pra-eksponensial: $A = 10^{14}\,\text{jam}^{-1}$
- Akurasi sensor DS18B20: $\mu_{\text{err}} = 0^{\circ}\text{C}$, $\sigma_{\text{err}} = 0{,}25^{\circ}\text{C}$
- Biaya investasi IoT: $C_{\text{IoT}} = \text{Rp }15.000.000$ (satu kali)
- Biaya operasional tahunan: $C_{\text{op}} = \text{Rp }3