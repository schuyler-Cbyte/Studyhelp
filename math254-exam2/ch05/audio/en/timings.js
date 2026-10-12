window.TIMINGS = {
 "intro": {
  "dur": 14.568,
  "marks": {
   "sub": 4.128,
   "exam": 10.365
  },
  "cues": [
   [
    0.104,
    "Chapter five."
   ],
   [
    1.328,
    "Vector proofs, and true or false."
   ],
   [
    4.128,
    "How to prove an identity for every vector, and how to break a false one with a single example."
   ],
   [
    10.365,
    "This covers study guide problems seven, eight and ten."
   ]
  ]
 },
 "tools": {
  "dur": 32.736,
  "marks": {
   "sq": 2.982,
   "rules": 6.797,
   "ex": 13.633,
   "g1": 19.661,
   "g2": 22.057,
   "g3": 22.995,
   "g4": 23.88,
   "comb": 25.208
  },
  "cues": [
   [
    0.104,
    "Proofs about lengths run on one trick: the norm squared is the vector dotted with itself."
   ],
   [
    6.797,
    "And the dot product behaves like ordinary multiplication: it distributes, and the order doesn't matter."
   ],
   [
    13.633,
    "So expand u plus v, dotted with u plus v, like a product of two sums."
   ],
   [
    19.661,
    "Four pieces: u dot u, u dot v, v dot u, and v dot v."
   ],
   [
    25.208,
    "The middle two are equal, so they combine: u dot u, plus two u dot v, plus v dot v."
   ]
  ]
 },
 "proof": {
  "dur": 41.184,
  "marks": {
   "pic": 8.685,
   "s1": 14.089,
   "s2": 19.831,
   "sub": 26.771,
   "cancel": 26.771,
   "left": 30.456,
   "ans": 34.844
  },
  "cues": [
   [
    0.091,
    "Let's prove an identity: the norm of u plus v squared, minus the norm of u minus v squared, equals four u dot v."
   ],
   [
    8.685,
    "In a parallelogram, u plus v and u minus v are the two diagonals."
   ],
   [
    14.089,
    "Expand the first: u dot u plus two u dot v plus v dot v."
   ],
   [
    19.831,
    "Expand the second the same way; only the middle sign changes: minus two u dot v."
   ],
   [
    26.771,
    "Subtract."
   ],
   [
    26.771,
    "u dot u cancels, and v dot v cancels."
   ],
   [
    30.456,
    "What's left is two u dot v minus negative two u dot v: four u dot v."
   ],
   [
    35.977,
    "Every step used only rules that hold for all vectors, so it's a proof."
   ]
  ]
 },
 "q1": {
  "dur": 2.808,
  "marks": {},
  "cues": [
   [
    0.104,
    "Quick check."
   ],
   [
    1.159,
    "Expand the dot product."
   ]
  ]
 },
 "orth": {
  "dur": 30.312,
  "marks": {
   "claim": 1.745,
   "pic": 9.206,
   "sum": 13.438,
   "goal": 18.255,
   "s1": 21.224,
   "s2": 25.078,
   "ans": 27.305
  },
  "cues": [
   [
    0.104,
    "A second kind of proof."
   ],
   [
    1.745,
    "Suppose u is orthogonal to v and to w."
   ],
   [
    5.964,
    "Show u is orthogonal to v plus w."
   ],
   [
    9.206,
    "Picture u standing straight up, with v and w lying flat."
   ],
   [
    13.438,
    "v plus w also lies flat, so it should be perpendicular to u."
   ],
   [
    18.255,
    "To prove it, show the dot product is zero."
   ],
   [
    21.224,
    "Distribute: u dot v plus u dot w."
   ],
   [
    25.078,
    "Each is zero by assumption, so the sum is zero."
   ],
   [
    29.258,
    "Orthogonal."
   ]
  ]
 },
 "tf": {
  "dur": 45.864,
  "marks": {
   "rule": 1.536,
   "st1": 9.245,
   "try": 15.625,
   "dot": 20.195,
   "nz": 22.357,
   "f1": 24.609,
   "st2": 28.138,
   "try2": 32.37,
   "lhs": 37.083,
   "rhs": 38.906,
   "fix": 42.643
  },
  "cues": [
   [
    0.104,
    "Now true or false."
   ],
   [
    1.536,
    "Always true needs an argument that works for every vector."
   ],
   [
    5.872,
    "Sometimes false needs just one counterexample."
   ],
   [
    9.245,
    "Statement: if u dot v is zero, then u or v is the zero vector."
   ],
   [
    15.625,
    "Try u equals one, zero, and v equals zero, one."
   ],
   [
    20.195,
    "u dot v is zero, but neither vector is zero."
   ],
   [
    24.609,
    "One counterexample, so it's sometimes false."
   ],
   [
    28.138,
    "Another: the norm of k u equals k times the norm of u."
   ],
   [
    32.37,
    "Take k equals negative one and u equals one, zero."
   ],
   [
    37.083,
    "The left side is one, the right side is negative one."
   ],
   [
    41.198,
    "Sometimes false."
   ],
   [
    42.643,
    "The correct rule uses the absolute value of k."
   ]
  ]
 },
 "q2": {
  "dur": 3.744,
  "marks": {},
  "cues": [
   [
    0.091,
    "Quick check."
   ],
   [
    1.159,
    "Always true, or sometimes false?"
   ]
  ]
 },
 "wrap": {
  "dur": 21.96,
  "marks": {
   "w1": 0.977,
   "w2": 5.755,
   "w3": 9.635,
   "w4": 15.208
  },
  "cues": [
   [
    0.091,
    "To sum up."
   ],
   [
    0.977,
    "Turn norms into dot products: the norm squared is x dot x."
   ],
   [
    5.755,
    "Expand with the dot product rules, like multiplying sums."
   ],
   [
    9.635,
    "Orthogonal means the dot product is zero; distribute and use the assumptions."
   ],
   [
    15.208,
    "Sometimes false needs one specific counterexample; always true needs a general argument."
   ]
  ]
 },
 "final1": {
  "dur": 7.44,
  "marks": {},
  "cues": [
   [
    0.104,
    "Now study guide problems seven, eight and ten."
   ],
   [
    3.724,
    "The final write-ups are yours; these check your strategy."
   ]
  ]
 },
 "finish": {
  "dur": 1.872,
  "marks": {},
  "cues": [
   [
    0.104,
    "That's chapter five."
   ]
  ]
 }
};
