const userDetails = {
    fullName: "  Sarah Johnson  ",
    welcomeMsg: "   Welcome to the new platform! Hope you enjoy your experience.   ",

    displayDetails: function () {

        console.log("First character of full name:", this.fullName.trim().charAt(0));

        console.log("Total characters in welcome message:", this.welcomeMsg.length);

        console.log("First 15 characters using slice():",
            this.welcomeMsg.slice(0, 15));

        console.log("First 15 characters using substring():",
            this.welcomeMsg.substring(0, 15));

        console.log("Full name in uppercase:",
            this.fullName.toUpperCase());

        console.log("Welcome message in lowercase:",
            this.welcomeMsg.toLowerCase());

        console.log("Trimmed welcome message:",
            this.welcomeMsg.trim());

        console.log("Split full name:",
            this.fullName.trim().split(" "));

        console.log("Position of 'welcome':",
            this.welcomeMsg.toLowerCase().indexOf("welcome"));

        const combinedString = `${this.fullName.trim()} - ${this.welcomeMsg.trim()}`;
        console.log("Combined string:", combinedString);
    }
};

userDetails.displayDetails();