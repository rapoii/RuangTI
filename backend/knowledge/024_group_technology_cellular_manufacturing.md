# Modul Riset Ilmiah: Group Technology & Cellular Manufacturing (Rank Order Clustering)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- King, J. R. (1980). *Machine-component grouping in production flow analysis: an approach using a rank order clustering algorithm*. International Journal of Production Research, 18(2), 213-232. DOI: [10.1080/00207548008919662](https://doi.org/10.1080/00207548008919662).
- Groover, M. P. (2015). *Automation, Production Systems, and Computer-Integrated Manufacturing* (4th ed.). Pearson. ISBN: 978-0133499612.
- Burbidge, J. L. (1975). *The Introduction of Group Technology*. Heinemann.

---

## 1. Konsep Dasar Group Technology (GT) & Manufaktur Seluler
Group Technology (GT) adalah filosofi manufaktur yang mengidentifikasi dan mengelompokkan part-part yang memiliki kesamaan geometri rancangan atau kesamaan langkah proses fabrikasi menjadi **Keluarga Part (*Part Families*)**, kemudian mendedikasikan sekelompok mesin yang berbeda untuk memproses keluarga tersebut dalam **Sel Manufaktur (*Machine Cells*)**.

### Keunggulan Tata Letak Seluler vs Fungsional (Process Layout):
- Mengurangi *Material Handling Distance* dan *Work-In-Process (WIP)* hingga 70-80%.
- Mengurangi waktu setup mesin secara drastis (*SMED concept*).
- Mempersingkat *Manufacturing Lead Time* dan mempermudah implementasi sistem tarik (*Pull System/Kanban*).

---

## 2. Algoritma Rank Order Clustering (ROC - King's Algorithm)
Algoritma ROC mengelompokkan matriks insidensi mesin-komponen ($M \times P$) biner ($1 =$ part diproses di mesin, $0 =$ tidak) menjadi blok-blok diagonal terisolasi.

### Langkah Sistematis Algoritma ROC:
1. **Pemberian Bobot Biner Kolom:**
   Untuk setiap kolom part $p$, hitung nilai desimal berdasarkan representasi bobot biner baris mesin $m$:
   $$W_p = \sum_{m=1}^M a_{mp} \times 2^{M - m}$$
2. **Urutkan Kolom:** Urutkan kolom part dari nilai $W_p$ **terbesar ke terkecil (Descending)**.
3. **Pemberian Bobot Biner Baris:**
   Untuk setiap baris mesin $m$, hitung nilai desimal berdasarkan posisi kolom part $p$:
   $$W_m = \sum_{p=1}^P a_{mp} \times 2^{P - p}$$
4. **Urutkan Baris:** Urutkan baris mesin dari nilai $W_m$ **terbesar ke terkecil (Descending)**.
5. **Uji Konvergensi:** Jika urutan matriks baris dan kolom tidak mengalami perubahan lagi, hentikan algoritma (*Selesai*). Jika masih berubah, ulangi dari langkah 1.

---

## 3. Metrik Evaluasi Kinerja Sel Manufaktur
- **Grouping Efficiency ($\eta$ - Chandrasekharan & Rajagopalan):**
  $$\eta = q \eta_1 + (1-q) \eta_2 = q \left( \frac{e_v}{e_v + e_e} \right) + (1-q) \left( \frac{M \times P - e_v - e_e}{M \times P - e_v - e_v^{\text{void}}} \right)$$
- **Exceptional Elements ($e_e$):** Part yang membutuhkan operasi mesin di luar sel induknya (membutuhkan *inter-cell material transfer*).
- **Voids ($e_v^{\text{void}}$):** Elemen nol di dalam blok sel (kapasitas mesin sel yang tidak terutilisasi oleh keluarga part terkait).
