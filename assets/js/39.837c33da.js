(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{450:function(e,a,t){"use strict";t.r(a);var s=t(5),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"harnessing-integrated-cpu-gpu-system-memory-for-hpc-a-first-look-into-grace-hopper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#harnessing-integrated-cpu-gpu-system-memory-for-hpc-a-first-look-into-grace-hopper"}},[e._v("#")]),e._v(" Harnessing Integrated CPU-GPU System Memory for HPC: a first look into Grace Hopper")]),e._v(" "),a("p",[e._v("👍 👍 👍")]),e._v(" "),a("h3",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("h4",{attrs:{id:"limitation-of-state-of-art"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitation-of-state-of-art"}},[e._v("#")]),e._v(" limitation of state-of-art")]),e._v(" "),a("ol",[a("li",[e._v("UVM large overheads in handling page faults in GPU and suffers from read/write amplification due to page-level swapping.")]),e._v(" "),a("li",[e._v("Data object offloading requires offline profiling and application refactoring, limiting solution generality.")]),e._v(" "),a("li",[e._v("The performance of both solutions is constrained by data transfer bottlenecks between the CPU and GPU.")])]),e._v(" "),a("h4",{attrs:{id:"grace-hopper-superchip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grace-hopper-superchip"}},[e._v("#")]),e._v(" Grace Hopper Superchip")]),e._v(" "),a("ul",[a("li",[e._v("NVLink-C2C (chip-to-chip)  cache-coherent interconnect")]),e._v(" "),a("li",[e._v("a single virtual memory space is shared between the CPU and GPU (i.e., system memory)")]),e._v(" "),a("li",[e._v("address translation is accelerated by hardware.\n"),a("ol",[a("li",[e._v("direct remote accesses at cacheline granularity")]),e._v(" "),a("li",[e._v("heuristic-guided page migrations.")])])])]),e._v(" "),a("p",[e._v("By leveraging cacheline level access and Address Translation Service (ATS), which enables full access to all CPU and GPU memory allocations, the system memory eliminates the page-fault handling\noverhead needed in managed memory in UVM, and minimizes the need for memory migrations.")]),e._v(" "),a("p",[e._v("While managed memory splits the virtual memory space into both the system page table and GPU page table, system memory relies on a single system-wide page table, shared between the CPU and the GPU.")]),e._v(" "),a("h3",{attrs:{id:"grace-hooper-unified-memory-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grace-hooper-unified-memory-system"}},[e._v("#")]),e._v(" Grace Hooper Unified Memory System")]),e._v(" "),a("ul",[a("li",[e._v("system-allocated memory")]),e._v(" "),a("li",[e._v("CUDA managed memory")])]),e._v(" "),a("h4",{attrs:{id:"memory-subsystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-subsystem"}},[e._v("#")]),e._v(" Memory Subsystem")]),e._v(" "),a("p",[e._v("The CPU is connected to 480 GB of LPDDR5X memory, while the GPU is equipped with 96 GB of HBM3 memory."),a("br"),e._v("\nThese two processors, GPU and CPU, are interconnected via the Nvidia NVLink-C2C interconnect.")]),e._v(" "),a("p",[e._v("Results show that the GPU’s HBM3 memory achieved a bandwidth of 3.4 TB/s, compared to its theoretical bandwidth of 4 TB/s."),a("br"),e._v("\nThe CPU’s LPDDR5X memory reached a bandwidth of 486 GB/s, close to its theoretical bandwidth of 500 GB/s.")]),e._v(" "),a("p",[e._v("We achieved a bandwidth of 375 GB/s for host-to-device (H2D) transfers and 297 GB/s for device-to-host (D2H) transfers, compared to the interconnect’s theoretical bandwidth of 450 GB/s.")]),e._v(" "),a("h5",{attrs:{id:"nvlink-c2c-interconnect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvlink-c2c-interconnect"}},[e._v("#")]),e._v(" NVLink-C2C Interconnect")]),e._v(" "),a("p",[e._v("In the Grace Hopper system, a processor (CPU or GPU) can directly access the other processor’s physical memory over the NVLink-C2C interconnect."),a("br"),e._v("\nCacheline granularity, with transfer sizes as small as 64 bytes on the CPU side and 128 bytes on the GPU side.")]),e._v(" "),a("h5",{attrs:{id:"system-level-address-translation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-level-address-translation"}},[e._v("#")]),e._v(" System-level Address Translation")]),e._v(" "),a("p",[e._v("Grace CPU features a unique hardware unit called the "),a("strong",[e._v("System Memory Management Unit (SMMU)")]),e._v(".")]),e._v(" "),a("p",[e._v("The SMMU is responsible for translating virtual addresses to physical addresses by performing page table walks."),a("br"),e._v("\nCompared to a traditional MMU, the SMMU provides additional support for virtual-to-physical address translation requests from the GPU.")]),e._v(" "),a("p",[a("strong",[e._v("This is the flow that GPU TLB cached mapping and GPU wish to access physical memory stored in CPU memory system.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/a26fb78a-ada8-4098-8300-e15a44d27418",alt:"image"}})]),e._v(" "),a("p",[e._v("Access Flow:")]),e._v(" "),a("ul",[a("li",[e._v("A GPU thread accesses a virtual address.")]),e._v(" "),a("li",[e._v("The data is not cached in the GPU cache hierarchy. This generates a cache miss.")]),e._v(" "),a("li",[e._v("The virtual address is looked up in the GPU TLBs (Translation Lookaside Buffers) for virtual-to-physical translation."),a("br"),e._v("\nAs the translation is already cached, it is used to perform an access to physical memory.")]),e._v(" "),a("li",[e._v("The GMMU initiates a direct memory access (DMA) over the NVLink-C2C interconnect, at the cacheline granularity.")]),e._v(" "),a("li",[e._v("The requested access is performed from CPU memory, and send back to the GPU.")]),e._v(" "),a("li",[e._v("The access is completed, and memory is cached in the regular GPU cache hierarchy.")])]),e._v(" "),a("p",[e._v("Compared to pre-Grace Hopper systems, which rely on "),a("strong",[e._v("GPU page fault handling to access CPU memory")]),e._v(", this new approach has two main implications.")]),e._v(" "),a("ul",[a("li",[e._v("First, GPU accesses to CPU-located memory no longer systematically trigger GPU page faults.")]),e._v(" "),a("li",[e._v("Second, page faults are now generated by the SMMU and can be directly handled by the operating system’s page fault handling mechanism, simplifying the overall process.")])]),e._v(" "),a("h5",{attrs:{id:"memory-management-in-grace-hopper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-management-in-grace-hopper"}},[e._v("#")]),e._v(" Memory Management in Grace Hopper")]),e._v(" "),a("p",[e._v("two distinct page tables")]),e._v(" "),a("ul",[a("li",[e._v("system-wide page table")]),e._v(" "),a("li",[e._v("GPU-exclusive page table")])]),e._v(" "),a("p",[e._v("Memory allocation")]),e._v(" "),a("ul",[a("li",[e._v("allocations in CPU physical memory only")]),e._v(" "),a("li",[e._v("allocations in GPU physical memory only")]),e._v(" "),a("li",[e._v("allocations that can reside in either CPU or GPU physical memory")])]),e._v(" "),a("p",[e._v("a system-wide page table, "),a("strong",[e._v("located in CPU memory.")]),a("br"),e._v("\nThe operating system directly accesses this page table, creates and manages page table entries (PTEs). "),a("br"),e._v("\nThe SMMU uses this page table to provide virtual-to-physical address translation for both the CPU (when required by user applications) and the GPU (when requested over the NVLink-C2C interconnect). "),a("br"),e._v("\nMemory pages in the system-wide page table can be physically located in either CPU or GPU memory, and they use the system page size, which is defined at the operating system level and constrained by the CPU architecture capabilities."),a("br"),e._v("\nWhen using the Grace CPU, the page size is either 4 KB or 64 KB.")]),e._v(" "),a("p",[e._v("GPU-exclusive Page Table\nThe Grace Hopper system retains the local GPU page table from previous generations of Nvidia GPUs."),a("br"),e._v("\nThis page table, located in GPU memory and "),a("strong",[e._v("only accessible by the GPU")]),e._v(", stores virtual-to-physical translations for cudaMalloc allocations and cudaMallocManaged allocations when the physical location of the managed memory is on the GPU."),a("br"),e._v("\nThe page size used by this page table is 2 MB.")])])}),[],!1,null,null,null);a.default=r.exports}}]);