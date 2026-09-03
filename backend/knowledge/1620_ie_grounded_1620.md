# 1620 — Perencanaan Gerak Robot Otonom dan Sistem Multi-Agen Cerdas Berbasis Pembelajaran Penguatan dalam Rekayasa Sistem Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 menempatkan robot otonom sebagai tulang punggung sistem produksi, logistik, dan rantai pasok modern. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* (Elsevier, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak (*motion planning*) bukan lagi persoalan geometris murni, melainkan masalah keputusan sekuensial yang harus diselesaikan di tengah ketidakpastian lingkungan, dinamika sensor, dan kendala energi. Kala mengidentifikasi empat kelas keputusan yang harus diselesaikan secara simultan: (i) penentuan lintasan bebas hambatan, (ii) alokasi aksi diskret atau kontinyu, (iii) pengelolaan eksplorasi-eksploitasi, dan (iv) adaptasi terhadap kondisi yang tidak diamati secara langsung. Keempat aspek ini membentuk poros permasalahan rekayasa sistem industri saat ini, terutama pada *Automated Storage and Retrieval Systems* (AS/RS) dan *Autonomous Guided Vehicles* (AGV) yang beroperasi di gudang *e-commerce*, lini perakitan *automotive*, hingga platform *last-mile delivery*.

Di sisi lain, Kaustav Borah (2024) dalam disertasinya yang berjudul *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) menyoroti dimensi kedua yang tidak kalah strategis: keandalan sistem otonom melalui *Fault Detection, Isolation, and Reconstruction* (FDIR). Borah menulis: *"There is growing importance in complex engineering systems to operate autonomously, especially given potential malfunctions that may occur in the system, such as sensors, actuators, components, communication networks, and controllers. Fault detection, isolation, and reconstruction (FDIR) are crucial for autonomous systems."* Pernyataan tersebut menggarisbawahi bahwa satu *node* kegagalan pada robot otonom dapat merambat menjadi kerugian produksi masif. Sebagai ilustrasi, biaya *downtime* lini manufaktur otomatis diestimasikan mencapai USD 22.000 per menit pada industri semikonduktor, dan kegagalan komunikasi *fleet* AGV di gudang *fulfilment* dapat menurunkan *throughput* hingga 18% dalam satu jam operasi (berbagai studi kasus industri yang dirujuk Borah, 2024).

Konteks urgensi operasional, ekonomis, dan teknis ini menciptakan kebutuhan terhadap pendekatan yang tidak lagi cukup dijawab oleh kontroler klasik (PID, *state-feedback*, atau lintasan berbasis *A\** dan *Rapidly-exploring Random Tree*). Teknik klasik memerlukan pemodelan lingkungan secara eksplisit, gagal ketika keadaan tidak terobservasi penuh, dan tidak mampu belajar dari pengalaman lintas-shift. Pembelajaran Penguatan (*Reinforcement Learning*, RL) muncul sebagai paradigma yang memungkinkan agen—baik robot tunggal maupun *fleet*—belajar kebijakan optimal melalui interaksi, sambil terus meningkatkan kinerja seiring bertambahnya data operasional. Dokumen modul ini membahas formulasi matematis, SOP rekayasa, studi kasus kuantitatif, dan evaluasi kritis terhadap penerapan RL untuk perencanaan gerak serta koordinasi multi-agen dalam industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Proses Keputusan Markov (MDP)

Fondasi teoretis RL adalah MDP yang didefinisikan sebagai tuple:

$$\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$$

dengan $\mathcal{S}$ adalah ruang keadaan (*state space*), $\mathcal{A}$ adalah ruang aksi (*action space*), $P(s'|s,a)$ adalah fungsi transisi probabilistik, $R(s,a)$ adalah *reward function* sesaat, dan $\gamma \in [0,1)$ adalah faktor diskonto yang menghargai imbal di masa depan relatif terhadap imbal saat ini. Kala (2024) menekankan bahwa perumusan $\mathcal{S}$ dan $\mathcal{A}$ merupakan keputusan rekayasa paling krusial karena menentukan dimensi masalah dan kemampuan generalisasi agen.

### 2.2 Persamaan Bellman dan Fungsi Nilai

Kualitas kebijakan $\pi(a|s)$ diukur melalui fungsi nilai keadaan $V^{\pi}(s)$ atau fungsi nilai aksi $Q^{\pi}(s,a)$:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\!\left[\sum_{t=0}^{\infty} \gamma^{t} R_{t+1} \,\Big|\, s_0=s\right]$$

$$Q^{\pi}(s,a) = \mathbb{E}_{\pi}\!\left[\sum_{t=0}^{\infty} \gamma^{t} R_{t+1} \,\Big|\, s_0=s, a_0=a\right]$$

Persamaan optimalitas Bellman menentukan kebijakan optimal melalui:

$$Q^{*}(s,a) = \mathbb{E}\!\left[R_{t+1} + \gamma \max_{a'} Q^{*}(s_{t+1}, a') \,\Big|\, s_t=s, a_t=a\right]$$

### 2.3 Algoritma Q-Learning dan SARSA

Q-Learning adalah metode *off-policy* dengan aturan pembaruan:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \!\left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)\right]$$

dengan $\alpha \in (0,1)$ adalah laju pembelajaran. SARSA, di sisi lain, adalah varian *on-policy* yang menggunakan aksi aktual $a_{t+1}$:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \!\left[r_{t+1} + \gamma Q(s_{t+1},a_{t+1}) - Q(s_t,a_t)\right]$$

Kala (2024) menunjukkan bahwa pada perencanaan gerak di lingkungan dengan rintangan dinamis, SARSA lebih konservatif dan aman, sedangkan Q-Learning memberikan kebijakan optimal asimptotik tetapi mengeksplorasi risiko lebih agresif.

### 2.4 Policy Gradient dan Actor-Critic

Untuk ruang aksi kontinyu—seperti perintah.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
