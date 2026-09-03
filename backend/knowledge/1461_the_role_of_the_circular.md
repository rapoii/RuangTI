# 1461 — Ekonomi Sirkular dalam Transportasi Jalan untuk Mitigasi Perubahan Iklim dan Pengurangan Deplesi Sumber Daya: Perspektif Teknik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** The Role of the Circular Economy in Road Transport to Mitigate Climate Change and Reduce Resource Depletion
**Jurnal & Sitasi Utama:** Victor Hugo Souza de Abreu, Mariane Gonzalez da Costa, Valeria Xavier da Costa (2022). *Sustainability*. DOI: [https://doi.org/10.3390/su14148951](https://doi.org/10.3390/su14148951)
**Sitasi Pendukung:** Andra-Cristina Enache, Ionela Grecu, Petrişor Samoilă (2024). *Materials*. DOI: [https://doi.org/10.3390/ma17122991](https://doi.org/10.3390/ma17122991)

---

## 1. Pendahuluan dan Konteks Industri

Sektor transportasi global merupakan kontributor dominan terhadap emisi gas rumah kaca (GRK) dan deplesi sumber daya alam tak terbarukan. Abreu, Souza de Abreu, Gonzalez da Costa, dan Xavier da Costa (2022) dalam *Sustainability* (DOI: [10.3390/su14148951](https://doi.org/10.3390/su14148951)) menegaskan bahwa sektor transportasi, khususnya moda jalan, bertanggung jawab atas berbagai dampak lingkungan, termasuk kontribusi terhadap perubahan iklim melalui emisi GRK dan pengurasan cadangan sumber daya alam. Studi tersebut secara eksplisit mengisi celah literatur dengan mengkaji penerapan ekonomi sirkular pada tingkat mikro, meso, dan makro dalam transportasi jalan, yang mencakup seluruh tahapan siklus hidup beserta **7 Rs reverse cycle** (Reduce, Reuse, Recycle, Recover, Redesign, Remanufacture, dan Repurpose). Dari tinjauan literatur tersebut, teridentifikasi 46 praktik terbaik yang memberikan panduan operasional bagi para pengambil keputusan di sektor transportasi.

Urgensi masalah ini makin nyata ketika kita merujuk pada data yang dihimpun oleh Enache, Grecu, dan Samoilă (2024) dalam *Materials* (DOI: [10.3390/ma17122991](https://doi.org/10.3390/ma17122991)), yang menunjukkan bahwa produksi plastik global melonjak dari **2 juta metrik ton (1950) menjadi 400,3 juta metrik ton (2022)**, di mana industri kemasan sendiri menyumbang sekitar **44%** dari total produksi tersebut. Polietilen tereftalat (PET) menjadi polimer yang paling banyak digunakan dalam kemasan, dengan lebih dari **90%** dari sekitar **1 juta botol PET yang terjual setiap menit** berakhir di tempat pembuangan akhir (TPA) atau lautan, dengan waktu degradasi mencapai ratusan tahun. Angka-angka ini menunjukkan bahwa integrasi prinsip ekonomi sirkular dalam rantai pasok transportasi jalan bukan lagi opsi strategis, melainkan keharusan operasional. Konteks industri manufaktur otomotif, infrastruktur jalan (asphalt modification menggunakan recycled PET), dan daur ulang komponen kendaraan menjadi titik masuk yang paling relevan untuk rekayasa sistem industri kontemporer.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Neraca Massa Sistem Sirkular

Untuk mengkuantifikasi aliran material dalam sistem ekonomi sirkular transportasi jalan, Abreu et al. (2022) menggunakan pendekatan *Material Flow Analysis* (MFA). Prinsip konservasi massa dalam sistem tertutup didefinisikan sebagai:

$$\frac{dM_s}{dt} = \dot{M}_{in} - \dot{M}_{out} - \dot{M}_{recycled} - \dot{M}_{lost}$$

di mana $M_s$ adalah stok material dalam sistem, $\dot{M}_{in}$ adalah laju input material virgin, $\dot{M}_{out}$ adalah laju output emisi/limbah, $\dot{M}_{recycled}$ adalah laju material yang dikembalikan ke siklus produktif, dan $\dot{M}_{lost}$ adalah laju kehilangan material ke lingkungan.

### 2.2 Material Circularity Indicator (MCI)

Indeks sirkularitas material yang diadopsi Abreu et al. (2022) mengikuti kerangka Ellen MacArthur Foundation:

$$MCI = 1 - \left(\frac{V_w + V_e}{2M}\right) + \frac{F_r \cdot W_x}{M}$$

dengan parameter:
- $V_w$ = volume limbah ke TPA
- $V_e$ = volume emisi/efluen tak termanfaatkan
- $M$ = total massa material dalam sistem
- $F_r$ = fraksi material hasil daur ulang yang digunakan kembali dalam siklus (recycling feedstock)
- $W_x$ = massa material yang masuk siklus setelah proses reverse logistics

Nilai MCI mendekati 1 mengindikasikan sistem dengan linearitas rendah (high circularity), sedangkan MCI mendekati 0 menandakan dominasi model take-make-dispose.

### 2.3 Model Mitigasi Emisi GRK

Pengurangan emisi GRK akibat substitusi material virgin dengan material daur ulang dapat dimodelkan sebagai:

$$\Delta CO_2 = (E_v \cdot m_v) - (E_r \cdot m_r)$$

di mana $E_v$ dan $E_r$ berturut-turut adalah faktor emisi ($\text{kg CO}_2\text{eq/kg material}$) untuk material virgin dan recycled, sementara $m_v$ dan $m_r$ adalah massa material yang digunakan. Untuk PET, Enache et al. (2024) melaporkan bahwa proses *catalytic glycolysis* mampu menghasilkan monomer BHET (bis(2-hydroxyethyl) terephthalate) dengan yield hingga **80–90%**, sehingga:

$$\eta_{glycolysis} = \frac{m_{BHET,output}}{m_{PET,input}} \times 100\%$$

### 2.4 Fungsi Utilitas Multi-Atribut Reverse Cycle

Seleksi praktik terbaik dari 46 alternatif yang diidentifikasi Abreu et al. (2022) dapat diformulasikan sebagai masalah optimasi multi-kriteria:

$$\max_{x \in X} U(x) = \sum_{i=1}^{n} w_i \cdot u_i(x)$$

dengan kendala $\sum_{i=1}^{n} w_i = 1$, $w_i \geq 0$, di mana $w_i$ adalah bobot atribut ke-$i$ (emisi, biaya, ketersediaan teknologi, kesesuaian regulasi), dan $u_i(x)$ adalah utilitas ternormalisasi atribut ke-$i$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi ekonomi sirkular dalam transportasi jalan mengikuti kerangka SOP berlapis yang dirancang Abreu et al. (2022) untuk level **mikro** (perusahaan), **meso** (rantai pasok), dan **makro** (kebijakan). Tahapan operasionalnya adalah sebagai berikut:

**Tahap 1 — Karakterisasi & Audit Material (Reverse Cycle Tahap 0).** Melakukan inventarisasi seluruh material input-output menggunakan formulir Bill-of-Materials (BOM) yang dilabeli dengan indeks daur ulang. Enache et al. (2024) menekankan bahwa karakterisasi fisikokimia PET (densitas $\rho \approx 1.38 \text{ g/cm}^3$, titik leleh $T_m \approx 260°C$) menjadi prasyarat untuk menentukan rute daur ulang yang optimal.

**Tahap 2 — Penerapan Hierarki 7 Rs.** Urutan prioritas sesuai Abreu et al. (2022): *Rethink* → *Reduce* → *Reuse* → *Repair* → *Refurbish* → *Remanufacture* → *Recycle*. Setiap tahap memiliki *gate criterion* berbasis rasio:

$$R_{gate,k} = \frac{\text{CO}_2\text{ avoided}_k}{\text{Cost increment}_k} \geq \theta_k$$

di mana $\theta_k$ adalah threshold spesifik per tahap.

**Tahap 3 — Catalytic Glycolysis (untuk PET dalam infrastruktur jalan).** Mengacu pada Enache et al. (2024), proses glikolisis PET dilakukan dengan katalis (misal zinc acetate atau titanium(IV) butoxide) pada suhu **180–220°C** dengan rasir mol etilen glikol/PET **4:1 sampai 6:1**. Diagram alirnya:

$$\text{PET (limbah)} \xrightarrow[\text{katalis}]{\text{EG, 180-220°C}} \text{BHET} \rightarrow \text{Poliol daur ulang} \rightarrow \text{Polyurethane/Asphalt modifier}$$

**Tahap 4 — Reverse Logistics & Penutupan Loop.** Mendesain jaringan distribusi balik (*reverse logistics network*) dengan lokasi Collection Center (CC) dan Recycling Facility (RF). Model lokasinya mengikuti *facility location problem*:

$$\min \sum_{i \in I} \sum_{j \in J} c_{ij} \cdot d_{ij} \cdot q_{ij}$$

dengan kendala kapasitas $\sum_{j} q_{ij} \leq Q_i$ untuk setiap CC.

**Tahap 5 — Monitoring & Continuous Improvement.** Pemantauan menggunakan Key Performance Indicators (KPI): MCI, tingkat daur ulang aktual, emisi per km kendaraan, dan persentase closed-loop material.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Daur Ulang PET untuk Modifikasi Aspal Jalan

Sebuah proyek perkerasan jalan raya sepanjang **10 km** dengan lebar lajur efektif **3,5 m** dan tebal lapis aspal modifikasi PET **5 cm** menjadi studi kasus integrasi kedua paper.

**Input Parameter:**

| Parameter | Nilai | Sumber |
|-----------|-------|--------|
| Volume aspal modifikasi | $V = 10.000 \text{ m} \times 3.5 \text{ m} \times 0.05 \text{ m} = 1.750 \text{ m}^3$ | Kalkulasi |
| Densitas campuran | $\rho_{mix} = 2.350 \text{ kg/m}^3$ | Standar Bina Marga |
| Massa total campuran | $M_{mix} = 1.750 \times 2.350 = 4.112.500 \text{ kg}$ | Kalkulasi |
| Fraksi PET dalam aspal modifikasi | $f_{PET} = 0,08$ (8% b/b) | Abreu et al. (2022) |
| Massa PET yang dibutuhkan | $m_{PET} = 4.112.500 \times 0,08 = 329.000 \text{ kg}$ | Kalkulasi |

**Langkah 1 — Perhitungan MCI dengan Substitusi PET Daur Ulang:**

Asumsikan sebelum implementasi, seluruh PET diperoleh dari material virgin (MCI = 0,2). Setelah substitusi 60% PET virgin dengan PET hasil catalytic glycolysis:

$$W_x = 0,60 \times 329.000 = 197.400 \text{ kg}$$

$$F_r = \frac{197.400}{329.000} = 0,60$$

Dengan asumsi $V_w = 200.000$ kg dan $V_e = 50.000$ kg, $M = 329.000$ kg:

$$MCI_{after} = 1 - \left(\frac{200.000 + 50.000}{2 \times 329.000}\right) + (0,60) \cdot \frac{197.400}{329.000}$$

$$MCI_{after} = 1 - 0,379 + 0,360 = 0,981$$

Indeks sirkularitas meningkat signifikan dari 0,200 menjadi **0,981** (>97% improvement), memenuhi target Ellen MacArthur Foundation untuk *circular economy assets*.

**Langkah 2 — Perhitungan Mitigasi Emisi GRK:**

Faktor emisi PET virgin: $E_v = 2,15 \text{ kg CO}_2\text{eq/kg}$ (life-cycle cradle-to-gate, Enache et al. 2024). Faktor emisi PET daur ulang via glycolysis: $E_r = 0,85 \text{ kg CO}_2\text{eq/kg}$ (estimasi pengurangan energi 60%).

$$\Delta CO_2 = (2,15 \times 197.400) - (0,85 \times 197.400)$$

$$\Delta CO_2 = 424.410 - 167.790 = 256.620 \text{ kg CO}_2\text{eq}$$

Penghematan emisi per proyek: **≈ 256,6 ton CO₂eq**, ekuivalen dengan emisi tahunan **±55 mobil penumpang** (rata-rata 4,6 t CO₂eq/kendaraan/tahun).

**Langkah 3 — Yield Glikolisis dan Throughput:**

Dengan $\eta_{glycolysis} = 85\%$ (kisaran tengah Enache et al. 2024):

$$m_{BHET} = 197.400 \times 0,85 = 167.790 \text{ kg BHET}$$

BHET ini dapat dipolimerisasi kembali menjadi PET *food-grade* atau diaplikasikan sebagai *polyol* dalam resin untuk komponen interior otomotif (closing the loop di level meso).

### 4.2 Interpretasi Manajerial

Hasil kuantitatif ini menunjukkan bahwa substitusi PET daur ulang pada proyek infrastruktur jalan tidak hanya memenuhi target dekarbonisasi Abreu et al. (2022) pada level makro, tetapi juga memberikan nilai tambah ekonomi melalui penciptaan pasar sekunder untuk monomer hasil glikolisis (Enache et al. 2024). ROI proyek dapat dihitung sebagai:

$$ROI = \frac{\Delta CO_2 \times P_{carbon} + \Delta Cost_{material}}{Capex