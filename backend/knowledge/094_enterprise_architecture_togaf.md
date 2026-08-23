# Modul 094: Enterprise Architecture — TOGAF Framework untuk Infrastruktur Industri Digital

## Overview
Modul ini membahas **Enterprise Architecture (EA)** menggunakan kerangka kerja **TOGAF** (*The Open Group Architecture Framework*) untuk merancang arsitektur perusahaan manufaktur digital: keselarasan strategi bisnis–proses–aplikasi–teknologi (Business, Data, Application, Technology Architecture), tata kelola perubahan, serta integrasi dengan **ITIL 4 Service Value System (SVS)** dalam lingkungan IT/OT industri (SCADA, MES, ERP) demi kontinuitas layanan pabrik.

## Konsep Dasar TOGAF

### Arsitektur Development Method (ADM)
Inti TOGAF adalah siklus ADM delapan fase yang dikelilingi *Requirements Management*:
1. **Preliminary:** persiapan kerangka & prinsip arsitektur.
2. **Phase A — Architecture Vision:** ruang lingkup, stakeholder, business case.
3. **Phase B — Business Architecture:** proses bisnis, organisasi, capability map.
4. **Phase C — Information Systems Architectures:** Data & Application architecture.
5. **Phase D — Technology Architecture:** infrastruktur IT/OT, platform, jaringan.
6. **Phase E-F — Opportunities & Solutions / Migration Planning:** gap analysis, roadmap transisi, work packages.
7. **Phase G — Implementation Governance:** pengawasan proyek implementasi terhadap arsitektur.
8. **Phase H — Architecture Change Management:** monitor perubahan kebutuhan.

Dukungan teknik: Architecture Principles, Stakeholder Management, Gap Analysis, Capability-Based Planning, dan Enterprise Continuum (arsitektur generik → spesifik). TOGAF Standard edisi ke-10 (2022) menyajikan konten sebagai rangkaian panduan modular (*TOGAF Series Guides*).

### Keterkaitan dengan ITIL 4 & OT Industri
TOGAF merancang "apa arsitekturnya"; **ITIL 4** mengelola operasional layanannya: Incident Management, Change Enablement (kendali patch/update sistem OT), Service Level Management (SLA/OLA), dan IT Asset Management untuk plant digital continuity. Peta referensi ISA-95 menghubungkan level otomasi L1-L4 dengan arsitektur aplikasi perusahaan.

## Formulasi Matematis

### Ketersediaan Layanan Sistem Industri
Dengan MTBF (mean time between failures) dan MTTR (mean time to repair):

$$
\text{MTBF} = \frac{\text{Total Operational Uptime}}{\text{Number of Incidents}}, \qquad
A = \frac{\text{MTBF}}{\text{MTBF}+\text{MTTR}}\times 100\%
$$

Target kritis infrastruktur produksi: $A \geq 99{,}9\%$ (tiga nines ≈ 8,8 jam downtime/tahun); sistem four-nines ($99{,}99\%$ ≈ 53 menit/tahun) menuntut redundansi aktif-aktif.

### Skor Kematangan Arsitektur
Maturitas domain arsitektur $l$ dinilai skala ordinal $m_l$ dengan bobot strategis $w_l$:

$$
AM = \frac{\sum_l w_l m_l}{\sum_l w_l}
$$

Hasilnya memprioritaskan domain gap terbesar pada roadmap transformasi.

### Justifikasi Investasi EA (Business Case)
Total cost of ownership diskonto:

$$
NPV = -C_0 + \sum_{t=1}^{T}\frac{B_t - O_t}{(1+r)^t}
$$

dengan $C_0$ investasi awal, $B_t$ manfaat tahunan (eliminasi integrasi ad-hoc, reduksi downtime), $O_t$ biaya operasi tata kelola.

## Metode Solusi / Prosedur Implementasi

1. **Baseline vs Target Architecture:** dokumentasi arsitektur as-is (aplikasi silo, antarmuka point-to-point) dan target (integrasi berbasis API/MES-MOM layer).
2. **Gap Analysis:** selisih capability baseline-target menjadi daftar work package roadmap.
3. **Architecture Governance Board:** review desain proyek terhadap standar; kendali perubahan via ITIL Change Enablement (CAB) khusus OT dengan analisis risiko patching SCADA.
4. **Reference Models:** TRM (Technical Reference Model) & III-RM disesuaikan untuk arsitektur pabrik cerdas (edge computing, historian, MES, ERP).
5. **Metrik pemantauan:** SLA availability $A$, insiden bulanan, lead time onboarding aplikasi baru, rasio integrasi standar.

## Aplikasi di Industrial Engineering

- **Smart factory roadmap:** sinkronisasi strategi bisnis → capability map → arsitektur MES/QMS/WMS/IoT platform.
- **OT cybersecurity governance:** penjenjangan IEC 62443 zone-and-conduit sebagai bagian Technology Architecture.
- **Modernisasi legacy ERP/MES:** migrasi bertahap dengan Phase E-F transition architectures tanpa menghentikan produksi.
- **SLA layanan TI-industri:** kontrak internal antara tim OT dan produksi dengan target $A$ dan MTTR terukur.

## Referensi Terverifikasi

1. The Open Group (2022). *The TOGAF Standard, 10th Edition*. The Open Group.
2. AXELOS (2019). *ITIL Foundation: ITIL 4 Edition*. TSO.
3. Lankhorst, M. (2017). *Enterprise Architecture at Work: Modelling, Communication and Analysis* (4th ed.). Springer.
4. Kotusev, S. (2021). *The Practice of Enterprise Architecture: A Modern Approach to Business and IT Alignment* (2nd ed.).
5. ISO/IEC/IEEE 42010:2022. *Architecture description*. ISO.
6. International Electrotechnical Commission. IEC 62443 series. *Industrial communication networks — Network and system security*. IEC.
