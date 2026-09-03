# Modul Riset Ilmiah: Penjadwalan Produksi (Production Scheduling) & Algoritma Heuristik
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref & Google Scholar Validated - 2023-2026):**
- Johnson, S. M. (1954). *Optimal two- and three-stage production schedules with setup times included*. Naval Research Logistics Quarterly, 1(1), 61-68. (Classic Foundation).
- Nawaz, M., Enscore, E. E., & Ham, I. (1983). *A heuristic algorithm for the m-machine, n-job flow-shop sequencing problem*. OMEGA The International Journal of Management Science, 11(1), 91-95. (Benchmark NEH Algorithm).
- Asif, M. K. A., Jahan, S., Arefin, M. R., dkk. (2026). *Optimizing manufacturing efficiency: An evaluation of heuristic algorithms for non-preemptive flow-shop scheduling with makespan criterion*. Yugoslav Journal of Operations Research.
- Campbell, H. G., Dudek, R. A., & Smith, M. L. (1970). *A heuristic algorithm for the n job, m machine sequencing problem*. Management Science, 16(10), B-630. (CDS Algorithm).

---

## 1. Konsep & Metrik Kinerja Penjadwalan Produksi
Penjadwalan (*Scheduling*) adalah proses pengalokasian sumber daya mesin dan waktu untuk memproses sekumpulan pekerjaan (*jobs*) dengan urutan optimal guna memenuhi tenggat waktu (*due date*) pelanggan.

### Metrik Kinerja Utama:
1. **Makespan ($C_{\max}$):** Total waktu penyelesaian dari awal pekerjaan pertama hingga pekerjaan terakhir selesai pada mesin terakhir.
   $$C_{\max} = \max_{j} \{ C_j \}$$
2. **Mean Flow Time ($\bar{F}$):** Rata-rata waktu yang dihabiskan pekerjaan di dalam lantai pabrik.
   $$\bar{F} = \frac{1}{n} \sum_{j=1}^{n} F_j$$
3. **Tardiness ($T_j$) & Lateness ($L_j$):**
   - $L_j = C_j - d_j$ ($d_j = \text{due date}$)
   - $T_j = \max(0, C_j - d_j)$ (Keterlambatan penyelesaian pekerjaan)

---

## 2. Aturan Prioritas Penjadwalan Mesin Tunggal (Single Machine Dispatching Rules)
- **SPT (Shortest Processing Time):** Mengurutkan pekerjaan dari waktu proses terkecil ke terbesar. *Terbukti secara matematis meminimalkan rata-rata waktu alir ($\bar{F}$) dan antrian WIP.*
- **EDD (Earliest Due Date):** Mengurutkan pekerjaan dari batas waktu terdekat ke terjauh. *Terbukti secara matematis meminimalkan keterlambatan maksimum ($T_{\max}$).*
- **LPT (Longest Processing Time):** Mengurutkan pekerjaan dari waktu proses terpanjang (digunakan untuk penyeimbangan beban mesin paralel).
- **CR (Critical Ratio):** Rasio sisa waktu terhadap sisa waktu pengerjaan:
  $$\text{CR} = \frac{\text{Due Date} - \text{Waktu Saat Ini}}{\text{Sisa Waktu Proses}}$$
  *(Jika $\text{CR} < 1.0$: Job dalam kondisi kritis terlambat).*

---

## 3. Algoritma Flow Shop Multi-Mesin

### A. Aturan Johnson ($n$ Job, $2$ Mesin):
1. Buat daftar waktu pengerjaan semua job pada Mesin 1 ($t_{j1}$) dan Mesin 2 ($t_{j2}$).
2. Cari nilai waktu proses terkecil di antara seluruh elemen matriks yang belum terjadwal:
   - Jika nilai minimum berada di **Mesin 1**, jadwalkan job tersebut **di urutan paling awal yang masih kosong**.
   - Jika nilai minimum berada di **Mesin 2**, jadwalkan job tersebut **di urutan paling akhir yang masih kosong**.
3. Coret job tersebut dari daftar dan ulangi langkah 2 hingga semua job terurut.

---

### B. Algoritma NEH (Nawaz-Enscore-Ham) ($n$ Job, $m$ Mesin):
Algoritma heuristik konstruktif terbaik di dunia untuk meminimalkan *Makespan* pada Flow Shop:
1. **Hitung Total Waktu Proses:** Hitung $TP_j = \sum_{k=1}^{m} t_{jk}$ untuk setiap job $j$.
2. **Urutkan Descending:** Urutkan seluruh job berdasarkan nilai $TP_j$ dari terbesar ke terkecil.
3. **Evaluasi Dua Job Pertama:** Ambil 2 job teratas, uji 2 permutasi urutan $(1-2 \text{ atau } 2-1)$, pilih urutan dengan *Makespan* terkecil.
4. **Iterasi Penyisipan (Insertion Step):** Untuk job ke-$k$ ($k = 3, \dots, n$), uji penyisipan job tersebut ke seluruh $k$ posisi yang memungkinkan di dalam urutan yang sudah terbentuk. Tetapkan posisi terbaik yang menghasilkan *Makespan* minimum tanpa mengubah urutan relatif job sebelumnya.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
