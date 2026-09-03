# 2026 — Modul Rekayasa Proses Green Extraction: Ekstraksi Superkritis CO₂ untuk Senyawa Bioaktif Tanaman sebagai Pilar Manufaktur Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Green Extraction of Plant Materials Using Supercritical CO₂: Insights into Methods, Analysis, and Bioactivity*
**Sitasi Primer:** Yıldırım, M.; Erşatır, M.; Poyraz, S. (2024). *Plants*, 13(16), 2295. DOI: [https://doi.org/10.3390/plants13162295](https://doi.org/10.3390/plants13162295)
**Sitasi Pendukung:** Vafaei, N.; Rempel, C.; Scanlon, M. G. (2022). *AppliedChem*, 2(1), 1–22. DOI: [https://doi.org/10.3390/appliedchem2020005](https://doi.org/10.3390/appliedchem2020005)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi bahan alami global memasuki fase transformasi struktural yang didorong oleh tiga kekuatan simultan: regulasi residual pelarut yang semakin ketat (contohnya, European Pharmacopoeia membatasi residu heksana pada ekstrak pangan hingga ≤5 mg/kg), permintaan konsumen terhadap produk *clean-label* dan *free-from synthetic solvent*, serta tekanan biaya energi akibat fluktuasi harga hidrokarbon. Yıldırım, Erşatır, dan Poyraz (2024) dalam *Plants* menyoroti bahwa metode *supercritical fluid extraction* (SFE) menggunakan CO₂ (SCCO₂) muncul sebagai solusi rekayasa yang menjawab ketiga tantangan tersebut secara simultan, dengan menawarkan pelarut non-toksik, suhu operasi rendah (35–80 °C) yang mencegah degradasi termal fitokonstituen, dan laju ekstraksi yang superior (Yıldırım dkk., 2024).

Secara teknis, CO₂ memiliki titik kritis pada tekanan 7,38 MPa dan suhu 31,1 °C, sehingga di atas kondisi ini ia bersifat fluida superkritis dengan difusivitas tinggi (~10⁻⁴ cm²/s) dan kemampuan penetrasi matriks padat yang mendekati gas, namun tetap memiliki daya solvasi mendekati cairan. Kombinasi ini menjadikan SCCO₂ sebagai media yang ideal untuk mengekstraksi metabolit sekunder lipofilik seperti terpenoid, flavonoid, karotenoid, dan tokoferol. Vafaei, Rempel, dan Scanlon (2022) dalam *AppliedChem* mengonfirmasi bahwa penerapan SCCO₂ pada antioksidan hidrofobik—terutama tokoferol (vitamin E) dan karotenoid—menunjukkan pemulihan (recovery) yang sebanding atau lebih tinggi dibandingkan metode konvensional seperti Soxhlet, sekaligus mengeliminasi jejak residu pelarut yang menjadi perhatian utama dalam industri *nutraceutical* dan *cosmeceutical* (Vafaei dkk., 2022).

Urgensi industrial-engineering dari teknologi ini tampak pada dimensi ekonomi dan lingkungan: (i) proses Soxhlet dengan heksana mengonsumsi energi ~150–250 MJ per kg ekstrak dan menghasilkan limbah B3 (Bahan Berbahaya dan Beracun), sedangkan SCCO₂ dengan unit *recycle loop* menurunkan konsumsi energi hingga 60–80 MJ/kg dan menghasilkan emisi CO₂ nol-bersih (*closed-loop*); (ii) *payback period* investasi unit SFE kapasitas 100 L pada industri menengah berada di kisaran 2,5–4 tahun berkat nilai jual ekstrak premium 2,5–4× lipat dibanding ekstrak konvensional; (iii) integrasi SCCO₂ dengan sistem *heat integration network* (HEN) berbasis *pinch analysis* mampu mencapai efisiensi energi termal >85%. Dengan demikian, penguasaan terhadap rekayasa proses SCCO₂ menjadi kompetensi strategis bagi insinyur industri yang beroperasi di sektor agro-maritim, farmasi, kosmetik, dan pangan fungsional.

## 2. Landasan Teori & Formulasi Matematis

Rekayasa proses SCCO₂ memerlukan empat pilar pemodelan kuantitatif: persamaan keadaan fluida, korelasi kelarutan solut, neraca massa kinetik, dan fungsi tujuan (yield, selektivitas, konsumsi energi spesifik).

### 2.1 Persamaan Keadaan Peng-Robinson (PR-EoS)

Untuk memprediksi densitas fluida superkritis sebagai fungsi tekanan (P) dan suhu (T), digunakan PR-EoS yang lebih akurat untuk sistem polar daripada Van der Waals:

$$P = \frac{RT}{V_m - b} - \frac{a\,\alpha(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter atraksi $a = 0{,}45724\,\dfrac{R^2 T_c^2}{P_c}$, parameter repulsion $b = 0{,}07780\,\dfrac{R T_c}{P_c}$, dan fungsi alpha $\alpha(T) = \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2$, di mana $\kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$ dengan $\omega$ adalah faktor asentrik Pitzer. Untuk CO₂ ($T_c$ = 304,13 K, $P_c$ = 7,377 MPa, $\omega$ = 0,225), pada kondisi operasi 25 MPa dan 323 K, densitas terprediksi ~870 kg/m³, suatu nilai yang mendekati densitas pelarut organik cair dan menjelaskan tingginya daya solvasi.

### 2.2 Model Kelarutan Chrastil

Kelarutan solut (c, dalam g/L) dalam SCCO₂ sebagai fungsi densitas (ρ, g/L) dan suhu (T, K) paling umum dimodelkan dengan persamaan Chrastil (1982):

$$\ln(c) = k_0 \ln(\rho) + \frac{a}{T} + b$$

dengan $k_0$ adalah stoikiometri asosiasi (umumnya 1–10), $a = -\dfrac{\Delta H_{total}}{R}$ terkait dengan entalpi total disosiasi dan evaporasi, dan $b$ adalah konstanta empiris. Persamaan ini banyak diaplikasikan pada sistem seperti timol dalam thyme (Yıldırım dkk., 2024) dan tokoferol dalam minyak nabati (Vafaei dkk., 2022). Prediksi kelarutan dari persamaan Chrastil dapat langsung digunakan untuk menentukan *solvent-to-feed ratio* (S/F) minimum yang dibutuhkan.

### 2.3 Yield Ekstraksi dan Neraca Massa

Yield ekstrak didefinisikan secara klasik sebagai:

$$Y = \frac{m_{extract}}{m_{feed,dry}} \times 100\%$$

Sementara itu, untuk ekstraksi *dynamic flow*, jumlah CO₂ yang dibutuhkan untuk mencapai kondisi jenuh dapat dihitung dengan:

$$\frac{S}{F} = \frac{Q_{CO_2} \cdot t_{ekstraksi}}{m_{feed}}$$

di mana $Q_{CO_2}$ adalah laju alir massa CO₂ (kg/jam), $t_{ekstraksi}$ adalah waktu operasi (jam), dan $m_{feed}$ adalah massa umpan kering (kg). Yield kumulatif mengikuti kinetika pseudo-first-order pada kondisi tunak:

$$Y(t) = Y_{\infty}\left[1 - \exp(-k_e t)\right]$$

dengan $Y_{\infty}$ adalah yield asimtotik dan $k_e$ adalah konstanta laju ekstraksi yang bergantung pada difusivitas internal partikel (D_e) dan ukuran partikel (D_p).

### 2.4 Efisiensi Energi Spesifik

Untuk analisis kelayakan industri, konsumsi energi spesifik (SED) didefinisikan sebagai:

$$SED = \frac{W_{kompresor} + Q_{pemanas}}{m_{extract}} \quad \left[\frac{MJ}{kg_{extract}}\right]$$

dengan $W_{kompresor}$ adalah kerja kompresi politropis pada kompresor utama (umumnya 0,6–1,2 MJ/kg CO₂), dan $Q_{pemanas}$ adalah energi termal untuk pemanasan awal CO₂ dan penguapan co-solvent. SED pada sistem SFE modern berada di kisaran 50–90 MJ/kg, dibandingkan Soxhlet 150–250 MJ/kg.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SCCO₂ di lantai pabrik mengikuti SOP 8-tahap yang dapat di-*scale-up* dari kapasitas laboratorium (0,1–5 L) hingga kapasitas komersial (100–1.000 L):

**Tahap 1 — Preparasi Bahan Baku.** Bahan tanaman dikeringkan menggunakan *freeze-dryer* atau *convective dryer* (40–50 °C) hingga kadar air <10% (b/b), lalu digiling dan diayak untuk mendapatkan ukuran partikel 0,25–0,85 mm. Ukuran partikel yang terlalu halus menyebabkan *channeling* dan *caking*; ukuran terlalu kasar menurunkan luas permukaan efektif dan memperpanjang waktu ekstraksi.

**Tahap 2 — Pengisian Extraction Vessel (EV).** Bahan dimasukkan ke dalam vessel dengan *packing density* 0,4–0,6 kg/L untuk memastikan permeabilitas aliran CO₂ yang merata.

**Tahap 3 — Pemanasan Awal dan Stabilisasi Termal.** EV, separator-1 (S1), dan separator-2 (S2) dipanaskan masing-masing ke suhu target ($T_E$, $T_{S1}$, $T_{S2}$) dengan gradien $\pm 1$ °C.

**Tahap 4 — Pemampatan dan Pencampuran Co-solvent.** CO₂ dari tangki储存 dipompa oleh *diaphragm compressor* atau *piston compressor* hingga tekanan target ($P_E$, umumnya 15–40 MPa). Co-solvent (etanol absolut atau metanol, 0–10% mol) diinjeksikan dengan *pump HPLC* untuk memodifikasi polaritas dan meningkatkan recovery senyawa polar (Vafaei dkk., 2022).

**Tahap 5 — Ekstraksi Statis-Dinamis.** Mode *static* (tanpa aliran, 10–30 menit) mendistribusi CO₂ dalam matriks, dilanjutkan mode *dynamic* (aliran 0,5–4 kg CO₂/jam per kg umpan) selama 1–4 jam. Parameter kunci yang divariasikan: tekanan (10, 20, 30, 40 MPa), suhu (35, 40, 50, 60 °C), laju alir CO₂ (1, 2, 4 L/jam).

**Tahap 6 — Separasi Bertingkat.** Aliran *extract-laden* CO₂ didepresurisasi di S.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
