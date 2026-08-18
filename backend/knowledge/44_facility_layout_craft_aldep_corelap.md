# Modul Riset Ilmiah: Algoritma Perancangan Tata Letak Fasilitas (CRAFT, ALDEP, CORELAP) & Tata Letak Seluler
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Tompkins, J. A., White, J. A., Bozer, Y. A., & Tanchoco, J. M. A. (2010). *Facilities Planning* (4th ed.). Wiley. ISBN: 978-0470444047.
- Sarıkaya, H. A., Dinç, H. Y., & Urgancı, H. (2024). *Facility layout improvement in brake pad manufacturing using CRAFT algorithm*. Uygulamalı Mühendislik.
- İnce, M. N., & Taşdemir, Ç. (2024). *Facility layout planning through the ALDEP Method in the wooden cable reels industry*. Turkish Journal of Forestry.
- Chau, V. T. T. B., Phuong, D. N. A., & Tien, N. N. (2026). *Facility layout optimization and simulation for operational efficiency and customer experience*. Tạp chí Khoa học và Công nghệ.
- Isnaini, W., & Masruroh, N. A. (2025). *Dynamic planning approach of facility layout from industry perspectives: A systematic literature review*. Production Engineering Archives.

---

## 1. Algoritma Tata Letak Konstruksi (Construction Algorithms)
Algoritma konstruksi digunakan untuk membangun tata letak dari awal (*greenfield* atau *empty building*) dengan memasukkan departemen satu per satu ke dalam grid fasilitas berdasarkan kedekatan (*closeness rating*).

### A. ALDEP (Automated Layout Design Program)
Dikembangkan oleh Seehof dan Evans, ALDEP menggunakan pendekatan sapuan vertikal/horizontal (*sweep method*).
- **Input:** Activity Relationship Chart (ARC), ukuran tiap departemen, lebar sweep (biasanya 1-3 sel), jumlah iterasi minimum.
- **Mekanisme Seleksi:**
  1. Departemen pertama dipilih secara acak (biasanya yang memiliki luas terbesar atau hubungan mutlak terbanyak).
  2. Departemen berikutnya dipilih berdasarkan skor hubungan tertinggi (*A = Mutlak, E = Sangat Penting*) dengan departemen yang baru saja diletakkan. Jika ada seri, dipilih acak.
- **Karakteristik:** Karena ada elemen acak (*random tie-breaking*), ALDEP dapat menghasilkan banyak alternatif tata letak dari input yang sama.

### B. CORELAP (Computerized Relationship Layout Planning)
Dikembangkan oleh Lee dan Moore, CORELAP membangun tata letak dari pusat bangunan ke arah luar secara spiral/konsentris.
- **Mekanisme Seleksi:**
  1. Menggunakan **Total Closeness Rating (TCR)**. TCR dihitung dengan menjumlahkan nilai numerik ARC ($A=6, E=5, I=4, O=3, U=2, X=1$).
  2. Departemen dengan TCR tertinggi diletakkan pertama di tengah.
  3. Departemen berikutnya dipilih berdasarkan hubungan terkuat dengan departemen pusat.
- **Karakteristik:** Bersifat deterministik (hanya menghasilkan satu tata letak optimal untuk satu set input).

---

## 2. Algoritma Tata Letak Perbaikan (Improvement Algorithms)
Digunakan untuk mengoptimalkan tata letak yang sudah ada (*brownfield* atau hasil dari ALDEP/CORELAP) melalui mekanisme pertukaran (*interchange*).

### CRAFT (Computerized Relative Allocation of Facilities Technique)
Dikembangkan oleh Armour dan Buffa, CRAFT mengevaluasi biaya pemindahan bahan (Material Handling Cost - MHC) menggunakan model pertukaran pasangan (*pairwise interchange*).
- **Input:** Tata letak awal, matriks From-To Chart (Volume Material), matriks Ongkos Transportasi (Unit Cost per meter).
- **Fungsi Tujuan Minimasi MHC:**
  $$\min Z = \sum_{i=1}^{n} \sum_{j=1}^{n} V_{ij} \cdot C_{ij} \cdot D_{ij}$$
  *(Di mana $V_{ij}$ adalah volume, $C_{ij}$ biaya pemindahan per unit jarak, dan $D_{ij}$ jarak Rectilinear antar pusat massa departemen).*
- **Syarat Pertukaran CRAFT:** Hanya departemen yang **memiliki luas yang sama** ATAU **saling bersebelahan (adjacent)** yang dapat dipertukarkan.

---

## 3. Tata Letak Seluler (Cellular Layout / Group Technology)
Mengkombinasikan efisiensi dari tata letak produk (Product Layout) dengan fleksibilitas tata letak proses (Process Layout).
- Mengelompokkan mesin ke dalam "Sel" berdasarkan *Part Families* (suku cadang yang membutuhkan rute pemrosesan serupa).
- **Algoritma Pengelompokan Utama:** Rank Order Clustering (ROC) King's Algorithm, Jaccard Similarity Coefficient, dan algoritma metaheuristik Particle Swarm Optimization (PSO) untuk dynamic facility layout (Xu et al., 2024).
- **Metrik Evaluasi Seluler:** *Exceptional Elements* (part yang harus berpindah antar sel), dihitung untuk meminimalkan perpindahan antar-sel (*Inter-cell material handling*).
