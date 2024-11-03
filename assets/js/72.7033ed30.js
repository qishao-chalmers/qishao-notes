(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{516:function(e,t,a){"use strict";a.r(t);var n=a(8),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[1900] Mixed Precision Training")]),e._v(" "),t("li"),e._v(" "),t("li",[e._v("[142] Performance, Design, and Autotuning of Batched GEMM for GPUs")]),e._v(" "),t("li",[e._v("[1] FlattenQuant: Breaking Through the Inference Compute-bound for Large Language Models with Per-tensor Quantization")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_1-1900-mixed-precision-training"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1900-mixed-precision-training"}},[e._v("#")]),e._v(" 1. [1900] Mixed Precision Training")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/015ccb67-ef34-4c76-ad52-10618c578ad7",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/1a564342-e231-42a4-99d5-e9fef4500a1a",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("Loss Scaling")])]),e._v(" "),t("p",[e._v("Note that much of the FP16 representable range was left unused, while many values were below the minimum representable range and became zeros."),t("br"),e._v("\nScaling up the gradients will shift them to occupy more of the representable range and preserve values that are otherwise lost to zeros."),t("br"),e._v("\nThis particular network diverges when gradients are not scaled, but scaling them by a factor of 8 (increasing the exponents by 3) is sufficient to match the accuracy achieved with FP32 training.")]),e._v(" "),t("p",[e._v("activation gradient values below 2^−27 in magnitude were irrelevant to the training of this model, but values in the [2^−27, 2^−24) range were important to preserve.")]),e._v(" "),t("p",[e._v("One efficient way to shift the gradient values into FP16-representable range is to scale the loss value computed in the forward pass, prior to starting back-propagation.")]),e._v(" "),t("p",[e._v("By chain rule back-propagation ensures that all the gradient values are scaled by the same amount.")]),e._v(" "),t("p",[e._v("The gradients need to be unscaled before the final weight update.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_2-142-performance-design-and-autotuning-of-batched-gemm-for-gpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-142-performance-design-and-autotuning-of-batched-gemm-for-gpus"}},[e._v("#")]),e._v(" 2. [142] Performance, Design, and Autotuning of Batched GEMM for GPUs")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/ad7a256c-91eb-4087-a8de-ccfeb05ea8a3",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/f205bad1-19a3-4843-8fca-cc12cfa7298a",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_4-1-flattenquant-breaking-through-the-inference-compute-bound-for-large-language-models-with-per-tensor-quantization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-flattenquant-breaking-through-the-inference-compute-bound-for-large-language-models-with-per-tensor-quantization"}},[e._v("#")]),e._v(" 4. [1] FlattenQuant: Breaking Through the Inference Compute-bound for Large Language Models with Per-tensor Quantization")]),e._v(" "),t("p",[e._v("FlattenQuant can directly use 4 bits to achieve 48.29% of the linear layer calculation in LLMs, with the remaining layers using 8 bits.")]),e._v(" "),t("p",[e._v("The 4-bit matrix multiplication introduced in the FlattenQuant method can effectively address the compute-bound caused by large matrix calculation."),t("br"),e._v("\nOur work achieves up to 2× speedup and 2.3× memory reduction for LLMs with negligible loss in accuracy.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/dee83087-aa07-4441-b6f6-31a8eafedaed",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("Framework")]),e._v(" "),t("img",{attrs:{src:"https://github.com/user-attachments/assets/d386534e-97ad-4ac6-a34e-83545e1e68b2",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/1924a296-1948-46c1-b835-a99bfa229b03",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);