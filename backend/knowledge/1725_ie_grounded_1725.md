# 1725 — Perilaku dan Karakteristik Pembentukan Kerak (Scaling) pada Autoclave selama Pelindian Bijih Nikel Laterit pada Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global tengah mengalami transformasi signifikan seiring dengan menurunnya cadangan bijih nikel sulfida yang kaya dan mudah diolah secara pirometalurgi. Pergeseran sumber daya menuju bijih nikel laterit berkadar rendah (1,0–2,0% Ni) telah memaksa pelaku industri untuk mengadopsi teknologi hidrometalurgi, terutama **High-Pressure Acid Leaching (HPAL)**, sebagai metode ekstraksi utama. Teknologi HPAL beroperasi pada suhu 240–270 °C dan tekanan 35–55 bar dengan menggunakan asam sulfat sebagai agen pelindi untuk melarutkan nikel dan kobalt dari mineral laterit seperti limonit dan saprolit (Dickson et al., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun, operasi HPAL menghadapi tantangan operasional yang sangat krusial, yaitu **pembentukan kerak (scaling)** pada dinding dan komponen internal autoclave. Kerak ini terbentuk dari pengendapan senyawa seperti gipsum ($\text{CaSO}_4\cdot 2\text{H}_2\text{O}$), anhidrit ($\text{CaSO}_4$), hematit ($\text{Fe}_2\text{O}_3$), alunit, dan senyawa silika yang mengalami dekomposisi termal selama proses pelindian. Akumulasi kerak menyebabkan penurunan koefisien perpindahan panas secara drastis, peningkatan konsumsi energi spesifik, serta berkurangnya volume efektif autoclave yang pada akhirnya menurunkan kapasitas produksi dan availabilitas pabrik (Andrameda et al., 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Secara ekonomis, downtime yang diperlukan untuk membersihkan autoclave dari kerak—baik secara mekanik maupun kimia—dapat mencapai 10–20% dari total *planned operating time* per tahun, dengan kerugian produksi yang signifikan. Sebagai contoh, pada fasilitas HPAL berskala 50.000 ton Ni per tahun, setiap satu hari shutdown setara dengan kehilangan produksi nikel bernilai lebih dari USD 1,5 juta pada harga pasar tahun 2024. Kajian mendalam tentang mekanisme pembentukan, karakterisasi morfologi-kimia, dan strategi mitigasi kerak menjadi agenda riset yang sangat relevan dalam konteks **cleaner production** dan **sustainability** yang menjadi fokus jurnal *Cleaner Waste Systems* (Dickson et al., 2026).

Dalam konteks rantai pasok baterai kendaraan listrik (EV), di mana permintaan nikel kelas baterai (*battery-grade nickel sulfate*) diproyeksikan tumbuh lebih dari 15% CAGR hingga 2030, optimasi proses HPAL bukan sekadar isu teknis, melainkan penentu strategis dalam memenuhi kebutuhan *critical minerals* untuk transisi energi global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Termodinamika Pelindian Asam Tekanan Tinggi

Reaksi pelindian nikel laterit pada kondisi HPAL dapat direpresentasikan secara stoikiometri sebagai berikut untuk mineral garnierit dan limonit:

$$\text{NiO} + \text{H}_2\text{SO}_4 \rightarrow \text{Ni}^{2+} + \text{SO}_4^{2-} + \text{H}_2\text{O}$$

$$\text{FeO(OH)} + 1{,}5\,\text{H}_2\text{SO}_4 \rightarrow 0{,}5\,\text{Fe}^{3+} + 1{,}5\,\text{SO}_4^{2-} + 2\,\text{H}_2\text{O}$$

Konsentrasi nikel terlarut dalam *pregnant leach solution* (PLS) dapat dihitung melalui neraca massa:

$$C_{\text{Ni}}^{PLS} = \frac{m_{\text{ore}} \cdot \alpha_{\text{Ni}} \cdot \eta_{\text{ekstraksi}}}{V_{\text{larutan}}}$$

di mana $m_{\text{ore}}$ adalah massa bijih umpan (kg), $\alpha_{\text{Ni}}$ adalah kadar nikel dalam bijih (fraksi massa), $\eta_{\text{ekstraksi}}$ adalah *recovery* nikel (0,90–0,95), dan $V_{\text{larutan}}$ adalah volume larutan (m³).

### 2.2. Kinetika Pembentukan Kerak — Supersaturasi dan Nukleasi

Fenomena scaling dikendalikan oleh **derajat supersaturasi (S)** dari garam-garam yang memiliki kelarutan terbatas pada suhu operasi. Untuk gipsum sebagai komponen kerak dominan:

$$S_{\text{CaSO}_4} = \frac{a_{\text{Ca}^{2+}} \cdot a_{\text{SO}_4^{2-}}}{K_{sp}(T)}$$

dengan $K_{sp}(T)$ adalah konstanta kelarutan yang bergantung suhu. Untuk reaksi:

$$\text{Ca}^{2+} + \text{SO}_4^{2-} + 2\,\text{H}_2\text{O} \rightleftharpoons \text{CaSO}_4\cdot 2\text{H}_2\text{O}$$

Laju nukleasi homogen mengikuti persamaan **Classical Nucleation Theory (CNT)**:

$$J = J_0 \exp\left(-\frac{16\pi\sigma^3 v_m^2}{3(k_B T)^3 (\ln S)^2}\right)$$

di mana $\sigma$ adalah tegangan permukaan antar-muka (J/m²), $v_m$ adalah volume molar kristal (m³/mol), $k_B$ adalah konstanta Boltzmann (1,38 × 10⁻²³ J/K), dan $T$ adalah suhu absolut (K). Parameter kritis adalah $\ln S$ yang berada di kuadrat pada denominator—artinya kenaikan kecil pada supersaturasi secara eksponensial meningkatkan laju nukleasi.

Laju pertumbuhan kristal (*crystal growth*) mengikuti hukum pangkat:

$$R_g = k_g (S - 1)^n$$

dengan $k_g$ sebagai konstanta laju pertumbuhan (m/s) dan $n$ sebagai orde reaksi (umumnya $n = 1{-}2$ untuk gipsum).

### 2.3. Perpindahan Panas dengan Hambatan Kerak

Penurunan laju perpindahan panas akibat akumulasi kerak dimodelkan melalui resistansi termal seri:

$$\frac{1}{U_{\text{overall}}} = \frac{1}{h_i} + \frac{\delta_s}{k_s} + \frac{\delta_{w}}{k_{w}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi sisi dalam dan luar (W/m²·K), $\delta_s$ adalah ketebalan kerak, $k_s$ adalah konduktivitas termal kerak (tipikal 0,2–0,8 W/m·K untuk gipsum berpori), $\delta_w$ adalah ketebalan dinding autoclave, dan $k_w$ adalah konduktivitas baja tahan karat (tipikal 16 W/m·K). Karena $k_s \ll k_w$, pertumbuhan kerak menjadi *bottleneck* perpindahan panas.

Laju akumulasi ketebalan kerak dapat dimodelkan sebagai:

$$\frac{d\delta_s}{dt} = \frac{R_g \cdot \rho_s}{M_s}$$

dengan $\rho_s$ sebagai densitas kerak (kg/m³) dan $M_s$ sebagai massa molar.

### 2.4. Neraca Sulfur dan Pretreatment Desulfurisasi

Andrameda et al. (2024) menyoroti pentingnya mengendalikan sulfur dalam umpan HPAL melalui proses *roasting-reduction* dengan agen desulfurisasi. Neraca sulfur dalam sistem:

$$S_{\text{in}} = S_{\text{sulfat}} + S_{\text{sulfida}} + S_{\text{elementer}} + S_{\text{SO}_2\text{(gas)}}$$

Pretreatment pada suhu 600–900 °C dengan penambahan batubara atau kokas sebagai reduktor memungkinkan konversi sulfur sulfida menjadi $\text{SO}_2$ yang menguap:

$$\text{FeS}_2 + \text{O}_2 \rightarrow \text{Fe}_2\text{O}_3 + 2\,\text{SO}_2$$

$$2\,\text{SO}_2 + \text{O}_2 \rightleftharpoons 2\,\text{SO}_3 \rightarrow \text{H}_2\text{SO}_4 \text{ (kembali ke sistem)}$$

Pengendalian rasio $\text{S}^{0}/\text{SO}_4^{2-}$ dalam slurry umpan menjadi kunci untuk menekan deposisi kerak berbasis sulfur elemental pada dinding autoclave.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian kerak HPAL mengikuti kerangka **Plan-Do-Check-Act (PDCA)** yang diadopsi dari standar ISO 9001 dan ISO 14001 untuk industri proses:

### 3.1. Diagram Alir Proses HPAL dengan Titik Kritis Scaling

```
[Bijih Laterit] → [Crushing & Sizing] → [Slurry Mixing (H₂SO₄)]
       ↓
[Pre-heating (Multi-stage Flash)]
       ↓
[AUTOCLAVE HPAL: T=250°C, P=40 bar, τ=60-90 min] ⚠️ ZONA SCALING
       ↓
[Flash Cooling & Steam Recovery]
       ↓
[CCD Thickener Series] → [Neutralization]
       ↓
[PLS: Ni/Co Recovery] → [Residue Neutralization]
```

### 3.2. SOP Karakterisasi Kerak (mengikuti Dickson et al., 2026)

1. **Sampling** — Pengambilan sampel kerak pada zona berbeda autoclave (bottom, middle, top) menggunakan *drilling coupon method* saat *scheduled shutdown*.
2. **Analisis Mineralogi** — Difraksi Sinar-X (XRD) dengan rentang 2θ =