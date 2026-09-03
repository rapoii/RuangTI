# 2423 — Implementasi FMEA AIAG/VDA dalam Manufaktur Otomotif: Analisis Manfaat, Tantangan, dan Aplikasi Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas
**Jurnal & Sitasi Utama:** João Vitor Bizeli & Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22(1). DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra & Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi di bawah tekanan kompetitif yang sangat ketat, di mana satu cacat komponen dapat memicu kampanye *recall* (penarikan kembali produk) bernilai miliaran dolar serta merusak reputasi merek secara irreversibel. Bizeli dan Terazzi (2024) dalam studinya yang dipublikasikan di *Revista Interface Tecnológica* menegaskan bahwa AIAG/VDA FMEA (Failure Mode and Effects Analysis) merupakan metodologi esensial dalam *risk management* dan peningkatan kualitas di industri otomotif, terutama bagi perusahaan multinasional yang memproduksi komponen dengan tingkat kritikalitas tinggi. Riset tersebut bersifat deskriptif-kualitatif dengan desain studi kasus, melibatkan wawancara semi-terstruktur terhadap tiga profesional berpengalaman di anak perusahaan multinasional produsen suku cadang otomotif di Brasil. DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155).

Urgensi ekonomi implementasi FMEA AIAG/VDA tidak terlepas dari fakta bahwa standar ini—yang diterbitkan bersama oleh Automotive Industry Action Group (AIAG) dan Verband der Automobilindustrie (VDA) pada tahun 2019—merupakan konsensus teknis yang menggantikan pendekatan FMEA klasik (AIAG 4th Edition, 2008) yang selama puluhan tahun digunakan. Transisi ini didorong oleh kelemahan fundamental metrik tradisional *Risk Priority Number* (RPN) yang terbukti bias dan sulit diprioritaskan secara konsisten. Sementara itu, studi komplementer dari Saputra dan Sukmono (2024) yang dimuat pada jurnal ber-*peer-review* dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) menunjukkan aplikasi FMEA klasik pada pemeliharaan mesin *CNC milling*, mengilustrasikan bahwa metodologi ini tidak hanya relevan untuk lini perakitan (*assembly*) tetapi juga untuk pemeliharaan aset kritis di lantai produksi.

Konteks operasional yang digambarkan oleh Bizeli dan Terazzi (2024) mencakup tiga pilar tekanan: (i) meningkatnya kompleksitas produk seiring elektrifikasi kendaraan dan integrasi *Advanced Driver Assistance Systems* (ADAS); (ii) tuntutan ketat standar IATF 16949:2016 yang menjadikan FMEA sebagai dokumen wajib dalam *Production Part Approval Process* (PPAP); serta (iii) ekspektasi pelanggan Original Equipment Manufacturer (OEM) yang meminta transparansi proses mitigasi risiko. Dalam kerangka ini, paper riset ini tidak hanya bersifat akademis tetapi memiliki implikasi manajerial langsung bagi perusahaan yang ingin mempertahankan kelayakan rantai pasok (*supply chain resilience*) di tengah disrupsi global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Evolusi dari RPN ke Action Priority (AP)

Pendekatan FMEA klasik menggunakan *Risk Priority Number* sebagai metrik agregat:

$$RPN = S \times O \times D$$

di mana $S$ adalah *Severity* (Tingkat Keparahan, skala 1–10), $O$ adalah *Occurrence* (Tingkat Kejadian, skala 1–10), dan $D$ adalah *Detection* (Tingkat Kesulitan Deteksi, skala 1–10). Namun, AIAG/VDA (2019) memperkenalkan pendekatan berbasis **Action Priority (AP)** yang memetakan triplet $(S, O, D)$ ke dalam tiga tingkatan kategoris: **High (H)**, **Medium (M)**, dan **Low (L)**, menggunakan tabel lookup yang dikembangkan secara konsensus industri:

$$AP = f_{AP}(S, O, D) \in \{H, M, L\}$$

Fungsi $f_{AP}$ pada dasarnya adalah pemetaan deterministik yang memperhitungkan interaksi non-linear antar parameter. Misalnya, kombinasi $(S=9, O=2, D=4)$ dengan RPN klasik $=72$ mungkin tergolong kategori $M$, sedangkan $(S=8, O=4, D=8)$ dengan RPN $=256$ tetap bernilai $M$ atau bahkan $L$ karena deteksinya sudah sangat mudah—sehingga prioritas tindakan tidak selalu naik secara monoton terhadap RPN.

### 2.2 Formulasi Nilai Kritikalitas dan Dampak Ekonomi

Untuk analisis biaya risiko, Bizeli dan Terazzi (2024) menyoroti pentingnya menghitung *Expected Risk Cost* (ERC) untuk setiap modus kegagalan:

$$ERC_i = O_i \times C_i \times P_i$$

dengan $O_i$ adalah laju kejadian per unit produksi, $C_i$ adalah biaya per kejadian (rework, scrap, klaim garansi, *recall*), dan $P_i$ adalah probabilitas modus kegagalan mencapai pelanggan akhir. Total risiko portofolio:

$$ERC_{total} = \sum_{i=1}^{n} ERC_i$$

### 2.3 Matriks Risiko dan Korelasi dengan AP

Matriks risiko dalam standar AIAG/VDA menggunakan tabel referensi silang yang pada dasarnya merepresentasikan fungsi diskret:

$$AP_{level}(S,O,D) = \begin{cases} H & \text{jika } (S,O,D) \in \mathcal{H} \\ M & \text{jika } (S,O,D) \in \mathcal{M} \\ L & \text{jika } (S,O,D) \in \mathcal{L} \end{cases}$$

di mana $\mathcal{H}, \mathcal{M}, \mathcal{L}$ adalah himpunan triplet yang didefinisikan oleh AIAG/VDA Handbook (2019). Pendekatan ini menyelesaikan masalah *equal weighting* pada RPN klasik, karena severity diberi bobot dominan dalam keputusan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AIAG/VDA FMEA mengikuti siklus **Plan-Do-Check-Act (PDCA)** dengan tujuh langkah struktural yang diidentifikasi oleh Bizeli dan Terazzi (2024) sebagai *best practice* di multinasional automotif:

**Langkah 1 – Planning & Preparation (Perencanaan dan Persiapan)**
Tim *cross-functional* (Rekayasa, Kualitas, Manufaktur, Supplier, Pelanggan) dibentuk dengan *Charter* dan *FMEA Scope* yang jelas. Penentuan batasan analisis (sistem, subsistem, komponen, atau proses) menjadi titik kritis.

**Langkah 2 – Structure Analysis (Analisis Struktur)**
Menggunakan notasi Block Diagram atau struktur pohon (*tree structure*). Untuk komponen, diagram Bounds Diagram digunakan; untuk proses, digunakan Process Flow Diagram (PFD) dan *Cause & Effect Matrix*.

**Langkah 3 – Function Analysis (Analisis Fungsi)**
Menurunkan fungsi setiap elemen menggunakan terminologi *verb-noun* (misalnya: "mengalirkan fluida", "menahan beban torsi") dan menghubungkannya dengan struktur melalui *Function Net*.

**Langkah 4 – Failure Analysis (Analisis Kegagalan)**
Mengidentifikasi *Failure Modes* (modus kegagalan), *Failure Effects* (dampak), dan *Failure Causes* (penyebab) untuk setiap fungsi. Hierarki:**Local Effect → Next Higher Level → End Effect**.

**Langkah 5 – Risk Analysis (Analisis Risiko)**
Pemberian skor $S$, $O$, $D$ menggunakan tabel referensi AIAG/VDA, kemudian penentuan Action Priority (AP).

**Langkah 6 – Optimization (Optimalisasi)**
Penyusunan *Action Plan* untuk modus kegagalan berkategori AP = H, dengan penanggung jawab, tanggal target, dan metrik efektivitas.

**Langkah 7 – Results Documentation (Dokumentasi Hasil)**
Penyimpanan dalam basis data perusahaan, komunikasi ke supplier, dan integrasi ke *Control Plan*.

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 1. Planning &   │───▶│ 2. Structure    │───▶│ 3. Function     │
│    Preparation  │    │    Analysis     │    │    Analysis     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
┌─────────────────┐    ┌─────────────────┐    ┌────────▼────────┐
│ 7. Documentation│◀───│ 6. Optimization │◀───│ 4. Failure &    │
│    & Follow-up  │    │    (AP=H only)  │    │   5. Risk Anal. │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Replikasi Hasil Temuan Paper 1 (Bizeli & Terazzi, 2024)

Berdasarkan temuan kualitatif paper, sebuah skenario kuantitatif disusun untuk komponen *steering knuckle* yang diproduksi di anak perusahaan multinasional automotif di São Bernardo do Campo. Asumsi data historis:

- Volume produksi tahunan: $N = 1{,}200{,}000$ unit/tahun
- Biaya rework per kejadian: $C_{rework} = \text{R\$ } 45{,}00$ (≈ USD 9)
- Biaya scrap: $C_{scrap} = \text{R\$ } 180{,}00$ (≈ USD 36)
- Biaya klaim garansi/unit: $C_{warranty} = \text{R\$ } 1{,}200{,}00$ (≈ USD 240)
- Biaya rata-rata *recall*/kendaraan: $C_{recall} = \text{R\$ } 18{,}000{,}00$ (≈ USD 3,600)

Untuk modus kegagalan "porositas pada dudukan bearing" dengan skor AIAG/VDA klasik sebelum implementasi:
- $S = 8$ (kehilangan fungsi steering, risiko keselamatan)
- $O = 6$ (3 kejadian per 1000 unit, $O_i = 0{,}003 \times 1.200.000 = 3.600$ kejadian/tahun)
- $D = 7$ (deteksi sulit pada lini inspeksi manual)

Perhitungan ERC sebelum program AIAG/VDA:

$$ERC_{pre} = O_i \times (0{,}6 \times C_{rework} + 0{,}25 \times C_{scrap} + 0{,}15 \times C_{warranty})$$

$$ERC_{pre} = 3.600 \times (27 + 45 + 180) = 3.600 \times 252 = \text{R\$ } 907.200{,}00$$

Setelah implementasi AIAG/VDA FMEA dengan tindakan: (i) pemasangan sensor *X-ray real-time inspection* (meningkatkan $D$ dari 7 menjadi 3), dan (ii) revisi parameter proses *pouring* (menurunkan $O$ dari 6 menjadi 3):
- $O_{post} = 0{,}5 \times 1.200.000 / 1000 = 600$ kejadian/tahun

$$ERC_{post} = 600 \times 252 = \text{R\$ } 151.200{,}00$$

**Penghematan tahunan:** $\Delta ERC = 907.200 - 151.200 = \text{R\$ } 755.999{,}00$ (≈ USD 151.200), konsisten dengan klaim paper Bizeli dan Terazzi (2024) bahwa metodologi ini "mengurangi biaya terkait rework dan *recall* serta meningkatkan keandalan produk".

### 4.2 Korelasi dengan Paper 2 (Saputra & Sukmono, 2024)

Studi FMEA pada mesin *CNC milling* yang dilaporkan oleh Saputra dan Sukmono (2024) menggunakan pendekatan RPN klasik. Contoh modus kegagalan mesin:

| Modus Kegagalan | S | O | D | RPN |
|---|---|---|---|---|
| Kerusakan *spindle bearing* | 9 | 5 | 6 | **270** |
| Kegagalan *ball screw* | 8 | 4 | 5 | 160 |
| Putus *coolant hose* | 6 | 6 | 4 | 144 |

Nilai RPN tertinggi ($RPN = 270$) diprioritaskan untuk tindakan preventif berupa *predictive maintenance* berbasis *vibration analysis*, yang menurunkan skor $D$ menjadi 3 dan menghasilkan RPN baru $= 9 \times 5 \times 3 = 135$. Pengurangan 50% ini paralel dengan logika optimasi AP pada AIAG/VDA.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Batasan Metodologis

Paper Bizeli dan Terazzi (2024) mengakui tiga tantangan utama: (i) resistensi adopsi metode baru dari insinyur yang