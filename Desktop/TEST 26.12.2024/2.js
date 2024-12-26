//Napiši funkciju koja pronalazi najduži zajednički prefiks među nizom stringova.
//Ako ne postoji zajednički prefiks, vrati prazan string "".
//Primjer:
//Ulaz: strs = ["flower", "flow", "flight"]
//Izlaz: "fl"

const strs = ["flower", "flow", "flight"];
const prefix = [];

strs.forEach((element, i) => {
  if (strs[i][0] === element[i]) {
    console.log(element[0]);
  }
  console.log(strs[i]);

  prefix.push(element[i]);
});
