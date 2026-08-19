# Modul 417: Rantai Pasok Lingkar Tertutup (Closed-Loop Supply Chain), Rekayasa Remanufaktur, Extended Producer Responsibility (EPR), dan Life Cycle Costing (ISO 15686-5)

## 1. Domain Profesi & Ruang Lingkup
Profesi **Circular Economy Strategist / Reverse Logistics Specialist & Remanufacturing Engineer** bertugas merancang jaringan pengembalian produk purna-pakai (*Reverse Logistics*), merencanakan proses pembongkaran & rekondisi komponen (*Disassembly & Remanufacturing*), serta memenuhi kewajiban tanggung jawab produsen diperluas (*Extended Producer Responsibility* - EPR / WEEE).

---

## 2. Struktur Rantai Pasok Lingkar Tertutup (Closed-Loop Supply Chain - CLSC)

```
[Bahan Baku Primer] -> [Manufaktur] -> [Distribusi] -> [Penggunaan Konsumen]
       ^                     |                                  |
       |                     | (Scrap Pabrik - Daur Ulang)      | (Produk Bekas / EOL)
       |                     v                                  v
       |           [Daur Ulang Material] <====== [Inspeksi & Grading Mutu]
       |                     ^                                  |
       |                     | (Part Cacat)                     v (Part Layak)
       +--- [Remanufaktur Part Baru] <=========== [Pembongkaran / Disassembly]
```

### 6R Hierarki Ekonomi Sirkular (ISO 59000 / Ellen MacArthur Foundation):
1. **Reduce**: Minimalisasi material per unit produk via DFMA.
2. **Reuse**: Penggunaan kembali part tanpa modifikasi struktural.
3. **Repair**: Perbaikan komponen yang rusak ringan.
4. **Refurbish**: Peningkatan estetika dan penggantian modul usang.
5. **Remanufacture**: Pemulihan kondisi produk hingga setara atau melebihi spesifikasi *Original Equipment Manufacturer* (OEM) dengan garansi baru.
6. **Recycle**: Peleburan kembali material menjadi bahan baku mentah sekunder.

---

## 3. Perencanaan Pembongkaran (Disassembly Line Balancing - DLBP)

Mengoptimalkan urutan pelepasan komponen dari produk purna-pakai (*End-of-Life* - EOL) untuk memaksimalkan nilai ekonomis part bersih yang dapat diselamatkan (*Net Recovery Revenue*):

### Formula Profitabilitas Remanufaktur Bersih ($NP_{\text{reman}}$):
$$NP_{\text{reman}} = \sum_{i=1}^{K} \left( P_i \cdot y_i \cdot Q_i \right) - C_{\text{acquisition}} - C_{\text{disassembly}} - C_{\text{cleaning/testing}} - C_{\text{reconditioning}} - C_{\text{disposal}} (1 - y_i) Q_i$$

Di mana:
- $P_i$: Harga jual kembali part rekondisi $i$.
- $y_i$: Tingkat kelolosan mutu hasil inspeksi part $i$ ($0 \le y_i \le 1$).
- $Q_i$: Jumlah part tipe $i$ per unit produk EOL.
- $C_{\text{disposal}}$: Biaya penimbunan/pembuangan part yang tidak dapat diselamatkan ke TPA berizin.

---

## 4. Life Cycle Costing (LCC - Standar ISO 15686-5)

Penilaian total biaya kepemilikan dan dampak lingkungan produk dari hulu ke hilir (*Cradle-to-Grave* atau *Cradle-to-Cradle*):

$$\text{LCC} = C_{\text{init}} + \sum_{t=1}^{N} \frac{C_{\text{energy}, t} + C_{\text{ops}, t} + C_{\text{maint}, t} + C_{\text{env}, t}}{(1 + r)^t} + \frac{C_{\text{disposal}} - V_{\text{recovery}}}{(1 + r)^N}$$

Di mana $V_{\text{recovery}}$ adalah nilai sisa material yang berhasil dijual kembali atau dialirkan ke siklus remanufaktur berikutnya.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Guide, V. D. R., & Van Wassenhove, L. N. (2009). *The evolution of closed-loop supply chain research*. Operations Research, 57(1), 10-18.
- International Organization for Standardization. (2024). *ISO 59004:2024 Circular economy — Vocabulary, principles and guidance for implementation*. Geneva: ISO.
- Ellen MacArthur Foundation. (2021). *Completing the Picture: How the Circular Economy Tackles Climate Change*. Cowes: EMF.
- De Felice, F., De Luca, C., Petrillo, A., & Forcina, A. (2025). *Discrete event simulation and closed-loop supply chain remanufacturing dynamics in circular industrial clusters*. Applied Sciences, 15(11), 6140. DOI: [10.3390/app15116140](https://doi.org/10.3390/app15116140).
