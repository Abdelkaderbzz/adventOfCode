import fs from 'fs';
const sumOfPossibleGameIds = (path) => {
  const sumbol = ['$', '*', '=', '-', '+', '&', '%', '/', '#', '@'];
  let mat = [];
  let numbers = [];
  let sum = 0;
  let num = '';
  const lines = fs.readFileSync(path, 'utf-8').split('\n');
  lines.map((el) => {
    const singleArr = el.split('');
    mat.push(singleArr);
  });
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const dim = {
        left: mat[i][j - 1],
        right: j + 1 < mat[i].length ? mat[i][j + 1] : undefined,
        top: i - 1 >= 0 ? mat[i - 1][j] : undefined,
        topLeft: i - 1 >= 0 && j - 1 >= 0 ? mat[i - 1][j - 1] : undefined,
        topRight: i - 1 >= 0 && j + 1 >= 0 ? mat[i - 1][j + 1] : undefined,
        bottom: i + 1 < mat.length ? mat[i + 1][j] : undefined,
        bottomLeft: i + 1 < mat.length ? mat[i + 1][j - 1] : undefined,
        bottomRight: i + 1 < mat.length ? mat[i + 1][j + 1] : undefined,
      };
      if (Number(mat[i][j]))
      {
        if (
          dim.left in sumbol ||
          dim.right in sumbol ||
          dim.top in sumbol ||
          dim.topLeft in sumbol ||
          dim.topRight in sumbol ||
          dim.bottom in sumbol||
          dim.bottomLeft in sumbol||
          dim.bottomRight in sumbol
        )
          console.log(mat[i][j],'is success')
      }
    }
  }
  return false;
};

console.log(sumOfPossibleGameIds('./exemple.txt'));

// console.log({
//   left: mat[i][j - 1],
//   right: j + 1 < mat[i].length ? mat[i][j + 1] : undefined,
//   top: i - 1 >= 0 ? mat[i - 1][j] : undefined,
//   bottom: i + 1 < mat.length ? mat[i + 1][j] : undefined,
// });
// if (Number(parseInt(mat[i][j])))
// {
//   const dim={
//     left: mat[i][j - 1],
//     right: j + 1 < mat[i].length ? mat[i][j + 1] : undefined,
//     top: i - 1 >= 0 ? mat[i - 1][j] : undefined,
//     bottom: i + 1 < mat.length ? mat[i + 1][j] : undefined,
//   }
//   if (isNaN(mat[i][j])||dim.left in notSumbol || dim.right)
//   {
//     sum=sum+parseInt(mat[i][j]);
//   }
// }
