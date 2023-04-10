const list = [
	"Pedro",
	"José",
	"Aderbal",
	"Danilo",
	"Luisa",
	"Vitoria",
	"Luis",
	"Danilo",
	"José",
];

const filteredList = [];
const duplicatedNames = [];

for (let i = 0; i < list.length; i++) {
	if (filteredList.indexOf(list[i]) === -1) {
		filteredList.push(list[i]);
	} else {
		duplicatedNames.push(list[i]);
	}
}

console.log("Lista original: " + list);
console.log("Lista sem duplicados: " + filteredList.join(", "));
console.log("Nomes duplicados: " + duplicatedNames.join(", "));
