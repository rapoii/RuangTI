# 2278 — Model Resiliensi dan Sistem Pemantauan IoT untuk Cold Chain Logistics Produk Mudah Rusak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, Vol. 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan subsistem kritis dalam rantai pasok produk termolabil (vaksin, biofarmasi, produk segar, dan bahan makanan beku) yang memerlukan kendali suhu kontinyu dalam rentang 2°C–8°C untuk vaksin sensitif, -25°C untuk produk beku tertentu, dan 0°C–4°C untuk produk dairy serta seafood segar. Menurut Khurshid & Siddiqui (2024), disruption pada cold chain perishable products tidak hanya menyebabkan kerugian ekonomi langsung berupa penolakan批次 produk (batch rejection), tetapi juga menghasilkan eksternalitas sosial seperti outbreak penyakit, keracunan pangan, dan pemborosan energi yang terkait dengan target SDG 12.3 (pengurangan food loss and waste hingga 50% pada tahun 2030). Kerentanan struktural cold chain meningkat karena beberapa faktor simultan: (1) variabilitas suhu lingkungan tropis di negara-negara equatorial yang memaksa beban pendinginan lebih tinggi, (2) fragmentasi节点 (node) distribusi last-mile yang sering kali tidak memiliki infrastruktur monitoring real-time, dan (3) kompleksitas multi-modal transport yang membutuhkan transshipment pada titik-titik kritis (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)).

Putra, Defit, & Nurcahyo (2024) mendokumentasikan secara empiris masalah operasional yang sangat representatif di tingkat Puskesmas/UPTD Farmasi Dinas Kesehatan Kabupaten Siak, Riau. Mereka menemukan bahwa cold chain box sebagai media penyimpanan vaksinosaat ini hanya mengandalkan pencatatan suhu secara manual oleh apoteker setiap 2 jam sekali pada log sheet. Pendekatan manual ini memiliki tiga缺陷 (defect) utama: (a) sampling resolution terlalu rendah untuk mendeteksi thermal excursion berdurasi pendek (≤15 menit) yang telah terbukti merusak potensi vaksin campak, polio, dan DPT; (b) tidak adanya mekanisme peringatan dini (early warning) ketika suhu箱 (box) naik akibat kerusakan internal kompresor atau paparan lingkungan eksternal; dan (c) potensi human error dalam pembacaan termometer analog serta keterlambatan dokumentasi saat shift pergantian. Oleh karena itu, integrasi sensor IoT berbiaya rendah seperti DS18B20 dengan akurasi ±0.5°C pada rentang -10°C hingga +85°C, resolusi 0.0625°C (12-bit ADC), dan protokol komunikasi 1-Wire menjadi disruptive technology untuk penguatan cold chain governance di level基层 (grassroots) (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)).

Dari perspektif teknik industri, konvergensi antara model resiliensi kuantitatif (Khurshid & Siddiqui, 2024) dan arsitektur sensing IoT (Putra et al., 2024) menciptakan peluang rekayasa sistem terpadu untuk mengukur, memprediksi, dan memulihkan disruptions secara adaptif. Urgensi industri makin diperkuat oleh estimasi WHO bahwa rata-rata 25%–50% vaksin di negara berkembang terbuang akibat breakage cold chain, dengan nilai moneter setara ratusan juta dolar AS per tahun.

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi cold chain yang diusung oleh Khurshid & Siddiqui (2024) membangun pada **resilience triangle framework** (Bruneau et al., 2003) yang disesuaikan untuk karakteristik stochastic perishable product degradation. Performa sistem cold chain pada waktu $t$ dinotasikan sebagai $Q(t) \in [0,1]$, dengan $Q(t)=1$ merepresentasikan kondisi ideal (suhu dalam spesifikasi) dan $Q(t)=0$ merepresentasikan kegagalan total (produk rusak). Ketika disruption terjadi pada $t_0$, performa menurun hingga $Q(t_1) = 1 - D$ dengan $D$ adalah degradasi maksimum, kemudian sistem dipulihkan hingga kembali ke $Q(t_2)=1$.

**Indeks Resiliensi Kuantitatif:**

$$R = \frac{\int_{t_0}^{t_1}[1 - Q(t)] \, dt + \int_{t_1}^{t_2}[1 - Q(t)] \, dt}{T_{\text{total}} \cdot D_{\max}}$$

di mana $T_{\text{total}} = t_2 - t_0$ adalah total durasi disruption hingga pemulihan penuh, dan $D_{\max}$ adalah degradasi maksimum teoritis. Semakin kecil $R$, semakin resilien sistem tersebut.

**Model Degradasi Produk Perishable (Arrhenius-Kinetic):**

Untuk vaksin dan biofarmasi, laju degradasi mengikuti kinetika Arrhenius:

$$k(T) = A \cdot e^{-E_a / (R_g \cdot T)}$$

di mana $A$ adalah pre-exponential factor, $E_a$ adalah activation energy (J/mol), $R_g = 8.314$ J/(mol·K), dan $T$ adalah suhu absolut (K). Kerusakan kumulatif ditentukan oleh:

$$\text{Potency Loss} = 1 - e^{-\int_{0}^{t_f} k[T(t)] \, dt}$$

**Probabilitas Kegagalan Cold Chain (Sensor DS18B20):**

Mengikuti karakteristik sensor yang didokumentasikan oleh Putra et al. (2024), probabilitas deteksi thermal excursion pada interval sampling $\Delta t$ adalah:

$$P_{\text{detect}} = 1 - \left(1 - \frac{\Delta t_{\text{alarm}}}{T_{\text{recovery}}}\right)^n$$

dengan $n$ jumlah sampel dalam satu siklus monitoring, $\Delta t_{\text{alarm}}$ latency alarm (target ≤ 30 detik), dan $T_{\text{recovery}}$ adalah waktu pemulihan suhu oleh sistem pendingin.

**Formulasi Biaya Total Cold Chain (TCO):**

$$TC = C_{\text{capex}} + C_{\text{opex}} \cdot t + C_{\text{spoilage}} \cdot N_{\text{disruption}} + C_{\text{liability}}$$

$$C_{\text{spoilage}} = \sum_{i=1}^{N} V_i \cdot (1 - S_i)$$

di mana $V_i$ adalah nilai moneter produk ke-$i$, $S_i$ adalah salvability ratio setelah disruption, dan $N$ adalah jumlah kejadian disruptions per tahun.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem cold chain yang resilien mengikuti kerangka **PDCA-Resilience** yang mengintegrasikan arsitektur sensing IoT dari Putra et al. (2024) dengan model kuantitatif Khurshid & Siddiqui (2024):

**Arsitektur Teknologi (4-Layer IoT):**

1. **Perception Layer**: Sensor DS18B20 dengan waterproof stainless steel probe (±0.5°C akurasi, resolusi 12-bit = 0.0625°C, response time 750 ms dalam air), terhubung via protokol 1-Wire ke mikrokontroler ESP32. Multiple sensor disusun dalam topologi **star-bus hybrid** dengan jarak maksimal 5 meter antar node karena keterbatasan parasitic power 1-Wire.

2. **Network Layer**: Transmisi data melalui Wi-Fi 2.4 GHz ke local server, dengan fallback GSM/LTE untuk memastikan konektivitas di area terpencil. Kompresi paket menggunakan algoritma delta-encoding untuk mengurangi bandwidth hingga 85%.

3. **Edge Processing Layer**: Mikrokontroler menjalankan algoritma **Rule-Based Anomaly Detection** dengan logika IF-THEN:
   - IF $T > T_{\max} + \delta_{\text{upper}}$ THEN trigger SMS alert + activate backup cooling
   - IF $T < T_{\min} - \delta_{\text{lower}}$ THEN trigger alert + switch power supply
   - dengan $\delta_{\text{upper}}, \delta_{\text{lower}}$ = hysteresis band (default 0.5°C)

4. **Application Layer**: Dashboard real-time berbasis web (Node.js + InfluxDB + Grafana) dengan fitur: visualisasi time-series suhu, automatic PDF report untuk regulator (BPOM/WHO PQS), dan digital logbook menggantikan pencatatan manual.

**SOP Operasional Harian:**

| Waktu | Kegiatan | Penanggung Jawab |
|-------|----------|------------------|
| 06:00 | Verifikasi kalibrasi sensor, cek koneksi 1-Wire | Apoteker |
| Setiap 15 detik | Auto-logging suhu ke cloud | Sistem IoT |
| Setiap 2 jam | Cross-check manual vs digital (sampai transisi penuh) | Apoteker |
| Bulanan | Analisis tren degradasi, recalibration | Supervisor Farmasi |

**Diagram Alir Mitigasi Disruption:**

```
[Sensor Read] → [Anomaly?] → No → [Normal Log]
                    ↓ Yes
        [Trigger Alert via SMS/Email]
                    ↓
        [Switch to Backup Cooling/Power]
                    ↓
        [Quarantine Affected Products]
                    ↓
        [Root Cause Analysis] → [Update SOP]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Distribusi Vaksin COVID-19 dari UPTD Farmasi Kabupaten Siak ke 15 Puskesmas**

**Parameter Input:**
- Total dosis per cold chain box: $N = 500$ vial @ 0.5 mL
- Suhu target: $T_{\text{target}} = 4°C$, batas atas: $T_{\max} = 8°C$
- Activation energy vaksin mRNA tipikal: $E_a = 83{,}680$ J/mol (≈20 kcal/mol)
- Pre-exponential factor: $A = 10^{12}$ /jam
- Frekuensi sampling DS18B20: $\Delta t = 15$ detik
- Latency alarm: $\Delta t_{\text{alarm}} = 30$ detik
- Recovery time sistem pendingin saat failure: $T_{\text{recovery}} = 20$ menit
- Biaya per vial: $V = \$5.50$ (estimasi program Kemenkes)
- Asumsi: terjadi 1 disruption per bulan dengan degradasi suhu puncak 12°C selama 25 menit sebelum recovery

**Langkah 1: Perhitungan Probabilitas Deteksi dengan IoT vs Manual**

Probabilitas deteksi dengan IoT (Putra et al., 2024):
$$n_{\text{IoT}} = \frac{25 \times 60}{15} = 100 \text{ sampel}$$
$$P_{\text{detect,IoT}} = 1 - \left(1 - \frac{0.5}{20}\right)^{100} = 1 - (0.975)^{100} = 1 - 0.0779 = 0.9221$$

Probabilitas deteksi dengan metode manual (pencatatan setiap 2 jam = 7200 detik):
$$n_{\text{manual}} = \frac{25 \times 60}{7200} = 0.208 \text{ sampel (probabilitas deteksi = 0)}$$

Ini menjelaskan bahwa pencatatan manual **tidak akan pernah mendeteksi thermal excursion berdurasi 25 menit** — suatu kesenjangan keamanan yang berisiko.

**Langkah 2: Perhitungan Kerusakan Potensi (Arrhenius)**

Pada suhu puncak 12°C = 285.15 K:
$$k(285.15) = 10^{12} \cdot e^{-83680/(8.314 \times 285.15)} = 10^{12} \cdot e^{-35.31} = 10^{12} \cdot 4.92 \times 10^{-16} = 4.92 \times 10^{-4} \text{ /jam}$$

Pada suhu referensi 4°C = 277.15 K:
$$k(277.15) = 10^{12} \cdot e^{-36.34} = 10^{12} \cdot 1.55 \times 10^{-16} = 1.55 \times 10^{-4} \text{ /jam}$$

Untuk trajectory suhu linier $T(t) = 4 + 0.32t$ (0 ≤ t ≤ 25 menit), degradasi kumulatif:
$$\text{Potency Loss} = 1 - e^{-\int_0^{25/60} A e^{-E_a/(R_g T(t))} dt} \approx 1 - e