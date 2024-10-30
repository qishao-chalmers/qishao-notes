(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{477:function(e,t,r){"use strict";r.r(t);var a=r(5),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[24] RISCV2 A Scalable RISC-V Vector Processor")]),e._v(" "),t("li",[e._v("[7 HPCA 2022] Adaptable Register File Organization for Vector Processors")]),e._v(" "),t("li",[e._v("[119] Ara: A 1 GHz+ Scalable and Energy-Efficient RISC-V Vector Processor with Multi-Precision Floating Point Support in 22 nm FD-SOI")]),e._v(" "),t("li",[e._v('[40 ASAP 2022] A "New Ara" for Vector Computing An Open Source Efficient RISCV Vector Processor Design')]),e._v(" "),t("li",[e._v("Yun: An Open-Source 64-Bit RISCV-Based Vector Processor With Multi-Precision Integer and Floating-Point Support in 65nm CMOS")]),e._v(" "),t("li",[e._v("[117 Year 1996] Decoupled Vector Architecture")]),e._v(" "),t("li",[e._v("Introduction to the SX-Aurora Vector Engine")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_1-24-riscv2-a-scalable-risc-v-vector-processor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-24-riscv2-a-scalable-risc-v-vector-processor"}},[e._v("#")]),e._v(" 1. [24] RISCV2 A Scalable RISC-V Vector Processor")]),e._v(" "),t("p",[e._v("Coupled with dynamically allocated register, at run time, the new register remapping mechanism enables:")]),e._v(" "),t("ul",[t("li",[e._v("dynamic hardware-based loop unrolling")]),e._v(" "),t("li",[e._v("optimized instruction scheduling")])]),e._v(" "),t("p",[e._v("Decoupled execution scheme employs resource acquire-and-release semantics to disambiguate between parallel computation and memory-access instruction streams")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/3a7ef400-9ca7-406c-9df9-8e0281837dce",alt:"image"}})]),e._v(" "),t("h4",{attrs:{id:"register-remapping-and-dynamic-register-file-allocation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-remapping-and-dynamic-register-file-allocation"}},[e._v("#")]),e._v(" Register Remapping and dynamic register file allocation")]),e._v(" "),t("p",[e._v("Vector instruction operate on mutiple elements, the vIS stages transfroms vector instructions into multuple micro-operations(uops), each uop operating on a different register groups.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/03117910-2565-4a3a-8175-bb7379e383e1",alt:"image"}})]),e._v(" "),t("p",[e._v("Each logic register is mapped to a group of reigster, instread of one-on-one  mapping.")]),e._v(" "),t("p",[e._v("The new reigster remapping mechanism facilitates dynamic loop unrolling in hardware.")]),e._v(" "),t("p",[e._v("The unrolling mitigates the stall incurred by data dependencies, since direct consumer of a result is now seperated from its producer by multiple uops.")]),e._v(" "),t("p",[e._v("Consequently, resource utilization increase substantially.")]),e._v(" "),t("h4",{attrs:{id:"decoupled-execution-computation-and-memory-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decoupled-execution-computation-and-memory-access"}},[e._v("#")]),e._v(" Decoupled execution: computation and memory access")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/42c8825f-8082-4214-9317-cfdb0872f9e9",alt:"image"}})]),e._v(" "),t("p",[e._v("As to memory instructions that does not access execution lanes, they are routed after vRRM pipeline stage directly to the memory unit.")]),e._v(" "),t("p",[e._v("The memory unit features two parallel engines that allows the simultaneous processing and disambiguaing of one load and one store instructions.")]),e._v(" "),t("p",[e._v("Traditionally, synchronization is decoupled processor schemes is achieved by employing so called synchronization queues and specical move operation.")]),e._v(" "),t("p",[e._v("These are not amenable to vector processors. "),t("strong",[e._v("Here I dont understand.")])]),e._v(" "),t("p",[e._v("They keep a ghost copy of instructin dispatched to vIS stage which updates scoreboard, maintain the wakeup function.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_7-hpca-2022-adaptable-register-file-organization-for-vector-processors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-hpca-2022-adaptable-register-file-organization-for-vector-processors"}},[e._v("#")]),e._v(" [7 HPCA 2022] Adaptable Register File Organization for Vector Processors")]),e._v(" "),t("p",[e._v("Basic Idea: two level registers: physical register and registers in l2 cache")]),e._v(" "),t("p",[e._v("Swap register in L2 Cache with physical register if physical register is in shortage.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/4865d534-223c-48d0-a3a8-9aa5acf83843",alt:"image"}})]),e._v(" "),t("p",[e._v("Since they have two level registers, two level register mapping is also invented.")]),e._v(" "),t("ul",[t("li",[e._v("map logical to physical vectore register file(P-VRF)")]),e._v(" "),t("li",[e._v("map P-VRF to Memory Vector Register File(M-VRF)")])]),e._v(" "),t("p",[e._v("AVA, an Adaptable Vector Architecture designed for short vectors (MVL = 16 elements2),"),t("br"),e._v("\ncapable of reconfiguring the MVL when executing applications with abundant DLP.")]),e._v(" "),t("p",[e._v("MVL: Maximum Vector Length.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"ara-a-1-ghz-scalable-and-energy-efficient-risc-v-vector-processor-with-multi-precision-floating-point-support-in-22-nm-fd-soi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ara-a-1-ghz-scalable-and-energy-efficient-risc-v-vector-processor-with-multi-precision-floating-point-support-in-22-nm-fd-soi"}},[e._v("#")]),e._v(" Ara: A 1 GHz+ Scalable and Energy-Efficient RISC-V Vector Processor with Multi-Precision Floating Point Support in 22 nm FD-SOI")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/c773a311-038c-456b-a64a-05fdcd9b042e",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"a-new-ara-for-vector-computing-an-open-source-efficient-riscv-vector-processor-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-new-ara-for-vector-computing-an-open-source-efficient-riscv-vector-processor-design"}},[e._v("#")]),e._v(' A "New Ara" for Vector Computing An Open Source Efficient RISCV Vector Processor Design')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/69f6bd81-3aef-47b0-ae9f-7d836ba93088",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"yun-an-open-source-64-bit-riscv-based-vector-processor-with-multi-precision-integer-and-floating-point-support-in-65nm-cmos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yun-an-open-source-64-bit-riscv-based-vector-processor-with-multi-precision-integer-and-floating-point-support-in-65nm-cmos"}},[e._v("#")]),e._v(" Yun: An Open-Source 64-Bit RISCV-Based Vector Processor With Multi-Precision Integer and Floating-Point Support in 65nm CMOS")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/91af17ac-deff-4774-b7e3-690c6b3769da",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"introduction-to-the-sx-aurora-vector-engine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-the-sx-aurora-vector-engine"}},[e._v("#")]),e._v(" Introduction to the SX-Aurora Vector Engine")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a03c12ee-ed7d-4198-96db-14111cd38328",alt:"image"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);