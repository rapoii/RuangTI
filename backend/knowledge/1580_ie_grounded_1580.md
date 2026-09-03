# 1580 — Jaringan Sensor Nirkabel untuk Liofilisasi: Rekayasa Sistem PAT, Pemantauan Real-Time, dan Optimalisasi Siklus Pengeringan Beku Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur biofarmasi modern yang digunakan untuk menstabilkan produk biologis termolabil seperti vaksin mRNA, antibodi monoklonal (mAb), dan terapi gen. Proses ini terdiri atas tiga tahap: pembekuan (*freezing*), pengeringan primer (*primary drying*) melalui sublimasi, dan pengeringan sekunder (*secondary drying*) melalui desorpsi. Tahap pengeringan primer menjadi bottleneck produksi karena 60–80% dari total durasi siklus—bahkan mencapai 72–120 jam untuk batch vial komersial—dan konsumsi energi tertinggi (Meza‐Galvan *et al.*, 2026). Dalam konteks industri farmasi global yang bernilai lebih dari USD 400 miliar, inefisiensi satu jam pengeringan primer pada fasilitas komersial dapat menimbulkan kerugian produksi senilai USD 50.000–150.000 per hari tergantung kapasitas lini.

Permasalahan fundamental yang diangkat Meza‐Galvan, Strongrich, dan Darwish (2026) adalah keterbatasan instrumentasi kabel konvensional (*wired thermocouples*) yang hanya mampu memantau beberapa vial dalam satu siklus, sehingga profil termal *batch* tidak terpetakan secara spasial. Padahal, keragaman (*heterogeneity*) suhu produk antar-vial pada rak (*shelf*) dapat mencapai 3–5 °C akibat gradien tekanan ruang dan non-uniformitas perpindahan panas. Heterogenitas ini berdampak langsung pada variasi kadar air residu dan kemurnian produk akhir yang menjadi fokus监管监管 (regulator) seperti FDA melalui inisiatif Process Analytical Technology (PAT) dan Quality by Design (QbD) yang diterbitkan sejak 2004.

Jaringan sensor nirkabel (*Wireless Sensor Networks*, WSN) muncul sebagai solusi arsitektural yang memungkinkan pemasangan puluhan hingga ratusan node sensor di dalam ruang vakum tanpa menembus dinding *dryer* melalui *feedthrough* kabel tradisional. Artusio, Barresi, dan Pisano (2026) menekankan bahwa WSN merupakan salah satu pilar transformasi digital (*Industry 4.0*) di fasilitas farmasi karena menyediakan data densitas tinggi (*high-density data*) yang menjadi prasyarat kontrol *closed-loop* dan *model-predictive control* (MPC). Urgensi ekonominya adalah pengurangan *cycle time* 15–25%, peningkatan *batch yield* 2–4%, dan pencegahan *failed batch* akibat *collapse* atau *melt-back* produk. Secara teknis, tantangan utama meliputi operasi pada lingkungan vakum (1–100 Pa), suhu kriogenik (-40 hingga -10 °C untuk produk), interferensi elektromagnetik dari motor vakum dan *RF generator*, serta kebutuhan efisiensi energi agar node dapat beroperasi mandiri selama 5–7 hari siklus.

---

## 2. Landasan Teori & Formulasi Matematis

Model perpindahan panas dan massa dalam pengeringan primer diformulasikan secara klasik oleh Pikal (1985) dan disempurnakan oleh Nail dan Gatlin, kemudian diadaptasi untuk framework PAT oleh Meza‐Galvan *et al.* (2026). Laju sublimasi $\dot{m}$ pada tiap vial dikontrol oleh dua resistansi seri: resistansi perpindahan panas dari rak ke antarmuka sublimasi $R_s$, dan resistansi aliran uap air melalui lapisan beku $R_p$.

$$\dot{m} = \frac{T_{shelf} - T_b}{R_s \cdot \Delta H_s} = \frac{P_b - P_c}{R_p}$$

dengan $\Delta H_s$ adalah entalpi sublimasi es ($\approx 2800$ kJ/kg pada 0 °C), $T_{shelf}$ suhu rak, $T_b$ suhu *product interface* (bottleneck), $P_b$ tekanan uap air jenuh pada $T_b$, dan $P_c$ tekanan ruang (*chamber pressure*). Resistansi total vial didefinisikan:

$$R_{tot} = \frac{T_{shelf} - T_b}{\dot{m} \cdot \Delta H_s}$$

Hubungan resistansi $R_p$ terhadap kekasaran lapisan beku dan permeabilitasnya mengikuti persamaan Hagen-Poiseuille yang dimodifikasi:

$$R_p = \frac{l}{A_p \cdot K_p} = \frac{l^2}{A_p \cdot k_p^0}$$

dengan $l$ adalah ketebalan lapisan kering, $A_p$ luas penampang vial, $K_p$ permeabilitas lapisan, dan $k_p^0$ permeabilitas intrinsik yang bergantung pada morfologi kristal es. Tekanan uap jenuh $P_b(T_b)$ mengikuti persamaan Clausius-Clapeyron:

$$\ln P_b = -\frac{A}{T_b} + B$$

dengan parameter $A = 6144{,}96$ K dan $B = 24{,}721$ untuk es pada rentang -50 hingga 0 °C (Sumber: Handbook of Chemistry and Physics, adaptasi Meza‐Galvan *et al.*, 2026).

Untuk arsitektur WSN, model konsumsi energi node mengikuti persamaan First Order Radio (Heinzelman, 2000):

$$E_{tx}(k, d) = k \cdot (E_{elec} + \epsilon_{amp} \cdot d^\alpha)$$

$$E_{rx}(k) = k \cdot E_{elec}$$

dengan $k$ ukuran paket (bit), $d$ jarak komunikasi, $\alpha$ eksponen path-loss (umumnya 2 untuk *line-of-sight* dalam ruang vakum), $E_{elec}$ energi elektronika ($\approx 50$ nJ/bit), dan $\epsilon_{amp}$ energi amplifier ($\approx 100$ pJ/bit/m²). Umur baterai node:

$$T_{life} = \frac{E_{battery} - E_{sense}}{P_{sleep} + N_{tx} \cdot (E_{tx} + E_{rx}) / \tau}$$

Kualitas tautan RF dalam ruang vakum dan lingkungan rendah suhu dimodelkan oleh persamaan Friis yang diperluas dengan faktor koreksi:

$$P_r = P_t \cdot G_t \cdot G_r \cdot \left(\frac{\lambda}{4\pi d}\right)^2 \cdot \eta_{vac} \cdot e^{-\beta_{ice} \cdot l_{path}}$$

dengan $\eta_{vac} \approx 0{,}9$ faktor efisiensi propagasi dalam vakum parsial, $\beta_{ice}$ koefisien atenuasi akumulasi es pada dinding vial ($\approx 0{,}2$ dB/mm pada 2,4 GHz), dan $l_{path}$ ketebalan es yang dilalui sinyal. Untuk aplikasi WSN liofilisasi, atenuasi ini mengharuskan topologi *mesh* atau *star-with-relay* dengan *gateway* yang ditempatkan di dinding ruang (*chamber wall*) sebagai *sink node*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti SOP berlapis yang diuraikan oleh Meza‐Galvan *et al.* (2026) dan Artusio *et al.* (2026), terdiri atas tujuh tahap:

**Tahap 1 — Penempatan Node Sensor.** Sensor nirkabel termo-kapasitif (misalnya tipe Sensirion SHTC3 atau custom MEMS dengan TC terintegrasi) dipasang pada dasar vial menggunakan *thermal adhesive* berkonduktivitas tinggi ($k > 1{,}5$ W/m·K). Untuk setiap rak, 16–64 node disebar mengikuti *latin hypercube sampling* agar representatif. Topologi jaringan yang direkomendasikan adalah *hybrid mesh-star* dengan satu *gateway* aktif per rak.

**Tahap 2 — Inisialisasi dan Sinkronisasi.** Sebelum siklus dimulai, seluruh node di-*commissioning* pada suhu ruang untuk kalibrasi dan uji *packet delivery ratio* (PDR). Standar internal mensyaratkan PDR > 99% pada jarak 0,5–2 m di dalam ruang tertutup. Sinkronisasi waktu menggunakan protokol IEEE 802.15.4e TSCH (*Time-Synchronized Channel Hopping*) untuk memastikan *timestamped* data termal memiliki resolusi ±1 s.

**TahAP 3 — Pengisian Baterai dan Validasi Energi.** Baterai lithium primer (Li-SOCl₂) berkapasitas 2,4 Ah digunakan karena toleransi terhadap suhu -40 °C. Alternatifnya, *energy harvesting* termoelektrik dari gradien suhu vial-rak memberikan $P_{harv} \approx 10–50$ μW per node, cukup untuk transmisi periodik setiap 30–60 s. Validasi dilakukan dengan benchmark umur baterai minimum 168 jam (7 hari) sesuai standar WHO Annex 4 untuk produksi steril.

**Tahap 4 — Pemantauan Siklus Berjalan.** Selama pengeringan primer, setiap node mengirim paket data (suhu produk $T_b$, suhu rak $T_s$, kelembapan internal, dan diagnostik baterai) setiap 10–60 s ke *gateway*. Data dikirim ke *cloud SCADA* melalui tautan nirkabel *out-of-chamber* (Wi-Fi/LoRa) untuk analitik *real-time*.

**Tahap 5 — Pemodelan dan Prediksi.** Data WSN dimasukkan ke model *unsteady heat transfer* 1D vial:

$$\rho c_p \frac{\partial T}{\partial t} = \frac{\partial}{\partial x}\left(k \frac{\partial T}{\partial x}\right) + \dot{q}_{sub}$$

Solusi numerik dengan metode beda hingga (*finite difference*) digunakan untuk memprediksi $T_b$ 30–60 menit ke depan, memungkinkan *operator-in-the-loop* menyesuaikan $T_{shelf}$ dan $P_c$.

**Tahap 6 — Alarm dan Mitigasi.** Ambang kritis ditetapkan: $T_b < T_{collapse} + 2$ °C memicu alarm *near-collapse* dengan respons otomatis berupa penurunan $T_{shelf}$ 1–2 °C.

**Tahap 7 — Dokumentasi dan *Release* PAT.** Seluruh data termal disimpan dalam format OPC-UA untuk kepatuhan FDA 21 CFR Part 11 dan diterjemahkan menjadi *Critical Process Parameter* (CPP) untuk *batch release*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Vial 10 mL berisi 5 mL larutan protein (konsentrasi 20 mg/mL), diameter dalam 20 mm, di-*freeze-dried* pada rak suhu $T_{shelf} = -10$ °C dan tekanan ruang $P_c = 10$ Pa. Data WSN dari tiga sensor menunjukkan suhu produk $T_b$ bervariasi 1,5 °C antar-vial: $T_{b,1} = -32{,}8$ °C, $T_{b,2} = -31{,}5$ °C, $T_{b,3} = -33{,}5$ °C. Resistansi panas rak $R_s = 1{,}8 \times 10^{7}$ K·J$^{-1}$·m$^{-2}$ (diukur kalorimetri).

**Langkah 1: Hitung laju sublimasi tiap vial.**

$$\dot{m}_i = \frac{T_{shelf} - T_{b,i}}{R_s \cdot \Delta H_s}$$

Untuk vial 1: $\dot{m}_1 = \frac{(-10) - (-32{,}8)}{1{,}8 \times 10^7 \cdot 2800 \cdot 10^{-3}} = \frac{22{,}8}{5{,}04 \times 10^7} \approx 4{,}52 \times 10^{-7}$ kg/s = 1,63 g/jam.

Analog, $\dot{m}_2 \approx 1{,}46$ g/jam, $\dot{m}_3 \approx 1{,}71$ g/jam. Variabilitas $CV = 7{,}9\%$ meng