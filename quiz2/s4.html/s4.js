function multiplyMatrices(a, b) {
    let row1 = A.length;
    let col1 = A[0].length;
    let row2 = B.length;
    let col2 = B[0].length;
    if (col1 !== row2) {
      console.log("Error: matrices multiplication Method is Wrong");
      return;
    }
    let C = [];
    for (let i = 0; i < row1; i++) {
      C[i] = [];
      for (let j = 0; j < col2; j++) {
        C[i][j] = 0;
        for (let k = 0; k < col1; k++) {
          C[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    return C;
  }
  const A = [[10, 8, 8], [5, 2, 3]];
  const B = [[6, 7], [3, 5], [-9, -11]];
  const C = multiplyMatrices(A, B);
  console.log(" matrix A: " + JSON.stringify(A) );
  console.log(" matrix B: " + JSON.stringify(B) );
  console.log(" matrix C: " + JSON.stringify(C) ); 