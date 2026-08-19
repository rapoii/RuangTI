# Modul 79: Human-Robot Collaboration (Cobots)

## Deskripsi Modul
Human-Robot Collaboration (HRC) atau *Cobots* mengacu pada sistem di mana manusia dan robot berbagi ruang kerja yang sama dan berinteraksi secara fisik atau kognitif untuk menyelesaikan tugas manufaktur. Berbeda dengan robot industri tradisional yang terisolasi dalam kandang keamanan (*caged robots*), cobot dirancang dengan sensor torsi, *force limiting*, dan kecepatan terbatas untuk menjamin keselamatan operator tanpa mengorbankan produktivitas.

## Konsep Inti Teknik Industri

### 1. Level Kolaborasi Manusia-Robot
Menurut ISO/TS 15066 dan Sheridan (2023), terdapat empat level interaksi:
1.  **Coexistence:** Manusia dan robot bekerja berdampingan tanpa pagar, tetapi tidak ada interaksi langsung.
2.  **Synchronization:** Koordinasi temporal (misal: robot menyerahkan part ke manusia).
3.  **Cooperation:** Berbagi tugas pada objek yang sama secara bergantian.
4.  **Collaboration:** Interaksi simultan dan adaptif pada objek/tugas yang sama.

### 2. Safety Metrics & Force Limiting
Standar ISO/TS 15066 menetapkan batas gaya dan tekanan berdasarkan zona tubuh:

$$
F_{max}(z) = \frac{P_{lim}(z)}{A_{contact}}
$$

di mana $P_{lim}(z)$ adalah batas tekanan bio-mekanis untuk zona tubuh $z$ dan $A_{contact}$ adalah area kontak efektif.

### 3. Task Allocation Optimization
Masalah alokasi tugas HRC dapat diformulasikan sebagai optimasi multi-objektif:

$$
\min \left\{ T_{cycle}, \ C_{ergo}, \ S_{risk} \right\}
$$

dengan kendala:
- $T_{cycle}$: Waktu siklus total
- $C_{ergo}$: Beban ergonomis operator (RULA/REBA score)
- $S_{risk}$: Risiko keselamatan berdasarkan proximity dan force

### 4. Cognitive Workload Modeling
Beban kognitif operator dalam HRC dimodelkan menggunakan NASA-TLX atau fisiologis (EEG/HRV):

$$
WL = \sum_{i=1}^{6} w_i \cdot r_i
$$

di mana $w_i$ adalah bobot dimensi (mental demand, physical demand, temporal demand, performance, effort, frustration) dan $r_i$ adalah rating subjektif.

## Aplikasi dalam Manufaktur
- **Assembly:** Kobot memegang komponen berat sementara operator melakukan fastening presisi.
- **Machine Tending:** Operator loading/unloading part sementara kobot menangani transfer antar stasiun.
- **Quality Inspection:** Kobot memposisikan kamera/sensor, operator melakukan judgment visual kompleks.
- **Kitting:** Kobot mengambil item dari bin, operator memverifikasi dan menyusun kit.

## Tantangan Implementasi
- **Safety Certification:** Validasi risiko sesuai ISO 10218-2 dan ISO/TS 15066 memerlukan pengujian empiris per aplikasi.
- **Trust Calibration:** Operator cenderung over-trust atau under-trust terhadap otonomi robot.
- **Ergonomic Trade-off:** Pengurangan beban fisik mungkin meningkatkan beban kognitif akibat monitoring konstan.
- **Programming Complexity:** Teaching-by-demonstration masih terbatas untuk tugas kompleks; diperlukan intuitive programming interfaces.

## Referensi Terkini (2023-2026)
1.  Tsarouchi, P., Makris, S., & Chryssolouris, G. (2023). Human–robot collaboration in assembly: A review of recent advances. *CIRP Annals*, 72(2), 655-678.
2.  Villani, V., Pini, F., Leali, F., & Fantuzzi, C. (2024). Survey on human–robot collaboration in industrial settings: Safety, intuitive interfaces and applications. *Mechatronics*, 97, 103090.
3.  ISO/TS 15066:2023. *Robots and robotic devices — Collaborative robots*. International Organization for Standardization.
4.  Ajoudani, A., Zanchettin, A.M., Ivaldi, S., Albu-Schäffer, A., Kosuge, K., & Khatib, O. (2024). Progress and prospects of the human–robot collaboration. *Autonomous Robots*, 48, 23.
5.  Maurtua, M.A., et al. (2025). Human–robot collaboration in manufacturing: A systematic review of safety standards and risk assessment methods. *Journal of Manufacturing Systems*, 82, 112-130.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>