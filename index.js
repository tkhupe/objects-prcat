const person = {
    name: ["Tshakalisa" , "Khupe"],

    
    age: 40,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`hi! I'm ${this.name[0]}.`);
    },
};

person.name;
person.name[0];
person.age;
person.bio();
person.introduceSelf();


// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//   };
  
  function logProperty(propertyName) {
    console.log(person[propertyName]);
  }
  
  logProperty("name");
  // ["Bob", "Smith"]
  logProperty("age");
  // 32

  person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person["eyes"]);
person.farewell();

const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

const catName = cat["name"];
cat.greeting();
console.log(catName);