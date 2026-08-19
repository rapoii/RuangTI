# Modul 409: Penjadwalan Produksi Kapasitas Terbatas (Finite Capacity Scheduling), Theory of Constraints (TOC), Drum-Buffer-Rope (DBR), dan Algoritma Johnson

## 1. Domain Profesi & Ruang Lingkup
Profesi **Production Scheduler / Operations Research Analyst** bertanggung jawab menentukan urutan pengerjaan job (*job sequencing*) dan alokasi mesin di lantai produksi untuk meminimalkan *Makespan* ($C_{\max}$), keterlambatan (*Total Tardiness*), serta barang dalam proses (*Work In Process* - WIP).

---

## 2. Paradigma Theory of Constraints (TOC - Eliyahu M. Goldratt) & Drum-Buffer-Rope (DBR)

TOC menegaskan bahwa *throughput* seluruh pabrik ditentukan 100% oleh stasiun pembatas (*Bottleneck Workstation / Capacity Constraint Resource* - CCR).

```
Bahan Baku ===[ROPE]====> [Stasiun Non-Bottleneck] ===> [BUFFER] ===> [DRUM (Bottleneck)] ===> [SINK (Barang Jadi)]
      ^                                                                     |
      |======================== Sinyal Tarik (Rope Pull) ===================|
```

### 3 Elemen Utama Sistem DBR:
1. **The DRUM (Detak Genderang)**: Jadwal kerja rinci pada mesin *bottleneck*. Kecepatan seluruh pabrik diatur agar sinkron dengan kapasitas mesin ini.
2. **The BUFFER (Penyangga Waktu)**: Stok proteksi berbasis waktu (*Time Buffer*) yang diletakkan persis di depan mesin *bottleneck* agar mesin *bottleneck* tidak pernah kelaparan (*starving*).
   - **Manajemen Buffer 3-Warna**:
     - *Zona Hijau ($1/3$ pertama)*: Aman, tidak perlu tindakan.
     - *Zona Kuning ($1/3$ tengah)*: Waspada, lakukan pemantauan alur kerja hulu.
     - *Zona Merah ($1/3$ terakhir)*: Kritis! Prioritaskan batch tersebut dengan prosedur ekspres (*expedite*).
3. **The ROPE (Tali Sinkronisasi)**: Mekanisme pelepasan bahan baku di pintu awal pabrik yang dikendalikan langsung oleh tingkat konsumsi mesin *bottleneck*.

---

## 3. Aturan Prioritas Penjadwalan Mesin Tunggal (Single-Machine Dispatching Rules)

Diberikan $n$ job dengan waktu proses $p_j$ dan batas waktu pengiriman (*due date*) $d_j$:

| Aturan Dispatching | Formula / Urutan | Tujuan Kinerja Utama |
| :--- | :--- | :--- |
| **Shortest Processing Time (SPT)** | Urutkan $p_{(1)} \le p_{(2)} \le \dots \le p_{(n)}$ | Meminimalkan rata-rata waktu alir ($\bar{F}$) dan WIP |
| **Earliest Due Date (EDD)** | Urutkan $d_{(1)} \le d_{(2)} \le \dots \le d_{(n)}$ | Meminimalkan keterlambatan maksimum ($L_{\max} / T_{\max}$) |
| **Critical Ratio (CR)** | $CR_j = \frac{d_j - t_{\text{sekarang}}}{p_j}$ | Prioritaskan $CR_j$ terkecil ($CR < 1$ artinya terlambat) |
| **Slack Time per Operation (ST/O)** | $\text{Slack}_j = \frac{d_j - t - \sum p_{jk}}{\text{Jumlah Operasi Sisa}}$ | Meminimalkan variasi keterlambatan antar job |

---

## 4. Algoritma Johnson untuk Flow Shop 2-Mesin & 3-Mesin

Digunakan untuk meminimalkan total waktu penyelesaian (*Makespan* $C_{\max}$) untuk $n$ job yang harus diproses berurutan pada Mesin 1 lalu Mesin 2.

### A. Prosedur Algoritma Johnson 2-Mesin ($n/2/F/C_{\max}$):
1. Buat daftar waktu pengerjaan $p_{j1}$ (Mesin 1) dan $p_{j2}$ (Mesin 2) untuk seluruh job $j = 1, 2, \dots, n$.
2. Cari nilai waktu proses terkecil di antara seluruh matriks: $\min_{j} (p_{j1}, p_{j2})$.
3. **Aturan Penempatan**:
   - Jika nilai minimum berada pada **Mesin 1** ($p_{j1}$), tempatkan job tersebut pada **urutan paling depan** yang masih kosong.
   - Jika nilai minimum berada pada **Mesin 2** ($p_{j2}$), tempatkan job tersebut pada **urutan paling belakang** yang masih kosong.
4. Hapus job tersebut dari daftar dan ulangi langkah 2–3 hingga seluruh job terurut.

### B. Ekstensi Johnson untuk 3-Mesin ($n/3/F/C_{\max}$):
Syarat validitas: $\min(p_{j1}) \ge \max(p_{j2})$ ATAU $\min(p_{j3}) \ge \max(p_{j2})$.
Jika terpenuhi, bentuk dua mesin semu (*dummy machines*):
$$p_{jA}' = p_{j1} + p_{j2}, \quad p_{jB}' = p_{j2} + p_{j3}$$
Lalu terapkan Algoritma Johnson 2-Mesin pada $p_{jA}'$ dan $p_{jB}'$.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Goldratt, E. M., & Cox, J. (2014). *The Goal: A Process of Ongoing Improvement* (30th Anniversary ed.). North River Press.
- Pinedo, M. L. (2016). *Scheduling: Theory, Algorithms, and Systems* (5th ed.). Springer.
- Orue, A., Lizarralde, A., Apaolaza, U., & Amorrortu, I. (2023). *Designing the process of implementing the theory of constraints in a make-to-order manufacturing environment: Integrating S&OP and DBR*. Journal of Industrial Engineering and Management, 16(1), 45-62. DOI: [10.3926/jiem.5127](https://doi.org/10.3926/jiem.5127).
- Brahmantyo, F. X. D. A., & Kurniawan, I. (2025). *Developing production planning and control system by applying composite dispatching rules in packaging manufacturing*. Performa: Media Ilmiah Teknik Industri, 24(2), 115-128.
