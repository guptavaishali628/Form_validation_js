let check=()=>{
    let name=document.querySelector("#name")
    let num=document.querySelector("#num")
    let email=document.querySelector("#email")
    let pass=document.querySelector("#pass")
    let cpass=document.querySelector("#cpass")

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    if(name.value.trim()==""){
        errname.innerHTML="Please enter your name"
        name.style.borderColor="red"
        name.value=""
        return false
    }
    else if(num.value.trim()==""){
        errnum.innerHTML="Please enter your number"
        num.style.borderColor="red"
        num.value=""
        return false
    }
    else if(isNaN(num.value)){
        errnum.innerHTML="please enter only digit"
        num.style.borderColor="red"
        num.value=""
        return false
    }
    else if(num.value.length!=10){
        errnum.innerHTML="please enter 10 digit number"
        num.style.borderColor="red"
        num.value=""
        return false
    }
    else if( !(email.value=="" || email.value.includes("@") && email.value.includes(".com")) ){
        erremail.innerHTML="Please enter valid email"
        email.style.borderColor="red"
        email.value=""
        return false
    }
    else if (pass.value.trim()==""){
        errpass.innerHTML="Please enter your password"
        pass.style.borderColor="red"
        pass.value=""
        return false
    }
    else if (pass.value.length<8){
        errpass.innerHTML="Please enter password of min. 8 character"
        pass.style.borderColor="red"
        pass.value=""
        return false
    }
    else if(!(pass.value.match(/[1234567890]/) && pass.value.match(/[!@#$%&*()_+]/) && pass.value.match(/[A-Z]/) && pass.value.match(/[a-z]/)))
    {
        errpass.innerHTML="Please enter the strong password"
        pass.style.borderColor="red"
        pass.value=""
        return false
    }

    else if (pass.value!=cpass.value){
        errcpass.innerHTML="Please enter same password"
        cpass.style.borderColor="red"
        cpass.value=""
        return false
    }
}