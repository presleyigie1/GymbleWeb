class userProfile {
    constructor(name, posts, matches, followers) {
        this.name = name;
        this.posts = posts;
        this.matches = matches;
        this.followers = followers;
    }
}

const currentProfile = new userProfile("Emma", 6, 10, 23);//change the name to pull from the database

//after the window loads, the function will run 
//the function would not work without this, as the js was called before the HTML was loaded 
window.onload = function () {
    document.getElementById("userName").innerHTML = 
    currentProfile.name;

    document.getElementById("posts").innerHTML = 
    currentProfile.posts;

    document.getElementById("matches").innerHTML = 
    currentProfile.matches;

    document.getElementById("followers").innerHTML = 
    currentProfile.followers;
};