(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{421:function(e,t,i){"use strict";i.r(t);var n=i(5),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("An Analysis of a Resource Efficient Checkpoint Architecture")]),e._v("\n[Intel]")]),e._v(" "),t("p",[e._v("The main part that I like is the discussion\n(1) Using map table checkpoints. Map table checkpoints are created periodically either at every branch or every few cycles [Leibholz and Razdan 1997; Yeager 1996]. On a misprediction, the checkpoint corresponding to the mispredicted branch is restored. The number of checkpoints limits the number\nof unresolved branches allowed in the instruction window.\n(2) Using the retirement map table (RMAP). In this scheme, a retirement map table [Hinton et al. 2001] is used in addition to the frontend map table. Each ROB entry also has the rename map for its corresponding instruction. Once a misprediction is resolved, the mispredicted branch is allowed to reach\nthe head of the ROB at which time the retirement map table will have the correct map table corresponding to the mispredicted branch. At this point, the retirement map table is copied to the frontend map table, after which renaming can start. Since all instructions prior to the mispredicted branch must be retired before renaming can start, this scheme can lead\nto significant delays if long latency operations prior to the mispredicted branch stall retirement.\n(3) Using the retirement map table and the ROB (RMAP+WALK). This scheme is an optimization on the scheme above. Instead of waiting for the mispredicted branch to reach the head of the ROB, we start with the current retirement map table and pro-actively walk from the head of the ROB toward the mispredicted branch, incorporating the rename information of\neach ROB entry. This allows renaming of correct path instructions to commence without waiting for all instructions prior to the mispredicted branch\nto retire.\n(4) Using the frontend map table and a history buffer (HBMAP+WALK). In this scheme, a history buffer is used to store overwritten maps of each instruction. On a branch misprediction, we start with the current frontend map table. We pro-actively walk from the current tail of the ROB (i.e., the most\nrecently allocated instruction) toward the mispredicted branch, incorporating the overwritten maps of each instruction. Depending on whether the mispredicted branch is closer to the ROB head or ROB tail, RMAP + WALK, or HBMAP + WALK will perform better.")]),e._v(" "),t("p",[e._v("In short:\n"),t("strong",[e._v("1. checkpoint generated at the moment of decoding branch instruction. Recover at detection of missprediction.")]),e._v(" "),t("strong",[e._v("2. use retire map table(RMAP). wait the commit of missprediction instruction, then rewrite the RAT(remap alias table) with RMAP")]),e._v(" "),t("strong",[e._v("3. RMAP + WALK. Restart from the moment that miss prediction is detected, copy the RMAP into RAT and then modify RMAP with ROB remapping, until we get to the miss predicted intruction.")]),e._v(" "),t("strong",[e._v("4. HBMAP + WALK. Start from frontend RAT(FRAT), use history buffer to recover the overwritten register relation.")])]),e._v(" "),t("p",[e._v("RMAP+WALK utilize commited RMAP, thus it walks from the head of ROB (oldest) to the branch instruction.\nHBMAP+WALK utilize frontend RAT, thus it walks from the end of ROB (youngest) to the branch instruction.")])])}),[],!1,null,null,null);t.default=r.exports}}]);