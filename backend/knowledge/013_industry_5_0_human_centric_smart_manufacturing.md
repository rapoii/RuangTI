# Modul Riset Ilmiah: Industry 5.0, Human-Centric Manufacturing, & Collaborative Robotics (Cobots)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref & Google Scholar Validated - 2019-2025):**
- Turner, C., & Oyekan, J. (2023). *Manufacturing in the Age of Human-Centric and Sustainable Industry 5.0: Application to Holonic, Flexible, Reconfigurable and Smart Manufacturing Systems*. Sustainability, 15(13), 10169. DOI: [10.3390/su151310169](https://doi.org/10.3390/su151310169).
- Zhang, C., Wang, Z., Zhou, G., Chang, F., Ma, D., dkk. (2023). *Towards new-generation human-centric smart manufacturing in Industry 5.0: A systematic review*. Advanced Engineering Informatics, 57, 102124. DOI: [10.1016/j.aei.2023.102124](https://doi.org/10.1016/j.aei.2023.102124).
- Wang, B., Zheng, P., Wang, L., & Mourtzis, D. (2025). *Human-centric smart manufacturing towards Industry 5.0*. Springer Nature. ISBN: 978-3031821707.
- Xu, X., Lu, Y., Vogel-Heuser, B., & Wang, L. (2021). *Industry 4.0 and Industry 5.0 — Inception, conception and perception*. Journal of Manufacturing Systems, 61, 530-535.
- Nahavandi, S. (2019). *Industry 5.0 — A human-centric solution*. Sustainability, 11(16), 4377.
- Romero, D., Stahre, J., & Taisch, M. (2020). *The Operator 4.0: Towards socially sustainable factories of the future*. Computers & Industrial Engineering, 139, 106128.
- ISO/TS 15066:2016. *Robots and robotic devices — Collaborative robots*. International Organization for Standardization.
- Breque, M., De Nul, L., & Petridis, A. (2021). *Industry 5.0: Towards a Sustainable, Human-Centric and Resilient European Industry*. European Commission, DG Research & Innovation.

---

## 1. Konsep Dasar: Paradigma Industry 5.0 dan Kolaborasi Manusia-Mesin

Jika **Industry 4.0** berfokus pada digitalisasi menyeluruh, otomatisasi penuh, konektivitas IoT, dan efisiensi berbasis data (*technology-driven*), maka **Industry 5.0** (didefinisikan resmi oleh European Commission, 2021) mengembalikan pusat gravitasi sistem industri kepada manusia melalui tiga pilar utama:

1. **Human-Centricity (Berpusat pada Manusia):** Menempatkan keselamatan, kesehatan mental-fisik, otonomi kerja, dan kreativitas operator di atas target otomasi semata; teknologi dirancang mengikuti manusia (*worker-centric technology design*), bukan sebaliknya.
2. **Sustainability (Keberlanjutan):** Reduksi jejak karbon, emisi gas rumah kaca, siklus hidup sirkular produk, serta efisiensi energi lantai pabrik.
3. **Resilience (Ketangguhan Sistem):** Fleksibilitas dan kemampuan rekonfigurasi sistem produksi agar bertahan dari disrupsi global (pandemi, kelangkaan komponen, gejolak geopolitik).

### Human-Robot Collaboration (HRC) & Cobot
Robot kolaboratif (*cobots*) tidak lagi dipagari dalam kandang isolasi (*fenced cage*), melainkan berbagi ruang kerja (*shared workspace*) dengan operator sesuai standar keamanan ISO/TS 15066. Empat moda operasi kolaboratif:
1. **Safety-Rated Monitored Stop:** Robot berhenti terkontrol saat manusia memasuki zona kerja bersama.
2. **Hand Guiding:** Operator memandu ujung efektor robot secara langsung.
3. **Speed and Separation Monitoring (SSM):** Kecepatan robot diskalakan menurun secara dinamis seiring mengecilnya jarak relatif terhadap manusia.
4. **Power and Force Limiting (PFL):** Batas energi kinetik dan gaya kontak dibatasi di bawah ambang nyeri/cedera tubuh manusia (biomekanika kulit dan tulang per ISO/TS 15066).

### Pembagian Beban Kerja HRC
- **Operator manusia:** tugas dengan fleksibilitas tinggi, penilaian visual kualitatif kompleks, *dexterity* halus, dan pengambilan keputusan situasional.
- **Cobot:** tugas repetitif, pengangkatan beban melebihi batas RWL NIOSH, operasi berisiko kimia/panas, pengetatan torsi presisi tinggi.

## 2. Formulasi Matematis

### A. Optimasi Alokasi Tugas Manusia-Cobot (Task Allocation MILP)
Untuk himpunan tugas $j = 1,\dots,n$ dan agen $i \in \{H, R\}$ (Manusia, Robot), variabel biner $x_{ij} = 1$ jika tugas $j$ dialokasikan ke agen $i$:

$$
\min \; \sum_{j=1}^{n}\sum_{i \in \{H,R\}} \big(w_1\,C_{ij} + w_2\,F_{ij}\big)\,x_{ij}
\qquad \text{s.t.} \quad \sum_{i \in \{H,R\}} x_{ij} = 1,\;\; \forall j
$$

dengan $C_{ij}$ = biaya/waktu eksekusi, $F_{ij}$ = indeks beban ergonomis, dan $w_1, w_2$ bobot preferensi manajemen.

### B. Model Akumulasi Kelelahan Operator (Fatigue-Recovery Dynamics)
Kelelahan muskuloskeletal dinormalisasi pada rentang $[0,1]$ dan berevolusi diskrit antar periode $\Delta t$:

$$
F_H(k+1) = F_H(k)\,e^{-\delta \Delta t} + \rho \sum_{j} f_j\, x_{H,j}(k)\,\Delta t, \qquad 0 \le F_H(k) \le F_{\max}
$$

dengan $\delta$ laju pemulihan (recovery rate), $\rho$ koefisien akumulasi, dan $f_j$ intensitas beban tugas $j$. Ketika $F_H$ mendekati $F_{\max}$, sistem HDT memicu rotasi tugas atau penjadwalan istirahat mikro.

### C. Beban Kerja Mental (Weighted NASA-TLX)
Skor beban kerja mental agregat dari enam dimensi dengan bobot perbandingan berpasangan $w_i$ ($\sum w_i = 15$):

$$
WWL = \sum_{i=1}^{6}\frac{w_i}{15}\,R_i, \qquad R_i \in [0,100]
$$

### D. Indikator Resiliensi & Keberlanjutan
Resiliensi throughput terhadap disrupsi selama horizon $T$:

$$
RI = \frac{1}{T}\int_0^T \frac{TP(t)}{TP^*}\,dt
$$

Intensitas energi spesifik sebagai EnPI keberlanjutan: $SEC = E/Q$ (kWh per unit output), dipantau bersama emisi Scope 1-2 per unit produk.

## 3. Metode Solusi & Arsitektur Sistem (Human Digital Twin)

**Human Digital Twin (HDT)** adalah replika virtual operator yang diperbarui real-time:
1. **Sense:** sensor IMU wearable, pelacak skeleton visi komputer, EEG/HRV untuk deteksi tekanan kognitif.
2. **Infer:** klasifikasi postur RULA/REBA otomatis, estimasi kelelahan $F_H(k)$, skor NASA-TLX adaptif.
3. **Act:** penskalaan kecepatan cobot $v_r = v_{\max}\left(1 - \frac{d_s}{d}\right)$ saat jarak manusia-robot $d$ mendekati radius aman $d_s$ (zona SSM), alarm ergonomis, dan re-alokasi tugas melalui solver MILP (Branch-and-Bound / CBC / Gurobi).

Algoritma alokasi tugas dinamis dieksekusi ulang setiap kali terjadi: kedatangan order baru, perubahan status kelelahan operator, atau gangguan mesin — menjadikan sel HRC sebuah *cyber-physical system* adaptif.

## 4. Aplikasi di Industrial Engineering

- **Assembly & Kitting:** cobot melakukan picking/palletizing repetitif; operator menangani fitur presisi dan inspeksi visual — desain stasiun hibrida dengan analisis waktu siklus gabungan.
- **Ergonomi Proaktif:** integrasi HDT dengan RWL NIOSH dan OCRA untuk mencegah gangguan muskuloskeletal (IMD) sebelum cedera terjadi.
- **Penjadwalan Sadar-Manusia:** production scheduling dengan kendala kelelahan dan rotasi stasiun (job rotation matrix) berbasis skor beban kerja.
- **Digital Twin Pabrik:** simulasi DES sel HRC untuk mengoptimalkan takt time, buffer, dan skenario disrupsi (evaluasi $RI$).
- **UMKM & High-Mix Low-Volume:** cobot low-payload sebagai otomasi terjangkau tanpa menghilangkan fleksibilitas keterampilan operator (Operator 4.0).

## 5. Referensi Terverifikasi

1. Turner, C., & Oyekan, J. (2023). Sustainability, 15(13), 10169. DOI: 10.3390/su151310169.
2. Zhang, C., dkk. (2023). Advanced Engineering Informatics, 57, 102124. DOI: 10.1016/j.aei.2023.102124.
3. Wang, B., Zheng, P., Wang, L., & Mourtzis, D. (2025). *Human-centric smart manufacturing towards Industry 5.0*. Springer Nature. ISBN: 978-3031821707.
4. Xu, X., Lu, Y., Vogel-Heuser, B., & Wang, L. (2021). Journal of Manufacturing Systems, 61, 530-535.
5. Nahavandi, S. (2019). Sustainability, 11(16), 4377.
6. Romero, D., Stahre, J., & Taisch, M. (2020). Computers & Industrial Engineering, 139, 106128.
7. ISO/TS 15066:2016. *Collaborative robots*. ISO.
8. Breque, M., De Nul, L., & Petridis, A. (2021). *Industry 5.0 Policy Report*. European Commission.
