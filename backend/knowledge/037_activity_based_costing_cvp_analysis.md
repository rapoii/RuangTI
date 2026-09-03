# Modul Riset Ilmiah: Analisis Biaya Berbasis Aktivitas (Activity-Based Costing - ABC) & Analisis Cost-Volume-Profit (CVP)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Kaplan, R. S., & Cooper, R. (1998). *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*. Harvard Business School Press. ISBN: 978-0875847887.
- Kaplan, R. S., & Anderson, S. R. (2004). *Time-Driven Activity-Based Costing*. Harvard Business Review, 82(11), 131-138.
- Blank, L., & Tarquin, A. (2018). *Engineering Economy* (8th ed.). McGraw-Hill.
- Don, V. S. J. (2025). *Applying activity-based costing to optimize product-level profitability*. Industrial Engineering and Management, Tampere University.
- Zahirović, S. (2024). *Multiproduct Cost-Volume-Profit Analysis: Mathematical Representation of Classical Linear Models*. BH Economic Forum.

---

## 1. Activity-Based Costing (ABC) vs Akuntansi Biaya Tradisional
Sistem akuntansi biaya tradisional sering mendistorsi biaya produk karena mengalokasikan biaya overhead pabrik (*Factory Overhead - FOH*) hanya berdasarkan satu pemicu volume (*volume-based driver* seperti jam tenaga kerja langsung atau jam mesin). Hal ini menyebabkan produk bervolume tinggi mensubsidi silang produk bervolume rendah yang rumit.

### Dua Tahap Alokasi ABC:
1. **Tahap 1 (Konsumsi Sumber Daya ke Aktivitas):** Mengalokasikan biaya sumber daya (gaji teknisi, depresiasi mesin, listrik) ke dalam kelompok biaya aktivitas (*Activity Cost Pools*).
2. **Tahap 2 (Konsumsi Aktivitas ke Produk):** Membebankan biaya dari setiap cost pool ke produk berdasarkan pemicu aktivitas (*Activity Cost Driver*):
   $$\text{Tarif Pool Aktivitas}_k = \frac{\text{Total Biaya Overhead Pool}_k}{\text{Kapasitas Pemicu Aktivitas}_k}$$
   $$\text{Overhead Dibebankan ke Produk } j = \sum_{k=1}^K (\text{Tarif Pool}_k \times \text{Konsumsi Pemicu}_{jk})$$

---

## 2. Time-Driven Activity-Based Costing (TDABC)
Kaplan & Anderson (2004) menyederhanakan ABC dengan mengeliminasi survei wawancara dan langsung mengestimasi dua parameter:
1. **Kapasitas Biaya Praktis per Satuan Waktu:**
   $$c_i = \frac{\text{Total Biaya Sumber Daya Departemen } i}{\text{Kapasitas Waktu Kerja Praktis (Menit)}}$$
2. **Persamaan Waktu (*Time Equations*):**
   $$t_{j} = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p$$
   $$\text{Biaya Aktivitas Produk } j = c_i \times t_j$$

---

## 3. Analisis Biaya-Volume-Laba (Cost-Volume-Profit / CVP) & Titik Impas (BEP)
CVP memodelkan hubungan linier antara total pendapatan, total biaya tetap (*Fixed Cost - FC*), total biaya variabel (*Variable Cost - VC*), dan laba operasi ($\pi$).

### Formulasi Titik Impas (Break-Even Point - BEP):
1. **BEP dalam Satuan Unit ($Q_{\text{BEP}}$):**
   $$Q_{\text{BEP}} = \frac{FC}{P - V} = \frac{FC}{\text{Contribution Margin per Unit (CM)}}$$
2. **BEP dalam Nilai Rupiah/Mata Uang ($R_{\text{BEP}}$):**
   $$R_{\text{BEP}} = \frac{FC}{\text{Contribution Margin Ratio (CMR)}} = \frac{FC}{(P - V)/P}$$
3. **Volume Produksi untuk Target Laba Tertentu ($\pi_{\text{target}}$):**
   $$Q_{\text{target}} = \frac{FC + \pi_{\text{target}}}{P - V}$$
4. **Margin of Safety (MoS):**
   $$\text{MoS (\%)} = \frac{\text{Penjualan Aktual / Anggaran} - \text{Penjualan BEP}}{\text{Penjualan Aktual / Anggaran}} \times 100\%$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
