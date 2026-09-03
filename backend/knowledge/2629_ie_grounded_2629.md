# 2629 — Strategi Closed-Loop Supply Chain untuk Battery Echelon Utilization dan Recycling-Remanufacturing Baterai Power Bekas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Strategi Closed-Loop Supply Chain (CLSC) dengan pertimbangan Echelon Utilization baterai power bekas dan recycling-remanufacturing, diperkuat oleh model robust untuk sistem ekonomi sirkular.
**Jurnal & Sitasi Utama:** JIANG Lin & TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., & Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (EV) global yang diproyeksikan mencapai lebih dari 245 juta unit pada 2030 (IEA, 2024) menimbulkan tantangan rekayasa kritis berupa pengelolaan *End-of-Life* (EOL) baterai lithium-ion. Baterai power yang pensiun (*retired power battery*, RPB) umumnya masih memiliki *State of Health* (SOH) 70–80%, yang menjadikannya layak untuk *echelon utilization* (EU)—yakni aplikasi sekunder pada sistem *storage* energi stasioner, *backup* telekomunikasi, atau *low-speed* electric vehicle. Hanya baterai dengan SOH di bawah ambang tertentu yang layak masuk jalur *recycling-remanufacturing* (RR) untuk回収 material kritis seperti litium, kobalt, dan nikel.

Konteks ini menjadi fundamental bagi paper utama JIANG Lin & TANG Lidan (2025) yang memodelkan strategi CLSC terintegrasi dengan keputusan *dual-channel recovery*: EU versus RR. Menurut JIANG & TANG (2025), keputusan manajerial kunci terletak pada saat terjadi *forking point*—yaitu bagaimana manufaktur Original Equipment Manufacturer (OEM), *third-party* recycler (TPR), dan operator *echelon* saling berinteraksi di bawah ketidakpastian return rate, harga material sekunder, dan demand aplikasi sekunder. Tanpa formulasi keputusan yang rigor, perusahaan menghadapi risiko *stranded asset*, inefisiensi alokasi modal, dan potensi *environmental liability* sesuai regulasi EU Battery Regulation 2023/1542.

Di sisi paralel, Shin, Kim & Jeong (2024) menyoroti bahwa di luar isu material, ketidakpastian *return rate* produk jadi dan kualitas *recovered product* membuat sistem CLSC rentan terhadap disrupsi yang sulit dimodelkan secara deterministik. Mereka mengusulkan *robust closed-loop supply chain model* yang menggabungkan *return management system* (RMS) dengan *diversion control* untuk mencegah *channel cannibalization* antara produk remanufaktur dan produk baru (Shin et al., 2024). Integrasi paradigma robust ini relevan untuk industri baterai karena *return stream* baterai bekas sangat volatil—dipengaruhi siklus保修, teknologi baru, dan degradasi pasar sekunder.

Urgensi operasional dari perpaduan riset ini adalah memberikan kerangka keputusan bagi *battery manufacturer*, *recycling hub*, dan *echelon integrator* agar mampu menentukan: (1) kapasitas alokasi RPB ke EU atau RR; (2) harga jual *second-life* battery dan *recycled material* yang optimal; (3) strategi *robust* untuk menangani fluktuasi kualitas RPB. Dari perspektif Teknik Industri, hal ini merupakan aplikasi langsung dari *operations research*, *game theory*, dan *reverse logistics engineering*.

## 2. Landasan Teori & Formulasi Matematis

JIANG & TANG (2025) menyusun model keputusan CLSC dengan tiga pemain (*OEM*, *echelon integrator* atau *EI*, *recycler* atau *RC*) dalam kerangka **Stackelberg game**. OEM bertindak sebagai *leader* yang menentukan *wholesale price* ($w$) dan *buy-back price* ($b$) untuk baterai bekas, sementara EI dan RC sebagai *followers* masing-masing menentukan *order quantity* ke *echelon market* dan ke *recycling stream*.

### 2.1 Parameter Model

Definisikan parameter berikut:
- $c_m$ = biaya manufaktur unit baterai baru
- $c_e$ = biaya *refurbishment* untuk aplikasi sekunder
- $c_r$ = biaya *recycling & material recovery* per unit
- $p_n$ = harga jual ritel baterai baru
- $p_e$ = harga jual baterai *second-life*
- $p_m$ = harga jual *recovered material* (Li, Co, Ni)
- $D_n$ = demand pasar baterai baru (fungsi $w$)
- $D_e$ = demand pasar *echelon* (fungsi $p_e$)
- $R$ = laju return baterai bekas (*return rate*)
- $\alpha$ = fraksi RPB dialokasikan ke EU, $(1-\alpha)$ ke RR, dengan $\alpha \in [0,1]$
- $\theta$ = parameter ketidakpastian kualitas (SOH)

### 2.2 Fungsi Demand

Mengikuti JIANG & TANG (2025), demand dimodelkan linier:
$$D_n(w) = a - b_1 w$$
$$D_e(p_e) = k - b_3 p_e$$

dengan $a, b_1, k, b_3 > 0$ adalah parameter sensitivitas harga.

### 2.3 Fungsi Objektif Profit OEM

$$\Pi_{OEM} = (p_n - c_m)D_n + (b - c_{bb})\alpha R D_n + \beta (p_m - c_r)(1-\alpha) R D_n$$

di mana $c_{bb}$ = biaya *buy-back handling*, $\beta$ = tingkat efisiensi *material recovery* ($0 < \beta \le 1$).

### 2.4 Fungsi Objektif Echelon Integrator

$$\Pi_{EI} = (p_e - c_e - b) \alpha R D_n$$

### 2.5 Fungsi Objektif Recycler

$$\Pi_{RC} = (b - c_r)(1-\alpha) R D_n + s \cdot V_{recovered}$$

dengan $V_{recovered}$ = nilai material kritis yang berhasil di-ekstrak.

### 2.6 Formulasi Robust (Shin et al., 2024)

Shin, Kim & Jeong (2024) memperkenalkan *uncertainty set* untuk return rate:
$$\mathcal{U} = \{ R : \underline{R} \le R \le \bar{R},\; |\mathbb{E}[R - \hat{R}]| \le \rho \}$$

di mana $\hat{R}$ adalah *forecasted return rate*, $\rho$ = *budget of uncertainty*. Model robust-nya menjadi:

$$\max_{\alpha, w, b} \min_{R \in \mathcal{U}} \Pi_{OEM}(\alpha, w, b, R)$$

Solusi optimal $\alpha^*$ mengikuti *first-order condition*:
$$\frac{\partial \Pi_{OEM}}{\partial \alpha} = (b - c_{bb})R D_n - \beta(p_m - c_r) R D_n = 0$$

yang menyiratkan **threshold price**:
$$b^* = c_{bb} + \beta(p_m - c_r)$$

Secara intuitif, OEM akan mengarahkan lebih banyak RPB ke EU ketika harga *second-life* cukup tinggi untuk menutup selisih biaya, dan sebaliknya ke RR ketika harga material recovered tinggi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CLSC baterai bekas mengikuti alur proses terstruktur yang diuraikan JIANG & TANG (2025) dan diperkuat modul return management oleh Shin et al. (2024):

### SOP Closed-Loop Battery Supply Chain

**Tahap 1 — Reverse Collection Network**
- *Spoke nodes*: dealership/service center menerima RPB dari konsumen
- *Hub nodes*: *regional consolidation center* melakukan triase awal (visual inspection, history data check)
- Transport mode: *sea-containerized* atau *road bulk*, sesuai jarak dan kapasitas

**Tahap 2 — Diagnostic & Sorting**
- Pengukuran SOH melalui *capacity testing*, *electrochemical impedance spectroscopy* (EIS), dan *thermal imaging*
- Klasifikasi: Grade A (SOH > 80%, layak EU); Grade B (60–80%, refurbishment); Grade C (< 60%, direct recycling)
- Keputusan alokasi $\alpha$ terjadi pada *forking point* ini

**Tahap 3 — Echelon Utilization Pathway**
- Modul baterai di-*disassemble*, sel di-*repack* ke konfigurasi sekunder
- *Reconfiguration* dengan Battery Management System (BMS) baru
- QC dan sertifikasi (standar IEC 62933, UL 1974)

**Tahap 4 — Recycling-Remanufacturing Pathway**
- *Hydrometallurgical* atau *pyrometallurgical* processing
- Ekstraksi material kritis, *purification*, dan *re-synthesis* menjadi precursor cathode aktif
- Material daur ulang digunakan untuk baterai baru (closed-loop material flow)

**Tahap 5 — Forward Distribution**
- Baterai baru (new) → OEM assembly line → dealer → konsumen
- Baterai second-life → ESS operator / telco backup
- Material daur ulang → cathode plant OEM

### Diagram Arsitektur CLSC

```
[New Production] → [OEM Assembly] → [Forward Distribution] → [Consumer/Use]
       ↑                                                            ↓
       |                                                       [End-of-Life]
       |                                                            ↓
       |← [Material Recycling] ← [Hub: Diagnostic] ← [Collection Network]
       |                              ↓
       |→ [Second-Life Pack] → [ESS/Telco Market]
       ↑
   [Buy-back Channel: w, b]
```

### Robust Return Management (Shin et al., 2024)

Tambahkan modul kontrol berikut:
- *Pre-processing inspection* sebelum baterai masuk *return stream*
- *Diversion decision*: produk yang masih dalam garansi dikembalikan ke refurbishment; produk EOL ke recycling
- *Real-time return tracking* dengan IoT sensor pada baterai (state-of-charge, cycle count)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Ambil parameter industri baterai NMC811 60 kWh untuk pasar China, mengikuti JIANG & TANG (2025):

### Input Parameter

| Parameter | Nilai | Unit |
|-----------|-------|------|
| $c_m$ | 75,000 | CNY/unit |
| $c_e$ | 18,000 | CNY/unit |
| $c_r$ | 8,000 | CNY/unit |
| $p_n$ | 110,000 | CNY/unit |
| $p_e$ | 42,000 | CNY/unit (second-life ESS) |
| $p_m$ | 9,500 | CNY/unit (recovered material) |
| $\hat{R}$ | 0.18 | return rate |
| $\beta$ | 0.85 | recovery efficiency |
| $a$ | 50,000 | intercept demand |
| $b_1$ | 0.30 | slope demand |
| $w$ | 92,000 | wholesale price |
| $c_{bb}$ | 4,500 | buy-back handling |

### Perhitungan Demand

$$D_n = 50{,}000 - 0.30 \times 92{,}000 = 50{,}000 - 27{,}600 = 22{,}400 \text{ unit/tahun}$$

### Perhitungan Volume Reverse

$$Q_{RPB} = \hat{R} \cdot D_n = 0.18 \times 22{,}400 = 4{,}032 \text{ unit/tahun}$$

### Threshold Price (Buy-back Optimal)

$$b^* = c_{bb} + \beta(p_m - c_r) = 4{,}500 + 0.85(9{,}500 - 8{,}000)$$
$$b^* = 4{,}500 + 0.85(1{,}500) = 4{,}500 + 1{,}275 = 5{,}775 \text{ CNY/unit}$$

### Optimisasi Alokasi $\alpha$

Karena $p_e - c_e = 42{,}000 - 18{,}000 = 24{,}000$ jauh lebih tinggi dari nilai material recovery $\beta p_m = 8{,}075$, semua RPB Grade A dialokasikan ke EU: $\alpha^* = 1$ untuk Grade A, $\alpha^* = 0$ untuk Grade C.

Untuk Grade B (refurbishment vs recycling), kita hitung *trade-off*:

$$\Delta \Pi = (p_e - c_e - b^*) - \beta(p_m - c_r)$$
$$= (42{,}000 - 18{,}000 - 5{,}775) - 0.85(9{,}500 - 8{,}000)$$
$$= 18{,}225 - 1{,}275 = 16{,}950 \text{ CNY/unit}$$

Karena $\Delta\Pi > 0$, Grade B tetap.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
