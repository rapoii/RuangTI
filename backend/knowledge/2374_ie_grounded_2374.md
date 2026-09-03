# 2374 — Model Ketahanan (Resilience) Rantai Pasok Dingin untuk Produk Mudah Rusak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok dingin (*cold chain logistics*) merupakan subsistem logistik kritikal yang menjamin kelestarian mutu produk termolabil—mulai dari vaksin, biofarmaka, produk darah, makanan laut, hortikultura segar, hingga produk *ready-to-eat*—sepanjang rantai distribusi dari titik produksi hingga titik konsumsi akhir. Kerusakan integritas suhu pada simpul logistik manapun akan memicu *temperature excursion* yang secara langsung menurunkan potensi produk, meningkatkan limbah (*spoilage*), dan pada kasus produk farmasi kritis seperti vaksin, berpotensi mengancam keselamatan pasien. Khurshid dan Siddiqui (2024) dalam naskah "A Resilience Model for Cold Chain Logistics of Perishable Products" (DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)) mengusulkan kerangka kuantitatif untuk mengukur dan meningkatkan kapasitas adaptif rantai pasok dingin menghadapi gangguan internal maupun eksternal, mencakup *disruption* infrastruktur, kegagalan peralatan, keterlambatan transportasi, dan anomali suhu lingkungan.

Konteks urgensi operasional ini diperkuat oleh temuan Putra, Defit, dan Nurcahyo (2024) di *Jurnal KomtekInfo* (DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) yang mendokumentasikan kondisi riil pada UPTD Farmasi Dinas Kesehatan Kabupaten Siak. Kedua penulis menemukan dua masalah struktural yang sampai hari ini masih lazim di banyak negara berkembang: pertama, *cold chain box* sebagai media penyimpanan dan pendingin vaksin tidak dilengkapi sistem pemantauan suhu *real-time* dengan kapabilitas peringatan dini ketika suhu naik akibat kerusakan internal (kompresor, seal pintu, batere) maupun eksternal (gangguan listrik, pemuatan berlebih); kedua, pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali melalui *log sheet* oleh apoteker—sebuah pendekatan yang mengandung blind spot minimum 119 menit per siklus pembacaan dan rawan human error.

Ketidaktersediaan visibilitas suhu secara *real-time* inilah yang menjadi *single point of failure* paling fatal dalam operasional cold chain. Tanpa visibilitas granular, *time-to-detect* (TTD) menjadi sangat panjang, sementara kualitas produk (terutama vaksin) terdegradasi secara kumulatif mengikuti kinetika Arrhenius. Atas dasar itulah, paper Khurshid & Siddiqui (2024) membangun model yang tidak hanya menghitung degradasi performa tetapi juga memformulasikan kapasitas pemulihan (*recovery capability*) sistem. Perspektif ini merepresentasikan pergeseran paradigma dari sekadar *reliability* (menghindari kegagalan) menuju *resilience* (tetap berfungsi pulih secara cepat pasca-kegagalan)—sebuah kebutuhan imperatif di era VUCA (*Volatility, Uncertainty, Complexity, Ambiguity*) dan pasca-pandemi COVID-19 yang telah mengekspos kerentanan logistik farmasi global.

---

## 2. Landasan Teori & Formulasi Matematis

Model ketahanan yang dibangun oleh Khurshid dan Siddiqui (2024) mengikuti dekomposisi Bruneau et al. yang dimodifikasi untuk domain rantai pasok dingin, dengan empat properti inti: *robustness* (kapabilitas menahan degradasi), *redundancy* (kapabilitas substitusi elemen gagal), *resourcefulness* (kapabilitas memobilisasi respons), serta *rapidity* (kecepatan mencapai kembali tingkat performa semula). Untuk keperluan rekayasa industri kuantitatif, kami menurunkan formalisasi matematis sebagai berikut.

**Indeks Resilience Sistem ($\Phi$):** Didefinisikan sebagai rasio integral performa aktual terhadap performa nominal selama horizon waktu $[t_0, t_1]$ yang melingkupi kejadian disrupsi dan pemulihan:

$$\Phi = \frac{\int_{t_0}^{t_1} Q(t)\, dt}{(t_1 - t_0)\, Q_0}, \quad 0 \leq \Phi \leq 1$$

dengan $Q(t)$ adalah fungsi performa sistem pada waktu $t$, dan $Q_0$ adalah tingkat performa nominal pra-disrupsi. Nilai $\Phi = 1$ mengindikasikan sistem sepenuhnya resilient (tidak ada kehilangan performa).

**Kurva Degradasi-Performa:** Selama fase disrupsi aktif ($t_0 \leq t \leq t_d$), performa turun mengikuti eksponensial:

$$Q(t) = Q_0 \, e^{-\alpha (t - t_0)}$$

dengan $\alpha$ adalah koefisien laju degradasi yang dipengaruhi oleh severity gangguan dan *buffer thermal* sistem cold chain.

**Fase Pemulihan:** Setelah waktu $t_d$ di mana tindakan korektif diinisiasi, performa pulih mengikuti:

$$Q(t) = Q_r + (Q_0 - Q_r)\left(1 - e^{-\beta (t - t_d)}\right), \quad t_d \leq t \leq t_1$$

dengan $\beta$ adalah laju pemulihan yang ditingkatkan oleh redundansi dan IoT monitoring.

**Waktu Pemulihan (TTR):**

$$t_r = t_1 - t_d = \frac{1}{\beta} \ln\left(\frac{Q_0 - Q_r}{Q_0 - Q_{t_1}}\right)$$

**Model Kinetika Degradasi Produk (Arrhenius):** Laju degradasi kualitas produk termolabil terhadap suhu diberikan oleh:

$$k(T) = A \, e^{-E_a/(RT)}$$

dengan $A$ adalah faktor pre-eksponensial, $E_a$ energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K), dan $T$ suhu absolut (K). Total degradasi kumulatif dihitung sebagai:

$$\text{Degradasi} = \int_0^{\tau} k(T(t))\, dt$$

Untuk produk vaksin yang tunduk pada standar WHO PQS, suhu penyimpanan adalah $2-8$°C; setiap penambahan 1°C di atas ambang batas selama 1 jam menghasilkan *potency loss* yang berbeda per antigen, namun secara konservatif遵循 aturan 2-8°C *stability budget*.

**Optimasi Redundansi Kapasitas Cold Storage:** Dengan asumsi reliabilitas setiap unit pendingin $r$ dan target disponibilitas sistem $A_s$:

$$n^* = \min\left\{n : 1 - (1-r)^n \geq A_s\right\} \implies n^* = \left\lceil \frac{\ln(1 - A_s)}{\ln(1 - r)} \right\rceil$$

**Model Kerugian Ekonomis (*Spoilage Cost*):** Jika $P$ adalah harga satuan produk, $V$ volume yang terekspos, dan $\theta$ fraksi terdegradasi:

$$C_{\text{spoilage}} = P \cdot V \cdot \theta$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resilience pada cold chain vaccine mengikuti arsitektur tiga lapis yang mengintegrasikan model Khurshid-Siddiqui (2024) dengan teknologi IoT sebagaimana divalidasi Putra et al. (2024). Diagram alir prosedur operasional standard (SOP) adalah sebagai berikut:

**Tahap 1 — Penilaian Baseline & Segmentasi Risiko:**
1. Identifikasi simpul cold chain (gudang sentral, *cold box* lapangan, armada distribusi, titik pelayanan).
2. Pemetaan *failure mode* per simpul menggunakan FMEA dengan nilai RPN (*Risk Priority Number*) $= S \times O \times D$.
3. Estimasi parameter $\alpha$, $\beta$, $Q_r$ berdasarkan historis data gangguan.

**Tahap 2 — Instrumentasi IoT Real-Time:** Berdasarkan arsitektur Putra et al. (2024), setiap *cold chain box* dipasang sensor DS18B20 dengan spesifikasi: rentang $-55$°C sampai $+125$°C, akurasi $\pm 0{,}5$°C pada rentang $-10$°C sampai $+85$°C, resolusi $0{,}0625$°C, protokol *1-Wire* dengan alamat unik 64-bit. Sensor dipasang minimal pada tiga titik (pintu, tengah, sudut) untuk mendeteksi *thermal gradient*. Mikrokontroler (Arduino/ESP32) membaca data setiap $T_s = 10$–$30$ detik, jauh lebih granular dari pencatatan manual 2 jam.

**Tahap 3 — Logika Deteksi & Alert:**

$$T_{\text{measured}}(t) > T_{\text{max}} \lor T_{\text{measured}}(t) < T_{\text{min}} \implies \text{Trigger Alert}$$

Alert dikirim melalui tiga kanal: SMS gateway, aplikasi mobile (push notification), dan *buzzer* lokal. Waktu TTD turun dari $\sim 119$ menit (manual) menjadi $< 1$ menit.

**Tahap 4 — Prosedur Pemulihan:**
1. Verifikasi anomali dalam jendela 5 menit (menghindari *false alarm*).
2. Aktivasi unit redundan jika $Q(t) < Q_{\text{critical}}$.
3. Transfer produk ke unit sehat dengan waktu transit terpantau.
4. Pencatatan insiden dan *root cause analysis* dalam waktu 72 jam.

**Tahap 5 — Continuous Improvement:** Perhitungan *rolling resilience index* $\bar{\Phi}_{30} = \frac{1}{30}\sum_{i=1}^{30}\Phi_i$ untuk monitoring tren bulanan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** UPTD Farmasi mengelola 1 *cold chain box* berisi $V = 500$ vial vaksin dengan harga satuan $P = \text{Rp }25.000$, sehingga nilai inventaris $N = V \times P = \text{Rp }12.500.000$. Standar suhu operasional $T_{\text{op}} = 5$°C dengan ambang batas WHO $T_{\text{max}} = 8$°C dan $T_{\text{min}} = 2$°C. Diasumsikan terjadi *temperature excursion* akibat kegagalan kompresor pada $t_0 = 0$ selama fase pemulihan 90 menit.

**Parameter Model:**
- $