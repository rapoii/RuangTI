# Modul 407: Manajemen Transportasi & Distribusi (TMS), Vehicle Routing Problem (VRP) Clarke-Wright, Penentuan Ukuran Armada MHE Forklift/AGV, dan Logistik Rantai Dingin (Cold Chain MKT)

## 1. Domain Profesi & Ruang Lingkup
Profesi **Logistics & Fleet Operations Specialist / Transportation Analyst** bertanggung jawab merancang jaringan rute distribusi multimoda, menghitung jumlah kebutuhan armada truk dan *Material Handling Equipment* (MHE), serta menjaga kepatuhan suhu produk farmasi/makanan.

### Standar Industri:
1. **CSCMP (Council of Supply Chain Management Professionals)**.
2. **WHO Good Distribution Practices (GDP) TRS 957**: *Guidelines for temperature-sensitive health products*.
3. **OSHA 29 CFR 1910.178**: *Powered Industrial Trucks (Forklift Operator Safety & Sizing)*.

---

## 2. Optimasi Rute Pengiriman: Algoritma Penghematan Clarke-Wright (Clarke-Wright Savings Algorithm)

Digunakan untuk menyelesaikan *Capacitated Vehicle Routing Problem* (CVRP) dengan depot tunggal ($0$) dan $n$ titik pelanggan dengan permintaan $q_i$.

### A. Formula Penghematan Jarak ($s(i, j)$):
Penghematan yang diperoleh jika pelanggan $i$ dan $j$ digabung ke dalam satu rute kendaraan ($0 \to i \to j \to 0$) dibandingkan dua rute terpisah ($0 \to i \to 0$ dan $0 \to j \to 0$):

$$s(i, j) = c(0, i) + c(0, j) - c(i, j)$$

Di mana $c(a, b)$ adalah jarak atau biaya tempuh dari lokasi $a$ ke $b$.

### B. Prosedur Algoritma 4-Tahap:
1. Hitung matriks jarak lengkap antar seluruh lokasi $c(i, j)$.
2. Hitung nilai penghematan $s(i, j)$ untuk setiap pasangan pelanggan $(i, j)$ di mana $i \neq j$.
3. Urutkan seluruh nilai $s(i, j)$ dari yang **terbesar ke terkecil**.
4. Gabungkan rute secara berurutan (*greedy*) dengan syarat:
   - Pelanggan $i$ dan $j$ berada di ujung rute terbuka (bukan di tengah rute yang sudah tertutup).
   - Total muatan gabungan $\sum q_k$ tidak melebihi kapasitas maksimum truk ($Q_{\text{max}}$).

---

## 3. Penentuan Jumlah Armada Alat Angkut (Forklift / Reach Truck / AGV Sizing)

Menggunakan model antrean multi-server Erlang $M/M/c$:

### A. Utilisasi Sistem Armada ($\rho$):
$$\rho = \frac{\lambda}{c \cdot \mu}$$

Di mana:
- $\lambda$: Laju kedatangan permintaan angkut palet per jam (misal: $\lambda = 45\text{ trip/jam}$).
- $\mu$: Laju pelayanan satu unit forklift per jam ($\mu = 1 / t_{\text{siklus}}$, misal $t_{\text{siklus}} = 6\text{ menit} \to \mu = 10\text{ trip/jam}$).
- $c$: Jumlah unit forklift/AGV yang beroperasi. Syarat kestabilan sistem: $\rho < 1 \implies c > \frac{\lambda}{\mu}$.

### B. Probabilitas Sistem Menganggur ($P_0$):
$$P_0 = \left[ \sum_{n=0}^{c-1} \frac{(\lambda / \mu)^n}{n!} + \frac{(\lambda / \mu)^c}{c! \cdot (1 - \rho)} \right]^{-1}$$

### C. Rata-rata Waktu Tunggu Palet di Antrean ($W_q$):
$$W_q = \frac{P_0 \cdot (\lambda / \mu)^c \cdot \rho}{c! \cdot (1 - \rho)^2 \cdot \lambda}$$

Tentukan jumlah armada terkecil $c$ sedemikian rupa sehingga waktu tunggu antrean palet $W_q \le W_{\text{target}}$ (misal: $< 3\text{ menit}$).

---

## 4. Logistik Rantai Dingin (Cold Chain) & Perhitungan Mean Kinetic Temperature (MKT)

Berdasarkan USP (*United States Pharmacopeia*) $\langle 1079 \rangle$ dan FDA, fluktuasi suhu penyimpanan tidak boleh dirata-rata secara aritmatika sederhana karena laju degradasi kimiawi bersifat eksponensial (Persamaan Arrhenius).

### Formulasi Mean Kinetic Temperature ($T_{\text{MKT}}$):
$$T_{\text{MKT}} = \frac{\frac{\Delta H}{R}}{-\ln\left( \frac{1}{n} \sum_{i=1}^{n} e^{-\frac{\Delta H}{R \cdot T_i}} \right)}$$

Di mana:
- $\Delta H$: Energi aktivasi degradasi (standar untuk produk farmasi/biologis $\Delta H = 83.144\text{ kJ/mol}$).
- $R$: Konstanta gas universal ($8.3144\text{ J/(mol}\cdot\text{K)}$).
- $T_i$: Suhu absolut aktual pada titik pencatatan ke-$i$ dalam Kelvin ($T_i = t_i(^\circ\text{C}) + 273.15$).
- $n$: Total jumlah titik data pencatatan *data logger*.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Ghiani, G., Laporte, G., & Musmanno, R. (2021). *Introduction to Logistics Systems Management* (2nd ed.). John Wiley & Sons.
- World Health Organization. (2020). *Good Distribution Practices for Pharmaceutical Products (WHO Technical Report Series, No. 957)*. Geneva: WHO.
- Castro, R. F., Neto, R. F. T., & Filho, M. G. (2024). *Fleet routing and dispatching optimization under stochastic traffic conditions*. European Journal of Industrial Engineering, 18(2), 241-260. DOI: [10.1504/EJIE.2024.141723](https://doi.org/10.1504/EJIE.2024.141723).
- Zhao, Z., Cheng, J., Liang, S., & Liu, S. (2024). *Order picking and AGV fleet coordination in smart automated warehouses*. IEEE Internet of Things Journal, 11(8), 14205-14218. DOI: [10.1109/JIOT.2024.10478104](https://doi.org/10.1109/JIOT.2024.10478104).
