# Modul Riset Ilmiah: Logistik Balik (Reverse Logistics), Rantai Pasok Tertutup, & Remanufaktur
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Guide, V. D. R., & Van Wassenhove, L. N. (2009). *The Evolution of Closed-Loop Supply Chain Research*. Operations Research, 57(1), 10-18. (Foundational Benchmark).
- Monferdini, L., Pini, B., Tebaldi, L., dkk. (2024). *The role of simulation-based optimization in remanufacturing and reverse logistics: a systematic literature review*. Journal of Remanufacturing, Springer. DOI: [10.1007/s13243-024-00155-2](https://doi.org/10.1007/s13243-024-00155-2).
- Akram, H. W. (2026). *Closed-loop and circular supply chains: a meta-review of reverse logistics, product lifecycle and zero-waste strategies*. International Journal of Industrial Engineering and Operations Management, Emerald.
- Ren, Y., Lu, X., Guo, H., dkk. (2023). *A review of combinatorial optimization problems in reverse logistics and remanufacturing for end-of-life products*. Mathematics (MDPI), 11(2), 298. DOI: [10.3390/math11020298](https://doi.org/10.3390/math11020298).

---

## 1. Konsep Dasar Reverse Logistics & Closed-Loop Supply Chain (CLSC)
Reverse Logistics adalah proses perencanaan, pelaksanaan, dan pengendalian aliran barang dari titik konsumsi kembali ke titik asal atau pusat pemulihan (*Recovery Center*) untuk merebut kembali nilai ekonomi sisa (*Value Recovery*) atau pembuangan akhir yang ramah lingkungan.

### Perbedaan Aliran Rantai Pasok Maju (Forward) vs Mundur (Reverse):
| Karakteristik | Forward Supply Chain | Reverse Supply Chain |
| :--- | :--- | :--- |
| **Peramalan Permintaan** | Relatif stabil & terprediksi | Sangat tidak pasti (*Volatile*) |
| **Kualitas Produk** | Seragam & Terstandarisasi | Bervariasi tergantung usia pakai (*Core Grade*) |
| **Waktu Kedatangan** | Terjadwal sesuai PO | Acak tergantung kemauan konsumen |
| **Titik Aliran** | Satu Sumber $\rightarrow$ Banyak Konsumen | Banyak Konsumen $\rightarrow$ Satu Pusat Konsolidasi |

---

## 2. Tingkatan Pemulihan Produk (Hierarchy of Product Recovery)
1. **Direct Reuse:** Pemakaian kembali tanpa pemrosesan fisik (misal: botol kaca, palet kayu).
2. **Repair & Refurbish:** Perbaikan komponen rusak kecil untuk mengembalikan fungsi operasional.
3. **Remanufacturing (Remanufaktur):** Pembongkaran total (*Complete Disassembly*), pembersihan ultrasonik, inspeksi dimensi, pemesinan ulang part aus, dan perakitan kembali hingga mencapai **kualitas dan garansi setara produk baru (*As-New Condition*)**.
4. **Cannibalization / Harvesting:** Mengambil modul suku cadang yang masih bagus dari produk rusak parah.
5. **Recycling (Daur Ulang Material):** Peleburan material mentah (baja, aluminium, plastik) menjadi bahan baku sekunder.

---

## 3. Disassembly Line Balancing Problem (DLBP)
Optimasi pembongkaran produk purna-pakai (*End-of-Life - EOL*) dengan urutan pembongkaran yang meminimalkan stasiun kerja dan bahaya material berbahaya:
$$\text{Hazard Index Minimization} \quad \min H = \sum_{k=1}^K h_k \cdot t_k$$
