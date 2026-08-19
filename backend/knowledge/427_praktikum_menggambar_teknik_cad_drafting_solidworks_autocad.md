# Modul 427: Praktikum Menggambar Teknik & Pemodelan CAD 2D/3D (AutoCAD, SolidWorks, Autodesk Inventor), Assembly Modeling, dan Drawing Generation

## 1. Domain Laboratorium & Ruang Lingkup
Laboratorium **Praktikum Menggambar Teknik & CAD** melatih mahasiswa menerapkan teori gambar teknik ke dalam perangkat lunak *Computer-Aided Design* (CAD 2D & Parametric 3D Solid Modeling), menghasilkan dokumen perakitan (*Assembly Drawings*), diagram ledak (*Exploded View*), dan daftar material komponen (*Bill of Materials* - BOM).

---

## 2. Metodologi Pemodelan Parametrik 3D (Parametric Feature-Based Solid Modeling)

```
[2D Sketch Geometri] ===> [Pemberian Constraint Geometri & Dimensi] ===> [Operasi 3D Solid Feature]
  - Garis, Busur, Lingkaran  - Horisontal, Vertikal, Tangent, Coincident - Extrude Boss, Revolve, Sweep, Loft
                                                                       - Cut Extrude, Fillet, Chamfer
```

### Aturan Sketsa Terdefinisi Penuh (Fully Defined Sketch):
1. Sketsa wajib tertutup (*Closed Contour*) tanpa celah mikro.
2. Seluruh derajat kebebasan (*Degrees of Freedom* - DOF) diikat dengan relasi geometris (*Geometric Constraints*) dan dimensi parametrik. Warna garis berubah menjadi hitam solid (SolidWorks) mengindikasikan status *Fully Defined*.

---

## 3. Perakitan Komponen (Assembly Modeling) & Mating Constraints

Menggabungkan part-part individual menjadi satu kesatuan mesin utuh dengan menghilangkan derajat kebebasan spasial ($6\text{ DOF}: 3\text{ Translasi}, 3\text{ Rotasi}$):
- **Coincident Mate**: Menempelkan dua permukaan rata sejajar pada bidang yang sama.
- **Concentric Mate**: Menyelaraskan sumbu silinder poros dengan lubang rumah bantalan.
- **Distance / Angle Mate**: Mengunci jarak atau sudut rotasi presisi antar komponen.
- **Mechanical Mates (Gear & Cam-Follower)**: Mensimulasikan rasio putaran roda gigi ($i = \frac{N_1}{N_2}$) dan pergerakan nok mekanik.

---

## 4. Pembuatan Lembar Gambar Kerja 2D (Engineering Drawing Generation)

Langkah standar mengubah model 3D menjadi lembar cetak siap produksi pabrik:
1. **Pilihan Ukuran Kertas ISO 216**: A4 ($210 \times 297$), A3 ($297 \times 420$), A2 ($420 \times 594$), A1 ($594 \times 841$), A0 ($841 \times 1189\text{ mm}$).
2. **Penempatan Proyeksi Utama**: Front View (Pandangan Depan sebagai representasi paling informatif), Top View, dan Right/Left Side View.
3. **Pemberian Ukuran Otomatis (*Model Items / Smart Dimension*)**: Menempatkan dimensi fungsional tanpa pengulangan (*No Over-Dimensioning*).
4. **Detailing Assembly**: Menambahkan balon penomoran part (*Auto-Balloon*), tabel Bill of Materials (BOM) otomatis, dan Isometric Exploded View.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Shih, R. H. (2023). *Parametric Modeling with SOLIDWORKS 2023*. SDC Publications.
- Bertoline, G. R., & Wiebe, E. N. (2018). *Fundamentals of Graphics Communication* (7th ed.). McGraw-Hill Education.
- American Society of Mechanical Engineers. (2018). *ASME Y14.100-2018: Engineering Drawing Practices*. New York: ASME.
- Fadel, M., & Sutanto, H. (2025). *Penerapan metode reverse engineering dan pemodelan CAD 3D untuk manufaktur ulang komponen industri*. Jurnal Praktik Keinsinyuran, 4(1), 45-58.
