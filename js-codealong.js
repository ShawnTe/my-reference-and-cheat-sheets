function sayNameAndSpecies() {
  console.log("I am " + this.name);
}

var frog = {
  name: "Kermit",
  species: "frog"
};
sayNameAndSpecies.call(frog)  //type 2 call of function


// v2
function sayNameAndSpecies(attr1, attr2) {
  console.log(attr1 + " and " + attr2);
  console.log("I am ");
}

var frog = {
  name: "Kermit",
  species: "frog"
};
sayNameAndSpecies.apply(frog, ["vain", "surly"])  //type 3 call of function
// or
sayNameAndSpecies.call(frog, "vain", "surly")  //type 3 call of function


