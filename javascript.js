// var amount = 80000;

// if(amount>=80000){
//      console.log("I Will buy mac laptop.");
// }else if(amount<80000 && amount>60000){
//     console.log("I will buy gaming laptop");
// }else if(amount<60000 && amount>40000){
//     console.log("I Will buy lenovo laptop");
// }else if(amount<40000 && amount>20000){
//     console.log("I will buy used laptop");
// }else{
//     console.log("I will use my mobile phone.");
// }


// task 5
// switch -------
// var signal = "green";

// switch(signal){
//     case "red" :
//         console.log("Plz stop! You may be in danger.");
//         break;
//     case "yellow" :
//         console.log("You should stop!");
//         break;
//     case "green" :
//         console.log("You should cross thr road.");
//         break;
//     default :
//         console.log("Please stand up.");
// }

// task 2
// function make_avg(integer1, integer2, integer3){
//       var totalInteger = integer1 + integer2 + integer3;
//       var avarageInteger = totalInteger / 3;
//       return avarageInteger;
// }
// console.log(make_avg(10,35,45));


// tast 1
// function foo(){
//     console.log("foo");
//     bar();
// }
// function bar(){
//     console.log("bar");
// }
// console.log(foo());

// task 4
//  function odd_even(num){
//     if(num % 2 == 0){
//         return num + ": this is an even number.";
//     }else{
//         return num + ": this is an odd number."; 
//     }
// }
// console.log(odd_even(11));

// function make_avg(integer){
//      var total = 0;
//      for(i = 0; i<integer.length; i++){
//         total += integer[i];
//      }
//      console.log(total);
//      var avarage = total / integer.length;
//      return avarage;
// }

// var integer = [10, 20, 15, 25, 14,  13, 17, 25, 45, 50, 30];

// console.log(make_avg(integer));

// function getSumOfArray(numbers){
//      let sum = 0;
//      for(let i = 0; i < numbers.length; i++){
//          const index = i;
//          let element = numbers[index];
//          sum += element;
//      }
//      let avarage = sum / numbers.length;
//      return avarage;
// }
// let numbers = [12, 20, 22, 25, 45, 40, 43, 33, 36];
// console.log(getSumOfArray(numbers));

   //  multiplication factorial
// function factorial(number){
//    let multiplication = 1;
//    for(let i = 1; i<= number; i++){
//       multiplication *= i;
//    }
//    return multiplication;
// }

// let result = factorial(5);
// console.log(result);
    
      // inches vs feet 
// function inchToFeet (inches){
//      var feet = inches / 12;
//      return feet;
// }
//  var myHight = inchToFeet(70);
//  console.log(myHight);

      // miles to kilometre
      // function milesToKilomiter(miles){
      //    let kilometer = miles * 1.60934;
      //    return kilometer;
      // } 
      // let distanceOfKilomiter = milesToKilomiter(300);
      // console.log('This path distance of : ', + distanceOfKilomiter);

      // even and odd number
   //   function evenOddNumber(num){
   //         if(num % 2 === 0){
   //          return true;
   //         }
   //         return false;
   //   }

   //   let myNumber = evenOddNumber(1375);
   //   console.log(myNumber);

      //  leap year month check 
      // function isLeapYear(year){
      //    if(year % 4 === 0){
      //        return true;
      //    }
      //       return false;
      // }

      // let myYear = isLeapYear(2028);
      // console.log(myYear);

      // hour to minute
      function hourToMimute(hour){
         let minute = hour * 60;
         return minute + " minute";
      }
      let myHour = hourToMimute(3);
      console.log(myHour);
   //   minute to second 
   function minuteToSecond(minute){
      let second = minute * 60;
      return second + " second.";;
   }
   let mySecond = minuteToSecond(60);
   console.log(mySecond);
