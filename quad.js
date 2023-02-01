
function quadraticEquation(a, b, c) {
    if (a === 0) {
      return "Not a valid equation";
    } else {
      let delta = b * b - 4 * a * c;
      if (delta < 0) {
        return "No real roots";
      } else if (delta === 0) {
        let x = -b / (2 * a);
        return x;
      } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return x1 + " " + x2;
      }
    }
  }
  
  console.log(quadraticEquation(10, 20, 5));