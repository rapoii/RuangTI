# 2246 — Pemodelan Resiliensi Rantai Dingin (Cold Chain) Produk Mudah Rusak dengan Integrasi Sistem Pemantauan Suhu Berbasis IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*, 12(1). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (cold chain) merupakan subsistem kritis dalam rantai pasok produk yang sensitif terhadap suhu, mencakup vaksin, produk biologis, makanan laut, produk dairy, serta bahan farmasi. Kerusakan kualitas produk terjadi ketika suhu menyimpang dari ambang batas yang ditetapkan (misalnya 2–8 °C untuk mayoritas vaksin WHO-prequalified), dan setiap pelanggaran waktu–suhu bersifat kumulatif terhadap degradasi potensi produk. Menurut Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), kebutuhan akan model resiliensi cold chain menjadi semakin mendesak karena tiga faktor simultan: (i) peningkatan volume distribusi produk hayati pasca-pandemi, (ii) kompleksitas rute last-mile yang panjang di negara berkembang, dan (iii) dampak ekonomi dari *temperature excursion* yang dapat melampaui 30% nilai produk yang dimusnahkan.

Konteks empiris diperkuat oleh temuan Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) di UPTD Farmasi Dinas Kesehatan Kabupaten Siak, yang mendokumentasikan dua permasalahan operasional nyata: pertama, *cold chain box* yang digunakan dalam distribusi vaksin tidak dilengkapi alat pemantauan suhu *real-time* sehingga apoteker hanya mengetahui anomali suhu secara retrospektif; kedua, pencatatan suhu masih dilakukan secara manual pada *log sheet* setiap dua jam sekali—interval yang terlalu panjang untuk deteksi dini mengingat degradasi sebagian vaksin dapat terjadi dalam hitungan menit setelah paparan suhu di atas 8 °C. Kedua keterbatasan ini secara langsung menurunkan *availability* sistem cold chain dan meningkatkan *recovery time* saat terjadi kegagalan, sehingga menjadikan integrasi model resiliensi dengan sensor IoT (DS18B20) bukan sekadar peningkatan teknologi, melainkan kebutuhan manajerial yang terukur.

Secara ekonomi, WHO估算 (estimate) bahwa sekitar 50% vaksin global terbuang karena kegagalan cold chain, dengan kerugian tahunan melebihi USD 31 miliar di sektor makanan dan farmasi. Dari perspektif Teknik Industri, masalah ini bukan hanya bersifat teknologis, melainkan merupakan masalah *reliability engineering*, *risk management*, dan *process control* yang menuntut pendekatan kuantitatif holistik—mulai dari karakterisasi laju kegagalan sensor hingga desain SOP respons anomali.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resiliensi Cold Chain (Khurshid & Siddiqui, 2024)

Khurshid & Siddiqui (2024) mengusulkan kerangka resiliensi empat-fase: *Prepare → Absorb→ Recover → Adapt* yang dimodelkan menggunakan Rantai Markov waktu-diskrit dengan empat state sistem: **S₀** (Operasional Normal), **S₁** (Degradasi – Suhu Menyimpang ≤ Toleransi), **S₂** (Kegagalan – Suhu Melewati Ambang Kritis), dan **S₃** (Pemulihan Aktif).

Probabilitas transisi antar-state diformulasikan sebagai matriks probabilitas bersyarat:

$$
P = \begin{bmatrix} p_{00} & p_{01} & p_{02} & p_{03} \\ p_{10} & p_{11} & p_{12} & p_{13} \\ p_{20} & p_{21} & p_{22} & p_{23} \\ p_{30} & p_{31} & p_{32} & p_{33} \end{bmatrix}, \quad \sum_{j} p_{ij} = 1
$$

dengan $p_{ij}$ merepresentasikan probabilitas transisi dari state $i$ ke state $j$ dalam interval waktu diskrit $\Delta t$ (umumnya 1 menit untuk granularitas suhu).

**Fungsi resiliensi sistem** didefinisikan sebagai:

$$
R_{\text{sys}}(t) = 1 - \frac{1}{T} \int_{0}^{T} \mathbb{1}[X(\tau) \notin S_0] \, d\tau
$$

dengan $\mathbb{1}[\cdot]$ adalah fungsi indikator dan $X(\tau)$ adalah state sistem pada waktu $\tau$. Nilai $R_{\text{sys}}$ mendekati 1 menunjukkan resiliensi tinggi.

**Mean Time to Recovery (MTTR)** untuk transisi dari $S_2 \to S_0$:

$$
\text{MTTR} = \frac{1}{\mu} = \frac{1}{p_{20} + p_{21}}
$$

### 2.2 Karakteristik Sensor DS18B20 (Putra et al., 2024)

Sensor DS18B20 yang diusulkan Putra et al. (2024) memiliki spesifikasi teknis berikut yang relevan secara matematis:

$$
\text{Resolusi} = \frac{T_{\max} - T_{\min}}{2^{N-1}} = \frac{125 - (-55)}{2^{11}} = 0.0625 \text{ °C/bit}
$$

dengan $N=12$ bit resolusi. Akurasi intrinsik sensor adalah $\pm 0.5$ °C pada rentang $-10$ °C hingga $+85$ °C, sehingga memenuhi persyaratan CDC untuk pemantauan vaksin.

**Sampling & akuisisi data** mengikuti persamaan konversi:

$$
T_{\text{digital}} = \text{round}\left(\frac{T_{\text{actual}}}{0.0625}\right) \times 0.0625
$$

**Waktu konversi** sensor:

$$
t_{\text{conv}} = (N_{\text{bits}} \times t_{\text{bit}}) + t_{\text{setup}} = (12 \times 0.75 \text{ ms}) + 10 \text{ ms} = 19 \text{ ms}
$$

### 2.3 Formulasi Hibrid: Resiliensi × Akurasi Sensor

Menggabungkan kedua kerangka, *resilience-adjusted failure rate* diberikan oleh:

$$
\lambda_{\text{adj}}(T) = \lambda_0 \cdot e^{\beta(T - T_{\text{ref}})} \cdot \frac{1}{A_{\text{sensor}}}
$$

dengan:
- $\lambda_0$ = laju kegagalan baseline (failure/jam)
- $\beta$ = koefisien Arrhenius untuk degradasi termal
- $T_{\text{ref}}$ = suhu referensi operasi (5 °C untuk cold chain vaksin)
- $A_{\text{sensor}}$ = availabilitas sistem sensor IoT

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan IoT (Berdasarkan Putra et al., 2024)

```
[Sensor DS18B20] → [Mikrokontroler] → [Gateway WiFi/GSM] → [Cloud Server]
        ↓                   ↓                   ↓                  ↓
   Akuisisi T          Validasi         Transmisi Data      Database + Dashboard
                                              ↓
                                      [Alert System] → SMS/Email ke Apoteker
```

**SOP Pemantauan Suhu Cold Chain (Rekayasa Ulang):**

1. **Pra-distribusi (t₀):** Validasi kalibrasi sensor DS18B20 terhadap termometer referensi bersertifikat NIST; toleransi deviasi $\leq 0.3$ °C.
2. **Inisialisasi:** *Time synchronization* dengan NTP server; set *sampling interval* $\Delta t = 60$ s.
3. **Monitoring aktif:** Akuisisi data kontinu dengan *moving average filter* jendela 5 sampel untuk meredam noise:

$$
\bar{T}_k = \frac{1}{5} \sum_{i=0}^{4} T_{k-i}
$$

4. **Deteksi anomali:** Penerapan *Western Electric Rules* untuk SPC:
   - **Aturan 1:** $|\bar{T}_k - \mu_T| > 3\sigma_T$ → alarm level 3 (kritis)
   - **Aturan 2:** 2 dari 3 consecutive points di luar $2\sigma$ → alarm level 2 (waspada)
   - **Aturan 3:** 4 dari 5 consecutive points di luar $1\sigma$ sisi sama → alarm level 1 (perhatian)
5. **Respons anomali:** Aktivasi SOP pemulihan sesuai state Markov (S₁ → S₂ → S₃ → S₀).
6. **Pencatatan otomatis:** Eliminasi *manual log sheet*—penggantian dengan *timestamped digital log* yang immutable di cloud.

### 3.2 Diagram Alir Logika Pemulihan Resiliensi

```
START → Baca T(t)
          ↓
       T ∈ [2,8] °C ?
        ↓ Ya           ↓ Tidak
   State S₀         T ∈ [2,8] ± 1°C ?
   [Normal]           ↓ Ya            ↓ Tidak
                  State S₁        State S₂
                  [Degradasi]     [Kegagalan]
                       ↓                ↓
                  Counter++        Aktifkan Alarm
                       ↓                ↓
                  > 5 min?         Recovery Action
                       ↓                ↓
                  State S₂        Validasi T
                                       ↓
                                   Kembali S₀
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Distribusi Vaksin COVID-19 di Kabupaten Siak

**Parameter Input Industri (Berdasarkan Putra et al., 2024):**
- Volume cold chain box: 50 L
- Jumlah dosis per box: 1.200 dosis
- Suhu operasional target: $T_{\text{ref}} = 5$ °C
- Ambang batas kritis: $T_{\min} = 2$ °C, $T_{\max} = 8$ °C
- Durasi distribusi rata-rata: 8 jam
- Biaya per dosis: Rp 250.000 (vaksin mRNA)
- Nilai total muatan per box: $V = 1.200 \times 250.000 =$ **Rp 300.000.000**

### 4.2 Perhitungan Laju Kegagalan Baseline

Mengacu pada data MTBF (Mean Time Between Failures) freezer medis rumah sakit:

$$
\lambda_0 = \frac{1}{\text{MTBF}} = \frac{1}{10.000 \text{ jam}} = 10^{-4} \text{ failure/jam}
$$

Probabilitas kegagalan selama 8 jam distribusi tanpa sistem IoT:

$$
P_{\text{fail}}^{\text{manual}} = 1 - e^{-\