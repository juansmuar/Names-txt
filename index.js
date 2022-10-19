import { faker } from '@faker-js/faker';
import fs from 'fs';

let users = "";

function createRandomName() {
  return faker.name.firstName();
}

for (let i = 0; i < 1000; i++){
  users += `${createRandomName()},\n`
}

fs.writeFile("names.txt", users, function(err) {
    if (err) {
      return console.log(err);
    }
  
    console.log("El archivo fue creado satisfactoriamente");
});
