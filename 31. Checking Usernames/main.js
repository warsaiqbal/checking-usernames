var current_users = ["admin", "eric", "lorenzo", "thomas", "seline"];
var new_users = ["danny", "theo", "lorenzo", "thomas", "rebecca"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
