# Modul 773: Vendor Managed Inventory (VMI) & CPFR — Panduan Praktis Bahasa Indonesia

## Overview

Vendor Managed Inventory (VMI) adalah skema kolaborasi rantai pasok di mana **pemasok yang mengelola persediaan** di lokasi pembeli: pembeli tidak lagi mengirim purchase order rutin, melainkan membagikan data penjualan dan stok secara real-time, lalu pemasok yang menentukan kapan dan berapa banyak pengiriman replenishment. CPFR (Collaborative Planning, Forecasting and Replenishment) adalah perluasannya: kedua pihak menyusun rencana bisnis, ramalan permintaan, dan jadwal pengisian ulang bersama-sama dalam satu siklus formal.

## Mekanisme Kerja VMI

1. **Perjanjian kerangka** — kesepakatan level stok minimum/maksimum, service level target, hak kirim tanpa PO.
2. **Berbagi data** — pembeli membuka data POS/inventory on-hand kepada vendor via EDI/portal/API.
3. **Vendor merencanakan** — pemasok menjalankan perhitungan reorder point/quantity untuk stok milik (atau consignment) pembeli.
4. **Eksekusi pengiriman** — replenishment otomatis sesuai kesepakatan; faktur bisa berbasis konsumsi (sell-through).
5. **Evaluasi berkala** — review KPI bersama bulanan/kuartalan.

## CPFR: Empat Tahap Kolaborasi

- **Plan**: penyelarasan tujuan bisnis dan aturan main (forecast horizon, exception handling).
- **Forecast**: satu ramalan permintaan bersama, bukan dua ramalan terpisah yang saling bertabrakan.
- **Replenish**: jadwal pengisian ulang disepakati dan dieksekusi otomatis.
- **Review**: ukur forecast accuracy (MAPE), fill rate, dan stok bersama; perbaiki terus.

## Manfaat Kuantitatif Tipikal

- Bullwhip effect berkurang drastis karena pemasok melihat demand riil, bukan pesanan yang sudah dipoles.
- Inventory turnover naik 10–30%; stockout turun seiring service level naik ke 97–99%.
- Biaya administrasi pemesanan turun (PO manual hilang); kapasitas produksi pemasok lebih stabil (production smoothing).

## Risiko dan Faktor Keberhasilan

Kepercayaan adalah fondasi: data penjualan bisa dianggap rahasia dagang. Perlu kontrak jelas soal kepemilikan stok (consignment vs title transfer), alokasi biaya obsolescence, dan exit strategy. Kegagalan umum: vendor tanpa kemampuan perencanaan memadai, integrasi IT lemah, dan KPI antar-pihak tidak selaras.

## Aplikasi dalam Teknik Industri

- Menentukan parameter (s,S) atau min-max policy pada VMI dengan model persediaan stochastic.
 Studi kasus retail–FMCG (Wal-Mart–P&G klasik) dan manufaktur–supplier tier-1 otomotif.
- Integrasi dengan EOQ/ROP klasik: siapa pemilik keputusan menentukan fungsi objektif total cost bersama (jointly optimized).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
