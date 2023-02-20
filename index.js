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
person.introduceSelf()