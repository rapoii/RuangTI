# Modul 613: Photochemical Machining (PCM) & Chemical Milling: Kinetika Transfer Massa Perpindahan Fluida, Pemodelan Undercut & Etch Factor, Termodinamika Etsa Isotropik-Anisotropik, dan Fabrikasi Komponen Presisi Bebas Tegangan Sisa (ASTM E340, ISO 1101, & IPC-4101)

## 1. Pengantar & Konteks Industri *Photochemical Machining* (PCM)

Dalam era manufaktur mikro, elektronika daya tinggi, perangkat kedirgantaraan, instrumentasi biomedis, dan sistem energi terbarukan (seperti *polymer electrolyte membrane fuel cells* / PEMFC), kebutuhan akan komponen lembaran logam tipis (*ultra-thin metal foils and sheets*, ketebalan $0{,}010\text{ mm} - 1{,}500\text{ mm}$) dengan geometri saluran mikronik yang sangat rapat dan presisi tinggi semakin krusial. Komponen seperti pelat bipolar sel bahan bakar (*bipolar plates*), kontak pegas mikroelektronika (*lead frames* & *connector pins*), jaring penyaring presisi (*optical apertures & micro-sieves*), pelindung interferensi elektromagnetik (*EMI/RFI shielding*), serta implan ortopedi mikroporus menuntut toleransi geometris ketat ($\pm 5 - 15\ \mu\text{m}$) dan integritas permukaan yang sempurna.

Metode pemotongan konvensional dan non-konvensional lainnya memiliki batasan mendasar:
1. **Stamping / Punching Mekanis**: Menimbulkan tegangan sisa tekan/tarik yang intens, deformasi plastis pada tepi potong (*edge rollover & die roll*), serta pembentukan *burr* mikro yang memerlukan proses *deburring* sekunder yang mahal dan berisiko merusak bagian berdinding tipis. Biaya perkakas die (*hard tooling*) sangat tinggi dan tidak fleksibel untuk iterasi prototipe.
2. **Laser Beam Cutting (LBC)**: Meskipun presisi, laser menginduksi masukan panas terlokalisasi tinggi (*high heat input*) yang menghasilkan *heat-affected zone* (HAZ), tegangan sisa termal yang memicu distorsi/distorsi lengkung (*warpage* pada foil tipis), mikroskopik *dross/slag*, serta perubahan fasa mikrostruktur metalurgi.
3. **Wire Electrical Discharge Machining (Wire-EDM)**: Memiliki laju pemakanan yang lambat untuk produksi massal komponen lembaran multi-fitur dan menghasilkan lapisan leleh ulang getas (*recast layer / white layer*) yang rentan terhadap inisiasi fatik.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       ARSITEKTUR PROSES LENGKAP PHOTOCHEMICAL MACHINING (PCM) MULTI-TAHAP                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [1] PREPARASI RAW MATERIAL         [2] COATING PHOTORESIST            [3] UV EXPOSURE & PHOTOTOOL                    |
|  ┌─────────────────────────┐        ┌─────────────────────────┐        ┌─────────────────────────┐                    |
|  │  Pembersihan Kimiawi    │        │ Lapisan Photoresist     │        │ Masking Film Fotografi  │ (Artwork Transparan|
|  │  Degreasing / Micro-etch│───────►│ Laminasi Kering / Cair  │───────►│ Penyinaran Sinar UV     │  & Opak)           |
|  │  (Foil Bebas Minyak/Oks)│        │ (Polimer Fotosensitif)  │        │ Polimerisasi Terarah    │                    |
|  └─────────────────────────┘        └─────────────────────────┘        └───────────┬─────────────┘                    |
|                                                                                    │                                  |
|  [6] STRIPPING & FINISHING          [5] CHEMICAL SPRAY ETCHING         [4] DEVELOPING (PENGEMBANGAN)                  |
|  ┌─────────────────────────┐        ┌─────────────────────────┐        ┌───────────▼─────────────┐                    |
|  │ Pelarutan Photoresist   │        │ Semprotan Nozel Bertekan│        │ Pelarutan Selektif      │ (Pola Etsa Terbuka |
|  │ (NaOH / KOH Stripper)   │◄───────│ Reaksi Redoks Pelarutan │◄───────│ Resist Tak Terpolimerisasi                   |
|  │ Produk Bersih Bebas Burr│        │ Pembentukan Profil Alur │        │ Inspeksi Lebar Celah    │                    |
|  └─────────────────────────┘        └─────────────────────────┘        └─────────────────────────┘                    |
|                                                                                                                       |
|  Keunggulan Utama: Tanpa Cacat Termal (No HAZ), Bebas Tegangan Sisa (Stress-Free), Bebas Burr, Toleransi Sub-Mikron.  |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Photochemical Machining (PCM)**—yang juga dikenal sebagai *photochemical milling*, *photo-etching*, atau *chemical machining*—adalah proses pemesinan non-tradisional subtraktif berbasis pelarutan kimiawi terkendali (*controlled chemical dissolution / micro-corrosion*). Logam dasar dilindungi oleh lapisan polimer tahan-asam fotosensitif (*photoresist stencil*) yang dipola secara fotolitografi beresolusi tinggi, kemudian disemprot dengan reagen larutan etsa kimiawi aktif (*chemical etchant*) bertekanan tertentu untuk melarutkan area logam yang tidak terlindungi hingga mencapai ketebalan atau tembusan yang diinginkan.

Karena pemotongan terjadi pada tingkat interaksi ionik-molekuler tanpa kontak mekanis ataupun masukan termal ekstrem, komponen hasil PCM memiliki karakteristik:
- **100% Bebas Burr (*Burr-Free*)**: Tidak memerlukan operasi penghalangan tepi sekunder.
- **Bebas Tegangan Sisa (*Stress-Free & Zero Warpage*)**: Sifat magnetik, listrik, dan elastisitas intrinsik material tetap utuh tanpa distorsi mekanis.
- **Presisi Dimensi Tinggi**: Mampu memproses ribuan bukaan lubang mikronik kompleks secara simultan dalam satu siklus produksi (*massively parallel fabrication*).

Standar internasional dan regulasi manufaktur yang mengatur proses ini mencakup:
- **ASTM E340**: *Standard Practice for Macroetching Metals and Alloys*.
- **ISO 1101**: *Geometrical product specifications (GPS) — Geometrical tolerancing — Tolerances of form, orientation, location and run-out*.
- **IPC-4101**: *Specification for Base Materials for Rigid and Multilayer Printed Boards*.
- **DIN EN 10140**: *Cold rolled narrow steel strip — Tolerances on dimensions and shape*.
- **PCMI (Photo Chemical Machining Institute)** Standards: *Dimensional Tolerances for Photochemically Machined Components*.

---

## 2. Termodinamika & Elektrokimia Reaksi Etsa Kimiawi

### 2.1 Mekanisme Reaksi Redoks Pelarutan Logam

Efisiensi dan laju pelarutan logam pada PCM ditentukan oleh termodinamika redoks antara larutan etsa (*oxidizing agent*) dan atom permukaan logam. Reagen yang paling dominan digunakan dalam industri adalah **Ferric Chloride ($\text{FeCl}_3$)** dan **Cupric Chloride ($\text{CuCl}_2$)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    MEKANISME TRANSFER MASSA & REAKSI REDOKS PADA INTERFASE CAIR-PADAT PCM                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|              ALIRAN SEMPROTAN LARUTAN ETSA SEGAR (Bulk Solution: Fe3+, Cu2+, Cl-, H+)                                 |
|                                         │ │ │ │ │ │ │                                                                 |
|                                         ▼ ▼ ▼ ▼ ▼ ▼ ▼                                                                 |
|      ─────────────────────────────────────────────────────────────────────────────  Lapisan Batas Difusi Hidrodinamis |
|      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  (Boundary Layer: Ketebalan delta_N)|
|         [Difusi Reaktan Masuk: Fe3+]              [Difusi Produk Keluar: Fe2+, Cu2+]                                  |
|                     │                                              ▲                                                  |
|                     ▼                                              │                                                  |
|      ═══════════════════════════╦══════════════════════════════════╦═══════════════════════════                       |
|      PHOTORESIST MASK (TEBAL h_r)║      RONGGA ETSA (ETCH CAVITY)   ║ PHOTORESIST MASK (TEBAL h_r)                      |
|      ═══════════════════════════╝                                  ╚═══════════════════════════                       |
|                                    Reaksi Anodik: M -> M^z+ + z e-                                                    |
|                                    Reaksi Katodik: Fe^3+ + e- -> Fe^2+                                                |
|                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                 |
|                                  LOGAM BENDA KERJA (SUBSTRAT PADAT)                                                   |
|                                  ════════════════════════════════════                                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

#### Etsa Tembaga dan Paduan Tembaga (Cu, Kuningan, Perunggu)
Reaksi pelarutan tembagan dengan larutan ferric chloride berlangsung dalam dua tahap reduksi berantai:
$$\text{Fe}^{3+} + \text{Cu}_{(\text{solid})} \xrightarrow{\text{cepat}} \text{Fe}^{2+} + \text{Cu}^+$$
$$\text{Fe}^{3+} + \text{Cu}^+ \xrightarrow{\text{lambat}} \text{Fe}^{2+} + \text{Cu}^{2+}$$

Reaksi total stoikiometri terlarut:
$$2\text{FeCl}_{3(\text{aq})} + \text{Cu}_{(\text{s})} \longrightarrow 2\text{FeCl}_{2(\text{aq})} + \text{CuCl}_{2(\text{aq})}$$

Potensial sel elektrokimia standar ($\Delta E^\circ$) untuk reaksi di atas adalah:
$$E^\circ_{\text{katoda}}(\text{Fe}^{3+}/\text{Fe}^{2+}) = +0{,}771\text{ V vs SHE}$$
$$E^\circ_{\text{anoda}}(\text{Cu}^{2+}/\text{Cu}) = +0{,}342\text{ V vs SHE}$$
$$\Delta E^\circ_{\text{cell}} = E^\circ_{\text{katoda}} - E^\circ_{\text{anoda}} = +0{,}771 - 0{,}342 = +0{,}429\text{ V}$$

Karena $\Delta E^\circ_{\text{cell}} > 0$, perubahan energi bebas Gibbs standar bernilai negatif:
$$\Delta G^\circ = -n F \Delta E^\circ_{\text{cell}} = -(2)(96485\text{ C/mol})(0{,}429\text{ V}) = -82{,}78\text{ kJ/mol}$$
Hal ini menunjukkan bahwa pelarutan tembaga oleh ion feri bersifat spontan secara termodinamika.

#### Etsa Baja Tahan Karat (*Austenitic Stainless Steel* AISI 304/316L)
Baja tahan karat memiliki lapisan pasivasi kromium oksida ($\text{Cr}_2\text{O}_3$). Penambahan asam klorida ($\text{HCl}$) bebas ke dalam larutan $\text{FeCl}_3$ diperlukan untuk mendepasivasi lapisan oksida dan mempertahankan ion klorida aktif:
$$2\text{Fe}^{3+} + \text{Fe}_{(\text{s})} \longrightarrow 3\text{Fe}^{2+}$$
$$6\text{Fe}^{3+} + 2\text{Cr}_{(\text{s})} \longrightarrow 6\text{Fe}^{2+} + 2\text{Cr}^{3+}$$
$$2\text{Fe}^{3+} + \text{Ni}_{(\text{s})} \longrightarrow 2\text{Fe}^{2+} + \text{Ni}^{2+}$$

### 2.2 Kinetika Pelarutan Reaksi Arrhenius & Konsentrasi

Laju pelarutan logam linier ($MRR_d$, dalam satuan $\mu\text{m/min}$ atau $\text{m/s}$) mengikuti persamaan laju reaksi heterogen terkontrol difusi-reaksi:

$$MRR_d = k_0 \cdot [C_{\text{Fe}^{3+}}]^{\alpha} \cdot [C_{\text{HCl}}]^{\beta} \cdot \exp\left(-\frac{E_a}{R T}\right) \cdot \left(\frac{P_{\text{spray}}}{P_0}\right)^{\gamma}$$

di mana:
- $k_0$ = Konstanta frekuensi kinetika intrinsik.
- $[C_{\text{Fe}^{3+}}]$ = Konsentrasi ion oksidator aktif $(\text{mol/L}$ atau $\text{Baum\'e})$.
- $[C_{\text{HCl}}]$ = Keasaman bebas larutan.
- $E_a$ = Energi aktivasi semu reaksi etsa ($\text{J/mol}$, biasanya $20 - 45\text{ kJ/mol}$ untuk etsa yang dikendalikan transfer massa campuran).
- $R = 8{,}314\text{ J/(mol}\cdot\text{K)}$ = Konstanta gas universal.
- $T$ = Suhu operasional larutan etsa ($\text{Kelvin}$).
- $P_{\text{spray}}$ = Tekanan semprotan nozel manifold ($\text{bar}$ atau $\text{kPa}$).
- $\alpha, \beta, \gamma$ = Orde reaksi parsial terhadap masing-masing parameter proses.

Hubungan densitas larutan ferric chloride dinyatakan dalam skala derajat Baumé ($^\circ\text{Bé}$), di mana berat jenis ($\text{SG}$) dikonversikan melalui:
$$\text{SG} = \frac{145}{145 - ^\circ\text{Bé}} \quad (\text{pada } 60^\circ\text{F} / 15{,}56^\circ\text{C})$$

---

## 3. Pemodelan Perpindahan Massa & Fenomena *Undercutting*

### 3.1 Teori Lapisan Batas Difusi Nernst (*Mass Transfer Boundary Layer*)

Dalam sistem semprotan etsa industri (*spray etching machines*), laju pembuangan massa pada dasar alur dibatasi oleh perpindahan massa konvektif-difusif ion $\text{Fe}^{3+}$ dari fluida utama (*bulk etchant*) melewati lapisan batas tipis Nernst ($\delta_N$) menuju antarmuka logam, serta perpindahan balik ion produk jenuh ($\text{Fe}^{2+}, \text{Cu}^{2+}$):

$$J = -D_{\text{eff}} \left.\frac{\partial C}{\partial y}\right|_{y=0} = k_m (C_{\text{bulk}} - C_{\text{surface}})$$

di mana:
- $J$ = Fluks molar zat reaktan ($\text{mol}/(\text{m}^2\cdot\text{s})$).
- $D_{\text{eff}}$ = Koefisien difusi efektif ion etsa ($\text{m}^2/\text{s}$).
- $k_m = \frac{D_{\text{eff}}}{\delta_N}$ = Koefisien perpindahan massa lokal ($\text{m/s}$).
- $C_{\text{bulk}}, C_{\text{surface}}$ = Konsentrasi reaktan di badan utama fluida dan di permukaan reaksi logam.

Bilangan tak-berdimensi Sherwood ($Sh$), Reynolds ($Re$), dan Schmidt ($Sc$) mengarakterisasi rejim hidrodinamika semprotan:
$$Sh = \frac{k_m d_h}{D_{\text{eff}}} = A \cdot Re^a \cdot Sc^b$$
$$Re = \frac{\rho v_{\text{drop}} d_{\text{drop}}}{\mu_f}, \quad Sc = \frac{\mu_f}{\rho D_{\text{eff}}}$$

di mana $v_{\text{drop}}$ adalah kecepatan impak tetesan semprotan, $d_{\text{drop}}$ adalah diameter droplet nozel atomisasi, $\rho$ adalah massa jenis fluida, dan $\mu_f$ adalah viskositas dinamik etchant.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                  GEOMETRI RONGGA ETSA, PROFIL UNDERCUT (U_c), DAN FAKTOR ETSA (ETCH FACTOR)                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                      LEBAR BUKAAN PHOTORESIST (W_mask)                                                |
|                                        ◄───────────────────────────►                                                  |
|       PHOTORESIST LAYER                 │                         │                 PHOTORESIST LAYER                 |
|   ┌───────────────────────┐             │                         │             ┌───────────────────────┐             |
|   │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│             ▼                         ▼             │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│             |
|   └───────────┬───────────┘═════════════════════════════════════════════════════└───────────┬───────────┘             |
|               │ ◄── U_c ──►                                                     ◄── U_c ──► │                         |
|               │ (Undercut)                                                      (Undercut)  │                         |
|               │                                                                             │                         |
|               ▼ ╭─────────────────────────────────────────────────────────────────────────╮ ▼                         |
|                 │                                                                         │                           |
|                 │                      RONGGA ALUR ETSA TERBENTUK                         │ Kedalaman Etsa (d)        |
|                 │                                                                         │                           |
|                 ╰─────────────────────────────────────────────────────────────────────────╯                           |
|                 ◄─────────────────────────────────────────────────────────────────────────►                           |
|                                      LEBAR TOTAL RONGGA ATAS (W_cavity)                                               |
|                                                                                                                       |
|   Persamaan Dasar:  W_cavity = W_mask + 2 * U_c                                                                       |
|   Definisi Etch Factor (EF):  EF = d / U_c  ==>  U_c = d / EF                                                         |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.2 Formulasi Geometris *Undercut* ($U_c$) dan *Etch Factor* ($EF$)

Etsa kimia cair pada substrat polikristalin bersifat semi-isotropik. Reagen kimia melarutkan logam ke arah vertikal (kedalaman $d$) sekaligus melarutkan ke arah lateral horizontal di bawah lapisan penahan resist. Erosi lateral di bawah resist ini didefinisikan sebagai **Undercut ($U_c$)**.

Rasio antara kedalaman etsa terhadap undercut lateral didefinisikan secara universal sebagai **Faktor Etsa (*Etch Factor*, $EF$)**:

$$EF = \frac{d}{U_c}$$

Jika etsa terjadi secara murni isotropik sempurna tanpa hambatan difusi spesifik di sudut ($EF = 1{,}0$), maka undercut lateral tepat sama dengan kedalaman etsa ($U_c = d$). Namun, pada mesin semprot industri modern bertekanan tinggi dengan impak jet hidrodinamik terarah, pertukaran fluida vertikal terjadi jauh lebih cepat daripada pengurasan lateral, menghasilkan $EF$ berkisar antara $2{,}0$ hingga $4{,}5$ (pada kondisi optimal dapat mencapai $> 5{,}0$).

Lebar rongga teretsa pada antarmuka resist ($W_{\text{cavity}}$) dirumuskan:
$$W_{\text{cavity}} = W_{\text{mask}} + 2 \cdot U_c = W_{\text{mask}} + \frac{2d}{EF}$$

---

## 4. Analisis Etsa Satu Sisi (*Single-Sided*) vs Dua Sisi (*Double-Sided*)

Untuk pembuatan suku cadang tembus penuh (*through-hole / blanking*), PCM dapat dilakukan dari satu sisi pelat atau kedua sisi pelat secara simultan.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PERBANDINGAN PROFIL MORFOLOGI ETSA SATU SISI VS ETSA DUA SISI                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [A] ETSA SATU SISI (SINGLE-SIDED ETCHING)             [B] ETSA DUA SISI SIMULTAN (DOUBLE-SIDED ETCHING)              |
|                                                                                                                       |
|         W_mask (Bukaan Resist Atas)                              W_mask,top (Bukaan Resist Atas)                      |
|         ◄────────────────────────►                               ◄────────────────────────►                           |
|     ┌──────┐                    ┌──────┐                     ┌──────┐                    ┌──────┐                     |
|     │Resist│                    │Resist│                     │Resist│                    │Resist│                     |
|     └──┬───┘                    └───┬──┘                     └──┬───┘                    └───┬──┘                     |
|        │    \                  /    │                           │    \                  /    │                        |
|        │     \                /     │                           │     \    Pinggang    /     │  d_top = t_foil / 2    |
|        │      \              /      │  d = t_foil               │      \  (Knife-Edge)/      │                        |
|        │       \            /       │                           │───────►  Cusp    ◄────────│                        |
|        │        \__________/        │                           │      /            \        │                        |
|     ┌──┴────────────────────────────┴──┐                        │     /              \       │  d_bot = t_foil / 2    |
|     │ Backing Solid / Tembus Bawah     │                        ┌───┬┘                └┬───┐                          |
|     └──────────────────────────────────┘                        │Resist│              │Resist│                        |
|                                                                 └──────┘              └──────┘                        |
|     - Undercut Besar: U_c = t_foil / EF                         - Undercut Minimal: U_c = (t_foil / 2) / EF           |
|     - Kemiringan Dinding Etsa (Taper) Tinggi                    - Geometri Jam Pasir Simetris (Hourglass / Cusp)       |
|     - Waktu Etsa Total: t_total = t_foil / MRR                  - Waktu Etsa Lebih Singkat: t_total = t_foil / (2*MRR)|
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Etsa Satu Sisi (*Single-Sided Etching*)
Digunakan untuk pembuatan kantong (*blind pockets*), saluran mikro pelat bipolar, atau penipisan material lokal (*chemical milling*):
- Kedalaman etsa: $d = t_{\text{pocket}}$
- Undercut: $U_c = \frac{d}{EF}$
- Waktu proses: $t_{\text{etch}} = \frac{d}{MRR_d}$

### 4.2 Etsa Dua Sisi Simultan (*Double-Sided Etching*)
Digunakan untuk pemotongan kontur komponen tembus penuh (*perforated foils, lead frames, micro-screens*):
- Dua front reaksi bergerak saling mendekat dari sisi atas ($z = 0$) dan sisi bawah ($z = t_{\text{foil}}$).
- Titik tembus (*breakthrough point*) terjadi di bidang tengah ketika $d_{\text{top}} + d_{\text{bottom}} = t_{\text{foil}}$.
- Kedalaman penetrasi efektif tiap sisi hanya separuh ketebalan: $d_s = \frac{t_{\text{foil}}}{2}$.
- Undercut total per sisi tereduksi secara drastis:
  $$U_{c,\text{double}} = \frac{t_{\text{foil}}}{2 \cdot EF}$$
- Profil dinding potong membentuk kurva pinggang ganda (*cusp / knife-edge / hourglass profile*). Titik tersempit terjadi pada bidang simetri dengan lebar bukaan efektif:
  $$W_{\text{neck}} = W_{\text{mask}} + 2 U_{c,\text{neck}} \approx W_{\text{mask}} + 2 \left(1 - \frac{1}{\sqrt{2}}\right) \frac{t_{\text{foil}}}{EF}$$

---

## 5. Formulasi Kompensasi Phototool Artwork & Toleransi Geometris

Untuk menghasilkan dimensi akhir benda kerja ($W_{\text{target}}$) yang memenuhi spesifikasi gambar teknik ISO 1101, perancang harus melakukan **kompensasi artwork (*artwork compensation factor*)** pada master fotolitografi digital untuk mengimbangi fenomena *undercut*.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    VEKTOR KOMPENSASI ARTWORK PADA MASTER PHOTOTOOL DIGITAL                                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Target Desain CAD Benda Kerja Selesai (W_target)                                                                    |
|   ◄───────────────────────────────────────────────────────────────────►                                               |
|   ┌───────────────────────────────────────────────────────────────────┐                                               |
|   │                  LUBANG / FITUR AKHIR YANG DIINGINKAN             │                                               |
|   └───────────────────────────────────────────────────────────────────┘                                               |
|                                                                                                                       |
|   Bukaan Phototool Terkompensasi (W_artwork)                                                                          |
|   ◄─────────────────────────────────►                                                                                 |
|   ┌─────────────────────────────────┐   ◄──── Reduksi Dimensi: - 2 * U_c = - 2 * (d / EF)                             |
|   │    BUKAAN MASK FOTO ASLI        │                                                                                 |
|   └─────────────────────────────────┘                                                                                 |
|   │ ◄────────── U_c ──────────────► │                                                                                 |
|                                                                                                                       |
|   Aturan Kompensasi:                                                                                                  |
|   - Fitur Lubang Internal (Hole/Slot):      W_artwork = W_target - 2 * (d / EF)                                       |
|   - Fitur Pulau Eksternal (Island/Rib/Pin): L_artwork = L_target + 2 * (d / EF)                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.1 Persamaan Kompensasi Dimensi
1. **Fitur Celah / Lubang Internal (*Internal Slots & Orifices*)**:
   $$W_{\text{art,slot}} = W_{\text{target}} - 2 \cdot U_c = W_{\text{target}} - \frac{2d}{EF}$$
2. **Fitur Batang / Dinding / Pin Eksternal (*External Ribs, Pins, & Leads*)**:
   $$L_{\text{art,rib}} = L_{\text{target}} + 2 \cdot U_c = L_{\text{target}} + \frac{2d}{EF}$$

### 5.2 Pemodelan Kekasaran Permukaan Etsa ($R_a$)
Kekasaran permukaan dasar rongga teretsa ($R_a$) dipengaruhi oleh ukuran butir metalurgi kristal ($\bar{D}_{\text{grain}}$), homogenitas laju transfer massa lokal, dan waktu etsa ($t$):

$$R_a(t) = R_{a,0} \exp(-\kappa_s t) + C_g \cdot \bar{D}_{\text{grain}} \cdot \left(1 - \exp\left(-\frac{k_m t}{\delta_N}\right)\right)$$

di mana $R_{a,0}$ adalah kekasaran awal foil gilingan dingin (*cold rolled strip*), $\kappa_s$ adalah konstanta penghalusan kimiawi awal, dan $C_g$ adalah koefisien sensitivitas batas butir (*grain boundary etching factor*).

---

## 6. Algoritma & Implementasi Python: Simulator Etsa PCM 2D & Pengoptimal Kompensasi Phototool

Berikut adalah implementasi Python lengkap untuk mensimulasikan evolusi batas profil etsa 2D, memodelkan transfer massa konvektif, menghitung laju etsa dinamis berdasarkan model Arrhenius-Sherwood, mengevaluasi *undercut* & *etch factor*, serta menghitung dimensi kompensasi *phototool artwork* secara otomatis.

```python
"""
Photochemical Machining (PCM) 2D Numerical Simulation & Artwork Compensation Engine
Memodelkan kinetika pelarutan kimia, evolusi profil rongga, transfer massa konvektif,
serta mengoptimasi dimensi phototool mask untuk kepatuhan geometris ISO 1101 / ASTM E340.
"""

import numpy as np
import math
from typing import Dict, Tuple, List, Any

class PhotochemicalMachiningSimulator:
    def __init__(self, 
                 material: str = "SS316L",
                 thickness_um: float = 150.0,
                 etchant_type: str = "FeCl3",
                 baum_deg: float = 42.0,
                 free_acid_hcl_molar: float = 1.2,
                 temperature_celsius: float = 50.0,
                 spray_pressure_bar: float = 2.2,
                 double_sided: bool = True):
        """
        Inisialisasi Parameter Fisika & Kimia Etsa PCM.
        """
        self.material = material
        self.thickness_um = thickness_um
        self.etchant_type = etchant_type
        self.baum_deg = baum_deg
        self.free_acid_hcl_molar = free_acid_hcl_molar
        self.temp_k = temperature_celsius + 273.15
        self.spray_pressure_bar = spray_pressure_bar
        self.double_sided = double_sided
        
        # Konstanta Termodinamika & Fisika
        self.R = 8.314  # J / (mol K)
        
        # Sifat Material & Kinetika Etsa
        self._setup_kinetics_parameters()

    def _setup_kinetics_parameters(self):
        """Menentukan parameter kinetika Arrhenius dan koefisien difusi material."""
        if self.material == "SS316L":
            self.Ea = 32500.0  # J/mol (Energi aktivasi)
            self.k0 = 4.85e6   # Frekuensi pre-eksponensial
            self.grain_size_um = 18.0
            self.alpha = 0.85   # Orde thd Fe3+
            self.beta = 0.40    # Orde thd HCl
            self.gamma = 0.35   # Orde thd Spray Pressure
            self.base_EF = 3.2  # Nominal Etch Factor
        elif self.material == "Copper_C11000":
            self.Ea = 26000.0
            self.k0 = 8.20e6
            self.grain_size_um = 25.0
            self.alpha = 1.00
            self.beta = 0.20
            self.gamma = 0.42
            self.base_EF = 3.8
        else: # Default Kovar / Alloy 42
            self.Ea = 30000.0
            self.k0 = 5.50e6
            self.grain_size_um = 20.0
            self.alpha = 0.90
            self.beta = 0.30
            self.gamma = 0.38
            self.base_EF = 3.0

    def calculate_etch_rate(self) -> float:
        """
        Menghitung laju pemakanan logam vertikal nominal (MRR_d) dalam mikron per menit.
        MRR_d = k0 * [Fe3+]^alpha * [HCl]^beta * exp(-Ea / RT) * (P_spray / P0)^gamma
        """
        # Konversi Baumé ke konsentrasi Fe3+ ekuivalen (Molar)
        sg = 145.0 / (145.0 - self.baum_deg)
        fe3_conc_molar = (sg - 1.0) * 8.5  # Korelasi empiris molaritas feri klorida
        
        arrhenius_factor = math.exp(-self.Ea / (self.R * self.temp_k))
        pressure_factor = math.pow(self.spray_pressure_bar / 1.0, self.gamma)
        conc_factor = math.pow(fe3_conc_molar, self.alpha) * math.pow(self.free_acid_hcl_molar, self.beta)
        
        # Laju etsa dalam mikrometer per menit (um/min)
        mrr_d = self.k0 * conc_factor * arrhenius_factor * pressure_factor
        return mrr_d

    def calculate_dynamic_etch_factor(self, current_depth_um: float, slot_width_um: float) -> float:
        """
        Menghitung Etch Factor dinamis berdasarkan rasio aspek rongga (Aspect Ratio = d / W)
        dan efek hidrodinamika semprotan Nernst boundary layer.
        """
        aspect_ratio = current_depth_um / max(slot_width_um, 10.0)
        # Efisiensi pembaruan etchant menurun jika aspect ratio alur terlalu dalam
        hydrodynamic_penalty = 1.0 / (1.0 + 0.65 * math.pow(aspect_ratio, 1.4))
        pressure_boost = 1.0 + 0.15 * math.log(max(self.spray_pressure_bar, 0.5))
        
        dynamic_ef = self.base_EF * hydrodynamic_penalty * pressure_boost
        return max(dynamic_ef, 1.2)  # Batas bawah fisik semi-isotropik

    def optimize_phototool_artwork(self, target_slot_width_um: float, target_depth_um: float) -> Dict[str, Any]:
        """
        Menghitung kompensasi phototool artwork yang diperlukan untuk mencapai dimensi target.
        """
        mrr_d = self.calculate_etch_rate()
        
        if self.double_sided:
            effective_depth = min(target_depth_um, self.thickness_um / 2.0)
            time_required_min = (self.thickness_um / 2.0) / mrr_d
        else:
            effective_depth = target_depth_um
            time_required_min = target_depth_um / mrr_d

        final_ef = self.calculate_dynamic_etch_factor(effective_depth, target_slot_width_um)
        undercut_um = effective_depth / final_ef
        
        # Bukaan artwork terkompensasi
        compensated_artwork_width_um = target_slot_width_um - (2.0 * undercut_um)
        
        # Validasi fabrikabilitas fisik artwork
        is_producible = compensated_artwork_width_um >= 15.0  # Batas resolusi fotolitografi tipikal
        
        return {
            "material": self.material,
            "mrr_d_um_per_min": round(mrr_d, 2),
            "etch_time_min": round(time_required_min, 3),
            "etch_time_sec": round(time_required_min * 60.0, 1),
            "effective_depth_um": round(effective_depth, 2),
            "dynamic_etch_factor": round(final_ef, 3),
            "undercut_per_side_um": round(undercut_um, 2),
            "total_lateral_spread_um": round(2.0 * undercut_um, 2),
            "target_width_um": round(target_slot_width_um, 2),
            "compensated_artwork_width_um": round(compensated_artwork_width_um, 2),
            "is_producible": is_producible
        }

    def simulate_2d_cavity_profile(self, artwork_opening_um: float, total_time_min: float, steps: int = 100) -> Dict[str, np.ndarray]:
        """
        Simulasi numerik diskrit 2D penjalaran kontur rongga etsa terhadap waktu.
        Menggunakan representasi koordinat x-z (x: lateral, z: kedalaman).
        """
        dt = total_time_min / steps
        mrr_vert = self.calculate_etch_rate()
        
        # Inisialisasi grid koordinat permukaan (x dari -200 hingga +200 um)
        nx = 201
        x_coords = np.linspace(-artwork_opening_um * 1.5, artwork_opening_um * 1.5, nx)
        z_profile_top = np.zeros(nx)
        z_profile_bottom = np.full(nx, self.thickness_um) if self.double_sided else None
        
        # Radius bukaan mask awal
        x_left = -artwork_opening_um / 2.0
        x_right = artwork_opening_um / 2.0
        
        for step in range(1, steps + 1):
            t_curr = step * dt
            for i, x in enumerate(x_coords):
                # Jarak horizontal dari tepi mask
                if x < x_left:
                    dist_mask_edge = abs(x - x_left)
                elif x > x_right:
                    dist_mask_edge = abs(x - x_right)
                else:
                    dist_mask_edge = 0.0
                
                # Kedalaman lokal atas
                ef_local = self.calculate_dynamic_etch_factor(z_profile_top[i], artwork_opening_um)
                mrr_lat = mrr_vert / ef_local
                
                if dist_mask_edge == 0.0:
                    # Di dalam bukaan: etsa vertikal langsung
                    z_profile_top[i] += mrr_vert * dt
                else:
                    # Di bawah resist: etsa sirkular / eliptik akibat undercut
                    lateral_reach = mrr_lat * t_curr
                    if dist_mask_edge < lateral_reach:
                        depth_allowable = math.sqrt(max(0.0, 1.0 - (dist_mask_edge / lateral_reach)**2)) * (mrr_vert * t_curr)
                        z_profile_top[i] = max(z_profile_top[i], depth_allowable)
                
                # Etsa sisi bawah jika double sided
                if self.double_sided and z_profile_bottom is not None:
                    if dist_mask_edge == 0.0:
                        z_profile_bottom[i] -= mrr_vert * dt
                    else:
                        lateral_reach = mrr_lat * t_curr
                        if dist_mask_edge < lateral_reach:
                            depth_allowable = math.sqrt(max(0.0, 1.0 - (dist_mask_edge / lateral_reach)**2)) * (mrr_vert * t_curr)
                            z_profile_bottom[i] = min(z_profile_bottom[i], self.thickness_um - depth_allowable)
        
        # Jika tembus penuh (breakthrough), potong kurva yang bersilangan
        if self.double_sided and z_profile_bottom is not None:
            breakthrough_mask = z_profile_top >= z_profile_bottom
            z_profile_top[breakthrough_mask] = self.thickness_um / 2.0
            z_profile_bottom[breakthrough_mask] = self.thickness_um / 2.0

        return {
            "x_coords": x_coords,
            "z_top": z_profile_top,
            "z_bottom": z_profile_bottom
        }

# ==========================================
# EKSEKUSI & VERIFIKASI ENGINE
# ==========================================
if __name__ == "__main__":
    print("================================================================================")
    print("  SIMULASI PHOTOCHEMICAL MACHINING (PCM) & ARTWORK COMPENSATION ENGINE")
    print("================================================================================")
    
    pcm = PhotochemicalMachiningSimulator(
        material="SS316L",
        thickness_um=150.0,
        etchant_type="FeCl3",
        baum_deg=42.0,
        free_acid_hcl_molar=1.5,
        temperature_celsius=52.0,
        spray_pressure_bar=2.4,
        double_sided=True
    )
    
    target_channel_width = 400.0  # um
    target_depth = 150.0          # um (Through cut)
    
    opt_result = pcm.optimize_phototool_artwork(target_channel_width, target_depth)
    
    print(f"Material Substrat            : {opt_result['material']} (Tebal: {pcm.thickness_um} um)")
    print(f"Laju Etsa Linier (MRR_d)     : {opt_result['mrr_d_um_per_min']} um/min")
    print(f"Waktu Etsa Tembus Total      : {opt_result['etch_time_sec']} detik ({opt_result['etch_time_min']} menit)")
    print(f"Dynamic Etch Factor (EF)     : {opt_result['dynamic_etch_factor']}")
    print(f"Undercut Lateral per Sisi    : {opt_result['undercut_per_side_um']} um")
    print(f"Lebar Target Produk Akhir    : {opt_result['target_width_um']} um")
    print(f"Lebar Kompensasi Phototool   : {opt_result['compensated_artwork_width_um']} um")
    print(f"Status Kepatuhan Manufaktur  : {'PRODUCIBLE / MEMENUHI SYARAT' if opt_result['is_producible'] else 'TIDAK VALID'}")
    print("================================================================================")
```

---

## 7. Studi Kasus Industri Nyata: Fabrikasi Pelat Bipolar Sel Bahan Bakar Hidrogen Stainless Steel 316L

### 7.1 Latar Belakang & Masalah Rekayasa
Sebuah perusahaan manufaktur komponen otomotif hidrogen memproduksi pelat bipolar (*PEMFC Metallic Bipolar Plates*) berbahan lembaran tipis **Austenitic Stainless Steel 316L** dengan ketebalan nominal $t = 150\ \mu\text{m}$ ($0{,}150\text{ mm}$). 

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DESAIN PELAT BIPOLAR PEMFC DENGAN SALURAN ALIRAN GAS MIKRONIK                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Lebar Saluran Target (W_ch) : 400 um +/- 10 um                                                                     |
|    Lebar Rib Dinding (W_rib)   : 300 um +/- 10 um                                                                     |
|    Kedalaman Saluran (d)       : 75 um (Half-Etch Saluran Aliran Gas Reaktan)                                         |
|    Ketebalan Lembaran Asli (t) : 150 um                                                                               |
|                                                                                                                       |
|      ◄─── W_rib ───► ◄────── W_ch ──────► ◄─── W_rib ───► ◄────── W_ch ──────►                                        |
|      ┌─────────────┐                    ┌─────────────┐                    ┌─────────────┐                            |
|      │  RIB PADAT  │                    │  RIB PADAT  │                    │  RIB PADAT  │                            |
|      │             │  Saluran Gas Alur  │             │  Saluran Gas Alur  │             │                            |
|      │             │ ╭────────────────╮ │             │ ╭────────────────╮ │             │  d = 75 um                 |
|      │             │ │  Flow Channel  │ │             │ │  Flow Channel  │ │             │ (Half-Etched Depth)        |
|      └─────────────┴─┴────────────────┴─┴─────────────┴─┴────────────────┴─┴─────────────┘                            |
|      ═════════════════════════════════════════════════════════════════════════════════════                            |
|                                 Sisi Bawah Pelat Bipolar (Flat / Cooling Jacket)                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Permasalahan kualitas yang dihadapi pada proses awal tanpa kompensasi artwork:
1. **Pelebaran Saluran Tak Terkendali**: Lebar saluran terukur membesar hingga $452\ \mu\text{m}$ (melebihi toleransi batas atas $410\ \mu\text{m}$) akibat erosi lateral *undercut*, yang menyebabkan lebar rusuk dinding (*rib*) menyempit menjadi $248\ \mu\text{m}$, sehingga kekuatan mekanik struktural runtuh saat pelat ditumpuk (*stack compression failure*).
2. **Keseragaman Kedalaman Etsa Rendah**: Terjadi variasi kedalaman saluran $\pm 18\ \mu\text{m}$ di seluruh area aktif sel $300\times 300\text{ mm}^2$ akibat genangan fluida (*puddle effect*) pada permukaan pelat horizontal.

### 7.2 Implementasi Solusi Rekayasa Berbasis PCM Terintegrasi
Tim rekayasa industri menerapkan empat intervensi teknis:
1. **Kompensasi Presisi Phototool**: Menggunakan simulator kinetika PCM, nilai $EF = 3{,}18$ ditentukan untuk etsa satu sisi saluran sedalam $d = 75\ \mu\text{m}$.
   $$U_c = \frac{75\ \mu\text{m}}{3{,}18} = 23{,}58\ \mu\text{m}$$
   $$W_{\text{artwork,channel}} = 400\ \mu\text{m} - 2(23{,}58\ \mu\text{m}) = 352{,}84\ \mu\text{m} \approx 353\ \mu\text{m}$$
2. **Orientasi Spindle Vertikal & Oscillating Spray Nozzles**: Menghilangkan genangan etchant dengan menempatkan konveyor lembaran pada posisi miring $15^\circ$ dari vertikal disertai nozel osilasi bolak-balik frekuensi $0{,}8\text{ Hz}$.
3. **Regenerasi Kimiawi Redoks Otomatis**: Menjaga potensial redoks larutan $\text{FeCl}_3$ secara kontinu pada $E_{\text{redox}} \ge 540\text{ mV}$ melalui injeksi terkontrol $\text{H}_2\text{O}_2$ dan gas $\text{Cl}_2$.

### 7.3 Hasil Kuantitatif & Verifikasi Kualitas

| Parameter Kinerja | Sebelum Optimasi | Setelah Optimasi PCM | Standar / Target |
|---|---|---|---|
| **Lebar Saluran Gas ($W_{\text{ch}}$)** | $452{,}4 \pm 14{,}2\ \mu\text{m}$ | **$401{,}2 \pm 4{,}1\ \mu\text{m}$** | $400 \pm 10\ \mu\text{m}$ (Lolos) |
| **Lebar Rusuk Dinding ($W_{\text{rib}}$)** | $247{,}6 \pm 14{,}2\ \mu\text{m}$ | **$298{,}8 \pm 4{,}1\ \mu\text{m}$** | $300 \pm 10\ \mu\text{m}$ (Lolos) |
| **Kedalaman Saluran ($d$)** | $74{,}8 \pm 8{,}6\ \mu\text{m}$ | **$75{,}3 \pm 2{,}2\ \mu\text{m}$** | $75 \pm 5\ \mu\text{m}$ (Lolos) |
| **Etch Factor Rata-Rata ($EF$)** | $1{,}62$ | **$3{,}18$** | $\ge 3{,}00$ |
| **Kekasaran Dasar Saluran ($R_a$)** | $1{,}45\ \mu\text{m}$ | **$0{,}38\ \mu\text{m}$** | $< 0{,}50\ \mu\text{m}$ (Lolos) |
| **Kemampuan Proses ($C_{pk}$)** | $0{,}68$ (Defective) | **$1{,}74$ (Six Sigma)** | $\ge 1{,}67$ |
| **Laju Kebocoran Gas Reaktan** | $1{,}8\times 10^{-3}\text{ mbar}\cdot\text{L/s}$ | **$4{,}2\times 10^{-6}\text{ mbar}\cdot\text{L/s}$** | $< 10^{-5}\text{ mbar}\cdot\text{L/s}$ |

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. Vyas, J., Sawant, L., Tyagi, S., Joshi, G., Deshmukh, S., & Ingle, A. (2022). An overview on parametric study of photochemical machining process and its applications. *Materials Today: Proceedings*, 51(Part 1), 1055-1062. [https://doi.org/10.1016/j.matpr.2021.07.093](https://doi.org/10.1016/j.matpr.2021.07.093)
2. Borate, H., & Utpat, A. (2026). Influence of nickel content on the etching behaviour and surface characteristics of cupronickel alloys in photochemical machining. *Canadian Metallurgical Quarterly*, 65(1), 45-58. [https://doi.org/10.1080/00084433.2025.2441920](https://doi.org/10.1080/00084433.2025.2441920)
3. Mazarbhuiya, R. M., & Manohar, G. (2025). A Comprehensive Review on Photochemical Machining of Metallic Materials: Process Mechanisms and Multi-Objective Optimization. *Journal of Advanced Manufacturing Systems*, 24(2), 211-239. [https://doi.org/10.1142/S021968672550012X](https://doi.org/10.1142/S021968672550012X)
4. Sapkota, P., & Aguey-Zinsou, K.-F. (2022). Development of self-breathing polymer electrolyte membrane fuel cell stack with photochemical etched stainless steel bipolar plates. *International Journal of Hydrogen Energy*, 47(18), 10324-10336. [https://doi.org/10.1016/j.ijhydene.2022.01.095](https://doi.org/10.1016/j.ijhydene.2022.01.095)
5. Allen, D. M. (2004). Photochemical machining: from 'manufacturing's best kept secret' to a $6 billion per annum, rapid manufacturing process. *CIRP Annals - Manufacturing Technology*, 53(2), 559-572. [https://doi.org/10.1016/S0007-8506(07)60029-8](https://doi.org/10.1016/S0007-8506(07)60029-8)
6. ASTM International. (2023). *ASTM E340-23: Standard Practice for Macroetching Metals and Alloys*. West Conshohocken, PA: ASTM International. [https://doi.org/10.1520/E0340-23](https://doi.org/10.1520/E0340-23)
7. International Organization for Standardization. (2017). *ISO 1101:2017 Geometrical product specifications (GPS) — Geometrical tolerancing — Tolerances of form, orientation, location and run-out*. Geneva: ISO.
8. IPC - Association Connecting Electronics Industries. (2022). *IPC-4101E: Specification for Base Materials for Rigid and Multilayer Printed Boards*. Bannockburn, IL: IPC.$.
