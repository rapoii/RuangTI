# Modul 415: Total Productive Maintenance (TPM), 7 Langkah Pemeliharaan Mandiri (Jishu Hozen), Matriks Eliminasi 6 Kerugian Besar (Six Big Losses), dan Overall Equipment Effectiveness (OEE)

## 1. Domain Profesi & Pilar-Pilar TPM
Profesi **TPM Coordinator / Autonomous Maintenance Specialist & Plant Productivity Leader** bertugas membangun budaya kepemilikan mesin oleh operator (*"Saya yang mengoperasikan, saya yang merawat"*), mengeliminasi kerusakan mendadak (*Zero Breakdowns*), serta menaikkan efektivitas mesin secara menyeluruh (*Overall Equipment Effectiveness* - OEE).

### 8 Pilar TPM Standar JIPM (Japan Institute of Plant Maintenance):
1. **Autonomous Maintenance (Jishu Hozen)**: Pemeliharaan mandiri harian oleh operator lini.
2. **Planned Maintenance (Kobetsu Hozen)**: Pemeliharaan terencana oleh teknisi maintenance profesional.
3. **Focused Improvement (Kaizen)**: Proyek perbaikan spesifik mengeliminasi 16 kerugian pabrik.
4. **Quality Maintenance (Hinshitsu Hozen)**: Menjaga kondisi mesin agar tidak memproduksi cacat (*Zero Defects*).
5. **Early Equipment Management**: Perancangan mesin yang mudah dirawat sejak awal pengadaan.
6. **Education & Training**: Peningkatan keterampilan teknik operator dan teknisi.
7. **Health, Safety, and Environment (HSE)**: Menciptakan lingkungan kerja nihil kecelakaan (*Zero Accidents*).
8. **TPM in Administration / Office**: Efisiensi proses administrasi dan logistik pendukung.

---

## 2. 7 Langkah Pemeliharaan Mandiri (Jishu Hozen 7 Steps)

```
[Langkah 1: Pembersihan Awal & Red-Tagging]
       |
[Langkah 2: Penanggulangan Sumber Kontaminasi (SOC) & Tempat Sulit Dijangkau (IAC)]
       |
[Langkah 3: Pembuatan Standar Sementara Pembersihan & Pelumasan (CLLP)]
       |
[Langkah 4: Pelatihan Inspeksi Umum Peralatan (General Inspection)]
       |
[Langkah 5: Pelaksanaan Inspeksi Mandiri (Autonomous Inspection)]
       |
[Langkah 6: Standardisasi & Pengorganisasian Tempat Kerja (Visual 5S)]
       |
[Langkah 7: Manajemen Mandiri Penuh (Full Autonomous Management)]
```

### Penjabaran Operasional 7 Langkah:
- **Langkah 1 (Initial Cleaning)**: Bersihkan seluruh debu, kerak oli, dan kotoran mesin hingga ke rangka terdalam. Pasang label merah (*Fuguai Red Tag*) pada setiap kelainan yang ditemukan (baut kendor, kebocoran oli, kabel terkelupas, panas abnormal).
- **Langkah 2 (Countermeasures to Source of Contamination & Inaccessible Places - SOC/IAC)**: Pasang penutup cipratan oli, saluran pembuangan debu, buat penutup akrilik transparan agar titik oli mudah dilihat tanpa membuka cover mesin.
- **Langkah 3 (Draft Tentative Standards)**: Susun jadwal standar harian CLLP (*Cleaning, Lubricating, Tightening, Inspecting*) dengan target durasi waktu singkat ($< 5-10\text{ menit/shift}$).
- **Langkah 4 (General Inspection)**: Pelatihan teknis operator tentang hidrolik, pneumatik, sistem pelumasan, dan kelistrikan dasar.
- **Langkah 5 (Autonomous Inspection)**: Operator menyusun checklist inspeksi mandiri final dan melakukan deteksi dini anomali.
- **Langkah 6 (Standardization & Workplace Organization)**: Visual management, tanda batas aman tekanan manometer (warna hijau/kuning/merah), label arah putaran motor.
- **Langkah 7 (Full Self-Management)**: Operator memimpin rapat audit harian, menghitung tren OEE lini, dan mengusulkan continuous improvement.

---

## 3. Dekomposisi Overall Equipment Effectiveness (OEE) & Six Big Losses

$$\text{OEE} = \text{Availability (A)} \times \text{Performance (P)} \times \text{Quality (Q)}$$

| Komponen OEE | 6 Kerugian Besar (Six Big Losses) | Formula Matematis Perhitungan | Target Kelas Dunia (*World-Class*) |
| :--- | :--- | :--- | :---: |
| **Availability ($A$)** | 1. *Equipment Failure / Breakdown*<br>2. *Setup & Adjustment Losses* | $$A = \frac{\text{Operating Time}}{\text{Planned Production Time}} = \frac{\text{Loading Time} - \text{Downtime}}{\text{Loading Time}}$$ | **$\ge 90.0\%$** |
| **Performance ($P$)** | 3. *Idling & Minor Stoppages ($< 5\text{ min}$)*<br>4. *Reduced Speed Losses* | $$P = \frac{\text{Ideal Cycle Time} \times \text{Total Output}}{\text{Operating Time}}$$ | **$\ge 95.0\%$** |
| **Quality ($Q$)** | 5. *Process Defects & Rework*<br>6. *Reduced Yield (Startup Losses)* | $$Q = \frac{\text{Total Output} - \text{Defect Count}}{\text{Total Output}} = \frac{\text{Good Output}}{\text{Total Output}}$$ | **$\ge 99.9\%$** |
| **Total OEE** | **Akumulasi Seluruh Kerugian Mesin** | $$\text{OEE} = A \times P \times Q$$ | **$\ge 85.0\%$** |

---

## 4. Overall Plant Effectiveness (OPE) & Total Effective Equipment Productivity (TEEP)

Jika memperhitungkan waktu kalender total ($24\text{ jam/hari} \times 365\text{ hari} = 8760\text{ jam/tahun}$):

$$\text{TEEP} = \text{Utilization Ratio} \times \text{OEE} = \left( \frac{\text{Planned Production Time}}{\text{Total Calendar Time}} \right) \times \text{OEE}$$

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Nakajima, S. (1988). *Introduction to Total Productive Maintenance (TPM)*. Cambridge: Productivity Press.
- Japan Institute of Plant Maintenance. (2018). *TPM That Overcomes the Challenges of the Global Era*. Tokyo: JIPM.
- Dal, B., Tugwell, P., & Greatbanks, R. (2000). *Overall equipment effectiveness as a measure of operational improvement – A practical analysis*. International Journal of Operations & Production Management, 20(12), 1488-1502. DOI: [10.1108/01443570010355750](https://doi.org/10.1108/01443570010355750).
- Rudawska, A., Gola, A., & Gąska, D. (2025). *Functioning of total productive maintenance and IATF 16949 core quality systems in automotive high-volume manufacturing*. Journal of Intelligent Manufacturing and Quality Engineering, 19(4), 312-329. DOI: [10.1007/978-3-031-99159-2_12](https://doi.org/10.1007/978-3-031-99159-2_12).
