// show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = false;
// if(authenticated){
//     console.log("Show signout button");
// }else{
//     console.log("Show login option");
// }

authenticated ? console.log("SignOut Button") : console.log("Login");