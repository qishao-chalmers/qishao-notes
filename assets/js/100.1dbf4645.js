(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{553:function(e,t,n){"use strict";n.r(t);var i=n(8),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[A 2025] s1: Simple test-time scaling 👍")]),e._v(" "),t("li",[e._v("[C13 2024] Inference Scaling Laws: An Empirical Analysis of Compute-Optimal Inference for LLM Problem-Solving")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"a-2025-s1-simple-test-time-scaling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-2025-s1-simple-test-time-scaling"}},[e._v("#")]),e._v(" [A 2025] s1: Simple test-time scaling 👍")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("First, we curate a small dataset s1K of 1,000 questions paired with reasoning traces relying on three criteria we validate through ablations: difficulty, diversity, and quality.")])]),e._v(" "),t("li",[t("p",[e._v("Second, we develop budget forcing to control test-time compute by forcefully terminating the model’s thinking process or lengthening it by appending “Wait” multiple times to the model’s generation when it tries to end.")])])]),e._v(" "),t("p",[e._v("This can lead the model to double-check its answer, often fixing incorrect reasoning steps.")]),e._v(" "),t("p",[e._v("After supervised finetuning the Qwen2.5-32B-Instruct language model on s1K and equipping it with budget forcing, our model s1-32B exceeds o1-preview on competition math questionsby up to 27% (MATH and AIME24).")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/b24f8dba-b210-4b4a-abd4-93fa1f8ac594",alt:"image"}})]),e._v(" "),t("p",[e._v("Finetune train 26 mins on 1,000 carefully curated questions.")]),e._v(" "),t("p",[e._v("(I) If the model generates more thinking tokens than a desired limit, we forcefully end the thinking process by appending an end-of-thinking token delimiter.\nEnding the thinking this way makes the model transition to generating its answer."),t("br"),e._v("\n(II) If we want the model to spend more test-time compute on a problem, we suppress the generation of the end-of-thinking token delimiter and instead append “Wait” to the model’s current reasoning trace to encourage more exploration.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/ad80b3f2-81d0-4909-82d1-881af722529e",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"budget-forcing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#budget-forcing"}},[e._v("#")]),e._v(" Budget Forcing")]),e._v(" "),t("p",[t("strong",[e._v("Maximum token")])]),e._v(" "),t("p",[e._v("we enforce a maximum token count by simply appending the end-of-thinking token delimiter and “Final Answer: to early exit the thinking stage and make the model provide its current best answer.")]),e._v(" "),t("p",[t("strong",[e._v("Minimum token")])]),e._v(" "),t("p",[e._v("we suppress the generation of the end-of-thinking token delimiter and optionally append the string “Wait” to the model’s current reasoning trace to encourage the model to reflect on its current generation.")]),e._v(" "),t("h4",{attrs:{id:"benchmark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[e._v("#")]),e._v(" benchmark")]),e._v(" "),t("p",[e._v("(I) Conditional length-control methods, which rely on telling the model in the prompt how long it should generate for."),t("br"),e._v("\nWe group them by granularity into\\")]),e._v(" "),t("ul",[t("li",[e._v("Token-conditional control: We specify an upper bound of thinking tokens in the prompt;\\")]),e._v(" "),t("li",[e._v("Step-conditional control: We specify an upper bound of thinking steps, where each step is around 100 tokens;\\")]),e._v(" "),t("li",[e._v("Class-conditional control: We write two generic prompts that tell the model to either think for a short or long amount of time.")])]),e._v(" "),t("p",[e._v("(II) Rejection sampling, which samples until a generation fits a predetermined compute budget.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/de618a69-a8c5-4ef0-98b2-34a8968a7340",alt:"image"}})]),e._v(" "),t("p",[e._v("Sequential scaling via Forcing with S1 is better than Parallel scaling.")]),e._v(" "),t("ul",[t("li",[e._v("Token-conditional control fails without budget forcing, as our model cannot reliably count tokens - even when trained to do so.")]),e._v(" "),t("li",[e._v("Under step-conditional control, the model generates a similar total number of tokens when given different step targets, as the model goes from few steps with many tokens per step, to many steps with few tokens in each step.\nThus, the model learns to hack its way around the compute constraint making the controllability of this method mediocre.")]),e._v(" "),t("li",[t("strong",[e._v("Class-conditional control can work")]),e._v(" - telling a model to simply think longer can increase its test-time compute and performance, which leads good scaling.")])]),e._v(" "),t("p",[e._v("Class-conditional control can work. it controls number of tokens generated, but performance is not good.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/33459c85-985c-43f1-b8c9-03bf59bb4f4c",alt:"image"}})]),e._v(" "),t("p",[e._v("Why does supervised finetuning on just 1,000 samples lead to such performance gains?"),t("br"),e._v("\nWe hypothesize that the model is already exposed to large amounts of reasoning data during pretraining which spans trillions of tokens."),t("br"),e._v("\nThus, the ability to perform reasoning "),t("em",[e._v("is already present in our model")]),e._v("."),t("br"),e._v("\nOur "),t("strong",[e._v("sample-efficient finetuning stage just activates it")]),e._v(' and we scale it further at test time with budget forcing. This is similar to the "Superficial Alignment Hypothesis".')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/8472c39b-3371-4e85-8d15-532552c50df2",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a2bdf4a4-8374-43e6-8ce8-3165486bd3c4",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"chatgpt-summary-of-s1-simple-test-time-scaling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chatgpt-summary-of-s1-simple-test-time-scaling"}},[e._v("#")]),e._v(' Chatgpt Summary of "s1: Simple Test-Time Scaling"')]),e._v(" "),t("p",[t("strong",[e._v("Overview")])]),e._v(" "),t("p",[e._v("This paper introduces "),t("strong",[e._v("test-time scaling")]),e._v(" , a method that allows language models to "),t("strong",[e._v("improve their reasoning abilities")]),e._v("  by using additional computation during inference."),t("br"),e._v("\nUnlike traditional approaches that rely on large-scale "),t("strong",[e._v("pretraining")]),e._v("  and "),t("strong",[e._v("fine-tuning")]),e._v(" , the authors propose a "),t("strong",[e._v("minimalist approach")]),e._v("  using a small dataset (1,000 examples) and a technique called "),t("strong",[e._v("budget forcing")]),e._v("  to control test-time compute."),t("br"),e._v("\nThe result is "),t("strong",[e._v("s1-32B")]),e._v(" , a model that "),t("strong",[e._v("outperforms OpenAI’s o1-preview on math reasoning tasks")]),e._v("  with significantly fewer training resources.")]),e._v(" "),t("p",[t("strong",[e._v("Key Contributions")])]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Test-Time Scaling Without Large Training Data")])])]),e._v(" "),t("ul",[t("li",[e._v("Previous work, including OpenAI’s "),t("strong",[e._v("o1 model")]),e._v(" , demonstrated that increasing "),t("strong",[e._v("test-time compute")]),e._v("  leads to better reasoning performance.")]),e._v(" "),t("li",[e._v("However, OpenAI did not disclose its methodology, leading to numerous replication attempts.")]),e._v(" "),t("li",[e._v("This paper finds the "),t("strong",[e._v("simplest approach")]),e._v("  to achieve similar results:\n"),t("ul",[t("li",[t("strong",[e._v("Supervised fine-tuning (SFT)")]),e._v("  on a "),t("strong",[e._v("small, high-quality dataset (s1K, 1,000 examples)")]),e._v(" .")]),e._v(" "),t("li",[e._v("A new test-time technique called "),t("strong",[e._v("budget forcing")]),e._v("  to regulate computational effort during inference.")])])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[e._v("Curating a High-Quality Small Dataset (s1K)")])])]),e._v(" "),t("ul",[t("li",[e._v("The authors select "),t("strong",[e._v("1,000 reasoning questions")]),e._v("  from an initial "),t("strong",[e._v("59K dataset")]),e._v("  using three key principles:\n"),t("ul",[t("li",[t("strong",[e._v("Quality:")]),e._v("  Ensuring high-quality reasoning traces.")]),e._v(" "),t("li",[t("strong",[e._v("Difficulty:")]),e._v("  Including challenging problems that require deep reasoning.")]),e._v(" "),t("li",[t("strong",[e._v("Diversity:")]),e._v("  Covering different subject areas (e.g., math, physics, logic).")])])]),e._v(" "),t("li",[e._v("The dataset is distilled from "),t("strong",[e._v("Google’s Gemini Flash Thinking API")]),e._v("  to generate reasoning traces.")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("Budget Forcing: A Simple Test-Time Scaling Strategy")])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Budget forcing")]),e._v("  controls how much computation the model spends per question by:\n"),t("ul",[t("li",[t("strong",[e._v("Forcing early termination")]),e._v("  when the model has computed enough.")]),e._v(" "),t("li",[t("strong",[e._v("Encouraging extended reasoning")]),e._v('  by appending "Wait" when the model tries to stop prematurely.')])])]),e._v(" "),t("li",[e._v("This method allows the model to "),t("strong",[e._v("self-correct")]),e._v("  and "),t("strong",[e._v("double-check its reasoning")]),e._v(" .")]),e._v(" "),t("li",[e._v("Results show that increasing test-time compute through budget forcing "),t("strong",[e._v("improves performance up to 7% on math tasks")]),e._v(" .")])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[e._v("Performance & Efficiency")])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("s1-32B")]),e._v("  is trained using only "),t("strong",[e._v("1,000 examples in 26 minutes")]),e._v("  on "),t("strong",[e._v("16 NVIDIA H100 GPUs")]),e._v(" .")]),e._v(" "),t("li",[e._v("Despite this minimal training, it achieves:\n"),t("ul",[t("li",[t("strong",[e._v("+27% improvement")]),e._v("  over OpenAI’s o1-preview on "),t("strong",[e._v("math benchmarks (MATH, AIME24)")]),e._v(" .")]),e._v(" "),t("li",[t("strong",[e._v("Near-parity with Gemini 2.0 Thinking Experimental")]),e._v(" , which has access to massive proprietary data.")])])]),e._v(" "),t("li",[e._v("The model is "),t("strong",[e._v("fully open-source")]),e._v(" , making it an accessible alternative to closed models.")])]),e._v(" "),t("p",[t("strong",[e._v("Results & Ablations")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Test-Time Compute Scaling Works")])]),e._v(" "),t("ul",[t("li",[e._v("More compute at inference improves accuracy (Figure 1 in the paper).")]),e._v(" "),t("li",[e._v("Budget forcing "),t("strong",[e._v("extrapolates performance")]),e._v("  (e.g., from "),t("strong",[e._v("50% to 57% on AIME24")]),e._v(" ).")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Smaller, High-Quality Data Beats Large Random Data")])]),e._v(" "),t("ul",[t("li",[e._v("Training on all "),t("strong",[e._v("59K")]),e._v("  examples does not outperform using just "),t("strong",[e._v("1K carefully selected")]),e._v("  examples.")]),e._v(" "),t("li",[e._v("Random sampling or selecting long reasoning traces "),t("strong",[e._v("performs worse")]),e._v(" .")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Comparison With Other Scaling Methods")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Majority Voting (Parallel Scaling):")]),e._v("  Generates multiple responses and selects the best.")]),e._v(" "),t("li",[t("strong",[e._v("Rejection Sampling:")]),e._v("  Generates responses until one meets a length constraint.")]),e._v(" "),t("li",[t("strong",[e._v("Sequential Scaling (Budget Forcing) is the best approach")]),e._v("  for test-time scaling.")])])])]),e._v(" "),t("p",[t("strong",[e._v("Conclusion & Future Directions")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("s1-32B proves that strong reasoning abilities can be achieved with minimal data and simple test-time scaling techniques.")])])]),e._v(" "),t("li",[t("p",[e._v("The findings challenge the idea that massive pretraining is necessary for reasoning—"),t("strong",[e._v("small but carefully chosen data works")]),e._v(" .")])]),e._v(" "),t("li",[t("p",[e._v("Future research could explore:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Scaling beyond current test-time compute limits.")])]),e._v(" "),t("li",[t("strong",[e._v("Combining reinforcement learning with budget forcing.")])]),e._v(" "),t("li",[t("strong",[e._v("Parallel reasoning methods like Monte Carlo Tree Search (MCTS) for further improvements.")])])])])]),e._v(" "),t("p",[t("strong",[e._v("Final Thoughts")]),t("br"),e._v("\nThis paper presents a "),t("strong",[e._v("lightweight, effective approach")]),e._v("  to reasoning with LLMs, demonstrating that "),t("strong",[e._v("sparsity in training data + smart inference techniques")]),e._v("  can rival expensive large-scale models.\nIt contributes to the ongoing discussion on "),t("strong",[e._v("efficient AI scaling")]),e._v("  and provides a strong open-source alternative to closed models like OpenAI’s "),t("strong",[e._v("o1")]),e._v(" .")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"c13-2024-inference-scaling-laws-an-empirical-analysis-of-compute-optimal-inference-for-llm-problem-solving"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c13-2024-inference-scaling-laws-an-empirical-analysis-of-compute-optimal-inference-for-llm-problem-solving"}},[e._v("#")]),e._v(" [C13 2024] Inference Scaling Laws: An Empirical Analysis of Compute-Optimal Inference for LLM Problem-Solving")]),e._v(" "),t("p",[t("strong",[e._v("Abstract")])]),e._v(" "),t("p",[e._v("The paper investigates "),t("strong",[e._v("compute-optimal inference")]),e._v("  strategies for "),t("strong",[e._v("large language models (LLMs)")]),e._v(" , focusing on the trade-offs between "),t("strong",[e._v("model size, inference computation (FLOPs), and accuracy")]),e._v("."),t("br"),e._v("\nThe study evaluates inference strategies like "),t("strong",[e._v("greedy search, majority voting, best-of-n, weighted voting, and tree search algorithms")]),e._v(".\\")]),e._v(" "),t("blockquote",[t("p",[e._v("Findings suggest that "),t("strong",[e._v("smaller models (e.g., Llemma-7B) can outperform larger models (Llemma-34B) under the same compute budget")]),e._v("  when paired with advanced inference algorithms.")])]),e._v(" "),t("p",[e._v("The authors introduce a novel tree search method, "),t("strong",[e._v("REBASE (REward BAlanced SEarch)")]),e._v(" , which achieves "),t("strong",[e._v("better cost-performance trade-offs")]),e._v("  than "),t("strong",[e._v("sampling-based methods or Monte Carlo Tree Search (MCTS)")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Key Contributions & Findings")])]),e._v(" "),t("p",[t("strong",[e._v("1. Understanding Inference Scaling Laws")])]),e._v(" "),t("ul",[t("li",[e._v("Traditional "),t("strong",[e._v("scaling laws")]),e._v("  analyze LLM performance based on "),t("strong",[e._v("training compute")]),e._v("  (Kaplan et al., 2020), but this paper focuses on "),t("strong",[e._v("inference compute scaling")]),e._v(" .")]),e._v(" "),t("li",[e._v("The "),t("strong",[e._v("optimal model size depends on the available compute budget")]),e._v(" . Smaller models initially outperform larger models, but as compute increases, larger models become favorable.")]),e._v(" "),t("li",[e._v("Real-world deployment is often "),t("strong",[e._v("compute-limited")]),e._v(" , making smaller models with "),t("strong",[e._v("effective inference techniques")]),e._v("  more practical.")])]),e._v(" "),t("p",[t("strong",[e._v("2. Comparison of Inference Strategies")]),e._v("\nThe paper evaluates different inference strategies:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Sampling-based methods")]),e._v(" :")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Majority Voting")]),e._v(" : Selects the most frequent answer from multiple samples.")]),e._v(" "),t("li",[t("strong",[e._v("Best-of-N")]),e._v(" : Picks the highest-scoring response using a reward model.")]),e._v(" "),t("li",[t("strong",[e._v("Weighted Majority Voting")]),e._v(" : Assigns weights to answers based on reward scores.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Tree search methods")]),e._v(" :")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Monte Carlo Tree Search (MCTS)")]),e._v(" : Often inefficient due to unfinished paths and wasted compute.")]),e._v(" "),t("li",[t("strong",[e._v("REBASE (Proposed Method)")]),e._v(" : Uses a "),t("strong",[e._v("reward model")]),e._v("  to guide node expansion, ensuring better trade-offs between "),t("strong",[e._v("accuracy and compute")]),e._v(" .")])])])]),e._v(" "),t("blockquote",[t("p",[e._v("Typically, increasing the compute budget leads to higher accuracy until the accuracy reaches saturation."),t("br"),e._v("\nAs the compute budget increases, smaller models initially perform better than larger ones, but once the accuracy of the smaller models saturates, the larger models have favorable performance.")])]),e._v(" "),t("p",[t("strong",[e._v("3. REBASE: A New Compute-Optimal Tree Search Method")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Key Idea")]),e._v(" : Uses a "),t("strong",[e._v("node-quality reward function")]),e._v("  to "),t("strong",[e._v("prune bad paths early")]),e._v(" , reducing computational waste.")]),e._v(" "),t("li",[t("strong",[e._v("Advantages")]),e._v(" :\n"),t("ul",[t("li",[e._v("Achieves "),t("strong",[e._v("higher accuracy with fewer FLOPs")]),e._v("  compared to sampling and MCTS.")]),e._v(" "),t("li",[t("strong",[e._v("Outperforms MCTS")]),e._v(" , which wastes compute on incomplete solutions.")]),e._v(" "),t("li",[t("strong",[e._v("Scales better with compute")]),e._v(" , avoiding early saturation seen in sampling.")])])])]),e._v(" "),t("p",[t("strong",[e._v("4. Empirical Results on Math Benchmarks")])]),e._v(" "),t("ul",[t("li",[e._v("Evaluated on "),t("strong",[e._v("GSM8K and MATH500 datasets")]),e._v(" .")]),e._v(" "),t("li",[t("strong",[e._v("Llemma-7B (small model) with REBASE")]),e._v("  achieves similar or better accuracy than "),t("strong",[e._v("Llemma-34B (large model) with standard voting")]),e._v(" , while using "),t("strong",[e._v("2× fewer FLOPs")]),e._v(" .")]),e._v(" "),t("li",[t("strong",[e._v("REBASE consistently outperforms MCTS")]),e._v("  across all settings.")])]),e._v(" "),t("p",[t("strong",[e._v("Llemma-7B model achieves competitive accuracy to Llemma-34B model with lower compute budget.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/01b05cf4-4767-4602-b227-8dd5af8971c9",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("Conclusions")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Compute-optimal inference")]),e._v("  is key for practical LLM deployment.")]),e._v(" "),t("li",[t("strong",[e._v("Smaller models with sophisticated inference strategies (e.g., REBASE) can match or surpass larger models in compute-limited scenarios")]),e._v(" .")]),e._v(" "),t("li",[e._v("REBASE offers a "),t("strong",[e._v("better cost-performance trade-off")]),e._v("  than "),t("strong",[e._v("sampling-based methods and MCTS")]),e._v(" .")]),e._v(" "),t("li",[e._v("Future work should explore "),t("strong",[e._v("generalizing these findings beyond mathematical reasoning")]),e._v(" .")])]),e._v(" "),t("p",[t("strong",[e._v("Limitations & Future Directions")])]),e._v(" "),t("ul",[t("li",[e._v("The study is limited to "),t("strong",[e._v("mathematical problem-solving")]),e._v(" ; applying REBASE to "),t("strong",[e._v("other domains (e.g., coding, commonsense reasoning)")]),e._v("  is a future goal.")]),e._v(" "),t("li",[t("strong",[e._v("Exploring more efficient reward models")]),e._v("  for better tree search guidance is another area for improvement.")])]),e._v(" "),t("p",[t("strong",[e._v("Final Thoughts")])]),e._v(" "),t("p",[e._v("This paper provides "),t("strong",[e._v("practical insights into LLM inference efficiency")]),e._v(" , challenging the assumption that "),t("strong",[e._v("larger models always perform better")]),e._v(" . By optimizing inference strategies, "),t("strong",[e._v("smaller models can be as effective as large ones")]),e._v(" , making LLM deployment more cost-effective.")]),e._v(" "),t("hr")])}),[],!1,null,null,null);t.default=s.exports}}]);