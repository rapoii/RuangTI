# Modul 771: Blockchain dalam Manajemen Rantai Pasok — Panduan Praktis Bahasa Indonesia

## Overview

Blockchain adalah buku besar terdistribusi (distributed ledger) yang mencatat transaksi secara permanen, transparan, dan sulit dimodifikasi. Dalam manajemen rantai pasok (Supply Chain Management), blockchain dipakai untuk **traceability** (ketertelusuran produk), transparansi antar-mitra, dan otomatisasi kontrak melalui smart contract. Teknologi ini menjawab masalah klasik SCM: asimetri informasi, pemalsuan produk, dan lambatnya rekonsiliasi dokumen antar-pihak.

## Konsep Inti untuk Rantai Pasok

1. **Distributed Ledger** — setiap mitra (pemasok, pabrik, distributor, ritel) memegang salinan catatan yang sama; tidak ada satu pihak pun yang bisa mengubah sepihak.
2. **Immutability** — catatan yang sudah masuk blok tidak bisa diubah tanpa konsensus mayoritas; cocok untuk jejak audit.
3. **Smart Contract** — kontrak digital yang mengeksekusi otomatis saat syarat terpenuhi (contoh: pembayaran otomatis ke petani saat sensor IoT memverifikasi kontainer tiba pada suhu layak).
4. **Konsensus** — mekanisme kesepakatan jaringan: PoW (berat, jarang di supply chain), PoS, dan Practical Byzantine Fault Tolerance (PBFT) yang umum untuk consortium enterprise.

## Kasus Penggunaan Utama

- **Traceability pangan** (Walmart–IBM Food Trust): melacak asal sayur dalam hitungan detik, bukan hari.
- **Antipalsu farmasi**: serialisasi obat dari pabrik ke apotek; konsumen memverifikasi keaslian via QR.
- **Logistik maritim** (TradeLens): digitalisasi bill of lading, memangkas waktu demurrage.
- **Etika & keberlanjutan**: sertifikasi kayu legal, bebas tambang anak, karbon footprint per unit produk.

## Kelebihan dan Tantangan

Kelebihan: ketertelusuran ujung-ke-ujung, kepercayaan tanpa perantara tunggal, ketahanan data (tanpa single point of failure).

Tantangan: skala transaksi (TPS blockchain masih kalah database tradisional), integrasi ERP legacy, kerahasiaan harga antar-kompetitor dalam consortium, dan "garbage in garbage forever" — blockchain menjamin data tidak diubah, tidak menjamin data benar saat input (oracle problem).

## Aplikasi dalam Teknik Industri

- Desain sistem pelacakan lot/batch produksi dengan QR/RFID + hash on-chain untuk industri farmasi dan makanan.
- Analisis trade-off on-chain vs off-chain storage: hash + metadata di-chain, berkas besar di IPFS/database.
- Evaluasi kelayakan investasi blockchain (Ekonomi Teknik) versus EDI/API tradisional.
- Integrasi dengan Industry 4.0: blockchain sebagai lapisan trust di atas IIoT dan digital twin.
