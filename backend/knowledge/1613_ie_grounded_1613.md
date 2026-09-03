# 1613 — Rekayasa Autoclave HPAL pada Pelindian Bijih Nikel Laterit: Karakterisasi Pembentukan Kerak (Scaling) dan Optimasi Proses Reduksi-Desulfurisasi Residu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions; roaster–HPAL integration; residue valorization
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions*. Cleaner Waste Systems. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *Effect of desulfurization agent, temperature and roasting-reduction process time on high-pressure acid leaching (HPAL) nickel laterite residue*. AIP Conference Proceedings. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel telah meningkat eksponensial seiring transisi energi hijau, khususnya untuk baterai kendaraan listrik (EV) dan baja nikel tahan karat. Lebih dari 70% cadangan nikel dunia tersimpan dalam bijih laterit—sumber daya yang kompleks karena kadar Ni-nya rendah (0,8–2,5%) dan terkungkung dalam matriks oksida-hidroksida besi yang tahan terhadap pelindian asam konvensional. *High-Pressure Acid Leaching* (HPAL) muncul sebagai teknologi unggulan untuk mengekstraksi nikel dari bijih limonit dan saprolit laterit, di mana suhu operasi 240–270 °C dan tekanan 30–45 bar menghasilkan pemulihan Ni > 90% dalam waktu reaksi 60–90 menit (Dickson dkk., 2026, https://doi.org/10.1016/j.clwas.2026.100503).

Namun, kelayakan operasional HPAL dibayangi oleh satu masalah klasik yang belum sepenuhnya terpecahkan: **autoclave scaling**—yaitu pengendapan lapisan kerak (umumnya berbasis hematit α-Fe₂O₃, alunit/jarosit, dan gipsum CaSO₄·2H₂O) pada dinding internal reaktor, impeller, dan pipa penukar panas. Dickson dkk. (2026) mendokumentasikan bahwa laju akumulasi kerak dapat mencapai 0,8–1,5 mm/hari pada operasi komersial, yang berarti siklus *shut-down* untuk *cleaning* (pickling dengan HCl/HF) wajib dilakukan setiap 30–60 hari, menurunkan *overall equipment effectiveness* (OEE) autoclave hingga 60–70%. Kerak tidak hanya menurunkan koefisien transfer panas (U) dari ~1.400 W/m²·K menjadi ~350 W/m²·K, tetapi juga menciptakan *hot spots* yang menurunkan umur fatigue bejana tekan dari 20 tahun desain menjadi 8–12 tahun aktual.

Di sisi hilir, Andrameda dkk. (2024, https://doi.org/10.1063/5.0186417) menyoroti bahwa residu HPAL (HPAL residue) yang mencapai 4–6 ton padat per ton Ni diproduksi masih mengandung sulfur residual 0,8–2,5% sebagai sulfat dan sulfida, yang menghambat valorisasi residu sebagai bahan baku *Construction Material* atau *Iron Nugget*. Mereka mengusulkan integrasi tahap *roasting-reduction* dengan penambahan agen desulfurisasi (CaO, Na₂CO₃, atau Fe₃O₄) pada suhu 800–1.100 °C untuk menurunkan kadar sulfur di bawah 0,1%, sekaligus merecovery Fe sebagai logam. Integrasi dua studi ini membentuk kerangka rekayasa sistem industri yang holistik: dari mitigasi pembentukan kerak di hulu hingga valorisasi residu di hilir, yang menjadi inti Modul 1613.

Urgensi ekonomi sangat jelas: proyek HPAL kelas dunia seperti PT Halmahera Persada Lygend, PT Huayou Nickel (Indonesia), dan Coral Bay (Filipina) menghadapi tantangan O&M cost yang didominasi 35–40% oleh penanganan scaling dan disposal residu. Oleh karena itu, kemampuan memodelkan kinetika pengendapan kerak, memilih agen desulfurisasi optimal, dan mengintegrasikan kedua proses dalam *Process Flow Diagram* (PFD) yang kohesif menjadi kompetensi inti seorang ahli teknik industri di era metalurgi net-zero.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Nikel dalam HPAL

Reaksi utama pelindian nikel laterit dalam suasana asam sulfat pada suhu tinggi mengikuti model *shrinking core* dengan kontrol difusi melalui lapisan produk (ash) dan kontrol reaksi kimia permukaan:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_{H^+}^n}{r_0^2} \cdot t$$

di mana $\alpha$ adalah fraksi nikel yang terlarut, $k_d$ adalah konstanta difusi (m²/s), $C_{H^+}$ adalah konsentrasi asam sulfat bebas, $n$ adalah orde reaksi parsial terhadap $H^+$ (umumnya 0,5–0,8), dan $r_0$ adalah jari-jari awal partikel. Pada suhu 250 °C dan $C_{H^+}$ = 50 g/L, konstanta laju efektif $k_{eff}$ untuk Ni dari limonit berada pada orde $2,5 \times 10^{-4}$ s⁻¹ (Dickson dkk., 2026).

### 2.2 Termodinamika dan Kinetika Pembentukan Kerak

Pengendapan kerak terutama dipicu oleh hidrolisis ion Fe³⁺ ketika pH in-situ naik akibat netralisasi oleh mineral goetit/limonit dan ketika suhu turun di bawah *transition temperature*. Konstanta kelarutan hematit mengikuti persamaan Arrhenius:

$$K_{sp}^{Fe_2O_3}(T) = K_{sp,298}^0 \cdot \exp\left[-\frac{\Delta H_{diss}}{R}\left(\frac{1}{T}-\frac{1}{298}\right)\right]$$

dengan $\Delta H_{diss}$ ≈ −85 kJ/mol untuk transisi ferrihidrit → hematit. Laju pengendapan massa kerak per satuan luas permukaan autoclave dapat dimodelkan sebagai:

$$\frac{dm_s}{dt} = k_s \cdot C_{Fe^{3+}}^{a} \cdot C_{SO_4^{2-}}^{b} \cdot \exp\left(-\frac{E_a}{RT}\right) - k_r \cdot C_{H^+}^{c}$$

di mana suku pertama adalah deposisi dan suku kedua adalah *re-dissolution*. Parameter $k_s$, $k_r$, $a$, $b$, dan $c$ dikalibrasi oleh Dickson dkk. (2026) menggunakan data operasional multi-bulan dari autoclave Ti-lined komersial.

### 2.3 Neraca Massa dan Energi HPAL

Untuk umpan slurry 25% solids dengan kadar Ni 1,2% dan Fe 45%, basis 1.000 kg umpan padat:

$$M_{Ni}^{leached} = m_{ore} \cdot \eta_{Ni} \cdot C_{Ni} \quad ; \quad M_{Fe}^{dissolved} = m_{ore} \cdot \eta_{Fe} \cdot C_{Fe}$$

Neraca energi autoclave memperhitungkan enthalpy reaksi eksotermik oksidasi Fe²⁺ menjadi Fe³⁺ (ΔH ≈ −480 kJ/kg Fe²⁺) dan reaksi endotermik pelindian goetit (ΔH ≈ +120 kJ/kg). Kebutuhan steam injeksi direpresentasikan:

$$Q_{steam} = \dot{m}_{slurry} \cdot c_p \cdot (T_{op}-T_{in}) + \Delta H_{rxn} \cdot \xi - Q_{loss}$$

dengan $\xi$ adalah konversi reaksi dan $Q_{loss}$ mencakup rugi panas ke dinding autoclave, yang sangat dipengaruhi oleh ketebalan kerak $\delta_s$:

$$\frac{1}{U_{overall}} = \frac{1}{h_i} + \frac{\delta_s}{k_s} + \frac{\delta_w}{k_w} + \frac{1}{h_o}$$

Peningkatan $\delta_s$ dari 2 mm menjadi 10 mm menurunkan $U_{overall}$ dari ~1.400 W/m²·K menjadi ~420 W/m²·K.

### 2.4 Kinetika Desulfurisasi dan Reduksi Residu HPAL

Andrameda dkk. (2024) mengadopsi model *grain model* untuk tahap *roasting-reduction* residu HPAL:

$$1 - (1-\alpha_R)^{1/3} = k_R \cdot \exp\left(-\frac{E_{a,R}}{RT}\right) \cdot t$$

dengan energi aktivasi reduksi $E_{a,R}$ antara 95–140 kJ/mol tergantung agen pereduksi (batubara, kokas, atau gas H₂). Efektivitas desulfurisasi oleh CaO mengikuti stoikiometri:

$$CaO_{(s)} + SO_3^{2-}_{(aq)} \rightarrow CaSO_3_{(s)} + 2OH^-$$

atau dengan oksidasi lanjut:

$$CaSO_3 + \tfrac{1}{2}O_2 \rightarrow CaSO_4$$

Rasio molar optimum CaO/S yang dilaporkan Andrameda dkk. (2024) adalah 1,6–2,0 untuk mencapai sulfur residual < 0,1%.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Mitigasi Scaling Autoclave HPAL

Implementasi sistematis mitigasi kerak mengikuti *Standard Operating Procedure* yang distandarkan dari praktik industri (Dickson dkk., 2026):

**Fase 1 — Pra-Leaching (Ore Preparation)**
1. Karakterisasi umpan: XRD, XRF, dan *particle size distribution* (PSD) dengan target d₈₀ = 75–105 µm.
2. Pre-mixing dengan H₂SO₄ pada 90–95 °C selama 20–30 menit di *pre-leach tank* untuk melarutkan 30–40% Fe dan Mg.
3. Penambahan *seed hematit* (5–10 kg/t ore) untuk mengontrol nukleasi heterogen di luar permukaan autoclave.

**Fase 2 — Operasi Autoclave (HPAL Reactor)**
1. Sequence feeding: slurry dipanaskan bertahap dari 80 °C → 180 °C (zona prapemanasan) → 250 °C (zona reaksi utama) dengan residence time 60–90 menit.
2. *Multi-compartment design*: minimal 4–6 kompartemen dengan agitator bertenaga 60–120 kW untuk menjaga turbulensi (Re > 10⁵) sehingga mencegah deposisi partikel di dinding.
3. *Online monitoring*: pressure transducer, thermocouple multi-titik, dan *corrosion coupon* untuk memonitor laju korosi Ti-grade-2.
4. *Acid control*: free H₂SO₄ dijaga 30–55 g/L melalui injeksi acid staged.

**Fase 3 — Shutdown dan Cleaning**
1. *Cooling ramp*: 250 °C → 180 °C (30 menit) → 90 °C (45 menit) dengan quench water terukur.
2. *Pressure washing*: air jet 80 bar untuk melepas kerak loose.
3. *Chemical pickling*: sirkulasi HCl 5–8% + HF 0,5–1% pada 60–70 °C selama 6–10 jam.
4. *Inspection*: visual + UT thickness mapping pada dinding autoclave dan agitator.

**Fase 4 — Perhitungan Key Performance Indicator (KPI)**

$$OEE = A \times P \times Q$$

dengan Availability (A) mencakup unplanned shutdown akibat scaling, Performance (P) terkait throughput vs desain, dan Quality (Q) terkait kemurnian NiSO₄ end-product (target ≥ 99,8%).

### 3.2 SOP Roasting-Reduction Residu HPAL

Integrasi proses hilir mengikuti Andrameda dkk. (2024):

1. **Drying & Mixing**: residu HPAL dikeringkan hingga moisture < 5%, dicampur dengan agen pereduksi (anthrasit/arang) dan agen desulfurisasi (CaO atau Na₂CO₃) pada rasio mol tertentu.
2. **Roasting Reduction**: rotary kiln atau fluidized bed pada suhu 800–1.100 °C, residence time 30–60 menit, atmosfer sedikit reduktif (CO/CO₂ ratio 0,3–0,8).
3. **Cooling & Magnetic Separation*: produk didinginkan inert, lalu dilewatkan *wet magnetic separator* untuk memisahkan Fe-metallic (recovery > 85%).
4. **Sulfur Removal Validation*: analisis LECO untuk total sulfur, target < 0,1%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: Prediksi Laju Scaling dan Dampaknya pada Efisiensi Autoclave

**Data input (berdasarkan Dickson dkk., 2026, autoclave komersial 220 m³):**

| Parameter | Nilai |
|---|---|
| Laju alir slurry | $\dot{m}$ = 180.000 kg/jam |
| Konsentrasi Fe³⁺ di outlet | $C_{Fe^{3+}}$ = 4,5 g/L |
| Konsentrasi SO₄²⁻ | $C_{SO_4}$ = 95 g/L |
| Suhu dinding bagian dalam.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
