# Modul Komprehensif: Riset Operasional, Optimasi Matematis, & Teori Antrian
**Sumber Referensi:** *Operations Research: An Introduction* (Hamdy A. Taha), *Introduction to Operations Research* (Frederick S. Hillier & Gerald J. Lieberman), *Linear Programming and Network Flows* (Mokhtar S. Bazaraa).

---

## 1. Pemodelan Pemrograman Linier (Linear Programming - LP)
Struktur matematis standar optimasi alokasi sumber daya terbatas:

### Bentuk Standar Model LP:
$$\text{Maksimumkan / Minimumkan } Z = \sum_{j=1}^{n} c_j X_j$$
*Dengan kendala (*Subject to*):*
$$\sum_{j=1}^{n} a_{ij} X_j \le b_i \quad (\text{atau } \ge b_i, = b_i), \quad \forall i = 1, 2, \dots, m$$
$$X_j \ge 0, \quad \forall j = 1, 2, \dots, n$$

*Dimana:*
- $X_j$: Variabel keputusan (*decision variables*).
- $c_j$: Koefisien ongkos / keuntungan per unit.
- $a_{ij}$: Koefisien konsumsi sumber daya $i$ oleh aktivitas $j$.
- $b_i$: Kapasitas ketersediaan sumber daya $i$ (*right-hand side* / RHS).

---

## 2. Metode Simpleks & Analisis Sensitivitas
- **Variabel Slack ($S_i \ge 0$)**: Ditambahkan pada kendala $(\le)$ untuk mengubahnya menjadi persamaan sama dengan $(=)$.
- **Variabel Surplus ($e_i \ge 0$) & Variabel Artificial ($R_i \ge 0$)**: Digunakan pada kendala $(\ge)$ atau $(=)$ melalui metode *Big-M* atau *Two-Phase Simplex*.
- **Kondisi Optimalitas:**
  - Masalah Maksimasi: Semua koefisien pada baris fungsi tujuan $(Z_j - c_j) \ge 0$.
  - Masalah Minimasi: Semua koefisien pada baris fungsi tujuan $(Z_j - c_j) \le 0$.
- **Kondisi Kelayakan (Leaving Variable):** Dipilih baris dengan rasio non-negatif terkecil:
  $$\text{Rasio Minimum} = \min \left\{ \frac{\text{RHS}_i}{a_{ik}} \mid a_{ik} > 0 \right\}$$
- **Shadow Price (Dual Price):** Nilai peningkatan fungsi tujuan $Z$ untuk setiap penambahan 1 unit kapasitas sumber daya $b_i$.

---

## 3. Model Transportasi & Distribusi Logistik
Mengirim barang dari $m$ sumber pasokan (*supply*) ke $n$ tujuan permintaan (*demand*) dengan biaya total pengiriman terendah.

### Langkah Sistematis Solusi Transportasi:
1. **Pemeriksaan Keseimbangan (*Balanced Condition*):**
   $$\sum_{i=1}^{m} a_i = \sum_{j=1}^{n} b_j$$
   *(Jika tidak seimbang, tambahkan baris/kolom dummy dengan biaya $c_{ij} = 0$)*
2. **Penentuan Solusi Awal (Initial Basic Feasible Solution):**
   - **Metode Vogel (VAM - Vogel's Approximation Method)**: Menghitung selisih penalti antara 2 biaya terendah di setiap baris dan kolom. Alokasikan semaksimal mungkin pada sel dengan biaya termurah di baris/kolom dengan penalti terbesar (Metode awal terbaik).
   - **Metode Sudut Kiri Atas (North-West Corner Rule - NWC)**: Sederhana namun jarang mendekati optimal.
   - **Metode Biaya Terendah (Least Cost Method - LCM)**.
3. **Uji Optimalitas (Metode MODI / Modified Distribution):**
   - Tentukan nilai pengali baris $u_i$ dan kolom $v_j$ untuk sel-sel basis terisi:
     $$u_i + v_j = c_{ij}$$
   - Hitung indeks evaluasi biaya sel kosong (*non-basic cells*):
     $$e_{ij} = c_{ij} - (u_i + v_j)$$
   - **Kriteria Optimal:** Jika semua $e_{ij} \ge 0$, alokasi sudah optimal. Jika ada $e_{ij} < 0$, buat lintasan tertutup (*stepping stone loop*) pada sel dengan nilai negatif terbesar untuk merealokasi muatan.

---

## 4. Teori Antrian Sistem Pelayanan (Queueing Theory)

### Notasi Kendal Kendall $(A / B / c) : (GD / K / N)$:
- $A$: Distribusi kedatangan (M = Poisson / Eksponensial, D = Deterministik, G = General).
- $B$: Distribusi waktu pelayanan.
- $c$: Jumlah server / loket pelayanan paralel.
- $\lambda$: Laju kedatangan rata-rata (pelanggan/jam).
- $\mu$: Laju pelayanan rata-rata per server (pelanggan/jam).
- $\rho$: Tingkat utilisasi sistem / kesibukan server ($\rho = \frac{\lambda}{c \mu} < 1$ agar sistem stabil).

### Formulasi Model Antrian Tunggal ($M/M/1 : GD/\infty/\infty$):
$$\text{Utilisasi Server } \rho = \frac{\lambda}{\mu}$$
$$\text{Jumlah rata-rata pelanggan dalam sistem } L = \frac{\lambda}{\mu - \lambda} = \frac{\rho}{1 - \rho}$$
$$\text{Jumlah rata-rata pelanggan dalam antrian } L_q = L \times \rho = \frac{\lambda^2}{\mu(\mu - \lambda)}$$
$$\text{Waktu rata-rata pelanggan dalam sistem } W = \frac{1}{\mu - \lambda} = \frac{L}{\lambda}$$
$$\text{Waktu rata-rata pelanggan dalam antrian } W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{L_q}{\lambda}$$
$$\text{Probabilitas sistem kosong } P_0 = 1 - \rho$$
$$\text{Probabilitas terdapat $n$ pelanggan } P_n = (1 - \rho) \rho^n$$
