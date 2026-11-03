function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function geetGreeting(timeOfDay) {
    if (timeOfDay === "morning") {
        return "Good Morning"
    }
    else if (timeOfDay === "afternoon") {
        return "Good Afternoon"
    }
    else if (timeOfDay === "evening") {
        return "Good Evening"
    } 
}

function createGreeting(firstName, lastName, timeOfDay) {
    const greeting = greeting(timeOfDay);
    const name = formatName(firstName, lastName);
    return `${greeting}, ${name}`;
}
