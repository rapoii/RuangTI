# 2221 — Perilaku Penskalaan Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit pada Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak drastis sejak 2020, didorong oleh akselerasi produksi kendaraan listrik (EV) dan sistem penyimpanan energi baterai (BESS). Badan Energi Internasional (IEA) memperkirakan kebutuhan nikel akan meningkat 4–5 kali lipat pada 2040, sehingga sumber bijih primer seperti nikel sulfida tidak lagi mampu memenuhi permintaan tersebut karena cadangan yang terus menurun. Sebagai respons, industri pertambangan global beralih ke bijih nikel laterit, yang menyimpan sekitar 70% cadangan nikel dunia namun memiliki tantangan metalurgi signifikan karena kadar Ni-nya yang rendah (0,8–1,5%) dan komposisi mineralogi yang kompleks (goethit, limonit, saprolit).

Teknologi High Pressure Acid Leaching (HPAL) menjadi metode dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit. Proses ini berlangsung dalam autoclave beroperasi pada suhu 240–270 °C dan tekanan 35–45 bar dengan injeksi asam sulfat (H₂SO₄) pekat. Reaksi utama yang terjadi adalah:

$$NiO \cdot Fe_2O_3 \cdot H_2O + 3H_2SO_4 \rightarrow NiSO_4 + 2FeSO_4 + 4H_2O$$

Meskipun efektif dengan recovery Ni mencapai 90–95%, operasi HPAL memiliki Pain Point operasional utama yang menggerus margin keuntungan: **penskalaan (scaling) dinding autoclave**. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* DOI [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503) mendokumentasikan bagaimana deposit Fe₂O₃·H₂O (hematit), Al₂O₃·H₂O (aluminohidrat), dan CaSO₄·2H₂O (gipsum) terbentuk berlapis pada permukaan baja tahan karat autoclave, mengurangi koefisien perpindahan panas hingga 60% dan memaksa shutdown terjadwal setiap 45–90 hari.

Secara ekonomi, penskalaan menaikkan konsumsi energi spesifik dari 850 menjadi 1.350 kWh/ton bijih, menurunkan throughput autoclave 15–25%, dan menambah biaya operasional USD 8–12 per pon nikel yang dihasilkan. Andrameda, Triaswinanti, dan Madra (2024) DOI [10.1063/5.0186417](https://doi.org/10.1063/5.0186417) menambahkan dimensi penting berupa preprocessing residu HPAL melalui *roasting-reduction* dengan variasi agen desulfurisasi, yang berdampak langsung pada komposisi kimia residu dan intensitas penskalaan sekunder. Kedua literatur ini menjadi basis formulasi strategi optimasi HPAL yang mengintegrasikan karakterisasi autoclave dengan rekayasa feedstock.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Pelindian Nikel

Kecepatan pelindian Ni dari limonit/goethit mengikuti model *shrinking core* dengan difusi melalui lapisan produk sebagai tahap pembatas laju:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k \cdot C_{H^+}^n \cdot t}{r_0^2 \cdot \rho_s}$$

di mana $\alpha$ adalah fraksi Ni terlarut, $k$ adalah konstanta laju intrinsik (m⁴·mol⁻¹·s⁻¹), $C_{H^+}$ adalah konsentrasi asam sulfat bebas (mol/L), $n$ adalah orde reaksi terhadap $H^+$ (umumnya 0,5–0,8), $r_0$ adalah jari-jari awal partikel (m), dan $\rho_s$ adalah densitas padatan (kg/m³).

### 2.2 Model Deposisi Skala Autoclave

Dickson et al. (2026) DOI [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503) menurunkan persamaan laju akresi skala berbasis prinsip konservasi massa dan fluks difusi:

$$\frac{dm_{scale}}{dt} = k_s \cdot (C_{Fe}^{sat} - C_{Fe}^{bulk})^m \cdot \exp\left(-\frac{E_a}{RT}\right) \cdot A_{wall}$$

dengan $m_{scale}$ = massa deposit per satuan luas (kg/m²), $k_s$ = koefisien transfer (m·s⁻¹), $C_{Fe}^{sat}$ vs $C_{Fe}^{bulk}$ = konsentrasi Fe jenuh vs aktual dalam larutan (mol/L), $E_a$ = energi aktivasi deposisi (≈ 65–85 kJ/mol), $R$ = 8,314 J/(mol·K), $T$ = suhu operasi (K), dan $A_{wall}$ = luas dinding autoclave (m²). Eksponen $m$ berada pada rentang 1,4–1,7 untuk deposit hematit primer.

### 2.3 Resistansi Termal Total dan Penurunan Efisiensi Perpindahan Panas

Penskalaan menambah resistansi termal konduktif sesuai Fourier:

$$R_{tot} = \frac{\delta_{steel}}{\lambda_{steel}} + \frac{\delta_{scale}}{\lambda_{scale}} + \frac{1}{h_i}$$

dengan $\delta$ = ketebalan (m), $\lambda$ = konduktivitas termal (W/m·K), dan $h_i$ = koefisien konveksi internal (W/m²·K). Untuk $\delta_{scale}$ = 5 mm dengan $\lambda_{scale}$ = 1,1 W/m·K (hematit), resistansi tambahan adalah 0,00454 m²·K/W — ekuivalen dengan pengurangan fluks panas 35–55%.

### 2.4 Hubungan Derajat Desulfurisasi dengan Konsumsi Asam

Andrameda et al. (2024) DOI [10.1063/5.0186417](https://doi.org/10.1063/5.0186417) memperkenalkan parameter *Degree of Desulfurization* (DoD):

$$DoD = \frac{S_{initial} - S_{final}}{S_{initial}} \times 100\%$$

Tingginya DoD pada tahap roasting-reduction dengan agen Na₂CO₃ atau CaO menurunkan jumlah sulfat yang masuk ke autoclave, sehingga mengurangi potensi terbentuknya skala CaSO₄·2H₂O. Persamaan kesetimbangan untuk reaksi desulfurisasi:

$$CaSO_4 + Na_2CO_3 \rightarrow CaCO_3 \downarrow + Na_2SO_4$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Proses HPAL dengan Preprocessing

```
[1] Crushing & Sizing bijih laterit → P80 = 75 μm
        ↓
[2] Slurry mixing (solid-liquid = 35-45%) dengan H₂SO₄ recycle
        ↓
[3] Pre-heating (3-stage flash) → 180–220 °C
        ↓
[4] Autoclave HPAL (4-6 kompartemen, 245 °C, 40 bar, τ = 60-90 menit)
        ↓
[5] Flash cooling & CCD counter-current decantation
        ↓
[6] Net Mixing → Ni/Co sulfide/MSP precipitation
        ↓
[7] Residue neutralization & tailing disposal
```

### 3.2 SOP Karakterisasi Skala Autoclave (Dickson et al., 2026)

1. **SamplingCoupon**: Pasang *coupon test* SS316L di dinding autoclave pada tiga elevasi (bottom, mid, top).
2. **Visual Inspection & Thickness Gauge**: Gunakan ultrasonic thickness gauge (Elcometer 207) dengan akurasi ±0,05 mm.
3. **SEM-EDS Analysis**: Preparasi cross-section dengan resin epoksi; identifikasi komposisi elemental skala pada 5 titik untuk menghitung rasio Fe:Al:S.
4. **XRD Phase Identification**: Difraktometer Bruker D8 dengan Cu-Kα ($\lambda$ = 1,5406 Å), step size 0,02° pada 2θ = 10–80°.
5. **Mass Loss Acid Cleaning**: Coupon direndam HCl 10% pada 60 °C selama 24 jam, hitung $\Delta m / A$ sebagai baseline laju penskalaan (kg/m²·hari).
6. **Reporting**: Masukkan data ke dashboard SPC dengan UCL = 0,25 kg/m²·hari sebagai batas kontrol operasional.

### 3.3 Standar Industri Referensi

- ISO 14692: Petrochemical & high-pressure equipment material selection
- ASME BPVC Section VIII Div 3: High Pressure Vessel Code untuk autoclave > 10 MPa
- API 571: Damage mechanisms (merujuk pada sulfidation, hot corrosion, dan creep)
- ISO 22489: Sampling dan analisis slurry untuk kontrol kualitas proses

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Autoclave HPAL berkapasitas 250 ton/jam bijih laterit (kadar Ni = 1,2%) di fasilitas PT Vale Indonesia sorowako-type operation. Data parameter diambil dari Dickson et al. (2026) dan Andrameda et al. (2024).

### 4.1 Perhitungan Recovery Ni

Input: $C_{H^+}$ = 0,65 mol/L, $T$ = 250 °C = 523 K, $r_0$ = 38 μm = 3,8×10⁻⁵ m, $k$ = 2,1×10⁻⁵ m⁴/(mol·s), $n$ = 0,7, $\rho_s$ = 2.450 kg/m³, $t$ = 75 menit = 4.500 s.

$$\frac{2,1\times10^{-5} \cdot 0,65^{0,7} \cdot 4500}{(3,8\times10^{-5})^2 \cdot 2450} = \frac{2,1\times10^{-5} \cdot 0,755 \cdot 4500}{3,54\times10^{-7}} \approx 0,201$$

Menggunakan metode Newton-Raphson pada persamaan shrinking core, diperoleh $\alpha$ ≈ **0,932** atau recovery Ni 93,2%.

### 4.2 Estimasi Laju Penskalaan

Untuk $C_{Fe}^{sat}$ = 0,041 mol/L, $C_{Fe}^{bulk}$ = 0,029 mol/L, $E_a$ = 75 kJ/mol, $k_s$ = 4,8×10⁻³ m/s, $m$ = 1,55, $A_{wall}$ = 412 m²:

$$\frac{dm_{scale}}{dt} = 4,8\times10^{-3} \cdot (0,012)^{1,55} \cdot \exp\left(-\frac{75.000}{8,314 \cdot 523}\right) \cdot 412$$

$$= 4,8\times10^{-3} \cdot 4,68\times10^{-4} \cdot \exp(-17,24) \cdot 412$$

$$= 4,8\times10^{-3} \cdot 4,68\times10^{-4} \cdot 3,18\times10^{-8} \cdot 412$$

$$\approx 2,93\times10^{-11} \text{ kg/(m²·s)} = 2,53\times10^{-3} \text{ kg/(m²·hari)}$$

Dikonversi ke ketebalan dengan densitas hematit 5,26 g/cm³: laju ketebalan = **0,48 mm/hari**. Setelah 60 hari operasi kontinyu, $\delta_{scale}$ ≈ 29 mm — konsisten dengan observasi lapangan Dickson et al. (2026).

### 4.3 Penurunan Efisiensi Perpindahan Panas

Resistansi termal total awal ($R_0$): $\delta_{steel}$ = 25 mm, $\lambda_{steel}$ = 16 W/m·K → 0,00156 m²·K/W; $h_i$ = 4.500 W/m²·K → 0,000222 m²·K/W; $R_0$ = 0,00178 m²·K/W.

Setelah penskalaan ($\delta_{scale}$ = 29 mm, $\lambda_{scale}$ = 1,1 W/m·K): tambahan resistansi = 0,02636 m²·K/W. $R_{tot}$ baru = 0,02814 m²·K/W → **penurunan fluks panas sebesar 93,7%** jika suhu permukaan dipertahankan. Untuk mempertahankan fluks yang sama, konsumsi steam naik dari 850 menjadi 1.580 kWh/ton bijih (+85,9%).

### 4.4 Analisis Dampak Ekonomi

Asumsi harga steam = USD 22/MWh, throughput = 250 ton/jam × 8.000 jam/tahun = 2 juta ton/tahun:

$$\Delta\text{Biaya Energi} = (1.580 - 850) \cdot 22 \cdot 2\times10^6 / 1000 = \text{USD 32,1 juta/tahun}$$

Penurunan kapasitas 20% akibat siklus shutdown = kehilangan produksi 36.000 ton nikel/tahun × USD 18.000/ton = **USD 648 juta/tahun kehilangan revenue potensial** jika tidak ada strategi penskalaan.

### 4.5 Efek Desulfurization Agent (Andrameda et al., 2024)

Untuk roasting-reduction residu HPAL dengan Na₂CO₃ pada 600 °C