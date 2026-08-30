# 873 — Penjadwalan Time-Aware Shaper (TAS) dalam Time-Sensitive Networking (TSN) untuk Otomasi Industri Terintegrasi: Batasan Latensi dan Jitter yang Deterministik

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Time-Sensitive Networking (TSN) IEEE 802.1Qbv Time-Aware Shaper (TAS) Scheduling for Converged Industrial Automation: Deterministic Low Latency and Jitter Bounds  
**Standar & Referensi Utama:** IEEE 802.1Qbv-2022; IEC/IEEE 60802; Bruckner et al. (TSN for Industrial Automation, IEEE)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, kebutuhan akan komunikasi yang deterministik dan latensi rendah dalam sistem otomasi industri semakin mendesak. Time-Sensitive Networking (TSN) yang diatur oleh standar IEEE 802.1Qbv menjadi solusi yang menjanjikan untuk memenuhi tuntutan ini. TSN memungkinkan integrasi berbagai aplikasi dan protokol dalam satu jaringan, sehingga meningkatkan efisiensi operasional dan mengurangi biaya. Dalam konteks ini, Time-Aware Shaper (TAS) berperan penting dalam menjadwalkan lalu lintas data dengan cara yang memastikan latensi dan jitter yang dapat diprediksi.

Tantangan utama yang dihadapi oleh industri modern adalah meningkatnya kompleksitas sistem manufaktur dan rantai pasok yang terintegrasi. Dengan semakin banyaknya perangkat IoT dan sistem otomatisasi yang terhubung, kebutuhan untuk menjamin kualitas layanan (QoS) menjadi sangat penting. Latensi yang tinggi dan jitter yang tidak terduga dapat mengakibatkan kerugian ekonomi yang signifikan, termasuk penurunan produktivitas dan peningkatan biaya operasional. Oleh karena itu, penerapan TSN dengan TAS menjadi sangat relevan untuk menjamin komunikasi yang handal dan efisien dalam lingkungan industri yang kompleks (Bruckner et al., 2022).

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Time-Sensitive Networking (TSN)

TSN adalah sekumpulan standar yang dikembangkan oleh IEEE untuk meningkatkan kemampuan jaringan Ethernet dalam mendukung aplikasi yang memerlukan latensi rendah dan deterministik. Salah satu komponen kunci dari TSN adalah Time-Aware Shaper (TAS), yang memungkinkan pengaturan lalu lintas berdasarkan waktu.

### 2.2. Formulasi Matematis

Dalam konteks TAS, kita dapat mendefinisikan beberapa variabel:

- $T_{cycle}$: waktu siklus penjadwalan (dalam detik)
- $T_{transmission}$: waktu yang dibutuhkan untuk mentransmisikan satu paket (dalam detik)
- $T_{latency}$: latensi yang diharapkan (dalam detik)
- $J$: jitter yang diharapkan (dalam detik)

TAS mengatur antrian paket berdasarkan waktu siklus, dan rumus dasar untuk menghitung latensi dan jitter adalah sebagai berikut:

$$
T_{latency} = T_{cycle} + T_{transmission}
$$

Jitter dapat dihitung dengan mempertimbangkan variasi waktu antar paket yang diterima:

$$
J = \max(T_{arrival}) - \min(T_{arrival})
$$

Di mana $T_{arrival}$ adalah waktu kedatangan paket di penerima.

### 2.3. Pembuktian Matematis

Untuk memastikan bahwa latensi dan jitter berada dalam batas yang dapat diterima, kita perlu memastikan bahwa:

$$
T_{latency} \leq T_{max}
$$

Di mana $T_{max}$ adalah batas maksimum latensi yang diizinkan untuk aplikasi tertentu. Dengan menggunakan TAS, kita dapat mengatur siklus waktu dan waktu transmisi untuk memenuhi batasan ini.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Kebutuhan**: Identifikasi aplikasi dan kebutuhan latensi/jitter.
2. **Desain Jaringan**: Rancang arsitektur jaringan yang mendukung TSN dengan komponen yang sesuai.
3. **Konfigurasi TAS**: Atur parameter TAS sesuai dengan kebutuhan aplikasi.
4. **Pengujian dan Validasi**: Lakukan pengujian untuk memastikan bahwa latensi dan jitter memenuhi batasan yang ditetapkan.
5. **Implementasi dan Monitoring**: Terapkan sistem dan lakukan pemantauan berkala untuk memastikan kinerja yang optimal.

### 3.2. Diagram Alir Proses

```
[Analisis Kebutuhan] → [Desain Jaringan] → [Konfigurasi TAS] → [Pengujian] → [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki sebuah sistem otomasi yang memerlukan latensi maksimum $T_{max} = 5 ms$. Dengan parameter berikut:

- Waktu siklus $T_{cycle} = 10 ms$
- Waktu transmisi $T_{transmission} = 2 ms$

### 4.2. Perhitungan

Menggunakan rumus:

$$
T_{latency} = T_{cycle} + T_{transmission} = 10 ms + 2 ms = 12 ms
$$

Karena $T_{latency} = 12 ms > T_{max} = 5 ms$, kita perlu menyesuaikan parameter TAS untuk mengurangi $T_{latency}$. Misalnya, kita dapat mengurangi waktu siklus menjadi $T_{cycle} = 3 ms$.

### 4.3. Hasil

Setelah penyesuaian:

$$
T_{latency} = 3 ms + 2 ms = 5 ms
$$

Dengan demikian, sistem kini memenuhi batasan latensi yang diinginkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan TSN dan TAS tidak hanya terbatas pada otomasi industri, tetapi juga dapat diterapkan dalam berbagai sektor seperti manajemen rantai pasok, transportasi, dan telekomunikasi. Dalam konteks rantai pasok, komunikasi yang deterministik dapat meningkatkan efisiensi dan mengurangi biaya operasional.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk kompleksitas implementasi dan kebutuhan untuk infrastruktur jaringan yang mendukung. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan solusi yang lebih efisien dan terjangkau.

Ke depan, standar TSN diharapkan dapat terus berkembang untuk mendukung aplikasi yang lebih kompleks dan beragam, termasuk integrasi dengan teknologi baru seperti 5G dan edge computing, yang akan semakin memperkuat posisi TSN dalam ekosistem industri yang terintegrasi.

---

Referensi:
- IEEE 802.1Qbv-2022
- IEC/IEEE 60802
- Bruckner et al. (TSN for Industrial Automation, IEEE)