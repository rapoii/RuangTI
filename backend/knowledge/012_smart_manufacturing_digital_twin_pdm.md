# Modul Riset Ilmiah: Smart Manufacturing, Digital Twin, & Predictive Maintenance (PdM)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref & Google Scholar Validated - Terkini):**
- Khan, T., Khan, U., Khan, A., Mollan, C., dkk. (2025). *Data-Driven Digital Twin Framework for Predictive Maintenance of Smart Manufacturing Systems*. Machines. DOI: [10.3390/machines13060481](https://doi.org/10.3390/machines13060481).
- Mohan, R., Roselyn, J. P., & Uthra, R. A. (2023). *LSTM based artificial intelligence predictive maintenance technique for availability rate and OEE improvement in a TPM implementing plant through Industry 4.0 transformation*. Journal of Quality in Maintenance Engineering. DOI: [10.1108/jqme-07-2022-0041](https://doi.org/10.1108/jqme-07-2022-0041).
- Kusiak, A. (2018). *Smart manufacturing*. International Journal of Production Research, 56(1-2), 508-517. (Konsep Dasar Smart Manufacturing).

---

## 1. Konsep Smart Manufacturing & Industry 4.0
Smart Manufacturing adalah penerapan teknologi informasi mutakhir, komputasi awan (*cloud computing*), analitik data besar (*big data*), sensor industri (IoT/IIoT), kecerdasan buatan (AI), dan *Digital Twin* ke dalam sistem produksi tradisional. 
Tujuannya adalah menciptakan pabrik pintar yang adaptif, saling terhubung (*interconnected*), dan mampu mengambil keputusan secara otonom untuk meminimalkan *waste* dan memaksimalkan *Overall Equipment Effectiveness (OEE)*.

---

## 2. Kembaran Digital (Digital Twin) di Manufaktur
*Digital Twin* (Kembaran Digital) merupakan representasi virtual waktu nyata (*real-time*) dari sistem atau objek fisik di lantai produksi (seperti mesin CNC, robot perakitan, atau bahkan seluruh tata letak pabrik). 

### Arsitektur Utama Digital Twin:
1. **Physical Space:** Aset fisik mesin dan sensor (RFID, PLC, SCADA) di lantai pabrik.
2. **Virtual Space:** Model 3D geometris, fisika, perilaku, dan aturan matematis (berjalan di server awan/lokal).
3. **Data Link / Koneksi:** Sinkronisasi aliran data dua arah (misalnya via protokol MQTT, OPC UA, atau REST API).

### Fungsi Digital Twin:
- Menguji skenario *What-If* pada tata letak fasilitas tanpa harus menghentikan produksi fisik.
- Memantau kondisi keausan mesin (*wear and tear*) secara *real-time*.
- *Virtual commissioning* lini perakitan baru sebelum dibangun secara fisik.

---

## 3. Analitik Prediktif: Predictive Maintenance (PdM) Berbasis Machine Learning
Evolusi strategi pemeliharaan mesin:
1. **Reactive / Breakdown Maintenance:** Tunggu mesin rusak baru diperbaiki (*Run-to-failure*).
2. **Preventive Maintenance (PM):** Perbaikan berkala berdasarkan jadwal/waktu terlepas dari kondisi aktual mesin.
3. **Predictive Maintenance (PdM):** Intervensi pemeliharaan **hanya saat dibutuhkan**, diprediksi berdasarkan kondisi aktual (getaran, suhu, akustik) dan algoritma *Machine Learning*.

### Metode Machine Learning (ML) dalam PdM:
- **Long Short-Term Memory (LSTM) / Recurrent Neural Networks (RNN):** Sangat andal menangani data deret waktu (*time-series*) historis dari sensor getaran (*vibration*) atau termal untuk memprediksi sisa umur pakai aset.
- **RUL (Remaining Useful Life):** Estimasi waktu atau jumlah siklus operasi yang tersisa dari mesin/komponen sebelum mencapai ambang kegagalan (*threshold of failure*).

### Formulasi Dampak pada OEE:
Implementasi *Predictive Maintenance* dan *Digital Twin* menargetkan eliminasi langsung terhadap dua akar kerugian utama OEE Nakajima:
1. **Equipment Failure (Kerusakan Mesin):** Waktu henti mesin tak terencana akan mendekati angka nol, sehingga **Availability Rate ($A$) $\uparrow$**.
2. **Reduced Speed & Quality Defects:** Gejala keausan terdeteksi secara algoritmis sebelum merusak kualitas produk, sehingga **Performance Rate ($P$) $\uparrow$** dan **Quality Rate ($Q$) $\uparrow$**.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
