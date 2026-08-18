# 93. Safety Engineering & Bow-Tie Analysis

## Deskripsi Modul
Modul ini membahas pendekatan sistematis dalam rekayasa keselamatan industri menggunakan metode **Bow-Tie Analysis**. Metode ini mengintegrasikan analisis penyebab (fault tree) dan konsekuensi (event tree) dalam satu diagram visual untuk mengelola risiko mayor, memverifikasi efektivitas penghalang (barriers), dan memenuhi standar seperti ISO 45001 serta Seveso III Directive.

## Konsep Inti

### 1. Struktur Diagram Bow-Tie
Diagram Bow-Tie terdiri dari:
- **Top Event (TE):** Kejadian kritis yang tidak diinginkan (misal: *Loss of Containment*, *Runaway Reaction*).
- **Threats:** Penyebab potensial di sisi kiri.
- **Consequences:** Dampak di sisi kanan.
- **Preventive Barriers:** Penghalang di sisi kiri yang mencegah threat menjadi TE.
- **Mitigative Barriers:** Penghalang di sisi kanan yang mengurangi dampak setelah TE terjadi.
- **Escalation Factors:** Kondisi yang melemahkan atau mengalahkan barrier (dikelola dengan *Escalation Factor Controls*).

### 2. Kuantifikasi Efektivitas Barrier
Dalam Bow-Tie kuantitatif, probabilitas kegagalan barrier ($P_{fail}$) dimodelkan:

$$ P(TE) = \sum_{i=1}^{n} \left[ P(T_i) \times \prod_{j=1}^{m} P(B_{ij\_fail}) \right] $$

Dimana $P(T_i)$ adalah frekuensi ancaman ke-i dan $P(B_{ij\_fail})$ adalah probabilitas kegagalan barrier preventif j untuk ancaman i.

Untuk barrier mitigatif, ekspektasi konsekuensi ($E[C]$):

$$ E[C] = \sum_{k=1}^{p} C_k \times P(C_k | TE) \times \prod_{l=1}^{q} P(M_{kl\_fail}) $$

### 3. LOPA (Layer of Protection Analysis) Integration
Bow-Tie sering dikombinasikan dengan LOPA untuk memverifikasi apakah Independent Protection Layers (IPL) memadai:

$$ PFD_{total} = PFD_{init} \times \prod_{n} PFD_{IPL,n} $$

Target Risk Frequency biasanya ditetapkan < $1 \times 10^{-4}$ per tahun untuk kejadian fatal di fasilitas kimia.

### 4. Swiss Cheese Model & Barrier Degradation
Setiap barrier memiliki lubang (weakness). Kecelakaan terjadi ketika lubang-lubang ini sejajar. Dalam manajemen modern, *Barrier Health Monitoring* dilakukan secara real-time menggunakan data sensor IoT untuk mendeteksi degradasi sebelum kegagalan total.

## Aplikasi Teknik Industri
- **Manajemen Risiko Proses Kimia:** Identifikasi skenario *fire/explosion/toxic release*.
- **Keselamatan Pertambangan:** Analisis *ground fall* atau *vehicle collision*.
- **Audit Sistem Manajemen K3:** Memverifikasi bahwa barrier yang direncanakan benar-benar ada dan berfungsi di lapangan.
- **Investigasi Insiden:** Melacak barrier mana yang gagal dan mengapa (root cause analysis).

## Referensi Terverifikasi (2023-2026)
1.  **CCPS (Center for Chemical Process Safety).** (2023). *Bow Ties in Risk Management: A Concept Book for Process Safety* (2nd ed.). Wiley-AIChE.
2.  **ISO 45001:2018/Amd 1:2024.** *Occupational health and safety management systems — Requirements with guidance for use*.
3.  **Badreddine, A., et al.** (2023). Dynamic Bow-Tie for operational risk management in Industry 4.0: Integrating IoT and digital twins. *Reliability Engineering & System Safety*, 237, 109348.
4.  **Khakzad, N., & Reniers, G.** (2024). Quantitative Bow-Tie analysis for domino effects in chemical industrial clusters. *Journal of Loss Prevention in the Process Industries*, 88, 105267.
5.  **CGE Risk Management Solutions.** (2025). *The Bow-Tie Method: Visualizing Risk Management*. Springer Briefs in Safety Science.

## Kata Kunci RAG
Bow-Tie Analysis, Safety Engineering, Barrier Management, LOPA, Top Event, Preventive Barrier, Mitigative Barrier, Escalation Factor, ISO 45001, Process Safety, Risk Assessment, CCPS.

</content>