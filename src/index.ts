const name = "grey",
  age = 25,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
};

sayHi(name, age, gender);

export {};
