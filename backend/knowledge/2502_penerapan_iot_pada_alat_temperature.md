# 2502 — Penerapan IoT pada Sistem Monitoring Suhu Cold Chain Box Vaksin dengan Sensor DS18B20 sebagai Pilar Resiliensi Rantai Pasok Produk Ber-Suhu Kritis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Penerapan IoT pada Alat Temperature Monitoring System Cold Chain Box Vaccine Menggunakan Sensor DS18B20
**Jurnal & Sitasi Utama:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)
**Sitasi Pendukung:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *A Resilience Model for Cold Chain Logistics of Perishable Products*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)

---

## 1. Pendahuluan dan Konteks Industri

Vaksin merupakan produk biologi yang sangat sensitif terhadap variasi suhu. Berdasarkan pedoman *World Health Organization* (WHO) PQS Performance Specification E001, sebagian besar vaksin program imunisasi nasional harus disimpan pada rentang **+2 °C hingga +8 °C**, sementara vaksin *freeze-sensitive* seperti DTaP, Hepatitis B, dan HPV sama sekali tidak boleh terpapar suhu di bawah **0 °C** karena akan menyebabkan *freezing damage* yang irreversibel (Putra, Defit & Nurcahyo, 2024). Kerusakan termal ini sering kali tidak terdeteksi secara visual namun menurunkan *potency* (kemanjuran) vaksin secara kumulatif, menciptakan risiko kesehatan masyarakat yang *invisible* namun destruktif.

Studi empiris yang dilakukan oleh Putra, Defit dan Nurcahyo (2024) di **Dinas Kesehatan Kabupaten Siak**, Riau, menemukan bahwa **Unit Pelaksana Teknis Dinas (UPTD) Farmasi** masih mengandalkan sistem *cold chain box* konvensional yang tidak dilengkapi pemantauan suhu *real-time*. Proses pencatatan suhu dilakukan secara **manual setiap 2 jam** oleh apoteker melalui *log sheet* kertas, sebuah praktik yang mengandung setidaknya tiga kelemahan struktural: (1) **granularitas data rendah** sehingga kejadian *thermal excursion* singkat (<2 jam) luput terekam; (2) **human error** dalam pembacaan termometer analog dan penulisan; serta (3) **keterlambatan respons** karena peringatan hanya muncul saat apoteker secara fisik melihat anomali.

Kondisi ini sebanding dengan problematika rantai pasok produk *perishable* secara lebih luas. Khurshid dan Siddiqui (2024) dalam model resiliensi *cold chain logistics* mengemukakan bahwa gangguan suhu (*temperature disruption*) merupakan kontributor utama kegagalan rantai pasok produk mudah rusak, dan bahwa visibilitas suhu *end-to-end* adalah prasyarat *non-negotiable* bagi terciptanya resiliensi sistem. Tanpa *real-time temperature visibility*, *corrective action* baru dapat dilakukan setelah produk rusak — bukan sebelum.

Secara ekonomis, biaya program imunisasi nasional Indonesia (termasuk *cold chain logistics*) menyerap porsi signifikan APBN Kementerian Kesehatan. Sebuah insiden *cold chain failure* yang menyebabkan 1.000 dosis vaksin rusak bukan hanya kerugian moneter (asumsikan harga rata-rata Rp 75.000–Rp 250.000 per dosis), tetapi juga *social cost* berupa epidemiologis, logistik distribusi ulang, dan rusaknya *trust* masyarakat terhadap program imunisasi. Oleh karena itu, *IoT-enabled temperature monitoring system* bukan sekadar perangkat teknis, melainkan instrumen **manajemen risiko operasional** yang krusial bagi kinerja Unit Pelayanan Kesehatan (Putra et al., 2024).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Karakteristik Sensor DS18B20 dan Konversi Digital

Sensor DS18B20 adalah *digital temperature sensor* dengan resolusi konfigurabel **9, 10, 11, atau 12 bit**, setara dengan langkah diskretisasi $\Delta T = 0{,}5\,^{\circ}\text{C}$, $0{,}25\,^{\circ}\text{C}$, $0{,}125\,^{\circ}\text{C}$, dan $0{,}0625\,^{\circ}\text{C}$ (Putra et al., 2024). Pada resolusi 12-bit yang digunakan dalam studi Siak, hubungan antara nilai register digital mentah $N$ (16-bit signed integer two's complement) dan suhu aktual $T$ adalah:

$$
T\left(^{\circ}\text{C}\right) = \frac{N}{16} = N \times \Delta T
$$

dengan $N \in [-2048, +2047]$ untuk mode default. Akurasi sensor adalah $\pm 0{,}5\,^{\circ}\text{C}$ pada rentang $-10\,^{\circ}\text{C}$ hingga $+85\,^{\circ}\text{C}$, memenuhi threshold operasional *cold chain* WHO.

### 2.2 Model Kinetika Degradasi Termal Vaksin (Arrhenius)

Degradasi *potency* vaksin mengikuti persamaan Arrhenius yang diadopsi dari studi stabilitas farmasi:

$$
k(T) = A \cdot e^{-\frac{E_a}{RT}}
$$

dengan $k(T)$ adalah laju degradasi pada suhu absolut $T$ (K), $A$ adalah *pre-exponential factor*, $E_a$ adalah energi aktivasi (umumnya 80–120 kJ/mol untuk protein vaksin), dan $R = 8{,}314\,\text{J/(mol·K)}$. *Shelf-life* efektif $t_{\text{exp}}$ pada suhu penyimpanan rata-rata $\bar{T}$ adalah:

$$
t_{\text{exp}}(\bar{T}) = \frac{\ln(1/x_{\text{acc}})}{k(\bar{T})}
$$

dengan $x_{\text{acc}}$ adalah fraksi *potency* yang masih dapat diterima (misal $x_{\text{acc}}=0{,}9$).

### 2.3 Model Resiliensi *Cold Chain* (Kerangka Khurshid–Siddiqui)

Khurshid dan Siddiqui (2024) memformulasikan indeks resiliensi rantai pasok produk *perishable* sebagai:

$$
R_{\text{cc}} = \frac{T_{\text{rec}} - T_{\text{dis}}}{t_{\text{rec}}}
$$

dengan $T_{\text{rec}}$ adalah waktu pemulihan sistem ke kondisi operasional, $T_{\text{dis}}$ adalah waktu deteksi gangguan, dan $t_{\text{rec}}$ adalah *time-to-recovery*. Implementasi sistem monitoring IoT menurunkan $T_{\text{dis}}$ secara signifikan melalui peringatan otomatis, sehingga $R_{\text{cc}}$ meningkat.

### 2.4 Throughput Data dan Kapasitas Kanal IoT

Asumsikan satu node DS18B20 mengirim paket data tiap interval sampling $\tau$ (detik). *Data rate* total untuk $n$ node:

$$
B_{\text{total}} = \frac{n \cdot L_{\text{packet}} \cdot 8}{\tau} \quad \text{[bit/s]}
$$

dengan $L_{\text{packet}}$ adalah panjang paket byte. Untuk protokol 1-Wire DS18B20, paket identifikasi dan konversi memakan $\approx 16$ byte per pembacaan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Putra et al. (2024) menyusun arsitektur sistem menjadi empat lapisan fungsional:

1. **Lapisan Sensor (Perception Layer):** Satu atau lebih DS18B20 ditempatkan pada dinding internal *cold chain box*, yaitu zona *top-loading* (dekat tutup), *mid-zone*, dan *bottom-zone* untuk mengukur gradien termal vertikal.
2. **Lapisan Mikrokontroler (Network Layer):** Arduino/ESP32 membaca data sensor melalui protokol 1-Wire, melakukan konversi digital-ke-suhu, dan mentransmisikan ke *cloud* melalui Wi-Fi/GSM.
3. **Lapisan Aplikasi (Application Layer):** Dashboard berbasis web/mobile menampilkan *real-time temperature*, histori grafik, dan trigger *alert* (SMS, Telegram, atau buzzer) jika $T \notin [+2, +8]\,^{\circ}\text{C}$.
4. **Lapisan Data (Data Layer):** Basis data *time-series* untuk audit trail sesuai *Good Distribution Practice* (GDP) obat.

**SOP Implementasi di UPTD Farmasi (disintesis dari Putra et al., 2024):**

| Tahap | Aktivitas | Standar Acuan |
|-------|-----------|---------------|
| 1 | Kalibrasi sensor DS18B20 terhadap termometer referensi bersertifikat NIST | ISO 17025 |
| 2 | Pemetaan termal (*thermal mapping*) awal cold chain box pada kondisi *steady state* dan *door-opening event* | PQS E001 |
| 3 | Penempatan sensor di 3 zona sesuai hasil *mapping* | WHO E001 |
| 4 | Konfigurasi *alert threshold* $T_{\min}=2\,^{\circ}\text{C}$, $T_{\max}=8\,^{\circ}\text{C}$, dan *hysteresis* $0{,}5\,^{\circ}\text{C}$ | WHO TRS 961 |
| 5 | Validasi sistem paralel dengan *log sheet* manual selama 14 hari | GDP/CDOB |
| 6 | Pelatihan apoteker untuk *response protocol* saat *alert* berbunyi | CPOB |

Diagram alir logika deteksi dini:

$$
\text{IF } T_{\text{measured}} > T_{\max} \text{ OR } T_{\text{measured}} < T_{\min} \rightarrow \text{Trigger Alert}
$$
$$
\text{IF Alert active AND } |T - T_{\text{nom}}| < \Delta_{\text{hyst}} \rightarrow \text{Clear Alert}
$$

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus UPTD Farmasi Siak

Asumsikan data operasional berikut berdasarkan rerata temuan Putra et al. (2024):

- Volume cold chain box: $V = 20$ liter
- Kapasitas: 200 vial vaksin (asumsi 10 dosis/vial) → $2.000$ dosis
- Interval sampling: $\tau = 60$ detik
- Jumlah node sensor: $n = 3$ (top, mid, bottom)
- Suhu ambient ruangan: $T_{\text{amb}} = 27\,^{\circ}\text{C}$
- Suhu set-point: $T_{\text{set}} = 5\,^{\circ}\text{C}$ (nominal $+2$ hingga $+8\,^{\circ}\text{C}$)

### 4.2 Perhitungan Data Rate IoT

Panjang paket per pembacaan $L_{\text{packet}} \approx 16$ byte (alamas 8 byte + data 2 byte + CRC 1 byte + overhead protokol).

$$
B_{\text{total}} = \frac{3 \cdot 16 \cdot 8}{60} = \frac{384}{60} = 6{,}4 \text{ bit/s}
$$

Throughput ini sangat rendah — hanya $\approx 0{,}008$% dari kapasitas minimum Wi-Fi 802.11n 150 Mbps, sehingga arsitektur IoT *real-time* sangat layak secara teknis tanpa *bottleneck* kanal (Putra et al., 2024).

### 4.3 Perhitungan Thermal Mass dan Waktu Paruh Pendinginan

Massa termal efektif (*thermal mass*) cold chain box dapat didekati:

$$
M_{\text{th}} = \sum_i m_i \cdot c_{p,i}
$$

Untuk $m_{\text{ice pack}} = 1{,}5\,\text{kg}$, $c_{p,\text{ice}} = 2{,}05\,\text{kJ/(kg·K)}$, $m_{\text{vaccine}} = 0{,}4\,\text{kg}$, $c_{p,\text{vaccine}} \approx 3{,}5\,\text{kJ/(kg·K)}$, $m_{\text{box}} = 2\,\text{kg}$ (polystyrene), $c_{p,\text{box}} = 1{,}3\,\text{kJ/(kg·K)}$:

$$
M_{\text{th}} = 1{,}5 \cdot 2{,}05 + 0{,}4 \cdot 3{,}5 + 2 \cdot 1{,}3 = 3{,}075 + 1{,}4 + 2{,}6 = 7{,}075 \text{ kJ/K}
$$

Laju kenaikan suhu saat *door-opening* dengan infiltrasi panas $\dot{Q}_{\text{leak}} = 5$ W (tipikal cold box berinsulasi):

$$
\Delta T(t) = \frac{\dot{Q}_{\text{leak}} \cdot t}{M_{\text{th}}}
$$

Untuk pintu terbuka 30 detik:

$$
\Delta T = \frac{5 \cdot 30}{7{,}075 \cdot 10^3} = 0{,}021\,^{\circ}\text{C}
$$

Artinya *cold chain box* memiliki *buffer termal* yang baik; pelanggaran *cold chain* biasanya terjadi pada **kerusakan segel insulasi atau kegagalan sistem refrigerasi**, bukan pada akses singkat. Inilah argumen kuat untuk monitoring **kontinu** dibanding *intermittent* (Putra et al.,