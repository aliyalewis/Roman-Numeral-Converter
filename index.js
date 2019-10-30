function convertToRoman(num) {
  let roman = ["M", "D", "C", "L", "X", "V", "I"];
  let values = [1000, 500, 100, 50, 10, 5, 1];
  let final = [];

  for (let i = 0; i < roman.length; i++) {
    console.log(num > values[i]);

    if (num > 1000 && values[i] === 1000) {
      final.push(roman[i]);
      num = num - 1000;
    } else if (num > 500 && values[i] === 500) {
      final.push(roman[i]);
      num = num - 500;
    } else if (num > 100 && values[i] === 100) {
      final.push(roman[i]);
      num = num - 100;
    } else if (num > 50 && values[i] === 50) {
      final.push(roman[i]);
      num = num - 50;
    } else if (num > 10 && values[i] === 10) {
      final.push(roman[i]);
      num = num - 10;
    } else if (num > 5 && values[i] === 5) {
      final.push(roman[i]);
      num = num - 5;
    } else if (num > 1 && values[i] === 1) {
      final.push(roman[i]);
      num = num - 1;
    }
  }

  return final;
}

convertToRoman(36);

// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// XXXVI = 36
