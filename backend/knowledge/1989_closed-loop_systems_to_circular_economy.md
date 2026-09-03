# 1989 — Sistem Closed-Loop sebagai Jalur Menuju Ekonomi Sirkular dan Keberlanjutan Lingkungan: Sintesis Manufaktur Berkelanjutan dan Analisis Daur Hidup Baterai Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-loop systems to circular economy: A pathway to environmental sustainability?
**Jurnal & Sitasi Utama:** Sami Kara, Michael Zwicky Hauschild, John W. Sutherland (2022). *Closed-loop systems to circular economy: A pathway to environmental sustainability?* **CIRP Annals**. DOI: [https://doi.org/10.1016/j.cirp.2022.05.008](https://doi.org/10.1016/j.cirp.2022.05.008)
**Sitasi Pendukung:** Aitor Picatoste, Daniel Justel, Joan Manuel F. Mendoza (2022). *Circularity and life cycle environmental impact assessment of batteries for electric vehicles: Industrial challenges, best practices and research guidelines.* **Renewable and Sustainable Energy Reviews**, Vol. 174, 112941. DOI: [https://doi.org/10.1016/j.rser.2022.112941](https://doi.org/10.1016/j.rser.2022.112941)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi sistem industri global dari paradigma linear (*take–make–use–dispose*) menuju paradigma sirkular menjadi agenda strategis yang tidak terhindarkan pada abad ke-21. Dalam *CIRP Annals* edisi 2022, Kara, Hauschild, dan Sutherland (DOI: [10.1016/j.cirp.2022.05.008](https://doi.org/10.1016/j.cirp.2022.05.008)) menegaskan bahwa **sistem closed-loop** bukan sekadar pilihan lingkungan, melainkan prasyarat strategis untuk mempertahankan daya saing industri di tengah kelangkaan sumber daya, volatilitas harga bahan baku kritis, serta tekanan regulasi emisi karbon. Mereka mengemukakan bahwa transisi menuju *closed-loop manufacturing systems* (CLMS) memerlukan integrasi tiga pilar analitis secara simultan: *Life Cycle Assessment* (LCA), *Material Flow Analysis* (MFA), dan desain produk untuk umur pakai panjang (*Design for Longevity, DfL*).

Urgensi persoalan ini bersifat ganda. Pertama, dari sisi lingkungan, sektor manufaktur bertanggung jawab atas sekitar 24% emisi gas rumah kaca global (GHG) dan konsumsi energi primer dunia mendekati 32%. Kedua, dari sisi ekonomi, kehilangan material melalui *end-of-life* (EoL) yang tidak ter-recover secara efektif menyebabkan kebocoran nilai (*value leakage*) senilai triliunan dolar AS per tahun—menurut *International Resource Panel* (IRP/UNEP), lebih dari 90% material yang diekstraksi pada fase hulu tidak kembali ke siklus produktif. Dalam konteks ini, Picatoste, Justel, dan Mendoza (DOI: [10.1016/j.rser.2022.112941](https://doi.org/10.1016/j.rser.2022.112941)) menyoroti studi kasus baterai *lithium-ion* (LIB) untuk kendaraan listrik (BEV) sebagai *use case* emblematic: baterai menyimpan 50–250 kWh energi kimia per unit, mengandung material kritis seperti litium, kobalt, nikel, dan grafit, dan memiliki jejak karbon manufaktur (*cradle-to-gate*) sebesar 75–200 kg CO₂eq/kWh tergantung komposisi kimia dan sumber listrik.

Konteks industri manufactur modern menuntut para insinyur industri untuk tidak hanya mengoptimalkan efisiensi lini produksi, melainkan juga merancang **rantai nilai tertutup** yang mencakup pengembalian produk (*take-back logistics*), disassembly, pengujian, remanufaktur, daur ulang material, dan akhirnya reinjeksi ke proses produksi primer atau sekunder. Dalam ekosistem *Industry 4.0*, integrasi teknologi digital seperti *digital twin*, *blockchain-based battery passport*, dan AI-driven *reverse logistics routing* menjadi enabler teknis untuk orkestrasi closed-loop yang efisien. Kedua paper rujukan menunjukkan bahwa tanpa kerangka analitis kuantitatif dan model keputusan yang rigor, transisi sirkular akan terjebak pada wacana normatif tanpa dampak terukur pada *Key Performance Indicators* (KPI) lingkungan dan finansial.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dikembangkan Kara et al. (2022) berakar pada persamaan neraca massa sistem tertutup sebagai berikut. Untuk suatu sistem manufaktur dengan boundary $B$ selama interval waktu $\Delta t = [t_0, t_1]$:

$$\frac{dM_{stored}}{dt} = \sum_{i \in I} \dot{m}_{i}^{in}(t) - \sum_{j \in O} \dot{m}_{j}^{out}(t) + \sum_{k \in R} \dot{m}_{k}^{recovered}(t) - \sum_{l \in W} \dot{m}_{l}^{loss}(t)$$

di mana $M_{stored}$ adalah stok material dalam sistem (kg), $\dot{m}_{i}^{in}$ adalah laju alir masuk material virgin, $\dot{m}_{j}^{out}$ adalah laju alir keluar produk jadi, $\dot{m}_{k}^{recovered}$ adalah laju material yang berhasil di-recover dari EoL, dan $\dot{m}_{l}^{loss}$ adalah kebocoran material (emisí, *landfill*, *downcycling losses*). Sistem dikategorikan *closed-loop* ketika $\sum_k \dot{m}_k^{recovered} \geq \alpha \cdot \sum_i \dot{m}_i^{in}$, dengan target koefisien $\alpha$ minimal 0,5 untuk kategori *partial closed-loop* dan $\alpha \geq 0,9$ untuk *full closed-loop*.

Formulasi kedua yang esensial adalah **Material Circularity Indicator (MCI)** yang diadopsi dari Ellen MacArthur Foundation dan diacu oleh kedua paper:

$$\text{MCI} = 1 - \text{LFI} \cdot F(X)$$

dengan:

$$\text{LFI} = \frac{V + W}{2M}, \quad F(X) = \frac{0,9}{X}, \quad X = \frac{\text{Lifetime}_{\text{actual}}}{\text{Lifetime}_{\text{reference}}}$$

di mana $V$ adalah massa material virgin yang dikonsumsi, $W$ adalah massa waste yang dihasilkan, $M$ adalah total massa material dalam sistem, dan $X$ adalah rasio umur pakai aktual terhadap referensi. Nilai MCI berkisar antara 0 (linear sempurna) hingga 1 (sirkular sempurna).

Untuk analisis dampak lingkungan, LCA *characterization* mengikuti persamaan:

$$\text{Impact}_c = \sum_{i=1}^{n} E_i \cdot \text{CF}_{c,i}$$

dengan $E_i$ adalah emisi *inventory flow* zat $i$ (kg), $\text{CF}_{c,i}$ adalah *characterization factor* zat $i$ pada kategori dampak $c$ (misalnya *Global Warming Potential* dalam kg CO₂eq/kg). Untuk baterai BEV, kategori dampak yang dominan menurut Picatoste et al. (2022) adalah: GWP100 (kg CO₂eq), CED/MJ (*Cumulative Energy Demand*), dan *Abiotic Resource Depletion Potential* (kg Sb-eq).

Formulasi **State of Health (SoH)** baterai, yang menentukan ambang batas kelayakan remanufaktur atau *second-life*, didefinisikan:

$$\text{SoH}(t) = \frac{C_{\text{actual}}(t)}{C_{\text{nominal}}} \cdot 100\%$$

dengan $C_{\text{actual}}$ kapasitas terukur saat siklus $t$ dan $C_{\text{nominal}}$ kapasitas awal. Standar industri menggunakan ambang 80% untuk退役 dari aplikasi otomotif dan 60% untuk *second-life* stasioner. Untuk perhitungan *cycle aging* yang bergantung pada *depth of discharge* (DoD), persamaan *rainflow counting* dan degradasi kapasitas mengikuti hukum Arrhenius-Doyle:

$$Q_{\text{loss}}(t) = B \cdot e^{\frac{-E_a}{RT}} \cdot (\text{Ah}_{\text{throughput}})^z$$

dengan $B$ adalah konstanta pre-exponential, $E_a$ adalah energi aktivasi, $R$ konstanta gas, $T$ suhu operasi, dan $z$ eksponen akar pangkat (umumnya $\approx 0,5$).

Akhirnya, model keputusan *reverse logistics* untuk alokasi EoL battery antara **reuse, remanufacture, recycle** diselesaikan dengan optimasi nilai-keberlanjutan gabungan:

$$\max Z = w_1 \cdot \text{NPV}_{\text{economic}} + w_2 \cdot \Delta \text{GWP} + w_3 \cdot \text{MCI}$$

dengan kendala kapasitas disassembly, fasilitas remanufaktur, dan daur ulang. Bobot $w_1, w_2, w_3$ dapat ditentukan melalui metode AHP atau *stakeholder elicitation*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis kedua paper rujukan, implementasi *closed-loop system* mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Pemetaan Aliran Material (Material Flow Analysis).** Lakukan *sankey diagram* berbasis neraca massa untuk seluruh siklus hidup produk. Identifikasi *hotspot losses* pada tahap manufaktur (yield 85–95%), distribusi (returns 5–15%), dan EoL (*recovery rate* 20–60% untuk baterai LIB global saat ini). Indikator kunci: **MCI** baseline, **LFI**, dan **Material Loss Rate (MLR)**.

**Tahap 2 — LCA *cradle-to-cradle*.** Gunakan standar ISO 14040/14044 dengan database ecoinvent 3.8+ atau GaBi. Tetapkan *functional unit* (misalnya 1 kWh kapasitas baterai sepanjang *service life*). Terapkan *allocation by energy* atau *substitution by avoided burden* untuk modul *recycling* dan *remanufacturing*. Rekomendasi teknis: gunakan *attributional* LCA untuk keputusan internal dan *consequential* LCA untuk evaluasi kebijakan.

**Tahap 3 — Desain Take-Back Network.** Bangun *collection points* dengan radius optimal menggunakan model **Continuous Approximation**:

$$\text{Total Cost} = C_s \cdot N_s + C_t \cdot d_{\text{avg}} \cdot \lambda + C_p \cdot P$$

dengan $N_s$ jumlah collection sites, $C_s$ biaya tetap per site, $C_t$ biaya transport per unit jarak, $d_{\text{avg}}$ jarak rata-rata weighted, $\lambda$ laju aliran EoL, $C_p$ biaya processing, dan $P$ volume processing. Optimasi dilakukan dengan *MILP* (Mixed Integer Linear Programming) untuk lokasi fasilitas *centralized remanufact