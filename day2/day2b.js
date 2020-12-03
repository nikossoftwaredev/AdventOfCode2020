fs = require("fs");
let correctOnes = 0;
fs.readFile("./day2.txt", "utf8", function (err, data) {
  const values = data.split("\n");
  values.forEach((value) => {
    value.replace("\r", "");
    if (value.split(" ").length > 2) {
      const firstPart = value.split(" ")[0];
      const pos1 = firstPart.split("-")[0];
      const pos2 = firstPart.split("-")[1];

      const letter = value.split(" ")[1].replace(":", "");

      const sequence = value.split(" ")[2];

      if (sequence.charAt(pos1 - 1) === letter) {
        if (sequence.charAt(pos2 - 1) !== letter) {
          correctOnes++;
        }
      } else if (sequence.charAt(pos2 - 1) === letter) {
        if (sequence.charAt(pos1 - 1) !== letter) {
          correctOnes++;
        }
      }
    }
  });

  console.log(correctOnes);
});
