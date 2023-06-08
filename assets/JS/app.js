//Functions Part
function printArrayElemnts(arr){
    let l=arr.length
    for (let i =0; i<l ;i++){
        console.log(i +" : "+arr[i]);
    }
}

const yesNoQustion = (qustion) =>{

    let ans = prompt(qustion);

    if (ans === 'Yes' || ans === 'yes'||ans ==='YES'){
        return 'Yes';
    }
    else if (ans === 'No' || ans ==='no'||ans ==='NO'){
        return 'No';
    }
    else {
        return "invaled";
    }
}

const whatIsYourName = ()=>{
    return prompt("please , Enter your name" , " ")
}


const gender=()=>{
    let gender =prompt("please , Enter your gender\nThe answer should be either (male or female).")
    while(true){
        if (gender =="male" || gender =="female"){
            break;
        }
        alert("The answer should be either (male or female).");
        gender =prompt("please , Enter your gender.");
        
    }
    return gender;
}

const whatIsYourAge = ()=>{
    let age = prompt("please , Enter your age")
    while(age<=0){
        alert("the age must be a number and greater than 0")
        age = prompt("please , Enter your age")
    }
    return age;
}

function welcomngMessage(gender , name){
    if(gender=='male' ){
        alert("Welcome Mr " + name)
    }
    else  {
        alert("Welcome Ms " + name)
    }
}

//End of Functions Part


//main
let yesNoAnswers=[];


let confirmWelcoming=confirm("Do you  wants to skip the welcoming message.")
if(!confirmWelcoming){
    let name = whatIsYourName();
    let gender = gender();
    whatIsYourAge();
    welcomngMessage(gender , name );
    
}


let confirmNoreQustions=confirm("Do you  wants to skip more 3 qustions")
if(!confirmNoreQustions){
    yesNoAnswers.push(
        yesNoQustion("do you have a job.")
    )

    yesNoAnswers.push(
        yesNoQustion("do you have love coding.")
    )

    yesNoAnswers.push(
        yesNoQustion("Are you free today.")
    )
    printArrayElemnts(yesNoAnswers);
}
