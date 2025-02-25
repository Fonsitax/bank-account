class User {
    constructor(username, password) {
        this._username = username;
        this._password = password;
        this._loggedIn = false;
        
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    login(inputPassword) {
            if (inputPassword === this._password) {
                this._loggedIn = true;
                console.log(`Hello, ${this._username}. You are logged in successfully.`);
            } else {
                console.log(`Hey, ${this._username}. Your password is incorrect. Try again!`);
            }
    }

    logout() {
        if (this._loggedIn) {
            this._loggedIn = false;
            console.log(`Goodbye, ${this._username}`);
        } else {
            console.log("You are logged out. Please log in.")
        }

    }
}

const user1 = new User("Fonni","securepassword");
user1.login("securepassword");
//user1.login("wrongpassword");
//user1.logout();