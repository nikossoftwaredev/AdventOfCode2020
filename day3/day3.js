fs = require("fs");
fs.readFile("./day3", "utf8", function (err, data) {
  const values = data.split("\n");
  let trees = [0, 0, 0, 0, 0];
  let positions = [0, 0, 0, 0, 0];
  values.forEach((value, idx) => {
    let step = 0;
    let skip = false;

    for (let i = 0; i < positions.length; i++) {
      step = i === 4 ? 1 : 2 * i + 1; // must be 1 3 5 7 1 in 0 1 2 3 4
      skip = i === 4; // skip a row in last loop

      if (skip) {
        if (idx % 2 === 0) {
          // must check 0 1 [2] 3 [4] 5 [6] 7 [8]
          if (value.charAt(positions[i]) === "#" && idx !== 0) trees[i]++;
          positions[i] = (positions[i] + step) % 31;
        }
      } else {
        if (value.charAt(positions[i]) === "#") trees[i]++;
        positions[i] = (positions[i] + step) % 31;
      }
    }
  });

  let multiply = 1;
  for (let i = 0; i < trees.length; i++) {
    multiply = multiply * trees[i];
  }

  console.log(multiply);
});
