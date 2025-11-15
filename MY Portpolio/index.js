

// function addnums(...num){

//     let sum = 0;

//     for(let n of num){
//         sum+=n
//     }
   
//    console.log(sum)
// }

// addnums(1,23,4,5,6)

// addnums(1,23,4,5,6)

// addnums(1,23,4,5,6)

// addnums(1,23,4,5,6)

// const arr= [10,20,30,40,50];
 
// console.log(arr)

// const arr = [10 ,20 ,30 ,40];

// const arr2 = [,60 ,70 ,60];

// const ans = (arr+ arr2);

// console.log(ans)

// const addnums = (a,b)=>  a+b;

// console.log(addnums(6,6));

// const addnums = a=> a*a;

// console.log(addnums(25));

let n=prompt("Enter your score(0-100):")
if(n>=80 && n<=100){
    grade="A";
}
else if(n>=70){
    grade="B";
}
else if(n>=60){
    grade="C";
}
else if(n>=50){
    grade="D";
}
else if(n>=40){
    grade="F"
}
console.log("according to your score",n, "your grade is",grade);


