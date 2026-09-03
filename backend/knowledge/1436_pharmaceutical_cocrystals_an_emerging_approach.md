# 1436 — Rekayasa Kristal Ko-Farmasi (Pharmaceutical Cocrystals) untuk Modulasi Sifat Fisikokimia API dan Akselerasi Formulasi Sediaan Oral

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Pharmaceutical Cocrystals sebagai pendekatan emerging untuk memodulasi sifat fisikokimia Bahan Aktif Farmasi (API) dan akselerasi rantai nilai pengembangan obat
**Jurnal & Sitasi Utama:** Suraj Ankush Tupe, Shital Prabhakar Khandagale, Amrapali B. Jadhav (2023). *Journal of Drug Delivery and Therapeutics*, Vol. 13(4). DOI: [https://doi.org/10.22270/jddt.v13i4.6016](https://doi.org/10.22270/jddt.v13i4.6016)
**Sitasi Pendukung:** Maria Monica Castellanos, Hervé Gressard, Xiangming Li (2023). *Vaccines*, Vol. 11(7):1153. DOI: [https://doi.org/10.3390/vaccines11071153](https://doi.org/10.3390/vaccines11071153)

---

## 1. Pendahuluan dan Konteks Industri

Sebagian besar Bahan Aktif Farmasi (Active Pharmaceutical Ingredients/API) di dunia diformulasikan dan diberikan kepada pasien dalam bentuk sediaan padat oral karena tiga keunggulan struktural biaya: kemudahan administrasi, kepatuhan pasien (patient compliance), dan efektivitas biaya produksi skala besar (Tupe dkk., 2023, DOI: [10.22270/jddt.v13i4.6016](https://doi.org/10.22270/jddt.v13i4.6016)). Namun, realitas operasional di industri farmasi global menunjukkan bahwa sekitar 40–70% kandidat obat baru dalam pipeline memiliki kelarutan air yang rendah (poor aqueous solubility) dan sekitar 35–40% termasuk kategori *Biopharmaceutics Classification System* (BCS) Kelas II dan IV, yang langsung menghambat bioavailabilitas sistemik (Tupe dkk., 2023). Hambatan teknis ini menimbulkan *bottleneck* yang sangat mahal dalam rantai nilai研发 (research and development) farmasi, karena kandidat obat berpotensi gagal pada tahap klinik hanya karena masalah formulasi, bukan efikasi intrinsik molekul.

Dari perspektif Teknik Industri, masalah kelarutan rendah bukan sekadar isu kimia, melainkan masalah desain proses dan sistem produksi: jadwal研发 menjadi panjang, tingkat kegagalan tahap formulasi tinggi, dan biaya *goods sold* melonjak akibat kebutuhan teknologi formulasi kompleks seperti amorphous solid dispersion, nanonisasi, atau lipid-based formulation. Tupe dkk. (2023) dalam *Journal of Drug Delivery and Therapeutics* menegaskan bahwa **cocrystallization** telah muncul sebagai strategi *crystal engineering* yang layak dan hemat biaya untuk memodulasi sifat fisikokimia API tanpa mengubah struktur molekul aktif atau profil farmakologisnya. Kristal ko-farmasi (pharmaceutical cocrystal) adalah struktur kristal tunggal yang terdiri dari API dan satu atau lebih koformer yang aman secara farmasi dalam rasio stoikiometri tertentu (Tupe dkk., 2023, DOI: [10.22270/jddt.v13i4.6016](https://doi.org/10.22270/jddt.v13i4.6016)).

Konteks akselerasi pengembangan obat juga diperkuat oleh pelajaran dari pandemi COVID-19. Castellanos, Gressard, dan Li (2023) dalam jurnal *Vaccines* (DOI: [10.3390/vaccines11071153](https://doi.org/10.3390/vaccines11071153)) menyoroti pentingnya kerangka lintas-disiplin dalam strategi *Chemistry, Manufacturing, and Controls* (CMC), penggunaan pengetahuan platform, dan implementasi alat digital untuk mempercepat pengembangan serta strategi kontrol inovatif. Prinsip-prinsip akselerasi ini sangat relevan ketika industri farmasi perlu mengembangkan formulasi padat oral yang stabil, larut, dan tersedia hayal dengan lead time yang dipersingkat—persis di mana pendekatan cocrystal memberikan keuntungan struktural melalui modulasi sifat padat tanpa perubahan struktur kimia API.

---

## 2. Landasan Teori & Formulasi Matematis

Rekayasa kristal ko-farmasi berada pada persimpangan termodinamika padat, mekanika kuantum intermolekuler, dan kinetika disolusi. Landasan matematis berikut diperlukan untuk mengkuantifikasi potensi peningkatan kelarutan dan bioavailabilitas.

### 2.1 Persamaan Noyes-Whitney untuk Laju Disolusi

Laju disolusi intrinsik API merupakan fungsi langsung dari kelarutan jenuh. Persamaan Noyes-Whitney dalam bentuk modifikasi Nernst-Brunner berlaku:

$$\frac{dC}{dt} = \frac{D \cdot A}{h \cdot V} \left( C_s - C_t \right)$$

di mana:
- $D$ = koefisien difusi molekul API dalam medium ($cm^2/s$), tipikal $5 \times 10^{-6}$ untuk molekul kecil dalam air pada 37°C,
- $A$ = luas permukaan efektif partikel ($cm^2$),
- $h$ = ketebalan lapisan batas hidrodinamik ($cm$), tipikal $3{-}10 \times 10^{-3}$ cm,
- $V$ = volume medium disolusi ($mL$),
- $C_s$ = kelarutan jenuh (saturated solubility) ($mg/mL$),
- $C_t$ = konsentrasi API pada waktu $t$ ($mg/mL$).

### 2.2 Aturan ΔpKa dan Seleksi Koformer

Untuk memutuskan apakah sistem API–koformer akan membentuk garam atau cocrystal, berlaku aturan ΔpKa:

$$\Delta pK_a = pK_a(\text{base terkonjugasi}) - pK_a(\text{asam terkonjugasi})$$

- Jika $\Delta pK_a \geq 3$: sangat mungkin terbentuk garam (proton transfer penuh),
- Jika $0 < \Delta pK_a < 3$:_region ambigu, dapat membentuk garam atau cocrystal,
- Jika $\Delta pK_a \leq 0$: lebih mungkin terbentuk cocrystal (ionisasi parsial/non-ionik).

Tupe dkk. (2023) menjelaskan bahwa ketika ΔpKa tidak memenuhi syarat pembentukan garam, jalur cocrystal menjadi satu-satunya strategi modulasi padat yang viable.

### 2.3 Parameter Kelarutan Hansen dan Prediksi Kompatibilitas

Cocrystal yang stabil memerlukan kesamaan parameter kelarutan antara API dan koformer. Parameter kelarutan total Hansen:

$$\delta_t^2 = \delta_d^2 + \delta_p^2 + \delta_h^2$$

di mana $\delta_d$, $\delta_p$, $\delta_h$ berturut-turut adalah kontribusi dispersi, polar, dan ikatan hidrogen. Kesamaan $\delta_t$ (distance $R_0 < 5{,}0 \, MPa^{1/2}$) menjadi prasyarat empiris keberhasilan kokristalisasi.

### 2.4 Dose Number (Do) dan Prediksi Bioavailabilitas

Konsep *Dose Number* dari Amidon dkk. merepresentasikan rasio dosis terhadap kapasitas pelarutan di saluran cerna:

$$D_0 = \frac{M_0 / V_0}{C_s}$$

di mana $M_0$ = dosis (mg), $V_0$ = volume cairan gastrointestinal awal (tipikal $250 \, mL$), $C_s$ = kelarutan (mg/mL). Jika $D_0 > 1$, absorpsi dibatasi kelarutan (*solubility-limited absorption*).

Bioavailabilitas sistemik secara umum:

$$F = f_a \times f_g \times F_h$$

dengan $f_a$ = fraksi absorpsi, $f_g$ = fraksi yang lolos metabolisme intestinal, $F_h$ = fraksi yang lolos *first-pass* hepatic. Peningkatan $C_s$ melalui cocrystall