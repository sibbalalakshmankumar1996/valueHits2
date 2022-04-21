let firstFormNameEl = document.getElementById("firstFormName");
let firstFormEmailEl = document.getElementById("firstFormEmail");
let firstFormNumberEl = document.getElementById("firstFormNumber");
let firstFormMessageEl = document.getElementById("firstFormMessage");

function validate11(){
    let firstInputValue = firstFormNameEl.value;
    console.log(firstInputValue);
    let firstNameRegEx = /^[a-zA-Z ]+$/;
    console.log(firstNameRegEx.test(firstInputValue));
    if (firstNameRegEx.test(firstInputValue) === true){
        return true;
    } 
    else{
        return false;
    }
}

function validate12(){
    let firstEmailValue = firstFormEmailEl.value;
    console.log(firstEmailValue);
    let firstEmailRegEx = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    console.log(firstEmailRegEx.test(firstEmailValue));
    if (firstEmailRegEx.test(firstEmailValue) === true){
        return true;
    } 
    else{
        return false;
    }
}

function validate13(){
    let firstNumericValue = firstFormNumberEl.value;
    console.log(firstNumericValue);
    let firstNumericRegEx = /^[6-9][0-9]{9}$/;
    console.log(firstNumericRegEx.test(firstNumericValue));
    if (firstNumericRegEx.test(firstNumericValue) === true){
        return true;
    } 
    else{
        return false;
    }
}

function validate14(){
    let firstMsgValue = firstFormMessageEl.value;
    console.log(firstMsgValue);
    let firstMsgRegEx = /^[a-zA-Z ]+$/;
    console.log(firstMsgRegEx.test(firstMsgValue));
    if (firstMsgRegEx.test(firstMsgValue) === true){
        return true;
    } 
    else{
        return false;
    }
}

function validateForm1(){
    let inf1 = validate11();
    let inf2 = validate12();
    let inf3 = validate13();
    let inf4 = validate14();
    return inf1 && inf2 && inf3 && inf4;

}

// 2nd form validation

let secondFormNameEl = document.getElementById("secondFormName");
let secondFormEmailEl = document.getElementById("secondFormEmail");
let secondFormNumberEl = document.getElementById("secondFormNumber");
let secondFormMessageEl = document.getElementById("secondFormMessage");

function validate21(){
    let inputValue = secondFormNameEl.value;
    console.log(inputValue);
    let nameRegEx = /^[a-zA-Z ]+$/;
    console.log(nameRegEx.test(inputValue));
    if (nameRegEx.test(inputValue) === true){
        return true;
    } 
    else{
        return false;
    }
}

function validate22(){
    let emailValue = secondFormEmailEl.value;
    console.log(emailValue);
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
    console.log(emailRegEx.test(emailValue));
    if (emailRegEx.test(emailValue) === true){
        return true;
    } 
    else{
        return false;
    }
}
function validate23(){
    let NumericValue = secondFormNumberEl.value;
    console.log(NumericValue);
    let numericRegEx = /^[6-9][0-9]{9}$/;
    console.log(numericRegEx.test(NumericValue));
    if (numericRegEx.test(NumericValue) === true){
        return true;
    } 
    else{
        return false;
    }
}

function validate24(){
    let msgValue = secondFormMessageEl.value;
    console.log(msgValue);
    let msgRegEx = /^[a-zA-Z ]+$/;
    console.log(msgRegEx.test(msgValue));
    if (msgRegEx.test(msgValue) === true){
        return true;
    } 
    else{
        return false;
    }
}

function validateForm(){
    let if1 = validate21();
    let if2 = validate22();
    let if3 = validate23();
    let if4 = validate24();
    return if1 && if2 && if3 && if4;

}

