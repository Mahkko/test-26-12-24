/*
Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.

	Ulaz: 
	["Sings", "like", "Thunder"];
const separator = "-";

	Izlaz: 
	“Sings-like-Thunder”
*/

const str = ["Sings", "like", "Thunder"];
const separator = "-";

spajanje = (arr, separator) => {
  let spojeniString = "";
  arr.forEach((element) => {
    if (element === arr[-1]) {
      spojeniString += element;
    } else {
      spojeniString += element + separator;
    }
  });
  console.log(spojeniString);
};

spajanje(str, separator);
