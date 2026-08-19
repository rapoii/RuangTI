# Modul 405: Perancangan Manufaktur & Perakitan (DFMA), Sheet Metal K-Factor, Pemipaan Pabrik (ASME B31.3), dan Diagram Instrumentasi P&ID (ISA 5.1)

## 1. Domain Profesi & Ruang Lingkup
Profesi **CAD/BIM Modeler, DFMA Engineer & Plant Piping Drafter** bertugas merancang detail produk agar mudah diproduksi (*Design for Manufacturing*) dan cepat dirakit (*Design for Assembly*), serta menggambar diagram perpipaan dan instrumentasi pabrik (*Piping & Instrumentation Diagram* - P&ID).

### Standar Baku Industri:
1. **Boothroyd Dewhurst DFMA® Methodology**: Standar optimasi perakitan global.
2. **ASME B31.3**: *Process Piping Code (Chemical, Petrochemical, & Power Plants)*.
3. **ISA-5.1-2009 (R2013)**: *Instrumentation Symbols and Identification*.
4. **ISO 10628-1 / 10628-2**: *Diagrams for the chemical and petrochemical industry — P&IDs*.

---

## 2. Metodologi Design for Assembly (DFA - Boothroyd & Dewhurst)

### A. Kriteria Part Teoritis Minimum ($N_{\min}$):
Sebuah komponen diakui sebagai part terpisah (tidak boleh disatukan) jika dan hanya jika memenuhi salah satu dari 3 kondisi:
1. Part bergerak relatif terhadap part lain yang sudah dirakit selama operasi.
2. Part harus terbuat dari material yang berbeda secara mendasar (e.g., isolator listrik, karet seal, kaca).
3. Part harus dapat dilepas untuk keperluan instalasi atau penggantian servis.

### B. Formula Indeks Efisiensi Desain Perakitan (DFA Index / Assembly Efficiency):
$$E_{\text{DFA}} = \frac{N_{\min} \times t_{\text{basic}}}{t_{\text{total assembly}}} \times 100\%$$

Di mana:
- $N_{\min}$: Jumlah part teoritis minimum yang lolos 3 kriteria di atas.
- $t_{\text{basic}}$: Waktu standar perakitan ideal untuk part sederhana ($3.0\text{ detik}$ per part menurut Boothroyd).
- $t_{\text{total assembly}}$: Total waktu perakitan aktual produk eksisting.
- Target industri: $E_{\text{DFA}} \ge 35\% - 60\%$.

---

## 3. Perhitungan Bending Logam Lembaran (Sheet Metal K-Factor & Bend Allowance)

Saat plat logam ditekuk, serat luar mengalami tegangan tarik (*tension*) dan serat dalam mengalami tegangan tekan (*compression*). Di antaranya terdapat *Neutral Axis* yang panjangnya konstan.

```
Serat Luar  (Tarik / Melar) -------------------------
Neutral Axis (K-Factor = t/T) - - - - - - - - - - - -
Serat Dalam (Tekan / Mampat) ------------------------
                               \ Radius Dalam (R) /
```

### A. K-Factor ($K$):
$$K = \frac{t}{T}$$
Di mana $t$ adalah jarak dari permukaan dalam ke garis netral, dan $T$ adalah ketebalan total plat ($K \approx 0.33$ untuk tekukan tajam, $K \approx 0.44 - 0.50$ untuk tekukan standar/air bending).

### B. Rumus Bend Allowance ($BA$ - Panjang Serat Netral Busur):
$$BA = \frac{\pi \cdot \theta}{180} \times (R + K \cdot T)$$

Di mana:
- $\theta$: Sudut tekukan dalam derajat (e.g., $90^\circ$).
- $R$: Radius tekukan dalam (*Inside Bend Radius*).
- $T$: Ketebalan material plat.

### C. Rumus Panjang Pola Bukaan Lembaran (*Flat Pattern Length*):
$$L_{\text{flat}} = L_1 + L_2 + BA - 2(R + T) \quad (\text{menggunakan Setback})$$

---

## 4. Desain Perpipaan Industri (ASME B31.3) & Penurunan Tekanan Fluida

### A. Ketebalan Minimum Dinding Pipa Bertekanan (ASME B31.3 Par. 304.1.2):
$$t_m = \frac{P \cdot D}{2(S \cdot E \cdot W + P \cdot Y)} + c$$

Di mana:
- $P$: Tekanan desain internal fluida (psi atau bar).
- $D$: Diameter luar pipa (*Outside Diameter*).
- $S$: Tegangan izin material pada suhu operasi (*Allowable Stress*).
- $E$: Faktor kualitas sambungan las (*Joint Quality Factor*, $0.85 - 1.0$).
- $W$: Faktor reduksi kekuatan las suhu tinggi.
- $Y$: Koefisien material (tipikal $0.4$ untuk baja pada $T < 482^\circ\text{C}$).
- $c$: *Corrosion Allowance* (ketebalan toleransi karat, e.g., $1.5 - 3.0\text{ mm}$).

### B. Rumus Kehilangan Tekanan Friksi Pipa (Persamaan Darcy-Weisbach):
$$\Delta h_f = f \times \frac{L}{D} \times \frac{v^2}{2g}$$

Di mana $f$ adalah faktor gesekan Moody/Colebrook, $L$ panjang pipa, $D$ diameter dalam, $v$ kecepatan aliran ($v = Q/A$), dan $g = 9.81\text{ m/s}^2$.

---

## 5. Standar Simbol Diagram Instrumentasi P&ID (ISA-5.1)

Penamaan tag instrumen menggunakan format: **`[Variabel Pertama][Fungsi][Nomor Loop]`** (e.g., `FIC-101` = *Flow Indicating Controller Loop 101*).

| Huruf Pertama (Parameter Ukur) | Huruf Kedua/Ketiga (Fungsi Alat) | Contoh Tag ISA | Deskripsi Fungsi |
| :--- | :--- | :--- | :--- |
| **F** = *Flow* (Laju Alir) | **T** = *Transmitter* | **FT-201** | *Flow Transmitter* mengirim sinyal 4-20mA ke DCS |
| **T** = *Temperature* (Suhu) | **I** = *Indicator* | **TI-105** | *Temperature Indicator* (Termometer visual lokal) |
| **P** = *Pressure* (Tekanan) | **C** = *Controller* | **PIC-302** | *Pressure Indicating Controller* mengatur bukaan valve |
| **L** = *Level* (Ketinggian Tangki) | **V** = *Valve* | **LV-404** | *Level Control Valve* pneumatik |
| **A** = *Analysis* (pH, Konduktivitas) | **S** = *Switch* / **A** = *Alarm* | **LSA-501** | *Level Switch Low Alarm* (Pemicu interlock pompa) |

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Boothroyd, G., Dewhurst, P., & Knight, W. (2010). *Product Design for Manufacture and Assembly* (3rd ed.). CRC Press.
- American Society of Mechanical Engineers. (2022). *ASME B31.3: Process Piping — ASME Code for Pressure Piping*. New York: ASME.
- International Society of Automation. (2013). *ANSI/ISA-5.1-2009 (R2013): Instrumentation Symbols and Identification*. Research Triangle Park: ISA.
- Yeddula, V. R., Adurthy, D. B. R. R. K., & Rao, K. S. (2026). *From voice of regulation to robust design: Translating P&ID requirements into GD&T and DFMA schemes for industrial process equipment*. IEEE Transactions on Engineering Management, 73, 1142-1156. DOI: [10.1109/TEM.2026.11619911](https://doi.org/10.1109/TEM.2026.11619911).
