# 2189 — Analisis Perilaku Pembentukan Kerak (Scaling) Autoclave pada Proses Leaching Nikel Laterit dengan Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan nikel global melonjak signifikan seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan baterai lithium-ion (LiNiCoMnO₂). Lebih dari 70% cadangan nikel dunia berupa bijih laterit, namun hanya sekitar 30% produksi nikel primer berasal dari laterit karena kendala teknis dan ekonomi. Proses *High-Pressure Acid Leaching* (HPAL) merupakan teknologi dominan untuk mengekstraksi nikel dan kobalt dari bijih laterit jenis *limonite* (mengandung Fe, Ni, Co tinggi; Mg rendah) pada suhu 240–270 °C dan tekanan 30–50 bar dengan pereaksi H₂SO₄ 150–250 g/L. Fasilitas HPAL industri berskala besar di antaranya PT Vale Indonesia (Sulawesi), Coral Bay Nickel (Filipina), Murrin Murrin (Australia), Ramu (Papua Nugini), dan Goro (Kaledonia Baru).

Permasalahan operasional paling kritis pada HPAL adalah **pembentukan kerak (*autoclave scaling*)**—endapan mineral yang menempel dan menumpuk pada dinding serta pipa internal autoclave. Dickson, Deleau, dan Espitalier (2026) dalam jurnal *Cleaner Waste Systems* secara khusus menginvestigasi perilaku dan karakterisasi kerak ini, yang umumnya tersusun atas hematit (Fe₂O₃), aluminium hidroksida/oksida, gipsum (CaSO₄·2H₂O), dan natrium/alum-jarosit (NaFe₃(SO₄)₂(OH)₆). Akumulasi kerak menyebabkan degradasi koefisien perpindahan panas (overall heat transfer coefficient, *U*), peningkatan konsumsi energi spesifik untuk mempertahankan suhu leaching, kehilangan jadwal produksi karena *shut-down* pembersihan, serta risiko *hot spot* lokal yang merusak lapisan *brick lining* autoclave. Studi menemukan bahwa pada operasi komersial, pembentukan kerak dapat mengurangi produktivitas autoclave hingga 8–15% dan menambah konsumsi asam sulfat 5–10%.

Di sisi lain, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* mengkaji efek pra-perlakuan berupa *desulfurization* dan *roasting-reduction* terhadap residu HPAL. Pendekatan ini mengurangi kadar sulfur dan mengubah fase mineral sebelum proses HPAL, sehingga secara tidak langsung memengaruhi komposisi kerak dan perilaku penskalaan. Sinergi antara pemahaman karakterisasi kerak (Dickson et al., 2026) dan optimasi pra-perlakuan (Andrameda et al., 2024) menjadi pilar peningkatan keberlanjutan proses HPAL, yang menjadi fokus jurnal *Cleaner Waste Systems*—menekankan solusi rendah limbah dan sirkularitas material.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pembentukan Kerak

Pertumbuhan kerak autoclave mengikuti kinetika orde-satu terhadap konsentrasi spesies pengendap dengan koefisien transfer massa yang bergantung suhu melalui persamaan Arrhenius:

$$k_m = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

di mana $k_m$ = koefisien transfer massa (m/s), $A$ = faktor pre-eksponensial (m/s), $E_a$ = energi aktivasi (J/mol), $R$ = konstanta gas universal 8,314 J/(mol·K), dan $T$ = suhu operasi (K). Laju deposisi massa kerak:

$$\frac{dm_s}{dt} = k_m \cdot C_s \cdot A_{eff}$$

dengan $m_s$ = massa kerak (kg), $C_s$ = konsentrasi jenuh spesies (kg/m³), $A_{eff}$ = luas efektif permukaan autoclave (m²).

### 2.2 Degradasi Perpindahan Panas

Dengan adanya lapisan kerak, resistansi termal total bertambah sesuai **fouling resistance** $R_f$ (m²·K/W):

$$Q = \frac{U_0 \cdot A \cdot \Delta T}{1 + R_f \cdot U_0}$$

dengan $U_0$ = koefisien perpindahan panas awal (W/m²·K), $\Delta T$ = beda suhu antara fluida pemanas dan slurry. Hubungan ketebalan kerak $\delta_s$ dengan konduktivitas termalnya $k_s$ (W/m·K):

$$R_f = \frac{\delta_s}{k_s}$$

### 2.3 Neraca Massa dan *Recovery*

*Recovery* nikel dihitung:

$$R_{Ni} = \frac{C_{Ni,L} \cdot V_L}{C_{Ni,ore} \cdot m_{ore}} \times 100\%$$

dengan $C_{Ni,L}$ = konsentrasi Ni dalam leach liquor (g/L), $V_L$ = volume leach liquor (L), $C_{Ni,ore}$ = kadar Ni dalam bijih (%), dan $m_{ore}$ = massa bijih umpan (kg). Neraca massa komprehensif untuk autoclave HPAL:

$$F_{feed} = F_{PLS} + F_{residue} + F_{scale} + F_{loss}$$

dengan *Pregnant Leach Solution* (PLS) = larutan hasil leaching kaya nikel.

### 2.4 Model Pourbaix dan Stabilitas Fase

Dominasi fase kerak diprediksi oleh diagram Eh–pH. Pada kondisi HPAL (suhu 250 °C, pH < 1), $\text{Fe}^{3+}$ mengendap menjadi hematit (α-Fe₂O₃) atau jarosit, sedangkan $\text{Al}^{3+}$ membentuk boehmite (γ-AlO(OH)) atau aluminium sulfat.

### 2.5 Model Kuantitatif Karakterisasi

Untuk data XRD dan SEM-EDS, komposisi fasa kerak dapat dihitung dengan metode **Rietveld refinement**:

$$W_p = \frac{S_p \cdot M_p \cdot Z_p}{\sum_{i} S_i \cdot M_i \cdot Z_i}$$

dengan $W_p$ = fraksi berat fasa $p$, $S_p$ = faktor skala Rietveld, $M_p$ = berat molekul, dan $Z_p$ = jumlah unit formula per sel satuan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL

```
[Bijih Laterit Limonite] → [Repulping & Pengayakan] → [Pre-heater (slurry ~120 °C)]
    ↓
[Autoclave Multi-Kompartemen (240–270 °C, 30–50 bar, H₂SO₄)]
    ↓
[Flash & Cooling] → [Solid-Liquid Separation (CCD)]
    ↓
[PLS] → [Neutralisasi & SX] → [Ni/Co Sulfat/Metal]
[Residue] → [Neutralisasi tailing] → [Tailing disposal / Recovery Fe/Al]
```

### 3.2 SOP Pengendalian Kerak (berdasarkan Dickson et al., 2026)

1. **Karakterisasi umpan**: analisis XRD, XRF, dan ukuran butir bijih laterit untuk memprediksi potensi pembentuk kerak.
2. **Pengaturan parameter operasi**: suhu dipertahankan 245–255 °C (kompromi antara *recovery* dan laju penskalaan), residence time 60–90 menit, konsentrasi asam 180–220 g/L.
3. **Sampling kerak**: pada inspeksi terjadwal (tiap 60–90 hari operasi), sampel kerak diambil dari titik *hot spot* (terutama bagian atas dinding autoclave), dinding kompartemen, dan pipa discharge.
4. **Karakterisasi laboratorium**: XRD untuk identifikasi fasa, SEM-EDS untuk morfologi dan mikro-komposisi, TGA-DSC untuk stabilitas termal, ICP-OES untuk komposisi kimia.
5. **Pembersihan**: *acid wash* dengan HCl/HNO₃, *high-pressure water jet*, atau *mechanical descaling*; frekuensi bergantung pada laju penskalaan aktual.
6. **Pra-perlakuan desulfurisasi (Andrameda et al., 2024)**: penambahan agen desulfurisasi (misal