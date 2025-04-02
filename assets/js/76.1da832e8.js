(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{529:function(e,t,a){"use strict";a.r(t);var i=a(8),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[20] Decoding CUDA Binary")])]),e._v(" "),t("hr"),e._v(" "),t("ol",[t("li",[e._v("[20] Decoding CUDA Binary")]),e._v(" "),t("li",[e._v("[7 2024 ASPLOS] A Journey of a 1,000 Kernels Begins with a Single Step A Restrospective of Deep Learning on GPUs")]),e._v(" "),t("li",[e._v("Dissecting the NVIDIA Volta GPU Architecture via Microbenchmarking")]),e._v(" "),t("li",[e._v("Dissecting the NVidia Turing T4 GPU via Microbenchmarking")])]),e._v(" "),t("h3",{attrs:{id:"compiling-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiling-flow"}},[e._v("#")]),e._v(" Compiling Flow")]),e._v(" "),t("p",[e._v("When every thread in the warp has reached a re-convergence command - either a .S modifier or a SYNC instruction,\ndepending on the architecture - it will wait until the thread warp reaches the instruction whose address is specified by the\nSSY instruction, and then return to running in lock-step.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/66319026-1b78-410c-a6c5-68d09375da76",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"assemble-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assemble-code"}},[e._v("#")]),e._v(" Assemble Code")]),e._v(" "),t("p",[e._v("64 bits or 128 bits\n"),t("img",{attrs:{src:"https://github.com/user-attachments/assets/86e4c66a-1b8f-4b18-8efd-bdb40638b80d",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"load-store-instruction-and-control-flow-of-divergence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-store-instruction-and-control-flow-of-divergence"}},[e._v("#")]),e._v(" Load/Store Instruction and Control Flow of Divergence")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/6c3891a8-c1ee-4eef-9526-febbd597188a",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"compile-time-scheduling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-time-scheduling"}},[e._v("#")]),e._v(" Compile-Time Scheduling")]),e._v(" "),t("p",[e._v("As of Compute Capability 3.0, "),t("em",[e._v("instruction scheduling is handled by the compiler")]),e._v(" rather than by the hardware.")]),e._v(" "),t("p",[e._v("On this architecture every 8−th instruction, rather than being a real instruction, is a set of scheduling codes inserted by the compiler.")]),e._v(" "),t("p",[e._v("These scheduling codes dictate the minimum number of cycles that the thread must wait between every two consecutive instructions in the following seven instructions in order to satisfy dependence constraints.")]),e._v(" "),t("p",[e._v("Starting with Compute Capability 5.0, NVIDIA moved even more control logic away from the hardware, saving power and space.")]),e._v(" "),t("p",[e._v("Thus instruction-level barrier has been added to the scheduling codes generated by the compiler.")]),e._v(" "),t("p",[e._v("The scheduling codes on Compute Capabilities 5.x and 6.x occur in place of every fourth instruction.")]),e._v(" "),t("p",[e._v("As of Compute Capability 7.0, "),t("strong",[e._v("they are embedded into each individual instruction")]),e._v(", rather than controlling larger blocks of instructions.")]),e._v(" "),t("h4",{attrs:{id:"instruction-with-operand"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instruction-with-operand"}},[e._v("#")]),e._v(" Instruction with Operand")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/c12c2fae-dd53-420a-96f8-e05615ef0035",alt:"image"}})]),e._v(" "),t("p",[e._v("Although instructions are of fixed length, NVIDIA’s instruction sets lack the relative simplicity of a RISC architecture.")]),e._v(" "),t("p",[e._v("It includes complicated instructions such as multiplication-and-addition, multi-function operation that performs trigonometric functions including sine and cosine, and so on.")]),e._v(" "),t("p",[e._v("Although we can make generalizations about which bits are used for which components of the instruction, there are few consistent rules across different instructions.")]),e._v(" "),t("p",[e._v("Check PSETP, it has 3 source operands.\n"),t("img",{attrs:{src:"https://github.com/user-attachments/assets/b38e7590-f494-45a8-a029-643a7cdf7941",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/54cd8f74-c1bc-4496-b175-8214972bef0c",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"reverse-engineering-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reverse-engineering-tool"}},[e._v("#")]),e._v(" Reverse Engineering Tool")]),e._v(" "),t("p",[e._v("nvdisasm and sass2ptx")]),e._v(" "),t("h3",{attrs:{id:"instruction-format-basics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instruction-format-basics"}},[e._v("#")]),e._v(" Instruction Format Basics")]),e._v(" "),t("h4",{attrs:{id:"instruction-length"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instruction-length"}},[e._v("#")]),e._v(" Instruction Length:")]),e._v(" "),t("p",[e._v("NVIDIA GPU instructions are typically 8 or 16 bytes in length (i.e., 64 or 128 bits), depending on the generation and specific instruction.")]),e._v(" "),t("p",[e._v("Most common instructions are encoded in 8 bytes, but certain instructions may require 16 bytes for additional fields (larger immediate values, special modifiers, etc.).")]),e._v(" "),t("h4",{attrs:{id:"predicate-bits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predicate-bits"}},[e._v("#")]),e._v(" Predicate Bits:")]),e._v(" "),t("p",[e._v("Each instruction can be conditionally executed based on a predicate register (e.g., @P0 or @!P0).")]),e._v(" "),t("p",[e._v("The instruction encoding typically reserves a few bits for specifying which predicate is used, whether it’s negated, and whether the instruction updates that predicate or only tests it.")]),e._v(" "),t("h4",{attrs:{id:"opcode-and-sub-op-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opcode-and-sub-op-fields"}},[e._v("#")]),e._v(" Opcode and Sub-Op Fields:")]),e._v(" "),t("p",[e._v("A chunk of bits is used to identify the primary operation (e.g., FADD for floating-point add, IMUL for integer multiply, LDG for global memory load, etc.).")]),e._v(" "),t("p",[e._v("Some instructions have “sub-ops” or “specialization bits” that further refine the operation (e.g., specifying data type, rounding mode, or variant of the operation).")]),e._v(" "),t("h4",{attrs:{id:"source-and-destination-registers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-and-destination-registers"}},[e._v("#")]),e._v(" Source and Destination Registers:")]),e._v(" "),t("p",[e._v("SASS instructions typically encode up to four source operands and one or two destinations (though most commonly one destination).")]),e._v(" "),t("p",[e._v("The register indices (e.g., R0, R1, R2, etc.) appear in dedicated fields.")]),e._v(" "),t("p",[e._v("Depending on the instruction, immediate operands (e.g., a constant offset) may replace a register operand.")]),e._v(" "),t("h4",{attrs:{id:"modifiers-and-flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modifiers-and-flags"}},[e._v("#")]),e._v(" Modifiers and Flags:")]),e._v(" "),t("p",[e._v("Many instructions have bits for modifiers (e.g., .CC to set condition codes, .SAT to enable saturation, etc.).")]),e._v(" "),t("p",[e._v("Reuse flags (discussed in your previous question) are also stored in a few bits in the encoding.")]),e._v(" "),t("p",[e._v("Additional bits might control things like whether a memory operation is cache-specific (.E for eviction policy, .L1 or .L2 usage, etc.), or whether an instruction is uniform across a warp, and so on.")]),e._v(" "),t("h4",{attrs:{id:"scheduling-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scheduling-information"}},[e._v("#")]),e._v(" Scheduling Information:")]),e._v(" "),t("p",[e._v("Modern NVIDIA architectures embed scheduling information in the instruction to help the hardware’s instruction scheduler. You might see references to “stall” counts or “read dependency” codes. In short:")]),e._v(" "),t("p",[e._v("A few bits can indicate how many cycles to wait before reading certain registers, or how many cycles to wait before issuing the next instruction.")]),e._v(" "),t("p",[e._v("This is sometimes referred to as “scheduling” or “scoreboarding” fields.")]),e._v(" "),t("h4",{attrs:{id:"operand-encoding-and-immediate-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operand-encoding-and-immediate-values"}},[e._v("#")]),e._v(" Operand Encoding and Immediate Values")]),e._v(" "),t("p",[e._v("Register Operands: Typically specified by a field that directly encodes the register number (e.g., 7 bits for the register index if up to 128 registers).")]),e._v(" "),t("p",[e._v("Immediate Operands: Some instructions support small inline immediates.")]),e._v(" "),t("p",[e._v("The immediate field is part of the instruction encoding, using a certain number of bits.")]),e._v(" "),t("p",[e._v("If the immediate is too large to fit, a 16-byte (128-bit) encoding might be used, or the compiler may materialize the immediate in a register first.")]),e._v(" "),t("p",[e._v("Addressing Modes: Memory instructions (LDG, STG, LDS, etc.) often encode an offset or a base+offset form. Some bits specify how to interpret those, e.g., 8-bit or 20-bit offset, sign extension, scaled by data type size, etc.")]),e._v(" "),t("h4",{attrs:{id:"reuse-flags-and-the-2-way-associative-cam"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reuse-flags-and-the-2-way-associative-cam"}},[e._v("#")]),e._v(" Reuse Flags and the 2-Way Associative CAM")]),e._v(" "),t("p",[e._v("Reuse Flags: Each instruction can mark which of its first four source registers should be saved in a small local cache, so that subsequent instructions can reuse them without accessing the main register file.")]),e._v(" "),t("p",[e._v("These flags are 4 bits in the SASS encoding (one per operand), typically in the lower part of the 8-byte instruction encoding.")]),e._v(" "),t("p",[e._v("This is a micro-architectural feature that helps reduce register file pressure and bank conflicts.")]),e._v(" "),t("h4",{attrs:{id:"predicate-and-condition-code-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predicate-and-condition-code-fields"}},[e._v("#")]),e._v(" Predicate and Condition Code Fields")]),e._v(" "),t("p",[e._v("One or two bits designate whether an instruction is predicated (e.g., @P0, @!P0, etc.).")]),e._v(" "),t("p",[e._v("Another small field may specify which predicate register is used (since GPUs can have multiple predicate registers).")]),e._v(" "),t("p",[e._v("Some instructions also set condition codes (e.g., for subsequent instructions to test), which the hardware might encode in a “condition code” sub-field.")]),e._v(" "),t("h4",{attrs:{id:"example-layout-hypothetical"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-layout-hypothetical"}},[e._v("#")]),e._v(" Example Layout (Hypothetical)")]),e._v(" "),t("p",[e._v("Below is a hypothetical 64-bit (8-byte) SASS instruction breakdown (not official, but a conceptual approximation):")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/22bb7fc6-1272-41cd-a662-843609fe2782",alt:"image"}})]),e._v(" "),t("ul",[t("li",[e._v("Opcode (7 bits): Identifies the core instruction (e.g., FADD, IMUL, LDG).")]),e._v(" "),t("li",[e._v("Source Registers (5 bits each): Up to three or four sources, each needing enough bits to address the register file.")]),e._v(" "),t("li",[e._v("Destination Register (5 bits): Usually one, possibly two in some instructions (like a multiply-add that writes an extra output).")]),e._v(" "),t("li",[e._v("Modifiers / Flags: Several bits for controlling instruction behavior (e.g., rounding modes, type specifiers, etc.).")]),e._v(" "),t("li",[e._v("Reuse Flags (4 bits): One bit per operand position, marking which registers to cache.")]),e._v(" "),t("li",[e._v("Predicate / Condition Code: Often stored in either the high bits or low bits, depending on generation.")]),e._v(" "),t("li",[e._v("Scheduling Info: Usually a small field that the compiler sets to help with instruction issuing/stalling.")])]),e._v(" "),t("p",[e._v("Different architectures shift these fields around or allocate more/less bits, but the principle remains similar.")]),e._v(" "),t("h3",{attrs:{id:"predicate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predicate"}},[e._v("#")]),e._v(" Predicate")]),e._v(" "),t("p",[e._v("NVIDIA GPUs use predicate registers and explicit branch instructions (e.g., BRA) to handle conditional logic at the SASS (assembly) level.")]),e._v(" "),t("p",[e._v("In concert with the hardware’s warp execution model, this mechanism can create control flow divergence when different threads of the same warp take different paths.")]),e._v(" "),t("p",[e._v("Below is a more detailed explanation of how predicates, branching, and divergence work together.")]),e._v(" "),t("h4",{attrs:{id:"the-basic-idea-of-predication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-basic-idea-of-predication"}},[e._v("#")]),e._v(" The Basic Idea of Predication")]),e._v(" "),t("p",[e._v("A predicate (e.g., P0, P1, etc.) is a 1-bit register that can be set or cleared by a comparison instruction. For example:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("PSETP.EQ.U32 P0, PT, R4, RZ, PT;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("This sets predicate P0 to 1 if R4 == 0; otherwise P0 = 0.")]),e._v(" "),t("p",[e._v("PT means “always pass” (no predicate on that comparison itself).")]),e._v(" "),t("p",[e._v("RZ is the “zero register.”")]),e._v(" "),t("p",[e._v("Once a predicate is set, any subsequent instruction can be predicated—i.e., guarded—by referencing that predicate. For example:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@P0 IADD R5, R5, R6;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Reads as: “Perform IADD R5, R5, R6 only if P0 == 1; otherwise do nothing.”")]),e._v(" "),t("p",[e._v("However, you can also have a predicated branch:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@P0 BRA 0x210;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Means: “If P0 == 1, jump to the instruction at address 0x210; if P0 == 0, continue sequentially.”")]),e._v(" "),t("h4",{attrs:{id:"divergence-and-the-active-mask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#divergence-and-the-active-mask"}},[e._v("#")]),e._v(" Divergence and the Active Mask")]),e._v(" "),t("p",[e._v("A key point about GPU execution is that an entire warp (32 threads on most NVIDIA hardware) executes in lockstep on a single instruction stream. If a branch is taken by some threads but not others, the warp must diverge:")]),e._v(" "),t("ul",[t("li",[e._v("The hardware splits the warp’s threads into multiple “subsets,” one subset that takes the branch and another that doesn’t.")]),e._v(" "),t("li",[e._v("The warp serially executes each subset’s path, with the other subset of threads masked out (inactive).")])]),e._v(" "),t("p",[e._v("At the end, the warp reconverges at a known instruction (e.g., the instruction pointed to by SSY).")]),e._v(" "),t("p",[e._v("This is how a single warp can handle different control flow paths for its 32 threads.")]),e._v(" "),t("h4",{attrs:{id:"the-role-of-ssy-set-synchronization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-role-of-ssy-set-synchronization"}},[e._v("#")]),e._v(" The Role of SSY (Set SYnchronization)")]),e._v(" "),t("p",[e._v("When the compiler emits:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SSY 0x238\n@P0 BRA 0x210\n...\nSYNC\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("SSY 0x238 instructs the hardware to push a reconvergence point (address 0x238) onto the hardware’s “divergence stack.”")]),e._v(" "),t("p",[e._v("The next branch—@P0 BRA 0x210—can cause divergence: some threads branch, others continue.")]),e._v(" "),t("p",[e._v("After each subset of threads has finished, the hardware automatically goes to 0x238 (the SSY target) to reconverge the warp, so all threads proceed together again.")]),e._v(" "),t("h4",{attrs:{id:"using-predicates-to-create-conditional-branches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-predicates-to-create-conditional-branches"}},[e._v("#")]),e._v(" Using Predicates to Create Conditional Branches")]),e._v(" "),t("p",[e._v("Example Flow\nLet’s say your high-level code is:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if (tid != 0) {\n    sum += 4;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("The compiler might produce:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 1) Compare tid != 0, store result in P0\nPSETP.NE.U32 P0, PT, R9, RZ, PT;  // if (R9 != 0) P0=1; else P0=0\n\n// 2) Set the reconvergence point after the IF block\nSSY targetAddr\n\n// 3) Predicated branch: jump if P0=1\n@P0 BRA insideIf\n\n// (fallthrough path: if P0=0, skip the IF block)\nBRA endIf   // or a SYNC, depending on code structure\n\ninsideIf:\n IADD32I R8, R8, 4;   // sum += 4\n SYNC\n\nendIf:\n// warp reconverges here\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])]),t("p",[e._v("Here, the hardware uses P0 to decide which threads branch and which do not. The warp may need multiple passes if some threads are P0=1 and others are P0=0.")]),e._v(" "),t("h4",{attrs:{id:"tid-and-tid-4-why-you-don-t-always-see-explicit-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tid-and-tid-4-why-you-don-t-always-see-explicit-instructions"}},[e._v("#")]),e._v(" (tid) and (tid % 4): Why You Don’t Always See Explicit Instructions")]),e._v(" "),t("p",[e._v("In high-level CUDA (C/C++), you write:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("int tid = threadIdx.x;\nif (tid != 0) ...\nif (tid % 4 == 0) ...\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("But the final SASS might not show a direct “integer modulo” or “compare to zero” instruction. Instead:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Thread ID is Already in a Register")])]),e._v(" "),t("ul",[t("li",[e._v("At the start of the kernel, the compiler loads threadIdx.x into a register (R9 or something).")]),e._v(" "),t("li",[e._v("That code might be hoisted well above the snippet you’re looking at.")])])]),e._v(" "),t("li",[t("p",[e._v("Modulo 4 = Bitwise Test")]),e._v(" "),t("ul",[t("li",[e._v("tid % 4 == 0 is the same as (tid & 3) == 0.")]),e._v(" "),t("li",[e._v("The compiler can use a single bitwise AND or LOP3 (logical operation) to check the two least significant bits. Then it sets a predicate based on the result.")]),e._v(" "),t("li",[e._v("So you’ll see something like LOP3.LUT P1, R9, RZ, ... 0x... or I2I P1, R9, AND, 3 or some variant that directly sets P1.")])])]),e._v(" "),t("li",[t("p",[e._v("Predicate is Checked at Branch")]),e._v(" "),t("ul",[t("li",[e._v("Instead of a standalone branch if (tid != 0), the hardware does PSETP.NE.U32 P0, R9, RZ followed by @P0 BRA label.")]),e._v(" "),t("li",[e._v("This merges “compare” + “branch” logic with the warp’s active mask concept.")])])])]),e._v(" "),t("p",[e._v("Hence, you rarely see an explicit “%4” machine instruction or a standalone CMP R9 != 0 or “TID instruction.”")]),e._v(" "),t("p",[e._v("The predicate logic folds these checks into specialized SASS instructions that set P0 or P1, and then uses predicated branching or predicated instructions.")]),e._v(" "),t("h4",{attrs:{id:"putting-it-all-together"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#putting-it-all-together"}},[e._v("#")]),e._v(" Putting It All Together")]),e._v(" "),t("p",[t("strong",[e._v("Predicate Computation")]),e._v(" A special compare (e.g., PSETP) sets P0 based on (tid != 0), (tid & 3) == 0, etc.\n"),t("strong",[e._v("Control Divergence")]),e._v(" If some threads in the warp have P0=1 and others have P0=0, the warp diverges when it hits @P0 BRA somewhere.")]),e._v(" "),t("p",[e._v("Reconvergence: An SSY target before the branch and a SYNC (or matching BRA) after the branch help the hardware manage warp subsets and eventually bring them back together at the same program counter.")]),e._v(" "),t("p",[e._v("In short, predicates let each thread in a warp conditionally execute code. If different threads disagree on the condition, the warp temporarily serializes the different paths but eventually merges (reconverges) again at an SSY target. This is how GPUs handle “if” statements, loops, etc., across thousands of parallel threads.")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[e._v("Summary of the Paper")]),e._v("\nThe paper investigates the evolution of deep learning (DL) applications on GPUs by examining a diverse range of state-of-the-art applications and hardware across three NVIDIA GPU generations: "),t("strong",[e._v("P100")]),e._v(" , "),t("strong",[e._v("V100")]),e._v(" , and "),t("strong",[e._v("A100")]),e._v(" . It provides a comprehensive analysis at three levels:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Framework Level")]),e._v("  (TensorFlow/PyTorch)")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Device API Level")]),e._v("  (e.g., cuDNN, CUDA kernels)")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Hardware and Microarchitecture Level")])])])]),e._v(" "),t("p",[e._v("The authors develop a benchmarking suite named "),t("strong",[e._v("CaSiO")]),e._v("  (covering applications from domains like computer vision, physical simulation, language processing, etc.) to capture a wide range of realistic production workloads that are broader and more diverse than conventional benchmarks like MLPerf.")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_7-2024-a-journey-of-a-1-000-kernels-begins-with-a-single-step-a-restrospective-of-deep-learning-on-gpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2024-a-journey-of-a-1-000-kernels-begins-with-a-single-step-a-restrospective-of-deep-learning-on-gpus"}},[e._v("#")]),e._v(" [7 2024] A Journey of a 1,000 Kernels Begins with a Single Step A Restrospective of Deep Learning on GPUs")]),e._v(" "),t("h3",{attrs:{id:"key-objectives-and-questions-addressed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-objectives-and-questions-addressed"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Key Objectives and Questions Addressed")])]),e._v(" "),t("p",[e._v("The paper aims to answer three major questions:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Application Scaling:")]),e._v(" "),t("em",[e._v("How does the behavior of real-world DL applications scale across GPU hardware generations?")])]),e._v(" "),t("li",[t("strong",[e._v("Hardware-Software Interactions:")]),e._v(" "),t("em",[e._v("What are the software-compiler-hardware interactions that either enable or limit generational speedup?")])]),e._v(" "),t("li",[t("strong",[e._v("Future Directions:")]),e._v(" "),t("em",[e._v("What insights can we gain from current trends to inform the development of future GPU architectures?")])])]),e._v(" "),t("h3",{attrs:{id:"main-insights-and-findings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-insights-and-findings"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Main Insights and Findings")])]),e._v(" "),t("h4",{attrs:{id:"application-level-observations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-level-observations"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Application-Level Observations")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Operator Diversity:")]),e._v("  Modern DL applications are diverse and require a large set of operators beyond simple matrix multiplications or convolutions.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/975da5b1-c112-4368-a883-4202ce0da33a",alt:"image"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("GEMM Decline:")]),e._v("  While GEMM-based kernels (e.g., matrix multiplications) have traditionally dominated GPU computations, their relative importance decreases with newer hardware generations.")]),e._v(" "),t("li",[t("strong",[e._v("Specialization and Complexity:")]),e._v("  The software ecosystem must support an extensive set of shape-specialized kernels to maximize hardware utilization.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a59a404c-bba3-4aaf-b529-fd495e1ead03",alt:"image"}})]),e._v(" "),t("h4",{attrs:{id:"detailed-gemm-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detailed-gemm-analysis"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Detailed GEMM Analysis")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Shape Specialization:")]),e._v("  Significant performance improvements (on V100 over P100) were driven by specialized kernels tailored for specific GEMM shapes. However, the further generational speedups (A100 over V100) were modest.")]),e._v(" "),t("li",[t("strong",[e._v("Utilization:")]),e._v("  Hardware utilization for GEMM operations peaked on V100 but began declining on the A100 due to challenges in effectively utilizing massively parallel hardware for smaller or irregular shapes.")])]),e._v(" "),t("h4",{attrs:{id:"hardware-execution-states"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware-execution-states"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Hardware Execution States")])]),e._v(" "),t("ul",[t("li",[e._v("The authors defined a taxonomy based on three key hardware execution characteristics:")]),e._v(" "),t("li",[t("strong",[e._v("Thread parallelism")]),e._v("  (low, medium, high)")]),e._v(" "),t("li",[t("strong",[e._v("Compute utilization")]),e._v("  (SM utilization)")]),e._v(" "),t("li",[t("strong",[e._v("Memory utilization")]),e._v("  (DRAM bandwidth usage)\nThey found:")]),e._v(" "),t("li",[e._v("Substantial under-utilization of resources even for seemingly optimized GEMM-heavy workloads.")]),e._v(" "),t("li",[e._v("Frequent switching between execution states, highlighting the dynamic and diverse nature of modern AI applications.")])]),e._v(" "),t("h3",{attrs:{id:"hardware-performance-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware-performance-analysis"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Hardware Performance Analysis")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("P100 → V100:")]),e._v("  Significant speedups due to the introduction of TensorCores (specialized GEMM units).")]),e._v(" "),t("li",[t("strong",[e._v("V100 → A100:")]),e._v("  Modest gains indicating diminishing returns on GEMM acceleration alone.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/826ea8d5-ea36-4e5c-b335-9c580c7bef52",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"insights-into-future-hardware-directions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#insights-into-future-hardware-directions"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Insights into Future Hardware Directions")])]),e._v(" "),t("p",[e._v("Based on their observations, the authors highlight three major areas for future hardware optimization:")]),e._v(" "),t("h4",{attrs:{id:"compute-orchestration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compute-orchestration"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Compute Orchestration:")])]),e._v(" "),t("p",[e._v("Optimizing hardware execution units to better handle diverse and irregular shapes of GEMMs, especially smaller and less regular computations.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/ed5550cf-b903-42b5-a5e6-a9f0ed41c0d6",alt:"image"}})]),e._v(" "),t("h4",{attrs:{id:"data-orchestration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-orchestration"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Data Orchestration:")])]),e._v(" "),t("p",[e._v("Improving data movement operations in memory systems, since many kernels spend significant execution time on memory-bound or data-movement-heavy operations.")]),e._v(" "),t("h4",{attrs:{id:"dependence-orchestration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependence-orchestration"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Dependence Orchestration:")])]),e._v(" "),t("p",[e._v("Better leveraging the rapidly changing execution states and complex dependencies in DL algorithms to maximize hardware resource occupancy.")]),e._v(" "),t("p",[e._v("The authors present a case study demonstrating that by focusing on these behaviors, future architectures could achieve around "),t("strong",[e._v("2.3X geometric mean speedup")]),e._v("  over current GPU architectures.")]),e._v(" "),t("h3",{attrs:{id:"contributions-and-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributions-and-resources"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Contributions and Resources")])]),e._v(" "),t("p",[e._v("The authors provide a curated set of real-world DL applications, their infrastructure ("),t("strong",[e._v("CaSiO")]),e._v("  suite), and detailed performance data at different levels for public access to aid future research.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("GitHub Repository: "),t("a",{attrs:{href:"https://github.com/VerticalResearchGroup/casio",target:"_blank",rel:"noopener noreferrer"}},[e._v("CaSiO Suite"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Detailed GEMM analysis data: "),t("a",{attrs:{href:"https://github.com/VerticalResearchGroup/casio-gemms/blob/main/gemms.csv",target:"_blank",rel:"noopener noreferrer"}},[e._v("GEMM Shape Performance Data"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[e._v("Large M,N,K provide consistent performance")]),e._v(" "),t("li",[e._v("At least one of M,N,K is very small\nWith very small K, the inner loop doesn’t run enough, causing under-utilization of faster compute resources.\nWith Large M or N but small K, utilization could still be high. but if both M and N are low, the utilization will be low.")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/0b06a53a-ecac-4dcf-b8b8-4c8dd88ef36c",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"significance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#significance"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Significance")])]),e._v(" "),t("p",[e._v("This paper is significant because:")]),e._v(" "),t("ul",[t("li",[e._v("It systematically addresses the limits and future potentials of GPU-based accelerators for DL workloads.")]),e._v(" "),t("li",[e._v("It provides empirical insights into how actual, complex DL workloads interact with evolving hardware, guiding future designs.")]),e._v(" "),t("li",[e._v("It challenges the conventional wisdom of GEMM-centric acceleration by demonstrating diminishing returns and highlighting the need for more diverse hardware strategies.")])]),e._v(" "),t("h3",{attrs:{id:"conclusion-and-impact"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion-and-impact"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Conclusion and Impact")])]),e._v(" "),t("p",[e._v("The paper underscores a critical transition point in AI hardware development, clearly demonstrating that the era of straightforward GEMM-based acceleration has reached diminishing returns.")]),e._v(" "),t("p",[e._v("It makes a strong case for a more nuanced, algorithm-aware hardware architecture that can dynamically adapt to a wide variety of computational patterns and data orchestration needs.")]),e._v(" "),t("p",[e._v("By providing both detailed empirical evidence and actionable insights, the paper offers valuable guidance for architects and system designers developing next-generation hardware platforms tailored to real-world DL workloads.")])])}),[],!1,null,null,null);t.default=s.exports}}]);