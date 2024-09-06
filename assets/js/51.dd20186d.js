(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{462:function(e,a,t){"use strict";t.r(a);var i=t(5),s=Object(i.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ol",[a("li",[e._v("[22] Adaptive Memory-Side Last-Level GPU Chacing")])]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"_1-adaptive-memory-side-last-level-gpu-chacing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-adaptive-memory-side-last-level-gpu-chacing"}},[e._v("#")]),e._v(" 1. Adaptive Memory-Side Last-Level GPU Chacing")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("GPUs typically feature a two-level on-chip cache hierarchy in which the first-level caches are private to each SM while the last-level cache (LLC) is a shared memory-side cache that is partitioned into\nequally-sized slices and accessed via the NoC.")]),e._v(" "),a("p",[e._v("In fact, we find that GPU workloads have large read-only shared data footprints. For such sharing-intensive workloads, multiple SMs experience a bandwidth bottleneck when\nthey serialize on accesses to the same shared cache line.")]),e._v(" "),a("p",[e._v("While this is a practical solution for a limited number of cores in a CPU, it does not scale to a large number of SMs due to limitations in scaling GPU die size.")]),e._v(" "),a("p",[e._v("Shared LLCs incur a performance bottleneck for workloads that frequently access data shared by multiple SMs.")]),e._v(" "),a("p",[e._v("A shared memory-side LLC consists of multiple slices each caching a specific memory partition, i.e., a specific address range of the entire memory space is served by a particular\nmemory controller.")]),e._v(" "),a("p",[e._v("As a result, "),a("strong",[e._v("a shared cache line appears in a single LLC slice, which leads to a severe performance bottleneck if multiple SMs concurrently access the same shared data.")])]),e._v(" "),a("p",[e._v("We find that GPU applications with "),a("strong",[e._v("high degrees of read-only data sharing significantly benefit from a private LLC organization.")])]),e._v(" "),a("p",[e._v("To that end, this paper proposes adaptive memory-side caching to dynamically choose between a shared or private memory-side LLC.")]),e._v(" "),a("p",[e._v("These observations suggest an opportunity to improve performance by dynamically adapting a memory-side LLC to the needs of an application’s sharing behavior.")]),e._v(" "),a("p",[a("strong",[e._v("adaptive memory-side caching to dynamically choose between a shared or private memory-side LLC.")]),e._v(" "),a("br"),e._v("\nSelecting a shared versus private LLC is done using a lightweight performance model.")]),e._v(" "),a("p",[e._v("By default, the GPU assumes a shared LLC.")]),e._v(" "),a("p",[e._v("Profiling information is periodically collected to predict LLC miss rate and bandwidth under a private LLC organization while executing under a shared LLC. If deemed beneficial, the LLC is adapted to\na private cache.")]),e._v(" "),a("p",[e._v("The LLC reverts back to a shared organization periodically and when a new kernel gets launched.")]),e._v(" "),a("h3",{attrs:{id:"main-idea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-idea"}},[e._v("#")]),e._v(" Main Idea")]),e._v(" "),a("p",[e._v("Private LLC could have replicate data, but waste memory space.")]),e._v(" "),a("p",[e._v("Shared LLC could access shared data a lot, introducing bottleneck.")]),e._v(" "),a("p",[e._v("Switch between those two modes.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/8138dd9c-12e8-430d-8c65-43cae6d84a53",alt:"image"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);