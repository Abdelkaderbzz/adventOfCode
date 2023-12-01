import fs from 'fs';
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const calibration = (ch) => {
  let first, last;
  for (let i = 0; i < ch.length; i++) {
    if (Number(ch[i])) {
      if (!first) {
        first = ch[i];
      }
      last = ch[i];
    } else {
      if (ch[i] === 'z') {
        if (ch.substr(i, 4) === 'zero') {
          if (!first) {
            first = '0';
          }
          last = '0';
        }
      } else if (ch[i] === 'o') {
        if (ch.substr(i, 3) === 'one') {
          if (!first) {
            first = '1';
          }
          last = '1';
        }
      } else if (ch[i] === 't') {
        if (ch.substr(i, 3) === 'two') {
          if (!first) {
            first = '2';
          }
          last = '2';
        }
        if (ch.substr(i, 5) === 'three') {
          if (!first) {
            first = '3';
          }
          last = '3';
        }
      } else if (ch[i] === 'f') {
        if (ch.substr(i, 4) === 'four') {
          if (!first) {
            first = '4';
          }
          last = '4';
        }
        if (ch.substr(i, 4) === 'five') {
          if (!first) {
            first = '5';
          }
          last = '5';
        }
      } else if (ch[i] === 's') {
        if (ch.substr(i, 3) === 'six') {
          if (!first) {
            first = '6';
          }
          last = '6';
        }
        if (ch.substr(i, 5) === 'seven') {
          if (!first) {
            first = '7';
          }
          last = '7';
        }
      } else if (ch[i] === 'e') {
        if (ch.substr(i, 5) === 'eight') {
          if (!first) {
            first = '8';
          }
          last = '8';
        }
      } else if (ch[i] === 'n') {
        if (ch.substr(i, 4) === 'nine') {
          if (!first) {
            first = '9';
          }
          last = '9';
        }
      }
    }
  }
  return Number(first + last);
};
const sumCalibration = (lines) => {
  let sum = 0;
  lines.map((el) => {
    sum = sum + calibration(el);
  });
  return sum;
};
console.log(sumCalibration(lines));
