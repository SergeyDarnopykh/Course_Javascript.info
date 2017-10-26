/*
Type conversions
importance: 5
What are results of these expressions?
*/
/* 1.*/ "" + 1 + 0
/* 2.*/ "" - 1 + 0
/* 3.*/ true + false
/* 4.*/ 6 / "3"
/* 5.*/ "2" * "3"
/* 6.*/ 4 + 5 + "px"
/* 7.*/ "$" + 4 + 5
/* 8.*/ "4" - 2
/* 9.*/ "4px" - 2
/* 10.*/ 7 / 0
/* 11.*/ "  -9\n" + 5
/* 12.*/ "  -9\n" - 5
/* 13.*/ null + 1
/* 14.*/ undefined + 1

/* 1.*/ '10'
/* 2.*/ -1
/* 3.*/ 1
/* 4.*/ 2
/* 5.*/ 6
/* 6.*/ '9px'
/* 7.*/ '$45'
/* 8.*/ 2
/* 9.*/ NaN
/* 10.*/ Infinity
/* 11.*/ '  -9\n5'
/* 12.*/ NaN // Wrong, it should be -14. During conversion "  -9\n" becomes -9.
/* 13.*/ 1
/* 14.*/ undefined // Wrong, it should be NaN. Undefined becomes NaN after numeric conversion