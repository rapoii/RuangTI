# Modul 426: Menggambar Teknik (Engineering Drawing), Proyeksi Ortogonal (ISO 5456), Pandangan Potongan (ISO 128), Sistem Dimensi, Toleransi Linier (ISO 286), dan Standar Etiket Gambar

## 1. Domain Akademik & Ruang Lingkup
Mata kuliah **Menggambar Teknik** adalah bahasa grafis universal insinyur (*Universal Graphic Language of Engineering*) yang mengajarkan kaidah visualisasi geometri 2D/3D, notasi penunjukan ukuran, toleransi ukuran, serta standarisasi dokumentasi manufaktur berbasis ISO/DIN/SNI.

### Standar Baku:
1. **ISO 128 (Parts 1–100)**: *Technical product documentation (TPD) — General principles of representation*.
2. **ISO 5456-2**: *Technical drawings — Projection methods — Part 2: Orthographic representations*.
3. **ISO 286-1 & 286-2**: *Geometrical product specifications (GPS) — ISO code system for tolerances on linear sizes*.
4. **ISO 7200:2004**: *Technical product documentation — Data fields in title blocks and document headers*.

---

## 2. Sistem Proyeksi Ortogonal: Proyeksi Sudut Pertama (Eropa) vs Proyeksi Sudut Ketiga (Amerika)

```
[PROYEKSI EROPA (First Angle Projection - ISO E)]
 Simbol: [Kerucut Terpancung di KIRI, Lingkaran di KANAN]
   - Pandangan Kiri diletakkan di KANAN benda.
   - Pandangan Atas diletakkan di BAWAH benda.
   - Benda berada di antara Pengamat dan Bidang Proyeksi.

[PROYEKSI AMERIKA (Third Angle Projection - ISO A)]
 Simbol: [Lingkaran di KIRI, Kerucut Terpancung di KANAN]
   - Pandangan Kiri diletakkan di KIRI benda.
   - Pandangan Atas diletakkan di ATAS benda.
   - Bidang Proyeksi berada di antara Pengamat dan Benda (Paling banyak diadopsi software CAD modern).
```

---

## 3. Jenis Garis Gambar Teknik (Standar ISO 128-20)

| Tipe Garis | Deskripsi Visual | Aplikasi Penggunaan Standar |
| :--- | :--- | :--- |
| **Garis Tebal Kontinu (Tipe A)** | Garis tebal padat ($0.50 - 0.70\text{ mm}$) | Garis tepi nyata benda yang terlihat (*Visible Edges/Contours*) |
| **Garis Tipis Kontinu (Tipe B)** | Garis tipis padat ($0.25 - 0.35\text{ mm}$) | Garis ukuran, garis bantu, garis arsiran penampang potong |
| **Garis Gores Putus (Tipe E/F)** | Garis strip putus-putus | Garis tepi terhalang / tidak terlihat (*Hidden Lines*) |
| **Garis Strip-Titik Tipis (Tipe G)**| Garis panjang-titik-panjang | Garis sumbu simetri poros, lingkaran lubang (*Centerlines*) |
| **Garis Strip-Titik Ujung Tebal (Tipe H)**| Garis sumbu dengan ujung tebal | Bidang lintasan penampang pemotongan (*Cutting Plane Lines*) |

---

## 4. Pandangan Potongan (Section Views - ISO 128-40)

1. **Potongan Penuh (*Full Section*)**: Bidang potong membelah benda kerja secara lurus $100\%$ melintasi sumbu simetri.
2. **Potongan Separuh (*Half Section*)**: Memotong seperempat bagian benda simetris; menampilkan setengah penampang luar dan setengah penampang dalam.
3. **Potongan Meloncat (*Offset Section*)**: Garis potong ditekuk $90^\circ$ untuk melewati beberapa fitur internal yang tidak sebaris.
4. **Potongan Putar (*Revolved Section*) & Potongan Robekan Lokal (*Broken-Out Section*)**: Menampilkan profil penampang batang atau detail lubang pasak lokal.

---

## 5. Sistem Suaian dan Toleransi Linier (ISO 286 IT Grades)

Menentukan kelonggaran atau kerapatan perakitan antara Poros (*Shaft* - huruf kecil $a..z$) dan Lubang (*Hole* - huruf besar $A..Z$):

$$T = |D_{\max} - D_{\min}| = IT \times i$$

Di mana faktor toleransi standar $i = 0.45 \sqrt[3]{D} + 0.001 D$ (dalam mikrometer $\mu\text{m}$).

### 3 Klasifikasi Suaian (Fits):
1. **Suaian Longgar (*Clearance Fit*, e.g., $H7/g6, H8/f7$)**: Selalu ada celah gerak putar bebas (bantalan luncur/bushing).
2. **Suaian Transisi (*Transition Fit*, e.g., $H7/k6, H7/js6$)**: Dapat terjadi sedikit celah atau sedikit sesak (pena pasak presisi).
3. **Suaian Sesak/Paksa (*Interference Fit*, e.g., $H7/p6, H7/s6$)**: Poros selalu lebih besar dari lubang, dirakit dengan pemanasan/hidrolik (ring bearing roda kereta).

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Giesecke, F. E., Mitchell, A., Spencer, H. C., Hill, I. L., Dygdon, J. T., Novak, J. E., & Lockhart, S. D. (2016). *Technical Drawing with Engineering Graphics* (15th ed.). Peachpit Press.
- International Organization for Standardization. (2020). *ISO 128-1:2020 Technical product documentation — General principles of representation*. Geneva: ISO.
- Sato, T., & Sugiarto, H. (2008). *Menggambar Mesin Menurut Standar ISO*. Jakarta: Pradnya Paramita.
- Widada, D. (2025). *Material Teknik dan Gambar Manufaktur untuk Rekayasa Industri*. Yogyakarta: CV Penerbit Cideka.
