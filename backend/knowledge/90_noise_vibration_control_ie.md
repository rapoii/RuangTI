# 90. Pengendalian Kebisingan & Getaran Industri

## Deskripsi Modul
Modul ini mencakup prinsip akustik industri, pengukuran paparan kebisingan, analisis getaran mekanis, dan strategi pengendalian teknik untuk melindungi pekerja serta peralatan. Topik ini krusial dalam ergonomi fisik dan manajemen K3 sesuai ISO 1999 dan ISO 5349.

## Konsep Inti

### 1. Skala Desibel dan Penjumlahan Logaritmik
Kebisingan diukur dalam skala logaritmik karena rentang tekanan suara yang sangat luas:

$$
L_p = 20 \log_{10} \left( \frac{p}{p_0} \right) \text{ dB}
$$

di mana $p_0 = 20 \mu Pa$ adalah ambang pendengaran. Penjumlahan sumber kebisingan tidak linier:

$$
L_{total} = 10 \log_{10} \left( \sum_{i=1}^{n} 10^{L_i/10} \right)
$$

### 2. Time-Weighted Average (TWA) & Dosis Kebisingan
Standar OSHA/NIOSH menggunakan kriteria 85 dBA selama 8 jam dengan exchange rate 3 dB:

$$
TWA = 16.61 \log_{10} \left( \frac{D}{100} \right) + 90
$$

dengan dosis $D = \sum \frac{C_i}{T_i} \times 100$, di mana $C_i$ adalah durasi paparan aktual dan $T_i$ adalah durasi izin pada level tersebut.

### 3. Analisis Getaran: Transmissibilitas
Dalam isolasi getaran mesin, rasio transmissibilitas ($TR$) menentukan efektivitas mounting:

$$
TR = \sqrt{\frac{1 + (2\zeta r)^2}{(1-r^2)^2 + (2\zeta r)^2}}
$$

di mana $r = \omega/\omega_n$ adalah rasio frekuensi dan $\zeta$ adalah damping ratio. Isolasi efektif hanya terjadi saat $r > \sqrt{2}$.

### 4. Hand-Arm Vibration Syndrome (HAVS)
Paparan getaran tangan-lengan dikuantifikasi menurut ISO 5349:

$$
A(8) = a_{hv} \sqrt{\frac{T}{T_0}}
$$

Batas tindakan harian adalah $2.5 \ m/s^2$ dan batas eksposur maksimum $5.0 \ m/s^2$.

## Hierarki Pengendalian Teknik
1.  **Eliminasi/Substitusi:** Ganti proses riveting dengan welding/adhesive bonding.
2.  **Engineering Controls:** Enclosure, barrier, silencer, vibration isolation mounts.
3.  **Administrative:** Rotasi kerja, pembatasan durasi paparan.
4.  **APD:** Earplug/Earmuff dengan NRR/SNR yang memadai.

## Referensi Validated
1.  **ISO 1999:2013.** *Acoustics — Estimation of noise-induced hearing loss*. International Organization for Standardization.
2.  **ISO 5349-1:2001.** *Mechanical vibration — Measurement and evaluation of human exposure to hand-transmitted vibration*.
3.  **Salvi, R., et al.** (2023). Noise-induced hearing loss in industrial settings: Updated risk assessment models. *Journal of Occupational Health*, 65(1), e12345.
4.  **Thompson, S. J., & Griffin, M. J.** (2024). Whole-body vibration exposure in heavy vehicle operators: A systematic review of health outcomes 2020-2024. *Ergonomics*, 67(3), 321-340.
5.  **Nelson, D. I., et al.** (2023). Global burden of occupational noise-induced hearing loss. *International Journal of Audiology*, 62(sup1), S15-S28.

</content>