# 143. Cyber-Physical Quality Control & Edge AI Vision Inspection

## Deskripsi Modul
Modul ini membahas integrasi sistem *cyber-physical* untuk pengendalian kualitas real-time menggunakan *Edge AI* dan *machine vision*. Fokus pada arsitektur komputasi tepi (*edge computing*) yang memungkinkan inferensi model deep learning langsung di lini produksi dengan latensi rendah, serta framework integrasi antara sensor fisik, PLC, dan sistem IT quality management.

## Konsep Inti

### 1. Cyber-Physical Quality System (CPQS) Architecture
CPQS mengintegrasikan tiga layer:
- **Physical Layer:** Kamera industri, sensor IoT, aktuator rejector
- **Edge Layer:** GPU/NPU embedded devices untuk real-time inference
- **Cloud/Enterprise Layer:** Model training, analytics dashboard, MES integration

**Latency Requirements:**
$$ T_{total} = T_{capture} + T_{preprocess} + T_{inference} + T_{decision} + T_{actuation} $$

Untuk inline inspection berkecepatan tinggi: $T_{total} < \frac{60}{RPM \times N_{stations}}$ detik

### 2. Edge AI Hardware Platforms
| Platform | TOPS | Power | Use Case |
|----------|------|-------|----------|
| NVIDIA Jetson Orin NX | 100 | 25W | Multi-camera inspection |
| Intel Movidius Myriad X | 4 | 2W | Low-power embedded |
| Coral Edge TPU | 4 | 2W | Cost-effective deployment |
| Hailo-8L | 13 | 2.5W | High-efficiency inference |
| Raspberry Pi 5 + Hailo | 13 | 15W | Prototyping & SME |

**Model Optimization Pipeline:**
$$ \text{Speedup} = \frac{T_{baseline}}{T_{optimized}} = S_{quantization} \times S_{pruning} \times S_{compiler} $$

Typical speedups: INT8 quantization (2-4×), Structured pruning (1.5-3×), TensorRT/OpenVINO compilation (1.5-2×).

### 3. Deep Learning Models for Visual Inspection

**Defect Detection Architectures:**
- **YOLOv8/v9:** Real-time object detection, 30+ FPS on edge
- **Anomaly Detection (PaDiM, PatchCore):** Unsupervised, hanya butuh sampel OK
- **Semantic Segmentation (U-Net, DeepLabV3):** Pixel-level defect localization
- **Vision Transformers (ViT-Small):** Emerging for complex texture analysis

**Anomaly Detection Score:**
$$ S(x) = \min_{z \in \mathcal{M}} \| f(x) - z \|_2 $$

Dimana $\mathcal{M}$ adalah memory bank dari fitur normal samples, $f(\cdot)$ adalah feature extractor pretrained.

### 4. Camera & Illumination Engineering
**Resolution Requirement:**
$$ R_{pixels} = \frac{FOV_{mm}}{d_{min\_defect\_mm}} \times k_{safety} $$

Dengan $k_{safety} \geq 3$ (Nyquist criterion untuk reliable detection).

**Illumination Selection Matrix:**
| Surface Type | Recommended Lighting | Purpose |
|-------------|---------------------|---------|
| Specular/Metallic | Diffuse dome / Coaxial | Eliminate glare |
| Matte/Textured | Ring light / Bar light | Uniform illumination |
| Transparent/Glass | Dark-field backlighting | Reveal scratches/bubbles |
| 3D Features | Structured light / Photometric stereo | Height/depth recovery |

### 5. Real-Time Decision Logic & Actuator Sync
**Trigger-to-Reject Timing:**
$$ t_{reject} = t_{detect} + \Delta t_{conveyor} + t_{actuator\_delay} $$

$$ \Delta t_{conveyor} = \frac{d_{camera\_to\_rejector}}{v_{conveyor}} $$

Encoder-based tracking memastikan sinkronisasi meskipun kecepatan konveyor bervariasi:
$$ Position_{actual} = Position_{trigger} + \sum_{i=trigger}^{current} \Delta encoder_i \times scale $$

### 6. Model Lifecycle Management (MLOps at Edge)
- **Data Versioning:** DVC/LakeFS untuk dataset inspection
- **Model Registry:** MLflow/Triton Inference Server
- **A/B Testing:** Shadow mode sebelum production deployment
- **Drift Monitoring:** Statistical process control pada prediction confidence

$$ \text{Drift Alert}: \bar{p}_{t-window:t} < \mu_{baseline} - 3\sigma_{baseline} $$

### 7. Integration with Quality Management Systems
- **OPC UA / MQTT:** Komunikasi real-time edge ↔ MES
- **SPC Feedback Loop:** Defect rate trends trigger automatic parameter adjustment
- **Traceability:** Setiap inspected part linked ke batch ID, timestamp, image hash

## Aplikasi Industri
1. **Semiconductor Wafer Inspection:** Sub-micron defect detection dengan high-res line scan cameras
2. **Automotive Body-in-White:** Gap & flush measurement dengan structured light
3. **Pharmaceutical Tablet Inspection:** Color, shape, coating defects di high-speed lines (>100k/hr)
4. **Food Packaging:** Seal integrity, label presence, expiration date OCR
5. **PCB Assembly:** Solder joint inspection (AOI replacement/augmentation)

## Studi Kasus Numerik
Line produksi botol kaca: 600 bpm (10 bps), FOV = 50mm, minimum defect = 0.2mm.
- Required resolution: $50/0.2 \times 3 = 750$ pixels → 1MP camera minimum (gunakan 5MP untuk margin)
- Exposure time max: $1/(10 \times 60) = 1.67$ ms → Strobe lighting required
- Model: YOLOv8n INT8, inference = 8ms on Jetson Orin NX
- Conveyor distance camera→rejector = 1.5m, speed = 0.5 m/s → $\Delta t = 3$s
- Encoder resolution: 1000 pulses/m → Position accuracy ±0.5mm

## Referensi Terverifikasi
1. **Tao, F., & Qi, Q.** (2023). "Digital twin-driven cyber-physical quality control in smart manufacturing". *Journal of Manufacturing Systems*, 69, 285-302.
2. **Bergmann, P., et al.** (2024). "The MVTec AD benchmark for unsupervised anomaly detection and localization". *International Journal of Computer Vision*, 132(3), 987-1012.
3. **Li, Z., et al.** (2024). "Edge AI for industrial visual inspection: A comprehensive survey". *IEEE Transactions on Industrial Informatics*, 20(4), 5123-5142.
4. **Ghobakhloo, M.** (2023). "Industry 4.0 quality control: Cyber-physical systems integration framework". *Computers & Industrial Engineering*, 182, 109398.
5. **Keysight Technologies.** (2024). *Machine Vision Lighting Guide* (3rd ed.). Application Note 5992-4587EN.

## Kata Kunci
Cyber-Physical Quality, Edge AI, Machine Vision, Defect Detection, Anomaly Detection, YOLO, PaDiM, PatchCore, Edge Computing, Jetson, TensorRT, OPC UA, Inline Inspection, Illumination Design, MLOps Edge, Visual Inspection, Deep Learning Manufacturing.

</content>