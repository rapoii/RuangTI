# Modul Riset Ilmiah: Ergonomi Kognitif, Beban Kerja Mental (NASA-TLX), & Human Reliability
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Hart, S. G., & Staveland, L. E. (1988). *Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research*. Advances in Psychology, 52, 139-183. North-Holland.
- Hart, S. G. (2006). *NASA-Task Load Index (NASA-TLX); 20 years later*. Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 50(5), 904-908.
- Wickens, C. D., Helton, W. S., Hollands, J. G., & Banbury, S. (2021). *Engineering Psychology and Human Performance* (5th ed.). Routledge. ISBN: 978-0367205423.
- Swain, A. D., & Guttmann, H. E. (1983). *Handbook of Human Reliability Analysis with Emphasis on Nuclear Power Plant Applications* (THERP). NUREG/CR-1278, US NRC.
- Hollnagel, E. (1998). *Cognitive Reliability and Error Analysis Method (CREAM)*. Elsevier.
- Kirwan, B. (1994). *A Guide to Practical Human Reliability Assessment*. Taylor & Francis.
- Grier, R. A. (2015). *How high is high? A meta-analysis of NASA-TLX global workload scores*. Human Factors, 57(6), 1017-1027.

---

## 1. Konsep Dasar Ergonomi Kognitif

Dalam lingkungan industri modern yang didominasi otomatisasi, ruang kendali SCADA/DCS, dan pemantauan sistem, beban fisik operator berkurang tetapi **beban kerja mental (*cognitive workload*)** meningkat tajam: diagnosis alarm, pemantauan multi-layar, dan pengambilan keputusan waktu-kritis. Menurut hubungan Yerkes-Dodson (inverted-U), performa manusia optimal hanya pada tingkat arousal/beban sedang:
- **Underload:** kebosanan dan penurunan kewaspadaan (*vigilance decrement*) — khas tugas monitoring panjang.
- **Overload:** stres, tunneling perhatian, dan lonjakan kesalahan manusia (*human error*).

Teori landasan desain antarmuka adalah **Multiple Resource Theory (Wickens)**: modalitas visual-auditor, tahap persepsi-kognisi-respon, dan kode spasial-verbal menempati sumber daya kognitif yang berbeda — tugas paralel harus dipetakan ke sumber daya yang tidak saling berebut.

## 2. Formulasi Matematis

### A. Metodologi NASA-Task Load Index (NASA-TLX)
Enam dimensi beban kerja: **Mental Demand (MD), Physical Demand (PD), Temporal Demand (TD), Performance (OP), Effort (EF), Frustration Level (FR)** — masing-masing dirating $R_i \in [0,100]$ pada skala kontinu 5 titik.

Prosedur versi tertimbang (*Weighted Workload*):
1. **Pairwise comparisons:** operator membandingkan $\binom{6}{2}=15$ kombinasi pasangan dimensi; bobot dominansi $w_i \in [0,5]$ dengan $\sum_{i=1}^{6} w_i = 15$.
2. **Skor akhir tertimbang:**
$$
WWL = \sum_{i=1}^{6}\left(\frac{w_i}{15}\times R_i\right)
$$
3. Interpretasi umum: $0-29$ rendah; $30-49$ sedang; $50-79$ tinggi; $80-100$ sangat tinggi (zona rawan human error). Varian **Raw TLX** menghitung rata-rata sederhana $\frac{1}{6}\sum R_i$ tanpa pembobotan; meta-analisis Grier (2015) memberi acuan banding antar-studi.

### B. Human Reliability Analysis (HRA) — THERP
Probabilitas kesalahan manusia (*Human Error Probability*, HEP) untuk rangkaian sub-tugas independen dalam event tree:

$$
P_{\text{sukses}} = \prod_{i=1}^{n}(1 - P_i), \qquad HEP = 1 - P_{\text{sukses}}
$$

Koreksi faktor performa situasi (*Performance Shaping Factors*: stres, kelelahan, kualitas HMI, pelatihan):

$$
HEP_{adj} = HEP_{base} \times \prod_k PSF_k
$$

Nilai $HEP_{base}$ diambil dari tabel THERP NUREG/CR-1278 (misal: membaca indikator analog $\approx 10^{-2}$; seleksi kontrol salah label $\approx 3\times10^{-3}$).

## 3. Metode Solusi / Prosedur Penilaian

1. **Prosedur NASA-TLX lapangan:** definisi tugas → instruksikan skala → isi rating pasca-tugas → 15 perbandingan berpasangan → hitung $WWL$ → bandingkan antar kondisi desain (uji-t/Wilcoxon antar konfigurasi HMI).
2. **Alur HRA THERP:** analisis tugas (HTA) → identifikasi kesalahan potensial (omission/commission) → bangun event tree → ambil HEP dasar → terapkan PSF → hitung HEP sistem → evaluasi terhadap target risiko.
3. **Metode pendukung:** CREAM (Hollnagel) untuk konteks kognitif umum; SPAR-H untuk faktor biner sederhana; SHERPA untuk klasifikasi error eksternal.
4. **Desain mitigasi:** redesign alarm (prioritas & deduplikasi), chunking informasi, decision support otomatis, rotasi tugas, dan pelatihan simulator.

## 4. Aplikasi di Industrial Engineering

- **Control Room SCADA/DCS pabrik proses:** audit beban mental operator shift; validasi layout alarm baru dengan penurunan $WWL$ signifikan.
- **Perakitan presisi & inspeksi visual:** kombinasi beban kognitif-perseptif; penentuan jeda mikro untuk mencegah vigilance decrement.
- **Aviation/maintenance MRO:** HRA THERP pada prosedur perakitan mesin untuk kuantifikasi risiko kesalahan instalasi.
- **Ergonomi Kognitif Cobots (Industry 5.0):** kalibrasi otonomi robot agar beban supervisi operator berada di zona optimal.
- **Human-in-the-loop AI:** evaluasi trust & complacency saat keputusan dialihkan ke sistem rekomendasi.

## 5. Referensi Terverifikasi

1. Hart, S. G., & Staveland, L. E. (1988). Advances in Psychology, 52, 139-183.
2. Hart, S. G. (2006). Proceedings of the HFES Annual Meeting, 50(5), 904-908.
3. Wickens, C. D., dkk. (2021). *Engineering Psychology and Human Performance* (5th ed.). Routledge. ISBN: 978-0367205423.
4. Swain, A. D., & Guttmann, H. E. (1983). NUREG/CR-1278, US Nuclear Regulatory Commission.
5. Hollnagel, E. (1998). *CREAM*. Elsevier.
6. Kirwan, B. (1994). *A Guide to Practical Human Reliability Assessment*. Taylor & Francis.
7. Grier, R. A. (2015). Human Factors, 57(6), 1017-1027.
