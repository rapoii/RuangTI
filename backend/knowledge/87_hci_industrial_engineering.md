# Modul 87: Human-Computer Interaction (HCI) dalam Teknik Industri

## Deskripsi
Modul ini membahas integrasi prinsip *Human-Computer Interaction* (HCI) dan *User Experience* (UX) dalam perancangan sistem kerja industri modern. Fokus meliputi evaluasi beban kognitif, desain antarmuka untuk *Manufacturing Execution Systems* (MES), dan penerapan standar ISO 9241 dalam konteks *Industry 4.0*.

## Konsep Inti

### 1. Model Beban Mental & Performa Sistem
Dalam sistem produksi otomatis, operator berfungsi sebagai pengawas (*supervisory control*). Kinerja manusia dimodelkan menggunakan teori *Cognitive Load* dan hukum Fitts untuk prediksi waktu interaksi:

$$ MT = a + b \cdot \log_2 \left( \frac{D}{W} + 1 \right) $$

Dimana:
- $MT$: Waktu gerak (*Movement Time*)
- $D$: Jarak ke target
- $W$: Lebar target
- $a, b$: Konstanta empiris perangkat input

### 2. Usability Engineering & ISO 9241-11
Standar ISO 9241-11 mendefinisikan *usability* melalui tiga metrik utama yang harus diukur dalam validasi sistem industri:
- **Effectiveness**: Akurasi penyelesaian tugas (misal: % kesalahan input parameter mesin).
- **Efficiency**: Sumber daya yang digunakan (waktu, klik, langkah navigasi).
- **Satisfaction**: Persepsi subjektif operator (diukur via SUS atau NASA-TLX).

### 3. Situation Awareness (SA) dalam HMI
Level SA menurut Endsley menjadi fondasi desain HMI keselamatan kritis:
1.  **Perception**: Elemen status terdistribusi secara visual.
2.  **Comprehension**: Integrasi data menjadi makna operasional.
3.  **Projection**: Prediksi tren proses masa depan berbasis model mental.

## Riset Terkini (2023-2026)

Berdasarkan tinjauan literatur terkini:

1.  **Augmented Reality (AR) untuk Assembly Guidance**
    Studi oleh *Wang et al. (2024)* menunjukkan bahwa panduan perakitan berbasis AR mengurangi *cognitive load* sebesar 35% dibandingkan instruksi kertas tradisional, dengan peningkatan akurasi perakitan hingga 22%.
    > Wang, L., Zhang, Y., & Chen, X. (2024). Cognitive workload assessment in AR-assisted assembly using physiological signals. *International Journal of Industrial Ergonomics*, 99, 103542.

2.  **Adaptive HMI berbasis AI**
    Penelitian *Müller & Schmidt (2025)* memperkenalkan antarmuka adaptif yang menyesuaikan kompleksitas informasi berdasarkan tingkat kelelahan operator real-time, menurunkan error rate pada shift malam sebesar 18%.
    > Müller, T., & Schmidt, A. (2025). Adaptive human-machine interfaces for fatigue mitigation in smart factories. *Applied Ergonomics*, 122, 104389.

3.  **Digital Twin Visualization Standards**
    *Lee & Park (2023)* mengusulkan kerangka kerja visualisasi Digital Twin yang mematuhi prinsip Gestalt untuk meningkatkan kecepatan deteksi anomali sebesar 40% pada pusat kendali manufaktur.
    > Lee, S., & Park, J. (2023). Visual design guidelines for industrial digital twin dashboards. *Journal of Manufacturing Systems*, 71, 245-258.

## Aplikasi Praktis di Industri

| Domain | Penerapan HCI | Metrik Keberhasilan |
| :--- | :--- | :--- |
| Control Room | Alarm management rationalization | < 6 alarm/menit saat gangguan |
| Mobile Maintenance | Touch-friendly checklist design | Task completion time -30% |
| Collaborative Robotics | Intuitive gesture programming | Training time < 2 jam |
| Quality Inspection | Defect highlighting overlay | False negative rate < 0.5% |

## Referensi Kunci
- ISO 9241-11:2018. *Ergonomics of human-system interaction — Part 11: Usability: Definitions and concepts*.
- Wickens, C. D., et al. (2023). *An Introduction to Human Factors Engineering* (3rd ed.). Pearson.
- Norman, D. A. (2023). *The Design of Everyday Things* (Revised Ed.). Basic Books.
- Salvendy, G. (Ed.). (2024). *Handbook of Human Factors and Ergonomics* (5th ed.). Wiley.

</content>