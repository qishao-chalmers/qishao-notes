(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{459:function(e,t,a){"use strict";a.r(t);var s=a(5),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[248] Dissecting GPU Memory Hierarchy through Microbenchmarking")]),e._v(" "),t("li",[e._v("[75] Benchmarking the Memory Hierarchy of Modern GPUs")]),e._v(" "),t("li",[e._v("[18] Benchmarking the GPU memory at the warp level")])]),e._v(" "),t("hr"),e._v(" "),t("p",[t("strong",[e._v("1. Dissecting GPU Memory Hierarchy through Microbenchmarking")]),e._v(" "),t("strong",[t("strong",[e._v("Parameter")])]),e._v(" "),t("img",{attrs:{src:"https://github.com/user-attachments/assets/08215b14-4856-4d3a-8c6a-b5050f905f02",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/5daed100-0155-4fed-9358-e26681294b2a",alt:"image"}})]),e._v(" "),t("p",[t("strong",[t("strong",[e._v("Global Memory Latency")])])]),e._v(" "),t("ul",[t("li",[e._v("very large s1 = 32 MB to construct the TLB/page table miss and cache miss (P5&P6)")]),e._v(" "),t("li",[e._v("set s2 = 1 MB to construct the L1 TLB hit but cache miss (P4)")]),e._v(" "),t("li",[e._v("After a total of 65 data accesses, 65 data lines are loaded into the cache."),t("br"),e._v("\nWe then visit the cached data lines with s1 again for several times, to construct cache hit but TLB miss (P2&P3).")]),e._v(" "),t("li",[e._v("set s3 = 1 element and repeatedly load the data in a cache line so that every memory access is a cache hit (P1).")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/e5c397e8-f4b4-46ba-b7ee-41c34fa08b33",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/1f616c8e-a758-4151-b1eb-61f15c810246",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/822fc563-d0dc-4708-afd2-89549adb7ec4",alt:"image"}})]),e._v(" "),t("ul",[t("li",[e._v("The Maxwell and Kepler devices have a unique memory access pattern (P6) for page table context switching. "),t("br"),e._v("\nWhen a kernel is launched, only memory page entries of 512 MB are activated. "),t("br"),e._v("\nIf the thread visits an inactivate page entry, the hardware needs a rather long time to switch between page tables."),t("br"),e._v("\nThis phenomena is also reported in [22] as page table “miss”.")]),e._v(" "),t("li",[e._v("The Maxwell L1 data cache addressing does not go through the TLBs or page tables."),t("br"),e._v("\nOn the GTX980, there is no TLB miss pattern (i.e., P2 and P3) when the L1 data cache is hit."),t("br"),e._v("\nOnce the L1 cache is missed, the access latency increases from tens of cycles to hundreds or even thousands of cycles.")]),e._v(" "),t("li",[e._v("The TLBs are off-chip.")]),e._v(" "),t("li")])])}),[],!1,null,null,null);t.default=r.exports}}]);