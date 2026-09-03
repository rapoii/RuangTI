# 2430 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat pada Sektor MRO Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri Maintenance, Repair, and Overhaul (MRO) penerbangan global merupakan salah satu ekosistem rekayasa paling *capital-intensive* di dunia, dengan valuasi pasar lebih dari USD 100 miliar per tahun dan proyeksi pertumbuhan tahunan majemuk (CAGR) sebesar 4,3% sepanjang dekade berikutnya. Dalam konteks ini,航空公司 (operator penerbangan) menghadapi dilema struktural yang semakin kompleks: di satu sisi, regulator seperti FAA (Federal Aviation Administration), EASA (European Union Aviation Safety Agency), dan DGCA Indonesia melalui CASR Part 121 mensyaratkan tingkat keandalan dan keselamatan yang nyaris absolut; di sisi lain, tekanan ekonomi menuntut utilisasi armada (*fleet utilization*) yang setinggi mungkin dengan downtime seminimal mungkin. Hang Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menekankan bahwa jawaban terhadap paradoks ini terletak pada adopsi Reliability-Centred Maintenance (RCM) yang dikuantifikasi secara matematis, bukan sekadar diterapkan secara prosedural.

Secara historis, sektor MRO penerbangan mengoperasikan kebijakan pemeriksaan (*check policy*) hierarkis A/B/C/D yang sudah mapan sejak era jet komersial tahun 1960-an. *A-check* dilakukan setiap 400–600 *flight hours* (FH) dengan durasi rata-rata 50–100 *man-hours*; *B-check* setiap 6–8 bulan (±4.000 FH) selama 200–400 *man-hours*; *C-check* (hangar berat) setiap 20–24 bulan (±12.000 FH) selama 6.000–15.000 *man-hours*; serta *D-check* (full refurbishment) setiap 6–12 tahun (±48.000 FH) yang melibatkan pembongkaran struktural pesawat secara menyeluruh. Akan tetapi, Zhou (2024) mengidentifikasi bahwa model siklus D-check yang konvensional memiliki kelemahan fundamental: degradasi *life-cycle performance* bersifat **non-linear**, sehingga kebijakan interval tetap (*fixed-interval*) akan menghasilkan ketersediaan sub-optimal dan pemborosan sumber daya MRO. Lebih lanjut, paper DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) menyajikan kerangka perluasan yang menggabungkan *partial refurbishment* selama fase *mature-run* operasi armada, sehingga mengurangi kebutuhan D-check penuh dan memperpanjang *time-on-wing* komponen kritis. Urgensi ekonomis dari optimalisasi ini sangat jelas: setiap jam *ground time* pesawat narrow-body seperti Boeing 737 atau Airbus A320 yang tidak terbang menimbulkan *opportunity cost* sebesar USD 5.000–15.000 per jam dalam bentuk *lost revenue*. Oleh karena itu, pengembangan model ketersediaan (*availability model*) yang mampu membuktikan eksistensi nilai optimal menjadi kontribusi teoretis dan praktis yang sangat signifikan bagi komunitas teknik industri penerbangan.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dibangun Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) bertumpu pada tiga pilar matematis: (1) fungsi keandalan *Weibull* untuk karakterisasi degradasi non-linear; (2) model ketersediaan *steady-state* untuk mengevaluasi performa operasional; serta (3) algoritma optimasi untuk menentukan interval pemeriksaan yang memaksimalkan ketersediaan. Paper ini secara eksplisit mendemonstrasikan bahwa model ketersediaan memiliki **nilai optimal internal**, sebuah properti konveks yang menjamin konvergensi algoritma pencarian.

### 2.1 Model Degradasi dan Fungsi Keandalan

Distribusi Weibull dua parameter digunakan untuk memodelkan waktu-antar-gagal (*time-to-failure*):

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-(t/\eta)^{\beta}}, \quad R(t) = e^{-(t/\eta)^{\beta}}$$

di mana $\beta > 0$ adalah parameter bentuk (*shape*), $\eta > 0$ adalah parameter skala (*scale*), dan $R(t)$ adalah fungsi keandalan pada waktu $t$. Untuk komponen авиа (pesawat) fase *wear-out*, $\beta > 1$ mencirikan laju gagal yang meningkat.

### 2.2 Model Ketersediaan Steady-State

Ketersediaan sesaat (*instantaneous availability*) pada waktu $t$ dalam satu siklus inspeksi $T$ didefinisikan sebagai:

$$A(T) = \frac{1}{T} \int_{0}^{T} a(t)\, dt$$

di mana $a(t)$ adalah probabilitas sistem beroperasi pada waktu $t$. Untuk sistem dengan kebijakan *age-replacement* (penggantian berdasarkan usia) dan interval inspeksi tetap $T$, ketersediaan *long-run* dapat diformulasikan sebagai:

$$A_{\infty}(T) = \frac{T \cdot R(T) + \int_{0}^{T} R(t)\, dt}{T \cdot R(T) + \int_{0}^{T} R(t)\, dt + T_{pm} + T_{cm}\left[1 - R(T)\right]}$$

dengan $T_{pm}$ adalah waktu rata-rata *preventive maintenance* dan $T_{cm}$ adalah waktu rata-rata *corrective maintenance*.

### 2.3 Fungsi Biaya Siklus Hidup (Life-Cycle Cost)

Total biaya yang diharapkan per satuan waktu operasi:

$$C_{total}(T) = \frac{C_{pm} + C_{cm}\left[1 - R(T)\right]}{T \cdot R(T) + \int_{0}^{T} R(t)\, dt}$$

Suku $\left[1 - R(T)\right]$ merepresentasikan probabilitas kumulatif kegagalan dalam satu siklus, $C_{PM}$ adalah biaya *preventive maintenance*, dan $C_{CM}$ adalah biaya *corrective maintenance* (termasuk *AOG — Aircraft On Ground* penalty).

### 2.4 Optimasi Interval dengan D-Check Parsial

Zhou (2024) memperkenalkan variabel keputusan $k$ yang merepresentasikan jumlah *partial refurbishment* yang dilakukan selama interval antara dua D-check penuh:

$$T_{cycle} = k \cdot T_{partial} + T_{D-check}$$

dengan fungsi tujuan:

$$\max_{T_{partial}, k} A_{\infty}(T_{partial}, k) \quad \text{subject to} \quad k \in \mathbb{Z}^{+}, T_{partial} > 0$$

Eksistensi nilai optimal dibuktikan melalui analisis konveksitas dari $A_{\infty}(T)$, yang dijamin memiliki *maximum point* unik pada interval $(0, \infty)$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari kebijakan pemeliharaan hirarkis berbasis RCM memerlukan SOP yang rigid dan terdokumentasi sesuai standar SAE JA1011, ATA MSG-3, dan regulasi CASR Part 121. Berikut adalah arsitektur SOP yang diadaptasi dari framework Zhou (2024):

**Tahap 1 — Akuisisi Data Telemetri:** Kumpulkan data operasi historis minimal 3 tahun, mencakup *flight hours*, *flight cycles*, *unscheduled removal rate* (URR), *mean time between failure* (MTBF), dan *mean time to repair* (MTTR) untuk setiap komponen kritis (*significant items* menurut MSG-3).

**Tahap 2 — Penentuan *Significant Items*:** Gunakan *logistic regression* atau *fault tree analysis* untuk mengidentifikasi 15–25 komponen/significant items yang menyumbang >80% risiko kegagalan sistem (prinsip Pareto).

**Tahap 3 — Estimasi Parameter Weibull:** Terapkan *maximum likelihood estimation* (MLE) untuk mendapatkan estimasi $\hat{\beta}$ dan $\hat{\eta}$ per komponen:

$$\ell(\beta, \eta) = \sum_{i=1}^{n} \left[\ln(\beta) - \beta\ln(\eta) + (\beta-1)\ln(t_i) - \left(\frac{t_i}{\eta}\right)^{\beta}\right]$$

**Tahap 4 — Optimasi Interval Pemeriksaan:** Selesaikan masalah optimasi ketersediaan menggunakan *golden-section search* atau *Newton-Raphson* pada fungsi $A_{\infty}(T)$.

**Tahap 5 — Penjadwalan Partial Refurbishment:** Tentukan nilai optimal $k$ (jumlah partial refurbishment) yang meminimalkan total *life-cycle cost* sambil mempertahankan $A_{\infty} \geq 0{,}98$ (threshold operasional航空公司).

**Tahap 6 — Monitoring Berkelanjutan & Recertification:** Lakukan audit 6-bulanan terhadap parameter $\beta, \eta$ menggunakan *Bayesian update* untuk mengakomodasi pergeseran modus gagal (*failure mode shift*).

Diagram alir keputusan untuk pemilihan jenis check:

```
[Start] → [Data Telemetry] → [Weibull MLE Fit]
              ↓
         [β > 1?]
        /        \
      Ya          Tidak → [Run-to-Failure Policy]
        ↓
   [Compute A∞(T)]
        ↓
[Optimize T via Golden-Section]
        ↓
  [A∞ ≥ 0.98?]
   /        \
 Tidak      Ya
  ↓          ↓
[Reduce T]  [Schedule Partial Refurbishment k]
              ↓
         [SOP Implementation]
              ↓
       [Bayesian Recertification]
              ↓
           [End Loop]
```

---

## 4. Studi Kasus Kuantitatif Industri