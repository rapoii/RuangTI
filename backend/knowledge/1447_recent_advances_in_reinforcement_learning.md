# 1447 — Kemajuan Mutakhir Pembelajaran Penguatan (Reinforcement Learning) untuk Pengendalian Proses Kimia: Integrasi dengan Jaringan Syaraf Tiruan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Recent Advances in Reinforcement Learning for Chemical Process Control
**Jurnal & Sitasi Utama:** Venkata Srikar Devarakonda, Wei Sun, Xun Tang (2025). *Processes*. DOI: [https://doi.org/10.3390/pr13061791](https://doi.org/10.3390/pr13061791)
**Sitasi Pendukung:** Haonan Wang, Yijia Chen (2022). *Asian Journal of Research in Computer Science*. DOI: [https://doi.org/10.9734/ajrcos/2022/v14i130325](https://doi.org/10.9734/ajrcos/2022/v14i130325)

---

## 1. Pendahuluan dan Konteks Industri

Industri proses kimia (chemical process industry) merupakan tulang punggung ekonomi manufaktur global yang mencakup produksi petrokimia, farmasi, polimer, hingga makanan dan minuman. Devarakonda, Sun, dan Tang (2025) dalam *Processes* menyoroti bahwa pengendalian proses kimia modern menghadapi tantangan struktural berupa **nonlinearitas kuat**, *time-varying dynamics*, *multivariable coupling*, serta keterbatasan model first-principles ketika plant beroperasi pada *multiple operating regimes* (Devarakonda dkk., 2025). Dalam konteks工业 4.0, ketergantungan pada sistem kendali konvensional seperti PID dan Model Predictive Control (MPC) mulai menunjukkan celah efektivitas ketika sistem menghadapi gangguan besar (*disturbance rejection*), *set-point tracking* yang kompleks, serta kebutuhan adaptasi *real-time* terhadap *drift* parameter fisika-kimia.

Urgensi ekonomi dari peningkatan kinerja pengendalian ini sangat substansial. Sebagai contoh, dalam reaktor *Continuous Stirred Tank Reactor* (CSTR) yang menjalankan reaksi eksotermik seperti *Van de Vusse* atau oksidasi sulfonat, deviasi suhu sebesar 1–2°C dapat menurunkan yield selektif hingga 3–5% dan mempercepat *catalyst deactivation* secara eksponensial (Devarakonda dkk., 2025). Wang dan Chen (2022) menambahkan bahwa pada plant asam sulfat atau *ethylene oxide reactor*, dinamika kopling antara konsentrasi reaktan, suhu, dan laju alir umpan memiliki karakteristik *stiff* yang sulit di-linearisasi, sehingga pendekatan data-driven seperti Artificial Neural Network (ANN) menjadi semakin relevan untuk menggantikan atau meng-*augment* struktur PID-MPC klasik (Wang & Chen, 2022).

Perspektif *supply chain* memperkuat urgensi ini. Gangguan kualitas produk hilir (misalnya off-spec pada *purified terephthalic acid*/PTA) merambat ke rantai pasok tekstil dan kemasan PET dengan kerugian bernilai jutaan USD per insiden. Oleh karena itu, adopsi pendekatan *Reinforcement Learning* (RL) sebagai strategi machine learning yang memungkinkan agen belajar kebijakan tindakan (*policy*) melalui interaksi dengan lingkungan proses—berbasis kerangka *Markov Decision Process* (MDP)—menjadi frontier riset yang sangat aplikatif (Devarakonda dkk., 2025). Wang dan Chen (2022) secara khusus menunjukkan bahwa ANN telah membuktikan diri sebagai komponen penting dalam arsitektur hibrida yang meningkatkan PID dan MPC konvensional (Wang & Chen, 2022). Artikel ini menyintesiskan kedua pendekatan sebagai kerangka kerja terpadu untuk pengendalian proses kimia masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Markov Decision Process (MDP)

Devarakonda dkk. (2025) menyatakan bahwa seluruh bangunan teoretis RL bertumpu pada MDP yang didefinisikan oleh tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ = himpunan state (keadaan proses: suhu $T$, konsentrasi $C_A$, laju alir $F$, level $L$);
- $\mathcal{A}$ = himpunan action (tindakan kontrol: posisi valve, set-point pendingin);
- $P(s'|s,a)$ = probabilitas transisi state;
- $R(s,a,s')$ = reward function;
- $\gamma \in [0,1)$ = discount factor untuk *future reward*.

Tujuan agen adalah menemukan policy optimal $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

### 2.2 Persamaan Bellman dan Value Function

Fungsi nilai state $V^\pi(s)$ dan fungsi nilai aksi $Q^\pi(s,a)$ didefinisikan sebagai:

$$V^\pi(s) = \mathbb{E}_\pi \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s \right]$$

$$Q^\pi(s,a) = \mathbb{E}_\pi \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s, A_t = a \right]$$

Persamaan *Bellman optimality* menentukan policy optimal:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a) V^*(s') \right]$$

Untuk sistem *continuous-state continuous-action* (khas proses kimia), *fitted value iteration* dengan function approximator $\hat{V}(s;\theta)$ berupa deep neural network digunakan (Devarakonda dkk., 2025).

### 2.3 Arsitektur Jaringan Syaraf Tiruan sebagai Function Approximator

Wang dan Chen (2022) menjelaskan bahwa arsitektur ANN yang lazim digunakan adalah *Multi-Layer Perceptron* (MLP) dengan formulasi:

$$y_j^{(l)} = f\left( \sum_{i=1}^{n_{l-1}} w_{ij}^{(l)} y_i^{(l-1)} + b_j^{(l)} \right)$$

dengan $f(\cdot)$ adalah fungsi aktivasi (untuk *hidden layer* lazim digunakan *tanh* atau *ReLU*: $f(z) = \max(0,z)$, untuk *output layer* digunakan *linear* atau *sigmoid* $\sigma(z) = 1/(1+e^{-z})$). Untuk plant dengan dinamika temporal seperti CSTR, arsitektur *Recurrent Neural Network* (RNN) dengan *Long Short-Term Memory* (LSTM) lebih sesuai:

$$\begin{aligned}
f_t &= \sigma_g(W_f x_t + U_f h_{t-1} + b_f) \\
i_t &= \sigma_g(W_i x_t + U_i h_{t-1} + b_i) \\
o_t &= \sigma_g(W_o x_t + U_o h_{t-1} + b_o) \\
h_t &= o_t \odot \tanh(c_t)
\end{aligned}$$

(Wang & Chen, 2022).

### 2.4 Safe RL: Constrained MDP dan Control Barrier Function

Untuk menjamin keselamatan operasional, Devarakonda dkk. (2025) mengajukan Constrained MDP (CMDP) dengan kendala probabilistik:

$$\max_{\pi} \; \mathbb{E}_{\tau \sim \pi} \left[ \sum_{t=0}^{T} \gamma^t R(s_t, a_t) \right] \quad \text{s.t.} \quad \mathbb{E}_{\tau \sim \pi} \left[ \sum_{t=0}^{T} \gamma^t C_i(s_t, a_t) \right] \leq d_i, \; \forall i \in \mathcal{I}$$

Pendekatan kedua adalah *Control Barrier Function* (CBF) $h: \mathbb{R}^n \to \mathbb{R}$ yang menjamin *forward invariance* dari himpunan aman $\mathcal{C} = \{ x \in \mathbb{R}^n : h(x) \geq 0 \}$ melalui syarat:

$$\sup_{u \in \mathcal{U}} \left[ L_f h(x) + L_g h(x) u + \alpha(h(x)) \right] \geq 0$$

di mana $L_f, L_g$ adalah turunan Lie sepanjang dinamika $\dot{x} = f(x) + g(x)u$, dan $\alpha$ adalah kelas-$\mathcal{K}$ function.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-ANN untuk pengendalian proses kimia mengikuti SOP berlapis berikut, yang disintesiskan dari Devarakonda dkk. (2025) dan Wang & Chen (2022):

**Tahap 1 – Identifikasi Unit Proses & Instrumentasi.** Lakukan *Process Flow Diagram* (PFD) dan *P&ID review* untuk menentukan variabel Controlled (CV), Manipulated (MV), dan Disturbance (DV). Misalnya pada CSTR: CV = $\{T, C_A\}$, MV = $\{F_{cool}\}$, DV = $\{F_{in}, C_{A,in}\}$.

**Tahap 2 – Akuisisi Data Historis & Simulasi.** Kumpulkan data historis minimal $N \geq 100{,}000$ sampel dengan *sampling rate* $\Delta t = 1\text{–}10$ s. Buat *digital twin* berbasis first-principles untuk melatih agen secara *offline* tanpa risiko pada plant fisik.

**Tahap 3 – Formulasi MDP.** Tentukan state space (misalnya $s_t = [T_t - T_{sp}, C_{A,t} - C_{A,sp}, \int e_T dt]$), action space (diskretisasi: $a_t \in \{-3, -2, -1, 0, +1, +2, +3\}$ mewakili $\Delta F_{cool}$), dan reward function:

$$R(s_t, a_t) = -w_1 (T_t - T_{sp})^2 - w_2 (C_{A,t} - C_{A,sp})^2 - w_3 \Delta a_t^2 - P_{penalty}$$

dengan $P_{penalty} = -1000$ bila $T_t > T_{max}$ (Devarakonda dkk., 2025).

**Tahap 4 – Desain Arsitektur Hybrid PID-ANN-MPC.** Wang dan Chen (2022) merekomendasikan: (i) **PID + ANN** di mana ANN mengestimasi Jacobian $\partial y/\partial u$ untuk adaptasi gain $K_p, K_i, K_d$; (ii) **MPC + ANN** di mana ANN memprediksi horizon output menggantikan model linear; (iii) **Hybrid model** yang menggabungkan *first-principles* + residual ANN.

**Tahap 5 – Pelatihan dengan Safe RL Constraint.** Terapkan Lagrangian relaxation atau *Recovery RL* untuk menjamin batasan suhu selama eksplorasi (Devarakonda dkk., 2025). Validasi silang dengan K-fold cross-validation $K=5$.

**Tahap 6 – Deploy Soft Sensor + Hardware-in-the-Loop (HIL).** Uji pada PLC/DCS (*Distributed Control System*) dengan *shadow mode* minimal 30 hari sebelum *closed-loop deployment*.

**Tahap 7 – Monitoring & Re-training.** Terapkan *drift detection* (Page-Hinkley test) untuk memicu re-training ketika $|Z_t| > \lambda_{PH}$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Plant: CSTR Reaksi Eksotermik Orde Satu

Pertimbangkan CSTR dengan reaksi $A \to B$ (orde 1, $k_0 = 7.2 \times 10^{10}\,\text{min}^{-1}$, $E/R = 8750\,\text{K}$), volume $V = 1.2\,\text{m}^3$, $F = 0.08\,\text{m}^3/\text{min}$, $C_{Af} = 4.0\,\text{kmol}/\text{m}^3$, $T_f = 350\,\text{K}$, $T_{sp} = 395\,\text{K}$, laju alir coolant $F_c \in [0, 0.2]\,\text{m}^3/\text{min}$. Persamaan *mass & energy balance* (Devarakonda dkk., 2025):

$$\frac{dC_A}{dt} = \frac{F}{V}(C_{Af} - C_A) - k_0 e^{-E/RT} C_A$$

$$\frac{dT}{dt} = \frac{F}{V}(T_f - T) + \frac{-\Delta H}{\rho C_p} k_0 e^{-E/RT} C_A + \frac{U A}{V \rho C_p} (T_c - T)$$

### 4.2 Diskretisasi dan Komputasi Episode

Pilih $\Delta t = 0.1$ min (Euler diskret):

$$T_{k+1} = T_k + \Delta t \cdot \left[ \frac{F}{V}(T_f - T_k) + \frac{-\Delta H}{\rho C_p} k_0 e^{-E/RT_k} C_{A,k} - \frac{UA}{V\rho C_p}(T_k - T_c) \right]$$

Parameter numerik: $-\Delta H = 5.0 \times 10^4\,\text{kJ/kmol}$, $\rho C_p = 2400\,\text{kJ}/(\text{m}^3\text{K})$, $UA/V = 1.5 \times 10^4\,\text{kJ}/(\text{m}^3\text{K min})$, $T_c = 350\,\text{K}$.

### 4.3 Simulasi Episode RL dengan Reward Tertimbang

Definisikan bobot $w_1 = 1.0$ (penalti suhu), $w_2 = 0.5$ (penalti konsentrasi), $w_3 = 0.05$ (penalti *control effort*). Misalkan pada $t=0$: $T_0 = 380\,\text{K}$ ($T_0 - T_{sp} = -15\,\text{K}$), $C_{A,0} = 2.5\,\text{kmol/m}^3$, dan agen memilih aksi $a_0 = +2$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
