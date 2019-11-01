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

  for (let i = 0; i < values.length; i++) {
    while (values[i] <= num) {
      final.push(roman[i]);
      num = num - values[i];
    }
  }

  return final.join("");
}
convertToRoman(1793);

