# Modul 404: Gambar Teknik Mesin Lanjut, Standar ASME Y14.5-2018 / ISO 1101, GD&T, dan Analisis Toleransi Rantai (Tolerance Stack-Up)

## 1. Domain Profesi & Standar Acuan
Profesi **Mechanical Drafter / CAD Specialist & GD&T Design Engineer** bertanggung jawab menerjemahkan niat desain teknik ke dalam gambar kerja manufaktur 2D/3D yang bebas ambiguitas, memiliki kepastian fungsi perakitan, dan hemat biaya pemesinan.

### Standar Baku Internasional:
1. **ASME Y14.5-2018**: *Geometric Dimensioning and Tolerancing (GD&T)*.
2. **ISO 1101:2017**: *Geometrical product specifications (GPS) — Geometrical tolerancing*.
3. **ISO 286-1 / 286-2**: *ISO system of limits and fits (Toleransi Ukuran IT01 s.d. IT18)*.
4. **ISO 128 / ISO 1302**: *Technical product documentation — Rules for surface texture indication*.

---

## 2. 14 Karakteristik Geometris GD&T & Simbol Feature Control Frame (FCF)

Feature Control Frame adalah blok instruksi geometris terstandar:

```
+----------+-------+--------+---+---+---+
| Karakter | Nilai | Modif. | D1| D2| D3|
|   [POS]  | Ø 0.05|  (M)   | A | B | C |
+----------+-------+--------+---+---+---+
```

### Klasifikasi 5 Kategori Karakteristik Geometris:
1. **Form (Bentuk - Tanpa Datum)**:
   - *Kelurusan (Straightness - —)*: Toleransi garis elemen permukaan atau sumbu.
   - *Kerataan (Flatness - ▱)*: Jarak antara dua bidang paralel tak terhingga.
   - *Kebulatan (Circularity/Roundness - ○)*: Batas zona dua lingkaran konsentris.
   - *Silindrisitas (Cylindricity - ⌭)*: Batas zona dua silinder koaksial (mengontrol kelurusan, kebulatan, dan ketirusan).
2. **Orientation (Orientasi - Wajib Datum)**:
   - *Tegak Lurus (Perpendicularity - ⟂)*, *Kesejajaran (Parallelism - ∥)*, *Ketirusan Sudut (Angularity - ∠)*.
3. **Location (Lokasi - Wajib Datum & Dimensi Dasar/Basic Dimension)**:
   - *Posisi Posisi (Position - ⨁)*: Mengontrol posisi pusat lubang/sumbu dari Datum Frame.
   - *Konsentrisitas (Concentricity - ◎)*, *Simetri (Symmetry - ⌯)*.
4. **Profile (Profil - Mengontrol Ukuran, Bentuk, Orientasi, Lokasi)**:
   - *Profil Garis (Profile of a Line - ⌒)*, *Profil Permukaan (Profile of a Surface - ⌓)*.
5. **Runout (Penyimpangan Putar)**:
   - *Circular Runout (↗)*, *Total Runout (⇗)*.

---

## 3. Kerangka Referensi Datum 3-2-1 (Datum Reference Frame - DRF)

Untuk membatasi 6 derajat kebebasan (*Degrees of Freedom* - 3 Translasi $T_x, T_y, T_z$ dan 3 Rotasi $R_x, R_y, R_z$):
- **Datum Primer ($A$)**: Bidang datar dengan minimal **3 titik kontak** $\to$ Mengunci 3 DOF (1 Translasi $+ 2$ Rotasi).
- **Datum Sekunder ($B$)**: Bidang tegak lurus dengan minimal **2 titik kontak** $\to$ Mengunci 2 DOF (1 Translasi $+ 1$ Rotasi).
- **Datum Tersier ($C$)**: Bidang tegak lurus dengan minimal **1 titik kontak** $\to$ Mengunci 1 DOF sisa (1 Translasi).

---

## 4. Kondisi Material: MMC, LMC, dan Bonus Tolerance

1. **Maximum Material Condition (MMC - Ⓜ)**: Kondisi fitur yang menghasilkan berat part maksimum (Diameter Poros Terbesar, Diameter Lubang Terkecil).
2. **Least Material Condition (LMC - Ⓛ)**: Kondisi fitur yang menghasilkan berat part minimum (Diameter Poros Terkecil, Diameter Lubang Terbesar).
3. **Regardless of Feature Size (RFS - Default)**: Toleransi geometris tidak berubah terlepas dari ukuran aktual fitur.

### Rumus Bonus Tolerance pada MMC:
$$\text{Bonus Tolerance} = |d_{\text{aktual}} - d_{\text{MMC}}|$$

$$\text{Total Posisi Toleransi yang Diizinkan} = \text{Toleransi Awal (FCF)} + \text{Bonus Tolerance}$$

*Contoh*: Sebuah lubang $\varnothing 10.0 \pm 0.2\text{ mm}$ memiliki toleransi posisi $\varnothing 0.1\text{ mm (M)}$.
- $d_{\text{MMC}} = 9.8\text{ mm}$.
- Jika diproduksi dengan $d_{\text{aktual}} = 10.2\text{ mm}$, maka:
  $$\text{Bonus} = |10.2 - 9.8| = 0.4\text{ mm}$$
  $$\text{Total Toleransi Posisi} = 0.1 + 0.4 = 0.5\text{ mm}$$ (Mengurangi part terbuang / *scrap reduction*).

---

## 5. Analisis Akumulasi Toleransi (Tolerance Stack-Up Analysis)

Jika sebuah rakitan memiliki $n$ dimensi toleransi rantai loop tertutup ($t_1, t_2, \dots, t_n$):

### A. Metode Kasus Terburuk (Worst-Case / Arithmetic Stack-Up):
Digunakan untuk produk berisiko tinggi (*aerospace, medical devices*), di mana semua part diasumsikan berada pada batas ekstrem toleransi secara bersamaan:

$$T_{\text{Worst-Case}} = \sum_{i=1}^{n} |t_i|$$

$$\text{Celah Maksimum} = \text{Nominal Gap} + \sum |t_i^+|$$
$$\text{Celah Minimum} = \text{Nominal Gap} - \sum |t_i^-|$$

### B. Metode Statistik Root-Sum-Square (RSS Stack-Up):
Berdasarkan Teorema Limit Terpusat (*Normal Distribution*, $C_p = 1.0, 3\sigma$):

$$T_{\text{RSS}} = \sqrt{ \sum_{i=1}^{n} t_i^2 }$$

### C. Metode Statistik Modified RSS (Bender's Factor $1.5\times$):
Memperhitungkan ketidaksempurnaan proses industri dan pergeseran rata-rata proses (drift $1.5\sigma$):

$$T_{\text{Modified-RSS}} = 1.5 \times \sqrt{ \sum_{i=1}^{n} t_i^2 }$$

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- American Society of Mechanical Engineers. (2018). *ASME Y14.5-2018: Dimensioning and Tolerancing*. New York: ASME.
- International Organization for Standardization. (2017). *ISO 1101:2017 Geometrical product specifications (GPS) — Geometrical tolerancing*. Geneva: ISO.
- Drake, P. J. (2019). *Dimensioning and Tolerancing Handbook*. McGraw-Hill Education.
- Furferi, R. (2024). *Tolerance analysis methods for the application of ISO and ASME GD&T to mechanical components: 2D and 3D industrial case studies*. Journal of Advanced Manufacturing Science and Technology, 4(1), 20-35. DOI: [10.51393/j.jamst.2025020](https://doi.org/10.51393/j.jamst.2025020).
- Maltauro, M., Meneghello, R., & Concheri, G. (2025). *A numerical approach to compute statistical assembly shift for patterns of fits: Application to 3D tolerance stack-up*. Computer-Aided Design and Applications, 22(3), 512-528.
