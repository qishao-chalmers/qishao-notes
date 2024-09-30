(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{433:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("llvm front end demo\nNotes from "),e("strong",[t._v("Life of an instruction in LLVM")]),t._v("\nhttps://blog.llvm.org/2012/11/life-of-instruction-in-llvm.html")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"programing-language-dependent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#programing-language-dependent"}},[t._v("#")]),t._v(" Programing Language Dependent")]),t._v(" "),e("h3",{attrs:{id:"_1-clang-parser-will-build-an-abstract-syntax-tree-ast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-clang-parser-will-build-an-abstract-syntax-tree-ast"}},[t._v("#")]),t._v(" 1. Clang parser will build an Abstract Syntax Tree(AST)")]),t._v(" "),e("h4",{attrs:{id:"input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),e("p",[t._v("High-level source code (e.g., C, C++).")]),t._v(" "),e("h4",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("p",[t._v("An AST, which is a tree structure representing the syntactic structure of the source code")]),t._v(" "),e("h4",{attrs:{id:"tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tool"}},[t._v("#")]),t._v(" Tool")]),t._v(" "),e("p",[t._v("Clang Frontend")]),t._v(" "),e("h4",{attrs:{id:"transformation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformation"}},[t._v("#")]),t._v(" Transformation")]),t._v(" "),e("p",[t._v("The compiler’s frontend (Clang in LLVM) parses the source code and constructs an AST."),e("br"),t._v("\nThe AST captures the hierarchical structure of the program based on grammar rules (e.g., function definitions, statements, expressions).")]),t._v(" "),e("h4",{attrs:{id:"reason"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reason"}},[t._v("#")]),t._v(" Reason")]),t._v(" "),e("p",[t._v("The AST is closely tied to the original source code and allows easy analysis and checking of syntactic correctness."),e("br"),t._v("\nIt serves as a starting point for semantic analysis (e.g., type checking, variable scoping) before code generation.")]),t._v(" "),e("h4",{attrs:{id:"key-source-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-source-file"}},[t._v("#")]),t._v(" Key Source File")]),t._v(" "),e("p",[t._v("clang/lib/AST/")]),t._v(" "),e("h4",{attrs:{id:"key-functions-classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-functions-classes"}},[t._v("#")]),t._v(" Key Functions/Classes")]),t._v(" "),e("h5",{attrs:{id:"parseast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parseast"}},[t._v("#")]),t._v(" ParseAST")]),t._v(" "),e("p",[t._v("The function responsible for initiating the parsing of source code to generate an Abstract Syntax Tree (AST)."),e("br"),t._v(" "),e("strong",[t._v("Function")]),t._v(": This function takes the parsed tokens from the lexer and generates the AST by applying grammar rules."),e("br"),t._v("\nIt processes the input source code and organizes it into hierarchical structures like functions, expressions, and statements.")]),t._v(" "),e("h4",{attrs:{id:"sema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sema"}},[t._v("#")]),t._v(" Sema")]),t._v(" "),e("p",[t._v("The Sema class in Clang performs semantic analysis on the AST."),e("br"),t._v(" "),e("strong",[t._v("Function")]),t._v(": After parsing the AST, Sema checks the semantic validity of the code, ensuring things like proper type usage, function declarations, and scope resolution.")]),t._v(" "),e("h3",{attrs:{id:"_2-clang-emit-llvm-ir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-clang-emit-llvm-ir"}},[t._v("#")]),t._v(" 2. Clang emit LLVM IR")]),t._v(" "),e("h4",{attrs:{id:"input-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-2"}},[t._v("#")]),t._v(" Input")]),t._v(" "),e("p",[t._v("AST.")]),t._v(" "),e("h4",{attrs:{id:"output-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-2"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("p",[t._v("LLVM Intermediate Representation (IR).")]),t._v(" "),e("h4",{attrs:{id:"tool-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tool-2"}},[t._v("#")]),t._v(" Tool")]),t._v(" "),e("p",[t._v("Clang’s Code Generation phase.")]),t._v(" "),e("h4",{attrs:{id:"transformation-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformation-2"}},[t._v("#")]),t._v(" Transformation")]),t._v(" "),e("p",[t._v("Once the AST is constructed, the compiler translates it into LLVM IR."),e("br"),t._v("\nLLVM IR is a low-level, typed, static single assignment (SSA) form that is independent of any specific machine architecture."),e("br"),t._v("\nIt consists of a set of instructions operating on virtual registers, with each register assigned only once (SSA form).")]),t._v(" "),e("h4",{attrs:{id:"reason-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reason-2"}},[t._v("#")]),t._v(" Reason")]),t._v(" "),e("p",[t._v("LLVM IR is a portable, intermediate code format that enables various machine-independent optimizations.\nIt is also the bridge between different frontends (e.g., Clang, Rust) and the backend that handles machine-specific code generation.")]),t._v(" "),e("h4",{attrs:{id:"key-source-file-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-source-file-2"}},[t._v("#")]),t._v(" Key Source File")]),t._v(" "),e("p",[t._v("clang/lib/CodeGen/")]),t._v(" "),e("h4",{attrs:{id:"key-functions-classes-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-functions-classes-2"}},[t._v("#")]),t._v(" Key Functions/Classes")]),t._v(" "),e("h5",{attrs:{id:"codegenfunction-this-class-is-responsible-for-generating-llvm-ir-from-the-ast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codegenfunction-this-class-is-responsible-for-generating-llvm-ir-from-the-ast"}},[t._v("#")]),t._v(" CodeGenFunction: This class is responsible for generating LLVM IR from the AST.")]),t._v(" "),e("p",[e("strong",[t._v("Function")]),t._v(": It traverses the AST and generates the corresponding LLVM IR."),e("br"),t._v("\nFor example, for a function definition in the AST, it creates an llvm::Function in the IR.")]),t._v(" "),e("h5",{attrs:{id:"emitfunctionbody-this-method-inside-codegenfunction-emits-the-body-of-a-function-in-ir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emitfunctionbody-this-method-inside-codegenfunction-emits-the-body-of-a-function-in-ir"}},[t._v("#")]),t._v(" EmitFunctionBody: This method inside CodeGenFunction emits the body of a function in IR.")]),t._v(" "),e("p",[e("strong",[t._v("Function")]),t._v(": It walks over statements and expressions within the function and emits LLVM IR instructions.")]),t._v(" "),e("h5",{attrs:{id:"emitexpr-and-emitstmt-these-methods-handle-expressions-and-statements-within-the-ast-and-translate-them-into-llvm-ir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emitexpr-and-emitstmt-these-methods-handle-expressions-and-statements-within-the-ast-and-translate-them-into-llvm-ir"}},[t._v("#")]),t._v(" EmitExpr and EmitStmt: These methods handle expressions and statements within the AST and translate them into LLVM IR.")]),t._v(" "),e("p",[e("strong",[t._v("Function")]),t._v(": EmitExpr generates LLVM IR for expressions (e.g., arithmetic operations, function calls), while EmitStmt generates IR for control-flow structures like if statements and loops.")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"ir-target-and-source-programing-language-independent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ir-target-and-source-programing-language-independent"}},[t._v("#")]),t._v(" IR Target and Source Programing Language Independent")]),t._v(" "),e("h3",{attrs:{id:"_3-llvm-target-independent-ir-optimization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-llvm-target-independent-ir-optimization"}},[t._v("#")]),t._v(" 3. LLVM Target Independent IR Optimization")]),t._v(" "),e("h4",{attrs:{id:"input-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-3"}},[t._v("#")]),t._v(" Input")]),t._v(" "),e("p",[t._v("Unoptimized LLVM IR.")]),t._v(" "),e("h4",{attrs:{id:"output-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-3"}},[t._v("#")]),t._v(" Output")]),t._v(" "),e("p",[t._v("Optimized LLVM IR.")]),t._v(" "),e("h4",{attrs:{id:"tool-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tool-3"}},[t._v("#")]),t._v(" Tool")]),t._v(" "),e("p",[t._v("LLVM Optimizer (opt).")]),t._v(" "),e("h4",{attrs:{id:"transformation-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformation-3"}},[t._v("#")]),t._v(" Transformation")]),t._v(" "),e("p",[t._v("LLVM applies a series of machine-independent optimizations to the IR, such as dead code elimination, constant propagation, inlining, and loop optimizations."),e("br"),t._v("\nThese transformations operate on the SSA form of the IR to improve performance and reduce unnecessary instructions.")]),t._v(" "),e("h4",{attrs:{id:"reason-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reason-3"}},[t._v("#")]),t._v(" Reason")]),t._v(" "),e("p",[t._v("Optimizing at the IR level allows for improvements that are independent of the target architecture, making the resulting code more efficient before it reaches machine-specific stages.")]),t._v(" "),e("h4",{attrs:{id:"key-source-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-source-files"}},[t._v("#")]),t._v(" Key Source Files")]),t._v(" "),e("p",[t._v("llvm/lib/Transforms/")]),t._v(" "),e("h4",{attrs:{id:"key-functions-classes-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-functions-classes-3"}},[t._v("#")]),t._v(" Key Functions/Classes:")]),t._v(" "),e("h5",{attrs:{id:"opt-the-opt-tool-runs-optimization-passes-on-the-llvm-ir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opt-the-opt-tool-runs-optimization-passes-on-the-llvm-ir"}},[t._v("#")]),t._v(" opt The opt tool runs optimization passes on the LLVM IR.")]),t._v(" "),e("p",[e("strong",[t._v("Function")]),t._v(": opt applies a series of transformations to the IR to improve efficiency."),e("br"),t._v("\nThese transformations include passes like dead code elimination (DeadCodeElimination.cpp), inlining (InlineFunction.cpp), and constant propagation (ConstantPropagation.cpp).")]),t._v(" "),e("h5",{attrs:{id:"key-passes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-passes"}},[t._v("#")]),t._v(" Key Passes:")]),t._v(" "),e("p",[e("strong",[t._v("DeadStoreElimination")]),t._v(": Eliminates stores that are never used.\n"),e("strong",[t._v("SCCP (Sparse Conditional Constant Propagation)")]),t._v(": Optimizes based on constant values propagated through the program.\n"),e("strong",[t._v("GVN (Global Value Numbering)")]),t._v(": Removes redundant calculations.")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"target-dependent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#target-dependent"}},[t._v("#")]),t._v(" Target Dependent")]),t._v(" "),e("h3",{attrs:{id:"_3-selectiondag-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-selectiondag-node"}},[t._v("#")]),t._v(" 3. SelectionDAG Node"),e("br")]),t._v(" "),e("p",[t._v("SelectionDAGBuild creates SDGNode"),e("br"),t._v("\nSelectionDAGIsel goes over all IR instructions and calls SelectionDAGBuilder::visit to Dispatch them"),e("br"),t._v("\nWe can use -debug or -view to get log or dump image of the graph"),e("br")]),t._v(" "),e("h3",{attrs:{id:"_4-to-emit-machine-instructions-llvm-will-legalize-the-operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-to-emit-machine-instructions-llvm-will-legalize-the-operation"}},[t._v("#")]),t._v(" 4. To emit machine instructions, LLVM will legalize the operation"),e("br")]),t._v(" "),e("p",[t._v("Use target-specific hooks to convert all operations and types into ones that the target actually supports.\nThis is done by "),e("strong",[t._v("TargetLowering")]),t._v(". "),e("br"),t._v("\nSelectionDAGLegalize::LegalizeOp")]),t._v(" "),e("h3",{attrs:{id:"_5-instruction-selection-from-sdnode-to-machinesndode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-instruction-selection-from-sdnode-to-machinesndode"}},[t._v("#")]),t._v(" 5. Instruction selection from SDNode to MachineSNDode"),e("br")]),t._v(" "),e("p",[t._v("SelectionDAGISel::Select"),e("br"),t._v("\nSelectCode"),e("br"),t._v("\nThis step will create MachineSDNode, a subclass of SDNode which holds the information required to construct an actual machine instruction, but still in DAG node form.")]),t._v(" "),e("h3",{attrs:{id:"_6-scheduling-and-emitting-a-machineinstr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-scheduling-and-emitting-a-machineinstr"}},[t._v("#")]),t._v(" 6. Scheduling and emitting a MachineInstr"),e("br")]),t._v(" "),e("p",[t._v("Translate SDNode into Machine Instructions with InstrEmitter::EmitMachineNode, emmit into MachineBasicBlock.\nHere the instruction are in linear form (MI). No DAG any more."),e("br"),t._v(" "),e("strong",[t._v("-print-machineinstrs")]),e("br"),t._v("\nStill SSA form.")]),t._v(" "),e("h3",{attrs:{id:"_7-register-allocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-register-allocation"}},[t._v("#")]),t._v(" 7. Register Allocation"),e("br")]),t._v(" "),e("p",[t._v("For instructions that can only support fixed registers, it is already allocated. Here the virtual registers are allocated into physical registers. This assignment is done by X86DAGToDAGISel::Select."),e("br"),t._v("\nAfter this, another round of optimization is conducted, TargetPassConfig::addMachinePasses.")]),t._v(" "),e("h3",{attrs:{id:"_8-from-machineinstruction-to-mcinst"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-from-machineinstruction-to-mcinst"}},[t._v("#")]),t._v(" 8. From MachineInstruction to MCinst")]),t._v(" "),e("p",[t._v("JIT: AsmPrinter::EmitInstruction"),e("br"),t._v("\nObj: ObjectStreamer::EmitInstruction"),e("br")]),t._v(" "),e("h3",{attrs:{id:"_9-build-llvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-build-llvm"}},[t._v("#")]),t._v(" 9. Build LLVM")]),t._v(" "),e("p",[t._v("create build&cd build"),e("br"),t._v('\ncmake -S llvm -B . -DCMAKE_BUILD_TYPE=Debug -DLLVM_TARGETS_TO_BUILD="MSP430;RISCV" ../llvm'),e("br"),t._v("\nmake -j 8"),e("br")]),t._v(" "),e("h4",{attrs:{id:"how-to-build-lc3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-lc3"}},[t._v("#")]),t._v(" How to build LC3")]),t._v(" "),e("p",[t._v('cmake -S llvm -B . -DCMAKE_BUILD_TYPE=Debug  -DLLVM_EXPERIMENTAL_TARGETS_TO_BUILD="LC3" ../llvm'),e("br")])])}),[],!1,null,null,null);e.default=n.exports}}]);