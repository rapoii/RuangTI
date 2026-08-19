# Modul 422: Manajemen Risiko & Ketahanan Rantai Pasok (Supply Chain Risk Management - SCRM), Time-to-Recover (TTR), Time-to-Survive (TTS), dan ISO 28000 / ISO 22301

## 1. Domain Profesi & Ruang Lingkup
Profesi **Supply Chain Risk Manager / Business Continuity Specialist & Resilient Network Architect** bertugas mengidentifikasi kerentanan jaringan pemasok (*Vulnerability Mapping*), menghitung daya tahan rantai pasok saat terjadi disrupsi fatal (kebakaran pabrik, embargo, gempa bumi, krisis geopolitik), serta merancang strategi mitigasi multi-sumber (*Dual/Multi-Sourcing*).

---

## 2. Metrik Kuantitatif Ketahanan Disrupsi: TTR vs TTS (David Simchi-Levi Model)

### A. Time-to-Recover (TTR):
Waktu yang dibutuhkan oleh suatu fasilitas pemasok/pabrik tertentu untuk pulih kembali ke kapasitas produksi $100\%$ setelah mengalami disrupsi total (diukur dalam minggu atau bulan).

### B. Time-to-Survive (TTS):
Durasi waktu maksimum di mana rantai pasok perusahaan masih dapat memenuhi seluruh permintaan pasar tanpa pasokan dari fasilitas yang terdampak disrupsi tersebut, hanya dengan mengandalkan persediaan penyangga (*Buffer Stock*) dan kapasitas cadangan (*Backup Capacity*).

$$\text{TTS}_k = \frac{I_{\text{pipeline}} + I_{\text{finished goods}} + I_{\text{buffer}}}{\text{Laju Permintaan Pasar } D}$$

### Matriks Klasifikasi Risiko Simpul Pasokan:
- **Kondisi Aman / Tangguh**: $\text{TTS}_k \ge \text{TTR}_k$ (Perusahaan mampu bertahan hingga fasilitas pemasok pulih sepenuhnya tanpa mengorbankan pesanan konsumen).
- **Kondisi Sangat Rentan (*Critical Bottleneck Node*)**: $\text{TTS}_k < \text{TTR}_k$ (Terjadi kekosongan pasokan dan kehilangan pendapatan pasar selama selisih waktu $\Delta t = \text{TTR}_k - \text{TTS}_k$).

---

## 3. Model Finansial Dampak Finansial Disrupsi: Financial Impact of Disruption (FID)

$$\text{FID}_k = \sum_{t=\text{TTS}_k}^{\text{TTR}_k} \left( D_t \times P_{\text{margin}} \right) + C_{\text{contract penalty}} + C_{\text{expedited recovery}}$$

Di mana $D_t$ adalah permintaan pasar yang hilang pada periode $t$, $P_{\text{margin}}$ adalah margin laba per unit produk, dan $C_{\text{contract penalty}}$ adalah denda penalti akibat keterlambatan pengiriman ke konsumen.

---

## 4. Strategi Dual-Sourcing Optimal di Bawah Ketidakpastian Pasokan

Membagi alokasi pesanan antara Pemasok Utama Berbiaya Rendah tapi Berisiko Disrupsi ($c_1, p_1$) dan Pemasok Cadangan Lokal Berbiaya Lebih Tinggi tapi Andal ($c_2 > c_1, p_2 = 1.0$):

$$\min_{q_1, q_2} E[\text{Total Cost}] = c_1 q_1 + c_2 q_2 + E\left[ \pi \max(0, D - \tilde{S}_1 q_1 - q_2) \right]$$

Di mana $\tilde{S}_1$ adalah variabel acak ketersediaan pasokan pemasok 1 (Bernoulli dengan probabilitas disrupsi $p$), dan $\pi$ adalah biaya penalti kekurangan stok.

---

## 5. Referensi Terverifikasi (Academic & Industrial Standards)
- Simchi-Levi, D., Schmidt, W., & Wei, Y. (2014). *From superstorms to factory fires: Managing unpredictable supply-chain disruptions*. Harvard Business Review, 92(1-2), 96-101.
- International Organization for Standardization. (2022). *ISO 28000:2022 Security and resilience — Security management systems for the supply chain*. Geneva: ISO.
- International Organization for Standardization. (2019). *ISO 22301:2019 Security and resilience — Business continuity management systems*. Geneva: ISO.
- Bibi, Z., Akhtar, R., Noor, I., & Ahmad, I. (2024). *Supply chain risk resilience and vulnerability assessment in high-precision manufacturing clusters*. Spectrum of Engineering and Management Sciences, 2(1), 55-72.
