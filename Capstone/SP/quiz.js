let totalScore = 0;
var userName

function validateForm() {
        userName = document.getElementById("name").value;
		if (userName.trim() === "") 
		{
			alert("Please enter your name.");
			return;
		}
		
		document.querySelector(".Starter-Page").style.display = 'none';
		document.querySelector(".question-1").style.display = 'block';
}


function validateAnswer1() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.classList.contains("correct-1")) {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
    document.querySelector(".question-1").style.display = 'none';
	document.querySelector(".question-2").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer2() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.classList.contains("correct-2")) {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-2").style.display = 'none';
	document.querySelector(".question-3").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer3() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.classList.contains("correct-3")) {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-3").style.display = 'none';
	document.querySelector(".question-4").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer4() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.classList.contains("correct-4")) {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-4").style.display = 'none';
	document.querySelector(".question-5").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer5() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.classList.contains("correct-5")) {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-5").style.display = 'none';
	document.querySelector(".question-6").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer6() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    
	if (selectedOption.classList.contains("correct-6")) {
        totalScore += 1;
    }
	
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-6").style.display = 'none';
	document.querySelector(".question-7").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer7() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.classList.contains("correct-7")) {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-7").style.display = 'none';
	document.querySelector(".question-8").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer8() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.classList.contains("correct-8")) {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-8").style.display = 'none';
	document.querySelector(".question-9").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer9() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.classList.contains("correct-9")) {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-9").style.display = 'none';
	document.querySelector(".question-10").style.display = 'block';
	selectedOption.checked = false;
}


function validateAnswer10(nameInput) {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
	
	if (selectedOption.classList.contains("correct-10")) {
        totalScore += 1;
    }
    
    // If an answer is selected, proceed to the next question
	document.querySelector(".question-10").style.display = 'none';
	document.querySelector(".summary").style.display = 'block';
	
	/*document.getElementById('final-results').textContent = nameInput.value + " you got " + totalScore + " correct!";*/
	var finalResults = document.getElementById('final-results');
	finalResults.textContent = userName + "- your final score is: " + totalScore + " / 10";
}

/************************************	Other Javascript	************************************/
 
 window.addEventListener('beforeunload', function(event) {
    if (document.querySelector(".Starter-Page").style.display !== 'block') {
        // Cancel the event to prevent the browser from unloading the page
        event.preventDefault();
        // Chrome requires returnValue to be set
        event.returnValue = '';
        // Display a confirmation dialog
        var confirmationMessage = 'Are you sure you want to leave this page?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }
});
