"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Boxes, RotateCcw, Timer, Binary, Cpu, Layers, LineChart } from "lucide-react";

const PILLARS = [
  {
    icon: Factory,
    title: "Perancangan Tata Letak Fasilitas (PTLF)",
    desc: "Optimasi ongkos material handling (MHC) dengan pendekatan From-To Chart kuantitatif, analisis derajat kedekatan ARC, dan algoritma CRAFT.",
    formula: "MHC = \\sum D_{ij} \\times F_{ij} \\times C_{ij}",
    tag: "Tata Letak Pabrik",
  },
  {
    icon: Boxes,
    title: "Supply Chain & Inventory Management",
    desc: "Perhitungan ukuran pesanan ekonomis (EOQ), reorder point (ROP), dan penentuan safety stock untuk meminimalkan total inventory cost.",
    formula: "EOQ = \\sqrt{\\frac{2DS}{H}}",
    tag: "Rantai Pasok",
  },
  {
    icon: RotateCcw,
    title: "Lean Six Sigma & Quality Control",
    desc: "Framework DMAIC menyeluruh, diagram sebab-akibat Ishikawa (5M+1E), FMEA, dan peta kendali SPC (X-bar & R) untuk perbaikan kualitas.",
    formula: "DPMO = \\frac{D}{N \\times O} \\times 10^6",
    tag: "Manajemen Kualitas",
  },
  {
    icon: Timer,
    title: "Ergonomi & Work Design",
    desc: "Pengukuran waktu kerja baku dengan jam henti (Westinghouse Rating & Allowance), evaluasi biomekanika postur kerja REBA dan RULA.",
    formula: "Wb = Wn \\times \\frac{100\\%}{100\\% - \\%\\text{Allowance}}",
    tag: "Ergonomi Industri",
  },
];

const SECONDARY_FEATURES = [
  {
    icon: Binary,
    title: "Riset Operasi & Linear Programming",
    desc: "Pemecahan model matematis optimasi fungsi tujuan maksimasi profit atau minimasi biaya.",
  },
  {
    icon: Cpu,
    title: "Multi-Model AI Selector",
    desc: "Dukungan TI-Optima Pro untuk analisis mendalam dan TI-Lean Speed untuk ringkasan cepat.",
  },
  {
    icon: Layers,
    title: "Dokumen & Formula LaTeX Otomatis",
    desc: "Setiap langkah matematis dirender dengan standar tipografi ilmiah jurnal internasional.",
  },
  {
    icon: LineChart,
    title: "Simulasi Sistem Industri Diskrit",
    desc: "Pemodelan antrian fasilitas dan analisis utilitas mesin lini perakitan manufaktur.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border/40 w-full">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold text-accent tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
          Domain Spesifik Teknik Industri
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mt-4 tracking-tight">
          Empat Pilar Utama Rekayasa Sistem Industri
        </h2>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
          Bukan sekadar chatbot generik — RuangTI memahami standar kurikulum, metodologi formal, dan formulasi eksak Teknik Industri.
        </p>
      </div>

      {/* 4 Main Core Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12">
        {PILLARS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 sm:p-7 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-all group flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Code Snippet Formula Box */}
              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-border/40 font-mono text-[11px] sm:text-xs text-text-primary bg-canvas/70 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-border/50 flex items-center justify-between flex-wrap gap-1">
                <span className="text-text-secondary text-[10px] sm:text-[11px]">Formula Acuan:</span>
                <span className="font-semibold text-accent tracking-wide">{p.formula}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Secondary Feature Grid */}
      <div id="solvers" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {SECONDARY_FEATURES.map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-surface/50 border border-border hover:border-accent/30 transition-all flex flex-col gap-2"
            >
              <ItemIcon size={18} className="text-accent" />
              <h4 className="font-display text-sm font-bold text-text-primary">
                {item.title}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
