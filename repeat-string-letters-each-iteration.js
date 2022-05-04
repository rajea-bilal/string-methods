function accum(s) {
  
    let array = s.split('')
     let check = array.map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
     let format = check.join('-')
    
    return format
     
    
    }
    
    console.log(accum('abcd'))