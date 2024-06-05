let current_users: string[] = ["admin", "eric", "lorenzo", "thomas", "seline"]

let new_users: string[] = ["danny", "theo", "lorenzo", "thomas", "rebecca"]

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

