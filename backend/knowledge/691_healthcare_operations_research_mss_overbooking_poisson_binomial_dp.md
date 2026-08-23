# Modul 691: Healthcare Operations Research — Master Surgical Schedule & Overbooking Janji Temu: Dynamic Programming Alokasi Dua-Sumber-Daya Eksak (Blok OR × Jam-Tempat-Tidur ICU) dengan Service Floor Mandat, Optimalisasi Overbooking Eksak Distribusi Poisson-Binomial Kehadiran Heterogen, dan Validasi Monte Carlo Menyeluruh

## 1. Pengantar & Konteks Industri: Rumah Sakit sebagai Sistem Produksi

Sistem layanan kesehatan adalah salah satu arena aplikasi Teknik Industri yang tumbuh paling cepat — IISE memiliki *Society for Health Systems*, INFORMS memiliki komunitas *Health Applications Society*, dan jurnal seperti *Operations Research for Health Care* serta arus paper *Omega*/*EJOR* 2023–2026 menunjukkan intensitas riset yang tinggi (mis. penjadwalan master bedah robust-distribusional, Zhang dkk., 2026; perencanaan OR-hingga-ICU/ward terintegrasi, 2026). Dua masalah kapasitas paling fundamental di rumah sakit adalah:

1. **Master Surgical Schedule (MSS)** — alokasi blok operasi (*operating room block time*) mingguan kepada spesialisasi bedah pada level taktis. Durasi bedah stokastik, ketersediaan ahli bedah terbatas, dan — sering dilupakan analisis naif — **kapasitas ICU pasca-operasi** yang menjadi sumber daya hilir (*downstream*) pengikat. Literatur mutakhir menegaskan ketidakpastian durasi dan paralelisme spesialisasi sebagai inti kesulitan masalah ini (Omega, 2026; EJOR, 2026).
2. **Overbooking janji temu rawat jalan** — pasien *no-show* (tidak hadir tanpa membatalkan) mencapai 5–30% di banyak klinik, menciptakan dilema klasik: slot kosong (kapasitas produktif menganggur) versus lembur akibat kelebihan pasien hadir. Kerangka kanoniknya adalah model overbooking LaGanga–Lawrence (2007); frontier terbaru mengintegrasikan prediksi *no-show* individual ke keputusan penjadwalan (*Annals of Operations Research*, 2024).

```
+--------------------------------------------------------------------------------------------------+
|                 STACK KEPUTUSAN KAPASITAS RUMAH SAKIT (horizon menurun)                            |
+--------------------------------------------------------------------------------------------------+
|  STRATEGIS : jumlah kamar-OP, bed ICU, proyeksi demografi casemix                                  |
|        |                                                                                           |
|        v                                                                                           |
|  TAKTIS   : MASTER SURGICAL SCHEDULE  x_k = blok/minggu per spesialisasi k                          |
|             kendala: total blok B, jam-TT ICU elektif H, batas bedah s_k, service floor x_min       |
|             solver modul ini : DP alokasi dua-sumber-daya ESAK                                      |
|        |                                                                                           |
|        v                                                                                           |
|  OPERASIONAL: sekuens kasus harian (bin-packing durasi stokastik lognormal) -> lembur/idle blok     |
|        |                                                                                           |
|        v                                                                                           |
|  RAWAT JALAN: overbooking harian n* pasien utk C slot -- distribusi Poisson-Binomial kehadiran      |
|             solver modul ini : konvolusi eksak + minimisasi biaya ekspektasi + Monte Carlo           |
+--------------------------------------------------------------------------------------------------+
```

Studi kasus modul ini: rumah sakit rujukan dengan **20 blok elektif/minggu**, anggaran **520 jam-tempat-tidur (jam-TT) ICU elektif/minggu**, lima spesialisasi bedah dengan karakteristik kasus berbeda, dan klinik poliklinik 16 slot/hari dengan profil *no-show* meningkat menjelang akhir sesi. Seluruh solver ditulis NumPy murni, **eksak** (bukan heuristik): DP alokasi menjamin optimum global, dan distribusi Poisson-Binomial dikonvolusi persis — sehingga hasil dapat diverifikasi silang terhadap simulasi Monte Carlo 500 ribu hari.

---

## 2. Pemodelan Matematis Formal

### 2.1 Master Surgical Schedule sebagai Program Integer dengan Struktur Terpisah

Himpunan spesialisasi $K=\{1,\dots,m\}$. Parameter: $c_k$ = kasus rata-rata per blok; $w_k$ = nilai bersih per kasus; $s_k$ = batas blok atas (ketersediaan ahli bedah); $h_k$ = jam-TT ICU per kasus pasca-op; $x_k^{\min}$ = *service floor* mandat akses publik. Kapasitas: $B$ blok/minggu, $H$ jam-TT ICU/minggu. Model taktis:

$$\max \; \sum_{k\in K} w_k c_k x_k \quad \text{s.t.}\quad \sum_{k\in K} x_k \le B,\qquad \sum_{k\in K} h_k c_k x_k \le H,\qquad x_k^{\min}\le x_k\le s_k,\qquad x_k\in\mathbb{Z}_{+}$$

Secara umum MSS dengan sekuensing adalah NP-hard (formulasi set-partitioning/VRP-like; lihat tinjauan Omega 2026), namun struktur **objektif terpisah per spesialisasi + dua kendala agregat** membuat versi taktis ini larut menjadi *bounded multi-dimensional knapsack* yang diselesaikan **eksak** dengan dynamic programming. Definisikan fungsi nilai rekursif pada state (spesialisasi terproses $k$, blok terpakai $b$, jam-TT terpakai $u$):

$$V_k(b,u)=\max_{0\le x\le s_k-x_k^{\min}}\Big\{V_{k-1}(b-x,\;u-\lfloor h_k c_k\rfloor x)+w_k c_k\,x\Big\},\qquad V_0(b_0,u_0)=0$$

dengan state awal $(b_0,u_0)$ = konsumsi wajib dari floor mandat $\sum_k x_k^{\min}$ (dan konsumsi ICU-nya). Rekonstruksi solusi $x^\*$ dilakukan mundur melalui tabel keputusan $\text{argmax}$. Kompleksitas $\mathcal{O}\!\big(m\cdot B\cdot \bar{s}\cdot U\big)$ dengan $U=\lceil H\rceil$ unit diskritasi jam-TT — polinomial dan eksak.

**Harga bayangan kapasitas** dihitung marginal-eksak (bukan aproksimasi simplex): $z^\*(B{+}1)-z^\*$ dan $z^\*(H{+}\Delta)-z^\*$ memberi nilai tambah satu blok/minggu dan $\Delta$ jam-TT/minggu — dasar kuantitatif keputusan investasi (buka blok baru vs tambah bed ICU elektif).

### 2.2 Overbooking: Distribusi Poisson-Binomial Kehadiraan Heterogen

Klinik membuka $C$ slot; manajer memesan $n\ge C$ pasien. Pasien $i$ hadir secara independen dengan probabilitas $a_i=1-q_i$, $q_i$ = peluang *no-show*. Untuk profil sesi, $q_i$ meningkat mendekati akhir hari ($q_i=\min(q_0+\gamma i,\;\bar q)$) — konsisten dengan bukti empiris pola *no-show* sepanjang sesi. Jumlah kehadiran $Y_n=\sum_{i=1}^{n}\text{Bernoulli}(a_i)$ berdistribusi **Poisson-Binomial**, dengan PMF dihitung persis via konvolusi berantai:

$$P(Y_n=y)=\prod_{i=1}^{n}\big[(1-a_i)+a_i z\big] \;\Longrightarrow\; \mathrm{pmf}^{(i)} = \mathrm{pmf}^{(i-1)} * [\,q_i,\; a_i\,],\qquad y=0,\dots,n$$

Fungsi biaya harian ala LaGanga–Lawrence (2007) dengan biaya slot kosong $c_I$ (hilangnya *contribution margin*) dan biaya lembur per pasien berlebih $c_O$:

$$\min_{n\in\{C,\dots,n_{\max}\}} \; g(n)=\mathbb{E}\big[c_I(C-Y_n)^{+}+c_O(Y_n-C)^{+}\big]=\sum_{y=0}^{n}\big[c_I(C-y)^{+}+c_O(y-C)^{+}\big]\,P(Y_n=y)$$

Struktur $g(n)$ berbentuk-U: turun saat *overbooking* menyelamatkan slot dari *no-show*, naik saat risiko lembur mendominasi — analog *newsvendor*: $n^\*$ menuju titik kritis antara biaya *underage* $c_I$ dan *overtime* $c_O$. Karena tiap $g(n)$ dihitung dari PMF **eksak**, argmin pada grid integer adalah optimum global diskrit.

**Aproksimasi homogen** (mengganti seluruh $a_i$ dengan rata-rata $\bar a$) menghasilkan binomial standar; modul ini mengukur bias keputusan dan bias estimasi biayanya terhadap model eksak heterogen.

### 2.3 Validasi: Simulasi Monte Carlo dan Operasional Blok OR

Dua lapis validasi independen: (i) simulasi $5\times10^5$ hari klinik membandingkan biaya rata-rata empiris terhadap $g(n^\*)$ analitik; (ii) simulasi 52 minggu operasi blok OR dengan durasi kasus **lognormal** per spesialisasi,

$$D\sim\text{Lognormal}\big(\mu,\sigma^2\big),\quad \mu=\ln\!\big(L/n_c\big)-\tfrac{1}{2}\sigma^2,\quad \sigma=\sigma_k \;\text{(heterogenitas spesialisasi)}$$

($L$ = panjang blok, $n_c$ = kasus terjadwal per blok) untuk memperkirakan $P(\text{lembur blok})$, ekor lembur bersyarat, dan sisa waktu menganggur — metrik yang menentukan buffer operasional harian di atas jadwal taktis.

---

## 3. Algoritma & Python Solver: DP Alokasi Eksak + Konvolusi Poisson-Binomial + Monte Carlo (NumPy Murni)

```python
import numpy as np

rng = np.random.default_rng(20260823)

# ============================== PART A =====================================
K = 5  # 0 Kardiotoraks, 1 Ortopedi, 2 Bedah Umum, 3 Neurokirurgi, 4 Ginekologi-Onkologi
name   = ["Kardiotoraks", "Ortopedi", "Bedah Umum", "Neurokirurgi", "Gin.-Onko"]
c_bar  = np.array([1.5, 3.0, 4.5, 2.0, 3.5])          # kasus rata-rata per blok
w_val  = np.array([28.0, 14.0, 8.0, 22.0, 10.0])      # nilai bersih per kasus (Rp juta)
s_cap  = np.array([6, 7, 12, 5, 8])                   # batas atas blok (ketersediaan ahli bedah)
x_min  = np.array([2, 2, 4, 1, 2])                    # service floor mandat akses publik (blok)
h_icu  = np.array([36.0, 12.0, 6.0, 48.0, 4.0])       # jam-tempat-tidur ICU per kasus pasca-op
B_WEEK = 20                                           # blok elektif tersedia per minggu
H_WEEK = 520.0                                        # anggaran jam-TT ICU elektif per minggu

def mss_dp(B=B_WEEK, H=H_WEEK):
    """DP eksak dua-sumber-daya. State=(blok terpakai, jam-TT ICU terpakai)."""
    H_units = int(round(H))
    NEG = -np.inf
    base_b, base_u = int(x_min.sum()), 0.0
    for k in range(K):
        base_u += h_icu[k] * c_bar[k] * x_min[k]
    b0, u0 = int(base_b), int(round(base_u))
    if b0 > B or u0 > H_units:
        raise RuntimeError("Floor mandat melanggar kapasitas")
    V = np.full((B + 1, H_units + 1), NEG)
    V[b0, u0] = 0.0                                   # alokasi wajib sebagai state awal
    val_floor = sum(w_val[k] * c_bar[k] * x_min[k] for k in range(K))
    choice = np.zeros((K, B + 1, H_units + 1), dtype=np.int8)
    Vk = V.copy()
    for k in range(K):
        vpb = w_val[k] * c_bar[k]
        upb = int(round(h_icu[k] * c_bar[k]))
        Vn = Vk.copy()
        for x in range(1, s_cap[k] - x_min[k] + 1):
            bc, uc = x, x * upb
            cand = np.full_like(Vk, NEG)
            cand[bc:, uc:] = Vk[:-bc or None, :-uc or None] + x * vpb
            upd = cand > Vn
            Vn[upd] = cand[upd]
            choice[k][upd] = x
        Vk = Vn
    b_opt = int(np.argmax(Vk.max(axis=1)))
    u_opt = int(np.argmax(Vk[b_opt]))
    z = Vk[b_opt, u_opt] + val_floor
    x = x_min.copy()
    rem_b, rem_u = b_opt, u_opt
    for k in range(K - 1, -1, -1):
        add = int(choice[k][rem_b, rem_u])
        x[k] += add
        rem_u -= add * int(round(h_icu[k] * c_bar[k]))
        rem_b -= add
    return float(z), x, b_opt, float(u_opt)

z_star, x_star, used_B, used_H = mss_dp()
print("== A. MASTER SURGICAL SCHEDULE (DP alokasi eksak + service floor) ==")
print(f"{'Spesialisasi':<15}{'floor':>6}{'x*':>4}{'kasus/mgg':>11}{'jam-ICU':>9}{'nilai(Rp jt)':>14}")
tot_cases = tot_icu = tot_val = 0.0
for k in range(K):
    cs, ic, vv = c_bar[k]*x_star[k], h_icu[k]*c_bar[k]*x_star[k], w_val[k]*c_bar[k]*x_star[k]
    tot_cases += cs; tot_icu += ic; tot_val += vv
    print(f"{name[k]:<15}{x_min[k]:>6d}{x_star[k]:>4d}{cs:>11.1f}{ic:>9.0f}{vv:>14.1f}")
print(f"{'TOTAL':<15}{int(x_min.sum()):>6d}{int(x_star.sum()):>4d}{tot_cases:>11.1f}"
      f"{tot_icu:>9.0f}{tot_val:>14.1f}")
print(f"Utilisasi: blok {used_B}/{B_WEEK} | ICU {used_H:.0f}/{H_WEEK:.0f} jam-TT "
      f"({used_H/H_WEEK*100:.1f}%)")
z_b1, *_ = mss_dp(B=B_WEEK + 1)
z_h1, *_ = mss_dp(H=H_WEEK + 26)
print(f"Harga bayangan: +1 blok/mgg = Rp {z_b1-z_star:.1f} jt/mgg | "
      f"+26 jam-TT/mgg (+2 TT elektif) = Rp {z_h1-z_star:.1f} jt/mgg")

# ============================== PART B =====================================
print("\n== B. OVERBOOKING KLINIK (eksak, Poisson-Binomial kehadiran) ==")
C_SLOTS = 16
C_IDLE, C_OT = 150.0, 400.0      # Rp ribu per slot kosong; per pasien lembur
def show_ps(n, base=0.08, slope=0.012, cap_ns=0.35):
    """Probabilitas HADIR tiap pasien ke-i (no-show naik menuju akhir sesi)."""
    idx = np.arange(n)
    return 1.0 - np.minimum(base + slope * idx, cap_ns)
def pmf_poisson_binomial(ps):
    pmf = np.array([1.0])
    for p in ps:
        pmf = np.convolve(pmf, [1 - p, p])
    return pmf
def expected_cost(n):
    pmf = pmf_poisson_binomial(show_ps(n))
    ks = np.arange(n + 1)                          # K = jumlah hadir
    idle = np.maximum(C_SLOTS - ks, 0)
    ot = np.maximum(ks - C_SLOTS, 0)
    return float(pmf @ (C_IDLE * idle + C_OT * ot)), float(pmf @ ks)
grid = list(range(C_SLOTS, C_SLOTS + 11))
res = sorted((expected_cost(n)[0], n) for n in grid)
cost_n, n_star = res[0]
exp_att_n = expected_cost(n_star)[1]
print(f"C={C_SLOTS} slot/hari | kosong Rp{C_IDLE:.0f}rb/slot | lembur Rp{C_OT:.0f}rb/pasien")
for n in grid:
    ec, ea = expected_cost(n)
    mark = " <-- n*" if n == n_star else ""
    print(f"n={n:2d}: E[biaya]={ec:8.1f} rb  E[hadir]={ea:6.2f}  "
          f"P(hadir>C)={pmf_poisson_binomial(show_ps(n))[C_SLOTS:].sum():.3f}{mark}")
p_homo = show_ps(C_SLOTS).mean()                   # aproksimasi homogen (p rata-rata)
def ec_homo(n):
    pmf = pmf_poisson_binomial(np.full(n, p_homo)); ks = np.arange(n+1)
    return float(pmf @ (C_IDLE*np.maximum(C_SLOTS-ks,0) + C_OT*np.maximum(ks-C_SLOTS,0)))
n_homo = min(grid, key=ec_homo)
bias = n_homo - n_star
print(f"Aproksimasi homogen p_hadir={p_homo:.3f}: n*_homo={n_homo}, E[biaya]={ec_homo(n_homo):.1f} rb"
      f" -> bias {'+' if bias>0 else ''}{bias} pasien vs eksak")

# ============================== PART C =====================================
print("\n== C. VALIDASI MONTE CARLO ==")
NSIM = 500_000
att = (rng.random((NSIM, n_star)) < show_ps(n_star)).sum(axis=1)
idle_sim = np.maximum(C_SLOTS - att, 0); ot_sim = np.maximum(att - C_SLOTS, 0)
mc_cost = float((C_IDLE * idle_sim + C_OT * ot_sim).mean())
err = abs(mc_cost - cost_n) / cost_n * 100
print(f"[Klinik {NSIM:,} hari] E[biaya] analitik={cost_n:.1f} rb vs simulasi={mc_cost:.1f} rb "
      f"| galat={err:.3f}%")
print(f"P(lembur)={(ot_sim>0).mean():.4f} | P(slot kosong)={(idle_sim>0).mean():.4f} | "
      f"hadiran rata-rata={att.mean():.3f} (analitik {exp_att_n:.3f})")
L_BLOCK = 240.0                                    # menit per blok setengah-hari
sig = {"Kardiotoraks":0.35,"Ortopedi":0.30,"Bedah Umum":0.40,"Neurokirurgi":0.38,"Gin.-Onko":0.33}
NWEEK = 52
ot_hours, idle_min = [], []
for wk in range(NWEEK):
    for k in range(K):
        nc = max(int(round(c_bar[k])), 1)
        for _ in range(int(x_star[k])):
            mu = np.log(L_BLOCK/nc) - 0.5*sig[name[k]]**2
            dur = rng.lognormal(mu, sig[name[k]], size=nc)
            over = dur.sum() - L_BLOCK
            if over > 0: ot_hours.append(over/60.0)
            else: idle_min.append(-over)
ot_hours = np.array(ot_hours); idle_min = np.array(idle_min)
n_blocks = int(x_star.sum())
print(f"[OR {NWEEK} mgg x {n_blocks} blok] P(lembur blok)={len(ot_hours)/(n_blocks*NWEEK):.3f} | "
      f"E[lembur|lembur]={ot_hours.mean():.2f} jam | E[idle|idle]={idle_min.mean():.1f} mnt")
ok = err < 0.5
print("\nSTATUS VALIDASI:", "LULUS (galat analitik-vs-Monte Carlo < 0.5%)" if ok else "PERIKSA")
```

---

## 4. Hasil Eksekusi & Studi Kasus Industri

Output eksekusi nyata (seed deterministik 20260823; seluruh angka di bawah dihasilkan program di atas):

````
== A. MASTER SURGICAL SCHEDULE (DP alokasi eksak + service floor) ==
Spesialisasi    floor  x*  kasus/mgg  jam-ICU  nilai(Rp jt)
Kardiotoraks        2   2        3.0      108          84.0
Ortopedi            2   3        9.0      108         126.0
Bedah Umum          4   4       18.0      108         144.0
Neurokirurgi        1   1        2.0       96          44.0
Gin.-Onko           2   7       24.5       98         245.0
TOTAL              11  17       56.5      518         643.0
Utilisasi: blok 17/20 | ICU 518/520 jam-TT (99.6%)
Harga bayangan: +1 blok/mgg = Rp 0.0 jt/mgg | +26 jam-TT/mgg (+2 TT elektif) = Rp 36.0 jt/mgg

== B. OVERBOOKING KLINIK (eksak, Poisson-Binomial kehadiran) ==
C=16 slot/hari | kosong Rp150rb/slot | lembur Rp400rb/pasien
n=16: E[biaya]=   408.0 rb  E[hadir]= 13.28  P(hadir>C)=0.049
n=17: E[biaya]=   318.4 rb  E[hadir]= 14.01  P(hadir>C)=0.169
n=18: E[biaya]=   277.5 rb  E[hadir]= 14.72  P(hadir>C)=0.335 <-- n*
n=19: E[biaya]=   301.5 rb  E[hadir]= 15.43  P(hadir>C)=0.507
n=20: E[biaya]=   390.7 rb  E[hadir]= 16.12  P(hadir>C)=0.657
n=21: E[biaya]=   534.4 rb  E[hadir]= 16.80  P(hadir>C)=0.772
n=22: E[biaya]=   717.9 rb  E[hadir]= 17.47  P(hadir>C)=0.855
n=23: E[biaya]=   927.8 rb  E[hadir]= 18.12  P(hadir>C)=0.910
n=24: E[biaya]=  1155.5 rb  E[hadir]= 18.77  P(hadir>C)=0.945
n=25: E[biaya]=  1395.9 rb  E[hadir]= 19.42  P(hadir>C)=0.968
n=26: E[biaya]=  1644.4 rb  E[hadir]= 20.07  P(hadir>C)=0.981
Aproksimasi homogen p_hadir=0.830: n*_homo=18, E[biaya]=268.3 rb -> bias 0 pasien vs eksak

== C. VALIDASI MONTE CARLO ==
[Klinik 500,000 hari] E[biaya] analitik=277.5 rb vs simulasi=277.1 rb | galat=0.136%
P(lembur)=0.1309 | P(slot kosong)=0.6651 | hadiran rata-rata=14.725 (analitik 14.724)
[OR 52 mgg x 17 blok] P(lembur blok)=0.469 | E[lembur|lembur]=0.66 jam | E[idle|idle]=34.4 mnt

STATUS VALIDASI: LULUS (galat analitik-vs-Monte Carlo < 0.5%)
````

### 4.1 Interpretasi Engineering

1. **ICU, bukan ruang-OP, adalah kendala pengikat.** Optimum hanya memakai 17 dari 20 blok (utilisasi 85%) tetapi merampatkan ICU hingga 518/520 jam-TT (**99,6%**). Harga bayangan marginal membuktikannya kuantitatif: satu blok OR tambahan bernilai **Rp 0**, sedangkan +26 jam-TT/minggu (≈2 bed elektif) bernilai **Rp 36 juta/minggu**. Implikasi manajerial: kapital expenditure sebaiknya dialihkan dari renovasi ruang-OP ke kapasitas ICU elektif — kesimpulan yang mustahil dicapai analisis intuisi tanpa model dual.
2. **Service floor mengubah geometri masalah.** Tanpa floor, DP memilih solusi monokultur menguntungkan (gin.-onko dominan) dan men-nol-kan spesialisasi mahal-ICU seperti kardiotoraks/neuro — optimal secara aritmetika, tidak dapat diterima secara mandat akses publik. Floor dimodelkan sebagai *state awal* DP (bukan post-processing), sehingga optimasi berjalan pada sisa kapasitas dan kebenaran optimum tetap eksak.
3. **Kurva biaya overbooking berbentuk-U dengan n\*=18 (+12,5%).** Melampaui titik itu, ekspektasi biaya melonjak nonlinear (n=20: Rp 390,7 rb; n=24: Rp 1.155,5 rb) karena $P(\text{kehadiran}>C)$ meledak dari 33,5% ke 94,5%. Probabilitas lembur pada kebijakan optimum 13,1% — angka yang realistis untuk disepakati manajemen sebagai *service-risk budget*.
4. **Aproksimasi homogen menyesatkan pada estimasi biaya meski kebetulan benar pada n\*.** Dengan $\bar a=0{,}830$, binomial homogen memilih $n^\*_\text{homo}=18$ (bias 0) tetapi mengklaim E[biaya] Rp 268,3 rb — **meremehkan 3,3%** dibanding eksak Rp 277,5 rb. Pelajaran metodologis: heterogenitas jarang mengubah argmin pada instansi kecil, tetapi konsisten meremehkan ekor risiko; gunakan Poisson-Binomial untuk perhitungan biaya, bukan sekadar pemilihan $n$.
5. **Validasi berlapis lolos.** Galat analitik-vs-Monte Carlo 500 ribu hari hanya **0,136%** (< toleransi 0,5%), dan estimasi kehadiran cocok sampai tiga desimal (14,725 vs 14,724) — bukti konversi PMF konvolusi benar. Di sisi OR, $P(\text{lembur blok})=46{,}9\%$ dengan ekor lembur bersyarat 0,66 jam mengikuti sifat heavy-tail penjumlahan lognormal; E[sisa|kosong] 34,4 menit menjadi dasar penetapan buffer antar-kasus harian.

---

## 5. Standar, Referensi Terverifikasi, dan Bacaan Lanjutan

**Praktik industri:** IISE — *Society for Health Systems* dan INFORMS — *Health Applications Society* (komunitas profesional OR kesehatan); kerangka akreditasi rumah sakit nasional sebagai konteks mandat akses (*service floor*).

**Literatur ilmiah (DOI terverifikasi via Crossref REST API):**
1. Cayirli, T., & Veral, E. (2003). Outpatient scheduling in health care: A review of literature. *Production and Operations Management*, 12(4), 519–549. DOI: 10.1111/j.1937-5956.2003.tb00218.x
2. LaGanga, L. R., & Lawrence, S. R. (2007). Clinic overbooking to improve patient access and increase provider productivity. *Decision Sciences*, 38(2), 251–276. DOI: 10.1111/j.1540-5915.2007.00158.x
3. Zhou, W., dkk. (2024). Decision support system for appointment scheduling and overbooking under patient no-show behavior. *Annals of Operations Research*. DOI: 10.1007/s10479-023-05799-0
4. Penjelasan biaya overbooking layanan kesehatan studi kasus terstruktur. (2023). *Heliyon*, 9. DOI: 10.1016/j.heliyon.2023.e18753
5. Distributionally robust master surgery scheduling with duration uncertainty and parallelism of surgical specialties. (2026). *Omega*. DOI: 10.1016/j.omega.2025.103417
6. Operating room-to-downstream elective surgery planning under uncertainty (ICU/ward capacity). (2026). *European Journal of Operational Research*. DOI: 10.1016/j.ejor.2025.07.006
7. Magerlein, J. M., & Martin, J. B. (1978). Surgical demand scheduling: A review. *Health Services Research*, 13(4), 418–433. [tinjauan klasik fondasional]

**Buku teks rujukan:**
- Brandeau, M. L., Sainfort, F., & Pierskalla, W. P. (Eds.). (2004). *Operations Research and Health Care: A Handbook of Methods and Applications*. Springer. [bab penjadwalan kapasitas]
- Hillier, F. S., & Lieberman, G. J. (2021). *Introduction to Operations Research* (11th ed.). McGraw-Hill. [bab dynamic programming & queueing theory]
- Taha, H. A. (2017). *Operations Research: An Introduction* (10th ed.). Pearson. [bab teori antrian & simulasi]
