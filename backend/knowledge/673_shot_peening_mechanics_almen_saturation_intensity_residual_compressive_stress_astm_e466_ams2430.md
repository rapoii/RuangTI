# Modul 673: Shot Peening Mechanics: Dinamika Impak Partikel Media, Kurva Saturasi Almen Strip, Profil Tegangan Sisa Tekan (Residual Compressive Stress), Relaksasi Termomekanis, dan Peningkatan Umur Fatik Komponen Dirgantara & Otomotif (SAE J442, SAE J443, AMS 2430, ISO 26910 & ASTM E466)

## 1. Pengantar & Konteks Industri: Integritas Permukaan dan Mitigasi Kegagalan Fatik

Dalam rekayasa sistem manufaktur dan material kedirgantaraan (*aerospace*), otomotif performa tinggi, turbin pembangkit listrik, serta komponen transmisi beban berat (*heavy-duty gears & shafts*), lebih dari 80% hingga 90% kegagalan katastropik mekanis bersumber dari fenomena kelelahan material (*metal fatigue*), korosi retak tegang (*stress corrosion cracking* - SCC), dan keausan fretting (*fretting wear*). Kegagalan fatik hampir selalu berawal dari inisiasi retak mikro (*microcrack initiation*) pada permukaan bebas komponen yang mengalami tegangan tarik siklik bolak-balik (*cyclic tensile stresses*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|              PARADIGMA TEGANGAN KERJA DAN PENINGKATAN BATAS FATIK: TANPA VS DENGAN SHOT PEENING                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. KOMPONEN TANPA SHOT PEENING (Permukaan As-Machined / Ground):                                                    |
|      - Mengandung tegangan sisa tarik permukaan (Tensile Residual Stress: sigma_res > 0) akibat panas permesinan.     |
|      - Beban Siklik Luar: sigma_appl(t) bolak-balik.                                                                  |
|      - Tegangan Efektif Lokal: sigma_eff = sigma_appl + sigma_res  ->  AMPLITUDO TEGANGAN TARIK SANGAT TINGGI!        |
|      - Dampak: Inisiasi retak mikro terjadi sangat cepat pada siklus rendah (Low / High Cycle Fatigue Failure).       |
|                                                                                                                       |
|   2. KOMPONEN DENGAN SHOT PEENING TERKENDALI (SAE J442 / AMS 2430):                                                   |
|      - Miliaran partikel media sferis berkecepatan tinggi menghantam permukaan (Cold Working Impact).                  |
|      - Terbentuk lapisan deformasi plastis lokal yang dibatasi oleh elastisitas inti matriks bawah permukaan.        |
|      - Menghasilkan LAPISAN TEGANGAN SISA TEKAN TINGGI (Compressive Residual Stress: sigma_res << 0, hingga -1200 MPa)|
|      - Tegangan Efektif Lokal Tertekan: sigma_eff = sigma_appl + (-|sigma_res|)  ->  TEGANGAN TARIK NETTO DIREDAM!    |
|      - Dampak: Umur Fatik (Fatigue Life N_f) meningkat 200% hingga 1500%, laju perambatan retak da/dN tertahan!       |
|                                                                                                                       |
|                         Nosel Pendorong Udara / Roda Impeler Sentrifugal                                              |
|                                         ┌───────────────────────────┐                                                 |
|                                         │  Shot Peening Generator   │ Tekanan Udara P = 2 - 6 bar                     |
|                                         │  (Mass Flow Rate Media)   │ Kecepatan Shot v_p = 30 - 100 m/s               |
|                                         └───────────┬───────────────┘                                                 |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|                                         ┌───────────────────────────┐                                                 |
|                                         │ Pancaran Media (Shot Jet) │ Sudut Impak alpha = 70 - 90 deg                 |
|                                         │ Cast Steel / Ceramic Bead │ Ukuran Partikel d_p = 0.1 - 1.2 mm              |
|                                         └───────────┬───────────────┘                                                 |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
|    ◄── Translasi / Rotasi Benda Kerja (Cakupan / Coverage C >= 100% - 200%)                                           |
|    ▼ PERMUKAAN LOGAM TITANIUM Ti-6Al-4V / BAJA PADUAN AISI 4340 / INCONEL 718                                         |
|      - Terbentuk Kawah Dimple Mikro Plastis (Local Hertzian Plastic Indentation)                                      |
|      - Daerah Sub-Permukaan Mengalami Regangan Geser Plastis Masif (Plastic Shear Strain gamma_p)                     |
|      - Profil Tegangan Sisa: Puncak Tekan (sigma_max_comp) di Sub-Permukaan, Kedalaman Tekan z_0 = 0.1 - 0.6 mm       |
|      - Peningkatan Kekerasan Permukaan (Work Hardening / Strain Hardening) & Penghalusan Struktur Butir Mikro          |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Shot Peening** adalah proses pengerjaan dingin permukaan (*cold working surface engineering process*) di mana aliran jutaan partikel media berbentuk bola (*spherical shot media*) dengan kekerasan, massa, dan kecepatan terkalibrasi ditembakkan ke arah permukaan logam. Setiap partikel yang menumbuk bertindak layaknya palu tempa mikro (*microscopic peening hammer*), menghasilkan lekukan mikro (*dimple*) plastis pada lapisan luar material. Daerah di sekitar dan di bawah kawah dimple tersebut berusaha memuai secara lateral namun tertahan oleh massa elastis elastisitas logam di bagian dalam yang tidak mengalami deformasi plastis. Akibat kesetimbangan elastoplastis tersebut, terbentuk medan **tegangan sisa tekan (*compressive residual stress layer*)** yang sangat tinggi pada lapisan permukaan hingga kedalaman beberapa ratus mikrometer ($100 - 600\ \mu\text{m}$).

Standar industri dan kedirgantaraan internasional yang mengatur metodologi, kalibrasi intensitas, media, dan validasi fatik shot peening meliputi:
1. **SAE J442**: *Test Strip, Holder, and Gage for Shot Peening* (Standarisasi Almen Strip tipe A, N, dan C).
2. **SAE J443**: *Procedures for Using Standard Shot Peening Test Strip* (Prosedur pembuatan dan penentuan kurva saturasi Almen).
3. **AMS 2430 (Aerospace Material Specification)**: *Shot Peening, Computer Monitored / Automated* (Spesifikasi shot peening kedirgantaraan berakurasi tinggi).
4. **AMS 2432**: *Shot Peening, Computer Monitored, Strict Control Protocol*.
5. **ISO 26910-1**: *Metallic materials — Measurement of residual stress by acoustic and X-ray diffraction methods*.
6. **ASTM E466**: *Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials*.
7. **ASTM E915**: *Standard Test Method for Verifying the Alignment of X-Ray Diffraction Instrumentation for Residual Stress Measurement*.

---

## 2. Mekanika Kontak Impak Hertzian Elastoplastis & Pembentukan Dimple

### 2.1 Teori Kontak Hertzian Impak Dinamis

Ketika sebuah partikel media sferis berdiameter $d_p = 2 R_p$, massa $m_p$, dan densitas $\rho_p$ menumbuk permukaan logam semi-tak-hingga dengan kecepatan translasi normal $v_0$, deformasi awal pada rezim elastis murni dapat dimodelkan melalui modifikasi kontak elastis Hertzian:

Jari-jari kontak elastisitas Hertz $a_H$ dan gaya kontak impak maksimum $F_{\text{max}}$ dinyatakan oleh:

$$E^* = \left( \frac{1 - \nu_p^2}{E_p} + \frac{1 - \nu_w^2}{E_w} \right)^{-1}$$

Di mana $E_p, \nu_p$ adalah modulus elastisitas dan rasio Poisson media shot, serta $E_w, \nu_w$ adalah modulus elastisitas dan rasio Poisson benda kerja.

Energi kinetik partikel saat impak normal:

$$E_k = \frac{1}{2} m_p v_0^2 = \frac{1}{2} \left( \frac{4}{3} \pi R_p^3 \rho_p \right) v_0^2$$

Gaya kontak puncak elastis $F_H$:

$$F_H = \frac{4}{3} E^* R_p^{1/2} \delta_n^{3/2}$$

Di mana $\delta_n$ adalah perpindahan penetrasi normal.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                      MEKANIKA PEMBENTUKAN INDENTASI DIMPLE DAN DISTRIBUSI TEGANGAN VON MISES                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       Partikel Shot (Diameter d_p, Kecepatan v_0, Sudut alpha)                                        |
|                                         ●●●●●●●                                                                       |
|                                      ●●●       ●●●                                                                    |
|                                     ●●           ●●                                                                   |
|                                     ●●     Rp    ●●                                                                   |
|                                      ●●●       ●●●                                                                    |
|                                         ●●●●●●●                                                                       |
|                                            │                                                                          |
|                                            ▼ Impak Plastis                                                            |
|          Permukaan Awal     ┌─────────────────────────────┐                                                           |
|       ══════════════════════┘                             └══════════════════════                                     |
|                             \   Kawah Dimple (d_d, h_d)   /  <-- Peninggian Material (Pile-up)                        |
|                              \                           /                                                            |
|                               \                         /                                                             |
|       ─────────────────────────┴───────────────────────┴─────────────────────────                                     |
|       ZONA DEFORMASI PLASTIS: Regangan Plastis Geser Maksimum (gamma_p_max)                                           |
|       Tegangan Geser Maksimum Terjadi pada Kedalaman z_tau ~= 0.48 * a_H                                              |
|       Tegangan Sisa Tekan Terkunci Pasca-Rebound: sigma_res(z) < 0                                                    |
|       ───────────────────────────────────────────────────────────────────────────                                     |
|       ZONA ELASTIS INTI MATRIKS: Memberikan Gaya Reaksi Elastis Pengunci (sigma_core > 0)                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Transisi Elastis-Plastis & Kriteria Titik Luluh Johnson-Cook

Tegangan luluh dinamis material benda kerja $\sigma_y^{\text{dyn}}$ dipengaruhi oleh laju regangan tinggi (*strain rate* $\dot{\varepsilon} \sim 10^3 - 10^6\ \text{s}^{-1}$) dan pemanasan adiabatik lokal selama benturan, yang dimodelkan secara akurat oleh persamaan konstitutif Johnson-Cook:

$$\sigma_y^{\text{dyn}} = \left[ A + B (\varepsilon_p)^n \right] \left[ 1 + C \ln\left( \frac{\dot{\varepsilon}}{\dot{\varepsilon}_0} \right) \right] \left[ 1 - \left( \frac{T - T_{\text{room}}}{T_{\text{melt}} - T_{\text{room}}} \right)^m \right]$$

Di mana:
- $A$ adalah kuat luluh kuasi-statis material dasar ($\text{MPa}$).
- $B$ adalah modulus pengerasan regangan (*strain hardening coefficient*, $\text{MPa}$).
- $n$ adalah eksponen pengerasan regangan (*strain hardening exponent*).
- $C$ adalah koefisien sensitivitas laju regangan (*strain rate sensitivity coefficient*).
- $m$ adalah eksponen pelunakan termal (*thermal softening exponent*).
- $\dot{\varepsilon}_0$ adalah laju regangan referensi ($1{,}0\ \text{s}^{-1}$).

Inisiasi deformasi plastis terjadi ketika tegangan kontak geser maksimum melampaui kriteria luluh Tresca/Von Mises:

$$\tau_{\text{max}} \approx 0{,}31 \cdot p_0 \ge \frac{\sigma_y^{\text{dyn}}}{\sqrt{3}} \quad \implies \quad p_0 \ge 1{,}87 \cdot \sigma_y^{\text{dyn}}$$

Di mana $p_0$ adalah tekanan kontak puncak di pusat lingkaran kontak impak ($p_0 = \frac{3 F}{2 \pi a_H^2}$). Titik leleh plastis pertama tidak muncul di permukaan luar, melainkan pada kedalaman sub-permukaan $z_{\text{yield}} \approx 0{,}48 a_H$. Inilah penyebab mendasar mengapa **puncak tegangan sisa tekan maksimum ($\sigma_{\text{comp}}^{\text{max}}$) pada komponen hasil shot peening berada tepat di bawah permukaan (*sub-surface peak*)**.

---

## 3. Dinamika Almen Strip, Kurva Saturasi & Teori Cakupan (*Coverage*)

### 3.1 Standardisasi Almen Strip & Batang Ukur (SAE J442 & SAE J443)

Intensitas pancaran peening (*peening intensity*) dinyatakan secara kuantitatif melalui lendutan busur (*arc height*) dari pelat baja pegas karbon tinggi SAE 1070 standar yang disebut **Almen Strip**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|               KLASIFIKASI STRIP ALMEN STANDAR DAN RENTANG INTENSITAS PENGUKURAN (SAE J442)                            |
+-----------------------------------------------------------------------------------------------------------------------+
|  Tipe Strip   | Ketebalan Strip (t_s)          | Kekerasan Permukaan | Rentang Intensitas Tipikal (Arc Height)        |
+---------------+--------------------------------+---------------------+------------------------------------------------+
|  'N' Strip    | 0.79 mm +/- 0.02 mm (0.031 in) | 44 - 50 HRC         | Rendah: 0.05 - 0.20 mm N (Untuk logam lunak/Al)|
|  'A' Strip    | 1.29 mm +/- 0.02 mm (0.051 in) | 44 - 50 HRC         | Standar: 0.15 - 0.60 mm A (Baja, Ti-6Al-4V)    |
|  'C' Strip    | 2.39 mm +/- 0.02 mm (0.094 in) | 44 - 50 HRC         | Tinggi: > 0.50 mm C (Baja struktur berat/gear) |
+-----------------------------------------------------------------------------------------------------------------------+
|  Hubungan Konversi Pendekatan Intensitas:  1.0 A ~= 3.0 N  dan  1.0 C ~= 0.33 A                                      |
+-----------------------------------------------------------------------------------------------------------------------+
```

```
+-----------------------------------------------------------------------------------------------------------------------+
|                        PRINSIP PENGUKURAN DAN KURVA SATURASI ALMEN (SAE J443)                                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Lendutan Busur Almen (Arc Height h)                                                                                 |
|       ▲                                                                                                               |
|       │                                                                      Titik Saturasi Definisi SAE J443:        |
|       │                                             Saturasi T_sat           Saat Waktu Paparan Digandakan (2 * T),   |
|   h_sat ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─●                     Kenaikan Lendutan Delta_h <= 10%!        |
|       │                                              / \                                                              |
|       │                                             /   \                                                             |
|       │                                            /     \── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──●|
|       │                                           /          Kenaikan <= 10% saat t = 2 * T_sat (h <= 1.10 * h_sat)   |
|       │                                          /                                                                    |
|       │                                         /                                                                     |
|       │                                        /                                                                      |
|       │                                       /                                                                       |
|       │                                      /   Model Persamaan Saturasi Empiris:                                    |
|       │                                     /    h(t) = a * [1 - exp(-b * t)]                                         |
|       │                                    /                                                                          |
|       │                                   /                                                                           |
|       └──────────────────────────────────┴───────────────────────────────────────►                                    |
|       0                                T_sat                                   2*T_sat       Waktu Paparan (t, s)     |
+-----------------------------------------------------------------------------------------------------------------------+
```

Definisi formal **Intensitas Saturasi Almen ($h_{\text{sat}}$)** menurut SAE J443 adalah:
> *"Intensitas saturasi adalah titik pada kurva lendutan waktu di mana ketika waktu pemaparan digandakan ($2T$), kenaikan tinggi busur lengkungan ($\Delta h$) tidak melebihi 10% dari nilai tinggi busur pada waktu $T$."*

Persamaan kurva saturasi regresi eksponensial kontinu:

$$h(t) = h_{\infty} \cdot \left[ 1 - \exp\left( -\frac{t}{\tau_{\text{char}}} \right) \right]$$

Di mana $h_{\infty}$ adalah tinggi lengkungan asimtotik maksimum dan $\tau_{\text{char}}$ adalah konstanta waktu karakteristik proses peening. Titik waktu saturasi $T_{\text{sat}}$ dapat dihitung secara analitik:

$$h(2 T_{\text{sat}}) - h(T_{\text{sat}}) = 0{,}10 \cdot h(T_{\text{sat}})$$

$$\left[ 1 - e^{-2 T_{\text{sat}}/\tau} \right] - \left[ 1 - e^{-T_{\text{sat}}/\tau} \right] = 0{,}10 \cdot \left[ 1 - e^{-T_{\text{sat}}/\tau} \right]$$

$$e^{-T_{\text{sat}}/\tau} - e^{-2 T_{\text{sat}}/\tau} = 0{,}10 \cdot \left( 1 - e^{-T_{\text{sat}}/\tau} \right)$$

Misalkan $u = e^{-T_{\text{sat}}/\tau}$:

$$u - u^2 = 0{,}10 (1 - u) \implies u^2 - 1{,}10 u + 0{,}10 = 0$$

$$(u - 1)(u - 0{,}10) = 0 \implies u = 0{,}10 \implies T_{\text{sat}} = -\tau \ln(0{,}10) \approx 2{,}3026 \cdot \tau_{\text{char}}$$

$$h_{\text{sat}} = h(T_{\text{sat}}) = h_{\infty} (1 - e^{-2{,}3026}) = 0{,}90 \cdot h_{\infty}$$

### 3.2 Pemodelan Fraksi Cakupan Permukaan (*Surface Coverage Rate*) Avrami

Cakupan peening (*Coverage*, $C$) adalah persentase luas permukaan benda kerja yang telah tertutupi oleh kawah indentasi plastik. Berdasarkan teori transformasi fasa Avrami/Johnson-Mehl-Avrami-Kolmogorov (JMAK) untuk penumpukan acak probabilistik:

$$C(t) = 1 - \exp\left( -\dot{N}_{\text{impak}} \cdot \bar{A}_{\text{dimple}} \cdot t \right) = 1 - \exp\left( -k_{\text{cov}} \cdot t \right)$$

Di mana:
- $\dot{N}_{\text{impak}}$ adalah fluks tumbukan partikel media per satuan luas per satuan waktu ($\text{m}^{-2}\cdot\text{s}^{-1}$).
- $\bar{A}_{\text{dimple}} = \frac{\pi d_d^2}{4}$ adalah luas proyeksi rata-rata dari satu kawah indentasi ($\text{m}^2$).
- $k_{\text{cov}} = \dot{N}_{\text{impak}} \bar{A}_{\text{dimple}}$ adalah laju koefisien pemaparan cakupan ($\text{s}^{-1}$).

Untuk mencapai cakupan penuh $100\%$ dalam inspeksi optik (didefinisikan secara industri sebagai $C \ge 98\%$):

$$0{,}98 = 1 - e^{-k_{\text{cov}} t_{98\%}} \implies t_{98\%} \approx \frac{\ln(50)}{k_{\text{cov}}} \approx \frac{3{,}912}{k_{\text{cov}}}$$

Dalam spesifikasi kedirgantaraan AMS 2430, jika disyaratkan *coverage* $200\%$, maka waktu proses permesinan diatur sebesar $2 \times t_{98\%}$, yang secara fisik berarti rata-rata setiap titik permukaan dihantam setidaknya dua kali untuk menjamin keseragaman tegangan sisa tekan dan menghilangkan *hot-spot* tegangan tarik sisa lokal.

---

## 4. Pemodelan Distribusi Tegangan Sisa Tekan & Relaksasi Termomekanis

### 4.1 Profil Tegangan Sisa Kedalaman Analitik (Model 4 Parameter)

Profil distribusi tegangan sisa tekan terhadap kedalaman dari permukaan ($z$) memiliki karakteristik non-linier yang khas, yang dimodelkan melalui fungsi analitik:

$$\sigma_{\text{res}}(z) = \sigma_{\text{surf}} \cdot e^{-\alpha_1 z} + \sigma_{\text{peak}} \cdot \left( \frac{z}{z_{\text{peak}}} \right)^{\beta} \cdot \exp\left[ \beta \left( 1 - \frac{z}{z_{\text{peak}}} \right) \right] + \sigma_{\text{core}}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PROFIL DISTRIBUSI TEGANGAN SISA TERHADAP KEDALAMAN (DEPTH PROFILE)                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Tegangan Sisa sigma_res (MPa)                                                                                       |
|   <-- KOMPRESI (TEKAN) (-)                         TARIK (+) -->                                                      |
|   -1200      -800       -400         0        +200                                                                    |
|     │          │          │          │          │                                                                     |
|  z=0├──────────┼──────────┼────●─────┼──────────┤  Tegangan Permukaan: sigma_surf ~= -550 MPa                         |
|     │          │          │   /      │          │                                                                     |
|     │          │         ●───┘       │          │                                                                     |
|     │          │        /            │          │                                                                     |
|z_peak├─────────●───────┘             │          │  PUNCAK TEKAN SUB-PERMUKAAN: sigma_peak ~= -1050 MPa                |
|     │           \                    │          │  (Terjadi pada kedalaman z_peak ~= 50 - 150 um)                     |
|     │            \                   │          │                                                                     |
|     │             \                  │          │                                                                     |
|     │              \                 │          │                                                                     |
|     │               \                │          │                                                                     |
| z_0 ├────────────────\───────────────●──────────┤  Kedalaman Penetrasi Tekan Efektif (Cross-over Depth, z_0 ~= 350 um)|
|     │                 \              │ \        │                                                                     |
|     │                  \             │  \       │                                                                     |
|     │                   \            │   \──●───┤  Tegangan Tarik Penyeimbang Inti: sigma_core ~= +120 MPa             |
|     │                    \           │      │   │  (Self-Equilibrating Core Tensile Stress)                           |
|     │                     \          │      │   │                                                                     |
|     ▼ Kedalaman z (um)     \─────────┴──────┴───┤                                                                     |
+-----------------------------------------------------------------------------------------------------------------------+
```

Syarat kesetimbangan mekanika statis penampang (*self-equilibrating equilibrium of internal stresses*):

$$\int_{0}^{t_{\text{thick}}} \sigma_{\text{res}}(z)\, dz = 0 \quad \text{dan} \quad \int_{0}^{t_{\text{thick}}} \sigma_{\text{res}}(z) \cdot z\, dz = 0$$

### 4.2 Relaksasi Termal Tegangan Sisa (Model Kinetika Zener-Wert-Avrami)

Pada komponen mesin yang beroperasi pada temperatur elevated (seperti bilah kompresor turbin gas Ti-6Al-4V atau cakram turbin Inconel 718 pada $T > 350^\circ\text{C}$), tegangan sisa tekan akan mengalami peluruhan (*thermal relaxation*) akibat difusi termal dan dislokasi creep. Kinetika relaksasi termal dimodelkan oleh persamaan Zener-Wert-Avrami:

$$\frac{\sigma_{\text{res}}(t, T)}{\sigma_{\text{res}}(0)} = \exp\left[ - \left( C_0 \cdot t \cdot \exp\left( -\frac{\Delta H_{\text{act}}}{R_{\text{gas}} T} \right) \right)^m \right]$$

Di mana:
- $\sigma_{\text{res}}(0)$ adalah tegangan sisa awal pasca-peening.
- $\Delta H_{\text{act}}$ adalah energi aktivasi untuk relaksasi tegangan/dislokasi ($\text{J/mol}$).
- $R_{\text{gas}} = 8{,}314\ \text{J}/(\text{mol}\cdot\text{K})$ adalah konstanta gas universal.
- $T$ adalah temperatur absolut operasi ($\text{Kelvin}$).
- $C_0$ adalah konstanta frekuensi getaran kisi kristal ($\text{s}^{-1}$).
- $m$ adalah eksponen relaksasi empiris material ($0{,}15 - 0{,}35$).

### 4.3 Relaksasi Mekanis Siklik (Cyclic Mechanical Relaxation)

Ketika komponen menerima beban fatik dengan amplitudo tegangan bolak-balik $\sigma_a$ dan tegangan rata-rata $\sigma_m$, jika tegangan gabungan lokal melampaui batas luluh dinamis siklik ($\sigma_{\text{max}}^{\text{loc}} = |\sigma_a + \sigma_{\text{res}}| > \sigma_{y,\text{cyclic}}$), terjadi deformasi mikro-plastis yang mereduksi tegangan sisa tekan pada siklus awal:

$$\sigma_{\text{res}}(N) = \sigma_{\text{res}}(1) - A_{\text{relax}} \cdot \ln(N)$$

Di mana $N$ adalah jumlah siklus beban dan $A_{\text{relax}}$ adalah koefisien relaksasi siklik.

---

## 5. Teori Peningkatan Umur Fatik & Diagram Smith-Watson-Topper (SWT)

### 5.1 Diagram Haigh & Koreksi Tegangan Rata-rata Goodman / Gerber

Tegangan sisa tekan bertindak sebagai tegangan rata-rata negatif ($\sigma_m = \sigma_{\text{res}} < 0$). Pengaruhnya terhadap batas kelelahan (*fatigue endurance limit* $\sigma_e$) dianalisis melalui hubungan:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DIAGRAM HAIGH: PERGESERAN TITIK OPERASI AKIBAT SHOT PEENING                                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Amplitudo Tegangan sigma_a (MPa)                                                                                    |
|       ▲                                                                                                               |
|       │                                                                                                               |
|  sigma_e├───────────────────────────●                                                                                 |
|       │                            / \                                                                                |
|       │                           /   \── Garis Batas Goodman (Tanpa Peening: sigma_m >= 0)                           |
|       │                          /     \                                                                              |
|       │                         /       \                                                                             |
|       │    WILAYAH AMAN FATIK  /         \                                                                            |
|       │   SETELAH SHOT PEENING/           \                                                                           |
|       │   (Pergeseran ke Kiri)             \                                                                          |
|       │                      /              \                                                                         |
|       │     ●               /                \                                                                        |
|       │  Titik Operasi     /                  \                                                                       |
|       │  Shot Peened      /                    \                                                                      |
|       │ (sigma_m = -600) /                      \                                                                     |
|       └─────────┴───────┴────────────────────────┴──────────────►                                                     |
|              -sigma_y   0                      +sigma_uts     Tegangan Rata-rata sigma_m (MPa)                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

1. **Model Goodman Termodifikasi (Konservatif)**:
   $$\frac{\sigma_a}{\sigma_e} + \frac{\sigma_m + \sigma_{\text{res}}}{\sigma_{\text{UTS}}} = 1 \implies \sigma_a = \sigma_e \cdot \left[ 1 - \frac{\sigma_m + \sigma_{\text{res}}}{\sigma_{\text{UTS}}} \right]$$

2. **Model Parameter Smith-Watson-Topper (SWT) untuk Fatik Siklus Rendah-Tinggi**:
   $$\text{Parameter SWT} = \sigma_{\text{max}} \cdot \varepsilon_a = \left( \sigma_{\text{max}}^{\text{appl}} + \sigma_{\text{res}} \right) \cdot \left[ \frac{\sigma_f'}{E} (2 N_f)^b + \varepsilon_f' (2 N_f)^c \right]$$

Karena $\sigma_{\text{res}} < 0$, nilai $\sigma_{\text{max}}$ turun drastis, yang menyebabkan jumlah siklus kegagalan $N_f$ meningkat secara eksponensial.

---

## 6. Algoritma Komputasi Python: Solver Dinamika Saturasi Almen, Profil Tegangan Sisa & Prediksi Umur Fatik

Skrip Python di bawah ini mengimplementasikan pemodelan komputasional terpadu:
1. Regresi non-linier penentuan titik saturasi kurva Almen ($h_{\text{sat}}, T_{\text{sat}}$) sesuai kriteria SAE J443.
2. Prediksi kedalaman dan magnitudo profil tegangan sisa elastoplastis $\sigma_{\text{res}}(z)$ berdasarkan parameter media impak.
3. Simulasi relaksasi termal berbasis kinetika Zener-Wert-Avrami.
4. Estimasi perpanjangan umur fatik $N_f$ menggunakan kriteria Smith-Watson-Topper (SWT).

```python
"""
SHOT PEENING MECHANICS & FATIGUE LIFE PREDICTION SOLVER
Standar Acuan: SAE J442, SAE J443, AMS 2430, ASTM E466, ISO 26910
Modul Pengetahuan RuangTI: #673
"""

import numpy as np
import math
from typing import Dict, List, Tuple

class ShotPeeningSimulationEngine:
    def __init__(self, material_name: str, E_mod: float, nu: float, 
                 yield_strength: float, uts: float, fatigue_limit_base: float):
        """
        Inisialisasi Properti Mekanis Material Benda Kerja
        E_mod: Modulus Elastisitas (MPa)
        nu: Rasio Poisson
        yield_strength: Kuat Luluh sigma_y (MPa)
        uts: Kuat Tarik Maksimum sigma_uts (MPa)
        fatigue_limit_base: Batas Kelelahan Awal Tanpa Peening sigma_e0 (MPa)
        """
        self.material = material_name
        self.E = E_mod
        self.nu = nu
        self.sigma_y = yield_strength
        self.sigma_uts = uts
        self.sigma_e0 = fatigue_limit_base

    def calculate_almen_saturation_curve(self, time_array: np.ndarray, 
                                          h_inf: float, tau_char: float) -> Dict[str, any]:
        """
        Menghitung Kurva Lengkungan Almen h(t) dan Menentukan Titik Saturasi SAE J443.
        h(t) = h_inf * [1 - exp(-t / tau_char)]
        Kriteria SAE J443: h(2*T) - h(T) <= 0.10 * h(T)
        """
        arc_heights = h_inf * (1.0 - np.exp(-time_array / tau_char))
        
        # Penentuan analitik titik saturasi T_sat
        # e^(-T_sat/tau) = 0.10 => T_sat = tau * ln(10)
        t_sat = tau_char * np.log(10.0)
        h_sat = h_inf * (1.0 - np.exp(-t_sat / tau_char))
        
        # Verifikasi numerik aturan 10%
        h_2tsat = h_inf * (1.0 - np.exp(-(2.0 * t_sat) / tau_char))
        delta_pct = ((h_2tsat - h_sat) / h_sat) * 100.0
        
        return {
            "time_data": time_array,
            "arc_height_data": arc_heights,
            "T_saturation_sec": t_sat,
            "Almen_intensity_mm": h_sat,
            "Arc_height_at_2T_mm": h_2tsat,
            "Verification_delta_percent": delta_pct,
            "SAE_J443_Compliant": delta_pct <= 10.001
        }

    def compute_residual_stress_profile(self, depth_z_um: np.ndarray, 
                                        almen_intensity_mmA: float, 
                                        shot_diameter_mm: float) -> Dict[str, np.ndarray]:
        """
        Menghitung profil tegangan sisa tekan sigma_res(z) terhadap kedalaman z (mikrometer).
        Berdasarkan kalibrasi semi-empiris Hertz-Johnson Cook untuk baja paduan/titanium.
        """
        # Magnitudo puncak tegangan tekan sub-permukaan (MPa)
        sigma_peak = - (0.65 * self.sigma_uts + 250.0 * (almen_intensity_mmA / 0.30))
        # Tegangan permukaan z=0 (MPa)
        sigma_surf = - (0.40 * self.sigma_uts + 150.0 * (almen_intensity_mmA / 0.30))
        
        # Kedalaman puncak kompresi z_peak (um)
        z_peak = 35.0 + 120.0 * (shot_diameter_mm / 0.6) * (almen_intensity_mmA / 0.25)
        # Kedalaman penyeberangan tegangan nol z_0 (Cross-over depth)
        z_zero = z_peak * 3.2
        
        # Tegangan tarik penyeimbang matriks inti
        sigma_core = 0.08 * self.sigma_uts
        
        beta = 1.65
        profile = np.zeros_like(depth_z_um)
        
        for idx, z in enumerate(depth_z_um):
            if z <= z_zero:
                # Profil kompresi eksponensial ganda
                norm_z = max(z, 0.001) / z_peak
                comp_term = sigma_peak * (norm_z ** beta) * np.exp(beta * (1.0 - norm_z))
                surf_trans = (sigma_surf - comp_term * np.exp(-z/z_peak)) * np.exp(-z / 25.0)
                profile[idx] = comp_term + surf_trans
            else:
                # Transisi asimtotik ke tegangan tarik inti
                dist = z - z_zero
                profile[idx] = sigma_core * (1.0 - np.exp(-dist / 80.0))
                
        return {
            "depth_array_um": depth_z_um,
            "residual_stress_MPa": profile,
            "sigma_surf_MPa": profile[0],
            "sigma_peak_max_comp_MPa": np.min(profile),
            "z_peak_depth_um": depth_z_um[np.argmin(profile)],
            "crossover_depth_z0_um": z_zero
        }

    def evaluate_thermal_relaxation(self, sigma_res_initial: float, 
                                   temperature_C: float, exposure_time_hours: float, 
                                   activation_energy_kJ_mol: float = 145.0) -> float:
        """
        Kinetika Relaksasi Termal Zener-Wert-Avrami
        Delta H: Energi Aktivasi Difusi/Dislokasi
        """
        T_kelvin = temperature_C + 273.15
        R_gas = 8.314e-3 # kJ/(mol*K)
        t_sec = exposure_time_hours * 3600.0
        
        C0 = 1.0e8 # Frekuensi dislokasi (1/s)
        m_exp = 0.22 # Eksponen material
        
        thermal_term = C0 * t_sec * np.exp(- activation_energy_kJ_mol / (R_gas * T_kelvin))
        relaxation_ratio = np.exp(- (thermal_term ** m_exp))
        
        return sigma_res_initial * relaxation_ratio

    def predict_fatigue_life_sn(self, stress_amplitude_MPa: float, 
                                mean_stress_applied_MPa: float, 
                                residual_stress_surf_MPa: float) -> Dict[str, float]:
        """
        Prediksi Umur Fatik (Siklus Nf) menggunakan Modifikasi Model Goodman & Basquin:
        sigma_a / sigma_e + (sigma_m + sigma_res) / sigma_uts = 1
        """
        # Tegangan rata-rata efektif gabungan
        sigma_m_eff = mean_stress_applied_MPa + residual_stress_surf_MPa
        
        # Batas kelelahan ekivalen terkompensasi
        if sigma_m_eff < self.sigma_uts:
            sigma_e_eff = self.sigma_e0 * (1.0 - (sigma_m_eff / self.sigma_uts))
        else:
            sigma_e_eff = 10.0 # Mendekati keruntuhan statis
            
        # Parameter Kurva Wöhler / Basquin: sigma_a = sigma_f_prime * (2*Nf)^b
        # Estimasi koefisien kelelahan
        sigma_f_prime = 1.65 * self.sigma_uts
        b_exponent = -0.095 # Kemiringan kurva S-N tipikal paduan struktural
        
        # Rasio tegangan efektif terhadap batas lelah
        stress_ratio_applied = stress_amplitude_MPa / max(sigma_e_eff, 1.0)
        
        # Perhitungan jumlah siklus patah Nf
        if stress_amplitude_MPa <= sigma_e_eff * 0.90:
            N_f = 1.0e7 # Ambang batas umur tak hingga (Infinite Life > 10^7 siklus)
        else:
            # Resolusi Basquin terbalik
            norm_stress = stress_amplitude_MPa / (1.0 - (sigma_m_eff / self.sigma_uts))
            n_reversals = (norm_stress / sigma_f_prime) ** (1.0 / b_exponent)
            N_f = max(n_reversals / 2.0, 1000.0)
            
        return {
            "applied_sigma_a_MPa": stress_amplitude_MPa,
            "applied_sigma_m_MPa": mean_stress_applied_MPa,
            "residual_stress_MPa": residual_stress_surf_MPa,
            "effective_mean_stress_MPa": sigma_m_eff,
            "effective_endurance_limit_MPa": sigma_e_eff,
            "predicted_fatigue_cycles_Nf": N_f
        }

# =====================================================================
# EKSEKUSI DEMONSTRASI STUDI KASUS KOMPONEN DIRGANTARA
# =====================================================================
if __name__ == "__main__":
    print("=" * 80)
    print("RUANGTI IE RAG - ENGINE SIMULASI MEKANIKA SHOT PEENING (SAE J442/AMS 2430)")
    print("=" * 80)
    
    # 1. Parameter Benda Kerja: Paduan Titanium Ti-6Al-4V Grade 5 (Bilah Kompresor)
    # E = 114 GPa, Poisson = 0.34, Yield = 910 MPa, UTS = 1000 MPa, Endurance Limit = 510 MPa
    engine = ShotPeeningSimulationEngine(
        material_name="Titanium Ti-6Al-4V Grade 5",
        E_mod=114000.0,
        nu=0.34,
        yield_strength=910.0,
        uts=1000.0,
        fatigue_limit_base=510.0
    )
    
    # 2. Kalibrasi Kurva Saturasi Almen (SAE J443)
    t_span = np.linspace(1.0, 60.0, 60)
    almen_res = engine.calculate_almen_saturation_curve(t_span, h_inf=0.28, tau_char=5.2)
    
    print(f"\n[1] HASIL KALIBRASI KURVA SATURASI ALMEN:")
    print(f"    - Waktu Saturasi Karakteristik (T_sat) : {almen_res['T_saturation_sec']:.2f} detik")
    print(f"    - Intensitas Peening Almen (h_sat)      : {almen_res['Almen_intensity_mm']:.4f} mm A (0.{int(almen_res['Almen_intensity_mm']*1000):02d}A)")
    print(f"    - Tinggi Busur pada 2*T_sat             : {almen_res['Arc_height_at_2T_mm']:.4f} mm A")
    print(f"    - Kenaikan Delta Persentase             : {almen_res['Verification_delta_percent']:.2f}% (Standar SAE J443: <= 10.0%)")
    print(f"    - Status Kepatuhan SAE J443             : {'VALID / MEMENUHI SYARAT' if almen_res['SAE_J443_Compliant'] else 'GAGAL'}")
    
    # 3. Prediksi Profil Tegangan Sisa Tekan terhadap Kedalaman
    z_depths = np.linspace(0.0, 500.0, 101)
    stress_profile = engine.compute_residual_stress_profile(
        depth_z_um=z_depths,
        almen_intensity_mmA=almen_res['Almen_intensity_mm'],
        shot_diameter_mm=0.58 # Media Cast Steel S230
    )
    
    print(f"\n[2] PROFIL TEGANGAN SISA SUB-PERMUKAAN:")
    print(f"    - Tegangan Sisa Permukaan (z=0)         : {stress_profile['sigma_surf_MPa']:.1f} MPa (Kompresi)")
    print(f"    - Puncak Tekan Maksimum (sigma_peak_max): {stress_profile['sigma_peak_max_comp_MPa']:.1f} MPa")
    print(f"    - Kedalaman Puncak Kompresi (z_peak)    : {stress_profile['z_peak_depth_um']:.1f} um")
    print(f"    - Kedalaman Penetrasi Efektif (z_0)     : {stress_profile['crossover_depth_z0_um']:.1f} um")
    
    # 4. Simulasi Relaksasi Termal Operasi Bilah Mesin Turbin (T = 380 deg C, 500 Jam)
    sigma_init = stress_profile['sigma_surf_MPa']
    sigma_relaxed_500h = engine.evaluate_thermal_relaxation(
        sigma_res_initial=sigma_init,
        temperature_C=380.0,
        exposure_time_hours=500.0
    )
    print(f"\n[3] RELAKSASI TERMAL PADA TEMPERATUR ELEVATED (380 deg C, 500 Jam):")
    print(f"    - Tegangan Sisa Awal Pasca-Peening      : {sigma_init:.1f} MPa")
    print(f"    - Tegangan Sisa Tersisa Pasca-Operasi   : {sigma_relaxed_500h:.1f} MPa (Retensi: {(sigma_relaxed_500h/sigma_init)*100.0:.1f}%)")
    
    # 5. Prediksi Umur Fatik Komparatif (Amplitudo sigma_a = 480 MPa, Tegangan Rata-rata Tarik = +150 MPa)
    fatigue_unpeened = engine.predict_fatigue_life_sn(
        stress_amplitude_MPa=480.0,
        mean_stress_applied_MPa=150.0,
        residual_stress_surf_MPa=0.0 # As-machined tanpa tegangan sisa tekan
    )
    
    fatigue_peened = engine.predict_fatigue_life_sn(
        stress_amplitude_MPa=480.0,
        mean_stress_applied_MPa=150.0,
        residual_stress_surf_MPa=stress_profile['sigma_surf_MPa'] # Dengan peening
    )
    
    print(f"\n[4] EVALUASI PENINGKATAN UMUR FATIK SIKLIS (ASTM E466):")
    print(f"    - Kondisi Tanpa Peening  -> Tegangan Rata-rata Efektif: +{fatigue_unpeened['effective_mean_stress_MPa']:.1f} MPa")
    print(f"      Umur Fatik Terprediksi: {fatigue_unpeened['predicted_fatigue_cycles_Nf']:,.0f} Siklus")
    print(f"    - Kondisi DENGAN Peening -> Tegangan Rata-rata Efektif: {fatigue_peened['effective_mean_stress_MPa']:.1f} MPa (Kompresif Netto!)")
    print(f"      Umur Fatik Terprediksi: {fatigue_peened['predicted_fatigue_cycles_Nf']:,.0f} Siklus (Peningkatan Umur Tak Hingga > 10^7 Siklus)")
    print("=" * 80)
```

---

## 7. Studi Kasus Industri: Rekayasa Permukaan Poros Roda Pendarat (*Landing Gear Strut*) Baja Ultra-Tinggi AISI 4340

### 7.1 Latar Belakang & Identifikasi Masalah
Sebuah manufaktur dirgantara memproduksi silinder strut utama *landing gear* dari baja berkekuatan ultra-tinggi (*ultra-high-strength steel*) **AISI 4340** dengan perlakuan panas *quenched & tempered* ($\text{UTS} = 1950\ \text{MPa}$, Kekerasan $= 52\ \text{HRC}$). 

Selama uji sertifikasi kelelahan spektrum dinamis (*fatigue spectrum test*) sesuai regulasi FAR 25 / FAA, terjadi inisiasi retak awal pada fillet radius internal poros saat mencapai siklus $N = 85.000$ landing, jauh di bawah target *design service life* $N_{\text{target}} = 250.000$ landing. Analisis fraktografi SEM menunjukkan inisiasi retak fatik berasal dari bekas goresan mikro pemesinan (*machining micro-notches*, $R_a = 0{,}8\ \mu\text{m}$) yang memiliki tegangan sisa tarik bawaan $\sigma_{\text{res}} = +220\ \text{MPa}$ akibat panas penggerindaan finish.

### 7.2 Rancangan Parameter Proses Shot Peening Otomatis (AMS 2430)
Untuk mengeliminasi tegangan tarik dan menciptakan lapisan tekan dalam, dirancang prosedur shot peening robotik 6-axis dengan kendali loop tertutup:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 PARAMETER SHOT PEENING KOMPUTERISASI (AMS 2430) UNTUK STRUT AISI 4340                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|  Variabel Kontrol                | Nilai Parameter Terpilih                | Justifikasi Rekayasa Industri            |
+----------------------------------+-----------------------------------------+------------------------------------------+
|  Media Shot                      | Cast Steel Shot CCW-14 (Conditioned Cut | Ketahanan pecah tinggi, sferisitas >95%,  |
|                                  | Wire, Kekerasan 55 - 60 HRC, d_p=0.35mm)| mencegah kerusakan takik mikro.          |
|  Tekanan Pendorong Udara         | 4.2 bar (60.9 psi)                      | Menjaga stabilitas kecepatan partikel.   |
|  Laju Alir Media (Flow Rate)     | 3.8 kg/menit per nosel                  | Mencegah kepadatan jet berlebih (choking)|
|  Sudut Tembak (Impingement Angle)| 85 derajat +/- 5 derajat                | Memaksimalkan transfer energi kinetik.   |
|  Jarak Tembak (Stand-off)        | 150 mm                                  | Luas sebaran kerucut optimal (Pattern).  |
|  Intensitas Almen Target         | 0.008 - 0.012 in A (0.20 - 0.30 mm A)   | Sesuai kedalaman fillet kritis.          |
|  Tingkat Cakupan (Coverage)      | 200% (2 x T_98%)                        | Menghilangkan celah mikro tanpa deformasi|
+-----------------------------------------------------------------------------------------------------------------------+
```

### 7.3 Hasil Pengukuran Sinar-X (XRD) & Uji Sertifikasi Fatik
Karakterisasi tegangan sisa menggunakan difraksi sinar-X (*X-Ray Diffraction* $\sin^2\psi$ method, ASTM E915 / ISO 26910) dengan radiasi $\text{Cr-K}\alpha$ dan pengetsaan elektrokimia lapis-demi-lapis menghasilkan:
- **Tegangan Sisa Permukaan ($z=0$)**: $\sigma_{\text{surf}} = -720\ \text{MPa}$.
- **Puncak Tegangan Sisa Tekan ($\sigma_{\text{peak}}^{\text{max}}$)**: $-1180\ \text{MPa}$ pada kedalaman $z = 65\ \mu\text{m}$.
- **Kedalaman Penetrasi Tekan ($z_0$)**: $380\ \mu\text{m}$.
- **Kekasaran Permukaan Akhir**: $R_a = 1{,}15\ \mu\text{m}$ (dalam batas toleransi $R_a \le 1{,}6\ \mu\text{m}$).

**Hasil Uji Kelelahan Spektrum Siklis:**
Strut landing gear yang telah diproses shot peening berhasil melewati **$480.000$ siklus landing tanpa tanda-tanda inisiasi retak mikro** (peningkatan umur lelah sebesar $+464\%$), melampaui batas aman sertifikasi FAA.

---

## 8. Pertanyaan Uji Kompetensi & Diskusi Kritis

1. **Analisis Mekanika Kontak & Lokasi Puncak Tekan:**
   *Jelaskan secara termomekanis mengapa puncak tegangan sisa tekan maksimum ($\sigma_{\text{peak}}$) pada proses shot peening terkendali selalu berada pada zona sub-permukaan ($z_{\text{peak}} > 0$) dan bukan tepat di permukaan luar ($z=0$), serta bagaimana pemilihan diameter partikel ($d_p$) mempengaruhi kedalaman $z_{\text{peak}}$ tersebut!*

2. **Dilema Cakupan (Coverage Overpeening vs Underpeening):**
   *Mengapa dalam spesifikasi kedirgantaraan AMS 2430 cakupan peening yang berlebihan (*overpeening* $> 400 - 600\%$) dilarang secara ketat, dan apa fenomena degradasi mikrostruktur yang dapat terjadi pada permukaan logam yang mengalami overpeening?*

3. **Interaksi Kecepatan Impak & Integritas Media:**
   *Berdasarkan persamaan elastoplastis Johnson-Cook dan dinamika fluida pendorong media, bagaimana variasi distribusi ukuran butir media shot akibat keausan/fraktur partikel di dalam sirkulator dapat mengubah kurva saturasi Almen dan memicu kegagalan integritas permukaan komponen?*

---

## 9. Referensi Terverifikasi & Standar Industri

1. **SAE International (2020)**. *SAE J442: Test Strip, Holder, and Gage for Shot Peening*. SAE Standards Board, Warrendale, PA.
2. **SAE International (2021)**. *SAE J443: Procedures for Using Standard Shot Peening Test Strip*. SAE International Group.
3. **SAE Aerospace (2022)**. *AMS 2430U: Shot Peening, Automated and Computer Monitored*. SAE Aerospace Material Specifications.
4. **ASTM International (2021)**. *ASTM E466-21: Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials*. Annual Book of ASTM Standards, West Conshohocken, PA.
5. **ASTM International (2019)**. *ASTM E915-19: Standard Test Method for Verifying the Alignment of X-Ray Diffraction Instrumentation for Residual Stress Measurement*.
6. **ISO (2020)**. *ISO 26910-1: Metallic materials — Measurement of residual stress by acoustic and X-ray diffraction methods*. International Organization for Standardization, Geneva.
7. **Schulze, V. (2006)**. *Modern Mechanical Surface Treatment: States, Stability, Effects*. Wiley-VCH, Weinheim. ISBN: 978-3-527-31371-6.
8. **Champaigne, J. (2018)**. *Shot Peening Training Manual & Theory of Almen Saturation Intensity*. Electronics Inc., Mishawaka, IN.
9. **Kikuchi, S., & Komotori, J. (2023)**. *Fatigue Strength Improvement and Surface Integrity of Advanced Aerospace Alloys via Controlled Shot Peening*. *CIRP Annals - Manufacturing Technology*, 72(1), 185-190. DOI: 10.1016/j.cirp.2023.04.012.
10. **Bagherifard, S., & Guagliano, M. (2024)**. *Review on Advanced Mechanical Surface Treatments: From Conventional Peening to Severe Surface Plastic Deformation*. *International Journal of Fatigue*, 178, 108012. DOI: 10.1016/j.ijfatigue.2023.108012.
