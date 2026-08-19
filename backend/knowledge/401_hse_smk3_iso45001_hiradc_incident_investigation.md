# Modul 401: Sistem Manajemen Keselamatan & Kesehatan Kerja (SMK3 PP 50/2012, ISO 45001:2018, HIRADC, dan Investigasi Insiden SCAT)

## 1. Domain Profesi & Landasan Regulasi
Profesi **Health, Safety, and Environment (HSE) Officer / Ahli K3 Umum & Spesialis Industri** bertanggung jawab merancang, mengaudit, dan memelihara sistem pencegahan kecelakaan kerja, penyakit akibat kerja (PAK), serta kepatuhan hukum lingkungan di lantai pabrik dan area proyek.

### Landasan Regulasi & Standar Utama:
1. **Peraturan Pemerintah (PP) No. 50 Tahun 2012**: Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) di Indonesia (wajib bagi perusahaan mempekerjakan $\ge 100$ tenaga kerja atau memiliki potensi bahaya tinggi).
2. **ISO 45001:2018**: *Occupational Health and Safety Management Systems — Requirements with guidance for use* (High-Level Structure Annex SL, Klausul 4 hingga 10: Plan-Do-Check-Act).
3. **OSHA 29 CFR 1910.147**: *The Control of Hazardous Energy (Lockout/Tagout - LOTO)*.
4. **ANSI/ASSP Z10.0-2019**: *Occupational Health and Safety Management Systems*.

---

## 2. Metodologi Identifikasi Bahaya & Penilaian Risiko (HIRADC / IBPRP)

HIRADC (*Hazard Identification, Risk Assessment, and Determining Control*) adalah instrumen inti pemenuhan Klausul 6.1.2 ISO 45001:2018.

### Formulasi Matriks Risiko $5 \times 5$:
Tingkat risiko kuantitatif ($R$) diformulasikan sebagai perkalian antara Keparahan/Keseriusan Dampak ($S$, *Severity*) dan Kemungkinan Terjadinya ($P$, *Probability/Likelihood*):

$$R = S \times P$$

Jika mempertimbangkan tingkat keterpaparan durasi kerja ($E$, *Exposure*), formulasi Fine-Kinney digunakan:

$$R_{\text{Fine-Kinney}} = S \times P \times E$$

Di mana:
- **Severity ($S$, 1-5)**: $1 = \text{First Aid (P3K)}$, $2 = \text{Medical Treatment (Tanpa Cacat)}$, $3 = \text{Lost Time Injury (Cacat Sementara)}$, $4 = \text{Permanent Disability (Cacat Tetap)}$, $5 = \text{Fatality / Kematian Tunggal atau Massal}$.
- **Probability ($P$, 1-5)**: $1 = \text{Hampir mustahil } (< 1\text{ kali/10 tahun})$, $2 = \text{Jarang } (1\text{ kali/5 tahun})$, $3 = \text{Sedang } (1\text{ kali/tahun})$, $4 = \text{Sering } (1\text{ kali/bulan})$, $5 = \text{Sangat Sering / Terjadi setiap hari}$.
- **Kategori Tingkat Risiko ($R$)**:
  - $R \in [1, 4]$: **Low Risk (Rendah)** $\to$ Cukup prosedur kerja standar (SOP).
  - $R \in [5, 9]$: **Medium Risk (Sedang)** $\to$ Memerlukan monitoring berkala dan pelatihan terencana.
  - $R \in [10, 15]$: **High Risk (Tinggi)** $\to$ Wajib tindakan pengendalian rekayasa teknis sesegera mungkin.
  - $R \in [16, 25]$: **Extreme / Critical Risk (Ekstrem)** $\to$ Pekerjaan dilarang dimulai sebelum risiko diturunkan (*Stop Work Authority*).

---

## 3. Hierarki Pengendalian Bahaya (*Hierarchy of Controls*)

Berdasarkan ISO 45001 Klausul 8.1.2, tindakan mitigasi wajib dieksekusi secara berurutan dari tingkat efektivitas tertinggi ke terendah:

```
[1. ELIMINASI]       --> Menghilangkan sumber bahaya secara total dari sistem kerja (Efektivitas 100%)
      |
[2. SUBSTITUSI]      --> Mengganti material/proses beracun dengan yang lebih aman (e.g., Cat Water-Based)
      |
[3. REKAYASA TEKNIK] --> Engineering Controls: Interlock Guarding, Local Exhaust Ventilation (LEV), Scaffolding
      |
[4. ADMINISTRATIF]   --> SOP, Job Safety Analysis (JSA), Izin Kerja Khusus (PTW), Rotasi Shift Kerja
      |
[5. ALAT PELINDUNG]  --> APD / PPE: Helm Safety, Safety Shoes, Harness 2-Hook, Respirator Gas (Lapisan Terlemah)
```

---

## 4. Metrik Kinerja K3 Internasional (Safety KPIs)

Standar OSHA 1904 dan ANSI Z16 menetapkan normalisasi metrik per $200.000$ jam kerja orang (*man-hours*, ekuivalen 100 pekerja $\times 40$ jam/minggu $\times 50$ minggu/tahun):

### 1. Lost Time Injury Frequency Rate (LTIFR / LTIR):
$$\text{LTIR} = \frac{\text{Jumlah Kasus Kecelakaan Kehilangan Hari Kerja (LTI)} \times 200.000}{\text{Total Jam Kerja Karyawan (Total Man-Hours)}}$$

### 2. Total Recordable Incident Rate (TRIR):
$$\text{TRIR} = \frac{(\text{Fatality} + \text{Lost Time} + \text{Restricted Work} + \text{Medical Treatment}) \times 200.000}{\text{Total Man-Hours}}$$

### 3. Severity Rate (SR - Tingkat Keparahan Hari Kerja Hilang):
Standar ILO dan PP 50/2012 menormalisasi basis 1.000.000 jam kerja:

$$\text{SR} = \frac{\text{Total Jumlah Hari Kerja yang Hilang (Lost Days)} \times 1.000.000}{\text{Total Man-Hours}}$$

### 4. Rasio Segitiga Heinrich & Frank Bird Bird's Triangle:
Frank Bird (1969) membuktikan hubungan statistik tingkat keparahan insiden:

$$\text{Fatality / Major (1)} : \text{Minor Injuries (10)} : \text{Property Damage (30)} : \text{Near-Misses (600)}$$

---

## 5. Prosedur Investigasi Insiden: Systematic Cause Analysis Technique (SCAT) & LOTO

### A. Alur Investigasi Kecelakaan Kerja 5-Tahap:
1. **Tanggap Darurat & Isolasi TKP**: Berikan pertolongan pertama, aktifkan *Emergency Response Team*, dan pasang *safety line*.
2. **Pengumpulan Bukti Nyata (4P)**:
   - *People*: Wawancara saksi langsung dan korban (teknik *open-ended non-blaming*).
   - *Position*: Dokumentasi foto koordinat korban, posisi mesin, ceceran zat kimia.
   - *Parts*: Uji metalurgi patahan baut, kondisi rem kargo crane, sensor batas.
   - *Paperwork*: Logbook maintenance, checklist P2H harian, catatan training operator, JSA.
3. **Analisis Akar Masalah (Root Cause Analysis)**: Menggunakan SCAT (*Loss Causation Model* Bird & Germain):
   - *Direct Causes*: *Unsafe Acts* (92%) & *Unsafe Conditions* (8%).
   - *Basic/Root Causes*: Faktor Personal (kurang kompetensi, kelelahan) & Faktor Pekerjaan (standar kerja cacat, pengadaan salah).
4. **Perumusan Tindakan Korektif (CAPA)**: Menggunakan prinsip SMART (*Specific, Measurable, Achievable, Relevant, Time-bound*).
5. **Close-Out & Lesson Learned**: Sosialisasi *Safety Alert* pada *Toolbox Meeting* seluruh departemen.

### B. Prosedur 6-Langkah Isolasi Energi Kritis (OSHA LOTO 1910.147):
1. *Preparation*: Identifikasi seluruh sumber energi (Listrik, Pneumatik, Hidrolik, Termal, Gravitasi).
2. *Notification*: Beritahu seluruh operator terdampak di area kerja.
3. *Shutdown*: Matikan sakelar operasional peralatan.
4. *Isolation*: Putuskan pemutus sirkuit utama (*Circuit Breaker* / *Main Valve*).
5. *Lockout/Tagout Application*: Pasang gembok pengaman personal (*Padlock*) dan label bahaya (*Danger Tag*).
6. *Zero Energy State Verification*: Lepaskan sisa tekanan residu (*bleed pressure / capacitor discharge*) dan coba nyalakan tombol start (uji zero voltage dengan multimeter).

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- International Organization for Standardization. (2018). *ISO 45001:2018 Occupational health and safety management systems — Requirements with guidance for use*. Geneva: ISO.
- Occupational Safety and Health Administration. (2020). *OSHA 29 CFR 1910.147: The Control of Hazardous Energy (Lockout/Tagout)*. U.S. Department of Labor.
- Republik Indonesia. (2012). *Peraturan Pemerintah Republik Indonesia No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja*. Lembaran Negara RI.
- Henny, H., Budi, A. H. S., & Pratama, A. (2025). *Hazard identification, risk assessment, and determining control (HIRADC) for workplace safety in manufacturing industry: A risk-control framework*. Asian Journal of Science, Engineering and Management, 5(2), 112-124. DOI: [10.51393/ajsem.2025020](https://doi.org/10.51393/ajsem.2025020).
- Al Zhafir, H., Nandito, J., & Ulya, I. (2026). *Implementation of Occupational Health and Safety Using the HIRADC Method in High-Risk Industrial Environments*. International Journal of Industrial Safety and Health, 8(1), 45-58.
