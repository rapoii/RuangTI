# 2843 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Termal Multi-Die, dan Optimasi Proses Cu-Cu Hybrid Bonding

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding* dalam *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Transisi arsitektur dari monolithic System-on-Chip (SoC) menuju desain berbasis chiplet merupakan salah satu pergeseran paradigma paling signifikan dalam industri semikonduktor sejak diperkenalkannya teknologi CMOS. Sebagaimana ditegaskan oleh Roze dan Gerber (2026) dalam proceedings *International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, persoalan penskalaan transistor ke node sub-3 nm menghadapi tiga hambatan struktural sekaligus: (i) kuantum tunneling yang menurunkan kontrol kanal MOSFET, (ii) biaya fabrikasi yang meningkat secara eksponensial melampaui USD 20 miliar per fasilitas fabrikasi kelas先進, dan (iii) kurva yield yang menurun tajam akibat kompleksitas proses litografi EUV multi-patterning. Ketiga hambatan tersebut迫使业界 untuk melakukan disagregasi arsitektural, di mana sebuah SoC besar dipecah menjadi 4–16 chiplet khusus yang kemudian diintegrasikan pada interposer silikon, redistribution layer (RDL), atau secara vertikal melalui 3D stacking.

Konteks ekonomi dari pergeseran ini sangat mendesak. Proyeksi pasar chiplet menunjukkan pertumbuhan dari USD 5,7 miliar pada 2024 menjadi lebih dari USD 97 miliar pada 2028, dengan CAGR >65%, didorong oleh hyperscale data center, akselerator AI (NVIDIA H100, AMD MI300), dan aplikasi High-Performance Computing (HPC) yang menuntut bandwidth memori, efisiensi energi, dan densitas komputasi tinggi. Pada saat yang sama, Lau (2023, DOI: 10.1007/978-981-19-9917-8_6) mendemonstrasikan bahwa integrasi chiplet modern harus secara simultan mengoptimalkan enam domain fisik yang saling berinteraksi: (1) integritas sinyal listrik pada pitch bonding sub-3 μm, (2) manajemen termal lintas die bertumpuk dengan densitas daya >100 W/cm², (3) tegangan mekanis akibat mismatch koefisien ekspansi termal (CTE), (4) impedansi Power Delivery Network (PDN) lintas multi-voltage domain, (5) interferensi elektromagnetik (EMI) dan crosstalk pada interconnect padat, serta (6) pertimbangan manufacturability/yield per die yang telah terverifikasi (Known-Good-Die/KGD).

Roze dan Gerber (2026) berargumen bahwa rantai alat EDA klasik (sintesis logika → place-and-route → verifikasi timing) sudah tidak lagi memadai. Industri harus mengadopsi apa yang mereka sebut sebagai *

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
