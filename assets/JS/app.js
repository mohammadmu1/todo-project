function printArrayElemnts(arr){
    let l=arr.length
    for (let i =0; i<l ;i++){
        console.log(arr[i]);
    }
}


let arr =[];
confirmWelcoming=confirm("Do you  wants to skip the welcoming message.")


if(!confirmWelcoming){
    let name =prompt("please , Enter your name" , " ")
    arr.push(name)
    let gender =prompt("please , Enter your gender\nThe answer should be either (male or female).")
    while(true){
        if (gender =="male" || gender =="female"){
            break;
        }
        alert("The answer should be either (male or female).")
        gender =prompt("please , Enter your gender.")
        
    }
    arr.push(gender)


    let age = prompt("please , Enter your age")
    while(age<=0){
        alert("the age must be a number and greater than 0")
        age = prompt("please , Enter your age")
    }
    arr.push(age)

    let isHavinJob=confirm("do you have a job.")
    arr.push(isHavinJob)

    let isLoveCoding=confirm("do you have love coding.")
    arr.push(isLoveCoding)

    let isFreeToday=confirm("Are you free today.")
    arr.push(isFreeToday)
    
    if(gender=='male' ){
        alert("Welcome Mr " + name)
    }
    else  {
        alert("Welcome Ms " + name)
    }
    printArrayElemnts(arr)

}




