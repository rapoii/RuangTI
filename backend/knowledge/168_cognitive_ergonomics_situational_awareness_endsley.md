# Module 168: Cognitive Ergonomics & Situation Awareness (Endsley)

## Conceptual Framework
Situation Awareness (SA) is the cornerstone of cognitive ergonomics in dynamic industrial systems. Endsley's (1995) model defines SA as "the perception of elements in the environment within a volume of time and space, the comprehension of their meaning, and the projection of their status in the near future." SA mediates between system state information and operator decision quality: two operators facing identical displays may construct radically different mental models, producing divergent responses during abnormal transients.

### The Three Levels of SA
1. **Level 1 – Perception:** Monitoring, cue detection, and recognition of system state variables. Bottlenecks: attentional narrowing, keyhole effects in filtered displays.
2. **Level 2 – Comprehension:** Integration of Level 1 data into meaningful patterns; understanding significance relative to goals (e.g., recognizing a pressure-temperature signature as imminent pump cavitation).
3. **Level 3 – Projection:** Mental simulation of future states based on current comprehension and system dynamics — the highest cognitive load level.

$$SA_{total} = f(P_{perception}, C_{comprehension}, P_{projection})$$

SA is *dynamic*: it decays with interruption and must be actively rebuilt after task switching or shift handover.

## Mathematical Modeling of SA Reliability
The probability of correct decision-making given SA level follows a logistic response model:

$$P(CD \mid SA_k) = \frac{e^{\beta_k SA_k}}{1 + e^{\beta_k SA_k}}, \qquad P_{CD}^{total} = \prod_{k=1}^{3} P(CD \mid SA_k)$$

where $\beta_k$ captures the sensitivity parameter for SA level $k$. Under automation, Endsley (2023) documents systematic degradation of Levels 2–3 via *out-of-the-loop unfamiliarity* — operators monitoring rather than acting lose comprehension calibration, extending detection latencies by 2–4× in empirical studies. Countermeasures include query-by-exception displays and periodic operator engagement tasks that keep projection skills active.

## Measurement Techniques
- **SAGAT (Situation Awareness Global Assessment Technique):** Simulation freeze-probe comparing operator recall to ground truth:
  $$SA_{score} = \sum_{i=1}^{n} w_i \cdot \mathbb{I}(response_i == truth_i)$$
  Validity rests on the assumption that SA is goal-directed and stored in working memory/long-term working memory.
- **SPAM (Situation Present Assessment Method):** Real-time probe response latency as an online index of SA availability without freezing the simulation.
- **Physiological correlates:** Eye-tracking area-of-focus entropy and pupil diameter as implicit Level 1 indicators.

## Industrial Applications & Recent Findings
Control room design requires balancing information density against salience: ecological interface formats demonstrably improve Level 2 SA during abnormal transients versus traditional mimic P&ID displays (Applied Ergonomics, 2024). Distributed SA extends the construct to teams — each member holds compatible-but-different SA elements, making shared mental models critical for nuclear, aviation, and process industries; team SA measurement therefore requires networked probes across roles rather than individual SAGAT alone. In AI-assisted operations, SA-based design principles guide transparency requirements for human-AI teaming: automation should expose its intent (projection) not merely its output; goal-directed task analysis remains the front-end method, decomposing operational goals into SA requirements per level before any display decision.

## Related Modules
- **Module 172 (Ecological Interface Design & SRK)** — display theory operationalizing SA support.
- **Module 169 (Mental Workload NASA-TLX/HRV)** — workload-SA tradeoff under overload/underload.
- **Module 171 (HEART/THERP)** — HEP quantification downstream of SA failures.

## References
- Endsley, M. R. (1995). Toward a theory of situation awareness in dynamic systems. *Human Factors*, 37(1), 32–64.
- Endsley, M. R. (2023). *Designing for Situation Awareness: An Approach to User-Centered Design* (3rd ed.). CRC Press.
- Salmon, P. M., et al. (2024). Distributed situation awareness in complex sociotechnical systems: A systematic review. *Applied Ergonomics*, 115, 104162.
- Wickens, C. D. (2008). Situation awareness: Review of Mica Endsley's 1995 articles on SA theory. *Human Factors*, 50(3), 397–403.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
