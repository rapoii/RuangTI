# 1566 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil global merupakan salah satu sektor *capital-intensive* dengan struktur biaya operasional yang sangat sensitif terhadap keputusan pemeliharaan. Sebuah pesawat窄-body modern seperti Airbus A320 atau Boeing 737 memiliki nilai aset antara USD 50–110 juta per unit, dengan siklus hidup teknis (*technical life-cycle*) mencapai 25–30 tahun. Diperkirakan biaya pemeliharaan, perbaikan, dan overhaul (MRO) menyumbang 10–15% dari total biaya operasional maskapai (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Angka ini menjadi krusial ketika dikaitkan dengan target ketersediaan armada (*fleet availability*), karena setiap jam pesawat tidak beroperasi (*aircraft on ground* — AOG) dapat menimbulkan kerugian pendapatan langsung sebesar USD 8.000–25.000 untuk pesawat narrow-body, dan jauh lebih tinggi untuk wide-body.

Hang Zhou (2024) dalam penelitiannya menyoroti bahwa industri penerbangan telah lama mengadopsi kebijakan pemeriksaan bertingkat (*hierarchical check policy*) berlabel A/B/C/D sebagai tulang punggung operasional pemeliharaan. Pemeriksaan A-check dilakukan setiap 400–600 jam terbang dengan durasi singkat (8–12 jam), B-check setiap 6–8 bulan (mulai jarang dilakukan dalam praktik modern), C-check setiap 20–24 bulan dengan downtime 1–2 minggu, dan D-check sebagai *heavy maintenance* penuh yang membutuhkan waktu 1–2 bulan downtime di hangar. Meskipun kebijakan ini sudah terstandarisasi, permasalahan fundamental yang diangkat Zhou adalah bagaimana menentukan jadwal *life-cycle* yang optimal ketika degradasi performa aset bersifat **non-linear** seiring bertambahnya usia pesawat.

Urgensi ekonomi-technis dari riset ini terletak pada kenyataan bahwa banyak maskapai mengalami dilema struktural: terlalu sering melakukan D-check menghabiskan biaya dan menurunkan ketersediaan, namun terlalu jarang meningkatkan risiko *unscheduled removal* dan menurunkan keselamatan. Zhou (2024, [DOI:10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memperkenalkan kerangka kebijakan MRO yang menggabungkan siklus D-check penuh dengan *partial refurbishments* selama fase *mature-run* operasi pesawat, dengan tujuan membuktikan eksistensi nilai optimum pada model ketersediaan. Pendekatan ini menjawab kebutuhan akan kebijakan pemeliharaan yang secara matematis optimal, bukan sekadar berbasis aturan kalender (*calendar-based*) yang konvensional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear

Zhou (2024) memodelkan degradasi kondisi teknis pesawat menggunakan fungsi *cumulative hazard* dengan laju kegagalan yang bergantung pada usia dan akumulasi siklus:

$$H(t) = \int_{0}^{t} \lambda(\tau) \, d\tau$$

di mana $\lambda(\tau)$ adalah *instantaneous failure rate* yang dimodelkan mengikuti distribusi **Weibull non-monoton** untuk menangkap perilaku *bathtub curve*:

$$\lambda(\tau) = \frac{\beta}{\eta} \left(\frac{\tau}{\eta}\right)^{\beta-1} \exp\left(\gamma \left(\frac{\tau}{\eta}\right)\right)$$

dengan parameter bentuk $\beta$, skala $\eta$, dan faktor akselerasi degradasi $\gamma$ yang merepresentasikan efek penuaan (*aging*) pada fase mature-run (Zhou, 2024, [DOI:10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

### 2.2 Formulasi Ketersediaan Hirarkis A/B/C/D

Ketersediaan sesaat (*instantaneous availability*) pada interval antar-pemeliharaan didefinisikan sebagai:

$$A(t) = \frac{T_{op}(t)}{T_{op}(t) + T_m(t)}$$

Untuk kebijakan hirarkis dengan $n$ *partial refurbishments* di antara dua D-check penuh, total downtime dalam satu siklus hidup panjang adalah:

$$T_m^{total} = T_D + \sum_{i=1}^{n} T_{PR,i}$$

di mana $T_D$ adalah durasi D-check dan $T_{PR,i}$ adalah durasi *partial refurbishment* ke-$i$. Ketersediaan *long-run* dihitung dengan teorema *renewal reward*:

$$\bar{A} = \frac{\mathbb{E}[T_{op}]}{\mathbb{E}[T_{op}] + \mathbb{E}[T_m]}$$

### 2.3 Optimasi Waktu Operasi Maksimum

Zhou (2024) membuktikan bahwa fungsi tujuan $\max T_{op}(n, T_D)$ memiliki eksistensi nilai optimum melalui turunan pertama:

$$\frac{\partial T_{op}}{\partial n} = 0 \implies n^* = \left\lfloor \sqrt{\frac{C_D \cdot \lambda_{max}}{C_{PR} \cdot \lambda_{avg}}} \right\rfloor$$

di mana $C_D$ dan $C_{PR}$ berturut-turut adalah biaya D-check dan *partial refurbishment*, sedangkan $\lambda_{max}$ dan $\lambda_{avg}$ adalah laju kegagalan maksimum dan rata-rata. Kondisi orde dua $\frac{\partial^2 T_{op}}{\partial n^2} < 0$ mengonfirmasi bahwa solusi tersebut merupakan **maksimum global** (Zhou, 2024, [DOI:10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 2.4 Reliabilitas pada Interval Antar-Check

Reliabilitas komponen selama interval $\Delta t$ antara dua tindakan pemeliharaan preventif:

$$R(\Delta t) = \exp\left(-\int_{t_0}^{t_0 + \Delta t} \lambda(\tau) \, d\tau\right)$$

Kebijakan hirarkis yang optimal mensyaratkan $R(\Delta t_{PR}) \geq R_{threshold}$ sebagai *constraint*, biasanya $R_{threshold} = 0.95$ untuk komponen kritis keselamatan (*flight-critical components*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti alur prosedural yang dirancang oleh Zhou (2024, [DOI:10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) sebagai berikut:

**Tahap 1 — Klasifikasi Komponen & Analisis Kegagalan Fungsional (FMECA)**
Seluruh komponen pesawat diklasifikasikan ke dalam tier 1 (flight-critical, mis. mesin, sistem hidrolik), tier 2 (mission-critical, mis. avionik), dan tier 3 (non-critical). Setiap tier memiliki ambang batas $R_{threshold}$ berbeda dan frekuensi inspeksi yang proporsional.

**Tahap 2 — Estimasi Parameter Degradasi**
Data historis *unscheduled removal* dan *shop visit* diolah melalui *maximum likelihood estimation* (MLE) untuk mendapatkan $\beta, \eta, \gamma$ dari model Weibull terakselerasi. Pendekatan ini menggunakan dataset minimal 3.000 *flight cycles* untuk menjamin signifikansi statistik.

**Tahap 3 — Penentuan Jumlah Partial Refurbishment Optimal**
Menggunakan formula $n^* = \lfloor \sqrt{(C_D \cdot \lambda_{max})/(C_{PR} \cdot \lambda_{avg})} \rfloor$, insinyur menentukan berapa kali *partial refurbishment* dilakukan di antara dua D-check. Untuk armada narrow-body tipikal dengan $C_D/C_{PR} \approx 8$, nilai optimal yang muncul adalah $n^* \in \{2,3\}$.

**Tahap 4 — Penjadwalan Adaptif Berbasis Kondisi (*Condition-Based Scheduling*)**
Berbeda dengan penjadwalan kalender murni (*hard-time limit*), sistem mengadopsi *on-condition monitoring* menggunakan sensor *health monitoring* (engine vibration spectrum analysis, oil debris monitoring, structural fatigue sensors). Jika degradasi aktual menyimpang dari prediksi model Weibull lebih dari 15%, jadwal *partial refurbishment* dimajukan (*front-loaded*).

**Tahap 5 — Audit & Feedback Loop**
Setelah setiap siklus D-check, data downtime aktual, biaya aktual, dan availability aktual dibandingkan dengan prediksi model. Parameter $\beta, \eta, \gamma$ di-*re-estimate* secara berkala menggunakan *Bayesian update* untuk menjaga akurasi model terhadap perubahan operasional.

Diagram alir keputusan dapat diringkas sebagai:

```
INPUT: Data Flight Hours, Shop Visits, Sensor Telemetry
    ↓
[FMECA & Klasifikasi Komponen]
    ↓
[Estimasi Parameter Weibull (β,η,γ)]
    ↓
[Hitung n* optimal] → Constraint Check R(Δt) ≥ 0.95
    ↓ Ya          ↓ Tidak
[Lanjut]    [Tunda / Inspeksi Lanjutan]
    ↓
[Penjadwalan Partial Refurbishment & D-Check]
    ↓
[Eksekusi MRO]
    ↓
[Bayesian Update Parameter]
    ↓
OUTPUT: Jadwal Pemeliharaan Adaptif + Laporan Ketersediaan
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah maskapai regional mengoperasikan 20 unit Airbus A320ceo dengan utilisasi rata-rata 3.200 jam terbang/tahun. Tim MRO ingin menentukan kebijakan hirarkis A/B/C/D optimal menggunakan kerangka Zhou (2024).

### 4.1 Parameter Input Industri

| Parameter | Nilai | Sumber/Asumsi |
|-----------|-------|---------------|
| $\beta$ (Weibull shape) | 2.4 | Data historis fleet |
| $\eta$ (Weibull scale, jam) | 18.500 | MLE estimation |
| $\gamma$ (faktor aging) | 0.12 | Fase mature-run |
| $C_D$ (biaya D-check) | USD 3.500.000 | Benchmark industri |
| $C_{PR}$ (biaya partial refurbishment) | USD 450.000 | Benchmark industri |
| $\lambda_{max}$ (failure rate puncak) | $2.1 \times 10^{-4}$/jam | Komponen kritis |
| $\lambda_{avg}$ (failure rate rata-rata) | $8.5 \times 10^{-5}$/jam | Agregat fleet |
| Durasi D-check ($T_D$) | 720 jam (30 hari) | Standar industri |
| Durasi partial refurbishment ($T_{PR}$) | 96 jam (4 hari) | Standar industri |

### 4.2 Perhitungan Jumlah Partial Refurbishment Optimal

$$n^* = \left\lfloor \sqrt{\frac{C_D \cdot \lambda_{max}}{C_{PR} \cdot \lambda_{avg}}} \right\rfloor = \left\lfloor \sqrt{\frac{3.500.000 \times 2.1 \times 10^{-4}}{450.000 \times 8.5 \times 10^{-5}}} \right\rfloor$$

$$n^* = \left\lfloor \sqrt{\frac{735}{38.25}} \right\rfloor = \left\lfloor \sqrt{19.215} \right\rfloor = \lfloor 4.38 \rfloor = 4$$

**Interpretasi:** Di antara dua D-check penuh, optimal dilakukan **4 partial refurbishments** (Zhou, 2024, [DOI:10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 4.3 Perhitungan Interval Partial Refurbishment

Interval antar *partial refurbishment* dalam siklus 6 tahun (siklus D-check pada narrow-body):

$$T_{interval} = \frac{6 \times 365 \times 24 \times U}{n^* + 1}$$

dengan utilisasi harian $U = 8.7$ jam/hari:

$$T_{interval} = \frac{6 \times 365 \times 24 \times 8.7}{5} = \frac{457.416}{5} = 91.483 \text{ jam terbang}$$

Set