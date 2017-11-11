'use strict';
/*
  Comparisons
  importance: 5

  What will be the result for expressions?
*/

/* 1. */ 5 > 4
/* 2. */ "apple" > "pineapple"
/* 3. */ "2" > "12"
/* 4. */ undefined == null
/* 5. */ undefined === null
/* 6. */ null == "\n0\n"
/* 7. */ null === +"\n0\n"


// Answer:

/* 1. */ true
/* 2. */ true
/* 3. */ true // Wrong, it should be false. a stands BEFORE p, so p is greater.
/* 4. */ true
/* 5. */ false
/* 6. */ false
/* 7. */ false