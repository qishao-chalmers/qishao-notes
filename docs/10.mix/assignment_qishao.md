# Software Engineering Assignment - Qi Shao

## Introduction
My research focuses on computer microarchitecture and memory subsystem. We try to improve the performance of CPU/GPU/Memory to achieve better IPC (Instruction per Cycle) as to CPU and higher throughput for GPU. Since it is unmanageable to program from silicon level, like Verilog or VHDL language. Researchers prefer to use simulators to simulate the function of CPU/GPU at cycle accurate level to value the idea.

I have been working in industry for years, using these simulators. Similar to methods mentioned in the lectures, we use regression test, combining both unit test and benchmark test to check whether added function is correct. Our team manager also make the rule that *if someone modify the code that slow down the runtime of simulator, he has to buy coffee for everyone in the team*. It is a soft way to prevent programmer from adding low-performance code.

We also follow the Google's C++ programming style guideline. But 

## Robert's Lecture and My Research & Work Experience

### V-Model & My Research
In the lecture, we disscussed about the flavor of SE/Processes V Model. The V Model has differente layers from upper-level *Requirements* to bottom-level *Coding*. As to my research, there are already plenty of microarchitecture simulators.

- Gem5/GPGPU-sim: Cycle Accurate Simualtor
- Ramulator: Trace Driven Simulator
- Zsim/Pin: Instrumental-based Simulator

These simulators is build based on different requirments. Cycle-accurate simulator usually has better simulation accuracy, but lower speed. Ramulator is faster and Zsim/Pin is fastest since they run on real processor, just instrumenting code. However in the paper, I can always come accross that the results of some papers are simulated based on the simulator that does not support the function, in which it failed in the *Validation* Part.

As to bottom-level coding, it is sensible that cycle-accurate simulator has most workload of coding. It has to simulate at cycle & instruction level. However, meanwhile since CPU&GPU design company like Intel or NVIDIA or AMD, they just disclose their design at very high-level block design. The detailed design of each unit in cycle accurate simulator is based on estimation the structure of each unit after runing benchmark on CPU & GPU. 

In my research, I also met some paper that they claimed that they found previous cited work has miscoding some unit, so that the cited performance cannot be trusted.


## Guest's Lecture and My Research & Work Experience


## CAIN Papers

## References

[^1]:

[^2]:
