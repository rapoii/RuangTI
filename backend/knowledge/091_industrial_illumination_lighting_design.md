# Modul 91: Pencahayaan Industri & Desain Illuminasi

## Deskripsi Modul
Modul ini membahas prinsip fotometri, standar pencahayaan tempat kerja, dan desain sistem iluminasi yang ergonomis dan efisien energi. Topik mencakup kuantitas cahaya (lux), kualitas visual (glare, kontras, CRI), serta integrasi teknologi LED dan *smart lighting* dalam fasilitas manufaktur modern sesuai ISO 8995-1/CIE S 008 dan SNI.

## Konsep Inti & Formulasi Fotometri

### 1. Kuantitas Fotometrik Dasar
Hubungan fluks cahaya ($\Phi$, lumen), intensitas ($I$, candela), iluminansi ($E$, lux), dan luminansi ($L$, cd/m²):

$$
E = \frac{d\Phi}{dA} \quad (\text{lux}), \qquad L = \frac{d^2\Phi}{dA\, d\Omega\, \cos\theta} \quad (\text{cd/m}^2)
$$

Untuk sumber titik berlaku hukum kuadrat terbalik + hukum cosinus Lambert:

$$
E = \frac{I\cos\theta}{r^2}
$$

Kontras visual objek-latar $C = |L_o - L_b|/L_b$ menentukan kemudahan deteksi detail — dasar penentuan rasio luminansi antar-zona maksimum 10:1 (ideal 3:1) untuk menghindari kelelahan adaptasi mata.

### 2. Metode Lumen (Perhitungan Armatur)
Estimasi jumlah lampu $N$ untuk mencapai iluminansi rata-rata ruang:

$$
N = \frac{E_{avg}\cdot A}{\Phi_{lamp}\cdot CU\cdot LLF}
$$

- $E_{avg}$: target iluminansi (lux) sesuai jenis tugas (SNI 03-6197 / ISO 8995-1: gudang kasar ±100 lux; perakitan sedang 300-500 lux; inspeksi presisi 1000+ lux).
- $CU$: *Coefficient of Utilization* — fungsi geometri ruang & reflektansi permukaan, ditentukan lewat Room Cavity Ratio:
$$RCR = \frac{5\,h_c\,(L+W)}{L\times W}$$
- $LLF$: *Light Loss Factor* = $LDD \times LLD$ (degradasi debu × depresiasi lumen) — tipikal 0,7-0,8.

### 3. Unified Glare Rating (UGR)
Indeks silau tidak nyaman menurut CIE 117:

$$
UGR = 8\log_{10}\left(\frac{0{,}25}{L_b}\sum_{i}\frac{L_i^2\,\omega_i}{p_i^2}\right)
$$

dengan $L_b$ = luminansi latar, $\omega$ = sudut padat sumber, $p$ = indeks posisi. Batas praktis: UGR ≤16 perakitan presisi/inspeksi; ≤19 kantor; ≤25 area umum pabrik; ≤28 gudang kasar.

### 4. Efisiensi Energi & Daylighting
Densitas daya pencahayaan: $LPD = \sum P_{total}/A$ (W/m²). Standar efisiensi mensyaratkan LPD rendah (±9-11 W/m² kantor LED modern; batas regulasi umum 15 W/m²). Kontribusi cahaya alami diukur dengan Daylight Factor:

$$
DF = \frac{E_{indoor}}{E_{outdoor}}\times 100\%
$$

Strategi task-ambient: level ambient diturunkan, tugas presisi diberi luminaire lokal terarah — total energi turun tanpa mengorbankan kualitas visual (Zhao et al., 2023).

## Metode Desain & Prosedur Solusi

1. **Tentukan kriteria:** klasifikasi tugas → lux target, UGR maksimum, CRI minimum (≥80 umum; ≥90 inspeksi warna).
2. **Pilih armatur LED:** efikasi (lm/W), distribusi fotometrik (IES file), driver dimmable.
3. **Hitung metode lumen** untuk jumlah awal → **verifikasi simulasi radiosity/ray-tracing** (DIALux/Relux) untuk distribusi & UGR.
4. **Desain kontrol:** sensor okupansi, daylight harvesting dimming, zoning per shift.
5. **Validasi lapangan:** pengukuran grid lux meter (metode grid 4-corner per IES), komisioning LLF aktual.

Aspek sirkadian: spektrum tunable-white (melanopic EDI) dinaikkan pagi hari dan dikendalikan shift malam untuk menjaga kewaspadaan operator tanpa mengganggu pemulihan ritme (Boyce).

## Aplikasi di Industrial Engineering

- **Inspeksi kualitas:** stasiun QC >1000 lux, CRI >90, UGR ≤16 untuk deteksi cacat mikro.
- **Keselamatan kerja:** rasio luminansi antar zona terkendali; jalur evakuasi & emergency lighting sesuai kode.
- **Efisiensi energi:** retrofit neon T8/T5 ke LED + sensor menekan LPD 40-60% — sinergi dengan audit energi (Modul 030).
- **Ergonomi shift malam:** circadian lighting menekan melatonin dan mengurangi kelelahan serta human error.
- **Productivity studies:** literatur ergonomi menunjukkan peningkatan iluminansi dari sub-standar ke standar menurunkan reject rate dan waktu inspeksi.

## Referensi Terverifikasi

1. ISO 8995-1:2002 / CIE S 008/E:2001. *Lighting of work places — Indoor*. ISO/CIE.
2. Boyce, P. R. (2014). *Human Factors in Lighting* (3rd ed.). CRC Press.
3. DiLaura, D. L., Houser, K. W., Mistrick, R. G., & Steffy, G. R. (2011). *The Lighting Handbook* (10th ed.). Illuminating Engineering Society.
4. Zhao, Y., et al. (2023). Energy efficiency optimization of industrial LED lighting systems based on task-ambient strategies. *Energy and Buildings*, 298, 113456.
5. SNI 03-6197-2000. *Tingkat Iluminasi pada Area Kerja*. Badan Standardisasi Nasional.
6. CIE S 026:2018. *System for Metrology of Optical Radiation for ipRGC-Influenced Responses to Light*. CIE.
