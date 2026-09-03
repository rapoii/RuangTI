# 2023 — Integrasi Large Language Models (LLM) dalam Failure Mode and Effects Analysis (FMEA): Kerangka Kerja dan Studi Kasus untuk Otomasi Analisis Risiko di Sektor Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Integrating large language models for improved failure mode and effects analysis (FMEA): a framework and case study
**Jurnal & Sitasi Utama:** Ibtissam El Hassani, Tawfik Masrour, Nouhan Kourouma (2024). *Proceedings of the Design Society*. DOI: [https://doi.org/10.1017/pds.2024.204](https://doi.org/10.1017/pds.2024.204)
**Sitasi Pendukung:** Ibtissam El Hassani, Tawfik Masrour, Nouhan Kourouma (2025). *Design Science*. DOI: [https://doi.org/10.1017/dsj.2025.7](https://doi.org/10.1017/dsj.2025.7)

---

## 1. Pendahuluan dan Konteks Industri

Failure Mode and Effects Analysis (FMEA) telah menjadi tulang punggung rekayasa keandalan (*reliability engineering*) sejak diperkenalkan di industri kedirgantaraan Amerika Serikat pada akhir dekade 1940-an, dan kini diadopsi secara luas dalam standar ISO 31000, IEC 60812, serta AIAG-VDA FMEA Handbook. Dalam konteks manufaktur modern yang ditandai oleh kompleksitas sistem siber-fisik (*cyber-physical systems*), elektrifikasi powertrain, dan tren *Industry 4.0*, volume data historis mengenai kegagalan komponen, laporan insiden lapangan (*field failure reports*), serta dokumen desain teknis telah meningkat secara eksponensial. Ironisnya, metode FMEA manual yang masih banyak diterapkan di industri justru mengalami *bottleneck* signifikan karena bersifat padat karya (*labor-intensive*), rentan inkonsistensi antar-evaluator, serta memerlukan waktu berminggu-minggu hingga berbulan untuk diselesaikan pada lini produk berskala besar.

El Hassani, Masrour, dan Kourouma (2024, DOI: [10.1017/pds.2024.204](https://doi.org/10.1017/pds.2024.204)) menyoroti secara eksplisit bahwa *"the manual execution of failure mode and effects analysis (FMEA) is time-consuming and error-prone"*, dan mengajukan kerangka integrasi Large Language Models (LLM) sebagai pendekatan *human-in-the-loop* untuk mengotomatisasi tahap *data collection*, *pre-processing*, dan *reliability assessment*. Penelitian lanjutan mereka yang dipublikasikan di *Design Science* (2025, DOI: [10.1017/dsj.2025.7](https://doi.org/10.1017/dsj.2025.7)) memperkuat argumentasi tersebut dengan menyatakan bahwa FMEA merupakan *"a critical but labor-intensive process in product development"* dan mengusulkan kerangka generatif AI yang tidak hanya mempercepat identifikasi *failure modes* tetapi juga mendukung *risk identification* serta *decision-making*.

Urgensi ekonomis dari adopsi pendekatan ini dapat diukur dari laporan *Industry Week* dan *ASQ* yang menunjukkan bahwa biaya *quality* (terutama biaya kegagalan internal dan eksternal) rata-rata menyumbang 15–40% dari total biaya operasional perusahaan manufaktur. Dalam industri otomotif, *recall* akibat kegagalan fungsi (*functional failure*) dapat merugikan perusahaan hingga miliaran dolar AS per insiden (lihat *Center for Automotive Research*). Oleh karena itu, kemampuan LLM untuk men-*ingest* ribuan halaman *service manual*, *warranty claim database*, dan dokumen *engineering change order* (ECO) guna mengekstraksi *failure mode* secara otomatis berpotensi memberikan *value added* yang sangat substansial. Lebih jauh, integrasi LLM memungkinkan adopsi paradigma *living FMEA* di mana dokumen analisis risiko selalu terkini seiring dengan evolusi desain dan umpan balik lapangan, menjawab kelemahan fundamental FMEA statis konvensional.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Risiko Klasik FMEA (RPN)

Formulasi klasik FMEA mendefinisikan *Risk Priority Number* (RPN) sebagai fungsi multiplikatif tiga parameter ordinal berskala 1–10:

$$RPN = S \times O \times D$$

di mana:
- $S$ (*Severity*) = tingkat keparahan dampak kegagalan terhadap sistem, pelanggan, atau keselamatan (skala 1 = tidak signifikan hingga 10 = katastrofik, potensi cedera fatal);
- $O$ (*Occurrence*) = frekuensi kejadian kegagalan per unit waktu atau per jumlah produksi (skala 1 = sangat jarang hingga 10 = sangat sering, hampir tak terelakkan);
- $D$ (*Detection*) = kemampuan sistem kontrol mutu saat ini dalam mengeteksi modus kegagalan sebelum produk sampai ke pelanggan (skala 1 = hampir pasti terdeteksi hingga 10 = hampir mustahil terdeteksi).

Nilai RPN secara teoretis berada pada rentang $[1, 1000]$, dengan ambang batas tindakan (*action threshold*) yang umum digunakan pada $RPN \geq 100$ atau $S \geq 9$ (terlepas dari nilai RPN, untuk *single point failure* kritis).

### 2.2. Kritik terhadap RPN Klasik dan Pendekatan Fuzzy-TOPSIS

Kritik utama terhadap RPN adalah sifatnya yang kompensatif (nilai $O$ atau $D$ rendah dapat "ditebus" oleh nilai lain), diskriminitas rendah (banyak kombinasi menghasilkan RPN identik), serta ambiguitas penilaian antar-evaluator. Sebagai penyempurnaan, formulasi *fuzzy FMEA* menggunakan bilangan *triangular fuzzy number* (TFN) untuk menangkap ketidakpastian linguistik:

$$\tilde{R} = (\tilde{S} \otimes \tilde{O} \otimes \tilde{D})$$

di mana setiap parameter direpresentasikan sebagai $\tilde{A} = (a_1, a_2, a_3)$ dengan *membership function*:

$$\mu_{\tilde{A}}(x) = \begin{cases} 0, & x < a_1 \\ \frac{x - a_1}{a_2 - a_1}, & a_1 \leq x \leq a_2 \\ \frac{a_3 - x}{a_3 - a_2}, & a_2 \leq x \leq a_3 \\ 0, & x > a_3 \end{cases}$$

### 2.3. Ukuran Akurasi dan Reliabilitas Antarevaluator

Untuk mengukur konsistensi hasil FMEA berbasis AI vs manual, kerangka kerja El Hassani et al. (2024) menyarankan penggunaan koefisien Cohen's Kappa ($\kappa$) sebagai metrik reliabilitas antarrater:

$$\kappa = \frac{p_o - p_e}{1 - p_e}$$

di mana $p_o$ adalah proporsi kesepakatan terobservasi dan $p_e$ adalah proporsi kesepakatan yang diharapkan secara kebetulan. Nilai $\kappa > 0{,}80$ mengindikasikan *near-perfect agreement*, sedangkan $\kappa < 0{,}40$ menunjukkan reliabilitas rendah.

### 2.4. Metrik Efisiensi Proses

Efisiensi waktu integrasi LLM diukur melalui *time reduction ratio*:

$$\eta_T = \frac{T_{manual} - T_{LLM}}{T_{manual}} \times 100\%$$

dan *coverage ratio* untuk cakupan *failure mode*:

$$\eta_C = \frac{N_{LLM} - N_{manual}}{N_{manual}} \times 100\%$$

di mana $N$ adalah jumlah modus kegagalan teridentifikasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Kerangka kerja yang diusulkan El Hassani et al. (2024, 2025) terdiri atas lima tahapan utama yang membentuk SOP terintegrasi:

**Tahap 1 — Akuisisi dan Agregasi Data Heterogen.**
Data dikumpulkan dari berbagai repositori internal perusahaan: *Computer-Aided Design* (CAD) metadata, Bill of Materials (BoM), Service Information System, *warranty Database*, *Non-Conformance Reports* (NCR), *Customer Concern Database*, dan dokumen *Engineering Change Request* (ECR). LLM (misal GPT-4 atau LLM fine-tuned domain-spesifik) menerima dokumen sebagai input teks terstruktur.

**Tahap 2 — Pre-processing dan Normalisasi.**
Tahap ini menerapkan *retrieval-augmented generation* (RAG) untuk memotong dokumen menjadi *chunks* relevan, kemudian menstandarkan terminologi kegagalan menggunakan *failure mode taxonomy* (misal berdasarkan standar SAE J1739 atau VDA-RGA). LLM dilatih dengan *few-shot prompting* untuk melakukan *named entity recognition* (NER) terhadap komponen, modus kegagalan, dan efek.

**Tahap 3 — Identifikasi Modus Kegagalan Otomatis.**
LLM diminta untuk melakukan *chain-of-thought reasoning*: (a) identifikasi fungsi komponen, (b) eksplorasi skenario kerusakan, (c) enumerasi modus kegagalan, (d) identifikasi efek lokal, sistem, dan akhir. Output divalidasi silang (*cross-validated*) dengan riwayat *field failure* historis.

**Tahap 4 — Penilaian Risiko dengan Human-in-the-Loop.**
Skor $S$, $O$, dan $D$ awalnya di-*generate* oleh LLM berdasarkan basis data historis, kemudian direview dan direvisi oleh *cross-functional team* (CFT) yang terdiri atas insinyur desain, manufaktur, kualitas, dan *reliability engineer*. Pendekatan ini menjamin *expert judgment* tetap menjadi otoritas final.

**Tahap 5 — Sintesis Laporan FMEA dan Pemutakhiran Berkelanjutan.**
Output akhir berupa dokumen FMEA terstruktur (sesuai template AIAG-VDA) yang disimpan dalam repositori terpusat dengan *version control*. *Feedback loop* otomatis memperbarui model setiap kali insiden lapangan baru dilaporkan.

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Data        │───▶│ Pre-process  │───▶│ Failure Mode │───▶│   Risk       │───▶│   Report     │
│ Acquisition  │    │  (RAG + NER) │    │ Identification│    │ Assessment   │    │  Synthesis   │
└──────────────┘    └──────────────┘    └──────────────┘    └ (Human-in-    │    └──────────────┘
       │                                        │              │  the-loop)   │           │
       └──────────── Feedback Loop (Field Failure Data) ─────────────────────┘           │
                                                                                          ▼
                                                                          Continuous Model Update
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus.** Sebuah OEM otomotif Tier-1 melakukan FMEA terhadap modul *Electronic Control Unit* (ECU) untuk sistem pengereman *Anti-lock Braking System* (ABS). Modul ini memiliki 32 komponen aktif (IC, sensor, kapasitor, konektor). Tim manual terdiri atas 6 insinyur senior dengan waktu pengerjaan 40 jam kerja (5 hari kerja penuh).

### 4.1. Ekstraksi Sampel Modus Kegagalan (Manual vs LLM-Enhanced)

| ID | Komponen | Modus Kegagalan | Efek | $S$ | $O$ | $D$ | $RPN_{manual}$ | $RPN_{LLM}$ |
|----|----------|------------------|------|-----|-----|-----|----------------|--------------|
| FM-01 | Sensor kecepatan roda | Drift kalibrasi | ABS tidak aktif, jarak pengerjaan bertambah | 9 | 4 | 5 | 180 | 180 |
| FM-02 | Solder joint BGA | Cold joint / retak | Intermittent failure ECU, lampu MIL nyala | 8 | 5 | 6 | 240 | 240 |
| FM-03 | Kapasitor elektrolitik | Kapasitansi turun (dry-out) | Ripple tegangan, sensor erroneous | 7 | 6 | 7 | 294 | 294 |
|.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
