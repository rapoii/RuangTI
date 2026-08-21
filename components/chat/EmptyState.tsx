"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, PenLine, GraduationCap, Code2, Factory, LineChart, Lightbulb, X, ArrowRight } from "lucide-react";

interface EmptyStateProps {
  onSelectPrompt: (prompt: string) => void;
  userName?: string;
}

interface PromptCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: { title: string; prompt: string }[];
}

const ACTION_CATEGORIES: PromptCategory[] = [
  {
    id: "analisis",
    label: "Riset & Analisis",
    icon: <LineChart className="w-3.5 h-3.5 text-blue-500" />,
    items: [
      {
        title: "Perbandingan Lean Six Sigma vs Kaizen",
        prompt: "Lakukan analisis komparatif mendalam antara metode Six Sigma DMAIC dengan Lean Kaizen dalam mereduksi defect rate di lini produksi manufaktur.",
      },
      {
        title: "Penerapan FMEA (Failure Mode and Effects Analysis)",
        prompt: "Bagaimana tahapan menyusun tabel AIAG-VDA FMEA untuk mengidentifikasi dan memitigasi risiko kegagalan proses perakitan?",
      },
      {
        title: "Analisis Value Stream Mapping (VSM)",
        prompt: "Jelaskan langkah pembuatan Current State Map dan Future State Map pada VSM untuk mengeliminasi 8 pemborosan (Muda).",
      },
      {
        title: "Audit Statistical Process Control (SPC)",
        prompt: "Bagaimana cara menentukan control chart yang tepat (X-bar R, Individual Moving Range, P-chart, C-chart) berdasarkan karakteristik data proses?",
      },
    ],
  },
  {
    id: "optimasi",
    label: "Optimasi Pabrik",
    icon: <Factory className="w-3.5 h-3.5 text-accent" />,
    items: [
      {
        title: "Perancangan Tata Letak Fasilitas (PTLF)",
        prompt: "Bagaimana tahapan sistematis menyusun From-To Chart, Activity Relationship Chart (ARC), dan Area Allocation Diagram (AAD) untuk pabrik baru?",
      },
      {
        title: "Line Balancing & Efisiensi Lintasan",
        prompt: "Jelaskan perbandingan algoritma Ranked Positional Weight (Helgeson-Birnie), Kilbridge-Wester, dan Moodie-Young dalam menyeimbangkan lini produksi.",
      },
      {
        title: "Simulasi Sistem Diskrit Pabrik",
        prompt: "Bagaimana merancang model simulasi antrian dan aliran material manufaktur untuk mengidentifikasi stasiun kerja bottleneck?",
      },
      {
        title: "Penerapan Sistem Total Productive Maintenance (TPM)",
        prompt: "Bagaimana tahapan mengukur Overall Equipment Effectiveness (OEE) dan menerapkan 8 pilar TPM untuk meminimalkan unplaned downtime?",
      },
    ],
  },
  {
    id: "kode",
    label: "Formula & Kode",
    icon: <Code2 className="w-3.5 h-3.5 text-emerald-500" />,
    items: [
      {
        title: "Python Solver Model Persediaan EOQ & ROP",
        prompt: "Buatkan formulasi matematis dan implementasi script Python lengkap dengan SciPy/PuLP untuk optimasi Economic Order Quantity (EOQ), Safety Stock, dan Reorder Point (ROP).",
      },
      {
        title: "Formulasi Linear Programming dengan PuLP",
        prompt: "Tuliskan kode Python menggunakan library PuLP untuk menyelesaikan masalah maksimasi profit bauran produk dengan batasan kapasitas mesin dan bahan baku.",
      },
      {
        title: "Perhitungan Gage R&R ANOVA di Python",
        prompt: "Buatkan skrip analisis Measurement System Analysis (MSA) metode ANOVA Gage R&R menggunakan Python (pandas dan statsmodels).",
      },
      {
        title: "Algoritma Metaheuristik Vehicle Routing Problem (VRP)",
        prompt: "Jelaskan struktur kode Genetic Algorithm (GA) atau Simulated Annealing dalam menyelesaikan masalah rute distribusi Capacitated VRP.",
      },
    ],
  },
  {
    id: "belajar",
    label: "Konsep & Ujian",
    icon: <GraduationCap className="w-3.5 h-3.5 text-purple-500" />,
    items: [
      {
        title: "Riset Operasi: Simpleks & Dualitas",
        prompt: "Jelaskan konsep dasar Riset Operasi: pembentukan model matematika, primal-dual relationship, interpretasi shadow price, dan metode Simpleks.",
      },
      {
        title: "Ergonomi & Pengukuran Kerja Jam Henti",
        prompt: "Bagaimana cara menentukan jumlah siklus pengamatan, rating factor (Westinghouse), dan allowance untuk menghitung Waktu Baku (Standard Time)?",
      },
      {
        title: "Manajemen Rantai Pasok (Bullwhip Effect)",
        prompt: "Jelaskan fenomena Bullwhip Effect dalam Supply Chain Management: faktor penyebab, dampak operasional, dan strategi mitigasinya (VMI, CPFR).",
      },
      {
        title: "Desain Eksperimen Metode Taguchi",
        prompt: "Bagaimana tahapan merancang Orthogonal Array dan menganalisis Signal-to-Noise Ratio (S/N Ratio) untuk optimasi parameter proses?",
      },
    ],
  },
  {
    id: "ide",
    label: "Topik Skripsi TI",
    icon: <Lightbulb className="w-3.5 h-3.5 text-amber-500" />,
    items: [
      {
        title: "AI & Machine Learning dalam Supply Chain",
        prompt: "Berikan 5 ide judul dan metodologi skripsi Teknik Industri yang mengintegrasikan Machine Learning untuk demand forecasting dan dynamic inventory optimization.",
      },
      {
        title: "Smart Manufacturing & Digital Twin",
        prompt: "Rekomendasikan framework penelitian tugas akhir implementasi IoT Sensor dan Digital Twin untuk predictive maintenance lini manufaktur.",
      },
      {
        title: "Circular Economy & Green Supply Chain",
        prompt: "Bagaimana menyusun rancangan riset skripsi optimasi closed-loop supply chain dan reverse logistics untuk industri manufaktur berkelanjutan?",
      },
      {
        title: "Ergonomi Kognitif & Human-AI Collaboration",
        prompt: "Berikan ide penelitian evaluasi beban kerja mental (NASA-TLX) pada operator di lini manufaktur terotomasi dengan kolaborasi robot (Cobot).",
      },
    ],
  },
];

const GREETING_COLLECTION = {
  morning: [
    { title1: "Mulai aktivitas pagi,", title2: "ada yang bisa dibantu?" },
    { title1: "Pagi yang produktif,", title2: "siap optimasi sistem hari ini?" },
    { title1: "Selamat pagi,", title2: "mau eksplorasi riset apa?" },
  ],
  afternoon: [
    { title1: "Selamat siang,", title2: "mau eksplorasi apa hari ini?" },
    { title1: "Lanjutkan progres siang ini,", title2: "ada kendala formula atau data?" },
    { title1: "Semangat siang,", title2: "siap selesaikan analisis Anda?" },
  ],
  evening: [
    { title1: "Selamat sore,", title2: "siap optimasi riset Anda?" },
    { title1: "Menjelang petang,", title2: "mau evaluasi model atau simulasi?" },
    { title1: "Sore yang tenang,", title2: "ada topik teknik yang mau dibahas?" },
  ],
  night: [
    { title1: "Selamat malam,", title2: "fokus riset malam ini?" },
    { title1: "Waktu riset tenang,", title2: "mau bedah jurnal atau optimasi?" },
    { title1: "Eksplorasi malam,", title2: "ada proyek yang ingin diselesaikan?" },
  ],
  lateNight: [
    { title1: "Ngobrol di bawah", title2: "sinar bulan?" },
    { title1: "Lembur dini hari,", title2: "butuh teman diskusi riset?" },
    { title1: "Di keheningan malam,", title2: "ada problem komputasi yang rumit?" },
    { title1: "Ditemani secangkir kopi,", title2: "mau eksplorasi ide apa?" },
  ],
};

export function EmptyState({ onSelectPrompt, userName }: EmptyStateProps) {
  const [greeting, setGreeting] = useState<{ title1: string; title2: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<PromptCategory | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    let pool = GREETING_COLLECTION.lateNight;

    if (hour >= 5 && hour < 11) {
      pool = GREETING_COLLECTION.morning;
    } else if (hour >= 11 && hour < 15) {
      pool = GREETING_COLLECTION.afternoon;
    } else if (hour >= 15 && hour < 18) {
      pool = GREETING_COLLECTION.evening;
    } else if (hour >= 18 && hour < 23) {
      pool = GREETING_COLLECTION.night;
    }

    // Ambil sapaan acak (dynamic rotation ala Claude)
    const randomIndex = Math.floor(Math.random() * pool.length);
    setGreeting(pool[randomIndex]);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-4 sm:py-10 max-w-2xl mx-auto w-full select-none px-2 text-center">
      {/* Claude-style Clean Minimalist Greeting (Centered) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="w-full flex flex-col items-center justify-center gap-3 sm:gap-3.5 mb-6 sm:mb-8 text-center"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center shrink-0 shadow-2xs">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="text-center">
          <h1 className="font-display font-medium text-2xl sm:text-3xl text-text-primary tracking-tight leading-tight">
            {greeting ? greeting.title1 : "Selamat datang,"}
            <br />
            <span className="text-text-secondary font-normal font-sans text-xl sm:text-2xl">
              {greeting ? greeting.title2 : "ada yang bisa dibantu hari ini?"}
            </span>
          </h1>
        </div>
      </motion.div>

      {/* Suggestion Action Chips (Centered Pills) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
        className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pb-2"
      >
        {ACTION_CATEGORIES.map((cat, index) => {
          const isSelected = activeCategory?.id === cat.id;
          return (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(isSelected ? null : cat)}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: index * 0.03 }}
              className={`group px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full border transition-all duration-150 flex items-center gap-2 text-xs font-medium shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer ${
                isSelected
                  ? "bg-accent/10 border-accent text-accent shadow-sm"
                  : "bg-surface hover:bg-surface-hover border-border/80 text-text-primary"
              }`}
            >
              <span className="shrink-0 transition-transform duration-150 group-hover:scale-110">
                {cat.icon}
              </span>
              <span className={isSelected ? "text-accent font-semibold" : "text-text-secondary group-hover:text-text-primary transition-colors"}>
                {cat.label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Claude-style Popup Sheet/Menu for Prompt Suggestions */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="w-full mt-3 rounded-2xl bg-surface border border-border/90 shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 border-b border-border/60 bg-surface-subtle/50">
              <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                {activeCategory.icon}
                <span>{activeCategory.label}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveCategory(null)}
                className="w-6 h-6 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
                aria-label="Tutup menu saran"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Prompt List Items */}
            <div className="divide-y divide-border/60">
              {activeCategory.items.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onSelectPrompt(item.prompt);
                    setActiveCategory(null);
                  }}
                  className="w-full p-3 sm:p-3.5 text-left hover:bg-surface-hover/80 active:bg-surface transition-colors flex items-center justify-between gap-3 group cursor-pointer"
                >
                  <span className="text-xs sm:text-xs font-medium text-text-primary group-hover:text-accent transition-colors line-clamp-1">
                    {item.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-tertiary group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
