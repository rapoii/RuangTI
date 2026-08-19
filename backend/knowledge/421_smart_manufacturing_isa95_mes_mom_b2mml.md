# Modul 421: Arsitektur Otomasi Industri & Integrasi Perusahaan (ANSI/ISA-95 Level 0–4), Manufacturing Execution System (MES), Standar B2MML, dan OEE Real-Time

## 1. Domain Profesi & Ruang Lingkup
Profesi **Manufacturing IT / OT-IT Integration Architect & Smart Factory Systems Engineer** bertugas menghubungkan dunia operasional lantai pabrik (*Operational Technology* - OT: PLC, SCADA, Sensor IoT) dengan dunia sistem informasi bisnis perusahaan (*Information Technology* - IT: MES, ERP, WMS).

---

## 2. Model Hierarki Arsitektur ANSI/ISA-95 (Purdue Enterprise Reference Architecture)

```
[LEVEL 4: Business Planning & Logistics (ERP / SAP / SCM)]
   |  - Manajemen Pesanan Penjualan, Keuangan, Master Data Produk, MRP
   |  <=== Standar Pertukaran Data: B2MML XML / REST API ===>
[LEVEL 3: Manufacturing Operations Management (MES / MOM / LIMS)]
   |  - Work Order Dispatching, Pelacakan Batch, Genealogy Part, OEE Tracking
   |  <=== Protokol Industri: OPC-UA, MQTT Sparkplug B ===>
[LEVEL 2: Supervisory Control & Data Acquisition (SCADA / HMI)]
   |  - Pengawasan visual lini produksi, alarm monitoring, recipe management
[LEVEL 1: Sensing & Manipulating (PLC / DCS / RTU / Drive)]
   |  - Logika ladder instruksi mesin, servo motor, pneumatik
[LEVEL 0: The Physical Process (Sensors & Actuators)]
      - Sensor fotoelektrik, limit switch, thermocouple, load cell, motor listrik
```

---

## 3. 11 Fungsi Inti Manufacturing Execution System (MESA-11 Framework)

1. **Resource Allocation and Status**: Pelacakan kesiapan mesin, fixture, cetakan, dan sertifikasi operator.
2. **Operations/Detail Scheduling**: Penjadwalan urutan work order dinamis berbasis keterbatasan riil.
3. **Dispatching Production Units**: Pelepasan instruksi kerja elektronik (*e-Work Order*) ke layar stasiun kerja.
4. **Document Control**: Distribusi gambar kerja teknik GD&T dan instruksi kerja SOP versi terkini.
5. **Data Collection/Acquisition**: Perekaman otomatis parameter proses (tekanan, suhu, kecepatan spindle).
6. **Labor Management**: Pencatatan jam kerja operator per batch (*Direct Labor Tracking*).
7. **Quality Management**: Integrasi input data SPC real-time dan isolasi batch cacat (*Hold/Quarantine*).
8. **Process Management**: Pemantauan aliran WIP antar stasiun kerja.
9. **Maintenance Management**: Pemicuan otomatis *Work Order Maintenance* jika sensor mendeteksi vibrasi abnormal.
10. **Product Tracking and Genealogy**: Silsilah lengkap asal bahan baku, nomor lot supplier, dan riwayat mesin (*Traceability*).
11. **Performance Analysis**: Perhitungan OEE, OPE, scrap rate, dan waktu siklus secara otomatis detik-demi-detik.

---

## 4. Standar Pertukaran Data B2MML (Business to Manufacturing Markup Language)

B2MML adalah implementasi skema XML dari model data ANSI/ISA-95 untuk pertukaran transaksi antara ERP (Level 4) dan MES (Level 3):

```xml
<ProductionSchedule xmlns="http://www.wbf.org/xml/B2MML-V0600">
  <ID>SCHED_2026_08_19_LINE1</ID>
  <PublishedDate>2026-08-19T08:00:00Z</PublishedDate>
  <ProductionRequest>
    <ID>WO_VALVE_DN50_BATCH101</ID>
    <ProductProductionRuleID>BOM_VALVE_ASSY_REV3</ProductProductionRuleID>
    <SegmentRequirement>
      <ProcessSegmentID>MACHINING_OP10</ProcessSegmentID>
      <Quantity>
        <QuantityString>500</QuantityString>
        <UnitOfMeasure>EA</UnitOfMeasure>
      </Quantity>
    </SegmentRequirement>
  </ProductionRequest>
</ProductionSchedule>
```

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- International Society of Automation. (2018). *ANSI/ISA-95.00.01-2018 (IEC 62264-1 Mod): Enterprise-Control System Integration — Part 1: Models and Terminology*. Research Triangle Park: ISA.
- Scholten, B. (2007). *The Road to Integration: A Guide to Applying the ISA-95 Standard in Manufacturing*. ISA.
- Matisková, D., & Hrehová, S. (2026). *Automation, SCADA systems, and MES architecture in modern industrial engineering*. In *Automation and Control in Theory and Practice* (pp. 312-328). Springer.
- Rosa, G. J., & Loureiro, G. (2023). *Advanced product quality planning and MES integration in low-volume high-complexity manufacturing*. IEEE Transactions on Engineering Management, 71, 890-905.
