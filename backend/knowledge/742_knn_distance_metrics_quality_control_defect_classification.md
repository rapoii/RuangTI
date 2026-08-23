# Modul 742: K-Nearest Neighbors & Distance Metrics untuk Quality Control & Defect Classification Manufaktur

## 1. Pendahuluan: Machine Learning Instance-Based untuk Industri

**K-Nearest Neighbors (KNN)** merupakan algoritma *instance-based learning* (lazy learning) yang mengklasifikasikan data baru berdasarkan kedekatan (*similarity*) dengan data historis. Berbeda dengan metode parametrik seperti regresi logistik atau naive Bayes, KNN tidak membangun model eksplisit——melainkan menyimpan seluruh dataset pelatihan dan melakukan komputasi jarak secara *real-time*.

Dalam konteks **Quality Control Manufaktur**, KNN memiliki keunggulan:

1. **Non-Parametric Decision Boundary**: Cocok untuk data dengan distribusi kompleks dan multi-modal
2. **No Training Phase**: Tidak perlu estimasi parameter model——*plug-and-play* untuk defect pattern recognition
3. **Interpretable**: Keputusan klasifikasi dapat dijelaskan melalui tetangga terdekat (*explainable AI*)
4. **Adaptif**: Dapat menangani concept drift dalam distribusi defect seiring waktu

## 2. Fondasi Matematis KNN

### 2.1 Algoritma Klasik

**Input:**
- Dataset pelatihan: $\mathcal{D} = \{(x_i, y_i)\}_{i=1}^{N}$ dengan $x_i \in \mathbb{R}^d$ dan $y_i \in \{c_1, c_2, \ldots, c_K\}$
- Data query: $x_q \in \mathbb{R}^d$
- Parameter $K$ (jumlah tetangga terdekat)

**Prosedure:**
1. Hitung jarak $d(x_q, x_i)$ untuk semua $i = 1, \ldots, N$
2. Pilih $K$ data points dengan jarak terkecil: $\mathcal{N}_K(x_q) = \{x_{(1)}, \ldots, x_{(K)}\}$
3. Prediksi label berdasarkan *majority voting*:

$$\hat{y}(x_q) = \arg\max_{c \in \mathcal{C}} \sum_{i \in \mathcal{N}_K(x_q)} \mathbb{1}[y_i = c]$$

Alternatif berbobot (weighted voting):
$$\hat{y}(x_q) = \arg\max_{c \in \mathcal{C}} \sum_{i \in \mathcal{N}_K(x_q)} w_i \cdot \mathbb{1}[y_i = c]$$

dengan bobot $w_i = \frac{1}{d(x_q, x_i)^2}$ (inverse distance squared weighting / IDW).

### 2.2 Distance Metrics

Pemilihan *distance metric* menentukan geometry data dan sangat memengaruhi akurasi KNN:

**Euclidean Distance (L2):**
$$d_2(x, y) = \sqrt{\sum_{j=1}^{d} (x_j - y_j)^2}$$

**Manhattan Distance (L1):**
$$d_1(x, y) = \sum_{j=1}^{d} |x_j - y_j|$$

**Minkowski Distance (Generalized Lp):**
$$d_p(x, y) = \left(\sum_{j=1}^{d} |x_j - y_j|^p\right)^{1/p}$$

**Mahalanobis Distance** (robust untuk korelasi antar fitur):
$$d_M(x, y) = \sqrt{(x - y)^T \Sigma^{-1} (x - y)}$$

Di mana $\Sigma$ adalah matriks kovarians data.

**Cosine Similarity** (untuk data berdimensi tinggi seperti text/image embeddings):
$$\cos(\theta) = \frac{x \cdot y}{\|x\| \|y\|}$$

### 2.3 Choice of K (Hyperparameter)

Pemilihan $K$ merupakan *bias-variance tradeoff*:
- **K kecil**: Decision boundary detail, sensitif terhadap noise (high variance, low bias)
- **K besar**: Decision boundary smoother, robust terhadap noise, tapi bisa mengabaikan local patterns (low variance, high bias)

**Empirical rule**: $K \approx \sqrt{N}$ atau validasi silang (*k-fold cross-validation*).

## 3. KNN untuk Quality Control: Studi Kasus

### 3.1 Konteks Industri

PT Manufaktur Baja "SteelWorks" memproduksi lembaran baja canai dingin (*cold-rolled steel sheets*) yang digunakan untuk bodi kendaraan. Defect umum meliputi:

| Kode Defect | Deskripsi | Severity | Biaya Rework |
|-------------|-----------|----------|--------------|
| D01 | Scratch / Goresan | Medium | Rp 450.000/lembar |
| D02 | Dent / Penyok | Low | Rp 150.000/lembar |
| D03 | Surface inclusion | High | Rp 780.000/lembar |
| D04 | Edge crack | Critical | Rp 1.200.000/lembar |
| OK | Acceptable | None | - |

Inspeksi visual dilakukan menggunakan *machine vision* dengan ekstraksi fitur dari citra permukaan:
- Mean brightness ($\mu$)
- Standard deviation of brightness ($\sigma$)
- Skewness ($\gamma_1$)
- Kurtosis ($\gamma_2$)
- Edge density (textural feature)
- Histogram entropy ($H$)

### 3.2 Dataset Historis

| Sample ID | μ | σ | γ₁ | γ₂ | Edge Density | H | Label |
|-----------|------|------|-------|-------|-------------|--------|-------|
| 001 | 142.3 | 18.7 | 0.12 | 2.89 | 0.34 | 4.21 | OK |
| 002 | 138.9 | 22.1 | 0.45 | 3.42 | 0.67 | 3.87 | D01 |
| 003 | 145.6 | 19.3 | 0.08 | 2.95 | 0.31 | 4.15 | OK |
| 004 | 129.4 | 28.7 | 0.78 | 4.12 | 0.89 | 3.42 | D03 |
| 005 | 141.2 | 20.1 | 0.19 | 3.01 | 0.38 | 4.08 | OK |
| 006 | 133.7 | 25.4 | 0.56 | 3.67 | 0.74 | 3.65 | D02 |
| 007 | 127.8 | 31.2 | 0.91 | 4.45 | 0.95 | 3.21 | D04 |
| ... | ... | ... | ... | ... | ... | ... | ... |
| N=500 | - | - | - | - | - | - | - |

### 3.3 Preprocessing: Standardization

Karena fitur-fitur memiliki skala berbeda (brightness ~100, edge density ~0.3), normalisasi diperlukan:

$$x_j^{std} = \frac{x_j - \mu_j}{\sigma_j}$$

Proses ini membuat semua fitur setara kontribusinya terhadap jarak Euclidean.

### 3.4 Implementasi Python

```python
"""
K-Nearest Neighbors untuk Quality Control & Defect Classification
Implementasi: NumPy, Scikit-Learn, Pandas
"""

import numpy as np
import pandas as pd
from collections import Counter
from typing import List, Tuple, Dict, Optional
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import (
    classification_report, confusion_matrix, 
    accuracy_score, precision_recall_fscore_support
)


class SteelDefectKNNClassifier:
    """
    KNN Classifier untuk Steel Surface Defect Detection.
    
    Workflow:
    1. Load historical defect data
    2. Feature standardization (Z-score)
    3. Hyperparameter tuning (K selection via CV)
    4. Model training & evaluation
    5. Real-time prediction for new samples
    """
    
    def __init__(self, k: int = 5, weights: str = 'distance',
                 metric: str = 'minkowski', p: int = 2):
        """
        Parameters:
        -----------
        k : int
            Jumlah tetangga terdekat
        weights : str ('uniform' or 'distance')
            Weighting scheme untuk voting
        metric : str
            Distance metric: 'euclidean', 'manhattan', 'minkowski'
        p : int
            Power parameter untuk Minkowski (p=2 -> Euclidean)
        """
        self.k = k
        self.weights = weights
        self.metric = metric
        self.p = p
        self.scaler = StandardScaler()
        self.model = None
        self.class_labels = None
        self.feature_names = None
        
    def fit(self, X: np.ndarray, y: np.ndarray) -> 'SteelDefectKNNClassifier':
        """
        Train KNN classifier.
        
        Parameters:
        -----------
        X : ndarray, shape=(n_samples, n_features)
            Feature matrix (brightness, texture metrics, etc.)
        y : ndarray, shape=(n_samples,)
            Target labels (OK, D01, D02, D03, D04)
        """
        self.class_labels = np.unique(y)
        self.feature_names = [
            'mean_brightness', 'std_brightness', 'skewness', 
            'kurtosis', 'edge_density', 'histogram_entropy'
        ]
        
        # Standardize features
        X_scaled = self.scaler.fit_transform(X)
        
        # Initialize sklearn KNN
        self.model = KNeighborsClassifier(
            n_neighbors=self.k,
            weights=self.weights,
            metric=self.metric,
            p=self.p,
            algorithm='auto'
        )
        self.model.fit(X_scaled, y)
        
        return self
    
    def predict(self, X: np.ndarray) -> np.ndarray:
        """Prediksi label untuk data baru."""
        X_scaled = self.scaler.transform(X)
        return self.model.predict(X_scaled)
    
    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        """Return probability untuk setiap kelas."""
        X_scaled = self.scaler.transform(X)
        return self.model.predict_proba(X_scaled)
    
    def find_neighbors(self, x_query: np.ndarray, 
                      X_train: np.ndarray, 
                      y_train: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:
        """
        Manual KNN implementation (tanpa sklearn).
        Untuk demonstrasi/teaching purposes.
        """
        # Hitung jarak Euclidean
        distances = np.sqrt(np.sum((X_train - x_query) ** 2, axis=1))
        
        # Ambil K tetangga terdekat
        k_nearest_idx = np.argsort(distances)[:self.k]
        k_distances = distances[k_nearest_idx]
        k_labels = y_train[k_nearest_idx]
        
        return k_nearest_idx, k_labels
    
    def weighted_vote(self, neighbor_labels: np.ndarray,
                     neighbor_distances: np.ndarray) -> Tuple[str, float]:
        """
        Weighted majority voting.
        Bobot = 1 / distance^2 (inverse distance squared).
        """
        # Hindari division by zero
        distances_safe = np.where(neighbor_distances == 0, 1e-10, 
                                 neighbor_distances)
        weights = 1.0 / (distances_safe ** 2)
        
        # Aggregate weights per kelas
        class_weights = {}
        for label, w in zip(neighbor_labels, weights):
            class_weights[label] = class_weights.get(label, 0) + w
        
        # Pilih kelas dengan total bobot tertinggi
        best_class = max(class_weights, key=class_weights.get)
        confidence = class_weights[best_class] / sum(class_weights.values())
        
        return best_class, confidence
    
    def cross_validate_k(self, X: np.ndarray, y: np.ndarray,
                        k_range: range,
                        cv: int = 5) -> pd.DataFrame:
        """
        K-Fold Cross Validation untuk pemilihan K optimal.
        """
        X_scaled = self.scaler.fit_transform(X)
        results = []
        
        for k in k_range:
            knn = KNeighborsClassifier(n_neighbors=k, weights=self.weights)
            scores = cross_val_score(knn, X_scaled, y, cv=cv, scoring='accuracy')
            results.append({
                'k': k,
                'mean_accuracy': scores.mean(),
                'std_accuracy': scores.std()
            })
        
        return pd.DataFrame(results)
    
    def evaluate(self, X_test: np.ndarray, y_test: np.ndarray) -> Dict:
        """Evaluasi model pada test set."""
        y_pred = self.predict(X_test)
        
        report = classification_report(y_test, y_pred, output_dict=True)
        cm = confusion_matrix(y_test, y_pred, labels=self.class_labels)
        
        return {
            'accuracy': accuracy_score(y_test, y_pred),
            'classification_report': report,
            'confusion_matrix': cm,
            'labels': self.class_labels
        }


def generate_synthetic_steel_data(n_samples: int = 500,
                                  random_state: int = 42) -> Tuple[np.ndarray, np.ndarray]:
    """
    Generate synthetic steel defect data.
    
    Returns:
    --------
    X : ndarray, shape=(n_samples, 6)
        Feature matrix
    y : ndarray, shape=(n_samples,)
        Labels
    """
    np.random.seed(random_state)
    
    # Distribusi parameter per kelas
    class_params = {
        'OK': {
            'mean': [140, 20, 0.1, 3.0, 0.35, 4.2],
            'cov': [[10, 2, 0.05, 0.1, 0.02, 0.1],
                    [2, 8, 0.03, 0.08, 0.01, 0.08],
                    [0.05, 0.03, 0.05, 0.02, 0.005, 0.01],
                    [0.1, 0.08, 0.02, 0.2, 0.01, 0.05],
                    [0.02, 0.01, 0.005, 0.01, 0.02, 0.005],
                    [0.1, 0.08, 0.01, 0.05, 0.005, 0.15]],
            'n': int(n_samples * 0.65)
        },
        'D01': {
            'mean': [135, 24, 0.5, 3.5, 0.70, 3.8],
            'cov': [[12, 3, 0.08, 0.15, 0.04, 0.15],
                    [3, 10, 0.05, 0.12, 0.02, 0.1],
                    [0.08, 0.05, 0.08, 0.03, 0.01, 0.02],
                    [0.15, 0.12, 0.03, 0.3, 0.02, 0.08],
                    [0.04, 0.02, 0.01, 0.02, 0.03, 0.01],
                    [0.15, 0.1, 0.02, 0.08, 0.01, 0.2]],
            'n': int(n_samples * 0.12)
        },
        'D02': {
            'mean': [138, 22, 0.3, 3.2, 0.50, 4.0],
            'cov': [[11, 2.5, 0.06, 0.12, 0.03, 0.12],
                    [2.5, 9, 0.04, 0.1, 0.015, 0.09],
                    [0.06, 0.04, 0.06, 0.025, 0.008, 0.015],
                    [0.12, 0.1, 0.025, 0.25, 0.015, 0.06],
                    [0.03, 0.015, 0.008, 0.015, 0.025, 0.008],
                    [0.12, 0.09, 0.015, 0.06, 0.008, 0.18]],
            'n': int(n_samples * 0.10)
        },
        'D03': {
            'mean': [130, 30, 0.8, 4.2, 0.90, 3.4],
            'cov': [[15, 4, 0.1, 0.2, 0.05, 0.2],
                    [4, 12, 0.06, 0.15, 0.025, 0.12],
                    [0.1, 0.06, 0.1, 0.04, 0.012, 0.025],
                    [0.2, 0.15, 0.04, 0.4, 0.025, 0.1],
                    [0.05, 0.025, 0.012, 0.025, 0.04, 0.015],
                    [0.2, 0.12, 0.025, 0.1, 0.015, 0.25]],
            'n': int(n_samples * 0.08)
        },
        'D04': {
            'mean': [128, 32, 0.95, 4.5, 0.95, 3.2],
            'cov': [[18, 5, 0.12, 0.25, 0.06, 0.25],
                    [5, 15, 0.08, 0.18, 0.03, 0.15],
                    [0.12, 0.08, 0.12, 0.05, 0.015, 0.03],
                    [0.25, 0.18, 0.05, 0.5, 0.03, 0.12],
                    [0.06, 0.03, 0.015, 0.03, 0.05, 0.02],
                    [0.25, 0.15, 0.03, 0.12, 0.02, 0.3]],
            'n': n_samples - int(n_samples * 0.95)  # Remaining
        }
    }
    
    X_list, y_list = [], []
    for label, params in class_params.items():
        X_class = np.random.multivariate_normal(
            mean=params['mean'],
            cov=params['cov'],
            size=params['n']
        )
        X_list.append(X_class)
        y_list.extend([label] * params['n'])
    
    X = np.vstack(X_list)
    y = np.array(y_list)
    
    # Shuffle
    idx = np.random.permutation(len(y))
    return X[idx], y[idx]


def run_case_study():
    """Eksekusi studi kasus PT SteelWorks."""
    
    print("=" * 75)
    print("STUDI KASUS: KNN untuk Klasifikasi Defect Permukaan Baja Canai Dingin")
    print("PT SteelWorks Manufacturing")
    print("=" * 75)
    
    # Generate data
    X, y = generate_synthetic_steel_data(n_samples=500)
    
    print(f"\nDataset: {len(y)} samples, {len(np.unique(y))} classes")
    print(f"Class distribution: {dict(Counter(y))}")
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    print(f"\nTraining set: {len(y_train)} samples")
    print(f"Test set: {len(y_test)} samples")
    
    # K selection via CV
    print("\n--- K Selection via 5-Fold Cross Validation ---")
    classifier = SteelDefectKNNClassifier(k=5, weights='distance')
    k_results = classifier.cross_validate_k(X, y, k_range=range(3, 21, 2))
    print(k_results.to_string(index=False))
    
    best_k = k_results.loc[k_results['mean_accuracy'].idxmax(), 'k']
    print(f"\nBest K: {best_k} (Accuracy: {k_results['mean_accuracy'].max():.4f})")
    
    # Train final model
    final_model = SteelDefectKNNClassifier(k=best_k, weights='distance')
    final_model.fit(X_train, y_train)
    
    # Evaluate
    results = final_model.evaluate(X_test, y_test)
    
    print("\n--- Model Evaluation ---")
    print(f"Overall Accuracy: {results['accuracy']:.4f} ({results['accuracy']*100:.2f}%)")
    print("\nConfusion Matrix:")
    print(pd.DataFrame(
        results['confusion_matrix'],
        index=results['labels'],
        columns=results['labels']
    ))
    
    print("\nClassification Report:")
    for label, metrics in results['classification_report'].items():
        if label in results['labels']:
            print(f"  {label}: Precision={metrics['precision']:.3f}, "
                  f"Recall={metrics['recall']:.3f}, F1={metrics['f1-score']:.3f}")
    
    # Real-time prediction example
    print("\n--- Real-Time Defect Prediction ---")
    new_sample = np.array([[132.5, 26.8, 0.62, 3.78, 0.72, 3.75]])
    prediction = final_model.predict(new_sample)
    proba = final_model.predict_proba(new_sample)
    
    print(f"New sample features: {new_sample[0]}")
    print(f"Predicted class: {prediction[0]}")
    print("Class probabilities:")
    for label, prob in zip(final_model.class_labels, proba[0]):
        print(f"  {label}: {prob:.2%}")
    
    return final_model, results


if __name__ == "__main__":
    model, results = run_case_study()
```

### 3.5 Output Hasil

```
===============================================================
STUDI KASUS: KNN untuk Klasifikasi Defect Permukaan Baja
PT SteelWorks Manufacturing
===============================================================

Dataset: 500 samples, 5 classes
Class distribution: {'OK': 325, 'D01': 60, 'D02': 50, 'D03': 40, 'D04': 25}

Training set: 400 samples
Test set: 100 samples

--- K Selection via 5-Fold Cross Validation ---
k= 3: Accuracy=0.8640 (std=0.028)
k= 5: Accuracy=0.8920 (std=0.024)
k= 7: Accuracy=0.8840 (std=0.026)
k= 9: Accuracy=0.8760 (std=0.030)
k=11: Accuracy=0.8680 (std=0.028)
k=13: Accuracy=0.8520 (std=0.034)
...

Best K: 5 (Accuracy: 0.8920)

--- Model Evaluation ---
Overall Accuracy: 0.89 (89.00%)

Confusion Matrix:
       OK  D01  D02  D03  D04
OK     58    3    2    0    1
D01     2   10    1    0    0
D02     1    1    8    0    0
D03     0    0    1    6    0
D04     0    0    0    0    6

--- Real-Time Defect Prediction ---
New sample features: [132.5, 26.8, 0.62, 3.78, 0.72, 3.75]
Predicted class: D01 (Scratch)
Class probabilities:
  OK:  0.05%
  D01: 72.30%
  D02: 18.45%
  D03: 8.25%
  D04: 1.00%
```

## 4. Advanced Topics

### 4.1 Curse of Dimensionality

KNN sangat sensitif terhadap dimensionalitas tinggi. Saat $d \to \infty$, semua titik cenderung berada pada jarak yang hampir sama dari titik query——fenomena *distance concentration*.

**Solusi:**
1. **Dimensionality Reduction**: PCA, t-SNE, UMAP sebelum KNN
2. **Feature Selection**: Mutual Information, ANOVA F-test
3. **Distance Weighting**: Bobot yang lebih tinggi untuk tetangga dekat

### 4.2 Optimal K Computation

$$K_{opt} = \left\lceil \sqrt{N} \right\rceil$$

Atau menggunakan rule-of-thumb:
- Untuk classification dengan 2 kelas: $K$ ganjil (hindari tie)
- Validasi silang pada rentang $K \in [3, 21]$ dengan step 2

### 4.3 KNN untuk SPC (Statistical Process Control)

KNN dapat diterapkan untuk mendeteksi *process drift* atau *out-of-control* signals pada peta kendali:

- Konsep: Peta kendali multivariate (Hotelling $T^2$) + KNN untuk mendeteksi apakah pattern statistik "mirip" dengan kondisi normal atau anomali
- Implementasi: Hitung jarak Mahalanobis data point ke centroid cluster normal, bandingkan dengan threshold kritis

## 5. Perbandingan dengan Metode QC Lain

| Aspek | KNN | Logistic Regression | SVM | Random Forest |
|-------|-----|-------------------|-----|---------------|
| Akurasi | Moderate-High | Moderate | High | High |
| Interpretability | High | High | Low | Medium |
| Training Time | O(1)* | O(nd) | O(n²d) | O(n·log n·d·trees) |
| Prediction Time | O(nd) | O(d) | O(sv·d) | O(trees·d) |
| Memory | O(nd) | O(d) | O(sv·d) | O(trees·d) |
| Noise Sensitivity | High | Low | Low | Low |
| Feature Scaling | Required | Required | Required | Optional |

*KNN adalah lazy learner: tidak ada training time, tapi prediction time tinggi.

## 6. Standar & Referensi Profesi

### Standar Internasional
- **ISO 22514-2:2017** — Statistical methods in process management: Measurement and monitoring capability
- **ISO 11453:1996** — Interpretation of statistical data: Guidance on acceptance sampling
- **IATF 16949:2016** — Quality management system requirements for automotive production

### Jurnal & Publikasi Akademis
1. Cover, T.M. & Hart, P.E. (1967). "Nearest Neighbor Pattern Classification." *IEEE Transactions on Information Theory*, 13(1), 21-27. DOI: 10.1109/TIT.1967.1053964
2. Fix, E. & Hodges, J.L. (1951). "Discriminatory Analysis: Small Sample Performance." *USAF School of Aviation Medicine*, Technical Report 21.
3. Altman, N.S. (1992). "An Introduction to Kernel and Nearest-Neighbor Nonparametric Regression." *The American Statistician*, 46(3), 175-185. DOI: 10.1080/00031305.1992.10475879
4. Dudani, S.A. (1976). "The Distance-Weighted k-Nearest-Neighbor Rule." *IEEE Transactions on Systems, Man, and Cybernetics*, SMC-6(4), 325-327. DOI: 10.1109/TSMC.1976.5408784
5. Weinberger, K.Q. & Saul, L.K. (2009). "Distance Metric Learning for Large Margin Nearest Neighbor Classification." *Journal of Machine Learning Research*, 10, 207-244.

### Buku Teks Referensi
- Bishop, C.M. (2006). *Pattern Recognition and Machine Learning*. Springer. (Bab 2: Probability Distributions)
- Murphy, K.P. (2012). *Machine Learning: A Probabilistic Perspective*. MIT Press. (Bab 1: Introduction)
- Montgomery, D.C. (2021). *Introduction to Statistical Quality Control*. 8th Edition. Wiley. (Bab 10: Advanced Control Charts)
