let names = ["John", "Jane", "Mike", "Jack"];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let firstLetter = name.charAt(0).toLowerCase();
  
  if (firstLetter === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
