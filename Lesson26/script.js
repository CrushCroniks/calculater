let numbers = document.querySelectorAll(".numbers")
let screen = document.querySelector(".screen")
let operations = document.querySelectorAll(".operation")
let equal = document.querySelector(".equal")
let e = document.querySelector(".clear")
let ec = document.querySelector(".clearall")

// 4
// "dsadads"
// "5"

// [
//     "Lyan",
//     "Kolovskiy",
//     "jggg"
// ]

// numbers[1]


// let pupil1 = [
//     "Igor",
//     "Lyan",
//     12,
    
// ]

// let pupil2 = {
//     name:'Igor',
//     sirname:'Lyan',
//     age:12,
//     syaHi(){
//         console.log("Hello, I'm ",this.name)
//     }
// }
// pupil2.name="Vladlen"
// pupil2.syaHi()


for(let i=0; i<numbers.length; i=i+1){
    numbers[i].addEventListener("click", click)
} 

for(let i= 0; i<operations.length; i=i+1){
    operations[i].addEventListener("click", operate)
}

equal.addEventListener("click", function(){
    let operates = ["+", "-", "*", "/"]
    if(!operates.includes(screen.value[screen.value.length-1])){
        screen.value = eval(screen.value)
    }
    else{
        screen.value = screen.value.slice(0, screen.value.length-1)
        screen.value = eval(screen.value)
    }
})

function operate(e){
    let button = e.target
    let operator = button.innerHTML
    if(screen.value != ""|| operator == "-"){
        let operates = ["+", "-", "*", "/"]
        if(!operates.includes(screen.value[screen.value.length-1])){
            screen.value += operator
        }
        
    }   

}

function click(e){
    let button = e.target
    let num = button.innerHTML
    if(num != "0")
        screen.value += num
        console.log("others")
    if(num == "0" && screen.value != ""){
        screen.value += num
        console.log("0")
    }
}

ec.addEventListener("click", clearall)

function clearall(){
    screen.value = ""
}

e.addEventListener("click", clear)

function clear(){
    screen.value = screen.value.slice(0, screen.value.length-1)
}

// //print message1 without parametres
// function message1(){
//     console.log('Hello')
// }

// message1()

// //print message2 with parameres

// function message2(message){
//     console.log("my message ",message)
// }

// message2("hello igor")
// message2("bye igor")

// //sum with two parametres

// function sum(count1,count2){
//     console.log(count1+count2)
// }

// sum(3,6)

