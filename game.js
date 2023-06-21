let first_c = document.getElementById("1")
let second_c = document.getElementById("2")
let third_c = document.getElementById("3")
let fourth_c = document.getElementById("4")
let fifth_c = document.getElementById("5")

const colours = ["r", "b", "g", "w", "p"]
let cpu_guess = []

for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * colours.length);
    let item = colours[randomIndex];
    cpu_guess.push(item)
}

console.log(cpu_guess)

let user_guess = []

first_c.addEventListener("click", () => {
    user_guess.push(document.getElementById("first").value)
    user_guess.push(document.getElementById("second").value)
    user_guess.push(document.getElementById("third").value)
    console.log(user_guess)
    if (compare(user_guess, cpu_guess)[0] == 3) {
        alert("You win! You guessed it in " + (6 - document.getElementsByClassName("card").length) + " try.")
        while (user_guess.length > 0) {
            user_guess.pop();
        }

    }
    else {
        document.getElementById("card1").remove()
        alert("Bulls: " + compare(user_guess, cpu_guess)[0] + "\nCows" + compare(user_guess, cpu_guess)[1])
        while (user_guess.length > 0) {
            user_guess.pop();
        }
    }
})

second_c.addEventListener("click", () => {
    user_guess.push(document.getElementById("card2first").value)
    user_guess.push(document.getElementById("card2second").value)
    user_guess.push(document.getElementById("card2third").value)
    console.log(user_guess)
    if (compare(user_guess, cpu_guess)[0] == 3) {
        alert("You win! You guessed it in " + (6 - document.getElementsByClassName("card").length) + " tries.")
        while (user_guess.length > 0) {
            user_guess.pop();
        }
    }
    else {
        document.getElementById("card2").remove()
        alert("Bulls: " + compare(user_guess, cpu_guess)[0] + "\nCows" + compare(user_guess, cpu_guess)[1])
        while (user_guess.length > 0) {
            user_guess.pop();
        }
    }
})

third_c.addEventListener("click", () => {
    user_guess.push(document.getElementById("card3first").value)
    user_guess.push(document.getElementById("card3second").value)
    user_guess.push(document.getElementById("card3third").value)
    console.log(user_guess)
    if (compare(user_guess, cpu_guess)[0] == 3) {
        alert("You win! You guessed it in " + (6 - document.getElementsByClassName("card").length) + " tries.")
        window.location.replace("index.html");
        while (user_guess.length > 0) {
            user_guess.pop();
        }
    }
    else {
        document.getElementById("card3").remove()
        alert("Bulls: " + compare(user_guess, cpu_guess)[0] + "\nCows" + compare(user_guess, cpu_guess)[1])
        while (user_guess.length > 0) {
            user_guess.pop();
        }
    }
})

fourth_c.addEventListener("click", () => {
    user_guess.push(document.getElementById("card4first").value)
    user_guess.push(document.getElementById("card4second").value)
    user_guess.push(document.getElementById("card4third").value)
    console.log(user_guess)
    if (compare(user_guess, cpu_guess)[0] == 3) {
        alert("You win! You guessed it in " + (6 - document.getElementsByClassName("card").length) + " tries.")
        while (user_guess.length > 0) {
            user_guess.pop();
        }
        window.location.replace("index.html");
    }
    else {
        document.getElementById("card4").remove()
        alert("Bulls: " + compare(user_guess, cpu_guess)[0] + "\nCows" + compare(user_guess, cpu_guess)[1])
        while (user_guess.length > 0) {
            user_guess.pop();
        }
    }
})

fifth_c.addEventListener("click", () => {
    user_guess.push(document.getElementById("card5first").value)
    user_guess.push(document.getElementById("card5second").value)
    user_guess.push(document.getElementById("card5third").value)
    console.log(user_guess)
    if (compare(user_guess, cpu_guess)[0] == 3) {
        alert("You win! You guessed it in " + (6 - document.getElementsByClassName("card").length) + " tries.")
        while (user_guess.length > 0) {
            user_guess.pop();
        }
        window.location.replace("index.html");
    }
    else {
        document.getElementById("card5").remove()
        alert("You lost! Better luck next time.")
        while (user_guess.length > 0) {
            user_guess.pop();
        }
        window.location.replace("index.html");
    }
})

function compare(user_guess, cpu_guess) {
    let bull = 0
    let cow = 0
    for (let i = 0; i < cpu_guess.length; i++) {
        if (cpu_guess[i] == user_guess[i]) {
            bull++
        }
        else if ((cpu_guess[i] != user_guess[i]) && (cpu_guess.includes(user_guess[i]))) {
            cow++
        }
    }
    return [bull, cow]
}



