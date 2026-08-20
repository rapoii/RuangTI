# Modul 480: Exoskeleton Biomechanical Assessment in Industrial Material Handling

## 1. Pengantar & Konteks Industri: Beban Muskuloskeletal & Ergonomi Industri Modern

Penyakit Akibat Kerja pada sistem otot dan rangka (*Work-related Musculoskeletal Disorders* / WMSDs), khususnya nyeri punggung bawah (*Low Back Pain* / LBP), merupakan penyebab utama kehilangan jam kerja, kompensasi medis, dan penurunan produktivitas tenaga kerja pada sektor manufaktur, logistik pergudangan (*warehouse distribution*), dan perakitan otomotif.

Aktivitas Penanganan Material Secara Manual (*Manual Material Handling* / MMH)—termasuk pengangkatan berulang (*repetitive lifting*), pemindahan beban statis (*sustained holding*), serta rotasi torso asimetris (*asymmetric trunk twisting*)—menghasilkan gaya tekan kompresi lumbar (*lumbar compressive load*) yang signifikan pada diskus intervertebralis lumbosakral L5/S1.

```
+---------------------------------------------------------------------------------------------------+
|               PERBANDINGAN PENANGANAN MANUAL KONVENSIONAL VS DENGAN EKSOSKELETON                  |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ 1. PENANGANAN MATERIAL MANUAL TRADISIONAL ]  [ 2. DENGAN BANTUAN EKSOSKELETON LUMBAR ]         |
|  - Momen eksternal ditahan murni oleh otot      - Momen eksternal dibagi antara otot erector      |
|    erector spinae posterior & ligamen spinalis     spinae dan struktur elastis/aktuator eksoskeleton|
|  - Gaya kompresi diskus L5/S1 tinggi            - Reduksi beban kompresi L5/S1 sebesar 15% - 40%  |
|    (sering melampaui batas NIOSH 3.4 kN)        - Menjaga gaya kompresi di bawah limit aman       |
|  - Tingkat kelelahan otot cepat (%MVIC tinggi)  - Penurunan aktivitas EMG erector spinae (RMS)    |
|  - Risiko herniasi diskus & cedera kumulatif    - Mitigasi kelelahan & perpanjangan daya tahan    |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 1.1 Klasifikasi Eksoskeleton Industri

Eksoskeleton penopang tubuh bagian bawah dan punggung (*back-support exoskeletons* / BSE) diklasifikasikan menjadi dua arsitektur utama:
1. **Passive Exoskeletons**: Menggunakan elemen penyimpan energi mekanis (pegas elastis, pegas torsi serat karbon, gas springs) yang menyerap energi mekanis saat tubuh membungkuk (*trunk flexion*) dan melepaskannya kembali sebagai torsi bantu (*assistance torque*) saat torso kembali tegak (*extension*).
2. **Active Exoskeletons**: Memanfaatkan motor elektrik / aktuator servo berbasis sensor IMU (*Inertial Measurement Unit*) dan EMG untuk memberikan torsi dorong aktif adaptif secara dinamis.

---

## 2. Landasan Teori & Formulasi Biomekanika Statis dan Dinamis

### 2.1 Model Keseimbangan Momen Sendi Lumbosakral L5/S1

Analisis biomekanika torso mengasumsikan engsel sendi diskus L5/S1 sebagai titik pusat rotasi (*pivot center*). Keseimbangan momen statis pada bidang sagital dirumuskan sebagai:

$$\sum M_{\text{L5/S1}} = 0$$

$$M_{\text{ext}} + M_{\text{body}} - M_{\text{muscle}} - M_{\text{exo}} = 0$$

di mana:
- $M_{\text{ext}} = F_{\text{load}} \cdot d_{\text{load}}$ adalah momen rotasi akibat beban luar yang diangkat (massa beban $m_L \times g$ dengan lengan momen horizontal $d_{\text{load}}$ dari L5/S1).
- $M_{\text{body}} = W_{\text{trunk}} \cdot d_{\text{trunk}} + W_{\text{head}} \cdot d_{\text{head}} + W_{\text{arms}} \cdot d_{\text{arms}}$ adalah momen akibat berat segmen tubuh bagian atas.
- $M_{\text{muscle}} = F_{\text{erector}} \cdot d_{\text{erector}}$ adalah momen internal yang dihasilkan oleh kontraksi otot *Erector Spinae*. Lengan momen internal otot erector spinae ($d_{\text{erector}}$) berkisar antara $0,050\text{ m}$ ($5\text{ cm}$) hingga $0,060\text{ m}$.
- $M_{\text{exo}} = \tau_{\text{exo}}(\theta_{\text{trunk}})$ adalah torsi bantuan eksternal yang disalurkan oleh antarmuka mekanis eksoskeleton pada sudut fleksi $\theta_{\text{trunk}}$.

```
                          Trunk Center of Mass
                               (W_trunk)
                                  |
                                  v
                                 / \
                                /   \      Load (F_load = m*g)
                               /     \         |
                              /       \        v
                             /         \     [===]
                            /           \______|
                           /                   |
                          / d_trunk            | d_load
                         /                     |
     [Erector Spinae]   /                      |
      F_erector (^)    /                       |
         \            /                        |
    d_m   \          /                         |
   |<--->| v        v                          v
   +-------( L5/S1 Pivot )---------------------+
   |
   |===> Torsi Dukungan Eksoskeleton: M_exo (Berlawanan arah jarum jam)
```

Besarnya gaya kontraksi otot *erector spinae* yang dibutuhkan untuk menjaga postur stabil:

$$F_{\text{erector}} = \frac{M_{\text{ext}} + M_{\text{body}} - M_{\text{exo}}}{d_{\text{erector}}}$$

### 2.2 Gaya Reaksi Diskus L5/S1: Kompresi dan Geser (Compression & Shear)

Gaya reaksi internal total pada diskus L5/S1 dipecah menjadi dua komponen ortogonal:
1. **Gaya Kompresi Aksial ($F_{\text{comp}}$)**:
   $$F_{\text{comp}} = F_{\text{erector}} + W_{\text{upper\_body}} \cos(\theta_{\text{sacrum}}) + F_{\text{load}} \cos(\theta_{\text{sacrum}}) - F_{\text{exo, axial}}$$

2. **Gaya Geser Anterior-Posterior ($F_{\text{shear}}$)**:
   $$F_{\text{shear}} = W_{\text{upper\_body}} \sin(\theta_{\text{sacrum}}) + F_{\text{load}} \sin(\theta_{\text{sacrum}}) - F_{\text{erector, shear}}$$

Batas ambang keselamatan biomekanika kerja merujuk pada standar **NIOSH Lifting Limit** ($3400\text{ N} \approx 3,4\text{ kN}$ untuk *Action Limit*, dan $6400\text{ N}$ untuk *Max Permissible Limit* di mana kerusakan mikro-fraktur pelat ujung vertebra / *vertebral endplate microfractures* mulai terjadi).

### 2.3 Normalisasi Elektromiografi (EMG) & Estimasi Reduksi Kelelahan

Aktivitas listrik otot erector spinae (*longissimus dorsi* dan *iliocostalis*) diukur melalui surface electromyography (sEMG) dan dinormalisasi terhadap kontraksi volunter maksimum (*Maximum Voluntary Isometric Contraction* / %MVIC):

$$\% \text{MVIC}(t) = \frac{\text{RMS}_{\text{raw}}(t) - \text{RMS}_{\text{rest}}}{\text{RMS}_{\text{MVIC}} - \text{RMS}_{\text{rest}}} \times 100\%$$

Rasio Reduksi Beban Otot (*Muscular Load Relief Ratio* / $\eta_{\text{relief}}$):

$$\eta_{\text{relief}} = \left( 1 - \frac{\text{RMS}_{\text{with\_exo}}}{\text{RMS}_{\text{without\_exo}}} \right) \times 100\%$$

---

## 3. Integrasi Eksoskeleton ke Dalam Persamaan Pengangkatan NIOSH Revisi (RNLE)

Persamaan NIOSH standar menentukan Batas Pengangkatan yang Direkomendasikan (*Recommended Weight Limit* / RWL):

$$\text{RWL} = \text{LC} \times \text{HM} \times \text{VM} \times \text{DM} \times \text{AM} \times \text{FM} \times \text{CM}$$

di mana $\text{LC} = 23\text{ kg}$ (Load Constant).

Dengan pengaplikasian eksoskeleton penopang punggung, faktor pengali frekuensi dan daya tahan metabolik mengalami perbaikan karena berkurangnya laju konsumsi oksigen ($\dot{V}_{\text{O}_2}$) dan denyut jantung. Parameter penyesuaian Indeks Pengangkatan Eksoskeleton (*Exoskeleton Lifting Index* / ELI):

$$\text{ELI} = \frac{\text{Actual Load Weight}}{\text{RWL} \times \phi_{\text{exo}}}$$

di mana $\phi_{\text{exo}} \ge 1,0$ adalah faktor koreksi biomekanis-ergonomis eksoskeleton:

$$\phi_{\text{exo}} = 1 + \left( \frac{M_{\text{exo}}}{M_{\text{ext}} + M_{\text{body}}} \right) \cdot \kappa_{\text{usability}}$$

dengan $\kappa_{\text{usability}} \in [0,7, 0,95]$ mencerminkan efisiensi transfer beban tanpa restriksi kinematika sendi panggul (*hip kinematics compliance*).

---

## 4. Implementasi Python Solver: Engine Evaluasi Biomekanika Eksoskeleton

Program Python berikut memodelkan kurva postur pengangkatan dinamis, menghitung torsi biomekanis sendi L5/S1, gaya kompresi diskus, persentase reduksi beban dengan eksoskeleton pasif/aktif, serta mengevaluasi kepatuhan terhadap standar NIOSH dan ISO 11228-1.

```python
"""
Autonomous Biomechanical Assessment Engine for Industrial Back-Support Exoskeletons
Standards: NIOSH RNLE, ISO 11228-1, ISO 13482
Author: RuangTI Industrial Knowledge Base Specialist
"""

import numpy as np
from dataclasses import dataclass
from typing import Dict, Any, List

@dataclass
class AnthropometricSubject:
    body_mass_kg: float = 75.0      # Massa tubuh total pekerja (kg)
    body_height_m: float = 1.75     # Tinggi badan (m)
    d_erector_m: float = 0.055       # Lengan momen otot erector spinae (m)
    
    @property
    def upper_body_mass(self) -> float:
        # Massa segmen tubuh atas (kepala + torso + lengan) ~ 60% total massa
        return 0.60 * self.body_mass_kg

    @property
    def upper_body_weight_N(self) -> float:
        return self.upper_body_mass * 9.81

class ExoskeletonBiomechanicsEvaluator:
    def __init__(self, subject: AnthropometricSubject):
        self.subj = subject
        self.g = 9.81
        self.niosh_action_limit_N = 3400.0  # Batas aman kompresi L5/S1 (N)
        self.niosh_max_limit_N = 6400.0     # Batas kritis fraktur mikro (N)

    def evaluate_lifting_cycle(
        self,
        load_mass_kg: float,
        d_load_horizontal_m: float,
        trunk_flexion_deg: float,
        exo_torque_assist_Nm: float = 0.0
    ) -> Dict[str, Any]:
        """
        Menghitung kesetimbangan momen sagital dan beban kompresi diskus L5/S1.
        """
        # Konversi sudut ke radian
        theta_rad = np.radians(trunk_flexion_deg)
        sacral_angle_rad = np.radians(trunk_flexion_deg * 0.75) # Asumsi orientasi sakrum

        # 1. Gaya dan Lengan Momen Segmen Tubuh
        # Lengan momen gravitasi tubuh bagian atas bertambah seiring fleksi torso
        d_trunk_m = 0.25 * self.subj.body_height_m * np.sin(theta_rad)
        
        m_body_Nm = self.subj.upper_body_weight_N * d_trunk_m
        f_load_N = load_mass_kg * self.g
        m_load_Nm = f_load_N * d_load_horizontal_m
        
        # Momen Eksternal Total yang Membebani Punggung
        m_external_total_Nm = m_body_Nm + m_load_Nm

        # 2. Torsi Bersih yang Harus Ditahan Otot Erector Spinae
        # M_muscle = M_external - M_exo
        effective_muscle_torque = max(0.0, m_external_total_Nm - exo_torque_assist_Nm)
        
        # 3. Gaya Tarik Otot Erector Spinae
        f_erector_N = effective_muscle_torque / self.subj.d_erector_m

        # 4. Gaya Kompresi Diskus L5/S1
        # F_comp = F_erector + W_upper * cos(theta) + F_load * cos(theta)
        f_comp_N = (
            f_erector_N +
            (self.subj.upper_body_weight_N * np.cos(sacral_angle_rad)) +
            (f_load_N * np.cos(sacral_angle_rad))
        )

        # 5. Gaya Geser Diskus L5/S1 (Anterior Shear)
        f_shear_N = (
            (self.subj.upper_body_weight_N * np.sin(sacral_angle_rad)) +
            (f_load_N * np.sin(sacral_angle_rad))
        )

        # 6. Status Keamanan Ergonomi
        is_safe = f_comp_N <= self.niosh_action_limit_N
        safety_margin_pct = ((self.niosh_action_limit_N - f_comp_N) / self.niosh_action_limit_N) * 100.0

        return {
            "trunk_flexion_deg": trunk_flexion_deg,
            "load_mass_kg": load_mass_kg,
            "exo_torque_Nm": exo_torque_assist_Nm,
            "m_external_total_Nm": m_external_total_Nm,
            "f_erector_N": f_erector_N,
            "l5s1_compression_N": f_comp_N,
            "l5s1_shear_N": f_shear_N,
            "is_within_niosh_limit": is_safe,
            "compression_margin_pct": safety_margin_pct
        }

    def comparative_study(
        self,
        load_mass_kg: float,
        d_load_horizontal_m: float,
        trunk_flexion_deg: float,
        passive_exo_stiffness_Nm_deg: float = 0.8
    ) -> Dict[str, Any]:
        """
        Membandingkan kondisi pengangkatan Manual vs Pasif vs Aktif.
        """
        # 1. Tanpa Eksoskeleton
        res_none = self.evaluate_lifting_cycle(load_mass_kg, d_load_horizontal_m, trunk_flexion_deg, 0.0)

        # 2. Eksoskeleton Pasif (Torsi proporsional sudut fleksi)
        tau_passive = min(35.0, trunk_flexion_deg * passive_exo_stiffness_Nm_deg)
        res_passive = self.evaluate_lifting_cycle(load_mass_kg, d_load_horizontal_m, trunk_flexion_deg, tau_passive)

        # 3. Eksoskeleton Aktif (Bantuan motorik konstan adaptif)
        tau_active = 45.0 # Nm bantuan aktuator elektrik
        res_active = self.evaluate_lifting_cycle(load_mass_kg, d_load_horizontal_m, trunk_flexion_deg, tau_active)

        comp_none = res_none["l5s1_compression_N"]
        comp_passive = res_passive["l5s1_compression_N"]
        comp_active = res_active["l5s1_compression_N"]

        reduction_passive_pct = ((comp_none - comp_passive) / comp_none) * 100.0
        reduction_active_pct = ((comp_none - comp_active) / comp_none) * 100.0

        return {
            "no_exo": res_none,
            "passive_exo": {**res_passive, "relief_pct": reduction_passive_pct},
            "active_exo": {**res_active, "relief_pct": reduction_active_pct}
        }

# --- Verifikasi Eksekusi Numerik & Uji Kasus ---
if __name__ == "__main__":
    worker = AnthropometricSubject(body_mass_kg=75.0, body_height_m=1.75)
    evaluator = ExoskeletonBiomechanicsEvaluator(worker)

    # Skenario: Mengangkat kotak kardus komponen transmisi 18 kg pada sudut bungkuk 45 derajat
    load_kg = 18.0
    dist_m = 0.40
    flexion_angle = 45.0

    comparison = evaluator.comparative_study(
        load_mass_kg=load_kg,
        d_load_horizontal_m=dist_m,
        trunk_flexion_deg=flexion_angle,
        passive_exo_stiffness_Nm_deg=0.75
    )

    print("=================================================================")
    print("      HASIL ANALISIS BIOMEKANIKA PENGANGKATAN BEBAN 18 KG        ")
    print("=================================================================")
    print(f"Postur Fleksi Torso: {flexion_angle} derajat | Jarak Horisontal: {dist_m*100:.0f} cm\n")

    ne = comparison["no_exo"]
    print(f"[1] KONDISI MANUAL (TANPA EKSOSKELETON):")
    print(f"  - Momen Fleksi Eksternal : {ne['m_external_total_Nm']:.2f} Nm")
    print(f"  - Gaya Otot Erector      : {ne['f_erector_N']:.1f} N")
    print(f"  - Gaya Kompresi L5/S1    : {ne['l5s1_compression_N']:.1f} N (Batas NIOSH: 3400 N)")
    print(f"  - Status Ergonomi        : {'AMAN' if ne['is_within_niosh_limit'] else 'BAHAYA / MELEBIHI LIMIT'}\n")

    pe = comparison["passive_exo"]
    print(f"[2] KONDISI EKSOSKELETON PASIF (Torsi Bantuan = {pe['exo_torque_Nm']:.1f} Nm):")
    print(f"  - Gaya Kompresi L5/S1    : {pe['l5s1_compression_N']:.1f} N")
    print(f"  - Reduksi Beban Kompresi : {pe['relief_pct']:.2f}%")
    print(f"  - Status Ergonomi        : {'AMAN' if pe['is_within_niosh_limit'] else 'BAHAYA'}\n")

    ae = comparison["active_exo"]
    print(f"[3] KONDISI EKSOSKELETON AKTIF (Torsi Bantuan = {ae['exo_torque_Nm']:.1f} Nm):")
    print(f"  - Gaya Kompresi L5/S1    : {ae['l5s1_compression_N']:.1f} N")
    print(f"  - Reduksi Beban Kompresi : {ae['relief_pct']:.2f}%")
    print(f"  - Status Ergonomi        : {'AMAN' if ae['is_within_niosh_limit'] else 'BAHAYA'}")
```

---

## 5. Studi Kasus Industri: Operasi Paletisasi Gudang Pusat Distribusi E-Commerce

### 5.1 Karakteristik Kerja & Parameter Operasional

Pada pusat logistik e-commerce dengan throughput tinggi, operator bertugas memindahkan kotak paket rata-rata $15\text{ s.d. } 22\text{ kg}$ dari konveyor sortir ke palet kayu dengan frekuensi $6\text{ pengangkatan/menit}$ selama shift 8 jam kerja.

```
+---------------------------------------------------------------------------------------------------+
|               RINGKASAN DAMPAK IMPLEMENTASI EKSOSKELETON PADA LINI LOGISTIK                       |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  Metrik Evaluasi Biomekanis            Sebelum Eksoskeleton      Setelah Eksoskeleton Pasif       |
|  -----------------------------------   -----------------------   ------------------------------   |
|  1. Beban Puncak Kompresi L5/S1        3.845 N (> NIOSH Limit)   2.890 N (< NIOSH Limit, -24,8%)  |
|  2. Aktivitas Elektromiografi (%MVIC)  48,2% MVIC                31,5% MVIC (-34,6% Kelelahan)    |
|  3. Skor Borg RPE (Perceived Exertion) 16 (Hard / Sangat Berat)  11 (Light / Ringan)              |
|  4. Tingkat Absensi Akibat LBP         4,2 hari / pekerja / thn  0,8 hari / pekerja / thn (-81%)  |
|  5. Siklus Waktu Paletisasi            10,4 detik / unit         9,8 detik / unit (+5,7% Speed)   |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 5.2 Pertimbangan Ergonomi Kognitif & Kinematika Samping (Discomfort Trade-Offs)

Meskipun eksoskeleton mengurangi beban kompresi lumbar secara drastis, penilaian menyeluruh harus memitigasi potensi efek samping ergonomis:
1. **Peningkatan Tekanan pada Paha & Dada (*Interface Pressure*)**: Torsi reaksi eksoskeleton ditransfer ke paha depan dan dada. Tekanan kontak harus dijaga di bawah $15\text{ kPa}$ untuk menghindari oklusi sirkulasi vaskular lokal.
2. **Restriksi Sudut Fleksi Lutut (*Squat Mobility Hindrance*)**: Eksoskeleton harus dirancang dengan kopling engsel hip multi-aksial agar tidak menghambat transisi teknik *squat lift* vs *stoop lift*.

---

## 6. Referensi Terverifikasi & Standar Industri

1. **Chaffin, D. B., Andersson, G. B., & Martin, B. J. (2006)**. *Occupational Biomechanics* (4th Edition). John Wiley & Sons, Hoboken, NJ. ISBN: 978-0-471-24340-3.
2. **de Looze, M. P., Bosch, T., Krause, F., Stadler, K. S., & O'Sullivan, L. W. (2016)**. *Exoskeletons for industrial application and their potential effects on physical work load: A general review*. Work: A Journal of Prevention, Assessment and Rehabilitation, 54(3), 673–681. [DOI: 10.3233/WOR-162345](https://doi.org/10.3233/WOR-162345).
3. **Waters, T. R., Putz-Anderson, V., Garg, A., & Fine, L. J. (1993)**. *Revised NIOSH equation for the design and evaluation of manual lifting tasks*. Ergonomics, 36(7), 749–776. [DOI: 10.1080/00140139308967940](https://doi.org/10.1080/00140139308967940).
4. **Marras, W. S. (2008)**. *The Working Back: A Systems View of Spine Mechanics, Pathomechanics, and Occupational Back Pain*. John Wiley & Sons. ISBN: 978-0-470-22744-2.
5. **ISO 13482:2014**. *Robots and robotic devices — Safety requirements for personal care robots (Physical assistant robots and wearable exoskeletons)*. International Organization for Standardization, Geneva.
6. **ISO 11228-1:2021**. *Ergonomics — Manual handling — Part 1: Lifting, lowering and carrying*. International Organization for Standardization, Geneva.
