# 2862 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu ekosistem *asset-heavy* dengan karakteristik degradasi non-linear, investasi modal sangat tinggi (satu pesawat窄-body seperti Boeing 737-800 bernilai USD 50–60 juta), serta tekanan regulasi keselamatan yang ketat dari otoritas seperti FAA, EASA, dan CASA. Setiap jam *ground time* (GT) pesawat terbang komersial dapat menimbulkan kerugian pendapatan langsung sebesar USD 8.000–25.000 tergantung rute dan kelas armada, sehingga ketersediaan armada (*fleet availability*) menjadi variabel strategis yang menentukan profitabilitas maskapai. Dalam konteks inilah Zhou (2024) memperkenalkan kerangka kebijakan MRO hirarkis A/B/C/D yang memaksimalkan ketersediaan armada berdasarkan *maximum available operation time* (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Pemeliharaan penerbangan mengikuti standar paket inspeksi terstruktur yang umum digunakan oleh OEM dan regulator: **A-check** (≈400–600 jam terbang, 24–50 jam *downtime*), **B-check** (≈6–8 bulan, 100–250 jam *downtime*), **C-check** (≈20–24 bulan, 1–2 bulan *downtime* dengan inspeksi *heavy maintenance*), dan **D-check** (≈6–12 tahun, 2–3 bulan *downtime* berupa *full teardown* dan refurbishment total). Karakteristik unik yang diangkat Zhou (2024) adalah integrasi antara *full refurbishment* D-check dengan *partial refurbishment* di fase *mature-run* operasi pesawat. Sebelumnya, literatur RCM klasik (Nowlan & Heap, 1978; Moubray, 1997) cenderung memperlakukan siklus D sebagai *renewal* total yang menghapus seluruh memori degradasi, padahal realitanya degradasi komponen struktural dan avionik kritis bersifat kumulatif dan *non-linear*.

Urgensi ekonominya cukup jelas: menurut IATA *Maintenance Cost Benchmarking Report*, biaya MRO menyita 12–18% dari *operating cost* maskapai dan terus meningkat akibat penuaan armada global (usia rata-rata >12 tahun). Zhou (2024) menunjukkan bahwa penjadwalan paket inspeksi yang suboptimal menurunkan *fleet availability* 3–7% per tahun, yang pada armada 100 pesawat ekuivalen dengan kerugian USD 200–400 juta/tahun (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Studi lanjutan Zhou (2024) dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) memperluas analisis dengan memperhatikan interaksi *scheduling risk* antara overhaul penuh dan *partial refurbishment* di zona mature operation. Konteks ini menjadikannya penting bagi insinyur industri yang terlibat dalam *reliability engineering*, *fleet planning*, dan *logistics optimization* di industri penerbangan, maupun adaptasinya ke sektor energi, kereta api, dan maritim.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Ketersediaan Stasioner dan Teori Pembaruan

Dasar analitis yang digunakan Zhou (2024) adalah **Renewal Reward Theorem (RRT)**. Untuk sistem yang diperbarui (*renewed*) setiap kali paket inspeksi selesai dilakukan, ketersediaan jangka panjang (*steady-state availability*) didefinisikan sebagai:

$$A_{ss} = \lim_{t \to \infty} \frac{U(t)}{U(t) + D(t)} = \frac{E[U]}{E[U] + E[D]}$$

di mana $E[U]$ adalah ekspektasi waktu beroperasi per siklus pembaruan dan $E[D]$ adalah ekspektasi *downtime* total. Untuk kebijakan hirarkis empat tingkat, jika $T_D$ adalah interval D-check, maka dalam satu siklus D terjadi $n_C$ buah C-check, $n_B$ buah B-check, dan $n_A$ buah A-check dengan relasi:

$$n_C = \left\lfloor \frac{T_D}{T_C} \right\rfloor, \quad n_B = n_C \cdot \left\lfloor \frac{T_C}{T_B} \right\rfloor, \quad n_A = n_C \cdot \left\lfloor \frac{T_C}{T_B} \right\rfloor \cdot \left\lfloor \frac{T_B}{T_A} \right\rfloor$$

### 2.2 Model Degradasi Non-Linear

Zhou (2024) memodelkan degradasi kinerja sepanjang *life-cycle* dengan fungsi *power-law* non-linear yang lebih realistis dibanding asumsi degradasi linier klasik:

$$R(t) = R_0 - \alpha \cdot t^{\beta}, \quad 0 < \beta < 2$$

di mana $R(t)$ adalah reliabilitas residual pada waktu $t$, $R_0$ reliabilitas awal, $\alpha$ koefisien degradasi, dan $\beta$ eksponen non-linearitas. Ketika $R(t)$ turun di bawah ambang kritis $R_c$, paket *partial refurbishment* diperlukan. Model ini mengizinkan *partial refurbishment* memulihkan reliabilitas hanya sebagian:

$$R(t^+) = R(t^-) + \gamma \cdot (R_0 - R(t^-)), \quad 0 < \gamma < 1$$

di mana $\gamma$ adalah faktor efektivitas refurbishment parsial (umumnya $0.4 \leq \gamma \leq 0.7$).

### 2.3 Formulasi Optimasi

Masalah optimasi ketersediaan armada diformulasikan sebagai:

$$\max_{T_A, T_B, T_C, T_D} \quad A_{fleet} = \frac{1}{N_{fleet}} \sum_{i=1}^{N_{fleet}} A_i(T_A, T_B, T_C, T_D)$$

dengan kendala:

$$\sum_{j \in \{A,B,C,D\}} \frac{n_j \cdot t_j^{down}}{T_D} \leq \tau_{max}^{down}$$

$$T_{j+1} \geq k_j \cdot T_j, \quad \forall j \in \{A,B,C\}$$

$$\text{NPV}_{life} = \sum_{n=0}^{N_D-1} \frac{CF_n}{(1+r)^n} \geq 0$$

di mana $\tau_{max}^{down}$ adalah ambang toleransi *downtime* per D-cycle, $k_j$ adalah faktor *scheduling ratio* regulator, dan $NPV_{life}$ adalah *Net Present Value* siklus hidup armada. Zhou (2024) membuktikan secara matematis eksistensi nilai optimal $T_D^*$ dengan menggunakan kondisi Kuhn-Tucker dan konvektivitas fungsi tujuan pada domain kendala (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 2.4 Availability Hirarkis Tertimbang

Karena downtime C-check memaksa pembatalan slot terbang dalam jumlah besar, Zhou (2024) memperkenalkan bobot hierarkis:

$$A_{hier} = \frac{\sum_{j \in \{A,B,C,D\}} w_j \cdot E[U_j]}{\sum_{j \in \{A,B,C,D\}} w_j \cdot (E[U_j] + E[D_j])}, \quad \sum w_j = 1$$

dengan $w_D > w_C > w_B > w_A$ karena kontribusi strategis D-check terhadap umur pakai pesawat.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Zhou (2024) mengusulkan arsitektur implementasi enam-tahap yang selaras dengan standar SAE JA1011/1012 (RCM) dan MSG-3 (Maintenance Steering Group):

**Tahap 1 – Akuisisi Data Telemetri & FMECA.** Data *flight data recorder*, *continuous airworthiness maintenance program*, dan *failure mode* historis dikumpulkan. Tujuh pertanyaan RCM Moubray diterapkan untuk setiap *significant item*.

**Tahap 2 – Penentuan Fungsi & Kegagalan.** Setiap subsistem diklasifikasikan berdasarkan konsekuensi kegagalan (*safety, operational, economic, hidden*), dan tugas pemeliharaan RCM dipilih dari delapan opsi Moubray.

**Tahap 3 – Penentuan Interval Hirarkis Awal.** Berdasarkan rekomendasi OEM (misalnya Boeing MSG-3 untuk B737), interval awal $T_A^{(0)}, T_B^{(0)}, T_C^{(0)}, T_D^{(0)}$ ditetapkan.

**Tahap 4 – Pemodelan Degradasi & Kalibrasi Parameter.** Model $R(t) = R_0 - \alpha t^{\beta}$ dikalibrasi menggunakan data historis dengan metode *maximum likelihood estimation* (MLE) atau *least squares* pada data Weibull.

**Tahap 5 – Optimasi Hirarkis.** Algoritma *sequential quadratic programming* (SQP) atau *genetic algorithm* (GA) dengan *fitness function* $A_{hier}$ dijalankan untuk menemukan $T_D^*$.

**Tahap 6 – Validasi Monte Carlo & Implementasi.** Simulasi Monte Carlo (≥10.000 run) memvalidasi robustnes solusi sebelum di-roll out ke *line