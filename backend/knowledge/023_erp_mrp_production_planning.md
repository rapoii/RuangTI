# Modul Riset Ilmiah: Perencanaan Produksi Terintegrasi (ERP, MRP II, & MPS)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Vollmann, T. E., Berry, W. L., Whybark, D. C., & Jacobs, F. R. (2005). *Manufacturing Planning and Control for Supply Chain Management* (5th ed.). McGraw-Hill. ISBN: 978-0072988369. (APICS Standard).
- Orlicky, J. (1975). *Material Requirements Planning: The New Way of Life in Production and Inventory Management*. McGraw-Hill.
- Wight, O. (1984). *Manufacturing Resource Planning: MRP II*. Oliver Wight Limited Publications.

---

## 1. Hierarki Sistem Perencanaan & Pengendalian Produksi (PPIC / MPC Framework)
Sistem perencanaan produksi dioperasikan secara berjenjang dari horizon strategis hingga eksekusi harian lantai pabrik:
$$\text{Sales and Operations Planning (S&OP)} \rightarrow \text{Master Production Schedule (MPS)} \rightarrow \text{Material Requirements Planning (MRP)} \rightarrow \text{Shop Floor Control / Dispatching}$$

---

## 2. Master Production Schedule (MPS) & Rough-Cut Capacity Planning (RCCP)
- **MPS (Jadwal Induk Produksi):** Menyatakan jumlah dan waktu produksi untuk produk jadi (*End Items*) spesifik, bukan agregat.
- **Available-to-Promise (ATP):** Jumlah produk yang belum terikat pesanan pelanggan dan dapat dijanjikan kepada pesanan baru:
  - **ATP Periode 1:**
    $$\text{ATP}_1 = (\text{On-Hand Inventory} + \text{MPS}_1) - \sum \text{Customer Orders Sebelum MPS Berikutnya}$$
  - **ATP Periode $t > 1$:**
    $$\text{ATP}_t = \text{MPS}_t - \sum \text{Customer Orders Sebelum MPS Berikutnya}$$

---

## 3. Material Requirements Planning (MRP) & Logika Ledakan BOM (BOM Explosion)
MRP mengkonversi permintaan produk jadi independen (*Independent Demand*) dari MPS menjadi kebutuhan komponen dependen (*Dependent Demand*) melalui struktur pohon produk (*Bill of Materials - BOM*).

### 4 Langkah Logika Inti MRP:
1. **Gross Requirements (Kebutuhan Kotor):** Total permintaan komponen pada periode tertentu dari hasil ledakan (*explosion*) level di atasnya.
2. **Net Requirements (Kebutuhan Bersih):**
   $$\text{Net Req}_t = \max(0, \text{Gross Req}_t - \text{Projected On-Hand}_{t-1} - \text{Scheduled Receipts}_t + \text{Safety Stock})$$
3. **Planned Order Receipts:** Jumlah pesanan yang harus tiba pada periode $t$ (disesuaikan dengan aturan ukuran lot).
4. **Planned Order Releases:** Memundurkan waktu pemesanan dari *Planned Order Receipts* sebesar waktu tunggu (*Lead Time Offset*):
   $$\text{Release Time} = t - \text{Lead Time}$$

### Teknik Penentuan Ukuran Lot (Lot-Sizing Rules):
- **Lot-for-Lot (L4L):** Ukuran pesanan tepat sama dengan kebutuhan bersih pada periode bersangkutan (meminimalkan biaya simpan, ideal untuk JIT).
- **Economic Order Quantity (EOQ):** Ukuran lot tetap berbasis trade-off biaya pesan dan simpan tahunan: $\text{EOQ} = \sqrt{\frac{2DS}{H}}$.
- **Silver-Meal Heuristic:** Memilih rentang periode $T$ yang meminimalkan rata-rata biaya per periode:
  $$C(T) = \frac{S + H \sum_{t=1}^T (t-1) D_t}{T}$$
  *Hentikan penambahan periode ketika $C(T+1) > C(T)$.*
- **Part-Period Balancing (PPB):** Memilih ukuran lot sedemikian rupa sehingga total biaya simpan akumulatif paling mendekati biaya pemesanan ($S$).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
