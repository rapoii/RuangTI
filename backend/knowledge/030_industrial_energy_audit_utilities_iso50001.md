# Modul Riset Ilmiah: Audit Energi Industri, Manajemen Utilitas Pabrik, & ISO 50001
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- ISO 50001:2018. *Energy management systems — Requirements with guidance for use*. International Organization for Standardization.
- ISO 50002:2014. *Energy audits — Requirements with guidance for use*. International Organization for Standardization.
- Turner, W. C., & Doty, S. (2013). *Energy Management Handbook* (8th ed.). Fairmont Press / CRC Press. ISBN: 978-1466561618.
- Capehart, B. L., Turner, W. C., & Kennedy, W. J. (2020). *Guide to Energy Management* (9th ed.). Fairmont Press.
- Kemp, I. C. (2007). *Pinch Analysis and Process Integration: A User Guide on Process Integration for the Efficient Use of Energy* (2nd ed.). Butterworth-Heinemann.
- Peraturan Menteri ESDM No. 14 Tahun 2012 tentang Pengelolaan Energi (Konservasi Energi Industri Indonesia).

---

## 1. Konsep Dasar Manajemen Energi & Audit Energi

Audit energi adalah evaluasi sistematis terhadap pemanfaatan dan aliran energi di fasilitas industri untuk mengidentifikasi **Peluang Konservasi Energi (*Energy Conservation Opportunities*, ECOs)**, menurunkan biaya utilitas listrik/bahan bakar, dan menekan emisi gas rumah kaca. Tingkat audit bertingkat sesuai ISO 50002:
1. **Preliminary/walk-through audit:** inventarisasi energi, inspeksi visual, identifikasi ECO kasar.
2. **Targeted audit:** pendalaman pada satu subsistem (kompresor, boiler, chiller).
3. **Comprehensive (detailed) audit:** neraca massa-energi lengkap, pengukuran instrumentasi, analisis finansial investasi.

Kerangka manajemen **ISO 50001:2018** mengadopsi siklus PDCA dengan elemen inti: kebijakan energi → review energi → baseline & EnPI → target → aksi → evaluasi kinerja. Di Indonesia, kewajiban pengelolaan energi industri besar diatur Permen ESDM No. 14/2012 (tim pengelola energi, laporan konservasi, target IKE).

### Indikator Kinerja Energi (EnPI)
Intensitas konsumsi energi spesifik (*Specific Energy Consumption*):

$$
SEC = \frac{\text{Total Konsumsi Energi (kWh atau GJ)}}{\text{Total Output Produksi (Ton atau Unit)}}
$$

**Energy Baseline (EnB):** model regresi konsumsi terhadap variabel pendorong (produksi, degree-day) sebagai pembanding performa aktual:

$$
E_t = a + b\cdot P_t + \varepsilon_t
$$

Penyimpangan aktual di bawah baseline menunjukkan penghematan; metode **CUSUM** mengakumulasikannya sepanjang waktu:

$$
CUSUM_t = \sum_{i=1}^{t}\left(E_i - \hat{E}_i\right)
$$

## 2. Formulasi Matematis Neraca Massa-Energi

Hukum pertama termodinamika pada batas sistem utilitas:
$$
\sum E_{\text{Input}} = \sum E_{\text{Useful Work}} + \sum E_{\text{Losses}}
$$

### Efisiensi Boiler (Metode Langsung)
$$
\eta_{boiler} = \frac{Q_s\left(h_s - h_{fw}\right)}{Q_f \times GHV} \times 100\%
$$

dengan $Q_s$ = laju uap, $h_s$/$h_{fw}$ = entalpi uap/air umpan, $GHV$ = nilai kalor bruto bahan bakar. Metode tidak langsung (ASME PTC) menjumlahkan rugi-rugi: gas buang, hydrogen combustion, kelembapan udara, blowdown, radiasi.

### Sistem Udara Bertekanan (Leakage)
Kebocoran diukur saat produksi berhenti:
$$
\%\,\text{Leakage} = \frac{T_{load}}{T_{load} + T_{unload}} \times 100\%
$$
Target kelas dunia: kebocoran $<10\%$. Aturan praktis: setiap 1 kW daya kompresor menghasilkan ±0,1-0,15 m³/menit udara bebas.

### Biaya Listrik Industri (Two-Part Tariff)
$$
C_{listrik} = kWh \times Tarif_E + kW_{max} \times Tarif_D
$$

dengan komponen $Tarif_D$ (demand charge) mendorong manajemen beban puncak (*peak shaving*) dan power factor correction ($\cos\varphi \geq 0{,}92$).

## 3. Metode Solusi / Evaluasi Investasi ECO

1. **Sankey Diagram:** visualisasi aliran energi input-transformasi-output-losses per unit proses untuk melokalisasi kerugian terbesar.
2. **Pinch Analysis:** sintesis jaringan penukar panas (HEN) untuk memulihkan panas antar stream panas-dingin; target minimum utility ditentukan oleh problem table algorithm pada $\Delta T_{min}$ (Kemp, 2007).
3. **Analisis finansial ECO:** simple payback period
$$PP = I_0/\Delta C_{annual}$$
serta NPV dan ROI untuk proyek modal (ganti motor standar dengan premium-efficiency IE3/IE4, VFD pompa/kipas, waste heat recovery).
4. **Motor load survey:** efisiensi motor turun tajam di bawah 50% beban — ukur arus/tegangan, hitung loading, prioritas ganti/resize.
5. **M&V (Measurement & Verification):** verifikasi hemat pasca-implementasi terhadap baseline regresi/CUSUM (prinsip IPMVP).

## 4. Aplikasi di Industrial Engineering

- **Audit boiler & steam system:** trap survey, insulasi pipa uap, recovery condensate (tiap % condensate kembali menurunkan biaya fuel feedwater).
- **Sistem udara bertekanan:** perbaikan leakage network, penurunan set-point tekanan tiap 1 bar menghemat ±7% daya kompresor.
- **HVAC & chiller plant:** optimasi set-point, urutan operasi chiller (chiller sequencing), free-cooling.
- **Lighting retrofit LED + sensor okupansi:** LPD turun sambil memenuhi level lux SNI/ISO 8995.
- **Manajemen energi korporat:** integrasi EnPI dashboard real-time (IoT metering) dengan sistem KPI pabrik dan pelaporan dekarbonisasi Scope 1-2.

## 5. Referensi Terverifikasi

1. ISO 50001:2018. *Energy management systems*. ISO.
2. ISO 50002:2014. *Energy audits — Requirements*. ISO.
3. Turner, W. C., & Doty, S. (2013). *Energy Management Handbook* (8th ed.). CRC Press. ISBN: 978-1466561618.
4. Capehart, B. L., Turner, W. C., & Kennedy, W. J. (2020). *Guide to Energy Management* (9th ed.). Fairmont Press.
5. Kemp, I. C. (2007). *Pinch Analysis and Process Integration* (2nd ed.). Butterworth-Heinemann.
6. Permen ESDM No. 14/2012. *Pengelolaan Energi*. Kementerian ESDM RI.
