(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{460:function(e,a,t){"use strict";t.r(a);var s=t(5),i=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ol",[a("li",[e._v("[90] Dissecting the NVIDIA Volta GPU Architecture via Microbenchmaring")]),e._v(" "),a("li",[e._v("[6] SnakeByte: A TLB Design with Adaptive and Recursive Page Merging in GPUs")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"_1-dissecting-the-nvidia-volta-gpu-architecture-via-microbenchmaring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-dissecting-the-nvidia-volta-gpu-architecture-via-microbenchmaring"}},[e._v("#")]),e._v(" 1. Dissecting the NVIDIA Volta GPU Architecture via Microbenchmaring")]),e._v(" "),a("p",[e._v("On Volta and on all other architectures we examined:")]),e._v(" "),a("ul",[a("li",[e._v("the L1 data cache is indexed by virtual addresses;")]),e._v(" "),a("li",[e._v("the L2 data cache is indexed by physical addresses")])]),e._v(" "),a("h3",{attrs:{id:"_2-snakebyte-a-tlb-design-with-adaptive-and-recursive-page-merging-in-gpus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-snakebyte-a-tlb-design-with-adaptive-and-recursive-page-merging-in-gpus"}},[e._v("#")]),e._v(" 2. SnakeByte: A TLB Design with Adaptive and Recursive Page Merging in GPUs")]),e._v(" "),a("h4",{attrs:{id:"idea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea"}},[e._v("#")]),e._v(" Idea")]),e._v(" "),a("p",[e._v("SnakeByte allows multiple equal-sized pages coalescing into a page table entry (PTE)."),a("br"),e._v("\nIt records the validity of pages to be merged using a bit vector, and few bits are annexed to indicate the size of merged pages.")]),e._v(" "),a("h4",{attrs:{id:"tlb-ptw-gmmu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tlb-ptw-gmmu"}},[e._v("#")]),e._v(" TLB & PTW & GMMU")]),e._v(" "),a("p",[e._v("Departing from conventional paging schemes of CPUs that heavily rely on operating systems, hardware-based GPU memory management units (GMMUs) are essential to effectively separate device memory management from host\nCPUs."),a("br"),e._v("\nOtherwise, GPUs require the frequent intervention of OS to handle page table walks (PTWs) and TLB misses, which significantly penalize the GPU performance.")]),e._v(" "),a("p",[e._v("Observations:")]),e._v(" "),a("ul",[a("li",[e._v("GPU workloads demand a large number of TLB entries (e.g., 32K to 256K entries) to handle sizable working sets, but conventional TLBs cannot provide sufficient coverage.")]),e._v(" "),a("li",[e._v("GPU workloads have variable ranges of page contiguity.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/ca8c2089-866b-4c16-a853-3a0f2fc792bc",alt:"image"}})]),e._v(" "),a("h5",{attrs:{id:"paper-idea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paper-idea"}},[e._v("#")]),e._v(" Paper Idea")]),e._v(" "),a("p",[e._v("If contiguity exists, valid bits are accordingly set in the bit vector. When all pages in the page group are allocated with contiguity (i.e., all valid bits set), the first PTE of the page group called base PTE is promoted to be further coalesced into a larger page group.")]),e._v(" "),a("h5",{attrs:{id:"address-translation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-translation"}},[e._v("#")]),e._v(" Address Translation")]),e._v(" "),a("p",[e._v("An L1 TLB is private to a streaming multiprocessor (SM), and an L2 TLB is shared among SMs [41], [42]."),a("br"),e._v("\nOn a last-level TLB miss, a request is sent to a centralized GMMU [18], [41], [42] to walk through page tables, and the GMMU concurrently handles multiple PTW requests (e.g., 8-16 PTWs)."),a("br"),e._v("\nTo amortize the latency cost of PTWs, GPUs employ page walk caches that store recently used translations at different levels of page tables."),a("br"),e._v("\nImportantly, the GMMU execution has to be independent of host-side operations unlike the conventional paging schemes of CPUs that heavily rely on operating systems. "),a("br"),e._v("\nOtherwise, GPUs involve frequent OS interventions, which significantly penalize the GPU performance [44], [54].")]),e._v(" "),a("p",[e._v("This observation is the primary motivation of SnakeByte that can flexibly manage variable-sized page groups and maximize TLB reach.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/28e7240f-6b4a-4832-996b-70450bbef038",alt:"image"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/0661a5c0-910f-4f72-b1df-368ecf94e376",alt:"image"}})]),e._v(" "),a("p",[e._v("When eight 4KB pages are allocated with contiguity, the page group is promoted to be coalesced into the next level of page group.")]),e._v(" "),a("p",[a("strong",[e._v("At the new page allocation, SnakeByte checks the contiguity of the new PTE with others in the page group.")])]),e._v(" "),a("h5",{attrs:{id:"simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[e._v("#")]),e._v(" Simulation")]),e._v(" "),a("ul",[a("li",[e._v("By recursively coalescing PTEs, SnakeByte inevitably loses fine-grained controls on the A/D bits for individual pages."),a("br"),e._v("\nSnakeByte adds 8-bit access and dirty fields to a TLB entry to trace A/D states within a page group.")]),e._v(" "),a("li",[e._v("GPUs have long shootdown delays (4.2us).")]),e._v(" "),a("li",[e._v("The TLB hierarchy consists of a private L1 TLB per SM, a shared L2 TLB, and miss status holding registers (MSHRs)."),a("br"),e._v("\nAn MSHR in an L1 TLB merges up to 16 misses.")]),e._v(" "),a("li",[e._v("16 page table walkers can concurrently access four-level page tables, and a page walk cache per page table level stores up to 16 recently used translations.")]),e._v(" "),a("li",[e._v("When a new page is allocated, a sequential page prefetcher allocates 16 consecutive pages (total 64KB) at a time.")]),e._v(" "),a("li",[e._v("To analyze the effect of page migration latency [9], [55], we add a 20us latency overhead for each 4KB page fault [55] with 8.48GB/s bandwidth for a 64KB prefetcher [18].")])])])}),[],!1,null,null,null);a.default=i.exports}}]);