# Modul Riset Ilmiah: Total Productive Maintenance (TPM), OEE, & Six Big Losses
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Nakajima, S. (1988). *Introduction to TPM: Total Productive Maintenance*. Productivity Press. ISBN: 978-0915299232.
- Dal, B., Tugwell, P., & Greatbanks, R. (2000). *Overall equipment effectiveness as a measure of operational improvement – A practical analysis*. International Journal of Operations & Production Management, 20(12), 1488-1502. DOI: [10.1108/01443570010355750](https://doi.org/10.1108/01443570010355750).
- Muchiri, P., & Pintelon, L. (2008). *Performance measurement using overall equipment effectiveness (OEE): literature review and practical application discussion*. International Journal of Production Research, 46(13), 3517-3535. DOI: [10.1080/00207540601142645](https://doi.org/10.1080/00207540601142645).

---

## 1. Konsep Overall Equipment Effectiveness (OEE)
OEE adalah metrik kuantitatif kelas dunia (*World Class Manufacturing*) untuk mengukur efektivitas pemanfaatan mesin, peralatan, atau lini produksi dengan mengidentifikasi kerugian tersembunyi (*hidden losses*).

### Formulasi Utama OEE:
$$\text{OEE} = A \times P \times Q$$

*Dimana:*
- $A$: *Availability Rate* (Ketersediaan mesin / rasio waktu operasi).
- $P$: *Performance Rate* (Kinerja kecepatan mesin terhadap kapasitas ideal).
- $Q$: *Quality Rate* (Rasio produk baik / bebas cacat terhadap total output).

---

## 2. Rincian Tiga Faktor Utama OEE

### A. Availability Rate ($A$):
Mengukur kerugian akibat waktu henti mesin (*downtime losses*):

$$\text{Loading Time} = \text{Total Waktu Tersedia (Total Available Time)} - \text{Planned Downtime}$$
$$\text{Operating Time} = \text{Loading Time} - \text{Unplanned Downtime}$$
$$A = \frac{\text{Operating Time}}{\text{Loading Time}} \times 100\%$$

*Catatan:* Planned Downtime meliputi istirahat terjadwal, preventive maintenance terencana, dan briefing shift.

---

### B. Performance Rate ($P$):
Mengukur kerugian akibat penurunan kecepatan operasi dan berhenti singkat (*speed & idling losses*):

$$\text{Net Operating Time} = \text{Total Output (Pcs)} \times \text{Ideal Cycle Time (Waktu Siklus Ideal/Unit)}$$
$$P = \frac{\text{Total Output} \times \text{Ideal Cycle Time}}{\text{Operating Time}} \times 100\%$$

*Atau melalui Rasio Kecepatan Operasi:*
$$P = \frac{\text{Operating Speed Rate} \times \text{Net Operating Rate}}{100}$$

---

### C. Quality Rate ($Q$):
Mengukur kerugian akibat produk cacat, rework, dan scrap selama startup:

$$\text{Good Output} = \text{Total Output Diproduksi} - \text{Defect / Scrap / Rework}$$
$$Q = \frac{\text{Good Output}}{\text{Total Output Diproduksi}} \times 100\%$$

---

## 3. Pemetaan Six Big Losses (Enam Kerugian Besar Mesin)

| Kategori OEE | Kerugian (*Six Big Losses*) | Contoh Riil di Industri | Pendekatan Solusi TPM |
| :--- | :--- | :--- | :--- |
| **Availability Losses** | **1. Equipment Failure / Breakdown** | Motor terbakar, bearing pecah, hidrolik bocor | *Autonomous Maintenance* (Jishu Hozen), Preventive Maintenance |
| | **2. Setup & Adjustment** | Penggantian cetakan (*mold change*), kalibrasi tooling | Metodologi **SMED (Single-Minute Exchange of Die)** |
| **Performance Losses** | **3. Idling & Minor Stoppages** | Sensor terhalang, material macet di conveyor (< 5 menit) | Pembersihan sensor berkala, standarisasi feeding |
| | **4. Reduced Speed** | Mesin dijalankan di bawah kapasitas desain karena operator takut rusak | Rekayasa ulang parameter mesin, perbaikan mechanical wear |
| **Quality Losses** | **5. Process Defects / Rework** | Dimensi di luar toleransi, cacat permukaan selama produksi normal | Poka-Yoke (Mistake Proofing), SPC Peta Kendali |
| | **6. Reduced Yield / Startup Losses** | Produk cacat saat pemanasan mesin di awal shift | Standarisasi prosedur SOP warming-up & trial batch |

---

## 4. Standar Acuan World-Class OEE (Japan Institute of Plant Maintenance - JIPM):
$$\text{Availability} \ge 90.0\%$$
$$\text{Performance} \ge 95.0\%$$
$$\text{Quality} \ge 99.9\%$$
$$\mathbf{\text{World-Class OEE}} \ge 90.0\% \times 95.0\% \times 99.9\% = \mathbf{85.4\% \approx 85\%}$$

### Interpretasi Tingkat OEE:
- **$\text{OEE} < 65\%$**: Kinerja Rendah — banyak pemborosan kritis, prioritas intervensi darurat Kaizen.
- **$65\% \le \text{OEE} < 85\%$**: Kinerja Menengah (Tipikal Industri Manufaktur) — memiliki potensi perbaikan signifikan.
- **$\text{OEE} \ge 85\%$**: **World-Class Manufacturing Benchmark**.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
