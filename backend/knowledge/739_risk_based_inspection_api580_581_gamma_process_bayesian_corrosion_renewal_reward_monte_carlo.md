# Modul 739: Risk-Based Inspection (RBI) API 580/581 untuk Integritas Aset Tekanan — Proses Degradasi Gamma dengan Ketidakpastian Epistemik, Pembaruan Bayesian Laju Korosi dari Data Ketebalan UT, Optimasi Interval Inspeksi Renewal-Reward Terkalibrasi Monte Carlo Common Random Numbers, dan Re-grading Matriks Risiko PoF×CoF

**Nomor Modul:** [739]  
**Domain Keahlian:** Integritas Mekanik Aset & Manajemen Inspeksi Berbasis Risiko (*Risk-Based Inspection, Asset Integrity Management, Gamma Process Degradation Modeling, Bayesian Updating, Inspection Interval Optimization, API 580/581, ASME PCC-3, Pressure Vessel Reliability*).  
**Sumber Referensi Utama:** *API RP 580 — Risk-Based Inspection (3rd Ed.)*, *API RP 581 — Risk-Based Inspection Technology (3rd Ed.)*, *ASME PCC-3*, *van Noortwijk — RESS 2009*, *Kallen & van Noortwijk — RESS 2005 & IJPVP 2006*, *Huang dkk. — PSEP 2023*, *Cho dkk. — JQME 2025*.

---

## 1. Landasan Teori & Tinjauan Konseptual

### 1.1 Dari Inspeksi Kalender ke Inspeksi Berbasis Risiko

Risk-Based Inspection (RBI) adalah metodologi manajemen integritas yang menetapkan program inspeksi peralatan tekan (pressure vessel, pipa, heat exchanger, tanki) berdasarkan **risiko = Probability of Failure (PoF) × Consequence of Failure (CoF)**, bukan berdasarkan interval kalender seragam (API RP 580, 2016). Kerangka kuantitatifnya dioperasionalkan oleh API RP 581 melalui kategori frekuensi kerusakan (damage factor/frequency category) dan kategori konsekuensi (keselamatan-area mudah terbakar, produksi, biaya pemeliharaan). Filosofi ekonominya: inspeksi adalah **pembelian informasi** — setiap pengukuran ketebalan (UT) memperbarui sebaran keyakinan atas laju degradasi, menurunkan PoF epistemik, dan memungkinkan penjadwalan ulang (*re-rating/re-grading*) interval berikutnya secara rasional.

Mekanisme kerusakan dominan pada vessel karbon steel jasa hidrokarbon adalah *thinning* — korosi internal lokal (mis. H₂S/HCl dewpoint) dan korosi bawah-isolasi (*corrosion under insulation*, CUI) eksternal (dikatalogkan API RP 571). Karena pertumbuhan kehilangan-dinding bersifat monoton, tak-negatif, dan inkremental-acak, model stokastik standarnya adalah **proses gamma** (van Noortwijk, 2009): kehilangan logam kumulatif $D(t)$ mengikuti $D(t)\sim \mathrm{Ga}(\alpha t,\beta)$ dengan bentuk linier-waktu dan dispersi tumbuh-linier, sehingga ketidakpastian aleatorik meningkat seiring usia — fondasi statistik bagi keputusan "kapan menginspeksi".

| Kategori PoF/tahun (semua-frekuensi API 581) | Batas bawah | Makna operasional |
|---|---|---|
| 5 – Tinggi | $\ge 10^{-2}$ | Kegagalan hampir pasti dalam horizon; mitigasi segera |
| 4 | $10^{-3}$–$10^{-2}$ | Inspeksi ketat + FFS assessment |
| 3 | $10^{-4}$–$10^{-3}$ | Program inspeksi terjadwal ketat |
| 2 | $10^{-5}$–$10^{-4}$ | Program inspeksi normal |
| 1 – Rendah | $<10^{-5}$ | Interval boleh panjang, monitoring generik |

---

## 2. Formulasi Matematis & Notasi Rekayasa Sistem

### 2.1 Proses Degradasi Gamma dengan Ketidakpastian Epistemik

Kehilangan ketebalan kumulatif dimodelkan proses gamma dengan bentuk $\alpha t$ dan skala $\beta$:

$$
D(t)\sim\mathrm{Ga}(\alpha t,\beta),\qquad
\mathbb{E}[D(t)]=v\,t,\quad \mathrm{Var}[D(t)]=\frac{v^{2}}{\alpha}\,t,\qquad v=\alpha\beta .
$$

Laju rata-rata $v$ tidak diketahui persis antar-unit (heterogenitas metalurgi, temperatur, film cairan); ia dimodelkan epistemik:

$$
v\sim\mathcal N(\bar v,\ s_v^{2})\;\;\Longrightarrow\;\;
D(t)\mid v\sim\mathrm{Ga}\!\left(\tfrac{v^{2}}{\beta'};\cdot\right)
\;\Rightarrow\;
D(t)\ \dot\sim\ \mathcal N\!\big(\bar v t,\ \underbrace{\tfrac{\bar v^{2}}{\alpha}t}_{\text{aleatorik}}+\underbrace{(s_v t)^{2}}_{\text{epistemik}}\big),
$$

yang memberikan **distribusi prediktif** kehilangan pada usia $t$. Probabilitas kegagalan (limit-state dinding tipis) terhadap tebal minimum yang dibutuhkan $t_{\min}$ (hasil kalkulasi API 510/ASME VIII):

$$
P_f(t)=\Pr\{D(t)\ge L_{\max}\},\qquad L_{\max}=t_{\text{nom}}-t_{\min},
$$
$$
P_f(t)=1-\Phi\!\left(\frac{L_{\max}-\bar v t}{\sqrt{\bar v^{2}t/\alpha+(s_v t)^{2}}}\right).
$$

### 2.2 Ekonomi Inspeksi: Renewal-Reward dengan Suku Bertahan Eksak

Kebijakan: inspeksi internal tiap interval $\tau$; jika kehilangan terukur $D_{\text{obs}}\ge D_{\text{rep}}=\theta L_{\max}$ maka vessel diperbaiki (*repair/liner*, biaya $C_R$, reset degradasi); kegagalan bocor (*loss of containment*) antar-inspeksi berbiaya katastrofik $C_F$ mereset sistem juga. Siklus regeneratif berakhir pada repair terjadwal pertama atau leak. Peluang bertahan sampai inspeksi ke-$k$ eksak:

$$
S_k=\Pr\{D(k\tau)<D_{\text{rep}}\}=\Phi\!\left(\frac{D_{\text{rep}}-\bar v\,k\tau}{\sqrt{\bar v^{2}k\tau/\alpha+(s_v k\tau)^{2}}}\right).
$$

Peluang bocor pada interval-$j$ (diberikan selamat sampai awalnya, start-level rata-rata terpotong $d_s=\mathbb E[D(\tau)\mid D(\tau)<D_{\text{rep}}]$ dari normal terpotong, dan inkrement satu-interval bervarians aleatorik-saja karena $v_i$ tetap dalam satu path):

$$
q_j=S_{j-1}\cdot\Phi^{c}\!\left(\frac{L_{\max}-d_s-\bar v\tau}{\bar v\sqrt{\tau/\alpha}}\right),\qquad
P_{\text{leak}}=\sum_{j\ge1} q_j,\qquad
\mathbb E[N]=\sum_{k\ge1}S_k .
$$

Laju biaya jangka-panjang (renewal-reward):

$$
J(\tau)=\frac{C_I\,\mathbb E[N]+C_R\,(1-P_{\text{leak}})+C_F\,P_{\text{leak}}}{\tau\Big(\mathbb E[N]-\tfrac12 P_{\text{leak}}\Big)} ,
\qquad
\tau^{*}=\arg\min_{\tau}J(\tau).
$$

### 2.3 Pembaruan Bayesian Laju Korosi (Normal–Normal Konjugat)

Setiap kampanye UT menghasilkan estimasi laju antar-inspeksi $r_m$ dengan noise pengukuran $\sigma_r$; posterior direkursikan:

$$
K_m=\frac{s_{m-1}^{2}}{s_{m-1}^{2}+\sigma_r^{2}},\qquad
v_m=v_{m-1}+K_m(r_m-v_{m-1}),\qquad
s_m^{2}=(1-K_m)s_{m-1}^{2}.
$$

Data UT yang menunjukkan korosi lebih cepat menaikkan posterior $v$, menaikkan $P_f$, dan **memperpendek** $\tau^{*}$ — inti adaptivitas RBI.

---

## 3. Algoritma & Implementasi Python Solver

Solver dua lapis: (a) aproksimasi renewal-reward analitik sebagai penyaring cepat; (b) **optimasi berbasis simulasi grid + Common Random Numbers** (seed identik antar-kandidat $\tau$) sebagai pemutus keputusan, dengan validasi silang analitik di sekitar optimum.

```python
import numpy as np
from scipy.stats import norm

# Parameter studi kasus (Bagian 4)
L_MAX, THETA, ALPHA = 6.35, 0.55, 2.5          # mm ; fraksi-repair ; shape-rate /yr
V0, S0, SIG_M       = 0.40, 0.10, 0.10         # prior laju korosi ; error UT (mm)
CI, CR, CF          = 45_000., 400_000., 12_000_000.
D_REP               = THETA*L_MAX

def loss_mu_sd(t, vm=V0, sv=S0):               # mean & sd loss prediktif
    return vm*t, np.sqrt(vm**2/ALPHA*t + (sv*t)**2)

def pof(tau, vm=V0, sv=S0):                    # P[D(tau)>=L_MAX]
    m,s = loss_mu_sd(tau,vm,sv); return norm.sf(L_MAX,loc=m,scale=s)

def annual_cost(tau, vm=V0, sv=S0, KMAX=500):  # renewal-reward approximation
    mR,sR = loss_mu_sd(tau,vm,sv)
    md,sd = vm*tau, np.sqrt(vm**2/ALPHA*tau)   # inkrement: aleatorik saja
    S,E_N,P_leak,tls = 1.0,0.0,0.0,0.0
    for j in range(1,KMAX+1):
        mj,sj = loss_mu_sd(j*tau,vm,sv)
        Sj = norm.cdf(D_REP,loc=mj,scale=sj); E_N += S
        if S>1e-12:
            a=(D_REP-mR)/sR
            lam=np.exp(-.5*a*a)/(np.sqrt(2*np.pi)*norm.cdf(a))
            q_j=norm.sf(L_MAX-(mR-lam*sR)-md,loc=md,scale=sd)
            P_leak+=q_j*S; tls+=q_j*S*tau/2
        S=Sj
        if S<1e-13: break
    Ec = CI*E_N + CR*(1-min(P_leak,1)) + CF*min(P_leak,1)
    return Ec/max(tau*E_N-tls,1e-9)

def simulate(tau,vm=V0,sv=S0,n=60_000,seed=739,H=30.0,dt=.05):
    """Gamma-process path simulator; stop-and-fix; CRN via seed."""
    rng=np.random.default_rng(seed)
    v_i=np.maximum(rng.normal(vm,sv,n),.05); beta_i=v_i/ALPHA
    loss=np.zeros(n); t_next=np.full(n,tau); t,cost,leak=0.,np.zeros(n),0
    for _ in range(int(H/dt)):
        loss+=rng.gamma(ALPHA*dt,1.,n)*beta_i; t+=dt
        due=t>=t_next-1e-9; lk=due&(loss>=L_MAX)
        if lk.any():
            cost[lk]+=CF; leak+=int(lk.sum())
            loss[lk]=0.; t_next[lk]=t+tau
        idx=np.where(due&~lk)[0]
        if idx.size:
            obs=loss[idx]+rng.normal(0,SIG_M,idx.size); fix=obs>=D_REP
            cost[idx[fix]]+=CI+CR; loss[idx[fix]]=0.; t_next[idx[fix]]=t+tau
            cost[idx[~fix]]+=CI; t_next[idx[~fix]]=t+tau
    return leak/n, cost.mean()/H
```

Optimasi: grid $\tau\in[3,11]$ step $0.5$ lalu fine-step $0.25$ pada sekitar kandidat terbaik, masing-masing dievaluasi `simulate` dengan seed sama (*common random numbers*) agar perbandingan bebas-noise antar-kandidat.

---

## 4. Studi Kasus Industri: Vessel Depropanizer V-D110 Kilang Refinery

**Konteks.** Vessel proses kolom depropanizer, karbon steel Sch 40, $t_{\text{nom}}=12{,}70$ mm; minimum required thickness $t_{\min}=6{,}35$ mm (API 510) sehingga $L_{\max}=6{,}35$ mm; ambang repair proaktif $\theta=0{,}55$ → $D_{\text{rep}}=3{,}49$ mm. Korosi internal asam + CUI eksternal: prior laju $v\sim\mathcal N(0{,}40;0{,}10^2)$ mm/thn, $\alpha=2{,}5$/thn. Biaya: inspeksi internal $C_I=\$45$k; repair $C_R=\$400$k; kegagalan LOCA+fire+shutdown ±30 hari $C_F=\$12$juta. Horizon simulasi 30 tahun, langkah 0,05 tahun.

**Langkah 1 — Profil PoF prediktif** (semua-frekuensi):

| Usia (thn) | 2 | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|---|
| $P_f$ | $4{,}5\times10^{-42}$ | $8{,}9\times10^{-14}$ | $2{,}33\times10^{-6}$ | $1{,}67\times10^{-3}$ | $3{,}33\times10^{-2}$ | $1{,}48\times10^{-1}$ |

**Langkah 2 — Optimasi interval (output eksekusi nyata, 40k path CRN):**

| $\tau$ (thn) | 3,00 | 3,25 | **3,50** | 3,75 | 4,00 | 5,00 | 6,00 |
|---|---|---|---|---|---|---|---|
| $J_{\text{prior}}$ ($/thn) | 51.523 | 50.134 | **48.207** | 53.333 | 50.633 | 72.392 | 102.678 |

Prior-world optimum simulasi $\tau^{*}=3{,}50$ tahun; aproksimasi analitik memberi $5{,}50$ tahun dengan $J=\$40.248$/thn (penyaring kasar — konsisten arah, namun keputusan final memakai simulasi). Kebijakan kalender warisan 6 tahun ternyata **terlalu jarang**: validasi akhir (150 ribu path) memberi biaya riil \$103.341/tahun dengan fraksi leak 17,40% dalam horizon 30 thn.

**Langkah 3 — Pembaruan Bayesian dari data UT** (pembacaan tahun-3 & tahun-6; $\sigma_r=0{,}10/\sqrt3$):

$$v:\ 0{,}400\pm0{,}100\ \longrightarrow\ 0{,}529\pm0{,}0378\ \text{mm/thn}\quad(K_{\text{akhir}}=0{,}43).$$

$P_f$ pada kebijakan 6-tahunan melonjak $2{,}33\times10^{-6}\to9{,}17\times10^{-5}$ — re-grading kategori PoF **Kategori 1 → Kategori 2** (matriks $5\times5$ API 581). Grid pasca-pembaruan memilih $\tau^{*\prime}=3{,}00$ tahun (posterior grid: 3,00 → \$68.554/thn vs 4,00 → \$82.345/thn), dipercepat 14%.

**Langkah 4 — Validasi Monte Carlo final (150 ribu path):**

| Kebijakan | Biaya MC ($/thn) | Analitik ($/thn) | Deviasi | Fraksi leak |
|---|---|---|---|---|
| Prior $\tau^{*}=3{,}50$ | **47.770** | 47.612 | 0,3% | 1,41% |
| Prior kalender 6,00 | 103.341 | 43.544 | (batas aproks.) | 17,40% |
| Posterior $\tau^{*\prime}=3{,}00$ | **68.242** | 63.053 | 8,2% | 2,36% |
| Posterior kalender 6,00 | 245.948 | 666.070 | (ekor jauh) | 52,22% |

**Keputusan manajerial.** (i) Sebelum data UT pun, RBI membuktikan interval kalender 6-tahunan salah desain: optimal 3,5 tahun menekan laju biaya 54%. (ii) Setelah UT mengungkap korosi terakselerasi ($v$ naik 32%), kebijakan adaptif memperketat ke 3,0 tahun dan **menghindari kerugian $\approx\$177$ ribu/tahun** (\$245.948 − \$68.242) dibanding mempertahankan kalender lama — nilai informasi inspeksi terkuantifikasi langsung. (iii) Aproksimasi renewal-reward akurat di sekitar optimum (deviasi 0,3–8,2%) sehingga layak sebagai alat skrining harian; keputusan high-stakes tetap divalidasi simulasi CRN.

---

## 5. Referensi Terverifikasi

1. American Petroleum Institute. *API RP 580 — Risk-Based Inspection* (3rd Edition, 2016). API Publications.
2. American Petroleum Institute. *API RP 581 — Risk-Based Inspection Technology* (3rd Edition, 2016). API Publications. (Damage-factor PoF categories & CoF methodology.)
3. ASME. *ASME PCC-3 — Inspection Planning Using Risk-Based Methods*. The American Society of Mechanical Engineers.
4. American Petroleum Institute. *API RP 571 — Damage Mechanisms Affecting Fixed Equipment in the Refining Industry*. (Thinning, CUI.)
5. van Noortwijk, J.M. (2009). "A survey of the application of gamma processes in maintenance." *Reliability Engineering & System Safety*, 94(1), 2–21. DOI: 10.1016/j.ress.2007.03.019.
6. Kallen, M.J. & van Noortwijk, J.M. (2005). "Optimal maintenance decisions under imperfect inspection." *Reliability Engineering & System Safety*, 90(2–3), 177–185. DOI: 10.1016/j.ress.2004.10.004.
7. Kallen, M.J. & van Noortwijk, J.M. (2006). "Optimal periodic inspection of a deterioration process with sequential condition states." *International Journal of Pressure Vessels and Piping*, 83(4), 249–255. DOI: 10.1016/j.ijpvp.2006.02.007.
8. Huang, Y., Qin, G. & Yang, M. (2023). "A risk-based approach to inspection planning for pipelines considering the coupling effect of corrosion and dents." *Process Safety and Environmental Protection*, 180, 1041–1053. DOI: 10.1016/j.psep.2023.10.025.
9. Cho, H., Choi, K. & Lee, D. (2025). "Optimization of inspection and repair strategies for military gas turbine engines using a risk-based maintenance approach." *Journal of Quality in Maintenance Engineering*. DOI: 10.1108/JQME-09-2024-0086.
10. Shmonina, A.V. & Dikov, A.S. (2026). "Gradient-Boosted Survival Models for Corrosion Risk-Based Inspection of Gas Transmission Pipelines." *Applied Sciences*, 16(16), 7884. DOI: 10.3390/app16167884.
