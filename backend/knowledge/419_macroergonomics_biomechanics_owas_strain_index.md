# Modul 419: Ergonomi Makro (ODAM), Model Biomekanik Statis Torsi Sendi (Chaffin 2D/3D), Analisis Postur OWAS, dan Moore-Garg Strain Index

## 1. Domain Profesi & Ruang Lingkup
Profesi **Senior Ergonomist / Workplace Health & Human Factors Specialist** bertugas menganalisis beban biomekanik muskuloskeletal (*Musculoskeletal Disorders* - MSDs), mengevaluasi postur kerja statis dan dinamis operator pabrik, serta menyelaraskan struktur sosioteknis organisasi (*Macroergonomics / ODAM*).

---

## 2. Model Biomekanik Statis Torsi Sendi Tulang Belakang (Don B. Chaffin 2D Coplanar Model)

Menganalisis beban kompresi dan geser pada diskus intervertebralis lumbal $L_5/S_1$ saat pekerja mengangkat beban:

```
          [Beban Tangan (Load W)]
                                   \ (Jarak Horisontal H)
                     [Punggung / Erector Spinae Muscle (FM)] ===> [Titik Putar L5/S1] <=== (Gaya Berat Tubuh Bagian Atas BW)
```

### A. Keseimbangan Momen Statis pada Diskus $L_5/S_1$:
$$\sum M_{L_5/S_1} = 0 \implies M_{\text{beban}} + M_{\text{torso}} - (F_m \times d_m) = 0$$

Di mana:
- $F_m$: Gaya tarik otot penegak punggung (*Erector Spinae Muscle Force*).
- $d_m$: Lengan momen otot punggung (standar anatomi manusia $d_m \approx 5.0\text{ cm} = 0.05\text{ m}$).
- $M_{\text{beban}} = W_{\text{load}} \times H_{\text{load}}$ (Momen dari beban yang diangkat).
- $M_{\text{torso}} = BW_{\text{torso}} \times H_{\text{torso}}$ (Momen dari berat badan tubuh atas).

### B. Gaya Kompresi Diskus Lumbal ($F_{\text{comp}}$):
$$F_{\text{comp}} = F_m + (BW_{\text{torso}} + W_{\text{load}}) \cos(\theta)$$

**Batas Aman NIOSH Compression Limit**:
- Batas Aman Aksi (*Action Limit* - AL): $F_{\text{comp}} \le 3400\text{ N}$ (Aman untuk $99\%$ pria dan $75\%$ wanita).
- Batas Maksimum Izin (*Maximum Permissible Limit* - MPL): $F_{\text{comp}} \ge 6400\text{ N}$ (**SANGAT BERBAHAYA**, dilarang dilakukan tanpa alat bantu mekanis).

---

## 3. Ovako Working Posture Analysis System (OWAS - Finlan)

Mengkorelasikan kombinasi postur kerja 4 bagian tubuh:
1. **Punggung (Back - 4 Kode)**: 1 = Lurus, 2 = Membungkuk, 3 = Memutar/Miring, 4 = Membungkuk dan Memutar.
2. **Lengan (Arms - 3 Kode)**: 1 = Kedua lengan di bawah bahu, 2 = Satu lengan di atas bahu, 3 = Kedua lengan di atas bahu.
3. **Kaki (Legs - 7 Kode)**: 1 = Duduk, 2 = Berdiri 2 kaki lurus, 3 = Berdiri 1 kaki lurus, 4 = Berlutut 2 kaki, 5 = Berlutut 1 kaki, 6 = Berjalan, 7 = Jongkok.
4. **Beban yang Diangkat (Load - 3 Kode)**: 1 = $< 10\text{ kg}$, 2 = $10 - 20\text{ kg}$, 3 = $> 20\text{ kg}$.

### 4 Kategori Tindakan OWAS:
- **Kategori 1 (Action Category 1)**: Postur normal alami $\to$ Tidak perlu perbaikan.
- **Kategori 2 (Action Category 2)**: Postur berpotensi bahaya $\to$ Perbaikan diperlukan dalam waktu dekat.
- **Kategori 3 (Action Category 3)**: Postur berbahaya $\to$ Perbaikan wajib dilakukan sesegera mungkin.
- **Kategori 4 (Action Category 4)**: Postur sangat berbahaya $\to$ Perbaikan wajib dilakukan **SEKETIKA ITU JUGA**.

---

## 4. Moore-Garg Strain Index (SI) untuk Anggota Gerak Atas (Tangan & Pergelangan)

Menghitung risiko cedera gerakan repetitif (*Distal Upper Extremity Disorders*):

$$SI = I_M \times I_E \times I_D \times I_H \times I_S \times I_D$$

Di mana 6 faktor pengali dihitung dari:
1. $I_M$ (*Intensity of Exertion*): Tingkat pengerahan tenaga Borg CR-10.
2. $I_E$ (*Duration of Exertion*): Persentase waktu pengerahan tenaga per siklus ($0 - 100\%$).
3. $I_D$ (*Efforts per Minute*): Frekuensi pengerahan tenaga per menit ($< 4$ hingga $> 20$).
4. $I_H$ (*Hand/Wrist Posture*): Deviasi sudut pergelangan tangan (Netral, Ekstensi/Fleksi, Deviasi Ulnar/Radial).
5. $I_S$ (*Speed of Work*): Kecepatan kerja (Sangat lambat hingga sangat cepat).
6. $I_D$ (*Duration per Day*): Jam kerja paparan per hari ($< 1\text{ jam}$ hingga $> 8\text{ jam}$).

**Interpretasi Skor SI**:
- $SI \le 3.0$: Pekerjaan aman.
- $3.0 < SI \le 5.0$: Pekerjaan berisiko sedang.
- $SI > 5.0$: **Pekerjaan berisiko tinggi memicu cedera Carpal Tunnel Syndrome (CTS) / Tendinitis**.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Chaffin, D. B., Andersson, G. B. J., & Martin, B. J. (2006). *Occupational Biomechanics* (4th ed.). John Wiley & Sons.
- Moore, J. S., & Garg, A. (1995). *The Strain Index: A proposed method to analyze jobs for risk of distal upper extremity disorders*. American Industrial Hygiene Association Journal, 56(5), 443-458.
- Hendrick, H. W., & Kleiner, B. M. (2002). *Macroergonomics: Theory, Methods, and Applications*. CRC Press.
- Situmorang, H. N., & Sitorus, F. H. (2023). *Biomechanical joint torque and ergonomic risk assessment of heavy lifting operations in industrial manufacturing*. International Journal of Human Factors and Ergonomics, 10(4), 312-328.
