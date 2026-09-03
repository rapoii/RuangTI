# 792 — Closed-Loop Reverse Logistics for Electric Vehicle Battery Packs: Disassembly Automation, State-of-Health (SoH) Rapid Screening, and Second-Life Stationary Storage Re-purposing

**Domain:** Teknik Industri  
**Topik Spesialis:** Logistik Terbalik Tertutup untuk Pack Baterai Kendaraan Listrik (EV)  
**Standar & Referensi Utama:** ISO 14001 (Sistem Manajemen Lingkungan), ASTM E2918 (Guide for Forensic Engineering of Lithium-Ion Batteries), IEEE 2800 (Interconnection and Interoperability of Inverter-Based Resources), APICS SCOR Model (Supply Chain Operations Reference), IISE Body of Knowledge in Circular Economy

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global mengalami transisi mendadak menuju kendaraan listrik (EV) sebagai respons terhadap target net-zero emission pada tahun 2050. Menurut proyeksi International Energy Agency (IEA), penjualan EV global diproyeksikan mencapai 35% dari total penjualan mobil pada tahun 2030, dengan kapasitas baterai rata-rata meningkat dari 60 kWh menjadi 100 kWh per unit. Namun, hal ini menciptakan tantangan serius dalam manajemen akhir siklus hidup (end-of-life, EOL) baterai ion-lithium (Li-ion). Setiap pack baterai EV mengandung material berharga seperti kobalt, nikel, litium, dan grafit, yang bernilai ekonomi hingga US$ 10.000–15.000 per unit pada tahap EOL. Di sisi lain, limbah baterai dapat mencapai 11,5 juta ton pada tahun 2030 jika tidak dikelola secara tertutup.

Permasalahan operasional utama adalah kompleksitas teknis dismantling pack baterai yang terintegrasi dengan sistem BMS (Battery Management System) yang sensitif terhadap kesalahan. Proses manual dismantling berisiko tinggi terhadap keamanan termal (thermal runaway) yang dapat menyebabkan kebakaran atau ledakan, dengan biaya pemulihan hingga US$ 500.000 per insiden. Dari perspektif ekonomi, biaya koleksi dan transportasi EOL mencapai 20–30% dari total biaya siklus hidup baterai, sementara pengurangan nilai SoH (State-of-Health) akibat siklus kalibrasi dan degradasi kimia menyebabkan penurunan kapasitas hingga 20% dalam 8 tahun pertama. Secara teknis, screening SoH secara manual memakan waktu 4–6 jam per unit, sehingga throughput produksi terbatas pada 50–100 unit/hari.

Urgensi industri semakin mendesak karena regulasi ketat seperti EU Battery Regulation 2023/1542 yang mewajibkan 65% material recovery pada tahun 2030 dan 70% pada 2035. Di Amerika Utara, Northvolt dan Redwood Materials melaporkan kerugian ekonomi hingga US$ 2 miliar akibat kurangnya infrastruktur closed-loop. Di Asia, perusahaan seperti BYD dan CATL menghadapi tantangan serupa dengan volume produksi yang mencapai 1 miliar unit pack per tahun. Tanpa sistem closed-loop reverse logistics yang terintegrasi, perusahaan EV berisiko kehilangan nilai material hingga 40% dan menurunkan daya saing kompetitif. Pendekatan closed-loop ini tidak hanya memulihkan nilai ekonomi tetapi juga mendukung ESG (Environmental, Social, Governance) dengan mengurangi emisi karbon hingga 60% dibandingkan dengan landfill atau incineration. Oleh karena itu, pengembangan otomasi dismantling, rapid SoH screening, dan repurposing kedua hidup menjadi kebutuhan strategis bagi rantai pasok global.

## 2. Landasan Teori & Formulasi Matematis

Konsep closed-loop reverse logistics berbasis pada model jaringan distribusi tertutup yang meminimalkan biaya total siklus hidup (Total Cost of Ownership, TCO). Model ini mengintegrasikan tiga tahap utama: koleksi EOL, dismantling, dan repurposing. Persamaan biaya total dapat dinyatakan sebagai:

$$
TC = \sum_{i=1}^{N} \left( C_{coll,i} \cdot Q_i + C_{trans,i} \cdot d_i + C_{dism,i} \cdot Q_i + C_{test,i} \cdot Q_i + C_{repur,i} \cdot Q_i \right)
$$

di mana $TC$ adalah biaya total per unit, $C_{coll,i}$ adalah biaya koleksi untuk jenis material $i$, $Q_i$ adalah volume throughput, $C_{trans,i}$ adalah biaya transportasi, $d_i$ adalah jarak rata-rata, $C_{dism,i}$ adalah biaya dismantling, $C_{test,i}$ adalah biaya screening, dan $C_{repur,i}$ adalah biaya repurposing.

State-of-Health (SoH) didefinisikan sebagai rasio kapasitas yang tersisa terhadap kapasitas nominal:

$$
SoH = \frac{C_{measured}}{C_{nominal}} \times 100\%
$$

di mana $C_{measured}$ adalah kapasitas yang diukur melalui discharge test pada kondisi standar (C/3 rate), dan $C_{nominal}$ adalah kapasitas rating pabrik (misalnya 100 kWh). Degradasi kapasitas dapat dimodelkan menggunakan persamaan empiris:

$$
C(t) = C_0 \cdot (1 - a \cdot t^b)
$$

dengan $C_0$ adalah kapasitas awal, $a$ adalah koefisien degradasi, $t$ adalah waktu siklus, dan $b$ adalah eksponen degradasi (biasanya $b \approx 0.5$–1 untuk Li-ion).

Untuk screening SoH secara cepat, metode Electrochemical Impedance Spectroscopy (EIS) digunakan dengan rumus impedansi total:

$$
Z(\omega) = R_0 + \frac{R_{ct}}{1 + j\omega C_{dl} R_{ct}} + Z_{diff}
$$

di mana $R_0$ adalah resistansi ohmik, $R_{ct}$ adalah resistansi charge transfer, $C_{dl}$ adalah kapasitas double layer, dan $Z_{diff}$ adalah impedansi difusi. Threshold SoH untuk repurposing kedua hidup ditetapkan pada 60–70% untuk aplikasi stationary storage agar menjamin umur baterai 5–10 tahun tambahan.

Optimasi jaringan reverse logistics menggunakan Mixed-Integer Linear Programming (MILP):

$$
\min \sum_{i,j} C_{ij} \cdot x_{ij}
$$

dengan subject to:

$$
\sum_{j} x_{ij} = Q_i \quad \forall i, \quad \sum_{i} x_{ij} \leq D_j \quad \forall j
$$

di mana $x_{ij}$ adalah aliran material dari lokasi $i$ ke fasilitas $j$, dan $D_j$ adalah kapasitas pemrosahan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Implementasi closed-loop reverse logistics dilakukan melalui tahapan sistematis sebagai berikut:

1. **Pengumpulan dan Pengurutan EOL**: Pack baterai dikumpulkan dari dealer dan customer menggunakan kendaraan khusus dengan GPS tracking. Proses pengurutan dilakukan dengan AI vision system untuk mendeteksi jenis pack (BEV, PHEV, atau NMC/NCA chemistry).

2. **Dismantling Otomatis**: Robotik 6-DOF dengan end-effector magnetik dan vacuum grip digunakan untuk membongkar cell dari module. Sistem ini mengintegrasikan cobot (collaborative robot) dengan force feedback sensor untuk menghindari kerusakan BMS. Arsitektur teknologi melibatkan PLC dan MES (Manufacturing Execution System) yang terhubung dengan IoT untuk real-time monitoring.

3. **Rapid SoH Screening**: Setelah dismantling, screening dilakukan dengan metode non-destructive menggunakan portable EIS device yang menghasilkan data dalam waktu kurang dari 3 menit per cell. Hasil SoH diklasifikasikan menjadi tiga kategori: >80% (reuse direct), 60–80% (second-life stationary), dan <60% (recycling primer).

4. **Repurposing dan Integrasi**: Pack dengan SoH memenuhi threshold dikirim ke fasilitas stationary storage dengan pengujian akhir sesuai IEEE 2800 untuk grid integration. Proses ini mencakup thermal management dan BMS calibration ulang.

Berikut adalah diagram alir proses (flowchart):

```
EOL Collection (Dealer/Customer)
        |
        v
Quality Check & Sorting
        |
        v
Automated Dismantling (Robotik 6-DOF)
        |
        v
Cell/module Isolation
        |
        v
Rapid SoH Screening (EIS/OCV)
        |
        v
Decision Tree:
   >80% → Direct Reuse
   60-80% → Second-Life Stationary Storage
   <60% → Material Recovery
        |
        v
Repurposing & Grid Integration
        |
        v
Documentation & Closed-Loop Tracking
```

Standar operasional mengikuti ISO 14001 untuk pengelolaan lingkungan dan APICS SCOR untuk metrik performa rantai pasok.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan kasus hipotetis perusahaan manufaktur EV dengan throughput 10.000 pack baterai per tahun (setara dengan 100.000 unit kendaraan listrik tahunan). Data input realistis: rata-rata umur EOL 8 tahun, kapasitas nominal 100 kWh, biaya koleksi US$ 150/unit, transportasi US$ 80/unit (jarak 500 km), dismantling otomatis US$ 120/unit, screening SoH US$ 45/unit, dan repurposing stationary US$ 90/unit.

Langkah kalkulasi:

1. Hitung throughput EOL: $Q_{EOL} = 10.000 \times \frac{1}{8} = 1.250$ unit/tahun.

2. Hitung biaya dismantling otomatis: $C_{dism} = 1.250 \times 120 = US$ 150.000/tahun.

3. Screening SoH: Asumsikan throughput screening 200 unit/jam, waktu 3 menit/unit, biaya US$ 45/unit. Total screening: $1.250 \times 45 = US$ 56.250/tahun.

4. Repurposing kedua hidup: Asumsikan 65% pack lolos threshold SoH (>65%), dengan revenue dari penjualan ke stationary storage US$ 3.500/unit (harga jual setelah kalibrasi). Pendapatan repurposing: $0.65 \times 1.250 \times 3.500 = US$ 2.843.750/tahun.

5. Perhitungan ROI: Biaya total operasional reverse logistics = US$ 150.000 + 56.250 + 90.000 (logistik) = US$ 296.250/tahun. Pendapatan repurposing dikurangi dengan biaya recycling primer (US$ 800/unit untuk 35% sisanya) = US$ 280.000. Net profit = US$ 2.843.750 - 280.000 - 296.250 = US$ 2.267.500/tahun. ROI = (Net Profit / Total Investment) × 100 = 227% (dengan asumsi investasi awal US$ 1 juta untuk otomasi).

Interpretasi manajerial: Pendekatan ini mengurangi biaya pemrosahan limbah hingga 45% dibandingkan landfill dan meningkatkan nilai material recovery hingga 68%. Manajer operasi dapat memprediksi penghematan emisi karbon sebesar 1.850 ton CO₂e/tahun berdasarkan perhitungan LCA (Life Cycle Assessment) menggunakan standar ISO 14040.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Closed-loop reverse logistics untuk baterai EV memiliki aplikasi lintas sektor yang kuat. Dalam supply chain, sistem ini meningkatkan ketahanan rantai pasok (supply chain resilience) dengan mengurangi ketergantungan pada sumber primer material yang volatil harga. Integrasi dengan otomasi Industry 4.0 memungkinkan real-time decision-making melalui digital twin platform yang menghubungkan data BMS dengan algoritma machine learning untuk prediksi degradasi.

Dalam manajemen biaya dan teknik, pendekatan ini mendukung circular economy model dengan mengurangi TCO hingga 35% melalui repurposing. Evaluasi manajerial menggunakan KPI SCOR seperti Perfect Order Fulfillment dan Return Rate yang dapat diukur sebagai:

$$
\text{Perfect Order Fulfillment} = \frac{\text{Orders on Time \& Complete}}{\text{Total Orders}} \times 100
$$

Tantangan adopsi mencakup keselamatan K3 (Kesehatan, Keselamatan, Keamanan) karena risiko termal pada cell Li-ion yang memerlukan protokol khusus transportasi sesuai IATA Dangerous Goods. Selain itu, tantangan regulasi seperti persyaratan sertifikasi baterai kedua hidup di beberapa negara dan integrasi dengan infrastruktur grid yang memerlukan kepatuhan IEEE 1547 untuk anti-islanding.

Dari perspektif ESG, sistem ini mendukung target sustainability dengan mengurangi limbah padat hingga 80% dan mendukung program CSR perusahaan. Tantangan adopsi utama adalah biaya awal otomasi (estimasi US$ 2–5 juta per lini produksi) dan keterampilan SDM yang memerlukan pelatihan khusus dalam forensic engineering baterai. Namun, studi kasus industri menunjukkan bahwa perusahaan yang mengadopsi closed-loop dapat meningkatkan nilai saham hingga 12% dalam 3 tahun melalui citra ESG yang lebih baik. Integrasi dengan disiplin lain seperti mechanical engineering (untuk desain modular pack) dan data analytics (untuk predictive maintenance) menjadi kunci keberhasilan implementasi.

Dokumen ini memberikan landasan komprehensif bagi pengembangan modul akademik dan pelatihan spesialis Teknik Industri di RuangTI.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
