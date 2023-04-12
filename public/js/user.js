//adds the name of the user at top right of the screen next to the log out button
const uName = document.querySelector(".uName")
const userName = document.querySelector(".userName")

window.onload = () =>{
    if(sessionStorage.fname){
        location.href = "/swipe"
    }
}

window.onload = () => {
    
    if(!sessionStorage.fname || !sessionStorage.age){
        location.href = "/login"
    }
    else{
        uName.innerHTML = `Hi ${sessionStorage.fname}` 
        userName.innerHTML = `${sessionStorage.fname}` + ", " + `${sessionStorage.age}`  
    }
}

const logOut = document.querySelector(".logout-btn")

//click on the log out button it will reload the page and clear the storage in the current session therefore logging
logOut.onclick = () =>{
    sessionStorage.clear()
    location.reload()
}

