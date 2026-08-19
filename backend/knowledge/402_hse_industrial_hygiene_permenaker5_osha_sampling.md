# Modul 402: Higiene Industri & Pengujian Lingkungan Kerja Fisik-Kimia (Permenaker No. 5/2018, OSHA Noise TWA, ISBB/WBGT, dan Debu Gravimetri)

## 1. Domain Profesi & Ruang Lingkup
Profesi **Industrial Hygienist / Ahli Higiene Industri & K3 Lingkungan Kerja** bertugas mengantisipasi, mengenali, mengevaluasi, dan mengendalikan faktor bahaya lingkungan kerja (faktor fisik, kimia, biologi, ergonomi, dan psikososial) untuk mencegah penyakit akibat kerja (PAK) dan kelelahan kronis pekerja.

### Standar Baku Mutu & Regulasi:
1. **Permenaker No. 5 Tahun 2018**: *Keselamatan dan Kesehatan Kerja Lingkungan Kerja* (Standar Nilai Ambang Batas / NAB Nasional).
2. **ACGIH TLVs and BEIs (2024–2026)**: *Threshold Limit Values for Chemical Substances and Physical Agents*.
3. **OSHA 29 CFR 1910.95**: *Occupational Noise Exposure Standard*.
4. **NIOSH Manual of Analytical Methods (NMAM 5th Edition)**.

---

## 2. Pengukuran & Perhitungan Kebisingan Industri (Noise Exposure)

### A. Konversi Dosis Kebisingan Menjadi Time-Weighted Average (TWA):
Jika pekerja terpapar beberapa tingkat kebisingan yang berbeda ($L_i$ dalam dBA) selama durasi $C_i$ jam pada hari kerja 8 jam:

#### 1. Dosis Kumulatif ($D$ dalam %):
$$D = 100 \times \sum_{i=1}^{n} \frac{C_i}{T_i} \%$$

Di mana $T_i$ adalah waktu paparan maksimum yang diizinkan pada tingkat kebisingan $L_i$. Berdasarkan Permenaker 5/2018 dan OSHA (dengan *Exchange Rate* $Q = 3\text{ dBA}$ atau $5\text{ dBA}$):

$$T_i = \frac{8}{2^{(L_i - 85)/3}} \quad (\text{Basis Permenaker/NIOSH } Q=3\text{ dBA, NAB } 85\text{ dBA})$$

$$T_i = \frac{8}{2^{(L_i - 90)/5}} \quad (\text{Basis OSHA PEL } Q=5\text{ dBA, PEL } 90\text{ dBA})$$

#### 2. Ekuivalen Tingkat Kebisingan 8 Jam ($L_{\text{TWA}}$ dBA):
Berdasarkan dosis $D$ yang diukur oleh personal noise dosimeter:

$$L_{\text{TWA}} = 16.61 \log_{10}\left(\frac{D}{100}\right) + 85 \quad (\text{untuk } Q=3)$$

$$L_{\text{TWA}} = 16.61 \log_{10}\left(\frac{D}{100}\right) + 90 \quad (\text{untuk } Q=5)$$

#### 3. Penjumlahan Logaritmik Multi-Sumber Suara (Sound Pressure Level):
Jika terdapat $n$ mesin yang beroperasi simultan dengan tingkat suara $SPL_i$:

$$SPL_{\text{total}} = 10 \log_{10}\left( \sum_{i=1}^{n} 10^{\frac{SPL_i}{10}} \right) \text{ dBA}$$

---

## 3. Evaluasi Iklim Kerja Panas: Indeks Suhu Basah dan Bola (ISBB / WBGT)

Berdasarkan Permenaker 5/2018 Lampiran 1.B dan ISO 7243:

### A. Formula Matematis ISBB (Wet Bulb Globe Temperature):
1. **Untuk Ruangan Tertutup / Luar Ruangan Tanpa Radiasi Matahari Langsung**:
   $$\text{ISBB} = 0.7 T_{\text{wb}} + 0.3 T_{\text{g}}$$
2. **Untuk Luar Ruangan Dengan Radiasi Sinar Matahari Langsung**:
   $$\text{ISBB} = 0.7 T_{\text{wb}} + 0.2 T_{\text{g}} + 0.1 T_{\text{db}}$$

Di mana:
- $T_{\text{wb}}$ (*Natural Wet Bulb Temperature*): Suhu basah alami (°C).
- $T_{\text{g}}$ (*Globe Temperature*): Suhu bola radiasi termal (°C, bola tembaga hitam diameter 15 cm).
- $T_{\text{db}}$ (*Dry Bulb Temperature*): Suhu udara kering (°C).

### B. Nilai Ambang Batas ISBB Berdasarkan Beban Kerja Fisik (Permenaker 5/2018):
| Alokasi Kerja : Istirahat per Jam | Beban Kerja Ringan ($< 200\text{ kcal/jam}$) | Beban Kerja Sedang ($200 - 350\text{ kcal/jam}$) | Beban Kerja Berat ($> 350\text{ kcal/jam}$) |
| :--- | :---: | :---: | :---: |
| **75% - 100% Kerja Kontinu** | $31.0^\circ\text{C}$ | $28.0^\circ\text{C}$ | $25.0^\circ\text{C}$ |
| **50% - 75% Kerja (25% Istirahat)** | $31.0^\circ\text{C}$ | $29.0^\circ\text{C}$ | $26.5^\circ\text{C}$ |
| **25% - 50% Kerja (50% Istirahat)** | $32.0^\circ\text{C}$ | $30.0^\circ\text{C}$ | $28.0^\circ\text{C}$ |
| **0% - 25% Kerja (75% Istirahat)** | $32.5^\circ\text{C}$ | $31.5^\circ\text{C}$ | $30.0^\circ\text{C}$ |

---

## 4. Sampling Partikulat Debu Udara Lingkungan Kerja (Metode Gravimetri NIOSH 0500/0600)

Pengukuran konsentrasi debu total (*Total Dust*) atau debu respirabel (*Respirable Dust*) menggunakan *Personal Dust Sampler Pump* dengan filter membran MCE (*Mixed Cellulose Ester*) porositas $0.8\ \mu\text{m}$ atau filter PVC $5.0\ \mu\text{m}$ ber-cyclone.

### Formulasi Konsentrasi Debu ($C$ dalam $\text{mg/m}^3$):
$$C = \frac{(W_2 - W_1) - (B_2 - B_1)}{V_{\text{std}}} \times 10^3$$

Di mana:
- $W_1, W_2$: Berat filter sampel sebelum dan sesudah sampling (mg).
- $B_1, B_2$: Berat filter *blanko* kontrol sebelum dan sesudah sampling (mg).
- $V_{\text{std}}$: Volume udara sampel terkoreksi pada kondisi standar ($25^\circ\text{C}, 1\text{ atm}$) dalam liter:

$$V_{\text{std}} = Q \times t \times \left( \frac{298.15}{273.15 + T} \right) \times \left( \frac{P}{760} \right)$$

Di mana $Q$ adalah laju alir pompa (e.g., $1.7 - 2.0\text{ L/min}$), $t$ adalah durasi sampling (menit), $T$ suhu aktual (°C), dan $P$ tekanan udara aktual (mmHg).

---

## 5. Standar Intensitas Penerangan Ruang Kerja Industri (Permenaker 5/2018)

| Jenis Area / Aktivitas Pekerjaan | Intensitas Minimal (Lux) | Contoh Lokasi Industri |
| :--- | :---: | :--- |
| **Pekerjaan Sangat Kasar / Lorong Gudang** | $50 - 100\text{ Lux}$ | Area penyimpanan palet, koridor bongkar muat |
| **Pekerjaan Kasar / Mesin Berat** | $100 - 200\text{ Lux}$ | Penempaan baja, ruang boiler, pengecoran logam |
| **Pekerjaan Menengah / Bengkel Mesin** | $200 - 300\text{ Lux}$ | Bubut, frais, perakitan mesin standar, kantor |
| **Pekerjaan Halus / Perakitan Teliti** | $500 - 1000\text{ Lux}$ | Perakitan PCB elektronika, penjahitan pakaian |
| **Pekerjaan Sangat Halus & Inspeksi QC** | $> 1000\text{ Lux}$ | Inspeksi permukaan cacat mikro, kalibrasi instrumen |

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Kementerian Ketenagakerjaan Republik Indonesia. (2018). *Peraturan Menteri Ketenagakerjaan No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja*. Jakarta: Kemnaker RI.
- American Conference of Governmental Industrial Hygienists. (2024). *TLVs and BEIs Based on the Documentation of the Threshold Limit Values for Chemical Substances and Physical Agents*. Cincinnati: ACGIH.
- National Institute for Occupational Safety and Health. (2020). *NIOSH Manual of Analytical Methods (NMAM)* (5th ed.). Centers for Disease Control and Prevention.
- Situmorang, H. N., & Sitorus, F. H. (2023). *Analysis of industrial hygiene and ergonomic risks in mechanical fabrication workshops*. Journal of Industrial Engineering and Hygiene Management, 11(2), 151-166.
- Pratama, A. Z. W., & Wardana, H. (2025). *Occupational physical hazard exposure modeling and ambient microclimate evaluation in heavy manufacturing plants*. International Journal of Environmental and Occupational Health, 17(1), 88-102.
