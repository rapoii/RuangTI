# Modul 737: Pemodelan Dinamika Pejalan Kaki & Optimasi Evakuasi Darurat Industri — Model Hidraulik SFPE, Fractional Effective Dose (ISO 13571), Kerangka ASET–RSET, dan Alokasi Kapasitas Exit Berbasis Linear Programming (NFPA 101, ISO 20414)

**Nomor Modul:** [737]  
**Domain Keahlian:** Keselamatan Kebakaran & Rekayasa Evakuasi (*Fire Safety Engineering, Pedestrian Dynamics, Emergency Egress Modeling, Hydraulic Model, ASET-RSET Margin, Crowd Safety, Occupant Load Analysis*).  
**Sumber Referensi Utama:** *SFPE Handbook of Fire Protection Engineering 5th ed. (Hurley dkk., 2016)*, *Helbing & Molnár — Phys. Rev. E 1995*, *ISO 20414:2020*, *ISO 13571:2012*, *NFPA 101 Life Safety Code (2024)*, *Jiang dkk. — Simul. Modell. Pract. Theory 2025*, *Lu dkk. — J. Build. Eng. 2025*.

---

## 1. Landasan Teori & Tinjauan Konseptual

### 1.1 Timeline Evakuasi dan Margin Keselamatan ASET–RSET

Rekayasa evakuasi industri berdiri di atas satu ketaksamaan fundamental: **Required Safe Egress Time (RSET)** harus lebih kecil daripada **Available Safe Egress Time (ASET)**:

$$
\text{RSET} = t_{\text{deteksi}} + t_{\text{alarm}} + t_{\text{pre-movement}} + t_{\text{movement}} \;<\; \text{ASET} = f(\text{tenability})
$$

Selisihnya disebut **safety margin** $SM = \text{ASET} - \text{RSET}$; desain diterima bila $SM > 0$ dengan probabilitas yang memadai atas seluruh skenario kebakaran desain. Komponen $t_{\text{movement}}$ sendiri terdekomposisi menjadi waktu berjalan menuju exit (*travel time*) plus waktu antrian pada bottleneck (pintu, tangga, koridor sempit) — dan justru komponen antrian inilah yang paling dapat dioptimasi secara rekayasa, karena bergantung pada **alokasi penghuni ke kapasitas exit**, bukan sekadar lebar fisik bukaan.

### 1.2 Perilaku Herding sebagai Sumber Inefisiensi Kapasitas

Data kecelakaan kerumunan (mis. tragedi klub malam dan pabrik dengan satu pintu utama terpakai) menunjukkan penghuni cenderung mengikuti kerumunan atau memilih jalur yang paling familiar — *herding* — sehingga sebagian exit yang tersedia tetap kosong sementara satu bottleneck jenuh. Dari kacamata Teknik Industri, ini adalah masalah **alokasi kapasitas server ganda**: $N$ pelanggan (penghuni) harus didistribusikan ke $m$ kanal (exit/tangga) berkapasitas terbatas untuk meminimum *makespan* evakuasi. Perilaku individual (social force, cellular automata, model ML-surrogate) menjelaskan *bagaimana* orang bergerak; optimasi alokasi menjawab *ke mana* mereka seharusnya diarahkan melalui signage dinamis, penataan rute latihan, dan prosedur tanggap darurat.

---

## 2. Formulasi Matematis & Notasi Rekayasa Sistem

### 2.1 Model Hidraulik SFPE (Nelson & Mowrer)

Model hidraulik memperlakukan aliran pejalan kaki analog aliran fluida: laju aliran adalah fungsi densitas $\rho$ [orang/m²]. Kecepatan berjalan pada komponen horizontal dimodelkan linier:

$$
v(\rho) = k\,(1 - a\,\rho)\quad [\text{m/s}], \qquad k = 1{,}40\;\text{m/s},\quad a = 0{,}266\;\tfrac{\text{m}^2}{\text{orang}}
$$

Specific flow (laju aliran per unit lebar efektif):

$$
F_s(\rho) = \rho \cdot v(\rho) = k\rho(1-a\rho) \qquad [\text{orang}/(\text{m}\cdot\text{s})]
$$

Diferensiasi $\frac{dF_s}{d\rho}=0$ memberikan densitas optimal $\rho^* = \frac{1}{2a} \approx 1{,}88$ orang/m² dan specific flow maksimum:

$$
F_{s,\max} = \frac{k}{4a} \approx 1{,}32\ \text{orang}/(\text{m}\cdot\text{s})
$$

Lebar efektif mengoreksi lebar bersih geometris dengan *boundary layer* $b$ (dinding ≈ 0,15 m; handrail tangga ≈ 0,15 m per sisi):

$$
W_e = W - 2b
$$

Kapasitas throughput sebuah exit/tangga menjadi $C_j = F_{s,\max}\cdot W_{e,j}$ [orang/detik], sehingga waktu antrian melewati bottleneck untuk beban $N_j$ penghuni:

$$
T_j(N_j) = \frac{N_j}{F_{s,\max}\cdot W_{e,j}}
$$

### 2.2 Tenability & Fractional Effective Dose (ISO 13571)

ASET ditentukan oleh kriteria tenabilitas gas toksik. Untuk gas asfiksian (CO, HCN), dosis efektif fraksional diakumulasi diskret:

$$
FED = \sum_i \left(\frac{C^{(i)}_{CO}}{35000} + \frac{C^{(i)}_{HCN}}{220}\right)\Delta t_i, \qquad C \text{ dalam ppm},\ \Delta t \text{ dalam menit}
$$

Inkapasitasi diprediksi saat $FED = 1$. Waktu saat kurva $FED(t)$ menyentuh satu adalah estimasi ASET untuk skenario kebakaran tersebut (biasanya input dari zone model/CFD).

### 2.3 Model Social Force (Mikroskopis)

Pada level individu, model Helbing–Molnár merumuskan akselerasi pejalan kaki $i$ (massa $m_i$) sebagai gabungan gaya dorong menuju kecepatan desired dan gaya interaksi:

$$
m_i\frac{d\mathbf{v}_i}{dt} = m_i\frac{v_i^{0}\,\mathbf{e}_i^{0} - \mathbf{v}_i}{\tau_i} + \sum_{j\neq i}\mathbf{f}_{ij} + \sum_{W}\mathbf{f}_{iW}
$$

dengan $\tau_i$ waktu relaksasi, $\mathbf{f}_{ij}$ gaya repulsif sosial antar-individu, dan $\mathbf{f}_{iW}$ interaksi dengan dinding/rintangan. Model ini (dan varian cellular automata serta surrogate machine learning-nya — lihat Jiang dkk., 2025) digunakan untuk validasi mikro pola aliran, sedangkan optimasi kapasitas agregat menggunakan model hidraulik.

### 2.4 Optimasi Alokasi Exit sebagai Linear Program Minimax

Misalkan lantai terbagi ke dalam zona produksi $i = 1,\dots,n$ dengan jumlah penghuni $n_i$, dan tersedia exit/tangga $j = 1,\dots,m$ berkapasitas $C_j = F_{s,\max}W_{e,j}$. Variabel keputusan $x_{ij}$ = banyak penghuni zona $i$ yang diarahkan ke exit $j$. Tujuan: minimumkan waktu clearance antrian maksimum $T$ (makespan):

$$
\min_{x,\,T}\; T \qquad \text{s.t.} \quad \sum_{j} x_{ij} = n_i \quad \forall i; \qquad \sum_{i} x_{ij} \le C_j\,T \quad \forall j; \qquad x_{ij} \ge 0
$$

Kendala pertama konservasi penghuni; kendala kedua batas throughput kapasitas selama horizon $T$; fungsi tujuan dan kendala linier dalam $(x,T)$ sehingga LP dapat diselesaikan eksak (simplex HiGHS). Secara teori graf, ini bayangan kontinu dari *dynamic flow evacuation problem* pada jaringan time-expanded — keluarga masalah network flows standar dalam riset operasi (Hillier & Lieberman) — dan solusi LP-nya memberikan lower bound yang ketat bagi simulasi mikroskopis.

RSET total kemudian $= t_{\text{deteksi}} + t_{\text{alarm}} + \bar{t}_{\text{pre-move}} + T^*$, dibandingkan terhadap ASET tiap skenario.

---

## 3. Algoritma & Implementasi Python Solver

Implementasi lengkap (NumPy + SciPy HiGHS): (a) kalkulator hidraulik SFPE, (b) LP minimax alokasi exit, (c) kalkulator FED/ASET ISO 13571. Kode telah dieksekusi dan angka studi kasus pada Bagian 4 adalah output nyata program ini.

```python
import numpy as np
from scipy.optimize import linprog

# ---- Konstanta Model Hidraulik SFPE (Nelson & Mowrer) ----
K_SPEED, A_COEF = 1.40, 0.266          # m/s ; m^2/orang
FS_MAX = K_SPEED / (4 * A_COEF)        # 1.3158 orang/(m*s) pada rho* = 1.880

def spec_flow(rho):                    # Fs = rho * v(rho)
    return rho * K_SPEED * (1 - A_COEF * rho)

# ---- Data lantai-2 pabrik elektronik (ilustrasi) ----
zones  = [("Zona SMT", 95), ("Zona Assembling", 120), ("Zona QC-Packaging", 45)]
stairs = [("Tangga-A (barat)", 1.10), ("Tangga-B (timur)", 0.90)]   # We [m]
caps   = np.array([FS_MAX * w[1] for w in stairs])                  # orang/detik
t_det, t_alarm, t_pre = 60.0, 30.0, 90.0                            # detik

# ---- (a) Baseline HERDING: semua ke tangga terdekat/familiar ----
load = {"Tangga-A (barat)": 260.0, "Tangga-B (timur)": 0.0}
t_queue_herding = max(load[nm] / (FS_MAX * we) for nm, we in stairs)     # 179.6 s
rset_herding = t_det + t_alarm + t_pre + t_queue_herding                 # 359.6 s

# ---- (b) LP minimax: variabel x[i,j] + T ----
nz, ns = len(zones), len(stairs)
c = np.zeros(nz * ns + 1); c[-1] = 1.0                                   # min T
A_ub, b_ub = [], []
for j in range(ns):                                                      # sum_i x_ij <= Cj*T
    row = np.zeros(nz * ns + 1)
    for i in range(nz): row[i * ns + j] = 1.0
    row[-1] = -caps[j]; A_ub.append(row); b_ub.append(0.0)
A_eq, b_eq = [], []
for i, (zn, ni) in enumerate(zones):                                     # sum_j x_ij = n_i
    row = np.zeros(nz * ns + 1)
    for j in range(ns): row[i * ns + j] = 1.0
    A_eq.append(row); b_eq.append(ni)
res = linprog(c, A_ub=np.array(A_ub), b_ub=b_ub,
              A_eq=np.array(A_eq), b_eq=b_eq,
              bounds=[(0, None)] * (nz * ns) + [(0, None)], method="highs")
X, T_opt = res.x[:nz*ns].reshape(nz, ns), res.x[-1]                      # T_opt = 98.8 s
rset_opt = t_det + t_alarm + t_pre + T_opt                               # 278.8 s

# ---- (c) ASET dari FED ISO 13571 (profil asap zone-model, grid 0.5 menit) ----
def aset_fed(k_co, k_hcn, t_start=1.5):              # gradien ppm/menit setelah t_start
    tg = np.arange(0, 21, 0.5)
    co  = np.where(tg < t_start, 0, k_co  * (tg - t_start))
    hcn = np.where(tg < t_start, 0, k_hcn * (tg - t_start))
    fed = np.cumsum((co / 35000 + hcn / 220) * 0.5)
    idx = np.where(fed >= 1.0)[0]
    return tg[idx[0]] * 60 if idx.size else float("inf")
```

---

## 4. Studi Kasus Industri: Pabrik Elektronik Dua Lantai (Kawasan MM2100, Cikarang)

Sebuah pabrik elektronik (kasus ilustratif komposit) memiliki lantai produksi dua dengan 3 zona kerja dan total **260 pekerja shift malam**, dilayani dua tangga darurat: Tangga-A (barat, $W_e = 1{,}10$ m) dan Tangga-B (timur, $W_e = 0{,}90$ m). Prosedur darurat eksisting secara de-facto mendorong semua penghuni ke Tangga-A (jalur latihan tunggal — perilaku herding).

**Hasil eksekusi solver (angka riil dari kode Bagian 3):**

| Besaran | Herding (eksisting) | LP Optimal |
|---|---|---|
| Beban Tangga-A | 260 orang | 143 orang (95 SMT + 48 Assembling) |
| Beban Tangga-B | 0 orang | 117 orang (72 Assembling + 45 QC) |
| Waktu antrian dominan | 179,6 s | 98,8 s |
| **RSET total** | **359,6 s (5,99 menit)** | **278,8 s (4,65 menit)** |
| Reduksi waktu antrian | — | **−45,0%** |

Kapasitas gabungan $C_A + C_B = 1{,}3158(1{,}10 + 0{,}90) = 2{,}63$ orang/s; LP mendistribusikan beban sehingga kedua bottleneck selesai bersamaan (properti optimal makespan), alih-alih satu antre 3 menit sementara exit lain kosong.

**Analisis ASET tiga skenario kebakaran gudang rak (profil CO/HCN linier pasca-flashover, mulai menit ke-1,5):**

| Skenario | Gradien CO / HCN (ppm/menit) | ASET ($FED{=}1$) | Margin Herding | Margin LP Optimal |
|---|---|---|---|---|
| Api lambat | 180 / 9 | 480 s | +120 s ✔ | +201 s ✔ |
| Api cepat | 320 / 16 | 390 s | +30 s ⚠ tipis | +111 s ✔ |
| Api sangat cepat | 450 / 22 | **330 s** | **−30 s ✘ GAGAL** | **+51 s ✔** |

Interpretasi manajerial: pada skenario api sangat cepat, prosedur eksisting membuat seluruh populasi gagal evakuasi aman (RSET 359,6 s > ASET 330 s), sementara redistribusi beban exit via LP menyelamatkan margin +51 s — tanpa investasi konstruksi apa pun, hanya melalui desain rute latihan, signage fotoluminesen terarah, dan penugasan floor marshal per zona. Mitigasi lanjutan yang lazim: penambahan tangga luar (menambah $C_j$), perbaikan deteksi (memotong $t_{\text{deteksi}}$), dan drill untuk menekan distribusi pre-movement.

**Verifikasi & validasi (ISO 20414:2020):** hasil agregat model hidraulik harus divalidasi terhadap simulasi mikroskopis (social force / CA / surrogate ML) dan data drill aktual — bandingkan distribusi clearance time, bukan hanya nilai rerata; dokumentasi kalibrasi menjadi lampiran audit SMK3.

---

## 5. Integrasi Standar, Kepatuhan & Praktik Profesi

- **NFPA 101 Life Safety Code (edisi 2024):** dasar *occupant load factor*, kapasitas means of egress $= F_{s,\max} \times W_e$, dan larangan ketergantungan pada satu jalur egress.
- **ISO 20414:2020:** protokol verifikasi & validasi model evakuasi gedung (komponen, fungsional, dan end-to-end) — wajib dikutip saat hasil solver dipakai untuk keputusan keselamatan formal.
- **ISO 13571:2012:** basis perhitungan FED tenabilitas gas asfiksian yang dipakai menetapkan ASET.
- **Permen PUPR No. 26/PRT/M/2008** (Persyaratan Teknis Sistem Proteksi Bangunan Gedung Terhadap Bahaya Kebakaran) dan **PP No. 50 Tahun 2012 (SMK3):** payung hukum nasional untuk desain jalur evakuasi pabrik dan kewajiban pengujian tanggap darurat berkala.
- **Tren riset 2025:** surrogate machine learning untuk simulasi mikroskopis berkecepatan real-time (Jiang dkk., *Simulation Modelling Practice and Theory*, 2025) dan asesmen safe egress time berbasis AI untuk gedung kompleks (Lu dkk., *Journal of Building Engineering*, 2025) membuka jalur integrasi solver LP agregat ini dengan digital twin keselamatan.

---

## 6. Referensi Terverifikasi

1. Hurley, M. J., dkk. (Eds.). (2016). *SFPE Handbook of Fire Protection Engineering* (5th ed.). Springer/NFPA. — Bab Hydraulic Model (Nelson & Mowrer) & Movement of People (Pauls).
2. Helbing, D., & Molnár, P. (1995). Social force model for pedestrian dynamics. *Physical Review E*, 51(5), 4282–4286. DOI: [10.1103/PhysRevE.51.4282](https://doi.org/10.1103/PhysRevE.51.4282) *(diverifikasi Crossref)*.
3. Jiang, N., Yu, H., Lee, E. W. M., Yang, H., Yang, L., & Yuen, R. K. K. (2025). Machine learning methods in microscopic pedestrian and evacuation dynamics simulation: a comparative study. *Simulation Modelling Practice and Theory*, 144, 103180. DOI: [10.1016/j.simpat.2025.103180](https://doi.org/10.1016/j.simpat.2025.103180) *(diverifikasi Crossref)*.
4. Lu, T., Zeng, Y., Zheng, Z., Zhang, Y., Huang, X., & Lu, X. (2025). AI-powered safe egress time assessment for complex building fire evacuation. *Journal of Building Engineering*, 110, 113013. DOI: [10.1016/j.jobe.2025.113013](https://doi.org/10.1016/j.jobe.2025.113013) *(diverifikasi Crossref)*.
5. ISO 20414:2020. *Fire safety engineering — Verification and validation protocol for building fire evacuation models*. International Organization for Standardization.
6. ISO 13571:2012. *Life-threatening components of fire — Guidelines for the estimation of time available for escape using fire data*. ISO.
7. NFPA 101. (2024). *Life Safety Code*. National Fire Protection Association.
8. Hillier, F. S., & Lieberman, G. J. *Introduction to Operations Research* — bab Network Flow Models (basis dynamic flow evacuation).

**Kata kunci:** emergency egress, RSET, ASET, hydraulic model, SFPE, fractional effective dose, pedestrian dynamics, social force model, linear programming, minimax allocation, crowd safety, NFPA 101, ISO 20414, SMK3.
