# Modul 109: Non-Homogeneous Poisson Processes (NHPP) & Warranty Analysis

## Konsep Dasar
Non-Homogeneous Poisson Process (NHPP) adalah generalisasi proses Poisson di mana intensitas kejadian $\lambda(t)$ berubah terhadap waktu. Dalam Industrial Engineering, NHPP menjadi fondasi model **reliability growth**, **warranty cost analysis**, dan **failure intensity** sistem repairable yang mengalami degradasi atau perbaikan seiring waktu.

Berbeda dengan Homogeneous Poisson Process (HPP) yang intensitasnya konstan, NHPP menangkap fenomena *infant mortality*, *useful life*, dan *wear-out* langsung melalui bentuk fungsi intensitas — tanpa perlu memodelkan tiap komponen. Asumsi standar pada sistem repairable: setelah kegagalan dilakukan *minimal repair* (as-bad-as-old), sehingga proses antar-kegagalan bukan renewal melainkan counting process dengan increment independen.

## Formulasi Matematis

### Definisi NHPP
Proses penghitungan $\{N(t), t\ge 0\}$ adalah NHPP dengan intensity function $\lambda(t)\ge 0$ jika:
1. $N(0)=0$;
2. Increment independen;
3. $P(N(t+h)-N(t)=1)=\lambda(t)h+o(h)$;
4. $P(N(t+h)-N(t)\ge 2)=o(h)$.

Jumlah kejadian pada interval $(a,b]$ berdistribusi Poisson dengan mean:

$$
\Lambda(a,b) = \int_a^b \lambda(t)\,dt
$$

### Power Law Process (PLP / Crow-AMSAA)
Model standar reliability growth (Crow, 1974):

$$
\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}, \qquad E[N(t)] = \left(\frac{t}{\eta}\right)^{\beta}
$$

- $\beta<1$: reliability growth (intensitas kegagalan menurun — efek perbaikan desain).
- $\beta=1$: HPP (tidak ada perubahan).
- $\beta>1$: deterioration (degradasi keandalan).

### Log-Linear Process (LLP)
$$
\lambda(t) = e^{(a+bt)}
$$
dipakai bila failure rate tumbuh/menurun secara eksponensial (mis. efek suhu operasi via Arrhenius-like trend).

## Metode Solusi / Estimasi & Uji Kecocokan

### Estimasi Parameter PLP (time-truncated pada $T$)
Dengan $n$ kegagalan pada waktu $t_1 < t_2 < \cdots < t_n \le T$:

$$
\hat{\beta} = \frac{n}{\sum_{i=1}^{n}\ln(T/t_i)}, \qquad \hat{\eta} = \left(\frac{T^{\hat\beta}}{n}\right)^{1/\hat\beta}
$$

(failure-truncated memakai total waktu $t_n$ sebagai pengganti $T$).

### Goodness-of-Fit Cramér-von Mises (Crow)
$$
C_M^2 = \frac{1}{12M} + \sum_{j=1}^{M}\left[\left(\frac{t_j}{T}\right)^{\hat\beta} - \frac{2j-1}{2M}\right]^2
$$

Bandingkan dengan nilai kritis tabel Crow; $H_0$: data sesuai PLP. Alternatif: uji chi-square pada inter-arrival times yang ditransformasi.

### Perbaikan Tidak Sempurna — Virtual Age Kijima
Jika repair memulihkan sebagian kondisi (efektivitas $q$):

$$
V_i = q\,(V_{i-1} + X_i)
$$

dengan $V_i$ umur virtual setelah kegagalan ke-$i$; $q=0$ → as-good-as-new (renewal), $q=1$ → minimal repair (Kijima, 1989).

## Aplikasi: Analisis Biaya Garansi (Warranty Cost)

Untuk kebijakan free replacement warranty berperiode $W$ dan biaya penanganan klaim $c_r$:

$$
C_w = c_r\cdot E[N(W)] = c_r\int_0^W \lambda(t)\,dt
$$

Khusus PLP: $C_w = c_r\,(W/\eta)^{\beta}$ — dasar penetapan harga garansi, cadangan klaim (*warranty reserve*), dan optimasi durasi $W$ vs premium produk. Varian praktis: PRW (pro-rata), garansi dua-dimensi (umur × usage), dan trade-off burn-in vs warranty period.

## Aplikasi di Industrial Engineering

- **Reliability growth management:** monitoring prototype test (TAAF) — keputusan lanjut/stop testing berdasarkan tren $\hat\beta$.
- **Peramalan klaim garansi otomotif/elektronik:** kalibrasi NHPP terhadap heterogenitas pemakaian pelanggan (Yang, 2024).
- **Maintenance planning fleet:** proyeksi jumlah overhaul mesin produksi per kuartal.
- **Spares provisioning:** distribusi jumlah kegagalan → stok safety spare part optimal.
- **Software reliability:** model Jelinski-Moranda/Musa-Okumoto sebagai NHPP untuk defect discovery.

## Referensi Terverifikasi

1. Rigdon, S. E., & Basu, A. P. (2000). *Statistical Methods for the Reliability of Repairable Systems*. Wiley.
2. Crow, L. H. (1974). Reliability analysis for complex repairable systems. In *Reliability and Biometry*, SIAM, 379-410.
3. Ascher, H., & Feingold, H. (1984). *Repairable Systems Reliability: Modeling, Inference, Misconceptions and Their Causes*. Marcel Dekker.
4. Blischke, W. R., & Murthy, D. N. P. (1994). *Warranty Cost Analysis*. Marcel Dekker.
5. Kijima, M. (1989). Some generalized renewal processes and their use in the estimation of useful life. *Operations Research Letters*, 8(2), 67-72.
6. Yang, Z., & Xie, M. (2024). Non-homogeneous Poisson process models for warranty cost prediction with usage heterogeneity. *Reliability Engineering & System Safety*, 241, 109618.
7. Liu, B., & Elsayed, E. A. (2023). Warranty cost analysis under non-homogeneous Poisson process with minimal repair. *Computers & Industrial Engineering*, 185, 109672.
