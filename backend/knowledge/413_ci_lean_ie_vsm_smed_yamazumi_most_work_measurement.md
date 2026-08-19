# Modul 413: Rekayasa Perbaikan Berkelanjutan (Continuous Improvement / Lean IE), Value Stream Mapping (VSM), SMED 4-Tahap, Diagram Yamazumi, dan Maynard Operation Sequence Technique (MOST)

## 1. Domain Profesi & Ruang Lingkup
Profesi **Continuous Improvement (CI) Engineer / Lean Specialist & Industrial Ergonomics Officer** bertugas mengeliminasi 8 pemborosan (*8 Wastes of DOWNTIME: Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing*), menyeimbangkan lini perakitan menggunakan diagram Yamazumi, memangkas waktu setup pergantian cetakan via SMED, serta menetapkan waktu baku menggunakan sistem data standar gerakan MOST.

---

## 2. Pemetaan Aliran Nilai (Value Stream Mapping - VSM)

VSM memetakan aliran material dan informasi dari pintu bahan baku supplier hingga produk jadi sampai ke tangan pelanggan.

```
[Supplier] ===(Order Mingguan)===> [PPIC / MRP] ===(Jadwal Harian)===> [Pelanggan]
    |                                   |                                     ^
    v                                   v                                     |
[Stok Awal] --> [Proses 1: Stamping] --> [Stok WIP] --> [Proses 2: Welding] -> [Barang Jadi]
|-------------| C/T = 45s, C/O = 30m |------------| C/T = 60s, C/O = 10m |------------|
| 5 Hari Stok |                      | 3 Hari Stok|                      | 2 Hari Stok|
+-------------+----------------------+------------+----------------------+------------+
Timeline Lead Time: PLT = 5 + 3 + 2 = 10 Hari, Total Value Added (VA) = 45s + 60s = 105 Detik
```

### Formulasi Kunci VSM:
1. **Takt Time ($TT$)**: Kecepatan detak produksi yang didikte oleh permintaan pasar:
   $$TT = \frac{\text{Waktu Kerja Bersih yang Tersedia per Hari}}{\text{Permintaan Pelanggan per Hari}}$$
2. **Production Lead Time (PLT)**:
   $$\text{PLT} = \sum_{i=1}^{m} \left( \frac{\text{Jumlah Stok WIP}_i}{\text{Permintaan Harian}} \right) + \sum_{j=1}^{n} \text{Cycle Time}_j$$
3. **Pencegahan Overproduksi**: Nilai rasio efisiensi proses ($\text{PCE} = \frac{\text{Total VA Time}}{\text{PLT}} \times 100\%$, tipikal pabrik tradisional $< 5\%$, pabrik Lean $> 25\%$).

---

## 3. Metodologi SMED 4-Tahap (Single-Minute Exchange of Die - Shigeo Shingo)

Tujuan: Memangkas waktu henti pergantian tipe produk (*Changeover Time*) hingga di bawah **10 menit** (digit tunggal).

- **Tahap 0: Rekam Kondisi Awal**: Rekam video seluruh proses changeover eksisting dari awal mesin berhenti hingga produk pertama yang lolos QC keluar.
- **Tahap 1: Pisahkan Setup Internal vs Eksternal**:
  - *Internal Setup*: Aktivitas yang HANYA BISA dilakukan saat mesin mati (e.g., melepas baut cetakan lama, memasang dies baru).
  - *External Setup*: Aktivitas yang BISA dilakukan saat mesin MASIH BERJALAN (e.g., mengambil dies dari gudang, memanaskan oli pre-heater, menyiapkan dokumen kerja).
- **Tahap 2: Konversi Setup Internal Menjadi Eksternal**: Lakukan pra-pemanasan cetakan sebelum mesin mati, gunakan sistem pra-setting ketinggian alat.
- **Tahap 3: Sederhanakan Seluruh Aspek Setup**:
  - Ganti baut ulir panjang dengan sistem pengencang satu sentuhan (*One-Touch Clamps / Quick Release Pins / U-Slots*).
  - Standarisasi dimensi pelat luar cetakan agar tidak perlu mengubah setelan clamping.
  - Lakukan operasi paralel dengan dua teknisi yang terlatih.

---

## 4. Diagram Yamazumi (Yamazumi Balancing Chart)

Diagram batang bertumpuk (*Stacked Bar Chart*) yang memvisualisasikan waktu siklus setiap operator stasiun kerja dan membaginya menjadi 3 warna:
1. **Hijau (*Value-Added - VA*)**: Aktivitas yang mengubah bentuk/fungsi produk dan pelanggan rela membayar.
2. **Kuning (*Non-Value-Added Necessary - NNVA*)**: Aktivitas penunjang (e.g., mengambil baut dari bin, memegang part).
3. **Merah (*Waste / Muda*)**: Pemborosan murni (e.g., berjalan jauh mencari kunci pas, menunggu mesin, membetulkan posisi kabel kusut).

**Prosedur Balancing**: Pangkas aktivitas merah (Muda), lalu pindahkan elemen kerja kuning/hijau dari operator yang melebihi garis *Takt Time* ke operator yang masih memiliki waktu luang (*idle time*).

---

## 5. Maynard Operation Sequence Technique (Basic MOST)

Sistem pengukuran kerja tingkat tinggi (*Predetermined Motion Time System* - PMTS) yang jauh lebih cepat dibanding MTM-1.

### Konversi Satuan Waktu:
$$1\text{ TMU (Time Measurement Unit)} = 0.00001\text{ jam} = 0.0006\text{ menit} = 0.036\text{ detik}$$
$$1\text{ detik} = 27.8\text{ TMU}, \quad 1\text{ menit} = 1667\text{ TMU}$$

### Model Urutan Gerak Umum (General Move Sequence):
$$M = \left( A_i B_j G_k A_l B_m P_n A_p \right) \times 10 \text{ TMU}$$

Di mana:
- $A$: Jarak Tempuh Aksi (*Action Distance* - $A_0 = \le 5\text{ cm}$, $A_1 = \text{jangkauan tangan } \le 45\text{ cm}$, $A_3 = 1-2\text{ langkah kaki}$).
- $B$: Gerakan Tubuh (*Body Motion* - $B_0 = \text{tegak}$, $B_3 = \text{membungkuk & berdiri}$, $B_6 = \text{duduk/berlutut}$).
- $G$: Memegang Objek (*Gain Control* - $G_1 = \text{part ringan terisolasi}$, $G_3 = \text{part bertumpuk/kusut}$).
- $P$: Menempatkan Objek (*Placement* - $P_0 = \text{melepas bebas}$, $P_1 = \text{penempatan longgar}$, $P_3 = \text{penempatan presisi/toleransi ketat}$).

*Contoh Perhitungan*: Operator melangkah 2 langkah ($A_3$), membungkuk mengambil baut ($B_3$), mengambil baut dari kotak kusut ($G_3$), berdiri kembali ($A_3 B_0$), dan memasukkan baut ke lubang presisi ($P_3$), lalu tangan kembali netral ($A_0$).
$$\text{Total Index} = (3 + 3 + 3 + 3 + 0 + 3 + 0) = 15$$
$$\text{Waktu Baku} = 15 \times 10 = 150\text{ TMU} = 150 \times 0.036 = 5.40\text{ detik}$$

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Rother, M., & Shook, J. (2009). *Learning to See: Value Stream Mapping to Add Value and Eliminate MUDA*. Lean Enterprise Institute.
- Shingo, S. (1985). *A Revolution in Manufacturing: The SMED System*. Productivity Press.
- Zandin, K. B. (2003). *MOST Work Measurement Systems* (3rd ed.). CRC Press.
- Donoso-Puebla, K. A., & Avilés-Sacoto, S. V. (2025). *Optimizing production flow and order preparation through lean industrial engineering, Yamazumi line balancing, and SMED: A manufacturing case study*. Research in Industrial Engineering, 12(1), 102-118. DOI: [10.22034/riejournal.2025.223902](https://doi.org/10.22034/riejournal.2025.223902).
