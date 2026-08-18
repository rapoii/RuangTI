# Modul Riset Ilmiah: Failure Mode and Effects Analysis (FMEA), FMECA, & Reliability-Centered Maintenance (RCM)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Moubray, J. (1997). *Reliability-Centered Maintenance* (2nd ed.). Industrial Press. ISBN: 978-0831131461. (Foundational RCM).
- AIAG & VDA. (2019). *FMEA Handbook* (1st ed.). Automotive Industry Action Group.
- Krisnaningsih, E., dkk. (2025). *The New Framework Maintenance Optimization Using Reliability Centered Maintenance-FMEA*. International Journal of Industrial Engineering.
- Gomaa, A. H. (2025). *RCM 4.0: A novel digital framework for reliability-centered maintenance in smart industrial systems*.
- Fiorilli, A., Pezzotta, V., & Fragassa, C. (2025). *Criticality-driven reliability enhancement of pneumatic sand molding cells in foundry applications via FMECA*. Journal of Engineering, Management and Systems Engineering.

---

## 1. Konsep Dasar FMEA & FMECA
**Failure Mode and Effects Analysis (FMEA)** adalah metodologi sistematis proaktif untuk mengevaluasi suatu sistem/proses, mengidentifikasi cara-cara di mana ia bisa gagal (*Failure Modes*), dan menilai dampak dari kegagalan tersebut (*Effects*).
- **DFMEA (Design FMEA):** Digunakan selama fase perancangan produk (integrasi dengan DFSS).
- **PFMEA (Process FMEA):** Digunakan selama perancangan proses manufaktur.

**FMECA (Failure Mode, Effects, and Criticality Analysis)** adalah perpanjangan dari FMEA yang menambahkan analisis kuantitatif *Criticality* (kekritisan) berdasarkan probabilitas kegagalan dan tingkat keparahan absolut.

### Matriks Kuantifikasi Risiko Tradisional (Risk Priority Number - RPN):
$$\text{RPN} = S \times O \times D$$
Skala 1–10 digunakan untuk masing-masing faktor:
- **$S$ (Severity / Keparahan):** Dampak kegagalan terhadap keselamatan, kualitas, atau downtime ($1 = \text{Tidak ada dampak}, 10 = \text{Berbahaya tanpa peringatan}$).
- **$O$ (Occurrence / Keterjadian):** Probabilitas kegagalan terjadi ($1 = \text{Sangat jarang}, 10 = \text{Sangat sering / Hampir pasti}$).
- **$D$ (Detection / Deteksi):** Kemampuan sistem kontrol saat ini untuk mendeteksi kegagalan sebelum dampaknya terasa ($1 = \text{Pasti terdeteksi}, 10 = \text{Tidak mungkin terdeteksi}$).

### Pembaruan AIAG-VDA (Action Priority - AP):
Karena kelemahan matematis RPN (misal: RPN 100 bisa berasal dari $S=10, O=5, D=2$ [Kritis Keselamatan] atau $S=2, O=5, D=10$ [Tidak Kritis]), standar baru menggunakan tabel **Action Priority (High, Medium, Low)** yang memberikan bobot mutlak tertinggi pada nilai **Severity ($S$)**.

---

## 2. Reliability-Centered Maintenance (RCM)
RCM adalah metodologi perawatan strategis yang berfokus pada pelestarian **Fungsi Sistem (System Function)**, bukan semata-mata melestarikan aset fisik itu sendiri (Moubray, 1997). RCM mengakui bahwa kegagalan seringkali mengikuti pola non-linier, bukan sekadar siklus umur pakai bathtub curve.

### 7 Pertanyaan Dasar RCM (SAE JA1011 Standard):
1. **Functions:** Apa fungsi dan standar kinerja aset dalam konteks operasional saat ini?
2. **Functional Failures:** Dalam kondisi apa aset gagal memenuhi fungsi tersebut?
3. **Failure Modes:** Apa yang menyebabkan kegagalan fungsional? (Diambil dari FMEA).
4. **Failure Effects:** Apa yang terjadi jika kegagalan terjadi?
5. **Failure Consequences:** Mengapa kegagalan itu penting (Keselamatan, Lingkungan, Operasional, Non-Operasional)?
6. **Proactive Tasks:** Tugas perawatan apa yang bisa mencegahnya (Predictive/Condition-Based atau Preventive/Time-Based)?
7. **Default Actions:** Apa yang harus dilakukan jika tugas proaktif yang sesuai tidak ditemukan (Run-to-Failure / Redesign)?

### Output Kebijakan Perawatan RCM:
Berdasarkan pohon keputusan RCM (*Decision Diagram*), komponen dibagi ke dalam strategi:
- **Condition-Based Maintenance (CBM):** Inspeksi vibrasi, termografi, ultrasonik (Untuk aset kritis dengan *P-F Interval* yang jelas).
- **Time-Directed Maintenance (TDM):** Penggantian terjadwal (Untuk komponen dengan pola keausan penuaan/fatigue seragam).
- **Failure-Finding Tasks:** Pengujian rutin alarm/sistem backup tersembunyi (*Hidden Failures*).
- **Run-to-Failure (RTF):** Dibiarkan rusak (Hanya untuk komponen non-kritis dengan biaya penggantian jauh lebih murah dibanding inspeksi).

## 3. RCM 4.0 & Smart Maintenance (2025+)
Evolusi terbaru RCM mengintegrasikan FMECA dengan Industrial Internet of Things (IIoT) dan Machine Learning:
- **Dynamic FMEA:** Nilai Keterjadian ($O$) dan Deteksi ($D$) di-update secara real-time berdasarkan data sensor vibrasi.
- **Digital Twin:** Model virtual untuk menyimulasikan laju degradasi (*Remaining Useful Life - RUL*) menggunakan algoritma Long Short-Term Memory (LSTM).
