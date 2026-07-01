import type { FeaturedProject, SkillCategory } from "@/types/home";

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Nonblocking DRAM Controller",
    description:
      "Designed and simulated a nonblocking DRAM controller capable of servicing multiple outstanding memory requests while optimizing latency and bandwidth for a larger system.",
    href: "/projects",
  },
  {
    title: "MOS6502 Processor",
    description:
      "Designed and verified a multicycle implementation of the classic MOS6502 processor as part of Purdue's System-on-Chip Ecosystem, emphasizing modular RTL design and hardware validation.",
    href: "/projects",
  },
  {
    title: "Reliable Data Transmission Protocol",
    description:
      "Developed and optimized a reliable data transmission protocol using a network emulator, implementing retransmission, acknowledgments, and performance improvements while exploring communication system design.",
    href: "/projects",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C++", "Python", "SystemVerilog", "Verilog", "Java", "C"],
  },
  {
    title: "Digital Design",
    skills: [
      "RTL Design",
      "FPGA Development",
      "Finite State Machines",
      "Processor Design",
      "Memory Systems",
    ],
  },
  {
    title: "Verification",
    skills: [
      "UVM",
      "Testbench Development",
      "Functional Verification",
      "Simulation",
      "Debugging",
    ],
  },
  {
    title: "Computer Architecture",
    skills: [
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
