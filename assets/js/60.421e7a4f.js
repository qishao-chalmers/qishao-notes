(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{504:function(a,t,e){"use strict";e.r(t);var s=e(8),l=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h4",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[a._v("#")]),a._v(" env")]),a._v(" "),t("h5",{attrs:{id:"install-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-software"}},[a._v("#")]),a._v(" Install Software")]),a._v(" "),t("p",[a._v("sudo apt-get install  -y wget build-essential  bison zlib1g-dev flex libglu1-mesa-dev libssl-dev libxml2-dev libboost-all-dev git g++ vim python-setuptools python-dev build-essential")]),a._v(" "),t("p",[a._v("pip3 install pyyaml plotly psutil")]),a._v(" "),t("h5",{attrs:{id:"install-cuda"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-cuda"}},[a._v("#")]),a._v(" Install CUDA")]),a._v(" "),t("p",[a._v("wget http://developer.download.nvidia.com/compute/cuda/11.0.2/local_installers/cuda_11.0.2_450.51.05_linux.run")]),a._v(" "),t("p",[a._v("sudo sh cuda_11.0.2_450.51.05_linux.run")]),a._v(" "),t("h5",{attrs:{id:"install-driver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-driver"}},[a._v("#")]),a._v(" Install driver")]),a._v(" "),t("p",[a._v("sudo ubuntu-drivers devices")]),a._v(" "),t("p",[a._v("sudo apt install nvidia-driver-535")]),a._v(" "),t("p",[a._v("nvidia-smi")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/0f88d528-b906-4970-ba7d-12239eadfe6e",alt:"image"}})]),a._v(" "),t("p",[t("strong",[a._v("nvcc --version")])]),a._v(" "),t("p",[a._v("nvcc: NVIDIA (R) Cuda compiler driver"),t("br"),a._v("\nCopyright (c) 2005-2020 NVIDIA Corporation"),t("br"),a._v("\nBuilt on Thu_Jun_11_22:26:38_PDT_2020"),t("br"),a._v("\nCuda compilation tools, release 11.0, V11.0.194"),t("br"),a._v("\nBuild cuda_11.0_bu.TC445_37.28540450_0")]),a._v(" "),t("h4",{attrs:{id:"install-cudnn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-cudnn"}},[a._v("#")]),a._v(" Install cuDNN")]),a._v(" "),t("p",[a._v("sudo dpkg -i cudnn-local-repo-ubuntu2004-9.0.0_1.0-1_amd64.deb")]),a._v(" "),t("p",[a._v("sudo cp /var/cudnn-local-repo-ubuntu2004-9.0.0/cudnn-*-keyring.gpg /usr/share/keyrings/")]),a._v(" "),t("p",[a._v("sudo apt-get update")]),a._v(" "),t("p",[a._v("sudo apt-get -y install cudnn-cuda-12")]),a._v(" "),t("h4",{attrs:{id:"gpu-app-collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-app-collection"}},[a._v("#")]),a._v(" GPU-APP-Collection")]),a._v(" "),t("p",[a._v("gpu app support compile of sm_10. compute_10, remove the versions below 50.")]),a._v(" "),t("p",[a._v('find ./gpu-app-collection/src/cuda/GPU_Microbenchmark/* -name "Makefile"|xargs sed -i "s/sm_30/sm_50/g"')]),a._v(" "),t("p",[a._v('find ./gpu-app-collection/src/cuda/GPU_Microbenchmark/* -name "Makefile"|xargs sed -i "s/compute_30/compute_50/g"')]),a._v(" "),t("p",[a._v("./accel")]),a._v(" "),t("p",[a._v("-----./accel-sim-framework")]),a._v(" "),t("p",[a._v("-----./gpu-app-collection/src/cuda")]),a._v(" "),t("p",[a._v("-----./gpu-app-collection/bin/11.0/release/"),t("strong",[a._v("BINARY")])]),a._v(" "),t("p",[a._v("in ./gpu-app-collection/src, you could use:")]),a._v(" "),t("ul",[t("li",[a._v("make lonestargpu-2.0")]),a._v(" "),t("li",[a._v("make GPU_Microbenchmark")]),a._v(" "),t("li",[a._v("make DeepBench")]),a._v(" "),t("li",[a._v("make rodinia-2.0-ft")]),a._v(" "),t("li",[a._v("make parboil")]),a._v(" "),t("li",[a._v("make shoc")]),a._v(" "),t("li",[a._v("make ispass-2009")]),a._v(" "),t("li",[a._v("make polybench")])]),a._v(" "),t("h4",{attrs:{id:"bashrc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bashrc"}},[a._v("#")]),a._v(" .bashrc")]),a._v(" "),t("p",[a._v("export PATH=/usr/local/cuda-11.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin")]),a._v(" "),t("p",[a._v("export LD_LIBRARY_PATH=/usr/local/cuda-11.0/lib64")]),a._v(" "),t("p",[a._v("export CUDA_INSTALL_PATH=/usr/local/cuda-11.0")]),a._v(" "),t("p",[a._v("export PATH=$CUDA_INSTALL_PATH/bin:$PATH\nexport GPUAPPS_ROOT=/home/qishao/Project/gpu_simulator/accel/gpu-app-collection")]),a._v(" "),t("h4",{attrs:{id:"collect-and-run-trace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collect-and-run-trace"}},[a._v("#")]),a._v(" Collect and run trace:")]),a._v(" "),t("p",[a._v("./util/tracer_nvbit/run_hw_trace.py -B polybench -D 0")]),a._v(" "),t("p",[a._v("./gpu-simulator/bin/release/accel-sim.out -trace ./hw_run/traces/device-0/11.0/nw-rodinia-2.0-ft/128_10___data_result_128_10_txt/traces/kernelslist.g -config ./gpu-simulator/gpgpu-sim/configs/tested-cfgs/SM7_QV100/gpgpusim.config -config ./gpu-simulator/configs/tested-cfgs/SM7_QV100/trace.config")])])}),[],!1,null,null,null);t.default=l.exports}}]);