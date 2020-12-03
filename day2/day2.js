fs = require("fs");
let correctOnes = 0;
fs.readFile("./day2.txt", "utf8", function (err, data) {
  const values = data.split("\n");
  values.forEach((value) => {
    value.replace("\r", "");
    if (value.split(" ").length > 2) {
      const firstPart = value.split(" ")[0];
      const low = firstPart.split("-")[0];
      const high = firstPart.split("-")[1];

      const secondPart = value.split(" ")[1].replace(":", "");

      const thirdPart = value.split(" ")[2];

      console.log(secondPart);

      const occurencies = thirdPart && thirdPart.split(secondPart).length - 1;

      if (occurencies >= low && occurencies <= high) {
        correctOnes++;
      }
    }
  });

  console.log(correctOnes);
});
