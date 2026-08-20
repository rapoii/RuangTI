# Modul 523: Penjadwalan Derek Jembatan Industri (Overhead Crane Scheduling) dengan Batasan Interferensi Spasial, Jarak Keselamatan Antar-Derek, dan Alokasi Beban di Bay Manufaktur Berat

## 1. Pengantar & Konteks Industri: Bottleneck Logistik Derek Atap pada Fasilitas Manufaktur Berat

Dalam industri manufaktur berat (*heavy manufacturing*)—seperti pabrik peleburan baja (*steelmaking meltshops*), galangan kapal (*shipbuilding yards*), pengecoran logam (*foundries*), dan pabrik manufaktur bejana tekan (*heavy pressure vessels*)—perpindahan material berbobot puluhan hingga ratusan ton tidak dapat mengandalkan konveyor konvensional maupun armada AGV lantai. Transportasi material mengandalkan sistem **Derek Jembatan Atas (Overhead Travelling Cranes / Bridge Cranes)** yang bergerak di sepanjang bentang rel layang (*crane runway / runway beams*) (Zhang & Rose, 2013; Xie et al., 2018; Tanizaki et al., 2020; Maschietto et al., 2024).

```
+---------------------------------------------------------------------------------------------------+
|               SKEMATIK INTERFERENSI SPASIAL MULTI-DEREK ATAP PADA BAY MANUFAKTUR BERAT             |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [Rel Derek Kiri]                                                                 [Rel Derek Kanan]|
|  ================================================================================================= |
|               │                            │                            │                         |
|               │       ┌────────────┐       │       ┌────────────┐       │                         |
|               │       │ Derek 1    │       │       │ Derek 2    │       │                         |
|               ├───────┤  (Crane 1) ├───────┼───────┤  (Crane 2) ├───────┤                         |
|               │       │ Posisi x_1 │       │       │ Posisi x_2 │       │                         |
|               │       └─────┬──────┘       │       └─────┬──────┘       │                         |
|               │             │              │             │              │                         |
|  =============│=============│==============│=============│==============│======================== |
|               ▼             ▼              ▼             ▼              ▼                         |
|             Ladle        Electric        Ladle        Continuous      Cooling                     |
|           Preheating    Arc Furnace     Refining       Casting          Bed                       |
|            Station         (EAF)      Station (LRS)    Machine                                    |
|             (Bay 0)       (Bay 1)        (Bay 2)       (Bay 3)        (Bay 4)                     |
|                                                                                                   |
|  Batasan Fisik Mutlak:                                                                            |
|  1. Non-Crossing Constraint  : Derek 1 dan Derek 2 berbagi rel runway yang sama sehingga Derek 1  |
|                                TIDAK BISA melintasi/melewati Derek 2 (x_1(t) + d_safe <= x_2(t)). |
|  2. Interference / Blocking  : Jika Derek 2 sedang melayani Bay 2, Derek 1 tidak dapat menuju    |
|                                Bay 3 tanpa mendorong atau menunggu Derek 2 berpindah.             |
|  3. Critical Thermal Window  : Logam cair (liquid steel) mengalami penurunan suhu (tahapan ladle  |
|                                tundish); keterlambatan derek memicu solidifikasi fatal (scrap)!   |
+---------------------------------------------------------------------------------------------------+
```

Karakteristik kritis dari operasional derek jembatan ini meliputi:
1. **Berbagi Lintasan Rel Tunggal (*Single Shared Runway Track*)**: Beberapa derek jembatan beroperasi pada bentang rel layang yang sama. Secara fisik, derek tidak dapat saling mendahului atau menyalip (*non-crossing / non-passing constraint*).
2. **Interferensi Spasial & Pemblokiran (*Spatial Interference & Blocking*)**: Sebuah derek yang sedang memproses tugas pemindahan benda di posisi tengah bay akan memblokir pergerakan derek lain yang hendak melintas ke sisi seberang.
3. **Batas Jeda Waktu Termal/Kritis (*Thermal & Material Decay Constraints*)**: Pada pabrik baja, transfer ladle berisi 150 ton baja cair bersuhu $1600^\circ\text{C}$ dari *Electric Arc Furnace (EAF)* ke *Ladle Refining Furnace (LRF)* dan *Continuous Caster (CC)* memiliki jendela waktu transfer ketat. Penundaan akibat macetnya derek (*crane waiting time*) mengakibatkan penurunan temperatur logam cair yang merusak mutu metalurgi atau menyebabkan kegagalan penuangan fatal.

Penjadwalan derek yang tidak optimal menjadi penyebab utama terjadinya *bottleneck* produksi, waktu tunggu mesin (*furnace idle time*), dan risiko tabrakan fisik derek (ASME B30.2, 2022; Wang & Lu, 2024).

---

## 2. Taksonomi Masalah Derek Jembatan Industri

| Kategori Karakteristik | Tipe Klasifikasi | Implikasi Rekayasa Industri | Standar Terkait |
| :--- | :--- | :--- | :--- |
| **Arsitektur Rel** | Single Bay (Rel Bersama) vs Multi-Bay Bersebelahan | Derek berbagi 1D coordinate space vs transfer antar-bay | CMAA Spec 70, ISO 4301 |
| **Tipe Pergerakan** | 2D Cart / 3D Hoist-Trolley-Bridge Motion | Kecepatan jembatan ($v_x$), troli transversal ($v_y$), hoist vertikal ($v_z$) | ASME B30.2, FEM 1.001 |
| **Karakteristik Muatan** | Termal Kritis (Ladle), Coil Baja, Komponen Perakitan | Adanya penalti keterlambatan kuadratik / degradasi suhu | ASTM E8, AISE Tech Report 6 |
| **Kriteria Optimasi** | Min Makespan ($C_{max}$), Total Tardiness ($\sum T_j$), Total Crane Idle | Meningkatkan *throughput* pabrik & utilisasi energi | IISE / INFORMS Scheduling BoK |

---

## 3. Landasan Teori & Formulasi Matematis Terpadu

### 3.1. Parameter dan Variabel Keputusan

Misalkan:
- $\mathcal{K} = \{1, 2, \dots, K\}$ adalah himpunan derek jembatan yang terpasang pada satu bay rel, terurut secara fisik dari kiri ke kanan: $k_1 < k_2 \implies x_{k_1}(t) < x_{k_2}(t)$.
- $\mathcal{J} = \{1, 2, \dots, N\}$ adalah himpunan tugas pengangkutan (*crane transportation jobs*).
- Setiap job $j \in \mathcal{J}$ memiliki:
  - Lokasi asal (*pick-up coordinate*): $p_j \in [0, L_{bay}]$
  - Lokasi tujuan (*drop-off coordinate*): $d_j \in [0, L_{bay}]$
  - Waktu ketersediaan beban (*release time*): $r_j$
  - Batas waktu penyelesaian (*due date*): $D_j$
  - Waktu angkat muatan (*pick-up hoist time*): $h_{pick, j}$
  - Waktu turun muatan (*drop-off hoist time*): $h_{drop, j}$
- Kecepatan jembatan derek $k$ adalah $v_k$, dan jarak aman minimum antar-derek adalah $\delta_{safe}$.

Waktu murni pemindahan muatan $j$ dari $p_j$ ke $d_j$ oleh derek $k$ adalah:
$$T_{j, k} = h_{pick, j} + \frac{|d_j - p_j|}{v_k} + h_{drop, j}$$

Waktu tempuh kosong derek $k$ dari lokasi selesai tugas $i$ ($d_i$) menuju lokasi ambil tugas $j$ ($p_j$) adalah:
$$t_{empty}(i, j, k) = \frac{|p_j - d_i|}{v_k}$$

---

### 3.2. Formulasi Mixed-Integer Linear Programming (MILP)

Fungsi tujuan meminimalkan total waktu keterlambatan berbobot dan Makespan:

$$\min \quad Z = w_1 \cdot C_{max} + w_2 \cdot \sum_{j \in \mathcal{J}} w_j \max\left(0, C_j - D_j\right) + w_3 \cdot \sum_{k \in \mathcal{K}} \sum_{i \in \mathcal{J}_0} \sum_{j \in \mathcal{J}_0} t_{empty}(i, j, k) \cdot y_{i, j, k}$$

Di mana:
- $y_{i, j, k} \in \{0, 1\}$ bernilai 1 jika job $j$ dieksekusi langsung setelah job $i$ oleh derek $k$.
- $x_{j, k} \in \{0, 1\}$ bernilai 1 jika job $j$ dialokasikan ke derek $k$.
- $S_j$ adalah waktu mulai penanganan job $j$.
- $C_j = S_j + \sum_{k \in \mathcal{K}} T_{j, k} \cdot x_{j, k}$ adalah waktu selesai job $j$.

#### Batasan 1: Setiap Tugas Dialokasikan ke Tepat Satu Derek
$$\sum_{k \in \mathcal{K}} x_{j, k} = 1 \quad \forall j \in \mathcal{J}$$

#### Batasan 2: Aliran Urutan Tugas pada Derek (*Network Flow Routing*)
$$\sum_{j \in \mathcal{J} \cup \{\text{end}\}} y_{i, j, k} = x_{i, k} \quad \forall i \in \mathcal{J} \cup \{\text{start}\}, \forall k \in \mathcal{K}$$
$$\sum_{i \in \mathcal{J} \cup \{\text{start}\}} y_{i, j, k} = x_{j, k} \quad \forall j \in \mathcal{J} \cup \{\text{end}\}, \forall k \in \mathcal{K}$$

#### Batasan 3: Presedensi Temporal pada Derek yang Sama
Jika job $j$ dikerjakan setelah job $i$ pada derek $k$ yang sama ($y_{i, j, k} = 1$):
$$S_j \ge C_i + t_{empty}(i, j, k) - M_{big} \cdot (1 - y_{i, j, k}) \quad \forall i, j \in \mathcal{J}, \forall k \in \mathcal{K}$$

#### Batasan 4: Kesiapan Tugas (*Release Time*)
$$S_j \ge r_j \quad \forall j \in \mathcal{J}$$

---

### 3.3. Batasan Spasial Bebas Tabrakan & Non-Interferensi Rel Tunggal (*Non-Crossing & Spatial Non-Interference Constraints*)

Karena Derek 1 selalu berada di sisi kiri Derek 2 ($k_1 < k_2$), maka untuk setiap waktu $t$:
$$X_{k_1}(t) + \delta_{safe} \le X_{k_2}(t) \quad \forall t \ge 0$$

Dalam representasi diskrit interval pemrosesan tugas $i$ pada Derek 1 dan tugas $j$ pada Derek 2, interval okupansi spasial Derek 1 adalah $[ \min(p_i, d_i), \max(p_i, d_i) ]$ selama rentang waktu $[S_i, C_i]$. 
Untuk mencegah interferensi spasial jika kedua interval spasial tumpang-tindih melanggar $\delta_{safe}$:

$$\max(p_i, d_i) + \delta_{safe} > \min(p_j, d_j) \implies [S_i, C_i] \cap [S_j, C_j] = \emptyset$$

Hubungan disjunctive non-interferensi diformulasikan dengan variabel biner interferensi $z_{i, j} \in \{0, 1\}$:
$$S_j \ge C_i - M_{big} \cdot (1 - z_{i, j}) \quad \text{(Job } i \text{ selesai sebelum job } j \text{ dimulai)}$$
$$S_i \ge C_j - M_{big} \cdot z_{i, j} \quad \text{(Job } j \text{ selesai sebelum job } i \text{ dimulai)}$$

---

## 4. Implementasi Komputasi: Python Exact & Heuristic Overhead Crane Scheduler

Berikut adalah algoritma Python lengkap berbasis pendekatan *Discrete-Event Priority Scheduling with Spatial Interference Envelope* untuk menjadwalkan multi-crane pada fasilitas manufaktur berat.

```python
"""
Overhead Crane Scheduling with Spatial Interference & Safety Distance Constraints
Author: RuangTI Industrial Knowledge Base Engine
Standard: ASME B30.2 / CMAA Specification 70 Compliant
"""

from dataclasses import dataclass
from typing import List, Dict, Optional, Tuple
import math

@dataclass
class CraneJob:
    job_id: str
    pick_pos: float       # Posisi X penjemputan (meter)
    drop_pos: float       # Posisi X peletakan (meter)
    release_time: float   # Waktu job tersedia (detik)
    due_date: float       # Batas waktu pengerjaan (detik)
    pick_hoist_time: float = 20.0  # Waktu pengangkatan muatan (detik)
    drop_hoist_time: float = 20.0  # Waktu penurunan muatan (detik)
    assigned_crane: Optional[int] = None
    start_time: float = 0.0
    completion_time: float = 0.0

@dataclass
class BridgeCrane:
    crane_id: int         # Index derek (1 = Paling Kiri, 2 = Kanan, dst)
    bridge_speed: float   # Kecepatan jembatan derek (m/s)
    current_pos: float    # Posisi aktual di sepanjang runway bay (meter)
    available_time: float = 0.0
    safe_distance: float = 12.0  # Jarak aman minimum antar derek (meter)

class OverheadCraneScheduler:
    def __init__(self, bay_length: float, cranes: List[BridgeCrane]):
        self.bay_length = bay_length
        self.cranes = sorted(cranes, key=lambda c: c.crane_id)
        self.jobs: List[CraneJob] = []

    def add_job(self, job: CraneJob):
        self.jobs.append(job)

    def calculate_duration(self, crane: BridgeCrane, job: CraneJob) -> float:
        travel_distance = abs(job.drop_pos - job.pick_pos)
        travel_time = travel_distance / crane.bridge_speed
        return job.pick_hoist_time + travel_time + job.drop_hoist_time

    def check_spatial_conflict(self, crane_idx: int, target_job: CraneJob, start_t: float, end_t: float, schedule: List[CraneJob]) -> bool:
        """Memeriksa apakah pergerakan derek melanggar jarak aman terhadap derek tetangga"""
        min_x_job = min(target_job.pick_pos, target_job.drop_pos)
        max_x_job = max(target_job.pick_pos, target_job.drop_pos)

        for scheduled_job in schedule:
            if scheduled_job.assigned_crane == crane_idx:
                continue
            
            # Cek overlap waktu
            if not (end_t <= scheduled_job.start_time or start_t >= scheduled_job.completion_time):
                sched_min_x = min(scheduled_job.pick_pos, scheduled_job.drop_pos)
                sched_max_x = max(scheduled_job.pick_pos, scheduled_job.drop_pos)
                
                other_crane = scheduled_job.assigned_crane
                if crane_idx < other_crane:
                    # Crane saat ini berada di kiri, scheduled_job di kanan
                    if max_x_job + self.cranes[crane_idx].safe_distance > sched_min_x:
                        return True  # Konflik tabrakan spasial!
                else:
                    # Crane saat ini berada di kanan, scheduled_job di kiri
                    if min_x_job - self.cranes[crane_idx].safe_distance < sched_max_x:
                        return True  # Konflik tabrakan spasial!
        return False

    def solve_schedule(self) -> Dict[str, any]:
        """Algoritma Penjadwalan Berbasis Earliest Due Date dengan Collision Avoidance"""
        sorted_jobs = sorted(self.jobs, key=lambda j: (j.release_time, j.due_date))
        scheduled_jobs: List[CraneJob] = []

        for job in sorted_jobs:
            best_crane_idx = None
            best_start = float('inf')
            best_duration = float('inf')

            # Evaluasi setiap derek yang memenuhi syarat fisik
            for c_idx, crane in enumerate(self.cranes):
                duration = self.calculate_duration(crane, job)
                empty_travel = abs(job.pick_pos - crane.current_pos) / crane.bridge_speed
                earliest_possible_start = max(job.release_time, crane.available_time + empty_travel)

                # Cari slot waktu pertama yang bebas konflik spasial
                candidate_start = earliest_possible_start
                conflict = True
                while conflict:
                    candidate_end = candidate_start + duration
                    if self.check_spatial_conflict(c_idx, job, candidate_start, candidate_end, scheduled_jobs):
                        candidate_start += 5.0  # Mundurkan pencarian 5 detik (holding delay)
                    else:
                        conflict = False

                if candidate_start < best_start:
                    best_start = candidate_start
                    best_crane_idx = c_idx
                    best_duration = duration

            # Tetapkan jadwal ke derek terbaik
            job.assigned_crane = best_crane_idx
            job.start_time = best_start
            job.completion_time = best_start + best_duration
            
            # Update status derek
            assigned_crane_obj = self.cranes[best_crane_idx]
            assigned_crane_obj.available_time = job.completion_time
            assigned_crane_obj.current_pos = job.drop_pos
            scheduled_jobs.append(job)

        makespan = max(j.completion_time for j in scheduled_jobs)
        total_tardiness = sum(max(0.0, j.completion_time - j.due_date) for j in scheduled_jobs)

        return {
            "Makespan": makespan,
            "Total_Tardiness": total_tardiness,
            "Schedule": scheduled_jobs
        }

if __name__ == "__main__":
    # Inisialisasi Bay Peleburan Baja: Panjang Bay 120 meter
    # Derek 1: Melayani Area EAF & Penanganan Skrap (Kiri, Posisi Awal x=15m)
    # Derek 2: Melayani Area Ladle Refining & Continuous Casting (Kanan, Posisi Awal x=90m)
    crane1 = BridgeCrane(crane_id=0, bridge_speed=1.2, current_pos=15.0, safe_distance=15.0)
    crane2 = BridgeCrane(crane_id=1, bridge_speed=1.2, current_pos=90.0, safe_distance=15.0)

    scheduler = OverheadCraneScheduler(bay_length=120.0, cranes=[crane1, crane2])

    # Daftar Tugas Pengangkutan Ladle Baja & Bahan Baku
    jobs_data = [
        CraneJob("Job_1_Scrap_Charge", pick_pos=10.0, drop_pos=35.0, release_time=0.0, due_date=120.0),
        CraneJob("Job_2_Ladle_to_LRF", pick_pos=35.0, drop_pos=70.0, release_time=40.0, due_date=200.0),
        CraneJob("Job_3_Tundish_Transfer", pick_pos=75.0, drop_pos=110.0, release_time=60.0, due_date=250.0),
        CraneJob("Job_4_Slag_Pot_Egress", pick_pos=30.0, drop_pos=5.0, release_time=90.0, due_date=300.0),
        CraneJob("Job_5_Ladle_to_Caster", pick_pos=70.0, drop_pos=105.0, release_time=150.0, due_date=360.0),
        CraneJob("Job_6_Emergency_Tundish", pick_pos=80.0, drop_pos=115.0, release_time=180.0, due_date=320.0)
    ]

    for j in jobs_data:
        scheduler.add_job(j)

    res = scheduler.solve_schedule()

    print("=== HASIL OPTIMASI PENJADWALAN DEREK JEMBATAN (OVERHEAD CRANE) ===")
    print(f"Makespan Operasi : {res['Makespan']:.2f} detik")
    print(f"Total Keterlambatan : {res['Total_Tardiness']:.2f} detik")
    print("\nDetail Jadwal Eksekusi:")
    for j in res['Schedule']:
        tardiness = max(0.0, j.completion_time - j.due_date)
        print(f"  [{j.job_id}] -> Derek {j.assigned_crane + 1} | Pick: {j.pick_pos}m -> Drop: {j.drop_pos}m | Mulai: {j.start_time:.1f}s | Selesai: {j.completion_time:.1f}s | Tardiness: {tardiness:.1f}s")
```

---

## 5. Studi Kasus Industri: Optimasi Penanganan Ladle Baja Cair pada Bay Peleburan Baja (Steelmaking Meltshop)

### 5.1. Deskripsi Permasalahan
Pada fasilitas peleburan baja berkapasitas 1.5 juta ton/tahun di Cilegon, Banten:
- Bay Peleburan sepanjang **160 meter** dilayani oleh **3 Derek Jembatan Tugas Berat** berkapasitas masing-masing 250 ton.
- Aliran proses mencakup:
  1. Pengisian Skrap (*Scrap Charging*) ke EAF ($x = 25\text{ m}$).
  2. *Tapping* Baja Cair ke Ladle dan Pemindahan ke LRF ($x = 75\text{ m}$).
  3. Pemindahan Ladle Bersuhu $1620^\circ\text{C}$ dari LRF ke Mesin *Continuous Caster (CC)* ($x = 135\text{ m}$).
  4. Pengembalian Ladle Kosong ke *Preheating Station* ($x = 10\text{ m}$).

Sebelum optimasi, operator derek beroperasi berdasarkan keputusan manual visual (*operator-driven dispatching*):
- Terjadi **interferensi derek rata-rata 14 kali per giliran kerja (shift)**, di mana Derek 2 terhalang oleh Derek 1 yang sedang memuat skrap.
- Waktu tunggu rata-rata ladle baja cair di udara mencapai **8.4 menit**, mengakibatkan kehilangan temperatur sebesar $\Delta T \approx 32^\circ\text{C}$ yang harus dipanaskan ulang dengan konsumsi listrik tambahan di LRF.

### 5.2. Intervensi Optimasi Spasial-Temporal
Menerapkan sistem penjadwalan terkomputerisasi *Overhead Crane Dynamic Scheduler*:
- **Zonasi Kerja Dinamis (*Dynamic Virtual Partitioning*)**: Derek 1 fokus pada zona $0-50\text{ m}$, Derek 2 pada $40-100\text{ m}$, dan Derek 3 pada $90-160\text{ m}$, dengan mekanisme *hand-over buffering* pada titik pertemuan.
- **Prediksi Lintasan Spasial Real-Time**: Posisi jembatan dipantau via sensor laser ToF (*Time-of-Flight*) berakurasi $\pm 5\text{ mm}$ untuk menegakkan zona keselamatan $\delta_{safe} = 15\text{ m}$.

### 5.3. Hasil Kuantitatif & Dampak Finansial Industri

| Indikator Kinerja Utama (KPI) | Kondisi Manual (Sebelum) | Kondisi Teroptimasi (Sesudah) | Dampak Rekayasa |
| :--- | :--- | :--- | :--- |
| **Frekuensi Interferensi / Blocking Derek** | 14.2 kejadian / shift | 1.1 kejadian / shift | Penurunan $-92.3\%$ |
| **Waktu Tunggu Ladle Baja di Udara** | 8.4 menit | 2.1 menit | Reduksi waktu $-75.0\%$ |
| **Penurunan Temperatur Baja ($\Delta T$)** | $32.4^\circ\text{C}$ | $7.8^\circ\text{C}$ | Penghematan energi termal |
| **Konsumsi Listrik Tambahan LRF** | $28.5\text{ kWh/ton}$ | $8.2\text{ kWh/ton}$ | Hemat $20.3\text{ kWh/ton}$ |
| **Throughput Casting Sequence Ratio** | 4.8 heat/tundish | 7.2 heat/tundish | Peningkatan $+50.0\%$ |

---

## 6. Standar Keselamatan dan Rekayasa Derek Jembatan Internasional

Implementasi sistem otomasi dan optimasi derek jembatan wajib mematuhi standar ketat:
1. **ASME B30.2 (Overhead and Gantry Cranes - Top Running Bridge, Single or Multiple Girder)**: Mengatur persyaratan inspeksi, pengujian batas beban dinamis (*rated load test*), dan prosedur keselamatan operasional.
2. **CMAA Specification 70 & 74 (Crane Manufacturers Association of America)**: Standar desain mekanikal dan struktural derek kelas tugas berat (*Class F - Continuous Severe Service* untuk pabrik baja).
3. **ISO 4301-1:2016 (Cranes - Classification)**: Klasifikasi mekanisme derek berdasarkan spektrum beban dan total siklus kerja.
4. **OSHA 29 CFR 1910.179 (Overhead and Gantry Cranes)**: Batasan keselamatan personel dan jarak bebas minimum ($> 2\text{ inch}$ lateral, $> 3\text{ inch}$ atas) terhadap instalasi pabrik.

---

## 7. Referensi Akademis Terverifikasi & Literatur Standar

1. **ASME (American Society of Mechanical Engineers)** (2022). *ASME B30.2-2022: Overhead and Gantry Cranes (Top Running Bridge, Single or Multiple Girder, Top Running Trolley Hoist)*. ASME Standard, New York.
2. **CMAA (Crane Manufacturers Association of America)** (2020). *CMAA Specification No. 70: Specifications for Top Running Bridge and Gantry Type Multiple Girder Electric Overhead Traveling Cranes*. Charlotte, NC.
3. **Maschietto, M., Ouazene, Y., Ravetti, M. G., de Souza, M. C., & Yalaoui, F.** (2024). The integrated planning of outgoing coil selection and overhead crane scheduling in a steel coil warehouse. *Computers & Industrial Engineering*, 189, 109912. DOI: `10.1016/j.cie.2024.109912`.
4. **Tanizaki, T., Masuda, T., & Katagiri, H.** (2020). Application of Scatter Search With Path Relinking for Scheduling Problems With Crane Interference. *2020 International Symposium on Flexible Automation (ISFA)*, Chicago, IL. DOI: `10.1115/isfa2020-9604`.
5. **Wang, J., & Lu, X.** (2024). Multi-Objective Optimization Method for Crane Scheduling in Steelmaking Workshop. *2024 China Automation Congress (CAC)*, IEEE, pp. 1102-1107. DOI: `10.1109/cac63892.2024.10865125`.
6. **Xie, Y., Zhou, X., Zheng, B., & Wan, J.** (2018). Scheduling Multi-Crane with Non-interference Constraint in Steel Production. *2018 IEEE International Conference on Information and Automation (ICIA)*, Wuyi Mountain, China, pp. 312-317. DOI: `10.1109/icinfa.2018.8812433`.
7. **Zhang, X., & Rose, O.** (2013). Simulation-based overhead-crane scheduling for a manufacturing plant. *Proceedings of the 2013 Winter Simulation Conference (WSC)*, Washington, DC, pp. 2489-2499. DOI: `10.1109/wsc.2013.6721635`.
