# Modul Riset Ilmiah: Perancangan & Pengembangan Produk, QFD (House of Quality), DFMA, & TRIZ
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref & Classic Foundations):**
- Ulrich, K. T., & Eppinger, S. D. (2016). *Product Design and Development* (6th ed.). McGraw-Hill Education. ISBN: 978-0078029011.
- Hauser, J. R., & Clausing, D. (1988). *The House of Quality*. Harvard Business Review, 66(3), 63-73. (Foundational QFD Paper).
- Boothroyd, G., Dewhurst, P., & Knight, W. (2010). *Product Design for Manufacture and Assembly* (3rd ed.). CRC Press. ISBN: 978-1420089271.
- Altshuller, G. (1999). *The Innovation Algorithm: TRIZ, Systematic Innovation and Technical Creativity*. Technical Innovation Center. ISBN: 978-0964074040.

---

## 1. Quality Function Deployment (QFD) & House of Quality (HoQ)
QFD adalah metodologi terstruktur untuk mentranslasikan kebutuhan suara konsumen (*Voice of Customer - VoC*) menjadi respon teknis rekayasa (*Engineering Characteristics / Technical Metrics*) pada setiap tahap pengembangan produk.

### Matriks Inti House of Quality:
1. **Customer Needs (WHATs):** Daftar atribut keinginan pelanggan dengan bobot kepentingan relatif ($w_i$).
2. **Technical Requirements (HOWs):** Karakteristik teknis terukur rancangan rekayasa.
3. **Relationship Matrix ($R_{ij}$):** Kekuatan korelasi antara *WHATs* dan *HOWs*:
   - $\text{Strong} (\bullet) = 9$
   - $\text{Medium} (\circ) = 3$
   - $\text{Weak} (\triangle) = 1$
4. **Korelasi Atap (Roof Matrix):** Mengidentifikasi sinergi $(+)$ atau *trade-off* kontradiksi fisik $(-)$ antar karakteristik teknis.
5. **Absolute & Relative Importance Score:**
   $$\text{Bobot Absolut (Absolute Weight}_j) = \sum_{i=1}^{m} w_i \times R_{ij}$$
   $$\text{Bobot Relatif (\%)}_j = \frac{\text{Absolute Weight}_j}{\sum \text{Absolute Weight}} \times 100\%$$

---

## 2. Design for Manufacturing and Assembly (DFMA)
Metodologi Boothroyd-Dewhurst untuk menyederhanakan struktur produk, meminimalkan jumlah komponen (*part count reduction*), dan menekan ongkos perakitan.

### Kriteria Eliminasi Komponen Teoritis Minimum ($N_{\min}$):
Komponen dipertahankan sebagai part terpisah HANYA JIKA memenuhi salah satu dari 3 kondisi:
1. Bagian tersebut harus bergerak relatif terhadap komponen lain selama operasi.
2. Bagian tersebut harus terbuat dari material yang berbeda secara mendasar karena alasan fungsi isolasi/termal.
3. Bagian tersebut harus dapat dipisah untuk keperluan perakitan, perawatan, atau penggantian part aus.

### Indeks Efisiensi Desain Perakitan (DFMA Design Efficiency):
$$\text{Design Efficiency (DE)} = \frac{3 \times N_{\min}}{T_{\text{ma}}} \times 100\%$$
- $N_{\min} =$ Jumlah part teoritis minimum.
- $3\text{ detik} =$ Waktu standar teoretis perakitan part dasar yang mudah ditangani.
- $T_{\text{ma}} =$ Estimasi total waktu perakitan aktual (*Total Manual Assembly Time*).

---

## 3. TRIZ (Teori Pemecahan Masalah Inventif)
Dicetuskan oleh Genrich Altshuller melalui analisis terhadap 200.000+ paten dunia. TRIZ menghilangkan kompromi desain (*engineering compromise*) dengan menyelesaikan kontradiksi teknis.

### Logika Matriks Kontradiksi Altshuller (39 Parameter Teknik & 40 Prinsip Inventif):
1. **Parameter yang Ingin Ditingkatkan (*Improving Parameter*):** Misal: Kekuatan (#14), Kecepatan (#9), Daya Tahan (#15).
2. **Parameter yang Memburuk (*Worsening Parameter*):** Misal: Berat Struktur (#1), Konsumsi Energi (#19), Kerumitan (#36).
3. **Prinsip Inovatif Utama (40 Inventive Principles):**
   - **Prinsip 1 (Segmentation):** Membagi objek menjadi elemen independen/modular.
   - **Prinsip 2 (Taking Out / Extraction):** Memisahkan bagian yang mengganggu dari sistem.
   - **Prinsip 10 (Prior Action / Asymmetry):** Menerapkan perlakuan awal sebelum objek dibutuhkan.
   - **Prinsip 35 (Parameter Changes):** Mengubah wujud fisik, densitas, atau fleksibilitas material.
