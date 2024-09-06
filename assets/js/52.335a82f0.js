(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{462:function(e,a,t){"use strict";t.r(a);var r=t(5),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ol",[a("li",[e._v("[530 MICRO] Improving GPU Perfromance via Large Warps and Two-Level Warp Scheduling")])]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"improving-gpu-perfromance-via-large-warps-and-two-level-warp-scheduling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improving-gpu-perfromance-via-large-warps-and-two-level-warp-scheduling"}},[e._v("#")]),e._v(" Improving GPU Perfromance via Large Warps and Two-Level Warp Scheduling")]),e._v(" "),a("h2",{attrs:{id:"main-idea-in-short"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-idea-in-short"}},[e._v("#")]),e._v(" Main Idea in Short")]),e._v(" "),a("ol",[a("li",[e._v("Solve issue of branch divergence by managing large wrap and create diverged sub-warp from large warp")]),e._v(" "),a("li",[e._v("Two-level warp scheduling. If all warps are scheduled together, they might get stuck by memory access request at the same time."),a("br"),e._v("\nThus they group 32 warps into 4 fetch groups. Group0 is prioritized first and then following warps.")])]),e._v(" "),a("h2",{attrs:{id:"framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#framework"}},[e._v("#")]),e._v(" Framework")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/f926ad58-a0fe-4c56-b529-4292b5ccc0ce",alt:"image"}}),e._v(" "),a("img",{attrs:{src:"https://github.com/user-attachments/assets/b0ccc14d-60e6-4cf8-9d55-a5f05693d351",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"misc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[e._v("#")]),e._v(" MISC")]),e._v(" "),a("h3",{attrs:{id:"branch-divergence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch-divergence"}},[e._v("#")]),e._v(" Branch Divergence")]),e._v(" "),a("p",[e._v("Maintainance of branch divergence is well illustrated in the paper.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/6cf92e7b-a3db-464f-a151-864a35541b51",alt:"image"}})]),e._v(" "),a("ul",[a("li",[e._v("Since a warp can only have a single active PC at any given time, when branch divergence occurs, one path must be chosen first and the other is pushed on a divergence\nstack associated with the warp so that it can be executed later.")]),e._v(" "),a("li",[e._v("The divergence stack is also used to bring the warp back together once the divergent paths have been executed and all threads have reached a control flow merge (CFM)\npoint.")]),e._v(" "),a("li",[e._v("A divergence stack entry consists of three fields: a re-convergence PC, an active mask, and an execute PC.")])]),e._v(" "),a("h2",{attrs:{id:"core-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-pipeline"}},[e._v("#")]),e._v(" Core Pipeline")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/065f1360-ea1f-46b8-b5e2-bdb9e24f8e09",alt:"image"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);