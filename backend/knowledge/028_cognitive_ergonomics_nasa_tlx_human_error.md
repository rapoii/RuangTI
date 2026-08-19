# Modul Riset Ilmiah: Ergonomi Kognitif, Beban Kerja Mental (NASA-TLX), & Human Reliability
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Hart, S. G., & Staveland, L. E. (1988). *Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research*. Advances in Psychology, North-Holland, 52, 139-183. (Foundational NASA-TLX Paper).
- Wickens, C. D., Helton, W. S., Hollands, J. G., & Banbury, S. (2021). *Engineering Psychology and Human Performance* (5th ed.). Routledge. ISBN: 978-0367205423.
- Swain, A. D., & Guttmann, H. E. (1983). *Handbook of Human Reliability Analysis with Emphasis on Nuclear Power Plant Applications* (THERP Methodology). NUREG/CR-1278, US Nuclear Regulatory Commission.

---

## 1. Ergonomi Kognitif & Beban Kerja Mental (Mental Workload)
Dalam lingkungan industri modern yang didominasi oleh otomatisasi, SCADA control room, dan pemantauan sistem, beban kerja fisik berkurang tetapi beban kerja mental (*Cognitive / Mental Workload*) meningkat tajam. Beban kerja kognitif yang terlalu rendah (*Underload*) menyebabkan kebosanan dan penurunan kewaspadaan (*Vigilance decrement*), sedangkan beban yang terlalu tinggi (*Overload*) memicu stres dan kesalahan manusia (*Human Error*).

---

## 2. Metodologi NASA-Task Load Index (NASA-TLX)
Metode standar emas multi-dimensional subjektif untuk mengukur beban kerja mental yang dirasakan oleh operator.

### 6 Dimensi Pengukuran NASA-TLX:
1. **Mental Demand (MD):** Seberapa banyak aktivitas mental dan persepsi yang dibutuhkan (berpikir, memutuskan, menghitung).
2. **Physical Demand (PD):** Seberapa banyak aktivitas fisik yang dibutuhkan (mendorong, menarik, mengendalikan).
3. **Temporal Demand (TD):** Seberapa besar tekanan waktu yang dirasakan karena laju tugas yang cepat.
4. **Performance (OP):** Seberapa sukses operator merasa telah mencapai tujuan tugas (skor dibalik).
5. **Effort (EF):** Seberapa keras usaha mental dan fisik yang harus dikerahkan untuk mencapai level performa tersebut.
6. **Frustration Level (FR):** Seberapa besar rasa frustrasi, jengkel, tertekan, atau stres selama tugas.

### Prosedur Perhitungan Weighted NASA-TLX Score:
1. **Pemberian Bobot Berpasangan (Pairwise Comparisons):**
   Operator membandingkan 15 kombinasi pasangan dari 6 dimensi untuk menentukan dimensi mana yang lebih dominan menyumbang beban kerja ($w_i \in [0, 5]$, di mana $\sum_{i=1}^6 w_i = 15$).
2. **Pemberian Nilai Rating ($R_i$):**
   Operator memberikan nilai $0 - 100$ pada skala kontinu untuk masing-masing dari 6 dimensi.
3. **Skor Beban Kerja Akhir (Weighted NASA-TLX Score):**
   $$\text{WWL} = \sum_{i=1}^6 \left( \frac{w_i}{15} \times R_i \right)$$
   - $\text{Skor } 0 - 29$: Beban Kerja Rendah.
   - $\text{Skor } 30 - 49$: Beban Kerja Sedang.
   - $\text{Skor } 50 - 79$: Beban Kerja Tinggi.
   - $\text{Skor } 80 - 100$: Beban Kerja Sangat Tinggi (Berbahaya, memicu human error).
