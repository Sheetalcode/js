const car = new String("Renault")
console.log(car.length);          //give total number of character
console.log(car[2]);              //give index number
console.log(car.toUpperCase());   //convrt uppercases
console.log(car.toLowerCase());   //convert lower cases
console.log(car.charAt(4));       //give the character based on index number
console.log(car.indexOf('t'));    //give the index number
console.log(car.substring(0,5));  // give only 5 indexes


const anotherCar = "    Maruti,Tavera,Thar,Suzuki    "
console.log(anotherCar);       // define new strings
console.log(anotherCar.trim());  //trim the spaces
console.log(car.replace('n' , 'v'));  //replace the value
console.log(anotherCar.split(','));   //convert into arrays

