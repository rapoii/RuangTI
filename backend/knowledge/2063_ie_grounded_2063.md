# 2063 — Redesain Produk Kesehatan dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Generalisasi Lintas Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumah tangga (home medical devices) di Indonesia dan Asia Tenggara mengalami pertumbuhan pesat, didorong oleh peningkatan kesadaran kesehatan preventif, adopsi praktik wellness holistik, dan pergeseran preferensi konsumen terhadap self-care. Salah satu produk yang mendapat perhatian signifikan dalam literatur rekayasa produk adalah *coffee enema basket*—sebuah perangkat yang digunakan untuk menyaring larutan kopi dalam prosedur enema. Produk ini, meskipun kontroversial secara klinis, memberikan tantangan rekayasa produk yang sangat menarik karena menggabungkan aspek keamanan pangan, biocompatibility, ergonomi pengguna, dan manufacturability.

Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* menyoroti bahwa produk coffee enema basket yang beredar di pasaran—khususnya produk impor atau produk lokal tanpa rekayasa yang memadai—seringkali memiliki缺陷 desain yang signifikan.缺陷 ini mencakup: (1) jumlah komponen yang berlebihan sehingga menyulitkan perakitan oleh pengguna akhir; (2) pemilihan material yang tidak optimal, misalnya penggunaan stainless steel grade rendah yang rentan korosi setelah paparan berulang terhadap cairan asam (kopi memiliki pH 4.8–5.2); (3) ketiadaan fitur snap-fit atau quick-release yang seharusnya menjadi standar pada perangkat medis sekali-pakai atau dapat-cuci; serta (4) biaya produksi yang tinggi akibat proses manufaktur yang tidak terstandar. DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309).

Urgensi ekonomis dari redesain ini tidak dapat dipandang sebelah mata. Studi menunjukkan bahwa biaya produksi alat kesehatan kategori ini di pasar domestik berkisar 40–60% lebih tinggi dibanding benchmark internasional akibat inefisiensi perakitan manual dan pemilihan proses yang suboptimal. Dari perspektif *Value Engineering*, setiap pengurangan 1 detik waktu perakitan pada volume produksi 100.000 unit/tahun dapat menghemat biaya tenaga kerja langsung hingga ratusan juta rupiah per tahun. Inilah mengapa pendekatan **Design for Manufacture and Assembly (DFMA)**—yang dikembangkan oleh Geoffrey Boothroyd dan Peter Dewhurst—menjadi semakin relevan.

Konteks lintas industri juga diperkuat oleh temuan Islam (2024) yang mengaplikasikan DfMA pada konstruksi jembatan pracetak (*prefabricated bridge construction*). DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Islam menunjukkan bahwa keputusan desain yang hanya didasarkan pada biaya dan kecukupan struktural cenderung mengabaikan variabel kritis seperti manufacturability, transportability, liftability, dan eractability—variabel yang justru menentukan成败 proyek di tahap shop-drawing dan site erection. Paralel dengan kasus coffee enema basket, Islam membuktikan bahwa integrasi DfMA pada tahap *concept dan preliminary design* mampu mencegah rework design yang mahal. Kedua paper ini menunjukkan bahwa filosofi DfMA bersifat *domain-agnostic* dan aplicable mulai dari produk konsumen skala kecil hingga infrastruktur sipil bernilai miliaran rupiah.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Prinsip Dasar Design for Manufacture (DFM)

DFM adalah metodologi sistematis untuk mendesain produk agar dapat diproduksi secara ekonomis dengan proses manufaktur yang ada. Teori ini didasarkan pada asumsi bahwa **70–80% biaya produk ditentukan pada tahap desain konseptual** (Boothroyd, 1994). Indikator utama kinerja DFM adalah *manufacturing cost ratio* yang didefinisikan sebagai:

$$C_{DFM} = \frac{C_{manufacturing}}{C_{total}} \times 100\%$$

di mana $C_{manufacturing}$ adalah total biaya fabrikasi (material, proses, tooling, overhead) dan $C_{total}$ mencakup seluruh biaya siklus hidup termasuk desain, pemasaran, distribusi, dan disposal. Untuk produk consumer health, benchmark industri menunjukkan $C_{DFM}$ yang sehat berada di kisaran 35–55%.

### 2.2. Prinsip Dasar Design for Assembly (DFA)

DFA berfokus pada simplifikasi proses perakitan dengan meminimalkan jumlah komponen dan menyederhanakan operasi handling, insertion, dan fastening. Metode **Boothroyd-Dewhurst DFA** menggunakan formula *Design Efficiency*:

$$E_{DA} = \frac{N_{min}}{N_a} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis komponen (berdasarkan fungsi esensial produk) dan $N_a$ adalah jumlah aktual komponen dalam desain. Untuk coffee enema basket, $N_{min}$ idealnya adalah 3 (badan saringan, tutup/dudukan, dan gagang/handle), sehingga jika desain awal memiliki 7 komponen, maka:

$$E_{DA} = \frac{3}{7} \times 100\% = 42.86\%$$

yang menunjukkan inefisiensi signifikan. Target rekayasa yang baik adalah $E_{DA} > 80\%$.

Waktu perakitan total dapat dimodelkan dengan persamaan Boothroyd:

$$T_{assembly} = \sum_{i=1}^{N_a} (T_{h,i} + T_{i,i} + T_{f,i})$$

di mana $T_{h,i}$ adalah waktu *handling*, $T_{i,i}$ adalah waktu *insertion*, dan $T_{f,i}$ adalah waktu *fastening* untuk komponen ke-$i$.

### 2.3. Integrasi DFMA: BoM-Based Cost Analysis

DFMA menggabungkan DFM dan DFA melalui *Bill of Materials* (BoM) optimization. Total biaya produksi dapat diformulasikan sebagai:

$$C_{total} = \sum_{j=1}^{N_a} \left[ C_{m,j} + C_{p,j}(t_{cycle,j}) + C_{a,j} \right]$$

di mana:
- $C_{m,j}$ = biaya material komponen $j$
- $C_{p,j}(t_{cycle,j})$ = biaya proses sebagai fungsi cycle time
- $C_{a,j}$ = biaya assembly per komponen

### 2.4. Indeks Material Utilization

Untuk menilai efisiensi pemilihan material, digunakan rasio utilisasi material:

$$\eta_{material} = \frac{m_{finished}}{m_{raw}} \times 100\%$$

Amirullah dan Jakaria (2024) menyoroti bahwa pemilihan stainless steel 304 untuk coffee enema basket harus memperhatikan *yield strength* ($\sigma_y \geq 215$ MPa), *corrosion resistance* ( Cr content $\geq 18\%$), dan formability-nya. Biaya material per unit:

$$C_{m,j} = \rho \cdot V_j \cdot p_j$$

dengan $\rho$ densitas material (kg/m³), $V_j$ volume komponen $j$ (m³), dan $p_j$ harga material per kg (IDR/kg). Untuk stainless steel 304, $\rho \approx 7930$ kg/m³ dan $p \approx$ Rp 45.000–65.000/kg.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis dari Amirullah & Jakaria (2024) dan Islam (2024), prosedur operasional standar redesain DFMA mengikuti **7-tahap sistematis** berikut:

### Tahap 1: Analisis Produk Eksisting
- Reverse engineering produk existing (Coffee Enema Basket konvensional)
- Identifikasi fungsi, geometri, material, dan proses produksi
- Pengukuran *key performance indicator*: jumlah part, waktu perakitan, biaya produksi, dan defect rate

### Tahap 2: Analisis Fungsi (Functional Analysis)
- Dekomposisi fungsi menggunakan *Function Analysis System Technique* (FAST)
- Identifikasi fungsi esensial vs fungsi tambahan
- Penentuan $N_{min}$ untuk perhitungan $E_{DA}$

### Tahap 3: Konseptualisasi Desain Baru
- Generate 3–5 alternatif konsep desain
- Evaluasi konsep menggunakan *Pugh Matrix* dengan kriteria: manufacturability, assemblability, biaya, estetika, dan keamanan pengguna
- Seleksi konsep terbaik dengan bobot prioritas

### Tahap 4: Pembuatan Desain Detail (CAD)
- Pemodelan 3D menggunakan SolidWorks/CATIA/Fusion 360
- *Design for Injection Molding* (DFIM) untuk komponen polimer
- *Design for Sheet Metal* untuk komponen stainless steel
- Aplikasi *draft angle* ($\alpha \geq 1°$), *fillet radius* ($r \geq 0.5$ mm), dan *uniform wall thickness* ($t_{min} \leq t \leq t_{max}$)

### Tahap 5: Analisis DFMA Kuantitatif
- Perhitungan *Design Efficiency* ($E_{DA}$)
- Estimasi biaya produksi
- Simulasi proses (DFM validation)
- Penilaian assembly sequence

### Tahap 6: Prototipe dan Validasi
- Pembuatan prototipe menggunakan rapid prototyping (FDM/SLA)
- Assembly trial time study dengan 10 operator berbeda
- *Failure Mode and Effects Analysis* (FMEA)
- *Gauge Repeatability & Reproducibility* (GR&R) untuk pengukuran kritis

### Tahap 7: Standardisasi dan Dokumentasi
- Penyusunan *Bill of Materials* final
- *Process Flow Chart* (PFC) untuk produksi
- *Standard Operating Procedure* (SOP) perakitan
- Desain jigs dan fixtures

### Diagram Alir Proses DFMA

```
[Start] → [Identifikasi Produk] → [Analisis Fungsi]
    ↓
[Reverse Engineering] → [Hitung E_DA Awal]
    ↓
[Generate Konsep] → [Pugh Matrix Selection] → [Konsep Terpilih]
    ↓
[Desain CAD 3D] → [DFM Check: Draft, Fillet, Wall]
    ↓
[DFA Check: Insertion, Fastening] → [Hitung E_DA Baru]
    ↓
[Cost Analysis] → [Prototyping] → [Uji Coba Assembly]
    ↓
[FMEA & Validasi] → [SOP Produksi] → [Standardisasi] → [End]
```

Islam (2024) menambahkan bahwa pada konteks produk infrastruktur (jembatan pracetak), integrasi BIM-DFMA harus memasukkan variabel **transportability** (berat & dimensi komponen agar sesuai dengan kapasitas truk dan crane), **liftability** (titik angkat yang aman), dan **erectability** (toleransi koneksi di lapangan) yang selaras dengan konsep *design for X* (DFX) dalam literatur teknik industri modern.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Kasus: Redesain Coffee Enema Basket

Berdasarkan data yang dielaborasi dari paper Amirullah & Jakaria (2024), kami melakukan rekonstruksi numerik untuk desain eksisting dan desain baru.

**Tabel 1. Perbandingan Desain Eksisting vs Redesain**

| Parameter | Desain Eksisting | Desain Redesain DFMA | Δ (%) |
|---|---|---|---|
| Jumlah komponen ($N_a$) | 7 | 4 | -42.9% |
| Jumlah komponen minimum ($N_{min}$) | 3 | 3 | 0% |
| Design Efficiency ($E_{DA}$) | 42.86% | 75.00% | +32.14% |
| Berat total (gram) | 285 | 195 | -31.6% |
| Waktu perakitan rata-rata (detik) | 86.4 | 41.7 | -51.7% |
| Biaya material (IDR/unit) | 18.500 | 12.200 | -34.1% |
| Biaya produksi total (IDR/unit) | 32.500 | 21.800 | -32.9% |
| Cycle time produksi (menit) | 14.2 | 9.6 | -32.4% |

### 4.2. Perhitungan Step-by-Step

**Langkah 1: Perhitungan Design Efficiency Awal**

Desain eksisting memiliki 7 komponen: badan utama, tutup, ring pengunci, saringan (mesh), gagang, sekrup, dan ring karet. Secara fungsional, hanya 3 fungsi esensial yang diperlukan (badan, tutup, saringan), sehingga $N_{min} = 3$:

$$E_{DA,awal} = \frac{3}{7} \times 100\% = 42.86\%$$

**Langkah 2: Perhitungan Design Efficiency Redesain**

Desain baru mengintegrasikan saringan dan badan utama menjadi satu bagian monolitik (las titik), menghilangkan ring pengunci dengan snap-fit, dan menggabungkan gagang dengan tutup:

$$E_{DA,baru} = \frac{3}{4} \times 100\% = 75.00\%$$

Peningkatan $E_{DA}$ sebesar 32.14 poin persentase mengindikasikan simplifikasi struktural yang signifikan.

**Langkah 3: Perhitungan Penghematan Waktu Perakitan**

Waktu perakitan total dihitung menggunakan model Boothroyd dengan 5 operasi per komponen (handling: 1.5 s, insertion: 2.0 s, fastening: 1.0 s untuk komponen sederhana):

$$T_{assembly,awal} = 7 \times (1.5 + 2.0 + 1.0) + 7 \times 1.2 = 35.4 + 8.4 = 43.8 \text{ s (teoretis)}$$

Tambah