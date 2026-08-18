# Modul Riset Ilmiah: Revised NIOSH Lifting Equation (Manual Material Handling)
**Sumber Referensi Jurnal & Literatur:**
- Waters, T. R., Putz-Anderson, V., Garg, A., & Fine, L. J. (1993). *Revised NIOSH equation for the design and evaluation of manual lifting tasks*. Ergonomics, 36(7), 749-776.
- Waters, T. R., Putz-Anderson, V., & Garg, A. (1994). *Applications manual for the revised NIOSH lifting equation*. US Department of Health and Human Services (NIOSH) Publication No. 94-110.
- Dempsey, P. G. (2002). *Usability of the revised NIOSH lifting equation*. Ergonomics, 45(12), 817-828.

---

## 1. Konsep Recommended Weight Limit (RWL)
Revised NIOSH Lifting Equation (RNLE) adalah metodologi standar internasional biomekanika dan fisiologi kerja untuk menghitung batas beban pengangkatan yang direkomendasikan bagi hampir semua pekerja sehat tanpa meningkatkan risiko cedera tulang belakang bagian bawah (*Low Back Pain* / LBP).

### Formulasi Utama RWL:
$$\text{RWL} = \text{LC} \times \text{HM} \times \text{VM} \times \text{DM} \times \text{AM} \times \text{FM} \times \text{CM}$$

*Dimana:*
- $\text{LC}$ (*Load Constant*): Konstanta Beban Acuan = **$23\text{ kg}$** (atau $51\text{ lbs}$).
- $\text{HM}$ (*Horizontal Multiplier*): Faktor Pengali Jarak Horizontal.
- $\text{VM}$ (*Vertical Multiplier*): Faktor Pengali Ketinggian Vertikal Awal Beban.
- $\text{DM}$ (*Distance Multiplier*): Faktor Pengali Jarak Perpindahan Vertikal.
- $\text{AM}$ (*Asymmetric Multiplier*): Faktor Pengali Sudut Asimetri / Puntiran Tubuh.
- $\text{FM}$ (*Frequency Multiplier*): Faktor Pengali Frekuensi dan Durasi Pengangkatan.
- $\text{CM}$ (*Coupling Multiplier*): Faktor Pengali Kualitas Pegangan (*Grip/Handle*).

---

## 2. Formulasi Perhitungan 6 Multiplier Matematis

### A. Horizontal Multiplier ($\text{HM}$):
Jarak horizontal $H$ diukur dari titik tengah antara kedua mata kaki ke titik tengah pegangan tangan pada beban ($25\text{ cm} \le H \le 63\text{ cm}$).
$$\text{HM} = \frac{25}{H}$$
*(Jika $H \le 25\text{ cm}$, maka $\text{HM} = 1.0$; Jika $H > 63\text{ cm}$, maka $\text{HM} = 0.0$)*

---

### B. Vertical Multiplier ($\text{VM}$):
Ketinggian vertikal $V$ diukur dari permukaan lantai ke titik pegangan tangan ($0\text{ cm} \le V \le 175\text{ cm}$, titik ideal $V_0 = 75\text{ cm}$).
$$\text{VM} = 1 - 0.003 \times |V - 75|$$
*(Jika $V > 175\text{ cm}$, maka $\text{VM} = 0.0$)*

---

### C. Distance Multiplier ($\text{DM}$):
Jarak perpindahan vertikal $D = |V_{\text{tujuan}} - V_{\text{awal}}|$ ($25\text{ cm} \le D \le 175\text{ cm}$).
$$\text{DM} = 0.82 + \frac{4.5}{D}$$
*(Jika $D \le 25\text{ cm}$, maka $\text{DM} = 1.0$)*

---

### D. Asymmetric Multiplier ($\text{AM}$):
Sudut asimetri $A$ adalah sudut deviasi garis angkat dari bidang sagital tubuh ($0^\circ \le A \le 135^\circ$).
$$\text{AM} = 1 - (0.0032 \times A)$$
*(Jika $A > 135^\circ$, maka $\text{AM} = 0.0$)*

---

### E. Coupling Multiplier ($\text{CM}$):
| Kualitas Pegangan (*Coupling*) | $V < 75\text{ cm}$ | $V \ge 75\text{ cm}$ |
| :--- | :---: | :---: |
| **Good (Baik)**: Handle ergonomis atau wadah nyaman | **1.00** | **1.00** |
| **Fair (Cukup)**: Bukaan tangan $90^\circ$, tanpa handle | **0.95** | **1.00** |
| **Poor (Buruk)**: Kotak licin, tanpa lekukan/pegangan | **0.90** | **0.90** |

---

## 3. Lifting Index (LI) & Kriteria Risiko Ergonomi
Lifting Index (LI) mengukur tingkat stres biomekanika relatif dari aktivitas pengangkatan beban aktual ($L$):

$$\text{LI} = \frac{\text{Berat Beban Aktual } (L)}{\text{RWL}}$$

### Standar Klasifikasi Risiko:
- **$\text{LI} \le 1.0$**: **Aman (Low Risk)** — sebagian besar pekerja dapat melakukan aktivitas ini tanpa risiko berlebih.
- **$1.0 < \text{LI} \le 3.0$**: **Risiko Sedang (Moderate Risk)** — stasiun kerja perlu didesain ulang (*administrative/engineering controls*).
- **$\text{LI} > 3.0$**: **Risiko Tinggi (High Risk / Bahaya)** — stasiun kerja **wajib segera dihentikan dan diintervensi** (misal: penambahan *scissor lift*, konveyor, atau crane angkat).
