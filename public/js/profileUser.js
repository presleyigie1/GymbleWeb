class userProfile {
    constructor(posts, matches, followers) {
        this.posts = posts;
        this.matches = matches;
        this.followers = followers;
    }
};

const previewProfile = new userProfile(3, 15, 25);

window.onload = function preview() {
    document.getElementById("posts").innerHTML = 
    currentProfile.posts;

    document.getElementById("matches").innerHTML = 
    currentProfile.matches;

    document.getElementById("followers").innerHTML = 
    currentProfile.followers;
    
};




//const currentProfile = new userProfile("Flyefit", "Swords");//change the name to pull from the database
//after the window loads, the function will run 
//the function would not work without this, as the js was called before the HTML was loaded

//emma connecting the profile page to the profile page 

/*class previewProfile {
    constructor(gym, gymLocation) {
        this.gym = gym;
        this.gymLocation = gymLocation;
    }
}

const previewProfile = new userProfile("GymPlus", "Swords");


/*emma's function for the profile page*/
/*window.onload = function preview() {
    document.getElementById("gym").innerHTML = 
    currentProfile.gym;

    document.getElementById("gymLocation").innerHTML = 
    currentProfile.gymLocation;
    
};

//need to get this to show in the preview profile page, and finish this and the settings page
*/
