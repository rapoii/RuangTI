# 2280 — Analisis Beban Kerja Mental pada Operator Logistik Last-Mile dan Gudang Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Ekspansi ekonomi digital di Indonesia yang dipacu oleh pandemi COVID-19 telah mengubah secara fundamental struktur permintaan terhadap layanan logistik last-mile. Shopee Express sebagai salah satu pilar ekosistem *e-commerce* Shopee mempekerjakan ribuan *partner* (mitra) yang beroperasi di titik-titik sortir, *hub*, dan rute distribusi. Dalam laporan Rafi & Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), ditegaskan bahwa intensitas operasional mitra Shopee Express tidak hanya didominasi oleh beban fisik, melainkan terutama oleh **beban kerja mental** yang dihasilkan oleh kombinasi target harian (*Key Performance Indicator*/KPI), fluktuasi volume paket musiman (misalnya pada *flash sale* 9.9, 11.11, 12.12), kompleksitas *routing*, dan interaksi dengan sistem *tracking* digital. Ketidakseimbangan beban mental ini menjadi *root cause* kelelahan kognitif, *decision fatigue*, dan pada akhirnya menurunkan produktivitas, keselamatan kerja, serta retensi mitra.

Secara empiris, fenomena ini bukan孤立 bagi Shopee Express. Aditya & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) menunjukkan bahwa operator gudang pada perusahaan pergudangan modern juga mengalami paparan beban mental yang serupa akibat otomatisasi parsial, penggunaan WMS (*Warehouse Management System*), dan target拣选 yang ketat. Keduanya menegaskan bahwa pendekatan konvensional berupa pengukuran beban kerja fisik (misalnya *cardiovascular workload* atau *energy expenditure*) tidak lagi memadai untuk mendesain ulang sistem kerja 4.0. Diperlukan kerangka kuantitatif yang mampu mengukur dimensi kognitif, temporal, frustasi, dan upaya secara simultan. Di sinilah **NASA-TLX (Task Load Index)** yang dikembangkan oleh Hart & Staveland (1988) dan telah divalidasi lintas industri selama lebih dari tiga dekade, menjadi instrumen pilihan.

Urgensi penelitian ini juga bersifat ekonomis. Turnover mitra Shopee Express yang tinggi menimbulkan biaya rekrutmen, pelatihan, dan *ramp-up* yang signifikan. Studi internal yang dirujuk Rafi & Putra (2024) mengestimasi biaya penggantian satu mitra kurir di Jabodetabek mencapai Rp3,5–4,5 juta per insiden. Oleh karena itu, memetakan dan mengelola beban mental bukan hanya isu *occupational health*, melainkan juga strategi **operational excellence** dan **human capital sustainability**.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX: Arsitektur Pengukuran Beban Kerja Subjektif

NASA-TLX adalah instrumen multidimensi yang mengukur beban kerja melalui enam subskala:

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $MD$ | Mental Demand | Jumlah aktivitas kognitif (memori, kalkulasi, observasi) |
| $PD$ | Physical Demand | Jumlah aktivitas fisik yang diperlukan |
| $TD$ | Temporal Demand | Tekanan waktu terhadap penyelesaian tugas |
| $OP$ | Performance | Persepsi pencapaian tujuan tugas |
| $EF$ | Effort | Tingkat usaha yang dikeluarkan untuk完成任务 |
| $FR$ | Frustration | Tingkat level frustasi, irritasi, dan stress |

Tahap 1 — **Raw Score (RS):** Responden memberikan skor 0–100 (interval 5) untuk masing-masing dimensi: $r_i \in [0,100]$, dengan $i = 1,\dots,6$.

Tahap 2 — **Pairwise Comparison (PC):** Dari 15 pasangan ($\binom{6}{2} = 15$), responden memilih dimensi yang *lebih* berkontribusi terhadap beban kerja pada tugas spesifik. Bobot $w_i$ adalah jumlah kemenangan dimensi ke-$i$ dibagi 15:

$$w_i = \frac{\text{jumlah kemenangan dimensi } i}{15}, \quad \sum_{i=1}^{6} w_i = 1$$

Tahap 3 — **Weighted Score (WS):** Skor total NASA-TLX adalah rata-rata terbobotkan:

$$\boxed{\text{NASA-TLX} = \sum_{i=1}^{6} w_i \cdot r_i}$$

Interpretasi skor menggunakan ambang yang diadaptasi dalam literatur ergonomik Indonesia:

- $0 \leq \text{NASA-TLX} < 25$: Beban kerja rendah
- $25 \leq \text{NASA-TLX} < 50$: Beban kerja sedang
- $50 \leq \text{NASA-TLX} < 75$: Beban kerja tinggi
- $75 \leq \text{NASA-TLX} \leq 100$: Beban kerja sangat tinggi/overload

### 2.2 Work Sampling: Formulasi Statistik

Untuk memvalidasi proporsi waktu yang dihabiskan pada setiap elemen kerja, Aditya & Putra (2024) mengintegrasikan *work sampling*. Penentuan jumlah pengamatan minimum menggunakan rumus statistik binomial:

$$N = \frac{Z_{\alpha/2}^2 \cdot p \cdot (1-p)}{e^2}$$

di mana $Z_{\alpha/2}$ adalah nilai kritis distribusi normal baku (untuk confidence level 95%, $Z = 1{,}96$), $p$ adalah proporsi aktivitas yang diestimasi (default $p = 0{,}5$ untuk konservatif), dan $e$ adalah *margin of error* yang dapat diterima.

Sebagai contoh, untuk $p = 0{,}5$ dan $e = 0{,}05$:

$$N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}25}{0{,}0025} = \frac{0{,}9604}{0{,}0025} = 384{,}16$$

sehingga dibutuhkan minimum **385 observasi** pada confidence level 95%.

### 2.3 Beban Kerja Fisiologis (Validasi Silang)

Validasi silang beban kerja mental dapat dilakukan melalui persentase denyut jantung kerja:

$$\%\text{HR} = \frac{\text{HR}_{\text{kerja}} - \text{HR}_{\text{istirahat}}}{\text{HR}_{\text{maks}} - \text{HR}_{\text{istirahat}}} \times 100\%$$

dengan $\text{HR}_{\text{maks}} = 220 - \text{usia}$. Klasifikasi beban oleh *National Institute for Occupational Safety and Health* (NIOSH):

- $\%\text{HR} < 30\%$: Beban ringan
- $30\% \leq \%\text{HR} < 50\%$: Beban sedang
- $50\% \leq \%\text{HR} < 80\%$: Beban berat
- $\%\text{HR} \geq 80\%$: Beban sangat berat

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi NASA-TLX pada Operator Logistik

```
┌──────────────────────────────────────────────┐
│ FASE 1: IDENTIFIKASI SISTEM KERJA            │
│ - Pemetaan proses bisnis Shopee Express       │
│ - Penentuan titik ukur (sortir, packing,      │
│   delivery, customer service)                 │
└────────────────────┬─────────────────────────┘
                     ▼
┌──────────────────────────────────────────────┐
│ FASE 2: DESAIN INSTRUMEN                     │
│ - Kuesioner NASA-TLX (versi digital)          │
│ - Lembar observasi work sampling              │
│ - Formulir informed consent                  │
└────────────────────┬─────────────────────────┘
                     ▼
┌──────────────────────────────────────────────┐
│ FASE 3: PENGUMPULAN DATA                     │
│ - Pilot study (n=5) untuk validasi kuesioner  │
│ - Observasi work sampling selama 5 hari kerja │
│ - Random sampling dengan confidence 95%       │
└────────────────────┬─────────────────────────┘
                     ▼
┌──────────────────────────────────────────────┐
│ FASE 4: ANALISIS DATA                        │
│ - Perhitungan raw score (RS) per dimensi      │
│ - Perhitungan bobot dari pairwise comparison  │
│ - Weighted Score = Σ wᵢ × rᵢ                 │
│ - Uji validitas (Pearson) & reliabilitas      │
│   (Cronbach's Alpha ≥ 0,70)                  │
└────────────────────┬─────────────────────────┘
                     ▼
┌──────────────────────────────────────────────┐
│ FASE 5: INTERPRETASI & REKOMENDASI           │
│ - Pemetaan dimensi dominan beban kerja        │
│ - Re-design sistem kerja (workstation layout, │
│   rotasi tugas, training)                     │
│ - Monitoring berkelanjutan                    │
└──────────────────────────────────────────────┘
```

### 3.2 Prosedur Pelaksanaan Work Sampling

Aditya & Putra (2024) menekankan bahwa *work sampling* idealnya dilakukan dengan interval acak (*random interval observation*). Prosedur yang digunakan mengikuti standar Niebel & Freivalds:

1. **Penentuan elemen kerja**: sortir inbound, sortir outbound, packing, loading, idle, istirahat, administrative.
2. **Penentuan jumlah pengamatan**: menggunakan rumus pada Sub-bagian 2.2.
3. **Penjadwalan observasi**: *random-route observation* dengan total 385 observasi per hari × 5 hari = 1.925 observasi.
4. **Pelaksanaan**: observer melakukan *spot check* terhadap operator setiap interval (misalnya setiap 90 detik).
5. **Rekapitulasi**: proporsi elemen kerja ke-$k$ dihitung sebagai:

$$\hat{p}_k = \frac{f_k}{N}$$

di mana $f_k$ adalah frekuensi pengamatan pada elemen $k$, dan $N$ adalah total pengamatan.

### 3.3 Arsitektur Integrasi dengan Sistem Informasi

Pada level lanjut, hasil NASA-TLX dapat di-*stream*-kan ke dalam *Human-Machine Interface* (HMI) gudang berbasis *Internet of Things* (IoT). Sensor denyut jantung (wearable) memvalidasi beban fisiologis, sementara jawaban kuesioner NASA-TLX digital (misalnya via Google Form dengan *auto-calculus* pada Google Apps Script) langsung dihitung Weighted Score-nya. Dashboard manajemen menampilkan *heatmap* beban kerja per shift, yang menjadi dasar keputusan *re-distribution of workforce* secara *real-time*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: Mitra Sortir Shopee Express

**Konteks**: 5 mitra sortir di *Hub* Shopee Express Jakarta Selatan. Instrumen NASA-TLX administered setelah shift pagi (07.00–13.00).

**Tabel 1. Raw Score Tiap Dimensi (rata-rata 5 mitra)**

| Dimensi | MD | PD | TD | OP | EF | FR |
|---|---|---|---|---|---|---|
| Raw Score ($r_i$) | 75 | 60 | 85 | 30 | 80 | 70 |

**Tabel 2. Hasil Pairwise Comparison (Total Kemenangan)**

| Dimensi | MD | PD | TD | OP | EF | FR | Total |
|---|---|---|---|---|---|---|---|
| Kemenangan | 4 | 1 | 5 | 0 | 3 | 2 | 15 |

**Perhitungan Bobot:**

$$w_{MD} = \frac{4}{15} = 0{,}267; \quad w_{PD} = \frac{1}{15} = 0{,}067$$
$$w_{TD} = \frac{5}{15} = 0{,}333; \quad w_{OP} = \frac{0}{15} = 0{,}000$$
$$w_{EF} = \frac{3}{15} = 0{,}200; \quad w_{FR} = \frac{2}{15} = 0{,}133$$

**Perhitungan Weighted Score:**

$$\text{NASA-TLX} = (0{,}267)(75) + (0{,}067)(60) + (0{,}333)(85) + (0{,}000)(30) + (0{,}200)(80) + (0{,}133)(70)$$

$$= 20{,}025 + 4{,}020 + 28{,}