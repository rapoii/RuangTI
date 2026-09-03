# 2486 — Model Resiliensi Rantai Dingin Logistik Produk Mudah Rusak (Perishable) dengan Sistem Pemantauan Suhu Real-Time Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk mudah rusak (*perishable products*) yang mencakup produk farmasi, vaksin, makanan segar, dan bioteknologi. Gangguan sekecil apa pun pada suhu penyimpanan — misalnya deviasi 2–8°C untuk vaksin termostabil sesuai standar WHO PQS E001 — dapat memicu degradasi irreversible pada produk, menurunkan potensi farmasi (*potency loss*), atau memicu pembusukan mikrobiologis. Menurut Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), kelemahan mendasar pada cold chain konvensional adalah tidak adanya *feedback loop* real-time untuk merespons anomali suhu secara proaktif. Model resiliensi yang mereka kembangkan mengajukan kerangka kuantitatif untuk mengukur kemampuan sistem pulih dari gangguan (disruptions) melalui tiga pilar: *absorption capacity*, *adaptation capacity*, dan *restoration capacity*.

Konteks empiris yang sangat relevan dipaparkan oleh Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) pada UPTD Farmasi Dinas Kesehatan Kabupaten Siak, Riau. Mereka mendokumentasikan dua permasalahan operasional yang persis menjadi titik lemah resiliensi cold chain: (1) tidak adanya alat pemantau suhu *real-time* pada *cold chain box* yang memberikan peringatan otomatis ketika suhu naik akibat kerusakan internal/eksternal; (2) proses pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada *log sheet* oleh apoteker — yang jelas menciptakan *blind spot* 119 menit antar-pencatatan. Risikonya adalah keterlambatan respons yang memperbesar luas wilayah kerusakan (kerugian kumulatif). Putnam et al. mengkalkulasi bahwa kerugian farmasi global akibat *cold chain failure* melebihi US$ 15 miliar per tahun, di mana 35% di antaranya terjadi di negara berkembang karena infrastruktur monitoring yang usang.

Perspektif industrial engineering melihat cold chain sebagai sistem *socio-technical* yang menggabungkan proses refrigerasi, instrumentasi sensor, protokol operasional manusia, dan jaringan distribusi. Kegagalan satu simpul (*node*) akan merambat sebagai efek domino melalui *cascading failure* (misalnya kerusakan pompa refrigerant → kenaikan suhu ruang → degradasi produk → kerugian finansial → penarikan batch produk dari pasar → krisis reputasi). Karena itu, membangun *resilience* memerlukan integrasi sensor IoT (seperti DS18B20 dengan akurasi ±0,5°C dan resolusi 0,0625°C pada rentang -55°C hingga +125°C), algoritma deteksi anomali, dan protokol respons tangkas yang terukur. Dokumen modul ini akan membahas formulasi matematis model resiliensi tersebut, integrasinya dengan sistem IoT monitoring, serta aplikasi lintas sektor industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indeks Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid & Siddiqui (2024) mendefinisikan *Resilience Index* $R$ sebagai fungsi dari kemampuan absorbsi, adaptasi, dan restorasi terhadap gangguan suhu. Secara matematis:

$$R = \frac{A + Ad + Re}{1 + D}$$

di mana $A$ adalah *absorption capacity* (kemampuan sistem mempertahankan fungsionalitas saat gangguan), $Ad$ adalah *adaptation capacity* (kemampuan menyesuaikan operasi selama gangguan), $Re$ adalah *restoration capacity* (kecepatan pemulihan pascagangguan), dan $D$ adalah *disturbance severity index*. Ketiga kapasitas tersebut dinormalisasi ke rentang $[0, 1]$.

### 2.2 Indeks Kerentanan Termal Produk

Degradasi produk farmasi遵循 kinetika Arrhenius, sehingga laju degradasi $k$ dapat dinyatakan sebagai:

$$k(T) = A_0 \cdot \exp\left(-\frac{E_a}{R_g \cdot T}\right)$$

di mana $A_0$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (J/mol), $R_g$ adalah konstanta gas universal (8,314 J/mol·K), dan $T$ adalah suhu absolut (Kelvin). Untuk vaksin tertentu, parameter tipikal: $A_0 \approx 10^{12}$ hingga $10^{15}$/jam dan $E_a \approx 80$–$110$ kJ/mol.

### 2.3 Mean Kinetic Temperature (MKT)

Haynes (1971, diadopsi oleh USP ⟨1079⟩) mendefinisikan MKT sebagai representasi suhu efektif tunggal yang mengkompensasi efek non-linier fluktuasi suhu:

$$MKT = \frac{\Delta H / R_g}{-\ln\left(\dfrac{\sum_{i=1}^{n} \exp\left(-\dfrac{\Delta H}{R_g \cdot T_i}\right)}{n}\right)}$$

dengan $\Delta H$ adalah entalpi aktivasi (umumnya 83,144 J/mol untuk sampel farmasi), $T_i$ adalah pembacaan suhu ke-$i$ (Kelvin), dan $n$ adalah jumlah pembacaan. MKT menjadi metrik kualitas utama dalam audit cold chain farmasi.

### 2.4 Model Resiliensi Triangular (Tierney & Bruneau, 2007; diadaptasi oleh Khurshid & Siddiqui)

Luas wilayah kehilangan kualitas (*quality loss function area*) dideklarasikan sebagai:

$$QL = \int_{t_0}^{t_1} [Q_{\text{nominal}} - Q(t)] \, dt$$

di mana $Q(t)$ adalah fungsi kualitas sesaat dan $Q_{\text{nominal}}$ adalah kualitas referensi. Semakin kecil $QL$, semakin tinggi resiliensi sistem.

### 2.5 Model Akurasi Sensor DS18B20 (Putra et al., 2024)

Sensor DS18B20 memiliki akurasi intrinsik $\pm 0{,}5°C$ pada rentang $-10°C$ hingga $+85°C$. Resolusi konversi 12-bit ADC adalah:

$$\Delta T_{\text{res}} = \frac{T_{\max} - T_{\min}}{2^{12}} = \frac{125 - (-55)}{4096} \approx 0{,}0439°C$$

Nilai ini memenuhi syarat presisi untuk monitoring cold chain farmasi sesuai WHO PQS E006/VVM.

### 2.6 Metodologi Analitis

Khurshid & Siddiqui (2024) mengusulkan kerangka 4-tahap: (1) *System Mapping* dengan pendekatan *Failure Mode and Effects Analysis* (FMEA); (2) Quantifikasi parameter menggunakan Monte Carlo Simulation; (3) Optimisasi multi-objektif dengan *Goal Programming*; (4) Validasi melalui *scenario-based stress testing*. Sementara Putra et al. (2024) melengkapi dengan eksperimentasi desain sensor DS18B20 yang diintegrasikan mikrokontroler ESP32 dengan protokol 1-Wire, transmisi MQTT ke *cloud server*, dan dashboard monitoring real-time.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Cold Chain IoT

Berdasarkan Putra et al. (2024), arsitektur sistem terdiri atas empat lapisan:

**Lapisan 1 — Akuisisi Data (Field Level):** Sensor DS18B20 dipasang pada tiga titik kritis *cold chain box* (dekat evaporator, tengah ruang, dekat pintu). Data suhu dibaca setiap 5 detik dan dirata-ratakan setiap 60 detik untuk mengurangi *white noise*.

**Lapisan 2 — Pemrosesan Lokal (Edge Level):** Mikrokontroler ESP32 menjalankan algoritma *Sliding Window Anomaly Detection* dengan logika:

$$\text{Jika } |T_t - \mu_{w}| > 2{,}5 \cdot \sigma_{w} \Rightarrow \text{Trigger Alert}$$

di mana $\mu_w$ dan $\sigma_w$ adalah rata-rata dan standar deviasi dalam jendela $w = 30$ menit.

**Lapisan 3 — Transmisi (Network Level):** Protokol MQTT (Message Queuing Telemetry Transport) digunakan dengan topik terstruktur: `coldchain/facility/{id}/temp/{timestamp}`. QoS level 2 menjamin *exactly-once delivery*.

**Lapisan 4 — Dashboard & Respon (Application Level):** Dashboard berbasis web menampilkan *real-time temperature curve*, *heatmap* MKT 24 jam, dan tombol peringatan otomatis ke apoteker via *push notification*.

### 3.2 SOP Penanganan Anomali Suhu (berdasarkan Khurshid & Siddiqui, 2024)

1. **Deteksi Otomatis** (T+0): Sensor DS18B20 mendeteksi deviasi >0,5°C dari setpoint selama ≥3 menit berturut-turut.
2. **Verifikasi** (T+1–3 menit): Operator mengkonfirmasi kegagalan via dashboard dan *log incident*.
3. **Respons Darurat** (T+3–15 menit):
   - Pindahkan produk ke *backup cold chain* (jika suhu >8°C untuk vaksin)
   - Aktifkan *generator backup* atau pindah ke dry ice container
   - Notifikasi *quality assurance officer* dan *supply chain manager*
4. **Dokumentasi** (T+15–30 menit): Catat MKT kumulatif, kalkulasi $QL$, dan putuskan status batch (*release*, *quarantine*, atau *reject*) menggunakan aturan MKT >8°C → reject.
5. **Restorasi** (T+30 menit – 24 jam): Perbaikan infrastruktur, validasi ulang dengan kalibrasi *traceable* ke standar nasional (SNI ISO 17025).
6. **Post-Mortem & CAPA**: Analisis akar masalah (5-Why atau Ishikawa) dan implementasikan *Corrective Action Preventive Action*.

### 3.3 Diagram Alir Proses Cold Chain Resilience

```
[Start] → [Pre-Conditioning Sensor] → [Data Acquisition (DS18B20)]
   ↓
[Sliding Window Calculation] → Hitung μ_w, σ_w, MKT
   ↓
Cek: |T - T_setpoint| ≤ 0.5°C?
   ├─ Ya → [Normal Operation] → Logging setiap 2 jam
   └─ Tidak → [Alert Trigger] → Notifikasi Operator (T+0)
        ↓
     [Incident Verification] → [Emergency Response]
        ↓
     Hitung QL = ∫(Q_nominal - Q(t)) dt
        ↓
     [Decision: Release/Quarantine/Reject]
        ↓
     [Restoration + CAPA] → [Audit & Reporting] → [End]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Distribusi Vaksin COVID-19 di Kabupaten Siak

Mengacu pada studi Putra et al. (2024), UPTD Farmasi Kabupaten Siak mengelola 12 unit *cold chain box* berkapasitas 50 L untuk melayani 14 puskesmas. Asumsikan satu insiden suhu pada tanggal tertentu.

**Parameter Input:**
- Suhu *setpoint* $T_{sp} = 5°C$ (rentang target 2–8°C)
- Suhu aktual selama insiden $T_{act} = 12°C$ selama durasi $t_d = 4$ jam
- Energi aktivasi vaksin mRNA $E_a = 90{,}000$ J/mol
- $R_g = 8{,}314$ J/mol·K
- $A_0 = 10^{13}$/jam
- Volume batch $V = 50$ L berisi 1.000 dosis @ Rp 250.000/dosis

### 4.2 Perhitungan Laju Degradasi

Pada $T_{sp} = 278{,}15$ K:
$$k_{sp} = 10^{13} \cdot \exp\left(-\frac{90.000}{8{,}314 \cdot 278{,}15}\right) = 10^{13} \cdot \exp(-38{,}93) \approx 1{,}51 \times 10^{-4} \text{/jam}$$

Pada $T_{act} = 285{,}15$ K:
$$k_{act} = 10^{13} \cdot \exp\left(-\frac{90.000}{8{,}314 \cdot 285{,}15}\right) = 10^{13} \cdot \exp(-37{,}99) \approx 3{,}46 \times 10^{-4} \text{/jam}$$

**Rasio akselerasi degradasi:**
$$\frac{k_{act}}{k_{sp}} = \frac{3{,}46 \times 10^{-4}}{1{,}51 \times 10^{-4}} \approx 2{,}29