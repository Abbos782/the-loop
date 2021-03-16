function add() {
    let sum = [];
    for (let i = 0; i < arguments.length; i++) {
        sum.push(arguments[i])
        
    }
    a = sum.sort()
    d = a.length
    console.log(a[d-1])

  }
  
   add(2, 4);
  