# 1897 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Panas Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 25% dari konsumsi energi akhir global dan hampir 30% emisi CO₂ antropogenik, di mana lebih dari separuh kebutuhan energi termal industri berada pada rentang suhu menengah hingga tinggi (150–400°C). Dalam konteks transisi energi Eropa dan mandat dekarbonisasi *Net-Zero Industry Act*, elektrifikasi proses termal industri melalui **High-Temperature Heat Pumps (HTHPs)** muncul sebagai strategi utama yang dikampanyekan oleh IEA dan komisi Eropa (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Akan tetapi, operasi HTHP memiliki kelemahan inheren berupa profil beban yang *intermittent* — terutama ketika dipadukan dengan sumber energi terbarukan variabel — sehingga dibutuhkan buffer termal yang mampu menyimpan energi saat produksi listrik melimpah dan melepaskannya saat permintaan puncak.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) secara eksplisit menyatakan bahwa **Latent Heat Thermal Energy Storage (LHTES)** berbasis *Phase Change Material* (PCM) menjadi krusial untuk meningkatkan fleksibilitas dan efisiensi aplikasi panas proses industri ketika digabungkan dengan HTHP. Tantangan fundamental yang diidentifikasi adalah konduktivitas termal rendah PCM (umumnya 0,2–1,0 W/m·K) yang menyebabkan laju pelepasan muatan lambat dan degradasi performa dinamis. Paper tersebut mengusulkan konfigurasi *shell-and-tube* vertikal sebagai jawaban atas kebutuhan *compactness*, *structural robustness*, dan potensi *thermal enhancement* melalui geometri penukar kalor, enkapsulasi, atau *metal wool*. Modul ini difokuskan pada unit LHTES dengan PCM eutektik bersuhu fasa sekitar **222°C** — rentang yang sangat relevan untuk aplikasi industri makanan (sterilisasi UHT), tekstil (*dyeing*), kimia halus, dan pulp & paper.

Urgensi ekonomi dari integrasi LHTES + HTHP tecermin dari studi Xu & Wang (2024) yang menunjukkan bahwa dekarbonisasi panas proses melalui HTHP berpotensi menurunkan biaya energi termal industri hingga 30–50% dibanding boiler gas alam, sepanjang sistem penyimpanan dapat meratakan profil beban dan memungkinkan operasi HTHP pada titik *Coefficient of Performance* (COP) optimal. Pemodelan numerik transien menjadi tulang punggung desain karena kapasitas penyimpanan, waktu pengisian/pengosongan, dan degradasi siklik harus diprediksi sebelum prototipe fisik dibangun.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES *shell-and-tube* yang dikembangkan oleh Toloza dkk. (2026) menggunakan bahasa Modelica dengan formulasi enthalpy-porosity untuk menangani *melting/solidification* PCM. Tiga subdomain fisik diselesaikan secara kopling: (i) fluida pemindah kalor (HTF) di dalam tube, (ii) PCM di annular shell, dan (iii) dinding tube logam.

### 2.1 Persamaan Energi pada PCM (Subdomain Shell)

Mengikuti metode enthalpi, persamaan konservasi energi diselesaikan untuk variabel enthalpi total $H$:

$$\rho_{pcm} \frac{\partial H}{\partial t} = \nabla \cdot (k_{pcm} \nabla T) + \dot{q}_{conv}$$

di mana enthalpi didefinisikan sebagai:

$$H(T) = \int_{T_{ref}}^{T} c_{p,pcm}(\tau) \, d\tau + f_l(T) \cdot L$$

dengan $f_l(T)$ adalah fraksi cair (*liquid fraction*) yang dimodelkan dengan kurva *smoothed Heaviside* untuk mencegah diskontinuitas:

$$f_l(T) = \frac{1}{2}\left(1 + \frac{\tanh\left(\frac{T - T_m}{\Delta T_{pcm}}\right) - \tanh\left(\frac{T_s - T_m}{\Delta T_{pcm}}\right)}{\tanh\left(\frac{T_l - T_m}{\Delta T_{pcm}}\right) - \tanh\left(\frac{T_s - T_m}{\Delta T_{pcm}}\right)} \cdot \frac{1}{\tanh\left(\frac{T_l - T_m}{\Delta T_{pcm}}\right)} \right)$$

dimana $T_m$ adalah suhu fasa eutektik (≈222°C), $\Delta T_{pcm}$ adalah lebar transisi fasa, dan $T_s, T_l$ adalah batas *solidus* dan *liquidus*.

### 2.2 Model Konveksi Alami dalam PCM Cair

Saat PCM meleleh, gaya apung (*buoyancy*) memicu konveksi alami yang dimodelkan melalui vektor gravitasi pada persamaan momentum dengan **Boussinesq approximation**. Term sumber momentum didefinisikan menggunakan fungsi mushy-zone:

$$\vec{S}_{mom} = -A_{mush} \cdot \frac{(1-f_l)^2}{f_l^3 + \epsilon} \cdot \vec{v}$$

dengan $A_{mush}$ adalah konstanta morphologi morfologi (*morphology constant*, orde 10⁴–10⁷ kg/m³·s) dan $\epsilon$ adalah parameter komputasional kecil untuk menghindari singularitas numerik.

### 2.3 Persamaan HTF dalam Tube

Untuk fluida kerja yang mengalir secara paksa (konveksi paksa) di dalam tube dengan kecepatan aksial $u_z$:

$$\rho_f c_{p,f} \left(\frac{\partial T_f}{\partial t} + u_z \frac{\partial T_f}{\partial z}\right) = \frac{k_f}{r}\frac{\partial}{\partial r}\left(r \frac{\partial T_f}{\partial r}\right)$$

dengan kondisi batas dinding tube di $r = r_i$:

$$-k_f \frac{\partial T_f}{\partial r}\bigg|_{r_i} = \frac{T_f - T_{pcm,i}}{R''_{wall}}$$

di mana $R''_{wall} = \frac{\ln(r_o/r_i)}{2\pi k_w L_{tube}}$ adalah tahanan termal dinding tube logaritmik.

### 2.4 Kopling HTHP–LHTES

Integrasi dengan HTHP dimodelkan melalui kondisi batas inlet HTF yang bersirkulasi melalui siklus Rankine/Carnot terbalik. COP Carnot batas atas untuk sumber panas $T_{source}$ dan sink $T_{sink}$:

$$COP_{Carnot} = \frac{T_{sink}}{T_{source} - T_{sink}}$$

Untuk aplikasi dengan $T_{sink}$ = 222°C dan reservoir lingkungan $T_{source}$ ≈ 15°C (288 K) → $T_{sink}$ (495 K):

$$COP_{Carnot} = \frac{495}{495 - 288} \approx 2.39$$

COP riil HTHP dengan siklus trans-kritis dan refrigeran natural seperti CO₂ atau R1234ze berada pada rentang 1,8–2,2 (Xu & Wang, 2024).

### 2.5 Kapasitas Penyimpanan Energi

Kapasitas termal total unit LHTES terdiri dari komponen laten dan sensible:

$$E_{tot} = m_{pcm} \cdot \left[ \int_{T_{init}}^{T_s} c_{p,s} \, dT + L + \int_{T_l}^{T_{final}} c_{p,l} \, dT \right]$$

---

## 3. Metodologi Rekayasa & SOP

### 3.1 Arsitektur Simulasi Modelica

Toloza dkk. (2026) membangun model dalam lingkungan **Modelica** dengan library *ThermoCycle*, *HeatTransfer*, dan *FluidSystem*. Diagram alir komputasional:

```
┌─────────────────────────────────────────────┐
│  INPUT GEOMETRI & MATERIAL                  │
│  - r_inner, r_outer, L_tube                 │
│  - ρ_pcm, k_pcm, L, c_p, T_m              │
│  - HTF: ρ_f, μ_f, k_f, c_p,f, u_inlet     │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│  PEMBUATAN MESH 2D AXISYMMETRIC             │
│  - Diskretisasi radial: 50 node             │
│  - Diskretisasi aksial: 80 node             │
│  - Refinement di interface PCM/tube         │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│  INISIALISASI                                │
│  - T_pcm,0 = T_init > T_m (pre-melted)     │
│  - T_f,inlet = T_charge (≥ T_m + ΔT)       │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│  TIME-STEPPING LOOP (implicit Euler)        │
│  - dt = 0.5–5 s (adaptive)                  │
│  - Update H, T, f_l, v setiap step          │
└────────────────┬────────────────────────────┘
                 ▼
┌─────────────────────────────────────────────┐
│  KONVERGENSI                                │
│  - |T^{n+1} - T^n| < 10⁻⁴ K                │
│  - Residual enthalpy < 10⁻⁶                 │
└────────────────┬────────────────────────────┘
                 ▼
        ┌────────┴────────┐
        ▼                 ▼
   CHARGING            DISCHARGING
   T_f,inlet>T_m      T_f,inlet<T_m
   E_pcm ↑            E_pcm ↓
```

### 3.2 SOP Desain Unit LHTES untuk Integrasi HTHP

1. **Karakterisasi Termal PCM**: Tentukan $T_m$, $L$, $k_{pcm}(T)$, $c_{p,pcm}(T)$ melalui DSC dan T-History method.
2. **Desain Geometri Awal**: Hitung massa PCM dari target kapasitas energi $E_{target}$ dan batasan volume plant.
3. **Simulasi Numerik Transien**: Jalankan skenario charge–discharge untuk memvalidasi *dis.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
