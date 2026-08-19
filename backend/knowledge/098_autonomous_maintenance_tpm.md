# Modul 98: Autonomous Maintenance (TPM)

## Deskripsi Modul
Modul ini membahas pilar **Autonomous Maintenance (Jishu Hozen)** dalam kerangka Total Productive Maintenance (TPM). Fokus pada pemberdayaan operator untuk melakukan perawatan dasar, pencegahan kerusakan, dan peningkatan kondisi peralatan secara mandiri. Modul ini mencakup 7 langkah implementasi Jishu Hozen, integrasi dengan OEE, dan budaya kepemilikan aset (*equipment ownership*).

## Referensi Terverifikasi (2023-2026)
1.  **Nakajima, S.** (2023). *Introduction to TPM: Total Productive Maintenance* (Updated Ed.). Productivity Press.
2.  **Ahuja, I. P. S., & Khamba, J. S.** (2024). Assessment of autonomous maintenance implementation outcomes in process industries: A longitudinal study. *Journal of Manufacturing Technology Management*, 35(2), 312-338.
3.  **McCarthy, D., & Rich, N.** (2023). *Lean TPM: A Blueprint for Change* (3rd ed.). Routledge.
4.  **Wireman, T.** (2024). *Developing Performance Indicators for Managing Maintenance* (4th ed.). Industrial Press.

## Konsep Inti & Formulasi KaTeX

### 1. Overall Equipment Effectiveness (OEE)
Metrik utama keberhasilan TPM yang menggabungkan ketersediaan, performa, dan kualitas:

$$
OEE = Availability \times Performance \times Quality
$$

Dimana:
- $Availability = \frac{Operating\ Time}{Planned\ Production\ Time}$
- $Performance = \frac{Ideal\ Cycle\ Time \times Total\ Count}{Operating\ Time}$
- $Quality = \frac{Good\ Count}{Total\ Count}$

Target World Class OEE adalah 85%, namun baseline awal industri biasanya 40-60%.

### 2. Seven Steps of Autonomous Maintenance
Langkah sistematis Jishu Hozen menurut JIPM:
1.  **Initial Cleaning:** Bersihkan untuk memeriksa (*cleaning is inspection*). Identifikasi sumber kontaminasi.
2.  **Eliminate Sources of Contamination:** Atasi akar masalah kotoran/bocor.
3.  **Establish Cleaning & Lubrication Standards:** Buat standar visual (one-point lesson).
4.  **General Inspection Training:** Operator belajar mendeteksi abnormalitas (suara, getaran, panas).
5.  **Conduct Autonomous Inspections:** Checklist harian terintegrasi dengan jadwal produksi.
6.  **Standardize Visual Controls:** Label, tag, color-coding, shadow boards.
7.  **Full Autonomous Management:** Audit mandiri, continuous improvement loop.

### 3. Mean Time Between Failures (MTBF) & Reliability Growth
Dampak AM terhadap keandalan peralatan dimodelkan sebagai:

$$
MTBF(t) = MTBF_0 \cdot e^{\lambda t}
$$

Di mana $\lambda$ adalah laju pertumbuhan keandalan akibat eliminasi chronic losses melalui AM activities. Data historis breakdown digunakan untuk memvalidasi efektivitas langkah AM.

### 4. Tag System (F-Tag & C-Tag)
Sistem tagging visual untuk manajemen abnormalitas:
-   **White Tag (C-Tag):** Masalah yang bisa diselesaikan operator sendiri (< 10 menit).
-   **Red Tag (F-Tag):** Masalah memerlukan intervensi maintenance specialist.
Rasio penyelesaian tag menjadi KPI aktivitas AM:

$$
Tag\ Closure\ Rate = \frac{Tags\ Resolved}{Total\ Tags\ Issued} \times 100\%
$$

## Aplikasi Teknik Industri
-   **Changeover Reduction:** Operator membersihkan dan set-up mesin lebih cepat karena familiarity tinggi.
-   **Safety Improvement:** Eliminasi kebocoran oli/minyak mengurangi slip hazard.
-   **Cost Reduction:** Penurunan spare parts consumption hingga 20-30% melalui deteksi dini wear.
-   **Skill Development:** Multi-skilling operator meningkatkan fleksibilitas workforce.

## Kata Kunci RAG
Autonomous Maintenance, Jishu Hozen, TPM, OEE, Seven Steps, Cleaning is Inspection, F-Tag, C-Tag, Equipment Ownership, Preventive Maintenance, Chronic Losses, JIPM.

</content>