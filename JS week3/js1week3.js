// const divide = (x, y) => {
    
//     return () => (x/y);
//   } 
//   console.log(divide(4, 2)());

//   let dividFunc = divide(4, 2);



// const divide = (x, y) => {
//     let roundY = y;
  
//     if (isNaN(y) || y === 0) {
//       roundY = 1;
//     }
  
//     return () => (x/roundY);
//   }
//   let dividFunc = divide(4, 0);
// console.log(dividFunc());

// class Square {
//     #length;
//     #width
  
//     constructor(x, y) {
//       this.#length = x;
//       this.#width = y;
//     }
  
//     area = () => this.#length * this.#width;
    
  
//   }
//     const square = new Square(5, 5);
// console.log(square.area());

class Square {
    #length;
    #width
  
    constructor(x, y) {
      this.#length = x;
      this.#width = y;
      this.#validate();
    }
  
    area = () => this.#length * this.#width;
  
    #validate = () => {
      if (isNaN(this.#length) || isNaN(this.#width)) {
        throw "Please provide valid args"
      }
    }
  
  }console.log( new Square());