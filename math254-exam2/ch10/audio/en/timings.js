window.TIMINGS = {
 "intro": {
  "dur": 14.88,
  "marks": {
   "sub": 3.737,
   "exam": 9.206
  },
  "cues": [
   [
    0.104,
    "Chapter ten."
   ],
   [
    1.198,
    "Basis, coordinates and dimension."
   ],
   [
    3.737,
    "The smallest set that builds a whole space, and the address of every vector in it."
   ],
   [
    9.206,
    "This covers study guide problems twenty-four through twenty-eight, and thirty f through j."
   ]
  ]
 },
 "basis": {
  "dur": 26.256,
  "marks": {
   "ind": 4.688,
   "span": 8.164,
   "rn": 11.667,
   "ex": 15.638,
   "yes": 22.904
  },
  "cues": [
   [
    0.078,
    "A basis of a vector space is a set that does two jobs at once."
   ],
   [
    4.688,
    "It is linearly independent: no repeats."
   ],
   [
    8.164,
    "And it spans the space: nothing is missing."
   ],
   [
    11.667,
    "For n vectors in R n, one determinant checks both."
   ],
   [
    15.638,
    "One, one, and one, negative one: the determinant is negative one minus one, negative two."
   ],
   [
    22.904,
    "Not zero, so they form a basis of R two."
   ]
  ]
 },
 "coords": {
  "dur": 28.008,
  "marks": {
   "grid": 4.896,
   "w": 8.867,
   "walk": 11.237,
   "sys": 17.109,
   "ans": 21.992
  },
  "cues": [
   [
    0.091,
    "Coordinates relative to a basis are the scalars that build a vector."
   ],
   [
    4.896,
    "The basis vectors b one and b two make a slanted grid."
   ],
   [
    8.867,
    "Take w equals five, one."
   ],
   [
    11.237,
    "Walk three steps along b one, then two along b two, and you land on w."
   ],
   [
    17.109,
    "Algebra: a plus b equals five, and a minus b equals one, so a is three and b is two."
   ],
   [
    24.622,
    "The coordinate vector of w is three, two."
   ]
  ]
 },
 "q1": {
  "dur": 2.568,
  "marks": {},
  "cues": [
   [
    0.104,
    "Quick check."
   ],
   [
    1.198,
    "Find the coordinates."
   ]
  ]
 },
 "sub": {
  "dur": 48.312,
  "marks": {
   "set": 4.349,
   "split": 7.943,
   "basis": 13.464,
   "dim": 19.844,
   "poly": 22.552,
   "psplit": 27.513,
   "test": 37.461
  },
  "cues": [
   [
    0.104,
    "To find a basis of a subspace, pull the free parameters out."
   ],
   [
    4.349,
    "Take every vector a, b, a plus b."
   ],
   [
    7.943,
    "Split it: a times one, zero, one, plus b times zero, one, one."
   ],
   [
    13.464,
    "Those two vectors span the set, and neither is a multiple of the other, so they're a basis."
   ],
   [
    19.844,
    "Two vectors, so the dimension is two."
   ],
   [
    22.552,
    "Polynomials work the same way."
   ],
   [
    24.674,
    "a t squared plus b t plus a minus b is a times t squared plus one, plus b times t minus one."
   ],
   [
    32.24,
    "Basis: t squared plus one, and t minus one."
   ],
   [
    36.263,
    "Dimension two."
   ],
   [
    37.461,
    "Is three t squared plus two t plus one inside?"
   ],
   [
    41.615,
    "a must be three and b must be two, so the constant should be one."
   ],
   [
    46.159,
    "It is: coordinates three, two."
   ]
  ]
 },
 "mats": {
  "dur": 24.384,
  "marks": {
   "sym": 4.974,
   "parts": 10.208,
   "dim": 15.664
  },
  "cues": [
   [
    0.143,
    "For matrices, give each free entry its own basis matrix."
   ],
   [
    4.974,
    "A two by two symmetric matrix has entries a, b, b, c."
   ],
   [
    10.208,
    "That's a times one matrix, plus b times another, plus c times a third."
   ],
   [
    15.664,
    "Three basis matrices, so the dimension is three."
   ],
   [
    19.427,
    "The off-diagonal one has ones in both mirror positions."
   ]
  ]
 },
 "q2": {
  "dur": 2.424,
  "marks": {},
  "cues": [
   [
    0.104,
    "Quick check."
   ],
   [
    1.224,
    "Find the dimension."
   ]
  ]
 },
 "facts": {
  "dur": 28.848,
  "marks": {
   "few": 3.802,
   "many": 6.25,
   "exact": 8.398,
   "dims": 16.706
  },
  "cues": [
   [
    0.104,
    "Once you know the dimension n, counting does a lot of work."
   ],
   [
    3.802,
    "Fewer than n vectors can't span."
   ],
   [
    6.25,
    "More than n vectors are dependent."
   ],
   [
    8.398,
    "With exactly n vectors, checking one job is enough: independent means it spans, and spanning means independent."
   ],
   [
    16.706,
    "Dimensions to know: R n has n, polynomials of degree at most n have n plus one, m by n matrices have m times n, and the zero space has zero."
   ]
  ]
 },
 "q3": {
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
 "proof": {
  "dur": 41.16,
  "marks": {
   "claim": 2.5,
   "count": 10.052,
   "set": 16.25,
   "coll": 22.409,
   "use": 29.922,
   "back": 34.922
  },
  "cues": [
   [
    0.104,
    "A proof pattern for a new basis."
   ],
   [
    2.5,
    "If v one, v two is a basis of V, show v one, v one plus v two is a basis too."
   ],
   [
    10.052,
    "V has dimension two and this set has two vectors, so independence is enough."
   ],
   [
    16.25,
    "Suppose c one v one plus c two times v one plus v two is zero."
   ],
   [
    22.409,
    "Collect: c one plus c two, times v one, plus c two v two equals zero."
   ],
   [
    29.922,
    "v one and v two are independent, so both coefficients are zero: c two is zero, and then c one is zero."
   ],
   [
    38.802,
    "Independent, so it's a basis."
   ]
  ]
 },
 "wrap": {
  "dur": 24.432,
  "marks": {
   "w1": 0.964,
   "w2": 7.669,
   "w3": 12.786,
   "w4": 18.581
  },
  "cues": [
   [
    0.104,
    "To sum up."
   ],
   [
    0.964,
    "A basis is independent and spans; for n vectors in R n, check the determinant."
   ],
   [
    7.669,
    "Coordinates are the scalars that build the vector; solve one system."
   ],
   [
    12.786,
    "For a subspace, split off the free parameters; the count is the dimension."
   ],
   [
    18.581,
    "With exactly n vectors in an n dimensional space, one of the two checks is enough."
   ]
  ]
 },
 "final1": {
  "dur": 5.448,
  "marks": {},
  "cues": [
   [
    0.104,
    "Now study guide problems twenty-four through twenty-eight, and thirty f through j."
   ]
  ]
 },
 "finish": {
  "dur": 4.128,
  "marks": {},
  "cues": [
   [
    0.104,
    "That's chapter ten, the last chapter."
   ],
   [
    2.786,
    "Good luck on the exam."
   ]
  ]
 }
};
