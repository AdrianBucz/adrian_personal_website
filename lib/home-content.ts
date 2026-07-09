import type { FeaturedProject, SkillCategory } from "@/types/home";

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Nonblocking DDR4 DRAM Controller",
    description:
      "Designed and verified a nonblocking DRAM controller capable of servicing multiple memory requests and improving overall memory throughput. The project emphasized efficient request scheduling, concurrency, and memory subsystem performance within a larger hardware design.",
    imagePlaceholderLabel: "DRAM Controller Architecture Diagram",
    imageSrc: "/images/Screenshot%202025-11-17%20111553.png",
    imageAlt: "Nonblocking DDR4 DRAM controller project screenshot",
    technologies: [
      "SystemVerilog",
      "Digital Design",
      "Computer Architecture",
      "Memory Systems",
    ],
    href: "/projects",
  },
  {
    title: "Dual-Core RISC-V Processor",
    description:
      "Designed and implemented a cache-coherent dual-core RISC-V processor from scratch with a focus on scalable processor architecture, RTL design, and multicore communication. The project explored cache coherence, shared memory systems, and modular hardware design techniques.",
    imagePlaceholderLabel: "Dual-Core RISC-V Architecture Diagram",
    imageSrc: "/images/Screenshot%202024-12-07%20171832.png",
    imageAlt: "Dual-core RISC-V processor project screenshot",
    technologies: ["SystemVerilog", "RISC-V", "RTL Design", "Cache Coherence"],
    href: "/projects",
  },
  {
    title: "Waiting Instruction Buffer (WIB)",
    description:
      "Implemented and evaluated the Waiting Instruction Buffer (WIB) microarchitectural optimization within the gem5 simulator to reproduce and validate the performance improvements reported in the original research paper. The project involved modifying an out-of-order processor model, analyzing pipeline behavior, and comparing experimental results against published data.",
    imagePlaceholderLabel: "WIB Pipeline Diagram",
    imageSrc: "/images/Picture1.png",
    imageAlt: "Waiting Instruction Buffer project screenshot",
    technologies: ["C++", "gem5", "Computer Architecture", "Microarchitecture Research"],
    href: "/projects",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "SystemVerilog", "Verilog", "MATLAB"],
  },
  {
    title: "Digital Design",
    skills: [
      "RTL Design",
      "FPGA Development",
      "Finite State Machines",
      "Processor Design",
      "Memory Systems",
      "PPA Optimization"
    ],
  },
  {
    title: "Verification",
    skills: [
      "Testbench Development",
      "Waveform Analysis",
      "Circuit Simulation",
      "Debugging",
    ],
  },
  {
    title: "Computer Architecture",
    skills: [
      "OoO Processor Architecture",
      "Cache Hierarchies",
      "Pipeline Design",
      "Branch Prediction",
      "Memory Controllers",
      "Performance Analysis",
    ],
  },
  {
    title: "Tools",
    skills: ["Vivado", "Quartus", "Git", "Linux", "VS Code", "QuestaSim"],
  },
];
