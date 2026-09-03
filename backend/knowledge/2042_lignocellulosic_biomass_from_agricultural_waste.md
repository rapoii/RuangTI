# 2042 — Konversi Biomassa Lignoselulosa dari Limbah Pertanian Menuju Ekonomi Sirkular: Integrasi Biofuel, Biokomposit, dan Bioplastik dalam Paradigma Biorefineri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Lignocellulosic biomass from agricultural waste to the circular economy: a review with focus on biofuels, biocomposites and bioplastics
**Jurnal & Sitasi Utama:** Muhammad Mujtaba, Leonardo Fernandes Fraceto, Mahyar Fazeli (2023). *Journal of Cleaner Production*. DOI: [https://doi.org/10.1016/j.jclepro.2023.136815](https://doi.org/10.1016/j.jclepro.2023.136815)
**Sitasi Pendukung:** Wen Li, Xiaoping Zhang, Xiaoping Zhang (2024). *Foods*. DOI: [https://doi.org/10.3390/foods13040628](https://doi.org/10.3390/foods13040628)

---

## 1. Pendahuluan dan Konteks Industri

Krisis pemanasan global yang dipicu oleh emisi gas rumah kaca (GRK) tak terkontrol telah memaksa seluruh rantai industri manufaktur global untuk melakukan reorientasi strategis dari ketergantungan terhadap petrokimia berbasis fosil menuju material biobased yang berkelanjutan dan ramah lingkungan. Mujtaba, Fraceto, dan Fazeli (2023) dalam *Journal of Cleaner Production* (DOI: [10.1016/j.jclepro.2023.136815](https://doi.org/10.1016/j.jclepro.2023.136815)) menekankan bahwa limbah pertanian merupakan reservoir lignoselulosa berlimpah yang selama ini kurang termanfaatkan secara optimal. Secara global, sektor pertanian menghasilkan sekitar 5 miliar ton residu lignoselulosa per tahun, dengan komponen utama berupa selulosa (30–50%), hemiselulosa (20–35%), dan lignin (15–30%). Struktur polimer kompleks ini, jika diproses melalui biorefinery terintegrasi, dapat dikonversi menjadi spektrum produk bernilai tambah tinggi: biofuel (bioetanol generasi kedua, biodiesel, biohidrogen), platform chemicals (asam laktat, asam suksinat, furfural), resin, bioplastik (PHB, PLA, PHA), serta biokomposit struktural.

Urgensi operasional industri berpijak pada tiga driver simultan. Pertama, *environmental driver* berupa target *Net Zero Emission* 2050 yang diadopsi melalui Paris Agreement dan diterjemahkan menjadi regulasi karbon seperti EU Carbon Border Adjustment Mechanism (CBAM) yang efektif 2026. Kedua, *economic driver* berupa volatilitas harga minyak bumi mentah yang dalam satu dekade terakhir bergerak pada rentang USD 40–120 per barel, menciptakan *price shock* yang mengancam margin industri hilir petrokimia. Ketiga, *regulatory driver* berupa kebijakan wajib kandungan biobased minimal 25% pada kemasan plastik di Uni Eropa (Directive 2019/904) dan similar trajectory di kawasan ASEAN. Mujtaba *et al.* (2023) menekankan bahwa integrated biorefinery—yang mengadopsi cascading use dan zero-waste principle dari circular economy—menjadi *unit operasi kritis* yang menjembatani ketersediaan biomassa dengan permintaan produk biobased. Pendekatan ini paralel dengan inovasi dalam ekstraksi senyawa bioaktif bernilai tinggi seperti flavonoid pada industri pangan, dimana Li *et al.* (2024) dalam *Foods* (DOI: [10.3390/foods13040628](https://doi.org/10.3390/foods13040628)) menunjukkan pentingnya optimasi proses ekstraksi menggunakan Response Surface Methodology (RSM) untuk mencapai yield maksimal dengan konsumsi energi minimal. Paradigma optimasi multi-respons ini menjadi cetak biru metodologis yang dapat diadopsi pada ekstraksi hemiselulosa dan lignin dari biomassa lignoselulosa.

Dalam konteks Indonesia sebagai negara agraris dengan produksi padi ~55 juta ton GKG/tahun (BPS 2023), potensi jerami padi sebagai feedstock lignoselulosa mencapai ~73 juta ton/tahun. Jika hanya 30% termanfaatkan untuk biorefinery, potensi produksi bioetanol dapat melampaui 5 miliar liter/tahun, suatu volume yang secara strategis dapat menurunkan ketergantungan terhadap BBM fosil sekaligus mengurangi emisi metana dari pembakaran terbuka jerami yang selama ini berkontribusi ~18% emisi GRK sektor pertanian Indonesia. Disinilah signifikansi rekayasa industri berskala besar menemukan urgensinya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Komposisi dan Struktur Lignoselulosa

Secara stoikiometri, selulosa merupakan polimer linear dari monomer glukosa dengan rumus empiris $\left(\text{C}_6\text{H}_{10}\text{O}_5\right)_n$ dan derajat polimerisasi (DP) berkisar 1.000–15.000 pada biomassa lignoselulosa alami. Hemiselulosa adalah heteropolimer bercabang yang tersusun dari monomer pentosa (xilosa, arabinosa) dan heksosa (mannosa, glukosa, galaktosa) dengan rumus umum $\left(\text{C}_5\text{H}_8\text{O}_4\right)_m$. Lignin, sebaliknya, merupakan polimer aromatik tiga dimensi yang terbentuk dari unit fenilpropana (H, G, S) dan bersifat amorf serta hidrofobik. Rasio komposisi ketiga komponen ini—sering disebut *lignocellulose fingerprint*—menjadi variabel keputusan utama dalam desain proses biorefinery.

### 2.2 Neraca Massa dan Efisiensi Konversi

Untuk sistem biorefinery dengan satu pintu masuk feedstock dan beberapa produk keluaran, persamaan neraca massa steady-state adalah:

$$F_{\text{in}} = \sum_{i=1}^{n} F_{\text{out},i} + F_{\text{loss}} + \frac{dM_{\text{system}}}{dt}$$

dimana $F_{\text{in}}$ adalah laju umpan biomassa lignoselulosa (kg/jam), $F_{\text{out},i}$ adalah laju produk ke- $i$ (bioetanol, bioplastik, biokomposit), $F_{\text{loss}}$ adalah fraksi yang hilang sebagai emisi,废液, atau residu tidak terkonversi, dan $M_{\text{system}}$ adalah akumulasi massa dalam reaktor (kg). Pada kondisi tunak, $\frac{dM_{\text{system}}}{dt}=0$.

### 2.3 Yield Teoritis dan Aktual Glukosa

Yield glukosa dari fraksi selulosa dan hemiselulosa dapat dihitung melalui stoikiometri hidrolisis sempurna:

$$\eta_{\text{glukosa}}^{\text{teo}} = \frac{m_{\text{selulosa}} \cdot \chi_{\text{selulosa}}}{162{,}14} + \frac{m_{\text{hemiselulosa}} \cdot \chi_{\text{hemiselulosa}}}{150{,}13}$$

dimana $m_{\text{selulosa}}$ dan $m_{\text{hemiselulosa}}$ adalah massa masing-masing fraksi (kg), $\chi$ adalah fraksi yang dapat terhidrolisis sempurna, dan 162,14 serta 150,13 adalah massa molar unit anhidroglukosa dan anhidroksilosa (g/mol). Yield aktual pada kondisi operasi industri dipengaruhi oleh efisiensi pretreatment ($E_p$), enzymatic hydrolysis ($E_h$), dan fermentasi ($E_f$):

$$\eta_{\text{aktual}} = \eta_{\text{glukosa}}^{\text{teo}} \cdot E_p \cdot E_h \cdot E_f$$

### 2.4 Model Kinetika Pretreatment

Kinetika degradasi hemiselulosa selama pretreatment asam encer mengikuti persamaan pseudo-homogeneous first-order Saeman (1945) yang dimodifikasi:

$$\frac{dC_h}{dt} = -k_1 \cdot C_h \quad \text{dan} \quad \frac{dC_m}{dt} = k_1 \cdot C_h - k_2 \cdot C_m$$

dimana $C_h$ adalah konsentrasi hemiselulosa (g/L), $C_m$ adalah konsentrasi monomer xilosa (g/L), $k_1$ adalah konstanta laju hidrolisis hemiselulosa (menit$^{-1}$), dan $k_2$ adalah konstanta degradasi monomer menjadi furfural (menit$^{-1}$). Model ini esensial untuk menentukan *optimal severity factor* (CSF) yang didefinisikan oleh Abatzoglou *et al.*:

$$\log(R_0) = \log\left[t \cdot \exp\left(\frac{T_h - 100}{14{,}75}\right)\right] - pH$$

### 2.5 Fungsi Objektif Optimasi Biorefinery

Dalam kerangka rekayasa sistem industri, desain biorefinery multi-produk diformulasikan sebagai masalah Mixed-Integer Linear Programming (MILP) dengan fungsi objektif maksimisasi nilai ekonomi total (Net Present Value):

$$\max Z = \sum_{p=1}^{P} \sum_{t=0}^{T} \frac{\pi_p \cdot Q_{p,t} - C_{\text{op},t}}{(1+r)^t} - C_{\text{cap}}$$

dimana $\pi_p$ adalah harga jual produk $p$ (USD/kg), $Q_{p,t}$ adalah kuantitas produksi pada periode $t$, $C_{\text{op},t}$ adalah biaya operasi, $C_{\text{cap}}$ adalah kapitalisasi investasi, dan $r$ adalah tingkat diskonto. Pendekatan RSM yang digunakan oleh Li *et al.* (2024) untuk optimasi ekstraksi flavonoid (DOI: [10.3390/foods13040628](https://doi.org/10.3390/foods13040628)) dengan fungsi objektif yield maksimum dan konsumsi pelarut minimum, dapat diadaptasi secara langsung ke dalam model optimasi kondisi pretreatment lignoselulosa melalui persamaan polinomial orde dua:

$$Y = \beta_0 + \sum_{i=1}^{k}\beta_i x_i + \sum_{i=1}^{k}\beta_{ii} x_i^2 + \sum_{i<j}^{k}\beta_{ij} x_i x_j + \epsilon$$

dimana $x_i$ adalah variabel proses (suhu, konsentrasi asam, waktu), $\beta$ adalah koefisien regresi, dan $\epsilon$ adalah error.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Biorefinery Terintegrasi

Mujtaba *et al.* (2023) mengusulkan arsitektur biorefinery berbasis cascading principle yang terdiri atas empat unit operasi utama secara seri-paralel:

```
┌─────────────────────────┐
│  LOGISTIK FEEDSTOCK     │  ← Pengumpulan, sortasi, pengepresan,
│  (Jerami padi, bagas)   │     pengeringan (RH < 12%)
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│  PRETREATMENT STAGE     │  ← Acid/alkali/steam explosion,
│  (Hidrolisis parsial)   │     ionic liquid, organosolv
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│  SEPARASI & FRAKSINASI  │  ← Solid-liquid separation, fraksinasi
│  (Selulosa, hemi, lignin)│     selulosa/lignin via centrifugation
└─────┬───────┬────────────┘
      ▼       ▼
┌─────────┐ ┌─────────────┐
│ENZYMATIC│ │ K