# 2870 — Model Ketahanan (Resilience) Rantai Dingin Logistik Produk Mudah Rusak dengan Pemantauan IoT Suhu Real-Time

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok modern yang menangani produk termolabil—vaksin, produk biologis, makanan segar, dan bahan farmasi—yang menuntut kendali suhu dalam rentang sempit sepanjang siklus *last-mile* hingga *first-mile*. Kerusakan rantai dingin tidak hanya menimbulkan kerugian finansial langsung berupa produk yang rusak (*spoilage*), melainkan juga risiko sosial yang tidak terkuantifikasi, berupa epidemi yang muncul akibat mutu vaksin terdegradasi. Khurshid & Siddiqui (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) menyajikan kerangka model *resilience* untuk menjawab kebutuhan ini: bagaimana sebuah jaringan cold chain dirancang agar mampu mempertahankan fungsinya (atau pulih cepat) ketika menghadapi disrupsi—pemadaman listrik, kerusakan refrigerasi, keterlambatan transportasi, maupun *human error* dalam pencatatan.

Konteks empiris terdekat di Indonesia datang dari Putra, Defit, dan Nurcahyo (2024) di *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)). Studi mereka mendokumentasikan permasalahan di Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak: cold chain box yang menyimpan vaksin tidak dilengkapi sistem pemantauan suhu *real-time*, peringatan dini otomatis bagi apoteker ketika suhu naik akibat kerusakan internal/eksternal, dan proses pencatatan suhu masih manual setiap 2 jam pada *log sheet*. Problem statement tersebut merupakan cerminan umum dari kondisi cold chain di negara berkembang: ketergantungan pada pencatatan manual, tidak adanya *feedback loop* otomatis, dan *single point of failure* pada peralatan refrigerasi pasif. World Health Organization (WHO) sendiri menetapkan rentang 2–8 °C sebagai *Vaccine Cold Chain Standard* (PQS E001), di mana setiap deviasi >30 menit di luar rentang berpotensi menurunkan *potency* antigen hingga >5 % per jam untuk vaksin sensitif seperti *Measles* atau *Polio*. Kondisi ini menegaskan urgensi industrial untuk menggantikan model pasif menjadi *proactive resilience*.

Secara ekonomi, Bank Dunia (2023) memperkirakan kerugian akibat kerusakan cold chain di Asia Tenggara mencapai USD 8–12 miliar per tahun, setara dengan 12–18 % volume produk termolabil yang beredar. Dari sudut pandang *Industrial Engineering*, masalah ini bukan semata persoalan teknologi sensor, melainkan masalah **desain sistem** yang menyangkut keandalan (*reliability*), kemampuan pulih (*recoverability*), redundansi (*redundancy*), dan visibilitas (*visibility*). Dokumen Knowledge Base ini akan membedah arsitektur model resilience Khurshid & Siddiqui (2024), mengintegrasikannya dengan bukti empiris implementasi IoT berbasis sensor DS18B20 dari Putra et al. (2024), dan memformulasikan kerangka kuantitatif yang siap diimplementasikan pada fasilitas farmasi, distributor makanan beku, maupun rantai pasok biofarmasi.

---

## 2. Landasan Teori & Formulasi Matematis

Model *resilience* yang dimaksud mengikuti kerangka Bruneau et al. (2003) yang telah diadaptasi Khurshid & Siddiqui (2024) untuk domain cold chain. Resistansi sistem $R(t)$ didefinisikan sebagai kemampuan mempertahankan *quality function* $Q(t)$—proporsi produk yang masih memenuhi spesifikasi suhu—di sepanjang horizon disrupsi. Formulasi intinya:

$$R_s = \frac{1}{T_{obs}} \int_{t_0}^{t_1} \frac{Q(t)}{Q_{max}} \, dt$$

di mana $Q_{max}$ adalah kapasitas output sebelum disrupsi, $t_0$ adalah waktu mulai disrupsi, $t_1$ adalah waktu pulih penuh, dan $T_{obs} = t_1 - t_0$. Nilai $R_s \in [0,1]$, dengan $R_s = 1$ menunjukkan sistem sepenuhnya *resilient* (tidak ada degradasi).

**Fungsi Degradasi Termal.** Kerusakan produk mengikuti kinetika reaksi orde-satu dengan laju degradasi tergantung pada *temperature excursion* $\Delta T(t)$ di atas ambang batas:

$$\frac{dD(t)}{dt} = k_0 \cdot e^{-E_a/RT(t)} \cdot \mathbb{1}\{T(t) > T_{crit}\}$$

di mana $D(t)$ adalah fraksi produk rusak terakumulasi, $k_0$ adalah konstanta Arrhenius, $E_a$ adalah energi aktivasi tipikal produk, $R$ adalah konstanta gas, $T(t)$ adalah suhu absolut, dan $\mathbb{1}\{\cdot\}$ adalah *indicator function* (aktif hanya saat suhu melebihi $T_{crit}$). Ambang batas $T_{crit}$ untuk vaksin umum adalah $T_{crit} = 8\,°C$.

**Fungsi Pemulihan (Recovery).** Setelah langkah mitigasi dijalankan pada $t_r$, kualitas sistem pulih secara eksponensial menuju kondisi stabil:

$$Q(t) = Q_{min} + (Q_{max} - Q_{min})\left(1 - e^{-\beta(t - t_r)}\right), \quad t \geq t_r$$

dengan $\beta$ adalah laju pemulihan tergantung pada kecepatan respons (manual vs IoT otomatis) dan kapasitas sumber daya cadangan.

**Indeks Keandalan Sensor (berbasis DS18B20).** Sensor DS18B20 memiliki resolusi 9–12 bit dan akurasi $\pm 0{,}5\,°C$ pada rentang $-10\,°C$ hingga $+85\,°C$. Keandalan bacaan sensor mengikuti reliabilitas Weibull:

$$R_{sensor}(t) = e^{-(t/\eta)^\kappa}, \quad \eta > 0, \kappa > 0$$

dengan *shape parameter* $\kappa \approx 2{,}1$ dan *scale parameter* $\eta \approx 50.000$ jam untuk DS18B20 versi *hermetically sealed* (Putra et al., 2024).

**Ketersediaan Sistem (*System Availability*).**

$$A = \frac{MTBF}{MTBF + MTTR} = \frac{1/\lambda}{1/\lambda + 1/\mu}$$

di mana $MTBF$ (*Mean Time Between Failures*) dan $MTTR$ (*Mean Time To Repair*) menentukan ketersediaan sistem cold chain secara keseluruhan. Dengan automasi IoT, MTTR turun signifikan karena peringatan dini memungkinkan teknisi melakukan intervensi sebelum kegagalan menjadi katastrofik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resilience Khurshid & Siddiqui (2024) mengikuti arsitektur 4-fase yang integratif dengan bukti implementasi Putra et al. (2024) di UPTD Farmasi Siak:

**Fase 1 — Pemetaan Kerentanan (*Vulnerability Mapping*).** Identifikasi titik-titik kritis dalam rantai dingin menggunakan Failure Mode and Effects Analysis (FMEA) yang dikuantifikasi melalui *Risk Priority Number*:

$$RPN = S \times O \times D$$

di mana $S$ adalah *Severity* (1–10), $O$ adalah *Occurrence* (1–10), $D$ adalah *Detectability* (1–10). Pada cold chain vaksin, penyebab dengan RPN tertinggi adalah **lack of real-time temperature monitoring** (S=9, O=8, D=10) dan **manual recording latency** (S=8, O=7, D=9), persis seperti yang diidentifikasi Putra et al. (2024).

**Fase 2 — Instrumentasi IoT Sensor.** Arsitektur yang diusulkan (berdasarkan Putra et al., 2024) adalah: **DS18B20 → Mikrokontroler (ESP32/Arduino) → Protokol 1-Wire → Wi-Fi/GSM → Cloud Database → Dashboard Web/Mobile.** Sensor DS18B20 dipilih karena komunikasi digital 1-Wire yang tahan noise, multiple drop pada satu pin, dan akurasi yang memenuhi standar PQS WHO E001.

**Fase 3 — Logika Alert Otomatis.** Pseudocode SOP:

```
IF T(t) > T_high OR T(t) < T_low THEN
    TRIGGER buzzer + LED lokal
    SEND SMS/WhatsApp ke apoteker (≤ 10 detik)
    LOG event dengan timestamp UTC
    ESCALATE jika tidak ada ack dalam 5 menit
END IF
```

**Fase 4 — Mitigasi & Pemulihan.** Prosedur pemulihan standar (SOP) mensyaratkan:
1. Aklimatisasi vaksin ke cold chain cadangan dalam ≤ 15 menit.
2. Dokumentasi *excursion event* dengan kurva suhu lengkap.
3. *Quarantine* produk terdampak untuk uji *potency* oleh QC lab.
4. *Root cause analysis* dalam 24 jam.

Diagram alir integrasi ini membentuk *closed-loop control system* yang mengubah cold chain pasif menjadi **proactive resilience system**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** UPTD Farmasi Kabupaten Siak mengelola 24 cold chain box berisi vaksin *Measles-Rubella* dengan nilai total Rp 720.000.000 (≈ 4.000 vial @ Rp 180.000). Kapasitas sistem: 1 teknisi, 1 apoteker, tanpa sistem peringatan otomatis (kondisi *baseline* menurut Putra et al., 2024). Parameter suhu target: 2–8 °C. MTBF refrigerator $\lambda^{-1} = 5.000$ jam; MTTR manual $\mu^{-1} = 6$ jam (termasuk deteksi + dispatch + perbaikan).

**Langkah 1: Hitung ketersediaan sistem baseline.**

$$A_{baseline} = \frac{MTBF}{MTBF + MTTR} = \frac{5.000}{5.000 + 6} = 0{,}99880 = 99{,}88\%$$

**Langkah 2: Hitung kualitas termal Q(t) selama 4