# 1935 — Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA): Integrasi Efisiensi Manufaktur, Rekayasa Rancang Produk, dan Optimasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (UPS – Universitas 17 Agustus 1945 Surabaya)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur alat kesehatan rumah tangga dan perangkat wellness di Indonesia menghadapi tantangan struktural yang semakin kompleks sepanjang 2020–2024. Permintaan produk terapi komplementer seperti *coffee enema kit*—yang berfungsi sebagai perangkat irigasi kolon menggunakan ekstrak kopi untuk tujuan detoksifikasi—meningkat signifikan seiring dengan tren *wellness tourism* di Bali, Yogyakarta, dan kawasan wellness retreat Ubud. Amirullah dan Jakaria (2024) dalam studinya yang dipublikasikan melalui DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengidentifikasi bahwa *coffee enema basket* generasi sebelumnya memiliki缺陷 desain yang krusial: jumlah komponen terlalu banyak, geometri *funnel*-nya menyebabkan *backflow* (aliran balik) yang menurunkan higienitas, serta proses perakitan yang memerlukan 7 langkah terpisah dengan total waktu rata-rata 4,8 menit per unit. Masalah ini bukan sekadar estetika, melainkan berdampak langsung pada *bill of materials* (BoM), *cycle time* produksi, dan kepatuhan terhadap standar keamanan pangan serta alat kesehatan (Amirullah & Jakaria, 2024).

Urgensi ekonomis dari redesain ini terletak pada tiga matriks kinerja manufaktur yang saling tergantung: (1) **biaya produksi per unit**, (2) **waktu perakitan (assembly time)**, dan (3) **tingkat cacat (*defect rate*) di lini produksi**. Produk lama menggunakan 12 komponen discrete parts dengan 8 titik koneksi sekrup dan klip, menghasilkan *DFA (Design for Assembly) index* sebesar hanya 38%. Bandingkan dengan benchmark industri alat kesehatan global yang menargetkan *DFA index* ≥75%. Selisih 37 poin persentase ini merepresentasikan inefisiensi yang, bila dikalikan dengan target produksi 5.000 unit/bulan, menimbulkan *overhead cost* sekitar Rp 187.500.000 per bulan (Amirullah & Jakaria, 2024).

Dalam konteks yang lebih luas, Islam (2024) melalui DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa metodologi DFMA yang awalnya populer di industri *prefabricated bridge construction* dapat di-*cross-pollinate* ke industri consumer goods dan alat kesehatan. Temuan sentralnya adalah bahwa keputusan desain yang hanya mempertimbangkan *cost* dan *structural adequacy* tanpa memasukkan variabel manufacturability, transportability, dan assemblyability akan menghasilkan *buildability problems* yang baru teridentifikasi pada tahap *shop-drawing* atau bahkan di lantai produksi—saat *mould* sudah dipotong dan koreksi menjadi sangat mahal (Islam, 2024). Pelajaran ini menjadi justifikasi teoretis mengapa redesain coffee enema basket dengan pendekatan DFMA bukan sekadar *cost-down exercise*, melainkan investasi pada *design robustness* untuk siklus hidup produk 5–7 tahun ke depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Design for Manufacture and Assembly (DFMA)

DFMA merupakan kerangka metodologis yang mengintegrasikan dua subdomain:

1. **Design for Manufacture (DFM)** — mengoptimasi komponen agar mudah, murah, dan konsisten diproduksi dengan proses manufaktur tertentu (injection molding, sheet metal forming, CNC machining, dll.).
2. **Design for Assembly (DFA)** — mengoptimasi produk agar komponen-komponennya dapat dirakit dengan jumlah langkah minimum, tanpa *reorientation*, tanpa *fastener* berlebih, dan dengan toleransi yang realistis.

### 2.2. Formulasi DFA Index (Boothroyd-Dewhurst Adapted)

Indeks efisiensi perakitan menurut pendekatan Boothroyd-Dewhurst yang diadaptasi oleh Amirullah dan Jakaria (2024) diformulasikan sebagai berikut:

$$\eta_{DFA} = \frac{N_{min}}{N_{actual}} \times 100\%$$

Di mana:
- $\eta_{DFA}$ = efisiensi desain untuk perakitan (%)
- $N_{min}$ = jumlah komponen minimum teoritis yang diperlukan untuk memenuhi fungsi produk
- $N_{actual}$ = jumlah komponen aktual pada desain

Untuk coffee enema basket original: $N_{actual} = 12$ bagian diskrit. Setelah redesain dengan mengeliminasi 5 komponen redundant (klip pengunci ganda, ring penguat yang difusikan ke badan *funnel*, dan dudukan filter terpisah yang diintegrasikan dengan *mesh basket*), maka $N_{actual,new} = 7$ dan $N_{min} = 5$ (keranjang, tutup, gagang, gasket silikon, *eyelet* suspensi). Dengan demikian:

$$\eta_{DFA,new} = \frac{5}{7} \times 100\% \approx 71{,}43\%$$

### 2.3. Formulasi Waktu Perakitan

Waktu perakitan total dimodelkan sebagai jumlah waktu setiap langkah:

$$T_{assembly} = \sum_{i=1}^{n} t_i + \sum_{j=1}^{m} t_{tool,j} + T_{reorient}$$

Di mana $t_i$ adalah waktu handling+pemasangan komponen ke-$i$, $t_{tool,j}$ adalah waktu penggunaan tooling (obeng, tang, jig) ke-$j$, dan $T_{reorient}$ adalah total waktu memutar/memiringkan produk saat perakitan. Pada redesain Amirullah dan Jakaria (2024), eliminasi 4 operasi *fastener* (sekrup → *snap-fit*) menghasilkan:

$$\Delta T_{assembly} = T_{original} - T_{redesign} = 4{,}80 - 2{,}15 = 2{,}65 \text{ menit/unit}$$

Penghematan 2,65 menit/unit ini, pada volume produksi 5.000 unit/bulan dengan 1 shift (8 jam × 25 hari = 12.000 menit/bulan), setara dengan kapasitas produksi tambahan sebesar:

$$\Delta \text{Units} = \frac{\Delta T_{assembly} \times \text{Units}_{original}}{T_{original}} = \frac{2{,}65 \times 5.000}{4{,}80} \approx 2.760 \text{ unit/bulan}$$

### 2.4. Formulasi Penghematan Biaya Produksi

$$C_{saving} = (C_{material} + C_{labor} + C_{tooling}) \times Q - C_{tooling,redesign}$$

Dengan $Q$ = volume produksi tahunan. Studi Amirullah dan Jakaria (2024) melaporkan penghematan biaya produksi per unit sebesar Rp 18.750, sehingga pada volume 60.000 unit/tahun:

$$C_{saving,annual} = 18.750 \times 60.000 = \text{Rp } 1.125.000.000$$

### 2.5. Multi-Criteria Decision Framework (Pendukung Islam, 2024)

Untuk mengintegrasikan DFMA dengan BIM atau sistem pendukung keputusan, Islam (2024) menyusun kerangka *weighted scoring*:

$$S_i = \sum_{k=1}^{K} w_k \cdot s_{i,k}$$

Di mana $S_i$ adalah skor desain alternatif ke-$i$, $w_k$ adalah bobot kriteria ke-$k$ (manufacturability, transportability, liftability, erectability, cost), dan $s_{i,k}$ adalah skor ternormalisasi 0–100 untuk kriteria tersebut pada alternatif $i$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Tahapan Sistematis Redesain DFMA (Sintesis Amirullah & Jakaria, 2024)

```
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 1: Analisis Produk Existing                            │
│   • BoM extraction                                           │
│   • Functional decomposition (FAST diagram)                  │
│   • Baseline DFA index                                       │
├─────────────────────────────────────────────────────────────┤
│ TAHAP 2: Identifikasi Defisiensi Manufaktur & Assembly       │
│   • Excessive part count                                     │
│   • Inadequate handling features                             │
│   • Unnecessary fasteners & reorientation                    │
├─────────────────────────────────────────────────────────────┤
│ TAHAP 3: Generate Design Alternatives                        │
│   • Part consolidation                                       │
│   • Material substitution                                    │
│   • Process optimization (injection molding → overmolding)    │
├─────────────────────────────────────────────────────────────┤
│ TAHAP 4: Evaluasi Kuantitatif Alternatif                     │
│   • Hitung η_DFA, T_assembly, C_total                        │
│   • Weighted scoring (jika multi-kriteria)                   │
├─────────────────────────────────────────────────────────────┤
│ TAHAP 5: Seleksi & Validasi Prototipe                        │
│   • Functional testing                                       │
│   • Ergonomic assessment                                     │
│   • Pilot run (50–100 unit)                                  │
├─────────────────────────────────────────────────────────────┤
│ TAHAP 6: Implementasi Mass Production                       │
│   • Tooling fabrication                                      │
│   • SOP perakitan baru                                       │
│   • Training operator                                        │
└─────────────────────────────────────────────────────────────┘
```

### 3.2. SOP Lini Produksi Redesain Coffee Enema Basket

1. **Pra-produksi (Setup):** Siapkan 7 komponen pada *kitting tray* berlabel, jig perakitan pada posisi ergonomis 95° dari operator.
2. **Sub-assembly 1:** Pasang gasket silikon (kode A) ke bodi utama menggunakan *press-fit* (gaya 15 N, stroke 8 mm).
3. **Sub-assembly 2:** Integrasi *mesh basket* ke tutup dengan *snap-fit* (tidak perlu tool).
4. **Assembly Final:** Gabungkan sub-assembly 1 dan 2, putar 90° untuk mengunci *bayonet joint*.
5. **Quality Gate:** Inspeksi visual kebocoran pada tekanan air 0,3 bar selama 30 detik.
6. **Packaging:** Masukkan ke *blister pack* steril dengan kartu instruksi bilingual.

### 3.3. Integrasi DFMA dengan BIM (Prinsip dari Islam, 2024)

Untuk produk dengan struktur kompleks, kerangka Islam (2024) merekomendasikan *parametric modeling* di mana setiap komponen membawa metadata manufacturability: toleransi, lead time produksi, biaya fabrikasi, dan *assembly sequence*. Ini memungkinkan simulasi *virtual assembly* sebelum tooling fisik dibuat, sehingga *iteration cost* dapat ditekan hingga 70% (Islam, 2024).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Baseline Data (Amirullah & Jakaria, 2024)

| Parameter | Desain Lama | Desain Baru (DFMA) |
|-----------|-----------|--------------------|
| Jumlah komponen | 12 | 7 |
| Jumlah *fastener* | 8 | 0 |
| Jumlah langkah assembly | 7 | 3 |
| Waktu assembly (menit/unit) | 4,80 | 2,15 |
| DFA index | 38% | 71,43% |
| Biaya material/unit | Rp 32.500 | Rp 18.750 |
| Biaya labour/unit | Rp 24.000 | Rp 10.750 |
| Total biaya/unit | Rp 56.500 | Rp 29.500 |
| Volume produksi/bulan | 5.000 | 5.000 |

### 4.2. Perhitungan Penghematan Biaya

$$\Delta C_{unit} = C_{original} - C_{redesign} = 56.500 - 29.500 = \text{Rp } 27.000/\text{unit}$$

Pada produksi bulanan 5.000 unit:

$$C_{saving,monthly} = 27.000 \times 5.000 = \text{Rp } 135.000.000$$

Penghematan tahunan (12 bulan):

$$C_{saving,annual} = 135.000.000 \times 12 = \text{Rp } 1.620.000.000$$

### 4.3. Perhitungan Peningkatan Throughput

Tanpa redesain, waktu produksi untuk 5.000 unit:

$$T_{monthly,old} = 5.000 \times 4{,}80 = 24.000 \text{ menit} = 400 \text{ jam}$$

Dengan redesain:

$$T_{monthly,new} = 5.000 \times 2{,}15 = 10.750 \text{ menit} \approx 179{,}17 \text{ jam}$$

Dengan 1 shift (8 jam/hari, 25 hari/bulan =