# Modul 71: Reconfigurable Manufacturing Systems (RMS)

## Definisi & Konsep Inti
Reconfigurable Manufacturing System (RMS) adalah sistem produksi yang dirancang untuk menyesuaikan kapasitas dan fungsionalitas secara cepat dalam merespons perubahan permintaan pasar atau regulasi. Berbeda dengan Flexible Manufacturing Systems (FMS) yang memiliki fleksibilitas tetap, RMS menawarkan **customized flexibility** melalui modularitas dan integrabilitas.

Menurut Koren et al. (2023), RMS didefinisikan oleh enam karakteristik kunci: modularity, integrability, convertibility, diagnosability, scalability, dan customization.

## Karakteristik RMS

### 1. Modularity
Sistem terdiri dari unit-unit independen yang dapat ditukar atau di-upgrade tanpa mengganggu operasi keseluruhan.

$$
M_{sys} = \sum_{i=1}^{n} m_i \cdot w_i
$$

di mana $m_i$ adalah tingkat modularitas komponen ke-$i$ dan $w_i$ adalah bobot kepentingannya.

### 2. Scalability
Kemampuan menambah atau mengurangi kapasitas produksi secara inkremental:

$$
C(t) = C_0 + \sum_{k=1}^{K} \Delta C_k \cdot u_k(t)
$$

di mana $\Delta C_k$ adalah increment kapasitas dan $u_k(t)$ adalah fungsi aktivasi pada waktu $t$.

### 3. Convertibility
Waktu yang dibutuhkan untuk mengubah konfigurasi sistem:

$$
T_{conv} = T_{setup} + T_{retool} + T_{validation}
$$

Target RMS modern: $T_{conv} < 4$ jam (Galizia & Bortolini, 2025).

## Model Optimasi Konfigurasi RMS

### Integer Programming untuk Reconfiguration Planning
Minimalkan total biaya rekonfigurasi dan operasional:

$$
\min Z = \sum_{t=1}^{T} \left[ \sum_{j=1}^{J} c_j^{op} x_{jt} + \sum_{j=1}^{J} \sum_{k=1}^{K} c_{jk}^{rec} y_{jkt} \right]
$$

Subject to:
$$
\sum_{j=1}^{J} a_{ij} x_{jt} \geq D_{it}, \quad \forall i, t
$$
$$
x_{jt} \leq M_j z_{jt}, \quad \forall j, t
$$
$$
y_{jkt} \geq z_{j,t+1} - z_{jt}, \quad \forall j, k, t
$$

di mana $x_{jt}$ adalah level produksi mesin $j$ pada periode $t$, $y_{jkt}$ adalah variabel biner rekonfigurasi, dan $D_{it}$ adalah demand produk $i$.

## Sustainability dalam RMS
Studi terbaru Galizia & Bortolini (2025) memperkenalkan model bi-objective yang menyeimbangkan biaya dan emisi karbon:

$$
\min F = \alpha \cdot Z_{cost} + (1-\alpha) \cdot Z_{env}
$$

$$
Z_{env} = \sum_{t=1}^{T} \sum_{j=1}^{J} e_j \cdot E_{jt} \cdot x_{jt}
$$

di mana $e_j$ adalah faktor emisi spesifik mesin dan $E_{jt}$ adalah konsumsi energi per unit.

## Digital Twin untuk RMS
Integrasi Industry 4.0 memungkinkan virtual commissioning sebelum rekonfigurasi fisik:

$$
\hat{P}(t+\Delta t) = f(P(t), \theta(t), u(t)) + \epsilon(t)
$$

Model prediksi digital twin memvalidasi konfigurasi baru dengan akurasi >95% sebelum implementasi (Li et al., 2024).

## Referensi Terverifikasi
1. Bahtat, C., El Barkany, A., & Abdelouahhab, J. (2023). Reconfigurable manufacturing systems: From automation through industry 4.0. *International Journal of Industrial Engineering*.
2. Milisavljevic-Syed, J., Li, J., & Xia, H. (2024). Realisation of responsive and sustainable reconfigurable manufacturing systems. *International Journal of Production Research*, Taylor & Francis.
3. Pansare, R., Yadav, G., & Nagare, M.R. (2023). Reconfigurable manufacturing system: A systematic review, meta-analysis and future research directions. *Journal of Engineering, Design and Technology*, Emerald.
4. Galizia, F.G., & Bortolini, M. (2025). Bi-objective design of sustainable reconfigurable manufacturing systems. *International Journal of Production Research*, Taylor & Francis.
5. Kumar, S., Mehdi, H., & Saroha, M. (2025). Reconfigurable manufacturing systems and Industry 4.0: Transforming the future of manufacturing. *Journal of Advanced Manufacturing Systems*, World Scientific.
6. Li, X., Athinarayanan, R., Wang, B., Yuan, W., & Zhou, Q. (2024). Smart reconfigurable manufacturing: Literature analysis. *Procedia CIRP*, Elsevier.
7. Saffar, F., Moghaddam, S.K., & Huang, S. (2025). Dynamic layout design for scalable reconfigurable manufacturing systems. *International Journal of Production Research*, Taylor & Francis.

</content>