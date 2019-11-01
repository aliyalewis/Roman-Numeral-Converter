function convertToRoman(num) {
  let roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let final = [];

  while (num > 0) {
    if (num >= 1000) {
      final.push(roman[values.indexOf(1000)]);
      num = num - 1000;
    } else if (num >= 900 && num < 1000) {
      final.push(roman[values.indexOf(900)]);
      num = num - 1000;
    } else if (num >= 500 && num < 900) {
      final.push(roman[values.indexOf(500)]);
      num = num - 500;
    } else if (num >= 400 && num < 500) {
      final.push(roman[values.indexOf(400)]);
      num = num - 400;
    } else if (num >= 100 && num < 400) {
      final.push(roman[values.indexOf(100)]);
      num = num - 100;
    } else if (num >= 90 && num < 100) {
      final.push(roman[values.indexOf(90)]);
      num = num - 90;
    } else if (num >= 50 && num < 90) {
      final.push(roman[values.indexOf(50)]);
      num = num - 50;
    } else if (num >= 40 && num < 50) {
      final.push(roman[values.indexOf(40)]);
      num = num - 40;
    } else if (num >= 10 && num < 40) {
      final.push(roman[values.indexOf(10)]);
      num = num - 10;
    } else if (num === 5) {
      final.push(roman[values.indexOf(5)]);
      num = num - 5;
    } else if (num === 4) {
      final.push(roman[values.indexOf(4)]);
      num = num - 4;
    } else if (num > 0 && num < 4) {
      final.push(roman[values.indexOf(1)]);
      num = num - 1;
    }
  }

  return final.join("");
}

convertToRoman(1793);

