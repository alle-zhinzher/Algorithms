// False values
// 0, '', null, undefined, NaN, false

// Unxepted true values
// [], {}, function(){}

// String & Numbers
1 + '2';        // '12'
'' + 1 + 0;     // '10'
1 + 3 + "4";    // '44'
'9' * '4';      // 36
'41' - 40;      // 1
'41px' - 40;    // NaN
null + 2;       // 2
undefined + 2;  // NaN

// == vs ===
// == compare with data types coerection
// === conpare without data types coerection
3 == '3';           // true;
3 === '3';          // fasle;
undefined == null;  // true;
undefined === null; // false;
'0' == false;       // coerection to integer 0 == 0 ==> true;


//      Strange Coerection;
false == '';        // true
false == [];        // true
false == {};        // true
'' == 0;            // true
'' == [];           // true
'' == {};           // false
0 == [];            // true
0 == {};            // fasle
0 == null;          // fasle