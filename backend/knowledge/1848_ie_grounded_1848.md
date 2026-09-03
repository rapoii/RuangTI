# 1848 — Analisis Beban Kerja Mental pada Operator Logistik dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *e-commerce* di Indonesia mengalami pertumbuhan eksponensial dalam satu dekade terakhir, didorong oleh penetrasi digital yang masif, perubahan perilaku konsumen pascapandemi, dan ekspansi platform seperti Shopee, Tokopedia, dan Lazada. Shopee Express, sebagai unit layanan kurir internal Shopee yang beroperasi dengan model kemitraan (*partner*), menghadapi tantangan operasional yang sangat khas: volume parcel yang fluktuatif, target pengiriman harian yang ketat, paparan terhadap keluhan pelanggan secara langsung, serta kompleksitas *routing* di wilayah urban yang padat. Rafi dan Putra (2024) dalam studi mereka di DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental (*mental workload*) merupakan variabel kritis yang menentukan kinerja, keselamatan, dan retensi karyawan *partner* Shopee Express. Karyawan yang beroperasi pada intensitas mental berlebih tanpa disadari akan mengalami kelelahan kognitif (*cognitive fatigue*), peningkatan *error rate*, dan pada akhirnya depresi operasional yang menurunkan produktivitas kurir secara sistemik.

Secara ergonomi kognitif, beban kerja mental didefinisikan sebagai total tuntutan sumber daya informasi yang harus diproses oleh operator untuk mencapai tingkat kinerja tertentu dalam suatu periode waktu. Hart dan Staveland (1988), melalui instrumen NASA Task Load Index (NASA-TLX) yang digunakan Rafi dan Putra (2024), membagi beban kerja menjadi enam dimensi terukur: *Mental Demand*, *Physical Demand*, *Temporal Demand*, *Performance*, *Effort*, dan *Frustration*. Penggunaan NASA-TLX dalam konteks kurir *last-mile delivery* menjadi relevan karena tiga hal. Pertama, kurir tidak hanya menghadapi tuntutan fisik (mengangkat parcel 5–20 kg), tetapi juga tuntutan kognitif yang berat berupa navigasi aplikasi, pemindaian kode, komunikasi dengan pelanggan, dan pengambilan keputusan *routing* real-time. Kedua, Shopee Express menggunakan sistem *ranking* dan *penalty* berbasis metrik pengiriman yang menciptakan tekanan temporal signifikan. Ketiga, paparan langsung terhadap pelanggan yang menuntut layanan premium menciptakan dimensi frustrasi yang tidak dapat diabaikan.

Di sisi hulu rantai pasok, M. Andre Aditya.R dan Putra (2024) dalam DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) melengkapi wacana ini dengan mengkaji beban kerja operator pergudangan (*warehouse operator*) yang menjadi titik masuk parcel sebelum proses *sortasi* dan *dispatch*. Studi ini menggunakan dua metode simultan: Work Sampling untuk memetakan distribusi waktu kerja aktual dan NASA-TLX untuk mengukur intensitas beban mental selama aktivitas kritis. Integrasi kedua metode ini merepresentasikan pendekatan ergonomi sistem (*systems ergonomics*) modern yang tidak hanya mengukur "berapa lama" operator bekerja pada suatu aktivitas, tetapi juga "seberapa berat" aktivitas tersebut secara kognitif. Temuan utama menunjukkan korelasi kuat antara aktivitas dengan proporsi waktu tinggi (misalnya *picking* dan *packing*) dengan skor NASA-TLX dominan pada dimensi *Mental Demand* dan *Temporal Demand*.

Urgensi ekonomi dari analisis beban kerja mental ini cukup substansial. Berdasarkan data internal Shopee yang dirujuk Rafi dan Putra (2024), *error rate* pengiriman yang disebabkan oleh kelelahan kognitif kurir mencapai 4,7% selama periode peak season, naik signifikan dari baseline 1,9% di luar musim puncak. Setiap *error* berpotensi menimbulkan *reverse logistics cost* sebesar Rp 18.000–35.000 per parcel, yang bila diekstrapolasikan ke volume harian jutaan parcel, merepresentasikan kerugian miliaran rupiah per bulan. Oleh karena itu, investasi pada pengukuran dan pengelolaan beban kerja mental bukan sekadar inisiatif K3 (*Keselamatan dan Kesehatan Kerja*), melainkan *strategic operational lever* yang memiliki *return on investment* terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-Task Load Index (NASA-TLX)

Metode NASA-TLX yang diadopsi Rafi dan Putra (2024) dari kerangka Hart dan Staveland (1988) terdiri dari dua tahap prosedural: (1) *Raw TLX* berupa rating independen enam subskala pada skala bipolar 0–100, dan (2) *Weighted TLX* yang menggabungkan rating dengan bobot hasil *pairwise comparison* dari 15 pasangan dimensi (kombinasi $\binom{6}{2} = 15$). Skor akhir NASA-TLX dihitung menggunakan formula berikut:

$$
\text{TLX}_{\text{weighted}} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}
$$

dengan:
- $w_i$ = bobot dimensi ke-$i$ hasil *pairwise comparison* (nilai integer 0 sampai 5, $\sum w_i = 15$),
- $r_i$ = *rating* dimensi ke-$i$ pada skala 0–100,
- $i \in \{\text{MD}, \text{PD}, \text{TD}, \text{P}, \text{E}, \text{F}\}$.

Enam subskala tersebut secara operasional didefinisikan sebagai:

| Simbol | Dimensi | Deskripsi Operasional |
|:------:|:--------|:----------------------|
| MD | *Mental Demand* | Jumlah aktivitas perseptual dan kognitif (mengingat, memutuskan, menghitung) yang diperlukan |
| PD | *Physical Demand* | Jumlah aktivitas fisik (mendorong, mengangkat, berjalan) yang diperlukan |
| TD | *Temporal Demand* | Tingkat tekanan waktu dan *pace* kerja yang dialami operator |
| P | *Performance* | Tingkat keberhasilan operator dalam mencapai tujuan任务 (skala terbalik) |
| E | *Effort* | Tingkat usaha mental dan fisik yang dikeluarkan untuk mencapai kinerja |
| F | *Frustration* | Tingkat perasaan tidak aman, putus asa, iritasi, dan stres yang dialami |

### 2.2. Prosedur Pembobotan (*Card Sorting*)

*Pairwise comparison* dilakukan dengan menyajikan 15 kartu yang masing-masing memuat sepasang dimensi. Responden memilih pasangan yang dianggap lebih berkontribusi terhadap beban kerja dalam konteks tugas spesifik. Frekuensi kemunculan suatu dimensi sebagai "pemenang" menentukan bobotnya. Misalnya, jika dimensi *Mental Demand* dipilih 4 kali dari 5 kali penampilan, maka $w_{\text{MD}} = 4$.

### 2.3. Work Sampling (Pendukung)

Untuk memetakan distribusi aktivitas, M. Andre Aditya.R dan Putra (2024) menggunakan teori Work Sampling dari Tippet (1935) yang menyatakan bahwa proporsi waktu yang dihabiskan untuk suatu aktivitas sama dengan probabilitas menemukan operator dalam aktivitas tersebut pada saat pengamatan acak:

$$
p_i = \frac{X_i}{N}
$$

dengan:
- $p_i$ = proporsi waktu untuk aktivitas $i$,
- $X_i$ = jumlah observasi pada aktivitas $i$,
- $N$ = total observasi acak.

Penentuan jumlah observasi minimum menggunakan formula berbasis distribusi binomial:

$$
N = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}
$$

dengan:
- $Z$ = nilai standar normal untuk tingkat kepercayaan tertentu (1,96 untuk 95%),
- $p$ = proporsi estimasi aktivitas dominan,
- $E$ = *acceptable error* (absolut).

### 2.4. Reliabilitas dan Validitas

Rafi dan Putra (2024) melaporkan nilai Cronbach's Alpha sebesar 0,84 untuk instrumen NASA-TLX versi Bahasa Indonesia yang mereka adaptasi, memenuhi ambang reliabilitas 0,70 yang lazim dalam penelitian ilmu sosial terapan. Validitas konstruk dikonfirmasi melalui *factor analysis* yang mempertahankan struktur enam dimensi original Hart dan Staveland (1988).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Implementasi NASA-TLX

```
┌─────────────────────────────────┐
│ Identifikasi populasi operator  │
│ (kurir Shopee Express /         │
│  warehouse operator)            │
└────────────┬────────────────────┘
             ▼
┌─────────────────────────────────┐
│ Penentuan ukuran sampel         │
│ (Slovin: n = N/(1+Ne²))         │
└────────────┬────────────────────┘
             ▼
┌─────────────────────────────────┐
│ Briefing & informed consent     │
└────────────┬────────────────────┘
             ▼
┌─────────────────────────────────┐
│ Tugas Part 1: Rating 6 subskala │
│ (skala 0–100 garis bipolar)     │
└────────────┬────────────────────┘
             ▼
┌─────────────────────────────────┐
│ Tugas Part 2: Pairwise          │
│ Comparison (15 kartu)           │
└────────────┬────────────────────┘
             ▼
┌─────────────────────────────────┐
│ Perhitungan bobot (wᵢ) dan      │
│ skor TLX tertimbang             │
└────────────┬────────────────────┘
             ▼
┌─────────────────────────────────┐
│ Analisis statistik deskriptif   │
│ & uji beda (ANOVA/Kruskal-      │
│ Wallis jika non-parametrik)     │
└────────────┬────────────────────┘
             ▼
┌─────────────────────────────────┐
│ Pemetaan rekomendasi ergonomi   │
│ (redesain kerja / rotasi /      │
│ tool & SOP)                     │
└─────────────────────────────────┘
```

### 3.2. SOP Pengukuran Beban Kerja Mental

Berdasarkan prosedur Rafi dan Putra (2024) dan M. Andre Aditya.R & Putra (2024), SOP pengukuran beban kerja mental di lingkungan operasional Shopee Express dan pergudangan dapat distandarkan sebagai berikut:

**Tahap 1 — Persiapan (T⁻¹ minggu):**
1. Koordinasi dengan *site manager* untuk akses operator dan jadwal observasi.
2. Adaptasi kuesioner NASA-TLX ke konteks tugas spesifik (bahasa, istilah operasional, skala referensi).
3. Uji coba (*pilot test*) pada 5–10% sampel untuk validasi pemahaman instrumen.

**Tahap 2 — Pengumpulan Data (T⁰):**
1. Responden diminta menyelesaikan tugas rutin secara normal.
2. Dalam waktu 5–15 menit pascatugas, responden mengisi Part 1 (rating 6 subskala) dengan memberikan *check mark* pada garis bipolar *Low–High* sepanjang 100 mm yang kemudian dikonversi ke skor 0–100.
3. Responden menyelesaikan Part 2 (*card sort*) untuk 15 pasangan dimensi.

**Tahap 3 — Pengolahan Data (T⁺¹):**
1. Konversi *raw rating* ke skor numerik menggunakan *digital caliper* atau piranti lunak pengukur (alternatif: *grid overlay* pada cetakan).
2. Perhitungan bobot dari *pairwise comparison*: $w_i = $ jumlah kemenangan dimensi $i$.
3. Perhitungan $\text{TLX}_{\text{weighted}}$ menggunakan formula pada Bagian 2.1.
4. Klasifikasi beban kerja berdasarkan *cut-off* berikut (mengacu pada standar industri yang digunakan Rafi & Putra, 2024):
   - $\text{TLX} < 30$: Beban rendah — tidak perlu intervensi.
   - $30 \leq \text{TLX} < 50$: Beban sedang — monitoring periodik.
   -