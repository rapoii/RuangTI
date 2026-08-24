# 759 — Optimasi Penjadwalan Produksi Tambang Terbuka: Ultimate Pit Limit Lerchs–Grossmann, Block Model MILP, dan Truck–Shovel Dispatching

**Domain:** Riset Operasi & Optimasi Matematis · Sektor Pertambangan · Manajemen Armada Alat Berat  
**Topik Spesialis:** Block Model & Nilai Ekonomi Blok, Ultimate Pit Limit, Maximum Weight Closure–Min-Cut (Picard), Nested Pit & Pushback Design, Open-Pit Production Scheduling MILP (NPV Maksimum), Blending Grade Bijih, Match Factor Morgan–Peterson, Fleet Management System (FMS)  
**Standar & Referensi Utama:** Lerchs & Grossmann (1965) CIM Bulletin; KCMI 2021 (Komite Cadangan Mineral Indonesia); Kepmen ESDM No. 1806.K/30/MEM/2018; UU No. 4/2009 tentang Minerba jo. UU No. 3/2020; Newman et al. (2010) Interfaces; Hustrulid, Kuchta & Martin (2013) *Open Pit Mine Planning & Design*  

---

## 1. Pendahuluan dan Konteks Industri

Pertambangan terbuka (*open-pit*) adalah salah satu arena aplikasi Riset Operasi paling intensif bernilai ekonomi tertinggi: keputusan blok mana yang digali kapan saja menentukan arus kas triliunan rupiah sepanjang usia tambang (*life of mine*, LOM). Rantai keputusan berjenjang dimulai dari **ultimate pit limit** — batas geometris maksimum material yang layak ditambang — lalu turun ke desain fase/*pushback*, jadwal produksi multi-periode, hingga **dispatching real-time** armada truk dan *shovel* di lapangan. Setiap jenjang memiliki formulasi matematis khas yang kini menjadi standar industri global.

Bagi konteks Indonesia, relevansinya strategis. Indonesia adalah produsen batubara utama dunia (Kalimantan dan Sumatera Selatan), penghasil nikel laterite terbesar yang menjadi umpan smelter RKEF dan HPAL dalam agenda hilirisasi (pembatasan ekspor bijih nikel sejak 2020, diperkuat UU No. 3/2020), serta lokasi kompleks tembaga-emas kelas dunia seperti Grasberg di Papua dan Batu Hijau di Nusa Tenggara Barat. Pelaporan cadangan diatur melalui kode nasional **KCMI 2021** yang selaras CRIRSCO, dengan pedoman pelaporan **Kepmen ESDM No. 1806.K/30/MEM/2018** di bawah payung UU No. 4/2009 tentang Pertambangan Minerba. Perencana tambang (*mine planner*) modern — profesi lintas disiplin geologi dan Teknik Industri — wajib menguasai LP/MILP, teori antrian untuk sistem truk-*shovel*, dan simulasi diskret.

Modul ini meruntut formulasi inti: blok ekonomi dan grafik preseden, algoritma Lerchs–Grossmann sebagai persoalan *maximum weight closure* yang reducible ke *min-cut* (Picard, 1976), formulasi MILP penjadwalan multi-periode maksimasi NPV, *match factor* untuk penentuan ukuran armada, serta algoritma *dispatching* dinamis pada *Fleet Management System*. Studi kasus numerik disajikan terverifikasi manual agar dapat direproduksi di workspace.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Block Model dan Nilai Ekonomi Blok

Deposit dimodelkan sebagai himpunan blok reguler $b \in B$ dengan tonase $T_b$, kadar $g_b$, recovery metalurgi $\eta_r$, harga mineral $P_m$, biaya pengolahan per ton $c_p$, dan biaya penambangan per ton $c_m$:

$$
v_b = T_b \left( g_b \cdot \eta_r \cdot P_m - c_p \right) - T_b \, c_m
$$

Blok bijih bernilai $v_b > 0$; blok *waste* bernilai negatif namun wajib digali karena mengunci blok bijih di bawahnya.

### 2.2 Preseden Vertikal dan Ultimate Pit Limit sebagai Maximum Closure

Aturan lereng stabil mensyaratkan blok $j$ hanya boleh digali setelah seluruh blok pada kerucut di atasnya $P(j)$ telah dilepas. Definisikan himpunan tertutup (*closure*) $S \subseteq B$: jika $j \in S$ maka $P(j) \subseteq S$. **Ultimate pit limit** adalah closure bernilai maksimum:

$$
\max_{z} \; \sum_{b \in B} v_b z_b \quad \text{s.t.} \quad z_j \le z_i \;\; \forall\, i \in P(j), \; z_b \in \{0,1\}
$$

Lerchs & Grossmann (1965) memformulasikan penyelesaiannya via grafik berarah dan dinamika; secara umum persoalan ini adalah **maximum weight closure** yang dapat diselesaikan polinomial dengan reduksi *minimum s-t cut*: busur sumber $s \to b$ berkapasitas $v_b$ untuk $v_b>0$, busur $b \to t$ berkapasitas $|v_b|$ untuk $v_b<0$, dan busur preseden berkapasitas $\infty$ (Picard, 1976). Blok di sisi sumber hasil *min-cut* merupakan pit optimum. **Nested pits** dihasilkan dengan menskalakan $v_b \to \lambda v_b$ untuk rangkaian $\lambda \in (0,\infty)$; urutan pit bersarang menjadi cetak biru desain *pushback*/fase.

### 2.3 Formulasi MILP Penjadwalan Produksi Multi-Periode

Variabel $x_{bt} \in \{0,1\}$ (dalam praktik direlaksasi $[0,1]$) menyatakan blok $b$ digali pada periode $t$; variabel tujuan $z^{ore}_{bt}, z^{waste}_{bt}$ memilah destinasi. Horizon $H$ periode, diskonto $d$:

$$
\max \sum_{t=1}^{H} \frac{1}{(1+d)^t} \sum_{b \in B} v_b\, x_{bt}
$$

dengan kendala-kendala struktural:

$$
x_{jt} \le \sum_{\tau=1}^{t} x_{i\tau} \quad \forall j,\; \forall i \in P(j),\; \forall t
\qquad \text{(preseden)}
$$

$$
\sum_{b} m_b x_{bt} \le M_t \quad \text{(kapasitas gali)}, \qquad
\sum_{b \in O} q_b z^{ore}_{bt} \le Q_t \quad \text{(kapasitas olah)}
$$

$$
z^{ore}_{bt} + z^{waste}_{bt} = x_{bt} \quad \text{(konservasi destinasi)}, \qquad
g^{\min}_t \le \frac{\sum_b g_b q_b z^{ore}_{bt}}{\sum_b q_b z^{ore}_{bt}} \le g^{\max}_t \quad \text{(blending kadar, linearizable)}
$$

Instansi riil berisi jutaan blok dan puluhan periode — NP-sulit; solusi industri memadukan *branch-and-cut* (Caccetta & Hill, 2003), disagregasi LP (Boland et al., 2009), agregasi blok (*fundamental tree*, Ramazan 2007), dan pendekatan topologis-LP (Chicoisne et al., 2012).

### 2.4 Match Factor untuk Ukuran Armada Truck–Shovel

Rasio keseimbangan armada homogen (Morgan & Peterson, 1968):

$$
MF = \frac{n_T \cdot t_L}{n_L \cdot t_C}
$$

dengan $n_T$ jumlah truk, $n_L$ jumlah *shovel*, $t_L$ waktu muat satu truk, dan $t_C$ siklus truk penuh (muat + angkut + bongkar + kembali + antrian). $MF \approx 1$ seimbang; $MF < 1$ *shovel* menganggur (*under-trucked*); $MF > 1$ truk mengantre (*over-trucked*). Generalisasi armada heterogen dikembangkan Burt & Caccetta (2007). Sistem truk–*shovel* sendiri merupakan antrian populasi-tertutup; analisis utilisasi dan panjang antrian dapat diperdalam dengan kerangka Modul 005 dan 051.

---

## 3. Metodologi Eksekusi End-to-End

**Tahap 1 — Basisdata geologi.** Data *drill hole* (collar, assay, lithology) diverifikasi QA/QC lalu diinterpolasi menjadi model blok 3-D menggunakan kriging atau IDW — metodologi interpolasi dibahas Modul 436.

**Tahap 2 — Valuasi blok.** Setiap blok diberi tag kode KCMI/JORC (terukur/tersirat) lalu dihitung $v_b$ sesuai persamaan Bagian 2.1 dengan asumsi harga dan recovery konsensus teknik.

**Tahap 3 — Pit shell.** Jalankan LG/min-cut untuk ultimate pit dan rangkaian nested pits; insinyur desain menerjemahkan shell menjadi fase operasional dengan akses jalan (*ramp*), *dump* waste, dan geometri lereng final.

**Tahap 4 — Jadwal hidup tambang.** Selesaikan MILP Bagian 2.3 (atau heuristik LP-guided) untuk mendapatkan urutan penggalian per-periode yang memaksimumkan NPV di bawah kendala kapasitas alat, pabrik, dan blending.

**Tahap 5 — Penentuan armada.** Dari laju gali rencana, hitung kebutuhan truk–*shovel* dengan match factor dan produktivitas jam efektif; uji sensitivitas terhadap *haul profile* (jarak, gradien, roll resistance).

**Tahap 6 — Kendali interval pendek.** Rencana mingguan/harian diturunkan menjadi *dig plan* per bench dengan kontrol kadar (*grade control*) dari sampling blasthole.

**Tahap 7 — Dispatching real-time.** FMS menugaskan truk ke *shovel* melalui dua filosofi: (a) *rule-based* — maksimasi utilisasi *shovel*, minimasi waktu tunggu truk, FIFO pada *crusher*; dan (b) *optimization-based* — penugasan ulang *rolling-horizon* setiap 5–15 menit yang meminimalkan simpangan laju produksi aktual vs target per tipe material, sering dikombinasikan simulasi diskret (Modul 201) untuk evaluasi kebijakan.

**Tahap 8 — Rekonsiliasi.** Bandingkan tonase/kadar aktual vs rencana; simpangan sistematis memicu kalibrasi ulang model blok atau asumsi produktivitas — paralel dengan disiplin PDCA/Six Sigma Modul 158.

---

## 4. Studi Kasus Industri (Numerik Terverifikasi)

### 4.1 Logika Ultimate Pit pada Irisan Kolom Sederhana

Perhatikan dua kolom blok vertikal (nilai di dalam kurung dari atas ke bawah):

- Kolom A: bijih $+100$ di atas waste $-50$. Ambil keduanya $\Rightarrow$ nilai bersih $+50 > 0$ → masuk pit.
- Kolom B: bijih $+100$ di atas waste $-120$. Ambil keduanya $\Rightarrow$ $-20 < 0$ → kolom ditinggal; bijihnya tetap terkunci karena preseden.

Ilustrasi ini menangkap esensi closure: bijih bernilai positif hanya "hidup" jika rantai *stripping* di atasnya masih bernilai bersih positif — keputusan yang pada skala nyata melibatkan ratusan ribu blok saling berpasangan dan diselesaikan *min-cut* dalam hitungan detik.

### 4.2 Penentuan Armada dengan Match Factor

Tambang batubara Kalimantan: satu *shovel* front-end loader memuat truk dalam 3 pass × 0,5 menit $= t_L = 1{,}5$ menit; siklus truk penuh ke *crusher* $t_C = 15$ menit. Armada beroperasi dengan $n_L = 2$ *shovel* dan $n_T = 12$ truk:

$$
MF = \frac{12 \times 1{,}5}{2 \times 15} = \frac{18}{30} = 0{,}6 \quad \Rightarrow \quad \text{under-trucked: shovel idle } 40\%
$$

Agar seimbang ($MF = 1$) diperlukan $n_T = n_L \cdot t_C / t_L = 2 \times 15 / 1{,}5 = 20$ truk. Keputusan investasi kemudian menimbang biaya antrian truk vs idle *shovel* — praktik umum menargetkan $MF$ sedikit di bawah 1 (±0,95) ketika biaya operasi truk per jam jauh lebih mahal, dan menyerahkan buffer dinamisnya kepada algoritma dispatch.

### 4.3 Karakteristik Operasi Indonesia

Operasi batubara Kalimantan didominasi tantangan *stripping ratio* dan haul jarak jauh dengan cuaca tropis (visibilitas, jalan licin) yang masuk ke parameter $t_C$; operasi nikel laterite Sulawesi menekankan pencampuran umpan kadar ke smelter RKEF/HPAL sehingga kendala *blending* Bagian 2.3 menjadi aktif; kompleksitas Grasberg yang kini bertransisi ke metode bawah tanah menunjukkan pentingnya perencanaan transisi antarmetode — domain yang sama sekali berbeda formulasi namun berbagi fondasi valuasi blok.

---

## 5. Implementasi Teknologi & Key Performance Indicator

**Ekosistem perangkat lunak.** Perencanaan strategis: Hexagon Whittle (implementasi LG/nested pit komersial), Deswik.Sched, Datamine MinePlan, Bentley/Surpac, Vulcan. Operasi lapangan: *Fleet Management System* seperti Modular DISPATCH dan Wenco FMS terintegrasi GNSS presisi tinggi, timbangan muat *on-board*, serta telemetri ban dan bahan bakar.

**KPI operasional yang dipantau harian:**
1. **Schedule compliance** — % tonase aktual vs rencana per periode geser.
2. **Stripping ratio aktual vs budget** — indikator dini deviasi sekuens.
3. **Ore loss & dilution** — kehilangan kadar pada batas kontak bijih-waste.
4. **Utilisasi & availability armada** — kerangka enam kerugian OEE (Modul 007) diadaptasi ke alat berat; keandalan komponen didukung *predictive maintenance* (Modul 076/423).
5. **Liter bahan bakar per ton diangkut** — metrik efisiensi termal logistik tambang.
6. **Emisi Scope 1 armada diesel** — basis inventarisasi GHG Protocol (Modul 190) dan target dekarbonisasi via *trolley assist* serta truk elektrik (Modul 287).

**Keamanan operasional.** Sistem *proximity detection* dan manajemen interferensi alat berat merupakan turunan langsung dari disiplin keselamatan berbasis risiko (HIRADC, Modul 017/275) yang wajib dalam SMK3/ISO 45001.

---

## 6. Keterkaitan dengan Modul Knowledge Base Lain

| Modul | Relevansi |
|---|---|
| 005 Riset Operasi & LP | Fondasi formulasi MILP dan dualitas |
| 016 Heuristik Penjadwalan Produksi | Paralelisme heuristik sekuens penggalian |
| 051 Queueing Networks (Jackson) | Analisis antrian crusher dan sistem truk–shovel |
| 085 Stochastic Programming / 484 CCP | Ketidakpastian kadar dan harga komoditas |
| 101 Column Generation / 103 Branch-and-Price / 447 Benders Decomposition | Dekomposisi MILP skala jutaan blok |
| 201 Simulasi Diskret | Evaluasi kebijakan dispatch sebelum deployment |
| 214 Verification & Validation | Validasi model simulasi tambang |
| 436 Kriging & Metamodeling | Interpolasi model blok dan surrogate optimasi |
| 126 Terminal Peti Kemas / 121 SCRM | Rantai ekspor batubara dan resiliensi logistik |
| 190 Carbon Footprint Scope 1-3 / 287 Decarbonization | Inventarisasi dan mitigasi emisi armada |

**Peta karier:** mine planning engineer, short-range/long-range planner, FMS/dispatch superintendent, konsultan OR pertambangan, hingga analis portofolio aset energi — profil yang meminta gabungan kompetensi optimasi, statistik, dan pemahaman geologi aplikatif.

---

## 7. Referensi

1. Lerchs, H., & Grossmann, I.F. (1965). Optimum design of open-pit mines. *Canadian Mining and Metallurgical Bulletin (CIM Bulletin)*, 58, 47–54.
2. Johnson, T.B. (1968). *Optimum production scheduling*. Disertasi doktoral, Stanford University.
3. Morgan, W.C., & Peterson, L.L. (1968). Determining shovel-truck productivity. *Mining Engineering*, Desember, 76–80.
4. Picard, J.C. (1976). Maximal closure of a graph and applications to combinatorial problems. *Networks*, 6(2).
5. Dagdelen, K., & Johnson, T.B. (1986). Optimum open-pit mine production scheduling by Lagrangian parameterization. *Proceedings of the 19th APCOM Symposium*.
6. Caccetta, L., & Hill, S.P. (2003). An application of branch and cut to open pit mine scheduling. *Journal of Global Optimization*, 27(2–3), 349–365.
7. Hochbaum, D.S., & Chen, A. (2000). Performance analysis and best implementations of old and new algorithms for the open-pit mining problem. *Operations Research*, 48(6), 894–914.
8. Boland, N., Dumitrescu, I., Froyland, G., & Gleixner, A.M. (2009). LP-based disaggregation approaches to solving the open pit mining production scheduling problem with block processing selectivity. *Computers & Operations Research*, 36(4), 1064–1089.
9. Ramazan, S. (2007). The new Fundamental Tree Algorithm for production scheduling of open pit mines. *European Journal of Operational Research*, 177(2), 1153–1166.
10. Burt, C.N., & Caccetta, L. (2007). Match factor for heterogeneous truck and loader fleets. *International Journal of Mining, Reclamation and Environment*, 21(4), 262–270.
11. Osanloo, M., McCoy, J., & Hekmat, A. (2008). Long term open pit mine production planning: A review of models and algorithms. *International Journal of Mining, Reclamation and Environment*, 22(1), 3–35.
12. Newman, A.M., Rubio, E., Caro, R., Weintraub, A., & Eurek, K. (2010). A review of operations research in mine planning. *Interfaces*, 40(3), 222–245.
13. Chicoisne, R., Espinoza, D., Goycoolea, M., Moreno, E., & Rubio, E. (2012). A new algorithm for the open-pit mine production scheduling problem. *Operations Research*, 60(3), 517–528.
14. Hustrulid, W., Kuchta, M., & Martin, R. (2013). *Open Pit Mine Planning & Design* (3rd ed.). CRC Press.
15. Hartman, H.L., & Mutmansky, J.M. (2002). *Introductory Mining Engineering* (2nd ed.). Wiley.
16. Darling, P. (Ed.). (2011). *SME Mining Engineering Handbook* (3rd ed.). Society for Mining, Metallurgy & Exploration.
17. Komite Cadangan Mineral Indonesia. (2021). *KCMI 2021 — Kode Pelaporan Hasil Eksplorasi, Sumber Daya Mineral, dan Cadangan Mineral*.
18. Kementerian Energi dan Sumber Daya Mineral RI. (2018). *Kepmen ESDM No. 1806.K/30/MEM/2018 tentang Pedoman Pelaporan Hasil Kegiatan Usaha Pertambangan*.
19. Undang-Undang Republik Indonesia No. 4 Tahun 2009 tentang Pertambangan Minerba, sebagaimana diubah dengan UU No. 3 Tahun 2020.
