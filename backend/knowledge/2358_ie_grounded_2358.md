# 2358 — Model Ketahanan (Resilience) Rantai Dingin untuk Produk Mudah Rusak (Perishable Products) dalam Rantai Pasok Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, biofarmaka, makanan laut, produk hortikultura, dan bahan kimia dengan kemurnian tinggi. Gangguan terhadap integritas termal rantai dingin—baik berupa *excursion* suhu (penyimpangan), kegagalan refrigerasi, maupun jeda logistik—mengakibatkan degradasi mutu irreversibel yang secara langsung berdampak pada keselamatan publik dan profitabilitas korporasi. Khurshid & Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menekankan bahwa kapasitas sistem rantai dingin untuk *menyerap (absorb), beradaptasi (adapt), dan pulih (recover)* dari gangguan menjadi metrik rekayasa yang menentukan keberlanjutan operasional, bukan sekadar sekadar mempertahankan suhu target.

Konteks empiris yang memperkuat urgensi ini dilaporkan oleh Putra, Defit, & Nurcahyo (2024) di UPTD Farmasi Dinas Kesehatan Kabupaten Siak, Indonesia (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Mereka mengidentifikasi dua *failure mode* dominan dalam operasional *cold chain box* vaksin: (i) ketiadaan sistem pemantauan suhu *real-time* sehingga apoteker tidak mendapat peringatan dini ketika suhu naik akibat kerusakan internal/eksternal kompresor, dan (ii) pencatatan suhu manual setiap 2 jam pada *log sheet* yang rentan *human error*, keterlambatan respons, serta kehilangan jejak audit. Kedua kondisi ini mengekspos produk farmasi bernilai miliaran rupiah terhadap risiko *thermal shock* dan degradasi antigen. Secara global, WHO memperkirakan lebih dari 50% vaksin kehilangan potensi sebelum digunakan akibat pelanggaran rantai dingin, dengan kerugian ekonomi agregat industri makanan dingin melebihi USD 35 miliar per tahun.

Ditinjau dari perspektif Teknik Industri, fenomena ini memerlukan pendekatan **systems engineering** yang memodelkan interdependensi antara variabel termodinamika, keandalan peralatan, *human factor*, dan kebijakan distribusi. Urgensi keilmuan Module 2358 ini terletak pada kebutuhan akan *framework* kuantitatif yang mengintegrasikan *reliability engineering* (probabilitas kegagalan), *quality degradation kinetics* (kinetika degradasi mutu), dan *IoT-enabled monitoring* untuk menghasilkan ukuran *resilience* yang terukur dan dapat dioptimasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Kinetik Arrhenius

Laju degradasi mutu produk perishable terhadap suhu mengikuti persamaan Arrhenius yang diadopsi dari Khurshid & Siddiqui (2024):

$$k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$$

di mana $k(T)$ adalah laju degradasi (satuan waktu$^{-1}$), $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi (J/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), dan $T$ adalah suhu absolut (K). Kualitas残存 (*remaining quality*) setelah waktu $t$ pada suhu $T$ diberikan oleh:

$$Q(t,T) = Q_0 \cdot e^{-k(T) \cdot t}$$

### 2.2 Fungsi Keandalan dan Resilience Index

Keandalan komponen refrigerasi dimodelkan dengan distribusi eksponensial:

$$R(t) = e^{-\lambda t}$$

dengan $\lambda$ adalah *failure rate* (jam$^{-1}$). Khurshid & Siddiqui (2024) mendefinisikan **Resilience Index** sebagai kemampuan sistem mempertahankan fungsinya selama dan setelah gangguan:

$$\Phi = \frac{1}{t_r - t_d} \int_{t_d}^{t_r} R_{\text{eff}}(t) \, dt$$

di mana $t_d$ adalah waktu deteksi gangguan, $t_r$ adalah waktu pemulihan total (*recovery time*), dan $R_{\text{eff}}(t)$ adalah keandalan efektif yang memperhitungkan kapasitas cadangan sistem.

### 2.3 Biaya Total Kegagalan Cold Chain

$$C_{\text{total}} = C_p + C_w + C_r + \lambda_s \cdot V_{\text{loss}}$$

dengan $C_p$ = biaya penalti regulasi, $C_w$ = biaya pembuangan produk rusak, $C_r$ = biaya pemulihan sistem, $\lambda_s$ = *spoilage coefficient*, dan $V_{\text{loss}}$ = volume produk yang hilang.

### 2.4 Akurasi Sensor IoT (DS18B20)

Putra et al. (2024) menggunakan sensor DS18B20 dengan akurasi $\pm 0{,}5^\circ$C pada rentang $-10^\circ$C sampai $+85^\circ$C. Total *uncertainty* pengukuran menurut prinsip *root sum square*:

$$\sigma_{\text{total}} = \sqrt{\sigma_{\text{sensor}}^2 + \sigma_{\text{kalibrasi}}^2 + \sigma_{\text{lingkungan}}^2}$$

### 2.5 Network Resilience (Top-of-Pyramid)

Untuk jaringan rantai dingin multi-Node, *resilience* jaringan dihitung dengan:

$$\Phi_{\text{network}} = \prod_{i=1}^{n} \Phi_i^{w_i}$$

dengan $w_i$ adalah bobot kepentingan node $i$ dan $n$ adalah jumlah node kritis.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT (berdasarkan Putra et al., 2024)

```
[Sensor DS18B20] → [Mikrokontroler ESP32] → [Wi-Fi Gateway] → [Cloud Database] → [Dashboard Monitoring]
       ↓                    ↓                      ↓                ↓                    ↓
   Pembacaan         Akuisisi Data          Transmisi MQTT      Logging & Alarm     Visualisasi &
   Suhu Digital      & Time-Stamp           (≤ 5 detik)         (Threshold 2–8°C)   Notifikasi SMS
```

### 3.2 Diagram Alir SOP Cold Chain Resilience

```
START
  │
  ▼
[Inisialisasi: Kalibrasi Sensor, Validasi Cloud Connection]
  │
  ▼
[Loop Pembacaan: Setiap Δt = 60 detik]
  │
  ▼
{Decision: T ∈ [T_min, T_max]?}
  ├── YES → Log normal → Kembali ke Loop
  └── NO  → Trigger ALARM → Hitung k(T_aktual)
              │
              ▼
         [Hitung Q(t) → Apakah Q < Q_kritis?]
              ├── NO → Aktifkan rencana adaptif (backup refrigeration)
              └── YES → Karantina produk → Notifikasi regulator → Recovery Procedure
```

### 3.3 Tahapan Implementasi Sistematis

1. **Risk Assessment Awal**: Identifikasi node kritis (vaccine storage, *in-transit* cold box, distribution vehicle) dan *failure mode* menggunakan FMEA.
2. **Desain Jaringan Sensor**: Penempatan sensor mengikuti *stratified sampling* dengan densitas 1 sensor per 5–10 m³ volume.
3. **Kalibrasi & Validasi**: Setiap sensor DS18B20 dikalibrasi terhadap *reference thermometer* bersertifikat (NIST traceable) dengan metoda *linear regression*.
4. **Penetapan Threshold Dinamis**: Berdasarkan $k(T)$ dan $t_{\text{max}}$, hitung suhu kritis $T_{\text{kritis}}$ yang menjamin $Q(t_{\text{max}}) \geq Q_{\text{standar}}$.
5. **Pengujian Resilience**: Simulasi *excursion* suhu terkontrol (skenario 2°C, 8°C, 12°C, 25°C selama durasi 1–8 jam) dan ukur $\Phi$.
6. **Continuous Improvement**: Implementasi *Plan-Do-Check-Act* (PDCA) berbasis data telemetri.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Distribusi Vaksin COVID-19 dari UPTD Farmasi ke 12 Puskesmas

**Parameter Input:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Volume cold box | 50 | liter |
| Kapasitas muatan | 1.500 | vial |
| Suhu target $T_0$ | 4 | °C |
| Energi aktivasi $E_a$ | 80.000 | J/mol |
| Faktor pre-eksponensial $A$ | $2{,}5 \times 10^{20}$ | jam$^{-1}$ |
| Failure rate kompresor $\lambda$ | $5{,}7 \times 10^{-4}$ | jam$^{-1}$ |
| Biaya vial $C_v$ | Rp 75.000 | /vial |
| Biaya alarm & recovery | Rp 2.500.000 | /insiden |

### 4.2 Perhitungan Laju Degradasi pada Suhu Target

$$k(4°C) = k(277{,}15\text{ K}) = 2{,}5 \times 10^{20} \cdot e^{-\frac{80.000}{8{,}314 \times 277{,}15}}$$

$$= 2{,}5 \times 10^{20} \cdot e^{-34{,}70} = 2{,}5 \times 10^{20} \times 9{,}11 \times 10^{-16}$$

$$k(4°C) \approx 2{,}28 \times 10^{5} \text{ jam}^{-1}$$

Tunggu, koreksi: ini nilai yang terlalu besar. Mari gunakan parameter vaccine realistis: $A = 2{,}5 \times 10^{10}$ dan $E_a = 65$ kJ/mol.

$$k(4°C) = 2{,}5 \times 10^{10} \cdot e^{-\frac{65.000}{8{,}314 \times 277{,}15}} = 2{,}5 \times 10^{10} \cdot e^{-28{,}19}$$

$$= 2{,}5 \times 10^{10} \times 5{,}27 \times 10^{-13} = 1{,}32 \times 10^{-2} \text{ jam}^{-1}$$

### 4.3 Simulasi *Temperature Excursion* 8 Jam pada Suhu 12°C

$$k(12°C) = k(285{,}15\text{ K}) = 2{,}5 \times 10^{10} \cdot e^{-\frac{65.000}{8{,}314 \times 285{,}15}}$$

$$= 2{,}5 \times 10^{10} \cdot e^{-27{,}42} = 2{,}5 \times 10^{10} \times 1{,}30 \times 10^{-12}$$

$$k(12°C) \approx 3{,}25 \times 10^{-2} \text{ jam}^{-1}$$

Kualitas残存 setelah 8 jam:

$$Q(8) = Q_0 \cdot e^{-0{,}0325 \times 8} = Q_0 \cdot e^{-0{,}26} = 0{,}771 \cdot Q_0$$

Artinya, **22,9% potensi vaksin hilang** setelah paparan 8 jam pada 12°C.

### 4.4 Perhitungan Resilience Index dengan Sensor IoT

Jika sensor IoT Putra et al. (2024) mendeteksi *excursion* dalam waktu $t_d = 60$ detik dan recovery tercapai dalam $t_r = 30$ menit = 0,5 jam:

$$\Phi = \frac{1}{0{,}5 - 0{,}0167} \int_{0{,}0167}^{0{,}5} e^{-0{,}0325 t} \, dt$$

$$= \frac{1}{0{,}483} \cdot \left[ \frac{-1}{0{,}0325} e^{-0{,}0325 t} \right]_{0{,}0167}^{0{,}5}$$

$$= \frac{