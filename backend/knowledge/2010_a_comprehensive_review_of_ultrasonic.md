# 2010 — Optimasi Ekstraksi Bioaktif Berbasis Ultrasonik: Prinsip Kavitasi Akustik, Rekayasa Peralatan, dan Integrasi Teknologi Hibrid dalam Rantai Nilai Nutrasetikal

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A comprehensive review of ultrasonic assisted extraction (UAE) for bioactive components: Principles, advantages, equipment, and combined technologies
**Jurnal & Sitasi Utama:** Lipeng Shen, Shuixiu Pang, Mingming Zhong (2023). *Ultrasonics Sonochemistry*. DOI: [https://doi.org/10.1016/j.ultsonch.2023.106646](https://doi.org/10.1016/j.ultsonch.2023.106646)
**Sitasi Pendukung:** Ashwani Kumar, P Nirmal, Mukul Kumar (2023). *Molecules*. DOI: [https://doi.org/10.3390/molecules28020887](https://doi.org/10.3390/molecules28020887)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap komponen bioaktif—polifenol, karotenoid, flavonoid, terpenoid, dan fitosterol—telah meningkat secara eksponensial dalam satu dekade terakhir, didorong oleh pergeseran paradigma konsumen dari pangan fungsional menuju nutraceutical preventif (Kumar et al., 2023). Menurut Shen, Pang, dan Zhong (2023) dalam *Ultrasonics Sonochemistry*, industri pangan, farmasi, dan nutrasetikal kini menghadapi tantangan struktural berupa tekanan permintaan yang harus dipenuhi dengan tetap mempertahankan kemurnian, stabilitas struktural, dan yield tinggi dari senyawa target. Metode ekstraksi konvensional seperti *solvent extraction*, *distillation*, dan *pressing* memiliki kelemahan fundamental yang secara langsung memengaruhi *bill of materials*, *cycle time*, dan *cost of quality* pada lini produksi: rendemen rendah, konsumsi pelarut signifikan, waktu proses panjang (8–24 jam untuk maserasi), serta kebutuhan suhu tinggi yang merusak termolabilitas fitokimia (Shen et al., 2023).

Kumar et al. (2023) menegaskan bahwa yield, kemurnian, dan stabilitas struktural fitokimia sangat bergantung pada tiga variabel rekayasa: matriks asal bahan, metode ekstraksi, dan kondisi operasional. Dalam konteks Teknik Industri, hal ini diterjemahkan menjadi variabel keputusan pada perancangan *process flow*, pemilihan *unit operation*, dan optimalisasi *critical process parameters* (CPP). Urgensi operasional UAE muncul ketika pendekatan konvensional tidak mampu memenuhi *Key Performance Indicator* (KPI) berupa *throughput* minimal 1,5–2× lebih tinggi dengan footprint energi dan pelarut yang lebih rendah (Shen et al., 2023). Lebih lanjut, kemampuan UAE untuk mempertahankan suhu rendah (30–50°C) menjadi enabler strategis dalam memenuhi regulasi keamanan pangan seperti GRAS (*Generally Recognized As Safe*) dan standar ISO 22000 untuk produksi nutraceutical, sehingga keputusan adopsi teknologi ini bukan semata soal efisiensi, melainkan juga compliance pasar ekspor.

---

## 2. Landasan Teori & Formulasi Matematis

Prinsip dasar UAE adalah fenomena **kavitasi akustik** yang diinduksi oleh gelombang ultrasonik berdaya tinggi (biasanya 16–100 kHz dengan intensitas > 1 W/cm²). Ketika gelombang ultrasonik merambat dalam medium cair, terjadi osilasi tekanan bolak-balik yang dapat dirumuskan sebagai:

$$p(t) = P_a \sin(2\pi f t)$$

dengan $p(t)$ adalah tekanan akustik sesaat (Pa), $P_a$ adalah amplitudo tekanan (Pa), dan $f$ adalah frekuensi (Hz). Ketika $P_a$ melampaui **ambang batas kavitasi** ($P_{th} \approx 0{,}1$ MPa pada kebanyakan pelarut), gelembung mikro terbentuk dan mengalami *violent collapse* yang melepaskan energi lokal dalam orde 100–5000 K dan tekanan hingga 1000 atm (Shen et al., 2023). Energi total yang masuk ke sistem per satuan volume, atau **densitas energi ultrasonik** ($E_d$), dihitung melalui:

$$E_d = \frac{P \cdot t}{V}$$

dengan $P$ adalah daya ultrasonik (W), $t$ adalah waktu sonikasi (s), dan $V$ adalah volume media (L). Densitas energi ini merupakan parameter desain kritis karena menentukan tingkat disrupsi dinding sel matriks biologis dan laju transfer massa.

Intensitas ultrasonik pada permukaan probe tip dihitung sebagai:

$$I = \frac{P}{\pi r^2}$$

dengan $r$ adalah radius probe (m). Intensitas yang terlalu rendah tidak menghasilkan kavitasi efektif; intensitas terlalu tinggi (> 300 W/cm²) dapat menyebabkan degradasi radikal-bebas dari fitokimia target (Kumar et al., 2023).

Kinetika ekstraksi mengikuti model **pseudo-first-order** yang telah divalidasi secara empiris pada berbagai matriks:

$$C_t = C_\infty \left(1 - e^{-k \cdot t}\right)$$

dengan $C_t$ adalah konsentrasi ekstrak pada waktu $t$ (mg/L), $C_\infty$ adalah konsentrasi kesetimbangan, dan $k$ adalah konstanta laju transfer massa (s⁻¹). Pengaruh suhu pada konstanta laju mengikuti persamaan Arrhenius:

$$k = A \, e^{-E_a / RT}$$

dengan $E_a$ adalah energi aktivasi (J/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), dan $T$ adalah suhu absolut (K).

Mekanisme transfer massa dari dalam matriks padat ke pelarut mengikuti hukum difusi Fick, yang dimodifikasi dengan **faktor peningkatan UAE** ($\beta$):

$$\beta = \frac{k_{UAE}}{k_{konvensional}}$$

Nilai $\beta > 1$ mengindikasikan bahwa UAE secara signifikan mempercepat ekstraksi melalui efek *micro-jetting*, *micro-streaming*, dan erosi partikel. Nilai tipikal $\beta$ berada pada rentang 1,5–4,0 untuk polifenol dan flavonoid (Shen et al., 2023).

Untuk mengkuantifikasi kualitas hasil ekstraksi, konsentrasi total polifenol dihitung melalui kalibrasi Folin-Ciocalteu:

$$TPC = \frac{A_{sampel} - b}{m \cdot m_s}$$

dengan $TPC$ adalah total phenolic content (mg GAE/g), $A_{sampel}$ adalah absorbansi, $b$ adalah intersep, $m$ adalah slope kurva kalibrasi asam galat, dan $m_s$ adalah massa sampel (g).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi UAE dalam lini produksi mengikuti SOP yang terstruktur dalam lima tahap rekayasa berikut ini (Shen et al., 2023):

**Tahap 1 — Preparasi Bahan Baku (Pre-treatment).** Bahan baku nabati dikeringkan pada suhu 40–60°C hingga kadar air < 10%, kemudian digiling dan diayak untuk mendapatkan ukuran partikel seragam (biasanya 40–60 mesh). Tahapan ini menjadi *bottleneck* karena ukuran partikel menentukan luas kontak spesifik ($a_s$).

**Tahap 2 — Penyiapan Larutan dan Rasio Padatan-Cairan.** Rasio S/L optimum berada pada rentang 1:10 hingga 1:30 (g/mL), tergantung matriks. Pemilihan pelarut didasarkan pada polaritas target: etanol 50–80% untuk polifenol, heksana untuk minyak atsiri non-polar, air untuk saponin (Kumar et al., 2023).

**Tahap 3 — Konfigurasi Reaktor UAE.** Terdapat dua konfigurasi utama: **probe-type (horn ultrasonicator)** untuk volume kecil hingga 5 L dengan intensitas tinggi, dan **bath-type ultrasonicator** untuk volume besar dengan distribusi energi lebih homogen. Diagram alir proses:

```
[Bahan Baku] → [Pre-treatment] → [Pencampuran S/L] 
                                          ↓
            [Pemisahan Sentrifugasi] ← [UAE Reactor] 
                                          ↓
                              [Filtrasi & Evaporasi]
                                          ↓
                                [Ekstrak Pekat/Kering]
```

**Tahap 4 — Optimasi Parameter Proses (CPP).** Empat variabel kritis yang memerlukan optimasi melalui *Response Surface Methodology* (RSM) atau *Design of Experiments* (DoE) adalah: daya ultrasonik (100–500 W), waktu (10–60 menit), suhu (30–50°C), dan konsentrasi pelarut. Validasi dilakukan melalui ANOVA dengan $\alpha = 0{,}05$.

**Tahap 5 — Pemurnian dan Standarisasi.** Ekstrak kasar dimurnikan melalui *liquid-liquid extraction*, *macroporous resin chromatography*, atau *membrane filtration* untuk memenuhi standar farmakope (USP, EP).

**Arsitektur Teknologi Hibrid (Combined Technologies).** Shen et al. (2023) menekankan bahwa UAE paling efektif bila digabungkan dengan: *microwave-assisted extraction* (MAE-UAE), *enzyme-assisted extraction* (EAE-UAE), *supercritical CO₂* (SC-CO₂-UAE), dan *deep eutectic solvent* (DES-UAE). Setiap kombinasi memberikan efek sinergis yang dapat dihitung melalui *synergy index*:

$$SI = \frac{Y_{hybrid}}{Y_{UAE} + Y_{other}}$$

dengan $SI > 1$ menandakan sinergi positif.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Ekstraksi polifenol total dari daun *Camellia sinensis* (teh hijau) menggunakan UAE tipe probe untuk aplikasi nutraceutical.

**Input Parameter:**
- Massa bahan baku kering: $m_s = 50$ g
- Pelarut: etanol 70% (v/v), volume $V = 500$ mL = 0,5 L
- Daya probe: $P = 200$ W
- Frekuensi: $f = 20$ kHz
- Waktu sonikasi: $t = 30$ menit = 1800 s
- Suhu: $T = 40$°C = 313 K
- Probe tip radius: $r = 0{,}005$ m (5 mm)

**Langkah 1 — Perhitungan Densitas Energi:**

$$E_d = \frac{P \cdot t}{V} = \frac{200 \times 1800}{0{,}5} = 720{,}000 \text{ J/L} = 720 \text{ kJ/L}$$

**Langkah 2 — Perhitungan Intensitas Akustik:**

$$I = \frac{P}{\pi r^2} = \frac{200}{\pi (0{,}005)^2} = \frac{200}{7{,}854 \times 10^{-5}} \approx 2{,}55 \times 10^6 \text{ W/m}^2$$

Nilai ini berada dalam rentang aman untuk flavonoid (Shen et al., 2023).

**Langkah 3 — Yield Ekstrak:**
- Yield UAE: $Y_{UAE} = 22{,}4\%$ ($m_{extract} = 11{,}2$ g)
- Yield konvensional (maserasi 24 jam, suhu ruang): $Y_{konv} = 15{,}1\%$

**Langkah 4 — Faktor Peningkatan:**

$$\beta = \frac{Y_{UAE}}{Y_{konv}} = \frac{22{,}4}{15{,}1} \approx 1{,}48$$

**Langkah 5 — Konstanta Laju Pseudo-First-Order:**
Asumsi $C_\