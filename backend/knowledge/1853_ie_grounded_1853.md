# 1853 — Karakterisasi dan Pengendalian Pembentukan Kerak (Scaling) Autoclave pada Pelindian Nikel Laterit dengan Proses High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Nikel laterit merupakan sumber daya mineral strategis yang menyumbang lebih dari 60% produksi nikel global, namun hanya sekitar 40% dari total nikel laterit yang dapat diproses secara ekonomis melalui proses pirometalurgi konvensional. Sebaliknya, bijih jenis limonit dan saprolit kadar rendah umumnya diolah dengan **High-Pressure Acid Leaching (HPAL)**, suatu proses hidrometalurgi yang beroperasi pada rentang suhu 240–270 °C dengan tekanan parsial 30–50 bar di dalam autoclave berlapis titanium (Dickson dkk., 2026). Dalam operasi HPAL berskala industri, salah satu permasalahan paling kritis yang menurunkan *overall equipment effectiveness* (OEE) adalah pembentukan **kerak (scale)** pada dinding, impeller, dan pipa penukar panas internal autoclave. Kerak tersebut utamanya tersusun atas campuran senyawa besi(III) oksihidroksida (goethite/hematit), kalsium sulfat dihidrat/anhidrat (gypsum/anhidrit), silika amorf, dan aluminum hydroxide (Andrameda dkk., 2024).

Secara ekonomi, masalah ini sangat signifikan karena kapasitas terpasang instalasi HPAL dunia — yang tersebar di Murrin Murrin (Australia), Ravensthorpe, Ramu (Papua Nugini), Coral Bay, Taganito, serta proyek-proyek besar di Indonesia seperti Halmahera, Morowali, dan Weda Bay — dirancang untuk produksi tahunan puluhan ribu ton nikel dalam bentuk *mixed hydroxide precipitate* (MHP) atau *nickel sulfate*. Kerak dengan ketebalan 5–25 mm dapat menurunkan koefisien perpindahan panas keseluruhan hingga 40–60%, sehingga konsumsi uap naik tajam, laju pelindian turun, dan *downtime* untuk *acid wash* dan *mechanical descaling* menembus 8–15% dari total *available production time* per tahun. Dickson dkk. (2026) menekankan bahwa karakterisasi morfologi, komposisi kimia, dan laju akresi kerak merupakan prasyarat untuk merumuskan strategi *predictive maintenance* berbasis *fouling factor* dinamis, bukan lagi jadwal *clean-in-place* (CIP) statis.

Urgensi penelitian ini diperkuat oleh Andrameda, Triaswinanti, dan Madra (2024) yang menunjukkan bahwa pra-perlakuan bijih melalui *roasting-reduction* dengan agen desulfurisasi dapat mengubah komposisi residu HPAL secara fundamental, sehingga memengaruhi potensi pembentukan kerak dan konsumsi asam sulfat. Kombinasi antara pemahaman kinetika pelindian heterogen, keseimbangan termodinamika fase sulfat, dan dinamika perpindahan panas ber-fouling menjadi pilar rekayasa sistem HPAL modern. Tanpa kerangka kuantitatif yang kokoh, operator tidak memiliki dasar untuk mengoptimasi siklus *campaign* (periode antar-*shutdown*) yang saat ini berkisar 60–120 hari, tergantung pada karakteristik umpan bijih. Oleh karena itu, modul 1853 ini disusun untuk membekali insinyur dan analis dengan kemampuan diagnostik, formulasi matematis, dan prosedur operasional yang berlandaskan pada dua literatur riil di atas.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Heterogen

Pelindian nikel laterit dalam autoclave HPAL遵循 model inti-mengkerut (*shrinking core*) untuk partikel bijih yang mempertahankan struktur berpori pada permukaan, dengan laju yang dikontrol oleh difusi reaktan melalui lapisan produk dan/atau lapisan kerak eksternal. Untuk bijih limonit yang kaya goethit (α-FeOOH), reaksi utama adalah:

$$\text{NiO}_{\text{(s)}} + \text{H}_2\text{SO}_{4(\text{aq})} \rightarrow \text{NiSO}_{4(\text{aq})} + \text{H}_2\text{O}$$

Model kinetika orde-semu terhadap konsentrasi asam pada kontrol difusi melalui lapisan produk:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_d \cdot C_{H^+}^n \cdot t}{\rho_s \cdot r_0^2}$$

dengan:
- $\alpha$ = fraksi nikel yang terlarut (0 ≤ α ≤ 1)
- $k_d$ = konstanta laju difusi efektif (m²·s⁻¹)
- $C_{H^+}$ = konsentrasi asam sulfat bebas (kg/m³)
- $n$ = orde reaksi semu terhadap H⁺ (umumnya 0,5–1,0)
- $\rho_s$ = densitas partikel bijih (kg/m³)
- $r_0$ = jari-jari awal partikel (m)
- $t$ = waktu tinggal (s)

Untuk kontrol kimia permukaan (*chemical reaction control*):

$$1 - (1-\alpha)^{1/3} = \frac{k_c \cdot C_{H^+}^n \cdot t}{r_0}$$

Konsolidasi kedua mekanisme dilakukan dengan bilangan Modul Biot untuk partikel:

$$\text{Bi}_m = \frac{k_c \cdot r_0}{D_{\text{eff}}}$$

di mana $D_{\text{eff}}$ adalah difusivitas asam dalam pori (≈ 1,2 × 10⁻⁹ m²/s pada 250 °C untuk H₂SO₄ dalam matriks laterit). Jika $\text{Bi}_m \gg 1$, kontrol difusi mendominasi.

### 2.2 Ketergantungan Temperatur — Persamaan Arrhenius

Kontribusi temperatur terhadap laju pelindian untuk kedua regime dinyatakan oleh hukum Arrhenius:

$$k = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan:
- $A$ = faktor pre-eksponensial (m/s untuk kontrol kimia, m²/s untuk difusi)
- $E_a$ = energi aktivasi (J/mol)
- $R$ = 8,314 J/(mol·K)
- $T$ = temperatur absolut (K)

Untuk nikel laterit, $E_a$ dilaporkan pada rentang 55–85 kJ/mol untuk kontrol kimia dan 15–30 kJ/mol untuk kontrol difusi (Dickson dkk., 2026).

### 2.3 Laju Akresi Kerak (*Scale Deposition Rate*)

Pembentukan kerak dimodelkan sebagai akresi lapisan batas (*boundary layer accretion*) di permukaan logam autoclave. Persamaan konservasi massa untuk komponen kerak ke-$i$:

$$\frac{dm_i}{dt} = k_{m,i} \cdot (C_{i,\text{bulk}} - C_{i,\text{sat}}) - k_{r,i} \cdot m_i^{1/2}$$

dengan:
- $m_i$ = massa kerak komponen $i$ per satuan luas (kg/m²)
- $k_{m,i}$ = koefisien transfer massa (m/s)
- $C_{i,\text{bulk}}$ = konsentrasi bulk spesies $i$ dalam slurry
- $C_{i,\text{sat}}$ = konsentrasi saturasi pada kondisi operasi
- $k_{r,i}$ = konstanta laju *re-dissolution* (kg⁻⁰·⁵·m·s⁻¹)

Ketebalan total kerak $\delta_s(t)$ diekspresikan:

$$\delta_s(t) = \sum_i \frac{m_i(t)}{\rho_i}$$

dengan $\rho_i$ adalah densitas masing-masing fasa (mis. γ-FeOOH ≈ 4,26 g/cm³; CaSO₄·2H₂O ≈ 2,32 g/cm³).

### 2.4 Faktor Fouling dan Penurunan Perpindahan Panas

Koefisien perpindahan panas keseluruhan dengan dan tanpa fouling:

$$\frac{1}{U_{\text{fouled}}} = \frac{1}{U_{\text{clean}}} + R_f(t)$$

dengan resistansi fouling $R_f(t)$ berkembang mengikuti:

$$R_f(t) = R_f^* \left[1 - \exp\left(-\frac{t}{\tau_f}\right)\right]$$

dengan:
- $R_f^*$ = resistansi fouling asimtotik (m²·K/W)
- $\tau_f$ = konstanta waktu fouling (s)

### 2.5 Neraca Asam Sulfat

Konsumsi spesifik asam (kg H₂SO₄ per ton bijih kering) merupakan indikator ekonomis utama:

$$\text{SAC} = \frac{98}{M_{\text{ore}}} \left[ a_{\text{Ni}} + a_{\text{Co}} + \sum_j \nu_j \cdot a_j \right]$$

dengan $a_{\text{Ni}}, a_{\text{Co}}, a_j$ = jumlah mol nikel, kobalt, dan pengotor (Fe, Mg, Al, Ca) yang terlarut per ton bijih; $\nu_j$ = stoikiometri kebutuhan H₂SO₄ per mol pengotor.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Pra-perlakuan

```
┌──────────────────────┐
│ Bijih Laterit (UM)   │ → Preparasi (crushing, grinding, sizing <75 μm)
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Roasting-Reduction   │ (opsional, Andrameda dkk. 2024: 600–900 °C,
│ + Desulfurization    │  penambahan agen desulfurisasi Fe₂O₃/Na₂CO₃)
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Slurry Mixing        │ (solid:liquid = 1:3, sulfuric acid dosing)
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Autoclave HPAL       │ T = 245–270 °C, P = 35–45 bar, t = 60–90 min
│ (4–6 kompartemen)    │ Agitasi: impeller 80–120 rpm
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Flash Cooling (3-stage)│ P → 1 atm, T → 90–110 °C
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Counter-Current CCD  │ (6–7 stages) → Pregnant Liquor (PL)
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Neutralization &     │ MgO/CaCO₃ dosing, SX dengan Cyanex 301
│ Solvent Extraction   │ → Ni/Co separation
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Precipitation (MHP)  │ atau Crystallization → NiSO₄·6H₂O
└──────────────────────┘
```

### 3.2 SOP Karakterisasi Kerak Autoclave (Berdasarkan Dickson dkk., 2026)

1. **Sampling Kerak:** Ambil sampel pada *inspection port* di kompartemen 2, 4, dan 6 setelah *planned shutdown*. Gunakan scraper titanium untuk menjaga kemurnian sampel.
2. **Karakterisasi Fisik:** Ukur ketebalan ($\delta_s$) dengan *ultrasonic thickness gauge* (ketelitian ±0,1 mm) pada 9 titik terdistribusi.
3. **Analisis Komposisi:**
   - XRD (X-ray Diffraction) untuk identifikasi fasa kristalin: goethit, hematit, gypsum, bassanit, anhidrit.
   - XRF (X-ray Fluorescence) untuk komposisi oksida: Fe₂O₃, SO₃, CaO, SiO₂, Al₂O₃, NiO.
   - SEM-EDS untuk morfologi dan *elemental mapping* lapisan demi lapisan.
   - TGA-DSC untuk identifikasi hidrat (kehilangan massa H₂O pada 120–200 °C untuk gypsum).
4. **Konsolidasi Data:** Hitung profil $\delta_s(z)$ sepanjang sumbu autoclave dan korelasikan dengan *superficial velocity* slurry dan gradien termal lokal.
5. **Penentuan $R_f$:** Bandingkan data perpindahan panas dengan baseline *clean* untuk memperoleh $R_f^*$ dan $\tau_f$.

### 3.3 SOP Pengendalian Kerak

- **Acid Wash Periodik:** Sirkulasi H₂SO₄ 5–10% pada 80–90 °C selama 4–6 jam, berselang antara dua siklus produksi.
- **Pengaturan Konsentrasi Asam Awal:** Jaga free acidity 30–50 g/L untuk mencegah pengendapan prematur di slurry line.
- **Kontrol *Solid-Liquid Ratio*:**

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
