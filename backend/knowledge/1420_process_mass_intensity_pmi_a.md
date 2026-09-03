# 1420 — Process Mass Intensity (PMI) dan Rekayasa Proses Manufaktur Peptida Berkelanjutan: Analisis Holistik Footprint Lingkungan SPPS serta Keterkaitannya dengan Teknik Mikroenkapsulasi Fase Cair

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Process Mass Intensity (PMI): A Holistic Analysis of Current Peptide Manufacturing Processes Informs Sustainability in Peptide Synthesis
**Jurnal & Sitasi Utama:** Ivy Kekessie, Katarzyna Wegner, Isamir Martínez (2024). *The Journal of Organic Chemistry*. DOI: [https://doi.org/10.1021/acs.joc.3c01494](https://doi.org/10.1021/acs.joc.3c01494)
**Sitasi Pendukung:** Alicja Napiórkowska, Arkadiusz Szpicer, Iwona Wojtasik‐Kalinowska (2023). *Foods*. DOI: [https://doi.org/10.3390/foods12234345](https://doi.org/10.3390/foods12234345)

---

## 1. Pendahuluan dan Konteks Industri

Industri farmasi global sedang menghadapi konvergensi dua tekanan strategis yang bersifat struktural dan simultan. Di satu sisi, portofolio *small molecule* yang selama ini menjadi tulang punggung persetujuan FDA (Food and Drug Administration) mulai menunjukkan keterbatasan dalam menangani target biologis yang secara intrinsik sulit ditackle oleh molekul kecil — seperti interaksi protein-protein (*protein-protein interaction*, PPI) dan reseptor membran kelas B. Di sisi lain, kematangan teknologi formulasi, sistem penghantaran (*delivery*), dan desain peptida sintetis telah mendorong *peptide-based therapeutics* kembali menjadi modalitas terapeutik yang sangat atraktif (Kekessie dkk., 2024, DOI: [10.1021/acs.joc.3c01494](https://doi.org/10.1021/acs.joc.3c01494)). Namun demikian, *trade-off* mendasar muncul pada tahap manufaktur: *Solid-Phase Peptide Synthesis* (SPPS), yang merupakan platform dominan untuk sintesis peptida, memerlukan penggunaan pelarut dan reagen dalam jumlah berlebih (excess molar equivalents) untuk memastikan kelarutan resin, kinetika reaksi kopling yang adekuat, dan yield kumulatif yang stabil pada setiap langkah elongasi rantai peptida. Kondisi ini secara langsung menghasilkan *environmental footprint* yang tinggi, yang oleh Kekessie dkk. (2024) dikuantifikasi menggunakan metrik Process Mass Intensity (PMI) di bawah naungan *ACS Green Chemistry Institute Pharmaceutical Roundtable* (ACS GCI PR).

Urgensi penelitian ini terletak pada gap data historis dalam literatur peptida: sementara metrik green chemistry seperti PMI, E-factor, dan Atom Economy telah lama diaplikasikan pada *small molecule* API (Active Pharmaceutical Ingredient), aplikasinya pada proses SPPS masih fragmentaris dan belum pernah dilaporkan secara holistik untuk empat belas perusahaan anggota ACS GCI PR. Studi ini, oleh karena itu, memposisikan dirinya sebagai baseline referensi industri pertama yang menyatukan empat belas lini proses ke dalam satu kerangka komparatif. Implikasi strategisnya sangat besar bagi engineering manajemen: perusahaan dapat mengidentifikasi di mana *bottleneck* lingkungan terjadi — apakah pada tahap deprotection (misalnya penggunaan piperidine dalam jumlah besar), pada tahap *cleavage* dari resin (menggunakan TFA—trifluoroacetic acid), atau pada tahap *purification* (konsumsi asetonitril dalam HPLC preparatif).

Paralel dengan isu keberlanjutan ini, industri makanan dan nutraceutical juga menghadapi tantangan serupa dalam hal konservasi senyawa aktif volatil. Napiórkowska dkk. (2023, DOI: [10.3390/foods12234345](https://doi.org/10.3390/foods12234345)) mendemonstrasikan bagaimana mikroenkapsulasi minyak atsiri juniper (*Juniperus communis*) dan lada hitam (*Piper nigrum*) melalui metode koaservasi kompleks gelatin-gum arab dapat meningkatkan stabilitas oksidatif dan memperpanjang umur simpan. Kedua paper ini, meskipun berada di sektor yang berbeda, keduanya berbicara dalam bahasa green chemistry yang sama: bagaimana meminimalkan jejak material melalui desain proses yang cermat. Pelajaran dari mikroenkapsulasi koaservasi — khususnya optimasi rasio polimer dan efisiensi enkapsulasi — dapat dianalogikan ke dalam optimalisasi rasio resin-pelarut dalam SPPS.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis yang digunakan oleh Kekessie dkk. (2024) berakar pada tiga metrik green chemistry klasik yang diformalisasikan oleh Constable & Phipps (2018) untuk konteks farmasi, namun di sini diaplikasikan secara spesifik pada rantai proses SPPS. Metrik utamanya adalah **Process Mass Intensity (PMI)**, yang didefinisikan sebagai rasio total massa seluruh input proses (reagen, pelarut, air proses, termasuk yield yang belum dihitung) terhadap massa produk akhir yang diisolasi:

$$\text{PMI} = \frac{\sum_{i=1}^{n} m_{i,\text{input}}}{m_{\text{product}}}$$

Di mana $m_{i,\text{input}}$ adalah massa input ke-$i$ (pelarut, reagen, monomer asam amino terproteksi, *coupling reagent* seperti HATU atau DIC, basa seperti DIPEA) dan $m_{\text{product}}$ adalah massa peptida murni yang diisolasi. Nilai PMI yang lebih rendah menunjukkan proses yang lebih efisien secara material. Dalam konteks SPPS, komponen dominan PMI adalah DMF (N,N-dimethylformamide) atau DCM (dichloromethane) sebagai *washing solvent* dan *deprotection solvent*, sehingga pereduksian PMI pada dasarnya adalah pereduksian volume pelarut total per gram produk.

Metrik kedua adalah **E-factor** (Environmental factor) yang diperkenalkan oleh Sheldon, yang fokus pada massa limbah total,不包括 air:

$$E = \frac{m_{\text{waste,total}} - m_{\text{water}}}{m_{\text{product}}}$$

Metrik ketiga yang dipakai adalah **Simple Mass Intensity (sMI)**, yang hanya menghitung reagen dan pelarut utama (tanpa memperhitungkan air dan utilitas tambahan), memberikan ukuran komparatif yang lebih bersih antar proses:

$$\text{sMI} = \frac{m_{\text{reagent}} + m_{\text{solvent}}}{m_{\text{product}}}$$

Di luar metrik utama ini, paper Kekessie dkk. (2024) juga menguraikan dekomposisi per-step PMI, yang menghitung kontribusi setiap langkah operasional (deprotection, coupling, washing, cleavage, precipitation, purification) terhadap total PMI, sehingga *engineer* dapat melakukan Pareto analysis terhadap sumber utama limbah.

Di sisi paper pendukung Napiórkowska dkk. (2023), formulasi matematis yang relevan untuk studi komparatif ini mencakup:

**Encapsulation Efficiency (EE)**, yang mengukur proporsi minyak atsiri yang berhasil terjebak di dalam matriks koacervate:

$$\text{EE} (\%) = \frac{m_{\text{oil,encapsulated}}}{m_{\text{oil,total}}} \times 100\%$$

**Carr Index (CI)**, indikator kompresibilitas dan flowability powder pasca-lyophilisasi:

$$\text{CI} = \frac{\rho_{\text{tapped}} - \rho_{\text{bulk}}}{\rho_{\text{tapped}}} \times 100\%$$

**Hausner Ratio (HR)**, yang berkaitan erat dengan CI melalui rumus:

$$\text{HR} = \frac{\rho_{\text{tapped}}}{\rho_{\text{bulk}}}$$

Di mana $\rho_{\text{bulk}}$ adalah densitas granul sebelum tap dan $\rho_{\text{tapped}}$ adalah densitas setelah pengetapan standar (biasanya 1250 ketukan menggunakan *tapped density tester* sesuai USP <616>). Nilai CI < 15% dan HR < 1.18 mengindikasikan *flow property* yang sangat baik; CI 15–20% dan HR 1.18–1.25 bersifat intermediet; CI > 25% dan HR > 1.35 menunjukkan kohesi yang tinggi dan potensi masalah penanganan di lini produksi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pendekatan metodologis paper Kekessie dkk. (2024) menggunakan *benchmarking* partisipatif melalui empat belas anggota ACS GCI PR yang mengisi survei terstruktur. Tahapan metodologisnya dapat diuraikan sebagai berikut untuk adaptasi SOP internal perusahaan:

**Tahap 1 — Definisi Unit Boundary Proses:** Tentukan secara tegas batas sistem (system boundary) yang akan dianalisis. Boundary harus mencakup mulai dari *resin loading* (jika Wang resin atau Rink amide resin digunakan), seluruh langkah deprotection-coupling-washing, cleavage dari resin menggunakan TFA/TIS/H₂O, *work-up* (precipitation dalam diethyl ether dingin), hingga *purification* (HPLC preparatif) dan *lyophilization*. *In-process controls* (IPC) dan *quality control* (QC) dimasukkan sebagai input material.

**Tahap 2 — Inventarisasi Massal:** Setiap input kimia ditimbang atau diukur volumenya dan dikonversi ke massa menggunakan densitas pelarut pada suhu operasional. Contoh tipikal untuk sintesis peptida 10-residu skala 100 mmol: DMF ≈ 8–12 L, piperidine 20% dalam DMF ≈ 4 L, TFA ≈ 200 mL, dietil eter ≈ 4 L untuk presipitasi.

**Tahap 3 — Normalisasi Output:** Massa produk peptida murni ditentukan setelah koreksi terhadap purity HPLC dan salt form. Peptida sering diisolasi sebagai TFA salt, sehingga koreksi stoikiometri harus dilakukan: massa peptida free base = massa crude × (1 − %TFA counterion × faktor stoikiometri).

**Tahap 4 — Perhitungan dan Dekomposisi PMI:** Menggunakan rumus di Bagian 2, hitung PMI total, lalu dekomposisi ke dalam empat kategori: (i) solvent for washing, (ii) solvent for deprotection, (iii) reagents for coupling, (iv) cleavage & purification. Buat *stacked bar chart* per proses untuk identifikasi Pareto.

**Tahap 5 — Benchmarking dan Gap Analysis:** Bandingkan PMI antar-lini proses dan identifikasi *best-in-class*. Misalnya, jika rentang PMI untuk peptida 10-residu adalah 2000–8000, lini dengan PMI 2000 menjadi *benchmark* dan gap analysis dilakukan untuk semua lini lain.

Di sisi paralel, SOP mikroenkapsulasi Napiórkowska dkk. (2023) mengikuti alur sebagai berikut: (1) Preparasi larutan polimer — gelatin (G) dan gum arab (GA) pada rasio 1:1, 1:2, atau 2:1 — masing-masing pada konsentrasi 1–2% b/v; (2) Pembuatan emulsi inti (*core material*) dengan melarutkan minyak atsiri 1% dalam minyak grape seed (GSO) atau soybean (SBO) sebagai carrier oil 10%; (3) Pencampuran emulsi ke dalam larutan polimer pada suhu 40–50°C, pH 3,5–4,5 (di bawah titik isoelektrik gelatin); (4) Induksi koaservasi dengan pendinginan gradual ke 5–10°C; (5) Cross-linking menggunakan glutaraldehyde atau transglutaminase; (6) Lyophilisasi pada −40°C, tekanan 0,05 mbar, selama 24–48 jam; (7) Karakterisasi produk: EE, CI, HR, particle size, moisture content, hygroscopicity, dan solubility.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Mari kita lakukan studi kasus terintegrasi. Ambil skenario: **sintesis peptida model 10-mer menggunakan SPPS Fmoc-*t*-Bu pada skala 100 mmol dengan target peptida octreotide analog**, lalu bandingkan dengan **proses mikroenkapsulasi 1 kg minyak atsiri juniper**.

### Studi Kasus A: PMI Sintesis Peptida 10-mer

**Input massa proses:**
- Resin Rink amide AM (loading 0,7 mmol/g): 142,9 g
- Fmoc-amino acid (10 × 5 eq excess × 100 mmol = 5000 mmol total, asumsi Mr rata-rata 400 g/mol): 2000 g
- HATU (5 eq × 100 mmol × 380 g/mol): 190 g
- DIPEA (10 eq × 100 mmol × 130 g/mol): 130 g
- Piperidine (20% v/v dalam DMF, total 4 L × 0,94 g/mL): 3760 g
- DMF washing solvent (total 10 L × 0,944 g/mL): 9440 g
- DCM untuk washing tambahan (2 L × 1,33 g/mL): 2660 g
- TFA cleavage (250 mL × 1,49 g/mL): 372,5 g
- TIS scavenger (12,5 mL × 0,76 g/mL): 9,5 g
- Dietil eter untuk presipitasi (4 L × 0,713 g/mL): 2852 g
- Acetonitrile untuk HPLC (8 L × 0,786 g/mL): 6288 g
- Air proses dan buffer: 5000 g

**Total input massa:**
$$m_{\text{input}} = 142{,}9 + 2000 + 190 + 130 + 3760 + 9440 + 2660 + 372{,}5 + 9{,}5 + 2852 + 6288 + 5000 = 32{,}844{,}9 \text{ g}$$

**Output massa produk (octreotide analog, Mr ≈ 1019 g/mol, yield 60% dari 100 mmol):**
$$m_{\text{product}} = 0{,}060 \times 100 \text{ mmol} \times 1019 \text{ g/mol} = 6{,}114 \text{ g (asumsi tanpa koreksi TFA salt)}$$

Koreksi untuk TFA salt (asumsi 1,5 ekivalen TFA per peptida dengan 4 situs basa):
$$m_{\text{
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
