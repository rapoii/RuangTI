# Modul Riset Ilmiah: Computer Integrated Manufacturing (CIM), Manufacturing Execution Systems (MES) & Standar ANSI/ISA-95
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- ANSI/ISA-95.00.01-2010. *Enterprise-Control System Integration - Part 1: Models and Terminology*.
- Groover, M. P. (2015). *Automation, Production Systems, and Computer-Integrated Manufacturing* (4th ed.). Pearson.
- Lee, J., Bagheri, B., & Kao, H. A. (2015). *A Cyber-Physical Systems architecture for Industry 4.0-based manufacturing systems*. Manufacturing Letters, Elsevier. DOI: [10.1016/j.mfglet.2014.12.001](https://doi.org/10.1016/j.mfglet.2014.12.001).
- Cheng, Y., Chen, K., Sun, H., Zhang, Y., & Tao, F. (2024). *Data and knowledge driven digital twin manufacturing execution system for complex product assembly*. Robotics and Computer-Integrated Manufacturing, Elsevier.
- Vogel-Heuser, B., Kegel, G., Bender, K., & Wucherer, K. (2023). *Global information architecture for industrial automation based on ISA-95 and RAMI 4.0*. at-Automatisierungstechnik, De Gruyter.

---

## 1. Konsep Hierarki ISA-95 (Purdue Enterprise Reference Architecture)
Standar internasional ANSI/ISA-95 mendefinisikan integrasi sistem otomatisasi kontrol pabrik dengan sistem perencanaan bisnis perusahaan (ERP). Model hierarki fungsional terbagi menjadi 5 level:

| Level | Deskripsi | Rentang Waktu (Time Horizon) | Sistem Utama |
|---|---|---|---|
| **Level 4** | Perencanaan Bisnis & Logistik (Business Planning & Logistics) | Bulan, Minggu, Hari | ERP, SCM, CRM |
| **Level 3** | Operasi & Manajemen Manufaktur (Manufacturing Operations Management - MOM) | Shift, Jam, Menit, Detik | **MES (Manufacturing Execution Systems)**, WMS, LIMS, APS |
| **Level 2** | Pengendalian Proses Otomatis (Control Systems) | Menit, Detik, Sub-detik | SCADA, DCS, HMI |
| **Level 1** | Penginderaan & Manipulasi Fisik (Sensing & Manipulation) | Milidetik | PLC, Sensor, Aktuator, Robot Drive |
| **Level 0** | Proses Fisik Nyata (Physical Process) | Kontinu / Real-time | Mesin Bubut, Konveyor, Reaktor Kimia |

---

## 2. Fungsi Inti Manufacturing Execution System (MES) (MESA-11 Framework)
Manufacturing Execution System (MES) bertindak sebagai jembatan *real-time* antara ERP tingkat atas dan kontrol lantai pabrik tingkat bawah. Berdasarkan standar MESA International, terdapat 11 fungsi utama:
1. **Resource Allocation & Status:** Mengelola status mesin, perkakas, operator, dan material.
2. **Operations/Detail Scheduling:** Penjadwalan *finite capacity* berdasarkan urutan riil.
3. **Dispatching Production Units:** Pelepasan *Job Orders* / *Work Orders* ke stasiun kerja.
4. **Document Control:** Distribusi instruksi kerja digital (SOP) dan gambar CAD terkini.
5. **Data Collection & Acquisition:** Pengumpulan data parameter proses dan *throughput* secara otomatis via IoT/PLC.
6. **Labor Management:** Pencatatan absensi, kompetensi, dan *time-tracking* operator.
7. **Quality Management:** Pengendalian SPC online, pencatatan *scrap*, dan penanganan *non-conformance*.
8. **Process Management:** Pemantauan kondisi proses dan pemberian alarm *interlock*.
9. **Maintenance Management:** Pelacakan jam operasi mesin untuk penjadwalan *Preventive Maintenance*.
10. **Product Tracking & Genealogy:** Kemampuan penelusuran balik (*full traceability*) dari bahan baku (lot number) hingga produk jadi (serial number).
11. **Performance Analysis:** Perhitungan metrik efisiensi mesin secara instan (*real-time OEE*).

---

## 3. Aliran Data & Integrasi B2MML (Business to Manufacturing Markup Language)
Pertukaran data antara Level 4 (ERP) dan Level 3 (MES) menggunakan skema XML/JSON terstandarisasi **B2MML**:
- **ERP ke MES:** Production Order ($PO_k$), Bill of Materials ($BOM$), Route/Routing, Engineering Change Orders ($ECO$).
- **MES ke ERP:** Aktual Konsumsi Material ($M_{used}$), Aktual Output Bagus ($Q_{good}$), Jumlah Cacat ($Q_{defect}$), Waktu Siklus ($T_{cycle}$), dan Jam Kerja ($Labor_{hours}$).

### Formulasi Sinkronisasi Persediaan & WIP:
$$ \Delta \text{WIP}_t = \sum_{j=1}^J Q_{\text{dispatched}, j, t} - \sum_{j=1}^J (Q_{\text{completed}, j, t} + Q_{\text{scrap}, j, t}) $$
Di mana MES secara real-time memastikan bahwa nilai $\text{WIP}$ fisik di lantai produksi sama persis dengan pencatatan akuntansi di ERP tanpa jeda batch harian.

---

## 4. Evolusi Menuju Smart MES & Digital Twin (Industry 4.0 / RAMI 4.0)
Dalam era manufaktur modern (Cheng et al., 2024; Vogel-Heuser et al., 2023), MES bertransformasi menjadi *Cloud/Edge Hybrid MES* yang terintegrasi dengan arsitektur RAMI 4.0 (Reference Architectural Model Industrie 4.0) melalui protokol komunikasi **OPC UA (Open Platform Communications Unified Architecture)** dan **MQTT**. Data telemetri dari MES menjadi sumber utama untuk memperbarui model *Digital Twin* fisik secara sinkron dengan *latency* $< 100\text{ ms}$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
