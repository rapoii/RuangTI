# Modul 412: Pengadaan Strategis (Strategic Procurement), Matriks Portofolio Kraljic, Total Cost of Ownership (TCO), dan Aturan Risiko Incoterms® 2020

## 1. Domain Profesi & Ruang Lingkup
Profesi **Strategic Procurement Specialist / Sourcing Manager & Buyer** bertugas mengelola belanja pengadaan material (*Spend Analysis*), menyusun strategi kontrak pemasok berbasis risiko rantai pasok, menghitung total biaya kepemilikan aset (*Total Cost of Ownership*), serta menegosiasikan klausul serah terima barang internasional (*Incoterms 2020*).

---

## 2. Matriks Portofolio Pembelian Kraljic (Kraljic Portfolio Matrix - 1983)

Mengelompokkan seluruh kategori belanja material ke dalam matriks $2 \times 2$ berdasarkan **Dampak Finansial terhadap Profit (*Profit Impact*)** dan **Risiko Kompleksitas Pasar Pasokan (*Supply Risk*)**:

```
Tinggi ^
       |  [LEVERAGE ITEMS]             |  [STRATEGIC ITEMS]
       |  - Profit Impact: TINGGI      |  - Profit Impact: TINGGI
       |  - Supply Risk: RENDAH        |  - Supply Risk: TINGGI
       |  - Strategi: Tender Kompetitif|  - Strategi: Aliansi Jangka Panjang
Dampak |-------------------------------+--------------------------------
Profit |  [NON-CRITICAL / ROUTINE]     |  [BOTTLENECK ITEMS]
       |  - Profit Impact: RENDAH      |  - Profit Impact: RENDAH
       |  - Supply Risk: RENDAH        |  - Supply Risk: TINGGI
       |  - Strategi: E-Procurement    |  - Strategi: Amankan Pasokan (Buffer)
Rendah +-------------------------------+-------------------------------->
       Rendah                  Risiko Pasokan                   Tinggi
```

### Strategi Pengadaan untuk 4 Kuadran Kraljic:
1. **Strategic Items (e.g., Mesin Utama, Chip Semikonduktor Kustom)**: Hubungan kemitraan strategis (*Strategic Partnership*), kontrak jangka panjang multi-tahun, *collaborative cost breakdown*, dan program perbaikan bersama.
2. **Bottleneck Items (e.g., Suku Cadang Khusus Paten Monopoli)**: Jamin ketersediaan stok pengaman (*High Safety Stock*), cari material alternatif, dan buat klausul pinalti *Service Level Agreement* (SLA).
3. **Leverage Items (e.g., Baja Standar, Bahan Kimia Komoditas, Kardus Kemasan)**: Lakukan lelang tender terbuka (*Competitive Bidding*), konsolidasi volume belanja antar divisi (*Volume Aggregation*), dan kontrak jangka pendek.
4. **Routine / Non-Critical Items (e.g., Alat Tulis Kantor, Baut Standar, Perlengkapan Kebersihan)**: Otomasi pengadaan via katalog digital (*E-Procurement / P-Cards*) untuk meminimalkan biaya administrasi transaksi.

---

## 3. Total Cost of Ownership (TCO) Calculation

Biaya pengadaan barang/mesin tidak hanya sebatas harga beli awal (*Purchase Price*), melainkan akumulasi seluruh biaya siklus hidup (*Life Cycle Cost*):

### Formula Matematis TCO:
$$\text{TCO} = P_{\text{acquisition}} + \sum_{t=1}^{N} \frac{C_{\text{operating}, t} + C_{\text{maintenance}, t} + C_{\text{quality/failure}, t} + C_{\text{inventory}, t}}{(1 + r)^t} - \frac{S_{\text{salvage}}}{(1 + r)^N}$$

Di mana:
- $P_{\text{acquisition}}$: Biaya perolehan awal (Harga beli $+$ Biaya kirim/freight $+$ Bea masuk pajak $+$ Biaya instalasi & komisioning).
- $C_{\text{operating}, t}$: Biaya konsumsi energi listrik, bahan bakar, dan operator pada tahun $t$.
- $C_{\text{maintenance}, t}$: Biaya suku cadang, pelumas, dan teknisi servis pada tahun $t$.
- $C_{\text{quality/failure}, t}$: Biaya akibat cacat material (*scrap, rework*, klaim garansi, waktu henti/downtime).
- $S_{\text{salvage}}$: Nilai sisa penjualan kembali aset pada akhir tahun ke-$N$.
- $r$: Tingkat diskonto modal (*Discount Rate / WACC*).

---

## 4. Alokasi Tanggung Jawab & Titik Risiko Incoterms® 2020 (ICC)

11 Aturan Perdagangan Internasional Kamar Dagang Internasional (ICC):

| Kategori | Incoterms® 2020 | Titik Peralihan Risiko (*Point of Risk Transfer*) | Biaya Freight Utama Dibayar Oleh |
| :--- | :--- | :--- | :--- |
| **Grup E** | **EXW (Ex Works)** | Di lantai pabrik/gudang Penjual (Sebelum dimuat ke truk) | Pembeli (100%) |
| **Grup F** | **FCA (Free Carrier)** | Saat diserahkan ke kurir pengangkut pertama di negara asal | Pembeli |
| | **FOB (Free on Board)** | Saat barang **melewati pagar kapal** di pelabuhan muat asal | Pembeli |
| **Grup C** | **CFR (Cost and Freight)**| Risiko beralih di pelabuhan asal, tetapi biaya kirim dibayar penjual | Penjual (Ongkos Kapal) |
| | **CIF (Cost, Insurance, Freight)** | Risiko di pelabuhan asal, penjual membayar asuransi laut minimum | Penjual (Ongkos + Asuransi) |
| | **CPT / CIP** | Versi multimoda (darat/udara/kontainer) dari CFR dan CIF | Penjual |
| **Grup D** | **DAP (Delivered at Place)** | Di lokasi tujuan pembeli, sebelum barang dibongkar dari truk | Penjual (Belum Bea Masuk) |
| | **DPU (Delivered at Place Unloaded)** | Di lokasi tujuan setelah **selesai dibongkar** oleh penjual | Penjual (Termasuk Bongkar) |
| | **DDP (Delivered Duty Paid)** | Di pintu gudang pembeli, **seluruh pajak/bea masuk lunas** | Penjual (Layanan Pintu-ke-Pintu) |

---

## 5. Evaluasi Kinerja Pemasok (Vendor Performance Evaluation - AHP Weighted Rating)

Nilai Skor Akhir Pemasok ($S_{\text{vendor}}$):
$$S_{\text{vendor}} = w_Q S_Q + w_D S_D + w_C S_C + w_S S_S$$

Di mana:
- $S_Q$: Skor Kualitas ($\text{Quality Rate} = 100\% - \text{Rejection Rate}$).
- $S_D$: Skor Pengiriman ($\text{On-Time Delivery Rate} = \frac{\text{Tepat Waktu}}{\text{Total PO}} \times 100\%$).
- $S_C$: Skor Daya Saing Biaya ($\text{Cost Competitiveness} = \frac{\text{Harga Termurah}}{\text{Harga Vendor}} \times 100\%$).
- $S_S$: Skor Layanan & Kepatuhan K3/Lingkungan (*Service & ESG Audit*).
- Syarat bobot: $\sum w_i = 1.0$ (ditentukan melalui kuesioner matriks perbandingan berpasangan AHP dengan $CR < 0.10$).

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Kraljic, P. (1983). *Purchasing must become supply management*. Harvard Business Review, 61(5), 109-117.
- International Chamber of Commerce. (2020). *Incoterms® 2020: ICC rules for the use of domestic and international trade terms*. Paris: ICC Publishing.
- Monczka, R. M., Handfield, R. B., Giunipero, L. C., & Patterson, J. L. (2020). *Purchasing and Supply Chain Management* (7th ed.). Cengage Learning.
- Weber, J., & Johansson, L. (2025). *Aligning strategic procurement and inventory management across industrial manufacturing boundaries*. International Journal of Physical Distribution & Logistics Management, 55(1), 32-49.
