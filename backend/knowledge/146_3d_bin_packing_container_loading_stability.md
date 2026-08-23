# Module 146: Axle Load Distribution Optimization & Center of Gravity Cargo Securing (EN 12195)

## Conceptual Framework
Optimizing the 3D placement of heavy industrial freight inside intermodal containers and semi-trailers requires satisfying three coupled constraint families simultaneously: (1) **legal road axle load limits**, (2) **vertical/lateral Center of Gravity (CoG) envelopes**, and (3) **cargo securing forces** against longitudinal/lateral/vertical accelerations per EN 12195-1. This problem sits at the intersection of 3D bin packing (geometric feasibility), statics (load distribution), and transport safety regulation. Violations manifest as over-axle fines, rollover accidents on curves, or cargo shift under emergency braking — a dominant root cause of heavy-truck incidents. Modern solutions couple CAD-level palletization with physics-based load verification before dispatch: the packing optimizer proposes placements, then a statics verifier recomputes axle reactions and securing margins — only plans passing both gates are released to the dock.

## Mathematical Formulation
### Axle Load Balance
For $n$ cargo items with weights $w_i$ placed at longitudinal positions $x_i$ (from rear axle reference) on wheelbase $L_{wb}$:

$$R_{\text{front}} = \sum_{i=1}^n \frac{w_i\,(L_{wb} - x_i)}{L_{wb}} \le R_{\text{front, legal}}, \qquad R_{\text{rear}} = \sum_{i=1}^n \frac{w_i\, x_i}{L_{wb}} \le R_{\text{rear, legal}}$$

### Center of Gravity Envelope
The combined CoG height must satisfy the lateral rollover criterion:

$$h_{CoG} = \frac{\sum_i w_i z_i}{\sum_i w_i} \le h_{max}, \qquad \text{rollover margin: } \tan\theta_{roll} = \frac{B/2 - |y_{CoG}|}{h_{CoG}} > a_y/g$$

with track width $B$, lateral acceleration demand $a_y$, and gravity $g$. Lateral offset $|y_{CoG}|$ is typically limited to $\pm 5\%$ of $B$.

### EN 12195-1 Longitudinal Restraint Force
Securing capacity must resist the standardized acceleration coefficient $c_x = 0.8$ (forward):

$$F_{\text{securing}} \ge m\, g\,(c_x - \mu\, c_z)$$

where $\mu$ is the friction coefficient between cargo and deck ($\mu = 0.3$ sawn wood–smooth steel; $0.6$ anti-slip mat) and $c_z = 1.0$ vertical dynamic factor. Lashing devices contribute $F_{TTF} = n \cdot k \cdot SF \cdot \sin\alpha$ for $n$ lashings with tension force $SF$ at angle $\alpha$.

## Solution Methods
- **Mixed-Integer Programming** with moment balance linearization: item position variables discretized to slot grid; axle loads become linear functions of assignment binaries.
- **Heuristic constructive + local search:** heaviest-lowest-first placement followed by swap/move operators minimizing CoG deviation.
- **Multi-objective GA:** simultaneous optimization of volume utilization, axle compliance, and lashing cost; the Pareto front exposes the utilization-versus-compliance tradeoff hidden by single-objective formulations.
- **Physics simulation validation:** quasi-static tilt-table and braking deceleration checks post-placement.

## Industrial Applications
- Steel coil transport: 28-ton coil placement on 40-ft trailers preventing over-axle penalties on Indonesian toll corridors. With unequal coils ($w_1=18t$, $w_2=10t$), the heavier coil shifts forward until the $R_{front}/R_{rear}$ ratio approaches its legal limit, then the EN 12195 lashing plan is certified.
- Paper reels & machinery export stuffing in ISO containers with IMO/CTU packing code compliance.
- Project cargo engineering reviews (break-bulk) with certified stowage plans.
- Automated load planning software integration with WMS/TMS in 4PL control towers.

## Related Modules
- **Module 114 (2E-VRP)** — downstream routing once loading plans are feasible.
- **Module 224 (AGV fleet simulation)** — automated dock loading operations.
- Module on Facility Layout & Material Handling — palletization upstream.

## References
1. EN 12195-1:2010. Load restraining on road vehicles – Safety – Part 1: Calculation of securing forces. CEN.
2. IMO/ILO/UNECE. (2015). *Code of Practice for Packing of Cargo Transport Units (CTU Code)*.
3. Bortolini, M., et al. (2024). Load planning for road freight transport integrating axle load constraints and cargo securing requirements. *Transportation Research Part E*, 191, 104077.
4. Junqueira, L., Morabito, R., & Yamashita, D. S. (2023). Three-dimensional container loading models considering weight distribution and static stability. *Computers & Operations Research*, 152, 106152.
