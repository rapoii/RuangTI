# 1450 — Ekstraksi Superkritis CO₂ pada Biomassa Mikroalga: Rekayasa Proses untuk Pemulihan Pigmen, Lipid, dan Senyawa Bioaktif dalam Kerangka Biorefineri Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Recent Advances in Supercritical CO₂ Extraction of Pigments, Lipids and Bioactive Compounds from Microalgae
**Jurnal & Sitasi Utama:** Soultana Tzima, Ioulia Georgiopoulou, Vasiliki Louli (2023). *Molecules*, 28(3), 1410. DOI: [https://doi.org/10.3390/molecules28031410](https://doi.org/10.3390/molecules28031410)
**Sitasi Pendukung:** Muhammad Mujtaba, Leonardo Fernandes Fraceto, Mahyar Fazeli (2023). *Journal of Cleaner Production*, 426, 136815. DOI: [https://doi.org/10.1016/j.jclepro.2023.136815](https://doi.org/10.1016/j.jclepro.2023.136815)

---

## 1. Pendahuluan dan Konteks Industri

Krisis iklim global yang dipicu oleh emisi gas rumah kaca berlebih telah memaksa seluruh sektor manufaktur dan rantai pasok untuk melakukan transformasi fundamental. Dua literatur ilmiah yang menjadi basis modul ini—Tzima, Georgiopoulou, dan Louli (2023) dalam *Molecules* (DOI: [10.3390/molecules28031410](https://doi.org/10.3390/molecules28031410)) serta Mujtaba, Fraceto, dan Fazeli (2023) dalam *Journal of Cleaner Production* (DOI: [10.1016/j.jclepro.2023.136815](https://doi.org/10.1016/j.jclepro.2023.136815))—secara sinergis menjelaskan bagaimana biomassa non-pangan dapat diolah menjadi platform senyawa bernilai tinggi melalui teknologi hijau.

Tzima *et al.* (2023) menekankan bahwa mikroalga merupakan biomassa yang tersedia berlimpah dan mampu menyediakan spektrum luas senyawa bernilai tambah—karotenoid, klorofil, lipid, dan asam lemak—dengan aplikasi langsung di industri makanan, kosmetik, farmasi, dan biofuel. Penulis menyoroti bahwa *Supercritical Fluid Extraction* (SFE) dengan CO₂ merupakan metode ekstraksi hijau yang menggabungkan keuntungan ekonomi dan lingkungan karena CO₂ non-toksik, tidak mudah terbakar, mudah diregenerasi, dan meninggalkan residu pelarut nol pada produk akhir. Di sisi lain, Mujtaba *et al.* (2023) menunjukkan bahwa limbah lignoselulosa pertanian menyediakan volume biomassa berkelanjutan yang sangat besar untuk biorefineri terpadu guna menghasilkan biofuel, *bioplastics*, dan biokomposit, menggantikan ketergantungan pada petrokimia.

Konteks industri yang melatarbelakangi urgensi topik ini sangat jelas. Pertama, permintaan global akan pigmen alami (lutein, astaksantin, β-karoten) tumbuh sekitar 5–7% per tahun didorong oleh preferensi konsumen akan *clean-label ingredients*. Kedua, sektor nutrasetikal dan farmasi membutuhkan lipid fungsional seperti EPA dan DHA yang konsentrasinya pada mikroalga bisa mencapai 30–60% berat kering. Ketiga, target dekarbonisasi industri proses (*Scope 1* dan *Scope 2* emisi) menjadikan SFE-CO₂ sebagai teknologi yang memenuhi prinsip *Green Chemistry* ke-5 (pelarut lebih aman) dan ke-12 (desain untuk degradasi). Dari perspektif Teknik Industri, integrasi SFE ke dalam arsitektur biorefineri memerlukan rekayasa proses yang cermat, pemodelan kinetika yang andal, serta optimasi multi-respons yang memenuhi kendala teknis dan ekonomis secara simultan.

---

## 2. Landasan Teori & Formulasi Matematis

Landasan teoretis SFE-CO₂ bertumpu pada perilaku termodinamika CO₂ di atas titik kritisnya ($T_c = 31{,}1\,°C$, $P_c = 7{,}38\,\text{MPa}$). Pada kondisi superkritis, CO₂ memiliki difusivitas tinggi (~$10^{-8}\,\text{m}^2/\text{s}$) dan viskositas rendah (~$10^{-5}\,\text{Pa}\cdot\text{s}$), sehingga penetrasi ke dalam matriks padat biomassa menjadi sangat efisien, sementara densitasnya (200–900 kg/m³) dapat diatur melalui kombinasi tekanan dan suhu untuk memberikan daya solvasi yang mirip pelarut organik.

### 2.1 Persamaan Kelarutan Chrastil

Kelarutan solut dalam CO₂ superkritis secara empiris dimodelkan oleh persamaan Chrastil (1982) yang dikutip secara luas dalam review Tzima *et al.* (2023):

$$S = \rho^{k} \cdot \exp\left(\frac{a}{T} + b\right)$$

di mana $S$ adalah kelarutan (kg solut/kg CO₂), $\rho$ densitas CO₂ superkritis (kg/m³), $T$ suhu absolut (K), serta $k$, $a$, dan $b$ adalah konstanta empiris yang bergantung pada sistem solut–CO₂. Parameter $k$ merepresentasikan jumlah molekul CO₂ yang mengelilingi satu molekul solut, $a$ terkait dengan entalpi total desorpsi dan vaporisasi ($\Delta H_{\text{total}}/R$), sedangkan $b$ merepresentasikan berat molekul solut dan parameter asosiasi.

### 2.2 Model Kinetika Naik–Lakshminarayana–KrishNA (NLK)

Untuk mendeskripsikan perilaku kinetika ekstraksi pada kolom SFE *fixed-bed*, Tzima *et al.* (2023) merujuk pada model Naik *et al.* yang mengasumsikan tiga tahapan pembatas laju secara berurutan:

$$\frac{m_t}{m_{\infty}} = \begin{cases} \left(1 - e^{-\lambda_1 t}\right) & 0 < t \le t_1 \quad \text{(fase laju konstan — CLE)} \\[6pt] \frac{m_{t_1}}{m_{\infty}} + \left(1 - \frac{m_{t_1}}{m_{\infty}}\right) e^{-\lambda_2 (t - t_1)} & t_1 < t \le t_2 \quad \text{(fase difusi — DCE)} \\[6pt] \frac{m_{t_2}}{m_{\infty}} + \left(1 - \frac{m_{t_2}}{m_{\infty}}\right) e^{-\lambda_3 (t - t_2)} & t > t_2 \quad \text{(fase jatuh — FE)} \end{cases}$$

dengan $m_t$ massa solut terakumulasi pada waktu $t$, $m_{\infty}$ massa total solut yang dapat diekstrak, $\lambda_1$ konstanta laju fase CLE, $\lambda_2$ konstanta laju difusi, dan $\lambda_3$ konstanta laju fase jatuh. Model ini penting dalam menentukan *scale-up* dan estimasi jumlah CO₂ yang dibutuhkan.

### 2.3 Neraca Massa dan Yield Ekstraksi

Yield ekstraksi $Y$ (g solut/g biomassa kering) didefinisikan sebagai:

$$Y = \frac{m_{\text{ekstrak}}}{m_{\text{biomassa kering}}} \times 100\%$$

Untuk neraca massa total pada kolom SFE *batch* dengan laju alir CO₂ $\dot{Q}$ (kg/jam):

$$\frac{dm_t}{dt} = \dot{Q} \cdot C_s(T, P) - \frac{\partial m_{\text{res}}}{\partial t}$$

dengan $C_s$ konsentrasi solut dalam fase CO₂ keluar dan $m_{\text{res}}$ massa solut residual dalam matriks.

### 2.4 Konsumsi Spesifik CO₂ (SC-CO₂)

Konsumsi spesifik CO₂ digunakan sebagai indikator efisiensi proses (Mujtaba *et al.*, 2023, untuk konteks biorefinery):

$$S_{CO_2} = \frac{\dot{Q} \cdot t_{\text{proses}}}{m_{\text{ekstrak}}}$$

Parameter ini krusial dalam analisis *techno-economic* karena menentukan beban operasional kompresor dan biaya energi.

### 2.5 Rancangan Eksperimen (DoE) dan Permukaan Respons

Tzima *et al.* (2023) menjelaskan bahwa optimasi SFE biasanya menggunakan *Box–Behnken Design* (BBD) atau *Central Composite Design* (CCD) dengan variabel bebas $X_1$ (tekanan, MPa), $X_2$ (suhu, °C), $X_3$ (laju alir CO₂, kg/jam), dan kadang $X_4$ (fraksi ko-solven etanol). Respons $Y$ dimodelkan dengan polinomial orde dua:

$$Y = \beta_0 + \sum_{i=1}^{k} \beta_i X_i + \sum_{i=1}^{k} \beta_{ii} X_i^2 + \sum_{i<j} \beta_{ij} X_i X_j + \varepsilon$$

dengan $\beta_0$ intersep, $\beta_i$ koefisien linier, $\beta_{ii}$ koefisien kuadratik, $\beta_{ij}$ koefisien interaksi, dan $\varepsilon$ galat acak. Kondisi optimal ditentukan dengan metode *desirability function* Derringer.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SFE-CO₂ di tingkat industri mengikuti alur rekayasa sistematis yang tergambar dalam diagram alur proses sebagai berikut.

**Tahap 1 — Persiapan dan Karakterisasi Biomassa.** Biomassa mikroalga (misalnya *Nannochloropsis oceanica* atau *Chlorella vulgaris*) dikeringkan melalui *spray drying* hingga kadar air < 5% b/b, kemudian diayak untuk mendapatkan ukuran partikel 200–500 µm. Karakterisasi awal meliputi kadar lipid total (Bligh & Dyer), profil pigmen (HPLC-PDA), dan kandungan lignin–selulosa–hemiselulosa (Van Soest). Mujtaba *et al.* (2023) menekankan bahwa untuk biomassa lignoselulosa, tahap pretreatment (steam explosion, amonia fiber expansion, deep eutectic solvent) sangat menentukan aksesibilitas komponen target.

**Tahap 2 — Pretreatment (Opsional).** Untuk mikroalga dengan dinding sel tebal (misal *Nannochloropsis*), pretreatment mekanis (*bead milling*) atau enzimatik (lysozyme) digunakan sebelum SFE untuk meningkatkan laju transfer massa internal.

**Tahap 3 — Pengisian Ekstraktor (Vessel).** Biomassa dimasukkan ke dalam *extraction vessel* (kapasitas 1–100 L) dengan dipasang *glass wool* dan *fritted disc* di kedua ujungnya. Default *bed porosity* $\varepsilon_b$ dipertahankan pada 0,4–0,5 untuk menghindari *channeling*.

**Tahap 4 — Pemampatan dan Pemanasan CO₂.** CO₂ dari tangki penyimpanan ditekan oleh pompa diafragma hingga tekanan operasi (15–45 MPa) dan dipanaskan hingga suhu operasi (40–60 °C) melalui *heat exchanger* dengan kontrol PID. Parameter operasi dipilih berdasarkan persamaan Chrastil untuk optimasi densitas–solvasi.

**Tahap 5 — Pencampuran dengan Ko-solven (Jika Diperlukan).** Etanol food-grade (0–10% mol) ditambahkan sebagai *co-solvent* melalui *pump terpisah* untuk meningkatkan recovery senyawa polar (klorofil, astaksantin, fosfolipid). Penambahan ko-solven dilakukan *static mixing* sebelum masuk ke *extraction vessel*.

**Tahap 6 — Ekstraksi Statis dan Dinamis.** Proses berlangsung dalam dua sub-fase: periode *static soaking* (15–30 menit) untuk equilibrasi kelarutan, diikuti *dynamic extraction* (60–240 menit) dengan laju alir CO₂ 0,5–4 L/menit (dinyatakan sebagai CO₂ cair atau gas pada STP).

**Tahap 7 — Separasi (Separator Cascade).** Aliran CO₂ keluar dari vessel dilewatkan ke 1–3 *separator* bertekanan bertahap (Stage 1: 10 MPa/40 °C; Stage 2: 5 MPa/25 °C; Stage 3: <2 MPa/15 °C). Solut terpresipitasi pada tiap stage dikumpulkan dalam *collector vessel*. Sisa CO₂ direcycle ke sistem melalui *back-pressure regulator*.

**Tahap 8 — Analisis Produk dan Validasi Kualitas.** Ekstrak dianalisis dengan GC-MS untuk profil asam lemak, HPLC-PDA untuk pigmen, dan DPPH/ABTS assay untuk aktivitas antioksidan. Kepatuhan terhadap standar Codex Alimentarius atau EFSA menjadi baseline kualitas.

**Tahap 9 — Optimasi dan Scale-Up.** Data dari *pilot plant* (kapasitas 1–5 L) digunakan untuk validasi model kinetika Naik, selanjutnya dilakukan *scale-up* menggunakan kriteria *constant specific CO₂ consumption* ($S_{CO_2}$) atau *constant superficial velocity* $u_s = Q_{CO_2}/A_v$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Ekstraksi Astaksantin dari *Haematococcus pluvialis* Menggunakan SFE-CO₂ dengan Ko-solven Etanol 5% mol.

### 4.1 Data Input Operasional

Berdasarkan Tinjauan Literatur Tzima *et al.* (2023), parameter operasi pada kasus ini adalah:

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Tekanan operasi | 35 MPa | $P$ |
| Suhu operasi | 55 °C = 328,15 K | $T$ |
| Laju alir CO₂ | 1,5 L/menit (STP) ≈ 0,13 kg/jam | $\dot{Q}$ |
| Massa biomassa | 200 g kering | $m_b$ |
| Kadar astaksantin awal | 3,2% b/b | $C_0$ |
| Ko-solven etanol | 5% mol | $y_{EtOH}$ |
| Durasi proses | 180 menit | $t_{\text{proses}}$ |
| Densitas CO₂ pada 35 MPa, \dots.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
