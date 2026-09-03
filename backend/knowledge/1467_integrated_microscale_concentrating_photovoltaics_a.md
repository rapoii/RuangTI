# 1467 — Rekayasa Sistem Fotovoltaik Konsentrat Skala Mikro (Micro-CPV) sebagai Jalur Skalabilitas Menuju Energi Surya Efisiensi Tinggi dan Biaya Rendah

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Integrated Micro‐Scale Concentrating Photovoltaics: A Scalable Path Toward High‐Efficiency, Low‐Cost Solar Power
**Jurnal & Sitasi Utama:** Norman Jost, Tian Gu, Juejun Hu (2023). *Solar RRL*. DOI: [https://doi.org/10.1002/solr.202300363](https://doi.org/10.1002/solr.202300363)
**Sitasi Pendukung:** Norman Jost, Tian Gu, Juejun Hu (2023). *Solar RRL*. DOI: [https://doi.org/10.1002/solr.202300363](https://doi.org/10.1002/solr.202300363)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan energi listrik global tercatat meningkat pada laju beberapa poin persentase secara tahunan, sebuah tren yang dipercepat oleh elektrifikasi transportasi, industrialisasi negara-negara berkembang, serta ekspansi infrastruktur data center (Jost, Gu, & Hu, 2023). Dalam konteks ini, industri fotovoltaik (PV) mengalami pertumbuhan eksponensial yang didominasi oleh teknologi silikon kristalin (c-Si) karena kematangan manufakturnya. Namun demikian, di balik dominasi tersebut, terdapat gap efisiensi fundamental yang hanya dapat dijembatani oleh arsitektur perangkat yang lebih maju seperti sel surya multi-junction (multijunction solar cells, MJSC) yang umumnya digunakan dalam concentrator photovoltaics (CPV) konvensional.

CPV memanfaatkan elemen optik untuk memusatkan radiasi matahari ke area sel aktif yang jauh lebih kecil, sehingga secara drastis menurunkan volume material semikonduktor termahal (GalnP/GaAs/Ge) yang dibutuhkan per watt daya output. Strategi ini secara teoritis memungkinkan efisiensi konversi melebihi 40% di bawah irradiance terkonsentrasi, jauh melampaui batas praktis ~26% untuk sel silikon single-junction. Akan tetapi, adopsi pasar CPV skala megawatt masih terhambat oleh satu hambatan struktural: biaya modal (capex) di muka yang tinggi, terutama karena kebutuhan sistem tracking dual-axis presisi tinggi, struktur mekanik masif, dan proses fabrikasi optik presisi yang tidak kompatibel dengan lini produksi roll-to-roll.

Merespons hambatan tersebut, Jost, Gu, dan Hu (2023) memperkenalkan paradigma baru yang disebut **micro-CPV** — sebuah pendekatan miniaturisasi menyeluruh terhadap arsitektur CPV yang bertujuan mempertahankan efisiensi tinggi MJSC sekaligus mengeliminasi biaya berlebih melalui tiga vektor simultan: (i) pengurangan volume material aktif, (ii) pembukaan arsitektur sistem baru yang mendukung fabrikasi high-throughput, dan (iii) penurunan thermal load melalui optical path yang lebih pendek. Paper ini menjadi rujukan kunci karena memformalkan konsep micro-CPV sebagai cabang industri PV yang berdiri sendiri, bukan sekadar varian CPV (Jost et al., 2023, DOI: [10.1002/solr.202300363](https://doi.org/10.1002/solr.202300363)). Urgensi industrialnya semakin nyata ketika kita menghitung bahwa setiap reduksi 1% biaya LCOE (Levelized Cost of Energy) PV berdampak pada dekarbonisasi grid yang lebih cepat — sebuah argumen yang menjadi motivasi utama rekayasa sistem dalam modul ini.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur micro-CPV yang diajukan Jost et al. (2023) berlandaskan pada formulasi **concentration ratio geometris** yang didefinisikan sebagai:

$$C = \frac{A_{\text{aperture}}}{A_{\text{cell}}}$$

dengan $A_{\text{aperture}}$ adalah luas area penerima optik (lensa atau reflektor mikro) dan $A_{\text{cell}}$ adalah luas aktif sel multi-junction. Berbeda dengan CPV konvensional yang beroperasi pada $C \in [300, 1000]\times$, micro-CPV dirancang pada rentang konsentrasi rendah–menengah $C \in [10, 100]\times$ untuk memungkinkan toleransi pointing yang lebih longgar dan mengurangi kebutuhan tracking presisi.

Efisiensi sistem total micro-CPV dimodelkan sebagai produk efisiensi komponen:

$$\eta_{\text{sistem}} = \eta_{\text{optik}} \cdot \eta_{\text{sel}}(C, T) \cdot \eta_{\text{termal}} \cdot \eta_{\text{listrik}}$$

di mana $\eta_{\text{optik}}$ merepresentasikan transmisi/refleksi elemen optik, $\eta_{\text{sel}}(C, T)$ adalah efisiensi sel yang bergantung pada konsentrasi dan temperatur, $\eta_{\text{termal}}$ menangkap efektivitas pembuangan panas, dan $\eta_{\text{listrik}}$ mencakup rugi-rugi resistif pada interkoneksi.

Beban termal pada sel aktif mengikuti persamaan kesetimbangan energi:

$$Q_{\text{disipasi}} = P_{\text{in}} \cdot (1 - \eta_{\text{sel}}) = h \cdot A_{\text{cell}} \cdot (T_{\text{cell}} - T_{\text{ambient}})$$

dengan $h$ adalah koefisien perpindahan panas konvektif komposit, $T_{\text{cell}}$ suhu sel operasi, dan $T_{\text{ambient}}$ suhu lingkungan. Pada micro-CPV, karena $A_{\text{cell}}$ jauh lebih kecil untuk daya output yang sama, fluks termal per satuan area meningkat tetapi massa termal absolute berkurang secara proporsional, sehingga $T_{\text{cell}}$ tetap terjaga pada rentang operasional yang aman (Jost et al., 2023).

Rugi-rugi resistif dimodelkan melalui hukum Ohm termodifikasi:

$$P_{\text{loss}} = I^2 R_{\text{series}} = \left( \frac{P_{\text{out}}}{V_{\text{mp}}} \right)^2 \cdot R_{\text{series}}$$

dengan $V_{\text{mp}}$ adalah tegangan di titik daya maksimum. Karena micro-CPV memungkinkan jarak interkoneksi yang jauh lebih pendek (orde mikrometer hingga milimeter, bukan sentimeter), $R_{\text{series}}$ turun signifikan sehingga $P_{\text{loss}}$ berkurang secara kuadratik.

Akhirnya, **Levelized Cost of Energy (LCOE)** sebagai metrik keputusan industrial dirumuskan:

$$\text{LCOE} = \frac{\sum_{t=0}^{n} \frac{C_t}{(1+r)^t}}{\sum_{t=0}^{n} \frac{E_t}{(1+r)^t}}$$

dengan $C_t$ biaya total tahun ke-$t$, $E_t$ energi yang dihasilkan tahun ke-$t$, $r$ tingkat diskonto, dan $n$ umur proyek. Micro-CPV menurunkan pembilang melalui pengurangan material semikonduktor dan struktur mekanik, sekaligus menaikkan penyebut melalui peningkatan efisiensi konversi (Jost, Gu, & Hu, 2023).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial micro-CPV mengikuti alur SOP berlapis yang dapat diuraikan sebagai berikut:

**Tahap 1 — Desain Optik Mikro.** Insinyur optik merancang array micro-lens (lensa Fresnel planar atau lenslet array) dengan diameter tipikal 1–10 mm dan focal length yang disesuaikan dengan konsentrasi target. Perangkat lunak seperti Zemax atau Code V digunakan untuk optimasi multi-parameter (wavefront error, kromatisasi, toleransi fabrikasi). Verifikasi dilakukan melalui pengukuran MTF (Modulation Transfer Function) dan uniformity irradiance pada bidang focal plane.

**Tahap 2 — Fabrikasi Sel Multi-Junction Miniatur.** Sel MJSC dengan luas aktif 0,1–10 mm² di-fabrikasi menggunakan proses epitaxial MOCVD (Metal-Organic Chemical Vapor Deposition) pada wafer GaAs atau Ge, lalu di-patterning melalui photolithography dan wet/dry etching. Standar cleanliness ISO Class 5 (atau lebih baik) wajib diterapkan untuk menekan yield loss.

**Tahap 3 — Integrasi Sel-Optik Monolithic.** Tahap pembeda micro-CPV adalah penggunaan teknik wafer-level atau panel-level integration di mana micro-lens direkatkan atau dicetak langsung di atas sel menggunakan adhesive optically-clear dengan index-matched (biasanya $n \approx 1.5$). Proses ini kompatibel dengan roll-to-roll atau sheet-to-sheet manufacturing pada throughput >1 m²/menit.

**Tahap 4 — Manajemen Termal.** Substrate ber-konduktivitas termal tinggi (Al, Cu, atau graphene-composite) dipasang di bawah array sel sebagai heat spreader. Desain termal divalidasi melalui simulasi CFD dan thermal imaging pada kondisi steady-state AM1.5G.

**Tahap 5 — Enkapsulasi & Modul.** Modul micro-CPV dienkapsulasi dengan ethylene-vinyl acetate (EVA) atau thermoplastic polyolefin (TPO), dilapisi kaca tempered antireflektif di permukaan atas, dan diberi frame aluminium untuk deployment.

**Tahap 6 — Kontrol Kualitas & Pengujian.** Setiap modul menjalani flash test (IEC 60904-9 compliant), uji isolasi listrik (IEC 61730), uji accelerated aging (85°C/85% RH selama 1000 jam), dan verifikasi konsentrasi aktual vs nominal.

Diagram alir proses secara ringkas dapat direpresentasikan sebagai: **Desain Optik → Fabrikasi Sel → Integrasi Monolithic → Manajemen Termal → Enkapsulasi → QC & Pengujian → Deployment**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif, perhatikan skenario desain micro-CPV modul rooftop komersial dengan parameter input berikut:

| Parameter | Nilai |
|---|---|
| Daya output target per modul | 400 W |
| Konsentrasi rasio desain $C$ | 50× |
| Efisiensi sel MJSC pada $C=50\times$ | 38% |
| Efisiensi optik $\eta_{\text{optik}}$ | 85% |
| Arus referensi modul silicon equivalen | 11,36 A |
| Tegangan $V_{\text{mp}}$ per sel | 2,8 V |
| Jumlah sel串联 | 12 sel |
| Resistansi seri efektif $R_s$ | 0,015 Ω |
| Biaya sel MJSC per cm² | \$0,80 |
| Biaya optik per cm² aperture | \$0,05 |

**Langkah 1 — Penentuan luas sel total.** Dengan konsentrasi $C=50$ dan asumsi efisiensi sistem $\eta_{\text{sistem}} = \eta_{\text{optik}} \cdot \eta_{\text{sel}} = 0{,}85 \times 0{,}38 = 0{,}323$ (32,3%), irradiance efektif pada sel:

$$G_{\text{eff}} = C \times 1000 \text{ W/m}^2 = 50.000 \text{ W/m}^2$$

Luas sel yang dibutuhkan untuk menghasilkan 400 W:

$$A_{\text{cell}} = \frac{P_{\text{out}}}{G_{\text{eff}} \cdot \eta_{\text{sel}}} = \frac{400}{50.000 \times 0{,}38} = 0{,}0211 \text{ m}^2 = 211 \text{ cm}^2$$

**Langkah 2 — Luas aperture dan dimensi modul.** Luas aperture optik:

$$A_{\text{aperture}} = C \times A_{\text{cell}} = 50 \times 211 = 10.550 \text{ cm}^2 \approx 1{,}055 \text{ m}^2$$

Ini sebanding dengan modul silicon 400 W konvensional (~1,6–1,9 m²), sehingga micro-CPV memberikan footprint 35–45% lebih kecil untuk output yang sama.

**Langkah 3 — Rugi resistif.** Arus operasi:

$$I = \frac{P_{\text{out}}}{V_{\text{mp,total}}} = \frac{400}{12 \times 2{,}8} = \frac{400}{33{,}6} = 11{,}90 \text{ A}$$

Rugi resistif:

$$P_{\text{loss}} = I^2 \cdot R_s = (11{,}90)^2 \times 0{,}015 = 2{,}12 \text{ W}$$

Fraksi rugi terhadap output: $2{,}12/400 = 0{,}53\%$ — sangat rendah dan dapat diabaikan secara manajerial, membuktikan validitas klaim Jost et al. (2023) tentang rendahnya resistive losses.

**Langkah 4 — Analisis biaya material.**

- Biaya sel: $211 \text{ cm}^2 \times \$0{,}80/\text{cm}^2 = \$168{,}80$
- Biaya optik: $10.550 \text{ cm}^2 \times \$0{,}05/\text{cm}^2 = \$527{,}50$
- Total biaya aktif per modul: $\approx \$696$
- Biaya per watt: $\$696/400\text{W} = \$1{,}74/\text{W}$

Sebagai perbandingan, modul silicon PERC 400 W komersial berada di kisaran \$0,25–\$0,35/W pada 2023. Micro-CPV belum kompetitif pada *modul level alone*, tetapi dengan mengintegrasikan arsitektur tandem (Jost et al., 2023) yang menambahkan layer perovskite atau Si di atas micro-CPV, biaya per watt sistem dapat turun menjadi \$0,40–\$0,55/W dengan efisiensi sistem 30–35% — menjadikan micro-CPV sangat kompetitif pada level *system LCOE* di pasar utility-scale.

**Langkah 5 — Interpretasi manajerial.** Hasil kuantitatif menunjukkan bahwa *sweet spot* micro-CPV adalah aplikasi di mana densitas daya per luas menjadi pemb$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
