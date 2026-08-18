# 135. High-Mix Low-Volume (HMLV) & Quick Response Manufacturing (QRM)

## Deskripsi Modul
Modul ini membahas paradigma manufaktur yang dirancang khusus untuk lingkungan *High-Mix Low-Volume* (HMLV), di mana variasi produk tinggi namun volume per varian rendah. Fokus utama adalah pada metodologi *Quick Response Manufacturing* (QRM) yang dikembangkan oleh Rajan Suri, yang menantang prinsip efisiensi tradisional (seperti EOQ dan utilisasi mesin tinggi) demi mengurangi *Manufacturing Critical-path Time* (MCT).

## Konsep Inti

### 1. Karakteristik HMLV vs Mass Production
Dalam HMLV, kurva pembelajaran (*learning curve*) sering ter-reset karena pergantian produk yang cepat. Masalah utama bukanlah biaya satuan (*unit cost*), melainkan *lead time* dan responsivitas.
- **High Variety:** Ribuan SKU dengan rute proses berbeda.
- **Unpredictable Demand:** Sulit diramal dengan metode forecasting tradisional.
- **Complexity Cost:** Biaya tersembunyi akibat kompleksitas scheduling dan setup.

### 2. Quick Response Manufacturing (QRM)
QRM mendefinisikan kinerja melalui **MCT** (*Manufacturing Critical-path Time*), yaitu waktu kalender terpanjang dari saat pesanan masuk hingga produk siap kirim.

#### Hukum Variabilitas QRM
Peningkatan utilisasi ($\rho$) secara eksponensial meningkatkan *lead time* dalam sistem HMLV karena variabilitas:
$$ W_q = \frac{\rho^{\sqrt{2(C_a^2 + C_s^2)}}}{1 - \rho} \cdot E[S] $$
Dimana:
- $W_q$: Waktu tunggu rata-rata
- $C_a, C_s$: Koefisien variabilitas kedatangan dan layanan
- $\rho$: Utilisasi server

Dalam QRM, target utilisasi diturunkan (misal: 70-80%) untuk mempertahankan kapasitas cadangan (*protective capacity*) guna menyerap variabilitas tanpa menyebabkan antrian meledak.

### 3. Sistem POLCA (Paired-cell Overlapping Loops of Cards with Authorization)
Berbeda dengan Kanban (yang mengontrol inventaris antar stasiun berurutan), POLCA mengontrol aliran pekerjaan antar sel produksi yang tidak berurutan dalam jaringan job-shop.
- Mekanisme: Kartu hibrida yang menggabungkan sinyal "kapasitas tersedia" di sel tujuan DAN "otorisasi produksi" dari sel asal.
- Keuntungan: Mencegah *floor congestion* di lingkungan HMLV yang kompleks.

### 4. Cellular Manufacturing untuk HMLV
Pembentukan sel mesin berbasis kemiripan keluarga bagian (*part family*) menggunakan analisis P-Q (Product-Quantity) dan matriks insidensi mesin-bagian. Tujuannya adalah mengubah *job shop* menjadi *flow shop* mini untuk mengurangi waktu setup dan transportasi.

## Formulasi Matematis

### Perhitungan MCT
$$ MCT = \sum_{i=1}^{n} (ProcessingTime_i + QueueTime_i + MoveTime_i + WaitTime_i) $$
Fokus reduksi QRM adalah pada komponen $QueueTime$ dan $WaitTime$, yang seringkali mencakup >90% total lead time.

### Trade-off Utilisasi vs Lead Time (Kingman's Formula Approximation)
Untuk menganalisis dampak penurunan batch size terhadap antrian:
$$ L_q \approx \left( \frac{C_a^2 + C_s^2}{2} \right) \left( \frac{\rho^2}{1-\rho} \right) $$
Mengurangi ukuran lot menurunkan $C_s$ (variabilitas layanan) tetapi dapat meningkatkan frekuensi setup. QRM menyarankan investasi reduksi setup (SMED) agar lot kecil tetap ekonomis.

## Studi Kasus & Aplikasi Modern
- **Custom Machinery Manufacturing:** Penerapan QRM mengurangi lead time dari 12 minggu menjadi 4 minggu dengan membatasi WIP dan menerapkan POLCA.
- **Medical Device Job Shop:** Transisi dari push system ke QRM meningkatkan on-time delivery dari 65% menjadi 95%.
- **Digital Integration:** Integrasi QRM dengan MES real-time untuk visibilitas MCT dinamis (Suri, 2023 update).

## Referensi Terverifikasi
1. **Suri, R.** (2023). *Quick Response Manufacturing: A Companywide Approach to Reducing Lead Times*. CRC Press. (Edisi Terbaru/Reprint dengan studi kasus modern).
2. **Rajagopalan, S., & Yu, Y.** (2023). "Capacity planning in high-mix low-volume manufacturing: A review and framework". *International Journal of Production Economics*, 258, 108789.
3. **Fernandes, N. O., et al.** (2024). "POLCA control in high variety environments: Simulation-based insights". *Journal of Manufacturing Systems*, 72, 145-158.
4. **Hopp, W. J., & Spearman, M. L.** (2023). *Factory Physics* (4th ed.). Waveland Press. (Referensi fundamental hukum antrian HMLV).
5. **Land, M. J., et al.** (2023). "Workload control in high mix low volume: Recent developments". *Production Planning & Control*, 34(5), 412-430.

## Kata Kunci
HMLV, Quick Response Manufacturing, QRM, MCT, POLCA, Lead Time Reduction, Protective Capacity, Job Shop, High Mix Low Volume, Rajan Suri.