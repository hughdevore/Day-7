function slots(){
	var one = Math.round(Math.random() * (3 - 0) + 0);
	console.log(one)
	var two = Math.round(Math.random() * (3 - 0) + 0);
	console.log(two)
	var three = Math.round(Math.random() * (3 - 0) + 0);
	console.log(three)

	if (one === two && two === three) {
		console.log("You win!");
		window.alert("You win!");
	} else {
		console.log("You lose!");
		window.alert("You lose!");
	}
}
	
slots();
var answer = prompt("Wanna play again??");

console.log(answer);

while(answer != 'no') {
	slots()
	answer = prompt("Wanna play again??");
}


	// while (again === "yes") {
	// 			one = Math.round(Math.random() * (10 - 0) + 0);
	// 			two = Math.round(Math.random() * (10 - 0) + 0);
	// 			three = Math.round(Math.random() * (10 - 0) + 0);
	// 			}


