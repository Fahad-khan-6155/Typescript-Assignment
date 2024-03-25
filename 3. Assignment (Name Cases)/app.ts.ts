// Assingnment-3 (Name Case)

// lower case 
let personName :string = "Fahad Khan" 
console.log("lowercase:", personName.toLowerCase());

//uppercase
console.log("uppercase:" , personName.toUpperCase());

//title case
console.log("titlecase:" , personName.replace(/\bw/g,c => c.toUpperCase()));