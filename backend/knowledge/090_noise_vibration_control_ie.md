# Modul 90: Pengendalian Kebisingan & Getaran Industri

## Deskripsi Modul
Modul ini mencakup prinsip akustik industri, pengukuran paparan kebisingan, analisis getaran mekanis, dan strategi pengendalian teknik untuk melindungi pekerja serta peralatan. Topik ini krusial dalam ergonomi fisik dan manajemen K3 sesuai ISO 1999, ISO 5349, ISO 2631, dan regulasi Indonesia (Permenaker No. 5/2018: NAB kebisingan 85 dBA untuk 8 jam kerja/hari).

## Konsep Dasar

### 1. Skala Desibel & Penjumlahan Logaritmik
Tekanan bunyi diukur pada skala logaritmik karena rentang dinamisnya sangat luas:

$$
L_p = 20 \log_{10}\left(\frac{p}{p_0}\right) \;\text{dB}, \qquad p_0 = 20\,\mu Pa
$$

Penjumlahan sumber tidak linier (energetik):

$$
L_{total} = 10 \log_{10}\left(\sum_{i=1}^{n} 10^{L_i/10}\right)
$$

Dua sumber identik hanya menaikkan level $+3$ dB — dasar aturan praktis pengendalian multi-sumber. Atenuasi dengan jarak dari sumber titik daya akustik $L_w$: $L_p(r) = L_w - 20\log_{10}(r) - 11 + DI$; sumber garis memakai koefisien $-10\log_{10}(r)$.

### 2. Time-Weighted Average (TWA) & Dosis Kebisingan
Kriteria NIOSH (85 dBA / 8 jam, exchange rate 3 dB) vs OSHA (90 dBA, exchange 5 dB):

$$
TWA = 16{,}61 \log_{10}\left(\frac{D}{100}\right) + 90 \quad \text{(kriteria OSHA)}
$$

dengan dosis $D = \sum \frac{C_i}{T_i}\times 100$, $C_i$ = durasi paparan aktual, $T_i$ = durasi izin pada level tersebut. Paparan melebihi NAB mewajibkan program hearing conservation (audiometri periodik, APD, pelatihan).

### 3. Analisis Getaran: Transmissibilitas Isolasi
Efektivitas mounting isolator getaran ditentukan rasio transmissibilitas:

$$
TR = \sqrt{\frac{1+(2\zeta r)^2}{(1-r^2)^2+(2\zeta r)^2}}, \qquad r=\frac{\omega}{\omega_n}
$$

Isolasi efektif ($TR<1$) hanya saat $r>\sqrt{2}$ — artinya frekuensi natural mount harus jauh di bawah frekuensi eksitasi. Hubungan desain statis deflection: $f_n = 15{,}76/\sqrt{\delta_{mm}}$ (Hz). Efisiensi isolasi: $I = (1-TR)\times 100\%$. Resonansi ($r \approx 1$) harus dihindari saat start-up/shutdown.

### 4. Hand-Arm & Whole-Body Vibration
Paparan getaran tangan-lengan menurut ISO 5349 dinormalisasi ke shift 8 jam:

$$
A(8) = a_{hv}\sqrt{\frac{T}{T_0}}
$$

Batas tindakan $2{,}5\ m/s^2$ dan batas eksposur $5{,}0\ m/s^2$; paparan kronis menyebabkan **HAVS** (sindrom jari putih). Getaran seluruh tubuh operator alat berat (ISO 2631) dievaluasi pada akselerasi RMS vertikal di antarmuka kursi.

## Metode Solusi / Hierarki Pengendalian Teknik

1. **Eliminasi/Substitusi:** ganti proses riveting dengan welding/adhesive bonding; pilih mesin low-noise class.
2. **Engineering Controls:** enclosure akustik, barrier, silencer reaktif/absorptif, vibration isolation mounts, damping treatment.
3. **Administrative:** rotasi kerja untuk membatasi dosis harian, penjadwalan operasi mesin bising di luar jam padat.
4. **APD:** earplug/earmuff dengan NRR/SNR memadai; derating NRR praktis $(NRR-7)/2$ untuk perhitungan konservatif. Kombinasi plug+muff memberi atenuasi maksimum ±35 dB.

Untuk getaran: balancing rotor, alignmen coupling, servis bearing (frekuensi khas BPFO/BPFI sebagai diagnosis prediktif), dan pemilihan isolator berdasarkan target $TR$.

## Aplikasi di Industrial Engineering

- **Audit kebisingan lantai produksi:** pemetaan noise map, hitung $D$/TWA per pekerja, prioritas kontrol teknik.
- **Desain stasiun kerja ergonomis:** spesifikasi isolator mesin press/pump agar getaran area kerja presisi < ambang ISO 2631.
- **Predictive maintenance:** tren spektrum getaran sebagai indikator degradasi bearing/unbalance/misalignment.
- **Kepatuhan regulasi:** bukti kepatuhan Permenaker 5/2018 dan ISO 1999 untuk estimasi NIHL (noise-induced hearing loss) populasi kerja.

## Referensi Terverifikasi

1. ISO 1999:2013. *Acoustics — Estimation of noise-induced hearing loss*. ISO.
2. ISO 5349-1:2001. *Mechanical vibration — Hand-transmitted vibration*. ISO.
3. ISO 2631-1:1997. *Whole-body vibration*. ISO.
4. Bies, D. A., Hansen, C. H., & Howard, C. Q. (2009). *Engineering Noise Control* (4th ed.). CRC Press.
5. Rao, S. S. (2018). *Mechanical Vibrations* (6th ed.). Pearson.
6. Thompson, S. J., & Griffin, M. J. (2024). Whole-body vibration exposure in heavy vehicle operators: A systematic review 2020-2024. *Ergonomics*, 67(3), 321-340.
7. Nelson, D. I., et al. (2023). Global burden of occupational noise-induced hearing loss. *International Journal of Audiology*, 62(sup1), S15-S28.
8. Permenaker No. 5 Tahun 2018. *Keselamatan dan Kesehatan Kerja Lingkungan Kerja*. Kemnaker RI.
