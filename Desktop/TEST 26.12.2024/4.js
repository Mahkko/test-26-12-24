/*Ulaz je string koji se sastoji od riječi i razmaka. Vratiti dužinu posljednje riječi u stringu.

Riječ je maksimalni podstring koji se sastoji samo od znakova koji nisu razmaci.

Primjer 1:

Ulaz: str = "Hello World"
Izlaz: 5
Objašnjenje: Posljednja riječ je "World" čija je dužina 5.


Primjer 2:

Ulaz: s = " fly me to the moon   "
Izlaz: 4
Objašnjenje: Posljednja riječ je "moon" čija je dužina 4.
*/

const str = "Hello World";
const s = " fly me to the moon   ";

console.log(s.split(" "));
