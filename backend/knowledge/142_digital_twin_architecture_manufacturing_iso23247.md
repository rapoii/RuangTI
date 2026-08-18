# 142. Digital Twin Architecture dalam Manufaktur (ISO 23247 / AAS)

## Deskripsi Modul
Modul ini membahas arsitektur Digital Twin (DT) untuk manufaktur berdasarkan standar ISO 23247 dan Asset Administration Shell (AAS). Digital Twin merupakan representasi digital dari entitas fisik yang tersinkronisasi secara real-time, memungkinkan simulasi, prediksi, dan optimasi proses manufaktur.

## Konsep Inti

### 1. Definisi dan Komponen Digital Twin

**Definisi ISO 23247-1:**
Digital Twin adalah representasi digital dari entitas fisik atau sistem yang mencakup atribut, perilaku, dan aturan, serta terhubung melalui pertukaran data dua arah sepanjang siklus hidup.

**Tiga Pilar Digital Twin:**
$$DT = \{PE, VE, DD\}$$

di mana:
- $PE$ = Physical Entity (entitas fisik)
- $VE$ = Virtual Entity (model digital)
- $DD$ = Data Connection (koneksi data bidirectional)

### 2. Arsitektur ISO 23247

ISO 23247 terdiri dari empat bagian:
- **Part 1**: Overview and general principles
- **Part 2**: Reference architecture
- **Part 3**: Representation of physical manufacturing elements
- **Part 4**: Information exchange

**Reference Architecture Layers:**
1. **Physical Layer**: Sensor, aktuator, mesin CNC, robot
2. **Communication Layer**: OPC-UA, MQTT, Time-Sensitive Networking (TSN)
3. **Data Layer**: Time-series DB, contextualization, semantic modeling
4. **Model Layer**: Physics-based, data-driven, hybrid models
5. **Service Layer**: Simulation, optimization, visualization APIs
6. **Application Layer**: Dashboard, AR/VR, decision support

### 3. Asset Administration Shell (AAS)

AAS adalah implementasi standar Industrie 4.0 untuk interoperabilitas DT:

**Struktur AAS:**
```
AssetAdministrationShell
├── Asset (physical/digital representation)
├── Submodels
│   ├── NameplateSubmodel
│   ├── TechnicalDataSubmodel
│   ├── OperationalDataSubmodel
│   └── MaintenanceSubmodel
└── ConceptDescriptions (semantic references to ECLASS/IEC CDD)
```

**Semantic Interoperability:**
Setiap properti dalam submodel direferensikan ke standardized dictionary:
$$Property.semanticId = \text{IRDI}(ECLASS|IEC\_CDD|ZVEI)$$

Contoh: `0173-1#02-AAY811#001` = "Rotational speed" (ECLASS)

### 4. Model Matematis dalam Digital Twin

#### A. Physics-Based Models
Untuk thermal behavior mesin CNC:
$$\rho c_p \frac{\partial T}{\partial t} = k \nabla^2 T + Q_{gen} - h(T - T_{amb})$$

di mana:
- $\rho$ = density material
- $c_p$ = specific heat capacity
- $k$ = thermal conductivity
- $Q_{gen}$ = heat generation dari cutting process
- $h$ = convective heat transfer coefficient

#### B. Data-Driven Models (Surrogate Models)
Gaussian Process Regression untuk prediction tanpa explicit physics:
$$f(\mathbf{x}) \sim \mathcal{GP}(m(\mathbf{x}), k(\mathbf{x}, \mathbf{x'}))$$

Posterior predictive:
$$p(f_* | X_*, X, y) = \mathcal{N}(\mu_*, \sigma_*^2)$$

$$\mu_* = K(X_*, X)[K(X,X) + \sigma_n^2 I]^{-1}y$$

#### C. Hybrid Models
Physics-informed neural networks (PINNs):
$$\mathcal{L}_{total} = \mathcal{L}_{data} + \lambda \mathcal{L}_{physics}$$

$$\mathcal{L}_{physics} = \left\| \frac{\partial \hat{u}}{\partial t} + \mathcal{N}\left[\hat{u}\right] - f \right\|^2_{\Omega}$$

### 5. Synchronization & Real-Time Requirements

**Synchronization Levels:**
| Level | Latency | Use Case | Protocol |
|-------|---------|----------|----------|
| Tight | < 1 ms | Motion control | TSN, EtherCAT |
| Loose | 1-100 ms | Process monitoring | OPC-UA PubSub |
| Batch | > 1 s | Analytics, reporting | REST/MQTT |

**State Estimation dengan Kalman Filter:**
$$\hat{x}_k^- = F_k \hat{x}_{k-1} + B_k u_k$$
$$P_k^- = F_k P_{k-1} F_k^T + Q_k$$
$$K_k = P_k^- H_k^T (H_k P_k^- H_k^T + R_k)^{-1}$$
$$\hat{x}_k = \hat{x}_k^- + K_k(z_k - H_k \hat{x}_k^-)$$

### 6. Implementasi Teknologi

**Platform Stack Modern:**
- **Edge**: Node-RED, Kepware, Azure IoT Edge
- **Cloud**: AWS IoT TwinMaker, Siemens MindSphere, PTC ThingWorx
- **Simulation**: ANSYS Twin Builder, Siemens NX MCD, MATLAB/Simulink
- **Visualization**: Unity Reflect, NVIDIA Omniverse, Grafana

**OPC-UA Information Modeling:**
```xml
<UAObject NodeId="ns=2;i=1001" BrowseName="2:CNCMachine">
  <DisplayName>CNC Machine #5</DisplayName>
  <References>
    <Reference ReferenceType="HasComponent">ns=2;i=2001</Reference> <!-- Spindle -->
    <Reference ReferenceType="HasComponent">ns=2;i=3001</Reference> <!-- Axes -->
  </References>
</UAObject>
```

## Studi Kasus

### Digital Twin Line Produksi Otomotif (BMW, 2024)
- **Scope**: Body shop dengan 400+ robot
- **Architecture**: AAS-compliant submodels untuk setiap robot
- **Results**: 
  - Commissioning time berkurang 30%
  - Downtime prediction accuracy 94%
  - Energy optimization saving 12%

## Referensi

### Standards
1. ISO 23247-1:2021. *Automation systems and integration — Manufacturing digital twin framework for manufacturing — Part 1: Overview and general principles*.
2. ISO 23247-2:2021. *Part 2: Reference architecture*.
3. Plattform Industrie 4.0. (2023). *Details of the Asset Administration Shell Part 1 V3.0*.

### Textbooks
1. Tao, F., & Qi, Q. (2023). *Digital Twin Driven Smart Manufacturing*. Academic Press.
2. Schleich, B., Anwer, N., Mathieu, L., & Wartzack, S. (2024). *Shaping the Digital Twin for Design and Production Engineering*. CIRP Annals.

### Journal Articles (2023-2026)
1. Lu, Y., Liu, C., Wang, K. I. K., et al. (2024). Digital Twin-driven smart manufacturing: Connotation, reference model, applications and research issues. *Robotics and Computer-Integrated Manufacturing*, 85, 102618.
2. Cimino, A., Lazoi, M., & Corallo, A. (2023). Asset Administration Shell implementation guidelines for SMEs in Industry 4.0. *Computers in Industry*, 150, 103960.
3. Zhang, H., Liu, Q., Chen, X., et al. (2024). Physics-informed digital twin for machining process monitoring and optimization. *Journal of Manufacturing Systems*, 73, 45-62.
4. Boje, C., Stahl, F., & König, M. (2023). Semantic web technologies for digital twins in construction and manufacturing. *Automation in Construction*, 152, 104896.
5. Li, C., Mahadevan, S., Ling, Y., et al. (2025). Bayesian calibration of digital twin models under uncertainty. *Mechanical Systems and Signal Processing*, 205, 110892.

## Latihan Soal

1. Rancang AAS submodel untuk injection molding machine yang mencakup parameter proses (temperature, pressure, cycle time) dan maintenance data. Definisikan semantic IDs menggunakan ECLASS.

2. Bandingkan pendekatan physics-based vs data-driven untuk memodelkan tool wear pada CNC milling. Kapan hybrid approach lebih tepat?

3. Hitung bandwidth minimum yang diperlukan untuk streaming vibration data dari 10 sensor accelerometer (sampling rate 25.6 kHz, 16-bit resolution) ke cloud digital twin.

</content>