# 2499 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif dan Integrasinya dengan Physics-Informed Neural Networks pada Model Predictive Control

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* telah mendorong transformasi fundamental pada paradigma pemeliharaan aset industri, bergeser dari strategi reaktif dan preventif berbasis jadwal menuju pendekatan *predictive maintenance* (PdM) berbasis kondisi (*condition-based maintenance*). Pearson (2024) dalam tulisannya di jurnal *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa anomali visual pada peralatan industri — seperti retakan mikro pada permukaan bantalan rol, korosi pada pipa bertekanan, keausan ulir sekrup konveyor, atau delaminasi pada bilah turbin — merupakan prekursor dominan kegagalan fungsional yang bila tidak dideteksi dini akan menimbulkan *unplanned downtime* dengan dampak ekonomi signifikan. Studi tersebut menunjukkan bahwa downtime tak terjadwal pada pabrik manufaktur skala menengah hingga besar dapat menimbulkan kerugian berkisar USD 10.000 hingga USD 250.000 per jam, sehingga akurasi deteksi anomali visual menjadi variabel strategis dalam *total productive maintenance* (TPM).

Dalam konteks tersebut, Pearson (2024) mengusulkan arsitektur *Convolutional Neural Network* (CNN) yang di-*fine-tune* untuk melakukan klasifikasi citra kondisi komponen kritis. Pendekatan ini memanfaatkan kemampuan representasi hierarkis CNN untuk mengekstraksi fitur visual tanpa memerlukan *hand-crafted feature engineering*. Berbeda dengan inspeksi manual yang memiliki variabilitas antarpengamat hingga 25–35%, sistem CNN memberikan konsistensi keputusan yang sangat tinggi ketika dilatih pada dataset citra anomali yang representatif. Sebagai komplemen integratif, Patel, Bhartiya, dan Gudi (2024) dalam karya mereka di *IFAC-PapersOnLine* (DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memperkenalkan *Physics-Informed Neural Networks* (PINN) yang digabungkan dengan *Model Predictive Control* (MPC) untuk sistem proses, di mana pengetahuan fisika (persamaan diferensial parsial, hukum konservasi massa dan energi) di-*embed* ke dalam fungsi kerugian jaringan saraf. Sinergi antara deteksi anomali visual dan kontrol prediktif berbasis fisika ini merepresentasikan evolusi penting dalam rekayasa sistem industri modern, karena memungkinkan loop umpan balik tertutup antara persepsi kondisi aset (melalui citra) dan optimasi operasional (melalui MPC-PINN) secara real-time.

Urgensi integratif ini semakin nyata ketika mempertimbangkan bahwa data citra anomali dari lini produksi harus diterjemahkan menjadi *set-point adjustment* atau rekomendasi jadwal pemeliharaan yang kompatibel dengan pengendali proses hilir. Tanpa integrasi semacam ini, deteksi anomali hanya menjadi informasi pasif yang tidak memicu respons kontrol yang optimal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Klasifikasi Anomali Visual

Pearson (2024) mengadopsi arsitektur CNN dengan lapisan konvolusi, aktivasi non-linear, dan pooling yang secara matematis dapat diformulasikan sebagai berikut. Untuk lapisan konvolusi ke-$l$, peta fitur $\mathbf{Z}^{(l)}$ dihitung melalui operasi konvolusi diskret:

$$Z^{(l)}_{i,j,k} = \sum_{m=0}^{M-1}\sum_{n=0}^{N-1}\sum_{c=0}^{C^{(l-1)}-1} W^{(l)}_{m,n,c,k} \cdot X^{(l-1)}_{i+m, j+n, c} + b^{(l)}_{k}$$

di mana $W^{(l)}_{m,n,c,k}$ merupakan kernel filter berukuran $M \times N$, $b^{(l)}_{k}$ adalah bias, dan indeks $k$ merepresentasikan filter ke-$k$. Fungsi aktivasi ReLU $\sigma(x) = \max(0, x)$ diterapkan untuk引入 non-linearitas, sedangkan *max-pooling* dengan ukuran $p \times p$ melakukan down-sampling:

$$Y^{(l)}_{i,j,k} = \max_{0 \leq u < p,\, 0 \leq v < p} Z^{(l)}_{p \cdot i + u,\, p \cdot j + v,\, k}$$

Lapisan *fully-connected* akhir menghasilkan distribusi probabilitas kelas melalui *softmax*:

$$P(y = c \mid \mathbf{x}) = \frac{\exp(\mathbf{w}_c^\top \mathbf{h} + b_c)}{\sum_{c'=1}^{C} \exp(\mathbf{w}_{c'}^\top \mathbf{h} + b_{c'})}$$

Fungsi kerugian *cross-entropy* kategorik yang diminimalkan selama proses pelatihan adalah:

$$\mathcal{L}_{\text{CE}} = -\frac{1}{B}\sum_{i=1}^{B} \sum_{c=1}^{C} y_{i,c} \log P(y_i = c \mid \mathbf{x}_i)$$

dengan $B$ adalah ukuran *mini-batch*, $C$ jumlah kelas kondisi (normal, anomali ringan, anomali berat), dan $y_{i,c}$ adalah indikator one-hot.

### 2.2 Physics-Informed Neural Networks untuk MPC

Patel, Bhartiya, dan Gudi (2024) menyusun PINN yang menggabungkan fungsi kerugian data dengan *physics loss*:

$$\mathcal{L}_{\text{PINN}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}}$$

di mana $\mathcal{L}_{\text{physics}}$ mengukur seberapa baik keluaran jaringan $\hat{u}_\theta(x,t)$ memenuhi *governing equation* $\mathcal{F}$:

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_p}\sum_{j=1}^{N_p} \left\| \mathcal{F}\!\left(x_j, t_j, \hat{u}_\theta, \frac{\partial \hat{u}_\theta}{\partial t}, \frac{\partial \hat{u}_\theta}{\partial x}, \frac{\partial^2 \hat{u}_\theta}{\partial x^2}\right) \right\|^2$$

Untuk sistem proses reaktor tangki pengaduk (*continuous stirred tank reactor*, CSTR), governing equation nonlinear dapat ditulis sebagai:

$$\frac{dC_A}{dt} = \frac{F}{V}(C_{A,in} - C_A) - k_0 \exp\!\left(-\frac{E}{RT}\right) C_A$$

$$\frac{dT}{dt} = \frac{F}{V}(T_{in} - T) + \frac{-\Delta H}{\rho C_p} k_0 \exp\!\left(-\frac{E}{RT}\right) C_A - \frac{UA}{V\rho C_p}(T - T_c)$$

Fungsi tujuan MPC yang diminimalkan dalam horizon prediksi $N_p$ adalah:

$$J = \sum_{k=0}^{N_p-1} \left[ (\mathbf{x}_k - \mathbf{x}_{ref})^\top Q (\mathbf{x}_k - \mathbf{x}_{ref}) + \mathbf{u}_k^\top R \mathbf{u}_k \right] + (\mathbf{x}_{N_p} - \mathbf{x}_{ref})^\top P (\mathbf{x}_{N_p} - \mathbf{x}_{ref})$$

dengan kendala $\mathbf{x}_{k+1} = f_{\text{PINN}}(\mathbf{x}_k, \mathbf{u}_k)$ yang menggantikan model first-principles linear tradisional.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis deteksi anomali berbasis CNN yang dipadukan dengan MPC-PINN mengikuti *Standard Operating Procedure* (SOP) delapan tahap sebagai berikut:

**Tahap 1 — Akuisisi Data Citra.** Pemasangan kamera industri *high-resolution* (minimal 5 MP) dengan kelas proteksi IP67/IP69K pada titik inspeksi kritis. Pencahayaan terkontrol menggunakan *ring light* LED diffuser 5600K untuk memastikan uniformitas iluminasi ≥ 80%. Standar acuan: ISO 9001:2015 (klausul 7.1.5 *Monitoring and measuring resources*) dan ISO 13373-*Condition monitoring*.

**Tahap 2 — Pelabelan dan Augmentasi.** Dataset citra dilabeli oleh ahli pemeliharaan senior ke dalam tiga kelas (normal, anomali ringan, anomali berat). Augmentasi dilakukan melalui rotasi ($\pm 30°$), flip horizontal, perubahan brightness ($\pm 20\%$), dan *CutMix* untuk memperbesar variabilitas sampel. Rasio pembagian data: 70% *training*, 15% *validation*, 15% *test*.

**Tahap 3 — Arsitektur dan Pra-pelatihan.** Menggunakan *backbone* ResNet-50 atau EfficientNet-B3 dengan bobot pra-latih ImageNet. Lapisan *classifier head* diganti dengan *Global Average Pooling* diikuti *fully-connected layer* 3-arah dan *softmax*.

**Tahap 4 — Pelatihan dan Validasi.** Pelatihan menggunakan optimizer Adam dengan *learning rate* awal $\eta_0 = 10^{-4}$ dan *scheduler* cosine annealing. *Early stopping* dengan *patience* 15 epoch berdasarkan val_loss. Batch size 32, maksimum 100 epoch.

**Tahap 5 — Evaluasi Model.** Metrik evaluasi: akurasi, presisi, *recall*, F1-score, dan AUC-ROC. Threshold optimal ditetapkan melalui analisis kurva PR.

**Tahap 6 — Integrasi PINN-MPC.** Hasil klasifikasi anomali dari CNN digunakan sebagai pemicu *re-tuning* parameter MPC. Bobot $\lambda_p$ dalam PINN disesuaikan berdasarkan tingkat keparahan anomali: anomali ringan $\lambda_p = 0{,}7$; anomali berat $\lambda_p = 0{,}3$ (memberi bobot lebih besar pada data observasi terkini dibanding prior fisika).

**Tahap 7 — Deployment Edge-Cloud.** Model CNN di-*deploy* pada *edge device* (NVIDIA Jetson AGX Orin) untuk inferensi latensi rendah (< 50 ms), sedangkan MPC-PINN dijalankan pada *cloud server* dengan horizon prediksi 30–60 langkah waktu.

**Tahap 8 — Audit dan Iterasi.** Audit bulanan terhadap *drift* kinerja model menggunakan *data distribution monitoring* dan *concept drift detection* (Page-Hinkley test). Standar acuan: ISO/IEC 42001:2023 (*AI Management System*) dan NIST AI RMF.

Diagram alir proses menunjukkan loop tertutup: **Akuisisi Citra → Pra-pemrosesan → CNN Inference → Keputusan Kondisi → Pemicu MPC-PINN → Penyesuaian Set-point → Eksekusi Actuator → Logging & Retraining**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Pemeliharaan Pompa Sentrifugal pada Pabrik Kimia

**Parameter Industri:**
- Komponen: *Impeller* pompa sentrifugal ASTM A216 Grade WCB
- Laju alir volumetrik: $F = 50\,\text{m}^3/\text{jam} = 0{,}01389\,\text{m}^3/\text{s}$
- Volume tangki: $V = 2{,}5\,\text{m}^3$
- Konsentrasi reaktan inlet: $C_{A,in} = 1{,}2\,\text{kmol}/\text{m}^3$
- Konstanta Arrhenius: $k_0 = 7{,}2 \times 10^{6}\,\text{s}^{-1}$, $E/R = 8750\,\text{K}$
- Suhu operasi: $T = 350\,\text{K}$, $T_c = 300\,\text{K}$
- $\Delta H = -5{,}0 \times 10^4\,\text{J}/\text{mol}$, $\rho C_p = 4{,}0 \times 10^6\,\text{J}/(\text{m}^3\cdot\text{K})$, $UA = 1{,}5 \times 10^5\,\text{W}/\text{K}$

**Langkah 1 — Perhitungan Laju Reaksi:**
$$r = k_0 \exp\!\left(-\frac{E}{RT}\right) C_A = 7{,}2\times 10^{6} \cdot \exp(-8750/350) \cdot 1{,}2$$

$$\exp(-25) \approx 1{,}388 \times 10^{-11} \Rightarrow r \approx 7{,}2\times 10^{6} \cdot 1{,}388\times 10^{-11} \cdot 1{,}2 \approx 1{,}199 \times 10^{-4}\,\text{kmol}/(\text{m}^3\cdot\text{s})$$

**Langkah 2 — Deteksi Anomali Visual CNN.** Dataset pelatihan: 12.000 citra impeller. Setelah pelatihan, model mencapai akurasi validasi 96,4%, presisi 95,8%, *recall* 94,9%, F1-score 95,3%, AUC-ROC 0,987. Sebuah citra impeller di-*inferensikan* menghasilkan probabilitas:

$$P(\text{normal}) = 0{,}12,\quad P(\text{anomali ringan}) = 0{,}23,\quad P(\text{anomali berat}) = 0{,}65$$

Sistem menetapkan keputusan: **anomali berat** (retakan propagasi pada bilah impeller).

**Langkah 3 — Pemicu MPC-PINN.** Karena terdeteksi anomali berat, sistem menaikkan laju alir pendingin secara gradual:

$$F_c^{new} = F_c^{old} (1 + \alpha) = 0{,}020 \cdot (1 + 0{,}15) = 0{,}023\,\text{m}^3/\text{s}$$

dan menaikkan $\lambda_p$ MPC-PINN dari 0,5 menjadi 0,3, sehingga model lebih adaptif terhadap