window.TIMINGS = {
 "intro": {
  "dur": 14.352,
  "marks": {
   "sub": 2.8,
   "exam": 6.888
  },
  "cues": [
   [
    0.104,
    "Chapter nine."
   ],
   [
    1.211,
    "Linear independence."
   ],
   [
    2.8,
    "Does any vector in a set repeat what the others already give?"
   ],
   [
    6.888,
    "This covers study guide problems twenty, twenty-two, twenty-three, twenty-nine, and thirty c through e."
   ]
  ]
 },
 "def": {
  "dur": 29.28,
  "marks": {
   "eq": 5.638,
   "dep": 7.682,
   "ind": 15.26,
   "par": 22.799,
   "rel": 25.742
  },
  "cues": [
   [
    0.078,
    "A set is linearly independent when the only way to combine its vectors into zero is with every scalar zero."
   ],
   [
    7.682,
    "If some other combination gives zero, the set is dependent, and one vector is a combination of the others."
   ],
   [
    15.26,
    "In the plane, two arrows in different directions are independent: no multiple of one cancels the other."
   ],
   [
    22.799,
    "Two arrows on the same line are dependent: here, two v one minus v two is zero."
   ]
  ]
 },
 "test": {
  "dur": 32.976,
  "marks": {
   "count": 1.432,
   "det": 9.622,
   "ex": 14.714,
   "zero": 18.958,
   "dep": 22.383,
   "rel": 23.776,
   "rule": 27.93
  },
  "cues": [
   [
    0.104,
    "Two quick tests."
   ],
   [
    1.432,
    "First, count: more than n vectors in R n are always dependent."
   ],
   [
    6.732,
    "Four vectors in R three, for example."
   ],
   [
    9.622,
    "Second, for exactly n vectors in R n, use the determinant."
   ],
   [
    14.714,
    "Take one, zero, two, then zero, one, one, then two, one, five."
   ],
   [
    18.958,
    "The determinant is four minus four, zero."
   ],
   [
    22.383,
    "So they're dependent, and indeed the third is two times the first plus the second."
   ],
   [
    27.93,
    "Determinant not zero means independent; zero means dependent."
   ]
  ]
 },
 "q1": {
  "dur": 2.688,
  "marks": {},
  "cues": [
   [
    0.104,
    "Quick check."
   ],
   [
    1.081,
    "Independent or not?"
   ]
  ]
 },
 "param": {
  "dur": 22.848,
  "marks": {
   "set": 2.773,
   "det": 8.177,
   "graph": 11.419,
   "roots": 13.281,
   "ans": 17.995
  },
  "cues": [
   [
    0.104,
    "Sometimes a vector contains a parameter."
   ],
   [
    2.773,
    "k, one, zero, then one, k, zero, then zero, zero, one."
   ],
   [
    8.177,
    "The determinant is k squared minus one."
   ],
   [
    11.419,
    "Graph it against k: it's zero only at k equals one and k equals negative one."
   ],
   [
    17.995,
    "So the set is independent for every k except plus or minus one."
   ]
  ]
 },
 "q2": {
  "dur": 2.376,
  "marks": {},
  "cues": [
   [
    0.104,
    "Quick check."
   ],
   [
    1.133,
    "When is it dependent?"
   ]
  ]
 },
 "wronsk": {
  "dur": 28.92,
  "marks": {
   "set": 2.826,
   "rows": 6.419,
   "tri": 13.164,
   "ans": 19.974,
   "rule": 21.432
  },
  "cues": [
   [
    0.156,
    "For functions, use the Wronskian."
   ],
   [
    2.826,
    "Take one, x, and e to the x."
   ],
   [
    6.419,
    "Row one holds the functions, row two their first derivatives, row three their second derivatives."
   ],
   [
    13.164,
    "Below the diagonal everything is zero, so the determinant is the product of the diagonal: e to the x."
   ],
   [
    21.432,
    "If the Wronskian is not zero for at least one x, the functions are linearly independent."
   ],
   [
    27.604,
    "Here it's never zero."
   ]
  ]
 },
 "q3": {
  "dur": 2.856,
  "marks": {},
  "cues": [
   [
    0.104,
    "Quick check."
   ],
   [
    1.146,
    "Compute a Wronskian."
   ]
  ]
 },
 "two": {
  "dur": 55.2,
  "marks": {
   "two": 2.031,
   "zero": 6.081,
   "nm": 14.583,
   "proof": 21.094,
   "ex": 25.898,
   "want": 32.435,
   "match": 42.07,
   "sol": 47.591
  },
  "cues": [
   [
    0.091,
    "Two traps with small sets."
   ],
   [
    2.031,
    "Two vectors are dependent when at least one is a multiple of the other, and any set containing the zero vector is dependent: one times zero, plus zero times v, is zero."
   ],
   [
    14.583,
    "But v is not a multiple of the zero vector, so not each one is a multiple of the other."
   ],
   [
    21.094,
    "For proofs, start from a nontrivial combination equal to zero."
   ],
   [
    25.898,
    "If c one v one plus c two v two is zero with c one and c two not both zero, then to show v one plus v two and v one minus v two are dependent, look for a and b with a times the first plus b times the second equal to zero."
   ],
   [
    42.07,
    "Collect terms: a plus b times v one, plus a minus b times v two."
   ],
   [
    47.591,
    "Choose a plus b equal to c one and a minus b equal to c two."
   ],
   [
    52.201,
    "That gives a and b, not both zero."
   ]
  ]
 },
 "wrap": {
  "dur": 23.28,
  "marks": {
   "w1": 0.964,
   "w2": 6.94,
   "w3": 13.425,
   "w4": 17.057
  },
  "cues": [
   [
    0.104,
    "To sum up."
   ],
   [
    0.964,
    "Independent: the only combination giving zero uses all zero scalars."
   ],
   [
    6.94,
    "More than n vectors in R n are dependent; for exactly n, check the determinant."
   ],
   [
    13.425,
    "With a parameter, find where the determinant is zero."
   ],
   [
    17.057,
    "For functions, a Wronskian that is nonzero somewhere proves independence."
   ]
  ]
 },
 "final1": {
  "dur": 7.416,
  "marks": {},
  "cues": [
   [
    0.104,
    "Now study guide problems twenty, twenty-two, twenty-three, twenty-nine, and thirty c through e."
   ]
  ]
 },
 "finish": {
  "dur": 1.872,
  "marks": {},
  "cues": [
   [
    0.104,
    "That's chapter nine."
   ]
  ]
 }
};
