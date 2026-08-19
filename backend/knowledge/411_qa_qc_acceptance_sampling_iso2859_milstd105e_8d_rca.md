# Modul 411: Sampling Penerimaan Atribut (ISO 2859-1 / ANSI ASQ Z1.4 / MIL-STD-105E), Kurva Karakteristik Operasi (OC Curve), dan Metodologi 8D Problem Solving

## 1. Domain Profesi & Ruang Lingkup
Profesi **Incoming / Outgoing Quality Inspector & Reliability Quality Engineer** bertanggung jawab menentukan rencana sampling penerimaan lot material dari vendor secara statistik tanpa harus menginspeksi 100% barang, serta memimpin investigasi klaim mutu pelanggan via metodologi 8D.

### Standar Baku:
1. **ISO 2859-1:1999 (Amd 1:2011)** / **ANSI/ASQ Z1.4** / **MIL-STD-105E**: *Sampling procedures for inspection by attributes*.
2. **ISO 3951-1**: *Sampling procedures for inspection by variables*.
3. **AIAG 8D Problem Solving Guideline**.

---

## 2. Rencana Sampling Penerimaan Lot (Acceptance Sampling Plan)

Sebuah rencana sampling tunggal (*Single Sampling Plan*) dinotasikan sebagai $(N, n, c)$, di mana $N$ adalah ukuran lot, $n$ ukuran sampel acak, dan $c$ angka penerimaan (*acceptance number*).
- Jika jumlah produk cacat $d \le c \implies$ **Lot Diterima**.
- Jika jumlah produk cacat $d > c \implies$ **Lot Ditolak** (Diretur ke vendor atau disortir 100%).

---

## 3. Kurva Karakteristik Operasi (Operating Characteristic - OC Curve)

Kurva OC memetakan probabilitas penerimaan lot $P_a$ sebagai fungsi dari proporsi cacat sebenarnya dalam lot ($p$).

### A. Formula Distribusi Binomial (Sampling dengan Pengembalian atau $N \ge 10n$):
$$P_a(p) = P(d \le c) = \sum_{d=0}^{c} \binom{n}{d} p^d (1 - p)^{n - d}$$

Jika $n$ besar dan $p$ kecil, pendekatan Distribusi Poisson ($\lambda = n \cdot p$) digunakan:
$$P_a(p) = \sum_{d=0}^{c} \frac{e^{-np} (np)^d}{d!}$$

### B. Titik Kritis pada Kurva OC:
1. **Acceptance Quality Limit (AQL / Kualitas Produsen)**: Tingkat cacat $p_1$ yang dianggap memuaskan. Risiko Produsen $\alpha = 1 - P_a(p_1)$ (tipikal $\alpha = 0.05$).
2. **Lot Tolerance Percent Defective (LTPD / CRQ / Kualitas Konsumen)**: Tingkat cacat $p_2$ yang tidak dapat ditoleransi. Risiko Konsumen $\beta = P_a(p_2)$ (tipikal $\beta = 0.10$).

```
Probabilitas
Penerimaan (Pa)
  1.0 +-------+ (1 - alpha = 0.95)
      |              |         \  <=== Kurva OC
      |            0.1 +           +------+ (beta = 0.10)
      +-----------+------+---------> Proporsi Cacat (p)
                 AQL    LTPD
```

### C. Average Outgoing Quality (AOQ) & AOQL:
Jika lot yang ditolak disortir 100% dan produk cacat diganti dengan produk bagus (*rectifying inspection*):

$$\text{AOQ} = \frac{P_a \cdot p \cdot (N - n)}{N} \approx P_a \cdot p$$

Nilai puncak dari kurva AOQ disebut **Average Outgoing Quality Limit (AOQL)**, yang mewakili batas rata-rata cacat terburuk jangka panjang yang mungkin lolos ke pelanggan.

---

## 4. Metodologi 8D Problem Solving (Eight Disciplines)

Standar pemecahan masalah mutu cacat otomotif/manufaktur terstruktur:

- **D1: Establish the Team**: Bentuk tim lintas fungsi (*Cross-Functional Team* - CFT: QA, Produksi, Maintenance, Purchasing, Engineering) dengan Champion yang jelas.
- **D2: Describe the Problem (5W2H)**: Jabarkan cacat secara spesifik (*What, Where, When, Who, Why, How, How Many*), lengkapi dengan foto dan data tren.
- **D3: Interim Containment Action (ICA)**: Pasang tindakan karantina instan dalam waktu $< 24\text{ jam}$ (Sortir stok gudang, isolasi WIP, pasang inspeksi 100% sementara di jalur produksi) agar cacat tidak sampai ke tangan konsumen.
- **D4: Define and Verify Root Cause (RCA)**: Gunakan diagram Fishbone 6M dan metode **5-Why Tree** (uji *Occurrence Root Cause* dan *Escape Root Cause*).
- **D5: Choose and Verify Permanent Corrective Actions (PCA)**: Rancang solusi permanen (e.g., modifikasi jig mekanik / Poka-Yoke otomatis) dan buktikan efektivitasnya melalui uji coba.
- **D6: Implement and Validate PCA**: Pasang perbaikan permanen, pantau $C_{pk}$ proses selama 30 hari tanpa cacat berulang, lalu cabut tindakan penahanan sementara (ICA).
- **D7: Prevent Recurrence (Standardization)**: Perbarui dokumen resmi: PFMEA, Control Plan, Work Instruction (WI), dan sebarkan *Horizontal Deployment* ke mesin/lini serupa.
- **D8: Congratulate the Team**: Berikan apresiasi formal kepada seluruh anggota tim dan tutup berkas 8D secara resmi (*Sign-Off*).

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- International Organization for Standardization. (2011). *ISO 2859-1:1999/Amd 1:2011 Sampling procedures for inspection by attributes*. Geneva: ISO.
- Schilling, E. G., & Neubauer, D. V. (2017). *Acceptance Sampling in Quality Control* (3rd ed.). CRC Press.
- Franceschini, F., & Maisano, D. A. (2025). *Acceptance sampling with multiple inspectors: Critical aspects in aggregating individual conformity assessments*. Quality Engineering, 37(2), 188-202. DOI: [10.1080/08982112.2025.2485175](https://doi.org/10.1080/08982112.2025.2485175).
- Peña-González, D., Solano, N. E. C., & Torres-Peña, R. (2024). *Enhancing quality in lot reception: A comparative analysis of attribute acceptance sampling plans in industrial supply chains*. Journal of Industrial Engineering and Management, 17(3), 415-430. DOI: [10.3926/jiem.7491](https://doi.org/10.3926/jiem.7491).
