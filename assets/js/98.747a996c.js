(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{551:function(e,i,n){"use strict";n.r(i);var t=n(8),a=Object(t.a)({},(function(){var e=this,i=e._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("ol",[i("li",[e._v("[331] Language Models Dont Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting")]),e._v(" "),i("li",[e._v("[9831] Chain-of-Thought Prompting Elicits Reasoning in Large Language Models")]),e._v(" "),i("li",[e._v("[641] Towards Reasoning in Large Language Models: A Survey")]),e._v(" "),i("li",[e._v("[2 2025] Self-Training Elicits Concise Reasoning in Large Language Models")]),e._v(" "),i("li",[e._v("Unveiling the Mechanisms of Explicit CoT Training: How Chain-of-Thought Enhances Reasoning Generalization")])]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"_331-language-models-dont-always-say-what-they-think-unfaithful-explanations-in-chain-of-thought-prompting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_331-language-models-dont-always-say-what-they-think-unfaithful-explanations-in-chain-of-thought-prompting"}},[e._v("#")]),e._v(" [331] Language Models Dont Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting")]),e._v(" "),i("ul",[i("li",[e._v("Key Findings:\n"),i("ul",[i("li",[e._v("Unfaithful Explanations: CoT explanations can be plausible but systematically unfaithful, failing to reflect the true reasoning process.")]),e._v(" "),i("li",[e._v("Biasing Features: Models are heavily influenced by biasing features (e.g., reordering multiple-choice options), which are not mentioned in explanations.")]),e._v(" "),i("li",[e._v("Accuracy Drop: Biasing models toward incorrect answers leads to a 36% drop in accuracy on BIG-Bench Hard tasks.")]),e._v(" "),i("li",[e._v("Social Bias: Models justify stereotype-aligned answers without acknowledging the influence of social biases.")]),e._v(" "),i("li",[e._v("Counterfactual Simulatability: Models rarely acknowledge biasing features, making explanations systematically unfaithful.")])])])]),e._v(" "),i("p",[e._v("They instruct llm with bias：")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/9c02c120-64d7-488c-b1af-bebeb28e8582",alt:"image"}})]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/c11dfc4e-35af-4ce2-b88f-fd51f8980805",alt:"image"}})]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"_9831-chain-of-thought-prompting-elicits-reasoning-in-large-language-models"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_9831-chain-of-thought-prompting-elicits-reasoning-in-large-language-models"}},[e._v("#")]),e._v(" [9831] Chain-of-Thought Prompting Elicits Reasoning in Large Language Models")]),e._v(" "),i("p",[e._v("Key findings:")]),e._v(" "),i("ul",[i("li",[e._v("Chain-of-thought prompting significantly improves the performance of large language models on a variety of reasoning tasks.")]),e._v(" "),i("li",[e._v("Chain-of-thought prompting is an emergent property of model scale, meaning that it only provides significant performance gains when used with very large language models (around 100 billion parameters).")]),e._v(" "),i("li",[e._v("The improvements from chain-of-thought prompting are robust across different language models, datasets, and annotators")])]),e._v(" "),i("p",[e._v("Usage cases:")]),e._v(" "),i("ul",[i("li",[e._v("Arithmetic reasoning: CoT prompting can help language models solve math word problems that require multiple steps, such as the GSM8K benchmark.")]),e._v(" "),i("li",[e._v("Commonsense reasoning: CoT prompting can also improve the performance of language models on tasks that require commonsense reasoning, such as the StrategyQA dataset, which requires models to infer a multi-hop strategy to answer questions.")]),e._v(" "),i("li",[e._v("Symbolic reasoning: CoT prompting has also been shown to be effective for symbolic reasoning tasks, such as last letter concatenation, which requires the model to concatenate the last letters of words in a name.")])]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"_641-towards-reasoning-in-large-language-models-a-survey"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_641-towards-reasoning-in-large-language-models-a-survey"}},[e._v("#")]),e._v(" [641] Towards Reasoning in Large Language Models: A Survey")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/a54b39f5-4293-4d16-ad88-ce289ed787a9",alt:"image"}})]),e._v(" "),i("p",[e._v("Large language models (LLMs) have made impressive strides in natural language processing, but their ability to reason remains a hot topic. This blog post delves into the fascinating world of reasoning in LLMs, exploring the techniques, evaluations, and key findings that are shaping this field.")]),e._v(" "),i("h3",{attrs:{id:"what-is-reasoning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-reasoning"}},[e._v("#")]),e._v(" What is Reasoning?")]),e._v(" "),i("p",[e._v("Reasoning is the process of using evidence, logic, and past experiences to form conclusions or make decisions. It's a fundamental aspect of human intelligence, allowing us to solve problems, think critically, and understand the world around us.   There are different types of reasoning, including:")]),e._v(" "),i("ul",[i("li",[e._v("Deductive reasoning: Drawing a conclusion based on the truth of the premises (e.g., if all mammals have kidneys and all whales are mammals, then all whales have kidneys).")]),e._v(" "),i("li",[e._v("Inductive reasoning: Drawing a conclusion based on observations or evidence (e.g., if every winged creature we've seen is a bird, then a new winged creature is likely a bird).")]),e._v(" "),i("li",[e._v("Abductive reasoning: Drawing a conclusion based on the best explanation for a set of observations (e.g., if the car won't start and there's a puddle under it, then the car probably has a leak).")])]),e._v(" "),i("h3",{attrs:{id:"techniques-for-enhancing-reasoning-in-llms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#techniques-for-enhancing-reasoning-in-llms"}},[e._v("#")]),e._v(" Techniques for Enhancing Reasoning in LLMs")]),e._v(" "),i("p",[e._v("Researchers are constantly developing new techniques to improve or elicit reasoning in LLMs. Some of the most promising methods include:")]),e._v(" "),i("ul",[i("li",[e._v("Fully supervised fine-tuning: This involves fine-tuning a pre-trained LLM on a dataset containing explicit reasoning examples. For instance, a model could be trained to generate rationales explaining its predictions.")]),e._v(" "),i("li",[e._v("Prompting and in-context learning: This approach involves prompting LLMs with a question and a few examples of how to solve similar questions. Chain-of-thought prompting is a popular technique where the examples include intermediate reasoning steps, guiding the LLM to generate its own reasoning process.\n"),i("ul",[i("li",[e._v("Prompting & In-Context Learning: in CoT prompting, ⟨input, output⟩ demonstrations are replaced with ⟨input, chain of thought, output⟩ tripples\n"),i("ul",[i("li",[e._v("manually crafted examples of intermediate reasoning steps and applies greedy decoding in the generation")])])]),e._v(" "),i("li",[e._v("Rationale Engieering： creating more effective examples of reasoning steps, or through rationale exploration and rationale verification, which involve exploring and verifying the rationales produced by LLMs.")]),e._v(" "),i("li",[e._v("Rationale refinement")]),e._v(" "),i("li",[e._v("complexity-based prompting to create rationales with more reasoning steps. Their experiments show that the performance of LLMs improves with the increased rationale complexity")]),e._v(" "),i("li",[e._v("algorithmic prompting, which suggests that providing more thorough examples of solutions can help improve reasoning performance on some simple math calculations")]),e._v(" "),i("li",[e._v("Rationale exploration: decoding strategy, sampling a divese set of rationale, instead of the greedy one")]),e._v(" "),i("li",[e._v("Rationale verification")])])])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/3cda04b5-8ce4-4149-910e-920c0113efa0",alt:"image"}})]),e._v(" "),i("ul",[i("li",[e._v("Hybrid methods: These methods combine techniques like pre-training or fine-tuning LLMs on datasets that include reasoning, along with prompting techniques to elicit reasoning.\n"),i("ul",[i("li",[e._v("LLMs trained on datasets containing scientific and mathematical data can achieve better performance on reasoning tasks like quantitative reasoning problems when using CoT prompting.")]),e._v(" "),i("li",[e._v("bootstrapping & self improving: using LLMs to self-improve their reasoning abilities through a process known  as bootstrapping.\n"),i("ul",[i("li",[e._v("Specifically, with CoT prompting, the model first generates initial rationales. And then, the model is finetuned on rationales that lead to correct answers. This process can be repeated, with each iteration resulting in an improved model that can generate better training data.")])])])])])]),e._v(" "),i("h3",{attrs:{id:"evaluating-reasoning-in-llms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#evaluating-reasoning-in-llms"}},[e._v("#")]),e._v(" Evaluating Reasoning in LLMs")]),e._v(" "),i("p",[e._v("Evaluating the reasoning abilities of LLMs is crucial. Researchers use various methods and benchmarks to assess their performance, including:")]),e._v(" "),i("ul",[i("li",[e._v("End task performance: This involves measuring the accuracy of LLMs on "),i("strong",[e._v("tasks requiring reasoning, such as arithmetic, commonsense, and symbolic reasoning benchmarks.")])]),e._v(" "),i("li",[e._v("Analysis of reasoning: This approach focuses on directly assessing the reasoning steps taken by LLMs, rather than just the final answer. This can involve analyzing the quality of the generated rationales or using formal metrics to evaluate the reasoning process.")])]),e._v(" "),i("h3",{attrs:{id:"key-findings-and-implications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#key-findings-and-implications"}},[e._v("#")]),e._v(" Key Findings and Implications")]),e._v(" "),i("p",[e._v("Research in reasoning in LLMs has yielded some interesting findings:")]),e._v(" "),i("ul",[i("li",[e._v("Emergent ability: Reasoning seems to be an emergent ability of LLMs, "),i("strong",[e._v("becoming more pronounced as the models get larger (around 100 billion parameters or more).")])]),e._v(" "),i("li",[e._v("Chain-of-thought prompting: This technique has been shown to significantly improve the performance of LLMs on various reasoning tasks.")]),e._v(" "),i("li",[e._v("Complex reasoning challenges: Despite progress, LLMs still struggle with complex reasoning tasks, suggesting that current benchmarks might be too simple.")])]),e._v(" "),i("h3",{attrs:{id:"open-questions-and-future-directions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#open-questions-and-future-directions"}},[e._v("#")]),e._v(" Open Questions and Future Directions")]),e._v(" "),i("p",[e._v("The field of reasoning in LLMs is still evolving, with many open questions and exciting avenues for future research:")]),e._v(" "),i("ul",[i("li",[e._v("True reasoning or mimicry?: Are LLMs truly capable of reasoning, or are they simply learning to mimic human reasoning through pattern recognition?")]),e._v(" "),i("li",[e._v("Improving reasoning capabilities: How can we further enhance the reasoning capabilities of LLMs? This could involve developing new training methods, model architectures, or prompting techniques.")])]),e._v(" "),i("p",[e._v("By addressing these questions and continuing to explore the intricacies of reasoning in LLMs, we can unlock their full potential and pave the way for more intelligent and reliable language-based AI systems.")]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"_4-2-2025-self-training-elicits-concise-reasoning-in-large-language-models"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2025-self-training-elicits-concise-reasoning-in-large-language-models"}},[e._v("#")]),e._v(" 4. [2 2025] Self-Training Elicits Concise Reasoning in Large Language Models")]),e._v(" "),i("p",[e._v("Our combined method achieves a "),i("strong",[e._v("30% reduction in output tokens")]),e._v(" on average, across five model families on GSM8K and MATH,  while maintaining average accuracy.")]),e._v(" "),i("h3",{attrs:{id:"_1-introduction-background"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction-background"}},[e._v("#")]),e._v(" 1. Introduction & Background")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("Chain-of-Thought (CoT)")]),e._v("  reasoning significantly boosts LLM performance by breaking complex tasks into intermediate reasoning steps. However, CoT inherently generates redundant tokens that increase inference costs unnecessarily.")])]),e._v(" "),i("li",[i("p",[e._v("The authors hypothesize that current LLMs inherently possess the latent ability to reason concisely, as evidenced by the presence of shorter correct reasoning paths within their output distributions. Their goal is to explicitly unlock this capability through targeted fine-tuning.")])])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/62fb042e-e053-4674-b0e3-826dea5ec077",alt:"image"}})]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/e3fbf491-941a-4fca-9bfd-70b42c5020d8",alt:"image"}})]),e._v(" "),i("h3",{attrs:{id:"_2-preliminary-investigation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-preliminary-investigation"}},[e._v("#")]),e._v(" 2. Preliminary Investigation")]),e._v(" "),i("p",[e._v("The authors conducted preliminary studies to support their hypothesis:")]),e._v(" "),i("h4",{attrs:{id:"concise-reasoning-definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#concise-reasoning-definition"}},[e._v("#")]),e._v(" Concise Reasoning Definition:")]),e._v(" "),i("ul",[i("li",[e._v("Defined as reasoning correctly with fewer output tokens compared to the model’s default (average correct) output length.")])]),e._v(" "),i("h4",{attrs:{id:"analysis-of-reasoning-length-distribution"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#analysis-of-reasoning-length-distribution"}},[e._v("#")]),e._v(" Analysis of Reasoning Length Distribution:")]),e._v(" "),i("ul",[i("li",[e._v("A kernel density estimation showed significant potential for concise reasoning across various model families (e.g., Llama, DeepSeekMath, Qwen, Gemma).")]),e._v(" "),i("li",[e._v("Models frequently generated solutions that were shorter than their default output, suggesting inherent latent potential for conciseness.")])]),e._v(" "),i("h4",{attrs:{id:"limitations-of-zero-shot-prompting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-zero-shot-prompting"}},[e._v("#")]),e._v(" Limitations of Zero-Shot Prompting:")]),e._v(" "),i("ul",[i("li",[e._v('Popular zero-shot prompts aimed at concise reasoning ("Be Concise," "Fixed Budget," "Estimated Budget," and handcrafted prompts) significantly reduced token count but often compromised accuracy and exhibited inconsistent effects, particularly on math-specialized models.')])]),e._v(" "),i("h3",{attrs:{id:"_3-proposed-methods"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-proposed-methods"}},[e._v("#")]),e._v(" 3. Proposed Methods")]),e._v(" "),i("p",[e._v("To reliably elicit concise reasoning without sacrificing accuracy, the authors proposed several fine-tuning methods based on self-training:")]),e._v(" "),i("h4",{attrs:{id:"_3-1-naive-best-of-n-bon-sampling"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-naive-best-of-n-bon-sampling"}},[e._v("#")]),e._v(" 3.1. Naive Best-of-N (BoN) Sampling:")]),e._v(" "),i("ul",[i("li",[e._v("Generates multiple reasoning paths (N paths per question) and selects the shortest correct reasoning path for fine-tuning.")]),e._v(" "),i("li",[e._v("Effective but sample inefficient as length reduction benefits saturate quickly.")])]),e._v(" "),i("h4",{attrs:{id:"_3-2-few-shot-conditioning-for-efficient-reduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-few-shot-conditioning-for-efficient-reduction"}},[e._v("#")]),e._v(" 3.2. Few-Shot Conditioning for Efficient Reduction:")]),e._v(" "),i("ul",[i("li",[e._v("Combines few-shot prompting and BoN sampling to enhance concise reasoning.")]),e._v(" "),i("li",[e._v("Few-shot exemplars are derived from:\n"),i("ul",[i("li",[e._v("Human annotations (FS-Human)")]),e._v(" "),i("li",[e._v("Proprietary LLMs like GPT-4o (FS-GPT4o)")]),e._v(" "),i("li",[e._v("Self-generated concise examples from the target model itself (FS-Self)")])])]),e._v(" "),i("li",[e._v("Few-shot conditioning significantly improves sample efficiency in eliciting concise reasoning.")])]),e._v(" "),i("h4",{attrs:{id:"_3-3-sample-augmentation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-sample-augmentation"}},[e._v("#")]),e._v(" 3.3. Sample Augmentation:")]),e._v(" "),i("ul",[i("li",[e._v("To improve accuracy retention, they augment the few-shot conditioned data with additional samples generated from naive BoN.")]),e._v(" "),i("li",[e._v("Ensures coverage of both easy and difficult questions, preserving accuracy while maintaining conciseness.")])]),e._v(" "),i("h3",{attrs:{id:"_4-experimental-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-experimental-setup"}},[e._v("#")]),e._v(" 4. Experimental Setup")]),e._v(" "),i("ul",[i("li",[e._v("Evaluated across "),i("strong",[e._v("two mathematical reasoning datasets")]),e._v(" : GSM8K and MATH.")]),e._v(" "),i("li",[e._v("Models tested include general-purpose (e.g., Llama, Gemma, Qwen2.5) and math-specialized models (e.g., DeepSeekMath, Qwen2.5-Math).")]),e._v(" "),i("li",[e._v("Metrics: "),i("strong",[e._v("Accuracy and output length")]),e._v("  were primary evaluation metrics. Length is measured in tokens.")])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/27b89a34-a626-4b45-b8d5-1c1d210375bc",alt:"image"}})]),e._v(" "),i("h3",{attrs:{id:"_5-key-findings-contributions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-key-findings-contributions"}},[e._v("#")]),e._v(" 5. Key Findings & Contributions")]),e._v(" "),i("h4",{attrs:{id:"_5-1-main-results"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-main-results"}},[e._v("#")]),e._v(" 5.1. Main Results")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Naive BoN")]),e._v("  reduced reasoning length modestly (~12%) without major accuracy loss.")]),e._v(" "),i("li",[i("strong",[e._v("Few-shot conditioned methods")]),e._v("  (especially FS-GPT4o and FS-Human) yielded significant length reductions (~30% average across datasets) while maintaining accuracy.")])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/930e4b28-5dee-496d-85ef-b01f4876a5f4",alt:"image"}})]),e._v(" "),i("ul",[i("li",[e._v("The combined method ("),i("strong",[e._v("FS-GPT4o-BoN")]),e._v(" ) achieved the greatest reduction in length (average 30%) with minimal accuracy drop.")]),e._v(" "),i("li",[e._v("Self-training methods consistently outperformed zero-shot prompting and external fine-tuning baselines in terms of balancing conciseness with accuracy.")])]),e._v(" "),i("h4",{attrs:{id:"_5-2-in-depth-analysis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-in-depth-analysis"}},[e._v("#")]),e._v(" 5.2. In-depth Analysis")]),e._v(" "),i("ul",[i("li",[e._v("Models adaptively adjusted the length of reasoning paths based on question complexity—shorter paths for easier questions and longer paths for harder ones.")]),e._v(" "),i("li",[e._v("Scaling analysis (1B, 3B, and 8B models) showed length reduction consistently improved with larger models.")]),e._v(" "),i("li",[e._v("Fine-tuning effectively transferred concise reasoning learned from training to test outputs.")])]),e._v(" "),i("h3",{attrs:{id:"_6-discussion-broader-impact"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6-discussion-broader-impact"}},[e._v("#")]),e._v(" 6. Discussion & Broader Impact")]),e._v(" "),i("ul",[i("li",[e._v("The default reasoning behavior of current LLMs inherently contains redundancy, likely due to training data and optimization methods not promoting conciseness.")]),e._v(" "),i("li",[e._v('The authors suggest that lightweight fine-tuning approaches are sufficient for eliciting concise reasoning, aligning with the "Superficial Alignment Hypothesis" (minimal training can significantly shift model behavior).')]),e._v(" "),i("li",[e._v("Emphasized the potential for integrating concise reasoning supervision into standard training pipelines for more efficient LLM inference.")])]),e._v(" "),i("h3",{attrs:{id:"_7-limitations-and-future-directions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-limitations-and-future-directions"}},[e._v("#")]),e._v(" 7. Limitations and Future Directions")]),e._v(" "),i("ul",[i("li",[e._v("Further exploration of advanced training schemes (reinforcement learning, iterative refinement).")]),e._v(" "),i("li",[e._v("Investigating more sophisticated few-shot exemplar selection and prompting strategies.")]),e._v(" "),i("li",[e._v("Extending the scalability study beyond 8B parameter models.")]),e._v(" "),i("li",[e._v("Generalizing concise reasoning methods to broader, non-mathematical tasks.")])]),e._v(" "),i("h3",{attrs:{id:"_8-contributions-novelty-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_8-contributions-novelty-summary"}},[e._v("#")]),e._v(" 8. Contributions & Novelty (Summary):")]),e._v(" "),i("ul",[i("li",[e._v("Identified latent concise reasoning capabilities within standard LLMs.")]),e._v(" "),i("li",[e._v("Demonstrated ineffectiveness and inconsistency of popular zero-shot concise reasoning methods.")]),e._v(" "),i("li",[e._v("Proposed a novel, efficient, and effective fine-tuning approach (few-shot conditioned best-of-N sampling with augmentation) that consistently improves conciseness without significant accuracy degradation.")]),e._v(" "),i("li",[e._v("Provided extensive experimental validation across multiple models and datasets.")])]),e._v(" "),i("h3",{attrs:{id:"_9-practical-implications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_9-practical-implications"}},[e._v("#")]),e._v(" 9. Practical Implications:")]),e._v(" "),i("ul",[i("li",[e._v("The authors highlight practical benefits: reduced inference costs, lower latency, and more efficient model deployment in scenarios where reasoning-based inference costs are critical.")])]),e._v(" "),i("h3",{attrs:{id:"_10-conclusion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10-conclusion"}},[e._v("#")]),e._v(" 10. Conclusion")]),e._v(" "),i("p",[e._v("The paper convincingly demonstrates that standard large language models can be fine-tuned to significantly enhance concise reasoning using self-generated concise examples.")]),e._v(" "),i("p",[e._v("This approach is broadly applicable and beneficial across different LLM architectures and model sizes, offering substantial improvements in inference efficiency without compromising reasoning accuracy.")]),e._v(" "),i("p",[e._v("Overall, this paper contributes significantly to understanding and improving reasoning efficiency in LLMs, providing valuable methodologies for practitioners aiming to optimize inference performance in real-world scenarios.")]),e._v(" "),i("hr"),e._v(" "),i("h2",{attrs:{id:"_5-unveiling-the-mechanisms-of-explicit-cot-training-how-chain-of-thought-enhances-reasoning-generalization"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5-unveiling-the-mechanisms-of-explicit-cot-training-how-chain-of-thought-enhances-reasoning-generalization"}},[e._v("#")]),e._v(" 5. Unveiling the Mechanisms of Explicit CoT Training: How Chain-of-Thought Enhances Reasoning Generalization")]),e._v(" "),i("p",[e._v("CoT training offers the following advantages"),i("br"),e._v("\n(1) Training with CoT markedly improves reasoning generalization, extending it from in-distribution (ID) to both ID and out-of-distribution (OOD) scenarios, while also speeding up convergence;")]),e._v(" "),i("p",[e._v("(2) Even when training with CoT includes a certain range of erroneous reasoning steps, it still enables the model to learn reasoning patterns, leading to systematic generalization.")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://github.com/user-attachments/assets/d83491dc-e3d0-479b-acc3-2306dfbde8a1",alt:"image"}})]),e._v(" "),i("p",[e._v("We further explore the underlying mechanisms from a circuit perspective:\n(1) The data distribution (e.g., ratio λ and pattern) plays a crucial role in influencing the model’s systematic generalization;")]),e._v(" "),i("p",[e._v("(2) CoT training (with two-hop facts) internalizes reasoning into a two stage generalizing circuit, where the number of stages corresponds to the explicit reasoning steps during training.")]),e._v(" "),i("h3",{attrs:{id:"insight-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#insight-1"}},[e._v("#")]),e._v(" Insight 1")]),e._v(" "),i("p",[e._v("Compared to training without CoT, training with CoT significantly boosts reasoning generalization, expanding it from ID-only to both ID and OOD scenarios, while also accelerating convergence speed.")]),e._v(" "),i("h3",{attrs:{id:"insight-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#insight-2"}},[e._v("#")]),e._v(" Insight 2")]),e._v(" "),i("p",[e._v("When the intermediate reasoning results (data patterns) from "),i("strong",[e._v("explicit CoT training")]),e._v(" are "),i("strong",[e._v("highly aligned with or closely match the intermediate reasoning required for final inference during testing")]),e._v(", the model’s\ngeneralization ability is significantly enhanced.")]),e._v(" "),i("p",[e._v("This could explain why the researchers behind DeepSeek R1 (DeepSeek-AI et al., 2025) construct and collect a small amount of long CoT data to fine-tune the model in the Cold Start phase.")]),e._v(" "),i("h3",{attrs:{id:"insight-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#insight-3"}},[e._v("#")]),e._v(" Insight 3")]),e._v(" "),i("p",[e._v("CoT training internalizes reasoning steps, with the number of reasoning circuit stages matching the number of explicit reasoning steps during training.")]),e._v(" "),i("h3",{attrs:{id:"insight-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#insight-4"}},[e._v("#")]),e._v(" Insight 4")]),e._v(" "),i("p",[e._v("CoT training still enables systematic generalization with noisy data, highlighting that data quality outweighs the method itself.")]),e._v(" "),i("p",[e._v("The training bottleneck lies in collecting or synthesizing complex long CoT solutions, with some errors being acceptable.")])])}),[],!1,null,null,null);i.default=a.exports}}]);