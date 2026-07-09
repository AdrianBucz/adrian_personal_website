import type { FeaturedProjectCaseStudy, StarsProject } from "@/types/projects";

export const featuredProjects: FeaturedProjectCaseStudy[] = [
  {
    id: "dram-controller",
    shortLabel: "DRAM Controller",
    title: "Nonblocking DRAM Controller",
    whatItWas:
      "Designed and verified a nonblocking DDR4 DRAM controller capable of scheduling multiple memory requests to improve memory system throughput. The controller was connected to an AI accelerator system through an AXI bus.",
    whyItWasBuilt:
      "The DRAM controller was necessary to Purdue's SoCET AI Hardware Team for two purposes. The current system at the time used on-chip SRAM for main memory. For the future scaling of the project, it was apparent that off-chip DRAM would be necessary to allow more parameters and compute area. The controller provided an interface for future iterations of the project to connect to DRAM at highbandwidth. Additionally, the code for the controller can be used by the team to simulate realistic DRAM access times and behavior post-synthesis.",
    responsibilities: [
      "Designed RTL diagrams to represent components in the system.",
      "Implemented various modules in the related to DRAM command scheduling.",
      "Verified individual modules, wrote a UVM-like testbench to verify and benchmark the top level controller.",
    ],
    engineeringChallenges: [
      "The controller needed to run at ~700 MHz in post-synthesis testing, the area available was also limited.",
      "Ensured the module code for the controller was neatly parameterized for different queue depths and DRAM configurations.",
      "The JEDEC DDR4 protocol manual was sometimes difficult to understand.",
    ],
    keyAccomplishments: [
      "The non-blocking controller acheieved an average speedup of 4x over the previous iteration of the controller.",
      "Total coverage for modules was around 97%, CRV was a common strategy for verification.",
      "The controller was tested against a Micron DRAM model with no errors.",
    ],
    technologies: ["SystemVerilog", "Computer Architecture", "Digital Design", "Memory Systems", "RTL"],
    imagePlaceholderLabel: "DRAM Controller Block Diagram",
  },
  {
    id: "dual-core-riscv",
    shortLabel: "Dual-Core RISC-V",
    title: "Dual-Core RISC-V Processor",
    whatItWas:
      "Implemented and verified a cache-coherent dual-core RISC-V processor using System Verilog.",
    whyItWasBuilt:
      "This was an academic project that emphasized core ideas in computer architecture. This project helped me learn about instruction sets, pipelining, branch prediction, cache-coherence, shared memory, and atomic instructions.",
    responsibilities: [
      "Designed RTL diagrams for a RISC-V processor based on instructor recommendations.",
      "Implemented every part of the processor from scratch in system verilog.",
      "Verified and benchmarked the processor in simulation and FPGA testing.",
    ],
    engineeringChallenges: [
      "Implementing hardware to maintain cache coherence with the MSI protocol.",
      "Clock frequncy requirements ensuring that the microarchitecture was effectively implemented.",
      "Debugging dual-core assembly programs from waveforms and memory dumps.",
    ],
    keyAccomplishments: [
      "Delivered a working dual-core processor architecture with coherent shared memory behavior.",
      "Established a clear RTL hierarchy that supports expansion.",
      "Improved verification confidence for multicore interactions and memory consistency.",
    ],
    technologies: ["SystemVerilog", "RISC-V", "RTL", "Computer Architecture", "FPGA"],
    imagePlaceholderLabel: "Dual-Core Processor Architecture",
  },
  {
    id: "writeback-instruction-buffer",
    shortLabel: "Waiting Instruction Buffer",
    title: "Waiting Instruction Buffer (WIB)",
    whatItWas:
      "Reproduced the results of the popular paper “A Large, Fast Instruction Window for Tolerating Cache Misses” in the GEM5 cycle accurate simulator. The paper is centered on a hardware optimization (WIB) that sits next to the issue queue (IQ) of an OoO processor. In short, if a load misses in the L1 cache, the IQ sends all instructions dependent on that load to the WIB. In the meantime, the IQ is filled with more instructions. This interaction allows the IQ operate more efficiently without the dependent instructions clogging it. Once the load returns, the WIB wakes up the instructions it contains and they are reinserted to the IQ. The paper dicusses the nuances of making the WIB so it does not contribute to critical paths and only adds a modest amount of area. The process to insert and remove from the WIB is also convoluted by hardware limitations.",
    whyItWasBuilt:
      "This was an academic project in Purdue's graduate computer architecture course. It gave me an opportunity to deeply understand OoO CPU design and cycle accurate simulators. I was challenged by both of these aspects, and I am happy to say I was sucessful in reproducing the WIB in simulation.",
    responsibilities: [
      "Wrote ~800 lines of C++ in the GEM5 O3 CPU model.",
      "Justified how the code in the simulator was an accurate model of the WIB.",
      "Ran benchmarks to observe normal O3 metrics in comparison to WIBs of several sizes.",
    ],
    engineeringChallenges: [
      "Keeping simulator efficiency high while adding the WIB. Given the size of O3 and the server we were running it on, an inefficient implementation of the WIB would cause simulation times to explode and the project to never be complete.",
      "The WIB is primarily an issue queue optimization, but its implementation caused unexpected issues in the O3 memory units. Dubugging across such a large codebase was challenging.",
      "It was difficult to tell if the WIB implementation in GEM5 was staying true to the hardware techniques described in the paper.",
    ],
    keyAccomplishments: [
      "Delivered a functional WIB implementation integrated into GEM5.",
      "Generated data directly comparing the performance of the WIB to normal O3. IPC was the primary metric, but it was neat to see how the WIB's performance varied greatly dependent on the workload.",
      "Strengthened my confidence in understanding advanced optimizations in digital hardware.",
    ],
    technologies: ["C++", "GEM5", "Computer Architecture", "Microarchitecture Research", "Performance Analysis"],
    imagePlaceholderLabel: "Pipeline Diagram",
  },
];

export const starsProjects: StarsProject[] = [
  {
    id: "mos6502",
    shortLabel: "MOS6502",
    title: "MOS6502 Processor",
    summary:
      "This project was completed the summer after my freshman year of college. It is awesome to me because it is the first CPU I contributed to implementing. Additionally, the MOS6502 is what powered some of the earliest Apple computers. Technically, this project was fun becuase the team had an ISA spec sheet and an old top level RTL diagram to start with. We used these resources the implement the 6502 ISA on a CPU with timing true to the original design. The 6502 was originally design with hand drawing techniques and some different technologies for state holding elements. Designing around this old technology was another one of the many cool parts of the project. After being manufactured, this project was successfully set up on a breadboard to demonstate to future STARS students.",
    technologies: ["SystemVerilog", "RTL", "Computer Architecture", "Digital Design", "Cadence Tools"],
    imagePlaceholderLabel: "MOS6502 Architecture Diagram",
  },
  {
    id: "snake-game",
    shortLabel: "Snake Game",
    title: "Snake Game ASIC",
    summary:
      "The snake game project was the first project I mentored as a part of STARS. My role for this project was primarily helping a team of less experienced students sucessfully design and impelment the project. Although, I did the high level RTL design for the screen interface for the game. Given the manufactured board containig the project, users can attach buttons and an LCD screen to the pins and play the snake game on the screen. The game logic was an ASIC implementation that handled different game modes, colors, and high scores.",
    technologies: ["SystemVerilog", "ASIC Design", "VCS", "FPGA"],
    imagePlaceholderLabel: "Snake Game Screenshot",
  },
  {
    id: "graphing-calculator",
    shortLabel: "Graphing Calculator",
    title: "Graphing Calculator with CPU",
    summary:
      "This is another project I mentored for. I gave high level guidance to make sure the project was feasible and answered questions as necessary. The calculator itself was a RISC-V CPU with a keypad and screen interface. Users would type equations into the CPU with a calculator program running. The graph of the equation would then appear on the LCD display.",
    technologies: ["Graphics Hardware", "Assembly Programming", "Digital Logic", "FPGA"],
    imagePlaceholderLabel: "Graphing Calculator Screenshot",
  },
  {
    id: "fighting-game",
    shortLabel: "Fighting Game",
    title: "Fighting Game with CPU",
    summary:
      "This team I mentored for developed a two-dimensional fighting game similar to street fighter. The game was running on a RISC-V processor connected to NES controller and VGA interfaces. Given limited main memory space for student projects, the screen interface of this CPU turned into an ASIC particular to the fighting game. This gave us the ability to run the game logic on the CPU without pressuring the memory with excessive graphics data. ",
    technologies: ["ASIC", "Digital Design", "FPGA", "Assembly Programming"],
    imagePlaceholderLabel: "Fighting Game Screenshot",
  },
];

export const projectNavigationItems = [
  ...featuredProjects.map((project) => ({ id: project.id, label: project.shortLabel })),
  ...starsProjects.map((project) => ({ id: project.id, label: project.shortLabel })),
];
