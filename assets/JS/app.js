confirmWelcoming=confirm("Do you  wants to skip the welcoming message.")
if(!confirmWelcoming){
    let name =prompt("please , Enter your name" , " ")
    
    let gender =prompt("please , Enter your gender\nThe answer should be either (male or female).")
    let age = prompt("please , Enter your age")
    while(age<=0){
        alert("the age must be a number and greater than 0")
        age = prompt("please , Enter your age")
    }
    
    
    
    if(gender=='male' || gender=='MALE'){
        alert("Welcome Mr " + name)
    }
    else if (gender=='female' || gender=='FEMALE'){
        alert("Welcome Ms " + name)
    }
    else 

    {
        alert("Welcome " + name)
    }

    
}



