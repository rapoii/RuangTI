# 2270 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Maintenance, Repair, and Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy…* (versi komplementer). DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil komersial global berdiri di atas pondasi *asset-intensive* dengan tingkat utilisasi yang ekstrem: sebuah pesawat narrow-body seperti Boeing 737 atau Airbus A320 dapat terbang rata-rata 3.000–4.500 jam per tahun, atau setara 8–12 jam per hari. Dalam lanskap operasional tersebut, ketersediaan armada (*fleet availability*) bukan sekadar metrik teknis, melainkan variabel strategis yang secara langsung menentukan profitabilitas maskapai, kepatuhan regulasi, dan keamanan penumpang. Zhou (2024) — DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) — menegaskan bahwa *Reliability-Centered Maintenance* (RCM) merupakan kerangka kerja yang sangat dihargai di industri *asset-heavy* karena kemampuannya dalam **mengkuantifikasi degradasi non-linier kinerja siklus-hidup** dan mengoptimalkan operasi dengan tetap menjaga dimensi keselamatan (*safety*) dan ketersediaan (*availability*).

Sektor Maintenance, Repair, and Overhaul (MRO) penerbangan global bernilai lebih dari USD 100 miliar pada 2024, dengan pangsa pasar terbesar berada di kawasan Asia-Pasifik. Di dalamnya, struktur kebijakan pemeliharaan *hierarchical A/B/C/D* yang telah menjadi standar industri sejak konvensi FAA dan EASA, merupakan manifestasi paling konkret dari RCM. Checks A dan B adalah inspeksi ringan–sedang dengan interval pendek (ratusan jam terbang), C-check adalah inspeksi besar dengan interval bulanan–tahunan, sedangkan D-check adalah *overhaul* penuh yang melucuti seluruh interior dan struktur pesawat untuk inspeksi mendalam. Zhou (2024) mencatat bahwa implementasi RCM pada sistem sekompleks hierarki A/B/C/D ini bukan perkara mudah karena: (i) interdependensi degradasi antara subsistem, (ii) heterogenitas sumber daya (hangar, teknisi bersertifikat, suku cadang), dan (iii) persyaratan *airworthiness* yang tidak dapat dinegosiasikan.

Urgensi ekonomis makin nyata ketika setiap jam *ground time* pesawat narrow-body menimbulkan *opportunity cost* antara USD 8.000–15.000, sementara untuk wide-body seperti Boeing 777 atau Airbus A350 dapat menembus USD 25.000 per jam. Atas dasar itulah Zhou (2024) memperkenalkan kerangka kebijakan MRO yang secara simultan mengintegrasikan siklus D-check penuh dan refurbishment parsial selama fase *mature-run* operasi pesawat. Optimalisasi dilakukan dengan **maksimisasi waktu operasi tersedia** (*maximum available operation time*), dan dibuktikan secara matematis bahwa model ketersediaan memiliki **nilai optimal eksis dan unik** — sebuah kontribusi yang sangat dibutuhkan oleh perencana pemeliharaan armada di industri penerbangan modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linier Siklus Hidup

Kerangka Zhou (2024) memodelkan reliabilitas subsistem pesawat menggunakan distribusi Weibull dua-parameter yang telah lama diadopsi dalam rekayasa keandalan:

$$R(t) = \exp\!\left[-\left(\frac{t}{\eta}\right)^{\beta}\right], \quad t \geq 0$$

dengan $\beta > 0$ adalah parameter bentuk (*shape*) yang merepresentasikan karakteristik degradasi, dan $\eta > 0$ adalah parameter skala (*scale*) dalam satuan jam terbang atau siklus. Laju kegagalan (*hazard rate*) sesaat didefinisikan sebagai:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta - 1}$$

Ketika $\beta > 1$, subsistem memasuki *wear-out phase* — sesuai dengan perilaku struktural pesawat tua; ketika $\beta < 1$, subsistem berada pada *infant-mortality*; dan ketika $\beta = 1$, laju kegagalan konstan sesuai proses Poisson.

### 2.2 Formulasi Hierarki Pemeliharaan A/B/C/D

Misalkan interval antar-pemeliharaan untuk masing-masing tingkat didefinisikan sebagai $\tau_A, \tau_B, \tau_C, \tau_D$ dengan hubungan divisibilitas:

$$\tau_D = n_C \cdot \tau_C = n_C \cdot n_B \cdot \tau_B = n_C \cdot n_B \cdot n_A \cdot \tau_A$$

dengan $n_A, n_B, n_C \in \mathbb{Z}^{+}$ adalah jumlah siklus tingkat bawah yang menyusun satu siklus tingkat di atasnya. Misalnya, tipikal industri: $\tau_A = 500$ jam terbang, $\tau_B = 8$ bulan ($\approx 2.500$ jam), $\tau_C = 24$ bulan ($\approx 7.500$ jam), $\tau_D = 8$ tahun ($\approx 30.000$ jam), sehingga $n_A = 5, n_B = 3, n_C = 4$.

Waktu downtime untuk masing-masing tingkat dimodelkan:

$$T_{d,A} \ll T_{d,B} < T_{d,C} \ll T_{d,D}$$

dengan *order of magnitude*: $T_{d,A} \sim$ jam, $T_{d,B} \sim$ hari, $T_{d,C} \sim$ minggu, $T_{d,D} \sim$ bulan. Zhou (2024) memperkenalkan variabel keputusan biner $\delta_i \in \{0,1\}$ untuk setiap titik refurbishment parsial yang memungkinkan *intermediate rejuvenation* tanpa menunggu D-check penuh, sehingga *effective age* sistem setelah tindakan pemeliharaan ke-$i$ menjadi:

$$\tilde{t}_i = t_i \cdot (1 - r_i \cdot \delta_i)$$

dengan $r_i \in [0,1]$ adalah tingkat pemulihan (*renewal factor*) tindakan pemeliharaan ke-$i$.

### 2.3 Model Ketersediaan Stasioner (*Steady-State Availability*)

Menggunakan teorema *renewal-reward*, ketersediaan jangka panjang sistem hirarkis dimodelkan sebagai:

$$A(\tau_A, \tau_B, \tau_C, \tau_D, \delta) = \frac{\text{E}[U]}{\text{E}[U] + \text{E}[D]}$$

dengan $\text{E}[U]$ adalah ekspektasi waktu operasi (uptime) per siklus renewal dan $\text{E}[D]$ adalah ekspektasi total downtime (akumulasi A + B + C + D checks). Eksplisitnya:

$$A = \frac{\tau_D + \sum_{k=1}^{n_C \cdot n_B \cdot n_A} \Delta U_k}{(\tau_D + \sum_{k=1}^{n_C \cdot n_B \cdot n_A} \Delta U_k) + \left( n_A T_{d,A} + n_B T_{d,B} + n_C T_{d,C} + T_{d,D} + \sum_{k=1}^{n_C \cdot n_B \cdot n_A} \Delta D_k \cdot \delta_k \right)}$$

### 2.4 Masalah Optimasi

Zhou (2024) merumuskan masalah optimasi sebagai:

$$\max_{\tau_A,\tau_B,\tau_C,\tau_D,\delta} \quad A(\tau_A,\tau_B,\tau_C,\tau_D,\delta)$$

$$\text{s.t.} \quad R(\tau_i) \geq R_{\min}, \quad i \in \{A,B,C,D\}$$

$$\quad\quad \sum C_{\text{ops}} \leq C_{\text{budget}}$$

$$\quad\quad \tau_D \in [\tau_{D,\min}, \tau_{D,\max}]$$

dengan kendala reliabilitas minimal $R_{\min}$ (umumnya 0,95 untuk komponen kritis *fail-safe*), kendala anggaran operasional, dan jendela waktu D-check yang dibatasi oleh regulasi *airworthiness directives*. Kondisi optimalitas orde pertama memberikan:

$$\frac{\partial A}{\partial \tau_i} = 0, \quad i \in \{A,B,C,D\}$$

dan Zhou (2024) membuktikan secara matematis bahwa solusi optimal $(\tau_A^*, \tau_B^*, \tau_C^*, \tau_D^*, \delta^*)$ **eksis dan tunggal** dalam domain feasible — sebuah hasil yang menjadi landasan utama makalah.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis Zhou (2024) mengikuti protokol SOP berlapis yang selaras dengan standar SAE JA1011, MSG-3, dan FAR Part 121. Tahapan sistematisnya adalah:

**Tahap 1 — Karakterisasi Sistem & Degradasi.** Lakukan FMEA (*Failure Modes and Effects Analysis*) untuk seluruh *Significant Items* pesawat sesuai dokumen MSG-3. Setiap item diklasifikasikan ke dalam kategori konsekuensi: *safety-evident (SE)*, *safety-significant (SS)*, *economic-evident (EE)*, *economic-significant (ES)*, dan *non-significant*. Estimasi parameter $\beta, \eta$ dari data historis *hard-time* dan *on-condition* menggunakan MLE (*Maximum Likelihood Estimation*).

**Tahap 2 — Penentuan Interval Baseline.** Gunakan model degradasi Weibull untuk menentukan interval $\tau_i$ sedemikian rupa sehingga $R(\tau_i) = 0{,}95$ untuk komponen safety-kritis, dan $R(\tau_i) = 0{,}90$ untuk komponen ekonomis.

**Tahap 3 — Penjadwalan Refurbishment Parsial (PR).** Zhou (2024) memperkenalkan *Partial Refurbishment Decision Points* (PRDP) yang diaktifkan ketika indikator degradasi turun di bawah ambang:

$$\text{PRDP}_k = \left\{ \delta_k = 1 \;\middle|\; h(t_k) \geq \theta \right\}$$

dengan $\theta$ adalah ambang laju kegagalan yang ditetapkan insinyur.

**Tahap 4 — Integrasi D-Check Penuh.** D-check tetap dilakukan pada $\tau_D^*$, namun dengan *scope* yang dimodifikasi karena sebagian item sudah di-*refurbish* melalui PRDP sehingga total downtime berkurang 15–25%.

**Tahap 5 — Monitoring & Feedback Loop.** Data telemetri pesawat (ACMS, *Health and Usage Monitoring System*) dimasukkan ke *digital twin* untuk kalibrasi ulang parameter Weibull secara berkala setiap 6 bulan.

Diagram alur keputusan RCM hierarkis Zhou (2024):

```
[Mulai Siklus τ_D]
       │
       ▼
[t < τ_A?]──Ya──▶[A-check: δ=0 default]
       │              │
      Tidak           ▼
       │         [Lanjut operasi]
       ▼              │
[t < τ_B?]──
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
