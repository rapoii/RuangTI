# 2041 — Optimasi Sistem Energi Terbarukan Grid-Connected untuk Dekarbonisasi Pulau dan Integrasi Rantai Nilai Power-to-Fuel

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Grid-connected renewable energy systems flexibility in Norway islands' Decarbonization
**Jurnal & Sitasi Utama:** Siamak Hoseinzadeh, Davide Astiaso Garcia, Lizhen Huang (2023). *Renewable and Sustainable Energy Reviews*. DOI: [https://doi.org/10.1016/j.rser.2023.113658](https://doi.org/10.1016/j.rser.2023.113658)
**Sitasi Pendukung:** Jean-Hugues Boilley, Anass Berrady, Hakimi Bin Shahrel (2024). *International Journal of Hydrogen Energy*. DOI: [https://doi.org/10.1016/j.ijhydene.2024.01.262](https://doi.org/10.1016/j.ijhydene.2024.01.262)

---

## 1. Pendahuluan dan Konteks Industri

Kepulauan Norwegia, termasuk Hinnøya di wilayah Vesterålen, menghadapi paradoks struktural dalam transisi energi: di satu sisi memiliki potensi energi terbarukan kelas dunia berupa angin lepas pantai, debit hidro yang melimpah, dan radiasi matahari musiman; di sisi lain, konektivitas jaringan listrik daratan (mainland grid) terbatas oleh topografi fjord dan bentangan laut yang panjang. Hoseinzadeh, Astiaso Garcia, dan Huang (2023) dalam *Renewable and Sustainable Energy Reviews* menyoroti bahwa investasi pada sistem energi ramah lingkungan—mulai dari photovoltaic (PV), turbin angin, hingga mikrohidro—menjadi agenda strategis untuk menggantikan pembangkitan diesel konvensional yang selama ini menopang kebutuhan pulau-pulau terpencil Norwegia (Hoseinzadeh dkk., 2023, DOI: [10.1016/j.rser.2023.113658](https://doi.org/10.1016/j.rser.2023.113658)). Urgensi ini diperkuat oleh kebijakan European Green Deal yang mentargetkan penurunan emisi gas rumah kaca minimal 55% pada 2030, serta disparitas tarif listrik pulau yang mencapai 30–45% lebih tinggi dibanding daratan.

Konteks industri yang melatarbelakangi riset ini bersifat multi-dimensi: (1) dimensi *teknis* berupa kebutuhan akan sizing optimal hybrid system yang mampu menoleransi variabilitas angin dan intermitensi PV; (2) dimensi *ekonomis* berupa perhitungan Net Present Cost (NPC) dan Levelized Cost of Energy (LCOE) yang sensitif terhadap discount rate Norwegia (~4–6%); dan (3) dimensi *sosial-ekologis* berupa jaminan keandalan pasokan bagi beban rumah tangga, industri kecil-menengah, serta sektor transportasi yang semakin elektrifikasi. Hoseinzadeh dkk. (2023) merumuskan tiga skenario konsumsi—industrial/domestic load, transportation load, dan household load alone—untuk mengkuantifikasi fleksibilitas sistem grid-connected tersebut. Pendekatan ini penting bagi *industrial engineer* karena memaksa integrasi variabel beban, profil pembangkitan, dan kapasitas storage dalam satu kerangka optimasi techno-economic.

Keterkaitan langsung dengan riset Boilley, Berrady, dan Shahrel (2024) yang dipublikasikan di *International Journal of Hydrogen Energy* (DOI: [10.1016/j.ijhydene.2024.01.262](https://doi.org/10.1016/j.ijhydene.2024.01.262)) adalah pada konsep *surplus-to-fuel*. Ketika pulau menghasilkan e-H₂ atau syngas berlebih dari intermitensi renewable, teknologi Fischer-Tropsch dan Solid Oxide Electrolyzer Cell (SOEC) memungkinkan konversi menjadi Sustainable Aviation Fuel (SAF) atau e-kerosene. Boilley dkk. (2024) menunjukkan bahwa efisiensi global *power-to-jet-fuel* mencapai 48,06% pada konfigurasi SOEC komersial dan secara teoretis dapat ditingkatkan hingga 65,74% melalui optimasi rekayasa reaksi. Dengan demikian, surplus energi terbarukan pulau tidak hanya melayani beban lokal tetapi juga dapat di-*cascade* ke rantai nilai dekarbonisasi hard-to-abate sector seperti aviasi. Inilah ruang kontribusi teknik industri: merancang *flexibility envelope* yang memungkinkan dispatch energi antara beban domestik, charging station kendaraan listrik, dan plant power-to-liquid tanpa mengorbankan *system reliability index*.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis dalam studi Hoseinzadeh dkk. (2023) berakar pada formulasi techno-economic HOMER (Hybrid Optimization of Multiple Energy Resources), dengan tiga pilar matematis utama: pemodelan sumber energi, optimasi biaya, dan analisis sensitivitas.

### 2.1 Pemodelan Output Daya Angin

Daya mekanik yang diekstraksi turbin angin mengikuti persamaan kubik kecepatan angin:

$$P_w = \frac{1}{2} \rho_{air} \cdot A \cdot v^3 \cdot C_p \cdot \eta_g$$

di mana $\rho_{air} = 1{,}225\ \text{kg/m}^3$ adalah densitas udara, $A = \pi r^2$ adalah area swept rotor, $v$ adalah kecepatan angin pada hub-height, $C_p$ adalah power coefficient (Betz limit 0{,}593), dan $\eta_g$ adalah efisiensi generator (umumnya 0,90–0,96). Hubungan non-linear ini menjelaskan mengapa kapasitas terpasang angin di Hinnøya (rata-rata kecepatan 8–10 m/s pada 80–100 m hub-height) memberikan *capacity factor* 35–45%, jauh di atas rata-rata Eropa 25%.

### 2.2 Pemodelan Output PV

Output panel PV dimodelkan menggunakan persamaan derating:

$$P_{PV} = Y_{PV} \cdot f_{PV} \cdot \frac{G_T}{G_{T,STC}} \cdot \left[1 + \alpha_P (T_c - T_{c,STC})\right]$$

dengan $Y_{PV}$ adalah rated capacity (kW), $f_{PV}$ derating factor (~0,90), $G_T$ radiasi aktual (kW/m²), $G_{T,STC} = 1\ \text{kW/m}^2$, $\alpha_P$ koefisien suhu daya ($\sim -0{,}4\%/^{\circ}\text{C}$), dan $T_c$ suhu sel.

### 2.3 Net Present Cost dan Capital Recovery Factor

Fungsi objektif optimasi HOMER meminimalkan NPC:

$$NPC = \frac{C_{ann,tot}}{CRF(i, n)}$$

dengan Capital Recovery Factor:

$$CRF(i, n) = \frac{i(1+i)^n}{(1+i)^n - 1}$$

di mana $i$ adalah discount rate real dan $n$ adalah *project lifetime* (umumnya 20–25 tahun untuk proyek energi). LCOE turunan:

$$LCOE = \frac{\sum_{t=0}^{n} \frac{C_t}{(1+i)^t}}{\sum_{t=0}^{n} \frac{E_t}{(1+i)^t}}$$

### 2.4 Reaksi Fischer-Tropsch dan Stoikiometri SAF

Dari Boilley dkk. (2024), reaksi inti Fischer-Tropsch untuk menghasilkan fraksi jet-fuel ($-\text{CH}_2-$) mengikuti stoikiometri:

$$n\,\text{CO} + (2n+1)\,\text{H}_2 \rightarrow \text{C}_n\text{H}_{2n+2} + n\,\text{H}_2\text{O}$$

Selektivitas terhadap rantai C₉–C₁₅ (fraksi kerosene) dikontrol oleh parameter Anderson-Schulz-Flory $\alpha$, dengan target $>0{,}80$ untuk e-kerosene selectivity yang dilaporkan Boilley dkk. (2024).

### 2.5 Efisiensi Global Power-to-Jet-Fuel

Rantai efisiensi didefinisikan sebagai:

$$\eta_{global} = \eta_{SOEC} \cdot \eta_{FT} \cdot \eta_{cracking} \cdot \eta_{separation}$$

dengan $\eta_{SOEC}$ efisiensi electrolyzer (48,06% pada konfigurasi komersial; Boilley dkk., 2024), $\eta_{FT}$ efisiensi sintesis Fischer-Tropsch, $\eta_{cracking}$ efisiensi hydrocracker, dan $\eta_{separation}$ efisiensi distilasi fraksi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Hoseinzadeh dkk. (2023) menyusun prosedur sistematis dalam lima tahapan yang dapat diadopsi sebagai SOP rekayasa untuk proyek hybrid renewable di pulau terpencil:

**Tahap 1 — Akuisisi Data Site.** Pengumpulan *time-series* irradiansi matahari, kecepatan angin (setinggi hub), debit air, dan profil beban (load profile) selama minimal satu tahun. Sumber data meliputi NASA POWER, NREL, dan stasiun meteorologi lokal Norwegia (MET Norway). Resolusi temporal minimal 1 jam.

**Tahap 2 — Definisi Skenario Konsumsi.** Menyusun kurva beban untuk tiga skenario:
- *Skenario A* — *Industrial/domestic load*: profil gabungan rumah tangga (~3.000–5.000 kWh/tahun/unit) dan industri kecil (~50–200 kWh/hari).
- *Skenario B* — *Transportation load*: tambahan beban charging station EV dan feri listrik (~500–1.500 kWh/hari).
- *Skenario C* — *Household alone*: baseline residensial tanpa beban industri.

**Tahap 3 — Komposisi Sistem.** Merancang arsitektur grid-connected dengan komponen: PV array, wind turbine, hydro plant, baterai Lithium-ion, bi-directional converter (AC/DC), dan sambungan grid. Setiap komponen memiliki parameter biaya CAPEX, OPEX, *replacement cost*, dan lifetime.

**Tahap 4 — Simulasi HOMER.** Menjalankan *search space optimization* terhadap variabel diskret (jumlah PV, jumlah.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
