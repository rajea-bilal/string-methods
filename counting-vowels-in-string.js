// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
//   assert.strictEqual(getCount("abracadabra"), 5)

function getCount(str) {
  
    let vowels= ['a', 'e', 'i', 'o', 'u']
    let newArray = str.split('')
    let count = 0
    for(let i = 0; i < newArray.length; i++ ) {
      for(let j = 0; j < vowels.length; j++) {
        if(newArray[i] == vowels[i]) {
          count++
        } 
      }
      
    }
    return count
  
   
  }
  
  console.log(getCount('abracadabra'))
    
  // Alternative method
  
  function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
  }