import { sum, obj, firstname } from "./examples.js";
console.log(obj);
console.log(sum);
console.log(firstname);

import * as all from "./examples.js";
console.log(all.sum(10, 14));
console.log(all.obj);

import * as data from "./examples.js";
console.log(data.sum(10, 14));
console.log(data.obj);
console.log(data.firstname);
console.log(data.reg.test("Opeyemi$"));
console.log(data.tie.test("opeyemi"));
console.log(data.see.test("opeyemi"));
console.log(data.goat.test("opeyemi7"));
console.log(data.tye.test("opeyemi7"));
console.log(data.take.test("opeyemi7@"));
console.log(data.too.test("7675e@"));
console.log(data.sake.test("567675e@"));
console.log(data.new.test("567675e="));

// data de-structure, arrow function, class constructor, module(importing & exporting)
let password, phone, phoneCheck, passwordCheck;
function details(params) {
  if (params.id == "phone") {
    phone = params.value;
    console.log(phone);
  } else {
    password = params.value;
    console.log(password);
  }
}
function login(params) {
  let newphone = /[+]{1}[0-9]{1,3}[0-9]{10}/;
  phoneCheck = newphone.test(phone);
  let newpass = /[a-zA-Z0-9]{7}[@#$%^&*]{1}/;
  passwordCheck = newpass.test(password);
  if (phoneCheck && passwordCheck) {
    console.log("welcome");
  } else {
    console.log("check your login details");
    console.log(phoneCheck);
    console.log(passwrodCheck);
  }
}
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("Success");
  }, 3000);
});

async function jug(params) {
  console.log(12345);
  let b = 0;
  b = await p;
  console.log(b);
}

jug();
