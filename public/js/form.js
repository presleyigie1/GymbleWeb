//shows and hides login/sign up forms
/*function hideLog(){
    var hide = document.getElementById("signin");
    hide.style.display = 'none';
}

function showLog(){
    var show = document.getElementById("signin");
    show.style.display = 'block';
}

function hideSign(){
    var hide = document.getElementById("signup");
    hide.style.display = 'none';
}

function showSign(){
    var show = document.getElementById("signup");
    show.style.display = 'block';
}*/

/* animation for loading when switching forms
const form = [...document.querySelector('signin').children];

form.forEach((item, i ) => {
    setTimeout(()=> {
        item.style.opacity = 1;
    }, i*100)
})*/

//form validation



const fName = document.querySelector(".fName") || null
const lName = document.querySelector(".lName") 
const email = document.querySelector(".email") 
const age = document.querySelector(".age")
const password = document.querySelector(".password")
const submitBtn = document.querySelector(".submit-btn")



if(fName == null){ //it means the login page is open
    submitBtn.addEventListener("click", () =>{
        //using fetch to submit the form
        fetch('/login-user',{
            method: "post",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data =>{
            //displays the new registered users data in the console 
            console.log(data);
             validateData(data);
        })
    })

}
else{// means the register page is open
    submitBtn.addEventListener('click', () =>{
        //using fetch to submit the form
        fetch('/register-user',{
            method: "post",
            //header is created to json
            headers: new Headers({"Content-Type": "application/json"}),
            //passing in our values on the register page to json
            body: JSON.stringify({
                fName: fName.value,
                lName: lName.value,
                age: age.value,
                email: email.value,
                password: password.value
            })
        })
        //creatng response to json
        .then(res => res.json())
        //sending the data to our server.js file
        .then(data =>{
            //displays the new registered users data in the console 
            console.log(data);
            validateData(data);
        })
    })
    
}


const validateData = (data) =>{
    if(!data.fname){
        alertBox(data)
    }
    else{
        sessionStorage.fname = data.fname
        sessionStorage.age = data.age
        sessionStorage.name = data.email
        location.href = "/swipe";

    }
}

