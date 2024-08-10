(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{449:function(e,t,a){"use strict";a.r(t);var i=a(5),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"harnessing-integrated-cpu-gpu-system-memory-for-hpc-a-first-look-into-grace-hopper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#harnessing-integrated-cpu-gpu-system-memory-for-hpc-a-first-look-into-grace-hopper"}},[e._v("#")]),e._v(" Harnessing Integrated CPU-GPU System Memory for HPC: a first look into Grace Hopper")]),e._v(" "),t("p",[e._v("👍 👍 👍")]),e._v(" "),t("h3",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("h4",{attrs:{id:"limitation-of-state-of-art"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitation-of-state-of-art"}},[e._v("#")]),e._v(" limitation of state-of-art")]),e._v(" "),t("ol",[t("li",[e._v("UVM large overheads in handling page faults in GPU and suffers from read/write amplification due to page-level swapping.")]),e._v(" "),t("li",[e._v("Data object offloading requires offline profiling and application refactoring, limiting solution generality.")]),e._v(" "),t("li",[e._v("The performance of both solutions is constrained by data transfer bottlenecks between the CPU and GPU.")])]),e._v(" "),t("h4",{attrs:{id:"grace-hopper-superchip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grace-hopper-superchip"}},[e._v("#")]),e._v(" Grace Hopper Superchip")]),e._v(" "),t("ul",[t("li",[e._v("NVLink-C2C (chip-to-chip)  cache-coherent interconnect")]),e._v(" "),t("li",[e._v("a single virtual memory space is shared between the CPU and GPU (i.e., system memory)")]),e._v(" "),t("li",[e._v("address translation is accelerated by hardware.\n"),t("ol",[t("li",[e._v("direct remote accesses at cacheline granularity")]),e._v(" "),t("li",[e._v("heuristic-guided page migrations.")])])])]),e._v(" "),t("p",[e._v("By leveraging cacheline level access and Address Translation Service (ATS), which enables full access to all CPU and GPU memory allocations, the system memory eliminates the page-fault handling\noverhead needed in managed memory in UVM, and minimizes the need for memory migrations.")]),e._v(" "),t("p",[e._v("While managed memory splits the virtual memory space into both the system page table and GPU page table, system memory relies on a single system-wide page table, shared between the CPU and the GPU.")]),e._v(" "),t("h3",{attrs:{id:"grace-hooper-unified-memory-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grace-hooper-unified-memory-system"}},[e._v("#")]),e._v(" Grace Hooper Unified Memory System")]),e._v(" "),t("ul",[t("li",[e._v("system-allocated memory")]),e._v(" "),t("li",[e._v("CUDA managed memory")])]),e._v(" "),t("h4",{attrs:{id:"memory-subsystem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-subsystem"}},[e._v("#")]),e._v(" Memory Subsystem")]),e._v(" "),t("p",[e._v("The CPU is connected to 480 GB of LPDDR5X memory, while the GPU is equipped with 96 GB of HBM3 memory."),t("br"),e._v("\nThese two processors, GPU and CPU, are interconnected via the Nvidia NVLink-C2C interconnect.")]),e._v(" "),t("p",[e._v("Results show that the GPU’s HBM3 memory achieved a bandwidth of 3.4 TB/s, compared to its theoretical bandwidth of 4 TB/s."),t("br"),e._v("\nThe CPU’s LPDDR5X memory reached a bandwidth of 486 GB/s, close to its theoretical bandwidth of 500 GB/s.")]),e._v(" "),t("p",[e._v("We achieved a bandwidth of 375 GB/s for host-to-device (H2D) transfers and 297 GB/s for device-to-host (D2H) transfers, compared to the interconnect’s theoretical bandwidth of 450 GB/s.")]),e._v(" "),t("h5",{attrs:{id:"nvlink-c2c-interconnect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvlink-c2c-interconnect"}},[e._v("#")]),e._v(" NVLink-C2C Interconnect")]),e._v(" "),t("p",[e._v("In the Grace Hopper system, a processor (CPU or GPU) can directly access the other processor’s physical memory over the NVLink-C2C interconnect."),t("br"),e._v("\nCacheline granularity, with transfer sizes as small as 64 bytes on the CPU side and 128 bytes on the GPU side.")]),e._v(" "),t("h5",{attrs:{id:"system-level-address-translation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-level-address-translation"}},[e._v("#")]),e._v(" System-level Address Translation")]),e._v(" "),t("p",[e._v("Grace CPU features a unique hardware unit called the "),t("strong",[e._v("System Memory Management Unit (SMMU)")]),e._v(".")]),e._v(" "),t("p",[e._v("The SMMU is responsible for translating virtual addresses to physical addresses by performing page table walks."),t("br"),e._v("\nCompared to a traditional MMU, the SMMU provides additional support for virtual-to-physical address translation requests from the GPU.")]),e._v(" "),t("p",[t("strong",[e._v("This is the flow that GPU TLB cached mapping and GPU wish to access physical memory stored in CPU memory system.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a26fb78a-ada8-4098-8300-e15a44d27418",alt:"image"}})]),e._v(" "),t("p",[e._v("Access Flow:")]),e._v(" "),t("ul",[t("li",[e._v("A GPU thread accesses a virtual address.")]),e._v(" "),t("li",[e._v("The data is not cached in the GPU cache hierarchy. This generates a cache miss.")]),e._v(" "),t("li",[e._v("The virtual address is looked up in the GPU TLBs (Translation Lookaside Buffers) for virtual-to-physical translation."),t("br"),e._v("\nAs the translation is already cached, it is used to perform an access to physical memory.")]),e._v(" "),t("li",[e._v("The GMMU initiates a direct memory access (DMA) over the NVLink-C2C interconnect, at the cacheline granularity.")]),e._v(" "),t("li",[e._v("The requested access is performed from CPU memory, and send back to the GPU.")]),e._v(" "),t("li",[e._v("The access is completed, and memory is cached in the regular GPU cache hierarchy.")])]),e._v(" "),t("p",[e._v("Compared to pre-Grace Hopper systems, which rely on "),t("strong",[e._v("GPU page fault handling to access CPU memory")]),e._v(", this new approach has two main implications.")]),e._v(" "),t("ul",[t("li",[e._v("First, GPU accesses to CPU-located memory no longer systematically trigger GPU page faults.")]),e._v(" "),t("li",[e._v("Second, page faults are now generated by the SMMU and can be directly handled by the operating system’s page fault handling mechanism, simplifying the overall process.")])]),e._v(" "),t("h5",{attrs:{id:"memory-management-in-grace-hopper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-management-in-grace-hopper"}},[e._v("#")]),e._v(" Memory Management in Grace Hopper")]),e._v(" "),t("p",[e._v("two distinct page tables")]),e._v(" "),t("ul",[t("li",[e._v("system-wide page table")]),e._v(" "),t("li",[e._v("GPU-exclusive page table")])]),e._v(" "),t("p",[e._v("Memory allocation")]),e._v(" "),t("ul",[t("li",[e._v("allocations in CPU physical memory only")]),e._v(" "),t("li",[e._v("allocations in GPU physical memory only")]),e._v(" "),t("li",[e._v("allocations that can reside in either CPU or GPU physical memory")])]),e._v(" "),t("p",[e._v("a system-wide page table, "),t("strong",[e._v("located in CPU memory.")]),t("br"),e._v("\nThe operating system directly accesses this page table, creates and manages page table entries (PTEs). "),t("br"),e._v("\nThe SMMU uses this page table to provide virtual-to-physical address translation for both the CPU (when required by user applications) and the GPU (when requested over the NVLink-C2C interconnect). "),t("br"),e._v("\nMemory pages in the system-wide page table can be physically located in either CPU or GPU memory, and they use the system page size, which is defined at the operating system level and constrained by the CPU architecture capabilities."),t("br"),e._v("\nWhen using the Grace CPU, the page size is either 4 KB or 64 KB.")]),e._v(" "),t("p",[e._v("GPU-exclusive Page Table\nThe Grace Hopper system retains the local GPU page table from previous generations of Nvidia GPUs."),t("br"),e._v("\nThis page table, located in GPU memory and "),t("strong",[e._v("only accessible by the GPU")]),e._v(", stores virtual-to-physical translations for cudaMalloc allocations and cudaMallocManaged allocations when the physical location of the managed memory is on the GPU."),t("br"),e._v("\nThe page size used by this page table is 2 MB.")]),e._v(" "),t("h4",{attrs:{id:"system-allocated-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-allocated-memory"}},[e._v("#")]),e._v(" System-Allocated Memory")]),e._v(" "),t("p",[t("strong",[e._v("In general, when malloc is called, the operating system creates page table entries in the system page table without assigning physical memory to those pages.")]),e._v(" "),t("strong",[e._v("During the first access to a virtual address in the allocation, known as first-touch, a page fault is triggered since the accessed virtual page is not mapped to physical memory.")]),e._v("\nClassic first-touch. On Grace Hopper, this process applies to both CPU and GPU first-touch accesses.")]),e._v(" "),t("ul",[t("li",[e._v("When a GPU thread generates a first-touch access to a virtual address, a GPU TLB miss is triggered.")]),e._v(" "),t("li",[e._v("As a result, the GPU’s ATSTBU (Translation Buffer Unit) generates an address translation request and sends it to the SMMU over NVLink-C2C.")]),e._v(" "),t("li",[t("strong",[e._v("To answer the request, the SMMU performs a page table walk in the system page table")]),e._v(".")]),e._v(" "),t("li",[e._v("If no physical memory is allocated to the page, the SMMU issues a page fault.")]),e._v(" "),t("li",[e._v("OS handles the fault by updating the page table entry to point to GPU physical memory, as the first-touch originated from a GPU thread.")]),e._v(" "),t("li",[e._v("Once the physical address is stored in the GPU’s TLB, GPU threads can perform memory access using direct memory access to the physical memory address, potentially located in CPU memory, over NVLink-C2C.")])]),e._v(" "),t("h5",{attrs:{id:"automatic-delayed-access-counter-based-migrations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatic-delayed-access-counter-based-migrations"}},[e._v("#")]),e._v(" Automatic Delayed Access-counter-based Migrations")]),e._v(" "),t("p",[e._v("For system-allocated memory, the Grace Hopper system can be configured to automatically migrate memory regions between GPU and CPU physical memory."),t("br"),e._v("\nThe default migration strategy, detailed in Nvidia’s open-source GPU driver, relies on hardware counters to track GPU accesses to memory ranges."),t("br"),e._v("\nWhen a counter value exceeds a user-defined threshold (by default, 256), the GPU issues a notification in the form of a hardware interrupt, which is handled by the "),t("strong",[e._v("GPU driver on\nthe CPU.")]),t("br"),e._v(" "),t("strong",[e._v("The driver then determines")]),e._v(" whether to migrate the pages belonging to the associated virtual memory region.")]),e._v(" "),t("h4",{attrs:{id:"cuda-managed-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cuda-managed-memory"}},[e._v("#")]),e._v(" CUDA Managed Memory")]),e._v(" "),t("p",[e._v("CUDA managed memory is primarily a software abstraction, implemented as part of the "),t("strong",[e._v("CUDA runtime libraries and the Nvidia GPU driver")]),e._v(".\nProgrammers create managed memory allocations using the cudaMallocManaged() function."),t("br"),e._v("\nSimilar to malloc, for post-Pascal systems, the virtual memory is not immediately mapped to physical memory."),t("br"),e._v("\nInstead, the location of the first-touch triggers this mapping operation.")]),e._v(" "),t("blockquote",[t("p",[e._v("Please Notice that CUDA Managed Memory doesn't guarantee memory is allocated in GPU. It just means that the memory is allocated by this API.")])]),e._v(" "),t("h5",{attrs:{id:"on-demand-page-migration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#on-demand-page-migration"}},[e._v("#")]),e._v(" On-demand page migration")]),e._v(" "),t("p",[e._v("CUDA managed memory relies on on-demand page migration to enable both GPU and CPU to access the shared virtual memory range."),t("br"),e._v("\nWhen the GPU tries to access a page, a page fault is triggered if a GPU TLB miss occurs and the GMMU fails to find the virtual address in the GPU-exclusive page table."),t("br"),e._v("\nThis page fault causes a page migration from CPU memory to GPU memory."),t("br"),e._v("\nwhen GPU memory is overwhelmed, pages can also be evicted to CPU memory.\\")]),e._v(" "),t("p",[e._v("Coherent dynamic memory allocation was introduced on Power9 platforms in CUDA 9.2.\nThis feature is supported by the ATS, which enables hardware-level address translations by allowing direct communication between CPU and GPU MMUs and eliminates the need for software-level address translation.")]),e._v(" "),t("h5",{attrs:{id:"speculative-prefetching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#speculative-prefetching"}},[e._v("#")]),e._v(" Speculative prefetching")]),e._v(" "),t("p",[e._v("before they are accessed, in order to reduce the page fault handling overhead of CUDA managed memory on the critical path."),t("br"),e._v("\nThese strategies include explicit prefetching, triggered through the cudaMemPrefetchAsync API, and implicit prefetching performed by GPU hardware prefetchers.")]),e._v(" "),t("h3",{attrs:{id:"methodology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methodology"}},[e._v("#")]),e._v(" Methodology")]),e._v(" "),t("p",[e._v("A snippet of code transformation from a typical CUDA code with explicit memory copy to Unified Memory.\n"),t("img",{attrs:{src:"https://github.com/user-attachments/assets/3d65319c-3500-4d24-94d6-c108c3b20746",alt:"image"}})]),e._v(" "),t("p",[e._v("We derive two versions for each application,")]),e._v(" "),t("ul",[t("li",[e._v("one using CUDA managed memory")]),e._v(" "),t("li",[e._v("one using system-allocated memory.")])]),e._v(" "),t("p",[e._v("For this purpose, we first identify candidate memory allocations to replace, by locating explicit host-to-device data movements in the code."),t("br"),e._v("\nWe replace the destination and source buffers in those data transfers by a single buffer, allocated using one of the two unified memory allocators, either the "),t("strong",[e._v("system-level allocator (malloc)")]),e._v(" or "),t("strong",[e._v("CUDA managed memory allocator (cudaMallocManaged)")]),e._v("."),t("br"),e._v("\nGPU-only buffers, which are never meant be accessed by the CPU, and are typically only used for storing intermediary results on the GPU, are still allocated with cudaMalloc.")]),e._v(" "),t("p",[e._v("Phases:"),t("br"),e._v("\nGPU context initialization and argument parsing, allocation, CPU-side buffers initialization, computation, and de-allocation.")]),e._v(" "),t("h3",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("categorized into two classes.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("In some applications, the system memory version outperforms the managed memory version."),t("br"),e._v("\nThe managed memory will trigger page faults when the GPU accesses data that is not in GPU memory, and start on-demand page migration."),t("br"),e._v("\nAs pointed in multiple existing works [2, 9], the page fault handling can cause higher overhead than the data migration itself. "),t("br"),e._v("\nThe new cache-coherent NVlink-C2C enables direct data access to CPU memory at cacheline level without involving the expensive page fault mechanism, attributing to the observed speedup.")])]),e._v(" "),t("li",[t("p",[e._v("the system memory version even outperforms the original explicit version. The significant difference in the allocation and de-allocation time depending on the type of memory management in use.")])])]),e._v(" "),t("p",[e._v("Our in-depth analysis in Section 5 identifies the main factors coming from")]),e._v(" "),t("ul",[t("li",[e._v("the data structures that are initialized on GPU")]),e._v(" "),t("li",[e._v("the different sizes of the integrated system pages and GPU-exclusive pages.")])]),e._v(" "),t("p",[e._v("We also identified a difference in behavior for the GPU context initialization."),t("br"),e._v("\nIn the "),t("em",[e._v("traditional explicit version and managed memory version")]),e._v(", "),t("strong",[e._v("memory allocations, and data transfer")]),e._v(" are done through specific CUDA APIs before kernel launches, which "),t("strong",[e._v("implicitly initialize GPU context")]),e._v("."),t("br"),e._v("\nHowever, in the system memory version, due to the absence of explicit CUDA memory allocation and data copy API calls, "),t("strong",[e._v("GPU context initialization occurs within the first kernel launch, apparently prolonging the computation time")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/3941db18-f567-4b0e-9c45-fca884687429",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("CUDA Managed Mode:")]),e._v("\nonce in the computation phase, GPU access to data triggers page migration, and a steep decrease in system memory and a sharp increase in GPU memory usage is observed.\nhotspot represents a typical class of existing GPU applications, where data structures used in GPU computation are initialized on CPU.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/9fb7f114-8df1-4b2e-bcf5-eccbf4003abc",alt:"image"}})]),e._v(" "),t("p",[e._v("In this application, the end-to-end execution is significantly prolonged in the system memory version, compared to the managed memory version. "),t("br"),e._v("\nHowever, we also notice that the "),t("strong",[e._v("main difference is only constrained in the initialization phase")]),e._v(", "),t("br"),e._v("\nwhere the GPU memory usage slowly ramps up in the system memory version (orange) but quickly reaches the peak in the managed memory version (blue)."),t("br"),e._v("\nIn fact, the computation phase in both versions are similar.\n"),t("img",{attrs:{src:"https://github.com/user-attachments/assets/22437593-84c2-492a-ae77-ef09f9616441",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"cpu-gpu-integrated-system-page-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-gpu-integrated-system-page-table"}},[e._v("#")]),e._v(" CPU-GPU Integrated System Page Table")]),e._v(" "),t("p",[e._v("The following two factor will affect integrated page table."),t("br"),e._v("\nSystem memory uses a first-touch placement policy and pages always reside in the "),t("strong",[e._v("system page table")]),e._v("."),t("br"),e._v("\nManaged memory also uses a first-touch placement policy but pages may reside in "),t("strong",[e._v("either the system page table or GPU page table, depending on its physical location")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"cpu-side-initialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-side-initialization"}},[e._v("#")]),e._v(" CPU-side Initialization")]),e._v(" "),t("p",[t("strong",[e._v("Common HPC")]),e._v("\nperform data initialization, often including pre-processing, on the CPU before offloading data onto the GPU for computation.")]),e._v(" "),t("p",[e._v("In such a pattern, the first-touch policy will cause pages to be placed on the CPU during initialization."),t("br"),e._v("\nWhen the computation phase starts, in managed memory, "),t("strong",[e._v("data is migrated on demand to the GPU memory often with additional pages from speculative prefetching")]),e._v(", which will result in both traffic on the NVLink-C2C and increased GPU memory utilization."),t("br"),e._v("\nInstead, in the system memory, "),t("strong",[e._v("data will not be migrated on access but deferred")]),e._v(", which will result in only traffic on the NVLink-C2C link and no immediately increased GPU memory utilization.\n"),t("strong",[e._v("using system memory (left) and CUDA managed memory (right).")]),e._v(" "),t("img",{attrs:{src:"https://github.com/user-attachments/assets/5a435960-f7f9-4aa4-a282-518dca8ac8c6",alt:"image"}})]),e._v(" "),t("p",[t("em",[e._v("In short")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Managed, introduce additional prefetch")]),e._v(" "),t("li",[e._v("System, access-counter-based migration")])]),e._v(" "),t("h4",{attrs:{id:"gpu-side-initialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-side-initialization"}},[e._v("#")]),e._v(" GPU-side Initialization")]),e._v(" "),t("blockquote",[t("p",[e._v("Please Notice that Malloc and CUDA can both allocate memory, then initialized by GPU, which is far more different.")])]),e._v(" "),t("p",[e._v("With CUDA managed memory, the "),t("strong",[e._v("initialization is much shorter")]),e._v(" than that in the system memory version, and no page migration is performed during the computation phase, as the "),t("strong",[e._v("first touch by GPU has directly mapped data to GPU memory")]),e._v(".")]),e._v(" "),t("p",[e._v("With system memory, the "),t("strong",[e._v("GPU first-touch policy triggers a replayable page fault")]),e._v(", as the page being first-touched is neither present in the GMMU page table, nor through address\ntranslation."),t("br"),e._v(" "),t("strong",[e._v("The CPU then handles the page fault and populates the system page table, therefore slowing down the initialization time on the GPU.")])]),e._v(" "),t("p",[t("em",[e._v("In short")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Managed, no page migration")]),e._v(" "),t("li",[e._v("System, CPU intervene the process, handle page fault and populate the system page table.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/b59c2847-9e4c-4518-95a0-16c87a2a099b",alt:"image"}})]),e._v(" "),t("p",[e._v("system-allocated memory performs better in cases of CPU-side initialization as the page faults are both triggered and handled on the CPU side."),t("br"),e._v("\nIn the GPU-side initialization, page table initialization on the CPU-side significantly slows down the execution. In the latter cases, we observed that CUDA managed memory performed better.")]),e._v(" "),t("h3",{attrs:{id:"system-page-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-page-size"}},[e._v("#")]),e._v(" System Page Size")]),e._v(" "),t("p",[e._v("All pages in a "),t("strong",[e._v("system allocation")]),e._v(" use the system page size, while only pages resident on CPU memory in the managed memory uses the system page size."),t("br"),e._v("\nThe system page sizes mainly impacts the "),t("strong",[e._v("page initialization overhead that often occurs in application initialization phase")]),e._v(", and "),t("strong",[e._v("migration performance between CPU and GPU memory that often occurs in the computation phase")]),e._v(".")]),e._v(" "),t("p",[e._v("We run each application in the system memory version by configuring the system pages in 4 KB and 64 KB.")]),e._v(" "),t("p",[e._v("A noticeable difference between 4 KB and 64 KB pages lies in the de-allocation time, which is significantly higher in 4 KB system pages, for all applications.")]),e._v(" "),t("p",[e._v("Rodinia applications, with the exception of SRAD, exhibit lower compute time for 4 KB pages compared to 64 KB pages (1.1×-2.1×).")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a34addf0-8cf3-4578-a7d6-6132c7ace074",alt:"image"}})]),e._v(" "),t("p",[e._v("One possible reason for the lower performance in 64 KB pages pages is the granularity of migrated pages may cause amplification, resulting in "),t("strong",[e._v("unused data being migrated")]),e._v("."),t("br"),e._v("\nThis performance loss could also partially be attributed to the "),t("strong",[e._v("automatic migrations that might incur temporary latency increase when the computation accesses on pages that are being migrated")]),e._v(", reducing performance."),t("br"),e._v("\nIn Rodinia applications, this is particularly noticeable as applications have a short computation time, where migrated data may not be sufficiently reused.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/d75f00c6-e0b0-4efb-b2ec-61d83a4f7592",alt:"image"}})]),e._v(" "),t("p",[e._v("With an increasing problem size, the speedup in the managed memory version is decreasing while the speedup in the system memory version is increasing.")]),e._v(" "),t("p",[e._v("In CUDA managed memory, when using 64 KB pages, the execution time is 10% lower than with 4 KB pages. This "),t("strong",[e._v("limited impact")]),e._v(" of the system page size is expected, as Qiskit has GPU-side data initialization, and "),t("strong",[e._v("CUDA managed memory uses the GPU page table for GPU-resident data, with a constant 2 MB page size, independent of system page size")]),e._v(".")]),e._v(" "),t("p",[e._v("While the computation time remains stable between page sizes, the "),t("strong",[e._v("initialization time is drastically reduced with 64 KB pages")]),e._v(", with a 5× improvement."),t("br"),e._v("\nThis difference highlights the cost of GPU-side page initialization, where "),t("strong",[e._v("memory pages are first-touched on the GPU-side, and page table initialization is performed on the CPU-side, representing a notable bottleneck in the application")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"page-migration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page-migration"}},[e._v("#")]),e._v(" Page Migration")]),e._v(" "),t("p",[e._v("we compare the new automatic access-counter-based strategy in system-allocated memory on Grace Hopper with the on-demand page migration strategy in CUDA managed memory.")]),e._v(" "),t("ul",[t("li",[e._v("access-counter-based\nAn application needs to have access patterns that can clearly expose hot pages to exploit the access-counter-based strategy in system-allocated memory."),t("br"),e._v("\nWe examined all the test applications and choose SRAD as this application uses an iterative algorithm in its computation phase."),t("br"),e._v("\nTherefore, with a sufficient number of iterations, the access-counter-based page migration should migrate pages repeatedly accessed during computation iterations into GPU memory. \\")]),e._v(" "),t("li",[e._v("on-demand migration\n"),t("strong",[e._v("the on-demand page migration in the managed system version should migrate all accessed pages on their first access.")])])]),e._v(" "),t("p",[e._v("For the managed memory version, due to page migration in the first iteration, the execution time of this iteration is significantly higher than the other iterations.")]),e._v(" "),t("p",[e._v("In the system memory version, from a performance standpoint, the computational phase consists of three sub-phases, as separated by dashed line on Figure 10.")]),e._v(" "),t("ul",[t("li",[e._v("The first phase corresponds to the first iteration, with high execution time, primarily caused by the overhead of GPU first-touch on system-allocated data, as memory pages must be initialized on the CPU-side.")]),e._v(" "),t("li",[e._v("The second phase (iteration 2-4), exhibits a decreasing iteration time but still slower than that of the managed memory version.")]),e._v(" "),t("li",[e._v("In the final phase (iteration 5 and above), the iteration time stabilizes and outperform the managed memory version.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/bc54e733-2336-49f9-b459-21d3bdc1bee0",alt:"image"}})]),e._v(" "),t("p",[e._v("In the managed memory version, all reads are performed from GPU memory, even for the first iteration, where pages are being migrated, and exhibit non-zero reads over NVLink-C2C."),t("br"),e._v("\nThis is because in managed memory, pages are first migrated, and then read from local GPU memory."),t("br"),e._v("\nIn the system memory version, we observe that memory reads over NVLink-C2C decreases as reads from GPU memory increases gradually in iteration 1-4."),t("br"),e._v("\nThis observation confirms that the "),t("strong",[e._v("ccess-pattern-based automatic migrations are being triggered in this stage, which hinders performance in this period.")]),t("br"),e._v("\nAfter the entire working set has been migrated to GPU memory, that is, for iterations 5-12, memory reads over NVLink-C2C remain nearly zero while reads from GPU memory stabilize at\n1.5 GB per iteration."),t("br"),e._v("\nConsequently, the performance in iterations 5-12 improves to outperform that of the managed memory version.")]),e._v(" "),t("h3",{attrs:{id:"memory-oversubscription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-oversubscription"}},[e._v("#")]),e._v(" Memory Oversubscription")]),e._v(" "),t("ul",[t("li",[e._v("First, pages can be evicted from GPU memory, and the required pages can be migrated into GPU. This is the expected behavior for CUDA managed memory.")]),e._v(" "),t("li",[e._v("In addition, as Grace Hopper supports direct memory access over NVLink-C2C, data in CPU memory can be remotely accessed without migration.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/6057e07f-e39f-4bb4-a8fa-4e6190627bad",alt:"image"}})]),e._v(" "),t("p",[e._v("The system memory version of Rodinia applications, BFS, hotspot, needle, pathfinder, are less affected by oversubscription than the managed versions, as indicated by the increased speedup at increased over-subscription."),t("br"),e._v("\nThis trend is because that the system-memory version always places data on CPU memory, and "),t("strong",[e._v("performs accesses over NVLink-C2C link.")]),t("br"),e._v("\nHowever, in the managed memory version, data is being migrated to the GPU, and evicted when the GPU memory has been exhausted."),t("br"),e._v(" "),t("strong",[e._v("This eviction and migration process significantly impacts the performance.")])]),e._v(" "),t("p",[e._v("For the 34-qubits quantum volume simulation (about 130% GPU memory oversubscription), a significant slowdown with managed memory is observed compared to the explicit copy version. Further analysis reveals that no page is migrated and "),t("strong",[e._v("all data is accessed over NVLink-C2C at a low bandwidth")]),e._v("."),t("br"),e._v("\nWe optimize the managed memory version using CUDA managed memory prefetching to transform the majority of data access to be read locally from GPU memory.")]),e._v(" "),t("p",[e._v("In previous in-memory scenarios, CUDA managed memory in both 4 KB and 64 KB pages exhibits similar execution times."),t("br"),e._v("\nHowever, in oversubscription scenarios, the system page size shows a high impact on execution time.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/c3d2404e-79a1-41c9-8461-e170c9adb20e",alt:"image"}})]),e._v(" "),t("p",[e._v("In the 34-qubit quantum simulation, "),t("strong",[e._v("switching from 4 KB to 64 KB system pages shortens initialization and accelerates page migration")]),e._v(" by 58%."),t("br"),e._v("\nInterestingly, the 30-qubit simulation shows a different preference on the system page size, nearly 3× slower computation when using 64 KB system pages as shown in Figure 13.\\ This is unexpected, as the page size for GPU-resident memory is 2 MB in managed memory, and is not modified by the system page size.\n"),t("strong",[e._v("We suggest that this difference is due to some pages being evicted to CPU memory where the system page size is used. In the case of 64 KB pages, when those pages are migrated back to the GPU, the amount of migrated memory at a time is higher than 4 KB, affecting performance.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);