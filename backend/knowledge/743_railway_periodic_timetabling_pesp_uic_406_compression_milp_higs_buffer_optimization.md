# Modul 743: Railway Periodic Timetabling — Periodic Event Scheduling Problem (PESP) Serafini–Ukovich, Headway Sinyal Blok Tetap, Compression Rate Kapasitas UIC Code 406 R, Maksimasi Buffer Time via MILP HiGHS untuk Ketahanan Gangguan Jadwal Komuter

**Nomor Modul:** [743]

---

## 1. Pendahuluan: Jadwal Kereta Periodik sebagai Masalah Teknik Industri

Bagi insinyur industri yang bekerja pada sistem transportasi massal, **buku jadwal kereta (*timetable*)** adalah dokumen perencanaan produksi paling kritis: ia menentukan utilisasi aset infrastruktur (rel, sinyal, platform), level of service penumpang, dan kebutuhan rolling stock serta crew. Mayoritas operator kereta komuter Eropa dan Asia (termasuk pola operasi KRL Commuter Line) menggunakan **jadwal periodik**: pola keberangkatan berulang setiap periode tetap $T$ (misalnya $T = 1800$ detik / 30 menit), sehingga mudah diingat penumpang dan efisien dalam rotasi unit.

Perumusan matematis standar untuk masalah ini adalah **Periodic Event Scheduling Problem (PESP)** yang diperkenalkan oleh Serafini & Ukovich (1989): mencari waktu pelaksanaan sejumlah *event* periodik (tiba/berangkat/lewatan) yang memenuhi kendala headway, waktu tempuh, dan dwell — semuanya bersifat modular terhadap periode $T$. Liebchen (2008) membuktikan kelayakan praktis pendekatan ini dengan menghasilkan jadwal periodik teroptimal pertama di dunia untuk jaringan S-Bahn Berlin, dengan kenaikan kapasitas ±5% tanpa investasi infrastruktur baru. Riset mutakhir memperluas PESP menuju integrasi pemilihan jalur saat konstruksi (Masing et al., 2023) dan peningkatan robustness melalui *retiming* dan *rerouting* di area bottleneck (Van Hoeck & Vansteenwegen, 2024).

Modul ini membahas: (i) fondasi matematis PESP beserta formulasi MILP-nya, (ii) perhitungan headway sinyal blok tetap dan *compression rate* kapasitas menurut **UIC Code 406 R**, serta (iii) solver Python nyata berbasis `scipy.optimize.milp` (HiGHS) pada studi kasus koridor komuter dua lintasan dengan pola salip (*overtake*) lokal–ekspres.

## 2. Landasan Matematis Formal

### 2.1 Definisi Event Graph Periodik

Misalkan $V$ himpunan *event* operasional (keberangkatan, kedatangan, lewatan) dan $A \subseteq V \times V$ himpunan aktivitas berpasangan (running, dwell, headway, turnaround). Setiap event $v \in V$ memiliki waktu pelaksanaan periodik $\pi_v \in [0, T)$ yang berulang tiap $T$. Aktivitas $a = (i,j)$ dibatasi window minimum–maksimum:

$$
l_a \;\le\; \big(\pi_j - \pi_i + T\,p_a\big) \;\le\; u_a,
\qquad p_a \in \mathbb{Z}_{\ge 0}
$$

di mana $p_a$ adalah **variabel offset integer modular** yang menangani pembungkusan siklus (*wrap-around*). Durasi aktual aktivitas dinotasikan $d_a = \pi_j - \pi_i + T\,p_a$. Himpunan kendala di atas membentuk **sistem ketidaksamaan modular**; kelayakan (feasibility) PESP telah terbukti NP-complete secara umum, sehingga formulasi MILP dengan solver branch-and-bound komersial/open-source merupakan pendekatan penyelesaian standar (Caimi et al., 2017).

### 2.2 Formulasi MILP dengan Objektif Robustness

Dua varian objektif paling umum:

**(a) Feasibility murni:** cari $(\pi, p)$ apa pun yang memenuhi semua kendala.

**(b) Maksimasi total buffer (jadwal tangguh):** selisih $u_a - d_a$ disebut *buffer* atau *slack* — ruang serap gangguan. Model optimasi robustness:

$$
\max_{\pi,\,p} \quad \sum_{a \in A} w_a \,\big(u_a - d_a\big)
\;=\; \max \sum_{a} w_a \Big(u_a - \pi_j + \pi_i - T\,p_a\Big)
$$

$$
\text{s.t.}\quad l_a \le \pi_j - \pi_i + T p_a \le u_a \quad \forall a=(i,j)\in A; \qquad 0 \le \pi_v < T; \qquad p_a \in \mathbb{Z}_{\ge 0}
$$

Karena $u_a$ konstanta, objektif ekuivalen dengan $\min \sum_a w_a (\pi_j - \pi_i + T p_a)$ — fungsi **linear penuh** dalam variabel keputusan, sehingga dapat diselesaikan MILP standar. Bobot $w_a$ memungkinkan prioritisasi (misalnya buffer pada segmen padat diberi bobot lebih tinggi), konsisten dengan praktik *retiming* untuk robustness (Van Hoeck & Vansteenwegen, 2024).

### 2.3 Headway Sinyal Blok Tetap

Pada sinyal blok tetap (*fixed block*), dua kereta berturutan pada blok yang sama dipisahkan waktu okupansi minimum:

$$
\tau_{occ} \;=\; t_{block} + t_{clear} + t_{setup}
$$

dengan $t_{block}$ waktu tempuh panjang blok, $t_{clear}$ interval pembersihan jalur (*clearance*), dan $t_{setup}$ waktu pembentukan rute sinyal. Nilai inilah yang menjadi batas bawah $l_a$ untuk aktivitas tipe headway antara event masuk blok dua kereta.

### 2.4 Compression Rate Kapasitas UIC Code 406 R

UIC (2004) mendefinisikan ukuran utilisasi kapasitas infrastruktur melalui **compression rate**:

$$
K \;=\; \frac{\sum_{b} \sum_{tr} \tau_{occ}(b,tr)}{T \cdot m}
$$

dengan $b$ indeks blok/seksi antar-stasiun, $tr$ indeks kereta yang mengokupasi blok tersebut, dan $m$ jumlah lintasan tersedia. Interpretasi: proporsi waktu infrastruktur yang "terpakai" jika jadwal dikompresi hingga batas headway minimumnya. Praktik Eropa umumnya menjaga $K$ pada band 60–75% untuk koridor campuran agar tersedia ruang recovery; nilai rendah ($K < 30\%$) menandakan cadangan kapasitas besar.

## 3. Algoritma & Implementasi Python Solver

Solver berikut membangun PESP studi kasus §4 sebagai MILP dan menyelesaikannya dengan HiGHS via `scipy.optimize.milp` (teruji berjalan, status **Optimal**):

```python
import numpy as np
from scipy.optimize import milp, LinearConstraint, Bounds
from scipy.sparse import lil_matrix

T = 1800.0  # periode jadwal (detik)

EV = {
    "dep_A_L1": 0, "arr_B_L1": 1, "dep_B_L1": 2, "arr_C_L1": 3,
    "dep_C_L1": 4, "arr_D_L1": 5,
    "dep_A_L2": 6, "pass_B_L2": 7, "pass_C_L2": 8, "arr_D_L2": 9,
}

# (event_i, event_j, l, u, w): l <= pi_j - pi_i + T*p <= u ; obj: max sum w*(u-d)
ARCS = [
    ("dep_A_L1", "arr_B_L1",   290, 380, 1.0),   # running A-B lokal (+recovery)
    ("arr_B_L1", "dep_B_L1",   195, 900, 1.0),   # dwell panjang: MENUNGGU disalip di B
    ("dep_B_L1", "arr_C_L1",   410, 500, 1.0),
    ("arr_C_L1", "dep_C_L1",    45, 240, 1.0),
    ("dep_C_L1", "arr_D_L1",   350, 420, 1.0),
    ("dep_A_L2", "pass_B_L2",  280, 350, 1.0),   # running ekspres non-stop
    ("pass_B_L2", "pass_C_L2", 390, 450, 1.0),
    ("pass_C_L2", "arr_D_L2",  340, 400, 1.0),
    ("arr_B_L1", "pass_B_L2",   60, 600, 0.0),   # urutan salip di stasiun B
    ("pass_B_L2", "dep_B_L1",  240, 300, 0.0),   # headway blok B-C penuh
    ("dep_A_L1", "dep_A_L2",   240, T-240, 0.0), # headway masuk blok A-B
    ("pass_C_L2", "dep_C_L1",  240, T-240, 0.0), # headway masuk blok C-D
    ("arr_D_L1", "dep_A_L1",   120, T-120, 0.0), # turnaround rolling stock
    ("arr_D_L2", "dep_A_L2",   120, T-120, 0.0),
]
N_EV, N_ARC = len(EV), len(ARCS)
N_VAR = N_EV + N_ARC                          # [pi | p]

lb = np.zeros(N_VAR); ub = np.zeros(N_VAR); integ = np.zeros(N_VAR)
lb[:N_EV], ub[:N_EV] = 0.0, T - 1e-6          # fase kontinu
for a in range(N_ARC):
    ub[N_EV + a] = np.ceil(ARCS[a][3] / T)    # offset integer
    integ[N_EV + a] = 1

rows, data, r_lb, r_ub = [], [], [], []
obj = np.zeros(N_VAR); ri = 0
for a, (i_n, j_n, l, u, w) in enumerate(ARCS):
    i, j = EV[i_n], EV[j_n]
    rows += [[j, ri], [i, ri], [N_EV + a, ri]]
    data += [1.0, -1.0, T]
    r_lb.append(l); r_ub.append(u); ri += 1
    if w > 0:                                  # min sum w*d  <=>  max sum w*(u-d)
        obj[j] += w; obj[i] -= w; obj[N_EV + a] += T * w

A = lil_matrix((ri, N_VAR))
for (v, r), d in zip(rows, data):
    A[r, v] += d

res = milp(c=obj, integrality=integ, bounds=Bounds(lb, ub),
           constraints=LinearConstraint(A.tocsr(), np.array(r_lb), np.array(r_ub)),
           options={"time_limit": 60, "mip_rel_gap": 0.0})
print(res.status, res.message)
```

Kompleksitas model: $|V| = 10$ variabel kontinu, $|A| = 14$ variabel integer, 14 baris kendala range — diselesaikan HiGHS dalam milidetik. Untuk jaringan nyata (ratusan–ribuan event), teknik standar yang sama tetap berlaku, ditambah dekomposisi per-koridor dan formulasi basis-siklus (cycle periodicity formulation ala Nachtigall) untuk memperkecil jumlah variabel offset.

## 4. Studi Kasus Industri: Koridor Komuter Double-Track dengan Pola Salip

### 4.1 Konfigurasi

Koridor komuter dua lintasan arah pagi $A \to B \to C \to D$, satu arah pergi, periode jadwal $T = 1800$ s (30 menit), dua layanan per siklus:

| Layanan | Pola Pemberhentian | Peran |
|---|---|---|
| L1 (lokal) | berhenti di A, B, C, D | feeder penumpang antar-stasiun |
| L2 (ekspres) | non-stop A→B→C→D | mobilitas cepat end-to-end |

Parameter keselamatan: headway blok minimum $\tau_{occ}^{nom}=240$ s per seksi (3 seksi: A-B, B-C, C-D); pola operasi menuntut **salipan L2 terhadap L1 terjadi di stasiun B** (L1 menunggu di track platform, L2 lewat di main track). Running time minimum–maksimum (window recovery) dan dwell mengikuti tabel `ARCS` pada §3.

### 4.2 Hasil Eksekusi Solver (Output Nyata)

HiGHS terminasi dengan status **Optimal** (`Optimization terminated successfully`). Linimasa unwrapped hasil solusi:

| Layanan | Event | Waktu (mm:ss) | Catatan |
|---|---|---|---|
| L1 lokal | dep_A | 21:20 | mulai siklus |
| L1 lokal | arr_B | 26:10 | running 290 s (buffer 90 s) |
| L2 ekspres | dep_A | 25:20 | headway blok A-B = 240 s dari L1 ✓ |
| L2 ekspres | pass_B | **30:00** | **salip L1 di stasiun B** |
| L1 lokal | dep_B | 34:00 | jalan 240 s setelah L2 lewat (headway B-C ✓) |
| L2 ekspres | pass_C | 36:30 | non-stop |
| L1 lokal | arr_C | 40:50 → dwell 45 s | |
| L2 ekspres | arr_D | 42:10 | total A→D = 1010 s |
| L1 lokal | arr_D | 47:25 | total A→D = 1565 s |

Distribusi buffer per aktivitas fleksibel (ringkas): running arcs menyimpan 60–90 s recovery masing-masing; **dwell menunggu salip di B menyimpan 430 s** — buffer terbesar, tepat di titik interaksi dua layanan yang paling rawan gangguan. Total buffer terpakai 1065 s dari window fleksibel 1340 s (**rasio recovery 79,5%**).

Metrik kapasitas UIC 406 R: $\sum \tau_{occ} = 3\ \text{seksi} \times 2\ \text{kereta} \times 240\ \text{s} = 1440$ s;

$$
K = \frac{1440}{1800 \times 3} = 26{,}7\%
$$

### 4.3 Interpretasi Manajerial

1. **Salipan terprogram menghasilkan jadwal tangguh.** Dengan memaksa overtake di B, solver mendistribusikan slack terbesar (430 s) pada aktivitas tunggu — gangguan keterlambatan L2 hingga ±4 menit masih terserap tanpa merambat ke siklus berikutnya.
2. **Kapasitas belum menjadi bottleneck.** $K = 26{,}7\%$ jauh di bawah ambang praktik Eropa (60–75%): masih ada ruang menambah 1–2 layanan/siklus sebelum investasi sinyal diperlukan.
3. **Trade-off travel time vs robustness.** Menjalankan semua kereta pada running time minimum memaksimalkan buffer total, tetapi regulator umumnya menetapkan band recovery 5–10%; bobot $w_a$ memungkinkan kalibrasi kebijakan tersebut.

## 5. Keterbatasan Model & Ekstensi

- **Urutan tetap *a priori*.** Pola salip diasumsikan sudah diputuskan (L1 lebih dulu masuk A-B). Keputusan ordering yang belum ditentukan memerlukan biner tambahan (varian disjunctive PESP).
- **Deterministik.** Ketidakpastian delay dimodelkan implisit lewat buffer; analisis stochastic penuh (delay propagation Markov / simulasi) adalah lapisan evaluasi pasca-optimalisasi.
- **Ekstensi praktis:** simetri jadwal pulang-pergi (Liebchen, 2008), integrasi pemilihan track saat maintenance window (Masing et al., 2023), dan retiming-rerouting bottleneck multi-train (Van Hoeck & Vansteenwegen, 2024).

## Referensi

1. Serafini, P., & Ukovich, W. (1989). *A Mathematical Model for Periodic Scheduling Problems*. **SIAM Journal on Discrete Mathematics**, 2(4), 550–581. https://doi.org/10.1137/0402049 — ✅ tervalidasi Crossref
2. Liebchen, C. (2008). *The First Optimized Railway Timetable in Practice*. **Transportation Science**, 42(4), 420–435. https://doi.org/10.1287/trsc.1080.0240 — ✅ tervalidasi Crossref
3. Caimi, G., Kroon, L., & Liebchen, C. (2017). *Models for railway timetable optimization: Applicability and applications in practice*. **Journal of Rail Transport Planning & Management**, 6(4), 285–312. https://doi.org/10.1016/j.jrtpm.2016.11.002 — ✅ tervalidasi Crossref
4. Masing, B., Lindner, N., & Liebchen, C. (2023). *Periodic timetabling with integrated track choice for railway construction sites*. **Journal of Rail Transport Planning & Management**, 28, 100416. https://doi.org/10.1016/j.jrtpm.2023.100416 — ✅ tervalidasi Crossref
5. Van Hoeck, I., & Vansteenwegen, P. (2024). *A MILP model to improve the robustness of a railway timetable by retiming and rerouting in a complex bottleneck area*. **Journal of Rail Transport Planning & Management**, 32, 100488. https://doi.org/10.1016/j.jrtpm.2024.100488 — ✅ tervalidasi Crossref
6. UIC (2004). *Code 406 R — Capacity*. International Union of Railways (Union Internationale des Chemins de fer), Paris. [Standar perserikatan kereta api internasional]
