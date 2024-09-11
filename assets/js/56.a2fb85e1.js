(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{466:function(e,t,a){"use strict";a.r(t);var s=a(5),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"notes-from-youtube-link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes-from-youtube-link"}},[e._v("#")]),e._v(" Notes from "),t("a",{attrs:{href:"https://www.youtube.com/playlist?list=PL6RdenZrxrw-zNX7uuGppWETdxt_JxdMj",target:"_blank",rel:"noopener noreferrer"}},[e._v("Youtube Link"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_5-atomics-reductions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-atomics-reductions"}},[e._v("#")]),e._v(" 5. Atomics Reductions")]),e._v(" "),t("p",[e._v("Classic Sweep Reduction\n"),t("img",{attrs:{src:"https://github.com/user-attachments/assets/77e87165-58a8-43ff-a049-495c6c8ec8f4",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/ad2ec91a-307a-4589-bf38-fec7fd489af2",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_6-managed-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-managed-memory"}},[e._v("#")]),e._v(" 6. Managed Memory")]),e._v(" "),t("p",[e._v("Managed Memory does not promise performance."),t("br"),e._v("\nIt only paves ways for software programmer. For example, deepcopy.")]),e._v(" "),t("p",[e._v("We could restore the performance by using cudaMemPrefetchAsync")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/1466b29c-f4d9-4b8f-9535-b9f70de68b11",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("UM cannot do better than expertly written manual data movement, in most cases")])]),e._v(" "),t("ul",[t("li",[e._v("Unified Memory: Page-faulting")]),e._v(" "),t("li",[e._v("ATS: Nvidia with Power9. ATS service allows GPU to access CPU (Malloc) Memory"),t("br"),e._v("\nOnly works in Power9, not for X86.")]),e._v(" "),t("li",[e._v("HMM: Nvidia is working on HMM to allow similar with ATS.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/4ed00e8e-9afb-45d6-bf56-7faf95801a64",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("cudaDeviceSynchronize() function is necessary")])]),e._v(" "),t("p",[e._v("After cudaLaunch kernel, CPU can execute immedidately, which might read data that has not been processed by GPU yet."),t("br"),e._v("\nThus, synchronize to wait GPU finishing the processing.")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_7-concurrency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-concurrency"}},[e._v("#")]),e._v(" 7. Concurrency")]),e._v(" "),t("h3",{attrs:{id:"pin-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pin-memory"}},[e._v("#")]),e._v(" Pin Memory")]),e._v(" "),t("ul",[t("li",[e._v("Statically allocated in Physical Memory.")]),e._v(" "),t("li",[e._v("Stay out of paging system.")])]),e._v(" "),t("h3",{attrs:{id:"streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[e._v("#")]),e._v(" Streams")]),e._v(" "),t("ul",[t("li",[e._v("Sequential in Stream")]),e._v(" "),t("li",[e._v("No order among Streams")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/5f2b4794-c6ab-46b5-89c8-97e8d95a0a16",alt:"image"}})]),e._v(" "),t("p",[e._v("host Code could also be put into streams.")]),e._v(" "),t("p",[t("strong",[e._v("Migration(unified memory) call could be more expensive than memcopy.")])]),e._v(" "),t("ul",[t("li",[e._v("memcopy is handled by hardware engine")]),e._v(" "),t("li",[e._v("unfied memory operate at page level and needs update of page tables.")])]),e._v(" "),t("h3",{attrs:{id:"cuda-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cuda-event"}},[e._v("#")]),e._v(" CUDA Event")]),e._v(" "),t("p",[e._v("Most used in timing.")]),e._v(" "),t("h3",{attrs:{id:"concurrent-kernels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrent-kernels"}},[e._v("#")]),e._v(" Concurrent Kernels")]),e._v(" "),t("p",[t("em",[e._v("Less efficient than saturating the device with a single kernel.")])]),e._v(" "),t("p",[e._v("Scheduler might launch blocks from one kernel as much as much possible, try to exhaust the GPU."),t("br"),e._v("\nIf any resource is totally token, other kenel cannot launch.")]),e._v(" "),t("h3",{attrs:{id:"cuda-graph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cuda-graph"}},[e._v("#")]),e._v(" CUDA Graph")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_8-gpu-performance-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-gpu-performance-analysis"}},[e._v("#")]),e._v(" 8. GPU Performance Analysis")]),e._v(" "),t("h3",{attrs:{id:"top-level"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top-level"}},[e._v("#")]),e._v(" TOP-Level")]),e._v(" "),t("ul",[t("li",[e._v("Memory Bound")]),e._v(" "),t("li",[e._v("Compute Bound")]),e._v(" "),t("li",[e._v("Latency Bound\n"),t("ul",[t("li",[e._v("view the issue from idle time of scheduler")]),e._v(" "),t("li",[e._v("view the issue that the workloads shoule be in memory bound or compute bound")])])])]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("p",[e._v("If SM Utilization is low, it indicates that there might be latency problem since GPU cannot schedule enough threads.")]),e._v(" "),t("h2",{attrs:{id:"compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),t("p",[t("em",[e._v("nvcc -o t5 t5.cu -arch=sm_70 -lineinfo")])]),e._v(" "),t("p",[t("em",[e._v("nsys profile --stats=true ./t5")])]),e._v(" "),t("h3",{attrs:{id:"nvidia-nsight-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-nsight-system"}},[e._v("#")]),e._v(" NVIDIA Nsight System")]),e._v(" "),t("p",[e._v("Mainly for CPU and GPU. Initial timeline, find where to optimize.\nnsys-ui -> open *.qdrep")]),e._v(" "),t("h3",{attrs:{id:"nvidia-compute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-compute"}},[e._v("#")]),e._v(" NVIDIA Compute")]),e._v(" "),t("p",[e._v("Targeting at Kernel\n"),t("em",[e._v("ncu-cli --page details -f -o t5.profout ./t5")])]),e._v(" "),t("p",[e._v("we could find bottleneck from source code.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/f93475fb-e6a5-4eac-a4fb-ce467c15f1d8",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_9-cooperative-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-cooperative-groups"}},[e._v("#")]),e._v(" 9. Cooperative Groups")]),e._v(" "),t("h3",{attrs:{id:"block-level-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#block-level-sync"}},[e._v("#")]),e._v(" Block Level Sync")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/fa0baf0e-e17d-4257-9331-d6d4bf8e9c4f",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"coalesced-group-grid-wide-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coalesced-group-grid-wide-sync"}},[e._v("#")]),e._v(" Coalesced Group & Grid Wide Sync")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/379f94a2-1e79-4136-8813-c09318a377bc",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/7d532030-7fbd-4342-a92a-64cf8e500975",alt:"image"}})]),e._v(" "),t("p",[e._v("Sync is not just execution barrier but also visualability barrier.")])])}),[],!1,null,null,null);t.default=r.exports}}]);