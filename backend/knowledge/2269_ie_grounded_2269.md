# 2269 — Perilaku dan Karakterisasi Kerak Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) melonjak tajam seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi stasioner. Lebih dari 70% cadangan nikel dunia tersimpan dalam bijih laterit, yang hanya dapat diekstraksi secara ekonomis melalui proses *High-Pressure Acid Leaching* (HPAL). Dalam unit autoclave HPAL, bijih laterit direaksikan dengan asam sulfat pada suhu 240–270 °C dan tekanan 35–55 bar, menghasilkan leburan (*pregnant leach solution*, PLS) yang kaya akan nikel dan kobalt (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Salah satu masalah operasional paling kronis dalam industri HPAL adalah pembentukan *scaling* atau kerak pada dinding, impeller, dan pipa penukar panas autoclave. Kerak ini terutama terbentuk dari endapan besi oksida-hidroksida (goethite/hematit), aluminium hidroksida (gibbsit/diaspor), dan magnesium silikat hidrat yang mengendap ketika larutan jenuh didinginkan atau ketika pH lokal berubah akibat reaksi. Dickson, Deleau, dan Espitalier (2026) menunjukkan bahwa perilaku kerak ini sangat tergantung pada komposisi mineralogi umpan (limonit vs. saprolit), suhu operasi, dan densitas pulp (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Dampaknya sangat material: penurunan koefisien perpindahan panas hingga 40–60%, peningkatan konsumsi energi spesifik, dan *unplanned shutdown* yang dapat merugikan operator hingga USD 2–5 juta per kejadian (Andrameda dkk., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Konteks keekonomiannya sangat relevan bagi Indonesia yang merupakan produsen nikel laterit terbesar di dunia melalui proyek seperti PT Halmahera Persada Lygend, Huayou Cobalt Morowali, dan QMB Energi Morowali. Efisiensi autoclave secara langsung menentukan *payback period* proyek HPAL yang umumnya berada pada kisaran USD 1,5–3 miliar dengan *payback* 7–12 tahun. Andrameda, Triaswinanti, dan Madra (2024) menambahkan dimensi rekayasa lanjutan berupa pra-perlakuan desulfurisasi dan *roasting-reduction* untuk memodifikasi karakteristik residu HPAL sehingga mengurangi potensi fouling dan meningkatkan recovery nikel residual (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Dengan demikian, kemampuan untuk mengkarakterisasi, memprediksi, dan mengendalikan perilaku kerak autoclave menjadi kompetensi inti seorang *process engineer* dan *plant manager* dalam industri metalurgi hidrometalurgi. Modul ini membahas secara sistematis fondasi teoretis, formulasi kinetik, metodologi SOP, studi kasus kuantitatif, dan arah riset masa depan sesuai literatur riil tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Inti Menyusut (Shrinking Core Model)

Model matematis dominan yang digunakan untuk menggambarkan pelindian bijih nikel laterit adalah *Shrinking Unreacted Core Model* (SCM) yang diaplikasikan Dickson dkk. (2026) untuk mengkuantifikasi laju ekstraksi Ni, Co, Fe, dan Mg (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Untuk partikel sferis dengan jari-jari awal $r_0$, waktu yang dibutuhkan untuk konversi fraksional $X$ mengikuti hubungan:

$$t = \tau \cdot \left[ 1 - (1-X)^{1/3} \right]$$

dengan waktu karakteristik $\tau$:

$$\tau = \frac{\rho_B \cdot r_0}{b \cdot k_s \cdot C_{A,b}}$$

di mana $\rho_B$ adalah densitas molar padatan, $b$ koefisien stoikiometri, $k_s$ konstanta laju reaksi permukaan (m/s), dan $C_{A,b}$ konsentrasi bulk reaktan asam sulfat (mol/m³).

### 2.2 Persamaan Arrhenius untuk Dependensi Suhu

Dickson dkk. (2026) menetapkan konstanta laju sebagai fungsi suhu dengan persamaan Arrhenius:

$$k_s = A \cdot \exp\!\left(-\frac{E_a}{R T}\right)$$

dengan $A$ faktor pre-eksponensial, $E_a$ energi aktivasi (kJ/mol), $R = 8{,}314$ J/(mol·K), dan $T$ suhu absolut (K). Untuk sistem nikel laterit–asam sulfat, energi aktivasi tipikal berada pada rentang $E_a = 45$–$78$ kJ/mol (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

### 2.3 Model Pertumbuhan Kerak (Scaling Growth Kinetics)

Pertumbuhan ketebalan kerak $\delta(t)$ pada permukaan autoclave dapat dimodelkan dengan persamaan *deposit formation* orde satu terhadap konsentrasi jenuh:

$$\frac{d\delta}{dt} = k_d \!\left( C_b - C_{sat}(T) \right) - k_r$$

di mana $k_d$ adalah koefisien deposisi (m/s), $C_b$ konsentrasi bulk ion pembentuk kerak (Fe³⁺, Al³⁺, Mg²⁺), $C_{sat}(T)$ konsentrasi saturasi tergantung suhu, dan $k_r$ laju *re-dissolution* termal. Andrameda dkk. (2024) menunjukkan bahwa penambahan agen desulfurisasi (mis. Na₂CO₃ atau CaO) menurunkan $C_b$ Mg dan Fe sehingga memperlambat laju akresi kerak (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

### 2.4 Hukum Fourier Termal dengan Resistansi Kerak

Koefisien perpindahan panas keseluruhan $U$ dihitung dengan penjumlahan resistansi:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{wall}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

Dampak kerak terhadap efisiensi termal tampak dari rasio:

$$\eta_{scale} = \frac{U_{fouled}}{U_{clean}} = \left[ 1 + \frac{\delta_{scale} \cdot h_i}{k_{scale}} \right]^{-1}$$

Untuk kerak hematit dengan $k_{scale} \approx 0{,}25$–$0{,}6$ W/(m·K), penurunan $\eta_{scale}$ menjadi 0,4–0,6 lazim diamati pada operasi HPAL 60–90 hari (Dickson dkk., 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dan Titik-Titik Kritis Scaling

Diagram alir proses HPAL secara umum terdiri dari: (1) *slurry preparation* (densitas pulp 28–35% w/w), (2) pemanasan awal dengan *heater train* (shell-and-tube), (3) autoclave Multi-Compartment (3–6 *compartments*) dengan agitasi, (4) *flash let-down* dan pendinginan bertahap, (5) *counter-current decantation* (CCD), dan (6) *neutralization* dengan MgO atau batu kapur (Dickson dkk., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Titik-titik kritis pembentukan kerak adalah *preheater* terakhir, dinding antar-kompartemen, dan *flash tank*.

### 3.2 SOP Pengendalian Kerak Autoclave

Berikut adalah prosedur standar berbasis literatur Dickson dkk. (2026) dan Andrameda dkk. (2024):

1. **Pra-perlakuan umpan (feed conditioning):** Penghilangan sulfida melalui *roasting* pada 650–750 °C selama 60–90 menit jika konsentrasi S > 0,5%. Andrameda dkk. (2024) menunjukkan bahwa *roasting-reduction* dengan kokas 5–8% w/w menurunkan sulfur dari 1,8% menjadi 0,3% (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

2. **Pengaturan densitas pulp:** Pertahankan pada 30 ± 2% w/w. Kepadatan terlalu tinggi → viskositas tinggi → perpindahan massa buruk; terlalu rendah → underutilisasi autoclave.

3. **Kontrol suhu gradien:** Suhu masuk 230–240 °C, suhu keluar 250–270 °C dengan gradien terkontrol untuk mencegah *shock cooling* yang memicu pengendapan tiba-tiba.

4. **Dosis asam sulfat berlebih (free acid):** Jaga *free acid* 30–50 g/L H₂SO₄ untuk menjaga Fe dalam fase larut sebagai FeSO₄, bukan Fe₂O₃·nH₂O.

5. **Acid wash periodik:** Setiap 30–60 hari operasi, lakukan *acid boil-out* dengan H₂SO₄ 10–15% pada 80–95 °C selama 6–8 jam untuk melarutkan kerak Al dan sebagian Fe.

6. **Monitoring online:** Pasang *heat flux sensor* dan *pressure differential transmitter* untuk mendeteksi kenaikan resistansi termal yang merupakan indikator awal fouling.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Operasi Pabrik Acuan

Berdasarkan Dickson dkk. (2026) dan karakteristik proyek HPAL standar industri, ambil parameter berikut (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)):

- Laju umpan bijih laterit: $F = 250$ t/jam (limonit 1,3% Ni, 38% Fe, 4,5% MgO)
- Suhu operasi autoclave: $T = 260\,°\text{C} = 533{,}15$ K
- Tekanan operasi: $P = 44$ bar
- Konsentrasi H₂SO₄ umpan: $C_{A,b} = 1{,}8$ mol/L $= 1\,800$ mol/m³
- Jari-jari partikel bijih rerata: $r_0 = 75\,\mu\text{m} = 7{,}5 \times 10^{-5}$ m
- Densitas molar bijih: $\rho_B = 2\,800$ kg/m³

### 4.2 Perhitungan Konversi Ni pada 60 Menit Pertama

Asumsikan koefisien stoikiometri $b = 1$ (reaksi NiO + H₂SO₄ → NiSO₄ + H₂O) dan konstanta laju permukaan $k_s = 4{,}5 \times 10^{-6}$ m/s pada 533 K (DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Hitung waktu karakteristik:

$$\tau = \frac{2\,800 \cdot 7{,}5 \times 10^{-5}}{1 \cdot 4{,}5 \times 10^{-6} \cdot 1\,800} = \frac{0{,}210}{8{,}1 \times 10^{-3}} \approx 25{,}93 \text{ s}$$

Untuk $t = 3\,600$ s (60 menit):

$$1 - (1-X)^{1/3} = \frac{t}{\tau} = \frac{3\,600}{25{,}93} \approx 138{,}8$$

Karena rasio ini > 1, artinya konversi sudah melebihi 99% (complete leaching), konsisten dengan