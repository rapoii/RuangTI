# 2150 — Model Resiliensi Cold Chain untuk Produk Mudah Rusak dengan Pemantauan Suhu IoT Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok produk biofarmasi, vaksin, produk darah, makanan segar, dan bioteknologi modern yang memiliki sifat *time-temperature sensitive* (TTS). Khurshid dan Siddiqui (2024) dalam artikelnya *A Resilience Model for Cold Chain Logistics of Perishable Products* ([DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menegaskan bahwa gangguan sekecil apa pun pada integritas termal—baik berupa deviasi suhu naik di atas ambang (*upper excursion*) maupun turun di bawah titik beku (*freezing excursion*)—dapat menurunkan mutu produk secara irreversibel. Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa lebih dari 50% vaksin terbuang sia-sia secara global akibat pelanggaran rantai dingin, terutama di negara berkembang dengan infrastruktur listrik yang tidak stabil dan prosedur manual yang rentan human error.

Di sisi hilir, Putra, Defit, dan Nurcahyo (2024) dalam *Jurnal KomtekInfo* ([DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) memaparkan studi kasus empiris di UPTD Farmasi, Dinas Kesehatan Kabupaten Siak, Riau. Mereka mengidentifikasi dua masalah struktural: (i) cold chain box sebagai media penyimpanan疫苗 tidak dilengkapi alat pemantauan suhu *real-time*, sehingga apoteker tidak memperoleh peringatan dini ketika suhu naik akibat kerusakan internal (misalnya kompresor) maupun eksternal (paparan matahari berkepanjangan); dan (ii) pencatatan suhu dilakukan secara manual setiap 2 jam sekali pada *log sheet*, yang menimbulkan *latency* deteksi rata-rata 60–120 menit. Kombinasi kedua kelemahan ini secara langsung menurunkan *resilience* sistem cold chain—yakni kemampuan sistem untuk menyerap, beradaptasi, dan pulih dari gangguan.

Konteks industri ini semakin relevan karena investasi biofarmasi global untuk cold chain diproyeksikan mencapai USD 287,3 miliar pada 2028 (CAGR 9,4%). Dalam kerangka *Industry 4.0*, integrasi sensor *Internet of Things* (IoT), komputasi awan, dan algoritma resiliensi menjadi pilar strategis bagi insinyur industri untuk menjawab pertanyaan manajerial: berapa probabilitas sistem mengalami degradasi mutu dalam periode tertentu, berapa lama waktu pemulihan, dan bagaimana trade-off antara biaya investasi sensor dengan kerugian akibat produk rusak. Modul 2150 ini menyajikan sintesis model resiliensi Khurshid–Siddiqui dan arsitektur IoT monitoring Putra dkk. sebagai kerangka rekayasa terpadu.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid dan Siddiqui ([DOI: 10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) memformulasikan resiliensi sebagai fungsi integral area di bawah kurva kinerja sistem selama siklus ganggu-pulih (*resilience triangle*):

$$R(t) = \frac{\int_{t_{d}}^{t_{r}} Q(t)\, dt}{(t_{r} - t_{d}) \cdot Q_{0}}$$

di mana:
- $Q(t)$ = kualitas termal sistem pada waktu $t$ (diukur sebagai deviasi suhu terhadap setpoint $T_{set}$),
- $Q_{0}$ = kualitas nominal sebelum gangguan ($Q_{0} = 1$ untuk kondisi ideal),
- $t_{d}$ = waktu dimulainya gangguan (*disruption onset*),
- $t_{r}$ = waktu sistem pulih sepenuhnya (*full recovery*).

Nilai $R \in [0,1]$, dengan $R=1$ menunjukkan resiliensi sempurna (sistem tidak terdegradasi).

### 2.2 Model Markov Diskret untuk Transisi Status Cold Chain

Status termal cold chain dimodelkan sebagai empat state dalam rantai Markov waktu-diskret $\{S_{0}, S_{1}, S_{2}, S_{3}\}$:

$$S = \{S_{0}: \text{Normal},\; S_{1}: \text{Warning},\; S_{2}: \text{Excursion},\; S_{3}: \text{Critical/Failure}\}$$

Matriks transisi satu-langkah adalah:

$$P = \begin{bmatrix} p_{00} & p_{01} & p_{02} & p_{03} \\ p_{10} & p_{11} & p_{12} & p_{13} \\ p_{20} & p_{21} & p_{22} & p_{23} \\ p_{30} & p_{31} & p_{32} & p_{33} \end{bmatrix}, \quad \sum_{j} p_{ij} = 1$$

Probabilitas absorpsi di state $S_{3}$ setelah $n$ langkah dihitung sebagai:

$$\pi_{n} = \pi_{0} \cdot P^{n}$$

### 2.3 Model Sensor DS18B20 dan Akurasi Pengukuran

Sensor DS18B20 yang digunakan Putra dkk. (2024) ([DOI: 10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) memiliki karakteristik:

$$T_{\text{measured}} = T_{\text{true}} + \varepsilon, \quad \varepsilon \sim \mathcal{N}(0, \sigma^{2})$$

dengan akurasi $\pm 0,5^{\circ}\text{C}$ pada rentang $-10^{\circ}\text{C}$ hingga $+85^{\circ}\text{C}$ dan resolusi 12-bit (resolusi termal $0,0625^{\circ}\text{C}$). Waktu konversi pada resolusi tertinggi:

$$t_{\text{conv}} = \frac{12 \text{ bit}}{750 \text{ ms}} \approx 0,75 \text{ s}$$

### 2.4 Logika Ambang Batas dan Alert Generation

Untuk aplikasi vaksin (sesuai WHO PQS E006 dan Permenkes RI No. 12/2017), alert didefinisikan sebagai:

$$A(t) = \begin{cases} 0 & \text{jika } 2^{\circ}\text{C} \leq T(t) \leq 8^{\circ}\text{C} \\ 1 & \text{jika } T(t) < 2^{\circ}\text{C atau } T(t) > 8^{\circ}\text{C} \\ 2 & \text{jika } T(t) < 0^{\circ}\text{C atau } T(t) > 10^{\circ}\text{C} \end{cases}$$

di mana $A=0$ (normal), $A=1$ (warning), dan $A=2$ (critical/escalasi ke supervisor).

### 2.5 Fungsi Biaya Total Resiliensi

Fungsi objektif optimasi biaya multi-komponen:

$$\min_{x} \; Z = C_{\text{sensor}} \cdot N_{s} + C_{\text{logistik}} \cdot D + C_{\text{loss}} \cdot P_{\text{fail}}$$

dengan kendala probabilitas kegagal-an:

$$P_{\text{fail}} = \Pr(S_{n} = S_{3}) \leq \alpha$$

di mana $\alpha$ adalah ambang batas risiko yang dapat diterima regulator (umumnya $\alpha = 0,05$ untuk vaksin program nasional).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT

Berdasarkan desain Putra, Defit, dan Nurcahyo (2024), arsitektur IoT cold chain monitoring tersusun atas empat lapisan:

1. **Lapisan Persepsi (Sensor Layer):** Multiple DS18B20 probe yang ditempatkan pada zona kritis cold box (dekat dinding evaporator, tengah rak, dekat pintu) dengan topologi *1-Wire bus* beralamat unik 64-bit ROM.
2. **Lapisan Edge (Mikrokontroler):** ESP32/NodeMCU sebagai aggregator, melakukan *sampling* setiap 30 detik dan transmisi via Wi-Fi ke server.
3. **Lapisan Komunikasi:** Protokol MQTT (port 1883) dengan QoS level 1 untuk menjamin minimal satu kali pengiriman data alert.
4. **Lapisan Aplikasi:** Dashboard berbasis web/mobile yang menampilkan time-series suhu, histori *excursion*, dan notifikasi push ke apoteker.

### 3.2 SOP Operasional Cold Chain

| Tahap | Aktivitas | Parameter Kritis | Penanggung Jawab |
|-------|-----------|------------------|------------------|
| Pra-distribusi | Pre-conditioning ice pack pada $-20^{\circ}\text{C}$ selama $\geq 24$ jam | Suhu ice pack $\leq -18^{\circ}\text{C}$ | Petugas Gudang Farmasi |
| Loading | Penempatan vaccine + sensor | Posisi probe di geometric center | Apoteker |
| In-transit | Monitoring real-time via dashboard | Latency alert $\leq 5$ menit | Logistik |
| Penerimaan | Verifikasi suhu akhir + *electronic log* | $T_{\text{akhir}} \in [2,8]^{\circ}\text{C}$ | Apoteker Penerima |
| Dokumentasi | Auto-archive ke cloud + audit trail | Retensi data $\geq 5$ tahun | Supervisor |

### 3.3 Diagram Alir Logika Alert

```
[Sensor Sampling] → [Filter Moving Average (n=5)]
        ↓
[Hitung T_current] → {T < 0°C atau T > 10°C?}
        ↓ Ya                  ↓ Tidak
[Trigger CRITICAL]      {T < 2°C atau T > 8°C?}
   • Push notifikasi        ↓ Ya            ↓ Tidak
   • SMS supervisor    [Trigger WARNING]   [Status NORMAL]
   • Activate backup       • Log event
      cooling              • Email harian
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4