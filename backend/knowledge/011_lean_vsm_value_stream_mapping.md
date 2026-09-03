# Modul Riset Ilmiah: Lean Manufacturing & Value Stream Mapping (VSM)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref & Google Scholar Validated):**
- Rother, M., & Shook, J. (1999/2003). *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*. Lean Enterprise Institute. ISBN: 978-0966784305. (Buku Panduan Standar VSM Global).
- Jones, D., Womack, J., Brunt, D., Lovejoy, M., & Shook, J. (2011). *Seeing the whole value stream*. Lean Enterprise Institute.
- Brunt, D. (2000). *From current state to future state: mapping the steel to component supply chain*. International Journal of Logistics.

---

## 1. Konsep Dasar Value Stream Mapping (VSM)
Value Stream Mapping (Pemetaan Aliran Nilai) adalah metodologi visual dalam *Lean Manufacturing* yang dicetuskan pertama kali di Toyota Production System (TPS) dan dipopulerkan oleh Mike Rother dan John Shook. VSM bertujuan untuk memetakan seluruh aktivitas (baik yang menambah nilai maupun tidak) yang diperlukan untuk membawa suatu produk dari bahan baku hingga sampai ke tangan pelanggan.

VSM menyoroti dua jenis aliran (*flows*) secara simultan:
1. **Material Flow (Aliran Material):** Pergerakan fisik barang (digambar dari kiri ke kanan).
2. **Information Flow (Aliran Informasi):** Sistem kontrol produksi, peramalan, dan pemesanan yang mengatur aliran material (digambar dari kanan ke kiri atau dari atas ke bawah).

---

## 2. Parameter & Metrik Utama dalam VSM

### A. Takt Time (Waktu Takt)
Kecepatan di mana pelanggan membeli produk. Ini adalah "detak jantung" (pacemaker) dari sistem produksi Lean.
$$\text{Takt Time} = \frac{\text{Waktu Kerja Tersedia (Net Available Time)}}{\text{Permintaan Pelanggan (Customer Demand)}}$$

### B. Cycle Time ($\text{CT}$ / Waktu Siklus)
Waktu aktual yang dibutuhkan stasiun kerja untuk memproses satu unit produk dari awal hingga selesai.

### C. Value-Added Time ($\text{VAT}$)
Waktu yang benar-benar mengubah bentuk, fungsi, atau karakter produk yang mana pelanggan bersedia membayarnya.

### D. Non-Value-Added Time ($\text{NVAT}$)
Semua bentuk pemborosan (*Muda*): waktu menunggu, inspeksi ulang, perpindahan barang, dan antrian inventory (WIP).

### E. Inventory Lead Time
Konversi jumlah tumpukan inventori fisik menjadi metrik waktu berdasarkan tingkat konsumsi hilir:
$$\text{Inventory Lead Time} = \frac{\text{Jumlah Inventory Fisik}}{\text{Permintaan Harian Pelanggan (Daily Demand)}}$$

### F. Production Lead Time ($\text{PLT}$) & Process Cycle Efficiency ($\text{PCE}$)
- **PLT:** Total waktu produk dari bahan baku masuk hingga produk jadi keluar (sering berdurasi hitungan hari atau minggu).
  $$\text{PLT} = \sum \text{Inventory Lead Times} + \sum \text{Process Cycle Times}$$
- **PCE:** Efisiensi proses, biasanya di industri tradisional sangat rendah ($\le 5\%$).
  $$\text{PCE} = \frac{\sum \text{Value-Added Time (VAT)}}{\text{Production Lead Time (PLT)}} \times 100\%$$

---

## 3. Delapan Pemborosan Utama (8 Wastes / DOWNTIME)
VSM digunakan untuk mengidentifikasi dan meminimalkan 8 bentuk pemborosan (*Muda*):
1. **D**efects (Cacat)
2. **O**verproduction (Produksi Berlebih) — *Pemborosan Paling Mematikan*
3. **W**aiting (Waktu Menganggur)
4. **N**on-Utilized Talent (Potensi Karyawan yang Tidak Dimanfaatkan)
5. **T**ransportation (Transportasi berlebih)
6. **I**nventory (Inventori yang menumpuk)
7. **M**otion (Pergerakan fisik operator yang tidak perlu)
8. **E**xtra Processing (Proses/Inspeksi berlebihan)

---

## 4. Metodologi Pelaksanaan (Rother & Shook)
1. **Pilih Product Family:** Mengelompokkan produk dengan proses routing mesin yang mirip (minimal 80% kesamaan).
2. **Current State Map:** Turun langsung ke lapangan (*Gemba*), kumpulkan data aktual, dan gambar peta saat ini (jangan gunakan data standar di komputer).
3. **Future State Map:** Rancang kondisi ideal dengan konsep aliran berkelanjutan (*continuous flow*), sistem tarik (*pull system / Kanban*), supermarket inventori, dan pacemaking.
4. **Implementation Plan:** Buat rencana kerja (Kaizen blitz) untuk bergerak dari *Current* ke *Future State*.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
