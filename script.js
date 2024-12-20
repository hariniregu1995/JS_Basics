//LOOPING statements

// for loop

//for(initialisation;condition;iteration;)

// for(let i=1;i<=5;i++){
//     console.log(i);
// }


// while


// while(condition){
//     //statement
// }


let count=1;
while(count<10){
    console.log(count);
    count+=2;
}
let fruits=["Apple","Banana","Cherry"];
let a=0;
while(a<fruits.length){
    console.log(`${a+1}.${fruits[a]}`);
    a++;
}
// do/while


let text="";
let i=0;
do{
    text+=i+'\n';
    i++;
}
while(i<10);
console.log(text);