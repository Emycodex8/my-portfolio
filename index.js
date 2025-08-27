

// var x, y, z;
// x = 2;
// y = 3;
// z = 6;

// var myName = 'Young Elefiku';
// var myName1 = "Young Elefiku";

// var joinMe = myName +' '+ myName1;


// var myname = 'Stephen Elefiku';
// var area_Of_A_Circle = 23;
// const PI = 3.142;

//+,-,*,/, %
// 21 % 5 = 1
// 232 % 5
// var x = '20';
// var y = 30;
// var sum =  y+x ;
//'20 30'
// ! && || < > <= >= == === =

//!(!(23 < 40) && !(!false && !true) && !true) && !(30 > 20) == !true;


//Nelly false
//Em true
//Joseph true
// Mathin false
// Prince  false
// var age = 23;
// if(age <= 18){
//     //take 10;

// }else if(age > 18 && age <=25){
//     //take 20
// }else if(age > 25 && age <=30){
//     //take 30
// }else{
//     //take 500;
// }
// console.log(23 + 97)
// alert( 2 > 1 )



  // do-while loop

// let num = 20;

// do {
//   console.log(`the value of num is ${num}`)
//   num--
// } while (num < 10);

// while loop
// its a type of loop that runs the block of code when the condition equals to true.

// let i = 5;
// while (i < 10){
//   console.log(`Nelly ${i}`);
//   i++
// }
// array: collection of items./ or data types.

// results.push(false)
// console.log(results)

// let i = 0;
// let results = (['martins', 3, true, null, 'luzoma', 'facebook', 24])
// while(i <= results.length){
//    console.log(results[i]);
//    i++
//  }
// for (let i = 0; i <= results.length; i++){
//   console.log(results[i])
// }
// array methods...
// pop method
// let luzoma = ['joseph', 'prince', 'pizza']
// let admin = luzoma.pop()
// console.log(`the admin output is ${admin}`)
// console.log(luzoma)
// shift method
// let luzoma = ['joseph', 'prince', 'pizza']
// let admin = luzoma.shift()
// console.log(`the answer is ${admin}`)
// console.log(luzoma)

// unshift
// let luzoma = ['joseph', 'prince', 'pizza']
// luzoma.unshift('venza', 'benzz')
// console.log(luzoma)

// let luzoma = ['joseph', 'prince', 'pizza']
// let cars = ['spider', 'brabus', 'corolla']

// const resultOfCars = luzoma.concat(cars)
// console.log(resultOfCars)

// let i = 10;
// let string1 = 'james';
// let string2 = 'john';
// let array = [];

// for(i = 0; i <= 10; i++){
//   if(i == 5){
//     array.push(string1, string2)
//     console.log(array)
//   } 
  // else{
  //   console.log( 'e no de work')
  // }
// }

// reverse type of array
// let arrayOfCar = ['lexus', 'toyota', 'porshe', 'Benz', 'aston martins']
// let answer = arrayOfCar.reverse();
// console.log(answer)

// indexOf type of array
// let arrayOfCar = ['lexus', 'toyota', 'porshe', 'Benz', 'aston martins']
// let itemIndex = arrayOfCar.indexOf('Benz');
// console.log(itemIndex);

// slice type of array
// let arrayOfCar = ['lexus', 'toyota', 'porshe', 'Benz', 'aston martins']
// let answer = arrayOfCar.slice(2, 4);
// console.log(answer);

// functons
// function declaration
// function luzoma(x,y){
//  return x * y 
// }

// console.log(luzoma(10, 5))

// function expression
// let dennis = 10
// let destiny = function(){
  // return a + b
  // let dennis = 20 
//   
// named function expression
// let david = function favour(){
//   console.log('prince'); 
// }
// david();
// anonymous function expression

// setTimeout(function(){
//   console.log('luzoma enterprise');
    
// },4000)



// function sumMe(x,y){
//   // console.log(x + y);
//   return x + y ;
// }

// let res = sumMe(10, 38)
// console.log(res * 12);


// let num = [1,2,3,4,[99, 88, 77],5,6];
// console.log(num[4][2]);



//  var num = [1,2,3,4,90]
//  function getList(e){
//   console.log(e);
//  }

//  num.forEach(function(e){
//   console.log(e);
  
//  })

//  function getEven(start, end){
//   for(let i = start; i <= end; i++){
//     if(i % 2 == 0){
//       console.log(i); 
//     }
    // else(i % number != 0){
    //   console.log(i);   
    // }
//   }
//  } 
//   getEven(3,10)

  // function multiplicationTable(number, start, end){
   
  //   for(let i = start; i <= end; i++){
  //     let multiply = number * i;
  //     console.log(`${number} x ${i} = ${multiply}`);
  //   }
  // }
  // multiplicationTable(15, 20, 40)

  // function from highest to lowest
  // function descending(highest, lowest){
  //   for(let number = highest; number >= lowest; number--){
  //     console.log(number);
  //   }
  // }
  // descending(60, -30)
  

// function rollDice(){
//   let randomNumber = Math.floor(Math.random() * 13) + 1
//   return randomNumber
// }
// console.log(rollDice());


// let person = {
//   name:"Emem",
//   age: 18,
//   country: "Nigeria"
// }
// function logData(){
//   return person.name + " is " + person.age + " years old and lives in " + person.country
// }

// console.log(logData());

// let hands = ["rock","paper","scissors"]
// function scissorsGame(){
//   let randomItem =  Math.floor(Math.random() * 3)
//   return hands[randomItem]
// } 
// console.log(scissorsGame());



// let carBrands = {
//   first: "lexus",
//   second:"corolla",
//   third:"benz",
// }

// console.log(carBrands.second);

let changeName = document.getElementById("changeName")
let cardName = document.getElementById("cardName")
changeName.addEventListener('click', function(){
  cardName.textContent = "John doe"
  let anchor = document.createElement('a');
  anchor.setAttribute('href', 'http://facebook.com');
  anchor.textContent = "Visit facebook"
  cardName.after(anchor)
})
// let x = 10;
// while(x < 5){
//   if(x % 2 === 0){
//     console.log(x);

function getName(){
   
}




    
//   }
// }
 


for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}



// for of loop array


const fruits =["banana", "apple", "orange", "mango"];
for(const fruit of fruits){
  console.log("I like ", fruit);
}
  
// for in loop object 
let person ={ name: "John", age: "30", job:"software engineer" };
for (const key in person){
  console.log(key + "", person[key]);
}

// for loop - nested loops
for( let row = 1; row <= 5; row++){
  let line = "";
  for (let col = 1; col <= 5; col++){
    line += (row * col) + "/";
  }
  console.log(line);
  
}

for(let i = 0; i <= 10; i++){
  if(i === 5){
    console.log("We found 5. Please stop the loop!");
    break;
  }
  if(i % 2 === 0){
    console.log("it's even, skip the rest of this round!");
    continue;
  }
    console.log("it is odd and processed");
    
};










