# 879 — Desain Jaringan 5G Pribadi untuk Pabrik Industri Cerdas: Komunikasi Latensi Rendah yang Sangat Andal (URLLC), Pemotongan Jaringan untuk AGVs/SCADA, dan QoS Pabrik 3GPP Rilis 16/17

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Private 5G Network Design for Smart Industrial Plants: Ultra-Reliable Low-Latency Communication (URLLC), Network Slicing for AGVs/SCADA, and 3GPP Release 16/17 Factory QoS  
**Standar & Referensi Utama:** 3GPP TS 22.104; 5G-ACIA Whitepaper (5G for Connected Industries and Automation); IEEE Commun. Mag.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, pabrik cerdas menjadi fokus utama dalam transformasi digital. Penerapan teknologi komunikasi yang canggih, seperti jaringan 5G, sangat penting untuk meningkatkan efisiensi operasional dan daya saing. Jaringan 5G menawarkan keunggulan signifikan dalam hal latensi rendah dan keandalan tinggi, yang sangat diperlukan untuk aplikasi kritis di lingkungan industri, seperti sistem kontrol otomatis (SCADA) dan kendaraan otomatis (AGVs).

Tantangan utama yang dihadapi industri saat ini meliputi kebutuhan untuk mengintegrasikan berbagai sistem dan perangkat dalam satu ekosistem yang terhubung. Dengan meningkatnya kompleksitas proses manufaktur dan rantai pasok, komunikasi yang cepat dan andal menjadi sangat penting. Menurut laporan 5G-ACIA, penerapan 5G di sektor industri dapat mengurangi waktu henti produksi hingga 30% dan meningkatkan produktivitas hingga 20% (5G-ACIA, 2022).

Namun, implementasi jaringan 5G di pabrik tidak tanpa tantangan. Beberapa masalah yang sering muncul termasuk kebutuhan untuk memastikan QoS (Quality of Service) yang konsisten, pengelolaan spektrum frekuensi, dan pemotongan jaringan untuk memenuhi kebutuhan spesifik aplikasi. Selain itu, standar yang ditetapkan oleh 3GPP, seperti TS 22.104, memberikan pedoman penting dalam merancang dan mengimplementasikan jaringan 5G untuk aplikasi industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Komunikasi Latensi Rendah yang Sangat Andal (URLLC)

URLLC adalah salah satu fitur utama dari jaringan 5G yang dirancang untuk memenuhi kebutuhan aplikasi yang memerlukan latensi sangat rendah dan keandalan tinggi. Dalam konteks ini, latensi ($L$) dapat didefinisikan sebagai waktu yang dibutuhkan untuk mengirimkan data dari pengirim ke penerima. Rumus untuk menghitung latensi dapat dinyatakan sebagai:

$$
L = T_{transmission} + T_{propagation} + T_{processing}
$$

di mana:
- $T_{transmission}$ adalah waktu yang diperlukan untuk mentransmisikan data,
- $T_{propagation}$ adalah waktu yang diperlukan untuk sinyal bergerak melalui media,
- $T_{processing}$ adalah waktu yang diperlukan untuk memproses data di perangkat.

### 2.2. Pemotongan Jaringan

Pemotongan jaringan (network slicing) adalah teknik yang memungkinkan pembagian sumber daya jaringan fisik menjadi beberapa jaringan virtual yang terisolasi. Setiap potongan dapat dioptimalkan untuk memenuhi kebutuhan spesifik aplikasi. Misalkan kita memiliki $N$ potongan jaringan, maka alokasi sumber daya ($R_i$) untuk potongan ke-$i$ dapat dinyatakan sebagai:

$$
R_i = \frac{R_{total}}{N}
$$

di mana $R_{total}$ adalah total sumber daya yang tersedia.

### 2.3. Kualitas Layanan (QoS)

QoS dalam konteks pabrik cerdas mencakup beberapa parameter, seperti bandwidth, latensi, dan tingkat kehilangan paket. Untuk memastikan QoS yang baik, kita dapat menggunakan rumus berikut untuk menghitung tingkat kehilangan paket ($PL$):

$$
PL = \frac{N_{lost}}{N_{total}} \times 100\%
$$

di mana:
- $N_{lost}$ adalah jumlah paket yang hilang,
- $N_{total}$ adalah total paket yang dikirim.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Analisis Kebutuhan**: Identifikasi kebutuhan komunikasi dari berbagai aplikasi di pabrik, termasuk AGVs dan SCADA.
2. **Desain Arsitektur Jaringan**: Rancang arsitektur jaringan 5G yang mencakup pemotongan jaringan untuk memenuhi kebutuhan spesifik.
3. **Pengujian dan Validasi**: Lakukan pengujian untuk memastikan bahwa jaringan memenuhi standar QoS yang ditetapkan oleh 3GPP.
4. **Implementasi**: Terapkan jaringan 5G di pabrik dan lakukan pemantauan secara berkala untuk memastikan kinerja optimal.

### 3.2. Diagram Alir Proses

```
[Analisis Kebutuhan] --> [Desain Arsitektur Jaringan] --> [Pengujian dan Validasi] --> [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik memiliki total bandwidth sebesar 100 Mbps dan ingin mengalokasikan bandwidth untuk 5 AGVs dan 1 sistem SCADA. Dengan menggunakan rumus pemotongan jaringan, alokasi bandwidth untuk setiap AGV ($R_{AGV}$) dan SCADA ($R_{SCADA}$) dapat dihitung sebagai berikut:

1. **Total Alokasi**:
   - Total AGVs = 5
   - Total bandwidth = 100 Mbps
   - Alokasi untuk SCADA = 20 Mbps

2. **Perhitungan**:
   - Alokasi untuk AGVs:
   $$ 
   R_{AGV} = \frac{(100 - 20)}{5} = \frac{80}{5} = 16 \text{ Mbps}
   $$

### 4.2. Interpretasi Hasil

Setiap AGV akan mendapatkan alokasi bandwidth sebesar 16 Mbps, sedangkan sistem SCADA mendapatkan 20 Mbps. Dengan alokasi ini, pabrik dapat memastikan bahwa semua AGVs dapat beroperasi dengan baik tanpa mengganggu kinerja sistem SCADA.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan jaringan 5G di pabrik cerdas tidak hanya terbatas pada sektor manufaktur. Teknologi ini juga dapat diterapkan dalam berbagai disiplin lain, seperti rantai pasok, otomasi, dan manajemen biaya. Misalnya, dalam rantai pasok, jaringan 5G dapat meningkatkan visibilitas dan pelacakan barang secara real-time, yang pada gilirannya dapat mengurangi biaya dan meningkatkan efisiensi.

Namun, terdapat beberapa batasan dalam metodologi yang perlu diperhatikan. Misalnya, kompleksitas dalam pengelolaan jaringan virtual dan kebutuhan untuk memastikan keamanan data. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan solusi yang lebih efisien dan aman untuk mengelola jaringan 5G di lingkungan industri.

Dengan demikian, desain jaringan 5G pribadi untuk pabrik cerdas tidak hanya akan meningkatkan efisiensi operasional, tetapi juga membuka peluang baru untuk inovasi dan pengembangan di berbagai sektor industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
