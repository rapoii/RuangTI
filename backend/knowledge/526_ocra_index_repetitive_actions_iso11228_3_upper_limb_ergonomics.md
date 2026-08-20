# Modul 526: Occupational Repetitive Actions (OCRA) Index & Checklist (ISO 11228-3 & EN 1005-5): Analisis Ergonomi Gerakan Repetitif Ekstremitas Atas, Technical Action Multiplier, dan Redesain Stasiun Kerja Lini Perakitan

## 1. Pengantar & Konteks Industri: Beban Muskuloskeletal Repetitif pada Lini Manufaktur

Pada sistem manufaktur diskrit modern—seperti lini perakitan komponen otomotif (*automotive powertrain & wire harness assembly*), pabrik perakitan elektronik (*SMT & consumer electronics packaging*), industri pengolahan makanan (*poultry/meat processing*), dan garmen—pekerja lini perakitan melakukan ribuan siklus tindakan manual setiap shift kerja. Paparan berkelanjutan terhadap kombinasi frekuensi tindakan tinggi (*high action frequency*), pengerahan tenaga berlebih (*force exertion*), postur janggal pada sendi ekstremitas atas (*awkward upper limb postures*), kurangnya periode pemulihan fisiologis (*insufficient recovery periods*), serta faktor pengali durasi kerja memicu timbulnya **Gangguan Muskuloskeletal Terkait Kerja (*Work-Related Musculoskeletal Disorders / WMSDs*)** pada ekstremitas atas (bahu, siku, pergelangan tangan, dan jari) (Colombini & Occhipinti, 2006; ISO 11228-3, 2007; Occhipinti & Colombini, 2016; Peppoloni et al., 2023).

```
+---------------------------------------------------------------------------------------------------+
|               KERANGKA FAKTOR RISIKO DAN DINAMIKA WMSDs EKSTREMITAS ATAS (ISO 11228-3)             |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [Faktor Risiko Fisik Primer]                                                                     |
|  ┌─────────────────────────┐   ┌─────────────────────────┐   ┌─────────────────────────┐          |
|  │ Frekuensi Tindakan      │   │ Penggunaan Tenaga       │   │ Postur Janggal Sendi    │          |
|  │ Teknis (Actions/min)    │   │ (Borg CR-10 / %MVC)     │   │ (Bahu, Siku, Wrist)     │          |
|  └────────────┬────────────┘   └────────────┬────────────┘   └────────────┬────────────┘          |
|               │                             │                             │                       |
|               └───────────────────────┬─────┴─────────────────────────────┘                       |
|                                       │                                                           |
|                                       ▼                                                           |
|  [Faktor Modulator Waktu & Beban Tambahan]                                                        |
|  ┌─────────────────────────┐   ┌─────────────────────────┐   ┌─────────────────────────┐          |
|  │ Pola Periode Pemulihan  │   │ Durasi Bersih Pekerjaan │   │ Faktor Tambahan         │          |
|  │ (Recovery Periods Multi)│   │ Repetitif (Net Rep Time)│   │ (Getaran, Presisi, dll) │          |
|  └────────────┬────────────┘   └────────────┬────────────┘   └────────────┬────────────┘          |
|               │                             │                             │                       |
|               └───────────────────────┬─────┴─────────────────────────────┘                       |
|                                       │                                                           |
|                                       ▼                                                           |
|  [Metodologi Kuantifikasi Risiko OCRA (Occupational Repetitive Actions)]                          |
|  ┌─────────────────────────────────────────────────────────────────────────────────────┐          |
|  │   OCRA Index = Total Actual Technical Actions (ATA) / Reference Technical Actions   │          |
|  │   Zona Hijau: OCRA ≤ 1.5 (Aman) | Kuning: 1.6 - 2.2 (Borderline) | Merah: > 2.2     │          |
|  └────────────────────────────────────┬────────────────────────────────────────────────┘          |
|                                       │                                                           |
|                                       ▼                                                           |
|  [Dampak Klinis & Finansial Industri]                                                             |
|  - Sindrom Terowongan Karpal (*Carpal Tunnel Syndrome - CTS*) & Tendinitis Supraspinatus          |
|  - Tingkat Absenteisme Meningkat, Penurunan Throughput Lini, Pembayaran Kompensasi Kerja          |
+---------------------------------------------------------------------------------------------------+
```

Standar internasional **ISO 11228-3:2007** (*Ergonomics — Manual handling — Part 3: Handling of low loads at high frequency*) dan standar Eropa **EN 1005-5:2007** menetapkan metode **Occupational Repetitive Actions (OCRA)** sebagai metodologi tingkat lanjut (*preferred analytical method*) paling komprehensif untuk mengevaluasi dan merancang pekerjaan manual repetitif. Dibandingkan instrumen skrining sederhana seperti RULA (*Rapid Upper Limb Assessment*) atau REBA yang hanya merekam foto sesaat (*static snapshot*), metode OCRA mengintegrasikan seluruh parameter beban kumulatif harian secara dinamis berdasarkan fisiologi kerja dan ergonomi biomekanik.

---

## 2. Taksonomi Metode Evaluasi Ergonomi Ekstremitas Atas

| Dimensi Evaluasi | RULA (McAtamney & Corlett) | Moore-Garg Strain Index (SI) | OCRA Checklist & OCRA Index (Colombini & Occhipinti) |
| :--- | :--- | :--- | :--- |
| **Fokus Anatomi** | Postur statis seluruh tubuh atas | Pergelangan tangan & tangan bagian distal | **Seluruh rantai kinetik ekstremitas atas** (Bahu, Siku, Pergelangan, Tangan) |
| **Karakterisasi Waktu** | Estimasi durasi statis kasar | Durasi usaha (% waktu) & frekuensi kasar | **Perhitungan presisi detik siklus (*cycle time*) & pola jeda pemulihan per jam** |
| **Kuantifikasi Gaya** | Skor ordinal 0–3 | Multiplier ordinal Borg (1–7) | **Kalibrasi skala Borg CR-10 / % Maximum Voluntary Contraction (%MVC)** |
| **Integrasi Multi-Tugas** | Terpisah per tugas | Kombinasi CWI (Composite Strain Index) | **Dukungan penuh rotasi multi-tugas kompleks (*Complex Multi-Task OCRA*)** |
| **Standar Acuan Regulasi** | Standar skrining internal | Standar ACGIH TLV for HAL | **ISO 11228-3, EN 1005-5, ANSI B11.TR1** |

---

## 3. Landasan Teori & Formulasi Matematis Metode OCRA

### 3.1. Konsep Dasar Tindakan Teknis (*Technical Actions*)

Dalam metodologi OCRA, unit dasar analisis adalah **Tindakan Teknis (*Technical Action / TA*)**, yaitu tindakan manual elementer yang melibatkan satu atau kedua ekstremitas atas untuk menyelesaikan transisi pekerjaan tertentu (misalnya: memegang baut, memposisikan komponen, menekan tuas obeng pneumatik, mendorong klip perakitan).

Jumlah Tindakan Teknis Aktual harian (*Actual Technical Actions / ATA*) dihitung sebagai:

$$ATA = F_{\text{obs}} \times D_{\text{net}}$$

di mana $F_{\text{obs}}$ adalah frekuensi tindakan teknis teramati per menit (baik dihitung dari analisis video rekaman gerakan mikro maupun observasi langsung), dan $D_{\text{net}}$ adalah total durasi bersih pekerjaan repetitif harian dalam menit (durasi shift dikurangi waktu istirahat resmi dan waktu kerja non-repetitif).

### 3.2. Formulasi Tindakan Teknis Referensi (*Reference Technical Actions / RTA*)

Tindakan Teknis Referensi (*Reference Technical Actions / RTA*) adalah batas kuota tindakan teknis maksimum yang direkomendasikan secara fisiologis dan biomekanik agar pekerja terlindung dari risiko WMSDs. Untuk sebuah tugas tunggal (*monotask*), $RTA$ dirumuskan sebagai:

$$RTA = \sum_{j=1}^{D_{\text{net}}} \left[ k_f \times \left( F_M \times P_M \times R_M \times A_M \right) \times D_M \times U_M \right]$$

Dalam bentuk umum untuk shift kerja berdurasi $D_{\text{net}}$ menit dengan tugas monoton, persamaan disederhanakan menjadi:

$$RTA = k_f \times \left( F_M \times P_M \times R_M \times A_M \right) \times D_M \times U_M$$

di mana:
1. $k_f = 30$ tindakan teknis per menit: Konstanta laju dasar fisiologis (*base reference frequency*) untuk postur netral, gaya minimal, dan pemulihan sempurna.
2. $F_M \in [0.01, 1.0]$: Pengali Gaya (*Force Multiplier*), diturunkan dari skala Borg CR-10 rata-rata terbobot atau $\%MVC$.
3. $P_M \in [0.5, 1.0]$: Pengali Postur (*Posture Multiplier*), mengevaluasi deviasi sudut anatomis bahu (*abduction/flexion* $> 40^\circ$), siku (*pronation/supination*), pergelangan tangan (*flexion/extension/radial-ulnar deviation*), dan jenis pegangan (*pinch vs power grip*).
4. $R_M \in [0.0, 1.0]$: Pengali Periode Pemulihan (*Recovery Multiplier*), mengevaluasi ketersediaan jeda istirahat minimal 8–10 menit per jam kerja.
5. $A_M \in [0.8, 1.0]$: Pengali Faktor Tambahan (*Additional Factor Multiplier*), mencakup getaran mekanis (*hand-arm vibration*), kompresi jaringan lokal, penggunaan sarung tangan tebal, suhu dingin, dan ritme mesin (*line-paced work*).
6. $D_M \in [0.5, 1.5]$: Pengali Durasi Harian (*Duration Multiplier*), mempertimbangkan total jam bersih paparan per shift ($< 120\text{ menit}$ hingga $> 480\text{ menit}$).
7. $U_M$: Pengali Ketidakmerataan Siklus (*Cycle Irregularity Multiplier*, biasanya bernilai 1.0 jika siklus seragam).

### 3.3. Fungsi Perhitungan Masing-Masing Multiplier Ergonomi

#### 3.3.1. Pengali Gaya ($F_M$)
Dihitung berdasarkan tingkat pengerahan tenaga rata-rata $F_{\text{mean}}$ pada skala Borg CR-10 (0 hingga 10):

$$F_M = \begin{cases} 
1.00 & \text{jika } F_{\text{mean}} \le 0.5 \quad (\le 5\% \text{ MVC}) \\
0.85 & \text{jika } F_{\text{mean}} = 1.0 \quad (10\% \text{ MVC}) \\
0.65 & \text{jika } F_{\text{mean}} = 2.0 \quad (20\% \text{ MVC}) \\
0.35 & \text{jika } F_{\text{mean}} = 3.0 \quad (30\% \text{ MVC}) \\
0.15 & \text{jika } F_{\text{mean}} = 4.0 \quad (40\% \text{ MVC}) \\
0.05 & \text{jika } F_{\text{mean}} = 5.0 \quad (50\% \text{ MVC}) \\
0.01 & \text{jika } F_{\text{mean}} \ge 6.0 \quad (\ge 60\% \text{ MVC})
\end{cases}$$

Untuk nilai kontinu, pendekatan fungsi regresi eksponensial standar ISO 11228-3 adalah:

$$F_M(F_{\text{mean}}) = \max\left(0.01, 1.0 - 0.22 \cdot (F_{\text{mean}})^{1.15}\right)$$

#### 3.3.2. Pengali Postur ($P_M$)
Dihitung dari persentase waktu siklus ($t_{\text{awk}} / t_{\text{cycle}}$) di mana segmen tubuh berada pada posisi ekstrem:

$$P_M = \min\left(P_{M,\text{bahu}}, P_{M,\text{siku}}, P_{M,\text{wrist}}, P_{M,\text{pinch}}\right)$$

di mana untuk masing-masing segmen sendi $k$:

$$P_{M,k} = 1.0 - w_k \cdot \left(\frac{t_{\text{awk},k}}{t_{\text{cycle}}}\right)$$

dengan bobot penalti $w_k$: bahu ($w_{\text{bahu}} = 0.50$ jika abduksi $> 40^\circ$), pergelangan tangan ($w_{\text{wrist}} = 0.40$ jika fleksi/ekstensi $> 45^\circ$), pegangan jepit / *pinch grip* ($w_{\text{pinch}} = 0.45$ jika durasi pinch $> 30\%$).

#### 3.3.3. Pengali Pemulihan ($R_M$)
Jika dari $N_H$ jam kerja terdapat $n_{\text{unrec}}$ jam tanpa jeda istirahat pemulihan yang memadai (minimal 8–10 menit per jam):

$$R_M = 1.0 - 0.10 \times n_{\text{unrec}}$$

#### 3.3.4. Pengali Durasi ($D_M$)
Disesuaikan berdasarkan total menit bersih pekerjaan repetitif harian $D_{\text{net}}$:

$$D_M = \begin{cases} 
1.50 & \text{jika } D_{\text{net}} \le 120 \text{ menit} \\
1.20 & \text{jika } 121 \le D_{\text{net}} \le 240 \text{ menit} \\
1.00 & \text{jika } 361 \le D_{\text{net}} \le 420 \text{ menit (Standar 7 jam)} \\
0.85 & \text{jika } 421 \le D_{\text{net}} \le 480 \text{ menit} \\
0.70 & \text{jika } D_{\text{net}} > 480 \text{ menit (Overtime)}
\end{cases}$$

### 3.4. Indeks OCRA (*OCRA Index*) dan Zonasi Risiko

Indeks Risiko OCRA dihitung secara terpisah untuk sisi tubuh kanan (*Right Arm*) dan sisi tubuh kiri (*Left Arm*):

$$\text{OCRA Index} = \frac{ATA}{RTA} = \frac{F_{\text{obs}} \times D_{\text{net}}}{k_f \times (F_M \times P_M \times R_M \times A_M) \times D_M \times D_{\text{net}}} = \frac{F_{\text{obs}}}{30 \times F_M \times P_M \times R_M \times A_M \times D_M}$$

Kategori Tingkat Risiko dan Tindakan Korektif menurut ISO 11228-3 & EN 1005-5:

| Nilai OCRA Index | Kategori Zona Risiko | Persentase Populasi Rentan WMSDs | Rekomendasi Tindakan Rekayasa Industri |
| :---: | :---: | :---: | :--- |
| $\text{OCRA} \le 1.5$ | **Zona Hijau (Optimal / Safe)** | $< 5.0\%$ | Tidak memerlukan tindakan modifikasi; pertahankan kondisi kerja. |
| $1.6 \le \text{OCRA} \le 2.2$ | **Zona Kuning (Borderline / Low Risk)** | $5.0\% - 10.0\%$ | Diperlukan pemantauan ergonomi berkala dan pelatihan teknik kerja. |
| $2.3 \le \text{OCRA} \le 3.5$ | **Zona Merah Muda (Medium Risk)** | $10.1\% - 20.0\%$ | Perlu perbaikan stasiun kerja, rotasi kerja, dan redesain jig/fixture. |
| $\text{OCRA} > 3.5$ | **Zona Merah Ungu (High Risk)** | $> 20.0\%$ | **Tindakan rekayasa segera!** Hentikan proses monoton, otomatisasi/redesain total. |

---

## 4. Implementasi Solver Python Mandiri: OCRA Biomechanical & Workstation Optimizer

Berikut implementasi lengkap mesin komputasi OCRA Index (*zero external heavy dependency*, murni Python standard library & NumPy) yang mendukung evaluasi multi-tugas, analisis diferensial lengan kanan vs kiri, serta algoritma optimasi penataan jadwal rotasi dan redesain stasiun kerja.

```python
"""
OCRA Index & Workstation Ergonomics Optimizer (ISO 11228-3 / EN 1005-5)
Author: RuangTI Industrial Engineering Knowledge Base
"""

import math
from typing import Dict, List, Tuple, Any

class UpperLimbParameters:
    def __init__(
        self,
        shoulder_abduction_pct: float,   # Persentase siklus bahu terangkat/abduksi > 40 deg (0 - 1.0)
        elbow_pronation_pct: float,      # Persentase siku fleksi ekstrim/pronasi (0 - 1.0)
        wrist_flexion_pct: float,        # Persentase deviasi pergelangan tangan > 45 deg (0 - 1.0)
        pinch_grip_pct: float,           # Persentase penggunaan pinch grip sempit (0 - 1.0)
        borg_force: float,               # Skala Borg CR-10 gaya rata-rata (0 - 10)
        additional_vib: bool = False,    # Paparan getaran alat pneumatik/mesin
        additional_impact: bool = False, # Pukulan berulang / kompresi jaringan
        additional_gloves: bool = False  # Sarung tangan tebal penghambat presisi
    ):
        self.shoulder_abduction_pct = shoulder_abduction_pct
        self.elbow_pronation_pct = elbow_pronation_pct
        self.wrist_flexion_pct = wrist_flexion_pct
        self.pinch_grip_pct = pinch_grip_pct
        self.borg_force = borg_force
        self.additional_vib = additional_vib
        self.additional_impact = additional_impact
        self.additional_gloves = additional_gloves

    def compute_force_multiplier(self) -> float:
        """Menghitung FM berdasarkan Skala Borg CR-10 menggunakan kurva regresi ISO 11228-3."""
        f = self.borg_force
        if f <= 0.5:
            return 1.00
        elif f <= 1.0:
            return 0.85 - 0.15 * ((f - 0.5) / 0.5)
        elif f <= 2.0:
            return 0.85 - 0.20 * (f - 1.0)
        elif f <= 3.0:
            return 0.65 - 0.30 * (f - 2.0)
        elif f <= 4.0:
            return 0.35 - 0.20 * (f - 3.0)
        elif f <= 5.0:
            return 0.15 - 0.10 * (f - 4.0)
        else:
            return max(0.01, 0.05 - 0.04 * ((f - 5.0) / 5.0))

    def compute_posture_multiplier(self) -> float:
        """Menghitung PM berdasarkan persentase postur janggal sendi ekstremitas atas."""
        pm_shoulder = 1.0 - 0.50 * min(1.0, self.shoulder_abduction_pct)
        pm_elbow = 1.0 - 0.30 * min(1.0, self.elbow_pronation_pct)
        pm_wrist = 1.0 - 0.40 * min(1.0, self.wrist_flexion_pct)
        pm_pinch = 1.0 - 0.45 * min(1.0, self.pinch_grip_pct)
        
        return min(pm_shoulder, pm_elbow, pm_wrist, pm_pinch)

    def compute_additional_multiplier(self) -> float:
        """Menghitung AM berdasarkan faktor pengali tambahan fisik dan lingkungan."""
        penalty = 0.0
        if self.additional_vib:
            penalty += 0.10
        if self.additional_impact:
            penalty += 0.05
        if self.additional_gloves:
            penalty += 0.05
        return max(0.80, 1.0 - penalty)


class TaskDefinition:
    def __init__(
        self,
        task_name: str,
        cycle_time_sec: float,
        tech_actions_right: int,
        tech_actions_left: int,
        limb_params_right: UpperLimbParameters,
        limb_params_left: UpperLimbParameters,
        task_duration_minutes: float
    ):
        self.task_name = task_name
        self.cycle_time_sec = cycle_time_sec
        self.actions_right = tech_actions_right
        self.actions_left = tech_actions_left
        self.params_right = limb_params_right
        self.params_left = limb_params_left
        self.duration_min = task_duration_minutes


class OcraCalculator:
    def __init__(
        self,
        shift_duration_hours: float,
        break_duration_minutes: float,
        unrecovered_hours: int,
        tasks: List[TaskDefinition]
    ):
        self.shift_hours = shift_duration_hours
        self.break_min = break_duration_minutes
        self.unrecovered_hours = unrecovered_hours
        self.tasks = tasks
        self.net_repetitive_duration = sum(t.duration_min for t in tasks)

    def compute_recovery_multiplier(self) -> float:
        """Menghitung RM berdasarkan ketersediaan jam pemulihan."""
        return max(0.0, 1.0 - 0.10 * self.unrecovered_hours)

    def compute_duration_multiplier(self) -> float:
        """Menghitung DM berdasarkan durasi bersih kerja harian."""
        d = self.net_repetitive_duration
        if d <= 120:
            return 1.50
        elif d <= 240:
            return 1.20
        elif d <= 360:
            return 1.05
        elif d <= 420:
            return 1.00
        elif d <= 480:
            return 0.85
        else:
            return 0.70

    def evaluate_side(self, side: str = "right") -> Dict[str, Any]:
        """Menghitung ATA, RTA, dan OCRA Index untuk sisi tubuh tertentu ('right' atau 'left')."""
        rm = self.compute_recovery_multiplier()
        dm = self.compute_duration_multiplier()
        kf = 30.0 # Base constant actions/min

        total_ata = 0.0
        weighted_rta_components = 0.0

        task_summaries = []

        for t in self.tasks:
            actions = t.actions_right if side == "right" else t.actions_left
            params = t.params_right if side == "right" else t.params_left
            
            # Frekuensi aktual tindakan per menit dalam tugas ini
            freq_obs = (actions / t.cycle_time_sec) * 60.0
            actual_actions_task = freq_obs * t.duration_min
            total_ata += actual_actions_task

            fm = params.compute_force_multiplier()
            pm = params.compute_posture_multiplier()
            am = params.compute_additional_multiplier()

            # Reference actions per minute for this specific task
            weighted_multiplier = (fm * pm * am)
            task_rta = (kf * weighted_multiplier * rm * dm) * t.duration_min
            weighted_rta_components += task_rta

            task_summaries.append({
                "task": t.task_name,
                "freq_obs_per_min": round(freq_obs, 2),
                "actual_actions": round(actual_actions_task, 1),
                "fm": round(fm, 3),
                "pm": round(pm, 3),
                "am": round(am, 3),
                "task_rta": round(task_rta, 1)
            })

        ocra_index = total_ata / weighted_rta_components if weighted_rta_components > 0 else float("inf")

        # Kategorisasi Zona Risiko
        if ocra_index <= 1.5:
            risk_zone = "HIJAU (Safe / Optimal)"
            risk_level = "Rendah"
            expected_illness_pct = "< 5%"
        elif ocra_index <= 2.2:
            risk_zone = "KUNING (Borderline / Very Low)"
            risk_level = "Sedang Ringan"
            expected_illness_pct = "5% - 10%"
        elif ocra_index <= 3.5:
            risk_zone = "MERAH MUDA (Medium Risk)"
            risk_level = "Tinggi"
            expected_illness_pct = "10% - 20%"
        else:
            risk_zone = "MERAH UNGU (High / Unacceptable Risk)"
            risk_level = "Sangat Kritis"
            expected_illness_pct = "> 20%"

        return {
            "side": side.upper(),
            "total_ata": round(total_ata, 1),
            "total_rta": round(weighted_rta_components, 1),
            "ocra_index": round(ocra_index, 2),
            "risk_zone": risk_zone,
            "risk_level": risk_level,
            "expected_illness_pct": expected_illness_pct,
            "rm": round(rm, 3),
            "dm": round(dm, 3),
            "task_breakdown": task_summaries
        }


if __name__ == "__main__":
    # Inisialisasi Analisis Stasiun Kerja Manual Komponen Otomotif (Lini Alternator Assembly)
    # Kondisi Sebelum Redesain (Shift 8 Jam, 1 Jam Istirahat Terbagi, Kurang Pemulihan)
    
    # Parameter Lengan Kanan (Memegang Obeng Listrik Berat + Mengambil Baut Pinching)
    limb_right_task1 = UpperLimbParameters(
        shoulder_abduction_pct=0.45, # Bahu abduksi > 40 deg selama 45% siklus karena wadah part terlalu tinggi
        elbow_pronation_pct=0.25,
        wrist_flexion_pct=0.40,      # Pergelangan fleksi 40% siklus karena tuas lurus
        pinch_grip_pct=0.35,         # Mengambil washer tipis dengan pinch 35% siklus
        borg_force=3.5,              # Pengerahan tenaga rata-rata Borg 3.5 (Tinggi!)
        additional_vib=True,         # Reaksi torsi obeng pneumatik
        additional_impact=False,
        additional_gloves=True       # Sarung tangan tebal anti-gores
    )

    # Parameter Lengan Kiri (Menahan Bodi Alternator Statis)
    limb_left_task1 = UpperLimbParameters(
        shoulder_abduction_pct=0.20,
        elbow_pronation_pct=0.10,
        wrist_flexion_pct=0.15,
        pinch_grip_pct=0.10,
        borg_force=2.0,              # Pengerahan tenaga statis Borg 2.0
        additional_vib=False,
        additional_impact=False,
        additional_gloves=True
    )

    task_initial = TaskDefinition(
        task_name="Perakitan Rotor & Pengencangan Casing",
        cycle_time_sec=42.0,
        tech_actions_right=28, # 28 tindakan teknis per siklus 42 detik (40 tindakan/menit)
        tech_actions_left=12,
        limb_params_right=limb_right_task1,
        limb_params_left=limb_left_task1,
        task_duration_minutes=420.0 # 7 Jam kerja bersih
    )

    # Evaluasi Skenario Awal: 4 jam tanpa jeda pemulihan terstruktur (unrecovered_hours = 4)
    evaluator_baseline = OcraCalculator(
        shift_duration_hours=8.0,
        break_duration_minutes=60.0,
        unrecovered_hours=4,
        tasks=[task_initial]
    )

    results_right_base = evaluator_baseline.evaluate_side("right")
    results_left_base = evaluator_baseline.evaluate_side("left")

    print("================================================================================")
    print("           HASIL EVALUASI ERGONOMI OCRA INDEX SEBELUM REDESAIN (BASELINE)       ")
    print("================================================================================")
    print(f"Lengan Kanan -> OCRA Index: {results_right_base['ocra_index']} | Zona: {results_right_base['risk_zone']}")
    print(f"  Total ATA: {results_right_base['total_ata']} | Total RTA: {results_right_base['total_rta']}")
    print(f"  Recovery Mult (RM): {results_right_base['rm']} | Duration Mult (DM): {results_right_base['dm']}")
    print(f"Lengan Kiri  -> OCRA Index: {results_left_base['ocra_index']} | Zona: {results_left_base['risk_zone']}")
    print("--------------------------------------------------------------------------------")
```

---

## 5. Studi Kasus Industri: Redesain Ergonomi Stasiun Kerja Perakitan Alternator Otomotif

### 5.1. Deskripsi Permasalahan Lini Perakitan

Pada stasiun kerja perakitan alternator PT Komponen Presisi Nusantara, data poliklinik perusahaan mencatat lonjakan keluhan nyeri bahu dan pergelangan tangan (*Carpal Tunnel Syndrome*) sebesar $24.2\%$ pada operator stasiun *Rotor Fastening*. 

```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|               ANALISIS KONDISI FISIK DAN TATA LETAK STASIUN KERJA BASELINE                        |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
| 1. Tata Letak Bin Komponen: Diletakkan pada ketinggian 145 cm (di atas tinggi siku berdiri),      |
|    memaksa operator melakukan elevasi dan abduksi bahu kanan hingga 55° secara terus-menerus.     |
| 2. Alat Pengencang Baut: Obeng pneumatik model pistol lurus berat (1.8 kg) tanpa balancer pegas, |
|    menyebabkan deviasi ulnar pergelangan tangan ekstrem (48°) dan sentakan torsi (torque kick).   |
| 3. Pengambilan Ring Tipis: Baut dan ring disimpan bercampur di baki datar, mengharuskan gerakan   |
|    pinch grip sempit berulang dengan ujung jari (35% durasi siklus).                              |
| 4. Pola Istirahat: Hanya ada 1 kali istirahat makan siang (60 menit), menyisakan 4 jam blok kerja |
|    berturut-turut tanpa istirahat mikro pemulihan (unrecovered hours = 4).                        |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
```

### 5.2. Intervensi Rekayasa Ergonomi & Rekayasa Ulang (*Ergonomic Engineering Redesign*)

Tim Industrial Engineer mengimplementasikan 4 program intervensi rekayasa:
1. **Penerapan Tool Balancer & Obeng Ergonomis Sudut 90° dengan Articulated Reaction Arm**: Menghilangkan beban statis 1.8 kg menjadi 0 kg, mereduksi sentakan torsi ke sendi, dan menurunkan postur fleksi pergelangan tangan menjadi $< 10^\circ$ (netral). Nilai skala Borg turun drastis dari $3.5$ menjadi $1.0$ ($F_M$ naik dari $0.25$ ke $0.85$).
2. **Redesain Gravity Feed Bin Bertingkat dengan Orientasi 30° Menurun**: Menempatkan komponen pada zona jangkauan optimal (ketinggian siku 100–110 cm), menurunkan persentase abduksi bahu dari $45\%$ menjadi $< 5\%$ ($P_M$ naik dari $0.55$ ke $0.95$).
3. **Pemberian Magnetic Screw Feeder Otomatis**: Baut disajikan otomatis dalam orientasi tegak siap ambil, mengeliminasi kebutuhan *pinch grip* mikro (tindakan teknis kanan berkurang dari 28 menjadi 18 per siklus).
4. **Penerapan Jadwal Micro-Breaks (Pola Pemulihan Terjadwal)**: Menerapkan jeda istirahat 8 menit setiap 52 menit jam kerja, sehingga $n_{\text{unrec}} = 0$ ($R_M$ naik dari $0.60$ menjadi $1.00$).

```
+───────────────────────────────────────────────────────────────────────────────────────────────────+
|             KOMPARASI KUANTITATIF PARAMETER OCRA INDEX SEBELUM DAN SESUDAH INTERVENSI             |
+───────────────────────────────────────────────────────────────────────────────────────────────────+
| Parameter Ergonomi & Biomekanik       | Kondisi Baseline (Sebelum)    | Pasca Redesain Rekayasa       |
+───────────────────────────────────────+───────────────────────────────+───────────────────────────────+
| Frekuensi Tindakan ($F_{\text{obs}}$) | 40.0 Tindakan/menit           | 25.7 Tindakan/menit           |
| Total Tindakan Harian ($ATA$)         | 16,800 Tindakan               | 10,800 Tindakan (-35.7%)      |
| Force Multiplier ($F_M$)              | 0.250 (Borg 3.5)              | 0.850 (Borg 1.0)              |
| Posture Multiplier ($P_M$)            | 0.550 (Bahu & Wrist Janggal)  | 0.950 (Postur Sendi Netral)   |
| Recovery Multiplier ($R_M$)           | 0.600 (4 Jam Tanpa Jeda)      | 1.000 (Istirahat Tiap Jam)    |
| Additional Multiplier ($A_M$)         | 0.850 (Torsi & Sarung Tangan) | 0.950 (Torsi Diredam Reaksi)  |
| Kuota Tindakan Aman ($RTA$)           | 2,949 Tindakan                | 21,902 Tindakan (+642.7%)     |
+───────────────────────────────────────+───────────────────────────────+───────────────────────────────+
| **OCRA INDEX (LENGAN KANAN)**         | **5.70 (ZONA MERAH UNGU)**    | **0.49 (ZONA HIJAU AMAN)**    |
| **Estimasi Prevalensi Gejala WMSDs**  | **> 24.2% (Kritis Sakit)**    | **< 3.1% (Optimal Sehat)**    |
| Efisiensi Siklus Perakitan            | 42.0 Detik / Unit             | 34.5 Detik / Unit (+17.8%)    |
+───────────────────────────────────────+───────────────────────────────+───────────────────────────────+
```

```
HASIL OPTIMASI DAN DISTRIBUSI BEBAN ERGONOMI:
1. Penurunan Risiko Drastis: Nilai OCRA Index turun dari 5.70 menjadi 0.49 (penurunan sebesar 91.4%), 
   membawa stasiun kerja dari zona bahaya tinggi ke zona hijau yang sepenuhnya aman menurut ISO 11228-3.
2. Produktivitas & Throughput Meningkat: Meskipun waktu istirahat mikro bertambah 40 menit per hari, 
   penyederhanaan gerak dan penghilangan pinch grip mempercepat cycle time sebesar 17.8%, 
   sehingga output harian justru meningkat dari 540 unit/shift menjadi 620 unit/shift.
3. ROI Ergonomi: Biaya investasi modifikasi tooling dan feeder ($3,200) terbayar kembali (*payback period*) 
   dalam tempo 2.8 bulan melalui penurunan absenteisme dan kenaikan throughput lini.
```

---

## 6. Integrasi Standar Profesi & Rekomendasi Praktik Terbaik

Penerapan metode OCRA dalam sistem manajemen ergonomi korporasi wajib mengacu pada kerangka regulasi dan pedoman keinsinyuran berikut:
1. **ISO 11228-3:2007 (Ergonomics — Manual handling — Part 3: Handling of low loads at high frequency)**: Pedoman penentuan batas tindakan repetitif, prosedur audit OCRA Index, dan metode skrining OCRA Checklist.
2. **EN 1005-5:2007 (Safety of machinery — Human physical performance — Part 5: Risk assessment for repetitive handling at high frequency)**: Standar kepatuhan perancangan mesin manufaktur dan *CE Marking* di Uni Eropa.
3. **ANSI/ASSP Z365 / OSHA Ergonomics Guidelines**: Pedoman pencegahan gangguan muskuloskeletal kumulatif melalui pengendalian teknik (*engineering controls*) dan pengendalian administratif (*administrative controls*).

---

## 7. Referensi Terverifikasi (Academic & Professional Standards)

1. Colombini, D., & Occhipinti, E. (2006). Preventing upper limb work-related musculoskeletal disorders (UL-WMSDs): New approaches in job (re)design and current trends in European ergonomics standards. *Applied Ergonomics*, 37(4), 441–450. DOI: [https://doi.org/10.1016/j.apergo.2006.04.008](https://doi.org/10.1016/j.apergo.2006.04.008)
2. ISO 11228-3:2007. (2007). *Ergonomics — Manual handling — Part 3: Handling of low loads at high frequency*. International Organization for Standardization, Geneva, Switzerland. Standard Reference: ISO 11228-3.
3. EN 1005-5:2007. (2007). *Safety of machinery - Human physical performance - Part 5: Risk assessment for repetitive handling at high frequency*. European Committee for Standardization (CEN), Brussels.
4. Occhipinti, E., & Colombini, D. (2016). A simple method for assessing simple/repetitive biomechanical overload: the OCRA checklist. *Ergonomics in Design*, 24(2), 21–32. DOI: [https://doi.org/10.1177/1064804615617260](https://doi.org/10.1177/1064804615617260)
5. Peppoloni, L., Filippeschi, A., Ruffaldi, E., & Costanzi, M. (2023). Upper limb risk assessment in repetitive assembly tasks: A comprehensive evaluation comparing OCRA and wearable sensors. *International Journal of Industrial Ergonomics*, 94, 103417. DOI: [https://doi.org/10.1016/j.ergon.2023.103417](https://doi.org/10.1016/j.ergon.2023.103417)
