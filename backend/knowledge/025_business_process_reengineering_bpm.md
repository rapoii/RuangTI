# Modul Riset Ilmiah: Rekayasa Proses Bisnis (BPR) & Manajemen Alur Kerja (BPM)
**Sumber Referensi Jurnal & Literatur Terverifikasi (Crossref Validated):**
- Hammer, M., & Champy, J. (1993). *Reengineering the Corporation: A Manifesto for Business Revolution*. Harper Business. ISBN: 978-0060559533.
- Dumas, M., La Rosa, M., Mendling, J., & Reijers, H. A. (2018). *Fundamentals of Business Process Management* (2nd ed.). Springer. DOI: [10.1007/978-3-662-56509-4](https://doi.org/10.1007/978-3-662-56509-4).
- Little, J. D. C. (1961). *A proof for the queuing formula: L = λW*. Operations Research, 9(3), 383-387.
- Davenport, T. H. (1993). *Process Innovation: Reengineering Work through Information Technology*. Harvard Business School Press.
- van der Aalst, W. M. P. (2016). *Process Mining: Data Science in Action* (2nd ed.). Springer. DOI: 10.1007/978-3-662-49851-4.
- Harmon, P. (2019). *Business Process Change* (4th ed.). Morgan Kaufmann.

---

## 1. Konsep Dasar Business Process Reengineering (BPR) & BPM

BPR adalah pemikiran ulang mendasar (*fundamental rethinking*) dan perancangan ulang radikal (*radical redesign*) dari proses bisnis organisasi untuk mencapai peningkatan dramatis dalam ukuran kinerja kritis kontemporer: biaya (*cost*), kualitas (*quality*), pelayanan (*service*), dan kecepatan (*speed*). Berbeda dengan Kaizen yang inkremental, BPR bertujuan lompatan kuantum dan kerap memanfaatkan teknologi informasi sebagai enabler (Davenport, 1993).

### 4 Kata Kunci BPR (Michael Hammer)
1. **Fundamental:** mempertanyakan premis dasar — *"Mengapa kita melakukan apa yang kita lakukan?"*
2. **Radikal:** membuang prosedur lama hingga ke akarnya, bukan sekadar perbaikan inkremental.
3. **Dramatis:** menargetkan lompatan performa ($50\%-100\%\uparrow$), bukan perbaikan persentase kecil.
4. **Proses:** fokus pada aliran aktivitas end-to-end lintas fungsi yang menciptakan nilai bagi pelanggan.

### Siklus Hidup BPM (Dumas dkk.)
Manajemen proses bisnis modern membingkai BPR dalam siklus kontinu lima fase: (1) **Discovery** (pemetaan as-is via observasi/event log), (2) **Analysis** (bottleneck, pemborosan, kualitas data), (3) **Redesign** (to-be modeling), (4) **Implementation** (otomasi workflow engine/BPMN execution), (5) **Monitoring & Controlling** (process mining, dashboard KPI) — lalu kembali ke discovery.

## 2. Formulasi Matematis

### A. Dinamika Aliran Proses — Hukum Little
Hubungan fundamental antara WIP, throughput, dan lead time suatu proses:

$$
L = \lambda \times W
$$

- $L$ = Work-In-Process rata-rata (jumlah entitas/dokumen di dalam sistem).
- $\lambda$ = laju throughput rata-rata (keluaran per satuan waktu).
- $W$ = cycle time / lead time rata-rata di dalam sistem.

**Implikasi manajerial:** untuk memangkas waktu siklus ($W \downarrow$) tanpa menurunkan kapasitas ($\lambda$ tetap), satu-satunya rekayasa adalah **mengeliminasi antrian/WIP ($L \downarrow$)** — inilah justifikasi kuantitatif eliminasi delay pada redesain proses.

### B. Utilisasi Stasiun Kerja & Waktu Antre
Untuk stasiun dengan $c$ server dan laju layanan $\mu$ per server:

$$
U = \frac{\lambda}{c\,\mu}, \qquad W_q = \frac{\lambda}{\mu(\mu - \lambda)} \;\; (\text{satu server, M/M/1})
$$

Utilisasi mendekati $1$ membuat $W_q$ meledak non-linier — dasar aturan desain: sediakan kapasitas cadangan (*protective capacity*) pada proses administrasi.

### C. Rasio Nilai Tambah Proses (Process Cycle Efficiency)
$$
PCE = \frac{\sum t_{\text{value-added}}}{LT} \times 100\%
$$
dengan $LT$ = total lead time end-to-end. Proses administrasi tipikal memiliki $PCE < 10\%$ — mayoritas waktu adalah tunggu, transport, dan inspeksi.

### D. Biaya Proses Berbasis Aktivitas (ABC)
Total biaya proses untuk volume $V$ transaksi:
$$
TC_p = V \times \sum_{a \in A} \left( t_a \cdot r_a \right)
$$
dengan $t_a$ = durasi aktivitas $a$ dan $r_a$ = tarif biaya per jam sumber dayanya.

## 3. Metode Solusi / Teknik Analisis & Redesign

### Simbol Standar ASME (Process Chart)
1. **Operasi ($\bigcirc$):** mengubah karakteristik fisik/kimia atau menambah nilai.
2. **Pemeriksaan ($\square$):** verifikasi kuantitas/kualitas.
3. **Transportasi ($\Rightarrow$):** pergerakan material/informasi/operator.
4. **Menunggu ($D$):** antrian/waktu tunggu non-produktif.
5. **Penyimpanan ($\nabla$):** penyimpanan terkendali (gudang/database).

### Heuristik Redesain Proses (Reijers & Limam / Dumas dkk.)
- **Eliminate:** hapus aktivitas tanpa nilai tambah (duplikasi entri data, approval berlapis).
- **Combine:** integrasikan tugas terpisah ke satu pekerja kasus (*case manager / one-stop*).
- **Parallelize:** ubah sekuensial menjadi paralel (menekan $W$ tanpa mengubah isi kerja).
- **Standardize & Automate:** workflow engine, RPA untuk tugas rutin berbasis aturan.
- **Outsource/Insource** aktivitas non-inti sesuai analisis kompetensi.

### Process Mining sebagai Basis Data Empiris
Event log sistem informasi (ERP/workflow) diekstraksi menjadi model proses aktual (α-algorithm, inductive miner), lalu diuji **conformance checking** terhadap model standar — menggantikan pemetaan as-is manual yang bias sampling.

## 4. Aplikasi di Industrial Engineering

- **Redesain Proses Order-to-Cash & Procure-to-Pay:** konsolidasi titik kontak pelanggan, eliminasi redundansi dokumen.
- **Lean Office/Administrasi:** kombinasi VSM administrasi dengan Little's Law untuk memangkas lead time service.
- **Digitalisasi Workflow:** pemodelan BPMN 2.0 → eksekusi workflow engine → monitoring KPI real-time.
- **Shared Services Center:** sentralisasi transaksi ber-volume tinggi dengan standardisasi aktivitas.
- **Audit Kepatuhan:** conformance checking untuk deteksi fraud/deviasi prosedur SOP.

## 5. Referensi Terverifikasi

1. Hammer, M., & Champy, J. (1993). *Reengineering the Corporation*. Harper Business. ISBN: 978-0060559533.
2. Dumas, M., La Rosa, M., Mendling, J., & Reijers, H. A. (2018). *Fundamentals of Business Process Management* (2nd ed.). Springer. DOI: 10.1007/978-3-662-56509-4.
3. Little, J. D. C. (1961). Operations Research, 9(3), 383-387.
4. Davenport, T. H. (1993). *Process Innovation*. Harvard Business School Press.
5. van der Aalst, W. M. P. (2016). *Process Mining: Data Science in Action* (2nd ed.). Springer. DOI: 10.1007/978-3-662-49851-4.
6. Harmon, P. (2019). *Business Process Change* (4th ed.). Morgan Kaufmann.
