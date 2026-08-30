# 785 — Automated Optical Inspection (3D-AOI) untuk Perakitan SMT: Proyeksi Garis Cahaya Terstruktur, Metrologi Volume Sambungan Solder, dan Minimasi False Call Rate (IPC-A-610H)

**Domain:** Teknik Industri  
**Topik Spesialis:** Inspeksi Optik Otomatis 3D (3D-AOI) untuk Perakitan Surface Mount Technology (SMT)  
**Standar & Referensi Utama:** IPC-A-610H (Acceptability of Electronic Assemblies), IPC-A-610E (sebelumnya), ISO 9001:2015 (Manajemen Mutu), ASTM E1554-07 (Standard Test Method for Determining Shape and Volume of Solder Joints), IEEE 1788 (Interval Analysis for Measurement Uncertainty)

## 1. Pendahuluan dan Konteks Industri

Industri perakitan Surface Mount Technology (SMT) saat ini menghadapi tekanan kompetitif yang sangat tinggi akibat miniaturasi komponen elektronik yang semakin cepat dan tuntutan keandalan yang meningkat. Setiap jam lini produksi SMT modern dapat menghasilkan puluhan ribu komponen seperti resistor, kapasitor, dan integrated circuit pada papan sirkuit cetak (PCB) dengan kecepatan komponen hingga 100.000 pcs/jam. Namun, masalah utama yang terus muncul adalah cacat sambungan solder (solder joint) yang disebabkan oleh volume yang tidak memadai, bentuk yang tidak simetris, atau kontaminasi. Cacat ini tidak hanya menurunkan tingkat keandalan produk akhir tetapi juga meningkatkan biaya perbaikan (rework) yang signifikan.

Urgensi industri semakin mendesak karena revisi terbaru IPC-A-610H menekankan kriteria kuantitatif untuk solder joint, termasuk volume, tinggi, dan bentuk yang harus memenuhi spesifikasi kelas 2 atau 3 sesuai aplikasi akhir. Dalam praktik operasional, sistem Automated Optical Inspection (AOI) tradisional berbasis 2D sering kali menghasilkan false call rate yang tinggi, yaitu 2-5% dari total sambungan yang diperiksa. False call ini menyebabkan rework berulang-ulang, menguras waktu produksi hingga 20-30% dari total waktu siklus lini, dan menambah biaya operasional hingga $0,50–$2,00 per sambungan yang dirework. Secara ekonomi, sebuah pabrik elektronik kelas menengah yang memproduksi 5.000 PCB per hari dengan 1.200 sambungan solder per PCB dapat kehilangan hingga 60.000–180.000 jam rework per tahun, setara dengan biaya tambahan $500.000–$1,5 juta per tahun hanya untuk rework.

Permasalahan teknis semakin kompleks karena pengurangan ukuran sambungan solder di bawah 0,3 mm yang menyebabkan ketidakpastian pengukuran pada sistem 2D. Selain itu, faktor manusiawi dalam inspeksi visual manual tidak konsisten, sementara tuntutan traceability dan dokumentasi mutu semakin ketat sesuai regulasi seperti IPC-A-610H yang mengharuskan bukti kuantitatif volume sambungan. Dalam konteks ekonomi dan operasional, false call rate yang tinggi tidak hanya menurunkan First Time Yield (FTY) dari 97% menjadi 92%, tetapi juga meningkatkan risiko kegagalan di lapangan yang dapat memicu recall massal dan kerugian merek. Oleh karena itu, penerapan 3D-AOI berbasis structured light fringe projection menjadi solusi strategis untuk memenuhi standar IPC-A-610H, mengurangi false call rate hingga di bawah 0,5%, serta meningkatkan efisiensi produksi secara keseluruhan. Tanpa adopsi teknologi ini, pabrik elektronik akan kehilangan daya saing di tengah persaingan global yang semakin ketat.

## 2. Landasan Teori & Formulasi Matematis

Teknik structured light fringe projection merupakan metode metrologi 3D non-kontak yang paling umum digunakan dalam 3D-AOI untuk SMT. Prinsip dasarnya adalah proyeksi pola garis cahaya terstruktur (biasanya sinusoidal atau sinusoidal dengan shift fase) ke permukaan sambungan solder menggunakan proyektor DLP. Pola ini mengalami deformasi karena permukaan tidak rata, kemudian direkam oleh kamera high-resolution untuk menghasilkan profil ketinggian (height map) dengan resolusi hingga 5–10 µm.

Model matematis proyeksi garis cahaya dapat dirumuskan sebagai berikut. Pola proyeksi awal pada bidang referensi:

$$ I_p(x,y) = A + B \cos\left( \frac{2\pi}{\Lambda} x + \phi_0 \right) $$

Setelah proyeksi dan perekaman pada objek, intensitas yang tercermin:

$$ I_c(x,y) = A + B \cos\left( \frac{2\pi}{\Lambda} (x + \delta(x,y)) + \phi_0 \right) $$

Di mana \( A \) adalah intensitas ambient, \( B \) adalah amplitudo, \( \Lambda \) adalah periode garis (fringe pitch), dan \( \phi_0 \) adalah fase awal. Dengan teknik phase shifting atau demodulasi fase menggunakan analisis Fourier, fase yang diukur \( \phi(x,y) \) memberikan pergeseran \( \delta(x,y) \):

$$ \delta(x,y) = \frac{\Lambda}{2\pi} \phi(x,y) $$

Berdasarkan geometri triangulasi, ketinggian sambungan solder \( h(x,y) \) dihitung sebagai:

$$ h(x,y) = \frac{\delta(x,y) \cdot D}{B} = \frac{\Lambda \cdot \phi(x,y) \cdot D}{2\pi B} $$

Di mana \( B \) adalah baseline (jarak antara proyektor dan kamera), dan \( D \) adalah jarak dari objek ke bidang referensi. Untuk metrologi volume sambungan solder, volume \( V \) dihitung melalui integral permukaan:

$$ V = \iint_{A} h(x,y) \, dx \, dy $$

Di mana \( A \) adalah area footprint sambungan yang ditentukan oleh edge detection atau data CAD. Untuk mengurangi false call rate, digunakan batas spesifikasi (LSL dan USL) berdasarkan IPC-A-610H. Misalnya, jika USL = 0,055 mm³ dan LSL = 0,025 mm³, false call rate dihitung sebagai:

$$ \text{FCR} = \frac{N_{\text{outside spec}}}{N_{\text{total}}} \times 100\% $$

Dengan \( \sigma \) standar deviasi volume, dapat dihitung \( C_p \) index untuk memastikan proses stabil:

$$ C_p = \frac{\text{USL} - \text{LSL}}{6\sigma} $$

Derivasi ini memungkinkan deteksi dini cacat sambungan seperti insufficient solder (volume rendah) atau solder bridge (volume berlebih).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Implementasi sistem 3D-AOI dimulai dengan tahapan kalibrasi sistematik. Pertama, kalibrasi intrinsik dan ekstrinsik kamera dan proyektor menggunakan papan kalibrasi dengan pola grid yang diketahui. Proyeksi dilakukan dengan pola sinusoidal 8–12 fase untuk menghindari aliasing. Proses akuisisi gambar dilakukan pada kecepatan 30–60 fps dengan pencahayaan seragam untuk mengurangi noise.

Arsitektur teknologi melibatkan pipeline pemrosesan gambar terdistribusi: (1) preprocessing untuk noise reduction menggunakan filter median, (2) demodulasi fase dengan FFT atau phase-shifting algorithm, (3) rekonstruksi 3D menggunakan triangulasi, (4) segmentasi area sambungan berdasarkan data CAD, (5) perhitungan volume dan metrologi, serta (6) klasifikasi cacat menggunakan rule-based engine atau hybrid AI untuk mengurangi false call. Diagram alur proses dapat digambarkan sebagai:

```
Start
  ↓
Kalibrasi Sistem (Intrinsik + Ekstrinsik)
  ↓
Proyeksi Pola Garis Cahaya
  ↓
Akuisisi Gambar 3D
  ↓
Analisis Fase & Rekonstruksi Profil
  ↓
Segmentasi Area Sambungan
  ↓
Perhitungan Volume & Metrologi
  ↓
Klasifikasi Cacat (Pass/Fail/Re-work)
  ↓
Integrasi ke MES & Laporan
  ↓
End
```

Standar prosedur operasional (SOP) mencakup: (a) daily calibration sebelum shift produksi, (b) parameter inspeksi seperti exposure time 10–20 ms dan resolusi 5 µm, (c) protokol penanganan false call dengan verifikasi manual, serta (d) integrasi dengan lini SMT termasuk mesin pick-and-place, oven reflow, dan AOI 2D sebelumnya. Prosedur ini memastikan traceability penuh sesuai ISO 9001:2015.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan lini produksi SMT yang memproduksi 5.000 PCB per jam dengan rata-rata 1.200 sambungan solder per PCB, sehingga total 6 juta sambungan per jam. Parameter sistem 3D-AOI: \( B = 100 \) mm, \( D = 150 \) mm, \( \Lambda = 0,1 \) mm, resolusi 5 µm. Untuk satu sambungan contoh, tinggi diukur \( h = 0,08 \) mm dan area footprint \( A = 0,4 \) mm² (dari bounding box).

Langkah kalkulasi:  
1. Hitung pergeseran \( \delta = \frac{\Lambda}{2\pi} \phi \).  
2. Volume:  
$$ V = h \times A = 0,08 \times 0,4 = 0,032 \, \text{mm}^3 $$  
3. Berdasarkan IPC-A-610H, spesifikasi volume kelas 2 adalah 0,025–0,055 mm³. Jika \( \sigma = 0,005 \) mm³, maka \( C_p = 1,33 \) (stabil).  

Dalam simulasi 1 jam (6 juta sambungan), false call rate sebelum penerapan 3D-AOI adalah 3% (180.000 false call). Setelah implementasi dengan threshold volume yang dioptimalkan, false call rate turun menjadi 0,3% (18.000 false call). Perhitungan waktu rework: sebelumnya 30 detik per false call = 1.500 jam rework/hari; setelahnya 150 jam/hari. Biaya labor rework diasumsikan $20/jam, sehingga penghematan $26.000/hari atau $6,5 juta/tahun. Interpretasi manajerial: FTY meningkat dari 97% menjadi 99,7%, mengurangi biaya per PCB dari $0,12 menjadi $0,08, serta memenuhi standar IPC-A-610H untuk audit sertifikasi. Hasil ini menunjukkan ROI sistem 3D-AOI dalam 8 bulan dengan payback period 7 bulan.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Teknologi 3D-AOI ini dapat diterapkan lintas sektor seperti otomotif (elektronik ADAS dan ECU), peralatan medis (implan dan perangkat diagnostik), serta aerospace (komponen avionik). Dalam supply chain, 3D-AOI berfungsi sebagai quality gate krusial sebelum proses assembly selanjutnya, mengurangi scrap material hingga 15% dan mendukung just-in-time delivery dengan traceability penuh. Integrasi dengan sistem otomasi manufaktur memungkinkan real-time feedback ke robotic arms, meningkatkan efisiensi keseluruhan lini produksi.

Dalam manajemen biaya dan teknik, evaluasi dilakukan melalui Total Cost of Ownership (TCO) yang mencakup biaya awal sistem ($40.000–$80.000), pemeliharaan rutin, dan training teknisi. Manajemen biaya juga menggunakan analisis ROI berdasarkan penghematan rework dan peningkatan throughput. Aspek K3 (Kesehatan, Keselamatan, dan Lingkungan) terlibat dalam penanganan bahan kimia solder paste yang berbahaya, sementara ESG (Environmental, Social, Governance) tercermin dari pengurangan limbah material melalui false call minimization dan efisiensi energi pencahayaan LED. Tantangan adopsi meliputi integrasi dengan sistem legacy MES, kebutuhan insinyur terlatih khusus metrologi 3D, serta biaya awal yang tinggi. Evaluasi manajerial dilakukan dengan Balanced Scorecard yang mengukur perspektif keuangan (ROI), proses internal (false call rate), pelanggan (pemenuhan IPC-A-610H), dan pembelajaran (training rate). Dengan demikian, 3D-AOI tidak hanya menjadi alat teknis tetapi juga strategi bisnis strategis untuk keunggulan kompetitif berkelanjutan.