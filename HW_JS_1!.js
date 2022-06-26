
const age_2 = 18
const age_3 = 60

const checkAge = function(age){
  
  if(age && !isNaN(age)){ 
   if (age < age_2){
       console.log("you don't have access cause your age is" + " " + age + ". " + "It's less then");
   } else if (age >= age_2 && age < age_3){
              console.log("Welcom !");
   } else if (age > age_3){
              console.log("Keep calm and look Culture channel");
  } else{ 
              console.log("Technical work");
  } 
} else  console.log('Not an interger value')
}
checkAge('0')
