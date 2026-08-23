# Modul Riset Ilmiah: Group Technology & Cellular Manufacturing (Rank Order Clustering)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- King, J. R. (1980). *Machine-component grouping in production flow analysis: an approach using a rank order clustering algorithm*. International Journal of Production Research, 18(2), 213-232. DOI: [10.1080/00207548008919662](https://doi.org/10.1080/00207548008919662).
- Groover, M. P. (2015). *Automation, Production Systems, and Computer-Integrated Manufacturing* (4th ed.). Pearson. ISBN: 978-0133499612.
- Burbidge, J. L. (1975). *The Introduction of Group Technology*. Heinemann.
- Wemmerlöv, U., & Hyer, N. L. (1989). *Cellular manufacturing in the US industry: A survey of users*. International Journal of Production Research, 27(9), 1511-1530.
- Chandrasekharan, M. P., & Rajagopalan, R. (1986). *MODROC: An extension of rank order clustering for group technology*. International Journal of Production Research, 24(5).
- Cell Formation and Intra-Cell Optimal Machine Location in CMS: A Novel Genetic Algorithm Based on Machine Encoding (2023). Applied Sciences (MDPI), 13(22), 12323.

---

## 1. Konsep Dasar Group Technology (GT) & Manufaktur Seluler

Group Technology (GT) adalah filosofi manufaktur yang mengidentifikasi dan mengelompokkan part-part yang memiliki kesamaan geometri desain atau kesamaan langkah proses fabrikasi menjadi **Keluarga Part (*Part Families*)**, kemudian mendedikasikan sekelompok mesin berbeda tipe untuk memproses keluarga tersebut dalam satu **Sel Manufaktur (*Machine Cell*)** dengan tata letak mini-line (umumnya berbentuk U). Identifikasi kemiripan part difasilitasi sistem pengkodean GT (misalnya kode bentuk Opitz 5 digit + digit suplemen) untuk retrieval desain dan standardisasi proses.

### Keunggulan Tata Letak Seluler vs Fungsional (Process Layout)
1. Jarak material handling dan Work-In-Process (WIP) turun drastis (studi survei Wemmerlöv & Hyer melaporkan reduksi hingga $70\%-80\%$ pada kasus implementasi).
2. Waktu setup menurun karena kemiripan part dalam sel (sinergi dengan konsep SMED).
3. Manufacturing lead time memendek dan aliran menjadi sederhana — prasyarat implementasi sistem tarik (*pull system / Kanban*).
4. Akuntabilitas kualitas per sel jelas (quality ownership) dan multi-skilling operator terdorong.

Kelemahan yang harus dikelola: kehilangan fleksibilitas antar-sel, duplikasi mesin rendah-utilisasi, dan munculnya *exceptional elements* (part yang harus mengunjungi sel lain).

## 2. Formulasi Matematis

### A. Matriks Insidensi Mesin-Komponen
Data dasar adalah matriks biner $A = [a_{mp}]$ berukuran $M \times P$, dengan $a_{mp} = 1$ jika part $p$ diproses pada mesin $m$. Tujuan cell formation adalah menyusun ulang baris-kolom sehingga blok diagonal padat (sel) terbentuk dengan minimal elemen luar-blok.

### B. Algoritma Rank Order Clustering (ROC — King, 1980)
1. **Bobot biner kolom** part $p$ dari baris mesin $m$:
   $$W_p = \sum_{m=1}^{M} a_{mp}\times 2^{M-m}$$
2. Urutkan kolom part secara **descending** berdasarkan $W_p$.
3. **Bobot biner baris** mesin $m$ dari kolom part $p$:
   $$W_m = \sum_{p=1}^{P} a_{mp}\times 2^{P-p}$$
4. Urutkan baris mesin secara **descending** berdasarkan $W_m$.
5. **Uji konvergensi:** bila urutan baris dan kolom tidak berubah lagi, berhenti; jika masih berubah, ulangi langkah 1.

Catatan numerik: nilai bobot eksponensial dapat overflow pada matriks besar — varian ROC2 menggunakan normalisasi logaritmik untuk skala industri nyata.

### C. Metrik Evaluasi Kualitas Pengelompokan
- **Grouping Efficiency ($\eta$)** — Chandrasekharan & Rajagopalan:
$$
\eta = q\,\eta_1 + (1-q)\,\eta_2, \qquad \eta_1=\frac{e_d}{e_d+v}, \qquad \eta_2=\frac{MP-e-v}{MP-e}
$$

dengan $e_d$ = jumlah elemen 1 di dalam blok diagonal, $e$ = total elemen 1 seluruh matriks ($e=e_d+e_e$), $e_e$ = exceptional elements (elemen 1 di luar blok), $v$ = voids (elemen 0 di dalam blok), dan $q \approx 0{,}5$ bobot relatif. Metrik pelengkap yang lebih sensitif pada exceptional elements adalah **grouping efficacy**:
$$
\gamma = \frac{e_d}{e_d+v+e_e}
$$
- **Biaya transfer antar-sel** akibat exceptional elements:
$$
C_{ICM} = \sum_{(m,p)\in E_e} q_p \cdot d\big(cell(m),cell(p)\big)\cdot r
$$
dengan $q_p$ = permintaan part $p$, $d(\cdot)$ = jarak antar pusat sel, dan $r$ = tarif handling per satuan jarak-beban.

## 3. Metode Solusi / Algoritma Alternatif

1. **Similarity Coefficient Method (Jaccard):** ukur kemiripan pasangan mesin $i,j$ dari pola pemesanan part:
$$S_{ij} = \frac{n_{11}}{n_{11}+n_{10}+n_{01}}$$
lalu cluster hierarkis *single linkage* dengan ambang batas $\theta$ membentuk sel mesin.
2. **Heuristik/Metaheuristik Formulasi Optimasi:** model cell formation sebagai p-median/biner programming dengan objektif minimasi intercell movement + biaya duplikasi mesin; diselesaikan GA, tabu search, atau hybrid metaheuristic (contoh terkini 2023: GA machine-encoding pada Applied Sciences 13(22):12323).
3. **Production Flow Analysis (Burbidge):** pendekatan klasik berbasis routing data tanpa kode geometri.

## 4. Aplikasi di Industrial Engineering

- **Desain Cellular Manufacturing System (CMS):** pembentukan sel mesin + penentuan lokasi mesin intra-sel (minimasi backtracking).
- **Standardisasi Desain & Retrieval:** klasifikasi part via coding GT untuk reuse gambar/proses (mendukung design for variety).
- **Implementasi Lean/Kanban:** sel U-shaped sebagai unit aliran satu-potong (one-piece flow).
- **Penjadwalan Sel:** balancing beban antar sel dan penanganan bottleneck machine lintas sel.
- **Perluasan Modern:** integrasi CMS dengan digital twin dan optimasi simultan cell formation–layout (literatur 2023).

## 5. Referensi Terverifikasi

1. King, J. R. (1980). International Journal of Production Research, 18(2), 213-232. DOI: 10.1080/00207548008919662.
2. Burbidge, J. L. (1975). *The Introduction of Group Technology*. Heinemann.
3. Groover, M. P. (2015). *Automation, Production Systems, and CIM* (4th ed.). Pearson. ISBN: 978-0133499612.
4. Wemmerlöv, U., & Hyer, N. L. (1989). International Journal of Production Research, 27(9), 1511-1530.
5. Chandrasekharan, M. P., & Rajagopalan, R. (1986). MODROC. International Journal of Production Research, 24(5).
6. Applied Sciences (MDPI) (2023). Cell Formation and Intra-Cell Optimal Machine Location in CMS, 13(22), 12323.
