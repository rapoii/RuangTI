# Modul Komprehensif: Perancangan Tata Letak Fasilitas & Material Handling
**Sumber Referensi:** *Facilities Planning* (James A. Tompkins et al.), *Systematic Layout Planning* (Richard Muther), *Plant Layout and Materials Handling* (James M. Apple).

---

## 1. Sistematika Perancangan Tata Letak (Systematic Layout Planning - SLP)
SLP yang dikembangkan oleh Richard Muther adalah metodologi standar industri terstruktur untuk merancang tata letak fasilitas manufaktur dan pergudangan melalui tahapan:
1. **Analisis Aliran Material (P-Q-R-S-T Analysis)**:
   - $P$ (Product): Jenis produk yang dibuat.
   - $Q$ (Quantity): Jumlah volume produksi.
   - $R$ (Routing): Urutan proses operasi.
   - $S$ (Supporting Services): Layanan pendukung (maintenance, QC, kantin).
   - $T$ (Time): Waktu standar dan jadwal produksi.
2. **Kuantitatif (From-To Chart & MHC)**: Analisis aliran material berat/volume antar departemen.
3. **Kualitatif (Activity Relationship Chart - ARC)**: Analisis kedekatan non-aliran (keselamatan, kebisingan, kemudahan supervisi).
4. **Activity Relationship Diagram (ARD)**: Diagram blok spasial tanpa skala luas.
5. **Space Relationship Diagram (SRD)**: Penggabungan ARD dengan kebutuhan luas area riil per departemen + kelonggaran gang (*aisle allowance*).
6. **Evaluasi Alternatif Layout**: Algoritma CRAFT, ALDEP, CORELAP, atau BLOCPLAN.

---

## 2. Formulasi Kuantitatif: Ongkos Material Handling (MHC)
Ongkos Material Handling (Material Handling Cost - MHC) dihitung berdasarkan perkalian antara volume aliran, jarak lintasan antar departemen, dan tarif ongkos angkut per satuan jarak per satuan volume.

### Formulasi Matematis:
$$\text{MHC} = \sum_{i=1}^{n} \sum_{j=1}^{n} D_{ij} \times F_{ij} \times C_{ij}$$

*Dimana:*
- $n$: Jumlah total departemen / stasiun kerja.
- $D_{ij}$: Jarak perpindahan dari departemen $i$ ke departemen $j$ (meter).
  - Jarak Rectilinear (Manhattan): $D_{ij} = |x_i - x_j| + |y_i - y_j|$
  - Jarak Euclidean (Garis Lurus): $D_{ij} = \sqrt{(x_i - x_j)^2 + (y_i - y_j)^2}$
- $F_{ij}$: Frekuensi / volume perpindahan material dari departemen $i$ ke departemen $j$ (satuan beban/hari, kontainer/hari, ton/hari).
- $C_{ij}$: Biaya penanganan material per satuan jarak per satuan volume (Rp/meter-beban atau USD/meter-beban).

---

## 3. Formulasi Kualitatif: Activity Relationship Chart (ARC)
ARC digunakan untuk menentukan derajat kepentingan keterikatan letak antar departemen berdasarkan kriteria teknis dan manajerial.

### Tabel Sandi Derajat Kedekatan (Muther Closeness Rating):
| Sandi | Derajat Kedekatan | Arti / Alasan Penempatan | Bobot Skor Standar | Warna Garis |
| :---: | :--- | :--- | :---: | :---: |
| **A** | *Absolutely Necessary* | Wajib Bersebelahan (Aliran material kontinu, pipa bersama) | **4** (atau 6) | Merah (4 garis) |
| **E** | *Especially Important* | Sangat Penting Berdekatan (Supervisi sama, utilitas bersama) | **3** (atau 5) | Kuning (3 garis) |
| **I** | *Important* | Penting Berdekatan (Komunikasi berkala, personil sama) | **2** (atau 4) | Hijau (2 garis) |
| **O** | *Ordinary Closeness* | Cukup / Biasa (Tidak ada keharusan, kenyamanan umum) | **1** (atau 3) | Biru (1 garis) |
| **U** | *Unimportant* | Tidak Penting (Tidak ada keterkaitan aktivitas) | **0** | Tidak berwarna |
| **X** | *Undesirable* | Tidak Dikehendaki Dekat (Debu, getaran, kebisingan, bahaya K3) | **-1** (atau -4) | Cokelat/Hitam (Zigzag) |

### Formulasi Total Closeness Rating (TCR):
$$\text{TCR}_i = \sum_{j=1, j \neq i}^{n} \text{Skor}(R_{ij})$$
Departemen dengan nilai TCR tertinggi ditempatkan pertama kali pada pusat layout (*centroid*).

---

## 4. Algoritma Optimasi Tata Letak: CRAFT (Computerized Relative Allocation of Facilities Technique)
CRAFT adalah algoritma heuristik bertipe *improvement* yang meminimalkan total biaya material handling dengan melakukan pertukaran lokasi antar departemen secara berulang (*pairwise interchange* atau *3-way interchange*).

### Aturan Pertukaran Departemen pada CRAFT:
1. Dua departemen hanya dapat ditukar jika:
   - Memiliki luas area yang sama ($A_i = A_j$), ATAU
   - Saling bersebelahan (*adjacent*) dan berbagi batas wilayah (*shared border*).
2. Perhitungan reduksi biaya $(\Delta \text{Cost})$:
   $$\Delta \text{Cost} = \text{MHC}_{\text{awal}} - \text{MHC}_{\text{setelah pertukaran}}$$
3. CRAFT memilih pertukaran dengan $\Delta \text{Cost}$ penurunan terbesar hingga tidak ditemukan lagi pertukaran yang menghasilkan penghematan biaya.

---

## 5. Penentuan Kebutuhan Luas Lantai & Allowance Gang (Aisle)
Luas total fasilitas ($A_{\text{total}}$) memperhitungkan area mesin, operator, material dalam proses (WIP), dan ruang gerak (*aisle*).

$$\text{Luas Bersih Mesin} = L_m \times W_m \times N_m$$
$$\text{Luas Total Departemen} = \text{Luas Mesin} + \text{Luas Operator} + \text{Luas Material WIP} + \text{Luas Maintenance}$$
$$A_{\text{total}} = \sum (\text{Luas Total Departemen}) \times (1 + \% \text{Aisle Allowance})$$

*Standar Aisle Allowance Industri:*
- Pekerjaan ringan / manusia: $15\% - 20\%$
- Hand pallet / gerobak: $20\% - 30\%$
- Forklift / AGV / Truk: $30\% - 45\%$
