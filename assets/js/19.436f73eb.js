(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{421:function(e,t,n){"use strict";n.r(t);var i=n(5),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("Supporting Virtual Memory in GPGPU without Supporting Precise Exception")]),e._v(" "),t("li",[e._v("Other Papers.")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_1-supporting-virtual-memory-in-gpgpu-without-supporting-precise-exception-2012"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-supporting-virtual-memory-in-gpgpu-without-supporting-precise-exception-2012"}},[e._v("#")]),e._v(" 1. Supporting Virtual Memory in GPGPU without Supporting Precise Exception [2012]")]),e._v(" "),t("p",[e._v("Introduction:\nGPU is designed for grahics.  Supporting precise exceptions is not needed at all and it is extremely expensive due to the high number of registers.\nOther Designs:")]),e._v(" "),t("ol",[t("li",[e._v("Software restart Remarker\nImplementing virtual memory in a vector processor with software restart markers. 2006\nReducing Exception Management Overhead with Software Restart Markers 2008")]),e._v(" "),t("li",[e._v("Idempotent\nIdempotent processor architecture 2011\nigpu: Exception support and speculative execution on gpus. 2012")])]),e._v(" "),t("p",[e._v("a) set start_maker\nset start_marker indicates a place where a program can be restarted after a page fault exception handler is serviced.")]),e._v(" "),t("p",[e._v("b) LD.pfchk\nAn LD.pfchk instruction sets pfbit, when it generates a page fault.\nThe pfbit registers behave like predicate registers in IA-64. Instructions that can potentially change program’s states are predicated with pfbit.")]),e._v(" "),t("p",[e._v("c) sw_call\nsw_call is composed of "),t("strong",[e._v("barrier")]),e._v(" and "),t("strong",[e._v("call")]),e._v(" instructions.\nWhen a processor fetches an sw_call instruction, it enforces an execution barrier.")]),e._v(" "),t("p",[e._v("Instructions after sw_call can be fetched/renamed, but none of the instructions will be executed. call instructions invoke page fault handler.\nImplementing this execution barrier is very easy, but it reduces the benefit of a fully out-of-order scheduling processor.")]),e._v(" "),t("p",[e._v("LD.pfchk will set pfbits. Instructions that can potentially change program's state are predicated with pfbit.\nSimilar to idempotent processors, instructions that can be safely reexecuted without changing the program’s results do not need to be predicated. If all instructions are predicated, those instructions cannot be executed until the\nload instruction is completed, thereby degrading performance significantly.")]),e._v(" "),t("ol",[t("li",[e._v("Not all load/store instruction will be set as LD.pfck. Compiler's job to distinguish Static, Malloc, Large Arrays, Stack Operations, Pointers, and so on")]),e._v(" "),t("li",[e._v("Only those instructions that can safely reexecuted can be predicated.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* original C-code */\nfor (int ii=0; ii<N; ii++)\na[ii] = b[ii]*2;\n/* new code */\nfor (int ii=0; ii<N; ii++) {\nif (!(ii%kk)) {\n// kk = page size%(size of(a[0]))\npfchk(&(a[0])+ii*kk));\npfchk(&(b[0])+ii*kk));\n}\na[ii] = b[ii]*2;\n}\nvoid pfchk(int addr) {\n/* use intrinsics to insert assembly code */\nset start_marker;\nLD.pfchk(addr);\n(pfbit) sw_call(start_marker);\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);