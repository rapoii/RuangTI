# 1431 — Penilaian Keandalan dan Protokol Pengujian Konverter Elektronika Daya: Strategi Komprehensif untuk Lifetime Engineering Sistem Elektronika Daya

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Comprehensive Overview of Reliability Assessment Strategies and Testing of Power Electronics Converters
**Jurnal & Sitasi Utama:** Farzad Hosseinabadi, Sajib Chakraborty, Sachin Kumar Bhoi (2024). *IEEE Open Journal of Power Electronics*. DOI: [https://doi.org/10.1109/ojpel.2024.3379294](https://doi.org/10.1109/ojpel.2024.3379294)
**Sitasi Pendukung:** Farzad Hosseinabadi, Sajib Chakraborty, Sachin Kumar Bhoi (2024). *IEEE Open Journal of Power Electronics*. DOI: [https://doi.org/10.1109/ojpel.2024.3379294](https://doi.org/10.1109/ojpel.2024.3379294)

---

## 1. Pendahuluan dan Konteks Industri

Konverter Elektronika Daya (*Power Electronics Converters* — PEC) merupakan tulang punggung sistem konversi energi pada rantai pasok energi modern, menjembatani generator (turbin angin, panel surya), sistem penyimpanan baterai (BESS), dan beban industri/konsumen. Hosseinabadi, Chakraborty, dan Bhoi (2024) dalam *tinjauan komprehensif* yang dipublikasikan di *IEEE Open Journal of Power Electronics* dengan DOI [10.1109/ojpel.2024.3379294](https://doi.org/10.1109/ojpel.2024.3379294) menekankan bahwa PEC beroperasi di bawah profil pemuatan (*loading factors*) yang sangat kompleks dan dinamis sepanjang siklus hidupnya, sehingga memunculkan permasalahan kritis terkait *lifetime* (umur pakai) perangkat. Paper tersebut secara eksplisit menyatakan bahwa keandalan (*reliability*) PEC merupakan prioritas utama bagi Original Equipment Manufacturer (OEM) dan supplier agar teknologi ini dapat diterima secara luas di pasar industri yang sangat demanding seperti otomotif elektrifikasi, penerbangan (*more electric aircraft*), sistem pertahanan, dan smart grid (Hosseinabadi et al., 2024).

Konteks industri yang melatarbelakangi studi ini memiliki urgensi ekonomi yang sangat tinggi. Sebagai contoh, downtime satu jam pada turbin angin offshore kelas 3 MW dapat menimbulkan kerugian pendapatan lebih dari USD 5.000 (Hosseinabadi et al., 2024), sementara biaya perbaikan modul IGBT yang mengalami *bond wire lift-off* atau *solder fatigue* bisa melebihi 70% dari nilai investasi converter stack. Selain itu, standar IEC 61709 dan IEC TR 62380 mensyaratkan bahwa konverter misi-kritis harus memenuhi *target lifetime* 20–25 tahun untuk aplikasi utilitas dan 15 tahun untuk otomotif. Fakta bahwa >30% kegagalan sistem PEC berasal dari *thermal-cycling-induced wear-out* (bukan *infant mortality* atau *random failure*) menjadikan rekayasa keandalan berbasis lifetime modeling sebagai kompetensi inti yang wajib dikuasai oleh insinyur Teknik Industri di era elektrifikasi dan transisi energi.

Lebih jauh, Hosseinabadi et al. (2024) menyoroti bahwa terdapat empat tantangan utama dalam pengujian dan penilaian keandalan PEC modern: (1) *mission profile translation* — bagaimana menerjemahkan profil operasi lapangan menjadi profil uji laboratorium yang representatif; (2) *thermal stress superposition* — ketika beberapa mode kegagalan berinteraksi secara non-linear; (3) *long qualification cycles* — uji tradisional yang memakan waktu 12–24 bulan; dan (4) *digital twin integration* — kebutuhan untuk memvalidasi model berbasis fisika dengan data empiris. Tulisan ini akan menjawab tantangan tersebut secara kuantitatif melalui formulasi lifetime dan studi kasus numerik yang grounded pada metodologi yang diuraikan oleh Hosseinabadi et al. (2024).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kerusakan Termal: Persamaan Arrhenius dan Coffin-Manson

Fondasi kuantitatif utama untuk memprediksi umur pakai komponen semikonduktor daya adalah persamaan Arrhenius yang mengkuantifikasi efek suhu absolut terhadap laju reaksi degradasi kimia/fisika. Faktor akselerasi suhu didefinisikan sebagai berikut (Hosseinabadi et al., 2024):

$$AF_T = \exp\left[\frac{E_a}{k_B}\left(\frac{1}{T_{use}} - \frac{1}{T_{test}}\right)\right]$$

di mana $E_a$ adalah energi aktivasi (eV), $k_B = 8{,}617 \times 10^{-5}$ eV/K adalah konstanta Boltzmann, $T_{use}$ dan $T_{test}$ masing-masing adalah suhu junction absolut saat penggunaan dan saat pengujian akselerasi.

Untuk mode kegagalan dominan berupa *solder fatigue* dan *chip solder degradation* akibat siklus termal, Hosseinabadi et al. (2024) merujuk pada model Coffin-Manson klasik yang menghubungkan jumlah siklus hingga gagal ($N_f$) dengan amplitudo ayunan suhu junction $\Delta T_j$:

$$N_f = A \cdot (\Delta T_j)^{-n}$$

dengan $A$ adalah konstanta material dan $n$ adalah eksponen fatigue (tipikal $n \in [1{,}9; 2{,}7]$ untuk solder SAC berbasis Sn-Ag-Cu).

### 2.2 Model Norris-Landzberg untuk Aplikasi Mission Profile

Untuk sistem PEC yang beroperasi dengan siklus termal harian, musiman, dan transien beban, model Norris-Landzberg merupakan standar de-facto yang diadopsi dalam literatur dan diacu secara ekstensif oleh Hosseinabadi et al. (2024):

$$N_f = A \cdot (\Delta T_j)^{-n} \cdot \exp\left(\frac{E_a}{k_B T_{j,\max}}\right) \cdot t_{cycle}^{-m}$$

di mana $T_{j,\max}$ adalah suhu junction maksimum absolut, $t_{cycle}$ adalah durasi satu siklus termal, dan $m$ adalah eksponen durasi siklus (tipikal $m \approx 0{,}3$). Persamaan ini menjelaskan mengapa *mission profile* yang memiliki siklus panjang (misalnya start-stop harian pada EV) memiliki efek degradasi yang berbeda dibanding siklus pendek (seperti *wind gusts*).

### 2.3 Distribusi Weibull untuk Analisis Statistik Keandalan

Lifetime komponen semikonduktor daya umumnya mengikuti distribusi Weibull dua parameter. Fungsi densitas probabilitas (*probability density function*) dan *cumulative distribution function* (CDF) diberikan oleh:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

$$F(t) = 1 - \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

di mana $\beta$ adalah *shape parameter* (atau *Weibull slope*) dan $\eta$ adalah *scale parameter* (characteristic life, yaitu umur saat $F(\eta) = 1 - e^{-1} \approx 63{,}2\%$). Untuk komponen elektronika daya yang mengalami *wear-out*, $\beta > 1$ (umumnya $\beta \in [2{,}5; 5]$ untuk modul IGBT), sementara untuk *early failures* $\beta < 1$.

Mean Time To Failure (MTTF) dari distribusi Weibull adalah:

$$MTTF = \eta \cdot \Gamma\left(1 + \frac{1}{\beta}\right)$$

di mana $\Gamma(\cdot)$ adalah fungsi gamma.

### 2.4 Linear Damage Accumulation (Palmgren-Miner)

Karena PEC menghadapi spektrum beban termal yang bervariasi, kita menggunakan aturan Palmgren-Miner untuk mengakumulasikan kerusakan parsial dari berbagai amplitudo siklus. Kerusakan total:

$$D = \sum_{i=1}^{k} \frac{n_i}{N_{f,i}}$$

di mana $n_i$ adalah jumlah siklus aktual pada amplitudo $\Delta T_{j,i}$ dan $N_{f,i}$ adalah jumlah siklus hingga gagal pada amplitudo tersebut. Kegagalan terjadi ketika $D \geq 1$. Untuk desain konservatif, batas desain yang digunakan adalah $D_{design} \in [0{,}3; 0{,}7]$ sesuai standar Hosseinabadi et al. (2024).

### 2.5 Standar Handbooks Keandalan

Hosseinabadi et al. (2024) juga melakukan review terhadap empat handbook utama yang digunakan industri:

- **MIL-HDBK-217F**: fokus pada tingkat komponen, model statistik, militer.
- **IEC TR 62380**: model keandalan multifisik untuk avionik.
- **FIDES Guide 2009**: mempertimbangkan *induced fragility* dan *technological profile*.
- **Telcordia SR-332**: untuk industri telekomunikasi.
- **Siemens SN 29500**: untuk semikonduktor daya dan modul.

Kombinasi keempat handbook ini (atau pendekatan *physics-of-failure* modern) menjadi pilar metodologi lifetime engineering modern.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Hosseinabadi et al. (2024) mengusulkan kerangka kerja terstruktur lima-tahap untuk penilaian keandalan dan pengujian PEC. Berikut SOP yang diadaptasi untuk konteks industri:

### Tahap 1 — Definisi Misi dan Profil Termal

1. Kumpulkan data *mission profile* selama 1 tahun penuh dengan sampling 1–10 menit (curah matahari, kecepatan angin, arus beban, suhu ambient).
2. Konversikan menjadi profil termal junction $T_j(t)$ menggunakan model impedansi termal RC (*thermal network*) dari datasheet produsen atau hasil simulasi CFD/FEA.
3. Ekstrak *rainflow counting* untuk mendapatkan distribusi amplitudo $\Delta T_j$ dan $T_{j,\max}$ per siklus.

### Tahap 2 — Identifikasi Mode Kegagalan

Gunakan diagram P-FMEA (*Physics-of-Failure FMEA*) untuk mengidentifikasi mode kegagalan kritis:
- Bond wire lift-off (Tj > 175 °C, durasi panjang)
- Solder fatigue (∆Tj berulang)
- Gate oxide breakdown (Tj peak, Vds spike)
- Time-dependent dielectric breakdown (TDDB)
- Electrochemical migration (humidity, bias)

### Tahap 3 — Pemodelan Lifetime dan Simulasi

Pilih model yang sesuai (Coffin-Manson, Norris-Landzberg, Bayerer, Held) dan hitung $N_{f,i}$ untuk setiap amplitudo siklus. Akumulasikan menggunakan Palmgren-Miner.

### Tahap 4 — Pengujian Akselerasi (ALT/HALT)

1. **HALT (Highly Accelerated Life Test)**: identifikasi batas operasional dan destruktif menggunakan stres bertahap (termal, getaran, electrical).
2. **ALT (Accelerated Life Test)**: gunakan suhu, tegangan, dan arus yang dinaikkan untuk memicu mode kegagalan target dalam waktu singkat.
3. **Power Cycling Test (PCT)**: khusus untuk modul daya, mensimulasikan $\Delta T_j$ yang terkontrol (IEC 60749-34).

### Tahap 5 — Validasi dan Uji Lapangan (*Field Return Analysis*)

Bandingkan lifetime prediksi dengan data lapangan aktual. Hitung *acceleration factor* validasi:

$$AF_{validation} = \frac{t_{field}}{t_{test}}$$

dan perbarui parameter model menggunakan *Bayesian update*.

### Diagram Alir Proses

```
┌────────────────────┐
│ Definisi Misi      │
│ (Mission Profile)  │
└────────┬───────────┘
         ▼
┌────────────────────┐
│ Thermal Modeling   │
│ (RC Network / CFD) │
└────────┬───────────┘
         ▼
┌────────────────────┐
│ Rainflow Counting  │
└────────┬───────────┘
         ▼
┌────────────────────┐
│ Damage Calculation │
│ (Norris-Landzberg) │
└────────┬───────────┘
         ▼
┌────────────────────┐
│ Lifetime Prediction   │
│ + Uncertainty Bound   │
└────────┬───────────┘
         ▼
┌────────────────────┐
│ ALT/HALT Validation │
└────────┬───────────┘
         ▼
┌────────────────────┐
│ Field Data Feedback │
│ (Loop tertutup)    │
└────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Penilaian Keandalan Konverter PV Inverter 50 kW untuk Aplikasi Komersial

**Konteks:** Sebuah inverter fotovoltaik 50 kW dengan modul IGBT Siemens FF50R12RT4 dipasang di instalasi komersial rooftop di Surabaya. Target lifetime desain: **20 tahun**. Profil termal diekstrak dari data logger selama 1 tahun.

### Langkah 1 — Data Input

| Parameter | Nilai |
|---|---|
| Modul IGBT | FF50R12RT4 (Siemens) |
| $T_{j,\max}$ tipikal | 150 °C (rating) |
| Energi aktivasi solder $E_a$ | 0,78 eV (SAC305) |
| Konstanta A (Bayerer model) | $9{,}30 \times 10^{14}$ |
| Eksponen $n$ (Coffin-Manson) | 1,942 |
| Eksponen $m$ (siklus durasi) | 0,309 |
| Durasi siklus harian $t_{cycle}$ | 1.440 menit = 86.400 s |

### Langkah 2 — Profil Termal Hasil Rainflow Counting

Dari 1 tahun data misi, diperoleh spektrum siklus termal (3 kelompok utama):

| Kelas | $\Delta T_j$ (K) | $T_{j,\max}$ (K) | Siklus/tahun |
|---|---|---|---|
| Harian (pagi-siang-m.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
