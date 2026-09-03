# 1896 — Analisis Beban Kerja Mental Operator Logistik Last-Mile Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Ergonomi Kognitif, Perancangan Sistem Kerja, Manajemen Operasional Logistik
**Topik Spesifik:** Analisis Beban Kerja Mental Karyawan Mitra Shopee Express Menggunakan Metode NASA-TLX
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Workload Analysis Using Work Sampling and NASA-TLX for Warehouse Operators*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara mengalami pertumbuhan eksponensial pasca pandemi COVID-19, dengan Indonesia menjadi pasar terbesar di kawasan tersebut. Berdasarkan laporan Bank Indonesia, nilai transaksi *e-commerce* nasional menembus lebih dari Rp400 triliun pada 2023, dan laju *Compound Annual Growth Rate* (CAGR) sektor *last-mile delivery* diproyeksikan维持在 12–15% per tahun. Dalam rantai pasok ini, perusahaan *platform* seperti Shopee tidak mengelola armada pengiriman secara langsung, melainkan menggandeng ribuan **mitra pengemudi independen** (*Shopee Express Partner*/SEP) yang beroperasi dengan model *contractual gig economy*. Kondisi ini menimbulkan tantangan ergonomi kognitif yang sangat khas: pengemudi bekerja di bawah tekanan waktu (*deadline* pengantaran harian yang fluktuatif), menghadapi fragmentasi tugas (*multi-order dispatch*, validasi kode OTP, *packing verification*, komunikasi pelanggan via aplikasi), serta berinteraksi dengan antarmuka aplikasi *driver-partner* yang kompleks.

Paper Rafi & Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa mayoritas studi beban kerja mental sebelumnya hanya mengkaji operator manufaktur atau *call center*, padahal karakteristik kognitif operator logistik *last-mile* memiliki profil berbeda: tugas bersifat *mobile*, *time-pressured*, dan memiliki paparan *multitasking* digital tinggi. Studi Aditya & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) turut mengonfirmasi bahwa operator gudang—yang notabene adalah tetangga proses dari pengemudi—menunjukkan korelasi kuat antara beban kerja mental dengan kelelahan fisik dan tingkat kesalahan sortir. Kedua penelitian ini menjadi dasar urgensi modul ini: *beban kerja mental bukan sekadar variabel psikologis, melainkan penentu langsung produktivitas pengiriman, tingkat kecelakaan kerja di jalan raya, serta attrition rate mitra pengemudi yang sudah menyentuh angka 35–40% per tahun*.

Urgensi ekonomis lainnya adalah **biaya turnover**. Setiap pergantian mitra pengemudi membutuhkan biaya rekrutmen, pelatihan aplikasi, dan verifikasi dokumen sekitar Rp1,5–2 juta per orang. Jika sebuah *hub* Shopee Express kehilangan 50 mitra per bulan, beban biaya tidak langsung dapat mencapai Rp80–100 juta per bulan per *hub*. Pengukuran beban kerja mental secara kuantitatif—yang menjadi fokus NASA-TLX—dapat menjadi *early warning system* bagi manajemen operasional untuk melakukan rotasi tugas, penjadwalan istirahat, atau redistribusi rute sebelum kelelahan kognitif memicu *human error* (misalnya salah *drop-point*, keterlambatan *Same-Day Delivery*, atau kecelakaan lalu lintas). Dengan demikian, integrasi metodologi NASA-TLX ke dalam *Standard Operating Procedure* (SOP) operasional logistik bukan hanya persoalan kesejahteraan pekerja, melainkan juga *risk management* dan optimasi biaya operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh *Human Performance Group* NASA Ames Research Center (Hart & Staveland, 1988) dan telah divalidasi secara luas pada lebih dari 500 studi lintas industri. Metode ini mengukur beban kerja melalui enam subskala:

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $MD$ | Mental Demand | Jumlah aktivitas berpikir, memutuskan, dan menghitung yang diperlukan |
| $PD$ | Physical Demand | Jumlah aktivitas fisik yang diperlukan (mengangkat, mendorong, berjalan) |
| $TD$ | Temporal Demand | Tekanan waktu yang dirasakan operator |
| $OP$ | Performance | Pencapaian tujuan kerja yang dirasakan (skala *reverse*: rendah = gagal) |
| $EF$ | Effort | Sejauh apa operator harus bekerja keras secara mental/fisik |
| $FR$ | Frustration | Tingkat frustasi, irritasi, dan stress selama bekerja |

### 2.2 Skor Mentah (*Raw TLX*)

Responden memberikan skor $0$ sampai $100$ pada garis berskala kontinu (*visual analog scale*) untuk setiap dimensi:

$$X_i \in [0, 100], \quad i \in \{MD, PD, TD, OP, EF, FR\} \tag{1}$$

### 2.3 Prosedur Pembobotan (*Card Sort Pairwise Comparison*)

Sebelum memberikan skor akhir, responden melakukan *pairwise comparison* terhadap 15 pasang dimensi (jumlah kombinasi $C(6,2)=15$). Bobot tiap dimensi $w_i$ dihitung sebagai jumlah kemenangan (*wins*) dibagi total perbandingan:

$$w_i = \frac{n_i^{\text{wins}}}{N_{\text{pairs}}}, \quad \text{dengan } N_{\text{pairs}}=15, \quad \sum_{i=1}^{6} w_i = 1 \tag{2}$$

### 2.4 Skor Tertimbang (*Weighted TLX / WWL*)

**Weighted Workload (WWL)** dihitung dengan mengalikan skor mentah dengan bobot dimensi, kemudian menjumlahkannya:

$$\boxed{WWL = \sum_{i=1}^{6} w_i \cdot X_i = w_{MD}X_{MD} + w_{PD}X_{PD} + w_{TD}X_{TD} + w_{OP}X_{OP} + w_{EF}X_{EF} + w_{FR}X_{FR}} \tag{3}$$

Nilai $WWL$ berada pada rentang $[0, 100]$. Interpretasi beban kerja mengikuti klasifikasi Rafi & Putra (2024, DOI: 10.21070/ups.9385):

$$WWL < 30 \Rightarrow \text{Beban Ringan}, \quad 30 \leq WWL < 50 \Rightarrow \text{Beban Sedang}$$
$$50 \leq WWL < 70 \Rightarrow \text{Beban Tinggi}, \quad WWL \geq 70 \Rightarrow \text{Beban Sangat Tinggi} \tag{4}$$

### 2.5 Work Sampling untuk Validasi Persepsi

Mengikuti pendekatan Aditya & Putra (2024, DOI: 10.21070/ups.11795), **Work Sampling (WS)** digunakan untuk memvalidasi korelasi antara persepsi subjektif NASA-TLX dengan proporsi waktu aktual di lapangan. Dalam WS, pengamat mencatat aktivitas operator pada interval acak (*random observation*). Proporsi waktu untuk aktivitas $k$:

$$P_k = \frac{h_k}{H}, \quad \text{dengan } \sum_{k=1}^{K} P_k = 1 \tag{5}$$

Ukuran sampel minimum WS dengan tingkat kepercayaan $1-\alpha$ dan galat $e$:

$$N \geq \left( \frac{Z_{\alpha/2}}{e} \right)^2 \cdot p(1-p) \tag{6}$$

Untuk $p=0{,}5$ (konservatif), $\alpha=0{,}05$ sehingga $Z_{\alpha/2}=1{,}96$, dan $e=0{,}05$:

$$N \geq \left( \frac{1{,}96}{0{,}05} \right)^2 \cdot 0{,}5 \cdot 0{,}5 = 1536{,}64 \approx 1537 \text{ observasi} \tag{7}$$

### 2.6 Korelasi Beban Mental–Aktivitas Lapangan

Untuk menguji validitas konvergen, Rafi & Putra (2024) mengkorelasikan skor $WWL$ dengan rasio *task-mix* kognitif terhadap fisik:

$$\rho_{WWL,\,R_{\text{cog}}} = \frac{\text{Cov}(WWL,\,R_{\text{cog}})}{\sigma_{WWL}\,\sigma_{R_{\text{cog}}}} \tag{8}$$

dengan $R_{\text{cog}} = P_{\text{task-kognitif}}/P_{\text{task-fisik}}$.

---

## 3. Metodologi Rekayasa & SOP Implementasi

### 3.1 Diagram Alir Pengukuran NASA-TLX

```
┌──────────────────────────────────────────┐
│ TAHAP 1: Identifikasi populasi & tugas   │
│ (mitra SEP aktif min. 6 bulan)           │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ TAHAP 2: Work Sampling (≥1537 obs.)      │
│ Catat proporsi 6 kategori aktivitas:     │
│ • Sortir/loading                         │
│ • Validasi aplikasi                      │
│ • Berkendara (delivery)                  │
│ • Interaksi pelanggan                    │
│ • Istirahat                              │
│ • Delay/antrian                          │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ TAHAP 3: Kuesioner NASA-TLX              │
│ • 15 pairwise comparison (card sort)     │
│ • 6 skor VAS (0–100)                    │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ TAHAP 4: Hitung bobot w_i (Eq. 2)       │
│ Hitung WWL (Eq. 3)                      │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ TAHAP 5: Klasifikasi (Eq. 4)            │
│ & Uji Korelasi (Eq. 8)                  │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ TAHAP 6: Rekomendasi Manajerial          │
│ (rotasi rute, micro-break, UI/UX fix)    │
└──────────────────────────────────────────┘
```

### 3.2 SOP Pengumpulan Data (sesuai protokol Rafi & Putra, 2024)

1. **Persiapan administratif**: izin *Hub Manager*, informed consent responden, dan briefing prosedur.
2. **Pelatihan enumerator**: 2 enumerator bersertifikat, *inter-rater reliability* Cohen's Kappa $\kappa \geq 0{,}75$.
3. **Randomized time observation**: gunakan *randomized clock* dengan interval 90 detik (10 jam kerja = 400 slot/hari).
4. **Pelaksanaan kuesioner**: pasca shift, suasana tenang, durasi 12–18 menit per responden.
5. **Penjaminan kualitas data**: cek outlier dengan *Tukey's fences* $X_i \notin [Q_1 - 1{,}5\cdot IQR, Q_3 + 1{,}5\cdot IQR]$.

### 3.3 Arsitektur Integrasi Sistem (Rekomendasi)

Untuk implementasi *real-time*, sistem NASA-TLX sebaiknya di-*embed* ke dalam aplikasi mitra:

- **Trigger**: notifikasi *self-report* mikro (skala 0–10 pada *slider*) muncul setiap selesai 5 pengantaran.
- **Storage**: skor dikirim ke *cloud* dan diagregasi per *hub* per minggu.
- **Dashboard**: $WWL$ harian ditampilkan dalam *heatmap* warna—hijau ($<30$), kuning ($30$–$50$), oranye ($50$–$70$), merah ($\geq 70$).
- **Algoritma mitigasi otomatis**: jika $WWL$ mingguan operator $> 70$ selama 2 minggu berturut, sistem mengusulkan rotasi zona (misalnya dari *high-density* ke *low-density* rute).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Sebuah *Hub* Shopee Express di Tangerang Selatan menaungi 40 mitra pengemudi. Penelitian Rafi & Putra (2024) mensampling 12 mitra aktif yang memenuhi kriteria inklusi. Berikut adalah rekonstruksi data lapangan berdasarkan laporan riset tersebut.

### 4.2 Data Mentah Skor NASA-TLX (12 Responden)

| Resp | MD | PD | TD | OP | EF | FR |
|---|---|---|---|---|---|---|
| R1 | 75 | 60 | 80 | 40 | 70 | 65 |
| R2 | 80 | 55 | 75 | 35 | 75 | 70 |
| R3 | 70 | 65 | 85 | 45 | 80 | 60 |
| R4 | 85 | 50 | 90 | 30 | 85 | 75 |
| R5 | 60 | 70 | 70 | 50 | 65 | 55 |
| R6 | 78 | 58 | 82 | 38 | 72 | 68 |
| R7 | 72 | 62 | 78 | 42 | 70 | 62 |
| R8 | 88 | 48 | 92 | 28 | 88 | 78 |
| R9 | 65 | 68 | 72 | 48 | 67 | 58 |
| R10 | 82 | 52 | 88 | 32 | 82 | 72 |
| R11 | 68 | 64 | 76 | 46 | 68 | 60 |
| R12 | 76 | 60 | 84 | 36 | 78 | 66 |

### 4.3 Contoh Perhitungan Manual Responden R1

**Langkah 1**: Tentukan *pairwise wins* dari kartu sortir R1 (hipotetis untuk ilustrasi):

| Pasang | Pemenang |
|---|---|
| MD vs PD | MD |
| MD vs TD | MD |
| MD vs OP | MD |
| MD vs EF | MD |
| MD vs FR | MD |
| PD vs TD | TD |
| PD vs OP | OP |
| PD vs EF | EF |
| PD vs FR | PD |
| TD vs OP | TD |
| TD vs EF | TD |
| TD vs FR | TD |
| OP vs EF | EF |
| OP vs FR | OP |
| EF vs FR | EF |

Hitungan *wins*: MD=5, PD=1, TD=5, OP=4, EF=4, FR=0 → Total = 19 → *normalisasi* dengan total 15 bukan 19 karena setiap pasang