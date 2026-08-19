# Modul Komprehensif: AutoML & MLOps Pipeline Deployment (MLflow, BentoML) di Lingkungan Pabrik
**Nomor Modul:** [340]  
**Domain Keahlian:** Rekayasa Sistem & Teknik Industri Terpadu (Industrial & Systems Engineering)  
**Sumber Referensi:** *Introducing MLOps* (Mark Treveil et al. - O'Reilly), *Automated Machine Learning: Methods, Systems, Challenges* (Frank Hutter et al. - Springer), *Computers in Industry* (2024).

---

## 1. Landasan MLOps & Automasi Machine Learning di Industri Manufaktur
Model Machine Learning di lantai pabrik sering kali mengalami penurunan performa akibat perubahan karakteristik bahan baku, pergantian operator, atau keausan mekanik mesin (*Concept Drift & Data Drift*). MLOps (Machine Learning Operations) menyediakan standarisasi siklus hidup model:
1. **Automated Feature Stores**: Pengambilan fitur real-time dari SCADA/MES.
2. **AutoML Hyperparameter Optimization**: Optimasi arsitektur model otomatis (Bayesian Optimization, Hyperband, Optuna).
3. **Model Tracking & Registry (MLflow)**: Versioning artefak model, metrik evaluasi, dan parameter eksperimen.
4. **Containerized Deployment (Docker, BentoML, Triton)**: Inferensi berlatensi rendah di edge gateway pabrik.
5. **Continuous Monitoring & Retraining Triggers**: Deteksi drift statistik Kolmogorov-Smirnov / PSI untuk memicu pelatihan ulang otomatis.

---

## 2. Formulasi Matematis Optimasi Bayesian & Deteksi Drift

### 2.1. Bayesian Hyperparameter Optimization (Gaussian Process)
Untuk menemukan konfigurasi hyperparameter terbaik $\\boldsymbol{\\theta}^*$:
$$ \\boldsymbol{\\theta}^* = \\arg\\max_{\\boldsymbol{\\theta} \\in \\Theta} f(\\boldsymbol{\\theta}), \\quad f(\\boldsymbol{\\theta}) \\sim \\mathcal{GP}(m(\\boldsymbol{\\theta}), k(\\boldsymbol{\\theta}, \\boldsymbol{\\theta}')) $$
Fungsi Akuisisi Expected Improvement (EI):
$$ \\text{EI}(\\boldsymbol{\\theta}) = \\mathbb{E}[\\max(0, f(\\boldsymbol{\\theta}) - f(\\boldsymbol{\\theta}^+))] = (\\mu(\\boldsymbol{\\theta}) - f(\\boldsymbol{\\theta}^+)) \\Phi\\left( \\dfrac{\\mu(\\boldsymbol{\\theta}) - f(\\boldsymbol{\\theta}^+)}{\\sigma(\\boldsymbol{\\theta})} \\right) + \\sigma(\\boldsymbol{\\theta}) \\phi\\left( \\dfrac{\\mu(\\boldsymbol{\\theta}) - f(\\boldsymbol{\\theta}^+)}{\\sigma(\\boldsymbol{\\theta})} \\right) $$

### 2.2. Population Stability Index (PSI) untuk Deteksi Data Drift
$$ \\text{PSI} = \\sum_{k=1}^B (P_k - Q_k) \\times \\ln\\left( \\dfrac{P_k}{Q_k} \\right) $$
di mana $P_k$ adalah proporsi data aktual saat ini dan $Q_k$ adalah proporsi data baseline pada bin $k$.
- $\\text{PSI} < 0.10$: Tidak ada drift (Model stabil).
- $0.10 \\le \\text{PSI} < 0.25$: Terjadi slight drift (Monitoring ketat).
- $\\text{PSI} \\ge 0.25$: Significant drift (Wajib memicu Automated Retraining Pipeline).

---

## 3. Implementasi MLOps Pipeline dengan MLflow (Python)

```python
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

def train_and_register_manufacturing_model(X_train, y_train, X_val, y_val, n_estimators=100, max_depth=12):
    mlflow.set_experiment("Smelting_Energy_Optimization")
    
    with mlflow.start_run(run_name="RF_Energy_Predictor_v2"):
        model = RandomForestRegressor(n_estimators=n_estimators, max_depth=max_depth, random_state=42)
        model.fit(X_train, y_train)
        
        preds = model.predict(X_val)
        rmse = np.sqrt(mean_squared_error(y_val, preds))
        r2 = r2_score(y_val, preds)
        
        # Log parameter dan metrik eksperimen
        mlflow.log_param("n_estimators", n_estimators)
        mlflow.log_param("max_depth", max_depth)
        mlflow.log_metric("rmse", rmse)
        mlflow.log_metric("r2_score", r2)
        
        # Simpan dan register model ke registry
        mlflow.sklearn.log_model(model, "model", registered_model_name="SmeltingFurnaceEnergyModel")
        
    return rmse, r2
```

---

## 4. Studi Kasus Industri Riil: Automasi MLOps Pabrik Semen Multi-Pabrik
Penerapan arsitektur MLOps terpusat pada 6 pabrik semen:
- Deteksi otomatis degradasi performa model kiln klinker via PSI $>0.25$ memicu retraining otomatis setiap minggu dengan data telemetri terbaru.
- Mengurangi kebutuhan intervensi manual tim data scientist hingga 85% dan mempertahankan efisiensi energi klinker pada level optimal ($740\\text{ kcal/kg}$).

---

## 5. Referensi Akademik Terverifikasi & Standar Industri
1. Treveil, M., Omont, N., Stenac, C., Lefevre, K., Phan, D., Zentici, J., ... & Lavoillotte, A. (2020). *Introducing MLOps: How to Scale Machine Learning in the Enterprise*. O'Reilly Media.
2. Hutter, F., Kotthoff, L., & Vanschoren, J. (2019). *Automated Machine Learning: Methods, Systems, Challenges*. Springer.
3. Sculley, D., Holt, G., Golovin, D., Davydov, E., Phillips, T., Ebner, D., ... & Dennison, D. (2015). Hidden technical debt in machine learning systems. *Advances in Neural Information Processing Systems (NeurIPS)*, 2503-2511.
4. Kreuzberger, D., Hirschl, S., & Kounev, S. (2023). Machine learning operations (MLOps): Overview, definition, and architecture. *IEEE Access*, 11, 31866-31879.
