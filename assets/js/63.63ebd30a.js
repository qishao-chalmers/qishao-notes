(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{518:function(s,a,e){"use strict";e.r(a);var t=e(8),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" env")]),s._v(" "),a("h5",{attrs:{id:"install-software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-software"}},[s._v("#")]),s._v(" Install Software")]),s._v(" "),a("p",[s._v("ubuntu 20.4")]),s._v(" "),a("p",[s._v("sudo apt-get install  -y wget build-essential  bison zlib1g-dev flex libglu1-mesa-dev libssl-dev libxml2-dev libboost-all-dev git g++ vim python-setuptools python-dev build-essential xutils-dev")]),s._v(" "),a("p",[s._v("pip3 install pyyaml plotly psutil")]),s._v(" "),a("p",[a("strong",[s._v("In case you meet bug: release/cuda-sim/Makefile.makedepend: No such file or directory")])]),s._v(" "),a("p",[s._v("sudo apt install xutils-dev")]),s._v(" "),a("h5",{attrs:{id:"install-cuda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-cuda"}},[s._v("#")]),s._v(" Install CUDA")]),s._v(" "),a("p",[s._v("wget http://developer.download.nvidia.com/compute/cuda/11.0.2/local_installers/cuda_11.0.2_450.51.05_linux.run")]),s._v(" "),a("p",[s._v("sudo sh cuda_11.0.2_450.51.05_linux.run")]),s._v(" "),a("h5",{attrs:{id:"install-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-driver"}},[s._v("#")]),s._v(" Install driver")]),s._v(" "),a("p",[s._v("sudo ubuntu-drivers devices")]),s._v(" "),a("p",[s._v("sudo apt install nvidia-driver-535")]),s._v(" "),a("p",[s._v("nvidia-smi")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/0f88d528-b906-4970-ba7d-12239eadfe6e",alt:"image"}})]),s._v(" "),a("p",[a("strong",[s._v("nvcc --version")])]),s._v(" "),a("p",[s._v("nvcc: NVIDIA (R) Cuda compiler driver"),a("br"),s._v("\nCopyright (c) 2005-2020 NVIDIA Corporation"),a("br"),s._v("\nBuilt on Thu_Jun_11_22:26:38_PDT_2020"),a("br"),s._v("\nCuda compilation tools, release 11.0, V11.0.194"),a("br"),s._v("\nBuild cuda_11.0_bu.TC445_37.28540450_0")]),s._v(" "),a("h4",{attrs:{id:"install-cudnn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-cudnn"}},[s._v("#")]),s._v(" Install cuDNN")]),s._v(" "),a("p",[s._v("wget https://developer.download.nvidia.com/compute/cudnn/9.0.0/local_installers/cudnn-local-repo-ubuntu2004-9.0.0_1.0-1_amd64.deb")]),s._v(" "),a("p",[s._v("sudo dpkg -i cudnn-local-repo-ubuntu2004-9.0.0_1.0-1_amd64.deb")]),s._v(" "),a("p",[s._v("sudo cp /var/cudnn-local-repo-ubuntu2004-9.0.0/cudnn-*-keyring.gpg /usr/share/keyrings/")]),s._v(" "),a("p",[s._v("sudo apt-get update")]),s._v(" "),a("p",[s._v("sudo apt-get -y install cudnn-cuda-12")]),s._v(" "),a("h4",{attrs:{id:"gpu-app-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu-app-collection"}},[s._v("#")]),s._v(" GPU-APP-Collection")]),s._v(" "),a("p",[s._v("git clone https://github.com/accel-sim/gpu-app-collection.git")]),s._v(" "),a("p",[s._v("make -C ./gpu-app-collection/src data")]),s._v(" "),a("p",[s._v("gpu app support compile of sm_10. compute_10, remove the versions below 50.")]),s._v(" "),a("p",[s._v('find ./gpu-app-collection/src/cuda/GPU_Microbenchmark/* -name "Makefile"|xargs sed -i "s/sm_30/sm_50/g"')]),s._v(" "),a("p",[s._v('find ./gpu-app-collection/src/cuda/GPU_Microbenchmark/* -name "Makefile"|xargs sed -i "s/compute_30/compute_50/g"')]),s._v(" "),a("p",[s._v("./accel")]),s._v(" "),a("p",[s._v("-----./accel-sim-framework")]),s._v(" "),a("p",[s._v("-----./gpu-app-collection/src/cuda")]),s._v(" "),a("p",[s._v("-----./gpu-app-collection/bin/11.0/release/"),a("strong",[s._v("BINARY")])]),s._v(" "),a("p",[s._v("in ./gpu-app-collection/src, you could use:")]),s._v(" "),a("ul",[a("li",[s._v("make lonestargpu-2.0")]),s._v(" "),a("li",[s._v("make GPU_Microbenchmark")]),s._v(" "),a("li",[s._v("make DeepBench")]),s._v(" "),a("li",[s._v("make rodinia-2.0-ft")]),s._v(" "),a("li",[s._v("make parboil")]),s._v(" "),a("li",[s._v("make shoc")]),s._v(" "),a("li",[s._v("make ispass-2009")]),s._v(" "),a("li",[s._v("make polybench")])]),s._v(" "),a("h4",{attrs:{id:"bashrc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bashrc"}},[s._v("#")]),s._v(" .bashrc")]),s._v(" "),a("p",[s._v("export PATH=/usr/local/cuda-11.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin")]),s._v(" "),a("p",[s._v("export LD_LIBRARY_PATH=/usr/local/cuda-11.0/lib64")]),s._v(" "),a("p",[s._v("export CUDA_INSTALL_PATH=/usr/local/cuda-11.0")]),s._v(" "),a("p",[s._v("export PATH=$CUDA_INSTALL_PATH/bin:$PATH\nexport GPUAPPS_ROOT=/home/qishao/Project/gpu_simulator/accel/gpu-app-collection")]),s._v(" "),a("h4",{attrs:{id:"collect-and-run-trace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collect-and-run-trace"}},[s._v("#")]),s._v(" Collect and run trace:")]),s._v(" "),a("p",[s._v("./util/tracer_nvbit/run_hw_trace.py -B polybench -D 0")]),s._v(" "),a("p",[s._v("./gpu-simulator/bin/release/accel-sim.out -trace ./hw_run/traces/device-0/11.0/nw-rodinia-2.0-ft/128_10___data_result_128_10_txt/traces/kernelslist.g -config ./gpu-simulator/gpgpu-sim/configs/tested-cfgs/SM7_QV100/gpgpusim.config -config ./gpu-simulator/configs/tested-cfgs/SM7_QV100/trace.config")]),s._v(" "),a("h4",{attrs:{id:"pytorch-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pytorch-docker"}},[s._v("#")]),s._v(" Pytorch docker")]),s._v(" "),a("h5",{attrs:{id:"install-pytorch-gpu-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-pytorch-gpu-docker"}},[s._v("#")]),s._v(" Install pytorch gpu docker")]),s._v(" "),a("p",[s._v("curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg   && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list |     sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' |     sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list")]),s._v(" "),a("p",[s._v("sudo apt-get update")]),s._v(" "),a("p",[s._v("sudo apt-get install -y nvidia-container-toolkit")]),s._v(" "),a("p",[s._v("sudo nvidia-ctk runtime configure --runtime=docker\nsudo systemctl restart docker")]),s._v(" "),a("h5",{attrs:{id:"run-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-docker"}},[s._v("#")]),s._v(" run docker")]),s._v(" "),a("p",[s._v("sudo docker run --gpus all -it --rm     -v "),a("code",[s._v("pwd")]),s._v(":/workspace     -e LOCAL_UID=$(id -u $USER)     -e LOCAL_GID=$(id -g $USER)     pinto0309/pytorch-build:11.3.0-cudnn8-devel-ubuntu20.04 bash")]),s._v(" "),a("h5",{attrs:{id:"success-fully-pytorch-compiled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#success-fully-pytorch-compiled"}},[s._v("#")]),s._v(" Success Fully Pytorch Compiled")]),s._v(" "),a("p",[s._v("conda install python 3.12 version")]),s._v(" "),a("p",[s._v('This works for "239d87af5e5fecec452214a5e6e5e204b51c0597"')]),s._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/user-attachments/assets/feb87afb-454b-4de4-af1f-6075b57a757e",alt:"image"}})]),s._v(" "),a("h5",{attrs:{id:"build-with-cuda-and-debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-with-cuda-and-debug"}},[s._v("#")]),s._v(" Build with CUDA and debug")]),s._v(" "),a("p",[s._v("DEBUG=1 USE_CUDA=1 USE_ROCM=0 python setup.py develop")]),s._v(" "),a("h5",{attrs:{id:"enable-vscode-python-attach-c-debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-vscode-python-attach-c-debug"}},[s._v("#")]),s._v(" Enable vscode python attach c++ debug")]),s._v(" "),a("p",[s._v("echo 0| sudo tee /proc/sys/kernel/yama/ptrace_scope\nsudo setcap cap_sys_ptrace=eip /usr/bin/gdb")]),s._v(" "),a("details",[a("summary",[s._v("launch.json")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    // Use IntelliSense to learn about possible attributes.\n    // Hover to view descriptions of existing attributes.\n    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "Python Debugger: Current File",\n            "type": "debugpy",\n            "request": "launch",\n            "program": "${file}",\n            "console": "integratedTerminal",\n            "justMyCode": false,\n            "env": {\n                "PYTORCH_JIT": "0",\n                "TORCH_COMPILE_DEBUG": "1",\n                "PYTORCH_DEBUG": "1",\n                "PYTORCH_LOGS": "1",\n                "TORCH_SHOW_CPP_STACKTRACES": "1",\n                "PYTHONPATH": "/home/***/Project/learn_pytorch/pytorch/build/:${PYTHONPATH}",\n                "LD_LIBRARY_PATH": "/home/***/Project/learn_pytorch/pytorch/build/lib:/home/***/anaconda3/envs/py311/lib:/usr/local/cuda-11.8/targets/x86_64-linux/lib/:${env:LD_LIBRARY_PATH}"\n            },\n            "envFile": "${workspaceFolder}/.env"    \n        },\n        {\n            "name": "TorchC++ Debugger",\n            "type": "cppdbg",\n            "request": "attach",\n            "program": "/home/***/anaconda3/envs/py311/bin/python",\n            "processId": "${command:pickProcess}",\n            "MIMode": "gdb",\n            "setupCommands": [\n                {\n                    "description": "Enable pretty-printing for gdb",\n                    "text": "-enable-pretty-printing",\n                    "ignoreFailures": true\n                }\n            ]\n        \n        }\n\n    ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);