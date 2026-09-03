# Modul 772: Logistik Rantai Dingin (Cold Chain) — Panduan Praktis Bahasa Indonesia

## Overview

Logistik rantai dingin (cold chain logistics) adalah pengelolaan rantai pasok produk sensitif suhu — makanan segar, vaksin, biopharmaceutical, seafood — agar tetap dalam rentang suhu terkendali dari asal sampai tujuan. Kegagalan satu mata rantai menyebabkan kerusakan produk (spoilage) yang tidak dapat dipulihkan. Rantai dingin memadukan ilmu pangan, termodinamika, manajemen persediaan, dan monitoring IoT.

## Elemen Utama Rantai Dingin

1. **Rentang suhu standar** — frozen (−18°C ke bawah), chilled (0–4°C), controlled room temperature (15–25°C), ultra-cold (−70°C untuk vaksin mRNA tertentu).
2. **Reefer & insulated packaging** — kontainer berpendingin, cold box, vaccine carrier dengan ice packs conditioned.
3. **Cold storage** — gudang dengan zona suhu berbeda; prinsip FIFO/FEFO (First Expired First Out) wajib untuk produk berkedaluwarsa.
4. **Monitoring IoT & data logger** — sensor suhu/kelembapan real-time dengan alarm deviasi; data log wajib disimpan untuk audit regulasi (BPOM, WHO PQS).
5. **Last-mile thermal packaging** — kemasan termal dengan PCM (phase change material) untuk pengiriman terakhir.

## Metrik dan Perhitungan Kunci

- **Spoilage rate (%)** = unit rusak / total unit terkirim × 100. Target industri farmasi < 1%.
- **Time out of refrigeration (TOR)** — akumulasi waktu produk di luar rentang suhu aman; banyak produk punya batas TOR maksimum sebelum efficacy turun.
- **Biaya energi cold storage** didominasi kompresor (±60%); efisiensi ditingkatkan via pre-cooling barang masuk, curtain udara di pintu, dan defrost on-demand.
- **Trade-off persediaan**: safety stock lebih besar menahan spoilage risk tapi menaikkan holding cost termal yang mahal.

## Tantangan Khas Indonesia

- Infrastruktur listrik tidak stabil → generator backup dan desain gudang toleransi blackout.
- Suhu tropis dan kelembapan tinggi mempercepat beku-basah (freeze-burn) bila kontrol buruk.
- Distribusi kepulauan: multi-leg transport meningkatkan risiko TOR; perlu desain jaringan fasilitas (facility location) yang menyeimbangkan jumlah cold storage regional.
- Cold chain vaksin program (arabun/kotak penyimpanan) mengikuti standar WHO EVM.

## Aplikasi dalam Teknik Industri

- Perencanaan kapasitas cold storage dan simulasi antrian dock bongkar muat.
- Vehicle Routing Problem dengan time windows + kendala suhu (VRPTW-termal).
- Manajemen risiko rantai pasok (SCRM): FMEA mode kegagalan pendinginan, mitigasi blackout.
- Desain eksperimen untuk optimalisasi set-point suhu vs konsumsi energi kompresor.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
