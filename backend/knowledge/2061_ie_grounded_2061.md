# 2061 — Perilaku Penskalaan Autoclave dan Karakterisasinya dalam Pelindian Bijih Nikel Laterit pada Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan nikel laterit menghadapi tantangan operasional kronis yang berakar pada fenomena penskalaan (*scaling*) di dalam reaktor autoclave pada proses *High-Pressure Acid Leaching* (HPAL). Permasalahan ini menjadi semakin strategis seiring meningkatnya permintaan global terhadap nikel untuk aplikasi baterai *lithium-ion* kendaraan listrik (*Electric Vehicle*/EV) dan sistem penyimpanan energi stasioner. Proses HPAL, yang beroperasi pada suhu 240–270 °C dan tekanan 35–50 bar dengan larutan asam sulfat pekat, dirancang untuk mengekstraksi nikel dan kobalt dari bijih limonit/saprolit yang memiliki kadar rendah (biasanya 0,8–1,5% Ni), namun kondisi operasional ekstrem ini secara paradoks juga memicu terbentuknya kerak mineral anorganik yang sangat keras pada dinding, impeller, dan internal fitting autoclave (Dickson et al., 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Dickson, Deleau, dan Espitalier (2026) menyoroti bahwa penskalaan autoclave tidak hanya menurunkan efisiensi perpindahan panas sebesar 15–40% (tergantung ketebalan kerak), tetapi juga memaksa *unscheduled shutdown* yang dalam praktik industri mencapai 8–15% dari total *available production time*, dengan kerugian ekonomi estimasi mencapai USD 5–15 juta per kejadian pada fasilitas HPAL kapasitas 30.000–50.000 ton Ni per tahun. Karakterisasi mineralogi skala menunjukkan komposisi dominan berupa sulfat ganda (*basic metal sulfates*), hematit (α-Fe₂O₃), goetit (α-FeOOH), dan aluminium-hidroksisulfat yang terbentuk melalui mekanisme presipitasi retrograd serta dekomposisi kompleks besi(III) pada kondisi transien suhu. Andrameda dkk. (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) melaporkan bahwa penerapan pra-perlakuan desulfurisasi melalui *roasting-reduksi* secara signifikan memodifikasi komposisi residu HPAL, menurunkan kadar sulfur dan besi reaktif, sehingga berpotensi menekan laju penskalaan pada autoclave generasi berikutnya.

Urgensi teknis ini diperkuat oleh konteks geopolitik dan transisi energi: lebih dari 70% cadangan nikel global merupakan bijih laterit (berbeda dengan nikel sulfida yang semakin habis), dan hampir semua proyek HPAL baru di Indonesia (Halmahera, Morowali, Sulawesi Tenggara) menghadapi isu penskalaan yang serupa. Dari perspektif Teknik Industri, fenomena ini merupakan *bottleneck* klasik pada sistem *batch/continuous flow reactor* yang memerlukan pendekatan interdisipliner antara *chemical process engineering*, *reliability engineering*, dan *lean maintenance*. Perhitungan *Total Productive Maintenance* (TPM) menunjukkan bahwa *Overall Equipment Effectiveness* (OEE) fasilitas HPAL jarang melampaui 65%, jauh di bawah *world-class benchmark* sebesar 85%, dengan *Availability loss* terutama didominasi oleh waktu pembersihan kerak (*de-scaling downtime*).

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan penskalaan autoclave HPAL memerlukan integrasi antara kinetika reaksi heterogen, termodinamika kesetimbangan multi-fasa, dan dinamika perpindahan massa-panas. Pendekatan fundamental yang digunakan Dickson et al. (2026) berakar pada *Shrinking Core Model* (SCM) yang diterapkan pada partikel bijih laterit, dengan laju pelindian dikendalikan oleh difusi lapisan produk (*product layer diffusion*) sesuai persamaan berikut:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_p \cdot C_{H_2SO_4}^n \cdot t}{R_p^2}$$

di mana $\alpha$ adalah fraksi konversi pelindian, $k_p$ adalah konstanta laju difusi melalui produk ($m^2/s$), $C_{H_2SO_4}$ adalah konsentrasi asam sulfat bebas ($kg/m^3$), $n$ adalah orde reaksi parsial terhadap konsentrasi asam, $t$ adalah waktu tinggal (s), dan $R_p$ adalah jari-jari awal partikel bijih (m). Untuk endotermik leaching pada suhu $T$, ketergantungan suhu mengikuti hukum Arrhenius:

$$k_p = k_0 \exp\left(-\frac{E_a}{RT}\right)$$

dengan $E_a$ adalah energi aktivasi (kJ/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), dan $k_0$ adalah faktor frekuensi.

Fenomena penskalaan dimodelkan menggunakan persamaan konservasi massa pada permukaan logam autoclave, dengan laju akresi kerak $\frac{dm_s}{dt}$ yang sebanding dengan fluks presipitasi:

$$\frac{dm_s}{dt} = k_s \left(C_{Fe^{3+}}^{sat} - C_{Fe^{3+}}^{bulk}\right)^m \cdot A_{eff}$$

di mana $C_{Fe^{3+}}^{sat}$ adalah konsentrasi jenuh Fe³⁺ pada suhu operasional, $C_{Fe^{3+}}^{bulk}$ adalah konsentrasi Fe³⁺ dalam slurry, $m$ adalah orde presipitasi (umumnya 2 untuk kristalisasi heterogen), $k_s$ adalah konstanta laju penskalaan, dan $A_{eff}$ adalah luas efektif permukaan yang tersedia untuk deposisi. Pada kondisi HPAL, kelarutan Fe(III) menurun tajam sesuai persamaan termodinamika berikut:

$$\log\left[Fe^{3+}\right] = a - \frac{b}{T} + c \cdot \log[H^+] - d \cdot \log[SO_4^{2-}]$$

dengan koefisien $a$, $b$, $c$, $d$ yang ditentukan secara empiris untuk rentang suhu 220–280 °C (Dickson et al., 2026).

Untuk neraca energi autoclave, asumsi *well-mixed slurry* menghasilkan persamaan desain isotermal:

$$Q_{reaction} + Q_{injection} - Q_{loss} = \rho_{slurry} C_{p,slurry} V \frac{dT}{dt}$$

dengan $Q_{reaction} = -\Delta H_{rxn} \cdot r_{Ni} \cdot V$ adalah kalor reaksi eksotermik pelindian goetit dan limonit, $Q_{injection}$ adalah kalor dari steam injection langsung, dan $Q_{loss}$ adalah rugi kalor melalui dinding (*heat loss*). Andrameda dkk. (2024) menambahkan bahwa desulfurisasi awal menurunkan beban termal reaksi dengan mengurangi kadar pirit (FeS₂) reaktif, sehingga menurunkan $\Delta H_{rxn}$ efektif pada tahap leaching. Karakteristik perpindahan panas overall mengikuti:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{x_s}{k_s^{scale}} + \frac{x_w}{k_w} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal-eksternal, $x_s$ dan $x_w$ adalah ketebalan kerak dan dinding baja autoclave, dan $k_s^{scale}$ adalah konduktivitas termal kerak (umumnya 0,8–1,5 W/m·K untuk komposisi hematit-goetit).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis untuk mitigasi penskalaan mengikuti kerangka *Design-Operate-Maintain* yang diuraikan oleh Dickson et al. (2026). Tahap pertama adalah **karakterisasi bijih umpan** melalui analisis XRF, XRD, dan PSA (*Particle Size Analysis*) untuk menentukan rasio goetit/hematit, kadar sulfur, dan distribusi ukuran butir yang akan menjadi input model prediktif. Tahap kedua adalah **kalibrasi model kinetika** menggunakan reaktor autoclave pilot (1–10 L) untuk menentukan parameter $k_0$, $E_a$, dan orde reaksi $n$ pada berbagai suhu dan konsentrasi asam (variabel desain operasional).

```
[Diagram Alir SOP Mitigasi Penskalaan HPAL]
┌─────────────────────┐
│ 1. Sampling Bijih   │
│    (XRF, XRD, PSA)  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ 2. Pilot Leaching   │
│    (Autoclave 1-10L)│
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ 3. Scale Sampling   │
│    (SEM-EDS, XRD)   │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ 4. Kinetic Fitting  │
│    (SCM + Arrhenius)│
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ 5. Scale Prediction │
│    (Mass Balance)   │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ 6. Operational SOP  │
│    (T, P, t, Acid)  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ 7. Monitoring &     │
│    Predictive Maint. │
└─────────────────────┘
```

**Standar Prosedur Operasional (SOP)** mencakup parameter kritis berikut: (a) konsentrasi asam sulfat umpan 150–250 g/L, (b) suhu operasi 245–255 °C (optimum trade-off antara yield Ni dan laju penskalaan), (c) waktu tinggal 60–90 menit, (d) rasio solid-liquid 1:3 hingga 1:5, dan (e) kecepatan agitasi 200–350 rpm. Prosedur *descaling* terjadwal menerapkan metode *chemical cleaning* menggunakan larutan asam sulfat 10–15% pada suhu 80–90 °C selama 4–8 jam, diikuti *high-pressure water jetting* pada 200–400 bar. Andrameda dkk. (2024) merekomendasikan integrasi tahap **roasting-reduksi** pada 600–800 °C dengan penambahan agen desulfurisasi (serbuk besi atau batubara) sebelum leaching untuk mereduksi sulfat dan oksida besi reaktif, sehingga komposisi slurry umpan autoclave memiliki *Fe³⁺/Fe²⁺ ratio* yang lebih terkontrol.

Sistem monitoring berbasis IoT (*Industry 4.0*) mengintegrasikan data *skin temperature sensor*, *torque meter agitator*, dan *pressure differential* untuk deteksi dini penebalan kerak menggunakan algoritma *Random Forest Regression* dengan akurasi prediksi ketebalan kerak ±0,5 mm. Standar acuan yang digunakan meliputi **ASTM B851** (untuk material autoclave tahan korosi), **ASME BPVC Section VIII** (desain bejana tekan), dan **ISO 9001:2015** (sistem manajemen mutu).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Autoclave HPAL kompartemen tunggal volume efektif $V = 350\ m^3$, dirancang untuk memproses bijih limonit berkadar Ni 1,2% dan Fe 45% dengan *throughput* 4.500 ton bijih/hari. Parameter operasional aktual: $T = 250\ ^\circ C$ (523,15 K), $P = 42\ bar$, $C_{H_2SO_4} = 200\ g/L$, waktu tinggal $t = 75\ menit$, dan ukuran partikel rata-rata $R_p = 75\ \mu m$.

**Langkah 1 — Perhitungan Konstanta Laju pada Suhu Operasional.**
Data pilot menunjukkan $k_0 = 2{,}8 \times 10^{-4}\ m^2/s$ dan $E_a = 58{,}4\ kJ/mol$. Dengan menggunakan Persamaan Arrhenius:

$$k_p = 2{,}8 \times 10^{-4} \cdot \exp\left(-\frac{58.400}{8{,}314 \times 523{,}15}\right) = 2{,}8 \times 10^{-4} \cdot \exp(-13{,}42)$$

$$k_p \approx 2{,}8 \times 10^{-4} \times 1{,}51 \times 10^{-6} \approx 4{,}23 \times 10^{-10}\ m^2/s$$

**Langkah 2 — Konversi Pelindian pada t = 75 menit (4500 detik).**
Orde reaksi parsial $n = 0{,}85$ terhadap konsentrasi asam (umum untuk sistem goetit-H₂SO₄). Substitusi ke Persamaan SCM:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{(4{,}