# Software Engineering Assignment - Qi Shao

## Introduction
My research focuses on computer microarchitecture and memory subsystem. We try to improve the performance of CPU/GPU/Memory to achieve better IPC (Instruction per Cycle) as to CPU and higher throughput for GPU. Since it is unmanageable to program from silicon level, like Verilog or VHDL language. Researchers prefer to use simulators to simulate the function of CPU/GPU at cycle accurate level to value the idea.

I have been working in industry for years, using these simulators. Similar to methods mentioned in the lectures, we use regression test, combining both unit test and benchmark test to check whether added function is correct. Our team manager also make the rule that *if someone modify the code that slow down the runtime of simulator, he has to buy coffee for everyone in the team*. It is a soft way to prevent programmer from adding low-performance code.

We also follow the Google's C++ programming style guideline.

## Robert's Lecture and My Research & Work Experience

### V-Model & My Research
In the lecture, we disscussed about the flavor of SE/Processes V Model. The V Model has differente layers from upper-level *Requirements* to bottom-level *Coding*. As to my research, there are already plenty of microarchitecture simulators.

- Gem5/GPGPU-sim: Cycle Accurate Simualtor
- Ramulator: Trace Driven Simulator
- Zsim/Pin: Instrumental-based Simulator

These simulators is build based on different requirments. Cycle-accurate simulator usually has better simulation accuracy, but lower speed. Ramulator is faster and Zsim/Pin is fastest since they run on real processor, just instrumenting code. However in the paper, I can always come accross that the results of some papers are simulated based on the simulator that does not support the function, in which it failed in the *Validation* Part.

As to bottom-level coding, it is sensible that cycle-accurate simulator has most workload of coding. It has to simulate at cycle & instruction level. However, meanwhile since CPU&GPU design company like Intel or NVIDIA or AMD, they just disclose their design at very high-level block design. The detailed design of each unit in cycle accurate simulator is based on estimation the structure of each unit after runing benchmark on CPU & GPU. 

In my research, I also met some paper that they claimed that they found previous cited work has miscoding some unit, so that the cited performance cannot be trusted.

### Code Review practices & My Work Experience

When I was in industry, we also follow the guideline of Google C++ programming style. But we didn't follow Google's code review. During the literature, I found that this part very interesting.

As a freshgraduate student, I also found that I could benefit a lot from reviewing code from senior or professionals. And based on this observation, during my research, when I first stepped into new area, for example compiler, like LLVM, I tends to go back to the initial commit of LLVM project and learn how the initional function was added into LLVM Project. It is the idea of *Education Maintaining norms* mentioned in the paper. Another interesting finding is that as employer stays in Google longer, commemnts per change also decrease, and converge to each change 2 comments.

Another finding is similar to *finding5 code review at Google still faces breakdonws*. When I start to learn LLVM framework, in the beginning of user manual or guideline, one of the advantage of LLVM compared to GCC is the simplicty of LLVM. However, as years of development of LLVM, I feels the learning curve of LLVM is steeper than I imagine. And after new function are merged, the turtorial blogs are not updated. If I just follow the tutorial blogs, the function that I implement will not work. This is the mismatch of latest code and stale tutorial.

### Verification & My Work Experience
In the verification process, I have worked in some company that the programmer is also the verifier. They design test cases for their own code. An anology could be that an athelete is also the referee of the game. The company has follow this routine for a while, but in the end we found that there are always bugs that the programmer cannot found by themselves. It is since that the cases that the programers will always work. They are blind to the test cases that would trigger the bug. If they realized it, they would have fixed it. In the end, the company decide to manage a new team of verifiers that focus on testing the program.

## Guest's Lecture and My Research & Work Experience

### SAAB Survery of Software Engineering relevance changing with AI/ML

It is surprising that most of the answers are "We dont know". I also didn't use AI to generate programming code, since I feels that I have been trained to learn how to write efficient program and the AI could not achieve, until last year. Last year during the WASP conference, I found that most of the students have been using copilot. And nowadays that cursor, a new programming assistant tool is become popular. After the WASP conference, I tried Chat-GPT to write demo code for LLVM function and it works well. Sometimes, the code does not work, but at least, it provide a demo framework or an idea or suggest for you to program. As to me, if I am very familiar with some framework, for example, simulators, I will write code and modify it by myself, since I am better than chat-GPT or at least I dont need to understand the chat-gpt's code and debug. But as to new framework that I dont know, I will ask chatgpt to present some demo. It boosts the progress of my learning new framework.

After using chatgpt to generate code, I register WASP Natural Language Processing Code to learn why Transformers works in programming area. It is sensible that transformers at good at predict next token and it is also trained with public opensource frameworks. In this way,it could understand the programming style and generate code. And we can also view programming language as a universal language to communicate ideas. Thus, if it could works in chat robots, it will also work in programming.

### SAAB Safe-critical Consideration with AI

Usually AI tools like chatgpt are on-line, and we could use chatgpt to generate programs and we could remarks on the result to provide feedback to chatgpt about the quality of code. Thus it is a online feedback loop. As to Saab ATM, I have two considerations:
- Before we introduce AI to generate test cases for code in SAAB, how could we promise the black-box test cases are enough to cover all safe-critiacal cases. And after we use AI, how we keep the same promise.
- As a commercial company of SAAB, if they use chatgpt or some other AI tool to generate test cases or program demos, how could AI tool provider provide that the tool is safe from not generating risky code?

## CAIN Papers

## References

[^1]:

[^2]:
