# 2425 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) Sekitar 222°C untuk Integrasi dengan Pompa Panas Suhu Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 25% dari konsumsi energi final global dan menghasilkan emisi CO₂ proses yang signifikan, dengan kebutuhan panas proses (process heat) di atas 150°C mencakup lebih dari separuh permintaan energi termal manufaktur (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses merupakan tantangan teknis dan ekonomi yang krusial karena keterbatasan infrastruktur jaringan listrik, variabilitas sumber energi terbarukan, serta profil beban termal industri yang tidak stasioner. Dalam konteks ini, Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti bahwa integrasi *High-Temperature Heat Pump* (HTHP) dengan unit *Latent Heat Thermal Energy Storage* (LHTES) berbasis material perubahan fase (PCM) menawarkan jalur teknis yang menjanjikan untuk meningkatkan fleksibilitas operasional, efisiensi eksergi, dan kemampuan *peak shaving* pada fasilitas industri.

Permasalahan fundamental yang diangkat oleh Toloza dkk. (2026) adalah konduktivitas termal yang rendah pada sebagian besar PCM—umumnya berada pada rentang $0,2$–$1,0 \text{ W/(m·K)}$—yang menyebabkan laju transfer panas selama proses pelelehan dan pembekuan menjadi bottleneck performa. Konfigurasi *shell-and-tube* dipilih karena kekompakan volumetriknya yang tinggi, ketahanan struktural pada tekanan internal, dan kapasitas untuk ditingkatkan melalui penambahan *fins*, *metal foams*, atau *wool* logam di dalam cangkang. Studi ini secara khusus memodelkan unit LHTES vertikal dengan PCM eutektik yang memiliki titik leleh di sekitar $T_m \approx 222°\text{C}$, suhu yang relevan untuk aplikasi HTHP berbasis siklus refrigeran alami atau campuran HFC/HFO generasi baru, serta untuk pemulihan panas buangan (*waste heat recovery*) dari proses industri seperti pengeringan, sterilisasi, dan distilasi.

Kontribusi utama naskah tersebut adalah pengembangan model numerik transien dalam bahasa pemodelan *Modelica*—yang menggunakan penyelesaian persamaan diferensial-aljabar (DAE) untuk sistem multi-domain—sehingga memungkinkan simulasi perilaku pelelehan dan pembekuan PCM secara coupled dengan dinamika fluida pemanas di dalam tabung. Pendekatan ini secara langsung menjawab kebutuhan insinyur Teknik Industri akan alat bantu keputusan (*decision support system*) yang mampu memprediksi *State of Charge* (SoC) termal, durasi siklus *charge/discharge*, dan degradasi performa seiring waktu operasional. Dengan latar belakang tersebut, modul 2425 ini akan menguraikan landasan matematis, metodologi implementasi, serta studi kasus kuantitatif yang dapat diadopsi oleh praktisi industri untuk evaluasi kelayakan dan perancangan sistem LHTES-HTHP.

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien yang dikembangkan Toloza dkk. (2026) mengandalkan formulasi enthalpy-porosity untuk menangani front perubahan fase tanpa pelacakan interface eksplisit. Domain PCM diidealisasi sebagai silinder annular di sekitar tabung HTF, dengan asumsi *axisymmetric* dan perpindahan panas dominan secara radial. Persamaan konservasi energi dalam formulasi enthalpy dapat ditulis sebagai:

$$\rho_{pcm} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r k_{pcm,\text{eff}} \frac{\partial T}{\partial r} \right) + \rho_{pcm} c_{p,l} u_r \frac{\partial T}{\partial r}$$

di mana $h$ adalah entalpi spesifik (J/kg), $\rho_{pcm}$ densitas PCM (kg/m³), $k_{pcm,\text{eff}}$ konduktivitas termal efektif (W/(m·K)) yang memperhitungkan kontribusi konveksi alami, $c_{p,l}$ kapasitas panas fasa cair (J/(kg·K)), dan $u_r$ kecepatan radial akibat konveksi alami (m/s). Hubungan antara entalpi, temperatur, dan fraksi cair $f_l$ dinyatakan melalui:

$$h(T) = \int_{T_{ref}}^{T} c_p \, dT + f_l(T) \cdot L$$

dengan $L$ adalah panas laten pelelehan (J/kg). Kurva $f_l(T)$ umumnya dimodelkan sebagai fungsi sigmoid (smooth Heaviside) untuk memastikan kontinuitas diferensial:

$$f_l(T) = \frac{1}{2}\left(1 + \frac{2}{\pi} \arctan\left(\frac{T - T_m}{\Delta T/2}\right)\right)$$

di mana $\Delta T$ adalah lebar interval *mushy zone* (tipikal $1$–$5$ K). Konveksi alami di fasa cair ditangkap melalui aproksimasi *effective thermal conductivity* yang bergantung pada bilangan Rayleigh lokal:

$$k_{pcm,\text{eff}} = k_{pcm,s} \cdot \left(1 + C \cdot \text{Ra}_r^{\,n}\right), \quad \text{Ra}_r = \frac{g \beta (T - T_m) r^3}{\nu \alpha}$$

dengan $g$ percepatan gravitasi (9,81 m/s²), $\beta$ koefisien ekspansi termal (1/K), $\nu$ viskositas kinematik (m²/s), $\alpha = k/(\rho c_p)$ difusivitas termal, serta konstanta empiris $C \approx 0,025$ dan $n \approx 0,5$ yang lazim diadopsi untuk enclosure vertikal annular.

Untuk sisi HTF di dalam tabung, persamaan momentum dan energi satu-dimensi diselesaikan dengan pendekatan *finite volume* atau *method of lines*:

$$\rho_{htf} c_{p,htf} A_c \frac{\partial T_{htf}}{\partial t} + \dot{m} c_{p,htf} \frac{\partial T_{htf}}{\partial z} = h_{conv} \pi d_i (T_{wall} - T_{htf})$$

dengan $A_c$ luas penampang aliran, $\dot{m}$ laju aliran massa, $h_{conv}$ koefisien konveksi paksa dihitung dari korelasi Dittus-Boelter $\text{Nu} = 0{,}023 \,\text{Re}^{0,8}\,\text{Pr}^{0,4}$, dan $d_i$ diameter dalam tabung. Kopling termal antardomain terjadi melalui fluks panas di dinding tabung:

$$q'' = U (T_{htf} - T_{pcm}) = \left(\frac{1}{h_{conv}} + \frac{\ln(d_o/d_i)}{2\pi k_{wall}} + \frac{1}{h_{pcm}}\right)^{-1} (T_{htf} - T_{pcm})$$

di mana $h_{pcm}$ adalah koefisien transfer panas efektif sisi PCM yang bervariasi selama proses leleh. Kondisi batas radial luar mengasumsikan permukaan adiabatik (insulasi), sementara kondisi awal ditetapkan $T(r,0) = T_{init} < T_m$ untuk mode *charging* atau $T(r,0) > T_m$ untuk *discharging*. Diskretisasi spatial menggunakan skema *finite difference* dengan langkah $\Delta r$ adaptif di sekitar interface, dan integrasi temporal menggunakan solver DASSL atau LSODAR dalam lingkungan Modelica. Model telah divalidasi terhadap benchmark numerik dan eksperimental (Toloza dkk., 2026) dengan deviasi temperatur prediksi-rata pengukuran di bawah 4%.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES-HTHP di fasilitas industri mengikuti kerangka SOP berlapis yang dimulai dari tahap konseptual hingga commissioning. Prosedur ini selaras dengan standar ISO 50001 (Sistem Manajemen Energi) dan ASME Boiler & Pressure Vessel Code untuk aspek integritas mekanik.

**Tahap 1 — Karakterisasi Kebutuhan Termal.** Insinyur Teknik Industri melakukan audit energi (berdasarkan ISO 50002) untuk mengidentifikasi profil beban termal harian, mingguan, dan musiman. Parameter kunci yang dikumpulkan mencakup daya termal puncak $Q_{peak}$ (kW), suhu proses $T_{proc}$ (°C), durasi operasi (jam/hari), dan toleransi fluktuasi suhu ($\pm \Delta T$). Data ini menjadi input untuk penentuan kapasitas penyimpanan minimum $E_{min} = Q_{peak} \cdot t_{op}$ dan pemilihan PCM dengan $T_m$ dalam rentang $T_{proc} \pm 10°\text{C}$.

**Tahap 2 — Seleksi PCM dan HTF.** Berdasarkan rekomendasi Toloza dkk. (2026), PCM eutektik dengan $T_m \approx 222°\text{C}$ dipertimbangkan dari keluarga garam nitrat (misalnya campuran ternary $\text{KNO}_3$-$\text{NaNO}_3$-$\text{LiNO}_3$) atau campuran organik eutektik khusus. Kriteria seleksi mencakup: panas laten $L > 150$ kJ/kg, stabilitas siklus termal $> 3000$ siklus, tidak korosif terhadap baja karbon/stainless steel 316L, dan titik nyala HTF di atas suhu operasi maksimum. HTF yang lazim adalah *thermal oil* (misalnya Therminol VP-1 dengan rentang operasi 12–400°C) atau fluida *molten salt* untuk aplikasi di atas 300°C.

**Tahap 3 — Desain Termal & Hidrolik.** Geometri *shell-and-tube* dirancang dengan parameter desain berikut: diameter dalam tabung $d_i = 20$–$50$ mm, rasio pitch-to-diameter $P/d = 1,25$–$1,5$, jumlah tabung $N_t$ mengikuti kapasitas, dan panjang aktif $L_{act} = 2$–$6$ m. Laju aliran HTF $\dot{m}$ dioptimasi untuk menyeimbangkan koefisien transfer panas dan penurunan tekanan $\Delta P < 50$ kPa, mengikuti korelasi $\Delta P = f(L/d_i)(\rho u^2/2)$.

**Tahap 4 — Pemodelan & Simulasi.** Model transien dalam Modelica (atau alternatif Dymola/OpenModelica) dibangun mengikuti formulasi pada Bagian 2, kemudian divalidasi melalui perbandingan dengan data eksperimental atau benchmark numerik (misalnya kontes numerik *Phase Change Heat Transfer* oleh University of Padova). Analisis sensitivitas dilakukan terhadap parameter-parameter kritis: $k_{pcm}$, $h_{conv}$, $T_{in,htf}$, dan $\dot{m}$.

**Tahap 5 — Integrasi dengan HTHP.** Unit LHTES dipasang sebagai buffer termal antara kompresor HTHP dan beban proses. Diagram alir integrasi ditunjukkan secara skematik sebagai berikut: *HTHP → Evaporator → [HTF Loop] → LHTES Charging → LHTES → HTF Loop → Process Load / LHTES Discharging*. Katup tiga-arah (*three-way valve*) dan kontrol PID menjaga $T_{out}$ LHTES dalam rentang setpoint proses, sementara sensor temperatur multi-titik (minimal 8 titik radial) memantau distribusi SoC.

**Tahap 6 — Commissioning, Monitoring & Predictive Maintenance.** Setelah commissioning, sistem dipantau melalui SCADA dengan *Key Performance Indicators* (KPI): efisiensi round-trip $\eta_{rt} = E_{discharged}/E_{charged}$, laju degradasi kapasitas $\leq 1\%$/tahun, dan COP sistem terintegrasi. Pemeliharaan prediktif berbasis *machine learning* (misalnya LSTM pada data sensor 5-menit) memprediksi kebutuhan *thermal cycling* untuk mencegah *thermal fatigue*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik pengolahan susu di Eropa membutuhkan $Q_{peak} = 500$ kW panas proses pada $T_{proc} = 230°\text{C}$ selama $t_{op} = 8$ jam per hari untuk proses steril