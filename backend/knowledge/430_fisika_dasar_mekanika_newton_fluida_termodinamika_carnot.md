# Modul 430: Fisika Dasar untuk Rekayasa Industri (Engineering Physics I), Statika Benda Tegar, Dinamika Gerak Newton, Mekanika Fluida, dan Termodinamika Carnot

## 1. Domain Akademik & Ruang Lingkup
Mata kuliah **Fisika Dasar 1** membekali mahasiswa teknik dengan hukum-hukum fundamental mekanika klasik, kesetimbangan gaya statis struktur pabrik, dinamika mesin bergerak, perilaku aliran fluida perpipaan, serta konversi energi termal ke kerja mekanik.

---

## 2. Statika Partikel & Benda Tegar (Equilibrium of Rigid Bodies)

Suatu sistem mekanik/struktur penopang mesin dikatakan dalam keadaan setimbang statis jika dan hanya jika:

$$\sum \vec{F}_x = 0, \quad \sum \vec{F}_y = 0, \quad \sum \vec{F}_z = 0$$

$$\sum \vec{\tau}_O = \sum (\vec{r} \times \vec{F}) = 0$$

Di mana $\vec{\tau}$ adalah momen gaya/torsi terhadap sembarang titik acuan $O$.

---

## 3. Dinamika Newton & Teorema Usaha-Energi (Work-Energy Theorem)

### A. Hukum II Newton (Gerak Translasi & Rotasi):
$$\sum \vec{F} = m \vec{a} = \frac{d\vec{p}}{dt}, \quad \sum \vec{\tau} = I \vec{\alpha} = \frac{d\vec{L}}{dt}$$

Di mana $I = \int r^2 dm$ adalah momen inersia massa benda tegar terhadap sumbu putar.

### B. Teorema Usaha - Energi Kinetik:
$$W_{\text{net}} = \int_{\vec{r}_1}^{\vec{r}_2} \vec{F}_{\text{net}} \cdot d\vec{r} = \Delta K = \left( \frac{1}{2} m v_2^2 + \frac{1}{2} I \omega_2^2 \right) - \left( \frac{1}{2} m v_1^2 + \frac{1}{2} I \omega_1^2 \right)$$

### C. Konservasi Energi Mekanik (Gaya Konservatif):
$$E_{\text{mekanik}} = K_1 + U_1 = K_2 + U_2 + W_{\text{gesek}}$$

---

## 4. Mekanika Fluida Industri: Statika & Aliran Dinamis

### A. Hukum Pascal & Hidrolik Pabrik:
$$P_1 = P_2 \implies \frac{F_1}{A_1} = \frac{F_2}{A_2} \implies F_2 = F_1 \left( \frac{A_2}{A_1} \right)$$

### B. Persamaan Kontinuitas Massa:
$$A_1 v_1 = A_2 v_2 = Q \quad (\text{Debit Aliran } \text{m}^3/\text{s})$$

### C. Persamaan Bernoulli (Aliran Fluida Ideal Tak Termampatkan):
$$P_1 + \frac{1}{2} \rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2} \rho v_2^2 + \rho g h_2 = \text{Konstan}$$

---

## 5. Termodinamika Terapan: Hukum I & II Termodinamika

### A. Hukum I Termodinamika (Konservasi Energi Termal):
$$\Delta U = Q - W$$
Di mana $\Delta U = n C_v \Delta T$ adalah perubahan energi dalam gas ideal, $Q$ adalah kalor yang diserap sistem, dan kerja ekspansi volume $W = \int P dV$.

### B. 4 Proses Termodinamika Ideal:
1. **Isokhorik (Volume Konstan, $dV = 0$)**: $W = 0 \implies Q = \Delta U = n C_v \Delta T$.
2. **Isobarik (Tekanan Konstan, $P = \text{konstan}$)**: $W = P(V_2 - V_1), Q = n C_p \Delta T$.
3. **Isotermal (Suhu Konstan, $\Delta T = 0$)**: $\Delta U = 0 \implies Q = W = n R T \ln\left( \frac{V_2}{V_1} \right)$.
4. **Adiabatik (Tanpa Pertukaran Kalor, $Q = 0$)**: $P V^\gamma = \text{konstan}, W = -\Delta U = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1}$.

### C. Hukum II Termodinamika & Efisiensi Maksimum Siklus Carnot:
$$\eta_{\text{Carnot}} = 1 - \frac{T_L}{T_H} = \frac{W_{\text{output}}}{Q_H}$$

Di mana $T_H$ dan $T_L$ adalah temperatur reservoir panas dan dingin dalam satuan Kelvin (K).

---

## 6. Referensi Terverifikasi (Academic & Industrial Standards)
- Halliday, D., Resnick, R., & Walker, J. (2018). *Fundamentals of Physics* (11th ed.). John Wiley & Sons.
- Serway, R. A., & Jewett, J. W. (2018). *Physics for Scientists and Engineers with Modern Physics* (10th ed.). Cengage Learning.
- Moran, M. J., Shapiro, H. N., Boettner, D. D., & Bailey, M. B. (2018). *Fundamentals of Engineering Thermodynamics* (9th ed.). John Wiley & Sons.
- Tipler, P. A., & Mosca, G. (2020). *Physics for Scientists and Engineers* (6th ed.). W. H. Freeman.
