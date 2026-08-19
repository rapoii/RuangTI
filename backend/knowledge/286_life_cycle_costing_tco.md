# Module 286: Total Cost of Ownership (TCO) & Strategic Procurement Analytics

## Overview
Holistic procurement cost modeling beyond purchase price: Acquisition costs, operating and maintenance expenditures, downtime losses, spare parts inventory carrying costs, and end-of-life decommissioning residual value (ISO 15686-5 standard).

## Mathematical Formulation
$$\text{TCO} = C_{\text{acquisition}} + \sum_{t=1}^N \dfrac{C_{\text{energy}, t} + C_{\text{maint}, t} + C_{\text{downtime}, t}}{(1 + r)^t} - \dfrac{S_N}{(1 + r)^N}$$
$$\text{TCO Sensitivity Gradient} = \nabla_{\mathbf{p}} \text{TCO} = \left[ \dfrac{\partial \text{TCO}}{\partial C_{\text{acquisition}}}, \dfrac{\partial \text{TCO}}{\partial C_{\text{energy}}}, \dots \right]$$

## Industrial Case Study
Evaluasi TCO pengadaan 16 unit kompresor udara sentrifugal membuktikan unit dengan harga awal lebih mahal 15% justru menghemat USD 420.000 selama 10 tahun pemakaian.

## References
1. Ellram, L. M. (1995). Total cost of ownership: An analysis approach for purchasing. Journal of Business Logistics.
2. International Journal of Production Economics (2024).
