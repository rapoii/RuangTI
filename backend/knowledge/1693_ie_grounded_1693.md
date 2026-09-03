# 1693 — Analisis Perilaku dan Karakterisasi *Scaling* Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (*High-Pressure Acid Leaching*)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan nikel laterit skala global menghadapi tantangan operasional yang semakin kompleks seiring meningkatnya permintaan baterai kendaraan listrik (*electric vehicle*/EV) dan baja nirkarat (*stainless steel*). Proses *High-Pressure Acid Leaching* (HPAL) merupakan teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit kadar rendah (*low-grade saprolite* dan *limonite*), karena proses ini mampu mencapai tingkat *recovery* Ni hingga 90–95% dan Co hingga 80–90%. Namun, keberhasilan HPAL sangat bergantung pada kinerja reaktor autoclave multi-kompartemen yang beroperasi pada suhu 240–270 °C dan tekanan 30–55 bar dengan asam sulfat berkonsentrasi 200–400 g/L H₂SO₄ (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Salah satu masalah kritis yang menghambat keberlanjutan operasional HPAL adalah fenomena *autoclave scaling* — terbentuknya lapisan kerak padat pada dinding dalam, agitator, dan pipa pemanas autoclave. Kerak ini terutama tersusun atas gipsum (CaSO₄·2H₂O), hematit (Fe₂O₃), alunit/aluminium hidroksulfat, dan *basic iron sulfate* (FeOH(SO₄)·nH₂O). Dampaknya sangat signifikan secara industri: (1) koefisien perpindahan panas dinding (*overall heat transfer coefficient*, U) turun drastis sehingga konsumsi uap (*steam*) naik 15–30%; (2) volume efektif reaktor berkurang 5–12% per siklus produksi; (3) jadwal *shut-down* untuk *acid washing* dan *mechanical descaling* meningkat menjadi 4–8 kali per tahun, menurunkan *plant availability* di bawah 85% (Andrameda dkk., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Secara ekonomi, biaya *scaling* diestimasikan menyumbang 8–14% dari total *operating cost* pabrik HPAL, dengan implikasi langsung pada harga pokok produksi (*cash cost*) nikel. Bagi Indonesia — yang memiliki cadangan laterit lebih dari 21 juta ton nikel dan menjadi pusat HPAL dunia melalui proyek Halmahera, Morowali, dan Huidong — pengendalian *scaling* adalah *strategic operational priority*. Oleh karena itu, karakterisasi perilaku *scaling* dan pengembangan protokol mitigasi berbasis rekayasa proses menjadi agenda riset dan implementasi yang sangat relevan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Termodinamika dan Kinetika Pembentukan Kerak

Pembentukan kerak dalam autoclave HPAL dipengaruhi oleh *retrograde solubility* — kelarutan yang menurun dengan naiknya suhu — terutama untuk gipsum dan *basic iron sulfate*. Kinetika pertumbuhan kerak dapat dimodelkan menggunakan persamaan *Arrhenius-type nucleation-growth*:

$$r(t) = r_\infty \left(1 - e^{-k_g t}\right)$$

di mana $r(t)$ adalah ketebalan kerak (mm) pada waktu $t$ (jam), $r_\infty$ adalah ketebalan kerak kesetimbangan (mm), dan $k_g$ adalah konstanta laju pertumbuhan yang bergantung suhu:

$$k_g = A \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ adalah energi aktivasi (kJ/mol), $R = 8{,}314$ J/(mol·K), dan $T$ adalah suhu absolut (K). Untuk gipsum, $E_a \approx 35$–50 kJ/mol, sedangkan untuk hematit $E_a \approx 60$–80 kJ/mol (Dickson dkk., 2026).

### 2.2 Model Perpindahan Panas pada Dinding Berlapis Kerak

Efek *scaling* terhadap perpindahan panas dimodelkan dengan resistansi termal seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{x_s}{k_s} + \frac{x_w}{k_w} + \frac{1}{h_o}$$

di mana:
- $U$ = koefisien perpindahan panas menyeluruh (W/m²·K)
- $h_i$ = koefisien konveksi internal (W/m²·K), tipikal 2.000–5.000
- $h_o$ = koefisien konveksi eksternal uap (W/m²·K), tipikal 8.000–12.000
- $x_s$, $x_w$ = tebal kerak dan tebal dinding baja (m)
- $k_s$ = konduktivitas termal kerak (W/m·K); untuk gipsum $k_s \approx 0{,}5$; untuk hematit $k_s \approx 2{,}0$
- $k_w$ = konduktivitas termal baja autoclave ($\approx 16$ W/m·K)

Kebutuhan uap untuk mempertahankan suhu proses menjadi:

$$Q = U \cdot A \cdot \Delta T_{LMTD}$$

dengan $A$ = luas permukaan perpindahan panas (m²) dan $\Delta T_{LMTD}$ = *log mean temperature difference* (°C).

### 2.3 Neraca Massa Skala Komponen

Untuk komponen kerak dominan (misalnya Fe sebagai Fe₂O₃), laju akumulasi kerak mengikuti:

$$\frac{dm_{Fe,s}}{dt} = Q_{slurry} \cdot C_{Fe,in} \cdot \eta_{dep} - Q_{slurry} \cdot C_{Fe,out} - r_{diss}$$

di mana $\eta_{dep}$ adalah fraksi Fe yang terdeposisi sebagai kerak (0,05–0,15 dalam operasi tipikal), dan $r_{diss}$ adalah laju pelarutan kembali oleh *acid washing*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses Pengendalian *Scaling*

Implementasi sistematis pengendalian *scaling* mengikuti alur rekayasa berikut:

```
[Bijih Laterit + Asam Sulfat]
        ↓
[Pre-heater (1-2 bar)]
        ↓
[Autoclave Kompartemen 1 (T=240°C)]
        ↓
[Autoclave Kompartemen 2 (T=255°C)]
        ↓
[Autoclave Kompartemen 3 (T=265°C)]
        ↓
[Flash Cooler]
        ↓
[Counter-Current Decantation]
        ↓
[Neutralisation & CCD Thickener]
        ↓
[MSP / NiS Precipitation]

      ┌──────────────────────────────┐
      │  Pemantauan & Mitigasi       │
      │ • Sampling kerak mingguan    │
      │ • Acid wash terjadwal        │
      │ • Aditif anti-scaling        │
      │ • Pengendalian T & pH        │
      └──────────────────────────────┘
```

### 3.2 SOP Pengendalian *Scaling* Berbasis Risiko

Berdasarkan Dickson dkk. (2026) dan Andrameda dkk. (2024), prosedur operasional standar meliputi:

**Tahap Pra-Operasi (Commissioning):**
1. *Pickling* dengan asam sulfat 10–15% pada 60 °C selama 6–8 jam untuk menghilangkan *mill scale* dan kontaminan.
2. *Passivation* kimia untuk membentuk lapisan protektif Fe₃O₄ tipis pada dinding baja tahan karat 904L/Alloy 825.

**Tahap Operasi Kontinu:**
1. Pengendalian suhu setiap kompartemen dalam ±3 °C dari *set-point* untuk menghindari gradien termal berlebih.
2. Pengaturan konsentrasi asam sulfat masuk (*free acid*) 30–50 g/L H₂SO₄.
3. Pemantauan *online* tekanan diferensial antar kompartemen (ΔP > 0,8 bar mengindikasikan penumpukan kerak signifikan).
4. Penambahan *additive* (misalnya *lignosulfonate* atau *polyacrylate*) 50–200 ppm untuk mengendapkan skala dalam bentuk slurry yang lebih mudah dibuang.

**Tahap *Acid Washing* (Siklus 30–60 hari):**
1. Penghentian feed slurry.
2. Sirkulasi asam sulfat 5–8% pada 90–95 °C selama 4–6 jam.
3. Pembilasan dengan air proses, netralisasi dengan kapur, dan pembuangan ke *neutralisation pond*.
4. Inspeksi visual dan pengukuran ketebalan kerak menggunakan *ultrasonic thickness gauge* (UTG).

### 3.3 Standar dan Regulasi

Referensi standar yang digunakan dalam perancangan dan operasional:
- **ASME BPVC Section VIII** — perancangan bejana tekan autoclave.
- **ASTM A240/A240M** — spesifikasi baja tahan karat duplex untuk lingkungan asam sulfat.
- **ISO 9001 & ISO 14001** — manajemen mutu dan lingkungan.
- **PerMen ESDM dan PerPres 55/2019** — terkait pengelolaan limbah B3 dari proses netralisasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Operasional Pabrik HPAL Tipikal (Kapasitas 30.000 t Ni/bulan)

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Throughput bijih | 1.000 | t/jam |
| Konsentrasi solids slurry | 45 | % w/w |
| Suhu