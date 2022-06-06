// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121

function isVow(a){

    let aV = 97
    let eV = 101
    let iV = 105
    let oV = 111
    let uV = 117
    
    let check = a.map(item => {
      if(item == aV) {
          return 'a'
        } else if(item == eV) {
          return 'e'
        } else if (item == iV) {
          return 'i'
        } else if(item == oV) {
          return 'o'
        } else if(item == uV) {
          return 'u'
        } else if(item !== aV || item !== eV || item !== iV || item !== oV || item !== uV) {
          return item
        }
    })
    return check
        
  }  
  
  console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))