# 2311 — Analisis dan Optimalisasi Implementasi FMEA AIAG/VDA dalam Manufaktur Otomotif dan Pemeliharaan Mesin CNC: Pendekatan Kuantitatif Manajemen Risiko Terintegrasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan kompetitif yang semakin kompleks seiring dengan meningkatnya tuntutan pelanggan terhadap kualitas, keandalan, dan keselamatan produk. Dalam konteks ini, metodologi *Failure Mode and Effects Analysis* (FMEA) telah berevolusi menjadi tulang punggung sistem manajemen risiko kualitas di perusahaan kelas dunia. Bizeli dan Terazzi (2024) dalam studinya pada *Revista Interface Tecnológica* menyoroti bahwa implementasi AIAG/VDA FMEA—sebuah kerangka kerja kolaboratif yang dirilis pada tahun 2019 oleh Automotive Industry Action Group (AIAG) bersama Verband der Automobilindustrie (VDA)—mewakili pergeseran paradigma signifikan dari pendekatan FMEA tradisional berbasis *Risk Priority Number* (RPN) menuju sistem berbasis *Action Priority* (AP) yang lebih kontekstual dan terstruktur.

Urgensi implementasi metodologi ini tidak terlepas dari kompleksitas rantai pasok otomotif modern yang melibatkan ribuan komponen kritis dalam satu kendaraan. Setiap kegagalan pada komponen tunggal—baik itu sensor elektronik, sistem pengereman, maupun modul powertrain—dapat memicu kampanye *recall* yang merugikan secara finansial maupun reputasional. Studi Bizeli dan Terazzi (2024) menunjukkan bahwa penerapan AIAG/VDA FMEA secara sistematis mampu mencegah kegagalan sejak tahap desain, mengurangi biaya terkait pengerjaan ulang (*rework*) dan penarikan produk di lapangan, serta meningkatkan reliabilitas produk akhir. Lebih jauh, pendekatan ini mendorong integrasi tim lintas fungsi yang sebelumnya bekerja secara silo, sehingga terjadi *knowledge transfer* yang lebih efektif antar departemen desain, manufaktur, dan kualitas.

Namun demikian, implementasi FMEA AIAG/VDA juga menghadapi tantangan non-teknis yang substansial. Resistensi terhadap perubahan metodologis dari praktisi yang sudah familiar dengan format FMEA AIAG Edisi 4 tahun 2008 menjadi salah satu hambatan utama. Kebutuhan akan pelatihan berkelanjutan, investasi perangkat lunak kolaboratif, serta restrukturisasi alur kerja *Document Review* dan *Approval* (DRBFAA) turut menjadi faktor penentu keberhasilan adopsi. Di sisi lain, Saputra dan Sukmono (2024) mendemonstrasikan bagaimana prinsip FMEA—baik versi tradisional maupun AIAG/VDA—dapat diaplikasikan secara efektif dalam konteks pemeliharaan mesin CNC milling, yang menunjukkan versatilitas metodologi ini lintas sektor manufaktur. Kedua paper tersebut secara kolektif menggambarkan bahwa FMEA bukan sekadar alat dokumentasi, melainkan sebuah *engineering philosophy* yang memerlukan transformasi kultur organisasi secara menyeluruh.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Paradigma FMEA Tradisional (RPN-Based)

Pendekatan FMEA klasik yang digunakan sebelum AIAG/VDA mengandalkan perhitungan *Risk Priority Number* sebagai berikut:

$$RPN = S \times O \times D$$

di mana:
- $S$ = *Severity* (Tingkat Keparahan), skala ordinal 1–10
- $O$ = *Occurrence* (Tingkat Kejadian), skala ordinal 1–10
- $D$ = *Detection* (Tingkat Kesulitan Deteksi), skala ordinal 1–10

Saputra dan Sukmono (2024) dalam analisis pemeliharaan mesin CNC milling mereka secara eksplisit menggunakan formula RPN tradisional ini untuk memprioritaskan modus kegagalan pada subsistem kritis seperti *spindle*, *axis drive*, dan sistem hidrolik. Pendekatan ini memiliki keterbatasan inheren, termasuk distribusi RPN yang tidak normal (teraglutinasi pada nilai rendah-sedang) dan inkonsistensi antar-praktisi dalam penilaian subjektivitas skala.

### 2.2 Paradigma AIAG/VDA FMEA (Action Priority-Based)

Bizeli dan Terazzi (2024) menjelaskan bahwa AIAG/VDA FMEA menggantikan pendekatan RPN tunggal dengan tabel keputusan berjenjang yang menghasilkan *Action Priority* (AP) dalam tiga tingkatan:

$$AP = f(S, O, D) \in \{A, M, P\}$$

di mana:
- $A$ = *Action Priority High* (Tindakan tinggi, setara RPN > 100 pada metode lama)
- $M$ = *Action Priority Medium* (Tindakan sedang, setara RPN 50–100)
- $P$ = *Action Priority Low* (Tindakan rendah, setara RPN < 50)

Penentuan AP mengikuti *logic flow chart* resmi yang mempertimbangkan tiga faktor risiko secara terpisah. Misalnya, modus kegagalan dengan $S = 9$ (keparahan tinggi—mempengaruhi keselamatan) langsung diklasifikasikan sebagai AP-High terlepas dari nilai O dan D-nya. Formulasi ini dapat diekspresikan sebagai:

$$AP_{level} = \max_{i \in \{S,O,D\}} w_i \cdot \text{Threshold}(x_i)$$

dengan $w_i$ adalah bobot prioritas berdasarkan konteks risiko dan $\text{Threshold}(x_i)$ adalah fungsi ambang batas yang memetakan skor ordinal ke level risiko.

### 2.3 Formulasi Pemodelan Kuantitatif Lanjutan

Untuk analisis manfaat ekonomi yang dikuantifikasi oleh Bizeli dan Terazzi (2024), total biaya kualitas yang dapat diminimalkan melalui FMEA efektif dapat dimodelkan sebagai:

$$TCQ_{saved} = C_{rework} + C_{recall} + C_{warranty} + C_{downtime}$$

dengan komponen biaya:

$$C_{rework} = \sum_{j=1}^{n} N_{defect,j} \cdot U_{j} \cdot P_{rework}$$

$$C_{recall} = N_{recall} \cdot \left[ C_{logistik} + C_{remediasi} + C_{brand damage} \right]$$

di mana $N_{defect,j}$ adalah jumlah cacat tipe $j$, $U_j$ adalah unit produksi terdampak, dan $P_{rework}$ adalah biaya per unit untuk pengerjaan ulang.

Untuk konteks pemeliharaan CNC milling (Saputra & Sukmono, 2024), parameter keandalan mesin dapat dimodelkan dengan:

$$\lambda(t) = \frac{f(t)}{R(t)}$$

di mana $\lambda(t)$ adalah *hazard rate*, $f(t)$ adalah fungsi densitas kegagalan, dan $R(t)$ adalah reliabilitas yang dinyatakan sebagai:

$$R(t) = e^{-\int_0^t \lambda(\tau) \, d\tau}$$

Dengan $MTBF$ (*Mean Time Between Failure*) sebagai:

$$MTBF = \int_0^{\infty} R(t) \, dt = \frac{1}{\lambda}$$

parameter kritis dalam penjadwalan pemeliharaan preventif berbasis FMEA.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Langkah Implementasi AIAG/VDA FMEA

Berdasarkan kerangka yang diuraikan oleh Bizeli dan Terazzi (2024), implementasi AIAG/VDA FMEA mengikuti alur sistematis tujuh langkah (*DRBFAA framework*):

1. **Planning and Preparation (Tahap 1):** Penetapan *core team* multifungsi (rekayasa desain, manufaktur, kualitas, logistik, layanan pelanggan), cakupan analisis (*FMEA scope*), serta target waktu penyelesaian.
2. **Structure Analysis (Tahap 2):** Dekomposisi sistem menggunakan *Block Diagram*, *Structure Tree*, atau *Boundary Diagram* untuk mengidentifikasi elemen sistem, subsistem, dan antarmuka fungsional.
3. **Function Analysis (Tahap 3):** Penentuan fungsi setiap elemen menggunakan formulasi $F = \{Fungsi, Spesifikasi, Aturan\}$ dan visualisasi melalui *P-diagram* dan *Function Net*.
4. **Failure Analysis (Tahap 4):** Identifikasi modus kegagalan, efek, dan penyebab menggunakan *Failure Net* dengan linkage kausal $\text{Failure} \rightarrow \text{Effect}$ dan $\text{Cause} \rightarrow \text{Failure}$.
5. **Risk Analysis (Tahap 5):** Penilaian $S$, $O$, $D$ menggunakan tabel referensi AIAG/VDA resmi (kriteria severity terpisah untuk *Safety/Regulatory*, *Mission*, *Secondary*).
6. **Optimization (Tahap 6):** Penentuan *Action Priority* menggunakan *Action Priority Matrix* dan pengembangan *Action Plan* untuk modus kegagalan dengan AP-High.
7. **Documentation/Results (Tahap 7):** Penyusunan *FMEA Worksheet* dengan format terstruktur dan validasi lintas-fungsi.

### 3.2 Diagram Alir Logika Penentuan AP

```
[Input: S, O, D Scores]
        ↓
[Evaluasi S > 8?] ──Ya──→ [AP = High]
        ↓ Tidak
[Evaluasi O > 7 atau D > 7?] ──Ya──→ [Evaluasi S > 6?] ──Ya──→ [AP = High]
        ↓ Tidak                                        ↓ Tidak
[AP = Low/Medium sesuai tabel]                  [AP = Medium]
```

### 3.3 Integrasi dengan Pemeliharaan CNC Milling

Saputra dan Sukmono (2024) menunjukkan bahwa kerangka FMEA dapat diadaptasi untuk pemeliharaan mesin CNC dengan menambahkan dimensi waktu dan frekuensi inspeksi:

$$T_{inspeksi,i} = \frac{MTBF_i}{n_{inspeksi}} \cdot k_{risk,i}$$

di mana $k_{risk,i}$ adalah koefisien pengali berdasarkan *Action Priority* modus kegagalan $i$:

$$k_{risk} = \begin{cases} 0.3 & \text{if } AP = High \\ 0.6 & \text{if } AP = Medium \\ 1.0 & \text{if } AP = Low \end{cases}$$

Pendekatan ini memungkinkan penjadwalan pemeliharaan yang lebih adaptif dan berbasis risiko, berbeda dengan jadwal *time-based maintenance* konvensional yang bersifat seragam.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Modus Kegagalan Komponen Otomotif

Berdasarkan konteks yang diuraikan oleh Bizeli dan Terazzi (2024), kami mengkonstruksi skenario kuantitatif untuk komponen *Brake Caliper Assembly* pada kendaraan penumpang yang diproduksi oleh perusahaan Tier-1 otomotif di Brasil.

**Input Parameter Industri:**
- Volume produksi tahunan: $V = 240{,}000$ unit/tahun
- Jumlah model kendaraan yang menggunakan komponen: $n_{model} = 3$
- Biaya pengerjaan ulang per unit: $P_{rework} = \text{USD } 85$
- Biaya rata-rata *recall campaign*: $C_{recall,total} = \text{USD } 12{,}500{,}000$
- Biaya保修 (garansi) per klaim: $C_{warranty} = \text{USD } 320$
- Tarif tenaga kerja langsung: $R_{labor} = \text{USD } 28/\text{jam}$

**Tabel FMEA untuk Tiga Modus Kegagalan Kritis:**

| No | Modus Kegagalan | Efek | S | O | D | RPN Lama | AP Baru |
|----|-----------------|------|---|---|---|---------|---------|
| 1 | Retak pada housing caliper | Kebocoran fluida rem, kehilangan fungsi pengereman | 9 | 3 | 4 | 108 | **High** |
| 2 | Piston seal degradation | Rembes fluida, efisiensi rem menurun | 7 | 5 | 5 | 175 | **Medium** |
| 3 | Bleeder valve clogging | Sulit melakukan bleeding saat servis | 5 | 6 | 7 | 210 | **Low** |

**Analisis Paradoks RPN-AP:**
Perhatikan bahwa modus kegagalan #3 memiliki RPN tertinggi (210) namun AP-Low, sedangkan modus #1 memiliki RPN lebih rendah (108) namun AP-High. Hal ini mengilustrasikan superioritas pendekatan AP yang dikemukakan oleh Bizeli dan Terazzi (2024): risiko yang mengancam keselamatan langsung diprioritaskan tanpa distorsi dari skor D atau O.

### 4.2 Perhitungan Biaya Kualitas dan Keandalan Mesin CNC

Mengikuti kerangka Saputra dan Sukmono (2024), kami melakukan analisis pemeliharaan untuk mesin CNC Mazak VTC-200B dengan parameter:

- Data kegagalan historis selama $T = 12$ bulan: $n_{failure} = 8$ kali
- Total waktu operasi: $t_{op} = 3{,}600$ jam
- Total waktu perbaikan: $t_{repair} = 96$ jam

**Langkah 1: Perhitungan MTBF**
$$MTBF = \frac{t_{op}}{n_{failure}} = \frac{3{,}600}{8} = 450 \text{ jam}$$

**Langkah 2: Perhitungan Availability**
$$A = \frac{MTBF}{MTBF + MTTR} = \frac{450}{450 + 12} = 0.9741 \text{ atau } 97.41\%$$

dengan $MTTR = t_{repair}/n_{failure} = 96/8 = 12$ jam.

**Langkah 3: Perhitungan RPN untuk Tiga Modus Kegagalan CNC Teratas**

| Modus Kegagalan | S | O | D | RPN |
|-----------------|---|---|---|