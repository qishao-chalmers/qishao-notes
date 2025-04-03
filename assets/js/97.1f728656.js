(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{550:function(e,t,a){"use strict";a.r(t);var i=a(8),r=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[C99 Y2024] Full Parameter Fine-tuning for Large Language Models with Limited Resources")]),e._v(" "),t("li",[e._v("[C25 Y2024] FLORA: Low-Rank Adapters Are Secretly Gradient Compressors")]),e._v(" "),t("li",[e._v("[C42 Y2024] GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection")]),e._v(" "),t("li",[e._v("[C0 2024] CompAct: Compressed Activations for Memory-Efficient LLM Training")]),e._v(" "),t("li",[e._v("[C2 2024] ProTrain: Efficient LLM Training via Adaptive Memory Management")]),e._v(" "),t("li",[e._v("[C6 2024] Memo: Fine-grained Tensor Management For Ultra-long Context LLM Training")]),e._v(" "),t("li",[e._v("[2025] Efficient LLM Inference with Activation Checkpointing and Hybrid Caching")]),e._v(" "),t("li",[e._v("[6] Elixir: Train a Large Language Model on a Small GPU Cluster")]),e._v(" "),t("li",[e._v("[7] LLMem: Estimating GPU Memory Usage for Fine-Tuning Pre-Trained LLMs "),t("br"),e._v(" This is a very good paper that estimate memory usage based on different parallism. 👍")]),e._v(" "),t("li",[e._v("[12] vAttention: Dynamic Memory Management for Serving LLMs without PagedAttention")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"memory-optimizations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-optimizations"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Memory Optimizations")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Activation Checkpointing")]),t("br"),e._v("\nRecomputation during backward pass.")]),e._v(" "),t("li",[t("strong",[e._v("Quantization-Aware Training (QAT)")]),t("br"),e._v("\nTrain with INT8/FP8 precision.")]),e._v(" "),t("li",[t("strong",[e._v("Dynamic Memory Allocation")]),t("br"),e._v("\nBuffer reuse to avoid fragmentation.")]),e._v(" "),t("li",[t("strong",[e._v("Low-Rank Gradient Projection (GaLore)")]),t("br"),e._v(" "),t("strong",[e._v("NEW")]),e._v(" Compress gradients via low-rank approximations during training.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_1-c99-y2024-full-parameter-fine-tuning-for-large-language-models-with-limited-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-c99-y2024-full-parameter-fine-tuning-for-large-language-models-with-limited-resources"}},[e._v("#")]),e._v(" 1. [C99 Y2024] Full Parameter Fine-tuning for Large Language Models with Limited Resources")]),e._v(" "),t("ul",[t("li",[e._v("Use SGD instead of Adam for fine-tuning weights.")]),e._v(" "),t("li",[e._v("Update layer by layer in backward pass. Traditional Adam will backward probgation all layers and then update weigths.")]),e._v(" "),t("li",[e._v("SGD also avoid state memory of ADAM.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/c1e7d018-84e2-49f7-bd74-cdf4edaa0343",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a98a808f-1cb1-4432-b0d0-7c51e9f4ee48",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2-c25-y2024-flora-low-rank-adapters-are-secretly-gradient-compressors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-c25-y2024-flora-low-rank-adapters-are-secretly-gradient-compressors"}},[e._v("#")]),e._v(" 2. [C25 Y2024] FLORA: Low-Rank Adapters Are Secretly Gradient Compressors")]),e._v(" "),t("p",[e._v("This paper discovers that LORA can be approximated by a random projection.")]),e._v(" "),t("p",[e._v("LORA restricts overall weights update matrices to be low-rank.")]),e._v(" "),t("p",[e._v("FLORA use "),t("em",[e._v("random projection matrix")]),e._v(", which allows high-rank update gradients.")]),e._v(" "),t("blockquote",[t("p",[e._v("Our intuition arises from investigating LoRA and observing that a LoRA update is dominated by a random projection, which compresses the gradient into a\nlower-dimensional space.\nOur FLORA resamples the random projection and is able to mitigate the low-rank limitation of LoRA. Further, our approach only stores the compressed gradient\naccumulation and momentum, thus saving the memory usage of optimization states to the sublinear level.")])]),e._v(" "),t("p",[e._v("Gradident Accumulation:")]),e._v(" "),t("ul",[t("li",[e._v("Gradient accumulation stores the sum of gradients over multiple batches to simulate a larger effective batch size (helpful when memory limits prevent using large batches).")]),e._v(" "),t("li",[e._v("Normally, this requires a memory buffer equal to the model size to store the full gradient matrix.")])]),e._v(" "),t("p",[e._v("Momentum")]),e._v(" "),t("ul",[t("li",[e._v("Momentum smooths gradient updates by keeping an exponentially weighted moving average (EMA) of past gradients.")]),e._v(" "),t("li",[e._v("Maintaining momentum for large models requires significant memory since an additional buffer equal to the model size is needed.")])]),e._v(" "),t("p",[e._v("FLORA Compression:")]),e._v(" "),t("ul",[t("li",[e._v("compress gradients accumulation: Applying a random projection matrix A to reduce the dimensionality of the gradients.")]),e._v(" "),t("li",[e._v("compress momentum: Using random projection to compress the momentum term M.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_3-c42-y2024-galore-memory-efficient-llm-training-by-gradient-low-rank-projection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-c42-y2024-galore-memory-efficient-llm-training-by-gradient-low-rank-projection"}},[e._v("#")]),e._v(" 3. [C42 Y2024] GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/3ddb7188-8d90-4232-8be1-cb570a74bc56",alt:"image"}})]),e._v(" "),t("blockquote",[t("p",[e._v("Galore: gradient Low-Rank Projection (GaLore), a training strategy that allows fullparameter learning but is more memory-efficient than common low-rank adaptation  methods such as LoRA.\nKey idea is to leverage the slowchanging low-rank structure of the gradient G(m×n) of the weight matrix W, rather than trying to approximate the weight matrix itself as low rank.\nwhile the weight matrices are not necessarily low-rank, the gradient indeed becomes low-rank during the training for certain gradient forms and associated network\narchitectures.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_4-c0-2024-compact-compressed-activations-for-memory-efficient-llm-training"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-c0-2024-compact-compressed-activations-for-memory-efficient-llm-training"}},[e._v("#")]),e._v(" 4. [C0 2024] CompAct: Compressed Activations for Memory-Efficient LLM Training")]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/37a40cf7-5a3b-4c55-b847-1fb1e9c732a5"}}),e._v(" "),t("blockquote",[t("p",[e._v("By storing low-rank, compressed activations to be used in the backward pass we greatly reduce the required memory, unlike previous methods which only reduce optimizer overheads or the number of trained parameters.\nCompAct saves low-rank compressed activations during the forward pass, instead of the full activation tensors.\nThe resulting gradients are low-rank as well, also reducing the size of optimizer states.\nAs CompAct decompresses the gradients back to full size only for the update step, it compresses a large part of the compute graph, which in turn translates to major memory savings.")])]),e._v(" "),t("p",[e._v("CompAct is a logical next step from previous work, moving from "),t("strong",[e._v("low-rank parameters")]),e._v(", through "),t("strong",[e._v("compressed low-rank gradients")]),e._v(" , to "),t("strong",[e._v("compressed activations")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("compared to GaLore, our approach may be viewed as a simple change in the order of operations, applying the compression one step before GaLore does, to the "),t("strong",[e._v("activations")]),e._v(" rather than to the "),t("strong",[e._v("gradients")]),e._v(".")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/c0e05d1b-b19b-4bb0-92df-4842010b6502",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_5-c2-2024-protrain-efficient-llm-training-via-adaptive-memory-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-c2-2024-protrain-efficient-llm-training-via-adaptive-memory-management"}},[e._v("#")]),e._v(" 5. [C2 2024] ProTrain: Efficient LLM Training via Adaptive Memory Management 👍")]),e._v(" "),t("h3",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("p",[t("strong",[e._v("Model State")]),e._v(": Zero Redundancy Optimizer (ZeRO) (37; 51) distributes them across multiple GPUs, leveraging aggregated memory capacity to accommodate large models in data parallelism.")]),e._v(" "),t("p",[t("strong",[e._v("activations, gradient checkpointing")]),e._v(" reduces memory consumption by discarding certain activations during the forward pass and recomputing them during the backward pass.")]),e._v(" "),t("h3",{attrs:{id:"contribution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[e._v("#")]),e._v(" Contribution")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("To reduce memory consumption, ProTrain adaptively decides whether to use offloading or gradient checkpointing, determines the amount of model states and activations to offload and the number of transformer blocks to apply gradient checkpointing, all without user inputs.")])]),e._v(" "),t("li",[t("p",[e._v("For computation, ProTrain keeps forward/backward computation on the GPU for efficiency, while dynamically determining the portion of parameter updates to be performed on the CPU and GPU.\nAdditionally, ProTrain performs CPU parameter updates concurrently with backward computation on the GPU to hide the overhead of CPU updates.")])]),e._v(" "),t("li",[t("p",[e._v("ProTrain overlaps IO communication with computation by proactively prefetching future parameters during forward/backward computation, parallelizing gradient offloading with backward computation, and swapping activations only when\nthe overhead can be hidden by computation.")])]),e._v(" "),t("li",[t("p",[e._v("ProTrain proposes a Chunk-Based Model State Management system that organizes model states into uniformly sized chunks")])]),e._v(" "),t("li",[t("p",[e._v("ProTrain also proposes "),t("strong",[e._v("Block-Wise Activation Management")]),e._v(" to handle activations at the "),t("strong",[e._v("transformer block")]),e._v(" level, performing swapping or gradient checkpointing as needed for each block.")])]),e._v(" "),t("li",[t("p",[e._v("To hide the swapping overhead, ProTrain applies interleaved swapping and checkpointing, where each block of swapping is typically followed by multiple blocks of checkpointing.\nThis ensures that ProTrain’s swapping reduces memory usage without compromising performance.")])])]),e._v(" "),t("p",[t("strong",[e._v("Discussion about zero")])]),e._v(" "),t("p",[e._v("ZeRO operates in three stages")]),e._v(" "),t("ul",[t("li",[e._v("ZeRO-1 partitions optimizer states across GPUs")]),e._v(" "),t("li",[e._v("ZeRO-2 extends this by also distributing gradients")]),e._v(" "),t("li",[e._v("ZeRO-3 further divides the parameters, which are required to be gathered before forward/backward computation.")])]),e._v(" "),t("p",[t("em",[e._v("The most interesting contribution of this work to me, it is the interleaved gradient checkpointing and swapping.")])]),e._v(" "),t("p",[e._v("Since the training follows the specific sequence:")]),e._v(" "),t("ul",[t("li",[e._v("the last layer: no optimization")]),e._v(" "),t("li",[e._v("the second last layer: gradient checkpointing")]),e._v(" "),t("li",[e._v("the third last layer: swapping")])]),e._v(" "),t("p",[t("strong",[e._v("In the backward pass, blocks without optimization are processed first, consuming activations and freeing memory for subsequent checkpointing and swapping.")])]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/b0daba0b-50b0-4d9d-b94b-1697910afedb"}}),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_6-c6-2024-memo-fine-grained-tensor-management-for-ultra-long-context-llm-training"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-c6-2024-memo-fine-grained-tensor-management-for-ultra-long-context-llm-training"}},[e._v("#")]),e._v(" 6. [C6 2024] Memo: Fine-grained Tensor Management For Ultra-long Context LLM Training")]),e._v(" "),t("p",[e._v("I feel this paper shares the same idea from [C2 2024] ProTrain: Efficient LLM Training via Adaptive Memory Management.")]),e._v(" "),t("p",[e._v("like the balance between swapping and recomputing gradient, here they argue that for long context llm training, swapping might be more economic compared with gradient checkpointing.")]),e._v(" "),t("p",[t("strong",[e._v("Feel the trend on the right... Full offload might be more economic when length grows larger.")])]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/43d4b157-76a2-4022-8620-c393ae0b0a70"}}),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/2147e9ea-ed8e-4609-a03c-200dbc85842c"}}),e._v(" "),t("p",[e._v("Contemporary mainstream LLM training frameworks such as Megatron-LM and DeepSpeed prefer activation recomputation to swapping, which is due to the fact that the GPU computing ability has a far more rapid growth than the\nconnectivity between CPU and GPU memory in the past few years.")]),e._v(" "),t("p",[e._v("However, we find that the situation is a bit different in long context training of LLMs. Denote (𝑠) as the sequence length. The computation complexity of one transformer layer is 𝑂(𝑠^2), while the activation memory complexity is 𝑂(𝑠) thanks to FlashAttention.")]),e._v(" "),t("p",[e._v("During GPU computation, we can leverage the idle CPU-GPU bandwidth, offloading activations to CPU memory during the forward\npass, and fetching the activations during the backward pass.")]),e._v(" "),t("p",[e._v("As the sequence length increases, there is greater potential for overlapping computation and communication, given that their time requirements scale "),t("strong",[e._v("quadratically")]),e._v(" and "),t("strong",[e._v("linearly")]),e._v(" with the sequence length.")]),e._v(" "),t("p",[e._v("We introduce a fine-grained activation recomputation and swapping mechanism to manage the skeletal activations. We consider both tensor-level and token-level activation management.")]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/7491aeab-f900-4d96-866b-aa7d68d94586"}}),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_7-2025-efficient-llm-inference-with-activation-checkpointing-and-hybrid-caching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2025-efficient-llm-inference-with-activation-checkpointing-and-hybrid-caching"}},[e._v("#")]),e._v(" 7. [2025] Efficient LLM Inference with Activation Checkpointing and Hybrid Caching")]),e._v(" "),t("p",[e._v("The activation cache stores activation checkpoints generated during intermediate inference stages, allowing the fast recomputation of KV cache while model parameters are transferred to GPU from host memory.")]),e._v(" "),t("p",[e._v("Unlike conventional methods that recompute the KV cache from scratch using token IDs, the activation cache allows bypassing projection and FFN operations.")]),e._v(" "),t("p",[e._v("To address the memory and communication challenges of the host memory offloading, this study proposes a novel activation checkpointing scheme based on Activation caching.")]),e._v(" "),t("p",[e._v("Unlike the token recomputation relying on a full prefill step, activation values of all layers are stored in the memory. Computing the keys and values of a layer from the activation values requires a modest computation capacity.")]),e._v(" "),t("p",[t("strong",[e._v("Keeping activation checkpoints")]),e._v(" instead of keys and values reduce the memory capacity consumption and the communication traffic by half.")]),e._v(" "),t("blockquote",[t("p",[e._v("The major arguement: activation memory is less than K&V, K&V could be recomputed.")])]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/f7fd3b57-a94f-4429-82f2-47805c3f535d"}}),e._v(" "),t("p",[e._v("since completely removing the KV cache incurs excessively repetitive computations across token generations, maintaining only a portion of the context as KV cache and the rest as token IDs is more promising.")]),e._v(" "),t("p",[e._v("As balancing computation and communication is a key challenge for improving throughput, the ratio of KVs to token IDs must be\nadjusted carefully.")]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/74164b54-d369-4d97-91ca-41026c7d563c"}}),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_8-6-elixir-train-a-large-language-model-on-a-small-gpu-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-elixir-train-a-large-language-model-on-a-small-gpu-cluster"}},[e._v("#")]),e._v(" 8. [6] Elixir: Train a Large Language Model on a Small GPU Cluster")]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/7e8a9e6b-c565-4bf9-8584-f6bb0154b79b"}}),e._v(" "),t("p",[t("strong",[e._v("We argue that using free GPU memory to store optimizer states or retaining gathered parameters during training can improve training throughput.")])]),e._v(" "),t("p",[e._v("• We build a pre-runtime profiler designed for large models. It is capable of obtaining the computation graph and the memory usage of the model before training. We bring this powerful tool to support large model profiling.\n• We introduce rCache to control the degree of memory redundancy. Moreover, we build a search engine to find the optimal configuration, maximizing training efficiency automatically.\nDifferent from previous works, our optimal configuration considers both memory partitioning and memory offloading.")]),e._v(" "),t("h3",{attrs:{id:"background-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-2"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("h4",{attrs:{id:"memory-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-usage"}},[e._v("#")]),e._v(" Memory Usage")]),e._v(" "),t("p",[e._v("Memory usage during training primarily consists of five components: parameters, gradients, optimizer states, activations, and buffers.")]),e._v(" "),t("p",[e._v("Optimizer states are the extra memory footprint consumed by the optimizer.")]),e._v(" "),t("p",[e._v("For example, Adam [26] needs to store averaged momentum and variance of gradients.")]),e._v(" "),t("p",[e._v("We refer to parameters, gradients, and optimizer states collectively as "),t("strong",[e._v("model states")]),e._v(".")]),e._v(" "),t("p",[e._v("Activations are the intermediate temporary variables generated during training.")]),e._v(" "),t("p",[e._v("Typically,  activations are stored for the backward pass to compute gradients.")]),e._v(" "),t("p",[e._v("However, their memory usage may vary depending on the training framework.")]),e._v(" "),t("p",[e._v("In PyTorch, the "),t("strong",[e._v("temporary gradients of intermediate tensor variables")]),e._v(" can also be viewed as "),t("strong",[e._v("activations")]),e._v(".")]),e._v(" "),t("p",[e._v("Compared to other components, buffers consume a relatively small amount of memory.")]),e._v(" "),t("p",[e._v("We assume that buffers are always stored in the GPU for subsequent analysis.")]),e._v(" "),t("h4",{attrs:{id:"mixed-precision-training"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixed-precision-training"}},[e._v("#")]),e._v(" Mixed Precision Training")]),e._v(" "),t("p",[e._v("The SOTA approach to train large models utilizes both the halfprecision floating-point (FP16) format and the single-precision floating-point (FP32) format during training.")]),e._v(" "),t("p",[t("strong",[e._v("Parameters, gradients, and activations")]),e._v(" are stored and computed in FP16 to reduce memory usage and improve efficiency.")]),e._v(" "),t("p",[e._v("Meanwhile, the accumulation operator in the optimizer update is sensitive to underflow in low-precision formats. The master weight, which is an FP32 copy of the parameters, is used to accumulate gradients in each optimizer update and is rounded to FP16 parameters before the forward pass.")]),e._v(" "),t("p",[e._v("In this case, the memory usage of parameters, gradients, and activations is halved, but the memory usage of optimizer states is increased due to the addition of the master weight.")]),e._v(" "),t("p",[e._v("For example, if we use Adam and the model size is M, training requires 2M bytes for parameters, 2M bytes for gradients, and 12M bytes for optimizer states.")]),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/44c48f9f-1b69-41f9-8e5b-a3a58a034b95"}}),e._v(" "),t("img",{staticStyle:{width:"600px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/ff98c9bf-fcec-4d6e-94ea-99a4f145c445"}}),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_7-llmem-estimating-gpu-memory-usage-for-fine-tuning-pre-trained-llms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-llmem-estimating-gpu-memory-usage-for-fine-tuning-pre-trained-llms"}},[e._v("#")]),e._v(" [7] LLMem: Estimating GPU Memory Usage for Fine-Tuning Pre-Trained LLMs")]),e._v(" "),t("p",[e._v("Determining the most effective method for achieving rapid fine-tuning while preventing GPU outof-memory issues in a given environment remains unclear.")]),e._v(" "),t("p",[e._v("To address this challenge, we introduce LLMem, a solution that estimates the GPU memory consumption when applying distributed finetuning methods across multiple GPUs and identifies the optimal method.")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_12-asplos-vattention-dynamic-memory-management-for-serving-llms-without-pagedattention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-asplos-vattention-dynamic-memory-management-for-serving-llms-without-pagedattention"}},[e._v("#")]),e._v(" [12 ASPLOS] vAttention: Dynamic Memory Management for Serving LLMs without PagedAttention")]),e._v(" "),t("p",[t("img",{staticStyle:{width:"300px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/0689a237-6fcb-4d37-959f-f8aaa402d223",alt:"My Image"}})]),e._v(" "),t("p",[e._v("Pageattention needs two level software mapping.")]),e._v(" "),t("blockquote",[t("p",[e._v("For example, the vLLM paper acknowledges that the PagedAttention-based implementation was 20−26% slower than the corresponding none-paged FasterTransformer kernel, primarily due to the overhead of looking up Block-Tables and executing extra branches.")])]),e._v(" "),t("blockquote",[t("p",[e._v("Our analysis reveals that the number of instructions executed in PagedAttention kernels is 7 − 13% higher than the non-paged kernels. Caching page indices also increases register pressure, causing register spilling.")])]),e._v(" "),t("p",[e._v("In vAttention, they use CUDA VMM API to avoid the two level mapping.")]),e._v(" "),t("p",[t("img",{staticStyle:{width:"300px",height:"auto"},attrs:{src:"https://github.com/user-attachments/assets/513e1257-1a54-4667-a656-4fe40161d621"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);