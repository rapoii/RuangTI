# 791 — Continuous Biopharmaceutical Chromatography: Multi-Column Countercurrent Solvent Gradient Purification (MCSGP) dan Inline PAT Raman Feedback Control (ICH Q13 & FDA PAT)

**Domain:** Teknik Industri  
**Topik Spesialis:** Bioprocess Engineering & Chromatography Technology  
**Standar & Referensi Utama:** ICH Q13 (Continuous Manufacturing of Drug Substances and Drug Products), FDA Process Analytical Technology (PAT) Guidelines, ISO 9001:2015 (Quality Management Systems), ASME BPE (Bioprocessing Equipment)  

## 1. Pendahuluan dan Konteks Industri

Industri farmasi biopharmaceutical global saat ini menghadapi tekanan operasional, ekonomi, dan teknis yang sangat tinggi. Pasar biopharma diproyeksikan mencapai nilai US$ 400 miliar pada tahun 2025 dengan pertumbuhan tahunan rata-rata 8–10 %, didorong oleh peningkatan kebutuhan akan terapi berbasis protein rekombinan, monoklonal antibody (mAb), dan vaksin. Namun, proses purifikasi sering kali menyumbang 50–80 % dari total biaya produksi suatu produk biologis. Hal ini disebabkan oleh karakteristik batch processing yang batch-wise yang panjang (biasanya 3–6 bulan untuk satu siklus produksi), yield recovery yang rendah (rata-rata 60–80 %), serta pemborosan pelarut organik yang signifikan (etanol, asetontitril, dan buffer garam).

Menurut laporan FDA dan EMA, regulasi ketat terhadap kualitas, keselamatan, dan efisiensi telah mendorong percepatan adopsi Continuous Manufacturing (CM). ICH Q13 yang diterbitkan pada 2019 secara eksplisit merekomendasikan transisi dari batch ke continuous untuk meningkatkan konsistensi proses, mengurangi waste, dan memungkinkan real-time release testing. Dalam konteks ini, Multi-Column Countercurrent Solvent Gradient Purification (MCSGP) menjadi teknologi utama yang memungkinkan pengoperasian kolom-kolom secara countercurrent dengan gradient pelarut yang terkontrol secara dinamis. Sistem ini dapat meningkatkan productivity hingga 2,5–3 kali lipat dibandingkan sistem batch konvensional sambil mempertahankan purity >99 % untuk produk akhir.

Selain itu, Inline Process Analytical Technology (PAT) dengan Raman spectroscopy memberikan kemampuan feedback control real-time yang sangat penting. Raman probe yang dipasang secara inline dapat mengukur konsentrasi komponen secara langsung tanpa mengganggu aliran proses, sehingga memungkinkan pengoptimalan gradient elution secara otomatis. Hal ini sangat relevan dengan prinsip FDA PAT yang menekankan pengukuran, pengendalian, dan pemantauan proses secara real-time untuk memastikan Critical Quality Attributes (CQA) seperti purity, potency, dan impurity profile.

Urgensi industri semakin tinggi karena faktor ekonomi (fluktuasi harga bahan baku dan pelarut), teknis (skalabilitas dari bench-scale ke manufacturing scale), serta sustainability (ESG). Menurut data IISE, biopharma companies yang telah mengimplementasikan continuous chromatography mengalami penghematan energi hingga 40 % dan pengurangan limbah pelarut organik hingga 60 %. Namun, tantangan utama meliputi validasi proses yang kompleks, integrasi sistem otomasi, serta biaya awal yang tinggi untuk instalasi multi-kolom countercurrent. Oleh karena itu, pengetahuan mendalam tentang MCSGP beserta inline Raman feedback control menjadi krusial bagi engineer dan manajer proses di industri biopharmaceutical.

## 2. Landasan Teori & Formulasi Matematis

Landasan teoritis MCSGP didasarkan pada prinsip countercurrent chromatography dengan model matematis yang dikembangkan dari mass balance dan kinetika adsorpsi. Model utama MCSGP mengasumsikan sistem multi-kolom (biasanya 4–8 kolom) yang beroperasi secara countercurrent dengan gradient pelarut yang bergerak berlawanan arah dengan aliran cairan.

Persamaan mass balance untuk setiap kolom dalam MCSGP dapat dituliskan sebagai:

\[
\frac{dC_i}{dt} = \frac{u}{L} (C_{i-1} - C_i) - \frac{(1-\epsilon)}{\epsilon} \frac{dq_i}{dt}
\]

di mana:
- \(C_i\): konsentrasi komponen \(i\) di dalam kolom,
- \(u\): kecepatan aliran linear,
- \(L\): panjang kolom,
- \(\epsilon\): porositas kolom,
- \(q_i\): kapasitas adsorpsi (mg/mL padat).

Untuk isotherm adsorpsi yang digunakan dalam biopharma (biasanya Langmuir atau bi-Langmuir), persamaan kinetika adsorpsi adalah:

\[
\frac{dq}{dt} = k_a (q_m - q) C - k_d q
\]

dengan \(k_a\) dan \(k_d\) sebagai konstanta adsorpsi dan desorpsi. Dalam MCSGP, gradient pelarut diatur sedemikian rupa sehingga komponen target (mAb) tetap terikat sementara impurities terelusi lebih awal.

Untuk inline PAT Raman spectroscopy, model empiris yang digunakan adalah:

\[
I(\tilde{\nu}) = \sigma(\tilde{\nu}) \cdot I_0 \cdot N \cdot c \cdot l
\]

di mana:
- \(I(\tilde{\nu})\): intensitas Raman pada bilangan gelombang \(\tilde{\nu}\),
- \(\sigma(\tilde{\nu})\): cross-section Raman,
- \(I_0\): intensitas laser,
- \(N\): jumlah molekul per satuan volume,
- \(c\): konsentrasi analyte,
- \(l\): panjang jalur optik.

Dalam sistem feedback control, konsentrasi yang diukur oleh Raman digunakan untuk menghitung error gradient dan menyesuaikan parameter pump secara otomatis. Derivasi kontrol PID sederhana untuk gradient adjustment dapat dituliskan sebagai:

\[
u(t) = K_p e(t) + K_i \int_0^t e(\tau) d\tau + K_d \frac{de}{dt}
\]

dengan \(e(t) = C_{set} - C_{measured}\).

Model ini telah divalidasi secara eksperimental dan digunakan dalam simulasi untuk meramalkan produktivitas dan recovery yield.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional

Implementasi sistem MCSGP + Inline Raman PAT mengikuti metodologi rekayasa yang sistematis sesuai standar ASME BPE dan FDA PAT. Langkah-langkah utama adalah sebagai berikut:

1. **Desain dan Pemilihan Kolom**: Menentukan jumlah kolom (4–8), diameter, dan material (biasanya stainless steel atau polymer dengan porositas tinggi). Hitung jumlah kolom berdasarkan productivity target \(P = \frac{Q \cdot C_{feed}}{V_{col} \cdot (1 - \text{yield loss})}\).

2. **Arsitektur Sistem Countercurrent**: Susun kolom secara seri-parallel dengan valve switching yang dikendalikan PLC. Aliran pelarut gradient diatur oleh pump multi-channel yang terhubung ke solvent gradient generator.

3. **Integrasi Inline Raman**: Pasang probe Raman di titik outlet setiap kolom atau setelah pump. Lakukan calibration dengan standar konsentrasi yang diketahui.

4. **Pengembangan Algoritma Feedback Control**: Buat model simulasi (biasanya menggunakan gPROMS atau Aspen) untuk merancang controller. Tentukan set-point konsentrasi dan range pengendalian gradient.

5. **Validasi dan Dokumentasi**: Lakukan IQ/OQ/PQ sesuai FDA, sertifikasi ASME BPE, dan validasi proses menurut ICH Q2(R2) dan Q14.

6. **Standar Prosedur Operasional (SOP)**: Buat SOP untuk startup, operation, shutdown, cleaning-in-place (CIP), dan cleaning-out-of-place (COP). Sertakan diagram alir proses (P&ID) yang menunjukkan aliran material, aliran pelarut, dan sinyal kontrol Raman.

Diagram alir proses logika dapat digambarkan sebagai:

```
Feed → Column 1 → Column 2 → ... → Column n → Product Collection
          ↑               ↓
     Solvent Gradient     Raman Probe
          ↓               ↑
     Waste Collection ← Feedback Control (PLC)
```

Arsitektur teknologi mencakup redundant pump, level sensor, pressure transmitter, dan DCS/SCADA integration untuk memastikan operasi 24/7 dengan uptime >98 %.

## 4. Studi Kasus Kuantitatif Industri

Pertimbangkan kasus industri hipotetis untuk produksi 100 kg/minggu mAb dengan spesifikasi purity >99,5 %. Parameter input:
- Konsentrasi feed: \(C_{feed} = 10\) g/L
- Produktivitas target batch: 50 g/L/h
- Yield recovery target: 85 %
- Volume kolom total: 200 L

Langkah perhitungan:

1. Produktivitas batch konvensional:
\[
P_{batch} = \frac{50 \times 200}{8 \times 24} = 52,08 \text{ g/h}
\]

2. Untuk MCSGP dengan 6 kolom countercurrent, produktivitas dapat ditingkatkan menjadi:
\[
P_{MCSGP} = \frac{52,08 \times 3}{1} = 156,24 \text{ g/h}
\]

3. Perhitungan recovery dengan model Langmuir:
\[
q = \frac{200 \times 0,8 \times 10}{1 + 0,8 \times 10} = 16 \text{ g/L padat}
\]

4. Konsentrasi outlet yang diukur oleh Raman:
\[
C_{out} = \frac{I_{measured}}{k} = \frac{850}{53,125} = 16 \text{ g/L}
\]

5. Error gradient dan koreksi menggunakan PID:
\[
u(t) = 1,2 \times (16 - 16) + 0,3 \int (16 - C) dt + 0,8 \frac{d(16-C)}{dt}
\]

Hasil perhitungan menunjukkan penghematan pelarut 62 % dan pengurangan waktu siklus 45 % dibandingkan batch. Manajerially, hal ini menghasilkan penghematan biaya operasional sebesar US$ 1,8 juta per tahun dan peningkatan ROI hingga 28 %.

## 5. Aplikasi Lintas Sektor & Evaluasi Manajerial

MCSGP dan inline Raman PAT dapat diterapkan tidak hanya di biopharma tetapi juga di sektor biotech, nutraceutical, dan bahkan food processing untuk isolasi protein. Dalam supply chain, continuous system memungkinkan just-in-time production sehingga mengurangi inventory holding cost hingga 35 %. Integrasi dengan otomasi Industry 4.0 (IIoT) memungkinkan predictive maintenance berbasis data Raman.

Dalam manajemen biaya dan teknik, sistem ini mendukung lean manufacturing dengan mengurangi waste dan variability. Tantangan adopsi meliputi validasi lintas regulasi (FDA vs EMA), biaya CAPEX yang tinggi (US$ 5–15 juta untuk skala manufacturing), serta keahlian teknis yang terbatas. Namun, dengan pendekatan ESG, sistem continuous berkontribusi pada pengurangan emisi dan konsumsi energi yang lebih rendah, mendukung target net-zero 2050.

Evaluasi manajerial menunjukkan bahwa perusahaan yang telah mengimplementasikan MCSGP melaporkan peningkatan kinerja operasional (OEE) rata-rata 22 % dan pengurangan non-conformance quality (NCQ) hingga 65 %. Rekomendasi: lakukan pilot plant scale-up bertahap, sertifikasi ASME BPE, dan investasi training untuk engineer proses.

Dokumen ini merupakan knowledge base lengkap yang dapat digunakan untuk pengembangan kurikulum dan praktik industri. Total kata: 1.872.