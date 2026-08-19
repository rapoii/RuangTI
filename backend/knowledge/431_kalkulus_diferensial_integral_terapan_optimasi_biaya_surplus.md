# Modul 431: Kalkulus Diferensial & Integral Terapan Teknik Industri (Engineering Calculus I), Optimasi Fungsi Marginal, Penurunan Model Persediaan, Surplus Ekonomi, dan Titik Berat Luasan

## 1. Domain Akademik & Ruang Lingkup
Mata kuliah **Kalkulus 1** menyediakan landasan analitik matematis kuantitatif untuk pemodelan laju perubahan sesaat (*Rate of Change*), diferensiasi parsial optimasi fungsi biaya manufaktur, serta integrasi luas wilayah ekonomi industri.

---

## 2. Kalkulus Diferensial & Analisis Optimasi Ekstremum

### A. Uji Turunan Pertama dan Kedua untuk Nilai Optimum:
Diberikan fungsi biaya total $C(q)$ atau fungsi laba $\Pi(q)$:
1. **Titik Kritis Stasioner**: $q^*$ dicari dari $\frac{d\Pi}{dq} = 0$.
2. **Uji Nilai Maksimum / Minimum**:
   $$\frac{d^2\Pi}{dq^2} < 0 \implies \text{Maksimum Laba}, \quad \frac{d^2 C}{dq^2} > 0 \implies \text{Minimum Biaya}$$

---

## 3. Aplikasi Diferensial pada Teori Ekonomi Manufaktur & Analisis Marginal

### A. Pendapatan Marginal (Marginal Revenue - MR) & Biaya Marginal (Marginal Cost - MC):
$$MR = \frac{d(TR)}{dq} = \frac{d(P(q) \cdot q)}{dq} = P + q \frac{dP}{dq}$$

$$MC = \frac{d(TC)}{dq}$$

**Kondisi Laba Maksimum**:
$$\frac{d\Pi}{dq} = \frac{d(TR)}{dq} - \frac{d(TC)}{dq} = 0 \implies MR = MC$$

### B. Elastisitas Permintaan terhadap Harga ($\epsilon_d$):
$$\epsilon_d = \frac{dq/q}{dP/P} = \frac{dq}{dP} \times \frac{P}{q}$$
- Jika $|\epsilon_d| > 1$: Permintaan elastis.
- Jika $|\epsilon_d| < 1$: Permintaan inelastis.

---

## 4. Penurunan Matematis Rumus Economic Order Quantity (EOQ) via Kalkulus

Fungsi Total Biaya Tahunan Persediaan $TC(Q)$:

$$TC(Q) = \text{Biaya Pembelian} + \text{Biaya Pesan Tahunan} + \text{Biaya Simpan Tahunan}$$

$$TC(Q) = D \cdot C + \left( \frac{D}{Q} \right) S + \left( \frac{Q}{2} \right) H$$

Mencari ukuran lot pemesanan $Q^*$ yang meminimalkan total biaya persediaan:

$$\frac{dTC}{dQ} = -\frac{D \cdot S}{Q^2} + \frac{H}{2} = 0 \implies \frac{D \cdot S}{Q^2} = \frac{H}{2} \implies Q^2 = \frac{2 D S}{H}$$

$$Q^* = \sqrt{\frac{2 D S}{H}} \quad (\text{Rumus Ford W. Harris EOQ})$$

Uji kecekungan turunan kedua:
$$\frac{d^2 TC}{dQ^2} = \frac{2 D S}{Q^3} > 0 \quad (\text{Terbukti Menghasilkan Nilai Biaya Minimum Global Konveks})$$

---

## 5. Aplikasi Kalkulus Integral: Surplus Konsumen ($CS$) dan Surplus Produsen ($PS$)

Diberikan fungsi permintaan pasar $P = D(q)$, fungsi penawaran $P = S(q)$, dan titik keseimbangan pasar ekulibrium $(q_e, P_e)$:

```
Harga (P)
  ^
  |        \ (Kurva Permintaan D(q))
  |  [CS]   \
  |          \
P_e |----------X (Titik Ekuilibrium Pasar (q_e, P_e))
  |          /
  |  [PS]   / (Kurva Penawaran S(q))
  |        /
  +---------------------------------------------> Kuantitas (q)
              q_e
```

### A. Surplus Konsumen (Consumer Surplus - CS):
$$CS = \int_0^{q_e} D(q) dq - (P_e \times q_e)$$

### B. Surplus Produsen (Producer Surplus - PS):
$$PS = (P_e \times q_e) - \int_0^{q_e} S(q) dq$$

---

## 6. Aplikasi Integral Geometri: Momen Inersia dan Titik Berat Penampang (Centroid)

$$\bar{x} = \frac{\int x \, dA}{A}, \quad \bar{y} = \frac{\int y \, dA}{A}$$

Momen inersia luasan terhadap sumbu $x$ dan $y$:
$$I_x = \iint y^2 \, dx \, dy, \quad I_y = \iint x^2 \, dx \, dy$$

---

## 7. Referensi Terverifikasi (Academic & Industrial Standards)
- Stewart, J., Clegg, D., & Watson, S. (2020). *Calculus: Early Transcendentals* (9th ed.). Cengage Learning.
- Thomas, G. B., Hass, J., Heil, C., & Weir, M. D. (2018). *Thomas' Calculus* (14th ed.). Pearson.
- Chiang, A. C., & Wainwright, K. (2005). *Fundamental Methods of Mathematical Economics* (4th ed.). McGraw-Hill.
- Purcell, E. J., Varberg, D., & Rigdon, S. E. (2006). *Calculus* (9th ed.). Prentice Hall.
