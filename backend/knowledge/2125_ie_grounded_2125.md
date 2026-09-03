# 2125 — Analisis Pembentukan dan Karakterisasi Kerak Autoclave pada Proses High Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Bidang Hidrometalurgi, Perpindahan Panas, dan Keandayaan Pabrik
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak signifikan seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi stasioner. Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel dunia namun hanya ~40% produksi, menjadi perhatian strategis karena kendala teknis dan lingkungan dalam pengolahannya (Dickson, Deleau, & Espitalier, 2026). High Pressure Acid Leaching (HPAL) adalah teknologi hidrometalurgi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit jenis limonitik dan intermediet pada suhu 240–270 °C dan tekanan 35–45 bar dalam autoclave titanium-clad. Akan tetapi, salah satu tantangan operasional paling kritis yang menghambat keekonomian HPAL adalah pembentukan **kerak (scale)** pada dinding internal, pipa pendingin, dan impeller autoclave.

Menurut Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems*, perilaku kerak autoclave—yang utamanya tersusun atas hematit ($\text{Fe}_2\text{O}_3$), alunit ($\text{KAl}_3(\text{SO}_4)_2(\text{OH})_6$), jarosit ($\text{KFe}_3(\text{SO}_4)_2(\text{OH})_6$), dan anhydrit ($\text{CaSO}_4$)—mempengaruhi langsung efisiensi perpindahan panas, konsumsi asam sulfat, kapasitas produksi, dan *plant availability*. Studi ini menekankan bahwa karakterisasi kuantitatif laju deposisi kerak, komposisi mineralogis, serta morfologi permukaan merupakan prasyarat untuk desain strategi *anti-scaling* dan penjadwalan *downtime* yang optimal. Pendekatan ini selaras dengan semangat *cleaner production* dan minimisasi limbah B3 (sludge tailing).

Urgensi ekonomi sangat jelas. Pada pabrik HPAL berskala komersial dengan kapasitas 30.000–50.000 ton nikel per tahun, kehilangan kapasitas efektif 5–15% akibat fouling kerak dapat mengurangi pendapatan tahunan hingga puluhan juta USD. Sebagai konteks pembanding, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* meneliti efek *desulfurization agent* dan suhu roasting-reduction pada residu HPAL, menyoroti bahwa proses pirometalurgi lanjutan (misalnya *reduction kiln* + *electric arc furnace*) sangat bergantung pada kemurnian dan komposisi residue yang dipengaruhi langsung oleh efisiensi leaching di autoclave—di mana fouling menghambat reaksi dan mengubah profil produk. Dengan kata lain, permasalahan kerak di hulu (autoclave) memiliki efek domino terhadap kualitas residue, konsumsi reagen, dan jejak karbon hilir. Karena itu, pemahaman *scaling behaviour* bukan sekadar isu pemeliharaan, melainkan variabel strategis dalam rantai nilai nikel laterit.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Asam — Shrinking Core Model (SCM)

Untuk partikel bijih laterit yang bersifat berpori dan reaktif, kinetika ekstraksi nikel pada autoclave HPAL dapat didekati dengan *shrinking core model* versi difusi melalui lapisan produk:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_A^n}{r_p^2 \cdot \rho_p} \cdot t$$

di mana $\alpha$ adalah fraksi nikel terekstraksi, $k_d$ konstanta difusi efektif (m²/s), $C_A$ konsentrasi asam sulfat bebas (mol/L), $n$ orde reaksi terhadap $\text{H}_2\text{SO}_4$ (umumnya 1–2), $r_p$ radius partikel (m), dan $\rho_p$ densitas partikel (kg/m³). Energi aktivasi mengikuti persamaan Arrhenius:

$$k_d = k_0 \exp\left(-\frac{E_a}{R T}\right)$$

dengan $E_a$ berkisar 50–85 kJ/mol untuk leaching nikel dari limonit, menunjukkan rezim dikendalikan oleh reaksi kimia permukaan (*chemical control*) (Dickson, Deleau, & Espitalier, 2026).

### 2.2 Laju Pertumbuhan Kerak — Kinetika Deposisi

Pertumbuhan ketebalan kerak $\delta_s$ terhadap waktu operasional $t$ sering dimodelkan sebagai kombinasi *deposition* dan *removal* (akibat shear agitator):

$$\frac{d\delta_s}{dt} = \frac{\dot{m}_d}{\rho_s} - k_r \cdot \tau_w \cdot \delta_s$$

di mana $\dot{m}_d$ adalah fluks massa terdeposit (kg/(m²·s)), $\rho_s$ densitas kerak (~3.200–4.200 kg/m³ untuk hematit), $k_r$ koefisien erosi, dan $\tau_w$ tegangan geser dinding. Bentuk terintegrasi untuk fase awal (removal kecil):

$$\delta_s(t) = \delta_{s,\infty} \left[1 - \exp\left(-\frac{t}{\tau_s}\right)\right]$$

dengan $\tau_s$ konstanta waktu deposisi karakteristik (Dickson, Deleau, & Espitalier, 2026).

### 2.3 Perpindahan Panas dengan Resistansi Fouling

Koefisien perpindahan panas keseluruhan $U$ di antara slurry dan steam pemanas melalui dinding autoclave:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_w}{k_w} + \frac{\delta_s}{k_s} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi di sisi slurry dan steam, $\delta_w$ dan $k_w$ ketebalan serta konduktivitas dinding baja karbon/Ti-clad, $\delta_s$ ketebalan kerak, dan $k_s$ konduktivitas termal efektif kerak (umumnya 0,3–1,2 W/(m·K) untuk hematit porous, jauh lebih rendah dibanding baja ~45 W/(m·K)). Penurunan $U$ akibat $\delta_s$ yang tumbuh mengikuti:

$$\frac{U(t)}{U_0} = \left[1 + \frac{U_0 \cdot \delta_s(t)}{k_s}\right]^{-1}$$

### 2.4 Neraca Massa Asam dan Konsumsi Reagen

Konsumsi spesifik asam sulfat (kg $\text{H}_2\text{SO}_4$ per ton bijih kering):

$$q_A = \frac{98 \cdot \left[2 \cdot n_{\text{Ni}} + n_{\text{Co}} + 3 \cdot n_{\text{Fe}^{2+}} + 3 \cdot n_{\text{Al}} + 2 \cdot n_{\text{Mg}} + 2 \cdot n_{\text{Ca}} + ... \right]}{m_{\text{ore}}}$$

Asam yang tidak bereaksi dengan mineral bernilai akan ikut membentuk kerak sulfat (alunit, jarosit) sehingga efisiensi asam:

$$\eta_A = 1 - \frac{n_{A,\text{kerak}} + n_{A,\text{efluen}}}{n_{A,\text{umpan}}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem HPAL dan Titik Kritis Pembentukan Kerak

Diagram alir proses HPAL terdiri dari: (i) **Pre-heating slurry** (70–90 °C), (ii) **Pre-acidification** pada 100–110 °C untuk dekomposisi goetit awal, (iii) **Autoclave multi-kompartemen** (3–6 *compartments*) dengan injeksi asam bertahap dan steam direct-injection, (iv) **Flash let-down** untuk recovery energi, dan (v) **Counter-current decantation (CCD)**. Kerak dominan terbentuk di: dinding kompartemen akhir (suhu & konsentrasi Fe/Al tertinggi), nozzle steam, dan permukaan pipa pendingin slurry cooler.

### 3.2 SOP Pengendalian Kerak Autoclave

Berikut adalah SOP ringkas berbasis praktik industri (*best practice*) dan temuan Dickson, Deleau, & Espitalier (2026):

1. **Karakterisasi umpan bijih** — Analisis XRF, XRD, dan *Fe^{2+}/Fe^{3+}* rasio setiap 4 jam untuk memprediksi potensi scale.
2. **Optimasi profil suhu** — Jaga suhu operasi 250–260 °C (maksimal 270 °C) untuk menekan presipitasi alunit.
3. **Kontrol residence time** 60–90 menit untuk mencegah *over-leaching* Fe.
4. **Penambahan seed material** (mis. hematit recycle 5–10%) untuk menyediakan *nucleation sites* di badan slurry sehingga mengurangi deposisi di dinding.
5. **Injeksi inhibitor/modifier** (mis. asam oksalat, surfaktan, atau MgO) sesuai kompatibilitas mineralogi bijih.
6. **Monitoring Online** — Sensor suhu multi-titik (skin thermocouple pada dinding autoclave) untuk deteksi dini kenaikan $\Delta T$ yang mengindikasikan pertumbuhan kerak.
7. **Acid wash terjadwal** — Setelah 30–90 hari operasi, dilakukan *acid boil-out* dengan $\text{H}_2\text{SO}_4$ 10–15% pada 80–100 °C untuk melarutkan kerak sulfat.
8. **Mechanical descaling** — Hydroblasting bertekanan tinggi (200–350 bar) setiap *shut-down* terencana.

### 3.3 SOP Penanganan Residu HPAL (Pendukung)

Andrameda, Triaswinanti, & Madra (2024) menekankan bahwa residu leaching yang mengandung besi, alumina, dan silika harus melalui tahap *roasting-reduction* sebelum proses lanjutan. SOP mereka: (i) pencampuran residu dengan agen desulfurisasi (mis. $\text{Na}_2\text{CO}_3$ atau $\text{CaO}$), (ii) roasting pada 800–1.100 °C selama 60–120 menit, (iii) reduksi karbotermik untuk recovery nikel residual. Parameter kritis: rasio agen/S, suhu, dan waktu tinggal yang semuanya dipengaruhi oleh kualitas leaching di autoclave.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik HPAL hipotetik berkapasitas umpan 500 t/jam bijih limonit dengan komposisi tipikal (berat%): Ni 1,2, Co 0,08, Fe 38, Al 4,5, Mg 4,0, Ca 0,5, SiO₂ 12,0, moisture 30. Suhu operasi 255 °C, tekanan 42 bar, konsentrasi asam total 320 g/L.

**Langkah 1: Konsumsi Asam Spesifik (Persamaan 2.4