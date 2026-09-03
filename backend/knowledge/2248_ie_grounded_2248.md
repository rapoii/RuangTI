# 2248 — Analisis Beban Kerja Mental Karyawan Mitra Shopee Express dengan Metode NASA-TLX: Integrasi Work Sampling untuk Optimalisasi Operasional Last-Mile Delivery

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Ergonomi Kognitif, Psikologi Kerja, dan Manajemen Operasi Logistik
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Publishing Series — UPS)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal (UPS)*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai lebih dari US$130 miliar pada tahun 2025 (Bain & Company, 2022) telah mengubah secara fundamental struktur rantai pasok e-commerce nasional. Shopee, sebagai salah satu *marketplace* dengan pangsa pasar dominan di Asia Tenggara, mengoperasikan Shopee Express sebagai unit logistik internal (*in-house logistics*) untuk menjamin *Service Level Agreement* (SLA) pengiriman 2–3 hari di wilayah Jawa dan 3–5 hari di luar Jawa. Di titik kritis *last-mile delivery*, peran *Shopee Express Partner* (sebutan untuk kurir mitra non-organik dengan skema bagi hasil per paket) menjadi determining factor terhadap kualitas layanan pelanggan, sehingga kinerja fisik dan mental mereka langsung memengaruhi *Customer Satisfaction Score* (CSAT) dan *Net Promoter Score* (NPS) platform.

Rafi dan Putra (2024) — dalam studi yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) — menyoroti bahwa di tengah masifnya volume parcel yang dapat melampaui 100 paket per kurir per hari pada periode *peak season* (Harbolnas, Ramadan, 11.11, dan 12.12), tekanan kognitif yang dialami mitra Shopee Express menjadi isu strategis. *Mental workload* didefinisikan sebagai total biaya sumber daya kognitif yang dicurahkan operator untuk menyelesaikan satu set tugas dalam batas waktu tertentu (Hart & Staveland, 1988). Jika beban mental terlalu rendah akan menimbulkan *underload* (kebosanan, lapse of attention), dan bila terlalu tinggi akan menyebabkan *cognitive overload* yang menurunkan akurasi *sorting*, kesalahan input *resi*, keterlambatan SLA, serta peningkatan *return-to-origin* (RTO) yang menggerus margin operasional.

Kontribusi paper Rafi & Putra (2024) ialah memvalidasi penerapan instrumen *NASA Task Load Index* (NASA-TLX) — yang secara metodologis telah teruji reliabel (Cronbach's α ≥ 0,80 pada dimensi internal) — ke konteks spesifik gig-economy logistics Indonesia. Sebelumnya, aplikasi NASA-TLX lebih banyak ditemukan pada operator mesin pabrik, pilot, dan tenaga medis. Studi yang dilakukan oleh Aditya.R dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) turut memperkuat justifikasi pendekatan ini dengan mengombinasikan *work sampling* dan NASA-TLX untuk operator gudang, membuktikan bahwa dimensi temporal demand dan effort memiliki korelasi kuat dengan utilisasi waktu produktif aktual. Dengan demikian, integrasi dua paper ini menjadi pijakan bagi pembahasan holistik tentang beban mental di ekosistem fulfillment Shopee.

Urgensi ekonominya substansial: asumsikan biaya variabel per paket Shopee Express adalah Rp5.000, dan mitra mengelola rerata 80 paket/hari. Jika karena *cognitive overload* tingkat RTO naik dari 3% menjadi 6%, perusahaan menanggung kerugian Rp12.000 per mitra per hari, atau Rp2,9 miliar/bulan untuk populasi 10.000 mitra aktif. Studi NASA-TLX yang dirancang Rafi & Putra (2024) menjadi *early diagnostic tool* untuk mencegah eskalasi biaya tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konsep Beban Kerja Mental dan Model Dimensi NASA-TLX

Beban kerja mental dimodelkan sebagai fungsi multi-dimensi yang melekat pada interaksi manusia–sistem. NASA-TLX mengoperasionalkan konsep ini melalui enam subskala yang diukur dengan skala bipolar 0–100 (*Visual Analog Scale*), dibagi dalam pasangan *Magnitude Endpoints*:

1. **Mental Demand (MD)** — aktivitas kognitif (berpikir, memutuskan, menghitung).
2. **Physical Demand (PD)** — aktivitas fisik (mengangkat, berjalan, memindahkan).
3. **Temporal Demand (TD)** — tekanan waktu (*time pressure*).
4. **Performance (P)** — persepsi keberhasilan menyelesaikan tugas.
5. **Effort (E)** — usaha ekstra yang dicurahkan.
6. **Frustration (F)** — tingkat frustrasi, stres, dan ketidaknyamanan.

### 2.2 Formulasi Skor NASA-TLX

Terdapat dua metrik utama yang digunakan Rafi & Putra (2024):

**(a) Raw TLX (RTLX)** — rata-rata sederhana keenam dimensi:

$$
\text{RTLX} = \frac{1}{6}\sum_{i=1}^{6} r_i = \frac{MD + PD + TD + P + E + F}{6}
$$

**(b) Weighted TLX (WTLX)** — skor tertimbang menggunakan bobot dari *card-sorting pairwise comparison*. Terdapat $\binom{6}{2}=15$ pasangan yang dibandingkan; dari 15 tersebut, setiap dimensi memperoleh bobot $w_i \in \{0,1,2,3,4,5\}$ dengan kendala:

$$
\sum_{i=1}^{6} w_i = 15
$$

Skor WTLX dihitung dengan:

$$
\boxed{\;\text{WTLX} = \frac{\displaystyle\sum_{i=1}^{6} w_i \cdot r_i}{\displaystyle\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot r_i\;}
$$

Skor WTLX berkisar 0–100. Kategorisasi beban kerja yang lazim digunakan (Rafi & Putra, 2024):

$$
\text{Beban} = \begin{cases} \text{Rendah}, & 0 \leq \text{WTLX} < 25 \\ \text{Sedang}, & 25 \leq \text{WTLX} < 50 \\ \text{Tinggi}, & 50 \leq \text{WTLX} < 75 \\ \text{Sangat Tinggi}, & 75 \leq \text{WTLX} \leq 100 \end{cases}
$$

### 2.3 Reliabilitas dan Validitas Instrumen

Koefisien reliabilitas internal diuji dengan *Cronbach's Alpha*:

$$
\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{r_i}}{\sigma^2_{\text{total}}}\right)
$$

dengan $k=6$ dimensi. Paper Rafi & Putra (2024) mengharapkan $\alpha \geq 0{,}80$ untuk instrumen yang valid. Uji validitas konvergen dilakukan melalui korelasi Pearson antara skor dimensi dengan retensi pekerjaan aktual:

$$
r_{xy} = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \cdot \sum (y_i - \bar{y})^2}}
$$

### 2.4 Integrasi Work Sampling (Aditya.R & Putra, 2024)

Paper pendukung DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) menggunakan *work sampling* dengan ukuran sampel yang memenuhi tingkat ketelitian tertentu. Formula jumlah pengamatan minimum:

$$
\boxed{\;N = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{E^2}\;}
$$

dengan $Z_{\alpha/2}=1{,}96$ (untuk $\alpha=0{,}05$), $p$ = proporsi aktivitas dominan (diestimasi 0,5 untuk konservatif), $E$ = batas galat relatif (umumnya 5% atau 10%). Interval kepercayaan proporsi aktivitas:

$$
P \pm Z_{\alpha/2}\sqrt{\frac{P(1-P)}{N_{\text{actual}}}}
$$

Tingkat utilisasi operator:

$$
U = \frac{T_{\text{produktif}}}{T_{\text{observasi}}} \times 100\%
$$

Korelasi utilisasi dengan WTLX kemudian dianalisis untuk menentukan *threshold* beban optimal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di Shopee Express mengikuti protokol enam-tahap yang distandarkan oleh Rafi & Putra (2024):

```
┌──────────────────────────────────────────────────────────┐
│   TAHAP 1: Identifikasi Tugas & Populasi Mitra           │
│   (Stratified sampling: area, shift, peak/non-peak)      │
└──────────────────────┬───────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────┐
│   TAHAP 2: Briefing & Informed Consent                   │
│   (Jelaskan 6 subskala; tidak ada jawaban benar/salah)   │
└──────────────────────┬───────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────┐
│   TAHAP 3: Pengukuran Raw Score (0–100) per Dimensi      │
│   (Visual Analog Scale pada kuesioner digital/paper)      │
└──────────────────────┬───────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────┐
│   TAHAP 4: Pairwise Comparison (15 pasangan kartu)       │
│   Tentukan bobot wᵢ; Σwᵢ = 15                           │
└──────────────────────┬───────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────┐
│   TAHAP 5: Hitung WTLX, uji reliabilitas (Cronbach α)    │
└──────────────────────┬───────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────┐
│   TAHAP 6: Analisis Korelasi WTLX ↔ Variabel Operasional │
│   (RTO, keterlambatan, jumlah paket, jam kerja)          │
└──────────────────────────────────────────────────────────┘
```

**SOP Pengukuran di Hub Operasional:**

1. **Pengisian kuesioner** dilakukan *post-task* dalam waktu maksimal 10 menit agar recall bias diminimalkan.
2. **Kondisi standar**: mitra telah menyelesaikan minimal 50 paket dan berada di antara jam ke-3 sampai ke-6 shift (menghindari *cold start* dan *fatigue* akut).
3. **Sampling acak** pada hari *weekday* dan *weekend*, area *urban* dan *suburban*.
4. **Triangulasi data** dengan metrik *dashboard* aplikasi Shopee (jam login, rute tempuh, status delivery).

**Integrasi Work Sampling (SOP Aditya.R & Putra, 2024):**

1. Lakukan observasi acak (*instantaneous observation*) pada $N$ waktu yang telah dihitung (umumnya $N \geq 384$ untuk $p=0{,}5, E=5\%$).
3. Klasifikasikan aktivitas ke dalam kategori: *loading*, *sorting*, *delivery*, *idle*, *waiting*, *handling issue*.
4. Hitung proporsi tiap kategori dengan interval kepercayaan 95%.
5. Plot kurva korelasi antara proporsi *delivery* (aktivitas utama) dengan skor WTLX mitra.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Mitra Shopee