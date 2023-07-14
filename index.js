document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const fname=document.getElementById("f-name").value
    const lname=document.getElementById("l-name").value
    const num=document.getElementById("num").value
    const mail=document.getElementById("mail").value
    const pass=document.getElementById("pass").value
    if(fname.length == 0){
        document.getElementById("fname").innerHTML=`* Enter first name *`
    }
    if(lname.length == 0){
        document.getElementById("lname").innerHTML=`* Enter last name *`
    }
    if(num.length !=10){
        document.getElementById("number").innerHTML=`* Enter valid mobile number *`
    }
    if(mail.length ==10){
        document.getElementById("email").innerHTML=`* Enter e-mail *`
    }
    if(pass.length <=8){
        document.getElementById("password").innerHTML=`* Enter the password greter then 8 char *`
    }
})