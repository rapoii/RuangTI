# 775 — Manajemen Rantai Pasok Kriptogenik Hidrogen Cair: Minimasi Rate Boil-Off Gas, Termodinamika Konversi Ortho-Para, dan Infrastruktur Pelabuhan Bunkering

**Domain:** Teknik Industri  
**Topik Spesialis:** Logistik dan Manajemen Rantai Pasok Hidrogen Kriptogenik  
**Standar & Referensi Utama:** ISO 19880:2018 (Gaseous Hydrogen — Fuelling Stations), ASME B31.12 (Hydrogen Piping and Pipelines), serta regulasi terkait seperti ASME VIII Divisi 1 untuk vessel tekanan dan EN 17127 untuk cryogenic storage.

## 1. Pendahuluan dan Konteks Industri

Industri hidrogen sebagai pilar utama transisi energi rendah karbon semakin mendominasi narasi global pasca-Paris Agreement dan target Net-Zero Emissions 2050 yang ditetapkan oleh International Maritime Organization (IMO) melalui resolusi MEPC.377(80). Dalam sektor shipping, liquid hydrogen (LH2) muncul sebagai bunker fuel paling menjanjikan untuk kapal-kapal besar karena densitas energi spesifik yang tinggi dan kemampuan penyimpanan cryogenic yang memungkinkan operasi jarak jauh tanpa refueling berulang. Namun, realitas operasional menunjukkan bahwa LH2 bukan sekadar cairan biasa; ia bersifat cryogenic dengan titik didih −253,15 °C pada tekanan atmosferik, sehingga setiap kebocoran panas dari lingkungan sekitar menyebabkan fenomena Boil-Off Gas (BOG) yang mengancam integritas tangki, keselamatan, dan ekonomi rantai pasok.

Permasalahan utama yang dihadapi industri adalah tingginya tingkat kehilasan akibat BOG, yang dapat mencapai 1–3 % per hari pada tangki konvensional tanpa pengelolaan khusus. Hal ini tidak hanya menimbulkan biaya reliquefaction yang mahal—biaya yang dapat mencapai 30–40 % dari total biaya operasional—tetapi juga meningkatkan risiko peningkatan tekanan dalam tangki hingga batas desain, serta potensi kebocoran hidrogen yang berbahaya. Dari perspektif ekonomi, modal awal (CAPEX) untuk sistem cryogenic seperti multilayer insulation (MLI) dan cryogenic storage vessel bisa mencapai US$ 200–500 juta untuk kapasitas 1.000 m³, sementara operasional (OPEX) melibatkan pengelolaan BOG, konversi ortho-para, dan infrastruktur pelabuhan bunkering yang masih terbatas. Di Asia Tenggara dan Eropa, pelabuhan seperti Rotterdam, Singapore, dan Tanjung Priok masih dalam tahap pengembangan terminal LH2, di mana kurangnya standar interoperabilitas antar pelabuhan menyebabkan inefisiensi rantai pasok global.

Secara teknis, konversi ortho-para hydrogen (H₂) yang berlangsung eksotermik menambah beban panas tambahan hingga 14,95 kJ/mol, yang secara langsung meningkatkan laju BOG. Hal ini semakin rumit ketika rantai pasok melibatkan produksi hijau dari elektrolisis air berbasis renewable energy, di mana ketergantungan terhadap infrastruktur cryogenic membuat rantai pasok rentan terhadap gangguan listrik atau cuaca ekstrem. Urgensi industri semakin tinggi karena regulasi ESG yang semakin ketat; perusahaan seperti Shell, Maersk, dan Hyundai Heavy Industries telah menginvestasikan miliaran dolar untuk proyek demonstrasi LH2 bunkering, namun masih menghadapi tantangan skalabilitas. Tanpa solusi terintegrasi untuk minimasi BOG, pengelolaan ortho-para conversion, dan pengembangan bunkering port infrastructure yang aman, target 10–15 % pangsa hidrogen dalam bauran energi global pada 2030 akan sulit tercapai. Kondisi ini menuntut pendekatan rekayasa yang holistik, menggabungkan prinsip termodinamika cryogenic, manajemen rantai pasok, dan kepatuhan standar internasional untuk menciptakan rantai pasok yang sustainable dan ekonomis.

## 2. Landasan Teori & Formulasi Matematis

Pemahaman mendalam terhadap fenomena cryogenic diperlukan melalui persamaan termodinamika yang akurat. Suhu dan tekanan LH2 diukur dari titik triple point pada 13,95 K dan 0,07 MPa. Proses liquefaksi melibatkan kompresi isentropik diikuti pendinginan hingga kondisi dua fasa.

Laju Boil-Off Gas (BOG) didefinisikan sebagai massa gas yang terbentuk per satuan waktu akibat kebocoran panas:

$$
\dot{m}_{\text{BOG}} = \frac{\dot{Q}_{\text{ingres}}}{h_{fg}}
$$

di mana \(\dot{Q}_{\text{ingres}}\) adalah laju kebocoran panas (W), dan \(h_{fg}\) adalah entalpi laten penguapan hidrogen cair pada suhu dan tekanan operasional (J/kg). Nilai \(h_{fg}\) untuk LH2 pada 20 K adalah sekitar 445 kJ/kg.

Kebocoran panas \(\dot{Q}_{\text{ingres}}\) dihitung melalui konduktansi termal keseluruhan tangki:

$$
\dot{Q}_{\text{ingres}} = UA \Delta T
$$

dengan \(U\) sebagai koefisien perpindahan panas overall (W/m²K), \(A\) sebagai luas permukaan tangki (m²), dan \(\Delta T\) sebagai perbedaan suhu antara ambient (misalnya 298 K) dan suhu LH2 (20 K). Untuk insulasi multilayer (MLI), \(U\) dapat direduksi hingga 0,05–0,15 W/m²K dengan desain berlapis 30–50 lapis.

Konversi ortho-para merupakan fenomena krusial karena konversi dari bentuk orto (3 spin) ke para (1 spin) melepaskan panas konversi \(\Delta H_{\text{conv}} = 14{,}950\) J/mol. Persamaan konstan kesetimbangan orto-para adalah:

$$
K_p(T) = \frac{[\text{ortho-H}_2]}{[\text{para-H}_2]} = 3 \exp\left(\frac{438{,}8}{T}\right)
$$

di mana \(T\) dalam Kelvin. Fraksi para pada kesetimbangan adalah:

$$
x_p = \frac{1}{1 + K_p(T)}
$$

Pada suhu 20 K, \(x_p \approx 0{,}99\), artinya hampir seluruh hidrogen berada dalam bentuk para yang stabil. Namun, konversi orto ke para berjalan lambat tanpa katalis (waktu setengahnya > 1 tahun), sehingga dalam tangki LH2, konversi orto-paranya kontinu menghasilkan panas tambahan yang dimasukkan ke dalam persamaan BOG:

$$
\dot{Q}_{\text{total}} = \dot{Q}_{\text{ingres}} + \dot{m}_{\text{ortho}} \cdot \Delta H_{\text{conv}} \cdot r_{\text{conv}}
$$

di mana \(r_{\text{conv}}\) adalah laju konversi orto-para (s⁻¹). Dalam praktik, \(r_{\text{conv}}\) sering diabaikan untuk estimasi awal karena lambat, namun dalam simulasi presisi dapat meningkatkan estimasi BOG hingga 15 %.

Untuk infrastruktur bunkering, ASME B31.12 mensyaratkan desain pipa hidrogen dengan faktor keamanan minimum 4 untuk tekanan kerja hingga 1,5 MPa, sementara ISO 19880 menekankan persyaratan keselamatan pada stasiun pengisian termasuk detektor bocor dan sistem venting.

## 3. Metodologi Rekayasa & Standar Prosedural Operasional

Implementasi sistem LH2 cryogenic supply chain mengikuti alur yang terstruktur sebagai berikut:

1. **Desain Tangki Cryogenic**: Pilih material seperti stainless steel 304L atau Al 6061 dengan lapisan MLI berlapis 40–60. Hitung kapasitas termal menggunakan persamaan \(Q = \int UA(T) \, dT\).

2. **Sistem Venting dan BOG Management**: Instal relief valve sesuai ASME VIII dengan set pressure 1,5 × working pressure. Terapkan reliquefaction unit dengan kapasitas 0,5–2 % BOG/h.

3. **Prosedur Bunkering**: Ikuti ISO 19880 langkah demi langkah: (a) verifikasi integritas tangki, (b) cold pump start-up, (c) transfer rate maksimum 200 m³/h dengan monitoring suhu inlet/outlet, (d) post-transfer purging dengan nitrogen.

4. **Monitoring Real-time**: Gunakan sensor PT100 untuk suhu, pressure transducer untuk tekanan, dan flow meter Coriolis untuk laju BOG. Integrasikan dengan SCADA untuk deteksi dini peningkatan tekanan > 0,1 bar/h.

5. **Pemeliharaan**: Jadwal inspeksi tahunan sesuai ASME B31.12 termasuk ultrasonic thickness measurement dan leak test pada flange cryogenic.

Diagram alir proses bunkering dapat digambarkan sebagai:

```
Input: LH2 dari tank truck → Cold pump → Transfer line (insulated) → Receiving tank → Monitoring (SCADA) → Output: Bunkered LH2
```

Arsitektur teknologi mencakup hydrogen quality assurance sesuai ISO 19880, termasuk purity > 99,999 % dan dew point < −60 °C.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan tangki LH2 berbentuk silinder horizontal dengan volume 1.000 m³ (diameter 4 m, panjang 80 m), suhu operasional 20 K, ambient 298 K, dan insulasi MLI dengan \(U = 0,08\) W/m²K. Luas permukaan \(A \approx 150\) m² (termasuk ujung).

Langkah 1: Hitung kebocoran panas

$$
\dot{Q}_{\text{ingres}} = UA\Delta T = 0{,}08 \times 150 \times (298 - 20) = 3{,}456 \, \text{W}
$$

Langkah 2: Hitung BOG rate

$$
\dot{m}_{\text{BOG}} = \frac{3{,}456}{445{,}000} \approx 7{,}76 \times 10^{-6} \, \text{kg/s} \approx 0{,}67 \, \text{kg/h}
$$

Dengan density LH2 70 kg/m³, laju volume BOG:

$$
\dot{V}_{\text{BOG}} = \frac{0{,}67}{70} \approx 9{,}57 \times 10^{-6} \, \text{m³/s} \approx 0{,}0345 \, \text{m³/h}
$$

Untuk konversi orto-para, asumsikan 5 % orto yang masih ada dan \(r_{\text{conv}} = 1 \times 10^{-7}\) s⁻¹, tambahan panas:

$$
\dot{Q}_{\text{conv}} = 0{,}05 \times 14{,}950 \times 1 \times 10^{-7} \times 70 \times 1{,}000 \approx 0{,}052 \, \text{W}
$$

Total \(\dot{Q}_{\text{total}} \approx 3{,}508\) W, sehingga \(\dot{m}_{\text{BOG,total}} \approx 7{,}88 \times 10^{-6}\) kg/s atau 0,68 kg/h.

Interpretasi manajerial: Untuk tangki 1.000 m³, kehilasan harian \(\approx 16{,}3\) kg/hari. Jika harga LH2 hijau US$ 5/kg, biaya BOG harian US$ 81,65. Dengan reliquefaction unit 50 kW yang mengkonsumsi 0,2 kWh/kg BOG, biaya OPEX tahunan sekitar US$ 45.000. Hasil ini menunjukkan bahwa desain insulasi MLI berkualitas dan katalis orto-para (jika diperlukan) dapat menurunkan BOG hingga 40 %, sehingga ROI tercapai dalam 3–4 tahun.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

Disiplin teknik industri menghubungkan LH2 cryogenic dengan supply chain management melalui prinsip lean dan six sigma untuk mengurangi waste BOG. Otomasi melalui IoT dan AI memungkinkan predictive maintenance berbasis machine learning untuk mendeteksi degradasi insulasi sebelum terjadi peningkatan tekanan. Manajemen biaya teknik (TCE) membandingkan CAPEX reliquefaction (US$ 2 juta/unit) versus OPEX BOG (US$ 45.000/tahun), dengan analisis net present value (NPV) menggunakan discount rate 8 %:

$$
\text{NPV} = -C_0 + \sum_{t=1}^{N} \frac{R_t}{(1+r)^t}
$$

di mana \(C_0\) adalah investasi awal, \(R_t\) adalah penghematan tahunan.

Dalam K3 (safety), ASME B31.12 mensyaratkan hazard operability (HAZOP) untuk sistem bunkering, termasuk risiko ledak karena hidrogen. ESG menuntut pelaporan Scope 3 emissions dari BOG yang terbakar, di mana setiap kg BOG setara 9 kg CO₂e. Tantangan adopsi meliputi kurangnya standar bunkering port global, regulasi yang berbeda antar negara (misalnya EU RED vs. AS CAFE), serta keterbatasan teknologi katalis orto-para yang mahal. Solusi manajerial melibatkan kolaborasi antar sektor (energy, maritime, chemical) melalui framework ISO 55000 untuk asset management dan pengembangan digital twin untuk simulasi BOG secara real-time.

Secara keseluruhan, modul ini menekankan bahwa keberhasilan rantai pasok LH2 bergantung pada integrasi mendalam antara prinsip termodinamika cryogenic, rekayasa sistem, dan strategi bisnis yang berkelanjutan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
