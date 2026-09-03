# 2717 — Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global tengah mengalami transformasi masif seiring dengan meningkatnya permintaan baterai kendaraan listrik (EV), di mana nikel grade baterai (NiSO₄·6H₂O atau Ni(OH)₂) menjadi material kritikal. Salah satu teknologi unggulan untuk mengolah bijih nikel laterit kadar rendah—yang merupakan ±70% cadangan nikel dunia namun sulit diolah karena kadar Fe dan Mg yang tinggi—adalah **High-Pressure Acid Leaching (HPAL)**. Proses HPAL berlangsung dalam autoclave baja tahan karat (umumnya *lined titanium* atau *stainless steel 904L*) pada suhu 240–270 °C dan tekanan 30–50 bar dengan konsentrasi H₂SO₄ 200–300 g/L (Dickson, Deleau, & Espitalier, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Permasalahan operasional paling kronis yang menghambat keekonomian HPAL adalah fenomena **autoclave scaling**—yaitu deposisi padatan tak larut pada dinding, agitator, dan pipa penukar panas autoclave. Kerak ini menurunkan koefisien transfer panas keseluruhan (*overall heat transfer coefficient*, U), meningkatkan konsumsi asam spesifik (*specific acid consumption*), serta memaksa *plant shutdown* prematur untuk *descaling* mekanis/kimiawi. Dalam studi Dickson et al. (2026), perilaku penskalaan diamati secara *in-situ* pada autoclave pilot 50 L yang merepresentasikan geometri reaktor HPAL industri (PT Halmahera Persada Lygend, Zhejiang Huayou, atau Tsingshan operation di Morowali/Halmahera). Karakterisasi kerak dilakukan dengan X-Ray Diffraction (XRD), Scanning Electron Microscopy-Energy Dispersive X-Ray (SEM-EDS), Thermogravimetric Analysis (TGA), dan ICP-OES leach residue.

Dampak ekonominya sangat signifikan: pada fasilitas HPAL commercial-scale (~30.000–40.000 t Ni per tahun), kehilangan produksi akibat *unscheduled shutdown* untuk *descaling* dapat mencapai **5–8% kapasitas tahunan** atau setara dengan USD 25–40 juta/tahun pada harga nikel USD 18.000–22.000/t (Andrameda, Triaswinanti, & Madra, 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)). Studi Andrameda et al. (2024) menyoroti strategi mitigasi melalui *roasting-reduction* residu HPAL dengan variasi agen desulfurisasi (CaO, Na₂CO₃), suhu (300–700 °C), dan waktu tahan (*holding time*) 30–120 menit, yang berperan dalam mengurangi *sulfur retention* dan formasi kerak sulfat sekunder.

Konteks Indonesia menjadi semakin relevan: moratorium ekspor bijih nikel mentah (2020) mendorong investasi hilirisasi HPAL, dengan proyek-proyek seperti **Halmahera Persada Lygend (Indonesia Halmahera), Huayue Nickel-Cobalt (Sulawesi), dan QMB New Energy (Morowali)**. Setiap *train* HPAL mengandung 4–6 autoclave kompartemen dengan total luas permukaan perpindahan panas >2.500 m², menjadikan manajemen kerak sebagai *single-point-of-failure* dalam profitabilitas operasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kinetika Deposisi Kerak

Massa kerak yang terakumulasi per satuan luas permukaan autoclave mengikuti persamaan laju deposisi orde-nol hingga orde-satu tergantung pada mekanisme pengendapan. Model **Avrami-Erofeev** yang diadopsi oleh Dickson et al. (2026) untuk mendeskripsikan fraksi kristalisasi kerak adalah:

$$\alpha(t) = 1 - \exp(-k \cdot t^n)$$

di mana $\alpha(t)$ adalah fraksi konversi padat menjadi kerak pada waktu $t$, $k$ adalah konstanta laju (s⁻ⁿ), dan $n$ adalah indeks Avrami (biasanya 1–3 untuk nukleasi heterogen pada dinding logam).

Laju deposisi massa per luas mengikuti hukum Fourier-termal-termodififikasi:

$$\dot{m}_{scale} = \frac{k_d \cdot (C_{sat} - C_{bulk})}{1 + \beta \cdot \tau}$$

dengan $k_d$ koefisien deposisi (m/s), $C_{sat}$ konsentrasi saturasi senyawa pembentuk kerak (kg/m³), $C_{bulk}$ konsentrasi bulk, $\beta$ parameter fouling, dan $\tau$ waktu operasi (s).

### 2.2. Penurunan Koefisien Transfer Panas

Resistansi termal total sistem dinding autoclave + kerak mengikuti model resistansi seri:

$$\frac{1}{U_{eff}} = \frac{1}{h_i} + \frac{\delta_{wall}}{k_{wall}} + \frac{\delta_{scale}(t)}{k_{scale}} + \frac{1}{h_o}$$

di mana $U_{eff}$ koefisien transfer panas efektif (W/m²·K), $h_i$ koefisien konveksi fluida internal (2000–4000 W/m²·K untuk slurry HPAL), $\delta_{wall}$ ketebalan dinding (umumnya 12–18 mm), $k_{wall}$ konduktivitas dinding SS904L (~16 W/m·K), $\delta_{scale}(t)$ ketebalan kerak yang tumbuh terhadap waktu, $k_{scale}$ konduktivitas termal kerak (0,2–1,5 W/m·K untuk kerak alunit-hematit), dan $h_o$ koefisien uap luar (10.000–15.000 W/m²·K).

### 2.3. Termodinamika Saturasi & Solubility Product

Deposisi alunit ($KAl_3(SO_4)_2(OH)_6$) dikendalikan oleh:

$$K_{sp}^{alunite} = [K^+][Al^{3+}]^3[SO_4^{2-}]^2[OH^-]^6$$

dengan pK_sp ≈ 5,7 pada 250 °C. Aktivitas ionik harus dihitung dengan model Pitzer untuk elektrolit kuat mengingat kekuatan ionik slurry HPAL (I > 3 mol/kg). Indeks saturasi:

$$SI = \log\left(\frac{IAP}{K_{sp}}\right)$$

Ketika SI > 0,3, presipitasi spontan terjadi pada permukaan autoclave.

### 2.4. Model Arrhenius untuk Laju Penskalaan

$$k_d(T) = k_0 \cdot \exp\left(-\frac{E_a}{RT}\right)$$

Energi aktivasi $E_a$ untuk presipitasi hematit ($Fe_2O_3$) dalam kondisi HPAL dilaporkan 65–85 kJ/mol, sedangkan untuk alunit 80–110 kJ/mol (Dickson et al., 2026). Ini menjelaskan mengapa operasi pada suhu >260 °C secara dramatis mempercepat penskalaan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Proses HPAL dengan Titik Kritis Penskalaan

```
[Bijih Laterit] → [Repulping] → [Pulp Pre-heater]
                                       ↓
                       [Autoclave Compartmen #1: 240°C, 35 bar]
                                       ↓
                       [Autoclave Compartmen #2: 250°C, 40 bar] ← SCALING ZONE 1
                                       ↓
                       [Autoclave Compartmen #3: 260°C, 43 bar] ← SCALING ZONE 2 (MAX)
                                       ↓
                       [Autoclave Compartmen #4: Flash] ← SCALING ZONE 3
                                       ↓
                       [CCD Counter-Current Decantation]
                                       ↓
                       [Neutralization & Metal Recovery]
```

### 3.2. SOP Pemantauan Kerak (Dickson et al., 2026)

1. **Pengukuran $\Delta T$ Real-Time**: Sensor temperatur multi-titik (*multi-point thermocouple tree*) pada setiap kompartemen merekam perbedaan suhu dinding-dalam (*inner wall temperature*) vs *bulk slurry temperature*. Selisih $\Delta T > 8$ °C mengindikasikan kerak $> 1,5$ mm.
2. **Sampling Kerak Periodik**: Setiap 30 hari operasi, dilakukan *cool-down* parsial dan pengambilan coupon kerak dari *access port* kompartemen #3 dan #4.
3. **Karakterisasi Multi-Teknik**:
   - XRD untuk identifikasi fase mineralogis
   - SEM-EDS untuk morfologi dan komposisi
   - TGA-DSC untuk stabilitas termal dan kadar air kristal
   - ICP-OES setelah *acid digestion* untuk komposisi elemental
4. **Penentuan Laju Akresi**: $$\dot{m}_{scale} = \frac{\Delta m_{coupon}}{A_{coupon} \cdot \Delta t}$$
5. **Descaling Kimiawi**: Injeksi larutan *mixed sulfamic-citric acid* (5–8% berat) pada 60–80 °C selama 6–8 jam pasca-shutdown.
6. **Mitigasi Preventif Andrameda et al. (2024)**: *Roasting* residu HPAL dengan agen desulfurisasi CaO (rasio molar Ca:S = 1,5:1) pada 500 °C selama 90 menit, menurunkan *acid regeneration load* dan *sulfur recirculation* yang menjadi precursor kerak.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input (representatif autoclave 50 L pilot Dickson et al., 2026)

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Tekanan operasi (P) | 40 | bar |
| Suhu (T) | 255 | °C |
| Konsentrasi H₂SO₄ awal | 250 | g/L |
| Komposisi bijih: Ni | 1,30 | % |
| Fe | 38,5 | % |
| MgO | 8,2 | % |
| Al₂O₃ | 2,4 | % |
| Solid-to-liquid ratio | 1:3 | – |
| Luas permukaan autoclave dalam (A) | 1,85 | m² |
| Ketebalan dinding SS904L | 14 | mm |
| Durasi operasi (τ) | 240 | jam (10 hari) |

### 4.2. Perhitungan Laju Deposisi Kerak

Dari data Dickson et al. (2026), deposisi kerak pada kompartemen #3 mengikuti:

$$m_{scale}(t) = m_{\infty} \cdot [1 - \exp(-k_{obs} \cdot t)]$$

dengan $m_{\infty} = 1.850 \text{ g/m}^2$ dan $k_{obs} = 1,1 \times 10^{-6}$ s⁻¹.

**Pada t = 240 jam (= 864.000 s):**

$$m_{scale}(240h) = 1850 \cdot [1 - \exp(-1,1 \times 10^{-6} \times 864000)]$$
$$= 1850 \cdot [1 - \exp(-0,9504)]$$
$$= 1850 \cdot [1 - 0,3867]$$
$$= 1850 \cdot 0,6133 \approx 1.135 \text{ g/m}^2$$

### 4.3. Perhitungan Densitas Fluks Panas

Tebal kerak efektif dihitung dengan asumsi densitas kerak $\rho_{scale} = 2.800$ kg/m³ dan komposisi dominan hematit-alunit:

$$\delta_{scale} = \frac{m_{scale}}{\rho_{scale}} = \frac{1135 \text{ g/m}^2}{2,8 \times 10^6 \text{ g/m}^3} = 4,05 \times 10^{-4} \text{ m} = 0,405 \text{ mm}$$

### 4.4. Penurunan U (Overall Heat Transfer Coefficient)

Menggunakan persamaan resistansi seri dengan:
- $h_i = 3.200$ W/m²·K
- $k_{wall} = 16$ W/m·K, $\delta_{wall} =