# 2637 — Perilaku dan Karakteristik Kerak Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan nikel global melonjak tajam akibat transisi energi menuju elektrifikasi kendaraan dan penyimpanan baterai lithium-ion NMC (Ni-Mn-Co) serta NCA (Ni-Co-Al). Badan Internasional Studi Nikel (INSG) melaporkan konsumsi nikel kelas baterai tumbuh di atas 12% CAGR sepanjang 2023–2025, sementara cadangan sulfida kelas tinggi (seperti di Sudbury, Norilsk) semakin menipis. Akibatnya, bijih nikel laterit—yang mewakili ~70% cadangan nikel terrestrial global namun hanya menyumbang ~40% produksi karena tantangan metalurgi—menjadi target eksploitasi utama. Proses *High-Pressure Acid Leaching* (HPAL) muncul sebagai teknologi unggulan untuk mengekstraksi Ni dan Co dari bijih laterit limonit dan saprolit pada suhu 240–270 °C dan tekanan 35–55 bar dalam autoclave horizontal multi-kompartemen yang diisi slurry asam sulfat (Dickson, Deleau, & Espitalier, 2026, https://doi.org/10.1016/j.clwas.2026.100503).

Namun, bottleneck operasional terbesar HPAL adalah fenomena *autoclave scaling*—yaitu pengendapan dan akresi padatan tak larut (terutama basic ferric sulfate, ferric oxide/hematit, alunit, silika amorf, dan anhydrite) pada dinding internal, agitator, dan pipa transfer autoclave. Dickson et al. (2026) mendokumentasikan bahwa akumulasi kerak dapat mencapai ketebalan 50–150 mm dalam satu siklus operasi 90–120 hari, menurunkan koefisien perpindahan panas (U) hingga 35–60% dan memaksa *shutdown* darurat yang menimbulkan *lost production* 4–8% per tahun. Di sisi hilir, Andrameda, Triaswinanti, & Madra (2024) (https://doi.org/10.1063/5.0186417) menunjukkan bahwa residu HPAL masih mengandung sulfur dan logam berharga yang dapat dipulihkan melalui pra-perlakuan *roasting-reduction* dengan agen desulfurisasi, menegaskan bahwa pengelolaan kerak dan residu bukan sekadar isu pemeliharaan, melainkan komponen integral dari *resource efficiency* dan *circular economy* dalam rantai pasok nikel.

Secara ekonomis, satu autoclave HPAL berkapasitas 5.000 ton umpan/hari mewakili investasi modal >USD 1,2 miliar; downtime 1 hari akibat plugging kerak bernilai opportunity cost >USD 1,8 juta. Studi Dickson et al. (2026) menjadi referensi metodologis baru karena memadukan karakterisasi multi-skala (XRD, SEM-EDS, TGA-DSC, ICP-OES leachate) dengan analisis operasional terhadap tiga plant komersial (PT Vale Indonesia, Ravensthorpe, dan Murrin Murrin). Pendekatan ini menjembatani kesenjangan antara riset akademik dan *troubleshooting* lapangan yang selama ini hanya tersedia sebagai laporan internal konsultan. Modul ini menerjemahkan temuan tersebut ke dalam kerangka *Industrial Engineering* yang mencakup pemodelan kinetika, SOP pemeliharaan prediktif, dan optimasi ekonomi operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pelindian HPAL

Reaksi pelindian utama bijih laterit dalam medium $\text{H}_2\text{SO}_4$ pada kondisi superkritis-air mengikuti stoikiometri:

$$\text{NiO}\cdot\text{Fe}_2\text{O}_3\text{(laterite)} + 4\text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4(aq) + \text{Fe}_2(\text{SO}_4)_3(aq) + 4\text{H}_2\text{O}$$

Pada suhu $T > 240\,^\circ\text{C}$, besi ferric hasil oksidasi mengalami *hydrolysis* dan *precipitation* membentuk hematit:

$$\text{Fe}_2(\text{SO}_4)_3(aq) + 3\text{H}_2\text{O} \xrightarrow{T>240^\circ\text{C}} \text{Fe}_2\text{O}_3\downarrow + 3\text{H}_2\text{SO}_4$$

Reaksi hematitisasi ini secara stoikiometri meregenerasi asam sulfat, menurunkan *net acid consumption* menjadi ~250–350 kg $\text{H}_2\text{SO}_4$/ton bijih. Namun, reaksi samping yang membentuk kerak pada dinding autoclave (di mana permukaan lebih dingin 30–50 °C dibanding *bulk slurry*) adalah:

$$3\text{Fe}_2(\text{SO}_4)_3 + 14\text{H}_2\text{O} \rightarrow 2(\text{H}_3\text{O})\text{Fe}_3(\text{SO}_4)_2(\text{OH})_6\downarrow + 5\text{H}_2\text{SO}_4 \quad \text{(jarosite)}$$

$$3\text{Fe}_2(\text{SO}_4)_3 + 12\text{H}_2\text{O} + \text{M}^+ \rightarrow 2\text{MFe}_3(\text{SO}_4)_2(\text{OH})_6\downarrow + 6\text{H}_2\text{SO}_4 \quad \text{(basic ferric sulfate)}$$

dimana $\text{M}^+ = \text{H}_3\text{O}^+, \text{Na}^+, \text{K}^+, \text{NH}_4^+$.

### 2.2 Model Kinetika Pelindian — *Shrinking Core Model* (SCM)

Untuk partikel bijih sferis dengan jari-jari awal $r_0$, fraksi konversi $\alpha$ mengikuti persamaan SCM kontrol difusi melalui lapisan *ash*:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s C_{A,b}^n}{r_0^2 \rho_p} \cdot t$$

dengan $k_s$ = konstanta laju permukaan (m/s), $C_{A,b}$ = konsentrasi asam bulk (kg/m³), $n$ = orde reaksi (umumnya $n \approx 0{,}5$ untuk HPAL), $\rho_p$ = densitas partikel (kg/m³). Konstanta $k_s$ mengikuti hukum Arrhenius:

$$k_s = A \cdot \exp\!\left(-\frac{E_a}{RT}\right)$$

Untuk nickel laterit, Dickson et al. (2026) melaporkan $E_a = 56{,}8 \pm 3{,}1$ kJ/mol untuk limonit-goethit, konsisten dengan rezim kontrol campuran (kimia-difusi).

### 2.3 Model Pertumbuhan Tebal Kerak

Pertumbuhan tebal kerak $\delta(t)$ pada dinding autoclave mengikuti model kompetisi antara deposisi dan erosi oleh agitasi slurry:

$$\frac{d\delta}{dt} = \underbrace{k_d \cdot (C_{p,sat} - C_p)}_{\text{deposisi}} - \underbrace{k_e \cdot \tau_w}_{\text{erosi}}$$

dengan $C_{p,sat}$ = konsentrasi jenuh species pembentuk kerak (mol/m³), $C_p$ = konsentrasi aktual, $\tau_w$ = tegangan geser dinding (Pa). Konstanta deposisi $k_d$ untuk basic ferric sulfate pada suhu 240–270 °C dilaporkan:

$$k_d = 1{,}42 \times 10^{-4} \exp\!\left(-\frac{38\,500}{RT}\right) \;\; \text{m/s}$$

### 2.4 Neraca Energi Autoclave

Untuk autoclave horizontal dengan volume $V$ dan luas perpindahan panas $A$:

$$Q = U \cdot A \cdot \Delta T_{lm} = \dot{m}_{slurry} c_p (T_{out} - T_{in}) + \Delta H_{rxn} \dot{n}_{Ni}$$

Penurunan koefisien $U$ akibat kerak mengikuti resistansi seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{tube}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

Dickson et al. (2026) mengukur $k_{scale} = 0{,}38$–$0{,}72$ W/(m·K) untuk kerak komposit (jarosite–hematit), sehingga untuk $\delta_{scale} = 100$ mm dihasilkan resistansi termal tambahan $R_{scale} \approx 0{,}14$ m²·K/W atau setara 25–40% total resistansi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL End-to-End

```
[Bijih Laterit] → [Crushing & Slurrying 35-45% solids]
        ↓
   [Pre-heater 1-2-3 (90 → 180 °C)]
        ↓
   [Autoclave Compartemen 1-6 (240-270 °C, 40-50 bar)]
        ↓
   [Flash Let-down & Cooling]
        ↓
   [CCD Washing 6-8 stages] → [Pregnant Liquor Solution (PLS)]
        ↓                                    ↓
   [Neutralisasi (MgO/CaCO₃)]         [SX → Ni/Co Mixed Sulfide]
        ↓                                    ↓
   [Tailing Neutralized]              [Refining → NiSO₄/CoSO₄]
```

### 3.2 SOP Karakterisasi Kerak (Adaptasi Dickson et al. 2026)

1. **Sampling Saat Shutdown Terjadwal:** Ambil *coupon* kerak 50 × 50 mm dari 12 titik circumferential dan 4 lokasi aksial per kompartemen.
2. **Karakterisasi Fisikokimia:**
   - XRD (Cu-Kα, step 0,02°, 2θ = 5–80°) untuk identifikasi fase mineral dominan.
   - SEM-EDS mapping komposisi elemental (Fe, S, O, Si, Al, Na, K).
   - TGA-DSC (heating rate 10 °C/min, N₂ atmosphere) untuk dekomposisi termal.
   - ICP-OES setelah *digestion* dalam campuran HF/HCl/HNO₃ untuk komposisi total.
3. **Pengukuran Ketebalan & Adhesi:** Menggunakan *ultrasonic thickness gauge* dan *pull-off adhesion tester* (ASTM D4541).
4. **Pengujian Dissolution Kinetics:** *Coupons* direndam dalam larutan simulasi PLS untuk memprediksi laju disolusi saat *acid wash*.

### 3.3 SOP Pembersihan & Pencegahan Kerak

1. **Acid Wash Periodik:** Sirkulasi $\text{H}_2\text{SO}_4$ 150 g/L pada 80–95 °C selama 6–8 jam, setiap 30 hari operasi, untuk melarutkan kerak basic ferric sulfate.
2. **Online Monitoring:** Instalasi *heat flux sensor* dan differential pressure transducer untuk deteksi dini *fouling* (threshold $\Delta U \geq 15\%$).
3. **Additive Dosing:** Injeksi *seed hematit* 2–5 g/L slurry pada kompartemen ke-2 untuk mempromosikan *controlled precipitation* di bulk slurry, mengurangi deposisi dinding.
4. **Shutdown Planning:** Integrasi data tebal kerak dengan *predictive maintenance* (RUL model) berbasis regresi Gaussian Process untuk jadwal *acid wash* optimal.

---

## 4. Studi Kasus Kuant.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
