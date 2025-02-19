function startGame() {
    let level = prompt("Choose difficulty level: easy - medium - hard", "medium");
    if (level === null) {alert('game ended!');return(false);} 
    let number, attempts;
    if (level === "easy") {
        number = 10;
        attempts = 10;
    } else if (level === "medium") {
        number = 20;
        attempts = 10;
    } else if (level === "hard") {
        number = 100;
        attempts = 20;
    } else {
        alert("Wrong choice, but you are going to play medium by default!");
        number = 20;
        attempts = 10;
    }

    number--;
    let x = 0;
    let test = false;
    let correct = 1 + Math.floor(Math.random() * number);

    while (x < attempts) {        
        let answer = prompt(`Choose a number between 1 and ${number + 1}`);
        if (answer==null){alert('game ended!');return(false);}

        answer = parseInt(answer);
        if (isNaN(answer) || answer < 1 || answer > number) {
            alert("Invalid answer?!");
            continue;
        }
        x++;
        if (answer < correct) {
            alert("Go bigger");
        } else if (answer > correct) {
            alert("Go lower");
        } else {
            alert("Correct!!!");
            test = true;
            break;
        }
    }

    if (!test) {
        alert(`Game over, the correct number was ${correct}!!!!`);  
    }

    let again = confirm("Do you want to play again?");
    if (again) {
        startGame();
    }
}
