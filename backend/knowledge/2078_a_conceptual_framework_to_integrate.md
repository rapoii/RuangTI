# 2078 — Integrasi Prognostics and Health Management (PHM) dengan Maintenance, Repair and Overhaul (MRO) untuk Sistem Propulsi Pesawat Hidrogen-Elektrik: Kerangka Konseptual HEAPS

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Conceptual Framework to Integrate Prognostics and Health Management with Maintenance, Repair and Overhaul for a Hydrogen-Electric Aircraft Propulsion System
**Jurnal & Sitasi Utama:** Lisandro A. Jiménez-Roa, Nela Koubková, Lothar Kerschgens (2026). *PHM Society European Conference*. DOI: [https://doi.org/10.36001/phme.2026.v9i1.4904](https://doi.org/10.36001/phme.2026.v9i1.4904)
**Sitasi Pendukung:** Lisandro A. Jiménez-Roa, Nela Koubková, Lothar Kerschgens (2026). *PHM Society European Conference*. DOI: [https://doi.org/10.36001/phme.2026.v9i1.4904](https://doi.org/10.36001/phme.2026.v9i1.4904)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global berada di persimpangan transformasi teknologi yang krusial, didorong oleh tekanan dekarbonisasi sesuai inisiatif *Flightpath 2050* European Union dan target *net-zero emissions* IATA pada 2050. Dalam konteks ini, Jiménez-Roa, Koubková, dan Kerschgens (2026, DOI: 10.36001/phme.2026.v9i1.4904) memotret kebutuhan akan arsitektur *Maintenance, Repair and Overhaul* (MRO) generasi baru yang mampu mengakomodasi sistem propulsi hydrogen-electric aircraft propulsion system (HEAPS) yang belum pernah ada dalam sejarah aviasi komersial. HEAPS mengandalkan interaksi kompleks antara *proton exchange membrane fuel cell* (PEMFC), *hydrogen storage tanks* (HST) pada tekanan 350–700 bar, *electric motor* berdaya tinggi, dan *power electronics* — semuanya memiliki regimen kegagalan (*failure modes*) yang secara fundamental berbeda dari mesin turbofan konvensional.

Urgensi operasional sangat jelas: pesawat generasi hidrogen-electric memiliki **MTBUR (Mean Time Between Unscheduled Removals)** yang belum terstandardisasi, sedangkan biaya *direct maintenance cost* (DMC) untuk komponen HEAPS dapat mencapai 35–45% dari total biaya operasional pesawat berdasarkan proyeksi industri awal (Jiménez-Roa *et al.*, 2026). Kerangka kerja AMP (*Aircraft Maintenance Programme*) yang selama ini mengikuti filosofi MSG-3 (*Maintenance Steering Group – 3*) dan diregulasi oleh EASA Part-M, tidak memiliki struktur untuk mengakomodasi degradasi bertahap sel bahan bakar, kebocoran hidrogen mikroskopis, atau *thermal runaway* pada *battery energy storage system* (BESS).

Temuan paling signifikan dari paper ini adalah **asimetri fundamental** antara tahap-tahap PHM (deteksi, diagnosis, prognosis, mitigasi, dan manajemen kesehatan) dengan rantai proses MRO. Hanya tahap **diagnosis** yang memiliki *operational links* langsung ke AMP melalui pembaruan berbasis kondisi (*condition-based updates*), sementara kemampuan prognosis masih bersifat potensial untuk perencanaan *unscheduled maintenance* di tingkat **Part 145** (organisasi perbaikan bersertifikat). Asimetri ini menciptakan *gap* strategis yang harus dijembatani melalui kerangka integrasi konseptual yang diajukan penulis — sebuah sumbangan teoretis yang berdampak langsung pada desain kebijakan pemeliharaan pesawat hidrogen.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Degradasi dan Estimasi Remaining Useful Life (RUL)

Formulasi dasar prognosis pada HEAPS mengikuti model degradasi stokastik Wienner-like yang lazim dalam literatur PHM:

$$X(t) = X_0 + \mu \cdot t + \sigma \cdot B(t)$$

di mana $X(t)$ merepresentasikan parameter degradasi (misalnya *voltage degradation* pada sel PEMFC dalam µV/jam), $X_0$ adalah kondisi awal, $\mu$ adalah *drift coefficient*, $\sigma$ adalah *diffusion coefficient*, dan $B(t)$ adalah proses Wiener standar. *Failure threshold* tercapai ketika $X(t) \geq L$, sehingga **Remaining Useful Life** dapat diformulasikan sebagai:

$$\text{RUL}(t) = \inf\{u \geq 0 : X(t+u) \geq L \mid \mathcal{F}_t\}$$

dengan $\mathcal{F}_t$ merepresentasikan filtrasi informasi historis hingga waktu $t$.

### 2.2. Formulasi CBM (Condition-Based Maintenance) dalam AMP

Kerangka Jiménez-Roa *et al.* (2026) menetapkan bahwa umpan balik diagnosis ke AMP mengikuti model keputusan berbasis probabilitas kondisi. Untuk komponen $i$ dengan parameter sensor $s_{i,k}$, fungsi keputusan *condition-based maintenance* adalah:

$$D_{i,k}(t) = \begin{cases} 1, & \text{jika } P(X_{i,k}(t) \geq L_{i,k} \mid \mathbf{z}_{1:t}) \geq \alpha_{\text{CBM}} \\ 0, & \text{lainnya} \end{cases}$$

di mana $\mathbf{z}_{1:t}$ adalah vektor pengukuran sensor hingga waktu $t$, dan $\alpha_{\text{CBM}}$ adalah *threshold* probabilistik yang ditetapkan regulator (umumnya $\alpha_{\text{CBM}} \in [0.85, 0.95]$ untuk komponen kritis penerbangan).

### 2.3. Indeks Kesehatan dan Pemetaan PHM-MRO

Indeks Kesehatan (*Health Index*, HI) komponen didefinisikan sebagai:

$$\text{HI}_{i}(t) = 1 - \frac{X_i(t) - X_{i,\min}}{X_{i,\max} - X_{i,\min}}$$

Pemetaan antara tahap PHM dan rantai MRO mengikuti struktur relasional:

$$\mathcal{M}: \{\text{Detection}, \text{Diagnosis}, \text{Prognosis}, \text{Mitigation}, \text{Health Mgmt}\} \rightarrow \{\text{AMP}, \text{Part 145}, \text{Part 21}, \text{Part 121}\}$$

Hasil pemetaan menunjukkan bahwa hanya $\mathcal{M}(\text{Diagnosis}) \rightarrow \text{AMP}$ yang bersifat *operational* saat ini, sementara $\mathcal{M}(\text{Prognosis}) \rightarrow \text{Part 145}$ masih bersifat *potential* (Jiménez-Roa *et al.*, 2026).

### 2.4. Model Keandalan Sistem HEAPS

Dengan struktur seri-element untuk modul propulsi hidrogen (PEMFC stack, HST, BOP, *power inverter*, *electric motor*), keandalan sistem mengikuti:

$$R_{\text{HEAPS}}(t) = \prod_{j=1}^{n} R_j(t) = \prod_{j=1}^{n} e^{-\lambda_j t}$$

di mana $\lambda_j$ adalah laju kegagalan komponen $j$. Laju kegagalan agregat untuk sistem dengan $n$ komponen kritis didekati dengan:

$$\lambda_{\text{sys}} = \sum_{j=1}^{n} \lambda_j + \sum_{j<k} \lambda_{j,k}^{(2)} + \ldots$$

di mana $\lambda_{j,k}^{(2)}$ merepresentasikan kontribusi interaksi kegagalan (*failure interaction term*) yang secara khusus relevan untuk kebocoran hidrogen-elektrik.

### 2.5. Model Biaya Total PHM-MRO

Fungsi biaya total siklus hidup pesawat hidrogen dengan integrasi PHM:

$$C_{\text{total}} = C_{\text{acquisition}} + \int_0^{T_{\text{life}}} \left[ C_{\text{CBM}}(t) + C_{\text{unplanned}}(t) + C_{\text{AOG}}(t) \right] e^{-rt} \, dt$$

di mana $r$ adalah *discount rate*, $C_{\text{AOG}}$ adalah biaya *Aircraft on Ground*, dan $T_{\text{life}}$ adalah umur desain pesawat (umumnya 25–30 tahun). Pengurangan biaya melalui integrasi PHM terutama terjadi pada komponen $C_{\text{unplanned}}$ yang bersifat probabilistik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Integrasi PHM-MRO Lima Tahap

Kerangka Jiménez-Roa *et al.* (2026) mengusulkan arsitektur lima tahap yang memetakan proses PHM ke dalam rantai regulasi MRO yang ada:

**Tahap 1 — Deteksi (*Anomaly Detection*):** Implementasi algoritma *multivariate statistical process control* (MSPC) berbasis Hotelling $T^2$ dan *Square Prediction Error* (SPE) untuk mendeteksi anomali pada 17 *sensor measurands* utama HEAPS (voltase sel, tekanan tank hidrogen, suhu *cooling system*, *current ripple* inverter, dan lain-lain). Tahap ini sesuai dengan kerangka ISO 13373 untuk *condition monitoring*.

**Tahap 2 — Diagnosis (*Fault Isolation*):** Menggunakan Bayesian network dengan struktur yang merepresentasikan *failure modes and effects analysis* (FMEA) HEAPS. Diagnosis inilah satu-satunya tahap dengan *operational link* ke AMP — hasilnya memicu *condition-based update* pada task kartu kerja pemeliharaan tanpa mengubah struktur program.

**Tahap 3 — Prognosis (*RUL Prediction*):** Menggunakan *particle filter* atau *long short-term memory* (LSTM) untuk memprediksi RUL komponen kritis. Hasil prognosis digunakan untuk *planning* aktivitas *unscheduled maintenance* di tingkat Part 145.

**Tahap 4 — Mitigasi (*Prescriptive Action*):** Menghasilkan rekomendasi aksi berbasis biaya melalui formulasi *Markov Decision Process* (MDP) dengan state $(s, t, c)$ di mana $s$ adalah state kesehatan, $t$ adalah waktu, dan $c$ adalah biaya kumulatif.

**Tahap 5 — Manajemen Kesehatan (*Health Management*):** *Closed-loop feedback* ke desain sistem (Part 21) melalui akumulasi data *fleet-wide*.

### 3.2. Diagram Alir Prosedur Integrasi

```
[Sensor Measurand HEAPS] 
        ↓
[Tahap 1: Deteksi Anomali] → Threshold Breach → Alert
        ↓
[Tahap 2: Diagnosis] ← Bayesian Network / FMEA HEAPS
        ↓
[Operational Link ke AMP via Condition-Based Update]
        ↓
[Tahap 3: Prognosis RUL] → Potential Link ke Part 145
        ↓
[Tahap 4: Mitigasi Preskriptif] → MDP-based Recommendation
        ↓
[Tahap 5: Health Management] → Fleet-wide Learning Loop
```

### 3.3. Standar Regulasi yang Diacu

Kerangka kerja ini secara eksplisit merujuk pada:
- **EASA Part-M / Part-CAMO** untuk manajemen *continuing airworthiness*
- **EASA Part 145** untuk organisasi perbaikan
- **EASA Part 21** untuk sertifikasi desain
- **MSG-3 Revisi 2022** untuk filosofi *task-driven maintenance*
- **ISO 13373-1/2/3** untuk *condition monitoring* dan *diagnostics*
- **SAE ARP6803** untuk protokol komunikasi data PHM pesawat

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Numerik: Degradasi PEMFC Stack pada HEAPS

Misalkan sebuah PEMFC stack pada HEAPS memiliki parameter degradasi sebagai berikut berdasarkan tipikal operasi *cruise* pesawat regional hidrogen (berdasarkan karakterisasi industri dan proyeksi literatur Jiménez-Roa *et al.*, 2026):

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Tegangan awal sel $X_0$ | 0.75 | V |
| *Drift coefficient* $\mu$ | 8.5 × 10⁻⁶ | V/jam |
| *Diffusion coefficient* $\sigma$ | 3.2 × 10⁻⁵ | V·√(jam)⁻¹ |
| *Failure threshold* $L$ | 0.55 | V |
| Jam operasi per hari | 6 | jam |
| Target EoL | 5,000 | jam |

**Langkah 1: Hitung waktu degradasi deterministik (waktu tren).**

Waktu tren (waktu yang dibutuhkan tren deterministik untuk mencapai threshold) adalah:

$$t_{\text{trend}} = \frac{L - X_0}{\mu} = \frac{0.55 - 0.75}{-8.5 \times 10^{-6}} = 23{,}529 \text{ jam}$$

**Langkah 2: Hitung probabilitas kegagalan pada $t = 5{,}000$ jam menggunakan inverse Gaussian distribution.**

RUL untuk model degradasi Wiener berthreshold $L$ dengan kondisi awal $X_0$ mengikuti *inverse Gaussian distribution*:

$$\text{RUL} \sim \text{IG}\left(\mu_L, \sigma_L^2\right)$$

di mana:

$$\mu_L = \frac{L - X_0}{\mu} = 23{,}529 \text{ jam}, \quad \sigma_L^2 = \frac{(L - X_0)^2 \cdot \sigma^2}{\mu^3}$$

Hitung $\sigma_L^2$:

$$\sigma_L^2 = \frac{(0.55 - 0.75)^2 \cdot (3.2 \times 10^{-5})^2}{(8.5 \times 10^{-6})^3} = \frac{0.04 \cdot 1.024 \times 10^{-9}}{6.141 \times 10^{-16}} = 6.67 \times 10^{4} \text{ jam}^2$$

CDF probabilitas kegagalan sebelum $t$ adalah:

$$P(\text{RUL} \leq t) = \Phi\left(\frac{\mu_L \cdot t}{\sigma_L^2} - 1\right) + e^{2/\sigma_L^2} \cdot \Phi\left(-\frac{\mu_L \cdot t}{\sigma_L^2} - 1\right)$$

Untuk $t = 5{,}000$ jam:

$$\frac{\mu_L \cdot t}{\sigma_L^2} = \frac{23{,}529 \cdot 5{,}000}{66{,}700} = 1764$$

Karena rasio ini sangat besar, $P(\text{RUL}$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
