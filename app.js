//console.log("Working");

const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
  getAge: function () {
    return person.age;
  },
};

person.sayHello(); // Output: Hello!
const age = person.getAge();
console.log(age);

const car = {
  make: "Nissan",
  model: "Quashquai",
  colour: "black",
  advert: function () {
    console.log(
      "A " +
        this.colour +
        " example of a " +
        this.make +
        " " +
        this.model +
        " in great condition."
    );
  },
};
car.advert();

const book = {
  title: "The Lord of the Squared",
  author: "Gerald Baalham",
  pages: 7612,
  advert: function () {
    console.log(
      "The " +
        this.pages +
        " pages of " +
        this.title +
        " by " +
        this.author +
        " is a pure joy to read."
    );
  },
};
book.advert();
