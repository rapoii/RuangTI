# Modul 403: Rekayasa Lingkungan Industri, Pengelolaan Limbah B3, IPAL/WWTP, PROPER KLHK, dan ISO 14001:2015

## 1. Domain Profesi & Landasan Hukum
Profesi **Environmental Engineer / Sustainability & Waste Management Specialist** bertanggung jawab merancang neraca massa limbah, mengendalikan pencemaran air, udara, dan tanah, serta mengelola limbah Bahan Berbahaya dan Beracun (B3) sesuai regulasi nasional dan internasional.

### Landasan Hukum Utama:
1. **PP No. 22 Tahun 2021**: *Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup* (Menggantikan PP 101/2014 dan PP 82/2001).
2. **Permen LHK No. 6 Tahun 2021**: *Tata Cara dan Persyaratan Pengelolaan Limbah Bahan Berbahaya dan Beracun*.
3. **ISO 14001:2015**: *Environmental Management Systems — Requirements with guidance for use*.
4. **GHG Protocol Corporate Standard (WRI/WBCSD)**: *Scope 1, Scope 2, dan Scope 3 Carbon Accounting*.

---

## 2. Pengelolaan Limbah B3 (Hazardous Waste Management)

### A. Alur Kepatuhan Pengelolaan Limbah B3 Industri:
1. **Identifikasi & Karakterisasi**: Uji Toksikologi TCLP (*Toxicity Characteristic Leaching Procedure*), Uji Karakteristik (Mudah Menyala FP $< 60^\circ\text{C}$, Reaktif, Korosif $\text{pH} \le 2$ atau $\ge 12.5$, Beracun $\text{LD}_{50} \le 5000\text{ mg/kg}$).
2. **Penyimpanan di TPS Limbah B3 Berizin**:
   - Memiliki lantai kedap air, kemiringan $1\%$, saluran pengumpul tumpahan (*sump pit*) kapasitas $\ge 110\%$ volume kemasan terbesar.
   - Dilengkapi *eyewash, safety shower*, APAR, dan simbol/label B3 sesuai Permen LHK 14/2013.
3. **Masa Simpan Maksimum (PP 22/2021)**:
   - Limbah B3 Kategori 1 $\ge 50\text{ kg/hari}$: Maksimum **90 hari**.
   - Limbah B3 Kategori 1 $< 50\text{ kg/hari}$: Maksimum **180 hari**.
   - Limbah B3 Kategori 2 dari sumber spesifik: Maksimum **365 hari**.
4. **Manifest Elektronik (FESTRONIK)**: Pelacakan legalitas dari Penghasil $\to$ Pengangkut Berizin $\to$ Pengolah/Pemanfaat B3 Akhir.

---

## 3. Desain & Kinerja Instalasi Pengolahan Air Limbah (IPAL / WWTP)

### A. Neraca Massa & Efisiensi Penyisihan Polutan:
Tingkat efisiensi penyisihan parameter polutan (BOD, COD, TSS, Minyak & Lemak, Logam Berat) dalam reaktor IPAL:

$$\eta_{\text{removal}} = \frac{C_{\text{influent}} - C_{\text{effluent}}}{C_{\text{influent}}} \times 100\%$$

Di mana:
- $C_{\text{influent}}$: Konsentrasi polutan masuk IPAL (mg/L).
- $C_{\text{effluent}}$: Konsentrasi polutan keluar menuju saluran pembuangan akhir (wajib di bawah Baku Mutu PP 22/2021).

### B. Desain Waktu Tinggal Hidrolik (Hydraulic Retention Time - HRT):
$$\text{HRT} = \frac{V_{\text{reaktor}}}{Q_{\text{inflow}}}$$

Di mana $V_{\text{reaktor}}$ adalah volume efektif bak sedimentasi/aerasi ($\ ext{m}^3$) dan $Q_{\text{inflow}}$ adalah debit air limbah masuk ($\ ext{m}^3/\text{jam}$).

### C. Rasio F/M (*Food-to-Microorganism Ratio*) pada Kolam Lumpur Aktif (Activated Sludge):
$$\frac{F}{M} = \frac{Q \times S_0}{V \times X}$$

Di mana:
- $Q$: Debit air limbah harian ($\text{m}^3/\text{hari}$).
- $S_0$: Konsentrasi $\text{BOD}_5$ influent (mg/L).
- $V$: Volume bak aerasi ($\text{m}^3$).
- $X$: Konsentrasi *Mixed Liquor Suspended Solids* (MLSS dalam mg/L, tipikal $2000 - 4000\text{ mg/L}$).
- Rentang $F/M$ optimal untuk sistem konvensional: $0.2 - 0.6\text{ hari}^{-1}$.

---

## 4. Program Penilaian Peringkat Kinerja Perusahaan (PROPER KLHK)

Kementerian Lingkungan Hidup dan Kehutanan (KLHK) mengklasifikasikan kepatuhan lingkungan menjadi 5 warna:

1. **HITAM (Ketaatan $0\%$)**: Belum melakukan upaya pengelolaan lingkungan, menimbulkan pencemaran fatal.
2. **MERAH (Ketaatan $< 100\%$)**: Mengelola limbah tetapi belum memenuhi seluruh baku mutu atau izin lingkungan.
3. **BIRU (Ketaatan $100\%$)**: Telah patuh sepenuhnya pada seluruh regulasi lingkungan (AMDAL, IPAL, TPS B3, Emisi Udara).
4. **HIJAU (*Beyond Compliance*)**: Telah menerapkan efisiensi energi, reduksi emisi, 3R limbah B3/non-B3, dan program keanekaragaman hayati.
5. **EMAS (*Excellence & Social Innovation*)**: Telah menerapkan inovasi sosial, *Life Cycle Assessment* (LCA) ISO 14040, dan penciptaan nilai bersama (*Creating Shared Value* - CSV).

---

## 5. Penghitungan Emisi Karbon Industri (GHG Protocol Scope 1, 2, 3)

$$E_{\text{CO}_2\text{e}} = \sum_{k} \left( A_k \times EF_k \times GWP_k \right)$$

Di mana:
- $A_k$: Data aktivitas (*Activity Data*, misal: liter solar genset, kWh listrik PLN, ton bahan baku).
- $EF_k$: Faktor Emisi (*Emission Factor*, misal: $0.85\text{ kg CO}_2\text{e/kWh}$ listrik grid Jawa-Bali).
- $GWP_k$: *Global Warming Potential* gas rumah kaca ($\text{CO}_2 = 1$, $\text{CH}_4 = 28$, $\text{N}_2\text{O} = 265$).

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Republik Indonesia. (2021). *Peraturan Pemerintah Republik Indonesia No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup*. Lembaran Negara RI.
- International Organization for Standardization. (2015). *ISO 14001:2015 Environmental management systems — Requirements with guidance for use*. Geneva: ISO.
- World Resources Institute & WBCSD. (2020). *The Greenhouse Gas Protocol: A Corporate Accounting and Reporting Standard*. Washington, DC: WRI.
- Metcalf & Eddy, Inc. (2014). *Wastewater Engineering: Treatment and Resource Recovery* (5th ed.). McGraw-Hill Education.
- Gultom, D. C. U., Adam, I., & Sukwika, T. (2025). *Industrial wastewater treatment efficiency and carbon emission footprint in chemical manufacturing clusters*. Journal of Applied Environmental Management, 14(3), 205-219.
