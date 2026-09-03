# 1845 — Strategi Rantai Pasok Tertutup untuk Pemanfaatan Bertingkat (*Echelon Utilization*) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Peer-Reviewed Journal on Robust Closed-Loop Supply Chain with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial kendaraan listrik (*Electric Vehicle*/EV) global yang diproyeksikan mencapai 145 juta unit pada 2030 (IEA, 2024) telah menciptakan tantangan *end-of-life* (EoL) yang krusial di sektor manufaktur baterai litium-ion (LiB). Setiap baterai EV dengan kapasitas awal 60–80 kWh memiliki masa pakai 8–10 tahun, menghasilkan akumulasi baterai retired (BESS退役) yang membutuhkan strategi daur ulang terstruktur. JIANG Lin & TANG Lidan (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)) menekankan bahwa baterai retired tidak boleh diperlakukan sebagai limbah homogen, melainkan sebagai sumber daya multi-fungsi melalui pendekatan *echelon utilization* (pemanfaatan bertingkat)—yaitu repurposing baterai dengan *State of Health* (SoH) 70–80% untuk aplikasi *second-life* seperti *stationary energy storage*, *backup power*, dan *microgrid*.

Permasalahan industri yang diidentifikasi bersifat multi-dimensi: (i) **ekonomis**—nilai residu baterai litium mencapai USD 7.000–15.000 per ton material kobalt-nikel; (ii) **lingkungan**—setiap ton baterai LiB yang tidak didaur ulang melepaskan 1,5–3,0 ton CO₂-ekivalen; (iii) **regulasi**—Directive EU 2023/1542 mensyaratkan *recovery rate* minimum 65% dan *recycling efficiency* 90% untuk kobalt, nikel, dan lithium; serta (iv) **operasional**—ketidakpastian kualitas baterai retired (variasi SoH, tingkat degradasi kimia) menciptakan risiko *reverse logistics* yang signifikan.

Studi Shin, Kim, & Jeong (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menambahkan lapisan penting berupa **robust optimization** untuk mengelola ketidakpastian *return rate* dalam sistem *Closed-Loop Supply Chain* (CLSC). Paper tersebut memperkenalkan *Return Management System* (RMS) yang memungkinkan perusahaan manufaktur mempertahankan profitabilitas meskipun terjadi fluktuasi 20–40% pada volume pengembalian. Integrasi kedua pendekatan—strategi echelon-recycling-remanufacturing (Jiang & Tang) dengan model robust CLSC (Shin et al.)—menjadi landasan keputusan rekayasa industri masa kini, di mana seorang spesialis harus secara simultan mengoptimalkan *economic value recovery*, *environmental compliance*, dan *supply chain resilience*.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC yang dikembangkan dalam literatur primer JIANG & TANG (2025) menggunakan kerangka **Mixed-Integer Linear Programming (MILP)** dengan struktur keputusan dua-tingkat (*bi-level programming*) yang melibatkan *Original Equipment Manufacturer* (OEM) sebagai pemimpin (*Stackelberg leader*) dan *third-party recycler* (TPR) sebagai pengikut.

### 2.1 Variabel Keputusan

- $x_e \in \mathbb{Z}^+$ : jumlah baterai yang dialokasikan untuk *echelon utilization* (unit)
- $x_r \in \mathbb{Z}^+$ : jumlah baterai untuk *recycling* material (unit)
- $x_m \in \mathbb{Z}^+$ : jumlah baterai untuk *remanufacturing* (unit)
- $y \in \{0,1\}$ : keputusan aktivasi fasilitas echelon (1=aktif, 0=tidak)
- $p_e, p_r, p_m$ : harga jual masing-masing kanal (USD/unit)
- $c_e, c_r, c_m$ : biaya proses masing-masing kanal (USD/unit)

### 2.2 Fungsi Tujuan

Fungsi tujuan utama adalah memaksimumkan total profitabilitas sistem CLSC:

$$\max \Pi_{CLSC} = (p_m - c_m)x_m + (p_e - c_e)x_e + (p_r - c_r)x_r - C_{inv}(I) - C_{log} - C_{env}$$

dengan:
- $C_{inv}(I) = h \cdot I$ : biaya inventori, $I$ = level stok baterai retired
- $C_{log} = d \cdot (x_m + x_e + x_r) \cdot L$ : biaya *reverse logistics*, $d$ = tarif distance-based, $L$ = jarak rata-rata
- $C_{env} = \alpha \cdot (E_c x_c + E_e x_e)$ : biaya compliance lingkungan, $\alpha$ = tarif carbon

### 2.3 Kendala (*Constraints*)

**Kendala Kapasitas Total:**
$$x_e + x_r + x_m \leq Q_{total}$$
di mana $Q_{total}$ adalah suplai baterai retired tahunan (unit).

**Kendala Kualitas (SoH Threshold):**
$$x_e \leq \sum_{i=1}^{N} \mathbb{1}_{\{SoH_i \in [0.70, 0.80]\}}$$
$$x_m \leq \sum_{i=1}^{N} \mathbb{1}_{\{SoH_i \geq 0.80\}}$$

**Kendala Permintaan Pasar Sekunder:**
$$x_e \leq D_e^{max}, \quad x_m \leq D_m^{max}$$

**Kendala Non-Negativitas:**
$$x_e, x_r, x_m \geq 0$$

### 2.4 Formulasi Robust (Shin et al., 2024)

Untuk mengelola ketidakpastian parameter, model robust menggunakan *Box Uncertainty Set*:

$$\mathcal{U} = \left\{ \tilde{D}_m \in \mathbb{R}^+ : \underline{D}_m \leq \tilde{D}_m \leq \bar{D}_m \right\}$$

$$\min_{x} \max_{\tilde{D} \in \mathcal{U}} \; \Pi_{CLSC}(x, \tilde{D})$$

yang diselesaikan melalui *Column-and-Constraint Generation* (CCG) algorithm atau *Benders Decomposition* dengan *worst-case realization*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri CLSC baterai retired mengikuti kerangka **6-tahap SOP** yang diadaptasi dari JIANG & TANG (2025) dan diperkuat dengan protokol *Return Management System* (RMS) Shin et al. (2024):

### **Tahap 1: Akuisisi & Koleksi**
- Penyiapan *collection network* dengan *reverse logistics density* 1 pusat per 200.000 populasi EV
- Standar referensi: **GB/T 34014-2017** (China) untuk traceability kode baterai
- Integrasi dengan *Producer Responsibility Organization* (PRO)

### **Tahap 2: Diagnosis & Triase** 
Diagram alir keputusan:

```
[Baterai Retired] → [Visual Inspection] → [Initial Screening]
        ↓
[Electrochemical Test: Capacity, Impedance, SoH]
        ↓
  ┌─────┴─────┬─────────┐
SoH ≥80%    70-80%     <70%
  ↓           ↓          ↓
[Remanufacture] [Echelon] [Recycle]
```

### **Tahap 3: Disassembly Modular**
- *Teardown* dengan robotic disassembly station (cycle time 18 menit/unit)
- Standar keamanan: **IEC 62619**, **UN 38.3** untuk transportation testing
- Recovery modul (>60% kapasitas tersisa modul) vs. cell-level

### **Tahap 4: Alokasi Kanal (Channel Optimization)**
- Eksekusi model MILP pada Bab 2 dengan *real-time data feed*
- Solver: CPLEX/Gurobi dengan *time limit* 600 detik
- *Re-optimization* periodik setiap quarter untuk adaptasi fluktuasi pasar

### **Tahap 5: Pemrosesan & Validasi Output**
- **Echelon pathway:** *Repacking* → *BMS reconfiguration* → *SoH verification* (UL 1974)
- **Remanufacturing pathway:** Cell matching → Reassembly → Cycle testing (≥200 cycle @ 80% DoD)
- **Recycling pathway:** Pyrometallurgy/Hydrometallurgy → Material recovery (Co, Ni, Li)

### **Tahap 6: Distribusi Pasar Sekunder & Loop Closure**
- Kanal B2B: *utility-scale storage*, *commercial EV fleet*, *telecom backup*
- Sertifikasi: **ISO 9001** (quality), **ISO 14001** (environmental), **ISO 45001** (safety)
- KPI tracking: *recovery rate*, *cost per kWh recovered*, *carbon footprint avoided*

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Industri

Ambil skenario operator *battery-as-a-service* dengan parameter tahunan:

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Suplai baterai retired | $Q_{total}$ | 10.000 unit/tahun |
| Biaya echelon processing | $c_e$ | USD 22/unit |
| Biaya remanufacturing | $c_m$ | USD 55/unit |
| Biaya recycling